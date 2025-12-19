// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosDnsCacheConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'respond-refuse': Send refuse response (default); 'respond-empty': Send empty response; 'drop': Drop the request;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#any_query_action_str DdosDnsCache#any_query_action_str}
  */
  readonly anyQueryActionStr?: string;
  /**
  * 'serve-from-cache': Serve DNS records; 'forward': Forward to DNS server; 'drop': Drop the request;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#default_serving_action DdosDnsCache#default_serving_action}
  */
  readonly defaultServingAction?: string;
  /**
  * DNS logging template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#dns_logging DdosDnsCache#dns_logging}
  */
  readonly dnsLogging?: string;
  /**
  * Set the maximum EDNS UDP message size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#edns_udp_size DdosDnsCache#edns_udp_size}
  */
  readonly ednsUdpSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#id DdosDnsCache#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * DNS Cache Instance Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#name DdosDnsCache#name}
  */
  readonly name: string;
  /**
  * Negative cached response queries counted toward query-rate-threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#neg_cache_action_follow_q_rate DdosDnsCache#neg_cache_action_follow_q_rate}
  */
  readonly negCacheActionFollowQRate?: number;
  /**
  * 'default': Default action: respond-refuse; 'forward': Forward to DNS server; 'respond-refuse': Send refuse response; 'drop': Drop the request;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#non_authoritative_zone_query_action_str DdosDnsCache#non_authoritative_zone_query_action_str}
  */
  readonly nonAuthoritativeZoneQueryActionStr?: string;
  /**
  * Respond with SERVFAIL for expired zones and zones failing to cache
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#respond_servfail DdosDnsCache#respond_servfail}
  */
  readonly respondServfail?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#user_tag DdosDnsCache#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#uuid DdosDnsCache#uuid}
  */
  readonly uuid?: string;
  /**
  * 'respond-nxdomain': Send NxDomain response; 'drop': Drop the request;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#zone_domain_lookup_miss_action DdosDnsCache#zone_domain_lookup_miss_action}
  */
  readonly zoneDomainLookupMissAction?: string;
  /**
  * domain_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#domain_group DdosDnsCache#domain_group}
  */
  readonly domainGroup?: DdosDnsCacheDomainGroup;
  /**
  * fqdn_manual_override_action_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#fqdn_manual_override_action_list DdosDnsCache#fqdn_manual_override_action_list}
  */
  readonly fqdnManualOverrideActionList?: DdosDnsCacheFqdnManualOverrideActionListStruct[] | cdktf.IResolvable;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#sampling_enable DdosDnsCache#sampling_enable}
  */
  readonly samplingEnable?: DdosDnsCacheSamplingEnable[] | cdktf.IResolvable;
  /**
  * sharded_domain_group_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#sharded_domain_group_list DdosDnsCache#sharded_domain_group_list}
  */
  readonly shardedDomainGroupList?: DdosDnsCacheShardedDomainGroupListStruct[] | cdktf.IResolvable;
  /**
  * zone_manual_override_action_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#zone_manual_override_action_list DdosDnsCache#zone_manual_override_action_list}
  */
  readonly zoneManualOverrideActionList?: DdosDnsCacheZoneManualOverrideActionListStruct[] | cdktf.IResolvable;
  /**
  * zone_transfer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#zone_transfer DdosDnsCache#zone_transfer}
  */
  readonly zoneTransfer?: DdosDnsCacheZoneTransfer;
}
export interface DdosDnsCacheDomainGroupDomainListPolicyListPacketCapturingRootZoneListStruct {
  /**
  * Capture-config name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#capture_config DdosDnsCache#capture_config}
  */
  readonly captureConfig?: string;
  /**
  * 'regular': Capture packet anyway; 'capture-on-failure': Capture packet if last XFR was failed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#capture_mode DdosDnsCache#capture_mode}
  */
  readonly captureMode?: string;
  /**
  * Specify root zone to be captured
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#root_zone DdosDnsCache#root_zone}
  */
  readonly rootZone?: string;
}

export function ddosDnsCacheDomainGroupDomainListPolicyListPacketCapturingRootZoneListStructToTerraform(struct?: DdosDnsCacheDomainGroupDomainListPolicyListPacketCapturingRootZoneListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capture_config: cdktf.stringToTerraform(struct!.captureConfig),
    capture_mode: cdktf.stringToTerraform(struct!.captureMode),
    root_zone: cdktf.stringToTerraform(struct!.rootZone),
  }
}


