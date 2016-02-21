function myFunction(){
        
        var setTable = document.createElement("table");  
          
        setTable.setAttribute('border', '1');  
        setTable.setAttribute('id','tableid');  
        setTable.setAttribute('cellpadding','0');  
        setTable.setAttribute('cellspacing','0');  
        setTable.setAttribute('width','100%');  
          
        var tbody = document.createElement("tbody");  
         
        var tr = document.createElement("tr");  
  
         
        var td1 = document.createElement("td");  
         
        var cellContent1 = document.createTextNode("number");  
          
        var td2 = document.createElement("td");  
        var cellContent2 = document.createTextNode("Date");  
          
        var td3 = document.createElement("td");  
        var cellContent3 = document.createTextNode("Sum");  
          
        var td4 = document.createElement("td");  
        var cellContent4 = document.createTextNode("Excersices");  
          
        var td5 = document.createElement("td");  
        var cellContent5 = document.createTextNode("Result");  
          
        var td6 = document.createElement("td");  
        var cellContent6 = document.createTextNode("operate");  
          
          
        td1.appendChild(cellContent1);  
        tr.appendChild(td1);  
        tbody.appendChild(tr);  
  
        td2.appendChild(cellContent2);  
        tr.appendChild(td2);  
        tbody.appendChild(tr);  
  
        td3.appendChild(cellContent3);  
        tr.appendChild(td3);  
        tbody.appendChild(tr);  
  
        td4.appendChild(cellContent4);  
        tr.appendChild(td4);  
        tbody.appendChild(tr);  
  
        td5.appendChild(cellContent5);  
        tr.appendChild(td5);  
        tbody.appendChild(tr);  
  
        td6.appendChild(cellContent6);  
        tr.appendChild(td6);  
        tbody.appendChild(tr);  
  
          
        setTable.appendChild(tbody);  
   
        var button = document.createElement("input");  
        button.type="button";  
        button.value="New";  
        button.id="addBtn";  
        button.onclick=function(){  
            trdadd();  
        }  
        document.getElementById("tableDiv").appendChild(button);  
        document.getElementById("tableDiv").appendChild(setTable);

        document.getElementById("information").style.display = "none";

        document.getElementById("addBtn").style.backgroundColor = "#f26632";
        document.getElementById("addBtn").style.padding = "4px 15px 4px 15px";
        document.getElementById("addBtn").style.marginBottom = "20px";
        document.getElementById("addBtn").style.marginTop = "20px";
        document.getElementById("addBtn").style.border = "2px solid #f26632";
        document.getElementById("addBtn").style.color = "white";
        document.getElementById("addBtn").style.borderRadius = "4px";


    
        table = document.getElementById("tableid"); 

        document.getElementById("tableid").style.fontSize = "16px";
        document.getElementById("tableid").style.textAlign = "center";
        document.getElementById("tableid").style.color = "#f26632";
        document.getElementById("tableid").style.border = "2px solid #f26632";
   
        var form = document.createElement("form");  
        form.setAttribute("id", "formid");

        var createFormTable = document.createElement("table");  
        createFormTable.setAttribute("id", "aaid");  
  
        var form_table_tbody = document.createElement("tbody");  
          
        var form_table_tr1 = document.createElement("tr");  
        var form_table_tr2 = document.createElement("tr");  
    
        var form_table_td1 = document.createElement("td");  
        form_table_td1.setAttribute("colspan", "6");  
          
        var form_table_td2 = document.createElement("td");  
        form_table_td2.setAttribute("colspan", "6");  
  
        var form_table_td1_text = document.createTextNode("Date： ");


        var form_table_td2_text = document.createTextNode("Sum： ");  
    
        var text1 = document.createElement("input");  
        text1.type="date";  
        text1.id="aid";  
        text1.size="30";  
    
        var text2 = document.createElement("input");  
        text2.type="text";  
        text2.id="bid";  
        text2.size="30";
        text2.name = "sum";
  
        form_table_td1.appendChild(form_table_td1_text);  
        form_table_td1.appendChild(text1);  
        form_table_tr1.appendChild(form_table_td1);  
        form_table_tbody.appendChild(form_table_tr1);  
  
        form_table_td2.appendChild(form_table_td2_text);  
        form_table_td2.appendChild(text2);  
        form_table_tr1.appendChild(form_table_td2);  
        form_table_tbody.appendChild(form_table_tr1);  
    
        var form_table_td3 = document.createElement("td");  
        form_table_td3.setAttribute("colspan", "6");  
          
        var form_table_td4 = document.createElement("td");  
        form_table_td4.setAttribute("colspan", "6");  
  
        var form_table_td3_text = document.createTextNode("Exercises： ");  
        var form_table_td4_text = document.createTextNode("Result： ");    
  
        var select = document.createElement("select");  
        select.id="cid";  
        select.name="exercises";  
 
        var option1 = document.createElement("option");  
        option1.value="1";  
  
        var option2 = document.createElement("option");  
        option1.value="2";  
  
        var option3 = document.createElement("option");  
        option1.value="3";  
  
        var value1 = document.createTextNode("Jogging");  
        var value2 = document.createTextNode("Cycling");  
        var value3 = document.createTextNode("Zumba");  
  
        var text4 = document.createElement("input");  
        text4.type="text";  
        text4.id="eid";  
        text4.size="30";
 
        var buttonSave = document.createElement("input");  
        buttonSave.type="button";  
        buttonSave.value="save";  
        buttonSave.id="saveBtn";


        buttonSave.onclick=function(){  
            baocun();  
        }  


        var buttonReset = document.createElement("input");  
        buttonReset.type="reset";  
        buttonReset.value="reset";  
        buttonReset.id="resetBtn";

        buttonReset.onclick=function(){  
            chongzhi();  
        }  


        option1.appendChild(value1);  
        option2.appendChild(value2);  
        option3.appendChild(value3);  
        select.appendChild(option1);  
        select.appendChild(option2);  
        select.appendChild(option3);  
  
        form_table_td3.appendChild(form_table_td3_text);  
        form_table_td3.appendChild(select);  
        form_table_tr2.appendChild(form_table_td3);  
        form_table_tbody.appendChild(form_table_tr2);  
  
        form_table_td4.appendChild(form_table_td4_text);  
        form_table_td4.appendChild(text4);  
        form_table_tr2.appendChild(form_table_td4);  
        form_table_tbody.appendChild(form_table_tr2);   
  
        createFormTable.appendChild(form_table_tbody);  
        form.appendChild(createFormTable);  
        form.appendChild(buttonSave);  
        form.appendChild(buttonReset);  
        document.getElementById("fid").appendChild(form);  
    }  
 
    function trdadd() {  
        flag = false;  
        document.getElementById("fid").style.display = "block"; //控制显示  
        chongzhi();  
        document.getElementById("aid").disabled = false;
        document.getElementById("bid").value = document.getElementById("total").value;
        document.getElementById("bid").disabled = true; 

        document.getElementById("saveBtn").style.backgroundColor = "#f26632";
        document.getElementById("saveBtn").style.padding = "4px 15px 4px 15px";
        document.getElementById("saveBtn").style.marginBottom = "10px";
        document.getElementById("saveBtn").style.marginRight = "10px";
        document.getElementById("saveBtn").style.border = "2px solid #f26632";
        document.getElementById("saveBtn").style.color = "white";
        document.getElementById("saveBtn").style.borderRadius = "4px";

        document.getElementById("resetBtn").style.backgroundColor = "#f26632";
        document.getElementById("resetBtn").style.padding = "4px 15px 4px 15px";
        document.getElementById("resetBtn").style.marginBottom = "10px";
        document.getElementById("resetBtn").style.marginRight = "10px";
        document.getElementById("resetBtn").style.border = "2px solid #f26632";
        document.getElementById("resetBtn").style.color = "white";
        document.getElementById("resetBtn").style.borderRadius = "4px";


        document.getElementById("fid").style.fontSize = "16px";
        document.getElementById("fid").style.color = "#f26632";
        document.getElementById("fid").style.marginBottom = "10px";
        document.getElementById("fid").style.marginTop = "10px";
        document.getElementById("fid").style.marginRight = "10px";
        document.getElementById("fid").style.paddingLeft = "10px";
        document.getElementById("fid").style.border = "2px solid #f26632";
        document.getElementById("fid").style.borderRadius = "4px";

        document.getElementById("aid").style.border = "2px solid #f26632";
        document.getElementById("aid").style.borderRadius = "4px";

        document.getElementById("bid").style.border = "2px solid #f26632";
        document.getElementById("bid").style.borderRadius = "4px";

        document.getElementById("cid").style.border = "2px solid #f26632";
        document.getElementById("cid").style.borderRadius = "4px";

        document.getElementById("eid").style.border = "2px solid #f26632";
        document.getElementById("eid").style.borderRadius = "4px";


    }  
 
    function baocun() {  

            add(flag);  
            document.getElementById("fid").style.display = "none"; 
  
    }  
 
    function chongzhi() {  
        document.getElementById("formid").reset();  
    }  
        
    function deleteRow(input) {  
        var s = input.parentNode.parentNode.rowIndex;  
        document.getElementById("tableid").deleteRow(s);  
        var num = document.getElementById("tableid").rows.length;  
        for ( var i = 1; i < num; i += 1) {  
            table.rows[i].cells[0].innerHTML = i; //把每行的每一列设为i  
  
        }  
    }  
 
    var table = null;  
    var flag = false;  
    var getselectrow;  
    function getNum() {  
        var haoRow = table.rows[0];  
        return haoRow.cells.length;  
    }  

    function add(flag) {  
        if (!flag) {  
            // var num=getNum();  
            var row = table.insertRow(-1); //为-1时往下加（升序），为0时往上加（id降序）  
            var add1 = row.insertCell(0);  
            var add2 = row.insertCell(1);  
            var add3 = row.insertCell(2);  
            var add4 = row.insertCell(3);  
            var add5 = row.insertCell(4);  
            var add6 = row.insertCell(5);  
  
            add1.innerHTML = document.getElementById("tableid").rows.length - 1;//不加-1时id从二开始；原因：标题占一个  
            add2.innerHTML = document.getElementById("aid").value;  
            add3.innerHTML = document.getElementById("total").value;
            document.getElementById("bid").disabled = true;    
            var tall = document.getElementById("cid");  
            var index = tall.selectedIndex;// 当前坐标  
            var option = tall.options[index];  
            add4.innerHTML = option.text; 
            add5.innerHTML = document.getElementById("eid").value; 
            add6.innerHTML = "<input type='button' id='amendBtn'style='background-color:#f26632;;padding:1px 6px 1px 6px;border:2px solid #f26632;color:white;border-radius:4px;margin:2px 4px 2px 4px' value='Update' onclick='updateRow(this)'><input type='button' id='deleteBtn'style='background-color:#f26632;;padding:1px 6px 1px 6px;border:2px solid #f26632;color:white;border-radius:4px;margin:2px 4px 2px 4px' value='Delete' onclick='deleteRow(this)'>";

  
        } else {  
  
            var row2 = table.rows[getselectrow];//选中当前行  
            //把修改后的值设置到对应的文本框中  
            row2.cells[1].innerHTML = document.getElementById("aid").value;  
            row2.cells[2].innerHTML = document.getElementById("total").value;     
            var pall = document.getElementById("cid");  
            var index = pall.selectedIndex; //当前坐标  
            var option = pall.options[index];  
            row2.cells[3].innerHTML = option.text;
            row2.cells[4].innerHTML = document.getElementById("eid").value;

        }  
    }  
 
    function updateRow(input) {  
        flag = true  
        document.getElementById("aid").disabled = false; //不能启用  
        document.getElementById("fid").style.display = "block";  
  
        var i = input.parentNode.parentNode.rowIndex;  
  
        getselectrow = i;  
        //得到选中行的内容放到文本框  
        document.getElementById("aid").value = table.rows[i].cells[1].innerHTML;  
        // document.getElementById("bid").value = table.rows[i].cells[2].innerHTML;
        document.getElementById("bid").value = document.getElementById("total").value;    
  
        var select = document.getElementById("cid");  
        var index = select.selectedIndex;// 当前坐标  
        var option = select.options[index];  
        option.text = table.rows[i].cells[3].innerHTML;

        document.getElementById("eid").value = table.rows[i].cells[4].innerHTML;  
  
    } 