// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * disables default flows programming
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/domain#default_flows_disable Domain#default_flows_disable}
  */
  readonly defaultFlowsDisable?: boolean | cdktf.IResolvable;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/domain#delete_mode Domain#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/domain#device Domain#device}
  */
  readonly device?: string;
  /**
  * A domain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/domain#domains Domain#domains}
  */
  readonly domains?: DomainDomains[] | cdktf.IResolvable;
  /**
  * Name of host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/domain#ipv4_hosts Domain#ipv4_hosts}
  */
  readonly ipv4Hosts?: DomainIpv4Hosts[] | cdktf.IResolvable;
  /**
  * Name of host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/domain#ipv6_hosts Domain#ipv6_hosts}
  */
  readonly ipv6Hosts?: DomainIpv6Hosts[] | cdktf.IResolvable;
  /**
  * Disable Domain Name System hostname translation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/domain#lookup_disable Domain#lookup_disable}
  */
  readonly lookupDisable?: boolean | cdktf.IResolvable;
  /**
  * Specify source interface for DNS resolver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/domain#lookup_source_interface Domain#lookup_source_interface}
  */
  readonly lookupSourceInterface?: string;
  /**
  * Define the domain name for multicast address lookups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/domain#multicast Domain#multicast}
  */
  readonly multicast?: string;
  /**
  * Define the default domain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/domain#name Domain#name}
  */
  readonly name?: string;
  /**
  * Specify address of name server to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/domain#name_servers Domain#name_servers}
  */
  readonly nameServers?: DomainNameServers[] | cdktf.IResolvable;
}
export interface DomainDomains {
  /**
  * A domain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/domain#domain_name Domain#domain_name}
  */
  readonly domainName: string;
  /**
  * This is used to sort the servers in the order of precedence
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/domain#order Domain#order}
  */
  readonly order: number;
}

export function domainDomainsToTerraform(struct?: DomainDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    order: cdktf.numberToTerraform(struct!.order),
  }
}


export function domainDomainsToHclTerraform(struct?: DomainDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_name: {
      value: cdktf.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainDomainsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DomainDomains | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainDomains | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainName = undefined;
      this._order = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainName = value.domainName;
      this._order = value.order;
    }
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // order - computed: false, optional: false, required: true
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }
}

export class DomainDomainsList extends cdktf.ComplexList {
  public internalValue? : DomainDomains[] | cdktf.IResolvable

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
  public get(index: number): DomainDomainsOutputReference {
    return new DomainDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DomainIpv4Hosts {
  /**
  * Name of host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/domain#host_name Domain#host_name}
  */
  readonly hostName: string;
  /**
  * Host IP address (maximum of 8)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/domain#ip_address Domain#ip_address}
  */
  readonly ipAddress?: string[];
}

export function domainIpv4HostsToTerraform(struct?: DomainIpv4Hosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_name: cdktf.stringToTerraform(struct!.hostName),
    ip_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipAddress),
  }
}


export function domainIpv4HostsToHclTerraform(struct?: DomainIpv4Hosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_name: {
      value: cdktf.stringToHclTerraform(struct!.hostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipAddress),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainIpv4HostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DomainIpv4Hosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainIpv4Hosts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostName = undefined;
      this._ipAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostName = value.hostName;
      this._ipAddress = value.ipAddress;
    }
  }

  // host_name - computed: false, optional: false, required: true
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string[]; 
  public get ipAddress() {
    return this.getListAttribute('ip_address');
  }
  public set ipAddress(value: string[]) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}

export class DomainIpv4HostsList extends cdktf.ComplexList {
  public internalValue? : DomainIpv4Hosts[] | cdktf.IResolvable

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
  public get(index: number): DomainIpv4HostsOutputReference {
    return new DomainIpv4HostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DomainIpv6Hosts {
  /**
  * Name of host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/domain#host_name Domain#host_name}
  */
  readonly hostName: string;
  /**
  * IPv6 name or address (maximum four addresses)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/domain#ipv6_address Domain#ipv6_address}
  */
  readonly ipv6Address?: string[];
}

export function domainIpv6HostsToTerraform(struct?: DomainIpv6Hosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_name: cdktf.stringToTerraform(struct!.hostName),
    ipv6_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Address),
  }
}


