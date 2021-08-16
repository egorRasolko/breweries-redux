function mapStateToProps(component) {
    switch(component) {
        case "App": {
            return function (state) {
                return {
                    items: state.items,
                    useSearch: state.useSearch,
                    searchItems: state.searchItems,
                    error: state.error,
                };
            }
        }
        default: return undefined;
    }
}

export default mapStateToProps;