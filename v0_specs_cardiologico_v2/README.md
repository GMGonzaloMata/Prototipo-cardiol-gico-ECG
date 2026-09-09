# Specs — Prototipo v0 · Flujo ECG → IA → Resultados

## Objetivo
Construir una maqueta navegable de baja fidelidad para validar con el referente institucional el flujo principal del sistema de apoyo cardiológico.

El prototipo representa este flujo:

**Carga de ECG → Procesamiento simulado → Resultado de HVI + Estimación de potasio**

## Alcance
El prototipo:
- no implementa backend real;
- no utiliza datos reales de pacientes;
- no ejecuta un modelo de inteligencia artificial real;
- no ejecuta el pipeline real de preparación o anonimización;
- utiliza información ficticia o simulada para representar el comportamiento esperado.

## Usuario principal
Profesional médico del Instituto de Cardiología de Corrientes.

## Objetivo de validación
Validar:
- si el flujo de carga y análisis resulta comprensible;
- si la información mostrada después del análisis es útil;
- si HVI y potasio se presentan de forma clara;
- si la navegación es adecuada;
- si la interfaz puede evolucionar para incorporar nuevos hallazgos.

## Flujo principal
1. Inicio
2. Cargar ECG
3. Revisar ECG cargado
4. Iniciar análisis
5. Procesamiento simulado
6. Ver resultados
7. Iniciar nuevo análisis

## Principio central
La interfaz debe centrarse en el uso clínico del sistema. El pipeline técnico de preparación de datos no forma parte del flujo principal visible en este prototipo.