export function domainIpv6HostsToHclTerraform(struct?: DomainIpv6Hosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_name: {
      value: cdktf.stringToHclTerraform(struct!.hostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6Address),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainIpv6HostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DomainIpv6Hosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainIpv6Hosts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostName = undefined;
      this._ipv6Address = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostName = value.hostName;
      this._ipv6Address = value.ipv6Address;
    }
  }

  // host_name - computed: false, optional: false, required: true
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string[]; 
  public get ipv6Address() {
    return this.getListAttribute('ipv6_address');
  }
  public set ipv6Address(value: string[]) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }
}

export class DomainIpv6HostsList extends cdktf.ComplexList {
  public internalValue? : DomainIpv6Hosts[] | cdktf.IResolvable

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
  public get(index: number): DomainIpv6HostsOutputReference {
    return new DomainIpv6HostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DomainNameServers {
  /**
  * Specify address of name server to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/domain#address Domain#address}
  */
  readonly address: string;
  /**
  * This is used to sort the servers in the order of precedence
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/domain#order Domain#order}
  */
  readonly order: number;
}

export function domainNameServersToTerraform(struct?: DomainNameServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    order: cdktf.numberToTerraform(struct!.order),
  }
}


export function domainNameServersToHclTerraform(struct?: DomainNameServers | cdktf.IResolvable): any {
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
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainNameServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DomainNameServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainNameServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._order = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._order = value.order;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // order - computed: false, optional: false, required: true
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }
}

