// https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the bootstrap application for the account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_account#bootstrap_application_name PlatformAccount#bootstrap_application_name}
  */
  readonly bootstrapApplicationName?: string;
  /**
  * OAuth configuration for the bootstrap application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_account#bootstrap_application_oauth_json PlatformAccount#bootstrap_application_oauth_json}
  */
  readonly bootstrapApplicationOauthJson?: string;
  /**
  * Validation policy for the bootstrap application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_account#bootstrap_application_validation_policy PlatformAccount#bootstrap_application_validation_policy}
  */
  readonly bootstrapApplicationValidationPolicy?: string;
  /**
  * Email address of the initial admin user for the new account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_account#first_user_email PlatformAccount#first_user_email}
  */
  readonly firstUserEmail: string;
  /**
  * OIDC subject identifier of the initial admin user for the new account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_account#first_user_sub PlatformAccount#first_user_sub}
  */
  readonly firstUserSub?: string;
  /**
  * Hostname binding map for the account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_account#hostnames PlatformAccount#hostnames}
  */
  readonly hostnames: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * Unique name of the account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_account#name PlatformAccount#name}
  */
  readonly name: string;
  /**
  * ID of an existing OIDC Client to use for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_account#oidc_client_id PlatformAccount#oidc_client_id}
  */
  readonly oidcClientId: string;
  /**
  * Default group to add users to when JIT is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_account#user_jit_default_group PlatformAccount#user_jit_default_group}
  */
  readonly userJitDefaultGroup?: string;
  /**
  * Enable Just-In-Time (JIT) user provisioning for the account, requires a validation policy to also be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_account#user_jit_enabled PlatformAccount#user_jit_enabled}
  */
  readonly userJitEnabled?: boolean | cdktf.IResolvable;
  /**
  * Optional policy for validating the account identity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_account#validation_policy PlatformAccount#validation_policy}
  */
  readonly validationPolicy?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_account kaleido_platform_account}
