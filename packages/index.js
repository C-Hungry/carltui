/**
 * @author alex
 * Date: 2018-06-04
 */
import Message from './message/index.js';
import cButton from './button/index';
import cNotice from './notice/index';
import cRadio from './radio/index';
import cTreeGird from './tree-gird/index';
import cSelect from './select/index';
import cInputNumber from './input-number/index';

const components = [
    Message,
    cButton,
    cNotice,
    cRadio,
    cTreeGird,
    cSelect,
    cInputNumber

]

const install = function(Vue) {
    if (install.installed) return
    components.map(component => Vue.component(component.name, component))

    Vue.prototype.$message = Message
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    Message,
    cButton,
    cNotice,
    cRadio,
    cTreeGird,
    cSelect,
    cInputNumber
}