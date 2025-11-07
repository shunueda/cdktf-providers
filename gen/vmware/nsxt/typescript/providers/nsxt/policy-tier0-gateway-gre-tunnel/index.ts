// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_gre_tunnel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyTier0GatewayGreTunnelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_gre_tunnel#description PolicyTier0GatewayGreTunnel#description}
  */
  readonly description?: string;
  /**
  * Destination IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_gre_tunnel#destination_address PolicyTier0GatewayGreTunnel#destination_address}
  */
  readonly destinationAddress: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_gre_tunnel#display_name PolicyTier0GatewayGreTunnel#display_name}
  */
  readonly displayName: string;
  /**
  * Enable/Disable Tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_gre_tunnel#enabled PolicyTier0GatewayGreTunnel#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_gre_tunnel#id PolicyTier0GatewayGreTunnel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Policy path of associated Gateway Locale Service on NSX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_gre_tunnel#locale_service_path PolicyTier0GatewayGreTunnel#locale_service_path}
  */
  readonly localeServicePath: string;
  /**
  * Maximum transmission unit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_gre_tunnel#mtu PolicyTier0GatewayGreTunnel#mtu}
  */
  readonly mtu?: number;
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_gre_tunnel#nsx_id PolicyTier0GatewayGreTunnel#nsx_id}
  */
  readonly nsxId?: string;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_gre_tunnel#tag PolicyTier0GatewayGreTunnel#tag}
  */
  readonly tag?: PolicyTier0GatewayGreTunnelTag[] | cdktf.IResolvable;
  /**
  * tunnel_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_gre_tunnel#tunnel_address PolicyTier0GatewayGreTunnel#tunnel_address}
  */
  readonly tunnelAddress: PolicyTier0GatewayGreTunnelTunnelAddress[] | cdktf.IResolvable;
  /**
  * tunnel_keepalive block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_gre_tunnel#tunnel_keepalive PolicyTier0GatewayGreTunnel#tunnel_keepalive}
  */
  readonly tunnelKeepalive?: PolicyTier0GatewayGreTunnelTunnelKeepalive;
}
export interface PolicyTier0GatewayGreTunnelTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_gre_tunnel#scope PolicyTier0GatewayGreTunnel#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_gre_tunnel#tag PolicyTier0GatewayGreTunnel#tag}
  */
  readonly tag?: string;
}

