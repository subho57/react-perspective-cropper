import React from 'react';
import type * as Types from '../types';
export interface ICropperRef {
    image: File | string;
    onDragStop?: (s: Types.CropperState) => void;
    onChange?: (s: Types.CropperState) => void;
    cropperRef?: React.ForwardedRef<Types.CropperRef>;
    pointSize?: number;
    lineWidth?: number;
    pointBgColor?: string;
    pointBorder?: string;
    lineColor?: string;
    maxWidth?: number;
    maxHeight?: number;
    displayGrid?: boolean;
    openCvPath?: string;
    magnification?: number;
    autoCrop?: boolean;
    offset?: {
        x: number;
        y: number;
    };
}
declare const Canvas: React.FC<ICropperRef>;
export default Canvas;
