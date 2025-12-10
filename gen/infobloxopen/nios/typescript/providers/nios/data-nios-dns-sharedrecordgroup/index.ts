// https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_sharedrecordgroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNiosDnsSharedrecordgroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * External Attribute Filters are used to return a more specific list of results by filtering on external attributes. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_sharedrecordgroup#extattrfilters DataNiosDnsSharedrecordgroup#extattrfilters}
  */
  readonly extattrfilters?: { [key: string]: string };
  /**
  * Filter are used to return a more specific list of results. Filters can be used to match resources by specific attributes, e.g. name. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_sharedrecordgroup#filters DataNiosDnsSharedrecordgroup#filters}
  */
  readonly filters?: { [key: string]: string };
  /**
  * Maximum number of objects to be returned. Defaults to 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_sharedrecordgroup#max_results DataNiosDnsSharedrecordgroup#max_results}
  */
  readonly maxResults?: number;
  /**
  * Enable (1) or disable (0) paging for the data source query. When enabled, the system retrieves results in pages, allowing efficient handling of large result sets. Paging is enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_sharedrecordgroup#paging DataNiosDnsSharedrecordgroup#paging}
  */
  readonly paging?: number;
}
export interface DataNiosDnsSharedrecordgroupResultZoneAssociations {
  /**
  * The FQDN of the authoritative forward zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_sharedrecordgroup#fqdn DataNiosDnsSharedrecordgroup#fqdn}
  */
  readonly fqdn: string;
  /**
  * The view to which the zone belongs. If a view is not specified, the default view is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_sharedrecordgroup#view DataNiosDnsSharedrecordgroup#view}
  */
  readonly view?: string;
}

export function dataNiosDnsSharedrecordgroupResultZoneAssociationsToTerraform(struct?: DataNiosDnsSharedrecordgroupResultZoneAssociations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    view: cdktf.stringToTerraform(struct!.view),
  }
}


export function dataNiosDnsSharedrecordgroupResultZoneAssociationsToHclTerraform(struct?: DataNiosDnsSharedrecordgroupResultZoneAssociations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    view: {
      value: cdktf.stringToHclTerraform(struct!.view),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDnsSharedrecordgroupResultZoneAssociationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsSharedrecordgroupResultZoneAssociations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._view !== undefined) {
      hasAnyValues = true;
      internalValueResult.view = this._view;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsSharedrecordgroupResultZoneAssociations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdn = undefined;
      this._view = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqdn = value.fqdn;
      this._view = value.view;
    }
  }

  // fqdn - computed: true, optional: false, required: true
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

  // view - computed: true, optional: true, required: false
  private _view?: string; 
  public get view() {
    return this.getStringAttribute('view');
  }
  public set view(value: string) {
    this._view = value;
  }
  public resetView() {
    this._view = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewInput() {
    return this._view;
  }
}

export class DataNiosDnsSharedrecordgroupResultZoneAssociationsList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsSharedrecordgroupResultZoneAssociations[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsSharedrecordgroupResultZoneAssociationsOutputReference {
    return new DataNiosDnsSharedrecordgroupResultZoneAssociationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDnsSharedrecordgroupResult {
  /**
  * The descriptive comment of this shared record group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_sharedrecordgroup#comment DataNiosDnsSharedrecordgroup#comment}
  */
  readonly comment?: string;
  /**
  * Extensible attributes associated with the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_sharedrecordgroup#extattrs DataNiosDnsSharedrecordgroup#extattrs}
  */
  readonly extattrs?: { [key: string]: string };
  /**
  * The name of this shared record group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_sharedrecordgroup#name DataNiosDnsSharedrecordgroup#name}
  */
  readonly name: string;
  /**
  * The record name policy of this shared record group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_sharedrecordgroup#record_name_policy DataNiosDnsSharedrecordgroup#record_name_policy}
  */
  readonly recordNamePolicy?: string;
  /**
  * Use flag for: record_name_policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_sharedrecordgroup#use_record_name_policy DataNiosDnsSharedrecordgroup#use_record_name_policy}
  */
  readonly useRecordNamePolicy?: boolean | cdktf.IResolvable;
  /**
  * The list of zones associated with this shared record group. Starting from NIOS-9.0.6, this field has been updated to a structure that includes FQDN and DNS view details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_sharedrecordgroup#zone_associations DataNiosDnsSharedrecordgroup#zone_associations}
  */
  readonly zoneAssociations?: DataNiosDnsSharedrecordgroupResultZoneAssociations[] | cdktf.IResolvable;
}

export function dataNiosDnsSharedrecordgroupResultToTerraform(struct?: DataNiosDnsSharedrecordgroupResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    extattrs: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extattrs),
    name: cdktf.stringToTerraform(struct!.name),
    record_name_policy: cdktf.stringToTerraform(struct!.recordNamePolicy),
    use_record_name_policy: cdktf.booleanToTerraform(struct!.useRecordNamePolicy),
    zone_associations: cdktf.listMapper(dataNiosDnsSharedrecordgroupResultZoneAssociationsToTerraform, false)(struct!.zoneAssociations),
  }
}


