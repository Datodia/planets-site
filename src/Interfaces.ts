export interface BurgerProps {
    handleClick: {
        handleClick: () => void;
    };
    name: string;
    to: string;
    color: string;
    strct?: 'string'
}