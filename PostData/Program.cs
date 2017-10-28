using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace PostData
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
            //讀取文字包
            System.Text.Encoding encode = System.Text.Encoding.GetEncoding("big5");
            StreamReader file = new StreamReader("D:\\yyy.csv", encode);
            string Line = string.Empty;
            Line = file.ReadLine();
            int time = 0;
            while ((Line = file.ReadLine()) != null)
            {
                time++;
                string[] ReadLine_Array = Line.Split(',');
                string APIUrl = string.Format("http://lovetaiwan3rdroad.azurewebsites.net/api/contact_usapi/post?name={0}&email={1}&phonenumber={2}&content={3}", ReadLine_Array[0], ReadLine_Array[1], ReadLine_Array[2], ReadLine_Array[3]);
                var buffer = new WebClient().DownloadData(APIUrl);
                string data = Encoding.UTF8.GetString(buffer);
                //var obj = JsonConvert.DeserializeObject(data);
                Console.WriteLine("第{0}", time + "筆" + data);
            }
            Console.WriteLine("跑完了!!!");
            Console.ReadLine();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }
    }
}
