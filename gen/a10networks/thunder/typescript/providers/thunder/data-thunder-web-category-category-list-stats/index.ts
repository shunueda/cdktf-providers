// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderWebCategoryCategoryListStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#id DataThunderWebCategoryCategoryListStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Web Category List name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#name DataThunderWebCategoryCategoryListStats#name}
  */
  readonly name: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#stats DataThunderWebCategoryCategoryListStats#stats}
  */
  readonly stats?: DataThunderWebCategoryCategoryListStatsStats;
}
export interface DataThunderWebCategoryCategoryListStatsStats {
  /**
  * abortion category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#abortion DataThunderWebCategoryCategoryListStats#abortion}
  */
  readonly abortion?: number;
  /**
  * adult and pornography category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#adult_and_pornography DataThunderWebCategoryCategoryListStats#adult_and_pornography}
  */
  readonly adultAndPornography?: number;
  /**
  * alcohol and tobacco category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#alcohol_and_tobacco DataThunderWebCategoryCategoryListStats#alcohol_and_tobacco}
  */
  readonly alcoholAndTobacco?: number;
  /**
  * auctions category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#auctions DataThunderWebCategoryCategoryListStats#auctions}
  */
  readonly auctions?: number;
  /**
  * bot nets category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#bot_nets DataThunderWebCategoryCategoryListStats#bot_nets}
  */
  readonly botNets?: number;
  /**
  * business and economy category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#business_and_economy DataThunderWebCategoryCategoryListStats#business_and_economy}
  */
  readonly businessAndEconomy?: number;
  /**
  * content delivery networks category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#cdns DataThunderWebCategoryCategoryListStats#cdns}
  */
  readonly cdns?: number;
  /**
  * cheating category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#cheating DataThunderWebCategoryCategoryListStats#cheating}
  */
  readonly cheating?: number;
  /**
  * computer and internet info category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#computer_and_internet_info DataThunderWebCategoryCategoryListStats#computer_and_internet_info}
  */
  readonly computerAndInternetInfo?: number;
  /**
  * computer and internet security category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#computer_and_internet_security DataThunderWebCategoryCategoryListStats#computer_and_internet_security}
  */
  readonly computerAndInternetSecurity?: number;
  /**
  * confirmed SPAM sources category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#confirmed_spam_sources DataThunderWebCategoryCategoryListStats#confirmed_spam_sources}
  */
  readonly confirmedSpamSources?: number;
  /**
  * cult and occult category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#cult_and_occult DataThunderWebCategoryCategoryListStats#cult_and_occult}
  */
  readonly cultAndOccult?: number;
  /**
  * dating category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#dating DataThunderWebCategoryCategoryListStats#dating}
  */
  readonly dating?: number;
  /**
  * dead sites category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#dead_sites DataThunderWebCategoryCategoryListStats#dead_sites}
  */
  readonly deadSites?: number;
  /**
  * drugs category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#drugs DataThunderWebCategoryCategoryListStats#drugs}
  */
  readonly drugs?: number;
  /**
  * dynamically generated content category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#dynamically_generated_content DataThunderWebCategoryCategoryListStats#dynamically_generated_content}
  */
  readonly dynamicallyGeneratedContent?: number;
  /**
  * educational institutions category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#educational_institutions DataThunderWebCategoryCategoryListStats#educational_institutions}
  */
  readonly educationalInstitutions?: number;
  /**
  * entertainment and arts category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#entertainment_and_arts DataThunderWebCategoryCategoryListStats#entertainment_and_arts}
  */
  readonly entertainmentAndArts?: number;
  /**
  * fashion and beauty category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#fashion_and_beauty DataThunderWebCategoryCategoryListStats#fashion_and_beauty}
  */
  readonly fashionAndBeauty?: number;
  /**
  * financial services category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#financial_services DataThunderWebCategoryCategoryListStats#financial_services}
  */
  readonly financialServices?: number;
  /**
  * food and dining category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#food_and_dining DataThunderWebCategoryCategoryListStats#food_and_dining}
  */
  readonly foodAndDining?: number;
  /**
  * gambling category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#gambling DataThunderWebCategoryCategoryListStats#gambling}
  */
  readonly gambling?: number;
  /**
  * games category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#games DataThunderWebCategoryCategoryListStats#games}
  */
  readonly games?: number;
  /**
  * government category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#government DataThunderWebCategoryCategoryListStats#government}
  */
  readonly government?: number;
  /**
  * gross category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#gross DataThunderWebCategoryCategoryListStats#gross}
  */
  readonly gross?: number;
  /**
  * hacking category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#hacking DataThunderWebCategoryCategoryListStats#hacking}
  */
  readonly hacking?: number;
  /**
  * hate and racism category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#hate_and_racism DataThunderWebCategoryCategoryListStats#hate_and_racism}
  */
  readonly hateAndRacism?: number;
  /**
  * health and medicine category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#health_and_medicine DataThunderWebCategoryCategoryListStats#health_and_medicine}
  */
  readonly healthAndMedicine?: number;
  /**
  * home and garden category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#home_and_garden DataThunderWebCategoryCategoryListStats#home_and_garden}
  */
  readonly homeAndGarden?: number;
  /**
  * hunting and fishing category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#hunting_and_fishing DataThunderWebCategoryCategoryListStats#hunting_and_fishing}
  */
  readonly huntingAndFishing?: number;
  /**
  * illegal category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#illegal DataThunderWebCategoryCategoryListStats#illegal}
  */
  readonly illegal?: number;
  /**
  * illegal join adult and pornography
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#illegal_pornography DataThunderWebCategoryCategoryListStats#illegal_pornography}
  */
  readonly illegalPornography?: number;
  /**
  * image and video search category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#image_and_video_search DataThunderWebCategoryCategoryListStats#image_and_video_search}
  */
  readonly imageAndVideoSearch?: number;
  /**
  * internet communications category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#internet_communications DataThunderWebCategoryCategoryListStats#internet_communications}
  */
  readonly internetCommunications?: number;
  /**
  * internet portals category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#internet_portals DataThunderWebCategoryCategoryListStats#internet_portals}
  */
  readonly internetPortals?: number;
  /**
  * job search category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#job_search DataThunderWebCategoryCategoryListStats#job_search}
  */
  readonly jobSearch?: number;
  /**
  * keyloggers and monitoring category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#keyloggers_and_monitoring DataThunderWebCategoryCategoryListStats#keyloggers_and_monitoring}
  */
  readonly keyloggersAndMonitoring?: number;
  /**
  * kids category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#kids DataThunderWebCategoryCategoryListStats#kids}
  */
  readonly kids?: number;
  /**
  * legal category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#legal DataThunderWebCategoryCategoryListStats#legal}
  */
  readonly legal?: number;
  /**
  * local information category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#local_information DataThunderWebCategoryCategoryListStats#local_information}
  */
  readonly localInformation?: number;
  /**
  * malware sites category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#malware_sites DataThunderWebCategoryCategoryListStats#malware_sites}
  */
  readonly malwareSites?: number;
  /**
  * marijuana category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#marijuana DataThunderWebCategoryCategoryListStats#marijuana}
  */
  readonly marijuana?: number;
  /**
  * military category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#military DataThunderWebCategoryCategoryListStats#military}
  */
  readonly military?: number;
  /**
  * motor vehicles category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#motor_vehicles DataThunderWebCategoryCategoryListStats#motor_vehicles}
  */
  readonly motorVehicles?: number;
  /**
  * music category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#music DataThunderWebCategoryCategoryListStats#music}
  */
  readonly music?: number;
  /**
  * news and media category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#news_and_media DataThunderWebCategoryCategoryListStats#news_and_media}
  */
  readonly newsAndMedia?: number;
  /**
  * nudity category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#nudity DataThunderWebCategoryCategoryListStats#nudity}
  */
  readonly nudity?: number;
  /**
  * nudity join entertainment and arts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#nudity_artistic DataThunderWebCategoryCategoryListStats#nudity_artistic}
  */
  readonly nudityArtistic?: number;
  /**
  * online greeting cards category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#online_greeting_cards DataThunderWebCategoryCategoryListStats#online_greeting_cards}
  */
  readonly onlineGreetingCards?: number;
  /**
  * open HTTP proxies category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#open_http_proxies DataThunderWebCategoryCategoryListStats#open_http_proxies}
  */
  readonly openHttpProxies?: number;
  /**
  * parked domains category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#parked_domains DataThunderWebCategoryCategoryListStats#parked_domains}
  */
  readonly parkedDomains?: number;
  /**
  * pay to surf category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#pay_to_surf DataThunderWebCategoryCategoryListStats#pay_to_surf}
  */
  readonly payToSurf?: number;
  /**
  * peer to peer category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#peer_to_peer DataThunderWebCategoryCategoryListStats#peer_to_peer}
  */
  readonly peerToPeer?: number;
  /**
  * personal sites and blogs category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#personal_sites_and_blogs DataThunderWebCategoryCategoryListStats#personal_sites_and_blogs}
  */
  readonly personalSitesAndBlogs?: number;
  /**
  * personal storage category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#personal_storage DataThunderWebCategoryCategoryListStats#personal_storage}
  */
  readonly personalStorage?: number;
  /**
  * philosophy and politics category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#philosophy_and_politics DataThunderWebCategoryCategoryListStats#philosophy_and_politics}
  */
  readonly philosophyAndPolitics?: number;
  /**
  * phishing and other fraud category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#phishing_and_other_fraud DataThunderWebCategoryCategoryListStats#phishing_and_other_fraud}
  */
  readonly phishingAndOtherFraud?: number;
  /**
  * private IP addresses category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#private_ip_addresses DataThunderWebCategoryCategoryListStats#private_ip_addresses}
  */
  readonly privateIpAddresses?: number;
  /**
  * proxy avoid and anonymizers category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#proxy_avoid_and_anonymizers DataThunderWebCategoryCategoryListStats#proxy_avoid_and_anonymizers}
  */
  readonly proxyAvoidAndAnonymizers?: number;
  /**
  * questionable category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#questionable DataThunderWebCategoryCategoryListStats#questionable}
  */
  readonly questionable?: number;
  /**
  * real estate category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#real_estate DataThunderWebCategoryCategoryListStats#real_estate}
  */
  readonly realEstate?: number;
  /**
  * recreation and hobbies category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#recreation_and_hobbies DataThunderWebCategoryCategoryListStats#recreation_and_hobbies}
  */
  readonly recreationAndHobbies?: number;
  /**
  * reference and research category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#reference_and_research DataThunderWebCategoryCategoryListStats#reference_and_research}
  */
  readonly referenceAndResearch?: number;
  /**
  * religion category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#religion DataThunderWebCategoryCategoryListStats#religion}
  */
  readonly religion?: number;
  /**
  * search engines category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#search_engines DataThunderWebCategoryCategoryListStats#search_engines}
  */
  readonly searchEngines?: number;
  /**
  * sex education category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#sex_education DataThunderWebCategoryCategoryListStats#sex_education}
  */
  readonly sexEducation?: number;
  /**
  * shareware and freeware category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#shareware_and_freeware DataThunderWebCategoryCategoryListStats#shareware_and_freeware}
  */
  readonly sharewareAndFreeware?: number;
  /**
  * shopping category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#shopping DataThunderWebCategoryCategoryListStats#shopping}
  */
  readonly shopping?: number;
  /**
  * social network category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#social_network DataThunderWebCategoryCategoryListStats#social_network}
  */
  readonly socialNetwork?: number;
  /**
  * society category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#society DataThunderWebCategoryCategoryListStats#society}
  */
  readonly society?: number;
  /**
  * SPAM URLs category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#spam_urls DataThunderWebCategoryCategoryListStats#spam_urls}
  */
  readonly spamUrls?: number;
  /**
  * sports category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#sports DataThunderWebCategoryCategoryListStats#sports}
  */
  readonly sports?: number;
  /**
  * spyware and adware category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#spyware_and_adware DataThunderWebCategoryCategoryListStats#spyware_and_adware}
  */
  readonly spywareAndAdware?: number;
  /**
  * stock advice and tools category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#stock_advice_and_tools DataThunderWebCategoryCategoryListStats#stock_advice_and_tools}
  */
  readonly stockAdviceAndTools?: number;
  /**
  * streaming media category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#streaming_media DataThunderWebCategoryCategoryListStats#streaming_media}
  */
  readonly streamingMedia?: number;
  /**
  * swimsuits and intimate apparel category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#swimsuits_and_intimate_apparel DataThunderWebCategoryCategoryListStats#swimsuits_and_intimate_apparel}
  */
  readonly swimsuitsAndIntimateApparel?: number;
  /**
  * training and tools category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#training_and_tools DataThunderWebCategoryCategoryListStats#training_and_tools}
  */
  readonly trainingAndTools?: number;
  /**
  * translation category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#translation DataThunderWebCategoryCategoryListStats#translation}
  */
  readonly translation?: number;
  /**
  * travel category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#travel DataThunderWebCategoryCategoryListStats#travel}
  */
  readonly travel?: number;
  /**
  * uncategorized category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#uncategorized DataThunderWebCategoryCategoryListStats#uncategorized}
  */
  readonly uncategorized?: number;
  /**
  * unconfirmed SPAM sources category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#unconfirmed_spam_sources DataThunderWebCategoryCategoryListStats#unconfirmed_spam_sources}
  */
  readonly unconfirmedSpamSources?: number;
  /**
  * violence category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#violence DataThunderWebCategoryCategoryListStats#violence}
  */
  readonly violence?: number;
  /**
  * weapons category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#weapons DataThunderWebCategoryCategoryListStats#weapons}
  */
  readonly weapons?: number;
  /**
  * web advertisements category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#web_advertisements DataThunderWebCategoryCategoryListStats#web_advertisements}
  */
  readonly webAdvertisements?: number;
  /**
  * web based email category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#web_based_email DataThunderWebCategoryCategoryListStats#web_based_email}
  */
  readonly webBasedEmail?: number;
  /**
  * web hosting sites category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#web_hosting_sites DataThunderWebCategoryCategoryListStats#web_hosting_sites}
  */
  readonly webHostingSites?: number;
}

