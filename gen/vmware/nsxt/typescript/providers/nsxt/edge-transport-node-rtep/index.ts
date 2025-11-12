// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node_rtep
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EdgeTransportNodeRtepConfig extends cdktf.TerraformMetaArguments {
  /**
  * Edge ID to associate with remote tunnel endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node_rtep#edge_id EdgeTransportNodeRtep#edge_id}
  */
  readonly edgeId: string;
  /**
  * The host switch name to be used for the remote tunnel endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node_rtep#host_switch_name EdgeTransportNodeRtep#host_switch_name}
  */
  readonly hostSwitchName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node_rtep#id EdgeTransportNodeRtep#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The named teaming policy to be used by the remote tunnel endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node_rtep#named_teaming_policy EdgeTransportNodeRtep#named_teaming_policy}
  */
  readonly namedTeamingPolicy?: string;
  /**
  * VLAN id for remote tunnel endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node_rtep#rtep_vlan EdgeTransportNodeRtep#rtep_vlan}
  */
  readonly rtepVlan: number;
  /**
  * ip_assignment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node_rtep#ip_assignment EdgeTransportNodeRtep#ip_assignment}
  */
  readonly ipAssignment: EdgeTransportNodeRtepIpAssignment;
}
export interface EdgeTransportNodeRtepIpAssignmentStaticIp {
  /**
  * Gateway IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node_rtep#default_gateway EdgeTransportNodeRtep#default_gateway}
  */
  readonly defaultGateway: string;
  /**
  * List of IPs for transport node host switch virtual tunnel endpoints
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node_rtep#ip_addresses EdgeTransportNodeRtep#ip_addresses}
  */
  readonly ipAddresses: string[];
  /**
  * Subnet mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node_rtep#subnet_mask EdgeTransportNodeRtep#subnet_mask}
  */
  readonly subnetMask: string;
}

export function edgeTransportNodeRtepIpAssignmentStaticIpToTerraform(struct?: EdgeTransportNodeRtepIpAssignmentStaticIpOutputReference | EdgeTransportNodeRtepIpAssignmentStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gateway: cdktf.stringToTerraform(struct!.defaultGateway),
    ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipAddresses),
    subnet_mask: cdktf.stringToTerraform(struct!.subnetMask),
  }
}


