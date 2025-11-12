// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementLsmClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_cluster#color ManagementLsmCluster#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_cluster#comments ManagementLsmCluster#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_cluster#id ManagementLsmCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_cluster#ignore_errors ManagementLsmCluster#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_cluster#ignore_warnings ManagementLsmCluster#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * Main IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_cluster#main_ip_address ManagementLsmCluster#main_ip_address}
  */
  readonly mainIpAddress: string;
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_cluster#name ManagementLsmCluster#name}
  */
  readonly name: string;
  /**
  * LSM profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_cluster#security_profile ManagementLsmCluster#security_profile}
  */
  readonly securityProfile: string;
  /**
  * Collection of tag identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_cluster#tags ManagementLsmCluster#tags}
  */
  readonly tags?: string[];
  /**
  * dynamic_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_cluster#dynamic_objects ManagementLsmCluster#dynamic_objects}
  */
  readonly dynamicObjects?: ManagementLsmClusterDynamicObjects[] | cdktf.IResolvable;
  /**
  * interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_cluster#interfaces ManagementLsmCluster#interfaces}
  */
  readonly interfaces?: ManagementLsmClusterInterfaces[] | cdktf.IResolvable;
  /**
  * members block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_cluster#members ManagementLsmCluster#members}
  */
  readonly members?: ManagementLsmClusterMembers[] | cdktf.IResolvable;
  /**
  * topology block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_cluster#topology ManagementLsmCluster#topology}
  */
  readonly topology?: ManagementLsmClusterTopology;
}
export interface ManagementLsmClusterDynamicObjectsResolvedIpAddressesIpv4AddressRange {
  /**
  * First IPv4 address of the IP address range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_cluster#from_ipv4_address ManagementLsmCluster#from_ipv4_address}
  */
  readonly fromIpv4Address?: string;
  /**
  * Last IPv4 address of the IP address range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_cluster#to_ipv4_address ManagementLsmCluster#to_ipv4_address}
  */
  readonly toIpv4Address?: string;
}

export function managementLsmClusterDynamicObjectsResolvedIpAddressesIpv4AddressRangeToTerraform(struct?: ManagementLsmClusterDynamicObjectsResolvedIpAddressesIpv4AddressRangeOutputReference | ManagementLsmClusterDynamicObjectsResolvedIpAddressesIpv4AddressRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_ipv4_address: cdktf.stringToTerraform(struct!.fromIpv4Address),
    to_ipv4_address: cdktf.stringToTerraform(struct!.toIpv4Address),
  }
}


export function managementLsmClusterDynamicObjectsResolvedIpAddressesIpv4AddressRangeToHclTerraform(struct?: ManagementLsmClusterDynamicObjectsResolvedIpAddressesIpv4AddressRangeOutputReference | ManagementLsmClusterDynamicObjectsResolvedIpAddressesIpv4AddressRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from_ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.fromIpv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to_ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.toIpv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementLsmClusterDynamicObjectsResolvedIpAddressesIpv4AddressRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementLsmClusterDynamicObjectsResolvedIpAddressesIpv4AddressRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromIpv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromIpv4Address = this._fromIpv4Address;
    }
    if (this._toIpv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.toIpv4Address = this._toIpv4Address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementLsmClusterDynamicObjectsResolvedIpAddressesIpv4AddressRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fromIpv4Address = undefined;
      this._toIpv4Address = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fromIpv4Address = value.fromIpv4Address;
      this._toIpv4Address = value.toIpv4Address;
    }
  }

  // from_ipv4_address - computed: false, optional: true, required: false
  private _fromIpv4Address?: string; 
  public get fromIpv4Address() {
    return this.getStringAttribute('from_ipv4_address');
  }
  public set fromIpv4Address(value: string) {
    this._fromIpv4Address = value;
  }
  public resetFromIpv4Address() {
    this._fromIpv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromIpv4AddressInput() {
    return this._fromIpv4Address;
  }

  // to_ipv4_address - computed: false, optional: true, required: false
  private _toIpv4Address?: string; 
  public get toIpv4Address() {
    return this.getStringAttribute('to_ipv4_address');
  }
  public set toIpv4Address(value: string) {
    this._toIpv4Address = value;
  }
  public resetToIpv4Address() {
    this._toIpv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toIpv4AddressInput() {
    return this._toIpv4Address;
  }
}
export interface ManagementLsmClusterDynamicObjectsResolvedIpAddresses {
  /**
  * IPv4 Address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_cluster#ipv4_address ManagementLsmCluster#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * ipv4_address_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_cluster#ipv4_address_range ManagementLsmCluster#ipv4_address_range}
  */
  readonly ipv4AddressRange?: ManagementLsmClusterDynamicObjectsResolvedIpAddressesIpv4AddressRange;
}

export function managementLsmClusterDynamicObjectsResolvedIpAddressesToTerraform(struct?: ManagementLsmClusterDynamicObjectsResolvedIpAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv4_address_range: managementLsmClusterDynamicObjectsResolvedIpAddressesIpv4AddressRangeToTerraform(struct!.ipv4AddressRange),
  }
}


