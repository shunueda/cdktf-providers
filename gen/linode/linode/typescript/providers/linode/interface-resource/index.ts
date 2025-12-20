// https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates if the interface serves as the default route when multiple interfaces are eligible for this role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/interface#default_route InterfaceResource#default_route}
  */
  readonly defaultRoute?: InterfaceResourceDefaultRoute;
  /**
  * ID of an enabled firewall to secure a VPC or public interface. Not allowed for VLAN interfaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/interface#firewall_id InterfaceResource#firewall_id}
  */
  readonly firewallId?: number;
  /**
  * The ID of the Linode to assign this interface to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/interface#linode_id InterfaceResource#linode_id}
  */
  readonly linodeId: number;
  /**
  * Linode public interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/interface#public InterfaceResource#public}
  */
  readonly public?: InterfaceResourcePublic;
  /**
  * Linode VLAN interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/interface#vlan InterfaceResource#vlan}
  */
  readonly vlan?: InterfaceResourceVlan;
  /**
  * Linode VPC interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/interface#vpc InterfaceResource#vpc}
  */
  readonly vpc?: InterfaceResourceVpc;
}
export interface InterfaceResourceDefaultRoute {
  /**
  * If set to true, the interface is used for the IPv4 default route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/interface#ipv4 InterfaceResource#ipv4}
  */
  readonly ipv4?: boolean | cdktf.IResolvable;
  /**
  * If set to true, the interface is used for the IPv6 default route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/interface#ipv6 InterfaceResource#ipv6}
  */
  readonly ipv6?: boolean | cdktf.IResolvable;
}

export function interfaceResourceDefaultRouteToTerraform(struct?: InterfaceResourceDefaultRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.booleanToTerraform(struct!.ipv4),
    ipv6: cdktf.booleanToTerraform(struct!.ipv6),
  }
}


export function interfaceResourceDefaultRouteToHclTerraform(struct?: InterfaceResourceDefaultRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.booleanToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipv6: {
      value: cdktf.booleanToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceResourceDefaultRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): InterfaceResourceDefaultRoute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceResourceDefaultRoute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
    }
  }

  // ipv4 - computed: true, optional: true, required: false
  private _ipv4?: boolean | cdktf.IResolvable; 
  public get ipv4() {
    return this.getBooleanAttribute('ipv4');
  }
  public set ipv4(value: boolean | cdktf.IResolvable) {
    this._ipv4 = value;
  }
  public resetIpv4() {
    this._ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: true, required: false
  private _ipv6?: boolean | cdktf.IResolvable; 
  public get ipv6() {
    return this.getBooleanAttribute('ipv6');
  }
  public set ipv6(value: boolean | cdktf.IResolvable) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }
}
export interface InterfaceResourcePublicIpv4Addresses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/interface#address InterfaceResource#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/interface#primary InterfaceResource#primary}
  */
  readonly primary?: boolean | cdktf.IResolvable;
}

export function interfaceResourcePublicIpv4AddressesToTerraform(struct?: InterfaceResourcePublicIpv4Addresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    primary: cdktf.booleanToTerraform(struct!.primary),
  }
}


export function interfaceResourcePublicIpv4AddressesToHclTerraform(struct?: InterfaceResourcePublicIpv4Addresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary: {
      value: cdktf.booleanToHclTerraform(struct!.primary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceResourcePublicIpv4AddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceResourcePublicIpv4Addresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._primary !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceResourcePublicIpv4Addresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._primary = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._primary = value.primary;
    }
  }

  // address - computed: true, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // primary - computed: true, optional: true, required: false
  private _primary?: boolean | cdktf.IResolvable; 
  public get primary() {
    return this.getBooleanAttribute('primary');
  }
  public set primary(value: boolean | cdktf.IResolvable) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }
}

