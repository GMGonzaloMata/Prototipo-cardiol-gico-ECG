# Pantalla: Procesamiento simulado

## Objetivo
Comunicar al usuario que el ECG está siendo analizado.

## Encabezado
Título:

**Analizando electrocardiograma**

Texto:
> El sistema está procesando el ECG y evaluando los modelos disponibles.

## Indicador
Usar:
- spinner;
- barra de progreso;
- pasos simples.

## Pasos visibles

1. Verificando ECG
2. Procesando señal
3. Evaluando HVI
4. Estimando potasio
5. Preparando resultados

## Comportamiento
La pantalla puede avanzar automáticamente después de algunos segundos hacia `/analisis/resultado`.

No ejecutar ningún modelo real.

## Evitar
No mostrar:
- nombres de algoritmos;
- librerías;
- arquitectura de IA;
- pipeline de anonimización;
- detalles de infraestructura.
