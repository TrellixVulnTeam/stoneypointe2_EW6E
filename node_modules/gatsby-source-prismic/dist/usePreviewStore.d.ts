import * as React from 'react';
import { NodeTree } from './types';
export declare enum ActionType {
    AddPage = 0,
    EnablePreviews = 1,
    DisablePreviews = 2
}
declare type Action = {
    type: ActionType.AddPage;
    payload: {
        path: string;
        data: NodeTree;
    };
} | {
    type: Exclude<ActionType, ActionType.AddPage>;
};
interface State {
    pages: Record<string, NodeTree>;
    enabled: boolean;
}
export declare type PreviewStoreProviderProps = {
    children?: React.ReactNode;
    initialPages?: State['pages'];
    initialEnabled?: State['enabled'];
};
export declare const PreviewStoreProvider: ({ children, initialPages, initialEnabled, }: PreviewStoreProviderProps) => JSX.Element;
export declare const usePreviewStore: () => [State, React.Dispatch<Action>];
export {};
