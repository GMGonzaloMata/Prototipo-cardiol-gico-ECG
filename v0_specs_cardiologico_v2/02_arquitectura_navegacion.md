# Arquitectura de navegación

## Navegación principal

La aplicación puede tener una navegación simple con:

- Inicio
- Nuevo análisis
- Historial simulado

El historial puede existir únicamente como apoyo visual y no requiere persistencia real.

## Rutas sugeridas

- `/` → Inicio
- `/nuevo-analisis` → Carga de ECG
- `/analisis/ecg-cargado` → Revisión del estudio cargado
- `/analisis/procesando` → Procesamiento simulado
- `/analisis/resultado` → Resultados
- `/historial` → Historial ficticio de análisis

## Flujo principal

`Inicio → Nuevo análisis → Cargar ECG → Revisar ECG → Analizar → Procesando → Resultado`

## Flujo posterior

Desde Resultado:
- `Nuevo análisis`
- `Volver al inicio`

## Reglas
- No mostrar procesamiento técnico del pipeline de anonimización.
- No mostrar episodios multimodales como flujo principal.
- No mostrar cuarentena documental.
- El centro del producto es el análisis de un ECG individual.
