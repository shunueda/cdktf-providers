// https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_telegram
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SourceTelegramConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_telegram#authentication_flow SourceTelegram#authentication_flow}
  */
  readonly authenticationFlow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_telegram#bot_token SourceTelegram#bot_token}
  */
  readonly botToken: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_telegram#bot_username SourceTelegram#bot_username}
  */
  readonly botUsername: string;
  /**
  * Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_telegram#enabled SourceTelegram#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_telegram#enrollment_flow SourceTelegram#enrollment_flow}
  */
  readonly enrollmentFlow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_telegram#id SourceTelegram#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_telegram#name SourceTelegram#name}
  */
  readonly name: string;
  /**
  * Allowed values:
  *   - `all`
  *   - `any`
  *  Defaults to `any`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_telegram#policy_engine_mode SourceTelegram#policy_engine_mode}
  */
  readonly policyEngineMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_telegram#pre_authentication_flow SourceTelegram#pre_authentication_flow}
  */
  readonly preAuthenticationFlow: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_telegram#property_mappings SourceTelegram#property_mappings}
  */
  readonly propertyMappings?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_telegram#property_mappings_group SourceTelegram#property_mappings_group}
  */
  readonly propertyMappingsGroup?: string[];
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_telegram#request_message_access SourceTelegram#request_message_access}
  */
  readonly requestMessageAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_telegram#slug SourceTelegram#slug}
  */
  readonly slug: string;
  /**
  * Allowed values:
  *   - `identifier`
  *   - `email_link`
  *   - `email_deny`
  *   - `username_link`
  *   - `username_deny`
  *  Defaults to `identifier`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_telegram#user_matching_mode SourceTelegram#user_matching_mode}
  */
  readonly userMatchingMode?: string;
  /**
  * Defaults to `goauthentik.io/sources/%(slug)s`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_telegram#user_path_template SourceTelegram#user_path_template}
  */
  readonly userPathTemplate?: string;
  /**
  * Generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_telegram#uuid SourceTelegram#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_telegram authentik_source_telegram}
*/
export class SourceTelegram extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authentik_source_telegram";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SourceTelegram resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SourceTelegram to import
  * @param importFromId The id of the existing SourceTelegram that should be imported. Refer to the {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_telegram#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SourceTelegram to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authentik_source_telegram", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_telegram authentik_source_telegram} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SourceTelegramConfig
  */
  public constructor(scope: Construct, id: string, config: SourceTelegramConfig) {
    super(scope, id, {
      terraformResourceType: 'authentik_source_telegram',
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
    this._authenticationFlow = config.authenticationFlow;
    this._botToken = config.botToken;
    this._botUsername = config.botUsername;
    this._enabled = config.enabled;
    this._enrollmentFlow = config.enrollmentFlow;
    this._id = config.id;
    this._name = config.name;
    this._policyEngineMode = config.policyEngineMode;
    this._preAuthenticationFlow = config.preAuthenticationFlow;
    this._propertyMappings = config.propertyMappings;
    this._propertyMappingsGroup = config.propertyMappingsGroup;
    this._requestMessageAccess = config.requestMessageAccess;
    this._slug = config.slug;
    this._userMatchingMode = config.userMatchingMode;
    this._userPathTemplate = config.userPathTemplate;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_flow - computed: false, optional: true, required: false
  private _authenticationFlow?: string; 
  public get authenticationFlow() {
    return this.getStringAttribute('authentication_flow');
  }
  public set authenticationFlow(value: string) {
    this._authenticationFlow = value;
  }
  public resetAuthenticationFlow() {
    this._authenticationFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationFlowInput() {
    return this._authenticationFlow;
  }

  // bot_token - computed: false, optional: false, required: true
  private _botToken?: string; 
  public get botToken() {
    return this.getStringAttribute('bot_token');
  }
  public set botToken(value: string) {
    this._botToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get botTokenInput() {
    return this._botToken;
  }

  // bot_username - computed: false, optional: false, required: true
  private _botUsername?: string; 
  public get botUsername() {
    return this.getStringAttribute('bot_username');
  }
  public set botUsername(value: string) {
    this._botUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get botUsernameInput() {
    return this._botUsername;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // enrollment_flow - computed: false, optional: true, required: false
  private _enrollmentFlow?: string; 
  public get enrollmentFlow() {
    return this.getStringAttribute('enrollment_flow');
  }
  public set enrollmentFlow(value: string) {
    this._enrollmentFlow = value;
  }
  public resetEnrollmentFlow() {
    this._enrollmentFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enrollmentFlowInput() {
    return this._enrollmentFlow;
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

  // policy_engine_mode - computed: false, optional: true, required: false
  private _policyEngineMode?: string; 
  public get policyEngineMode() {
    return this.getStringAttribute('policy_engine_mode');
  }
  public set policyEngineMode(value: string) {
    this._policyEngineMode = value;
  }
  public resetPolicyEngineMode() {
    this._policyEngineMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyEngineModeInput() {
    return this._policyEngineMode;
  }

  // pre_authentication_flow - computed: false, optional: false, required: true
  private _preAuthenticationFlow?: string; 
  public get preAuthenticationFlow() {
    return this.getStringAttribute('pre_authentication_flow');
  }
  public set preAuthenticationFlow(value: string) {
    this._preAuthenticationFlow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preAuthenticationFlowInput() {
    return this._preAuthenticationFlow;
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

  // request_message_access - computed: false, optional: true, required: false
  private _requestMessageAccess?: boolean | cdktf.IResolvable; 
  public get requestMessageAccess() {
    return this.getBooleanAttribute('request_message_access');
  }
  public set requestMessageAccess(value: boolean | cdktf.IResolvable) {
    this._requestMessageAccess = value;
  }
  public resetRequestMessageAccess() {
    this._requestMessageAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMessageAccessInput() {
    return this._requestMessageAccess;
  }

  // slug - computed: false, optional: false, required: true
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // user_matching_mode - computed: false, optional: true, required: false
  private _userMatchingMode?: string; 
  public get userMatchingMode() {
    return this.getStringAttribute('user_matching_mode');
  }
  public set userMatchingMode(value: string) {
    this._userMatchingMode = value;
  }
  public resetUserMatchingMode() {
    this._userMatchingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userMatchingModeInput() {
    return this._userMatchingMode;
  }

  // user_path_template - computed: false, optional: true, required: false
  private _userPathTemplate?: string; 
  public get userPathTemplate() {
    return this.getStringAttribute('user_path_template');
  }
  public set userPathTemplate(value: string) {
    this._userPathTemplate = value;
  }
  public resetUserPathTemplate() {
    this._userPathTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPathTemplateInput() {
    return this._userPathTemplate;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_flow: cdktf.stringToTerraform(this._authenticationFlow),
      bot_token: cdktf.stringToTerraform(this._botToken),
      bot_username: cdktf.stringToTerraform(this._botUsername),
      enabled: cdktf.booleanToTerraform(this._enabled),
      enrollment_flow: cdktf.stringToTerraform(this._enrollmentFlow),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      policy_engine_mode: cdktf.stringToTerraform(this._policyEngineMode),
      pre_authentication_flow: cdktf.stringToTerraform(this._preAuthenticationFlow),
      property_mappings: cdktf.listMapper(cdktf.stringToTerraform, false)(this._propertyMappings),
      property_mappings_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._propertyMappingsGroup),
      request_message_access: cdktf.booleanToTerraform(this._requestMessageAccess),
      slug: cdktf.stringToTerraform(this._slug),
      user_matching_mode: cdktf.stringToTerraform(this._userMatchingMode),
      user_path_template: cdktf.stringToTerraform(this._userPathTemplate),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_flow: {
        value: cdktf.stringToHclTerraform(this._authenticationFlow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bot_token: {
        value: cdktf.stringToHclTerraform(this._botToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bot_username: {
        value: cdktf.stringToHclTerraform(this._botUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enrollment_flow: {
        value: cdktf.stringToHclTerraform(this._enrollmentFlow),
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
      policy_engine_mode: {
        value: cdktf.stringToHclTerraform(this._policyEngineMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pre_authentication_flow: {
        value: cdktf.stringToHclTerraform(this._preAuthenticationFlow),
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
      request_message_access: {
        value: cdktf.booleanToHclTerraform(this._requestMessageAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_matching_mode: {
        value: cdktf.stringToHclTerraform(this._userMatchingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_path_template: {
        value: cdktf.stringToHclTerraform(this._userPathTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
