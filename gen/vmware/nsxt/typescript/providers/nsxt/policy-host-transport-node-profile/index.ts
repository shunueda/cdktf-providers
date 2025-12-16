// https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyHostTransportNodeProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#description PolicyHostTransportNodeProfile#description}
  */
  readonly description?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#display_name PolicyHostTransportNodeProfile#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#id PolicyHostTransportNodeProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Determines if cluster-level configuration should be applied on overridden hosts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#ignore_overridden_hosts PolicyHostTransportNodeProfile#ignore_overridden_hosts}
  */
  readonly ignoreOverriddenHosts?: boolean | cdktf.IResolvable;
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#nsx_id PolicyHostTransportNodeProfile#nsx_id}
  */
  readonly nsxId?: string;
  /**
  * standard_host_switch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#standard_host_switch PolicyHostTransportNodeProfile#standard_host_switch}
  */
  readonly standardHostSwitch: PolicyHostTransportNodeProfileStandardHostSwitch[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#tag PolicyHostTransportNodeProfile#tag}
  */
  readonly tag?: PolicyHostTransportNodeProfileTag[] | cdktf.IResolvable;
}
export interface PolicyHostTransportNodeProfileStandardHostSwitchCpuConfig {
  /**
  * Number of Logical cpu cores (Lcores) to be placed on a specified NUMA node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#num_lcores PolicyHostTransportNodeProfile#num_lcores}
  */
  readonly numLcores: number;
  /**
  * Unique index of the Non Uniform Memory Access (NUMA) node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#numa_node_index PolicyHostTransportNodeProfile#numa_node_index}
  */
  readonly numaNodeIndex: number;
}

export function policyHostTransportNodeProfileStandardHostSwitchCpuConfigToTerraform(struct?: PolicyHostTransportNodeProfileStandardHostSwitchCpuConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    num_lcores: cdktf.numberToTerraform(struct!.numLcores),
    numa_node_index: cdktf.numberToTerraform(struct!.numaNodeIndex),
  }
}


