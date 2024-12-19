import { useState } from 'react';
import type { FormData } from '../lib/types/form';
import { submitContactForm } from '../lib/api/contact';

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
      
      await submitContactForm(formData);
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