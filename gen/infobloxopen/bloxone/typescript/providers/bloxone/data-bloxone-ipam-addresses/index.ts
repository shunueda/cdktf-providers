// https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_addresses
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBloxoneIpamAddressesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter are used to return a more specific list of results. Filters can be used to match resources by specific attributes, e.g. name. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_addresses#filters DataBloxoneIpamAddresses#filters}
  */
  readonly filters?: { [key: string]: string };
  /**
  * Tag Filters are used to return a more specific list of results filtered by tags. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_addresses#tag_filters DataBloxoneIpamAddresses#tag_filters}
  */
  readonly tagFilters?: { [key: string]: string };
}
export interface DataBloxoneIpamAddressesResultsDhcpInfo {
}

export function dataBloxoneIpamAddressesResultsDhcpInfoToTerraform(struct?: DataBloxoneIpamAddressesResultsDhcpInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneIpamAddressesResultsDhcpInfoToHclTerraform(struct?: DataBloxoneIpamAddressesResultsDhcpInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneIpamAddressesResultsDhcpInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamAddressesResultsDhcpInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressesResultsDhcpInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_hostname - computed: true, optional: false, required: false
  public get clientHostname() {
    return this.getStringAttribute('client_hostname');
  }

  // client_hwaddr - computed: true, optional: false, required: false
  public get clientHwaddr() {
    return this.getStringAttribute('client_hwaddr');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getStringAttribute('end');
  }

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }

  // iaid - computed: true, optional: false, required: false
  public get iaid() {
    return this.getNumberAttribute('iaid');
  }

  // lease_type - computed: true, optional: false, required: false
  public get leaseType() {
    return this.getStringAttribute('lease_type');
  }

  // preferred_lifetime - computed: true, optional: false, required: false
  public get preferredLifetime() {
    return this.getStringAttribute('preferred_lifetime');
  }

  // remain - computed: true, optional: false, required: false
  public get remain() {
    return this.getNumberAttribute('remain');
  }

  // start - computed: true, optional: false, required: false
  public get start() {
    return this.getStringAttribute('start');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_ts - computed: true, optional: false, required: false
  public get stateTs() {
    return this.getStringAttribute('state_ts');
  }
}
export interface DataBloxoneIpamAddressesResultsNames {
  /**
  * The name expressed as a single label or FQDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_addresses#name DataBloxoneIpamAddresses#name}
  */
  readonly name: string;
  /**
  * The origin of the name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_addresses#type DataBloxoneIpamAddresses#type}
  */
  readonly type: string;
}

export function dataBloxoneIpamAddressesResultsNamesToTerraform(struct?: DataBloxoneIpamAddressesResultsNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataBloxoneIpamAddressesResultsNamesToHclTerraform(struct?: DataBloxoneIpamAddressesResultsNames | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamAddressesResultsNamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneIpamAddressesResultsNames | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressesResultsNames | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // name - computed: true, optional: false, required: true
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

  // type - computed: true, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataBloxoneIpamAddressesResultsNamesList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneIpamAddressesResultsNames[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneIpamAddressesResultsNamesOutputReference {
    return new DataBloxoneIpamAddressesResultsNamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneIpamAddressesResults {
  /**
  * The address in form "a.b.c.d".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_addresses#address DataBloxoneIpamAddresses#address}
  */
  readonly address?: string;
  /**
  * The description for the address object. May contain 0 to 1024 characters. Can include UTF-8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_addresses#comment DataBloxoneIpamAddresses#comment}
  */
  readonly comment?: string;
  /**
  * The external keys (source key) for this address in JSON format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_addresses#external_keys DataBloxoneIpamAddresses#external_keys}
  */
  readonly externalKeys?: { [key: string]: string };
  /**
  * The hardware address associated with this IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_addresses#hwaddr DataBloxoneIpamAddresses#hwaddr}
  */
  readonly hwaddr?: string;
  /**
  * The name of the network interface card (NIC) associated with the address, if any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_addresses#interface DataBloxoneIpamAddresses#interface}
  */
  readonly interface?: string;
  /**
  * The list of all names associated with this address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_addresses#names DataBloxoneIpamAddresses#names}
  */
  readonly names?: DataBloxoneIpamAddressesResultsNames[] | cdktf.IResolvable;
  /**
  * The resource identifier for the address block, subnet or range where the next available address should be generated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_addresses#next_available_id DataBloxoneIpamAddresses#next_available_id}
  */
  readonly nextAvailableId?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_addresses#space DataBloxoneIpamAddresses#space}
  */
  readonly space: string;
  /**
  * The tags for this address in JSON format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_addresses#tags DataBloxoneIpamAddresses#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function dataBloxoneIpamAddressesResultsToTerraform(struct?: DataBloxoneIpamAddressesResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    comment: cdktf.stringToTerraform(struct!.comment),
    external_keys: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.externalKeys),
    hwaddr: cdktf.stringToTerraform(struct!.hwaddr),
    interface: cdktf.stringToTerraform(struct!.interface),
    names: cdktf.listMapper(dataBloxoneIpamAddressesResultsNamesToTerraform, false)(struct!.names),
    next_available_id: cdktf.stringToTerraform(struct!.nextAvailableId),
    space: cdktf.stringToTerraform(struct!.space),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function dataBloxoneIpamAddressesResultsToHclTerraform(struct?: DataBloxoneIpamAddressesResults): any {
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
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_keys: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.externalKeys),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    hwaddr: {
      value: cdktf.stringToHclTerraform(struct!.hwaddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    names: {
      value: cdktf.listMapperHcl(dataBloxoneIpamAddressesResultsNamesToHclTerraform, false)(struct!.names),
      isBlock: true,
      type: "list",
      storageClassType: "DataBloxoneIpamAddressesResultsNamesList",
    },
    next_available_id: {
      value: cdktf.stringToHclTerraform(struct!.nextAvailableId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    space: {
      value: cdktf.stringToHclTerraform(struct!.space),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamAddressesResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneIpamAddressesResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._externalKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalKeys = this._externalKeys;
    }
    if (this._hwaddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwaddr = this._hwaddr;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._names?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names?.internalValue;
    }
    if (this._nextAvailableId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextAvailableId = this._nextAvailableId;
    }
    if (this._space !== undefined) {
      hasAnyValues = true;
      internalValueResult.space = this._space;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressesResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._comment = undefined;
      this._externalKeys = undefined;
      this._hwaddr = undefined;
      this._interface = undefined;
      this._names.internalValue = undefined;
      this._nextAvailableId = undefined;
      this._space = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._comment = value.comment;
      this._externalKeys = value.externalKeys;
      this._hwaddr = value.hwaddr;
      this._interface = value.interface;
      this._names.internalValue = value.names;
      this._nextAvailableId = value.nextAvailableId;
      this._space = value.space;
      this._tags = value.tags;
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

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // dhcp_info - computed: true, optional: false, required: false
  private _dhcpInfo = new DataBloxoneIpamAddressesResultsDhcpInfoOutputReference(this, "dhcp_info");
  public get dhcpInfo() {
    return this._dhcpInfo;
  }

  // disable_dhcp - computed: true, optional: false, required: false
  public get disableDhcp() {
    return this.getBooleanAttribute('disable_dhcp');
  }

  // discovery_attrs - computed: true, optional: false, required: false
  private _discoveryAttrs = new cdktf.StringMap(this, "discovery_attrs");
  public get discoveryAttrs() {
    return this._discoveryAttrs;
  }

  // discovery_metadata - computed: true, optional: false, required: false
  private _discoveryMetadata = new cdktf.StringMap(this, "discovery_metadata");
  public get discoveryMetadata() {
    return this._discoveryMetadata;
  }

  // external_keys - computed: true, optional: true, required: false
  private _externalKeys?: { [key: string]: string }; 
  public get externalKeys() {
    return this.getStringMapAttribute('external_keys');
  }
  public set externalKeys(value: { [key: string]: string }) {
    this._externalKeys = value;
  }
  public resetExternalKeys() {
    this._externalKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalKeysInput() {
    return this._externalKeys;
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // hwaddr - computed: true, optional: true, required: false
  private _hwaddr?: string; 
  public get hwaddr() {
    return this.getStringAttribute('hwaddr');
  }
  public set hwaddr(value: string) {
    this._hwaddr = value;
  }
  public resetHwaddr() {
    this._hwaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwaddrInput() {
    return this._hwaddr;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface - computed: true, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // names - computed: true, optional: true, required: false
  private _names = new DataBloxoneIpamAddressesResultsNamesList(this, "names", false);
  public get names() {
    return this._names;
  }
  public putNames(value: DataBloxoneIpamAddressesResultsNames[] | cdktf.IResolvable) {
    this._names.internalValue = value;
  }
  public resetNames() {
    this._names.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names.internalValue;
  }

  // next_available_id - computed: true, optional: true, required: false
  private _nextAvailableId?: string; 
  public get nextAvailableId() {
    return this.getStringAttribute('next_available_id');
  }
  public set nextAvailableId(value: string) {
    this._nextAvailableId = value;
  }
  public resetNextAvailableId() {
    this._nextAvailableId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextAvailableIdInput() {
    return this._nextAvailableId;
  }

  // parent - computed: true, optional: false, required: false
  public get parent() {
    return this.getStringAttribute('parent');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // range - computed: true, optional: false, required: false
  public get range() {
    return this.getStringAttribute('range');
  }

  // space - computed: true, optional: false, required: true
  private _space?: string; 
  public get space() {
    return this.getStringAttribute('space');
  }
  public set space(value: string) {
    this._space = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceInput() {
    return this._space;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // usage - computed: true, optional: false, required: false
  public get usage() {
    return this.getListAttribute('usage');
  }
}

export class DataBloxoneIpamAddressesResultsList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneIpamAddressesResults[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneIpamAddressesResultsOutputReference {
    return new DataBloxoneIpamAddressesResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_addresses bloxone_ipam_addresses}
*/
export class DataBloxoneIpamAddresses extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bloxone_ipam_addresses";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBloxoneIpamAddresses resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBloxoneIpamAddresses to import
  * @param importFromId The id of the existing DataBloxoneIpamAddresses that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_addresses#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBloxoneIpamAddresses to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bloxone_ipam_addresses", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_addresses bloxone_ipam_addresses} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBloxoneIpamAddressesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataBloxoneIpamAddressesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'bloxone_ipam_addresses',
      terraformGeneratorMetadata: {
        providerName: 'bloxone',
        providerVersion: '1.5.4',
        providerVersionConstraint: '1.5.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filters = config.filters;
    this._tagFilters = config.tagFilters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filters - computed: false, optional: true, required: false
  private _filters?: { [key: string]: string }; 
  public get filters() {
    return this.getStringMapAttribute('filters');
  }
  public set filters(value: { [key: string]: string }) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }

  // results - computed: true, optional: false, required: false
  private _results = new DataBloxoneIpamAddressesResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // tag_filters - computed: false, optional: true, required: false
  private _tagFilters?: { [key: string]: string }; 
  public get tagFilters() {
    return this.getStringMapAttribute('tag_filters');
  }
  public set tagFilters(value: { [key: string]: string }) {
    this._tagFilters = value;
  }
  public resetTagFilters() {
    this._tagFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagFiltersInput() {
    return this._tagFilters;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._filters),
      tag_filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagFilters),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._filters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tag_filters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagFilters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
