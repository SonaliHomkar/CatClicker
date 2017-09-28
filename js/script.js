
alert("hi");

$(document).ready(function () {
    /*var cnt = 0;
    $("#cat").click(function () {
        cnt += 1;
        alert("count : " + cnt);
        $("#firstcat").val(cnt.toString());
    });
    var cnt1 = 0;
    $("#cat2").click(function () {
        cnt1 += 1;
        alert("count : " + cnt1);
        $("#secondcat").val(cnt1.toString());
    });*/
    var cnt1 = 0;
    var cnt2 = 0;
    var cnt3 = 0;
    var nums = ["cnt1", "cnt2", "cnt3"];
    for (var i = 1; i < 4; i++)
    {
        var ele = document.createElement('img');
        ele.id = "cat" + i.toString();
        ele.src = "I:\\SonaliGit\\Changing Expectations\\cat" + i.toString() + ".jpg";
        alert("I:\\SonaliGit\\Changing Expectations\\cat" + i.toString() + ".jpg");

        var txtele = document.createElement('input');
        txtele.id = "txt" + i.toString();
        txtele.type = "text"
        
        var num = nums[i-1];
        alert("variable : " + num + "value : " + eval(num));
        ele.addEventListener('click', (function (numcopy, txtelecopy) {
            return function () {
                numcopy = eval(numcopy) + 1;
                alert("num : " + numcopy.toString());
                txtelecopy.value = numcopy.toString();
            }
        })(num, txtele));

        document.body.appendChild(ele);
        document.body.appendChild(txtele);
        alert(i);


    }
    
});




