// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/session_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SessionFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/session_filter#id SessionFilter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Session filter name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/session_filter#name SessionFilter#name}
  */
  readonly name: string;
  /**
  * Set filter criteria
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/session_filter#set SessionFilter#set}
  */
  readonly set?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/session_filter#uuid SessionFilter#uuid}
  */
  readonly uuid?: string;
  /**
  * filter_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/session_filter#filter_cfg SessionFilter#filter_cfg}
  */
  readonly filterCfg?: SessionFilterFilterCfg;
}
export interface SessionFilterFilterCfg {
  /**
  * Specify application(s), separated by comma (For example: http,tcp)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/session_filter#app SessionFilter#app}
  */
  readonly app?: string;
  /**
  * 'aaa': Protocol/application used for AAA (Authentification, Authorization and Accounting) purposes.; 'adult-content': Adult content protocol/application.; 'advertising': Advertising networks and applications.; 'application-enforcing-tls': Application known to enforce HSTS and thus use of TLS.; 'analytics-and-statistics': User analytics and statistics protocol/application.; 'anonymizers-and-proxies': Traffic-anonymization protocol/application.; 'audio-chat': Protocol/application used for Audio Chat.; 'basic': Covers all protocols required for basic classification, including most networking protocols as well as standard protocols like HTTP.; 'blog': Blogging platform protocol/application.; 'cdn': Protocol/application used for Content-Delivery Networks.; 'certification-authority': Certification Authority for SSL/TLS certificate.; 'chat': Protocol/application used for Text Chat.; 'classified-ads': Protocol/application used for Classified Advertisements.; 'cloud-based-services': SaaS and/or PaaS cloud based services.; 'crowdfunding': Service for funding a project or venture by raising small amounts of money from a large number of people, typically via the Internet.; 'cryptocurrency': Services for mining cryptocurrencies, for example a Crypto Web Browser (an application that mines crypto currency in the background while its user browses the web).; 'database': Database-specific protocols.; 'disposable-email': Service offering Disposable Email Accounts (DEA). DEA is a technique to share temporary email address between many users.; 'ebook-reader': Services for e-book readers, i.e. connected devices that display electronic books (typically using e-ink displays to reduce glare and eye strain).; 'education': Protocols offering education services and online courses.; 'email': Native email protocol.; 'enterprise': Protocol/application used in an enterprise network.; 'file-management': Protocol/application designed specifically for file management and exchange. This can include bona fide network protocols (like SMB) as well as web/cloud services (like Dropbox).; 'file-transfer': Protocol that offers file transferring as a secondary feature. This typically includes IM, WebMail, and other protocols that allow file transfers in addition to their principal function.; 'forum': Online forum protocol/application.; 'gaming': Protocol/application used by games.; 'healthcare': Protocols offering medical services, i.e protocols used in medical environment.; 'instant-messaging-and-multimedia-conferencing': Protocol/application used for Instant Messaging or Multi-Conferencing.; 'internet-of-things': Internet Of Things protocol/application.; 'map-service': Digital Maps service (web site and their related API).; 'mobile': Mobile-specific protocol/application.; 'multimedia-streaming': Protocol/application used for multimedia streaming.; 'networking': Protocol used for (inter) networking purpose.; 'news-portal': Protocol/application used for News Portals.; 'payment-service': Application offering online services for accepting electronic payments by a variety of payment methods (credit card, bank-based payments such as direct debit, bank transfer, etc).; 'peer-to-peer': Protocol/application used for Peer-to-peer purposes.; 'remote-access': Protocol/application used for remote access.; 'scada': SCADA (Supervisory control and data acquisition) protocols, all generations.; 'social-networks': Social networking application.; 'software-update': Auto-update protocol.; 'speedtest': Speedtest application allowing to access quality of Internet connection (upload, download, latency, etc).; 'standards-based': Protocol issued from standardized bodies such as IETF, ITU, IEEE, ETSI, OIF.; 'transportation': Transportation services, for example smartphone applications that allow users to hail a taxi.; 'video-chat': Protocol/application used for Video Chat.; 'voip': Application used for Voice-Over-IP.; 'vpn-tunnels': Protocol/application used for VPN or tunneling purposes.; 'web': Application based on HTTP/HTTPS.; 'web-e-commerce': Protocol/application used for E-commerce websites.; 'web-search-engines': Protocol/application used for Web search portals.; 'web-websites': Protocol/application used for Company Websites.; 'webmails': Web-based e-mail application.; 'web-ext-adult': Web Extension Adult; 'web-ext-auctions': Web Extension Auctions; 'web-ext-blogs': Web Extension Blogs; 'web-ext-business-and-economy': Web Extension Business and Economy; 'web-ext-cdns': Web Extension CDNs; 'web-ext-collaboration': Web Extension Collaboration; 'web-ext-computer-and-internet-info': Web Extension Computer and Internet Info; 'web-ext-computer-and-internet-security': Web Extension Computer and Internet Security; 'web-ext-dating': Web Extension Dating; 'web-ext-educational-institutions': Web Extension Educational Institutions; 'web-ext-entertainment-and-arts': Web Extension Entertainment and Arts; 'web-ext-fashion-and-beauty': Web Extension Fashion and Beauty; 'web-ext-file-share': Web Extension File Share; 'web-ext-financial-services': Web Extension Financial Services; 'web-ext-gambling': Web Extension Gambling; 'web-ext-games': Web Extension Games; 'web-ext-government': Web Extension Government; 'web-ext-health-and-medicine': Web Extension Health and Medicine; 'web-ext-individual-stock-advice-and-tools': Web Extension Individual Stock Advice and Tools; 'web-ext-internet-portals': Web Extension Internet Portals; 'web-ext-job-search': Web Extension Job Search; 'web-ext-local-information': Web Extension Local Information; 'web-ext-malware': Web Extension Malware; 'web-ext-motor-vehicles': Web Extension Motor Vehicles; 'web-ext-music': Web Extension Music; 'web-ext-news': Web Extension News; 'web-ext-p2p': Web Extension P2P; 'web-ext-parked-sites': Web Extension Parked Sites; 'web-ext-proxy-avoid-and-anonymizers': Web Extension Proxy Avoid and Anonymizers; 'web-ext-real-estate': Web Extension Real Estate; 'web-ext-reference-and-research': Web Extension Reference and Research; 'web-ext-search-engines': Web Extension Search Engines; 'web-ext-shopping': Web Extension Shopping; 'web-ext-social-network': Web Extension Social Network; 'web-ext-society': Web Extension Society; 'web-ext-software': Web Extension Software; 'web-ext-sports': Web Extension Sports; 'web-ext-streaming-media': Web Extension Streaming Media; 'web-ext-training-and-tools': Web Extension Training and Tools; 'web-ext-translation': Web Extension Translation; 'web-ext-travel': Web Extension Travel; 'web-ext-web-advertisements': Web Extension Web Advertisements; 'web-ext-web-based-email': Web Extension Web based Email; 'web-ext-web-hosting': Web Extension Web Hosting; 'web-ext-web-service': Web Extension Web Service;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/session_filter#app_category SessionFilter#app_category}
  */
  readonly appCategory?: string;
  /**
  * Forward Destination IP (Destination IP address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/session_filter#dest_addr SessionFilter#dest_addr}
  */
  readonly destAddr?: string;
  /**
  * Forward Destination IP Subnet (Destination Netmask)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/session_filter#dest_mask SessionFilter#dest_mask}
  */
  readonly destMask?: string;
  /**
  * Forward Destination Port (Dest Port)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/session_filter#dport2 SessionFilter#dport2}
  */
  readonly dport2?: number;
  /**
  * 'ipv6': Display ipv6 sessions only; 'sip': SIP sessions;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/session_filter#session_type SessionFilter#session_type}
  */
  readonly sessionType?: string;
  /**
  * Forward Source IP (Source IP address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/session_filter#source_addr SessionFilter#source_addr}
  */
  readonly sourceAddr?: string;
  /**
  * Forward Source IP Subnet (Source Netmask)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/session_filter#source_mask SessionFilter#source_mask}
  */
  readonly sourceMask?: string;
  /**
  * Forward Source Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/session_filter#source_port SessionFilter#source_port}
  */
  readonly sourcePort?: number;
}

