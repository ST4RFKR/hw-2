import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactNode,
  useState,
  useCallback,
  useEffect,
} from 'react';
import SuperInputText from '../../../hw04/common/c1-SuperInputText/SuperInputText';

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type SuperDebouncedInputPropsType = Omit<DefaultInputPropsType, 'type'> & {
  onChangeText?: (value: string) => void;
  onEnter?: () => void;
  error?: ReactNode;
  spanClassName?: string;
  onDebouncedChange?: (value: string) => void;
};

const SuperDebouncedInput: React.FC<SuperDebouncedInputPropsType> = ({
  onChangeText,
  onDebouncedChange,
  ...restProps
}) => {
  const [timerId, setTimerId] = useState<number | undefined>(undefined);
  const [internalValue, setInternalValue] = useState(restProps.value || '');

  const onChangeTextCallback = useCallback(
    (value: string) => {
      setInternalValue(value);
      onChangeText?.(value);

      if (onDebouncedChange) {
        if (timerId !== undefined) {
          clearTimeout(timerId);
        }
        const newTimerId = window.setTimeout(() => {
          onDebouncedChange(value);
        }, 1500);
        setTimerId(newTimerId);
      }
    },
    [onChangeText, onDebouncedChange, timerId],
  );

  useEffect(() => {
    setInternalValue(restProps.value || '');
  }, [restProps.value]);

  return (
    <SuperInputText onChangeText={onChangeTextCallback} {...restProps} value={internalValue} />
  );
};

export default SuperDebouncedInput;
