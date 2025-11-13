# Video 
### Youtube
[https://youtu.be/xPVpsluEFic
](https://youtu.be/plnZGcBibGc)
### Drive
https://drive.google.com/drive/folders/1AB7O4ztr0APAWTE8gb-quAN2UWq6TAND?hl=es

### Resumen de los Pasos Realizados en el Proyecto

#### **Paso 1: Fork del Repositorio**

* Se comenzó con el **fork** del repositorio original **`cypress-io/cypress-realworld-app`** para tener una copia en tu cuenta de GitHub.
* **Imagen del Repositorio**: <img width="1900" height="687" alt="image" src="https://github.com/user-attachments/assets/dbece4fe-b315-47ee-b9d1-9b36a75d4808" />

#### **Paso 2: Clonación del Repositorio**

* Después de realizar el **fork**, el siguiente paso fue clonar el repositorio a tu máquina local usando el comando `git clone`.

  ```bash
  git clone https://github.com/TU_USUARIO/cypress-realworld-app.git
  ```

* Esto permitió tener una copia local del repositorio para poder trabajar en él.

<img width="1906" height="742" alt="image" src="https://github.com/user-attachments/assets/d5c6a783-1eb9-4b48-9739-c91ba2db3ed7" />

#### **Paso 3: Instalación de Dependencias**

* Se ejecutó `npm install --legacy-peer-deps` para instalar las dependencias necesarias para el proyecto, ya que algunas dependencias requerían versiones específicas de otros paquetes y no era posible instalarlas con `npm install` por defecto.

  **Imagen de Instalación de Dependencias**:
  ![Imagen](https://github.com/user-attachments/assets/d9ff9edd-9e14-4657-aa5a-047e414111fb)

#### **Paso 4: Ejecutar Pruebas Locales**

* Se ejecutaron las pruebas locales para asegurarse de que todo estuviera funcionando correctamente. Esto incluye pruebas unitarias y pruebas con **Cypress**.

  **Imagen de Resultados de las Pruebas**:
  ![Imagen](https://github.com/user-attachments/assets/d069ea76-a632-4c77-adac-db5a5015a994)

#### **Paso 5: Creación del Workflow `ci.yml`**

* Se creó el archivo `ci.yml` en la carpeta **`.github/workflows/`** para configurar el pipeline de **CI/CD**. Este archivo contiene los pasos necesarios para ejecutar los tests y analizar el código en **SonarCloud**.

  **Imagen de Workflow `ci.yml`**:
  ![Imagen](https://github.com/user-attachments/assets/508a3536-6ebd-4601-854f-20c31e1f2a1d)

* Configuracion de `ci.yml` 
  <img width="812" height="728" alt="image" src="https://github.com/user-attachments/assets/04a065fe-508c-4dec-96a4-4e92a61ea3fc" />

#### **Paso 6: Configuración de SonarCloud en GitHub**

* Se configuró **SonarCloud** en **GitHub Secrets** para que el token de **SonarCloud** estuviera disponible durante la ejecución del pipeline.

  **Pasos**:

  * Fuiste a **Settings → Secrets** y creaste un nuevo **secreto** llamado `SONAR_TOKEN` donde pegaste el token generado en SonarCloud.
* Github Settings

<img width="257" height="586" alt="image" src="https://github.com/user-attachments/assets/88924540-3028-4198-ac5d-092225015a8f" />

* Presionar en new secrets 
<img width="1522" height="783" alt="image" src="https://github.com/user-attachments/assets/5a48d098-19d3-429a-a8a6-b5872b761b72" />


  **Imagen de Configuración del Secret**:
  ![Imagen](https://github.com/user-attachments/assets/0096c3df-8eb8-4f89-a6f0-e5caf7df58c5)

    **Value el Token**:
  <img width="1041" height="548" alt="image" src="https://github.com/user-attachments/assets/96b828c7-2407-48c8-87ef-5b0d19216500" />

#### **Paso 7: Generación del Token en SonarCloud**

* Fuiste a **SonarCloud** para generar un nuevo token que sería usado por el pipeline de GitHub Actions. Este token se usa para autenticar las acciones y permitir que SonarCloud analice el código.

  **Imagen de SonarCloud**:
  ![Imagen](https://github.com/user-attachments/assets/e5e4f662-613c-4f59-b9f8-2a409b79f50a)

  **Apartado de seguridad**:
  <img width="1187" height="596" alt="image" src="https://github.com/user-attachments/assets/4f50c310-7093-4319-8927-882f5a7e9aed" />

    **Generar Tokens**:
    <img width="1182" height="757" alt="image" src="https://github.com/user-attachments/assets/7c2c1ca5-43cc-4f45-90a7-0ecbb96d76d8" />
    
#### **Paso 8: Actualización de `ci.yml` para Incluir SonarCloud**

* En el archivo `ci.yml`, agregaste el paso para ejecutar el análisis en **SonarCloud** después de los tests. El token se utiliza de la siguiente manera:

  ```yaml
  - name: SonarCloud Scan
    uses: SonarSource/sonarcloud-action@v1
    with:
      organization: santiago-rueda-q  # Reemplaza con tu organización en SonarCloud
      token: ${{ secrets.SONAR_TOKEN }}
  ```

  **Imagen de Configuración de SonarCloud en `ci.yml`**:
  ![Imagen](https://github.com/user-attachments/assets/852f281c-59dc-4d04-8eba-ce98e891c28e)

#### **Paso 9: Implementación del Page Object `LoginPage.js`**

* Se creó el **Page Object** en el archivo **`cypress/pages/LoginPage.js`**. Este archivo encapsula las interacciones con la página de login, lo que facilita la reutilización del código en múltiples pruebas.

  **Imagen del `LoginPage.js`**:
  ![Imagen](https://github.com/user-attachments/assets/b63617bb-785c-4359-9156-2550ffe20bbf)

#### **Paso 10: Escribir el Test E2E en `custom-flow.spec.ts`**

* Se escribió un **test E2E** que simula el flujo completo de un usuario, como iniciar sesión, llenar formularios y navegar por la aplicación. Este test se encuentra en el archivo **`cypress/tests/ui/custom-flow.spec.ts`**.

  **Imagen del `custom-flow.spec.ts`**:
  ![Imagen](https://github.com/user-attachments/assets/0f9de90f-bd7a-4e0b-bc29-7f6dff5c0bba)

#### **Paso 11: Push de los Cambios al Repositorio**

* Después de realizar todos los cambios necesarios, se hicieron **commit** y **push** de los archivos al repositorio en **GitHub**. Esto incluye los cambios en `ci.yml`, `LoginPage.js`, y el nuevo test E2E.

  **Imagen del Push**:
  ![Imagen](https://github.com/user-attachments/assets/7796148f-f4f3-44e4-94d0-cfb1914ca483)

#### **Paso 12: Verificación del Pipeline en GitHub Actions**

* Después de hacer **push** a los cambios, se verificó que el pipeline de **GitHub Actions** se ejecutara correctamente.
* **Verificación en la pestaña Actions** de GitHub para asegurar que los tests y el análisis de SonarCloud se ejecutaran correctamente.

  **Imagen de Actions**:
  ![Imagen](https://github.com/user-attachments/assets/4d40a5be-00e9-4640-b24e-466389d64748)

---

### **Resumen de lo que se hizo:**

1. **Fork y clonación del repositorio**: Clonamos el repositorio de `cypress-io/cypress-realworld-app` a tu cuenta.
2. **Instalación de dependencias**: Usamos `npm install --legacy-peer-deps` para instalar todas las dependencias necesarias para el proyecto.
3. **Creación de Workflow CI/CD**: Se creó un archivo `ci.yml` para configurar GitHub Actions y se integró SonarCloud para el análisis del código.
4. **Configuración de SonarCloud**: Configuramos un **token secreto** en GitHub para usarlo en el pipeline y autenticar el análisis de código en SonarCloud.
5. **Implementación de Page Object**: Se creó el archivo `LoginPage.js` en **cypress/pages/** para encapsular las interacciones de la página de login.
6. **Escritura de un test E2E**: Se escribió un test de flujo completo en **cypress/tests/ui/custom-flow.spec.ts** para validar el funcionamiento de la aplicación desde el inicio hasta el final.
7. **Push y verificación**: Se hicieron los **commit y push** de los cambios al repositorio y se verificó la ejecución de los tests en **GitHub Actions**.

Con estos pasos, configuraste con éxito un pipeline de **CI/CD** con pruebas **E2E** en **Cypress** y análisis de código estático en **SonarCloud**. ¡Felicidades por haber completado la implementación! Si necesitas ayuda con los entregables o cualquier otra cosa, no dudes en preguntarme.
