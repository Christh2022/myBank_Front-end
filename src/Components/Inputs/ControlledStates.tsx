import * as React from 'react';
import { styled } from '@mui/system';
import { useAutocomplete } from '@mui/material';
import { transactionCategories } from '../../utils/IconCategory';
import { FaAngleDown } from 'react-icons/fa6';

const AutocompleteWrapper = styled('div')`
  height: 50px;
  position: relative
`;
const AutocompleteRoot = styled('div')`
  display: flex;
  align-items: center;
  border: 1px solid #ffffff97;
  padding: 0px 10px;
  height: 50px;
  border-radius: 3px;
  transition: border 0.2s ease;

  &.Mui-focused {
    border: 1px solid #fca311;
  }
`;
const Input = styled('input')`
  padding-left: 8px;
  border: none
`;
const Listbox = styled('ul')`
  // border: 1px solid #ffffff97;
  border-radius: 8px;
  padding: 0;
  margin-top: 4px;
  max-height: 250px;
  overflow: auto;
  list-style: none;
  background-color: #1B1919;
  box-shadow: 0 0 8px 0 #000;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
const Option = styled('li')`
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;
const Layout = styled('div')``;

export default function ControlledStates() {
  const [value, setValue] = React.useState<
    (typeof transactionCategories)[0] | null
  >(transactionCategories[0]);
  const [inputValue, setInputValue] = React.useState('');

  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    focused,
  } = useAutocomplete({
    id: 'transaction-categories-autocomplete',
    options: transactionCategories,
    getOptionLabel: (option) => option.label,
    value,
    onChange: (event, newValue) => setValue(newValue),
    inputValue,
    onInputChange: (event, newInputValue) => setInputValue(newInputValue),
  });

  const SelectedIcon = value?.icon;

  return (
    <Layout>
      <AutocompleteWrapper>
        <AutocompleteRoot
          {...getRootProps()}
          className={focused ? 'Mui-focused' : ''}
        >
          {SelectedIcon && <SelectedIcon size={35} />}{' '}
          {/* Icone affichée ici */}
          <Input
            {...getInputProps()}
            placeholder="Select a Category…"
            className={`px-3 border border-[#ffffff9c] outline-0  ${SelectedIcon ? 'text-[#0000] w-[80%]' : 'w-[95%]'}`}
          />
          <FaAngleDown size={20} className="cursor-pointer" />
        </AutocompleteRoot>

        {groupedOptions.length > 0 && (
          <Listbox {...getListboxProps()}>
            {(groupedOptions as typeof transactionCategories)
              .reverse()
              .map((option, index) => {
                const Icon = option.icon;
                return (
                  <Option
                    {...getOptionProps({ option, index })}
                    key={option.key}
                  >
                    <Icon size={25} />
                    {/* <span>{option.label}</span> */}
                  </Option>
                );
              })}
          </Listbox>
        )}
      </AutocompleteWrapper>
    </Layout>
  );
}
