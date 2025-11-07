// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebCategoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Maximum cache size for storing cloud query results
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#cloud_query_cache_size WebCategory#cloud_query_cache_size}
  */
  readonly cloudQueryCacheSize?: number;
  /**
  * Disables cloud queries for URL's not present in local database(default enable)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#cloud_query_disable WebCategory#cloud_query_disable}
  */
  readonly cloudQueryDisable?: number;
  /**
  * BrightCloud Database Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#database_server WebCategory#database_server}
  */
  readonly databaseServer?: string;
  /**
  * Time of day to update database (default: 00:00)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#db_update_time WebCategory#db_update_time}
  */
  readonly dbUpdateTime?: string;
  /**
  * Enable BrightCloud SDK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#enable WebCategory#enable}
  */
  readonly enable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#id WebCategory#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Disables online queries for license. By default it is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#online_check_disable WebCategory#online_check_disable}
  */
  readonly onlineCheckDisable?: number;
  /**
  * BrightCloud Query Server Listening Port(default 80)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#port WebCategory#port}
  */
  readonly port?: number;
  /**
  * Enable data plane logging to a remote syslog server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#remote_syslog_enable WebCategory#remote_syslog_enable}
  */
  readonly remoteSyslogEnable?: number;
  /**
  * Maximum cache size for storing RTU updates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#rtu_cache_size WebCategory#rtu_cache_size}
  */
  readonly rtuCacheSize?: number;
  /**
  * Disables real time updates(default enable)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#rtu_update_disable WebCategory#rtu_update_disable}
  */
  readonly rtuUpdateDisable?: number;
  /**
  * Interval to check for real time updates if enabled in mins(default 60)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#rtu_update_interval WebCategory#rtu_update_interval}
  */
  readonly rtuUpdateInterval?: number;
  /**
  * BrightCloud Query Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#server WebCategory#server}
  */
  readonly server?: string;
  /**
  * BrightCloud Servers Timeout in seconds (default: 15s)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#server_timeout WebCategory#server_timeout}
  */
  readonly serverTimeout?: number;
  /**
  * BrightCloud Servers SSL Port(default 443)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#ssl_port WebCategory#ssl_port}
  */
  readonly sslPort?: number;
  /**
  * Use management interface for all communication with BrightCloud
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#use_mgmt_port WebCategory#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#uuid WebCategory#uuid}
  */
  readonly uuid?: string;
  /**
  * bypassed_urls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#bypassed_urls WebCategory#bypassed_urls}
  */
  readonly bypassedUrls?: WebCategoryBypassedUrls;
  /**
  * category_list_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#category_list_list WebCategory#category_list_list}
  */
  readonly categoryListList?: WebCategoryCategoryListListStruct[] | cdktf.IResolvable;
  /**
  * intercepted_urls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#intercepted_urls WebCategory#intercepted_urls}
  */
  readonly interceptedUrls?: WebCategoryInterceptedUrls;
  /**
  * license block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#license WebCategory#license}
  */
  readonly license?: WebCategoryLicense;
  /**
  * proxy_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#proxy_server WebCategory#proxy_server}
  */
  readonly proxyServer?: WebCategoryProxyServer;
  /**
  * reputation_scope_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#reputation_scope_list WebCategory#reputation_scope_list}
  */
  readonly reputationScopeList?: WebCategoryReputationScopeListStruct[] | cdktf.IResolvable;
  /**
  * statistics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#statistics WebCategory#statistics}
  */
  readonly statistics?: WebCategoryStatistics;
  /**
  * url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#url WebCategory#url}
  */
  readonly url?: WebCategoryUrl;
  /**
  * web_reputation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#web_reputation WebCategory#web_reputation}
  */
  readonly webReputation?: WebCategoryWebReputation;
}
export interface WebCategoryBypassedUrls {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#uuid WebCategory#uuid}
  */
  readonly uuid?: string;
}

