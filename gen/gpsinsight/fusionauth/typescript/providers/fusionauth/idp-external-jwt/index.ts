// https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_external_jwt
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdpExternalJwtConfig extends cdktf.TerraformMetaArguments {
  /**
  * A map of incoming claims to User fields, User data or Registration data. The key of the map is the incoming claim name from the configured identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_external_jwt#claim_map IdpExternalJwt#claim_map}
  */
  readonly claimMap?: { [key: string]: string };
  /**
  * Determines if debug is enabled for this provider. When enabled, each time this provider is invoked to reconcile a login an Event Log will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_external_jwt#debug IdpExternalJwt#debug}
  */
  readonly debug?: boolean | cdktf.IResolvable;
  /**
  * An array of domains that are managed by this Identity Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_external_jwt#domains IdpExternalJwt#domains}
  */
  readonly domains?: string[];
  /**
  * Determines if this provider is enabled. If it is false then it will be disabled globally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_external_jwt#enabled IdpExternalJwt#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The name header claim that identifies the public key used to verify the signature. In most cases this be kid or x5t.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_external_jwt#header_key_parameter IdpExternalJwt#header_key_parameter}
  */
  readonly headerKeyParameter: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_external_jwt#id IdpExternalJwt#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID to use for the new identity provider. If not specified a secure random UUID will be generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_external_jwt#idp_id IdpExternalJwt#idp_id}
  */
  readonly idpId?: string;
  /**
  * The unique Id of the lambda to used during the user reconcile process to map custom claims from the external identity provider to the FusionAuth user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_external_jwt#lambda_reconcile_id IdpExternalJwt#lambda_reconcile_id}
  */
  readonly lambdaReconcileId?: string;
  /**
  * The linking strategy to use when creating the link between the {idp_display_name} Identity Provider and the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_external_jwt#linking_strategy IdpExternalJwt#linking_strategy}
  */
  readonly linkingStrategy?: string;
  /**
  * The name of the Identity Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_external_jwt#name IdpExternalJwt#name}
  */
  readonly name: string;
  /**
  * The authorization endpoint for this Identity Provider. This value is not utilized by FusionAuth is only provided to be returned by the Lookup Identity Provider API response. During integration you may then utilize this value to perform the browser redirect to the OAuth2 authorize endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_external_jwt#oauth2_authorization_endpoint IdpExternalJwt#oauth2_authorization_endpoint}
  */
  readonly oauth2AuthorizationEndpoint?: string;
  /**
  * The token endpoint for this Identity Provider. This value is not utilized by FusionAuth is only provided to be returned by the Lookup Identity Provider API response. During integration you may then utilize this value to complete the OAuth2 grant workflow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_external_jwt#oauth2_token_endpoint IdpExternalJwt#oauth2_token_endpoint}
  */
  readonly oauth2TokenEndpoint?: string;
  /**
  * The name of the claim that represents the unique identify of the User. This will generally be email or the name of the claim that provides the email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_external_jwt#unique_identity_claim IdpExternalJwt#unique_identity_claim}
  */
  readonly uniqueIdentityClaim: string;
  /**
  * application_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_external_jwt#application_configuration IdpExternalJwt#application_configuration}
  */
  readonly applicationConfiguration?: IdpExternalJwtApplicationConfiguration[] | cdktf.IResolvable;
  /**
  * tenant_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_external_jwt#tenant_configuration IdpExternalJwt#tenant_configuration}
  */
  readonly tenantConfiguration?: IdpExternalJwtTenantConfiguration[] | cdktf.IResolvable;
}
export interface IdpExternalJwtApplicationConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_external_jwt#application_id IdpExternalJwt#application_id}
  */
  readonly applicationId?: string;
  /**
  * Determines if a UserRegistration is created for the User automatically or not. If a user doesn’t exist in FusionAuth and logs in through an identity provider, this boolean controls whether or not FusionAuth creates a registration for the User in the Application they are logging into.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_external_jwt#create_registration IdpExternalJwt#create_registration}
  */
  readonly createRegistration?: boolean | cdktf.IResolvable;
  /**
  * Determines if this identity provider is enabled for the Application specified by the applicationId key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_external_jwt#enabled IdpExternalJwt#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function idpExternalJwtApplicationConfigurationToTerraform(struct?: IdpExternalJwtApplicationConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_id: cdktf.stringToTerraform(struct!.applicationId),
    create_registration: cdktf.booleanToTerraform(struct!.createRegistration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function idpExternalJwtApplicationConfigurationToHclTerraform(struct?: IdpExternalJwtApplicationConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_id: {
      value: cdktf.stringToHclTerraform(struct!.applicationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    create_registration: {
      value: cdktf.booleanToHclTerraform(struct!.createRegistration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdpExternalJwtApplicationConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): IdpExternalJwtApplicationConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationId = this._applicationId;
    }
    if (this._createRegistration !== undefined) {
      hasAnyValues = true;
      internalValueResult.createRegistration = this._createRegistration;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdpExternalJwtApplicationConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationId = undefined;
      this._createRegistration = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationId = value.applicationId;
      this._createRegistration = value.createRegistration;
      this._enabled = value.enabled;
    }
  }

  // application_id - computed: false, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // create_registration - computed: false, optional: true, required: false
  private _createRegistration?: boolean | cdktf.IResolvable; 
  public get createRegistration() {
    return this.getBooleanAttribute('create_registration');
  }
  public set createRegistration(value: boolean | cdktf.IResolvable) {
    this._createRegistration = value;
  }
  public resetCreateRegistration() {
    this._createRegistration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createRegistrationInput() {
    return this._createRegistration;
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
}

export class IdpExternalJwtApplicationConfigurationList extends cdktf.ComplexList {
  public internalValue? : IdpExternalJwtApplicationConfiguration[] | cdktf.IResolvable

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
  public get(index: number): IdpExternalJwtApplicationConfigurationOutputReference {
    return new IdpExternalJwtApplicationConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdpExternalJwtTenantConfiguration {
  /**
  * When enabled, the number of identity provider links a user may create is enforced by maximumLinks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_external_jwt#limit_user_link_count_enabled IdpExternalJwt#limit_user_link_count_enabled}
  */
  readonly limitUserLinkCountEnabled?: boolean | cdktf.IResolvable;
  /**
  * Determines if this provider is enabled. If it is false then it will be disabled globally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_external_jwt#limit_user_link_count_maximum_links IdpExternalJwt#limit_user_link_count_maximum_links}
  */
  readonly limitUserLinkCountMaximumLinks?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_external_jwt#tenant_id IdpExternalJwt#tenant_id}
  */
  readonly tenantId?: string;
}

