# Angular Select Inline

The motivation to this project was to improve the user experience with small selects

[Demo](https://stackblitz.com/edit/angular-select-inline)

## How to install

Run `npm i angular-select-inline`

## How to use

Just create a list of options objects with name, like it:

```
animals = [
    {name: 'Cat'},
    {name: 'Dog'},
    {name: 'Bird'}
  ];
```

and then use the component:

```
<select-inline [label]="'Animals'" [options]="animals" [multi]="true">
</select-inline>
```

## Parameters

• **label** (input): As the name says, is the label that will be showed. It is **optional**.

• **options** (input): The array that contains all the options that can be selected. It is **required**.

• **multi** (input): This set is the user can select one or many elements. It is **optional**.

• **selected** (output): The event that is triggered when an element is selected. It returns an array all the elements selected (can be one or more).