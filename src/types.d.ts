import React from "react";

export type ButtonMenu = {
    current: boolean;
};

export type GraphicUniqueProp = {
    width: string;
    height: string;
};

export type DataTableType = {
    headers: Array<string>;
    data: Array<unknown>;
    element: React.FunctionComponent<{
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data: any;
    }>;
};

export type ReportShiftType = {
    turno: number;
    estado: string;
    tipo: string;
    usuario: string;
    drogueria: string;
    fecha_asignacion: string;
    fecha_finalizacion: string;
    receta_medica: string;
    limite_recetas: number;
    novedades: string;
};

export interface GlobalContextInterface {
    user: null | string;
    currentPage: string;
    handleCurrentPage: (page: string) => void; // settea el valor del estado de la vista actual
}

export type DrogueriaType = {
    codigo: string;
    direccion: string;
    id_drogueria: number;
    nombre: string;
};

export type RecetaMedicaType = {
    codigo: string;
    fecha: string;
    id_eps: number;
    id_medicamento: number;
    id_paciente: number;
    id_receta_medica: number;
    medico: string;
};

export type UsuarioType = {
    codigo: string;
    correo: string;
    direccion: string;
    id_usuario: number;
    nombre: string;
    telefono: string;
};

export interface ShiftInterface {
    drogueria: DrogueriaType;
    estado: string;
    fecha_asignacion: string;
    fecha_finalizacion: string;
    id_turno: number;
    la_receta_medica: RecetaMedicaType;
    limite_recetas: number;
    novedades: string;
    tipo: string;
    usuario: UsuarioType;
}
