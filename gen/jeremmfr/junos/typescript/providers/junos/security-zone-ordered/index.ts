// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_ordered
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityZoneOrderedConfig extends cdktf.TerraformMetaArguments {
  /**
  * Disable management of address-book in this resource to be able to manage them with specific resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_ordered#address_book_configure_singly SecurityZoneOrdered#address_book_configure_singly}
  */
  readonly addressBookConfigureSingly?: boolean | cdktf.IResolvable;
  /**
  * Enable Advance Policy Based Routing on this zone with a profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_ordered#advance_policy_based_routing_profile SecurityZoneOrdered#advance_policy_based_routing_profile}
  */
  readonly advancePolicyBasedRoutingProfile?: string;
  /**
  * Enable Application tracking support for this zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_ordered#application_tracking SecurityZoneOrdered#application_tracking}
  */
  readonly applicationTracking?: boolean | cdktf.IResolvable;
  /**
  * Text description of zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_ordered#description SecurityZoneOrdered#description}
  */
  readonly description?: string;
  /**
  * The inbound protocols allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_ordered#inbound_protocols SecurityZoneOrdered#inbound_protocols}
  */
  readonly inboundProtocols?: string[];
  /**
  * The inbound services allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_ordered#inbound_services SecurityZoneOrdered#inbound_services}
  */
  readonly inboundServices?: string[];
  /**
  * The name of security zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_ordered#name SecurityZoneOrdered#name}
  */
  readonly name: string;
  /**
  * Enable Reverse route lookup when there is change in ingress interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_ordered#reverse_reroute SecurityZoneOrdered#reverse_reroute}
  */
  readonly reverseReroute?: boolean | cdktf.IResolvable;
  /**
  * Name of ids option object (screen) applied to the zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_ordered#screen SecurityZoneOrdered#screen}
  */
  readonly screen?: string;
  /**
  * Show user and group info in session log for this zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_ordered#source_identity_log SecurityZoneOrdered#source_identity_log}
  */
  readonly sourceIdentityLog?: boolean | cdktf.IResolvable;
  /**
  * Send RST for NON-SYN packet not matching TCP session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_ordered#tcp_rst SecurityZoneOrdered#tcp_rst}
  */
  readonly tcpRst?: boolean | cdktf.IResolvable;
  /**
  * address_book block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_ordered#address_book SecurityZoneOrdered#address_book}
  */
  readonly addressBook?: SecurityZoneOrderedAddressBook[] | cdktf.IResolvable;
  /**
  * address_book_dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_ordered#address_book_dns SecurityZoneOrdered#address_book_dns}
  */
  readonly addressBookDns?: SecurityZoneOrderedAddressBookDns[] | cdktf.IResolvable;
  /**
  * address_book_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_ordered#address_book_range SecurityZoneOrdered#address_book_range}
  */
  readonly addressBookRange?: SecurityZoneOrderedAddressBookRange[] | cdktf.IResolvable;
  /**
  * address_book_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_ordered#address_book_set SecurityZoneOrdered#address_book_set}
  */
  readonly addressBookSet?: SecurityZoneOrderedAddressBookSet[] | cdktf.IResolvable;
  /**
  * address_book_wildcard block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_ordered#address_book_wildcard SecurityZoneOrdered#address_book_wildcard}
  */
  readonly addressBookWildcard?: SecurityZoneOrderedAddressBookWildcard[] | cdktf.IResolvable;
}
export interface SecurityZoneOrderedAddressBook {
  /**
  * Description of network address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_ordered#description SecurityZoneOrdered#description}
  */
  readonly description?: string;
  /**
  * Name of network address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_ordered#name SecurityZoneOrdered#name}
  */
  readonly name: string;
  /**
  * CIDR value of network address (`192.0.0.0/24`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_ordered#network SecurityZoneOrdered#network}
  */
  readonly network: string;
}

export function securityZoneOrderedAddressBookToTerraform(struct?: SecurityZoneOrderedAddressBook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    network: cdktf.stringToTerraform(struct!.network),
  }
}


export function securityZoneOrderedAddressBookToHclTerraform(struct?: SecurityZoneOrderedAddressBook | cdktf.IResolvable): any {
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
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityZoneOrderedAddressBookOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityZoneOrderedAddressBook | cdktf.IResolvable | undefined {
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
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityZoneOrderedAddressBook | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._network = undefined;
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
      this._network = value.network;
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

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }
}

