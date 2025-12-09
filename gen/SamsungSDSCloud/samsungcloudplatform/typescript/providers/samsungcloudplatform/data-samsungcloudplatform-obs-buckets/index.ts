// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/obs_buckets
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformObsBucketsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Created By
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/obs_buckets#created_by DataSamsungcloudplatformObsBuckets#created_by}
  */
  readonly createdBy?: string;
  /**
  * Object Storage Bucket Query End Date
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/obs_buckets#end_modified_dt DataSamsungcloudplatformObsBuckets#end_modified_dt}
  */
  readonly endModifiedDt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/obs_buckets#id DataSamsungcloudplatformObsBuckets#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Object Storage Bucket ID List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/obs_buckets#object_storage_bucket_ids DataSamsungcloudplatformObsBuckets#object_storage_bucket_ids}
  */
  readonly objectStorageBucketIds?: string[];
  /**
  * Object Storage Bucket Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/obs_buckets#object_storage_bucket_name DataSamsungcloudplatformObsBuckets#object_storage_bucket_name}
  */
  readonly objectStorageBucketName?: string;
  /**
  * Object Storage Bucket Purpose Type List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/obs_buckets#object_storage_bucket_purposes DataSamsungcloudplatformObsBuckets#object_storage_bucket_purposes}
  */
  readonly objectStorageBucketPurposes?: string[];
  /**
  * Object Storage Bucket State
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/obs_buckets#object_storage_bucket_state DataSamsungcloudplatformObsBuckets#object_storage_bucket_state}
  */
  readonly objectStorageBucketState?: string;
  /**
  * Object Storage Bucket State List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/obs_buckets#object_storage_bucket_states DataSamsungcloudplatformObsBuckets#object_storage_bucket_states}
  */
  readonly objectStorageBucketStates?: string[];
  /**
  * Object Storage Bucket User Purpose
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/obs_buckets#object_storage_bucket_user_purpose DataSamsungcloudplatformObsBuckets#object_storage_bucket_user_purpose}
  */
  readonly objectStorageBucketUserPurpose?: string;
  /**
  * Object Storage ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/obs_buckets#object_storage_id DataSamsungcloudplatformObsBuckets#object_storage_id}
  */
  readonly objectStorageId?: string;
  /**
  * Object Storage Quota ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/obs_buckets#object_storage_quota_id DataSamsungcloudplatformObsBuckets#object_storage_quota_id}
  */
  readonly objectStorageQuotaId?: string;
  /**
  * Object Storage System Bucket Enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/obs_buckets#object_storage_system_bucket_enabled DataSamsungcloudplatformObsBuckets#object_storage_system_bucket_enabled}
  */
  readonly objectStorageSystemBucketEnabled?: boolean | cdktf.IResolvable;
  /**
  * Page start number from which to get the list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/obs_buckets#page DataSamsungcloudplatformObsBuckets#page}
  */
  readonly page?: number;
  /**
  * Service Zone ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/obs_buckets#service_zone_id DataSamsungcloudplatformObsBuckets#service_zone_id}
  */
  readonly serviceZoneId?: string;
  /**
  * Size to get list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/obs_buckets#size DataSamsungcloudplatformObsBuckets#size}
  */
  readonly size?: number;
  /**
  * Sort
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/obs_buckets#sort DataSamsungcloudplatformObsBuckets#sort}
  */
  readonly sort?: string[];
  /**
  * Object Storage Bucket Query Start Date
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/obs_buckets#start_modified_dt DataSamsungcloudplatformObsBuckets#start_modified_dt}
  */
  readonly startModifiedDt?: string;
}
export interface DataSamsungcloudplatformObsBucketsContents {
}

