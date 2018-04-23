var clients = [
    {
        "Name": "Otto Clay",
        "Age": 25,
        "Country": 'United States',
        "Address": "Ap #897-1459 Quam Avenue",
        "Married": false
    },
    {
        "Name": "Connor Johnston", "Age": 45,
        "Country": 'Canada', "Address": "Ap #370-4647 Dis Av.", "Married": true
    },
    {
        "Name": "Lacey Hess", "Age": 29,
        "Country": 'United Kingdom', "Address": "Ap #365-8835 Integer St.", "Married": false
    },
    {
        "Name": "Timothy Henson", "Age": 56,
        "Country": 'United States', "Address": "911-5143 Luctus Ave", "Married": true
    },
    {
        "Name": "Ramona Benton", "Age": 32,
        "Country": 'United Kingdom', "Address": "Ap #614-689 Vehicula Street", "Married": false
    }
];

var countries = [
    {name: "United States", id: 1},
    {name: "Canada", id: 2},
    {name: "United Kingdom", id: 3}
];


angular.module('sa')
    .directive('grid', function ($compile) {
        return {
            scope: {},
            link: function ($scope, elem, attr) {
                $(elem).jsGrid({
                    width: "100%",
                    height: "400px",

                    inserting: true,
                    editing: true,
                    sorting: true,
                    paging: true,

                    data: clients,
                    rowRenderer: function (item, index) {
                        let row = $('<tr draggable="true" sa-draggable class="jsgrid-row"><td class="jsgrid-cell" style="width: 150px;">' + item.Name + '</td><td class="jsgrid-cell jsgrid-align-right" style="width: 50px;">' + item.Age + '</td><td class="jsgrid-cell" style="width: 200px;">' + item.Address + '</td><td class="jsgrid-cell jsgrid-align-center" style="width: 100px;">' + item.Country + '</td><td class="jsgrid-cell jsgrid-align-center" style="width: 100px;"><input type="checkbox" disabled=""></td><td class="jsgrid-cell jsgrid-control-field jsgrid-align-center" style="width: 50px;"><input class="jsgrid-button jsgrid-edit-button" type="button" title="Edit"><input class="jsgrid-button jsgrid-delete-button" type="button" title="Delete"></td></tr>');
                        $compile(row)($scope);
                        return row;
                    },

                    fields: [
                        {name: "Name", editing: false, type: "text", width: 150, validate: "required"},
                        {name: "Age", type: "number", width: 50, editing: false},
                        {name: "Address", type: "text", width: 200, editing: false},
                        {
                            name: "Country", type: "select",
                            items: countries, valueField: "name",
                            textField: "name"
                        },
                        {name: "Married", type: "checkbox", title: "Is Married", sorting: false},
                        {type: "control"}
                    ]
                });

            }
        }
    });