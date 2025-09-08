# 多语言系统使用指南

## 项目结构

```
src/
├── i18n/
│   ├── index.ts              # i18n 配置文件
│   ├── translationLoader.ts  # 动态翻译加载器
│   ├── devTools.ts          # 开发工具
│   └── README.md            # 使用指南
├── common/
│   ├── header/
│   │   ├── index.tsx
│   │   └── translations/
│   │       ├── header.en.json
│   │       └── header.zh.json
│   └── footer/
│       ├── index.tsx
│       └── translations/
│           ├── footer.en.json
│           └── footer.zh.json
└── components/
    └── LanguageSwitcher.tsx
```

## ✨ 动态加载系统

**无需手动配置！** 系统会自动扫描并加载所有符合以下模式的翻译文件：
- `**/translations/*.en.json` (英文翻译)
- `**/translations/*.zh.json` (中文翻译)

### 文件命名规范
- 翻译文件必须放在 `translations/` 文件夹中
- 文件名格式：`{组件名}.{语言}.json`
- 例如：`header.en.json`, `footer.zh.json`

## 如何添加新组件翻译

### 1. 创建翻译文件

在组件文件夹中创建 `translations` 文件夹，并添加语言文件：

```bash
src/components/MyComponent/
├── index.tsx
└── translations/
    ├── mycomponent.en.json
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

**无需手动配置！** 系统会自动检测并加载新的翻译文件。只要文件符合命名规范，就会自动生效。

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

使用 `LanguageSwitcher` 组件：

```tsx
import { LanguageSwitcher } from '../components/LanguageSwitcher';

export const MyComponent = () => {
  return (
    <div>
      <LanguageSwitcher />
    </div>
  );
};
```

## 可用的翻译键

### Header 翻译键
- `nav.home`, `nav.physicians`, `nav.faqs`, `nav.brochures`, `nav.conditions`, `nav.gallery`, `nav.contact`
- `contact.phone`, `contact.consultation`, `contact.address`, `contact.location`, `contact.hours`, `contact.closed`

### Footer 翻译键
- `about.title`, `about.description`, `about.learnMore`
- `contact.title`, `contact.address`, `contact.phone`, `contact.fax`, `contact.email`
- `gallery.title`, `gallery.description`
- `hours.title`, `hours.schedule.operationTimeRange`, `hours.schedule.closed`

## 添加新语言

1. 创建新的语言文件（如 `header.es.json`）
2. 在 `i18n/index.ts` 中导入并添加到 resources
3. 在 `LanguageSwitcher.tsx` 中添加新语言选项

## 开发工具

### 自动验证
在开发模式下，系统会自动：
- 扫描所有翻译文件
- 验证翻译完整性
- 在控制台显示加载状态

### 手动调试
```typescript
import { printLoadedComponents, validateAllTranslations } from './i18n/devTools';

// 打印所有已加载的组件
printLoadedComponents();

// 验证所有翻译
const validation = validateAllTranslations();
console.log('有效的组件:', validation.valid);
console.log('无效的组件:', validation.invalid);
```

## 最佳实践

1. **命名规范**: 翻译文件名应该与组件文件夹名相同
2. **键名规范**: 使用小写字母和点号分隔，如 `button.submit`
3. **嵌套结构**: 使用嵌套对象组织相关翻译
4. **后备语言**: 始终提供英文作为后备语言
5. **类型安全**: 考虑使用 TypeScript 类型定义翻译键
6. **文件组织**: 每个组件管理自己的翻译文件
7. **自动加载**: 利用动态加载系统，无需手动配置
