import { useState } from 'react';
import type { FormData } from '../lib/types/form';
import { supabase } from '../lib/supabase';

interface UseSignUpForm {
  submitForm: (data: FormData) => Promise<boolean>;
  isLoading: boolean;
  error: string | null;
}

export const useSignUpForm = (): UseSignUpForm => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitForm = async (formData: FormData): Promise<boolean> => {
    try {
      setIsLoading(true);
      setError(null);
      
      const { error: supabaseError } = await supabase
        .from('contact_submissions')
        .insert([{
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          user_type: formData.userType
        }]);

      if (supabaseError) throw supabaseError;
      
      return true;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Something went wrong';
      setError(errorMessage);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    submitForm,
    isLoading,
    error,
  };
};