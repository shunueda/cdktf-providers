// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceManagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'enable': Enable Management Port; 'disable': Disable Management Port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#action InterfaceManagement#action}
  */
  readonly action?: string;
  /**
  * 'Full': Full; 'Half': Half; 'auto': Auto;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#duplexity InterfaceManagement#duplexity}
  */
  readonly duplexity?: string;
  /**
  * Enable 802.3x flow control on full duplex port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#flow_control InterfaceManagement#flow_control}
  */
  readonly flowControl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#id InterfaceManagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Interface mtu (Interface MTU, default 1 (min MTU is 1280 for IPv6))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#mtu InterfaceManagement#mtu}
  */
  readonly mtu?: number;
  /**
  * '10': 10 Mbs/sec; '100': 100 Mbs/sec; '1000': 1 Gb/sec; 'auto': Auto Negotiate Speed;  (Interface Speed)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#speed InterfaceManagement#speed}
  */
  readonly speed?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#uuid InterfaceManagement#uuid}
  */
  readonly uuid?: string;
  /**
  * access_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#access_list InterfaceManagement#access_list}
  */
  readonly accessList?: InterfaceManagementAccessListStruct;
  /**
  * broadcast_rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#broadcast_rate_limit InterfaceManagement#broadcast_rate_limit}
  */
  readonly broadcastRateLimit?: InterfaceManagementBroadcastRateLimit;
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#ip InterfaceManagement#ip}
  */
  readonly ip?: InterfaceManagementIp;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#ipv6 InterfaceManagement#ipv6}
  */
  readonly ipv6?: InterfaceManagementIpv6[] | cdktf.IResolvable;
  /**
  * lldp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#lldp InterfaceManagement#lldp}
  */
  readonly lldp?: InterfaceManagementLldp;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#sampling_enable InterfaceManagement#sampling_enable}
  */
  readonly samplingEnable?: InterfaceManagementSamplingEnable[] | cdktf.IResolvable;
  /**
  * secondary_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#secondary_ip InterfaceManagement#secondary_ip}
  */
  readonly secondaryIp?: InterfaceManagementSecondaryIp;
}
export interface InterfaceManagementAccessListStruct {
  /**
  * ACL id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#acl_id InterfaceManagement#acl_id}
  */
  readonly aclId?: number;
  /**
  * Apply an access list (Named Access List)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#acl_name InterfaceManagement#acl_name}
  */
  readonly aclName?: string;
}

export function interfaceManagementAccessListStructToTerraform(struct?: InterfaceManagementAccessListStructOutputReference | InterfaceManagementAccessListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl_id: cdktf.numberToTerraform(struct!.aclId),
    acl_name: cdktf.stringToTerraform(struct!.aclName),
  }
}


