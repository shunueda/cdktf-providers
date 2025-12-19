// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_domain_group_domain_list_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosDnsCacheDomainGroupDomainListPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * cache all FQDN records including uncommon types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_domain_group_domain_list_policy#cache_all_records DdosDnsCacheDomainGroupDomainListPolicy#cache_all_records}
  */
  readonly cacheAllRecords?: number;
  /**
  * cache all DNSSEC FQDN records types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_domain_group_domain_list_policy#cache_dnssec_records DdosDnsCacheDomainGroupDomainListPolicy#cache_dnssec_records}
  */
  readonly cacheDnssecRecords?: number;
  /**
  * Client ipv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_domain_group_domain_list_policy#client_ipv4 DdosDnsCacheDomainGroupDomainListPolicy#client_ipv4}
  */
  readonly clientIpv4?: string;
  /**
  * Client ipv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_domain_group_domain_list_policy#client_ipv6 DdosDnsCacheDomainGroupDomainListPolicy#client_ipv6}
  */
  readonly clientIpv6?: string;
  /**
  * Dns_cache_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_domain_group_domain_list_policy#dns_cache_name DdosDnsCacheDomainGroupDomainListPolicy#dns_cache_name}
  */
  readonly dnsCacheName: string;
  /**
  * DNS notify enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_domain_group_domain_list_policy#dns_notify_enable_ipv4 DdosDnsCacheDomainGroupDomainListPolicy#dns_notify_enable_ipv4}
  */
  readonly dnsNotifyEnableIpv4?: number;
  /**
  * DNS notify enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_domain_group_domain_list_policy#dns_notify_enable_ipv6 DdosDnsCacheDomainGroupDomainListPolicy#dns_notify_enable_ipv6}
  */
  readonly dnsNotifyEnableIpv6?: number;
  /**
  * Force update even the serial is the same
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_domain_group_domain_list_policy#force DdosDnsCacheDomainGroupDomainListPolicy#force}
  */
  readonly force?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_domain_group_domain_list_policy#id DdosDnsCacheDomainGroupDomainListPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Manually refresh the particular zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_domain_group_domain_list_policy#manual_refresh DdosDnsCacheDomainGroupDomainListPolicy#manual_refresh}
  */
  readonly manualRefresh?: string;
  /**
  * DNS domain list policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_domain_group_domain_list_policy#name DdosDnsCacheDomainGroupDomainListPolicy#name}
  */
  readonly name: string;
  /**
  * 'set-truncate-bit': Set the TC bit for oversize answer(default); 'disable-truncate-bit': Do not set TC bit for oversize answer;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_domain_group_domain_list_policy#oversize_answer_response DdosDnsCacheDomainGroupDomainListPolicy#oversize_answer_response}
  */
  readonly oversizeAnswerResponse?: string;
  /**
  * Zone transfer refresh rate in hours (Default 4). 0 means no refresh
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_domain_group_domain_list_policy#refresh_interval_hours DdosDnsCacheDomainGroupDomainListPolicy#refresh_interval_hours}
  */
  readonly refreshIntervalHours?: number;
  /**
  * Always try to resolve domain in CNAME record answer section
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_domain_group_domain_list_policy#resolve_cname_record DdosDnsCacheDomainGroupDomainListPolicy#resolve_cname_record}
  */
  readonly resolveCnameRecord?: number;
  /**
  * Respond with authority section for all requests under this list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_domain_group_domain_list_policy#respond_with_authority DdosDnsCacheDomainGroupDomainListPolicy#respond_with_authority}
  */
  readonly respondWithAuthority?: number;
  /**
  * Master ipv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_domain_group_domain_list_policy#server_ipv4 DdosDnsCacheDomainGroupDomainListPolicy#server_ipv4}
  */
  readonly serverIpv4?: string;
  /**
  * Master ipv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_domain_group_domain_list_policy#server_ipv6 DdosDnsCacheDomainGroupDomainListPolicy#server_ipv6}
  */
  readonly serverIpv6?: string;
  /**
  * Port number (default 53)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_domain_group_domain_list_policy#server_v4_port DdosDnsCacheDomainGroupDomainListPolicy#server_v4_port}
  */
  readonly serverV4Port?: number;
  /**
  * Port number (default 53)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_domain_group_domain_list_policy#server_v6_port DdosDnsCacheDomainGroupDomainListPolicy#server_v6_port}
  */
  readonly serverV6Port?: number;
  /**
  * Override the TTL value for zone transfer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_domain_group_domain_list_policy#ttl_override DdosDnsCacheDomainGroupDomainListPolicy#ttl_override}
  */
  readonly ttlOverride?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_domain_group_domain_list_policy#user_tag DdosDnsCacheDomainGroupDomainListPolicy#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_domain_group_domain_list_policy#uuid DdosDnsCacheDomainGroupDomainListPolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * packet_capturing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_domain_group_domain_list_policy#packet_capturing DdosDnsCacheDomainGroupDomainListPolicy#packet_capturing}
  */
  readonly packetCapturing?: DdosDnsCacheDomainGroupDomainListPolicyPacketCapturing;
}
export interface DdosDnsCacheDomainGroupDomainListPolicyPacketCapturingRootZoneListStruct {
  /**
  * Capture-config name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_domain_group_domain_list_policy#capture_config DdosDnsCacheDomainGroupDomainListPolicy#capture_config}
  */
  readonly captureConfig?: string;
  /**
  * 'regular': Capture packet anyway; 'capture-on-failure': Capture packet if last XFR was failed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_domain_group_domain_list_policy#capture_mode DdosDnsCacheDomainGroupDomainListPolicy#capture_mode}
  */
  readonly captureMode?: string;
  /**
  * Specify root zone to be captured
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_domain_group_domain_list_policy#root_zone DdosDnsCacheDomainGroupDomainListPolicy#root_zone}
  */
  readonly rootZone?: string;
}

