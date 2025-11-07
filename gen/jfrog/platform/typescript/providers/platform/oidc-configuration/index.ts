// https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/oidc_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OidcConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Informational field that you can use to include details of the audience that uses the OIDC configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/oidc_configuration#audience OidcConfiguration#audience}
  */
  readonly audience?: string;
  /**
  * Description of the OIDC provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/oidc_configuration#description OidcConfiguration#description}
  */
  readonly description?: string;
  /**
  * Only settable when `provider_type` is GitHub or GitHubEnterprise. When set, Allows authentication without any restrictions. For security best practices, it is recommended to add restrictions to limit access and enforce stricter controls. Use with caution, as this may grant broader access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/oidc_configuration#enable_permissive_configuration OidcConfiguration#enable_permissive_configuration}
  */
  readonly enablePermissiveConfiguration?: boolean | cdktf.IResolvable;
  /**
  * OIDC issuer URL. For GitHub actions, the URL must start with https://token.actions.githubusercontent.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/oidc_configuration#issuer_url OidcConfiguration#issuer_url}
  */
  readonly issuerUrl: string;
  /**
  * Name of the OIDC provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/oidc_configuration#name OidcConfiguration#name}
  */
  readonly name: string;
  /**
  * This field is mandatory, when `provider_type` is GitHub or GitHubEnterprise. Informational field that you can use to include details of the organization that uses the OIDC configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/oidc_configuration#organization OidcConfiguration#organization}
  */
  readonly organization?: string;
  /**
  * If set, this Identity Configuration will be available in the scope of the given project (editable by platform admin and project admin). If not set, this Identity Configuration will be global and only editable by platform admin. Once set, the projectKey cannot be changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/oidc_configuration#project_key OidcConfiguration#project_key}
  */
  readonly projectKey?: string;
  /**
  * Type of OIDC provider. Can be `generic`, `GitHub`, `GitHubEnterprise` or `Azure`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/oidc_configuration#provider_type OidcConfiguration#provider_type}
  */
  readonly providerType: string;
  /**
  * This enables and disables the default proxy for OIDC integration. If enabled, the OIDC mechanism will utilize the default proxy for all OIDC requests. If disabled, the OIDC mechanism does not use any proxy for all OIDC requests. Before enabling this functionality you must configure the default proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/oidc_configuration#use_default_proxy OidcConfiguration#use_default_proxy}
  */
  readonly useDefaultProxy?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/oidc_configuration platform_oidc_configuration}
*/
export class OidcConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "platform_oidc_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OidcConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OidcConfiguration to import
  * @param importFromId The id of the existing OidcConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/oidc_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OidcConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "platform_oidc_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/oidc_configuration platform_oidc_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OidcConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: OidcConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'platform_oidc_configuration',
      terraformGeneratorMetadata: {
        providerName: 'platform',
        providerVersion: '2.2.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._audience = config.audience;
    this._description = config.description;
    this._enablePermissiveConfiguration = config.enablePermissiveConfiguration;
    this._issuerUrl = config.issuerUrl;
    this._name = config.name;
    this._organization = config.organization;
    this._projectKey = config.projectKey;
    this._providerType = config.providerType;
    this._useDefaultProxy = config.useDefaultProxy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
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

  // enable_permissive_configuration - computed: false, optional: true, required: false
  private _enablePermissiveConfiguration?: boolean | cdktf.IResolvable; 
  public get enablePermissiveConfiguration() {
    return this.getBooleanAttribute('enable_permissive_configuration');
  }
  public set enablePermissiveConfiguration(value: boolean | cdktf.IResolvable) {
    this._enablePermissiveConfiguration = value;
  }
  public resetEnablePermissiveConfiguration() {
    this._enablePermissiveConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePermissiveConfigurationInput() {
    return this._enablePermissiveConfiguration;
  }

  // issuer_url - computed: false, optional: false, required: true
  private _issuerUrl?: string; 
  public get issuerUrl() {
    return this.getStringAttribute('issuer_url');
  }
  public set issuerUrl(value: string) {
    this._issuerUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerUrlInput() {
    return this._issuerUrl;
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

  // organization - computed: false, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // project_key - computed: false, optional: true, required: false
  private _projectKey?: string; 
  public get projectKey() {
    return this.getStringAttribute('project_key');
  }
  public set projectKey(value: string) {
    this._projectKey = value;
  }
  public resetProjectKey() {
    this._projectKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectKeyInput() {
    return this._projectKey;
  }

  // provider_type - computed: false, optional: false, required: true
  private _providerType?: string; 
  public get providerType() {
    return this.getStringAttribute('provider_type');
  }
  public set providerType(value: string) {
    this._providerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerTypeInput() {
    return this._providerType;
  }

  // use_default_proxy - computed: true, optional: true, required: false
  private _useDefaultProxy?: boolean | cdktf.IResolvable; 
  public get useDefaultProxy() {
    return this.getBooleanAttribute('use_default_proxy');
  }
  public set useDefaultProxy(value: boolean | cdktf.IResolvable) {
    this._useDefaultProxy = value;
  }
  public resetUseDefaultProxy() {
    this._useDefaultProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultProxyInput() {
    return this._useDefaultProxy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      audience: cdktf.stringToTerraform(this._audience),
      description: cdktf.stringToTerraform(this._description),
      enable_permissive_configuration: cdktf.booleanToTerraform(this._enablePermissiveConfiguration),
      issuer_url: cdktf.stringToTerraform(this._issuerUrl),
      name: cdktf.stringToTerraform(this._name),
      organization: cdktf.stringToTerraform(this._organization),
      project_key: cdktf.stringToTerraform(this._projectKey),
      provider_type: cdktf.stringToTerraform(this._providerType),
      use_default_proxy: cdktf.booleanToTerraform(this._useDefaultProxy),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      audience: {
        value: cdktf.stringToHclTerraform(this._audience),
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
      enable_permissive_configuration: {
        value: cdktf.booleanToHclTerraform(this._enablePermissiveConfiguration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      issuer_url: {
        value: cdktf.stringToHclTerraform(this._issuerUrl),
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
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_key: {
        value: cdktf.stringToHclTerraform(this._projectKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_type: {
        value: cdktf.stringToHclTerraform(this._providerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_default_proxy: {
        value: cdktf.booleanToHclTerraform(this._useDefaultProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
