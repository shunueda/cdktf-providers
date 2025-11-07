// https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_facebook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdpFacebookConfig extends cdktf.TerraformMetaArguments {
  /**
  * The top-level Facebook appId for your Application. This value is retrieved from the Facebook developer website when you setup your Facebook developer account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_facebook#app_id IdpFacebook#app_id}
  */
  readonly appId: string;
  /**
  * The top-level button text to use on the FusionAuth login page for this Identity Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_facebook#button_text IdpFacebook#button_text}
  */
  readonly buttonText: string;
  /**
  * The top-level client secret to use with the Facebook Identity Provider when retrieving the long-lived token. This value is retrieved from the Facebook developer website when you setup your Facebook developer account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_facebook#client_secret IdpFacebook#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Determines if debug is enabled for this provider. When enabled, an Event Log is created each time this provider is invoked to reconcile a login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_facebook#debug IdpFacebook#debug}
  */
  readonly debug?: boolean | cdktf.IResolvable;
  /**
  * Determines if this provider is enabled. If it is false then it will be disabled globally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_facebook#enabled IdpFacebook#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The top-level fields that you are requesting from Facebook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_facebook#fields IdpFacebook#fields}
  */
  readonly fields?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_facebook#id IdpFacebook#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The unique Id of the lambda to used during the user reconcile process to map custom claims from the external identity provider to the FusionAuth user. The specified Lambda Id must be of type FacebookReconcile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_facebook#lambda_reconcile_id IdpFacebook#lambda_reconcile_id}
  */
  readonly lambdaReconcileId?: string;
  /**
  * The linking strategy to use when creating the link between the Facebook Identity Provider and the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_facebook#linking_strategy IdpFacebook#linking_strategy}
  */
  readonly linkingStrategy?: string;
  /**
  * The login method to use for this Identity Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_facebook#login_method IdpFacebook#login_method}
  */
  readonly loginMethod?: string;
  /**
  * The top-level permissions that your application is asking of the user’s Facebook account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_facebook#permissions IdpFacebook#permissions}
  */
  readonly permissions?: string;
  /**
  * application_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_facebook#application_configuration IdpFacebook#application_configuration}
  */
  readonly applicationConfiguration?: IdpFacebookApplicationConfiguration[] | cdktf.IResolvable;
  /**
  * tenant_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_facebook#tenant_configuration IdpFacebook#tenant_configuration}
  */
  readonly tenantConfiguration?: IdpFacebookTenantConfiguration[] | cdktf.IResolvable;
}
export interface IdpFacebookApplicationConfiguration {
  /**
  * This is an optional Application specific override for the top level app id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_facebook#app_id IdpFacebook#app_id}
  */
  readonly appId?: string;
  /**
  * ID of the FusionAuth Application to apply this configuration to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_facebook#application_id IdpFacebook#application_id}
  */
  readonly applicationId?: string;
  /**
  * This is an optional Application specific override for the top level button text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_facebook#button_text IdpFacebook#button_text}
  */
  readonly buttonText?: string;
  /**
  * This is an optional Application specific override for the top level client secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_facebook#client_secret IdpFacebook#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Determines if a UserRegistration is created for the User automatically or not. If a user doesn’t exist in FusionAuth and logs in through an identity provider, this boolean controls whether or not FusionAuth creates a registration for the User in the Application they are logging into.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_facebook#create_registration IdpFacebook#create_registration}
  */
  readonly createRegistration?: boolean | cdktf.IResolvable;
  /**
  * Determines if this identity provider is enabled for the Application specified by the application id key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_facebook#enabled IdpFacebook#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * This is an optional Application specific override for the top level fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_facebook#fields IdpFacebook#fields}
  */
  readonly fields?: string;
  /**
  * This is an optional Application specific override for the top level permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_facebook#permissions IdpFacebook#permissions}
  */
  readonly permissions?: string;
}

