# Pantalla: Revisión del ECG cargado

## Objetivo
Permitir al profesional confirmar que el estudio correcto está listo antes de analizarlo.

## Encabezado
Título:

**ECG cargado**

Etiqueta:
> Datos simulados

## Información del archivo
Mostrar:
- Archivo: `ECG_demo_001.pdf`
- Fecha simulada del estudio: `21/08/2026`
- Estado: `Listo para análisis`

## Visualización
Mostrar una previsualización simple del ECG.

Puede ser:
- un placeholder de trazado;
- una representación gráfica simulada de 12 derivaciones;
- una imagen genérica sin datos identificatorios.

No debe mostrarse nombre, DNI ni historia clínica.

## Variables básicas simuladas
Mostrar solo si ayuda a validar la interfaz:

- Frecuencia ventricular: 72 lpm
- PR: 168 ms
- QRS: 104 ms
- QTc: 438 ms

## Acción principal
Botón:

**Analizar ECG**

Navega a `/analisis/procesando`.

## Acción secundaria
**Cambiar archivo**

Vuelve a la carga.
