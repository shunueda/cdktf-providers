// https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/source_plex
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SourcePlexConfig extends cdktf.TerraformMetaArguments {
  /**
  * Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/source_plex#allow_friends SourcePlex#allow_friends}
  */
  readonly allowFriends?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/source_plex#allowed_servers SourcePlex#allowed_servers}
  */
  readonly allowedServers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/source_plex#authentication_flow SourcePlex#authentication_flow}
  */
  readonly authenticationFlow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/source_plex#client_id SourcePlex#client_id}
  */
  readonly clientId: string;
  /**
  * Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/source_plex#enabled SourcePlex#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/source_plex#enrollment_flow SourcePlex#enrollment_flow}
  */
  readonly enrollmentFlow?: string;
  /**
  * Allowed values:
  *   - `identifier`
  *   - `name_link`
  *   - `name_deny`
  *  Defaults to `identifier`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/source_plex#group_matching_mode SourcePlex#group_matching_mode}
  */
  readonly groupMatchingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/source_plex#id SourcePlex#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/source_plex#name SourcePlex#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/source_plex#plex_token SourcePlex#plex_token}
  */
  readonly plexToken: string;
  /**
  * Allowed values:
  *   - `all`
  *   - `any`
  *  Defaults to `any`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/source_plex#policy_engine_mode SourcePlex#policy_engine_mode}
  */
  readonly policyEngineMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/source_plex#slug SourcePlex#slug}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/source_plex#user_matching_mode SourcePlex#user_matching_mode}
  */
  readonly userMatchingMode?: string;
  /**
  * Defaults to `goauthentik.io/sources/%(slug)s`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/source_plex#user_path_template SourcePlex#user_path_template}
  */
  readonly userPathTemplate?: string;
  /**
  * Generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/source_plex#uuid SourcePlex#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/source_plex authentik_source_plex}
*/
export class SourcePlex extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authentik_source_plex";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SourcePlex resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SourcePlex to import
  * @param importFromId The id of the existing SourcePlex that should be imported. Refer to the {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/source_plex#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SourcePlex to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authentik_source_plex", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/source_plex authentik_source_plex} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SourcePlexConfig
  */
  public constructor(scope: Construct, id: string, config: SourcePlexConfig) {
    super(scope, id, {
      terraformResourceType: 'authentik_source_plex',
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
    this._allowFriends = config.allowFriends;
    this._allowedServers = config.allowedServers;
    this._authenticationFlow = config.authenticationFlow;
    this._clientId = config.clientId;
    this._enabled = config.enabled;
    this._enrollmentFlow = config.enrollmentFlow;
    this._groupMatchingMode = config.groupMatchingMode;
    this._id = config.id;
    this._name = config.name;
    this._plexToken = config.plexToken;
    this._policyEngineMode = config.policyEngineMode;
    this._slug = config.slug;
    this._userMatchingMode = config.userMatchingMode;
    this._userPathTemplate = config.userPathTemplate;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_friends - computed: false, optional: true, required: false
  private _allowFriends?: boolean | cdktf.IResolvable; 
  public get allowFriends() {
    return this.getBooleanAttribute('allow_friends');
  }
  public set allowFriends(value: boolean | cdktf.IResolvable) {
    this._allowFriends = value;
  }
  public resetAllowFriends() {
    this._allowFriends = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowFriendsInput() {
    return this._allowFriends;
  }

  // allowed_servers - computed: false, optional: true, required: false
  private _allowedServers?: string[]; 
  public get allowedServers() {
    return this.getListAttribute('allowed_servers');
  }
  public set allowedServers(value: string[]) {
    this._allowedServers = value;
  }
  public resetAllowedServers() {
    this._allowedServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedServersInput() {
    return this._allowedServers;
  }

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

  // group_matching_mode - computed: false, optional: true, required: false
  private _groupMatchingMode?: string; 
  public get groupMatchingMode() {
    return this.getStringAttribute('group_matching_mode');
  }
  public set groupMatchingMode(value: string) {
    this._groupMatchingMode = value;
  }
  public resetGroupMatchingMode() {
    this._groupMatchingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMatchingModeInput() {
    return this._groupMatchingMode;
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

  // plex_token - computed: false, optional: false, required: true
  private _plexToken?: string; 
  public get plexToken() {
    return this.getStringAttribute('plex_token');
  }
  public set plexToken(value: string) {
    this._plexToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get plexTokenInput() {
    return this._plexToken;
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
      allow_friends: cdktf.booleanToTerraform(this._allowFriends),
      allowed_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedServers),
      authentication_flow: cdktf.stringToTerraform(this._authenticationFlow),
      client_id: cdktf.stringToTerraform(this._clientId),
      enabled: cdktf.booleanToTerraform(this._enabled),
      enrollment_flow: cdktf.stringToTerraform(this._enrollmentFlow),
      group_matching_mode: cdktf.stringToTerraform(this._groupMatchingMode),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      plex_token: cdktf.stringToTerraform(this._plexToken),
      policy_engine_mode: cdktf.stringToTerraform(this._policyEngineMode),
      slug: cdktf.stringToTerraform(this._slug),
      user_matching_mode: cdktf.stringToTerraform(this._userMatchingMode),
      user_path_template: cdktf.stringToTerraform(this._userPathTemplate),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_friends: {
        value: cdktf.booleanToHclTerraform(this._allowFriends),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allowed_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedServers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      authentication_flow: {
        value: cdktf.stringToHclTerraform(this._authenticationFlow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
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
      group_matching_mode: {
        value: cdktf.stringToHclTerraform(this._groupMatchingMode),
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
      plex_token: {
        value: cdktf.stringToHclTerraform(this._plexToken),
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