export class DomainNameServersList extends cdktf.ComplexList {
  public internalValue? : DomainNameServers[] | cdktf.IResolvable

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
  public get(index: number): DomainNameServersOutputReference {
    return new DomainNameServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/domain iosxr_domain}
*/
export class Domain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Domain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Domain to import
  * @param importFromId The id of the existing Domain that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Domain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/domain iosxr_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DomainConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DomainConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxr_domain',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultFlowsDisable = config.defaultFlowsDisable;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._domains.internalValue = config.domains;
    this._ipv4Hosts.internalValue = config.ipv4Hosts;
    this._ipv6Hosts.internalValue = config.ipv6Hosts;
    this._lookupDisable = config.lookupDisable;
    this._lookupSourceInterface = config.lookupSourceInterface;
    this._multicast = config.multicast;
    this._name = config.name;
    this._nameServers.internalValue = config.nameServers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_flows_disable - computed: false, optional: true, required: false
  private _defaultFlowsDisable?: boolean | cdktf.IResolvable; 
  public get defaultFlowsDisable() {
    return this.getBooleanAttribute('default_flows_disable');
  }
  public set defaultFlowsDisable(value: boolean | cdktf.IResolvable) {
    this._defaultFlowsDisable = value;
  }
  public resetDefaultFlowsDisable() {
    this._defaultFlowsDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultFlowsDisableInput() {
    return this._defaultFlowsDisable;
  }

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // domains - computed: false, optional: true, required: false
  private _domains = new DomainDomainsList(this, "domains", false);
  public get domains() {
    return this._domains;
  }
  public putDomains(value: DomainDomains[] | cdktf.IResolvable) {
    this._domains.internalValue = value;
  }
  public resetDomains() {
    this._domains.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv4_hosts - computed: false, optional: true, required: false
  private _ipv4Hosts = new DomainIpv4HostsList(this, "ipv4_hosts", false);
  public get ipv4Hosts() {
    return this._ipv4Hosts;
  }
  public putIpv4Hosts(value: DomainIpv4Hosts[] | cdktf.IResolvable) {
    this._ipv4Hosts.internalValue = value;
  }
  public resetIpv4Hosts() {
    this._ipv4Hosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4HostsInput() {
    return this._ipv4Hosts.internalValue;
  }

  // ipv6_hosts - computed: false, optional: true, required: false
  private _ipv6Hosts = new DomainIpv6HostsList(this, "ipv6_hosts", false);
  public get ipv6Hosts() {
    return this._ipv6Hosts;
  }
  public putIpv6Hosts(value: DomainIpv6Hosts[] | cdktf.IResolvable) {
    this._ipv6Hosts.internalValue = value;
  }
  public resetIpv6Hosts() {
    this._ipv6Hosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6HostsInput() {
    return this._ipv6Hosts.internalValue;
  }

  // lookup_disable - computed: false, optional: true, required: false
  private _lookupDisable?: boolean | cdktf.IResolvable; 
  public get lookupDisable() {
    return this.getBooleanAttribute('lookup_disable');
  }
  public set lookupDisable(value: boolean | cdktf.IResolvable) {
    this._lookupDisable = value;
  }
  public resetLookupDisable() {
    this._lookupDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupDisableInput() {
    return this._lookupDisable;
  }

  // lookup_source_interface - computed: false, optional: true, required: false
  private _lookupSourceInterface?: string; 
  public get lookupSourceInterface() {
    return this.getStringAttribute('lookup_source_interface');
  }
  public set lookupSourceInterface(value: string) {
    this._lookupSourceInterface = value;
  }
  public resetLookupSourceInterface() {
    this._lookupSourceInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupSourceInterfaceInput() {
    return this._lookupSourceInterface;
  }

  // multicast - computed: false, optional: true, required: false
  private _multicast?: string; 
  public get multicast() {
    return this.getStringAttribute('multicast');
  }
  public set multicast(value: string) {
    this._multicast = value;
  }
  public resetMulticast() {
    this._multicast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastInput() {
    return this._multicast;
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

  // name_servers - computed: false, optional: true, required: false
  private _nameServers = new DomainNameServersList(this, "name_servers", false);
  public get nameServers() {
    return this._nameServers;
  }
  public putNameServers(value: DomainNameServers[] | cdktf.IResolvable) {
    this._nameServers.internalValue = value;
  }
  public resetNameServers() {
    this._nameServers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameServersInput() {
    return this._nameServers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_flows_disable: cdktf.booleanToTerraform(this._defaultFlowsDisable),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      domains: cdktf.listMapper(domainDomainsToTerraform, false)(this._domains.internalValue),
      ipv4_hosts: cdktf.listMapper(domainIpv4HostsToTerraform, false)(this._ipv4Hosts.internalValue),
      ipv6_hosts: cdktf.listMapper(domainIpv6HostsToTerraform, false)(this._ipv6Hosts.internalValue),
      lookup_disable: cdktf.booleanToTerraform(this._lookupDisable),
      lookup_source_interface: cdktf.stringToTerraform(this._lookupSourceInterface),
      multicast: cdktf.stringToTerraform(this._multicast),
      name: cdktf.stringToTerraform(this._name),
      name_servers: cdktf.listMapper(domainNameServersToTerraform, false)(this._nameServers.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_flows_disable: {
        value: cdktf.booleanToHclTerraform(this._defaultFlowsDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domains: {
        value: cdktf.listMapperHcl(domainDomainsToHclTerraform, false)(this._domains.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DomainDomainsList",
      },
      ipv4_hosts: {
        value: cdktf.listMapperHcl(domainIpv4HostsToHclTerraform, false)(this._ipv4Hosts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DomainIpv4HostsList",
      },
      ipv6_hosts: {
        value: cdktf.listMapperHcl(domainIpv6HostsToHclTerraform, false)(this._ipv6Hosts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DomainIpv6HostsList",
      },
      lookup_disable: {
        value: cdktf.booleanToHclTerraform(this._lookupDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lookup_source_interface: {
        value: cdktf.stringToHclTerraform(this._lookupSourceInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multicast: {
        value: cdktf.stringToHclTerraform(this._multicast),
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
      name_servers: {
        value: cdktf.listMapperHcl(domainNameServersToHclTerraform, false)(this._nameServers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DomainNameServersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
