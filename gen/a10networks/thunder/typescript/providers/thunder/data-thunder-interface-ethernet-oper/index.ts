// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderInterfaceEthernetOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#id DataThunderInterfaceEthernetOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ethernet interface number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#ifnum DataThunderInterfaceEthernetOper#ifnum}
  */
  readonly ifnum: number;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#oper DataThunderInterfaceEthernetOper#oper}
  */
  readonly oper?: DataThunderInterfaceEthernetOperOper;
}
export interface DataThunderInterfaceEthernetOperOperIpv4ListStruct {
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#addr DataThunderInterfaceEthernetOper#addr}
  */
  readonly addr?: string;
  /**
  * IP subnet mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#mask DataThunderInterfaceEthernetOper#mask}
  */
  readonly mask?: string;
}

export function dataThunderInterfaceEthernetOperOperIpv4ListStructToTerraform(struct?: DataThunderInterfaceEthernetOperOperIpv4ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    mask: cdktf.stringToTerraform(struct!.mask),
  }
}


export function dataThunderInterfaceEthernetOperOperIpv4ListStructToHclTerraform(struct?: DataThunderInterfaceEthernetOperOperIpv4ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderInterfaceEthernetOperOperIpv4ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderInterfaceEthernetOperOperIpv4ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderInterfaceEthernetOperOperIpv4ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._mask = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._mask = value.mask;
    }
  }

  // addr - computed: false, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // mask - computed: false, optional: true, required: false
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  public resetMask() {
    this._mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }
}

