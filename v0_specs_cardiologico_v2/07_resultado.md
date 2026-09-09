# Pantalla: Resultado del análisis

## Objetivo
Presentar de forma clara los hallazgos simulados inferidos desde el ECG.

Esta es la pantalla principal del prototipo.

## Encabezado
Título:

**Resultado del análisis**

Subtítulo:
> ECG_demo_001.pdf

Etiqueta muy visible:
> Resultados simulados

## Tarjeta 1 — Hipertrofia ventricular izquierda

Título:
**Hipertrofia ventricular izquierda**

Resultado de demostración:
**Patrones compatibles detectados**

Probabilidad simulada:
**82 %**

Mostrar indicador visual simple.

Texto breve:
> El modelo identifica patrones en el ECG asociados con hipertrofia ventricular izquierda.

No escribir que el paciente “tiene HVI” de forma definitiva.

## Tarjeta 2 — Potasio sérico

Título:
**Potasio sérico estimado**

Resultado ficticio:
**4,3 mmol/L**

Clasificación:
**Dentro de rango normal**

Opcional:
mostrar rango de referencia visual únicamente como ayuda de interfaz.

Aclaración:
> Valor simulado para validación del prototipo.

## Resumen conjunto

Mostrar una sección:

**Resumen del análisis**
- HVI: patrones compatibles
- Probabilidad HVI: 82 %
- Potasio estimado: 4,3 mmol/L
- Clasificación: normal

## Información del modelo
Mostrar en un bloque secundario colapsable:

- Modelo HVI: `HVI-ECG-v0`
- Modelo potasio: `K-ECG-v0`
- Versión: Demo
- Estado: Simulado

Las métricas pueden ser ficticias y deben estar marcadas como tales.

## Advertencia clínica
Caja visible:

> Estos resultados son simulados y representan una futura herramienta de apoyo a la decisión clínica. No constituyen un diagnóstico definitivo ni reemplazan la evaluación profesional o los estudios complementarios.

## Acciones
Botón principal:
**Analizar otro ECG**

Botón secundario:
**Volver al inicio**
