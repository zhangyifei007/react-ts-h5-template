/*
 * @Descripttion: 
 * @version: 
 * @Author: 小白
 * @Date: 2020-10-04 19:16:31
 * @LastEditors: 小白
 * @LastEditTime: 2020-10-25 11:27:56
 */
import { useModel } from '@/hooks/useModel';
import React from 'react';
import LoadingView from '../../components/LoadingView';
const Home = () => {
    const { test } = useModel('useAuthModel', model => ({ test: model.user }));
    console.log(test)
    return <div>home1<LoadingView></LoadingView></div>
}
export default React.memo(Home);