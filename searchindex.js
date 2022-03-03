Search.setIndex({docnames:["index","installation","pipeline","resources"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,sphinx:56},filenames:["index.rst","installation.rst","pipeline.rst","resources.rst"],objects:{"renard.pipeline":[[2,0,0,"-","characters_extraction"],[2,0,0,"-","graph_extraction"],[2,0,0,"-","ner"],[2,0,0,"-","preprocessing"],[2,0,0,"-","tokenization"]],"renard.pipeline.characters_extraction":[[2,1,1,"","Character"],[2,1,1,"","GraphRulesCharactersExtractor"],[2,1,1,"","NaiveCharactersExtractor"]],"renard.pipeline.characters_extraction.Character":[[2,2,1,"","__delattr__"],[2,2,1,"","__eq__"],[2,2,1,"","__hash__"],[2,2,1,"","__init__"],[2,2,1,"","__repr__"],[2,2,1,"","__setattr__"]],"renard.pipeline.characters_extraction.GraphRulesCharactersExtractor":[[2,2,1,"","__call__"],[2,2,1,"","__init__"],[2,2,1,"","infer_name_gender"],[2,2,1,"","needs"],[2,2,1,"","optional_needs"],[2,2,1,"","production"]],"renard.pipeline.characters_extraction.NaiveCharactersExtractor":[[2,2,1,"","__call__"],[2,2,1,"","__init__"],[2,2,1,"","needs"],[2,2,1,"","production"]],"renard.pipeline.core":[[2,1,1,"","Pipeline"],[2,1,1,"","PipelineState"],[2,1,1,"","PipelineStep"]],"renard.pipeline.core.Pipeline":[[2,2,1,"","__call__"],[2,2,1,"","__init__"],[2,2,1,"","check_valid"]],"renard.pipeline.core.PipelineState":[[2,2,1,"","__eq__"],[2,3,1,"","__hash__"],[2,2,1,"","__init__"],[2,2,1,"","__repr__"],[2,3,1,"","bert_batch_encoding"],[2,3,1,"","bio_tags"],[2,3,1,"","characters"],[2,3,1,"","characters_graph"],[2,3,1,"","corefs"],[2,2,1,"","export_graph_to_gexf"],[2,3,1,"","text"],[2,3,1,"","tokens"],[2,3,1,"","wp_bio_tags"],[2,3,1,"","wp_tokens"]],"renard.pipeline.core.PipelineStep":[[2,2,1,"","__call__"],[2,2,1,"","__init__"],[2,2,1,"","needs"],[2,2,1,"","optional_needs"],[2,2,1,"","production"]],"renard.pipeline.graph_extraction":[[2,1,1,"","CoOccurencesGraphExtractor"]],"renard.pipeline.graph_extraction.CoOccurencesGraphExtractor":[[2,2,1,"","__call__"],[2,2,1,"","__init__"],[2,2,1,"","needs"],[2,2,1,"","production"]],"renard.pipeline.ner":[[2,1,1,"","BertNamedEntityRecognizer"],[2,1,1,"","NEREntity"],[2,1,1,"","NLTKNamedEntityRecognizer"],[2,4,1,"","ner_entities"],[2,4,1,"","score_ner"]],"renard.pipeline.ner.BertNamedEntityRecognizer":[[2,2,1,"","__call__"],[2,2,1,"","__init__"],[2,2,1,"","needs"],[2,2,1,"","production"],[2,2,1,"","wp_labels_to_token_labels"]],"renard.pipeline.ner.NEREntity":[[2,2,1,"","__eq__"],[2,3,1,"","__hash__"],[2,2,1,"","__init__"],[2,2,1,"","__repr__"],[2,3,1,"","end_idx"],[2,3,1,"","start_idx"],[2,3,1,"","tag"],[2,3,1,"","tokens"]],"renard.pipeline.ner.NLTKNamedEntityRecognizer":[[2,2,1,"","__call__"],[2,2,1,"","__init__"],[2,2,1,"","needs"],[2,2,1,"","production"]],"renard.pipeline.preprocessing":[[2,1,1,"","CustomSubstitutionPreprocessor"]],"renard.pipeline.preprocessing.CustomSubstitutionPreprocessor":[[2,2,1,"","__call__"],[2,2,1,"","__init__"],[2,2,1,"","needs"],[2,2,1,"","production"]],"renard.pipeline.tokenization":[[2,1,1,"","BertTokenizer"],[2,1,1,"","NLTKWordTokenizer"]],"renard.pipeline.tokenization.BertTokenizer":[[2,2,1,"","__call__"],[2,2,1,"","__init__"],[2,2,1,"","needs"],[2,2,1,"","production"],[2,2,1,"","wp_tokens_to_tokens"]],"renard.pipeline.tokenization.NLTKWordTokenizer":[[2,2,1,"","__call__"],[2,2,1,"","__init__"],[2,2,1,"","needs"],[2,2,1,"","production"]],"renard.resources.hypocorisms":[[3,1,1,"","HypocorismGazetteer"]],"renard.resources.hypocorisms.HypocorismGazetteer":[[3,2,1,"","__init__"],[3,2,1,"","are_related"],[3,2,1,"","get_nicknames"],[3,2,1,"","get_possible_names"]]},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function"},terms:{"0":[2,3],"10":2,"2":[2,3],"2003":2,"2015":2,"25":2,"3":2,"4":2,"639":2,"abstract":2,"case":2,"class":[2,3],"export":2,"final":2,"float":2,"function":2,"import":2,"int":2,"return":[2,3],"static":2,"throw":2,"true":2,"try":2,A:2,If:1,In:2,Is:2,It:2,The:1,To:2,__call__:2,__delattr__:2,__eq__:2,__hash__:2,__init__:[2,3],__repr__:2,__setattr__:2,_must_:2,al:2,algorithm:2,align:2,all:[2,3],allow:2,an:[2,3],ani:2,annot:2,apach:3,apparit:2,appli:2,ar:[2,3],are_rel:3,attribut:2,b:2,base:2,basic:2,basictokenizerstep:2,batch:2,batch_siz:2,batchencod:2,becaus:2,befor:2,being:2,bert:2,bert_batch_encod:2,bertnamedentityrecogn:2,berttoken:2,bio:2,bio_tag:2,bool:[2,3],both:[2,3],call:2,can:[1,2,3],carltonnorthern:3,chain:2,charact:0,characters_extract:2,characters_graph:2,check:[2,3],check_valid:2,co:2,co_occurences_dist:2,code:2,com:3,come:3,conll:2,construct:2,convert:2,cooccurencesgraphextractor:2,core:0,coref:2,corefer:2,coreferencechain:2,corenlp:[0,1],correct:2,correspond:3,current:2,custom:2,customsubstitutionpreprocessor:2,data:3,declar:2,def:2,defaul:2,delattr:2,depend:1,deriv:2,detect:2,dict:2,diminut:3,document:2,doe:2,dslim:2,dure:2,dweight:2,dynam:2,dynamic_overlap:2,dynamic_window:2,e:1,each:2,easili:2,either:2,encod:2,end:2,end_idx:2,eng:2,entiti:2,entitii:2,environ:1,equal:3,error:2,et:2,ever:1,exampl:2,except:2,execut:2,export_graph_to_gexf:2,extra:1,extract:0,extractor:2,f1:2,f:2,fals:2,file:2,flexibl:2,form:2,format:2,four:2,from:[2,3],from_pretrain:2,g:2,gazeet:3,gazett:3,gender:2,gephi:2,get:1,get_nicknam:3,get_possible_nam:3,gexf:2,github:3,given:3,graph:0,graph_extract:2,graphrulescharactersextractor:2,ha:2,harmon:2,hash:2,help:2,here:2,http:3,huggingfac:2,huggingface_model_id:2,hypocor:0,hypocorismgazett:3,id:2,implement:2,index:[0,2],infer:2,infer_name_gend:2,inform:2,init:2,input:2,inspir:2,instal:0,instanti:2,instead:2,interact:2,intract:2,iso:2,issu:2,its:2,kei:2,kwarg:2,label:2,languag:2,last:2,least:2,letter:2,licens:3,lifetim:2,like:2,limit:2,link:2,list:2,lookup:3,mai:2,manag:1,match:2,mean:2,mention:2,merg:2,messag:2,method:2,min_appear:2,model:2,modul:0,more:2,must:2,my_doc:2,my_script:1,n:2,naivecharactersextractor:2,name1:3,name2:3,name:[2,3],need:2,neeed:2,ner:0,ner_ent:2,nerent:2,network:2,networkx:2,nice:2,nicknam:3,nlp:2,nltk:2,nltknamedentityrecogn:2,nltkwordtoken:2,node:2,none:2,number:2,nx:2,occur:2,one:[2,3],open:2,option:2,optional_ne:2,order:2,other:[2,3],otherwis:2,out:2,output:2,overlap:2,overriden:2,page:0,paramet:2,pass:2,path:2,per:2,percentag:2,piec:2,pipelin:[0,1],pipelinest:2,pipelinestep:2,poetri:1,possibl:[2,3],precis:2,pred_bio_tag:2,prefix:2,preprocess:0,preprocessor:2,previou:2,produc:2,product:2,progress:2,progress_report:2,project:1,propag:2,properti:2,py:1,python:1,quick:0,read:2,recal:2,recogn:2,ref_bio_tag:2,refer:2,regex:2,regular:2,renard:[2,3],report:2,repr:2,requir:2,resolve_inconsist:2,resourc:0,rule:2,run:[1,2],s:2,same:2,satisfi:2,score:2,score_n:2,script:1,search:0,self:2,seqev:2,sequenti:2,seri:2,set:[2,3],setattr:2,sever:2,share:2,shell:1,simpl:2,singl:2,specifi:2,split:2,stanford:[0,1],stanza:1,start:[0,2],start_idx:2,store:2,str:[2,3],substit:2,substition_rul:2,substitut:2,tag:2,task:2,text:2,thei:2,therefor:2,thi:[2,3],those:2,time:2,token:0,tokenization_utils_bas:2,tqdm:2,transform:2,troubleshoot:2,tupl:2,txt:2,type:[2,3],under:[1,3],union:2,us:[1,2,3],usual:2,vala:2,valid:2,valu:2,virtual:1,want:1,warn:2,weight:2,when:2,where:2,which:2,window:2,without:2,word:2,word_token:2,work:2,wp_bio_tag:2,wp_label:2,wp_labels_to_token_label:2,wp_token:2,wp_tokens_to_token:2,write_gexf:2,you:1},titles:["Welcome to Renard\u2019s documentation!","Installation","Pipeline","Resources"],titleterms:{"new":2,The:2,charact:2,content:0,core:2,corenlp:2,creat:2,document:0,extract:2,graph:2,hypocor:3,indic:0,instal:1,ner:2,object:2,pipelin:2,preprocess:2,quick:1,renard:0,resourc:3,s:0,stanford:2,start:1,state:2,step:2,tabl:0,token:2,welcom:0}})