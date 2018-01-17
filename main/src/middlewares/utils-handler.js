// import Warning from "../ui/warning"
// import PopupManager from "nhb-popup-manager";
// import React from "react"
// import {saveCaptcha, saveOtpSms, saveSmsVeriphone, savePopupIDWarning} from "../reducers/utils"
//
// let ActionTypes = {
//     WARNING: "@@utils-handler/WARNING",
//     GET_CAPTCHA: "@@utils-handler/GET_CAPTCHA",
//     GET_OTP_SMS: "@@utils-handler/GET_OTP_SMS",
//     GET_SMS_VERIPHONE: "@@utils-handler/GET_SMS_VERIPHONE"
// }
// export const midWarningPopup = (message) => ({type: ActionTypes.WARNING, message});
// export const midGetCaptcha = () => ({type: ActionTypes.GET_CAPTCHA});
// export const midGetOtpSms = () => ({type: ActionTypes.GET_OTP_SMS});
// export const midGetSmsVeriPhone = () => ({type: ActionTypes.GET_SMS_VERIPHONE});
//
// const utilsHandler = store => {
//
//     function getServiceUrl() {
//         return store.getState().services.baseUrl
//     }
//
//     function getServiceUrlCaptcha() {
//         return store.getState().services.captcha
//     }
//
//     return next => action => {
//         next(action)
//         switch (action.type) {
//             case ActionTypes.WARNING:
//                 var popupIDWarning = PopupManager.open({
//                     className: ["warning-popup"],
//                     autoClose: true,
//                     closeBtn: {
//                         className: "profile-popup-close-btn"
//                     },
//                     modalEnabled: true,
//                     modal: {
//                         style: {
//                             backgroundColor: "rgba(0,0,0,0.5)",
//                             position: "fixed",
//                             left: "0px",
//                             top: "0px",
//                             bottom: "0px",
//                             right: "0px"
//                         }
//                     },
//                     content: <Warning warning={action.message}/>
//                 });
//                 store.dispatch(savePopupIDWarning(popupIDWarning));
//                 break;
//
//             case ActionTypes.GET_CAPTCHA:
//
//                 fetch(getServiceUrlCaptcha()).then((response) => response.json()).then((data) => {
//
//                     store.dispatch(saveCaptcha(data.data.image, data.data.key))
//                 });
//                 break
//             case ActionTypes.GET_OTP_SMS:
//                 var dataObj = {
//                     "command": "get_otp_sms",
//                     "auth": store.getState().outGame.token
//                 }
//                 fetch(getServiceUrl(), {
//                     method: "POST",
//                     body: JSON.stringify(dataObj)
//                 }).then((response) => response.json()).then((response) => {
//                     if (parseInt(response.status) == 0) {
//                         store.dispatch(saveOtpSms(response.data));
//                     } else {
//                         console.log(response);
//                     }
//                 });
//                 break;
//             case ActionTypes.GET_SMS_VERIPHONE:
//                 var dataObj = {
//                     "command": "get_verify_sms",
//                     "auth": store.getState().outGame.token
//                 }
//
//                 fetch(getServiceUrl(), {
//                     method: "POST",
//                     body: JSON.stringify(dataObj)
//                 }).then((response) => response.json()).then((response) => {
//
//                     if (parseInt(response.status) == 0) {
//                         store.dispatch(saveSmsVeriphone(response.data));
//                     } else {
//                         console.log(response);
//                     }
//                 });
//                 break;
//
//         }
//     }
// }
//
// export default utilsHandler;