export function webCategoryBypassedUrlsToTerraform(struct?: WebCategoryBypassedUrlsOutputReference | WebCategoryBypassedUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function webCategoryBypassedUrlsToHclTerraform(struct?: WebCategoryBypassedUrlsOutputReference | WebCategoryBypassedUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebCategoryBypassedUrlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebCategoryBypassedUrls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebCategoryBypassedUrls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
}
export interface WebCategoryCategoryListListSamplingEnable {
  /**
  * 'all': all; 'uncategorized': uncategorized category; 'real-estate': real estate category; 'computer-and-internet-security': computer and internet security category; 'financial-services': financial services category; 'business-and-economy': business and economy category; 'computer-and-internet-info': computer and internet info category; 'auctions': auctions category; 'shopping': shopping category; 'cult-and-occult': cult and occult category; 'travel': travel category; 'drugs': drugs category; 'adult-and-pornography': adult and pornography category; 'home-and-garden': home and garden category; 'military': military category; 'social-network': social network category; 'dead-sites': dead sites category; 'stock-advice-and-tools': stock advice and tools category; 'training-and-tools': training and tools category; 'dating': dating category; 'sex-education': sex education category; 'religion': religion category; 'entertainment-and-arts': entertainment and arts category; 'personal-sites-and-blogs': personal sites and blogs category; 'legal': legal category; 'local-information': local information category; 'streaming-media': streaming media category; 'job-search': job search category; 'gambling': gambling category; 'translation': translation category; 'reference-and-research': reference and research category; 'shareware-and-freeware': shareware and freeware category; 'peer-to-peer': peer to peer category; 'marijuana': marijuana category; 'hacking': hacking category; 'games': games category; 'philosophy-and-politics': philosophy and politics category; 'weapons': weapons category; 'pay-to-surf': pay to surf category; 'hunting-and-fishing': hunting and fishing category; 'society': society category; 'educational-institutions': educational institutions category; 'online-greeting-cards': online greeting cards category; 'sports': sports category; 'swimsuits-and-intimate-apparel': swimsuits and intimate apparel category; 'questionable': questionable category; 'kids': kids category; 'hate-and-racism': hate and racism category; 'personal-storage': personal storage category; 'violence': violence category; 'keyloggers-and-monitoring': keyloggers and monitoring category; 'search-engines': search engines category; 'internet-portals': internet portals category; 'web-advertisements': web advertisements category; 'cheating': cheating category; 'gross': gross category; 'web-based-email': web based email category; 'malware-sites': malware sites category; 'phishing-and-other-fraud': phishing and other fraud category; 'proxy-avoid-and-anonymizers': proxy avoid and anonymizers category; 'spyware-and-adware': spyware and adware category; 'music': music category; 'government': government category; 'nudity': nudity category; 'news-and-media': news and media category; 'illegal': illegal category; 'CDNs': content delivery networks category; 'internet-communications': internet communications category; 'bot-nets': bot nets category; 'abortion': abortion category; 'health-and-medicine': health and medicine category; 'confirmed-SPAM-sources': confirmed SPAM sources category; 'SPAM-URLs': SPAM URLs category; 'unconfirmed-SPAM-sources': unconfirmed SPAM sources category; 'open-HTTP-proxies': open HTTP proxies category; 'dynamically-generated-content': dynamically generated content category; 'parked-domains': parked domains category; 'alcohol-and-tobacco': alcohol and tobacco category; 'private-IP-addresses': private IP addresses category; 'image-and-video-search': image and video search category; 'fashion-and-beauty': fashion and beauty category; 'recreation-and-hobbies': recreation and hobbies category; 'motor-vehicles': motor vehicles category; 'web-hosting-sites': web hosting sites category; 'food-and-dining': food and dining category; 'nudity-artistic': nudity join entertainment and arts; 'illegal-pornography': illegal join adult and pornography;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#counters1 WebCategory#counters1}
  */
  readonly counters1?: string;
}

export function webCategoryCategoryListListSamplingEnableToTerraform(struct?: WebCategoryCategoryListListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function webCategoryCategoryListListSamplingEnableToHclTerraform(struct?: WebCategoryCategoryListListSamplingEnable | cdktf.IResolvable): any {
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

export class WebCategoryCategoryListListSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebCategoryCategoryListListSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WebCategoryCategoryListListSamplingEnable | cdktf.IResolvable | undefined) {
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

export class WebCategoryCategoryListListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : WebCategoryCategoryListListSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): WebCategoryCategoryListListSamplingEnableOutputReference {
    return new WebCategoryCategoryListListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebCategoryCategoryListListStruct {
  /**
  * Category Abortion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#abortion WebCategory#abortion}
  */
  readonly abortion?: number;
  /**
  * Category Adult and Pornography
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#adult_and_pornography WebCategory#adult_and_pornography}
  */
  readonly adultAndPornography?: number;
  /**
  * Category Alcohol and Tobacco
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#alcohol_and_tobacco WebCategory#alcohol_and_tobacco}
  */
  readonly alcoholAndTobacco?: number;
  /**
  * Category Auctions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#auctions WebCategory#auctions}
  */
  readonly auctions?: number;
  /**
  * Category Bot Nets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#bot_nets WebCategory#bot_nets}
  */
  readonly botNets?: number;
  /**
  * Category Business and Economy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#business_and_economy WebCategory#business_and_economy}
  */
  readonly businessAndEconomy?: number;
  /**
  * Category CDNs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#cdns WebCategory#cdns}
  */
  readonly cdns?: number;
  /**
  * Category Cheating
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#cheating WebCategory#cheating}
  */
  readonly cheating?: number;
  /**
  * Category Computer and Internet Info
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#computer_and_internet_info WebCategory#computer_and_internet_info}
  */
  readonly computerAndInternetInfo?: number;
  /**
  * Category Computer and Internet Security
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#computer_and_internet_security WebCategory#computer_and_internet_security}
  */
  readonly computerAndInternetSecurity?: number;
  /**
  * Category Cult and Occult
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#cult_and_occult WebCategory#cult_and_occult}
  */
  readonly cultAndOccult?: number;
  /**
  * Category Dating
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#dating WebCategory#dating}
  */
  readonly dating?: number;
  /**
  * Category Dead Sites (db Ops only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#dead_sites WebCategory#dead_sites}
  */
  readonly deadSites?: number;
  /**
  * Category Abused Drugs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#drugs WebCategory#drugs}
  */
  readonly drugs?: number;
  /**
  * Dynamically Generated Content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#dynamically_generated_content WebCategory#dynamically_generated_content}
  */
  readonly dynamicallyGeneratedContent?: number;
  /**
  * Category Educational Institutions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#educational_institutions WebCategory#educational_institutions}
  */
  readonly educationalInstitutions?: number;
  /**
  * Category Entertainment and Arts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#entertainment_and_arts WebCategory#entertainment_and_arts}
  */
  readonly entertainmentAndArts?: number;
  /**
  * Category Fashion and Beauty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#fashion_and_beauty WebCategory#fashion_and_beauty}
  */
  readonly fashionAndBeauty?: number;
  /**
  * Category Financial Services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#financial_services WebCategory#financial_services}
  */
  readonly financialServices?: number;
  /**
  * Category Gambling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#gambling WebCategory#gambling}
  */
  readonly gambling?: number;
  /**
  * Category Games
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#games WebCategory#games}
  */
  readonly games?: number;
  /**
  * Category Government
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#government WebCategory#government}
  */
  readonly government?: number;
  /**
  * Category Gross
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#gross WebCategory#gross}
  */
  readonly gross?: number;
  /**
  * Category Hacking
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#hacking WebCategory#hacking}
  */
  readonly hacking?: number;
  /**
  * Category Hate and Racism
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#hate_and_racism WebCategory#hate_and_racism}
  */
  readonly hateAndRacism?: number;
  /**
  * Category Health and Medicine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#health_and_medicine WebCategory#health_and_medicine}
  */
  readonly healthAndMedicine?: number;
  /**
  * Category Home and Garden
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#home_and_garden WebCategory#home_and_garden}
  */
  readonly homeAndGarden?: number;
  /**
  * Category Hunting and Fishing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#hunting_and_fishing WebCategory#hunting_and_fishing}
  */
  readonly huntingAndFishing?: number;
  /**
  * Category Illegal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#illegal WebCategory#illegal}
  */
  readonly illegal?: number;
  /**
  * Category Illegal join Adult and Pornography
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#illegal_pornography WebCategory#illegal_pornography}
  */
  readonly illegalPornography?: number;
  /**
  * Category Image and Video Search
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#image_and_video_search WebCategory#image_and_video_search}
  */
  readonly imageAndVideoSearch?: number;
  /**
  * Category Internet Communications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#internet_communications WebCategory#internet_communications}
  */
  readonly internetCommunications?: number;
  /**
  * Category Internet Portals
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#internet_portals WebCategory#internet_portals}
  */
  readonly internetPortals?: number;
  /**
  * Category Job Search
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#job_search WebCategory#job_search}
  */
  readonly jobSearch?: number;
  /**
  * Category Keyloggers and Monitoring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#keyloggers_and_monitoring WebCategory#keyloggers_and_monitoring}
  */
  readonly keyloggersAndMonitoring?: number;
  /**
  * Category Kids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#kids WebCategory#kids}
  */
  readonly kids?: number;
  /**
  * Category Legal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#legal WebCategory#legal}
  */
  readonly legal?: number;
  /**
  * Category Local Information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#local_information WebCategory#local_information}
  */
  readonly localInformation?: number;
  /**
  * Category Malware Sites
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#malware_sites WebCategory#malware_sites}
  */
  readonly malwareSites?: number;
  /**
  * Category Marijuana
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#marijuana WebCategory#marijuana}
  */
  readonly marijuana?: number;
  /**
  * Category Military
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#military WebCategory#military}
  */
  readonly military?: number;
  /**
  * Category Motor Vehicles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#motor_vehicles WebCategory#motor_vehicles}
  */
  readonly motorVehicles?: number;
  /**
  * Category Music
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#music WebCategory#music}
  */
  readonly music?: number;
  /**
  * Web Category List name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#name WebCategory#name}
  */
  readonly name: string;
  /**
  * Category News and Media
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#news_and_media WebCategory#news_and_media}
  */
  readonly newsAndMedia?: number;
  /**
  * Category Nudity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#nudity WebCategory#nudity}
  */
  readonly nudity?: number;
  /**
  * Category Nudity join Entertainment and Arts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#nudity_artistic WebCategory#nudity_artistic}
  */
  readonly nudityArtistic?: number;
  /**
  * Category Online Greeting cards
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#online_greeting_cards WebCategory#online_greeting_cards}
  */
  readonly onlineGreetingCards?: number;
  /**
  * Category Parked Domains
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#parked_domains WebCategory#parked_domains}
  */
  readonly parkedDomains?: number;
  /**
  * Category Pay to Surf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#pay_to_surf WebCategory#pay_to_surf}
  */
  readonly payToSurf?: number;
  /**
  * Category Peer to Peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#peer_to_peer WebCategory#peer_to_peer}
  */
  readonly peerToPeer?: number;
  /**
  * Category Personal sites and Blogs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#personal_sites_and_blogs WebCategory#personal_sites_and_blogs}
  */
  readonly personalSitesAndBlogs?: number;
  /**
  * Category Personal Storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#personal_storage WebCategory#personal_storage}
  */
  readonly personalStorage?: number;
  /**
  * Category Philosophy and Political Advocacy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#philosophy_and_politics WebCategory#philosophy_and_politics}
  */
  readonly philosophyAndPolitics?: number;
  /**
  * Category Phishing and Other Frauds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#phishing_and_other_fraud WebCategory#phishing_and_other_fraud}
  */
  readonly phishingAndOtherFraud?: number;
  /**
  * Category Proxy Avoid and Anonymizers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#proxy_avoid_and_anonymizers WebCategory#proxy_avoid_and_anonymizers}
  */
  readonly proxyAvoidAndAnonymizers?: number;
  /**
  * Category Questionable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#questionable WebCategory#questionable}
  */
  readonly questionable?: number;
  /**
  * Category Real Estate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#real_estate WebCategory#real_estate}
  */
  readonly realEstate?: number;
  /**
  * Category Recreation and Hobbies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#recreation_and_hobbies WebCategory#recreation_and_hobbies}
  */
  readonly recreationAndHobbies?: number;
  /**
  * Category Reference and Research
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#reference_and_research WebCategory#reference_and_research}
  */
  readonly referenceAndResearch?: number;
  /**
  * Category Religion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#religion WebCategory#religion}
  */
  readonly religion?: number;
  /**
  * Category Search Engines
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#search_engines WebCategory#search_engines}
  */
  readonly searchEngines?: number;
  /**
  * Category Sex Education
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#sex_education WebCategory#sex_education}
  */
  readonly sexEducation?: number;
  /**
  * Category Shareware and Freeware
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#shareware_and_freeware WebCategory#shareware_and_freeware}
  */
  readonly sharewareAndFreeware?: number;
  /**
  * Category Shopping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#shopping WebCategory#shopping}
  */
  readonly shopping?: number;
  /**
  * Category Social Network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#social_network WebCategory#social_network}
  */
  readonly socialNetwork?: number;
  /**
  * Category Society
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#society WebCategory#society}
  */
  readonly society?: number;
  /**
  * Category SPAM URLs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#spam_urls WebCategory#spam_urls}
  */
  readonly spamUrls?: number;
  /**
  * Category Sports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#sports WebCategory#sports}
  */
  readonly sports?: number;
  /**
  * Category Spyware and Adware
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#spyware_and_adware WebCategory#spyware_and_adware}
  */
  readonly spywareAndAdware?: number;
  /**
  * Category Stock Advice and Tools
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#stock_advice_and_tools WebCategory#stock_advice_and_tools}
  */
  readonly stockAdviceAndTools?: number;
  /**
  * Category Streaming Media
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#streaming_media WebCategory#streaming_media}
  */
  readonly streamingMedia?: number;
  /**
  * Category Swimsuits and Intimate Apparel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#swimsuits_and_intimate_apparel WebCategory#swimsuits_and_intimate_apparel}
  */
  readonly swimsuitsAndIntimateApparel?: number;
  /**
  * Category Training and Tools
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#training_and_tools WebCategory#training_and_tools}
  */
  readonly trainingAndTools?: number;
  /**
  * Category Translation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#translation WebCategory#translation}
  */
  readonly translation?: number;
  /**
  * Category Travel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#travel WebCategory#travel}
  */
  readonly travel?: number;
  /**
  * Uncategorized URLs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#uncategorized WebCategory#uncategorized}
  */
  readonly uncategorized?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#user_tag WebCategory#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#uuid WebCategory#uuid}
  */
  readonly uuid?: string;
  /**
  * Category Violence
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#violence WebCategory#violence}
  */
  readonly violence?: number;
  /**
  * Category Weapons
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#weapons WebCategory#weapons}
  */
  readonly weapons?: number;
  /**
  * Category Web Advertisements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#web_advertisements WebCategory#web_advertisements}
  */
  readonly webAdvertisements?: number;
  /**
  * Category Web based email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#web_based_email WebCategory#web_based_email}
  */
  readonly webBasedEmail?: number;
  /**
  * Category Web Hosting Sites
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#web_hosting_sites WebCategory#web_hosting_sites}
  */
  readonly webHostingSites?: number;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#sampling_enable WebCategory#sampling_enable}
  */
  readonly samplingEnable?: WebCategoryCategoryListListSamplingEnable[] | cdktf.IResolvable;
}

export function webCategoryCategoryListListStructToTerraform(struct?: WebCategoryCategoryListListStruct | cdktf.IResolvable): any {
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
    cult_and_occult: cdktf.numberToTerraform(struct!.cultAndOccult),
    dating: cdktf.numberToTerraform(struct!.dating),
    dead_sites: cdktf.numberToTerraform(struct!.deadSites),
    drugs: cdktf.numberToTerraform(struct!.drugs),
    dynamically_generated_content: cdktf.numberToTerraform(struct!.dynamicallyGeneratedContent),
    educational_institutions: cdktf.numberToTerraform(struct!.educationalInstitutions),
    entertainment_and_arts: cdktf.numberToTerraform(struct!.entertainmentAndArts),
    fashion_and_beauty: cdktf.numberToTerraform(struct!.fashionAndBeauty),
    financial_services: cdktf.numberToTerraform(struct!.financialServices),
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
    name: cdktf.stringToTerraform(struct!.name),
    news_and_media: cdktf.numberToTerraform(struct!.newsAndMedia),
    nudity: cdktf.numberToTerraform(struct!.nudity),
    nudity_artistic: cdktf.numberToTerraform(struct!.nudityArtistic),
    online_greeting_cards: cdktf.numberToTerraform(struct!.onlineGreetingCards),
    parked_domains: cdktf.numberToTerraform(struct!.parkedDomains),
    pay_to_surf: cdktf.numberToTerraform(struct!.payToSurf),
    peer_to_peer: cdktf.numberToTerraform(struct!.peerToPeer),
    personal_sites_and_blogs: cdktf.numberToTerraform(struct!.personalSitesAndBlogs),
    personal_storage: cdktf.numberToTerraform(struct!.personalStorage),
    philosophy_and_politics: cdktf.numberToTerraform(struct!.philosophyAndPolitics),
    phishing_and_other_fraud: cdktf.numberToTerraform(struct!.phishingAndOtherFraud),
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
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    violence: cdktf.numberToTerraform(struct!.violence),
    weapons: cdktf.numberToTerraform(struct!.weapons),
    web_advertisements: cdktf.numberToTerraform(struct!.webAdvertisements),
    web_based_email: cdktf.numberToTerraform(struct!.webBasedEmail),
    web_hosting_sites: cdktf.numberToTerraform(struct!.webHostingSites),
    sampling_enable: cdktf.listMapper(webCategoryCategoryListListSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function webCategoryCategoryListListStructToHclTerraform(struct?: WebCategoryCategoryListListStruct | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    sampling_enable: {
      value: cdktf.listMapperHcl(webCategoryCategoryListListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "WebCategoryCategoryListListSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebCategoryCategoryListListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebCategoryCategoryListListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
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
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
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
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebCategoryCategoryListListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._cultAndOccult = undefined;
      this._dating = undefined;
      this._deadSites = undefined;
      this._drugs = undefined;
      this._dynamicallyGeneratedContent = undefined;
      this._educationalInstitutions = undefined;
      this._entertainmentAndArts = undefined;
      this._fashionAndBeauty = undefined;
      this._financialServices = undefined;
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
      this._name = undefined;
      this._newsAndMedia = undefined;
      this._nudity = undefined;
      this._nudityArtistic = undefined;
      this._onlineGreetingCards = undefined;
      this._parkedDomains = undefined;
      this._payToSurf = undefined;
      this._peerToPeer = undefined;
      this._personalSitesAndBlogs = undefined;
      this._personalStorage = undefined;
      this._philosophyAndPolitics = undefined;
      this._phishingAndOtherFraud = undefined;
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
      this._userTag = undefined;
      this._uuid = undefined;
      this._violence = undefined;
      this._weapons = undefined;
      this._webAdvertisements = undefined;
      this._webBasedEmail = undefined;
      this._webHostingSites = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
      this._cultAndOccult = value.cultAndOccult;
      this._dating = value.dating;
      this._deadSites = value.deadSites;
      this._drugs = value.drugs;
      this._dynamicallyGeneratedContent = value.dynamicallyGeneratedContent;
      this._educationalInstitutions = value.educationalInstitutions;
      this._entertainmentAndArts = value.entertainmentAndArts;
      this._fashionAndBeauty = value.fashionAndBeauty;
      this._financialServices = value.financialServices;
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
      this._name = value.name;
      this._newsAndMedia = value.newsAndMedia;
      this._nudity = value.nudity;
      this._nudityArtistic = value.nudityArtistic;
      this._onlineGreetingCards = value.onlineGreetingCards;
      this._parkedDomains = value.parkedDomains;
      this._payToSurf = value.payToSurf;
      this._peerToPeer = value.peerToPeer;
      this._personalSitesAndBlogs = value.personalSitesAndBlogs;
      this._personalStorage = value.personalStorage;
      this._philosophyAndPolitics = value.philosophyAndPolitics;
      this._phishingAndOtherFraud = value.phishingAndOtherFraud;
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
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._violence = value.violence;
      this._weapons = value.weapons;
      this._webAdvertisements = value.webAdvertisements;
      this._webBasedEmail = value.webBasedEmail;
      this._webHostingSites = value.webHostingSites;
      this._samplingEnable.internalValue = value.samplingEnable;
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
  private _samplingEnable = new WebCategoryCategoryListListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: WebCategoryCategoryListListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

export class WebCategoryCategoryListListStructList extends cdktf.ComplexList {
  public internalValue? : WebCategoryCategoryListListStruct[] | cdktf.IResolvable

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
  public get(index: number): WebCategoryCategoryListListStructOutputReference {
    return new WebCategoryCategoryListListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebCategoryInterceptedUrls {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#uuid WebCategory#uuid}
  */
  readonly uuid?: string;
}

export function webCategoryInterceptedUrlsToTerraform(struct?: WebCategoryInterceptedUrlsOutputReference | WebCategoryInterceptedUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function webCategoryInterceptedUrlsToHclTerraform(struct?: WebCategoryInterceptedUrlsOutputReference | WebCategoryInterceptedUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebCategoryInterceptedUrlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebCategoryInterceptedUrls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebCategoryInterceptedUrls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
}
export interface WebCategoryLicense {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#uuid WebCategory#uuid}
  */
  readonly uuid?: string;
}

export function webCategoryLicenseToTerraform(struct?: WebCategoryLicenseOutputReference | WebCategoryLicense): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function webCategoryLicenseToHclTerraform(struct?: WebCategoryLicenseOutputReference | WebCategoryLicense): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebCategoryLicenseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebCategoryLicense | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebCategoryLicense | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
}
export interface WebCategoryProxyServer {
  /**
  * 'ntlm': NTLM authentication(default); 'basic': Basic authentication;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#auth_type WebCategory#auth_type}
  */
  readonly authType?: string;
  /**
  * Realm for NTLM authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#domain WebCategory#domain}
  */
  readonly domain?: string;
  /**
  * Proxy server HTTP port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#http_port WebCategory#http_port}
  */
  readonly httpPort?: number;
  /**
  * Proxy server HTTPS port(HTTP port will be used if not configured)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#https_port WebCategory#https_port}
  */
  readonly httpsPort?: number;
  /**
  * Password for proxy authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#password WebCategory#password}
  */
  readonly password?: number;
  /**
  * Proxy server hostname or IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#proxy_host WebCategory#proxy_host}
  */
  readonly proxyHost?: string;
  /**
  * password value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#secret_string WebCategory#secret_string}
  */
  readonly secretString?: string;
  /**
  * Username for proxy authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#username WebCategory#username}
  */
  readonly username?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#uuid WebCategory#uuid}
  */
  readonly uuid?: string;
}

export function webCategoryProxyServerToTerraform(struct?: WebCategoryProxyServerOutputReference | WebCategoryProxyServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_type: cdktf.stringToTerraform(struct!.authType),
    domain: cdktf.stringToTerraform(struct!.domain),
    http_port: cdktf.numberToTerraform(struct!.httpPort),
    https_port: cdktf.numberToTerraform(struct!.httpsPort),
    password: cdktf.numberToTerraform(struct!.password),
    proxy_host: cdktf.stringToTerraform(struct!.proxyHost),
    secret_string: cdktf.stringToTerraform(struct!.secretString),
    username: cdktf.stringToTerraform(struct!.username),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function webCategoryProxyServerToHclTerraform(struct?: WebCategoryProxyServerOutputReference | WebCategoryProxyServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_port: {
      value: cdktf.numberToHclTerraform(struct!.httpPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    https_port: {
      value: cdktf.numberToHclTerraform(struct!.httpsPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password: {
      value: cdktf.numberToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxy_host: {
      value: cdktf.stringToHclTerraform(struct!.proxyHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_string: {
      value: cdktf.stringToHclTerraform(struct!.secretString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebCategoryProxyServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebCategoryProxyServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._httpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPort = this._httpPort;
    }
    if (this._httpsPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsPort = this._httpsPort;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._proxyHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyHost = this._proxyHost;
    }
    if (this._secretString !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretString = this._secretString;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebCategoryProxyServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authType = undefined;
      this._domain = undefined;
      this._httpPort = undefined;
      this._httpsPort = undefined;
      this._password = undefined;
      this._proxyHost = undefined;
      this._secretString = undefined;
      this._username = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authType = value.authType;
      this._domain = value.domain;
      this._httpPort = value.httpPort;
      this._httpsPort = value.httpsPort;
      this._password = value.password;
      this._proxyHost = value.proxyHost;
      this._secretString = value.secretString;
      this._username = value.username;
      this._uuid = value.uuid;
    }
  }

  // auth_type - computed: false, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // http_port - computed: false, optional: true, required: false
  private _httpPort?: number; 
  public get httpPort() {
    return this.getNumberAttribute('http_port');
  }
  public set httpPort(value: number) {
    this._httpPort = value;
  }
  public resetHttpPort() {
    this._httpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPortInput() {
    return this._httpPort;
  }

  // https_port - computed: false, optional: true, required: false
  private _httpsPort?: number; 
  public get httpsPort() {
    return this.getNumberAttribute('https_port');
  }
  public set httpsPort(value: number) {
    this._httpsPort = value;
  }
  public resetHttpsPort() {
    this._httpsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsPortInput() {
    return this._httpsPort;
  }

  // password - computed: false, optional: true, required: false
  private _password?: number; 
  public get password() {
    return this.getNumberAttribute('password');
  }
  public set password(value: number) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // proxy_host - computed: false, optional: true, required: false
  private _proxyHost?: string; 
  public get proxyHost() {
    return this.getStringAttribute('proxy_host');
  }
  public set proxyHost(value: string) {
    this._proxyHost = value;
  }
  public resetProxyHost() {
    this._proxyHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyHostInput() {
    return this._proxyHost;
  }

  // secret_string - computed: false, optional: true, required: false
  private _secretString?: string; 
  public get secretString() {
    return this.getStringAttribute('secret_string');
  }
  public set secretString(value: string) {
    this._secretString = value;
  }
  public resetSecretString() {
    this._secretString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretStringInput() {
    return this._secretString;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
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
}
export interface WebCategoryReputationScopeListGreaterThan {
  /**
  * Reputation score is greater than or equal to 61
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#greater_low_risk WebCategory#greater_low_risk}
  */
  readonly greaterLowRisk?: number;
  /**
  * Reputation score is greater than or equal to 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#greater_malicious WebCategory#greater_malicious}
  */
  readonly greaterMalicious?: number;
  /**
  * Reputation score is greater than or equal to 41
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#greater_moderate_risk WebCategory#greater_moderate_risk}
  */
  readonly greaterModerateRisk?: number;
  /**
  * Reputation score is greater than or equal to 21
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#greater_suspicious WebCategory#greater_suspicious}
  */
  readonly greaterSuspicious?: number;
  /**
  * Reputation score is greater than or equal to the customized score (1-100)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#greater_threshold WebCategory#greater_threshold}
  */
  readonly greaterThreshold?: number;
  /**
  * Reputation score is greater than or equal to 81
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#greater_trustworthy WebCategory#greater_trustworthy}
  */
  readonly greaterTrustworthy?: number;
}

export function webCategoryReputationScopeListGreaterThanToTerraform(struct?: WebCategoryReputationScopeListGreaterThanOutputReference | WebCategoryReputationScopeListGreaterThan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    greater_low_risk: cdktf.numberToTerraform(struct!.greaterLowRisk),
    greater_malicious: cdktf.numberToTerraform(struct!.greaterMalicious),
    greater_moderate_risk: cdktf.numberToTerraform(struct!.greaterModerateRisk),
    greater_suspicious: cdktf.numberToTerraform(struct!.greaterSuspicious),
    greater_threshold: cdktf.numberToTerraform(struct!.greaterThreshold),
    greater_trustworthy: cdktf.numberToTerraform(struct!.greaterTrustworthy),
  }
}


export function webCategoryReputationScopeListGreaterThanToHclTerraform(struct?: WebCategoryReputationScopeListGreaterThanOutputReference | WebCategoryReputationScopeListGreaterThan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    greater_low_risk: {
      value: cdktf.numberToHclTerraform(struct!.greaterLowRisk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    greater_malicious: {
      value: cdktf.numberToHclTerraform(struct!.greaterMalicious),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    greater_moderate_risk: {
      value: cdktf.numberToHclTerraform(struct!.greaterModerateRisk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    greater_suspicious: {
      value: cdktf.numberToHclTerraform(struct!.greaterSuspicious),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    greater_threshold: {
      value: cdktf.numberToHclTerraform(struct!.greaterThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    greater_trustworthy: {
      value: cdktf.numberToHclTerraform(struct!.greaterTrustworthy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebCategoryReputationScopeListGreaterThanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebCategoryReputationScopeListGreaterThan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._greaterLowRisk !== undefined) {
      hasAnyValues = true;
      internalValueResult.greaterLowRisk = this._greaterLowRisk;
    }
    if (this._greaterMalicious !== undefined) {
      hasAnyValues = true;
      internalValueResult.greaterMalicious = this._greaterMalicious;
    }
    if (this._greaterModerateRisk !== undefined) {
      hasAnyValues = true;
      internalValueResult.greaterModerateRisk = this._greaterModerateRisk;
    }
    if (this._greaterSuspicious !== undefined) {
      hasAnyValues = true;
      internalValueResult.greaterSuspicious = this._greaterSuspicious;
    }
    if (this._greaterThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.greaterThreshold = this._greaterThreshold;
    }
    if (this._greaterTrustworthy !== undefined) {
      hasAnyValues = true;
      internalValueResult.greaterTrustworthy = this._greaterTrustworthy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebCategoryReputationScopeListGreaterThan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._greaterLowRisk = undefined;
      this._greaterMalicious = undefined;
      this._greaterModerateRisk = undefined;
      this._greaterSuspicious = undefined;
      this._greaterThreshold = undefined;
      this._greaterTrustworthy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._greaterLowRisk = value.greaterLowRisk;
      this._greaterMalicious = value.greaterMalicious;
      this._greaterModerateRisk = value.greaterModerateRisk;
      this._greaterSuspicious = value.greaterSuspicious;
      this._greaterThreshold = value.greaterThreshold;
      this._greaterTrustworthy = value.greaterTrustworthy;
    }
  }

  // greater_low_risk - computed: false, optional: true, required: false
  private _greaterLowRisk?: number; 
  public get greaterLowRisk() {
    return this.getNumberAttribute('greater_low_risk');
  }
  public set greaterLowRisk(value: number) {
    this._greaterLowRisk = value;
  }
  public resetGreaterLowRisk() {
    this._greaterLowRisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greaterLowRiskInput() {
    return this._greaterLowRisk;
  }

  // greater_malicious - computed: false, optional: true, required: false
  private _greaterMalicious?: number; 
  public get greaterMalicious() {
    return this.getNumberAttribute('greater_malicious');
  }
  public set greaterMalicious(value: number) {
    this._greaterMalicious = value;
  }
  public resetGreaterMalicious() {
    this._greaterMalicious = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greaterMaliciousInput() {
    return this._greaterMalicious;
  }

  // greater_moderate_risk - computed: false, optional: true, required: false
  private _greaterModerateRisk?: number; 
  public get greaterModerateRisk() {
    return this.getNumberAttribute('greater_moderate_risk');
  }
  public set greaterModerateRisk(value: number) {
    this._greaterModerateRisk = value;
  }
  public resetGreaterModerateRisk() {
    this._greaterModerateRisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greaterModerateRiskInput() {
    return this._greaterModerateRisk;
  }

  // greater_suspicious - computed: false, optional: true, required: false
  private _greaterSuspicious?: number; 
  public get greaterSuspicious() {
    return this.getNumberAttribute('greater_suspicious');
  }
  public set greaterSuspicious(value: number) {
    this._greaterSuspicious = value;
  }
  public resetGreaterSuspicious() {
    this._greaterSuspicious = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greaterSuspiciousInput() {
    return this._greaterSuspicious;
  }

  // greater_threshold - computed: false, optional: true, required: false
  private _greaterThreshold?: number; 
  public get greaterThreshold() {
    return this.getNumberAttribute('greater_threshold');
  }
  public set greaterThreshold(value: number) {
    this._greaterThreshold = value;
  }
  public resetGreaterThreshold() {
    this._greaterThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greaterThresholdInput() {
    return this._greaterThreshold;
  }

  // greater_trustworthy - computed: false, optional: true, required: false
  private _greaterTrustworthy?: number; 
  public get greaterTrustworthy() {
    return this.getNumberAttribute('greater_trustworthy');
  }
  public set greaterTrustworthy(value: number) {
    this._greaterTrustworthy = value;
  }
  public resetGreaterTrustworthy() {
    this._greaterTrustworthy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greaterTrustworthyInput() {
    return this._greaterTrustworthy;
  }
}
export interface WebCategoryReputationScopeListLessThan {
  /**
  * Reputation score is less than or equal to 80
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#less_low_risk WebCategory#less_low_risk}
  */
  readonly lessLowRisk?: number;
  /**
  * Reputation score is less than or equal to 20
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#less_malicious WebCategory#less_malicious}
  */
  readonly lessMalicious?: number;
  /**
  * Reputation score is less than or equal to 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#less_moderate_risk WebCategory#less_moderate_risk}
  */
  readonly lessModerateRisk?: number;
  /**
  * Reputation score is less than or equal to 40
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#less_suspicious WebCategory#less_suspicious}
  */
  readonly lessSuspicious?: number;
  /**
  * Reputation score is less than or equal to a customized value (1-100)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#less_threshold WebCategory#less_threshold}
  */
  readonly lessThreshold?: number;
  /**
  * Reputation score is less than or equal to 100
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#less_trustworthy WebCategory#less_trustworthy}
  */
  readonly lessTrustworthy?: number;
}

export function webCategoryReputationScopeListLessThanToTerraform(struct?: WebCategoryReputationScopeListLessThanOutputReference | WebCategoryReputationScopeListLessThan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    less_low_risk: cdktf.numberToTerraform(struct!.lessLowRisk),
    less_malicious: cdktf.numberToTerraform(struct!.lessMalicious),
    less_moderate_risk: cdktf.numberToTerraform(struct!.lessModerateRisk),
    less_suspicious: cdktf.numberToTerraform(struct!.lessSuspicious),
    less_threshold: cdktf.numberToTerraform(struct!.lessThreshold),
    less_trustworthy: cdktf.numberToTerraform(struct!.lessTrustworthy),
  }
}


export function webCategoryReputationScopeListLessThanToHclTerraform(struct?: WebCategoryReputationScopeListLessThanOutputReference | WebCategoryReputationScopeListLessThan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    less_low_risk: {
      value: cdktf.numberToHclTerraform(struct!.lessLowRisk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    less_malicious: {
      value: cdktf.numberToHclTerraform(struct!.lessMalicious),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    less_moderate_risk: {
      value: cdktf.numberToHclTerraform(struct!.lessModerateRisk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    less_suspicious: {
      value: cdktf.numberToHclTerraform(struct!.lessSuspicious),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    less_threshold: {
      value: cdktf.numberToHclTerraform(struct!.lessThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    less_trustworthy: {
      value: cdktf.numberToHclTerraform(struct!.lessTrustworthy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebCategoryReputationScopeListLessThanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebCategoryReputationScopeListLessThan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lessLowRisk !== undefined) {
      hasAnyValues = true;
      internalValueResult.lessLowRisk = this._lessLowRisk;
    }
    if (this._lessMalicious !== undefined) {
      hasAnyValues = true;
      internalValueResult.lessMalicious = this._lessMalicious;
    }
    if (this._lessModerateRisk !== undefined) {
      hasAnyValues = true;
      internalValueResult.lessModerateRisk = this._lessModerateRisk;
    }
    if (this._lessSuspicious !== undefined) {
      hasAnyValues = true;
      internalValueResult.lessSuspicious = this._lessSuspicious;
    }
    if (this._lessThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.lessThreshold = this._lessThreshold;
    }
    if (this._lessTrustworthy !== undefined) {
      hasAnyValues = true;
      internalValueResult.lessTrustworthy = this._lessTrustworthy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebCategoryReputationScopeListLessThan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lessLowRisk = undefined;
      this._lessMalicious = undefined;
      this._lessModerateRisk = undefined;
      this._lessSuspicious = undefined;
      this._lessThreshold = undefined;
      this._lessTrustworthy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lessLowRisk = value.lessLowRisk;
      this._lessMalicious = value.lessMalicious;
      this._lessModerateRisk = value.lessModerateRisk;
      this._lessSuspicious = value.lessSuspicious;
      this._lessThreshold = value.lessThreshold;
      this._lessTrustworthy = value.lessTrustworthy;
    }
  }

  // less_low_risk - computed: false, optional: true, required: false
  private _lessLowRisk?: number; 
  public get lessLowRisk() {
    return this.getNumberAttribute('less_low_risk');
  }
  public set lessLowRisk(value: number) {
    this._lessLowRisk = value;
  }
  public resetLessLowRisk() {
    this._lessLowRisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lessLowRiskInput() {
    return this._lessLowRisk;
  }

  // less_malicious - computed: false, optional: true, required: false
  private _lessMalicious?: number; 
  public get lessMalicious() {
    return this.getNumberAttribute('less_malicious');
  }
  public set lessMalicious(value: number) {
    this._lessMalicious = value;
  }
  public resetLessMalicious() {
    this._lessMalicious = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lessMaliciousInput() {
    return this._lessMalicious;
  }

  // less_moderate_risk - computed: false, optional: true, required: false
  private _lessModerateRisk?: number; 
  public get lessModerateRisk() {
    return this.getNumberAttribute('less_moderate_risk');
  }
  public set lessModerateRisk(value: number) {
    this._lessModerateRisk = value;
  }
  public resetLessModerateRisk() {
    this._lessModerateRisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lessModerateRiskInput() {
    return this._lessModerateRisk;
  }

  // less_suspicious - computed: false, optional: true, required: false
  private _lessSuspicious?: number; 
  public get lessSuspicious() {
    return this.getNumberAttribute('less_suspicious');
  }
  public set lessSuspicious(value: number) {
    this._lessSuspicious = value;
  }
  public resetLessSuspicious() {
    this._lessSuspicious = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lessSuspiciousInput() {
    return this._lessSuspicious;
  }

  // less_threshold - computed: false, optional: true, required: false
  private _lessThreshold?: number; 
  public get lessThreshold() {
    return this.getNumberAttribute('less_threshold');
  }
  public set lessThreshold(value: number) {
    this._lessThreshold = value;
  }
  public resetLessThreshold() {
    this._lessThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lessThresholdInput() {
    return this._lessThreshold;
  }

  // less_trustworthy - computed: false, optional: true, required: false
  private _lessTrustworthy?: number; 
  public get lessTrustworthy() {
    return this.getNumberAttribute('less_trustworthy');
  }
  public set lessTrustworthy(value: number) {
    this._lessTrustworthy = value;
  }
  public resetLessTrustworthy() {
    this._lessTrustworthy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lessTrustworthyInput() {
    return this._lessTrustworthy;
  }
}
export interface WebCategoryReputationScopeListSamplingEnable {
  /**
  * 'all': all; 'trustworthy': Trustworthy level(81-100); 'low-risk': Low-risk level(61-80); 'moderate-risk': Moderate-risk level(41-60); 'suspicious': Suspicious level(21-40); 'malicious': Malicious level(1-20);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#counters1 WebCategory#counters1}
  */
  readonly counters1?: string;
}

export function webCategoryReputationScopeListSamplingEnableToTerraform(struct?: WebCategoryReputationScopeListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function webCategoryReputationScopeListSamplingEnableToHclTerraform(struct?: WebCategoryReputationScopeListSamplingEnable | cdktf.IResolvable): any {
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

export class WebCategoryReputationScopeListSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebCategoryReputationScopeListSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WebCategoryReputationScopeListSamplingEnable | cdktf.IResolvable | undefined) {
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

export class WebCategoryReputationScopeListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : WebCategoryReputationScopeListSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): WebCategoryReputationScopeListSamplingEnableOutputReference {
    return new WebCategoryReputationScopeListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebCategoryReputationScopeListStruct {
  /**
  * Reputation Scope name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#name WebCategory#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#user_tag WebCategory#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#uuid WebCategory#uuid}
  */
  readonly uuid?: string;
  /**
  * greater_than block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#greater_than WebCategory#greater_than}
  */
  readonly greaterThan?: WebCategoryReputationScopeListGreaterThan;
  /**
  * less_than block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#less_than WebCategory#less_than}
  */
  readonly lessThan?: WebCategoryReputationScopeListLessThan;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#sampling_enable WebCategory#sampling_enable}
  */
  readonly samplingEnable?: WebCategoryReputationScopeListSamplingEnable[] | cdktf.IResolvable;
}

export function webCategoryReputationScopeListStructToTerraform(struct?: WebCategoryReputationScopeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    greater_than: webCategoryReputationScopeListGreaterThanToTerraform(struct!.greaterThan),
    less_than: webCategoryReputationScopeListLessThanToTerraform(struct!.lessThan),
    sampling_enable: cdktf.listMapper(webCategoryReputationScopeListSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function webCategoryReputationScopeListStructToHclTerraform(struct?: WebCategoryReputationScopeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    greater_than: {
      value: webCategoryReputationScopeListGreaterThanToHclTerraform(struct!.greaterThan),
      isBlock: true,
      type: "list",
      storageClassType: "WebCategoryReputationScopeListGreaterThanList",
    },
    less_than: {
      value: webCategoryReputationScopeListLessThanToHclTerraform(struct!.lessThan),
      isBlock: true,
      type: "list",
      storageClassType: "WebCategoryReputationScopeListLessThanList",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(webCategoryReputationScopeListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "WebCategoryReputationScopeListSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebCategoryReputationScopeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebCategoryReputationScopeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._greaterThan?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.greaterThan = this._greaterThan?.internalValue;
    }
    if (this._lessThan?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lessThan = this._lessThan?.internalValue;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebCategoryReputationScopeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._greaterThan.internalValue = undefined;
      this._lessThan.internalValue = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._greaterThan.internalValue = value.greaterThan;
      this._lessThan.internalValue = value.lessThan;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
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

  // greater_than - computed: false, optional: true, required: false
  private _greaterThan = new WebCategoryReputationScopeListGreaterThanOutputReference(this, "greater_than");
  public get greaterThan() {
    return this._greaterThan;
  }
  public putGreaterThan(value: WebCategoryReputationScopeListGreaterThan) {
    this._greaterThan.internalValue = value;
  }
  public resetGreaterThan() {
    this._greaterThan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greaterThanInput() {
    return this._greaterThan.internalValue;
  }

  // less_than - computed: false, optional: true, required: false
  private _lessThan = new WebCategoryReputationScopeListLessThanOutputReference(this, "less_than");
  public get lessThan() {
    return this._lessThan;
  }
  public putLessThan(value: WebCategoryReputationScopeListLessThan) {
    this._lessThan.internalValue = value;
  }
  public resetLessThan() {
    this._lessThan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lessThanInput() {
    return this._lessThan.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new WebCategoryReputationScopeListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: WebCategoryReputationScopeListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

export class WebCategoryReputationScopeListStructList extends cdktf.ComplexList {
  public internalValue? : WebCategoryReputationScopeListStruct[] | cdktf.IResolvable

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
  public get(index: number): WebCategoryReputationScopeListStructOutputReference {
    return new WebCategoryReputationScopeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebCategoryStatisticsSamplingEnable {
  /**
  * 'all': all; 'db-lookup': db-lookup; 'cloud-cache-lookup': cloud-cache-lookup; 'cloud-lookup': cloud-lookup; 'rtu-lookup': rtu-lookup; 'lookup-latency': lookup-latency; 'db-mem': db-mem; 'rtu-cache-mem': rtu-cache-mem; 'lookup-cache-mem': lookup-cache-mem;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#counters1 WebCategory#counters1}
  */
  readonly counters1?: string;
}

export function webCategoryStatisticsSamplingEnableToTerraform(struct?: WebCategoryStatisticsSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function webCategoryStatisticsSamplingEnableToHclTerraform(struct?: WebCategoryStatisticsSamplingEnable | cdktf.IResolvable): any {
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

export class WebCategoryStatisticsSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebCategoryStatisticsSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WebCategoryStatisticsSamplingEnable | cdktf.IResolvable | undefined) {
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

export class WebCategoryStatisticsSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : WebCategoryStatisticsSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): WebCategoryStatisticsSamplingEnableOutputReference {
    return new WebCategoryStatisticsSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebCategoryStatistics {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#uuid WebCategory#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#sampling_enable WebCategory#sampling_enable}
  */
  readonly samplingEnable?: WebCategoryStatisticsSamplingEnable[] | cdktf.IResolvable;
}

export function webCategoryStatisticsToTerraform(struct?: WebCategoryStatisticsOutputReference | WebCategoryStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(webCategoryStatisticsSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function webCategoryStatisticsToHclTerraform(struct?: WebCategoryStatisticsOutputReference | WebCategoryStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(webCategoryStatisticsSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "WebCategoryStatisticsSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebCategoryStatisticsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebCategoryStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebCategoryStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new WebCategoryStatisticsSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: WebCategoryStatisticsSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}
export interface WebCategoryUrl {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#uuid WebCategory#uuid}
  */
  readonly uuid?: string;
}

export function webCategoryUrlToTerraform(struct?: WebCategoryUrlOutputReference | WebCategoryUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function webCategoryUrlToHclTerraform(struct?: WebCategoryUrlOutputReference | WebCategoryUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebCategoryUrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebCategoryUrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebCategoryUrl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
}
export interface WebCategoryWebReputationBypassedUrls {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#uuid WebCategory#uuid}
  */
  readonly uuid?: string;
}

export function webCategoryWebReputationBypassedUrlsToTerraform(struct?: WebCategoryWebReputationBypassedUrlsOutputReference | WebCategoryWebReputationBypassedUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function webCategoryWebReputationBypassedUrlsToHclTerraform(struct?: WebCategoryWebReputationBypassedUrlsOutputReference | WebCategoryWebReputationBypassedUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebCategoryWebReputationBypassedUrlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebCategoryWebReputationBypassedUrls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebCategoryWebReputationBypassedUrls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
}
export interface WebCategoryWebReputationInterceptedUrls {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#uuid WebCategory#uuid}
  */
  readonly uuid?: string;
}

export function webCategoryWebReputationInterceptedUrlsToTerraform(struct?: WebCategoryWebReputationInterceptedUrlsOutputReference | WebCategoryWebReputationInterceptedUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function webCategoryWebReputationInterceptedUrlsToHclTerraform(struct?: WebCategoryWebReputationInterceptedUrlsOutputReference | WebCategoryWebReputationInterceptedUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebCategoryWebReputationInterceptedUrlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebCategoryWebReputationInterceptedUrls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebCategoryWebReputationInterceptedUrls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
}
export interface WebCategoryWebReputationUrl {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#uuid WebCategory#uuid}
  */
  readonly uuid?: string;
}

export function webCategoryWebReputationUrlToTerraform(struct?: WebCategoryWebReputationUrlOutputReference | WebCategoryWebReputationUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function webCategoryWebReputationUrlToHclTerraform(struct?: WebCategoryWebReputationUrlOutputReference | WebCategoryWebReputationUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebCategoryWebReputationUrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebCategoryWebReputationUrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebCategoryWebReputationUrl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
}
export interface WebCategoryWebReputation {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#uuid WebCategory#uuid}
  */
  readonly uuid?: string;
  /**
  * bypassed_urls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#bypassed_urls WebCategory#bypassed_urls}
  */
  readonly bypassedUrls?: WebCategoryWebReputationBypassedUrls;
  /**
  * intercepted_urls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#intercepted_urls WebCategory#intercepted_urls}
  */
  readonly interceptedUrls?: WebCategoryWebReputationInterceptedUrls;
  /**
  * url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#url WebCategory#url}
  */
  readonly url?: WebCategoryWebReputationUrl;
}

export function webCategoryWebReputationToTerraform(struct?: WebCategoryWebReputationOutputReference | WebCategoryWebReputation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    bypassed_urls: webCategoryWebReputationBypassedUrlsToTerraform(struct!.bypassedUrls),
    intercepted_urls: webCategoryWebReputationInterceptedUrlsToTerraform(struct!.interceptedUrls),
    url: webCategoryWebReputationUrlToTerraform(struct!.url),
  }
}


export function webCategoryWebReputationToHclTerraform(struct?: WebCategoryWebReputationOutputReference | WebCategoryWebReputation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bypassed_urls: {
      value: webCategoryWebReputationBypassedUrlsToHclTerraform(struct!.bypassedUrls),
      isBlock: true,
      type: "list",
      storageClassType: "WebCategoryWebReputationBypassedUrlsList",
    },
    intercepted_urls: {
      value: webCategoryWebReputationInterceptedUrlsToHclTerraform(struct!.interceptedUrls),
      isBlock: true,
      type: "list",
      storageClassType: "WebCategoryWebReputationInterceptedUrlsList",
    },
    url: {
      value: webCategoryWebReputationUrlToHclTerraform(struct!.url),
      isBlock: true,
      type: "list",
      storageClassType: "WebCategoryWebReputationUrlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebCategoryWebReputationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebCategoryWebReputation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._bypassedUrls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassedUrls = this._bypassedUrls?.internalValue;
    }
    if (this._interceptedUrls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interceptedUrls = this._interceptedUrls?.internalValue;
    }
    if (this._url?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebCategoryWebReputation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._bypassedUrls.internalValue = undefined;
      this._interceptedUrls.internalValue = undefined;
      this._url.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._bypassedUrls.internalValue = value.bypassedUrls;
      this._interceptedUrls.internalValue = value.interceptedUrls;
      this._url.internalValue = value.url;
    }
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

  // bypassed_urls - computed: false, optional: true, required: false
  private _bypassedUrls = new WebCategoryWebReputationBypassedUrlsOutputReference(this, "bypassed_urls");
  public get bypassedUrls() {
    return this._bypassedUrls;
  }
  public putBypassedUrls(value: WebCategoryWebReputationBypassedUrls) {
    this._bypassedUrls.internalValue = value;
  }
  public resetBypassedUrls() {
    this._bypassedUrls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassedUrlsInput() {
    return this._bypassedUrls.internalValue;
  }

  // intercepted_urls - computed: false, optional: true, required: false
  private _interceptedUrls = new WebCategoryWebReputationInterceptedUrlsOutputReference(this, "intercepted_urls");
  public get interceptedUrls() {
    return this._interceptedUrls;
  }
  public putInterceptedUrls(value: WebCategoryWebReputationInterceptedUrls) {
    this._interceptedUrls.internalValue = value;
  }
  public resetInterceptedUrls() {
    this._interceptedUrls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interceptedUrlsInput() {
    return this._interceptedUrls.internalValue;
  }

  // url - computed: false, optional: true, required: false
  private _url = new WebCategoryWebReputationUrlOutputReference(this, "url");
  public get url() {
    return this._url;
  }
  public putUrl(value: WebCategoryWebReputationUrl) {
    this._url.internalValue = value;
  }
  public resetUrl() {
    this._url.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category thunder_web_category}
*/
export class WebCategory extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_web_category";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebCategory resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebCategory to import
  * @param importFromId The id of the existing WebCategory that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebCategory to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_web_category", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_category thunder_web_category} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebCategoryConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WebCategoryConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_web_category',
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
    this._cloudQueryCacheSize = config.cloudQueryCacheSize;
    this._cloudQueryDisable = config.cloudQueryDisable;
    this._databaseServer = config.databaseServer;
    this._dbUpdateTime = config.dbUpdateTime;
    this._enable = config.enable;
    this._id = config.id;
    this._onlineCheckDisable = config.onlineCheckDisable;
    this._port = config.port;
    this._remoteSyslogEnable = config.remoteSyslogEnable;
    this._rtuCacheSize = config.rtuCacheSize;
    this._rtuUpdateDisable = config.rtuUpdateDisable;
    this._rtuUpdateInterval = config.rtuUpdateInterval;
    this._server = config.server;
    this._serverTimeout = config.serverTimeout;
    this._sslPort = config.sslPort;
    this._useMgmtPort = config.useMgmtPort;
    this._uuid = config.uuid;
    this._bypassedUrls.internalValue = config.bypassedUrls;
    this._categoryListList.internalValue = config.categoryListList;
    this._interceptedUrls.internalValue = config.interceptedUrls;
    this._license.internalValue = config.license;
    this._proxyServer.internalValue = config.proxyServer;
    this._reputationScopeList.internalValue = config.reputationScopeList;
    this._statistics.internalValue = config.statistics;
    this._url.internalValue = config.url;
    this._webReputation.internalValue = config.webReputation;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_query_cache_size - computed: false, optional: true, required: false
  private _cloudQueryCacheSize?: number; 
  public get cloudQueryCacheSize() {
    return this.getNumberAttribute('cloud_query_cache_size');
  }
  public set cloudQueryCacheSize(value: number) {
    this._cloudQueryCacheSize = value;
  }
  public resetCloudQueryCacheSize() {
    this._cloudQueryCacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudQueryCacheSizeInput() {
    return this._cloudQueryCacheSize;
  }

  // cloud_query_disable - computed: false, optional: true, required: false
  private _cloudQueryDisable?: number; 
  public get cloudQueryDisable() {
    return this.getNumberAttribute('cloud_query_disable');
  }
  public set cloudQueryDisable(value: number) {
    this._cloudQueryDisable = value;
  }
  public resetCloudQueryDisable() {
    this._cloudQueryDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudQueryDisableInput() {
    return this._cloudQueryDisable;
  }

  // database_server - computed: false, optional: true, required: false
  private _databaseServer?: string; 
  public get databaseServer() {
    return this.getStringAttribute('database_server');
  }
  public set databaseServer(value: string) {
    this._databaseServer = value;
  }
  public resetDatabaseServer() {
    this._databaseServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseServerInput() {
    return this._databaseServer;
  }

  // db_update_time - computed: false, optional: true, required: false
  private _dbUpdateTime?: string; 
  public get dbUpdateTime() {
    return this.getStringAttribute('db_update_time');
  }
  public set dbUpdateTime(value: string) {
    this._dbUpdateTime = value;
  }
  public resetDbUpdateTime() {
    this._dbUpdateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbUpdateTimeInput() {
    return this._dbUpdateTime;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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

  // online_check_disable - computed: false, optional: true, required: false
  private _onlineCheckDisable?: number; 
  public get onlineCheckDisable() {
    return this.getNumberAttribute('online_check_disable');
  }
  public set onlineCheckDisable(value: number) {
    this._onlineCheckDisable = value;
  }
  public resetOnlineCheckDisable() {
    this._onlineCheckDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlineCheckDisableInput() {
    return this._onlineCheckDisable;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // remote_syslog_enable - computed: false, optional: true, required: false
  private _remoteSyslogEnable?: number; 
  public get remoteSyslogEnable() {
    return this.getNumberAttribute('remote_syslog_enable');
  }
  public set remoteSyslogEnable(value: number) {
    this._remoteSyslogEnable = value;
  }
  public resetRemoteSyslogEnable() {
    this._remoteSyslogEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteSyslogEnableInput() {
    return this._remoteSyslogEnable;
  }

  // rtu_cache_size - computed: false, optional: true, required: false
  private _rtuCacheSize?: number; 
  public get rtuCacheSize() {
    return this.getNumberAttribute('rtu_cache_size');
  }
  public set rtuCacheSize(value: number) {
    this._rtuCacheSize = value;
  }
  public resetRtuCacheSize() {
    this._rtuCacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtuCacheSizeInput() {
    return this._rtuCacheSize;
  }

  // rtu_update_disable - computed: false, optional: true, required: false
  private _rtuUpdateDisable?: number; 
  public get rtuUpdateDisable() {
    return this.getNumberAttribute('rtu_update_disable');
  }
  public set rtuUpdateDisable(value: number) {
    this._rtuUpdateDisable = value;
  }
  public resetRtuUpdateDisable() {
    this._rtuUpdateDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtuUpdateDisableInput() {
    return this._rtuUpdateDisable;
  }

  // rtu_update_interval - computed: false, optional: true, required: false
  private _rtuUpdateInterval?: number; 
  public get rtuUpdateInterval() {
    return this.getNumberAttribute('rtu_update_interval');
  }
  public set rtuUpdateInterval(value: number) {
    this._rtuUpdateInterval = value;
  }
  public resetRtuUpdateInterval() {
    this._rtuUpdateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtuUpdateIntervalInput() {
    return this._rtuUpdateInterval;
  }

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // server_timeout - computed: false, optional: true, required: false
  private _serverTimeout?: number; 
  public get serverTimeout() {
    return this.getNumberAttribute('server_timeout');
  }
  public set serverTimeout(value: number) {
    this._serverTimeout = value;
  }
  public resetServerTimeout() {
    this._serverTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTimeoutInput() {
    return this._serverTimeout;
  }

  // ssl_port - computed: false, optional: true, required: false
  private _sslPort?: number; 
  public get sslPort() {
    return this.getNumberAttribute('ssl_port');
  }
  public set sslPort(value: number) {
    this._sslPort = value;
  }
  public resetSslPort() {
    this._sslPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslPortInput() {
    return this._sslPort;
  }

  // use_mgmt_port - computed: false, optional: true, required: false
  private _useMgmtPort?: number; 
  public get useMgmtPort() {
    return this.getNumberAttribute('use_mgmt_port');
  }
  public set useMgmtPort(value: number) {
    this._useMgmtPort = value;
  }
  public resetUseMgmtPort() {
    this._useMgmtPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMgmtPortInput() {
    return this._useMgmtPort;
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

  // bypassed_urls - computed: false, optional: true, required: false
  private _bypassedUrls = new WebCategoryBypassedUrlsOutputReference(this, "bypassed_urls");
  public get bypassedUrls() {
    return this._bypassedUrls;
  }
  public putBypassedUrls(value: WebCategoryBypassedUrls) {
    this._bypassedUrls.internalValue = value;
  }
  public resetBypassedUrls() {
    this._bypassedUrls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassedUrlsInput() {
    return this._bypassedUrls.internalValue;
  }

  // category_list_list - computed: false, optional: true, required: false
  private _categoryListList = new WebCategoryCategoryListListStructList(this, "category_list_list", false);
  public get categoryListList() {
    return this._categoryListList;
  }
  public putCategoryListList(value: WebCategoryCategoryListListStruct[] | cdktf.IResolvable) {
    this._categoryListList.internalValue = value;
  }
  public resetCategoryListList() {
    this._categoryListList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryListListInput() {
    return this._categoryListList.internalValue;
  }

  // intercepted_urls - computed: false, optional: true, required: false
  private _interceptedUrls = new WebCategoryInterceptedUrlsOutputReference(this, "intercepted_urls");
  public get interceptedUrls() {
    return this._interceptedUrls;
  }
  public putInterceptedUrls(value: WebCategoryInterceptedUrls) {
    this._interceptedUrls.internalValue = value;
  }
  public resetInterceptedUrls() {
    this._interceptedUrls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interceptedUrlsInput() {
    return this._interceptedUrls.internalValue;
  }

  // license - computed: false, optional: true, required: false
  private _license = new WebCategoryLicenseOutputReference(this, "license");
  public get license() {
    return this._license;
  }
  public putLicense(value: WebCategoryLicense) {
    this._license.internalValue = value;
  }
  public resetLicense() {
    this._license.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseInput() {
    return this._license.internalValue;
  }

  // proxy_server - computed: false, optional: true, required: false
  private _proxyServer = new WebCategoryProxyServerOutputReference(this, "proxy_server");
  public get proxyServer() {
    return this._proxyServer;
  }
  public putProxyServer(value: WebCategoryProxyServer) {
    this._proxyServer.internalValue = value;
  }
  public resetProxyServer() {
    this._proxyServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyServerInput() {
    return this._proxyServer.internalValue;
  }

  // reputation_scope_list - computed: false, optional: true, required: false
  private _reputationScopeList = new WebCategoryReputationScopeListStructList(this, "reputation_scope_list", false);
  public get reputationScopeList() {
    return this._reputationScopeList;
  }
  public putReputationScopeList(value: WebCategoryReputationScopeListStruct[] | cdktf.IResolvable) {
    this._reputationScopeList.internalValue = value;
  }
  public resetReputationScopeList() {
    this._reputationScopeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reputationScopeListInput() {
    return this._reputationScopeList.internalValue;
  }

  // statistics - computed: false, optional: true, required: false
  private _statistics = new WebCategoryStatisticsOutputReference(this, "statistics");
  public get statistics() {
    return this._statistics;
  }
  public putStatistics(value: WebCategoryStatistics) {
    this._statistics.internalValue = value;
  }
  public resetStatistics() {
    this._statistics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticsInput() {
    return this._statistics.internalValue;
  }

  // url - computed: false, optional: true, required: false
  private _url = new WebCategoryUrlOutputReference(this, "url");
  public get url() {
    return this._url;
  }
  public putUrl(value: WebCategoryUrl) {
    this._url.internalValue = value;
  }
  public resetUrl() {
    this._url.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url.internalValue;
  }

  // web_reputation - computed: false, optional: true, required: false
  private _webReputation = new WebCategoryWebReputationOutputReference(this, "web_reputation");
  public get webReputation() {
    return this._webReputation;
  }
  public putWebReputation(value: WebCategoryWebReputation) {
    this._webReputation.internalValue = value;
  }
  public resetWebReputation() {
    this._webReputation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webReputationInput() {
    return this._webReputation.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_query_cache_size: cdktf.numberToTerraform(this._cloudQueryCacheSize),
      cloud_query_disable: cdktf.numberToTerraform(this._cloudQueryDisable),
      database_server: cdktf.stringToTerraform(this._databaseServer),
      db_update_time: cdktf.stringToTerraform(this._dbUpdateTime),
      enable: cdktf.numberToTerraform(this._enable),
      id: cdktf.stringToTerraform(this._id),
      online_check_disable: cdktf.numberToTerraform(this._onlineCheckDisable),
      port: cdktf.numberToTerraform(this._port),
      remote_syslog_enable: cdktf.numberToTerraform(this._remoteSyslogEnable),
      rtu_cache_size: cdktf.numberToTerraform(this._rtuCacheSize),
      rtu_update_disable: cdktf.numberToTerraform(this._rtuUpdateDisable),
      rtu_update_interval: cdktf.numberToTerraform(this._rtuUpdateInterval),
      server: cdktf.stringToTerraform(this._server),
      server_timeout: cdktf.numberToTerraform(this._serverTimeout),
      ssl_port: cdktf.numberToTerraform(this._sslPort),
      use_mgmt_port: cdktf.numberToTerraform(this._useMgmtPort),
      uuid: cdktf.stringToTerraform(this._uuid),
      bypassed_urls: webCategoryBypassedUrlsToTerraform(this._bypassedUrls.internalValue),
      category_list_list: cdktf.listMapper(webCategoryCategoryListListStructToTerraform, true)(this._categoryListList.internalValue),
      intercepted_urls: webCategoryInterceptedUrlsToTerraform(this._interceptedUrls.internalValue),
      license: webCategoryLicenseToTerraform(this._license.internalValue),
      proxy_server: webCategoryProxyServerToTerraform(this._proxyServer.internalValue),
      reputation_scope_list: cdktf.listMapper(webCategoryReputationScopeListStructToTerraform, true)(this._reputationScopeList.internalValue),
      statistics: webCategoryStatisticsToTerraform(this._statistics.internalValue),
      url: webCategoryUrlToTerraform(this._url.internalValue),
      web_reputation: webCategoryWebReputationToTerraform(this._webReputation.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_query_cache_size: {
        value: cdktf.numberToHclTerraform(this._cloudQueryCacheSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cloud_query_disable: {
        value: cdktf.numberToHclTerraform(this._cloudQueryDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      database_server: {
        value: cdktf.stringToHclTerraform(this._databaseServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_update_time: {
        value: cdktf.stringToHclTerraform(this._dbUpdateTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable: {
        value: cdktf.numberToHclTerraform(this._enable),
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
      online_check_disable: {
        value: cdktf.numberToHclTerraform(this._onlineCheckDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      remote_syslog_enable: {
        value: cdktf.numberToHclTerraform(this._remoteSyslogEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rtu_cache_size: {
        value: cdktf.numberToHclTerraform(this._rtuCacheSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rtu_update_disable: {
        value: cdktf.numberToHclTerraform(this._rtuUpdateDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rtu_update_interval: {
        value: cdktf.numberToHclTerraform(this._rtuUpdateInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server: {
        value: cdktf.stringToHclTerraform(this._server),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_timeout: {
        value: cdktf.numberToHclTerraform(this._serverTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_port: {
        value: cdktf.numberToHclTerraform(this._sslPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_mgmt_port: {
        value: cdktf.numberToHclTerraform(this._useMgmtPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bypassed_urls: {
        value: webCategoryBypassedUrlsToHclTerraform(this._bypassedUrls.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebCategoryBypassedUrlsList",
      },
      category_list_list: {
        value: cdktf.listMapperHcl(webCategoryCategoryListListStructToHclTerraform, true)(this._categoryListList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebCategoryCategoryListListStructList",
      },
      intercepted_urls: {
        value: webCategoryInterceptedUrlsToHclTerraform(this._interceptedUrls.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebCategoryInterceptedUrlsList",
      },
      license: {
        value: webCategoryLicenseToHclTerraform(this._license.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebCategoryLicenseList",
      },
      proxy_server: {
        value: webCategoryProxyServerToHclTerraform(this._proxyServer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebCategoryProxyServerList",
      },
      reputation_scope_list: {
        value: cdktf.listMapperHcl(webCategoryReputationScopeListStructToHclTerraform, true)(this._reputationScopeList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebCategoryReputationScopeListStructList",
      },
      statistics: {
        value: webCategoryStatisticsToHclTerraform(this._statistics.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebCategoryStatisticsList",
      },
      url: {
        value: webCategoryUrlToHclTerraform(this._url.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebCategoryUrlList",
      },
      web_reputation: {
        value: webCategoryWebReputationToHclTerraform(this._webReputation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebCategoryWebReputationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
