import TTheme from "./ITheme";


export default interface IEvent {
    id: number;
    title: string;
    theme: TTheme;
    vocal: string;
    fromTime: string;
    toTime: string;
    room: number;
}