export class InterfaceResourcePublicIpv4AddressesList extends cdktf.ComplexList {
  public internalValue? : InterfaceResourcePublicIpv4Addresses[] | cdktf.IResolvable

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
  public get(index: number): InterfaceResourcePublicIpv4AddressesOutputReference {
    return new InterfaceResourcePublicIpv4AddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceResourcePublicIpv4AssignedAddresses {
}

export function interfaceResourcePublicIpv4AssignedAddressesToTerraform(struct?: InterfaceResourcePublicIpv4AssignedAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function interfaceResourcePublicIpv4AssignedAddressesToHclTerraform(struct?: InterfaceResourcePublicIpv4AssignedAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class InterfaceResourcePublicIpv4AssignedAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceResourcePublicIpv4AssignedAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceResourcePublicIpv4AssignedAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // primary - computed: true, optional: false, required: false
  public get primary() {
    return this.getBooleanAttribute('primary');
  }
}

export class InterfaceResourcePublicIpv4AssignedAddressesList extends cdktf.ComplexList {

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
  public get(index: number): InterfaceResourcePublicIpv4AssignedAddressesOutputReference {
    return new InterfaceResourcePublicIpv4AssignedAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceResourcePublicIpv4Shared {
}

export function interfaceResourcePublicIpv4SharedToTerraform(struct?: InterfaceResourcePublicIpv4Shared): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function interfaceResourcePublicIpv4SharedToHclTerraform(struct?: InterfaceResourcePublicIpv4Shared): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class InterfaceResourcePublicIpv4SharedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceResourcePublicIpv4Shared | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceResourcePublicIpv4Shared | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // linode_id - computed: true, optional: false, required: false
  public get linodeId() {
    return this.getNumberAttribute('linode_id');
  }
}

export class InterfaceResourcePublicIpv4SharedList extends cdktf.ComplexList {

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
  public get(index: number): InterfaceResourcePublicIpv4SharedOutputReference {
    return new InterfaceResourcePublicIpv4SharedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceResourcePublicIpv4 {
  /**
  * IPv4 addresses configured for this Linode interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/interface#addresses InterfaceResource#addresses}
  */
  readonly addresses?: InterfaceResourcePublicIpv4Addresses[] | cdktf.IResolvable;
}

export function interfaceResourcePublicIpv4ToTerraform(struct?: InterfaceResourcePublicIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addresses: cdktf.listMapper(interfaceResourcePublicIpv4AddressesToTerraform, false)(struct!.addresses),
  }
}


export function interfaceResourcePublicIpv4ToHclTerraform(struct?: InterfaceResourcePublicIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addresses: {
      value: cdktf.listMapperHcl(interfaceResourcePublicIpv4AddressesToHclTerraform, false)(struct!.addresses),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceResourcePublicIpv4AddressesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceResourcePublicIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): InterfaceResourcePublicIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addresses = this._addresses?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceResourcePublicIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addresses.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addresses.internalValue = value.addresses;
    }
  }

  // addresses - computed: true, optional: true, required: false
  private _addresses = new InterfaceResourcePublicIpv4AddressesList(this, "addresses", false);
  public get addresses() {
    return this._addresses;
  }
  public putAddresses(value: InterfaceResourcePublicIpv4Addresses[] | cdktf.IResolvable) {
    this._addresses.internalValue = value;
  }
  public resetAddresses() {
    this._addresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses.internalValue;
  }

  // assigned_addresses - computed: true, optional: false, required: false
  private _assignedAddresses = new InterfaceResourcePublicIpv4AssignedAddressesList(this, "assigned_addresses", true);
  public get assignedAddresses() {
    return this._assignedAddresses;
  }

  // shared - computed: true, optional: false, required: false
  private _shared = new InterfaceResourcePublicIpv4SharedList(this, "shared", true);
  public get shared() {
    return this._shared;
  }
}
export interface InterfaceResourcePublicIpv6AssignedRanges {
}

export function interfaceResourcePublicIpv6AssignedRangesToTerraform(struct?: InterfaceResourcePublicIpv6AssignedRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function interfaceResourcePublicIpv6AssignedRangesToHclTerraform(struct?: InterfaceResourcePublicIpv6AssignedRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class InterfaceResourcePublicIpv6AssignedRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceResourcePublicIpv6AssignedRanges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceResourcePublicIpv6AssignedRanges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // range - computed: true, optional: false, required: false
  public get range() {
    return this.getStringAttribute('range');
  }

  // route_target - computed: true, optional: false, required: false
  public get routeTarget() {
    return this.getStringAttribute('route_target');
  }
}

export class InterfaceResourcePublicIpv6AssignedRangesList extends cdktf.ComplexList {

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
  public get(index: number): InterfaceResourcePublicIpv6AssignedRangesOutputReference {
    return new InterfaceResourcePublicIpv6AssignedRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceResourcePublicIpv6Ranges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/interface#range InterfaceResource#range}
  */
  readonly range: string;
}

export function interfaceResourcePublicIpv6RangesToTerraform(struct?: InterfaceResourcePublicIpv6Ranges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range: cdktf.stringToTerraform(struct!.range),
  }
}


export function interfaceResourcePublicIpv6RangesToHclTerraform(struct?: InterfaceResourcePublicIpv6Ranges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    range: {
      value: cdktf.stringToHclTerraform(struct!.range),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceResourcePublicIpv6RangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceResourcePublicIpv6Ranges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._range !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceResourcePublicIpv6Ranges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._range = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._range = value.range;
    }
  }

  // range - computed: true, optional: false, required: true
  private _range?: string; 
  public get range() {
    return this.getStringAttribute('range');
  }
  public set range(value: string) {
    this._range = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range;
  }
}

export class InterfaceResourcePublicIpv6RangesList extends cdktf.ComplexList {
  public internalValue? : InterfaceResourcePublicIpv6Ranges[] | cdktf.IResolvable

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
  public get(index: number): InterfaceResourcePublicIpv6RangesOutputReference {
    return new InterfaceResourcePublicIpv6RangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceResourcePublicIpv6Shared {
}

export function interfaceResourcePublicIpv6SharedToTerraform(struct?: InterfaceResourcePublicIpv6Shared): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function interfaceResourcePublicIpv6SharedToHclTerraform(struct?: InterfaceResourcePublicIpv6Shared): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class InterfaceResourcePublicIpv6SharedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceResourcePublicIpv6Shared | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceResourcePublicIpv6Shared | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // range - computed: true, optional: false, required: false
  public get range() {
    return this.getStringAttribute('range');
  }

  // route_target - computed: true, optional: false, required: false
  public get routeTarget() {
    return this.getStringAttribute('route_target');
  }
}

export class InterfaceResourcePublicIpv6SharedList extends cdktf.ComplexList {

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
  public get(index: number): InterfaceResourcePublicIpv6SharedOutputReference {
    return new InterfaceResourcePublicIpv6SharedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceResourcePublicIpv6Slaac {
}

export function interfaceResourcePublicIpv6SlaacToTerraform(struct?: InterfaceResourcePublicIpv6Slaac): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function interfaceResourcePublicIpv6SlaacToHclTerraform(struct?: InterfaceResourcePublicIpv6Slaac): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class InterfaceResourcePublicIpv6SlaacOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceResourcePublicIpv6Slaac | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceResourcePublicIpv6Slaac | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getNumberAttribute('prefix');
  }
}

export class InterfaceResourcePublicIpv6SlaacList extends cdktf.ComplexList {

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
  public get(index: number): InterfaceResourcePublicIpv6SlaacOutputReference {
    return new InterfaceResourcePublicIpv6SlaacOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceResourcePublicIpv6 {
  /**
  * Configured IPv6 range in CIDR notation (2600:0db8::1/64) or prefix-only (/64).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/interface#ranges InterfaceResource#ranges}
  */
  readonly ranges?: InterfaceResourcePublicIpv6Ranges[] | cdktf.IResolvable;
}

export function interfaceResourcePublicIpv6ToTerraform(struct?: InterfaceResourcePublicIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ranges: cdktf.listMapper(interfaceResourcePublicIpv6RangesToTerraform, false)(struct!.ranges),
  }
}


export function interfaceResourcePublicIpv6ToHclTerraform(struct?: InterfaceResourcePublicIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ranges: {
      value: cdktf.listMapperHcl(interfaceResourcePublicIpv6RangesToHclTerraform, false)(struct!.ranges),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceResourcePublicIpv6RangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceResourcePublicIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): InterfaceResourcePublicIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ranges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ranges = this._ranges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceResourcePublicIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ranges.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ranges.internalValue = value.ranges;
    }
  }

  // assigned_ranges - computed: true, optional: false, required: false
  private _assignedRanges = new InterfaceResourcePublicIpv6AssignedRangesList(this, "assigned_ranges", true);
  public get assignedRanges() {
    return this._assignedRanges;
  }

  // ranges - computed: true, optional: true, required: false
  private _ranges = new InterfaceResourcePublicIpv6RangesList(this, "ranges", false);
  public get ranges() {
    return this._ranges;
  }
  public putRanges(value: InterfaceResourcePublicIpv6Ranges[] | cdktf.IResolvable) {
    this._ranges.internalValue = value;
  }
  public resetRanges() {
    this._ranges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangesInput() {
    return this._ranges.internalValue;
  }

  // shared - computed: true, optional: false, required: false
  private _shared = new InterfaceResourcePublicIpv6SharedList(this, "shared", true);
  public get shared() {
    return this._shared;
  }

  // slaac - computed: true, optional: false, required: false
  private _slaac = new InterfaceResourcePublicIpv6SlaacList(this, "slaac", true);
  public get slaac() {
    return this._slaac;
  }
}
export interface InterfaceResourcePublic {
  /**
  * IPv4 addresses for this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/interface#ipv4 InterfaceResource#ipv4}
  */
  readonly ipv4?: InterfaceResourcePublicIpv4;
  /**
  * IPv6 addresses for this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/interface#ipv6 InterfaceResource#ipv6}
  */
  readonly ipv6?: InterfaceResourcePublicIpv6;
}

export function interfaceResourcePublicToTerraform(struct?: InterfaceResourcePublic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: interfaceResourcePublicIpv4ToTerraform(struct!.ipv4),
    ipv6: interfaceResourcePublicIpv6ToTerraform(struct!.ipv6),
  }
}


export function interfaceResourcePublicToHclTerraform(struct?: InterfaceResourcePublic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: interfaceResourcePublicIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "struct",
      storageClassType: "InterfaceResourcePublicIpv4",
    },
    ipv6: {
      value: interfaceResourcePublicIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "struct",
      storageClassType: "InterfaceResourcePublicIpv6",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceResourcePublicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): InterfaceResourcePublic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceResourcePublic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: true, optional: true, required: false
  private _ipv4 = new InterfaceResourcePublicIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: InterfaceResourcePublicIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: true, optional: true, required: false
  private _ipv6 = new InterfaceResourcePublicIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: InterfaceResourcePublicIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}
export interface InterfaceResourceVlan {
  /**
  * This VLAN interface's private IPv4 address in classless inter-domain routing (CIDR) notation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/interface#ipam_address InterfaceResource#ipam_address}
  */
  readonly ipamAddress?: string;
  /**
  * The VLAN's unique label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/interface#vlan_label InterfaceResource#vlan_label}
  */
  readonly vlanLabel: string;
}

export function interfaceResourceVlanToTerraform(struct?: InterfaceResourceVlan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipam_address: cdktf.stringToTerraform(struct!.ipamAddress),
    vlan_label: cdktf.stringToTerraform(struct!.vlanLabel),
  }
}


export function interfaceResourceVlanToHclTerraform(struct?: InterfaceResourceVlan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipam_address: {
      value: cdktf.stringToHclTerraform(struct!.ipamAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_label: {
      value: cdktf.stringToHclTerraform(struct!.vlanLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceResourceVlanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): InterfaceResourceVlan | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipamAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipamAddress = this._ipamAddress;
    }
    if (this._vlanLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanLabel = this._vlanLabel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceResourceVlan | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipamAddress = undefined;
      this._vlanLabel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipamAddress = value.ipamAddress;
      this._vlanLabel = value.vlanLabel;
    }
  }

  // ipam_address - computed: false, optional: true, required: false
  private _ipamAddress?: string; 
  public get ipamAddress() {
    return this.getStringAttribute('ipam_address');
  }
  public set ipamAddress(value: string) {
    this._ipamAddress = value;
  }
  public resetIpamAddress() {
    this._ipamAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipamAddressInput() {
    return this._ipamAddress;
  }

  // vlan_label - computed: false, optional: false, required: true
  private _vlanLabel?: string; 
  public get vlanLabel() {
    return this.getStringAttribute('vlan_label');
  }
  public set vlanLabel(value: string) {
    this._vlanLabel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanLabelInput() {
    return this._vlanLabel;
  }
}
export interface InterfaceResourceVpcIpv4Addresses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/interface#address InterfaceResource#address}
  */
  readonly address?: string;
  /**
  * The 1:1 NAT IPv4 address used to associate a public IPv4 address with the interface's VPC subnet IPv4 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/interface#nat_1_1_address InterfaceResource#nat_1_1_address}
  */
  readonly nat11Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/interface#primary InterfaceResource#primary}
  */
  readonly primary?: boolean | cdktf.IResolvable;
}

export function interfaceResourceVpcIpv4AddressesToTerraform(struct?: InterfaceResourceVpcIpv4Addresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    nat_1_1_address: cdktf.stringToTerraform(struct!.nat11Address),
    primary: cdktf.booleanToTerraform(struct!.primary),
  }
}


export function interfaceResourceVpcIpv4AddressesToHclTerraform(struct?: InterfaceResourceVpcIpv4Addresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_1_1_address: {
      value: cdktf.stringToHclTerraform(struct!.nat11Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary: {
      value: cdktf.booleanToHclTerraform(struct!.primary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceResourceVpcIpv4AddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceResourceVpcIpv4Addresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._nat11Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat11Address = this._nat11Address;
    }
    if (this._primary !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceResourceVpcIpv4Addresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._nat11Address = undefined;
      this._primary = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._nat11Address = value.nat11Address;
      this._primary = value.primary;
    }
  }

  // address - computed: true, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // nat_1_1_address - computed: true, optional: true, required: false
  private _nat11Address?: string; 
  public get nat11Address() {
    return this.getStringAttribute('nat_1_1_address');
  }
  public set nat11Address(value: string) {
    this._nat11Address = value;
  }
  public resetNat11Address() {
    this._nat11Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat11AddressInput() {
    return this._nat11Address;
  }

  // primary - computed: true, optional: true, required: false
  private _primary?: boolean | cdktf.IResolvable; 
  public get primary() {
    return this.getBooleanAttribute('primary');
  }
  public set primary(value: boolean | cdktf.IResolvable) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }
}

export class InterfaceResourceVpcIpv4AddressesList extends cdktf.ComplexList {
  public internalValue? : InterfaceResourceVpcIpv4Addresses[] | cdktf.IResolvable

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
  public get(index: number): InterfaceResourceVpcIpv4AddressesOutputReference {
    return new InterfaceResourceVpcIpv4AddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceResourceVpcIpv4AssignedAddresses {
}

export function interfaceResourceVpcIpv4AssignedAddressesToTerraform(struct?: InterfaceResourceVpcIpv4AssignedAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function interfaceResourceVpcIpv4AssignedAddressesToHclTerraform(struct?: InterfaceResourceVpcIpv4AssignedAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class InterfaceResourceVpcIpv4AssignedAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceResourceVpcIpv4AssignedAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceResourceVpcIpv4AssignedAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // nat_1_1_address - computed: true, optional: false, required: false
  public get nat11Address() {
    return this.getStringAttribute('nat_1_1_address');
  }

  // primary - computed: true, optional: false, required: false
  public get primary() {
    return this.getBooleanAttribute('primary');
  }
}

export class InterfaceResourceVpcIpv4AssignedAddressesList extends cdktf.ComplexList {

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
  public get(index: number): InterfaceResourceVpcIpv4AssignedAddressesOutputReference {
    return new InterfaceResourceVpcIpv4AssignedAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceResourceVpcIpv4AssignedRanges {
}

export function interfaceResourceVpcIpv4AssignedRangesToTerraform(struct?: InterfaceResourceVpcIpv4AssignedRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function interfaceResourceVpcIpv4AssignedRangesToHclTerraform(struct?: InterfaceResourceVpcIpv4AssignedRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class InterfaceResourceVpcIpv4AssignedRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceResourceVpcIpv4AssignedRanges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceResourceVpcIpv4AssignedRanges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // range - computed: true, optional: false, required: false
  public get range() {
    return this.getStringAttribute('range');
  }
}

export class InterfaceResourceVpcIpv4AssignedRangesList extends cdktf.ComplexList {

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
  public get(index: number): InterfaceResourceVpcIpv4AssignedRangesOutputReference {
    return new InterfaceResourceVpcIpv4AssignedRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceResourceVpcIpv4Ranges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/interface#range InterfaceResource#range}
  */
  readonly range: string;
}

export function interfaceResourceVpcIpv4RangesToTerraform(struct?: InterfaceResourceVpcIpv4Ranges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range: cdktf.stringToTerraform(struct!.range),
  }
}


export function interfaceResourceVpcIpv4RangesToHclTerraform(struct?: InterfaceResourceVpcIpv4Ranges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    range: {
      value: cdktf.stringToHclTerraform(struct!.range),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceResourceVpcIpv4RangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceResourceVpcIpv4Ranges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._range !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceResourceVpcIpv4Ranges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._range = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._range = value.range;
    }
  }

  // range - computed: true, optional: false, required: true
  private _range?: string; 
  public get range() {
    return this.getStringAttribute('range');
  }
  public set range(value: string) {
    this._range = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range;
  }
}

export class InterfaceResourceVpcIpv4RangesList extends cdktf.ComplexList {
  public internalValue? : InterfaceResourceVpcIpv4Ranges[] | cdktf.IResolvable

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
  public get(index: number): InterfaceResourceVpcIpv4RangesOutputReference {
    return new InterfaceResourceVpcIpv4RangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceResourceVpcIpv4 {
  /**
  * Specifies the IPv4 addresses to use in the VPC subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/interface#addresses InterfaceResource#addresses}
  */
  readonly addresses?: InterfaceResourceVpcIpv4Addresses[] | cdktf.IResolvable;
  /**
  * CIDR notation of a range (1.2.3.4/24) or prefix only (/24).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/interface#ranges InterfaceResource#ranges}
  */
  readonly ranges?: InterfaceResourceVpcIpv4Ranges[] | cdktf.IResolvable;
}

export function interfaceResourceVpcIpv4ToTerraform(struct?: InterfaceResourceVpcIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addresses: cdktf.listMapper(interfaceResourceVpcIpv4AddressesToTerraform, false)(struct!.addresses),
    ranges: cdktf.listMapper(interfaceResourceVpcIpv4RangesToTerraform, false)(struct!.ranges),
  }
}


export function interfaceResourceVpcIpv4ToHclTerraform(struct?: InterfaceResourceVpcIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addresses: {
      value: cdktf.listMapperHcl(interfaceResourceVpcIpv4AddressesToHclTerraform, false)(struct!.addresses),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceResourceVpcIpv4AddressesList",
    },
    ranges: {
      value: cdktf.listMapperHcl(interfaceResourceVpcIpv4RangesToHclTerraform, false)(struct!.ranges),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceResourceVpcIpv4RangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceResourceVpcIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): InterfaceResourceVpcIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addresses = this._addresses?.internalValue;
    }
    if (this._ranges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ranges = this._ranges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceResourceVpcIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addresses.internalValue = undefined;
      this._ranges.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addresses.internalValue = value.addresses;
      this._ranges.internalValue = value.ranges;
    }
  }

  // addresses - computed: true, optional: true, required: false
  private _addresses = new InterfaceResourceVpcIpv4AddressesList(this, "addresses", false);
  public get addresses() {
    return this._addresses;
  }
  public putAddresses(value: InterfaceResourceVpcIpv4Addresses[] | cdktf.IResolvable) {
    this._addresses.internalValue = value;
  }
  public resetAddresses() {
    this._addresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses.internalValue;
  }

  // assigned_addresses - computed: true, optional: false, required: false
  private _assignedAddresses = new InterfaceResourceVpcIpv4AssignedAddressesList(this, "assigned_addresses", true);
  public get assignedAddresses() {
    return this._assignedAddresses;
  }

  // assigned_ranges - computed: true, optional: false, required: false
  private _assignedRanges = new InterfaceResourceVpcIpv4AssignedRangesList(this, "assigned_ranges", true);
  public get assignedRanges() {
    return this._assignedRanges;
  }

  // ranges - computed: true, optional: true, required: false
  private _ranges = new InterfaceResourceVpcIpv4RangesList(this, "ranges", false);
  public get ranges() {
    return this._ranges;
  }
  public putRanges(value: InterfaceResourceVpcIpv4Ranges[] | cdktf.IResolvable) {
    this._ranges.internalValue = value;
  }
  public resetRanges() {
    this._ranges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangesInput() {
    return this._ranges.internalValue;
  }
}
export interface InterfaceResourceVpcIpv6AssignedRanges {
}

export function interfaceResourceVpcIpv6AssignedRangesToTerraform(struct?: InterfaceResourceVpcIpv6AssignedRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function interfaceResourceVpcIpv6AssignedRangesToHclTerraform(struct?: InterfaceResourceVpcIpv6AssignedRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class InterfaceResourceVpcIpv6AssignedRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceResourceVpcIpv6AssignedRanges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceResourceVpcIpv6AssignedRanges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // range - computed: true, optional: false, required: false
  public get range() {
    return this.getStringAttribute('range');
  }
}

export class InterfaceResourceVpcIpv6AssignedRangesList extends cdktf.ComplexList {

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
  public get(index: number): InterfaceResourceVpcIpv6AssignedRangesOutputReference {
    return new InterfaceResourceVpcIpv6AssignedRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceResourceVpcIpv6AssignedSlaac {
}

export function interfaceResourceVpcIpv6AssignedSlaacToTerraform(struct?: InterfaceResourceVpcIpv6AssignedSlaac): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function interfaceResourceVpcIpv6AssignedSlaacToHclTerraform(struct?: InterfaceResourceVpcIpv6AssignedSlaac): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class InterfaceResourceVpcIpv6AssignedSlaacOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceResourceVpcIpv6AssignedSlaac | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceResourceVpcIpv6AssignedSlaac | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // range - computed: true, optional: false, required: false
  public get range() {
    return this.getStringAttribute('range');
  }
}

export class InterfaceResourceVpcIpv6AssignedSlaacList extends cdktf.ComplexList {

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
  public get(index: number): InterfaceResourceVpcIpv6AssignedSlaacOutputReference {
    return new InterfaceResourceVpcIpv6AssignedSlaacOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceResourceVpcIpv6Ranges {
  /**
  * The IPv6 network range in CIDR notation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/interface#range InterfaceResource#range}
  */
  readonly range?: string;
}

export function interfaceResourceVpcIpv6RangesToTerraform(struct?: InterfaceResourceVpcIpv6Ranges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range: cdktf.stringToTerraform(struct!.range),
  }
}


export function interfaceResourceVpcIpv6RangesToHclTerraform(struct?: InterfaceResourceVpcIpv6Ranges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    range: {
      value: cdktf.stringToHclTerraform(struct!.range),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceResourceVpcIpv6RangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceResourceVpcIpv6Ranges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._range !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceResourceVpcIpv6Ranges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._range = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._range = value.range;
    }
  }

  // range - computed: true, optional: true, required: false
  private _range?: string; 
  public get range() {
    return this.getStringAttribute('range');
  }
  public set range(value: string) {
    this._range = value;
  }
  public resetRange() {
    this._range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range;
  }
}

export class InterfaceResourceVpcIpv6RangesList extends cdktf.ComplexList {
  public internalValue? : InterfaceResourceVpcIpv6Ranges[] | cdktf.IResolvable

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
  public get(index: number): InterfaceResourceVpcIpv6RangesOutputReference {
    return new InterfaceResourceVpcIpv6RangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceResourceVpcIpv6Slaac {
  /**
  * The IPv6 network range in CIDR notation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/interface#range InterfaceResource#range}
  */
  readonly range?: string;
}

export function interfaceResourceVpcIpv6SlaacToTerraform(struct?: InterfaceResourceVpcIpv6Slaac | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range: cdktf.stringToTerraform(struct!.range),
  }
}


export function interfaceResourceVpcIpv6SlaacToHclTerraform(struct?: InterfaceResourceVpcIpv6Slaac | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    range: {
      value: cdktf.stringToHclTerraform(struct!.range),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceResourceVpcIpv6SlaacOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceResourceVpcIpv6Slaac | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._range !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceResourceVpcIpv6Slaac | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._range = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._range = value.range;
    }
  }

  // range - computed: true, optional: true, required: false
  private _range?: string; 
  public get range() {
    return this.getStringAttribute('range');
  }
  public set range(value: string) {
    this._range = value;
  }
  public resetRange() {
    this._range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range;
  }
}

export class InterfaceResourceVpcIpv6SlaacList extends cdktf.ComplexList {
  public internalValue? : InterfaceResourceVpcIpv6Slaac[] | cdktf.IResolvable

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
  public get(index: number): InterfaceResourceVpcIpv6SlaacOutputReference {
    return new InterfaceResourceVpcIpv6SlaacOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceResourceVpcIpv6 {
  /**
  * Indicates whether the IPv6 configuration on the Linode interface is public.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/interface#is_public InterfaceResource#is_public}
  */
  readonly isPublic?: boolean | cdktf.IResolvable;
  /**
  * CIDR notation of a range (1.2.3.4/24) or prefix only (/24).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/interface#ranges InterfaceResource#ranges}
  */
  readonly ranges?: InterfaceResourceVpcIpv6Ranges[] | cdktf.IResolvable;
  /**
  * Defines IPv6 SLAAC address ranges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/interface#slaac InterfaceResource#slaac}
  */
  readonly slaac?: InterfaceResourceVpcIpv6Slaac[] | cdktf.IResolvable;
}

export function interfaceResourceVpcIpv6ToTerraform(struct?: InterfaceResourceVpcIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_public: cdktf.booleanToTerraform(struct!.isPublic),
    ranges: cdktf.listMapper(interfaceResourceVpcIpv6RangesToTerraform, false)(struct!.ranges),
    slaac: cdktf.listMapper(interfaceResourceVpcIpv6SlaacToTerraform, false)(struct!.slaac),
  }
}


export function interfaceResourceVpcIpv6ToHclTerraform(struct?: InterfaceResourceVpcIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_public: {
      value: cdktf.booleanToHclTerraform(struct!.isPublic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ranges: {
      value: cdktf.listMapperHcl(interfaceResourceVpcIpv6RangesToHclTerraform, false)(struct!.ranges),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceResourceVpcIpv6RangesList",
    },
    slaac: {
      value: cdktf.listMapperHcl(interfaceResourceVpcIpv6SlaacToHclTerraform, false)(struct!.slaac),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceResourceVpcIpv6SlaacList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceResourceVpcIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): InterfaceResourceVpcIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isPublic !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPublic = this._isPublic;
    }
    if (this._ranges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ranges = this._ranges?.internalValue;
    }
    if (this._slaac?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaac = this._slaac?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceResourceVpcIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isPublic = undefined;
      this._ranges.internalValue = undefined;
      this._slaac.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isPublic = value.isPublic;
      this._ranges.internalValue = value.ranges;
      this._slaac.internalValue = value.slaac;
    }
  }

  // assigned_ranges - computed: true, optional: false, required: false
  private _assignedRanges = new InterfaceResourceVpcIpv6AssignedRangesList(this, "assigned_ranges", true);
  public get assignedRanges() {
    return this._assignedRanges;
  }

  // assigned_slaac - computed: true, optional: false, required: false
  private _assignedSlaac = new InterfaceResourceVpcIpv6AssignedSlaacList(this, "assigned_slaac", true);
  public get assignedSlaac() {
    return this._assignedSlaac;
  }

  // is_public - computed: true, optional: true, required: false
  private _isPublic?: boolean | cdktf.IResolvable; 
  public get isPublic() {
    return this.getBooleanAttribute('is_public');
  }
  public set isPublic(value: boolean | cdktf.IResolvable) {
    this._isPublic = value;
  }
  public resetIsPublic() {
    this._isPublic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPublicInput() {
    return this._isPublic;
  }

  // ranges - computed: true, optional: true, required: false
  private _ranges = new InterfaceResourceVpcIpv6RangesList(this, "ranges", false);
  public get ranges() {
    return this._ranges;
  }
  public putRanges(value: InterfaceResourceVpcIpv6Ranges[] | cdktf.IResolvable) {
    this._ranges.internalValue = value;
  }
  public resetRanges() {
    this._ranges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangesInput() {
    return this._ranges.internalValue;
  }

  // slaac - computed: true, optional: true, required: false
  private _slaac = new InterfaceResourceVpcIpv6SlaacList(this, "slaac", false);
  public get slaac() {
    return this._slaac;
  }
  public putSlaac(value: InterfaceResourceVpcIpv6Slaac[] | cdktf.IResolvable) {
    this._slaac.internalValue = value;
  }
  public resetSlaac() {
    this._slaac.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaacInput() {
    return this._slaac.internalValue;
  }
}
export interface InterfaceResourceVpc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/interface#ipv4 InterfaceResource#ipv4}
  */
  readonly ipv4?: InterfaceResourceVpcIpv4;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/interface#ipv6 InterfaceResource#ipv6}
  */
  readonly ipv6?: InterfaceResourceVpcIpv6;
  /**
  * The VPC subnet identifier for this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/interface#subnet_id InterfaceResource#subnet_id}
  */
  readonly subnetId: number;
}

export function interfaceResourceVpcToTerraform(struct?: InterfaceResourceVpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: interfaceResourceVpcIpv4ToTerraform(struct!.ipv4),
    ipv6: interfaceResourceVpcIpv6ToTerraform(struct!.ipv6),
    subnet_id: cdktf.numberToTerraform(struct!.subnetId),
  }
}


export function interfaceResourceVpcToHclTerraform(struct?: InterfaceResourceVpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: interfaceResourceVpcIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "struct",
      storageClassType: "InterfaceResourceVpcIpv4",
    },
    ipv6: {
      value: interfaceResourceVpcIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "struct",
      storageClassType: "InterfaceResourceVpcIpv6",
    },
    subnet_id: {
      value: cdktf.numberToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceResourceVpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): InterfaceResourceVpc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceResourceVpc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
      this._subnetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
      this._subnetId = value.subnetId;
    }
  }

  // ipv4 - computed: true, optional: true, required: false
  private _ipv4 = new InterfaceResourceVpcIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: InterfaceResourceVpcIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: true, optional: true, required: false
  private _ipv6 = new InterfaceResourceVpcIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: InterfaceResourceVpcIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: number; 
  public get subnetId() {
    return this.getNumberAttribute('subnet_id');
  }
  public set subnetId(value: number) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/interface linode_interface}
*/
export class InterfaceResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "linode_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceResource to import
  * @param importFromId The id of the existing InterfaceResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "linode_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/interface linode_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceResourceConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'linode_interface',
      terraformGeneratorMetadata: {
        providerName: 'linode',
        providerVersion: '3.7.0',
        providerVersionConstraint: '3.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultRoute.internalValue = config.defaultRoute;
    this._firewallId = config.firewallId;
    this._linodeId = config.linodeId;
    this._public.internalValue = config.public;
    this._vlan.internalValue = config.vlan;
    this._vpc.internalValue = config.vpc;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_route - computed: true, optional: true, required: false
  private _defaultRoute = new InterfaceResourceDefaultRouteOutputReference(this, "default_route");
  public get defaultRoute() {
    return this._defaultRoute;
  }
  public putDefaultRoute(value: InterfaceResourceDefaultRoute) {
    this._defaultRoute.internalValue = value;
  }
  public resetDefaultRoute() {
    this._defaultRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRouteInput() {
    return this._defaultRoute.internalValue;
  }

  // firewall_id - computed: false, optional: true, required: false
  private _firewallId?: number; 
  public get firewallId() {
    return this.getNumberAttribute('firewall_id');
  }
  public set firewallId(value: number) {
    this._firewallId = value;
  }
  public resetFirewallId() {
    this._firewallId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallIdInput() {
    return this._firewallId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // linode_id - computed: false, optional: false, required: true
  private _linodeId?: number; 
  public get linodeId() {
    return this.getNumberAttribute('linode_id');
  }
  public set linodeId(value: number) {
    this._linodeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linodeIdInput() {
    return this._linodeId;
  }

  // public - computed: false, optional: true, required: false
  private _public = new InterfaceResourcePublicOutputReference(this, "public");
  public get public() {
    return this._public;
  }
  public putPublic(value: InterfaceResourcePublic) {
    this._public.internalValue = value;
  }
  public resetPublic() {
    this._public.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicInput() {
    return this._public.internalValue;
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan = new InterfaceResourceVlanOutputReference(this, "vlan");
  public get vlan() {
    return this._vlan;
  }
  public putVlan(value: InterfaceResourceVlan) {
    this._vlan.internalValue = value;
  }
  public resetVlan() {
    this._vlan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan.internalValue;
  }

  // vpc - computed: false, optional: true, required: false
  private _vpc = new InterfaceResourceVpcOutputReference(this, "vpc");
  public get vpc() {
    return this._vpc;
  }
  public putVpc(value: InterfaceResourceVpc) {
    this._vpc.internalValue = value;
  }
  public resetVpc() {
    this._vpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInput() {
    return this._vpc.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_route: interfaceResourceDefaultRouteToTerraform(this._defaultRoute.internalValue),
      firewall_id: cdktf.numberToTerraform(this._firewallId),
      linode_id: cdktf.numberToTerraform(this._linodeId),
      public: interfaceResourcePublicToTerraform(this._public.internalValue),
      vlan: interfaceResourceVlanToTerraform(this._vlan.internalValue),
      vpc: interfaceResourceVpcToTerraform(this._vpc.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_route: {
        value: interfaceResourceDefaultRouteToHclTerraform(this._defaultRoute.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "InterfaceResourceDefaultRoute",
      },
      firewall_id: {
        value: cdktf.numberToHclTerraform(this._firewallId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      linode_id: {
        value: cdktf.numberToHclTerraform(this._linodeId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      public: {
        value: interfaceResourcePublicToHclTerraform(this._public.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "InterfaceResourcePublic",
      },
      vlan: {
        value: interfaceResourceVlanToHclTerraform(this._vlan.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "InterfaceResourceVlan",
      },
      vpc: {
        value: interfaceResourceVpcToHclTerraform(this._vpc.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "InterfaceResourceVpc",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
