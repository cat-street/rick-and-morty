import { useHistory } from 'react-router-dom';
import { Button, makeStyles, MenuItem } from '@material-ui/core';
import { Form, Formik } from 'formik';

import { QueryParams } from 'types';
import { buildQueryString } from 'utils/queryHelpers';

import FormSelect from 'components/FormSelect/FormSelect';
import TextInput from 'components/TextInput/TextInput';

interface Props {
  queryParams: QueryParams;
}

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

const Filter = ({ queryParams }: Props) => {
  const classes = useStyles();
  const history = useHistory();

  const reset = () => {
    history.push('/');
  };

  return (
    <Formik
      initialValues={{ ...queryParams, page: '' }}
      onSubmit={(values) => {
        const query = buildQueryString(values);
        history.push(query);
      }}
      enableReinitialize
      onReset={reset}
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
        <Button
          className={classes.submit}
          size="small"
          type="reset"
          variant="outlined"
          color="secondary"
        >
          Reset
        </Button>
      </Form>
    </Formik>
  );
};

export default Filter;
