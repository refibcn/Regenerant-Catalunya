# Multifirma Segura para Tesorerías de Red
## Fundamentos de Gobernanza Transparente en Cadena (Blockchain)

*Basado en Bread Cooperative Guide + Safe Implementation Best Practices*  
*Para NotebookLM Video Generation (ES-ES)*  
*Duración esperada: 20 minutos de narración*

---

## INTRODUCCIÓN

Hola. Te damos la bienvenida a este video sobre cómo configurar y usar un sistema seguro de multifirma para la tesorería de tu red.

La gobernanza de dinero compartido es una de las responsabilidades más importantes de cualquier red regenerativa. Necesitas:

- **Transparencia**: Todos ven dónde va el dinero
- **Seguridad**: Nadie puede robar o perder fondos por error
- **Consenso**: Las decisiones importantes se toman juntas, no en secreto
- **Velocidad**: Las decisiones no pueden tardar meses

Este video te explica cómo conseguir todo esto usando una herramienta llamada Safe. Es un sistema que miles de organizaciones en todo el mundo ya usan.

---

## PARTE 1: POR QUÉ AHORA? CONTEXTO DE MICELI

Miceli es una red de iniciativas regenerativas en la zona rural de Catalunya. Hasta ahora, cada proyecto trabajaba independientemente.

Ahora, queremos algo diferente: que la red completa de Miceli tenga una tesorería compartida donde:

- La red decide conjuntamente cómo gastar los fondos
- Todos ven exactamente dónde va cada euro
- Nadie puede gastarse dinero solo — necesita aprobación de otros
- Las reglas están escritas y son claras

Esto es lo que llamamos "gobernanza de red".

---

## PARTE 2: ¿QUÉ ES MULTIFIRMA? EXPLICACIÓN SIMPLE

Imagina un buzón de seguridad en un banco.

En un buzón normal, solo tú tienes la llave. Si pierdes la llave, no puedes acceder. Si alguien te roba la llave, pueden coger todo.

Un sistema de multifirma funciona así:

**Hay una caja fuerte.**  
**Hay 5 llaves diferentes.**  
**Cada llave la tiene una persona distinta.**  
**Para abrir la caja, necesitas 3 de las 5 llaves juntas.**

Ventajas:

1. Si pierdes una llave, no pasa nada — aún hay 4 más
2. Si alguien quiere robar, necesita conseguir 3 llaves (mucho más difícil)
3. Nadie puede abrir solo — siempre es decisión de grupo
4. Las decisiones son visibles: todos vemos cuándo y por qué se abre

En Miceli:

- La "caja fuerte" es nuestra tesorería digital (dinero en la cadena blockchain Celo)
- Las "5 llaves" las tienen 5 personas de Miceli (los firmantes)
- El número mágico es 3 — necesitamos 3 de 5 para aprobar un gasto

Esto se llama "3 de 5 multifirma" o "3-of-5 multisig".

---

## PARTE 3: ¿CÓMO FUNCIONA SAFE? EL INSTRUMENTO

Safe es una herramienta gratuita que gestiona este sistema de multifirma.

**Lo que hace Safe:**

1. **Crea la caja fuerte** — Abre la aplicación en tu ordenador (app.safe.global)
2. **Añade los firmantes** — Introduces los 5 nombres y direcciones de cartera
3. **Establece el umbral** — Dices "necesitamos 3 de 5"
4. **Recibe dinero** — Le das a la red la dirección de la caja fuerte para que ingrese fondos
5. **Gestiona gastos** — Cuando alguien quiere gastar:
   - Propone una transacción (cuánto, a quién, por qué)
   - Los otros lo revisan
   - 3 personas aprueban
   - El dinero se envía

**Todos en el mundo pueden verlo:**

- La dirección de la caja fuerte es pública
- Todas las transacciones son públicas
- Nadie puede esconder dinero

Esto se llama "transparencia en cadena" o "on-chain transparency".

---

## PARTE 4: PRINCIPIOS DE SEGURIDAD (DE BREAD COOPERATIVE)

La Bread Cooperative de Oakland, California, lleva años usando multifirma para sus tesorerías de red. Han aprendido lecciones importantes.

**Regla 1: Nunca compartas tu frase de recuperación**

Cuando creas una cartera de criptomoneda (como Rabby), el sistema te da 12 palabras: tu "frase de recuperación".

Esta frase es TODO. Con estas 12 palabras, alguien puede robar todo tu dinero.

**Qué DEBES hacer:**
- Escribe las 12 palabras en papel
- Guarda el papel en un lugar seguro (un cajón, una caja)
- NO lo metas en la nube
- NO hagas screenshots
- NO se lo digas a nadie

**Qué NUNCA debes hacer:**
- Dar la frase a Luiz, ni siquiera "por seguridad"
- Guardarla en Google Drive, correo, o Telegram
- Fotografiarla
- Publicarla

Si pierdes el papel, todavía puedes crear una nueva cartera y nueva frase. No es el fin del mundo.

**Regla 2: Verifica URLs antes de firmar**

El phishing es un ataque común. Alguien te envía un link que parece Safe, pero no lo es.

**Regla de oro:**
- La URL verdadera es: **app.safe.global**
- Si ves algo distinto, NO hagas clic

Cuando Safe te pide que firmes algo, **verifica la URL en la barra de direcciones ANTES de hacer clic en nada**.

**Regla 3: Empieza pequeño**

En la Bread Cooperative, cuando tenían dudas, hacían primero una transacción pequeña (por ejemplo, 0,10 euros) para probar el flujo.

Esto te da confianza sin arriesgar mucho dinero.

**Regla 4: Los backups son tu salvavidas**

