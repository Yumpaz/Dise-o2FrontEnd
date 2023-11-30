import React, { useRef } from "react";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import swal from "sweetalert";

const EditBtn = ({ setImage }) => {
  const fileInputRef = useRef(null);

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (!file.type.match("image/png") && !file.type.match("image/jpeg")) {
        swal({
          title: "Archivo no permitido",
          text: "Solo se permiten archivos PNG o JPG.",
          icon: "warning",
          button: { text: "Aceptar", className: "custom-button" },
        });
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        swal({
          title: "Archivo demasiado grande",
          text: "El archivo es demasiado grande. Tamaño máximo permitido: 2MB.",
          icon: "error",
          button: { text: "Aceptar", className: "custom-button" },
        });
        return;
      }
      setImage(file);
    }
  };

  return (
    <>
      <IconButton onClick={handleIconClick}>
        <EditIcon
          sx={{
            width: "25px",
            height: "25px",
            color: "white",
            marginTop: "80px",
          }}
        />
      </IconButton>
      <input
        type="file"
        accept=".jpg,.jpeg,.png"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </>
  );
};

export default EditBtn;
