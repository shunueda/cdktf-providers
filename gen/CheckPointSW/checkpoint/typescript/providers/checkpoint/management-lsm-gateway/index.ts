// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementLsmGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_gateway#color ManagementLsmGateway#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_gateway#comments ManagementLsmGateway#comments}
  */
  readonly comments?: string;
  /**
  * Device ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_gateway#device_id ManagementLsmGateway#device_id}
  */
  readonly deviceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_gateway#id ManagementLsmGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_gateway#ignore_errors ManagementLsmGateway#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_gateway#ignore_warnings ManagementLsmGateway#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_gateway#name ManagementLsmGateway#name}
  */
  readonly name: string;
  /**
  * Provisioning settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_gateway#provisioning_settings ManagementLsmGateway#provisioning_settings}
  */
  readonly provisioningSettings?: { [key: string]: string };
  /**
  * Provisioning state. By default the state is 'manual'- enable provisioning but not attach to profile. If 'using-profile' state is provided a provisioning profile must be provided in provisioning-settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_gateway#provisioning_state ManagementLsmGateway#provisioning_state}
  */
  readonly provisioningState?: string;
  /**
  * LSM profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_gateway#security_profile ManagementLsmGateway#security_profile}
  */
  readonly securityProfile: string;
  /**
  * Secure Internal Communication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_gateway#sic ManagementLsmGateway#sic}
  */
  readonly sic?: { [key: string]: string };
  /**
  * Collection of tag identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_gateway#tags ManagementLsmGateway#tags}
  */
  readonly tags?: string[];
  /**
  * Device platform version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_gateway#version ManagementLsmGateway#version}
  */
  readonly version?: string;
  /**
  * dynamic_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_gateway#dynamic_objects ManagementLsmGateway#dynamic_objects}
  */
  readonly dynamicObjects?: ManagementLsmGatewayDynamicObjects[] | cdktf.IResolvable;
  /**
  * topology block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_gateway#topology ManagementLsmGateway#topology}
  */
  readonly topology?: ManagementLsmGatewayTopology;
}
export interface ManagementLsmGatewayDynamicObjectsResolvedIpAddressesIpv4AddressRange {
  /**
  * First IPv4 address of the IP address range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_gateway#from_ipv4_address ManagementLsmGateway#from_ipv4_address}
  */
  readonly fromIpv4Address?: string;
  /**
  * Last IPv4 address of the IP address range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_gateway#to_ipv4_address ManagementLsmGateway#to_ipv4_address}
  */
  readonly toIpv4Address?: string;
}

export function managementLsmGatewayDynamicObjectsResolvedIpAddressesIpv4AddressRangeToTerraform(struct?: ManagementLsmGatewayDynamicObjectsResolvedIpAddressesIpv4AddressRangeOutputReference | ManagementLsmGatewayDynamicObjectsResolvedIpAddressesIpv4AddressRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_ipv4_address: cdktf.stringToTerraform(struct!.fromIpv4Address),
    to_ipv4_address: cdktf.stringToTerraform(struct!.toIpv4Address),
  }
}


