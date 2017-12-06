import React from 'react'

import Toast from '../../views/Toast'

const Seach = () => {
    const commonInfo = () => {
        Toast.info('普通的Toast我普通的摇！！', 3000);
    };
    const commonSuccess = () => {
        Toast.success('操作成功', 3000, 'fa-check');
    };
    const commonError = () => {
        Toast.error('有错误！！', 3000, undefined, false, (()=>{console.log("callback")})() );
    };
    const commonToast = () => {
        Toast.info('欢迎来到本直播间', 3000, undefined, false);
    };
    const successToast = () => {
        Toast.success('操作成功！', 3000, 'fa-check', false);
    };
    const errorToast = () => {
        Toast.error('操作失败！', 3000, 'fa-times', false);
    };
    const warningToast = () => {
        Toast.warning('警告：手机2s后爆炸', 3000, 'fa-exclamation-triangle', false);
    };
    const loadingToast = () => {
        Toast.show('加载中...', 3000, 'fa-circle-o-notch fa-spin', false);
        const timer = setTimeout(()=>{
            Toast.hide();
        }, 3000);
        clearTimeout(timer);
    };

    return (
        <div className="page toast">

            <div className="button-box">
                <button onClick={commonInfo}>纯文字提示</button><br/>
                <button onClick={commonSuccess}>icon成功提示有图标</button><br/>
                <button onClick={commonError}>纯文字报错提示有回调</button><br/>
            </div>

            <div className="button-box">
                <button type="primary" onClick={commonToast}>普通提示</button><br/>
                <button type="primary" onClick={successToast}>成功提示</button><br/>
                <button type="primary" onClick={errorToast}>失败提示</button><br/>
                <button type="primary" onClick={warningToast}>警告</button><br/>
                <button type="primary" onClick={loadingToast}>加载中</button>
            </div>

        </div>
    )
};

export default Seach
