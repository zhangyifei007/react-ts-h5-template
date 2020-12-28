export const setAuth = (auth: string) => {
	localStorage.setItem('auth', auth);
};

export const getAuth = () => {
	let auth = localStorage.getItem('auth');
	return auth ? auth : '';
};
export const getCode = () => {
	return window.location.search ? searchObj(window.location.search).code : window.location.pathname.split('/')[2];
};
/**
 * 获取url参数
 * @param search url参数 
 */
export const searchObj = (search: string) => {
	let body = JSON.parse(
		'{"'.concat(
			decodeURIComponent(search.substring(1)).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"'),
			'"}'
		)
	);
	return body;
};

export const treeToList = (list: any[], parents: string | string[]) => {
	let adtaList: any[] = [];
	list.forEach((v) => {
		if (typeof parents === 'string') {
			if (v[parents]) {
				adtaList = [ ...adtaList, ...treeToList(v[parents], parents) ];
			} else {
				adtaList.push(v);
			}
		} else {
			let isHave = false;
			parents.forEach((parent) => {
				if (v[parent]) {
					adtaList = [ ...adtaList, ...treeToList(v[parent], parents) ];
					isHave = true;
				}
			});
			if (!isHave) {
				adtaList.push(v);
			}
		}
	});
	return adtaList;
};