export function edgeTransportNodeRtepIpAssignmentStaticIpToHclTerraform(struct?: EdgeTransportNodeRtepIpAssignmentStaticIpOutputReference | EdgeTransportNodeRtepIpAssignmentStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gateway: {
      value: cdktf.stringToHclTerraform(struct!.defaultGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnet_mask: {
      value: cdktf.stringToHclTerraform(struct!.subnetMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgeTransportNodeRtepIpAssignmentStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EdgeTransportNodeRtepIpAssignmentStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGateway = this._defaultGateway;
    }
    if (this._ipAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddresses = this._ipAddresses;
    }
    if (this._subnetMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetMask = this._subnetMask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgeTransportNodeRtepIpAssignmentStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGateway = undefined;
      this._ipAddresses = undefined;
      this._subnetMask = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGateway = value.defaultGateway;
      this._ipAddresses = value.ipAddresses;
      this._subnetMask = value.subnetMask;
    }
  }

  // default_gateway - computed: false, optional: false, required: true
  private _defaultGateway?: string; 
  public get defaultGateway() {
    return this.getStringAttribute('default_gateway');
  }
  public set defaultGateway(value: string) {
    this._defaultGateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayInput() {
    return this._defaultGateway;
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

  // subnet_mask - computed: false, optional: false, required: true
  private _subnetMask?: string; 
  public get subnetMask() {
    return this.getStringAttribute('subnet_mask');
  }
  public set subnetMask(value: string) {
    this._subnetMask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetMaskInput() {
    return this._subnetMask;
  }
}
export interface EdgeTransportNodeRtepIpAssignmentStaticIpMacIpMacPair {
  /**
  * A single IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node_rtep#ip_address EdgeTransportNodeRtep#ip_address}
  */
  readonly ipAddress: string;
  /**
  * A single MAC address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node_rtep#mac_address EdgeTransportNodeRtep#mac_address}
  */
  readonly macAddress: string;
}

export function edgeTransportNodeRtepIpAssignmentStaticIpMacIpMacPairToTerraform(struct?: EdgeTransportNodeRtepIpAssignmentStaticIpMacIpMacPair | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
  }
}


export function edgeTransportNodeRtepIpAssignmentStaticIpMacIpMacPairToHclTerraform(struct?: EdgeTransportNodeRtepIpAssignmentStaticIpMacIpMacPair | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_address: {
      value: cdktf.stringToHclTerraform(struct!.macAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgeTransportNodeRtepIpAssignmentStaticIpMacIpMacPairOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgeTransportNodeRtepIpAssignmentStaticIpMacIpMacPair | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgeTransportNodeRtepIpAssignmentStaticIpMacIpMacPair | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._macAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._macAddress = value.macAddress;
    }
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // mac_address - computed: false, optional: false, required: true
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }
}

export class EdgeTransportNodeRtepIpAssignmentStaticIpMacIpMacPairList extends cdktf.ComplexList {
  public internalValue? : EdgeTransportNodeRtepIpAssignmentStaticIpMacIpMacPair[] | cdktf.IResolvable

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
  public get(index: number): EdgeTransportNodeRtepIpAssignmentStaticIpMacIpMacPairOutputReference {
    return new EdgeTransportNodeRtepIpAssignmentStaticIpMacIpMacPairOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgeTransportNodeRtepIpAssignmentStaticIpMac {
  /**
  * Gateway IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node_rtep#default_gateway EdgeTransportNodeRtep#default_gateway}
  */
  readonly defaultGateway: string;
  /**
  * Subnet mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node_rtep#subnet_mask EdgeTransportNodeRtep#subnet_mask}
  */
  readonly subnetMask: string;
  /**
  * ip_mac_pair block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node_rtep#ip_mac_pair EdgeTransportNodeRtep#ip_mac_pair}
  */
  readonly ipMacPair: EdgeTransportNodeRtepIpAssignmentStaticIpMacIpMacPair[] | cdktf.IResolvable;
}

export function edgeTransportNodeRtepIpAssignmentStaticIpMacToTerraform(struct?: EdgeTransportNodeRtepIpAssignmentStaticIpMacOutputReference | EdgeTransportNodeRtepIpAssignmentStaticIpMac): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gateway: cdktf.stringToTerraform(struct!.defaultGateway),
    subnet_mask: cdktf.stringToTerraform(struct!.subnetMask),
    ip_mac_pair: cdktf.listMapper(edgeTransportNodeRtepIpAssignmentStaticIpMacIpMacPairToTerraform, true)(struct!.ipMacPair),
  }
}


export function edgeTransportNodeRtepIpAssignmentStaticIpMacToHclTerraform(struct?: EdgeTransportNodeRtepIpAssignmentStaticIpMacOutputReference | EdgeTransportNodeRtepIpAssignmentStaticIpMac): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gateway: {
      value: cdktf.stringToHclTerraform(struct!.defaultGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_mask: {
      value: cdktf.stringToHclTerraform(struct!.subnetMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_mac_pair: {
      value: cdktf.listMapperHcl(edgeTransportNodeRtepIpAssignmentStaticIpMacIpMacPairToHclTerraform, true)(struct!.ipMacPair),
      isBlock: true,
      type: "list",
      storageClassType: "EdgeTransportNodeRtepIpAssignmentStaticIpMacIpMacPairList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgeTransportNodeRtepIpAssignmentStaticIpMacOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EdgeTransportNodeRtepIpAssignmentStaticIpMac | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGateway = this._defaultGateway;
    }
    if (this._subnetMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetMask = this._subnetMask;
    }
    if (this._ipMacPair?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipMacPair = this._ipMacPair?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgeTransportNodeRtepIpAssignmentStaticIpMac | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGateway = undefined;
      this._subnetMask = undefined;
      this._ipMacPair.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGateway = value.defaultGateway;
      this._subnetMask = value.subnetMask;
      this._ipMacPair.internalValue = value.ipMacPair;
    }
  }

  // default_gateway - computed: false, optional: false, required: true
  private _defaultGateway?: string; 
  public get defaultGateway() {
    return this.getStringAttribute('default_gateway');
  }
  public set defaultGateway(value: string) {
    this._defaultGateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayInput() {
    return this._defaultGateway;
  }

  // subnet_mask - computed: false, optional: false, required: true
  private _subnetMask?: string; 
  public get subnetMask() {
    return this.getStringAttribute('subnet_mask');
  }
  public set subnetMask(value: string) {
    this._subnetMask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetMaskInput() {
    return this._subnetMask;
  }

  // ip_mac_pair - computed: false, optional: false, required: true
  private _ipMacPair = new EdgeTransportNodeRtepIpAssignmentStaticIpMacIpMacPairList(this, "ip_mac_pair", false);
  public get ipMacPair() {
    return this._ipMacPair;
  }
  public putIpMacPair(value: EdgeTransportNodeRtepIpAssignmentStaticIpMacIpMacPair[] | cdktf.IResolvable) {
    this._ipMacPair.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMacPairInput() {
    return this._ipMacPair.internalValue;
  }
}
export interface EdgeTransportNodeRtepIpAssignment {
  /**
  * Enables DHCP assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node_rtep#assigned_by_dhcp EdgeTransportNodeRtep#assigned_by_dhcp}
  */
  readonly assignedByDhcp?: boolean | cdktf.IResolvable;
  /**
  * No IPv4 assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node_rtep#no_ipv4 EdgeTransportNodeRtep#no_ipv4}
  */
  readonly noIpv4?: boolean | cdktf.IResolvable;
  /**
  * IP assignment specification for Static IP Pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node_rtep#static_ip_pool EdgeTransportNodeRtep#static_ip_pool}
  */
  readonly staticIpPool?: string;
  /**
  * static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node_rtep#static_ip EdgeTransportNodeRtep#static_ip}
  */
  readonly staticIp?: EdgeTransportNodeRtepIpAssignmentStaticIp;
  /**
  * static_ip_mac block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node_rtep#static_ip_mac EdgeTransportNodeRtep#static_ip_mac}
  */
  readonly staticIpMac?: EdgeTransportNodeRtepIpAssignmentStaticIpMac;
}

export function edgeTransportNodeRtepIpAssignmentToTerraform(struct?: EdgeTransportNodeRtepIpAssignmentOutputReference | EdgeTransportNodeRtepIpAssignment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assigned_by_dhcp: cdktf.booleanToTerraform(struct!.assignedByDhcp),
    no_ipv4: cdktf.booleanToTerraform(struct!.noIpv4),
    static_ip_pool: cdktf.stringToTerraform(struct!.staticIpPool),
    static_ip: edgeTransportNodeRtepIpAssignmentStaticIpToTerraform(struct!.staticIp),
    static_ip_mac: edgeTransportNodeRtepIpAssignmentStaticIpMacToTerraform(struct!.staticIpMac),
  }
}


export function edgeTransportNodeRtepIpAssignmentToHclTerraform(struct?: EdgeTransportNodeRtepIpAssignmentOutputReference | EdgeTransportNodeRtepIpAssignment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assigned_by_dhcp: {
      value: cdktf.booleanToHclTerraform(struct!.assignedByDhcp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_ipv4: {
      value: cdktf.booleanToHclTerraform(struct!.noIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    static_ip_pool: {
      value: cdktf.stringToHclTerraform(struct!.staticIpPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_ip: {
      value: edgeTransportNodeRtepIpAssignmentStaticIpToHclTerraform(struct!.staticIp),
      isBlock: true,
      type: "list",
      storageClassType: "EdgeTransportNodeRtepIpAssignmentStaticIpList",
    },
    static_ip_mac: {
      value: edgeTransportNodeRtepIpAssignmentStaticIpMacToHclTerraform(struct!.staticIpMac),
      isBlock: true,
      type: "list",
      storageClassType: "EdgeTransportNodeRtepIpAssignmentStaticIpMacList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgeTransportNodeRtepIpAssignmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EdgeTransportNodeRtepIpAssignment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignedByDhcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignedByDhcp = this._assignedByDhcp;
    }
    if (this._noIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.noIpv4 = this._noIpv4;
    }
    if (this._staticIpPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIpPool = this._staticIpPool;
    }
    if (this._staticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIp = this._staticIp?.internalValue;
    }
    if (this._staticIpMac?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIpMac = this._staticIpMac?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgeTransportNodeRtepIpAssignment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assignedByDhcp = undefined;
      this._noIpv4 = undefined;
      this._staticIpPool = undefined;
      this._staticIp.internalValue = undefined;
      this._staticIpMac.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assignedByDhcp = value.assignedByDhcp;
      this._noIpv4 = value.noIpv4;
      this._staticIpPool = value.staticIpPool;
      this._staticIp.internalValue = value.staticIp;
      this._staticIpMac.internalValue = value.staticIpMac;
    }
  }

  // assigned_by_dhcp - computed: false, optional: true, required: false
  private _assignedByDhcp?: boolean | cdktf.IResolvable; 
  public get assignedByDhcp() {
    return this.getBooleanAttribute('assigned_by_dhcp');
  }
  public set assignedByDhcp(value: boolean | cdktf.IResolvable) {
    this._assignedByDhcp = value;
  }
  public resetAssignedByDhcp() {
    this._assignedByDhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedByDhcpInput() {
    return this._assignedByDhcp;
  }

  // no_ipv4 - computed: false, optional: true, required: false
  private _noIpv4?: boolean | cdktf.IResolvable; 
  public get noIpv4() {
    return this.getBooleanAttribute('no_ipv4');
  }
  public set noIpv4(value: boolean | cdktf.IResolvable) {
    this._noIpv4 = value;
  }
  public resetNoIpv4() {
    this._noIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noIpv4Input() {
    return this._noIpv4;
  }

  // static_ip_pool - computed: false, optional: true, required: false
  private _staticIpPool?: string; 
  public get staticIpPool() {
    return this.getStringAttribute('static_ip_pool');
  }
  public set staticIpPool(value: string) {
    this._staticIpPool = value;
  }
  public resetStaticIpPool() {
    this._staticIpPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpPoolInput() {
    return this._staticIpPool;
  }

  // static_ip - computed: false, optional: true, required: false
  private _staticIp = new EdgeTransportNodeRtepIpAssignmentStaticIpOutputReference(this, "static_ip");
  public get staticIp() {
    return this._staticIp;
  }
  public putStaticIp(value: EdgeTransportNodeRtepIpAssignmentStaticIp) {
    this._staticIp.internalValue = value;
  }
  public resetStaticIp() {
    this._staticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpInput() {
    return this._staticIp.internalValue;
  }

  // static_ip_mac - computed: false, optional: true, required: false
  private _staticIpMac = new EdgeTransportNodeRtepIpAssignmentStaticIpMacOutputReference(this, "static_ip_mac");
  public get staticIpMac() {
    return this._staticIpMac;
  }
  public putStaticIpMac(value: EdgeTransportNodeRtepIpAssignmentStaticIpMac) {
    this._staticIpMac.internalValue = value;
  }
  public resetStaticIpMac() {
    this._staticIpMac.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpMacInput() {
    return this._staticIpMac.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node_rtep nsxt_edge_transport_node_rtep}
*/
export class EdgeTransportNodeRtep extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_edge_transport_node_rtep";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EdgeTransportNodeRtep resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EdgeTransportNodeRtep to import
  * @param importFromId The id of the existing EdgeTransportNodeRtep that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node_rtep#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EdgeTransportNodeRtep to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_edge_transport_node_rtep", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node_rtep nsxt_edge_transport_node_rtep} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EdgeTransportNodeRtepConfig
  */
  public constructor(scope: Construct, id: string, config: EdgeTransportNodeRtepConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_edge_transport_node_rtep',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.10.0',
        providerVersionConstraint: '3.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._edgeId = config.edgeId;
    this._hostSwitchName = config.hostSwitchName;
    this._id = config.id;
    this._namedTeamingPolicy = config.namedTeamingPolicy;
    this._rtepVlan = config.rtepVlan;
    this._ipAssignment.internalValue = config.ipAssignment;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // edge_id - computed: false, optional: false, required: true
  private _edgeId?: string; 
  public get edgeId() {
    return this.getStringAttribute('edge_id');
  }
  public set edgeId(value: string) {
    this._edgeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeIdInput() {
    return this._edgeId;
  }

  // host_switch_name - computed: false, optional: false, required: true
  private _hostSwitchName?: string; 
  public get hostSwitchName() {
    return this.getStringAttribute('host_switch_name');
  }
  public set hostSwitchName(value: string) {
    this._hostSwitchName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostSwitchNameInput() {
    return this._hostSwitchName;
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

  // named_teaming_policy - computed: false, optional: true, required: false
  private _namedTeamingPolicy?: string; 
  public get namedTeamingPolicy() {
    return this.getStringAttribute('named_teaming_policy');
  }
  public set namedTeamingPolicy(value: string) {
    this._namedTeamingPolicy = value;
  }
  public resetNamedTeamingPolicy() {
    this._namedTeamingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namedTeamingPolicyInput() {
    return this._namedTeamingPolicy;
  }

  // rtep_vlan - computed: false, optional: false, required: true
  private _rtepVlan?: number; 
  public get rtepVlan() {
    return this.getNumberAttribute('rtep_vlan');
  }
  public set rtepVlan(value: number) {
    this._rtepVlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rtepVlanInput() {
    return this._rtepVlan;
  }

  // ip_assignment - computed: false, optional: false, required: true
  private _ipAssignment = new EdgeTransportNodeRtepIpAssignmentOutputReference(this, "ip_assignment");
  public get ipAssignment() {
    return this._ipAssignment;
  }
  public putIpAssignment(value: EdgeTransportNodeRtepIpAssignment) {
    this._ipAssignment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAssignmentInput() {
    return this._ipAssignment.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      edge_id: cdktf.stringToTerraform(this._edgeId),
      host_switch_name: cdktf.stringToTerraform(this._hostSwitchName),
      id: cdktf.stringToTerraform(this._id),
      named_teaming_policy: cdktf.stringToTerraform(this._namedTeamingPolicy),
      rtep_vlan: cdktf.numberToTerraform(this._rtepVlan),
      ip_assignment: edgeTransportNodeRtepIpAssignmentToTerraform(this._ipAssignment.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      edge_id: {
        value: cdktf.stringToHclTerraform(this._edgeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_switch_name: {
        value: cdktf.stringToHclTerraform(this._hostSwitchName),
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
      named_teaming_policy: {
        value: cdktf.stringToHclTerraform(this._namedTeamingPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rtep_vlan: {
        value: cdktf.numberToHclTerraform(this._rtepVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_assignment: {
        value: edgeTransportNodeRtepIpAssignmentToHclTerraform(this._ipAssignment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EdgeTransportNodeRtepIpAssignmentList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
