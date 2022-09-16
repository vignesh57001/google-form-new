var div=document.createElement("div");
div.setAttribute("id","mainbox");
div.innerHTML=`<h1 style="margin:10px 0px 40px 100px;  font-size:50px; font-family: Georgia, 'Times New Roman', Times, serif" >Form Submission</h4>`

var container=document.createElement("div");
container.setAttribute("class","container");
var row=document.createElement("row");
row.setAttribute("class","row");
var col=document.createElement("col");
col.setAttribute("class","col-md-3");

var fn=label("label","for","fname","First Name : ");
var br1=breaker("br");
var in1=input("input","type","fname","id","fname","placeholder","First Name");
var br2=breaker("br");
var ln=label("label","for","lname","Last Name : ");
var br3=breaker("br");
var in2=input("input","type","lname","id","lname","placeholder","Last Name");
var br4=breaker("br");
var add1=label("label","for","add1","Address Link 1: ");
var br5=breaker("br");
var in3=input("input","type","address","id","add1","placeholder","Temporary Address");
var br6=breaker("br");
var add2=label("label","for","add2","Address Link 2: ");
var br7=breaker("br");
var in4=input("input","type","address","id","add2","placeholder","Permanent Address");
var br8=breaker("br");
var pin=label("label","for","pin","PIN : ");
var br9=breaker("br");
var in5=input("input","type","text","id","pin","placeholder","PIN Number");
var br10=breaker("br");
var gen=label("label","for","gender","Gender : ");
var br11=breaker("br");
var in6=radio("input","type","radio","name","male","id","gender","value","male");
var male=label("label","for","gender","  Male ");
var in7=radio("input","type","radio","name","male","id","gender","value","female");
var female=label("label","for","gender"," Female ");
var br12=breaker("br");
var food=label("label","for","food","Choice Of Food :");
var br13=breaker("br");
var in8=checkbox("input","type","checkbox","name","food","id","food","value","North Indian");
var nor=label("label","for","food"," North Indian");
var br14=breaker("br");
var in9=checkbox("input","type","checkbox","name","food","id","food","value","South Indian");
var sou=label("label","for","food"," South Indian");
var br15=breaker("br");
var in10=checkbox("input","type","checkbox","name","food","id","food","value","Chinese");
var chi=label("label","for","food"," Chinese");
var br16=breaker("br");
var in11=checkbox("input","type","checkbox","name","food","id","food","value","Japanese");
var jap=label("label","for","food"," Japanese");
var br17=breaker("br");
var in12=checkbox("input","type","checkbox","name","food","id","food","value","Sea Foods");
var sea=label("label","for","food","  Sea Foods  ");
var br18=breaker("br");
var state=label("label","for","state","State :");
var br19=breaker("br");
var in13=input("input","type","text","id","state","placeholder","State");
var br20=breaker("br");
var coun=label("label","for","country","Country :");
var br21=breaker("br");
var in14=input("input","type","text","id","country","placeholder","Country");
var br22=breaker("br");
   
var button=document.createElement("button");
button.setAttribute("type","button");
button.addEventListener("click",foo);
button.innerHTML="SUBMIT"
document.body.append(button);


col.append(fn,br1,in1,br2,ln,br3,in2,br4,add1,br5,in3,br6,add2,br7,in4,br8,pin,br9,in5,
    br10,gen,br11,in6,male,in7,female,br12,food,br13,in8,nor,br14,in9,sou,br15,in10,chi,br16,in11,jap,
    br17,in12,sea,br18,state,br19,in13,br20,coun,br21,in14,br22,button);
row.append(col);
container.append(row);
div.append(container);
document.body.append(div);

var col1=document.createElement("col");
col1.setAttribute("class","col-md-9");

var div1=document.createElement("div");
div1.setAttribute("id","temp-data")

div1.innerHTML=`<h1>Temporary Database :</h1>
  <table class="table table-striped">
    <thead class="bg-dark text-light">
        <tr>
        <td>First Name</td>
        <td>Last Name</td>
        <td>Address1</td>
        <td>Address2</td>
        <td>Pincode</td>
        <td>Gender</td>
        <td>Food</td>
        <td>State</td>
        <td>Country</td>
    </tr>
    </thead>
    <tbody class="tbody" id="tbody">
    </tbody>
</table>`

col1.append(div1);

row.append(col1);


function label(tagname,attrname,attrvalue,content) {
var ele=document.createElement(tagname);
ele.setAttribute(attrname,attrvalue);
ele.innerHTML=content;
return ele;
};
function breaker(linebreaker){
    var ele=document.createElement(linebreaker);
    return ele;
};
function input(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2) {
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.setAttribute(attrname1,attrvalue1);
    ele.setAttribute(attrname2,attrvalue2);
    return ele;
};
function radio(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2,attrname3,attrvalue3){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.setAttribute(attrname1,attrvalue1);
    ele.setAttribute(attrname2,attrvalue2);
    ele.setAttribute(attrname3,attrvalue3);
    return ele;
};
function checkbox(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2,attrname3,attrvalue3){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.setAttribute(attrname1,attrvalue1);
    ele.setAttribute(attrname2,attrvalue2);
    ele.setAttribute(attrname3,attrvalue3);
    return ele;
};
function foo(){
    var res1=document.getElementById("fname").value;
    var res2=document.getElementById("lname").value;
    var res3=document.getElementById("add1").value;
    var res4=document.getElementById("add2").value;
    var res5=document.getElementById("pin").value;
    var res6=document.getElementById("gender").value; 
    var res7=document.getElementById("food").value;
    var res8=document.getElementById("state").value;
    var res9=document.getElementById("country").value;

    var div1=document.createElement("div");
    div1.innerHTML=`${res1}`;
    var div2=document.createElement("div");
    div2.innerHTML=`${res2}`;
    var div3=document.createElement("div");
    div3.innerHTML=`${res3}`;
    var div4=document.createElement("div");
    div4.innerHTML=`${res4}`;
    var div5=document.createElement("div");
    div5.innerHTML=`${res5}`;
    var div6=document.createElement("div");
    div6.innerHTML=`${res6}`;
    var div7=document.createElement("div");
    div7.innerHTML=`${res7}`;
    var div8=document.createElement("div");
    div8.innerHTML=`${res8}`;
    var div9=document.createElement("div");
    div9.innerHTML=`${res9}`;

 var tbody = document.getElementById("tbody")
    var tr = document.createElement("tr");
   
    var td1 =document.createElement("td");
    td1.innerHTML=`${res1}`;
    var td2 =document.createElement("td");
    td2.innerHTML=`${res2}`;
    var td3 =document.createElement("td");
    td3.innerHTML=`${res3}`;
    var td4 =document.createElement("td");
    td4.innerHTML=`${res4}`;
    var td5 =document.createElement("td");
    td5.innerHTML=`${res5}`;
    var td6 =document.createElement("td");
    td6.innerHTML=`${res6}`;
    var td7 =document.createElement("td");
    td7.innerHTML=`${res7}`;
    var td8 =document.createElement("td");
    td8.innerHTML=`${res8}`;
    var td9 =document.createElement("td");
    td9.innerHTML=`${res9}`; 
   
    tr.append(td1)
    tr.append(td2)
    tr.append(td3)
    tr.append(td4)
    tr.append(td5)
    tr.append(td6)
    tr.append(td7)
    tr.append(td8)
    tr.append(td9)

    tbody.append(tr) 
}
