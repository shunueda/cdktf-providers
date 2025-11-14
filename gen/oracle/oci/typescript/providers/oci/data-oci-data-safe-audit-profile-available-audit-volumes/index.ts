// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_audit_profile_available_audit_volumes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeAuditProfileAvailableAuditVolumesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_audit_profile_available_audit_volumes#audit_profile_id DataOciDataSafeAuditProfileAvailableAuditVolumes#audit_profile_id}
  */
  readonly auditProfileId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_audit_profile_available_audit_volumes#id DataOciDataSafeAuditProfileAvailableAuditVolumes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_audit_profile_available_audit_volumes#month_in_consideration_greater_than DataOciDataSafeAuditProfileAvailableAuditVolumes#month_in_consideration_greater_than}
  */
  readonly monthInConsiderationGreaterThan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_audit_profile_available_audit_volumes#month_in_consideration_less_than DataOciDataSafeAuditProfileAvailableAuditVolumes#month_in_consideration_less_than}
  */
  readonly monthInConsiderationLessThan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_audit_profile_available_audit_volumes#trail_location DataOciDataSafeAuditProfileAvailableAuditVolumes#trail_location}
  */
  readonly trailLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_audit_profile_available_audit_volumes#work_request_id DataOciDataSafeAuditProfileAvailableAuditVolumes#work_request_id}
  */
  readonly workRequestId: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_audit_profile_available_audit_volumes#filter DataOciDataSafeAuditProfileAvailableAuditVolumes#filter}
  */
  readonly filter?: DataOciDataSafeAuditProfileAvailableAuditVolumesFilter[] | cdktf.IResolvable;
}
export interface DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItems {
}

