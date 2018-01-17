let defaultState = {
    baseUrl: "http://dev3.puppetserver.com/http",
    captcha: "http://dev3.puppetserver.com/captcha?command=get_captcha"
}

const services = (state = defaultState, action) => {
    switch (action.type) {}
    return state
}

export default services
