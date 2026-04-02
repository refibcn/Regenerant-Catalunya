# Carteras multifirma: una guia para organizaciones democraticas
## Una guia de Bread Cooperative

**Fecha de traduccion:** 2026-02-23  \
**Fuente:** `03 Libraries/Regenerant-Catalunya/docs/Bread-Cooperative-Guide-to-Multisignature-Wallets.pdf`  \
**Nota:** Esta traduccion mantiene la estructura del documento original. Las imagenes y diagramas se encuentran en el PDF original.

---

## Sobre esta guia

Esta guia fue creada por Bread Cooperative, una red solidaria que construye infraestructura digital para la clase trabajadora. Creamos herramientas que sirven a las personas y empoderan la accion colectiva, no que extraen ganancias.

Nos basamos en principios de ayuda mutua, gobernanza transparente, poder dual y democracia economica. Esta guia comparte las herramientas y practicas que usamos para gestionar nuestras finanzas de forma democratica y apoyar a otras organizaciones que realizan trabajo de justicia, distribucion de ayuda y organizacion comunitaria.

**Lo que aprenderas:**
- Como crear sistemas financieros transparentes y responsables.
- Instrucciones paso a paso para usar carteras multisig con Safe.
- Buenas practicas para la gestion democratica de tesoreria.
- Como resistir la desplataformizacion y construir resiliencia financiera.

Si quieres trabajar con nosotras/os o saber mas, ver la seccion "Sobre Bread Cooperative" al final de esta guia.

---

## Introduccion

### Por que las organizaciones democraticas necesitan mejores herramientas financieras

La infraestructura financiera tradicional presenta desafios significativos para organizaciones democraticas, cooperativas y ONG:

1. **Desplataformizacion y uso como arma:** las organizaciones enfrentan cierres de cuentas y persecucion por su trabajo.
2. **Falta de transparencia:** los sistemas opacos generan corrupcion e impiden la rendicion de cuentas colectiva.
3. **Altos costos de transaccion:** las transferencias internacionales pueden tardar meses y costar 20% en comisiones.
4. **Barreras de acceso bancario:** muchas comunidades, especialmente en el Sur Global, no tienen acceso a la banca tradicional.
5. **Estructuras poco democraticas:** las herramientas actuales elevan jerarquias en lugar de apoyar la toma de decisiones colectiva.
6. **Crisis de financiamiento:** las organizaciones enfrentan una gran reduccion de fondos al colapsar estructuras tradicionales de apoyo.

### Por que Web3?

La tecnologia Web3 ofrece soluciones mediante:

- **Bienes comunes digitales gobernados colectivamente:** control democratico sobre recursos compartidos.
- **Seguridad criptografica:** verificacion matematica de transacciones.
- **Protocolos abiertos:** no controlados por una unica plataforma que pueda congelar o retener fondos.
- **Resiliencia politica:** proteccion frente a bloqueos y represalias.
- **Transferencias rapidas y de bajo costo:** pagos internacionales casi instantaneos con comisiones minimas.
- **Transparencia:** todas las transacciones son visibles y verificables por miembros.

### Consideraciones importantes

- **Energia:** las blockchains modernas como Ethereum usan prueba de participacion y consumen una fraccion de la energia de plataformas como Google o Bitcoin.
- **Costo:** las comisiones en redes de capa 2 como Gnosis Chain suelen ser fracciones de centavo.
- **Legalidad:** por lo general es legal en la mayoria de jurisdicciones, aunque las regulaciones varian por pais. La cripto suele estar en una zona gris legal porque funciona.
- **Volatilidad:** usa stablecoins (criptoactivos vinculados a USD, EUR u otros activos) para evitar volatilidad.
- **Privacidad:** aunque las transacciones son transparentes, existen opciones de billeteras enfocadas en privacidad si se necesita.

---

## Empezar: conceptos basicos de billeteras

### Entender las billeteras

Una billetera cripto es como una cuenta bancaria, pero tu la controlas completamente. Para interactuar con cualquier aplicacion Web3, necesitas una billetera.

**Conceptos clave:**
- **Clave privada:** tu contrasena/inicio de sesion (NUNCA la compartas con nadie).
- **Clave publica:** tu numero de cuenta/IBAN (segura para compartir y recibir fondos).
- Si pierdes tu clave privada, pierdes el acceso a tus fondos de forma permanente.

### Tipos de billeteras

**Billeteras frias (mas seguras, sin conexion):**
- Billeteras hardware (Ledger, Trezor).
- Billeteras en papel (claves privadas escritas y guardadas de forma segura).

