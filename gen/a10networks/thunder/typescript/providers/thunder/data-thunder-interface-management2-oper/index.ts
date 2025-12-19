// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_management2_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderInterfaceManagement2OperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_management2_oper#id DataThunderInterfaceManagement2Oper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_management2_oper#oper DataThunderInterfaceManagement2Oper#oper}
  */
  readonly oper?: DataThunderInterfaceManagement2OperOper;
}
export interface DataThunderInterfaceManagement2OperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_management2_oper#dhcp_enabled DataThunderInterfaceManagement2Oper#dhcp_enabled}
  */
  readonly dhcpEnabled?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_management2_oper#duplexity DataThunderInterfaceManagement2Oper#duplexity}
  */
  readonly duplexity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_management2_oper#flow_control DataThunderInterfaceManagement2Oper#flow_control}
  */
  readonly flowControl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_management2_oper#interface DataThunderInterfaceManagement2Oper#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_management2_oper#ipv4_acl DataThunderInterfaceManagement2Oper#ipv4_acl}
  */
  readonly ipv4Acl?: string;
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_management2_oper#ipv4_addr DataThunderInterfaceManagement2Oper#ipv4_addr}
  */
  readonly ipv4Addr?: string;
  /**
  * IP gateway address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_management2_oper#ipv4_default_gateway DataThunderInterfaceManagement2Oper#ipv4_default_gateway}
  */
  readonly ipv4DefaultGateway?: string;
  /**
  * IP subnet mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_management2_oper#ipv4_mask DataThunderInterfaceManagement2Oper#ipv4_mask}
  */
  readonly ipv4Mask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_management2_oper#ipv6_acl DataThunderInterfaceManagement2Oper#ipv6_acl}
  */
  readonly ipv6Acl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_management2_oper#ipv6_addr DataThunderInterfaceManagement2Oper#ipv6_addr}
  */
  readonly ipv6Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_management2_oper#ipv6_default_gateway DataThunderInterfaceManagement2Oper#ipv6_default_gateway}
  */
  readonly ipv6DefaultGateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_management2_oper#ipv6_link_local DataThunderInterfaceManagement2Oper#ipv6_link_local}
  */
  readonly ipv6LinkLocal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_management2_oper#ipv6_link_local_prefix DataThunderInterfaceManagement2Oper#ipv6_link_local_prefix}
  */
  readonly ipv6LinkLocalPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_management2_oper#ipv6_prefix DataThunderInterfaceManagement2Oper#ipv6_prefix}
  */
  readonly ipv6Prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_management2_oper#line_protocol DataThunderInterfaceManagement2Oper#line_protocol}
  */
  readonly lineProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_management2_oper#link_type DataThunderInterfaceManagement2Oper#link_type}
  */
  readonly linkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_management2_oper#mac DataThunderInterfaceManagement2Oper#mac}
  */
  readonly mac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_management2_oper#mtu DataThunderInterfaceManagement2Oper#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_management2_oper#speed DataThunderInterfaceManagement2Oper#speed}
  */
  readonly speed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_management2_oper#state DataThunderInterfaceManagement2Oper#state}
  */
  readonly state?: number;
}

export function dataThunderInterfaceManagement2OperOperToTerraform(struct?: DataThunderInterfaceManagement2OperOperOutputReference | DataThunderInterfaceManagement2OperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcp_enabled: cdktf.numberToTerraform(struct!.dhcpEnabled),
    duplexity: cdktf.stringToTerraform(struct!.duplexity),
    flow_control: cdktf.numberToTerraform(struct!.flowControl),
    interface: cdktf.stringToTerraform(struct!.interface),
    ipv4_acl: cdktf.stringToTerraform(struct!.ipv4Acl),
    ipv4_addr: cdktf.stringToTerraform(struct!.ipv4Addr),
    ipv4_default_gateway: cdktf.stringToTerraform(struct!.ipv4DefaultGateway),
    ipv4_mask: cdktf.stringToTerraform(struct!.ipv4Mask),
    ipv6_acl: cdktf.stringToTerraform(struct!.ipv6Acl),
    ipv6_addr: cdktf.stringToTerraform(struct!.ipv6Addr),
    ipv6_default_gateway: cdktf.stringToTerraform(struct!.ipv6DefaultGateway),
    ipv6_link_local: cdktf.stringToTerraform(struct!.ipv6LinkLocal),
    ipv6_link_local_prefix: cdktf.stringToTerraform(struct!.ipv6LinkLocalPrefix),
    ipv6_prefix: cdktf.stringToTerraform(struct!.ipv6Prefix),
    line_protocol: cdktf.stringToTerraform(struct!.lineProtocol),
    link_type: cdktf.stringToTerraform(struct!.linkType),
    mac: cdktf.stringToTerraform(struct!.mac),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    speed: cdktf.stringToTerraform(struct!.speed),
    state: cdktf.numberToTerraform(struct!.state),
  }
}


