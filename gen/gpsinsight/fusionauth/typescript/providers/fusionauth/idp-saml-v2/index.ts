// https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdpSamlV2Config extends cdktf.TerraformMetaArguments {
  /**
  * The top-level button image (URL) to use on the FusionAuth login page for this Identity Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2#button_image_url IdpSamlV2#button_image_url}
  */
  readonly buttonImageUrl?: string;
  /**
  * The top-level button text to use on the FusionAuth login page for this Identity Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2#button_text IdpSamlV2#button_text}
  */
  readonly buttonText: string;
  /**
  * Determines if debug is enabled for this provider. When enabled, each time this provider is invoked to reconcile a login an Event Log will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2#debug IdpSamlV2#debug}
  */
  readonly debug?: boolean | cdktf.IResolvable;
  /**
  * This is an optional list of domains that this OpenID Connect provider should be used for. This converts the FusionAuth login form to a domain-based login form. This type of form first asks the user for their email. FusionAuth then uses their email to determine if an OpenID Connect identity provider should be used. If an OpenID Connect provider should be used, the browser is redirected to the authorization endpoint of that identity provider. Otherwise, the password field is revealed on the form so that the user can login using FusionAuth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2#domains IdpSamlV2#domains}
  */
  readonly domains?: string[];
  /**
  * The name of the email claim (Attribute in the Assertion element) in the SAML response that FusionAuth uses to uniquely identity the user. If this is not set, the `use_name_for_email` flag must be true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2#email_claim IdpSamlV2#email_claim}
  */
  readonly emailClaim?: string;
  /**
  * Determines if this provider is enabled. If it is false then it will be disabled globally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2#enabled IdpSamlV2#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2#id IdpSamlV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The SAML v2 login page of the identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2#idp_endpoint IdpSamlV2#idp_endpoint}
  */
  readonly idpEndpoint?: string;
  /**
  * The ID to use for the new identity provider. If not specified a secure random UUID will be generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2#idp_id IdpSamlV2#idp_id}
  */
  readonly idpId?: string;
  /**
  * The id of the key stored in Key Master that is used to verify the SAML response sent back to FusionAuth from the identity provider. This key must be a verification only key or certificate (meaning that it only has a public key component).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2#key_id IdpSamlV2#key_id}
  */
  readonly keyId: string;
  /**
  * The id of a SAML reconcile lambda that is applied when the identity provider sends back a successful SAML response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2#lambda_reconcile_id IdpSamlV2#lambda_reconcile_id}
  */
  readonly lambdaReconcileId?: string;
  /**
  * The linking strategy to use when creating the link between the {idp_display_name} Identity Provider and the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2#linking_strategy IdpSamlV2#linking_strategy}
  */
  readonly linkingStrategy?: string;
  /**
  * The name of this SAML v2 identity provider. This is only used for display purposes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2#name IdpSamlV2#name}
  */
  readonly name: string;
  /**
  * When using FusionAuth as a SAML IdP, FusionAuth will now accept urn:oasis:names:tc:SAML:2.0:nameid-format:persistent in addition to urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress. This should allow FusionAuth to work with SAML v2 service providers that only support the persistent NameID format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2#name_id_format IdpSamlV2#name_id_format}
  */
  readonly nameIdFormat?: string;
  /**
  * When true the authentication request will use the HTTP POST binding with the identity provider instead of the default Redirect binding which uses the HTTP GET method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2#post_request IdpSamlV2#post_request}
  */
  readonly postRequest?: boolean | cdktf.IResolvable;
  /**
  * The key pair Id to use to sign the SAML request. Required when `sign_request` is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2#request_signing_key IdpSamlV2#request_signing_key}
  */
  readonly requestSigningKey?: string;
  /**
  * When true authentication requests sent to the identity provider will be signed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2#sign_request IdpSamlV2#sign_request}
  */
  readonly signRequest?: boolean | cdktf.IResolvable;
  /**
  * Whether or not FusionAuth will use the NameID element value as the email address of the user for reconciliation processing. If this is false, then the `email_claim` property must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2#use_name_for_email IdpSamlV2#use_name_for_email}
  */
  readonly useNameForEmail?: boolean | cdktf.IResolvable;
  /**
  * The XML signature canonicalization method used when digesting and signing the SAML request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2#xml_signature_canonicalization_method IdpSamlV2#xml_signature_canonicalization_method}
  */
  readonly xmlSignatureCanonicalizationMethod?: string;
  /**
  * application_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2#application_configuration IdpSamlV2#application_configuration}
  */
  readonly applicationConfiguration?: IdpSamlV2ApplicationConfiguration[] | cdktf.IResolvable;
  /**
  * tenant_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2#tenant_configuration IdpSamlV2#tenant_configuration}
  */
  readonly tenantConfiguration?: IdpSamlV2TenantConfiguration[] | cdktf.IResolvable;
}
export interface IdpSamlV2ApplicationConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2#application_id IdpSamlV2#application_id}
  */
  readonly applicationId?: string;
  /**
  * This is an optional Application specific override for the top level button image URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2#button_image_url IdpSamlV2#button_image_url}
  */
  readonly buttonImageUrl?: string;
  /**
  * This is an optional Application specific override for the top level button text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2#button_text IdpSamlV2#button_text}
  */
  readonly buttonText?: string;
  /**
  * Determines if a UserRegistration is created for the User automatically or not. If a user doesn’t exist in FusionAuth and logs in through an identity provider, this boolean controls whether or not FusionAuth creates a registration for the User in the Application they are logging into.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2#create_registration IdpSamlV2#create_registration}
  */
  readonly createRegistration?: boolean | cdktf.IResolvable;
  /**
  * Determines if this identity provider is enabled for the Application specified by the applicationId key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2#enabled IdpSamlV2#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function idpSamlV2ApplicationConfigurationToTerraform(struct?: IdpSamlV2ApplicationConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_id: cdktf.stringToTerraform(struct!.applicationId),
    button_image_url: cdktf.stringToTerraform(struct!.buttonImageUrl),
    button_text: cdktf.stringToTerraform(struct!.buttonText),
    create_registration: cdktf.booleanToTerraform(struct!.createRegistration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function idpSamlV2ApplicationConfigurationToHclTerraform(struct?: IdpSamlV2ApplicationConfiguration | cdktf.IResolvable): any {
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
    button_image_url: {
      value: cdktf.stringToHclTerraform(struct!.buttonImageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    button_text: {
      value: cdktf.stringToHclTerraform(struct!.buttonText),
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

export class IdpSamlV2ApplicationConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpSamlV2ApplicationConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationId = this._applicationId;
    }
    if (this._buttonImageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.buttonImageUrl = this._buttonImageUrl;
    }
    if (this._buttonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.buttonText = this._buttonText;
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

  public set internalValue(value: IdpSamlV2ApplicationConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationId = undefined;
      this._buttonImageUrl = undefined;
      this._buttonText = undefined;
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
      this._buttonImageUrl = value.buttonImageUrl;
      this._buttonText = value.buttonText;
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

  // button_image_url - computed: false, optional: true, required: false
  private _buttonImageUrl?: string; 
  public get buttonImageUrl() {
    return this.getStringAttribute('button_image_url');
  }
  public set buttonImageUrl(value: string) {
    this._buttonImageUrl = value;
  }
  public resetButtonImageUrl() {
    this._buttonImageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonImageUrlInput() {
    return this._buttonImageUrl;
  }

  // button_text - computed: false, optional: true, required: false
  private _buttonText?: string; 
  public get buttonText() {
    return this.getStringAttribute('button_text');
  }
  public set buttonText(value: string) {
    this._buttonText = value;
  }
  public resetButtonText() {
    this._buttonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonTextInput() {
    return this._buttonText;
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

export class IdpSamlV2ApplicationConfigurationList extends cdktf.ComplexList {
  public internalValue? : IdpSamlV2ApplicationConfiguration[] | cdktf.IResolvable

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
  public get(index: number): IdpSamlV2ApplicationConfigurationOutputReference {
    return new IdpSamlV2ApplicationConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdpSamlV2TenantConfiguration {
  /**
  * When enabled, the number of identity provider links a user may create is enforced by maximumLinks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2#limit_user_link_count_enabled IdpSamlV2#limit_user_link_count_enabled}
  */
  readonly limitUserLinkCountEnabled?: boolean | cdktf.IResolvable;
  /**
  * Determines if this provider is enabled. If it is false then it will be disabled globally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2#limit_user_link_count_maximum_links IdpSamlV2#limit_user_link_count_maximum_links}
  */
  readonly limitUserLinkCountMaximumLinks?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2#tenant_id IdpSamlV2#tenant_id}
  */
  readonly tenantId?: string;
}

