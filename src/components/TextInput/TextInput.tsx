import { makeStyles, TextField } from '@material-ui/core';
import { FieldHookConfig, useField } from 'formik';

interface Props {
  label: string;
}

const useStyles = makeStyles({
  textField: {
    minWidth: '25ch',
    flex: '1 0',
  },
});

const TextInput = (props: Props & FieldHookConfig<string>) => {
  const [field] = useField(props);
  const { label } = props;
  const classes = useStyles();

  return (
    <TextField
      label={label}
      id={field.name}
      className={classes.textField}
      size="small"
      color="secondary"
      {...field}
    />
  );
};

export default TextInput;
