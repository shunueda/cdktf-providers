// https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/cloud_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/cloud_account#aws_access_key_id CloudAccount#aws_access_key_id}
  */
  readonly awsAccessKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/cloud_account#aws_access_secret CloudAccount#aws_access_secret}
  */
  readonly awsAccessSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/cloud_account#aws_account_number CloudAccount#aws_account_number}
  */
  readonly awsAccountNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/cloud_account#aws_credentials_type CloudAccount#aws_credentials_type}
  */
  readonly awsCredentialsType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/cloud_account#aws_iam_role CloudAccount#aws_iam_role}
  */
  readonly awsIamRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/cloud_account#aws_iam_role_external_id CloudAccount#aws_iam_role_external_id}
  */
  readonly awsIamRoleExternalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/cloud_account#aws_inventory_iam_role CloudAccount#aws_inventory_iam_role}
  */
  readonly awsInventoryIamRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/cloud_account#azure_application_id CloudAccount#azure_application_id}
  */
  readonly azureApplicationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/cloud_account#azure_client_secret CloudAccount#azure_client_secret}
  */
  readonly azureClientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/cloud_account#azure_directory_id CloudAccount#azure_directory_id}
  */
  readonly azureDirectoryId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/cloud_account#azure_subscription_id CloudAccount#azure_subscription_id}
  */
  readonly azureSubscriptionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/cloud_account#csp_type CloudAccount#csp_type}
  */
  readonly cspType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/cloud_account#description CloudAccount#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/cloud_account#gcp_credentials_file CloudAccount#gcp_credentials_file}
  */
  readonly gcpCredentialsFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/cloud_account#gcp_folder_id CloudAccount#gcp_folder_id}
  */
  readonly gcpFolderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/cloud_account#gcp_project_id CloudAccount#gcp_project_id}
  */
  readonly gcpProjectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/cloud_account#id CloudAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/cloud_account#name CloudAccount#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/cloud_account#private_key CloudAccount#private_key}
  */
  readonly privateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/cloud_account#tenant_ocid CloudAccount#tenant_ocid}
  */
  readonly tenantOcid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/cloud_account#user_ocid CloudAccount#user_ocid}
  */
  readonly userOcid?: string;
  /**
  * inventory_monitoring block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/cloud_account#inventory_monitoring CloudAccount#inventory_monitoring}
  */
  readonly inventoryMonitoring?: CloudAccountInventoryMonitoring[] | cdktf.IResolvable;
}
export interface CloudAccountInventoryMonitoring {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/cloud_account#refresh_interval CloudAccount#refresh_interval}
  */
  readonly refreshInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/cloud_account#regions CloudAccount#regions}
  */
  readonly regions: string[];
}

export function cloudAccountInventoryMonitoringToTerraform(struct?: CloudAccountInventoryMonitoring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    refresh_interval: cdktf.numberToTerraform(struct!.refreshInterval),
    regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regions),
  }
}