export function ddosDnsCacheDomainGroupDomainListPolicyPacketCapturingRootZoneListStructToTerraform(struct?: DdosDnsCacheDomainGroupDomainListPolicyPacketCapturingRootZoneListStruct | cdktf.IResolvable): any {
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


export function ddosDnsCacheDomainGroupDomainListPolicyPacketCapturingRootZoneListStructToHclTerraform(struct?: DdosDnsCacheDomainGroupDomainListPolicyPacketCapturingRootZoneListStruct | cdktf.IResolvable): any {
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

export class DdosDnsCacheDomainGroupDomainListPolicyPacketCapturingRootZoneListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDnsCacheDomainGroupDomainListPolicyPacketCapturingRootZoneListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DdosDnsCacheDomainGroupDomainListPolicyPacketCapturingRootZoneListStruct | cdktf.IResolvable | undefined) {
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

export class DdosDnsCacheDomainGroupDomainListPolicyPacketCapturingRootZoneListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDnsCacheDomainGroupDomainListPolicyPacketCapturingRootZoneListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDnsCacheDomainGroupDomainListPolicyPacketCapturingRootZoneListStructOutputReference {
    return new DdosDnsCacheDomainGroupDomainListPolicyPacketCapturingRootZoneListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDnsCacheDomainGroupDomainListPolicyPacketCapturing {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_domain_group_domain_list_policy#uuid DdosDnsCacheDomainGroupDomainListPolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * root_zone_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_domain_group_domain_list_policy#root_zone_list DdosDnsCacheDomainGroupDomainListPolicy#root_zone_list}
  */
  readonly rootZoneList?: DdosDnsCacheDomainGroupDomainListPolicyPacketCapturingRootZoneListStruct[] | cdktf.IResolvable;
}

export function ddosDnsCacheDomainGroupDomainListPolicyPacketCapturingToTerraform(struct?: DdosDnsCacheDomainGroupDomainListPolicyPacketCapturingOutputReference | DdosDnsCacheDomainGroupDomainListPolicyPacketCapturing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    root_zone_list: cdktf.listMapper(ddosDnsCacheDomainGroupDomainListPolicyPacketCapturingRootZoneListStructToTerraform, true)(struct!.rootZoneList),
  }
}


export function ddosDnsCacheDomainGroupDomainListPolicyPacketCapturingToHclTerraform(struct?: DdosDnsCacheDomainGroupDomainListPolicyPacketCapturingOutputReference | DdosDnsCacheDomainGroupDomainListPolicyPacketCapturing): any {
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
      value: cdktf.listMapperHcl(ddosDnsCacheDomainGroupDomainListPolicyPacketCapturingRootZoneListStructToHclTerraform, true)(struct!.rootZoneList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDnsCacheDomainGroupDomainListPolicyPacketCapturingRootZoneListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDnsCacheDomainGroupDomainListPolicyPacketCapturingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDnsCacheDomainGroupDomainListPolicyPacketCapturing | undefined {
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

  public set internalValue(value: DdosDnsCacheDomainGroupDomainListPolicyPacketCapturing | undefined) {
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
  private _rootZoneList = new DdosDnsCacheDomainGroupDomainListPolicyPacketCapturingRootZoneListStructList(this, "root_zone_list", false);
  public get rootZoneList() {
    return this._rootZoneList;
  }
  public putRootZoneList(value: DdosDnsCacheDomainGroupDomainListPolicyPacketCapturingRootZoneListStruct[] | cdktf.IResolvable) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_domain_group_domain_list_policy thunder_ddos_dns_cache_domain_group_domain_list_policy}
*/
export class DdosDnsCacheDomainGroupDomainListPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dns_cache_domain_group_domain_list_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosDnsCacheDomainGroupDomainListPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosDnsCacheDomainGroupDomainListPolicy to import
  * @param importFromId The id of the existing DdosDnsCacheDomainGroupDomainListPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_domain_group_domain_list_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDnsCacheDomainGroupDomainListPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dns_cache_domain_group_domain_list_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_domain_group_domain_list_policy thunder_ddos_dns_cache_domain_group_domain_list_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosDnsCacheDomainGroupDomainListPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DdosDnsCacheDomainGroupDomainListPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dns_cache_domain_group_domain_list_policy',
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
    this._cacheAllRecords = config.cacheAllRecords;
    this._cacheDnssecRecords = config.cacheDnssecRecords;
    this._clientIpv4 = config.clientIpv4;
    this._clientIpv6 = config.clientIpv6;
    this._dnsCacheName = config.dnsCacheName;
    this._dnsNotifyEnableIpv4 = config.dnsNotifyEnableIpv4;
    this._dnsNotifyEnableIpv6 = config.dnsNotifyEnableIpv6;
    this._force = config.force;
    this._id = config.id;
    this._manualRefresh = config.manualRefresh;
    this._name = config.name;
    this._oversizeAnswerResponse = config.oversizeAnswerResponse;
    this._refreshIntervalHours = config.refreshIntervalHours;
    this._resolveCnameRecord = config.resolveCnameRecord;
    this._respondWithAuthority = config.respondWithAuthority;
    this._serverIpv4 = config.serverIpv4;
    this._serverIpv6 = config.serverIpv6;
    this._serverV4Port = config.serverV4Port;
    this._serverV6Port = config.serverV6Port;
    this._ttlOverride = config.ttlOverride;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._packetCapturing.internalValue = config.packetCapturing;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // dns_cache_name - computed: false, optional: false, required: true
  private _dnsCacheName?: string; 
  public get dnsCacheName() {
    return this.getStringAttribute('dns_cache_name');
  }
  public set dnsCacheName(value: string) {
    this._dnsCacheName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCacheNameInput() {
    return this._dnsCacheName;
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
  private _packetCapturing = new DdosDnsCacheDomainGroupDomainListPolicyPacketCapturingOutputReference(this, "packet_capturing");
  public get packetCapturing() {
    return this._packetCapturing;
  }
  public putPacketCapturing(value: DdosDnsCacheDomainGroupDomainListPolicyPacketCapturing) {
    this._packetCapturing.internalValue = value;
  }
  public resetPacketCapturing() {
    this._packetCapturing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetCapturingInput() {
    return this._packetCapturing.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cache_all_records: cdktf.numberToTerraform(this._cacheAllRecords),
      cache_dnssec_records: cdktf.numberToTerraform(this._cacheDnssecRecords),
      client_ipv4: cdktf.stringToTerraform(this._clientIpv4),
      client_ipv6: cdktf.stringToTerraform(this._clientIpv6),
      dns_cache_name: cdktf.stringToTerraform(this._dnsCacheName),
      dns_notify_enable_ipv4: cdktf.numberToTerraform(this._dnsNotifyEnableIpv4),
      dns_notify_enable_ipv6: cdktf.numberToTerraform(this._dnsNotifyEnableIpv6),
      force: cdktf.numberToTerraform(this._force),
      id: cdktf.stringToTerraform(this._id),
      manual_refresh: cdktf.stringToTerraform(this._manualRefresh),
      name: cdktf.stringToTerraform(this._name),
      oversize_answer_response: cdktf.stringToTerraform(this._oversizeAnswerResponse),
      refresh_interval_hours: cdktf.numberToTerraform(this._refreshIntervalHours),
      resolve_cname_record: cdktf.numberToTerraform(this._resolveCnameRecord),
      respond_with_authority: cdktf.numberToTerraform(this._respondWithAuthority),
      server_ipv4: cdktf.stringToTerraform(this._serverIpv4),
      server_ipv6: cdktf.stringToTerraform(this._serverIpv6),
      server_v4_port: cdktf.numberToTerraform(this._serverV4Port),
      server_v6_port: cdktf.numberToTerraform(this._serverV6Port),
      ttl_override: cdktf.numberToTerraform(this._ttlOverride),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      packet_capturing: ddosDnsCacheDomainGroupDomainListPolicyPacketCapturingToTerraform(this._packetCapturing.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cache_all_records: {
        value: cdktf.numberToHclTerraform(this._cacheAllRecords),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cache_dnssec_records: {
        value: cdktf.numberToHclTerraform(this._cacheDnssecRecords),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_ipv4: {
        value: cdktf.stringToHclTerraform(this._clientIpv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_ipv6: {
        value: cdktf.stringToHclTerraform(this._clientIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_cache_name: {
        value: cdktf.stringToHclTerraform(this._dnsCacheName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_notify_enable_ipv4: {
        value: cdktf.numberToHclTerraform(this._dnsNotifyEnableIpv4),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_notify_enable_ipv6: {
        value: cdktf.numberToHclTerraform(this._dnsNotifyEnableIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      force: {
        value: cdktf.numberToHclTerraform(this._force),
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
      manual_refresh: {
        value: cdktf.stringToHclTerraform(this._manualRefresh),
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
      oversize_answer_response: {
        value: cdktf.stringToHclTerraform(this._oversizeAnswerResponse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      refresh_interval_hours: {
        value: cdktf.numberToHclTerraform(this._refreshIntervalHours),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resolve_cname_record: {
        value: cdktf.numberToHclTerraform(this._resolveCnameRecord),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      respond_with_authority: {
        value: cdktf.numberToHclTerraform(this._respondWithAuthority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_ipv4: {
        value: cdktf.stringToHclTerraform(this._serverIpv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_ipv6: {
        value: cdktf.stringToHclTerraform(this._serverIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_v4_port: {
        value: cdktf.numberToHclTerraform(this._serverV4Port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_v6_port: {
        value: cdktf.numberToHclTerraform(this._serverV6Port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ttl_override: {
        value: cdktf.numberToHclTerraform(this._ttlOverride),
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
      packet_capturing: {
        value: ddosDnsCacheDomainGroupDomainListPolicyPacketCapturingToHclTerraform(this._packetCapturing.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDnsCacheDomainGroupDomainListPolicyPacketCapturingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
