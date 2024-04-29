import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

/*
title: '',
href:'',
onChange:''
*/
function MySelectButton({options, defaultTitle}) {
  return (
    <DropdownButton id="dropdown-basic-button" title={defaultTitle}>
        {
            options.map((option, index) => <Dropdown.Item 
                key={index}
                href={option.href}>{option.title}</Dropdown.Item>)
        }
    </DropdownButton>
  );
}

export default MySelectButton;