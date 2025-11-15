// https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_gcp_cloud_cost
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformConnectorGcpCloudCostConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_gcp_cloud_cost#description PlatformConnectorGcpCloudCost#description}
  */
  readonly description?: string;
  /**
  * Indicates which features to enable among Billing, Optimization, Visibility and Governance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_gcp_cloud_cost#features_enabled PlatformConnectorGcpCloudCost#features_enabled}
  */
  readonly featuresEnabled: string[];
  /**
  * GCP Project Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_gcp_cloud_cost#gcp_project_id PlatformConnectorGcpCloudCost#gcp_project_id}
  */
  readonly gcpProjectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_gcp_cloud_cost#id PlatformConnectorGcpCloudCost#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_gcp_cloud_cost#identifier PlatformConnectorGcpCloudCost#identifier}
  */
  readonly identifier: string;
  /**
  * Name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_gcp_cloud_cost#name PlatformConnectorGcpCloudCost#name}
  */
  readonly name: string;
  /**
  * Unique identifier of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_gcp_cloud_cost#org_id PlatformConnectorGcpCloudCost#org_id}
  */
  readonly orgId?: string;
  /**
  * Unique identifier of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_gcp_cloud_cost#project_id PlatformConnectorGcpCloudCost#project_id}
  */
  readonly projectId?: string;
  /**
  * Email corresponding to the Service Account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_gcp_cloud_cost#service_account_email PlatformConnectorGcpCloudCost#service_account_email}
  */
  readonly serviceAccountEmail: string;
  /**
  * Tags to associate with the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_gcp_cloud_cost#tags PlatformConnectorGcpCloudCost#tags}
  */
  readonly tags?: string[];
  /**
  * billing_export_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_gcp_cloud_cost#billing_export_spec PlatformConnectorGcpCloudCost#billing_export_spec}
  */
  readonly billingExportSpec?: PlatformConnectorGcpCloudCostBillingExportSpec;
}
export interface PlatformConnectorGcpCloudCostBillingExportSpec {
  /**
  * Data Set Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_gcp_cloud_cost#data_set_id PlatformConnectorGcpCloudCost#data_set_id}
  */
  readonly dataSetId: string;
  /**
  * Table Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_gcp_cloud_cost#table_id PlatformConnectorGcpCloudCost#table_id}
  */
  readonly tableId: string;
}

export function platformConnectorGcpCloudCostBillingExportSpecToTerraform(struct?: PlatformConnectorGcpCloudCostBillingExportSpecOutputReference | PlatformConnectorGcpCloudCostBillingExportSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_set_id: cdktf.stringToTerraform(struct!.dataSetId),
    table_id: cdktf.stringToTerraform(struct!.tableId),
  }
}


export function platformConnectorGcpCloudCostBillingExportSpecToHclTerraform(struct?: PlatformConnectorGcpCloudCostBillingExportSpecOutputReference | PlatformConnectorGcpCloudCostBillingExportSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_set_id: {
      value: cdktf.stringToHclTerraform(struct!.dataSetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_id: {
      value: cdktf.stringToHclTerraform(struct!.tableId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformConnectorGcpCloudCostBillingExportSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorGcpCloudCostBillingExportSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSetId = this._dataSetId;
    }
    if (this._tableId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableId = this._tableId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorGcpCloudCostBillingExportSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataSetId = undefined;
      this._tableId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataSetId = value.dataSetId;
      this._tableId = value.tableId;
    }
  }

  // data_set_id - computed: false, optional: false, required: true
  private _dataSetId?: string; 
  public get dataSetId() {
    return this.getStringAttribute('data_set_id');
  }
  public set dataSetId(value: string) {
    this._dataSetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetIdInput() {
    return this._dataSetId;
  }

  // table_id - computed: false, optional: false, required: true
  private _tableId?: string; 
  public get tableId() {
    return this.getStringAttribute('table_id');
  }
  public set tableId(value: string) {
    this._tableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableIdInput() {
    return this._tableId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_gcp_cloud_cost harness_platform_connector_gcp_cloud_cost}
*/
export class PlatformConnectorGcpCloudCost extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_connector_gcp_cloud_cost";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformConnectorGcpCloudCost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformConnectorGcpCloudCost to import
  * @param importFromId The id of the existing PlatformConnectorGcpCloudCost that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_gcp_cloud_cost#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformConnectorGcpCloudCost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_connector_gcp_cloud_cost", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_gcp_cloud_cost harness_platform_connector_gcp_cloud_cost} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformConnectorGcpCloudCostConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformConnectorGcpCloudCostConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_connector_gcp_cloud_cost',
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
    this._gcpProjectId = config.gcpProjectId;
    this._id = config.id;
    this._identifier = config.identifier;
    this._name = config.name;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
    this._serviceAccountEmail = config.serviceAccountEmail;
    this._tags = config.tags;
    this._billingExportSpec.internalValue = config.billingExportSpec;
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

  // gcp_project_id - computed: false, optional: false, required: true
  private _gcpProjectId?: string; 
  public get gcpProjectId() {
    return this.getStringAttribute('gcp_project_id');
  }
  public set gcpProjectId(value: string) {
    this._gcpProjectId = value;
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

  // service_account_email - computed: false, optional: false, required: true
  private _serviceAccountEmail?: string; 
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }
  public set serviceAccountEmail(value: string) {
    this._serviceAccountEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountEmailInput() {
    return this._serviceAccountEmail;
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

  // billing_export_spec - computed: false, optional: true, required: false
  private _billingExportSpec = new PlatformConnectorGcpCloudCostBillingExportSpecOutputReference(this, "billing_export_spec");
  public get billingExportSpec() {
    return this._billingExportSpec;
  }
  public putBillingExportSpec(value: PlatformConnectorGcpCloudCostBillingExportSpec) {
    this._billingExportSpec.internalValue = value;
  }
  public resetBillingExportSpec() {
    this._billingExportSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingExportSpecInput() {
    return this._billingExportSpec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      features_enabled: cdktf.listMapper(cdktf.stringToTerraform, false)(this._featuresEnabled),
      gcp_project_id: cdktf.stringToTerraform(this._gcpProjectId),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
      service_account_email: cdktf.stringToTerraform(this._serviceAccountEmail),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      billing_export_spec: platformConnectorGcpCloudCostBillingExportSpecToTerraform(this._billingExportSpec.internalValue),
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
      service_account_email: {
        value: cdktf.stringToHclTerraform(this._serviceAccountEmail),
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
      billing_export_spec: {
        value: platformConnectorGcpCloudCostBillingExportSpecToHclTerraform(this._billingExportSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformConnectorGcpCloudCostBillingExportSpecList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
