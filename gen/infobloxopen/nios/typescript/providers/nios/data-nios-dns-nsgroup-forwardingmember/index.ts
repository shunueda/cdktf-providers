// https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_nsgroup_forwardingmember
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNiosDnsNsgroupForwardingmemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * External Attribute Filters are used to return a more specific list of results by filtering on external attributes. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_nsgroup_forwardingmember#extattrfilters DataNiosDnsNsgroupForwardingmember#extattrfilters}
  */
  readonly extattrfilters?: { [key: string]: string };
  /**
  * Filter are used to return a more specific list of results. Filters can be used to match resources by specific attributes, e.g. name. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_nsgroup_forwardingmember#filters DataNiosDnsNsgroupForwardingmember#filters}
  */
  readonly filters?: { [key: string]: string };
  /**
  * Maximum number of objects to be returned. Defaults to 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_nsgroup_forwardingmember#max_results DataNiosDnsNsgroupForwardingmember#max_results}
  */
  readonly maxResults?: number;
  /**
  * Enable (1) or disable (0) paging for the data source query. When enabled, the system retrieves results in pages, allowing efficient handling of large result sets. Paging is enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_nsgroup_forwardingmember#paging DataNiosDnsNsgroupForwardingmember#paging}
  */
  readonly paging?: number;
}
export interface DataNiosDnsNsgroupForwardingmemberResultForwardingServersForwardTo {
  /**
  * The IPv4 Address or IPv6 Address of the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_nsgroup_forwardingmember#address DataNiosDnsNsgroupForwardingmember#address}
  */
  readonly address: string;
  /**
  * A resolvable domain name for the external DNS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_nsgroup_forwardingmember#name DataNiosDnsNsgroupForwardingmember#name}
  */
  readonly name: string;
}

export function dataNiosDnsNsgroupForwardingmemberResultForwardingServersForwardToToTerraform(struct?: DataNiosDnsNsgroupForwardingmemberResultForwardingServersForwardTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataNiosDnsNsgroupForwardingmemberResultForwardingServersForwardToToHclTerraform(struct?: DataNiosDnsNsgroupForwardingmemberResultForwardingServersForwardTo | cdktf.IResolvable): any {
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

export class DataNiosDnsNsgroupForwardingmemberResultForwardingServersForwardToOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsNsgroupForwardingmemberResultForwardingServersForwardTo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsNsgroupForwardingmemberResultForwardingServersForwardTo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
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
      this._name = value.name;
    }
  }

  // address - computed: true, optional: false, required: true
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

  // shared_with_ms_parent_delegation - computed: true, optional: false, required: false
  public get sharedWithMsParentDelegation() {
    return this.getBooleanAttribute('shared_with_ms_parent_delegation');
  }

  // stealth - computed: true, optional: false, required: false
  public get stealth() {
    return this.getBooleanAttribute('stealth');
  }

  // tsig_key - computed: true, optional: false, required: false
  public get tsigKey() {
    return this.getStringAttribute('tsig_key');
  }

  // tsig_key_alg - computed: true, optional: false, required: false
  public get tsigKeyAlg() {
    return this.getStringAttribute('tsig_key_alg');
  }

  // tsig_key_name - computed: true, optional: false, required: false
  public get tsigKeyName() {
    return this.getStringAttribute('tsig_key_name');
  }

  // use_tsig_key_name - computed: true, optional: false, required: false
  public get useTsigKeyName() {
    return this.getBooleanAttribute('use_tsig_key_name');
  }
}

