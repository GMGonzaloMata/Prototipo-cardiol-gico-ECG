# Pantalla: Dashboard

## Objetivo
Dar al usuario una visión general del sistema y permitir acceder rápidamente a los flujos principales.

## Encabezado
Título: **Panel clínico**

Subtítulo:
> Resumen del procesamiento y episodios disponibles para análisis.

Mostrar una etiqueta visible:
> Prototipo v0 — Datos simulados

## Tarjetas de resumen

Mostrar 4 tarjetas:

1. **Documentos procesados**
   - Valor: `10.000`

2. **Episodios conformados**
   - Valor ficticio: `2.430`

3. **Casos en cuarentena**
   - Valor: `260`

4. **Episodios aptos para análisis**
   - Valor ficticio: `1.985`

## Bloque "Última ejecución"
Mostrar:
- Estado: Finalizada
- Fecha: 09/09/2026
- Documentos: 10.000
- Aprobados: 9.720
- Duplicados: 20
- Cuarentena: 260

Botón: **Ver procesamiento**

## Bloque "Episodios recientes"
Tabla con 4 o 5 episodios simulados.

Columnas:
- ID de episodio
- Fecha
- Estudios disponibles
- Estado
- Acción

Estados:
- Apto para análisis
- Incompleto
- En revisión

Acción:
- **Ver episodio**

## Criterio de aceptación
Desde esta pantalla el usuario debe poder llegar a Procesamiento, Episodios y Cuarentena en un clic.
