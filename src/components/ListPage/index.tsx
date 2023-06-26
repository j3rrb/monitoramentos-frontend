import { Box, Container, Fab, Typography } from "@mui/material";
import { IListPage } from "../../interfaces";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";
import { getItems } from "../../services/db";
import ResponsiveDrawer from "../Drawer";

export default function ListPage(props: IListPage) {
  const { title, dbKey, showAdd, showFilter, onAdd } = props;

  const cols: GridColDef[] = [
    { field: "id", headerName: "#", width: 100 },
    { field: "description", headerName: "Descrição", width: 200 },
    { field: "date", headerName: "Criado em", width: 200 },
  ];

  return (
    <>
      <ResponsiveDrawer />
      <Container>
        <Box>
          <Typography variant="h4" textAlign="center" paddingY={2}>
            {title}
          </Typography>
        </Box>
        <Box>
          <DataGrid
            rows={getItems(dbKey)}
            columns={cols}
            disableColumnFilter={!showFilter}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            sx={{
              height: 500,
            }}
            localeText={{
              noRowsLabel: "Sem registros",
            }}
          />
        </Box>
        {showAdd && onAdd && (
          <Fab
            color="primary"
            sx={{
              position: "absolute",
              bottom: 15,
              right: 15,
            }}
            aria-label="add"
            onClick={onAdd}
          >
            <AddIcon />
          </Fab>
        )}
      </Container>
    </>
  );
}
