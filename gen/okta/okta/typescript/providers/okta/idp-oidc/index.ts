// https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/idp_oidc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdpOidcConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the account linking action for an IdP user. Default: `AUTO`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/idp_oidc#account_link_action IdpOidc#account_link_action}
  */
  readonly accountLinkAction?: string;
  /**
  * Group memberships to determine link candidates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/idp_oidc#account_link_group_include IdpOidc#account_link_group_include}
  */
  readonly accountLinkGroupInclude?: string[];
  /**
  * The method of making an authorization request. It can be set to `HTTP-POST` or `HTTP-REDIRECT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/idp_oidc#authorization_binding IdpOidc#authorization_binding}
  */
  readonly authorizationBinding: string;
  /**
  * IdP Authorization Server (AS) endpoint to request consent from the user and obtain an authorization code grant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/idp_oidc#authorization_url IdpOidc#authorization_url}
  */
  readonly authorizationUrl: string;
  /**
  * Unique identifier issued by AS for the Okta IdP instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/idp_oidc#client_id IdpOidc#client_id}
  */
  readonly clientId: string;
  /**
  * Client secret issued by AS for the Okta IdP instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/idp_oidc#client_secret IdpOidc#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Action for a previously deprovisioned IdP user during authentication. Can be `NONE` or `REACTIVATE`. Default: `NONE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/idp_oidc#deprovisioned_action IdpOidc#deprovisioned_action}
  */
  readonly deprovisionedAction?: string;
  /**
  * Optional regular expression pattern used to filter untrusted IdP usernames.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/idp_oidc#filter IdpOidc#filter}
  */
  readonly filter?: string;
  /**
  * Provisioning action for IdP user's group memberships. It can be `NONE`, `SYNC`, `APPEND`, or `ASSIGN`. Default: `NONE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/idp_oidc#groups_action IdpOidc#groups_action}
  */
  readonly groupsAction?: string;
  /**
  * List of Okta Group IDs to add an IdP user as a member with the `ASSIGN` `groups_action`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/idp_oidc#groups_assignment IdpOidc#groups_assignment}
  */
  readonly groupsAssignment?: string[];
  /**
  * IdP user profile attribute name (case-insensitive) for an array value that contains group memberships.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/idp_oidc#groups_attribute IdpOidc#groups_attribute}
  */
  readonly groupsAttribute?: string;
  /**
  * Whitelist of Okta Group identifiers that are allowed for the `APPEND` or `SYNC` `groups_action`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/idp_oidc#groups_filter IdpOidc#groups_filter}
  */
  readonly groupsFilter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/idp_oidc#id IdpOidc#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Indicates whether Okta uses the original Okta org domain URL, a custom domain URL, or dynamic. It can be `ORG_URL`, `CUSTOM_URL`, or `DYNAMIC`. Default: `ORG_URL`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/idp_oidc#issuer_mode IdpOidc#issuer_mode}
  */
  readonly issuerMode?: string;
  /**
  * URI that identifies the issuer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/idp_oidc#issuer_url IdpOidc#issuer_url}
  */
  readonly issuerUrl: string;
  /**
  * The method of making a request for the OIDC JWKS. It can be set to `HTTP-POST` or `HTTP-REDIRECT`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/idp_oidc#jwks_binding IdpOidc#jwks_binding}
  */
  readonly jwksBinding: string;
  /**
  * Endpoint where the keys signer publishes its keys in a JWK Set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/idp_oidc#jwks_url IdpOidc#jwks_url}
  */
  readonly jwksUrl: string;
  /**
  * Maximum allowable clock-skew when processing messages from the IdP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/idp_oidc#max_clock_skew IdpOidc#max_clock_skew}
  */
  readonly maxClockSkew?: number;
  /**
  * Name of the IdP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/idp_oidc#name IdpOidc#name}
  */
  readonly name: string;
  /**
  * Require Proof Key for Code Exchange (PKCE) for additional verification key rotation mode. See: https://developer.okta.com/docs/reference/api/idps/#oauth-2-0-and-openid-connect-client-object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/idp_oidc#pkce_required IdpOidc#pkce_required}
  */
  readonly pkceRequired?: boolean | cdktf.IResolvable;
  /**
  * Determines if the IdP should act as a source of truth for user profile attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/idp_oidc#profile_master IdpOidc#profile_master}
  */
  readonly profileMaster?: boolean | cdktf.IResolvable;
  /**
  *  The type of protocol to use. It can be `OIDC` or `OAUTH2`. Default: `OIDC`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/idp_oidc#protocol_type IdpOidc#protocol_type}
  */
  readonly protocolType?: string;
  /**
  * Provisioning action for an IdP user during authentication. Default: `AUTO`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/idp_oidc#provisioning_action IdpOidc#provisioning_action}
  */
  readonly provisioningAction?: string;
  /**
  * The HMAC Signature Algorithm used when signing an authorization request. Defaults to `HS256`. It can be `HS256`, `HS384`, `HS512`, `SHA-256`. `RS256`, `RS384`, or `RS512`. NOTE: `SHA-256` an undocumented legacy value and not continue to be valid. See API docs https://developer.okta.com/docs/reference/api/idps/#oidc-request-signature-algorithm-object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/idp_oidc#request_signature_algorithm IdpOidc#request_signature_algorithm}
  */
  readonly requestSignatureAlgorithm?: string;
  /**
  * Specifies whether to digitally sign an AuthnRequest messages to the IdP. Defaults to `REQUEST`. It can be `REQUEST` or `NONE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/idp_oidc#request_signature_scope IdpOidc#request_signature_scope}
  */
  readonly requestSignatureScope?: string;
  /**
  * The scopes of the IdP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/idp_oidc#scopes IdpOidc#scopes}
  */
  readonly scopes: string[];
  /**
  * Default to `ACTIVE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/idp_oidc#status IdpOidc#status}
  */
  readonly status?: string;
  /**
  * Okta user profile attribute for matching transformed IdP username. Only for matchType `CUSTOM_ATTRIBUTE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/idp_oidc#subject_match_attribute IdpOidc#subject_match_attribute}
  */
  readonly subjectMatchAttribute?: string;
  /**
  * Determines the Okta user profile attribute match conditions for account linking and authentication of the transformed IdP username. By default, it is set to `USERNAME`. It can be set to `USERNAME`, `EMAIL`, `USERNAME_OR_EMAIL` or `CUSTOM_ATTRIBUTE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/idp_oidc#subject_match_type IdpOidc#subject_match_type}
  */
  readonly subjectMatchType?: string;
  /**
  * Action for a previously suspended IdP user during authentication. Can be `NONE` or `REACTIVATE`. Default: `NONE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/idp_oidc#suspended_action IdpOidc#suspended_action}
  */
  readonly suspendedAction?: string;
  /**
  * The method of making a token request. It can be set to `HTTP-POST` or `HTTP-REDIRECT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/idp_oidc#token_binding IdpOidc#token_binding}
  */
  readonly tokenBinding: string;
  /**
  * IdP Authorization Server (AS) endpoint to exchange the authorization code grant for an access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/idp_oidc#token_url IdpOidc#token_url}
  */
  readonly tokenUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/idp_oidc#user_info_binding IdpOidc#user_info_binding}
  */
  readonly userInfoBinding?: string;
  /**
  * Protected resource endpoint that returns claims about the authenticated user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/idp_oidc#user_info_url IdpOidc#user_info_url}
  */
  readonly userInfoUrl?: string;
  /**
  * Okta EL Expression to generate or transform a unique username for the IdP user. Default: `idpuser.email`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/idp_oidc#username_template IdpOidc#username_template}
  */
  readonly usernameTemplate?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/idp_oidc okta_idp_oidc}