export function dataNiosDnsSharedrecordgroupResultToHclTerraform(struct?: DataNiosDnsSharedrecordgroupResult): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_name_policy: {
      value: cdktf.stringToHclTerraform(struct!.recordNamePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_record_name_policy: {
      value: cdktf.booleanToHclTerraform(struct!.useRecordNamePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    zone_associations: {
      value: cdktf.listMapperHcl(dataNiosDnsSharedrecordgroupResultZoneAssociationsToHclTerraform, false)(struct!.zoneAssociations),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDnsSharedrecordgroupResultZoneAssociationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDnsSharedrecordgroupResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsSharedrecordgroupResult | undefined {
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
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._recordNamePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordNamePolicy = this._recordNamePolicy;
    }
    if (this._useRecordNamePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.useRecordNamePolicy = this._useRecordNamePolicy;
    }
    if (this._zoneAssociations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneAssociations = this._zoneAssociations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsSharedrecordgroupResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comment = undefined;
      this._extattrs = undefined;
      this._name = undefined;
      this._recordNamePolicy = undefined;
      this._useRecordNamePolicy = undefined;
      this._zoneAssociations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comment = value.comment;
      this._extattrs = value.extattrs;
      this._name = value.name;
      this._recordNamePolicy = value.recordNamePolicy;
      this._useRecordNamePolicy = value.useRecordNamePolicy;
      this._zoneAssociations.internalValue = value.zoneAssociations;
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

  // record_name_policy - computed: true, optional: true, required: false
  private _recordNamePolicy?: string; 
  public get recordNamePolicy() {
    return this.getStringAttribute('record_name_policy');
  }
  public set recordNamePolicy(value: string) {
    this._recordNamePolicy = value;
  }
  public resetRecordNamePolicy() {
    this._recordNamePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordNamePolicyInput() {
    return this._recordNamePolicy;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // use_record_name_policy - computed: true, optional: true, required: false
  private _useRecordNamePolicy?: boolean | cdktf.IResolvable; 
  public get useRecordNamePolicy() {
    return this.getBooleanAttribute('use_record_name_policy');
  }
  public set useRecordNamePolicy(value: boolean | cdktf.IResolvable) {
    this._useRecordNamePolicy = value;
  }
  public resetUseRecordNamePolicy() {
    this._useRecordNamePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRecordNamePolicyInput() {
    return this._useRecordNamePolicy;
  }

  // zone_associations - computed: true, optional: true, required: false
  private _zoneAssociations = new DataNiosDnsSharedrecordgroupResultZoneAssociationsList(this, "zone_associations", false);
  public get zoneAssociations() {
    return this._zoneAssociations;
  }
  public putZoneAssociations(value: DataNiosDnsSharedrecordgroupResultZoneAssociations[] | cdktf.IResolvable) {
    this._zoneAssociations.internalValue = value;
  }
  public resetZoneAssociations() {
    this._zoneAssociations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneAssociationsInput() {
    return this._zoneAssociations.internalValue;
  }
}

export class DataNiosDnsSharedrecordgroupResultList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsSharedrecordgroupResult[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsSharedrecordgroupResultOutputReference {
    return new DataNiosDnsSharedrecordgroupResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_sharedrecordgroup nios_dns_sharedrecordgroup}
*/
export class DataNiosDnsSharedrecordgroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_dns_sharedrecordgroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNiosDnsSharedrecordgroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNiosDnsSharedrecordgroup to import
  * @param importFromId The id of the existing DataNiosDnsSharedrecordgroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_sharedrecordgroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNiosDnsSharedrecordgroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_dns_sharedrecordgroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_sharedrecordgroup nios_dns_sharedrecordgroup} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNiosDnsSharedrecordgroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNiosDnsSharedrecordgroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nios_dns_sharedrecordgroup',
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
  private _result = new DataNiosDnsSharedrecordgroupResultList(this, "result", false);
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