export function managementLsmClusterDynamicObjectsResolvedIpAddressesToHclTerraform(struct?: ManagementLsmClusterDynamicObjectsResolvedIpAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_address_range: {
      value: managementLsmClusterDynamicObjectsResolvedIpAddressesIpv4AddressRangeToHclTerraform(struct!.ipv4AddressRange),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementLsmClusterDynamicObjectsResolvedIpAddressesIpv4AddressRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementLsmClusterDynamicObjectsResolvedIpAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementLsmClusterDynamicObjectsResolvedIpAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv4AddressRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4AddressRange = this._ipv4AddressRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementLsmClusterDynamicObjectsResolvedIpAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Address = undefined;
      this._ipv4AddressRange.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Address = value.ipv4Address;
      this._ipv4AddressRange.internalValue = value.ipv4AddressRange;
    }
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

  // ipv4_address_range - computed: false, optional: true, required: false
  private _ipv4AddressRange = new ManagementLsmClusterDynamicObjectsResolvedIpAddressesIpv4AddressRangeOutputReference(this, "ipv4_address_range");
  public get ipv4AddressRange() {
    return this._ipv4AddressRange;
  }
  public putIpv4AddressRange(value: ManagementLsmClusterDynamicObjectsResolvedIpAddressesIpv4AddressRange) {
    this._ipv4AddressRange.internalValue = value;
  }
  public resetIpv4AddressRange() {
    this._ipv4AddressRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressRangeInput() {
    return this._ipv4AddressRange.internalValue;
  }
}

export class ManagementLsmClusterDynamicObjectsResolvedIpAddressesList extends cdktf.ComplexList {
  public internalValue? : ManagementLsmClusterDynamicObjectsResolvedIpAddresses[] | cdktf.IResolvable

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
  public get(index: number): ManagementLsmClusterDynamicObjectsResolvedIpAddressesOutputReference {
    return new ManagementLsmClusterDynamicObjectsResolvedIpAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementLsmClusterDynamicObjects {
  /**
  * Object name. Must be unique in the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_cluster#name ManagementLsmCluster#name}
  */
  readonly name: string;
  /**
  * resolved_ip_addresses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_cluster#resolved_ip_addresses ManagementLsmCluster#resolved_ip_addresses}
  */
  readonly resolvedIpAddresses?: ManagementLsmClusterDynamicObjectsResolvedIpAddresses[] | cdktf.IResolvable;
}

export function managementLsmClusterDynamicObjectsToTerraform(struct?: ManagementLsmClusterDynamicObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    resolved_ip_addresses: cdktf.listMapper(managementLsmClusterDynamicObjectsResolvedIpAddressesToTerraform, true)(struct!.resolvedIpAddresses),
  }
}


export function managementLsmClusterDynamicObjectsToHclTerraform(struct?: ManagementLsmClusterDynamicObjects | cdktf.IResolvable): any {
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
    resolved_ip_addresses: {
      value: cdktf.listMapperHcl(managementLsmClusterDynamicObjectsResolvedIpAddressesToHclTerraform, true)(struct!.resolvedIpAddresses),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementLsmClusterDynamicObjectsResolvedIpAddressesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementLsmClusterDynamicObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementLsmClusterDynamicObjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resolvedIpAddresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolvedIpAddresses = this._resolvedIpAddresses?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementLsmClusterDynamicObjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._resolvedIpAddresses.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._resolvedIpAddresses.internalValue = value.resolvedIpAddresses;
    }
  }

  // comments - computed: true, optional: false, required: false
  public get comments() {
    return this.getStringAttribute('comments');
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

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // resolved_ip_addresses - computed: false, optional: true, required: false
  private _resolvedIpAddresses = new ManagementLsmClusterDynamicObjectsResolvedIpAddressesList(this, "resolved_ip_addresses", false);
  public get resolvedIpAddresses() {
    return this._resolvedIpAddresses;
  }
  public putResolvedIpAddresses(value: ManagementLsmClusterDynamicObjectsResolvedIpAddresses[] | cdktf.IResolvable) {
    this._resolvedIpAddresses.internalValue = value;
  }
  public resetResolvedIpAddresses() {
    this._resolvedIpAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolvedIpAddressesInput() {
    return this._resolvedIpAddresses.internalValue;
  }
}

export class ManagementLsmClusterDynamicObjectsList extends cdktf.ComplexList {
  public internalValue? : ManagementLsmClusterDynamicObjects[] | cdktf.IResolvable

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
  public get(index: number): ManagementLsmClusterDynamicObjectsOutputReference {
    return new ManagementLsmClusterDynamicObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementLsmClusterInterfaces {
  /**
  * IP address override. Net mask is defined by the attached LSM profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_cluster#ip_address_override ManagementLsmCluster#ip_address_override}
  */
  readonly ipAddressOverride?: string;
  /**
  * Member network override. Net mask is defined by the attached LSM profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_cluster#member_network_override ManagementLsmCluster#member_network_override}
  */
  readonly memberNetworkOverride?: string;
  /**
  * Interface name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_cluster#name ManagementLsmCluster#name}
  */
  readonly name?: string;
  /**
  * New name. Overrides the interface name on profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_cluster#new_name ManagementLsmCluster#new_name}
  */
  readonly newName?: string;
}

export function managementLsmClusterInterfacesToTerraform(struct?: ManagementLsmClusterInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address_override: cdktf.stringToTerraform(struct!.ipAddressOverride),
    member_network_override: cdktf.stringToTerraform(struct!.memberNetworkOverride),
    name: cdktf.stringToTerraform(struct!.name),
    new_name: cdktf.stringToTerraform(struct!.newName),
  }
}


export function managementLsmClusterInterfacesToHclTerraform(struct?: ManagementLsmClusterInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address_override: {
      value: cdktf.stringToHclTerraform(struct!.ipAddressOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    member_network_override: {
      value: cdktf.stringToHclTerraform(struct!.memberNetworkOverride),
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
    new_name: {
      value: cdktf.stringToHclTerraform(struct!.newName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementLsmClusterInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementLsmClusterInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddressOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressOverride = this._ipAddressOverride;
    }
    if (this._memberNetworkOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberNetworkOverride = this._memberNetworkOverride;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._newName !== undefined) {
      hasAnyValues = true;
      internalValueResult.newName = this._newName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementLsmClusterInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddressOverride = undefined;
      this._memberNetworkOverride = undefined;
      this._name = undefined;
      this._newName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddressOverride = value.ipAddressOverride;
      this._memberNetworkOverride = value.memberNetworkOverride;
      this._name = value.name;
      this._newName = value.newName;
    }
  }

  // ip_address_override - computed: false, optional: true, required: false
  private _ipAddressOverride?: string; 
  public get ipAddressOverride() {
    return this.getStringAttribute('ip_address_override');
  }
  public set ipAddressOverride(value: string) {
    this._ipAddressOverride = value;
  }
  public resetIpAddressOverride() {
    this._ipAddressOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressOverrideInput() {
    return this._ipAddressOverride;
  }

  // member_network_override - computed: false, optional: true, required: false
  private _memberNetworkOverride?: string; 
  public get memberNetworkOverride() {
    return this.getStringAttribute('member_network_override');
  }
  public set memberNetworkOverride(value: string) {
    this._memberNetworkOverride = value;
  }
  public resetMemberNetworkOverride() {
    this._memberNetworkOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberNetworkOverrideInput() {
    return this._memberNetworkOverride;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // new_name - computed: false, optional: true, required: false
  private _newName?: string; 
  public get newName() {
    return this.getStringAttribute('new_name');
  }
  public set newName(value: string) {
    this._newName = value;
  }
  public resetNewName() {
    this._newName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newNameInput() {
    return this._newName;
  }
}

export class ManagementLsmClusterInterfacesList extends cdktf.ComplexList {
  public internalValue? : ManagementLsmClusterInterfaces[] | cdktf.IResolvable

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
  public get(index: number): ManagementLsmClusterInterfacesOutputReference {
    return new ManagementLsmClusterInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementLsmClusterMembersInterfaces {
}

export function managementLsmClusterMembersInterfacesToTerraform(struct?: ManagementLsmClusterMembersInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function managementLsmClusterMembersInterfacesToHclTerraform(struct?: ManagementLsmClusterMembersInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ManagementLsmClusterMembersInterfacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ManagementLsmClusterMembersInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementLsmClusterMembersInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class ManagementLsmClusterMembersInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): ManagementLsmClusterMembersInterfacesOutputReference {
    return new ManagementLsmClusterMembersInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementLsmClusterMembersProvisioningSettings {
  /**
  * Provisioning profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_cluster#provisioning_profile ManagementLsmCluster#provisioning_profile}
  */
  readonly provisioningProfile?: string;
}

export function managementLsmClusterMembersProvisioningSettingsToTerraform(struct?: ManagementLsmClusterMembersProvisioningSettingsOutputReference | ManagementLsmClusterMembersProvisioningSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provisioning_profile: cdktf.stringToTerraform(struct!.provisioningProfile),
  }
}


export function managementLsmClusterMembersProvisioningSettingsToHclTerraform(struct?: ManagementLsmClusterMembersProvisioningSettingsOutputReference | ManagementLsmClusterMembersProvisioningSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provisioning_profile: {
      value: cdktf.stringToHclTerraform(struct!.provisioningProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementLsmClusterMembersProvisioningSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementLsmClusterMembersProvisioningSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provisioningProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisioningProfile = this._provisioningProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementLsmClusterMembersProvisioningSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provisioningProfile = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provisioningProfile = value.provisioningProfile;
    }
  }

  // provisioning_profile - computed: false, optional: true, required: false
  private _provisioningProfile?: string; 
  public get provisioningProfile() {
    return this.getStringAttribute('provisioning_profile');
  }
  public set provisioningProfile(value: string) {
    this._provisioningProfile = value;
  }
  public resetProvisioningProfile() {
    this._provisioningProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningProfileInput() {
    return this._provisioningProfile;
  }
}
export interface ManagementLsmClusterMembersSic {
  /**
  * IP address. When IP address is provided- initiate trusted communication immediately using this IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_cluster#ip_address ManagementLsmCluster#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * One-time password. When one-time password is provided without ip-address- trusted communication is automatically initiated  when the gateway connects to the Security Management server for the first time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_cluster#one_time_password ManagementLsmCluster#one_time_password}
  */
  readonly oneTimePassword?: string;
}

export function managementLsmClusterMembersSicToTerraform(struct?: ManagementLsmClusterMembersSicOutputReference | ManagementLsmClusterMembersSic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    one_time_password: cdktf.stringToTerraform(struct!.oneTimePassword),
  }
}


export function managementLsmClusterMembersSicToHclTerraform(struct?: ManagementLsmClusterMembersSicOutputReference | ManagementLsmClusterMembersSic): any {
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
    one_time_password: {
      value: cdktf.stringToHclTerraform(struct!.oneTimePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementLsmClusterMembersSicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementLsmClusterMembersSic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._oneTimePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.oneTimePassword = this._oneTimePassword;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementLsmClusterMembersSic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipAddress = undefined;
      this._oneTimePassword = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipAddress = value.ipAddress;
      this._oneTimePassword = value.oneTimePassword;
    }
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // one_time_password - computed: false, optional: true, required: false
  private _oneTimePassword?: string; 
  public get oneTimePassword() {
    return this.getStringAttribute('one_time_password');
  }
  public set oneTimePassword(value: string) {
    this._oneTimePassword = value;
  }
  public resetOneTimePassword() {
    this._oneTimePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneTimePasswordInput() {
    return this._oneTimePassword;
  }
}
export interface ManagementLsmClusterMembers {
  /**
  * Device ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_cluster#device_id ManagementLsmCluster#device_id}
  */
  readonly deviceId?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_cluster#ignore_errors ManagementLsmCluster#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_cluster#ignore_warnings ManagementLsmCluster#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * Member Name. Consists of the member name in the LSM profile and the name or prefix or suffix of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_cluster#name ManagementLsmCluster#name}
  */
  readonly name?: string;
  /**
  * Provisioning state. This field is relevant just for SMB clusters. By default the state is 'manual'- enable provisioning but not attach to profile.If 'using-profile' state is provided a provisioning profile must be provided in provisioning-settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_cluster#provisioning_state ManagementLsmCluster#provisioning_state}
  */
  readonly provisioningState?: string;
  /**
  * provisioning_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_cluster#provisioning_settings ManagementLsmCluster#provisioning_settings}
  */
  readonly provisioningSettings?: ManagementLsmClusterMembersProvisioningSettings;
  /**
  * sic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_cluster#sic ManagementLsmCluster#sic}
  */
  readonly sic?: ManagementLsmClusterMembersSic;
}

export function managementLsmClusterMembersToTerraform(struct?: ManagementLsmClusterMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_id: cdktf.stringToTerraform(struct!.deviceId),
    ignore_errors: cdktf.booleanToTerraform(struct!.ignoreErrors),
    ignore_warnings: cdktf.booleanToTerraform(struct!.ignoreWarnings),
    name: cdktf.stringToTerraform(struct!.name),
    provisioning_state: cdktf.stringToTerraform(struct!.provisioningState),
    provisioning_settings: managementLsmClusterMembersProvisioningSettingsToTerraform(struct!.provisioningSettings),
    sic: managementLsmClusterMembersSicToTerraform(struct!.sic),
  }
}


export function managementLsmClusterMembersToHclTerraform(struct?: ManagementLsmClusterMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_id: {
      value: cdktf.stringToHclTerraform(struct!.deviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_errors: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_warnings: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreWarnings),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provisioning_state: {
      value: cdktf.stringToHclTerraform(struct!.provisioningState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provisioning_settings: {
      value: managementLsmClusterMembersProvisioningSettingsToHclTerraform(struct!.provisioningSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementLsmClusterMembersProvisioningSettingsList",
    },
    sic: {
      value: managementLsmClusterMembersSicToHclTerraform(struct!.sic),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementLsmClusterMembersSicList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementLsmClusterMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementLsmClusterMembers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceId = this._deviceId;
    }
    if (this._ignoreErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreErrors = this._ignoreErrors;
    }
    if (this._ignoreWarnings !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreWarnings = this._ignoreWarnings;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._provisioningState !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisioningState = this._provisioningState;
    }
    if (this._provisioningSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisioningSettings = this._provisioningSettings?.internalValue;
    }
    if (this._sic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sic = this._sic?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementLsmClusterMembers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceId = undefined;
      this._ignoreErrors = undefined;
      this._ignoreWarnings = undefined;
      this._name = undefined;
      this._provisioningState = undefined;
      this._provisioningSettings.internalValue = undefined;
      this._sic.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceId = value.deviceId;
      this._ignoreErrors = value.ignoreErrors;
      this._ignoreWarnings = value.ignoreWarnings;
      this._name = value.name;
      this._provisioningState = value.provisioningState;
      this._provisioningSettings.internalValue = value.provisioningSettings;
      this._sic.internalValue = value.sic;
    }
  }

  // device_id - computed: false, optional: true, required: false
  private _deviceId?: string; 
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }
  public set deviceId(value: string) {
    this._deviceId = value;
  }
  public resetDeviceId() {
    this._deviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
  }

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean | cdktf.IResolvable; 
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }
  public set ignoreErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors;
  }

  // ignore_warnings - computed: false, optional: true, required: false
  private _ignoreWarnings?: boolean | cdktf.IResolvable; 
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings');
  }
  public set ignoreWarnings(value: boolean | cdktf.IResolvable) {
    this._ignoreWarnings = value;
  }
  public resetIgnoreWarnings() {
    this._ignoreWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWarningsInput() {
    return this._ignoreWarnings;
  }

  // interfaces - computed: true, optional: false, required: false
  private _interfaces = new ManagementLsmClusterMembersInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }

  // main_ip_address - computed: true, optional: false, required: false
  public get mainIpAddress() {
    return this.getStringAttribute('main_ip_address');
  }

  // member_uid - computed: true, optional: false, required: false
  public get memberUid() {
    return this.getStringAttribute('member_uid');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // provisioning_state - computed: false, optional: true, required: false
  private _provisioningState?: string; 
  public get provisioningState() {
    return this.getStringAttribute('provisioning_state');
  }
  public set provisioningState(value: string) {
    this._provisioningState = value;
  }
  public resetProvisioningState() {
    this._provisioningState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningStateInput() {
    return this._provisioningState;
  }

  // sic_name - computed: true, optional: false, required: false
  public get sicName() {
    return this.getStringAttribute('sic_name');
  }

  // sic_state - computed: true, optional: false, required: false
  public get sicState() {
    return this.getStringAttribute('sic_state');
  }

  // provisioning_settings - computed: false, optional: true, required: false
  private _provisioningSettings = new ManagementLsmClusterMembersProvisioningSettingsOutputReference(this, "provisioning_settings");
  public get provisioningSettings() {
    return this._provisioningSettings;
  }
  public putProvisioningSettings(value: ManagementLsmClusterMembersProvisioningSettings) {
    this._provisioningSettings.internalValue = value;
  }
  public resetProvisioningSettings() {
    this._provisioningSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningSettingsInput() {
    return this._provisioningSettings.internalValue;
  }

  // sic - computed: false, optional: true, required: false
  private _sic = new ManagementLsmClusterMembersSicOutputReference(this, "sic");
  public get sic() {
    return this._sic;
  }
  public putSic(value: ManagementLsmClusterMembersSic) {
    this._sic.internalValue = value;
  }
  public resetSic() {
    this._sic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sicInput() {
    return this._sic.internalValue;
  }
}

export class ManagementLsmClusterMembersList extends cdktf.ComplexList {
  public internalValue? : ManagementLsmClusterMembers[] | cdktf.IResolvable

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
  public get(index: number): ManagementLsmClusterMembersOutputReference {
    return new ManagementLsmClusterMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementLsmClusterTopologyManualVpnDomain {
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_cluster#comments ManagementLsmCluster#comments}
  */
  readonly comments?: string;
  /**
  * First IPv4 address of the IP address range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_cluster#from_ipv4_address ManagementLsmCluster#from_ipv4_address}
  */
  readonly fromIpv4Address?: string;
  /**
  * Last IPv4 address of the IP address range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_cluster#to_ipv4_address ManagementLsmCluster#to_ipv4_address}
  */
  readonly toIpv4Address?: string;
}

export function managementLsmClusterTopologyManualVpnDomainToTerraform(struct?: ManagementLsmClusterTopologyManualVpnDomain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comments: cdktf.stringToTerraform(struct!.comments),
    from_ipv4_address: cdktf.stringToTerraform(struct!.fromIpv4Address),
    to_ipv4_address: cdktf.stringToTerraform(struct!.toIpv4Address),
  }
}


export function managementLsmClusterTopologyManualVpnDomainToHclTerraform(struct?: ManagementLsmClusterTopologyManualVpnDomain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comments: {
      value: cdktf.stringToHclTerraform(struct!.comments),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from_ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.fromIpv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to_ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.toIpv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementLsmClusterTopologyManualVpnDomainOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementLsmClusterTopologyManualVpnDomain | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comments !== undefined) {
      hasAnyValues = true;
      internalValueResult.comments = this._comments;
    }
    if (this._fromIpv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromIpv4Address = this._fromIpv4Address;
    }
    if (this._toIpv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.toIpv4Address = this._toIpv4Address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementLsmClusterTopologyManualVpnDomain | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comments = undefined;
      this._fromIpv4Address = undefined;
      this._toIpv4Address = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comments = value.comments;
      this._fromIpv4Address = value.fromIpv4Address;
      this._toIpv4Address = value.toIpv4Address;
    }
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // from_ipv4_address - computed: false, optional: true, required: false
  private _fromIpv4Address?: string; 
  public get fromIpv4Address() {
    return this.getStringAttribute('from_ipv4_address');
  }
  public set fromIpv4Address(value: string) {
    this._fromIpv4Address = value;
  }
  public resetFromIpv4Address() {
    this._fromIpv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromIpv4AddressInput() {
    return this._fromIpv4Address;
  }

  // to_ipv4_address - computed: false, optional: true, required: false
  private _toIpv4Address?: string; 
  public get toIpv4Address() {
    return this.getStringAttribute('to_ipv4_address');
  }
  public set toIpv4Address(value: string) {
    this._toIpv4Address = value;
  }
  public resetToIpv4Address() {
    this._toIpv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toIpv4AddressInput() {
    return this._toIpv4Address;
  }
}

export class ManagementLsmClusterTopologyManualVpnDomainList extends cdktf.ComplexList {
  public internalValue? : ManagementLsmClusterTopologyManualVpnDomain[] | cdktf.IResolvable

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
  public get(index: number): ManagementLsmClusterTopologyManualVpnDomainOutputReference {
    return new ManagementLsmClusterTopologyManualVpnDomainOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementLsmClusterTopology {
  /**
  * VPN Domain type.  'external-interfaces-only' is relevnt only for Gaia devices. 'hide-behind-gateway-external-ip-address' is relevant only for SMB devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_cluster#vpn_domain ManagementLsmCluster#vpn_domain}
  */
  readonly vpnDomain?: string;
  /**
  * manual_vpn_domain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_cluster#manual_vpn_domain ManagementLsmCluster#manual_vpn_domain}
  */
  readonly manualVpnDomain?: ManagementLsmClusterTopologyManualVpnDomain[] | cdktf.IResolvable;
}

export function managementLsmClusterTopologyToTerraform(struct?: ManagementLsmClusterTopologyOutputReference | ManagementLsmClusterTopology): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vpn_domain: cdktf.stringToTerraform(struct!.vpnDomain),
    manual_vpn_domain: cdktf.listMapper(managementLsmClusterTopologyManualVpnDomainToTerraform, true)(struct!.manualVpnDomain),
  }
}


export function managementLsmClusterTopologyToHclTerraform(struct?: ManagementLsmClusterTopologyOutputReference | ManagementLsmClusterTopology): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vpn_domain: {
      value: cdktf.stringToHclTerraform(struct!.vpnDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    manual_vpn_domain: {
      value: cdktf.listMapperHcl(managementLsmClusterTopologyManualVpnDomainToHclTerraform, true)(struct!.manualVpnDomain),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementLsmClusterTopologyManualVpnDomainList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementLsmClusterTopologyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementLsmClusterTopology | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vpnDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnDomain = this._vpnDomain;
    }
    if (this._manualVpnDomain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualVpnDomain = this._manualVpnDomain?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementLsmClusterTopology | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._vpnDomain = undefined;
      this._manualVpnDomain.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._vpnDomain = value.vpnDomain;
      this._manualVpnDomain.internalValue = value.manualVpnDomain;
    }
  }

  // vpn_domain - computed: false, optional: true, required: false
  private _vpnDomain?: string; 
  public get vpnDomain() {
    return this.getStringAttribute('vpn_domain');
  }
  public set vpnDomain(value: string) {
    this._vpnDomain = value;
  }
  public resetVpnDomain() {
    this._vpnDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnDomainInput() {
    return this._vpnDomain;
  }

  // manual_vpn_domain - computed: false, optional: true, required: false
  private _manualVpnDomain = new ManagementLsmClusterTopologyManualVpnDomainList(this, "manual_vpn_domain", false);
  public get manualVpnDomain() {
    return this._manualVpnDomain;
  }
  public putManualVpnDomain(value: ManagementLsmClusterTopologyManualVpnDomain[] | cdktf.IResolvable) {
    this._manualVpnDomain.internalValue = value;
  }
  public resetManualVpnDomain() {
    this._manualVpnDomain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualVpnDomainInput() {
    return this._manualVpnDomain.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_cluster checkpoint_management_lsm_cluster}
*/
export class ManagementLsmCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_lsm_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementLsmCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementLsmCluster to import
  * @param importFromId The id of the existing ManagementLsmCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementLsmCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_lsm_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_cluster checkpoint_management_lsm_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementLsmClusterConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementLsmClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_lsm_cluster',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.12.0',
        providerVersionConstraint: '2.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._color = config.color;
    this._comments = config.comments;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._mainIpAddress = config.mainIpAddress;
    this._name = config.name;
    this._securityProfile = config.securityProfile;
    this._tags = config.tags;
    this._dynamicObjects.internalValue = config.dynamicObjects;
    this._interfaces.internalValue = config.interfaces;
    this._members.internalValue = config.members;
    this._topology.internalValue = config.topology;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
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

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean | cdktf.IResolvable; 
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }
  public set ignoreErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors;
  }

  // ignore_warnings - computed: false, optional: true, required: false
  private _ignoreWarnings?: boolean | cdktf.IResolvable; 
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings');
  }
  public set ignoreWarnings(value: boolean | cdktf.IResolvable) {
    this._ignoreWarnings = value;
  }
  public resetIgnoreWarnings() {
    this._ignoreWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWarningsInput() {
    return this._ignoreWarnings;
  }

  // main_ip_address - computed: false, optional: false, required: true
  private _mainIpAddress?: string; 
  public get mainIpAddress() {
    return this.getStringAttribute('main_ip_address');
  }
  public set mainIpAddress(value: string) {
    this._mainIpAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mainIpAddressInput() {
    return this._mainIpAddress;
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

  // os_name - computed: true, optional: false, required: false
  public get osName() {
    return this.getStringAttribute('os_name');
  }

  // security_profile - computed: false, optional: false, required: true
  private _securityProfile?: string; 
  public get securityProfile() {
    return this.getStringAttribute('security_profile');
  }
  public set securityProfile(value: string) {
    this._securityProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProfileInput() {
    return this._securityProfile;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // dynamic_objects - computed: false, optional: true, required: false
  private _dynamicObjects = new ManagementLsmClusterDynamicObjectsList(this, "dynamic_objects", false);
  public get dynamicObjects() {
    return this._dynamicObjects;
  }
  public putDynamicObjects(value: ManagementLsmClusterDynamicObjects[] | cdktf.IResolvable) {
    this._dynamicObjects.internalValue = value;
  }
  public resetDynamicObjects() {
    this._dynamicObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicObjectsInput() {
    return this._dynamicObjects.internalValue;
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces = new ManagementLsmClusterInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: ManagementLsmClusterInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // members - computed: false, optional: true, required: false
  private _members = new ManagementLsmClusterMembersList(this, "members", false);
  public get members() {
    return this._members;
  }
  public putMembers(value: ManagementLsmClusterMembers[] | cdktf.IResolvable) {
    this._members.internalValue = value;
  }
  public resetMembers() {
    this._members.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members.internalValue;
  }

  // topology - computed: false, optional: true, required: false
  private _topology = new ManagementLsmClusterTopologyOutputReference(this, "topology");
  public get topology() {
    return this._topology;
  }
  public putTopology(value: ManagementLsmClusterTopology) {
    this._topology.internalValue = value;
  }
  public resetTopology() {
    this._topology.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyInput() {
    return this._topology.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      color: cdktf.stringToTerraform(this._color),
      comments: cdktf.stringToTerraform(this._comments),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      main_ip_address: cdktf.stringToTerraform(this._mainIpAddress),
      name: cdktf.stringToTerraform(this._name),
      security_profile: cdktf.stringToTerraform(this._securityProfile),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      dynamic_objects: cdktf.listMapper(managementLsmClusterDynamicObjectsToTerraform, true)(this._dynamicObjects.internalValue),
      interfaces: cdktf.listMapper(managementLsmClusterInterfacesToTerraform, true)(this._interfaces.internalValue),
      members: cdktf.listMapper(managementLsmClusterMembersToTerraform, true)(this._members.internalValue),
      topology: managementLsmClusterTopologyToTerraform(this._topology.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      color: {
        value: cdktf.stringToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
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
      ignore_errors: {
        value: cdktf.booleanToHclTerraform(this._ignoreErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_warnings: {
        value: cdktf.booleanToHclTerraform(this._ignoreWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      main_ip_address: {
        value: cdktf.stringToHclTerraform(this._mainIpAddress),
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
      security_profile: {
        value: cdktf.stringToHclTerraform(this._securityProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynamic_objects: {
        value: cdktf.listMapperHcl(managementLsmClusterDynamicObjectsToHclTerraform, true)(this._dynamicObjects.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementLsmClusterDynamicObjectsList",
      },
      interfaces: {
        value: cdktf.listMapperHcl(managementLsmClusterInterfacesToHclTerraform, true)(this._interfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementLsmClusterInterfacesList",
      },
      members: {
        value: cdktf.listMapperHcl(managementLsmClusterMembersToHclTerraform, true)(this._members.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementLsmClusterMembersList",
      },
      topology: {
        value: managementLsmClusterTopologyToHclTerraform(this._topology.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementLsmClusterTopologyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