export class DataNiosDnsNsgroupForwardingmemberResultForwardingServersForwardToList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsNsgroupForwardingmemberResultForwardingServersForwardTo[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsNsgroupForwardingmemberResultForwardingServersForwardToOutputReference {
    return new DataNiosDnsNsgroupForwardingmemberResultForwardingServersForwardToOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDnsNsgroupForwardingmemberResultForwardingServers {
  /**
  * The information for the remote name server to which you want the Infoblox appliance to forward queries for a specified domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_nsgroup_forwardingmember#forward_to DataNiosDnsNsgroupForwardingmember#forward_to}
  */
  readonly forwardTo?: DataNiosDnsNsgroupForwardingmemberResultForwardingServersForwardTo[] | cdktf.IResolvable;
  /**
  * Determines if the appliance sends queries to forwarders only, and not to other internal or Internet root servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_nsgroup_forwardingmember#forwarders_only DataNiosDnsNsgroupForwardingmember#forwarders_only}
  */
  readonly forwardersOnly?: boolean | cdktf.IResolvable;
  /**
  * The name of this Grid member in FQDN format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_nsgroup_forwardingmember#name DataNiosDnsNsgroupForwardingmember#name}
  */
  readonly name: string;
  /**
  * Use flag for: forward_to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_nsgroup_forwardingmember#use_override_forwarders DataNiosDnsNsgroupForwardingmember#use_override_forwarders}
  */
  readonly useOverrideForwarders?: boolean | cdktf.IResolvable;
}

export function dataNiosDnsNsgroupForwardingmemberResultForwardingServersToTerraform(struct?: DataNiosDnsNsgroupForwardingmemberResultForwardingServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forward_to: cdktf.listMapper(dataNiosDnsNsgroupForwardingmemberResultForwardingServersForwardToToTerraform, false)(struct!.forwardTo),
    forwarders_only: cdktf.booleanToTerraform(struct!.forwardersOnly),
    name: cdktf.stringToTerraform(struct!.name),
    use_override_forwarders: cdktf.booleanToTerraform(struct!.useOverrideForwarders),
  }
}


export function dataNiosDnsNsgroupForwardingmemberResultForwardingServersToHclTerraform(struct?: DataNiosDnsNsgroupForwardingmemberResultForwardingServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forward_to: {
      value: cdktf.listMapperHcl(dataNiosDnsNsgroupForwardingmemberResultForwardingServersForwardToToHclTerraform, false)(struct!.forwardTo),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDnsNsgroupForwardingmemberResultForwardingServersForwardToList",
    },
    forwarders_only: {
      value: cdktf.booleanToHclTerraform(struct!.forwardersOnly),
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
    use_override_forwarders: {
      value: cdktf.booleanToHclTerraform(struct!.useOverrideForwarders),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDnsNsgroupForwardingmemberResultForwardingServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsNsgroupForwardingmemberResultForwardingServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forwardTo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardTo = this._forwardTo?.internalValue;
    }
    if (this._forwardersOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardersOnly = this._forwardersOnly;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._useOverrideForwarders !== undefined) {
      hasAnyValues = true;
      internalValueResult.useOverrideForwarders = this._useOverrideForwarders;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsNsgroupForwardingmemberResultForwardingServers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forwardTo.internalValue = undefined;
      this._forwardersOnly = undefined;
      this._name = undefined;
      this._useOverrideForwarders = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forwardTo.internalValue = value.forwardTo;
      this._forwardersOnly = value.forwardersOnly;
      this._name = value.name;
      this._useOverrideForwarders = value.useOverrideForwarders;
    }
  }

  // forward_to - computed: true, optional: true, required: false
  private _forwardTo = new DataNiosDnsNsgroupForwardingmemberResultForwardingServersForwardToList(this, "forward_to", false);
  public get forwardTo() {
    return this._forwardTo;
  }
  public putForwardTo(value: DataNiosDnsNsgroupForwardingmemberResultForwardingServersForwardTo[] | cdktf.IResolvable) {
    this._forwardTo.internalValue = value;
  }
  public resetForwardTo() {
    this._forwardTo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardToInput() {
    return this._forwardTo.internalValue;
  }

  // forwarders_only - computed: true, optional: true, required: false
  private _forwardersOnly?: boolean | cdktf.IResolvable; 
  public get forwardersOnly() {
    return this.getBooleanAttribute('forwarders_only');
  }
  public set forwardersOnly(value: boolean | cdktf.IResolvable) {
    this._forwardersOnly = value;
  }
  public resetForwardersOnly() {
    this._forwardersOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardersOnlyInput() {
    return this._forwardersOnly;
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

  // use_override_forwarders - computed: true, optional: true, required: false
  private _useOverrideForwarders?: boolean | cdktf.IResolvable; 
  public get useOverrideForwarders() {
    return this.getBooleanAttribute('use_override_forwarders');
  }
  public set useOverrideForwarders(value: boolean | cdktf.IResolvable) {
    this._useOverrideForwarders = value;
  }
  public resetUseOverrideForwarders() {
    this._useOverrideForwarders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOverrideForwardersInput() {
    return this._useOverrideForwarders;
  }
}

export class DataNiosDnsNsgroupForwardingmemberResultForwardingServersList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsNsgroupForwardingmemberResultForwardingServers[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsNsgroupForwardingmemberResultForwardingServersOutputReference {
    return new DataNiosDnsNsgroupForwardingmemberResultForwardingServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDnsNsgroupForwardingmemberResult {
  /**
  * Comment for the Forwarding Member Name Server Group; maximum 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_nsgroup_forwardingmember#comment DataNiosDnsNsgroupForwardingmember#comment}
  */
  readonly comment?: string;
  /**
  * Extensible attributes associated with the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_nsgroup_forwardingmember#extattrs DataNiosDnsNsgroupForwardingmember#extattrs}
  */
  readonly extattrs?: { [key: string]: string };
  /**
  * The list of forwarding member servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_nsgroup_forwardingmember#forwarding_servers DataNiosDnsNsgroupForwardingmember#forwarding_servers}
  */
  readonly forwardingServers: DataNiosDnsNsgroupForwardingmemberResultForwardingServers[] | cdktf.IResolvable;
  /**
  * The name of the Forwarding Member Name Server Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_nsgroup_forwardingmember#name DataNiosDnsNsgroupForwardingmember#name}
  */
  readonly name: string;
}

export function dataNiosDnsNsgroupForwardingmemberResultToTerraform(struct?: DataNiosDnsNsgroupForwardingmemberResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    extattrs: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extattrs),
    forwarding_servers: cdktf.listMapper(dataNiosDnsNsgroupForwardingmemberResultForwardingServersToTerraform, false)(struct!.forwardingServers),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataNiosDnsNsgroupForwardingmemberResultToHclTerraform(struct?: DataNiosDnsNsgroupForwardingmemberResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extattrs: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extattrs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    forwarding_servers: {
      value: cdktf.listMapperHcl(dataNiosDnsNsgroupForwardingmemberResultForwardingServersToHclTerraform, false)(struct!.forwardingServers),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDnsNsgroupForwardingmemberResultForwardingServersList",
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

export class DataNiosDnsNsgroupForwardingmemberResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsNsgroupForwardingmemberResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._extattrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extattrs = this._extattrs;
    }
    if (this._forwardingServers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardingServers = this._forwardingServers?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsNsgroupForwardingmemberResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comment = undefined;
      this._extattrs = undefined;
      this._forwardingServers.internalValue = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comment = value.comment;
      this._extattrs = value.extattrs;
      this._forwardingServers.internalValue = value.forwardingServers;
      this._name = value.name;
    }
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

  // extattrs - computed: true, optional: true, required: false
  private _extattrs?: { [key: string]: string }; 
  public get extattrs() {
    return this.getStringMapAttribute('extattrs');
  }
  public set extattrs(value: { [key: string]: string }) {
    this._extattrs = value;
  }
  public resetExtattrs() {
    this._extattrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extattrsInput() {
    return this._extattrs;
  }

  // extattrs_all - computed: true, optional: false, required: false
  private _extattrsAll = new cdktf.StringMap(this, "extattrs_all");
  public get extattrsAll() {
    return this._extattrsAll;
  }

  // forwarding_servers - computed: true, optional: false, required: true
  private _forwardingServers = new DataNiosDnsNsgroupForwardingmemberResultForwardingServersList(this, "forwarding_servers", false);
  public get forwardingServers() {
    return this._forwardingServers;
  }
  public putForwardingServers(value: DataNiosDnsNsgroupForwardingmemberResultForwardingServers[] | cdktf.IResolvable) {
    this._forwardingServers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingServersInput() {
    return this._forwardingServers.internalValue;
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

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }
}

export class DataNiosDnsNsgroupForwardingmemberResultList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsNsgroupForwardingmemberResult[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsNsgroupForwardingmemberResultOutputReference {
    return new DataNiosDnsNsgroupForwardingmemberResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_nsgroup_forwardingmember nios_dns_nsgroup_forwardingmember}
*/
export class DataNiosDnsNsgroupForwardingmember extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_dns_nsgroup_forwardingmember";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNiosDnsNsgroupForwardingmember resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNiosDnsNsgroupForwardingmember to import
  * @param importFromId The id of the existing DataNiosDnsNsgroupForwardingmember that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_nsgroup_forwardingmember#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNiosDnsNsgroupForwardingmember to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_dns_nsgroup_forwardingmember", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_nsgroup_forwardingmember nios_dns_nsgroup_forwardingmember} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNiosDnsNsgroupForwardingmemberConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNiosDnsNsgroupForwardingmemberConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nios_dns_nsgroup_forwardingmember',
      terraformGeneratorMetadata: {
        providerName: 'nios',
        providerVersion: '1.1.0',
        providerVersionConstraint: '1.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._extattrfilters = config.extattrfilters;
    this._filters = config.filters;
    this._maxResults = config.maxResults;
    this._paging = config.paging;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // extattrfilters - computed: false, optional: true, required: false
  private _extattrfilters?: { [key: string]: string }; 
  public get extattrfilters() {
    return this.getStringMapAttribute('extattrfilters');
  }
  public set extattrfilters(value: { [key: string]: string }) {
    this._extattrfilters = value;
  }
  public resetExtattrfilters() {
    this._extattrfilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extattrfiltersInput() {
    return this._extattrfilters;
  }

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

  // max_results - computed: false, optional: true, required: false
  private _maxResults?: number; 
  public get maxResults() {
    return this.getNumberAttribute('max_results');
  }
  public set maxResults(value: number) {
    this._maxResults = value;
  }
  public resetMaxResults() {
    this._maxResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResultsInput() {
    return this._maxResults;
  }

  // paging - computed: false, optional: true, required: false
  private _paging?: number; 
  public get paging() {
    return this.getNumberAttribute('paging');
  }
  public set paging(value: number) {
    this._paging = value;
  }
  public resetPaging() {
    this._paging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagingInput() {
    return this._paging;
  }

  // result - computed: true, optional: false, required: false
  private _result = new DataNiosDnsNsgroupForwardingmemberResultList(this, "result", false);
  public get result() {
    return this._result;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      extattrfilters: cdktf.hashMapper(cdktf.stringToTerraform)(this._extattrfilters),
      filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._filters),
      max_results: cdktf.numberToTerraform(this._maxResults),
      paging: cdktf.numberToTerraform(this._paging),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      extattrfilters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extattrfilters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      filters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._filters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      max_results: {
        value: cdktf.numberToHclTerraform(this._maxResults),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      paging: {
        value: cdktf.numberToHclTerraform(this._paging),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
