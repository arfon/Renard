Search.setIndex({docnames:["index","installation","pipeline","resources"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":5,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,sphinx:56},filenames:["index.rst","installation.rst","pipeline.rst","resources.rst"],objects:{"renard.pipeline":[[2,0,0,"-","characters_extraction"],[2,0,0,"-","graph_extraction"],[2,0,0,"-","ner"],[2,0,0,"-","preprocessing"],[2,0,0,"-","stanford_corenlp"],[2,0,0,"-","tokenization"]],"renard.pipeline.characters_extraction":[[2,1,1,"","Character"],[2,1,1,"","GraphRulesCharactersExtractor"],[2,1,1,"","NaiveCharactersExtractor"],[2,3,1,"","_assign_coreference_mentions"]],"renard.pipeline.characters_extraction.Character":[[2,2,1,"","__delattr__"],[2,2,1,"","__eq__"],[2,2,1,"","__hash__"],[2,2,1,"","__init__"],[2,2,1,"","__repr__"],[2,2,1,"","__setattr__"]],"renard.pipeline.characters_extraction.GraphRulesCharactersExtractor":[[2,2,1,"","__call__"],[2,2,1,"","__init__"],[2,2,1,"","infer_name_gender"],[2,2,1,"","needs"],[2,2,1,"","optional_needs"],[2,2,1,"","production"]],"renard.pipeline.characters_extraction.NaiveCharactersExtractor":[[2,2,1,"","__call__"],[2,2,1,"","__init__"],[2,2,1,"","needs"],[2,2,1,"","optional_needs"],[2,2,1,"","production"],[2,2,1,"","supported_langs"]],"renard.pipeline.core":[[2,1,1,"","Pipeline"],[2,1,1,"","PipelineState"],[2,1,1,"","PipelineStep"]],"renard.pipeline.core.Pipeline":[[2,2,1,"","__call__"],[2,2,1,"","__init__"],[2,2,1,"","check_valid"]],"renard.pipeline.core.PipelineState":[[2,2,1,"","__eq__"],[2,4,1,"","__hash__"],[2,2,1,"","__init__"],[2,2,1,"","__repr__"],[2,4,1,"","bert_batch_encoding"],[2,4,1,"","bio_tags"],[2,4,1,"","chapter_tokens"],[2,4,1,"","chapters"],[2,4,1,"","characters"],[2,4,1,"","characters_graph"],[2,4,1,"","corefs"],[2,2,1,"","draw_graph"],[2,2,1,"","draw_graph_to_file"],[2,2,1,"","draw_graphs_to_dir"],[2,2,1,"","export_graph_to_gexf"],[2,2,1,"","graph_with_names"],[2,4,1,"","sentences"],[2,4,1,"","sentences_polarities"],[2,4,1,"","text"],[2,4,1,"","tokens"],[2,4,1,"","wp_bio_tags"],[2,4,1,"","wp_tokens"]],"renard.pipeline.core.PipelineStep":[[2,2,1,"","__call__"],[2,2,1,"","__init__"],[2,2,1,"","_pipeline_init_"],[2,2,1,"","needs"],[2,2,1,"","optional_needs"],[2,2,1,"","production"],[2,2,1,"","supported_langs"]],"renard.pipeline.corefs":[[2,0,0,"-","corefs"]],"renard.pipeline.corefs.corefs":[[2,1,1,"","BertCoreferenceResolver"],[2,1,1,"","SpacyCorefereeCoreferenceResolver"]],"renard.pipeline.corefs.corefs.BertCoreferenceResolver":[[2,2,1,"","__call__"],[2,2,1,"","__init__"],[2,2,1,"","needs"],[2,2,1,"","production"]],"renard.pipeline.corefs.corefs.SpacyCorefereeCoreferenceResolver":[[2,2,1,"","__call__"],[2,2,1,"","__init__"],[2,2,1,"","_coreferee_get_mention_tokens"],[2,2,1,"","_pipeline_init_"],[2,2,1,"","_spacy_try_infer_spaces"],[2,2,1,"","needs"],[2,2,1,"","production"]],"renard.pipeline.graph_extraction":[[2,1,1,"","CoOccurencesGraphExtractor"],[2,3,1,"","mentions_for_chapter"],[2,3,1,"","sent_index_for_token_index"],[2,3,1,"","sent_indices_for_chapter"]],"renard.pipeline.graph_extraction.CoOccurencesGraphExtractor":[[2,2,1,"","__call__"],[2,2,1,"","__init__"],[2,2,1,"","_extract_dynamic_graph"],[2,2,1,"","_extract_gephi_dynamic_graph"],[2,2,1,"","_extract_graph"],[2,2,1,"","_mentions_interact"],[2,2,1,"","needs"],[2,2,1,"","optional_needs"],[2,2,1,"","production"],[2,2,1,"","supported_langs"]],"renard.pipeline.ner":[[2,1,1,"","BertNamedEntityRecognizer"],[2,1,1,"","NEREntity"],[2,1,1,"","NLTKNamedEntityRecognizer"],[2,3,1,"","ner_entities"],[2,3,1,"","score_ner"]],"renard.pipeline.ner.BertNamedEntityRecognizer":[[2,2,1,"","__call__"],[2,2,1,"","__init__"],[2,2,1,"","_pipeline_init_"],[2,2,1,"","needs"],[2,2,1,"","production"],[2,2,1,"","supported_langs"],[2,2,1,"","wp_labels_to_token_labels"]],"renard.pipeline.ner.NEREntity":[[2,2,1,"","__eq__"],[2,4,1,"","__hash__"],[2,2,1,"","__init__"],[2,2,1,"","__repr__"],[2,2,1,"","shifted"],[2,4,1,"","tag"]],"renard.pipeline.ner.NLTKNamedEntityRecognizer":[[2,2,1,"","__call__"],[2,2,1,"","__init__"],[2,2,1,"","needs"],[2,2,1,"","production"],[2,2,1,"","supported_langs"]],"renard.pipeline.preprocessing":[[2,1,1,"","CustomSubstitutionPreprocessor"]],"renard.pipeline.preprocessing.CustomSubstitutionPreprocessor":[[2,2,1,"","__call__"],[2,2,1,"","__init__"],[2,2,1,"","needs"],[2,2,1,"","production"]],"renard.pipeline.stanford_corenlp":[[2,1,1,"","StanfordCoreNLPPipeline"],[2,3,1,"","corenlp_annotations_bio_tags"]],"renard.pipeline.stanford_corenlp.StanfordCoreNLPPipeline":[[2,2,1,"","__call__"],[2,2,1,"","__init__"],[2,2,1,"","needs"],[2,2,1,"","production"]],"renard.pipeline.tokenization":[[2,1,1,"","BertTokenizer"],[2,1,1,"","NLTKTokenizer"]],"renard.pipeline.tokenization.BertTokenizer":[[2,2,1,"","__call__"],[2,2,1,"","__init__"],[2,2,1,"","_pipeline_init_"],[2,2,1,"","needs"],[2,2,1,"","production"],[2,2,1,"","supported_langs"],[2,2,1,"","wp_tokens_to_tokens"]],"renard.pipeline.tokenization.NLTKTokenizer":[[2,2,1,"","__call__"],[2,2,1,"","__init__"],[2,2,1,"","needs"],[2,2,1,"","production"],[2,2,1,"","supported_langs"]],"renard.resources.hypocorisms":[[3,1,1,"","HypocorismGazetteer"]],"renard.resources.hypocorisms.HypocorismGazetteer":[[3,2,1,"","__init__"],[3,2,1,"","_add_hypocorism_"],[3,2,1,"","are_related"],[3,2,1,"","get_nicknames"],[3,2,1,"","get_possible_names"]]},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:attribute"},terms:{"0":[2,3],"1":2,"10":2,"128":2,"2":[2,3],"2003":2,"2015":2,"2017":2,"2019":2,"25":2,"3":2,"4":2,"639":2,"8g":2,"9999999":2,"abstract":2,"boolean":2,"case":2,"class":[2,3],"default":2,"do":2,"export":2,"final":2,"float":2,"function":2,"import":2,"int":2,"return":[2,3],"static":2,"throw":2,"true":2,"try":2,"while":2,A:2,As:2,By:2,For:2,If:[1,2],In:2,It:2,The:1,To:2,__call__:2,__delattr__:2,__eq__:2,__hash__:2,__init__:[2,3],__repr__:2,__setattr__:2,_add_hypocorism_:3,_assign_coreference_ment:2,_coreferee_get_mention_token:2,_extract_dynamic_graph:2,_extract_gephi_dynamic_graph:2,_extract_graph:2,_mentions_interact:2,_must_:2,_pipeline_init_:2,_spacy_try_infer_spac:2,accept:2,ad:2,add:[2,3],addit:2,addition:2,additional_hypocor:2,al:2,algorithm:2,align:2,all:[2,3],alloc:2,allow:2,alreadi:2,also:2,an:[2,3],ani:2,annot:2,annotate_coref:2,anteced:2,antecedents_nb:2,apach:3,apparit:2,appear:2,appli:2,applyfinegrain:2,ar:[2,3],are_rel:3,arg:2,argument:2,arrai:2,assign:2,associ:[2,3],attribut:2,auto:2,automat:2,avoid:2,b:2,base:2,basic:2,basictokenizerstep:2,batch:2,batch_siz:2,batchencod:2,be_quiet:2,becaus:2,befor:2,being:2,bert:2,bert_batch_encod:2,bert_pipelin:2,bertcoreferenceresolv:2,bertnamedentityrecogn:2,berttoken:2,between:2,bio:2,bio_tag:2,block:2,block_siz:2,bool:[2,3],both:[2,3],bypass:2,call:2,callabl:2,can:[1,2,3],candid:2,cannot:2,carltonnorthern:3,certain:2,chain:2,chapter:2,chapter_idx:2,chapter_token:2,charact:0,character_graph:2,characters_extract:2,characters_graph:2,check:[2,3],check_valid:2,choos:2,client_properti:2,close:2,co:2,co_occur:2,co_occurences_dist:2,code:2,com:[2,3],come:3,common:2,comput:2,config:2,configur:2,conll:2,consid:2,construct:2,contain:2,convert:2,cooccurencesgraphextractor:2,core:0,coref:2,coref_model:2,corefer:0,corefere:2,corefereebrok:2,corefre:2,corefs_algorithm:2,corenlp:[0,1],corenlp_annotations_bio_tag:2,corenlp_custom_properti:2,correct:2,correspond:3,cpu:2,cuda:2,cumul:2,current:2,custom:2,customsubstitutionpreprocessor:2,cut:2,data:[2,3],declar:2,def:2,defin:2,delattr:2,depend:[1,2],deriv:2,descript:2,detail:2,detect:2,determinist:2,devic:2,dict:2,dictionari:2,diminut:3,directli:2,directori:2,discard:2,distanc:2,doc:2,document:2,doe:2,doesn:2,draw:2,draw_graph:2,draw_graph_to_fil:2,draw_graphs_to_dir:2,dure:2,dweight:2,dynam:2,dynamic_overlap:2,dynamic_window:2,e:[1,2],each:2,easili:2,edg:2,either:2,element:2,en:2,encod:2,end:2,end_idx:2,eng:2,enough:2,entir:2,entiti:0,environ:1,equal:3,error:2,escap:2,et:2,ever:1,exampl:2,except:2,execut:2,expect:2,export_graph_to_gexf:2,extra:[1,2],extract:0,extractor:2,f1:2,f:2,fals:2,fig:2,figur:2,file:2,first:2,flexibl:2,follow:2,form:2,format:2,four:2,from:[2,3],frozenset:2,full:2,futur:2,g:2,gazeet:3,gazett:3,gender:2,gephi:2,get:[1,2],get_nicknam:3,get_possible_nam:3,gexf:2,github:[2,3],given:[2,3],graph:0,graph_extract:2,graph_start_idx:2,graph_with_nam:2,graphrulescharactersextractor:2,ha:2,hack:2,harmon:2,hash:2,hatch:2,have:2,head:2,help:2,here:2,high:2,html:2,http:[2,3],hugginfac:2,huggingfac:2,huggingface_model_id:2,hypocor:[0,2],hypocorismgazett:3,id:2,implement:2,implemt:2,index:[0,2],indic:2,infer:2,infer_name_gend:2,inform:2,init:2,initi:2,input:2,inspir:2,instal:[0,2],instanti:2,instead:2,intend:2,interact:2,intract:2,io:2,iso:2,issu:2,its:2,joshi:2,keep:2,kei:2,kept:2,know:2,kwarg:2,label:2,lang:2,languag:2,last:2,layout:2,least:2,lee:2,letter:2,librari:2,licens:3,lifetim:2,like:2,limit:2,link:2,list:[2,3],liter:2,locat:2,longest:2,lookup:3,loos:2,m:2,mai:2,manag:1,manual:2,match:2,matplotlib:2,max:2,max_char_length:2,max_span_s:2,maximum:2,mean:2,memori:2,mention:2,mention_1:2,mention_2:2,mention_head:2,mentions_for_chapt:2,mentions_per_token:2,merg:2,messag:2,method:2,might:2,min_appear:2,minimum:2,misc:2,model:2,modul:0,more:2,most:2,ms:2,must:2,my_doc:2,my_script:1,my_tokenization_funct:2,n:2,naivecharactersextractor:2,name1:3,name2:3,name:[0,3],name_styl:2,need:2,neeed:2,ner:2,ner_ent:2,nerent:2,network:2,networkx:2,neural:2,next:2,nice:2,nicknam:[2,3],nlp:2,nltk:2,nltknamedentityrecogn:2,nltktoken:2,nnp:2,node:2,none:2,normal:2,note:2,novel:2,number:2,nx:2,obtain:2,occur:2,one:[2,3],onli:2,open:2,option:2,optional_ne:2,order:2,organ:2,other:[2,3],otherwis:2,out:2,output:2,overlap:2,overridden:2,overriden:2,page:0,paramet:[2,3],part:2,particular:2,pass:2,path:2,per:2,percentag:2,person:2,piec:2,pipelin:[0,1],pipelinest:2,pipelinestep:2,po:2,poetri:[1,2],polar:2,posit:2,possibl:[2,3],precis:2,preconfigur:2,pred_bio_tag:2,prefix:2,preprocess:0,preprocessor:2,previou:2,produc:2,product:2,progress:2,progress_report:2,progressreport:2,project:1,pronoun:2,propag:2,properti:2,py:1,python:[1,2],quick:0,ram:2,read:2,readm:2,reason:2,recal:2,recogn:2,recognit:0,ref_bio_tag:2,refer:2,regex:2,regular:2,relabel:2,relationship:2,renard:[2,3],report:2,repr:2,requir:2,resolut:0,resolv:2,resolve_inconsist:2,resort:2,resourc:0,result:2,richardpaulhudson:2,rule:2,run:[1,2],runtim:2,s:2,same:2,satisfi:2,save:2,score:2,score_n:2,script:1,search:0,second:2,see:2,seem:2,self:2,sent_index_for_token_index:2,sent_indices_for_chapt:2,sentenc:2,sentences_polar:2,seqev:2,sequenti:2,seri:2,server:2,server_kwarg:2,server_timeout:2,set:[2,3],setattr:2,sever:[2,3],shall:2,share:2,shell:1,shift:2,shortest:2,should:2,simpl:2,simplic:2,sinc:2,singl:2,size:2,slider:2,so:2,some:2,space:2,spaci:2,spacycorefereecoreferenceresolv:2,span:2,special:2,specifi:2,split:2,stable_layout:2,stanford:[0,1],stanford_corenlp:2,stanfordcorenlppipelin:2,stanfordnlp:2,stanza:[1,2],start:[0,2],start_idx:2,statist:2,still:2,store:2,str:[2,3],string:2,strongest:2,style:2,substit:2,substition_rul:2,substitut:2,support:2,supported_lang:2,t:2,tag:2,task:2,termin:2,text:2,thei:2,them:2,therefor:2,thi:[2,3],those:2,time:2,timeout:2,timestep:2,token:0,token_index:2,tokenization_utils_bas:2,tqdm:2,transform:2,troubleshoot:2,tupl:2,two:2,txt:2,type:[2,3],under:[1,3],union:2,unit:2,us:[1,2,3],usag:2,usual:2,vala:2,valid:2,valu:2,virtual:1,wai:2,wan:2,want:1,warn:2,weight:2,weirdli:2,well:2,wether:2,when:2,where:2,which:2,whole:2,whose:2,wide:2,window:2,without:2,word:2,wordpiec:2,work:2,wp_bio_tag:2,wp_label:2,wp_labels_to_token_label:2,wp_token:2,wp_tokens_to_token:2,write_gexf:2,yet:2,you:[1,2],yourself:2},titles:["Welcome to Renard\u2019s documentation!","Installation","Pipeline","Resources"],titleterms:{"new":2,The:2,charact:2,content:0,core:2,corefer:2,corenlp:2,creat:2,document:0,entiti:2,extract:2,graph:2,hypocor:3,indic:0,instal:1,name:2,object:2,pipelin:2,preprocess:2,quick:1,recognit:2,renard:0,resolut:2,resourc:3,s:0,stanford:2,start:1,state:2,step:2,tabl:0,token:2,welcom:0}})