**Billeteras calientes (mas faciles de usar, conectadas a internet):**
- Extensiones de navegador (recomendado: Rabby).
- Aplicaciones de escritorio.
- Apps moviles (por ejemplo, Citizen Wallet).

**Punto de inicio recomendado:** instala la extension de navegador Rabby para uso en escritorio. Ofrece buena organizacion, informacion clara de transacciones y gestion de multiples billeteras.

---

## Que es una cartera multifirma?

Una cartera multifirma (multisig) es como una cuenta bancaria conjunta con reglas democraticas integradas. Varias personas comparten el control, y las transacciones requieren la aprobacion de un numero especificado de personas propietarias. La herramienta mas comun para carteras multifirma es Safe.

### Caracteristicas clave

- **Firma por umbral:** define cuantas aprobaciones se necesitan (por ejemplo, 2 de 3 personas).
- **Transparencia total:** todas las personas miembros pueden ver las transacciones propuestas.
- **Reglas programables:** establece limites de gasto y permisos automatizados.
- **Sin punto unico de falla:** ninguna persona puede acceder o mover fondos unilateralmente.

### Casos de uso comunes

- Gestion de tesoreria para cooperativas y DAOs.
- Pagos salariales para equipos distribuidos.
- Distribucion de ayuda con supervision.
- Financiamiento de proyectos con rendicion de cuentas.
- Cualquier situacion que requiera control financiero democratico.

---

## Guia paso a paso

### Paso 1: Crear una cartera multifirma

**Tiempo requerido:** 2-3 minutos  \
**Costo:** Gratis (patrocinado) o ~US$0.001 si lo pagas tu.

1. Ir a la aplicacion de Safe
   - Visita: https://app.safe.global
   - Conecta tu billetera (recomendamos Rabby en el navegador como inicio).
2. Crear una nueva cuenta
   - Haz clic en "Create new Safe".
   - Pon un nombre a tu cartera (por ejemplo, "Organization Treasury").
3. Seleccionar redes
   - Elige la(s) blockchain(s) a usar.
   - Recomendamos Gnosis Chain para practicar porque las transacciones son gratis o muy baratas y es la blockchain principal que usamos para nuestras aplicaciones.
   - Puedes seleccionar multiples redes, lo que crea carteras multisig con la misma direccion.
4. Agregar firmantes
   - Si ya sabes quien participara, agrega su direccion (empieza con 0x...).
   - Siempre puedes agregar direcciones despues.
   - Define el umbral minimo de firmantes necesarios.
5. Revisar y crear
   - Revisa la configuracion.
   - Haz clic en "Create Account".
   - Elige "Sponsored Transaction" (gratis) o paga la tarifa minima.
   - Confirma en tu billetera.

**Resultado:** ya tienes una direccion de cartera multisig que puedes compartir para recibir fondos.

---

### Paso 2: Agregar firmantes (crear estructura democratica)

**Tiempo requerido:** 2-3 minutos  \
**Costo:** Gratis (patrocinado) o ~US$0.001.

1. Acceder a ajustes
   - Abre tu cartera Safe.
   - Navega a Settings.
2. Agregar firmante
   - Clic en "Manage signers".
   - Clic en "Add new signer".
   - Ingresa la direccion de la persona.
   - Asigna un nombre reconocible.
3. Definir umbral
   - Elige cuantas firmas se requieren.
   - Ejemplo: 2 de 3 significa que 2 personas deben aprobar cada transaccion.
4. Ejecutar el cambio
   - Revisa los cambios.
   - Clic en "Continue" y luego "Execute".
   - Elige transaccion patrocinada para que sea gratis.
   - Confirma en tu billetera.

**Buena practica:** usa umbrales por mayoria (por ejemplo, 3 de 5, 2 de 3) para equilibrar seguridad y practicidad. Pedir unanimidad puede generar cuellos de botella.

---

### Paso 3: Hacer una transaccion

**Tiempo requerido:** 3-5 minutos (segun numero de firmantes)  \
**Costo:** Gratis (patrocinado) o ~US$0.001.

1. Iniciar transaccion
   - Clic en "New Transaction" y luego "Send Tokens".
   - Elige el token (por ejemplo, XDAI para dolares) e ingresa el monto.
   - Ingresa la direccion de la persona receptora.
   - Clic en "Next".
2. Primera firma
   - Revisa los detalles.
   - Clic en "Sign".
   - Confirma en tu billetera.
   - Nota: no puedes ejecutar si el umbral requiere mas firmas.
