;(function ContextSearch(callback,localChecking) {
	function search(info, tab) {
		if (info.selectionText) {
			var searchText = info.selectionText;
			var symbols=",/?:@&=+$#;%";		
			for(i=symbols.length-1; i>=0; i--){
				var symbolExp = new RegExp("(\\"+symbols[i]+")", "ig");
				searchText = searchText.replace(symbolExp, encodeURIComponent(symbols[i]));
			}
			searchText = searchText.replace(/( ){1,}/g, encodeURIComponent(" "));
			// console.log(searchText);
			searchText = (searchText.length > 301) ? searchText.substring(0, 300) : searchText;
			// console.log(searchText);
			callback(searchText);
		}
	};
	if(localChecking){
		chrome.contextMenus.create({
			'title' : chrome.i18n.getMessage('srvName') + ' "%s"',
			'contexts' : ['selection'],
			'onclick' : search
		});
	}
}(openTab, localMenuState));

