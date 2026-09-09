# Prompt inicial para v0

Construí un prototipo v0 navegable para un sistema de apoyo cardiológico.

Usá todos los archivos `.md` adjuntos como fuente principal de especificación.

El flujo central que debe representar la aplicación es:

**Profesional carga un ECG → el sistema simula el análisis mediante IA → devuelve resultado de hipertrofia ventricular izquierda y estimación de potasio sérico.**

Este prototipo NO debe implementar:
- backend real;
- base de datos real;
- modelo de IA real;
- pipeline real de anonimización;
- procesamiento clínico real;
- datos reales de pacientes.

Todos los resultados deben ser simulados y claramente identificados como tales.

La aplicación debe incluir como mínimo:
1. pantalla inicial;
2. carga de ECG;
3. revisión del ECG cargado;
4. procesamiento simulado;
5. pantalla conjunta de resultados HVI + potasio;
6. opción para iniciar un nuevo análisis.

La pantalla de resultados es la más importante. Debe permitir comprender rápidamente:
- si se detectan patrones compatibles con HVI;
- la probabilidad simulada;
- el nivel estimado de potasio;
- la clasificación del potasio;
- que se trata de una herramienta de apoyo a la decisión clínica.

No conviertas el sistema en un dashboard del pipeline de preparación de datos. El pipeline técnico es una parte interna del proyecto y no forma parte del flujo clínico principal a validar.

No inventes funcionalidades que no estén definidas en las specs.

Priorizá una interfaz sobria, médica, clara y fácil de validar con un profesional del Instituto de Cardiología de Corrientes.
