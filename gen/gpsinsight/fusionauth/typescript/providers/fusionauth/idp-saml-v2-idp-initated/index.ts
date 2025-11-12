// https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2_idp_initated
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdpSamlV2IdpInitatedConfig extends cdktf.TerraformMetaArguments {
  /**
  * Determines if debug is enabled for this provider. When enabled, each time this provider is invoked to reconcile a login an Event Log will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2_idp_initated#debug IdpSamlV2IdpInitated#debug}
  */
  readonly debug?: boolean | cdktf.IResolvable;
  /**
  * The name of the email claim (Attribute in the Assertion element) in the SAML response that FusionAuth uses to uniquely identity the user. If this is not set, the `use_name_for_email` flag must be true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2_idp_initated#email_claim IdpSamlV2IdpInitated#email_claim}
  */
  readonly emailClaim?: string;
  /**
  * Determines if this provider is enabled. If it is false then it will be disabled globally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2_idp_initated#enabled IdpSamlV2IdpInitated#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2_idp_initated#id IdpSamlV2IdpInitated#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID to use for the new identity provider. If not specified a secure random UUID will be generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2_idp_initated#idp_id IdpSamlV2IdpInitated#idp_id}
  */
  readonly idpId?: string;
  /**
  * The EntityId (unique identifier) of the SAML v2 identity provider. This value should be provided to you. Prior to 1.27.1 this value was required to be a URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2_idp_initated#issuer IdpSamlV2IdpInitated#issuer}
  */
  readonly issuer: string;
  /**
  * The id of the key stored in Key Master that is used to verify the SAML response sent back to FusionAuth from the identity provider. This key must be a verification only key or certificate (meaning that it only has a public key component).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2_idp_initated#key_id IdpSamlV2IdpInitated#key_id}
  */
  readonly keyId: string;
  /**
  * The id of a SAML reconcile lambda that is applied when the identity provider sends back a successful SAML response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2_idp_initated#lambda_reconcile_id IdpSamlV2IdpInitated#lambda_reconcile_id}
  */
  readonly lambdaReconcileId?: string;
  /**
  * The linking strategy to use when creating the link between the {idp_display_name} Identity Provider and the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2_idp_initated#linking_strategy IdpSamlV2IdpInitated#linking_strategy}
  */
  readonly linkingStrategy?: string;
  /**
  * The name of this SAML v2 identity provider. This is only used for display purposes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2_idp_initated#name IdpSamlV2IdpInitated#name}
  */
  readonly name: string;
  /**
  * Whether or not FusionAuth will use the NameID element value as the email address of the user for reconciliation processing. If this is false, then the `email_claim` property must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2_idp_initated#use_name_for_email IdpSamlV2IdpInitated#use_name_for_email}
  */
  readonly useNameForEmail?: boolean | cdktf.IResolvable;
  /**
  * application_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2_idp_initated#application_configuration IdpSamlV2IdpInitated#application_configuration}
  */
  readonly applicationConfiguration?: IdpSamlV2IdpInitatedApplicationConfiguration[] | cdktf.IResolvable;
  /**
  * tenant_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2_idp_initated#tenant_configuration IdpSamlV2IdpInitated#tenant_configuration}
  */
  readonly tenantConfiguration?: IdpSamlV2IdpInitatedTenantConfiguration[] | cdktf.IResolvable;
}
export interface IdpSamlV2IdpInitatedApplicationConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2_idp_initated#application_id IdpSamlV2IdpInitated#application_id}
  */
  readonly applicationId?: string;
  /**
  * Determines if a UserRegistration is created for the User automatically or not. If a user doesn’t exist in FusionAuth and logs in through an identity provider, this boolean controls whether or not FusionAuth creates a registration for the User in the Application they are logging into.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2_idp_initated#create_registration IdpSamlV2IdpInitated#create_registration}
  */
  readonly createRegistration?: boolean | cdktf.IResolvable;
  /**
  * Determines if this identity provider is enabled for the Application specified by the applicationId key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2_idp_initated#enabled IdpSamlV2IdpInitated#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function idpSamlV2IdpInitatedApplicationConfigurationToTerraform(struct?: IdpSamlV2IdpInitatedApplicationConfiguration | cdktf.IResolvable): any {
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


export function idpSamlV2IdpInitatedApplicationConfigurationToHclTerraform(struct?: IdpSamlV2IdpInitatedApplicationConfiguration | cdktf.IResolvable): any {
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

export class IdpSamlV2IdpInitatedApplicationConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpSamlV2IdpInitatedApplicationConfiguration | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdpSamlV2IdpInitatedApplicationConfiguration | cdktf.IResolvable | undefined) {
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

export class IdpSamlV2IdpInitatedApplicationConfigurationList extends cdktf.ComplexList {
  public internalValue? : IdpSamlV2IdpInitatedApplicationConfiguration[] | cdktf.IResolvable

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
  public get(index: number): IdpSamlV2IdpInitatedApplicationConfigurationOutputReference {
    return new IdpSamlV2IdpInitatedApplicationConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdpSamlV2IdpInitatedTenantConfiguration {
  /**
  * When enabled, the number of identity provider links a user may create is enforced by maximumLinks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2_idp_initated#limit_user_link_count_enabled IdpSamlV2IdpInitated#limit_user_link_count_enabled}
  */
  readonly limitUserLinkCountEnabled?: boolean | cdktf.IResolvable;
  /**
  * Determines if this provider is enabled. If it is false then it will be disabled globally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2_idp_initated#limit_user_link_count_maximum_links IdpSamlV2IdpInitated#limit_user_link_count_maximum_links}
  */
  readonly limitUserLinkCountMaximumLinks?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2_idp_initated#tenant_id IdpSamlV2IdpInitated#tenant_id}
  */
  readonly tenantId?: string;
}

