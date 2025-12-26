// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/lighthouse_disks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudLighthouseDisksConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of disk ids.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/lighthouse_disks#disk_ids DataTencentcloudLighthouseDisks#disk_ids}
  */
  readonly diskIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/lighthouse_disks#id DataTencentcloudLighthouseDisks#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/lighthouse_disks#result_output_file DataTencentcloudLighthouseDisks#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/lighthouse_disks#filters DataTencentcloudLighthouseDisks#filters}
  */
  readonly filters?: DataTencentcloudLighthouseDisksFilters[] | cdktf.IResolvable;
}
export interface DataTencentcloudLighthouseDisksDiskListStruct {
}

export function dataTencentcloudLighthouseDisksDiskListStructToTerraform(struct?: DataTencentcloudLighthouseDisksDiskListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudLighthouseDisksDiskListStructToHclTerraform(struct?: DataTencentcloudLighthouseDisksDiskListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudLighthouseDisksDiskListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudLighthouseDisksDiskListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudLighthouseDisksDiskListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attached - computed: true, optional: false, required: false
  public get attached() {
    return this.getBooleanAttribute('attached');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // delete_with_instance - computed: true, optional: false, required: false
  public get deleteWithInstance() {
    return this.getBooleanAttribute('delete_with_instance');
  }

  // disk_backup_count - computed: true, optional: false, required: false
  public get diskBackupCount() {
    return this.getNumberAttribute('disk_backup_count');
  }

  // disk_backup_quota - computed: true, optional: false, required: false
  public get diskBackupQuota() {
    return this.getNumberAttribute('disk_backup_quota');
  }

  // disk_charge_type - computed: true, optional: false, required: false
  public get diskChargeType() {
    return this.getStringAttribute('disk_charge_type');
  }

  // disk_id - computed: true, optional: false, required: false
  public get diskId() {
    return this.getStringAttribute('disk_id');
  }

  // disk_name - computed: true, optional: false, required: false
  public get diskName() {
    return this.getStringAttribute('disk_name');
  }

  // disk_size - computed: true, optional: false, required: false
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }

  // disk_state - computed: true, optional: false, required: false
  public get diskState() {
    return this.getStringAttribute('disk_state');
  }

  // disk_type - computed: true, optional: false, required: false
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }

  // disk_usage - computed: true, optional: false, required: false
  public get diskUsage() {
    return this.getStringAttribute('disk_usage');
  }

  // expired_time - computed: true, optional: false, required: false
  public get expiredTime() {
    return this.getStringAttribute('expired_time');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // isolated_time - computed: true, optional: false, required: false
  public get isolatedTime() {
    return this.getStringAttribute('isolated_time');
  }

  // latest_operation - computed: true, optional: false, required: false
  public get latestOperation() {
    return this.getStringAttribute('latest_operation');
  }

  // latest_operation_request_id - computed: true, optional: false, required: false
  public get latestOperationRequestId() {
    return this.getStringAttribute('latest_operation_request_id');
  }

  // latest_operation_state - computed: true, optional: false, required: false
  public get latestOperationState() {
    return this.getStringAttribute('latest_operation_state');
  }

  // renew_flag - computed: true, optional: false, required: false
  public get renewFlag() {
    return this.getStringAttribute('renew_flag');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class DataTencentcloudLighthouseDisksDiskListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudLighthouseDisksDiskListStructOutputReference {
    return new DataTencentcloudLighthouseDisksDiskListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudLighthouseDisksFilters {
  /**
  * Fields to be filtered. Valid names: `disk-id`: Filters by disk id; `instance-id`: Filter by instance id; `disk-name`: Filter by disk name; `zone`: Filter by zone; `disk-usage`: Filter by disk usage(Values: `SYSTEM_DISK` or `DATA_DISK`); `disk-state`: Filter by disk state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/lighthouse_disks#name DataTencentcloudLighthouseDisks#name}
  */
  readonly name: string;
  /**
  * Value of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/lighthouse_disks#values DataTencentcloudLighthouseDisks#values}
  */
  readonly values: string[];
}

export function dataTencentcloudLighthouseDisksFiltersToTerraform(struct?: DataTencentcloudLighthouseDisksFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataTencentcloudLighthouseDisksFiltersToHclTerraform(struct?: DataTencentcloudLighthouseDisksFilters | cdktf.IResolvable): any {
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTencentcloudLighthouseDisksFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudLighthouseDisksFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudLighthouseDisksFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataTencentcloudLighthouseDisksFiltersList extends cdktf.ComplexList {
  public internalValue? : DataTencentcloudLighthouseDisksFilters[] | cdktf.IResolvable

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
  public get(index: number): DataTencentcloudLighthouseDisksFiltersOutputReference {
    return new DataTencentcloudLighthouseDisksFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/lighthouse_disks tencentcloud_lighthouse_disks}
*/
export class DataTencentcloudLighthouseDisks extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_lighthouse_disks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudLighthouseDisks resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudLighthouseDisks to import
  * @param importFromId The id of the existing DataTencentcloudLighthouseDisks that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/lighthouse_disks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudLighthouseDisks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_lighthouse_disks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/lighthouse_disks tencentcloud_lighthouse_disks} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudLighthouseDisksConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudLighthouseDisksConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_lighthouse_disks',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._diskIds = config.diskIds;
    this._id = config.id;
    this._resultOutputFile = config.resultOutputFile;
    this._filters.internalValue = config.filters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disk_ids - computed: false, optional: true, required: false
  private _diskIds?: string[]; 
  public get diskIds() {
    return cdktf.Fn.tolist(this.getListAttribute('disk_ids'));
  }
  public set diskIds(value: string[]) {
    this._diskIds = value;
  }
  public resetDiskIds() {
    this._diskIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIdsInput() {
    return this._diskIds;
  }

  // disk_list - computed: true, optional: false, required: false
  private _diskList = new DataTencentcloudLighthouseDisksDiskListStructList(this, "disk_list", false);
  public get diskList() {
    return this._diskList;
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

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new DataTencentcloudLighthouseDisksFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataTencentcloudLighthouseDisksFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disk_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._diskIds),
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      filters: cdktf.listMapper(dataTencentcloudLighthouseDisksFiltersToTerraform, true)(this._filters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disk_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._diskIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filters: {
        value: cdktf.listMapperHcl(dataTencentcloudLighthouseDisksFiltersToHclTerraform, true)(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTencentcloudLighthouseDisksFiltersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
