# Pantalla: Procesamiento

## Objetivo
Representar de forma simple cómo el sistema procesa los documentos clínicos y mostrar el resultado de una ejecución.

No mostrar detalles técnicos como Celery, Redis, HMAC o nombres de librerías.

## Encabezado
Título: **Procesamiento de estudios**

Texto:
> Seguimiento de la preparación e integración de estudios clínicos.

Etiqueta:
> Datos de demostración

## Ejecución activa/simulada

Mostrar una tarjeta con:
- ID: `RUN-2026-0909-01`
- Estado: Finalizada
- Inicio: 09/09/2026 08:20
- Fin: 09/09/2026 09:08

## Etapas

Mostrar como stepper o lista de estados:

1. Detección de documentos
2. Clasificación
3. Extracción de información
4. Verificación
5. Seudonimización
6. Conformación de episodios

Todos pueden aparecer como completados para la demo.

## Métricas

- Detectados: 10.000
- Únicos: 9.980
- Aprobados: 9.720
- Duplicados: 20
- Cuarentena: 260

## Acciones

Botón principal:
- **Ver episodios generados**

Botón secundario:
- **Ver casos en cuarentena**

## Nota
No debe existir carga real de archivos ni ejecución real de procesamiento.