export function dataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsToTerraform(struct?: DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsToHclTerraform(struct?: DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audit_profile_id - computed: true, optional: false, required: false
  public get auditProfileId() {
    return this.getStringAttribute('audit_profile_id');
  }

  // audit_trail_id - computed: true, optional: false, required: false
  public get auditTrailId() {
    return this.getStringAttribute('audit_trail_id');
  }

  // database_unique_name - computed: true, optional: false, required: false
  public get databaseUniqueName() {
    return this.getStringAttribute('database_unique_name');
  }

  // month_in_consideration - computed: true, optional: false, required: false
  public get monthInConsideration() {
    return this.getStringAttribute('month_in_consideration');
  }

  // trail_location - computed: true, optional: false, required: false
  public get trailLocation() {
    return this.getStringAttribute('trail_location');
  }

  // volume - computed: true, optional: false, required: false
  public get volume() {
    return this.getStringAttribute('volume');
  }
}

export class DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference {
    return new DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollection {
}

export function dataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionToTerraform(struct?: DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionToHclTerraform(struct?: DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference {
    return new DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeAuditProfileAvailableAuditVolumesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_audit_profile_available_audit_volumes#name DataOciDataSafeAuditProfileAvailableAuditVolumes#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_audit_profile_available_audit_volumes#regex DataOciDataSafeAuditProfileAvailableAuditVolumes#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_audit_profile_available_audit_volumes#values DataOciDataSafeAuditProfileAvailableAuditVolumes#values}
  */
  readonly values: string[];
}

export function dataOciDataSafeAuditProfileAvailableAuditVolumesFilterToTerraform(struct?: DataOciDataSafeAuditProfileAvailableAuditVolumesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciDataSafeAuditProfileAvailableAuditVolumesFilterToHclTerraform(struct?: DataOciDataSafeAuditProfileAvailableAuditVolumesFilter | cdktf.IResolvable): any {
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
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeAuditProfileAvailableAuditVolumesFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeAuditProfileAvailableAuditVolumesFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
    }
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDataSafeAuditProfileAvailableAuditVolumesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference {
    return new DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_audit_profile_available_audit_volumes oci_data_safe_audit_profile_available_audit_volumes}
*/
export class DataOciDataSafeAuditProfileAvailableAuditVolumes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_audit_profile_available_audit_volumes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataSafeAuditProfileAvailableAuditVolumes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataSafeAuditProfileAvailableAuditVolumes to import
  * @param importFromId The id of the existing DataOciDataSafeAuditProfileAvailableAuditVolumes that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_audit_profile_available_audit_volumes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataSafeAuditProfileAvailableAuditVolumes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_audit_profile_available_audit_volumes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_audit_profile_available_audit_volumes oci_data_safe_audit_profile_available_audit_volumes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeAuditProfileAvailableAuditVolumesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeAuditProfileAvailableAuditVolumesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_audit_profile_available_audit_volumes',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._auditProfileId = config.auditProfileId;
    this._id = config.id;
    this._monthInConsiderationGreaterThan = config.monthInConsiderationGreaterThan;
    this._monthInConsiderationLessThan = config.monthInConsiderationLessThan;
    this._trailLocation = config.trailLocation;
    this._workRequestId = config.workRequestId;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audit_profile_id - computed: false, optional: false, required: true
  private _auditProfileId?: string; 
  public get auditProfileId() {
    return this.getStringAttribute('audit_profile_id');
  }
  public set auditProfileId(value: string) {
    this._auditProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get auditProfileIdInput() {
    return this._auditProfileId;
  }

  // available_audit_volume_collection - computed: true, optional: false, required: false
  private _availableAuditVolumeCollection = new DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList(this, "available_audit_volume_collection", false);
  public get availableAuditVolumeCollection() {
    return this._availableAuditVolumeCollection;
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

  // month_in_consideration_greater_than - computed: false, optional: true, required: false
  private _monthInConsiderationGreaterThan?: string; 
  public get monthInConsiderationGreaterThan() {
    return this.getStringAttribute('month_in_consideration_greater_than');
  }
  public set monthInConsiderationGreaterThan(value: string) {
    this._monthInConsiderationGreaterThan = value;
  }
  public resetMonthInConsiderationGreaterThan() {
    this._monthInConsiderationGreaterThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInConsiderationGreaterThanInput() {
    return this._monthInConsiderationGreaterThan;
  }

  // month_in_consideration_less_than - computed: false, optional: true, required: false
  private _monthInConsiderationLessThan?: string; 
  public get monthInConsiderationLessThan() {
    return this.getStringAttribute('month_in_consideration_less_than');
  }
  public set monthInConsiderationLessThan(value: string) {
    this._monthInConsiderationLessThan = value;
  }
  public resetMonthInConsiderationLessThan() {
    this._monthInConsiderationLessThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInConsiderationLessThanInput() {
    return this._monthInConsiderationLessThan;
  }

  // trail_location - computed: false, optional: true, required: false
  private _trailLocation?: string; 
  public get trailLocation() {
    return this.getStringAttribute('trail_location');
  }
  public set trailLocation(value: string) {
    this._trailLocation = value;
  }
  public resetTrailLocation() {
    this._trailLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trailLocationInput() {
    return this._trailLocation;
  }

  // work_request_id - computed: false, optional: false, required: true
  private _workRequestId?: string; 
  public get workRequestId() {
    return this.getStringAttribute('work_request_id');
  }
  public set workRequestId(value: string) {
    this._workRequestId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workRequestIdInput() {
    return this._workRequestId;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDataSafeAuditProfileAvailableAuditVolumesFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      audit_profile_id: cdktf.stringToTerraform(this._auditProfileId),
      id: cdktf.stringToTerraform(this._id),
      month_in_consideration_greater_than: cdktf.stringToTerraform(this._monthInConsiderationGreaterThan),
      month_in_consideration_less_than: cdktf.stringToTerraform(this._monthInConsiderationLessThan),
      trail_location: cdktf.stringToTerraform(this._trailLocation),
      work_request_id: cdktf.stringToTerraform(this._workRequestId),
      filter: cdktf.listMapper(dataOciDataSafeAuditProfileAvailableAuditVolumesFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      audit_profile_id: {
        value: cdktf.stringToHclTerraform(this._auditProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      month_in_consideration_greater_than: {
        value: cdktf.stringToHclTerraform(this._monthInConsiderationGreaterThan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      month_in_consideration_less_than: {
        value: cdktf.stringToHclTerraform(this._monthInConsiderationLessThan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trail_location: {
        value: cdktf.stringToHclTerraform(this._trailLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      work_request_id: {
        value: cdktf.stringToHclTerraform(this._workRequestId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDataSafeAuditProfileAvailableAuditVolumesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
