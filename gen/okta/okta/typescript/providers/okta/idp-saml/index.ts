// https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/idp_saml
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdpSamlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the account linking action for an IdP user. Default: `AUTO`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/idp_saml#account_link_action IdpSaml#account_link_action}
  */
  readonly accountLinkAction?: string;
  /**
  * Group memberships to determine link candidates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/idp_saml#account_link_group_include IdpSaml#account_link_group_include}
  */
  readonly accountLinkGroupInclude?: string[];
  /**
  * The type of ACS. It can be `INSTANCE` or `ORG`. Default: `INSTANCE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/idp_saml#acs_type IdpSaml#acs_type}
  */
  readonly acsType?: string;
  /**
  * Action for a previously deprovisioned IdP user during authentication. Can be `NONE` or `REACTIVATE`. Default: `NONE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/idp_saml#deprovisioned_action IdpSaml#deprovisioned_action}
  */
  readonly deprovisionedAction?: string;
  /**
  * Provisioning action for IdP user's group memberships. It can be `NONE`, `SYNC`, `APPEND`, or `ASSIGN`. Default: `NONE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/idp_saml#groups_action IdpSaml#groups_action}
  */
  readonly groupsAction?: string;
  /**
  * List of Okta Group IDs to add an IdP user as a member with the `ASSIGN` `groups_action`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/idp_saml#groups_assignment IdpSaml#groups_assignment}
  */
  readonly groupsAssignment?: string[];
  /**
  * IdP user profile attribute name (case-insensitive) for an array value that contains group memberships.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/idp_saml#groups_attribute IdpSaml#groups_attribute}
  */
  readonly groupsAttribute?: string;
  /**
  * Whitelist of Okta Group identifiers that are allowed for the `APPEND` or `SYNC` `groups_action`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/idp_saml#groups_filter IdpSaml#groups_filter}
  */
  readonly groupsFilter?: string[];
  /**
  * Determines if the IdP should persist account linking when the incoming assertion NameID format is urn:oasis:names:tc:SAML:2.0:nameid-format:persistent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/idp_saml#honor_persistent_name_id IdpSaml#honor_persistent_name_id}
  */
  readonly honorPersistentNameId?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/idp_saml#id IdpSaml#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * URI that identifies the issuer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/idp_saml#issuer IdpSaml#issuer}
  */
  readonly issuer: string;
  /**
  * Indicates whether Okta uses the original Okta org domain URL, or a custom domain URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/idp_saml#issuer_mode IdpSaml#issuer_mode}
  */
  readonly issuerMode?: string;
  /**
  * The ID of the signing key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/idp_saml#kid IdpSaml#kid}
  */
  readonly kid: string;
  /**
  * Maximum allowable clock-skew when processing messages from the IdP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/idp_saml#max_clock_skew IdpSaml#max_clock_skew}
  */
  readonly maxClockSkew?: number;
  /**
  * Name of the IdP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/idp_saml#name IdpSaml#name}
  */
  readonly name: string;
  /**
  * The name identifier format to use. By default `urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/idp_saml#name_format IdpSaml#name_format}
  */
  readonly nameFormat?: string;
  /**
  * Determines if the IdP should act as a source of truth for user profile attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/idp_saml#profile_master IdpSaml#profile_master}
  */
  readonly profileMaster?: boolean | cdktf.IResolvable;
  /**
  * Provisioning action for an IdP user during authentication. Default: `AUTO`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/idp_saml#provisioning_action IdpSaml#provisioning_action}
  */
  readonly provisioningAction?: string;
  /**
  * The XML digital Signature Algorithm used when signing an `AuthnRequest` message. It can be `SHA-256` or `SHA-1`. Default: `SHA-256`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/idp_saml#request_signature_algorithm IdpSaml#request_signature_algorithm}
  */
  readonly requestSignatureAlgorithm?: string;
  /**
  * Specifies whether to digitally sign an AuthnRequest messages to the IdP. It can be `REQUEST` or `NONE`. Default: `REQUEST`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/idp_saml#request_signature_scope IdpSaml#request_signature_scope}
  */
  readonly requestSignatureScope?: string;
  /**
  * The minimum XML digital signature algorithm allowed when verifying a `SAMLResponse` message or Assertion element. It can be `SHA-256` or `SHA-1`. Default: `SHA-256`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/idp_saml#response_signature_algorithm IdpSaml#response_signature_algorithm}
  */
  readonly responseSignatureAlgorithm?: string;
  /**
  * Specifies whether to verify a `SAMLResponse` message or Assertion element XML digital signature. It can be `RESPONSE`, `ASSERTION`, or `ANY`. Default: `ANY`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/idp_saml#response_signature_scope IdpSaml#response_signature_scope}
  */
  readonly responseSignatureScope?: string;
  /**
  * The method of making an SSO request. It can be set to `HTTP-POST` or `HTTP-REDIRECT`. Default: `HTTP-POST`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/idp_saml#sso_binding IdpSaml#sso_binding}
  */
  readonly ssoBinding?: string;
  /**
  * URI reference indicating the address to which the AuthnRequest message is sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/idp_saml#sso_destination IdpSaml#sso_destination}
  */
  readonly ssoDestination?: string;
  /**
  * URL of binding-specific endpoint to send an AuthnRequest message to IdP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/idp_saml#sso_url IdpSaml#sso_url}
  */
  readonly ssoUrl: string;
  /**
  * Default to `ACTIVE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/idp_saml#status IdpSaml#status}
  */
  readonly status?: string;
  /**
  * Optional regular expression pattern used to filter untrusted IdP usernames.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/idp_saml#subject_filter IdpSaml#subject_filter}
  */
  readonly subjectFilter?: string;
  /**
  * The name format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/idp_saml#subject_format IdpSaml#subject_format}
  */
  readonly subjectFormat?: string[];
  /**
  * Okta user profile attribute for matching transformed IdP username. Only for matchType `CUSTOM_ATTRIBUTE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/idp_saml#subject_match_attribute IdpSaml#subject_match_attribute}
  */
  readonly subjectMatchAttribute?: string;
  /**
  * Determines the Okta user profile attribute match conditions for account linking and authentication of the transformed IdP username. By default, it is set to `USERNAME`. It can be set to `USERNAME`, `EMAIL`, `USERNAME_OR_EMAIL` or `CUSTOM_ATTRIBUTE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/idp_saml#subject_match_type IdpSaml#subject_match_type}
  */
  readonly subjectMatchType?: string;
  /**
  * Action for a previously suspended IdP user during authentication. Can be `NONE` or `REACTIVATE`. Default: `NONE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/idp_saml#suspended_action IdpSaml#suspended_action}
  */
  readonly suspendedAction?: string;
  /**
  * Okta EL Expression to generate or transform a unique username for the IdP user. Default: `idpuser.email`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/idp_saml#username_template IdpSaml#username_template}
  */
  readonly usernameTemplate?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/idp_saml okta_idp_saml}
