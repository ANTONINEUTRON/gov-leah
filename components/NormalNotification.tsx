'use client'
import { notification } from 'antd';
import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useAppSelector } from '@/data/redux/hooks';
import { ServiceState, clearServiceMessage } from '@/data/redux/slice/serviceSlice';

const NormalNotification = () => {
  const dispatch = useDispatch();
  const message = useAppSelector((state: {service: ServiceState}) => state.service.message, shallowEqual);

  useEffect(() => {
    if (message) {
      notification.info({
        message: 'info',
        description: message,
        placement: 'topRight',
        // style: {
        //     background: 'white',
        // },
        className: "text-white",
        onClose: () => dispatch(clearServiceMessage()), // Clear error when notification is closed
      });
    }
  }, [message, dispatch]);

  return null; // NormalNotification doesn't render anything
};

export default NormalNotification;