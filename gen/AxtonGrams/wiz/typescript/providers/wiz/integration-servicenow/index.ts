// https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationServicenowConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow#name IntegrationServicenow#name}
  */
  readonly name: string;
  /**
  * The project this action is scoped to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow#project_id IntegrationServicenow#project_id}
  */
  readonly projectId?: string;
  /**
  * Scoping to a selected Project makes this Integration accessible only to users with global roles or Project-scoped access to the selected Project. Other users will not be able to see it, use it, or view its results. Integrations restricted to global roles cannot be seen or used by users with Project-scoped roles. 
  *     - Allowed values: 
  *         - Selected Project
  *         - All Resources
  *         - All Resources, Restrict this Integration to global roles only
  * 
  *     - Defaults to `All Resources, Restrict this Integration to global roles only`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow#scope IntegrationServicenow#scope}
  */
  readonly scope?: string;
  /**
  * ServiceNow OAuth Client ID. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_CLIENT_ID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow#servicenow_client_id IntegrationServicenow#servicenow_client_id}
  */
  readonly servicenowClientId?: string;
  /**
  * ServiceNow OAuth Client Secret. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_CLIENT_SECRET)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow#servicenow_client_secret IntegrationServicenow#servicenow_client_secret}
  */
  readonly servicenowClientSecret?: string;
  /**
  * ServiceNow password. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_PASSWORD)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow#servicenow_password IntegrationServicenow#servicenow_password}
  */
  readonly servicenowPassword: string;
  /**
  * ServiceNow URL. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_URL)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow#servicenow_url IntegrationServicenow#servicenow_url}
  */
  readonly servicenowUrl: string;
  /**
  * Email of a ServiceNow user with permissions to create tickets. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_USERNAME)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow#servicenow_username IntegrationServicenow#servicenow_username}
  */
  readonly servicenowUsername: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow wiz_integration_servicenow}
*/
export class IntegrationServicenow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "wiz_integration_servicenow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationServicenow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationServicenow to import
  * @param importFromId The id of the existing IntegrationServicenow that should be imported. Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationServicenow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "wiz_integration_servicenow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow wiz_integration_servicenow} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationServicenowConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationServicenowConfig) {
    super(scope, id, {
      terraformResourceType: 'wiz_integration_servicenow',
      terraformGeneratorMetadata: {
        providerName: 'wiz',
        providerVersion: '1.2.5',
        providerVersionConstraint: '1.2.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._projectId = config.projectId;
    this._scope = config.scope;
    this._servicenowClientId = config.servicenowClientId;
    this._servicenowClientSecret = config.servicenowClientSecret;
    this._servicenowPassword = config.servicenowPassword;
    this._servicenowUrl = config.servicenowUrl;
    this._servicenowUsername = config.servicenowUsername;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // servicenow_client_id - computed: false, optional: true, required: false
  private _servicenowClientId?: string; 
  public get servicenowClientId() {
    return this.getStringAttribute('servicenow_client_id');
  }
  public set servicenowClientId(value: string) {
    this._servicenowClientId = value;
  }
  public resetServicenowClientId() {
    this._servicenowClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicenowClientIdInput() {
    return this._servicenowClientId;
  }

  // servicenow_client_secret - computed: false, optional: true, required: false
  private _servicenowClientSecret?: string; 
  public get servicenowClientSecret() {
    return this.getStringAttribute('servicenow_client_secret');
  }
  public set servicenowClientSecret(value: string) {
    this._servicenowClientSecret = value;
  }
  public resetServicenowClientSecret() {
    this._servicenowClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicenowClientSecretInput() {
    return this._servicenowClientSecret;
  }

  // servicenow_password - computed: false, optional: false, required: true
  private _servicenowPassword?: string; 
  public get servicenowPassword() {
    return this.getStringAttribute('servicenow_password');
  }
  public set servicenowPassword(value: string) {
    this._servicenowPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicenowPasswordInput() {
    return this._servicenowPassword;
  }

  // servicenow_url - computed: false, optional: false, required: true
  private _servicenowUrl?: string; 
  public get servicenowUrl() {
    return this.getStringAttribute('servicenow_url');
  }
  public set servicenowUrl(value: string) {
    this._servicenowUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicenowUrlInput() {
    return this._servicenowUrl;
  }

  // servicenow_username - computed: false, optional: false, required: true
  private _servicenowUsername?: string; 
  public get servicenowUsername() {
    return this.getStringAttribute('servicenow_username');
  }
  public set servicenowUsername(value: string) {
    this._servicenowUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicenowUsernameInput() {
    return this._servicenowUsername;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      scope: cdktf.stringToTerraform(this._scope),
      servicenow_client_id: cdktf.stringToTerraform(this._servicenowClientId),
      servicenow_client_secret: cdktf.stringToTerraform(this._servicenowClientSecret),
      servicenow_password: cdktf.stringToTerraform(this._servicenowPassword),
      servicenow_url: cdktf.stringToTerraform(this._servicenowUrl),
      servicenow_username: cdktf.stringToTerraform(this._servicenowUsername),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      servicenow_client_id: {
        value: cdktf.stringToHclTerraform(this._servicenowClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      servicenow_client_secret: {
        value: cdktf.stringToHclTerraform(this._servicenowClientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      servicenow_password: {
        value: cdktf.stringToHclTerraform(this._servicenowPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      servicenow_url: {
        value: cdktf.stringToHclTerraform(this._servicenowUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      servicenow_username: {
        value: cdktf.stringToHclTerraform(this._servicenowUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
