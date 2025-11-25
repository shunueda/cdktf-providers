// https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/data-sources/cloud_aws_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCrowdstrikeCloudAwsAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter the results to a specific AWS Account ID. When specified, returns details for the matching AWS account. Can be used together with organization_id filter for OR matching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/data-sources/cloud_aws_account#account_id DataCrowdstrikeCloudAwsAccount#account_id}
  */
  readonly accountId?: string;
  /**
  * Filter the results to accounts within a specific AWS Organization. When specified, returns all AWS accounts associated with this organization ID. Can be used together with account_id filter for OR matching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/data-sources/cloud_aws_account#organization_id DataCrowdstrikeCloudAwsAccount#organization_id}
  */
  readonly organizationId?: string;
}
export interface DataCrowdstrikeCloudAwsAccountAccounts {
  /**
  * The prefix to be added to all resource names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/data-sources/cloud_aws_account#resource_name_prefix DataCrowdstrikeCloudAwsAccount#resource_name_prefix}
  */
  readonly resourceNamePrefix?: string;
  /**
  * The suffix to be added to all resource names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/data-sources/cloud_aws_account#resource_name_suffix DataCrowdstrikeCloudAwsAccount#resource_name_suffix}
  */
  readonly resourceNameSuffix?: string;
}

export function dataCrowdstrikeCloudAwsAccountAccountsToTerraform(struct?: DataCrowdstrikeCloudAwsAccountAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_name_prefix: cdktf.stringToTerraform(struct!.resourceNamePrefix),
    resource_name_suffix: cdktf.stringToTerraform(struct!.resourceNameSuffix),
  }
}


