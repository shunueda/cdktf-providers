// https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/system_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Defaults to `gravatar,initials`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/system_settings#avatars SystemSettings#avatars}
  */
  readonly avatars?: string;
  /**
  * Format: hours=1;minutes=2;seconds=3. Defaults to `minutes=30`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/system_settings#default_token_duration SystemSettings#default_token_duration}
  */
  readonly defaultTokenDuration?: string;
  /**
  * Defaults to `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/system_settings#default_token_length SystemSettings#default_token_length}
  */
  readonly defaultTokenLength?: number;
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/system_settings#default_user_change_email SystemSettings#default_user_change_email}
  */
  readonly defaultUserChangeEmail?: boolean | cdktf.IResolvable;
  /**
  * Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/system_settings#default_user_change_name SystemSettings#default_user_change_name}
  */
  readonly defaultUserChangeName?: boolean | cdktf.IResolvable;
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/system_settings#default_user_change_username SystemSettings#default_user_change_username}
  */
  readonly defaultUserChangeUsername?: boolean | cdktf.IResolvable;
  /**
  * Format: hours=1;minutes=2;seconds=3. Defaults to `days=365`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/system_settings#event_retention SystemSettings#event_retention}
  */
  readonly eventRetention?: string;
  /**
  * JSON format expected. Use `jsonencode()` to pass objects. Defaults to `{"policies_buffered_access_view": false}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/system_settings#flags SystemSettings#flags}
  */
  readonly flags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/system_settings#footer_links SystemSettings#footer_links}
  */
  readonly footerLinks?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/system_settings#gdpr_compliance SystemSettings#gdpr_compliance}
  */
  readonly gdprCompliance?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/system_settings#id SystemSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/system_settings#impersonation SystemSettings#impersonation}
  */
  readonly impersonation?: boolean | cdktf.IResolvable;
  /**
  * Defaults to `-5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/system_settings#reputation_lower_limit SystemSettings#reputation_lower_limit}
  */
  readonly reputationLowerLimit?: number;
  /**
  * Defaults to `5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/system_settings#reputation_upper_limit SystemSettings#reputation_upper_limit}
  */
  readonly reputationUpperLimit?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/system_settings authentik_system_settings}