*/
export class PlatformAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kaleido_platform_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformAccount to import
  * @param importFromId The id of the existing PlatformAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kaleido_platform_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_account kaleido_platform_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformAccountConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'kaleido_platform_account',
      terraformGeneratorMetadata: {
        providerName: 'kaleido',
        providerVersion: '1.2.0',
        providerVersionConstraint: '1.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bootstrapApplicationName = config.bootstrapApplicationName;
    this._bootstrapApplicationOauthJson = config.bootstrapApplicationOauthJson;
    this._bootstrapApplicationValidationPolicy = config.bootstrapApplicationValidationPolicy;
    this._firstUserEmail = config.firstUserEmail;
    this._firstUserSub = config.firstUserSub;
    this._hostnames = config.hostnames;
    this._name = config.name;
    this._oidcClientId = config.oidcClientId;
    this._userJitDefaultGroup = config.userJitDefaultGroup;
    this._userJitEnabled = config.userJitEnabled;
    this._validationPolicy = config.validationPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bootstrap_application_name - computed: false, optional: true, required: false
  private _bootstrapApplicationName?: string; 
  public get bootstrapApplicationName() {
    return this.getStringAttribute('bootstrap_application_name');
  }
  public set bootstrapApplicationName(value: string) {
    this._bootstrapApplicationName = value;
  }
  public resetBootstrapApplicationName() {
    this._bootstrapApplicationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapApplicationNameInput() {
    return this._bootstrapApplicationName;
  }

  // bootstrap_application_oauth_json - computed: false, optional: true, required: false
  private _bootstrapApplicationOauthJson?: string; 
  public get bootstrapApplicationOauthJson() {
    return this.getStringAttribute('bootstrap_application_oauth_json');
  }
  public set bootstrapApplicationOauthJson(value: string) {
    this._bootstrapApplicationOauthJson = value;
  }
  public resetBootstrapApplicationOauthJson() {
    this._bootstrapApplicationOauthJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapApplicationOauthJsonInput() {
    return this._bootstrapApplicationOauthJson;
  }

  // bootstrap_application_validation_policy - computed: false, optional: true, required: false
  private _bootstrapApplicationValidationPolicy?: string; 
  public get bootstrapApplicationValidationPolicy() {
    return this.getStringAttribute('bootstrap_application_validation_policy');
  }
  public set bootstrapApplicationValidationPolicy(value: string) {
    this._bootstrapApplicationValidationPolicy = value;
  }
  public resetBootstrapApplicationValidationPolicy() {
    this._bootstrapApplicationValidationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapApplicationValidationPolicyInput() {
    return this._bootstrapApplicationValidationPolicy;
  }

  // first_user_email - computed: false, optional: false, required: true
  private _firstUserEmail?: string; 
  public get firstUserEmail() {
    return this.getStringAttribute('first_user_email');
  }
  public set firstUserEmail(value: string) {
    this._firstUserEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firstUserEmailInput() {
    return this._firstUserEmail;
  }

  // first_user_sub - computed: false, optional: true, required: false
  private _firstUserSub?: string; 
  public get firstUserSub() {
    return this.getStringAttribute('first_user_sub');
  }
  public set firstUserSub(value: string) {
    this._firstUserSub = value;
  }
  public resetFirstUserSub() {
    this._firstUserSub = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstUserSubInput() {
    return this._firstUserSub;
  }

  // hostnames - computed: false, optional: false, required: true
  private _hostnames?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get hostnames() {
    return this.interpolationForAttribute('hostnames');
  }
  public set hostnames(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._hostnames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnamesInput() {
    return this._hostnames;
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

  // oidc_client_id - computed: false, optional: false, required: true
  private _oidcClientId?: string; 
  public get oidcClientId() {
    return this.getStringAttribute('oidc_client_id');
  }
  public set oidcClientId(value: string) {
    this._oidcClientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcClientIdInput() {
    return this._oidcClientId;
  }

  // user_jit_default_group - computed: false, optional: true, required: false
  private _userJitDefaultGroup?: string; 
  public get userJitDefaultGroup() {
    return this.getStringAttribute('user_jit_default_group');
  }
  public set userJitDefaultGroup(value: string) {
    this._userJitDefaultGroup = value;
  }
  public resetUserJitDefaultGroup() {
    this._userJitDefaultGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userJitDefaultGroupInput() {
    return this._userJitDefaultGroup;
  }

  // user_jit_enabled - computed: false, optional: true, required: false
  private _userJitEnabled?: boolean | cdktf.IResolvable; 
  public get userJitEnabled() {
    return this.getBooleanAttribute('user_jit_enabled');
  }
  public set userJitEnabled(value: boolean | cdktf.IResolvable) {
    this._userJitEnabled = value;
  }
  public resetUserJitEnabled() {
    this._userJitEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userJitEnabledInput() {
    return this._userJitEnabled;
  }

  // validation_policy - computed: false, optional: true, required: false
  private _validationPolicy?: string; 
  public get validationPolicy() {
    return this.getStringAttribute('validation_policy');
  }
  public set validationPolicy(value: string) {
    this._validationPolicy = value;
  }
  public resetValidationPolicy() {
    this._validationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationPolicyInput() {
    return this._validationPolicy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bootstrap_application_name: cdktf.stringToTerraform(this._bootstrapApplicationName),
      bootstrap_application_oauth_json: cdktf.stringToTerraform(this._bootstrapApplicationOauthJson),
      bootstrap_application_validation_policy: cdktf.stringToTerraform(this._bootstrapApplicationValidationPolicy),
      first_user_email: cdktf.stringToTerraform(this._firstUserEmail),
      first_user_sub: cdktf.stringToTerraform(this._firstUserSub),
      hostnames: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(this._hostnames),
      name: cdktf.stringToTerraform(this._name),
      oidc_client_id: cdktf.stringToTerraform(this._oidcClientId),
      user_jit_default_group: cdktf.stringToTerraform(this._userJitDefaultGroup),
      user_jit_enabled: cdktf.booleanToTerraform(this._userJitEnabled),
      validation_policy: cdktf.stringToTerraform(this._validationPolicy),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bootstrap_application_name: {
        value: cdktf.stringToHclTerraform(this._bootstrapApplicationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bootstrap_application_oauth_json: {
        value: cdktf.stringToHclTerraform(this._bootstrapApplicationOauthJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bootstrap_application_validation_policy: {
        value: cdktf.stringToHclTerraform(this._bootstrapApplicationValidationPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      first_user_email: {
        value: cdktf.stringToHclTerraform(this._firstUserEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      first_user_sub: {
        value: cdktf.stringToHclTerraform(this._firstUserSub),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostnames: {
        value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(this._hostnames),
        isBlock: false,
        type: "map",
        storageClassType: "stringListMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_client_id: {
        value: cdktf.stringToHclTerraform(this._oidcClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_jit_default_group: {
        value: cdktf.stringToHclTerraform(this._userJitDefaultGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_jit_enabled: {
        value: cdktf.booleanToHclTerraform(this._userJitEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      validation_policy: {
        value: cdktf.stringToHclTerraform(this._validationPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
