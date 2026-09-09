# Pantalla: Lista de episodios

## Objetivo
Permitir al profesional consultar episodios clínicos seudonimizados y reconocer rápidamente cuáles son aptos para análisis.

## Encabezado
Título: **Episodios clínicos**

Descripción:
> Estudios vinculados dentro de una misma ventana temporal.

## Filtros simulados

- Buscar por ID de episodio
- Estado
- Estudios disponibles
- Fecha

No necesitan lógica real compleja; pueden funcionar visualmente.

## Tabla

Columnas:

- ID episodio
- Fecha ECG
- ECG
- Ecocardiograma
- Laboratorio
- Cinecoronariografía
- Estado
- Acción

Usar indicadores simples:
- Disponible
- No disponible

Estados:
- Apto para análisis
- Incompleto
- En revisión

## Ejemplo

`EP-00023 | 21/08/2026 | Sí | Sí | Sí | No | Apto para análisis | Ver`

## Acción
Al seleccionar **Ver**, navegar al detalle del episodio.

## Privacidad
No mostrar nombre, apellido, DNI, número de historia clínica ni dirección.
