import React from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
import { useHttpMethod } from "../../hooks/useHttpMethod";
import { DeleteDoctorForm } from "../../models/input.model";
import Form from "../../shared/components/Form";
import InputErrorMessage from "../../shared/components/InputErrorMessage";
import { enviroments } from "../../shared/enviroments/enviroments.dev";
import { isHttpMethodHookError } from "../../shared/utils";

function DeleteDoctor(): React.JSX.Element {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<DeleteDoctorForm>();

  const { postData } = useHttpMethod<DeleteDoctorForm>({
    url: enviroments.deleteDoctor,
  });

  const onSubmit = handleSubmit(async (data) => {
    const response = await postData({ body: data, method: "DELETE" });

    if (isHttpMethodHookError(response)) {
      toast.error(response.message);
      return;
    } else {
      toast.success("Success");
      reset();
      return;
    }
  });

  return (
    <>
      <Toaster position="bottom-center" />
      <Form title="Delete Formulario del Doctor" onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="doctorName" className="form-label">
            Nombre del Doctor
          </label>
          <input
            className="form-control"
            id="doctorName"
            type="text"
            {...register("doctorName", {
              required: {
                value: true,
                message: "The Nombre del Doctor is required",
              },
            })}
          />
          {errors.doctorName && <InputErrorMessage message={errors.doctorName.message} />}
        </div>
        <div className="mb-3">
          <label htmlFor="collegueNumber" className="form-label">
            Número de Colega
          </label>
          <input
            type="text"
            {...register("collegueNumber", {
              required: {
                value: true,
                message: "The Número de Colega is required",
              },
              pattern: {
                value: /^\d{6}$/,
                message: "The Número de Colega is invalid",
              },
            })}
            className="form-control"
            id="collegueNumber"
          />
          {errors.collegueNumber && <InputErrorMessage message={errors.collegueNumber.message} />}
        </div>
      </Form>
    </>
  );
}

export default DeleteDoctor;
