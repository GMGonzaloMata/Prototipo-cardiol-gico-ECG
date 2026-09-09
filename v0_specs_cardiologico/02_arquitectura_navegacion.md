# Arquitectura de navegación

## Navegación principal

Usar una barra lateral fija con estas opciones:

- Inicio
- Procesamiento
- Episodios
- Cuarentena

En la parte inferior:
- Información del prototipo
- Usuario simulado

## Rutas sugeridas

- `/` → Dashboard
- `/procesamiento` → Procesamiento
- `/episodios` → Lista de episodios
- `/episodios/[id]` → Detalle de episodio
- `/episodios/[id]/resultado` → Resultado predictivo
- `/cuarentena` → Casos en cuarentena

## Flujo principal

`Dashboard → Episodios → Detalle de episodio → Analizar ECG → Resultado predictivo`

## Flujo secundario

`Dashboard → Procesamiento → Ver cuarentena → Cuarentena`

## Reglas de navegación

- Siempre debe existir una forma clara de volver a la pantalla anterior.
- El breadcrumb puede utilizarse en vistas de detalle.
- El usuario no debe perder contexto del episodio al ir al resultado predictivo.
- No implementar autenticación real.