export function policyHostTransportNodeProfileStandardHostSwitchCpuConfigToHclTerraform(struct?: PolicyHostTransportNodeProfileStandardHostSwitchCpuConfig | cdktf.IResolvable): any {
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

export class PolicyHostTransportNodeProfileStandardHostSwitchCpuConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyHostTransportNodeProfileStandardHostSwitchCpuConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyHostTransportNodeProfileStandardHostSwitchCpuConfig | cdktf.IResolvable | undefined) {
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

export class PolicyHostTransportNodeProfileStandardHostSwitchCpuConfigList extends cdktf.ComplexList {
  public internalValue? : PolicyHostTransportNodeProfileStandardHostSwitchCpuConfig[] | cdktf.IResolvable

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
  public get(index: number): PolicyHostTransportNodeProfileStandardHostSwitchCpuConfigOutputReference {
    return new PolicyHostTransportNodeProfileStandardHostSwitchCpuConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyHostTransportNodeProfileStandardHostSwitchIpAssignmentStaticIp {
  /**
  * Gateway IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#default_gateway PolicyHostTransportNodeProfile#default_gateway}
  */
  readonly defaultGateway: string;
  /**
  * List of IPs for transport node host switch virtual tunnel endpoints
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#ip_addresses PolicyHostTransportNodeProfile#ip_addresses}
  */
  readonly ipAddresses: string[];
  /**
  * Subnet mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#subnet_mask PolicyHostTransportNodeProfile#subnet_mask}
  */
  readonly subnetMask: string;
}

export function policyHostTransportNodeProfileStandardHostSwitchIpAssignmentStaticIpToTerraform(struct?: PolicyHostTransportNodeProfileStandardHostSwitchIpAssignmentStaticIpOutputReference | PolicyHostTransportNodeProfileStandardHostSwitchIpAssignmentStaticIp): any {
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


export function policyHostTransportNodeProfileStandardHostSwitchIpAssignmentStaticIpToHclTerraform(struct?: PolicyHostTransportNodeProfileStandardHostSwitchIpAssignmentStaticIpOutputReference | PolicyHostTransportNodeProfileStandardHostSwitchIpAssignmentStaticIp): any {
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

export class PolicyHostTransportNodeProfileStandardHostSwitchIpAssignmentStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyHostTransportNodeProfileStandardHostSwitchIpAssignmentStaticIp | undefined {
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

  public set internalValue(value: PolicyHostTransportNodeProfileStandardHostSwitchIpAssignmentStaticIp | undefined) {
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
export interface PolicyHostTransportNodeProfileStandardHostSwitchIpAssignmentStaticIpMacIpMacPair {
  /**
  * A single IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#ip_address PolicyHostTransportNodeProfile#ip_address}
  */
  readonly ipAddress: string;
  /**
  * A single MAC address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#mac_address PolicyHostTransportNodeProfile#mac_address}
  */
  readonly macAddress: string;
}

export function policyHostTransportNodeProfileStandardHostSwitchIpAssignmentStaticIpMacIpMacPairToTerraform(struct?: PolicyHostTransportNodeProfileStandardHostSwitchIpAssignmentStaticIpMacIpMacPair | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
  }
}


export function policyHostTransportNodeProfileStandardHostSwitchIpAssignmentStaticIpMacIpMacPairToHclTerraform(struct?: PolicyHostTransportNodeProfileStandardHostSwitchIpAssignmentStaticIpMacIpMacPair | cdktf.IResolvable): any {
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

export class PolicyHostTransportNodeProfileStandardHostSwitchIpAssignmentStaticIpMacIpMacPairOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyHostTransportNodeProfileStandardHostSwitchIpAssignmentStaticIpMacIpMacPair | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyHostTransportNodeProfileStandardHostSwitchIpAssignmentStaticIpMacIpMacPair | cdktf.IResolvable | undefined) {
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

export class PolicyHostTransportNodeProfileStandardHostSwitchIpAssignmentStaticIpMacIpMacPairList extends cdktf.ComplexList {
  public internalValue? : PolicyHostTransportNodeProfileStandardHostSwitchIpAssignmentStaticIpMacIpMacPair[] | cdktf.IResolvable

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
  public get(index: number): PolicyHostTransportNodeProfileStandardHostSwitchIpAssignmentStaticIpMacIpMacPairOutputReference {
    return new PolicyHostTransportNodeProfileStandardHostSwitchIpAssignmentStaticIpMacIpMacPairOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyHostTransportNodeProfileStandardHostSwitchIpAssignmentStaticIpMac {
  /**
  * Gateway IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#default_gateway PolicyHostTransportNodeProfile#default_gateway}
  */
  readonly defaultGateway: string;
  /**
  * Subnet mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#subnet_mask PolicyHostTransportNodeProfile#subnet_mask}
  */
  readonly subnetMask: string;
  /**
  * ip_mac_pair block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#ip_mac_pair PolicyHostTransportNodeProfile#ip_mac_pair}
  */
  readonly ipMacPair: PolicyHostTransportNodeProfileStandardHostSwitchIpAssignmentStaticIpMacIpMacPair[] | cdktf.IResolvable;
}

export function policyHostTransportNodeProfileStandardHostSwitchIpAssignmentStaticIpMacToTerraform(struct?: PolicyHostTransportNodeProfileStandardHostSwitchIpAssignmentStaticIpMacOutputReference | PolicyHostTransportNodeProfileStandardHostSwitchIpAssignmentStaticIpMac): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gateway: cdktf.stringToTerraform(struct!.defaultGateway),
    subnet_mask: cdktf.stringToTerraform(struct!.subnetMask),
    ip_mac_pair: cdktf.listMapper(policyHostTransportNodeProfileStandardHostSwitchIpAssignmentStaticIpMacIpMacPairToTerraform, true)(struct!.ipMacPair),
  }
}


export function policyHostTransportNodeProfileStandardHostSwitchIpAssignmentStaticIpMacToHclTerraform(struct?: PolicyHostTransportNodeProfileStandardHostSwitchIpAssignmentStaticIpMacOutputReference | PolicyHostTransportNodeProfileStandardHostSwitchIpAssignmentStaticIpMac): any {
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
      value: cdktf.listMapperHcl(policyHostTransportNodeProfileStandardHostSwitchIpAssignmentStaticIpMacIpMacPairToHclTerraform, true)(struct!.ipMacPair),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyHostTransportNodeProfileStandardHostSwitchIpAssignmentStaticIpMacIpMacPairList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyHostTransportNodeProfileStandardHostSwitchIpAssignmentStaticIpMacOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyHostTransportNodeProfileStandardHostSwitchIpAssignmentStaticIpMac | undefined {
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

  public set internalValue(value: PolicyHostTransportNodeProfileStandardHostSwitchIpAssignmentStaticIpMac | undefined) {
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
  private _ipMacPair = new PolicyHostTransportNodeProfileStandardHostSwitchIpAssignmentStaticIpMacIpMacPairList(this, "ip_mac_pair", false);
  public get ipMacPair() {
    return this._ipMacPair;
  }
  public putIpMacPair(value: PolicyHostTransportNodeProfileStandardHostSwitchIpAssignmentStaticIpMacIpMacPair[] | cdktf.IResolvable) {
    this._ipMacPair.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMacPairInput() {
    return this._ipMacPair.internalValue;
  }
}
export interface PolicyHostTransportNodeProfileStandardHostSwitchIpAssignment {
  /**
  * Enables DHCP assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#assigned_by_dhcp PolicyHostTransportNodeProfile#assigned_by_dhcp}
  */
  readonly assignedByDhcp?: boolean | cdktf.IResolvable;
  /**
  * No IPv4 assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#no_ipv4 PolicyHostTransportNodeProfile#no_ipv4}
  */
  readonly noIpv4?: boolean | cdktf.IResolvable;
  /**
  * IP assignment specification for Static IP Pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#static_ip_pool PolicyHostTransportNodeProfile#static_ip_pool}
  */
  readonly staticIpPool?: string;
  /**
  * static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#static_ip PolicyHostTransportNodeProfile#static_ip}
  */
  readonly staticIp?: PolicyHostTransportNodeProfileStandardHostSwitchIpAssignmentStaticIp;
  /**
  * static_ip_mac block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#static_ip_mac PolicyHostTransportNodeProfile#static_ip_mac}
  */
  readonly staticIpMac?: PolicyHostTransportNodeProfileStandardHostSwitchIpAssignmentStaticIpMac;
}

export function policyHostTransportNodeProfileStandardHostSwitchIpAssignmentToTerraform(struct?: PolicyHostTransportNodeProfileStandardHostSwitchIpAssignmentOutputReference | PolicyHostTransportNodeProfileStandardHostSwitchIpAssignment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assigned_by_dhcp: cdktf.booleanToTerraform(struct!.assignedByDhcp),
    no_ipv4: cdktf.booleanToTerraform(struct!.noIpv4),
    static_ip_pool: cdktf.stringToTerraform(struct!.staticIpPool),
    static_ip: policyHostTransportNodeProfileStandardHostSwitchIpAssignmentStaticIpToTerraform(struct!.staticIp),
    static_ip_mac: policyHostTransportNodeProfileStandardHostSwitchIpAssignmentStaticIpMacToTerraform(struct!.staticIpMac),
  }
}


export function policyHostTransportNodeProfileStandardHostSwitchIpAssignmentToHclTerraform(struct?: PolicyHostTransportNodeProfileStandardHostSwitchIpAssignmentOutputReference | PolicyHostTransportNodeProfileStandardHostSwitchIpAssignment): any {
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
      value: policyHostTransportNodeProfileStandardHostSwitchIpAssignmentStaticIpToHclTerraform(struct!.staticIp),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyHostTransportNodeProfileStandardHostSwitchIpAssignmentStaticIpList",
    },
    static_ip_mac: {
      value: policyHostTransportNodeProfileStandardHostSwitchIpAssignmentStaticIpMacToHclTerraform(struct!.staticIpMac),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyHostTransportNodeProfileStandardHostSwitchIpAssignmentStaticIpMacList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyHostTransportNodeProfileStandardHostSwitchIpAssignmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyHostTransportNodeProfileStandardHostSwitchIpAssignment | undefined {
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

  public set internalValue(value: PolicyHostTransportNodeProfileStandardHostSwitchIpAssignment | undefined) {
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
  private _staticIp = new PolicyHostTransportNodeProfileStandardHostSwitchIpAssignmentStaticIpOutputReference(this, "static_ip");
  public get staticIp() {
    return this._staticIp;
  }
  public putStaticIp(value: PolicyHostTransportNodeProfileStandardHostSwitchIpAssignmentStaticIp) {
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
  private _staticIpMac = new PolicyHostTransportNodeProfileStandardHostSwitchIpAssignmentStaticIpMacOutputReference(this, "static_ip_mac");
  public get staticIpMac() {
    return this._staticIpMac;
  }
  public putStaticIpMac(value: PolicyHostTransportNodeProfileStandardHostSwitchIpAssignmentStaticIpMac) {
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
export interface PolicyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentStaticIp {
  /**
  * Gateway IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#default_gateway PolicyHostTransportNodeProfile#default_gateway}
  */
  readonly defaultGateway: string;
  /**
  * List of IPs for transport node host switch virtual tunnel endpoints
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#ip_addresses PolicyHostTransportNodeProfile#ip_addresses}
  */
  readonly ipAddresses: string[];
  /**
  * Prefix length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#prefix_length PolicyHostTransportNodeProfile#prefix_length}
  */
  readonly prefixLength: string;
}

export function policyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentStaticIpToTerraform(struct?: PolicyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentStaticIpOutputReference | PolicyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentStaticIp): any {
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


export function policyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentStaticIpToHclTerraform(struct?: PolicyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentStaticIpOutputReference | PolicyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentStaticIp): any {
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

export class PolicyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentStaticIp | undefined {
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

  public set internalValue(value: PolicyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentStaticIp | undefined) {
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
export interface PolicyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentStaticIpMacIpMacPair {
  /**
  * A single IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#ip_address PolicyHostTransportNodeProfile#ip_address}
  */
  readonly ipAddress: string;
  /**
  * A single MAC address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#mac_address PolicyHostTransportNodeProfile#mac_address}
  */
  readonly macAddress: string;
}

export function policyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentStaticIpMacIpMacPairToTerraform(struct?: PolicyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentStaticIpMacIpMacPair | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
  }
}


export function policyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentStaticIpMacIpMacPairToHclTerraform(struct?: PolicyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentStaticIpMacIpMacPair | cdktf.IResolvable): any {
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

export class PolicyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentStaticIpMacIpMacPairOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentStaticIpMacIpMacPair | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentStaticIpMacIpMacPair | cdktf.IResolvable | undefined) {
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

export class PolicyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentStaticIpMacIpMacPairList extends cdktf.ComplexList {
  public internalValue? : PolicyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentStaticIpMacIpMacPair[] | cdktf.IResolvable

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
  public get(index: number): PolicyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentStaticIpMacIpMacPairOutputReference {
    return new PolicyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentStaticIpMacIpMacPairOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentStaticIpMac {
  /**
  * Gateway IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#default_gateway PolicyHostTransportNodeProfile#default_gateway}
  */
  readonly defaultGateway: string;
  /**
  * Prefix length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#prefix_length PolicyHostTransportNodeProfile#prefix_length}
  */
  readonly prefixLength: string;
  /**
  * ip_mac_pair block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#ip_mac_pair PolicyHostTransportNodeProfile#ip_mac_pair}
  */
  readonly ipMacPair: PolicyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentStaticIpMacIpMacPair[] | cdktf.IResolvable;
}

export function policyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentStaticIpMacToTerraform(struct?: PolicyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentStaticIpMacOutputReference | PolicyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentStaticIpMac): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gateway: cdktf.stringToTerraform(struct!.defaultGateway),
    prefix_length: cdktf.stringToTerraform(struct!.prefixLength),
    ip_mac_pair: cdktf.listMapper(policyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentStaticIpMacIpMacPairToTerraform, true)(struct!.ipMacPair),
  }
}


export function policyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentStaticIpMacToHclTerraform(struct?: PolicyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentStaticIpMacOutputReference | PolicyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentStaticIpMac): any {
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
      value: cdktf.listMapperHcl(policyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentStaticIpMacIpMacPairToHclTerraform, true)(struct!.ipMacPair),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentStaticIpMacIpMacPairList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentStaticIpMacOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentStaticIpMac | undefined {
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

  public set internalValue(value: PolicyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentStaticIpMac | undefined) {
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
  private _ipMacPair = new PolicyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentStaticIpMacIpMacPairList(this, "ip_mac_pair", false);
  public get ipMacPair() {
    return this._ipMacPair;
  }
  public putIpMacPair(value: PolicyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentStaticIpMacIpMacPair[] | cdktf.IResolvable) {
    this._ipMacPair.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMacPairInput() {
    return this._ipMacPair.internalValue;
  }
}
export interface PolicyHostTransportNodeProfileStandardHostSwitchIpv6Assignment {
  /**
  * Enables autoconf assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#assigned_by_autoconf PolicyHostTransportNodeProfile#assigned_by_autoconf}
  */
  readonly assignedByAutoconf?: boolean | cdktf.IResolvable;
  /**
  * Enables DHCPv6 assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#assigned_by_dhcpv6 PolicyHostTransportNodeProfile#assigned_by_dhcpv6}
  */
  readonly assignedByDhcpv6?: boolean | cdktf.IResolvable;
  /**
  * No IPv6 assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#no_ipv6 PolicyHostTransportNodeProfile#no_ipv6}
  */
  readonly noIpv6?: boolean | cdktf.IResolvable;
  /**
  * IP assignment specification for Static IP Pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#static_ip_pool PolicyHostTransportNodeProfile#static_ip_pool}
  */
  readonly staticIpPool?: string;
  /**
  * static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#static_ip PolicyHostTransportNodeProfile#static_ip}
  */
  readonly staticIp?: PolicyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentStaticIp;
  /**
  * static_ip_mac block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#static_ip_mac PolicyHostTransportNodeProfile#static_ip_mac}
  */
  readonly staticIpMac?: PolicyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentStaticIpMac;
}

export function policyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentToTerraform(struct?: PolicyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentOutputReference | PolicyHostTransportNodeProfileStandardHostSwitchIpv6Assignment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assigned_by_autoconf: cdktf.booleanToTerraform(struct!.assignedByAutoconf),
    assigned_by_dhcpv6: cdktf.booleanToTerraform(struct!.assignedByDhcpv6),
    no_ipv6: cdktf.booleanToTerraform(struct!.noIpv6),
    static_ip_pool: cdktf.stringToTerraform(struct!.staticIpPool),
    static_ip: policyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentStaticIpToTerraform(struct!.staticIp),
    static_ip_mac: policyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentStaticIpMacToTerraform(struct!.staticIpMac),
  }
}


export function policyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentToHclTerraform(struct?: PolicyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentOutputReference | PolicyHostTransportNodeProfileStandardHostSwitchIpv6Assignment): any {
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
      value: policyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentStaticIpToHclTerraform(struct!.staticIp),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentStaticIpList",
    },
    static_ip_mac: {
      value: policyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentStaticIpMacToHclTerraform(struct!.staticIpMac),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentStaticIpMacList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyHostTransportNodeProfileStandardHostSwitchIpv6Assignment | undefined {
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

  public set internalValue(value: PolicyHostTransportNodeProfileStandardHostSwitchIpv6Assignment | undefined) {
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
  private _staticIp = new PolicyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentStaticIpOutputReference(this, "static_ip");
  public get staticIp() {
    return this._staticIp;
  }
  public putStaticIp(value: PolicyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentStaticIp) {
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
  private _staticIpMac = new PolicyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentStaticIpMacOutputReference(this, "static_ip_mac");
  public get staticIpMac() {
    return this._staticIpMac;
  }
  public putStaticIpMac(value: PolicyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentStaticIpMac) {
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
export interface PolicyHostTransportNodeProfileStandardHostSwitchPnic {
  /**
  * Device name or key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#device_name PolicyHostTransportNodeProfile#device_name}
  */
  readonly deviceName: string;
  /**
  * Uplink name for this Pnic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#uplink_name PolicyHostTransportNodeProfile#uplink_name}
  */
  readonly uplinkName: string;
}

export function policyHostTransportNodeProfileStandardHostSwitchPnicToTerraform(struct?: PolicyHostTransportNodeProfileStandardHostSwitchPnic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    uplink_name: cdktf.stringToTerraform(struct!.uplinkName),
  }
}


export function policyHostTransportNodeProfileStandardHostSwitchPnicToHclTerraform(struct?: PolicyHostTransportNodeProfileStandardHostSwitchPnic | cdktf.IResolvable): any {
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

export class PolicyHostTransportNodeProfileStandardHostSwitchPnicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyHostTransportNodeProfileStandardHostSwitchPnic | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyHostTransportNodeProfileStandardHostSwitchPnic | cdktf.IResolvable | undefined) {
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

export class PolicyHostTransportNodeProfileStandardHostSwitchPnicList extends cdktf.ComplexList {
  public internalValue? : PolicyHostTransportNodeProfileStandardHostSwitchPnic[] | cdktf.IResolvable

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
  public get(index: number): PolicyHostTransportNodeProfileStandardHostSwitchPnicOutputReference {
    return new PolicyHostTransportNodeProfileStandardHostSwitchPnicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIp {
  /**
  * Gateway IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#default_gateway PolicyHostTransportNodeProfile#default_gateway}
  */
  readonly defaultGateway: string;
  /**
  * List of IPs for transport node host switch virtual tunnel endpoints
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#ip_addresses PolicyHostTransportNodeProfile#ip_addresses}
  */
  readonly ipAddresses: string[];
  /**
  * Subnet mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#subnet_mask PolicyHostTransportNodeProfile#subnet_mask}
  */
  readonly subnetMask: string;
}

export function policyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpToTerraform(struct?: PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpOutputReference | PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIp): any {
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


export function policyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpToHclTerraform(struct?: PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpOutputReference | PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIp): any {
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

export class PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIp | undefined {
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

  public set internalValue(value: PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIp | undefined) {
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
export interface PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMacIpMacPair {
  /**
  * A single IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#ip_address PolicyHostTransportNodeProfile#ip_address}
  */
  readonly ipAddress: string;
  /**
  * A single MAC address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#mac_address PolicyHostTransportNodeProfile#mac_address}
  */
  readonly macAddress: string;
}

export function policyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMacIpMacPairToTerraform(struct?: PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMacIpMacPair | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
  }
}


export function policyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMacIpMacPairToHclTerraform(struct?: PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMacIpMacPair | cdktf.IResolvable): any {
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

export class PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMacIpMacPairOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMacIpMacPair | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMacIpMacPair | cdktf.IResolvable | undefined) {
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

export class PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMacIpMacPairList extends cdktf.ComplexList {
  public internalValue? : PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMacIpMacPair[] | cdktf.IResolvable

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
  public get(index: number): PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMacIpMacPairOutputReference {
    return new PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMacIpMacPairOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMac {
  /**
  * Gateway IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#default_gateway PolicyHostTransportNodeProfile#default_gateway}
  */
  readonly defaultGateway: string;
  /**
  * Subnet mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#subnet_mask PolicyHostTransportNodeProfile#subnet_mask}
  */
  readonly subnetMask: string;
  /**
  * ip_mac_pair block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#ip_mac_pair PolicyHostTransportNodeProfile#ip_mac_pair}
  */
  readonly ipMacPair: PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMacIpMacPair[] | cdktf.IResolvable;
}

export function policyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMacToTerraform(struct?: PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMacOutputReference | PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMac): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gateway: cdktf.stringToTerraform(struct!.defaultGateway),
    subnet_mask: cdktf.stringToTerraform(struct!.subnetMask),
    ip_mac_pair: cdktf.listMapper(policyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMacIpMacPairToTerraform, true)(struct!.ipMacPair),
  }
}


export function policyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMacToHclTerraform(struct?: PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMacOutputReference | PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMac): any {
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
      value: cdktf.listMapperHcl(policyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMacIpMacPairToHclTerraform, true)(struct!.ipMacPair),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMacIpMacPairList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMacOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMac | undefined {
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

  public set internalValue(value: PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMac | undefined) {
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
  private _ipMacPair = new PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMacIpMacPairList(this, "ip_mac_pair", false);
  public get ipMacPair() {
    return this._ipMacPair;
  }
  public putIpMacPair(value: PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMacIpMacPair[] | cdktf.IResolvable) {
    this._ipMacPair.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMacPairInput() {
    return this._ipMacPair.internalValue;
  }
}
export interface PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignment {
  /**
  * Enables DHCP assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#assigned_by_dhcp PolicyHostTransportNodeProfile#assigned_by_dhcp}
  */
  readonly assignedByDhcp?: boolean | cdktf.IResolvable;
  /**
  * No IPv4 assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#no_ipv4 PolicyHostTransportNodeProfile#no_ipv4}
  */
  readonly noIpv4?: boolean | cdktf.IResolvable;
  /**
  * IP assignment specification for Static IP Pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#static_ip_pool PolicyHostTransportNodeProfile#static_ip_pool}
  */
  readonly staticIpPool?: string;
  /**
  * static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#static_ip PolicyHostTransportNodeProfile#static_ip}
  */
  readonly staticIp?: PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIp;
  /**
  * static_ip_mac block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#static_ip_mac PolicyHostTransportNodeProfile#static_ip_mac}
  */
  readonly staticIpMac?: PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMac;
}

export function policyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentToTerraform(struct?: PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentOutputReference | PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assigned_by_dhcp: cdktf.booleanToTerraform(struct!.assignedByDhcp),
    no_ipv4: cdktf.booleanToTerraform(struct!.noIpv4),
    static_ip_pool: cdktf.stringToTerraform(struct!.staticIpPool),
    static_ip: policyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpToTerraform(struct!.staticIp),
    static_ip_mac: policyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMacToTerraform(struct!.staticIpMac),
  }
}


export function policyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentToHclTerraform(struct?: PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentOutputReference | PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignment): any {
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
      value: policyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpToHclTerraform(struct!.staticIp),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpList",
    },
    static_ip_mac: {
      value: policyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMacToHclTerraform(struct!.staticIpMac),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMacList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignment | undefined {
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

  public set internalValue(value: PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignment | undefined) {
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
  private _staticIp = new PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpOutputReference(this, "static_ip");
  public get staticIp() {
    return this._staticIp;
  }
  public putStaticIp(value: PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIp) {
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
  private _staticIpMac = new PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMacOutputReference(this, "static_ip_mac");
  public get staticIpMac() {
    return this._staticIpMac;
  }
  public putStaticIpMac(value: PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentStaticIpMac) {
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
export interface PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIp {
  /**
  * Gateway IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#default_gateway PolicyHostTransportNodeProfile#default_gateway}
  */
  readonly defaultGateway: string;
  /**
  * List of IPs for transport node host switch virtual tunnel endpoints
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#ip_addresses PolicyHostTransportNodeProfile#ip_addresses}
  */
  readonly ipAddresses: string[];
  /**
  * Prefix length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#prefix_length PolicyHostTransportNodeProfile#prefix_length}
  */
  readonly prefixLength: string;
}

export function policyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpToTerraform(struct?: PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpOutputReference | PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIp): any {
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


export function policyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpToHclTerraform(struct?: PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpOutputReference | PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIp): any {
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

export class PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIp | undefined {
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

  public set internalValue(value: PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIp | undefined) {
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
export interface PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMacIpMacPair {
  /**
  * A single IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#ip_address PolicyHostTransportNodeProfile#ip_address}
  */
  readonly ipAddress: string;
  /**
  * A single MAC address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#mac_address PolicyHostTransportNodeProfile#mac_address}
  */
  readonly macAddress: string;
}

export function policyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMacIpMacPairToTerraform(struct?: PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMacIpMacPair | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
  }
}


export function policyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMacIpMacPairToHclTerraform(struct?: PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMacIpMacPair | cdktf.IResolvable): any {
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

export class PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMacIpMacPairOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMacIpMacPair | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMacIpMacPair | cdktf.IResolvable | undefined) {
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

export class PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMacIpMacPairList extends cdktf.ComplexList {
  public internalValue? : PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMacIpMacPair[] | cdktf.IResolvable

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
  public get(index: number): PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMacIpMacPairOutputReference {
    return new PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMacIpMacPairOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMac {
  /**
  * Gateway IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#default_gateway PolicyHostTransportNodeProfile#default_gateway}
  */
  readonly defaultGateway: string;
  /**
  * Prefix length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#prefix_length PolicyHostTransportNodeProfile#prefix_length}
  */
  readonly prefixLength: string;
  /**
  * ip_mac_pair block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#ip_mac_pair PolicyHostTransportNodeProfile#ip_mac_pair}
  */
  readonly ipMacPair: PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMacIpMacPair[] | cdktf.IResolvable;
}

export function policyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMacToTerraform(struct?: PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMacOutputReference | PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMac): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gateway: cdktf.stringToTerraform(struct!.defaultGateway),
    prefix_length: cdktf.stringToTerraform(struct!.prefixLength),
    ip_mac_pair: cdktf.listMapper(policyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMacIpMacPairToTerraform, true)(struct!.ipMacPair),
  }
}


export function policyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMacToHclTerraform(struct?: PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMacOutputReference | PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMac): any {
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
      value: cdktf.listMapperHcl(policyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMacIpMacPairToHclTerraform, true)(struct!.ipMacPair),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMacIpMacPairList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMacOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMac | undefined {
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

  public set internalValue(value: PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMac | undefined) {
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
  private _ipMacPair = new PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMacIpMacPairList(this, "ip_mac_pair", false);
  public get ipMacPair() {
    return this._ipMacPair;
  }
  public putIpMacPair(value: PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMacIpMacPair[] | cdktf.IResolvable) {
    this._ipMacPair.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMacPairInput() {
    return this._ipMacPair.internalValue;
  }
}
export interface PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6Assignment {
  /**
  * Enables autoconf assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#assigned_by_autoconf PolicyHostTransportNodeProfile#assigned_by_autoconf}
  */
  readonly assignedByAutoconf?: boolean | cdktf.IResolvable;
  /**
  * Enables DHCPv6 assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#assigned_by_dhcpv6 PolicyHostTransportNodeProfile#assigned_by_dhcpv6}
  */
  readonly assignedByDhcpv6?: boolean | cdktf.IResolvable;
  /**
  * No IPv6 assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#no_ipv6 PolicyHostTransportNodeProfile#no_ipv6}
  */
  readonly noIpv6?: boolean | cdktf.IResolvable;
  /**
  * IP assignment specification for Static IP Pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#static_ip_pool PolicyHostTransportNodeProfile#static_ip_pool}
  */
  readonly staticIpPool?: string;
  /**
  * static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#static_ip PolicyHostTransportNodeProfile#static_ip}
  */
  readonly staticIp?: PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIp;
  /**
  * static_ip_mac block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#static_ip_mac PolicyHostTransportNodeProfile#static_ip_mac}
  */
  readonly staticIpMac?: PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMac;
}

export function policyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentToTerraform(struct?: PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentOutputReference | PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6Assignment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assigned_by_autoconf: cdktf.booleanToTerraform(struct!.assignedByAutoconf),
    assigned_by_dhcpv6: cdktf.booleanToTerraform(struct!.assignedByDhcpv6),
    no_ipv6: cdktf.booleanToTerraform(struct!.noIpv6),
    static_ip_pool: cdktf.stringToTerraform(struct!.staticIpPool),
    static_ip: policyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpToTerraform(struct!.staticIp),
    static_ip_mac: policyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMacToTerraform(struct!.staticIpMac),
  }
}


export function policyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentToHclTerraform(struct?: PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentOutputReference | PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6Assignment): any {
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
      value: policyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpToHclTerraform(struct!.staticIp),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpList",
    },
    static_ip_mac: {
      value: policyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMacToHclTerraform(struct!.staticIpMac),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMacList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6Assignment | undefined {
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

  public set internalValue(value: PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6Assignment | undefined) {
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
  private _staticIp = new PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpOutputReference(this, "static_ip");
  public get staticIp() {
    return this._staticIp;
  }
  public putStaticIp(value: PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIp) {
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
  private _staticIpMac = new PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMacOutputReference(this, "static_ip_mac");
  public get staticIpMac() {
    return this._staticIpMac;
  }
  public putStaticIpMac(value: PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentStaticIpMac) {
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
export interface PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionUplink {
  /**
  * Uplink name from UplinkHostSwitch profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#uplink_name PolicyHostTransportNodeProfile#uplink_name}
  */
  readonly uplinkName: string;
  /**
  * Link Aggregation Group (LAG) name of Virtual Distributed Switch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#vds_lag_name PolicyHostTransportNodeProfile#vds_lag_name}
  */
  readonly vdsLagName?: string;
  /**
  * Uplink name of VMware vSphere Distributed Switch (VDS)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#vds_uplink_name PolicyHostTransportNodeProfile#vds_uplink_name}
  */
  readonly vdsUplinkName?: string;
}

export function policyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionUplinkToTerraform(struct?: PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionUplink | cdktf.IResolvable): any {
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


export function policyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionUplinkToHclTerraform(struct?: PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionUplink | cdktf.IResolvable): any {
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

export class PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionUplinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionUplink | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionUplink | cdktf.IResolvable | undefined) {
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

export class PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionUplinkList extends cdktf.ComplexList {
  public internalValue? : PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionUplink[] | cdktf.IResolvable

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
  public get(index: number): PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionUplinkOutputReference {
    return new PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionUplinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOption {
  /**
  * The host switch id. This ID will be used to reference a host switch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#host_switch_id PolicyHostTransportNodeProfile#host_switch_id}
  */
  readonly hostSwitchId?: string;
  /**
  * Identifiers of host switch profiles to be associated with this host switch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#host_switch_profile PolicyHostTransportNodeProfile#host_switch_profile}
  */
  readonly hostSwitchProfile?: string[];
  /**
  * Host switch uplink profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#uplink_profile PolicyHostTransportNodeProfile#uplink_profile}
  */
  readonly uplinkProfile?: string;
  /**
  * Host switch high availability profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#vtep_ha_profile PolicyHostTransportNodeProfile#vtep_ha_profile}
  */
  readonly vtepHaProfile?: string;
  /**
  * ip_assignment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#ip_assignment PolicyHostTransportNodeProfile#ip_assignment}
  */
  readonly ipAssignment?: PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignment;
  /**
  * ipv6_assignment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#ipv6_assignment PolicyHostTransportNodeProfile#ipv6_assignment}
  */
  readonly ipv6Assignment?: PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6Assignment;
  /**
  * uplink block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#uplink PolicyHostTransportNodeProfile#uplink}
  */
  readonly uplink?: PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionUplink[] | cdktf.IResolvable;
}

export function policyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionToTerraform(struct?: PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionOutputReference | PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_switch_id: cdktf.stringToTerraform(struct!.hostSwitchId),
    host_switch_profile: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hostSwitchProfile),
    uplink_profile: cdktf.stringToTerraform(struct!.uplinkProfile),
    vtep_ha_profile: cdktf.stringToTerraform(struct!.vtepHaProfile),
    ip_assignment: policyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentToTerraform(struct!.ipAssignment),
    ipv6_assignment: policyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentToTerraform(struct!.ipv6Assignment),
    uplink: cdktf.listMapper(policyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionUplinkToTerraform, true)(struct!.uplink),
  }
}


export function policyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionToHclTerraform(struct?: PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionOutputReference | PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOption): any {
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
      value: policyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentToHclTerraform(struct!.ipAssignment),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentList",
    },
    ipv6_assignment: {
      value: policyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentToHclTerraform(struct!.ipv6Assignment),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentList",
    },
    uplink: {
      value: cdktf.listMapperHcl(policyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionUplinkToHclTerraform, true)(struct!.uplink),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionUplinkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOption | undefined {
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

  public set internalValue(value: PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOption | undefined) {
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
  private _ipAssignment = new PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignmentOutputReference(this, "ip_assignment");
  public get ipAssignment() {
    return this._ipAssignment;
  }
  public putIpAssignment(value: PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpAssignment) {
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
  private _ipv6Assignment = new PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6AssignmentOutputReference(this, "ipv6_assignment");
  public get ipv6Assignment() {
    return this._ipv6Assignment;
  }
  public putIpv6Assignment(value: PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionIpv6Assignment) {
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
  private _uplink = new PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionUplinkList(this, "uplink", false);
  public get uplink() {
    return this._uplink;
  }
  public putUplink(value: PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionUplink[] | cdktf.IResolvable) {
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
export interface PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfig {
  /**
  * Name of the transport node profile config option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#name PolicyHostTransportNodeProfile#name}
  */
  readonly name: string;
  /**
  * host_switch_config_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#host_switch_config_option PolicyHostTransportNodeProfile#host_switch_config_option}
  */
  readonly hostSwitchConfigOption: PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOption;
}

export function policyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigToTerraform(struct?: PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    host_switch_config_option: policyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionToTerraform(struct!.hostSwitchConfigOption),
  }
}


export function policyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigToHclTerraform(struct?: PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfig | cdktf.IResolvable): any {
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
      value: policyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionToHclTerraform(struct!.hostSwitchConfigOption),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfig | cdktf.IResolvable | undefined) {
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
  private _hostSwitchConfigOption = new PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOptionOutputReference(this, "host_switch_config_option");
  public get hostSwitchConfigOption() {
    return this._hostSwitchConfigOption;
  }
  public putHostSwitchConfigOption(value: PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigHostSwitchConfigOption) {
    this._hostSwitchConfigOption.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostSwitchConfigOptionInput() {
    return this._hostSwitchConfigOption.internalValue;
  }
}

export class PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigList extends cdktf.ComplexList {
  public internalValue? : PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfig[] | cdktf.IResolvable

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
  public get(index: number): PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigOutputReference {
    return new PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyHostTransportNodeProfileStandardHostSwitchTransportZoneEndpoint {
  /**
  * Unique ID identifying the transport zone for this endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#transport_zone PolicyHostTransportNodeProfile#transport_zone}
  */
  readonly transportZone: string;
  /**
  * Identifiers of the transport zone profiles associated with this transport zone endpoint on this transport node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#transport_zone_profiles PolicyHostTransportNodeProfile#transport_zone_profiles}
  */
  readonly transportZoneProfiles?: string[];
}

export function policyHostTransportNodeProfileStandardHostSwitchTransportZoneEndpointToTerraform(struct?: PolicyHostTransportNodeProfileStandardHostSwitchTransportZoneEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    transport_zone: cdktf.stringToTerraform(struct!.transportZone),
    transport_zone_profiles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transportZoneProfiles),
  }
}


export function policyHostTransportNodeProfileStandardHostSwitchTransportZoneEndpointToHclTerraform(struct?: PolicyHostTransportNodeProfileStandardHostSwitchTransportZoneEndpoint | cdktf.IResolvable): any {
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

export class PolicyHostTransportNodeProfileStandardHostSwitchTransportZoneEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyHostTransportNodeProfileStandardHostSwitchTransportZoneEndpoint | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyHostTransportNodeProfileStandardHostSwitchTransportZoneEndpoint | cdktf.IResolvable | undefined) {
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

export class PolicyHostTransportNodeProfileStandardHostSwitchTransportZoneEndpointList extends cdktf.ComplexList {
  public internalValue? : PolicyHostTransportNodeProfileStandardHostSwitchTransportZoneEndpoint[] | cdktf.IResolvable

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
  public get(index: number): PolicyHostTransportNodeProfileStandardHostSwitchTransportZoneEndpointOutputReference {
    return new PolicyHostTransportNodeProfileStandardHostSwitchTransportZoneEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyHostTransportNodeProfileStandardHostSwitchUplink {
  /**
  * Uplink name from UplinkHostSwitch profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#uplink_name PolicyHostTransportNodeProfile#uplink_name}
  */
  readonly uplinkName: string;
  /**
  * Link Aggregation Group (LAG) name of Virtual Distributed Switch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#vds_lag_name PolicyHostTransportNodeProfile#vds_lag_name}
  */
  readonly vdsLagName?: string;
  /**
  * Uplink name of VMware vSphere Distributed Switch (VDS)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#vds_uplink_name PolicyHostTransportNodeProfile#vds_uplink_name}
  */
  readonly vdsUplinkName?: string;
}

export function policyHostTransportNodeProfileStandardHostSwitchUplinkToTerraform(struct?: PolicyHostTransportNodeProfileStandardHostSwitchUplink | cdktf.IResolvable): any {
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


export function policyHostTransportNodeProfileStandardHostSwitchUplinkToHclTerraform(struct?: PolicyHostTransportNodeProfileStandardHostSwitchUplink | cdktf.IResolvable): any {
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

export class PolicyHostTransportNodeProfileStandardHostSwitchUplinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyHostTransportNodeProfileStandardHostSwitchUplink | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyHostTransportNodeProfileStandardHostSwitchUplink | cdktf.IResolvable | undefined) {
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

export class PolicyHostTransportNodeProfileStandardHostSwitchUplinkList extends cdktf.ComplexList {
  public internalValue? : PolicyHostTransportNodeProfileStandardHostSwitchUplink[] | cdktf.IResolvable

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
  public get(index: number): PolicyHostTransportNodeProfileStandardHostSwitchUplinkOutputReference {
    return new PolicyHostTransportNodeProfileStandardHostSwitchUplinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyHostTransportNodeProfileStandardHostSwitchVmkInstallMigration {
  /**
  * The network id to which the ESX vmk interface will be migrated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#destination_network PolicyHostTransportNodeProfile#destination_network}
  */
  readonly destinationNetwork: string;
  /**
  * ESX vmk interface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#device_name PolicyHostTransportNodeProfile#device_name}
  */
  readonly deviceName: string;
}

export function policyHostTransportNodeProfileStandardHostSwitchVmkInstallMigrationToTerraform(struct?: PolicyHostTransportNodeProfileStandardHostSwitchVmkInstallMigration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_network: cdktf.stringToTerraform(struct!.destinationNetwork),
    device_name: cdktf.stringToTerraform(struct!.deviceName),
  }
}


export function policyHostTransportNodeProfileStandardHostSwitchVmkInstallMigrationToHclTerraform(struct?: PolicyHostTransportNodeProfileStandardHostSwitchVmkInstallMigration | cdktf.IResolvable): any {
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

export class PolicyHostTransportNodeProfileStandardHostSwitchVmkInstallMigrationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyHostTransportNodeProfileStandardHostSwitchVmkInstallMigration | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyHostTransportNodeProfileStandardHostSwitchVmkInstallMigration | cdktf.IResolvable | undefined) {
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

export class PolicyHostTransportNodeProfileStandardHostSwitchVmkInstallMigrationList extends cdktf.ComplexList {
  public internalValue? : PolicyHostTransportNodeProfileStandardHostSwitchVmkInstallMigration[] | cdktf.IResolvable

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
  public get(index: number): PolicyHostTransportNodeProfileStandardHostSwitchVmkInstallMigrationOutputReference {
    return new PolicyHostTransportNodeProfileStandardHostSwitchVmkInstallMigrationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyHostTransportNodeProfileStandardHostSwitch {
  /**
  * The host switch id. This ID will be used to reference a host switch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#host_switch_id PolicyHostTransportNodeProfile#host_switch_id}
  */
  readonly hostSwitchId?: string;
  /**
  * Operational mode of a HostSwitch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#host_switch_mode PolicyHostTransportNodeProfile#host_switch_mode}
  */
  readonly hostSwitchMode?: string;
  /**
  * Host switch name. This name will be used to reference a host switch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#host_switch_name PolicyHostTransportNodeProfile#host_switch_name}
  */
  readonly hostSwitchName?: string;
  /**
  * Identifiers of host switch profiles to be associated with this host switch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#host_switch_profile PolicyHostTransportNodeProfile#host_switch_profile}
  */
  readonly hostSwitchProfile?: string[];
  /**
  * Migrate any pnics which are in use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#is_migrate_pnics PolicyHostTransportNodeProfile#is_migrate_pnics}
  */
  readonly isMigratePnics?: boolean | cdktf.IResolvable;
  /**
  * Host switch uplink profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#uplink_profile PolicyHostTransportNodeProfile#uplink_profile}
  */
  readonly uplinkProfile?: string;
  /**
  * Host switch high availability profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#vtep_ha_profile PolicyHostTransportNodeProfile#vtep_ha_profile}
  */
  readonly vtepHaProfile?: string;
  /**
  * cpu_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#cpu_config PolicyHostTransportNodeProfile#cpu_config}
  */
  readonly cpuConfig?: PolicyHostTransportNodeProfileStandardHostSwitchCpuConfig[] | cdktf.IResolvable;
  /**
  * ip_assignment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#ip_assignment PolicyHostTransportNodeProfile#ip_assignment}
  */
  readonly ipAssignment?: PolicyHostTransportNodeProfileStandardHostSwitchIpAssignment;
  /**
  * ipv6_assignment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#ipv6_assignment PolicyHostTransportNodeProfile#ipv6_assignment}
  */
  readonly ipv6Assignment?: PolicyHostTransportNodeProfileStandardHostSwitchIpv6Assignment;
  /**
  * pnic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#pnic PolicyHostTransportNodeProfile#pnic}
  */
  readonly pnic?: PolicyHostTransportNodeProfileStandardHostSwitchPnic[] | cdktf.IResolvable;
  /**
  * transport_node_profile_sub_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#transport_node_profile_sub_config PolicyHostTransportNodeProfile#transport_node_profile_sub_config}
  */
  readonly transportNodeProfileSubConfig?: PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfig[] | cdktf.IResolvable;
  /**
  * transport_zone_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#transport_zone_endpoint PolicyHostTransportNodeProfile#transport_zone_endpoint}
  */
  readonly transportZoneEndpoint?: PolicyHostTransportNodeProfileStandardHostSwitchTransportZoneEndpoint[] | cdktf.IResolvable;
  /**
  * uplink block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#uplink PolicyHostTransportNodeProfile#uplink}
  */
  readonly uplink?: PolicyHostTransportNodeProfileStandardHostSwitchUplink[] | cdktf.IResolvable;
  /**
  * vmk_install_migration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#vmk_install_migration PolicyHostTransportNodeProfile#vmk_install_migration}
  */
  readonly vmkInstallMigration?: PolicyHostTransportNodeProfileStandardHostSwitchVmkInstallMigration[] | cdktf.IResolvable;
}

export function policyHostTransportNodeProfileStandardHostSwitchToTerraform(struct?: PolicyHostTransportNodeProfileStandardHostSwitch | cdktf.IResolvable): any {
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
    cpu_config: cdktf.listMapper(policyHostTransportNodeProfileStandardHostSwitchCpuConfigToTerraform, true)(struct!.cpuConfig),
    ip_assignment: policyHostTransportNodeProfileStandardHostSwitchIpAssignmentToTerraform(struct!.ipAssignment),
    ipv6_assignment: policyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentToTerraform(struct!.ipv6Assignment),
    pnic: cdktf.listMapper(policyHostTransportNodeProfileStandardHostSwitchPnicToTerraform, true)(struct!.pnic),
    transport_node_profile_sub_config: cdktf.listMapper(policyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigToTerraform, true)(struct!.transportNodeProfileSubConfig),
    transport_zone_endpoint: cdktf.listMapper(policyHostTransportNodeProfileStandardHostSwitchTransportZoneEndpointToTerraform, true)(struct!.transportZoneEndpoint),
    uplink: cdktf.listMapper(policyHostTransportNodeProfileStandardHostSwitchUplinkToTerraform, true)(struct!.uplink),
    vmk_install_migration: cdktf.listMapper(policyHostTransportNodeProfileStandardHostSwitchVmkInstallMigrationToTerraform, true)(struct!.vmkInstallMigration),
  }
}


export function policyHostTransportNodeProfileStandardHostSwitchToHclTerraform(struct?: PolicyHostTransportNodeProfileStandardHostSwitch | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(policyHostTransportNodeProfileStandardHostSwitchCpuConfigToHclTerraform, true)(struct!.cpuConfig),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyHostTransportNodeProfileStandardHostSwitchCpuConfigList",
    },
    ip_assignment: {
      value: policyHostTransportNodeProfileStandardHostSwitchIpAssignmentToHclTerraform(struct!.ipAssignment),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyHostTransportNodeProfileStandardHostSwitchIpAssignmentList",
    },
    ipv6_assignment: {
      value: policyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentToHclTerraform(struct!.ipv6Assignment),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentList",
    },
    pnic: {
      value: cdktf.listMapperHcl(policyHostTransportNodeProfileStandardHostSwitchPnicToHclTerraform, true)(struct!.pnic),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyHostTransportNodeProfileStandardHostSwitchPnicList",
    },
    transport_node_profile_sub_config: {
      value: cdktf.listMapperHcl(policyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigToHclTerraform, true)(struct!.transportNodeProfileSubConfig),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigList",
    },
    transport_zone_endpoint: {
      value: cdktf.listMapperHcl(policyHostTransportNodeProfileStandardHostSwitchTransportZoneEndpointToHclTerraform, true)(struct!.transportZoneEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyHostTransportNodeProfileStandardHostSwitchTransportZoneEndpointList",
    },
    uplink: {
      value: cdktf.listMapperHcl(policyHostTransportNodeProfileStandardHostSwitchUplinkToHclTerraform, true)(struct!.uplink),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyHostTransportNodeProfileStandardHostSwitchUplinkList",
    },
    vmk_install_migration: {
      value: cdktf.listMapperHcl(policyHostTransportNodeProfileStandardHostSwitchVmkInstallMigrationToHclTerraform, true)(struct!.vmkInstallMigration),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyHostTransportNodeProfileStandardHostSwitchVmkInstallMigrationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyHostTransportNodeProfileStandardHostSwitchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyHostTransportNodeProfileStandardHostSwitch | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyHostTransportNodeProfileStandardHostSwitch | cdktf.IResolvable | undefined) {
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
  private _cpuConfig = new PolicyHostTransportNodeProfileStandardHostSwitchCpuConfigList(this, "cpu_config", false);
  public get cpuConfig() {
    return this._cpuConfig;
  }
  public putCpuConfig(value: PolicyHostTransportNodeProfileStandardHostSwitchCpuConfig[] | cdktf.IResolvable) {
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
  private _ipAssignment = new PolicyHostTransportNodeProfileStandardHostSwitchIpAssignmentOutputReference(this, "ip_assignment");
  public get ipAssignment() {
    return this._ipAssignment;
  }
  public putIpAssignment(value: PolicyHostTransportNodeProfileStandardHostSwitchIpAssignment) {
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
  private _ipv6Assignment = new PolicyHostTransportNodeProfileStandardHostSwitchIpv6AssignmentOutputReference(this, "ipv6_assignment");
  public get ipv6Assignment() {
    return this._ipv6Assignment;
  }
  public putIpv6Assignment(value: PolicyHostTransportNodeProfileStandardHostSwitchIpv6Assignment) {
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
  private _pnic = new PolicyHostTransportNodeProfileStandardHostSwitchPnicList(this, "pnic", false);
  public get pnic() {
    return this._pnic;
  }
  public putPnic(value: PolicyHostTransportNodeProfileStandardHostSwitchPnic[] | cdktf.IResolvable) {
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
  private _transportNodeProfileSubConfig = new PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfigList(this, "transport_node_profile_sub_config", false);
  public get transportNodeProfileSubConfig() {
    return this._transportNodeProfileSubConfig;
  }
  public putTransportNodeProfileSubConfig(value: PolicyHostTransportNodeProfileStandardHostSwitchTransportNodeProfileSubConfig[] | cdktf.IResolvable) {
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
  private _transportZoneEndpoint = new PolicyHostTransportNodeProfileStandardHostSwitchTransportZoneEndpointList(this, "transport_zone_endpoint", false);
  public get transportZoneEndpoint() {
    return this._transportZoneEndpoint;
  }
  public putTransportZoneEndpoint(value: PolicyHostTransportNodeProfileStandardHostSwitchTransportZoneEndpoint[] | cdktf.IResolvable) {
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
  private _uplink = new PolicyHostTransportNodeProfileStandardHostSwitchUplinkList(this, "uplink", false);
  public get uplink() {
    return this._uplink;
  }
  public putUplink(value: PolicyHostTransportNodeProfileStandardHostSwitchUplink[] | cdktf.IResolvable) {
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
  private _vmkInstallMigration = new PolicyHostTransportNodeProfileStandardHostSwitchVmkInstallMigrationList(this, "vmk_install_migration", false);
  public get vmkInstallMigration() {
    return this._vmkInstallMigration;
  }
  public putVmkInstallMigration(value: PolicyHostTransportNodeProfileStandardHostSwitchVmkInstallMigration[] | cdktf.IResolvable) {
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

export class PolicyHostTransportNodeProfileStandardHostSwitchList extends cdktf.ComplexList {
  public internalValue? : PolicyHostTransportNodeProfileStandardHostSwitch[] | cdktf.IResolvable

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
  public get(index: number): PolicyHostTransportNodeProfileStandardHostSwitchOutputReference {
    return new PolicyHostTransportNodeProfileStandardHostSwitchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyHostTransportNodeProfileTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#scope PolicyHostTransportNodeProfile#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#tag PolicyHostTransportNodeProfile#tag}
  */
  readonly tag?: string;
}

export function policyHostTransportNodeProfileTagToTerraform(struct?: PolicyHostTransportNodeProfileTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policyHostTransportNodeProfileTagToHclTerraform(struct?: PolicyHostTransportNodeProfileTag | cdktf.IResolvable): any {
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

export class PolicyHostTransportNodeProfileTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyHostTransportNodeProfileTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyHostTransportNodeProfileTag | cdktf.IResolvable | undefined) {
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

export class PolicyHostTransportNodeProfileTagList extends cdktf.ComplexList {
  public internalValue? : PolicyHostTransportNodeProfileTag[] | cdktf.IResolvable

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
  public get(index: number): PolicyHostTransportNodeProfileTagOutputReference {
    return new PolicyHostTransportNodeProfileTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile nsxt_policy_host_transport_node_profile}
*/
export class PolicyHostTransportNodeProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_host_transport_node_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyHostTransportNodeProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyHostTransportNodeProfile to import
  * @param importFromId The id of the existing PolicyHostTransportNodeProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyHostTransportNodeProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_host_transport_node_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_host_transport_node_profile nsxt_policy_host_transport_node_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyHostTransportNodeProfileConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyHostTransportNodeProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_host_transport_node_profile',
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
    this._displayName = config.displayName;
    this._id = config.id;
    this._ignoreOverriddenHosts = config.ignoreOverriddenHosts;
    this._nsxId = config.nsxId;
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

  // ignore_overridden_hosts - computed: false, optional: true, required: false
  private _ignoreOverriddenHosts?: boolean | cdktf.IResolvable; 
  public get ignoreOverriddenHosts() {
    return this.getBooleanAttribute('ignore_overridden_hosts');
  }
  public set ignoreOverriddenHosts(value: boolean | cdktf.IResolvable) {
    this._ignoreOverriddenHosts = value;
  }
  public resetIgnoreOverriddenHosts() {
    this._ignoreOverriddenHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreOverriddenHostsInput() {
    return this._ignoreOverriddenHosts;
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

  // standard_host_switch - computed: false, optional: false, required: true
  private _standardHostSwitch = new PolicyHostTransportNodeProfileStandardHostSwitchList(this, "standard_host_switch", false);
  public get standardHostSwitch() {
    return this._standardHostSwitch;
  }
  public putStandardHostSwitch(value: PolicyHostTransportNodeProfileStandardHostSwitch[] | cdktf.IResolvable) {
    this._standardHostSwitch.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get standardHostSwitchInput() {
    return this._standardHostSwitch.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new PolicyHostTransportNodeProfileTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PolicyHostTransportNodeProfileTag[] | cdktf.IResolvable) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      ignore_overridden_hosts: cdktf.booleanToTerraform(this._ignoreOverriddenHosts),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      standard_host_switch: cdktf.listMapper(policyHostTransportNodeProfileStandardHostSwitchToTerraform, true)(this._standardHostSwitch.internalValue),
      tag: cdktf.listMapper(policyHostTransportNodeProfileTagToTerraform, true)(this._tag.internalValue),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      ignore_overridden_hosts: {
        value: cdktf.booleanToHclTerraform(this._ignoreOverriddenHosts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nsx_id: {
        value: cdktf.stringToHclTerraform(this._nsxId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      standard_host_switch: {
        value: cdktf.listMapperHcl(policyHostTransportNodeProfileStandardHostSwitchToHclTerraform, true)(this._standardHostSwitch.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyHostTransportNodeProfileStandardHostSwitchList",
      },
      tag: {
        value: cdktf.listMapperHcl(policyHostTransportNodeProfileTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyHostTransportNodeProfileTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
