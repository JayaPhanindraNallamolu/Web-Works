pancard: "[A-Z]{5}[0-9]{4}[A-Z]{1}";

password: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,}$/;

mobile : ^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$ 

email : ^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$

email2 : ^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$

number : ^-?[0-9][0-9,\.]+$

postalcode : ^[1-9][0-9]{5}$

date : ^(1[0-2]|0?[1-9]).(3[01]|[12][0-9]|0?[1-9]).(?:[0-9]{2})?[0-9]{2}$

website : ^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$

firstname : ^[a-zA-Z][0-9a-zA-Z .,'-]*$

address : ^([a-zA-z0-9\/\\''(),.\-\s]{2,255})$