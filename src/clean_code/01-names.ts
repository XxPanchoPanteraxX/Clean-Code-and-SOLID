(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const filesToEvaluate = [
        { id: 1, flagged: false },
        { id: 2, flagged: false },
        { id: 3, flagged: true },
        { id: 4, flagged: false },
        { id: 5, flagged: false },
        { id: 7, flagged: true },
    ]; 
    
    // Archivos marcados para borrar - files to delete
    const filesToDelete = filesToEvaluate.map( file => file.flagged );

    // Malos nombres
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor opción al nombrar
    class User { };
    interface User { };

        
    // día de hoy - today
    const dateNow = new Date();
    
    // días transcurridos - elapsed time in days
    const daysOverTime: number = 23;
    
    // número de archivos en un directorio - number of files in directory
    const numFilesInDirectory = 33;
    
    // primer nombre - first name
    const firstName = 'Fernando';
    
    // primer apellido - last name
    const lastName = 'Herrera';

    // días desde la última modificación - days since modification
    const daysSinceLastModification = 12;
    
    // cantidad máxima de clases por estudiante - max classes per student
    const maxClassesPerStudent = 6;


})();