export const exampleClients = [
  {
    name: "Juan Perez",
    address: "Calle de la Paz, 1",
    ruc: "1234567-3",
  },
  {
    name: "Pedro Perez",
    address: "Calle de la Paz, 2",
    ruc: "4534664",
  },
  {
    name: "Carlos Perez",
    address: "Calle de la Paz, 3",
    ruc: "3423456",
  },
]

export const exampleItems = [
  {
    code: "523543",
    name: "Agua",
    price: 10000,
    iva: 5,
    quantity: 5,
    client: exampleClients[0],
  },
  {
    code: "345234",
    name: "Jugo",
    price: 15000,
    iva: 10,
    quantity: 2,
    client: exampleClients[0],
  },
  {
    code: "432453",
    name: "Café",
    price: 25000,
    iva: 5,
    quantity: 1,
    client: exampleClients[1],
  },
  {
    code: "759976",
    name: "Pan",
    price: 5000,
    iva: 5,
    quantity: 0.256,
    client: exampleClients[2],
  },
]
