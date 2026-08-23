# FormModal Component

Formulario modal reutilizable con un sistema visual fijo (fondo superior blanco, cuerpo gris inferior). Diseñado para portar un patrón visual consistente permitiendo configurar únicamente el contenido, los campos y una mínima identidad de marca, en lugar de ser un framework universal de formularios.

## ¿Qué hace?

Renderiza un modal con overlay oscuro que bloquea el scroll de la página. El modal se estructura en:
- **Header (blanco)**: Un título grande compuesto por un prefijo y una palabra destacada con un color de acento.
- **Cuerpo (gris)**: Un párrafo descriptivo opcional y un formulario estructurado en un grid de CSS (1 o 2 columnas). 
- **Botón de acción**: Alineado a la derecha, con estilos de borde que coinciden con el color de acento.

---

## Props — `FormModalProps`

| Prop | Tipo | Requerido | Default | Descripción |
|------|------|-----------|---------|-------------|
| `isOpen` | `boolean` | **Sí** | — | Estado de apertura del modal. |
| `onClose` | `() => void` | **Sí** | — | Handler para cerrar el modal (Esc, click afuera, botón ✕). |
| `titlePrefix` | `string` | **Sí** | — | Primera parte del título en texto regular. Ej: `"Solicitar"`. |
| `titleHighlight` | `string` | **Sí** | — | Segunda parte del título que se resalta con el `accentColor`. Ej: `"Presupuesto"`. |
| `description` | `React.ReactNode` | No | — | Texto debajo del título. Puede contener `<br>`. |
| `fields` | `FormField[]` | **Sí** | — | Definición de los campos del formulario. |
| `accentColor` | `AccentColor` | No | `'red'` | Color para el `titleHighlight` y el botón (bordes/textos). Opciones: `'red'`, `'blue'`, `'emerald'`, `'amber'`, `'slate'`, `'purple'`. |
| `fieldTextColor` | `string` | No | `'text-gray-800'` | Color Tailwind para las etiquetas (labels) del formulario. |
| `fileIcon` | `React.ElementType` | No | `Paperclip` | Componente de ícono (ej. de Lucide) a mostrar en los campos tipo `file`. |
| `submitText` | `string` | No | `'Enviar'` | Texto del botón de llamado a la acción. |
| `onSubmit` | `(e: React.FormEvent) => void` | **Sí** | — | Handler que recibe el evento estándar de envío. El componente no procesa datos. |

---

## Interfaz `FormField`

El formulario no soporta campos complejos (selects, datepickers, etc.) para mantener la fidelidad visual y simpleza.

```tsx
export type FormFieldType = 'text' | 'email' | 'tel' | 'file' | 'textarea';

export interface FormField {
  name: string;
  label: string;
  type: FormFieldType;
  placeholder?: string;
  accept?: string;      // Ej: 'image/jpeg,image/png' (solo tipo file)
  rows?: number;        // (solo tipo textarea)
  fullWidth?: boolean;  // Obliga al campo a ocupar el 100% del ancho del grid
}
```

> [!NOTE]
> **Campos de ancho completo**: Por defecto, el grid es de 2 columnas en desktop. Si el campo es `type="textarea"`, `type="file"` o tiene `fullWidth: true`, ocupará automáticamente ambas columnas.

---

## Qué partes son inmutables en este diseño

Para mantener la calidad visual del diseño portado, las siguientes propiedades **no se exponen como props** y permanecen encapsuladas en el componente:
- **Métricas espaciales**: Paddings de cabecera (`pt-10 pb-6`) y cuerpo (`py-8`). Dimensiones del grid y márgenes entre inputs.
- **Grises del UI**: El fondo `#e8e8e8` y el color de los inputs `#d8d8d8`.
- **Interacciones de Inputs**: Los estados `:focus` (borde sutil gris) de los inputs textuales y textarea.
- **Tipografía estructural**: Tamaños de fuente (`text-[2.6rem]` en título, `text-[11px]` en labels), grosores y trackings.
- **Funcionalidad del campo de archivo**: El input `type="file"` nativo siempre está superpuesto invisiblemente. El botón de interfaz expuesto maneja internamente la actualización de UI para mostrar el nombre del fichero seleccionado.

## Ejemplo Básico

```tsx
<FormModal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  titlePrefix="Agendar"
  titleHighlight="Demo"
  accentColor="blue"
  fields={[
    { name: 'empresa', label: 'Empresa', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' }
  ]}
  onSubmit={(e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log(data.get('email'));
  }}
/>
```
