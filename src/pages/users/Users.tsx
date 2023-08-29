import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import "./Users.scss";
import { useState } from "react";
import Add from "../../components/add/Add";
import { userRows } from "../../data";
// import { useQuery } from "@tanstack/react-query";

const IconBtn2 = () => {
  return (
    <div
      style={{
        width: 36,
        height: 36,
        position: "relative",
        transform: "rotate(180deg)",
        transformOrigin: "0 0",
      }}
    >
      <div
        style={{
          width: 36,
          height: 36,
          left: 0,
          top: 0,
          position: "absolute",
          transform: "rotate(180deg)",
          transformOrigin: "0 0",
          background: "white",
          borderRadius: 7.5,
          border: "0.38px rgba(146, 161, 173, 0.40) solid",
        }}
      />
      <div
        style={{
          width: 16,
          height: 16,
          left: -10,
          top: 10,
          position: "absolute",
          transform: "rotate(180deg)",
          transformOrigin: "0 0",
        }}
      >
        <div
          style={{
            width: 16,
            height: 16,
            left: 0,
            top: 18,
            position: "absolute",
          }}
        >
          <div
            style={{
              width: 5,
              height: 1,
              left: 10.17,
              top: 3.83,
              position: "absolute",
              background: "#8B8B8B",
            }}
          ></div>
          <div
            style={{
              width: 3.67,
              height: 1,
              left: 0.83,
              top: 3.83,
              position: "absolute",
              background: "#8B8B8B",
            }}
          ></div>
          <div
            style={{
              width: 5.67,
              height: 5.67,
              left: 3.83,
              top: 1.5,
              position: "absolute",
              background: "#8B8B8B",
            }}
          ></div>
          <div
            style={{
              width: 3.67,
              height: 1,
              left: 11.5,
              top: 11.17,
              position: "absolute",
              background: "#8B8B8B",
            }}
          ></div>
          <div
            style={{
              width: 5,
              height: 1,
              left: 0.83,
              top: 11.17,
              position: "absolute",
              background: "#8B8B8B",
            }}
          ></div>
          <div
            style={{
              width: 5.67,
              height: 5.67,
              left: 6.5,
              top: 8.83,
              position: "absolute",
              background: "#8B8B8B",
            }}
          ></div>
          <div
            style={{
              width: 16,
              height: 16,
              left: 0,
              top: 0,
              position: "absolute",
              opacity: 0,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 150,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 150,
    type: "boolean",
  },
];

const Users = () => {
  const [open, setOpen] = useState(false);

  // TEST THE API

  // const { isLoading, data } = useQuery({
  //   queryKey: ["allusers"],
  //   queryFn: () =>
  //     fetch("http://localhost:8800/api/users").then(
  //       (res) => res.json()
  //     ),
  // });

  return (
    <div className="users">
      <div className="info">
        <h1 className="text-lg text-slate-800">Users</h1>

        <div className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-formControl MuiInputBase-adornedStart MuiInputBase-adornedEnd css-v4u5dn-MuiInputBase-root-MuiInput-root">
          <svg
            className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-ptiqhd-MuiSvgIcon-root"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="SearchIcon"
          >
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
          </svg>
          <input
            aria-invalid="false"
            id=":rh:"
            placeholder="Search…"
            type="search"
            className="MuiInputBase-input MuiInput-input MuiInputBase-inputTypeSearch MuiInputBase-inputAdornedStart MuiInputBase-inputAdornedEnd css-c63i49-MuiInputBase-input-MuiInput-input"
            value=""
          />
          <button
            className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall css-fp9tcu-MuiButtonBase-root-MuiIconButton-root"
            tabIndex="0"
            type="button"
            aria-label="Clear"
          >
            <svg
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-ptiqhd-MuiSvgIcon-root"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="CloseIcon"
            >
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
            </svg>
            <span className="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span>
          </button>
          <div className="iconbtn2">
            <IconBtn2 />
          </div>
          <div className="iconbtn1">
            <IconBtn />
          </div>
        </div>
        <button
          className="text-gray-900 text-base font-normal leading-normal"
          onClick={() => setOpen(true)}
        >
          + اضافة جديد
        </button>
      </div>

      <DataTable slug="users" columns={columns} rows={userRows} />
      {/* TEST THE API */}

      {/* {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="users" columns={columns} rows={data} />
      )} */}
      {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
      {/* <Btn /> */}
    </div>
  );
};
const IconBtn = () => {
  return (
    <div
      style={{
        width: 36,
        height: 36,
        position: "relative",
        transform: "rotate(180deg)",
        transformOrigin: "0 0",
        marginRight: 10,
      }}
    >
      <div
        style={{
          width: 36,
          height: 36,
          left: 0,
          top: 0,
          position: "absolute",
          transform: "rotate(180deg)",
          transformOrigin: "0 0",
          background: "white",
          borderRadius: 6,
          border: "0.38px rgba(146, 161, 173, 0.40) solid",
        }}
      />
      <div
        style={{
          width: 16,
          height: 16,
          left: -10,
          top: 10,
          position: "absolute",
          transform: "rotate(180deg)",
          transformOrigin: "0 0",
        }}
      >
        <div
          style={{
            width: 16,
            height: 16,
            left: 0,
            top: 18,
            position: "absolute",
          }}
        >
          <div
            style={{
              width: 5.96,
              height: 3.48,
              left: 1.51,
              top: 1.5,
              position: "absolute",
              background: "#8B8B8B",
            }}
          ></div>
          <div
            style={{
              width: 1,
              height: 13,
              left: 3.99,
              top: 1.5,
              position: "absolute",
              background: "#8B8B8B",
            }}
          ></div>
          <div
            style={{
              width: 5.96,
              height: 3.48,
              left: 8.54,
              top: 11.02,
              position: "absolute",
              background: "#8B8B8B",
            }}
          ></div>
          <div
            style={{
              width: 1,
              height: 13,
              left: 11.01,
              top: 1.5,
              position: "absolute",
              background: "#8B8B8B",
            }}
          ></div>
          <div
            style={{
              width: 16,
              height: 16,
              left: 0,
              top: 0,
              position: "absolute",
              opacity: 0,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Users;
