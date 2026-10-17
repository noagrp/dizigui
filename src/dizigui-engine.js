class DiziguiEngine{
  constructor(data){
    this.data=data;
    this.sections=[...(data.sections||[])];
    this.map=new Map(this.sections.map(x=>[x.id,x]));
    this.chapters=[...(data.meta&&data.meta.chapters||[])];
    this.chapterMap=new Map(this.chapters.map(x=>[x.id,x]));
  }
  getMeta(){return this.data.meta||{};}
  list(){return this.sections.slice();}
  get(id){return this.map.get(id)||null;}
  indexOf(id){return this.sections.findIndex(x=>x.id===id);}
  getNext(id){const i=this.indexOf(id);return i>=0&&i<this.sections.length-1?this.sections[i+1]:null;}
  getPrevious(id){const i=this.indexOf(id);return i>0?this.sections[i-1]:null;}
  getChapter(id){return this.chapterMap.get(id)||null;}
  listByChapter(chapterId){return this.sections.filter(x=>x.chapter===chapterId);}
  search(q){
    const s=String(q||"").trim().toLowerCase();if(!s)return this.list();
    return this.sections.filter(x=>{
      const c=this.getChapter(x.chapter);
      return [x.title,c&&c.name,...(x.original||[]),x.explanation,x.note,...(x.terms||[]).flat()].filter(Boolean).join(" ").toLowerCase().includes(s);
    });
  }
}
async function loadDiziguiEngine(url="./data/dizigui.json"){
  const r=await fetch(url,{cache:"no-cache"});
  if(!r.ok)throw new Error("Unable to load 弟子规 data");
  return new DiziguiEngine(await r.json());
}
if(typeof window!=="undefined"){window.DiziguiEngine=DiziguiEngine;window.loadDiziguiEngine=loadDiziguiEngine;}
if(typeof module!=="undefined"&&module.exports)module.exports={DiziguiEngine,loadDiziguiEngine};
