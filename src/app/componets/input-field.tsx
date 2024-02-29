'use client'

import clsx from "clsx";
import React from "react";

export interface InputFieldProps{ 
    label?: string
}

export default function InputField({ label, id, ...rest}: InputFieldProps) {
    return (
        <div>{label && <label htmlFor="id" className="mb-2 text-base color-gray-900">{ label}</label>}</div>
        )
}