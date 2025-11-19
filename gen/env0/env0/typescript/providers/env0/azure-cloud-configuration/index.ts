// https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/azure_cloud_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzureCloudConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * the Azure client ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/azure_cloud_configuration#client_id AzureCloudConfiguration#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/azure_cloud_configuration#id AzureCloudConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * the Azure Log Analytics Workspace ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/azure_cloud_configuration#log_analytics_workspace_id AzureCloudConfiguration#log_analytics_workspace_id}
  */
  readonly logAnalyticsWorkspaceId: string;
  /**
  * name for the cloud configuration for insights
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/azure_cloud_configuration#name AzureCloudConfiguration#name}
  */
  readonly name: string;
  /**
  * the Azure tenant ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/azure_cloud_configuration#tenant_id AzureCloudConfiguration#tenant_id}
  */
  readonly tenantId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/azure_cloud_configuration env0_azure_cloud_configuration}
*/
export class AzureCloudConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "env0_azure_cloud_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AzureCloudConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AzureCloudConfiguration to import
  * @param importFromId The id of the existing AzureCloudConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/azure_cloud_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AzureCloudConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "env0_azure_cloud_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/azure_cloud_configuration env0_azure_cloud_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzureCloudConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: AzureCloudConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'env0_azure_cloud_configuration',
      terraformGeneratorMetadata: {
        providerName: 'env0',
        providerVersion: '1.29.7',
        providerVersionConstraint: '1.29.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientId = config.clientId;
    this._id = config.id;
    this._logAnalyticsWorkspaceId = config.logAnalyticsWorkspaceId;
    this._name = config.name;
    this._tenantId = config.tenantId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // health - computed: true, optional: false, required: false
  public get health() {
    return this.getBooleanAttribute('health');
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

  // log_analytics_workspace_id - computed: false, optional: false, required: true
  private _logAnalyticsWorkspaceId?: string; 
  public get logAnalyticsWorkspaceId() {
    return this.getStringAttribute('log_analytics_workspace_id');
  }
  public set logAnalyticsWorkspaceId(value: string) {
    this._logAnalyticsWorkspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsWorkspaceIdInput() {
    return this._logAnalyticsWorkspaceId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_id: cdktf.stringToTerraform(this._clientId),
      id: cdktf.stringToTerraform(this._id),
      log_analytics_workspace_id: cdktf.stringToTerraform(this._logAnalyticsWorkspaceId),
      name: cdktf.stringToTerraform(this._name),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
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
      log_analytics_workspace_id: {
        value: cdktf.stringToHclTerraform(this._logAnalyticsWorkspaceId),
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
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
