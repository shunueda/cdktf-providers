// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_sharded_domain_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosDnsCacheShardedDomainGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Dns_cache_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_sharded_domain_group#dns_cache_name DdosDnsCacheShardedDomainGroup#dns_cache_name}
  */
  readonly dnsCacheName: string;
  /**
  * DDOS encap template to sepcify the tunnel endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_sharded_domain_group#encap_template DdosDnsCacheShardedDomainGroup#encap_template}
  */
  readonly encapTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_sharded_domain_group#id DdosDnsCacheShardedDomainGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'forward': Forward query to server (default); 'tunnel-encap': Encapsulate the query and send on a tunnel;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_sharded_domain_group#match_action DdosDnsCacheShardedDomainGroup#match_action}
  */
  readonly matchAction?: string;
  /**
  * DNS sharded domain group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_sharded_domain_group#name DdosDnsCacheShardedDomainGroup#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_sharded_domain_group#user_tag DdosDnsCacheShardedDomainGroup#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_sharded_domain_group#uuid DdosDnsCacheShardedDomainGroup#uuid}
  */
  readonly uuid?: string;
  /**
  * sharded_domain_list_policy_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_sharded_domain_group#sharded_domain_list_policy_list DdosDnsCacheShardedDomainGroup#sharded_domain_list_policy_list}
  */
  readonly shardedDomainListPolicyList?: DdosDnsCacheShardedDomainGroupShardedDomainListPolicyListStruct[] | cdktf.IResolvable;
}
export interface DdosDnsCacheShardedDomainGroupShardedDomainListPolicyListPacketCapturingRootZoneListStruct {
  /**
  * Capture-config name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_sharded_domain_group#capture_config DdosDnsCacheShardedDomainGroup#capture_config}
  */
  readonly captureConfig?: string;
  /**
  * 'regular': Capture packet anyway; 'capture-on-failure': Capture packet if last XFR was failed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_sharded_domain_group#capture_mode DdosDnsCacheShardedDomainGroup#capture_mode}
  */
  readonly captureMode?: string;
  /**
  * Specify root zone to be captured
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_sharded_domain_group#root_zone DdosDnsCacheShardedDomainGroup#root_zone}
  */
  readonly rootZone?: string;
}

