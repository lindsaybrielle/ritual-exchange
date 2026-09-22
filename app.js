(function(){
  "use strict";

  var BUILTIN_RITUALS = [
    { title:"Nobel Prize Ceremony", blurb:"A committee publicly confers recognition on work chosen through years of quiet deliberation.",
      elements:["Naming the specific contribution out loud, not just the outcome","A long private selection process revealed only at the end","A short citation read aloud explaining exactly why it matters"] },
    { title:"Football Huddle", blurb:"A team collapses into a tight circle for ten seconds before executing under pressure.",
      elements:["Physical closeness that shuts out the noise around you","One person calling it, everyone repeating it back","A countdown that forces the decision to be made now"] },
    { title:"Wedding Ceremony", blurb:"Two people make public promises in front of witnesses who can hold them to it later.",
      elements:["Saying a commitment out loud in front of others","Witnesses who can be called on later","Exchanging a physical token as proof it happened"] },
    { title:"Olympic Torch Relay", blurb:"A flame is carried by hand across thousands of people, each holding it for one leg only.",
      elements:["Each person visibly responsible for one stretch, no more","A literal handoff moment between carriers","The same flame carried through, never restarted"] },
    { title:"Japanese Tea Ceremony", blurb:"A host performs a fixed sequence of small deliberate movements while guests watch in shared quiet.",
      elements:["A prescribed order that never gets rushed","Full attention paid to one thing at a time","Silence used on purpose, not left as an accident"] },
    { title:"Jazz Funeral", blurb:"A procession that starts in mourning and ends in celebration, brass band leading the turn.",
      elements:["A deliberate shift in mood partway through, not one note held","Music that gives everyone permission to feel differently","Moving through a shared space instead of sitting in one room"] },
    { title:"Graduation Ceremony", blurb:"Names are read aloud one at a time in front of everyone, and a small object moves to mark the change.",
      elements:["Individual names read aloud, not a group thank-you","A visible object that moves to show status has changed","A line everyone crosses, in turn, the same direction"] },
    { title:"Changing of the Guard", blurb:"One shift formally hands responsibility to the next through a scripted, witnessed routine.",
      elements:["A scripted exchange, not an improvised one","An audience present specifically to witness the handoff","One precise moment when 'who's responsible' flips"] },
    { title:"The Toast", blurb:"Someone raises a glass, says something specific, and everyone drinks at the same second.",
      elements:["One voice naming exactly what's being honored","A synchronized action everyone does together, on cue","Brevity — it works because it doesn't go long"] },
    { title:"Harvest Festival", blurb:"A community marks the end of collective effort by sharing what was produced.",
      elements:["The people who did the work are the ones who benefit, visibly","Shared reward, not individual bonuses handed out quietly","A clear line drawn between 'the work' and 'now we rest'"] },
    { title:"Naming Ceremony", blurb:"A person or thing is given a name in public, and from that point on, that is what it's called.",
      elements:["A declaration that makes something official the moment it's spoken","Choosing language on purpose, instead of a default placeholder","People invited specifically to witness an identity being set"] },
    { title:"Moment of Silence", blurb:"Everyone stops at the same time, for exactly one purpose, then resumes.",
      elements:["A hard stop with a clear start and a clear end","No talking allowed, on purpose","Full participation — nobody quietly exempts themselves"] },
    { title:"Barn Raising", blurb:"A whole community builds one structure in a single day because everyone shows up at once.",
      elements:["Many hands on one visible outcome, same day","No single owner — it belongs to whoever needed it","Progress everyone can physically see accumulate"] },
    { title:"Coin Toss", blurb:"A decision no one can argue with, made by a method everyone agreed to trust in advance.",
      elements:["Fairness agreed on before anyone knows the outcome","A method both sides accept even when they lose","A fast, final way to break a stalemate"] },
    { title:"Campfire Storytelling", blurb:"People sit in a circle and take turns adding to a story out loud.",
      elements:["A circle with no head of the table","Turn-taking instead of a single presenter","A story refined a little more each time it's retold"] },
    { title:"Passover Seder", blurb:"A structured meal that retells a story in the same order every year, with fixed questions asked by whoever is youngest.",
      elements:["A story retold in a fixed order every time","The newest or most junior person asks the first question","Everyone at the table participates, not just the host"] },
    { title:"State of the Union Address", blurb:"A leader reports to the whole body in one sitting, and questions come later, not during.",
      elements:["One person reporting to everyone at once, not team by team","Questions held until after the full account is given","A fixed, expected moment everyone can plan around"] },
    { title:"Trial by Jury", blurb:"A group of peers deliberates privately, then delivers a single verdict together.",
      elements:["Deliberation kept private until the decision is final","A group forced to reach one shared answer, not many opinions","Peers judging peers, not a single authority deciding alone"] },
    { title:"Beating the Bounds", blurb:"Walking the edge of a territory once a year to mark, together, where it begins and ends.",
      elements:["Physically walking the boundary instead of just stating it","Doing it together, once a year, not solo and ad hoc","Marking edges before they're forgotten or disputed"] },
    { title:"Diwali (Festival of Lights)", blurb:"Many small individual flames are lit separately, and together they make one shared light.",
      elements:["Everyone contributes their own small piece to one shared result","Individual effort made visible, not anonymous","Light added gradually until the whole thing changes"] },
    { title:"Remembrance Sunday", blurb:"Two minutes' silence at a fixed hour, observed simultaneously in many separate places at once.",
      elements:["A precise, pre-announced start and end time","Simultaneous observance across separate locations","Stillness as the entire content of the act"] },
    { title:"Trooping the Colour", blurb:"A precision procession rehearsed for months before the single public performance.",
      elements:["Extensive rehearsal invisible to the audience that sees only the result","Precision as the entire point, not a side effect","One performance date fixed long in advance"] },
    { title:"Apprenticeship Indenture", blurb:"A formal document signed by mentor and apprentice marks the start of a training relationship.",
      elements:["A written commitment signed by both sides, not just discussed","Marking the start of a relationship formally, not letting it drift in","Defined roles — who teaches, who learns — stated up front"] },
    { title:"Standing Ovation", blurb:"An audience rises together, uninstructed, when something has clearly earned it.",
      elements:["Recognition that isn't scheduled — it happens when it's earned","No one has to organize it; everyone just knows","A physical, visible signal, not just a private opinion"] },
    { title:"Knighting Ceremony", blurb:"A single physical gesture, performed once, converts someone's status in front of witnesses.",
      elements:["One deliberate physical action marks the change, not a memo","Witnesses present specifically to see status change hands","A moment brief enough to remember exactly"] },
    { title:"Choir Warm-up", blurb:"A group hums scales together before singing, syncing breath and pitch before anything else.",
      elements:["Getting aligned before the real performance starts, not during it","A shared, low-stakes activity that syncs the group's rhythm","Done the same way every time, so it becomes automatic"] },
    { title:"Court Oath-Taking", blurb:"A witness places a hand on a text and speaks a fixed formula before testifying.",
      elements:["A fixed form of words spoken before the real work begins","A physical gesture that signals 'what follows is binding'","The same ritual regardless of who's taking it or what they'll say"] },
    { title:"Village Fete Judging", blurb:"Entries are displayed anonymously, judged blind, and results read aloud at a set hour.",
      elements:["Judging blind, without knowing whose entry is whose","A single moment when all results are revealed together","Open display — everyone can see what was actually submitted"] },
    { title:"Naval Watch Change", blurb:"The outgoing officer states the ship's status aloud before formally handing over the deck.",
      elements:["A spoken status report given before responsibility transfers","A named, single moment when accountability changes hands","Nothing assumed — the state of things is said out loud"] },
    { title:"Potlatch", blurb:"A host gives away what they've accumulated to raise their own standing in the community.",
      elements:["Generosity performed publicly, not done quietly","Status earned by what you give away, not what you keep","A designated occasion for redistribution, not a random act"] },
    { title:"Passing the Talking Stick", blurb:"Only the person holding an object may speak; everyone else listens.",
      elements:["One voice at a time, enforced by a physical object","Listening as the default state, speaking as the exception","Equal access to the object regardless of rank"] },
    { title:"Marathon Start Gun", blurb:"Hundreds of separate efforts all begin at the exact same fired signal.",
      elements:["One shared starting instant for everyone, regardless of pace after","A single unambiguous signal, impossible to miss or misread","Individual effort that still happens inside a shared moment"] },
    { title:"Guild Hallmarking", blurb:"An independent inspector stamps a mark onto goods that meet an agreed standard.",
      elements:["An independent check, not self-certification","A visible, permanent mark once the standard is met","A shared standard agreed in advance, not judged case by case"] },
    { title:"New Year's Countdown", blurb:"A shared countdown ends in one synchronized moment everyone marks together.",
      elements:["A visible countdown that builds anticipation before the moment arrives","Everyone marking the exact same instant, together","A clean, symbolic break between 'before' and 'after'"] },
    { title:"Coming-of-Age Rite", blurb:"A community publicly marks the exact point someone crosses into a new status.",
      elements:["A specific, nameable moment of change, not a gradual drift","Community presence required — it doesn't count done alone","A recognizable 'before' and 'after' either side of the moment"] },
    { title:"Debate Chamber Division", blurb:"Members physically walk to one side of a room or another to register a vote.",
      elements:["A decision made visible through physical movement, not a hidden ballot","No abstaining by default — you have to go somewhere","The result obvious to everyone the moment people have moved"] },
    { title:"Beating Retreat", blurb:"Musicians play a set piece each evening to formally mark the day's end.",
      elements:["The same signal every time, so everyone recognizes what it means","A clear, audible marker instead of an ambiguous wrap-up","Consistency — it happens whether or not the day went well"] },
    { title:"Pilgrimage", blurb:"Travelling a fixed route to a shared destination, often alongside strangers doing the same.",
      elements:["A defined path, not a free-for-all route to the same goal","A shared destination that strangers arrive at together","The journey itself treated as part of the point, not just the arrival"] },
    { title:"Topping Out", blurb:"A small tree or flag is placed at the highest point when a structure's frame is finished.",
      elements:["A visible, physical marker of a specific milestone","Marking the structural milestone before the finishing work is done","A small gesture everyone on the project recognizes the meaning of"] },
    { title:"Confidential Disclosure", blurb:"A private, structured space set aside where something can be said that can't be said elsewhere.",
      elements:["A space explicitly protected so people will actually say the true thing","Structure and confidentiality that exists before anyone needs it","A fixed, known process, not an improvised private chat"] },
    { title:"Inauguration", blurb:"An oath is sworn publicly at a fixed moment, and authority formally changes hands right there.",
      elements:["A precise, scheduled instant when authority formally transfers","A public oath, not a private agreement","Continuity made visible — the old holder is present for the change"] },
    { title:"School Assembly", blurb:"The whole group gathers briefly each morning before splitting off into smaller groups for the day.",
      elements:["Everyone together briefly before the day fragments into separate work","The same time and place every day, so it needs no announcement","Shared information given once instead of repeated many times"] },
    { title:"Retirement Send-off", blurb:"Colleagues gather once to publicly mark someone's exit and what they actually contributed.",
      elements:["Naming specific contributions, not a generic thank-you","A single gathering that draws a clear line under someone's time","Marking an ending on purpose, instead of letting it go unnoticed"] },
    { title:"Blessing of the Fleet", blurb:"Before work begins for the season, everything is inspected and marked safe, together, in public.",
      elements:["A public check before work starts, not a private one","Marking readiness visibly, so everyone can see it's been done","A seasonal or cyclical moment, not a one-off"] },
    { title:"Auction Gavel Fall", blurb:"A single strike of a small hammer makes a decision final and unchangeable.",
      elements:["A clear, audible signal that a decision is now final","No renegotiation after the signal — that's the entire point","Everyone in the room hears the same moment at the same time"] },
    { title:"War Room Briefing", blurb:"A small group receives the same facts, at the same time, before dispersing to act separately.",
      elements:["Everyone briefed from the same source at the same moment, no relay","A hard split between briefing and acting, not done at once","Dispersing immediately afterwards to act on what was just shared"] },
    { title:"Debating Society Motion", blurb:"A stated position is argued for and against by assigned sides, before anyone votes.",
      elements:["Arguing a side you may not actually hold, on purpose","A vote that only happens after both cases have been heard","A structure that guarantees the counter-argument gets airtime"] },
    { title:"Lowering the Flag at Dusk", blurb:"A flag is lowered at the same fixed time each day and folded in a set pattern.",
      elements:["The same fixed time every day, needing no reminder","A precise, practiced sequence, not a quick yank","A visible marker that the day's public business has closed"] },
    { title:"Scout Promise Ceremony", blurb:"New members recite a fixed pledge out loud, in front of those already inside the group.",
      elements:["Words spoken aloud, not just privately agreed to","Existing members present specifically to witness the commitment","The same fixed wording for every new person, not personalized"] },
    { title:"Harvest-time Gleaning", blurb:"After the main work is done, anyone is invited back to collect what was left over.",
      elements:["A deliberate second pass, not just 'good enough the first time'","Open invitation — not restricted to whoever did the original work","Treating leftovers as still worth collecting, not written off"] }
  ].map(function(r, i){ r.id = "r" + i; return r; });

  var BUILTIN_PROCESSES = [
    { title:"Daily Stand-up", blurb:"The short sync before the team splits up to build for the day." },
    { title:"Sprint Retrospective", blurb:"Looking back at what worked and what didn't before starting the next cycle." },
    { title:"Service Launch", blurb:"The moment a piece of digital government goes live for the public to use." },
    { title:"Start of Work Day", blurb:"However the team currently signals that the working day has begun." },
    { title:"End of Work Day", blurb:"However the team currently signals that it's time to log off." },
    { title:"Stakeholder Briefing", blurb:"Bringing senior sponsors up to speed on progress, risk, and decisions needed." },
    { title:"Onboarding a New Colleague", blurb:"Someone's first days on the team, learning how things actually work here." },
    { title:"Shift or Team Handover", blurb:"Passing live work from one team or shift to the next without dropping anything." },
    { title:"Policy or Code Review", blurb:"A second set of eyes checking a decision or a change before it ships." },
    { title:"All-Hands / Town Hall", blurb:"The whole department in one room, or one call, at the same time." },
    { title:"Public Consultation", blurb:"Asking the people affected by a service what they actually think of it." },
    { title:"Incident Debrief", blurb:"Going through what broke, why, and what changes after an outage or failure." },
    { title:"Budget & Resourcing Meeting", blurb:"Deciding what gets funded, staffed, or cut for the period ahead." },
    { title:"Cross-Team Handoff", blurb:"Moving a piece of work from one team's remit into another's." },
    { title:"Performance & Development Review", blurb:"The periodic conversation about how someone's doing and where they're headed." },
    { title:"Discovery Phase Kickoff", blurb:"The first working session of a new project, before anyone knows what the solution looks like." },
    { title:"Alpha Assessment", blurb:"A panel checks early prototypes against the Service Standard before more money is committed." },
    { title:"Beta Assessment", blurb:"A panel checks a working service against the Service Standard before it opens to more users." },
    { title:"Live Service Assessment", blurb:"A panel checks a live service is still meeting the Service Standard, months or years on." },
    { title:"Sprint Planning", blurb:"The team agrees what it will actually attempt in the next two weeks." },
    { title:"Backlog Refinement", blurb:"Untidy ideas and tickets get discussed, sized, and made ready to pick up." },
    { title:"Show and Tell", blurb:"The team demonstrates what it built this sprint to whoever wants to see it." },
    { title:"User Research Session", blurb:"Watching a real user try to use the service, without leading or defending it." },
    { title:"Research Playback", blurb:"Sharing what was learned from user research with people who weren't in the room." },
    { title:"Accessibility Audit", blurb:"Checking a service actually works with assistive technology, not just in theory." },
    { title:"Content Design Review", blurb:"A second pair of eyes checks the actual words a citizen will read before they go live." },
    { title:"Technical Design Review", blurb:"Engineers walk a proposed technical approach past others before committing to build it." },
    { title:"Architecture Decision Sign-off", blurb:"Writing down a technical decision and why, so it isn't re-argued from scratch later." },
    { title:"Security Assurance Review", blurb:"Checking a system against security requirements before it handles real data." },
    { title:"Data Protection Impact Assessment", blurb:"Working out, on paper, what could go wrong with people's data before it's collected." },
    { title:"Business Case Approval", blurb:"Making the case for funding in the format the Treasury actually expects to see." },
    { title:"Spend Control Approval", blurb:"Getting sign-off to spend on technology from outside your own department." },
    { title:"Live Incident Response", blurb:"Everyone available drops what they're doing because a live service is down or broken." },
    { title:"Post-Incident Review", blurb:"Once the fire is out, working out calmly what actually happened and why." },
    { title:"Service Decommissioning", blurb:"Formally switching a service off and making sure nothing still quietly depends on it." },
    { title:"Change Advisory Board", blurb:"A group signs off a change before it's allowed anywhere near the live environment." },
    { title:"Release / Go-Live Decision", blurb:"The final go or no-go call before something ships to real users." },
    { title:"Casework Triage", blurb:"Sorting incoming cases by urgency and type before anyone starts working them." },
    { title:"FOI Request Response", blurb:"Answering a Freedom of Information request inside the statutory deadline, whatever else is on." },
    { title:"Parliamentary Question Drafting", blurb:"Preparing a factually watertight answer a minister will read out in the House." },
    { title:"Ministerial Submission", blurb:"Writing advice up to a minister in the exact format their office expects." },
    { title:"Correspondence Handling", blurb:"Working through the queue of letters and emails sent in by members of the public." },
    { title:"Contact Centre Shift Handover", blurb:"Passing live calls and open queries from one shift to the next without dropping any." },
    { title:"Digital Service Desk Ticket", blurb:"Working through a queue of reported problems from staff or the public, one at a time." },
    { title:"Cross-Departmental Working Group", blurb:"Several departments who don't normally work together try to agree a shared way forward." },
    { title:"Programme Board", blurb:"Senior sponsors check a programme's progress, risk, and money against the plan." },
    { title:"Risk Register Review", blurb:"Going through what could go wrong on a project and whether anything's changed." },
    { title:"Annual Business Planning", blurb:"Deciding what the team or directorate will actually try to do in the year ahead." },
    { title:"Team Restructure Announcement", blurb:"Telling a team its shape is changing, and what that means for each person in it." },
    { title:"Team Away Day", blurb:"Taking the team out of the normal routine for a day to think, plan, or just reset." },
    { title:"Making Decisions", blurb:"The point where a discussion has to turn into an actual, ownable choice." },
    { title:"Challenging Hierarchy", blurb:"Raising a concern, question, or better idea upward, past people more senior than you." },
    { title:"Reducing Meetings", blurb:"Actively cutting time spent in rooms and calls back down to what's necessary." },
    { title:"Hybrid Connection", blurb:"Keeping people who work from different places actually feeling like one team." },
    { title:"Recovering After Difficult Work", blurb:"Giving people space to reset after something that took a real toll." },
    { title:"Surfacing Disagreement", blurb:"Getting real objections out into the open instead of letting them go unsaid." },
    { title:"Protecting Focus", blurb:"Guarding blocks of uninterrupted time so deep work can actually happen." },
    { title:"Learning From Failure", blurb:"Turning something that went wrong into something the team genuinely learns from." },
    { title:"Beginning Collaborative Work", blurb:"The moment separate people actually start working together as one effort." },
    { title:"Ending Collaborative Work", blurb:"Closing out a piece of joint work cleanly, not just letting it fade." }
  ].map(function(p, i){ p.id = "p" + i; return p; });

  var customRituals = [];
  var customProcesses = [];
  var usingLocalCustom = false;
  var LOCAL_CUSTOM_KEY = "ritual-exchange-custom-v1";
  var STORAGE_KEY = "ritual-exchange-v1";

  var state = { ritualId:null, processId:null, counter:0, name:"" };
  var db = null;

  var el = {};
  ["comboCount","ritualBadge","ritualTitle","ritualBlurb","ritualAddedBy",
   "processBadge","processTitle","processBlurb","processAddedBy",
   "linkRitual","linkProcess","borrowList","noteInput","nameInput",
   "submitBtn","copyBtn","statusLine","boardSection","boardList","boardCount",
   "drawBtn","redrawRitual","redrawProcess",
   "toggleAddRitual","addRitualForm","newRitualTitle","newRitualBlurb","newRitualTip","saveRitualBtn","cancelRitualBtn","ritualFormStatus",
   "toggleAddProcess","addProcessForm","newProcessTitle","newProcessBlurb","saveProcessBtn","cancelProcessBtn","processFormStatus"
  ].forEach(function(id){ el[id] = document.getElementById(id); });

  function allRituals(){ return BUILTIN_RITUALS.concat(customRituals); }
  function allProcesses(){ return BUILTIN_PROCESSES.concat(customProcesses); }
  function findRitual(id){ var list = allRituals(); for(var i=0;i<list.length;i++) if(list[i].id===id) return list[i]; return null; }
  function findProcess(id){ var list = allProcesses(); for(var i=0;i<list.length;i++) if(list[i].id===id) return list[i]; return null; }

  function pickRandomExcept(list, excludeId){
    if(list.length === 0) return null;
    if(list.length === 1) return list[0];
    var item;
    do{ item = list[Math.floor(Math.random() * list.length)]; } while(item.id === excludeId);
    return item;
  }

  function persist(){
    try{
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ ritualId:state.ritualId, processId:state.processId, counter:state.counter, name:state.name }));
    }catch(e){ /* storage unavailable; app still works this session */ }
  }

  function load(){
    try{
      var raw = localStorage.getItem(STORAGE_KEY);
      if(!raw) return false;
      var parsed = JSON.parse(raw);
      if(parsed && parsed.ritualId && parsed.processId){
        state.ritualId = parsed.ritualId; state.processId = parsed.processId;
        state.counter = parsed.counter || 0; state.name = parsed.name || "";
        return true;
      }
    }catch(e){ /* ignore corrupt or unavailable storage */ }
    return false;
  }

  function loadLocalCustom(){
    try{
      var raw = localStorage.getItem(LOCAL_CUSTOM_KEY);
      if(!raw) return;
      var parsed = JSON.parse(raw);
      if(parsed && Array.isArray(parsed.rituals)) customRituals = parsed.rituals;
      if(parsed && Array.isArray(parsed.processes)) customProcesses = parsed.processes;
    }catch(e){ /* ignore */ }
  }

  function saveLocalCustom(){
    try{
      localStorage.setItem(LOCAL_CUSTOM_KEY, JSON.stringify({ rituals: customRituals, processes: customProcesses }));
    }catch(e){ /* ignore */ }
  }

  function renderCard(){
    var ritual = findRitual(state.ritualId);
    var process = findProcess(state.processId);
    if(!ritual || !process) return;

    el.comboCount.textContent = state.counter < 10 ? "00" + state.counter : (state.counter < 100 ? "0" + state.counter : "" + state.counter);

    var rList = allRituals(); var rPos = rList.indexOf(ritual) + 1;
    el.ritualBadge.textContent = "No. " + rPos + " of " + rList.length;
    el.ritualTitle.textContent = ritual.title;
    el.ritualBlurb.textContent = ritual.blurb;
    if(ritual.addedBy){ el.ritualAddedBy.hidden = false; el.ritualAddedBy.textContent = "added by " + ritual.addedBy; }
    else { el.ritualAddedBy.hidden = true; }

    var pList = allProcesses(); var pPos = pList.indexOf(process) + 1;
    el.processBadge.textContent = "No. " + pPos + " of " + pList.length;
    el.processTitle.textContent = process.title;
    el.processBlurb.textContent = process.blurb;
    if(process.addedBy){ el.processAddedBy.hidden = false; el.processAddedBy.textContent = "added by " + process.addedBy; }
    else { el.processAddedBy.hidden = true; }

    el.linkRitual.textContent = ritual.title;
    el.linkProcess.textContent = process.title;

    el.borrowList.innerHTML = "";
    (ritual.elements || []).forEach(function(text){
      var li = document.createElement('li');
      li.textContent = text;
      el.borrowList.appendChild(li);
    });

    el.noteInput.value = "";
    el.nameInput.value = state.name || "";
    setStatus("Submitting adds it to the board below — or just note it down and share it your own way.", "muted");
  }

  function setStatus(text, cls){
    el.statusLine.textContent = text;
    el.statusLine.className = "status-line " + (cls || "muted");
  }

  function drawBoth(){
    var r = pickRandomExcept(allRituals(), state.ritualId);
    var p = pickRandomExcept(allProcesses(), state.processId);
    state.ritualId = r.id; state.processId = p.id; state.counter += 1;
    renderCard(); persist();
  }
  function drawRitualOnly(){
    var r = pickRandomExcept(allRituals(), state.ritualId);
    state.ritualId = r.id; state.counter += 1;
    renderCard(); persist();
  }
  function drawProcessOnly(){
    var p = pickRandomExcept(allProcesses(), state.processId);
    state.processId = p.id; state.counter += 1;
    renderCard(); persist();
  }

  function answerText(){
    var ritual = findRitual(state.ritualId);
    var process = findProcess(state.processId);
    var idea = el.noteInput.value.trim();
    return ["Ritual: " + ritual.title, "Process: " + process.title, "Idea: " + (idea || "(not written yet)")].join("\n");
  }

  function copyFallback(text){
    try{
      var ta = document.createElement('textarea');
      ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.focus(); ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      return true;
    }catch(e){ return false; }
  }

  function doCopy(){
    var text = answerText();
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(text).then(function(){
        setStatus("Copied — paste it wherever you're sharing your answer.", "ok");
      }, function(){
        if(copyFallback(text)) setStatus("Copied — paste it wherever you're sharing your answer.", "ok");
        else setStatus("Couldn't copy automatically — select the text and copy it manually.", "err");
      });
    } else {
      if(copyFallback(text)) setStatus("Copied — paste it wherever you're sharing your answer.", "ok");
      else setStatus("Couldn't copy automatically — select the text and copy it manually.", "err");
    }
  }

  function renderBoardDocs(docs){
    el.boardList.innerHTML = "";
    el.boardCount.textContent = docs.length + (docs.length === 1 ? " entry" : " entries");
    if(docs.length === 0){
      var empty = document.createElement('li');
      empty.className = "board-empty";
      empty.textContent = "Nothing submitted yet — be the first.";
      el.boardList.appendChild(empty);
      return;
    }
    docs.forEach(function(snap){
      var d = snap.data();
      if(!d) return;
      var li = document.createElement('li');
      li.className = "board-item";
      var pair = document.createElement('div');
      pair.className = "pair";
      var rSpan = document.createElement('span'); rSpan.className = 'r'; rSpan.textContent = d.ritual || '';
      var pSpan = document.createElement('span'); pSpan.className = 'p'; pSpan.textContent = d.process || '';
      pair.appendChild(rSpan);
      pair.appendChild(document.createTextNode(' → '));
      pair.appendChild(pSpan);
      var idea = document.createElement('p');
      idea.className = 'idea';
      idea.textContent = d.idea || '';
      var who = document.createElement('div');
      who.className = 'who';
      who.textContent = d.name ? d.name : 'Anonymous';
      li.appendChild(pair); li.appendChild(idea); li.appendChild(who);
      el.boardList.appendChild(li);
    });
  }

  function wireCustomCollection(collectionName, targetArrayName){
    try{
      var q = db.collection(collectionName).orderBy('ts', 'asc').limit(300);
      q.onSnapshot(function(snap){
        var items = snap.docs.map(function(d){
          var data = d.data() || {};
          return { id: 'c_' + d.id, title: data.title || 'Untitled', blurb: data.blurb || '', elements: data.elements || [], addedBy: data.addedBy || '' };
        });
        if(targetArrayName === 'rituals') customRituals = items; else customProcesses = items;
      }, function(){ /* leave existing list as-is on error */ });
    }catch(e){ /* ignore */ }
  }

  function enableBoard(){
    el.submitBtn.disabled = false;
    wireCustomCollection('customRituals', 'rituals');
    wireCustomCollection('customProcesses', 'processes');
    try{
      var q = db.collection('submissions').orderBy('ts', 'desc').limit(100);
      q.onSnapshot(function(snap){ renderBoardDocs(snap.docs); }, function(){
        el.boardList.innerHTML = '<li class="board-note">The shared board can’t be reached right now. Use “Copy my answer” instead.</li>';
      });
    }catch(e){
      el.boardList.innerHTML = '<li class="board-note">The shared board isn’t available right now. Use “Copy my answer” instead.</li>';
    }
  }

  function disableBoard(){
    usingLocalCustom = true;
    loadLocalCustom();
    el.submitBtn.disabled = true;
    el.submitBtn.title = "Shared board isn't available right now";
    el.boardList.innerHTML = '<li class="board-note">The shared board can’t be reached right now (you may be offline, or a privacy extension is blocking it). Use “Copy my answer” to share it another way. Anything you add to the piles below is saved to your own browser only until it reconnects.</li>';
    el.boardCount.textContent = "";
  }

  function submit(){
    var idea = el.noteInput.value.trim();
    if(!idea){ setStatus("Write what you'd try before adding it to the board.", "err"); el.noteInput.focus(); return; }
    if(!db){ doCopy(); return; }
    var ritual = findRitual(state.ritualId);
    var process = findProcess(state.processId);
    state.name = el.nameInput.value.trim();
    persist();
    el.submitBtn.disabled = true;
    setStatus("Adding to the board…", "muted");
    db.collection('submissions').add({
      ritual: ritual.title, process: process.title, idea: idea, name: state.name, ts: Date.now()
    }).then(function(){
      setStatus("Added to the board. Thank you.", "ok");
      el.submitBtn.disabled = false;
    }).catch(function(){
      setStatus("Couldn't save to the board — copied your answer instead so you can share it another way.", "err");
      doCopy();
      el.submitBtn.disabled = false;
    });
  }

  function addCustomItem(kind, obj){
    if(db && !usingLocalCustom){
      var coll = kind === 'ritual' ? 'customRituals' : 'customProcesses';
      return db.collection(coll).add(Object.assign({ ts: Date.now() }, obj)).then(function(){ return 'shared'; });
    }
    obj.id = 'lc_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
    if(kind === 'ritual') customRituals.push(obj); else customProcesses.push(obj);
    saveLocalCustom();
    return Promise.resolve('local');
  }

  el.drawBtn.addEventListener('click', drawBoth);
  el.redrawRitual.addEventListener('click', drawRitualOnly);
  el.redrawProcess.addEventListener('click', drawProcessOnly);
  el.submitBtn.addEventListener('click', submit);
  el.copyBtn.addEventListener('click', doCopy);

  el.toggleAddRitual.addEventListener('click', function(){
    el.addRitualForm.hidden = !el.addRitualForm.hidden;
    if(!el.addRitualForm.hidden) el.newRitualTitle.focus();
  });
  el.cancelRitualBtn.addEventListener('click', function(){
    el.addRitualForm.hidden = true;
    el.newRitualTitle.value = ""; el.newRitualBlurb.value = ""; el.newRitualTip.value = "";
    el.ritualFormStatus.textContent = " ";
  });
  el.saveRitualBtn.addEventListener('click', function(){
    var title = el.newRitualTitle.value.trim();
    if(!title){ el.ritualFormStatus.textContent = "Give it a name first."; el.ritualFormStatus.className = "status-line err"; el.newRitualTitle.focus(); return; }
    var blurb = el.newRitualBlurb.value.trim() || "Added by the team.";
    var tip = el.newRitualTip.value.trim();
    var elements = tip ? [tip] : ["What's worth borrowing here? Add your own note when you draw it."];
    var addedBy = (el.nameInput.value.trim() || state.name || "").trim();
    el.saveRitualBtn.disabled = true;
    addCustomItem('ritual', { title: title, blurb: blurb, elements: elements, addedBy: addedBy }).then(function(where){
      el.saveRitualBtn.disabled = false;
      el.ritualFormStatus.textContent = where === 'shared' ? "Added to the shared pool for everyone." : "Saved to your browser only (shared board unavailable).";
      el.ritualFormStatus.className = "status-line " + (where === 'shared' ? 'ok' : 'muted');
      el.newRitualTitle.value = ""; el.newRitualBlurb.value = ""; el.newRitualTip.value = "";
    }).catch(function(){
      el.saveRitualBtn.disabled = false;
      el.ritualFormStatus.textContent = "Couldn't save it — try again.";
      el.ritualFormStatus.className = "status-line err";
    });
  });

  el.toggleAddProcess.addEventListener('click', function(){
    el.addProcessForm.hidden = !el.addProcessForm.hidden;
    if(!el.addProcessForm.hidden) el.newProcessTitle.focus();
  });
  el.cancelProcessBtn.addEventListener('click', function(){
    el.addProcessForm.hidden = true;
    el.newProcessTitle.value = ""; el.newProcessBlurb.value = "";
    el.processFormStatus.textContent = " ";
  });
  el.saveProcessBtn.addEventListener('click', function(){
    var title = el.newProcessTitle.value.trim();
    if(!title){ el.processFormStatus.textContent = "Give it a name first."; el.processFormStatus.className = "status-line err"; el.newProcessTitle.focus(); return; }
    var blurb = el.newProcessBlurb.value.trim() || "Added by the team.";
    var addedBy = (el.nameInput.value.trim() || state.name || "").trim();
    el.saveProcessBtn.disabled = true;
    addCustomItem('process', { title: title, blurb: blurb, addedBy: addedBy }).then(function(where){
      el.saveProcessBtn.disabled = false;
      el.processFormStatus.textContent = where === 'shared' ? "Added to the shared pool for everyone." : "Saved to your browser only (shared board unavailable).";
      el.processFormStatus.className = "status-line " + (where === 'shared' ? 'ok' : 'muted');
      el.newProcessTitle.value = ""; el.newProcessBlurb.value = "";
    }).catch(function(){
      el.saveProcessBtn.disabled = false;
      el.processFormStatus.textContent = "Couldn't save it — try again.";
      el.processFormStatus.className = "status-line err";
    });
  });

  function connectFirebase(){
    if(!window.FIREBASE_CONFIG || !window.FIREBASE_CONFIG.apiKey || window.FIREBASE_CONFIG.apiKey.indexOf('PASTE') === 0){
      disableBoard();
      return;
    }
    if(!window.firebase){ disableBoard(); return; }
    try{
      firebase.initializeApp(window.FIREBASE_CONFIG);
      firebase.auth().signInAnonymously().then(function(){
        db = firebase.firestore();
        enableBoard();
      }).catch(function(){ disableBoard(); });
    }catch(e){ disableBoard(); }
  }

  function boot(){
    var restored = load();
    if(!restored || !findRitual(state.ritualId) || !findProcess(state.processId)){
      var r0 = BUILTIN_RITUALS[Math.floor(Math.random() * BUILTIN_RITUALS.length)];
      var p0 = BUILTIN_PROCESSES[Math.floor(Math.random() * BUILTIN_PROCESSES.length)];
      state.ritualId = r0.id; state.processId = p0.id; state.counter = 1;
    }
    renderCard();
    persist();
    el.submitBtn.disabled = true;
    connectFirebase();
  }

  boot();
})();