export function dataCrowdstrikeCloudAwsAccountAccountsToHclTerraform(struct?: DataCrowdstrikeCloudAwsAccountAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_name_prefix: {
      value: cdktf.stringToHclTerraform(struct!.resourceNamePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_name_suffix: {
      value: cdktf.stringToHclTerraform(struct!.resourceNameSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCrowdstrikeCloudAwsAccountAccountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCrowdstrikeCloudAwsAccountAccounts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceNamePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceNamePrefix = this._resourceNamePrefix;
    }
    if (this._resourceNameSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceNameSuffix = this._resourceNameSuffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCrowdstrikeCloudAwsAccountAccounts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceNamePrefix = undefined;
      this._resourceNameSuffix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceNamePrefix = value.resourceNamePrefix;
      this._resourceNameSuffix = value.resourceNameSuffix;
    }
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // account_type - computed: true, optional: false, required: false
  public get accountType() {
    return this.getStringAttribute('account_type');
  }

  // agentless_scanning_role_name - computed: true, optional: false, required: false
  public get agentlessScanningRoleName() {
    return this.getStringAttribute('agentless_scanning_role_name');
  }

  // asset_inventory_enabled - computed: true, optional: false, required: false
  public get assetInventoryEnabled() {
    return this.getBooleanAttribute('asset_inventory_enabled');
  }

  // cloudtrail_bucket_name - computed: true, optional: false, required: false
  public get cloudtrailBucketName() {
    return this.getStringAttribute('cloudtrail_bucket_name');
  }

  // cloudtrail_region - computed: true, optional: false, required: false
  public get cloudtrailRegion() {
    return this.getStringAttribute('cloudtrail_region');
  }

  // dspm_enabled - computed: true, optional: false, required: false
  public get dspmEnabled() {
    return this.getBooleanAttribute('dspm_enabled');
  }

  // dspm_role_arn - computed: true, optional: false, required: false
  public get dspmRoleArn() {
    return this.getStringAttribute('dspm_role_arn');
  }

  // dspm_role_name - computed: true, optional: false, required: false
  public get dspmRoleName() {
    return this.getStringAttribute('dspm_role_name');
  }

  // eventbus_arn - computed: true, optional: false, required: false
  public get eventbusArn() {
    return this.getStringAttribute('eventbus_arn');
  }

  // eventbus_name - computed: true, optional: false, required: false
  public get eventbusName() {
    return this.getStringAttribute('eventbus_name');
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // iam_role_arn - computed: true, optional: false, required: false
  public get iamRoleArn() {
    return this.getStringAttribute('iam_role_arn');
  }

  // iam_role_name - computed: true, optional: false, required: false
  public get iamRoleName() {
    return this.getStringAttribute('iam_role_name');
  }

  // idp_enabled - computed: true, optional: false, required: false
  public get idpEnabled() {
    return this.getBooleanAttribute('idp_enabled');
  }

  // intermediate_role_arn - computed: true, optional: false, required: false
  public get intermediateRoleArn() {
    return this.getStringAttribute('intermediate_role_arn');
  }

  // is_organization_management_account - computed: true, optional: false, required: false
  public get isOrganizationManagementAccount() {
    return this.getBooleanAttribute('is_organization_management_account');
  }

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }

  // realtime_visibility_enabled - computed: true, optional: false, required: false
  public get realtimeVisibilityEnabled() {
    return this.getBooleanAttribute('realtime_visibility_enabled');
  }

  // resource_name_prefix - computed: true, optional: true, required: false
  private _resourceNamePrefix?: string; 
  public get resourceNamePrefix() {
    return this.getStringAttribute('resource_name_prefix');
  }
  public set resourceNamePrefix(value: string) {
    this._resourceNamePrefix = value;
  }
  public resetResourceNamePrefix() {
    this._resourceNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNamePrefixInput() {
    return this._resourceNamePrefix;
  }

  // resource_name_suffix - computed: true, optional: true, required: false
  private _resourceNameSuffix?: string; 
  public get resourceNameSuffix() {
    return this.getStringAttribute('resource_name_suffix');
  }
  public set resourceNameSuffix(value: string) {
    this._resourceNameSuffix = value;
  }
  public resetResourceNameSuffix() {
    this._resourceNameSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameSuffixInput() {
    return this._resourceNameSuffix;
  }

  // sensor_management_enabled - computed: true, optional: false, required: false
  public get sensorManagementEnabled() {
    return this.getBooleanAttribute('sensor_management_enabled');
  }

  // target_ous - computed: true, optional: false, required: false
  public get targetOus() {
    return this.getListAttribute('target_ous');
  }

  // vulnerability_scanning_enabled - computed: true, optional: false, required: false
  public get vulnerabilityScanningEnabled() {
    return this.getBooleanAttribute('vulnerability_scanning_enabled');
  }

  // vulnerability_scanning_role_arn - computed: true, optional: false, required: false
  public get vulnerabilityScanningRoleArn() {
    return this.getStringAttribute('vulnerability_scanning_role_arn');
  }

  // vulnerability_scanning_role_name - computed: true, optional: false, required: false
  public get vulnerabilityScanningRoleName() {
    return this.getStringAttribute('vulnerability_scanning_role_name');
  }
}

export class DataCrowdstrikeCloudAwsAccountAccountsList extends cdktf.ComplexList {
  public internalValue? : DataCrowdstrikeCloudAwsAccountAccounts[] | cdktf.IResolvable

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
  public get(index: number): DataCrowdstrikeCloudAwsAccountAccountsOutputReference {
    return new DataCrowdstrikeCloudAwsAccountAccountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/data-sources/cloud_aws_account crowdstrike_cloud_aws_account}
*/
export class DataCrowdstrikeCloudAwsAccount extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "crowdstrike_cloud_aws_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCrowdstrikeCloudAwsAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCrowdstrikeCloudAwsAccount to import
  * @param importFromId The id of the existing DataCrowdstrikeCloudAwsAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/data-sources/cloud_aws_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCrowdstrikeCloudAwsAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "crowdstrike_cloud_aws_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/data-sources/cloud_aws_account crowdstrike_cloud_aws_account} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCrowdstrikeCloudAwsAccountConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCrowdstrikeCloudAwsAccountConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'crowdstrike_cloud_aws_account',
      terraformGeneratorMetadata: {
        providerName: 'crowdstrike',
        providerVersion: '0.0.48',
        providerVersionConstraint: '0.0.48'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._organizationId = config.organizationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // accounts - computed: true, optional: false, required: false
  private _accounts = new DataCrowdstrikeCloudAwsAccountAccountsList(this, "accounts", false);
  public get accounts() {
    return this._accounts;
  }

  // organization_id - computed: false, optional: true, required: false
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  public resetOrganizationId() {
    this._organizationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      organization_id: cdktf.stringToTerraform(this._organizationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
