const apiRoutes = {
    'foods' : {
        'index' : {'url': 'api/foods', 'method' : 'get'},
        'store' : {'url': 'api/foods', 'method' : 'post'},
        'create' : {'url': 'api/foods/create', 'method' : 'get'},
        'update' : {'url': 'api/foods/{0}', 'method' : 'put'},
        'destroy': {'url': 'api/foods/{0}', 'method' : 'delete'},
        'edit': {'url': 'api/foods/{0}/edit', 'method' : 'get'}
    }
}

export default apiRoutes;