// https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppSamlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom error page URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#accessibility_error_redirect_url AppSaml#accessibility_error_redirect_url}
  */
  readonly accessibilityErrorRedirectUrl?: string;
  /**
  * Custom login page URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#accessibility_login_redirect_url AppSaml#accessibility_login_redirect_url}
  */
  readonly accessibilityLoginRedirectUrl?: string;
  /**
  * Enable self service. Default is `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#accessibility_self_service AppSaml#accessibility_self_service}
  */
  readonly accessibilitySelfService?: boolean | cdktf.IResolvable;
  /**
  * An array of ACS endpoints. You can configure a maximum of 100 endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#acs_endpoints AppSaml#acs_endpoints}
  */
  readonly acsEndpoints?: string[];
  /**
  * Application notes for admins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#admin_note AppSaml#admin_note}
  */
  readonly adminNote?: string;
  /**
  * Displays specific appLinks for the app. The value for each application link should be boolean.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#app_links_json AppSaml#app_links_json}
  */
  readonly appLinksJson?: string;
  /**
  * Application settings in JSON format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#app_settings_json AppSaml#app_settings_json}
  */
  readonly appSettingsJson?: string;
  /**
  * Determines whether the SAML assertion is digitally signed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#assertion_signed AppSaml#assertion_signed}
  */
  readonly assertionSigned?: boolean | cdktf.IResolvable;
  /**
  * Audience Restriction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#audience AppSaml#audience}
  */
  readonly audience?: string;
  /**
  * The ID of the associated `app_signon_policy`. If this property is removed from the application the `default` sign-on-policy will be associated with this application.y
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#authentication_policy AppSaml#authentication_policy}
  */
  readonly authenticationPolicy?: string;
  /**
  * Identifies the SAML authentication context class for the assertion’s authentication statement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#authn_context_class_ref AppSaml#authn_context_class_ref}
  */
  readonly authnContextClassRef?: string;
  /**
  * Display auto submit toolbar. Default is: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#auto_submit_toolbar AppSaml#auto_submit_toolbar}
  */
  readonly autoSubmitToolbar?: boolean | cdktf.IResolvable;
  /**
  * Identifies a specific application resource in an IDP initiated SSO scenario.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#default_relay_state AppSaml#default_relay_state}
  */
  readonly defaultRelayState?: string;
  /**
  * Identifies the location where the SAML response is intended to be sent inside of the SAML assertion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#destination AppSaml#destination}
  */
  readonly destination?: string;
  /**
  * Determines the digest algorithm used to digitally sign the SAML assertion and response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#digest_algorithm AppSaml#digest_algorithm}
  */
  readonly digestAlgorithm?: string;
  /**
  * Application notes for end users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#enduser_note AppSaml#enduser_note}
  */
  readonly enduserNote?: string;
  /**
  * Do not display application icon on mobile app
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#hide_ios AppSaml#hide_ios}
  */
  readonly hideIos?: boolean | cdktf.IResolvable;
  /**
  * Do not display application icon to users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#hide_web AppSaml#hide_web}
  */
  readonly hideWeb?: boolean | cdktf.IResolvable;
  /**
  * Prompt user to re-authenticate if SP asks for it. Default is: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#honor_force_authn AppSaml#honor_force_authn}
  */
  readonly honorForceAuthn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#id AppSaml#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * SAML issuer ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#idp_issuer AppSaml#idp_issuer}
  */
  readonly idpIssuer?: string;
  /**
  * *Early Access Property*. Enable Federation Broker Mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#implicit_assignment AppSaml#implicit_assignment}
  */
  readonly implicitAssignment?: boolean | cdktf.IResolvable;
  /**
  * Saml Inline Hook setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#inline_hook_id AppSaml#inline_hook_id}
  */
  readonly inlineHookId?: string;
  /**
  * Certificate name. This modulates the rotation of keys. New name == new key. Required to be set with `key_years_valid`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#key_name AppSaml#key_name}
  */
  readonly keyName?: string;
  /**
  * Number of years the certificate is valid (2 - 10 years).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#key_years_valid AppSaml#key_years_valid}
  */
  readonly keyYearsValid?: number;
  /**
  * The Application's display name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#label AppSaml#label}
  */
  readonly label: string;
  /**
  * Local file path to the logo. The file must be in PNG, JPG, or GIF format, and less than 1 MB in size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#logo AppSaml#logo}
  */
  readonly logo?: string;
  /**
  * Name of application from the Okta Integration Network. For instance 'slack'. If not included a custom app will be created.  If not provided the following arguments are required:
  * 'sso_url'
  * 'recipient'
  * 'destination'
  * 'audience'
  * 'subject_name_id_template'
  * 'subject_name_id_format'
  * 'signature_algorithm'
  * 'digest_algorithm'
  * 'authn_context_class_ref'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#preconfigured_app AppSaml#preconfigured_app}
  */
  readonly preconfiguredApp?: string;
  /**
  * The location where the app may present the SAML assertion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#recipient AppSaml#recipient}
  */
  readonly recipient?: string;
  /**
  * Denotes whether the request is compressed or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#request_compressed AppSaml#request_compressed}
  */
  readonly requestCompressed?: boolean | cdktf.IResolvable;
  /**
  * Determines whether the SAML auth response message is digitally signed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#response_signed AppSaml#response_signed}
  */
  readonly responseSigned?: boolean | cdktf.IResolvable;
  /**
  * SAML Signed Request enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#saml_signed_request_enabled AppSaml#saml_signed_request_enabled}
  */
  readonly samlSignedRequestEnabled?: boolean | cdktf.IResolvable;
  /**
  * SAML version for the app's sign-on mode. Valid values are: `2.0` or `1.1`. Default is `2.0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#saml_version AppSaml#saml_version}
  */
  readonly samlVersion?: string;
  /**
  * Signature algorithm used to digitally sign the assertion and response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#signature_algorithm AppSaml#signature_algorithm}
  */
  readonly signatureAlgorithm?: string;
  /**
  * x509 encoded certificate that the Service Provider uses to sign Single Logout requests. Note: should be provided without `-----BEGIN CERTIFICATE-----` and `-----END CERTIFICATE-----`, see [official documentation](https://developer.okta.com/docs/reference/api/apps/#service-provider-certificate).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#single_logout_certificate AppSaml#single_logout_certificate}
  */
  readonly singleLogoutCertificate?: string;
  /**
  * The issuer of the Service Provider that generates the Single Logout request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#single_logout_issuer AppSaml#single_logout_issuer}
  */
  readonly singleLogoutIssuer?: string;
  /**
  * The location where the logout response is sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#single_logout_url AppSaml#single_logout_url}
  */
  readonly singleLogoutUrl?: string;
  /**
  * SAML SP issuer ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#sp_issuer AppSaml#sp_issuer}
  */
  readonly spIssuer?: string;
  /**
  * Single Sign On URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#sso_url AppSaml#sso_url}
  */
  readonly ssoUrl?: string;
  /**
  * Status of application. By default, it is `ACTIVE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#status AppSaml#status}
  */
  readonly status?: string;
  /**
  * Identifies the SAML processing rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#subject_name_id_format AppSaml#subject_name_id_format}
  */
  readonly subjectNameIdFormat?: string;
  /**
  * Template for app user's username when a user is assigned to the app
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#subject_name_id_template AppSaml#subject_name_id_template}
  */
  readonly subjectNameIdTemplate?: string;
  /**
  * Username template. Default: `${source.login}`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#user_name_template AppSaml#user_name_template}
  */
  readonly userNameTemplate?: string;
  /**
  * Push username on update. Valid values: `PUSH` and `DONT_PUSH`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#user_name_template_push_status AppSaml#user_name_template_push_status}
  */
  readonly userNameTemplatePushStatus?: string;
  /**
  * Username template suffix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#user_name_template_suffix AppSaml#user_name_template_suffix}
  */
  readonly userNameTemplateSuffix?: string;
  /**
  * Username template type. Default: `BUILT_IN`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#user_name_template_type AppSaml#user_name_template_type}
  */
  readonly userNameTemplateType?: string;
  /**
  * acs_endpoints_indices block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#acs_endpoints_indices AppSaml#acs_endpoints_indices}
  */
  readonly acsEndpointsIndices?: AppSamlAcsEndpointsIndices[] | cdktf.IResolvable;
  /**
  * attribute_statements block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#attribute_statements AppSaml#attribute_statements}
  */
  readonly attributeStatements?: AppSamlAttributeStatements[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#timeouts AppSaml#timeouts}
  */
  readonly timeouts?: AppSamlTimeouts;
}
export interface AppSamlKeys {
}

