// https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_address_book_ordered
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityAddressBookOrderedConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of zones to attach address book to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_address_book_ordered#attach_zone SecurityAddressBookOrdered#attach_zone}
  */
  readonly attachZone?: string[];
  /**
  * The description of the address book.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_address_book_ordered#description SecurityAddressBookOrdered#description}
  */
  readonly description?: string;
  /**
  * The name of address book.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_address_book_ordered#name SecurityAddressBookOrdered#name}
  */
  readonly name?: string;
  /**
  * address_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_address_book_ordered#address_set SecurityAddressBookOrdered#address_set}
  */
  readonly addressSet?: SecurityAddressBookOrderedAddressSet[] | cdktf.IResolvable;
  /**
  * dns_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_address_book_ordered#dns_name SecurityAddressBookOrdered#dns_name}
  */
  readonly dnsName?: SecurityAddressBookOrderedDnsName[] | cdktf.IResolvable;
  /**
  * network_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_address_book_ordered#network_address SecurityAddressBookOrdered#network_address}
  */
  readonly networkAddress?: SecurityAddressBookOrderedNetworkAddress[] | cdktf.IResolvable;
  /**
  * range_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_address_book_ordered#range_address SecurityAddressBookOrdered#range_address}
  */
  readonly rangeAddress?: SecurityAddressBookOrderedRangeAddress[] | cdktf.IResolvable;
  /**
  * wildcard_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_address_book_ordered#wildcard_address SecurityAddressBookOrdered#wildcard_address}
  */
  readonly wildcardAddress?: SecurityAddressBookOrderedWildcardAddress[] | cdktf.IResolvable;
}
export interface SecurityAddressBookOrderedAddressSet {
  /**
  * List of address names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_address_book_ordered#address SecurityAddressBookOrdered#address}
  */
  readonly address?: string[];
  /**
  * List of address-set names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_address_book_ordered#address_set SecurityAddressBookOrdered#address_set}
  */
  readonly addressSet?: string[];
  /**
  * Description of address-set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_address_book_ordered#description SecurityAddressBookOrdered#description}
  */
  readonly description?: string;
  /**
  * Name of address-set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_address_book_ordered#name SecurityAddressBookOrdered#name}
  */
  readonly name: string;
}

export function securityAddressBookOrderedAddressSetToTerraform(struct?: SecurityAddressBookOrderedAddressSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.address),
    address_set: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addressSet),
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function securityAddressBookOrderedAddressSetToHclTerraform(struct?: SecurityAddressBookOrderedAddressSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.address),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    address_set: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addressSet),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityAddressBookOrderedAddressSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityAddressBookOrderedAddressSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._addressSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressSet = this._addressSet;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityAddressBookOrderedAddressSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._addressSet = undefined;
      this._description = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._addressSet = value.addressSet;
      this._description = value.description;
      this._name = value.name;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string[]; 
  public get address() {
    return cdktf.Fn.tolist(this.getListAttribute('address'));
  }
  public set address(value: string[]) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // address_set - computed: false, optional: true, required: false
  private _addressSet?: string[]; 
  public get addressSet() {
    return cdktf.Fn.tolist(this.getListAttribute('address_set'));
  }
  public set addressSet(value: string[]) {
    this._addressSet = value;
  }
  public resetAddressSet() {
    this._addressSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressSetInput() {
    return this._addressSet;
  }

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
}

