// https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyHostTransportNodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#description PolicyHostTransportNode#description}
  */
  readonly description?: string;
  /**
  * Discovered node id to create Host Transport Node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#discovered_node_id PolicyHostTransportNode#discovered_node_id}
  */
  readonly discoveredNodeId: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#display_name PolicyHostTransportNode#display_name}
  */
  readonly displayName: string;
  /**
  * ID of the enforcement point this Host Transport Node belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#enforcement_point PolicyHostTransportNode#enforcement_point}
  */
  readonly enforcementPoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#id PolicyHostTransportNode#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#nsx_id PolicyHostTransportNode#nsx_id}
  */
  readonly nsxId?: string;
  /**
  * Indicate whether NSX service should be removed from hypervisor during resource deletion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#remove_nsx_on_destroy PolicyHostTransportNode#remove_nsx_on_destroy}
  */
  readonly removeNsxOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Path to the site this Host Transport Node belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#site_path PolicyHostTransportNode#site_path}
  */
  readonly sitePath?: string;
  /**
  * standard_host_switch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#standard_host_switch PolicyHostTransportNode#standard_host_switch}
  */
  readonly standardHostSwitch: PolicyHostTransportNodeStandardHostSwitch[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#tag PolicyHostTransportNode#tag}
  */
  readonly tag?: PolicyHostTransportNodeTag[] | cdktf.IResolvable;
}
export interface PolicyHostTransportNodeStandardHostSwitchCpuConfig {
  /**
  * Number of Logical cpu cores (Lcores) to be placed on a specified NUMA node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#num_lcores PolicyHostTransportNode#num_lcores}
  */
  readonly numLcores: number;
  /**
  * Unique index of the Non Uniform Memory Access (NUMA) node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#numa_node_index PolicyHostTransportNode#numa_node_index}
  */
  readonly numaNodeIndex: number;
}

export function policyHostTransportNodeStandardHostSwitchCpuConfigToTerraform(struct?: PolicyHostTransportNodeStandardHostSwitchCpuConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    num_lcores: cdktf.numberToTerraform(struct!.numLcores),
    numa_node_index: cdktf.numberToTerraform(struct!.numaNodeIndex),
  }
}


