import { supabase } from '../supabase';
import type { FormData } from '../types/form';

export async function submitContactForm(formData: FormData) {
  const { error } = await supabase
    .from('contact_submissions')
    .insert([{
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      user_type: formData.userType
    }]);

  if (error) throw error;
  return true;
}