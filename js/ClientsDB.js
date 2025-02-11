/** Almacena todos los clientes registrados usando el ruc como identificador */
class ClientsDB {
  /**
   * @type {{
   *   ruc: string,
   *   name: string,
   *   address: string,
   * }[]}
   */
  clients = [];

  /**
   * Agregar un cliente a la base de datos
   * @param {{
   *   ruc: string,
   *   name: string,
   *   address: string,
   * }} client
   * @returns {void}
   */
  add(client) {
    if (this.clients.find((c) => c.ruc === client.ruc)) {
      return;
    }
    this.clients.push(client);
  }

  /**
   * El id puede ser el RUC o el CI
   * @param {string} id
   * @returns {[{
   *   ruc: string,
   *   name: string,
   *   address: string,
   * }] | undefined}
   */
  getById(id) {
    return this.clients.find((client) => client.ruc === id);
  }
}

export default new ClientsDB();