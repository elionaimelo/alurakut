import { SiteClient } from "datocms-client";

export default async function recebedorDeRequests(request, response) {
  (response) => response.json();
  if (request.method === "POST") {
    const TOKEN = "012975c352c20062dd096e715e0b51";

    const client = new SiteClient(TOKEN);
    const registroCriado = await client.items.create({
      itemType: "976159", // ID do Model de "Communities" criado pelo Dato
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
