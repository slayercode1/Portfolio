import { TypographyH3 } from '@/components/h3';
import { TypographyP } from '@/components/p';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SubmitHandler, useForm, } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';


const ContactSchema = z.object({
  fullname: z.string({
    required_error: "Fullname is required",
    invalid_type_error: "Name must be a string",
  }).trim(),
  email: z.string().email().trim(),
  phone: z.string().min(10).max(15).trim(),
  message: z.string({
    required_error: "Message is required",
    invalid_type_error: "Name must be a string",
  }),
});

type ContactSchemaType = z.infer<typeof ContactSchema>;

export const Contact = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactSchemaType>({ resolver: zodResolver(ContactSchema) });

  const onSubmit: SubmitHandler<ContactSchemaType> = (data) => {
    console.log(data);
    setLoading(true)
  };
  return (
    <div className=' pt-14 lg:pt-0 fade-out'>
      <div className="relative lg:z-10 max-w-screen-xl mx-auto text-gray-600 sm:px-4 md:px-8">
        <div className="max-w-lg  px-4 sm:mx-auto sm:text-center sm:px-0">
          <TypographyH3 text='Me Contacter' />
          <TypographyP text='Pour m’aider à comprendre au mieux votre projet, veuillez me fournir le maximum de détails possible. Plus j’ai d’informations, mieux je peux répondre à vos besoins.' />
        </div>
        <div className="mt-8 sm:mx-auto px-4 p-8  sm:max-w-lg sm:px-8 mx-4" >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={errors ? "space-y-3" : "space-y-5"}
          >
            <div>
              <Label htmlFor="fullname" className="font-medium">
                Nom (Complet)
              </Label>
              <Input
                {...register('fullname')}
                className='bg-white'
                type="text"
                placeholder='e-g: John Doe'
              />
              {errors?.fullname && <p className="text-sm text-red-600 mt-2">{errors.fullname.message}</p>}
            </div>
            <div>
              <Label htmlFor="email" className="font-medium">
                Adresse e-mail
              </Label>
              <Input
                {...register('email')}
                className='bg-white'
                type="email"
                placeholder='e-g: example@example.com'
              />
              {errors?.email && <p className="text-sm text-red-600 mt-2">{errors.email.message}</p>}
            </div>
            <div>
              <Label htmlFor="phone" className="font-medium">
                Télèphone
              </Label>
              <div className="relative mt-2">
                <Input
                  {...register('phone')}
                  className='bg-white'
                  type="number"
                  placeholder='e-g: 0654 12 34 56'
                />
              </div>
              {errors?.phone && <p className="text-sm text-red-600 mt-2">{errors.phone.message}</p>}
            </div>
            <div>
              <Label htmlFor="message-content" className="font-medium">
                Message
              </Label>
              <textarea
                placeholder='Votre message'
                {...register('message')}
                className="bg-white w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg"></textarea>
              {errors?.message && <p className="text-sm text-red-600 mt-2">{errors.message.message}</p>}
            </div>
            <Button
              variant={"default"}
              className="w-full px-4 py-2 font-medium rounded-lg duration-150"
              disabled
            >
              {
                loading ? <div className="spinner-loader">chargement...</div> : "Envoyer"
              }
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}