// https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_cost
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformConnectorAzureCloudCostConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_cost#description PlatformConnectorAzureCloudCost#description}
  */
  readonly description?: string;
  /**
  * Indicates which feature to enable among Billing, Optimization, Visibility and Governance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_cost#features_enabled PlatformConnectorAzureCloudCost#features_enabled}
  */
  readonly featuresEnabled: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_cost#id PlatformConnectorAzureCloudCost#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_cost#identifier PlatformConnectorAzureCloudCost#identifier}
  */
  readonly identifier: string;
  /**
  * Name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_cost#name PlatformConnectorAzureCloudCost#name}
  */
  readonly name: string;
  /**
  * Unique identifier of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_cost#org_id PlatformConnectorAzureCloudCost#org_id}
  */
  readonly orgId?: string;
  /**
  * Unique identifier of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_cost#project_id PlatformConnectorAzureCloudCost#project_id}
  */
  readonly projectId?: string;
  /**
  * Subsription id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_cost#subscription_id PlatformConnectorAzureCloudCost#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * Tags to associate with the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_cost#tags PlatformConnectorAzureCloudCost#tags}
  */
  readonly tags?: string[];
  /**
  * Tenant id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_cost#tenant_id PlatformConnectorAzureCloudCost#tenant_id}
  */
  readonly tenantId: string;
  /**
  * billing_export_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_cost#billing_export_spec PlatformConnectorAzureCloudCost#billing_export_spec}
  */
  readonly billingExportSpec?: PlatformConnectorAzureCloudCostBillingExportSpec;
  /**
  * billing_export_spec2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_cost#billing_export_spec2 PlatformConnectorAzureCloudCost#billing_export_spec2}
  */
  readonly billingExportSpec2?: PlatformConnectorAzureCloudCostBillingExportSpec2;
}
export interface PlatformConnectorAzureCloudCostBillingExportSpec {
  /**
  * Billing type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_cost#billing_type PlatformConnectorAzureCloudCost#billing_type}
  */
  readonly billingType: string;
  /**
  * Name of the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_cost#container_name PlatformConnectorAzureCloudCost#container_name}
  */
  readonly containerName: string;
  /**
  * Name of the directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_cost#directory_name PlatformConnectorAzureCloudCost#directory_name}
  */
  readonly directoryName: string;
  /**
  * Name of the report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_cost#report_name PlatformConnectorAzureCloudCost#report_name}
  */
  readonly reportName: string;
  /**
  * Name of the storage account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_cost#storage_account_name PlatformConnectorAzureCloudCost#storage_account_name}
  */
  readonly storageAccountName: string;
  /**
  * Subsription Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_cost#subscription_id PlatformConnectorAzureCloudCost#subscription_id}
  */
  readonly subscriptionId: string;
}

export function platformConnectorAzureCloudCostBillingExportSpecToTerraform(struct?: PlatformConnectorAzureCloudCostBillingExportSpecOutputReference | PlatformConnectorAzureCloudCostBillingExportSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    billing_type: cdktf.stringToTerraform(struct!.billingType),
    container_name: cdktf.stringToTerraform(struct!.containerName),
    directory_name: cdktf.stringToTerraform(struct!.directoryName),
    report_name: cdktf.stringToTerraform(struct!.reportName),
    storage_account_name: cdktf.stringToTerraform(struct!.storageAccountName),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
  }
}


