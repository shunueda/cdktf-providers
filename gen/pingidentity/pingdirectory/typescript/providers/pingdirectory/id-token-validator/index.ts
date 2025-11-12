// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/id_token_validator
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdTokenValidatorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies an allow list of JWT signing algorithms that will be accepted by the OpenID Connect ID Token Validator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/id_token_validator#allowed_signing_algorithm IdTokenValidator#allowed_signing_algorithm}
  */
  readonly allowedSigningAlgorithm?: string[];
  /**
  * Specifies the amount of clock skew that is tolerated by the ID Token Validator when evaluating whether a token is within its valid time interval. The duration specified by this parameter will be subtracted from the token's not-before (nbf) time and added to the token's expiration (exp) time, if present, to allow for any time difference between the local server's clock and the token issuer's clock.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/id_token_validator#clock_skew_grace_period IdTokenValidator#clock_skew_grace_period}
  */
  readonly clockSkewGracePeriod?: string;
  /**
  * A description for this ID Token Validator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/id_token_validator#description IdTokenValidator#description}
  */
  readonly description?: string;
  /**
  * Indicates whether this ID Token Validator is enabled for use in the Directory Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/id_token_validator#enabled IdTokenValidator#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * When multiple ID Token Validators are defined for a single Directory Server, this property determines the order in which the ID Token Validators are consulted. Values of this property must be unique among all ID Token Validators defined within Directory Server but not necessarily contiguous. ID Token Validators with lower values will be evaluated first to determine if they are able to validate the ID token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/id_token_validator#evaluation_order_index IdTokenValidator#evaluation_order_index}
  */
  readonly evaluationOrderIndex: number;
  /**
  * Specifies the name of the Identity Mapper that should be used to correlate an ID token subject value to a user entry. The claim name from which to obtain the subject (i.e. the currently logged-in user) may be configured using the subject-claim-name property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/id_token_validator#identity_mapper IdTokenValidator#identity_mapper}
  */
  readonly identityMapper: string;
  /**
  * When the `type` attribute is set to:
  *   - `ping-one`: Specifies a PingOne base issuer URL.
  *   - `openid-connect`: Specifies the OpenID Connect provider's issuer URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/id_token_validator#issuer_url IdTokenValidator#issuer_url}
  */
  readonly issuerUrl: string;
  /**
  * How often the ID Token Validator should refresh its cache of JWKS token signing keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/id_token_validator#jwks_cache_duration IdTokenValidator#jwks_cache_duration}
  */
  readonly jwksCacheDuration?: string;
  /**
  * The relative path to the JWKS endpoint from which to retrieve one or more public signing keys that may be used to validate the signature of an incoming ID token. This path is relative to the base_url property defined for the validator's OpenID Connect provider. If jwks-endpoint-path is specified, the OpenID Connect ID Token Validator will not consult locally stored certificates for validating token signatures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/id_token_validator#jwks_endpoint_path IdTokenValidator#jwks_endpoint_path}
  */
  readonly jwksEndpointPath?: string;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/id_token_validator#name IdTokenValidator#name}
  */
  readonly name: string;
  /**
  * How often the PingOne ID Token Validator should refresh its stored cache of OpenID Connect-related metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/id_token_validator#openid_connect_metadata_cache_duration IdTokenValidator#openid_connect_metadata_cache_duration}
  */
  readonly openidConnectMetadataCacheDuration?: string;
  /**
  * When the `type` attribute is set to:
  *   - `ping-one`: Specifies HTTPS connection settings for the PingOne OpenID Connect provider.
  *   - `openid-connect`: Specifies the OpenID Connect provider that issues ID tokens handled by this OpenID Connect ID Token Validator. This property is used in conjunction with the jwks-endpoint-path property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/id_token_validator#openid_connect_provider IdTokenValidator#openid_connect_provider}
  */
  readonly openidConnectProvider?: string;
  /**
  * Specifies the locally stored certificates that may be used to validate the signature of an incoming ID token. This property may be specified if a JWKS endpoint should not be used to retrieve public signing keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/id_token_validator#signing_certificate IdTokenValidator#signing_certificate}
  */
  readonly signingCertificate?: string[];
  /**
  * The name of the token claim that contains the subject; i.e., the authenticated user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/id_token_validator#subject_claim_name IdTokenValidator#subject_claim_name}
  */
  readonly subjectClaimName?: string;
  /**
  * The type of ID Token Validator resource. Options are ['ping-one', 'openid-connect']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/id_token_validator#type IdTokenValidator#type}
  */
  readonly type: string;
}
export interface IdTokenValidatorRequiredActions {
}

