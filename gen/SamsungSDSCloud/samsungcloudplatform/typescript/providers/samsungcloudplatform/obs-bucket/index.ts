// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/obs_bucket
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObsBucketConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/obs_bucket#id ObsBucket#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Object Storage Bucket Access Control Enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/obs_bucket#object_storage_bucket_access_control_enabled ObsBucket#object_storage_bucket_access_control_enabled}
  */
  readonly objectStorageBucketAccessControlEnabled?: boolean | cdktf.IResolvable;
  /**
  * Object Storage Bucket DR Enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/obs_bucket#object_storage_bucket_dr_enabled ObsBucket#object_storage_bucket_dr_enabled}
  */
  readonly objectStorageBucketDrEnabled?: boolean | cdktf.IResolvable;
  /**
  * Object Storage Bucket File Encryption Enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/obs_bucket#object_storage_bucket_file_encryption_enabled ObsBucket#object_storage_bucket_file_encryption_enabled}
  */
  readonly objectStorageBucketFileEncryptionEnabled: boolean | cdktf.IResolvable;
  /**
  * Object Storage Bucket Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/obs_bucket#object_storage_bucket_name ObsBucket#object_storage_bucket_name}
  */
  readonly objectStorageBucketName: string;
  /**
  * Object Storage Bucket User Purpose
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/obs_bucket#object_storage_bucket_user_purpose ObsBucket#object_storage_bucket_user_purpose}
  */
  readonly objectStorageBucketUserPurpose?: string;
  /**
  * Object Storage Bucket Version Enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/obs_bucket#object_storage_bucket_version_enabled ObsBucket#object_storage_bucket_version_enabled}
  */
  readonly objectStorageBucketVersionEnabled: boolean | cdktf.IResolvable;
  /**
  * Object Storage ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/obs_bucket#object_storage_id ObsBucket#object_storage_id}
  */
  readonly objectStorageId: string;
  /**
  * Product Names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/obs_bucket#product_names ObsBucket#product_names}
  */
  readonly productNames: string[];
  /**
  * Service Zone ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/obs_bucket#service_zone_id ObsBucket#service_zone_id}
  */
  readonly serviceZoneId: string;
  /**
  * Sync Object Storage Bucket ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/obs_bucket#sync_object_storage_bucket_id ObsBucket#sync_object_storage_bucket_id}
  */
  readonly syncObjectStorageBucketId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/obs_bucket#tags ObsBucket#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * access_control_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/obs_bucket#access_control_rules ObsBucket#access_control_rules}
  */
  readonly accessControlRules?: ObsBucketAccessControlRules[] | cdktf.IResolvable;
}
export interface ObsBucketAccessControlRules {
  /**
  * Access Control Rule Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/obs_bucket#rule_type ObsBucket#rule_type}
  */
  readonly ruleType?: string;
  /**
  * Access Control Rule Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/obs_bucket#rule_value ObsBucket#rule_value}
  */
  readonly ruleValue?: string;
}

export function obsBucketAccessControlRulesToTerraform(struct?: ObsBucketAccessControlRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule_type: cdktf.stringToTerraform(struct!.ruleType),
    rule_value: cdktf.stringToTerraform(struct!.ruleValue),
  }
}


