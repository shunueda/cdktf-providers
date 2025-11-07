// https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/aws_xks_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCiphertrustAwsXksKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Input parameter. Alias assigned to the the XKS key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/aws_xks_key#alias DataCiphertrustAwsXksKey#alias}
  */
  readonly alias?: string[];
  /**
  * The Amazon Resource Name (ARN) of the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/aws_xks_key#arn DataCiphertrustAwsXksKey#arn}
  */
  readonly arn?: string;
  /**
  * Bypass the AWS key policy lockout safety check. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/aws_xks_key#bypass_policy_lockout_safety_check DataCiphertrustAwsXksKey#bypass_policy_lockout_safety_check}
  */
  readonly bypassPolicyLockoutSafetyCheck?: boolean | cdktf.IResolvable;
  /**
  * Description of the AWS key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/aws_xks_key#description DataCiphertrustAwsXksKey#description}
  */
  readonly description?: string;
  /**
  * XKS key ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/aws_xks_key#id DataCiphertrustAwsXksKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * CipherTrust key ID. Can be used alone to identify the key, all other parameters will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/aws_xks_key#key_id DataCiphertrustAwsXksKey#key_id}
  */
  readonly keyId?: string;
  /**
  * Source of the CMK's key material.  Options: AWS_CLOUDHSM, EXTERNAL_KEY_STORE. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/aws_xks_key#origin DataCiphertrustAwsXksKey#origin}
  */
  readonly origin?: string;
  /**
  * AWS region in which XKS key is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/aws_xks_key#region DataCiphertrustAwsXksKey#region}
  */
  readonly region?: string;
  /**
  * A list of tags assigned to the XKS key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/aws_xks_key#tags DataCiphertrustAwsXksKey#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface DataCiphertrustAwsXksKeyKeyPolicy {
}

export function dataCiphertrustAwsXksKeyKeyPolicyToTerraform(struct?: DataCiphertrustAwsXksKeyKeyPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCiphertrustAwsXksKeyKeyPolicyToHclTerraform(struct?: DataCiphertrustAwsXksKeyKeyPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCiphertrustAwsXksKeyKeyPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCiphertrustAwsXksKeyKeyPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCiphertrustAwsXksKeyKeyPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // external_accounts - computed: true, optional: false, required: false
  public get externalAccounts() {
    return this.getListAttribute('external_accounts');
  }

  // key_admins - computed: true, optional: false, required: false
  public get keyAdmins() {
    return this.getListAttribute('key_admins');
  }

  // key_admins_roles - computed: true, optional: false, required: false
  public get keyAdminsRoles() {
    return this.getListAttribute('key_admins_roles');
  }

  // key_users - computed: true, optional: false, required: false
  public get keyUsers() {
    return this.getListAttribute('key_users');
  }

  // key_users_roles - computed: true, optional: false, required: false
  public get keyUsersRoles() {
    return this.getListAttribute('key_users_roles');
  }

  // policy - computed: true, optional: false, required: false
  public get policy() {
    return this.getStringAttribute('policy');
  }

  // policy_template - computed: true, optional: false, required: false
  public get policyTemplate() {
    return this.getStringAttribute('policy_template');
  }
}

export class DataCiphertrustAwsXksKeyKeyPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataCiphertrustAwsXksKeyKeyPolicyOutputReference {
    return new DataCiphertrustAwsXksKeyKeyPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCiphertrustAwsXksKeyLocalHostedParams {
}

export function dataCiphertrustAwsXksKeyLocalHostedParamsToTerraform(struct?: DataCiphertrustAwsXksKeyLocalHostedParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCiphertrustAwsXksKeyLocalHostedParamsToHclTerraform(struct?: DataCiphertrustAwsXksKeyLocalHostedParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCiphertrustAwsXksKeyLocalHostedParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCiphertrustAwsXksKeyLocalHostedParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCiphertrustAwsXksKeyLocalHostedParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // blocked - computed: true, optional: false, required: false
  public get blocked() {
    return this.getBooleanAttribute('blocked');
  }

  // custom_key_store_id - computed: true, optional: false, required: false
  public get customKeyStoreId() {
    return this.getStringAttribute('custom_key_store_id');
  }

  // source_key_id - computed: true, optional: false, required: false
  public get sourceKeyId() {
    return this.getStringAttribute('source_key_id');
  }

  // source_key_tier - computed: true, optional: false, required: false
  public get sourceKeyTier() {
    return this.getStringAttribute('source_key_tier');
  }
}

export class DataCiphertrustAwsXksKeyLocalHostedParamsList extends cdktf.ComplexList {

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
  public get(index: number): DataCiphertrustAwsXksKeyLocalHostedParamsOutputReference {
    return new DataCiphertrustAwsXksKeyLocalHostedParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/aws_xks_key ciphertrust_aws_xks_key}
*/
export class DataCiphertrustAwsXksKey extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciphertrust_aws_xks_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCiphertrustAwsXksKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCiphertrustAwsXksKey to import
  * @param importFromId The id of the existing DataCiphertrustAwsXksKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/aws_xks_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCiphertrustAwsXksKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciphertrust_aws_xks_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/aws_xks_key ciphertrust_aws_xks_key} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCiphertrustAwsXksKeyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCiphertrustAwsXksKeyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ciphertrust_aws_xks_key',
      terraformGeneratorMetadata: {
        providerName: 'ciphertrust',
        providerVersion: '0.11.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alias = config.alias;
    this._arn = config.arn;
    this._bypassPolicyLockoutSafetyCheck = config.bypassPolicyLockoutSafetyCheck;
    this._description = config.description;
    this._id = config.id;
    this._keyId = config.keyId;
    this._origin = config.origin;
    this._region = config.region;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: true, optional: true, required: false
  private _alias?: string[]; 
  public get alias() {
    return cdktf.Fn.tolist(this.getListAttribute('alias'));
  }
  public set alias(value: string[]) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // arn - computed: true, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // auto_rotate - computed: true, optional: false, required: false
  public get autoRotate() {
    return this.getBooleanAttribute('auto_rotate');
  }

  // aws_account_id - computed: true, optional: false, required: false
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }

  // aws_custom_key_store_id - computed: true, optional: false, required: false
  public get awsCustomKeyStoreId() {
    return this.getStringAttribute('aws_custom_key_store_id');
  }

  // aws_key_id - computed: true, optional: false, required: false
  public get awsKeyId() {
    return this.getStringAttribute('aws_key_id');
  }

  // aws_xks_key_id - computed: true, optional: false, required: false
  public get awsXksKeyId() {
    return this.getStringAttribute('aws_xks_key_id');
  }

  // blocked - computed: true, optional: false, required: false
  public get blocked() {
    return this.getBooleanAttribute('blocked');
  }

  // bypass_policy_lockout_safety_check - computed: true, optional: true, required: false
  private _bypassPolicyLockoutSafetyCheck?: boolean | cdktf.IResolvable; 
  public get bypassPolicyLockoutSafetyCheck() {
    return this.getBooleanAttribute('bypass_policy_lockout_safety_check');
  }
  public set bypassPolicyLockoutSafetyCheck(value: boolean | cdktf.IResolvable) {
    this._bypassPolicyLockoutSafetyCheck = value;
  }
  public resetBypassPolicyLockoutSafetyCheck() {
    this._bypassPolicyLockoutSafetyCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassPolicyLockoutSafetyCheckInput() {
    return this._bypassPolicyLockoutSafetyCheck;
  }

  // cloud_name - computed: true, optional: false, required: false
  public get cloudName() {
    return this.getStringAttribute('cloud_name');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // custom_key_store_id - computed: true, optional: false, required: false
  public get customKeyStoreId() {
    return this.getStringAttribute('custom_key_store_id');
  }

  // customer_master_key_spec - computed: true, optional: false, required: false
  public get customerMasterKeySpec() {
    return this.getStringAttribute('customer_master_key_spec');
  }

  // deletion_date - computed: true, optional: false, required: false
  public get deletionDate() {
    return this.getStringAttribute('deletion_date');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // encryption_algorithms - computed: true, optional: false, required: false
  public get encryptionAlgorithms() {
    return this.getListAttribute('encryption_algorithms');
  }

  // expiration_model - computed: true, optional: false, required: false
  public get expirationModel() {
    return this.getStringAttribute('expiration_model');
  }

  // external_accounts - computed: true, optional: false, required: false
  public get externalAccounts() {
    return this.getListAttribute('external_accounts');
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

  // key_admins - computed: true, optional: false, required: false
  public get keyAdmins() {
    return this.getListAttribute('key_admins');
  }

  // key_admins_roles - computed: true, optional: false, required: false
  public get keyAdminsRoles() {
    return this.getListAttribute('key_admins_roles');
  }

  // key_id - computed: true, optional: true, required: false
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // key_manager - computed: true, optional: false, required: false
  public get keyManager() {
    return this.getStringAttribute('key_manager');
  }

  // key_material_origin - computed: true, optional: false, required: false
  public get keyMaterialOrigin() {
    return this.getStringAttribute('key_material_origin');
  }

  // key_policy - computed: true, optional: false, required: false
  private _keyPolicy = new DataCiphertrustAwsXksKeyKeyPolicyList(this, "key_policy", false);
  public get keyPolicy() {
    return this._keyPolicy;
  }

  // key_rotation_enabled - computed: true, optional: false, required: false
  public get keyRotationEnabled() {
    return this.getBooleanAttribute('key_rotation_enabled');
  }

  // key_source - computed: true, optional: false, required: false
  public get keySource() {
    return this.getStringAttribute('key_source');
  }

  // key_source_container_id - computed: true, optional: false, required: false
  public get keySourceContainerId() {
    return this.getStringAttribute('key_source_container_id');
  }

  // key_source_container_name - computed: true, optional: false, required: false
  public get keySourceContainerName() {
    return this.getStringAttribute('key_source_container_name');
  }

  // key_state - computed: true, optional: false, required: false
  public get keyState() {
    return this.getStringAttribute('key_state');
  }

  // key_type - computed: true, optional: false, required: false
  public get keyType() {
    return this.getStringAttribute('key_type');
  }

  // key_usage - computed: true, optional: false, required: false
  public get keyUsage() {
    return this.getStringAttribute('key_usage');
  }

  // key_users - computed: true, optional: false, required: false
  public get keyUsers() {
    return this.getListAttribute('key_users');
  }

  // key_users_roles - computed: true, optional: false, required: false
  public get keyUsersRoles() {
    return this.getListAttribute('key_users_roles');
  }

  // kms - computed: true, optional: false, required: false
  public get kms() {
    return this.getStringAttribute('kms');
  }

  // kms_id - computed: true, optional: false, required: false
  public get kmsId() {
    return this.getStringAttribute('kms_id');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // linked - computed: true, optional: false, required: false
  public get linked() {
    return this.getBooleanAttribute('linked');
  }

  // local_hosted_params - computed: true, optional: false, required: false
  private _localHostedParams = new DataCiphertrustAwsXksKeyLocalHostedParamsList(this, "local_hosted_params", false);
  public get localHostedParams() {
    return this._localHostedParams;
  }

  // local_key_id - computed: true, optional: false, required: false
  public get localKeyId() {
    return this.getStringAttribute('local_key_id');
  }

  // local_key_name - computed: true, optional: false, required: false
  public get localKeyName() {
    return this.getStringAttribute('local_key_name');
  }

  // multi_region - computed: true, optional: false, required: false
  public get multiRegion() {
    return this.getBooleanAttribute('multi_region');
  }

  // multi_region_key_type - computed: true, optional: false, required: false
  public get multiRegionKeyType() {
    return this.getStringAttribute('multi_region_key_type');
  }

  // multi_region_primary_key - computed: true, optional: false, required: false
  private _multiRegionPrimaryKey = new cdktf.StringMap(this, "multi_region_primary_key");
  public get multiRegionPrimaryKey() {
    return this._multiRegionPrimaryKey;
  }

  // multi_region_replica_keys - computed: true, optional: false, required: false
  private _multiRegionReplicaKeys = new cdktf.StringMapList(this, "multi_region_replica_keys", false);
  public get multiRegionReplicaKeys() {
    return this._multiRegionReplicaKeys;
  }

  // origin - computed: true, optional: true, required: false
  private _origin?: string; 
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  public resetOrigin() {
    this._origin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
  }

  // policy - computed: true, optional: false, required: false
  public get policy() {
    return this.getStringAttribute('policy');
  }

  // policy_template_tag - computed: true, optional: false, required: false
  private _policyTemplateTag = new cdktf.StringMap(this, "policy_template_tag");
  public get policyTemplateTag() {
    return this._policyTemplateTag;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // replica_policy - computed: true, optional: false, required: false
  public get replicaPolicy() {
    return this.getStringAttribute('replica_policy');
  }

  // rotated_at - computed: true, optional: false, required: false
  public get rotatedAt() {
    return this.getStringAttribute('rotated_at');
  }

  // rotated_from - computed: true, optional: false, required: false
  public get rotatedFrom() {
    return this.getStringAttribute('rotated_from');
  }

  // rotated_to - computed: true, optional: false, required: false
  public get rotatedTo() {
    return this.getStringAttribute('rotated_to');
  }

  // rotation_status - computed: true, optional: false, required: false
  public get rotationStatus() {
    return this.getStringAttribute('rotation_status');
  }

  // synced_at - computed: true, optional: false, required: false
  public get syncedAt() {
    return this.getStringAttribute('synced_at');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // valid_to - computed: true, optional: false, required: false
  public get validTo() {
    return this.getStringAttribute('valid_to');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alias),
      arn: cdktf.stringToTerraform(this._arn),
      bypass_policy_lockout_safety_check: cdktf.booleanToTerraform(this._bypassPolicyLockoutSafetyCheck),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      key_id: cdktf.stringToTerraform(this._keyId),
      origin: cdktf.stringToTerraform(this._origin),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alias: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._alias),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      arn: {
        value: cdktf.stringToHclTerraform(this._arn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bypass_policy_lockout_safety_check: {
        value: cdktf.booleanToHclTerraform(this._bypassPolicyLockoutSafetyCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      key_id: {
        value: cdktf.stringToHclTerraform(this._keyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      origin: {
        value: cdktf.stringToHclTerraform(this._origin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