export function idpExternalJwtTenantConfigurationToTerraform(struct?: IdpExternalJwtTenantConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit_user_link_count_enabled: cdktf.booleanToTerraform(struct!.limitUserLinkCountEnabled),
    limit_user_link_count_maximum_links: cdktf.numberToTerraform(struct!.limitUserLinkCountMaximumLinks),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function idpExternalJwtTenantConfigurationToHclTerraform(struct?: IdpExternalJwtTenantConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit_user_link_count_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.limitUserLinkCountEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    limit_user_link_count_maximum_links: {
      value: cdktf.numberToHclTerraform(struct!.limitUserLinkCountMaximumLinks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdpExternalJwtTenantConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): IdpExternalJwtTenantConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limitUserLinkCountEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitUserLinkCountEnabled = this._limitUserLinkCountEnabled;
    }
    if (this._limitUserLinkCountMaximumLinks !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitUserLinkCountMaximumLinks = this._limitUserLinkCountMaximumLinks;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdpExternalJwtTenantConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limitUserLinkCountEnabled = undefined;
      this._limitUserLinkCountMaximumLinks = undefined;
      this._tenantId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limitUserLinkCountEnabled = value.limitUserLinkCountEnabled;
      this._limitUserLinkCountMaximumLinks = value.limitUserLinkCountMaximumLinks;
      this._tenantId = value.tenantId;
    }
  }

  // limit_user_link_count_enabled - computed: false, optional: true, required: false
  private _limitUserLinkCountEnabled?: boolean | cdktf.IResolvable; 
  public get limitUserLinkCountEnabled() {
    return this.getBooleanAttribute('limit_user_link_count_enabled');
  }
  public set limitUserLinkCountEnabled(value: boolean | cdktf.IResolvable) {
    this._limitUserLinkCountEnabled = value;
  }
  public resetLimitUserLinkCountEnabled() {
    this._limitUserLinkCountEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitUserLinkCountEnabledInput() {
    return this._limitUserLinkCountEnabled;
  }

  // limit_user_link_count_maximum_links - computed: false, optional: true, required: false
  private _limitUserLinkCountMaximumLinks?: number; 
  public get limitUserLinkCountMaximumLinks() {
    return this.getNumberAttribute('limit_user_link_count_maximum_links');
  }
  public set limitUserLinkCountMaximumLinks(value: number) {
    this._limitUserLinkCountMaximumLinks = value;
  }
  public resetLimitUserLinkCountMaximumLinks() {
    this._limitUserLinkCountMaximumLinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitUserLinkCountMaximumLinksInput() {
    return this._limitUserLinkCountMaximumLinks;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}

export class IdpExternalJwtTenantConfigurationList extends cdktf.ComplexList {
  public internalValue? : IdpExternalJwtTenantConfiguration[] | cdktf.IResolvable

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
  public get(index: number): IdpExternalJwtTenantConfigurationOutputReference {
    return new IdpExternalJwtTenantConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_external_jwt fusionauth_idp_external_jwt}
*/
export class IdpExternalJwt extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fusionauth_idp_external_jwt";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdpExternalJwt resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdpExternalJwt to import
  * @param importFromId The id of the existing IdpExternalJwt that should be imported. Refer to the {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_external_jwt#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdpExternalJwt to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fusionauth_idp_external_jwt", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_external_jwt fusionauth_idp_external_jwt} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdpExternalJwtConfig
  */
  public constructor(scope: Construct, id: string, config: IdpExternalJwtConfig) {
    super(scope, id, {
      terraformResourceType: 'fusionauth_idp_external_jwt',
      terraformGeneratorMetadata: {
        providerName: 'fusionauth',
        providerVersion: '0.1.100',
        providerVersionConstraint: '0.1.100'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._claimMap = config.claimMap;
    this._debug = config.debug;
    this._domains = config.domains;
    this._enabled = config.enabled;
    this._headerKeyParameter = config.headerKeyParameter;
    this._id = config.id;
    this._idpId = config.idpId;
    this._lambdaReconcileId = config.lambdaReconcileId;
    this._linkingStrategy = config.linkingStrategy;
    this._name = config.name;
    this._oauth2AuthorizationEndpoint = config.oauth2AuthorizationEndpoint;
    this._oauth2TokenEndpoint = config.oauth2TokenEndpoint;
    this._uniqueIdentityClaim = config.uniqueIdentityClaim;
    this._applicationConfiguration.internalValue = config.applicationConfiguration;
    this._tenantConfiguration.internalValue = config.tenantConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // claim_map - computed: false, optional: true, required: false
  private _claimMap?: { [key: string]: string }; 
  public get claimMap() {
    return this.getStringMapAttribute('claim_map');
  }
  public set claimMap(value: { [key: string]: string }) {
    this._claimMap = value;
  }
  public resetClaimMap() {
    this._claimMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimMapInput() {
    return this._claimMap;
  }

  // debug - computed: false, optional: true, required: false
  private _debug?: boolean | cdktf.IResolvable; 
  public get debug() {
    return this.getBooleanAttribute('debug');
  }
  public set debug(value: boolean | cdktf.IResolvable) {
    this._debug = value;
  }
  public resetDebug() {
    this._debug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug;
  }

  // domains - computed: false, optional: true, required: false
  private _domains?: string[]; 
  public get domains() {
    return cdktf.Fn.tolist(this.getListAttribute('domains'));
  }
  public set domains(value: string[]) {
    this._domains = value;
  }
  public resetDomains() {
    this._domains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
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

  // header_key_parameter - computed: false, optional: false, required: true
  private _headerKeyParameter?: string; 
  public get headerKeyParameter() {
    return this.getStringAttribute('header_key_parameter');
  }
  public set headerKeyParameter(value: string) {
    this._headerKeyParameter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerKeyParameterInput() {
    return this._headerKeyParameter;
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

  // idp_id - computed: false, optional: true, required: false
  private _idpId?: string; 
  public get idpId() {
    return this.getStringAttribute('idp_id');
  }
  public set idpId(value: string) {
    this._idpId = value;
  }
  public resetIdpId() {
    this._idpId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpIdInput() {
    return this._idpId;
  }

  // lambda_reconcile_id - computed: false, optional: true, required: false
  private _lambdaReconcileId?: string; 
  public get lambdaReconcileId() {
    return this.getStringAttribute('lambda_reconcile_id');
  }
  public set lambdaReconcileId(value: string) {
    this._lambdaReconcileId = value;
  }
  public resetLambdaReconcileId() {
    this._lambdaReconcileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaReconcileIdInput() {
    return this._lambdaReconcileId;
  }

  // linking_strategy - computed: true, optional: true, required: false
  private _linkingStrategy?: string; 
  public get linkingStrategy() {
    return this.getStringAttribute('linking_strategy');
  }
  public set linkingStrategy(value: string) {
    this._linkingStrategy = value;
  }
  public resetLinkingStrategy() {
    this._linkingStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkingStrategyInput() {
    return this._linkingStrategy;
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

  // oauth2_authorization_endpoint - computed: false, optional: true, required: false
  private _oauth2AuthorizationEndpoint?: string; 
  public get oauth2AuthorizationEndpoint() {
    return this.getStringAttribute('oauth2_authorization_endpoint');
  }
  public set oauth2AuthorizationEndpoint(value: string) {
    this._oauth2AuthorizationEndpoint = value;
  }
  public resetOauth2AuthorizationEndpoint() {
    this._oauth2AuthorizationEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2AuthorizationEndpointInput() {
    return this._oauth2AuthorizationEndpoint;
  }

  // oauth2_token_endpoint - computed: false, optional: true, required: false
  private _oauth2TokenEndpoint?: string; 
  public get oauth2TokenEndpoint() {
    return this.getStringAttribute('oauth2_token_endpoint');
  }
  public set oauth2TokenEndpoint(value: string) {
    this._oauth2TokenEndpoint = value;
  }
  public resetOauth2TokenEndpoint() {
    this._oauth2TokenEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2TokenEndpointInput() {
    return this._oauth2TokenEndpoint;
  }

  // unique_identity_claim - computed: false, optional: false, required: true
  private _uniqueIdentityClaim?: string; 
  public get uniqueIdentityClaim() {
    return this.getStringAttribute('unique_identity_claim');
  }
  public set uniqueIdentityClaim(value: string) {
    this._uniqueIdentityClaim = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueIdentityClaimInput() {
    return this._uniqueIdentityClaim;
  }

  // application_configuration - computed: false, optional: true, required: false
  private _applicationConfiguration = new IdpExternalJwtApplicationConfigurationList(this, "application_configuration", true);
  public get applicationConfiguration() {
    return this._applicationConfiguration;
  }
  public putApplicationConfiguration(value: IdpExternalJwtApplicationConfiguration[] | cdktf.IResolvable) {
    this._applicationConfiguration.internalValue = value;
  }
  public resetApplicationConfiguration() {
    this._applicationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationConfigurationInput() {
    return this._applicationConfiguration.internalValue;
  }

  // tenant_configuration - computed: false, optional: true, required: false
  private _tenantConfiguration = new IdpExternalJwtTenantConfigurationList(this, "tenant_configuration", true);
  public get tenantConfiguration() {
    return this._tenantConfiguration;
  }
  public putTenantConfiguration(value: IdpExternalJwtTenantConfiguration[] | cdktf.IResolvable) {
    this._tenantConfiguration.internalValue = value;
  }
  public resetTenantConfiguration() {
    this._tenantConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantConfigurationInput() {
    return this._tenantConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      claim_map: cdktf.hashMapper(cdktf.stringToTerraform)(this._claimMap),
      debug: cdktf.booleanToTerraform(this._debug),
      domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domains),
      enabled: cdktf.booleanToTerraform(this._enabled),
      header_key_parameter: cdktf.stringToTerraform(this._headerKeyParameter),
      id: cdktf.stringToTerraform(this._id),
      idp_id: cdktf.stringToTerraform(this._idpId),
      lambda_reconcile_id: cdktf.stringToTerraform(this._lambdaReconcileId),
      linking_strategy: cdktf.stringToTerraform(this._linkingStrategy),
      name: cdktf.stringToTerraform(this._name),
      oauth2_authorization_endpoint: cdktf.stringToTerraform(this._oauth2AuthorizationEndpoint),
      oauth2_token_endpoint: cdktf.stringToTerraform(this._oauth2TokenEndpoint),
      unique_identity_claim: cdktf.stringToTerraform(this._uniqueIdentityClaim),
      application_configuration: cdktf.listMapper(idpExternalJwtApplicationConfigurationToTerraform, true)(this._applicationConfiguration.internalValue),
      tenant_configuration: cdktf.listMapper(idpExternalJwtTenantConfigurationToTerraform, true)(this._tenantConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      claim_map: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._claimMap),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      debug: {
        value: cdktf.booleanToHclTerraform(this._debug),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domains),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      header_key_parameter: {
        value: cdktf.stringToHclTerraform(this._headerKeyParameter),
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
      idp_id: {
        value: cdktf.stringToHclTerraform(this._idpId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lambda_reconcile_id: {
        value: cdktf.stringToHclTerraform(this._lambdaReconcileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      linking_strategy: {
        value: cdktf.stringToHclTerraform(this._linkingStrategy),
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
      oauth2_authorization_endpoint: {
        value: cdktf.stringToHclTerraform(this._oauth2AuthorizationEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth2_token_endpoint: {
        value: cdktf.stringToHclTerraform(this._oauth2TokenEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unique_identity_claim: {
        value: cdktf.stringToHclTerraform(this._uniqueIdentityClaim),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_configuration: {
        value: cdktf.listMapperHcl(idpExternalJwtApplicationConfigurationToHclTerraform, true)(this._applicationConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IdpExternalJwtApplicationConfigurationList",
      },
      tenant_configuration: {
        value: cdktf.listMapperHcl(idpExternalJwtTenantConfigurationToHclTerraform, true)(this._tenantConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IdpExternalJwtTenantConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
