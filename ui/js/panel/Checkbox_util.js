//���checkboxs��ֻ��ѡ��һ����Ĭ��value=0 �ı�ѡ�� 
function initCheckboxs(name){
	var ckSelect = document.getElementsByName(name);
	var ckLength = ckSelect.length;
	for(var i = 0; i < ckLength; i++){
		//init value is 0
		if(parseInt(ckSelect[i].value) == 0){
			ckSelect[i].checked = true;
		}
		//init group function
		ckSelect[i].onclick = function(){	
			var ck_Select = document.getElementsByName(name);
			var ck_Select_length = ck_Select.length;
			for(var k = 0; k < ck_Select_length; k++){
				if(this.id == ck_Select[k].id && this.checked == false){								
					this.checked = true;								
				}else if(this.id == ck_Select[k].id && this.checked == true){
					ck_Select[k].checked = true;
				}else if(this.id != ck_Select[k].id && this.checked == false){
					ck_Select[k].checked = false;
				}else if(this.id != ck_Select[k].id && this.checked == true){
					ck_Select[k].checked = false;
				}
			}							
		};
	}
} 

//���checkboxs��ֻ��ѡ��һ������ȡѡ�е�valueֵ
function getCheckboxsValue(name){
	var ckSelect = document.getElementsByName(name); 
	var ckLength = ckSelect.length;
	var value = -1;
	for(var i = 0; i < ckLength; i++){				
		var checked = ckSelect[i].checked;
		if(checked == true){
			value = ckSelect[i].value;	
		}
	}
	return value;	
}

//���checkboxs��ֻ��ѡ��һ��������ѡ�е�valueֵ
function setCheckboxsValue(name,value){
	var ckSelect = document.getElementsByName(name); 
	var ckLength = ckSelect.length;
	for(var i = 0; i < ckLength; i++){				
		if(ckSelect[i].value == value){
			ckSelect[i].checked = true;	
		}else{
			ckSelect[i].checked = false;
		}
	}
}

//����checkboxs����ȡѡ�е�valueֵ 1-��ʾѡ�� 0-��ʾδѡ��
function getCheckboxValue(id){
	var ckSelect = document.getElementById(id); 
	if(ckSelect.checked == true){
		return 1;
	}else{
		return 0;
	}				
}

//����checkboxs������ѡ�е�valueֵ 1-��ʾѡ�� 0-��ʾδ ѡ��
function setCheckboxValue(id,value){
	var ckSelect = document.getElementById(id); 
	if(value == 1){
		ckSelect.checked = true;	
	}else{
		ckSelect.checked = false;
	}
}