*/
export class IdpOidc extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_idp_oidc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdpOidc resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdpOidc to import
  * @param importFromId The id of the existing IdpOidc that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/idp_oidc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdpOidc to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_idp_oidc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/idp_oidc okta_idp_oidc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdpOidcConfig
  */
  public constructor(scope: Construct, id: string, config: IdpOidcConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_idp_oidc',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.5.1',
        providerVersionConstraint: '6.5.1'
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
    this._authorizationBinding = config.authorizationBinding;
    this._authorizationUrl = config.authorizationUrl;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._deprovisionedAction = config.deprovisionedAction;
    this._filter = config.filter;
    this._groupsAction = config.groupsAction;
    this._groupsAssignment = config.groupsAssignment;
    this._groupsAttribute = config.groupsAttribute;
    this._groupsFilter = config.groupsFilter;
    this._id = config.id;
    this._issuerMode = config.issuerMode;
    this._issuerUrl = config.issuerUrl;
    this._jwksBinding = config.jwksBinding;
    this._jwksUrl = config.jwksUrl;
    this._maxClockSkew = config.maxClockSkew;
    this._name = config.name;
    this._pkceRequired = config.pkceRequired;
    this._profileMaster = config.profileMaster;
    this._protocolType = config.protocolType;
    this._provisioningAction = config.provisioningAction;
    this._requestSignatureAlgorithm = config.requestSignatureAlgorithm;
    this._requestSignatureScope = config.requestSignatureScope;
    this._scopes = config.scopes;
    this._status = config.status;
    this._subjectMatchAttribute = config.subjectMatchAttribute;
    this._subjectMatchType = config.subjectMatchType;
    this._suspendedAction = config.suspendedAction;
    this._tokenBinding = config.tokenBinding;
    this._tokenUrl = config.tokenUrl;
    this._userInfoBinding = config.userInfoBinding;
    this._userInfoUrl = config.userInfoUrl;
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

  // authorization_binding - computed: false, optional: false, required: true
  private _authorizationBinding?: string; 
  public get authorizationBinding() {
    return this.getStringAttribute('authorization_binding');
  }
  public set authorizationBinding(value: string) {
    this._authorizationBinding = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationBindingInput() {
    return this._authorizationBinding;
  }

  // authorization_url - computed: false, optional: false, required: true
  private _authorizationUrl?: string; 
  public get authorizationUrl() {
    return this.getStringAttribute('authorization_url');
  }
  public set authorizationUrl(value: string) {
    this._authorizationUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationUrlInput() {
    return this._authorizationUrl;
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

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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

  // jwks_binding - computed: false, optional: false, required: true
  private _jwksBinding?: string; 
  public get jwksBinding() {
    return this.getStringAttribute('jwks_binding');
  }
  public set jwksBinding(value: string) {
    this._jwksBinding = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksBindingInput() {
    return this._jwksBinding;
  }

  // jwks_url - computed: false, optional: false, required: true
  private _jwksUrl?: string; 
  public get jwksUrl() {
    return this.getStringAttribute('jwks_url');
  }
  public set jwksUrl(value: string) {
    this._jwksUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksUrlInput() {
    return this._jwksUrl;
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

  // pkce_required - computed: false, optional: true, required: false
  private _pkceRequired?: boolean | cdktf.IResolvable; 
  public get pkceRequired() {
    return this.getBooleanAttribute('pkce_required');
  }
  public set pkceRequired(value: boolean | cdktf.IResolvable) {
    this._pkceRequired = value;
  }
  public resetPkceRequired() {
    this._pkceRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkceRequiredInput() {
    return this._pkceRequired;
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

  // token_binding - computed: false, optional: false, required: true
  private _tokenBinding?: string; 
  public get tokenBinding() {
    return this.getStringAttribute('token_binding');
  }
  public set tokenBinding(value: string) {
    this._tokenBinding = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenBindingInput() {
    return this._tokenBinding;
  }

  // token_url - computed: false, optional: false, required: true
  private _tokenUrl?: string; 
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }
  public set tokenUrl(value: string) {
    this._tokenUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUrlInput() {
    return this._tokenUrl;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // user_info_binding - computed: false, optional: true, required: false
  private _userInfoBinding?: string; 
  public get userInfoBinding() {
    return this.getStringAttribute('user_info_binding');
  }
  public set userInfoBinding(value: string) {
    this._userInfoBinding = value;
  }
  public resetUserInfoBinding() {
    this._userInfoBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInfoBindingInput() {
    return this._userInfoBinding;
  }

  // user_info_url - computed: false, optional: true, required: false
  private _userInfoUrl?: string; 
  public get userInfoUrl() {
    return this.getStringAttribute('user_info_url');
  }
  public set userInfoUrl(value: string) {
    this._userInfoUrl = value;
  }
  public resetUserInfoUrl() {
    this._userInfoUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInfoUrlInput() {
    return this._userInfoUrl;
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
      authorization_binding: cdktf.stringToTerraform(this._authorizationBinding),
      authorization_url: cdktf.stringToTerraform(this._authorizationUrl),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      deprovisioned_action: cdktf.stringToTerraform(this._deprovisionedAction),
      filter: cdktf.stringToTerraform(this._filter),
      groups_action: cdktf.stringToTerraform(this._groupsAction),
      groups_assignment: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupsAssignment),
      groups_attribute: cdktf.stringToTerraform(this._groupsAttribute),
      groups_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupsFilter),
      id: cdktf.stringToTerraform(this._id),
      issuer_mode: cdktf.stringToTerraform(this._issuerMode),
      issuer_url: cdktf.stringToTerraform(this._issuerUrl),
      jwks_binding: cdktf.stringToTerraform(this._jwksBinding),
      jwks_url: cdktf.stringToTerraform(this._jwksUrl),
      max_clock_skew: cdktf.numberToTerraform(this._maxClockSkew),
      name: cdktf.stringToTerraform(this._name),
      pkce_required: cdktf.booleanToTerraform(this._pkceRequired),
      profile_master: cdktf.booleanToTerraform(this._profileMaster),
      protocol_type: cdktf.stringToTerraform(this._protocolType),
      provisioning_action: cdktf.stringToTerraform(this._provisioningAction),
      request_signature_algorithm: cdktf.stringToTerraform(this._requestSignatureAlgorithm),
      request_signature_scope: cdktf.stringToTerraform(this._requestSignatureScope),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
      status: cdktf.stringToTerraform(this._status),
      subject_match_attribute: cdktf.stringToTerraform(this._subjectMatchAttribute),
      subject_match_type: cdktf.stringToTerraform(this._subjectMatchType),
      suspended_action: cdktf.stringToTerraform(this._suspendedAction),
      token_binding: cdktf.stringToTerraform(this._tokenBinding),
      token_url: cdktf.stringToTerraform(this._tokenUrl),
      user_info_binding: cdktf.stringToTerraform(this._userInfoBinding),
      user_info_url: cdktf.stringToTerraform(this._userInfoUrl),
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
      authorization_binding: {
        value: cdktf.stringToHclTerraform(this._authorizationBinding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorization_url: {
        value: cdktf.stringToHclTerraform(this._authorizationUrl),
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
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
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
      issuer_url: {
        value: cdktf.stringToHclTerraform(this._issuerUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jwks_binding: {
        value: cdktf.stringToHclTerraform(this._jwksBinding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jwks_url: {
        value: cdktf.stringToHclTerraform(this._jwksUrl),
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
      pkce_required: {
        value: cdktf.booleanToHclTerraform(this._pkceRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      token_binding: {
        value: cdktf.stringToHclTerraform(this._tokenBinding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_url: {
        value: cdktf.stringToHclTerraform(this._tokenUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_info_binding: {
        value: cdktf.stringToHclTerraform(this._userInfoBinding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_info_url: {
        value: cdktf.stringToHclTerraform(this._userInfoUrl),
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
