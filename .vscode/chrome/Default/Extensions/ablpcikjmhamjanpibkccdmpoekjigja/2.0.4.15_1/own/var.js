var yasoft = "searchextcomm";
var extvalue = "searchextchrome.Commertial#";
var prev = '';
var dom_list = ["yandex.ru", "yandex.kz", "yandex.ua", "yandex.by", "yandex.com", "yandex.com.tr", "ya.ru"];
var default_ui = 'none';
var default_clid1 = 'none';
var cookie_domain = '.chrome-elements.yandex.addons';
var localMenuState = (chrome.i18n.getMessage("searchLocale") != "fr");

function openTab(searchMessage){
	window.open('https://yandex.' + chrome.i18n.getMessage("searchLocale") + '/' + chrome.i18n.getMessage("service") + '/' + 'search?text=' + searchMessage + '&from=searchext');
}