export function sessionFilterFilterCfgToTerraform(struct?: SessionFilterFilterCfgOutputReference | SessionFilterFilterCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app: cdktf.stringToTerraform(struct!.app),
    app_category: cdktf.stringToTerraform(struct!.appCategory),
    dest_addr: cdktf.stringToTerraform(struct!.destAddr),
    dest_mask: cdktf.stringToTerraform(struct!.destMask),
    dport2: cdktf.numberToTerraform(struct!.dport2),
    session_type: cdktf.stringToTerraform(struct!.sessionType),
    source_addr: cdktf.stringToTerraform(struct!.sourceAddr),
    source_mask: cdktf.stringToTerraform(struct!.sourceMask),
    source_port: cdktf.numberToTerraform(struct!.sourcePort),
  }
}


export function sessionFilterFilterCfgToHclTerraform(struct?: SessionFilterFilterCfgOutputReference | SessionFilterFilterCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app: {
      value: cdktf.stringToHclTerraform(struct!.app),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_category: {
      value: cdktf.stringToHclTerraform(struct!.appCategory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dest_addr: {
      value: cdktf.stringToHclTerraform(struct!.destAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dest_mask: {
      value: cdktf.stringToHclTerraform(struct!.destMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dport2: {
      value: cdktf.numberToHclTerraform(struct!.dport2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_type: {
      value: cdktf.stringToHclTerraform(struct!.sessionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_addr: {
      value: cdktf.stringToHclTerraform(struct!.sourceAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_mask: {
      value: cdktf.stringToHclTerraform(struct!.sourceMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_port: {
      value: cdktf.numberToHclTerraform(struct!.sourcePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SessionFilterFilterCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SessionFilterFilterCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._app !== undefined) {
      hasAnyValues = true;
      internalValueResult.app = this._app;
    }
    if (this._appCategory !== undefined) {
      hasAnyValues = true;
      internalValueResult.appCategory = this._appCategory;
    }
    if (this._destAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.destAddr = this._destAddr;
    }
    if (this._destMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.destMask = this._destMask;
    }
    if (this._dport2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dport2 = this._dport2;
    }
    if (this._sessionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionType = this._sessionType;
    }
    if (this._sourceAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddr = this._sourceAddr;
    }
    if (this._sourceMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceMask = this._sourceMask;
    }
    if (this._sourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePort = this._sourcePort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SessionFilterFilterCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._app = undefined;
      this._appCategory = undefined;
      this._destAddr = undefined;
      this._destMask = undefined;
      this._dport2 = undefined;
      this._sessionType = undefined;
      this._sourceAddr = undefined;
      this._sourceMask = undefined;
      this._sourcePort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._app = value.app;
      this._appCategory = value.appCategory;
      this._destAddr = value.destAddr;
      this._destMask = value.destMask;
      this._dport2 = value.dport2;
      this._sessionType = value.sessionType;
      this._sourceAddr = value.sourceAddr;
      this._sourceMask = value.sourceMask;
      this._sourcePort = value.sourcePort;
    }
  }

  // app - computed: false, optional: true, required: false
  private _app?: string; 
  public get app() {
    return this.getStringAttribute('app');
  }
  public set app(value: string) {
    this._app = value;
  }
  public resetApp() {
    this._app = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appInput() {
    return this._app;
  }

  // app_category - computed: false, optional: true, required: false
  private _appCategory?: string; 
  public get appCategory() {
    return this.getStringAttribute('app_category');
  }
  public set appCategory(value: string) {
    this._appCategory = value;
  }
  public resetAppCategory() {
    this._appCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appCategoryInput() {
    return this._appCategory;
  }

  // dest_addr - computed: false, optional: true, required: false
  private _destAddr?: string; 
  public get destAddr() {
    return this.getStringAttribute('dest_addr');
  }
  public set destAddr(value: string) {
    this._destAddr = value;
  }
  public resetDestAddr() {
    this._destAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destAddrInput() {
    return this._destAddr;
  }

  // dest_mask - computed: false, optional: true, required: false
  private _destMask?: string; 
  public get destMask() {
    return this.getStringAttribute('dest_mask');
  }
  public set destMask(value: string) {
    this._destMask = value;
  }
  public resetDestMask() {
    this._destMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destMaskInput() {
    return this._destMask;
  }

  // dport2 - computed: false, optional: true, required: false
  private _dport2?: number; 
  public get dport2() {
    return this.getNumberAttribute('dport2');
  }
  public set dport2(value: number) {
    this._dport2 = value;
  }
  public resetDport2() {
    this._dport2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dport2Input() {
    return this._dport2;
  }

  // session_type - computed: false, optional: true, required: false
  private _sessionType?: string; 
  public get sessionType() {
    return this.getStringAttribute('session_type');
  }
  public set sessionType(value: string) {
    this._sessionType = value;
  }
  public resetSessionType() {
    this._sessionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTypeInput() {
    return this._sessionType;
  }

  // source_addr - computed: false, optional: true, required: false
  private _sourceAddr?: string; 
  public get sourceAddr() {
    return this.getStringAttribute('source_addr');
  }
  public set sourceAddr(value: string) {
    this._sourceAddr = value;
  }
  public resetSourceAddr() {
    this._sourceAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddrInput() {
    return this._sourceAddr;
  }

  // source_mask - computed: false, optional: true, required: false
  private _sourceMask?: string; 
  public get sourceMask() {
    return this.getStringAttribute('source_mask');
  }
  public set sourceMask(value: string) {
    this._sourceMask = value;
  }
  public resetSourceMask() {
    this._sourceMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceMaskInput() {
    return this._sourceMask;
  }

  // source_port - computed: false, optional: true, required: false
  private _sourcePort?: number; 
  public get sourcePort() {
    return this.getNumberAttribute('source_port');
  }
  public set sourcePort(value: number) {
    this._sourcePort = value;
  }
  public resetSourcePort() {
    this._sourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/session_filter thunder_session_filter}
*/
export class SessionFilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_session_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SessionFilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SessionFilter to import
  * @param importFromId The id of the existing SessionFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/session_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SessionFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_session_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/session_filter thunder_session_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SessionFilterConfig
  */
  public constructor(scope: Construct, id: string, config: SessionFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_session_filter',
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
    this._id = config.id;
    this._name = config.name;
    this._set = config.set;
    this._uuid = config.uuid;
    this._filterCfg.internalValue = config.filterCfg;
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

  // set - computed: false, optional: true, required: false
  private _set?: number; 
  public get set() {
    return this.getNumberAttribute('set');
  }
  public set set(value: number) {
    this._set = value;
  }
  public resetSet() {
    this._set = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set;
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

  // filter_cfg - computed: false, optional: true, required: false
  private _filterCfg = new SessionFilterFilterCfgOutputReference(this, "filter_cfg");
  public get filterCfg() {
    return this._filterCfg;
  }
  public putFilterCfg(value: SessionFilterFilterCfg) {
    this._filterCfg.internalValue = value;
  }
  public resetFilterCfg() {
    this._filterCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterCfgInput() {
    return this._filterCfg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      set: cdktf.numberToTerraform(this._set),
      uuid: cdktf.stringToTerraform(this._uuid),
      filter_cfg: sessionFilterFilterCfgToTerraform(this._filterCfg.internalValue),
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
      set: {
        value: cdktf.numberToHclTerraform(this._set),
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
      filter_cfg: {
        value: sessionFilterFilterCfgToHclTerraform(this._filterCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SessionFilterFilterCfgList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