export function idpSamlV2TenantConfigurationToTerraform(struct?: IdpSamlV2TenantConfiguration | cdktf.IResolvable): any {
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


export function idpSamlV2TenantConfigurationToHclTerraform(struct?: IdpSamlV2TenantConfiguration | cdktf.IResolvable): any {
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

export class IdpSamlV2TenantConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpSamlV2TenantConfiguration | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdpSamlV2TenantConfiguration | cdktf.IResolvable | undefined) {
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

export class IdpSamlV2TenantConfigurationList extends cdktf.ComplexList {
  public internalValue? : IdpSamlV2TenantConfiguration[] | cdktf.IResolvable

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
  public get(index: number): IdpSamlV2TenantConfigurationOutputReference {
    return new IdpSamlV2TenantConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2 fusionauth_idp_saml_v2}
*/
export class IdpSamlV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fusionauth_idp_saml_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdpSamlV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdpSamlV2 to import
  * @param importFromId The id of the existing IdpSamlV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdpSamlV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fusionauth_idp_saml_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_saml_v2 fusionauth_idp_saml_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdpSamlV2Config
  */
  public constructor(scope: Construct, id: string, config: IdpSamlV2Config) {
    super(scope, id, {
      terraformResourceType: 'fusionauth_idp_saml_v2',
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
    this._buttonImageUrl = config.buttonImageUrl;
    this._buttonText = config.buttonText;
    this._debug = config.debug;
    this._domains = config.domains;
    this._emailClaim = config.emailClaim;
    this._enabled = config.enabled;
    this._id = config.id;
    this._idpEndpoint = config.idpEndpoint;
    this._idpId = config.idpId;
    this._keyId = config.keyId;
    this._lambdaReconcileId = config.lambdaReconcileId;
    this._linkingStrategy = config.linkingStrategy;
    this._name = config.name;
    this._nameIdFormat = config.nameIdFormat;
    this._postRequest = config.postRequest;
    this._requestSigningKey = config.requestSigningKey;
    this._signRequest = config.signRequest;
    this._useNameForEmail = config.useNameForEmail;
    this._xmlSignatureCanonicalizationMethod = config.xmlSignatureCanonicalizationMethod;
    this._applicationConfiguration.internalValue = config.applicationConfiguration;
    this._tenantConfiguration.internalValue = config.tenantConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // button_image_url - computed: false, optional: true, required: false
  private _buttonImageUrl?: string; 
  public get buttonImageUrl() {
    return this.getStringAttribute('button_image_url');
  }
  public set buttonImageUrl(value: string) {
    this._buttonImageUrl = value;
  }
  public resetButtonImageUrl() {
    this._buttonImageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonImageUrlInput() {
    return this._buttonImageUrl;
  }

  // button_text - computed: false, optional: false, required: true
  private _buttonText?: string; 
  public get buttonText() {
    return this.getStringAttribute('button_text');
  }
  public set buttonText(value: string) {
    this._buttonText = value;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonTextInput() {
    return this._buttonText;
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

  // idp_endpoint - computed: false, optional: true, required: false
  private _idpEndpoint?: string; 
  public get idpEndpoint() {
    return this.getStringAttribute('idp_endpoint');
  }
  public set idpEndpoint(value: string) {
    this._idpEndpoint = value;
  }
  public resetIdpEndpoint() {
    this._idpEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpEndpointInput() {
    return this._idpEndpoint;
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

  // name_id_format - computed: true, optional: true, required: false
  private _nameIdFormat?: string; 
  public get nameIdFormat() {
    return this.getStringAttribute('name_id_format');
  }
  public set nameIdFormat(value: string) {
    this._nameIdFormat = value;
  }
  public resetNameIdFormat() {
    this._nameIdFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameIdFormatInput() {
    return this._nameIdFormat;
  }

  // post_request - computed: false, optional: true, required: false
  private _postRequest?: boolean | cdktf.IResolvable; 
  public get postRequest() {
    return this.getBooleanAttribute('post_request');
  }
  public set postRequest(value: boolean | cdktf.IResolvable) {
    this._postRequest = value;
  }
  public resetPostRequest() {
    this._postRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postRequestInput() {
    return this._postRequest;
  }

  // request_signing_key - computed: false, optional: true, required: false
  private _requestSigningKey?: string; 
  public get requestSigningKey() {
    return this.getStringAttribute('request_signing_key');
  }
  public set requestSigningKey(value: string) {
    this._requestSigningKey = value;
  }
  public resetRequestSigningKey() {
    this._requestSigningKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestSigningKeyInput() {
    return this._requestSigningKey;
  }

  // sign_request - computed: false, optional: true, required: false
  private _signRequest?: boolean | cdktf.IResolvable; 
  public get signRequest() {
    return this.getBooleanAttribute('sign_request');
  }
  public set signRequest(value: boolean | cdktf.IResolvable) {
    this._signRequest = value;
  }
  public resetSignRequest() {
    this._signRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signRequestInput() {
    return this._signRequest;
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

  // xml_signature_canonicalization_method - computed: false, optional: true, required: false
  private _xmlSignatureCanonicalizationMethod?: string; 
  public get xmlSignatureCanonicalizationMethod() {
    return this.getStringAttribute('xml_signature_canonicalization_method');
  }
  public set xmlSignatureCanonicalizationMethod(value: string) {
    this._xmlSignatureCanonicalizationMethod = value;
  }
  public resetXmlSignatureCanonicalizationMethod() {
    this._xmlSignatureCanonicalizationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlSignatureCanonicalizationMethodInput() {
    return this._xmlSignatureCanonicalizationMethod;
  }

  // application_configuration - computed: false, optional: true, required: false
  private _applicationConfiguration = new IdpSamlV2ApplicationConfigurationList(this, "application_configuration", true);
  public get applicationConfiguration() {
    return this._applicationConfiguration;
  }
  public putApplicationConfiguration(value: IdpSamlV2ApplicationConfiguration[] | cdktf.IResolvable) {
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
  private _tenantConfiguration = new IdpSamlV2TenantConfigurationList(this, "tenant_configuration", true);
  public get tenantConfiguration() {
    return this._tenantConfiguration;
  }
  public putTenantConfiguration(value: IdpSamlV2TenantConfiguration[] | cdktf.IResolvable) {
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
      button_image_url: cdktf.stringToTerraform(this._buttonImageUrl),
      button_text: cdktf.stringToTerraform(this._buttonText),
      debug: cdktf.booleanToTerraform(this._debug),
      domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domains),
      email_claim: cdktf.stringToTerraform(this._emailClaim),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      idp_endpoint: cdktf.stringToTerraform(this._idpEndpoint),
      idp_id: cdktf.stringToTerraform(this._idpId),
      key_id: cdktf.stringToTerraform(this._keyId),
      lambda_reconcile_id: cdktf.stringToTerraform(this._lambdaReconcileId),
      linking_strategy: cdktf.stringToTerraform(this._linkingStrategy),
      name: cdktf.stringToTerraform(this._name),
      name_id_format: cdktf.stringToTerraform(this._nameIdFormat),
      post_request: cdktf.booleanToTerraform(this._postRequest),
      request_signing_key: cdktf.stringToTerraform(this._requestSigningKey),
      sign_request: cdktf.booleanToTerraform(this._signRequest),
      use_name_for_email: cdktf.booleanToTerraform(this._useNameForEmail),
      xml_signature_canonicalization_method: cdktf.stringToTerraform(this._xmlSignatureCanonicalizationMethod),
      application_configuration: cdktf.listMapper(idpSamlV2ApplicationConfigurationToTerraform, true)(this._applicationConfiguration.internalValue),
      tenant_configuration: cdktf.listMapper(idpSamlV2TenantConfigurationToTerraform, true)(this._tenantConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      button_image_url: {
        value: cdktf.stringToHclTerraform(this._buttonImageUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      button_text: {
        value: cdktf.stringToHclTerraform(this._buttonText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      idp_endpoint: {
        value: cdktf.stringToHclTerraform(this._idpEndpoint),
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
      name_id_format: {
        value: cdktf.stringToHclTerraform(this._nameIdFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      post_request: {
        value: cdktf.booleanToHclTerraform(this._postRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      request_signing_key: {
        value: cdktf.stringToHclTerraform(this._requestSigningKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sign_request: {
        value: cdktf.booleanToHclTerraform(this._signRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_name_for_email: {
        value: cdktf.booleanToHclTerraform(this._useNameForEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      xml_signature_canonicalization_method: {
        value: cdktf.stringToHclTerraform(this._xmlSignatureCanonicalizationMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_configuration: {
        value: cdktf.listMapperHcl(idpSamlV2ApplicationConfigurationToHclTerraform, true)(this._applicationConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IdpSamlV2ApplicationConfigurationList",
      },
      tenant_configuration: {
        value: cdktf.listMapperHcl(idpSamlV2TenantConfigurationToHclTerraform, true)(this._tenantConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IdpSamlV2TenantConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
