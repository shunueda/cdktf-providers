// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/trail
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformTrailConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/trail#id DataSamsungcloudplatformTrail#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Trail ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/trail#trail_id DataSamsungcloudplatformTrail#trail_id}
  */
  readonly trailId: string;
}
export interface DataSamsungcloudplatformTrailLoggingTargetUsers {
}

export function dataSamsungcloudplatformTrailLoggingTargetUsersToTerraform(struct?: DataSamsungcloudplatformTrailLoggingTargetUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformTrailLoggingTargetUsersToHclTerraform(struct?: DataSamsungcloudplatformTrailLoggingTargetUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformTrailLoggingTargetUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformTrailLoggingTargetUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformTrailLoggingTargetUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // login_id - computed: true, optional: false, required: false
  public get loginId() {
    return this.getStringAttribute('login_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataSamsungcloudplatformTrailLoggingTargetUsersList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformTrailLoggingTargetUsersOutputReference {
    return new DataSamsungcloudplatformTrailLoggingTargetUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSamsungcloudplatformTrailTargetLoggingResourceListStruct {
}

export function dataSamsungcloudplatformTrailTargetLoggingResourceListStructToTerraform(struct?: DataSamsungcloudplatformTrailTargetLoggingResourceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformTrailTargetLoggingResourceListStructToHclTerraform(struct?: DataSamsungcloudplatformTrailTargetLoggingResourceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformTrailTargetLoggingResourceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformTrailTargetLoggingResourceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformTrailTargetLoggingResourceListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logging_item - computed: true, optional: false, required: false
  public get loggingItem() {
    return this.getStringAttribute('logging_item');
  }

  // resource_type_name - computed: true, optional: false, required: false
  public get resourceTypeName() {
    return this.getStringAttribute('resource_type_name');
  }
}

export class DataSamsungcloudplatformTrailTargetLoggingResourceListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformTrailTargetLoggingResourceListStructOutputReference {
    return new DataSamsungcloudplatformTrailTargetLoggingResourceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/trail samsungcloudplatform_trail}
*/
export class DataSamsungcloudplatformTrail extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_trail";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformTrail resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformTrail to import
  * @param importFromId The id of the existing DataSamsungcloudplatformTrail that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/trail#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformTrail to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_trail", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/trail samsungcloudplatform_trail} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformTrailConfig
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformTrailConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_trail',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.15.0'
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
    this._trailId = config.trailId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_by_name - computed: true, optional: false, required: false
  public get createdByName() {
    return this.getStringAttribute('created_by_name');
  }

  // created_dt - computed: true, optional: false, required: false
  public get createdDt() {
    return this.getStringAttribute('created_dt');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // is_logging_target_all_region - computed: true, optional: false, required: false
  public get isLoggingTargetAllRegion() {
    return this.getStringAttribute('is_logging_target_all_region');
  }

  // is_logging_target_all_resource - computed: true, optional: false, required: false
  public get isLoggingTargetAllResource() {
    return this.getStringAttribute('is_logging_target_all_resource');
  }

  // is_logging_target_all_user - computed: true, optional: false, required: false
  public get isLoggingTargetAllUser() {
    return this.getStringAttribute('is_logging_target_all_user');
  }

  // is_trail_deleted - computed: true, optional: false, required: false
  public get isTrailDeleted() {
    return this.getStringAttribute('is_trail_deleted');
  }

  // last_digest_file_create_dt - computed: true, optional: false, required: false
  public get lastDigestFileCreateDt() {
    return this.getStringAttribute('last_digest_file_create_dt');
  }

  // logging_target_regions - computed: true, optional: false, required: false
  public get loggingTargetRegions() {
    return this.getListAttribute('logging_target_regions');
  }

  // logging_target_resource_ids - computed: true, optional: false, required: false
  public get loggingTargetResourceIds() {
    return this.getListAttribute('logging_target_resource_ids');
  }

  // logging_target_users - computed: true, optional: false, required: false
  private _loggingTargetUsers = new DataSamsungcloudplatformTrailLoggingTargetUsersList(this, "logging_target_users", false);
  public get loggingTargetUsers() {
    return this._loggingTargetUsers;
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_by_name - computed: true, optional: false, required: false
  public get modifiedByName() {
    return this.getStringAttribute('modified_by_name');
  }

  // modified_dt - computed: true, optional: false, required: false
  public get modifiedDt() {
    return this.getStringAttribute('modified_dt');
  }

  // object_storage_folder_name - computed: true, optional: false, required: false
  public get objectStorageFolderName() {
    return this.getStringAttribute('object_storage_folder_name');
  }

  // object_storage_name - computed: true, optional: false, required: false
  public get objectStorageName() {
    return this.getStringAttribute('object_storage_name');
  }

  // obs_bucket_id - computed: true, optional: false, required: false
  public get obsBucketId() {
    return this.getStringAttribute('obs_bucket_id');
  }

  // obs_bucket_name - computed: true, optional: false, required: false
  public get obsBucketName() {
    return this.getStringAttribute('obs_bucket_name');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // project_name - computed: true, optional: false, required: false
  public get projectName() {
    return this.getStringAttribute('project_name');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // service_zone_id - computed: true, optional: false, required: false
  public get serviceZoneId() {
    return this.getStringAttribute('service_zone_id');
  }

  // target_logging_resource_list - computed: true, optional: false, required: false
  private _targetLoggingResourceList = new DataSamsungcloudplatformTrailTargetLoggingResourceListStructList(this, "target_logging_resource_list", false);
  public get targetLoggingResourceList() {
    return this._targetLoggingResourceList;
  }

  // trail_batch_end_dt - computed: true, optional: false, required: false
  public get trailBatchEndDt() {
    return this.getStringAttribute('trail_batch_end_dt');
  }

  // trail_batch_first_start_dt - computed: true, optional: false, required: false
  public get trailBatchFirstStartDt() {
    return this.getStringAttribute('trail_batch_first_start_dt');
  }

  // trail_batch_last_success_dt - computed: true, optional: false, required: false
  public get trailBatchLastSuccessDt() {
    return this.getStringAttribute('trail_batch_last_success_dt');
  }

  // trail_batch_start_dt - computed: true, optional: false, required: false
  public get trailBatchStartDt() {
    return this.getStringAttribute('trail_batch_start_dt');
  }

  // trail_batch_state - computed: true, optional: false, required: false
  public get trailBatchState() {
    return this.getStringAttribute('trail_batch_state');
  }

  // trail_id - computed: false, optional: false, required: true
  private _trailId?: string; 
  public get trailId() {
    return this.getStringAttribute('trail_id');
  }
  public set trailId(value: string) {
    this._trailId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trailIdInput() {
    return this._trailId;
  }

  // trail_name - computed: true, optional: false, required: false
  public get trailName() {
    return this.getStringAttribute('trail_name');
  }

  // trail_save_type - computed: true, optional: false, required: false
  public get trailSaveType() {
    return this.getStringAttribute('trail_save_type');
  }

  // trail_state - computed: true, optional: false, required: false
  public get trailState() {
    return this.getStringAttribute('trail_state');
  }

  // validation_yn - computed: true, optional: false, required: false
  public get validationYn() {
    return this.getStringAttribute('validation_yn');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      trail_id: cdktf.stringToTerraform(this._trailId),
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
      trail_id: {
        value: cdktf.stringToHclTerraform(this._trailId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
