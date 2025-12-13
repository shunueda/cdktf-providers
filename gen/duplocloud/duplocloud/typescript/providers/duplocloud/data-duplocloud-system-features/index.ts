// https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/data-sources/system_features
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDuplocloudSystemFeaturesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/data-sources/system_features#id DataDuplocloudSystemFeatures#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataDuplocloudSystemFeaturesAppConfigs {
}

export function dataDuplocloudSystemFeaturesAppConfigsToTerraform(struct?: DataDuplocloudSystemFeaturesAppConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudSystemFeaturesAppConfigsToHclTerraform(struct?: DataDuplocloudSystemFeaturesAppConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudSystemFeaturesAppConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudSystemFeaturesAppConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudSystemFeaturesAppConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataDuplocloudSystemFeaturesAppConfigsList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudSystemFeaturesAppConfigsOutputReference {
    return new DataDuplocloudSystemFeaturesAppConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudSystemFeaturesEksVersions {
}

export function dataDuplocloudSystemFeaturesEksVersionsToTerraform(struct?: DataDuplocloudSystemFeaturesEksVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudSystemFeaturesEksVersionsToHclTerraform(struct?: DataDuplocloudSystemFeaturesEksVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudSystemFeaturesEksVersionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudSystemFeaturesEksVersions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudSystemFeaturesEksVersions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_version - computed: true, optional: false, required: false
  public get defaultVersion() {
    return this.getStringAttribute('default_version');
  }

  // supported_versions - computed: true, optional: false, required: false
  public get supportedVersions() {
    return this.getListAttribute('supported_versions');
  }
}

export class DataDuplocloudSystemFeaturesEksVersionsList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudSystemFeaturesEksVersionsOutputReference {
    return new DataDuplocloudSystemFeaturesEksVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/data-sources/system_features duplocloud_system_features}
*/
export class DataDuplocloudSystemFeatures extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_system_features";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDuplocloudSystemFeatures resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDuplocloudSystemFeatures to import
  * @param importFromId The id of the existing DataDuplocloudSystemFeatures that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/data-sources/system_features#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDuplocloudSystemFeatures to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_system_features", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/data-sources/system_features duplocloud_system_features} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDuplocloudSystemFeaturesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDuplocloudSystemFeaturesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_system_features',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.31',
        providerVersionConstraint: '0.11.31'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_configs - computed: true, optional: false, required: false
  private _appConfigs = new DataDuplocloudSystemFeaturesAppConfigsList(this, "app_configs", false);
  public get appConfigs() {
    return this._appConfigs;
  }

  // aws_regions - computed: true, optional: false, required: false
  public get awsRegions() {
    return this.getListAttribute('aws_regions');
  }

  // default_aws_account - computed: true, optional: false, required: false
  public get defaultAwsAccount() {
    return this.getStringAttribute('default_aws_account');
  }

  // default_aws_partition - computed: true, optional: false, required: false
  public get defaultAwsPartition() {
    return this.getStringAttribute('default_aws_partition');
  }

  // default_aws_region - computed: true, optional: false, required: false
  public get defaultAwsRegion() {
    return this.getStringAttribute('default_aws_region');
  }

  // default_infra_cloud - computed: true, optional: false, required: false
  public get defaultInfraCloud() {
    return this.getStringAttribute('default_infra_cloud');
  }

  // devops_manager_hostname - computed: true, optional: false, required: false
  public get devopsManagerHostname() {
    return this.getStringAttribute('devops_manager_hostname');
  }

  // disable_oob_data - computed: true, optional: false, required: false
  public get disableOobData() {
    return this.getBooleanAttribute('disable_oob_data');
  }

  // duplo_shell_fqdn - computed: true, optional: false, required: false
  public get duploShellFqdn() {
    return this.getStringAttribute('duplo_shell_fqdn');
  }

  // eks_versions - computed: true, optional: false, required: false
  private _eksVersions = new DataDuplocloudSystemFeaturesEksVersionsList(this, "eks_versions", false);
  public get eksVersions() {
    return this._eksVersions;
  }

  // enabled_flags - computed: true, optional: false, required: false
  public get enabledFlags() {
    return this.getListAttribute('enabled_flags');
  }

  // gcp_disable_duplo_prefix - computed: true, optional: false, required: false
  public get gcpDisableDuploPrefix() {
    return this.getBooleanAttribute('gcp_disable_duplo_prefix');
  }

  // gcp_disable_tenant_prefix - computed: true, optional: false, required: false
  public get gcpDisableTenantPrefix() {
    return this.getBooleanAttribute('gcp_disable_tenant_prefix');
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

  // is_aws_admin_jit_enabled - computed: true, optional: false, required: false
  public get isAwsAdminJitEnabled() {
    return this.getBooleanAttribute('is_aws_admin_jit_enabled');
  }

  // is_aws_cloud_enabled - computed: true, optional: false, required: false
  public get isAwsCloudEnabled() {
    return this.getBooleanAttribute('is_aws_cloud_enabled');
  }

  // is_azure_cloud_enabled - computed: true, optional: false, required: false
  public get isAzureCloudEnabled() {
    return this.getBooleanAttribute('is_azure_cloud_enabled');
  }

  // is_billing_enabled - computed: true, optional: false, required: false
  public get isBillingEnabled() {
    return this.getBooleanAttribute('is_billing_enabled');
  }

  // is_compliance_enabled - computed: true, optional: false, required: false
  public get isComplianceEnabled() {
    return this.getBooleanAttribute('is_compliance_enabled');
  }

  // is_duplo_ops_enabled - computed: true, optional: false, required: false
  public get isDuploOpsEnabled() {
    return this.getBooleanAttribute('is_duplo_ops_enabled');
  }

  // is_google_cloud_enabled - computed: true, optional: false, required: false
  public get isGoogleCloudEnabled() {
    return this.getBooleanAttribute('is_google_cloud_enabled');
  }

  // is_katkit_enabled - computed: true, optional: false, required: false
  public get isKatkitEnabled() {
    return this.getBooleanAttribute('is_katkit_enabled');
  }

  // is_on_prem_enabled - computed: true, optional: false, required: false
  public get isOnPremEnabled() {
    return this.getBooleanAttribute('is_on_prem_enabled');
  }

  // is_otp_needed - computed: true, optional: false, required: false
  public get isOtpNeeded() {
    return this.getBooleanAttribute('is_otp_needed');
  }

  // is_siem_enabled - computed: true, optional: false, required: false
  public get isSiemEnabled() {
    return this.getBooleanAttribute('is_siem_enabled');
  }

  // is_signup_enabled - computed: true, optional: false, required: false
  public get isSignupEnabled() {
    return this.getBooleanAttribute('is_signup_enabled');
  }

  // is_tags_based_resource_mgmt_enabled - computed: true, optional: false, required: false
  public get isTagsBasedResourceMgmtEnabled() {
    return this.getBooleanAttribute('is_tags_based_resource_mgmt_enabled');
  }

  // s3_bucket_name_prefix - computed: true, optional: false, required: false
  public get s3BucketNamePrefix() {
    return this.getStringAttribute('s3_bucket_name_prefix');
  }

  // tags_based_managed_resources - computed: true, optional: false, required: false
  public get tagsBasedManagedResources() {
    return this.getListAttribute('tags_based_managed_resources');
  }

  // tenant_name_max_length - computed: true, optional: false, required: false
  public get tenantNameMaxLength() {
    return this.getNumberAttribute('tenant_name_max_length');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