export function dataThunderWebCategoryCategoryListStatsStatsToTerraform(struct?: DataThunderWebCategoryCategoryListStatsStatsOutputReference | DataThunderWebCategoryCategoryListStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abortion: cdktf.numberToTerraform(struct!.abortion),
    adult_and_pornography: cdktf.numberToTerraform(struct!.adultAndPornography),
    alcohol_and_tobacco: cdktf.numberToTerraform(struct!.alcoholAndTobacco),
    auctions: cdktf.numberToTerraform(struct!.auctions),
    bot_nets: cdktf.numberToTerraform(struct!.botNets),
    business_and_economy: cdktf.numberToTerraform(struct!.businessAndEconomy),
    cdns: cdktf.numberToTerraform(struct!.cdns),
    cheating: cdktf.numberToTerraform(struct!.cheating),
    computer_and_internet_info: cdktf.numberToTerraform(struct!.computerAndInternetInfo),
    computer_and_internet_security: cdktf.numberToTerraform(struct!.computerAndInternetSecurity),
    confirmed_spam_sources: cdktf.numberToTerraform(struct!.confirmedSpamSources),
    cult_and_occult: cdktf.numberToTerraform(struct!.cultAndOccult),
    dating: cdktf.numberToTerraform(struct!.dating),
    dead_sites: cdktf.numberToTerraform(struct!.deadSites),
    drugs: cdktf.numberToTerraform(struct!.drugs),
    dynamically_generated_content: cdktf.numberToTerraform(struct!.dynamicallyGeneratedContent),
    educational_institutions: cdktf.numberToTerraform(struct!.educationalInstitutions),
    entertainment_and_arts: cdktf.numberToTerraform(struct!.entertainmentAndArts),
    fashion_and_beauty: cdktf.numberToTerraform(struct!.fashionAndBeauty),
    financial_services: cdktf.numberToTerraform(struct!.financialServices),
    food_and_dining: cdktf.numberToTerraform(struct!.foodAndDining),
    gambling: cdktf.numberToTerraform(struct!.gambling),
    games: cdktf.numberToTerraform(struct!.games),
    government: cdktf.numberToTerraform(struct!.government),
    gross: cdktf.numberToTerraform(struct!.gross),
    hacking: cdktf.numberToTerraform(struct!.hacking),
    hate_and_racism: cdktf.numberToTerraform(struct!.hateAndRacism),
    health_and_medicine: cdktf.numberToTerraform(struct!.healthAndMedicine),
    home_and_garden: cdktf.numberToTerraform(struct!.homeAndGarden),
    hunting_and_fishing: cdktf.numberToTerraform(struct!.huntingAndFishing),
    illegal: cdktf.numberToTerraform(struct!.illegal),
    illegal_pornography: cdktf.numberToTerraform(struct!.illegalPornography),
    image_and_video_search: cdktf.numberToTerraform(struct!.imageAndVideoSearch),
    internet_communications: cdktf.numberToTerraform(struct!.internetCommunications),
    internet_portals: cdktf.numberToTerraform(struct!.internetPortals),
    job_search: cdktf.numberToTerraform(struct!.jobSearch),
    keyloggers_and_monitoring: cdktf.numberToTerraform(struct!.keyloggersAndMonitoring),
    kids: cdktf.numberToTerraform(struct!.kids),
    legal: cdktf.numberToTerraform(struct!.legal),
    local_information: cdktf.numberToTerraform(struct!.localInformation),
    malware_sites: cdktf.numberToTerraform(struct!.malwareSites),
    marijuana: cdktf.numberToTerraform(struct!.marijuana),
    military: cdktf.numberToTerraform(struct!.military),
    motor_vehicles: cdktf.numberToTerraform(struct!.motorVehicles),
    music: cdktf.numberToTerraform(struct!.music),
    news_and_media: cdktf.numberToTerraform(struct!.newsAndMedia),
    nudity: cdktf.numberToTerraform(struct!.nudity),
    nudity_artistic: cdktf.numberToTerraform(struct!.nudityArtistic),
    online_greeting_cards: cdktf.numberToTerraform(struct!.onlineGreetingCards),
    open_http_proxies: cdktf.numberToTerraform(struct!.openHttpProxies),
    parked_domains: cdktf.numberToTerraform(struct!.parkedDomains),
    pay_to_surf: cdktf.numberToTerraform(struct!.payToSurf),
    peer_to_peer: cdktf.numberToTerraform(struct!.peerToPeer),
    personal_sites_and_blogs: cdktf.numberToTerraform(struct!.personalSitesAndBlogs),
    personal_storage: cdktf.numberToTerraform(struct!.personalStorage),
    philosophy_and_politics: cdktf.numberToTerraform(struct!.philosophyAndPolitics),
    phishing_and_other_fraud: cdktf.numberToTerraform(struct!.phishingAndOtherFraud),
    private_ip_addresses: cdktf.numberToTerraform(struct!.privateIpAddresses),
    proxy_avoid_and_anonymizers: cdktf.numberToTerraform(struct!.proxyAvoidAndAnonymizers),
    questionable: cdktf.numberToTerraform(struct!.questionable),
    real_estate: cdktf.numberToTerraform(struct!.realEstate),
    recreation_and_hobbies: cdktf.numberToTerraform(struct!.recreationAndHobbies),
    reference_and_research: cdktf.numberToTerraform(struct!.referenceAndResearch),
    religion: cdktf.numberToTerraform(struct!.religion),
    search_engines: cdktf.numberToTerraform(struct!.searchEngines),
    sex_education: cdktf.numberToTerraform(struct!.sexEducation),
    shareware_and_freeware: cdktf.numberToTerraform(struct!.sharewareAndFreeware),
    shopping: cdktf.numberToTerraform(struct!.shopping),
    social_network: cdktf.numberToTerraform(struct!.socialNetwork),
    society: cdktf.numberToTerraform(struct!.society),
    spam_urls: cdktf.numberToTerraform(struct!.spamUrls),
    sports: cdktf.numberToTerraform(struct!.sports),
    spyware_and_adware: cdktf.numberToTerraform(struct!.spywareAndAdware),
    stock_advice_and_tools: cdktf.numberToTerraform(struct!.stockAdviceAndTools),
    streaming_media: cdktf.numberToTerraform(struct!.streamingMedia),
    swimsuits_and_intimate_apparel: cdktf.numberToTerraform(struct!.swimsuitsAndIntimateApparel),
    training_and_tools: cdktf.numberToTerraform(struct!.trainingAndTools),
    translation: cdktf.numberToTerraform(struct!.translation),
    travel: cdktf.numberToTerraform(struct!.travel),
    uncategorized: cdktf.numberToTerraform(struct!.uncategorized),
    unconfirmed_spam_sources: cdktf.numberToTerraform(struct!.unconfirmedSpamSources),
    violence: cdktf.numberToTerraform(struct!.violence),
    weapons: cdktf.numberToTerraform(struct!.weapons),
    web_advertisements: cdktf.numberToTerraform(struct!.webAdvertisements),
    web_based_email: cdktf.numberToTerraform(struct!.webBasedEmail),
    web_hosting_sites: cdktf.numberToTerraform(struct!.webHostingSites),
  }
}


