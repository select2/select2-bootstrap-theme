A Select2 v4 [Theme](https://select2.github.io/examples.html#themes) for Bootstrap 3

**Note: Work in progress – depending on your use case, select2-bootstrap-theme might not be production-ready yet!**

Demonstrations available at
http://select2.github.io/select2-bootstrap-theme/

Tested with Bootstrap v3.3.4 and Select2 v4.0.0
in latest Chrome.

##### Installation

The Select2 Bootstrap Theme only works with Select2 v4.x. Applying the theme requires `select2-bootstrap.css` referenced after the default `select2.css` that comes with Select2:

    <link rel="stylesheet" href="select2.css">
    <link rel="stylesheet" href="select2-bootstrap.css">

To apply the theme, tell Select2 to do so by passing `bootstrap` to the [`theme`](https://select2.github.io/examples.html#themes) option when initializing Select2:

    $( "#dropdown" ).select2({
        theme: "bootstrap"
    });

##### Known issues

##### Changelog

###### 0.1.0-beta.3

 * Fix specifity problems with `.form-control.select2-hidden-accessible`.

###### 0.1.0-beta.2

 * Added Less version.

###### 0.1.0-beta.1

##### Credits

##### Contributing
