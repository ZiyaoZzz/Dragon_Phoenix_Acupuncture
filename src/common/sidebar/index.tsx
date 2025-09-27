import { useTranslation } from 'react-i18next';

export interface SidebarItem {
  id: string;
  name: string;
  subtitle?: string;
  [key: string]: unknown;
}

interface SidebarProps<T extends SidebarItem> {
  title?: string;
  items: T[];
  selectedItem: T;
  onItemSelect: (item: T) => void;
  className?: string;
}

export const Sidebar = <T extends SidebarItem>({
  title,
  items,
  selectedItem,
  onItemSelect,
  className = "",
}: SidebarProps<T>) => {
  const { t } = useTranslation('sidebar');
  
  const displayTitle = title || t('title');
  
  const getTranslatedName = (item: T) => {
    const translatedName = t(`doctors.${item.id}.name`, { defaultValue: item.name });
    return translatedName === `doctors.${item.id}.name` ? item.name : translatedName;
  };

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      <h2 className="text-xl font-bold text-brand-primary mb-4">{displayTitle}</h2>
      <div className="space-y-2">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onItemSelect(item)}
            className={`w-full text-left p-3 rounded-md transition-colors duration-200 ${
              selectedItem.id === item.id
                ? 'bg-brand-primary text-white'
                : 'hover:bg-gray-100 text-gray-700'
            }`}
          >
            <div className="font-medium">{getTranslatedName(item)}</div>
          </button>
        ))}
      </div>
    </div>
  );
};
