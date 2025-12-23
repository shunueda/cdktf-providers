// https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/integration_azure_devops
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationAzureDevopsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The AzureDevops AutoCloseTickets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/integration_azure_devops#auto_close_tickets IntegrationAzureDevops#auto_close_tickets}
  */
  readonly autoCloseTickets: boolean | cdktf.IResolvable;
  /**
  * The AzureDevops AutoCreateTickets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/integration_azure_devops#auto_create_tickets IntegrationAzureDevops#auto_create_tickets}
  */
  readonly autoCreateTickets: boolean | cdktf.IResolvable;
  /**
  * The AzureDevops ClientSecret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/integration_azure_devops#client_secret IntegrationAzureDevops#client_secret}
  */
  readonly clientSecret: string;
  /**
  * The AzureDevops DefaultProjectName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/integration_azure_devops#default_project_name IntegrationAzureDevops#default_project_name}
  */
  readonly defaultProjectName?: string;
  /**
  * Name of the integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/integration_azure_devops#name IntegrationAzureDevops#name}
  */
  readonly name: string;
  /**
  * The AzureDevops OrganizationUrl
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/integration_azure_devops#organization_url IntegrationAzureDevops#organization_url}
  */
  readonly organizationUrl: string;
  /**
  * The AzureDevops ServicePrincipalId
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/integration_azure_devops#service_principal_id IntegrationAzureDevops#service_principal_id}
  */
  readonly servicePrincipalId: string;
  /**
  * Mondoo space identifier. If there is no space ID, the provider space is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/integration_azure_devops#space_id IntegrationAzureDevops#space_id}
  */
  readonly spaceId?: string;
  /**
  * The AzureDevops TenantId
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/integration_azure_devops#tenant_id IntegrationAzureDevops#tenant_id}
  */
  readonly tenantId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/integration_azure_devops mondoo_integration_azure_devops}
*/
export class IntegrationAzureDevops extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mondoo_integration_azure_devops";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationAzureDevops resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationAzureDevops to import
  * @param importFromId The id of the existing IntegrationAzureDevops that should be imported. Refer to the {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/integration_azure_devops#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationAzureDevops to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mondoo_integration_azure_devops", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/integration_azure_devops mondoo_integration_azure_devops} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationAzureDevopsConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationAzureDevopsConfig) {
    super(scope, id, {
      terraformResourceType: 'mondoo_integration_azure_devops',
      terraformGeneratorMetadata: {
        providerName: 'mondoo',
        providerVersion: '0.35.3',
        providerVersionConstraint: '0.35.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoCloseTickets = config.autoCloseTickets;
    this._autoCreateTickets = config.autoCreateTickets;
    this._clientSecret = config.clientSecret;
    this._defaultProjectName = config.defaultProjectName;
    this._name = config.name;
    this._organizationUrl = config.organizationUrl;
    this._servicePrincipalId = config.servicePrincipalId;
    this._spaceId = config.spaceId;
    this._tenantId = config.tenantId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_close_tickets - computed: false, optional: false, required: true
  private _autoCloseTickets?: boolean | cdktf.IResolvable; 
  public get autoCloseTickets() {
    return this.getBooleanAttribute('auto_close_tickets');
  }
  public set autoCloseTickets(value: boolean | cdktf.IResolvable) {
    this._autoCloseTickets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCloseTicketsInput() {
    return this._autoCloseTickets;
  }

  // auto_create_tickets - computed: false, optional: false, required: true
  private _autoCreateTickets?: boolean | cdktf.IResolvable; 
  public get autoCreateTickets() {
    return this.getBooleanAttribute('auto_create_tickets');
  }
  public set autoCreateTickets(value: boolean | cdktf.IResolvable) {
    this._autoCreateTickets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreateTicketsInput() {
    return this._autoCreateTickets;
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

  // default_project_name - computed: false, optional: true, required: false
  private _defaultProjectName?: string; 
  public get defaultProjectName() {
    return this.getStringAttribute('default_project_name');
  }
  public set defaultProjectName(value: string) {
    this._defaultProjectName = value;
  }
  public resetDefaultProjectName() {
    this._defaultProjectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultProjectNameInput() {
    return this._defaultProjectName;
  }

  // mrn - computed: true, optional: false, required: false
  public get mrn() {
    return this.getStringAttribute('mrn');
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

  // organization_url - computed: false, optional: false, required: true
  private _organizationUrl?: string; 
  public get organizationUrl() {
    return this.getStringAttribute('organization_url');
  }
  public set organizationUrl(value: string) {
    this._organizationUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationUrlInput() {
    return this._organizationUrl;
  }

  // service_principal_id - computed: false, optional: false, required: true
  private _servicePrincipalId?: string; 
  public get servicePrincipalId() {
    return this.getStringAttribute('service_principal_id');
  }
  public set servicePrincipalId(value: string) {
    this._servicePrincipalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalIdInput() {
    return this._servicePrincipalId;
  }

  // space_id - computed: true, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
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
      auto_close_tickets: cdktf.booleanToTerraform(this._autoCloseTickets),
      auto_create_tickets: cdktf.booleanToTerraform(this._autoCreateTickets),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      default_project_name: cdktf.stringToTerraform(this._defaultProjectName),
      name: cdktf.stringToTerraform(this._name),
      organization_url: cdktf.stringToTerraform(this._organizationUrl),
      service_principal_id: cdktf.stringToTerraform(this._servicePrincipalId),
      space_id: cdktf.stringToTerraform(this._spaceId),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_close_tickets: {
        value: cdktf.booleanToHclTerraform(this._autoCloseTickets),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_create_tickets: {
        value: cdktf.booleanToHclTerraform(this._autoCreateTickets),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_secret: {
        value: cdktf.stringToHclTerraform(this._clientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_project_name: {
        value: cdktf.stringToHclTerraform(this._defaultProjectName),
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
      organization_url: {
        value: cdktf.stringToHclTerraform(this._organizationUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_principal_id: {
        value: cdktf.stringToHclTerraform(this._servicePrincipalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
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
