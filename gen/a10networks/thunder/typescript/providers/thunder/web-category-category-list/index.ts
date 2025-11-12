// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebCategoryCategoryListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Category Abortion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#abortion WebCategoryCategoryList#abortion}
  */
  readonly abortion?: number;
  /**
  * Category Adult and Pornography
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#adult_and_pornography WebCategoryCategoryList#adult_and_pornography}
  */
  readonly adultAndPornography?: number;
  /**
  * Category Alcohol and Tobacco
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#alcohol_and_tobacco WebCategoryCategoryList#alcohol_and_tobacco}
  */
  readonly alcoholAndTobacco?: number;
  /**
  * Category Auctions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#auctions WebCategoryCategoryList#auctions}
  */
  readonly auctions?: number;
  /**
  * Category Bot Nets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#bot_nets WebCategoryCategoryList#bot_nets}
  */
  readonly botNets?: number;
  /**
  * Category Business and Economy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#business_and_economy WebCategoryCategoryList#business_and_economy}
  */
  readonly businessAndEconomy?: number;
  /**
  * Category CDNs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#cdns WebCategoryCategoryList#cdns}
  */
  readonly cdns?: number;
  /**
  * Category Cheating
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#cheating WebCategoryCategoryList#cheating}
  */
  readonly cheating?: number;
  /**
  * Category Computer and Internet Info
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#computer_and_internet_info WebCategoryCategoryList#computer_and_internet_info}
  */
  readonly computerAndInternetInfo?: number;
  /**
  * Category Computer and Internet Security
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#computer_and_internet_security WebCategoryCategoryList#computer_and_internet_security}
  */
  readonly computerAndInternetSecurity?: number;
  /**
  * Category Cult and Occult
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#cult_and_occult WebCategoryCategoryList#cult_and_occult}
  */
  readonly cultAndOccult?: number;
  /**
  * Category Dating
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#dating WebCategoryCategoryList#dating}
  */
  readonly dating?: number;
  /**
  * Category Dead Sites (db Ops only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#dead_sites WebCategoryCategoryList#dead_sites}
  */
  readonly deadSites?: number;
  /**
  * Category Abused Drugs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#drugs WebCategoryCategoryList#drugs}
  */
  readonly drugs?: number;
  /**
  * Dynamically Generated Content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#dynamically_generated_content WebCategoryCategoryList#dynamically_generated_content}
  */
  readonly dynamicallyGeneratedContent?: number;
  /**
  * Category Educational Institutions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#educational_institutions WebCategoryCategoryList#educational_institutions}
  */
  readonly educationalInstitutions?: number;
  /**
  * Category Entertainment and Arts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#entertainment_and_arts WebCategoryCategoryList#entertainment_and_arts}
  */
  readonly entertainmentAndArts?: number;
  /**
  * Category Fashion and Beauty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#fashion_and_beauty WebCategoryCategoryList#fashion_and_beauty}
  */
  readonly fashionAndBeauty?: number;
  /**
  * Category Financial Services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#financial_services WebCategoryCategoryList#financial_services}
  */
  readonly financialServices?: number;
  /**
  * Category Gambling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#gambling WebCategoryCategoryList#gambling}
  */
  readonly gambling?: number;
  /**
  * Category Games
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#games WebCategoryCategoryList#games}
  */
  readonly games?: number;
  /**
  * Category Government
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#government WebCategoryCategoryList#government}
  */
  readonly government?: number;
  /**
  * Category Gross
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#gross WebCategoryCategoryList#gross}
  */
  readonly gross?: number;
  /**
  * Category Hacking
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#hacking WebCategoryCategoryList#hacking}
  */
  readonly hacking?: number;
  /**
  * Category Hate and Racism
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#hate_and_racism WebCategoryCategoryList#hate_and_racism}
  */
  readonly hateAndRacism?: number;
  /**
  * Category Health and Medicine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#health_and_medicine WebCategoryCategoryList#health_and_medicine}
  */
  readonly healthAndMedicine?: number;
  /**
  * Category Home and Garden
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#home_and_garden WebCategoryCategoryList#home_and_garden}
  */
  readonly homeAndGarden?: number;
  /**
  * Category Hunting and Fishing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#hunting_and_fishing WebCategoryCategoryList#hunting_and_fishing}
  */
  readonly huntingAndFishing?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#id WebCategoryCategoryList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Category Illegal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#illegal WebCategoryCategoryList#illegal}
  */
  readonly illegal?: number;
  /**
  * Category Illegal join Adult and Pornography
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#illegal_pornography WebCategoryCategoryList#illegal_pornography}
  */
  readonly illegalPornography?: number;
  /**
  * Category Image and Video Search
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#image_and_video_search WebCategoryCategoryList#image_and_video_search}
  */
  readonly imageAndVideoSearch?: number;
  /**
  * Category Internet Communications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#internet_communications WebCategoryCategoryList#internet_communications}
  */
  readonly internetCommunications?: number;
  /**
  * Category Internet Portals
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#internet_portals WebCategoryCategoryList#internet_portals}
  */
  readonly internetPortals?: number;
  /**
  * Category Job Search
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#job_search WebCategoryCategoryList#job_search}
  */
  readonly jobSearch?: number;
  /**
  * Category Keyloggers and Monitoring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#keyloggers_and_monitoring WebCategoryCategoryList#keyloggers_and_monitoring}
  */
  readonly keyloggersAndMonitoring?: number;
  /**
  * Category Kids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#kids WebCategoryCategoryList#kids}
  */
  readonly kids?: number;
  /**
  * Category Legal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#legal WebCategoryCategoryList#legal}
  */
  readonly legal?: number;
  /**
  * Category Local Information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#local_information WebCategoryCategoryList#local_information}
  */
  readonly localInformation?: number;
  /**
  * Category Malware Sites
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#malware_sites WebCategoryCategoryList#malware_sites}
  */
  readonly malwareSites?: number;
  /**
  * Category Marijuana
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#marijuana WebCategoryCategoryList#marijuana}
  */
  readonly marijuana?: number;
  /**
  * Category Military
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#military WebCategoryCategoryList#military}
  */
  readonly military?: number;
  /**
  * Category Motor Vehicles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#motor_vehicles WebCategoryCategoryList#motor_vehicles}
  */
  readonly motorVehicles?: number;
  /**
  * Category Music
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#music WebCategoryCategoryList#music}
  */
  readonly music?: number;
  /**
  * Web Category List name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#name WebCategoryCategoryList#name}
  */
  readonly name: string;
  /**
  * Category News and Media
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#news_and_media WebCategoryCategoryList#news_and_media}
  */
  readonly newsAndMedia?: number;
  /**
  * Category Nudity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#nudity WebCategoryCategoryList#nudity}
  */
  readonly nudity?: number;
  /**
  * Category Nudity join Entertainment and Arts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#nudity_artistic WebCategoryCategoryList#nudity_artistic}
  */
  readonly nudityArtistic?: number;
  /**
  * Category Online Greeting cards
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#online_greeting_cards WebCategoryCategoryList#online_greeting_cards}
  */
  readonly onlineGreetingCards?: number;
  /**
  * Category Parked Domains
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#parked_domains WebCategoryCategoryList#parked_domains}
  */
  readonly parkedDomains?: number;
  /**
  * Category Pay to Surf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#pay_to_surf WebCategoryCategoryList#pay_to_surf}
  */
  readonly payToSurf?: number;
  /**
  * Category Peer to Peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#peer_to_peer WebCategoryCategoryList#peer_to_peer}
  */
  readonly peerToPeer?: number;
  /**
  * Category Personal sites and Blogs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#personal_sites_and_blogs WebCategoryCategoryList#personal_sites_and_blogs}
  */
  readonly personalSitesAndBlogs?: number;
  /**
  * Category Personal Storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#personal_storage WebCategoryCategoryList#personal_storage}
  */
  readonly personalStorage?: number;
  /**
  * Category Philosophy and Political Advocacy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#philosophy_and_politics WebCategoryCategoryList#philosophy_and_politics}
  */
  readonly philosophyAndPolitics?: number;
  /**
  * Category Phishing and Other Frauds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#phishing_and_other_fraud WebCategoryCategoryList#phishing_and_other_fraud}
  */
  readonly phishingAndOtherFraud?: number;
  /**
  * Category Proxy Avoid and Anonymizers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#proxy_avoid_and_anonymizers WebCategoryCategoryList#proxy_avoid_and_anonymizers}
  */
  readonly proxyAvoidAndAnonymizers?: number;
  /**
  * Category Questionable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#questionable WebCategoryCategoryList#questionable}
  */
  readonly questionable?: number;
  /**
  * Category Real Estate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#real_estate WebCategoryCategoryList#real_estate}
  */
  readonly realEstate?: number;
  /**
  * Category Recreation and Hobbies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#recreation_and_hobbies WebCategoryCategoryList#recreation_and_hobbies}
  */
  readonly recreationAndHobbies?: number;
  /**
  * Category Reference and Research
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#reference_and_research WebCategoryCategoryList#reference_and_research}
  */
  readonly referenceAndResearch?: number;
  /**
  * Category Religion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#religion WebCategoryCategoryList#religion}
  */
  readonly religion?: number;
  /**
  * Category Search Engines
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#search_engines WebCategoryCategoryList#search_engines}
  */
  readonly searchEngines?: number;
  /**
  * Category Sex Education
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#sex_education WebCategoryCategoryList#sex_education}
  */
  readonly sexEducation?: number;
  /**
  * Category Shareware and Freeware
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#shareware_and_freeware WebCategoryCategoryList#shareware_and_freeware}
  */
  readonly sharewareAndFreeware?: number;
  /**
  * Category Shopping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#shopping WebCategoryCategoryList#shopping}
  */
  readonly shopping?: number;
  /**
  * Category Social Network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#social_network WebCategoryCategoryList#social_network}
  */
  readonly socialNetwork?: number;
  /**
  * Category Society
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#society WebCategoryCategoryList#society}
  */
  readonly society?: number;
  /**
  * Category SPAM URLs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#spam_urls WebCategoryCategoryList#spam_urls}
  */
  readonly spamUrls?: number;
  /**
  * Category Sports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#sports WebCategoryCategoryList#sports}
  */
  readonly sports?: number;
  /**
  * Category Spyware and Adware
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#spyware_and_adware WebCategoryCategoryList#spyware_and_adware}
  */
  readonly spywareAndAdware?: number;
  /**
  * Category Stock Advice and Tools
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#stock_advice_and_tools WebCategoryCategoryList#stock_advice_and_tools}
  */
  readonly stockAdviceAndTools?: number;
  /**
  * Category Streaming Media
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#streaming_media WebCategoryCategoryList#streaming_media}
  */
  readonly streamingMedia?: number;
  /**
  * Category Swimsuits and Intimate Apparel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#swimsuits_and_intimate_apparel WebCategoryCategoryList#swimsuits_and_intimate_apparel}
  */
  readonly swimsuitsAndIntimateApparel?: number;
  /**
  * Category Training and Tools
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#training_and_tools WebCategoryCategoryList#training_and_tools}
  */
  readonly trainingAndTools?: number;
  /**
  * Category Translation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#translation WebCategoryCategoryList#translation}
  */
  readonly translation?: number;
  /**
  * Category Travel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#travel WebCategoryCategoryList#travel}
  */
  readonly travel?: number;
  /**
  * Uncategorized URLs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#uncategorized WebCategoryCategoryList#uncategorized}
  */
  readonly uncategorized?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#user_tag WebCategoryCategoryList#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#uuid WebCategoryCategoryList#uuid}
  */
  readonly uuid?: string;
  /**
  * Category Violence
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#violence WebCategoryCategoryList#violence}
  */
  readonly violence?: number;
  /**
  * Category Weapons
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#weapons WebCategoryCategoryList#weapons}
  */
  readonly weapons?: number;
  /**
  * Category Web Advertisements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#web_advertisements WebCategoryCategoryList#web_advertisements}
  */
  readonly webAdvertisements?: number;
  /**
  * Category Web based email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#web_based_email WebCategoryCategoryList#web_based_email}
  */
  readonly webBasedEmail?: number;
  /**
  * Category Web Hosting Sites
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#web_hosting_sites WebCategoryCategoryList#web_hosting_sites}
  */
  readonly webHostingSites?: number;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#sampling_enable WebCategoryCategoryList#sampling_enable}
  */
  readonly samplingEnable?: WebCategoryCategoryListSamplingEnable[] | cdktf.IResolvable;
}
export interface WebCategoryCategoryListSamplingEnable {
  /**
  * 'all': all; 'uncategorized': uncategorized category; 'real-estate': real estate category; 'computer-and-internet-security': computer and internet security category; 'financial-services': financial services category; 'business-and-economy': business and economy category; 'computer-and-internet-info': computer and internet info category; 'auctions': auctions category; 'shopping': shopping category; 'cult-and-occult': cult and occult category; 'travel': travel category; 'drugs': drugs category; 'adult-and-pornography': adult and pornography category; 'home-and-garden': home and garden category; 'military': military category; 'social-network': social network category; 'dead-sites': dead sites category; 'stock-advice-and-tools': stock advice and tools category; 'training-and-tools': training and tools category; 'dating': dating category; 'sex-education': sex education category; 'religion': religion category; 'entertainment-and-arts': entertainment and arts category; 'personal-sites-and-blogs': personal sites and blogs category; 'legal': legal category; 'local-information': local information category; 'streaming-media': streaming media category; 'job-search': job search category; 'gambling': gambling category; 'translation': translation category; 'reference-and-research': reference and research category; 'shareware-and-freeware': shareware and freeware category; 'peer-to-peer': peer to peer category; 'marijuana': marijuana category; 'hacking': hacking category; 'games': games category; 'philosophy-and-politics': philosophy and politics category; 'weapons': weapons category; 'pay-to-surf': pay to surf category; 'hunting-and-fishing': hunting and fishing category; 'society': society category; 'educational-institutions': educational institutions category; 'online-greeting-cards': online greeting cards category; 'sports': sports category; 'swimsuits-and-intimate-apparel': swimsuits and intimate apparel category; 'questionable': questionable category; 'kids': kids category; 'hate-and-racism': hate and racism category; 'personal-storage': personal storage category; 'violence': violence category; 'keyloggers-and-monitoring': keyloggers and monitoring category; 'search-engines': search engines category; 'internet-portals': internet portals category; 'web-advertisements': web advertisements category; 'cheating': cheating category; 'gross': gross category; 'web-based-email': web based email category; 'malware-sites': malware sites category; 'phishing-and-other-fraud': phishing and other fraud category; 'proxy-avoid-and-anonymizers': proxy avoid and anonymizers category; 'spyware-and-adware': spyware and adware category; 'music': music category; 'government': government category; 'nudity': nudity category; 'news-and-media': news and media category; 'illegal': illegal category; 'CDNs': content delivery networks category; 'internet-communications': internet communications category; 'bot-nets': bot nets category; 'abortion': abortion category; 'health-and-medicine': health and medicine category; 'confirmed-SPAM-sources': confirmed SPAM sources category; 'SPAM-URLs': SPAM URLs category; 'unconfirmed-SPAM-sources': unconfirmed SPAM sources category; 'open-HTTP-proxies': open HTTP proxies category; 'dynamically-generated-content': dynamically generated content category; 'parked-domains': parked domains category; 'alcohol-and-tobacco': alcohol and tobacco category; 'private-IP-addresses': private IP addresses category; 'image-and-video-search': image and video search category; 'fashion-and-beauty': fashion and beauty category; 'recreation-and-hobbies': recreation and hobbies category; 'motor-vehicles': motor vehicles category; 'web-hosting-sites': web hosting sites category; 'food-and-dining': food and dining category; 'nudity-artistic': nudity join entertainment and arts; 'illegal-pornography': illegal join adult and pornography;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#counters1 WebCategoryCategoryList#counters1}
  */
  readonly counters1?: string;
}

