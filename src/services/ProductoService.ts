import { Producto } from '../lib/schemas/Producto';

export const obtenerProductos = () => Producto.find();
export const obtenerProductoPorId = (id: string) => Producto.findById(id);
export const crearProducto = (data: any) => Producto.create(data);
export const actualizarProducto = (id: string, data: any) => Producto.findByIdAndUpdate(id, data, { new: true });
export const eliminarProducto = (id: string) => Producto.findByIdAndDelete(id);