export class DataThunderInterfaceEthernetOperOperIpv4ListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderInterfaceEthernetOperOperIpv4ListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderInterfaceEthernetOperOperIpv4ListStructOutputReference {
    return new DataThunderInterfaceEthernetOperOperIpv4ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderInterfaceEthernetOperOperIpv6ListStruct {
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#addr DataThunderInterfaceEthernetOper#addr}
  */
  readonly addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#is_anycast DataThunderInterfaceEthernetOper#is_anycast}
  */
  readonly isAnycast?: number;
  /**
  * IP subnet mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#prefix DataThunderInterfaceEthernetOper#prefix}
  */
  readonly prefix?: string;
}

export function dataThunderInterfaceEthernetOperOperIpv6ListStructToTerraform(struct?: DataThunderInterfaceEthernetOperOperIpv6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    is_anycast: cdktf.numberToTerraform(struct!.isAnycast),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function dataThunderInterfaceEthernetOperOperIpv6ListStructToHclTerraform(struct?: DataThunderInterfaceEthernetOperOperIpv6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_anycast: {
      value: cdktf.numberToHclTerraform(struct!.isAnycast),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderInterfaceEthernetOperOperIpv6ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderInterfaceEthernetOperOperIpv6ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._isAnycast !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAnycast = this._isAnycast;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderInterfaceEthernetOperOperIpv6ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._isAnycast = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._isAnycast = value.isAnycast;
      this._prefix = value.prefix;
    }
  }

  // addr - computed: false, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // is_anycast - computed: false, optional: true, required: false
  private _isAnycast?: number; 
  public get isAnycast() {
    return this.getNumberAttribute('is_anycast');
  }
  public set isAnycast(value: number) {
    this._isAnycast = value;
  }
  public resetIsAnycast() {
    this._isAnycast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAnycastInput() {
    return this._isAnycast;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}

export class DataThunderInterfaceEthernetOperOperIpv6ListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderInterfaceEthernetOperOperIpv6ListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderInterfaceEthernetOperOperIpv6ListStructOutputReference {
    return new DataThunderInterfaceEthernetOperOperIpv6ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderInterfaceEthernetOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#actual_duplexity DataThunderInterfaceEthernetOper#actual_duplexity}
  */
  readonly actualDuplexity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#actual_speed DataThunderInterfaceEthernetOper#actual_speed}
  */
  readonly actualSpeed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#config_duplexity DataThunderInterfaceEthernetOper#config_duplexity}
  */
  readonly configDuplexity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#config_speed DataThunderInterfaceEthernetOper#config_speed}
  */
  readonly configSpeed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#current_vnp_id DataThunderInterfaceEthernetOper#current_vnp_id}
  */
  readonly currentVnpId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#icmp6_rate_limit_current DataThunderInterfaceEthernetOper#icmp6_rate_limit_current}
  */
  readonly icmp6RateLimitCurrent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#icmp6_rate_over_limit_drop DataThunderInterfaceEthernetOper#icmp6_rate_over_limit_drop}
  */
  readonly icmp6RateOverLimitDrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#icmp_rate_limit_current DataThunderInterfaceEthernetOper#icmp_rate_limit_current}
  */
  readonly icmpRateLimitCurrent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#icmp_rate_over_limit_drop DataThunderInterfaceEthernetOper#icmp_rate_over_limit_drop}
  */
  readonly icmpRateOverLimitDrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#igmp_query_sent DataThunderInterfaceEthernetOper#igmp_query_sent}
  */
  readonly igmpQuerySent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#incoming_pkts_mirrored DataThunderInterfaceEthernetOper#incoming_pkts_mirrored}
  */
  readonly incomingPktsMirrored?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#incoming_pkts_monitored DataThunderInterfaceEthernetOper#incoming_pkts_monitored}
  */
  readonly incomingPktsMonitored?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#input_utilization DataThunderInterfaceEthernetOper#input_utilization}
  */
  readonly inputUtilization?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#ip_unnumbered_enabled DataThunderInterfaceEthernetOper#ip_unnumbered_enabled}
  */
  readonly ipUnnumberedEnabled?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#ip_unnumbered_mac_learned DataThunderInterfaceEthernetOper#ip_unnumbered_mac_learned}
  */
  readonly ipUnnumberedMacLearned?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#ip_unnumbered_oper DataThunderInterfaceEthernetOper#ip_unnumbered_oper}
  */
  readonly ipUnnumberedOper?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#ip_unnumbered_peer_lla DataThunderInterfaceEthernetOper#ip_unnumbered_peer_lla}
  */
  readonly ipUnnumberedPeerLla?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#ipv4_addr_count DataThunderInterfaceEthernetOper#ipv4_addr_count}
  */
  readonly ipv4AddrCount?: number;
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#ipv4_address DataThunderInterfaceEthernetOper#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * IP subnet mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#ipv4_netmask DataThunderInterfaceEthernetOper#ipv4_netmask}
  */
  readonly ipv4Netmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#ipv6_addr_count DataThunderInterfaceEthernetOper#ipv6_addr_count}
  */
  readonly ipv6AddrCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#ipv6_link_local DataThunderInterfaceEthernetOper#ipv6_link_local}
  */
  readonly ipv6LinkLocal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#ipv6_link_local_prefix DataThunderInterfaceEthernetOper#ipv6_link_local_prefix}
  */
  readonly ipv6LinkLocalPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#ipv6_link_local_scope DataThunderInterfaceEthernetOper#ipv6_link_local_scope}
  */
  readonly ipv6LinkLocalScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#ipv6_link_local_type DataThunderInterfaceEthernetOper#ipv6_link_local_type}
  */
  readonly ipv6LinkLocalType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#is_blocked DataThunderInterfaceEthernetOper#is_blocked}
  */
  readonly isBlocked?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#is_device_transparent DataThunderInterfaceEthernetOper#is_device_transparent}
  */
  readonly isDeviceTransparent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#is_lead_member DataThunderInterfaceEthernetOper#is_lead_member}
  */
  readonly isLeadMember?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#is_pristine DataThunderInterfaceEthernetOper#is_pristine}
  */
  readonly isPristine?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#is_tagged DataThunderInterfaceEthernetOper#is_tagged}
  */
  readonly isTagged?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#last_count_clear_at DataThunderInterfaceEthernetOper#last_count_clear_at}
  */
  readonly lastCountClearAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#last_down_event_at DataThunderInterfaceEthernetOper#last_down_event_at}
  */
  readonly lastDownEventAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#last_up_event_at DataThunderInterfaceEthernetOper#last_up_event_at}
  */
  readonly lastUpEventAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#line_protocol DataThunderInterfaceEthernetOper#line_protocol}
  */
  readonly lineProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#link_type DataThunderInterfaceEthernetOper#link_type}
  */
  readonly linkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#mac DataThunderInterfaceEthernetOper#mac}
  */
  readonly mac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#media_type DataThunderInterfaceEthernetOper#media_type}
  */
  readonly mediaType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#outgoing_pkts_mirrored DataThunderInterfaceEthernetOper#outgoing_pkts_mirrored}
  */
  readonly outgoingPktsMirrored?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#outgoing_pkts_monitored DataThunderInterfaceEthernetOper#outgoing_pkts_monitored}
  */
  readonly outgoingPktsMonitored?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#output_utilization DataThunderInterfaceEthernetOper#output_utilization}
  */
  readonly outputUtilization?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#port_vnp_id DataThunderInterfaceEthernetOper#port_vnp_id}
  */
  readonly portVnpId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#rate_byte_rcvd DataThunderInterfaceEthernetOper#rate_byte_rcvd}
  */
  readonly rateByteRcvd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#rate_byte_sent DataThunderInterfaceEthernetOper#rate_byte_sent}
  */
  readonly rateByteSent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#rate_pkt_rcvd DataThunderInterfaceEthernetOper#rate_pkt_rcvd}
  */
  readonly ratePktRcvd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#rate_pkt_sent DataThunderInterfaceEthernetOper#rate_pkt_sent}
  */
  readonly ratePktSent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#span_mode DataThunderInterfaceEthernetOper#span_mode}
  */
  readonly spanMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#span_port_state DataThunderInterfaceEthernetOper#span_port_state}
  */
  readonly spanPortState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#state DataThunderInterfaceEthernetOper#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#tagged_vlan_list DataThunderInterfaceEthernetOper#tagged_vlan_list}
  */
  readonly taggedVlanList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#vlan_id DataThunderInterfaceEthernetOper#vlan_id}
  */
  readonly vlanId?: number;
  /**
  * ipv4_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#ipv4_list DataThunderInterfaceEthernetOper#ipv4_list}
  */
  readonly ipv4List?: DataThunderInterfaceEthernetOperOperIpv4ListStruct[] | cdktf.IResolvable;
  /**
  * ipv6_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#ipv6_list DataThunderInterfaceEthernetOper#ipv6_list}
  */
  readonly ipv6List?: DataThunderInterfaceEthernetOperOperIpv6ListStruct[] | cdktf.IResolvable;
}

export function dataThunderInterfaceEthernetOperOperToTerraform(struct?: DataThunderInterfaceEthernetOperOperOutputReference | DataThunderInterfaceEthernetOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actual_duplexity: cdktf.stringToTerraform(struct!.actualDuplexity),
    actual_speed: cdktf.stringToTerraform(struct!.actualSpeed),
    config_duplexity: cdktf.stringToTerraform(struct!.configDuplexity),
    config_speed: cdktf.stringToTerraform(struct!.configSpeed),
    current_vnp_id: cdktf.numberToTerraform(struct!.currentVnpId),
    icmp6_rate_limit_current: cdktf.numberToTerraform(struct!.icmp6RateLimitCurrent),
    icmp6_rate_over_limit_drop: cdktf.numberToTerraform(struct!.icmp6RateOverLimitDrop),
    icmp_rate_limit_current: cdktf.numberToTerraform(struct!.icmpRateLimitCurrent),
    icmp_rate_over_limit_drop: cdktf.numberToTerraform(struct!.icmpRateOverLimitDrop),
    igmp_query_sent: cdktf.numberToTerraform(struct!.igmpQuerySent),
    incoming_pkts_mirrored: cdktf.numberToTerraform(struct!.incomingPktsMirrored),
    incoming_pkts_monitored: cdktf.numberToTerraform(struct!.incomingPktsMonitored),
    input_utilization: cdktf.numberToTerraform(struct!.inputUtilization),
    ip_unnumbered_enabled: cdktf.numberToTerraform(struct!.ipUnnumberedEnabled),
    ip_unnumbered_mac_learned: cdktf.numberToTerraform(struct!.ipUnnumberedMacLearned),
    ip_unnumbered_oper: cdktf.numberToTerraform(struct!.ipUnnumberedOper),
    ip_unnumbered_peer_lla: cdktf.stringToTerraform(struct!.ipUnnumberedPeerLla),
    ipv4_addr_count: cdktf.numberToTerraform(struct!.ipv4AddrCount),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv4_netmask: cdktf.stringToTerraform(struct!.ipv4Netmask),
    ipv6_addr_count: cdktf.numberToTerraform(struct!.ipv6AddrCount),
    ipv6_link_local: cdktf.stringToTerraform(struct!.ipv6LinkLocal),
    ipv6_link_local_prefix: cdktf.stringToTerraform(struct!.ipv6LinkLocalPrefix),
    ipv6_link_local_scope: cdktf.stringToTerraform(struct!.ipv6LinkLocalScope),
    ipv6_link_local_type: cdktf.stringToTerraform(struct!.ipv6LinkLocalType),
    is_blocked: cdktf.numberToTerraform(struct!.isBlocked),
    is_device_transparent: cdktf.numberToTerraform(struct!.isDeviceTransparent),
    is_lead_member: cdktf.numberToTerraform(struct!.isLeadMember),
    is_pristine: cdktf.numberToTerraform(struct!.isPristine),
    is_tagged: cdktf.numberToTerraform(struct!.isTagged),
    last_count_clear_at: cdktf.stringToTerraform(struct!.lastCountClearAt),
    last_down_event_at: cdktf.stringToTerraform(struct!.lastDownEventAt),
    last_up_event_at: cdktf.stringToTerraform(struct!.lastUpEventAt),
    line_protocol: cdktf.stringToTerraform(struct!.lineProtocol),
    link_type: cdktf.stringToTerraform(struct!.linkType),
    mac: cdktf.stringToTerraform(struct!.mac),
    media_type: cdktf.stringToTerraform(struct!.mediaType),
    outgoing_pkts_mirrored: cdktf.numberToTerraform(struct!.outgoingPktsMirrored),
    outgoing_pkts_monitored: cdktf.numberToTerraform(struct!.outgoingPktsMonitored),
    output_utilization: cdktf.numberToTerraform(struct!.outputUtilization),
    port_vnp_id: cdktf.numberToTerraform(struct!.portVnpId),
    rate_byte_rcvd: cdktf.numberToTerraform(struct!.rateByteRcvd),
    rate_byte_sent: cdktf.numberToTerraform(struct!.rateByteSent),
    rate_pkt_rcvd: cdktf.numberToTerraform(struct!.ratePktRcvd),
    rate_pkt_sent: cdktf.numberToTerraform(struct!.ratePktSent),
    span_mode: cdktf.stringToTerraform(struct!.spanMode),
    span_port_state: cdktf.stringToTerraform(struct!.spanPortState),
    state: cdktf.stringToTerraform(struct!.state),
    tagged_vlan_list: cdktf.stringToTerraform(struct!.taggedVlanList),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
    ipv4_list: cdktf.listMapper(dataThunderInterfaceEthernetOperOperIpv4ListStructToTerraform, true)(struct!.ipv4List),
    ipv6_list: cdktf.listMapper(dataThunderInterfaceEthernetOperOperIpv6ListStructToTerraform, true)(struct!.ipv6List),
  }
}


export function dataThunderInterfaceEthernetOperOperToHclTerraform(struct?: DataThunderInterfaceEthernetOperOperOutputReference | DataThunderInterfaceEthernetOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actual_duplexity: {
      value: cdktf.stringToHclTerraform(struct!.actualDuplexity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    actual_speed: {
      value: cdktf.stringToHclTerraform(struct!.actualSpeed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_duplexity: {
      value: cdktf.stringToHclTerraform(struct!.configDuplexity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_speed: {
      value: cdktf.stringToHclTerraform(struct!.configSpeed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_vnp_id: {
      value: cdktf.numberToHclTerraform(struct!.currentVnpId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp6_rate_limit_current: {
      value: cdktf.numberToHclTerraform(struct!.icmp6RateLimitCurrent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp6_rate_over_limit_drop: {
      value: cdktf.numberToHclTerraform(struct!.icmp6RateOverLimitDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_rate_limit_current: {
      value: cdktf.numberToHclTerraform(struct!.icmpRateLimitCurrent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_rate_over_limit_drop: {
      value: cdktf.numberToHclTerraform(struct!.icmpRateOverLimitDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    igmp_query_sent: {
      value: cdktf.numberToHclTerraform(struct!.igmpQuerySent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    incoming_pkts_mirrored: {
      value: cdktf.numberToHclTerraform(struct!.incomingPktsMirrored),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    incoming_pkts_monitored: {
      value: cdktf.numberToHclTerraform(struct!.incomingPktsMonitored),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    input_utilization: {
      value: cdktf.numberToHclTerraform(struct!.inputUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_unnumbered_enabled: {
      value: cdktf.numberToHclTerraform(struct!.ipUnnumberedEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_unnumbered_mac_learned: {
      value: cdktf.numberToHclTerraform(struct!.ipUnnumberedMacLearned),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_unnumbered_oper: {
      value: cdktf.numberToHclTerraform(struct!.ipUnnumberedOper),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_unnumbered_peer_lla: {
      value: cdktf.stringToHclTerraform(struct!.ipUnnumberedPeerLla),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_addr_count: {
      value: cdktf.numberToHclTerraform(struct!.ipv4AddrCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_netmask: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Netmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_addr_count: {
      value: cdktf.numberToHclTerraform(struct!.ipv6AddrCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_link_local: {
      value: cdktf.stringToHclTerraform(struct!.ipv6LinkLocal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_link_local_prefix: {
      value: cdktf.stringToHclTerraform(struct!.ipv6LinkLocalPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_link_local_scope: {
      value: cdktf.stringToHclTerraform(struct!.ipv6LinkLocalScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_link_local_type: {
      value: cdktf.stringToHclTerraform(struct!.ipv6LinkLocalType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_blocked: {
      value: cdktf.numberToHclTerraform(struct!.isBlocked),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_device_transparent: {
      value: cdktf.numberToHclTerraform(struct!.isDeviceTransparent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_lead_member: {
      value: cdktf.numberToHclTerraform(struct!.isLeadMember),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_pristine: {
      value: cdktf.numberToHclTerraform(struct!.isPristine),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_tagged: {
      value: cdktf.numberToHclTerraform(struct!.isTagged),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    last_count_clear_at: {
      value: cdktf.stringToHclTerraform(struct!.lastCountClearAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_down_event_at: {
      value: cdktf.stringToHclTerraform(struct!.lastDownEventAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_up_event_at: {
      value: cdktf.stringToHclTerraform(struct!.lastUpEventAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    line_protocol: {
      value: cdktf.stringToHclTerraform(struct!.lineProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    link_type: {
      value: cdktf.stringToHclTerraform(struct!.linkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac: {
      value: cdktf.stringToHclTerraform(struct!.mac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    media_type: {
      value: cdktf.stringToHclTerraform(struct!.mediaType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outgoing_pkts_mirrored: {
      value: cdktf.numberToHclTerraform(struct!.outgoingPktsMirrored),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outgoing_pkts_monitored: {
      value: cdktf.numberToHclTerraform(struct!.outgoingPktsMonitored),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    output_utilization: {
      value: cdktf.numberToHclTerraform(struct!.outputUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_vnp_id: {
      value: cdktf.numberToHclTerraform(struct!.portVnpId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_byte_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.rateByteRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_byte_sent: {
      value: cdktf.numberToHclTerraform(struct!.rateByteSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_pkt_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.ratePktRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_pkt_sent: {
      value: cdktf.numberToHclTerraform(struct!.ratePktSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    span_mode: {
      value: cdktf.stringToHclTerraform(struct!.spanMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    span_port_state: {
      value: cdktf.stringToHclTerraform(struct!.spanPortState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tagged_vlan_list: {
      value: cdktf.stringToHclTerraform(struct!.taggedVlanList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_list: {
      value: cdktf.listMapperHcl(dataThunderInterfaceEthernetOperOperIpv4ListStructToHclTerraform, true)(struct!.ipv4List),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderInterfaceEthernetOperOperIpv4ListStructList",
    },
    ipv6_list: {
      value: cdktf.listMapperHcl(dataThunderInterfaceEthernetOperOperIpv6ListStructToHclTerraform, true)(struct!.ipv6List),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderInterfaceEthernetOperOperIpv6ListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderInterfaceEthernetOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderInterfaceEthernetOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actualDuplexity !== undefined) {
      hasAnyValues = true;
      internalValueResult.actualDuplexity = this._actualDuplexity;
    }
    if (this._actualSpeed !== undefined) {
      hasAnyValues = true;
      internalValueResult.actualSpeed = this._actualSpeed;
    }
    if (this._configDuplexity !== undefined) {
      hasAnyValues = true;
      internalValueResult.configDuplexity = this._configDuplexity;
    }
    if (this._configSpeed !== undefined) {
      hasAnyValues = true;
      internalValueResult.configSpeed = this._configSpeed;
    }
    if (this._currentVnpId !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentVnpId = this._currentVnpId;
    }
    if (this._icmp6RateLimitCurrent !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmp6RateLimitCurrent = this._icmp6RateLimitCurrent;
    }
    if (this._icmp6RateOverLimitDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmp6RateOverLimitDrop = this._icmp6RateOverLimitDrop;
    }
    if (this._icmpRateLimitCurrent !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpRateLimitCurrent = this._icmpRateLimitCurrent;
    }
    if (this._icmpRateOverLimitDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpRateOverLimitDrop = this._icmpRateOverLimitDrop;
    }
    if (this._igmpQuerySent !== undefined) {
      hasAnyValues = true;
      internalValueResult.igmpQuerySent = this._igmpQuerySent;
    }
    if (this._incomingPktsMirrored !== undefined) {
      hasAnyValues = true;
      internalValueResult.incomingPktsMirrored = this._incomingPktsMirrored;
    }
    if (this._incomingPktsMonitored !== undefined) {
      hasAnyValues = true;
      internalValueResult.incomingPktsMonitored = this._incomingPktsMonitored;
    }
    if (this._inputUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputUtilization = this._inputUtilization;
    }
    if (this._ipUnnumberedEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipUnnumberedEnabled = this._ipUnnumberedEnabled;
    }
    if (this._ipUnnumberedMacLearned !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipUnnumberedMacLearned = this._ipUnnumberedMacLearned;
    }
    if (this._ipUnnumberedOper !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipUnnumberedOper = this._ipUnnumberedOper;
    }
    if (this._ipUnnumberedPeerLla !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipUnnumberedPeerLla = this._ipUnnumberedPeerLla;
    }
    if (this._ipv4AddrCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4AddrCount = this._ipv4AddrCount;
    }
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv4Netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Netmask = this._ipv4Netmask;
    }
    if (this._ipv6AddrCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AddrCount = this._ipv6AddrCount;
    }
    if (this._ipv6LinkLocal !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6LinkLocal = this._ipv6LinkLocal;
    }
    if (this._ipv6LinkLocalPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6LinkLocalPrefix = this._ipv6LinkLocalPrefix;
    }
    if (this._ipv6LinkLocalScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6LinkLocalScope = this._ipv6LinkLocalScope;
    }
    if (this._ipv6LinkLocalType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6LinkLocalType = this._ipv6LinkLocalType;
    }
    if (this._isBlocked !== undefined) {
      hasAnyValues = true;
      internalValueResult.isBlocked = this._isBlocked;
    }
    if (this._isDeviceTransparent !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDeviceTransparent = this._isDeviceTransparent;
    }
    if (this._isLeadMember !== undefined) {
      hasAnyValues = true;
      internalValueResult.isLeadMember = this._isLeadMember;
    }
    if (this._isPristine !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPristine = this._isPristine;
    }
    if (this._isTagged !== undefined) {
      hasAnyValues = true;
      internalValueResult.isTagged = this._isTagged;
    }
    if (this._lastCountClearAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastCountClearAt = this._lastCountClearAt;
    }
    if (this._lastDownEventAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastDownEventAt = this._lastDownEventAt;
    }
    if (this._lastUpEventAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastUpEventAt = this._lastUpEventAt;
    }
    if (this._lineProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineProtocol = this._lineProtocol;
    }
    if (this._linkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkType = this._linkType;
    }
    if (this._mac !== undefined) {
      hasAnyValues = true;
      internalValueResult.mac = this._mac;
    }
    if (this._mediaType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaType = this._mediaType;
    }
    if (this._outgoingPktsMirrored !== undefined) {
      hasAnyValues = true;
      internalValueResult.outgoingPktsMirrored = this._outgoingPktsMirrored;
    }
    if (this._outgoingPktsMonitored !== undefined) {
      hasAnyValues = true;
      internalValueResult.outgoingPktsMonitored = this._outgoingPktsMonitored;
    }
    if (this._outputUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputUtilization = this._outputUtilization;
    }
    if (this._portVnpId !== undefined) {
      hasAnyValues = true;
      internalValueResult.portVnpId = this._portVnpId;
    }
    if (this._rateByteRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateByteRcvd = this._rateByteRcvd;
    }
    if (this._rateByteSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateByteSent = this._rateByteSent;
    }
    if (this._ratePktRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratePktRcvd = this._ratePktRcvd;
    }
    if (this._ratePktSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratePktSent = this._ratePktSent;
    }
    if (this._spanMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.spanMode = this._spanMode;
    }
    if (this._spanPortState !== undefined) {
      hasAnyValues = true;
      internalValueResult.spanPortState = this._spanPortState;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._taggedVlanList !== undefined) {
      hasAnyValues = true;
      internalValueResult.taggedVlanList = this._taggedVlanList;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    if (this._ipv4List?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4List = this._ipv4List?.internalValue;
    }
    if (this._ipv6List?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6List = this._ipv6List?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderInterfaceEthernetOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actualDuplexity = undefined;
      this._actualSpeed = undefined;
      this._configDuplexity = undefined;
      this._configSpeed = undefined;
      this._currentVnpId = undefined;
      this._icmp6RateLimitCurrent = undefined;
      this._icmp6RateOverLimitDrop = undefined;
      this._icmpRateLimitCurrent = undefined;
      this._icmpRateOverLimitDrop = undefined;
      this._igmpQuerySent = undefined;
      this._incomingPktsMirrored = undefined;
      this._incomingPktsMonitored = undefined;
      this._inputUtilization = undefined;
      this._ipUnnumberedEnabled = undefined;
      this._ipUnnumberedMacLearned = undefined;
      this._ipUnnumberedOper = undefined;
      this._ipUnnumberedPeerLla = undefined;
      this._ipv4AddrCount = undefined;
      this._ipv4Address = undefined;
      this._ipv4Netmask = undefined;
      this._ipv6AddrCount = undefined;
      this._ipv6LinkLocal = undefined;
      this._ipv6LinkLocalPrefix = undefined;
      this._ipv6LinkLocalScope = undefined;
      this._ipv6LinkLocalType = undefined;
      this._isBlocked = undefined;
      this._isDeviceTransparent = undefined;
      this._isLeadMember = undefined;
      this._isPristine = undefined;
      this._isTagged = undefined;
      this._lastCountClearAt = undefined;
      this._lastDownEventAt = undefined;
      this._lastUpEventAt = undefined;
      this._lineProtocol = undefined;
      this._linkType = undefined;
      this._mac = undefined;
      this._mediaType = undefined;
      this._outgoingPktsMirrored = undefined;
      this._outgoingPktsMonitored = undefined;
      this._outputUtilization = undefined;
      this._portVnpId = undefined;
      this._rateByteRcvd = undefined;
      this._rateByteSent = undefined;
      this._ratePktRcvd = undefined;
      this._ratePktSent = undefined;
      this._spanMode = undefined;
      this._spanPortState = undefined;
      this._state = undefined;
      this._taggedVlanList = undefined;
      this._vlanId = undefined;
      this._ipv4List.internalValue = undefined;
      this._ipv6List.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actualDuplexity = value.actualDuplexity;
      this._actualSpeed = value.actualSpeed;
      this._configDuplexity = value.configDuplexity;
      this._configSpeed = value.configSpeed;
      this._currentVnpId = value.currentVnpId;
      this._icmp6RateLimitCurrent = value.icmp6RateLimitCurrent;
      this._icmp6RateOverLimitDrop = value.icmp6RateOverLimitDrop;
      this._icmpRateLimitCurrent = value.icmpRateLimitCurrent;
      this._icmpRateOverLimitDrop = value.icmpRateOverLimitDrop;
      this._igmpQuerySent = value.igmpQuerySent;
      this._incomingPktsMirrored = value.incomingPktsMirrored;
      this._incomingPktsMonitored = value.incomingPktsMonitored;
      this._inputUtilization = value.inputUtilization;
      this._ipUnnumberedEnabled = value.ipUnnumberedEnabled;
      this._ipUnnumberedMacLearned = value.ipUnnumberedMacLearned;
      this._ipUnnumberedOper = value.ipUnnumberedOper;
      this._ipUnnumberedPeerLla = value.ipUnnumberedPeerLla;
      this._ipv4AddrCount = value.ipv4AddrCount;
      this._ipv4Address = value.ipv4Address;
      this._ipv4Netmask = value.ipv4Netmask;
      this._ipv6AddrCount = value.ipv6AddrCount;
      this._ipv6LinkLocal = value.ipv6LinkLocal;
      this._ipv6LinkLocalPrefix = value.ipv6LinkLocalPrefix;
      this._ipv6LinkLocalScope = value.ipv6LinkLocalScope;
      this._ipv6LinkLocalType = value.ipv6LinkLocalType;
      this._isBlocked = value.isBlocked;
      this._isDeviceTransparent = value.isDeviceTransparent;
      this._isLeadMember = value.isLeadMember;
      this._isPristine = value.isPristine;
      this._isTagged = value.isTagged;
      this._lastCountClearAt = value.lastCountClearAt;
      this._lastDownEventAt = value.lastDownEventAt;
      this._lastUpEventAt = value.lastUpEventAt;
      this._lineProtocol = value.lineProtocol;
      this._linkType = value.linkType;
      this._mac = value.mac;
      this._mediaType = value.mediaType;
      this._outgoingPktsMirrored = value.outgoingPktsMirrored;
      this._outgoingPktsMonitored = value.outgoingPktsMonitored;
      this._outputUtilization = value.outputUtilization;
      this._portVnpId = value.portVnpId;
      this._rateByteRcvd = value.rateByteRcvd;
      this._rateByteSent = value.rateByteSent;
      this._ratePktRcvd = value.ratePktRcvd;
      this._ratePktSent = value.ratePktSent;
      this._spanMode = value.spanMode;
      this._spanPortState = value.spanPortState;
      this._state = value.state;
      this._taggedVlanList = value.taggedVlanList;
      this._vlanId = value.vlanId;
      this._ipv4List.internalValue = value.ipv4List;
      this._ipv6List.internalValue = value.ipv6List;
    }
  }

  // actual_duplexity - computed: false, optional: true, required: false
  private _actualDuplexity?: string; 
  public get actualDuplexity() {
    return this.getStringAttribute('actual_duplexity');
  }
  public set actualDuplexity(value: string) {
    this._actualDuplexity = value;
  }
  public resetActualDuplexity() {
    this._actualDuplexity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actualDuplexityInput() {
    return this._actualDuplexity;
  }

  // actual_speed - computed: false, optional: true, required: false
  private _actualSpeed?: string; 
  public get actualSpeed() {
    return this.getStringAttribute('actual_speed');
  }
  public set actualSpeed(value: string) {
    this._actualSpeed = value;
  }
  public resetActualSpeed() {
    this._actualSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actualSpeedInput() {
    return this._actualSpeed;
  }

  // config_duplexity - computed: false, optional: true, required: false
  private _configDuplexity?: string; 
  public get configDuplexity() {
    return this.getStringAttribute('config_duplexity');
  }
  public set configDuplexity(value: string) {
    this._configDuplexity = value;
  }
  public resetConfigDuplexity() {
    this._configDuplexity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configDuplexityInput() {
    return this._configDuplexity;
  }

  // config_speed - computed: false, optional: true, required: false
  private _configSpeed?: string; 
  public get configSpeed() {
    return this.getStringAttribute('config_speed');
  }
  public set configSpeed(value: string) {
    this._configSpeed = value;
  }
  public resetConfigSpeed() {
    this._configSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configSpeedInput() {
    return this._configSpeed;
  }

  // current_vnp_id - computed: false, optional: true, required: false
  private _currentVnpId?: number; 
  public get currentVnpId() {
    return this.getNumberAttribute('current_vnp_id');
  }
  public set currentVnpId(value: number) {
    this._currentVnpId = value;
  }
  public resetCurrentVnpId() {
    this._currentVnpId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentVnpIdInput() {
    return this._currentVnpId;
  }

  // icmp6_rate_limit_current - computed: false, optional: true, required: false
  private _icmp6RateLimitCurrent?: number; 
  public get icmp6RateLimitCurrent() {
    return this.getNumberAttribute('icmp6_rate_limit_current');
  }
  public set icmp6RateLimitCurrent(value: number) {
    this._icmp6RateLimitCurrent = value;
  }
  public resetIcmp6RateLimitCurrent() {
    this._icmp6RateLimitCurrent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmp6RateLimitCurrentInput() {
    return this._icmp6RateLimitCurrent;
  }

  // icmp6_rate_over_limit_drop - computed: false, optional: true, required: false
  private _icmp6RateOverLimitDrop?: number; 
  public get icmp6RateOverLimitDrop() {
    return this.getNumberAttribute('icmp6_rate_over_limit_drop');
  }
  public set icmp6RateOverLimitDrop(value: number) {
    this._icmp6RateOverLimitDrop = value;
  }
  public resetIcmp6RateOverLimitDrop() {
    this._icmp6RateOverLimitDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmp6RateOverLimitDropInput() {
    return this._icmp6RateOverLimitDrop;
  }

  // icmp_rate_limit_current - computed: false, optional: true, required: false
  private _icmpRateLimitCurrent?: number; 
  public get icmpRateLimitCurrent() {
    return this.getNumberAttribute('icmp_rate_limit_current');
  }
  public set icmpRateLimitCurrent(value: number) {
    this._icmpRateLimitCurrent = value;
  }
  public resetIcmpRateLimitCurrent() {
    this._icmpRateLimitCurrent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpRateLimitCurrentInput() {
    return this._icmpRateLimitCurrent;
  }

  // icmp_rate_over_limit_drop - computed: false, optional: true, required: false
  private _icmpRateOverLimitDrop?: number; 
  public get icmpRateOverLimitDrop() {
    return this.getNumberAttribute('icmp_rate_over_limit_drop');
  }
  public set icmpRateOverLimitDrop(value: number) {
    this._icmpRateOverLimitDrop = value;
  }
  public resetIcmpRateOverLimitDrop() {
    this._icmpRateOverLimitDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpRateOverLimitDropInput() {
    return this._icmpRateOverLimitDrop;
  }

  // igmp_query_sent - computed: false, optional: true, required: false
  private _igmpQuerySent?: number; 
  public get igmpQuerySent() {
    return this.getNumberAttribute('igmp_query_sent');
  }
  public set igmpQuerySent(value: number) {
    this._igmpQuerySent = value;
  }
  public resetIgmpQuerySent() {
    this._igmpQuerySent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igmpQuerySentInput() {
    return this._igmpQuerySent;
  }

  // incoming_pkts_mirrored - computed: false, optional: true, required: false
  private _incomingPktsMirrored?: number; 
  public get incomingPktsMirrored() {
    return this.getNumberAttribute('incoming_pkts_mirrored');
  }
  public set incomingPktsMirrored(value: number) {
    this._incomingPktsMirrored = value;
  }
  public resetIncomingPktsMirrored() {
    this._incomingPktsMirrored = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incomingPktsMirroredInput() {
    return this._incomingPktsMirrored;
  }

  // incoming_pkts_monitored - computed: false, optional: true, required: false
  private _incomingPktsMonitored?: number; 
  public get incomingPktsMonitored() {
    return this.getNumberAttribute('incoming_pkts_monitored');
  }
  public set incomingPktsMonitored(value: number) {
    this._incomingPktsMonitored = value;
  }
  public resetIncomingPktsMonitored() {
    this._incomingPktsMonitored = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incomingPktsMonitoredInput() {
    return this._incomingPktsMonitored;
  }

  // input_utilization - computed: false, optional: true, required: false
  private _inputUtilization?: number; 
  public get inputUtilization() {
    return this.getNumberAttribute('input_utilization');
  }
  public set inputUtilization(value: number) {
    this._inputUtilization = value;
  }
  public resetInputUtilization() {
    this._inputUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputUtilizationInput() {
    return this._inputUtilization;
  }

  // ip_unnumbered_enabled - computed: false, optional: true, required: false
  private _ipUnnumberedEnabled?: number; 
  public get ipUnnumberedEnabled() {
    return this.getNumberAttribute('ip_unnumbered_enabled');
  }
  public set ipUnnumberedEnabled(value: number) {
    this._ipUnnumberedEnabled = value;
  }
  public resetIpUnnumberedEnabled() {
    this._ipUnnumberedEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipUnnumberedEnabledInput() {
    return this._ipUnnumberedEnabled;
  }

  // ip_unnumbered_mac_learned - computed: false, optional: true, required: false
  private _ipUnnumberedMacLearned?: number; 
  public get ipUnnumberedMacLearned() {
    return this.getNumberAttribute('ip_unnumbered_mac_learned');
  }
  public set ipUnnumberedMacLearned(value: number) {
    this._ipUnnumberedMacLearned = value;
  }
  public resetIpUnnumberedMacLearned() {
    this._ipUnnumberedMacLearned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipUnnumberedMacLearnedInput() {
    return this._ipUnnumberedMacLearned;
  }

  // ip_unnumbered_oper - computed: false, optional: true, required: false
  private _ipUnnumberedOper?: number; 
  public get ipUnnumberedOper() {
    return this.getNumberAttribute('ip_unnumbered_oper');
  }
  public set ipUnnumberedOper(value: number) {
    this._ipUnnumberedOper = value;
  }
  public resetIpUnnumberedOper() {
    this._ipUnnumberedOper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipUnnumberedOperInput() {
    return this._ipUnnumberedOper;
  }

  // ip_unnumbered_peer_lla - computed: false, optional: true, required: false
  private _ipUnnumberedPeerLla?: string; 
  public get ipUnnumberedPeerLla() {
    return this.getStringAttribute('ip_unnumbered_peer_lla');
  }
  public set ipUnnumberedPeerLla(value: string) {
    this._ipUnnumberedPeerLla = value;
  }
  public resetIpUnnumberedPeerLla() {
    this._ipUnnumberedPeerLla = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipUnnumberedPeerLlaInput() {
    return this._ipUnnumberedPeerLla;
  }

  // ipv4_addr_count - computed: false, optional: true, required: false
  private _ipv4AddrCount?: number; 
  public get ipv4AddrCount() {
    return this.getNumberAttribute('ipv4_addr_count');
  }
  public set ipv4AddrCount(value: number) {
    this._ipv4AddrCount = value;
  }
  public resetIpv4AddrCount() {
    this._ipv4AddrCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddrCountInput() {
    return this._ipv4AddrCount;
  }

  // ipv4_address - computed: false, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // ipv4_netmask - computed: false, optional: true, required: false
  private _ipv4Netmask?: string; 
  public get ipv4Netmask() {
    return this.getStringAttribute('ipv4_netmask');
  }
  public set ipv4Netmask(value: string) {
    this._ipv4Netmask = value;
  }
  public resetIpv4Netmask() {
    this._ipv4Netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NetmaskInput() {
    return this._ipv4Netmask;
  }

  // ipv6_addr_count - computed: false, optional: true, required: false
  private _ipv6AddrCount?: number; 
  public get ipv6AddrCount() {
    return this.getNumberAttribute('ipv6_addr_count');
  }
  public set ipv6AddrCount(value: number) {
    this._ipv6AddrCount = value;
  }
  public resetIpv6AddrCount() {
    this._ipv6AddrCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddrCountInput() {
    return this._ipv6AddrCount;
  }

  // ipv6_link_local - computed: false, optional: true, required: false
  private _ipv6LinkLocal?: string; 
  public get ipv6LinkLocal() {
    return this.getStringAttribute('ipv6_link_local');
  }
  public set ipv6LinkLocal(value: string) {
    this._ipv6LinkLocal = value;
  }
  public resetIpv6LinkLocal() {
    this._ipv6LinkLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6LinkLocalInput() {
    return this._ipv6LinkLocal;
  }

  // ipv6_link_local_prefix - computed: false, optional: true, required: false
  private _ipv6LinkLocalPrefix?: string; 
  public get ipv6LinkLocalPrefix() {
    return this.getStringAttribute('ipv6_link_local_prefix');
  }
  public set ipv6LinkLocalPrefix(value: string) {
    this._ipv6LinkLocalPrefix = value;
  }
  public resetIpv6LinkLocalPrefix() {
    this._ipv6LinkLocalPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6LinkLocalPrefixInput() {
    return this._ipv6LinkLocalPrefix;
  }

  // ipv6_link_local_scope - computed: false, optional: true, required: false
  private _ipv6LinkLocalScope?: string; 
  public get ipv6LinkLocalScope() {
    return this.getStringAttribute('ipv6_link_local_scope');
  }
  public set ipv6LinkLocalScope(value: string) {
    this._ipv6LinkLocalScope = value;
  }
  public resetIpv6LinkLocalScope() {
    this._ipv6LinkLocalScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6LinkLocalScopeInput() {
    return this._ipv6LinkLocalScope;
  }

  // ipv6_link_local_type - computed: false, optional: true, required: false
  private _ipv6LinkLocalType?: string; 
  public get ipv6LinkLocalType() {
    return this.getStringAttribute('ipv6_link_local_type');
  }
  public set ipv6LinkLocalType(value: string) {
    this._ipv6LinkLocalType = value;
  }
  public resetIpv6LinkLocalType() {
    this._ipv6LinkLocalType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6LinkLocalTypeInput() {
    return this._ipv6LinkLocalType;
  }

  // is_blocked - computed: false, optional: true, required: false
  private _isBlocked?: number; 
  public get isBlocked() {
    return this.getNumberAttribute('is_blocked');
  }
  public set isBlocked(value: number) {
    this._isBlocked = value;
  }
  public resetIsBlocked() {
    this._isBlocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isBlockedInput() {
    return this._isBlocked;
  }

  // is_device_transparent - computed: false, optional: true, required: false
  private _isDeviceTransparent?: number; 
  public get isDeviceTransparent() {
    return this.getNumberAttribute('is_device_transparent');
  }
  public set isDeviceTransparent(value: number) {
    this._isDeviceTransparent = value;
  }
  public resetIsDeviceTransparent() {
    this._isDeviceTransparent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDeviceTransparentInput() {
    return this._isDeviceTransparent;
  }

  // is_lead_member - computed: false, optional: true, required: false
  private _isLeadMember?: number; 
  public get isLeadMember() {
    return this.getNumberAttribute('is_lead_member');
  }
  public set isLeadMember(value: number) {
    this._isLeadMember = value;
  }
  public resetIsLeadMember() {
    this._isLeadMember = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isLeadMemberInput() {
    return this._isLeadMember;
  }

  // is_pristine - computed: false, optional: true, required: false
  private _isPristine?: number; 
  public get isPristine() {
    return this.getNumberAttribute('is_pristine');
  }
  public set isPristine(value: number) {
    this._isPristine = value;
  }
  public resetIsPristine() {
    this._isPristine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPristineInput() {
    return this._isPristine;
  }

  // is_tagged - computed: false, optional: true, required: false
  private _isTagged?: number; 
  public get isTagged() {
    return this.getNumberAttribute('is_tagged');
  }
  public set isTagged(value: number) {
    this._isTagged = value;
  }
  public resetIsTagged() {
    this._isTagged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isTaggedInput() {
    return this._isTagged;
  }

  // last_count_clear_at - computed: false, optional: true, required: false
  private _lastCountClearAt?: string; 
  public get lastCountClearAt() {
    return this.getStringAttribute('last_count_clear_at');
  }
  public set lastCountClearAt(value: string) {
    this._lastCountClearAt = value;
  }
  public resetLastCountClearAt() {
    this._lastCountClearAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastCountClearAtInput() {
    return this._lastCountClearAt;
  }

  // last_down_event_at - computed: false, optional: true, required: false
  private _lastDownEventAt?: string; 
  public get lastDownEventAt() {
    return this.getStringAttribute('last_down_event_at');
  }
  public set lastDownEventAt(value: string) {
    this._lastDownEventAt = value;
  }
  public resetLastDownEventAt() {
    this._lastDownEventAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastDownEventAtInput() {
    return this._lastDownEventAt;
  }

  // last_up_event_at - computed: false, optional: true, required: false
  private _lastUpEventAt?: string; 
  public get lastUpEventAt() {
    return this.getStringAttribute('last_up_event_at');
  }
  public set lastUpEventAt(value: string) {
    this._lastUpEventAt = value;
  }
  public resetLastUpEventAt() {
    this._lastUpEventAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpEventAtInput() {
    return this._lastUpEventAt;
  }

  // line_protocol - computed: false, optional: true, required: false
  private _lineProtocol?: string; 
  public get lineProtocol() {
    return this.getStringAttribute('line_protocol');
  }
  public set lineProtocol(value: string) {
    this._lineProtocol = value;
  }
  public resetLineProtocol() {
    this._lineProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineProtocolInput() {
    return this._lineProtocol;
  }

  // link_type - computed: false, optional: true, required: false
  private _linkType?: string; 
  public get linkType() {
    return this.getStringAttribute('link_type');
  }
  public set linkType(value: string) {
    this._linkType = value;
  }
  public resetLinkType() {
    this._linkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkTypeInput() {
    return this._linkType;
  }

  // mac - computed: false, optional: true, required: false
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
  }

  // media_type - computed: false, optional: true, required: false
  private _mediaType?: string; 
  public get mediaType() {
    return this.getStringAttribute('media_type');
  }
  public set mediaType(value: string) {
    this._mediaType = value;
  }
  public resetMediaType() {
    this._mediaType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaTypeInput() {
    return this._mediaType;
  }

  // outgoing_pkts_mirrored - computed: false, optional: true, required: false
  private _outgoingPktsMirrored?: number; 
  public get outgoingPktsMirrored() {
    return this.getNumberAttribute('outgoing_pkts_mirrored');
  }
  public set outgoingPktsMirrored(value: number) {
    this._outgoingPktsMirrored = value;
  }
  public resetOutgoingPktsMirrored() {
    this._outgoingPktsMirrored = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outgoingPktsMirroredInput() {
    return this._outgoingPktsMirrored;
  }

  // outgoing_pkts_monitored - computed: false, optional: true, required: false
  private _outgoingPktsMonitored?: number; 
  public get outgoingPktsMonitored() {
    return this.getNumberAttribute('outgoing_pkts_monitored');
  }
  public set outgoingPktsMonitored(value: number) {
    this._outgoingPktsMonitored = value;
  }
  public resetOutgoingPktsMonitored() {
    this._outgoingPktsMonitored = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outgoingPktsMonitoredInput() {
    return this._outgoingPktsMonitored;
  }

  // output_utilization - computed: false, optional: true, required: false
  private _outputUtilization?: number; 
  public get outputUtilization() {
    return this.getNumberAttribute('output_utilization');
  }
  public set outputUtilization(value: number) {
    this._outputUtilization = value;
  }
  public resetOutputUtilization() {
    this._outputUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputUtilizationInput() {
    return this._outputUtilization;
  }

  // port_vnp_id - computed: false, optional: true, required: false
  private _portVnpId?: number; 
  public get portVnpId() {
    return this.getNumberAttribute('port_vnp_id');
  }
  public set portVnpId(value: number) {
    this._portVnpId = value;
  }
  public resetPortVnpId() {
    this._portVnpId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portVnpIdInput() {
    return this._portVnpId;
  }

  // rate_byte_rcvd - computed: false, optional: true, required: false
  private _rateByteRcvd?: number; 
  public get rateByteRcvd() {
    return this.getNumberAttribute('rate_byte_rcvd');
  }
  public set rateByteRcvd(value: number) {
    this._rateByteRcvd = value;
  }
  public resetRateByteRcvd() {
    this._rateByteRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateByteRcvdInput() {
    return this._rateByteRcvd;
  }

  // rate_byte_sent - computed: false, optional: true, required: false
  private _rateByteSent?: number; 
  public get rateByteSent() {
    return this.getNumberAttribute('rate_byte_sent');
  }
  public set rateByteSent(value: number) {
    this._rateByteSent = value;
  }
  public resetRateByteSent() {
    this._rateByteSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateByteSentInput() {
    return this._rateByteSent;
  }

  // rate_pkt_rcvd - computed: false, optional: true, required: false
  private _ratePktRcvd?: number; 
  public get ratePktRcvd() {
    return this.getNumberAttribute('rate_pkt_rcvd');
  }
  public set ratePktRcvd(value: number) {
    this._ratePktRcvd = value;
  }
  public resetRatePktRcvd() {
    this._ratePktRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratePktRcvdInput() {
    return this._ratePktRcvd;
  }

  // rate_pkt_sent - computed: false, optional: true, required: false
  private _ratePktSent?: number; 
  public get ratePktSent() {
    return this.getNumberAttribute('rate_pkt_sent');
  }
  public set ratePktSent(value: number) {
    this._ratePktSent = value;
  }
  public resetRatePktSent() {
    this._ratePktSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratePktSentInput() {
    return this._ratePktSent;
  }

  // span_mode - computed: false, optional: true, required: false
  private _spanMode?: string; 
  public get spanMode() {
    return this.getStringAttribute('span_mode');
  }
  public set spanMode(value: string) {
    this._spanMode = value;
  }
  public resetSpanMode() {
    this._spanMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanModeInput() {
    return this._spanMode;
  }

  // span_port_state - computed: false, optional: true, required: false
  private _spanPortState?: string; 
  public get spanPortState() {
    return this.getStringAttribute('span_port_state');
  }
  public set spanPortState(value: string) {
    this._spanPortState = value;
  }
  public resetSpanPortState() {
    this._spanPortState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanPortStateInput() {
    return this._spanPortState;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // tagged_vlan_list - computed: false, optional: true, required: false
  private _taggedVlanList?: string; 
  public get taggedVlanList() {
    return this.getStringAttribute('tagged_vlan_list');
  }
  public set taggedVlanList(value: string) {
    this._taggedVlanList = value;
  }
  public resetTaggedVlanList() {
    this._taggedVlanList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taggedVlanListInput() {
    return this._taggedVlanList;
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // ipv4_list - computed: false, optional: true, required: false
  private _ipv4List = new DataThunderInterfaceEthernetOperOperIpv4ListStructList(this, "ipv4_list", false);
  public get ipv4List() {
    return this._ipv4List;
  }
  public putIpv4List(value: DataThunderInterfaceEthernetOperOperIpv4ListStruct[] | cdktf.IResolvable) {
    this._ipv4List.internalValue = value;
  }
  public resetIpv4List() {
    this._ipv4List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4ListInput() {
    return this._ipv4List.internalValue;
  }

  // ipv6_list - computed: false, optional: true, required: false
  private _ipv6List = new DataThunderInterfaceEthernetOperOperIpv6ListStructList(this, "ipv6_list", false);
  public get ipv6List() {
    return this._ipv6List;
  }
  public putIpv6List(value: DataThunderInterfaceEthernetOperOperIpv6ListStruct[] | cdktf.IResolvable) {
    this._ipv6List.internalValue = value;
  }
  public resetIpv6List() {
    this._ipv6List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ListInput() {
    return this._ipv6List.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper thunder_interface_ethernet_oper}
*/
export class DataThunderInterfaceEthernetOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_interface_ethernet_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderInterfaceEthernetOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderInterfaceEthernetOper to import
  * @param importFromId The id of the existing DataThunderInterfaceEthernetOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderInterfaceEthernetOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_interface_ethernet_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_oper thunder_interface_ethernet_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderInterfaceEthernetOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderInterfaceEthernetOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_interface_ethernet_oper',
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
    this._id = config.id;
    this._ifnum = config.ifnum;
    this._oper.internalValue = config.oper;
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

  // ifnum - computed: false, optional: false, required: true
  private _ifnum?: number; 
  public get ifnum() {
    return this.getNumberAttribute('ifnum');
  }
  public set ifnum(value: number) {
    this._ifnum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ifnumInput() {
    return this._ifnum;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderInterfaceEthernetOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderInterfaceEthernetOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ifnum: cdktf.numberToTerraform(this._ifnum),
      oper: dataThunderInterfaceEthernetOperOperToTerraform(this._oper.internalValue),
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
      ifnum: {
        value: cdktf.numberToHclTerraform(this._ifnum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      oper: {
        value: dataThunderInterfaceEthernetOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderInterfaceEthernetOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
