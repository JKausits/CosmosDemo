import React, { ChangeEvent, useCallback } from "react";

export const useFormField = <T>(
  setState: (value: React.SetStateAction<T>) => void,
  onSubmit: () => void
) => {
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setState((values) => ({
        ...values,
        [e.target.name]: e.target.value,
      }));
    },
    [setState]
  );

  const handleSubmit = useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault();
      onSubmit();
    },
    [onSubmit]
  );

  return { handleChange, handleSubmit };
};
