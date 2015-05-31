A Select2 v4 [Theme](https://select2.github.io/examples.html#themes) for Bootstrap 3

Demonstrations available at
http://fk.github.io/select2-bootstrap-theme/

Tested with Bootstrap v3.3.4 and Select2 v4.0.0
in latest Chrome.

##### Install
To use the theme, you must have select2 working on your page. Applying the theme requires the select2-bootstrap css referenced after the select2 main css:

    <link href="~/Content/select2.css" rel="stylesheet" />
    <link href="~/Content/select2-bootstrap.css" rel="stylesheet" />

To apply the theme, you must set it in the options when initializing the select2 dropdown:

    $(document).ready(function() {
        $("#MyDropdown").select2({
            theme: "bootstrap"
        });
    });
    
This will tell select2 to use the bootstrap theme.
##### Known issues

##### Changelog

###### 0.1.0-beta.2

 * Added Less version.

###### 0.1.0-beta.1

##### Credits

##### Contributing