export function interfaceManagementAccessListStructToHclTerraform(struct?: InterfaceManagementAccessListStructOutputReference | InterfaceManagementAccessListStruct): any {
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

export class InterfaceManagementAccessListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceManagementAccessListStruct | undefined {
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

  public set internalValue(value: InterfaceManagementAccessListStruct | undefined) {
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
export interface InterfaceManagementBroadcastRateLimit {
  /**
  * Rate limit the l2 broadcast packet on mgmt port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#bcast_rate_limit_enable InterfaceManagement#bcast_rate_limit_enable}
  */
  readonly bcastRateLimitEnable?: number;
  /**
  * packets per second. Default is 500. (packets per second. Please specify an even number. Default is 500)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#rate InterfaceManagement#rate}
  */
  readonly rate?: number;
}

export function interfaceManagementBroadcastRateLimitToTerraform(struct?: InterfaceManagementBroadcastRateLimitOutputReference | InterfaceManagementBroadcastRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bcast_rate_limit_enable: cdktf.numberToTerraform(struct!.bcastRateLimitEnable),
    rate: cdktf.numberToTerraform(struct!.rate),
  }
}


export function interfaceManagementBroadcastRateLimitToHclTerraform(struct?: InterfaceManagementBroadcastRateLimitOutputReference | InterfaceManagementBroadcastRateLimit): any {
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

export class InterfaceManagementBroadcastRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceManagementBroadcastRateLimit | undefined {
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

  public set internalValue(value: InterfaceManagementBroadcastRateLimit | undefined) {
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
export interface InterfaceManagementIp {
  /**
  * Control applications use management port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#control_apps_use_mgmt_port InterfaceManagement#control_apps_use_mgmt_port}
  */
  readonly controlAppsUseMgmtPort?: number;
  /**
  * Set default gateway (Default gateway address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#default_gateway InterfaceManagement#default_gateway}
  */
  readonly defaultGateway?: string;
  /**
  * Use DHCP to configure IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#dhcp InterfaceManagement#dhcp}
  */
  readonly dhcp?: number;
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#ipv4_address InterfaceManagement#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * IP subnet mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#ipv4_netmask InterfaceManagement#ipv4_netmask}
  */
  readonly ipv4Netmask?: string;
}

export function interfaceManagementIpToTerraform(struct?: InterfaceManagementIpOutputReference | InterfaceManagementIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    control_apps_use_mgmt_port: cdktf.numberToTerraform(struct!.controlAppsUseMgmtPort),
    default_gateway: cdktf.stringToTerraform(struct!.defaultGateway),
    dhcp: cdktf.numberToTerraform(struct!.dhcp),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv4_netmask: cdktf.stringToTerraform(struct!.ipv4Netmask),
  }
}


export function interfaceManagementIpToHclTerraform(struct?: InterfaceManagementIpOutputReference | InterfaceManagementIp): any {
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
    dhcp: {
      value: cdktf.numberToHclTerraform(struct!.dhcp),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceManagementIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceManagementIp | undefined {
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
    if (this._dhcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp = this._dhcp;
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

  public set internalValue(value: InterfaceManagementIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._controlAppsUseMgmtPort = undefined;
      this._defaultGateway = undefined;
      this._dhcp = undefined;
      this._ipv4Address = undefined;
      this._ipv4Netmask = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._controlAppsUseMgmtPort = value.controlAppsUseMgmtPort;
      this._defaultGateway = value.defaultGateway;
      this._dhcp = value.dhcp;
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

  // dhcp - computed: false, optional: true, required: false
  private _dhcp?: number; 
  public get dhcp() {
    return this.getNumberAttribute('dhcp');
  }
  public set dhcp(value: number) {
    this._dhcp = value;
  }
  public resetDhcp() {
    this._dhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpInput() {
    return this._dhcp;
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
export interface InterfaceManagementIpv6 {
  /**
  * 'link-local': Configure an IPv6 link local address;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#address_type InterfaceManagement#address_type}
  */
  readonly addressType?: string;
  /**
  * Set default gateway (Default gateway address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#default_ipv6_gateway InterfaceManagement#default_ipv6_gateway}
  */
  readonly defaultIpv6Gateway?: string;
  /**
  * ACL applied on incoming packets to this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#inbound InterfaceManagement#inbound}
  */
  readonly inbound?: number;
  /**
  * Set the IPv6 address of an interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#ipv6_addr InterfaceManagement#ipv6_addr}
  */
  readonly ipv6Addr?: string;
  /**
  * Apply ACL rules to incoming packets on this interface (Named Access List)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#v6_acl_name InterfaceManagement#v6_acl_name}
  */
  readonly v6AclName?: string;
}

export function interfaceManagementIpv6ToTerraform(struct?: InterfaceManagementIpv6 | cdktf.IResolvable): any {
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


export function interfaceManagementIpv6ToHclTerraform(struct?: InterfaceManagementIpv6 | cdktf.IResolvable): any {
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

export class InterfaceManagementIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceManagementIpv6 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InterfaceManagementIpv6 | cdktf.IResolvable | undefined) {
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

export class InterfaceManagementIpv6List extends cdktf.ComplexList {
  public internalValue? : InterfaceManagementIpv6[] | cdktf.IResolvable

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
  public get(index: number): InterfaceManagementIpv6OutputReference {
    return new InterfaceManagementIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceManagementLldpEnableCfg {
  /**
  * Interface lldp enable/disable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#rt_enable InterfaceManagement#rt_enable}
  */
  readonly rtEnable?: number;
  /**
  * Enable lldp rx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#rx InterfaceManagement#rx}
  */
  readonly rx?: number;
  /**
  * Enable lldp tx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#tx InterfaceManagement#tx}
  */
  readonly tx?: number;
}

export function interfaceManagementLldpEnableCfgToTerraform(struct?: InterfaceManagementLldpEnableCfgOutputReference | InterfaceManagementLldpEnableCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rt_enable: cdktf.numberToTerraform(struct!.rtEnable),
    rx: cdktf.numberToTerraform(struct!.rx),
    tx: cdktf.numberToTerraform(struct!.tx),
  }
}


export function interfaceManagementLldpEnableCfgToHclTerraform(struct?: InterfaceManagementLldpEnableCfgOutputReference | InterfaceManagementLldpEnableCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rt_enable: {
      value: cdktf.numberToHclTerraform(struct!.rtEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rx: {
      value: cdktf.numberToHclTerraform(struct!.rx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tx: {
      value: cdktf.numberToHclTerraform(struct!.tx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceManagementLldpEnableCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceManagementLldpEnableCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rtEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.rtEnable = this._rtEnable;
    }
    if (this._rx !== undefined) {
      hasAnyValues = true;
      internalValueResult.rx = this._rx;
    }
    if (this._tx !== undefined) {
      hasAnyValues = true;
      internalValueResult.tx = this._tx;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceManagementLldpEnableCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rtEnable = undefined;
      this._rx = undefined;
      this._tx = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rtEnable = value.rtEnable;
      this._rx = value.rx;
      this._tx = value.tx;
    }
  }

  // rt_enable - computed: false, optional: true, required: false
  private _rtEnable?: number; 
  public get rtEnable() {
    return this.getNumberAttribute('rt_enable');
  }
  public set rtEnable(value: number) {
    this._rtEnable = value;
  }
  public resetRtEnable() {
    this._rtEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtEnableInput() {
    return this._rtEnable;
  }

  // rx - computed: false, optional: true, required: false
  private _rx?: number; 
  public get rx() {
    return this.getNumberAttribute('rx');
  }
  public set rx(value: number) {
    this._rx = value;
  }
  public resetRx() {
    this._rx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxInput() {
    return this._rx;
  }

  // tx - computed: false, optional: true, required: false
  private _tx?: number; 
  public get tx() {
    return this.getNumberAttribute('tx');
  }
  public set tx(value: number) {
    this._tx = value;
  }
  public resetTx() {
    this._tx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txInput() {
    return this._tx;
  }
}
export interface InterfaceManagementLldpNotificationCfg {
  /**
  * Interface lldp notification enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#notif_enable InterfaceManagement#notif_enable}
  */
  readonly notifEnable?: number;
  /**
  * Interface lldp notification configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#notification InterfaceManagement#notification}
  */
  readonly notification?: number;
}

export function interfaceManagementLldpNotificationCfgToTerraform(struct?: InterfaceManagementLldpNotificationCfgOutputReference | InterfaceManagementLldpNotificationCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notif_enable: cdktf.numberToTerraform(struct!.notifEnable),
    notification: cdktf.numberToTerraform(struct!.notification),
  }
}


export function interfaceManagementLldpNotificationCfgToHclTerraform(struct?: InterfaceManagementLldpNotificationCfgOutputReference | InterfaceManagementLldpNotificationCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notif_enable: {
      value: cdktf.numberToHclTerraform(struct!.notifEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    notification: {
      value: cdktf.numberToHclTerraform(struct!.notification),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceManagementLldpNotificationCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceManagementLldpNotificationCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notifEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifEnable = this._notifEnable;
    }
    if (this._notification !== undefined) {
      hasAnyValues = true;
      internalValueResult.notification = this._notification;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceManagementLldpNotificationCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._notifEnable = undefined;
      this._notification = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._notifEnable = value.notifEnable;
      this._notification = value.notification;
    }
  }

  // notif_enable - computed: false, optional: true, required: false
  private _notifEnable?: number; 
  public get notifEnable() {
    return this.getNumberAttribute('notif_enable');
  }
  public set notifEnable(value: number) {
    this._notifEnable = value;
  }
  public resetNotifEnable() {
    this._notifEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifEnableInput() {
    return this._notifEnable;
  }

  // notification - computed: false, optional: true, required: false
  private _notification?: number; 
  public get notification() {
    return this.getNumberAttribute('notification');
  }
  public set notification(value: number) {
    this._notification = value;
  }
  public resetNotification() {
    this._notification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationInput() {
    return this._notification;
  }
}
export interface InterfaceManagementLldpTxDot1Cfg {
  /**
  * Interface link aggregation information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#link_aggregation InterfaceManagement#link_aggregation}
  */
  readonly linkAggregation?: number;
  /**
  * Interface lldp tx IEEE 802.1 Organizationally specific TLVs configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#tx_dot1_tlvs InterfaceManagement#tx_dot1_tlvs}
  */
  readonly txDot1Tlvs?: number;
  /**
  * Interface vlan information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#vlan InterfaceManagement#vlan}
  */
  readonly vlan?: number;
}

export function interfaceManagementLldpTxDot1CfgToTerraform(struct?: InterfaceManagementLldpTxDot1CfgOutputReference | InterfaceManagementLldpTxDot1Cfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    link_aggregation: cdktf.numberToTerraform(struct!.linkAggregation),
    tx_dot1_tlvs: cdktf.numberToTerraform(struct!.txDot1Tlvs),
    vlan: cdktf.numberToTerraform(struct!.vlan),
  }
}


export function interfaceManagementLldpTxDot1CfgToHclTerraform(struct?: InterfaceManagementLldpTxDot1CfgOutputReference | InterfaceManagementLldpTxDot1Cfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    link_aggregation: {
      value: cdktf.numberToHclTerraform(struct!.linkAggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tx_dot1_tlvs: {
      value: cdktf.numberToHclTerraform(struct!.txDot1Tlvs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vlan: {
      value: cdktf.numberToHclTerraform(struct!.vlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceManagementLldpTxDot1CfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceManagementLldpTxDot1Cfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._linkAggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkAggregation = this._linkAggregation;
    }
    if (this._txDot1Tlvs !== undefined) {
      hasAnyValues = true;
      internalValueResult.txDot1Tlvs = this._txDot1Tlvs;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceManagementLldpTxDot1Cfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._linkAggregation = undefined;
      this._txDot1Tlvs = undefined;
      this._vlan = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._linkAggregation = value.linkAggregation;
      this._txDot1Tlvs = value.txDot1Tlvs;
      this._vlan = value.vlan;
    }
  }

  // link_aggregation - computed: false, optional: true, required: false
  private _linkAggregation?: number; 
  public get linkAggregation() {
    return this.getNumberAttribute('link_aggregation');
  }
  public set linkAggregation(value: number) {
    this._linkAggregation = value;
  }
  public resetLinkAggregation() {
    this._linkAggregation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkAggregationInput() {
    return this._linkAggregation;
  }

  // tx_dot1_tlvs - computed: false, optional: true, required: false
  private _txDot1Tlvs?: number; 
  public get txDot1Tlvs() {
    return this.getNumberAttribute('tx_dot1_tlvs');
  }
  public set txDot1Tlvs(value: number) {
    this._txDot1Tlvs = value;
  }
  public resetTxDot1Tlvs() {
    this._txDot1Tlvs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txDot1TlvsInput() {
    return this._txDot1Tlvs;
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }
}
export interface InterfaceManagementLldpTxTlvsCfg {
  /**
  * Configure which TLVs excluded. All basic TLVs will be included by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#exclude InterfaceManagement#exclude}
  */
  readonly exclude?: number;
  /**
  * Interface lldp management address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#management_address InterfaceManagement#management_address}
  */
  readonly managementAddress?: number;
  /**
  * Interface lldp port description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#port_description InterfaceManagement#port_description}
  */
  readonly portDescription?: number;
  /**
  * Interface lldp system capabilities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#system_capabilities InterfaceManagement#system_capabilities}
  */
  readonly systemCapabilities?: number;
  /**
  * Interface lldp system description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#system_description InterfaceManagement#system_description}
  */
  readonly systemDescription?: number;
  /**
  * Interface lldp system name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#system_name InterfaceManagement#system_name}
  */
  readonly systemName?: number;
  /**
  * Interface lldp tx TLVs configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#tx_tlvs InterfaceManagement#tx_tlvs}
  */
  readonly txTlvs?: number;
}

export function interfaceManagementLldpTxTlvsCfgToTerraform(struct?: InterfaceManagementLldpTxTlvsCfgOutputReference | InterfaceManagementLldpTxTlvsCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.numberToTerraform(struct!.exclude),
    management_address: cdktf.numberToTerraform(struct!.managementAddress),
    port_description: cdktf.numberToTerraform(struct!.portDescription),
    system_capabilities: cdktf.numberToTerraform(struct!.systemCapabilities),
    system_description: cdktf.numberToTerraform(struct!.systemDescription),
    system_name: cdktf.numberToTerraform(struct!.systemName),
    tx_tlvs: cdktf.numberToTerraform(struct!.txTlvs),
  }
}


export function interfaceManagementLldpTxTlvsCfgToHclTerraform(struct?: InterfaceManagementLldpTxTlvsCfgOutputReference | InterfaceManagementLldpTxTlvsCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.numberToHclTerraform(struct!.exclude),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    management_address: {
      value: cdktf.numberToHclTerraform(struct!.managementAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_description: {
      value: cdktf.numberToHclTerraform(struct!.portDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    system_capabilities: {
      value: cdktf.numberToHclTerraform(struct!.systemCapabilities),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    system_description: {
      value: cdktf.numberToHclTerraform(struct!.systemDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    system_name: {
      value: cdktf.numberToHclTerraform(struct!.systemName),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tx_tlvs: {
      value: cdktf.numberToHclTerraform(struct!.txTlvs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceManagementLldpTxTlvsCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceManagementLldpTxTlvsCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._managementAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementAddress = this._managementAddress;
    }
    if (this._portDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.portDescription = this._portDescription;
    }
    if (this._systemCapabilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemCapabilities = this._systemCapabilities;
    }
    if (this._systemDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemDescription = this._systemDescription;
    }
    if (this._systemName !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemName = this._systemName;
    }
    if (this._txTlvs !== undefined) {
      hasAnyValues = true;
      internalValueResult.txTlvs = this._txTlvs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceManagementLldpTxTlvsCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exclude = undefined;
      this._managementAddress = undefined;
      this._portDescription = undefined;
      this._systemCapabilities = undefined;
      this._systemDescription = undefined;
      this._systemName = undefined;
      this._txTlvs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exclude = value.exclude;
      this._managementAddress = value.managementAddress;
      this._portDescription = value.portDescription;
      this._systemCapabilities = value.systemCapabilities;
      this._systemDescription = value.systemDescription;
      this._systemName = value.systemName;
      this._txTlvs = value.txTlvs;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: number; 
  public get exclude() {
    return this.getNumberAttribute('exclude');
  }
  public set exclude(value: number) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // management_address - computed: false, optional: true, required: false
  private _managementAddress?: number; 
  public get managementAddress() {
    return this.getNumberAttribute('management_address');
  }
  public set managementAddress(value: number) {
    this._managementAddress = value;
  }
  public resetManagementAddress() {
    this._managementAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementAddressInput() {
    return this._managementAddress;
  }

  // port_description - computed: false, optional: true, required: false
  private _portDescription?: number; 
  public get portDescription() {
    return this.getNumberAttribute('port_description');
  }
  public set portDescription(value: number) {
    this._portDescription = value;
  }
  public resetPortDescription() {
    this._portDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portDescriptionInput() {
    return this._portDescription;
  }

  // system_capabilities - computed: false, optional: true, required: false
  private _systemCapabilities?: number; 
  public get systemCapabilities() {
    return this.getNumberAttribute('system_capabilities');
  }
  public set systemCapabilities(value: number) {
    this._systemCapabilities = value;
  }
  public resetSystemCapabilities() {
    this._systemCapabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemCapabilitiesInput() {
    return this._systemCapabilities;
  }

  // system_description - computed: false, optional: true, required: false
  private _systemDescription?: number; 
  public get systemDescription() {
    return this.getNumberAttribute('system_description');
  }
  public set systemDescription(value: number) {
    this._systemDescription = value;
  }
  public resetSystemDescription() {
    this._systemDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDescriptionInput() {
    return this._systemDescription;
  }

  // system_name - computed: false, optional: true, required: false
  private _systemName?: number; 
  public get systemName() {
    return this.getNumberAttribute('system_name');
  }
  public set systemName(value: number) {
    this._systemName = value;
  }
  public resetSystemName() {
    this._systemName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemNameInput() {
    return this._systemName;
  }

  // tx_tlvs - computed: false, optional: true, required: false
  private _txTlvs?: number; 
  public get txTlvs() {
    return this.getNumberAttribute('tx_tlvs');
  }
  public set txTlvs(value: number) {
    this._txTlvs = value;
  }
  public resetTxTlvs() {
    this._txTlvs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txTlvsInput() {
    return this._txTlvs;
  }
}
export interface InterfaceManagementLldp {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#uuid InterfaceManagement#uuid}
  */
  readonly uuid?: string;
  /**
  * enable_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#enable_cfg InterfaceManagement#enable_cfg}
  */
  readonly enableCfg?: InterfaceManagementLldpEnableCfg;
  /**
  * notification_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#notification_cfg InterfaceManagement#notification_cfg}
  */
  readonly notificationCfg?: InterfaceManagementLldpNotificationCfg;
  /**
  * tx_dot1_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#tx_dot1_cfg InterfaceManagement#tx_dot1_cfg}
  */
  readonly txDot1Cfg?: InterfaceManagementLldpTxDot1Cfg;
  /**
  * tx_tlvs_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#tx_tlvs_cfg InterfaceManagement#tx_tlvs_cfg}
  */
  readonly txTlvsCfg?: InterfaceManagementLldpTxTlvsCfg;
}

export function interfaceManagementLldpToTerraform(struct?: InterfaceManagementLldpOutputReference | InterfaceManagementLldp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    enable_cfg: interfaceManagementLldpEnableCfgToTerraform(struct!.enableCfg),
    notification_cfg: interfaceManagementLldpNotificationCfgToTerraform(struct!.notificationCfg),
    tx_dot1_cfg: interfaceManagementLldpTxDot1CfgToTerraform(struct!.txDot1Cfg),
    tx_tlvs_cfg: interfaceManagementLldpTxTlvsCfgToTerraform(struct!.txTlvsCfg),
  }
}


export function interfaceManagementLldpToHclTerraform(struct?: InterfaceManagementLldpOutputReference | InterfaceManagementLldp): any {
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
    enable_cfg: {
      value: interfaceManagementLldpEnableCfgToHclTerraform(struct!.enableCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceManagementLldpEnableCfgList",
    },
    notification_cfg: {
      value: interfaceManagementLldpNotificationCfgToHclTerraform(struct!.notificationCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceManagementLldpNotificationCfgList",
    },
    tx_dot1_cfg: {
      value: interfaceManagementLldpTxDot1CfgToHclTerraform(struct!.txDot1Cfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceManagementLldpTxDot1CfgList",
    },
    tx_tlvs_cfg: {
      value: interfaceManagementLldpTxTlvsCfgToHclTerraform(struct!.txTlvsCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceManagementLldpTxTlvsCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceManagementLldpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceManagementLldp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._enableCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCfg = this._enableCfg?.internalValue;
    }
    if (this._notificationCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationCfg = this._notificationCfg?.internalValue;
    }
    if (this._txDot1Cfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.txDot1Cfg = this._txDot1Cfg?.internalValue;
    }
    if (this._txTlvsCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.txTlvsCfg = this._txTlvsCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceManagementLldp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._enableCfg.internalValue = undefined;
      this._notificationCfg.internalValue = undefined;
      this._txDot1Cfg.internalValue = undefined;
      this._txTlvsCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._enableCfg.internalValue = value.enableCfg;
      this._notificationCfg.internalValue = value.notificationCfg;
      this._txDot1Cfg.internalValue = value.txDot1Cfg;
      this._txTlvsCfg.internalValue = value.txTlvsCfg;
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

  // enable_cfg - computed: false, optional: true, required: false
  private _enableCfg = new InterfaceManagementLldpEnableCfgOutputReference(this, "enable_cfg");
  public get enableCfg() {
    return this._enableCfg;
  }
  public putEnableCfg(value: InterfaceManagementLldpEnableCfg) {
    this._enableCfg.internalValue = value;
  }
  public resetEnableCfg() {
    this._enableCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCfgInput() {
    return this._enableCfg.internalValue;
  }

  // notification_cfg - computed: false, optional: true, required: false
  private _notificationCfg = new InterfaceManagementLldpNotificationCfgOutputReference(this, "notification_cfg");
  public get notificationCfg() {
    return this._notificationCfg;
  }
  public putNotificationCfg(value: InterfaceManagementLldpNotificationCfg) {
    this._notificationCfg.internalValue = value;
  }
  public resetNotificationCfg() {
    this._notificationCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationCfgInput() {
    return this._notificationCfg.internalValue;
  }

  // tx_dot1_cfg - computed: false, optional: true, required: false
  private _txDot1Cfg = new InterfaceManagementLldpTxDot1CfgOutputReference(this, "tx_dot1_cfg");
  public get txDot1Cfg() {
    return this._txDot1Cfg;
  }
  public putTxDot1Cfg(value: InterfaceManagementLldpTxDot1Cfg) {
    this._txDot1Cfg.internalValue = value;
  }
  public resetTxDot1Cfg() {
    this._txDot1Cfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txDot1CfgInput() {
    return this._txDot1Cfg.internalValue;
  }

  // tx_tlvs_cfg - computed: false, optional: true, required: false
  private _txTlvsCfg = new InterfaceManagementLldpTxTlvsCfgOutputReference(this, "tx_tlvs_cfg");
  public get txTlvsCfg() {
    return this._txTlvsCfg;
  }
  public putTxTlvsCfg(value: InterfaceManagementLldpTxTlvsCfg) {
    this._txTlvsCfg.internalValue = value;
  }
  public resetTxTlvsCfg() {
    this._txTlvsCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txTlvsCfgInput() {
    return this._txTlvsCfg.internalValue;
  }
}
export interface InterfaceManagementSamplingEnable {
  /**
  * 'all': all; 'packets_input': Input packets; 'bytes_input': Input bytes; 'received_broadcasts': Received broadcasts; 'received_multicasts': Received multicasts; 'received_unicasts': Received unicasts; 'input_errors': Input errors; 'crc': CRC; 'frame': Frames; 'input_err_short': Runts; 'input_err_long': Giants; 'packets_output': Output packets; 'bytes_output': Output bytes; 'transmitted_broadcasts': Transmitted broadcasts; 'transmitted_multicasts': Transmitted multicasts; 'transmitted_unicasts': Transmitted unicasts; 'output_errors': Output errors; 'collisions': Collisions;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#counters1 InterfaceManagement#counters1}
  */
  readonly counters1?: string;
}

export function interfaceManagementSamplingEnableToTerraform(struct?: InterfaceManagementSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function interfaceManagementSamplingEnableToHclTerraform(struct?: InterfaceManagementSamplingEnable | cdktf.IResolvable): any {
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

export class InterfaceManagementSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceManagementSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InterfaceManagementSamplingEnable | cdktf.IResolvable | undefined) {
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

export class InterfaceManagementSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : InterfaceManagementSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): InterfaceManagementSamplingEnableOutputReference {
    return new InterfaceManagementSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceManagementSecondaryIp {
  /**
  * Control applications use management port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#control_apps_use_mgmt_port InterfaceManagement#control_apps_use_mgmt_port}
  */
  readonly controlAppsUseMgmtPort?: number;
  /**
  * Set default gateway (Default gateway address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#default_gateway InterfaceManagement#default_gateway}
  */
  readonly defaultGateway?: string;
  /**
  * Use DHCP to configure IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#dhcp InterfaceManagement#dhcp}
  */
  readonly dhcp?: number;
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#ipv4_address InterfaceManagement#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * IP subnet mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#ipv4_netmask InterfaceManagement#ipv4_netmask}
  */
  readonly ipv4Netmask?: string;
  /**
  * Global IP configuration subcommands
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#secondary_ip InterfaceManagement#secondary_ip}
  */
  readonly secondaryIp?: number;
}

export function interfaceManagementSecondaryIpToTerraform(struct?: InterfaceManagementSecondaryIpOutputReference | InterfaceManagementSecondaryIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    control_apps_use_mgmt_port: cdktf.numberToTerraform(struct!.controlAppsUseMgmtPort),
    default_gateway: cdktf.stringToTerraform(struct!.defaultGateway),
    dhcp: cdktf.numberToTerraform(struct!.dhcp),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv4_netmask: cdktf.stringToTerraform(struct!.ipv4Netmask),
    secondary_ip: cdktf.numberToTerraform(struct!.secondaryIp),
  }
}


export function interfaceManagementSecondaryIpToHclTerraform(struct?: InterfaceManagementSecondaryIpOutputReference | InterfaceManagementSecondaryIp): any {
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
    dhcp: {
      value: cdktf.numberToHclTerraform(struct!.dhcp),
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
    secondary_ip: {
      value: cdktf.numberToHclTerraform(struct!.secondaryIp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceManagementSecondaryIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceManagementSecondaryIp | undefined {
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
    if (this._dhcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp = this._dhcp;
    }
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv4Netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Netmask = this._ipv4Netmask;
    }
    if (this._secondaryIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryIp = this._secondaryIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceManagementSecondaryIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._controlAppsUseMgmtPort = undefined;
      this._defaultGateway = undefined;
      this._dhcp = undefined;
      this._ipv4Address = undefined;
      this._ipv4Netmask = undefined;
      this._secondaryIp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._controlAppsUseMgmtPort = value.controlAppsUseMgmtPort;
      this._defaultGateway = value.defaultGateway;
      this._dhcp = value.dhcp;
      this._ipv4Address = value.ipv4Address;
      this._ipv4Netmask = value.ipv4Netmask;
      this._secondaryIp = value.secondaryIp;
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

  // dhcp - computed: false, optional: true, required: false
  private _dhcp?: number; 
  public get dhcp() {
    return this.getNumberAttribute('dhcp');
  }
  public set dhcp(value: number) {
    this._dhcp = value;
  }
  public resetDhcp() {
    this._dhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpInput() {
    return this._dhcp;
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

  // secondary_ip - computed: false, optional: true, required: false
  private _secondaryIp?: number; 
  public get secondaryIp() {
    return this.getNumberAttribute('secondary_ip');
  }
  public set secondaryIp(value: number) {
    this._secondaryIp = value;
  }
  public resetSecondaryIp() {
    this._secondaryIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryIpInput() {
    return this._secondaryIp;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management thunder_interface_management}
*/
export class InterfaceManagement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_interface_management";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceManagement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceManagement to import
  * @param importFromId The id of the existing InterfaceManagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceManagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_interface_management", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_management thunder_interface_management} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceManagementConfig = {}
  */
  public constructor(scope: Construct, id: string, config: InterfaceManagementConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_interface_management',
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
    this._lldp.internalValue = config.lldp;
    this._samplingEnable.internalValue = config.samplingEnable;
    this._secondaryIp.internalValue = config.secondaryIp;
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
  private _accessList = new InterfaceManagementAccessListStructOutputReference(this, "access_list");
  public get accessList() {
    return this._accessList;
  }
  public putAccessList(value: InterfaceManagementAccessListStruct) {
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
  private _broadcastRateLimit = new InterfaceManagementBroadcastRateLimitOutputReference(this, "broadcast_rate_limit");
  public get broadcastRateLimit() {
    return this._broadcastRateLimit;
  }
  public putBroadcastRateLimit(value: InterfaceManagementBroadcastRateLimit) {
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
  private _ip = new InterfaceManagementIpOutputReference(this, "ip");
  public get ip() {
    return this._ip;
  }
  public putIp(value: InterfaceManagementIp) {
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
  private _ipv6 = new InterfaceManagementIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: InterfaceManagementIpv6[] | cdktf.IResolvable) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }

  // lldp - computed: false, optional: true, required: false
  private _lldp = new InterfaceManagementLldpOutputReference(this, "lldp");
  public get lldp() {
    return this._lldp;
  }
  public putLldp(value: InterfaceManagementLldp) {
    this._lldp.internalValue = value;
  }
  public resetLldp() {
    this._lldp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lldpInput() {
    return this._lldp.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new InterfaceManagementSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: InterfaceManagementSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // secondary_ip - computed: false, optional: true, required: false
  private _secondaryIp = new InterfaceManagementSecondaryIpOutputReference(this, "secondary_ip");
  public get secondaryIp() {
    return this._secondaryIp;
  }
  public putSecondaryIp(value: InterfaceManagementSecondaryIp) {
    this._secondaryIp.internalValue = value;
  }
  public resetSecondaryIp() {
    this._secondaryIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryIpInput() {
    return this._secondaryIp.internalValue;
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
      access_list: interfaceManagementAccessListStructToTerraform(this._accessList.internalValue),
      broadcast_rate_limit: interfaceManagementBroadcastRateLimitToTerraform(this._broadcastRateLimit.internalValue),
      ip: interfaceManagementIpToTerraform(this._ip.internalValue),
      ipv6: cdktf.listMapper(interfaceManagementIpv6ToTerraform, true)(this._ipv6.internalValue),
      lldp: interfaceManagementLldpToTerraform(this._lldp.internalValue),
      sampling_enable: cdktf.listMapper(interfaceManagementSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
      secondary_ip: interfaceManagementSecondaryIpToTerraform(this._secondaryIp.internalValue),
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
        value: interfaceManagementAccessListStructToHclTerraform(this._accessList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceManagementAccessListStructList",
      },
      broadcast_rate_limit: {
        value: interfaceManagementBroadcastRateLimitToHclTerraform(this._broadcastRateLimit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceManagementBroadcastRateLimitList",
      },
      ip: {
        value: interfaceManagementIpToHclTerraform(this._ip.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceManagementIpList",
      },
      ipv6: {
        value: cdktf.listMapperHcl(interfaceManagementIpv6ToHclTerraform, true)(this._ipv6.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceManagementIpv6List",
      },
      lldp: {
        value: interfaceManagementLldpToHclTerraform(this._lldp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceManagementLldpList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(interfaceManagementSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceManagementSamplingEnableList",
      },
      secondary_ip: {
        value: interfaceManagementSecondaryIpToHclTerraform(this._secondaryIp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceManagementSecondaryIpList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
