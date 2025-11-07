// https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/data-sources/dns_records
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataB1DdiDnsRecordsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure a map of filters to be applied on the search result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/data-sources/dns_records#filters DataB1DdiDnsRecords#filters}
  */
  readonly filters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/data-sources/dns_records#id DataB1DdiDnsRecords#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Configure a map of tag filters to be applied on the search result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/data-sources/dns_records#tfilters DataB1DdiDnsRecords#tfilters}
  */
  readonly tfilters?: { [key: string]: string };
}
export interface DataB1DdiDnsRecordsResultsInheritanceSourcesTtl {
}

export function dataB1DdiDnsRecordsResultsInheritanceSourcesTtlToTerraform(struct?: DataB1DdiDnsRecordsResultsInheritanceSourcesTtl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiDnsRecordsResultsInheritanceSourcesTtlToHclTerraform(struct?: DataB1DdiDnsRecordsResultsInheritanceSourcesTtl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiDnsRecordsResultsInheritanceSourcesTtlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataB1DdiDnsRecordsResultsInheritanceSourcesTtl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiDnsRecordsResultsInheritanceSourcesTtl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataB1DdiDnsRecordsResultsInheritanceSourcesTtlList extends cdktf.ComplexList {

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
  public get(index: number): DataB1DdiDnsRecordsResultsInheritanceSourcesTtlOutputReference {
    return new DataB1DdiDnsRecordsResultsInheritanceSourcesTtlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiDnsRecordsResultsInheritanceSources {
}

export function dataB1DdiDnsRecordsResultsInheritanceSourcesToTerraform(struct?: DataB1DdiDnsRecordsResultsInheritanceSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiDnsRecordsResultsInheritanceSourcesToHclTerraform(struct?: DataB1DdiDnsRecordsResultsInheritanceSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiDnsRecordsResultsInheritanceSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataB1DdiDnsRecordsResultsInheritanceSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiDnsRecordsResultsInheritanceSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ttl - computed: true, optional: false, required: false
  private _ttl = new DataB1DdiDnsRecordsResultsInheritanceSourcesTtlList(this, "ttl", false);
  public get ttl() {
    return this._ttl;
  }
}

export class DataB1DdiDnsRecordsResultsInheritanceSourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataB1DdiDnsRecordsResultsInheritanceSourcesOutputReference {
    return new DataB1DdiDnsRecordsResultsInheritanceSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiDnsRecordsResults {
}

export function dataB1DdiDnsRecordsResultsToTerraform(struct?: DataB1DdiDnsRecordsResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiDnsRecordsResultsToHclTerraform(struct?: DataB1DdiDnsRecordsResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiDnsRecordsResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataB1DdiDnsRecordsResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiDnsRecordsResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // absolute_name_spec - computed: true, optional: false, required: false
  public get absoluteNameSpec() {
    return this.getStringAttribute('absolute_name_spec');
  }

  // absolute_zone_name - computed: true, optional: false, required: false
  public get absoluteZoneName() {
    return this.getStringAttribute('absolute_zone_name');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // delegation - computed: true, optional: false, required: false
  public get delegation() {
    return this.getStringAttribute('delegation');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // dns_absolute_name_spec - computed: true, optional: false, required: false
  public get dnsAbsoluteNameSpec() {
    return this.getStringAttribute('dns_absolute_name_spec');
  }

  // dns_absolute_zone_name - computed: true, optional: false, required: false
  public get dnsAbsoluteZoneName() {
    return this.getStringAttribute('dns_absolute_zone_name');
  }

  // dns_name_in_zone - computed: true, optional: false, required: false
  public get dnsNameInZone() {
    return this.getStringAttribute('dns_name_in_zone');
  }

  // dns_rdata - computed: true, optional: false, required: false
  public get dnsRdata() {
    return this.getStringAttribute('dns_rdata');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inheritance_sources - computed: true, optional: false, required: false
  private _inheritanceSources = new DataB1DdiDnsRecordsResultsInheritanceSourcesList(this, "inheritance_sources", false);
  public get inheritanceSources() {
    return this._inheritanceSources;
  }

  // name_in_zone - computed: true, optional: false, required: false
  public get nameInZone() {
    return this.getStringAttribute('name_in_zone');
  }

  // options - computed: true, optional: false, required: false
  private _options = new cdktf.StringMap(this, "options");
  public get options() {
    return this._options;
  }

  // rdata - computed: true, optional: false, required: false
  private _rdata = new cdktf.StringMap(this, "rdata");
  public get rdata() {
    return this._rdata;
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getListAttribute('source');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // view - computed: true, optional: false, required: false
  public get view() {
    return this.getStringAttribute('view');
  }

  // view_name - computed: true, optional: false, required: false
  public get viewName() {
    return this.getStringAttribute('view_name');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class DataB1DdiDnsRecordsResultsList extends cdktf.ComplexList {

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
  public get(index: number): DataB1DdiDnsRecordsResultsOutputReference {
    return new DataB1DdiDnsRecordsResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/data-sources/dns_records b1ddi_dns_records}
*/
export class DataB1DdiDnsRecords extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "b1ddi_dns_records";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataB1DdiDnsRecords resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataB1DdiDnsRecords to import
  * @param importFromId The id of the existing DataB1DdiDnsRecords that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/data-sources/dns_records#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataB1DdiDnsRecords to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "b1ddi_dns_records", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/data-sources/dns_records b1ddi_dns_records} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataB1DdiDnsRecordsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataB1DdiDnsRecordsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'b1ddi_dns_records',
      terraformGeneratorMetadata: {
        providerName: 'b1ddi',
        providerVersion: '0.1.5'
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
    this._id = config.id;
    this._tfilters = config.tfilters;
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

  // results - computed: true, optional: false, required: false
  private _results = new DataB1DdiDnsRecordsResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // tfilters - computed: false, optional: true, required: false
  private _tfilters?: { [key: string]: string }; 
  public get tfilters() {
    return this.getStringMapAttribute('tfilters');
  }
  public set tfilters(value: { [key: string]: string }) {
    this._tfilters = value;
  }
  public resetTfilters() {
    this._tfilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tfiltersInput() {
    return this._tfilters;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._filters),
      id: cdktf.stringToTerraform(this._id),
      tfilters: cdktf.hashMapper(cdktf.stringToTerraform)(this._tfilters),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tfilters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tfilters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
