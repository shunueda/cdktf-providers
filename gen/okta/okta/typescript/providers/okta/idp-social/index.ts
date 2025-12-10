// https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/idp_social
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdpSocialConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the account linking action for an IdP user. Default: `AUTO`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/idp_social#account_link_action IdpSocial#account_link_action}
  */
  readonly accountLinkAction?: string;
  /**
  * Group memberships to determine link candidates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/idp_social#account_link_group_include IdpSocial#account_link_group_include}
  */
  readonly accountLinkGroupInclude?: string[];
  /**
  * The Key ID that you obtained from Apple when you created the private key for the client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/idp_social#apple_kid IdpSocial#apple_kid}
  */
  readonly appleKid?: string;
  /**
  * The Key ID that you obtained from Apple when you created the private key for the client. PrivateKey is required when resource is first created. For all consecutive updates, it can be empty/omitted and keeps the existing value if it is empty/omitted. PrivateKey isn't returned when importing this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/idp_social#apple_private_key IdpSocial#apple_private_key}
  */
  readonly applePrivateKey?: string;
  /**
  * The Team ID associated with your Apple developer account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/idp_social#apple_team_id IdpSocial#apple_team_id}
  */
  readonly appleTeamId?: string;
  /**
  * Unique identifier issued by AS for the Okta IdP instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/idp_social#client_id IdpSocial#client_id}
  */
  readonly clientId?: string;
  /**
  * Client secret issued by AS for the Okta IdP instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/idp_social#client_secret IdpSocial#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Action for a previously deprovisioned IdP user during authentication. Can be `NONE` or `REACTIVATE`. Default: `NONE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/idp_social#deprovisioned_action IdpSocial#deprovisioned_action}
  */
  readonly deprovisionedAction?: string;
  /**
  * Provisioning action for IdP user's group memberships. It can be `NONE`, `SYNC`, `APPEND`, or `ASSIGN`. Default: `NONE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/idp_social#groups_action IdpSocial#groups_action}
  */
  readonly groupsAction?: string;
  /**
  * List of Okta Group IDs to add an IdP user as a member with the `ASSIGN` `groups_action`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/idp_social#groups_assignment IdpSocial#groups_assignment}
  */
  readonly groupsAssignment?: string[];
  /**
  * IdP user profile attribute name (case-insensitive) for an array value that contains group memberships.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/idp_social#groups_attribute IdpSocial#groups_attribute}
  */
  readonly groupsAttribute?: string;
  /**
  * Whitelist of Okta Group identifiers that are allowed for the `APPEND` or `SYNC` `groups_action`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/idp_social#groups_filter IdpSocial#groups_filter}
  */
  readonly groupsFilter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/idp_social#id IdpSocial#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Indicates whether Okta uses the original Okta org domain URL, or a custom domain URL. It can be `ORG_URL` or `CUSTOM_URL`. Default: `ORG_URL`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/idp_social#issuer_mode IdpSocial#issuer_mode}
  */
  readonly issuerMode?: string;
  /**
  * Maximum allowable clock-skew when processing messages from the IdP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/idp_social#max_clock_skew IdpSocial#max_clock_skew}
  */
  readonly maxClockSkew?: number;
  /**
  * Name of the IdP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/idp_social#name IdpSocial#name}
  */
  readonly name: string;
  /**
  * Determines if the IdP should act as a source of truth for user profile attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/idp_social#profile_master IdpSocial#profile_master}
  */
  readonly profileMaster?: boolean | cdktf.IResolvable;
  /**
  * The type of protocol to use. It can be `OIDC` or `OAUTH2`. Default: `OAUTH2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/idp_social#protocol_type IdpSocial#protocol_type}
  */
  readonly protocolType?: string;
  /**
  * Provisioning action for an IdP user during authentication. Default: `AUTO`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/idp_social#provisioning_action IdpSocial#provisioning_action}
  */
  readonly provisioningAction?: string;
  /**
  * The scopes of the IdP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/idp_social#scopes IdpSocial#scopes}
  */
  readonly scopes: string[];
  /**
  * Default to `ACTIVE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/idp_social#status IdpSocial#status}
  */
  readonly status?: string;
  /**
  * Okta user profile attribute for matching transformed IdP username. Only for matchType `CUSTOM_ATTRIBUTE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/idp_social#subject_match_attribute IdpSocial#subject_match_attribute}
  */
  readonly subjectMatchAttribute?: string;
  /**
  * Determines the Okta user profile attribute match conditions for account linking and authentication of the transformed IdP username. By default, it is set to `USERNAME`. It can be set to `USERNAME`, `EMAIL`, `USERNAME_OR_EMAIL` or `CUSTOM_ATTRIBUTE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/idp_social#subject_match_type IdpSocial#subject_match_type}
  */
  readonly subjectMatchType?: string;
  /**
  * Action for a previously suspended IdP user during authentication. Can be `NONE` or `REACTIVATE`. Default: `NONE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/idp_social#suspended_action IdpSocial#suspended_action}
  */
  readonly suspendedAction?: string;
  /**
  * Identity Provider Types: https://developer.okta.com/docs/reference/api/idps/#identity-provider-type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/idp_social#type IdpSocial#type}
  */
  readonly type: string;
  /**
  * Okta EL Expression to generate or transform a unique username for the IdP user. Default: `idpuser.email`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/idp_social#username_template IdpSocial#username_template}
  */
  readonly usernameTemplate?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/idp_social okta_idp_social}
