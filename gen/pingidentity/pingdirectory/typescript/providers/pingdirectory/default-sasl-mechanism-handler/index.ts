// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_sasl_mechanism_handler
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultSaslMechanismHandlerConfig extends cdktf.TerraformMetaArguments {
  /**
  * An access token validator that will ensure that each presented OAuth access token is authentic and trustworthy. It must be configured with an identity mapper that will be used to map the access token to a local entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_sasl_mechanism_handler#access_token_validator DefaultSaslMechanismHandler#access_token_validator}
  */
  readonly accessTokenValidator?: string[];
  /**
  * The number of adjacent time intervals (both before and after the current time) that should be checked when performing authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_sasl_mechanism_handler#adjacent_intervals_to_check DefaultSaslMechanismHandler#adjacent_intervals_to_check}
  */
  readonly adjacentIntervalsToCheck?: number;
  /**
  * The set of OAuth scopes that will all be required for any access tokens that will be allowed for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_sasl_mechanism_handler#all_required_scope DefaultSaslMechanismHandler#all_required_scope}
  */
  readonly allRequiredScope?: string[];
  /**
  * Specifies whether or not to allow a null value for the server-fqdn.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_sasl_mechanism_handler#allow_null_server_fqdn DefaultSaslMechanismHandler#allow_null_server_fqdn}
  */
  readonly allowNullServerFqdn?: boolean | cdktf.IResolvable;
  /**
  * Specifies the supported quality of protection (QoP) levels that clients will be permitted to request when performing GSSAPI authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_sasl_mechanism_handler#allowed_quality_of_protection DefaultSaslMechanismHandler#allowed_quality_of_protection}
  */
  readonly allowedQualityOfProtection?: string[];
  /**
  * When the `type` attribute is set to:
  *   - `oauth-bearer`: The identity mapper that will be used to map an alternate authorization identity (provided in the GS2 header of the encoded OAUTHBEARER bind request credentials) to the corresponding local entry.
  *   - `gssapi`: Specifies the name of the identity mapper that is to be used with this SASL mechanism handler to map the alternate authorization identity (if provided, and if different from the Kerberos principal used as the authentication identity) to the corresponding user in the directory. If no value is specified, then the mapper specified in the identity-mapper configuration property will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_sasl_mechanism_handler#alternate_authorization_identity_mapper DefaultSaslMechanismHandler#alternate_authorization_identity_mapper}
  */
  readonly alternateAuthorizationIdentityMapper?: string;
  /**
  * The set of OAuth scopes that a token may have to be allowed for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_sasl_mechanism_handler#any_required_scope DefaultSaslMechanismHandler#any_required_scope}
  */
  readonly anyRequiredScope?: string[];
  /**
  * Specifies the name of the attribute to hold user certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_sasl_mechanism_handler#certificate_attribute DefaultSaslMechanismHandler#certificate_attribute}
  */
  readonly certificateAttribute?: string;
  /**
  * When the `type` attribute is set to:
  *   - `external`: Specifies the name of the certificate mapper that should be used to match client certificates to user entries.
  *   - `unboundid-certificate-plus-password`: The certificate mapper that will be used to identify the target user based on the certificate that was presented to the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_sasl_mechanism_handler#certificate_mapper DefaultSaslMechanismHandler#certificate_mapper}
  */
  readonly certificateMapper?: string;
  /**
  * Indicates whether to attempt to validate the peer certificate against a certificate held in the user's entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_sasl_mechanism_handler#certificate_validation_policy DefaultSaslMechanismHandler#certificate_validation_policy}
  */
  readonly certificateValidationPolicy?: string;
  /**
  * A description for this SASL Mechanism Handler
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_sasl_mechanism_handler#description DefaultSaslMechanismHandler#description}
  */
  readonly description?: string;
  /**
  * Indicates whether to enable debugging for the Java GSSAPI provider. Debug information will be written to standard output, which should be captured in the server.out log file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_sasl_mechanism_handler#enable_debug DefaultSaslMechanismHandler#enable_debug}
  */
  readonly enableDebug?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the SASL mechanism handler is enabled for use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_sasl_mechanism_handler#enabled DefaultSaslMechanismHandler#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The set of arguments used to customize the behavior for the Third Party SASL Mechanism Handler. Each configuration property should be given in the form 'name=value'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_sasl_mechanism_handler#extension_argument DefaultSaslMechanismHandler#extension_argument}
  */
  readonly extensionArgument?: string[];
  /**
  * The fully-qualified name of the Java class providing the logic for the Third Party SASL Mechanism Handler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_sasl_mechanism_handler#extension_class DefaultSaslMechanismHandler#extension_class}
  */
  readonly extensionClass?: string;
  /**
  * Specifies the role that should be declared for the server in the generated JAAS configuration file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_sasl_mechanism_handler#gssapi_role DefaultSaslMechanismHandler#gssapi_role}
  */
  readonly gssapiRole?: string;
  /**
  * Supported in PingDirectory product version 10.0.0.0+. The maximum length of time to wait to obtain an HTTP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_sasl_mechanism_handler#http_connect_timeout DefaultSaslMechanismHandler#http_connect_timeout}
  */
  readonly httpConnectTimeout?: string;
  /**
  * A reference to an HTTP proxy server that should be used for requests sent to the YubiKey validation service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_sasl_mechanism_handler#http_proxy_external_server DefaultSaslMechanismHandler#http_proxy_external_server}
  */
  readonly httpProxyExternalServer?: string;
  /**
  * Supported in PingDirectory product version 10.0.0.0+. The maximum length of time to wait for a response to an HTTP request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_sasl_mechanism_handler#http_response_timeout DefaultSaslMechanismHandler#http_response_timeout}
  */
  readonly httpResponseTimeout?: string;
  /**
  * An ID token validator that will ensure that each presented OpenID Connect ID token is authentic and trustworthy, and that will map the token to a local entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_sasl_mechanism_handler#id_token_validator DefaultSaslMechanismHandler#id_token_validator}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_sasl_mechanism_handler#identity_mapper DefaultSaslMechanismHandler#identity_mapper}
  */
  readonly identityMapper?: string;
  /**
  * Specifies the path to a JAAS (Java Authentication and Authorization Service) configuration file that provides the information that the JVM should use for Kerberos processing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_sasl_mechanism_handler#jaas_config_file DefaultSaslMechanismHandler#jaas_config_file}
  */
  readonly jaasConfigFile?: string;
  /**
  * Specifies the address of the KDC that is to be used for Kerberos processing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_sasl_mechanism_handler#kdc_address DefaultSaslMechanismHandler#kdc_address}
  */
  readonly kdcAddress?: string;
  /**
  * Specifies the Kerberos service principal that the Directory Server will use to identify itself to the KDC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_sasl_mechanism_handler#kerberos_service_principal DefaultSaslMechanismHandler#kerberos_service_principal}
  */
  readonly kerberosServicePrincipal?: string;
  /**
  * Specifies which key manager provider should be used to obtain a client certificate to present to the validation server when performing HTTPS communication. This may be left undefined if communication will not be secured with HTTPS, or if there is no need to present a client certificate to the validation service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_sasl_mechanism_handler#key_manager_provider DefaultSaslMechanismHandler#key_manager_provider}
  */
  readonly keyManagerProvider?: string;
  /**
  * Specifies the keytab file that should be used for Kerberos processing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_sasl_mechanism_handler#keytab DefaultSaslMechanismHandler#keytab}
  */
  readonly keytab?: string;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_sasl_mechanism_handler#name DefaultSaslMechanismHandler#name}
  */
  readonly name: string;
  /**
  * The maximum length of time that a one-time password value should be considered valid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_sasl_mechanism_handler#otp_validity_duration DefaultSaslMechanismHandler#otp_validity_duration}
  */
  readonly otpValidityDuration?: string;
  /**
  * Indicates whether to prevent clients from re-using TOTP passwords.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_sasl_mechanism_handler#prevent_totp_reuse DefaultSaslMechanismHandler#prevent_totp_reuse}
  */
  readonly preventTotpReuse?: boolean | cdktf.IResolvable;
  /**
  * When the `type` attribute is set to:
  *   - `digest-md5`: Specifies the realm that is to be used by the server for DIGEST-MD5 authentication.
  *   - `gssapi`: Specifies the realm to be used for GSSAPI authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_sasl_mechanism_handler#realm DefaultSaslMechanismHandler#realm}
  */
  readonly realm?: string;
  /**
  * Indicates whether bind requests will be required to have both an OAuth access token (in the "auth" element of the bind request) and an OpenID Connect ID token (in the "pingidentityidtoken" element of the bind request).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_sasl_mechanism_handler#require_both_access_token_and_id_token DefaultSaslMechanismHandler#require_both_access_token_and_id_token}
  */
  readonly requireBothAccessTokenAndIdToken?: boolean | cdktf.IResolvable;
  /**
  * When the `type` attribute is set to:
  *   - `unboundid-totp`: Indicates whether to require a static password (as might be held in the userPassword attribute, or whatever password attribute is defined in the password policy governing the user) in addition to the one-time password.
  *   - `unboundid-yubikey-otp`: Indicates whether a user will be required to provide a static password when authenticating via the UNBOUNDID-YUBIKEY-OTP SASL mechanism.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_sasl_mechanism_handler#require_static_password DefaultSaslMechanismHandler#require_static_password}
  */
  readonly requireStaticPassword?: boolean | cdktf.IResolvable;
  /**
  * When the `type` attribute is set to:
  *   - `digest-md5`: Specifies the DNS-resolvable fully-qualified domain name for the server that is used when validating the digest-uri parameter during the authentication process.
  *   - `oauth-bearer`: The fully-qualified name that clients are expected to use when communicating with the server.
  *   - `gssapi`: Specifies the DNS-resolvable fully-qualified domain name for the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_sasl_mechanism_handler#server_fqdn DefaultSaslMechanismHandler#server_fqdn}
  */
  readonly serverFqdn?: string;
  /**
  * The name or OID of the attribute that will be used to hold the shared secret key used during TOTP processing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_sasl_mechanism_handler#shared_secret_attribute_type DefaultSaslMechanismHandler#shared_secret_attribute_type}
  */
  readonly sharedSecretAttributeType?: string;
  /**
  * The duration of the time interval used for TOTP processing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_sasl_mechanism_handler#time_interval_duration DefaultSaslMechanismHandler#time_interval_duration}
  */
  readonly timeIntervalDuration?: string;
  /**
  * Specifies which trust manager provider should be used to determine whether to trust the certificate presented by the server when performing HTTPS communication. This may be left undefined if HTTPS communication is not needed, or if the validation service presents a certificate that is trusted by the default JVM configuration (which should be the case for the validation servers that Yubico provides, but may not be the case if an alternate validation server is configured).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_sasl_mechanism_handler#trust_manager_provider DefaultSaslMechanismHandler#trust_manager_provider}
  */
  readonly trustManagerProvider?: string;
  /**
  * Indicates whether to validate the OAuth access token in addition to the OpenID Connect ID token in OAUTHBEARER bind requests that contain both types of tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_sasl_mechanism_handler#validate_access_token_when_id_token_is_also_provided DefaultSaslMechanismHandler#validate_access_token_when_id_token_is_also_provided}
  */
  readonly validateAccessTokenWhenIdTokenIsAlsoProvided?: string;
  /**
  * The API key needed to verify signatures generated by the YubiKey validation server. A client ID and API key may be obtained for free from https://upgrade.yubico.com/getapikey/.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_sasl_mechanism_handler#yubikey_api_key DefaultSaslMechanismHandler#yubikey_api_key}
  */
  readonly yubikeyApiKey?: string;
  /**
  * The passphrase provider to use to obtain the API key needed to verify signatures generated by the YubiKey validation server. A client ID and API key may be obtained for free from https://upgrade.yubico.com/getapikey/.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_sasl_mechanism_handler#yubikey_api_key_passphrase_provider DefaultSaslMechanismHandler#yubikey_api_key_passphrase_provider}
  */
  readonly yubikeyApiKeyPassphraseProvider?: string;
  /**
  * The client ID to include in requests to the YubiKey validation server. A client ID and API key may be obtained for free from https://upgrade.yubico.com/getapikey/.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_sasl_mechanism_handler#yubikey_client_id DefaultSaslMechanismHandler#yubikey_client_id}
  */
  readonly yubikeyClientId?: string;
  /**
  * The base URL of the validation server to use to verify one-time passwords. You should only need to change the value if you wish to use your own validation server instead of using one of the Yubico servers. The server must use the YubiKey Validation Protocol version 2.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_sasl_mechanism_handler#yubikey_validation_server_base_url DefaultSaslMechanismHandler#yubikey_validation_server_base_url}
  */
  readonly yubikeyValidationServerBaseUrl?: string[];
}
export interface DefaultSaslMechanismHandlerRequiredActions {
}

