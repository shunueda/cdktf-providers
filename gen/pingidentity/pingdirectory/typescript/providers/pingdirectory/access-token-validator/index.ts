// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/access_token_validator
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessTokenValidatorConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Access Token Manager instance ID to specify when calling the PingFederate introspection endpoint. If this property is set the include-aud-parameter property is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/access_token_validator#access_token_manager_id AccessTokenValidator#access_token_manager_id}
  */
  readonly accessTokenManagerId?: string;
  /**
  * Specifies an allow list of JWT content encryption algorithms that will be accepted by the JWT Access Token Validator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/access_token_validator#allowed_content_encryption_algorithm AccessTokenValidator#allowed_content_encryption_algorithm}
  */
  readonly allowedContentEncryptionAlgorithm?: string[];
  /**
  * Specifies an allow list of JWT key encryption algorithms that will be accepted by the JWT Access Token Validator. This setting is only used if encryption-key-pair is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/access_token_validator#allowed_key_encryption_algorithm AccessTokenValidator#allowed_key_encryption_algorithm}
  */
  readonly allowedKeyEncryptionAlgorithm?: string[];
  /**
  * Specifies an allow list of JWT signing algorithms that will be accepted by the JWT Access Token Validator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/access_token_validator#allowed_signing_algorithm AccessTokenValidator#allowed_signing_algorithm}
  */
  readonly allowedSigningAlgorithm?: string[];
  /**
  * Specifies the external server that will be used to aid in validating access tokens. In most cases this will be the Authorization Server that minted the token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/access_token_validator#authorization_server AccessTokenValidator#authorization_server}
  */
  readonly authorizationServer?: string;
  /**
  * The client identifier to use when authenticating to the PingFederate authorization server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/access_token_validator#client_id AccessTokenValidator#client_id}
  */
  readonly clientId?: string;
  /**
  * The name of the token claim that contains the OAuth2 client Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/access_token_validator#client_id_claim_name AccessTokenValidator#client_id_claim_name}
  */
  readonly clientIdClaimName?: string;
  /**
  * The client secret to use when authenticating to the PingFederate authorization server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/access_token_validator#client_secret AccessTokenValidator#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * The passphrase provider for obtaining the client secret to use when authenticating to the PingFederate authorization server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/access_token_validator#client_secret_passphrase_provider AccessTokenValidator#client_secret_passphrase_provider}
  */
  readonly clientSecretPassphraseProvider?: string;
  /**
  * Specifies the amount of clock skew that is tolerated by the JWT Access Token Validator when evaluating whether a token is within its valid time interval. The duration specified by this parameter will be subtracted from the token's not-before (nbf) time and added to the token's expiration (exp) time, if present, to allow for any time difference between the local server's clock and the token issuer's clock.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/access_token_validator#clock_skew_grace_period AccessTokenValidator#clock_skew_grace_period}
  */
  readonly clockSkewGracePeriod?: string;
  /**
  * A description for this Access Token Validator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/access_token_validator#description AccessTokenValidator#description}
  */
  readonly description?: string;
  /**
  * When the `type` attribute is set to:
  *   - One of [`ping-federate`, `jwt`, `mock`, `third-party`]: Indicates whether this Access Token Validator is enabled for use in Directory Server.
  *   - `bind`: Indicates whether this Bind Access Token Validator is enabled for use in Directory Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/access_token_validator#enabled AccessTokenValidator#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The public-private key pair that is used to encrypt the JWT payload. If specified, the JWT Access Token Validator will use the private key to decrypt the JWT payload, and the public key must be exported to the Authorization Server that is issuing access tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/access_token_validator#encryption_key_pair AccessTokenValidator#encryption_key_pair}
  */
  readonly encryptionKeyPair?: string;
  /**
  * How often the Access Token Validator should refresh its stored value of the PingFederate server's token introspection endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/access_token_validator#endpoint_cache_refresh AccessTokenValidator#endpoint_cache_refresh}
  */
  readonly endpointCacheRefresh?: string;
  /**
  * When the `type` attribute is set to:
  *   - One of [`bind`, `third-party`]: When multiple Access Token Validators are defined for a single Directory Server, this property determines the evaluation order for determining the correct validator class for an access token received by the Directory Server. Values of this property must be unique among all Access Token Validators defined within Directory Server but not necessarily contiguous. Access Token Validators with a smaller value will be evaluated first to determine if they are able to validate the access token.
  *   - `ping-federate`: When multiple Ping Federate Access Token Validators are defined for a single Directory Server, this property determines the evaluation order for determining the correct validator class for an access token received by the Directory Server. Values of this property must be unique among all Ping Federate Access Token Validators defined within Directory Server but not necessarily contiguous. Ping Federate Access Token Validators with a smaller value will be evaluated first to determine if they are able to validate the access token.
  *   - `jwt`: When multiple JWT Access Token Validators are defined for a single Directory Server, this property determines the evaluation order for determining the correct validator class for an access token received by the Directory Server. Values of this property must be unique among all JWT Access Token Validators defined within Directory Server but not necessarily contiguous. JWT Access Token Validators with a smaller value will be evaluated first to determine if they are able to validate the access token.
  *   - `mock`: When multiple Mock Access Token Validators are defined for a single Directory Server, this property determines the evaluation order for determining the correct validator class for an access token received by the Directory Server. Values of this property must be unique among all Mock Access Token Validators defined within Directory Server but not necessarily contiguous. Mock Access Token Validators with a smaller value will be evaluated first to determine if they are able to validate the access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/access_token_validator#evaluation_order_index AccessTokenValidator#evaluation_order_index}
  */
  readonly evaluationOrderIndex: number;
  /**
  * The set of arguments used to customize the behavior for the Third Party Access Token Validator. Each configuration property should be given in the form 'name=value'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/access_token_validator#extension_argument AccessTokenValidator#extension_argument}
  */
  readonly extensionArgument?: string[];
  /**
  * The fully-qualified name of the Java class providing the logic for the Third Party Access Token Validator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/access_token_validator#extension_class AccessTokenValidator#extension_class}
  */
  readonly extensionClass?: string;
  /**
  * Specifies the name of the Identity Mapper that should be used for associating user entries with Bearer token subject names. The claim name from which to obtain the subject (i.e. the currently logged-in user) may be configured using the subject-claim-name property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/access_token_validator#identity_mapper AccessTokenValidator#identity_mapper}
  */
  readonly identityMapper?: string;
  /**
  * Whether to include the incoming request URL as the "aud" parameter when calling the PingFederate introspection endpoint. This property is ignored if the access-token-manager-id property is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/access_token_validator#include_aud_parameter AccessTokenValidator#include_aud_parameter}
  */
  readonly includeAudParameter?: boolean | cdktf.IResolvable;
  /**
  * The relative path to JWKS endpoint from which to retrieve one or more public signing keys that may be used to validate the signature of an incoming JWT access token. This path is relative to the base_url property defined for the validator's external authorization server. If jwks-endpoint-path is specified, the JWT Access Token Validator will not consult locally stored certificates for validating token signatures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/access_token_validator#jwks_endpoint_path AccessTokenValidator#jwks_endpoint_path}
  */
  readonly jwksEndpointPath?: string;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/access_token_validator#name AccessTokenValidator#name}
  */
  readonly name: string;
  /**
  * The name of the token claim that contains the scopes granted by the token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/access_token_validator#scope_claim_name AccessTokenValidator#scope_claim_name}
  */
  readonly scopeClaimName?: string;
  /**
  * Specifies the locally stored certificates that may be used to validate the signature of an incoming JWT access token. If this property is specified, the JWT Access Token Validator will not use a JWKS endpoint to retrieve public keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/access_token_validator#signing_certificate AccessTokenValidator#signing_certificate}
  */
  readonly signingCertificate?: string[];
  /**
  * The name of the token claim that contains the subject, i.e. the logged-in user in an access token. This property goes hand-in-hand with the identity-mapper property and tells the Identity Mapper which field to use to look up the user entry on the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/access_token_validator#subject_claim_name AccessTokenValidator#subject_claim_name}
  */
  readonly subjectClaimName?: string;
  /**
  * The type of Access Token Validator resource. Options are ['bind', 'ping-federate', 'jwt', 'mock', 'third-party']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/access_token_validator#type AccessTokenValidator#type}
  */
  readonly type: string;
}
export interface AccessTokenValidatorRequiredActions {
}

