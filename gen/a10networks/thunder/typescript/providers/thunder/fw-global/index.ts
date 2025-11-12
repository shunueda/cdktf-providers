// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_global
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FwGlobalConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'honor-rule-set': Honors firewall rule-sets (Default); 'override-rule-set': Override firewall rule-sets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_global#alg_processing FwGlobal#alg_processing}
  */
  readonly algProcessing?: string;
  /**
  * Allow TCP non-syn packets to trigger session creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_global#allow_non_syn_session_create FwGlobal#allow_non_syn_session_create}
  */
  readonly allowNonSynSessionCreate?: number;
  /**
  * Disable exporting application protocol/category statistics to Harmony Controller
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_global#disable_application_metrics FwGlobal#disable_application_metrics}
  */
  readonly disableApplicationMetrics?: number;
  /**
  * disable create sessions for non TCP/UDP/ICMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_global#disable_ip_fw_sessions FwGlobal#disable_ip_fw_sessions}
  */
  readonly disableIpFwSessions?: number;
  /**
  * disable logs with undetermined rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_global#disable_undetermined_rule_logs FwGlobal#disable_undetermined_rule_logs}
  */
  readonly disableUndeterminedRuleLogs?: number;
  /**
  * 'ipv4': support dsr for ipv4 traffic; 'ipv6': support dsr for ipv6 traffic; 'all': support dsr for both ipv4 and ipv6;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_global#dsr_mode_support FwGlobal#dsr_mode_support}
  */
  readonly dsrModeSupport?: string;
  /**
  * 'disable': Disable extended matching;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_global#extended_matching FwGlobal#extended_matching}
  */
  readonly extendedMatching?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_global#id FwGlobal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'enable': enable; 'disable': disable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_global#inbound_refresh FwGlobal#inbound_refresh}
  */
  readonly inboundRefresh?: string;
  /**
  * 'enable': enable; 'disable': disable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_global#inbound_refresh_full_cone FwGlobal#inbound_refresh_full_cone}
  */
  readonly inboundRefreshFullCone?: string;
  /**
  * STUN timeout (default: 2 minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_global#listen_on_port_timeout FwGlobal#listen_on_port_timeout}
  */
  readonly listenOnPortTimeout?: number;
  /**
  * 'enable': Enable; 'disable': Disable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_global#natip_ddos_protection FwGlobal#natip_ddos_protection}
  */
  readonly natipDdosProtection?: string;
  /**
  * 'forward': Forward; 'next-service-mode': Service to be applied chosen based on configuration;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_global#permit_default_action FwGlobal#permit_default_action}
  */
  readonly permitDefaultAction?: string;
  /**
  * Use the user's source MAC for the next hop rather than the routing table (default: off)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_global#respond_to_user_mac FwGlobal#respond_to_user_mac}
  */
  readonly respondToUserMac?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_global#uuid FwGlobal#uuid}
  */
  readonly uuid?: string;
  /**
  * disable_app_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_global#disable_app_list FwGlobal#disable_app_list}
  */
  readonly disableAppList?: FwGlobalDisableAppListStruct[] | cdktf.IResolvable;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_global#sampling_enable FwGlobal#sampling_enable}
  */
  readonly samplingEnable?: FwGlobalSamplingEnable[] | cdktf.IResolvable;
}
export interface FwGlobalDisableAppListStruct {
  /**
  * 'aaa': Protocol/application used for AAA (Authentification, Authorization and Accounting) purposes.; 'adult-content': Adult content protocol/application.; 'advertising': Advertising networks and applications.; 'application-enforcing-tls': Application known to enforce HSTS and thus use of TLS.; 'analytics-and-statistics': User analytics and statistics protocol/application.; 'anonymizers-and-proxies': Traffic-anonymization protocol/application.; 'audio-chat': Protocol/application used for Audio Chat.; 'basic': Covers all protocols required for basic classification, including most networking protocols as well as standard protocols like HTTP.; 'blog': Blogging platform protocol/application.; 'cdn': Protocol/application used for Content-Delivery Networks.; 'certification-authority': Certification Authority for SSL/TLS certificate.; 'chat': Protocol/application used for Text Chat.; 'classified-ads': Protocol/application used for Classified Advertisements.; 'cloud-based-services': SaaS and/or PaaS cloud based services.; 'crowdfunding': Service for funding a project or venture by raising small amounts of money from a large number of people, typically via the Internet.; 'cryptocurrency': Services for mining cryptocurrencies, for example a Crypto Web Browser (an application that mines crypto currency in the background while its user browses the web).; 'database': Database-specific protocols.; 'disposable-email': Service offering Disposable Email Accounts (DEA). DEA is a technique to share temporary email address between many users.; 'ebook-reader': Services for e-book readers, i.e. connected devices that display electronic books (typically using e-ink displays to reduce glare and eye strain).; 'education': Protocols offering education services and online courses.; 'email': Native email protocol.; 'enterprise': Protocol/application used in an enterprise network.; 'file-management': Protocol/application designed specifically for file management and exchange. This can include bona fide network protocols (like SMB) as well as web/cloud services (like Dropbox).; 'file-transfer': Protocol that offers file transferring as a secondary feature. This typically includes IM, WebMail, and other protocols that allow file transfers in addition to their principal function.; 'forum': Online forum protocol/application.; 'gaming': Protocol/application used by games.; 'healthcare': Protocols offering medical services, i.e protocols used in medical environment.; 'instant-messaging-and-multimedia-conferencing': Protocol/application used for Instant Messaging or Multi-Conferencing.; 'internet-of-things': Internet Of Things protocol/application.; 'map-service': Digital Maps service (web site and their related API).; 'mobile': Mobile-specific protocol/application.; 'multimedia-streaming': Protocol/application used for multimedia streaming.; 'networking': Protocol used for (inter) networking purpose.; 'news-portal': Protocol/application used for News Portals.; 'payment-service': Application offering online services for accepting electronic payments by a variety of payment methods (credit card, bank-based payments such as direct debit, bank transfer, etc).; 'peer-to-peer': Protocol/application used for Peer-to-peer purposes.; 'remote-access': Protocol/application used for remote access.; 'scada': SCADA (Supervisory control and data acquisition) protocols, all generations.; 'social-networks': Social networking application.; 'software-update': Auto-update protocol.; 'speedtest': Speedtest application allowing to access quality of Internet connection (upload, download, latency, etc).; 'standards-based': Protocol issued from standardized bodies such as IETF, ITU, IEEE, ETSI, OIF.; 'transportation': Transportation services, for example smartphone applications that allow users to hail a taxi.; 'video-chat': Protocol/application used for Video Chat.; 'voip': Application used for Voice-Over-IP.; 'vpn-tunnels': Protocol/application used for VPN or tunneling purposes.; 'web': Application based on HTTP/HTTPS.; 'web-e-commerce': Protocol/application used for E-commerce websites.; 'web-search-engines': Protocol/application used for Web search portals.; 'web-websites': Protocol/application used for Company Websites.; 'webmails': Web-based e-mail application.; 'web-ext-adult': Web Extension Adult; 'web-ext-auctions': Web Extension Auctions; 'web-ext-blogs': Web Extension Blogs; 'web-ext-business-and-economy': Web Extension Business and Economy; 'web-ext-cdns': Web Extension CDNs; 'web-ext-collaboration': Web Extension Collaboration; 'web-ext-computer-and-internet-info': Web Extension Computer and Internet Info; 'web-ext-computer-and-internet-security': Web Extension Computer and Internet Security; 'web-ext-dating': Web Extension Dating; 'web-ext-educational-institutions': Web Extension Educational Institutions; 'web-ext-entertainment-and-arts': Web Extension Entertainment and Arts; 'web-ext-fashion-and-beauty': Web Extension Fashion and Beauty; 'web-ext-file-share': Web Extension File Share; 'web-ext-financial-services': Web Extension Financial Services; 'web-ext-gambling': Web Extension Gambling; 'web-ext-games': Web Extension Games; 'web-ext-government': Web Extension Government; 'web-ext-health-and-medicine': Web Extension Health and Medicine; 'web-ext-individual-stock-advice-and-tools': Web Extension Individual Stock Advice and Tools; 'web-ext-internet-portals': Web Extension Internet Portals; 'web-ext-job-search': Web Extension Job Search; 'web-ext-local-information': Web Extension Local Information; 'web-ext-malware': Web Extension Malware; 'web-ext-motor-vehicles': Web Extension Motor Vehicles; 'web-ext-music': Web Extension Music; 'web-ext-news': Web Extension News; 'web-ext-p2p': Web Extension P2P; 'web-ext-parked-sites': Web Extension Parked Sites; 'web-ext-proxy-avoid-and-anonymizers': Web Extension Proxy Avoid and Anonymizers; 'web-ext-real-estate': Web Extension Real Estate; 'web-ext-reference-and-research': Web Extension Reference and Research; 'web-ext-search-engines': Web Extension Search Engines; 'web-ext-shopping': Web Extension Shopping; 'web-ext-social-network': Web Extension Social Network; 'web-ext-society': Web Extension Society; 'web-ext-software': Web Extension Software; 'web-ext-sports': Web Extension Sports; 'web-ext-streaming-media': Web Extension Streaming Media; 'web-ext-training-and-tools': Web Extension Training and Tools; 'web-ext-translation': Web Extension Translation; 'web-ext-travel': Web Extension Travel; 'web-ext-web-advertisements': Web Extension Web Advertisements; 'web-ext-web-based-email': Web Extension Web based Email; 'web-ext-web-hosting': Web Extension Web Hosting; 'web-ext-web-service': Web Extension Web Service;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_global#disable_application_category FwGlobal#disable_application_category}
  */
  readonly disableApplicationCategory?: string;
  /**
  * Disable specific application protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_global#disable_application_protocol FwGlobal#disable_application_protocol}
  */
  readonly disableApplicationProtocol?: string;
}

