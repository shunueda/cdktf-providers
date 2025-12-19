// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TrafficControlRuleSetRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'any': any;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#application_any TrafficControlRuleSetRule#application_any}
  */
  readonly applicationAny?: string;
  /**
  * 'usergroup': Match the value from the derived attribute of user group in the class-list.; 'userid': Match the value from the derived attribute of user ID in the class-list.;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#derived_attribute TrafficControlRuleSetRule#derived_attribute}
  */
  readonly derivedAttribute?: string;
  /**
  * Match destination IP against class-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#dst_class_list TrafficControlRuleSetRule#dst_class_list}
  */
  readonly dstClassList?: string;
  /**
  * Match destination IP against domain-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#dst_domain_list TrafficControlRuleSetRule#dst_domain_list}
  */
  readonly dstDomainList?: string;
  /**
  * Geolocation name list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#dst_geoloc_list TrafficControlRuleSetRule#dst_geoloc_list}
  */
  readonly dstGeolocList?: string;
  /**
  * Use Geolocation list from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#dst_geoloc_list_shared TrafficControlRuleSetRule#dst_geoloc_list_shared}
  */
  readonly dstGeolocListShared?: number;
  /**
  * Single geolocation name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#dst_geoloc_name TrafficControlRuleSetRule#dst_geoloc_name}
  */
  readonly dstGeolocName?: string;
  /**
  * 'any': Any IPv4 address;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#dst_ipv4_any TrafficControlRuleSetRule#dst_ipv4_any}
  */
  readonly dstIpv4Any?: string;
  /**
  * 'any': Any IPv6 address;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#dst_ipv6_any TrafficControlRuleSetRule#dst_ipv6_any}
  */
  readonly dstIpv6Any?: string;
  /**
  * Zone name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#dst_zone TrafficControlRuleSetRule#dst_zone}
  */
  readonly dstZone?: string;
  /**
  * 'any': any;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#dst_zone_any TrafficControlRuleSetRule#dst_zone_any}
  */
  readonly dstZoneAny?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#id TrafficControlRuleSetRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'v4': IPv4 rule; 'v6': IPv6 rule; 'any': IP version is not specified. Only compatible with filters by application, zone or the source class-list of radius type.;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#ip_version TrafficControlRuleSetRule#ip_version}
  */
  readonly ipVersion?: string;
  /**
  * Rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#name TrafficControlRuleSetRule#name}
  */
  readonly name: string;
  /**
  * Rule entry comment (Notes for this rule)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#remark TrafficControlRuleSetRule#remark}
  */
  readonly remark?: string;
  /**
  * Rule_set_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#rule_set_name TrafficControlRuleSetRule#rule_set_name}
  */
  readonly ruleSetName: string;
  /**
  * 'any': any;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#service_any TrafficControlRuleSetRule#service_any}
  */
  readonly serviceAny?: string;
  /**
  * Match source IP against class-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#src_class_list TrafficControlRuleSetRule#src_class_list}
  */
  readonly srcClassList?: string;
  /**
  * 'radius': Match the value of specified RADIUS attribute in the class-list.;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#src_class_list_type TrafficControlRuleSetRule#src_class_list_type}
  */
  readonly srcClassListType?: string;
  /**
  * Geolocation name list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#src_geoloc_list TrafficControlRuleSetRule#src_geoloc_list}
  */
  readonly srcGeolocList?: string;
  /**
  * Use Geolocation list from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#src_geoloc_list_shared TrafficControlRuleSetRule#src_geoloc_list_shared}
  */
  readonly srcGeolocListShared?: number;
  /**
  * Single geolocation name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#src_geoloc_name TrafficControlRuleSetRule#src_geoloc_name}
  */
  readonly srcGeolocName?: string;
  /**
  * 'any': Any IPv4 address;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#src_ipv4_any TrafficControlRuleSetRule#src_ipv4_any}
  */
  readonly srcIpv4Any?: string;
  /**
  * 'any': Any IPv6 address;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#src_ipv6_any TrafficControlRuleSetRule#src_ipv6_any}
  */
  readonly srcIpv6Any?: string;
  /**
  * Zone name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#src_zone TrafficControlRuleSetRule#src_zone}
  */
  readonly srcZone?: string;
  /**
  * 'any': any;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#src_zone_any TrafficControlRuleSetRule#src_zone_any}
  */
  readonly srcZoneAny?: string;
  /**
  * 'enable': Enable rule; 'disable': Disable rule;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#status TrafficControlRuleSetRule#status}
  */
  readonly status?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#user_tag TrafficControlRuleSetRule#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#uuid TrafficControlRuleSetRule#uuid}
  */
  readonly uuid?: string;
  /**
  * action_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#action_group TrafficControlRuleSetRule#action_group}
  */
  readonly actionGroup?: TrafficControlRuleSetRuleActionGroup;
  /**
  * app_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#app_list TrafficControlRuleSetRule#app_list}
  */
  readonly appList?: TrafficControlRuleSetRuleAppListStruct[] | cdktf.IResolvable;
  /**
  * dest_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#dest_list TrafficControlRuleSetRule#dest_list}
  */
  readonly destList?: TrafficControlRuleSetRuleDestListStruct[] | cdktf.IResolvable;
  /**
  * move_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#move_rule TrafficControlRuleSetRule#move_rule}
  */
  readonly moveRule?: TrafficControlRuleSetRuleMoveRule;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#sampling_enable TrafficControlRuleSetRule#sampling_enable}
  */
  readonly samplingEnable?: TrafficControlRuleSetRuleSamplingEnable[] | cdktf.IResolvable;
  /**
  * service_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#service_list TrafficControlRuleSetRule#service_list}
  */
  readonly serviceList?: TrafficControlRuleSetRuleServiceListStruct[] | cdktf.IResolvable;
  /**
  * source_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#source_list TrafficControlRuleSetRule#source_list}
  */
  readonly sourceList?: TrafficControlRuleSetRuleSourceListStruct[] | cdktf.IResolvable;
}
export interface TrafficControlRuleSetRuleActionGroup {
  /**
  * Limit policy Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#limit_policy TrafficControlRuleSetRule#limit_policy}
  */
  readonly limitPolicy?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#uuid TrafficControlRuleSetRule#uuid}
  */
  readonly uuid?: string;
}

