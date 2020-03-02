// General

    // Nav bar
    $(function() {
                        
        $(".side-nav a").mouseenter( function() {

            $(this).css({

                color: 'black',
                'font-weight':'bolder',
                'text-shadow':'2px 2px white'
            })
        });

        $(".side-nav a").mouseleave( function() {

            $(this).css({

                color: 'white',
                'font-weight': 'unset',
                'text-shadow':' unset'
            })
        });
    });
    //Content
        // Form
            // Form validation
                // Unchecked after we leave a field that has been corrected filled or invalid if it is empty.
                function actual(classIndex){

                    var i;
                    var input;
                    for(i=0; i <= classIndex; i++){
                        input = document.getElementsByClassName("form-control")[i];
                        input.classList.remove('is-valid');
                        if(input.value == ''){
                            input.classList.remove('is-valid');
                            input.classList.add('is-invalid');
                        }
                    }
                }
                // Check or invalid algorithm
                function pattern(classIndex, regex, input){

                    if(classIndex==0 || classIndex==1|| classIndex==3){
                        if (regex.test(input.value)){
                            input.classList.remove('is-valid');
                            input.classList.add('is-invalid');
                        } else{
                            input.classList.remove('is-invalid');
                            input.classList.add('is-valid');
                        }
                    }else{
                        if (!regex.test(input.value)){
                            input.classList.remove('is-valid');
                            input.classList.add('is-invalid');
                        } else{
                            input.classList.remove('is-invalid');
                            input.classList.add('is-valid'); 
                        }
                    }
                }
// General

// ----------------------------------------------------------------------------------------------------------------------

// Index

    // Content
        // Form
            // Field validiation
                
                // Regex and check when we leave a field empty 
                function validInput(classIndex){
                    
                    var input;
                    input = document.getElementsByClassName("form-control")[classIndex];
                    if (classIndex==0 || classIndex==1){
                        // [\d!@#$%^&*(),.?":{}|<>]+
                        var name = /[^a-zA-Z ]+/g;
                        pattern(classIndex, name, input);
                    }else if(classIndex ==2){
                        var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
                        pattern(classIndex, email, input);
                    }else if(classIndex==3){
                        // \D
                        var number = /[^0-9]+/g;
                        pattern(classIndex, number, input);
                    }else{
                        var text = /^(?!\s*$).+/g;
                        pattern(classIndex, text, input);
                    } 
                }
            // Submit button
            function mySubmit(){

                var i;
                var lure = 0;
                var input;
                for(i = 0; i < document.getElementsByClassName('form-control').length; i++ ){
                    input = document.getElementsByClassName("form-control")[i];
                    if(input.getAttribute('class') == "form-control is-invalid" || input.value == ""){
                        lure = 1;
                    }
                }
                if(lure == 1){
                    window.alert('There are some fields that are empty or incorrect');
                }else{
                    window.alert('The message has been sent');
                }
            }
            // Reset button
            function myReset(){

                var i;
                var input;
                for(i = 0; i < document.getElementsByClassName('form-control').length; i++ ){
                    input = document.getElementsByClassName("form-control")[i];
                    input.value = "";
                    input.classList.remove('is-invalid');
                }
        }
// Index

// -----------------------------------------------------------------------------------------------------------------------

// Second

    //Person Object

    var person ={

        name: function(){

                    return document.getElementById('name').value;
        },
        address: function(){

                return document.getElementById('address').value;
            }, 
        email:function(){

                return document.getElementById('email').value;
            },
        creditcardnumber: function(){

            return document.getElementById('ccnumber').value;
        },
        creditcardtype: function(){

                var i;
                var creditcardtype;
                for(i = 0; i < document.getElementsByName('cards').length; i++){
                    if(document.getElementsByName('cards')[i].checked == true){
                        creditcardtype = document.getElementsByName('cards')[i].value;
                    }
                };
                return creditcardtype;
            },
    }
    // Content
        // Form
            // Field validation

                // Regex and check when we leave a field empty 
                function validInputSecond(classIndex){
                            
                    var input;
                    input = document.getElementsByClassName("form-control")[classIndex];
                    if (classIndex==0){
                        // [\d!@#$%^&*(),.?":{}|<>]+
                        var name = /[^a-zA-Z ]+/g;
                        pattern(classIndex, name, input);
                    }else if(classIndex==1){
                        var address = /[^0-9a-zA-Z ]+/g;
                        pattern(classIndex, address, input);
                    }else if(classIndex ==2){
                        var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
                        pattern(classIndex, email, input);
                    }else if(classIndex==3){
                        // \D
                        var number = /[^0-9]+/g;
                        pattern(classIndex, number, input);
                    }
                }
            // Submit button
            function mySubmitSecond(){

                // Variables
                var i;
                var lureInput = 0;
                var lureRadio = 0; 
                var lureCheckBox = 0;
                var input;
                var radio;
                var checkBox;
                // var person = new person();
                //Validations
                for(i = 0; i < document.getElementsByClassName('form-control').length; i++ ){
                    input = document.getElementsByClassName("form-control")[i];
                    if(input.getAttribute('class') == "form-control is-invalid" || input.value == ""){
                        lureInput = 1;
                    }
                }
                for(i=0;i<document.getElementsByName('cards').length;i++){
                    radio = document.getElementsByName('cards')[i];
                    if(radio.checked == true){
                        lureRadio = 1;
                    }
                }
                checkBox = document.getElementById('terms');
                if (checkBox.checked == true){
                    lureCheckBox = 1
                }
                // Output
                if(lureInput == 1){
                    window.alert('There are some fields that are empty or incorrect');
                    if(lureRadio == 0){
                        window.alert('There is not a card selected');
                    }
                    if(lureCheckBox == 0){
                        window.alert('Terms and conditions has not been selected');
                    }
                    actual(3)
                }else if(lureRadio == 0){
                    window.alert('There is not a card selected');
                    if(lureCheckBox == 0){
                        window.alert('Terms and conditions has not been selected');
                    }
                }else if(lureCheckBox == 0){
                    window.alert('Terms and conditions has not been selected');
                }
                else{
                    window.alert("Hi "+ person.name() +" thanks for purchasing our product using your " + 
                    person.creditcardtype() + " credit card no. " + "XXXXXXXX"+ person.creditcardnumber().substr(8,4)  + 
                    ". We will email your receipt on " + person.email() +
                    " and send the product to " + person.address() + ".");
                }
            }
// Second