/* Registrika site application. Settings are loaded from data/site.json. */
async function boot() {
  const response = await fetch("./data/site.json", { cache: "no-store" });
  if (!response.ok) throw new Error("Could not load data/site.json");
  const SITE = await response.json();

/* ===== Settings: change these once and the whole site updates ===== */


const CATS = [
  {id:"start", name:"Start a business"},
  {id:"tax", name:"GST & income tax"},
  {id:"ip", name:"Trademark & IP"},
  {id:"comply", name:"Annual compliance"},
  {id:"licence", name:"Licences"}
];

const SERVICES = [
 {id:"pvt",cat:"start",name:"Private Limited Company",form:"SPICe+ · AGILE-PRO-S",fee:6999,tat:"7–10 days",
  sum:"The most trusted structure for startups and growing businesses. Limited liability, separate legal identity and easy to raise investment.",
  inc:["Name approval through SPICe+ Part A","2 Digital Signature Certificates","DIN for up to 2 directors","MOA & AOA drafting","Certificate of Incorporation with PAN & TAN","EPFO, ESIC and bank account application via AGILE-PRO-S"],
  docs:["PAN and Aadhaar of each director","Passport-size photo of each director","Bank statement or utility bill of each director (under 2 months old)","Registered office proof: utility bill + rent agreement or owner NOC"],
  steps:["Document check and DSC","Name reservation","Incorporation filing with MCA","Certificate, PAN and TAN issued"]},
 {id:"llp",cat:"start",name:"Limited Liability Partnership",form:"FiLLiP · Form 3",fee:5999,tat:"10–15 days",
  sum:"Partnership flexibility with limited liability. A good fit for professional firms, agencies and family businesses.",
  inc:["Name reservation (RUN-LLP)","2 DSCs and DPINs","Incorporation via FiLLiP","LLP agreement drafting and Form 3 filing","Certificate of Incorporation with PAN & TAN"],
  docs:["PAN and Aadhaar of each partner","Photo of each partner","Address proof of each partner","Registered office proof with owner NOC"],
  steps:["DSC and name reservation","FiLLiP incorporation filing","LLP agreement drafted and signed","Form 3 filed within 30 days"]},
 {id:"opc",cat:"start",name:"One Person Company",form:"SPICe+ · INC-3",fee:6499,tat:"7–10 days",
  sum:"Company status with a single founder. Limited liability without needing a co-founder.",
  inc:["Name approval","DSC for director","Nominee consent (INC-3)","MOA & AOA","Certificate of Incorporation with PAN & TAN"],
  docs:["PAN and Aadhaar of director and nominee","Photo and address proof of director","Registered office proof"],
  steps:["DSC and nominee consent","Name reservation","Incorporation filing","Certificate issued"]},
 {id:"partner",cat:"start",name:"Partnership Firm",form:"Partnership deed · Form 1",fee:2999,tat:"7–15 days",
  sum:"A simple structure for two or more people running a business together. Registration with the state Registrar of Firms is recommended.",
  inc:["Partnership deed drafting","Stamp duty guidance for your state","Registration with Registrar of Firms (where applicable)","PAN application for the firm"],
  docs:["PAN and Aadhaar of all partners","Business address proof","Agreed capital and profit-sharing ratio"],
  steps:["Deed drafted and reviewed","Deed signed on stamp paper","Registration filed with state","Firm PAN issued"]},
 {id:"prop",cat:"start",name:"Sole Proprietorship",form:"GST · Udyam",fee:1499,tat:"3–7 days",
  sum:"The quickest way for one person to start trading, using GST and Udyam registration as business proof.",
  inc:["Advice on the registrations you actually need","GST registration or Udyam registration","Shop & Establishment guidance","Current account opening checklist"],
  docs:["PAN and Aadhaar of proprietor","Photo","Business address proof"],
  steps:["Requirement check","Registrations filed","Certificates shared"]},
 {id:"sec8",cat:"start",name:"Section 8 Company (NGO)",form:"SPICe+ · INC-12",fee:12999,tat:"20–30 days",
  sum:"A non-profit company to promote charity, education, art, science and similar objectives, with strong credibility for grants.",
  inc:["Name approval","Objects drafting","Licence under Section 8","MOA & AOA","Certificate of Incorporation with PAN & TAN"],
  docs:["PAN and Aadhaar of directors","Photos and address proof","Registered office proof","Estimated income and expenditure for 3 years"],
  steps:["DSC and name reservation","Section 8 licence application","Incorporation filing","Certificate issued"]},

 {id:"gstreg",cat:"tax",name:"GST Registration",form:"GST REG-01",fee:1499,tat:"3–7 working days",
  sum:"Mandatory once turnover crosses the threshold or if you sell online or interstate. Needed to collect GST and claim input credit.",
  inc:["Eligibility and threshold check","REG-01 application","Response to any clarification notice","GSTIN and certificate"],
  docs:["PAN and Aadhaar of owner / partners / directors","Photo","Business address proof (electricity bill + rent agreement or NOC)","Cancelled cheque or bank statement"],
  steps:["Documents checked","Application filed","Aadhaar authentication","GSTIN issued"]},
 {id:"gstret",cat:"tax",name:"GST Return Filing",form:"GSTR-1 · GSTR-3B",fee:999,unit:"/month",tat:"Before due date",
  sum:"Monthly or quarterly return filing with invoice reconciliation, so input credit is claimed correctly and notices are avoided.",
  inc:["Sales and purchase reconciliation","GSTR-1 and GSTR-3B filing","GSTR-2B input-credit matching","Due-date reminders"],
  docs:["Sales and purchase invoices or registers","GST portal access"],
  steps:["Data shared by the 5th","Reconciliation","Draft shared for approval","Returns filed"]},
 {id:"itr",cat:"tax",name:"Income Tax Return",form:"ITR-1 to ITR-6",fee:999,tat:"2–5 days",
  sum:"Return filing for individuals, firms and companies, with a check against Form 26AS and AIS so nothing is missed.",
  inc:["Choice of correct ITR form","26AS / AIS reconciliation","Deduction review","Filing and e-verification"],
  docs:["PAN and Aadhaar","Form 16 or financial statements","Bank interest and investment proofs"],
  steps:["Documents collected","Computation shared","Return filed","E-verified"]},
 {id:"tds",cat:"tax",name:"TDS Return Filing",form:"24Q · 26Q",fee:1499,unit:"/quarter",tat:"Before due date",
  sum:"Quarterly TDS returns for salary and other payments, with Form 16 / 16A generation.",
  inc:["Challan reconciliation","24Q / 26Q preparation and filing","Form 16 / 16A generation","Default correction support"],
  docs:["TAN and TRACES access","Payment and deduction details","Challans paid"],
  steps:["Data collected","Challans matched","Return filed","Certificates issued"]},

 {id:"tm",cat:"ip",name:"Trademark Registration",form:"TM-A",fee:4499,tat:"Filed in 1–2 days",
  sum:"Protect your brand name and logo across India. You can use the ™ symbol as soon as the application is filed.",
  inc:["Trademark search and risk opinion","Class selection","TM-A filing on IP India","Application status tracking"],
  docs:["Brand name and logo","Applicant PAN and address","Date of first use (if already in use)","MSME / startup certificate for the reduced government fee"],
  steps:["Search and class selection","Application filed","Examination by registry","Publication and registration"],
  note:"Registration is decided by the Trade Marks Registry and typically takes many months. We tell you the risks honestly after the search."},
 {id:"tmobj",cat:"ip",name:"Trademark Objection Reply",form:"Examination report reply",fee:3999,tat:"Within deadline",
  sum:"A drafted reply to the examiner's objections, supported by evidence, filed within the deadline.",
  inc:["Review of examination report","Reply drafting with case law and evidence","Filing on IP India"],
  docs:["Application number","Evidence of use (invoices, ads, website)"],
  steps:["Report reviewed","Reply drafted","Reply filed"]},
 {id:"copy",cat:"ip",name:"Copyright Registration",form:"Form XIV",fee:3999,tat:"Filed in 2–3 days",
  sum:"Register software, artwork, written content, music or film with the Copyright Office.",
  inc:["Application drafting","Filing with Copyright Office","Response to discrepancy letters"],
  docs:["Copy of the work","Author and owner details","NOC from author if owner is different"],
  steps:["Work and details collected","Application filed","Waiting period and examination","Registration"]},

 {id:"roc",cat:"comply",name:"Company Annual Filing (ROC)",form:"AOC-4 · MGT-7/7A",fee:9999,unit:"/year",tat:"After AGM",
  sum:"Every company must file financial statements and its annual return each year, even with zero turnover.",
  inc:["Board and AGM documentation","AOC-4 filing of financial statements","MGT-7 / MGT-7A annual return","Statutory register guidance"],
  docs:["Audited financial statements and auditor's report","Directors' report","Shareholding details"],
  steps:["Documents collected","Drafts prepared","Board / AGM approvals","Forms filed with MCA"]},
 {id:"llpann",cat:"comply",name:"LLP Annual Filing",form:"Form 8 · Form 11",fee:5999,unit:"/year",tat:"Before due date",
  sum:"Annual return and statement of accounts for LLPs. Late fees run per day for each form.",
  inc:["Form 11 annual return","Form 8 statement of accounts & solvency","Due-date tracking"],
  docs:["Financial statements","Partner and contribution details"],
  steps:["Data collected","Forms prepared","Signed by partners","Filed with MCA"]},
 {id:"dir",cat:"comply",name:"Add or Remove a Director",form:"DIR-12",fee:2999,tat:"3–5 days",
  sum:"Appoint, resign or remove a director and update MCA records within the time limit.",
  inc:["Board resolution drafting","Consent / resignation documents","DIR-12 filing","DSC and DIN for new director (if needed)"],
  docs:["New director's PAN, Aadhaar, photo","Resignation letter (for removal)"],
  steps:["Resolutions drafted","Documents signed","DIR-12 filed"]},
 {id:"office",cat:"comply",name:"Registered Office Change",form:"INC-22",fee:3999,tat:"5–7 days",
  sum:"Shift your registered office within a city, a state or across states with the correct approvals.",
  inc:["Resolutions drafting","INC-22 filing","Guidance for interstate shifts (Regional Director approval)"],
  docs:["New address proof","Owner NOC","Utility bill under 2 months old"],
  steps:["Resolutions passed","Forms filed","MCA records updated"]},

 {id:"fssai",cat:"licence",name:"FSSAI Food Licence",form:"Basic · State · Central",fee:1999,tat:"7–30 days",
  sum:"Needed for anyone who makes, stores, sells or delivers food. We check which category applies to your turnover.",
  inc:["Category check","Application on FoSCoS","Clarification follow-up","Licence certificate"],
  docs:["Photo ID and photo","Premises proof","List of food products"],
  steps:["Category confirmed","Application filed","Inspection (if required)","Licence issued"]},
 {id:"iec",cat:"licence",name:"Import Export Code",form:"IEC · DGFT",fee:1999,tat:"1–3 days",
  sum:"A 10-digit code from DGFT required to import or export goods and services.",
  inc:["Application on DGFT","IEC certificate","Annual IEC update reminder"],
  docs:["PAN of business","Aadhaar of owner","Cancelled cheque","Address proof"],
  steps:["Documents checked","Application filed","IEC issued"]},
 {id:"udyam",cat:"licence",name:"Udyam (MSME) Registration",form:"Udyam portal",fee:499,tat:"1 day",
  sum:"Recognition as a micro, small or medium enterprise for priority lending, schemes and delayed-payment protection.",
  inc:["Classification check","Registration on Udyam portal","Certificate"],
  docs:["Aadhaar of owner","PAN and GSTIN (if any)","Bank details and business activity"],
  steps:["Details collected","Registration filed","Certificate shared"],
  note:"Udyam registration is free on the government portal. Our fee is only for doing it for you."},
 {id:"shop",cat:"licence",name:"Shop & Establishment",form:"State labour dept.",fee:2499,tat:"5–15 days",
  sum:"State registration for shops, offices and commercial establishments. Rules differ by state.",
  inc:["State rule check","Application","Certificate"],
  docs:["Owner ID and photo","Premises proof","Number of employees"],
  steps:["State rules checked","Application filed","Certificate issued"]},
 {id:"dpiit",cat:"licence",name:"Startup India Recognition",form:"DPIIT",fee:4999,tat:"7–15 days",
  sum:"DPIIT recognition opens tax-exemption eligibility, self-certification under labour laws and a lower trademark fee.",
  inc:["Eligibility check","Innovation write-up","DPIIT application","Recognition certificate"],
  docs:["Certificate of incorporation","Business description and pitch deck","Director details"],
  steps:["Eligibility confirmed","Write-up prepared","Application filed","Certificate issued"]}
];

const STATES = ["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal","Andaman & Nicobar","Chandigarh","Dadra & Nagar Haveli and Daman & Diu","Delhi","Jammu & Kashmir","Ladakh","Lakshadweep","Puducherry"];

const inr = n => "₹" + n.toLocaleString("en-IN");
const $ = s => document.querySelector(s);

/* Apply settings */
document.querySelectorAll(".brand").forEach(e => e.textContent = SITE.brand);
document.querySelectorAll('a[href^="tel:"]').forEach(a => { a.href = "tel:" + SITE.phoneLink; a.textContent = SITE.phone; });
document.querySelectorAll('a[href^="mailto:"]').forEach(a => { a.href = "mailto:" + SITE.email; a.textContent = SITE.email; });
$("#waBtn").href = "https://wa.me/" + SITE.whatsapp + "?text=" + encodeURIComponent("Hi, I need help with a registration");
$("#yr").textContent = new Date().getFullYear();

/* Tabs + grid */
let activeCat = "start", query = "";
function renderTabs(){
  $("#tabs").innerHTML = CATS.map(c =>
    `<button role="tab" aria-selected="${c.id===activeCat && !query}" data-cat="${c.id}">${c.name}</button>`).join("");
}
function card(s){
  return `<button class="svc" data-open="${s.id}">
    <span class="tag mono">${s.form}</span>
    <h3>${s.name}</h3>
    <p>${s.sum}</p>
    <span class="meta"><span class="price">${inr(s.fee)}<small>${s.unit||""} + govt fee</small></span><span class="tat">${s.tat}</span></span>
  </button>`;
}
function renderGrid(){
  const q = query.trim().toLowerCase();
  const list = q ? SERVICES.filter(s => (s.name+" "+s.form+" "+s.sum).toLowerCase().includes(q))
                 : SERVICES.filter(s => s.cat===activeCat);
  $("#grid").innerHTML = list.map(card).join("");
  $("#empty").style.display = list.length ? "none" : "block";
}
$("#tabs").addEventListener("click", e => {
  const b = e.target.closest("[data-cat]"); if(!b) return;
  activeCat = b.dataset.cat; query = ""; $("#q").value = "";
  renderTabs(); renderGrid();
});
document.querySelectorAll("nav.main a[data-tab]").forEach(a => a.addEventListener("click", () => {
  activeCat = a.dataset.tab; query = ""; $("#q").value = ""; renderTabs(); renderGrid();
  $("#mainNav").classList.remove("open"); $("#menuBtn").setAttribute("aria-expanded","false");
}));
$("#menuBtn").addEventListener("click", () => {
  const open = $("#mainNav").classList.toggle("open");
  $("#menuBtn").setAttribute("aria-expanded", open);
});

/* Search */
const sug = $("#suggest");
$("#q").addEventListener("input", e => {
  const q = e.target.value.trim().toLowerCase();
  if(!q){ sug.classList.remove("show"); return; }
  const hits = SERVICES.filter(s => (s.name+" "+s.form).toLowerCase().includes(q)).slice(0,6);
  sug.innerHTML = hits.length
    ? hits.map(s => `<button type="button" role="option" data-open="${s.id}"><span>${s.name}</span><span class="mono">${inr(s.fee)}</span></button>`).join("")
    : `<button type="button" data-goto="contact"><span>No exact match. Ask an expert</span><span class="mono">→</span></button>`;
  sug.classList.add("show");
});
function runSearch(){
  query = $("#q").value; sug.classList.remove("show");
  renderTabs(); renderGrid();
  $("#services").scrollIntoView();
}
$("#qBtn").addEventListener("click", runSearch);
$("#q").addEventListener("keydown", e => { if(e.key==="Enter"){ e.preventDefault(); runSearch(); }});
document.addEventListener("click", e => { if(!e.target.closest(".search")) sug.classList.remove("show"); });
sug.addEventListener("click", e => { const g = e.target.closest("[data-goto]"); if(g){ sug.classList.remove("show"); $("#contact").scrollIntoView(); }});

/* Drawer */
let lastFocus = null;
function openService(id){
  const s = SERVICES.find(x => x.id===id); if(!s) return;
  lastFocus = document.activeElement;
  $("#drawerIn").innerHTML = `
    <button class="close" id="dClose">Close</button>
    <span class="tag mono" style="background:#EEF0EA;padding:3px 8px;border-radius:4px">${s.form}</span>
    <h2 id="dTitle">${s.name}</h2>
    <p class="sum">${s.sum}</p>
    <div class="facts">
      <div><span>Our fee</span><b>${inr(s.fee)}${s.unit||""}</b></div>
      <div><span>Govt fee</span><b>At actuals</b></div>
      <div><span>Timeline</span><b>${s.tat}</b></div>
    </div>
    ${s.note ? `<p style="background:var(--saffron-soft);padding:12px 14px;border-radius:4px;font-size:14.5px">${s.note}</p>` : ""}
    <h3>What's included</h3><ul>${s.inc.map(i=>`<li>${i}</li>`).join("")}</ul>
    <h3>Documents you'll need</h3><ul>${s.docs.map(i=>`<li>${i}</li>`).join("")}</ul>
    <h3>Process</h3><ol>${s.steps.map(i=>`<li>${i}</li>`).join("")}</ol>
    <p class="note">Fee excludes 18% GST and government fees. Final quote confirmed in writing before payment.</p>
    <div class="actions">
      <button class="btn btn-seal" id="dStart" data-svc="${s.id}">Get started</button>
      <a class="btn btn-ghost" href="https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hi, I'd like to know more about " + s.name)}" target="_blank" rel="noopener">Ask on WhatsApp</a>
    </div>`;
  $("#drawer").classList.add("show"); $("#overlay").classList.add("show");
  $("#drawer").setAttribute("aria-hidden","false");
  $("#dClose").focus();
  $("#dClose").onclick = closeDrawer;
  $("#dStart").onclick = () => { $("#f-service").value = s.id; closeDrawer(); $("#contact").scrollIntoView(); $("#f-name").focus({preventScroll:true}); };
}
function closeDrawer(){
  $("#drawer").classList.remove("show"); $("#overlay").classList.remove("show");
  $("#drawer").setAttribute("aria-hidden","true");
  if(lastFocus) lastFocus.focus({preventScroll:true});
}
document.addEventListener("click", e => {
  const o = e.target.closest("[data-open]"); if(o){ sug.classList.remove("show"); openService(o.dataset.open); }
});
$("#overlay").addEventListener("click", closeDrawer);
document.addEventListener("keydown", e => { if(e.key==="Escape" && $("#drawer").classList.contains("show")) closeDrawer(); });

/* Compliance calendar */
function nextDate(month, day, today){ // month: 0-11 or null for monthly
  const y = today.getFullYear();
  if(month===null){
    let d = new Date(y, today.getMonth(), day);
    if(d < today) d = new Date(y, today.getMonth()+1, day);
    return d;
  }
  let d = new Date(y, month, day);
  if(d < today) d = new Date(y+1, month, day);
  return d;
}
function renderCal(){
  const t = new Date(); t.setHours(0,0,0,0);
  const items = [
    {m:null,d:7, what:"TDS / TCS deposit", who:"Tax deducted in the previous month"},
    {m:null,d:11,what:"GSTR-1", who:"Monthly GST filers: outward supplies"},
    {m:null,d:20,what:"GSTR-3B", who:"Monthly GST filers: summary return & tax payment"},
    {m:null,d:15,what:"PF & ESI contribution", who:"Employers registered with EPFO / ESIC"},
    {m:2,d:15, what:"Advance tax: 4th instalment", who:"100% of estimated tax for the year"},
    {m:5,d:15, what:"Advance tax: 1st instalment", who:"15% of estimated tax"},
    {m:8,d:15, what:"Advance tax: 2nd instalment", who:"45% of estimated tax"},
    {m:11,d:15,what:"Advance tax: 3rd instalment", who:"75% of estimated tax"},
    {m:4,d:30, what:"LLP Form 11", who:"Annual return of every LLP"},
    {m:9,d:30, what:"LLP Form 8", who:"Statement of accounts & solvency"},
    {m:6,d:31, what:"Income tax return", who:"Individuals and firms not requiring audit"},
    {m:0,d:31, what:"TDS return: Q3", who:"Quarterly statement for Oct–Dec"}
  ];
  const mon = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const rows = items.map(i => { const dt = nextDate(i.m, i.d, t); return {...i, dt, left: Math.round((dt - t)/864e5)}; })
                    .sort((a,b) => a.dt - b.dt).slice(0,6);
  $("#cal").innerHTML = rows.map(r => {
    const cls = r.left <= 7 ? "soon" : r.left <= 30 ? "mid" : "far";
    const txt = r.left === 0 ? "Today" : r.left === 1 ? "Tomorrow" : r.left + " days left";
    return `<li><span class="d"><b>${r.dt.getDate()}</b><span>${mon[r.dt.getMonth()]} ${String(r.dt.getFullYear()).slice(2)}</span></span>
      <span class="what"><b>${r.what}</b><span>${r.who}</span></span><span class="pill ${cls}">${txt}</span></li>`;
  }).join("");
}

/* Lead form */
$("#f-state").innerHTML = `<option value="">Select state</option>` + STATES.map(s=>`<option>${s}</option>`).join("");
$("#f-service").innerHTML = `<option value="">Not sure yet. Help me choose</option>` +
  CATS.map(c => `<optgroup label="${c.name}">` + SERVICES.filter(s=>s.cat===c.id).map(s=>`<option value="${s.id}">${s.name}</option>`).join("") + `</optgroup>`).join("");

$("#leadForm").addEventListener("submit", async e => {
  e.preventDefault();
  const msg = $("#formMsg"); msg.className = "form-msg";
  const name = $("#f-name").value.trim(), phone = $("#f-phone").value.replace(/\D/g,"").slice(-10);
  if(!name){ msg.textContent = "Please enter your name."; msg.classList.add("err"); $("#f-name").focus(); return; }
  if(!/^[6-9]\d{9}$/.test(phone)){ msg.textContent = "Please enter a valid 10-digit Indian mobile number."; msg.classList.add("err"); $("#f-phone").focus(); return; }
  if(!$("#f-consent").checked){ msg.textContent = "Please tick the consent box so we can contact you."; msg.classList.add("err"); return; }
  const data = Object.fromEntries(new FormData(e.target));
  if(!SITE.formEndpoint){
    msg.textContent = "Preview mode: this form isn't connected yet, so nothing was sent. Once the site is live, enquiries will reach your inbox.";
    msg.classList.add("ok"); return;
  }
  try{
    const r = await fetch(SITE.formEndpoint, {method:"POST", headers:{"Content-Type":"application/json","Accept":"application/json"}, body: JSON.stringify(data)});
    if(!r.ok) throw 0;
    msg.textContent = "Thanks, " + name.split(" ")[0] + ". We'll call you within one working day.";
    msg.classList.add("ok"); e.target.reset();
  }catch(_){
    msg.textContent = "That didn't go through. Please try again, or message us on WhatsApp.";
    msg.classList.add("err");
  }
});

/* Footer links */
const ftLink = s => `<li><a href="#services" data-open="${s.id}">${s.name}</a></li>`;
$("#ft-start").innerHTML = SERVICES.filter(s=>s.cat==="start").map(ftLink).join("");
$("#ft-tax").innerHTML = SERVICES.filter(s=>s.cat==="tax"||s.cat==="ip").slice(0,6).map(ftLink).join("");
$("#ft-comply").innerHTML = SERVICES.filter(s=>s.cat==="comply"||s.cat==="licence").slice(0,6).map(ftLink).join("");

renderTabs(); renderGrid(); renderCal();

}

boot().catch(error => {
  console.error("Registrika could not start:", error);
  const notice = document.createElement("p");
  notice.textContent = "The website could not load its configuration. Please run it through a web server and check data/site.json.";
  notice.style.cssText = "margin:24px;padding:16px;background:#FDE6E1;color:#8A2417;border-radius:4px;";
  document.body.prepend(notice);
});
