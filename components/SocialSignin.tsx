import { Space } from 'antd';
import { GoogleAuthProvider, UserCredential, signInWithPopup } from 'firebase/auth';
import Image from 'next/image';
import CustomRoundButton from './CustomRoundButton';
import { useDispatch } from 'react-redux';
// import { cSignInWithGoogle } from '@/data/redux/actions/authActions';
// import { AppDispatch } from '@/data/redux/store';

const SocialSignin = () => {
  // const dispatch = useDispatch<AppDispatch>()

  // const signInWithGoogle = async () => {
  //   dispatch(cSignInWithGoogle())
  // };

  return (
    <div>
      <Space size="middle">
        <CustomRoundButton
          onClick={()=>{}}//signInWithGoogle}
          >
          <Image 
            src="/images/google.png" 
            alt='Google Signin Icon'
            className='w-8 lg:w-11'
            width={500}
            height={500}
            />
        </CustomRoundButton>
        <CustomRoundButton
          onClick={() => { }}//{signInWithGoogle}
          >
          <Image 
            src="/images/facebook.png" 
            alt='Facebook Signin Icon'
            className='w-8 lg:w-11'
            width={500}
            height={500}
            />
        </CustomRoundButton>
        {/* <CustomRoundButton
          onClick={signInWithGoogle}>
          <Image 
            src="/images/twitterx.png" 
            alt='Twitter Signin Icon'
            className='w-8 lg:w-11 invert dark:invert-0 p-2'
            width={500}
            height={500}
            />
        </CustomRoundButton>
        <CustomRoundButton
          onClick={signInWithGoogle}>
          <Image 
            src="/images/linkedin.png" 
            alt='LinkedIn Signin Icon'
            className='w-8 lg:w-11'
            width={500}
            height={500}
            />
        </CustomRoundButton> */}
      </Space>
    </div>
  );
};

export default SocialSignin;