export class SecurityAddressBookOrderedAddressSetList extends cdktf.ComplexList {
  public internalValue? : SecurityAddressBookOrderedAddressSet[] | cdktf.IResolvable

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
  public get(index: number): SecurityAddressBookOrderedAddressSetOutputReference {
    return new SecurityAddressBookOrderedAddressSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityAddressBookOrderedDnsName {
  /**
  * Description of dns name address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_address_book_ordered#description SecurityAddressBookOrdered#description}
  */
  readonly description?: string;
  /**
  * IPv4 dns address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_address_book_ordered#ipv4_only SecurityAddressBookOrdered#ipv4_only}
  */
  readonly ipv4Only?: boolean | cdktf.IResolvable;
  /**
  * IPv6 dns address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_address_book_ordered#ipv6_only SecurityAddressBookOrdered#ipv6_only}
  */
  readonly ipv6Only?: boolean | cdktf.IResolvable;
  /**
  * Name of dns name address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_address_book_ordered#name SecurityAddressBookOrdered#name}
  */
  readonly name: string;
  /**
  * DNS name string value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_address_book_ordered#value SecurityAddressBookOrdered#value}
  */
  readonly value: string;
}

export function securityAddressBookOrderedDnsNameToTerraform(struct?: SecurityAddressBookOrderedDnsName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    ipv4_only: cdktf.booleanToTerraform(struct!.ipv4Only),
    ipv6_only: cdktf.booleanToTerraform(struct!.ipv6Only),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function securityAddressBookOrderedDnsNameToHclTerraform(struct?: SecurityAddressBookOrderedDnsName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_only: {
      value: cdktf.booleanToHclTerraform(struct!.ipv4Only),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipv6_only: {
      value: cdktf.booleanToHclTerraform(struct!.ipv6Only),
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityAddressBookOrderedDnsNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityAddressBookOrderedDnsName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._ipv4Only !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Only = this._ipv4Only;
    }
    if (this._ipv6Only !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Only = this._ipv6Only;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityAddressBookOrderedDnsName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._ipv4Only = undefined;
      this._ipv6Only = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._ipv4Only = value.ipv4Only;
      this._ipv6Only = value.ipv6Only;
      this._name = value.name;
      this._value = value.value;
    }
  }

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

  // ipv4_only - computed: false, optional: true, required: false
  private _ipv4Only?: boolean | cdktf.IResolvable; 
  public get ipv4Only() {
    return this.getBooleanAttribute('ipv4_only');
  }
  public set ipv4Only(value: boolean | cdktf.IResolvable) {
    this._ipv4Only = value;
  }
  public resetIpv4Only() {
    this._ipv4Only = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4OnlyInput() {
    return this._ipv4Only;
  }

  // ipv6_only - computed: false, optional: true, required: false
  private _ipv6Only?: boolean | cdktf.IResolvable; 
  public get ipv6Only() {
    return this.getBooleanAttribute('ipv6_only');
  }
  public set ipv6Only(value: boolean | cdktf.IResolvable) {
    this._ipv6Only = value;
  }
  public resetIpv6Only() {
    this._ipv6Only = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6OnlyInput() {
    return this._ipv6Only;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SecurityAddressBookOrderedDnsNameList extends cdktf.ComplexList {
  public internalValue? : SecurityAddressBookOrderedDnsName[] | cdktf.IResolvable

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
  public get(index: number): SecurityAddressBookOrderedDnsNameOutputReference {
    return new SecurityAddressBookOrderedDnsNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityAddressBookOrderedNetworkAddress {
  /**
  * Description of network address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_address_book_ordered#description SecurityAddressBookOrdered#description}
  */
  readonly description?: string;
  /**
  * Name of network address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_address_book_ordered#name SecurityAddressBookOrdered#name}
  */
  readonly name: string;
  /**
  * CIDR value of network address (`192.0.0.0/24`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_address_book_ordered#value SecurityAddressBookOrdered#value}
  */
  readonly value: string;
}

export function securityAddressBookOrderedNetworkAddressToTerraform(struct?: SecurityAddressBookOrderedNetworkAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function securityAddressBookOrderedNetworkAddressToHclTerraform(struct?: SecurityAddressBookOrderedNetworkAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityAddressBookOrderedNetworkAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityAddressBookOrderedNetworkAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityAddressBookOrderedNetworkAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
      this._value = value.value;
    }
  }

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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SecurityAddressBookOrderedNetworkAddressList extends cdktf.ComplexList {
  public internalValue? : SecurityAddressBookOrderedNetworkAddress[] | cdktf.IResolvable

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
  public get(index: number): SecurityAddressBookOrderedNetworkAddressOutputReference {
    return new SecurityAddressBookOrderedNetworkAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityAddressBookOrderedRangeAddress {
  /**
  * Description of range address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_address_book_ordered#description SecurityAddressBookOrdered#description}
  */
  readonly description?: string;
  /**
  * IP address of start of range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_address_book_ordered#from SecurityAddressBookOrdered#from}
  */
  readonly from: string;
  /**
  * Name of range address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_address_book_ordered#name SecurityAddressBookOrdered#name}
  */
  readonly name: string;
  /**
  * IP address of end of range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_address_book_ordered#to SecurityAddressBookOrdered#to}
  */
  readonly to: string;
}

export function securityAddressBookOrderedRangeAddressToTerraform(struct?: SecurityAddressBookOrderedRangeAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    from: cdktf.stringToTerraform(struct!.from),
    name: cdktf.stringToTerraform(struct!.name),
    to: cdktf.stringToTerraform(struct!.to),
  }
}


export function securityAddressBookOrderedRangeAddressToHclTerraform(struct?: SecurityAddressBookOrderedRangeAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
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
    to: {
      value: cdktf.stringToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityAddressBookOrderedRangeAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityAddressBookOrderedRangeAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityAddressBookOrderedRangeAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._from = undefined;
      this._name = undefined;
      this._to = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._from = value.from;
      this._name = value.name;
      this._to = value.to;
    }
  }

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

  // from - computed: false, optional: false, required: true
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
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

  // to - computed: false, optional: false, required: true
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
    this._to = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}

export class SecurityAddressBookOrderedRangeAddressList extends cdktf.ComplexList {
  public internalValue? : SecurityAddressBookOrderedRangeAddress[] | cdktf.IResolvable

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
  public get(index: number): SecurityAddressBookOrderedRangeAddressOutputReference {
    return new SecurityAddressBookOrderedRangeAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityAddressBookOrderedWildcardAddress {
  /**
  * Description of wildcard address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_address_book_ordered#description SecurityAddressBookOrdered#description}
  */
  readonly description?: string;
  /**
  * Name of wildcard address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_address_book_ordered#name SecurityAddressBookOrdered#name}
  */
  readonly name: string;
  /**
  * Network and mask of wildcard address (`192.0.0.0/255.255.0.255`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_address_book_ordered#value SecurityAddressBookOrdered#value}
  */
  readonly value: string;
}

export function securityAddressBookOrderedWildcardAddressToTerraform(struct?: SecurityAddressBookOrderedWildcardAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function securityAddressBookOrderedWildcardAddressToHclTerraform(struct?: SecurityAddressBookOrderedWildcardAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityAddressBookOrderedWildcardAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityAddressBookOrderedWildcardAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityAddressBookOrderedWildcardAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
      this._value = value.value;
    }
  }

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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SecurityAddressBookOrderedWildcardAddressList extends cdktf.ComplexList {
  public internalValue? : SecurityAddressBookOrderedWildcardAddress[] | cdktf.IResolvable

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
  public get(index: number): SecurityAddressBookOrderedWildcardAddressOutputReference {
    return new SecurityAddressBookOrderedWildcardAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_address_book_ordered junos_security_address_book_ordered}
*/
export class SecurityAddressBookOrdered extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_security_address_book_ordered";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityAddressBookOrdered resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityAddressBookOrdered to import
  * @param importFromId The id of the existing SecurityAddressBookOrdered that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_address_book_ordered#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityAddressBookOrdered to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_security_address_book_ordered", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_address_book_ordered junos_security_address_book_ordered} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityAddressBookOrderedConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SecurityAddressBookOrderedConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'junos_security_address_book_ordered',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.16.0',
        providerVersionConstraint: '2.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attachZone = config.attachZone;
    this._description = config.description;
    this._name = config.name;
    this._addressSet.internalValue = config.addressSet;
    this._dnsName.internalValue = config.dnsName;
    this._networkAddress.internalValue = config.networkAddress;
    this._rangeAddress.internalValue = config.rangeAddress;
    this._wildcardAddress.internalValue = config.wildcardAddress;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attach_zone - computed: false, optional: true, required: false
  private _attachZone?: string[]; 
  public get attachZone() {
    return this.getListAttribute('attach_zone');
  }
  public set attachZone(value: string[]) {
    this._attachZone = value;
  }
  public resetAttachZone() {
    this._attachZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachZoneInput() {
    return this._attachZone;
  }

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: true, required: false
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

  // address_set - computed: false, optional: true, required: false
  private _addressSet = new SecurityAddressBookOrderedAddressSetList(this, "address_set", false);
  public get addressSet() {
    return this._addressSet;
  }
  public putAddressSet(value: SecurityAddressBookOrderedAddressSet[] | cdktf.IResolvable) {
    this._addressSet.internalValue = value;
  }
  public resetAddressSet() {
    this._addressSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressSetInput() {
    return this._addressSet.internalValue;
  }

  // dns_name - computed: false, optional: true, required: false
  private _dnsName = new SecurityAddressBookOrderedDnsNameList(this, "dns_name", false);
  public get dnsName() {
    return this._dnsName;
  }
  public putDnsName(value: SecurityAddressBookOrderedDnsName[] | cdktf.IResolvable) {
    this._dnsName.internalValue = value;
  }
  public resetDnsName() {
    this._dnsName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameInput() {
    return this._dnsName.internalValue;
  }

  // network_address - computed: false, optional: true, required: false
  private _networkAddress = new SecurityAddressBookOrderedNetworkAddressList(this, "network_address", false);
  public get networkAddress() {
    return this._networkAddress;
  }
  public putNetworkAddress(value: SecurityAddressBookOrderedNetworkAddress[] | cdktf.IResolvable) {
    this._networkAddress.internalValue = value;
  }
  public resetNetworkAddress() {
    this._networkAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAddressInput() {
    return this._networkAddress.internalValue;
  }

  // range_address - computed: false, optional: true, required: false
  private _rangeAddress = new SecurityAddressBookOrderedRangeAddressList(this, "range_address", false);
  public get rangeAddress() {
    return this._rangeAddress;
  }
  public putRangeAddress(value: SecurityAddressBookOrderedRangeAddress[] | cdktf.IResolvable) {
    this._rangeAddress.internalValue = value;
  }
  public resetRangeAddress() {
    this._rangeAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeAddressInput() {
    return this._rangeAddress.internalValue;
  }

  // wildcard_address - computed: false, optional: true, required: false
  private _wildcardAddress = new SecurityAddressBookOrderedWildcardAddressList(this, "wildcard_address", false);
  public get wildcardAddress() {
    return this._wildcardAddress;
  }
  public putWildcardAddress(value: SecurityAddressBookOrderedWildcardAddress[] | cdktf.IResolvable) {
    this._wildcardAddress.internalValue = value;
  }
  public resetWildcardAddress() {
    this._wildcardAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildcardAddressInput() {
    return this._wildcardAddress.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attach_zone: cdktf.listMapper(cdktf.stringToTerraform, false)(this._attachZone),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      address_set: cdktf.listMapper(securityAddressBookOrderedAddressSetToTerraform, true)(this._addressSet.internalValue),
      dns_name: cdktf.listMapper(securityAddressBookOrderedDnsNameToTerraform, true)(this._dnsName.internalValue),
      network_address: cdktf.listMapper(securityAddressBookOrderedNetworkAddressToTerraform, true)(this._networkAddress.internalValue),
      range_address: cdktf.listMapper(securityAddressBookOrderedRangeAddressToTerraform, true)(this._rangeAddress.internalValue),
      wildcard_address: cdktf.listMapper(securityAddressBookOrderedWildcardAddressToTerraform, true)(this._wildcardAddress.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attach_zone: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._attachZone),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      address_set: {
        value: cdktf.listMapperHcl(securityAddressBookOrderedAddressSetToHclTerraform, true)(this._addressSet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityAddressBookOrderedAddressSetList",
      },
      dns_name: {
        value: cdktf.listMapperHcl(securityAddressBookOrderedDnsNameToHclTerraform, true)(this._dnsName.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityAddressBookOrderedDnsNameList",
      },
      network_address: {
        value: cdktf.listMapperHcl(securityAddressBookOrderedNetworkAddressToHclTerraform, true)(this._networkAddress.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityAddressBookOrderedNetworkAddressList",
      },
      range_address: {
        value: cdktf.listMapperHcl(securityAddressBookOrderedRangeAddressToHclTerraform, true)(this._rangeAddress.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityAddressBookOrderedRangeAddressList",
      },
      wildcard_address: {
        value: cdktf.listMapperHcl(securityAddressBookOrderedWildcardAddressToHclTerraform, true)(this._wildcardAddress.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityAddressBookOrderedWildcardAddressList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
