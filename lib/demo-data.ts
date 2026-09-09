export const demoEcg = { fileName: "ECG_demo_001.pdf", date: "14 jun 2024 · 10:42", duration: "10 segundos", leads: "12 derivaciones", sampleRate: "500 Hz", patient: "Paciente demo 001" } as const

export const demoResult = { lvh: { label: "Patrones compatibles con HVI", probability: 0.78, classification: "Probabilidad moderada-alta", note: "El trazado presenta criterios compatibles con hipertrofia ventricular izquierda." }, potassium: { value: "5.1", unit: "mEq/L", classification: "Dentro del rango esperado", range: "3.5 – 5.5 mEq/L", note: "La estimación simulada se encuentra dentro del rango de referencia." } } as const

export const history = [{ date: "14 jun 2024 · 10:42", file: "ECG_demo_001.pdf", lvh: "Compatible", potassium: "5.1 mEq/L", status: "Completado" }, { date: "12 jun 2024 · 16:18", file: "ECG_demo_002.pdf", lvh: "No compatible", potassium: "4.3 mEq/L", status: "Completado" }, { date: "08 jun 2024 · 09:07", file: "ECG_demo_003.pdf", lvh: "Compatible", potassium: "5.6 mEq/L", status: "Completado" }] as const

export const processingSteps = ["Archivo recibido", "Señal ECG validada", "Modelos demo ejecutados", "Resultados preparados"] as const
