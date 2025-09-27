# Sidebar Component

A reusable sidebar component for displaying lists of selectable items.

## Features

- **Generic Type Support**: Works with any data type that extends `SidebarItem`
- **Customizable Styling**: Accepts custom className for additional styling
- **Interactive Selection**: Handles item selection with visual feedback
- **Responsive Design**: Built with Tailwind CSS for responsive layouts

## Usage

### Basic Usage

```tsx
import { Sidebar } from '../common/sidebar';

const MyPage = () => {
  const [selectedItem, setSelectedItem] = useState(items[0]);

  return (
    <Sidebar
      title="My Items"
      items={items}
      selectedItem={selectedItem}
      onItemSelect={setSelectedItem}
    />
  );
};
```

### With Custom Styling

```tsx
<Sidebar
  title="Services"
  items={services}
  selectedItem={selectedService}
  onItemSelect={setSelectedService}
  className="h-full"
/>
```

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `title` | `string` | ✅ | The title displayed at the top of the sidebar |
| `items` | `T[]` | ✅ | Array of items to display (must extend SidebarItem) |
| `selectedItem` | `T` | ✅ | Currently selected item |
| `onItemSelect` | `(item: T) => void` | ✅ | Callback when an item is selected |
| `className` | `string` | ❌ | Additional CSS classes |

## SidebarItem Interface

```tsx
interface SidebarItem {
  id: string;
  name: string;
  subtitle?: string;
  [key: string]: any; // Allow additional properties
}
```

## Examples

### Services Page
```tsx
const services = [
  { id: 'acupuncture', name: 'Acupuncture', subtitle: 'Traditional Treatment' },
  { id: 'cupping', name: 'Cupping Therapy', subtitle: 'Pain Relief' },
  { id: 'herbs', name: 'Herbal Medicine', subtitle: 'Natural Healing' },
];

<Sidebar
  title="Our Services"
  items={services}
  selectedItem={selectedService}
  onItemSelect={setSelectedService}
/>
```

### Conditions Page
```tsx
const conditions = [
  { id: 'pain', name: 'Chronic Pain', subtitle: 'Back, Neck, Joint' },
  { id: 'stress', name: 'Stress & Anxiety', subtitle: 'Mental Health' },
  { id: 'digestive', name: 'Digestive Issues', subtitle: 'Gut Health' },
];

<Sidebar
  title="Conditions We Treat"
  items={conditions}
  selectedItem={selectedCondition}
  onItemSelect={setSelectedCondition}
/>
```