export function idpSamlV2IdpInitatedTenantConfigurationToTerraform(struct?: IdpSamlV2IdpInitatedTenantConfiguration | cdktf.IResolvable): any {
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


export function idpSamlV2IdpInitatedTenantConfigurationToHclTerraform(struct?: IdpSamlV2IdpInitatedTenantConfiguration | cdktf.IResolvable): any {
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

export class IdpSamlV2IdpInitatedTenantConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpSamlV2IdpInitatedTenantConfiguration | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdpSamlV2IdpInitatedTenantConfiguration | cdktf.IResolvable | undefined) {
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

export class IdpSamlV2IdpInitatedTenantConfigurationList extends cdktf.ComplexList {
  public internalValue? : IdpSamlV2IdpInitatedTenantConfiguration[] | cdktf.IResolvable

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
  public get(index: number): IdpSamlV2IdpInitatedTenantConfigurationOutputReference {
    return new IdpSamlV2IdpInitatedTenantConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2_idp_initated fusionauth_idp_saml_v2_idp_initated}
*/
export class IdpSamlV2IdpInitated extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fusionauth_idp_saml_v2_idp_initated";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdpSamlV2IdpInitated resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdpSamlV2IdpInitated to import
  * @param importFromId The id of the existing IdpSamlV2IdpInitated that should be imported. Refer to the {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2_idp_initated#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdpSamlV2IdpInitated to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fusionauth_idp_saml_v2_idp_initated", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2_idp_initated fusionauth_idp_saml_v2_idp_initated} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdpSamlV2IdpInitatedConfig
  */
  public constructor(scope: Construct, id: string, config: IdpSamlV2IdpInitatedConfig) {
    super(scope, id, {
      terraformResourceType: 'fusionauth_idp_saml_v2_idp_initated',
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
    this._debug = config.debug;
    this._emailClaim = config.emailClaim;
    this._enabled = config.enabled;
    this._id = config.id;
    this._idpId = config.idpId;
    this._issuer = config.issuer;
    this._keyId = config.keyId;
    this._lambdaReconcileId = config.lambdaReconcileId;
    this._linkingStrategy = config.linkingStrategy;
    this._name = config.name;
    this._useNameForEmail = config.useNameForEmail;
    this._applicationConfiguration.internalValue = config.applicationConfiguration;
    this._tenantConfiguration.internalValue = config.tenantConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // email_claim - computed: false, optional: true, required: false
  private _emailClaim?: string; 
  public get emailClaim() {
    return this.getStringAttribute('email_claim');
  }
  public set emailClaim(value: string) {
    this._emailClaim = value;
  }
  public resetEmailClaim() {
    this._emailClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailClaimInput() {
    return this._emailClaim;
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

  // key_id - computed: false, optional: false, required: true
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
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

  // use_name_for_email - computed: false, optional: true, required: false
  private _useNameForEmail?: boolean | cdktf.IResolvable; 
  public get useNameForEmail() {
    return this.getBooleanAttribute('use_name_for_email');
  }
  public set useNameForEmail(value: boolean | cdktf.IResolvable) {
    this._useNameForEmail = value;
  }
  public resetUseNameForEmail() {
    this._useNameForEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useNameForEmailInput() {
    return this._useNameForEmail;
  }

  // application_configuration - computed: false, optional: true, required: false
  private _applicationConfiguration = new IdpSamlV2IdpInitatedApplicationConfigurationList(this, "application_configuration", true);
  public get applicationConfiguration() {
    return this._applicationConfiguration;
  }
  public putApplicationConfiguration(value: IdpSamlV2IdpInitatedApplicationConfiguration[] | cdktf.IResolvable) {
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
  private _tenantConfiguration = new IdpSamlV2IdpInitatedTenantConfigurationList(this, "tenant_configuration", true);
  public get tenantConfiguration() {
    return this._tenantConfiguration;
  }
  public putTenantConfiguration(value: IdpSamlV2IdpInitatedTenantConfiguration[] | cdktf.IResolvable) {
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
      debug: cdktf.booleanToTerraform(this._debug),
      email_claim: cdktf.stringToTerraform(this._emailClaim),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      idp_id: cdktf.stringToTerraform(this._idpId),
      issuer: cdktf.stringToTerraform(this._issuer),
      key_id: cdktf.stringToTerraform(this._keyId),
      lambda_reconcile_id: cdktf.stringToTerraform(this._lambdaReconcileId),
      linking_strategy: cdktf.stringToTerraform(this._linkingStrategy),
      name: cdktf.stringToTerraform(this._name),
      use_name_for_email: cdktf.booleanToTerraform(this._useNameForEmail),
      application_configuration: cdktf.listMapper(idpSamlV2IdpInitatedApplicationConfigurationToTerraform, true)(this._applicationConfiguration.internalValue),
      tenant_configuration: cdktf.listMapper(idpSamlV2IdpInitatedTenantConfigurationToTerraform, true)(this._tenantConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      debug: {
        value: cdktf.booleanToHclTerraform(this._debug),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      email_claim: {
        value: cdktf.stringToHclTerraform(this._emailClaim),
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
      issuer: {
        value: cdktf.stringToHclTerraform(this._issuer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_id: {
        value: cdktf.stringToHclTerraform(this._keyId),
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
      use_name_for_email: {
        value: cdktf.booleanToHclTerraform(this._useNameForEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      application_configuration: {
        value: cdktf.listMapperHcl(idpSamlV2IdpInitatedApplicationConfigurationToHclTerraform, true)(this._applicationConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IdpSamlV2IdpInitatedApplicationConfigurationList",
      },
      tenant_configuration: {
        value: cdktf.listMapperHcl(idpSamlV2IdpInitatedTenantConfigurationToHclTerraform, true)(this._tenantConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IdpSamlV2IdpInitatedTenantConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
