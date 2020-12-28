import { useModel } from '@/hooks/useModel';
import React from 'react';
import LoadingView from '../../components/LoadingView';
const Home = () => {
    const { test } = useModel('useAuthModel', model => ({ test: model.user }));
    console.log(test)
    return <div>home1<LoadingView></LoadingView></div>
}
export default React.memo(Home);