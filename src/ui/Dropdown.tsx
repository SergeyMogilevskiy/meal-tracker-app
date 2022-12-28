import React from 'react';

export const Dropdown = ({ options = [], ...props }: DropdownProps): JSX.Element => (
  <select {...props}>
    {options.map((opt) => (
      <option key={opt} value={opt}>
        {opt}
      </option>
    ))}
  </select>
);

interface DropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
}
