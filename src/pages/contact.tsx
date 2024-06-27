import { TypographyH3 } from '@/components/h3';
import { TypographyP } from '@/components/p';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SubmitHandler, useForm, } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {z} from 'zod';
import { useState } from 'react';
import axios from "axios";
import {toast} from "sonner";
import {useTranslation} from "react-i18next";


const ContactSchema = z.object({
  fullname: z.string({
    required_error: "Le nom complet est requis",
    invalid_type_error: "Le nom doit être une chaîne de caractères",
  }).trim(),
  email: z.string().email("L'adresse email doit être valide").trim(),
  subject: z.string().trim(),
  phone: z.string().min(10, "Le numéro de téléphone doit contenir au moins 10 caractères").max(15, "Le numéro de téléphone doit contenir au plus 15 caractères").trim(),
  message: z.string({
    required_error: "Le message est requis",
    invalid_type_error: "Le message doit être une chaîne de caractères",
  }),
});

type ContactSchemaType = z.infer<typeof ContactSchema>;

export const Contact = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState<boolean>(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isValid  },
    reset
  } = useForm<ContactSchemaType>({ resolver: zodResolver(ContactSchema) });

  const onSubmit: SubmitHandler<ContactSchemaType> = (data) => {
    setLoading(true)
    axios.post('http://localhost:3000/send-email', {
      email: data.email,
      subject: data.subject,
      data:{
        content: data.message,
        phone: data.phone,
        fullName: data.fullname,
      }
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(data => {
        toast.success(data.data.message);
        setLoading(false)
      })
      .catch(error => {
        toast.error(error.message);
        setLoading(false)
      });
    reset()
  };
  return (
    <div className='pt-14 md:pt-0 lg:pt-0 fade-out md:h-[calc(100vh-210px)] h-screen'>
      <div className="relative lg:z-10 max-w-screen-xl mx-auto text-gray-600 px-4 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-2 items-start lg:mt-10">
          <div className="sm:mx-auto text-left sm:px-0 w-full">
            <TypographyH3 text={t('contact.title')}/>
            <TypographyP
              text={t('contact.subTitle')}/>
          </div>
          <div className="mt-4">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={errors ? "space-y-3" : "space-y-5"}
            >
              <div>
                <Label htmlFor="fullname" className="font-medium flex justify-between">
                  {t('contact.field.name')}
                  <img
                    width={24}
                    height={24}
                    src="https://camo.githubusercontent.com/f78d6a4f33cf75bf962fb1159d6278e3af05dfce113be61dd663c20802943e44/68747470733a2f2f632e74656e6f722e636f6d2f534f564d53586d5742316b41414141692f746f6e792d737461722d6a756d70696e672e676966"
                    alt="image-start"
                  />
                </Label>
                <Input
                  {...register('fullname')}
                  className='bg-white w-full'
                  type="text"
                  placeholder='e.g., John Doe'
                />
                {errors?.fullname && <p className="text-sm text-red-600 mt-2">{errors.fullname.message}</p>}
              </div>
              <div>
                <Label htmlFor="email" className="font-medium">
                  {t('contact.field.email')}
                </Label>
                <Input
                  {...register('email')}
                  className='bg-white w-full mt-2'
                  type="email"
                  placeholder='e.g., example@example.com'
                />
                {errors?.email && <p className="text-sm text-red-600 mt-2">{errors.email.message}</p>}
              </div>
              <div>
                <Label htmlFor="subject" className="font-medium flex justify-between">
                  {t('contact.field.subject')}
                </Label>
                <Input
                  {...register('subject')}
                  className='bg-white w-full mt-2'
                  type="text"
                  placeholder={t('contact.field.placeholder_subject')}
                />
                {errors?.subject && <p className="text-sm text-red-600 mt-2">{errors.subject.message}</p>}
              </div>
              <div>
                <Label htmlFor="phone" className="font-medium">
                  {t('contact.field.phone')}
                </Label>
                <div className="relative mt-2">
                  <Input
                    {...register('phone')}
                    className='bg-white w-full'
                    type="number"
                    placeholder='e.g., 0654 12 34 56'
                  />
                </div>
                {errors?.phone && <p className="text-sm text-red-600 mt-2">{errors.phone.message}</p>}
              </div>
              <div>
                <Label htmlFor="message-content" className="font-medium">
                  {t('contact.field.message')}
                </Label>
                <textarea
                  placeholder={t('contact.field.placeholder_message')}
                  {...register('message')}
                  className="bg-white w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg"
                ></textarea>
                {errors?.message && <p className="text-sm text-red-600 mt-2">{errors.message.message}</p>}
              </div>
              <Button
                disabled={!isValid}
                variant={"default"}
                className="w-full px-4 py-2 font-medium rounded-lg duration-150"
              >
                {loading ? <div className="spinner-loader">chargement...</div> : `${t('contact.button')}`}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}