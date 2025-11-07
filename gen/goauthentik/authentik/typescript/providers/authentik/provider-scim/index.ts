// https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_scim
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProviderScimConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allowed values:
  *   - `token`
  *   - `oauth`
  *  Defaults to `token`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_scim#auth_mode ProviderScim#auth_mode}
  */
  readonly authMode?: string;
  /**
  * Slug of an OAuth source used for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_scim#auth_oauth ProviderScim#auth_oauth}
  */
  readonly authOauth?: string;
  /**
  * JSON format expected. Use `jsonencode()` to pass objects. Defaults to `{}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_scim#auth_oauth_params ProviderScim#auth_oauth_params}
  */
  readonly authOauthParams?: string;
  /**
  * Allowed values:
  *   - `default`
  *   - `aws`
  *   - `slack`
  *   - `sfdc`
  *  Defaults to `default`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_scim#compatibility_mode ProviderScim#compatibility_mode}
  */
  readonly compatibilityMode?: string;
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_scim#dry_run ProviderScim#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_scim#exclude_users_service_account ProviderScim#exclude_users_service_account}
  */
  readonly excludeUsersServiceAccount?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_scim#filter_group ProviderScim#filter_group}
  */
  readonly filterGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_scim#id ProviderScim#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_scim#name ProviderScim#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_scim#property_mappings ProviderScim#property_mappings}
  */
  readonly propertyMappings?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_scim#property_mappings_group ProviderScim#property_mappings_group}
  */
  readonly propertyMappingsGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_scim#token ProviderScim#token}
  */
  readonly token?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_scim#url ProviderScim#url}
  */
  readonly url: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_scim authentik_provider_scim}