export function defaultSaslMechanismHandlerRequiredActionsToTerraform(struct?: DefaultSaslMechanismHandlerRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function defaultSaslMechanismHandlerRequiredActionsToHclTerraform(struct?: DefaultSaslMechanismHandlerRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DefaultSaslMechanismHandlerRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DefaultSaslMechanismHandlerRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultSaslMechanismHandlerRequiredActions | undefined) {
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

export class DefaultSaslMechanismHandlerRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): DefaultSaslMechanismHandlerRequiredActionsOutputReference {
    return new DefaultSaslMechanismHandlerRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_sasl_mechanism_handler pingdirectory_default_sasl_mechanism_handler}
*/
export class DefaultSaslMechanismHandler extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_default_sasl_mechanism_handler";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultSaslMechanismHandler resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultSaslMechanismHandler to import
  * @param importFromId The id of the existing DefaultSaslMechanismHandler that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_sasl_mechanism_handler#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultSaslMechanismHandler to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_default_sasl_mechanism_handler", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_sasl_mechanism_handler pingdirectory_default_sasl_mechanism_handler} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultSaslMechanismHandlerConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultSaslMechanismHandlerConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_default_sasl_mechanism_handler',
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
    this._adjacentIntervalsToCheck = config.adjacentIntervalsToCheck;
    this._allRequiredScope = config.allRequiredScope;
    this._allowNullServerFqdn = config.allowNullServerFqdn;
    this._allowedQualityOfProtection = config.allowedQualityOfProtection;
    this._alternateAuthorizationIdentityMapper = config.alternateAuthorizationIdentityMapper;
    this._anyRequiredScope = config.anyRequiredScope;
    this._certificateAttribute = config.certificateAttribute;
    this._certificateMapper = config.certificateMapper;
    this._certificateValidationPolicy = config.certificateValidationPolicy;
    this._description = config.description;
    this._enableDebug = config.enableDebug;
    this._enabled = config.enabled;
    this._extensionArgument = config.extensionArgument;
    this._extensionClass = config.extensionClass;
    this._gssapiRole = config.gssapiRole;
    this._httpConnectTimeout = config.httpConnectTimeout;
    this._httpProxyExternalServer = config.httpProxyExternalServer;
    this._httpResponseTimeout = config.httpResponseTimeout;
    this._idTokenValidator = config.idTokenValidator;
    this._identityMapper = config.identityMapper;
    this._jaasConfigFile = config.jaasConfigFile;
    this._kdcAddress = config.kdcAddress;
    this._kerberosServicePrincipal = config.kerberosServicePrincipal;
    this._keyManagerProvider = config.keyManagerProvider;
    this._keytab = config.keytab;
    this._name = config.name;
    this._otpValidityDuration = config.otpValidityDuration;
    this._preventTotpReuse = config.preventTotpReuse;
    this._realm = config.realm;
    this._requireBothAccessTokenAndIdToken = config.requireBothAccessTokenAndIdToken;
    this._requireStaticPassword = config.requireStaticPassword;
    this._serverFqdn = config.serverFqdn;
    this._sharedSecretAttributeType = config.sharedSecretAttributeType;
    this._timeIntervalDuration = config.timeIntervalDuration;
    this._trustManagerProvider = config.trustManagerProvider;
    this._validateAccessTokenWhenIdTokenIsAlsoProvided = config.validateAccessTokenWhenIdTokenIsAlsoProvided;
    this._yubikeyApiKey = config.yubikeyApiKey;
    this._yubikeyApiKeyPassphraseProvider = config.yubikeyApiKeyPassphraseProvider;
    this._yubikeyClientId = config.yubikeyClientId;
    this._yubikeyValidationServerBaseUrl = config.yubikeyValidationServerBaseUrl;
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

  // adjacent_intervals_to_check - computed: true, optional: true, required: false
  private _adjacentIntervalsToCheck?: number; 
  public get adjacentIntervalsToCheck() {
    return this.getNumberAttribute('adjacent_intervals_to_check');
  }
  public set adjacentIntervalsToCheck(value: number) {
    this._adjacentIntervalsToCheck = value;
  }
  public resetAdjacentIntervalsToCheck() {
    this._adjacentIntervalsToCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adjacentIntervalsToCheckInput() {
    return this._adjacentIntervalsToCheck;
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

  // allow_null_server_fqdn - computed: true, optional: true, required: false
  private _allowNullServerFqdn?: boolean | cdktf.IResolvable; 
  public get allowNullServerFqdn() {
    return this.getBooleanAttribute('allow_null_server_fqdn');
  }
  public set allowNullServerFqdn(value: boolean | cdktf.IResolvable) {
    this._allowNullServerFqdn = value;
  }
  public resetAllowNullServerFqdn() {
    this._allowNullServerFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowNullServerFqdnInput() {
    return this._allowNullServerFqdn;
  }

  // allowed_quality_of_protection - computed: true, optional: true, required: false
  private _allowedQualityOfProtection?: string[]; 
  public get allowedQualityOfProtection() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_quality_of_protection'));
  }
  public set allowedQualityOfProtection(value: string[]) {
    this._allowedQualityOfProtection = value;
  }
  public resetAllowedQualityOfProtection() {
    this._allowedQualityOfProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedQualityOfProtectionInput() {
    return this._allowedQualityOfProtection;
  }

  // alternate_authorization_identity_mapper - computed: true, optional: true, required: false
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

  // certificate_attribute - computed: true, optional: true, required: false
  private _certificateAttribute?: string; 
  public get certificateAttribute() {
    return this.getStringAttribute('certificate_attribute');
  }
  public set certificateAttribute(value: string) {
    this._certificateAttribute = value;
  }
  public resetCertificateAttribute() {
    this._certificateAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAttributeInput() {
    return this._certificateAttribute;
  }

  // certificate_mapper - computed: true, optional: true, required: false
  private _certificateMapper?: string; 
  public get certificateMapper() {
    return this.getStringAttribute('certificate_mapper');
  }
  public set certificateMapper(value: string) {
    this._certificateMapper = value;
  }
  public resetCertificateMapper() {
    this._certificateMapper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateMapperInput() {
    return this._certificateMapper;
  }

  // certificate_validation_policy - computed: true, optional: true, required: false
  private _certificateValidationPolicy?: string; 
  public get certificateValidationPolicy() {
    return this.getStringAttribute('certificate_validation_policy');
  }
  public set certificateValidationPolicy(value: string) {
    this._certificateValidationPolicy = value;
  }
  public resetCertificateValidationPolicy() {
    this._certificateValidationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateValidationPolicyInput() {
    return this._certificateValidationPolicy;
  }

  // description - computed: true, optional: true, required: false
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

  // enable_debug - computed: true, optional: true, required: false
  private _enableDebug?: boolean | cdktf.IResolvable; 
  public get enableDebug() {
    return this.getBooleanAttribute('enable_debug');
  }
  public set enableDebug(value: boolean | cdktf.IResolvable) {
    this._enableDebug = value;
  }
  public resetEnableDebug() {
    this._enableDebug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDebugInput() {
    return this._enableDebug;
  }

  // enabled - computed: true, optional: true, required: false
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

  // extension_class - computed: true, optional: true, required: false
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

  // gssapi_role - computed: true, optional: true, required: false
  private _gssapiRole?: string; 
  public get gssapiRole() {
    return this.getStringAttribute('gssapi_role');
  }
  public set gssapiRole(value: string) {
    this._gssapiRole = value;
  }
  public resetGssapiRole() {
    this._gssapiRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gssapiRoleInput() {
    return this._gssapiRole;
  }

  // http_connect_timeout - computed: true, optional: true, required: false
  private _httpConnectTimeout?: string; 
  public get httpConnectTimeout() {
    return this.getStringAttribute('http_connect_timeout');
  }
  public set httpConnectTimeout(value: string) {
    this._httpConnectTimeout = value;
  }
  public resetHttpConnectTimeout() {
    this._httpConnectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpConnectTimeoutInput() {
    return this._httpConnectTimeout;
  }

  // http_proxy_external_server - computed: true, optional: true, required: false
  private _httpProxyExternalServer?: string; 
  public get httpProxyExternalServer() {
    return this.getStringAttribute('http_proxy_external_server');
  }
  public set httpProxyExternalServer(value: string) {
    this._httpProxyExternalServer = value;
  }
  public resetHttpProxyExternalServer() {
    this._httpProxyExternalServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyExternalServerInput() {
    return this._httpProxyExternalServer;
  }

  // http_response_timeout - computed: true, optional: true, required: false
  private _httpResponseTimeout?: string; 
  public get httpResponseTimeout() {
    return this.getStringAttribute('http_response_timeout');
  }
  public set httpResponseTimeout(value: string) {
    this._httpResponseTimeout = value;
  }
  public resetHttpResponseTimeout() {
    this._httpResponseTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpResponseTimeoutInput() {
    return this._httpResponseTimeout;
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

  // identity_mapper - computed: true, optional: true, required: false
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

  // jaas_config_file - computed: true, optional: true, required: false
  private _jaasConfigFile?: string; 
  public get jaasConfigFile() {
    return this.getStringAttribute('jaas_config_file');
  }
  public set jaasConfigFile(value: string) {
    this._jaasConfigFile = value;
  }
  public resetJaasConfigFile() {
    this._jaasConfigFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jaasConfigFileInput() {
    return this._jaasConfigFile;
  }

  // kdc_address - computed: true, optional: true, required: false
  private _kdcAddress?: string; 
  public get kdcAddress() {
    return this.getStringAttribute('kdc_address');
  }
  public set kdcAddress(value: string) {
    this._kdcAddress = value;
  }
  public resetKdcAddress() {
    this._kdcAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kdcAddressInput() {
    return this._kdcAddress;
  }

  // kerberos_service_principal - computed: true, optional: true, required: false
  private _kerberosServicePrincipal?: string; 
  public get kerberosServicePrincipal() {
    return this.getStringAttribute('kerberos_service_principal');
  }
  public set kerberosServicePrincipal(value: string) {
    this._kerberosServicePrincipal = value;
  }
  public resetKerberosServicePrincipal() {
    this._kerberosServicePrincipal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosServicePrincipalInput() {
    return this._kerberosServicePrincipal;
  }

  // key_manager_provider - computed: true, optional: true, required: false
  private _keyManagerProvider?: string; 
  public get keyManagerProvider() {
    return this.getStringAttribute('key_manager_provider');
  }
  public set keyManagerProvider(value: string) {
    this._keyManagerProvider = value;
  }
  public resetKeyManagerProvider() {
    this._keyManagerProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyManagerProviderInput() {
    return this._keyManagerProvider;
  }

  // keytab - computed: true, optional: true, required: false
  private _keytab?: string; 
  public get keytab() {
    return this.getStringAttribute('keytab');
  }
  public set keytab(value: string) {
    this._keytab = value;
  }
  public resetKeytab() {
    this._keytab = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keytabInput() {
    return this._keytab;
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

  // prevent_totp_reuse - computed: true, optional: true, required: false
  private _preventTotpReuse?: boolean | cdktf.IResolvable; 
  public get preventTotpReuse() {
    return this.getBooleanAttribute('prevent_totp_reuse');
  }
  public set preventTotpReuse(value: boolean | cdktf.IResolvable) {
    this._preventTotpReuse = value;
  }
  public resetPreventTotpReuse() {
    this._preventTotpReuse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventTotpReuseInput() {
    return this._preventTotpReuse;
  }

  // realm - computed: true, optional: true, required: false
  private _realm?: string; 
  public get realm() {
    return this.getStringAttribute('realm');
  }
  public set realm(value: string) {
    this._realm = value;
  }
  public resetRealm() {
    this._realm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm;
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

  // require_static_password - computed: true, optional: true, required: false
  private _requireStaticPassword?: boolean | cdktf.IResolvable; 
  public get requireStaticPassword() {
    return this.getBooleanAttribute('require_static_password');
  }
  public set requireStaticPassword(value: boolean | cdktf.IResolvable) {
    this._requireStaticPassword = value;
  }
  public resetRequireStaticPassword() {
    this._requireStaticPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireStaticPasswordInput() {
    return this._requireStaticPassword;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new DefaultSaslMechanismHandlerRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // server_fqdn - computed: true, optional: true, required: false
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

  // shared_secret_attribute_type - computed: true, optional: true, required: false
  private _sharedSecretAttributeType?: string; 
  public get sharedSecretAttributeType() {
    return this.getStringAttribute('shared_secret_attribute_type');
  }
  public set sharedSecretAttributeType(value: string) {
    this._sharedSecretAttributeType = value;
  }
  public resetSharedSecretAttributeType() {
    this._sharedSecretAttributeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedSecretAttributeTypeInput() {
    return this._sharedSecretAttributeType;
  }

  // time_interval_duration - computed: true, optional: true, required: false
  private _timeIntervalDuration?: string; 
  public get timeIntervalDuration() {
    return this.getStringAttribute('time_interval_duration');
  }
  public set timeIntervalDuration(value: string) {
    this._timeIntervalDuration = value;
  }
  public resetTimeIntervalDuration() {
    this._timeIntervalDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeIntervalDurationInput() {
    return this._timeIntervalDuration;
  }

  // trust_manager_provider - computed: true, optional: true, required: false
  private _trustManagerProvider?: string; 
  public get trustManagerProvider() {
    return this.getStringAttribute('trust_manager_provider');
  }
  public set trustManagerProvider(value: string) {
    this._trustManagerProvider = value;
  }
  public resetTrustManagerProvider() {
    this._trustManagerProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustManagerProviderInput() {
    return this._trustManagerProvider;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
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

  // yubikey_api_key - computed: true, optional: true, required: false
  private _yubikeyApiKey?: string; 
  public get yubikeyApiKey() {
    return this.getStringAttribute('yubikey_api_key');
  }
  public set yubikeyApiKey(value: string) {
    this._yubikeyApiKey = value;
  }
  public resetYubikeyApiKey() {
    this._yubikeyApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yubikeyApiKeyInput() {
    return this._yubikeyApiKey;
  }

  // yubikey_api_key_passphrase_provider - computed: true, optional: true, required: false
  private _yubikeyApiKeyPassphraseProvider?: string; 
  public get yubikeyApiKeyPassphraseProvider() {
    return this.getStringAttribute('yubikey_api_key_passphrase_provider');
  }
  public set yubikeyApiKeyPassphraseProvider(value: string) {
    this._yubikeyApiKeyPassphraseProvider = value;
  }
  public resetYubikeyApiKeyPassphraseProvider() {
    this._yubikeyApiKeyPassphraseProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yubikeyApiKeyPassphraseProviderInput() {
    return this._yubikeyApiKeyPassphraseProvider;
  }

  // yubikey_client_id - computed: true, optional: true, required: false
  private _yubikeyClientId?: string; 
  public get yubikeyClientId() {
    return this.getStringAttribute('yubikey_client_id');
  }
  public set yubikeyClientId(value: string) {
    this._yubikeyClientId = value;
  }
  public resetYubikeyClientId() {
    this._yubikeyClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yubikeyClientIdInput() {
    return this._yubikeyClientId;
  }

  // yubikey_validation_server_base_url - computed: true, optional: true, required: false
  private _yubikeyValidationServerBaseUrl?: string[]; 
  public get yubikeyValidationServerBaseUrl() {
    return cdktf.Fn.tolist(this.getListAttribute('yubikey_validation_server_base_url'));
  }
  public set yubikeyValidationServerBaseUrl(value: string[]) {
    this._yubikeyValidationServerBaseUrl = value;
  }
  public resetYubikeyValidationServerBaseUrl() {
    this._yubikeyValidationServerBaseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yubikeyValidationServerBaseUrlInput() {
    return this._yubikeyValidationServerBaseUrl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_token_validator: cdktf.listMapper(cdktf.stringToTerraform, false)(this._accessTokenValidator),
      adjacent_intervals_to_check: cdktf.numberToTerraform(this._adjacentIntervalsToCheck),
      all_required_scope: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allRequiredScope),
      allow_null_server_fqdn: cdktf.booleanToTerraform(this._allowNullServerFqdn),
      allowed_quality_of_protection: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedQualityOfProtection),
      alternate_authorization_identity_mapper: cdktf.stringToTerraform(this._alternateAuthorizationIdentityMapper),
      any_required_scope: cdktf.listMapper(cdktf.stringToTerraform, false)(this._anyRequiredScope),
      certificate_attribute: cdktf.stringToTerraform(this._certificateAttribute),
      certificate_mapper: cdktf.stringToTerraform(this._certificateMapper),
      certificate_validation_policy: cdktf.stringToTerraform(this._certificateValidationPolicy),
      description: cdktf.stringToTerraform(this._description),
      enable_debug: cdktf.booleanToTerraform(this._enableDebug),
      enabled: cdktf.booleanToTerraform(this._enabled),
      extension_argument: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extensionArgument),
      extension_class: cdktf.stringToTerraform(this._extensionClass),
      gssapi_role: cdktf.stringToTerraform(this._gssapiRole),
      http_connect_timeout: cdktf.stringToTerraform(this._httpConnectTimeout),
      http_proxy_external_server: cdktf.stringToTerraform(this._httpProxyExternalServer),
      http_response_timeout: cdktf.stringToTerraform(this._httpResponseTimeout),
      id_token_validator: cdktf.listMapper(cdktf.stringToTerraform, false)(this._idTokenValidator),
      identity_mapper: cdktf.stringToTerraform(this._identityMapper),
      jaas_config_file: cdktf.stringToTerraform(this._jaasConfigFile),
      kdc_address: cdktf.stringToTerraform(this._kdcAddress),
      kerberos_service_principal: cdktf.stringToTerraform(this._kerberosServicePrincipal),
      key_manager_provider: cdktf.stringToTerraform(this._keyManagerProvider),
      keytab: cdktf.stringToTerraform(this._keytab),
      name: cdktf.stringToTerraform(this._name),
      otp_validity_duration: cdktf.stringToTerraform(this._otpValidityDuration),
      prevent_totp_reuse: cdktf.booleanToTerraform(this._preventTotpReuse),
      realm: cdktf.stringToTerraform(this._realm),
      require_both_access_token_and_id_token: cdktf.booleanToTerraform(this._requireBothAccessTokenAndIdToken),
      require_static_password: cdktf.booleanToTerraform(this._requireStaticPassword),
      server_fqdn: cdktf.stringToTerraform(this._serverFqdn),
      shared_secret_attribute_type: cdktf.stringToTerraform(this._sharedSecretAttributeType),
      time_interval_duration: cdktf.stringToTerraform(this._timeIntervalDuration),
      trust_manager_provider: cdktf.stringToTerraform(this._trustManagerProvider),
      validate_access_token_when_id_token_is_also_provided: cdktf.stringToTerraform(this._validateAccessTokenWhenIdTokenIsAlsoProvided),
      yubikey_api_key: cdktf.stringToTerraform(this._yubikeyApiKey),
      yubikey_api_key_passphrase_provider: cdktf.stringToTerraform(this._yubikeyApiKeyPassphraseProvider),
      yubikey_client_id: cdktf.stringToTerraform(this._yubikeyClientId),
      yubikey_validation_server_base_url: cdktf.listMapper(cdktf.stringToTerraform, false)(this._yubikeyValidationServerBaseUrl),
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
      adjacent_intervals_to_check: {
        value: cdktf.numberToHclTerraform(this._adjacentIntervalsToCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      all_required_scope: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allRequiredScope),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      allow_null_server_fqdn: {
        value: cdktf.booleanToHclTerraform(this._allowNullServerFqdn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allowed_quality_of_protection: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedQualityOfProtection),
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
      certificate_attribute: {
        value: cdktf.stringToHclTerraform(this._certificateAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_mapper: {
        value: cdktf.stringToHclTerraform(this._certificateMapper),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_validation_policy: {
        value: cdktf.stringToHclTerraform(this._certificateValidationPolicy),
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
      enable_debug: {
        value: cdktf.booleanToHclTerraform(this._enableDebug),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      gssapi_role: {
        value: cdktf.stringToHclTerraform(this._gssapiRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_connect_timeout: {
        value: cdktf.stringToHclTerraform(this._httpConnectTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_proxy_external_server: {
        value: cdktf.stringToHclTerraform(this._httpProxyExternalServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_response_timeout: {
        value: cdktf.stringToHclTerraform(this._httpResponseTimeout),
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
      jaas_config_file: {
        value: cdktf.stringToHclTerraform(this._jaasConfigFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kdc_address: {
        value: cdktf.stringToHclTerraform(this._kdcAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kerberos_service_principal: {
        value: cdktf.stringToHclTerraform(this._kerberosServicePrincipal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_manager_provider: {
        value: cdktf.stringToHclTerraform(this._keyManagerProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keytab: {
        value: cdktf.stringToHclTerraform(this._keytab),
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
      prevent_totp_reuse: {
        value: cdktf.booleanToHclTerraform(this._preventTotpReuse),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      realm: {
        value: cdktf.stringToHclTerraform(this._realm),
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
      require_static_password: {
        value: cdktf.booleanToHclTerraform(this._requireStaticPassword),
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
      shared_secret_attribute_type: {
        value: cdktf.stringToHclTerraform(this._sharedSecretAttributeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_interval_duration: {
        value: cdktf.stringToHclTerraform(this._timeIntervalDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trust_manager_provider: {
        value: cdktf.stringToHclTerraform(this._trustManagerProvider),
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
      yubikey_api_key: {
        value: cdktf.stringToHclTerraform(this._yubikeyApiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      yubikey_api_key_passphrase_provider: {
        value: cdktf.stringToHclTerraform(this._yubikeyApiKeyPassphraseProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      yubikey_client_id: {
        value: cdktf.stringToHclTerraform(this._yubikeyClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      yubikey_validation_server_base_url: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._yubikeyValidationServerBaseUrl),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
