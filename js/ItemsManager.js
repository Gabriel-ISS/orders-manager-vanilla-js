/** Se encarga de facilitar todos los cálculos de los items */
class ItemsManager {
  total = 0;
  totalIva = 0;
  items = [];

  get totalAndIva() {
    return this.total + this.totalIva;
  }

  /**
   * Agregar un item al manager
   * @param {{
   *   code: string,
   *   name: string,
   *   price: number,
   *   iva: number,
   *   quantity: number,
   *   client: {
   *     ruc: string,
   *     name: string,
   *     address: string,
   *   },
   * }} item
   * @returns {{
   *   code: string,
   *   name: string,
   *   price: number,
   *   iva: number,
   *   quantity: number,
   *   client: {
   *     ruc: string,
   *     name: string,
   *     address: string,
   *   },
   *   total: number,
   *   totalIva: number,
   *   totalAndIva: number,
   * }}
   */
  add(item) {
    const totalItem = item.price * item.quantity;
    const totalItemIva = (totalItem * item.iva) / 100;

    this.total += totalItem;
    this.totalIva += totalItemIva;

    const newItem = {
      ...item,
      total: totalItem,
      totalIva: totalItemIva,
      totalAndIva: totalItem + totalItemIva,
    };

    this.items.push(newItem);

    return newItem;
  }
}

export default new ItemsManager();