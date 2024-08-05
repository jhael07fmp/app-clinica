import { Patient } from "../../models/patient.model";
import { TableColumn } from "../../models/table.model";
import Table from "../../shared/components/Table";
import { enviroments } from "../../shared/enviroments/enviroments.dev";

function GetPatient(): React.JSX.Element {
  const columns: TableColumn[] = [
    { label: "Id", key: "patientId" },
    { label: "Nombre", key: "name" },
    { label: "Teléfono", key: "telephone" },
    { label: "Cédula", key: "nif" },
    { label: "Número de Seguro", key: "socialNumber" },
  ];

  return (
    <>
      <Table<Patient>
        title="Tabla de Pacientes"
        columns={columns}
        url={enviroments.getPatient}
        initialPageSize="10"
      />
    </>
  );
}

export default GetPatient;
