// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/hbr_restore_jobs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudHbrRestoreJobsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/hbr_restore_jobs#id DataAlicloudHbrRestoreJobs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/hbr_restore_jobs#output_file DataAlicloudHbrRestoreJobs#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/hbr_restore_jobs#restore_id DataAlicloudHbrRestoreJobs#restore_id}
  */
  readonly restoreId?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/hbr_restore_jobs#restore_type DataAlicloudHbrRestoreJobs#restore_type}
  */
  readonly restoreType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/hbr_restore_jobs#source_type DataAlicloudHbrRestoreJobs#source_type}
  */
  readonly sourceType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/hbr_restore_jobs#status DataAlicloudHbrRestoreJobs#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/hbr_restore_jobs#target_bucket DataAlicloudHbrRestoreJobs#target_bucket}
  */
  readonly targetBucket?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/hbr_restore_jobs#target_file_system_id DataAlicloudHbrRestoreJobs#target_file_system_id}
  */
  readonly targetFileSystemId?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/hbr_restore_jobs#target_instance_id DataAlicloudHbrRestoreJobs#target_instance_id}
  */
  readonly targetInstanceId?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/hbr_restore_jobs#vault_id DataAlicloudHbrRestoreJobs#vault_id}
  */
  readonly vaultId?: string[];
}
export interface DataAlicloudHbrRestoreJobsJobs {
}

export function dataAlicloudHbrRestoreJobsJobsToTerraform(struct?: DataAlicloudHbrRestoreJobsJobs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudHbrRestoreJobsJobsToHclTerraform(struct?: DataAlicloudHbrRestoreJobsJobs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudHbrRestoreJobsJobsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudHbrRestoreJobsJobs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudHbrRestoreJobsJobs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actual_bytes - computed: true, optional: false, required: false
  public get actualBytes() {
    return this.getStringAttribute('actual_bytes');
  }

  // actual_items - computed: true, optional: false, required: false
  public get actualItems() {
    return this.getStringAttribute('actual_items');
  }

  // bytes_done - computed: true, optional: false, required: false
  public get bytesDone() {
    return this.getStringAttribute('bytes_done');
  }

  // bytes_total - computed: true, optional: false, required: false
  public get bytesTotal() {
    return this.getStringAttribute('bytes_total');
  }

  // complete_time - computed: true, optional: false, required: false
  public get completeTime() {
    return this.getStringAttribute('complete_time');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // error_file - computed: true, optional: false, required: false
  public get errorFile() {
    return this.getStringAttribute('error_file');
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }

  // expire_time - computed: true, optional: false, required: false
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // items_done - computed: true, optional: false, required: false
  public get itemsDone() {
    return this.getStringAttribute('items_done');
  }

  // items_total - computed: true, optional: false, required: false
  public get itemsTotal() {
    return this.getStringAttribute('items_total');
  }

  // options - computed: true, optional: false, required: false
  public get options() {
    return this.getStringAttribute('options');
  }

  // parent_id - computed: true, optional: false, required: false
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }

  // progress - computed: true, optional: false, required: false
  public get progress() {
    return this.getNumberAttribute('progress');
  }

  // restore_job_id - computed: true, optional: false, required: false
  public get restoreJobId() {
    return this.getStringAttribute('restore_job_id');
  }

  // restore_type - computed: true, optional: false, required: false
  public get restoreType() {
    return this.getStringAttribute('restore_type');
  }

  // snapshot_hash - computed: true, optional: false, required: false
  public get snapshotHash() {
    return this.getStringAttribute('snapshot_hash');
  }

  // snapshot_id - computed: true, optional: false, required: false
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // target_bucket - computed: true, optional: false, required: false
  public get targetBucket() {
    return this.getStringAttribute('target_bucket');
  }

  // target_client_id - computed: true, optional: false, required: false
  public get targetClientId() {
    return this.getStringAttribute('target_client_id');
  }

  // target_create_time - computed: true, optional: false, required: false
  public get targetCreateTime() {
    return this.getStringAttribute('target_create_time');
  }

  // target_data_source_id - computed: true, optional: false, required: false
  public get targetDataSourceId() {
    return this.getStringAttribute('target_data_source_id');
  }

  // target_file_system_id - computed: true, optional: false, required: false
  public get targetFileSystemId() {
    return this.getStringAttribute('target_file_system_id');
  }

  // target_instance_id - computed: true, optional: false, required: false
  public get targetInstanceId() {
    return this.getStringAttribute('target_instance_id');
  }

  // target_path - computed: true, optional: false, required: false
  public get targetPath() {
    return this.getStringAttribute('target_path');
  }

  // target_prefix - computed: true, optional: false, required: false
  public get targetPrefix() {
    return this.getStringAttribute('target_prefix');
  }

  // updated_time - computed: true, optional: false, required: false
  public get updatedTime() {
    return this.getStringAttribute('updated_time');
  }

  // vault_id - computed: true, optional: false, required: false
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }
}

