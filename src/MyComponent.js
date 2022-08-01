import { useState } from "react";
import {
  TextField,
  NumberField,
  useValidatableForm,
  Autocomplete,
  Button,
  Dialog,
  useSnackbar,
  IconButton,
  DatePicker
} from "comfort-react";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

const initialFormData = { value: "aaa" };
const rules = [
  { path: "value", ruleSet: [{ rule: "required" }, { rule: "tckn" }] },
  {
    path: "value2",
    ruleSet: [{ rule: "required" }, { rule: "listSize", greaterThan: 1 }]
  },
  {
    path: "value3",
    ruleSet: [{ rule: "date", greaterThan: new Date() }]
  }
];

const autoCompleteOptions = [
  "Ankara",
  "İstanbul",
  "İzmir",
  "Antalya",
  "Eskişehir"
];
const MyComponent = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [numValue, setNumValue] = useState(4442142.424);
  const [dialogOpen, setDialogOpen] = useState(false);

  const {
    isValid,
    formData,
    setPathValue,
    getValue,
    getError
  } = useValidatableForm({
    rules,
    initialFormData
  });

  return (
    <div>
      my component
      <TextField
        path="value"
        value={getValue("value")}
        setPathValue={setPathValue}
        errorMessage={getError("value")}
        renderErrorMessage={(err) => {
          return <span style={{ color: "brown" }}>Hata: {err}</span>;
        }}
      />
      <Autocomplete
        options={autoCompleteOptions}
        value={getValue("value2")}
        setPathValue={setPathValue}
        errorMessage={getError("value2")}
        path="value2"
        multiple={true}
      />
      <NumberField
        value={numValue}
        onChange={(newValue) => setNumValue(newValue)}
      />
      <Button
        variant="contained"
        onClick={() => {
          setDialogOpen(true);
        }}
      >
        Open Dialog
      </Button>
      <Button
        onClick={() => {
          enqueueSnackbar("button is cliclked", { variant: "success" });
        }}
      >
        show notification
      </Button>
      <Dialog
        draggable={true}
        open={dialogOpen}
        onClose={() => {
          setDialogOpen(false);
        }}
      >
        this is dialog
      </Dialog>
      <IconButton
        onClick={() => {
          enqueueSnackbar("button is cliclked", { variant: "success" });
        }}
      >
        <DoubleArrowIcon />
      </IconButton>
      <br />
      <DatePicker
        path="value3"
        value={getValue("value3")}
        setPathValue={setPathValue}
        errorMessage={getError("value3")}
        renderErrorMessage={(err) => {
          return <span style={{ color: "brown" }}>Hata: {err}</span>;
        }}
      />
    </div>
  );
};

export default MyComponent;