export function appSamlKeysToTerraform(struct?: AppSamlKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function appSamlKeysToHclTerraform(struct?: AppSamlKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AppSamlKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppSamlKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppSamlKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // e - computed: true, optional: false, required: false
  public get e() {
    return this.getStringAttribute('e');
  }

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }

  // kid - computed: true, optional: false, required: false
  public get kid() {
    return this.getStringAttribute('kid');
  }

  // kty - computed: true, optional: false, required: false
  public get kty() {
    return this.getStringAttribute('kty');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // n - computed: true, optional: false, required: false
  public get n() {
    return this.getStringAttribute('n');
  }

  // use - computed: true, optional: false, required: false
  public get use() {
    return this.getStringAttribute('use');
  }

  // x5c - computed: true, optional: false, required: false
  public get x5C() {
    return this.getListAttribute('x5c');
  }

  // x5t_s256 - computed: true, optional: false, required: false
  public get x5TS256() {
    return this.getStringAttribute('x5t_s256');
  }
}

export class AppSamlKeysList extends cdktf.ComplexList {

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
  public get(index: number): AppSamlKeysOutputReference {
    return new AppSamlKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppSamlAcsEndpointsIndices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#index AppSaml#index}
  */
  readonly index: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#url AppSaml#url}
  */
  readonly url: string;
}

export function appSamlAcsEndpointsIndicesToTerraform(struct?: AppSamlAcsEndpointsIndices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.numberToTerraform(struct!.index),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function appSamlAcsEndpointsIndicesToHclTerraform(struct?: AppSamlAcsEndpointsIndices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppSamlAcsEndpointsIndicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppSamlAcsEndpointsIndices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppSamlAcsEndpointsIndices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._index = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._index = value.index;
      this._url = value.url;
    }
  }

  // index - computed: false, optional: false, required: true
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class AppSamlAcsEndpointsIndicesList extends cdktf.ComplexList {
  public internalValue? : AppSamlAcsEndpointsIndices[] | cdktf.IResolvable

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
  public get(index: number): AppSamlAcsEndpointsIndicesOutputReference {
    return new AppSamlAcsEndpointsIndicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppSamlAttributeStatements {
  /**
  * Type of group attribute filter. Valid values are: `STARTS_WITH`, `EQUALS`, `CONTAINS`, or `REGEX`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#filter_type AppSaml#filter_type}
  */
  readonly filterType?: string;
  /**
  * Filter value to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#filter_value AppSaml#filter_value}
  */
  readonly filterValue?: string;
  /**
  * The reference name of the attribute statement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#name AppSaml#name}
  */
  readonly name: string;
  /**
  * The attribute namespace. It can be set to `urn:oasis:names:tc:SAML:2.0:attrname-format:unspecified`, `urn:oasis:names:tc:SAML:2.0:attrname-format:uri`, or `urn:oasis:names:tc:SAML:2.0:attrname-format:basic`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#namespace AppSaml#namespace}
  */
  readonly namespace?: string;
  /**
  * The type of attribute statements object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#type AppSaml#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#values AppSaml#values}
  */
  readonly values?: string[];
}

export function appSamlAttributeStatementsToTerraform(struct?: AppSamlAttributeStatements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_type: cdktf.stringToTerraform(struct!.filterType),
    filter_value: cdktf.stringToTerraform(struct!.filterValue),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    type: cdktf.stringToTerraform(struct!.type),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function appSamlAttributeStatementsToHclTerraform(struct?: AppSamlAttributeStatements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_type: {
      value: cdktf.stringToHclTerraform(struct!.filterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_value: {
      value: cdktf.stringToHclTerraform(struct!.filterValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppSamlAttributeStatementsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppSamlAttributeStatements | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterType = this._filterType;
    }
    if (this._filterValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterValue = this._filterValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppSamlAttributeStatements | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterType = undefined;
      this._filterValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._type = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterType = value.filterType;
      this._filterValue = value.filterValue;
      this._name = value.name;
      this._namespace = value.namespace;
      this._type = value.type;
      this._values = value.values;
    }
  }

  // filter_type - computed: false, optional: true, required: false
  private _filterType?: string; 
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  public resetFilterType() {
    this._filterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
  }

  // filter_value - computed: false, optional: true, required: false
  private _filterValue?: string; 
  public get filterValue() {
    return this.getStringAttribute('filter_value');
  }
  public set filterValue(value: string) {
    this._filterValue = value;
  }
  public resetFilterValue() {
    this._filterValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterValueInput() {
    return this._filterValue;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class AppSamlAttributeStatementsList extends cdktf.ComplexList {
  public internalValue? : AppSamlAttributeStatements[] | cdktf.IResolvable

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
  public get(index: number): AppSamlAttributeStatementsOutputReference {
    return new AppSamlAttributeStatementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppSamlTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#create AppSaml#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#read AppSaml#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#update AppSaml#update}
  */
  readonly update?: string;
}

export function appSamlTimeoutsToTerraform(struct?: AppSamlTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function appSamlTimeoutsToHclTerraform(struct?: AppSamlTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppSamlTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppSamlTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppSamlTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml okta_app_saml}
*/
export class AppSaml extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_app_saml";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppSaml resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppSaml to import
  * @param importFromId The id of the existing AppSaml that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppSaml to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_app_saml", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/app_saml okta_app_saml} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppSamlConfig
  */
  public constructor(scope: Construct, id: string, config: AppSamlConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_app_saml',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.5.0',
        providerVersionConstraint: '6.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessibilityErrorRedirectUrl = config.accessibilityErrorRedirectUrl;
    this._accessibilityLoginRedirectUrl = config.accessibilityLoginRedirectUrl;
    this._accessibilitySelfService = config.accessibilitySelfService;
    this._acsEndpoints = config.acsEndpoints;
    this._adminNote = config.adminNote;
    this._appLinksJson = config.appLinksJson;
    this._appSettingsJson = config.appSettingsJson;
    this._assertionSigned = config.assertionSigned;
    this._audience = config.audience;
    this._authenticationPolicy = config.authenticationPolicy;
    this._authnContextClassRef = config.authnContextClassRef;
    this._autoSubmitToolbar = config.autoSubmitToolbar;
    this._defaultRelayState = config.defaultRelayState;
    this._destination = config.destination;
    this._digestAlgorithm = config.digestAlgorithm;
    this._enduserNote = config.enduserNote;
    this._hideIos = config.hideIos;
    this._hideWeb = config.hideWeb;
    this._honorForceAuthn = config.honorForceAuthn;
    this._id = config.id;
    this._idpIssuer = config.idpIssuer;
    this._implicitAssignment = config.implicitAssignment;
    this._inlineHookId = config.inlineHookId;
    this._keyName = config.keyName;
    this._keyYearsValid = config.keyYearsValid;
    this._label = config.label;
    this._logo = config.logo;
    this._preconfiguredApp = config.preconfiguredApp;
    this._recipient = config.recipient;
    this._requestCompressed = config.requestCompressed;
    this._responseSigned = config.responseSigned;
    this._samlSignedRequestEnabled = config.samlSignedRequestEnabled;
    this._samlVersion = config.samlVersion;
    this._signatureAlgorithm = config.signatureAlgorithm;
    this._singleLogoutCertificate = config.singleLogoutCertificate;
    this._singleLogoutIssuer = config.singleLogoutIssuer;
    this._singleLogoutUrl = config.singleLogoutUrl;
    this._spIssuer = config.spIssuer;
    this._ssoUrl = config.ssoUrl;
    this._status = config.status;
    this._subjectNameIdFormat = config.subjectNameIdFormat;
    this._subjectNameIdTemplate = config.subjectNameIdTemplate;
    this._userNameTemplate = config.userNameTemplate;
    this._userNameTemplatePushStatus = config.userNameTemplatePushStatus;
    this._userNameTemplateSuffix = config.userNameTemplateSuffix;
    this._userNameTemplateType = config.userNameTemplateType;
    this._acsEndpointsIndices.internalValue = config.acsEndpointsIndices;
    this._attributeStatements.internalValue = config.attributeStatements;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accessibility_error_redirect_url - computed: false, optional: true, required: false
  private _accessibilityErrorRedirectUrl?: string; 
  public get accessibilityErrorRedirectUrl() {
    return this.getStringAttribute('accessibility_error_redirect_url');
  }
  public set accessibilityErrorRedirectUrl(value: string) {
    this._accessibilityErrorRedirectUrl = value;
  }
  public resetAccessibilityErrorRedirectUrl() {
    this._accessibilityErrorRedirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessibilityErrorRedirectUrlInput() {
    return this._accessibilityErrorRedirectUrl;
  }

  // accessibility_login_redirect_url - computed: false, optional: true, required: false
  private _accessibilityLoginRedirectUrl?: string; 
  public get accessibilityLoginRedirectUrl() {
    return this.getStringAttribute('accessibility_login_redirect_url');
  }
  public set accessibilityLoginRedirectUrl(value: string) {
    this._accessibilityLoginRedirectUrl = value;
  }
  public resetAccessibilityLoginRedirectUrl() {
    this._accessibilityLoginRedirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessibilityLoginRedirectUrlInput() {
    return this._accessibilityLoginRedirectUrl;
  }

  // accessibility_self_service - computed: false, optional: true, required: false
  private _accessibilitySelfService?: boolean | cdktf.IResolvable; 
  public get accessibilitySelfService() {
    return this.getBooleanAttribute('accessibility_self_service');
  }
  public set accessibilitySelfService(value: boolean | cdktf.IResolvable) {
    this._accessibilitySelfService = value;
  }
  public resetAccessibilitySelfService() {
    this._accessibilitySelfService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessibilitySelfServiceInput() {
    return this._accessibilitySelfService;
  }

  // acs_endpoints - computed: false, optional: true, required: false
  private _acsEndpoints?: string[]; 
  public get acsEndpoints() {
    return this.getListAttribute('acs_endpoints');
  }
  public set acsEndpoints(value: string[]) {
    this._acsEndpoints = value;
  }
  public resetAcsEndpoints() {
    this._acsEndpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acsEndpointsInput() {
    return this._acsEndpoints;
  }

  // admin_note - computed: false, optional: true, required: false
  private _adminNote?: string; 
  public get adminNote() {
    return this.getStringAttribute('admin_note');
  }
  public set adminNote(value: string) {
    this._adminNote = value;
  }
  public resetAdminNote() {
    this._adminNote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminNoteInput() {
    return this._adminNote;
  }

  // app_links_json - computed: false, optional: true, required: false
  private _appLinksJson?: string; 
  public get appLinksJson() {
    return this.getStringAttribute('app_links_json');
  }
  public set appLinksJson(value: string) {
    this._appLinksJson = value;
  }
  public resetAppLinksJson() {
    this._appLinksJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appLinksJsonInput() {
    return this._appLinksJson;
  }

  // app_settings_json - computed: false, optional: true, required: false
  private _appSettingsJson?: string; 
  public get appSettingsJson() {
    return this.getStringAttribute('app_settings_json');
  }
  public set appSettingsJson(value: string) {
    this._appSettingsJson = value;
  }
  public resetAppSettingsJson() {
    this._appSettingsJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appSettingsJsonInput() {
    return this._appSettingsJson;
  }

  // assertion_signed - computed: false, optional: true, required: false
  private _assertionSigned?: boolean | cdktf.IResolvable; 
  public get assertionSigned() {
    return this.getBooleanAttribute('assertion_signed');
  }
  public set assertionSigned(value: boolean | cdktf.IResolvable) {
    this._assertionSigned = value;
  }
  public resetAssertionSigned() {
    this._assertionSigned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assertionSignedInput() {
    return this._assertionSigned;
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // authentication_policy - computed: true, optional: true, required: false
  private _authenticationPolicy?: string; 
  public get authenticationPolicy() {
    return this.getStringAttribute('authentication_policy');
  }
  public set authenticationPolicy(value: string) {
    this._authenticationPolicy = value;
  }
  public resetAuthenticationPolicy() {
    this._authenticationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationPolicyInput() {
    return this._authenticationPolicy;
  }

  // authn_context_class_ref - computed: false, optional: true, required: false
  private _authnContextClassRef?: string; 
  public get authnContextClassRef() {
    return this.getStringAttribute('authn_context_class_ref');
  }
  public set authnContextClassRef(value: string) {
    this._authnContextClassRef = value;
  }
  public resetAuthnContextClassRef() {
    this._authnContextClassRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authnContextClassRefInput() {
    return this._authnContextClassRef;
  }

  // auto_submit_toolbar - computed: false, optional: true, required: false
  private _autoSubmitToolbar?: boolean | cdktf.IResolvable; 
  public get autoSubmitToolbar() {
    return this.getBooleanAttribute('auto_submit_toolbar');
  }
  public set autoSubmitToolbar(value: boolean | cdktf.IResolvable) {
    this._autoSubmitToolbar = value;
  }
  public resetAutoSubmitToolbar() {
    this._autoSubmitToolbar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSubmitToolbarInput() {
    return this._autoSubmitToolbar;
  }

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getStringAttribute('certificate');
  }

  // default_relay_state - computed: false, optional: true, required: false
  private _defaultRelayState?: string; 
  public get defaultRelayState() {
    return this.getStringAttribute('default_relay_state');
  }
  public set defaultRelayState(value: string) {
    this._defaultRelayState = value;
  }
  public resetDefaultRelayState() {
    this._defaultRelayState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRelayStateInput() {
    return this._defaultRelayState;
  }

  // destination - computed: false, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // digest_algorithm - computed: false, optional: true, required: false
  private _digestAlgorithm?: string; 
  public get digestAlgorithm() {
    return this.getStringAttribute('digest_algorithm');
  }
  public set digestAlgorithm(value: string) {
    this._digestAlgorithm = value;
  }
  public resetDigestAlgorithm() {
    this._digestAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digestAlgorithmInput() {
    return this._digestAlgorithm;
  }

  // embed_url - computed: true, optional: false, required: false
  public get embedUrl() {
    return this.getStringAttribute('embed_url');
  }

  // enduser_note - computed: false, optional: true, required: false
  private _enduserNote?: string; 
  public get enduserNote() {
    return this.getStringAttribute('enduser_note');
  }
  public set enduserNote(value: string) {
    this._enduserNote = value;
  }
  public resetEnduserNote() {
    this._enduserNote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enduserNoteInput() {
    return this._enduserNote;
  }

  // entity_key - computed: true, optional: false, required: false
  public get entityKey() {
    return this.getStringAttribute('entity_key');
  }

  // entity_url - computed: true, optional: false, required: false
  public get entityUrl() {
    return this.getStringAttribute('entity_url');
  }

  // features - computed: true, optional: false, required: false
  public get features() {
    return cdktf.Fn.tolist(this.getListAttribute('features'));
  }

  // hide_ios - computed: false, optional: true, required: false
  private _hideIos?: boolean | cdktf.IResolvable; 
  public get hideIos() {
    return this.getBooleanAttribute('hide_ios');
  }
  public set hideIos(value: boolean | cdktf.IResolvable) {
    this._hideIos = value;
  }
  public resetHideIos() {
    this._hideIos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideIosInput() {
    return this._hideIos;
  }

  // hide_web - computed: false, optional: true, required: false
  private _hideWeb?: boolean | cdktf.IResolvable; 
  public get hideWeb() {
    return this.getBooleanAttribute('hide_web');
  }
  public set hideWeb(value: boolean | cdktf.IResolvable) {
    this._hideWeb = value;
  }
  public resetHideWeb() {
    this._hideWeb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideWebInput() {
    return this._hideWeb;
  }

  // honor_force_authn - computed: false, optional: true, required: false
  private _honorForceAuthn?: boolean | cdktf.IResolvable; 
  public get honorForceAuthn() {
    return this.getBooleanAttribute('honor_force_authn');
  }
  public set honorForceAuthn(value: boolean | cdktf.IResolvable) {
    this._honorForceAuthn = value;
  }
  public resetHonorForceAuthn() {
    this._honorForceAuthn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get honorForceAuthnInput() {
    return this._honorForceAuthn;
  }

  // http_post_binding - computed: true, optional: false, required: false
  public get httpPostBinding() {
    return this.getStringAttribute('http_post_binding');
  }

  // http_redirect_binding - computed: true, optional: false, required: false
  public get httpRedirectBinding() {
    return this.getStringAttribute('http_redirect_binding');
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

  // idp_issuer - computed: false, optional: true, required: false
  private _idpIssuer?: string; 
  public get idpIssuer() {
    return this.getStringAttribute('idp_issuer');
  }
  public set idpIssuer(value: string) {
    this._idpIssuer = value;
  }
  public resetIdpIssuer() {
    this._idpIssuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpIssuerInput() {
    return this._idpIssuer;
  }

  // implicit_assignment - computed: false, optional: true, required: false
  private _implicitAssignment?: boolean | cdktf.IResolvable; 
  public get implicitAssignment() {
    return this.getBooleanAttribute('implicit_assignment');
  }
  public set implicitAssignment(value: boolean | cdktf.IResolvable) {
    this._implicitAssignment = value;
  }
  public resetImplicitAssignment() {
    this._implicitAssignment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get implicitAssignmentInput() {
    return this._implicitAssignment;
  }

  // inline_hook_id - computed: false, optional: true, required: false
  private _inlineHookId?: string; 
  public get inlineHookId() {
    return this.getStringAttribute('inline_hook_id');
  }
  public set inlineHookId(value: string) {
    this._inlineHookId = value;
  }
  public resetInlineHookId() {
    this._inlineHookId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineHookIdInput() {
    return this._inlineHookId;
  }

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getStringAttribute('key_id');
  }

  // key_name - computed: false, optional: true, required: false
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  public resetKeyName() {
    this._keyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // key_years_valid - computed: false, optional: true, required: false
  private _keyYearsValid?: number; 
  public get keyYearsValid() {
    return this.getNumberAttribute('key_years_valid');
  }
  public set keyYearsValid(value: number) {
    this._keyYearsValid = value;
  }
  public resetKeyYearsValid() {
    this._keyYearsValid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyYearsValidInput() {
    return this._keyYearsValid;
  }

  // keys - computed: true, optional: false, required: false
  private _keys = new AppSamlKeysList(this, "keys", false);
  public get keys() {
    return this._keys;
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // logo - computed: false, optional: true, required: false
  private _logo?: string; 
  public get logo() {
    return this.getStringAttribute('logo');
  }
  public set logo(value: string) {
    this._logo = value;
  }
  public resetLogo() {
    this._logo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoInput() {
    return this._logo;
  }

  // logo_url - computed: true, optional: false, required: false
  public get logoUrl() {
    return this.getStringAttribute('logo_url');
  }

  // metadata - computed: true, optional: false, required: false
  public get metadata() {
    return this.getStringAttribute('metadata');
  }

  // metadata_url - computed: true, optional: false, required: false
  public get metadataUrl() {
    return this.getStringAttribute('metadata_url');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // preconfigured_app - computed: false, optional: true, required: false
  private _preconfiguredApp?: string; 
  public get preconfiguredApp() {
    return this.getStringAttribute('preconfigured_app');
  }
  public set preconfiguredApp(value: string) {
    this._preconfiguredApp = value;
  }
  public resetPreconfiguredApp() {
    this._preconfiguredApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preconfiguredAppInput() {
    return this._preconfiguredApp;
  }

  // recipient - computed: false, optional: true, required: false
  private _recipient?: string; 
  public get recipient() {
    return this.getStringAttribute('recipient');
  }
  public set recipient(value: string) {
    this._recipient = value;
  }
  public resetRecipient() {
    this._recipient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientInput() {
    return this._recipient;
  }

  // request_compressed - computed: false, optional: true, required: false
  private _requestCompressed?: boolean | cdktf.IResolvable; 
  public get requestCompressed() {
    return this.getBooleanAttribute('request_compressed');
  }
  public set requestCompressed(value: boolean | cdktf.IResolvable) {
    this._requestCompressed = value;
  }
  public resetRequestCompressed() {
    this._requestCompressed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestCompressedInput() {
    return this._requestCompressed;
  }

  // response_signed - computed: false, optional: true, required: false
  private _responseSigned?: boolean | cdktf.IResolvable; 
  public get responseSigned() {
    return this.getBooleanAttribute('response_signed');
  }
  public set responseSigned(value: boolean | cdktf.IResolvable) {
    this._responseSigned = value;
  }
  public resetResponseSigned() {
    this._responseSigned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseSignedInput() {
    return this._responseSigned;
  }

  // saml_signed_request_enabled - computed: false, optional: true, required: false
  private _samlSignedRequestEnabled?: boolean | cdktf.IResolvable; 
  public get samlSignedRequestEnabled() {
    return this.getBooleanAttribute('saml_signed_request_enabled');
  }
  public set samlSignedRequestEnabled(value: boolean | cdktf.IResolvable) {
    this._samlSignedRequestEnabled = value;
  }
  public resetSamlSignedRequestEnabled() {
    this._samlSignedRequestEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlSignedRequestEnabledInput() {
    return this._samlSignedRequestEnabled;
  }

  // saml_version - computed: false, optional: true, required: false
  private _samlVersion?: string; 
  public get samlVersion() {
    return this.getStringAttribute('saml_version');
  }
  public set samlVersion(value: string) {
    this._samlVersion = value;
  }
  public resetSamlVersion() {
    this._samlVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlVersionInput() {
    return this._samlVersion;
  }

  // sign_on_mode - computed: true, optional: false, required: false
  public get signOnMode() {
    return this.getStringAttribute('sign_on_mode');
  }

  // signature_algorithm - computed: false, optional: true, required: false
  private _signatureAlgorithm?: string; 
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }
  public set signatureAlgorithm(value: string) {
    this._signatureAlgorithm = value;
  }
  public resetSignatureAlgorithm() {
    this._signatureAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureAlgorithmInput() {
    return this._signatureAlgorithm;
  }

  // single_logout_certificate - computed: false, optional: true, required: false
  private _singleLogoutCertificate?: string; 
  public get singleLogoutCertificate() {
    return this.getStringAttribute('single_logout_certificate');
  }
  public set singleLogoutCertificate(value: string) {
    this._singleLogoutCertificate = value;
  }
  public resetSingleLogoutCertificate() {
    this._singleLogoutCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleLogoutCertificateInput() {
    return this._singleLogoutCertificate;
  }

  // single_logout_issuer - computed: false, optional: true, required: false
  private _singleLogoutIssuer?: string; 
  public get singleLogoutIssuer() {
    return this.getStringAttribute('single_logout_issuer');
  }
  public set singleLogoutIssuer(value: string) {
    this._singleLogoutIssuer = value;
  }
  public resetSingleLogoutIssuer() {
    this._singleLogoutIssuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleLogoutIssuerInput() {
    return this._singleLogoutIssuer;
  }

  // single_logout_url - computed: false, optional: true, required: false
  private _singleLogoutUrl?: string; 
  public get singleLogoutUrl() {
    return this.getStringAttribute('single_logout_url');
  }
  public set singleLogoutUrl(value: string) {
    this._singleLogoutUrl = value;
  }
  public resetSingleLogoutUrl() {
    this._singleLogoutUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleLogoutUrlInput() {
    return this._singleLogoutUrl;
  }

  // sp_issuer - computed: false, optional: true, required: false
  private _spIssuer?: string; 
  public get spIssuer() {
    return this.getStringAttribute('sp_issuer');
  }
  public set spIssuer(value: string) {
    this._spIssuer = value;
  }
  public resetSpIssuer() {
    this._spIssuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spIssuerInput() {
    return this._spIssuer;
  }

  // sso_url - computed: false, optional: true, required: false
  private _ssoUrl?: string; 
  public get ssoUrl() {
    return this.getStringAttribute('sso_url');
  }
  public set ssoUrl(value: string) {
    this._ssoUrl = value;
  }
  public resetSsoUrl() {
    this._ssoUrl = undefined;
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

  // subject_name_id_format - computed: false, optional: true, required: false
  private _subjectNameIdFormat?: string; 
  public get subjectNameIdFormat() {
    return this.getStringAttribute('subject_name_id_format');
  }
  public set subjectNameIdFormat(value: string) {
    this._subjectNameIdFormat = value;
  }
  public resetSubjectNameIdFormat() {
    this._subjectNameIdFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectNameIdFormatInput() {
    return this._subjectNameIdFormat;
  }

  // subject_name_id_template - computed: false, optional: true, required: false
  private _subjectNameIdTemplate?: string; 
  public get subjectNameIdTemplate() {
    return this.getStringAttribute('subject_name_id_template');
  }
  public set subjectNameIdTemplate(value: string) {
    this._subjectNameIdTemplate = value;
  }
  public resetSubjectNameIdTemplate() {
    this._subjectNameIdTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectNameIdTemplateInput() {
    return this._subjectNameIdTemplate;
  }

  // user_name_template - computed: false, optional: true, required: false
  private _userNameTemplate?: string; 
  public get userNameTemplate() {
    return this.getStringAttribute('user_name_template');
  }
  public set userNameTemplate(value: string) {
    this._userNameTemplate = value;
  }
  public resetUserNameTemplate() {
    this._userNameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameTemplateInput() {
    return this._userNameTemplate;
  }

  // user_name_template_push_status - computed: false, optional: true, required: false
  private _userNameTemplatePushStatus?: string; 
  public get userNameTemplatePushStatus() {
    return this.getStringAttribute('user_name_template_push_status');
  }
  public set userNameTemplatePushStatus(value: string) {
    this._userNameTemplatePushStatus = value;
  }
  public resetUserNameTemplatePushStatus() {
    this._userNameTemplatePushStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameTemplatePushStatusInput() {
    return this._userNameTemplatePushStatus;
  }

  // user_name_template_suffix - computed: false, optional: true, required: false
  private _userNameTemplateSuffix?: string; 
  public get userNameTemplateSuffix() {
    return this.getStringAttribute('user_name_template_suffix');
  }
  public set userNameTemplateSuffix(value: string) {
    this._userNameTemplateSuffix = value;
  }
  public resetUserNameTemplateSuffix() {
    this._userNameTemplateSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameTemplateSuffixInput() {
    return this._userNameTemplateSuffix;
  }

  // user_name_template_type - computed: false, optional: true, required: false
  private _userNameTemplateType?: string; 
  public get userNameTemplateType() {
    return this.getStringAttribute('user_name_template_type');
  }
  public set userNameTemplateType(value: string) {
    this._userNameTemplateType = value;
  }
  public resetUserNameTemplateType() {
    this._userNameTemplateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameTemplateTypeInput() {
    return this._userNameTemplateType;
  }

  // acs_endpoints_indices - computed: false, optional: true, required: false
  private _acsEndpointsIndices = new AppSamlAcsEndpointsIndicesList(this, "acs_endpoints_indices", true);
  public get acsEndpointsIndices() {
    return this._acsEndpointsIndices;
  }
  public putAcsEndpointsIndices(value: AppSamlAcsEndpointsIndices[] | cdktf.IResolvable) {
    this._acsEndpointsIndices.internalValue = value;
  }
  public resetAcsEndpointsIndices() {
    this._acsEndpointsIndices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acsEndpointsIndicesInput() {
    return this._acsEndpointsIndices.internalValue;
  }

  // attribute_statements - computed: false, optional: true, required: false
  private _attributeStatements = new AppSamlAttributeStatementsList(this, "attribute_statements", false);
  public get attributeStatements() {
    return this._attributeStatements;
  }
  public putAttributeStatements(value: AppSamlAttributeStatements[] | cdktf.IResolvable) {
    this._attributeStatements.internalValue = value;
  }
  public resetAttributeStatements() {
    this._attributeStatements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeStatementsInput() {
    return this._attributeStatements.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AppSamlTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AppSamlTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accessibility_error_redirect_url: cdktf.stringToTerraform(this._accessibilityErrorRedirectUrl),
      accessibility_login_redirect_url: cdktf.stringToTerraform(this._accessibilityLoginRedirectUrl),
      accessibility_self_service: cdktf.booleanToTerraform(this._accessibilitySelfService),
      acs_endpoints: cdktf.listMapper(cdktf.stringToTerraform, false)(this._acsEndpoints),
      admin_note: cdktf.stringToTerraform(this._adminNote),
      app_links_json: cdktf.stringToTerraform(this._appLinksJson),
      app_settings_json: cdktf.stringToTerraform(this._appSettingsJson),
      assertion_signed: cdktf.booleanToTerraform(this._assertionSigned),
      audience: cdktf.stringToTerraform(this._audience),
      authentication_policy: cdktf.stringToTerraform(this._authenticationPolicy),
      authn_context_class_ref: cdktf.stringToTerraform(this._authnContextClassRef),
      auto_submit_toolbar: cdktf.booleanToTerraform(this._autoSubmitToolbar),
      default_relay_state: cdktf.stringToTerraform(this._defaultRelayState),
      destination: cdktf.stringToTerraform(this._destination),
      digest_algorithm: cdktf.stringToTerraform(this._digestAlgorithm),
      enduser_note: cdktf.stringToTerraform(this._enduserNote),
      hide_ios: cdktf.booleanToTerraform(this._hideIos),
      hide_web: cdktf.booleanToTerraform(this._hideWeb),
      honor_force_authn: cdktf.booleanToTerraform(this._honorForceAuthn),
      id: cdktf.stringToTerraform(this._id),
      idp_issuer: cdktf.stringToTerraform(this._idpIssuer),
      implicit_assignment: cdktf.booleanToTerraform(this._implicitAssignment),
      inline_hook_id: cdktf.stringToTerraform(this._inlineHookId),
      key_name: cdktf.stringToTerraform(this._keyName),
      key_years_valid: cdktf.numberToTerraform(this._keyYearsValid),
      label: cdktf.stringToTerraform(this._label),
      logo: cdktf.stringToTerraform(this._logo),
      preconfigured_app: cdktf.stringToTerraform(this._preconfiguredApp),
      recipient: cdktf.stringToTerraform(this._recipient),
      request_compressed: cdktf.booleanToTerraform(this._requestCompressed),
      response_signed: cdktf.booleanToTerraform(this._responseSigned),
      saml_signed_request_enabled: cdktf.booleanToTerraform(this._samlSignedRequestEnabled),
      saml_version: cdktf.stringToTerraform(this._samlVersion),
      signature_algorithm: cdktf.stringToTerraform(this._signatureAlgorithm),
      single_logout_certificate: cdktf.stringToTerraform(this._singleLogoutCertificate),
      single_logout_issuer: cdktf.stringToTerraform(this._singleLogoutIssuer),
      single_logout_url: cdktf.stringToTerraform(this._singleLogoutUrl),
      sp_issuer: cdktf.stringToTerraform(this._spIssuer),
      sso_url: cdktf.stringToTerraform(this._ssoUrl),
      status: cdktf.stringToTerraform(this._status),
      subject_name_id_format: cdktf.stringToTerraform(this._subjectNameIdFormat),
      subject_name_id_template: cdktf.stringToTerraform(this._subjectNameIdTemplate),
      user_name_template: cdktf.stringToTerraform(this._userNameTemplate),
      user_name_template_push_status: cdktf.stringToTerraform(this._userNameTemplatePushStatus),
      user_name_template_suffix: cdktf.stringToTerraform(this._userNameTemplateSuffix),
      user_name_template_type: cdktf.stringToTerraform(this._userNameTemplateType),
      acs_endpoints_indices: cdktf.listMapper(appSamlAcsEndpointsIndicesToTerraform, true)(this._acsEndpointsIndices.internalValue),
      attribute_statements: cdktf.listMapper(appSamlAttributeStatementsToTerraform, true)(this._attributeStatements.internalValue),
      timeouts: appSamlTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accessibility_error_redirect_url: {
        value: cdktf.stringToHclTerraform(this._accessibilityErrorRedirectUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      accessibility_login_redirect_url: {
        value: cdktf.stringToHclTerraform(this._accessibilityLoginRedirectUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      accessibility_self_service: {
        value: cdktf.booleanToHclTerraform(this._accessibilitySelfService),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      acs_endpoints: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._acsEndpoints),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      admin_note: {
        value: cdktf.stringToHclTerraform(this._adminNote),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_links_json: {
        value: cdktf.stringToHclTerraform(this._appLinksJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_settings_json: {
        value: cdktf.stringToHclTerraform(this._appSettingsJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assertion_signed: {
        value: cdktf.booleanToHclTerraform(this._assertionSigned),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      audience: {
        value: cdktf.stringToHclTerraform(this._audience),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_policy: {
        value: cdktf.stringToHclTerraform(this._authenticationPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authn_context_class_ref: {
        value: cdktf.stringToHclTerraform(this._authnContextClassRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_submit_toolbar: {
        value: cdktf.booleanToHclTerraform(this._autoSubmitToolbar),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_relay_state: {
        value: cdktf.stringToHclTerraform(this._defaultRelayState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination: {
        value: cdktf.stringToHclTerraform(this._destination),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      digest_algorithm: {
        value: cdktf.stringToHclTerraform(this._digestAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enduser_note: {
        value: cdktf.stringToHclTerraform(this._enduserNote),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hide_ios: {
        value: cdktf.booleanToHclTerraform(this._hideIos),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hide_web: {
        value: cdktf.booleanToHclTerraform(this._hideWeb),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      honor_force_authn: {
        value: cdktf.booleanToHclTerraform(this._honorForceAuthn),
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
      idp_issuer: {
        value: cdktf.stringToHclTerraform(this._idpIssuer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      implicit_assignment: {
        value: cdktf.booleanToHclTerraform(this._implicitAssignment),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      inline_hook_id: {
        value: cdktf.stringToHclTerraform(this._inlineHookId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_name: {
        value: cdktf.stringToHclTerraform(this._keyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_years_valid: {
        value: cdktf.numberToHclTerraform(this._keyYearsValid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      label: {
        value: cdktf.stringToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logo: {
        value: cdktf.stringToHclTerraform(this._logo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preconfigured_app: {
        value: cdktf.stringToHclTerraform(this._preconfiguredApp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recipient: {
        value: cdktf.stringToHclTerraform(this._recipient),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_compressed: {
        value: cdktf.booleanToHclTerraform(this._requestCompressed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      response_signed: {
        value: cdktf.booleanToHclTerraform(this._responseSigned),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      saml_signed_request_enabled: {
        value: cdktf.booleanToHclTerraform(this._samlSignedRequestEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      saml_version: {
        value: cdktf.stringToHclTerraform(this._samlVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signature_algorithm: {
        value: cdktf.stringToHclTerraform(this._signatureAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      single_logout_certificate: {
        value: cdktf.stringToHclTerraform(this._singleLogoutCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      single_logout_issuer: {
        value: cdktf.stringToHclTerraform(this._singleLogoutIssuer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      single_logout_url: {
        value: cdktf.stringToHclTerraform(this._singleLogoutUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sp_issuer: {
        value: cdktf.stringToHclTerraform(this._spIssuer),
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
      subject_name_id_format: {
        value: cdktf.stringToHclTerraform(this._subjectNameIdFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subject_name_id_template: {
        value: cdktf.stringToHclTerraform(this._subjectNameIdTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_name_template: {
        value: cdktf.stringToHclTerraform(this._userNameTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_name_template_push_status: {
        value: cdktf.stringToHclTerraform(this._userNameTemplatePushStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_name_template_suffix: {
        value: cdktf.stringToHclTerraform(this._userNameTemplateSuffix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_name_template_type: {
        value: cdktf.stringToHclTerraform(this._userNameTemplateType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acs_endpoints_indices: {
        value: cdktf.listMapperHcl(appSamlAcsEndpointsIndicesToHclTerraform, true)(this._acsEndpointsIndices.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AppSamlAcsEndpointsIndicesList",
      },
      attribute_statements: {
        value: cdktf.listMapperHcl(appSamlAttributeStatementsToHclTerraform, true)(this._attributeStatements.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppSamlAttributeStatementsList",
      },
      timeouts: {
        value: appSamlTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppSamlTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
