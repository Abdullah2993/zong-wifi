$(function(){	
	initSettingPageWords();	
});

//初始化设置菜单 显示文字
function initSettingPageWords(){
	$("#quickTitle").text(jQuery.i18n.prop("quickTitle"));
    $("#dialTitle").text(jQuery.i18n.prop("dialTitle"));
    $("#wlanTitle").text(jQuery.i18n.prop("wlanTitle"));
    $("#dhcpTitle").text(jQuery.i18n.prop("dhcpTitle"));
    $("#dnsTitle").text(jQuery.i18n.prop("dnsTitle"));
    $("#networkTitle").text(jQuery.i18n.prop("networkTitle"));
    $("#SIMPINTitle").text(jQuery.i18n.prop("SIMPINTitle"));
    $("#sysTitle").text(jQuery.i18n.prop("sysTitle"));
    $("#ipv6Title").text(jQuery.i18n.prop("ipv6Title"));
    $("#customFWTitle").text(jQuery.i18n.prop("customFWTitle"));
    $("#stateTitle").text(jQuery.i18n.prop("stateTitle"));
    $("#advanceSetTitle").text(jQuery.i18n.prop("advanceSetTitle"));
    $("#pppoeTitle").text(jQuery.i18n.prop("pppoeTitle"));
}

