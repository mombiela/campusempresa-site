@echo off
setlocal

REM EJECUCIÓN PRINCIPAL
cd %~dp0
java -cp bin;lib/*; org.swb.Executor processor.properties main
REM FIN EJECUCIÓN PRINCIPAL

if %errorlevel% neq 0 (
    echo Ha ocurrido un error. Presiona una tecla para continuar...
    pause >nul
) else (
    echo Script completado exitosamente.
)

endlocal