export function ddosDnsCacheDomainGroupDomainListPolicyListPacketCapturingRootZoneListStructToHclTerraform(struct?: DdosDnsCacheDomainGroupDomainListPolicyListPacketCapturingRootZoneListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capture_config: {
      value: cdktf.stringToHclTerraform(struct!.captureConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capture_mode: {
      value: cdktf.stringToHclTerraform(struct!.captureMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_zone: {
      value: cdktf.stringToHclTerraform(struct!.rootZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDnsCacheDomainGroupDomainListPolicyListPacketCapturingRootZoneListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDnsCacheDomainGroupDomainListPolicyListPacketCapturingRootZoneListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._captureConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureConfig = this._captureConfig;
    }
    if (this._captureMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureMode = this._captureMode;
    }
    if (this._rootZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootZone = this._rootZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDnsCacheDomainGroupDomainListPolicyListPacketCapturingRootZoneListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._captureConfig = undefined;
      this._captureMode = undefined;
      this._rootZone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._captureConfig = value.captureConfig;
      this._captureMode = value.captureMode;
      this._rootZone = value.rootZone;
    }
  }

  // capture_config - computed: false, optional: true, required: false
  private _captureConfig?: string; 
  public get captureConfig() {
    return this.getStringAttribute('capture_config');
  }
  public set captureConfig(value: string) {
    this._captureConfig = value;
  }
  public resetCaptureConfig() {
    this._captureConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureConfigInput() {
    return this._captureConfig;
  }

  // capture_mode - computed: false, optional: true, required: false
  private _captureMode?: string; 
  public get captureMode() {
    return this.getStringAttribute('capture_mode');
  }
  public set captureMode(value: string) {
    this._captureMode = value;
  }
  public resetCaptureMode() {
    this._captureMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureModeInput() {
    return this._captureMode;
  }

  // root_zone - computed: false, optional: true, required: false
  private _rootZone?: string; 
  public get rootZone() {
    return this.getStringAttribute('root_zone');
  }
  public set rootZone(value: string) {
    this._rootZone = value;
  }
  public resetRootZone() {
    this._rootZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootZoneInput() {
    return this._rootZone;
  }
}

export class DdosDnsCacheDomainGroupDomainListPolicyListPacketCapturingRootZoneListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDnsCacheDomainGroupDomainListPolicyListPacketCapturingRootZoneListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDnsCacheDomainGroupDomainListPolicyListPacketCapturingRootZoneListStructOutputReference {
    return new DdosDnsCacheDomainGroupDomainListPolicyListPacketCapturingRootZoneListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDnsCacheDomainGroupDomainListPolicyListPacketCapturing {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#uuid DdosDnsCache#uuid}
  */
  readonly uuid?: string;
  /**
  * root_zone_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#root_zone_list DdosDnsCache#root_zone_list}
  */
  readonly rootZoneList?: DdosDnsCacheDomainGroupDomainListPolicyListPacketCapturingRootZoneListStruct[] | cdktf.IResolvable;
}

export function ddosDnsCacheDomainGroupDomainListPolicyListPacketCapturingToTerraform(struct?: DdosDnsCacheDomainGroupDomainListPolicyListPacketCapturingOutputReference | DdosDnsCacheDomainGroupDomainListPolicyListPacketCapturing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    root_zone_list: cdktf.listMapper(ddosDnsCacheDomainGroupDomainListPolicyListPacketCapturingRootZoneListStructToTerraform, true)(struct!.rootZoneList),
  }
}


export function ddosDnsCacheDomainGroupDomainListPolicyListPacketCapturingToHclTerraform(struct?: DdosDnsCacheDomainGroupDomainListPolicyListPacketCapturingOutputReference | DdosDnsCacheDomainGroupDomainListPolicyListPacketCapturing): any {
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
    root_zone_list: {
      value: cdktf.listMapperHcl(ddosDnsCacheDomainGroupDomainListPolicyListPacketCapturingRootZoneListStructToHclTerraform, true)(struct!.rootZoneList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDnsCacheDomainGroupDomainListPolicyListPacketCapturingRootZoneListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDnsCacheDomainGroupDomainListPolicyListPacketCapturingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDnsCacheDomainGroupDomainListPolicyListPacketCapturing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._rootZoneList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootZoneList = this._rootZoneList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDnsCacheDomainGroupDomainListPolicyListPacketCapturing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._rootZoneList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._rootZoneList.internalValue = value.rootZoneList;
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

  // root_zone_list - computed: false, optional: true, required: false
  private _rootZoneList = new DdosDnsCacheDomainGroupDomainListPolicyListPacketCapturingRootZoneListStructList(this, "root_zone_list", false);
  public get rootZoneList() {
    return this._rootZoneList;
  }
  public putRootZoneList(value: DdosDnsCacheDomainGroupDomainListPolicyListPacketCapturingRootZoneListStruct[] | cdktf.IResolvable) {
    this._rootZoneList.internalValue = value;
  }
  public resetRootZoneList() {
    this._rootZoneList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootZoneListInput() {
    return this._rootZoneList.internalValue;
  }
}
export interface DdosDnsCacheDomainGroupDomainListPolicyListStruct {
  /**
  * cache all FQDN records including uncommon types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#cache_all_records DdosDnsCache#cache_all_records}
  */
  readonly cacheAllRecords?: number;
  /**
  * cache all DNSSEC FQDN records types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#cache_dnssec_records DdosDnsCache#cache_dnssec_records}
  */
  readonly cacheDnssecRecords?: number;
  /**
  * Client ipv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#client_ipv4 DdosDnsCache#client_ipv4}
  */
  readonly clientIpv4?: string;
  /**
  * Client ipv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#client_ipv6 DdosDnsCache#client_ipv6}
  */
  readonly clientIpv6?: string;
  /**
  * DNS notify enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#dns_notify_enable_ipv4 DdosDnsCache#dns_notify_enable_ipv4}
  */
  readonly dnsNotifyEnableIpv4?: number;
  /**
  * DNS notify enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#dns_notify_enable_ipv6 DdosDnsCache#dns_notify_enable_ipv6}
  */
  readonly dnsNotifyEnableIpv6?: number;
  /**
  * Force update even the serial is the same
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#force DdosDnsCache#force}
  */
  readonly force?: number;
  /**
  * Manually refresh the particular zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#manual_refresh DdosDnsCache#manual_refresh}
  */
  readonly manualRefresh?: string;
  /**
  * DNS domain list policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#name DdosDnsCache#name}
  */
  readonly name: string;
  /**
  * 'set-truncate-bit': Set the TC bit for oversize answer(default); 'disable-truncate-bit': Do not set TC bit for oversize answer;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#oversize_answer_response DdosDnsCache#oversize_answer_response}
  */
  readonly oversizeAnswerResponse?: string;
  /**
  * Zone transfer refresh rate in hours (Default 4). 0 means no refresh
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#refresh_interval_hours DdosDnsCache#refresh_interval_hours}
  */
  readonly refreshIntervalHours?: number;
  /**
  * Always try to resolve domain in CNAME record answer section
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#resolve_cname_record DdosDnsCache#resolve_cname_record}
  */
  readonly resolveCnameRecord?: number;
  /**
  * Respond with authority section for all requests under this list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#respond_with_authority DdosDnsCache#respond_with_authority}
  */
  readonly respondWithAuthority?: number;
  /**
  * Master ipv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#server_ipv4 DdosDnsCache#server_ipv4}
  */
  readonly serverIpv4?: string;
  /**
  * Master ipv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#server_ipv6 DdosDnsCache#server_ipv6}
  */
  readonly serverIpv6?: string;
  /**
  * Port number (default 53)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#server_v4_port DdosDnsCache#server_v4_port}
  */
  readonly serverV4Port?: number;
  /**
  * Port number (default 53)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#server_v6_port DdosDnsCache#server_v6_port}
  */
  readonly serverV6Port?: number;
  /**
  * Override the TTL value for zone transfer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#ttl_override DdosDnsCache#ttl_override}
  */
  readonly ttlOverride?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#user_tag DdosDnsCache#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#uuid DdosDnsCache#uuid}
  */
  readonly uuid?: string;
  /**
  * packet_capturing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#packet_capturing DdosDnsCache#packet_capturing}
  */
  readonly packetCapturing?: DdosDnsCacheDomainGroupDomainListPolicyListPacketCapturing;
}

export function ddosDnsCacheDomainGroupDomainListPolicyListStructToTerraform(struct?: DdosDnsCacheDomainGroupDomainListPolicyListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_all_records: cdktf.numberToTerraform(struct!.cacheAllRecords),
    cache_dnssec_records: cdktf.numberToTerraform(struct!.cacheDnssecRecords),
    client_ipv4: cdktf.stringToTerraform(struct!.clientIpv4),
    client_ipv6: cdktf.stringToTerraform(struct!.clientIpv6),
    dns_notify_enable_ipv4: cdktf.numberToTerraform(struct!.dnsNotifyEnableIpv4),
    dns_notify_enable_ipv6: cdktf.numberToTerraform(struct!.dnsNotifyEnableIpv6),
    force: cdktf.numberToTerraform(struct!.force),
    manual_refresh: cdktf.stringToTerraform(struct!.manualRefresh),
    name: cdktf.stringToTerraform(struct!.name),
    oversize_answer_response: cdktf.stringToTerraform(struct!.oversizeAnswerResponse),
    refresh_interval_hours: cdktf.numberToTerraform(struct!.refreshIntervalHours),
    resolve_cname_record: cdktf.numberToTerraform(struct!.resolveCnameRecord),
    respond_with_authority: cdktf.numberToTerraform(struct!.respondWithAuthority),
    server_ipv4: cdktf.stringToTerraform(struct!.serverIpv4),
    server_ipv6: cdktf.stringToTerraform(struct!.serverIpv6),
    server_v4_port: cdktf.numberToTerraform(struct!.serverV4Port),
    server_v6_port: cdktf.numberToTerraform(struct!.serverV6Port),
    ttl_override: cdktf.numberToTerraform(struct!.ttlOverride),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    packet_capturing: ddosDnsCacheDomainGroupDomainListPolicyListPacketCapturingToTerraform(struct!.packetCapturing),
  }
}


export function ddosDnsCacheDomainGroupDomainListPolicyListStructToHclTerraform(struct?: DdosDnsCacheDomainGroupDomainListPolicyListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_all_records: {
      value: cdktf.numberToHclTerraform(struct!.cacheAllRecords),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cache_dnssec_records: {
      value: cdktf.numberToHclTerraform(struct!.cacheDnssecRecords),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.clientIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.clientIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_notify_enable_ipv4: {
      value: cdktf.numberToHclTerraform(struct!.dnsNotifyEnableIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_notify_enable_ipv6: {
      value: cdktf.numberToHclTerraform(struct!.dnsNotifyEnableIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    force: {
      value: cdktf.numberToHclTerraform(struct!.force),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    manual_refresh: {
      value: cdktf.stringToHclTerraform(struct!.manualRefresh),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oversize_answer_response: {
      value: cdktf.stringToHclTerraform(struct!.oversizeAnswerResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refresh_interval_hours: {
      value: cdktf.numberToHclTerraform(struct!.refreshIntervalHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resolve_cname_record: {
      value: cdktf.numberToHclTerraform(struct!.resolveCnameRecord),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    respond_with_authority: {
      value: cdktf.numberToHclTerraform(struct!.respondWithAuthority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.serverIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.serverIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_v4_port: {
      value: cdktf.numberToHclTerraform(struct!.serverV4Port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_v6_port: {
      value: cdktf.numberToHclTerraform(struct!.serverV6Port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl_override: {
      value: cdktf.numberToHclTerraform(struct!.ttlOverride),
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
    packet_capturing: {
      value: ddosDnsCacheDomainGroupDomainListPolicyListPacketCapturingToHclTerraform(struct!.packetCapturing),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDnsCacheDomainGroupDomainListPolicyListPacketCapturingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDnsCacheDomainGroupDomainListPolicyListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDnsCacheDomainGroupDomainListPolicyListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheAllRecords !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheAllRecords = this._cacheAllRecords;
    }
    if (this._cacheDnssecRecords !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheDnssecRecords = this._cacheDnssecRecords;
    }
    if (this._clientIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIpv4 = this._clientIpv4;
    }
    if (this._clientIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIpv6 = this._clientIpv6;
    }
    if (this._dnsNotifyEnableIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsNotifyEnableIpv4 = this._dnsNotifyEnableIpv4;
    }
    if (this._dnsNotifyEnableIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsNotifyEnableIpv6 = this._dnsNotifyEnableIpv6;
    }
    if (this._force !== undefined) {
      hasAnyValues = true;
      internalValueResult.force = this._force;
    }
    if (this._manualRefresh !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualRefresh = this._manualRefresh;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._oversizeAnswerResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeAnswerResponse = this._oversizeAnswerResponse;
    }
    if (this._refreshIntervalHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshIntervalHours = this._refreshIntervalHours;
    }
    if (this._resolveCnameRecord !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolveCnameRecord = this._resolveCnameRecord;
    }
    if (this._respondWithAuthority !== undefined) {
      hasAnyValues = true;
      internalValueResult.respondWithAuthority = this._respondWithAuthority;
    }
    if (this._serverIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverIpv4 = this._serverIpv4;
    }
    if (this._serverIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverIpv6 = this._serverIpv6;
    }
    if (this._serverV4Port !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverV4Port = this._serverV4Port;
    }
    if (this._serverV6Port !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverV6Port = this._serverV6Port;
    }
    if (this._ttlOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttlOverride = this._ttlOverride;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._packetCapturing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetCapturing = this._packetCapturing?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDnsCacheDomainGroupDomainListPolicyListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacheAllRecords = undefined;
      this._cacheDnssecRecords = undefined;
      this._clientIpv4 = undefined;
      this._clientIpv6 = undefined;
      this._dnsNotifyEnableIpv4 = undefined;
      this._dnsNotifyEnableIpv6 = undefined;
      this._force = undefined;
      this._manualRefresh = undefined;
      this._name = undefined;
      this._oversizeAnswerResponse = undefined;
      this._refreshIntervalHours = undefined;
      this._resolveCnameRecord = undefined;
      this._respondWithAuthority = undefined;
      this._serverIpv4 = undefined;
      this._serverIpv6 = undefined;
      this._serverV4Port = undefined;
      this._serverV6Port = undefined;
      this._ttlOverride = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._packetCapturing.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacheAllRecords = value.cacheAllRecords;
      this._cacheDnssecRecords = value.cacheDnssecRecords;
      this._clientIpv4 = value.clientIpv4;
      this._clientIpv6 = value.clientIpv6;
      this._dnsNotifyEnableIpv4 = value.dnsNotifyEnableIpv4;
      this._dnsNotifyEnableIpv6 = value.dnsNotifyEnableIpv6;
      this._force = value.force;
      this._manualRefresh = value.manualRefresh;
      this._name = value.name;
      this._oversizeAnswerResponse = value.oversizeAnswerResponse;
      this._refreshIntervalHours = value.refreshIntervalHours;
      this._resolveCnameRecord = value.resolveCnameRecord;
      this._respondWithAuthority = value.respondWithAuthority;
      this._serverIpv4 = value.serverIpv4;
      this._serverIpv6 = value.serverIpv6;
      this._serverV4Port = value.serverV4Port;
      this._serverV6Port = value.serverV6Port;
      this._ttlOverride = value.ttlOverride;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._packetCapturing.internalValue = value.packetCapturing;
    }
  }

  // cache_all_records - computed: false, optional: true, required: false
  private _cacheAllRecords?: number; 
  public get cacheAllRecords() {
    return this.getNumberAttribute('cache_all_records');
  }
  public set cacheAllRecords(value: number) {
    this._cacheAllRecords = value;
  }
  public resetCacheAllRecords() {
    this._cacheAllRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheAllRecordsInput() {
    return this._cacheAllRecords;
  }

  // cache_dnssec_records - computed: false, optional: true, required: false
  private _cacheDnssecRecords?: number; 
  public get cacheDnssecRecords() {
    return this.getNumberAttribute('cache_dnssec_records');
  }
  public set cacheDnssecRecords(value: number) {
    this._cacheDnssecRecords = value;
  }
  public resetCacheDnssecRecords() {
    this._cacheDnssecRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheDnssecRecordsInput() {
    return this._cacheDnssecRecords;
  }

  // client_ipv4 - computed: false, optional: true, required: false
  private _clientIpv4?: string; 
  public get clientIpv4() {
    return this.getStringAttribute('client_ipv4');
  }
  public set clientIpv4(value: string) {
    this._clientIpv4 = value;
  }
  public resetClientIpv4() {
    this._clientIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpv4Input() {
    return this._clientIpv4;
  }

  // client_ipv6 - computed: false, optional: true, required: false
  private _clientIpv6?: string; 
  public get clientIpv6() {
    return this.getStringAttribute('client_ipv6');
  }
  public set clientIpv6(value: string) {
    this._clientIpv6 = value;
  }
  public resetClientIpv6() {
    this._clientIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpv6Input() {
    return this._clientIpv6;
  }

  // dns_notify_enable_ipv4 - computed: false, optional: true, required: false
  private _dnsNotifyEnableIpv4?: number; 
  public get dnsNotifyEnableIpv4() {
    return this.getNumberAttribute('dns_notify_enable_ipv4');
  }
  public set dnsNotifyEnableIpv4(value: number) {
    this._dnsNotifyEnableIpv4 = value;
  }
  public resetDnsNotifyEnableIpv4() {
    this._dnsNotifyEnableIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNotifyEnableIpv4Input() {
    return this._dnsNotifyEnableIpv4;
  }

  // dns_notify_enable_ipv6 - computed: false, optional: true, required: false
  private _dnsNotifyEnableIpv6?: number; 
  public get dnsNotifyEnableIpv6() {
    return this.getNumberAttribute('dns_notify_enable_ipv6');
  }
  public set dnsNotifyEnableIpv6(value: number) {
    this._dnsNotifyEnableIpv6 = value;
  }
  public resetDnsNotifyEnableIpv6() {
    this._dnsNotifyEnableIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNotifyEnableIpv6Input() {
    return this._dnsNotifyEnableIpv6;
  }

  // force - computed: false, optional: true, required: false
  private _force?: number; 
  public get force() {
    return this.getNumberAttribute('force');
  }
  public set force(value: number) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
  }

  // manual_refresh - computed: false, optional: true, required: false
  private _manualRefresh?: string; 
  public get manualRefresh() {
    return this.getStringAttribute('manual_refresh');
  }
  public set manualRefresh(value: string) {
    this._manualRefresh = value;
  }
  public resetManualRefresh() {
    this._manualRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualRefreshInput() {
    return this._manualRefresh;
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

  // oversize_answer_response - computed: false, optional: true, required: false
  private _oversizeAnswerResponse?: string; 
  public get oversizeAnswerResponse() {
    return this.getStringAttribute('oversize_answer_response');
  }
  public set oversizeAnswerResponse(value: string) {
    this._oversizeAnswerResponse = value;
  }
  public resetOversizeAnswerResponse() {
    this._oversizeAnswerResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizeAnswerResponseInput() {
    return this._oversizeAnswerResponse;
  }

  // refresh_interval_hours - computed: false, optional: true, required: false
  private _refreshIntervalHours?: number; 
  public get refreshIntervalHours() {
    return this.getNumberAttribute('refresh_interval_hours');
  }
  public set refreshIntervalHours(value: number) {
    this._refreshIntervalHours = value;
  }
  public resetRefreshIntervalHours() {
    this._refreshIntervalHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshIntervalHoursInput() {
    return this._refreshIntervalHours;
  }

  // resolve_cname_record - computed: false, optional: true, required: false
  private _resolveCnameRecord?: number; 
  public get resolveCnameRecord() {
    return this.getNumberAttribute('resolve_cname_record');
  }
  public set resolveCnameRecord(value: number) {
    this._resolveCnameRecord = value;
  }
  public resetResolveCnameRecord() {
    this._resolveCnameRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveCnameRecordInput() {
    return this._resolveCnameRecord;
  }

  // respond_with_authority - computed: false, optional: true, required: false
  private _respondWithAuthority?: number; 
  public get respondWithAuthority() {
    return this.getNumberAttribute('respond_with_authority');
  }
  public set respondWithAuthority(value: number) {
    this._respondWithAuthority = value;
  }
  public resetRespondWithAuthority() {
    this._respondWithAuthority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respondWithAuthorityInput() {
    return this._respondWithAuthority;
  }

  // server_ipv4 - computed: false, optional: true, required: false
  private _serverIpv4?: string; 
  public get serverIpv4() {
    return this.getStringAttribute('server_ipv4');
  }
  public set serverIpv4(value: string) {
    this._serverIpv4 = value;
  }
  public resetServerIpv4() {
    this._serverIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIpv4Input() {
    return this._serverIpv4;
  }

  // server_ipv6 - computed: false, optional: true, required: false
  private _serverIpv6?: string; 
  public get serverIpv6() {
    return this.getStringAttribute('server_ipv6');
  }
  public set serverIpv6(value: string) {
    this._serverIpv6 = value;
  }
  public resetServerIpv6() {
    this._serverIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIpv6Input() {
    return this._serverIpv6;
  }

  // server_v4_port - computed: false, optional: true, required: false
  private _serverV4Port?: number; 
  public get serverV4Port() {
    return this.getNumberAttribute('server_v4_port');
  }
  public set serverV4Port(value: number) {
    this._serverV4Port = value;
  }
  public resetServerV4Port() {
    this._serverV4Port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverV4PortInput() {
    return this._serverV4Port;
  }

  // server_v6_port - computed: false, optional: true, required: false
  private _serverV6Port?: number; 
  public get serverV6Port() {
    return this.getNumberAttribute('server_v6_port');
  }
  public set serverV6Port(value: number) {
    this._serverV6Port = value;
  }
  public resetServerV6Port() {
    this._serverV6Port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverV6PortInput() {
    return this._serverV6Port;
  }

  // ttl_override - computed: false, optional: true, required: false
  private _ttlOverride?: number; 
  public get ttlOverride() {
    return this.getNumberAttribute('ttl_override');
  }
  public set ttlOverride(value: number) {
    this._ttlOverride = value;
  }
  public resetTtlOverride() {
    this._ttlOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlOverrideInput() {
    return this._ttlOverride;
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

  // packet_capturing - computed: false, optional: true, required: false
  private _packetCapturing = new DdosDnsCacheDomainGroupDomainListPolicyListPacketCapturingOutputReference(this, "packet_capturing");
  public get packetCapturing() {
    return this._packetCapturing;
  }
  public putPacketCapturing(value: DdosDnsCacheDomainGroupDomainListPolicyListPacketCapturing) {
    this._packetCapturing.internalValue = value;
  }
  public resetPacketCapturing() {
    this._packetCapturing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetCapturingInput() {
    return this._packetCapturing.internalValue;
  }
}

export class DdosDnsCacheDomainGroupDomainListPolicyListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDnsCacheDomainGroupDomainListPolicyListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDnsCacheDomainGroupDomainListPolicyListStructOutputReference {
    return new DdosDnsCacheDomainGroupDomainListPolicyListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDnsCacheDomainGroup {
  /**
  * DNS domain group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#name DdosDnsCache#name}
  */
  readonly name?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#uuid DdosDnsCache#uuid}
  */
  readonly uuid?: string;
  /**
  * domain_list_policy_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#domain_list_policy_list DdosDnsCache#domain_list_policy_list}
  */
  readonly domainListPolicyList?: DdosDnsCacheDomainGroupDomainListPolicyListStruct[] | cdktf.IResolvable;
}

export function ddosDnsCacheDomainGroupToTerraform(struct?: DdosDnsCacheDomainGroupOutputReference | DdosDnsCacheDomainGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    domain_list_policy_list: cdktf.listMapper(ddosDnsCacheDomainGroupDomainListPolicyListStructToTerraform, true)(struct!.domainListPolicyList),
  }
}


export function ddosDnsCacheDomainGroupToHclTerraform(struct?: DdosDnsCacheDomainGroupOutputReference | DdosDnsCacheDomainGroup): any {
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
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_list_policy_list: {
      value: cdktf.listMapperHcl(ddosDnsCacheDomainGroupDomainListPolicyListStructToHclTerraform, true)(struct!.domainListPolicyList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDnsCacheDomainGroupDomainListPolicyListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDnsCacheDomainGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDnsCacheDomainGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._domainListPolicyList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainListPolicyList = this._domainListPolicyList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDnsCacheDomainGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._uuid = undefined;
      this._domainListPolicyList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._uuid = value.uuid;
      this._domainListPolicyList.internalValue = value.domainListPolicyList;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // domain_list_policy_list - computed: false, optional: true, required: false
  private _domainListPolicyList = new DdosDnsCacheDomainGroupDomainListPolicyListStructList(this, "domain_list_policy_list", false);
  public get domainListPolicyList() {
    return this._domainListPolicyList;
  }
  public putDomainListPolicyList(value: DdosDnsCacheDomainGroupDomainListPolicyListStruct[] | cdktf.IResolvable) {
    this._domainListPolicyList.internalValue = value;
  }
  public resetDomainListPolicyList() {
    this._domainListPolicyList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainListPolicyListInput() {
    return this._domainListPolicyList.internalValue;
  }
}
export interface DdosDnsCacheFqdnManualOverrideActionListStruct {
  /**
  * 'default': Default; 'forward': Forward to DNS server; 'drop': Drop the request; 'serve-from-cache': Serve DNS records;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#action DdosDnsCache#action}
  */
  readonly action?: string;
  /**
  * Specify fqdn name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#fqdn_name DdosDnsCache#fqdn_name}
  */
  readonly fqdnName: string;
}

export function ddosDnsCacheFqdnManualOverrideActionListStructToTerraform(struct?: DdosDnsCacheFqdnManualOverrideActionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    fqdn_name: cdktf.stringToTerraform(struct!.fqdnName),
  }
}


export function ddosDnsCacheFqdnManualOverrideActionListStructToHclTerraform(struct?: DdosDnsCacheFqdnManualOverrideActionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fqdn_name: {
      value: cdktf.stringToHclTerraform(struct!.fqdnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDnsCacheFqdnManualOverrideActionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDnsCacheFqdnManualOverrideActionListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._fqdnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnName = this._fqdnName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDnsCacheFqdnManualOverrideActionListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._fqdnName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._fqdnName = value.fqdnName;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // fqdn_name - computed: false, optional: false, required: true
  private _fqdnName?: string; 
  public get fqdnName() {
    return this.getStringAttribute('fqdn_name');
  }
  public set fqdnName(value: string) {
    this._fqdnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnNameInput() {
    return this._fqdnName;
  }
}

export class DdosDnsCacheFqdnManualOverrideActionListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDnsCacheFqdnManualOverrideActionListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDnsCacheFqdnManualOverrideActionListStructOutputReference {
    return new DdosDnsCacheFqdnManualOverrideActionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDnsCacheSamplingEnable {
  /**
  * 'all': all; 'total-cached-fqdn': total-cached-fqdn; 'total-cached-records': total-cached-records; 'fqdn-a': fqdn-a; 'fqdn-aaaa': fqdn-aaaa; 'fqdn-cname': fqdn-cname; 'fqdn-ns': fqdn-ns; 'fqdn-mx': fqdn-mx; 'fqdn-soa': fqdn-soa; 'fqdn-srv': fqdn-srv; 'fqdn-txt': fqdn-txt; 'fqdn-ptr': fqdn-ptr; 'fqdn-ta': fqdn-ta; 'fqdn-ds': fqdn-ds; 'fqdn-rrsig': fqdn-rrsig; 'fqdn-nsec': fqdn-nsec; 'fqdn-dnskey': fqdn-dnskey; 'fqdn-nsec3': fqdn-nsec3; 'fqdn-nsec3param': fqdn-nsec3param; 'fqdn-cds': fqdn-cds; 'fqdn-cdnskey': fqdn-cdnskey; 'fqdn-other': fqdn-other; 'fqdn-wildcard': fqdn-wildcard; 'fqdn-delegation': fqdn-delegation; 'shard-size': shard-size; 'resp-ext-size': resp-ext-size; 'a-record': a-record; 'aaaa-record': aaaa-record; 'cname-record': cname-record; 'ns-record': ns-record; 'mx-record': mx-record; 'soa-record': soa-record; 'srv-record': srv-record; 'txt-record': txt-record; 'ptr-record': ptr-record; 'ta-record': ta-record; 'ds-record': ds-record; 'rrsig-record': rrsig-record; 'nsec-record': nsec-record; 'dnskey-record': dnskey-record; 'nsec3-record': nsec3-record; 'nsec3param-record': nsec3param-record; 'cds-record': cds-record; 'cdnskey-record': cdnskey-record; 'other-record': other-record; 'fqdn-in-shard-filter': fqdn-in-shard-filter; 'alias-record': alias-record; 'fqdn-alias': fqdn-alias;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#counters1 DdosDnsCache#counters1}
  */
  readonly counters1?: string;
}

export function ddosDnsCacheSamplingEnableToTerraform(struct?: DdosDnsCacheSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function ddosDnsCacheSamplingEnableToHclTerraform(struct?: DdosDnsCacheSamplingEnable | cdktf.IResolvable): any {
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

export class DdosDnsCacheSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDnsCacheSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DdosDnsCacheSamplingEnable | cdktf.IResolvable | undefined) {
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

export class DdosDnsCacheSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : DdosDnsCacheSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): DdosDnsCacheSamplingEnableOutputReference {
    return new DdosDnsCacheSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDnsCacheShardedDomainGroupListShardedDomainListPolicyListPacketCapturingRootZoneListStruct {
  /**
  * Capture-config name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#capture_config DdosDnsCache#capture_config}
  */
  readonly captureConfig?: string;
  /**
  * 'regular': Capture packet anyway; 'capture-on-failure': Capture packet if last XFR was failed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#capture_mode DdosDnsCache#capture_mode}
  */
  readonly captureMode?: string;
  /**
  * Specify root zone to be captured
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#root_zone DdosDnsCache#root_zone}
  */
  readonly rootZone?: string;
}

export function ddosDnsCacheShardedDomainGroupListShardedDomainListPolicyListPacketCapturingRootZoneListStructToTerraform(struct?: DdosDnsCacheShardedDomainGroupListShardedDomainListPolicyListPacketCapturingRootZoneListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capture_config: cdktf.stringToTerraform(struct!.captureConfig),
    capture_mode: cdktf.stringToTerraform(struct!.captureMode),
    root_zone: cdktf.stringToTerraform(struct!.rootZone),
  }
}


export function ddosDnsCacheShardedDomainGroupListShardedDomainListPolicyListPacketCapturingRootZoneListStructToHclTerraform(struct?: DdosDnsCacheShardedDomainGroupListShardedDomainListPolicyListPacketCapturingRootZoneListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capture_config: {
      value: cdktf.stringToHclTerraform(struct!.captureConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capture_mode: {
      value: cdktf.stringToHclTerraform(struct!.captureMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_zone: {
      value: cdktf.stringToHclTerraform(struct!.rootZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDnsCacheShardedDomainGroupListShardedDomainListPolicyListPacketCapturingRootZoneListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDnsCacheShardedDomainGroupListShardedDomainListPolicyListPacketCapturingRootZoneListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._captureConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureConfig = this._captureConfig;
    }
    if (this._captureMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureMode = this._captureMode;
    }
    if (this._rootZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootZone = this._rootZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDnsCacheShardedDomainGroupListShardedDomainListPolicyListPacketCapturingRootZoneListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._captureConfig = undefined;
      this._captureMode = undefined;
      this._rootZone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._captureConfig = value.captureConfig;
      this._captureMode = value.captureMode;
      this._rootZone = value.rootZone;
    }
  }

  // capture_config - computed: false, optional: true, required: false
  private _captureConfig?: string; 
  public get captureConfig() {
    return this.getStringAttribute('capture_config');
  }
  public set captureConfig(value: string) {
    this._captureConfig = value;
  }
  public resetCaptureConfig() {
    this._captureConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureConfigInput() {
    return this._captureConfig;
  }

  // capture_mode - computed: false, optional: true, required: false
  private _captureMode?: string; 
  public get captureMode() {
    return this.getStringAttribute('capture_mode');
  }
  public set captureMode(value: string) {
    this._captureMode = value;
  }
  public resetCaptureMode() {
    this._captureMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureModeInput() {
    return this._captureMode;
  }

  // root_zone - computed: false, optional: true, required: false
  private _rootZone?: string; 
  public get rootZone() {
    return this.getStringAttribute('root_zone');
  }
  public set rootZone(value: string) {
    this._rootZone = value;
  }
  public resetRootZone() {
    this._rootZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootZoneInput() {
    return this._rootZone;
  }
}

export class DdosDnsCacheShardedDomainGroupListShardedDomainListPolicyListPacketCapturingRootZoneListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDnsCacheShardedDomainGroupListShardedDomainListPolicyListPacketCapturingRootZoneListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDnsCacheShardedDomainGroupListShardedDomainListPolicyListPacketCapturingRootZoneListStructOutputReference {
    return new DdosDnsCacheShardedDomainGroupListShardedDomainListPolicyListPacketCapturingRootZoneListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDnsCacheShardedDomainGroupListShardedDomainListPolicyListPacketCapturing {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#uuid DdosDnsCache#uuid}
  */
  readonly uuid?: string;
  /**
  * root_zone_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#root_zone_list DdosDnsCache#root_zone_list}
  */
  readonly rootZoneList?: DdosDnsCacheShardedDomainGroupListShardedDomainListPolicyListPacketCapturingRootZoneListStruct[] | cdktf.IResolvable;
}

export function ddosDnsCacheShardedDomainGroupListShardedDomainListPolicyListPacketCapturingToTerraform(struct?: DdosDnsCacheShardedDomainGroupListShardedDomainListPolicyListPacketCapturingOutputReference | DdosDnsCacheShardedDomainGroupListShardedDomainListPolicyListPacketCapturing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    root_zone_list: cdktf.listMapper(ddosDnsCacheShardedDomainGroupListShardedDomainListPolicyListPacketCapturingRootZoneListStructToTerraform, true)(struct!.rootZoneList),
  }
}


export function ddosDnsCacheShardedDomainGroupListShardedDomainListPolicyListPacketCapturingToHclTerraform(struct?: DdosDnsCacheShardedDomainGroupListShardedDomainListPolicyListPacketCapturingOutputReference | DdosDnsCacheShardedDomainGroupListShardedDomainListPolicyListPacketCapturing): any {
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
    root_zone_list: {
      value: cdktf.listMapperHcl(ddosDnsCacheShardedDomainGroupListShardedDomainListPolicyListPacketCapturingRootZoneListStructToHclTerraform, true)(struct!.rootZoneList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDnsCacheShardedDomainGroupListShardedDomainListPolicyListPacketCapturingRootZoneListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDnsCacheShardedDomainGroupListShardedDomainListPolicyListPacketCapturingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDnsCacheShardedDomainGroupListShardedDomainListPolicyListPacketCapturing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._rootZoneList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootZoneList = this._rootZoneList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDnsCacheShardedDomainGroupListShardedDomainListPolicyListPacketCapturing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._rootZoneList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._rootZoneList.internalValue = value.rootZoneList;
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

  // root_zone_list - computed: false, optional: true, required: false
  private _rootZoneList = new DdosDnsCacheShardedDomainGroupListShardedDomainListPolicyListPacketCapturingRootZoneListStructList(this, "root_zone_list", false);
  public get rootZoneList() {
    return this._rootZoneList;
  }
  public putRootZoneList(value: DdosDnsCacheShardedDomainGroupListShardedDomainListPolicyListPacketCapturingRootZoneListStruct[] | cdktf.IResolvable) {
    this._rootZoneList.internalValue = value;
  }
  public resetRootZoneList() {
    this._rootZoneList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootZoneListInput() {
    return this._rootZoneList.internalValue;
  }
}
export interface DdosDnsCacheShardedDomainGroupListShardedDomainListPolicyListStruct {
  /**
  * Client ipv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#client_ipv4 DdosDnsCache#client_ipv4}
  */
  readonly clientIpv4?: string;
  /**
  * Client ipv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#client_ipv6 DdosDnsCache#client_ipv6}
  */
  readonly clientIpv6?: string;
  /**
  * DNS notify enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#dns_notify_enable_ipv4 DdosDnsCache#dns_notify_enable_ipv4}
  */
  readonly dnsNotifyEnableIpv4?: number;
  /**
  * DNS notify enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#dns_notify_enable_ipv6 DdosDnsCache#dns_notify_enable_ipv6}
  */
  readonly dnsNotifyEnableIpv6?: number;
  /**
  * Force update even the serial is the same
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#force DdosDnsCache#force}
  */
  readonly force?: number;
  /**
  * Manually refresh the particular zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#manual_refresh DdosDnsCache#manual_refresh}
  */
  readonly manualRefresh?: string;
  /**
  * DNS sharded domain list policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#name DdosDnsCache#name}
  */
  readonly name: string;
  /**
  * Zone transfer refresh rate in hours (Default 4). 0 means no refresh
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#refresh_interval_hours DdosDnsCache#refresh_interval_hours}
  */
  readonly refreshIntervalHours?: number;
  /**
  * Master ipv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#server_ipv4 DdosDnsCache#server_ipv4}
  */
  readonly serverIpv4?: string;
  /**
  * Master ipv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#server_ipv6 DdosDnsCache#server_ipv6}
  */
  readonly serverIpv6?: string;
  /**
  * Port number (default 53)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#server_v4_port DdosDnsCache#server_v4_port}
  */
  readonly serverV4Port?: number;
  /**
  * Port number (default 53)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#server_v6_port DdosDnsCache#server_v6_port}
  */
  readonly serverV6Port?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#user_tag DdosDnsCache#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#uuid DdosDnsCache#uuid}
  */
  readonly uuid?: string;
  /**
  * packet_capturing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#packet_capturing DdosDnsCache#packet_capturing}
  */
  readonly packetCapturing?: DdosDnsCacheShardedDomainGroupListShardedDomainListPolicyListPacketCapturing;
}

export function ddosDnsCacheShardedDomainGroupListShardedDomainListPolicyListStructToTerraform(struct?: DdosDnsCacheShardedDomainGroupListShardedDomainListPolicyListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_ipv4: cdktf.stringToTerraform(struct!.clientIpv4),
    client_ipv6: cdktf.stringToTerraform(struct!.clientIpv6),
    dns_notify_enable_ipv4: cdktf.numberToTerraform(struct!.dnsNotifyEnableIpv4),
    dns_notify_enable_ipv6: cdktf.numberToTerraform(struct!.dnsNotifyEnableIpv6),
    force: cdktf.numberToTerraform(struct!.force),
    manual_refresh: cdktf.stringToTerraform(struct!.manualRefresh),
    name: cdktf.stringToTerraform(struct!.name),
    refresh_interval_hours: cdktf.numberToTerraform(struct!.refreshIntervalHours),
    server_ipv4: cdktf.stringToTerraform(struct!.serverIpv4),
    server_ipv6: cdktf.stringToTerraform(struct!.serverIpv6),
    server_v4_port: cdktf.numberToTerraform(struct!.serverV4Port),
    server_v6_port: cdktf.numberToTerraform(struct!.serverV6Port),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    packet_capturing: ddosDnsCacheShardedDomainGroupListShardedDomainListPolicyListPacketCapturingToTerraform(struct!.packetCapturing),
  }
}


export function ddosDnsCacheShardedDomainGroupListShardedDomainListPolicyListStructToHclTerraform(struct?: DdosDnsCacheShardedDomainGroupListShardedDomainListPolicyListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.clientIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.clientIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_notify_enable_ipv4: {
      value: cdktf.numberToHclTerraform(struct!.dnsNotifyEnableIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_notify_enable_ipv6: {
      value: cdktf.numberToHclTerraform(struct!.dnsNotifyEnableIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    force: {
      value: cdktf.numberToHclTerraform(struct!.force),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    manual_refresh: {
      value: cdktf.stringToHclTerraform(struct!.manualRefresh),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refresh_interval_hours: {
      value: cdktf.numberToHclTerraform(struct!.refreshIntervalHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.serverIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.serverIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_v4_port: {
      value: cdktf.numberToHclTerraform(struct!.serverV4Port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_v6_port: {
      value: cdktf.numberToHclTerraform(struct!.serverV6Port),
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
    packet_capturing: {
      value: ddosDnsCacheShardedDomainGroupListShardedDomainListPolicyListPacketCapturingToHclTerraform(struct!.packetCapturing),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDnsCacheShardedDomainGroupListShardedDomainListPolicyListPacketCapturingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDnsCacheShardedDomainGroupListShardedDomainListPolicyListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDnsCacheShardedDomainGroupListShardedDomainListPolicyListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIpv4 = this._clientIpv4;
    }
    if (this._clientIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIpv6 = this._clientIpv6;
    }
    if (this._dnsNotifyEnableIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsNotifyEnableIpv4 = this._dnsNotifyEnableIpv4;
    }
    if (this._dnsNotifyEnableIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsNotifyEnableIpv6 = this._dnsNotifyEnableIpv6;
    }
    if (this._force !== undefined) {
      hasAnyValues = true;
      internalValueResult.force = this._force;
    }
    if (this._manualRefresh !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualRefresh = this._manualRefresh;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._refreshIntervalHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshIntervalHours = this._refreshIntervalHours;
    }
    if (this._serverIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverIpv4 = this._serverIpv4;
    }
    if (this._serverIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverIpv6 = this._serverIpv6;
    }
    if (this._serverV4Port !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverV4Port = this._serverV4Port;
    }
    if (this._serverV6Port !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverV6Port = this._serverV6Port;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._packetCapturing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetCapturing = this._packetCapturing?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDnsCacheShardedDomainGroupListShardedDomainListPolicyListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientIpv4 = undefined;
      this._clientIpv6 = undefined;
      this._dnsNotifyEnableIpv4 = undefined;
      this._dnsNotifyEnableIpv6 = undefined;
      this._force = undefined;
      this._manualRefresh = undefined;
      this._name = undefined;
      this._refreshIntervalHours = undefined;
      this._serverIpv4 = undefined;
      this._serverIpv6 = undefined;
      this._serverV4Port = undefined;
      this._serverV6Port = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._packetCapturing.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientIpv4 = value.clientIpv4;
      this._clientIpv6 = value.clientIpv6;
      this._dnsNotifyEnableIpv4 = value.dnsNotifyEnableIpv4;
      this._dnsNotifyEnableIpv6 = value.dnsNotifyEnableIpv6;
      this._force = value.force;
      this._manualRefresh = value.manualRefresh;
      this._name = value.name;
      this._refreshIntervalHours = value.refreshIntervalHours;
      this._serverIpv4 = value.serverIpv4;
      this._serverIpv6 = value.serverIpv6;
      this._serverV4Port = value.serverV4Port;
      this._serverV6Port = value.serverV6Port;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._packetCapturing.internalValue = value.packetCapturing;
    }
  }

  // client_ipv4 - computed: false, optional: true, required: false
  private _clientIpv4?: string; 
  public get clientIpv4() {
    return this.getStringAttribute('client_ipv4');
  }
  public set clientIpv4(value: string) {
    this._clientIpv4 = value;
  }
  public resetClientIpv4() {
    this._clientIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpv4Input() {
    return this._clientIpv4;
  }

  // client_ipv6 - computed: false, optional: true, required: false
  private _clientIpv6?: string; 
  public get clientIpv6() {
    return this.getStringAttribute('client_ipv6');
  }
  public set clientIpv6(value: string) {
    this._clientIpv6 = value;
  }
  public resetClientIpv6() {
    this._clientIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpv6Input() {
    return this._clientIpv6;
  }

  // dns_notify_enable_ipv4 - computed: false, optional: true, required: false
  private _dnsNotifyEnableIpv4?: number; 
  public get dnsNotifyEnableIpv4() {
    return this.getNumberAttribute('dns_notify_enable_ipv4');
  }
  public set dnsNotifyEnableIpv4(value: number) {
    this._dnsNotifyEnableIpv4 = value;
  }
  public resetDnsNotifyEnableIpv4() {
    this._dnsNotifyEnableIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNotifyEnableIpv4Input() {
    return this._dnsNotifyEnableIpv4;
  }

  // dns_notify_enable_ipv6 - computed: false, optional: true, required: false
  private _dnsNotifyEnableIpv6?: number; 
  public get dnsNotifyEnableIpv6() {
    return this.getNumberAttribute('dns_notify_enable_ipv6');
  }
  public set dnsNotifyEnableIpv6(value: number) {
    this._dnsNotifyEnableIpv6 = value;
  }
  public resetDnsNotifyEnableIpv6() {
    this._dnsNotifyEnableIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNotifyEnableIpv6Input() {
    return this._dnsNotifyEnableIpv6;
  }

  // force - computed: false, optional: true, required: false
  private _force?: number; 
  public get force() {
    return this.getNumberAttribute('force');
  }
  public set force(value: number) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
  }

  // manual_refresh - computed: false, optional: true, required: false
  private _manualRefresh?: string; 
  public get manualRefresh() {
    return this.getStringAttribute('manual_refresh');
  }
  public set manualRefresh(value: string) {
    this._manualRefresh = value;
  }
  public resetManualRefresh() {
    this._manualRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualRefreshInput() {
    return this._manualRefresh;
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

  // refresh_interval_hours - computed: false, optional: true, required: false
  private _refreshIntervalHours?: number; 
  public get refreshIntervalHours() {
    return this.getNumberAttribute('refresh_interval_hours');
  }
  public set refreshIntervalHours(value: number) {
    this._refreshIntervalHours = value;
  }
  public resetRefreshIntervalHours() {
    this._refreshIntervalHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshIntervalHoursInput() {
    return this._refreshIntervalHours;
  }

  // server_ipv4 - computed: false, optional: true, required: false
  private _serverIpv4?: string; 
  public get serverIpv4() {
    return this.getStringAttribute('server_ipv4');
  }
  public set serverIpv4(value: string) {
    this._serverIpv4 = value;
  }
  public resetServerIpv4() {
    this._serverIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIpv4Input() {
    return this._serverIpv4;
  }

  // server_ipv6 - computed: false, optional: true, required: false
  private _serverIpv6?: string; 
  public get serverIpv6() {
    return this.getStringAttribute('server_ipv6');
  }
  public set serverIpv6(value: string) {
    this._serverIpv6 = value;
  }
  public resetServerIpv6() {
    this._serverIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIpv6Input() {
    return this._serverIpv6;
  }

  // server_v4_port - computed: false, optional: true, required: false
  private _serverV4Port?: number; 
  public get serverV4Port() {
    return this.getNumberAttribute('server_v4_port');
  }
  public set serverV4Port(value: number) {
    this._serverV4Port = value;
  }
  public resetServerV4Port() {
    this._serverV4Port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverV4PortInput() {
    return this._serverV4Port;
  }

  // server_v6_port - computed: false, optional: true, required: false
  private _serverV6Port?: number; 
  public get serverV6Port() {
    return this.getNumberAttribute('server_v6_port');
  }
  public set serverV6Port(value: number) {
    this._serverV6Port = value;
  }
  public resetServerV6Port() {
    this._serverV6Port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverV6PortInput() {
    return this._serverV6Port;
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

  // packet_capturing - computed: false, optional: true, required: false
  private _packetCapturing = new DdosDnsCacheShardedDomainGroupListShardedDomainListPolicyListPacketCapturingOutputReference(this, "packet_capturing");
  public get packetCapturing() {
    return this._packetCapturing;
  }
  public putPacketCapturing(value: DdosDnsCacheShardedDomainGroupListShardedDomainListPolicyListPacketCapturing) {
    this._packetCapturing.internalValue = value;
  }
  public resetPacketCapturing() {
    this._packetCapturing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetCapturingInput() {
    return this._packetCapturing.internalValue;
  }
}

export class DdosDnsCacheShardedDomainGroupListShardedDomainListPolicyListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDnsCacheShardedDomainGroupListShardedDomainListPolicyListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDnsCacheShardedDomainGroupListShardedDomainListPolicyListStructOutputReference {
    return new DdosDnsCacheShardedDomainGroupListShardedDomainListPolicyListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDnsCacheShardedDomainGroupListStruct {
  /**
  * DDOS encap template to sepcify the tunnel endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#encap_template DdosDnsCache#encap_template}
  */
  readonly encapTemplate?: string;
  /**
  * 'forward': Forward query to server (default); 'tunnel-encap': Encapsulate the query and send on a tunnel;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#match_action DdosDnsCache#match_action}
  */
  readonly matchAction?: string;
  /**
  * DNS sharded domain group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#name DdosDnsCache#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#user_tag DdosDnsCache#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#uuid DdosDnsCache#uuid}
  */
  readonly uuid?: string;
  /**
  * sharded_domain_list_policy_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#sharded_domain_list_policy_list DdosDnsCache#sharded_domain_list_policy_list}
  */
  readonly shardedDomainListPolicyList?: DdosDnsCacheShardedDomainGroupListShardedDomainListPolicyListStruct[] | cdktf.IResolvable;
}

export function ddosDnsCacheShardedDomainGroupListStructToTerraform(struct?: DdosDnsCacheShardedDomainGroupListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encap_template: cdktf.stringToTerraform(struct!.encapTemplate),
    match_action: cdktf.stringToTerraform(struct!.matchAction),
    name: cdktf.stringToTerraform(struct!.name),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sharded_domain_list_policy_list: cdktf.listMapper(ddosDnsCacheShardedDomainGroupListShardedDomainListPolicyListStructToTerraform, true)(struct!.shardedDomainListPolicyList),
  }
}


export function ddosDnsCacheShardedDomainGroupListStructToHclTerraform(struct?: DdosDnsCacheShardedDomainGroupListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encap_template: {
      value: cdktf.stringToHclTerraform(struct!.encapTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_action: {
      value: cdktf.stringToHclTerraform(struct!.matchAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    sharded_domain_list_policy_list: {
      value: cdktf.listMapperHcl(ddosDnsCacheShardedDomainGroupListShardedDomainListPolicyListStructToHclTerraform, true)(struct!.shardedDomainListPolicyList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDnsCacheShardedDomainGroupListShardedDomainListPolicyListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDnsCacheShardedDomainGroupListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDnsCacheShardedDomainGroupListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encapTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.encapTemplate = this._encapTemplate;
    }
    if (this._matchAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchAction = this._matchAction;
    }
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
    if (this._shardedDomainListPolicyList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shardedDomainListPolicyList = this._shardedDomainListPolicyList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDnsCacheShardedDomainGroupListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encapTemplate = undefined;
      this._matchAction = undefined;
      this._name = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._shardedDomainListPolicyList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encapTemplate = value.encapTemplate;
      this._matchAction = value.matchAction;
      this._name = value.name;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._shardedDomainListPolicyList.internalValue = value.shardedDomainListPolicyList;
    }
  }

  // encap_template - computed: false, optional: true, required: false
  private _encapTemplate?: string; 
  public get encapTemplate() {
    return this.getStringAttribute('encap_template');
  }
  public set encapTemplate(value: string) {
    this._encapTemplate = value;
  }
  public resetEncapTemplate() {
    this._encapTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapTemplateInput() {
    return this._encapTemplate;
  }

  // match_action - computed: false, optional: true, required: false
  private _matchAction?: string; 
  public get matchAction() {
    return this.getStringAttribute('match_action');
  }
  public set matchAction(value: string) {
    this._matchAction = value;
  }
  public resetMatchAction() {
    this._matchAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchActionInput() {
    return this._matchAction;
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

  // sharded_domain_list_policy_list - computed: false, optional: true, required: false
  private _shardedDomainListPolicyList = new DdosDnsCacheShardedDomainGroupListShardedDomainListPolicyListStructList(this, "sharded_domain_list_policy_list", false);
  public get shardedDomainListPolicyList() {
    return this._shardedDomainListPolicyList;
  }
  public putShardedDomainListPolicyList(value: DdosDnsCacheShardedDomainGroupListShardedDomainListPolicyListStruct[] | cdktf.IResolvable) {
    this._shardedDomainListPolicyList.internalValue = value;
  }
  public resetShardedDomainListPolicyList() {
    this._shardedDomainListPolicyList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardedDomainListPolicyListInput() {
    return this._shardedDomainListPolicyList.internalValue;
  }
}

export class DdosDnsCacheShardedDomainGroupListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDnsCacheShardedDomainGroupListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDnsCacheShardedDomainGroupListStructOutputReference {
    return new DdosDnsCacheShardedDomainGroupListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDnsCacheZoneManualOverrideActionListStruct {
  /**
  * 'default': Default; 'forward': Forward to DNS server; 'drop': Drop the request; 'serve-from-cache': Serve DNS records;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#action DdosDnsCache#action}
  */
  readonly action?: string;
  /**
  * Specify zone name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#zone_name DdosDnsCache#zone_name}
  */
  readonly zoneName: string;
}

export function ddosDnsCacheZoneManualOverrideActionListStructToTerraform(struct?: DdosDnsCacheZoneManualOverrideActionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    zone_name: cdktf.stringToTerraform(struct!.zoneName),
  }
}


export function ddosDnsCacheZoneManualOverrideActionListStructToHclTerraform(struct?: DdosDnsCacheZoneManualOverrideActionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_name: {
      value: cdktf.stringToHclTerraform(struct!.zoneName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDnsCacheZoneManualOverrideActionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDnsCacheZoneManualOverrideActionListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._zoneName !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneName = this._zoneName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDnsCacheZoneManualOverrideActionListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._zoneName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._zoneName = value.zoneName;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // zone_name - computed: false, optional: false, required: true
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }
}

export class DdosDnsCacheZoneManualOverrideActionListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDnsCacheZoneManualOverrideActionListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDnsCacheZoneManualOverrideActionListStructOutputReference {
    return new DdosDnsCacheZoneManualOverrideActionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDnsCacheZoneTransfer {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#uuid DdosDnsCache#uuid}
  */
  readonly uuid?: string;
}

export function ddosDnsCacheZoneTransferToTerraform(struct?: DdosDnsCacheZoneTransferOutputReference | DdosDnsCacheZoneTransfer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDnsCacheZoneTransferToHclTerraform(struct?: DdosDnsCacheZoneTransferOutputReference | DdosDnsCacheZoneTransfer): any {
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

export class DdosDnsCacheZoneTransferOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDnsCacheZoneTransfer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDnsCacheZoneTransfer | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache thunder_ddos_dns_cache}
*/
export class DdosDnsCache extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dns_cache";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosDnsCache resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosDnsCache to import
  * @param importFromId The id of the existing DdosDnsCache that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDnsCache to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dns_cache", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache thunder_ddos_dns_cache} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosDnsCacheConfig
  */
  public constructor(scope: Construct, id: string, config: DdosDnsCacheConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dns_cache',
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
    this._anyQueryActionStr = config.anyQueryActionStr;
    this._defaultServingAction = config.defaultServingAction;
    this._dnsLogging = config.dnsLogging;
    this._ednsUdpSize = config.ednsUdpSize;
    this._id = config.id;
    this._name = config.name;
    this._negCacheActionFollowQRate = config.negCacheActionFollowQRate;
    this._nonAuthoritativeZoneQueryActionStr = config.nonAuthoritativeZoneQueryActionStr;
    this._respondServfail = config.respondServfail;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._zoneDomainLookupMissAction = config.zoneDomainLookupMissAction;
    this._domainGroup.internalValue = config.domainGroup;
    this._fqdnManualOverrideActionList.internalValue = config.fqdnManualOverrideActionList;
    this._samplingEnable.internalValue = config.samplingEnable;
    this._shardedDomainGroupList.internalValue = config.shardedDomainGroupList;
    this._zoneManualOverrideActionList.internalValue = config.zoneManualOverrideActionList;
    this._zoneTransfer.internalValue = config.zoneTransfer;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // any_query_action_str - computed: false, optional: true, required: false
  private _anyQueryActionStr?: string; 
  public get anyQueryActionStr() {
    return this.getStringAttribute('any_query_action_str');
  }
  public set anyQueryActionStr(value: string) {
    this._anyQueryActionStr = value;
  }
  public resetAnyQueryActionStr() {
    this._anyQueryActionStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyQueryActionStrInput() {
    return this._anyQueryActionStr;
  }

  // default_serving_action - computed: false, optional: true, required: false
  private _defaultServingAction?: string; 
  public get defaultServingAction() {
    return this.getStringAttribute('default_serving_action');
  }
  public set defaultServingAction(value: string) {
    this._defaultServingAction = value;
  }
  public resetDefaultServingAction() {
    this._defaultServingAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultServingActionInput() {
    return this._defaultServingAction;
  }

  // dns_logging - computed: false, optional: true, required: false
  private _dnsLogging?: string; 
  public get dnsLogging() {
    return this.getStringAttribute('dns_logging');
  }
  public set dnsLogging(value: string) {
    this._dnsLogging = value;
  }
  public resetDnsLogging() {
    this._dnsLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsLoggingInput() {
    return this._dnsLogging;
  }

  // edns_udp_size - computed: false, optional: true, required: false
  private _ednsUdpSize?: number; 
  public get ednsUdpSize() {
    return this.getNumberAttribute('edns_udp_size');
  }
  public set ednsUdpSize(value: number) {
    this._ednsUdpSize = value;
  }
  public resetEdnsUdpSize() {
    this._ednsUdpSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ednsUdpSizeInput() {
    return this._ednsUdpSize;
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

  // neg_cache_action_follow_q_rate - computed: false, optional: true, required: false
  private _negCacheActionFollowQRate?: number; 
  public get negCacheActionFollowQRate() {
    return this.getNumberAttribute('neg_cache_action_follow_q_rate');
  }
  public set negCacheActionFollowQRate(value: number) {
    this._negCacheActionFollowQRate = value;
  }
  public resetNegCacheActionFollowQRate() {
    this._negCacheActionFollowQRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negCacheActionFollowQRateInput() {
    return this._negCacheActionFollowQRate;
  }

  // non_authoritative_zone_query_action_str - computed: false, optional: true, required: false
  private _nonAuthoritativeZoneQueryActionStr?: string; 
  public get nonAuthoritativeZoneQueryActionStr() {
    return this.getStringAttribute('non_authoritative_zone_query_action_str');
  }
  public set nonAuthoritativeZoneQueryActionStr(value: string) {
    this._nonAuthoritativeZoneQueryActionStr = value;
  }
  public resetNonAuthoritativeZoneQueryActionStr() {
    this._nonAuthoritativeZoneQueryActionStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonAuthoritativeZoneQueryActionStrInput() {
    return this._nonAuthoritativeZoneQueryActionStr;
  }

  // respond_servfail - computed: false, optional: true, required: false
  private _respondServfail?: number; 
  public get respondServfail() {
    return this.getNumberAttribute('respond_servfail');
  }
  public set respondServfail(value: number) {
    this._respondServfail = value;
  }
  public resetRespondServfail() {
    this._respondServfail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respondServfailInput() {
    return this._respondServfail;
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

  // zone_domain_lookup_miss_action - computed: false, optional: true, required: false
  private _zoneDomainLookupMissAction?: string; 
  public get zoneDomainLookupMissAction() {
    return this.getStringAttribute('zone_domain_lookup_miss_action');
  }
  public set zoneDomainLookupMissAction(value: string) {
    this._zoneDomainLookupMissAction = value;
  }
  public resetZoneDomainLookupMissAction() {
    this._zoneDomainLookupMissAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneDomainLookupMissActionInput() {
    return this._zoneDomainLookupMissAction;
  }

  // domain_group - computed: false, optional: true, required: false
  private _domainGroup = new DdosDnsCacheDomainGroupOutputReference(this, "domain_group");
  public get domainGroup() {
    return this._domainGroup;
  }
  public putDomainGroup(value: DdosDnsCacheDomainGroup) {
    this._domainGroup.internalValue = value;
  }
  public resetDomainGroup() {
    this._domainGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainGroupInput() {
    return this._domainGroup.internalValue;
  }

  // fqdn_manual_override_action_list - computed: false, optional: true, required: false
  private _fqdnManualOverrideActionList = new DdosDnsCacheFqdnManualOverrideActionListStructList(this, "fqdn_manual_override_action_list", false);
  public get fqdnManualOverrideActionList() {
    return this._fqdnManualOverrideActionList;
  }
  public putFqdnManualOverrideActionList(value: DdosDnsCacheFqdnManualOverrideActionListStruct[] | cdktf.IResolvable) {
    this._fqdnManualOverrideActionList.internalValue = value;
  }
  public resetFqdnManualOverrideActionList() {
    this._fqdnManualOverrideActionList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnManualOverrideActionListInput() {
    return this._fqdnManualOverrideActionList.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new DdosDnsCacheSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: DdosDnsCacheSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // sharded_domain_group_list - computed: false, optional: true, required: false
  private _shardedDomainGroupList = new DdosDnsCacheShardedDomainGroupListStructList(this, "sharded_domain_group_list", false);
  public get shardedDomainGroupList() {
    return this._shardedDomainGroupList;
  }
  public putShardedDomainGroupList(value: DdosDnsCacheShardedDomainGroupListStruct[] | cdktf.IResolvable) {
    this._shardedDomainGroupList.internalValue = value;
  }
  public resetShardedDomainGroupList() {
    this._shardedDomainGroupList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardedDomainGroupListInput() {
    return this._shardedDomainGroupList.internalValue;
  }

  // zone_manual_override_action_list - computed: false, optional: true, required: false
  private _zoneManualOverrideActionList = new DdosDnsCacheZoneManualOverrideActionListStructList(this, "zone_manual_override_action_list", false);
  public get zoneManualOverrideActionList() {
    return this._zoneManualOverrideActionList;
  }
  public putZoneManualOverrideActionList(value: DdosDnsCacheZoneManualOverrideActionListStruct[] | cdktf.IResolvable) {
    this._zoneManualOverrideActionList.internalValue = value;
  }
  public resetZoneManualOverrideActionList() {
    this._zoneManualOverrideActionList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneManualOverrideActionListInput() {
    return this._zoneManualOverrideActionList.internalValue;
  }

  // zone_transfer - computed: false, optional: true, required: false
  private _zoneTransfer = new DdosDnsCacheZoneTransferOutputReference(this, "zone_transfer");
  public get zoneTransfer() {
    return this._zoneTransfer;
  }
  public putZoneTransfer(value: DdosDnsCacheZoneTransfer) {
    this._zoneTransfer.internalValue = value;
  }
  public resetZoneTransfer() {
    this._zoneTransfer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTransferInput() {
    return this._zoneTransfer.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      any_query_action_str: cdktf.stringToTerraform(this._anyQueryActionStr),
      default_serving_action: cdktf.stringToTerraform(this._defaultServingAction),
      dns_logging: cdktf.stringToTerraform(this._dnsLogging),
      edns_udp_size: cdktf.numberToTerraform(this._ednsUdpSize),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      neg_cache_action_follow_q_rate: cdktf.numberToTerraform(this._negCacheActionFollowQRate),
      non_authoritative_zone_query_action_str: cdktf.stringToTerraform(this._nonAuthoritativeZoneQueryActionStr),
      respond_servfail: cdktf.numberToTerraform(this._respondServfail),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      zone_domain_lookup_miss_action: cdktf.stringToTerraform(this._zoneDomainLookupMissAction),
      domain_group: ddosDnsCacheDomainGroupToTerraform(this._domainGroup.internalValue),
      fqdn_manual_override_action_list: cdktf.listMapper(ddosDnsCacheFqdnManualOverrideActionListStructToTerraform, true)(this._fqdnManualOverrideActionList.internalValue),
      sampling_enable: cdktf.listMapper(ddosDnsCacheSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
      sharded_domain_group_list: cdktf.listMapper(ddosDnsCacheShardedDomainGroupListStructToTerraform, true)(this._shardedDomainGroupList.internalValue),
      zone_manual_override_action_list: cdktf.listMapper(ddosDnsCacheZoneManualOverrideActionListStructToTerraform, true)(this._zoneManualOverrideActionList.internalValue),
      zone_transfer: ddosDnsCacheZoneTransferToTerraform(this._zoneTransfer.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      any_query_action_str: {
        value: cdktf.stringToHclTerraform(this._anyQueryActionStr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_serving_action: {
        value: cdktf.stringToHclTerraform(this._defaultServingAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_logging: {
        value: cdktf.stringToHclTerraform(this._dnsLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edns_udp_size: {
        value: cdktf.numberToHclTerraform(this._ednsUdpSize),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      neg_cache_action_follow_q_rate: {
        value: cdktf.numberToHclTerraform(this._negCacheActionFollowQRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      non_authoritative_zone_query_action_str: {
        value: cdktf.stringToHclTerraform(this._nonAuthoritativeZoneQueryActionStr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      respond_servfail: {
        value: cdktf.numberToHclTerraform(this._respondServfail),
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
      zone_domain_lookup_miss_action: {
        value: cdktf.stringToHclTerraform(this._zoneDomainLookupMissAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_group: {
        value: ddosDnsCacheDomainGroupToHclTerraform(this._domainGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDnsCacheDomainGroupList",
      },
      fqdn_manual_override_action_list: {
        value: cdktf.listMapperHcl(ddosDnsCacheFqdnManualOverrideActionListStructToHclTerraform, true)(this._fqdnManualOverrideActionList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDnsCacheFqdnManualOverrideActionListStructList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(ddosDnsCacheSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDnsCacheSamplingEnableList",
      },
      sharded_domain_group_list: {
        value: cdktf.listMapperHcl(ddosDnsCacheShardedDomainGroupListStructToHclTerraform, true)(this._shardedDomainGroupList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDnsCacheShardedDomainGroupListStructList",
      },
      zone_manual_override_action_list: {
        value: cdktf.listMapperHcl(ddosDnsCacheZoneManualOverrideActionListStructToHclTerraform, true)(this._zoneManualOverrideActionList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDnsCacheZoneManualOverrideActionListStructList",
      },
      zone_transfer: {
        value: ddosDnsCacheZoneTransferToHclTerraform(this._zoneTransfer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDnsCacheZoneTransferList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
