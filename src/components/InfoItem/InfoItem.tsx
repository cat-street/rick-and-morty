import {
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  SvgIconTypeMap,
} from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { ReactNode } from 'react';

interface Props {
  title: string;
  children: ReactNode;
  icon?: OverridableComponent<SvgIconTypeMap<Record<string, unknown>, 'svg'>>;
}

const useStyles = makeStyles({
  card__item: {
    color: '#000',
  },
});

const InfoItem = ({ title, children, icon: Icon }: Props) => {
  const classes = useStyles();

  return (
    <ListItem className={classes.card__item}>
      {Icon && (
        <ListItemIcon>
          <Icon color="secondary" />
        </ListItemIcon>
      )}
      <ListItemText>
        <strong>{`${title}: `}</strong>
        {children}
      </ListItemText>
    </ListItem>
  );
};

InfoItem.defaultProps = {
  icon: null,
};

export default InfoItem;
