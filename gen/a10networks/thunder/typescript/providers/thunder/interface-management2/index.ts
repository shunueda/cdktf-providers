// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceManagement2Config extends cdktf.TerraformMetaArguments {
  /**
  * 'enable': Enable Management Port; 'disable': Disable Management Port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management2#action InterfaceManagement2#action}
  */
  readonly action?: string;
  /**
  * 'Full': Full; 'Half': Half; 'auto': Auto;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management2#duplexity InterfaceManagement2#duplexity}
  */
  readonly duplexity?: string;
  /**
  * Enable 802.3x flow control on full duplex port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management2#flow_control InterfaceManagement2#flow_control}
  */
  readonly flowControl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management2#id InterfaceManagement2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Interface mtu (Interface MTU, default 1 (min MTU is 1280 for IPv6))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management2#mtu InterfaceManagement2#mtu}
  */
  readonly mtu?: number;
  /**
  * '10': 10 Mbs/sec; '100': 100 Mbs/sec; '1000': 1 Gb/sec; 'auto': Auto Negotiate Speed;  (Interface Speed)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management2#speed InterfaceManagement2#speed}
  */
  readonly speed?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management2#uuid InterfaceManagement2#uuid}
  */
  readonly uuid?: string;
  /**
  * access_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management2#access_list InterfaceManagement2#access_list}
  */
  readonly accessList?: InterfaceManagement2AccessListStruct;
  /**
  * broadcast_rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management2#broadcast_rate_limit InterfaceManagement2#broadcast_rate_limit}
  */
  readonly broadcastRateLimit?: InterfaceManagement2BroadcastRateLimit;
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management2#ip InterfaceManagement2#ip}
  */
  readonly ip?: InterfaceManagement2Ip;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management2#ipv6 InterfaceManagement2#ipv6}
  */
  readonly ipv6?: InterfaceManagement2Ipv6[] | cdktf.IResolvable;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management2#sampling_enable InterfaceManagement2#sampling_enable}
  */
  readonly samplingEnable?: InterfaceManagement2SamplingEnable[] | cdktf.IResolvable;
}
export interface InterfaceManagement2AccessListStruct {
  /**
  * ACL id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management2#acl_id InterfaceManagement2#acl_id}
  */
  readonly aclId?: number;
  /**
  * Apply an access list (Named Access List)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management2#acl_name InterfaceManagement2#acl_name}
  */
  readonly aclName?: string;
}

export function interfaceManagement2AccessListStructToTerraform(struct?: InterfaceManagement2AccessListStructOutputReference | InterfaceManagement2AccessListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl_id: cdktf.numberToTerraform(struct!.aclId),
    acl_name: cdktf.stringToTerraform(struct!.aclName),
  }
}