*/
export class IdpSaml extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_idp_saml";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdpSaml resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdpSaml to import
  * @param importFromId The id of the existing IdpSaml that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/idp_saml#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdpSaml to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_idp_saml", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/idp_saml okta_idp_saml} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdpSamlConfig
  */
  public constructor(scope: Construct, id: string, config: IdpSamlConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_idp_saml',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.4.0'
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
    this._acsType = config.acsType;
    this._deprovisionedAction = config.deprovisionedAction;
    this._groupsAction = config.groupsAction;
    this._groupsAssignment = config.groupsAssignment;
    this._groupsAttribute = config.groupsAttribute;
    this._groupsFilter = config.groupsFilter;
    this._honorPersistentNameId = config.honorPersistentNameId;
    this._id = config.id;
    this._issuer = config.issuer;
    this._issuerMode = config.issuerMode;
    this._kid = config.kid;
    this._maxClockSkew = config.maxClockSkew;
    this._name = config.name;
    this._nameFormat = config.nameFormat;
    this._profileMaster = config.profileMaster;
    this._provisioningAction = config.provisioningAction;
    this._requestSignatureAlgorithm = config.requestSignatureAlgorithm;
    this._requestSignatureScope = config.requestSignatureScope;
    this._responseSignatureAlgorithm = config.responseSignatureAlgorithm;
    this._responseSignatureScope = config.responseSignatureScope;
    this._ssoBinding = config.ssoBinding;
    this._ssoDestination = config.ssoDestination;
    this._ssoUrl = config.ssoUrl;
    this._status = config.status;
    this._subjectFilter = config.subjectFilter;
    this._subjectFormat = config.subjectFormat;
    this._subjectMatchAttribute = config.subjectMatchAttribute;
    this._subjectMatchType = config.subjectMatchType;
    this._suspendedAction = config.suspendedAction;
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

  // acs_binding - computed: true, optional: false, required: false
  public get acsBinding() {
    return this.getStringAttribute('acs_binding');
  }

  // acs_type - computed: false, optional: true, required: false
  private _acsType?: string; 
  public get acsType() {
    return this.getStringAttribute('acs_type');
  }
  public set acsType(value: string) {
    this._acsType = value;
  }
  public resetAcsType() {
    this._acsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acsTypeInput() {
    return this._acsType;
  }

  // audience - computed: true, optional: false, required: false
  public get audience() {
    return this.getStringAttribute('audience');
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

  // honor_persistent_name_id - computed: false, optional: true, required: false
  private _honorPersistentNameId?: boolean | cdktf.IResolvable; 
  public get honorPersistentNameId() {
    return this.getBooleanAttribute('honor_persistent_name_id');
  }
  public set honorPersistentNameId(value: boolean | cdktf.IResolvable) {
    this._honorPersistentNameId = value;
  }
  public resetHonorPersistentNameId() {
    this._honorPersistentNameId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get honorPersistentNameIdInput() {
    return this._honorPersistentNameId;
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

  // issuer - computed: false, optional: false, required: true
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
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

  // kid - computed: false, optional: false, required: true
  private _kid?: string; 
  public get kid() {
    return this.getStringAttribute('kid');
  }
  public set kid(value: string) {
    this._kid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kidInput() {
    return this._kid;
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

  // name_format - computed: false, optional: true, required: false
  private _nameFormat?: string; 
  public get nameFormat() {
    return this.getStringAttribute('name_format');
  }
  public set nameFormat(value: string) {
    this._nameFormat = value;
  }
  public resetNameFormat() {
    this._nameFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameFormatInput() {
    return this._nameFormat;
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

  // request_signature_algorithm - computed: false, optional: true, required: false
  private _requestSignatureAlgorithm?: string; 
  public get requestSignatureAlgorithm() {
    return this.getStringAttribute('request_signature_algorithm');
  }
  public set requestSignatureAlgorithm(value: string) {
    this._requestSignatureAlgorithm = value;
  }
  public resetRequestSignatureAlgorithm() {
    this._requestSignatureAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestSignatureAlgorithmInput() {
    return this._requestSignatureAlgorithm;
  }

  // request_signature_scope - computed: false, optional: true, required: false
  private _requestSignatureScope?: string; 
  public get requestSignatureScope() {
    return this.getStringAttribute('request_signature_scope');
  }
  public set requestSignatureScope(value: string) {
    this._requestSignatureScope = value;
  }
  public resetRequestSignatureScope() {
    this._requestSignatureScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestSignatureScopeInput() {
    return this._requestSignatureScope;
  }

  // response_signature_algorithm - computed: false, optional: true, required: false
  private _responseSignatureAlgorithm?: string; 
  public get responseSignatureAlgorithm() {
    return this.getStringAttribute('response_signature_algorithm');
  }
  public set responseSignatureAlgorithm(value: string) {
    this._responseSignatureAlgorithm = value;
  }
  public resetResponseSignatureAlgorithm() {
    this._responseSignatureAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseSignatureAlgorithmInput() {
    return this._responseSignatureAlgorithm;
  }

  // response_signature_scope - computed: false, optional: true, required: false
  private _responseSignatureScope?: string; 
  public get responseSignatureScope() {
    return this.getStringAttribute('response_signature_scope');
  }
  public set responseSignatureScope(value: string) {
    this._responseSignatureScope = value;
  }
  public resetResponseSignatureScope() {
    this._responseSignatureScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseSignatureScopeInput() {
    return this._responseSignatureScope;
  }

  // sso_binding - computed: false, optional: true, required: false
  private _ssoBinding?: string; 
  public get ssoBinding() {
    return this.getStringAttribute('sso_binding');
  }
  public set ssoBinding(value: string) {
    this._ssoBinding = value;
  }
  public resetSsoBinding() {
    this._ssoBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoBindingInput() {
    return this._ssoBinding;
  }

  // sso_destination - computed: false, optional: true, required: false
  private _ssoDestination?: string; 
  public get ssoDestination() {
    return this.getStringAttribute('sso_destination');
  }
  public set ssoDestination(value: string) {
    this._ssoDestination = value;
  }
  public resetSsoDestination() {
    this._ssoDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoDestinationInput() {
    return this._ssoDestination;
  }

  // sso_url - computed: false, optional: false, required: true
  private _ssoUrl?: string; 
  public get ssoUrl() {
    return this.getStringAttribute('sso_url');
  }
  public set ssoUrl(value: string) {
    this._ssoUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoUrlInput() {
    return this._ssoUrl;
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

  // subject_filter - computed: false, optional: true, required: false
  private _subjectFilter?: string; 
  public get subjectFilter() {
    return this.getStringAttribute('subject_filter');
  }
  public set subjectFilter(value: string) {
    this._subjectFilter = value;
  }
  public resetSubjectFilter() {
    this._subjectFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectFilterInput() {
    return this._subjectFilter;
  }

  // subject_format - computed: false, optional: true, required: false
  private _subjectFormat?: string[]; 
  public get subjectFormat() {
    return cdktf.Fn.tolist(this.getListAttribute('subject_format'));
  }
  public set subjectFormat(value: string[]) {
    this._subjectFormat = value;
  }
  public resetSubjectFormat() {
    this._subjectFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectFormatInput() {
    return this._subjectFormat;
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // user_type_id - computed: true, optional: false, required: false
  public get userTypeId() {
    return this.getStringAttribute('user_type_id');
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
      acs_type: cdktf.stringToTerraform(this._acsType),
      deprovisioned_action: cdktf.stringToTerraform(this._deprovisionedAction),
      groups_action: cdktf.stringToTerraform(this._groupsAction),
      groups_assignment: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupsAssignment),
      groups_attribute: cdktf.stringToTerraform(this._groupsAttribute),
      groups_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupsFilter),
      honor_persistent_name_id: cdktf.booleanToTerraform(this._honorPersistentNameId),
      id: cdktf.stringToTerraform(this._id),
      issuer: cdktf.stringToTerraform(this._issuer),
      issuer_mode: cdktf.stringToTerraform(this._issuerMode),
      kid: cdktf.stringToTerraform(this._kid),
      max_clock_skew: cdktf.numberToTerraform(this._maxClockSkew),
      name: cdktf.stringToTerraform(this._name),
      name_format: cdktf.stringToTerraform(this._nameFormat),
      profile_master: cdktf.booleanToTerraform(this._profileMaster),
      provisioning_action: cdktf.stringToTerraform(this._provisioningAction),
      request_signature_algorithm: cdktf.stringToTerraform(this._requestSignatureAlgorithm),
      request_signature_scope: cdktf.stringToTerraform(this._requestSignatureScope),
      response_signature_algorithm: cdktf.stringToTerraform(this._responseSignatureAlgorithm),
      response_signature_scope: cdktf.stringToTerraform(this._responseSignatureScope),
      sso_binding: cdktf.stringToTerraform(this._ssoBinding),
      sso_destination: cdktf.stringToTerraform(this._ssoDestination),
      sso_url: cdktf.stringToTerraform(this._ssoUrl),
      status: cdktf.stringToTerraform(this._status),
      subject_filter: cdktf.stringToTerraform(this._subjectFilter),
      subject_format: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subjectFormat),
      subject_match_attribute: cdktf.stringToTerraform(this._subjectMatchAttribute),
      subject_match_type: cdktf.stringToTerraform(this._subjectMatchType),
      suspended_action: cdktf.stringToTerraform(this._suspendedAction),
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
      acs_type: {
        value: cdktf.stringToHclTerraform(this._acsType),
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
      honor_persistent_name_id: {
        value: cdktf.booleanToHclTerraform(this._honorPersistentNameId),
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
      issuer: {
        value: cdktf.stringToHclTerraform(this._issuer),
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
      kid: {
        value: cdktf.stringToHclTerraform(this._kid),
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
      name_format: {
        value: cdktf.stringToHclTerraform(this._nameFormat),
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
      provisioning_action: {
        value: cdktf.stringToHclTerraform(this._provisioningAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_signature_algorithm: {
        value: cdktf.stringToHclTerraform(this._requestSignatureAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_signature_scope: {
        value: cdktf.stringToHclTerraform(this._requestSignatureScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      response_signature_algorithm: {
        value: cdktf.stringToHclTerraform(this._responseSignatureAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      response_signature_scope: {
        value: cdktf.stringToHclTerraform(this._responseSignatureScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sso_binding: {
        value: cdktf.stringToHclTerraform(this._ssoBinding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sso_destination: {
        value: cdktf.stringToHclTerraform(this._ssoDestination),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sso_url: {
        value: cdktf.stringToHclTerraform(this._ssoUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subject_filter: {
        value: cdktf.stringToHclTerraform(this._subjectFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subject_format: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subjectFormat),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
