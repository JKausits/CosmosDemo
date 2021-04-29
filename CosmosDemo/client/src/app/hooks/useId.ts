import { useParams } from "react-router";

export const useId = () => {
  const params = useParams<{ id: string }>();

  return params.id;
};
