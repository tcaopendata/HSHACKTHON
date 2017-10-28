using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace PostMessage
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                System.Text.Encoding encode = System.Text.Encoding.GetEncoding("big5");
                StreamReader file = new StreamReader("D:\\readmessage.csv",encode);
                string Line =string.Empty;
                Line = file.ReadLine();
                int time = 0;
                while ((Line = file.ReadLine()) != null)
                {
                    time++;
                    string[] ReadLine_Array = Line.Split(',');
                    string apiurl = string.Format("http://lovetaiwan3rdroad.azurewebsites.net/api/MessageApi/Post?tital={0}&content={1}",ReadLine_Array[0],ReadLine_Array[1]);
                    byte[] buffer = new WebClient().DownloadData(apiurl);
                    string data = Encoding.UTF8.GetString(buffer);
                    Console.WriteLine("第{0}", time + "筆" + data);
                }
                Console.WriteLine("結束了!!");
                Console.ReadLine();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                Console.ReadLine();
            }
        }
    }
}
