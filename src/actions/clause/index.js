import {axios} from '@/utils'
const metadata = {
    apiHost: '.'
}
const api_GetHtmlData = 'evcard-test/api/gethtmldata';

const api_provisionList = `${metadata.apiHost}/provisionList`;
const GET_PROVISION_LIST = "GET_PROVISION_LIST";
const api_provision = `${metadata.apiHost}`;
const GET_PROVISION = 'GET_PROVISION';
const PUT_PROVISION = 'PUT_PROVISION';
const DEL_PROVISION = 'DEL_PROVISION';
const api_publish = `${metadata.apiHost}/provision`;
const api_hiProvisionList = `${metadata.apiHost}/hiProvisionList`;
const api_download = `${metadata.apiHost}/provision/download`;
const api_operateLogList = `${metadata.apiHost}/operateLogList`;
const SET_OPERATELOGLIST = 'SET_OPERATELOGLIST'
const api_getProvision = `${metadata.apiHost}/provision`;

const getProvisionList = (params) => {
    return (dispatch) => {
        // axios({method: 'POST', url: api_provisionList, data: params}).then(res => {
        //     dispatch({type: GET_PROVISION_LIST, payload:res})
        // })
         dispatch({type: GET_PROVISION_LIST, payload:{bb:2}})
        }

}

export default {
    getProvisionList
}
export const ACTION_HANDLERS = {
    [GET_PROVISION_LIST]: (clause, {payload}) => {
        return Object.assign({}, clause, {provisionList: payload})
    }
}