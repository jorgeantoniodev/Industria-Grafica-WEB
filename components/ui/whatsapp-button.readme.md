# WhatsAppButton Component

Componente flotante (fijo en la esquina inferior) que renderiza el botón circular oficial de WhatsApp, abriendo `wa.me` con un número y mensaje de manera accesible y consistente.

## API — `WhatsAppButtonProps`

| Prop | Tipo | Requerido | Default | Descripción |
|------|------|-----------|---------|-------------|
| `phoneNumber` | `string` | **Sí** | — | Número de teléfono en formato internacional (solo números). Ej: `"5493514597594"`. |
| `message` | `string` | No | — | Mensaje que aparecerá prellenado en el chat. El componente se encarga del `encodeURIComponent`. |
| `ariaLabel` | `string` | No | `"Contactar por WhatsApp"` | Texto para lectores de pantalla. |
| `position` | `'bottom-right' \| 'bottom-left'` | No | `'bottom-right'` | Posicionamiento fijo en la pantalla (esquina inferior). |

## Inmutabilidad

Por decisión de diseño:
- El color **verde oficial de WhatsApp (`#25D366`)** y su respectiva sombra están fijos dentro del componente, ya que son atributos de la propia plataforma, no del branding del proyecto que lo consume.
- Animaciones de *hover/scale* y el ícono SVG también permanecen encapsulados.
