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
      // Comprobar el tipo de archivo
      if (!file.type.match("image/png") && !file.type.match("image/jpeg")) {
        swal({
          title: "Archivo no permitido",
          text: "Solo se permiten archivos PNG o JPG.",
          icon: "warning",
          button: { text: "Aceptar", className: "custom-button" },
        });
        var customButton = document.querySelector(".custom-button");
        if (customButton) {
          customButton.style.backgroundColor = "#FF595A";
          customButton.onmouseover = function () {
            this.style.backgroundColor = "#FF6B6C";
          };
          customButton.onmouseout = function () {
            this.style.backgroundColor = "#FF595A";
          };
        }
        return;
      }

      // Comprobar el tamaño del archivo (2MB = 2 * 1024 * 1024 bytes)
      if (file.size > 2 * 1024 * 1024) {
        swal({
          title: "Archivo demasiado grande",
          text: "El archivo es demasiado grande. Tamaño máximo permitido: 2MB.",
          icon: "error",
          button: { text: "Aceptar", className: "custom-button" },
        });
        var customSizeButton = document.querySelector(".custom-button");
        if (customSizeButton) {
          customButton.style.backgroundColor = "#FF595A";
          customButton.onmouseover = function () {
            this.style.backgroundColor = "#FF6B6C";
          };
          customButton.onmouseout = function () {
            this.style.backgroundColor = "#FF595A";
          };
        }
        return;
      }

      // Aquí puedes procesar el archivo (por ejemplo, subirlo a tu API)
      setImage(file);
      //console.log('Archivo válido:', file);
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
