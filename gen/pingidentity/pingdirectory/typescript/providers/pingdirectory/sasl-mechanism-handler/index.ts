// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/sasl_mechanism_handler
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SaslMechanismHandlerConfig extends cdktf.TerraformMetaArguments {
  /**
  * An access token validator that will ensure that each presented OAuth access token is authentic and trustworthy. It must be configured with an identity mapper that will be used to map the access token to a local entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/sasl_mechanism_handler#access_token_validator SaslMechanismHandler#access_token_validator}
  */
  readonly accessTokenValidator?: string[];
  /**
  * The set of OAuth scopes that will all be required for any access tokens that will be allowed for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/sasl_mechanism_handler#all_required_scope SaslMechanismHandler#all_required_scope}
  */
  readonly allRequiredScope?: string[];
  /**
  * When the `type` attribute is set to:
  *   - `oauth-bearer`: The identity mapper that will be used to map an alternate authorization identity (provided in the GS2 header of the encoded OAUTHBEARER bind request credentials) to the corresponding local entry.
  *   - `gssapi`: Specifies the name of the identity mapper that is to be used with this SASL mechanism handler to map the alternate authorization identity (if provided, and if different from the Kerberos principal used as the authentication identity) to the corresponding user in the directory. If no value is specified, then the mapper specified in the identity-mapper configuration property will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/sasl_mechanism_handler#alternate_authorization_identity_mapper SaslMechanismHandler#alternate_authorization_identity_mapper}
  */
  readonly alternateAuthorizationIdentityMapper?: string;
  /**
  * The set of OAuth scopes that a token may have to be allowed for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/sasl_mechanism_handler#any_required_scope SaslMechanismHandler#any_required_scope}
  */
  readonly anyRequiredScope?: string[];
  /**
  * A description for this SASL Mechanism Handler
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/sasl_mechanism_handler#description SaslMechanismHandler#description}
  */
  readonly description?: string;
  /**
  * Indicates whether the SASL mechanism handler is enabled for use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/sasl_mechanism_handler#enabled SaslMechanismHandler#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The set of arguments used to customize the behavior for the Third Party SASL Mechanism Handler. Each configuration property should be given in the form 'name=value'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/sasl_mechanism_handler#extension_argument SaslMechanismHandler#extension_argument}
  */
  readonly extensionArgument?: string[];
  /**
  * The fully-qualified name of the Java class providing the logic for the Third Party SASL Mechanism Handler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/sasl_mechanism_handler#extension_class SaslMechanismHandler#extension_class}
  */
  readonly extensionClass?: string;
  /**
  * An ID token validator that will ensure that each presented OpenID Connect ID token is authentic and trustworthy, and that will map the token to a local entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/sasl_mechanism_handler#id_token_validator SaslMechanismHandler#id_token_validator}
  */
  readonly idTokenValidator?: string[];
  /**
  * When the `type` attribute is set to:
  *   - One of [`unboundid-totp`, `unboundid-yubikey-otp`, `unboundid-delivered-otp`]: The identity mapper that should be used to identify the user(s) targeted in the authentication and/or authorization identities contained in the bind request. This will only be used for "u:"-style identities.
  *   - One of [`digest-md5`, `plain`]: Specifies the name of the identity mapper that is to be used with this SASL mechanism handler to match the authentication or authorization ID included in the SASL bind request to the corresponding user in the directory.
  *   - `unboundid-ms-chap-v2`: The identity mapper that should be used to identify the entry associated with the username provided in the bind request.
  *   - `unboundid-external-auth`: The identity mapper that should be used to identify the user targeted by the authentication ID contained in the bind request. This will only be used for "u:"-style authentication ID values.
  *   - `cram-md5`: Specifies the name of the identity mapper used with this SASL mechanism handler to match the authentication ID included in the SASL bind request to the corresponding user in the directory.
  *   - `gssapi`: Specifies the name of the identity mapper that is to be used with this SASL mechanism handler to match the Kerberos principal included in the SASL bind request to the corresponding user in the directory.
  *   - `third-party`: The identity mapper that may be used to map usernames to user entries. If the custom SASL mechanism involves a username or some other form of authentication and/or authorization identity, then this may be used to map that ID to an entry for that user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/sasl_mechanism_handler#identity_mapper SaslMechanismHandler#identity_mapper}
  */
  readonly identityMapper?: string;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/sasl_mechanism_handler#name SaslMechanismHandler#name}
  */
  readonly name: string;
  /**
  * The maximum length of time that a one-time password value should be considered valid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/sasl_mechanism_handler#otp_validity_duration SaslMechanismHandler#otp_validity_duration}
  */
  readonly otpValidityDuration?: string;
  /**
  * Indicates whether bind requests will be required to have both an OAuth access token (in the "auth" element of the bind request) and an OpenID Connect ID token (in the "pingidentityidtoken" element of the bind request).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/sasl_mechanism_handler#require_both_access_token_and_id_token SaslMechanismHandler#require_both_access_token_and_id_token}
  */
  readonly requireBothAccessTokenAndIdToken?: boolean | cdktf.IResolvable;
  /**
  * When the `type` attribute is set to:
  *   - `digest-md5`: Specifies the DNS-resolvable fully-qualified domain name for the server that is used when validating the digest-uri parameter during the authentication process.
  *   - `oauth-bearer`: The fully-qualified name that clients are expected to use when communicating with the server.
  *   - `gssapi`: Specifies the DNS-resolvable fully-qualified domain name for the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/sasl_mechanism_handler#server_fqdn SaslMechanismHandler#server_fqdn}
  */
  readonly serverFqdn?: string;
  /**
  * The type of SASL Mechanism Handler resource. Options are ['unboundid-ms-chap-v2', 'unboundid-totp', 'unboundid-yubikey-otp', 'external', 'digest-md5', 'plain', 'unboundid-delivered-otp', 'unboundid-external-auth', 'anonymous', 'cram-md5', 'oauth-bearer', 'unboundid-certificate-plus-password', 'gssapi', 'third-party']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/sasl_mechanism_handler#type SaslMechanismHandler#type}
  */
  readonly type: string;
  /**
  * Indicates whether to validate the OAuth access token in addition to the OpenID Connect ID token in OAUTHBEARER bind requests that contain both types of tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/sasl_mechanism_handler#validate_access_token_when_id_token_is_also_provided SaslMechanismHandler#validate_access_token_when_id_token_is_also_provided}
  */
  readonly validateAccessTokenWhenIdTokenIsAlsoProvided?: string;
}
export interface SaslMechanismHandlerRequiredActions {
}

