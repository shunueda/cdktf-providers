// https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/integration_azure_resources
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationAzureResourcesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The client id OpsLevel uses to access the Azure account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/integration_azure_resources#client_id IntegrationAzureResources#client_id}
  */
  readonly clientId: string;
  /**
  * The client secret OpsLevel uses to access the Azure account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/integration_azure_resources#client_secret IntegrationAzureResources#client_secret}
  */
  readonly clientSecret: string;
  /**
  * The name of the integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/integration_azure_resources#name IntegrationAzureResources#name}
  */
  readonly name: string;
  /**
  * An Array of tag keys used to associate ownership from an integration. Max 5 (default = ["owner"])
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/integration_azure_resources#ownership_tag_keys IntegrationAzureResources#ownership_tag_keys}
  */
  readonly ownershipTagKeys?: string[];
  /**
  * Allow tags imported from Azure to override ownership set in OpsLevel directly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/integration_azure_resources#ownership_tag_overrides IntegrationAzureResources#ownership_tag_overrides}
  */
  readonly ownershipTagOverrides?: boolean | cdktf.IResolvable;
  /**
  * The subscription OpsLevel uses to access the Azure account. [Microsoft's docs on regex pattern for ID](https://learn.microsoft.com/en-us/rest/api/defenderforcloud/tasks/get-subscription-level-task?view=rest-defenderforcloud-2015-06-01-preview&tabs=HTTP#uri-parameters)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/integration_azure_resources#subscription_id IntegrationAzureResources#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * The tenant OpsLevel uses to access the Azure account. [Microsoft's docs on regex pattern for ID](https://learn.microsoft.com/en-us/rest/api/defenderforcloud/tasks/get-subscription-level-task?view=rest-defenderforcloud-2015-06-01-preview&tabs=HTTP#uri-parameters)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/integration_azure_resources#tenant_id IntegrationAzureResources#tenant_id}
  */
  readonly tenantId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/integration_azure_resources opslevel_integration_azure_resources}
*/
export class IntegrationAzureResources extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opslevel_integration_azure_resources";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationAzureResources resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationAzureResources to import
  * @param importFromId The id of the existing IntegrationAzureResources that should be imported. Refer to the {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/integration_azure_resources#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationAzureResources to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opslevel_integration_azure_resources", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/integration_azure_resources opslevel_integration_azure_resources} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationAzureResourcesConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationAzureResourcesConfig) {
    super(scope, id, {
      terraformResourceType: 'opslevel_integration_azure_resources',
      terraformGeneratorMetadata: {
        providerName: 'opslevel',
        providerVersion: '1.6.3',
        providerVersionConstraint: '1.6.3'
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
    this._clientSecret = config.clientSecret;
    this._name = config.name;
    this._ownershipTagKeys = config.ownershipTagKeys;
    this._ownershipTagOverrides = config.ownershipTagOverrides;
    this._subscriptionId = config.subscriptionId;
    this._tenantId = config.tenantId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aliases - computed: true, optional: false, required: false
  public get aliases() {
    return this.getListAttribute('aliases');
  }

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

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // installed_at - computed: true, optional: false, required: false
  public get installedAt() {
    return this.getStringAttribute('installed_at');
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

  // ownership_tag_keys - computed: true, optional: true, required: false
  private _ownershipTagKeys?: string[]; 
  public get ownershipTagKeys() {
    return this.getListAttribute('ownership_tag_keys');
  }
  public set ownershipTagKeys(value: string[]) {
    this._ownershipTagKeys = value;
  }
  public resetOwnershipTagKeys() {
    this._ownershipTagKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownershipTagKeysInput() {
    return this._ownershipTagKeys;
  }

  // ownership_tag_overrides - computed: true, optional: true, required: false
  private _ownershipTagOverrides?: boolean | cdktf.IResolvable; 
  public get ownershipTagOverrides() {
    return this.getBooleanAttribute('ownership_tag_overrides');
  }
  public set ownershipTagOverrides(value: boolean | cdktf.IResolvable) {
    this._ownershipTagOverrides = value;
  }
  public resetOwnershipTagOverrides() {
    this._ownershipTagOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownershipTagOverridesInput() {
    return this._ownershipTagOverrides;
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
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      name: cdktf.stringToTerraform(this._name),
      ownership_tag_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ownershipTagKeys),
      ownership_tag_overrides: cdktf.booleanToTerraform(this._ownershipTagOverrides),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
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
      client_secret: {
        value: cdktf.stringToHclTerraform(this._clientSecret),
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
      ownership_tag_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ownershipTagKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ownership_tag_overrides: {
        value: cdktf.booleanToHclTerraform(this._ownershipTagOverrides),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      subscription_id: {
        value: cdktf.stringToHclTerraform(this._subscriptionId),
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
