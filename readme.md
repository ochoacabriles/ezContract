Esta aplicación web permite desplegar contratos inteligentes para diferentes usos suministrando los parámetros de configuración. No necesitas conocimientos de programación.

Los contratos se despliegan desde el lado del cliente, el cliente es el dueño del contrato a través de su cuenta de Metamask.

Las opciones que tenemos disponibles hasta el momento son:

- EZ_Token: Crea un token ERC20 standard. El usuario define el nombre, el símbolo, el suministro y la cantidad de decimales (si omite alguno de estos parámetros, el token se genera con valores por defecto). El suministro inicial del token queda en la cuenta de Metamask del cliente.
- EZ_ICO (Basic Crowdsale): Crea un token ERC20 standard con un contrato para su distribución. El usuario define el nombre, el símbolo, el suministro y la cantidad de decimales del token, además de la tasa de cambio (Tokens/ETH). Todos los tokens se generan al inicio y los almacena el contrato. Cuando el contrato recibe ETH devuelve tokens, y envía los ETH a la cuenta del propietario del contrato, hasta que se agota el suministro de los tokens.
- EZ_ICO (Minted Crowdsale): Crea un token ERC20 acuñable con un contrato para su distribución. El usuario define el nombre, el símbolo y la cantidad de decimales del token, además de la tasa de cambio (Tokens/ETH). Cuando el contrato recibe ETH devuelve tokens, y envía los ETH a la cuenta del propietario del contrato. Los tokens se van creando cada vez que el contrato recibe ETH. El propietario puede finalizar la venta cuando lo desee a través de una función del contrato.

Próximos pasos:
- Agregar otros contratos con más opciones.
- Permitir interactuar desde la aplicación web con un contrato ya desplegado.

La prueba de concepto está disponible en http://165.227.165.98:3002