export function interfaceManagement2AccessListStructToHclTerraform(struct?: InterfaceManagement2AccessListStructOutputReference | InterfaceManagement2AccessListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl_id: {
      value: cdktf.numberToHclTerraform(struct!.aclId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    acl_name: {
      value: cdktf.stringToHclTerraform(struct!.aclName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceManagement2AccessListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceManagement2AccessListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aclId !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclId = this._aclId;
    }
    if (this._aclName !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclName = this._aclName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceManagement2AccessListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aclId = undefined;
      this._aclName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aclId = value.aclId;
      this._aclName = value.aclName;
    }
  }

  // acl_id - computed: false, optional: true, required: false
  private _aclId?: number; 
  public get aclId() {
    return this.getNumberAttribute('acl_id');
  }
  public set aclId(value: number) {
    this._aclId = value;
  }
  public resetAclId() {
    this._aclId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclIdInput() {
    return this._aclId;
  }

  // acl_name - computed: false, optional: true, required: false
  private _aclName?: string; 
  public get aclName() {
    return this.getStringAttribute('acl_name');
  }
  public set aclName(value: string) {
    this._aclName = value;
  }
  public resetAclName() {
    this._aclName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclNameInput() {
    return this._aclName;
  }
}
export interface InterfaceManagement2BroadcastRateLimit {
  /**
  * Rate limit the l2 broadcast packet on mgmt port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management2#bcast_rate_limit_enable InterfaceManagement2#bcast_rate_limit_enable}
  */
  readonly bcastRateLimitEnable?: number;
  /**
  * packets per second. Default is 500. (packets per second. Please specify an even number. Default is 500)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management2#rate InterfaceManagement2#rate}
  */
  readonly rate?: number;
}

export function interfaceManagement2BroadcastRateLimitToTerraform(struct?: InterfaceManagement2BroadcastRateLimitOutputReference | InterfaceManagement2BroadcastRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bcast_rate_limit_enable: cdktf.numberToTerraform(struct!.bcastRateLimitEnable),
    rate: cdktf.numberToTerraform(struct!.rate),
  }
}


export function interfaceManagement2BroadcastRateLimitToHclTerraform(struct?: InterfaceManagement2BroadcastRateLimitOutputReference | InterfaceManagement2BroadcastRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bcast_rate_limit_enable: {
      value: cdktf.numberToHclTerraform(struct!.bcastRateLimitEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate: {
      value: cdktf.numberToHclTerraform(struct!.rate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceManagement2BroadcastRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceManagement2BroadcastRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bcastRateLimitEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.bcastRateLimitEnable = this._bcastRateLimitEnable;
    }
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceManagement2BroadcastRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bcastRateLimitEnable = undefined;
      this._rate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bcastRateLimitEnable = value.bcastRateLimitEnable;
      this._rate = value.rate;
    }
  }

  // bcast_rate_limit_enable - computed: false, optional: true, required: false
  private _bcastRateLimitEnable?: number; 
  public get bcastRateLimitEnable() {
    return this.getNumberAttribute('bcast_rate_limit_enable');
  }
  public set bcastRateLimitEnable(value: number) {
    this._bcastRateLimitEnable = value;
  }
  public resetBcastRateLimitEnable() {
    this._bcastRateLimitEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bcastRateLimitEnableInput() {
    return this._bcastRateLimitEnable;
  }

  // rate - computed: false, optional: true, required: false
  private _rate?: number; 
  public get rate() {
    return this.getNumberAttribute('rate');
  }
  public set rate(value: number) {
    this._rate = value;
  }
  public resetRate() {
    this._rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }
}
export interface InterfaceManagement2Ip {
  /**
  * Control applications use management port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management2#control_apps_use_mgmt_port InterfaceManagement2#control_apps_use_mgmt_port}
  */
  readonly controlAppsUseMgmtPort?: number;
  /**
  * Set default gateway (Default gateway address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management2#default_gateway InterfaceManagement2#default_gateway}
  */
  readonly defaultGateway?: string;
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management2#ipv4_address InterfaceManagement2#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * IP subnet mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management2#ipv4_netmask InterfaceManagement2#ipv4_netmask}
  */
  readonly ipv4Netmask?: string;
}

export function interfaceManagement2IpToTerraform(struct?: InterfaceManagement2IpOutputReference | InterfaceManagement2Ip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    control_apps_use_mgmt_port: cdktf.numberToTerraform(struct!.controlAppsUseMgmtPort),
    default_gateway: cdktf.stringToTerraform(struct!.defaultGateway),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv4_netmask: cdktf.stringToTerraform(struct!.ipv4Netmask),
  }
}


export function interfaceManagement2IpToHclTerraform(struct?: InterfaceManagement2IpOutputReference | InterfaceManagement2Ip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    control_apps_use_mgmt_port: {
      value: cdktf.numberToHclTerraform(struct!.controlAppsUseMgmtPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_gateway: {
      value: cdktf.stringToHclTerraform(struct!.defaultGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceManagement2IpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceManagement2Ip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controlAppsUseMgmtPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlAppsUseMgmtPort = this._controlAppsUseMgmtPort;
    }
    if (this._defaultGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGateway = this._defaultGateway;
    }
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv4Netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Netmask = this._ipv4Netmask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceManagement2Ip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._controlAppsUseMgmtPort = undefined;
      this._defaultGateway = undefined;
      this._ipv4Address = undefined;
      this._ipv4Netmask = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._controlAppsUseMgmtPort = value.controlAppsUseMgmtPort;
      this._defaultGateway = value.defaultGateway;
      this._ipv4Address = value.ipv4Address;
      this._ipv4Netmask = value.ipv4Netmask;
    }
  }

  // control_apps_use_mgmt_port - computed: false, optional: true, required: false
  private _controlAppsUseMgmtPort?: number; 
  public get controlAppsUseMgmtPort() {
    return this.getNumberAttribute('control_apps_use_mgmt_port');
  }
  public set controlAppsUseMgmtPort(value: number) {
    this._controlAppsUseMgmtPort = value;
  }
  public resetControlAppsUseMgmtPort() {
    this._controlAppsUseMgmtPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlAppsUseMgmtPortInput() {
    return this._controlAppsUseMgmtPort;
  }

  // default_gateway - computed: false, optional: true, required: false
  private _defaultGateway?: string; 
  public get defaultGateway() {
    return this.getStringAttribute('default_gateway');
  }
  public set defaultGateway(value: string) {
    this._defaultGateway = value;
  }
  public resetDefaultGateway() {
    this._defaultGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayInput() {
    return this._defaultGateway;
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
}
export interface InterfaceManagement2Ipv6 {
  /**
  * 'link-local': Configure an IPv6 link local address;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management2#address_type InterfaceManagement2#address_type}
  */
  readonly addressType?: string;
  /**
  * Set default gateway (Default gateway address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management2#default_ipv6_gateway InterfaceManagement2#default_ipv6_gateway}
  */
  readonly defaultIpv6Gateway?: string;
  /**
  * ACL applied on incoming packets to this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management2#inbound InterfaceManagement2#inbound}
  */
  readonly inbound?: number;
  /**
  * Set the IPv6 address of an interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management2#ipv6_addr InterfaceManagement2#ipv6_addr}
  */
  readonly ipv6Addr?: string;
  /**
  * Apply ACL rules to incoming packets on this interface (Named Access List)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management2#v6_acl_name InterfaceManagement2#v6_acl_name}
  */
  readonly v6AclName?: string;
}

export function interfaceManagement2Ipv6ToTerraform(struct?: InterfaceManagement2Ipv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_type: cdktf.stringToTerraform(struct!.addressType),
    default_ipv6_gateway: cdktf.stringToTerraform(struct!.defaultIpv6Gateway),
    inbound: cdktf.numberToTerraform(struct!.inbound),
    ipv6_addr: cdktf.stringToTerraform(struct!.ipv6Addr),
    v6_acl_name: cdktf.stringToTerraform(struct!.v6AclName),
  }
}


export function interfaceManagement2Ipv6ToHclTerraform(struct?: InterfaceManagement2Ipv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_type: {
      value: cdktf.stringToHclTerraform(struct!.addressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_ipv6_gateway: {
      value: cdktf.stringToHclTerraform(struct!.defaultIpv6Gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inbound: {
      value: cdktf.numberToHclTerraform(struct!.inbound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v6_acl_name: {
      value: cdktf.stringToHclTerraform(struct!.v6AclName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceManagement2Ipv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceManagement2Ipv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressType = this._addressType;
    }
    if (this._defaultIpv6Gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultIpv6Gateway = this._defaultIpv6Gateway;
    }
    if (this._inbound !== undefined) {
      hasAnyValues = true;
      internalValueResult.inbound = this._inbound;
    }
    if (this._ipv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addr = this._ipv6Addr;
    }
    if (this._v6AclName !== undefined) {
      hasAnyValues = true;
      internalValueResult.v6AclName = this._v6AclName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceManagement2Ipv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressType = undefined;
      this._defaultIpv6Gateway = undefined;
      this._inbound = undefined;
      this._ipv6Addr = undefined;
      this._v6AclName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressType = value.addressType;
      this._defaultIpv6Gateway = value.defaultIpv6Gateway;
      this._inbound = value.inbound;
      this._ipv6Addr = value.ipv6Addr;
      this._v6AclName = value.v6AclName;
    }
  }

  // address_type - computed: false, optional: true, required: false
  private _addressType?: string; 
  public get addressType() {
    return this.getStringAttribute('address_type');
  }
  public set addressType(value: string) {
    this._addressType = value;
  }
  public resetAddressType() {
    this._addressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressTypeInput() {
    return this._addressType;
  }

  // default_ipv6_gateway - computed: false, optional: true, required: false
  private _defaultIpv6Gateway?: string; 
  public get defaultIpv6Gateway() {
    return this.getStringAttribute('default_ipv6_gateway');
  }
  public set defaultIpv6Gateway(value: string) {
    this._defaultIpv6Gateway = value;
  }
  public resetDefaultIpv6Gateway() {
    this._defaultIpv6Gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultIpv6GatewayInput() {
    return this._defaultIpv6Gateway;
  }

  // inbound - computed: false, optional: true, required: false
  private _inbound?: number; 
  public get inbound() {
    return this.getNumberAttribute('inbound');
  }
  public set inbound(value: number) {
    this._inbound = value;
  }
  public resetInbound() {
    this._inbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundInput() {
    return this._inbound;
  }

  // ipv6_addr - computed: false, optional: true, required: false
  private _ipv6Addr?: string; 
  public get ipv6Addr() {
    return this.getStringAttribute('ipv6_addr');
  }
  public set ipv6Addr(value: string) {
    this._ipv6Addr = value;
  }
  public resetIpv6Addr() {
    this._ipv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddrInput() {
    return this._ipv6Addr;
  }

  // v6_acl_name - computed: false, optional: true, required: false
  private _v6AclName?: string; 
  public get v6AclName() {
    return this.getStringAttribute('v6_acl_name');
  }
  public set v6AclName(value: string) {
    this._v6AclName = value;
  }
  public resetV6AclName() {
    this._v6AclName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6AclNameInput() {
    return this._v6AclName;
  }
}

export class InterfaceManagement2Ipv6List extends cdktf.ComplexList {
  public internalValue? : InterfaceManagement2Ipv6[] | cdktf.IResolvable

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
  public get(index: number): InterfaceManagement2Ipv6OutputReference {
    return new InterfaceManagement2Ipv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceManagement2SamplingEnable {
  /**
  * 'all': all; 'packets_input': Input packets; 'bytes_input': Input bytes; 'received_broadcasts': Received broadcasts; 'received_multicasts': Received multicasts; 'received_unicasts': Received unicasts; 'input_errors': Input errors; 'crc': CRC; 'frame': Frames; 'input_err_short': Runts; 'input_err_long': Giants; 'packets_output': Output packets; 'bytes_output': Output bytes; 'transmitted_broadcasts': Transmitted broadcasts; 'transmitted_multicasts': Transmitted multicasts; 'transmitted_unicasts': Transmitted unicasts; 'output_errors': Output errors; 'collisions': Collisions;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management2#counters1 InterfaceManagement2#counters1}
  */
  readonly counters1?: string;
}

export function interfaceManagement2SamplingEnableToTerraform(struct?: InterfaceManagement2SamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function interfaceManagement2SamplingEnableToHclTerraform(struct?: InterfaceManagement2SamplingEnable | cdktf.IResolvable): any {
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

export class InterfaceManagement2SamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceManagement2SamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InterfaceManagement2SamplingEnable | cdktf.IResolvable | undefined) {
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

export class InterfaceManagement2SamplingEnableList extends cdktf.ComplexList {
  public internalValue? : InterfaceManagement2SamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): InterfaceManagement2SamplingEnableOutputReference {
    return new InterfaceManagement2SamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management2 thunder_interface_management2}
*/
export class InterfaceManagement2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_interface_management2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceManagement2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceManagement2 to import
  * @param importFromId The id of the existing InterfaceManagement2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceManagement2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_interface_management2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management2 thunder_interface_management2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceManagement2Config = {}
  */
  public constructor(scope: Construct, id: string, config: InterfaceManagement2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_interface_management2',
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
    this._action = config.action;
    this._duplexity = config.duplexity;
    this._flowControl = config.flowControl;
    this._id = config.id;
    this._mtu = config.mtu;
    this._speed = config.speed;
    this._uuid = config.uuid;
    this._accessList.internalValue = config.accessList;
    this._broadcastRateLimit.internalValue = config.broadcastRateLimit;
    this._ip.internalValue = config.ip;
    this._ipv6.internalValue = config.ipv6;
    this._samplingEnable.internalValue = config.samplingEnable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // duplexity - computed: false, optional: true, required: false
  private _duplexity?: string; 
  public get duplexity() {
    return this.getStringAttribute('duplexity');
  }
  public set duplexity(value: string) {
    this._duplexity = value;
  }
  public resetDuplexity() {
    this._duplexity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duplexityInput() {
    return this._duplexity;
  }

  // flow_control - computed: false, optional: true, required: false
  private _flowControl?: number; 
  public get flowControl() {
    return this.getNumberAttribute('flow_control');
  }
  public set flowControl(value: number) {
    this._flowControl = value;
  }
  public resetFlowControl() {
    this._flowControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowControlInput() {
    return this._flowControl;
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

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // speed - computed: false, optional: true, required: false
  private _speed?: string; 
  public get speed() {
    return this.getStringAttribute('speed');
  }
  public set speed(value: string) {
    this._speed = value;
  }
  public resetSpeed() {
    this._speed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedInput() {
    return this._speed;
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

  // access_list - computed: false, optional: true, required: false
  private _accessList = new InterfaceManagement2AccessListStructOutputReference(this, "access_list");
  public get accessList() {
    return this._accessList;
  }
  public putAccessList(value: InterfaceManagement2AccessListStruct) {
    this._accessList.internalValue = value;
  }
  public resetAccessList() {
    this._accessList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListInput() {
    return this._accessList.internalValue;
  }

  // broadcast_rate_limit - computed: false, optional: true, required: false
  private _broadcastRateLimit = new InterfaceManagement2BroadcastRateLimitOutputReference(this, "broadcast_rate_limit");
  public get broadcastRateLimit() {
    return this._broadcastRateLimit;
  }
  public putBroadcastRateLimit(value: InterfaceManagement2BroadcastRateLimit) {
    this._broadcastRateLimit.internalValue = value;
  }
  public resetBroadcastRateLimit() {
    this._broadcastRateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get broadcastRateLimitInput() {
    return this._broadcastRateLimit.internalValue;
  }

  // ip - computed: false, optional: true, required: false
  private _ip = new InterfaceManagement2IpOutputReference(this, "ip");
  public get ip() {
    return this._ip;
  }
  public putIp(value: InterfaceManagement2Ip) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new InterfaceManagement2Ipv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: InterfaceManagement2Ipv6[] | cdktf.IResolvable) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new InterfaceManagement2SamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: InterfaceManagement2SamplingEnable[] | cdktf.IResolvable) {
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
      action: cdktf.stringToTerraform(this._action),
      duplexity: cdktf.stringToTerraform(this._duplexity),
      flow_control: cdktf.numberToTerraform(this._flowControl),
      id: cdktf.stringToTerraform(this._id),
      mtu: cdktf.numberToTerraform(this._mtu),
      speed: cdktf.stringToTerraform(this._speed),
      uuid: cdktf.stringToTerraform(this._uuid),
      access_list: interfaceManagement2AccessListStructToTerraform(this._accessList.internalValue),
      broadcast_rate_limit: interfaceManagement2BroadcastRateLimitToTerraform(this._broadcastRateLimit.internalValue),
      ip: interfaceManagement2IpToTerraform(this._ip.internalValue),
      ipv6: cdktf.listMapper(interfaceManagement2Ipv6ToTerraform, true)(this._ipv6.internalValue),
      sampling_enable: cdktf.listMapper(interfaceManagement2SamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      duplexity: {
        value: cdktf.stringToHclTerraform(this._duplexity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flow_control: {
        value: cdktf.numberToHclTerraform(this._flowControl),
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
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      speed: {
        value: cdktf.stringToHclTerraform(this._speed),
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
      access_list: {
        value: interfaceManagement2AccessListStructToHclTerraform(this._accessList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceManagement2AccessListStructList",
      },
      broadcast_rate_limit: {
        value: interfaceManagement2BroadcastRateLimitToHclTerraform(this._broadcastRateLimit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceManagement2BroadcastRateLimitList",
      },
      ip: {
        value: interfaceManagement2IpToHclTerraform(this._ip.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceManagement2IpList",
      },
      ipv6: {
        value: cdktf.listMapperHcl(interfaceManagement2Ipv6ToHclTerraform, true)(this._ipv6.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceManagement2Ipv6List",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(interfaceManagement2SamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceManagement2SamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
