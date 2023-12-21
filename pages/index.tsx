import {
  CocaColaIcon,
  MenuItem,
  SuccessIcon,
  WarningIcon,
} from "root/shared/ui/atoms";
import { Select } from "root/shared/ui/molecules/select";

const Index = () => {
  return (
    <>
      <Select
        title="Select something"
        icon={<CocaColaIcon />}
      >
        <MenuItem
          value="1"
          icon={<WarningIcon />}
        >
          Item 1
        </MenuItem>
        <MenuItem value="2">Item 2</MenuItem>
        <MenuItem
          value="3"
          icon={<SuccessIcon />}
        >
          Item 3
        </MenuItem>
        <MenuItem
          value="4"
          disabled
        >
          Item 4
        </MenuItem>
      </Select>
    </>
  );
};

export default Index;