export class DataAlicloudHbrRestoreJobsJobsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudHbrRestoreJobsJobsOutputReference {
    return new DataAlicloudHbrRestoreJobsJobsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/hbr_restore_jobs alicloud_hbr_restore_jobs}
*/
export class DataAlicloudHbrRestoreJobs extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_hbr_restore_jobs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudHbrRestoreJobs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudHbrRestoreJobs to import
  * @param importFromId The id of the existing DataAlicloudHbrRestoreJobs that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/hbr_restore_jobs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudHbrRestoreJobs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_hbr_restore_jobs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/hbr_restore_jobs alicloud_hbr_restore_jobs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudHbrRestoreJobsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudHbrRestoreJobsConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_hbr_restore_jobs',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._outputFile = config.outputFile;
    this._restoreId = config.restoreId;
    this._restoreType = config.restoreType;
    this._sourceType = config.sourceType;
    this._status = config.status;
    this._targetBucket = config.targetBucket;
    this._targetFileSystemId = config.targetFileSystemId;
    this._targetInstanceId = config.targetInstanceId;
    this._vaultId = config.vaultId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return this.getListAttribute('ids');
  }

  // jobs - computed: true, optional: false, required: false
  private _jobs = new DataAlicloudHbrRestoreJobsJobsList(this, "jobs", false);
  public get jobs() {
    return this._jobs;
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // restore_id - computed: false, optional: true, required: false
  private _restoreId?: string[]; 
  public get restoreId() {
    return this.getListAttribute('restore_id');
  }
  public set restoreId(value: string[]) {
    this._restoreId = value;
  }
  public resetRestoreId() {
    this._restoreId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreIdInput() {
    return this._restoreId;
  }

  // restore_type - computed: false, optional: false, required: true
  private _restoreType?: string; 
  public get restoreType() {
    return this.getStringAttribute('restore_type');
  }
  public set restoreType(value: string) {
    this._restoreType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreTypeInput() {
    return this._restoreType;
  }

  // source_type - computed: false, optional: true, required: false
  private _sourceType?: string[]; 
  public get sourceType() {
    return this.getListAttribute('source_type');
  }
  public set sourceType(value: string[]) {
    this._sourceType = value;
  }
  public resetSourceType() {
    this._sourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // target_bucket - computed: false, optional: true, required: false
  private _targetBucket?: string[]; 
  public get targetBucket() {
    return this.getListAttribute('target_bucket');
  }
  public set targetBucket(value: string[]) {
    this._targetBucket = value;
  }
  public resetTargetBucket() {
    this._targetBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetBucketInput() {
    return this._targetBucket;
  }

  // target_file_system_id - computed: false, optional: true, required: false
  private _targetFileSystemId?: string[]; 
  public get targetFileSystemId() {
    return this.getListAttribute('target_file_system_id');
  }
  public set targetFileSystemId(value: string[]) {
    this._targetFileSystemId = value;
  }
  public resetTargetFileSystemId() {
    this._targetFileSystemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFileSystemIdInput() {
    return this._targetFileSystemId;
  }

  // target_instance_id - computed: false, optional: true, required: false
  private _targetInstanceId?: string[]; 
  public get targetInstanceId() {
    return this.getListAttribute('target_instance_id');
  }
  public set targetInstanceId(value: string[]) {
    this._targetInstanceId = value;
  }
  public resetTargetInstanceId() {
    this._targetInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInstanceIdInput() {
    return this._targetInstanceId;
  }

  // vault_id - computed: false, optional: true, required: false
  private _vaultId?: string[]; 
  public get vaultId() {
    return this.getListAttribute('vault_id');
  }
  public set vaultId(value: string[]) {
    this._vaultId = value;
  }
  public resetVaultId() {
    this._vaultId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultIdInput() {
    return this._vaultId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      output_file: cdktf.stringToTerraform(this._outputFile),
      restore_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._restoreId),
      restore_type: cdktf.stringToTerraform(this._restoreType),
      source_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourceType),
      status: cdktf.stringToTerraform(this._status),
      target_bucket: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targetBucket),
      target_file_system_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targetFileSystemId),
      target_instance_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targetInstanceId),
      vault_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vaultId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restore_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._restoreId),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      restore_type: {
        value: cdktf.stringToHclTerraform(this._restoreType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sourceType),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_bucket: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._targetBucket),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      target_file_system_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._targetFileSystemId),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      target_instance_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._targetInstanceId),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      vault_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vaultId),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
