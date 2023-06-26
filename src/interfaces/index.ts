import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IMainContext {
    drawer: boolean;
    toggleDrawer: () => void;
}

export interface IMainContextProvider {
    children: ReactNode | ReactNode[];
}

export interface IData {
    id: number;
    description: string;
    date: Date;
}

export interface IListPage {
    title: string;
    dbKey: `${DB_KEYS}`;
    showFilter?: boolean;
    showAdd?: boolean;
    onAdd?: () => void;
}

export interface IModal {
    title: string;
    text: string;
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    onClose: () => void;
    onConfirm: () => void;
}

export enum DB_KEYS {
    EVENTS = 'events',
    RULES = 'rules',
    SENT_EVENTS = 'sent_events'
}
