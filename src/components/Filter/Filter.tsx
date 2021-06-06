import {
  Button,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from '@material-ui/core';
import FormSelect from 'components/FormSelect/FormSelect';
import TextInput from 'components/TextInput/TextInput';
import { Form, Formik } from 'formik';

const useStyles = makeStyles({
  filter: {
    marginBottom: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
  },
  formControl: {
    minWidth: '25ch',
    flex: '1 0',
  },
  submit: {
    minWidth: '20ch',
  },
});

const Filter = () => {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        name: '',
        species: '',
        gender: 'all',
        status: 'all',
      }}
      onSubmit={(values) => console.log(values)}
    >
      <Form className={classes.filter}>
        <TextInput label="Name" name="name" />
        <TextInput label="Species" name="species" />
        <FormSelect label="Gender" name="gender" defaultValue="all">
          <MenuItem value="all">all</MenuItem>
          <MenuItem value="male">male</MenuItem>
          <MenuItem value="female">female</MenuItem>
          <MenuItem value="genderless">genderless</MenuItem>
          <MenuItem value="unknown">unknown</MenuItem>
        </FormSelect>
        <FormSelect label="Status" name="status" defaultValue="all">
          <MenuItem value="all">all</MenuItem>
          <MenuItem value="alive">alive</MenuItem>
          <MenuItem value="dead">dead</MenuItem>
          <MenuItem value="unknown">unknown</MenuItem>
        </FormSelect>
        <Button
          className={classes.submit}
          size="small"
          type="submit"
          variant="contained"
          color="secondary"
        >
          Submit
        </Button>
      </Form>
    </Formik>
  );
};

export default Filter;