export function idTokenValidatorRequiredActionsToTerraform(struct?: IdTokenValidatorRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function idTokenValidatorRequiredActionsToHclTerraform(struct?: IdTokenValidatorRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdTokenValidatorRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdTokenValidatorRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdTokenValidatorRequiredActions | undefined) {
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

export class IdTokenValidatorRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): IdTokenValidatorRequiredActionsOutputReference {
    return new IdTokenValidatorRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/id_token_validator pingdirectory_id_token_validator}
*/
export class IdTokenValidator extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_id_token_validator";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdTokenValidator resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdTokenValidator to import
  * @param importFromId The id of the existing IdTokenValidator that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/id_token_validator#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdTokenValidator to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_id_token_validator", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/id_token_validator pingdirectory_id_token_validator} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdTokenValidatorConfig
  */
  public constructor(scope: Construct, id: string, config: IdTokenValidatorConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_id_token_validator',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedSigningAlgorithm = config.allowedSigningAlgorithm;
    this._clockSkewGracePeriod = config.clockSkewGracePeriod;
    this._description = config.description;
    this._enabled = config.enabled;
    this._evaluationOrderIndex = config.evaluationOrderIndex;
    this._identityMapper = config.identityMapper;
    this._issuerUrl = config.issuerUrl;
    this._jwksCacheDuration = config.jwksCacheDuration;
    this._jwksEndpointPath = config.jwksEndpointPath;
    this._name = config.name;
    this._openidConnectMetadataCacheDuration = config.openidConnectMetadataCacheDuration;
    this._openidConnectProvider = config.openidConnectProvider;
    this._signingCertificate = config.signingCertificate;
    this._subjectClaimName = config.subjectClaimName;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_mapper - computed: false, optional: false, required: true
  private _identityMapper?: string; 
  public get identityMapper() {
    return this.getStringAttribute('identity_mapper');
  }
  public set identityMapper(value: string) {
    this._identityMapper = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityMapperInput() {
    return this._identityMapper;
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

  // jwks_cache_duration - computed: true, optional: true, required: false
  private _jwksCacheDuration?: string; 
  public get jwksCacheDuration() {
    return this.getStringAttribute('jwks_cache_duration');
  }
  public set jwksCacheDuration(value: string) {
    this._jwksCacheDuration = value;
  }
  public resetJwksCacheDuration() {
    this._jwksCacheDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksCacheDurationInput() {
    return this._jwksCacheDuration;
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

  // openid_connect_metadata_cache_duration - computed: true, optional: true, required: false
  private _openidConnectMetadataCacheDuration?: string; 
  public get openidConnectMetadataCacheDuration() {
    return this.getStringAttribute('openid_connect_metadata_cache_duration');
  }
  public set openidConnectMetadataCacheDuration(value: string) {
    this._openidConnectMetadataCacheDuration = value;
  }
  public resetOpenidConnectMetadataCacheDuration() {
    this._openidConnectMetadataCacheDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openidConnectMetadataCacheDurationInput() {
    return this._openidConnectMetadataCacheDuration;
  }

  // openid_connect_provider - computed: true, optional: true, required: false
  private _openidConnectProvider?: string; 
  public get openidConnectProvider() {
    return this.getStringAttribute('openid_connect_provider');
  }
  public set openidConnectProvider(value: string) {
    this._openidConnectProvider = value;
  }
  public resetOpenidConnectProvider() {
    this._openidConnectProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openidConnectProviderInput() {
    return this._openidConnectProvider;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new IdTokenValidatorRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
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
      allowed_signing_algorithm: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedSigningAlgorithm),
      clock_skew_grace_period: cdktf.stringToTerraform(this._clockSkewGracePeriod),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      evaluation_order_index: cdktf.numberToTerraform(this._evaluationOrderIndex),
      identity_mapper: cdktf.stringToTerraform(this._identityMapper),
      issuer_url: cdktf.stringToTerraform(this._issuerUrl),
      jwks_cache_duration: cdktf.stringToTerraform(this._jwksCacheDuration),
      jwks_endpoint_path: cdktf.stringToTerraform(this._jwksEndpointPath),
      name: cdktf.stringToTerraform(this._name),
      openid_connect_metadata_cache_duration: cdktf.stringToTerraform(this._openidConnectMetadataCacheDuration),
      openid_connect_provider: cdktf.stringToTerraform(this._openidConnectProvider),
      signing_certificate: cdktf.listMapper(cdktf.stringToTerraform, false)(this._signingCertificate),
      subject_claim_name: cdktf.stringToTerraform(this._subjectClaimName),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_signing_algorithm: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedSigningAlgorithm),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      evaluation_order_index: {
        value: cdktf.numberToHclTerraform(this._evaluationOrderIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      identity_mapper: {
        value: cdktf.stringToHclTerraform(this._identityMapper),
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
      jwks_cache_duration: {
        value: cdktf.stringToHclTerraform(this._jwksCacheDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      openid_connect_metadata_cache_duration: {
        value: cdktf.stringToHclTerraform(this._openidConnectMetadataCacheDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      openid_connect_provider: {
        value: cdktf.stringToHclTerraform(this._openidConnectProvider),
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