export function fwGlobalDisableAppListStructToTerraform(struct?: FwGlobalDisableAppListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_application_category: cdktf.stringToTerraform(struct!.disableApplicationCategory),
    disable_application_protocol: cdktf.stringToTerraform(struct!.disableApplicationProtocol),
  }
}


export function fwGlobalDisableAppListStructToHclTerraform(struct?: FwGlobalDisableAppListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_application_category: {
      value: cdktf.stringToHclTerraform(struct!.disableApplicationCategory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_application_protocol: {
      value: cdktf.stringToHclTerraform(struct!.disableApplicationProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwGlobalDisableAppListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FwGlobalDisableAppListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableApplicationCategory !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableApplicationCategory = this._disableApplicationCategory;
    }
    if (this._disableApplicationProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableApplicationProtocol = this._disableApplicationProtocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwGlobalDisableAppListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableApplicationCategory = undefined;
      this._disableApplicationProtocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableApplicationCategory = value.disableApplicationCategory;
      this._disableApplicationProtocol = value.disableApplicationProtocol;
    }
  }

  // disable_application_category - computed: false, optional: true, required: false
  private _disableApplicationCategory?: string; 
  public get disableApplicationCategory() {
    return this.getStringAttribute('disable_application_category');
  }
  public set disableApplicationCategory(value: string) {
    this._disableApplicationCategory = value;
  }
  public resetDisableApplicationCategory() {
    this._disableApplicationCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableApplicationCategoryInput() {
    return this._disableApplicationCategory;
  }

  // disable_application_protocol - computed: false, optional: true, required: false
  private _disableApplicationProtocol?: string; 
  public get disableApplicationProtocol() {
    return this.getStringAttribute('disable_application_protocol');
  }
  public set disableApplicationProtocol(value: string) {
    this._disableApplicationProtocol = value;
  }
  public resetDisableApplicationProtocol() {
    this._disableApplicationProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableApplicationProtocolInput() {
    return this._disableApplicationProtocol;
  }
}

export class FwGlobalDisableAppListStructList extends cdktf.ComplexList {
  public internalValue? : FwGlobalDisableAppListStruct[] | cdktf.IResolvable

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
  public get(index: number): FwGlobalDisableAppListStructOutputReference {
    return new FwGlobalDisableAppListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FwGlobalSamplingEnable {
  /**
  * 'all': all; 'tcp_fullcone_created': TCP Full-cone Created; 'tcp_fullcone_freed': TCP Full-cone Freed; 'udp_fullcone_created': UDP Full-cone Created; 'udp_fullcone_freed': UDP Full-cone Freed; 'fullcone_creation_failure': Full-Cone Creation Failure; 'data_session_created': Data Session Created; 'data_session_created_local': Data Session Created Local; 'dyn_blist_sess_sp': Dynamic Blacklist Session (Slowpath); 'data_session_freed': Data Session Freed; 'data_session_freed_local': Data Session Freed Local; 'dyn_blist_sess_created': Dynamic Blacklist Session Created; 'dyn_blist_sess_freed': Dynamic Blacklist Freed; 'dyn_blist_pkt_drop': Dynamic Blacklist - Packet Drop; 'dyn_blist_pkt_rate_low': Dynamic Blacklist - Pkt Rate Low; 'dyn_blist_pkt_rate_high': Dynamic Blacklist - Pkt Rate High; 'dyn_blist_version_mismatch': Dynamic Blacklist - Version Mismatch; 'dyn_blist_no_active_policy': Dynamic Blacklist - No Active Policy; 'fullcone_in_del_q': Full-cone session found in delete queue; 'fullcone_retry_lookup': Full-cone session retry look-up; 'fullcone_not_found': Full-cone session not found; 'fullcone_overflow_eim': Full-cone Session EIM Overflow; 'fullcone_overflow_eif': Full-cone Session EIF Overflow; 'udp_fullcone_created_shadow': Total UDP Full-cone sessions created; 'tcp_fullcone_created_shadow': Total TCP Full-cone sessions created; 'udp_fullcone_freed_shadow': Total UDP Full-cone sessions freed; 'tcp_fullcone_freed_shadow': Total TCP Full-cone sessions freed; 'fullcone_created': Total Full-cone sessions created; 'fullcone_freed': Total Full-cone sessions freed; 'fullcone_ext_too_many': Fullcone Extension Too Many; 'fullcone_ext_mem_allocated': Fullcone Extension Memory Allocated; 'fullcone_ext_mem_alloc_failure': Fullcone Extension Memory Allocate Failure; 'fullcone_ext_mem_alloc_init_faulure': Fullcone Extension Initialization Failure; 'fullcone_ext_mem_freed': Fullcone Extension Memory Freed; 'fullcone_ext_added': Fullcone Extension Added; 'ha_fullcone_failure': HA Full-cone Session Failure; 'data_session_created_shadow': Shadow Data Sessions Created; 'data_session_created_shadow_local': Shadow Data Sessions Created Local; 'data_session_freed_shadow': Shadow Data Sessions Freed; 'data_session_freed_shadow_local': Shadow Data Sessions Freed Local; 'active_fullcone_session': Total Active Full-cone sessions; 'limit-entry-failure': Limit Entry Creation Failure; 'limit-entry-allocated': Limit Entry Allocated; 'limit-entry-mem-freed': Limit Entry Freed; 'limit-entry-created': Limit Entry Created; 'limit-entry-found': Limit Entry Found; 'limit-entry-not-in-bucket': Limit Entry Not in Bucket; 'limit-entry-marked-deleted': Limit Entry Marked Deleted; 'undetermined-rule-counter': Undetermined rule detected; 'non_syn_pkt_fwd_allowed': Non-SYN pkt forward allowed; 'invalid-lid-drop': Invalid Lid Drop; 'src-session-limit-exceeded': Concurrent Session Limit Exceeded; 'uplink-pps-limit-exceeded': Uplink PPS Limit Exceeded; 'downlink-pps-limit-exceeded': Downlink PPS Limit Exceeded; 'total-pps-limit-exceeded': Total PPS Limit Exceeded; 'uplink-throughput-limit-exceeded': Uplink Throughput Limit Exceeded; 'downlink-throughput-limit-exceeded': Downlink Throughput Limit Exceeded; 'total-throughput-limit-exceeded': Total Throughput Limit Exceeded; 'cps-limit-exceeded': Connections Per Second Limit Exceeded; 'limit-exceeded': Per Second Limit Exceeded (Deprecated); 'limit-entry-per-cpu-mem-allocated': Limit Entry Memory Allocated (Deprecated); 'limit-entry-per-cpu-mem-allocation-failed': Limit Entry Memory Allocation Failed (Deprecated); 'limit-entry-per-cpu-mem-freed': Limit Entry Memory Freed (Deprecated); 'alg_default_port_disable': alg_default_port_disable; 'no_fwd_route': No Forward Route; 'no_rev_route': No Reverse Route; 'no_fwd_l2_dst': No Forward Mac Entry; 'no_rev_l2_dst': No Reverse Mac Entry; 'l2_dst_in_out_same': L2 route to same port as received; 'l2_vlan_changed': L2 forwarding vlan changed after session create; 'urpf_pkt_drop': URPF check packet drop; 'fwd_ingress_packets_tcp': Forward Ingress Packets TCP; 'fwd_egress_packets_tcp': Forward Egress Packets TCP; 'rev_ingress_packets_tcp': Reverse Ingress Packets TCP; 'rev_egress_packets_tcp': Reverse Egress Packets TCP; 'fwd_ingress_bytes_tcp': Forward Ingress Bytes TCP; 'fwd_egress_bytes_tcp': Forward Egress Bytes TCP; 'rev_ingress_bytes_tcp': Reverse Ingress Bytes TCP; 'rev_egress_bytes_tcp': Reverse Egress Bytes TCP; 'fwd_ingress_packets_udp': Forward Ingress Packets UDP; 'fwd_egress_packets_udp': Forward Egress Packets UDP; 'rev_ingress_packets_udp': Reverse Ingress Packets UDP; 'rev_egress_packets_udp': Reverse Egress Packets UDP; 'fwd_ingress_bytes_udp': Forward Ingress Bytes UDP; 'fwd_egress_bytes_udp': Forward Egress Bytes UDP; 'rev_ingress_bytes_udp': Reverse Ingress Bytes UDP; 'rev_egress_bytes_udp': Reverse Egress Bytes UDP; 'fwd_ingress_packets_icmp': Forward Ingress Packets ICMP; 'fwd_egress_packets_icmp': Forward Egress Packets ICMP; 'rev_ingress_packets_icmp': Reverse Ingress Packets ICMP; 'rev_egress_packets_icmp': Reverse Egress Packets ICMP; 'fwd_ingress_bytes_icmp': Forward Ingress Bytes ICMP; 'fwd_egress_bytes_icmp': Forward Egress Bytes ICMP; 'rev_ingress_bytes_icmp': Reverse Ingress Bytes ICMP; 'rev_egress_bytes_icmp': Reverse Egress Bytes ICMP; 'fwd_ingress_packets_others': Forward Ingress Packets OTHERS; 'fwd_egress_packets_others': Forward Egress Packets OTHERS; 'rev_ingress_packets_others': Reverse Ingress Packets OTHERS; 'rev_egress_packets_others': Reverse Egress Packets OTHERS; 'fwd_ingress_bytes_others': Forward Ingress Bytes OTHERS; 'fwd_egress_bytes_others': Forward Egress Bytes OTHERS; 'rev_ingress_bytes_others': Reverse Ingress Bytes OTHERS; 'rev_egress_bytes_others': Reverse Egress Bytes OTHERS; 'fwd_ingress_pkt_size_range1': Forward Ingress Packet size between 0 and 200; 'fwd_ingress_pkt_size_range2': Forward Ingress Packet size between 201 and 800; 'fwd_ingress_pkt_size_range3': Forward Ingress Packet size between 801 and 1550; 'fwd_ingress_pkt_size_range4': Forward Ingress Packet size between 1551 and 9000; 'fwd_egress_pkt_size_range1': Forward Egress Packet size between 0 and 200; 'fwd_egress_pkt_size_range2': Forward Egress Packet size between 201 and 800; 'fwd_egress_pkt_size_range3': Forward Egress Packet size between 801 and 1550; 'fwd_egress_pkt_size_range4': Forward Egress Packet size between 1551 and 9000; 'rev_ingress_pkt_size_range1': Reverse Ingress Packet size between 0 and 200; 'rev_ingress_pkt_size_range2': Reverse Ingress Packet size between 201 and 800; 'rev_ingress_pkt_size_range3': Reverse Ingress Packet size between 801 and 1550; 'rev_ingress_pkt_size_range4': Reverse Ingress Packet size between 1551 and 9000; 'rev_egress_pkt_size_range1': Reverse Egress Packet size between 0 and 200; 'rev_egress_pkt_size_range2': Reverse Egress Packet size between 201 and 800; 'rev_egress_pkt_size_range3': Reverse Egress Packet size between 801 and 1550; 'rev_egress_pkt_size_range4': Reverse Egress Packet size between 1551 and 9000;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_global#counters1 FwGlobal#counters1}
  */
  readonly counters1?: string;
}

export function fwGlobalSamplingEnableToTerraform(struct?: FwGlobalSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function fwGlobalSamplingEnableToHclTerraform(struct?: FwGlobalSamplingEnable | cdktf.IResolvable): any {
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

export class FwGlobalSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FwGlobalSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FwGlobalSamplingEnable | cdktf.IResolvable | undefined) {
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

export class FwGlobalSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : FwGlobalSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): FwGlobalSamplingEnableOutputReference {
    return new FwGlobalSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_global thunder_fw_global}
*/
export class FwGlobal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_fw_global";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FwGlobal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FwGlobal to import
  * @param importFromId The id of the existing FwGlobal that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_global#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FwGlobal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_fw_global", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_global thunder_fw_global} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FwGlobalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FwGlobalConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_fw_global',
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
    this._algProcessing = config.algProcessing;
    this._allowNonSynSessionCreate = config.allowNonSynSessionCreate;
    this._disableApplicationMetrics = config.disableApplicationMetrics;
    this._disableIpFwSessions = config.disableIpFwSessions;
    this._disableUndeterminedRuleLogs = config.disableUndeterminedRuleLogs;
    this._dsrModeSupport = config.dsrModeSupport;
    this._extendedMatching = config.extendedMatching;
    this._id = config.id;
    this._inboundRefresh = config.inboundRefresh;
    this._inboundRefreshFullCone = config.inboundRefreshFullCone;
    this._listenOnPortTimeout = config.listenOnPortTimeout;
    this._natipDdosProtection = config.natipDdosProtection;
    this._permitDefaultAction = config.permitDefaultAction;
    this._respondToUserMac = config.respondToUserMac;
    this._uuid = config.uuid;
    this._disableAppList.internalValue = config.disableAppList;
    this._samplingEnable.internalValue = config.samplingEnable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alg_processing - computed: false, optional: true, required: false
  private _algProcessing?: string; 
  public get algProcessing() {
    return this.getStringAttribute('alg_processing');
  }
  public set algProcessing(value: string) {
    this._algProcessing = value;
  }
  public resetAlgProcessing() {
    this._algProcessing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algProcessingInput() {
    return this._algProcessing;
  }

  // allow_non_syn_session_create - computed: false, optional: true, required: false
  private _allowNonSynSessionCreate?: number; 
  public get allowNonSynSessionCreate() {
    return this.getNumberAttribute('allow_non_syn_session_create');
  }
  public set allowNonSynSessionCreate(value: number) {
    this._allowNonSynSessionCreate = value;
  }
  public resetAllowNonSynSessionCreate() {
    this._allowNonSynSessionCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowNonSynSessionCreateInput() {
    return this._allowNonSynSessionCreate;
  }

  // disable_application_metrics - computed: false, optional: true, required: false
  private _disableApplicationMetrics?: number; 
  public get disableApplicationMetrics() {
    return this.getNumberAttribute('disable_application_metrics');
  }
  public set disableApplicationMetrics(value: number) {
    this._disableApplicationMetrics = value;
  }
  public resetDisableApplicationMetrics() {
    this._disableApplicationMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableApplicationMetricsInput() {
    return this._disableApplicationMetrics;
  }

  // disable_ip_fw_sessions - computed: false, optional: true, required: false
  private _disableIpFwSessions?: number; 
  public get disableIpFwSessions() {
    return this.getNumberAttribute('disable_ip_fw_sessions');
  }
  public set disableIpFwSessions(value: number) {
    this._disableIpFwSessions = value;
  }
  public resetDisableIpFwSessions() {
    this._disableIpFwSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableIpFwSessionsInput() {
    return this._disableIpFwSessions;
  }

  // disable_undetermined_rule_logs - computed: false, optional: true, required: false
  private _disableUndeterminedRuleLogs?: number; 
  public get disableUndeterminedRuleLogs() {
    return this.getNumberAttribute('disable_undetermined_rule_logs');
  }
  public set disableUndeterminedRuleLogs(value: number) {
    this._disableUndeterminedRuleLogs = value;
  }
  public resetDisableUndeterminedRuleLogs() {
    this._disableUndeterminedRuleLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableUndeterminedRuleLogsInput() {
    return this._disableUndeterminedRuleLogs;
  }

  // dsr_mode_support - computed: false, optional: true, required: false
  private _dsrModeSupport?: string; 
  public get dsrModeSupport() {
    return this.getStringAttribute('dsr_mode_support');
  }
  public set dsrModeSupport(value: string) {
    this._dsrModeSupport = value;
  }
  public resetDsrModeSupport() {
    this._dsrModeSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsrModeSupportInput() {
    return this._dsrModeSupport;
  }

  // extended_matching - computed: false, optional: true, required: false
  private _extendedMatching?: string; 
  public get extendedMatching() {
    return this.getStringAttribute('extended_matching');
  }
  public set extendedMatching(value: string) {
    this._extendedMatching = value;
  }
  public resetExtendedMatching() {
    this._extendedMatching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedMatchingInput() {
    return this._extendedMatching;
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

  // inbound_refresh - computed: false, optional: true, required: false
  private _inboundRefresh?: string; 
  public get inboundRefresh() {
    return this.getStringAttribute('inbound_refresh');
  }
  public set inboundRefresh(value: string) {
    this._inboundRefresh = value;
  }
  public resetInboundRefresh() {
    this._inboundRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundRefreshInput() {
    return this._inboundRefresh;
  }

  // inbound_refresh_full_cone - computed: false, optional: true, required: false
  private _inboundRefreshFullCone?: string; 
  public get inboundRefreshFullCone() {
    return this.getStringAttribute('inbound_refresh_full_cone');
  }
  public set inboundRefreshFullCone(value: string) {
    this._inboundRefreshFullCone = value;
  }
  public resetInboundRefreshFullCone() {
    this._inboundRefreshFullCone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundRefreshFullConeInput() {
    return this._inboundRefreshFullCone;
  }

  // listen_on_port_timeout - computed: false, optional: true, required: false
  private _listenOnPortTimeout?: number; 
  public get listenOnPortTimeout() {
    return this.getNumberAttribute('listen_on_port_timeout');
  }
  public set listenOnPortTimeout(value: number) {
    this._listenOnPortTimeout = value;
  }
  public resetListenOnPortTimeout() {
    this._listenOnPortTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenOnPortTimeoutInput() {
    return this._listenOnPortTimeout;
  }

  // natip_ddos_protection - computed: false, optional: true, required: false
  private _natipDdosProtection?: string; 
  public get natipDdosProtection() {
    return this.getStringAttribute('natip_ddos_protection');
  }
  public set natipDdosProtection(value: string) {
    this._natipDdosProtection = value;
  }
  public resetNatipDdosProtection() {
    this._natipDdosProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natipDdosProtectionInput() {
    return this._natipDdosProtection;
  }

  // permit_default_action - computed: false, optional: true, required: false
  private _permitDefaultAction?: string; 
  public get permitDefaultAction() {
    return this.getStringAttribute('permit_default_action');
  }
  public set permitDefaultAction(value: string) {
    this._permitDefaultAction = value;
  }
  public resetPermitDefaultAction() {
    this._permitDefaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitDefaultActionInput() {
    return this._permitDefaultAction;
  }

  // respond_to_user_mac - computed: false, optional: true, required: false
  private _respondToUserMac?: number; 
  public get respondToUserMac() {
    return this.getNumberAttribute('respond_to_user_mac');
  }
  public set respondToUserMac(value: number) {
    this._respondToUserMac = value;
  }
  public resetRespondToUserMac() {
    this._respondToUserMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respondToUserMacInput() {
    return this._respondToUserMac;
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

  // disable_app_list - computed: false, optional: true, required: false
  private _disableAppList = new FwGlobalDisableAppListStructList(this, "disable_app_list", false);
  public get disableAppList() {
    return this._disableAppList;
  }
  public putDisableAppList(value: FwGlobalDisableAppListStruct[] | cdktf.IResolvable) {
    this._disableAppList.internalValue = value;
  }
  public resetDisableAppList() {
    this._disableAppList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAppListInput() {
    return this._disableAppList.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new FwGlobalSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: FwGlobalSamplingEnable[] | cdktf.IResolvable) {
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
      alg_processing: cdktf.stringToTerraform(this._algProcessing),
      allow_non_syn_session_create: cdktf.numberToTerraform(this._allowNonSynSessionCreate),
      disable_application_metrics: cdktf.numberToTerraform(this._disableApplicationMetrics),
      disable_ip_fw_sessions: cdktf.numberToTerraform(this._disableIpFwSessions),
      disable_undetermined_rule_logs: cdktf.numberToTerraform(this._disableUndeterminedRuleLogs),
      dsr_mode_support: cdktf.stringToTerraform(this._dsrModeSupport),
      extended_matching: cdktf.stringToTerraform(this._extendedMatching),
      id: cdktf.stringToTerraform(this._id),
      inbound_refresh: cdktf.stringToTerraform(this._inboundRefresh),
      inbound_refresh_full_cone: cdktf.stringToTerraform(this._inboundRefreshFullCone),
      listen_on_port_timeout: cdktf.numberToTerraform(this._listenOnPortTimeout),
      natip_ddos_protection: cdktf.stringToTerraform(this._natipDdosProtection),
      permit_default_action: cdktf.stringToTerraform(this._permitDefaultAction),
      respond_to_user_mac: cdktf.numberToTerraform(this._respondToUserMac),
      uuid: cdktf.stringToTerraform(this._uuid),
      disable_app_list: cdktf.listMapper(fwGlobalDisableAppListStructToTerraform, true)(this._disableAppList.internalValue),
      sampling_enable: cdktf.listMapper(fwGlobalSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alg_processing: {
        value: cdktf.stringToHclTerraform(this._algProcessing),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_non_syn_session_create: {
        value: cdktf.numberToHclTerraform(this._allowNonSynSessionCreate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable_application_metrics: {
        value: cdktf.numberToHclTerraform(this._disableApplicationMetrics),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable_ip_fw_sessions: {
        value: cdktf.numberToHclTerraform(this._disableIpFwSessions),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable_undetermined_rule_logs: {
        value: cdktf.numberToHclTerraform(this._disableUndeterminedRuleLogs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dsr_mode_support: {
        value: cdktf.stringToHclTerraform(this._dsrModeSupport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extended_matching: {
        value: cdktf.stringToHclTerraform(this._extendedMatching),
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
      inbound_refresh: {
        value: cdktf.stringToHclTerraform(this._inboundRefresh),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inbound_refresh_full_cone: {
        value: cdktf.stringToHclTerraform(this._inboundRefreshFullCone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      listen_on_port_timeout: {
        value: cdktf.numberToHclTerraform(this._listenOnPortTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      natip_ddos_protection: {
        value: cdktf.stringToHclTerraform(this._natipDdosProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permit_default_action: {
        value: cdktf.stringToHclTerraform(this._permitDefaultAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      respond_to_user_mac: {
        value: cdktf.numberToHclTerraform(this._respondToUserMac),
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
      disable_app_list: {
        value: cdktf.listMapperHcl(fwGlobalDisableAppListStructToHclTerraform, true)(this._disableAppList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FwGlobalDisableAppListStructList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(fwGlobalSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FwGlobalSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
