import Image from 'next/image';
import React from 'react';

interface Props
  extends Partial<Omit<React.ReactHTMLElement<HTMLInputElement>, 'type'>> {
  label?: string;
  placeholder?: string;
  id?: string;
}

const LogoUploader = ({ label, placeholder, id, ...rest }: Props) => {
  return (
    <div className="flex gap-18 mb-3">
      <label
        htmlFor={id}
        className="flex flex-col items-center justify-center w-40 h-40 bg-white border border-slate-900 border-dashed rounded-full"
      >
        <Image
          className="mb-1"
          width={48}
          height={48}
          src="/icons/upload.svg"
          alt="upload"
        />
        {placeholder && (
          <p className="text-base text-gray-500">{placeholder}</p>
        )}
        <input
          {...rest}
          id={id}
          type="file"
          accept="image/*"
          className="hidden"
        />
      </label>
    </div>
  );
};

export default LogoUploader;
