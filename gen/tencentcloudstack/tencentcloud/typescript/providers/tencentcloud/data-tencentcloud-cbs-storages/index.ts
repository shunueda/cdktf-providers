// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/cbs_storages
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudCbsStoragesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The available zone that the CBS instance locates at.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/cbs_storages#availability_zone DataTencentcloudCbsStorages#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * List filter by disk charge type (`POSTPAID_BY_HOUR` | `PREPAID` | `CDCPAID` | `DEDICATED_CLUSTER_PAID`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/cbs_storages#charge_type DataTencentcloudCbsStorages#charge_type}
  */
  readonly chargeType?: string[];
  /**
  * Exclusive cluster id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/cbs_storages#dedicated_cluster_id DataTencentcloudCbsStorages#dedicated_cluster_id}
  */
  readonly dedicatedClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/cbs_storages#id DataTencentcloudCbsStorages#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List filter by attached instance public or private IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/cbs_storages#instance_ips DataTencentcloudCbsStorages#instance_ips}
  */
  readonly instanceIps?: string[];
  /**
  * List filter by attached instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/cbs_storages#instance_name DataTencentcloudCbsStorages#instance_name}
  */
  readonly instanceName?: string[];
  /**
  * Filter by whether the disk is portable (Boolean `true` or `false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/cbs_storages#portable DataTencentcloudCbsStorages#portable}
  */
  readonly portable?: boolean | cdktf.IResolvable;
  /**
  * ID of the project with which the CBS is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/cbs_storages#project_id DataTencentcloudCbsStorages#project_id}
  */
  readonly projectId?: number;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/cbs_storages#result_output_file DataTencentcloudCbsStorages#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * ID of the CBS to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/cbs_storages#storage_id DataTencentcloudCbsStorages#storage_id}
  */
  readonly storageId?: string;
  /**
  * Name of the CBS to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/cbs_storages#storage_name DataTencentcloudCbsStorages#storage_name}
  */
  readonly storageName?: string;
  /**
  * List filter by disk state (`UNATTACHED` | `ATTACHING` | `ATTACHED` | `DETACHING` | `EXPANDING` | `ROLLBACKING` | `TORECYCLE`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/cbs_storages#storage_state DataTencentcloudCbsStorages#storage_state}
  */
  readonly storageState?: string[];
  /**
  * Filter by cloud disk media type (`CLOUD_BASIC`: HDD cloud disk | `CLOUD_PREMIUM`: Premium Cloud Storage | `CLOUD_SSD`: SSD cloud disk).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/cbs_storages#storage_type DataTencentcloudCbsStorages#storage_type}
  */
  readonly storageType?: string;
  /**
  * Filter by cloud disk type (`SYSTEM_DISK`: system disk | `DATA_DISK`: data disk).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/cbs_storages#storage_usage DataTencentcloudCbsStorages#storage_usage}
  */
  readonly storageUsage?: string;
  /**
  * List filter by tag keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/cbs_storages#tag_keys DataTencentcloudCbsStorages#tag_keys}
  */
  readonly tagKeys?: string[];
  /**
  * List filter by tag values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/cbs_storages#tag_values DataTencentcloudCbsStorages#tag_values}
  */
  readonly tagValues?: string[];
}
export interface DataTencentcloudCbsStoragesStorageListStruct {
}