export function webCategoryCategoryListSamplingEnableToTerraform(struct?: WebCategoryCategoryListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function webCategoryCategoryListSamplingEnableToHclTerraform(struct?: WebCategoryCategoryListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebCategoryCategoryListSamplingEnableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WebCategoryCategoryListSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebCategoryCategoryListSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class WebCategoryCategoryListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : WebCategoryCategoryListSamplingEnable[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WebCategoryCategoryListSamplingEnableOutputReference {
    return new WebCategoryCategoryListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list thunder_web_category_category_list}
*/
export class WebCategoryCategoryList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_web_category_category_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebCategoryCategoryList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebCategoryCategoryList to import
  * @param importFromId The id of the existing WebCategoryCategoryList that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebCategoryCategoryList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_web_category_category_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category_category_list thunder_web_category_category_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebCategoryCategoryListConfig
  */
  public constructor(scope: Construct, id: string, config: WebCategoryCategoryListConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_web_category_category_list',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._abortion = config.abortion;
    this._adultAndPornography = config.adultAndPornography;
    this._alcoholAndTobacco = config.alcoholAndTobacco;
    this._auctions = config.auctions;
    this._botNets = config.botNets;
    this._businessAndEconomy = config.businessAndEconomy;
    this._cdns = config.cdns;
    this._cheating = config.cheating;
    this._computerAndInternetInfo = config.computerAndInternetInfo;
    this._computerAndInternetSecurity = config.computerAndInternetSecurity;
    this._cultAndOccult = config.cultAndOccult;
    this._dating = config.dating;
    this._deadSites = config.deadSites;
    this._drugs = config.drugs;
    this._dynamicallyGeneratedContent = config.dynamicallyGeneratedContent;
    this._educationalInstitutions = config.educationalInstitutions;
    this._entertainmentAndArts = config.entertainmentAndArts;
    this._fashionAndBeauty = config.fashionAndBeauty;
    this._financialServices = config.financialServices;
    this._gambling = config.gambling;
    this._games = config.games;
    this._government = config.government;
    this._gross = config.gross;
    this._hacking = config.hacking;
    this._hateAndRacism = config.hateAndRacism;
    this._healthAndMedicine = config.healthAndMedicine;
    this._homeAndGarden = config.homeAndGarden;
    this._huntingAndFishing = config.huntingAndFishing;
    this._id = config.id;
    this._illegal = config.illegal;
    this._illegalPornography = config.illegalPornography;
    this._imageAndVideoSearch = config.imageAndVideoSearch;
    this._internetCommunications = config.internetCommunications;
    this._internetPortals = config.internetPortals;
    this._jobSearch = config.jobSearch;
    this._keyloggersAndMonitoring = config.keyloggersAndMonitoring;
    this._kids = config.kids;
    this._legal = config.legal;
    this._localInformation = config.localInformation;
    this._malwareSites = config.malwareSites;
    this._marijuana = config.marijuana;
    this._military = config.military;
    this._motorVehicles = config.motorVehicles;
    this._music = config.music;
    this._name = config.name;
    this._newsAndMedia = config.newsAndMedia;
    this._nudity = config.nudity;
    this._nudityArtistic = config.nudityArtistic;
    this._onlineGreetingCards = config.onlineGreetingCards;
    this._parkedDomains = config.parkedDomains;
    this._payToSurf = config.payToSurf;
    this._peerToPeer = config.peerToPeer;
    this._personalSitesAndBlogs = config.personalSitesAndBlogs;
    this._personalStorage = config.personalStorage;
    this._philosophyAndPolitics = config.philosophyAndPolitics;
    this._phishingAndOtherFraud = config.phishingAndOtherFraud;
    this._proxyAvoidAndAnonymizers = config.proxyAvoidAndAnonymizers;
    this._questionable = config.questionable;
    this._realEstate = config.realEstate;
    this._recreationAndHobbies = config.recreationAndHobbies;
    this._referenceAndResearch = config.referenceAndResearch;
    this._religion = config.religion;
    this._searchEngines = config.searchEngines;
    this._sexEducation = config.sexEducation;
    this._sharewareAndFreeware = config.sharewareAndFreeware;
    this._shopping = config.shopping;
    this._socialNetwork = config.socialNetwork;
    this._society = config.society;
    this._spamUrls = config.spamUrls;
    this._sports = config.sports;
    this._spywareAndAdware = config.spywareAndAdware;
    this._stockAdviceAndTools = config.stockAdviceAndTools;
    this._streamingMedia = config.streamingMedia;
    this._swimsuitsAndIntimateApparel = config.swimsuitsAndIntimateApparel;
    this._trainingAndTools = config.trainingAndTools;
    this._translation = config.translation;
    this._travel = config.travel;
    this._uncategorized = config.uncategorized;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._violence = config.violence;
    this._weapons = config.weapons;
    this._webAdvertisements = config.webAdvertisements;
    this._webBasedEmail = config.webBasedEmail;
    this._webHostingSites = config.webHostingSites;
    this._samplingEnable.internalValue = config.samplingEnable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // abortion - computed: false, optional: true, required: false
  private _abortion?: number; 
  public get abortion() {
    return this.getNumberAttribute('abortion');
  }
  public set abortion(value: number) {
    this._abortion = value;
  }
  public resetAbortion() {
    this._abortion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abortionInput() {
    return this._abortion;
  }

  // adult_and_pornography - computed: false, optional: true, required: false
  private _adultAndPornography?: number; 
  public get adultAndPornography() {
    return this.getNumberAttribute('adult_and_pornography');
  }
  public set adultAndPornography(value: number) {
    this._adultAndPornography = value;
  }
  public resetAdultAndPornography() {
    this._adultAndPornography = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adultAndPornographyInput() {
    return this._adultAndPornography;
  }

  // alcohol_and_tobacco - computed: false, optional: true, required: false
  private _alcoholAndTobacco?: number; 
  public get alcoholAndTobacco() {
    return this.getNumberAttribute('alcohol_and_tobacco');
  }
  public set alcoholAndTobacco(value: number) {
    this._alcoholAndTobacco = value;
  }
  public resetAlcoholAndTobacco() {
    this._alcoholAndTobacco = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alcoholAndTobaccoInput() {
    return this._alcoholAndTobacco;
  }

  // auctions - computed: false, optional: true, required: false
  private _auctions?: number; 
  public get auctions() {
    return this.getNumberAttribute('auctions');
  }
  public set auctions(value: number) {
    this._auctions = value;
  }
  public resetAuctions() {
    this._auctions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auctionsInput() {
    return this._auctions;
  }

  // bot_nets - computed: false, optional: true, required: false
  private _botNets?: number; 
  public get botNets() {
    return this.getNumberAttribute('bot_nets');
  }
  public set botNets(value: number) {
    this._botNets = value;
  }
  public resetBotNets() {
    this._botNets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botNetsInput() {
    return this._botNets;
  }

  // business_and_economy - computed: false, optional: true, required: false
  private _businessAndEconomy?: number; 
  public get businessAndEconomy() {
    return this.getNumberAttribute('business_and_economy');
  }
  public set businessAndEconomy(value: number) {
    this._businessAndEconomy = value;
  }
  public resetBusinessAndEconomy() {
    this._businessAndEconomy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessAndEconomyInput() {
    return this._businessAndEconomy;
  }

  // cdns - computed: false, optional: true, required: false
  private _cdns?: number; 
  public get cdns() {
    return this.getNumberAttribute('cdns');
  }
  public set cdns(value: number) {
    this._cdns = value;
  }
  public resetCdns() {
    this._cdns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdnsInput() {
    return this._cdns;
  }

  // cheating - computed: false, optional: true, required: false
  private _cheating?: number; 
  public get cheating() {
    return this.getNumberAttribute('cheating');
  }
  public set cheating(value: number) {
    this._cheating = value;
  }
  public resetCheating() {
    this._cheating = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cheatingInput() {
    return this._cheating;
  }

  // computer_and_internet_info - computed: false, optional: true, required: false
  private _computerAndInternetInfo?: number; 
  public get computerAndInternetInfo() {
    return this.getNumberAttribute('computer_and_internet_info');
  }
  public set computerAndInternetInfo(value: number) {
    this._computerAndInternetInfo = value;
  }
  public resetComputerAndInternetInfo() {
    this._computerAndInternetInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computerAndInternetInfoInput() {
    return this._computerAndInternetInfo;
  }

  // computer_and_internet_security - computed: false, optional: true, required: false
  private _computerAndInternetSecurity?: number; 
  public get computerAndInternetSecurity() {
    return this.getNumberAttribute('computer_and_internet_security');
  }
  public set computerAndInternetSecurity(value: number) {
    this._computerAndInternetSecurity = value;
  }
  public resetComputerAndInternetSecurity() {
    this._computerAndInternetSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computerAndInternetSecurityInput() {
    return this._computerAndInternetSecurity;
  }

  // cult_and_occult - computed: false, optional: true, required: false
  private _cultAndOccult?: number; 
  public get cultAndOccult() {
    return this.getNumberAttribute('cult_and_occult');
  }
  public set cultAndOccult(value: number) {
    this._cultAndOccult = value;
  }
  public resetCultAndOccult() {
    this._cultAndOccult = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cultAndOccultInput() {
    return this._cultAndOccult;
  }

  // dating - computed: false, optional: true, required: false
  private _dating?: number; 
  public get dating() {
    return this.getNumberAttribute('dating');
  }
  public set dating(value: number) {
    this._dating = value;
  }
  public resetDating() {
    this._dating = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datingInput() {
    return this._dating;
  }

  // dead_sites - computed: false, optional: true, required: false
  private _deadSites?: number; 
  public get deadSites() {
    return this.getNumberAttribute('dead_sites');
  }
  public set deadSites(value: number) {
    this._deadSites = value;
  }
  public resetDeadSites() {
    this._deadSites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadSitesInput() {
    return this._deadSites;
  }

  // drugs - computed: false, optional: true, required: false
  private _drugs?: number; 
  public get drugs() {
    return this.getNumberAttribute('drugs');
  }
  public set drugs(value: number) {
    this._drugs = value;
  }
  public resetDrugs() {
    this._drugs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drugsInput() {
    return this._drugs;
  }

  // dynamically_generated_content - computed: false, optional: true, required: false
  private _dynamicallyGeneratedContent?: number; 
  public get dynamicallyGeneratedContent() {
    return this.getNumberAttribute('dynamically_generated_content');
  }
  public set dynamicallyGeneratedContent(value: number) {
    this._dynamicallyGeneratedContent = value;
  }
  public resetDynamicallyGeneratedContent() {
    this._dynamicallyGeneratedContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicallyGeneratedContentInput() {
    return this._dynamicallyGeneratedContent;
  }

  // educational_institutions - computed: false, optional: true, required: false
  private _educationalInstitutions?: number; 
  public get educationalInstitutions() {
    return this.getNumberAttribute('educational_institutions');
  }
  public set educationalInstitutions(value: number) {
    this._educationalInstitutions = value;
  }
  public resetEducationalInstitutions() {
    this._educationalInstitutions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get educationalInstitutionsInput() {
    return this._educationalInstitutions;
  }

  // entertainment_and_arts - computed: false, optional: true, required: false
  private _entertainmentAndArts?: number; 
  public get entertainmentAndArts() {
    return this.getNumberAttribute('entertainment_and_arts');
  }
  public set entertainmentAndArts(value: number) {
    this._entertainmentAndArts = value;
  }
  public resetEntertainmentAndArts() {
    this._entertainmentAndArts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entertainmentAndArtsInput() {
    return this._entertainmentAndArts;
  }

  // fashion_and_beauty - computed: false, optional: true, required: false
  private _fashionAndBeauty?: number; 
  public get fashionAndBeauty() {
    return this.getNumberAttribute('fashion_and_beauty');
  }
  public set fashionAndBeauty(value: number) {
    this._fashionAndBeauty = value;
  }
  public resetFashionAndBeauty() {
    this._fashionAndBeauty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fashionAndBeautyInput() {
    return this._fashionAndBeauty;
  }

  // financial_services - computed: false, optional: true, required: false
  private _financialServices?: number; 
  public get financialServices() {
    return this.getNumberAttribute('financial_services');
  }
  public set financialServices(value: number) {
    this._financialServices = value;
  }
  public resetFinancialServices() {
    this._financialServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get financialServicesInput() {
    return this._financialServices;
  }

  // gambling - computed: false, optional: true, required: false
  private _gambling?: number; 
  public get gambling() {
    return this.getNumberAttribute('gambling');
  }
  public set gambling(value: number) {
    this._gambling = value;
  }
  public resetGambling() {
    this._gambling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gamblingInput() {
    return this._gambling;
  }

  // games - computed: false, optional: true, required: false
  private _games?: number; 
  public get games() {
    return this.getNumberAttribute('games');
  }
  public set games(value: number) {
    this._games = value;
  }
  public resetGames() {
    this._games = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gamesInput() {
    return this._games;
  }

  // government - computed: false, optional: true, required: false
  private _government?: number; 
  public get government() {
    return this.getNumberAttribute('government');
  }
  public set government(value: number) {
    this._government = value;
  }
  public resetGovernment() {
    this._government = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get governmentInput() {
    return this._government;
  }

  // gross - computed: false, optional: true, required: false
  private _gross?: number; 
  public get gross() {
    return this.getNumberAttribute('gross');
  }
  public set gross(value: number) {
    this._gross = value;
  }
  public resetGross() {
    this._gross = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grossInput() {
    return this._gross;
  }

  // hacking - computed: false, optional: true, required: false
  private _hacking?: number; 
  public get hacking() {
    return this.getNumberAttribute('hacking');
  }
  public set hacking(value: number) {
    this._hacking = value;
  }
  public resetHacking() {
    this._hacking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hackingInput() {
    return this._hacking;
  }

  // hate_and_racism - computed: false, optional: true, required: false
  private _hateAndRacism?: number; 
  public get hateAndRacism() {
    return this.getNumberAttribute('hate_and_racism');
  }
  public set hateAndRacism(value: number) {
    this._hateAndRacism = value;
  }
  public resetHateAndRacism() {
    this._hateAndRacism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hateAndRacismInput() {
    return this._hateAndRacism;
  }

  // health_and_medicine - computed: false, optional: true, required: false
  private _healthAndMedicine?: number; 
  public get healthAndMedicine() {
    return this.getNumberAttribute('health_and_medicine');
  }
  public set healthAndMedicine(value: number) {
    this._healthAndMedicine = value;
  }
  public resetHealthAndMedicine() {
    this._healthAndMedicine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthAndMedicineInput() {
    return this._healthAndMedicine;
  }

  // home_and_garden - computed: false, optional: true, required: false
  private _homeAndGarden?: number; 
  public get homeAndGarden() {
    return this.getNumberAttribute('home_and_garden');
  }
  public set homeAndGarden(value: number) {
    this._homeAndGarden = value;
  }
  public resetHomeAndGarden() {
    this._homeAndGarden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homeAndGardenInput() {
    return this._homeAndGarden;
  }

  // hunting_and_fishing - computed: false, optional: true, required: false
  private _huntingAndFishing?: number; 
  public get huntingAndFishing() {
    return this.getNumberAttribute('hunting_and_fishing');
  }
  public set huntingAndFishing(value: number) {
    this._huntingAndFishing = value;
  }
  public resetHuntingAndFishing() {
    this._huntingAndFishing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get huntingAndFishingInput() {
    return this._huntingAndFishing;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // illegal - computed: false, optional: true, required: false
  private _illegal?: number; 
  public get illegal() {
    return this.getNumberAttribute('illegal');
  }
  public set illegal(value: number) {
    this._illegal = value;
  }
  public resetIllegal() {
    this._illegal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get illegalInput() {
    return this._illegal;
  }

  // illegal_pornography - computed: false, optional: true, required: false
  private _illegalPornography?: number; 
  public get illegalPornography() {
    return this.getNumberAttribute('illegal_pornography');
  }
  public set illegalPornography(value: number) {
    this._illegalPornography = value;
  }
  public resetIllegalPornography() {
    this._illegalPornography = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get illegalPornographyInput() {
    return this._illegalPornography;
  }

  // image_and_video_search - computed: false, optional: true, required: false
  private _imageAndVideoSearch?: number; 
  public get imageAndVideoSearch() {
    return this.getNumberAttribute('image_and_video_search');
  }
  public set imageAndVideoSearch(value: number) {
    this._imageAndVideoSearch = value;
  }
  public resetImageAndVideoSearch() {
    this._imageAndVideoSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageAndVideoSearchInput() {
    return this._imageAndVideoSearch;
  }

  // internet_communications - computed: false, optional: true, required: false
  private _internetCommunications?: number; 
  public get internetCommunications() {
    return this.getNumberAttribute('internet_communications');
  }
  public set internetCommunications(value: number) {
    this._internetCommunications = value;
  }
  public resetInternetCommunications() {
    this._internetCommunications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetCommunicationsInput() {
    return this._internetCommunications;
  }

  // internet_portals - computed: false, optional: true, required: false
  private _internetPortals?: number; 
  public get internetPortals() {
    return this.getNumberAttribute('internet_portals');
  }
  public set internetPortals(value: number) {
    this._internetPortals = value;
  }
  public resetInternetPortals() {
    this._internetPortals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetPortalsInput() {
    return this._internetPortals;
  }

  // job_search - computed: false, optional: true, required: false
  private _jobSearch?: number; 
  public get jobSearch() {
    return this.getNumberAttribute('job_search');
  }
  public set jobSearch(value: number) {
    this._jobSearch = value;
  }
  public resetJobSearch() {
    this._jobSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobSearchInput() {
    return this._jobSearch;
  }

  // keyloggers_and_monitoring - computed: false, optional: true, required: false
  private _keyloggersAndMonitoring?: number; 
  public get keyloggersAndMonitoring() {
    return this.getNumberAttribute('keyloggers_and_monitoring');
  }
  public set keyloggersAndMonitoring(value: number) {
    this._keyloggersAndMonitoring = value;
  }
  public resetKeyloggersAndMonitoring() {
    this._keyloggersAndMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyloggersAndMonitoringInput() {
    return this._keyloggersAndMonitoring;
  }

  // kids - computed: false, optional: true, required: false
  private _kids?: number; 
  public get kids() {
    return this.getNumberAttribute('kids');
  }
  public set kids(value: number) {
    this._kids = value;
  }
  public resetKids() {
    this._kids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kidsInput() {
    return this._kids;
  }

  // legal - computed: false, optional: true, required: false
  private _legal?: number; 
  public get legal() {
    return this.getNumberAttribute('legal');
  }
  public set legal(value: number) {
    this._legal = value;
  }
  public resetLegal() {
    this._legal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legalInput() {
    return this._legal;
  }

  // local_information - computed: false, optional: true, required: false
  private _localInformation?: number; 
  public get localInformation() {
    return this.getNumberAttribute('local_information');
  }
  public set localInformation(value: number) {
    this._localInformation = value;
  }
  public resetLocalInformation() {
    this._localInformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInformationInput() {
    return this._localInformation;
  }

  // malware_sites - computed: false, optional: true, required: false
  private _malwareSites?: number; 
  public get malwareSites() {
    return this.getNumberAttribute('malware_sites');
  }
  public set malwareSites(value: number) {
    this._malwareSites = value;
  }
  public resetMalwareSites() {
    this._malwareSites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malwareSitesInput() {
    return this._malwareSites;
  }

  // marijuana - computed: false, optional: true, required: false
  private _marijuana?: number; 
  public get marijuana() {
    return this.getNumberAttribute('marijuana');
  }
  public set marijuana(value: number) {
    this._marijuana = value;
  }
  public resetMarijuana() {
    this._marijuana = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marijuanaInput() {
    return this._marijuana;
  }

  // military - computed: false, optional: true, required: false
  private _military?: number; 
  public get military() {
    return this.getNumberAttribute('military');
  }
  public set military(value: number) {
    this._military = value;
  }
  public resetMilitary() {
    this._military = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get militaryInput() {
    return this._military;
  }

  // motor_vehicles - computed: false, optional: true, required: false
  private _motorVehicles?: number; 
  public get motorVehicles() {
    return this.getNumberAttribute('motor_vehicles');
  }
  public set motorVehicles(value: number) {
    this._motorVehicles = value;
  }
  public resetMotorVehicles() {
    this._motorVehicles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get motorVehiclesInput() {
    return this._motorVehicles;
  }

  // music - computed: false, optional: true, required: false
  private _music?: number; 
  public get music() {
    return this.getNumberAttribute('music');
  }
  public set music(value: number) {
    this._music = value;
  }
  public resetMusic() {
    this._music = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get musicInput() {
    return this._music;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // news_and_media - computed: false, optional: true, required: false
  private _newsAndMedia?: number; 
  public get newsAndMedia() {
    return this.getNumberAttribute('news_and_media');
  }
  public set newsAndMedia(value: number) {
    this._newsAndMedia = value;
  }
  public resetNewsAndMedia() {
    this._newsAndMedia = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newsAndMediaInput() {
    return this._newsAndMedia;
  }

  // nudity - computed: false, optional: true, required: false
  private _nudity?: number; 
  public get nudity() {
    return this.getNumberAttribute('nudity');
  }
  public set nudity(value: number) {
    this._nudity = value;
  }
  public resetNudity() {
    this._nudity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nudityInput() {
    return this._nudity;
  }

  // nudity_artistic - computed: false, optional: true, required: false
  private _nudityArtistic?: number; 
  public get nudityArtistic() {
    return this.getNumberAttribute('nudity_artistic');
  }
  public set nudityArtistic(value: number) {
    this._nudityArtistic = value;
  }
  public resetNudityArtistic() {
    this._nudityArtistic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nudityArtisticInput() {
    return this._nudityArtistic;
  }

  // online_greeting_cards - computed: false, optional: true, required: false
  private _onlineGreetingCards?: number; 
  public get onlineGreetingCards() {
    return this.getNumberAttribute('online_greeting_cards');
  }
  public set onlineGreetingCards(value: number) {
    this._onlineGreetingCards = value;
  }
  public resetOnlineGreetingCards() {
    this._onlineGreetingCards = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlineGreetingCardsInput() {
    return this._onlineGreetingCards;
  }

  // parked_domains - computed: false, optional: true, required: false
  private _parkedDomains?: number; 
  public get parkedDomains() {
    return this.getNumberAttribute('parked_domains');
  }
  public set parkedDomains(value: number) {
    this._parkedDomains = value;
  }
  public resetParkedDomains() {
    this._parkedDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parkedDomainsInput() {
    return this._parkedDomains;
  }

  // pay_to_surf - computed: false, optional: true, required: false
  private _payToSurf?: number; 
  public get payToSurf() {
    return this.getNumberAttribute('pay_to_surf');
  }
  public set payToSurf(value: number) {
    this._payToSurf = value;
  }
  public resetPayToSurf() {
    this._payToSurf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payToSurfInput() {
    return this._payToSurf;
  }

  // peer_to_peer - computed: false, optional: true, required: false
  private _peerToPeer?: number; 
  public get peerToPeer() {
    return this.getNumberAttribute('peer_to_peer');
  }
  public set peerToPeer(value: number) {
    this._peerToPeer = value;
  }
  public resetPeerToPeer() {
    this._peerToPeer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerToPeerInput() {
    return this._peerToPeer;
  }

  // personal_sites_and_blogs - computed: false, optional: true, required: false
  private _personalSitesAndBlogs?: number; 
  public get personalSitesAndBlogs() {
    return this.getNumberAttribute('personal_sites_and_blogs');
  }
  public set personalSitesAndBlogs(value: number) {
    this._personalSitesAndBlogs = value;
  }
  public resetPersonalSitesAndBlogs() {
    this._personalSitesAndBlogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get personalSitesAndBlogsInput() {
    return this._personalSitesAndBlogs;
  }

  // personal_storage - computed: false, optional: true, required: false
  private _personalStorage?: number; 
  public get personalStorage() {
    return this.getNumberAttribute('personal_storage');
  }
  public set personalStorage(value: number) {
    this._personalStorage = value;
  }
  public resetPersonalStorage() {
    this._personalStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get personalStorageInput() {
    return this._personalStorage;
  }

  // philosophy_and_politics - computed: false, optional: true, required: false
  private _philosophyAndPolitics?: number; 
  public get philosophyAndPolitics() {
    return this.getNumberAttribute('philosophy_and_politics');
  }
  public set philosophyAndPolitics(value: number) {
    this._philosophyAndPolitics = value;
  }
  public resetPhilosophyAndPolitics() {
    this._philosophyAndPolitics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get philosophyAndPoliticsInput() {
    return this._philosophyAndPolitics;
  }

  // phishing_and_other_fraud - computed: false, optional: true, required: false
  private _phishingAndOtherFraud?: number; 
  public get phishingAndOtherFraud() {
    return this.getNumberAttribute('phishing_and_other_fraud');
  }
  public set phishingAndOtherFraud(value: number) {
    this._phishingAndOtherFraud = value;
  }
  public resetPhishingAndOtherFraud() {
    this._phishingAndOtherFraud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phishingAndOtherFraudInput() {
    return this._phishingAndOtherFraud;
  }

  // proxy_avoid_and_anonymizers - computed: false, optional: true, required: false
  private _proxyAvoidAndAnonymizers?: number; 
  public get proxyAvoidAndAnonymizers() {
    return this.getNumberAttribute('proxy_avoid_and_anonymizers');
  }
  public set proxyAvoidAndAnonymizers(value: number) {
    this._proxyAvoidAndAnonymizers = value;
  }
  public resetProxyAvoidAndAnonymizers() {
    this._proxyAvoidAndAnonymizers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyAvoidAndAnonymizersInput() {
    return this._proxyAvoidAndAnonymizers;
  }

  // questionable - computed: false, optional: true, required: false
  private _questionable?: number; 
  public get questionable() {
    return this.getNumberAttribute('questionable');
  }
  public set questionable(value: number) {
    this._questionable = value;
  }
  public resetQuestionable() {
    this._questionable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get questionableInput() {
    return this._questionable;
  }

  // real_estate - computed: false, optional: true, required: false
  private _realEstate?: number; 
  public get realEstate() {
    return this.getNumberAttribute('real_estate');
  }
  public set realEstate(value: number) {
    this._realEstate = value;
  }
  public resetRealEstate() {
    this._realEstate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realEstateInput() {
    return this._realEstate;
  }

  // recreation_and_hobbies - computed: false, optional: true, required: false
  private _recreationAndHobbies?: number; 
  public get recreationAndHobbies() {
    return this.getNumberAttribute('recreation_and_hobbies');
  }
  public set recreationAndHobbies(value: number) {
    this._recreationAndHobbies = value;
  }
  public resetRecreationAndHobbies() {
    this._recreationAndHobbies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recreationAndHobbiesInput() {
    return this._recreationAndHobbies;
  }

  // reference_and_research - computed: false, optional: true, required: false
  private _referenceAndResearch?: number; 
  public get referenceAndResearch() {
    return this.getNumberAttribute('reference_and_research');
  }
  public set referenceAndResearch(value: number) {
    this._referenceAndResearch = value;
  }
  public resetReferenceAndResearch() {
    this._referenceAndResearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceAndResearchInput() {
    return this._referenceAndResearch;
  }

  // religion - computed: false, optional: true, required: false
  private _religion?: number; 
  public get religion() {
    return this.getNumberAttribute('religion');
  }
  public set religion(value: number) {
    this._religion = value;
  }
  public resetReligion() {
    this._religion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get religionInput() {
    return this._religion;
  }

  // search_engines - computed: false, optional: true, required: false
  private _searchEngines?: number; 
  public get searchEngines() {
    return this.getNumberAttribute('search_engines');
  }
  public set searchEngines(value: number) {
    this._searchEngines = value;
  }
  public resetSearchEngines() {
    this._searchEngines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchEnginesInput() {
    return this._searchEngines;
  }

  // sex_education - computed: false, optional: true, required: false
  private _sexEducation?: number; 
  public get sexEducation() {
    return this.getNumberAttribute('sex_education');
  }
  public set sexEducation(value: number) {
    this._sexEducation = value;
  }
  public resetSexEducation() {
    this._sexEducation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sexEducationInput() {
    return this._sexEducation;
  }

  // shareware_and_freeware - computed: false, optional: true, required: false
  private _sharewareAndFreeware?: number; 
  public get sharewareAndFreeware() {
    return this.getNumberAttribute('shareware_and_freeware');
  }
  public set sharewareAndFreeware(value: number) {
    this._sharewareAndFreeware = value;
  }
  public resetSharewareAndFreeware() {
    this._sharewareAndFreeware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharewareAndFreewareInput() {
    return this._sharewareAndFreeware;
  }

  // shopping - computed: false, optional: true, required: false
  private _shopping?: number; 
  public get shopping() {
    return this.getNumberAttribute('shopping');
  }
  public set shopping(value: number) {
    this._shopping = value;
  }
  public resetShopping() {
    this._shopping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shoppingInput() {
    return this._shopping;
  }

  // social_network - computed: false, optional: true, required: false
  private _socialNetwork?: number; 
  public get socialNetwork() {
    return this.getNumberAttribute('social_network');
  }
  public set socialNetwork(value: number) {
    this._socialNetwork = value;
  }
  public resetSocialNetwork() {
    this._socialNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socialNetworkInput() {
    return this._socialNetwork;
  }

  // society - computed: false, optional: true, required: false
  private _society?: number; 
  public get society() {
    return this.getNumberAttribute('society');
  }
  public set society(value: number) {
    this._society = value;
  }
  public resetSociety() {
    this._society = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get societyInput() {
    return this._society;
  }

  // spam_urls - computed: false, optional: true, required: false
  private _spamUrls?: number; 
  public get spamUrls() {
    return this.getNumberAttribute('spam_urls');
  }
  public set spamUrls(value: number) {
    this._spamUrls = value;
  }
  public resetSpamUrls() {
    this._spamUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spamUrlsInput() {
    return this._spamUrls;
  }

  // sports - computed: false, optional: true, required: false
  private _sports?: number; 
  public get sports() {
    return this.getNumberAttribute('sports');
  }
  public set sports(value: number) {
    this._sports = value;
  }
  public resetSports() {
    this._sports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sportsInput() {
    return this._sports;
  }

  // spyware_and_adware - computed: false, optional: true, required: false
  private _spywareAndAdware?: number; 
  public get spywareAndAdware() {
    return this.getNumberAttribute('spyware_and_adware');
  }
  public set spywareAndAdware(value: number) {
    this._spywareAndAdware = value;
  }
  public resetSpywareAndAdware() {
    this._spywareAndAdware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spywareAndAdwareInput() {
    return this._spywareAndAdware;
  }

  // stock_advice_and_tools - computed: false, optional: true, required: false
  private _stockAdviceAndTools?: number; 
  public get stockAdviceAndTools() {
    return this.getNumberAttribute('stock_advice_and_tools');
  }
  public set stockAdviceAndTools(value: number) {
    this._stockAdviceAndTools = value;
  }
  public resetStockAdviceAndTools() {
    this._stockAdviceAndTools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stockAdviceAndToolsInput() {
    return this._stockAdviceAndTools;
  }

  // streaming_media - computed: false, optional: true, required: false
  private _streamingMedia?: number; 
  public get streamingMedia() {
    return this.getNumberAttribute('streaming_media');
  }
  public set streamingMedia(value: number) {
    this._streamingMedia = value;
  }
  public resetStreamingMedia() {
    this._streamingMedia = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamingMediaInput() {
    return this._streamingMedia;
  }

  // swimsuits_and_intimate_apparel - computed: false, optional: true, required: false
  private _swimsuitsAndIntimateApparel?: number; 
  public get swimsuitsAndIntimateApparel() {
    return this.getNumberAttribute('swimsuits_and_intimate_apparel');
  }
  public set swimsuitsAndIntimateApparel(value: number) {
    this._swimsuitsAndIntimateApparel = value;
  }
  public resetSwimsuitsAndIntimateApparel() {
    this._swimsuitsAndIntimateApparel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swimsuitsAndIntimateApparelInput() {
    return this._swimsuitsAndIntimateApparel;
  }

  // training_and_tools - computed: false, optional: true, required: false
  private _trainingAndTools?: number; 
  public get trainingAndTools() {
    return this.getNumberAttribute('training_and_tools');
  }
  public set trainingAndTools(value: number) {
    this._trainingAndTools = value;
  }
  public resetTrainingAndTools() {
    this._trainingAndTools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingAndToolsInput() {
    return this._trainingAndTools;
  }

  // translation - computed: false, optional: true, required: false
  private _translation?: number; 
  public get translation() {
    return this.getNumberAttribute('translation');
  }
  public set translation(value: number) {
    this._translation = value;
  }
  public resetTranslation() {
    this._translation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translationInput() {
    return this._translation;
  }

  // travel - computed: false, optional: true, required: false
  private _travel?: number; 
  public get travel() {
    return this.getNumberAttribute('travel');
  }
  public set travel(value: number) {
    this._travel = value;
  }
  public resetTravel() {
    this._travel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get travelInput() {
    return this._travel;
  }

  // uncategorized - computed: false, optional: true, required: false
  private _uncategorized?: number; 
  public get uncategorized() {
    return this.getNumberAttribute('uncategorized');
  }
  public set uncategorized(value: number) {
    this._uncategorized = value;
  }
  public resetUncategorized() {
    this._uncategorized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uncategorizedInput() {
    return this._uncategorized;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // violence - computed: false, optional: true, required: false
  private _violence?: number; 
  public get violence() {
    return this.getNumberAttribute('violence');
  }
  public set violence(value: number) {
    this._violence = value;
  }
  public resetViolence() {
    this._violence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get violenceInput() {
    return this._violence;
  }

  // weapons - computed: false, optional: true, required: false
  private _weapons?: number; 
  public get weapons() {
    return this.getNumberAttribute('weapons');
  }
  public set weapons(value: number) {
    this._weapons = value;
  }
  public resetWeapons() {
    this._weapons = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weaponsInput() {
    return this._weapons;
  }

  // web_advertisements - computed: false, optional: true, required: false
  private _webAdvertisements?: number; 
  public get webAdvertisements() {
    return this.getNumberAttribute('web_advertisements');
  }
  public set webAdvertisements(value: number) {
    this._webAdvertisements = value;
  }
  public resetWebAdvertisements() {
    this._webAdvertisements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webAdvertisementsInput() {
    return this._webAdvertisements;
  }

  // web_based_email - computed: false, optional: true, required: false
  private _webBasedEmail?: number; 
  public get webBasedEmail() {
    return this.getNumberAttribute('web_based_email');
  }
  public set webBasedEmail(value: number) {
    this._webBasedEmail = value;
  }
  public resetWebBasedEmail() {
    this._webBasedEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webBasedEmailInput() {
    return this._webBasedEmail;
  }

  // web_hosting_sites - computed: false, optional: true, required: false
  private _webHostingSites?: number; 
  public get webHostingSites() {
    return this.getNumberAttribute('web_hosting_sites');
  }
  public set webHostingSites(value: number) {
    this._webHostingSites = value;
  }
  public resetWebHostingSites() {
    this._webHostingSites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webHostingSitesInput() {
    return this._webHostingSites;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new WebCategoryCategoryListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: WebCategoryCategoryListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      abortion: cdktf.numberToTerraform(this._abortion),
      adult_and_pornography: cdktf.numberToTerraform(this._adultAndPornography),
      alcohol_and_tobacco: cdktf.numberToTerraform(this._alcoholAndTobacco),
      auctions: cdktf.numberToTerraform(this._auctions),
      bot_nets: cdktf.numberToTerraform(this._botNets),
      business_and_economy: cdktf.numberToTerraform(this._businessAndEconomy),
      cdns: cdktf.numberToTerraform(this._cdns),
      cheating: cdktf.numberToTerraform(this._cheating),
      computer_and_internet_info: cdktf.numberToTerraform(this._computerAndInternetInfo),
      computer_and_internet_security: cdktf.numberToTerraform(this._computerAndInternetSecurity),
      cult_and_occult: cdktf.numberToTerraform(this._cultAndOccult),
      dating: cdktf.numberToTerraform(this._dating),
      dead_sites: cdktf.numberToTerraform(this._deadSites),
      drugs: cdktf.numberToTerraform(this._drugs),
      dynamically_generated_content: cdktf.numberToTerraform(this._dynamicallyGeneratedContent),
      educational_institutions: cdktf.numberToTerraform(this._educationalInstitutions),
      entertainment_and_arts: cdktf.numberToTerraform(this._entertainmentAndArts),
      fashion_and_beauty: cdktf.numberToTerraform(this._fashionAndBeauty),
      financial_services: cdktf.numberToTerraform(this._financialServices),
      gambling: cdktf.numberToTerraform(this._gambling),
      games: cdktf.numberToTerraform(this._games),
      government: cdktf.numberToTerraform(this._government),
      gross: cdktf.numberToTerraform(this._gross),
      hacking: cdktf.numberToTerraform(this._hacking),
      hate_and_racism: cdktf.numberToTerraform(this._hateAndRacism),
      health_and_medicine: cdktf.numberToTerraform(this._healthAndMedicine),
      home_and_garden: cdktf.numberToTerraform(this._homeAndGarden),
      hunting_and_fishing: cdktf.numberToTerraform(this._huntingAndFishing),
      id: cdktf.stringToTerraform(this._id),
      illegal: cdktf.numberToTerraform(this._illegal),
      illegal_pornography: cdktf.numberToTerraform(this._illegalPornography),
      image_and_video_search: cdktf.numberToTerraform(this._imageAndVideoSearch),
      internet_communications: cdktf.numberToTerraform(this._internetCommunications),
      internet_portals: cdktf.numberToTerraform(this._internetPortals),
      job_search: cdktf.numberToTerraform(this._jobSearch),
      keyloggers_and_monitoring: cdktf.numberToTerraform(this._keyloggersAndMonitoring),
      kids: cdktf.numberToTerraform(this._kids),
      legal: cdktf.numberToTerraform(this._legal),
      local_information: cdktf.numberToTerraform(this._localInformation),
      malware_sites: cdktf.numberToTerraform(this._malwareSites),
      marijuana: cdktf.numberToTerraform(this._marijuana),
      military: cdktf.numberToTerraform(this._military),
      motor_vehicles: cdktf.numberToTerraform(this._motorVehicles),
      music: cdktf.numberToTerraform(this._music),
      name: cdktf.stringToTerraform(this._name),
      news_and_media: cdktf.numberToTerraform(this._newsAndMedia),
      nudity: cdktf.numberToTerraform(this._nudity),
      nudity_artistic: cdktf.numberToTerraform(this._nudityArtistic),
      online_greeting_cards: cdktf.numberToTerraform(this._onlineGreetingCards),
      parked_domains: cdktf.numberToTerraform(this._parkedDomains),
      pay_to_surf: cdktf.numberToTerraform(this._payToSurf),
      peer_to_peer: cdktf.numberToTerraform(this._peerToPeer),
      personal_sites_and_blogs: cdktf.numberToTerraform(this._personalSitesAndBlogs),
      personal_storage: cdktf.numberToTerraform(this._personalStorage),
      philosophy_and_politics: cdktf.numberToTerraform(this._philosophyAndPolitics),
      phishing_and_other_fraud: cdktf.numberToTerraform(this._phishingAndOtherFraud),
      proxy_avoid_and_anonymizers: cdktf.numberToTerraform(this._proxyAvoidAndAnonymizers),
      questionable: cdktf.numberToTerraform(this._questionable),
      real_estate: cdktf.numberToTerraform(this._realEstate),
      recreation_and_hobbies: cdktf.numberToTerraform(this._recreationAndHobbies),
      reference_and_research: cdktf.numberToTerraform(this._referenceAndResearch),
      religion: cdktf.numberToTerraform(this._religion),
      search_engines: cdktf.numberToTerraform(this._searchEngines),
      sex_education: cdktf.numberToTerraform(this._sexEducation),
      shareware_and_freeware: cdktf.numberToTerraform(this._sharewareAndFreeware),
      shopping: cdktf.numberToTerraform(this._shopping),
      social_network: cdktf.numberToTerraform(this._socialNetwork),
      society: cdktf.numberToTerraform(this._society),
      spam_urls: cdktf.numberToTerraform(this._spamUrls),
      sports: cdktf.numberToTerraform(this._sports),
      spyware_and_adware: cdktf.numberToTerraform(this._spywareAndAdware),
      stock_advice_and_tools: cdktf.numberToTerraform(this._stockAdviceAndTools),
      streaming_media: cdktf.numberToTerraform(this._streamingMedia),
      swimsuits_and_intimate_apparel: cdktf.numberToTerraform(this._swimsuitsAndIntimateApparel),
      training_and_tools: cdktf.numberToTerraform(this._trainingAndTools),
      translation: cdktf.numberToTerraform(this._translation),
      travel: cdktf.numberToTerraform(this._travel),
      uncategorized: cdktf.numberToTerraform(this._uncategorized),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      violence: cdktf.numberToTerraform(this._violence),
      weapons: cdktf.numberToTerraform(this._weapons),
      web_advertisements: cdktf.numberToTerraform(this._webAdvertisements),
      web_based_email: cdktf.numberToTerraform(this._webBasedEmail),
      web_hosting_sites: cdktf.numberToTerraform(this._webHostingSites),
      sampling_enable: cdktf.listMapper(webCategoryCategoryListSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      abortion: {
        value: cdktf.numberToHclTerraform(this._abortion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      adult_and_pornography: {
        value: cdktf.numberToHclTerraform(this._adultAndPornography),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      alcohol_and_tobacco: {
        value: cdktf.numberToHclTerraform(this._alcoholAndTobacco),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auctions: {
        value: cdktf.numberToHclTerraform(this._auctions),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bot_nets: {
        value: cdktf.numberToHclTerraform(this._botNets),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      business_and_economy: {
        value: cdktf.numberToHclTerraform(this._businessAndEconomy),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cdns: {
        value: cdktf.numberToHclTerraform(this._cdns),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cheating: {
        value: cdktf.numberToHclTerraform(this._cheating),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      computer_and_internet_info: {
        value: cdktf.numberToHclTerraform(this._computerAndInternetInfo),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      computer_and_internet_security: {
        value: cdktf.numberToHclTerraform(this._computerAndInternetSecurity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cult_and_occult: {
        value: cdktf.numberToHclTerraform(this._cultAndOccult),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dating: {
        value: cdktf.numberToHclTerraform(this._dating),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dead_sites: {
        value: cdktf.numberToHclTerraform(this._deadSites),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drugs: {
        value: cdktf.numberToHclTerraform(this._drugs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dynamically_generated_content: {
        value: cdktf.numberToHclTerraform(this._dynamicallyGeneratedContent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      educational_institutions: {
        value: cdktf.numberToHclTerraform(this._educationalInstitutions),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      entertainment_and_arts: {
        value: cdktf.numberToHclTerraform(this._entertainmentAndArts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fashion_and_beauty: {
        value: cdktf.numberToHclTerraform(this._fashionAndBeauty),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      financial_services: {
        value: cdktf.numberToHclTerraform(this._financialServices),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gambling: {
        value: cdktf.numberToHclTerraform(this._gambling),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      games: {
        value: cdktf.numberToHclTerraform(this._games),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      government: {
        value: cdktf.numberToHclTerraform(this._government),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gross: {
        value: cdktf.numberToHclTerraform(this._gross),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hacking: {
        value: cdktf.numberToHclTerraform(this._hacking),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hate_and_racism: {
        value: cdktf.numberToHclTerraform(this._hateAndRacism),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_and_medicine: {
        value: cdktf.numberToHclTerraform(this._healthAndMedicine),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      home_and_garden: {
        value: cdktf.numberToHclTerraform(this._homeAndGarden),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hunting_and_fishing: {
        value: cdktf.numberToHclTerraform(this._huntingAndFishing),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      illegal: {
        value: cdktf.numberToHclTerraform(this._illegal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      illegal_pornography: {
        value: cdktf.numberToHclTerraform(this._illegalPornography),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      image_and_video_search: {
        value: cdktf.numberToHclTerraform(this._imageAndVideoSearch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      internet_communications: {
        value: cdktf.numberToHclTerraform(this._internetCommunications),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      internet_portals: {
        value: cdktf.numberToHclTerraform(this._internetPortals),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      job_search: {
        value: cdktf.numberToHclTerraform(this._jobSearch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      keyloggers_and_monitoring: {
        value: cdktf.numberToHclTerraform(this._keyloggersAndMonitoring),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      kids: {
        value: cdktf.numberToHclTerraform(this._kids),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      legal: {
        value: cdktf.numberToHclTerraform(this._legal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      local_information: {
        value: cdktf.numberToHclTerraform(this._localInformation),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      malware_sites: {
        value: cdktf.numberToHclTerraform(this._malwareSites),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      marijuana: {
        value: cdktf.numberToHclTerraform(this._marijuana),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      military: {
        value: cdktf.numberToHclTerraform(this._military),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      motor_vehicles: {
        value: cdktf.numberToHclTerraform(this._motorVehicles),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      music: {
        value: cdktf.numberToHclTerraform(this._music),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      news_and_media: {
        value: cdktf.numberToHclTerraform(this._newsAndMedia),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nudity: {
        value: cdktf.numberToHclTerraform(this._nudity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nudity_artistic: {
        value: cdktf.numberToHclTerraform(this._nudityArtistic),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      online_greeting_cards: {
        value: cdktf.numberToHclTerraform(this._onlineGreetingCards),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      parked_domains: {
        value: cdktf.numberToHclTerraform(this._parkedDomains),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pay_to_surf: {
        value: cdktf.numberToHclTerraform(this._payToSurf),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      peer_to_peer: {
        value: cdktf.numberToHclTerraform(this._peerToPeer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      personal_sites_and_blogs: {
        value: cdktf.numberToHclTerraform(this._personalSitesAndBlogs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      personal_storage: {
        value: cdktf.numberToHclTerraform(this._personalStorage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      philosophy_and_politics: {
        value: cdktf.numberToHclTerraform(this._philosophyAndPolitics),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      phishing_and_other_fraud: {
        value: cdktf.numberToHclTerraform(this._phishingAndOtherFraud),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      proxy_avoid_and_anonymizers: {
        value: cdktf.numberToHclTerraform(this._proxyAvoidAndAnonymizers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      questionable: {
        value: cdktf.numberToHclTerraform(this._questionable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      real_estate: {
        value: cdktf.numberToHclTerraform(this._realEstate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      recreation_and_hobbies: {
        value: cdktf.numberToHclTerraform(this._recreationAndHobbies),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reference_and_research: {
        value: cdktf.numberToHclTerraform(this._referenceAndResearch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      religion: {
        value: cdktf.numberToHclTerraform(this._religion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      search_engines: {
        value: cdktf.numberToHclTerraform(this._searchEngines),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sex_education: {
        value: cdktf.numberToHclTerraform(this._sexEducation),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shareware_and_freeware: {
        value: cdktf.numberToHclTerraform(this._sharewareAndFreeware),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shopping: {
        value: cdktf.numberToHclTerraform(this._shopping),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      social_network: {
        value: cdktf.numberToHclTerraform(this._socialNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      society: {
        value: cdktf.numberToHclTerraform(this._society),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      spam_urls: {
        value: cdktf.numberToHclTerraform(this._spamUrls),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sports: {
        value: cdktf.numberToHclTerraform(this._sports),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      spyware_and_adware: {
        value: cdktf.numberToHclTerraform(this._spywareAndAdware),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stock_advice_and_tools: {
        value: cdktf.numberToHclTerraform(this._stockAdviceAndTools),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      streaming_media: {
        value: cdktf.numberToHclTerraform(this._streamingMedia),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      swimsuits_and_intimate_apparel: {
        value: cdktf.numberToHclTerraform(this._swimsuitsAndIntimateApparel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      training_and_tools: {
        value: cdktf.numberToHclTerraform(this._trainingAndTools),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      translation: {
        value: cdktf.numberToHclTerraform(this._translation),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      travel: {
        value: cdktf.numberToHclTerraform(this._travel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uncategorized: {
        value: cdktf.numberToHclTerraform(this._uncategorized),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      violence: {
        value: cdktf.numberToHclTerraform(this._violence),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      weapons: {
        value: cdktf.numberToHclTerraform(this._weapons),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      web_advertisements: {
        value: cdktf.numberToHclTerraform(this._webAdvertisements),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      web_based_email: {
        value: cdktf.numberToHclTerraform(this._webBasedEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      web_hosting_sites: {
        value: cdktf.numberToHclTerraform(this._webHostingSites),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(webCategoryCategoryListSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebCategoryCategoryListSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
