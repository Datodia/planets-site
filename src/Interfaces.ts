export interface BurgerProps {
    handleClick: {
        handleClick: () => void;
    };
    name: string;
    to: string;
    color: string;
    strct?: 'string'
}


export interface Props {
    overview: boolean;
    structure: boolean;
    surface: boolean;
    surfaceTxt: boolean;
    setSurfaceTxt: React.Dispatch<React.SetStateAction<boolean>>;
    setOverview: React.Dispatch<React.SetStateAction<boolean>>;
    setStructure: React.Dispatch<React.SetStateAction<boolean>>;
    setSurface: React.Dispatch<React.SetStateAction<boolean>>;
}