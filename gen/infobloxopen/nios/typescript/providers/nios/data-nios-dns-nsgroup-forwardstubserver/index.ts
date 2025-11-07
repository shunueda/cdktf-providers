// https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup_forwardstubserver
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNiosDnsNsgroupForwardstubserverConfig extends cdktf.TerraformMetaArguments {
  /**
  * External Attribute Filters are used to return a more specific list of results by filtering on external attributes. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup_forwardstubserver#extattrfilters DataNiosDnsNsgroupForwardstubserver#extattrfilters}
  */
  readonly extattrfilters?: { [key: string]: string };
  /**
  * Filter are used to return a more specific list of results. Filters can be used to match resources by specific attributes, e.g. name. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup_forwardstubserver#filters DataNiosDnsNsgroupForwardstubserver#filters}
  */
  readonly filters?: { [key: string]: string };
  /**
  * Maximum number of objects to be returned. Defaults to 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup_forwardstubserver#max_results DataNiosDnsNsgroupForwardstubserver#max_results}
  */
  readonly maxResults?: number;
  /**
  * Enable (1) or disable (0) paging for the data source query. When enabled, the system retrieves results in pages, allowing efficient handling of large result sets. Paging is enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup_forwardstubserver#paging DataNiosDnsNsgroupForwardstubserver#paging}
  */
  readonly paging?: number;
}
export interface DataNiosDnsNsgroupForwardstubserverResultExternalServers {
  /**
  * The IPv4 Address or IPv6 Address of the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup_forwardstubserver#address DataNiosDnsNsgroupForwardstubserver#address}
  */
  readonly address: string;
  /**
  * A resolvable domain name for the external DNS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup_forwardstubserver#name DataNiosDnsNsgroupForwardstubserver#name}
  */
  readonly name: string;
}

export function dataNiosDnsNsgroupForwardstubserverResultExternalServersToTerraform(struct?: DataNiosDnsNsgroupForwardstubserverResultExternalServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataNiosDnsNsgroupForwardstubserverResultExternalServersToHclTerraform(struct?: DataNiosDnsNsgroupForwardstubserverResultExternalServers): any {
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

export class DataNiosDnsNsgroupForwardstubserverResultExternalServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsNsgroupForwardstubserverResultExternalServers | undefined {
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

  public set internalValue(value: DataNiosDnsNsgroupForwardstubserverResultExternalServers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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

export class DataNiosDnsNsgroupForwardstubserverResultExternalServersList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsNsgroupForwardstubserverResultExternalServers[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsNsgroupForwardstubserverResultExternalServersOutputReference {
    return new DataNiosDnsNsgroupForwardstubserverResultExternalServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDnsNsgroupForwardstubserverResult {
  /**
  * Comment for the Forward Stub Server Name Server Group; maximum 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup_forwardstubserver#comment DataNiosDnsNsgroupForwardstubserver#comment}
  */
  readonly comment?: string;
  /**
  * Extensible attributes associated with the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup_forwardstubserver#extattrs DataNiosDnsNsgroupForwardstubserver#extattrs}
  */
  readonly extattrs?: { [key: string]: string };
  /**
  * The list of external servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup_forwardstubserver#external_servers DataNiosDnsNsgroupForwardstubserver#external_servers}
  */
  readonly externalServers: DataNiosDnsNsgroupForwardstubserverResultExternalServers[] | cdktf.IResolvable;
  /**
  * The name of this Forward Stub Server Name Server Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup_forwardstubserver#name DataNiosDnsNsgroupForwardstubserver#name}
  */
  readonly name: string;
}

export function dataNiosDnsNsgroupForwardstubserverResultToTerraform(struct?: DataNiosDnsNsgroupForwardstubserverResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    extattrs: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extattrs),
    external_servers: cdktf.listMapper(dataNiosDnsNsgroupForwardstubserverResultExternalServersToTerraform, false)(struct!.externalServers),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataNiosDnsNsgroupForwardstubserverResultToHclTerraform(struct?: DataNiosDnsNsgroupForwardstubserverResult): any {
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
    external_servers: {
      value: cdktf.listMapperHcl(dataNiosDnsNsgroupForwardstubserverResultExternalServersToHclTerraform, false)(struct!.externalServers),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDnsNsgroupForwardstubserverResultExternalServersList",
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

export class DataNiosDnsNsgroupForwardstubserverResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsNsgroupForwardstubserverResult | undefined {
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
    if (this._externalServers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalServers = this._externalServers?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsNsgroupForwardstubserverResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comment = undefined;
      this._extattrs = undefined;
      this._externalServers.internalValue = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comment = value.comment;
      this._extattrs = value.extattrs;
      this._externalServers.internalValue = value.externalServers;
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

  // external_servers - computed: true, optional: false, required: true
  private _externalServers = new DataNiosDnsNsgroupForwardstubserverResultExternalServersList(this, "external_servers", false);
  public get externalServers() {
    return this._externalServers;
  }
  public putExternalServers(value: DataNiosDnsNsgroupForwardstubserverResultExternalServers[] | cdktf.IResolvable) {
    this._externalServers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalServersInput() {
    return this._externalServers.internalValue;
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

export class DataNiosDnsNsgroupForwardstubserverResultList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsNsgroupForwardstubserverResult[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsNsgroupForwardstubserverResultOutputReference {
    return new DataNiosDnsNsgroupForwardstubserverResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup_forwardstubserver nios_dns_nsgroup_forwardstubserver}
*/
export class DataNiosDnsNsgroupForwardstubserver extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_dns_nsgroup_forwardstubserver";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNiosDnsNsgroupForwardstubserver resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNiosDnsNsgroupForwardstubserver to import
  * @param importFromId The id of the existing DataNiosDnsNsgroupForwardstubserver that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup_forwardstubserver#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNiosDnsNsgroupForwardstubserver to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_dns_nsgroup_forwardstubserver", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup_forwardstubserver nios_dns_nsgroup_forwardstubserver} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNiosDnsNsgroupForwardstubserverConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNiosDnsNsgroupForwardstubserverConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nios_dns_nsgroup_forwardstubserver',
      terraformGeneratorMetadata: {
        providerName: 'nios',
        providerVersion: '1.0.0'
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
  private _result = new DataNiosDnsNsgroupForwardstubserverResultList(this, "result", false);
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