export class SecurityZoneOrderedAddressBookList extends cdktf.ComplexList {
  public internalValue? : SecurityZoneOrderedAddressBook[] | cdktf.IResolvable

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
  public get(index: number): SecurityZoneOrderedAddressBookOutputReference {
    return new SecurityZoneOrderedAddressBookOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityZoneOrderedAddressBookDns {
  /**
  * Description of dns name address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_ordered#description SecurityZoneOrdered#description}
  */
  readonly description?: string;
  /**
  * Fully qualified domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_ordered#fqdn SecurityZoneOrdered#fqdn}
  */
  readonly fqdn: string;
  /**
  * IPv4 dns address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_ordered#ipv4_only SecurityZoneOrdered#ipv4_only}
  */
  readonly ipv4Only?: boolean | cdktf.IResolvable;
  /**
  * IPv6 dns address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_ordered#ipv6_only SecurityZoneOrdered#ipv6_only}
  */
  readonly ipv6Only?: boolean | cdktf.IResolvable;
  /**
  * Name of dns name address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_ordered#name SecurityZoneOrdered#name}
  */
  readonly name: string;
}

export function securityZoneOrderedAddressBookDnsToTerraform(struct?: SecurityZoneOrderedAddressBookDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    ipv4_only: cdktf.booleanToTerraform(struct!.ipv4Only),
    ipv6_only: cdktf.booleanToTerraform(struct!.ipv6Only),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function securityZoneOrderedAddressBookDnsToHclTerraform(struct?: SecurityZoneOrderedAddressBookDns | cdktf.IResolvable): any {
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
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityZoneOrderedAddressBookDnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityZoneOrderedAddressBookDns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityZoneOrderedAddressBookDns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._fqdn = undefined;
      this._ipv4Only = undefined;
      this._ipv6Only = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._fqdn = value.fqdn;
      this._ipv4Only = value.ipv4Only;
      this._ipv6Only = value.ipv6Only;
      this._name = value.name;
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

  // fqdn - computed: false, optional: false, required: true
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
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
}

export class SecurityZoneOrderedAddressBookDnsList extends cdktf.ComplexList {
  public internalValue? : SecurityZoneOrderedAddressBookDns[] | cdktf.IResolvable

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
  public get(index: number): SecurityZoneOrderedAddressBookDnsOutputReference {
    return new SecurityZoneOrderedAddressBookDnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityZoneOrderedAddressBookRange {
  /**
  * Description of range address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_ordered#description SecurityZoneOrdered#description}
  */
  readonly description?: string;
  /**
  * Lower limit of address range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_ordered#from SecurityZoneOrdered#from}
  */
  readonly from: string;
  /**
  * Name of range address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_ordered#name SecurityZoneOrdered#name}
  */
  readonly name: string;
  /**
  * Upper limit of address range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_ordered#to SecurityZoneOrdered#to}
  */
  readonly to: string;
}

export function securityZoneOrderedAddressBookRangeToTerraform(struct?: SecurityZoneOrderedAddressBookRange | cdktf.IResolvable): any {
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


export function securityZoneOrderedAddressBookRangeToHclTerraform(struct?: SecurityZoneOrderedAddressBookRange | cdktf.IResolvable): any {
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

export class SecurityZoneOrderedAddressBookRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityZoneOrderedAddressBookRange | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecurityZoneOrderedAddressBookRange | cdktf.IResolvable | undefined) {
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

export class SecurityZoneOrderedAddressBookRangeList extends cdktf.ComplexList {
  public internalValue? : SecurityZoneOrderedAddressBookRange[] | cdktf.IResolvable

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
  public get(index: number): SecurityZoneOrderedAddressBookRangeOutputReference {
    return new SecurityZoneOrderedAddressBookRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityZoneOrderedAddressBookSet {
  /**
  * List of address names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_ordered#address SecurityZoneOrdered#address}
  */
  readonly address?: string[];
  /**
  * List of address-set names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_ordered#address_set SecurityZoneOrdered#address_set}
  */
  readonly addressSet?: string[];
  /**
  * Description of address-set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_ordered#description SecurityZoneOrdered#description}
  */
  readonly description?: string;
  /**
  * Name of address-set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_ordered#name SecurityZoneOrdered#name}
  */
  readonly name: string;
}

export function securityZoneOrderedAddressBookSetToTerraform(struct?: SecurityZoneOrderedAddressBookSet | cdktf.IResolvable): any {
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


export function securityZoneOrderedAddressBookSetToHclTerraform(struct?: SecurityZoneOrderedAddressBookSet | cdktf.IResolvable): any {
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

export class SecurityZoneOrderedAddressBookSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityZoneOrderedAddressBookSet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecurityZoneOrderedAddressBookSet | cdktf.IResolvable | undefined) {
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

export class SecurityZoneOrderedAddressBookSetList extends cdktf.ComplexList {
  public internalValue? : SecurityZoneOrderedAddressBookSet[] | cdktf.IResolvable

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
  public get(index: number): SecurityZoneOrderedAddressBookSetOutputReference {
    return new SecurityZoneOrderedAddressBookSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityZoneOrderedAddressBookWildcard {
  /**
  * Description of wildcard address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_ordered#description SecurityZoneOrdered#description}
  */
  readonly description?: string;
  /**
  * Name of wildcard address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_ordered#name SecurityZoneOrdered#name}
  */
  readonly name: string;
  /**
  * Numeric IPv4 wildcard address with in the form of a.d.d.r/netmask.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_ordered#network SecurityZoneOrdered#network}
  */
  readonly network: string;
}

export function securityZoneOrderedAddressBookWildcardToTerraform(struct?: SecurityZoneOrderedAddressBookWildcard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    network: cdktf.stringToTerraform(struct!.network),
  }
}


export function securityZoneOrderedAddressBookWildcardToHclTerraform(struct?: SecurityZoneOrderedAddressBookWildcard | cdktf.IResolvable): any {
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
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityZoneOrderedAddressBookWildcardOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityZoneOrderedAddressBookWildcard | cdktf.IResolvable | undefined {
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
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityZoneOrderedAddressBookWildcard | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._network = undefined;
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
      this._network = value.network;
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

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }
}

export class SecurityZoneOrderedAddressBookWildcardList extends cdktf.ComplexList {
  public internalValue? : SecurityZoneOrderedAddressBookWildcard[] | cdktf.IResolvable

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
  public get(index: number): SecurityZoneOrderedAddressBookWildcardOutputReference {
    return new SecurityZoneOrderedAddressBookWildcardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_ordered junos_security_zone_ordered}
*/
export class SecurityZoneOrdered extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_security_zone_ordered";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityZoneOrdered resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityZoneOrdered to import
  * @param importFromId The id of the existing SecurityZoneOrdered that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_ordered#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityZoneOrdered to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_security_zone_ordered", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_ordered junos_security_zone_ordered} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityZoneOrderedConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityZoneOrderedConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_security_zone_ordered',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0',
        providerVersionConstraint: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addressBookConfigureSingly = config.addressBookConfigureSingly;
    this._advancePolicyBasedRoutingProfile = config.advancePolicyBasedRoutingProfile;
    this._applicationTracking = config.applicationTracking;
    this._description = config.description;
    this._inboundProtocols = config.inboundProtocols;
    this._inboundServices = config.inboundServices;
    this._name = config.name;
    this._reverseReroute = config.reverseReroute;
    this._screen = config.screen;
    this._sourceIdentityLog = config.sourceIdentityLog;
    this._tcpRst = config.tcpRst;
    this._addressBook.internalValue = config.addressBook;
    this._addressBookDns.internalValue = config.addressBookDns;
    this._addressBookRange.internalValue = config.addressBookRange;
    this._addressBookSet.internalValue = config.addressBookSet;
    this._addressBookWildcard.internalValue = config.addressBookWildcard;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_book_configure_singly - computed: false, optional: true, required: false
  private _addressBookConfigureSingly?: boolean | cdktf.IResolvable; 
  public get addressBookConfigureSingly() {
    return this.getBooleanAttribute('address_book_configure_singly');
  }
  public set addressBookConfigureSingly(value: boolean | cdktf.IResolvable) {
    this._addressBookConfigureSingly = value;
  }
  public resetAddressBookConfigureSingly() {
    this._addressBookConfigureSingly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressBookConfigureSinglyInput() {
    return this._addressBookConfigureSingly;
  }

  // advance_policy_based_routing_profile - computed: false, optional: true, required: false
  private _advancePolicyBasedRoutingProfile?: string; 
  public get advancePolicyBasedRoutingProfile() {
    return this.getStringAttribute('advance_policy_based_routing_profile');
  }
  public set advancePolicyBasedRoutingProfile(value: string) {
    this._advancePolicyBasedRoutingProfile = value;
  }
  public resetAdvancePolicyBasedRoutingProfile() {
    this._advancePolicyBasedRoutingProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancePolicyBasedRoutingProfileInput() {
    return this._advancePolicyBasedRoutingProfile;
  }

  // application_tracking - computed: false, optional: true, required: false
  private _applicationTracking?: boolean | cdktf.IResolvable; 
  public get applicationTracking() {
    return this.getBooleanAttribute('application_tracking');
  }
  public set applicationTracking(value: boolean | cdktf.IResolvable) {
    this._applicationTracking = value;
  }
  public resetApplicationTracking() {
    this._applicationTracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationTrackingInput() {
    return this._applicationTracking;
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

  // inbound_protocols - computed: false, optional: true, required: false
  private _inboundProtocols?: string[]; 
  public get inboundProtocols() {
    return cdktf.Fn.tolist(this.getListAttribute('inbound_protocols'));
  }
  public set inboundProtocols(value: string[]) {
    this._inboundProtocols = value;
  }
  public resetInboundProtocols() {
    this._inboundProtocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundProtocolsInput() {
    return this._inboundProtocols;
  }

  // inbound_services - computed: false, optional: true, required: false
  private _inboundServices?: string[]; 
  public get inboundServices() {
    return cdktf.Fn.tolist(this.getListAttribute('inbound_services'));
  }
  public set inboundServices(value: string[]) {
    this._inboundServices = value;
  }
  public resetInboundServices() {
    this._inboundServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundServicesInput() {
    return this._inboundServices;
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

  // reverse_reroute - computed: false, optional: true, required: false
  private _reverseReroute?: boolean | cdktf.IResolvable; 
  public get reverseReroute() {
    return this.getBooleanAttribute('reverse_reroute');
  }
  public set reverseReroute(value: boolean | cdktf.IResolvable) {
    this._reverseReroute = value;
  }
  public resetReverseReroute() {
    this._reverseReroute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseRerouteInput() {
    return this._reverseReroute;
  }

  // screen - computed: false, optional: true, required: false
  private _screen?: string; 
  public get screen() {
    return this.getStringAttribute('screen');
  }
  public set screen(value: string) {
    this._screen = value;
  }
  public resetScreen() {
    this._screen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get screenInput() {
    return this._screen;
  }

  // source_identity_log - computed: false, optional: true, required: false
  private _sourceIdentityLog?: boolean | cdktf.IResolvable; 
  public get sourceIdentityLog() {
    return this.getBooleanAttribute('source_identity_log');
  }
  public set sourceIdentityLog(value: boolean | cdktf.IResolvable) {
    this._sourceIdentityLog = value;
  }
  public resetSourceIdentityLog() {
    this._sourceIdentityLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIdentityLogInput() {
    return this._sourceIdentityLog;
  }

  // tcp_rst - computed: false, optional: true, required: false
  private _tcpRst?: boolean | cdktf.IResolvable; 
  public get tcpRst() {
    return this.getBooleanAttribute('tcp_rst');
  }
  public set tcpRst(value: boolean | cdktf.IResolvable) {
    this._tcpRst = value;
  }
  public resetTcpRst() {
    this._tcpRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRstInput() {
    return this._tcpRst;
  }

  // address_book - computed: false, optional: true, required: false
  private _addressBook = new SecurityZoneOrderedAddressBookList(this, "address_book", false);
  public get addressBook() {
    return this._addressBook;
  }
  public putAddressBook(value: SecurityZoneOrderedAddressBook[] | cdktf.IResolvable) {
    this._addressBook.internalValue = value;
  }
  public resetAddressBook() {
    this._addressBook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressBookInput() {
    return this._addressBook.internalValue;
  }

  // address_book_dns - computed: false, optional: true, required: false
  private _addressBookDns = new SecurityZoneOrderedAddressBookDnsList(this, "address_book_dns", false);
  public get addressBookDns() {
    return this._addressBookDns;
  }
  public putAddressBookDns(value: SecurityZoneOrderedAddressBookDns[] | cdktf.IResolvable) {
    this._addressBookDns.internalValue = value;
  }
  public resetAddressBookDns() {
    this._addressBookDns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressBookDnsInput() {
    return this._addressBookDns.internalValue;
  }

  // address_book_range - computed: false, optional: true, required: false
  private _addressBookRange = new SecurityZoneOrderedAddressBookRangeList(this, "address_book_range", false);
  public get addressBookRange() {
    return this._addressBookRange;
  }
  public putAddressBookRange(value: SecurityZoneOrderedAddressBookRange[] | cdktf.IResolvable) {
    this._addressBookRange.internalValue = value;
  }
  public resetAddressBookRange() {
    this._addressBookRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressBookRangeInput() {
    return this._addressBookRange.internalValue;
  }

  // address_book_set - computed: false, optional: true, required: false
  private _addressBookSet = new SecurityZoneOrderedAddressBookSetList(this, "address_book_set", false);
  public get addressBookSet() {
    return this._addressBookSet;
  }
  public putAddressBookSet(value: SecurityZoneOrderedAddressBookSet[] | cdktf.IResolvable) {
    this._addressBookSet.internalValue = value;
  }
  public resetAddressBookSet() {
    this._addressBookSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressBookSetInput() {
    return this._addressBookSet.internalValue;
  }

  // address_book_wildcard - computed: false, optional: true, required: false
  private _addressBookWildcard = new SecurityZoneOrderedAddressBookWildcardList(this, "address_book_wildcard", false);
  public get addressBookWildcard() {
    return this._addressBookWildcard;
  }
  public putAddressBookWildcard(value: SecurityZoneOrderedAddressBookWildcard[] | cdktf.IResolvable) {
    this._addressBookWildcard.internalValue = value;
  }
  public resetAddressBookWildcard() {
    this._addressBookWildcard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressBookWildcardInput() {
    return this._addressBookWildcard.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_book_configure_singly: cdktf.booleanToTerraform(this._addressBookConfigureSingly),
      advance_policy_based_routing_profile: cdktf.stringToTerraform(this._advancePolicyBasedRoutingProfile),
      application_tracking: cdktf.booleanToTerraform(this._applicationTracking),
      description: cdktf.stringToTerraform(this._description),
      inbound_protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._inboundProtocols),
      inbound_services: cdktf.listMapper(cdktf.stringToTerraform, false)(this._inboundServices),
      name: cdktf.stringToTerraform(this._name),
      reverse_reroute: cdktf.booleanToTerraform(this._reverseReroute),
      screen: cdktf.stringToTerraform(this._screen),
      source_identity_log: cdktf.booleanToTerraform(this._sourceIdentityLog),
      tcp_rst: cdktf.booleanToTerraform(this._tcpRst),
      address_book: cdktf.listMapper(securityZoneOrderedAddressBookToTerraform, true)(this._addressBook.internalValue),
      address_book_dns: cdktf.listMapper(securityZoneOrderedAddressBookDnsToTerraform, true)(this._addressBookDns.internalValue),
      address_book_range: cdktf.listMapper(securityZoneOrderedAddressBookRangeToTerraform, true)(this._addressBookRange.internalValue),
      address_book_set: cdktf.listMapper(securityZoneOrderedAddressBookSetToTerraform, true)(this._addressBookSet.internalValue),
      address_book_wildcard: cdktf.listMapper(securityZoneOrderedAddressBookWildcardToTerraform, true)(this._addressBookWildcard.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_book_configure_singly: {
        value: cdktf.booleanToHclTerraform(this._addressBookConfigureSingly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      advance_policy_based_routing_profile: {
        value: cdktf.stringToHclTerraform(this._advancePolicyBasedRoutingProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_tracking: {
        value: cdktf.booleanToHclTerraform(this._applicationTracking),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inbound_protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._inboundProtocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      inbound_services: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._inboundServices),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reverse_reroute: {
        value: cdktf.booleanToHclTerraform(this._reverseReroute),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      screen: {
        value: cdktf.stringToHclTerraform(this._screen),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_identity_log: {
        value: cdktf.booleanToHclTerraform(this._sourceIdentityLog),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tcp_rst: {
        value: cdktf.booleanToHclTerraform(this._tcpRst),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      address_book: {
        value: cdktf.listMapperHcl(securityZoneOrderedAddressBookToHclTerraform, true)(this._addressBook.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityZoneOrderedAddressBookList",
      },
      address_book_dns: {
        value: cdktf.listMapperHcl(securityZoneOrderedAddressBookDnsToHclTerraform, true)(this._addressBookDns.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityZoneOrderedAddressBookDnsList",
      },
      address_book_range: {
        value: cdktf.listMapperHcl(securityZoneOrderedAddressBookRangeToHclTerraform, true)(this._addressBookRange.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityZoneOrderedAddressBookRangeList",
      },
      address_book_set: {
        value: cdktf.listMapperHcl(securityZoneOrderedAddressBookSetToHclTerraform, true)(this._addressBookSet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityZoneOrderedAddressBookSetList",
      },
      address_book_wildcard: {
        value: cdktf.listMapperHcl(securityZoneOrderedAddressBookWildcardToHclTerraform, true)(this._addressBookWildcard.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityZoneOrderedAddressBookWildcardList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