export function managementLsmGatewayDynamicObjectsResolvedIpAddressesIpv4AddressRangeToHclTerraform(struct?: ManagementLsmGatewayDynamicObjectsResolvedIpAddressesIpv4AddressRangeOutputReference | ManagementLsmGatewayDynamicObjectsResolvedIpAddressesIpv4AddressRange): any {
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

export class ManagementLsmGatewayDynamicObjectsResolvedIpAddressesIpv4AddressRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementLsmGatewayDynamicObjectsResolvedIpAddressesIpv4AddressRange | undefined {
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

  public set internalValue(value: ManagementLsmGatewayDynamicObjectsResolvedIpAddressesIpv4AddressRange | undefined) {
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
export interface ManagementLsmGatewayDynamicObjectsResolvedIpAddresses {
  /**
  * IPv4 Address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_gateway#ipv4_address ManagementLsmGateway#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * ipv4_address_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_gateway#ipv4_address_range ManagementLsmGateway#ipv4_address_range}
  */
  readonly ipv4AddressRange?: ManagementLsmGatewayDynamicObjectsResolvedIpAddressesIpv4AddressRange;
}

export function managementLsmGatewayDynamicObjectsResolvedIpAddressesToTerraform(struct?: ManagementLsmGatewayDynamicObjectsResolvedIpAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv4_address_range: managementLsmGatewayDynamicObjectsResolvedIpAddressesIpv4AddressRangeToTerraform(struct!.ipv4AddressRange),
  }
}


export function managementLsmGatewayDynamicObjectsResolvedIpAddressesToHclTerraform(struct?: ManagementLsmGatewayDynamicObjectsResolvedIpAddresses | cdktf.IResolvable): any {
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
      value: managementLsmGatewayDynamicObjectsResolvedIpAddressesIpv4AddressRangeToHclTerraform(struct!.ipv4AddressRange),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementLsmGatewayDynamicObjectsResolvedIpAddressesIpv4AddressRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementLsmGatewayDynamicObjectsResolvedIpAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementLsmGatewayDynamicObjectsResolvedIpAddresses | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ManagementLsmGatewayDynamicObjectsResolvedIpAddresses | cdktf.IResolvable | undefined) {
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
  private _ipv4AddressRange = new ManagementLsmGatewayDynamicObjectsResolvedIpAddressesIpv4AddressRangeOutputReference(this, "ipv4_address_range");
  public get ipv4AddressRange() {
    return this._ipv4AddressRange;
  }
  public putIpv4AddressRange(value: ManagementLsmGatewayDynamicObjectsResolvedIpAddressesIpv4AddressRange) {
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

export class ManagementLsmGatewayDynamicObjectsResolvedIpAddressesList extends cdktf.ComplexList {
  public internalValue? : ManagementLsmGatewayDynamicObjectsResolvedIpAddresses[] | cdktf.IResolvable

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
  public get(index: number): ManagementLsmGatewayDynamicObjectsResolvedIpAddressesOutputReference {
    return new ManagementLsmGatewayDynamicObjectsResolvedIpAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementLsmGatewayDynamicObjects {
  /**
  * Object name. Must be unique in the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_gateway#name ManagementLsmGateway#name}
  */
  readonly name: string;
  /**
  * resolved_ip_addresses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_gateway#resolved_ip_addresses ManagementLsmGateway#resolved_ip_addresses}
  */
  readonly resolvedIpAddresses?: ManagementLsmGatewayDynamicObjectsResolvedIpAddresses[] | cdktf.IResolvable;
}

export function managementLsmGatewayDynamicObjectsToTerraform(struct?: ManagementLsmGatewayDynamicObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    resolved_ip_addresses: cdktf.listMapper(managementLsmGatewayDynamicObjectsResolvedIpAddressesToTerraform, true)(struct!.resolvedIpAddresses),
  }
}


export function managementLsmGatewayDynamicObjectsToHclTerraform(struct?: ManagementLsmGatewayDynamicObjects | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(managementLsmGatewayDynamicObjectsResolvedIpAddressesToHclTerraform, true)(struct!.resolvedIpAddresses),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementLsmGatewayDynamicObjectsResolvedIpAddressesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementLsmGatewayDynamicObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementLsmGatewayDynamicObjects | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ManagementLsmGatewayDynamicObjects | cdktf.IResolvable | undefined) {
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
  private _resolvedIpAddresses = new ManagementLsmGatewayDynamicObjectsResolvedIpAddressesList(this, "resolved_ip_addresses", false);
  public get resolvedIpAddresses() {
    return this._resolvedIpAddresses;
  }
  public putResolvedIpAddresses(value: ManagementLsmGatewayDynamicObjectsResolvedIpAddresses[] | cdktf.IResolvable) {
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

export class ManagementLsmGatewayDynamicObjectsList extends cdktf.ComplexList {
  public internalValue? : ManagementLsmGatewayDynamicObjects[] | cdktf.IResolvable

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
  public get(index: number): ManagementLsmGatewayDynamicObjectsOutputReference {
    return new ManagementLsmGatewayDynamicObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementLsmGatewayTopologyManualVpnDomain {
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_gateway#comments ManagementLsmGateway#comments}
  */
  readonly comments?: string;
  /**
  * First IPv4 address of the IP address range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_gateway#from_ipv4_address ManagementLsmGateway#from_ipv4_address}
  */
  readonly fromIpv4Address?: string;
  /**
  * Last IPv4 address of the IP address range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_gateway#to_ipv4_address ManagementLsmGateway#to_ipv4_address}
  */
  readonly toIpv4Address?: string;
}

export function managementLsmGatewayTopologyManualVpnDomainToTerraform(struct?: ManagementLsmGatewayTopologyManualVpnDomain | cdktf.IResolvable): any {
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


export function managementLsmGatewayTopologyManualVpnDomainToHclTerraform(struct?: ManagementLsmGatewayTopologyManualVpnDomain | cdktf.IResolvable): any {
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

export class ManagementLsmGatewayTopologyManualVpnDomainOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementLsmGatewayTopologyManualVpnDomain | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ManagementLsmGatewayTopologyManualVpnDomain | cdktf.IResolvable | undefined) {
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

export class ManagementLsmGatewayTopologyManualVpnDomainList extends cdktf.ComplexList {
  public internalValue? : ManagementLsmGatewayTopologyManualVpnDomain[] | cdktf.IResolvable

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
  public get(index: number): ManagementLsmGatewayTopologyManualVpnDomainOutputReference {
    return new ManagementLsmGatewayTopologyManualVpnDomainOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementLsmGatewayTopology {
  /**
  * VPN Domain type.  'external-interfaces-only' is relevnt only for Gaia devices. 'hide-behind-gateway-external-ip-address' is relevant only for SMB devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_gateway#vpn_domain ManagementLsmGateway#vpn_domain}
  */
  readonly vpnDomain?: string;
  /**
  * manual_vpn_domain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_gateway#manual_vpn_domain ManagementLsmGateway#manual_vpn_domain}
  */
  readonly manualVpnDomain?: ManagementLsmGatewayTopologyManualVpnDomain[] | cdktf.IResolvable;
}

export function managementLsmGatewayTopologyToTerraform(struct?: ManagementLsmGatewayTopologyOutputReference | ManagementLsmGatewayTopology): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vpn_domain: cdktf.stringToTerraform(struct!.vpnDomain),
    manual_vpn_domain: cdktf.listMapper(managementLsmGatewayTopologyManualVpnDomainToTerraform, true)(struct!.manualVpnDomain),
  }
}


export function managementLsmGatewayTopologyToHclTerraform(struct?: ManagementLsmGatewayTopologyOutputReference | ManagementLsmGatewayTopology): any {
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
      value: cdktf.listMapperHcl(managementLsmGatewayTopologyManualVpnDomainToHclTerraform, true)(struct!.manualVpnDomain),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementLsmGatewayTopologyManualVpnDomainList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementLsmGatewayTopologyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementLsmGatewayTopology | undefined {
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

  public set internalValue(value: ManagementLsmGatewayTopology | undefined) {
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
  private _manualVpnDomain = new ManagementLsmGatewayTopologyManualVpnDomainList(this, "manual_vpn_domain", false);
  public get manualVpnDomain() {
    return this._manualVpnDomain;
  }
  public putManualVpnDomain(value: ManagementLsmGatewayTopologyManualVpnDomain[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_gateway checkpoint_management_lsm_gateway}
*/
export class ManagementLsmGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_lsm_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementLsmGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementLsmGateway to import
  * @param importFromId The id of the existing ManagementLsmGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementLsmGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_lsm_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_lsm_gateway checkpoint_management_lsm_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementLsmGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementLsmGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_lsm_gateway',
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
    this._deviceId = config.deviceId;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._name = config.name;
    this._provisioningSettings = config.provisioningSettings;
    this._provisioningState = config.provisioningState;
    this._securityProfile = config.securityProfile;
    this._sic = config.sic;
    this._tags = config.tags;
    this._version = config.version;
    this._dynamicObjects.internalValue = config.dynamicObjects;
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

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
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

  // provisioning_settings - computed: false, optional: true, required: false
  private _provisioningSettings?: { [key: string]: string }; 
  public get provisioningSettings() {
    return this.getStringMapAttribute('provisioning_settings');
  }
  public set provisioningSettings(value: { [key: string]: string }) {
    this._provisioningSettings = value;
  }
  public resetProvisioningSettings() {
    this._provisioningSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningSettingsInput() {
    return this._provisioningSettings;
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

  // sic - computed: false, optional: true, required: false
  private _sic?: { [key: string]: string }; 
  public get sic() {
    return this.getStringMapAttribute('sic');
  }
  public set sic(value: { [key: string]: string }) {
    this._sic = value;
  }
  public resetSic() {
    this._sic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sicInput() {
    return this._sic;
  }

  // sic_name - computed: true, optional: false, required: false
  public get sicName() {
    return this.getStringAttribute('sic_name');
  }

  // sic_state - computed: true, optional: false, required: false
  public get sicState() {
    return this.getStringAttribute('sic_state');
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

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // dynamic_objects - computed: false, optional: true, required: false
  private _dynamicObjects = new ManagementLsmGatewayDynamicObjectsList(this, "dynamic_objects", false);
  public get dynamicObjects() {
    return this._dynamicObjects;
  }
  public putDynamicObjects(value: ManagementLsmGatewayDynamicObjects[] | cdktf.IResolvable) {
    this._dynamicObjects.internalValue = value;
  }
  public resetDynamicObjects() {
    this._dynamicObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicObjectsInput() {
    return this._dynamicObjects.internalValue;
  }

  // topology - computed: false, optional: true, required: false
  private _topology = new ManagementLsmGatewayTopologyOutputReference(this, "topology");
  public get topology() {
    return this._topology;
  }
  public putTopology(value: ManagementLsmGatewayTopology) {
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
      device_id: cdktf.stringToTerraform(this._deviceId),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      name: cdktf.stringToTerraform(this._name),
      provisioning_settings: cdktf.hashMapper(cdktf.stringToTerraform)(this._provisioningSettings),
      provisioning_state: cdktf.stringToTerraform(this._provisioningState),
      security_profile: cdktf.stringToTerraform(this._securityProfile),
      sic: cdktf.hashMapper(cdktf.stringToTerraform)(this._sic),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      version: cdktf.stringToTerraform(this._version),
      dynamic_objects: cdktf.listMapper(managementLsmGatewayDynamicObjectsToTerraform, true)(this._dynamicObjects.internalValue),
      topology: managementLsmGatewayTopologyToTerraform(this._topology.internalValue),
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
      device_id: {
        value: cdktf.stringToHclTerraform(this._deviceId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provisioning_settings: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._provisioningSettings),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      provisioning_state: {
        value: cdktf.stringToHclTerraform(this._provisioningState),
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
      sic: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._sic),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_objects: {
        value: cdktf.listMapperHcl(managementLsmGatewayDynamicObjectsToHclTerraform, true)(this._dynamicObjects.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementLsmGatewayDynamicObjectsList",
      },
      topology: {
        value: managementLsmGatewayTopologyToHclTerraform(this._topology.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementLsmGatewayTopologyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
