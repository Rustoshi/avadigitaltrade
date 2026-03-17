"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";

export function LiveChatWidget() {
  const pathname = usePathname();

  // Don't render livechat on admin pages
  if (pathname?.startsWith("/admin")) {
    return null;
  }
  return (
    <>
      <Script
        id="smartsupp-widget"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
var _smartsupp = _smartsupp || {};
_smartsupp.key = '448552934d718b7681f61dbd110ef6273db86292';
window.smartsupp||(function(d) {
  var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
  s=d.getElementsByTagName('script')[0];c=d.createElement('script');
  c.type='text/javascript';c.charset='utf-8';c.async=true;
  c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
})(document);
          `
        }}
      />
      <noscript>
        Powered by <a href="https://www.smartsupp.com" target="_blank" rel="noopener noreferrer">Smartsupp</a>
      </noscript>
    </>
  );
}