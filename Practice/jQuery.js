$(document).ready(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"

  $("form[name='myform']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      firstname: "required",
      lastname: "required",
      phone: "required",
      office: "required",









      email:{
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
      password: {
        required: true,
        minlength: 8,
        maxlength: 12,
      },
      cpassword:{
        required: true,
        equalTo : '[name="password"]'
      },
      month: { required: true },
      day: { required: true },
      year: { required: true },
      'gender[]': {required:true},
      'options[]': {required:true},
      comment: {required:true}

    },
    // Specify validation error messages
    messages: {
      firstname: "Please enter your firstname",
      lastname: "Please enter your lastname",
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long"
      },
      email: "Please enter a valid email address"
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      debugger;
      form.submit();
    }
  });
});
