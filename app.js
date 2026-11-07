/* LOK archive interface — records and interactions are held in browser memory.
   Refreshing the page clears contributor and submission session data. */
const image = (id, width=900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;

const sampleRecords = [
  {id:1,title:"The old stone gateway",category:"Places",location:"Sample Town, Central India",date:"Early 20th century (sample)",description:"A fictional sample record describing a stone gateway that once marked the entrance to a market quarter. Its carved details and worn threshold invite questions about trade, movement and everyday life.",context:"Illustrative sample text only. Replace with a verified account gathered from local sources and community members.",tags:["architecture","market","stonework"],contributor:"Archive Research Team",source:"Illustrative sample archive entry",submitted:"12 Oct 2026",status:"approved",img:image("photo-1606293926075-69a00dbfde81")},
  {id:2,title:"A courtyard festival gathering",category:"Festivals",location:"Sample Village, Central India",date:"Annual; season to be verified",description:"A fictional account of neighbours gathering in a shared courtyard for music, food and a seasonal celebration. The record demonstrates how a festival entry can capture community participation.",context:"The date, name and meaning of this event are intentionally left unverified in this sample.",tags:["community","celebration","music"],contributor:"Meera S.",source:"Illustrative community memory; not a verified historical record",submitted:"08 Oct 2026",status:"approved",img:image("photo-1604608672516-8d4e4f4f6d1c")},
  {id:3,title:"Patterns in handwoven cloth",category:"Art & Craft",location:"Regional sample collection",date:"Contemporary practice",description:"A sample archive note about geometric patterns in handwoven textiles, the skills behind them and the knowledge shared between makers and learners.",context:"A real entry should identify the maker, technique, material, community context and any restrictions on sharing.",tags:["textile","craft","design"],contributor:"Archive Research Team",source:"Sample visual and descriptive record",submitted:"04 Oct 2026",status:"approved",img:image("photo-1590736969955-71cc94901144")},
  {id:4,title:"A recipe remembered at home",category:"Food",location:"Family collection — location withheld",date:"Passed through generations (sample)",description:"A fictional food-memory entry showing how a recipe can be documented alongside family context, ingredients, occasions and the person who shared it.",context:"Recipe details should be contributed with the family's consent and attributed to the person or source who provided them.",tags:["foodways","family memory","oral history"],contributor:"Ananya R.",source:"Sample family recollection, created for demonstration",submitted:"29 Sep 2026",status:"approved",img:image("photo-1546833999-b9f581a1996d")},
  {id:5,title:"Songs carried across generations",category:"Stories",location:"Community collection",date:"Living tradition",description:"A sample story record about songs remembered by elders and taught informally to younger family members during gatherings.",context:"A real archive should record the language, performer, context, consent and any cultural protocols around recording or sharing.",tags:["oral history","folk music","memory"],contributor:"Archive Research Team",source:"Fictional sample record",submitted:"25 Sep 2026",status:"approved",img:image("photo-1516280440614-37939bbacd81")},
  {id:6,title:"The artisan's workbench",category:"Art & Craft",location:"Sample artisan quarter",date:"Contemporary documentation",description:"A demonstration record focused on a maker's workspace, tools and process. It illustrates the value of documenting the person and knowledge behind an object.",context:"Replace with a first-person account from an artisan, with explicit permission for images and quotations.",tags:["artisan","process","tools"],contributor:"Kabir P.",source:"Illustrative sample content",submitted:"19 Sep 2026",status:"approved",img:image("photo-1452860606245-08befc0ff44b")}
  ,{id:7,title:"Mask-making traditions of Majuli",category:"Art & Craft",location:"Majuli, Assam",date:"Living craft tradition",description:"An archive note introducing the handcrafted masks associated with the satras of Majuli. These masks are used in devotional and performance contexts, and makers shape them using locally available materials and inherited skills.",context:"Illustrative educational entry. A published record should identify the mask-maker and community source, document the specific tradition, and obtain permission before sharing photographs or restricted knowledge.",tags:["Assam","Majuli","mask-making","craft","performance"],contributor:"Archive Research Team",source:"Illustrative sample entry; details require local verification",submitted:"07 Nov 2026",status:"approved",img:"assets/references/majuli-mask.svg"}
  ,{id:8,title:"Sattriya: a living dance tradition",category:"Stories",location:"Assam",date:"Living tradition",description:"A short introduction to Sattriya, a classical dance tradition that developed in Assam in the context of the Neo-Vaishnavite monasteries known as satras. An archive record could document a performer, repertoire, music and the setting in which a dance is presented.",context:"This is a general introductory sample, not a record of a particular performance. Add performer-approved details and precise attribution before treating it as a community archive item.",tags:["Assam","Sattriya","dance","music","living heritage"],contributor:"Archive Research Team",source:"Illustrative sample entry; performer attribution not yet supplied",submitted:"07 Nov 2026",status:"approved",img:"assets/references/sattriya-dance.svg"}
  ,{id:9,title:"Kolam patterns at the threshold",category:"Art & Craft",location:"Tamil Nadu",date:"Daily and festive practice",description:"Kolam is a traditional floor-drawing practice seen at the entrances of many homes in Tamil Nadu. Patterns are often made with rice flour or other powders, and designs may be created freehand or from a dot grid.",context:"Illustrative sample entry. Practices vary between households and regions; a full record should be contributed by a practitioner and describe the materials and meanings in their own words.",tags:["Tamil Nadu","kolam","floor art","home","ritual"],contributor:"Archive Research Team",source:"Illustrative sample entry; community details to be added",submitted:"07 Nov 2026",status:"approved",img:"assets/references/kolam.svg"}
  ,{id:10,title:"Thanjavur bronze-casting heritage",category:"Art & Craft",location:"Thanjavur region, Tamil Nadu",date:"Living craft tradition",description:"The Thanjavur region is known for the lost-wax casting of bronze images. This sample record highlights the specialist knowledge involved in preparing a model, making a mould and casting a finished object.",context:"A real archive record should name the artisan or workshop, confirm the object's provenance and document the process only with the maker's consent.",tags:["Tamil Nadu","Thanjavur","bronze casting","metalwork","artisan"],contributor:"Archive Research Team",source:"Illustrative sample entry; maker interview not yet added",submitted:"07 Nov 2026",status:"approved",img:"assets/references/thanjavur-bronze.svg"}
  ,{id:11,title:"Blue pottery of Jaipur",category:"Art & Craft",location:"Jaipur, Rajasthan",date:"Living craft tradition",description:"Jaipur is associated with a distinctive blue pottery tradition, known for its blue-toned glaze and decorative motifs. This entry introduces the craft as a subject for documenting workshops, materials, designs and the knowledge of potters.",context:"Illustrative sample entry. Techniques and workshop histories should be checked with practicing artisans; do not assume every blue pottery object has the same origin or process.",tags:["Rajasthan","Jaipur","blue pottery","ceramics","craft"],contributor:"Archive Research Team",source:"Illustrative sample entry; artisan attribution not yet supplied",submitted:"07 Nov 2026",status:"approved",img:"assets/references/blue-pottery.svg"}
  ,{id:12,title:"Bagru block-printing practice",category:"Art & Craft",location:"Bagru, Rajasthan",date:"Living craft tradition",description:"Bagru, near Jaipur, is known for hand block-printed textiles. The craft offers a way to document carved wooden blocks, printing methods, colour preparation and the work of the printers and dyers who sustain the practice.",context:"Illustrative sample entry. Add interviews and process details from local craftspeople, and identify the source of any images or designs shared.",tags:["Rajasthan","Bagru","block printing","textiles","craft"],contributor:"Archive Research Team",source:"Illustrative sample entry; local verification required",submitted:"07 Nov 2026",status:"approved",img:"assets/references/bagru-block-print.svg"}
  ,{id:13,title:"Warli painting and village life",category:"Art & Craft",location:"Palghar region, Maharashtra",date:"Living art tradition",description:"Warli painting is an Indigenous art tradition associated with communities in parts of Maharashtra. Its visual language is widely recognised for geometric human and animal figures arranged in scenes of everyday life, nature and community activity.",context:"Illustrative sample entry. Work with Warli artists and community knowledge-holders for accurate attribution, context and permission; avoid treating the style as anonymous decoration.",tags:["Maharashtra","Warli","painting","community art","visual culture"],contributor:"Archive Research Team",source:"Illustrative sample entry; artist attribution not yet supplied",submitted:"07 Nov 2026",status:"approved",img:"assets/references/warli-painting.svg"}
  ,{id:14,title:"Paithani silk weaving",category:"Art & Craft",location:"Paithan, Maharashtra",date:"Living craft tradition",description:"Paithani is a silk sari-weaving tradition associated with Paithan in Maharashtra. The textiles are known for intricate woven motifs and borders, making the craft a rich subject for recording design vocabulary, weaving knowledge and artisan stories.",context:"Illustrative sample entry. A detailed record should be created with a weaver or workshop and should credit the people who provide the knowledge and images.",tags:["Maharashtra","Paithani","silk","weaving","textiles"],contributor:"Archive Research Team",source:"Illustrative sample entry; artisan interview not yet added",submitted:"07 Nov 2026",status:"approved",img:"assets/references/paithani-weaving.svg"}
  ,{id:15,title:"Terracotta temples of Bishnupur",category:"Places",location:"Bishnupur, West Bengal",date:"Historic architecture",description:"Bishnupur is known for historic terracotta temples whose exterior panels depict a range of decorative and narrative motifs. This sample entry invites documentation of the buildings, their makers, materials and conservation stories.",context:"Illustrative sample entry. Confirm monument-specific dates and descriptions from reliable heritage sources before publishing a definitive historical account.",tags:["West Bengal","Bishnupur","terracotta","temples","architecture"],contributor:"Archive Research Team",source:"Illustrative sample entry; monument-specific research required",submitted:"07 Nov 2026",status:"approved",img:"assets/references/bishnupur-temple.svg"}
  ,{id:16,title:"Kantha embroidery and stitched stories",category:"Art & Craft",location:"West Bengal",date:"Living textile tradition",description:"Kantha is a stitching and embroidery tradition associated with Bengal. Its forms include layers of running stitches used in quilts and other textiles; contemporary makers also use stitching to create decorative and narrative designs.",context:"Illustrative sample entry. Record the maker, region, materials and the story behind a particular piece rather than assuming one description represents every Kantha practice.",tags:["West Bengal","Bengal","Kantha","embroidery","textiles"],contributor:"Archive Research Team",source:"Illustrative sample entry; maker attribution not yet supplied",submitted:"07 Nov 2026",status:"approved",img:"assets/references/kantha-embroidery.svg"}

];
const sampleCollections = [
  {title:"Places that remember",subtitle:"Architecture • Public spaces • Landmarks",description:"A collection for buildings, streets and shared spaces that hold layers of local memory.",count:"03 STORIES",img:image("photo-1606293926075-69a00dbfde81"),category:"Places"},
  {title:"Rituals & gathering",subtitle:"Festivals • Community • Seasonal practice",description:"Explore the moments when communities come together and pass traditions forward.",count:"02 STORIES",img:image("photo-1604608672516-8d4e4f4f6d1c"),category:"Festivals"},
  {title:"Made by hand",subtitle:"Craft • Materials • Makers",description:"Stories about skill, creativity, tools and the people who keep making traditions alive.",count:"04 STORIES",img:image("photo-1590736969955-71cc94901144"),category:"Art & Craft"},
  {title:"Food as memory",subtitle:"Cuisine • Family • Oral history",description:"Recipes and food traditions as records of place, migration, family and celebration.",count:"02 STORIES",img:image("photo-1546833999-b9f581a1996d"),category:"Food"}
];

let records = sampleRecords.map(r=>({...r}));
let submissions = [];
let currentUser = null;
let selectedCategory = "All";
let authMode = "login";
let selectedFile = null;
let nextId = 100;
let currentDetail = null;

const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];
const escapeHTML = value => String(value ?? "").replace(/[&<>"']/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const allRecords = () => [...records, ...submissions.filter(s=>s.status==="approved")];

function toast(message){
  const el=$("#toast"); el.textContent=message; el.classList.add("show");
  clearTimeout(toast.timer); toast.timer=setTimeout(()=>el.classList.remove("show"),2600);
}
function navigate(page){
  const allowed=["home","archive","detail","collections","contribute","profile","auth","moderation","about"];
  if(!allowed.includes(page)) page="home";
  $$(".page").forEach(p=>p.classList.toggle("active",p.dataset.page===page));
  $$(".main-nav a").forEach(a=>a.classList.toggle("active",a.dataset.nav===page));
  $("#mainNav").classList.remove("open"); $("#menuToggle").setAttribute("aria-expanded","false");
  if(page==="archive") renderArchive();
  if(page==="profile") renderProfile();
  if(page==="moderation") renderModeration();
  if(page==="collections") renderCollections();
  if(page==="detail") renderDetail();
  window.scrollTo({top:0,behavior:"smooth"});
}
function route(){
  const page=location.hash.replace("#","")||"home";
  navigate(page);
}
function recordCard(r){
  return `<article class="record-card" data-open-record="${r.id}" tabindex="0" role="button" aria-label="View ${escapeHTML(r.title)}">
    <div class="record-image"><img src="${escapeHTML(r.img)}" alt="${escapeHTML(r.title)}" loading="lazy"><span class="record-category">${escapeHTML(r.category)}</span></div>
    <div class="record-content"><div class="record-meta"><span>${escapeHTML(r.location)}</span><span>${escapeHTML(r.date)}</span></div><h3>${escapeHTML(r.title)}</h3><p>${escapeHTML(r.description.slice(0,118))}${r.description.length>118?"…":""}</p><span class="record-link">Explore record ↗</span></div>
  </article>`;
}
function renderHome(){
  $("#homeRecords").innerHTML=records.filter(r=>r.status==="approved").slice(0,3).map(recordCard).join("");
}
function renderArchive(){
  const query=($("#archiveSearch")?.value||"").trim().toLowerCase();
  const filtered=allRecords().filter(r=>r.status==="approved").filter(r=>{
    const categoryMatch=selectedCategory==="All"||r.category===selectedCategory;
    const text=[r.title,r.description,r.location,r.category,r.tags.join(" "),r.contributor].join(" ").toLowerCase();
    return categoryMatch&&text.includes(query);
  });
  $("#archiveRecords").innerHTML=filtered.map(recordCard).join("");
  $("#resultCount").textContent=`${filtered.length} ${filtered.length===1?"RECORD":"RECORDS"}`;
  $("#emptyState").classList.toggle("hidden",filtered.length!==0);
}
function renderCollections(){
  $("#collectionGrid").innerHTML=sampleCollections.map((c,i)=>{
    const count=allRecords().filter(r=>r.category===c.category&&r.status==="approved").length;
    return `<article class="collection-card" data-collection="${escapeHTML(c.category)}" tabindex="0" role="button"><img src="${escapeHTML(c.img)}" alt="" loading="lazy"><span class="collection-count">${String(count).padStart(2,"0")} RECORDS</span><div><small>${escapeHTML(c.subtitle)}</small><h3>${escapeHTML(c.title)}</h3><p>${escapeHTML(c.description)}</p></div></article>`;
  }).join("");
}
function renderDetail(){
  const r=allRecords().find(x=>String(x.id)===String(currentDetail));
  if(!r){$("#detailContent").innerHTML='<a class="back-link" href="#archive">← Back to archive</a><h2>Record not found</h2>';return;}
  $("#detailContent").innerHTML=`<a class="back-link" href="#archive">← BACK TO ARCHIVE</a>
    <div class="detail-hero"><img src="${escapeHTML(r.img)}" alt="${escapeHTML(r.title)}"></div>
    <div class="detail-body"><article class="detail-main"><p class="eyebrow">${escapeHTML(r.category)} / ARCHIVE RECORD</p><h1>${escapeHTML(r.title)}</h1><p class="lead">${escapeHTML(r.description)}</p><p>${escapeHTML(r.context||"No additional context provided.")}</p><h3 style="font-family:var(--serif);font-weight:500;font-size:24px;margin-top:30px">About this record</h3><p>This record is part of the archive sample collection. Community-submitted records should include verified details and permission-based attribution.</p><div class="tag-list">${r.tags.map(t=>`<span class="tag">#${escapeHTML(t)}</span>`).join("")}</div></article>
    <aside class="detail-side"><div class="meta-item"><small>LOCATION</small><strong>${escapeHTML(r.location)}</strong></div><div class="meta-item"><small>DATE / PERIOD</small><strong>${escapeHTML(r.date)}</strong></div><div class="meta-item"><small>CONTRIBUTED BY</small><strong>${escapeHTML(r.contributor)}</strong></div><div class="meta-item"><small>SOURCE / ATTRIBUTION</small><strong>${escapeHTML(r.source)}</strong></div><div class="meta-item"><small>SUBMITTED</small><strong>${escapeHTML(r.submitted)}</strong></div><div class="meta-item"><small>REVIEW STATUS</small><strong>Approved for archive display</strong></div></aside></div>`;
}
function openRecord(id){currentDetail=id;location.hash="detail";}
function renderProfile(){
  if(!currentUser){
    $("#profileContent").innerHTML=`<div class="profile-card"><div class="avatar">?</div><h2>Guest visitor</h2><p>Log in to view your contributor profile.</p><a class="button button-cream" href="#auth">Log in / Register ↗</a></div><div class="profile-main"><h3>Your contributions</h3><p style="font-size:11px;color:var(--muted)">You are browsing as a guest. Your submissions will appear here after you sign in and contribute.</p></div>`;return;
  }
  const mine=submissions.filter(s=>s.email===currentUser.email);
  $("#profileContent").innerHTML=`<div class="profile-card"><div class="avatar">${escapeHTML(currentUser.name.charAt(0).toUpperCase())}</div><h2>${escapeHTML(currentUser.name)}</h2><p>${escapeHTML(currentUser.email)}</p><p>Contributor account · Current session</p><button class="button button-cream" id="logoutBtn">Log out ↗</button></div><div class="profile-main"><h3>Your contributions <span style="color:var(--terra)">(${mine.length})</span></h3>${mine.length?mine.map(s=>`<div class="profile-record"><div><strong>${escapeHTML(s.title)}</strong><small>${escapeHTML(s.category)} · ${escapeHTML(s.location)}</small></div><span class="status-pill ${s.status}">${s.status.toUpperCase()}</span></div>`).join(""):'<p style="font-size:11px;color:var(--muted)">No contributions yet. <a href="#contribute" style="color:var(--terra)">Share your first record ↗</a></p>'}</div>`;
}
function renderModeration(){
  const pending=submissions.filter(s=>s.status==="pending"),approved=submissions.filter(s=>s.status==="approved"),rejected=submissions.filter(s=>s.status==="rejected");
  $("#moderationStats").innerHTML=`<div class="stat-card"><strong>${pending.length}</strong><span>PENDING REVIEW</span></div><div class="stat-card"><strong>${approved.length}</strong><span>APPROVED</span></div><div class="stat-card"><strong>${rejected.length}</strong><span>REJECTED</span></div>`;
  $("#moderationList").innerHTML=submissions.length?submissions.map(s=>`<article class="moderation-item"><div><h3>${escapeHTML(s.title)}</h3><p>${escapeHTML(s.category)} · ${escapeHTML(s.location)} · by ${escapeHTML(s.contributor)}</p><p style="margin-top:5px">${escapeHTML(s.description.slice(0,150))}</p><span class="status-pill ${s.status}">${s.status.toUpperCase()}</span></div><div class="moderation-actions">${s.status==="pending"?`<button class="approve" data-review="${s.id}" data-decision="approved">Approve</button><button class="reject" data-review="${s.id}" data-decision="rejected">Reject</button>`:`<button data-review="${s.id}" data-decision="pending">Return to pending</button>`}</div></article>`).join(""):'<div class="empty-state"><span>✓</span><h3>Nothing to review yet</h3><p>New contributor submissions will appear here.</p><a class="button button-outline" href="#contribute">Create a submission</a></div>';
}
function setAuthMode(mode){
  authMode=mode;
  $$(".auth-tab").forEach(t=>t.classList.toggle("active",t.dataset.auth===mode));
  $("#authTitle").textContent=mode==="login"?"Welcome back.":"Join the archive.";
  $("#authSubtitle").textContent=mode==="login"?"Enter your details to continue to the archive.":"Create your contributor identity.";
  $("#authName").required=mode==="register";
  $(".name-required").classList.toggle("hidden",mode!=="register");
  $("#authName").parentElement.classList.toggle("hidden",mode==="login");
  $("#authSubmit").innerHTML=(mode==="login"?"Log in":"Create account")+' <span>↗</span>';
}
function showMessage(el,msg,error=false){el.textContent=msg;el.classList.remove("hidden","error");if(error)el.classList.add("error");}
function resetContributionForm(){ $("#contributionForm").reset(); selectedFile=null; $("#uploadPreview").innerHTML='<span class="upload-icon">＋</span><span>No file selected</span>'; }
function initEvents(){
  window.addEventListener("hashchange",route);
  $("#menuToggle").addEventListener("click",()=>{const open=$("#mainNav").classList.toggle("open");$("#menuToggle").setAttribute("aria-expanded",String(open));});
  $("#homeCategories").addEventListener("click",e=>{const b=e.target.closest("[data-category]");if(!b)return;selectedCategory=b.dataset.category;location.hash="archive";});
  $("#archiveSearch").addEventListener("input",renderArchive);
  $("#categoryFilters").addEventListener("click",e=>{const b=e.target.closest("[data-filter]");if(!b)return;selectedCategory=b.dataset.filter;$$(".filter-chip").forEach(x=>x.classList.toggle("active",x===b));renderArchive();});
  $("#clearFilters").addEventListener("click",()=>{$("#archiveSearch").value="";selectedCategory="All";$$(".filter-chip").forEach(x=>x.classList.toggle("active",x.dataset.filter==="All"));renderArchive();});
  document.addEventListener("click",e=>{
    const card=e.target.closest("[data-open-record]");if(card)openRecord(card.dataset.openRecord);
    const collection=e.target.closest("[data-collection]");if(collection){selectedCategory=collection.dataset.collection;location.hash="archive";}
    const review=e.target.closest("[data-review]");if(review){const s=submissions.find(x=>String(x.id)===review.dataset.review);if(s){s.status=review.dataset.decision;renderModeration();toast(`Submission marked ${s.status}.`);}}
    if(e.target.id==="logoutBtn"){currentUser=null;updateUserChip();renderProfile();toast("You are now logged out.");}
  });
  document.addEventListener("keydown",e=>{if((e.key==="Enter"||e.key===" ")&&e.target.matches("[data-open-record],[data-collection]")){e.preventDefault();e.target.click();}});
  $$(".auth-tab").forEach(t=>t.addEventListener("click",()=>setAuthMode(t.dataset.auth)));
  $("#authForm").addEventListener("submit",e=>{
    e.preventDefault();const name=$("#authName").value.trim(),email=$("#authEmail").value.trim(),password=$("#authPassword").value;
    if(password.length<4){showMessage($("#authMessage"),"Password must contain at least 4 characters.",true);return;}
    currentUser={name:authMode==="register"?name:(name||email.split("@")[0]),email};
    updateUserChip();showMessage($("#authMessage"),`Welcome, ${currentUser.name}. Your session is active.`);
    toast("Contributor session started.");setTimeout(()=>location.hash="profile",650);
  });
  $("#mediaFile").addEventListener("change",e=>{
    const file=e.target.files[0];selectedFile=null;
    if(!file){$("#uploadPreview").innerHTML='<span class="upload-icon">＋</span><span>No file selected</span>';return;}
    const allowed=file.type.startsWith("image/")||file.type==="application/pdf";
    if(!allowed||file.size>5*1024*1024){e.target.value="";$("#uploadPreview").innerHTML='<span class="upload-icon">!</span><span>Choose an image or PDF under 5 MB.</span>';toast("File type or size is not supported.");return;}
    selectedFile=file;
    if(file.type.startsWith("image/")){const url=URL.createObjectURL(file);$("#uploadPreview").innerHTML=`<img src="${url}" alt="Selected file preview"><span>${escapeHTML(file.name)} · ${(file.size/1024).toFixed(0)} KB</span>`;}
    else $("#uploadPreview").innerHTML=`<span class="upload-icon">▤</span><span>${escapeHTML(file.name)} · PDF selected</span>`;
  });
  $("#contributionForm").addEventListener("submit",e=>{
    e.preventDefault();if(!currentUser){toast("Please log in or create a contributor account first.");location.hash="auth";return;}
    const f=new FormData(e.currentTarget),title=String(f.get("title")).trim();
    const item={id:nextId++,title,category:f.get("category"),location:String(f.get("location")).trim(),date:String(f.get("date")).trim()||"Not specified",description:String(f.get("description")).trim(),context:String(f.get("context")).trim(),tags:String(f.get("tags")).split(",").map(t=>t.trim()).filter(Boolean),contributor:currentUser.name,source:String(f.get("source")).trim(),submitted:new Date().toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}),status:"pending",img:selectedFile&&selectedFile.type.startsWith("image/")?URL.createObjectURL(selectedFile):image("photo-1518709268805-4e9042af9f23")};
    submissions.push(item);showMessage($("#contributionMessage"),"Thank you. Your contribution has been added to the moderation queue.");resetContributionForm();toast("Contribution submitted for review.");
  });
  $("#resetDemo").addEventListener("click",()=>{submissions=[];renderModeration();toast("Session submissions cleared.");});
  $("#backTop").addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
  window.addEventListener("scroll",()=>$("#backTop").classList.toggle("visible",window.scrollY>450));
}
function updateUserChip(){ $("#userChip").textContent=currentUser?currentUser.name:"Guest visitor"; }
renderHome();initEvents();setAuthMode("login");route();
