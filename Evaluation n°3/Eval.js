$(document).ready(function(){
    $('.single-item').slick(
        {   
            dots:true,
        }
    );
});



function selecteur() {
    let tab = ["Service client", "Service technique", "Service web", "Service SAV"];
                    let text = "";
                    console.log(tab);
                    for (i of tab) {
                        text += "<option>" + i + "</option>"
                    }
                    console.log(text);
                    $("select").html(text);
 }

        function retour()
        {
            $('body').animate({
                scrollTop: '0px'
            },
            1500);
            return false;
        }


        function verif()
        {
            var sujet = $('#sujet').val();

            if (sujet =='')
            {
                $('#erreursujet').show();
                $('#erreursujet').addClass('error');
            }
            else
            {
                $('#erreursujet').hide();
            }
        }

        Sujet()
        function Sujet()
        {
            var text = '';
            var tab = ['', 'Service client', 'Service technique', 'Service web', 'Service SAV'];

            for (i of tab)
            {
                text += '<option value="'+i+'">' + i + '</option>';
            }
            
            $('#sujet').html(text);
        }



        function verifsujet()
        {
            var sujet = $('#sujet').val();

            if (sujet =='')
            {
                $('#erreursujet').show();
                $('#erreursujet').addClass('error');
            }
            else
            {
                $('#erreursujet').hide();
            }
        }


        function verifmail()
        {
            var email = $('#mail').val();
            var regex = new RegExp("^[\w.-]+@[A-Za-z0-9.-]+.[a-z]{2,4}$");

            if ((email =='') || (!regex.test(email)))
            {
                $('#erreurmail').show();
                $('#erreurmail').addClass('error');
            }
            else
            {
                $('#erreurmail').hide();
            }
        }


        function verifmessage()
        {
            var message = $('#area').val();

            if (message =='')
            {
                $('#erreurmessage').show();
                $('#erreurmessage').addClass('error');
            }
            else
            {
                $('#erreurmessage').hide();
            }
        }


        $(window).scroll(function()  {
            var sticky = $(window).scrollTop();
            var top = $(window).scrollTop();

            if (sticky >200) 
            {
                $('#header').addClass('fixe');
                $('#imgjardin').hide();
            }
            else{
                $('#header').removeClass('fixe');
                $('#imgjardin').show();
            }

            if(top > 300)
            {
                $('#returntop').show();
            }
            else{
                $('#returntop').hide();
            }
        })