export function dataThunderWebCategoryCategoryListStatsStatsToHclTerraform(struct?: DataThunderWebCategoryCategoryListStatsStatsOutputReference | DataThunderWebCategoryCategoryListStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abortion: {
      value: cdktf.numberToHclTerraform(struct!.abortion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    adult_and_pornography: {
      value: cdktf.numberToHclTerraform(struct!.adultAndPornography),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alcohol_and_tobacco: {
      value: cdktf.numberToHclTerraform(struct!.alcoholAndTobacco),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auctions: {
      value: cdktf.numberToHclTerraform(struct!.auctions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bot_nets: {
      value: cdktf.numberToHclTerraform(struct!.botNets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    business_and_economy: {
      value: cdktf.numberToHclTerraform(struct!.businessAndEconomy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cdns: {
      value: cdktf.numberToHclTerraform(struct!.cdns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cheating: {
      value: cdktf.numberToHclTerraform(struct!.cheating),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    computer_and_internet_info: {
      value: cdktf.numberToHclTerraform(struct!.computerAndInternetInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    computer_and_internet_security: {
      value: cdktf.numberToHclTerraform(struct!.computerAndInternetSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    confirmed_spam_sources: {
      value: cdktf.numberToHclTerraform(struct!.confirmedSpamSources),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cult_and_occult: {
      value: cdktf.numberToHclTerraform(struct!.cultAndOccult),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dating: {
      value: cdktf.numberToHclTerraform(struct!.dating),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dead_sites: {
      value: cdktf.numberToHclTerraform(struct!.deadSites),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drugs: {
      value: cdktf.numberToHclTerraform(struct!.drugs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dynamically_generated_content: {
      value: cdktf.numberToHclTerraform(struct!.dynamicallyGeneratedContent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    educational_institutions: {
      value: cdktf.numberToHclTerraform(struct!.educationalInstitutions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entertainment_and_arts: {
      value: cdktf.numberToHclTerraform(struct!.entertainmentAndArts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fashion_and_beauty: {
      value: cdktf.numberToHclTerraform(struct!.fashionAndBeauty),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    financial_services: {
      value: cdktf.numberToHclTerraform(struct!.financialServices),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    food_and_dining: {
      value: cdktf.numberToHclTerraform(struct!.foodAndDining),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gambling: {
      value: cdktf.numberToHclTerraform(struct!.gambling),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    games: {
      value: cdktf.numberToHclTerraform(struct!.games),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    government: {
      value: cdktf.numberToHclTerraform(struct!.government),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gross: {
      value: cdktf.numberToHclTerraform(struct!.gross),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hacking: {
      value: cdktf.numberToHclTerraform(struct!.hacking),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hate_and_racism: {
      value: cdktf.numberToHclTerraform(struct!.hateAndRacism),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_and_medicine: {
      value: cdktf.numberToHclTerraform(struct!.healthAndMedicine),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    home_and_garden: {
      value: cdktf.numberToHclTerraform(struct!.homeAndGarden),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hunting_and_fishing: {
      value: cdktf.numberToHclTerraform(struct!.huntingAndFishing),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    illegal: {
      value: cdktf.numberToHclTerraform(struct!.illegal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    illegal_pornography: {
      value: cdktf.numberToHclTerraform(struct!.illegalPornography),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    image_and_video_search: {
      value: cdktf.numberToHclTerraform(struct!.imageAndVideoSearch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    internet_communications: {
      value: cdktf.numberToHclTerraform(struct!.internetCommunications),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    internet_portals: {
      value: cdktf.numberToHclTerraform(struct!.internetPortals),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    job_search: {
      value: cdktf.numberToHclTerraform(struct!.jobSearch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keyloggers_and_monitoring: {
      value: cdktf.numberToHclTerraform(struct!.keyloggersAndMonitoring),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kids: {
      value: cdktf.numberToHclTerraform(struct!.kids),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    legal: {
      value: cdktf.numberToHclTerraform(struct!.legal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_information: {
      value: cdktf.numberToHclTerraform(struct!.localInformation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    malware_sites: {
      value: cdktf.numberToHclTerraform(struct!.malwareSites),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    marijuana: {
      value: cdktf.numberToHclTerraform(struct!.marijuana),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    military: {
      value: cdktf.numberToHclTerraform(struct!.military),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    motor_vehicles: {
      value: cdktf.numberToHclTerraform(struct!.motorVehicles),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    music: {
      value: cdktf.numberToHclTerraform(struct!.music),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    news_and_media: {
      value: cdktf.numberToHclTerraform(struct!.newsAndMedia),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nudity: {
      value: cdktf.numberToHclTerraform(struct!.nudity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nudity_artistic: {
      value: cdktf.numberToHclTerraform(struct!.nudityArtistic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    online_greeting_cards: {
      value: cdktf.numberToHclTerraform(struct!.onlineGreetingCards),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    open_http_proxies: {
      value: cdktf.numberToHclTerraform(struct!.openHttpProxies),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parked_domains: {
      value: cdktf.numberToHclTerraform(struct!.parkedDomains),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pay_to_surf: {
      value: cdktf.numberToHclTerraform(struct!.payToSurf),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_to_peer: {
      value: cdktf.numberToHclTerraform(struct!.peerToPeer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    personal_sites_and_blogs: {
      value: cdktf.numberToHclTerraform(struct!.personalSitesAndBlogs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    personal_storage: {
      value: cdktf.numberToHclTerraform(struct!.personalStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    philosophy_and_politics: {
      value: cdktf.numberToHclTerraform(struct!.philosophyAndPolitics),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    phishing_and_other_fraud: {
      value: cdktf.numberToHclTerraform(struct!.phishingAndOtherFraud),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    private_ip_addresses: {
      value: cdktf.numberToHclTerraform(struct!.privateIpAddresses),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxy_avoid_and_anonymizers: {
      value: cdktf.numberToHclTerraform(struct!.proxyAvoidAndAnonymizers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    questionable: {
      value: cdktf.numberToHclTerraform(struct!.questionable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    real_estate: {
      value: cdktf.numberToHclTerraform(struct!.realEstate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recreation_and_hobbies: {
      value: cdktf.numberToHclTerraform(struct!.recreationAndHobbies),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reference_and_research: {
      value: cdktf.numberToHclTerraform(struct!.referenceAndResearch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    religion: {
      value: cdktf.numberToHclTerraform(struct!.religion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    search_engines: {
      value: cdktf.numberToHclTerraform(struct!.searchEngines),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sex_education: {
      value: cdktf.numberToHclTerraform(struct!.sexEducation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shareware_and_freeware: {
      value: cdktf.numberToHclTerraform(struct!.sharewareAndFreeware),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shopping: {
      value: cdktf.numberToHclTerraform(struct!.shopping),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    social_network: {
      value: cdktf.numberToHclTerraform(struct!.socialNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    society: {
      value: cdktf.numberToHclTerraform(struct!.society),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spam_urls: {
      value: cdktf.numberToHclTerraform(struct!.spamUrls),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sports: {
      value: cdktf.numberToHclTerraform(struct!.sports),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spyware_and_adware: {
      value: cdktf.numberToHclTerraform(struct!.spywareAndAdware),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stock_advice_and_tools: {
      value: cdktf.numberToHclTerraform(struct!.stockAdviceAndTools),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    streaming_media: {
      value: cdktf.numberToHclTerraform(struct!.streamingMedia),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    swimsuits_and_intimate_apparel: {
      value: cdktf.numberToHclTerraform(struct!.swimsuitsAndIntimateApparel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    training_and_tools: {
      value: cdktf.numberToHclTerraform(struct!.trainingAndTools),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    translation: {
      value: cdktf.numberToHclTerraform(struct!.translation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    travel: {
      value: cdktf.numberToHclTerraform(struct!.travel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uncategorized: {
      value: cdktf.numberToHclTerraform(struct!.uncategorized),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unconfirmed_spam_sources: {
      value: cdktf.numberToHclTerraform(struct!.unconfirmedSpamSources),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    violence: {
      value: cdktf.numberToHclTerraform(struct!.violence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weapons: {
      value: cdktf.numberToHclTerraform(struct!.weapons),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    web_advertisements: {
      value: cdktf.numberToHclTerraform(struct!.webAdvertisements),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    web_based_email: {
      value: cdktf.numberToHclTerraform(struct!.webBasedEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    web_hosting_sites: {
      value: cdktf.numberToHclTerraform(struct!.webHostingSites),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderWebCategoryCategoryListStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderWebCategoryCategoryListStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abortion !== undefined) {
      hasAnyValues = true;
      internalValueResult.abortion = this._abortion;
    }
    if (this._adultAndPornography !== undefined) {
      hasAnyValues = true;
      internalValueResult.adultAndPornography = this._adultAndPornography;
    }
    if (this._alcoholAndTobacco !== undefined) {
      hasAnyValues = true;
      internalValueResult.alcoholAndTobacco = this._alcoholAndTobacco;
    }
    if (this._auctions !== undefined) {
      hasAnyValues = true;
      internalValueResult.auctions = this._auctions;
    }
    if (this._botNets !== undefined) {
      hasAnyValues = true;
      internalValueResult.botNets = this._botNets;
    }
    if (this._businessAndEconomy !== undefined) {
      hasAnyValues = true;
      internalValueResult.businessAndEconomy = this._businessAndEconomy;
    }
    if (this._cdns !== undefined) {
      hasAnyValues = true;
      internalValueResult.cdns = this._cdns;
    }
    if (this._cheating !== undefined) {
      hasAnyValues = true;
      internalValueResult.cheating = this._cheating;
    }
    if (this._computerAndInternetInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.computerAndInternetInfo = this._computerAndInternetInfo;
    }
    if (this._computerAndInternetSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.computerAndInternetSecurity = this._computerAndInternetSecurity;
    }
    if (this._confirmedSpamSources !== undefined) {
      hasAnyValues = true;
      internalValueResult.confirmedSpamSources = this._confirmedSpamSources;
    }
    if (this._cultAndOccult !== undefined) {
      hasAnyValues = true;
      internalValueResult.cultAndOccult = this._cultAndOccult;
    }
    if (this._dating !== undefined) {
      hasAnyValues = true;
      internalValueResult.dating = this._dating;
    }
    if (this._deadSites !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadSites = this._deadSites;
    }
    if (this._drugs !== undefined) {
      hasAnyValues = true;
      internalValueResult.drugs = this._drugs;
    }
    if (this._dynamicallyGeneratedContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicallyGeneratedContent = this._dynamicallyGeneratedContent;
    }
    if (this._educationalInstitutions !== undefined) {
      hasAnyValues = true;
      internalValueResult.educationalInstitutions = this._educationalInstitutions;
    }
    if (this._entertainmentAndArts !== undefined) {
      hasAnyValues = true;
      internalValueResult.entertainmentAndArts = this._entertainmentAndArts;
    }
    if (this._fashionAndBeauty !== undefined) {
      hasAnyValues = true;
      internalValueResult.fashionAndBeauty = this._fashionAndBeauty;
    }
    if (this._financialServices !== undefined) {
      hasAnyValues = true;
      internalValueResult.financialServices = this._financialServices;
    }
    if (this._foodAndDining !== undefined) {
      hasAnyValues = true;
      internalValueResult.foodAndDining = this._foodAndDining;
    }
    if (this._gambling !== undefined) {
      hasAnyValues = true;
      internalValueResult.gambling = this._gambling;
    }
    if (this._games !== undefined) {
      hasAnyValues = true;
      internalValueResult.games = this._games;
    }
    if (this._government !== undefined) {
      hasAnyValues = true;
      internalValueResult.government = this._government;
    }
    if (this._gross !== undefined) {
      hasAnyValues = true;
      internalValueResult.gross = this._gross;
    }
    if (this._hacking !== undefined) {
      hasAnyValues = true;
      internalValueResult.hacking = this._hacking;
    }
    if (this._hateAndRacism !== undefined) {
      hasAnyValues = true;
      internalValueResult.hateAndRacism = this._hateAndRacism;
    }
    if (this._healthAndMedicine !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthAndMedicine = this._healthAndMedicine;
    }
    if (this._homeAndGarden !== undefined) {
      hasAnyValues = true;
      internalValueResult.homeAndGarden = this._homeAndGarden;
    }
    if (this._huntingAndFishing !== undefined) {
      hasAnyValues = true;
      internalValueResult.huntingAndFishing = this._huntingAndFishing;
    }
    if (this._illegal !== undefined) {
      hasAnyValues = true;
      internalValueResult.illegal = this._illegal;
    }
    if (this._illegalPornography !== undefined) {
      hasAnyValues = true;
      internalValueResult.illegalPornography = this._illegalPornography;
    }
    if (this._imageAndVideoSearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageAndVideoSearch = this._imageAndVideoSearch;
    }
    if (this._internetCommunications !== undefined) {
      hasAnyValues = true;
      internalValueResult.internetCommunications = this._internetCommunications;
    }
    if (this._internetPortals !== undefined) {
      hasAnyValues = true;
      internalValueResult.internetPortals = this._internetPortals;
    }
    if (this._jobSearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobSearch = this._jobSearch;
    }
    if (this._keyloggersAndMonitoring !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyloggersAndMonitoring = this._keyloggersAndMonitoring;
    }
    if (this._kids !== undefined) {
      hasAnyValues = true;
      internalValueResult.kids = this._kids;
    }
    if (this._legal !== undefined) {
      hasAnyValues = true;
      internalValueResult.legal = this._legal;
    }
    if (this._localInformation !== undefined) {
      hasAnyValues = true;
      internalValueResult.localInformation = this._localInformation;
    }
    if (this._malwareSites !== undefined) {
      hasAnyValues = true;
      internalValueResult.malwareSites = this._malwareSites;
    }
    if (this._marijuana !== undefined) {
      hasAnyValues = true;
      internalValueResult.marijuana = this._marijuana;
    }
    if (this._military !== undefined) {
      hasAnyValues = true;
      internalValueResult.military = this._military;
    }
    if (this._motorVehicles !== undefined) {
      hasAnyValues = true;
      internalValueResult.motorVehicles = this._motorVehicles;
    }
    if (this._music !== undefined) {
      hasAnyValues = true;
      internalValueResult.music = this._music;
    }
    if (this._newsAndMedia !== undefined) {
      hasAnyValues = true;
      internalValueResult.newsAndMedia = this._newsAndMedia;
    }
    if (this._nudity !== undefined) {
      hasAnyValues = true;
      internalValueResult.nudity = this._nudity;
    }
    if (this._nudityArtistic !== undefined) {
      hasAnyValues = true;
      internalValueResult.nudityArtistic = this._nudityArtistic;
    }
    if (this._onlineGreetingCards !== undefined) {
      hasAnyValues = true;
      internalValueResult.onlineGreetingCards = this._onlineGreetingCards;
    }
    if (this._openHttpProxies !== undefined) {
      hasAnyValues = true;
      internalValueResult.openHttpProxies = this._openHttpProxies;
    }
    if (this._parkedDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.parkedDomains = this._parkedDomains;
    }
    if (this._payToSurf !== undefined) {
      hasAnyValues = true;
      internalValueResult.payToSurf = this._payToSurf;
    }
    if (this._peerToPeer !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerToPeer = this._peerToPeer;
    }
    if (this._personalSitesAndBlogs !== undefined) {
      hasAnyValues = true;
      internalValueResult.personalSitesAndBlogs = this._personalSitesAndBlogs;
    }
    if (this._personalStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.personalStorage = this._personalStorage;
    }
    if (this._philosophyAndPolitics !== undefined) {
      hasAnyValues = true;
      internalValueResult.philosophyAndPolitics = this._philosophyAndPolitics;
    }
    if (this._phishingAndOtherFraud !== undefined) {
      hasAnyValues = true;
      internalValueResult.phishingAndOtherFraud = this._phishingAndOtherFraud;
    }
    if (this._privateIpAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIpAddresses = this._privateIpAddresses;
    }
    if (this._proxyAvoidAndAnonymizers !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyAvoidAndAnonymizers = this._proxyAvoidAndAnonymizers;
    }
    if (this._questionable !== undefined) {
      hasAnyValues = true;
      internalValueResult.questionable = this._questionable;
    }
    if (this._realEstate !== undefined) {
      hasAnyValues = true;
      internalValueResult.realEstate = this._realEstate;
    }
    if (this._recreationAndHobbies !== undefined) {
      hasAnyValues = true;
      internalValueResult.recreationAndHobbies = this._recreationAndHobbies;
    }
    if (this._referenceAndResearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.referenceAndResearch = this._referenceAndResearch;
    }
    if (this._religion !== undefined) {
      hasAnyValues = true;
      internalValueResult.religion = this._religion;
    }
    if (this._searchEngines !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchEngines = this._searchEngines;
    }
    if (this._sexEducation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sexEducation = this._sexEducation;
    }
    if (this._sharewareAndFreeware !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharewareAndFreeware = this._sharewareAndFreeware;
    }
    if (this._shopping !== undefined) {
      hasAnyValues = true;
      internalValueResult.shopping = this._shopping;
    }
    if (this._socialNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.socialNetwork = this._socialNetwork;
    }
    if (this._society !== undefined) {
      hasAnyValues = true;
      internalValueResult.society = this._society;
    }
    if (this._spamUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.spamUrls = this._spamUrls;
    }
    if (this._sports !== undefined) {
      hasAnyValues = true;
      internalValueResult.sports = this._sports;
    }
    if (this._spywareAndAdware !== undefined) {
      hasAnyValues = true;
      internalValueResult.spywareAndAdware = this._spywareAndAdware;
    }
    if (this._stockAdviceAndTools !== undefined) {
      hasAnyValues = true;
      internalValueResult.stockAdviceAndTools = this._stockAdviceAndTools;
    }
    if (this._streamingMedia !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamingMedia = this._streamingMedia;
    }
    if (this._swimsuitsAndIntimateApparel !== undefined) {
      hasAnyValues = true;
      internalValueResult.swimsuitsAndIntimateApparel = this._swimsuitsAndIntimateApparel;
    }
    if (this._trainingAndTools !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingAndTools = this._trainingAndTools;
    }
    if (this._translation !== undefined) {
      hasAnyValues = true;
      internalValueResult.translation = this._translation;
    }
    if (this._travel !== undefined) {
      hasAnyValues = true;
      internalValueResult.travel = this._travel;
    }
    if (this._uncategorized !== undefined) {
      hasAnyValues = true;
      internalValueResult.uncategorized = this._uncategorized;
    }
    if (this._unconfirmedSpamSources !== undefined) {
      hasAnyValues = true;
      internalValueResult.unconfirmedSpamSources = this._unconfirmedSpamSources;
    }
    if (this._violence !== undefined) {
      hasAnyValues = true;
      internalValueResult.violence = this._violence;
    }
    if (this._weapons !== undefined) {
      hasAnyValues = true;
      internalValueResult.weapons = this._weapons;
    }
    if (this._webAdvertisements !== undefined) {
      hasAnyValues = true;
      internalValueResult.webAdvertisements = this._webAdvertisements;
    }
    if (this._webBasedEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.webBasedEmail = this._webBasedEmail;
    }
    if (this._webHostingSites !== undefined) {
      hasAnyValues = true;
      internalValueResult.webHostingSites = this._webHostingSites;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderWebCategoryCategoryListStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._abortion = undefined;
      this._adultAndPornography = undefined;
      this._alcoholAndTobacco = undefined;
      this._auctions = undefined;
      this._botNets = undefined;
      this._businessAndEconomy = undefined;
      this._cdns = undefined;
      this._cheating = undefined;
      this._computerAndInternetInfo = undefined;
      this._computerAndInternetSecurity = undefined;
      this._confirmedSpamSources = undefined;
      this._cultAndOccult = undefined;
      this._dating = undefined;
      this._deadSites = undefined;
      this._drugs = undefined;
      this._dynamicallyGeneratedContent = undefined;
      this._educationalInstitutions = undefined;
      this._entertainmentAndArts = undefined;
      this._fashionAndBeauty = undefined;
      this._financialServices = undefined;
      this._foodAndDining = undefined;
      this._gambling = undefined;
      this._games = undefined;
      this._government = undefined;
      this._gross = undefined;
      this._hacking = undefined;
      this._hateAndRacism = undefined;
      this._healthAndMedicine = undefined;
      this._homeAndGarden = undefined;
      this._huntingAndFishing = undefined;
      this._illegal = undefined;
      this._illegalPornography = undefined;
      this._imageAndVideoSearch = undefined;
      this._internetCommunications = undefined;
      this._internetPortals = undefined;
      this._jobSearch = undefined;
      this._keyloggersAndMonitoring = undefined;
      this._kids = undefined;
      this._legal = undefined;
      this._localInformation = undefined;
      this._malwareSites = undefined;
      this._marijuana = undefined;
      this._military = undefined;
      this._motorVehicles = undefined;
      this._music = undefined;
      this._newsAndMedia = undefined;
      this._nudity = undefined;
      this._nudityArtistic = undefined;
      this._onlineGreetingCards = undefined;
      this._openHttpProxies = undefined;
      this._parkedDomains = undefined;
      this._payToSurf = undefined;
      this._peerToPeer = undefined;
      this._personalSitesAndBlogs = undefined;
      this._personalStorage = undefined;
      this._philosophyAndPolitics = undefined;
      this._phishingAndOtherFraud = undefined;
      this._privateIpAddresses = undefined;
      this._proxyAvoidAndAnonymizers = undefined;
      this._questionable = undefined;
      this._realEstate = undefined;
      this._recreationAndHobbies = undefined;
      this._referenceAndResearch = undefined;
      this._religion = undefined;
      this._searchEngines = undefined;
      this._sexEducation = undefined;
      this._sharewareAndFreeware = undefined;
      this._shopping = undefined;
      this._socialNetwork = undefined;
      this._society = undefined;
      this._spamUrls = undefined;
      this._sports = undefined;
      this._spywareAndAdware = undefined;
      this._stockAdviceAndTools = undefined;
      this._streamingMedia = undefined;
      this._swimsuitsAndIntimateApparel = undefined;
      this._trainingAndTools = undefined;
      this._translation = undefined;
      this._travel = undefined;
      this._uncategorized = undefined;
      this._unconfirmedSpamSources = undefined;
      this._violence = undefined;
      this._weapons = undefined;
      this._webAdvertisements = undefined;
      this._webBasedEmail = undefined;
      this._webHostingSites = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._abortion = value.abortion;
      this._adultAndPornography = value.adultAndPornography;
      this._alcoholAndTobacco = value.alcoholAndTobacco;
      this._auctions = value.auctions;
      this._botNets = value.botNets;
      this._businessAndEconomy = value.businessAndEconomy;
      this._cdns = value.cdns;
      this._cheating = value.cheating;
      this._computerAndInternetInfo = value.computerAndInternetInfo;
      this._computerAndInternetSecurity = value.computerAndInternetSecurity;
      this._confirmedSpamSources = value.confirmedSpamSources;
      this._cultAndOccult = value.cultAndOccult;
      this._dating = value.dating;
      this._deadSites = value.deadSites;
      this._drugs = value.drugs;
      this._dynamicallyGeneratedContent = value.dynamicallyGeneratedContent;
      this._educationalInstitutions = value.educationalInstitutions;
      this._entertainmentAndArts = value.entertainmentAndArts;
      this._fashionAndBeauty = value.fashionAndBeauty;
      this._financialServices = value.financialServices;
      this._foodAndDining = value.foodAndDining;
      this._gambling = value.gambling;
      this._games = value.games;
      this._government = value.government;
      this._gross = value.gross;
      this._hacking = value.hacking;
      this._hateAndRacism = value.hateAndRacism;
      this._healthAndMedicine = value.healthAndMedicine;
      this._homeAndGarden = value.homeAndGarden;
      this._huntingAndFishing = value.huntingAndFishing;
      this._illegal = value.illegal;
      this._illegalPornography = value.illegalPornography;
      this._imageAndVideoSearch = value.imageAndVideoSearch;
      this._internetCommunications = value.internetCommunications;
      this._internetPortals = value.internetPortals;
      this._jobSearch = value.jobSearch;
      this._keyloggersAndMonitoring = value.keyloggersAndMonitoring;
      this._kids = value.kids;
      this._legal = value.legal;
      this._localInformation = value.localInformation;
      this._malwareSites = value.malwareSites;
      this._marijuana = value.marijuana;
      this._military = value.military;
      this._motorVehicles = value.motorVehicles;
      this._music = value.music;
      this._newsAndMedia = value.newsAndMedia;
      this._nudity = value.nudity;
      this._nudityArtistic = value.nudityArtistic;
      this._onlineGreetingCards = value.onlineGreetingCards;
      this._openHttpProxies = value.openHttpProxies;
      this._parkedDomains = value.parkedDomains;
      this._payToSurf = value.payToSurf;
      this._peerToPeer = value.peerToPeer;
      this._personalSitesAndBlogs = value.personalSitesAndBlogs;
      this._personalStorage = value.personalStorage;
      this._philosophyAndPolitics = value.philosophyAndPolitics;
      this._phishingAndOtherFraud = value.phishingAndOtherFraud;
      this._privateIpAddresses = value.privateIpAddresses;
      this._proxyAvoidAndAnonymizers = value.proxyAvoidAndAnonymizers;
      this._questionable = value.questionable;
      this._realEstate = value.realEstate;
      this._recreationAndHobbies = value.recreationAndHobbies;
      this._referenceAndResearch = value.referenceAndResearch;
      this._religion = value.religion;
      this._searchEngines = value.searchEngines;
      this._sexEducation = value.sexEducation;
      this._sharewareAndFreeware = value.sharewareAndFreeware;
      this._shopping = value.shopping;
      this._socialNetwork = value.socialNetwork;
      this._society = value.society;
      this._spamUrls = value.spamUrls;
      this._sports = value.sports;
      this._spywareAndAdware = value.spywareAndAdware;
      this._stockAdviceAndTools = value.stockAdviceAndTools;
      this._streamingMedia = value.streamingMedia;
      this._swimsuitsAndIntimateApparel = value.swimsuitsAndIntimateApparel;
      this._trainingAndTools = value.trainingAndTools;
      this._translation = value.translation;
      this._travel = value.travel;
      this._uncategorized = value.uncategorized;
      this._unconfirmedSpamSources = value.unconfirmedSpamSources;
      this._violence = value.violence;
      this._weapons = value.weapons;
      this._webAdvertisements = value.webAdvertisements;
      this._webBasedEmail = value.webBasedEmail;
      this._webHostingSites = value.webHostingSites;
    }
  }

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

  // confirmed_spam_sources - computed: false, optional: true, required: false
  private _confirmedSpamSources?: number; 
  public get confirmedSpamSources() {
    return this.getNumberAttribute('confirmed_spam_sources');
  }
  public set confirmedSpamSources(value: number) {
    this._confirmedSpamSources = value;
  }
  public resetConfirmedSpamSources() {
    this._confirmedSpamSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confirmedSpamSourcesInput() {
    return this._confirmedSpamSources;
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

  // food_and_dining - computed: false, optional: true, required: false
  private _foodAndDining?: number; 
  public get foodAndDining() {
    return this.getNumberAttribute('food_and_dining');
  }
  public set foodAndDining(value: number) {
    this._foodAndDining = value;
  }
  public resetFoodAndDining() {
    this._foodAndDining = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get foodAndDiningInput() {
    return this._foodAndDining;
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

  // open_http_proxies - computed: false, optional: true, required: false
  private _openHttpProxies?: number; 
  public get openHttpProxies() {
    return this.getNumberAttribute('open_http_proxies');
  }
  public set openHttpProxies(value: number) {
    this._openHttpProxies = value;
  }
  public resetOpenHttpProxies() {
    this._openHttpProxies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openHttpProxiesInput() {
    return this._openHttpProxies;
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

  // private_ip_addresses - computed: false, optional: true, required: false
  private _privateIpAddresses?: number; 
  public get privateIpAddresses() {
    return this.getNumberAttribute('private_ip_addresses');
  }
  public set privateIpAddresses(value: number) {
    this._privateIpAddresses = value;
  }
  public resetPrivateIpAddresses() {
    this._privateIpAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAddressesInput() {
    return this._privateIpAddresses;
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

  // unconfirmed_spam_sources - computed: false, optional: true, required: false
  private _unconfirmedSpamSources?: number; 
  public get unconfirmedSpamSources() {
    return this.getNumberAttribute('unconfirmed_spam_sources');
  }
  public set unconfirmedSpamSources(value: number) {
    this._unconfirmedSpamSources = value;
  }
  public resetUnconfirmedSpamSources() {
    this._unconfirmedSpamSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unconfirmedSpamSourcesInput() {
    return this._unconfirmedSpamSources;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats thunder_web_category_category_list_stats}
*/
export class DataThunderWebCategoryCategoryListStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_web_category_category_list_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderWebCategoryCategoryListStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderWebCategoryCategoryListStats to import
  * @param importFromId The id of the existing DataThunderWebCategoryCategoryListStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderWebCategoryCategoryListStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_web_category_category_list_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_category_list_stats thunder_web_category_category_list_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderWebCategoryCategoryListStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderWebCategoryCategoryListStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_web_category_category_list_stats',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._stats.internalValue = config.stats;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderWebCategoryCategoryListStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderWebCategoryCategoryListStatsStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      stats: dataThunderWebCategoryCategoryListStatsStatsToTerraform(this._stats.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stats: {
        value: dataThunderWebCategoryCategoryListStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderWebCategoryCategoryListStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
