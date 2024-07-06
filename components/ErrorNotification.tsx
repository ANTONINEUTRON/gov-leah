'use client'
import { notification } from 'antd';
import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { clearError, AuthState } from '@/data/redux/slice/authSlice';
import { useAppSelector } from '@/data/redux/hooks';
import { ServiceState } from '@/data/redux/slice/serviceSlice';

const ErrorNotification = () => {
  const dispatch = useDispatch();
  const error = useAppSelector((state: {auth: AuthState}) => state.auth.error,shallowEqual);
  const serviceError = useAppSelector((state: {service: ServiceState}) => state.service.error,shallowEqual);

  useEffect(() => {
    if (error || serviceError) {
      notification.error({
        message: 'Error',
        description: error,
        placement: 'topRight',
        // style: {
        //     background: 'white',
        // },
        className: "text-white",
        onClose: () => {dispatch(clearError()); dispatch(clearError())}, // Clear error when notification is closed
      });
    }
  }, [error, dispatch]);

  return null; // ErrorNotification doesn't render anything
};

export default ErrorNotification;