import { Input } from "antd";
import { ChangeEventHandler, ReactNode } from "react";
import { Search } from "react-feather";

interface SearchInputProps{
    query: string;
    onInputChange: ChangeEventHandler;
    className?: string | null;
}

const SearchInput: React.FC<SearchInputProps> = ({query, onInputChange, className})=>{
    return (
        <div className='mx-1 w-full'>
            <Input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={onInputChange}
                prefix={<Search/>}
                style={{borderRadius: '24px'}}
                className={`border w-full h-11 rounded-3xl ${className}`}
            />
        </div>
    )
}

export default SearchInput