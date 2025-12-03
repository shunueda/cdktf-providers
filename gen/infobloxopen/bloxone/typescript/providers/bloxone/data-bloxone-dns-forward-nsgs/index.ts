// https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_forward_nsgs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBloxoneDnsForwardNsgsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter are used to return a more specific list of results. Filters can be used to match resources by specific attributes, e.g. name. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_forward_nsgs#filters DataBloxoneDnsForwardNsgs#filters}
  */
  readonly filters?: { [key: string]: string };
  /**
  * Tag Filters are used to return a more specific list of results filtered by tags. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_forward_nsgs#tag_filters DataBloxoneDnsForwardNsgs#tag_filters}
  */
  readonly tagFilters?: { [key: string]: string };
}
export interface DataBloxoneDnsForwardNsgsResultsExternalForwarders {
  /**
  * Server IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_forward_nsgs#address DataBloxoneDnsForwardNsgs#address}
  */
  readonly address: string;
  /**
  * Server FQDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_forward_nsgs#fqdn DataBloxoneDnsForwardNsgs#fqdn}
  */
  readonly fqdn?: string;
}

export function dataBloxoneDnsForwardNsgsResultsExternalForwardersToTerraform(struct?: DataBloxoneDnsForwardNsgsResultsExternalForwarders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
  }
}


