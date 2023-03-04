import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { Input, Label } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const onFilterInput = evt => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <Label htmlFor="">
      Find contacts by name:
      <Input type="text" value={filter} onChange={onFilterInput} />
    </Label>
  );
};