export function platformConnectorAzureCloudCostBillingExportSpecToHclTerraform(struct?: PlatformConnectorAzureCloudCostBillingExportSpecOutputReference | PlatformConnectorAzureCloudCostBillingExportSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    billing_type: {
      value: cdktf.stringToHclTerraform(struct!.billingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_name: {
      value: cdktf.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    directory_name: {
      value: cdktf.stringToHclTerraform(struct!.directoryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    report_name: {
      value: cdktf.stringToHclTerraform(struct!.reportName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_account_name: {
      value: cdktf.stringToHclTerraform(struct!.storageAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformConnectorAzureCloudCostBillingExportSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorAzureCloudCostBillingExportSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._billingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.billingType = this._billingType;
    }
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._directoryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.directoryName = this._directoryName;
    }
    if (this._reportName !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportName = this._reportName;
    }
    if (this._storageAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountName = this._storageAccountName;
    }
    if (this._subscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionId = this._subscriptionId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorAzureCloudCostBillingExportSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._billingType = undefined;
      this._containerName = undefined;
      this._directoryName = undefined;
      this._reportName = undefined;
      this._storageAccountName = undefined;
      this._subscriptionId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._billingType = value.billingType;
      this._containerName = value.containerName;
      this._directoryName = value.directoryName;
      this._reportName = value.reportName;
      this._storageAccountName = value.storageAccountName;
      this._subscriptionId = value.subscriptionId;
    }
  }

  // billing_type - computed: false, optional: false, required: true
  private _billingType?: string; 
  public get billingType() {
    return this.getStringAttribute('billing_type');
  }
  public set billingType(value: string) {
    this._billingType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get billingTypeInput() {
    return this._billingType;
  }

  // container_name - computed: false, optional: false, required: true
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // directory_name - computed: false, optional: false, required: true
  private _directoryName?: string; 
  public get directoryName() {
    return this.getStringAttribute('directory_name');
  }
  public set directoryName(value: string) {
    this._directoryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryNameInput() {
    return this._directoryName;
  }

  // report_name - computed: false, optional: false, required: true
  private _reportName?: string; 
  public get reportName() {
    return this.getStringAttribute('report_name');
  }
  public set reportName(value: string) {
    this._reportName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reportNameInput() {
    return this._reportName;
  }

  // storage_account_name - computed: false, optional: false, required: true
  private _storageAccountName?: string; 
  public get storageAccountName() {
    return this.getStringAttribute('storage_account_name');
  }
  public set storageAccountName(value: string) {
    this._storageAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountNameInput() {
    return this._storageAccountName;
  }

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }
}
export interface PlatformConnectorAzureCloudCostBillingExportSpec2 {
  /**
  * Billing type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_cost#billing_type PlatformConnectorAzureCloudCost#billing_type}
  */
  readonly billingType: string;
  /**
  * Name of the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_cost#container_name PlatformConnectorAzureCloudCost#container_name}
  */
  readonly containerName: string;
  /**
  * Name of the directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_cost#directory_name PlatformConnectorAzureCloudCost#directory_name}
  */
  readonly directoryName: string;
  /**
  * Name of the report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_cost#report_name PlatformConnectorAzureCloudCost#report_name}
  */
  readonly reportName: string;
  /**
  * Name of the storage account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_cost#storage_account_name PlatformConnectorAzureCloudCost#storage_account_name}
  */
  readonly storageAccountName: string;
  /**
  * Subsription Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_cost#subscription_id PlatformConnectorAzureCloudCost#subscription_id}
  */
  readonly subscriptionId: string;
}

export function platformConnectorAzureCloudCostBillingExportSpec2ToTerraform(struct?: PlatformConnectorAzureCloudCostBillingExportSpec2OutputReference | PlatformConnectorAzureCloudCostBillingExportSpec2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    billing_type: cdktf.stringToTerraform(struct!.billingType),
    container_name: cdktf.stringToTerraform(struct!.containerName),
    directory_name: cdktf.stringToTerraform(struct!.directoryName),
    report_name: cdktf.stringToTerraform(struct!.reportName),
    storage_account_name: cdktf.stringToTerraform(struct!.storageAccountName),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
  }
}


export function platformConnectorAzureCloudCostBillingExportSpec2ToHclTerraform(struct?: PlatformConnectorAzureCloudCostBillingExportSpec2OutputReference | PlatformConnectorAzureCloudCostBillingExportSpec2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    billing_type: {
      value: cdktf.stringToHclTerraform(struct!.billingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_name: {
      value: cdktf.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    directory_name: {
      value: cdktf.stringToHclTerraform(struct!.directoryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    report_name: {
      value: cdktf.stringToHclTerraform(struct!.reportName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_account_name: {
      value: cdktf.stringToHclTerraform(struct!.storageAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformConnectorAzureCloudCostBillingExportSpec2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorAzureCloudCostBillingExportSpec2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._billingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.billingType = this._billingType;
    }
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._directoryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.directoryName = this._directoryName;
    }
    if (this._reportName !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportName = this._reportName;
    }
    if (this._storageAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountName = this._storageAccountName;
    }
    if (this._subscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionId = this._subscriptionId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorAzureCloudCostBillingExportSpec2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._billingType = undefined;
      this._containerName = undefined;
      this._directoryName = undefined;
      this._reportName = undefined;
      this._storageAccountName = undefined;
      this._subscriptionId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._billingType = value.billingType;
      this._containerName = value.containerName;
      this._directoryName = value.directoryName;
      this._reportName = value.reportName;
      this._storageAccountName = value.storageAccountName;
      this._subscriptionId = value.subscriptionId;
    }
  }

  // billing_type - computed: false, optional: false, required: true
  private _billingType?: string; 
  public get billingType() {
    return this.getStringAttribute('billing_type');
  }
  public set billingType(value: string) {
    this._billingType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get billingTypeInput() {
    return this._billingType;
  }

  // container_name - computed: false, optional: false, required: true
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // directory_name - computed: false, optional: false, required: true
  private _directoryName?: string; 
  public get directoryName() {
    return this.getStringAttribute('directory_name');
  }
  public set directoryName(value: string) {
    this._directoryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryNameInput() {
    return this._directoryName;
  }

  // report_name - computed: false, optional: false, required: true
  private _reportName?: string; 
  public get reportName() {
    return this.getStringAttribute('report_name');
  }
  public set reportName(value: string) {
    this._reportName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reportNameInput() {
    return this._reportName;
  }

  // storage_account_name - computed: false, optional: false, required: true
  private _storageAccountName?: string; 
  public get storageAccountName() {
    return this.getStringAttribute('storage_account_name');
  }
  public set storageAccountName(value: string) {
    this._storageAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountNameInput() {
    return this._storageAccountName;
  }

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_cost harness_platform_connector_azure_cloud_cost}
*/
export class PlatformConnectorAzureCloudCost extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_connector_azure_cloud_cost";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformConnectorAzureCloudCost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformConnectorAzureCloudCost to import
  * @param importFromId The id of the existing PlatformConnectorAzureCloudCost that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_cost#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformConnectorAzureCloudCost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_connector_azure_cloud_cost", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_cost harness_platform_connector_azure_cloud_cost} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformConnectorAzureCloudCostConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformConnectorAzureCloudCostConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_connector_azure_cloud_cost',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.2',
        providerVersionConstraint: '0.39.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._featuresEnabled = config.featuresEnabled;
    this._id = config.id;
    this._identifier = config.identifier;
    this._name = config.name;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
    this._subscriptionId = config.subscriptionId;
    this._tags = config.tags;
    this._tenantId = config.tenantId;
    this._billingExportSpec.internalValue = config.billingExportSpec;
    this._billingExportSpec2.internalValue = config.billingExportSpec2;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // features_enabled - computed: false, optional: false, required: true
  private _featuresEnabled?: string[]; 
  public get featuresEnabled() {
    return cdktf.Fn.tolist(this.getListAttribute('features_enabled'));
  }
  public set featuresEnabled(value: string[]) {
    this._featuresEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresEnabledInput() {
    return this._featuresEnabled;
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

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
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

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // billing_export_spec - computed: false, optional: true, required: false
  private _billingExportSpec = new PlatformConnectorAzureCloudCostBillingExportSpecOutputReference(this, "billing_export_spec");
  public get billingExportSpec() {
    return this._billingExportSpec;
  }
  public putBillingExportSpec(value: PlatformConnectorAzureCloudCostBillingExportSpec) {
    this._billingExportSpec.internalValue = value;
  }
  public resetBillingExportSpec() {
    this._billingExportSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingExportSpecInput() {
    return this._billingExportSpec.internalValue;
  }

  // billing_export_spec2 - computed: false, optional: true, required: false
  private _billingExportSpec2 = new PlatformConnectorAzureCloudCostBillingExportSpec2OutputReference(this, "billing_export_spec2");
  public get billingExportSpec2() {
    return this._billingExportSpec2;
  }
  public putBillingExportSpec2(value: PlatformConnectorAzureCloudCostBillingExportSpec2) {
    this._billingExportSpec2.internalValue = value;
  }
  public resetBillingExportSpec2() {
    this._billingExportSpec2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingExportSpec2Input() {
    return this._billingExportSpec2.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      features_enabled: cdktf.listMapper(cdktf.stringToTerraform, false)(this._featuresEnabled),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      billing_export_spec: platformConnectorAzureCloudCostBillingExportSpecToTerraform(this._billingExportSpec.internalValue),
      billing_export_spec2: platformConnectorAzureCloudCostBillingExportSpec2ToTerraform(this._billingExportSpec2.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      features_enabled: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._featuresEnabled),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
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
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_id: {
        value: cdktf.stringToHclTerraform(this._subscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      billing_export_spec: {
        value: platformConnectorAzureCloudCostBillingExportSpecToHclTerraform(this._billingExportSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformConnectorAzureCloudCostBillingExportSpecList",
      },
      billing_export_spec2: {
        value: platformConnectorAzureCloudCostBillingExportSpec2ToHclTerraform(this._billingExportSpec2.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformConnectorAzureCloudCostBillingExportSpec2List",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
