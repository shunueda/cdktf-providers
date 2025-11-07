// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_restore_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HbrRestoreJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_restore_job#cross_account_role_name HbrRestoreJob#cross_account_role_name}
  */
  readonly crossAccountRoleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_restore_job#cross_account_type HbrRestoreJob#cross_account_type}
  */
  readonly crossAccountType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_restore_job#cross_account_user_id HbrRestoreJob#cross_account_user_id}
  */
  readonly crossAccountUserId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_restore_job#exclude HbrRestoreJob#exclude}
  */
  readonly exclude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_restore_job#id HbrRestoreJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_restore_job#include HbrRestoreJob#include}
  */
  readonly include?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_restore_job#options HbrRestoreJob#options}
  */
  readonly options?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_restore_job#restore_job_id HbrRestoreJob#restore_job_id}
  */
  readonly restoreJobId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_restore_job#restore_type HbrRestoreJob#restore_type}
  */
  readonly restoreType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_restore_job#snapshot_hash HbrRestoreJob#snapshot_hash}
  */
  readonly snapshotHash: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_restore_job#snapshot_id HbrRestoreJob#snapshot_id}
  */
  readonly snapshotId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_restore_job#source_type HbrRestoreJob#source_type}
  */
  readonly sourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_restore_job#target_bucket HbrRestoreJob#target_bucket}
  */
  readonly targetBucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_restore_job#target_client_id HbrRestoreJob#target_client_id}
  */
  readonly targetClientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_restore_job#target_create_time HbrRestoreJob#target_create_time}
  */
  readonly targetCreateTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_restore_job#target_data_source_id HbrRestoreJob#target_data_source_id}
  */
  readonly targetDataSourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_restore_job#target_file_system_id HbrRestoreJob#target_file_system_id}
  */
  readonly targetFileSystemId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_restore_job#target_instance_id HbrRestoreJob#target_instance_id}
  */
  readonly targetInstanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_restore_job#target_instance_name HbrRestoreJob#target_instance_name}
  */
  readonly targetInstanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_restore_job#target_path HbrRestoreJob#target_path}
  */
  readonly targetPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_restore_job#target_prefix HbrRestoreJob#target_prefix}
  */
  readonly targetPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_restore_job#target_table_name HbrRestoreJob#target_table_name}
  */
  readonly targetTableName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_restore_job#target_time HbrRestoreJob#target_time}
  */
  readonly targetTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_restore_job#udm_detail HbrRestoreJob#udm_detail}
  */
  readonly udmDetail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_restore_job#vault_id HbrRestoreJob#vault_id}
  */
  readonly vaultId: string;
  /**
  * ots_detail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_restore_job#ots_detail HbrRestoreJob#ots_detail}
  */
  readonly otsDetail?: HbrRestoreJobOtsDetail;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_restore_job#timeouts HbrRestoreJob#timeouts}
  */
  readonly timeouts?: HbrRestoreJobTimeouts;
}
export interface HbrRestoreJobOtsDetail {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_restore_job#overwrite_existing HbrRestoreJob#overwrite_existing}
  */
  readonly overwriteExisting?: boolean | cdktf.IResolvable;
}

export function hbrRestoreJobOtsDetailToTerraform(struct?: HbrRestoreJobOtsDetailOutputReference | HbrRestoreJobOtsDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    overwrite_existing: cdktf.booleanToTerraform(struct!.overwriteExisting),
  }
}


export function hbrRestoreJobOtsDetailToHclTerraform(struct?: HbrRestoreJobOtsDetailOutputReference | HbrRestoreJobOtsDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    overwrite_existing: {
      value: cdktf.booleanToHclTerraform(struct!.overwriteExisting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HbrRestoreJobOtsDetailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HbrRestoreJobOtsDetail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._overwriteExisting !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwriteExisting = this._overwriteExisting;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HbrRestoreJobOtsDetail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._overwriteExisting = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._overwriteExisting = value.overwriteExisting;
    }
  }

  // overwrite_existing - computed: true, optional: true, required: false
  private _overwriteExisting?: boolean | cdktf.IResolvable; 
  public get overwriteExisting() {
    return this.getBooleanAttribute('overwrite_existing');
  }
  public set overwriteExisting(value: boolean | cdktf.IResolvable) {
    this._overwriteExisting = value;
  }
  public resetOverwriteExisting() {
    this._overwriteExisting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteExistingInput() {
    return this._overwriteExisting;
  }
}
export interface HbrRestoreJobTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_restore_job#create HbrRestoreJob#create}
  */
  readonly create?: string;
}