export function obsBucketAccessControlRulesToHclTerraform(struct?: ObsBucketAccessControlRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule_type: {
      value: cdktf.stringToHclTerraform(struct!.ruleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_value: {
      value: cdktf.stringToHclTerraform(struct!.ruleValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObsBucketAccessControlRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObsBucketAccessControlRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ruleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleType = this._ruleType;
    }
    if (this._ruleValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleValue = this._ruleValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObsBucketAccessControlRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ruleType = undefined;
      this._ruleValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ruleType = value.ruleType;
      this._ruleValue = value.ruleValue;
    }
  }

  // rule_type - computed: false, optional: true, required: false
  private _ruleType?: string; 
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }
  public set ruleType(value: string) {
    this._ruleType = value;
  }
  public resetRuleType() {
    this._ruleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeInput() {
    return this._ruleType;
  }

  // rule_value - computed: false, optional: true, required: false
  private _ruleValue?: string; 
  public get ruleValue() {
    return this.getStringAttribute('rule_value');
  }
  public set ruleValue(value: string) {
    this._ruleValue = value;
  }
  public resetRuleValue() {
    this._ruleValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleValueInput() {
    return this._ruleValue;
  }
}

export class ObsBucketAccessControlRulesList extends cdktf.ComplexList {
  public internalValue? : ObsBucketAccessControlRules[] | cdktf.IResolvable

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
  public get(index: number): ObsBucketAccessControlRulesOutputReference {
    return new ObsBucketAccessControlRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/obs_bucket samsungcloudplatform_obs_bucket}
*/
export class ObsBucket extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_obs_bucket";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObsBucket resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObsBucket to import
  * @param importFromId The id of the existing ObsBucket that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/obs_bucket#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObsBucket to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_obs_bucket", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/obs_bucket samsungcloudplatform_obs_bucket} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObsBucketConfig
  */
  public constructor(scope: Construct, id: string, config: ObsBucketConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_obs_bucket',
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
    this._objectStorageBucketAccessControlEnabled = config.objectStorageBucketAccessControlEnabled;
    this._objectStorageBucketDrEnabled = config.objectStorageBucketDrEnabled;
    this._objectStorageBucketFileEncryptionEnabled = config.objectStorageBucketFileEncryptionEnabled;
    this._objectStorageBucketName = config.objectStorageBucketName;
    this._objectStorageBucketUserPurpose = config.objectStorageBucketUserPurpose;
    this._objectStorageBucketVersionEnabled = config.objectStorageBucketVersionEnabled;
    this._objectStorageId = config.objectStorageId;
    this._productNames = config.productNames;
    this._serviceZoneId = config.serviceZoneId;
    this._syncObjectStorageBucketId = config.syncObjectStorageBucketId;
    this._tags = config.tags;
    this._accessControlRules.internalValue = config.accessControlRules;
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

  // object_storage_bucket_access_control_enabled - computed: false, optional: true, required: false
  private _objectStorageBucketAccessControlEnabled?: boolean | cdktf.IResolvable; 
  public get objectStorageBucketAccessControlEnabled() {
    return this.getBooleanAttribute('object_storage_bucket_access_control_enabled');
  }
  public set objectStorageBucketAccessControlEnabled(value: boolean | cdktf.IResolvable) {
    this._objectStorageBucketAccessControlEnabled = value;
  }
  public resetObjectStorageBucketAccessControlEnabled() {
    this._objectStorageBucketAccessControlEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStorageBucketAccessControlEnabledInput() {
    return this._objectStorageBucketAccessControlEnabled;
  }

  // object_storage_bucket_dr_enabled - computed: false, optional: true, required: false
  private _objectStorageBucketDrEnabled?: boolean | cdktf.IResolvable; 
  public get objectStorageBucketDrEnabled() {
    return this.getBooleanAttribute('object_storage_bucket_dr_enabled');
  }
  public set objectStorageBucketDrEnabled(value: boolean | cdktf.IResolvable) {
    this._objectStorageBucketDrEnabled = value;
  }
  public resetObjectStorageBucketDrEnabled() {
    this._objectStorageBucketDrEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStorageBucketDrEnabledInput() {
    return this._objectStorageBucketDrEnabled;
  }

  // object_storage_bucket_dr_type - computed: true, optional: false, required: false
  public get objectStorageBucketDrType() {
    return this.getStringAttribute('object_storage_bucket_dr_type');
  }

  // object_storage_bucket_file_encryption_enabled - computed: false, optional: false, required: true
  private _objectStorageBucketFileEncryptionEnabled?: boolean | cdktf.IResolvable; 
  public get objectStorageBucketFileEncryptionEnabled() {
    return this.getBooleanAttribute('object_storage_bucket_file_encryption_enabled');
  }
  public set objectStorageBucketFileEncryptionEnabled(value: boolean | cdktf.IResolvable) {
    this._objectStorageBucketFileEncryptionEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStorageBucketFileEncryptionEnabledInput() {
    return this._objectStorageBucketFileEncryptionEnabled;
  }

  // object_storage_bucket_name - computed: false, optional: false, required: true
  private _objectStorageBucketName?: string; 
  public get objectStorageBucketName() {
    return this.getStringAttribute('object_storage_bucket_name');
  }
  public set objectStorageBucketName(value: string) {
    this._objectStorageBucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStorageBucketNameInput() {
    return this._objectStorageBucketName;
  }

  // object_storage_bucket_purpose - computed: true, optional: false, required: false
  public get objectStorageBucketPurpose() {
    return this.getStringAttribute('object_storage_bucket_purpose');
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

  // object_storage_bucket_version_enabled - computed: false, optional: false, required: true
  private _objectStorageBucketVersionEnabled?: boolean | cdktf.IResolvable; 
  public get objectStorageBucketVersionEnabled() {
    return this.getBooleanAttribute('object_storage_bucket_version_enabled');
  }
  public set objectStorageBucketVersionEnabled(value: boolean | cdktf.IResolvable) {
    this._objectStorageBucketVersionEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStorageBucketVersionEnabledInput() {
    return this._objectStorageBucketVersionEnabled;
  }

  // object_storage_id - computed: false, optional: false, required: true
  private _objectStorageId?: string; 
  public get objectStorageId() {
    return this.getStringAttribute('object_storage_id');
  }
  public set objectStorageId(value: string) {
    this._objectStorageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStorageIdInput() {
    return this._objectStorageId;
  }

  // product_names - computed: false, optional: false, required: true
  private _productNames?: string[]; 
  public get productNames() {
    return this.getListAttribute('product_names');
  }
  public set productNames(value: string[]) {
    this._productNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productNamesInput() {
    return this._productNames;
  }

  // service_zone_id - computed: false, optional: false, required: true
  private _serviceZoneId?: string; 
  public get serviceZoneId() {
    return this.getStringAttribute('service_zone_id');
  }
  public set serviceZoneId(value: string) {
    this._serviceZoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceZoneIdInput() {
    return this._serviceZoneId;
  }

  // sync_object_storage_bucket_id - computed: false, optional: true, required: false
  private _syncObjectStorageBucketId?: string; 
  public get syncObjectStorageBucketId() {
    return this.getStringAttribute('sync_object_storage_bucket_id');
  }
  public set syncObjectStorageBucketId(value: string) {
    this._syncObjectStorageBucketId = value;
  }
  public resetSyncObjectStorageBucketId() {
    this._syncObjectStorageBucketId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncObjectStorageBucketIdInput() {
    return this._syncObjectStorageBucketId;
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

  // access_control_rules - computed: false, optional: true, required: false
  private _accessControlRules = new ObsBucketAccessControlRulesList(this, "access_control_rules", false);
  public get accessControlRules() {
    return this._accessControlRules;
  }
  public putAccessControlRules(value: ObsBucketAccessControlRules[] | cdktf.IResolvable) {
    this._accessControlRules.internalValue = value;
  }
  public resetAccessControlRules() {
    this._accessControlRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlRulesInput() {
    return this._accessControlRules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      object_storage_bucket_access_control_enabled: cdktf.booleanToTerraform(this._objectStorageBucketAccessControlEnabled),
      object_storage_bucket_dr_enabled: cdktf.booleanToTerraform(this._objectStorageBucketDrEnabled),
      object_storage_bucket_file_encryption_enabled: cdktf.booleanToTerraform(this._objectStorageBucketFileEncryptionEnabled),
      object_storage_bucket_name: cdktf.stringToTerraform(this._objectStorageBucketName),
      object_storage_bucket_user_purpose: cdktf.stringToTerraform(this._objectStorageBucketUserPurpose),
      object_storage_bucket_version_enabled: cdktf.booleanToTerraform(this._objectStorageBucketVersionEnabled),
      object_storage_id: cdktf.stringToTerraform(this._objectStorageId),
      product_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._productNames),
      service_zone_id: cdktf.stringToTerraform(this._serviceZoneId),
      sync_object_storage_bucket_id: cdktf.stringToTerraform(this._syncObjectStorageBucketId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      access_control_rules: cdktf.listMapper(obsBucketAccessControlRulesToTerraform, true)(this._accessControlRules.internalValue),
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
      object_storage_bucket_access_control_enabled: {
        value: cdktf.booleanToHclTerraform(this._objectStorageBucketAccessControlEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      object_storage_bucket_dr_enabled: {
        value: cdktf.booleanToHclTerraform(this._objectStorageBucketDrEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      object_storage_bucket_file_encryption_enabled: {
        value: cdktf.booleanToHclTerraform(this._objectStorageBucketFileEncryptionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      object_storage_bucket_name: {
        value: cdktf.stringToHclTerraform(this._objectStorageBucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_storage_bucket_user_purpose: {
        value: cdktf.stringToHclTerraform(this._objectStorageBucketUserPurpose),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_storage_bucket_version_enabled: {
        value: cdktf.booleanToHclTerraform(this._objectStorageBucketVersionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      object_storage_id: {
        value: cdktf.stringToHclTerraform(this._objectStorageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._productNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      service_zone_id: {
        value: cdktf.stringToHclTerraform(this._serviceZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_object_storage_bucket_id: {
        value: cdktf.stringToHclTerraform(this._syncObjectStorageBucketId),
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
      access_control_rules: {
        value: cdktf.listMapperHcl(obsBucketAccessControlRulesToHclTerraform, true)(this._accessControlRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObsBucketAccessControlRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