export function ddosDnsCacheShardedDomainGroupShardedDomainListPolicyListPacketCapturingRootZoneListStructToTerraform(struct?: DdosDnsCacheShardedDomainGroupShardedDomainListPolicyListPacketCapturingRootZoneListStruct | cdktf.IResolvable): any {
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


export function ddosDnsCacheShardedDomainGroupShardedDomainListPolicyListPacketCapturingRootZoneListStructToHclTerraform(struct?: DdosDnsCacheShardedDomainGroupShardedDomainListPolicyListPacketCapturingRootZoneListStruct | cdktf.IResolvable): any {
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

export class DdosDnsCacheShardedDomainGroupShardedDomainListPolicyListPacketCapturingRootZoneListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDnsCacheShardedDomainGroupShardedDomainListPolicyListPacketCapturingRootZoneListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DdosDnsCacheShardedDomainGroupShardedDomainListPolicyListPacketCapturingRootZoneListStruct | cdktf.IResolvable | undefined) {
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

export class DdosDnsCacheShardedDomainGroupShardedDomainListPolicyListPacketCapturingRootZoneListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDnsCacheShardedDomainGroupShardedDomainListPolicyListPacketCapturingRootZoneListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDnsCacheShardedDomainGroupShardedDomainListPolicyListPacketCapturingRootZoneListStructOutputReference {
    return new DdosDnsCacheShardedDomainGroupShardedDomainListPolicyListPacketCapturingRootZoneListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDnsCacheShardedDomainGroupShardedDomainListPolicyListPacketCapturing {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_sharded_domain_group#uuid DdosDnsCacheShardedDomainGroup#uuid}
  */
  readonly uuid?: string;
  /**
  * root_zone_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_sharded_domain_group#root_zone_list DdosDnsCacheShardedDomainGroup#root_zone_list}
  */
  readonly rootZoneList?: DdosDnsCacheShardedDomainGroupShardedDomainListPolicyListPacketCapturingRootZoneListStruct[] | cdktf.IResolvable;
}

export function ddosDnsCacheShardedDomainGroupShardedDomainListPolicyListPacketCapturingToTerraform(struct?: DdosDnsCacheShardedDomainGroupShardedDomainListPolicyListPacketCapturingOutputReference | DdosDnsCacheShardedDomainGroupShardedDomainListPolicyListPacketCapturing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    root_zone_list: cdktf.listMapper(ddosDnsCacheShardedDomainGroupShardedDomainListPolicyListPacketCapturingRootZoneListStructToTerraform, true)(struct!.rootZoneList),
  }
}


export function ddosDnsCacheShardedDomainGroupShardedDomainListPolicyListPacketCapturingToHclTerraform(struct?: DdosDnsCacheShardedDomainGroupShardedDomainListPolicyListPacketCapturingOutputReference | DdosDnsCacheShardedDomainGroupShardedDomainListPolicyListPacketCapturing): any {
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
      value: cdktf.listMapperHcl(ddosDnsCacheShardedDomainGroupShardedDomainListPolicyListPacketCapturingRootZoneListStructToHclTerraform, true)(struct!.rootZoneList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDnsCacheShardedDomainGroupShardedDomainListPolicyListPacketCapturingRootZoneListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDnsCacheShardedDomainGroupShardedDomainListPolicyListPacketCapturingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDnsCacheShardedDomainGroupShardedDomainListPolicyListPacketCapturing | undefined {
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

  public set internalValue(value: DdosDnsCacheShardedDomainGroupShardedDomainListPolicyListPacketCapturing | undefined) {
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
  private _rootZoneList = new DdosDnsCacheShardedDomainGroupShardedDomainListPolicyListPacketCapturingRootZoneListStructList(this, "root_zone_list", false);
  public get rootZoneList() {
    return this._rootZoneList;
  }
  public putRootZoneList(value: DdosDnsCacheShardedDomainGroupShardedDomainListPolicyListPacketCapturingRootZoneListStruct[] | cdktf.IResolvable) {
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
export interface DdosDnsCacheShardedDomainGroupShardedDomainListPolicyListStruct {
  /**
  * Client ipv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_sharded_domain_group#client_ipv4 DdosDnsCacheShardedDomainGroup#client_ipv4}
  */
  readonly clientIpv4?: string;
  /**
  * Client ipv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_sharded_domain_group#client_ipv6 DdosDnsCacheShardedDomainGroup#client_ipv6}
  */
  readonly clientIpv6?: string;
  /**
  * DNS notify enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_sharded_domain_group#dns_notify_enable_ipv4 DdosDnsCacheShardedDomainGroup#dns_notify_enable_ipv4}
  */
  readonly dnsNotifyEnableIpv4?: number;
  /**
  * DNS notify enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_sharded_domain_group#dns_notify_enable_ipv6 DdosDnsCacheShardedDomainGroup#dns_notify_enable_ipv6}
  */
  readonly dnsNotifyEnableIpv6?: number;
  /**
  * Force update even the serial is the same
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_sharded_domain_group#force DdosDnsCacheShardedDomainGroup#force}
  */
  readonly force?: number;
  /**
  * Manually refresh the particular zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_sharded_domain_group#manual_refresh DdosDnsCacheShardedDomainGroup#manual_refresh}
  */
  readonly manualRefresh?: string;
  /**
  * DNS sharded domain list policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_sharded_domain_group#name DdosDnsCacheShardedDomainGroup#name}
  */
  readonly name: string;
  /**
  * Zone transfer refresh rate in hours (Default 4). 0 means no refresh
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_sharded_domain_group#refresh_interval_hours DdosDnsCacheShardedDomainGroup#refresh_interval_hours}
  */
  readonly refreshIntervalHours?: number;
  /**
  * Master ipv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_sharded_domain_group#server_ipv4 DdosDnsCacheShardedDomainGroup#server_ipv4}
  */
  readonly serverIpv4?: string;
  /**
  * Master ipv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_sharded_domain_group#server_ipv6 DdosDnsCacheShardedDomainGroup#server_ipv6}
  */
  readonly serverIpv6?: string;
  /**
  * Port number (default 53)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_sharded_domain_group#server_v4_port DdosDnsCacheShardedDomainGroup#server_v4_port}
  */
  readonly serverV4Port?: number;
  /**
  * Port number (default 53)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_sharded_domain_group#server_v6_port DdosDnsCacheShardedDomainGroup#server_v6_port}
  */
  readonly serverV6Port?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_sharded_domain_group#user_tag DdosDnsCacheShardedDomainGroup#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_sharded_domain_group#uuid DdosDnsCacheShardedDomainGroup#uuid}
  */
  readonly uuid?: string;
  /**
  * packet_capturing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_sharded_domain_group#packet_capturing DdosDnsCacheShardedDomainGroup#packet_capturing}
  */
  readonly packetCapturing?: DdosDnsCacheShardedDomainGroupShardedDomainListPolicyListPacketCapturing;
}

export function ddosDnsCacheShardedDomainGroupShardedDomainListPolicyListStructToTerraform(struct?: DdosDnsCacheShardedDomainGroupShardedDomainListPolicyListStruct | cdktf.IResolvable): any {
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
    packet_capturing: ddosDnsCacheShardedDomainGroupShardedDomainListPolicyListPacketCapturingToTerraform(struct!.packetCapturing),
  }
}


export function ddosDnsCacheShardedDomainGroupShardedDomainListPolicyListStructToHclTerraform(struct?: DdosDnsCacheShardedDomainGroupShardedDomainListPolicyListStruct | cdktf.IResolvable): any {
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
      value: ddosDnsCacheShardedDomainGroupShardedDomainListPolicyListPacketCapturingToHclTerraform(struct!.packetCapturing),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDnsCacheShardedDomainGroupShardedDomainListPolicyListPacketCapturingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDnsCacheShardedDomainGroupShardedDomainListPolicyListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDnsCacheShardedDomainGroupShardedDomainListPolicyListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DdosDnsCacheShardedDomainGroupShardedDomainListPolicyListStruct | cdktf.IResolvable | undefined) {
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
  private _packetCapturing = new DdosDnsCacheShardedDomainGroupShardedDomainListPolicyListPacketCapturingOutputReference(this, "packet_capturing");
  public get packetCapturing() {
    return this._packetCapturing;
  }
  public putPacketCapturing(value: DdosDnsCacheShardedDomainGroupShardedDomainListPolicyListPacketCapturing) {
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

export class DdosDnsCacheShardedDomainGroupShardedDomainListPolicyListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDnsCacheShardedDomainGroupShardedDomainListPolicyListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDnsCacheShardedDomainGroupShardedDomainListPolicyListStructOutputReference {
    return new DdosDnsCacheShardedDomainGroupShardedDomainListPolicyListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_sharded_domain_group thunder_ddos_dns_cache_sharded_domain_group}
*/
export class DdosDnsCacheShardedDomainGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dns_cache_sharded_domain_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosDnsCacheShardedDomainGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosDnsCacheShardedDomainGroup to import
  * @param importFromId The id of the existing DdosDnsCacheShardedDomainGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_sharded_domain_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDnsCacheShardedDomainGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dns_cache_sharded_domain_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_sharded_domain_group thunder_ddos_dns_cache_sharded_domain_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosDnsCacheShardedDomainGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DdosDnsCacheShardedDomainGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dns_cache_sharded_domain_group',
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
    this._dnsCacheName = config.dnsCacheName;
    this._encapTemplate = config.encapTemplate;
    this._id = config.id;
    this._matchAction = config.matchAction;
    this._name = config.name;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._shardedDomainListPolicyList.internalValue = config.shardedDomainListPolicyList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  private _shardedDomainListPolicyList = new DdosDnsCacheShardedDomainGroupShardedDomainListPolicyListStructList(this, "sharded_domain_list_policy_list", false);
  public get shardedDomainListPolicyList() {
    return this._shardedDomainListPolicyList;
  }
  public putShardedDomainListPolicyList(value: DdosDnsCacheShardedDomainGroupShardedDomainListPolicyListStruct[] | cdktf.IResolvable) {
    this._shardedDomainListPolicyList.internalValue = value;
  }
  public resetShardedDomainListPolicyList() {
    this._shardedDomainListPolicyList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardedDomainListPolicyListInput() {
    return this._shardedDomainListPolicyList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dns_cache_name: cdktf.stringToTerraform(this._dnsCacheName),
      encap_template: cdktf.stringToTerraform(this._encapTemplate),
      id: cdktf.stringToTerraform(this._id),
      match_action: cdktf.stringToTerraform(this._matchAction),
      name: cdktf.stringToTerraform(this._name),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      sharded_domain_list_policy_list: cdktf.listMapper(ddosDnsCacheShardedDomainGroupShardedDomainListPolicyListStructToTerraform, true)(this._shardedDomainListPolicyList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dns_cache_name: {
        value: cdktf.stringToHclTerraform(this._dnsCacheName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encap_template: {
        value: cdktf.stringToHclTerraform(this._encapTemplate),
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
      match_action: {
        value: cdktf.stringToHclTerraform(this._matchAction),
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
      sharded_domain_list_policy_list: {
        value: cdktf.listMapperHcl(ddosDnsCacheShardedDomainGroupShardedDomainListPolicyListStructToHclTerraform, true)(this._shardedDomainListPolicyList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDnsCacheShardedDomainGroupShardedDomainListPolicyListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