export function idpFacebookApplicationConfigurationToTerraform(struct?: IdpFacebookApplicationConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_id: cdktf.stringToTerraform(struct!.appId),
    application_id: cdktf.stringToTerraform(struct!.applicationId),
    button_text: cdktf.stringToTerraform(struct!.buttonText),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    create_registration: cdktf.booleanToTerraform(struct!.createRegistration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    fields: cdktf.stringToTerraform(struct!.fields),
    permissions: cdktf.stringToTerraform(struct!.permissions),
  }
}


export function idpFacebookApplicationConfigurationToHclTerraform(struct?: IdpFacebookApplicationConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_id: {
      value: cdktf.stringToHclTerraform(struct!.appId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_id: {
      value: cdktf.stringToHclTerraform(struct!.applicationId),
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
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
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
    fields: {
      value: cdktf.stringToHclTerraform(struct!.fields),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permissions: {
      value: cdktf.stringToHclTerraform(struct!.permissions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdpFacebookApplicationConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpFacebookApplicationConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appId !== undefined) {
      hasAnyValues = true;
      internalValueResult.appId = this._appId;
    }
    if (this._applicationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationId = this._applicationId;
    }
    if (this._buttonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.buttonText = this._buttonText;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._createRegistration !== undefined) {
      hasAnyValues = true;
      internalValueResult.createRegistration = this._createRegistration;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._fields !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdpFacebookApplicationConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appId = undefined;
      this._applicationId = undefined;
      this._buttonText = undefined;
      this._clientSecret = undefined;
      this._createRegistration = undefined;
      this._enabled = undefined;
      this._fields = undefined;
      this._permissions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appId = value.appId;
      this._applicationId = value.applicationId;
      this._buttonText = value.buttonText;
      this._clientSecret = value.clientSecret;
      this._createRegistration = value.createRegistration;
      this._enabled = value.enabled;
      this._fields = value.fields;
      this._permissions = value.permissions;
    }
  }

  // app_id - computed: false, optional: true, required: false
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  public resetAppId() {
    this._appId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
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

  // fields - computed: false, optional: true, required: false
  private _fields?: string; 
  public get fields() {
    return this.getStringAttribute('fields');
  }
  public set fields(value: string) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions?: string; 
  public get permissions() {
    return this.getStringAttribute('permissions');
  }
  public set permissions(value: string) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }
}

export class IdpFacebookApplicationConfigurationList extends cdktf.ComplexList {
  public internalValue? : IdpFacebookApplicationConfiguration[] | cdktf.IResolvable

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
  public get(index: number): IdpFacebookApplicationConfigurationOutputReference {
    return new IdpFacebookApplicationConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdpFacebookTenantConfiguration {
  /**
  * When enabled, the number of identity provider links a user may create is enforced by maximumLinks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_facebook#limit_user_link_count_enabled IdpFacebook#limit_user_link_count_enabled}
  */
  readonly limitUserLinkCountEnabled?: boolean | cdktf.IResolvable;
  /**
  * Determines if this provider is enabled. If it is false then it will be disabled globally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_facebook#limit_user_link_count_maximum_links IdpFacebook#limit_user_link_count_maximum_links}
  */
  readonly limitUserLinkCountMaximumLinks?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_facebook#tenant_id IdpFacebook#tenant_id}
  */
  readonly tenantId?: string;
}

export function idpFacebookTenantConfigurationToTerraform(struct?: IdpFacebookTenantConfiguration | cdktf.IResolvable): any {
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


export function idpFacebookTenantConfigurationToHclTerraform(struct?: IdpFacebookTenantConfiguration | cdktf.IResolvable): any {
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

export class IdpFacebookTenantConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpFacebookTenantConfiguration | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdpFacebookTenantConfiguration | cdktf.IResolvable | undefined) {
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

export class IdpFacebookTenantConfigurationList extends cdktf.ComplexList {
  public internalValue? : IdpFacebookTenantConfiguration[] | cdktf.IResolvable

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
  public get(index: number): IdpFacebookTenantConfigurationOutputReference {
    return new IdpFacebookTenantConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_facebook fusionauth_idp_facebook}
*/
export class IdpFacebook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fusionauth_idp_facebook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdpFacebook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdpFacebook to import
  * @param importFromId The id of the existing IdpFacebook that should be imported. Refer to the {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_facebook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdpFacebook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fusionauth_idp_facebook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_facebook fusionauth_idp_facebook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdpFacebookConfig
  */
  public constructor(scope: Construct, id: string, config: IdpFacebookConfig) {
    super(scope, id, {
      terraformResourceType: 'fusionauth_idp_facebook',
      terraformGeneratorMetadata: {
        providerName: 'fusionauth',
        providerVersion: '0.1.100'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appId = config.appId;
    this._buttonText = config.buttonText;
    this._clientSecret = config.clientSecret;
    this._debug = config.debug;
    this._enabled = config.enabled;
    this._fields = config.fields;
    this._id = config.id;
    this._lambdaReconcileId = config.lambdaReconcileId;
    this._linkingStrategy = config.linkingStrategy;
    this._loginMethod = config.loginMethod;
    this._permissions = config.permissions;
    this._applicationConfiguration.internalValue = config.applicationConfiguration;
    this._tenantConfiguration.internalValue = config.tenantConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_id - computed: false, optional: false, required: true
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
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

  // fields - computed: false, optional: true, required: false
  private _fields?: string; 
  public get fields() {
    return this.getStringAttribute('fields');
  }
  public set fields(value: string) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
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

  // lambda_reconcile_id - computed: true, optional: true, required: false
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

  // login_method - computed: false, optional: true, required: false
  private _loginMethod?: string; 
  public get loginMethod() {
    return this.getStringAttribute('login_method');
  }
  public set loginMethod(value: string) {
    this._loginMethod = value;
  }
  public resetLoginMethod() {
    this._loginMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginMethodInput() {
    return this._loginMethod;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions?: string; 
  public get permissions() {
    return this.getStringAttribute('permissions');
  }
  public set permissions(value: string) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // application_configuration - computed: false, optional: true, required: false
  private _applicationConfiguration = new IdpFacebookApplicationConfigurationList(this, "application_configuration", true);
  public get applicationConfiguration() {
    return this._applicationConfiguration;
  }
  public putApplicationConfiguration(value: IdpFacebookApplicationConfiguration[] | cdktf.IResolvable) {
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
  private _tenantConfiguration = new IdpFacebookTenantConfigurationList(this, "tenant_configuration", true);
  public get tenantConfiguration() {
    return this._tenantConfiguration;
  }
  public putTenantConfiguration(value: IdpFacebookTenantConfiguration[] | cdktf.IResolvable) {
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
      app_id: cdktf.stringToTerraform(this._appId),
      button_text: cdktf.stringToTerraform(this._buttonText),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      debug: cdktf.booleanToTerraform(this._debug),
      enabled: cdktf.booleanToTerraform(this._enabled),
      fields: cdktf.stringToTerraform(this._fields),
      id: cdktf.stringToTerraform(this._id),
      lambda_reconcile_id: cdktf.stringToTerraform(this._lambdaReconcileId),
      linking_strategy: cdktf.stringToTerraform(this._linkingStrategy),
      login_method: cdktf.stringToTerraform(this._loginMethod),
      permissions: cdktf.stringToTerraform(this._permissions),
      application_configuration: cdktf.listMapper(idpFacebookApplicationConfigurationToTerraform, true)(this._applicationConfiguration.internalValue),
      tenant_configuration: cdktf.listMapper(idpFacebookTenantConfigurationToTerraform, true)(this._tenantConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_id: {
        value: cdktf.stringToHclTerraform(this._appId),
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
      client_secret: {
        value: cdktf.stringToHclTerraform(this._clientSecret),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fields: {
        value: cdktf.stringToHclTerraform(this._fields),
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
      login_method: {
        value: cdktf.stringToHclTerraform(this._loginMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permissions: {
        value: cdktf.stringToHclTerraform(this._permissions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_configuration: {
        value: cdktf.listMapperHcl(idpFacebookApplicationConfigurationToHclTerraform, true)(this._applicationConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IdpFacebookApplicationConfigurationList",
      },
      tenant_configuration: {
        value: cdktf.listMapperHcl(idpFacebookTenantConfigurationToHclTerraform, true)(this._tenantConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IdpFacebookTenantConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
