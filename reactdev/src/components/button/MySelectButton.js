import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

/*
title: '',
href:'',
onChange:''
*/
function MySelectButton({options, defaultTitle, setFilter, filter}) {

  const buttonClick = (event) => {
    event.preventDefault()
    //console.log(event.target.dataset.sort)
    setFilter({...filter, selectedSort: event.target.dataset.sort})
  }

  return (
    <DropdownButton id="dropdown-basic-button" title={defaultTitle}>
        {
            options.map((option, index) => <Dropdown.Item 
                key={index}
                href={option.href}
                onClick={buttonClick}
                data-sort={option.title}
              >{option.title}</Dropdown.Item>)
        }
    </DropdownButton>
  );
}

export default MySelectButton;