export function trafficControlRuleSetRuleActionGroupToTerraform(struct?: TrafficControlRuleSetRuleActionGroupOutputReference | TrafficControlRuleSetRuleActionGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit_policy: cdktf.numberToTerraform(struct!.limitPolicy),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function trafficControlRuleSetRuleActionGroupToHclTerraform(struct?: TrafficControlRuleSetRuleActionGroupOutputReference | TrafficControlRuleSetRuleActionGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit_policy: {
      value: cdktf.numberToHclTerraform(struct!.limitPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class TrafficControlRuleSetRuleActionGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TrafficControlRuleSetRuleActionGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limitPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitPolicy = this._limitPolicy;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrafficControlRuleSetRuleActionGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._limitPolicy = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._limitPolicy = value.limitPolicy;
      this._uuid = value.uuid;
    }
  }

  // limit_policy - computed: false, optional: true, required: false
  private _limitPolicy?: number; 
  public get limitPolicy() {
    return this.getNumberAttribute('limit_policy');
  }
  public set limitPolicy(value: number) {
    this._limitPolicy = value;
  }
  public resetLimitPolicy() {
    this._limitPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitPolicyInput() {
    return this._limitPolicy;
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
export interface TrafficControlRuleSetRuleAppListStruct {
  /**
  * Application object group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#obj_grp_application TrafficControlRuleSetRule#obj_grp_application}
  */
  readonly objGrpApplication?: string;
  /**
  * Specify application(s)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#protocol TrafficControlRuleSetRule#protocol}
  */
  readonly protocol?: string;
  /**
  * 'aaa': Protocol/application used for AAA (Authentification, Authorization and Accounting) purposes.; 'adult-content': Adult content protocol/application.; 'advertising': Advertising networks and applications.; 'application-enforcing-tls': Application known to enforce HSTS and thus use of TLS.; 'analytics-and-statistics': User analytics and statistics protocol/application.; 'anonymizers-and-proxies': Traffic-anonymization protocol/application.; 'audio-chat': Protocol/application used for Audio Chat.; 'basic': Covers all protocols required for basic classification, including most networking protocols as well as standard protocols like HTTP.; 'blog': Blogging platform protocol/application.; 'cdn': Protocol/application used for Content-Delivery Networks.; 'certification-authority': Certification Authority for SSL/TLS certificate.; 'chat': Protocol/application used for Text Chat.; 'classified-ads': Protocol/application used for Classified Advertisements.; 'cloud-based-services': SaaS and/or PaaS cloud based services.; 'crowdfunding': Service for funding a project or venture by raising small amounts of money from a large number of people, typically via the Internet.; 'cryptocurrency': Services for mining cryptocurrencies, for example a Crypto Web Browser (an application that mines crypto currency in the background while its user browses the web).; 'database': Database-specific protocols.; 'disposable-email': Service offering Disposable Email Accounts (DEA). DEA is a technique to share temporary email address between many users.; 'ebook-reader': Services for e-book readers, i.e. connected devices that display electronic books (typically using e-ink displays to reduce glare and eye strain).; 'education': Protocols offering education services and online courses.; 'email': Native email protocol.; 'enterprise': Protocol/application used in an enterprise network.; 'file-management': Protocol/application designed specifically for file management and exchange. This can include bona fide network protocols (like SMB) as well as web/cloud services (like Dropbox).; 'file-transfer': Protocol that offers file transferring as a secondary feature. This typically includes IM, WebMail, and other protocols that allow file transfers in addition to their principal function.; 'forum': Online forum protocol/application.; 'gaming': Protocol/application used by games.; 'healthcare': Protocols offering medical services, i.e protocols used in medical environment.; 'instant-messaging-and-multimedia-conferencing': Protocol/application used for Instant Messaging or Multi-Conferencing.; 'internet-of-things': Internet Of Things protocol/application.; 'map-service': Digital Maps service (web site and their related API).; 'mobile': Mobile-specific protocol/application.; 'multimedia-streaming': Protocol/application used for multimedia streaming.; 'networking': Protocol used for (inter) networking purpose.; 'news-portal': Protocol/application used for News Portals.; 'payment-service': Application offering online services for accepting electronic payments by a variety of payment methods (credit card, bank-based payments such as direct debit, bank transfer, etc).; 'peer-to-peer': Protocol/application used for Peer-to-peer purposes.; 'remote-access': Protocol/application used for remote access.; 'scada': SCADA (Supervisory control and data acquisition) protocols, all generations.; 'social-networks': Social networking application.; 'software-update': Auto-update protocol.; 'speedtest': Speedtest application allowing to access quality of Internet connection (upload, download, latency, etc).; 'standards-based': Protocol issued from standardized bodies such as IETF, ITU, IEEE, ETSI, OIF.; 'transportation': Transportation services, for example smartphone applications that allow users to hail a taxi.; 'video-chat': Protocol/application used for Video Chat.; 'voip': Application used for Voice-Over-IP.; 'vpn-tunnels': Protocol/application used for VPN or tunneling purposes.; 'web': Application based on HTTP/HTTPS.; 'web-e-commerce': Protocol/application used for E-commerce websites.; 'web-search-engines': Protocol/application used for Web search portals.; 'web-websites': Protocol/application used for Company Websites.; 'webmails': Web-based e-mail application.; 'web-ext-adult': Web Extension Adult; 'web-ext-auctions': Web Extension Auctions; 'web-ext-blogs': Web Extension Blogs; 'web-ext-business-and-economy': Web Extension Business and Economy; 'web-ext-cdns': Web Extension CDNs; 'web-ext-collaboration': Web Extension Collaboration; 'web-ext-computer-and-internet-info': Web Extension Computer and Internet Info; 'web-ext-computer-and-internet-security': Web Extension Computer and Internet Security; 'web-ext-dating': Web Extension Dating; 'web-ext-educational-institutions': Web Extension Educational Institutions; 'web-ext-entertainment-and-arts': Web Extension Entertainment and Arts; 'web-ext-fashion-and-beauty': Web Extension Fashion and Beauty; 'web-ext-file-share': Web Extension File Share; 'web-ext-financial-services': Web Extension Financial Services; 'web-ext-gambling': Web Extension Gambling; 'web-ext-games': Web Extension Games; 'web-ext-government': Web Extension Government; 'web-ext-health-and-medicine': Web Extension Health and Medicine; 'web-ext-individual-stock-advice-and-tools': Web Extension Individual Stock Advice and Tools; 'web-ext-internet-portals': Web Extension Internet Portals; 'web-ext-job-search': Web Extension Job Search; 'web-ext-local-information': Web Extension Local Information; 'web-ext-malware': Web Extension Malware; 'web-ext-motor-vehicles': Web Extension Motor Vehicles; 'web-ext-music': Web Extension Music; 'web-ext-news': Web Extension News; 'web-ext-p2p': Web Extension P2P; 'web-ext-parked-sites': Web Extension Parked Sites; 'web-ext-proxy-avoid-and-anonymizers': Web Extension Proxy Avoid and Anonymizers; 'web-ext-real-estate': Web Extension Real Estate; 'web-ext-reference-and-research': Web Extension Reference and Research; 'web-ext-search-engines': Web Extension Search Engines; 'web-ext-shopping': Web Extension Shopping; 'web-ext-social-network': Web Extension Social Network; 'web-ext-society': Web Extension Society; 'web-ext-software': Web Extension Software; 'web-ext-sports': Web Extension Sports; 'web-ext-streaming-media': Web Extension Streaming Media; 'web-ext-training-and-tools': Web Extension Training and Tools; 'web-ext-translation': Web Extension Translation; 'web-ext-travel': Web Extension Travel; 'web-ext-web-advertisements': Web Extension Web Advertisements; 'web-ext-web-based-email': Web Extension Web based Email; 'web-ext-web-hosting': Web Extension Web Hosting; 'web-ext-web-service': Web Extension Web Service;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#protocol_tag TrafficControlRuleSetRule#protocol_tag}
  */
  readonly protocolTag?: string;
}

export function trafficControlRuleSetRuleAppListStructToTerraform(struct?: TrafficControlRuleSetRuleAppListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    obj_grp_application: cdktf.stringToTerraform(struct!.objGrpApplication),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    protocol_tag: cdktf.stringToTerraform(struct!.protocolTag),
  }
}


export function trafficControlRuleSetRuleAppListStructToHclTerraform(struct?: TrafficControlRuleSetRuleAppListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    obj_grp_application: {
      value: cdktf.stringToHclTerraform(struct!.objGrpApplication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_tag: {
      value: cdktf.stringToHclTerraform(struct!.protocolTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrafficControlRuleSetRuleAppListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TrafficControlRuleSetRuleAppListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objGrpApplication !== undefined) {
      hasAnyValues = true;
      internalValueResult.objGrpApplication = this._objGrpApplication;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._protocolTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolTag = this._protocolTag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrafficControlRuleSetRuleAppListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objGrpApplication = undefined;
      this._protocol = undefined;
      this._protocolTag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objGrpApplication = value.objGrpApplication;
      this._protocol = value.protocol;
      this._protocolTag = value.protocolTag;
    }
  }

  // obj_grp_application - computed: false, optional: true, required: false
  private _objGrpApplication?: string; 
  public get objGrpApplication() {
    return this.getStringAttribute('obj_grp_application');
  }
  public set objGrpApplication(value: string) {
    this._objGrpApplication = value;
  }
  public resetObjGrpApplication() {
    this._objGrpApplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objGrpApplicationInput() {
    return this._objGrpApplication;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // protocol_tag - computed: false, optional: true, required: false
  private _protocolTag?: string; 
  public get protocolTag() {
    return this.getStringAttribute('protocol_tag');
  }
  public set protocolTag(value: string) {
    this._protocolTag = value;
  }
  public resetProtocolTag() {
    this._protocolTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolTagInput() {
    return this._protocolTag;
  }
}

export class TrafficControlRuleSetRuleAppListStructList extends cdktf.ComplexList {
  public internalValue? : TrafficControlRuleSetRuleAppListStruct[] | cdktf.IResolvable

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
  public get(index: number): TrafficControlRuleSetRuleAppListStructOutputReference {
    return new TrafficControlRuleSetRuleAppListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrafficControlRuleSetRuleDestListStruct {
  /**
  * IPv4 IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#dst_ip_subnet TrafficControlRuleSetRule#dst_ip_subnet}
  */
  readonly dstIpSubnet?: string;
  /**
  * IPv6 IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#dst_ipv6_subnet TrafficControlRuleSetRule#dst_ipv6_subnet}
  */
  readonly dstIpv6Subnet?: string;
  /**
  * Network object group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#dst_obj_grp_network TrafficControlRuleSetRule#dst_obj_grp_network}
  */
  readonly dstObjGrpNetwork?: string;
  /**
  * Network object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#dst_obj_network TrafficControlRuleSetRule#dst_obj_network}
  */
  readonly dstObjNetwork?: string;
  /**
  * SLB Virtual server name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#dst_slb_vserver TrafficControlRuleSetRule#dst_slb_vserver}
  */
  readonly dstSlbVserver?: string;
}

export function trafficControlRuleSetRuleDestListStructToTerraform(struct?: TrafficControlRuleSetRuleDestListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_ip_subnet: cdktf.stringToTerraform(struct!.dstIpSubnet),
    dst_ipv6_subnet: cdktf.stringToTerraform(struct!.dstIpv6Subnet),
    dst_obj_grp_network: cdktf.stringToTerraform(struct!.dstObjGrpNetwork),
    dst_obj_network: cdktf.stringToTerraform(struct!.dstObjNetwork),
    dst_slb_vserver: cdktf.stringToTerraform(struct!.dstSlbVserver),
  }
}


export function trafficControlRuleSetRuleDestListStructToHclTerraform(struct?: TrafficControlRuleSetRuleDestListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_ip_subnet: {
      value: cdktf.stringToHclTerraform(struct!.dstIpSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_ipv6_subnet: {
      value: cdktf.stringToHclTerraform(struct!.dstIpv6Subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_obj_grp_network: {
      value: cdktf.stringToHclTerraform(struct!.dstObjGrpNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_obj_network: {
      value: cdktf.stringToHclTerraform(struct!.dstObjNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_slb_vserver: {
      value: cdktf.stringToHclTerraform(struct!.dstSlbVserver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrafficControlRuleSetRuleDestListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TrafficControlRuleSetRuleDestListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstIpSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIpSubnet = this._dstIpSubnet;
    }
    if (this._dstIpv6Subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIpv6Subnet = this._dstIpv6Subnet;
    }
    if (this._dstObjGrpNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstObjGrpNetwork = this._dstObjGrpNetwork;
    }
    if (this._dstObjNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstObjNetwork = this._dstObjNetwork;
    }
    if (this._dstSlbVserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSlbVserver = this._dstSlbVserver;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrafficControlRuleSetRuleDestListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dstIpSubnet = undefined;
      this._dstIpv6Subnet = undefined;
      this._dstObjGrpNetwork = undefined;
      this._dstObjNetwork = undefined;
      this._dstSlbVserver = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dstIpSubnet = value.dstIpSubnet;
      this._dstIpv6Subnet = value.dstIpv6Subnet;
      this._dstObjGrpNetwork = value.dstObjGrpNetwork;
      this._dstObjNetwork = value.dstObjNetwork;
      this._dstSlbVserver = value.dstSlbVserver;
    }
  }

  // dst_ip_subnet - computed: false, optional: true, required: false
  private _dstIpSubnet?: string; 
  public get dstIpSubnet() {
    return this.getStringAttribute('dst_ip_subnet');
  }
  public set dstIpSubnet(value: string) {
    this._dstIpSubnet = value;
  }
  public resetDstIpSubnet() {
    this._dstIpSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpSubnetInput() {
    return this._dstIpSubnet;
  }

  // dst_ipv6_subnet - computed: false, optional: true, required: false
  private _dstIpv6Subnet?: string; 
  public get dstIpv6Subnet() {
    return this.getStringAttribute('dst_ipv6_subnet');
  }
  public set dstIpv6Subnet(value: string) {
    this._dstIpv6Subnet = value;
  }
  public resetDstIpv6Subnet() {
    this._dstIpv6Subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpv6SubnetInput() {
    return this._dstIpv6Subnet;
  }

  // dst_obj_grp_network - computed: false, optional: true, required: false
  private _dstObjGrpNetwork?: string; 
  public get dstObjGrpNetwork() {
    return this.getStringAttribute('dst_obj_grp_network');
  }
  public set dstObjGrpNetwork(value: string) {
    this._dstObjGrpNetwork = value;
  }
  public resetDstObjGrpNetwork() {
    this._dstObjGrpNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstObjGrpNetworkInput() {
    return this._dstObjGrpNetwork;
  }

  // dst_obj_network - computed: false, optional: true, required: false
  private _dstObjNetwork?: string; 
  public get dstObjNetwork() {
    return this.getStringAttribute('dst_obj_network');
  }
  public set dstObjNetwork(value: string) {
    this._dstObjNetwork = value;
  }
  public resetDstObjNetwork() {
    this._dstObjNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstObjNetworkInput() {
    return this._dstObjNetwork;
  }

  // dst_slb_vserver - computed: false, optional: true, required: false
  private _dstSlbVserver?: string; 
  public get dstSlbVserver() {
    return this.getStringAttribute('dst_slb_vserver');
  }
  public set dstSlbVserver(value: string) {
    this._dstSlbVserver = value;
  }
  public resetDstSlbVserver() {
    this._dstSlbVserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSlbVserverInput() {
    return this._dstSlbVserver;
  }
}

export class TrafficControlRuleSetRuleDestListStructList extends cdktf.ComplexList {
  public internalValue? : TrafficControlRuleSetRuleDestListStruct[] | cdktf.IResolvable

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
  public get(index: number): TrafficControlRuleSetRuleDestListStructOutputReference {
    return new TrafficControlRuleSetRuleDestListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrafficControlRuleSetRuleMoveRule {
  /**
  * 'top': top; 'before': before; 'after': after; 'bottom': bottom;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#location TrafficControlRuleSetRule#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#target_rule TrafficControlRuleSetRule#target_rule}
  */
  readonly targetRule?: string;
}

export function trafficControlRuleSetRuleMoveRuleToTerraform(struct?: TrafficControlRuleSetRuleMoveRuleOutputReference | TrafficControlRuleSetRuleMoveRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktf.stringToTerraform(struct!.location),
    target_rule: cdktf.stringToTerraform(struct!.targetRule),
  }
}


export function trafficControlRuleSetRuleMoveRuleToHclTerraform(struct?: TrafficControlRuleSetRuleMoveRuleOutputReference | TrafficControlRuleSetRuleMoveRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_rule: {
      value: cdktf.stringToHclTerraform(struct!.targetRule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrafficControlRuleSetRuleMoveRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TrafficControlRuleSetRuleMoveRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._targetRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRule = this._targetRule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrafficControlRuleSetRuleMoveRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._location = undefined;
      this._targetRule = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._location = value.location;
      this._targetRule = value.targetRule;
    }
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // target_rule - computed: false, optional: true, required: false
  private _targetRule?: string; 
  public get targetRule() {
    return this.getStringAttribute('target_rule');
  }
  public set targetRule(value: string) {
    this._targetRule = value;
  }
  public resetTargetRule() {
    this._targetRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRuleInput() {
    return this._targetRule;
  }
}
export interface TrafficControlRuleSetRuleSamplingEnable {
  /**
  * 'all': all; 'hit-count': Hit counts;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#counters1 TrafficControlRuleSetRule#counters1}
  */
  readonly counters1?: string;
}

export function trafficControlRuleSetRuleSamplingEnableToTerraform(struct?: TrafficControlRuleSetRuleSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function trafficControlRuleSetRuleSamplingEnableToHclTerraform(struct?: TrafficControlRuleSetRuleSamplingEnable | cdktf.IResolvable): any {
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

export class TrafficControlRuleSetRuleSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TrafficControlRuleSetRuleSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TrafficControlRuleSetRuleSamplingEnable | cdktf.IResolvable | undefined) {
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

export class TrafficControlRuleSetRuleSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : TrafficControlRuleSetRuleSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): TrafficControlRuleSetRuleSamplingEnableOutputReference {
    return new TrafficControlRuleSetRuleSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrafficControlRuleSetRuleServiceListStruct {
  /**
  * Equal to the port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#eq_dst_port TrafficControlRuleSetRule#eq_dst_port}
  */
  readonly eqDstPort?: number;
  /**
  * Equal to the port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#eq_src_port TrafficControlRuleSetRule#eq_src_port}
  */
  readonly eqSrcPort?: number;
  /**
  * Greater than the port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#gt_dst_port TrafficControlRuleSetRule#gt_dst_port}
  */
  readonly gtDstPort?: number;
  /**
  * Greater than the port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#gt_src_port TrafficControlRuleSetRule#gt_src_port}
  */
  readonly gtSrcPort?: number;
  /**
  * ICMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#icmp TrafficControlRuleSetRule#icmp}
  */
  readonly icmp?: number;
  /**
  * ICMP code number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#icmp_code TrafficControlRuleSetRule#icmp_code}
  */
  readonly icmpCode?: number;
  /**
  * ICMP type number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#icmp_type TrafficControlRuleSetRule#icmp_type}
  */
  readonly icmpType?: number;
  /**
  * ICMPv6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#icmpv6 TrafficControlRuleSetRule#icmpv6}
  */
  readonly icmpv6?: number;
  /**
  * ICMPv6 code number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#icmpv6_code TrafficControlRuleSetRule#icmpv6_code}
  */
  readonly icmpv6Code?: number;
  /**
  * ICMPv6 type number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#icmpv6_type TrafficControlRuleSetRule#icmpv6_type}
  */
  readonly icmpv6Type?: number;
  /**
  * Lower than the port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#lt_dst_port TrafficControlRuleSetRule#lt_dst_port}
  */
  readonly ltDstPort?: number;
  /**
  * Lower than the port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#lt_src_port TrafficControlRuleSetRule#lt_src_port}
  */
  readonly ltSrcPort?: number;
  /**
  * service object group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#obj_grp_service TrafficControlRuleSetRule#obj_grp_service}
  */
  readonly objGrpService?: string;
  /**
  * Ending Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#port_num_end_dst TrafficControlRuleSetRule#port_num_end_dst}
  */
  readonly portNumEndDst?: number;
  /**
  * Ending Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#port_num_end_src TrafficControlRuleSetRule#port_num_end_src}
  */
  readonly portNumEndSrc?: number;
  /**
  * Protocol ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#proto_id TrafficControlRuleSetRule#proto_id}
  */
  readonly protoId?: number;
  /**
  * 'tcp': tcp; 'udp': udp; 'sctp': sctp;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#protocols TrafficControlRuleSetRule#protocols}
  */
  readonly protocols?: string;
  /**
  * Port range (Starting Port Number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#range_dst_port TrafficControlRuleSetRule#range_dst_port}
  */
  readonly rangeDstPort?: number;
  /**
  * Port range (Starting Port Number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#range_src_port TrafficControlRuleSetRule#range_src_port}
  */
  readonly rangeSrcPort?: number;
  /**
  * SCTP Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#sctp_template TrafficControlRuleSetRule#sctp_template}
  */
  readonly sctpTemplate?: string;
  /**
  * 'any-code': Any ICMP code; 'frag-required': Code 4, fragmentation required; 'host-unreachable': Code 1, destination host unreachable; 'network-unreachable': Code 0, destination network unreachable; 'port-unreachable': Code 3, destination port unreachable; 'proto-unreachable': Code 2, destination protocol unreachable; 'route-failed': Code 5, source route failed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#special_code TrafficControlRuleSetRule#special_code}
  */
  readonly specialCode?: string;
  /**
  * 'any-type': Any ICMP type; 'echo-reply': Type 0, echo reply; 'echo-request': Type 8, echo request; 'info-reply': Type 16, information reply; 'info-request': Type 15, information request; 'mask-reply': Type 18, address mask reply; 'mask-request': Type 17, address mask request; 'parameter-problem': Type 12, parameter problem; 'redirect': Type 5, redirect message; 'source-quench': Type 4, source quench; 'time-exceeded': Type 11, time exceeded; 'timestamp': Type 13, timestamp; 'timestamp-reply': Type 14, timestamp reply; 'dest-unreachable': Type 3, destination unreachable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#special_type TrafficControlRuleSetRule#special_type}
  */
  readonly specialType?: string;
  /**
  * 'any-code': Any ICMPv6 code; 'addr-unreachable': Code 3, address unreachable; 'admin-prohibited': Code 1, admin prohibited; 'no-route': Code 0, no route to destination; 'not-neighbour': Code 2, not neighbor; 'port-unreachable': Code 4, destination port unreachable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#special_v6_code TrafficControlRuleSetRule#special_v6_code}
  */
  readonly specialV6Code?: string;
  /**
  * 'any-type': Any ICMPv6 type; 'dest-unreachable': Type 1, destination unreachable; 'echo-reply': Type 129, echo reply; 'echo-request': Type 128, echo request; 'packet-too-big': Type 2, packet too big; 'param-prob': Type 4, parameter problem; 'time-exceeded': Type 3, time exceeded;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#special_v6_type TrafficControlRuleSetRule#special_v6_type}
  */
  readonly specialV6Type?: string;
}

export function trafficControlRuleSetRuleServiceListStructToTerraform(struct?: TrafficControlRuleSetRuleServiceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eq_dst_port: cdktf.numberToTerraform(struct!.eqDstPort),
    eq_src_port: cdktf.numberToTerraform(struct!.eqSrcPort),
    gt_dst_port: cdktf.numberToTerraform(struct!.gtDstPort),
    gt_src_port: cdktf.numberToTerraform(struct!.gtSrcPort),
    icmp: cdktf.numberToTerraform(struct!.icmp),
    icmp_code: cdktf.numberToTerraform(struct!.icmpCode),
    icmp_type: cdktf.numberToTerraform(struct!.icmpType),
    icmpv6: cdktf.numberToTerraform(struct!.icmpv6),
    icmpv6_code: cdktf.numberToTerraform(struct!.icmpv6Code),
    icmpv6_type: cdktf.numberToTerraform(struct!.icmpv6Type),
    lt_dst_port: cdktf.numberToTerraform(struct!.ltDstPort),
    lt_src_port: cdktf.numberToTerraform(struct!.ltSrcPort),
    obj_grp_service: cdktf.stringToTerraform(struct!.objGrpService),
    port_num_end_dst: cdktf.numberToTerraform(struct!.portNumEndDst),
    port_num_end_src: cdktf.numberToTerraform(struct!.portNumEndSrc),
    proto_id: cdktf.numberToTerraform(struct!.protoId),
    protocols: cdktf.stringToTerraform(struct!.protocols),
    range_dst_port: cdktf.numberToTerraform(struct!.rangeDstPort),
    range_src_port: cdktf.numberToTerraform(struct!.rangeSrcPort),
    sctp_template: cdktf.stringToTerraform(struct!.sctpTemplate),
    special_code: cdktf.stringToTerraform(struct!.specialCode),
    special_type: cdktf.stringToTerraform(struct!.specialType),
    special_v6_code: cdktf.stringToTerraform(struct!.specialV6Code),
    special_v6_type: cdktf.stringToTerraform(struct!.specialV6Type),
  }
}


export function trafficControlRuleSetRuleServiceListStructToHclTerraform(struct?: TrafficControlRuleSetRuleServiceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eq_dst_port: {
      value: cdktf.numberToHclTerraform(struct!.eqDstPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eq_src_port: {
      value: cdktf.numberToHclTerraform(struct!.eqSrcPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gt_dst_port: {
      value: cdktf.numberToHclTerraform(struct!.gtDstPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gt_src_port: {
      value: cdktf.numberToHclTerraform(struct!.gtSrcPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp: {
      value: cdktf.numberToHclTerraform(struct!.icmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_code: {
      value: cdktf.numberToHclTerraform(struct!.icmpCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_type: {
      value: cdktf.numberToHclTerraform(struct!.icmpType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmpv6: {
      value: cdktf.numberToHclTerraform(struct!.icmpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmpv6_code: {
      value: cdktf.numberToHclTerraform(struct!.icmpv6Code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmpv6_type: {
      value: cdktf.numberToHclTerraform(struct!.icmpv6Type),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lt_dst_port: {
      value: cdktf.numberToHclTerraform(struct!.ltDstPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lt_src_port: {
      value: cdktf.numberToHclTerraform(struct!.ltSrcPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    obj_grp_service: {
      value: cdktf.stringToHclTerraform(struct!.objGrpService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_num_end_dst: {
      value: cdktf.numberToHclTerraform(struct!.portNumEndDst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_num_end_src: {
      value: cdktf.numberToHclTerraform(struct!.portNumEndSrc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proto_id: {
      value: cdktf.numberToHclTerraform(struct!.protoId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocols: {
      value: cdktf.stringToHclTerraform(struct!.protocols),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range_dst_port: {
      value: cdktf.numberToHclTerraform(struct!.rangeDstPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    range_src_port: {
      value: cdktf.numberToHclTerraform(struct!.rangeSrcPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sctp_template: {
      value: cdktf.stringToHclTerraform(struct!.sctpTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    special_code: {
      value: cdktf.stringToHclTerraform(struct!.specialCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    special_type: {
      value: cdktf.stringToHclTerraform(struct!.specialType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    special_v6_code: {
      value: cdktf.stringToHclTerraform(struct!.specialV6Code),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    special_v6_type: {
      value: cdktf.stringToHclTerraform(struct!.specialV6Type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrafficControlRuleSetRuleServiceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TrafficControlRuleSetRuleServiceListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eqDstPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.eqDstPort = this._eqDstPort;
    }
    if (this._eqSrcPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.eqSrcPort = this._eqSrcPort;
    }
    if (this._gtDstPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtDstPort = this._gtDstPort;
    }
    if (this._gtSrcPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtSrcPort = this._gtSrcPort;
    }
    if (this._icmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmp = this._icmp;
    }
    if (this._icmpCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpCode = this._icmpCode;
    }
    if (this._icmpType !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpType = this._icmpType;
    }
    if (this._icmpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpv6 = this._icmpv6;
    }
    if (this._icmpv6Code !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpv6Code = this._icmpv6Code;
    }
    if (this._icmpv6Type !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpv6Type = this._icmpv6Type;
    }
    if (this._ltDstPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.ltDstPort = this._ltDstPort;
    }
    if (this._ltSrcPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.ltSrcPort = this._ltSrcPort;
    }
    if (this._objGrpService !== undefined) {
      hasAnyValues = true;
      internalValueResult.objGrpService = this._objGrpService;
    }
    if (this._portNumEndDst !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNumEndDst = this._portNumEndDst;
    }
    if (this._portNumEndSrc !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNumEndSrc = this._portNumEndSrc;
    }
    if (this._protoId !== undefined) {
      hasAnyValues = true;
      internalValueResult.protoId = this._protoId;
    }
    if (this._protocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocols = this._protocols;
    }
    if (this._rangeDstPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeDstPort = this._rangeDstPort;
    }
    if (this._rangeSrcPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeSrcPort = this._rangeSrcPort;
    }
    if (this._sctpTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpTemplate = this._sctpTemplate;
    }
    if (this._specialCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.specialCode = this._specialCode;
    }
    if (this._specialType !== undefined) {
      hasAnyValues = true;
      internalValueResult.specialType = this._specialType;
    }
    if (this._specialV6Code !== undefined) {
      hasAnyValues = true;
      internalValueResult.specialV6Code = this._specialV6Code;
    }
    if (this._specialV6Type !== undefined) {
      hasAnyValues = true;
      internalValueResult.specialV6Type = this._specialV6Type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrafficControlRuleSetRuleServiceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eqDstPort = undefined;
      this._eqSrcPort = undefined;
      this._gtDstPort = undefined;
      this._gtSrcPort = undefined;
      this._icmp = undefined;
      this._icmpCode = undefined;
      this._icmpType = undefined;
      this._icmpv6 = undefined;
      this._icmpv6Code = undefined;
      this._icmpv6Type = undefined;
      this._ltDstPort = undefined;
      this._ltSrcPort = undefined;
      this._objGrpService = undefined;
      this._portNumEndDst = undefined;
      this._portNumEndSrc = undefined;
      this._protoId = undefined;
      this._protocols = undefined;
      this._rangeDstPort = undefined;
      this._rangeSrcPort = undefined;
      this._sctpTemplate = undefined;
      this._specialCode = undefined;
      this._specialType = undefined;
      this._specialV6Code = undefined;
      this._specialV6Type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eqDstPort = value.eqDstPort;
      this._eqSrcPort = value.eqSrcPort;
      this._gtDstPort = value.gtDstPort;
      this._gtSrcPort = value.gtSrcPort;
      this._icmp = value.icmp;
      this._icmpCode = value.icmpCode;
      this._icmpType = value.icmpType;
      this._icmpv6 = value.icmpv6;
      this._icmpv6Code = value.icmpv6Code;
      this._icmpv6Type = value.icmpv6Type;
      this._ltDstPort = value.ltDstPort;
      this._ltSrcPort = value.ltSrcPort;
      this._objGrpService = value.objGrpService;
      this._portNumEndDst = value.portNumEndDst;
      this._portNumEndSrc = value.portNumEndSrc;
      this._protoId = value.protoId;
      this._protocols = value.protocols;
      this._rangeDstPort = value.rangeDstPort;
      this._rangeSrcPort = value.rangeSrcPort;
      this._sctpTemplate = value.sctpTemplate;
      this._specialCode = value.specialCode;
      this._specialType = value.specialType;
      this._specialV6Code = value.specialV6Code;
      this._specialV6Type = value.specialV6Type;
    }
  }

  // eq_dst_port - computed: false, optional: true, required: false
  private _eqDstPort?: number; 
  public get eqDstPort() {
    return this.getNumberAttribute('eq_dst_port');
  }
  public set eqDstPort(value: number) {
    this._eqDstPort = value;
  }
  public resetEqDstPort() {
    this._eqDstPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eqDstPortInput() {
    return this._eqDstPort;
  }

  // eq_src_port - computed: false, optional: true, required: false
  private _eqSrcPort?: number; 
  public get eqSrcPort() {
    return this.getNumberAttribute('eq_src_port');
  }
  public set eqSrcPort(value: number) {
    this._eqSrcPort = value;
  }
  public resetEqSrcPort() {
    this._eqSrcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eqSrcPortInput() {
    return this._eqSrcPort;
  }

  // gt_dst_port - computed: false, optional: true, required: false
  private _gtDstPort?: number; 
  public get gtDstPort() {
    return this.getNumberAttribute('gt_dst_port');
  }
  public set gtDstPort(value: number) {
    this._gtDstPort = value;
  }
  public resetGtDstPort() {
    this._gtDstPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtDstPortInput() {
    return this._gtDstPort;
  }

  // gt_src_port - computed: false, optional: true, required: false
  private _gtSrcPort?: number; 
  public get gtSrcPort() {
    return this.getNumberAttribute('gt_src_port');
  }
  public set gtSrcPort(value: number) {
    this._gtSrcPort = value;
  }
  public resetGtSrcPort() {
    this._gtSrcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtSrcPortInput() {
    return this._gtSrcPort;
  }

  // icmp - computed: false, optional: true, required: false
  private _icmp?: number; 
  public get icmp() {
    return this.getNumberAttribute('icmp');
  }
  public set icmp(value: number) {
    this._icmp = value;
  }
  public resetIcmp() {
    this._icmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpInput() {
    return this._icmp;
  }

  // icmp_code - computed: false, optional: true, required: false
  private _icmpCode?: number; 
  public get icmpCode() {
    return this.getNumberAttribute('icmp_code');
  }
  public set icmpCode(value: number) {
    this._icmpCode = value;
  }
  public resetIcmpCode() {
    this._icmpCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpCodeInput() {
    return this._icmpCode;
  }

  // icmp_type - computed: false, optional: true, required: false
  private _icmpType?: number; 
  public get icmpType() {
    return this.getNumberAttribute('icmp_type');
  }
  public set icmpType(value: number) {
    this._icmpType = value;
  }
  public resetIcmpType() {
    this._icmpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTypeInput() {
    return this._icmpType;
  }

  // icmpv6 - computed: false, optional: true, required: false
  private _icmpv6?: number; 
  public get icmpv6() {
    return this.getNumberAttribute('icmpv6');
  }
  public set icmpv6(value: number) {
    this._icmpv6 = value;
  }
  public resetIcmpv6() {
    this._icmpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6Input() {
    return this._icmpv6;
  }

  // icmpv6_code - computed: false, optional: true, required: false
  private _icmpv6Code?: number; 
  public get icmpv6Code() {
    return this.getNumberAttribute('icmpv6_code');
  }
  public set icmpv6Code(value: number) {
    this._icmpv6Code = value;
  }
  public resetIcmpv6Code() {
    this._icmpv6Code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6CodeInput() {
    return this._icmpv6Code;
  }

  // icmpv6_type - computed: false, optional: true, required: false
  private _icmpv6Type?: number; 
  public get icmpv6Type() {
    return this.getNumberAttribute('icmpv6_type');
  }
  public set icmpv6Type(value: number) {
    this._icmpv6Type = value;
  }
  public resetIcmpv6Type() {
    this._icmpv6Type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6TypeInput() {
    return this._icmpv6Type;
  }

  // lt_dst_port - computed: false, optional: true, required: false
  private _ltDstPort?: number; 
  public get ltDstPort() {
    return this.getNumberAttribute('lt_dst_port');
  }
  public set ltDstPort(value: number) {
    this._ltDstPort = value;
  }
  public resetLtDstPort() {
    this._ltDstPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ltDstPortInput() {
    return this._ltDstPort;
  }

  // lt_src_port - computed: false, optional: true, required: false
  private _ltSrcPort?: number; 
  public get ltSrcPort() {
    return this.getNumberAttribute('lt_src_port');
  }
  public set ltSrcPort(value: number) {
    this._ltSrcPort = value;
  }
  public resetLtSrcPort() {
    this._ltSrcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ltSrcPortInput() {
    return this._ltSrcPort;
  }

  // obj_grp_service - computed: false, optional: true, required: false
  private _objGrpService?: string; 
  public get objGrpService() {
    return this.getStringAttribute('obj_grp_service');
  }
  public set objGrpService(value: string) {
    this._objGrpService = value;
  }
  public resetObjGrpService() {
    this._objGrpService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objGrpServiceInput() {
    return this._objGrpService;
  }

  // port_num_end_dst - computed: false, optional: true, required: false
  private _portNumEndDst?: number; 
  public get portNumEndDst() {
    return this.getNumberAttribute('port_num_end_dst');
  }
  public set portNumEndDst(value: number) {
    this._portNumEndDst = value;
  }
  public resetPortNumEndDst() {
    this._portNumEndDst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumEndDstInput() {
    return this._portNumEndDst;
  }

  // port_num_end_src - computed: false, optional: true, required: false
  private _portNumEndSrc?: number; 
  public get portNumEndSrc() {
    return this.getNumberAttribute('port_num_end_src');
  }
  public set portNumEndSrc(value: number) {
    this._portNumEndSrc = value;
  }
  public resetPortNumEndSrc() {
    this._portNumEndSrc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumEndSrcInput() {
    return this._portNumEndSrc;
  }

  // proto_id - computed: false, optional: true, required: false
  private _protoId?: number; 
  public get protoId() {
    return this.getNumberAttribute('proto_id');
  }
  public set protoId(value: number) {
    this._protoId = value;
  }
  public resetProtoId() {
    this._protoId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoIdInput() {
    return this._protoId;
  }

  // protocols - computed: false, optional: true, required: false
  private _protocols?: string; 
  public get protocols() {
    return this.getStringAttribute('protocols');
  }
  public set protocols(value: string) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // range_dst_port - computed: false, optional: true, required: false
  private _rangeDstPort?: number; 
  public get rangeDstPort() {
    return this.getNumberAttribute('range_dst_port');
  }
  public set rangeDstPort(value: number) {
    this._rangeDstPort = value;
  }
  public resetRangeDstPort() {
    this._rangeDstPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeDstPortInput() {
    return this._rangeDstPort;
  }

  // range_src_port - computed: false, optional: true, required: false
  private _rangeSrcPort?: number; 
  public get rangeSrcPort() {
    return this.getNumberAttribute('range_src_port');
  }
  public set rangeSrcPort(value: number) {
    this._rangeSrcPort = value;
  }
  public resetRangeSrcPort() {
    this._rangeSrcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeSrcPortInput() {
    return this._rangeSrcPort;
  }

  // sctp_template - computed: false, optional: true, required: false
  private _sctpTemplate?: string; 
  public get sctpTemplate() {
    return this.getStringAttribute('sctp_template');
  }
  public set sctpTemplate(value: string) {
    this._sctpTemplate = value;
  }
  public resetSctpTemplate() {
    this._sctpTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpTemplateInput() {
    return this._sctpTemplate;
  }

  // special_code - computed: false, optional: true, required: false
  private _specialCode?: string; 
  public get specialCode() {
    return this.getStringAttribute('special_code');
  }
  public set specialCode(value: string) {
    this._specialCode = value;
  }
  public resetSpecialCode() {
    this._specialCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specialCodeInput() {
    return this._specialCode;
  }

  // special_type - computed: false, optional: true, required: false
  private _specialType?: string; 
  public get specialType() {
    return this.getStringAttribute('special_type');
  }
  public set specialType(value: string) {
    this._specialType = value;
  }
  public resetSpecialType() {
    this._specialType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specialTypeInput() {
    return this._specialType;
  }

  // special_v6_code - computed: false, optional: true, required: false
  private _specialV6Code?: string; 
  public get specialV6Code() {
    return this.getStringAttribute('special_v6_code');
  }
  public set specialV6Code(value: string) {
    this._specialV6Code = value;
  }
  public resetSpecialV6Code() {
    this._specialV6Code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specialV6CodeInput() {
    return this._specialV6Code;
  }

  // special_v6_type - computed: false, optional: true, required: false
  private _specialV6Type?: string; 
  public get specialV6Type() {
    return this.getStringAttribute('special_v6_type');
  }
  public set specialV6Type(value: string) {
    this._specialV6Type = value;
  }
  public resetSpecialV6Type() {
    this._specialV6Type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specialV6TypeInput() {
    return this._specialV6Type;
  }
}

export class TrafficControlRuleSetRuleServiceListStructList extends cdktf.ComplexList {
  public internalValue? : TrafficControlRuleSetRuleServiceListStruct[] | cdktf.IResolvable

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
  public get(index: number): TrafficControlRuleSetRuleServiceListStructOutputReference {
    return new TrafficControlRuleSetRuleServiceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrafficControlRuleSetRuleSourceListStruct {
  /**
  * IPv4 IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#src_ip_subnet TrafficControlRuleSetRule#src_ip_subnet}
  */
  readonly srcIpSubnet?: string;
  /**
  * IPv6 IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#src_ipv6_subnet TrafficControlRuleSetRule#src_ipv6_subnet}
  */
  readonly srcIpv6Subnet?: string;
  /**
  * Network object group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#src_obj_grp_network TrafficControlRuleSetRule#src_obj_grp_network}
  */
  readonly srcObjGrpNetwork?: string;
  /**
  * Network object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#src_obj_network TrafficControlRuleSetRule#src_obj_network}
  */
  readonly srcObjNetwork?: string;
}

export function trafficControlRuleSetRuleSourceListStructToTerraform(struct?: TrafficControlRuleSetRuleSourceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    src_ip_subnet: cdktf.stringToTerraform(struct!.srcIpSubnet),
    src_ipv6_subnet: cdktf.stringToTerraform(struct!.srcIpv6Subnet),
    src_obj_grp_network: cdktf.stringToTerraform(struct!.srcObjGrpNetwork),
    src_obj_network: cdktf.stringToTerraform(struct!.srcObjNetwork),
  }
}


export function trafficControlRuleSetRuleSourceListStructToHclTerraform(struct?: TrafficControlRuleSetRuleSourceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    src_ip_subnet: {
      value: cdktf.stringToHclTerraform(struct!.srcIpSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_ipv6_subnet: {
      value: cdktf.stringToHclTerraform(struct!.srcIpv6Subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_obj_grp_network: {
      value: cdktf.stringToHclTerraform(struct!.srcObjGrpNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_obj_network: {
      value: cdktf.stringToHclTerraform(struct!.srcObjNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrafficControlRuleSetRuleSourceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TrafficControlRuleSetRuleSourceListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._srcIpSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpSubnet = this._srcIpSubnet;
    }
    if (this._srcIpv6Subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpv6Subnet = this._srcIpv6Subnet;
    }
    if (this._srcObjGrpNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcObjGrpNetwork = this._srcObjGrpNetwork;
    }
    if (this._srcObjNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcObjNetwork = this._srcObjNetwork;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrafficControlRuleSetRuleSourceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._srcIpSubnet = undefined;
      this._srcIpv6Subnet = undefined;
      this._srcObjGrpNetwork = undefined;
      this._srcObjNetwork = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._srcIpSubnet = value.srcIpSubnet;
      this._srcIpv6Subnet = value.srcIpv6Subnet;
      this._srcObjGrpNetwork = value.srcObjGrpNetwork;
      this._srcObjNetwork = value.srcObjNetwork;
    }
  }

  // src_ip_subnet - computed: false, optional: true, required: false
  private _srcIpSubnet?: string; 
  public get srcIpSubnet() {
    return this.getStringAttribute('src_ip_subnet');
  }
  public set srcIpSubnet(value: string) {
    this._srcIpSubnet = value;
  }
  public resetSrcIpSubnet() {
    this._srcIpSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpSubnetInput() {
    return this._srcIpSubnet;
  }

  // src_ipv6_subnet - computed: false, optional: true, required: false
  private _srcIpv6Subnet?: string; 
  public get srcIpv6Subnet() {
    return this.getStringAttribute('src_ipv6_subnet');
  }
  public set srcIpv6Subnet(value: string) {
    this._srcIpv6Subnet = value;
  }
  public resetSrcIpv6Subnet() {
    this._srcIpv6Subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpv6SubnetInput() {
    return this._srcIpv6Subnet;
  }

  // src_obj_grp_network - computed: false, optional: true, required: false
  private _srcObjGrpNetwork?: string; 
  public get srcObjGrpNetwork() {
    return this.getStringAttribute('src_obj_grp_network');
  }
  public set srcObjGrpNetwork(value: string) {
    this._srcObjGrpNetwork = value;
  }
  public resetSrcObjGrpNetwork() {
    this._srcObjGrpNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcObjGrpNetworkInput() {
    return this._srcObjGrpNetwork;
  }

  // src_obj_network - computed: false, optional: true, required: false
  private _srcObjNetwork?: string; 
  public get srcObjNetwork() {
    return this.getStringAttribute('src_obj_network');
  }
  public set srcObjNetwork(value: string) {
    this._srcObjNetwork = value;
  }
  public resetSrcObjNetwork() {
    this._srcObjNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcObjNetworkInput() {
    return this._srcObjNetwork;
  }
}

export class TrafficControlRuleSetRuleSourceListStructList extends cdktf.ComplexList {
  public internalValue? : TrafficControlRuleSetRuleSourceListStruct[] | cdktf.IResolvable

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
  public get(index: number): TrafficControlRuleSetRuleSourceListStructOutputReference {
    return new TrafficControlRuleSetRuleSourceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule thunder_traffic_control_rule_set_rule}
*/
export class TrafficControlRuleSetRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_traffic_control_rule_set_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TrafficControlRuleSetRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TrafficControlRuleSetRule to import
  * @param importFromId The id of the existing TrafficControlRuleSetRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TrafficControlRuleSetRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_traffic_control_rule_set_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule thunder_traffic_control_rule_set_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TrafficControlRuleSetRuleConfig
  */
  public constructor(scope: Construct, id: string, config: TrafficControlRuleSetRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_traffic_control_rule_set_rule',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationAny = config.applicationAny;
    this._derivedAttribute = config.derivedAttribute;
    this._dstClassList = config.dstClassList;
    this._dstDomainList = config.dstDomainList;
    this._dstGeolocList = config.dstGeolocList;
    this._dstGeolocListShared = config.dstGeolocListShared;
    this._dstGeolocName = config.dstGeolocName;
    this._dstIpv4Any = config.dstIpv4Any;
    this._dstIpv6Any = config.dstIpv6Any;
    this._dstZone = config.dstZone;
    this._dstZoneAny = config.dstZoneAny;
    this._id = config.id;
    this._ipVersion = config.ipVersion;
    this._name = config.name;
    this._remark = config.remark;
    this._ruleSetName = config.ruleSetName;
    this._serviceAny = config.serviceAny;
    this._srcClassList = config.srcClassList;
    this._srcClassListType = config.srcClassListType;
    this._srcGeolocList = config.srcGeolocList;
    this._srcGeolocListShared = config.srcGeolocListShared;
    this._srcGeolocName = config.srcGeolocName;
    this._srcIpv4Any = config.srcIpv4Any;
    this._srcIpv6Any = config.srcIpv6Any;
    this._srcZone = config.srcZone;
    this._srcZoneAny = config.srcZoneAny;
    this._status = config.status;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._actionGroup.internalValue = config.actionGroup;
    this._appList.internalValue = config.appList;
    this._destList.internalValue = config.destList;
    this._moveRule.internalValue = config.moveRule;
    this._samplingEnable.internalValue = config.samplingEnable;
    this._serviceList.internalValue = config.serviceList;
    this._sourceList.internalValue = config.sourceList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_any - computed: false, optional: true, required: false
  private _applicationAny?: string; 
  public get applicationAny() {
    return this.getStringAttribute('application_any');
  }
  public set applicationAny(value: string) {
    this._applicationAny = value;
  }
  public resetApplicationAny() {
    this._applicationAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationAnyInput() {
    return this._applicationAny;
  }

  // derived_attribute - computed: false, optional: true, required: false
  private _derivedAttribute?: string; 
  public get derivedAttribute() {
    return this.getStringAttribute('derived_attribute');
  }
  public set derivedAttribute(value: string) {
    this._derivedAttribute = value;
  }
  public resetDerivedAttribute() {
    this._derivedAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get derivedAttributeInput() {
    return this._derivedAttribute;
  }

  // dst_class_list - computed: false, optional: true, required: false
  private _dstClassList?: string; 
  public get dstClassList() {
    return this.getStringAttribute('dst_class_list');
  }
  public set dstClassList(value: string) {
    this._dstClassList = value;
  }
  public resetDstClassList() {
    this._dstClassList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstClassListInput() {
    return this._dstClassList;
  }

  // dst_domain_list - computed: false, optional: true, required: false
  private _dstDomainList?: string; 
  public get dstDomainList() {
    return this.getStringAttribute('dst_domain_list');
  }
  public set dstDomainList(value: string) {
    this._dstDomainList = value;
  }
  public resetDstDomainList() {
    this._dstDomainList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstDomainListInput() {
    return this._dstDomainList;
  }

  // dst_geoloc_list - computed: false, optional: true, required: false
  private _dstGeolocList?: string; 
  public get dstGeolocList() {
    return this.getStringAttribute('dst_geoloc_list');
  }
  public set dstGeolocList(value: string) {
    this._dstGeolocList = value;
  }
  public resetDstGeolocList() {
    this._dstGeolocList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstGeolocListInput() {
    return this._dstGeolocList;
  }

  // dst_geoloc_list_shared - computed: false, optional: true, required: false
  private _dstGeolocListShared?: number; 
  public get dstGeolocListShared() {
    return this.getNumberAttribute('dst_geoloc_list_shared');
  }
  public set dstGeolocListShared(value: number) {
    this._dstGeolocListShared = value;
  }
  public resetDstGeolocListShared() {
    this._dstGeolocListShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstGeolocListSharedInput() {
    return this._dstGeolocListShared;
  }

  // dst_geoloc_name - computed: false, optional: true, required: false
  private _dstGeolocName?: string; 
  public get dstGeolocName() {
    return this.getStringAttribute('dst_geoloc_name');
  }
  public set dstGeolocName(value: string) {
    this._dstGeolocName = value;
  }
  public resetDstGeolocName() {
    this._dstGeolocName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstGeolocNameInput() {
    return this._dstGeolocName;
  }

  // dst_ipv4_any - computed: false, optional: true, required: false
  private _dstIpv4Any?: string; 
  public get dstIpv4Any() {
    return this.getStringAttribute('dst_ipv4_any');
  }
  public set dstIpv4Any(value: string) {
    this._dstIpv4Any = value;
  }
  public resetDstIpv4Any() {
    this._dstIpv4Any = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpv4AnyInput() {
    return this._dstIpv4Any;
  }

  // dst_ipv6_any - computed: false, optional: true, required: false
  private _dstIpv6Any?: string; 
  public get dstIpv6Any() {
    return this.getStringAttribute('dst_ipv6_any');
  }
  public set dstIpv6Any(value: string) {
    this._dstIpv6Any = value;
  }
  public resetDstIpv6Any() {
    this._dstIpv6Any = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpv6AnyInput() {
    return this._dstIpv6Any;
  }

  // dst_zone - computed: false, optional: true, required: false
  private _dstZone?: string; 
  public get dstZone() {
    return this.getStringAttribute('dst_zone');
  }
  public set dstZone(value: string) {
    this._dstZone = value;
  }
  public resetDstZone() {
    this._dstZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstZoneInput() {
    return this._dstZone;
  }

  // dst_zone_any - computed: false, optional: true, required: false
  private _dstZoneAny?: string; 
  public get dstZoneAny() {
    return this.getStringAttribute('dst_zone_any');
  }
  public set dstZoneAny(value: string) {
    this._dstZoneAny = value;
  }
  public resetDstZoneAny() {
    this._dstZoneAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstZoneAnyInput() {
    return this._dstZoneAny;
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

  // ip_version - computed: false, optional: true, required: false
  private _ipVersion?: string; 
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }
  public set ipVersion(value: string) {
    this._ipVersion = value;
  }
  public resetIpVersion() {
    this._ipVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
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

  // remark - computed: false, optional: true, required: false
  private _remark?: string; 
  public get remark() {
    return this.getStringAttribute('remark');
  }
  public set remark(value: string) {
    this._remark = value;
  }
  public resetRemark() {
    this._remark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remarkInput() {
    return this._remark;
  }

  // rule_set_name - computed: false, optional: false, required: true
  private _ruleSetName?: string; 
  public get ruleSetName() {
    return this.getStringAttribute('rule_set_name');
  }
  public set ruleSetName(value: string) {
    this._ruleSetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSetNameInput() {
    return this._ruleSetName;
  }

  // service_any - computed: false, optional: true, required: false
  private _serviceAny?: string; 
  public get serviceAny() {
    return this.getStringAttribute('service_any');
  }
  public set serviceAny(value: string) {
    this._serviceAny = value;
  }
  public resetServiceAny() {
    this._serviceAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAnyInput() {
    return this._serviceAny;
  }

  // src_class_list - computed: false, optional: true, required: false
  private _srcClassList?: string; 
  public get srcClassList() {
    return this.getStringAttribute('src_class_list');
  }
  public set srcClassList(value: string) {
    this._srcClassList = value;
  }
  public resetSrcClassList() {
    this._srcClassList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcClassListInput() {
    return this._srcClassList;
  }

  // src_class_list_type - computed: false, optional: true, required: false
  private _srcClassListType?: string; 
  public get srcClassListType() {
    return this.getStringAttribute('src_class_list_type');
  }
  public set srcClassListType(value: string) {
    this._srcClassListType = value;
  }
  public resetSrcClassListType() {
    this._srcClassListType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcClassListTypeInput() {
    return this._srcClassListType;
  }

  // src_geoloc_list - computed: false, optional: true, required: false
  private _srcGeolocList?: string; 
  public get srcGeolocList() {
    return this.getStringAttribute('src_geoloc_list');
  }
  public set srcGeolocList(value: string) {
    this._srcGeolocList = value;
  }
  public resetSrcGeolocList() {
    this._srcGeolocList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcGeolocListInput() {
    return this._srcGeolocList;
  }

  // src_geoloc_list_shared - computed: false, optional: true, required: false
  private _srcGeolocListShared?: number; 
  public get srcGeolocListShared() {
    return this.getNumberAttribute('src_geoloc_list_shared');
  }
  public set srcGeolocListShared(value: number) {
    this._srcGeolocListShared = value;
  }
  public resetSrcGeolocListShared() {
    this._srcGeolocListShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcGeolocListSharedInput() {
    return this._srcGeolocListShared;
  }

  // src_geoloc_name - computed: false, optional: true, required: false
  private _srcGeolocName?: string; 
  public get srcGeolocName() {
    return this.getStringAttribute('src_geoloc_name');
  }
  public set srcGeolocName(value: string) {
    this._srcGeolocName = value;
  }
  public resetSrcGeolocName() {
    this._srcGeolocName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcGeolocNameInput() {
    return this._srcGeolocName;
  }

  // src_ipv4_any - computed: false, optional: true, required: false
  private _srcIpv4Any?: string; 
  public get srcIpv4Any() {
    return this.getStringAttribute('src_ipv4_any');
  }
  public set srcIpv4Any(value: string) {
    this._srcIpv4Any = value;
  }
  public resetSrcIpv4Any() {
    this._srcIpv4Any = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpv4AnyInput() {
    return this._srcIpv4Any;
  }

  // src_ipv6_any - computed: false, optional: true, required: false
  private _srcIpv6Any?: string; 
  public get srcIpv6Any() {
    return this.getStringAttribute('src_ipv6_any');
  }
  public set srcIpv6Any(value: string) {
    this._srcIpv6Any = value;
  }
  public resetSrcIpv6Any() {
    this._srcIpv6Any = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpv6AnyInput() {
    return this._srcIpv6Any;
  }

  // src_zone - computed: false, optional: true, required: false
  private _srcZone?: string; 
  public get srcZone() {
    return this.getStringAttribute('src_zone');
  }
  public set srcZone(value: string) {
    this._srcZone = value;
  }
  public resetSrcZone() {
    this._srcZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcZoneInput() {
    return this._srcZone;
  }

  // src_zone_any - computed: false, optional: true, required: false
  private _srcZoneAny?: string; 
  public get srcZoneAny() {
    return this.getStringAttribute('src_zone_any');
  }
  public set srcZoneAny(value: string) {
    this._srcZoneAny = value;
  }
  public resetSrcZoneAny() {
    this._srcZoneAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcZoneAnyInput() {
    return this._srcZoneAny;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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

  // action_group - computed: false, optional: true, required: false
  private _actionGroup = new TrafficControlRuleSetRuleActionGroupOutputReference(this, "action_group");
  public get actionGroup() {
    return this._actionGroup;
  }
  public putActionGroup(value: TrafficControlRuleSetRuleActionGroup) {
    this._actionGroup.internalValue = value;
  }
  public resetActionGroup() {
    this._actionGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionGroupInput() {
    return this._actionGroup.internalValue;
  }

  // app_list - computed: false, optional: true, required: false
  private _appList = new TrafficControlRuleSetRuleAppListStructList(this, "app_list", false);
  public get appList() {
    return this._appList;
  }
  public putAppList(value: TrafficControlRuleSetRuleAppListStruct[] | cdktf.IResolvable) {
    this._appList.internalValue = value;
  }
  public resetAppList() {
    this._appList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appListInput() {
    return this._appList.internalValue;
  }

  // dest_list - computed: false, optional: true, required: false
  private _destList = new TrafficControlRuleSetRuleDestListStructList(this, "dest_list", false);
  public get destList() {
    return this._destList;
  }
  public putDestList(value: TrafficControlRuleSetRuleDestListStruct[] | cdktf.IResolvable) {
    this._destList.internalValue = value;
  }
  public resetDestList() {
    this._destList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destListInput() {
    return this._destList.internalValue;
  }

  // move_rule - computed: false, optional: true, required: false
  private _moveRule = new TrafficControlRuleSetRuleMoveRuleOutputReference(this, "move_rule");
  public get moveRule() {
    return this._moveRule;
  }
  public putMoveRule(value: TrafficControlRuleSetRuleMoveRule) {
    this._moveRule.internalValue = value;
  }
  public resetMoveRule() {
    this._moveRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moveRuleInput() {
    return this._moveRule.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new TrafficControlRuleSetRuleSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: TrafficControlRuleSetRuleSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // service_list - computed: false, optional: true, required: false
  private _serviceList = new TrafficControlRuleSetRuleServiceListStructList(this, "service_list", false);
  public get serviceList() {
    return this._serviceList;
  }
  public putServiceList(value: TrafficControlRuleSetRuleServiceListStruct[] | cdktf.IResolvable) {
    this._serviceList.internalValue = value;
  }
  public resetServiceList() {
    this._serviceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceListInput() {
    return this._serviceList.internalValue;
  }

  // source_list - computed: false, optional: true, required: false
  private _sourceList = new TrafficControlRuleSetRuleSourceListStructList(this, "source_list", false);
  public get sourceList() {
    return this._sourceList;
  }
  public putSourceList(value: TrafficControlRuleSetRuleSourceListStruct[] | cdktf.IResolvable) {
    this._sourceList.internalValue = value;
  }
  public resetSourceList() {
    this._sourceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceListInput() {
    return this._sourceList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_any: cdktf.stringToTerraform(this._applicationAny),
      derived_attribute: cdktf.stringToTerraform(this._derivedAttribute),
      dst_class_list: cdktf.stringToTerraform(this._dstClassList),
      dst_domain_list: cdktf.stringToTerraform(this._dstDomainList),
      dst_geoloc_list: cdktf.stringToTerraform(this._dstGeolocList),
      dst_geoloc_list_shared: cdktf.numberToTerraform(this._dstGeolocListShared),
      dst_geoloc_name: cdktf.stringToTerraform(this._dstGeolocName),
      dst_ipv4_any: cdktf.stringToTerraform(this._dstIpv4Any),
      dst_ipv6_any: cdktf.stringToTerraform(this._dstIpv6Any),
      dst_zone: cdktf.stringToTerraform(this._dstZone),
      dst_zone_any: cdktf.stringToTerraform(this._dstZoneAny),
      id: cdktf.stringToTerraform(this._id),
      ip_version: cdktf.stringToTerraform(this._ipVersion),
      name: cdktf.stringToTerraform(this._name),
      remark: cdktf.stringToTerraform(this._remark),
      rule_set_name: cdktf.stringToTerraform(this._ruleSetName),
      service_any: cdktf.stringToTerraform(this._serviceAny),
      src_class_list: cdktf.stringToTerraform(this._srcClassList),
      src_class_list_type: cdktf.stringToTerraform(this._srcClassListType),
      src_geoloc_list: cdktf.stringToTerraform(this._srcGeolocList),
      src_geoloc_list_shared: cdktf.numberToTerraform(this._srcGeolocListShared),
      src_geoloc_name: cdktf.stringToTerraform(this._srcGeolocName),
      src_ipv4_any: cdktf.stringToTerraform(this._srcIpv4Any),
      src_ipv6_any: cdktf.stringToTerraform(this._srcIpv6Any),
      src_zone: cdktf.stringToTerraform(this._srcZone),
      src_zone_any: cdktf.stringToTerraform(this._srcZoneAny),
      status: cdktf.stringToTerraform(this._status),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      action_group: trafficControlRuleSetRuleActionGroupToTerraform(this._actionGroup.internalValue),
      app_list: cdktf.listMapper(trafficControlRuleSetRuleAppListStructToTerraform, true)(this._appList.internalValue),
      dest_list: cdktf.listMapper(trafficControlRuleSetRuleDestListStructToTerraform, true)(this._destList.internalValue),
      move_rule: trafficControlRuleSetRuleMoveRuleToTerraform(this._moveRule.internalValue),
      sampling_enable: cdktf.listMapper(trafficControlRuleSetRuleSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
      service_list: cdktf.listMapper(trafficControlRuleSetRuleServiceListStructToTerraform, true)(this._serviceList.internalValue),
      source_list: cdktf.listMapper(trafficControlRuleSetRuleSourceListStructToTerraform, true)(this._sourceList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_any: {
        value: cdktf.stringToHclTerraform(this._applicationAny),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      derived_attribute: {
        value: cdktf.stringToHclTerraform(this._derivedAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_class_list: {
        value: cdktf.stringToHclTerraform(this._dstClassList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_domain_list: {
        value: cdktf.stringToHclTerraform(this._dstDomainList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_geoloc_list: {
        value: cdktf.stringToHclTerraform(this._dstGeolocList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_geoloc_list_shared: {
        value: cdktf.numberToHclTerraform(this._dstGeolocListShared),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dst_geoloc_name: {
        value: cdktf.stringToHclTerraform(this._dstGeolocName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_ipv4_any: {
        value: cdktf.stringToHclTerraform(this._dstIpv4Any),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_ipv6_any: {
        value: cdktf.stringToHclTerraform(this._dstIpv6Any),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_zone: {
        value: cdktf.stringToHclTerraform(this._dstZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_zone_any: {
        value: cdktf.stringToHclTerraform(this._dstZoneAny),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_version: {
        value: cdktf.stringToHclTerraform(this._ipVersion),
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
      remark: {
        value: cdktf.stringToHclTerraform(this._remark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_set_name: {
        value: cdktf.stringToHclTerraform(this._ruleSetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_any: {
        value: cdktf.stringToHclTerraform(this._serviceAny),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_class_list: {
        value: cdktf.stringToHclTerraform(this._srcClassList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_class_list_type: {
        value: cdktf.stringToHclTerraform(this._srcClassListType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_geoloc_list: {
        value: cdktf.stringToHclTerraform(this._srcGeolocList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_geoloc_list_shared: {
        value: cdktf.numberToHclTerraform(this._srcGeolocListShared),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      src_geoloc_name: {
        value: cdktf.stringToHclTerraform(this._srcGeolocName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_ipv4_any: {
        value: cdktf.stringToHclTerraform(this._srcIpv4Any),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_ipv6_any: {
        value: cdktf.stringToHclTerraform(this._srcIpv6Any),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_zone: {
        value: cdktf.stringToHclTerraform(this._srcZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_zone_any: {
        value: cdktf.stringToHclTerraform(this._srcZoneAny),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      action_group: {
        value: trafficControlRuleSetRuleActionGroupToHclTerraform(this._actionGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TrafficControlRuleSetRuleActionGroupList",
      },
      app_list: {
        value: cdktf.listMapperHcl(trafficControlRuleSetRuleAppListStructToHclTerraform, true)(this._appList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TrafficControlRuleSetRuleAppListStructList",
      },
      dest_list: {
        value: cdktf.listMapperHcl(trafficControlRuleSetRuleDestListStructToHclTerraform, true)(this._destList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TrafficControlRuleSetRuleDestListStructList",
      },
      move_rule: {
        value: trafficControlRuleSetRuleMoveRuleToHclTerraform(this._moveRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TrafficControlRuleSetRuleMoveRuleList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(trafficControlRuleSetRuleSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TrafficControlRuleSetRuleSamplingEnableList",
      },
      service_list: {
        value: cdktf.listMapperHcl(trafficControlRuleSetRuleServiceListStructToHclTerraform, true)(this._serviceList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TrafficControlRuleSetRuleServiceListStructList",
      },
      source_list: {
        value: cdktf.listMapperHcl(trafficControlRuleSetRuleSourceListStructToHclTerraform, true)(this._sourceList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TrafficControlRuleSetRuleSourceListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