export function cloudAccountInventoryMonitoringToHclTerraform(struct?: CloudAccountInventoryMonitoring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    refresh_interval: {
      value: cdktf.numberToHclTerraform(struct!.refreshInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAccountInventoryMonitoringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudAccountInventoryMonitoring | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._refreshInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshInterval = this._refreshInterval;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAccountInventoryMonitoring | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._refreshInterval = undefined;
      this._regions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._refreshInterval = value.refreshInterval;
      this._regions = value.regions;
    }
  }

  // refresh_interval - computed: false, optional: true, required: false
  private _refreshInterval?: number; 
  public get refreshInterval() {
    return this.getNumberAttribute('refresh_interval');
  }
  public set refreshInterval(value: number) {
    this._refreshInterval = value;
  }
  public resetRefreshInterval() {
    this._refreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshIntervalInput() {
    return this._refreshInterval;
  }

  // regions - computed: false, optional: false, required: true
  private _regions?: string[]; 
  public get regions() {
    return cdktf.Fn.tolist(this.getListAttribute('regions'));
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }
}

export class CloudAccountInventoryMonitoringList extends cdktf.ComplexList {
  public internalValue? : CloudAccountInventoryMonitoring[] | cdktf.IResolvable

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
  public get(index: number): CloudAccountInventoryMonitoringOutputReference {
    return new CloudAccountInventoryMonitoringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/cloud_account valtix_cloud_account}
*/
export class CloudAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "valtix_cloud_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudAccount to import
  * @param importFromId The id of the existing CloudAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/cloud_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "valtix_cloud_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/cloud_account valtix_cloud_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudAccountConfig
  */
  public constructor(scope: Construct, id: string, config: CloudAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'valtix_cloud_account',
      terraformGeneratorMetadata: {
        providerName: 'valtix',
        providerVersion: '25.9.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awsAccessKeyId = config.awsAccessKeyId;
    this._awsAccessSecret = config.awsAccessSecret;
    this._awsAccountNumber = config.awsAccountNumber;
    this._awsCredentialsType = config.awsCredentialsType;
    this._awsIamRole = config.awsIamRole;
    this._awsIamRoleExternalId = config.awsIamRoleExternalId;
    this._awsInventoryIamRole = config.awsInventoryIamRole;
    this._azureApplicationId = config.azureApplicationId;
    this._azureClientSecret = config.azureClientSecret;
    this._azureDirectoryId = config.azureDirectoryId;
    this._azureSubscriptionId = config.azureSubscriptionId;
    this._cspType = config.cspType;
    this._description = config.description;
    this._gcpCredentialsFile = config.gcpCredentialsFile;
    this._gcpFolderId = config.gcpFolderId;
    this._gcpProjectId = config.gcpProjectId;
    this._id = config.id;
    this._name = config.name;
    this._privateKey = config.privateKey;
    this._tenantOcid = config.tenantOcid;
    this._userOcid = config.userOcid;
    this._inventoryMonitoring.internalValue = config.inventoryMonitoring;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_access_key_id - computed: false, optional: true, required: false
  private _awsAccessKeyId?: string; 
  public get awsAccessKeyId() {
    return this.getStringAttribute('aws_access_key_id');
  }
  public set awsAccessKeyId(value: string) {
    this._awsAccessKeyId = value;
  }
  public resetAwsAccessKeyId() {
    this._awsAccessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccessKeyIdInput() {
    return this._awsAccessKeyId;
  }

  // aws_access_secret - computed: false, optional: true, required: false
  private _awsAccessSecret?: string; 
  public get awsAccessSecret() {
    return this.getStringAttribute('aws_access_secret');
  }
  public set awsAccessSecret(value: string) {
    this._awsAccessSecret = value;
  }
  public resetAwsAccessSecret() {
    this._awsAccessSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccessSecretInput() {
    return this._awsAccessSecret;
  }

  // aws_account_number - computed: false, optional: true, required: false
  private _awsAccountNumber?: string; 
  public get awsAccountNumber() {
    return this.getStringAttribute('aws_account_number');
  }
  public set awsAccountNumber(value: string) {
    this._awsAccountNumber = value;
  }
  public resetAwsAccountNumber() {
    this._awsAccountNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountNumberInput() {
    return this._awsAccountNumber;
  }

  // aws_credentials_type - computed: false, optional: true, required: false
  private _awsCredentialsType?: string; 
  public get awsCredentialsType() {
    return this.getStringAttribute('aws_credentials_type');
  }
  public set awsCredentialsType(value: string) {
    this._awsCredentialsType = value;
  }
  public resetAwsCredentialsType() {
    this._awsCredentialsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsCredentialsTypeInput() {
    return this._awsCredentialsType;
  }

  // aws_iam_role - computed: false, optional: true, required: false
  private _awsIamRole?: string; 
  public get awsIamRole() {
    return this.getStringAttribute('aws_iam_role');
  }
  public set awsIamRole(value: string) {
    this._awsIamRole = value;
  }
  public resetAwsIamRole() {
    this._awsIamRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsIamRoleInput() {
    return this._awsIamRole;
  }

  // aws_iam_role_external_id - computed: false, optional: true, required: false
  private _awsIamRoleExternalId?: string; 
  public get awsIamRoleExternalId() {
    return this.getStringAttribute('aws_iam_role_external_id');
  }
  public set awsIamRoleExternalId(value: string) {
    this._awsIamRoleExternalId = value;
  }
  public resetAwsIamRoleExternalId() {
    this._awsIamRoleExternalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsIamRoleExternalIdInput() {
    return this._awsIamRoleExternalId;
  }

  // aws_inventory_iam_role - computed: false, optional: true, required: false
  private _awsInventoryIamRole?: string; 
  public get awsInventoryIamRole() {
    return this.getStringAttribute('aws_inventory_iam_role');
  }
  public set awsInventoryIamRole(value: string) {
    this._awsInventoryIamRole = value;
  }
  public resetAwsInventoryIamRole() {
    this._awsInventoryIamRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInventoryIamRoleInput() {
    return this._awsInventoryIamRole;
  }

  // azure_application_id - computed: false, optional: true, required: false
  private _azureApplicationId?: string; 
  public get azureApplicationId() {
    return this.getStringAttribute('azure_application_id');
  }
  public set azureApplicationId(value: string) {
    this._azureApplicationId = value;
  }
  public resetAzureApplicationId() {
    this._azureApplicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureApplicationIdInput() {
    return this._azureApplicationId;
  }

  // azure_client_secret - computed: false, optional: true, required: false
  private _azureClientSecret?: string; 
  public get azureClientSecret() {
    return this.getStringAttribute('azure_client_secret');
  }
  public set azureClientSecret(value: string) {
    this._azureClientSecret = value;
  }
  public resetAzureClientSecret() {
    this._azureClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureClientSecretInput() {
    return this._azureClientSecret;
  }

  // azure_directory_id - computed: false, optional: true, required: false
  private _azureDirectoryId?: string; 
  public get azureDirectoryId() {
    return this.getStringAttribute('azure_directory_id');
  }
  public set azureDirectoryId(value: string) {
    this._azureDirectoryId = value;
  }
  public resetAzureDirectoryId() {
    this._azureDirectoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureDirectoryIdInput() {
    return this._azureDirectoryId;
  }

  // azure_subscription_id - computed: false, optional: true, required: false
  private _azureSubscriptionId?: string; 
  public get azureSubscriptionId() {
    return this.getStringAttribute('azure_subscription_id');
  }
  public set azureSubscriptionId(value: string) {
    this._azureSubscriptionId = value;
  }
  public resetAzureSubscriptionId() {
    this._azureSubscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureSubscriptionIdInput() {
    return this._azureSubscriptionId;
  }

  // csp_type - computed: false, optional: false, required: true
  private _cspType?: string; 
  public get cspType() {
    return this.getStringAttribute('csp_type');
  }
  public set cspType(value: string) {
    this._cspType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cspTypeInput() {
    return this._cspType;
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

  // gcp_credentials_file - computed: false, optional: true, required: false
  private _gcpCredentialsFile?: string; 
  public get gcpCredentialsFile() {
    return this.getStringAttribute('gcp_credentials_file');
  }
  public set gcpCredentialsFile(value: string) {
    this._gcpCredentialsFile = value;
  }
  public resetGcpCredentialsFile() {
    this._gcpCredentialsFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpCredentialsFileInput() {
    return this._gcpCredentialsFile;
  }

  // gcp_folder_id - computed: false, optional: true, required: false
  private _gcpFolderId?: string; 
  public get gcpFolderId() {
    return this.getStringAttribute('gcp_folder_id');
  }
  public set gcpFolderId(value: string) {
    this._gcpFolderId = value;
  }
  public resetGcpFolderId() {
    this._gcpFolderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpFolderIdInput() {
    return this._gcpFolderId;
  }

  // gcp_project_id - computed: true, optional: true, required: false
  private _gcpProjectId?: string; 
  public get gcpProjectId() {
    return this.getStringAttribute('gcp_project_id');
  }
  public set gcpProjectId(value: string) {
    this._gcpProjectId = value;
  }
  public resetGcpProjectId() {
    this._gcpProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpProjectIdInput() {
    return this._gcpProjectId;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // tenant_ocid - computed: false, optional: true, required: false
  private _tenantOcid?: string; 
  public get tenantOcid() {
    return this.getStringAttribute('tenant_ocid');
  }
  public set tenantOcid(value: string) {
    this._tenantOcid = value;
  }
  public resetTenantOcid() {
    this._tenantOcid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantOcidInput() {
    return this._tenantOcid;
  }

  // user_ocid - computed: false, optional: true, required: false
  private _userOcid?: string; 
  public get userOcid() {
    return this.getStringAttribute('user_ocid');
  }
  public set userOcid(value: string) {
    this._userOcid = value;
  }
  public resetUserOcid() {
    this._userOcid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userOcidInput() {
    return this._userOcid;
  }

  // inventory_monitoring - computed: false, optional: true, required: false
  private _inventoryMonitoring = new CloudAccountInventoryMonitoringList(this, "inventory_monitoring", false);
  public get inventoryMonitoring() {
    return this._inventoryMonitoring;
  }
  public putInventoryMonitoring(value: CloudAccountInventoryMonitoring[] | cdktf.IResolvable) {
    this._inventoryMonitoring.internalValue = value;
  }
  public resetInventoryMonitoring() {
    this._inventoryMonitoring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inventoryMonitoringInput() {
    return this._inventoryMonitoring.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_access_key_id: cdktf.stringToTerraform(this._awsAccessKeyId),
      aws_access_secret: cdktf.stringToTerraform(this._awsAccessSecret),
      aws_account_number: cdktf.stringToTerraform(this._awsAccountNumber),
      aws_credentials_type: cdktf.stringToTerraform(this._awsCredentialsType),
      aws_iam_role: cdktf.stringToTerraform(this._awsIamRole),
      aws_iam_role_external_id: cdktf.stringToTerraform(this._awsIamRoleExternalId),
      aws_inventory_iam_role: cdktf.stringToTerraform(this._awsInventoryIamRole),
      azure_application_id: cdktf.stringToTerraform(this._azureApplicationId),
      azure_client_secret: cdktf.stringToTerraform(this._azureClientSecret),
      azure_directory_id: cdktf.stringToTerraform(this._azureDirectoryId),
      azure_subscription_id: cdktf.stringToTerraform(this._azureSubscriptionId),
      csp_type: cdktf.stringToTerraform(this._cspType),
      description: cdktf.stringToTerraform(this._description),
      gcp_credentials_file: cdktf.stringToTerraform(this._gcpCredentialsFile),
      gcp_folder_id: cdktf.stringToTerraform(this._gcpFolderId),
      gcp_project_id: cdktf.stringToTerraform(this._gcpProjectId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      private_key: cdktf.stringToTerraform(this._privateKey),
      tenant_ocid: cdktf.stringToTerraform(this._tenantOcid),
      user_ocid: cdktf.stringToTerraform(this._userOcid),
      inventory_monitoring: cdktf.listMapper(cloudAccountInventoryMonitoringToTerraform, true)(this._inventoryMonitoring.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_access_key_id: {
        value: cdktf.stringToHclTerraform(this._awsAccessKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_access_secret: {
        value: cdktf.stringToHclTerraform(this._awsAccessSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_account_number: {
        value: cdktf.stringToHclTerraform(this._awsAccountNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_credentials_type: {
        value: cdktf.stringToHclTerraform(this._awsCredentialsType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_iam_role: {
        value: cdktf.stringToHclTerraform(this._awsIamRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_iam_role_external_id: {
        value: cdktf.stringToHclTerraform(this._awsIamRoleExternalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_inventory_iam_role: {
        value: cdktf.stringToHclTerraform(this._awsInventoryIamRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_application_id: {
        value: cdktf.stringToHclTerraform(this._azureApplicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_client_secret: {
        value: cdktf.stringToHclTerraform(this._azureClientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_directory_id: {
        value: cdktf.stringToHclTerraform(this._azureDirectoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_subscription_id: {
        value: cdktf.stringToHclTerraform(this._azureSubscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      csp_type: {
        value: cdktf.stringToHclTerraform(this._cspType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_credentials_file: {
        value: cdktf.stringToHclTerraform(this._gcpCredentialsFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_folder_id: {
        value: cdktf.stringToHclTerraform(this._gcpFolderId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_project_id: {
        value: cdktf.stringToHclTerraform(this._gcpProjectId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_ocid: {
        value: cdktf.stringToHclTerraform(this._tenantOcid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_ocid: {
        value: cdktf.stringToHclTerraform(this._userOcid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inventory_monitoring: {
        value: cdktf.listMapperHcl(cloudAccountInventoryMonitoringToHclTerraform, true)(this._inventoryMonitoring.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAccountInventoryMonitoringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
