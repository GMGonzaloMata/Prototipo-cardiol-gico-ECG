# Requisitos del prototipo v0

## Requisitos funcionales

### RF-01
El prototipo debe permitir al profesional cargar un electrocardiograma para su análisis.

### RF-02
El prototipo debe mostrar el electrocardiograma cargado y la información básica disponible del estudio.

### RF-03
El prototipo debe permitir iniciar el análisis del electrocardiograma mediante una acción visible para el usuario.

### RF-04
El prototipo debe representar visualmente el estado de procesamiento del ECG hasta la obtención del resultado.

### RF-05
El prototipo debe mostrar si el análisis identifica o no patrones compatibles con hipertrofia ventricular izquierda.

### RF-06
El prototipo debe mostrar una probabilidad asociada a la predicción de hipertrofia ventricular izquierda.

### RF-07
El prototipo debe mostrar una estimación del nivel de potasio sérico inferido a partir del electrocardiograma.

### RF-08
El prototipo debe clasificar de forma simple el nivel de potasio estimado, por ejemplo como bajo, normal o elevado.

### RF-09
El prototipo debe presentar en una misma pantalla los resultados de HVI y potasio.

### RF-10
El prototipo debe permitir consultar información básica del modelo utilizado, como versión y métricas generales de desempeño.

### RF-11
El prototipo debe permitir finalizar el análisis actual e iniciar la carga de un nuevo electrocardiograma.

## Requisitos no funcionales

### RNF-01 — Simulación
Los electrocardiogramas, resultados, probabilidades y valores de potasio deben ser ficticios o de demostración.

### RNF-02 — Usabilidad
La interfaz debe ser simple y estar orientada a un profesional médico.

### RNF-03 — Claridad clínica
Los resultados de HVI y potasio deben presentarse de forma diferenciada y fácil de interpretar.

### RNF-04 — Privacidad
El prototipo no debe utilizar ni mostrar datos personales reales.

### RNF-05 — Trazabilidad visual
Cada resultado debe poder asociarse con el ECG analizado y con el modelo simulado.

### RNF-06 — Advertencia clínica
La interfaz debe aclarar que los resultados son de apoyo a la decisión y no constituyen un diagnóstico definitivo.

### RNF-07 — Evolutividad
La estructura debe permitir incorporar nuevas variables o hallazgos sin modificar el flujo principal.