export function accessTokenValidatorRequiredActionsToTerraform(struct?: AccessTokenValidatorRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function accessTokenValidatorRequiredActionsToHclTerraform(struct?: AccessTokenValidatorRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AccessTokenValidatorRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessTokenValidatorRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessTokenValidatorRequiredActions | undefined) {
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

export class AccessTokenValidatorRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): AccessTokenValidatorRequiredActionsOutputReference {
    return new AccessTokenValidatorRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/access_token_validator pingdirectory_access_token_validator}
*/
export class AccessTokenValidator extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_access_token_validator";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccessTokenValidator resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccessTokenValidator to import
  * @param importFromId The id of the existing AccessTokenValidator that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/access_token_validator#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccessTokenValidator to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_access_token_validator", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/access_token_validator pingdirectory_access_token_validator} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessTokenValidatorConfig
  */
  public constructor(scope: Construct, id: string, config: AccessTokenValidatorConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_access_token_validator',
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
    this._accessTokenManagerId = config.accessTokenManagerId;
    this._allowedContentEncryptionAlgorithm = config.allowedContentEncryptionAlgorithm;
    this._allowedKeyEncryptionAlgorithm = config.allowedKeyEncryptionAlgorithm;
    this._allowedSigningAlgorithm = config.allowedSigningAlgorithm;
    this._authorizationServer = config.authorizationServer;
    this._clientId = config.clientId;
    this._clientIdClaimName = config.clientIdClaimName;
    this._clientSecret = config.clientSecret;
    this._clientSecretPassphraseProvider = config.clientSecretPassphraseProvider;
    this._clockSkewGracePeriod = config.clockSkewGracePeriod;
    this._description = config.description;
    this._enabled = config.enabled;
    this._encryptionKeyPair = config.encryptionKeyPair;
    this._endpointCacheRefresh = config.endpointCacheRefresh;
    this._evaluationOrderIndex = config.evaluationOrderIndex;
    this._extensionArgument = config.extensionArgument;
    this._extensionClass = config.extensionClass;
    this._identityMapper = config.identityMapper;
    this._includeAudParameter = config.includeAudParameter;
    this._jwksEndpointPath = config.jwksEndpointPath;
    this._name = config.name;
    this._scopeClaimName = config.scopeClaimName;
    this._signingCertificate = config.signingCertificate;
    this._subjectClaimName = config.subjectClaimName;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token_manager_id - computed: false, optional: true, required: false
  private _accessTokenManagerId?: string; 
  public get accessTokenManagerId() {
    return this.getStringAttribute('access_token_manager_id');
  }
  public set accessTokenManagerId(value: string) {
    this._accessTokenManagerId = value;
  }
  public resetAccessTokenManagerId() {
    this._accessTokenManagerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenManagerIdInput() {
    return this._accessTokenManagerId;
  }

  // allowed_content_encryption_algorithm - computed: true, optional: true, required: false
  private _allowedContentEncryptionAlgorithm?: string[]; 
  public get allowedContentEncryptionAlgorithm() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_content_encryption_algorithm'));
  }
  public set allowedContentEncryptionAlgorithm(value: string[]) {
    this._allowedContentEncryptionAlgorithm = value;
  }
  public resetAllowedContentEncryptionAlgorithm() {
    this._allowedContentEncryptionAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedContentEncryptionAlgorithmInput() {
    return this._allowedContentEncryptionAlgorithm;
  }

  // allowed_key_encryption_algorithm - computed: true, optional: true, required: false
  private _allowedKeyEncryptionAlgorithm?: string[]; 
  public get allowedKeyEncryptionAlgorithm() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_key_encryption_algorithm'));
  }
  public set allowedKeyEncryptionAlgorithm(value: string[]) {
    this._allowedKeyEncryptionAlgorithm = value;
  }
  public resetAllowedKeyEncryptionAlgorithm() {
    this._allowedKeyEncryptionAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedKeyEncryptionAlgorithmInput() {
    return this._allowedKeyEncryptionAlgorithm;
  }

  // allowed_signing_algorithm - computed: true, optional: true, required: false
  private _allowedSigningAlgorithm?: string[]; 
  public get allowedSigningAlgorithm() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_signing_algorithm'));
  }
  public set allowedSigningAlgorithm(value: string[]) {
    this._allowedSigningAlgorithm = value;
  }
  public resetAllowedSigningAlgorithm() {
    this._allowedSigningAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedSigningAlgorithmInput() {
    return this._allowedSigningAlgorithm;
  }

  // authorization_server - computed: false, optional: true, required: false
  private _authorizationServer?: string; 
  public get authorizationServer() {
    return this.getStringAttribute('authorization_server');
  }
  public set authorizationServer(value: string) {
    this._authorizationServer = value;
  }
  public resetAuthorizationServer() {
    this._authorizationServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationServerInput() {
    return this._authorizationServer;
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

  // client_id_claim_name - computed: true, optional: true, required: false
  private _clientIdClaimName?: string; 
  public get clientIdClaimName() {
    return this.getStringAttribute('client_id_claim_name');
  }
  public set clientIdClaimName(value: string) {
    this._clientIdClaimName = value;
  }
  public resetClientIdClaimName() {
    this._clientIdClaimName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdClaimNameInput() {
    return this._clientIdClaimName;
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

  // client_secret_passphrase_provider - computed: false, optional: true, required: false
  private _clientSecretPassphraseProvider?: string; 
  public get clientSecretPassphraseProvider() {
    return this.getStringAttribute('client_secret_passphrase_provider');
  }
  public set clientSecretPassphraseProvider(value: string) {
    this._clientSecretPassphraseProvider = value;
  }
  public resetClientSecretPassphraseProvider() {
    this._clientSecretPassphraseProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretPassphraseProviderInput() {
    return this._clientSecretPassphraseProvider;
  }

  // clock_skew_grace_period - computed: true, optional: true, required: false
  private _clockSkewGracePeriod?: string; 
  public get clockSkewGracePeriod() {
    return this.getStringAttribute('clock_skew_grace_period');
  }
  public set clockSkewGracePeriod(value: string) {
    this._clockSkewGracePeriod = value;
  }
  public resetClockSkewGracePeriod() {
    this._clockSkewGracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clockSkewGracePeriodInput() {
    return this._clockSkewGracePeriod;
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

  // encryption_key_pair - computed: false, optional: true, required: false
  private _encryptionKeyPair?: string; 
  public get encryptionKeyPair() {
    return this.getStringAttribute('encryption_key_pair');
  }
  public set encryptionKeyPair(value: string) {
    this._encryptionKeyPair = value;
  }
  public resetEncryptionKeyPair() {
    this._encryptionKeyPair = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyPairInput() {
    return this._encryptionKeyPair;
  }

  // endpoint_cache_refresh - computed: true, optional: true, required: false
  private _endpointCacheRefresh?: string; 
  public get endpointCacheRefresh() {
    return this.getStringAttribute('endpoint_cache_refresh');
  }
  public set endpointCacheRefresh(value: string) {
    this._endpointCacheRefresh = value;
  }
  public resetEndpointCacheRefresh() {
    this._endpointCacheRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointCacheRefreshInput() {
    return this._endpointCacheRefresh;
  }

  // evaluation_order_index - computed: false, optional: false, required: true
  private _evaluationOrderIndex?: number; 
  public get evaluationOrderIndex() {
    return this.getNumberAttribute('evaluation_order_index');
  }
  public set evaluationOrderIndex(value: number) {
    this._evaluationOrderIndex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationOrderIndexInput() {
    return this._evaluationOrderIndex;
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

  // include_aud_parameter - computed: true, optional: true, required: false
  private _includeAudParameter?: boolean | cdktf.IResolvable; 
  public get includeAudParameter() {
    return this.getBooleanAttribute('include_aud_parameter');
  }
  public set includeAudParameter(value: boolean | cdktf.IResolvable) {
    this._includeAudParameter = value;
  }
  public resetIncludeAudParameter() {
    this._includeAudParameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAudParameterInput() {
    return this._includeAudParameter;
  }

  // jwks_endpoint_path - computed: false, optional: true, required: false
  private _jwksEndpointPath?: string; 
  public get jwksEndpointPath() {
    return this.getStringAttribute('jwks_endpoint_path');
  }
  public set jwksEndpointPath(value: string) {
    this._jwksEndpointPath = value;
  }
  public resetJwksEndpointPath() {
    this._jwksEndpointPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksEndpointPathInput() {
    return this._jwksEndpointPath;
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

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new AccessTokenValidatorRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // scope_claim_name - computed: true, optional: true, required: false
  private _scopeClaimName?: string; 
  public get scopeClaimName() {
    return this.getStringAttribute('scope_claim_name');
  }
  public set scopeClaimName(value: string) {
    this._scopeClaimName = value;
  }
  public resetScopeClaimName() {
    this._scopeClaimName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeClaimNameInput() {
    return this._scopeClaimName;
  }

  // signing_certificate - computed: true, optional: true, required: false
  private _signingCertificate?: string[]; 
  public get signingCertificate() {
    return cdktf.Fn.tolist(this.getListAttribute('signing_certificate'));
  }
  public set signingCertificate(value: string[]) {
    this._signingCertificate = value;
  }
  public resetSigningCertificate() {
    this._signingCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingCertificateInput() {
    return this._signingCertificate;
  }

  // subject_claim_name - computed: true, optional: true, required: false
  private _subjectClaimName?: string; 
  public get subjectClaimName() {
    return this.getStringAttribute('subject_claim_name');
  }
  public set subjectClaimName(value: string) {
    this._subjectClaimName = value;
  }
  public resetSubjectClaimName() {
    this._subjectClaimName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectClaimNameInput() {
    return this._subjectClaimName;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_token_manager_id: cdktf.stringToTerraform(this._accessTokenManagerId),
      allowed_content_encryption_algorithm: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedContentEncryptionAlgorithm),
      allowed_key_encryption_algorithm: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedKeyEncryptionAlgorithm),
      allowed_signing_algorithm: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedSigningAlgorithm),
      authorization_server: cdktf.stringToTerraform(this._authorizationServer),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_id_claim_name: cdktf.stringToTerraform(this._clientIdClaimName),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      client_secret_passphrase_provider: cdktf.stringToTerraform(this._clientSecretPassphraseProvider),
      clock_skew_grace_period: cdktf.stringToTerraform(this._clockSkewGracePeriod),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      encryption_key_pair: cdktf.stringToTerraform(this._encryptionKeyPair),
      endpoint_cache_refresh: cdktf.stringToTerraform(this._endpointCacheRefresh),
      evaluation_order_index: cdktf.numberToTerraform(this._evaluationOrderIndex),
      extension_argument: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extensionArgument),
      extension_class: cdktf.stringToTerraform(this._extensionClass),
      identity_mapper: cdktf.stringToTerraform(this._identityMapper),
      include_aud_parameter: cdktf.booleanToTerraform(this._includeAudParameter),
      jwks_endpoint_path: cdktf.stringToTerraform(this._jwksEndpointPath),
      name: cdktf.stringToTerraform(this._name),
      scope_claim_name: cdktf.stringToTerraform(this._scopeClaimName),
      signing_certificate: cdktf.listMapper(cdktf.stringToTerraform, false)(this._signingCertificate),
      subject_claim_name: cdktf.stringToTerraform(this._subjectClaimName),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_token_manager_id: {
        value: cdktf.stringToHclTerraform(this._accessTokenManagerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowed_content_encryption_algorithm: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedContentEncryptionAlgorithm),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      allowed_key_encryption_algorithm: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedKeyEncryptionAlgorithm),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      allowed_signing_algorithm: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedSigningAlgorithm),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      authorization_server: {
        value: cdktf.stringToHclTerraform(this._authorizationServer),
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
      client_id_claim_name: {
        value: cdktf.stringToHclTerraform(this._clientIdClaimName),
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
      client_secret_passphrase_provider: {
        value: cdktf.stringToHclTerraform(this._clientSecretPassphraseProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clock_skew_grace_period: {
        value: cdktf.stringToHclTerraform(this._clockSkewGracePeriod),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encryption_key_pair: {
        value: cdktf.stringToHclTerraform(this._encryptionKeyPair),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_cache_refresh: {
        value: cdktf.stringToHclTerraform(this._endpointCacheRefresh),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      evaluation_order_index: {
        value: cdktf.numberToHclTerraform(this._evaluationOrderIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      identity_mapper: {
        value: cdktf.stringToHclTerraform(this._identityMapper),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_aud_parameter: {
        value: cdktf.booleanToHclTerraform(this._includeAudParameter),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      jwks_endpoint_path: {
        value: cdktf.stringToHclTerraform(this._jwksEndpointPath),
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
      scope_claim_name: {
        value: cdktf.stringToHclTerraform(this._scopeClaimName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signing_certificate: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._signingCertificate),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      subject_claim_name: {
        value: cdktf.stringToHclTerraform(this._subjectClaimName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
