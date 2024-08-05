import { Doctor } from "../../models/doctor.model";
import { TableColumn } from "../../models/table.model";
import Table from "../../shared/components/Table";
import { enviroments } from "../../shared/enviroments/enviroments.dev";

function GetDoctor(): React.JSX.Element {
  const columns: TableColumn[] = [
    { label: "Id", key: "doctorId" },
    { label: "Nombre", key: "name" },
    { label: "Teléfono", key: "telephone" },
    { label: "Cédula", key: "nif" },
    { label: "Número de Seguro", key: "socialNumber" },
    { label: "Número de Colega", key: "collegueNumber" },
    { label: "Fecha Incial", key: "startDate" },
    { label: "Fecha Final", key: "endDate" },
    { label: "Posición", key: "positionName" },
  ];

  return (
    <>
      <Table<Doctor>
        title="Tabla de Doctores"
        columns={columns}
        url={enviroments.getAllDoctor}
        initialPageSize="10"
      />
    </>
  );
}

export default GetDoctor;
