# TRAMOS_TR_ROS

Calculadora de tramos en kilómetros para el troncal específico, pensada para calcular los KMS de las HR.

## 🧩 Descripción

Esta aplicación permite calcular los kilómetros totales recorridos entre distintas localidades, a partir de una tabla de tramos predefinidos obtenida del archivo `Tramos_Rosario.xlsx`.  
El usuario arma un tramo seleccionando una localidad de origen y luego agregando sucesivas localidades intermedias hasta el destino final, con la posibilidad de incluir viaje de ida y vuelta (round-trip).

La app funciona completamente del lado del cliente (HTML + JavaScript) y guarda el estado de trabajo en el navegador, evitando perder la información si se cierra la pestaña o se reinicia el equipo.

## 🚀 Funcionalidades principales

- Selección de **localidad de origen** desde una lista desplegable.
- Construcción de un **tramo** agregando localidades intermedias en orden.
- **Reordenar** localidades (subir/bajar en la lista).
- **Eliminar** localidades intermedias del tramo.
- Opción **Round-Trip** para agregar la distancia de regreso desde la última localidad hasta la localidad de origen.
- Cálculo de:
  - **KMS totales** del tramo.
  - **KMS entre cada par de localidades**.
- Visualización de:
  - Detalle por tramo (origen → destino + kms).
  - Ruta completa en texto.
- Menú principal con las opciones:
  - Crear Tramo  
  - Calcular Tramo  
  - Modificar Tramo  
  - Limpiar Tramo  
  - Salir
- **Persistencia en localStorage** hasta que el usuario decide limpiar el tramo o cambiar de navegador/equipo.
- Diseño responsive, usable tanto en **PC** como en **teléfono**.

## 🏗️ Estructura del proyecto

- `index.html`  
  Contiene la estructura de la interfaz (menú, páginas Crear/Calcular/Modificar/Limpiar) y los estilos CSS.

- `app.js`  
  Contiene toda la lógica de la aplicación:
  - Datos de tramos (ciudad1, ciudad2, kms) cargados desde el Excel.
  - Manejo de estado del tramo actual.
  - Cálculo de kilómetros.
  - Actualización del DOM.
  - Gestión de localStorage.


## 📦 Instalación y uso

1. Clonar el repositorio:

