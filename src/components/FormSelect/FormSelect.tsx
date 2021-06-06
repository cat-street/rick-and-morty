import {
  FormControl,
  InputLabel,
  makeStyles,
  Select,
} from '@material-ui/core';
import { FieldHookConfig, useField } from 'formik';

type Props = {
  label: string;
};

const useStyles = makeStyles({
  formControl: {
    minWidth: '25ch',
    flex: '1 0',
  },
});

const FormSelect = (props: Props & FieldHookConfig<string>) => {
  const [field] = useField(props);
  const { label, defaultValue, children } = props;
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl} size="small" color="secondary">
      <InputLabel id={field.name}>{label}</InputLabel>
      <Select
        labelId={field.name}
        id={field.name}
        defaultValue={defaultValue}
        {...field}
      >
        {children}
      </Select>
    </FormControl>
  );
};

export default FormSelect;
