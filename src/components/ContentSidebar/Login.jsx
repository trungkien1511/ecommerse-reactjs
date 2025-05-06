import Button from '../Button';
import InputCommon from '../InputCommon/InputCommon';

const Login = () => {
    return (
        <div className='text-[#555] space-y-[15px]'>
            <div className='text-center mb-[15px] uppercase '>Sign in</div>
            <InputCommon label={`Email`} type={`text`} />
            <InputCommon label={`Password`} type={`password`} />
            <div className='flex gap-2.5 items-center '>
                <input type='checkbox' />
                <span className='text-black text-[14px]'>Remember me</span>
            </div>
            <Button content={`Login`} />
            <div className='text-[14px] text-center'>Lost your password?</div>
        </div>
    );
};

export default Login;