3. Notificar a otras personas firmantes
   - La transaccion aparece en "Transactions" con estado "Requires X more signatures".
   - Otras personas la veran al conectarse.
4. Firmas adicionales
   - Cada firmante entra, revisa y firma.
   - La ultima persona vera el boton "Execute".
5. Ejecucion
   - La ultima persona requerida hace clic en "Execute".
   - La transaccion se transmite a la blockchain.
   - La transferencia suele completarse en segundos.

**Importante:** coordina con tu co-firmantes. Define un proceso para proponer, discutir y aprobar transacciones. Aqui entra el elemento humano de la gestion democratica.

---

### Paso 4: Configurar limites de gasto

**Tiempo requerido:** 2-3 minutos  \
**Costo:** Gratis (patrocinado) o ~US$0.001.

Los limites de gasto permiten que ciertas billeteras retiren fondos sin requerir aprobacion multisig, ideal para pagos recurrentes como salarios o presupuestos.

1. Acceder a limites de gasto
   - Settings → scroll → Spending Limits.
   - Clic en "New Spending Limit".
2. Configurar limite
   - Beneficiario: direccion de billetera (firmante o externa).
   - Token: el token que puede gastar (por ejemplo, XDAI).
   - Monto: maximo por periodo.
   - Periodo de reinicio: unico, diario, semanal, mensual.
3. Ejecutar configuracion
   - Revisar ajustes.
   - Requiere el numero de firmas del umbral.
   - Una vez aprobado, el limite queda activo.
4. Usar un limite de gasto
   - El beneficiario conecta su billetera.
   - Clic en "New Transaction" → "Send Tokens".
   - Selecciona la opcion "Spending Limit".
   - Puede ejecutar hasta su limite sin firmas adicionales (pero paga la comision).

**Casos de uso:**
- Pagos salariales mensuales.
- Presupuestos para iniciativas especificas.
- Gastos operativos diarios.
- Distribucion de ayuda con supervision.

**Importante:** los limites de gasto mantienen la transparencia (todas las transacciones son visibles) y reducen friccion para gastos preaprobados.

---

## Cosas importantes a tener en cuenta

### Proceso democratico

La tecnologia es solo parte de la solucion. El uso exitoso requiere:

- Reuniones regulares: discutir presupuestos, revisar gastos, definir expectativas.
- Politicas claras: documentar como se toman decisiones y que requiere aprobacion.
- Revisiones de presupuesto: controles mensuales o trimestrales.
- Construccion de consenso: llegar a acuerdos antes de implementar politicas.
- Comunicacion: mantener a firmantes informados sobre transacciones pendientes.

### Buenas practicas de seguridad

1. Nunca compartas tu clave privada con nadie.
2. Mantén una copia de seguridad en un lugar seguro.
3. Usa contrasenas fuertes en aplicaciones de billetera.
4. Verifica direcciones cuidadosamente (un caracter incorrecto = fondos perdidos).
5. Empieza con montos pequenos al probar nuevas billeteras o procesos.
6. Cuidado con phishing: verifica que estas en el sitio correcto.

Si necesitas ayuda para configurar algo asi en tu organizacion, escribe a contact@bread.coop.

### Elegir tu estructura

Considera:

- Cultura de toma de decisiones: ajusta el umbral a tu forma de decidir.
- Disponibilidad: considera personas que pueden no estar disponibles.
- Tamano de organizacion: grupos grandes pueden requerir umbrales distintos.
- Tolerancia al riesgo: mayor seguridad = mas firmas requeridas.
- Frecuencia de transacciones: operaciones frecuentes pueden requerir limites de gasto.

### Velocidad y costos de transaccion

- Comisiones: suelen ser ~US$0.001 o menos en Gnosis Chain y otras L2.
- Transacciones patrocinadas: Safe ofrece 5 transacciones patrocinadas por hora en muchas cadenas, pero no en Ethereum mainnet.
- Velocidad: normalmente se completan en segundos.
- Internacional: misma velocidad/costo sin importar la geografia.

### Entrada y salida de fondos

**Recibir fondos:** comparte la direccion de tu Safe.

**Convertir a moneda local (off-ramping):**
- Exchanges locales.
- Redes P2P en tu pais.
- Negocios que acepten pago directo en cripto.
- Socios internacionales que acepten cripto.
- ZKP2P ofrece on/off boarding con Wise, Revolut, PayPal y mas en muchos paises.

**El contexto importa:** investiga opciones especificas para tu pais y comunidad.

---

## Recursos adicionales

### Herramientas mencionadas