export function policyHostTransportNodeStandardHostSwitchCpuConfigToHclTerraform(struct?: PolicyHostTransportNodeStandardHostSwitchCpuConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    num_lcores: {
      value: cdktf.numberToHclTerraform(struct!.numLcores),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    numa_node_index: {
      value: cdktf.numberToHclTerraform(struct!.numaNodeIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyHostTransportNodeStandardHostSwitchCpuConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyHostTransportNodeStandardHostSwitchCpuConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numLcores !== undefined) {
      hasAnyValues = true;
      internalValueResult.numLcores = this._numLcores;
    }
    if (this._numaNodeIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.numaNodeIndex = this._numaNodeIndex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyHostTransportNodeStandardHostSwitchCpuConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._numLcores = undefined;
      this._numaNodeIndex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._numLcores = value.numLcores;
      this._numaNodeIndex = value.numaNodeIndex;
    }
  }

  // num_lcores - computed: false, optional: false, required: true
  private _numLcores?: number; 
  public get numLcores() {
    return this.getNumberAttribute('num_lcores');
  }
  public set numLcores(value: number) {
    this._numLcores = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numLcoresInput() {
    return this._numLcores;
  }

  // numa_node_index - computed: false, optional: false, required: true
  private _numaNodeIndex?: number; 
  public get numaNodeIndex() {
    return this.getNumberAttribute('numa_node_index');
  }
  public set numaNodeIndex(value: number) {
    this._numaNodeIndex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numaNodeIndexInput() {
    return this._numaNodeIndex;
  }
}

export class PolicyHostTransportNodeStandardHostSwitchCpuConfigList extends cdktf.ComplexList {
  public internalValue? : PolicyHostTransportNodeStandardHostSwitchCpuConfig[] | cdktf.IResolvable

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
  public get(index: number): PolicyHostTransportNodeStandardHostSwitchCpuConfigOutputReference {
    return new PolicyHostTransportNodeStandardHostSwitchCpuConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyHostTransportNodeStandardHostSwitchIpAssignmentStaticIp {
  /**
  * Gateway IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#default_gateway PolicyHostTransportNode#default_gateway}
  */
  readonly defaultGateway: string;
  /**
  * List of IPs for transport node host switch virtual tunnel endpoints
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#ip_addresses PolicyHostTransportNode#ip_addresses}
  */
  readonly ipAddresses: string[];
  /**
  * Subnet mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#subnet_mask PolicyHostTransportNode#subnet_mask}
  */
  readonly subnetMask: string;
}

export function policyHostTransportNodeStandardHostSwitchIpAssignmentStaticIpToTerraform(struct?: PolicyHostTransportNodeStandardHostSwitchIpAssignmentStaticIpOutputReference | PolicyHostTransportNodeStandardHostSwitchIpAssignmentStaticIp): any {
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


export function policyHostTransportNodeStandardHostSwitchIpAssignmentStaticIpToHclTerraform(struct?: PolicyHostTransportNodeStandardHostSwitchIpAssignmentStaticIpOutputReference | PolicyHostTransportNodeStandardHostSwitchIpAssignmentStaticIp): any {
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

export class PolicyHostTransportNodeStandardHostSwitchIpAssignmentStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyHostTransportNodeStandardHostSwitchIpAssignmentStaticIp | undefined {
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

  public set internalValue(value: PolicyHostTransportNodeStandardHostSwitchIpAssignmentStaticIp | undefined) {
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
export interface PolicyHostTransportNodeStandardHostSwitchIpAssignmentStaticIpMacIpMacPair {
  /**
  * A single IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#ip_address PolicyHostTransportNode#ip_address}
  */
  readonly ipAddress: string;
  /**
  * A single MAC address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#mac_address PolicyHostTransportNode#mac_address}
  */
  readonly macAddress: string;
}

export function policyHostTransportNodeStandardHostSwitchIpAssignmentStaticIpMacIpMacPairToTerraform(struct?: PolicyHostTransportNodeStandardHostSwitchIpAssignmentStaticIpMacIpMacPair | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
  }
}


export function policyHostTransportNodeStandardHostSwitchIpAssignmentStaticIpMacIpMacPairToHclTerraform(struct?: PolicyHostTransportNodeStandardHostSwitchIpAssignmentStaticIpMacIpMacPair | cdktf.IResolvable): any {
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

export class PolicyHostTransportNodeStandardHostSwitchIpAssignmentStaticIpMacIpMacPairOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyHostTransportNodeStandardHostSwitchIpAssignmentStaticIpMacIpMacPair | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyHostTransportNodeStandardHostSwitchIpAssignmentStaticIpMacIpMacPair | cdktf.IResolvable | undefined) {
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

export class PolicyHostTransportNodeStandardHostSwitchIpAssignmentStaticIpMacIpMacPairList extends cdktf.ComplexList {
  public internalValue? : PolicyHostTransportNodeStandardHostSwitchIpAssignmentStaticIpMacIpMacPair[] | cdktf.IResolvable

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
  public get(index: number): PolicyHostTransportNodeStandardHostSwitchIpAssignmentStaticIpMacIpMacPairOutputReference {
    return new PolicyHostTransportNodeStandardHostSwitchIpAssignmentStaticIpMacIpMacPairOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyHostTransportNodeStandardHostSwitchIpAssignmentStaticIpMac {
  /**
  * Gateway IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#default_gateway PolicyHostTransportNode#default_gateway}
  */
  readonly defaultGateway: string;
  /**
  * Subnet mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#subnet_mask PolicyHostTransportNode#subnet_mask}
  */
  readonly subnetMask: string;
  /**
  * ip_mac_pair block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#ip_mac_pair PolicyHostTransportNode#ip_mac_pair}
  */
  readonly ipMacPair: PolicyHostTransportNodeStandardHostSwitchIpAssignmentStaticIpMacIpMacPair[] | cdktf.IResolvable;
}

export function policyHostTransportNodeStandardHostSwitchIpAssignmentStaticIpMacToTerraform(struct?: PolicyHostTransportNodeStandardHostSwitchIpAssignmentStaticIpMacOutputReference | PolicyHostTransportNodeStandardHostSwitchIpAssignmentStaticIpMac): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gateway: cdktf.stringToTerraform(struct!.defaultGateway),
    subnet_mask: cdktf.stringToTerraform(struct!.subnetMask),
    ip_mac_pair: cdktf.listMapper(policyHostTransportNodeStandardHostSwitchIpAssignmentStaticIpMacIpMacPairToTerraform, true)(struct!.ipMacPair),
  }
}


export function policyHostTransportNodeStandardHostSwitchIpAssignmentStaticIpMacToHclTerraform(struct?: PolicyHostTransportNodeStandardHostSwitchIpAssignmentStaticIpMacOutputReference | PolicyHostTransportNodeStandardHostSwitchIpAssignmentStaticIpMac): any {
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
      value: cdktf.listMapperHcl(policyHostTransportNodeStandardHostSwitchIpAssignmentStaticIpMacIpMacPairToHclTerraform, true)(struct!.ipMacPair),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyHostTransportNodeStandardHostSwitchIpAssignmentStaticIpMacIpMacPairList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyHostTransportNodeStandardHostSwitchIpAssignmentStaticIpMacOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyHostTransportNodeStandardHostSwitchIpAssignmentStaticIpMac | undefined {
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

  public set internalValue(value: PolicyHostTransportNodeStandardHostSwitchIpAssignmentStaticIpMac | undefined) {
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
  private _ipMacPair = new PolicyHostTransportNodeStandardHostSwitchIpAssignmentStaticIpMacIpMacPairList(this, "ip_mac_pair", false);
  public get ipMacPair() {
    return this._ipMacPair;
  }
  public putIpMacPair(value: PolicyHostTransportNodeStandardHostSwitchIpAssignmentStaticIpMacIpMacPair[] | cdktf.IResolvable) {
    this._ipMacPair.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMacPairInput() {
    return this._ipMacPair.internalValue;
  }
}
export interface PolicyHostTransportNodeStandardHostSwitchIpAssignment {
  /**
  * Enables DHCP assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#assigned_by_dhcp PolicyHostTransportNode#assigned_by_dhcp}
  */
  readonly assignedByDhcp?: boolean | cdktf.IResolvable;
  /**
  * No IPv4 assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#no_ipv4 PolicyHostTransportNode#no_ipv4}
  */
  readonly noIpv4?: boolean | cdktf.IResolvable;
  /**
  * IP assignment specification for Static IP Pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#static_ip_pool PolicyHostTransportNode#static_ip_pool}
  */
  readonly staticIpPool?: string;
  /**
  * static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#static_ip PolicyHostTransportNode#static_ip}
  */
  readonly staticIp?: PolicyHostTransportNodeStandardHostSwitchIpAssignmentStaticIp;
  /**
  * static_ip_mac block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#static_ip_mac PolicyHostTransportNode#static_ip_mac}
  */
  readonly staticIpMac?: PolicyHostTransportNodeStandardHostSwitchIpAssignmentStaticIpMac;
}

export function policyHostTransportNodeStandardHostSwitchIpAssignmentToTerraform(struct?: PolicyHostTransportNodeStandardHostSwitchIpAssignmentOutputReference | PolicyHostTransportNodeStandardHostSwitchIpAssignment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assigned_by_dhcp: cdktf.booleanToTerraform(struct!.assignedByDhcp),
    no_ipv4: cdktf.booleanToTerraform(struct!.noIpv4),
    static_ip_pool: cdktf.stringToTerraform(struct!.staticIpPool),
    static_ip: policyHostTransportNodeStandardHostSwitchIpAssignmentStaticIpToTerraform(struct!.staticIp),
    static_ip_mac: policyHostTransportNodeStandardHostSwitchIpAssignmentStaticIpMacToTerraform(struct!.staticIpMac),
  }
}


export function policyHostTransportNodeStandardHostSwitchIpAssignmentToHclTerraform(struct?: PolicyHostTransportNodeStandardHostSwitchIpAssignmentOutputReference | PolicyHostTransportNodeStandardHostSwitchIpAssignment): any {
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
      value: policyHostTransportNodeStandardHostSwitchIpAssignmentStaticIpToHclTerraform(struct!.staticIp),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyHostTransportNodeStandardHostSwitchIpAssignmentStaticIpList",
    },
    static_ip_mac: {
      value: policyHostTransportNodeStandardHostSwitchIpAssignmentStaticIpMacToHclTerraform(struct!.staticIpMac),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyHostTransportNodeStandardHostSwitchIpAssignmentStaticIpMacList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyHostTransportNodeStandardHostSwitchIpAssignmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyHostTransportNodeStandardHostSwitchIpAssignment | undefined {
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

  public set internalValue(value: PolicyHostTransportNodeStandardHostSwitchIpAssignment | undefined) {
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
  private _staticIp = new PolicyHostTransportNodeStandardHostSwitchIpAssignmentStaticIpOutputReference(this, "static_ip");
  public get staticIp() {
    return this._staticIp;
  }
  public putStaticIp(value: PolicyHostTransportNodeStandardHostSwitchIpAssignmentStaticIp) {
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
  private _staticIpMac = new PolicyHostTransportNodeStandardHostSwitchIpAssignmentStaticIpMacOutputReference(this, "static_ip_mac");
  public get staticIpMac() {
    return this._staticIpMac;
  }
  public putStaticIpMac(value: PolicyHostTransportNodeStandardHostSwitchIpAssignmentStaticIpMac) {
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
export interface PolicyHostTransportNodeStandardHostSwitchIpv6AssignmentStaticIp {
  /**
  * Gateway IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#default_gateway PolicyHostTransportNode#default_gateway}
  */
  readonly defaultGateway: string;
  /**
  * List of IPs for transport node host switch virtual tunnel endpoints
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#ip_addresses PolicyHostTransportNode#ip_addresses}
  */
  readonly ipAddresses: string[];
  /**
  * Prefix length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#prefix_length PolicyHostTransportNode#prefix_length}
  */
  readonly prefixLength: string;
}

export function policyHostTransportNodeStandardHostSwitchIpv6AssignmentStaticIpToTerraform(struct?: PolicyHostTransportNodeStandardHostSwitchIpv6AssignmentStaticIpOutputReference | PolicyHostTransportNodeStandardHostSwitchIpv6AssignmentStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gateway: cdktf.stringToTerraform(struct!.defaultGateway),
    ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipAddresses),
    prefix_length: cdktf.stringToTerraform(struct!.prefixLength),
  }
}


export function policyHostTransportNodeStandardHostSwitchIpv6AssignmentStaticIpToHclTerraform(struct?: PolicyHostTransportNodeStandardHostSwitchIpv6AssignmentStaticIpOutputReference | PolicyHostTransportNodeStandardHostSwitchIpv6AssignmentStaticIp): any {
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
    prefix_length: {
      value: cdktf.stringToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyHostTransportNodeStandardHostSwitchIpv6AssignmentStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyHostTransportNodeStandardHostSwitchIpv6AssignmentStaticIp | undefined {
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
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyHostTransportNodeStandardHostSwitchIpv6AssignmentStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGateway = undefined;
      this._ipAddresses = undefined;
      this._prefixLength = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGateway = value.defaultGateway;
      this._ipAddresses = value.ipAddresses;
      this._prefixLength = value.prefixLength;
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

  // prefix_length - computed: false, optional: false, required: true
  private _prefixLength?: string; 
  public get prefixLength() {
    return this.getStringAttribute('prefix_length');
  }
  public set prefixLength(value: string) {
    this._prefixLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }
}
export interface PolicyHostTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMacIpMacPair {
  /**
  * A single IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#ip_address PolicyHostTransportNode#ip_address}
  */
  readonly ipAddress: string;
  /**
  * A single MAC address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#mac_address PolicyHostTransportNode#mac_address}
  */
  readonly macAddress: string;
}

export function policyHostTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMacIpMacPairToTerraform(struct?: PolicyHostTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMacIpMacPair | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
  }
}


export function policyHostTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMacIpMacPairToHclTerraform(struct?: PolicyHostTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMacIpMacPair | cdktf.IResolvable): any {
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

export class PolicyHostTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMacIpMacPairOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyHostTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMacIpMacPair | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyHostTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMacIpMacPair | cdktf.IResolvable | undefined) {
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

export class PolicyHostTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMacIpMacPairList extends cdktf.ComplexList {
  public internalValue? : PolicyHostTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMacIpMacPair[] | cdktf.IResolvable

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
  public get(index: number): PolicyHostTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMacIpMacPairOutputReference {
    return new PolicyHostTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMacIpMacPairOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyHostTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMac {
  /**
  * Gateway IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#default_gateway PolicyHostTransportNode#default_gateway}
  */
  readonly defaultGateway: string;
  /**
  * Prefix length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#prefix_length PolicyHostTransportNode#prefix_length}
  */
  readonly prefixLength: string;
  /**
  * ip_mac_pair block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#ip_mac_pair PolicyHostTransportNode#ip_mac_pair}
  */
  readonly ipMacPair: PolicyHostTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMacIpMacPair[] | cdktf.IResolvable;
}

export function policyHostTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMacToTerraform(struct?: PolicyHostTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMacOutputReference | PolicyHostTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMac): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gateway: cdktf.stringToTerraform(struct!.defaultGateway),
    prefix_length: cdktf.stringToTerraform(struct!.prefixLength),
    ip_mac_pair: cdktf.listMapper(policyHostTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMacIpMacPairToTerraform, true)(struct!.ipMacPair),
  }
}


export function policyHostTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMacToHclTerraform(struct?: PolicyHostTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMacOutputReference | PolicyHostTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMac): any {
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
    prefix_length: {
      value: cdktf.stringToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_mac_pair: {
      value: cdktf.listMapperHcl(policyHostTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMacIpMacPairToHclTerraform, true)(struct!.ipMacPair),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyHostTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMacIpMacPairList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyHostTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMacOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyHostTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMac | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGateway = this._defaultGateway;
    }
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._ipMacPair?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipMacPair = this._ipMacPair?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyHostTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMac | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGateway = undefined;
      this._prefixLength = undefined;
      this._ipMacPair.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGateway = value.defaultGateway;
      this._prefixLength = value.prefixLength;
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

  // prefix_length - computed: false, optional: false, required: true
  private _prefixLength?: string; 
  public get prefixLength() {
    return this.getStringAttribute('prefix_length');
  }
  public set prefixLength(value: string) {
    this._prefixLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // ip_mac_pair - computed: false, optional: false, required: true
  private _ipMacPair = new PolicyHostTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMacIpMacPairList(this, "ip_mac_pair", false);
  public get ipMacPair() {
    return this._ipMacPair;
  }
  public putIpMacPair(value: PolicyHostTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMacIpMacPair[] | cdktf.IResolvable) {
    this._ipMacPair.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMacPairInput() {
    return this._ipMacPair.internalValue;
  }
}
export interface PolicyHostTransportNodeStandardHostSwitchIpv6Assignment {
  /**
  * Enables autoconf assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#assigned_by_autoconf PolicyHostTransportNode#assigned_by_autoconf}
  */
  readonly assignedByAutoconf?: boolean | cdktf.IResolvable;
  /**
  * Enables DHCPv6 assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#assigned_by_dhcpv6 PolicyHostTransportNode#assigned_by_dhcpv6}
  */
  readonly assignedByDhcpv6?: boolean | cdktf.IResolvable;
  /**
  * No IPv6 assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#no_ipv6 PolicyHostTransportNode#no_ipv6}
  */
  readonly noIpv6?: boolean | cdktf.IResolvable;
  /**
  * IP assignment specification for Static IP Pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#static_ip_pool PolicyHostTransportNode#static_ip_pool}
  */
  readonly staticIpPool?: string;
  /**
  * static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#static_ip PolicyHostTransportNode#static_ip}
  */
  readonly staticIp?: PolicyHostTransportNodeStandardHostSwitchIpv6AssignmentStaticIp;
  /**
  * static_ip_mac block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#static_ip_mac PolicyHostTransportNode#static_ip_mac}
  */
  readonly staticIpMac?: PolicyHostTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMac;
}

export function policyHostTransportNodeStandardHostSwitchIpv6AssignmentToTerraform(struct?: PolicyHostTransportNodeStandardHostSwitchIpv6AssignmentOutputReference | PolicyHostTransportNodeStandardHostSwitchIpv6Assignment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assigned_by_autoconf: cdktf.booleanToTerraform(struct!.assignedByAutoconf),
    assigned_by_dhcpv6: cdktf.booleanToTerraform(struct!.assignedByDhcpv6),
    no_ipv6: cdktf.booleanToTerraform(struct!.noIpv6),
    static_ip_pool: cdktf.stringToTerraform(struct!.staticIpPool),
    static_ip: policyHostTransportNodeStandardHostSwitchIpv6AssignmentStaticIpToTerraform(struct!.staticIp),
    static_ip_mac: policyHostTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMacToTerraform(struct!.staticIpMac),
  }
}


export function policyHostTransportNodeStandardHostSwitchIpv6AssignmentToHclTerraform(struct?: PolicyHostTransportNodeStandardHostSwitchIpv6AssignmentOutputReference | PolicyHostTransportNodeStandardHostSwitchIpv6Assignment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assigned_by_autoconf: {
      value: cdktf.booleanToHclTerraform(struct!.assignedByAutoconf),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    assigned_by_dhcpv6: {
      value: cdktf.booleanToHclTerraform(struct!.assignedByDhcpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_ipv6: {
      value: cdktf.booleanToHclTerraform(struct!.noIpv6),
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
      value: policyHostTransportNodeStandardHostSwitchIpv6AssignmentStaticIpToHclTerraform(struct!.staticIp),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyHostTransportNodeStandardHostSwitchIpv6AssignmentStaticIpList",
    },
    static_ip_mac: {
      value: policyHostTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMacToHclTerraform(struct!.staticIpMac),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyHostTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMacList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyHostTransportNodeStandardHostSwitchIpv6AssignmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyHostTransportNodeStandardHostSwitchIpv6Assignment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignedByAutoconf !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignedByAutoconf = this._assignedByAutoconf;
    }
    if (this._assignedByDhcpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignedByDhcpv6 = this._assignedByDhcpv6;
    }
    if (this._noIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.noIpv6 = this._noIpv6;
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

  public set internalValue(value: PolicyHostTransportNodeStandardHostSwitchIpv6Assignment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assignedByAutoconf = undefined;
      this._assignedByDhcpv6 = undefined;
      this._noIpv6 = undefined;
      this._staticIpPool = undefined;
      this._staticIp.internalValue = undefined;
      this._staticIpMac.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assignedByAutoconf = value.assignedByAutoconf;
      this._assignedByDhcpv6 = value.assignedByDhcpv6;
      this._noIpv6 = value.noIpv6;
      this._staticIpPool = value.staticIpPool;
      this._staticIp.internalValue = value.staticIp;
      this._staticIpMac.internalValue = value.staticIpMac;
    }
  }

  // assigned_by_autoconf - computed: false, optional: true, required: false
  private _assignedByAutoconf?: boolean | cdktf.IResolvable; 
  public get assignedByAutoconf() {
    return this.getBooleanAttribute('assigned_by_autoconf');
  }
  public set assignedByAutoconf(value: boolean | cdktf.IResolvable) {
    this._assignedByAutoconf = value;
  }
  public resetAssignedByAutoconf() {
    this._assignedByAutoconf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedByAutoconfInput() {
    return this._assignedByAutoconf;
  }

  // assigned_by_dhcpv6 - computed: false, optional: true, required: false
  private _assignedByDhcpv6?: boolean | cdktf.IResolvable; 
  public get assignedByDhcpv6() {
    return this.getBooleanAttribute('assigned_by_dhcpv6');
  }
  public set assignedByDhcpv6(value: boolean | cdktf.IResolvable) {
    this._assignedByDhcpv6 = value;
  }
  public resetAssignedByDhcpv6() {
    this._assignedByDhcpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedByDhcpv6Input() {
    return this._assignedByDhcpv6;
  }

  // no_ipv6 - computed: false, optional: true, required: false
  private _noIpv6?: boolean | cdktf.IResolvable; 
  public get noIpv6() {
    return this.getBooleanAttribute('no_ipv6');
  }
  public set noIpv6(value: boolean | cdktf.IResolvable) {
    this._noIpv6 = value;
  }
  public resetNoIpv6() {
    this._noIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noIpv6Input() {
    return this._noIpv6;
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
  private _staticIp = new PolicyHostTransportNodeStandardHostSwitchIpv6AssignmentStaticIpOutputReference(this, "static_ip");
  public get staticIp() {
    return this._staticIp;
  }
  public putStaticIp(value: PolicyHostTransportNodeStandardHostSwitchIpv6AssignmentStaticIp) {
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
  private _staticIpMac = new PolicyHostTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMacOutputReference(this, "static_ip_mac");
  public get staticIpMac() {
    return this._staticIpMac;
  }
  public putStaticIpMac(value: PolicyHostTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMac) {
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
export interface PolicyHostTransportNodeStandardHostSwitchPnic {
  /**
  * Device name or key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#device_name PolicyHostTransportNode#device_name}
  */
  readonly deviceName: string;
  /**
  * Uplink name for this Pnic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#uplink_name PolicyHostTransportNode#uplink_name}
  */
  readonly uplinkName: string;
}

export function policyHostTransportNodeStandardHostSwitchPnicToTerraform(struct?: PolicyHostTransportNodeStandardHostSwitchPnic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    uplink_name: cdktf.stringToTerraform(struct!.uplinkName),
  }
}


export function policyHostTransportNodeStandardHostSwitchPnicToHclTerraform(struct?: PolicyHostTransportNodeStandardHostSwitchPnic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_name: {
      value: cdktf.stringToHclTerraform(struct!.deviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uplink_name: {
      value: cdktf.stringToHclTerraform(struct!.uplinkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyHostTransportNodeStandardHostSwitchPnicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyHostTransportNodeStandardHostSwitchPnic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceName = this._deviceName;
    }
    if (this._uplinkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.uplinkName = this._uplinkName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyHostTransportNodeStandardHostSwitchPnic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceName = undefined;
      this._uplinkName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceName = value.deviceName;
      this._uplinkName = value.uplinkName;
    }
  }

  // device_name - computed: false, optional: false, required: true
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // uplink_name - computed: false, optional: false, required: true
  private _uplinkName?: string; 
  public get uplinkName() {
    return this.getStringAttribute('uplink_name');
  }
  public set uplinkName(value: string) {
    this._uplinkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkNameInput() {
    return this._uplinkName;
  }
}

export class PolicyHostTransportNodeStandardHostSwitchPnicList extends cdktf.ComplexList {
  public internalValue? : PolicyHostTransportNodeStandardHostSwitchPnic[] | cdktf.IResolvable

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
  public get(index: number): PolicyHostTransportNodeStandardHostSwitchPnicOutputReference {
    return new PolicyHostTransportNodeStandardHostSwitchPnicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIp {
  /**
  * Gateway IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#default_gateway PolicyHostTransportNode#default_gateway}
  */
  readonly defaultGateway: string;
  /**
  * List of IPs for transport node host switch virtual tunnel endpoints
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#ip_addresses PolicyHostTransportNode#ip_addresses}
  */
  readonly ipAddresses: string[];
  /**
  * Subnet mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#subnet_mask PolicyHostTransportNode#subnet_mask}
  */
  readonly subnetMask: string;
}

export function policyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpToTerraform(struct?: PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpOutputReference | PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIp): any {
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


export function policyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpToHclTerraform(struct?: PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpOutputReference | PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIp): any {
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

export class PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIp | undefined {
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

  public set internalValue(value: PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIp | undefined) {
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
export interface PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMacIpMacPair {
  /**
  * A single IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#ip_address PolicyHostTransportNode#ip_address}
  */
  readonly ipAddress: string;
  /**
  * A single MAC address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#mac_address PolicyHostTransportNode#mac_address}
  */
  readonly macAddress: string;
}

export function policyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMacIpMacPairToTerraform(struct?: PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMacIpMacPair | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
  }
}


export function policyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMacIpMacPairToHclTerraform(struct?: PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMacIpMacPair | cdktf.IResolvable): any {
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

export class PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMacIpMacPairOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMacIpMacPair | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMacIpMacPair | cdktf.IResolvable | undefined) {
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

export class PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMacIpMacPairList extends cdktf.ComplexList {
  public internalValue? : PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMacIpMacPair[] | cdktf.IResolvable

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
  public get(index: number): PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMacIpMacPairOutputReference {
    return new PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMacIpMacPairOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMac {
  /**
  * Gateway IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#default_gateway PolicyHostTransportNode#default_gateway}
  */
  readonly defaultGateway: string;
  /**
  * Subnet mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#subnet_mask PolicyHostTransportNode#subnet_mask}
  */
  readonly subnetMask: string;
  /**
  * ip_mac_pair block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#ip_mac_pair PolicyHostTransportNode#ip_mac_pair}
  */
  readonly ipMacPair: PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMacIpMacPair[] | cdktf.IResolvable;
}

export function policyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMacToTerraform(struct?: PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMacOutputReference | PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMac): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gateway: cdktf.stringToTerraform(struct!.defaultGateway),
    subnet_mask: cdktf.stringToTerraform(struct!.subnetMask),
    ip_mac_pair: cdktf.listMapper(policyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMacIpMacPairToTerraform, true)(struct!.ipMacPair),
  }
}


export function policyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMacToHclTerraform(struct?: PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMacOutputReference | PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMac): any {
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
      value: cdktf.listMapperHcl(policyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMacIpMacPairToHclTerraform, true)(struct!.ipMacPair),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMacIpMacPairList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMacOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMac | undefined {
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

  public set internalValue(value: PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMac | undefined) {
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
  private _ipMacPair = new PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMacIpMacPairList(this, "ip_mac_pair", false);
  public get ipMacPair() {
    return this._ipMacPair;
  }
  public putIpMacPair(value: PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMacIpMacPair[] | cdktf.IResolvable) {
    this._ipMacPair.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMacPairInput() {
    return this._ipMacPair.internalValue;
  }
}
export interface PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignment {
  /**
  * Enables DHCP assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#assigned_by_dhcp PolicyHostTransportNode#assigned_by_dhcp}
  */
  readonly assignedByDhcp?: boolean | cdktf.IResolvable;
  /**
  * No IPv4 assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#no_ipv4 PolicyHostTransportNode#no_ipv4}
  */
  readonly noIpv4?: boolean | cdktf.IResolvable;
  /**
  * IP assignment specification for Static IP Pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#static_ip_pool PolicyHostTransportNode#static_ip_pool}
  */
  readonly staticIpPool?: string;
  /**
  * static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#static_ip PolicyHostTransportNode#static_ip}
  */
  readonly staticIp?: PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIp;
  /**
  * static_ip_mac block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#static_ip_mac PolicyHostTransportNode#static_ip_mac}
  */
  readonly staticIpMac?: PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMac;
}

export function policyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentToTerraform(struct?: PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentOutputReference | PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assigned_by_dhcp: cdktf.booleanToTerraform(struct!.assignedByDhcp),
    no_ipv4: cdktf.booleanToTerraform(struct!.noIpv4),
    static_ip_pool: cdktf.stringToTerraform(struct!.staticIpPool),
    static_ip: policyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpToTerraform(struct!.staticIp),
    static_ip_mac: policyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMacToTerraform(struct!.staticIpMac),
  }
}


export function policyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentToHclTerraform(struct?: PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentOutputReference | PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignment): any {
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
      value: policyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpToHclTerraform(struct!.staticIp),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpList",
    },
    static_ip_mac: {
      value: policyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMacToHclTerraform(struct!.staticIpMac),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMacList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignment | undefined {
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

  public set internalValue(value: PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignment | undefined) {
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
  private _staticIp = new PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpOutputReference(this, "static_ip");
  public get staticIp() {
    return this._staticIp;
  }
  public putStaticIp(value: PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIp) {
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
  private _staticIpMac = new PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMacOutputReference(this, "static_ip_mac");
  public get staticIpMac() {
    return this._staticIpMac;
  }
  public putStaticIpMac(value: PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMac) {
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
export interface PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIp {
  /**
  * Gateway IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#default_gateway PolicyHostTransportNode#default_gateway}
  */
  readonly defaultGateway: string;
  /**
  * List of IPs for transport node host switch virtual tunnel endpoints
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#ip_addresses PolicyHostTransportNode#ip_addresses}
  */
  readonly ipAddresses: string[];
  /**
  * Prefix length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#prefix_length PolicyHostTransportNode#prefix_length}
  */
  readonly prefixLength: string;
}

export function policyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpToTerraform(struct?: PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpOutputReference | PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gateway: cdktf.stringToTerraform(struct!.defaultGateway),
    ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipAddresses),
    prefix_length: cdktf.stringToTerraform(struct!.prefixLength),
  }
}


export function policyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpToHclTerraform(struct?: PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpOutputReference | PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIp): any {
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
    prefix_length: {
      value: cdktf.stringToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIp | undefined {
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
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGateway = undefined;
      this._ipAddresses = undefined;
      this._prefixLength = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGateway = value.defaultGateway;
      this._ipAddresses = value.ipAddresses;
      this._prefixLength = value.prefixLength;
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

  // prefix_length - computed: false, optional: false, required: true
  private _prefixLength?: string; 
  public get prefixLength() {
    return this.getStringAttribute('prefix_length');
  }
  public set prefixLength(value: string) {
    this._prefixLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }
}
export interface PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMacIpMacPair {
  /**
  * A single IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#ip_address PolicyHostTransportNode#ip_address}
  */
  readonly ipAddress: string;
  /**
  * A single MAC address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#mac_address PolicyHostTransportNode#mac_address}
  */
  readonly macAddress: string;
}

export function policyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMacIpMacPairToTerraform(struct?: PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMacIpMacPair | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
  }
}


export function policyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMacIpMacPairToHclTerraform(struct?: PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMacIpMacPair | cdktf.IResolvable): any {
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

export class PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMacIpMacPairOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMacIpMacPair | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMacIpMacPair | cdktf.IResolvable | undefined) {
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

export class PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMacIpMacPairList extends cdktf.ComplexList {
  public internalValue? : PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMacIpMacPair[] | cdktf.IResolvable

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
  public get(index: number): PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMacIpMacPairOutputReference {
    return new PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMacIpMacPairOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMac {
  /**
  * Gateway IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#default_gateway PolicyHostTransportNode#default_gateway}
  */
  readonly defaultGateway: string;
  /**
  * Prefix length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#prefix_length PolicyHostTransportNode#prefix_length}
  */
  readonly prefixLength: string;
  /**
  * ip_mac_pair block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#ip_mac_pair PolicyHostTransportNode#ip_mac_pair}
  */
  readonly ipMacPair: PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMacIpMacPair[] | cdktf.IResolvable;
}

export function policyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMacToTerraform(struct?: PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMacOutputReference | PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMac): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gateway: cdktf.stringToTerraform(struct!.defaultGateway),
    prefix_length: cdktf.stringToTerraform(struct!.prefixLength),
    ip_mac_pair: cdktf.listMapper(policyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMacIpMacPairToTerraform, true)(struct!.ipMacPair),
  }
}


export function policyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMacToHclTerraform(struct?: PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMacOutputReference | PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMac): any {
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
    prefix_length: {
      value: cdktf.stringToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_mac_pair: {
      value: cdktf.listMapperHcl(policyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMacIpMacPairToHclTerraform, true)(struct!.ipMacPair),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMacIpMacPairList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMacOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMac | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGateway = this._defaultGateway;
    }
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._ipMacPair?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipMacPair = this._ipMacPair?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMac | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGateway = undefined;
      this._prefixLength = undefined;
      this._ipMacPair.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGateway = value.defaultGateway;
      this._prefixLength = value.prefixLength;
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

  // prefix_length - computed: false, optional: false, required: true
  private _prefixLength?: string; 
  public get prefixLength() {
    return this.getStringAttribute('prefix_length');
  }
  public set prefixLength(value: string) {
    this._prefixLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // ip_mac_pair - computed: false, optional: false, required: true
  private _ipMacPair = new PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMacIpMacPairList(this, "ip_mac_pair", false);
  public get ipMacPair() {
    return this._ipMacPair;
  }
  public putIpMacPair(value: PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMacIpMacPair[] | cdktf.IResolvable) {
    this._ipMacPair.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMacPairInput() {
    return this._ipMacPair.internalValue;
  }
}
export interface PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6Assignment {
  /**
  * Enables autoconf assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#assigned_by_autoconf PolicyHostTransportNode#assigned_by_autoconf}
  */
  readonly assignedByAutoconf?: boolean | cdktf.IResolvable;
  /**
  * Enables DHCPv6 assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#assigned_by_dhcpv6 PolicyHostTransportNode#assigned_by_dhcpv6}
  */
  readonly assignedByDhcpv6?: boolean | cdktf.IResolvable;
  /**
  * No IPv6 assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#no_ipv6 PolicyHostTransportNode#no_ipv6}
  */
  readonly noIpv6?: boolean | cdktf.IResolvable;
  /**
  * IP assignment specification for Static IP Pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#static_ip_pool PolicyHostTransportNode#static_ip_pool}
  */
  readonly staticIpPool?: string;
  /**
  * static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#static_ip PolicyHostTransportNode#static_ip}
  */
  readonly staticIp?: PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIp;
  /**
  * static_ip_mac block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#static_ip_mac PolicyHostTransportNode#static_ip_mac}
  */
  readonly staticIpMac?: PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMac;
}

export function policyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentToTerraform(struct?: PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentOutputReference | PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6Assignment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assigned_by_autoconf: cdktf.booleanToTerraform(struct!.assignedByAutoconf),
    assigned_by_dhcpv6: cdktf.booleanToTerraform(struct!.assignedByDhcpv6),
    no_ipv6: cdktf.booleanToTerraform(struct!.noIpv6),
    static_ip_pool: cdktf.stringToTerraform(struct!.staticIpPool),
    static_ip: policyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpToTerraform(struct!.staticIp),
    static_ip_mac: policyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMacToTerraform(struct!.staticIpMac),
  }
}


export function policyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentToHclTerraform(struct?: PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentOutputReference | PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6Assignment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assigned_by_autoconf: {
      value: cdktf.booleanToHclTerraform(struct!.assignedByAutoconf),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    assigned_by_dhcpv6: {
      value: cdktf.booleanToHclTerraform(struct!.assignedByDhcpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_ipv6: {
      value: cdktf.booleanToHclTerraform(struct!.noIpv6),
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
      value: policyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpToHclTerraform(struct!.staticIp),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpList",
    },
    static_ip_mac: {
      value: policyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMacToHclTerraform(struct!.staticIpMac),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMacList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6Assignment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignedByAutoconf !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignedByAutoconf = this._assignedByAutoconf;
    }
    if (this._assignedByDhcpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignedByDhcpv6 = this._assignedByDhcpv6;
    }
    if (this._noIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.noIpv6 = this._noIpv6;
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

  public set internalValue(value: PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6Assignment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assignedByAutoconf = undefined;
      this._assignedByDhcpv6 = undefined;
      this._noIpv6 = undefined;
      this._staticIpPool = undefined;
      this._staticIp.internalValue = undefined;
      this._staticIpMac.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assignedByAutoconf = value.assignedByAutoconf;
      this._assignedByDhcpv6 = value.assignedByDhcpv6;
      this._noIpv6 = value.noIpv6;
      this._staticIpPool = value.staticIpPool;
      this._staticIp.internalValue = value.staticIp;
      this._staticIpMac.internalValue = value.staticIpMac;
    }
  }

  // assigned_by_autoconf - computed: false, optional: true, required: false
  private _assignedByAutoconf?: boolean | cdktf.IResolvable; 
  public get assignedByAutoconf() {
    return this.getBooleanAttribute('assigned_by_autoconf');
  }
  public set assignedByAutoconf(value: boolean | cdktf.IResolvable) {
    this._assignedByAutoconf = value;
  }
  public resetAssignedByAutoconf() {
    this._assignedByAutoconf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedByAutoconfInput() {
    return this._assignedByAutoconf;
  }

  // assigned_by_dhcpv6 - computed: false, optional: true, required: false
  private _assignedByDhcpv6?: boolean | cdktf.IResolvable; 
  public get assignedByDhcpv6() {
    return this.getBooleanAttribute('assigned_by_dhcpv6');
  }
  public set assignedByDhcpv6(value: boolean | cdktf.IResolvable) {
    this._assignedByDhcpv6 = value;
  }
  public resetAssignedByDhcpv6() {
    this._assignedByDhcpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedByDhcpv6Input() {
    return this._assignedByDhcpv6;
  }

  // no_ipv6 - computed: false, optional: true, required: false
  private _noIpv6?: boolean | cdktf.IResolvable; 
  public get noIpv6() {
    return this.getBooleanAttribute('no_ipv6');
  }
  public set noIpv6(value: boolean | cdktf.IResolvable) {
    this._noIpv6 = value;
  }
  public resetNoIpv6() {
    this._noIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noIpv6Input() {
    return this._noIpv6;
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
  private _staticIp = new PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpOutputReference(this, "static_ip");
  public get staticIp() {
    return this._staticIp;
  }
  public putStaticIp(value: PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIp) {
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
  private _staticIpMac = new PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMacOutputReference(this, "static_ip_mac");
  public get staticIpMac() {
    return this._staticIpMac;
  }
  public putStaticIpMac(value: PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMac) {
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
export interface PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionUplink {
  /**
  * Uplink name from UplinkHostSwitch profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#uplink_name PolicyHostTransportNode#uplink_name}
  */
  readonly uplinkName: string;
  /**
  * Link Aggregation Group (LAG) name of Virtual Distributed Switch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#vds_lag_name PolicyHostTransportNode#vds_lag_name}
  */
  readonly vdsLagName?: string;
  /**
  * Uplink name of VMware vSphere Distributed Switch (VDS)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#vds_uplink_name PolicyHostTransportNode#vds_uplink_name}
  */
  readonly vdsUplinkName?: string;
}

export function policyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionUplinkToTerraform(struct?: PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionUplink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uplink_name: cdktf.stringToTerraform(struct!.uplinkName),
    vds_lag_name: cdktf.stringToTerraform(struct!.vdsLagName),
    vds_uplink_name: cdktf.stringToTerraform(struct!.vdsUplinkName),
  }
}


export function policyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionUplinkToHclTerraform(struct?: PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionUplink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uplink_name: {
      value: cdktf.stringToHclTerraform(struct!.uplinkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vds_lag_name: {
      value: cdktf.stringToHclTerraform(struct!.vdsLagName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vds_uplink_name: {
      value: cdktf.stringToHclTerraform(struct!.vdsUplinkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionUplinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionUplink | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uplinkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.uplinkName = this._uplinkName;
    }
    if (this._vdsLagName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vdsLagName = this._vdsLagName;
    }
    if (this._vdsUplinkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vdsUplinkName = this._vdsUplinkName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionUplink | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._uplinkName = undefined;
      this._vdsLagName = undefined;
      this._vdsUplinkName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._uplinkName = value.uplinkName;
      this._vdsLagName = value.vdsLagName;
      this._vdsUplinkName = value.vdsUplinkName;
    }
  }

  // uplink_name - computed: false, optional: false, required: true
  private _uplinkName?: string; 
  public get uplinkName() {
    return this.getStringAttribute('uplink_name');
  }
  public set uplinkName(value: string) {
    this._uplinkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkNameInput() {
    return this._uplinkName;
  }

  // vds_lag_name - computed: false, optional: true, required: false
  private _vdsLagName?: string; 
  public get vdsLagName() {
    return this.getStringAttribute('vds_lag_name');
  }
  public set vdsLagName(value: string) {
    this._vdsLagName = value;
  }
  public resetVdsLagName() {
    this._vdsLagName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdsLagNameInput() {
    return this._vdsLagName;
  }

  // vds_uplink_name - computed: false, optional: true, required: false
  private _vdsUplinkName?: string; 
  public get vdsUplinkName() {
    return this.getStringAttribute('vds_uplink_name');
  }
  public set vdsUplinkName(value: string) {
    this._vdsUplinkName = value;
  }
  public resetVdsUplinkName() {
    this._vdsUplinkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdsUplinkNameInput() {
    return this._vdsUplinkName;
  }
}

export class PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionUplinkList extends cdktf.ComplexList {
  public internalValue? : PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionUplink[] | cdktf.IResolvable

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
  public get(index: number): PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionUplinkOutputReference {
    return new PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionUplinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOption {
  /**
  * The host switch id. This ID will be used to reference a host switch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#host_switch_id PolicyHostTransportNode#host_switch_id}
  */
  readonly hostSwitchId?: string;
  /**
  * Identifiers of host switch profiles to be associated with this host switch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#host_switch_profile PolicyHostTransportNode#host_switch_profile}
  */
  readonly hostSwitchProfile?: string[];
  /**
  * Host switch uplink profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#uplink_profile PolicyHostTransportNode#uplink_profile}
  */
  readonly uplinkProfile?: string;
  /**
  * Host switch high availability profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#vtep_ha_profile PolicyHostTransportNode#vtep_ha_profile}
  */
  readonly vtepHaProfile?: string;
  /**
  * ip_assignment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#ip_assignment PolicyHostTransportNode#ip_assignment}
  */
  readonly ipAssignment?: PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignment;
  /**
  * ipv6_assignment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#ipv6_assignment PolicyHostTransportNode#ipv6_assignment}
  */
  readonly ipv6Assignment?: PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6Assignment;
  /**
  * uplink block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#uplink PolicyHostTransportNode#uplink}
  */
  readonly uplink?: PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionUplink[] | cdktf.IResolvable;
}

export function policyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionToTerraform(struct?: PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionOutputReference | PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_switch_id: cdktf.stringToTerraform(struct!.hostSwitchId),
    host_switch_profile: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hostSwitchProfile),
    uplink_profile: cdktf.stringToTerraform(struct!.uplinkProfile),
    vtep_ha_profile: cdktf.stringToTerraform(struct!.vtepHaProfile),
    ip_assignment: policyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentToTerraform(struct!.ipAssignment),
    ipv6_assignment: policyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentToTerraform(struct!.ipv6Assignment),
    uplink: cdktf.listMapper(policyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionUplinkToTerraform, true)(struct!.uplink),
  }
}


export function policyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionToHclTerraform(struct?: PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionOutputReference | PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_switch_id: {
      value: cdktf.stringToHclTerraform(struct!.hostSwitchId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_switch_profile: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hostSwitchProfile),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    uplink_profile: {
      value: cdktf.stringToHclTerraform(struct!.uplinkProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vtep_ha_profile: {
      value: cdktf.stringToHclTerraform(struct!.vtepHaProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_assignment: {
      value: policyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentToHclTerraform(struct!.ipAssignment),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentList",
    },
    ipv6_assignment: {
      value: policyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentToHclTerraform(struct!.ipv6Assignment),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentList",
    },
    uplink: {
      value: cdktf.listMapperHcl(policyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionUplinkToHclTerraform, true)(struct!.uplink),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionUplinkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostSwitchId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostSwitchId = this._hostSwitchId;
    }
    if (this._hostSwitchProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostSwitchProfile = this._hostSwitchProfile;
    }
    if (this._uplinkProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.uplinkProfile = this._uplinkProfile;
    }
    if (this._vtepHaProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.vtepHaProfile = this._vtepHaProfile;
    }
    if (this._ipAssignment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAssignment = this._ipAssignment?.internalValue;
    }
    if (this._ipv6Assignment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Assignment = this._ipv6Assignment?.internalValue;
    }
    if (this._uplink?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uplink = this._uplink?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostSwitchId = undefined;
      this._hostSwitchProfile = undefined;
      this._uplinkProfile = undefined;
      this._vtepHaProfile = undefined;
      this._ipAssignment.internalValue = undefined;
      this._ipv6Assignment.internalValue = undefined;
      this._uplink.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostSwitchId = value.hostSwitchId;
      this._hostSwitchProfile = value.hostSwitchProfile;
      this._uplinkProfile = value.uplinkProfile;
      this._vtepHaProfile = value.vtepHaProfile;
      this._ipAssignment.internalValue = value.ipAssignment;
      this._ipv6Assignment.internalValue = value.ipv6Assignment;
      this._uplink.internalValue = value.uplink;
    }
  }

  // host_switch_id - computed: false, optional: true, required: false
  private _hostSwitchId?: string; 
  public get hostSwitchId() {
    return this.getStringAttribute('host_switch_id');
  }
  public set hostSwitchId(value: string) {
    this._hostSwitchId = value;
  }
  public resetHostSwitchId() {
    this._hostSwitchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostSwitchIdInput() {
    return this._hostSwitchId;
  }

  // host_switch_profile - computed: true, optional: true, required: false
  private _hostSwitchProfile?: string[]; 
  public get hostSwitchProfile() {
    return this.getListAttribute('host_switch_profile');
  }
  public set hostSwitchProfile(value: string[]) {
    this._hostSwitchProfile = value;
  }
  public resetHostSwitchProfile() {
    this._hostSwitchProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostSwitchProfileInput() {
    return this._hostSwitchProfile;
  }

  // uplink_profile - computed: true, optional: true, required: false
  private _uplinkProfile?: string; 
  public get uplinkProfile() {
    return this.getStringAttribute('uplink_profile');
  }
  public set uplinkProfile(value: string) {
    this._uplinkProfile = value;
  }
  public resetUplinkProfile() {
    this._uplinkProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkProfileInput() {
    return this._uplinkProfile;
  }

  // vtep_ha_profile - computed: true, optional: true, required: false
  private _vtepHaProfile?: string; 
  public get vtepHaProfile() {
    return this.getStringAttribute('vtep_ha_profile');
  }
  public set vtepHaProfile(value: string) {
    this._vtepHaProfile = value;
  }
  public resetVtepHaProfile() {
    this._vtepHaProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vtepHaProfileInput() {
    return this._vtepHaProfile;
  }

  // ip_assignment - computed: false, optional: true, required: false
  private _ipAssignment = new PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentOutputReference(this, "ip_assignment");
  public get ipAssignment() {
    return this._ipAssignment;
  }
  public putIpAssignment(value: PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignment) {
    this._ipAssignment.internalValue = value;
  }
  public resetIpAssignment() {
    this._ipAssignment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAssignmentInput() {
    return this._ipAssignment.internalValue;
  }

  // ipv6_assignment - computed: false, optional: true, required: false
  private _ipv6Assignment = new PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentOutputReference(this, "ipv6_assignment");
  public get ipv6Assignment() {
    return this._ipv6Assignment;
  }
  public putIpv6Assignment(value: PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6Assignment) {
    this._ipv6Assignment.internalValue = value;
  }
  public resetIpv6Assignment() {
    this._ipv6Assignment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AssignmentInput() {
    return this._ipv6Assignment.internalValue;
  }

  // uplink - computed: false, optional: true, required: false
  private _uplink = new PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionUplinkList(this, "uplink", false);
  public get uplink() {
    return this._uplink;
  }
  public putUplink(value: PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionUplink[] | cdktf.IResolvable) {
    this._uplink.internalValue = value;
  }
  public resetUplink() {
    this._uplink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkInput() {
    return this._uplink.internalValue;
  }
}
export interface PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfig {
  /**
  * Name of the transport node profile config option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#name PolicyHostTransportNode#name}
  */
  readonly name: string;
  /**
  * host_switch_config_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#host_switch_config_option PolicyHostTransportNode#host_switch_config_option}
  */
  readonly hostSwitchConfigOption: PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOption;
}

export function policyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigToTerraform(struct?: PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    host_switch_config_option: policyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionToTerraform(struct!.hostSwitchConfigOption),
  }
}


export function policyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigToHclTerraform(struct?: PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfig | cdktf.IResolvable): any {
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
    host_switch_config_option: {
      value: policyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionToHclTerraform(struct!.hostSwitchConfigOption),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._hostSwitchConfigOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostSwitchConfigOption = this._hostSwitchConfigOption?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._hostSwitchConfigOption.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._hostSwitchConfigOption.internalValue = value.hostSwitchConfigOption;
    }
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

  // host_switch_config_option - computed: false, optional: false, required: true
  private _hostSwitchConfigOption = new PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionOutputReference(this, "host_switch_config_option");
  public get hostSwitchConfigOption() {
    return this._hostSwitchConfigOption;
  }
  public putHostSwitchConfigOption(value: PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOption) {
    this._hostSwitchConfigOption.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostSwitchConfigOptionInput() {
    return this._hostSwitchConfigOption.internalValue;
  }
}

export class PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigList extends cdktf.ComplexList {
  public internalValue? : PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfig[] | cdktf.IResolvable

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
  public get(index: number): PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigOutputReference {
    return new PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyHostTransportNodeStandardHostSwitchTransportZoneEndpoint {
  /**
  * Unique ID identifying the transport zone for this endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#transport_zone PolicyHostTransportNode#transport_zone}
  */
  readonly transportZone: string;
  /**
  * Identifiers of the transport zone profiles associated with this transport zone endpoint on this transport node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#transport_zone_profiles PolicyHostTransportNode#transport_zone_profiles}
  */
  readonly transportZoneProfiles?: string[];
}

export function policyHostTransportNodeStandardHostSwitchTransportZoneEndpointToTerraform(struct?: PolicyHostTransportNodeStandardHostSwitchTransportZoneEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    transport_zone: cdktf.stringToTerraform(struct!.transportZone),
    transport_zone_profiles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transportZoneProfiles),
  }
}


export function policyHostTransportNodeStandardHostSwitchTransportZoneEndpointToHclTerraform(struct?: PolicyHostTransportNodeStandardHostSwitchTransportZoneEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    transport_zone: {
      value: cdktf.stringToHclTerraform(struct!.transportZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transport_zone_profiles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transportZoneProfiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyHostTransportNodeStandardHostSwitchTransportZoneEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyHostTransportNodeStandardHostSwitchTransportZoneEndpoint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._transportZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportZone = this._transportZone;
    }
    if (this._transportZoneProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportZoneProfiles = this._transportZoneProfiles;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyHostTransportNodeStandardHostSwitchTransportZoneEndpoint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._transportZone = undefined;
      this._transportZoneProfiles = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._transportZone = value.transportZone;
      this._transportZoneProfiles = value.transportZoneProfiles;
    }
  }

  // transport_zone - computed: false, optional: false, required: true
  private _transportZone?: string; 
  public get transportZone() {
    return this.getStringAttribute('transport_zone');
  }
  public set transportZone(value: string) {
    this._transportZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transportZoneInput() {
    return this._transportZone;
  }

  // transport_zone_profiles - computed: true, optional: true, required: false
  private _transportZoneProfiles?: string[]; 
  public get transportZoneProfiles() {
    return this.getListAttribute('transport_zone_profiles');
  }
  public set transportZoneProfiles(value: string[]) {
    this._transportZoneProfiles = value;
  }
  public resetTransportZoneProfiles() {
    this._transportZoneProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportZoneProfilesInput() {
    return this._transportZoneProfiles;
  }
}

export class PolicyHostTransportNodeStandardHostSwitchTransportZoneEndpointList extends cdktf.ComplexList {
  public internalValue? : PolicyHostTransportNodeStandardHostSwitchTransportZoneEndpoint[] | cdktf.IResolvable

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
  public get(index: number): PolicyHostTransportNodeStandardHostSwitchTransportZoneEndpointOutputReference {
    return new PolicyHostTransportNodeStandardHostSwitchTransportZoneEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyHostTransportNodeStandardHostSwitchUplink {
  /**
  * Uplink name from UplinkHostSwitch profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#uplink_name PolicyHostTransportNode#uplink_name}
  */
  readonly uplinkName: string;
  /**
  * Link Aggregation Group (LAG) name of Virtual Distributed Switch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#vds_lag_name PolicyHostTransportNode#vds_lag_name}
  */
  readonly vdsLagName?: string;
  /**
  * Uplink name of VMware vSphere Distributed Switch (VDS)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#vds_uplink_name PolicyHostTransportNode#vds_uplink_name}
  */
  readonly vdsUplinkName?: string;
}

export function policyHostTransportNodeStandardHostSwitchUplinkToTerraform(struct?: PolicyHostTransportNodeStandardHostSwitchUplink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uplink_name: cdktf.stringToTerraform(struct!.uplinkName),
    vds_lag_name: cdktf.stringToTerraform(struct!.vdsLagName),
    vds_uplink_name: cdktf.stringToTerraform(struct!.vdsUplinkName),
  }
}


export function policyHostTransportNodeStandardHostSwitchUplinkToHclTerraform(struct?: PolicyHostTransportNodeStandardHostSwitchUplink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uplink_name: {
      value: cdktf.stringToHclTerraform(struct!.uplinkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vds_lag_name: {
      value: cdktf.stringToHclTerraform(struct!.vdsLagName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vds_uplink_name: {
      value: cdktf.stringToHclTerraform(struct!.vdsUplinkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyHostTransportNodeStandardHostSwitchUplinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyHostTransportNodeStandardHostSwitchUplink | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uplinkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.uplinkName = this._uplinkName;
    }
    if (this._vdsLagName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vdsLagName = this._vdsLagName;
    }
    if (this._vdsUplinkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vdsUplinkName = this._vdsUplinkName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyHostTransportNodeStandardHostSwitchUplink | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._uplinkName = undefined;
      this._vdsLagName = undefined;
      this._vdsUplinkName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._uplinkName = value.uplinkName;
      this._vdsLagName = value.vdsLagName;
      this._vdsUplinkName = value.vdsUplinkName;
    }
  }

  // uplink_name - computed: false, optional: false, required: true
  private _uplinkName?: string; 
  public get uplinkName() {
    return this.getStringAttribute('uplink_name');
  }
  public set uplinkName(value: string) {
    this._uplinkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkNameInput() {
    return this._uplinkName;
  }

  // vds_lag_name - computed: false, optional: true, required: false
  private _vdsLagName?: string; 
  public get vdsLagName() {
    return this.getStringAttribute('vds_lag_name');
  }
  public set vdsLagName(value: string) {
    this._vdsLagName = value;
  }
  public resetVdsLagName() {
    this._vdsLagName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdsLagNameInput() {
    return this._vdsLagName;
  }

  // vds_uplink_name - computed: false, optional: true, required: false
  private _vdsUplinkName?: string; 
  public get vdsUplinkName() {
    return this.getStringAttribute('vds_uplink_name');
  }
  public set vdsUplinkName(value: string) {
    this._vdsUplinkName = value;
  }
  public resetVdsUplinkName() {
    this._vdsUplinkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdsUplinkNameInput() {
    return this._vdsUplinkName;
  }
}

export class PolicyHostTransportNodeStandardHostSwitchUplinkList extends cdktf.ComplexList {
  public internalValue? : PolicyHostTransportNodeStandardHostSwitchUplink[] | cdktf.IResolvable

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
  public get(index: number): PolicyHostTransportNodeStandardHostSwitchUplinkOutputReference {
    return new PolicyHostTransportNodeStandardHostSwitchUplinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyHostTransportNodeStandardHostSwitchVmkInstallMigration {
  /**
  * The network id to which the ESX vmk interface will be migrated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#destination_network PolicyHostTransportNode#destination_network}
  */
  readonly destinationNetwork: string;
  /**
  * ESX vmk interface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#device_name PolicyHostTransportNode#device_name}
  */
  readonly deviceName: string;
}

export function policyHostTransportNodeStandardHostSwitchVmkInstallMigrationToTerraform(struct?: PolicyHostTransportNodeStandardHostSwitchVmkInstallMigration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_network: cdktf.stringToTerraform(struct!.destinationNetwork),
    device_name: cdktf.stringToTerraform(struct!.deviceName),
  }
}


export function policyHostTransportNodeStandardHostSwitchVmkInstallMigrationToHclTerraform(struct?: PolicyHostTransportNodeStandardHostSwitchVmkInstallMigration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_network: {
      value: cdktf.stringToHclTerraform(struct!.destinationNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_name: {
      value: cdktf.stringToHclTerraform(struct!.deviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyHostTransportNodeStandardHostSwitchVmkInstallMigrationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyHostTransportNodeStandardHostSwitchVmkInstallMigration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationNetwork = this._destinationNetwork;
    }
    if (this._deviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceName = this._deviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyHostTransportNodeStandardHostSwitchVmkInstallMigration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationNetwork = undefined;
      this._deviceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationNetwork = value.destinationNetwork;
      this._deviceName = value.deviceName;
    }
  }

  // destination_network - computed: false, optional: false, required: true
  private _destinationNetwork?: string; 
  public get destinationNetwork() {
    return this.getStringAttribute('destination_network');
  }
  public set destinationNetwork(value: string) {
    this._destinationNetwork = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationNetworkInput() {
    return this._destinationNetwork;
  }

  // device_name - computed: false, optional: false, required: true
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }
}

export class PolicyHostTransportNodeStandardHostSwitchVmkInstallMigrationList extends cdktf.ComplexList {
  public internalValue? : PolicyHostTransportNodeStandardHostSwitchVmkInstallMigration[] | cdktf.IResolvable

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
  public get(index: number): PolicyHostTransportNodeStandardHostSwitchVmkInstallMigrationOutputReference {
    return new PolicyHostTransportNodeStandardHostSwitchVmkInstallMigrationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyHostTransportNodeStandardHostSwitch {
  /**
  * The host switch id. This ID will be used to reference a host switch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#host_switch_id PolicyHostTransportNode#host_switch_id}
  */
  readonly hostSwitchId?: string;
  /**
  * Operational mode of a HostSwitch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#host_switch_mode PolicyHostTransportNode#host_switch_mode}
  */
  readonly hostSwitchMode?: string;
  /**
  * Host switch name. This name will be used to reference a host switch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#host_switch_name PolicyHostTransportNode#host_switch_name}
  */
  readonly hostSwitchName?: string;
  /**
  * Identifiers of host switch profiles to be associated with this host switch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#host_switch_profile PolicyHostTransportNode#host_switch_profile}
  */
  readonly hostSwitchProfile?: string[];
  /**
  * Migrate any pnics which are in use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#is_migrate_pnics PolicyHostTransportNode#is_migrate_pnics}
  */
  readonly isMigratePnics?: boolean | cdktf.IResolvable;
  /**
  * Host switch uplink profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#uplink_profile PolicyHostTransportNode#uplink_profile}
  */
  readonly uplinkProfile?: string;
  /**
  * Host switch high availability profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#vtep_ha_profile PolicyHostTransportNode#vtep_ha_profile}
  */
  readonly vtepHaProfile?: string;
  /**
  * cpu_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#cpu_config PolicyHostTransportNode#cpu_config}
  */
  readonly cpuConfig?: PolicyHostTransportNodeStandardHostSwitchCpuConfig[] | cdktf.IResolvable;
  /**
  * ip_assignment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#ip_assignment PolicyHostTransportNode#ip_assignment}
  */
  readonly ipAssignment?: PolicyHostTransportNodeStandardHostSwitchIpAssignment;
  /**
  * ipv6_assignment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#ipv6_assignment PolicyHostTransportNode#ipv6_assignment}
  */
  readonly ipv6Assignment?: PolicyHostTransportNodeStandardHostSwitchIpv6Assignment;
  /**
  * pnic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#pnic PolicyHostTransportNode#pnic}
  */
  readonly pnic?: PolicyHostTransportNodeStandardHostSwitchPnic[] | cdktf.IResolvable;
  /**
  * transport_node_profile_sub_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#transport_node_profile_sub_config PolicyHostTransportNode#transport_node_profile_sub_config}
  */
  readonly transportNodeProfileSubConfig?: PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfig[] | cdktf.IResolvable;
  /**
  * transport_zone_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#transport_zone_endpoint PolicyHostTransportNode#transport_zone_endpoint}
  */
  readonly transportZoneEndpoint?: PolicyHostTransportNodeStandardHostSwitchTransportZoneEndpoint[] | cdktf.IResolvable;
  /**
  * uplink block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#uplink PolicyHostTransportNode#uplink}
  */
  readonly uplink?: PolicyHostTransportNodeStandardHostSwitchUplink[] | cdktf.IResolvable;
  /**
  * vmk_install_migration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#vmk_install_migration PolicyHostTransportNode#vmk_install_migration}
  */
  readonly vmkInstallMigration?: PolicyHostTransportNodeStandardHostSwitchVmkInstallMigration[] | cdktf.IResolvable;
}

export function policyHostTransportNodeStandardHostSwitchToTerraform(struct?: PolicyHostTransportNodeStandardHostSwitch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_switch_id: cdktf.stringToTerraform(struct!.hostSwitchId),
    host_switch_mode: cdktf.stringToTerraform(struct!.hostSwitchMode),
    host_switch_name: cdktf.stringToTerraform(struct!.hostSwitchName),
    host_switch_profile: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hostSwitchProfile),
    is_migrate_pnics: cdktf.booleanToTerraform(struct!.isMigratePnics),
    uplink_profile: cdktf.stringToTerraform(struct!.uplinkProfile),
    vtep_ha_profile: cdktf.stringToTerraform(struct!.vtepHaProfile),
    cpu_config: cdktf.listMapper(policyHostTransportNodeStandardHostSwitchCpuConfigToTerraform, true)(struct!.cpuConfig),
    ip_assignment: policyHostTransportNodeStandardHostSwitchIpAssignmentToTerraform(struct!.ipAssignment),
    ipv6_assignment: policyHostTransportNodeStandardHostSwitchIpv6AssignmentToTerraform(struct!.ipv6Assignment),
    pnic: cdktf.listMapper(policyHostTransportNodeStandardHostSwitchPnicToTerraform, true)(struct!.pnic),
    transport_node_profile_sub_config: cdktf.listMapper(policyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigToTerraform, true)(struct!.transportNodeProfileSubConfig),
    transport_zone_endpoint: cdktf.listMapper(policyHostTransportNodeStandardHostSwitchTransportZoneEndpointToTerraform, true)(struct!.transportZoneEndpoint),
    uplink: cdktf.listMapper(policyHostTransportNodeStandardHostSwitchUplinkToTerraform, true)(struct!.uplink),
    vmk_install_migration: cdktf.listMapper(policyHostTransportNodeStandardHostSwitchVmkInstallMigrationToTerraform, true)(struct!.vmkInstallMigration),
  }
}


export function policyHostTransportNodeStandardHostSwitchToHclTerraform(struct?: PolicyHostTransportNodeStandardHostSwitch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_switch_id: {
      value: cdktf.stringToHclTerraform(struct!.hostSwitchId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_switch_mode: {
      value: cdktf.stringToHclTerraform(struct!.hostSwitchMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_switch_name: {
      value: cdktf.stringToHclTerraform(struct!.hostSwitchName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_switch_profile: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hostSwitchProfile),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    is_migrate_pnics: {
      value: cdktf.booleanToHclTerraform(struct!.isMigratePnics),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    uplink_profile: {
      value: cdktf.stringToHclTerraform(struct!.uplinkProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vtep_ha_profile: {
      value: cdktf.stringToHclTerraform(struct!.vtepHaProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_config: {
      value: cdktf.listMapperHcl(policyHostTransportNodeStandardHostSwitchCpuConfigToHclTerraform, true)(struct!.cpuConfig),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyHostTransportNodeStandardHostSwitchCpuConfigList",
    },
    ip_assignment: {
      value: policyHostTransportNodeStandardHostSwitchIpAssignmentToHclTerraform(struct!.ipAssignment),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyHostTransportNodeStandardHostSwitchIpAssignmentList",
    },
    ipv6_assignment: {
      value: policyHostTransportNodeStandardHostSwitchIpv6AssignmentToHclTerraform(struct!.ipv6Assignment),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyHostTransportNodeStandardHostSwitchIpv6AssignmentList",
    },
    pnic: {
      value: cdktf.listMapperHcl(policyHostTransportNodeStandardHostSwitchPnicToHclTerraform, true)(struct!.pnic),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyHostTransportNodeStandardHostSwitchPnicList",
    },
    transport_node_profile_sub_config: {
      value: cdktf.listMapperHcl(policyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigToHclTerraform, true)(struct!.transportNodeProfileSubConfig),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigList",
    },
    transport_zone_endpoint: {
      value: cdktf.listMapperHcl(policyHostTransportNodeStandardHostSwitchTransportZoneEndpointToHclTerraform, true)(struct!.transportZoneEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyHostTransportNodeStandardHostSwitchTransportZoneEndpointList",
    },
    uplink: {
      value: cdktf.listMapperHcl(policyHostTransportNodeStandardHostSwitchUplinkToHclTerraform, true)(struct!.uplink),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyHostTransportNodeStandardHostSwitchUplinkList",
    },
    vmk_install_migration: {
      value: cdktf.listMapperHcl(policyHostTransportNodeStandardHostSwitchVmkInstallMigrationToHclTerraform, true)(struct!.vmkInstallMigration),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyHostTransportNodeStandardHostSwitchVmkInstallMigrationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyHostTransportNodeStandardHostSwitchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyHostTransportNodeStandardHostSwitch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostSwitchId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostSwitchId = this._hostSwitchId;
    }
    if (this._hostSwitchMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostSwitchMode = this._hostSwitchMode;
    }
    if (this._hostSwitchName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostSwitchName = this._hostSwitchName;
    }
    if (this._hostSwitchProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostSwitchProfile = this._hostSwitchProfile;
    }
    if (this._isMigratePnics !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMigratePnics = this._isMigratePnics;
    }
    if (this._uplinkProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.uplinkProfile = this._uplinkProfile;
    }
    if (this._vtepHaProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.vtepHaProfile = this._vtepHaProfile;
    }
    if (this._cpuConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuConfig = this._cpuConfig?.internalValue;
    }
    if (this._ipAssignment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAssignment = this._ipAssignment?.internalValue;
    }
    if (this._ipv6Assignment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Assignment = this._ipv6Assignment?.internalValue;
    }
    if (this._pnic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pnic = this._pnic?.internalValue;
    }
    if (this._transportNodeProfileSubConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportNodeProfileSubConfig = this._transportNodeProfileSubConfig?.internalValue;
    }
    if (this._transportZoneEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportZoneEndpoint = this._transportZoneEndpoint?.internalValue;
    }
    if (this._uplink?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uplink = this._uplink?.internalValue;
    }
    if (this._vmkInstallMigration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmkInstallMigration = this._vmkInstallMigration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyHostTransportNodeStandardHostSwitch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostSwitchId = undefined;
      this._hostSwitchMode = undefined;
      this._hostSwitchName = undefined;
      this._hostSwitchProfile = undefined;
      this._isMigratePnics = undefined;
      this._uplinkProfile = undefined;
      this._vtepHaProfile = undefined;
      this._cpuConfig.internalValue = undefined;
      this._ipAssignment.internalValue = undefined;
      this._ipv6Assignment.internalValue = undefined;
      this._pnic.internalValue = undefined;
      this._transportNodeProfileSubConfig.internalValue = undefined;
      this._transportZoneEndpoint.internalValue = undefined;
      this._uplink.internalValue = undefined;
      this._vmkInstallMigration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostSwitchId = value.hostSwitchId;
      this._hostSwitchMode = value.hostSwitchMode;
      this._hostSwitchName = value.hostSwitchName;
      this._hostSwitchProfile = value.hostSwitchProfile;
      this._isMigratePnics = value.isMigratePnics;
      this._uplinkProfile = value.uplinkProfile;
      this._vtepHaProfile = value.vtepHaProfile;
      this._cpuConfig.internalValue = value.cpuConfig;
      this._ipAssignment.internalValue = value.ipAssignment;
      this._ipv6Assignment.internalValue = value.ipv6Assignment;
      this._pnic.internalValue = value.pnic;
      this._transportNodeProfileSubConfig.internalValue = value.transportNodeProfileSubConfig;
      this._transportZoneEndpoint.internalValue = value.transportZoneEndpoint;
      this._uplink.internalValue = value.uplink;
      this._vmkInstallMigration.internalValue = value.vmkInstallMigration;
    }
  }

  // host_switch_id - computed: true, optional: true, required: false
  private _hostSwitchId?: string; 
  public get hostSwitchId() {
    return this.getStringAttribute('host_switch_id');
  }
  public set hostSwitchId(value: string) {
    this._hostSwitchId = value;
  }
  public resetHostSwitchId() {
    this._hostSwitchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostSwitchIdInput() {
    return this._hostSwitchId;
  }

  // host_switch_mode - computed: true, optional: true, required: false
  private _hostSwitchMode?: string; 
  public get hostSwitchMode() {
    return this.getStringAttribute('host_switch_mode');
  }
  public set hostSwitchMode(value: string) {
    this._hostSwitchMode = value;
  }
  public resetHostSwitchMode() {
    this._hostSwitchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostSwitchModeInput() {
    return this._hostSwitchMode;
  }

  // host_switch_name - computed: true, optional: true, required: false
  private _hostSwitchName?: string; 
  public get hostSwitchName() {
    return this.getStringAttribute('host_switch_name');
  }
  public set hostSwitchName(value: string) {
    this._hostSwitchName = value;
  }
  public resetHostSwitchName() {
    this._hostSwitchName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostSwitchNameInput() {
    return this._hostSwitchName;
  }

  // host_switch_profile - computed: true, optional: true, required: false
  private _hostSwitchProfile?: string[]; 
  public get hostSwitchProfile() {
    return this.getListAttribute('host_switch_profile');
  }
  public set hostSwitchProfile(value: string[]) {
    this._hostSwitchProfile = value;
  }
  public resetHostSwitchProfile() {
    this._hostSwitchProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostSwitchProfileInput() {
    return this._hostSwitchProfile;
  }

  // is_migrate_pnics - computed: false, optional: true, required: false
  private _isMigratePnics?: boolean | cdktf.IResolvable; 
  public get isMigratePnics() {
    return this.getBooleanAttribute('is_migrate_pnics');
  }
  public set isMigratePnics(value: boolean | cdktf.IResolvable) {
    this._isMigratePnics = value;
  }
  public resetIsMigratePnics() {
    this._isMigratePnics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMigratePnicsInput() {
    return this._isMigratePnics;
  }

  // uplink_profile - computed: true, optional: true, required: false
  private _uplinkProfile?: string; 
  public get uplinkProfile() {
    return this.getStringAttribute('uplink_profile');
  }
  public set uplinkProfile(value: string) {
    this._uplinkProfile = value;
  }
  public resetUplinkProfile() {
    this._uplinkProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkProfileInput() {
    return this._uplinkProfile;
  }

  // vtep_ha_profile - computed: true, optional: true, required: false
  private _vtepHaProfile?: string; 
  public get vtepHaProfile() {
    return this.getStringAttribute('vtep_ha_profile');
  }
  public set vtepHaProfile(value: string) {
    this._vtepHaProfile = value;
  }
  public resetVtepHaProfile() {
    this._vtepHaProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vtepHaProfileInput() {
    return this._vtepHaProfile;
  }

  // cpu_config - computed: false, optional: true, required: false
  private _cpuConfig = new PolicyHostTransportNodeStandardHostSwitchCpuConfigList(this, "cpu_config", false);
  public get cpuConfig() {
    return this._cpuConfig;
  }
  public putCpuConfig(value: PolicyHostTransportNodeStandardHostSwitchCpuConfig[] | cdktf.IResolvable) {
    this._cpuConfig.internalValue = value;
  }
  public resetCpuConfig() {
    this._cpuConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuConfigInput() {
    return this._cpuConfig.internalValue;
  }

  // ip_assignment - computed: false, optional: true, required: false
  private _ipAssignment = new PolicyHostTransportNodeStandardHostSwitchIpAssignmentOutputReference(this, "ip_assignment");
  public get ipAssignment() {
    return this._ipAssignment;
  }
  public putIpAssignment(value: PolicyHostTransportNodeStandardHostSwitchIpAssignment) {
    this._ipAssignment.internalValue = value;
  }
  public resetIpAssignment() {
    this._ipAssignment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAssignmentInput() {
    return this._ipAssignment.internalValue;
  }

  // ipv6_assignment - computed: false, optional: true, required: false
  private _ipv6Assignment = new PolicyHostTransportNodeStandardHostSwitchIpv6AssignmentOutputReference(this, "ipv6_assignment");
  public get ipv6Assignment() {
    return this._ipv6Assignment;
  }
  public putIpv6Assignment(value: PolicyHostTransportNodeStandardHostSwitchIpv6Assignment) {
    this._ipv6Assignment.internalValue = value;
  }
  public resetIpv6Assignment() {
    this._ipv6Assignment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AssignmentInput() {
    return this._ipv6Assignment.internalValue;
  }

  // pnic - computed: false, optional: true, required: false
  private _pnic = new PolicyHostTransportNodeStandardHostSwitchPnicList(this, "pnic", false);
  public get pnic() {
    return this._pnic;
  }
  public putPnic(value: PolicyHostTransportNodeStandardHostSwitchPnic[] | cdktf.IResolvable) {
    this._pnic.internalValue = value;
  }
  public resetPnic() {
    this._pnic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pnicInput() {
    return this._pnic.internalValue;
  }

  // transport_node_profile_sub_config - computed: false, optional: true, required: false
  private _transportNodeProfileSubConfig = new PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfigList(this, "transport_node_profile_sub_config", false);
  public get transportNodeProfileSubConfig() {
    return this._transportNodeProfileSubConfig;
  }
  public putTransportNodeProfileSubConfig(value: PolicyHostTransportNodeStandardHostSwitchTransportNodeProfileSubConfig[] | cdktf.IResolvable) {
    this._transportNodeProfileSubConfig.internalValue = value;
  }
  public resetTransportNodeProfileSubConfig() {
    this._transportNodeProfileSubConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportNodeProfileSubConfigInput() {
    return this._transportNodeProfileSubConfig.internalValue;
  }

  // transport_zone_endpoint - computed: false, optional: true, required: false
  private _transportZoneEndpoint = new PolicyHostTransportNodeStandardHostSwitchTransportZoneEndpointList(this, "transport_zone_endpoint", false);
  public get transportZoneEndpoint() {
    return this._transportZoneEndpoint;
  }
  public putTransportZoneEndpoint(value: PolicyHostTransportNodeStandardHostSwitchTransportZoneEndpoint[] | cdktf.IResolvable) {
    this._transportZoneEndpoint.internalValue = value;
  }
  public resetTransportZoneEndpoint() {
    this._transportZoneEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportZoneEndpointInput() {
    return this._transportZoneEndpoint.internalValue;
  }

  // uplink - computed: false, optional: true, required: false
  private _uplink = new PolicyHostTransportNodeStandardHostSwitchUplinkList(this, "uplink", false);
  public get uplink() {
    return this._uplink;
  }
  public putUplink(value: PolicyHostTransportNodeStandardHostSwitchUplink[] | cdktf.IResolvable) {
    this._uplink.internalValue = value;
  }
  public resetUplink() {
    this._uplink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkInput() {
    return this._uplink.internalValue;
  }

  // vmk_install_migration - computed: false, optional: true, required: false
  private _vmkInstallMigration = new PolicyHostTransportNodeStandardHostSwitchVmkInstallMigrationList(this, "vmk_install_migration", false);
  public get vmkInstallMigration() {
    return this._vmkInstallMigration;
  }
  public putVmkInstallMigration(value: PolicyHostTransportNodeStandardHostSwitchVmkInstallMigration[] | cdktf.IResolvable) {
    this._vmkInstallMigration.internalValue = value;
  }
  public resetVmkInstallMigration() {
    this._vmkInstallMigration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmkInstallMigrationInput() {
    return this._vmkInstallMigration.internalValue;
  }
}

export class PolicyHostTransportNodeStandardHostSwitchList extends cdktf.ComplexList {
  public internalValue? : PolicyHostTransportNodeStandardHostSwitch[] | cdktf.IResolvable

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
  public get(index: number): PolicyHostTransportNodeStandardHostSwitchOutputReference {
    return new PolicyHostTransportNodeStandardHostSwitchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyHostTransportNodeTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#scope PolicyHostTransportNode#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#tag PolicyHostTransportNode#tag}
  */
  readonly tag?: string;
}

export function policyHostTransportNodeTagToTerraform(struct?: PolicyHostTransportNodeTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policyHostTransportNodeTagToHclTerraform(struct?: PolicyHostTransportNodeTag | cdktf.IResolvable): any {
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

export class PolicyHostTransportNodeTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyHostTransportNodeTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyHostTransportNodeTag | cdktf.IResolvable | undefined) {
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

export class PolicyHostTransportNodeTagList extends cdktf.ComplexList {
  public internalValue? : PolicyHostTransportNodeTag[] | cdktf.IResolvable

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
  public get(index: number): PolicyHostTransportNodeTagOutputReference {
    return new PolicyHostTransportNodeTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node nsxt_policy_host_transport_node}
*/
export class PolicyHostTransportNode extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_host_transport_node";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyHostTransportNode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyHostTransportNode to import
  * @param importFromId The id of the existing PolicyHostTransportNode that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyHostTransportNode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_host_transport_node", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node nsxt_policy_host_transport_node} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyHostTransportNodeConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyHostTransportNodeConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_host_transport_node',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.11.0',
        providerVersionConstraint: '3.11.0'
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
    this._discoveredNodeId = config.discoveredNodeId;
    this._displayName = config.displayName;
    this._enforcementPoint = config.enforcementPoint;
    this._id = config.id;
    this._nsxId = config.nsxId;
    this._removeNsxOnDestroy = config.removeNsxOnDestroy;
    this._sitePath = config.sitePath;
    this._standardHostSwitch.internalValue = config.standardHostSwitch;
    this._tag.internalValue = config.tag;
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

  // discovered_node_id - computed: false, optional: false, required: true
  private _discoveredNodeId?: string; 
  public get discoveredNodeId() {
    return this.getStringAttribute('discovered_node_id');
  }
  public set discoveredNodeId(value: string) {
    this._discoveredNodeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveredNodeIdInput() {
    return this._discoveredNodeId;
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

  // enforcement_point - computed: false, optional: true, required: false
  private _enforcementPoint?: string; 
  public get enforcementPoint() {
    return this.getStringAttribute('enforcement_point');
  }
  public set enforcementPoint(value: string) {
    this._enforcementPoint = value;
  }
  public resetEnforcementPoint() {
    this._enforcementPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementPointInput() {
    return this._enforcementPoint;
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

  // remove_nsx_on_destroy - computed: false, optional: true, required: false
  private _removeNsxOnDestroy?: boolean | cdktf.IResolvable; 
  public get removeNsxOnDestroy() {
    return this.getBooleanAttribute('remove_nsx_on_destroy');
  }
  public set removeNsxOnDestroy(value: boolean | cdktf.IResolvable) {
    this._removeNsxOnDestroy = value;
  }
  public resetRemoveNsxOnDestroy() {
    this._removeNsxOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeNsxOnDestroyInput() {
    return this._removeNsxOnDestroy;
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // site_path - computed: false, optional: true, required: false
  private _sitePath?: string; 
  public get sitePath() {
    return this.getStringAttribute('site_path');
  }
  public set sitePath(value: string) {
    this._sitePath = value;
  }
  public resetSitePath() {
    this._sitePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sitePathInput() {
    return this._sitePath;
  }

  // standard_host_switch - computed: false, optional: false, required: true
  private _standardHostSwitch = new PolicyHostTransportNodeStandardHostSwitchList(this, "standard_host_switch", false);
  public get standardHostSwitch() {
    return this._standardHostSwitch;
  }
  public putStandardHostSwitch(value: PolicyHostTransportNodeStandardHostSwitch[] | cdktf.IResolvable) {
    this._standardHostSwitch.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get standardHostSwitchInput() {
    return this._standardHostSwitch.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new PolicyHostTransportNodeTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PolicyHostTransportNodeTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      discovered_node_id: cdktf.stringToTerraform(this._discoveredNodeId),
      display_name: cdktf.stringToTerraform(this._displayName),
      enforcement_point: cdktf.stringToTerraform(this._enforcementPoint),
      id: cdktf.stringToTerraform(this._id),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      remove_nsx_on_destroy: cdktf.booleanToTerraform(this._removeNsxOnDestroy),
      site_path: cdktf.stringToTerraform(this._sitePath),
      standard_host_switch: cdktf.listMapper(policyHostTransportNodeStandardHostSwitchToTerraform, true)(this._standardHostSwitch.internalValue),
      tag: cdktf.listMapper(policyHostTransportNodeTagToTerraform, true)(this._tag.internalValue),
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
      discovered_node_id: {
        value: cdktf.stringToHclTerraform(this._discoveredNodeId),
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
      enforcement_point: {
        value: cdktf.stringToHclTerraform(this._enforcementPoint),
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
      nsx_id: {
        value: cdktf.stringToHclTerraform(this._nsxId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remove_nsx_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._removeNsxOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      site_path: {
        value: cdktf.stringToHclTerraform(this._sitePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      standard_host_switch: {
        value: cdktf.listMapperHcl(policyHostTransportNodeStandardHostSwitchToHclTerraform, true)(this._standardHostSwitch.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyHostTransportNodeStandardHostSwitchList",
      },
      tag: {
        value: cdktf.listMapperHcl(policyHostTransportNodeTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyHostTransportNodeTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