export function hbrRestoreJobTimeoutsToTerraform(struct?: HbrRestoreJobTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function hbrRestoreJobTimeoutsToHclTerraform(struct?: HbrRestoreJobTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HbrRestoreJobTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HbrRestoreJobTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HbrRestoreJobTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_restore_job alicloud_hbr_restore_job}
*/
export class HbrRestoreJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_hbr_restore_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HbrRestoreJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HbrRestoreJob to import
  * @param importFromId The id of the existing HbrRestoreJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_restore_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HbrRestoreJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_hbr_restore_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_restore_job alicloud_hbr_restore_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HbrRestoreJobConfig
  */
  public constructor(scope: Construct, id: string, config: HbrRestoreJobConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_hbr_restore_job',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._crossAccountRoleName = config.crossAccountRoleName;
    this._crossAccountType = config.crossAccountType;
    this._crossAccountUserId = config.crossAccountUserId;
    this._exclude = config.exclude;
    this._id = config.id;
    this._include = config.include;
    this._options = config.options;
    this._restoreJobId = config.restoreJobId;
    this._restoreType = config.restoreType;
    this._snapshotHash = config.snapshotHash;
    this._snapshotId = config.snapshotId;
    this._sourceType = config.sourceType;
    this._targetBucket = config.targetBucket;
    this._targetClientId = config.targetClientId;
    this._targetCreateTime = config.targetCreateTime;
    this._targetDataSourceId = config.targetDataSourceId;
    this._targetFileSystemId = config.targetFileSystemId;
    this._targetInstanceId = config.targetInstanceId;
    this._targetInstanceName = config.targetInstanceName;
    this._targetPath = config.targetPath;
    this._targetPrefix = config.targetPrefix;
    this._targetTableName = config.targetTableName;
    this._targetTime = config.targetTime;
    this._udmDetail = config.udmDetail;
    this._vaultId = config.vaultId;
    this._otsDetail.internalValue = config.otsDetail;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cross_account_role_name - computed: false, optional: true, required: false
  private _crossAccountRoleName?: string; 
  public get crossAccountRoleName() {
    return this.getStringAttribute('cross_account_role_name');
  }
  public set crossAccountRoleName(value: string) {
    this._crossAccountRoleName = value;
  }
  public resetCrossAccountRoleName() {
    this._crossAccountRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleNameInput() {
    return this._crossAccountRoleName;
  }

  // cross_account_type - computed: true, optional: true, required: false
  private _crossAccountType?: string; 
  public get crossAccountType() {
    return this.getStringAttribute('cross_account_type');
  }
  public set crossAccountType(value: string) {
    this._crossAccountType = value;
  }
  public resetCrossAccountType() {
    this._crossAccountType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountTypeInput() {
    return this._crossAccountType;
  }

  // cross_account_user_id - computed: false, optional: true, required: false
  private _crossAccountUserId?: number; 
  public get crossAccountUserId() {
    return this.getNumberAttribute('cross_account_user_id');
  }
  public set crossAccountUserId(value: number) {
    this._crossAccountUserId = value;
  }
  public resetCrossAccountUserId() {
    this._crossAccountUserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountUserIdInput() {
    return this._crossAccountUserId;
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string; 
  public get exclude() {
    return this.getStringAttribute('exclude');
  }
  public set exclude(value: string) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
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

  // include - computed: false, optional: true, required: false
  private _include?: string; 
  public get include() {
    return this.getStringAttribute('include');
  }
  public set include(value: string) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }

  // options - computed: false, optional: true, required: false
  private _options?: string; 
  public get options() {
    return this.getStringAttribute('options');
  }
  public set options(value: string) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // restore_job_id - computed: true, optional: true, required: false
  private _restoreJobId?: string; 
  public get restoreJobId() {
    return this.getStringAttribute('restore_job_id');
  }
  public set restoreJobId(value: string) {
    this._restoreJobId = value;
  }
  public resetRestoreJobId() {
    this._restoreJobId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreJobIdInput() {
    return this._restoreJobId;
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

  // snapshot_hash - computed: false, optional: false, required: true
  private _snapshotHash?: string; 
  public get snapshotHash() {
    return this.getStringAttribute('snapshot_hash');
  }
  public set snapshotHash(value: string) {
    this._snapshotHash = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotHashInput() {
    return this._snapshotHash;
  }

  // snapshot_id - computed: false, optional: false, required: true
  private _snapshotId?: string; 
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string) {
    this._snapshotId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // target_bucket - computed: false, optional: true, required: false
  private _targetBucket?: string; 
  public get targetBucket() {
    return this.getStringAttribute('target_bucket');
  }
  public set targetBucket(value: string) {
    this._targetBucket = value;
  }
  public resetTargetBucket() {
    this._targetBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetBucketInput() {
    return this._targetBucket;
  }

  // target_client_id - computed: false, optional: true, required: false
  private _targetClientId?: string; 
  public get targetClientId() {
    return this.getStringAttribute('target_client_id');
  }
  public set targetClientId(value: string) {
    this._targetClientId = value;
  }
  public resetTargetClientId() {
    this._targetClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetClientIdInput() {
    return this._targetClientId;
  }

  // target_create_time - computed: false, optional: true, required: false
  private _targetCreateTime?: string; 
  public get targetCreateTime() {
    return this.getStringAttribute('target_create_time');
  }
  public set targetCreateTime(value: string) {
    this._targetCreateTime = value;
  }
  public resetTargetCreateTime() {
    this._targetCreateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetCreateTimeInput() {
    return this._targetCreateTime;
  }

  // target_data_source_id - computed: false, optional: true, required: false
  private _targetDataSourceId?: string; 
  public get targetDataSourceId() {
    return this.getStringAttribute('target_data_source_id');
  }
  public set targetDataSourceId(value: string) {
    this._targetDataSourceId = value;
  }
  public resetTargetDataSourceId() {
    this._targetDataSourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDataSourceIdInput() {
    return this._targetDataSourceId;
  }

  // target_file_system_id - computed: false, optional: true, required: false
  private _targetFileSystemId?: string; 
  public get targetFileSystemId() {
    return this.getStringAttribute('target_file_system_id');
  }
  public set targetFileSystemId(value: string) {
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
  private _targetInstanceId?: string; 
  public get targetInstanceId() {
    return this.getStringAttribute('target_instance_id');
  }
  public set targetInstanceId(value: string) {
    this._targetInstanceId = value;
  }
  public resetTargetInstanceId() {
    this._targetInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInstanceIdInput() {
    return this._targetInstanceId;
  }

  // target_instance_name - computed: false, optional: true, required: false
  private _targetInstanceName?: string; 
  public get targetInstanceName() {
    return this.getStringAttribute('target_instance_name');
  }
  public set targetInstanceName(value: string) {
    this._targetInstanceName = value;
  }
  public resetTargetInstanceName() {
    this._targetInstanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInstanceNameInput() {
    return this._targetInstanceName;
  }

  // target_path - computed: false, optional: true, required: false
  private _targetPath?: string; 
  public get targetPath() {
    return this.getStringAttribute('target_path');
  }
  public set targetPath(value: string) {
    this._targetPath = value;
  }
  public resetTargetPath() {
    this._targetPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPathInput() {
    return this._targetPath;
  }

  // target_prefix - computed: false, optional: true, required: false
  private _targetPrefix?: string; 
  public get targetPrefix() {
    return this.getStringAttribute('target_prefix');
  }
  public set targetPrefix(value: string) {
    this._targetPrefix = value;
  }
  public resetTargetPrefix() {
    this._targetPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPrefixInput() {
    return this._targetPrefix;
  }

  // target_table_name - computed: false, optional: true, required: false
  private _targetTableName?: string; 
  public get targetTableName() {
    return this.getStringAttribute('target_table_name');
  }
  public set targetTableName(value: string) {
    this._targetTableName = value;
  }
  public resetTargetTableName() {
    this._targetTableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTableNameInput() {
    return this._targetTableName;
  }

  // target_time - computed: false, optional: true, required: false
  private _targetTime?: string; 
  public get targetTime() {
    return this.getStringAttribute('target_time');
  }
  public set targetTime(value: string) {
    this._targetTime = value;
  }
  public resetTargetTime() {
    this._targetTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTimeInput() {
    return this._targetTime;
  }

  // udm_detail - computed: false, optional: true, required: false
  private _udmDetail?: string; 
  public get udmDetail() {
    return this.getStringAttribute('udm_detail');
  }
  public set udmDetail(value: string) {
    this._udmDetail = value;
  }
  public resetUdmDetail() {
    this._udmDetail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udmDetailInput() {
    return this._udmDetail;
  }

  // vault_id - computed: false, optional: false, required: true
  private _vaultId?: string; 
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }
  public set vaultId(value: string) {
    this._vaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultIdInput() {
    return this._vaultId;
  }

  // ots_detail - computed: false, optional: true, required: false
  private _otsDetail = new HbrRestoreJobOtsDetailOutputReference(this, "ots_detail");
  public get otsDetail() {
    return this._otsDetail;
  }
  public putOtsDetail(value: HbrRestoreJobOtsDetail) {
    this._otsDetail.internalValue = value;
  }
  public resetOtsDetail() {
    this._otsDetail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otsDetailInput() {
    return this._otsDetail.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new HbrRestoreJobTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: HbrRestoreJobTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cross_account_role_name: cdktf.stringToTerraform(this._crossAccountRoleName),
      cross_account_type: cdktf.stringToTerraform(this._crossAccountType),
      cross_account_user_id: cdktf.numberToTerraform(this._crossAccountUserId),
      exclude: cdktf.stringToTerraform(this._exclude),
      id: cdktf.stringToTerraform(this._id),
      include: cdktf.stringToTerraform(this._include),
      options: cdktf.stringToTerraform(this._options),
      restore_job_id: cdktf.stringToTerraform(this._restoreJobId),
      restore_type: cdktf.stringToTerraform(this._restoreType),
      snapshot_hash: cdktf.stringToTerraform(this._snapshotHash),
      snapshot_id: cdktf.stringToTerraform(this._snapshotId),
      source_type: cdktf.stringToTerraform(this._sourceType),
      target_bucket: cdktf.stringToTerraform(this._targetBucket),
      target_client_id: cdktf.stringToTerraform(this._targetClientId),
      target_create_time: cdktf.stringToTerraform(this._targetCreateTime),
      target_data_source_id: cdktf.stringToTerraform(this._targetDataSourceId),
      target_file_system_id: cdktf.stringToTerraform(this._targetFileSystemId),
      target_instance_id: cdktf.stringToTerraform(this._targetInstanceId),
      target_instance_name: cdktf.stringToTerraform(this._targetInstanceName),
      target_path: cdktf.stringToTerraform(this._targetPath),
      target_prefix: cdktf.stringToTerraform(this._targetPrefix),
      target_table_name: cdktf.stringToTerraform(this._targetTableName),
      target_time: cdktf.stringToTerraform(this._targetTime),
      udm_detail: cdktf.stringToTerraform(this._udmDetail),
      vault_id: cdktf.stringToTerraform(this._vaultId),
      ots_detail: hbrRestoreJobOtsDetailToTerraform(this._otsDetail.internalValue),
      timeouts: hbrRestoreJobTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cross_account_role_name: {
        value: cdktf.stringToHclTerraform(this._crossAccountRoleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cross_account_type: {
        value: cdktf.stringToHclTerraform(this._crossAccountType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cross_account_user_id: {
        value: cdktf.numberToHclTerraform(this._crossAccountUserId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      exclude: {
        value: cdktf.stringToHclTerraform(this._exclude),
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
      include: {
        value: cdktf.stringToHclTerraform(this._include),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      options: {
        value: cdktf.stringToHclTerraform(this._options),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restore_job_id: {
        value: cdktf.stringToHclTerraform(this._restoreJobId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restore_type: {
        value: cdktf.stringToHclTerraform(this._restoreType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapshot_hash: {
        value: cdktf.stringToHclTerraform(this._snapshotHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapshot_id: {
        value: cdktf.stringToHclTerraform(this._snapshotId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_type: {
        value: cdktf.stringToHclTerraform(this._sourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_bucket: {
        value: cdktf.stringToHclTerraform(this._targetBucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_client_id: {
        value: cdktf.stringToHclTerraform(this._targetClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_create_time: {
        value: cdktf.stringToHclTerraform(this._targetCreateTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_data_source_id: {
        value: cdktf.stringToHclTerraform(this._targetDataSourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_file_system_id: {
        value: cdktf.stringToHclTerraform(this._targetFileSystemId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_instance_id: {
        value: cdktf.stringToHclTerraform(this._targetInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_instance_name: {
        value: cdktf.stringToHclTerraform(this._targetInstanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_path: {
        value: cdktf.stringToHclTerraform(this._targetPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_prefix: {
        value: cdktf.stringToHclTerraform(this._targetPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_table_name: {
        value: cdktf.stringToHclTerraform(this._targetTableName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_time: {
        value: cdktf.stringToHclTerraform(this._targetTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      udm_detail: {
        value: cdktf.stringToHclTerraform(this._udmDetail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault_id: {
        value: cdktf.stringToHclTerraform(this._vaultId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ots_detail: {
        value: hbrRestoreJobOtsDetailToHclTerraform(this._otsDetail.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HbrRestoreJobOtsDetailList",
      },
      timeouts: {
        value: hbrRestoreJobTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HbrRestoreJobTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