export function dataTencentcloudCbsStoragesStorageListStructToTerraform(struct?: DataTencentcloudCbsStoragesStorageListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCbsStoragesStorageListStructToHclTerraform(struct?: DataTencentcloudCbsStoragesStorageListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCbsStoragesStorageListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCbsStoragesStorageListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCbsStoragesStorageListStruct | undefined) {
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

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // charge_type - computed: true, optional: false, required: false
  public get chargeType() {
    return this.getStringAttribute('charge_type');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // dedicated_cluster_id - computed: true, optional: false, required: false
  public get dedicatedClusterId() {
    return this.getStringAttribute('dedicated_cluster_id');
  }

  // encrypt - computed: true, optional: false, required: false
  public get encrypt() {
    return this.getBooleanAttribute('encrypt');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // prepaid_renew_flag - computed: true, optional: false, required: false
  public get prepaidRenewFlag() {
    return this.getStringAttribute('prepaid_renew_flag');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // storage_id - computed: true, optional: false, required: false
  public get storageId() {
    return this.getStringAttribute('storage_id');
  }

  // storage_name - computed: true, optional: false, required: false
  public get storageName() {
    return this.getStringAttribute('storage_name');
  }

  // storage_size - computed: true, optional: false, required: false
  public get storageSize() {
    return this.getNumberAttribute('storage_size');
  }

  // storage_type - computed: true, optional: false, required: false
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }

  // storage_usage - computed: true, optional: false, required: false
  public get storageUsage() {
    return this.getStringAttribute('storage_usage');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // throughput_performance - computed: true, optional: false, required: false
  public get throughputPerformance() {
    return this.getNumberAttribute('throughput_performance');
  }
}

export class DataTencentcloudCbsStoragesStorageListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCbsStoragesStorageListStructOutputReference {
    return new DataTencentcloudCbsStoragesStorageListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/cbs_storages tencentcloud_cbs_storages}
*/
export class DataTencentcloudCbsStorages extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cbs_storages";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudCbsStorages resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudCbsStorages to import
  * @param importFromId The id of the existing DataTencentcloudCbsStorages that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/cbs_storages#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudCbsStorages to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cbs_storages", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/cbs_storages tencentcloud_cbs_storages} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudCbsStoragesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudCbsStoragesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cbs_storages',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityZone = config.availabilityZone;
    this._chargeType = config.chargeType;
    this._dedicatedClusterId = config.dedicatedClusterId;
    this._id = config.id;
    this._instanceIps = config.instanceIps;
    this._instanceName = config.instanceName;
    this._portable = config.portable;
    this._projectId = config.projectId;
    this._resultOutputFile = config.resultOutputFile;
    this._storageId = config.storageId;
    this._storageName = config.storageName;
    this._storageState = config.storageState;
    this._storageType = config.storageType;
    this._storageUsage = config.storageUsage;
    this._tagKeys = config.tagKeys;
    this._tagValues = config.tagValues;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zone - computed: false, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // charge_type - computed: false, optional: true, required: false
  private _chargeType?: string[]; 
  public get chargeType() {
    return this.getListAttribute('charge_type');
  }
  public set chargeType(value: string[]) {
    this._chargeType = value;
  }
  public resetChargeType() {
    this._chargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chargeTypeInput() {
    return this._chargeType;
  }

  // dedicated_cluster_id - computed: false, optional: true, required: false
  private _dedicatedClusterId?: string; 
  public get dedicatedClusterId() {
    return this.getStringAttribute('dedicated_cluster_id');
  }
  public set dedicatedClusterId(value: string) {
    this._dedicatedClusterId = value;
  }
  public resetDedicatedClusterId() {
    this._dedicatedClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedClusterIdInput() {
    return this._dedicatedClusterId;
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

  // instance_ips - computed: false, optional: true, required: false
  private _instanceIps?: string[]; 
  public get instanceIps() {
    return this.getListAttribute('instance_ips');
  }
  public set instanceIps(value: string[]) {
    this._instanceIps = value;
  }
  public resetInstanceIps() {
    this._instanceIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIpsInput() {
    return this._instanceIps;
  }

  // instance_name - computed: false, optional: true, required: false
  private _instanceName?: string[]; 
  public get instanceName() {
    return this.getListAttribute('instance_name');
  }
  public set instanceName(value: string[]) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // portable - computed: false, optional: true, required: false
  private _portable?: boolean | cdktf.IResolvable; 
  public get portable() {
    return this.getBooleanAttribute('portable');
  }
  public set portable(value: boolean | cdktf.IResolvable) {
    this._portable = value;
  }
  public resetPortable() {
    this._portable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portableInput() {
    return this._portable;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
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

  // storage_id - computed: false, optional: true, required: false
  private _storageId?: string; 
  public get storageId() {
    return this.getStringAttribute('storage_id');
  }
  public set storageId(value: string) {
    this._storageId = value;
  }
  public resetStorageId() {
    this._storageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageIdInput() {
    return this._storageId;
  }

  // storage_list - computed: true, optional: false, required: false
  private _storageList = new DataTencentcloudCbsStoragesStorageListStructList(this, "storage_list", false);
  public get storageList() {
    return this._storageList;
  }

  // storage_name - computed: false, optional: true, required: false
  private _storageName?: string; 
  public get storageName() {
    return this.getStringAttribute('storage_name');
  }
  public set storageName(value: string) {
    this._storageName = value;
  }
  public resetStorageName() {
    this._storageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageNameInput() {
    return this._storageName;
  }

  // storage_state - computed: false, optional: true, required: false
  private _storageState?: string[]; 
  public get storageState() {
    return this.getListAttribute('storage_state');
  }
  public set storageState(value: string[]) {
    this._storageState = value;
  }
  public resetStorageState() {
    this._storageState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageStateInput() {
    return this._storageState;
  }

  // storage_type - computed: false, optional: true, required: false
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  public resetStorageType() {
    this._storageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }

  // storage_usage - computed: false, optional: true, required: false
  private _storageUsage?: string; 
  public get storageUsage() {
    return this.getStringAttribute('storage_usage');
  }
  public set storageUsage(value: string) {
    this._storageUsage = value;
  }
  public resetStorageUsage() {
    this._storageUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageUsageInput() {
    return this._storageUsage;
  }

  // tag_keys - computed: false, optional: true, required: false
  private _tagKeys?: string[]; 
  public get tagKeys() {
    return this.getListAttribute('tag_keys');
  }
  public set tagKeys(value: string[]) {
    this._tagKeys = value;
  }
  public resetTagKeys() {
    this._tagKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeysInput() {
    return this._tagKeys;
  }

  // tag_values - computed: false, optional: true, required: false
  private _tagValues?: string[]; 
  public get tagValues() {
    return this.getListAttribute('tag_values');
  }
  public set tagValues(value: string[]) {
    this._tagValues = value;
  }
  public resetTagValues() {
    this._tagValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValuesInput() {
    return this._tagValues;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      charge_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._chargeType),
      dedicated_cluster_id: cdktf.stringToTerraform(this._dedicatedClusterId),
      id: cdktf.stringToTerraform(this._id),
      instance_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instanceIps),
      instance_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instanceName),
      portable: cdktf.booleanToTerraform(this._portable),
      project_id: cdktf.numberToTerraform(this._projectId),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      storage_id: cdktf.stringToTerraform(this._storageId),
      storage_name: cdktf.stringToTerraform(this._storageName),
      storage_state: cdktf.listMapper(cdktf.stringToTerraform, false)(this._storageState),
      storage_type: cdktf.stringToTerraform(this._storageType),
      storage_usage: cdktf.stringToTerraform(this._storageUsage),
      tag_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tagKeys),
      tag_values: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tagValues),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      charge_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._chargeType),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      dedicated_cluster_id: {
        value: cdktf.stringToHclTerraform(this._dedicatedClusterId),
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
      instance_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._instanceIps),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      instance_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._instanceName),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      portable: {
        value: cdktf.booleanToHclTerraform(this._portable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_id: {
        value: cdktf.stringToHclTerraform(this._storageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_name: {
        value: cdktf.stringToHclTerraform(this._storageName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_state: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._storageState),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      storage_type: {
        value: cdktf.stringToHclTerraform(this._storageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_usage: {
        value: cdktf.stringToHclTerraform(this._storageUsage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tagKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tag_values: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tagValues),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
