var yasoft = "startsearchextcomm";
var extvalue = "homesearchextchrome.commertial#";
var prev = '';
var dom_list = ["yandex.ru", "yandex.kz", "yandex.ua", "yandex.by", "yandex.com", "yandex.com.tr", "ya.ru"];
var default_ui = 'none';
var default_clid1 = 'none';
var cookie_domain = '.chrome-elements.yandex.addons';
var localMenuState = (chrome.i18n.getMessage("searchLocale") == "ru");

function openTab(searchMessage){
	window.open('https://' + chrome.i18n.getMessage("service") + '.yandex.' + chrome.i18n.getMessage("searchLocale") + '/search?text=' + searchMessage + '&from=searchext');
}