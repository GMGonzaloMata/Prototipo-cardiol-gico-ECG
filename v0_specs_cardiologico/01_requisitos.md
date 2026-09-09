# Requisitos del prototipo v0

## Requisitos funcionales

### RF-01
El prototipo debe presentar una pantalla de inicio con un resumen del estado del sistema y accesos a las funciones principales.

### RF-02
El prototipo debe mostrar una pantalla de procesamiento con el estado de una ejecución simulada y cantidades de documentos procesados, aprobados, duplicados y en cuarentena.

### RF-03
El prototipo debe permitir navegar a una lista de episodios clínicos simulados identificados mediante códigos seudonimizados.

### RF-04
El prototipo debe mostrar, para cada episodio, los estudios disponibles, su fecha y hora cuando corresponda y la distancia temporal entre ellos.

### RF-05
El prototipo debe permitir acceder al detalle de un episodio y visualizar información simulada del electrocardiograma y de los estudios complementarios asociados.

### RF-06
El prototipo debe permitir navegar hacia una pantalla de resultado predictivo simulado para hipertrofia ventricular izquierda.

### RF-07
El resultado simulado debe mostrar una clasificación positiva o negativa, una probabilidad y métricas ficticias del modelo, identificadas claramente como datos de demostración.

### RF-08
El prototipo debe mostrar una advertencia que indique que la predicción es simulada, que corresponde a una herramienta de apoyo a la decisión y que no constituye un diagnóstico clínico.

### RF-09
El prototipo debe permitir consultar casos simulados en cuarentena junto con el motivo de revisión.

### RF-10
El prototipo debe permitir navegar entre todas las pantallas principales sin necesidad de implementar lógica de backend.

## Requisitos no funcionales

### RNF-01 — Simulación
Todos los pacientes, episodios y resultados predictivos utilizados en el prototipo deben ser ficticios.

### RNF-02 — Usabilidad
La interfaz debe ser simple y estar orientada a un profesional médico.

### RNF-03 — Claridad
La información del episodio, estudios asociados y resultado predictivo debe diferenciarse visualmente.

### RNF-04 — Consistencia
Las pantallas deben mantener estructura visual y navegación uniforme.

### RNF-05 — Privacidad
La maqueta no debe mostrar nombre, DNI ni otros datos reales de pacientes.

### RNF-06 — Trazabilidad visual
El resultado predictivo debe indicar qué episodio y qué objetivo clínico representa.

### RNF-07 — Evolutividad
La estructura debe permitir incorporar nuevas variables objetivo en versiones posteriores.