export function dataThunderInterfaceManagement2OperOperToHclTerraform(struct?: DataThunderInterfaceManagement2OperOperOutputReference | DataThunderInterfaceManagement2OperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcp_enabled: {
      value: cdktf.numberToHclTerraform(struct!.dhcpEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    duplexity: {
      value: cdktf.stringToHclTerraform(struct!.duplexity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flow_control: {
      value: cdktf.numberToHclTerraform(struct!.flowControl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_acl: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Acl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_default_gateway: {
      value: cdktf.stringToHclTerraform(struct!.ipv4DefaultGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_mask: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_acl: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Acl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_default_gateway: {
      value: cdktf.stringToHclTerraform(struct!.ipv6DefaultGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    ipv6_prefix: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Prefix),
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
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    speed: {
      value: cdktf.stringToHclTerraform(struct!.speed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.numberToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderInterfaceManagement2OperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderInterfaceManagement2OperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcpEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpEnabled = this._dhcpEnabled;
    }
    if (this._duplexity !== undefined) {
      hasAnyValues = true;
      internalValueResult.duplexity = this._duplexity;
    }
    if (this._flowControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowControl = this._flowControl;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._ipv4Acl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Acl = this._ipv4Acl;
    }
    if (this._ipv4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Addr = this._ipv4Addr;
    }
    if (this._ipv4DefaultGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4DefaultGateway = this._ipv4DefaultGateway;
    }
    if (this._ipv4Mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Mask = this._ipv4Mask;
    }
    if (this._ipv6Acl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Acl = this._ipv6Acl;
    }
    if (this._ipv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addr = this._ipv6Addr;
    }
    if (this._ipv6DefaultGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6DefaultGateway = this._ipv6DefaultGateway;
    }
    if (this._ipv6LinkLocal !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6LinkLocal = this._ipv6LinkLocal;
    }
    if (this._ipv6LinkLocalPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6LinkLocalPrefix = this._ipv6LinkLocalPrefix;
    }
    if (this._ipv6Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefix = this._ipv6Prefix;
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
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._speed !== undefined) {
      hasAnyValues = true;
      internalValueResult.speed = this._speed;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderInterfaceManagement2OperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dhcpEnabled = undefined;
      this._duplexity = undefined;
      this._flowControl = undefined;
      this._interface = undefined;
      this._ipv4Acl = undefined;
      this._ipv4Addr = undefined;
      this._ipv4DefaultGateway = undefined;
      this._ipv4Mask = undefined;
      this._ipv6Acl = undefined;
      this._ipv6Addr = undefined;
      this._ipv6DefaultGateway = undefined;
      this._ipv6LinkLocal = undefined;
      this._ipv6LinkLocalPrefix = undefined;
      this._ipv6Prefix = undefined;
      this._lineProtocol = undefined;
      this._linkType = undefined;
      this._mac = undefined;
      this._mtu = undefined;
      this._speed = undefined;
      this._state = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dhcpEnabled = value.dhcpEnabled;
      this._duplexity = value.duplexity;
      this._flowControl = value.flowControl;
      this._interface = value.interface;
      this._ipv4Acl = value.ipv4Acl;
      this._ipv4Addr = value.ipv4Addr;
      this._ipv4DefaultGateway = value.ipv4DefaultGateway;
      this._ipv4Mask = value.ipv4Mask;
      this._ipv6Acl = value.ipv6Acl;
      this._ipv6Addr = value.ipv6Addr;
      this._ipv6DefaultGateway = value.ipv6DefaultGateway;
      this._ipv6LinkLocal = value.ipv6LinkLocal;
      this._ipv6LinkLocalPrefix = value.ipv6LinkLocalPrefix;
      this._ipv6Prefix = value.ipv6Prefix;
      this._lineProtocol = value.lineProtocol;
      this._linkType = value.linkType;
      this._mac = value.mac;
      this._mtu = value.mtu;
      this._speed = value.speed;
      this._state = value.state;
    }
  }

  // dhcp_enabled - computed: false, optional: true, required: false
  private _dhcpEnabled?: number; 
  public get dhcpEnabled() {
    return this.getNumberAttribute('dhcp_enabled');
  }
  public set dhcpEnabled(value: number) {
    this._dhcpEnabled = value;
  }
  public resetDhcpEnabled() {
    this._dhcpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpEnabledInput() {
    return this._dhcpEnabled;
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

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // ipv4_acl - computed: false, optional: true, required: false
  private _ipv4Acl?: string; 
  public get ipv4Acl() {
    return this.getStringAttribute('ipv4_acl');
  }
  public set ipv4Acl(value: string) {
    this._ipv4Acl = value;
  }
  public resetIpv4Acl() {
    this._ipv4Acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AclInput() {
    return this._ipv4Acl;
  }

  // ipv4_addr - computed: false, optional: true, required: false
  private _ipv4Addr?: string; 
  public get ipv4Addr() {
    return this.getStringAttribute('ipv4_addr');
  }
  public set ipv4Addr(value: string) {
    this._ipv4Addr = value;
  }
  public resetIpv4Addr() {
    this._ipv4Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddrInput() {
    return this._ipv4Addr;
  }

  // ipv4_default_gateway - computed: false, optional: true, required: false
  private _ipv4DefaultGateway?: string; 
  public get ipv4DefaultGateway() {
    return this.getStringAttribute('ipv4_default_gateway');
  }
  public set ipv4DefaultGateway(value: string) {
    this._ipv4DefaultGateway = value;
  }
  public resetIpv4DefaultGateway() {
    this._ipv4DefaultGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4DefaultGatewayInput() {
    return this._ipv4DefaultGateway;
  }

  // ipv4_mask - computed: false, optional: true, required: false
  private _ipv4Mask?: string; 
  public get ipv4Mask() {
    return this.getStringAttribute('ipv4_mask');
  }
  public set ipv4Mask(value: string) {
    this._ipv4Mask = value;
  }
  public resetIpv4Mask() {
    this._ipv4Mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4MaskInput() {
    return this._ipv4Mask;
  }

  // ipv6_acl - computed: false, optional: true, required: false
  private _ipv6Acl?: string; 
  public get ipv6Acl() {
    return this.getStringAttribute('ipv6_acl');
  }
  public set ipv6Acl(value: string) {
    this._ipv6Acl = value;
  }
  public resetIpv6Acl() {
    this._ipv6Acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AclInput() {
    return this._ipv6Acl;
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

  // ipv6_default_gateway - computed: false, optional: true, required: false
  private _ipv6DefaultGateway?: string; 
  public get ipv6DefaultGateway() {
    return this.getStringAttribute('ipv6_default_gateway');
  }
  public set ipv6DefaultGateway(value: string) {
    this._ipv6DefaultGateway = value;
  }
  public resetIpv6DefaultGateway() {
    this._ipv6DefaultGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DefaultGatewayInput() {
    return this._ipv6DefaultGateway;
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

  // ipv6_prefix - computed: false, optional: true, required: false
  private _ipv6Prefix?: string; 
  public get ipv6Prefix() {
    return this.getStringAttribute('ipv6_prefix');
  }
  public set ipv6Prefix(value: string) {
    this._ipv6Prefix = value;
  }
  public resetIpv6Prefix() {
    this._ipv6Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixInput() {
    return this._ipv6Prefix;
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

  // state - computed: false, optional: true, required: false
  private _state?: number; 
  public get state() {
    return this.getNumberAttribute('state');
  }
  public set state(value: number) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_management2_oper thunder_interface_management2_oper}
*/
export class DataThunderInterfaceManagement2Oper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_interface_management2_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderInterfaceManagement2Oper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderInterfaceManagement2Oper to import
  * @param importFromId The id of the existing DataThunderInterfaceManagement2Oper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_management2_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderInterfaceManagement2Oper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_interface_management2_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_management2_oper thunder_interface_management2_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderInterfaceManagement2OperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderInterfaceManagement2OperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_interface_management2_oper',
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderInterfaceManagement2OperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderInterfaceManagement2OperOper) {
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
      oper: dataThunderInterfaceManagement2OperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderInterfaceManagement2OperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderInterfaceManagement2OperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