*/
export class SystemSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authentik_system_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemSettings to import
  * @param importFromId The id of the existing SystemSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/system_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authentik_system_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/system_settings authentik_system_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'authentik_system_settings',
      terraformGeneratorMetadata: {
        providerName: 'authentik',
        providerVersion: '2025.10.1',
        providerVersionConstraint: '2025.10.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._avatars = config.avatars;
    this._defaultTokenDuration = config.defaultTokenDuration;
    this._defaultTokenLength = config.defaultTokenLength;
    this._defaultUserChangeEmail = config.defaultUserChangeEmail;
    this._defaultUserChangeName = config.defaultUserChangeName;
    this._defaultUserChangeUsername = config.defaultUserChangeUsername;
    this._eventRetention = config.eventRetention;
    this._flags = config.flags;
    this._footerLinks = config.footerLinks;
    this._gdprCompliance = config.gdprCompliance;
    this._id = config.id;
    this._impersonation = config.impersonation;
    this._reputationLowerLimit = config.reputationLowerLimit;
    this._reputationUpperLimit = config.reputationUpperLimit;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // avatars - computed: false, optional: true, required: false
  private _avatars?: string; 
  public get avatars() {
    return this.getStringAttribute('avatars');
  }
  public set avatars(value: string) {
    this._avatars = value;
  }
  public resetAvatars() {
    this._avatars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avatarsInput() {
    return this._avatars;
  }

  // default_token_duration - computed: false, optional: true, required: false
  private _defaultTokenDuration?: string; 
  public get defaultTokenDuration() {
    return this.getStringAttribute('default_token_duration');
  }
  public set defaultTokenDuration(value: string) {
    this._defaultTokenDuration = value;
  }
  public resetDefaultTokenDuration() {
    this._defaultTokenDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTokenDurationInput() {
    return this._defaultTokenDuration;
  }

  // default_token_length - computed: false, optional: true, required: false
  private _defaultTokenLength?: number; 
  public get defaultTokenLength() {
    return this.getNumberAttribute('default_token_length');
  }
  public set defaultTokenLength(value: number) {
    this._defaultTokenLength = value;
  }
  public resetDefaultTokenLength() {
    this._defaultTokenLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTokenLengthInput() {
    return this._defaultTokenLength;
  }

  // default_user_change_email - computed: false, optional: true, required: false
  private _defaultUserChangeEmail?: boolean | cdktf.IResolvable; 
  public get defaultUserChangeEmail() {
    return this.getBooleanAttribute('default_user_change_email');
  }
  public set defaultUserChangeEmail(value: boolean | cdktf.IResolvable) {
    this._defaultUserChangeEmail = value;
  }
  public resetDefaultUserChangeEmail() {
    this._defaultUserChangeEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultUserChangeEmailInput() {
    return this._defaultUserChangeEmail;
  }

  // default_user_change_name - computed: false, optional: true, required: false
  private _defaultUserChangeName?: boolean | cdktf.IResolvable; 
  public get defaultUserChangeName() {
    return this.getBooleanAttribute('default_user_change_name');
  }
  public set defaultUserChangeName(value: boolean | cdktf.IResolvable) {
    this._defaultUserChangeName = value;
  }
  public resetDefaultUserChangeName() {
    this._defaultUserChangeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultUserChangeNameInput() {
    return this._defaultUserChangeName;
  }

  // default_user_change_username - computed: false, optional: true, required: false
  private _defaultUserChangeUsername?: boolean | cdktf.IResolvable; 
  public get defaultUserChangeUsername() {
    return this.getBooleanAttribute('default_user_change_username');
  }
  public set defaultUserChangeUsername(value: boolean | cdktf.IResolvable) {
    this._defaultUserChangeUsername = value;
  }
  public resetDefaultUserChangeUsername() {
    this._defaultUserChangeUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultUserChangeUsernameInput() {
    return this._defaultUserChangeUsername;
  }

  // event_retention - computed: false, optional: true, required: false
  private _eventRetention?: string; 
  public get eventRetention() {
    return this.getStringAttribute('event_retention');
  }
  public set eventRetention(value: string) {
    this._eventRetention = value;
  }
  public resetEventRetention() {
    this._eventRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventRetentionInput() {
    return this._eventRetention;
  }

  // flags - computed: false, optional: true, required: false
  private _flags?: string; 
  public get flags() {
    return this.getStringAttribute('flags');
  }
  public set flags(value: string) {
    this._flags = value;
  }
  public resetFlags() {
    this._flags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flagsInput() {
    return this._flags;
  }

  // footer_links - computed: false, optional: true, required: false
  private _footerLinks?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get footerLinks() {
    return this.interpolationForAttribute('footer_links');
  }
  public set footerLinks(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._footerLinks = value;
  }
  public resetFooterLinks() {
    this._footerLinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get footerLinksInput() {
    return this._footerLinks;
  }

  // gdpr_compliance - computed: false, optional: true, required: false
  private _gdprCompliance?: boolean | cdktf.IResolvable; 
  public get gdprCompliance() {
    return this.getBooleanAttribute('gdpr_compliance');
  }
  public set gdprCompliance(value: boolean | cdktf.IResolvable) {
    this._gdprCompliance = value;
  }
  public resetGdprCompliance() {
    this._gdprCompliance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gdprComplianceInput() {
    return this._gdprCompliance;
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

  // impersonation - computed: false, optional: true, required: false
  private _impersonation?: boolean | cdktf.IResolvable; 
  public get impersonation() {
    return this.getBooleanAttribute('impersonation');
  }
  public set impersonation(value: boolean | cdktf.IResolvable) {
    this._impersonation = value;
  }
  public resetImpersonation() {
    this._impersonation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get impersonationInput() {
    return this._impersonation;
  }

  // reputation_lower_limit - computed: false, optional: true, required: false
  private _reputationLowerLimit?: number; 
  public get reputationLowerLimit() {
    return this.getNumberAttribute('reputation_lower_limit');
  }
  public set reputationLowerLimit(value: number) {
    this._reputationLowerLimit = value;
  }
  public resetReputationLowerLimit() {
    this._reputationLowerLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reputationLowerLimitInput() {
    return this._reputationLowerLimit;
  }

  // reputation_upper_limit - computed: false, optional: true, required: false
  private _reputationUpperLimit?: number; 
  public get reputationUpperLimit() {
    return this.getNumberAttribute('reputation_upper_limit');
  }
  public set reputationUpperLimit(value: number) {
    this._reputationUpperLimit = value;
  }
  public resetReputationUpperLimit() {
    this._reputationUpperLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reputationUpperLimitInput() {
    return this._reputationUpperLimit;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      avatars: cdktf.stringToTerraform(this._avatars),
      default_token_duration: cdktf.stringToTerraform(this._defaultTokenDuration),
      default_token_length: cdktf.numberToTerraform(this._defaultTokenLength),
      default_user_change_email: cdktf.booleanToTerraform(this._defaultUserChangeEmail),
      default_user_change_name: cdktf.booleanToTerraform(this._defaultUserChangeName),
      default_user_change_username: cdktf.booleanToTerraform(this._defaultUserChangeUsername),
      event_retention: cdktf.stringToTerraform(this._eventRetention),
      flags: cdktf.stringToTerraform(this._flags),
      footer_links: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(this._footerLinks),
      gdpr_compliance: cdktf.booleanToTerraform(this._gdprCompliance),
      id: cdktf.stringToTerraform(this._id),
      impersonation: cdktf.booleanToTerraform(this._impersonation),
      reputation_lower_limit: cdktf.numberToTerraform(this._reputationLowerLimit),
      reputation_upper_limit: cdktf.numberToTerraform(this._reputationUpperLimit),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      avatars: {
        value: cdktf.stringToHclTerraform(this._avatars),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_token_duration: {
        value: cdktf.stringToHclTerraform(this._defaultTokenDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_token_length: {
        value: cdktf.numberToHclTerraform(this._defaultTokenLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_user_change_email: {
        value: cdktf.booleanToHclTerraform(this._defaultUserChangeEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_user_change_name: {
        value: cdktf.booleanToHclTerraform(this._defaultUserChangeName),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_user_change_username: {
        value: cdktf.booleanToHclTerraform(this._defaultUserChangeUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      event_retention: {
        value: cdktf.stringToHclTerraform(this._eventRetention),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flags: {
        value: cdktf.stringToHclTerraform(this._flags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      footer_links: {
        value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(this._footerLinks),
        isBlock: false,
        type: "list",
        storageClassType: "stringMapList",
      },
      gdpr_compliance: {
        value: cdktf.booleanToHclTerraform(this._gdprCompliance),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      impersonation: {
        value: cdktf.booleanToHclTerraform(this._impersonation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      reputation_lower_limit: {
        value: cdktf.numberToHclTerraform(this._reputationLowerLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reputation_upper_limit: {
        value: cdktf.numberToHclTerraform(this._reputationUpperLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
