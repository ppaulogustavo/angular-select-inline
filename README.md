# Angular Select Inline

The motivation to this project was to improve the user experience with small selects

[Demo](https://stackblitz.com/edit/angular-select-inline)

## How to install

Run `npm i angular-select-inline`

## How to use

Just create a list of options with name like it:

`animals = [
    {name: 'Cat'},
    {name: 'Dog'},
    {name: 'Bird'}
  ];`

and then use the component:

`
<inline-select [label]="'Animals'" [options]="animals" [multi]="true">
</inline-select>
`

## Parameters

[Label]: As the name says, is the label that will be show. It is optional.

[Options]: The array that contains all the options that can be selected.

[Multi]: This set is the user can select one or many elements.

(OnSelect): This is triggered when one element is selected and it returns a list with the selecteds elements.