import React from "react";

export interface IChildren {
    children(data: {
        [key: string]: string|number|((e: React.FormEvent<HTMLInputElement>) => void)
    }): React.ReactNode,
}
