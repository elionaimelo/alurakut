import { SiteClient } from "datocms-client";

export default async function recebedorDeRequests(request, response) {
  (response) => response.json();
  if (request.method === "POST") {
    const TOKEN = "59c7f8d97e794b8b0140e83c6173cf";

    const client = new SiteClient(TOKEN);
    const registroCriado = await client.items.create({
      itemType: "976848", // ID do Model de "Communities" criado pelo Dato
      ...request.body,
    });
    console.log(registroCriado);
    response.json({
      dados: "Algum dado qualquer",
      registroCriado: registroCriado,
    });
    return;
  }
  response.status(404).json({
    message: "Ainda não temos nada no GET, mas no POST tem!",
  });
}
