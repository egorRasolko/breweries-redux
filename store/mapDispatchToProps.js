import { bindActionCreators } from 'redux';
import {searchData, clearSearch, loadData} from './actionCreators/allActions.js';

function mapDispatchToProps(component) {
	switch (component) {
		case "App": return function (dispatch) {
			return {
				change_search_value: bindActionCreators(searchData, dispatch),
                clear_search: bindActionCreators(clearSearch, dispatch),
				load_data: bindActionCreators(loadData, dispatch)
			};
		};
		default: return undefined;
	}
}

export default mapDispatchToProps;