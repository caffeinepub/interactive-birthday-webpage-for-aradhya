import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface AppState {
    screen: bigint;
    balloonsPopped: Array<boolean>;
}
export interface backendInterface {
    getState(): Promise<AppState>;
    nextScreen(screenNum: bigint): Promise<void>;
    popBalloon(index: bigint): Promise<boolean>;
}
