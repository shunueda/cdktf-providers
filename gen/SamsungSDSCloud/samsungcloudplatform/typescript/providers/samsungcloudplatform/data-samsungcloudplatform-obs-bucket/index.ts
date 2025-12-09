// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/obs_bucket
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformObsBucketConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/obs_bucket#id DataSamsungcloudplatformObsBucket#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Object Storage Bucket ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/obs_bucket#object_storage_bucket_id DataSamsungcloudplatformObsBucket#object_storage_bucket_id}
  */
  readonly objectStorageBucketId: string;
}
export interface DataSamsungcloudplatformObsBucketObjectStorageBucketAccessControlRules {
}

export function dataSamsungcloudplatformObsBucketObjectStorageBucketAccessControlRulesToTerraform(struct?: DataSamsungcloudplatformObsBucketObjectStorageBucketAccessControlRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformObsBucketObjectStorageBucketAccessControlRulesToHclTerraform(struct?: DataSamsungcloudplatformObsBucketObjectStorageBucketAccessControlRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformObsBucketObjectStorageBucketAccessControlRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformObsBucketObjectStorageBucketAccessControlRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformObsBucketObjectStorageBucketAccessControlRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rule_type - computed: true, optional: false, required: false
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }

  // rule_value - computed: true, optional: false, required: false
  public get ruleValue() {
    return this.getStringAttribute('rule_value');
  }
}

export class DataSamsungcloudplatformObsBucketObjectStorageBucketAccessControlRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformObsBucketObjectStorageBucketAccessControlRulesOutputReference {
    return new DataSamsungcloudplatformObsBucketObjectStorageBucketAccessControlRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/obs_bucket samsungcloudplatform_obs_bucket}
*/
export class DataSamsungcloudplatformObsBucket extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_obs_bucket";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformObsBucket resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformObsBucket to import
  * @param importFromId The id of the existing DataSamsungcloudplatformObsBucket that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/obs_bucket#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformObsBucket to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_obs_bucket", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/obs_bucket samsungcloudplatform_obs_bucket} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformObsBucketConfig
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformObsBucketConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_obs_bucket',
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
    this._id = config.id;
    this._objectStorageBucketId = config.objectStorageBucketId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_dt - computed: true, optional: false, required: false
  public get createdDt() {
    return this.getStringAttribute('created_dt');
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

  // is_multi_availability_zone - computed: true, optional: false, required: false
  public get isMultiAvailabilityZone() {
    return this.getBooleanAttribute('is_multi_availability_zone');
  }

  // is_sync_in_progress - computed: true, optional: false, required: false
  public get isSyncInProgress() {
    return this.getBooleanAttribute('is_sync_in_progress');
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

  // object_storage_bucket_access_control_rules - computed: true, optional: false, required: false
  private _objectStorageBucketAccessControlRules = new DataSamsungcloudplatformObsBucketObjectStorageBucketAccessControlRulesList(this, "object_storage_bucket_access_control_rules", false);
  public get objectStorageBucketAccessControlRules() {
    return this._objectStorageBucketAccessControlRules;
  }

  // object_storage_bucket_dr_enabled - computed: true, optional: false, required: false
  public get objectStorageBucketDrEnabled() {
    return this.getBooleanAttribute('object_storage_bucket_dr_enabled');
  }

  // object_storage_bucket_dr_type - computed: true, optional: false, required: false
  public get objectStorageBucketDrType() {
    return this.getStringAttribute('object_storage_bucket_dr_type');
  }

  // object_storage_bucket_file_encryption_algorithm - computed: true, optional: false, required: false
  public get objectStorageBucketFileEncryptionAlgorithm() {
    return this.getStringAttribute('object_storage_bucket_file_encryption_algorithm');
  }

  // object_storage_bucket_file_encryption_enabled - computed: true, optional: false, required: false
  public get objectStorageBucketFileEncryptionEnabled() {
    return this.getBooleanAttribute('object_storage_bucket_file_encryption_enabled');
  }

  // object_storage_bucket_file_encryption_type - computed: true, optional: false, required: false
  public get objectStorageBucketFileEncryptionType() {
    return this.getStringAttribute('object_storage_bucket_file_encryption_type');
  }

  // object_storage_bucket_id - computed: false, optional: false, required: true
  private _objectStorageBucketId?: string; 
  public get objectStorageBucketId() {
    return this.getStringAttribute('object_storage_bucket_id');
  }
  public set objectStorageBucketId(value: string) {
    this._objectStorageBucketId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStorageBucketIdInput() {
    return this._objectStorageBucketId;
  }

  // object_storage_bucket_name - computed: true, optional: false, required: false
  public get objectStorageBucketName() {
    return this.getStringAttribute('object_storage_bucket_name');
  }

  // object_storage_bucket_object_upload_enabled - computed: true, optional: false, required: false
  public get objectStorageBucketObjectUploadEnabled() {
    return this.getBooleanAttribute('object_storage_bucket_object_upload_enabled');
  }

  // object_storage_bucket_private_endpoint_url - computed: true, optional: false, required: false
  public get objectStorageBucketPrivateEndpointUrl() {
    return this.getStringAttribute('object_storage_bucket_private_endpoint_url');
  }

  // object_storage_bucket_public_endpoint_url - computed: true, optional: false, required: false
  public get objectStorageBucketPublicEndpointUrl() {
    return this.getStringAttribute('object_storage_bucket_public_endpoint_url');
  }

  // object_storage_bucket_purpose - computed: true, optional: false, required: false
  public get objectStorageBucketPurpose() {
    return this.getStringAttribute('object_storage_bucket_purpose');
  }

  // object_storage_bucket_state - computed: true, optional: false, required: false
  public get objectStorageBucketState() {
    return this.getStringAttribute('object_storage_bucket_state');
  }

  // object_storage_bucket_usage - computed: true, optional: false, required: false
  public get objectStorageBucketUsage() {
    return this.getStringAttribute('object_storage_bucket_usage');
  }

  // object_storage_bucket_user_purpose - computed: true, optional: false, required: false
  public get objectStorageBucketUserPurpose() {
    return this.getStringAttribute('object_storage_bucket_user_purpose');
  }

  // object_storage_bucket_version_enabled - computed: true, optional: false, required: false
  public get objectStorageBucketVersionEnabled() {
    return this.getBooleanAttribute('object_storage_bucket_version_enabled');
  }

  // object_storage_device_user_id - computed: true, optional: false, required: false
  public get objectStorageDeviceUserId() {
    return this.getStringAttribute('object_storage_device_user_id');
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

  // sync_object_storage_bucket_id - computed: true, optional: false, required: false
  public get syncObjectStorageBucketId() {
    return this.getStringAttribute('sync_object_storage_bucket_id');
  }

  // sync_object_storage_bucket_name - computed: true, optional: false, required: false
  public get syncObjectStorageBucketName() {
    return this.getStringAttribute('sync_object_storage_bucket_name');
  }

  // sync_object_storage_bucket_service_zone_id - computed: true, optional: false, required: false
  public get syncObjectStorageBucketServiceZoneId() {
    return this.getStringAttribute('sync_object_storage_bucket_service_zone_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      object_storage_bucket_id: cdktf.stringToTerraform(this._objectStorageBucketId),
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
      object_storage_bucket_id: {
        value: cdktf.stringToHclTerraform(this._objectStorageBucketId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