export function saslMechanismHandlerRequiredActionsToTerraform(struct?: SaslMechanismHandlerRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function saslMechanismHandlerRequiredActionsToHclTerraform(struct?: SaslMechanismHandlerRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SaslMechanismHandlerRequiredActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SaslMechanismHandlerRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaslMechanismHandlerRequiredActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }

  // synopsis - computed: true, optional: false, required: false
  public get synopsis() {
    return this.getStringAttribute('synopsis');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class SaslMechanismHandlerRequiredActionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SaslMechanismHandlerRequiredActionsOutputReference {
    return new SaslMechanismHandlerRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/sasl_mechanism_handler pingdirectory_sasl_mechanism_handler}
*/
export class SaslMechanismHandler extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_sasl_mechanism_handler";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SaslMechanismHandler resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SaslMechanismHandler to import
  * @param importFromId The id of the existing SaslMechanismHandler that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/sasl_mechanism_handler#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SaslMechanismHandler to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_sasl_mechanism_handler", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/sasl_mechanism_handler pingdirectory_sasl_mechanism_handler} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SaslMechanismHandlerConfig
  */
  public constructor(scope: Construct, id: string, config: SaslMechanismHandlerConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_sasl_mechanism_handler',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessTokenValidator = config.accessTokenValidator;
    this._allRequiredScope = config.allRequiredScope;
    this._alternateAuthorizationIdentityMapper = config.alternateAuthorizationIdentityMapper;
    this._anyRequiredScope = config.anyRequiredScope;
    this._description = config.description;
    this._enabled = config.enabled;
    this._extensionArgument = config.extensionArgument;
    this._extensionClass = config.extensionClass;
    this._idTokenValidator = config.idTokenValidator;
    this._identityMapper = config.identityMapper;
    this._name = config.name;
    this._otpValidityDuration = config.otpValidityDuration;
    this._requireBothAccessTokenAndIdToken = config.requireBothAccessTokenAndIdToken;
    this._serverFqdn = config.serverFqdn;
    this._type = config.type;
    this._validateAccessTokenWhenIdTokenIsAlsoProvided = config.validateAccessTokenWhenIdTokenIsAlsoProvided;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token_validator - computed: true, optional: true, required: false
  private _accessTokenValidator?: string[]; 
  public get accessTokenValidator() {
    return cdktf.Fn.tolist(this.getListAttribute('access_token_validator'));
  }
  public set accessTokenValidator(value: string[]) {
    this._accessTokenValidator = value;
  }
  public resetAccessTokenValidator() {
    this._accessTokenValidator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenValidatorInput() {
    return this._accessTokenValidator;
  }

  // all_required_scope - computed: true, optional: true, required: false
  private _allRequiredScope?: string[]; 
  public get allRequiredScope() {
    return cdktf.Fn.tolist(this.getListAttribute('all_required_scope'));
  }
  public set allRequiredScope(value: string[]) {
    this._allRequiredScope = value;
  }
  public resetAllRequiredScope() {
    this._allRequiredScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allRequiredScopeInput() {
    return this._allRequiredScope;
  }

  // alternate_authorization_identity_mapper - computed: false, optional: true, required: false
  private _alternateAuthorizationIdentityMapper?: string; 
  public get alternateAuthorizationIdentityMapper() {
    return this.getStringAttribute('alternate_authorization_identity_mapper');
  }
  public set alternateAuthorizationIdentityMapper(value: string) {
    this._alternateAuthorizationIdentityMapper = value;
  }
  public resetAlternateAuthorizationIdentityMapper() {
    this._alternateAuthorizationIdentityMapper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternateAuthorizationIdentityMapperInput() {
    return this._alternateAuthorizationIdentityMapper;
  }

  // any_required_scope - computed: true, optional: true, required: false
  private _anyRequiredScope?: string[]; 
  public get anyRequiredScope() {
    return cdktf.Fn.tolist(this.getListAttribute('any_required_scope'));
  }
  public set anyRequiredScope(value: string[]) {
    this._anyRequiredScope = value;
  }
  public resetAnyRequiredScope() {
    this._anyRequiredScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyRequiredScopeInput() {
    return this._anyRequiredScope;
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

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // extension_argument - computed: true, optional: true, required: false
  private _extensionArgument?: string[]; 
  public get extensionArgument() {
    return cdktf.Fn.tolist(this.getListAttribute('extension_argument'));
  }
  public set extensionArgument(value: string[]) {
    this._extensionArgument = value;
  }
  public resetExtensionArgument() {
    this._extensionArgument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionArgumentInput() {
    return this._extensionArgument;
  }

  // extension_class - computed: false, optional: true, required: false
  private _extensionClass?: string; 
  public get extensionClass() {
    return this.getStringAttribute('extension_class');
  }
  public set extensionClass(value: string) {
    this._extensionClass = value;
  }
  public resetExtensionClass() {
    this._extensionClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionClassInput() {
    return this._extensionClass;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // id_token_validator - computed: true, optional: true, required: false
  private _idTokenValidator?: string[]; 
  public get idTokenValidator() {
    return cdktf.Fn.tolist(this.getListAttribute('id_token_validator'));
  }
  public set idTokenValidator(value: string[]) {
    this._idTokenValidator = value;
  }
  public resetIdTokenValidator() {
    this._idTokenValidator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idTokenValidatorInput() {
    return this._idTokenValidator;
  }

  // identity_mapper - computed: false, optional: true, required: false
  private _identityMapper?: string; 
  public get identityMapper() {
    return this.getStringAttribute('identity_mapper');
  }
  public set identityMapper(value: string) {
    this._identityMapper = value;
  }
  public resetIdentityMapper() {
    this._identityMapper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityMapperInput() {
    return this._identityMapper;
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

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // otp_validity_duration - computed: true, optional: true, required: false
  private _otpValidityDuration?: string; 
  public get otpValidityDuration() {
    return this.getStringAttribute('otp_validity_duration');
  }
  public set otpValidityDuration(value: string) {
    this._otpValidityDuration = value;
  }
  public resetOtpValidityDuration() {
    this._otpValidityDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpValidityDurationInput() {
    return this._otpValidityDuration;
  }

  // require_both_access_token_and_id_token - computed: true, optional: true, required: false
  private _requireBothAccessTokenAndIdToken?: boolean | cdktf.IResolvable; 
  public get requireBothAccessTokenAndIdToken() {
    return this.getBooleanAttribute('require_both_access_token_and_id_token');
  }
  public set requireBothAccessTokenAndIdToken(value: boolean | cdktf.IResolvable) {
    this._requireBothAccessTokenAndIdToken = value;
  }
  public resetRequireBothAccessTokenAndIdToken() {
    this._requireBothAccessTokenAndIdToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireBothAccessTokenAndIdTokenInput() {
    return this._requireBothAccessTokenAndIdToken;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new SaslMechanismHandlerRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // server_fqdn - computed: false, optional: true, required: false
  private _serverFqdn?: string; 
  public get serverFqdn() {
    return this.getStringAttribute('server_fqdn');
  }
  public set serverFqdn(value: string) {
    this._serverFqdn = value;
  }
  public resetServerFqdn() {
    this._serverFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverFqdnInput() {
    return this._serverFqdn;
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

  // validate_access_token_when_id_token_is_also_provided - computed: true, optional: true, required: false
  private _validateAccessTokenWhenIdTokenIsAlsoProvided?: string; 
  public get validateAccessTokenWhenIdTokenIsAlsoProvided() {
    return this.getStringAttribute('validate_access_token_when_id_token_is_also_provided');
  }
  public set validateAccessTokenWhenIdTokenIsAlsoProvided(value: string) {
    this._validateAccessTokenWhenIdTokenIsAlsoProvided = value;
  }
  public resetValidateAccessTokenWhenIdTokenIsAlsoProvided() {
    this._validateAccessTokenWhenIdTokenIsAlsoProvided = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateAccessTokenWhenIdTokenIsAlsoProvidedInput() {
    return this._validateAccessTokenWhenIdTokenIsAlsoProvided;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_token_validator: cdktf.listMapper(cdktf.stringToTerraform, false)(this._accessTokenValidator),
      all_required_scope: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allRequiredScope),
      alternate_authorization_identity_mapper: cdktf.stringToTerraform(this._alternateAuthorizationIdentityMapper),
      any_required_scope: cdktf.listMapper(cdktf.stringToTerraform, false)(this._anyRequiredScope),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      extension_argument: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extensionArgument),
      extension_class: cdktf.stringToTerraform(this._extensionClass),
      id_token_validator: cdktf.listMapper(cdktf.stringToTerraform, false)(this._idTokenValidator),
      identity_mapper: cdktf.stringToTerraform(this._identityMapper),
      name: cdktf.stringToTerraform(this._name),
      otp_validity_duration: cdktf.stringToTerraform(this._otpValidityDuration),
      require_both_access_token_and_id_token: cdktf.booleanToTerraform(this._requireBothAccessTokenAndIdToken),
      server_fqdn: cdktf.stringToTerraform(this._serverFqdn),
      type: cdktf.stringToTerraform(this._type),
      validate_access_token_when_id_token_is_also_provided: cdktf.stringToTerraform(this._validateAccessTokenWhenIdTokenIsAlsoProvided),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_token_validator: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._accessTokenValidator),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      all_required_scope: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allRequiredScope),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      alternate_authorization_identity_mapper: {
        value: cdktf.stringToHclTerraform(this._alternateAuthorizationIdentityMapper),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      any_required_scope: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._anyRequiredScope),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      extension_argument: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._extensionArgument),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      extension_class: {
        value: cdktf.stringToHclTerraform(this._extensionClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id_token_validator: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._idTokenValidator),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      identity_mapper: {
        value: cdktf.stringToHclTerraform(this._identityMapper),
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
      otp_validity_duration: {
        value: cdktf.stringToHclTerraform(this._otpValidityDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      require_both_access_token_and_id_token: {
        value: cdktf.booleanToHclTerraform(this._requireBothAccessTokenAndIdToken),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      server_fqdn: {
        value: cdktf.stringToHclTerraform(this._serverFqdn),
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
      validate_access_token_when_id_token_is_also_provided: {
        value: cdktf.stringToHclTerraform(this._validateAccessTokenWhenIdTokenIsAlsoProvided),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