*/
export class IdpSocial extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_idp_social";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdpSocial resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdpSocial to import
  * @param importFromId The id of the existing IdpSocial that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/idp_social#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdpSocial to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_idp_social", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/idp_social okta_idp_social} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdpSocialConfig
  */
  public constructor(scope: Construct, id: string, config: IdpSocialConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_idp_social',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.5.2',
        providerVersionConstraint: '6.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountLinkAction = config.accountLinkAction;
    this._accountLinkGroupInclude = config.accountLinkGroupInclude;
    this._appleKid = config.appleKid;
    this._applePrivateKey = config.applePrivateKey;
    this._appleTeamId = config.appleTeamId;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._deprovisionedAction = config.deprovisionedAction;
    this._groupsAction = config.groupsAction;
    this._groupsAssignment = config.groupsAssignment;
    this._groupsAttribute = config.groupsAttribute;
    this._groupsFilter = config.groupsFilter;
    this._id = config.id;
    this._issuerMode = config.issuerMode;
    this._maxClockSkew = config.maxClockSkew;
    this._name = config.name;
    this._profileMaster = config.profileMaster;
    this._protocolType = config.protocolType;
    this._provisioningAction = config.provisioningAction;
    this._scopes = config.scopes;
    this._status = config.status;
    this._subjectMatchAttribute = config.subjectMatchAttribute;
    this._subjectMatchType = config.subjectMatchType;
    this._suspendedAction = config.suspendedAction;
    this._type = config.type;
    this._usernameTemplate = config.usernameTemplate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_link_action - computed: false, optional: true, required: false
  private _accountLinkAction?: string; 
  public get accountLinkAction() {
    return this.getStringAttribute('account_link_action');
  }
  public set accountLinkAction(value: string) {
    this._accountLinkAction = value;
  }
  public resetAccountLinkAction() {
    this._accountLinkAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountLinkActionInput() {
    return this._accountLinkAction;
  }

  // account_link_group_include - computed: false, optional: true, required: false
  private _accountLinkGroupInclude?: string[]; 
  public get accountLinkGroupInclude() {
    return cdktf.Fn.tolist(this.getListAttribute('account_link_group_include'));
  }
  public set accountLinkGroupInclude(value: string[]) {
    this._accountLinkGroupInclude = value;
  }
  public resetAccountLinkGroupInclude() {
    this._accountLinkGroupInclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountLinkGroupIncludeInput() {
    return this._accountLinkGroupInclude;
  }

  // apple_kid - computed: false, optional: true, required: false
  private _appleKid?: string; 
  public get appleKid() {
    return this.getStringAttribute('apple_kid');
  }
  public set appleKid(value: string) {
    this._appleKid = value;
  }
  public resetAppleKid() {
    this._appleKid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appleKidInput() {
    return this._appleKid;
  }

  // apple_private_key - computed: false, optional: true, required: false
  private _applePrivateKey?: string; 
  public get applePrivateKey() {
    return this.getStringAttribute('apple_private_key');
  }
  public set applePrivateKey(value: string) {
    this._applePrivateKey = value;
  }
  public resetApplePrivateKey() {
    this._applePrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applePrivateKeyInput() {
    return this._applePrivateKey;
  }

  // apple_team_id - computed: false, optional: true, required: false
  private _appleTeamId?: string; 
  public get appleTeamId() {
    return this.getStringAttribute('apple_team_id');
  }
  public set appleTeamId(value: string) {
    this._appleTeamId = value;
  }
  public resetAppleTeamId() {
    this._appleTeamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appleTeamIdInput() {
    return this._appleTeamId;
  }

  // authorization_binding - computed: true, optional: false, required: false
  public get authorizationBinding() {
    return this.getStringAttribute('authorization_binding');
  }

  // authorization_url - computed: true, optional: false, required: false
  public get authorizationUrl() {
    return this.getStringAttribute('authorization_url');
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // deprovisioned_action - computed: false, optional: true, required: false
  private _deprovisionedAction?: string; 
  public get deprovisionedAction() {
    return this.getStringAttribute('deprovisioned_action');
  }
  public set deprovisionedAction(value: string) {
    this._deprovisionedAction = value;
  }
  public resetDeprovisionedAction() {
    this._deprovisionedAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deprovisionedActionInput() {
    return this._deprovisionedAction;
  }

  // groups_action - computed: false, optional: true, required: false
  private _groupsAction?: string; 
  public get groupsAction() {
    return this.getStringAttribute('groups_action');
  }
  public set groupsAction(value: string) {
    this._groupsAction = value;
  }
  public resetGroupsAction() {
    this._groupsAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsActionInput() {
    return this._groupsAction;
  }

  // groups_assignment - computed: false, optional: true, required: false
  private _groupsAssignment?: string[]; 
  public get groupsAssignment() {
    return cdktf.Fn.tolist(this.getListAttribute('groups_assignment'));
  }
  public set groupsAssignment(value: string[]) {
    this._groupsAssignment = value;
  }
  public resetGroupsAssignment() {
    this._groupsAssignment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsAssignmentInput() {
    return this._groupsAssignment;
  }

  // groups_attribute - computed: false, optional: true, required: false
  private _groupsAttribute?: string; 
  public get groupsAttribute() {
    return this.getStringAttribute('groups_attribute');
  }
  public set groupsAttribute(value: string) {
    this._groupsAttribute = value;
  }
  public resetGroupsAttribute() {
    this._groupsAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsAttributeInput() {
    return this._groupsAttribute;
  }

  // groups_filter - computed: false, optional: true, required: false
  private _groupsFilter?: string[]; 
  public get groupsFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('groups_filter'));
  }
  public set groupsFilter(value: string[]) {
    this._groupsFilter = value;
  }
  public resetGroupsFilter() {
    this._groupsFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsFilterInput() {
    return this._groupsFilter;
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

  // issuer_mode - computed: false, optional: true, required: false
  private _issuerMode?: string; 
  public get issuerMode() {
    return this.getStringAttribute('issuer_mode');
  }
  public set issuerMode(value: string) {
    this._issuerMode = value;
  }
  public resetIssuerMode() {
    this._issuerMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerModeInput() {
    return this._issuerMode;
  }

  // max_clock_skew - computed: false, optional: true, required: false
  private _maxClockSkew?: number; 
  public get maxClockSkew() {
    return this.getNumberAttribute('max_clock_skew');
  }
  public set maxClockSkew(value: number) {
    this._maxClockSkew = value;
  }
  public resetMaxClockSkew() {
    this._maxClockSkew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxClockSkewInput() {
    return this._maxClockSkew;
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

  // profile_master - computed: false, optional: true, required: false
  private _profileMaster?: boolean | cdktf.IResolvable; 
  public get profileMaster() {
    return this.getBooleanAttribute('profile_master');
  }
  public set profileMaster(value: boolean | cdktf.IResolvable) {
    this._profileMaster = value;
  }
  public resetProfileMaster() {
    this._profileMaster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileMasterInput() {
    return this._profileMaster;
  }

  // protocol_type - computed: false, optional: true, required: false
  private _protocolType?: string; 
  public get protocolType() {
    return this.getStringAttribute('protocol_type');
  }
  public set protocolType(value: string) {
    this._protocolType = value;
  }
  public resetProtocolType() {
    this._protocolType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolTypeInput() {
    return this._protocolType;
  }

  // provisioning_action - computed: false, optional: true, required: false
  private _provisioningAction?: string; 
  public get provisioningAction() {
    return this.getStringAttribute('provisioning_action');
  }
  public set provisioningAction(value: string) {
    this._provisioningAction = value;
  }
  public resetProvisioningAction() {
    this._provisioningAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningActionInput() {
    return this._provisioningAction;
  }

  // scopes - computed: false, optional: false, required: true
  private _scopes?: string[]; 
  public get scopes() {
    return cdktf.Fn.tolist(this.getListAttribute('scopes'));
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // subject_match_attribute - computed: false, optional: true, required: false
  private _subjectMatchAttribute?: string; 
  public get subjectMatchAttribute() {
    return this.getStringAttribute('subject_match_attribute');
  }
  public set subjectMatchAttribute(value: string) {
    this._subjectMatchAttribute = value;
  }
  public resetSubjectMatchAttribute() {
    this._subjectMatchAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectMatchAttributeInput() {
    return this._subjectMatchAttribute;
  }

  // subject_match_type - computed: false, optional: true, required: false
  private _subjectMatchType?: string; 
  public get subjectMatchType() {
    return this.getStringAttribute('subject_match_type');
  }
  public set subjectMatchType(value: string) {
    this._subjectMatchType = value;
  }
  public resetSubjectMatchType() {
    this._subjectMatchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectMatchTypeInput() {
    return this._subjectMatchType;
  }

  // suspended_action - computed: false, optional: true, required: false
  private _suspendedAction?: string; 
  public get suspendedAction() {
    return this.getStringAttribute('suspended_action');
  }
  public set suspendedAction(value: string) {
    this._suspendedAction = value;
  }
  public resetSuspendedAction() {
    this._suspendedAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendedActionInput() {
    return this._suspendedAction;
  }

  // token_binding - computed: true, optional: false, required: false
  public get tokenBinding() {
    return this.getStringAttribute('token_binding');
  }

  // token_url - computed: true, optional: false, required: false
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }

  // trust_audience - computed: true, optional: false, required: false
  public get trustAudience() {
    return this.getStringAttribute('trust_audience');
  }

  // trust_issuer - computed: true, optional: false, required: false
  public get trustIssuer() {
    return this.getStringAttribute('trust_issuer');
  }

  // trust_kid - computed: true, optional: false, required: false
  public get trustKid() {
    return this.getStringAttribute('trust_kid');
  }

  // trust_revocation - computed: true, optional: false, required: false
  public get trustRevocation() {
    return this.getStringAttribute('trust_revocation');
  }

  // trust_revocation_cache_lifetime - computed: true, optional: false, required: false
  public get trustRevocationCacheLifetime() {
    return this.getNumberAttribute('trust_revocation_cache_lifetime');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // username_template - computed: false, optional: true, required: false
  private _usernameTemplate?: string; 
  public get usernameTemplate() {
    return this.getStringAttribute('username_template');
  }
  public set usernameTemplate(value: string) {
    this._usernameTemplate = value;
  }
  public resetUsernameTemplate() {
    this._usernameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameTemplateInput() {
    return this._usernameTemplate;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_link_action: cdktf.stringToTerraform(this._accountLinkAction),
      account_link_group_include: cdktf.listMapper(cdktf.stringToTerraform, false)(this._accountLinkGroupInclude),
      apple_kid: cdktf.stringToTerraform(this._appleKid),
      apple_private_key: cdktf.stringToTerraform(this._applePrivateKey),
      apple_team_id: cdktf.stringToTerraform(this._appleTeamId),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      deprovisioned_action: cdktf.stringToTerraform(this._deprovisionedAction),
      groups_action: cdktf.stringToTerraform(this._groupsAction),
      groups_assignment: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupsAssignment),
      groups_attribute: cdktf.stringToTerraform(this._groupsAttribute),
      groups_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupsFilter),
      id: cdktf.stringToTerraform(this._id),
      issuer_mode: cdktf.stringToTerraform(this._issuerMode),
      max_clock_skew: cdktf.numberToTerraform(this._maxClockSkew),
      name: cdktf.stringToTerraform(this._name),
      profile_master: cdktf.booleanToTerraform(this._profileMaster),
      protocol_type: cdktf.stringToTerraform(this._protocolType),
      provisioning_action: cdktf.stringToTerraform(this._provisioningAction),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
      status: cdktf.stringToTerraform(this._status),
      subject_match_attribute: cdktf.stringToTerraform(this._subjectMatchAttribute),
      subject_match_type: cdktf.stringToTerraform(this._subjectMatchType),
      suspended_action: cdktf.stringToTerraform(this._suspendedAction),
      type: cdktf.stringToTerraform(this._type),
      username_template: cdktf.stringToTerraform(this._usernameTemplate),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_link_action: {
        value: cdktf.stringToHclTerraform(this._accountLinkAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_link_group_include: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._accountLinkGroupInclude),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      apple_kid: {
        value: cdktf.stringToHclTerraform(this._appleKid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apple_private_key: {
        value: cdktf.stringToHclTerraform(this._applePrivateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apple_team_id: {
        value: cdktf.stringToHclTerraform(this._appleTeamId),
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
      client_secret: {
        value: cdktf.stringToHclTerraform(this._clientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deprovisioned_action: {
        value: cdktf.stringToHclTerraform(this._deprovisionedAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groups_action: {
        value: cdktf.stringToHclTerraform(this._groupsAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groups_assignment: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groupsAssignment),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      groups_attribute: {
        value: cdktf.stringToHclTerraform(this._groupsAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groups_filter: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groupsFilter),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      issuer_mode: {
        value: cdktf.stringToHclTerraform(this._issuerMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_clock_skew: {
        value: cdktf.numberToHclTerraform(this._maxClockSkew),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_master: {
        value: cdktf.booleanToHclTerraform(this._profileMaster),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      protocol_type: {
        value: cdktf.stringToHclTerraform(this._protocolType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provisioning_action: {
        value: cdktf.stringToHclTerraform(this._provisioningAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scopes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subject_match_attribute: {
        value: cdktf.stringToHclTerraform(this._subjectMatchAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subject_match_type: {
        value: cdktf.stringToHclTerraform(this._subjectMatchType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      suspended_action: {
        value: cdktf.stringToHclTerraform(this._suspendedAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username_template: {
        value: cdktf.stringToHclTerraform(this._usernameTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