- Safe: https://app.safe.global (carteras multisig)
- Rabby Wallet: para gestion de billeteras en navegador
- Gnosis Chain: blockchain de bajo costo para transacciones
- Citizen Wallet: billetera movil

### Funciones avanzadas

Safe ofrece capacidades adicionales:

- Integracion con aplicaciones DeFi.
- Gestion de otros tipos de infraestructura digital.
- Flujos de transacciones personalizados.
- Estructuras avanzadas de gobernanza.

### Aprender mas

Bread Cooperative ofrece:

- Talleres sobre herramientas cripto para organizaciones democraticas.
- Asistencia tecnica para configurar carteras multisig.
- Consultoria sobre infraestructura financiera.
- Apoyo para distribucion de ayuda y pagos internacionales.

### El modelo de Bread Cooperative

Bread Cooperative usa estas herramientas para crear una economia basada en solidaridad:

- **Solidarity Fund:** stablecoin donde el interes financia proyectos miembros.
- **Gobernanza democratica:** miembros votan la distribucion del fondo.
- **Principios de ayuda mutua:** 50% distribucion igual, 50% voto democratico.
- **Infraestructura post-capitalista:** construir alternativas a sistemas extractivos.

---

## Sobre Bread Cooperative

### Quienes somos

Bread Cooperative es una organizacion que construye infraestructura digital para un futuro post-capitalista. Somos una red solidaria de proyectos que trabajan en la interseccion entre comunidades, tecnologia y sociedad.

**Nuestra mision:** construir las bases de sistemas economicos alternativos que sirvan a las personas, no al poder. Nuestros sistemas ideales empoderan a las comunidades para trabajar juntas y generar impacto para si mismas y otras.

**Nuestros principios:**
- Ayuda mutua: apoyarnos para construir resiliencia colectiva.
- Gobernanza transparente: toma de decisiones democratica en todo lo que hacemos.
- Poder dual: crear alternativas que conviven con y mas alla de los sistemas actuales.
- Democracia economica: distribuir poder, recursos y toma de decisiones colectivamente.

Hemos trabajado con organizaciones diversas, incluyendo la Comision Europea, Optimism y mas, conectando necesidades comunitarias con soluciones tecnologicas.

### Servicios para organizaciones

- **Talleres y formacion:** sesiones practicas de herramientas Web3 para organizaciones democraticas.
- **Consultoria tecnica:** configuracion de carteras multisig, tesoreria e infraestructura cripto.
- **Soporte de implementacion:** ayuda para distribucion de ayuda, pagos internacionales y transparencia financiera.
- **Soluciones a medida:** enfoques adaptados a las necesidades especificas de cada organizacion.

---

## Fondo de Solidaridad

Nuestra aplicacion principal, Solidarity Fund, es como cualquier persona puede obtener BREAD, una stablecoin comunitaria vinculada al USD donde el interes generado financia proyectos miembros democraticamente. Hemos distribuido mas de US$50k en fondos a nuestra red a traves de este sistema.

- 50% del rendimiento se distribuye por votos de quienes tienen tokens BREAD.
- 50% se distribuye equitativamente entre todos los miembros.
- Asi crece el pastel para todas las personas.

---

## Nuestra red

Bread Cooperative es mas que solo nosotras/os: es una red de proyectos miembros que incluye:

- Regen Coordination: red global que impulsa el movimiento de Finanzas Regenerativas.
- Symbiota Cooperative: organizaciones centradas en eventos y nuevas formas de cultura.
- Crypto Commons Association: eventos sobre teoria de los bienes comunes y cripto.
- Citizen Wallet: billetera movil para monedas comunitarias Web3.
- Gardens: plataforma de gobernanza con voto por conviccion.

---

## Contacto

**Boletin:** https://paragraph.com/@breadcoop  \
**Sitio web:** https://bread.coop/  \
**Email:** contact@bread.coop  \
**LinkedIn:** https://www.linkedin.com/company/bread-cooperative  \
**Twitter:** https://x.com/breadcoop  \
**Linktree:** https://linktr.ee/breadcoop

**Si te interesan nuestras herramientas:**
- Explora Solidarity Fund: https://app.breadchain.xyz/
- Descarga Citizen Wallet: https://citizenwallet.xyz/
- Unete a nuestra red: https://forms.gle/mgkGxRB5HDZJym1P9

---

Esta guia se basa en el webinar "Beyond the Bank: Financial Tools for Democratic Organizations" de Bread Cooperative, presentado por Gilberto Maurishaw y Joshua Davila el 6 de noviembre de 2025.