export function policyTier0GatewayGreTunnelTagToTerraform(struct?: PolicyTier0GatewayGreTunnelTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policyTier0GatewayGreTunnelTagToHclTerraform(struct?: PolicyTier0GatewayGreTunnelTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyTier0GatewayGreTunnelTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyTier0GatewayGreTunnelTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyTier0GatewayGreTunnelTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope = value.scope;
      this._tag = value.tag;
    }
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class PolicyTier0GatewayGreTunnelTagList extends cdktf.ComplexList {
  public internalValue? : PolicyTier0GatewayGreTunnelTag[] | cdktf.IResolvable

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
  public get(index: number): PolicyTier0GatewayGreTunnelTagOutputReference {
    return new PolicyTier0GatewayGreTunnelTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyTier0GatewayGreTunnelTunnelAddressTunnelInterfaceSubnet {
  /**
  * IP addresses assigned to interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_gre_tunnel#ip_addresses PolicyTier0GatewayGreTunnel#ip_addresses}
  */
  readonly ipAddresses: string[];
  /**
  * Subnet prefix length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_gre_tunnel#prefix_len PolicyTier0GatewayGreTunnel#prefix_len}
  */
  readonly prefixLen: number;
}

export function policyTier0GatewayGreTunnelTunnelAddressTunnelInterfaceSubnetToTerraform(struct?: PolicyTier0GatewayGreTunnelTunnelAddressTunnelInterfaceSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipAddresses),
    prefix_len: cdktf.numberToTerraform(struct!.prefixLen),
  }
}


export function policyTier0GatewayGreTunnelTunnelAddressTunnelInterfaceSubnetToHclTerraform(struct?: PolicyTier0GatewayGreTunnelTunnelAddressTunnelInterfaceSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prefix_len: {
      value: cdktf.numberToHclTerraform(struct!.prefixLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyTier0GatewayGreTunnelTunnelAddressTunnelInterfaceSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyTier0GatewayGreTunnelTunnelAddressTunnelInterfaceSubnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddresses = this._ipAddresses;
    }
    if (this._prefixLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLen = this._prefixLen;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyTier0GatewayGreTunnelTunnelAddressTunnelInterfaceSubnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddresses = undefined;
      this._prefixLen = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddresses = value.ipAddresses;
      this._prefixLen = value.prefixLen;
    }
  }

  // ip_addresses - computed: false, optional: false, required: true
  private _ipAddresses?: string[]; 
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }
  public set ipAddresses(value: string[]) {
    this._ipAddresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses;
  }

  // prefix_len - computed: false, optional: false, required: true
  private _prefixLen?: number; 
  public get prefixLen() {
    return this.getNumberAttribute('prefix_len');
  }
  public set prefixLen(value: number) {
    this._prefixLen = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLenInput() {
    return this._prefixLen;
  }
}

export class PolicyTier0GatewayGreTunnelTunnelAddressTunnelInterfaceSubnetList extends cdktf.ComplexList {
  public internalValue? : PolicyTier0GatewayGreTunnelTunnelAddressTunnelInterfaceSubnet[] | cdktf.IResolvable

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
  public get(index: number): PolicyTier0GatewayGreTunnelTunnelAddressTunnelInterfaceSubnetOutputReference {
    return new PolicyTier0GatewayGreTunnelTunnelAddressTunnelInterfaceSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyTier0GatewayGreTunnelTunnelAddress {
  /**
  * Policy edge node path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_gre_tunnel#edge_path PolicyTier0GatewayGreTunnel#edge_path}
  */
  readonly edgePath: string;
  /**
  * IPv4 source address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_gre_tunnel#source_address PolicyTier0GatewayGreTunnel#source_address}
  */
  readonly sourceAddress: string;
  /**
  * tunnel_interface_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_gre_tunnel#tunnel_interface_subnet PolicyTier0GatewayGreTunnel#tunnel_interface_subnet}
  */
  readonly tunnelInterfaceSubnet: PolicyTier0GatewayGreTunnelTunnelAddressTunnelInterfaceSubnet[] | cdktf.IResolvable;
}

export function policyTier0GatewayGreTunnelTunnelAddressToTerraform(struct?: PolicyTier0GatewayGreTunnelTunnelAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    edge_path: cdktf.stringToTerraform(struct!.edgePath),
    source_address: cdktf.stringToTerraform(struct!.sourceAddress),
    tunnel_interface_subnet: cdktf.listMapper(policyTier0GatewayGreTunnelTunnelAddressTunnelInterfaceSubnetToTerraform, true)(struct!.tunnelInterfaceSubnet),
  }
}


export function policyTier0GatewayGreTunnelTunnelAddressToHclTerraform(struct?: PolicyTier0GatewayGreTunnelTunnelAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    edge_path: {
      value: cdktf.stringToHclTerraform(struct!.edgePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_address: {
      value: cdktf.stringToHclTerraform(struct!.sourceAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_interface_subnet: {
      value: cdktf.listMapperHcl(policyTier0GatewayGreTunnelTunnelAddressTunnelInterfaceSubnetToHclTerraform, true)(struct!.tunnelInterfaceSubnet),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyTier0GatewayGreTunnelTunnelAddressTunnelInterfaceSubnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyTier0GatewayGreTunnelTunnelAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyTier0GatewayGreTunnelTunnelAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._edgePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgePath = this._edgePath;
    }
    if (this._sourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddress = this._sourceAddress;
    }
    if (this._tunnelInterfaceSubnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelInterfaceSubnet = this._tunnelInterfaceSubnet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyTier0GatewayGreTunnelTunnelAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._edgePath = undefined;
      this._sourceAddress = undefined;
      this._tunnelInterfaceSubnet.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._edgePath = value.edgePath;
      this._sourceAddress = value.sourceAddress;
      this._tunnelInterfaceSubnet.internalValue = value.tunnelInterfaceSubnet;
    }
  }

  // edge_path - computed: false, optional: false, required: true
  private _edgePath?: string; 
  public get edgePath() {
    return this.getStringAttribute('edge_path');
  }
  public set edgePath(value: string) {
    this._edgePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgePathInput() {
    return this._edgePath;
  }

  // source_address - computed: false, optional: false, required: true
  private _sourceAddress?: string; 
  public get sourceAddress() {
    return this.getStringAttribute('source_address');
  }
  public set sourceAddress(value: string) {
    this._sourceAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress;
  }

  // tunnel_interface_subnet - computed: false, optional: false, required: true
  private _tunnelInterfaceSubnet = new PolicyTier0GatewayGreTunnelTunnelAddressTunnelInterfaceSubnetList(this, "tunnel_interface_subnet", false);
  public get tunnelInterfaceSubnet() {
    return this._tunnelInterfaceSubnet;
  }
  public putTunnelInterfaceSubnet(value: PolicyTier0GatewayGreTunnelTunnelAddressTunnelInterfaceSubnet[] | cdktf.IResolvable) {
    this._tunnelInterfaceSubnet.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceSubnetInput() {
    return this._tunnelInterfaceSubnet.internalValue;
  }
}

export class PolicyTier0GatewayGreTunnelTunnelAddressList extends cdktf.ComplexList {
  public internalValue? : PolicyTier0GatewayGreTunnelTunnelAddress[] | cdktf.IResolvable

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
  public get(index: number): PolicyTier0GatewayGreTunnelTunnelAddressOutputReference {
    return new PolicyTier0GatewayGreTunnelTunnelAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyTier0GatewayGreTunnelTunnelKeepalive {
  /**
  * Dead time multiplier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_gre_tunnel#dead_time_multiplier PolicyTier0GatewayGreTunnel#dead_time_multiplier}
  */
  readonly deadTimeMultiplier?: number;
  /**
  * Enable tunnel keep alive acknowledge
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_gre_tunnel#enable_keepalive_ack PolicyTier0GatewayGreTunnel#enable_keepalive_ack}
  */
  readonly enableKeepaliveAck?: boolean | cdktf.IResolvable;
  /**
  * Enable/Disable tunnel keep alive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_gre_tunnel#enabled PolicyTier0GatewayGreTunnel#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Keep alive interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_gre_tunnel#keepalive_interval PolicyTier0GatewayGreTunnel#keepalive_interval}
  */
  readonly keepaliveInterval?: number;
}

export function policyTier0GatewayGreTunnelTunnelKeepaliveToTerraform(struct?: PolicyTier0GatewayGreTunnelTunnelKeepaliveOutputReference | PolicyTier0GatewayGreTunnelTunnelKeepalive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dead_time_multiplier: cdktf.numberToTerraform(struct!.deadTimeMultiplier),
    enable_keepalive_ack: cdktf.booleanToTerraform(struct!.enableKeepaliveAck),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    keepalive_interval: cdktf.numberToTerraform(struct!.keepaliveInterval),
  }
}


export function policyTier0GatewayGreTunnelTunnelKeepaliveToHclTerraform(struct?: PolicyTier0GatewayGreTunnelTunnelKeepaliveOutputReference | PolicyTier0GatewayGreTunnelTunnelKeepalive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dead_time_multiplier: {
      value: cdktf.numberToHclTerraform(struct!.deadTimeMultiplier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_keepalive_ack: {
      value: cdktf.booleanToHclTerraform(struct!.enableKeepaliveAck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keepalive_interval: {
      value: cdktf.numberToHclTerraform(struct!.keepaliveInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyTier0GatewayGreTunnelTunnelKeepaliveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyTier0GatewayGreTunnelTunnelKeepalive | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deadTimeMultiplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadTimeMultiplier = this._deadTimeMultiplier;
    }
    if (this._enableKeepaliveAck !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableKeepaliveAck = this._enableKeepaliveAck;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._keepaliveInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepaliveInterval = this._keepaliveInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyTier0GatewayGreTunnelTunnelKeepalive | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deadTimeMultiplier = undefined;
      this._enableKeepaliveAck = undefined;
      this._enabled = undefined;
      this._keepaliveInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deadTimeMultiplier = value.deadTimeMultiplier;
      this._enableKeepaliveAck = value.enableKeepaliveAck;
      this._enabled = value.enabled;
      this._keepaliveInterval = value.keepaliveInterval;
    }
  }

  // dead_time_multiplier - computed: false, optional: true, required: false
  private _deadTimeMultiplier?: number; 
  public get deadTimeMultiplier() {
    return this.getNumberAttribute('dead_time_multiplier');
  }
  public set deadTimeMultiplier(value: number) {
    this._deadTimeMultiplier = value;
  }
  public resetDeadTimeMultiplier() {
    this._deadTimeMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadTimeMultiplierInput() {
    return this._deadTimeMultiplier;
  }

  // enable_keepalive_ack - computed: false, optional: true, required: false
  private _enableKeepaliveAck?: boolean | cdktf.IResolvable; 
  public get enableKeepaliveAck() {
    return this.getBooleanAttribute('enable_keepalive_ack');
  }
  public set enableKeepaliveAck(value: boolean | cdktf.IResolvable) {
    this._enableKeepaliveAck = value;
  }
  public resetEnableKeepaliveAck() {
    this._enableKeepaliveAck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableKeepaliveAckInput() {
    return this._enableKeepaliveAck;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // keepalive_interval - computed: false, optional: true, required: false
  private _keepaliveInterval?: number; 
  public get keepaliveInterval() {
    return this.getNumberAttribute('keepalive_interval');
  }
  public set keepaliveInterval(value: number) {
    this._keepaliveInterval = value;
  }
  public resetKeepaliveInterval() {
    this._keepaliveInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveIntervalInput() {
    return this._keepaliveInterval;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_gre_tunnel nsxt_policy_tier0_gateway_gre_tunnel}
*/
export class PolicyTier0GatewayGreTunnel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_tier0_gateway_gre_tunnel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyTier0GatewayGreTunnel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyTier0GatewayGreTunnel to import
  * @param importFromId The id of the existing PolicyTier0GatewayGreTunnel that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_gre_tunnel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyTier0GatewayGreTunnel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_tier0_gateway_gre_tunnel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_gre_tunnel nsxt_policy_tier0_gateway_gre_tunnel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyTier0GatewayGreTunnelConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyTier0GatewayGreTunnelConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_tier0_gateway_gre_tunnel',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._destinationAddress = config.destinationAddress;
    this._displayName = config.displayName;
    this._enabled = config.enabled;
    this._id = config.id;
    this._localeServicePath = config.localeServicePath;
    this._mtu = config.mtu;
    this._nsxId = config.nsxId;
    this._tag.internalValue = config.tag;
    this._tunnelAddress.internalValue = config.tunnelAddress;
    this._tunnelKeepalive.internalValue = config.tunnelKeepalive;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // destination_address - computed: false, optional: false, required: true
  private _destinationAddress?: string; 
  public get destinationAddress() {
    return this.getStringAttribute('destination_address');
  }
  public set destinationAddress(value: string) {
    this._destinationAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressInput() {
    return this._destinationAddress;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // locale_service_path - computed: false, optional: false, required: true
  private _localeServicePath?: string; 
  public get localeServicePath() {
    return this.getStringAttribute('locale_service_path');
  }
  public set localeServicePath(value: string) {
    this._localeServicePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localeServicePathInput() {
    return this._localeServicePath;
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

  // nsx_id - computed: true, optional: true, required: false
  private _nsxId?: string; 
  public get nsxId() {
    return this.getStringAttribute('nsx_id');
  }
  public set nsxId(value: string) {
    this._nsxId = value;
  }
  public resetNsxId() {
    this._nsxId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxIdInput() {
    return this._nsxId;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new PolicyTier0GatewayGreTunnelTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PolicyTier0GatewayGreTunnelTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // tunnel_address - computed: false, optional: false, required: true
  private _tunnelAddress = new PolicyTier0GatewayGreTunnelTunnelAddressList(this, "tunnel_address", false);
  public get tunnelAddress() {
    return this._tunnelAddress;
  }
  public putTunnelAddress(value: PolicyTier0GatewayGreTunnelTunnelAddress[] | cdktf.IResolvable) {
    this._tunnelAddress.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelAddressInput() {
    return this._tunnelAddress.internalValue;
  }

  // tunnel_keepalive - computed: false, optional: true, required: false
  private _tunnelKeepalive = new PolicyTier0GatewayGreTunnelTunnelKeepaliveOutputReference(this, "tunnel_keepalive");
  public get tunnelKeepalive() {
    return this._tunnelKeepalive;
  }
  public putTunnelKeepalive(value: PolicyTier0GatewayGreTunnelTunnelKeepalive) {
    this._tunnelKeepalive.internalValue = value;
  }
  public resetTunnelKeepalive() {
    this._tunnelKeepalive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelKeepaliveInput() {
    return this._tunnelKeepalive.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      destination_address: cdktf.stringToTerraform(this._destinationAddress),
      display_name: cdktf.stringToTerraform(this._displayName),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      locale_service_path: cdktf.stringToTerraform(this._localeServicePath),
      mtu: cdktf.numberToTerraform(this._mtu),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      tag: cdktf.listMapper(policyTier0GatewayGreTunnelTagToTerraform, true)(this._tag.internalValue),
      tunnel_address: cdktf.listMapper(policyTier0GatewayGreTunnelTunnelAddressToTerraform, true)(this._tunnelAddress.internalValue),
      tunnel_keepalive: policyTier0GatewayGreTunnelTunnelKeepaliveToTerraform(this._tunnelKeepalive.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_address: {
        value: cdktf.stringToHclTerraform(this._destinationAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      locale_service_path: {
        value: cdktf.stringToHclTerraform(this._localeServicePath),
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
      nsx_id: {
        value: cdktf.stringToHclTerraform(this._nsxId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag: {
        value: cdktf.listMapperHcl(policyTier0GatewayGreTunnelTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyTier0GatewayGreTunnelTagList",
      },
      tunnel_address: {
        value: cdktf.listMapperHcl(policyTier0GatewayGreTunnelTunnelAddressToHclTerraform, true)(this._tunnelAddress.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyTier0GatewayGreTunnelTunnelAddressList",
      },
      tunnel_keepalive: {
        value: policyTier0GatewayGreTunnelTunnelKeepaliveToHclTerraform(this._tunnelKeepalive.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyTier0GatewayGreTunnelTunnelKeepaliveList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
