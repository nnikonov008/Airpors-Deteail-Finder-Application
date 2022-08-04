import { ChangeEvent, useState } from "react"

interface InputRetern {
    value: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export function useInput (initialValue = ""): InputRetern {
    const [value, setValue] = useState(initialValue)

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return {
        value,
        onChange
    }
}