Mantén el papel con tu frase de recuperación en buen lugar:
- No lo lamines (no se puede leer si necesitas usarlo)
- No lo dejes bajo la lluvia
- Dile a una persona de confianza dónde está (por si algo te pasa)

---

## PARTE 5: ¿CÓMO FUNCIONA EN PRÁCTICA? EL FLUJO

Veamos un ejemplo real de cómo funciona Safe en el día a día.

**Día 1: Alguien propone un gasto**

Oriol va a Safe y dice: "Quiero pagar 500 euros a Juan porque hizo trabajo en la red."

Safe hace una propuesta: "¿Aprobamos enviar 500 CELO a Juan's wallet?"

(Nota: estamos usando CELO, que es dinero digital en la cadena Celo. Es como euros digitales.)

**Día 2: Otros revisan y aprueban**

Andrea recibe una notificación: "Hay una propuesta nueva."

Andrea abre Safe, lee: "500 CELO a Juan por trabajo de red."

Andrea piensa: "Sí, Juan hizo ese trabajo. Apruebo."

Andrea firma digitalmente.

Lo mismo ocurre con Gemma.

Ahora tenemos 3 aprobaciones (Oriol, Andrea, Gemma). El umbral es 3 de 5. ¡Listo!

**Día 3: Se ejecuta**

Alguien (puede ser cualquiera de los 5) hace clic en "Ejecutar" en Safe.

La transacción se envía a la red blockchain Celo.

30 segundos después: ✅ Confirmado. Juan ha recibido 500 CELO en su cartera.

Todos pueden verlo públicamente en la cadena.

---

## PARTE 6: GOBERNANZA — REGLAS QUE ESCRIBES

Safe es solo la **herramienta técnica**. La gobernanza es las **reglas que decide tu red**.

**Preguntas que Miceli debe responder:**

1. **¿Quién puede proponer gastos?**
   - ¿Solo los líderes (Oriol, Gemma)?
   - ¿Cualquiera en la red?
   - ¿Solo ciertos tipos de gastos?

2. **¿Cuánto tiempo tenemos para aprobar?**
   - ¿48 horas es suficiente?
   - ¿O 24 horas para cosas urgentes?

3. **¿Qué información necesitamos en cada propuesta?**
   - ¿Un link a la decisión?
   - ¿Una explicación?
   - ¿Una factura?

4. **¿Qué hacemos si no encontramos 3 aprobadores?**
   - ¿Quién puede proponer alternativas?
   - ¿Hay una forma de escalar?

5. **¿Cómo registramos todo?**
   - ¿En una hoja de cálculo?
   - ¿En una base de datos?
   - ¿En Telegram?

Miceli escribirá estas reglas después de la sesión de hoy. Las llamamos "Runbook" o "Manual de Operación".

---

## PARTE 7: ERRORES COMUNES (Y CÓMO EVITARLOS)

La Bread Cooperative y otros grupos que usan multifirma han encontrado estos problemas:

**Error 1: Los firmantes desaparecen**

Problema: Una persona que es firmante se va de la red o está viajando.

Solución: 
- Identifica firmantes "de respaldo" antes de tiempo
- Si necesitas cambiar un firmante, Safe permite eliminar uno y añadir otro (requiere multifirma también)

**Error 2: Nadie sabe cómo usar Safe**

Problema: Después de una sesión, nadie se acuerda de cómo acceder o firmar.

Solución:
- Haz una transacción de prueba rápidamente (mismo día)
- Crea un manual simple de 1 página
- Practica juntos

**Error 3: El umbral es muy alto**

Problema: Dijimos "4 de 5" y ahora nada nunca se aprueba porque alguien siempre falta.

Solución:
- Empieza con "2 de 3" o "3 de 5"
- Puedes cambiar el umbral después si es necesario

**Error 4: No se registran las decisiones**

Problema: Después de 6 meses, nadie recuerda por qué se gastó tanto dinero.

Solución:
- Después de cada transacción, escribe en una hoja de cálculo: fecha, cantidad, propósito, quién aprobó
- Esto es tu registro público

---

## PARTE 8: LO QUE PASA DESPUÉS

Hoy (miércoles):
- Configuramos Safe con los 5 firmantes de Miceli
- Hacemos una transacción de prueba
- Todos aprendemos cómo funciona

Mañana (jueves):
- Te enviamos la dirección de Safe
- Te enviamos el manual de operación

Próxima semana:
- Miceli hace su primera transacción real
- Nos llamamos para revisar cómo fue

Después:
- Miceli usa Safe para gestionar sus fondos de forma transparente, segura, y conjunta

Esto es gobernanza regenerativa en acción.

---

## CONCLUSIÓN

Usar multifirma con Safe es:

✅ **Seguro** — Tu dinero está protegido por 5 personas, no una sola  
✅ **Transparente** — Todos ven exactamente dónde va cada euro  
✅ **Rápido** — Las decisiones se toman en horas, no meses  
✅ **Justo** — Las reglas están escritas y claras  
✅ **Gratis** — Safe no cobra nada  

Miceli está tomando un paso importante: pasar de un grupo de proyectos independientes a una red cohesionada con gobernanza compartida.

Este es el tipo de infraestructura que las redes regenerativas necesitan para escalar.

Vamos a hacerlo juntos.

---

## REFERENCIAS

- Bread Cooperative Multisig Guide: https://docs.google.com/document/d/[path]
- Safe App: https://app.safe.global
- Celo Blockchain: https://celo.org
- Regenerant Catalunya: https://regenerant-catalunya.refibcn.cat

---

**Fin del script.**  
*Duración esperada de narración: 18-22 minutos*  
*Listo para NotebookLM Video Generation (ES-ES)*