//打开设置向导
function open_setting_guide(){
	$("#setting_tab_guide").show();
	$("#setting_tab_dial").hide();
	$("#setting_tab_wlan").hide();
	$("#setting_tab_dhcp").hide();
	$("#setting_tab_dns").hide();
	$("#setting_tab_network").hide();
	$("#setting_tab_security").hide();
	$("#setting_tab_system").hide();
	$("#setting_tab_ipv6").hide();
	$("#setting_tab_firewall").hide();
	$("#setting_tab_status").hide();
	$("#setting_tab_advanced").hide();
	$("#setting_tab_pppoe").hide();
	//替换选中功能的ICON背景图片
	$("#setting_guide_img").attr("src","images/setting/setting_active_1.png");
	$("#setting_dial_img").attr("src","images/setting/setting_2.png");
	$("#setting_wlan_img").attr("src","images/setting/setting_3.png");
	$("#setting_dhcp_img").attr("src","images/setting/setting_4.png");
	$("#setting_dns_img").attr("src","images/setting/setting_5.png");
	$("#setting_network_img").attr("src","images/setting/setting_6.png");
	$("#setting_security_img").attr("src","images/setting/setting_7.png");
	$("#setting_system_img").attr("src","images/setting/setting_8.png");
	$("#setting_ipv6_img").attr("src","images/setting/setting_9.png");
	$("#setting_firewall_img").attr("src","images/setting/setting_10.png");
	$("#setting_status_img").attr("src","images/setting/setting_11.png");
	$("#setting_advanced_img").attr("src","images/setting/setting_12.png");
	$("#setting_pppoe_img").attr("src","images/setting/setting_13.png");
	//初始化设置向导
	initQuickSetting();
}
//打开拨号设置
function open_setting_dial(){
	$("#setting_tab_guide").hide();
	$("#setting_tab_dial").show();
	$("#setting_tab_wlan").hide();
	$("#setting_tab_dhcp").hide();
	$("#setting_tab_dns").hide();
	$("#setting_tab_network").hide();
	$("#setting_tab_security").hide();
	$("#setting_tab_system").hide();
	$("#setting_tab_ipv6").hide();
	$("#setting_tab_firewall").hide();
	$("#setting_tab_status").hide();
	$("#setting_tab_advanced").hide();
	$("#setting_tab_pppoe").hide();
	//替换选中功能的ICON背景图片
	$("#setting_guide_img").attr("src","images/setting/setting_1.png");
	$("#setting_dial_img").attr("src","images/setting/setting_active_2.png");
	$("#setting_wlan_img").attr("src","images/setting/setting_3.png");
	$("#setting_dhcp_img").attr("src","images/setting/setting_4.png");
	$("#setting_dns_img").attr("src","images/setting/setting_5.png");
	$("#setting_network_img").attr("src","images/setting/setting_6.png");
	$("#setting_security_img").attr("src","images/setting/setting_7.png");
	$("#setting_system_img").attr("src","images/setting/setting_8.png");
	$("#setting_ipv6_img").attr("src","images/setting/setting_9.png");
	$("#setting_firewall_img").attr("src","images/setting/setting_10.png");
	$("#setting_status_img").attr("src","images/setting/setting_11.png");
	$("#setting_advanced_img").attr("src","images/setting/setting_12.png");
	$("#setting_pppoe_img").attr("src","images/setting/setting_13.png");
	//初始化拨号设置
	initDialSetting();
}
//打开WLAN
function open_setting_wlan(){
	$("#setting_tab_guide").hide();
	$("#setting_tab_dial").hide();
	$("#setting_tab_wlan").show();
	$("#setting_tab_dhcp").hide();
	$("#setting_tab_dns").hide();
	$("#setting_tab_network").hide();
	$("#setting_tab_security").hide();
	$("#setting_tab_system").hide();
	$("#setting_tab_ipv6").hide();
	$("#setting_tab_firewall").hide();
	$("#setting_tab_status").hide();
	$("#setting_tab_advanced").hide();
	$("#setting_tab_pppoe").hide();
	//替换选中功能的ICON背景图片
	$("#setting_guide_img").attr("src","images/setting/setting_1.png");
	$("#setting_dial_img").attr("src","images/setting/setting_2.png");
	$("#setting_wlan_img").attr("src","images/setting/setting_active_3.png");
	$("#setting_dhcp_img").attr("src","images/setting/setting_4.png");
	$("#setting_dns_img").attr("src","images/setting/setting_5.png");
	$("#setting_network_img").attr("src","images/setting/setting_6.png");
	$("#setting_security_img").attr("src","images/setting/setting_7.png");
	$("#setting_system_img").attr("src","images/setting/setting_8.png");
	$("#setting_ipv6_img").attr("src","images/setting/setting_9.png");
	$("#setting_firewall_img").attr("src","images/setting/setting_10.png");
	$("#setting_status_img").attr("src","images/setting/setting_11.png");
	$("#setting_advanced_img").attr("src","images/setting/setting_12.png");
	$("#setting_pppoe_img").attr("src","images/setting/setting_13.png");
	//初始化WLAN设置
	initWlanSetting();
}
//打开DHCP
function open_setting_dhcp(){
	$("#setting_tab_guide").hide();
	$("#setting_tab_dial").hide();
	$("#setting_tab_wlan").hide();
	$("#setting_tab_dhcp").show();
	$("#setting_tab_dns").hide();
	$("#setting_tab_network").hide();
	$("#setting_tab_security").hide();
	$("#setting_tab_system").hide();
	$("#setting_tab_ipv6").hide();
	$("#setting_tab_firewall").hide();
	$("#setting_tab_status").hide();
	$("#setting_tab_advanced").hide();
	$("#setting_tab_pppoe").hide();
	//替换选中功能的ICON背景图片
	$("#setting_guide_img").attr("src","images/setting/setting_1.png");
	$("#setting_dial_img").attr("src","images/setting/setting_2.png");
	$("#setting_wlan_img").attr("src","images/setting/setting_3.png");
	$("#setting_dhcp_img").attr("src","images/setting/setting_active_4.png");
	$("#setting_dns_img").attr("src","images/setting/setting_5.png");
	$("#setting_network_img").attr("src","images/setting/setting_6.png");
	$("#setting_security_img").attr("src","images/setting/setting_7.png");
	$("#setting_system_img").attr("src","images/setting/setting_8.png");
	$("#setting_ipv6_img").attr("src","images/setting/setting_9.png");
	$("#setting_firewall_img").attr("src","images/setting/setting_10.png");
	$("#setting_status_img").attr("src","images/setting/setting_11.png");
	$("#setting_advanced_img").attr("src","images/setting/setting_12.png");
	$("#setting_pppoe_img").attr("src","images/setting/setting_13.png");
	initDhcpSetting();
}
//打开DNS
function open_setting_dns(){
	$("#setting_tab_guide").hide();
	$("#setting_tab_dial").hide();
	$("#setting_tab_wlan").hide();
	$("#setting_tab_dhcp").hide();
	$("#setting_tab_dns").show();
	$("#setting_tab_network").hide();
	$("#setting_tab_security").hide();
	$("#setting_tab_system").hide();
	$("#setting_tab_ipv6").hide();
	$("#setting_tab_firewall").hide();
	$("#setting_tab_status").hide();
	$("#setting_tab_advanced").hide();
	$("#setting_tab_pppoe").hide();
	//替换选中功能的ICON背景图片
	$("#setting_guide_img").attr("src","images/setting/setting_1.png");
	$("#setting_dial_img").attr("src","images/setting/setting_2.png");
	$("#setting_wlan_img").attr("src","images/setting/setting_3.png");
	$("#setting_dhcp_img").attr("src","images/setting/setting_4.png");
	$("#setting_dns_img").attr("src","images/setting/setting_active_5.png");
	$("#setting_network_img").attr("src","images/setting/setting_6.png");
	$("#setting_security_img").attr("src","images/setting/setting_7.png");
	$("#setting_system_img").attr("src","images/setting/setting_8.png");
	$("#setting_ipv6_img").attr("src","images/setting/setting_9.png");
	$("#setting_firewall_img").attr("src","images/setting/setting_10.png");
	$("#setting_status_img").attr("src","images/setting/setting_11.png");
	$("#setting_advanced_img").attr("src","images/setting/setting_12.png");
	$("#setting_pppoe_img").attr("src","images/setting/setting_13.png");
	initDnsSetting();
}
//打开网络
function open_setting_network(){
	$("#setting_tab_guide").hide();
	$("#setting_tab_dial").hide();
	$("#setting_tab_wlan").hide();
	$("#setting_tab_dhcp").hide();
	$("#setting_tab_dns").hide();
	$("#setting_tab_network").show();
	$("#setting_tab_security").hide();
	$("#setting_tab_system").hide();
	$("#setting_tab_ipv6").hide();
	$("#setting_tab_firewall").hide();
	$("#setting_tab_status").hide();
	$("#setting_tab_advanced").hide();
	$("#setting_tab_pppoe").hide();
	//替换选中功能的ICON背景图片
	$("#setting_guide_img").attr("src","images/setting/setting_1.png");
	$("#setting_dial_img").attr("src","images/setting/setting_2.png");
	$("#setting_wlan_img").attr("src","images/setting/setting_3.png");
	$("#setting_dhcp_img").attr("src","images/setting/setting_4.png");
	$("#setting_dns_img").attr("src","images/setting/setting_5.png");
	$("#setting_network_img").attr("src","images/setting/setting_active_6.png");
	$("#setting_security_img").attr("src","images/setting/setting_7.png");
	$("#setting_system_img").attr("src","images/setting/setting_8.png");
	$("#setting_ipv6_img").attr("src","images/setting/setting_9.png");
	$("#setting_firewall_img").attr("src","images/setting/setting_10.png");
	$("#setting_status_img").attr("src","images/setting/setting_11.png");
	$("#setting_advanced_img").attr("src","images/setting/setting_12.png");
	$("#setting_pppoe_img").attr("src","images/setting/setting_13.png");
	initNetwork();
}
//打开安全
function open_setting_security(){
	$("#setting_tab_guide").hide();
	$("#setting_tab_dial").hide();
	$("#setting_tab_wlan").hide();
	$("#setting_tab_dhcp").hide();
	$("#setting_tab_dns").hide();
	$("#setting_tab_network").hide();
	$("#setting_tab_security").show();
	$("#setting_tab_system").hide();
	$("#setting_tab_ipv6").hide();
	$("#setting_tab_firewall").hide();
	$("#setting_tab_status").hide();
	$("#setting_tab_advanced").hide();
	$("#setting_tab_pppoe").hide();
	//替换选中功能的ICON背景图片
	$("#setting_guide_img").attr("src","images/setting/setting_1.png");
	$("#setting_dial_img").attr("src","images/setting/setting_2.png");
	$("#setting_wlan_img").attr("src","images/setting/setting_3.png");
	$("#setting_dhcp_img").attr("src","images/setting/setting_4.png");
	$("#setting_dns_img").attr("src","images/setting/setting_5.png");
	$("#setting_network_img").attr("src","images/setting/setting_6.png");
	$("#setting_security_img").attr("src","images/setting/setting_active_7.png");
	$("#setting_system_img").attr("src","images/setting/setting_8.png");
	$("#setting_ipv6_img").attr("src","images/setting/setting_9.png");
	$("#setting_firewall_img").attr("src","images/setting/setting_10.png");
	$("#setting_status_img").attr("src","images/setting/setting_11.png");
	$("#setting_advanced_img").attr("src","images/setting/setting_12.png");
	$("#setting_pppoe_img").attr("src","images/setting/setting_13.png");
	initSecuritySetting();
}
//打开系统
function open_setting_system(){
	$("#setting_tab_guide").hide();
	$("#setting_tab_dial").hide();
	$("#setting_tab_wlan").hide();
	$("#setting_tab_dhcp").hide();
	$("#setting_tab_dns").hide();
	$("#setting_tab_network").hide();
	$("#setting_tab_security").hide();
	$("#setting_tab_system").show();
	$("#setting_tab_ipv6").hide();
	$("#setting_tab_firewall").hide();
	$("#setting_tab_status").hide();
	$("#setting_tab_advanced").hide();
	$("#setting_tab_pppoe").hide();
	//替换选中功能的ICON背景图片
	$("#setting_guide_img").attr("src","images/setting/setting_1.png");
	$("#setting_dial_img").attr("src","images/setting/setting_2.png");
	$("#setting_wlan_img").attr("src","images/setting/setting_3.png");
	$("#setting_dhcp_img").attr("src","images/setting/setting_4.png");
	$("#setting_dns_img").attr("src","images/setting/setting_5.png");
	$("#setting_network_img").attr("src","images/setting/setting_6.png");
	$("#setting_security_img").attr("src","images/setting/setting_7.png");
	$("#setting_system_img").attr("src","images/setting/setting_active_8.png");
	$("#setting_ipv6_img").attr("src","images/setting/setting_9.png");
	$("#setting_firewall_img").attr("src","images/setting/setting_10.png");
	$("#setting_status_img").attr("src","images/setting/setting_11.png");
	$("#setting_advanced_img").attr("src","images/setting/setting_12.png");
	$("#setting_pppoe_img").attr("src","images/setting/setting_13.png");
	initSystemSetting();
}
//打开IPv6
function open_setting_ipv6(){
	$("#setting_tab_guide").hide();
	$("#setting_tab_dial").hide();
	$("#setting_tab_wlan").hide();
	$("#setting_tab_dhcp").hide();
	$("#setting_tab_dns").hide();
	$("#setting_tab_network").hide();
	$("#setting_tab_security").hide();
	$("#setting_tab_system").hide();
	$("#setting_tab_ipv6").show();
	$("#setting_tab_firewall").hide();
	$("#setting_tab_status").hide();
	$("#setting_tab_advanced").hide();
	$("#setting_tab_pppoe").hide();
	//替换选中功能的ICON背景图片
	$("#setting_guide_img").attr("src","images/setting/setting_1.png");
	$("#setting_dial_img").attr("src","images/setting/setting_2.png");
	$("#setting_wlan_img").attr("src","images/setting/setting_3.png");
	$("#setting_dhcp_img").attr("src","images/setting/setting_4.png");
	$("#setting_dns_img").attr("src","images/setting/setting_5.png");
	$("#setting_network_img").attr("src","images/setting/setting_6.png");
	$("#setting_security_img").attr("src","images/setting/setting_7.png");
	$("#setting_system_img").attr("src","images/setting/setting_8.png");
	$("#setting_ipv6_img").attr("src","images/setting/setting_active_9.png");
	$("#setting_firewall_img").attr("src","images/setting/setting_10.png");
	$("#setting_status_img").attr("src","images/setting/setting_11.png");
	$("#setting_advanced_img").attr("src","images/setting/setting_12.png");
	$("#setting_pppoe_img").attr("src","images/setting/setting_13.png");
	initProtocolSetting();
}
//打开防火墙
function open_setting_firewall(){
	$("#setting_tab_guide").hide();
	$("#setting_tab_dial").hide();
	$("#setting_tab_wlan").hide();
	$("#setting_tab_dhcp").hide();
	$("#setting_tab_dns").hide();
	$("#setting_tab_network").hide();
	$("#setting_tab_security").hide();
	$("#setting_tab_system").hide();
	$("#setting_tab_ipv6").hide();
	$("#setting_tab_firewall").show();
	$("#setting_tab_status").hide();
	$("#setting_tab_advanced").hide();
	$("#setting_tab_pppoe").hide();
	//替换选中功能的ICON背景图片
	$("#setting_guide_img").attr("src","images/setting/setting_1.png");
	$("#setting_dial_img").attr("src","images/setting/setting_2.png");
	$("#setting_wlan_img").attr("src","images/setting/setting_3.png");
	$("#setting_dhcp_img").attr("src","images/setting/setting_4.png");
	$("#setting_dns_img").attr("src","images/setting/setting_5.png");
	$("#setting_network_img").attr("src","images/setting/setting_6.png");
	$("#setting_security_img").attr("src","images/setting/setting_7.png");
	$("#setting_system_img").attr("src","images/setting/setting_8.png");
	$("#setting_ipv6_img").attr("src","images/setting/setting_9.png");
	$("#setting_firewall_img").attr("src","images/setting/setting_active_10.png");
	$("#setting_status_img").attr("src","images/setting/setting_11.png");
	$("#setting_advanced_img").attr("src","images/setting/setting_12.png");
	$("#setting_pppoe_img").attr("src","images/setting/setting_13.png");
	initCustomFWSetting();
}
//打开状态
function open_setting_status(){
	$("#setting_tab_guide").hide();
	$("#setting_tab_dial").hide();
	$("#setting_tab_wlan").hide();
	$("#setting_tab_dhcp").hide();
	$("#setting_tab_dns").hide();
	$("#setting_tab_network").hide();
	$("#setting_tab_security").hide();
	$("#setting_tab_system").hide();
	$("#setting_tab_ipv6").hide();
	$("#setting_tab_firewall").hide();
	$("#setting_tab_status").show();
	$("#setting_tab_advanced").hide();
	$("#setting_tab_pppoe").hide();
	//替换选中功能的ICON背景图片
	$("#setting_guide_img").attr("src","images/setting/setting_1.png");
	$("#setting_dial_img").attr("src","images/setting/setting_2.png");
	$("#setting_wlan_img").attr("src","images/setting/setting_3.png");
	$("#setting_dhcp_img").attr("src","images/setting/setting_4.png");
	$("#setting_dns_img").attr("src","images/setting/setting_5.png");
	$("#setting_network_img").attr("src","images/setting/setting_6.png");
	$("#setting_security_img").attr("src","images/setting/setting_7.png");
	$("#setting_system_img").attr("src","images/setting/setting_8.png");
	$("#setting_ipv6_img").attr("src","images/setting/setting_9.png");
	$("#setting_firewall_img").attr("src","images/setting/setting_10.png");
	$("#setting_status_img").attr("src","images/setting/setting_active_11.png");
	$("#setting_advanced_img").attr("src","images/setting/setting_12.png");
	$("#setting_pppoe_img").attr("src","images/setting/setting_13.png");
	loadDiagPage();
}
//打开高级设置
function open_setting_advanced(){
	$("#setting_tab_guide").hide();
	$("#setting_tab_dial").hide();
	$("#setting_tab_wlan").hide();
	$("#setting_tab_dhcp").hide();
	$("#setting_tab_dns").hide();
	$("#setting_tab_network").hide();
	$("#setting_tab_security").hide();
	$("#setting_tab_system").hide();
	$("#setting_tab_ipv6").hide();
	$("#setting_tab_firewall").hide();
	$("#setting_tab_status").hide();
	$("#setting_tab_advanced").show();
	$("#setting_tab_pppoe").hide();
	//替换选中功能的ICON背景图片
	$("#setting_guide_img").attr("src","images/setting/setting_1.png");
	$("#setting_dial_img").attr("src","images/setting/setting_2.png");
	$("#setting_wlan_img").attr("src","images/setting/setting_3.png");
	$("#setting_dhcp_img").attr("src","images/setting/setting_4.png");
	$("#setting_dns_img").attr("src","images/setting/setting_5.png");
	$("#setting_network_img").attr("src","images/setting/setting_6.png");
	$("#setting_security_img").attr("src","images/setting/setting_7.png");
	$("#setting_system_img").attr("src","images/setting/setting_8.png");
	$("#setting_ipv6_img").attr("src","images/setting/setting_9.png");
	$("#setting_firewall_img").attr("src","images/setting/setting_10.png");
	$("#setting_status_img").attr("src","images/setting/setting_11.png");
	$("#setting_advanced_img").attr("src","images/setting/setting_active_12.png");
	$("#setting_pppoe_img").attr("src","images/setting/setting_13.png");
	initAdvaceSetting();
}
//打开pppoe设置
function open_setting_pppoe(){
	$("#setting_tab_guide").hide();
	$("#setting_tab_dial").hide();
	$("#setting_tab_wlan").hide();
	$("#setting_tab_dhcp").hide();
	$("#setting_tab_dns").hide();
	$("#setting_tab_network").hide();
	$("#setting_tab_security").hide();
	$("#setting_tab_system").hide();
	$("#setting_tab_ipv6").hide();
	$("#setting_tab_firewall").hide();
	$("#setting_tab_status").hide();
	$("#setting_tab_advanced").hide();
	$("#setting_tab_pppoe").show();
	//替换选中功能的ICON背景图片
	$("#setting_guide_img").attr("src","images/setting/setting_1.png");
	$("#setting_dial_img").attr("src","images/setting/setting_2.png");
	$("#setting_wlan_img").attr("src","images/setting/setting_3.png");
	$("#setting_dhcp_img").attr("src","images/setting/setting_4.png");
	$("#setting_dns_img").attr("src","images/setting/setting_5.png");
	$("#setting_network_img").attr("src","images/setting/setting_6.png");
	$("#setting_security_img").attr("src","images/setting/setting_7.png");
	$("#setting_system_img").attr("src","images/setting/setting_8.png");
	$("#setting_ipv6_img").attr("src","images/setting/setting_9.png");
	$("#setting_firewall_img").attr("src","images/setting/setting_10.png");
	$("#setting_status_img").attr("src","images/setting/setting_11.png");
	$("#setting_advanced_img").attr("src","images/setting/setting_12.png");
	$("#setting_pppoe_img").attr("src","images/setting/setting_active_13.png");
}

//选择自动获取DNS服务器按钮
function dns_auto_click(){
	$("#manual_dns_input_table").hide();
	
}
//选择手动输入DNS服务器按钮
function manual_auto_click(){
	$("#manual_dns_input_table").show();	
}