export function dataBloxoneDnsForwardNsgsResultsExternalForwardersToHclTerraform(struct?: DataBloxoneDnsForwardNsgsResultsExternalForwarders | cdktf.IResolvable): any {
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
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsForwardNsgsResultsExternalForwardersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsForwardNsgsResultsExternalForwarders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsForwardNsgsResultsExternalForwarders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._fqdn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._fqdn = value.fqdn;
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

  // fqdn - computed: true, optional: true, required: false
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  public resetFqdn() {
    this._fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // protocol_fqdn - computed: true, optional: false, required: false
  public get protocolFqdn() {
    return this.getStringAttribute('protocol_fqdn');
  }
}

export class DataBloxoneDnsForwardNsgsResultsExternalForwardersList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDnsForwardNsgsResultsExternalForwarders[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDnsForwardNsgsResultsExternalForwardersOutputReference {
    return new DataBloxoneDnsForwardNsgsResultsExternalForwardersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsForwardNsgsResults {
  /**
  * Optional. Comment for the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_forward_nsgs#comment DataBloxoneDnsForwardNsgs#comment}
  */
  readonly comment?: string;
  /**
  * Optional. External DNS servers to forward to. Order is not significant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_forward_nsgs#external_forwarders DataBloxoneDnsForwardNsgs#external_forwarders}
  */
  readonly externalForwarders?: DataBloxoneDnsForwardNsgsResultsExternalForwarders[] | cdktf.IResolvable;
  /**
  * Optional. _true_ to only forward.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_forward_nsgs#forwarders_only DataBloxoneDnsForwardNsgs#forwarders_only}
  */
  readonly forwardersOnly?: boolean | cdktf.IResolvable;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_forward_nsgs#hosts DataBloxoneDnsForwardNsgs#hosts}
  */
  readonly hosts?: string[];
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_forward_nsgs#internal_forwarders DataBloxoneDnsForwardNsgs#internal_forwarders}
  */
  readonly internalForwarders?: string[];
  /**
  * Name of the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_forward_nsgs#name DataBloxoneDnsForwardNsgs#name}
  */
  readonly name: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_forward_nsgs#nsgs DataBloxoneDnsForwardNsgs#nsgs}
  */
  readonly nsgs?: string[];
  /**
  * Tagging specifics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_forward_nsgs#tags DataBloxoneDnsForwardNsgs#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function dataBloxoneDnsForwardNsgsResultsToTerraform(struct?: DataBloxoneDnsForwardNsgsResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    external_forwarders: cdktf.listMapper(dataBloxoneDnsForwardNsgsResultsExternalForwardersToTerraform, false)(struct!.externalForwarders),
    forwarders_only: cdktf.booleanToTerraform(struct!.forwardersOnly),
    hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hosts),
    internal_forwarders: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.internalForwarders),
    name: cdktf.stringToTerraform(struct!.name),
    nsgs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nsgs),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function dataBloxoneDnsForwardNsgsResultsToHclTerraform(struct?: DataBloxoneDnsForwardNsgsResults): any {
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
    external_forwarders: {
      value: cdktf.listMapperHcl(dataBloxoneDnsForwardNsgsResultsExternalForwardersToHclTerraform, false)(struct!.externalForwarders),
      isBlock: true,
      type: "list",
      storageClassType: "DataBloxoneDnsForwardNsgsResultsExternalForwardersList",
    },
    forwarders_only: {
      value: cdktf.booleanToHclTerraform(struct!.forwardersOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    internal_forwarders: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.internalForwarders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nsgs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nsgs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class DataBloxoneDnsForwardNsgsResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsForwardNsgsResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._externalForwarders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalForwarders = this._externalForwarders?.internalValue;
    }
    if (this._forwardersOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardersOnly = this._forwardersOnly;
    }
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._internalForwarders !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalForwarders = this._internalForwarders;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nsgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsgs = this._nsgs;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsForwardNsgsResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comment = undefined;
      this._externalForwarders.internalValue = undefined;
      this._forwardersOnly = undefined;
      this._hosts = undefined;
      this._internalForwarders = undefined;
      this._name = undefined;
      this._nsgs = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comment = value.comment;
      this._externalForwarders.internalValue = value.externalForwarders;
      this._forwardersOnly = value.forwardersOnly;
      this._hosts = value.hosts;
      this._internalForwarders = value.internalForwarders;
      this._name = value.name;
      this._nsgs = value.nsgs;
      this._tags = value.tags;
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

  // external_forwarders - computed: true, optional: true, required: false
  private _externalForwarders = new DataBloxoneDnsForwardNsgsResultsExternalForwardersList(this, "external_forwarders", false);
  public get externalForwarders() {
    return this._externalForwarders;
  }
  public putExternalForwarders(value: DataBloxoneDnsForwardNsgsResultsExternalForwarders[] | cdktf.IResolvable) {
    this._externalForwarders.internalValue = value;
  }
  public resetExternalForwarders() {
    this._externalForwarders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalForwardersInput() {
    return this._externalForwarders.internalValue;
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

  // hosts - computed: true, optional: true, required: false
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // internal_forwarders - computed: true, optional: true, required: false
  private _internalForwarders?: string[]; 
  public get internalForwarders() {
    return this.getListAttribute('internal_forwarders');
  }
  public set internalForwarders(value: string[]) {
    this._internalForwarders = value;
  }
  public resetInternalForwarders() {
    this._internalForwarders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalForwardersInput() {
    return this._internalForwarders;
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

  // nsgs - computed: true, optional: true, required: false
  private _nsgs?: string[]; 
  public get nsgs() {
    return this.getListAttribute('nsgs');
  }
  public set nsgs(value: string[]) {
    this._nsgs = value;
  }
  public resetNsgs() {
    this._nsgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsgsInput() {
    return this._nsgs;
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
}

export class DataBloxoneDnsForwardNsgsResultsList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDnsForwardNsgsResults[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDnsForwardNsgsResultsOutputReference {
    return new DataBloxoneDnsForwardNsgsResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_forward_nsgs bloxone_dns_forward_nsgs}
*/
export class DataBloxoneDnsForwardNsgs extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bloxone_dns_forward_nsgs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBloxoneDnsForwardNsgs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBloxoneDnsForwardNsgs to import
  * @param importFromId The id of the existing DataBloxoneDnsForwardNsgs that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_forward_nsgs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBloxoneDnsForwardNsgs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bloxone_dns_forward_nsgs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_forward_nsgs bloxone_dns_forward_nsgs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBloxoneDnsForwardNsgsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataBloxoneDnsForwardNsgsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'bloxone_dns_forward_nsgs',
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
  private _results = new DataBloxoneDnsForwardNsgsResultsList(this, "results", false);
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
