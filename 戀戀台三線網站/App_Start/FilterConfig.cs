using System.Web;
using System.Web.Mvc;

namespace 戀戀台三線網站
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
