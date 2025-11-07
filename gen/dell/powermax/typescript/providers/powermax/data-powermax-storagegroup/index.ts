// https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/storagegroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowermaxStoragegroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/storagegroup#timeouts DataPowermaxStoragegroup#timeouts}
  */
  readonly timeouts?: DataPowermaxStoragegroupTimeouts;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/storagegroup#filter DataPowermaxStoragegroup#filter}
  */
  readonly filter?: DataPowermaxStoragegroupFilter;
}
export interface DataPowermaxStoragegroupStorageGroupsHostIoLimit {
}

export function dataPowermaxStoragegroupStorageGroupsHostIoLimitToTerraform(struct?: DataPowermaxStoragegroupStorageGroupsHostIoLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowermaxStoragegroupStorageGroupsHostIoLimitToHclTerraform(struct?: DataPowermaxStoragegroupStorageGroupsHostIoLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowermaxStoragegroupStorageGroupsHostIoLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowermaxStoragegroupStorageGroupsHostIoLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowermaxStoragegroupStorageGroupsHostIoLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dynamic_distribution - computed: true, optional: false, required: false
  public get dynamicDistribution() {
    return this.getStringAttribute('dynamic_distribution');
  }

  // host_io_limit_io_sec - computed: true, optional: false, required: false
  public get hostIoLimitIoSec() {
    return this.getStringAttribute('host_io_limit_io_sec');
  }

  // host_io_limit_mb_sec - computed: true, optional: false, required: false
  public get hostIoLimitMbSec() {
    return this.getStringAttribute('host_io_limit_mb_sec');
  }
}
export interface DataPowermaxStoragegroupStorageGroups {
}

export function dataPowermaxStoragegroupStorageGroupsToTerraform(struct?: DataPowermaxStoragegroupStorageGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowermaxStoragegroupStorageGroupsToHclTerraform(struct?: DataPowermaxStoragegroupStorageGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowermaxStoragegroupStorageGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowermaxStoragegroupStorageGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowermaxStoragegroupStorageGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cap_gb - computed: true, optional: false, required: false
  public get capGb() {
    return this.getNumberAttribute('cap_gb');
  }

  // child_storage_group - computed: true, optional: false, required: false
  public get childStorageGroup() {
    return this.getListAttribute('child_storage_group');
  }

  // compression - computed: true, optional: false, required: false
  public get compression() {
    return this.getBooleanAttribute('compression');
  }

  // compression_ratio - computed: true, optional: false, required: false
  public get compressionRatio() {
    return this.getStringAttribute('compression_ratio');
  }

  // compression_ratio_to_one - computed: true, optional: false, required: false
  public get compressionRatioToOne() {
    return this.getNumberAttribute('compression_ratio_to_one');
  }

  // device_emulation - computed: true, optional: false, required: false
  public get deviceEmulation() {
    return this.getStringAttribute('device_emulation');
  }

  // host_io_limit - computed: true, optional: false, required: false
  private _hostIoLimit = new DataPowermaxStoragegroupStorageGroupsHostIoLimitOutputReference(this, "host_io_limit");
  public get hostIoLimit() {
    return this._hostIoLimit;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // maskingview - computed: true, optional: false, required: false
  public get maskingview() {
    return this.getListAttribute('maskingview');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // num_of_child_sgs - computed: true, optional: false, required: false
  public get numOfChildSgs() {
    return this.getNumberAttribute('num_of_child_sgs');
  }

  // num_of_masking_views - computed: true, optional: false, required: false
  public get numOfMaskingViews() {
    return this.getNumberAttribute('num_of_masking_views');
  }

  // num_of_parent_sgs - computed: true, optional: false, required: false
  public get numOfParentSgs() {
    return this.getNumberAttribute('num_of_parent_sgs');
  }

  // num_of_snapshot_policies - computed: true, optional: false, required: false
  public get numOfSnapshotPolicies() {
    return this.getNumberAttribute('num_of_snapshot_policies');
  }

  // num_of_snapshots - computed: true, optional: false, required: false
  public get numOfSnapshots() {
    return this.getNumberAttribute('num_of_snapshots');
  }

  // num_of_vols - computed: true, optional: false, required: false
  public get numOfVols() {
    return this.getNumberAttribute('num_of_vols');
  }

  // parent_storage_group - computed: true, optional: false, required: false
  public get parentStorageGroup() {
    return this.getListAttribute('parent_storage_group');
  }

  // service_level - computed: true, optional: false, required: false
  public get serviceLevel() {
    return this.getStringAttribute('service_level');
  }

  // slo - computed: true, optional: false, required: false
  public get slo() {
    return this.getStringAttribute('slo');
  }

  // slo_compliance - computed: true, optional: false, required: false
  public get sloCompliance() {
    return this.getStringAttribute('slo_compliance');
  }

  // snapshot_policies - computed: true, optional: false, required: false
  public get snapshotPolicies() {
    return this.getListAttribute('snapshot_policies');
  }

  // srp_id - computed: true, optional: false, required: false
  public get srpId() {
    return this.getStringAttribute('srp_id');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getStringAttribute('tags');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // unprotected - computed: true, optional: false, required: false
  public get unprotected() {
    return this.getBooleanAttribute('unprotected');
  }

  // unreducible_data_gb - computed: true, optional: false, required: false
  public get unreducibleDataGb() {
    return this.getNumberAttribute('unreducible_data_gb');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // volume_ids - computed: true, optional: false, required: false
  public get volumeIds() {
    return this.getListAttribute('volume_ids');
  }

  // vp_saved_percent - computed: true, optional: false, required: false
  public get vpSavedPercent() {
    return this.getNumberAttribute('vp_saved_percent');
  }

  // workload - computed: true, optional: false, required: false
  public get workload() {
    return this.getStringAttribute('workload');
  }
}

export class DataPowermaxStoragegroupStorageGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowermaxStoragegroupStorageGroupsOutputReference {
    return new DataPowermaxStoragegroupStorageGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowermaxStoragegroupTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/storagegroup#read DataPowermaxStoragegroup#read}
  */
  readonly read?: string;
}

export function dataPowermaxStoragegroupTimeoutsToTerraform(struct?: DataPowermaxStoragegroupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataPowermaxStoragegroupTimeoutsToHclTerraform(struct?: DataPowermaxStoragegroupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowermaxStoragegroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowermaxStoragegroupTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowermaxStoragegroupTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}
export interface DataPowermaxStoragegroupFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/storagegroup#names DataPowermaxStoragegroup#names}
  */
  readonly names?: string[];
}

export function dataPowermaxStoragegroupFilterToTerraform(struct?: DataPowermaxStoragegroupFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
  }
}


export function dataPowermaxStoragegroupFilterToHclTerraform(struct?: DataPowermaxStoragegroupFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.names),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowermaxStoragegroupFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowermaxStoragegroupFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowermaxStoragegroupFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._names = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._names = value.names;
    }
  }

  // names - computed: false, optional: true, required: false
  private _names?: string[]; 
  public get names() {
    return cdktf.Fn.tolist(this.getListAttribute('names'));
  }
  public set names(value: string[]) {
    this._names = value;
  }
  public resetNames() {
    this._names = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/storagegroup powermax_storagegroup}
*/
export class DataPowermaxStoragegroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powermax_storagegroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowermaxStoragegroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowermaxStoragegroup to import
  * @param importFromId The id of the existing DataPowermaxStoragegroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/storagegroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowermaxStoragegroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powermax_storagegroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/storagegroup powermax_storagegroup} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowermaxStoragegroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowermaxStoragegroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powermax_storagegroup',
      terraformGeneratorMetadata: {
        providerName: 'powermax',
        providerVersion: '1.0.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._timeouts.internalValue = config.timeouts;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // storage_groups - computed: true, optional: false, required: false
  private _storageGroups = new DataPowermaxStoragegroupStorageGroupsList(this, "storage_groups", false);
  public get storageGroups() {
    return this._storageGroups;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataPowermaxStoragegroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataPowermaxStoragegroupTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataPowermaxStoragegroupFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataPowermaxStoragegroupFilter) {
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
      timeouts: dataPowermaxStoragegroupTimeoutsToTerraform(this._timeouts.internalValue),
      filter: dataPowermaxStoragegroupFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      timeouts: {
        value: dataPowermaxStoragegroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowermaxStoragegroupTimeouts",
      },
      filter: {
        value: dataPowermaxStoragegroupFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowermaxStoragegroupFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
