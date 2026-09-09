# Pantalla: Carga de ECG

## Objetivo
Permitir al profesional seleccionar un electrocardiograma para analizar.

## Encabezado
Título:

**Nuevo análisis**

Descripción:

> Cargue un electrocardiograma para iniciar el análisis.

## Área de carga

Crear un componente drag & drop grande.

Texto:
> Arrastre un archivo aquí o seleccione desde su equipo.

Formato esperado:
- PDF

Para el prototipo, no es necesario procesar realmente el archivo.

## Estado vacío
Antes de cargar:
- icono de archivo;
- texto de ayuda;
- botón `Seleccionar ECG`.

## Estado con archivo cargado
Después de elegir un archivo ficticio:
- nombre: `ECG_demo_001.pdf`
- tipo: PDF
- tamaño ficticio: `1,8 MB`
- estado: `Listo para revisar`

Botón:
**Continuar**

## Nota
La carga puede ser completamente simulada. El archivo puede ser fijo o utilizar un selector que solo cambie el estado visual.
