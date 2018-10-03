import { Option } from './option';

export interface InlineSelect {

    toggleOption(selectedOption: Option, options: Option[]): void;

}
