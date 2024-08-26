/* 
    file:     jscript/functions.js
    version:  1.0
    created:  2004-01-05 by mkkeck
    updated:  2004-01-29 by mkkeck
*/
function pmaWin(uri) {
    width = 780; height = 540;
    if (screen.availWidth > width && screen.availHeight > height) {
        x = parseInt(screen.availWidth / 2.0) - (width / 2.0);
        y = parseInt(screen.availHeight / 2.0) - (height / 2.0);
    } else {
        x = 0;
        y = 0;
        width  = screen.availWidth;
        height = screen.availHeight;
    }
    if (document.getElementById) {
        var html = '';
        html += '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n'
              + '<html xmlns="http://www.w3.org/1999/xhtml">\n'
              + '<head>\n'
              + '    <title>phpMyAdmin | MySQL Database Administration Tool | www.phpmyadmin.net</title>\n'
              + '    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />\n'
              + '    <meta http-equiv="imagetoolbar" content="no" />\n'
              + '    <meta name="description" content="Official website of the phpMyAdmin Project. phpMyAdmin is a tool written in PHP intended to handle the administration of MySQL over the web." />\n'
              + '    <meta name="keywords" content="phpMyAdmin, php, mysql, administration, database, tables, admin, opensource, software, demo, free, download" />\n'
              + '    <meta name="author" content="the phpMyAdmin Developers Team" />\n'
              + '    <meta name="reply-to" content="phpmyadmin-devel@lists.sourceforge.net" />\n'
              + '    <meta name="copyright" content="the phpMyAdmin Developers Team" />\n'
              + '    <meta name="revisit-after" content="15 days" />\n'
              + '    <meta name="identifier-url" content="http://www.phpmyadmin.net/" />\n'
              + '    <link href="css/main.css" rel="stylesheet" type="text/css" />\n'
              + '    <script language="javascript" type="text/javascript">\n'
              + '    <!--\n'
              + '        self.focus();\n'
              + '    //-->\n'
              + '    </script>\n'
              + '</head>\n'
              + '<frameset rows="84,*" frameborder="no" border="0" framespacing="0">\n'
              + '    <frame src="./header.html" name="topFrame" scrolling="no" noresize="noresize" id="topFrame" />\n'
              + '    <frame src="' + uri + '" name="mainFrame" id="mainFrame" />\n'
              + '</frameset>\n'
              + '<noframes>\n'
              + '    <body bgcolor="#ffffff" text="#000000">\n'
              + '        <div class="container">\n'
              + '            <!-- pma logo and pma title -->\n'
              + '            <div style="width: 430px; float: left; padding-left: 5px;">\n'
              + '                <div style="text-align: left; font-family: Verdana, Arial, Helvetica, sans-serif;">\n'
              + '                    <h1 style="text-align: left; padding: 0px; margin: 0px; font-size: 30px; font-weight: bold;">\n'
              + '                        <font style="color: #000000;">The </font>\n'
              + '                        <font style="color: #7584b3;">php</font><font style="color: #ffad17;">MyAdmin </font>\n'
              + '                        <font style="color: #000000;">Project</font>\n'
              + '                    </h1>\n'
              + '                    <h2 style="text-align: right; padding: 0px; margin: 0px; font-size: 20px; font-weight: normal; color: #000000;"><i>Effective MySQL Management</i></h2>\n'
              + '                    <div style="text-align: center; padding: 2px; font-size: 10px; font-weight: normal;">BROWSER BASED &#8226; PHP5-SUPPORT &#8226; MYSQL 4.1 SUPPORT &#8226; OPEN-SOURCE</div>\n'
              + '                </div>\n'
              + '            </div>\n'
              + '            <div style="width: 140px; float: right;">\n'
              + '                <img src="images/pma_logo.gif" width="140" height="75" border="0" alt="phpMyAdmin Logo" title="The phpMyAdmin Project" />\n'
              + '            </div>\n'
              + '            <div style="clear: both; text-align: center;"><img src="images/1x1blind.gif" width="1" height="5" border="0" alt="" /></div>\n'
              + '            <div class="content">Your browser doesn\'t support frames<br />Please click on the link below to get the requested document<br />\n'
              + '                <span class="gotopage"><b><a href="' + uri + '" target="_self">' + uri + '</a></b></span>\n'
              + '            </div>\n'
              + '        </div>\n'
              + '    </body>\n'
              + '</noframes>\n'
              + '</html>\n'
              + '';
        var win = window.open("", "pmadocs", "top=" + y + ",left=" + x + ",width=" + width + ",height=" + height 
                                           + ",resizable=yes,scrollbars=yes,status=yes,menubar=yes,location=yes");
        var newWin = win.document;
        newWin.open();
        newWin.write(html);
        newWin.close();
    } else {
        var win = window.open(uri, "pmadocs", "top=" + y + ",left=" + x + ",width=" + width + ",height=" + height 
                                           + ",resizable=yes,scrollbars=yes,status=yes,menubar=yes,location=yes");
    }
}

