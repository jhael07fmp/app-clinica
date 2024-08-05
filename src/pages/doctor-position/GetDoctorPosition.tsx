import { DoctorPosition } from "../../models/doctor.model";
import { TableColumn } from "../../models/table.model";
import Table from "../../shared/components/Table";
import { enviroments } from "../../shared/enviroments/enviroments.dev";

function GetDoctorPosition(): React.JSX.Element {
  const columns: TableColumn[] = [{ label: "Nombre de Posición", key: "positionName" }];

  return (
    <>
      <Table<DoctorPosition>
        title="Tabla de Posición de Doctor"
        columns={columns}
        url={enviroments.getAllDoctorPosition}
        initialPageSize="10"
      />
    </>
  );
}

export default GetDoctorPosition;
