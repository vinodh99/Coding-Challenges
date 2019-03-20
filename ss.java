import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class ss {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
         
        
            StringBuffer wordbuffer = new StringBuffer(word);
            wordbuffer.reverse();
           
            int len=wordbuffer.length();
            
          
                int j=0;
            int index=-1;
            int swapindex=-1;
      
                while(j<len-1){
                            int k=j+1;
                            if(wordbuffer.charAt(j)>wordbuffer.charAt(k)){
                            index=j;
                            break;
                           }
                    j++;
                    }
          //  System.out.println(index);
            for(int range=0;range<=index;range++){
                if(wordbuffer.charAt(range)>wordbuffer.charAt(index+1)){
                    swapindex=range;
                    break;
                }
            }
         //   System.out.println(swapindex);
            if(index!=-1 && swapindex!=-1){
                                               StringBuffer w = new StringBuffer(wordbuffer.substring(0,swapindex));
                                               StringBuffer x = new StringBuffer(wordbuffer.substring(swapindex,swapindex+1));
                                               StringBuffer y = new StringBuffer(wordbuffer.substring(swapindex+1,index+2));
                                                StringBuffer z = new StringBuffer(wordbuffer.substring(index+2,wordbuffer.length()));
                                              
                                               StringBuffer newString = new StringBuffer();
                                               newString.append(w);
                                               newString.append(y);
                                               String str=new String(newString);
                                               char[] chars = str.toCharArray();
                                               Arrays.sort(chars);
                                               StringBuffer sorted = new StringBuffer(new String(chars));
                                               sorted.reverse();
                                            
                                                wordbuffer.setLength(0);
                                                wordbuffer.append(sorted);
                                           
                                                wordbuffer.append(x);
                                         
                                                wordbuffer.append(z);
            
            
            
                   System.out.println(wordbuffer.reverse());
               }
            else{
                System.out.println("no answer");
            }
                
            
           // System.out.println("---------------------");
        
    }
}