function pmaScreen(uri,theme,dluri) {
    width = 620; height = 440;
    if (screen.availWidth > width && screen.availHeight > height) {
        x = parseInt(screen.availWidth / 2.0) - (width / 2.0);
        y = parseInt(screen.availHeight / 2.0) - (height / 2.0);
    } else {
        x = 0;
        y = 0;
        width  = screen.availWidth;
        height = screen.availHeight;
    }
    if (document.getElementById) {
        var html = '';
        html += '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n'
              + '<html xmlns="http://www.w3.org/1999/xhtml">\n'
              + '<head>\n'
              + '    <title>phpMyAdmin | MySQL Database Administration Tool | www.phpmyadmin.net</title>\n'
              + '    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />\n'
              + '    <meta http-equiv="imagetoolbar" content="no" />\n'
              + '    <meta name="description" content="Official website of the phpMyAdmin Project. phpMyAdmin is a tool written in PHP intended to handle the administration of MySQL over the web." />\n'
              + '    <meta name="keywords" content="phpMyAdmin, php, mysql, administration, database, tables, admin, opensource, software, demo, free, download" />\n'
              + '    <meta name="author" content="the phpMyAdmin Developers Team" />\n'
              + '    <meta name="reply-to" content="phpmyadmin-devel@lists.sourceforge.net" />\n'
              + '    <meta name="copyright" content="the phpMyAdmin Developers Team" />\n'
              + '    <meta name="revisit-after" content="15 days" />\n'
              + '    <meta name="identifier-url" content="http://www.phpmyadmin.net/" />\n'
              + '    <link href="css/main.css" rel="stylesheet" type="text/css" />\n'
              + '    <script langugae="javascript" type="text/javascript">\n'
              + '    <!--\n'
              + '        self.focus();\n'
              + '    //-->\n'
              + '    </script>\n'
              + '</head>\n'
              + '<body bgcolor="#ffffff" text="#000000">\n'
              + '    <div style="padding: 0px; margin: 0px;">\n'
              + '        <!-- pma logo and pma title -->\n'
              + '        <div style="width: 430px; float: left; padding-left: 5px;">\n'
              + '            <div style="text-align: left; font-family: Verdana, Arial, Helvetica, sans-serif;">\n'
              + '                <h1 style="text-align: left; padding: 0px; margin: 0px; font-size: 30px; font-weight: bold;">\n'
              + '                    <font style="color: #000000;">The </font>\n'
              + '                    <font style="color: #7584b3;">php</font><font style="color: #ffad17;">MyAdmin </font>\n'
              + '                    <font style="color: #000000;">Project</font>\n'
              + '                </h1>\n'
              + '                <h2 style="text-align: right; padding: 0px; margin: 0px; font-size: 20px; font-weight: normal; color: #000000;"><i>Effective MySQL Management</i></h2>\n'
              + '                <div style="text-align: center; padding: 2px; font-size: 10px; font-weight: normal;">BROWSER BASED &#8226; PHP5-SUPPORT &#8226; MYSQL 4.1 SUPPORT &#8226; OPEN-SOURCE</div>\n'
              + '            </div>\n'
              + '        </div>\n'
              + '        <div style="width: 140px; float: right;">\n'
              + '            <img src="images/pma_logo.gif" width="140" height="75" border="0" alt="phpMyAdmin Logo" title="The phpMyAdmin Project" />\n'
              + '        </div>\n'
              + '        <div style="clear: both; text-align: center; border-bottom: 1px solid #333333;"><img src="images/1x1blind.gif" width="1" height="5" border="0" alt="" /></div>\n'
              + '        <div><img src="images/1x1blind.gif" width="1" height="5" border="0" alt="" /></div>\n'
              + '        <div class="content" style="text-align: center;">'
              + '            <h2><font style="color: #000000">Theme: </font>' + theme + '</h2>\n'
              + '            <div align="center"><img src="' + uri + '" border="1" alt="screen" title="screen" vspace="3" /></div>\n'
              + '            <div align="center"><b>[ <a href="' + dluri + '" target="_blank" title="download">download theme</a> ]&nbsp;&nbsp;&nbsp;&nbsp;[ <a href="javascript:self.close()" title="close">close window</a> ]</b></div>\n'
              + '        </div>\n'
              + '    </div>\n'
              + '</body>\n'
              + '</html>\n'
              + '';
        var win = window.open("", "pmadocs", "top=" + y + ",left=" + x + ",width=" + width + ",height=" + height 
                                           + ",resizable=yes,scrollbars=yes,status=yes,menubar=no,location=no");
        var newWin = win.document;
        newWin.open();
        newWin.write(html);
        newWin.close();
    } else {
        var win = window.open(uri, "pmadocs", "top=" + y + ",left=" + x + ",width=" + width + ",height=" + height 
                                           + ",resizable=yes,scrollbars=yes,status=yes,menubar=no,location=no");
    }
}
    
