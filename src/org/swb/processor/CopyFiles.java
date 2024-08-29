package org.swb.processor;

import java.io.File;
import java.io.IOException;
import java.util.Map;
import java.util.Properties;

import org.apache.commons.io.FileUtils;

public class CopyFiles extends AbstractDirProcessor
{
    // --------------------------
    // Variables de configuraci�n
    // --------------------------
    
    private int lengthBaseDir = 0;
    private boolean overwrite = true;
    
    // ----
    // Init
    // ----
    
    @Override
    public void init(String name, Properties config) throws Exception
    {
        // Configuraci�n super()
        super.init(name, config);
        
        // Validamos directorio de salida
        if (todir == null)
        {
            System.err.println("Debe especificar directorio de salida");
            System.exit(1);
        }
        
        // Obtenemos path inicial
        lengthBaseDir = dir.getCanonicalPath().length();
        
        // Miramos si hay overwrite
        if (config.containsKey("overwrite"))
        {
            overwrite = Boolean.parseBoolean(config.getProperty("overwrite"));
        }
    }
    
    // -----------------
    // Log de inicio/fin
    // -----------------
    
    @Override
    protected void startProcess(Map context) throws IOException
    {
        System.out.println("Copy start: " + dir.getCanonicalPath() + " to " + todir.getCanonicalPath());
    }
    @Override
    protected void endProcess(Map context) throws IOException
    {
        System.out.println("Copy end.");
    }    
    
    // ----------------
    // M�todo principal
    // ----------------
    
    @Override
    protected void process(Map context, File srcFile, File dirOrigen) throws IOException, Exception
    {
        File dstFile = new File(todir, srcFile.getCanonicalPath().substring(lengthBaseDir));
        if (dstFile.exists() && !overwrite) return;
        
        System.out.println((dstFile.exists() ? "Overwrite: " : "Copy: ") + srcFile.getCanonicalPath() + " to " + dstFile.getCanonicalPath());
        FileUtils.copyFile(srcFile, dstFile);
    }
}
