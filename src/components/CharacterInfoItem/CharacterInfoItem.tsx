import { ListItem, ListItemIcon, ListItemText, SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';

interface Props {
  text: string;
  icon: OverridableComponent<SvgIconTypeMap<Record<string, unknown>, 'svg'>>
}

const CharacterInfoItem = ({ text, icon: Icon }: Props) => (
  <ListItem>
    <ListItemIcon>
      <Icon color="secondary" />
    </ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>
);

export default CharacterInfoItem;
