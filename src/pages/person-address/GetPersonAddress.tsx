import { PersonAddress } from "../../models/personAddress.model";
import { TableColumn } from "../../models/table.model";
import Table from "../../shared/components/Table";
import { enviroments } from "../../shared/enviroments/enviroments.dev";

function GetPersonAddress(): React.JSX.Element {
  const columns: TableColumn[] = [
    { label: "ID de la Dirección", key: "addressId" },
    { label: "Nombre de la Persona", key: "personName" },
    { label: "Número de la Calle", key: "streerNumber" },
    { label: "Dirección 1", key: "addressLine1" },
    { label: "Dirección 2", key: "addressLine2" },
    { label: "Ciudad", key: "city" },
    { label: "Población", key: "population" },
    { label: "Código Postal", key: "postalCode" },
    { label: "Provincia", key: "province" },
  ];

  return (
    <>
      <Table<PersonAddress>
        title="Tabla de direcciones de Personal"
        columns={columns}
        url={enviroments.getAllPersonAddress}
        initialPageSize="10"
      />
    </>
  );
}

export default GetPersonAddress;