export function dataSamsungcloudplatformObsBucketsContentsToTerraform(struct?: DataSamsungcloudplatformObsBucketsContents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformObsBucketsContentsToHclTerraform(struct?: DataSamsungcloudplatformObsBucketsContents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformObsBucketsContentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformObsBucketsContents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformObsBucketsContents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_dt - computed: true, optional: false, required: false
  public get createdDt() {
    return this.getStringAttribute('created_dt');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_dt - computed: true, optional: false, required: false
  public get modifiedDt() {
    return this.getStringAttribute('modified_dt');
  }

  // object_storage_bucket_access_control_enabled - computed: true, optional: false, required: false
  public get objectStorageBucketAccessControlEnabled() {
    return this.getBooleanAttribute('object_storage_bucket_access_control_enabled');
  }

  // object_storage_bucket_dr_enabled - computed: true, optional: false, required: false
  public get objectStorageBucketDrEnabled() {
    return this.getBooleanAttribute('object_storage_bucket_dr_enabled');
  }

  // object_storage_bucket_dr_type - computed: true, optional: false, required: false
  public get objectStorageBucketDrType() {
    return this.getStringAttribute('object_storage_bucket_dr_type');
  }

  // object_storage_bucket_id - computed: true, optional: false, required: false
  public get objectStorageBucketId() {
    return this.getStringAttribute('object_storage_bucket_id');
  }

  // object_storage_bucket_name - computed: true, optional: false, required: false
  public get objectStorageBucketName() {
    return this.getStringAttribute('object_storage_bucket_name');
  }

  // object_storage_bucket_purpose - computed: true, optional: false, required: false
  public get objectStorageBucketPurpose() {
    return this.getStringAttribute('object_storage_bucket_purpose');
  }

  // object_storage_bucket_state - computed: true, optional: false, required: false
  public get objectStorageBucketState() {
    return this.getStringAttribute('object_storage_bucket_state');
  }

  // object_storage_bucket_user_purpose - computed: true, optional: false, required: false
  public get objectStorageBucketUserPurpose() {
    return this.getStringAttribute('object_storage_bucket_user_purpose');
  }

  // object_storage_bucket_version_enabled - computed: true, optional: false, required: false
  public get objectStorageBucketVersionEnabled() {
    return this.getBooleanAttribute('object_storage_bucket_version_enabled');
  }

  // object_storage_id - computed: true, optional: false, required: false
  public get objectStorageId() {
    return this.getStringAttribute('object_storage_id');
  }

  // object_storage_name - computed: true, optional: false, required: false
  public get objectStorageName() {
    return this.getStringAttribute('object_storage_name');
  }

  // object_storage_quota_id - computed: true, optional: false, required: false
  public get objectStorageQuotaId() {
    return this.getStringAttribute('object_storage_quota_id');
  }

  // object_storage_quota_name - computed: true, optional: false, required: false
  public get objectStorageQuotaName() {
    return this.getStringAttribute('object_storage_quota_name');
  }

  // object_storage_system_bucket_enabled - computed: true, optional: false, required: false
  public get objectStorageSystemBucketEnabled() {
    return this.getBooleanAttribute('object_storage_system_bucket_enabled');
  }

  // object_storage_tenant_name - computed: true, optional: false, required: false
  public get objectStorageTenantName() {
    return this.getStringAttribute('object_storage_tenant_name');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // service_zone_id - computed: true, optional: false, required: false
  public get serviceZoneId() {
    return this.getStringAttribute('service_zone_id');
  }
}

export class DataSamsungcloudplatformObsBucketsContentsList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformObsBucketsContentsOutputReference {
    return new DataSamsungcloudplatformObsBucketsContentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/obs_buckets samsungcloudplatform_obs_buckets}
*/
export class DataSamsungcloudplatformObsBuckets extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_obs_buckets";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformObsBuckets resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformObsBuckets to import
  * @param importFromId The id of the existing DataSamsungcloudplatformObsBuckets that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/obs_buckets#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformObsBuckets to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_obs_buckets", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/obs_buckets samsungcloudplatform_obs_buckets} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformObsBucketsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformObsBucketsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_obs_buckets',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.16.0',
        providerVersionConstraint: '3.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._createdBy = config.createdBy;
    this._endModifiedDt = config.endModifiedDt;
    this._id = config.id;
    this._objectStorageBucketIds = config.objectStorageBucketIds;
    this._objectStorageBucketName = config.objectStorageBucketName;
    this._objectStorageBucketPurposes = config.objectStorageBucketPurposes;
    this._objectStorageBucketState = config.objectStorageBucketState;
    this._objectStorageBucketStates = config.objectStorageBucketStates;
    this._objectStorageBucketUserPurpose = config.objectStorageBucketUserPurpose;
    this._objectStorageId = config.objectStorageId;
    this._objectStorageQuotaId = config.objectStorageQuotaId;
    this._objectStorageSystemBucketEnabled = config.objectStorageSystemBucketEnabled;
    this._page = config.page;
    this._serviceZoneId = config.serviceZoneId;
    this._size = config.size;
    this._sort = config.sort;
    this._startModifiedDt = config.startModifiedDt;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contents - computed: true, optional: false, required: false
  private _contents = new DataSamsungcloudplatformObsBucketsContentsList(this, "contents", false);
  public get contents() {
    return this._contents;
  }

  // created_by - computed: false, optional: true, required: false
  private _createdBy?: string; 
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }
  public set createdBy(value: string) {
    this._createdBy = value;
  }
  public resetCreatedBy() {
    this._createdBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
  }

  // end_modified_dt - computed: false, optional: true, required: false
  private _endModifiedDt?: string; 
  public get endModifiedDt() {
    return this.getStringAttribute('end_modified_dt');
  }
  public set endModifiedDt(value: string) {
    this._endModifiedDt = value;
  }
  public resetEndModifiedDt() {
    this._endModifiedDt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endModifiedDtInput() {
    return this._endModifiedDt;
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

  // object_storage_bucket_ids - computed: false, optional: true, required: false
  private _objectStorageBucketIds?: string[]; 
  public get objectStorageBucketIds() {
    return this.getListAttribute('object_storage_bucket_ids');
  }
  public set objectStorageBucketIds(value: string[]) {
    this._objectStorageBucketIds = value;
  }
  public resetObjectStorageBucketIds() {
    this._objectStorageBucketIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStorageBucketIdsInput() {
    return this._objectStorageBucketIds;
  }

  // object_storage_bucket_name - computed: false, optional: true, required: false
  private _objectStorageBucketName?: string; 
  public get objectStorageBucketName() {
    return this.getStringAttribute('object_storage_bucket_name');
  }
  public set objectStorageBucketName(value: string) {
    this._objectStorageBucketName = value;
  }
  public resetObjectStorageBucketName() {
    this._objectStorageBucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStorageBucketNameInput() {
    return this._objectStorageBucketName;
  }

  // object_storage_bucket_purposes - computed: false, optional: true, required: false
  private _objectStorageBucketPurposes?: string[]; 
  public get objectStorageBucketPurposes() {
    return this.getListAttribute('object_storage_bucket_purposes');
  }
  public set objectStorageBucketPurposes(value: string[]) {
    this._objectStorageBucketPurposes = value;
  }
  public resetObjectStorageBucketPurposes() {
    this._objectStorageBucketPurposes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStorageBucketPurposesInput() {
    return this._objectStorageBucketPurposes;
  }

  // object_storage_bucket_state - computed: false, optional: true, required: false
  private _objectStorageBucketState?: string; 
  public get objectStorageBucketState() {
    return this.getStringAttribute('object_storage_bucket_state');
  }
  public set objectStorageBucketState(value: string) {
    this._objectStorageBucketState = value;
  }
  public resetObjectStorageBucketState() {
    this._objectStorageBucketState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStorageBucketStateInput() {
    return this._objectStorageBucketState;
  }

  // object_storage_bucket_states - computed: false, optional: true, required: false
  private _objectStorageBucketStates?: string[]; 
  public get objectStorageBucketStates() {
    return this.getListAttribute('object_storage_bucket_states');
  }
  public set objectStorageBucketStates(value: string[]) {
    this._objectStorageBucketStates = value;
  }
  public resetObjectStorageBucketStates() {
    this._objectStorageBucketStates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStorageBucketStatesInput() {
    return this._objectStorageBucketStates;
  }

  // object_storage_bucket_user_purpose - computed: false, optional: true, required: false
  private _objectStorageBucketUserPurpose?: string; 
  public get objectStorageBucketUserPurpose() {
    return this.getStringAttribute('object_storage_bucket_user_purpose');
  }
  public set objectStorageBucketUserPurpose(value: string) {
    this._objectStorageBucketUserPurpose = value;
  }
  public resetObjectStorageBucketUserPurpose() {
    this._objectStorageBucketUserPurpose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStorageBucketUserPurposeInput() {
    return this._objectStorageBucketUserPurpose;
  }

  // object_storage_id - computed: false, optional: true, required: false
  private _objectStorageId?: string; 
  public get objectStorageId() {
    return this.getStringAttribute('object_storage_id');
  }
  public set objectStorageId(value: string) {
    this._objectStorageId = value;
  }
  public resetObjectStorageId() {
    this._objectStorageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStorageIdInput() {
    return this._objectStorageId;
  }

  // object_storage_quota_id - computed: false, optional: true, required: false
  private _objectStorageQuotaId?: string; 
  public get objectStorageQuotaId() {
    return this.getStringAttribute('object_storage_quota_id');
  }
  public set objectStorageQuotaId(value: string) {
    this._objectStorageQuotaId = value;
  }
  public resetObjectStorageQuotaId() {
    this._objectStorageQuotaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStorageQuotaIdInput() {
    return this._objectStorageQuotaId;
  }

  // object_storage_system_bucket_enabled - computed: false, optional: true, required: false
  private _objectStorageSystemBucketEnabled?: boolean | cdktf.IResolvable; 
  public get objectStorageSystemBucketEnabled() {
    return this.getBooleanAttribute('object_storage_system_bucket_enabled');
  }
  public set objectStorageSystemBucketEnabled(value: boolean | cdktf.IResolvable) {
    this._objectStorageSystemBucketEnabled = value;
  }
  public resetObjectStorageSystemBucketEnabled() {
    this._objectStorageSystemBucketEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStorageSystemBucketEnabledInput() {
    return this._objectStorageSystemBucketEnabled;
  }

  // page - computed: false, optional: true, required: false
  private _page?: number; 
  public get page() {
    return this.getNumberAttribute('page');
  }
  public set page(value: number) {
    this._page = value;
  }
  public resetPage() {
    this._page = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageInput() {
    return this._page;
  }

  // service_zone_id - computed: false, optional: true, required: false
  private _serviceZoneId?: string; 
  public get serviceZoneId() {
    return this.getStringAttribute('service_zone_id');
  }
  public set serviceZoneId(value: string) {
    this._serviceZoneId = value;
  }
  public resetServiceZoneId() {
    this._serviceZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceZoneIdInput() {
    return this._serviceZoneId;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // sort - computed: false, optional: true, required: false
  private _sort?: string[]; 
  public get sort() {
    return this.getListAttribute('sort');
  }
  public set sort(value: string[]) {
    this._sort = value;
  }
  public resetSort() {
    this._sort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortInput() {
    return this._sort;
  }

  // start_modified_dt - computed: false, optional: true, required: false
  private _startModifiedDt?: string; 
  public get startModifiedDt() {
    return this.getStringAttribute('start_modified_dt');
  }
  public set startModifiedDt(value: string) {
    this._startModifiedDt = value;
  }
  public resetStartModifiedDt() {
    this._startModifiedDt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startModifiedDtInput() {
    return this._startModifiedDt;
  }

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      created_by: cdktf.stringToTerraform(this._createdBy),
      end_modified_dt: cdktf.stringToTerraform(this._endModifiedDt),
      id: cdktf.stringToTerraform(this._id),
      object_storage_bucket_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._objectStorageBucketIds),
      object_storage_bucket_name: cdktf.stringToTerraform(this._objectStorageBucketName),
      object_storage_bucket_purposes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._objectStorageBucketPurposes),
      object_storage_bucket_state: cdktf.stringToTerraform(this._objectStorageBucketState),
      object_storage_bucket_states: cdktf.listMapper(cdktf.stringToTerraform, false)(this._objectStorageBucketStates),
      object_storage_bucket_user_purpose: cdktf.stringToTerraform(this._objectStorageBucketUserPurpose),
      object_storage_id: cdktf.stringToTerraform(this._objectStorageId),
      object_storage_quota_id: cdktf.stringToTerraform(this._objectStorageQuotaId),
      object_storage_system_bucket_enabled: cdktf.booleanToTerraform(this._objectStorageSystemBucketEnabled),
      page: cdktf.numberToTerraform(this._page),
      service_zone_id: cdktf.stringToTerraform(this._serviceZoneId),
      size: cdktf.numberToTerraform(this._size),
      sort: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sort),
      start_modified_dt: cdktf.stringToTerraform(this._startModifiedDt),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      created_by: {
        value: cdktf.stringToHclTerraform(this._createdBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_modified_dt: {
        value: cdktf.stringToHclTerraform(this._endModifiedDt),
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
      object_storage_bucket_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._objectStorageBucketIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      object_storage_bucket_name: {
        value: cdktf.stringToHclTerraform(this._objectStorageBucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_storage_bucket_purposes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._objectStorageBucketPurposes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      object_storage_bucket_state: {
        value: cdktf.stringToHclTerraform(this._objectStorageBucketState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_storage_bucket_states: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._objectStorageBucketStates),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      object_storage_bucket_user_purpose: {
        value: cdktf.stringToHclTerraform(this._objectStorageBucketUserPurpose),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_storage_id: {
        value: cdktf.stringToHclTerraform(this._objectStorageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_storage_quota_id: {
        value: cdktf.stringToHclTerraform(this._objectStorageQuotaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_storage_system_bucket_enabled: {
        value: cdktf.booleanToHclTerraform(this._objectStorageSystemBucketEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      page: {
        value: cdktf.numberToHclTerraform(this._page),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_zone_id: {
        value: cdktf.stringToHclTerraform(this._serviceZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sort: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sort),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      start_modified_dt: {
        value: cdktf.stringToHclTerraform(this._startModifiedDt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
