import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core';

const useStyles = makeStyles({
  filter: {
    marginBottom: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
  },
  textField: {
    minWidth: '25ch',
    flex: '1 0',
  },
  formControl: {
    minWidth: '25ch',
    flex: '1 0',
  },
});

const Filter = () => {
  const classes = useStyles();
  return (
    <div className={classes.filter}>
      <TextField
        label="Name"
        className={classes.textField}
        size="small"
        color="secondary"
      />
      <TextField
        label="Species"
        className={classes.textField}
        size="small"
        color="secondary"
      />
      <FormControl
        className={classes.formControl}
        size="small"
        color="secondary"
      >
        <InputLabel id="gender">Gender</InputLabel>
        <Select labelId="gender" id="gender" defaultValue="all">
          <MenuItem value="all">all</MenuItem>
          <MenuItem value="male">male</MenuItem>
          <MenuItem value="female">female</MenuItem>
          <MenuItem value="genderless">genderless</MenuItem>
          <MenuItem value="unknown">unknown</MenuItem>
        </Select>
      </FormControl>
      <FormControl
        className={classes.formControl}
        size="small"
        color="secondary"
      >
        <InputLabel id="status">Status</InputLabel>
        <Select labelId="status" id="status" defaultValue="all">
          <MenuItem value="all">all</MenuItem>
          <MenuItem value="alive">alive</MenuItem>
          <MenuItem value="dead">dead</MenuItem>
          <MenuItem value="unknown">unknown</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Filter;
