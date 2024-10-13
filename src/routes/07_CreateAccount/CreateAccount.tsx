// Temps : 1d
// Notes importantes : Pour les formulaires "Nested" il faut utiliser useFormContext() de React-hook-form

import Background from '../../assets/007/bg.png';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from './Input';

const creatAccountSchema = z.object({
    firstname: z.string().min(4, 'At least 4 caracters'),
    lastname: z.string().min(2, 'At least 2 caracters'),
    email: z.string().email('Invalid email').min(1, 'Email is required'),
    password: z.string().min(8, 'Must be at least 8 caracters'),
})

// Typage des données du formulaire
type CreateAccountFormData = z.infer<typeof creatAccountSchema>;

export const CreateAccount = () => {
    const methods = useForm<CreateAccountFormData>({
      resolver: zodResolver(creatAccountSchema),
      mode: 'onChange'
    })

    const onSubmit = (data: CreateAccountFormData) => {
        console.log(data);
        alert('Registred')
    };

  return (
    <div
      className="bg-cover w-full h-full px-20 flex items-center"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <FormProvider {...methods} >
        <form className='flex flex-col gap-4 w-min' onSubmit={methods.handleSubmit(onSubmit)}>
          <p className='uppercase font-bold text-[#969696]'>Start for free</p>
          <h1 className='text-5xl font-bold mb-12'>Create new account</h1>
          <div className='flex flex-row gap-4'>
              <div>
                  <Input type='text' id='firstname' name='firstname' icon='id' label='First name' error={methods.formState.errors.firstname}/>
                  {
                      methods.formState.errors.firstname &&
                          <span className={`font-medium ${methods.formState.errors.firstname ? 'text-red-400' : 'text-green-400'} pl-4`}>
                              {methods.formState.errors.firstname.message}
                          </span>
                  }
              </div>
              <div>
                  <Input type='text' id='lastname' name='lastname' icon='id' label='Last name' error={methods.formState.errors.lastname}/>
                  {methods.formState.errors.lastname && <span className='font-medium text-red-400 pl-4'>{methods.formState.errors.lastname.message}</span>}
              </div>
          </div>
          <div>
              <Input type='email' id='email' name='email' icon='email' label='Email' error={methods.formState.errors.email}/>
              {methods.formState.errors.email && <span className='font-medium text-red-400 pl-4'>{methods.formState.errors.email.message}</span>}
          </div>
          <div>
              <Input type='password' id='password' name='password' icon='password' label='Password' error={methods.formState.errors.password}/>
              {methods.formState.errors.password && <span className='font-medium text-red-400 pl-4'>{methods.formState.errors.password.message}</span>}
          </div>
          <p className='text-[#969696] font-medium mb-6'>Already have an account? <a href="" className='font-bold text-[#406AFE]'>Sign in</a></p>
          <button type='submit' className='bg-[#406AFE] text-white py-3 rounded-3xl shadow-md font-medium shadow-violet-300 hover:bg-[#2843a5] transition-all'>Create account</button>
        </form>
      </FormProvider>
    </div>
  );
};