*/
export class ProviderScim extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authentik_provider_scim";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProviderScim resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProviderScim to import
  * @param importFromId The id of the existing ProviderScim that should be imported. Refer to the {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_scim#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProviderScim to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authentik_provider_scim", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_scim authentik_provider_scim} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProviderScimConfig
  */
  public constructor(scope: Construct, id: string, config: ProviderScimConfig) {
    super(scope, id, {
      terraformResourceType: 'authentik_provider_scim',
      terraformGeneratorMetadata: {
        providerName: 'authentik',
        providerVersion: '2025.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authMode = config.authMode;
    this._authOauth = config.authOauth;
    this._authOauthParams = config.authOauthParams;
    this._compatibilityMode = config.compatibilityMode;
    this._dryRun = config.dryRun;
    this._excludeUsersServiceAccount = config.excludeUsersServiceAccount;
    this._filterGroup = config.filterGroup;
    this._id = config.id;
    this._name = config.name;
    this._propertyMappings = config.propertyMappings;
    this._propertyMappingsGroup = config.propertyMappingsGroup;
    this._token = config.token;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_mode - computed: false, optional: true, required: false
  private _authMode?: string; 
  public get authMode() {
    return this.getStringAttribute('auth_mode');
  }
  public set authMode(value: string) {
    this._authMode = value;
  }
  public resetAuthMode() {
    this._authMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authModeInput() {
    return this._authMode;
  }

  // auth_oauth - computed: false, optional: true, required: false
  private _authOauth?: string; 
  public get authOauth() {
    return this.getStringAttribute('auth_oauth');
  }
  public set authOauth(value: string) {
    this._authOauth = value;
  }
  public resetAuthOauth() {
    this._authOauth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authOauthInput() {
    return this._authOauth;
  }

  // auth_oauth_params - computed: false, optional: true, required: false
  private _authOauthParams?: string; 
  public get authOauthParams() {
    return this.getStringAttribute('auth_oauth_params');
  }
  public set authOauthParams(value: string) {
    this._authOauthParams = value;
  }
  public resetAuthOauthParams() {
    this._authOauthParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authOauthParamsInput() {
    return this._authOauthParams;
  }

  // compatibility_mode - computed: false, optional: true, required: false
  private _compatibilityMode?: string; 
  public get compatibilityMode() {
    return this.getStringAttribute('compatibility_mode');
  }
  public set compatibilityMode(value: string) {
    this._compatibilityMode = value;
  }
  public resetCompatibilityMode() {
    this._compatibilityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compatibilityModeInput() {
    return this._compatibilityMode;
  }

  // dry_run - computed: false, optional: true, required: false
  private _dryRun?: boolean | cdktf.IResolvable; 
  public get dryRun() {
    return this.getBooleanAttribute('dry_run');
  }
  public set dryRun(value: boolean | cdktf.IResolvable) {
    this._dryRun = value;
  }
  public resetDryRun() {
    this._dryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryRunInput() {
    return this._dryRun;
  }

  // exclude_users_service_account - computed: false, optional: true, required: false
  private _excludeUsersServiceAccount?: boolean | cdktf.IResolvable; 
  public get excludeUsersServiceAccount() {
    return this.getBooleanAttribute('exclude_users_service_account');
  }
  public set excludeUsersServiceAccount(value: boolean | cdktf.IResolvable) {
    this._excludeUsersServiceAccount = value;
  }
  public resetExcludeUsersServiceAccount() {
    this._excludeUsersServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeUsersServiceAccountInput() {
    return this._excludeUsersServiceAccount;
  }

  // filter_group - computed: false, optional: true, required: false
  private _filterGroup?: string; 
  public get filterGroup() {
    return this.getStringAttribute('filter_group');
  }
  public set filterGroup(value: string) {
    this._filterGroup = value;
  }
  public resetFilterGroup() {
    this._filterGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterGroupInput() {
    return this._filterGroup;
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

  // property_mappings - computed: false, optional: true, required: false
  private _propertyMappings?: string[]; 
  public get propertyMappings() {
    return this.getListAttribute('property_mappings');
  }
  public set propertyMappings(value: string[]) {
    this._propertyMappings = value;
  }
  public resetPropertyMappings() {
    this._propertyMappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyMappingsInput() {
    return this._propertyMappings;
  }

  // property_mappings_group - computed: false, optional: true, required: false
  private _propertyMappingsGroup?: string[]; 
  public get propertyMappingsGroup() {
    return this.getListAttribute('property_mappings_group');
  }
  public set propertyMappingsGroup(value: string[]) {
    this._propertyMappingsGroup = value;
  }
  public resetPropertyMappingsGroup() {
    this._propertyMappingsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyMappingsGroupInput() {
    return this._propertyMappingsGroup;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_mode: cdktf.stringToTerraform(this._authMode),
      auth_oauth: cdktf.stringToTerraform(this._authOauth),
      auth_oauth_params: cdktf.stringToTerraform(this._authOauthParams),
      compatibility_mode: cdktf.stringToTerraform(this._compatibilityMode),
      dry_run: cdktf.booleanToTerraform(this._dryRun),
      exclude_users_service_account: cdktf.booleanToTerraform(this._excludeUsersServiceAccount),
      filter_group: cdktf.stringToTerraform(this._filterGroup),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      property_mappings: cdktf.listMapper(cdktf.stringToTerraform, false)(this._propertyMappings),
      property_mappings_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._propertyMappingsGroup),
      token: cdktf.stringToTerraform(this._token),
      url: cdktf.stringToTerraform(this._url),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_mode: {
        value: cdktf.stringToHclTerraform(this._authMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_oauth: {
        value: cdktf.stringToHclTerraform(this._authOauth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_oauth_params: {
        value: cdktf.stringToHclTerraform(this._authOauthParams),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compatibility_mode: {
        value: cdktf.stringToHclTerraform(this._compatibilityMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dry_run: {
        value: cdktf.booleanToHclTerraform(this._dryRun),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exclude_users_service_account: {
        value: cdktf.booleanToHclTerraform(this._excludeUsersServiceAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filter_group: {
        value: cdktf.stringToHclTerraform(this._filterGroup),
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
      property_mappings: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._propertyMappings),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      property_mappings_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._propertyMappingsGroup),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
