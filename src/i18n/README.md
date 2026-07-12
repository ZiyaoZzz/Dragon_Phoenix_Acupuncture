# 多语言系统使用指南

## 项目结构

```
src/
├── i18n/
│   ├── index.ts              # i18n 配置 + 动态翻译加载（唯一的文件）
│   └── README.md             # 使用指南
└── common/
    ├── header/
    │   ├── index.tsx
    │   └── translations/
    │       ├── header.en.json
    │       ├── header.es.json
    │       └── header.zh.json
    ├── footer/
    │   ├── index.tsx
    │   └── translations/
    │       ├── footer.en.json
    │       ├── footer.es.json
    │       └── footer.zh.json
    └── LanguageSwitcher/
        └── LanguageSwitcher.tsx
```

## ✨ 动态加载系统

**无需手动配置！** `src/i18n/index.ts` 用
`import.meta.glob('../**/translations/*.json', { eager: true })`
在构建时自动扫描并加载所有符合以下模式的翻译文件：
- `**/translations/*.en.json` (英文翻译)
- `**/translations/*.es.json` (西班牙语翻译)
- `**/translations/*.zh.json` (中文翻译)

### 文件命名规范
- 翻译文件必须放在 `translations/` 文件夹中
- 文件名格式：`{命名空间}.{语言}.json`
- 命名空间就是 `useTranslation('命名空间')` 或 `t('命名空间:key')` 里用到的那个名字，
  通常和组件文件夹名一致（但不强制），例如：`header.en.json`, `footer.zh.json`

## 如何添加新组件翻译

### 1. 创建翻译文件

在组件文件夹中创建 `translations` 文件夹，并添加三种语言的文件（en / es / zh 三个都要建，
否则该语言下会 fallback 到英文）：

```bash
src/common/MyComponent/
├── index.tsx
└── translations/
    ├── mycomponent.en.json
    ├── mycomponent.es.json
    └── mycomponent.zh.json
```

### 2. 翻译文件格式

**mycomponent.en.json:**
```json
{
  "title": "My Component",
  "description": "This is a description",
  "button": {
    "submit": "Submit",
    "cancel": "Cancel"
  }
}
```

**mycomponent.zh.json:**
```json
{
  "title": "我的组件",
  "description": "这是一个描述",
  "button": {
    "submit": "提交",
    "cancel": "取消"
  }
}
```

### 3. 自动加载 ✨

**无需手动配置！** 只要文件符合命名规范，重启 `npm run dev`（或下次构建）时就会自动生效，
不需要在 `i18n/index.ts` 里手动 import。

### 4. 在组件中使用

```tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

export const MyComponent: React.FC = () => {
  const { t } = useTranslation('mycomponent');

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
      <button>{t('button.submit')}</button>
      <button>{t('button.cancel')}</button>
    </div>
  );
};
```

## 语言切换器

使用 `LanguageSwitcher` 组件（位于 `src/common/LanguageSwitcher/`）：

```tsx
import { LanguageSwitcher } from '../../common/LanguageSwitcher/LanguageSwitcher';

export const MyComponent = () => {
  return (
    <div>
      <LanguageSwitcher />
    </div>
  );
};
```

语言选择会缓存到 `localStorage`（key: `i18nextLng`），下次访问自动沿用。未缓存时按浏览器语言
检测（`es`→西班牙语，`zh`→中文，其余一律回退到英文）。

## 添加新语言

新增语言（例如法语 `fr`）需要改三处代码，而不只是加翻译文件：

1. 给每个用到的 namespace 建 `xxx.fr.json`
2. 在 `src/i18n/index.ts` 里，把 `['en', 'zh', 'es']` 的两处白名单加上 `'fr'`
   （一处是 glob 扫描时的语言过滤，一处是 `detection.convertDetectedLanguage`）
3. 在 `LanguageSwitcher.tsx` 的 `languages` 数组里加一项

## 最佳实践

1. **命名规范**: 翻译文件名应该与组件文件夹名相同
2. **键名规范**: 使用小写字母和点号分隔，如 `button.submit`
3. **嵌套结构**: 使用嵌套对象组织相关翻译
4. **后备语言**: 三种语言（en/es/zh）都要提供，缺失的语言会 fallback 到英文，但不会报错——
   容易漏翻译却发现不了，改完文案后建议三个语言文件都过一遍
5. **文件组织**: 每个组件/页面管理自己的翻译文件，不要塞进别的 namespace
