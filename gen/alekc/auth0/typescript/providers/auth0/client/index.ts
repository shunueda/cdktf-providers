// https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClientConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#allowed_clients Client#allowed_clients}
  */
  readonly allowedClients?: string[];
  /**
  * URLs that Auth0 may redirect to after logout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#allowed_logout_urls Client#allowed_logout_urls}
  */
  readonly allowedLogoutUrls?: string[];
  /**
  * URLs that represent valid origins for cross-origin resource sharing. By default, all your callback URLs will be allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#allowed_origins Client#allowed_origins}
  */
  readonly allowedOrigins?: string[];
  /**
  * Type of application the client represents. Options include `native`, `spa`, `regular_web`, `non_interactive`, `rms`, `box`, `cloudbees`, `concur`, `dropbox`, `mscrm`, `echosign`, `egnyte`, `newrelic`, `office365`, `salesforce`, `sentry`, `sharepoint`, `slack`, `springcm`, `zendesk`, `zoom`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#app_type Client#app_type}
  */
  readonly appType?: string;
  /**
  * RLs that Auth0 may call back to after a user authenticates for the client. Make sure to specify the protocol (https://) otherwise the callback may fail in some cases. With the exception of custom URI schemes for native clients, all callbacks should use protocol https://
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#callbacks Client#callbacks}
  */
  readonly callbacks?: string[];
  /**
  * Metadata associated with the client, in the form of an object with string values (max 255 chars). Maximum of 10 metadata properties allowed. Field names (max 255 chars) are alphanumeric and may only include the following special characters: :,-+=_*?"/\()<>@ [Tab] [Space]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#client_metadata Client#client_metadata}
  */
  readonly clientMetadata?: { [key: string]: string };
  /**
  * We recommend leaving the `client_secret` parameter unspecified to allow the generation of a safe secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#client_secret_rotation_trigger Client#client_secret_rotation_trigger}
  */
  readonly clientSecretRotationTrigger?: { [key: string]: string };
  /**
  * Indicates whether or not the client can be used to make cross-origin authentication requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#cross_origin_auth Client#cross_origin_auth}
  */
  readonly crossOriginAuth?: boolean | cdktf.IResolvable;
  /**
  * URL for the location on your site where the cross-origin verification takes place for the cross-origin auth flow. Used when performing auth in your own domain instead of through the Auth0-hosted login page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#cross_origin_loc Client#cross_origin_loc}
  */
  readonly crossOriginLoc?: string;
  /**
  * Content of the custom login page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#custom_login_page Client#custom_login_page}
  */
  readonly customLoginPage?: string;
  /**
  * Indicates whether or not a custom login page is to be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#custom_login_page_on Client#custom_login_page_on}
  */
  readonly customLoginPageOn?: boolean | cdktf.IResolvable;
  /**
  * Description of the purpose of the client (Max length = 140 characters)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#description Client#description}
  */
  readonly description?: string;
  /**
  * Encryption used for WsFed responses with this client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#encryption_key Client#encryption_key}
  */
  readonly encryptionKey?: { [key: string]: string };
  /**
  * Form template for WS-Federation protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#form_template Client#form_template}
  */
  readonly formTemplate?: string;
  /**
  * Types of grants that this client is authorized to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#grant_types Client#grant_types}
  */
  readonly grantTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#id Client#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Initiate login uri, must be https
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#initiate_login_uri Client#initiate_login_uri}
  */
  readonly initiateLoginUri?: string;
  /**
  * Indicates whether or not this client is a first-party client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#is_first_party Client#is_first_party}
  */
  readonly isFirstParty?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether or not the token endpoint IP header is trusted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#is_token_endpoint_ip_header_trusted Client#is_token_endpoint_ip_header_trusted}
  */
  readonly isTokenEndpointIpHeaderTrusted?: boolean | cdktf.IResolvable;
  /**
  * URL of the logo for the client. Recommended size is 150px x 150px. If none is set, the default badge for the application type will be shown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#logo_uri Client#logo_uri}
  */
  readonly logoUri?: string;
  /**
  * Name of the client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#name Client#name}
  */
  readonly name: string;
  /**
  * Indicates whether or not this client will conform to strict OIDC specifications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#oidc_conformant Client#oidc_conformant}
  */
  readonly oidcConformant?: boolean | cdktf.IResolvable;
  /**
  * Specifies what type of prompt to use when your application requires that users select their organization. Only applicable when ORG_USAGE is require. Options include: `no_prompt`, `pre_login_prompt`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#organization_require_behavior Client#organization_require_behavior}
  */
  readonly organizationRequireBehavior?: string;
  /**
  * Dictates whether your application can support users logging into an organization. Options include: `deny`, `allow`, `require`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#organization_usage Client#organization_usage}
  */
  readonly organizationUsage?: string;
  /**
  * Applies only to SSO clients and determines whether Auth0 will handle Single Sign On (true) or whether the Identity Provider will (false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#sso Client#sso}
  */
  readonly sso?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether or not SSO is disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#sso_disabled Client#sso_disabled}
  */
  readonly ssoDisabled?: boolean | cdktf.IResolvable;
  /**
  * Defines the requested authentication method for the token endpoint. Options include `none` (public client without a client secret), `client_secret_post` (client uses HTTP POST parameters), `client_secret_basic` (client uses HTTP Basic)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#token_endpoint_auth_method Client#token_endpoint_auth_method}
  */
  readonly tokenEndpointAuthMethod?: string;
  /**
  * URLs that represent valid web origins for use with web message response mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#web_origins Client#web_origins}
  */
  readonly webOrigins?: string[];
  /**
  * addons block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#addons Client#addons}
  */
  readonly addons?: ClientAddons;
  /**
  * jwt_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#jwt_configuration Client#jwt_configuration}
  */
  readonly jwtConfiguration?: ClientJwtConfiguration;
  /**
  * mobile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#mobile Client#mobile}
  */
  readonly mobile?: ClientMobile;
  /**
  * refresh_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#refresh_token Client#refresh_token}
  */
  readonly refreshToken?: ClientRefreshToken;
}
export interface ClientAddonsSamlpLogout {
  /**
  * Service provider's Single Logout Service URL, to which Auth0 will send logout requests and responses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#callback Client#callback}
  */
  readonly callback?: string;
  /**
  * Indicates whether or not Auth0 should notify service providers of session termination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#slo_enabled Client#slo_enabled}
  */
  readonly sloEnabled?: boolean | cdktf.IResolvable;
}

export function clientAddonsSamlpLogoutToTerraform(struct?: ClientAddonsSamlpLogoutOutputReference | ClientAddonsSamlpLogout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    callback: cdktf.stringToTerraform(struct!.callback),
    slo_enabled: cdktf.booleanToTerraform(struct!.sloEnabled),
  }
}


export function clientAddonsSamlpLogoutToHclTerraform(struct?: ClientAddonsSamlpLogoutOutputReference | ClientAddonsSamlpLogout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    callback: {
      value: cdktf.stringToHclTerraform(struct!.callback),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slo_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.sloEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientAddonsSamlpLogoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientAddonsSamlpLogout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._callback !== undefined) {
      hasAnyValues = true;
      internalValueResult.callback = this._callback;
    }
    if (this._sloEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloEnabled = this._sloEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientAddonsSamlpLogout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._callback = undefined;
      this._sloEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._callback = value.callback;
      this._sloEnabled = value.sloEnabled;
    }
  }

  // callback - computed: false, optional: true, required: false
  private _callback?: string; 
  public get callback() {
    return this.getStringAttribute('callback');
  }
  public set callback(value: string) {
    this._callback = value;
  }
  public resetCallback() {
    this._callback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callbackInput() {
    return this._callback;
  }

  // slo_enabled - computed: false, optional: true, required: false
  private _sloEnabled?: boolean | cdktf.IResolvable; 
  public get sloEnabled() {
    return this.getBooleanAttribute('slo_enabled');
  }
  public set sloEnabled(value: boolean | cdktf.IResolvable) {
    this._sloEnabled = value;
  }
  public resetSloEnabled() {
    this._sloEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloEnabledInput() {
    return this._sloEnabled;
  }
}
export interface ClientAddonsSamlp {
  /**
  * Audience of the SAML Assertion. Default will be the Issuer on SAMLRequest
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#audience Client#audience}
  */
  readonly audience?: string;
  /**
  * Class reference of the authentication context
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#authn_context_class_ref Client#authn_context_class_ref}
  */
  readonly authnContextClassRef?: string;
  /**
  * Protocol binding used for SAML logout responses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#binding Client#binding}
  */
  readonly binding?: string;
  /**
  * Indicates whether or not a UPN claim should be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#create_upn_claim Client#create_upn_claim}
  */
  readonly createUpnClaim?: boolean | cdktf.IResolvable;
  /**
  * Destination of the SAML Response. If not specified, it will be `AssertionConsumerUrl` of SAMLRequest or `CallbackURL` if there was no SAMLRequest
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#destination Client#destination}
  */
  readonly destination?: string;
  /**
  * Algorithm used to calculate the digest of the SAML Assertion or response. Options include `sha1` (default) and `sha256`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#digest_algorithm Client#digest_algorithm}
  */
  readonly digestAlgorithm?: string;
  /**
  * Indicates whether or not we should infer the NameFormat based on the attribute name. If set to false, the attribute NameFormat is not set in the assertion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#include_attribute_name_format Client#include_attribute_name_format}
  */
  readonly includeAttributeNameFormat?: boolean | cdktf.IResolvable;
  /**
  * Number of seconds during which the token is valid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#lifetime_in_seconds Client#lifetime_in_seconds}
  */
  readonly lifetimeInSeconds?: number;
  /**
  * Indicates whether or not to add additional identity information in the token, such as the provider used and the `access_token`, if available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#map_identities Client#map_identities}
  */
  readonly mapIdentities?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether or not to add a prefix of `http://schema.auth0.com` to any claims that are not mapped to the common profile when passed through in the output assertion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#map_unknown_claims_as_is Client#map_unknown_claims_as_is}
  */
  readonly mapUnknownClaimsAsIs?: boolean | cdktf.IResolvable;
  /**
  * Mappings between the Auth0 user profile property name (`name`) and the output attributes on the SAML attribute in the assertion (`value`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#mappings Client#mappings}
  */
  readonly mappings?: { [key: string]: string };
  /**
  * Format of the name identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#name_identifier_format Client#name_identifier_format}
  */
  readonly nameIdentifierFormat?: string;
  /**
  * Attributes that can be used for Subject/NameID. Auth0 will try each of the attributes of this array in order and use the first value it finds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#name_identifier_probes Client#name_identifier_probes}
  */
  readonly nameIdentifierProbes?: string[];
  /**
  * Indicates whether or not to passthrough claims that are not mapped to the common profile in the output assertion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#passthrough_claims_with_no_mapping Client#passthrough_claims_with_no_mapping}
  */
  readonly passthroughClaimsWithNoMapping?: boolean | cdktf.IResolvable;
  /**
  * Recipient of the SAML Assertion (SubjectConfirmationData). Default is AssertionConsumerUrl on SAMLRequest or Callback URL if no SAMLRequest was sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#recipient Client#recipient}
  */
  readonly recipient?: string;
  /**
  * Indicates whether or not the SAML Response should be signed instead of the SAML Assertion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#sign_response Client#sign_response}
  */
  readonly signResponse?: boolean | cdktf.IResolvable;
  /**
  * Algorithm used to sign the SAML Assertion or response. Options include `rsa-sha1` (default) and `rsa-sha256`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#signature_algorithm Client#signature_algorithm}
  */
  readonly signatureAlgorithm?: string;
  /**
  * Optionally indicates the public key certificate used to validate SAML requests. If set, SAML requests will be required to be signed. A sample value would be `-----BEGIN PUBLIC KEY-----...-----END PUBLIC KEY-----`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#signing_cert Client#signing_cert}
  */
  readonly signingCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#typed_attributes Client#typed_attributes}
  */
  readonly typedAttributes?: boolean | cdktf.IResolvable;
  /**
  * logout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#logout Client#logout}
  */
  readonly logout?: ClientAddonsSamlpLogout;
}

export function clientAddonsSamlpToTerraform(struct?: ClientAddonsSamlpOutputReference | ClientAddonsSamlp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    authn_context_class_ref: cdktf.stringToTerraform(struct!.authnContextClassRef),
    binding: cdktf.stringToTerraform(struct!.binding),
    create_upn_claim: cdktf.booleanToTerraform(struct!.createUpnClaim),
    destination: cdktf.stringToTerraform(struct!.destination),
    digest_algorithm: cdktf.stringToTerraform(struct!.digestAlgorithm),
    include_attribute_name_format: cdktf.booleanToTerraform(struct!.includeAttributeNameFormat),
    lifetime_in_seconds: cdktf.numberToTerraform(struct!.lifetimeInSeconds),
    map_identities: cdktf.booleanToTerraform(struct!.mapIdentities),
    map_unknown_claims_as_is: cdktf.booleanToTerraform(struct!.mapUnknownClaimsAsIs),
    mappings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.mappings),
    name_identifier_format: cdktf.stringToTerraform(struct!.nameIdentifierFormat),
    name_identifier_probes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nameIdentifierProbes),
    passthrough_claims_with_no_mapping: cdktf.booleanToTerraform(struct!.passthroughClaimsWithNoMapping),
    recipient: cdktf.stringToTerraform(struct!.recipient),
    sign_response: cdktf.booleanToTerraform(struct!.signResponse),
    signature_algorithm: cdktf.stringToTerraform(struct!.signatureAlgorithm),
    signing_cert: cdktf.stringToTerraform(struct!.signingCert),
    typed_attributes: cdktf.booleanToTerraform(struct!.typedAttributes),
    logout: clientAddonsSamlpLogoutToTerraform(struct!.logout),
  }
}


export function clientAddonsSamlpToHclTerraform(struct?: ClientAddonsSamlpOutputReference | ClientAddonsSamlp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audience: {
      value: cdktf.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authn_context_class_ref: {
      value: cdktf.stringToHclTerraform(struct!.authnContextClassRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    binding: {
      value: cdktf.stringToHclTerraform(struct!.binding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    create_upn_claim: {
      value: cdktf.booleanToHclTerraform(struct!.createUpnClaim),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    digest_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.digestAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_attribute_name_format: {
      value: cdktf.booleanToHclTerraform(struct!.includeAttributeNameFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lifetime_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.lifetimeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    map_identities: {
      value: cdktf.booleanToHclTerraform(struct!.mapIdentities),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    map_unknown_claims_as_is: {
      value: cdktf.booleanToHclTerraform(struct!.mapUnknownClaimsAsIs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mappings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.mappings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name_identifier_format: {
      value: cdktf.stringToHclTerraform(struct!.nameIdentifierFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_identifier_probes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nameIdentifierProbes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    passthrough_claims_with_no_mapping: {
      value: cdktf.booleanToHclTerraform(struct!.passthroughClaimsWithNoMapping),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    recipient: {
      value: cdktf.stringToHclTerraform(struct!.recipient),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sign_response: {
      value: cdktf.booleanToHclTerraform(struct!.signResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    signature_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.signatureAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signing_cert: {
      value: cdktf.stringToHclTerraform(struct!.signingCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    typed_attributes: {
      value: cdktf.booleanToHclTerraform(struct!.typedAttributes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    logout: {
      value: clientAddonsSamlpLogoutToHclTerraform(struct!.logout),
      isBlock: true,
      type: "list",
      storageClassType: "ClientAddonsSamlpLogoutList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientAddonsSamlpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientAddonsSamlp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._authnContextClassRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.authnContextClassRef = this._authnContextClassRef;
    }
    if (this._binding !== undefined) {
      hasAnyValues = true;
      internalValueResult.binding = this._binding;
    }
    if (this._createUpnClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.createUpnClaim = this._createUpnClaim;
    }
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._digestAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.digestAlgorithm = this._digestAlgorithm;
    }
    if (this._includeAttributeNameFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeAttributeNameFormat = this._includeAttributeNameFormat;
    }
    if (this._lifetimeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetimeInSeconds = this._lifetimeInSeconds;
    }
    if (this._mapIdentities !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapIdentities = this._mapIdentities;
    }
    if (this._mapUnknownClaimsAsIs !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapUnknownClaimsAsIs = this._mapUnknownClaimsAsIs;
    }
    if (this._mappings !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappings = this._mappings;
    }
    if (this._nameIdentifierFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameIdentifierFormat = this._nameIdentifierFormat;
    }
    if (this._nameIdentifierProbes !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameIdentifierProbes = this._nameIdentifierProbes;
    }
    if (this._passthroughClaimsWithNoMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.passthroughClaimsWithNoMapping = this._passthroughClaimsWithNoMapping;
    }
    if (this._recipient !== undefined) {
      hasAnyValues = true;
      internalValueResult.recipient = this._recipient;
    }
    if (this._signResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.signResponse = this._signResponse;
    }
    if (this._signatureAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureAlgorithm = this._signatureAlgorithm;
    }
    if (this._signingCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingCert = this._signingCert;
    }
    if (this._typedAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.typedAttributes = this._typedAttributes;
    }
    if (this._logout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logout = this._logout?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientAddonsSamlp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audience = undefined;
      this._authnContextClassRef = undefined;
      this._binding = undefined;
      this._createUpnClaim = undefined;
      this._destination = undefined;
      this._digestAlgorithm = undefined;
      this._includeAttributeNameFormat = undefined;
      this._lifetimeInSeconds = undefined;
      this._mapIdentities = undefined;
      this._mapUnknownClaimsAsIs = undefined;
      this._mappings = undefined;
      this._nameIdentifierFormat = undefined;
      this._nameIdentifierProbes = undefined;
      this._passthroughClaimsWithNoMapping = undefined;
      this._recipient = undefined;
      this._signResponse = undefined;
      this._signatureAlgorithm = undefined;
      this._signingCert = undefined;
      this._typedAttributes = undefined;
      this._logout.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audience = value.audience;
      this._authnContextClassRef = value.authnContextClassRef;
      this._binding = value.binding;
      this._createUpnClaim = value.createUpnClaim;
      this._destination = value.destination;
      this._digestAlgorithm = value.digestAlgorithm;
      this._includeAttributeNameFormat = value.includeAttributeNameFormat;
      this._lifetimeInSeconds = value.lifetimeInSeconds;
      this._mapIdentities = value.mapIdentities;
      this._mapUnknownClaimsAsIs = value.mapUnknownClaimsAsIs;
      this._mappings = value.mappings;
      this._nameIdentifierFormat = value.nameIdentifierFormat;
      this._nameIdentifierProbes = value.nameIdentifierProbes;
      this._passthroughClaimsWithNoMapping = value.passthroughClaimsWithNoMapping;
      this._recipient = value.recipient;
      this._signResponse = value.signResponse;
      this._signatureAlgorithm = value.signatureAlgorithm;
      this._signingCert = value.signingCert;
      this._typedAttributes = value.typedAttributes;
      this._logout.internalValue = value.logout;
    }
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

  // binding - computed: false, optional: true, required: false
  private _binding?: string; 
  public get binding() {
    return this.getStringAttribute('binding');
  }
  public set binding(value: string) {
    this._binding = value;
  }
  public resetBinding() {
    this._binding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingInput() {
    return this._binding;
  }

  // create_upn_claim - computed: false, optional: true, required: false
  private _createUpnClaim?: boolean | cdktf.IResolvable; 
  public get createUpnClaim() {
    return this.getBooleanAttribute('create_upn_claim');
  }
  public set createUpnClaim(value: boolean | cdktf.IResolvable) {
    this._createUpnClaim = value;
  }
  public resetCreateUpnClaim() {
    this._createUpnClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createUpnClaimInput() {
    return this._createUpnClaim;
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

  // include_attribute_name_format - computed: false, optional: true, required: false
  private _includeAttributeNameFormat?: boolean | cdktf.IResolvable; 
  public get includeAttributeNameFormat() {
    return this.getBooleanAttribute('include_attribute_name_format');
  }
  public set includeAttributeNameFormat(value: boolean | cdktf.IResolvable) {
    this._includeAttributeNameFormat = value;
  }
  public resetIncludeAttributeNameFormat() {
    this._includeAttributeNameFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAttributeNameFormatInput() {
    return this._includeAttributeNameFormat;
  }

  // lifetime_in_seconds - computed: false, optional: true, required: false
  private _lifetimeInSeconds?: number; 
  public get lifetimeInSeconds() {
    return this.getNumberAttribute('lifetime_in_seconds');
  }
  public set lifetimeInSeconds(value: number) {
    this._lifetimeInSeconds = value;
  }
  public resetLifetimeInSeconds() {
    this._lifetimeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInSecondsInput() {
    return this._lifetimeInSeconds;
  }

  // map_identities - computed: false, optional: true, required: false
  private _mapIdentities?: boolean | cdktf.IResolvable; 
  public get mapIdentities() {
    return this.getBooleanAttribute('map_identities');
  }
  public set mapIdentities(value: boolean | cdktf.IResolvable) {
    this._mapIdentities = value;
  }
  public resetMapIdentities() {
    this._mapIdentities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapIdentitiesInput() {
    return this._mapIdentities;
  }

  // map_unknown_claims_as_is - computed: false, optional: true, required: false
  private _mapUnknownClaimsAsIs?: boolean | cdktf.IResolvable; 
  public get mapUnknownClaimsAsIs() {
    return this.getBooleanAttribute('map_unknown_claims_as_is');
  }
  public set mapUnknownClaimsAsIs(value: boolean | cdktf.IResolvable) {
    this._mapUnknownClaimsAsIs = value;
  }
  public resetMapUnknownClaimsAsIs() {
    this._mapUnknownClaimsAsIs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapUnknownClaimsAsIsInput() {
    return this._mapUnknownClaimsAsIs;
  }

  // mappings - computed: false, optional: true, required: false
  private _mappings?: { [key: string]: string }; 
  public get mappings() {
    return this.getStringMapAttribute('mappings');
  }
  public set mappings(value: { [key: string]: string }) {
    this._mappings = value;
  }
  public resetMappings() {
    this._mappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingsInput() {
    return this._mappings;
  }

  // name_identifier_format - computed: false, optional: true, required: false
  private _nameIdentifierFormat?: string; 
  public get nameIdentifierFormat() {
    return this.getStringAttribute('name_identifier_format');
  }
  public set nameIdentifierFormat(value: string) {
    this._nameIdentifierFormat = value;
  }
  public resetNameIdentifierFormat() {
    this._nameIdentifierFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameIdentifierFormatInput() {
    return this._nameIdentifierFormat;
  }

  // name_identifier_probes - computed: false, optional: true, required: false
  private _nameIdentifierProbes?: string[]; 
  public get nameIdentifierProbes() {
    return this.getListAttribute('name_identifier_probes');
  }
  public set nameIdentifierProbes(value: string[]) {
    this._nameIdentifierProbes = value;
  }
  public resetNameIdentifierProbes() {
    this._nameIdentifierProbes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameIdentifierProbesInput() {
    return this._nameIdentifierProbes;
  }

  // passthrough_claims_with_no_mapping - computed: false, optional: true, required: false
  private _passthroughClaimsWithNoMapping?: boolean | cdktf.IResolvable; 
  public get passthroughClaimsWithNoMapping() {
    return this.getBooleanAttribute('passthrough_claims_with_no_mapping');
  }
  public set passthroughClaimsWithNoMapping(value: boolean | cdktf.IResolvable) {
    this._passthroughClaimsWithNoMapping = value;
  }
  public resetPassthroughClaimsWithNoMapping() {
    this._passthroughClaimsWithNoMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passthroughClaimsWithNoMappingInput() {
    return this._passthroughClaimsWithNoMapping;
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

  // sign_response - computed: false, optional: true, required: false
  private _signResponse?: boolean | cdktf.IResolvable; 
  public get signResponse() {
    return this.getBooleanAttribute('sign_response');
  }
  public set signResponse(value: boolean | cdktf.IResolvable) {
    this._signResponse = value;
  }
  public resetSignResponse() {
    this._signResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signResponseInput() {
    return this._signResponse;
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

  // signing_cert - computed: false, optional: true, required: false
  private _signingCert?: string; 
  public get signingCert() {
    return this.getStringAttribute('signing_cert');
  }
  public set signingCert(value: string) {
    this._signingCert = value;
  }
  public resetSigningCert() {
    this._signingCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingCertInput() {
    return this._signingCert;
  }

  // typed_attributes - computed: false, optional: true, required: false
  private _typedAttributes?: boolean | cdktf.IResolvable; 
  public get typedAttributes() {
    return this.getBooleanAttribute('typed_attributes');
  }
  public set typedAttributes(value: boolean | cdktf.IResolvable) {
    this._typedAttributes = value;
  }
  public resetTypedAttributes() {
    this._typedAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typedAttributesInput() {
    return this._typedAttributes;
  }

  // logout - computed: false, optional: true, required: false
  private _logout = new ClientAddonsSamlpLogoutOutputReference(this, "logout");
  public get logout() {
    return this._logout;
  }
  public putLogout(value: ClientAddonsSamlpLogout) {
    this._logout.internalValue = value;
  }
  public resetLogout() {
    this._logout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutInput() {
    return this._logout.internalValue;
  }
}
export interface ClientAddons {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#aws Client#aws}
  */
  readonly aws?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#azure_blob Client#azure_blob}
  */
  readonly azureBlob?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#azure_sb Client#azure_sb}
  */
  readonly azureSb?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#box Client#box}
  */
  readonly box?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#cloudbees Client#cloudbees}
  */
  readonly cloudbees?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#concur Client#concur}
  */
  readonly concur?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#dropbox Client#dropbox}
  */
  readonly dropbox?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#echosign Client#echosign}
  */
  readonly echosign?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#egnyte Client#egnyte}
  */
  readonly egnyte?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#firebase Client#firebase}
  */
  readonly firebase?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#layer Client#layer}
  */
  readonly layer?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#mscrm Client#mscrm}
  */
  readonly mscrm?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#newrelic Client#newrelic}
  */
  readonly newrelic?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#office365 Client#office365}
  */
  readonly office365?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#rms Client#rms}
  */
  readonly rms?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#salesforce Client#salesforce}
  */
  readonly salesforce?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#salesforce_api Client#salesforce_api}
  */
  readonly salesforceApi?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#salesforce_sandbox_api Client#salesforce_sandbox_api}
  */
  readonly salesforceSandboxApi?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#sap_api Client#sap_api}
  */
  readonly sapApi?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#sentry Client#sentry}
  */
  readonly sentry?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#sharepoint Client#sharepoint}
  */
  readonly sharepoint?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#slack Client#slack}
  */
  readonly slack?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#springcm Client#springcm}
  */
  readonly springcm?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#wams Client#wams}
  */
  readonly wams?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#wsfed Client#wsfed}
  */
  readonly wsfed?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#zendesk Client#zendesk}
  */
  readonly zendesk?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#zoom Client#zoom}
  */
  readonly zoom?: { [key: string]: string };
  /**
  * samlp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#samlp Client#samlp}
  */
  readonly samlp?: ClientAddonsSamlp;
}

export function clientAddonsToTerraform(struct?: ClientAddonsOutputReference | ClientAddons): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.aws),
    azure_blob: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.azureBlob),
    azure_sb: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.azureSb),
    box: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.box),
    cloudbees: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.cloudbees),
    concur: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.concur),
    dropbox: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.dropbox),
    echosign: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.echosign),
    egnyte: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.egnyte),
    firebase: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.firebase),
    layer: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.layer),
    mscrm: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.mscrm),
    newrelic: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.newrelic),
    office365: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.office365),
    rms: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.rms),
    salesforce: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.salesforce),
    salesforce_api: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.salesforceApi),
    salesforce_sandbox_api: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.salesforceSandboxApi),
    sap_api: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.sapApi),
    sentry: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.sentry),
    sharepoint: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.sharepoint),
    slack: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.slack),
    springcm: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.springcm),
    wams: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.wams),
    wsfed: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.wsfed),
    zendesk: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.zendesk),
    zoom: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.zoom),
    samlp: clientAddonsSamlpToTerraform(struct!.samlp),
  }
}


export function clientAddonsToHclTerraform(struct?: ClientAddonsOutputReference | ClientAddons): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.aws),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    azure_blob: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.azureBlob),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    azure_sb: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.azureSb),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    box: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.box),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    cloudbees: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.cloudbees),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    concur: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.concur),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    dropbox: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.dropbox),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    echosign: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.echosign),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    egnyte: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.egnyte),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    firebase: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.firebase),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    layer: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.layer),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    mscrm: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.mscrm),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    newrelic: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.newrelic),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    office365: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.office365),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    rms: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.rms),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    salesforce: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.salesforce),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    salesforce_api: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.salesforceApi),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    salesforce_sandbox_api: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.salesforceSandboxApi),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    sap_api: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.sapApi),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    sentry: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.sentry),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    sharepoint: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.sharepoint),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    slack: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.slack),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    springcm: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.springcm),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    wams: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.wams),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    wsfed: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.wsfed),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    zendesk: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.zendesk),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    zoom: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.zoom),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    samlp: {
      value: clientAddonsSamlpToHclTerraform(struct!.samlp),
      isBlock: true,
      type: "list",
      storageClassType: "ClientAddonsSamlpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientAddonsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientAddons | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aws !== undefined) {
      hasAnyValues = true;
      internalValueResult.aws = this._aws;
    }
    if (this._azureBlob !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureBlob = this._azureBlob;
    }
    if (this._azureSb !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureSb = this._azureSb;
    }
    if (this._box !== undefined) {
      hasAnyValues = true;
      internalValueResult.box = this._box;
    }
    if (this._cloudbees !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudbees = this._cloudbees;
    }
    if (this._concur !== undefined) {
      hasAnyValues = true;
      internalValueResult.concur = this._concur;
    }
    if (this._dropbox !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropbox = this._dropbox;
    }
    if (this._echosign !== undefined) {
      hasAnyValues = true;
      internalValueResult.echosign = this._echosign;
    }
    if (this._egnyte !== undefined) {
      hasAnyValues = true;
      internalValueResult.egnyte = this._egnyte;
    }
    if (this._firebase !== undefined) {
      hasAnyValues = true;
      internalValueResult.firebase = this._firebase;
    }
    if (this._layer !== undefined) {
      hasAnyValues = true;
      internalValueResult.layer = this._layer;
    }
    if (this._mscrm !== undefined) {
      hasAnyValues = true;
      internalValueResult.mscrm = this._mscrm;
    }
    if (this._newrelic !== undefined) {
      hasAnyValues = true;
      internalValueResult.newrelic = this._newrelic;
    }
    if (this._office365 !== undefined) {
      hasAnyValues = true;
      internalValueResult.office365 = this._office365;
    }
    if (this._rms !== undefined) {
      hasAnyValues = true;
      internalValueResult.rms = this._rms;
    }
    if (this._salesforce !== undefined) {
      hasAnyValues = true;
      internalValueResult.salesforce = this._salesforce;
    }
    if (this._salesforceApi !== undefined) {
      hasAnyValues = true;
      internalValueResult.salesforceApi = this._salesforceApi;
    }
    if (this._salesforceSandboxApi !== undefined) {
      hasAnyValues = true;
      internalValueResult.salesforceSandboxApi = this._salesforceSandboxApi;
    }
    if (this._sapApi !== undefined) {
      hasAnyValues = true;
      internalValueResult.sapApi = this._sapApi;
    }
    if (this._sentry !== undefined) {
      hasAnyValues = true;
      internalValueResult.sentry = this._sentry;
    }
    if (this._sharepoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharepoint = this._sharepoint;
    }
    if (this._slack !== undefined) {
      hasAnyValues = true;
      internalValueResult.slack = this._slack;
    }
    if (this._springcm !== undefined) {
      hasAnyValues = true;
      internalValueResult.springcm = this._springcm;
    }
    if (this._wams !== undefined) {
      hasAnyValues = true;
      internalValueResult.wams = this._wams;
    }
    if (this._wsfed !== undefined) {
      hasAnyValues = true;
      internalValueResult.wsfed = this._wsfed;
    }
    if (this._zendesk !== undefined) {
      hasAnyValues = true;
      internalValueResult.zendesk = this._zendesk;
    }
    if (this._zoom !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoom = this._zoom;
    }
    if (this._samlp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samlp = this._samlp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientAddons | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aws = undefined;
      this._azureBlob = undefined;
      this._azureSb = undefined;
      this._box = undefined;
      this._cloudbees = undefined;
      this._concur = undefined;
      this._dropbox = undefined;
      this._echosign = undefined;
      this._egnyte = undefined;
      this._firebase = undefined;
      this._layer = undefined;
      this._mscrm = undefined;
      this._newrelic = undefined;
      this._office365 = undefined;
      this._rms = undefined;
      this._salesforce = undefined;
      this._salesforceApi = undefined;
      this._salesforceSandboxApi = undefined;
      this._sapApi = undefined;
      this._sentry = undefined;
      this._sharepoint = undefined;
      this._slack = undefined;
      this._springcm = undefined;
      this._wams = undefined;
      this._wsfed = undefined;
      this._zendesk = undefined;
      this._zoom = undefined;
      this._samlp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aws = value.aws;
      this._azureBlob = value.azureBlob;
      this._azureSb = value.azureSb;
      this._box = value.box;
      this._cloudbees = value.cloudbees;
      this._concur = value.concur;
      this._dropbox = value.dropbox;
      this._echosign = value.echosign;
      this._egnyte = value.egnyte;
      this._firebase = value.firebase;
      this._layer = value.layer;
      this._mscrm = value.mscrm;
      this._newrelic = value.newrelic;
      this._office365 = value.office365;
      this._rms = value.rms;
      this._salesforce = value.salesforce;
      this._salesforceApi = value.salesforceApi;
      this._salesforceSandboxApi = value.salesforceSandboxApi;
      this._sapApi = value.sapApi;
      this._sentry = value.sentry;
      this._sharepoint = value.sharepoint;
      this._slack = value.slack;
      this._springcm = value.springcm;
      this._wams = value.wams;
      this._wsfed = value.wsfed;
      this._zendesk = value.zendesk;
      this._zoom = value.zoom;
      this._samlp.internalValue = value.samlp;
    }
  }

  // aws - computed: false, optional: true, required: false
  private _aws?: { [key: string]: string }; 
  public get aws() {
    return this.getStringMapAttribute('aws');
  }
  public set aws(value: { [key: string]: string }) {
    this._aws = value;
  }
  public resetAws() {
    this._aws = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws;
  }

  // azure_blob - computed: false, optional: true, required: false
  private _azureBlob?: { [key: string]: string }; 
  public get azureBlob() {
    return this.getStringMapAttribute('azure_blob');
  }
  public set azureBlob(value: { [key: string]: string }) {
    this._azureBlob = value;
  }
  public resetAzureBlob() {
    this._azureBlob = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureBlobInput() {
    return this._azureBlob;
  }

  // azure_sb - computed: false, optional: true, required: false
  private _azureSb?: { [key: string]: string }; 
  public get azureSb() {
    return this.getStringMapAttribute('azure_sb');
  }
  public set azureSb(value: { [key: string]: string }) {
    this._azureSb = value;
  }
  public resetAzureSb() {
    this._azureSb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureSbInput() {
    return this._azureSb;
  }

  // box - computed: false, optional: true, required: false
  private _box?: { [key: string]: string }; 
  public get box() {
    return this.getStringMapAttribute('box');
  }
  public set box(value: { [key: string]: string }) {
    this._box = value;
  }
  public resetBox() {
    this._box = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boxInput() {
    return this._box;
  }

  // cloudbees - computed: false, optional: true, required: false
  private _cloudbees?: { [key: string]: string }; 
  public get cloudbees() {
    return this.getStringMapAttribute('cloudbees');
  }
  public set cloudbees(value: { [key: string]: string }) {
    this._cloudbees = value;
  }
  public resetCloudbees() {
    this._cloudbees = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudbeesInput() {
    return this._cloudbees;
  }

  // concur - computed: false, optional: true, required: false
  private _concur?: { [key: string]: string }; 
  public get concur() {
    return this.getStringMapAttribute('concur');
  }
  public set concur(value: { [key: string]: string }) {
    this._concur = value;
  }
  public resetConcur() {
    this._concur = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurInput() {
    return this._concur;
  }

  // dropbox - computed: false, optional: true, required: false
  private _dropbox?: { [key: string]: string }; 
  public get dropbox() {
    return this.getStringMapAttribute('dropbox');
  }
  public set dropbox(value: { [key: string]: string }) {
    this._dropbox = value;
  }
  public resetDropbox() {
    this._dropbox = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropboxInput() {
    return this._dropbox;
  }

  // echosign - computed: false, optional: true, required: false
  private _echosign?: { [key: string]: string }; 
  public get echosign() {
    return this.getStringMapAttribute('echosign');
  }
  public set echosign(value: { [key: string]: string }) {
    this._echosign = value;
  }
  public resetEchosign() {
    this._echosign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get echosignInput() {
    return this._echosign;
  }

  // egnyte - computed: false, optional: true, required: false
  private _egnyte?: { [key: string]: string }; 
  public get egnyte() {
    return this.getStringMapAttribute('egnyte');
  }
  public set egnyte(value: { [key: string]: string }) {
    this._egnyte = value;
  }
  public resetEgnyte() {
    this._egnyte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egnyteInput() {
    return this._egnyte;
  }

  // firebase - computed: false, optional: true, required: false
  private _firebase?: { [key: string]: string }; 
  public get firebase() {
    return this.getStringMapAttribute('firebase');
  }
  public set firebase(value: { [key: string]: string }) {
    this._firebase = value;
  }
  public resetFirebase() {
    this._firebase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firebaseInput() {
    return this._firebase;
  }

  // layer - computed: false, optional: true, required: false
  private _layer?: { [key: string]: string }; 
  public get layer() {
    return this.getStringMapAttribute('layer');
  }
  public set layer(value: { [key: string]: string }) {
    this._layer = value;
  }
  public resetLayer() {
    this._layer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layerInput() {
    return this._layer;
  }

  // mscrm - computed: false, optional: true, required: false
  private _mscrm?: { [key: string]: string }; 
  public get mscrm() {
    return this.getStringMapAttribute('mscrm');
  }
  public set mscrm(value: { [key: string]: string }) {
    this._mscrm = value;
  }
  public resetMscrm() {
    this._mscrm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mscrmInput() {
    return this._mscrm;
  }

  // newrelic - computed: false, optional: true, required: false
  private _newrelic?: { [key: string]: string }; 
  public get newrelic() {
    return this.getStringMapAttribute('newrelic');
  }
  public set newrelic(value: { [key: string]: string }) {
    this._newrelic = value;
  }
  public resetNewrelic() {
    this._newrelic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newrelicInput() {
    return this._newrelic;
  }

  // office365 - computed: false, optional: true, required: false
  private _office365?: { [key: string]: string }; 
  public get office365() {
    return this.getStringMapAttribute('office365');
  }
  public set office365(value: { [key: string]: string }) {
    this._office365 = value;
  }
  public resetOffice365() {
    this._office365 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get office365Input() {
    return this._office365;
  }

  // rms - computed: false, optional: true, required: false
  private _rms?: { [key: string]: string }; 
  public get rms() {
    return this.getStringMapAttribute('rms');
  }
  public set rms(value: { [key: string]: string }) {
    this._rms = value;
  }
  public resetRms() {
    this._rms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rmsInput() {
    return this._rms;
  }

  // salesforce - computed: false, optional: true, required: false
  private _salesforce?: { [key: string]: string }; 
  public get salesforce() {
    return this.getStringMapAttribute('salesforce');
  }
  public set salesforce(value: { [key: string]: string }) {
    this._salesforce = value;
  }
  public resetSalesforce() {
    this._salesforce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get salesforceInput() {
    return this._salesforce;
  }

  // salesforce_api - computed: false, optional: true, required: false
  private _salesforceApi?: { [key: string]: string }; 
  public get salesforceApi() {
    return this.getStringMapAttribute('salesforce_api');
  }
  public set salesforceApi(value: { [key: string]: string }) {
    this._salesforceApi = value;
  }
  public resetSalesforceApi() {
    this._salesforceApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get salesforceApiInput() {
    return this._salesforceApi;
  }

  // salesforce_sandbox_api - computed: false, optional: true, required: false
  private _salesforceSandboxApi?: { [key: string]: string }; 
  public get salesforceSandboxApi() {
    return this.getStringMapAttribute('salesforce_sandbox_api');
  }
  public set salesforceSandboxApi(value: { [key: string]: string }) {
    this._salesforceSandboxApi = value;
  }
  public resetSalesforceSandboxApi() {
    this._salesforceSandboxApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get salesforceSandboxApiInput() {
    return this._salesforceSandboxApi;
  }

  // sap_api - computed: false, optional: true, required: false
  private _sapApi?: { [key: string]: string }; 
  public get sapApi() {
    return this.getStringMapAttribute('sap_api');
  }
  public set sapApi(value: { [key: string]: string }) {
    this._sapApi = value;
  }
  public resetSapApi() {
    this._sapApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sapApiInput() {
    return this._sapApi;
  }

  // sentry - computed: false, optional: true, required: false
  private _sentry?: { [key: string]: string }; 
  public get sentry() {
    return this.getStringMapAttribute('sentry');
  }
  public set sentry(value: { [key: string]: string }) {
    this._sentry = value;
  }
  public resetSentry() {
    this._sentry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentryInput() {
    return this._sentry;
  }

  // sharepoint - computed: false, optional: true, required: false
  private _sharepoint?: { [key: string]: string }; 
  public get sharepoint() {
    return this.getStringMapAttribute('sharepoint');
  }
  public set sharepoint(value: { [key: string]: string }) {
    this._sharepoint = value;
  }
  public resetSharepoint() {
    this._sharepoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharepointInput() {
    return this._sharepoint;
  }

  // slack - computed: false, optional: true, required: false
  private _slack?: { [key: string]: string }; 
  public get slack() {
    return this.getStringMapAttribute('slack');
  }
  public set slack(value: { [key: string]: string }) {
    this._slack = value;
  }
  public resetSlack() {
    this._slack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackInput() {
    return this._slack;
  }

  // springcm - computed: false, optional: true, required: false
  private _springcm?: { [key: string]: string }; 
  public get springcm() {
    return this.getStringMapAttribute('springcm');
  }
  public set springcm(value: { [key: string]: string }) {
    this._springcm = value;
  }
  public resetSpringcm() {
    this._springcm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get springcmInput() {
    return this._springcm;
  }

  // wams - computed: false, optional: true, required: false
  private _wams?: { [key: string]: string }; 
  public get wams() {
    return this.getStringMapAttribute('wams');
  }
  public set wams(value: { [key: string]: string }) {
    this._wams = value;
  }
  public resetWams() {
    this._wams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wamsInput() {
    return this._wams;
  }

  // wsfed - computed: false, optional: true, required: false
  private _wsfed?: { [key: string]: string }; 
  public get wsfed() {
    return this.getStringMapAttribute('wsfed');
  }
  public set wsfed(value: { [key: string]: string }) {
    this._wsfed = value;
  }
  public resetWsfed() {
    this._wsfed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wsfedInput() {
    return this._wsfed;
  }

  // zendesk - computed: false, optional: true, required: false
  private _zendesk?: { [key: string]: string }; 
  public get zendesk() {
    return this.getStringMapAttribute('zendesk');
  }
  public set zendesk(value: { [key: string]: string }) {
    this._zendesk = value;
  }
  public resetZendesk() {
    this._zendesk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zendeskInput() {
    return this._zendesk;
  }

  // zoom - computed: false, optional: true, required: false
  private _zoom?: { [key: string]: string }; 
  public get zoom() {
    return this.getStringMapAttribute('zoom');
  }
  public set zoom(value: { [key: string]: string }) {
    this._zoom = value;
  }
  public resetZoom() {
    this._zoom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoomInput() {
    return this._zoom;
  }

  // samlp - computed: false, optional: true, required: false
  private _samlp = new ClientAddonsSamlpOutputReference(this, "samlp");
  public get samlp() {
    return this._samlp;
  }
  public putSamlp(value: ClientAddonsSamlp) {
    this._samlp.internalValue = value;
  }
  public resetSamlp() {
    this._samlp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlpInput() {
    return this._samlp.internalValue;
  }
}
export interface ClientJwtConfiguration {
  /**
  *  Algorithm used to sign JWTs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#alg Client#alg}
  */
  readonly alg?: string;
  /**
  * Number of seconds during which the JWT will be valid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#lifetime_in_seconds Client#lifetime_in_seconds}
  */
  readonly lifetimeInSeconds?: number;
  /**
  * Permissions (scopes) included in JWTs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#scopes Client#scopes}
  */
  readonly scopes?: { [key: string]: string };
  /**
  * Indicates whether or not the client secret is base64 encoded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#secret_encoded Client#secret_encoded}
  */
  readonly secretEncoded?: boolean | cdktf.IResolvable;
}

export function clientJwtConfigurationToTerraform(struct?: ClientJwtConfigurationOutputReference | ClientJwtConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alg: cdktf.stringToTerraform(struct!.alg),
    lifetime_in_seconds: cdktf.numberToTerraform(struct!.lifetimeInSeconds),
    scopes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.scopes),
    secret_encoded: cdktf.booleanToTerraform(struct!.secretEncoded),
  }
}


export function clientJwtConfigurationToHclTerraform(struct?: ClientJwtConfigurationOutputReference | ClientJwtConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alg: {
      value: cdktf.stringToHclTerraform(struct!.alg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifetime_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.lifetimeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scopes: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.scopes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    secret_encoded: {
      value: cdktf.booleanToHclTerraform(struct!.secretEncoded),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientJwtConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientJwtConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alg !== undefined) {
      hasAnyValues = true;
      internalValueResult.alg = this._alg;
    }
    if (this._lifetimeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetimeInSeconds = this._lifetimeInSeconds;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._secretEncoded !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncoded = this._secretEncoded;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientJwtConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alg = undefined;
      this._lifetimeInSeconds = undefined;
      this._scopes = undefined;
      this._secretEncoded = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alg = value.alg;
      this._lifetimeInSeconds = value.lifetimeInSeconds;
      this._scopes = value.scopes;
      this._secretEncoded = value.secretEncoded;
    }
  }

  // alg - computed: false, optional: true, required: false
  private _alg?: string; 
  public get alg() {
    return this.getStringAttribute('alg');
  }
  public set alg(value: string) {
    this._alg = value;
  }
  public resetAlg() {
    this._alg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algInput() {
    return this._alg;
  }

  // lifetime_in_seconds - computed: true, optional: true, required: false
  private _lifetimeInSeconds?: number; 
  public get lifetimeInSeconds() {
    return this.getNumberAttribute('lifetime_in_seconds');
  }
  public set lifetimeInSeconds(value: number) {
    this._lifetimeInSeconds = value;
  }
  public resetLifetimeInSeconds() {
    this._lifetimeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInSecondsInput() {
    return this._lifetimeInSeconds;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: { [key: string]: string }; 
  public get scopes() {
    return this.getStringMapAttribute('scopes');
  }
  public set scopes(value: { [key: string]: string }) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // secret_encoded - computed: true, optional: true, required: false
  private _secretEncoded?: boolean | cdktf.IResolvable; 
  public get secretEncoded() {
    return this.getBooleanAttribute('secret_encoded');
  }
  public set secretEncoded(value: boolean | cdktf.IResolvable) {
    this._secretEncoded = value;
  }
  public resetSecretEncoded() {
    this._secretEncoded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodedInput() {
    return this._secretEncoded;
  }
}
export interface ClientMobileAndroid {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#app_package_name Client#app_package_name}
  */
  readonly appPackageName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#sha256_cert_fingerprints Client#sha256_cert_fingerprints}
  */
  readonly sha256CertFingerprints?: string[];
}

export function clientMobileAndroidToTerraform(struct?: ClientMobileAndroidOutputReference | ClientMobileAndroid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_package_name: cdktf.stringToTerraform(struct!.appPackageName),
    sha256_cert_fingerprints: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sha256CertFingerprints),
  }
}


export function clientMobileAndroidToHclTerraform(struct?: ClientMobileAndroidOutputReference | ClientMobileAndroid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_package_name: {
      value: cdktf.stringToHclTerraform(struct!.appPackageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sha256_cert_fingerprints: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sha256CertFingerprints),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientMobileAndroidOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientMobileAndroid | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appPackageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.appPackageName = this._appPackageName;
    }
    if (this._sha256CertFingerprints !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha256CertFingerprints = this._sha256CertFingerprints;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientMobileAndroid | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appPackageName = undefined;
      this._sha256CertFingerprints = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appPackageName = value.appPackageName;
      this._sha256CertFingerprints = value.sha256CertFingerprints;
    }
  }

  // app_package_name - computed: false, optional: true, required: false
  private _appPackageName?: string; 
  public get appPackageName() {
    return this.getStringAttribute('app_package_name');
  }
  public set appPackageName(value: string) {
    this._appPackageName = value;
  }
  public resetAppPackageName() {
    this._appPackageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appPackageNameInput() {
    return this._appPackageName;
  }

  // sha256_cert_fingerprints - computed: false, optional: true, required: false
  private _sha256CertFingerprints?: string[]; 
  public get sha256CertFingerprints() {
    return this.getListAttribute('sha256_cert_fingerprints');
  }
  public set sha256CertFingerprints(value: string[]) {
    this._sha256CertFingerprints = value;
  }
  public resetSha256CertFingerprints() {
    this._sha256CertFingerprints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha256CertFingerprintsInput() {
    return this._sha256CertFingerprints;
  }
}
export interface ClientMobileIos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#app_bundle_identifier Client#app_bundle_identifier}
  */
  readonly appBundleIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#team_id Client#team_id}
  */
  readonly teamId?: string;
}

export function clientMobileIosToTerraform(struct?: ClientMobileIosOutputReference | ClientMobileIos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_bundle_identifier: cdktf.stringToTerraform(struct!.appBundleIdentifier),
    team_id: cdktf.stringToTerraform(struct!.teamId),
  }
}


export function clientMobileIosToHclTerraform(struct?: ClientMobileIosOutputReference | ClientMobileIos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_bundle_identifier: {
      value: cdktf.stringToHclTerraform(struct!.appBundleIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    team_id: {
      value: cdktf.stringToHclTerraform(struct!.teamId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientMobileIosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientMobileIos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appBundleIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.appBundleIdentifier = this._appBundleIdentifier;
    }
    if (this._teamId !== undefined) {
      hasAnyValues = true;
      internalValueResult.teamId = this._teamId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientMobileIos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appBundleIdentifier = undefined;
      this._teamId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appBundleIdentifier = value.appBundleIdentifier;
      this._teamId = value.teamId;
    }
  }

  // app_bundle_identifier - computed: false, optional: true, required: false
  private _appBundleIdentifier?: string; 
  public get appBundleIdentifier() {
    return this.getStringAttribute('app_bundle_identifier');
  }
  public set appBundleIdentifier(value: string) {
    this._appBundleIdentifier = value;
  }
  public resetAppBundleIdentifier() {
    this._appBundleIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appBundleIdentifierInput() {
    return this._appBundleIdentifier;
  }

  // team_id - computed: false, optional: true, required: false
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  public resetTeamId() {
    this._teamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }
}
export interface ClientMobile {
  /**
  * android block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#android Client#android}
  */
  readonly android?: ClientMobileAndroid;
  /**
  * ios block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#ios Client#ios}
  */
  readonly ios?: ClientMobileIos;
}

export function clientMobileToTerraform(struct?: ClientMobileOutputReference | ClientMobile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    android: clientMobileAndroidToTerraform(struct!.android),
    ios: clientMobileIosToTerraform(struct!.ios),
  }
}


export function clientMobileToHclTerraform(struct?: ClientMobileOutputReference | ClientMobile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    android: {
      value: clientMobileAndroidToHclTerraform(struct!.android),
      isBlock: true,
      type: "list",
      storageClassType: "ClientMobileAndroidList",
    },
    ios: {
      value: clientMobileIosToHclTerraform(struct!.ios),
      isBlock: true,
      type: "list",
      storageClassType: "ClientMobileIosList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientMobileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientMobile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._android?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.android = this._android?.internalValue;
    }
    if (this._ios?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ios = this._ios?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientMobile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._android.internalValue = undefined;
      this._ios.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._android.internalValue = value.android;
      this._ios.internalValue = value.ios;
    }
  }

  // android - computed: false, optional: true, required: false
  private _android = new ClientMobileAndroidOutputReference(this, "android");
  public get android() {
    return this._android;
  }
  public putAndroid(value: ClientMobileAndroid) {
    this._android.internalValue = value;
  }
  public resetAndroid() {
    this._android.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get androidInput() {
    return this._android.internalValue;
  }

  // ios - computed: false, optional: true, required: false
  private _ios = new ClientMobileIosOutputReference(this, "ios");
  public get ios() {
    return this._ios;
  }
  public putIos(value: ClientMobileIos) {
    this._ios.internalValue = value;
  }
  public resetIos() {
    this._ios.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iosInput() {
    return this._ios.internalValue;
  }
}
export interface ClientRefreshToken {
  /**
  * Refresh token expiration types, one of: `expiring`, `non-expiring`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#expiration_type Client#expiration_type}
  */
  readonly expirationType: string;
  /**
  * Period (in seconds) for which refresh tokens will remain valid without use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#idle_token_lifetime Client#idle_token_lifetime}
  */
  readonly idleTokenLifetime?: number;
  /**
  * Prevents tokens from expiring without use when `true` (takes precedence over `idle_token_lifetime` values)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#infinite_idle_token_lifetime Client#infinite_idle_token_lifetime}
  */
  readonly infiniteIdleTokenLifetime?: boolean | cdktf.IResolvable;
  /**
  * Prevents tokens from having a set lifetime when true (takes precedence over token_lifetime values)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#infinite_token_lifetime Client#infinite_token_lifetime}
  */
  readonly infiniteTokenLifetime?: boolean | cdktf.IResolvable;
  /**
  * Period in seconds where the previous refresh token can be exchanged without triggering breach detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#leeway Client#leeway}
  */
  readonly leeway?: number;
  /**
  * Refresh token rotation types, one of: `rotating`, `non-rotating`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#rotation_type Client#rotation_type}
  */
  readonly rotationType: string;
  /**
  * Period (in seconds) for which refresh tokens will remain valid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#token_lifetime Client#token_lifetime}
  */
  readonly tokenLifetime?: number;
}

export function clientRefreshTokenToTerraform(struct?: ClientRefreshTokenOutputReference | ClientRefreshToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expiration_type: cdktf.stringToTerraform(struct!.expirationType),
    idle_token_lifetime: cdktf.numberToTerraform(struct!.idleTokenLifetime),
    infinite_idle_token_lifetime: cdktf.booleanToTerraform(struct!.infiniteIdleTokenLifetime),
    infinite_token_lifetime: cdktf.booleanToTerraform(struct!.infiniteTokenLifetime),
    leeway: cdktf.numberToTerraform(struct!.leeway),
    rotation_type: cdktf.stringToTerraform(struct!.rotationType),
    token_lifetime: cdktf.numberToTerraform(struct!.tokenLifetime),
  }
}


export function clientRefreshTokenToHclTerraform(struct?: ClientRefreshTokenOutputReference | ClientRefreshToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expiration_type: {
      value: cdktf.stringToHclTerraform(struct!.expirationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idle_token_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.idleTokenLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    infinite_idle_token_lifetime: {
      value: cdktf.booleanToHclTerraform(struct!.infiniteIdleTokenLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    infinite_token_lifetime: {
      value: cdktf.booleanToHclTerraform(struct!.infiniteTokenLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    leeway: {
      value: cdktf.numberToHclTerraform(struct!.leeway),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rotation_type: {
      value: cdktf.stringToHclTerraform(struct!.rotationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.tokenLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientRefreshTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientRefreshToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expirationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationType = this._expirationType;
    }
    if (this._idleTokenLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTokenLifetime = this._idleTokenLifetime;
    }
    if (this._infiniteIdleTokenLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.infiniteIdleTokenLifetime = this._infiniteIdleTokenLifetime;
    }
    if (this._infiniteTokenLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.infiniteTokenLifetime = this._infiniteTokenLifetime;
    }
    if (this._leeway !== undefined) {
      hasAnyValues = true;
      internalValueResult.leeway = this._leeway;
    }
    if (this._rotationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.rotationType = this._rotationType;
    }
    if (this._tokenLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenLifetime = this._tokenLifetime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientRefreshToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expirationType = undefined;
      this._idleTokenLifetime = undefined;
      this._infiniteIdleTokenLifetime = undefined;
      this._infiniteTokenLifetime = undefined;
      this._leeway = undefined;
      this._rotationType = undefined;
      this._tokenLifetime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expirationType = value.expirationType;
      this._idleTokenLifetime = value.idleTokenLifetime;
      this._infiniteIdleTokenLifetime = value.infiniteIdleTokenLifetime;
      this._infiniteTokenLifetime = value.infiniteTokenLifetime;
      this._leeway = value.leeway;
      this._rotationType = value.rotationType;
      this._tokenLifetime = value.tokenLifetime;
    }
  }

  // expiration_type - computed: false, optional: false, required: true
  private _expirationType?: string; 
  public get expirationType() {
    return this.getStringAttribute('expiration_type');
  }
  public set expirationType(value: string) {
    this._expirationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationTypeInput() {
    return this._expirationType;
  }

  // idle_token_lifetime - computed: false, optional: true, required: false
  private _idleTokenLifetime?: number; 
  public get idleTokenLifetime() {
    return this.getNumberAttribute('idle_token_lifetime');
  }
  public set idleTokenLifetime(value: number) {
    this._idleTokenLifetime = value;
  }
  public resetIdleTokenLifetime() {
    this._idleTokenLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTokenLifetimeInput() {
    return this._idleTokenLifetime;
  }

  // infinite_idle_token_lifetime - computed: false, optional: true, required: false
  private _infiniteIdleTokenLifetime?: boolean | cdktf.IResolvable; 
  public get infiniteIdleTokenLifetime() {
    return this.getBooleanAttribute('infinite_idle_token_lifetime');
  }
  public set infiniteIdleTokenLifetime(value: boolean | cdktf.IResolvable) {
    this._infiniteIdleTokenLifetime = value;
  }
  public resetInfiniteIdleTokenLifetime() {
    this._infiniteIdleTokenLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infiniteIdleTokenLifetimeInput() {
    return this._infiniteIdleTokenLifetime;
  }

  // infinite_token_lifetime - computed: false, optional: true, required: false
  private _infiniteTokenLifetime?: boolean | cdktf.IResolvable; 
  public get infiniteTokenLifetime() {
    return this.getBooleanAttribute('infinite_token_lifetime');
  }
  public set infiniteTokenLifetime(value: boolean | cdktf.IResolvable) {
    this._infiniteTokenLifetime = value;
  }
  public resetInfiniteTokenLifetime() {
    this._infiniteTokenLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infiniteTokenLifetimeInput() {
    return this._infiniteTokenLifetime;
  }

  // leeway - computed: false, optional: true, required: false
  private _leeway?: number; 
  public get leeway() {
    return this.getNumberAttribute('leeway');
  }
  public set leeway(value: number) {
    this._leeway = value;
  }
  public resetLeeway() {
    this._leeway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leewayInput() {
    return this._leeway;
  }

  // rotation_type - computed: false, optional: false, required: true
  private _rotationType?: string; 
  public get rotationType() {
    return this.getStringAttribute('rotation_type');
  }
  public set rotationType(value: string) {
    this._rotationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationTypeInput() {
    return this._rotationType;
  }

  // token_lifetime - computed: false, optional: true, required: false
  private _tokenLifetime?: number; 
  public get tokenLifetime() {
    return this.getNumberAttribute('token_lifetime');
  }
  public set tokenLifetime(value: number) {
    this._tokenLifetime = value;
  }
  public resetTokenLifetime() {
    this._tokenLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenLifetimeInput() {
    return this._tokenLifetime;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client auth0_client}
*/
export class Client extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "auth0_client";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Client resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Client to import
  * @param importFromId The id of the existing Client that should be imported. Refer to the {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Client to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "auth0_client", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/client auth0_client} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClientConfig
  */
  public constructor(scope: Construct, id: string, config: ClientConfig) {
    super(scope, id, {
      terraformResourceType: 'auth0_client',
      terraformGeneratorMetadata: {
        providerName: 'auth0',
        providerVersion: '1.1.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedClients = config.allowedClients;
    this._allowedLogoutUrls = config.allowedLogoutUrls;
    this._allowedOrigins = config.allowedOrigins;
    this._appType = config.appType;
    this._callbacks = config.callbacks;
    this._clientMetadata = config.clientMetadata;
    this._clientSecretRotationTrigger = config.clientSecretRotationTrigger;
    this._crossOriginAuth = config.crossOriginAuth;
    this._crossOriginLoc = config.crossOriginLoc;
    this._customLoginPage = config.customLoginPage;
    this._customLoginPageOn = config.customLoginPageOn;
    this._description = config.description;
    this._encryptionKey = config.encryptionKey;
    this._formTemplate = config.formTemplate;
    this._grantTypes = config.grantTypes;
    this._id = config.id;
    this._initiateLoginUri = config.initiateLoginUri;
    this._isFirstParty = config.isFirstParty;
    this._isTokenEndpointIpHeaderTrusted = config.isTokenEndpointIpHeaderTrusted;
    this._logoUri = config.logoUri;
    this._name = config.name;
    this._oidcConformant = config.oidcConformant;
    this._organizationRequireBehavior = config.organizationRequireBehavior;
    this._organizationUsage = config.organizationUsage;
    this._sso = config.sso;
    this._ssoDisabled = config.ssoDisabled;
    this._tokenEndpointAuthMethod = config.tokenEndpointAuthMethod;
    this._webOrigins = config.webOrigins;
    this._addons.internalValue = config.addons;
    this._jwtConfiguration.internalValue = config.jwtConfiguration;
    this._mobile.internalValue = config.mobile;
    this._refreshToken.internalValue = config.refreshToken;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_clients - computed: false, optional: true, required: false
  private _allowedClients?: string[]; 
  public get allowedClients() {
    return this.getListAttribute('allowed_clients');
  }
  public set allowedClients(value: string[]) {
    this._allowedClients = value;
  }
  public resetAllowedClients() {
    this._allowedClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedClientsInput() {
    return this._allowedClients;
  }

  // allowed_logout_urls - computed: false, optional: true, required: false
  private _allowedLogoutUrls?: string[]; 
  public get allowedLogoutUrls() {
    return this.getListAttribute('allowed_logout_urls');
  }
  public set allowedLogoutUrls(value: string[]) {
    this._allowedLogoutUrls = value;
  }
  public resetAllowedLogoutUrls() {
    this._allowedLogoutUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedLogoutUrlsInput() {
    return this._allowedLogoutUrls;
  }

  // allowed_origins - computed: false, optional: true, required: false
  private _allowedOrigins?: string[]; 
  public get allowedOrigins() {
    return this.getListAttribute('allowed_origins');
  }
  public set allowedOrigins(value: string[]) {
    this._allowedOrigins = value;
  }
  public resetAllowedOrigins() {
    this._allowedOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOriginsInput() {
    return this._allowedOrigins;
  }

  // app_type - computed: false, optional: true, required: false
  private _appType?: string; 
  public get appType() {
    return this.getStringAttribute('app_type');
  }
  public set appType(value: string) {
    this._appType = value;
  }
  public resetAppType() {
    this._appType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appTypeInput() {
    return this._appType;
  }

  // callbacks - computed: false, optional: true, required: false
  private _callbacks?: string[]; 
  public get callbacks() {
    return this.getListAttribute('callbacks');
  }
  public set callbacks(value: string[]) {
    this._callbacks = value;
  }
  public resetCallbacks() {
    this._callbacks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callbacksInput() {
    return this._callbacks;
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_metadata - computed: false, optional: true, required: false
  private _clientMetadata?: { [key: string]: string }; 
  public get clientMetadata() {
    return this.getStringMapAttribute('client_metadata');
  }
  public set clientMetadata(value: { [key: string]: string }) {
    this._clientMetadata = value;
  }
  public resetClientMetadata() {
    this._clientMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientMetadataInput() {
    return this._clientMetadata;
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // client_secret_rotation_trigger - computed: false, optional: true, required: false
  private _clientSecretRotationTrigger?: { [key: string]: string }; 
  public get clientSecretRotationTrigger() {
    return this.getStringMapAttribute('client_secret_rotation_trigger');
  }
  public set clientSecretRotationTrigger(value: { [key: string]: string }) {
    this._clientSecretRotationTrigger = value;
  }
  public resetClientSecretRotationTrigger() {
    this._clientSecretRotationTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretRotationTriggerInput() {
    return this._clientSecretRotationTrigger;
  }

  // cross_origin_auth - computed: false, optional: true, required: false
  private _crossOriginAuth?: boolean | cdktf.IResolvable; 
  public get crossOriginAuth() {
    return this.getBooleanAttribute('cross_origin_auth');
  }
  public set crossOriginAuth(value: boolean | cdktf.IResolvable) {
    this._crossOriginAuth = value;
  }
  public resetCrossOriginAuth() {
    this._crossOriginAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossOriginAuthInput() {
    return this._crossOriginAuth;
  }

  // cross_origin_loc - computed: false, optional: true, required: false
  private _crossOriginLoc?: string; 
  public get crossOriginLoc() {
    return this.getStringAttribute('cross_origin_loc');
  }
  public set crossOriginLoc(value: string) {
    this._crossOriginLoc = value;
  }
  public resetCrossOriginLoc() {
    this._crossOriginLoc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossOriginLocInput() {
    return this._crossOriginLoc;
  }

  // custom_login_page - computed: false, optional: true, required: false
  private _customLoginPage?: string; 
  public get customLoginPage() {
    return this.getStringAttribute('custom_login_page');
  }
  public set customLoginPage(value: string) {
    this._customLoginPage = value;
  }
  public resetCustomLoginPage() {
    this._customLoginPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLoginPageInput() {
    return this._customLoginPage;
  }

  // custom_login_page_on - computed: true, optional: true, required: false
  private _customLoginPageOn?: boolean | cdktf.IResolvable; 
  public get customLoginPageOn() {
    return this.getBooleanAttribute('custom_login_page_on');
  }
  public set customLoginPageOn(value: boolean | cdktf.IResolvable) {
    this._customLoginPageOn = value;
  }
  public resetCustomLoginPageOn() {
    this._customLoginPageOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLoginPageOnInput() {
    return this._customLoginPageOn;
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

  // encryption_key - computed: false, optional: true, required: false
  private _encryptionKey?: { [key: string]: string }; 
  public get encryptionKey() {
    return this.getStringMapAttribute('encryption_key');
  }
  public set encryptionKey(value: { [key: string]: string }) {
    this._encryptionKey = value;
  }
  public resetEncryptionKey() {
    this._encryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyInput() {
    return this._encryptionKey;
  }

  // form_template - computed: false, optional: true, required: false
  private _formTemplate?: string; 
  public get formTemplate() {
    return this.getStringAttribute('form_template');
  }
  public set formTemplate(value: string) {
    this._formTemplate = value;
  }
  public resetFormTemplate() {
    this._formTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formTemplateInput() {
    return this._formTemplate;
  }

  // grant_types - computed: true, optional: true, required: false
  private _grantTypes?: string[]; 
  public get grantTypes() {
    return this.getListAttribute('grant_types');
  }
  public set grantTypes(value: string[]) {
    this._grantTypes = value;
  }
  public resetGrantTypes() {
    this._grantTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantTypesInput() {
    return this._grantTypes;
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

  // initiate_login_uri - computed: false, optional: true, required: false
  private _initiateLoginUri?: string; 
  public get initiateLoginUri() {
    return this.getStringAttribute('initiate_login_uri');
  }
  public set initiateLoginUri(value: string) {
    this._initiateLoginUri = value;
  }
  public resetInitiateLoginUri() {
    this._initiateLoginUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initiateLoginUriInput() {
    return this._initiateLoginUri;
  }

  // is_first_party - computed: true, optional: true, required: false
  private _isFirstParty?: boolean | cdktf.IResolvable; 
  public get isFirstParty() {
    return this.getBooleanAttribute('is_first_party');
  }
  public set isFirstParty(value: boolean | cdktf.IResolvable) {
    this._isFirstParty = value;
  }
  public resetIsFirstParty() {
    this._isFirstParty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFirstPartyInput() {
    return this._isFirstParty;
  }

  // is_token_endpoint_ip_header_trusted - computed: true, optional: true, required: false
  private _isTokenEndpointIpHeaderTrusted?: boolean | cdktf.IResolvable; 
  public get isTokenEndpointIpHeaderTrusted() {
    return this.getBooleanAttribute('is_token_endpoint_ip_header_trusted');
  }
  public set isTokenEndpointIpHeaderTrusted(value: boolean | cdktf.IResolvable) {
    this._isTokenEndpointIpHeaderTrusted = value;
  }
  public resetIsTokenEndpointIpHeaderTrusted() {
    this._isTokenEndpointIpHeaderTrusted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isTokenEndpointIpHeaderTrustedInput() {
    return this._isTokenEndpointIpHeaderTrusted;
  }

  // logo_uri - computed: false, optional: true, required: false
  private _logoUri?: string; 
  public get logoUri() {
    return this.getStringAttribute('logo_uri');
  }
  public set logoUri(value: string) {
    this._logoUri = value;
  }
  public resetLogoUri() {
    this._logoUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoUriInput() {
    return this._logoUri;
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

  // oidc_conformant - computed: true, optional: true, required: false
  private _oidcConformant?: boolean | cdktf.IResolvable; 
  public get oidcConformant() {
    return this.getBooleanAttribute('oidc_conformant');
  }
  public set oidcConformant(value: boolean | cdktf.IResolvable) {
    this._oidcConformant = value;
  }
  public resetOidcConformant() {
    this._oidcConformant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcConformantInput() {
    return this._oidcConformant;
  }

  // organization_require_behavior - computed: false, optional: true, required: false
  private _organizationRequireBehavior?: string; 
  public get organizationRequireBehavior() {
    return this.getStringAttribute('organization_require_behavior');
  }
  public set organizationRequireBehavior(value: string) {
    this._organizationRequireBehavior = value;
  }
  public resetOrganizationRequireBehavior() {
    this._organizationRequireBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationRequireBehaviorInput() {
    return this._organizationRequireBehavior;
  }

  // organization_usage - computed: false, optional: true, required: false
  private _organizationUsage?: string; 
  public get organizationUsage() {
    return this.getStringAttribute('organization_usage');
  }
  public set organizationUsage(value: string) {
    this._organizationUsage = value;
  }
  public resetOrganizationUsage() {
    this._organizationUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationUsageInput() {
    return this._organizationUsage;
  }

  // sso - computed: false, optional: true, required: false
  private _sso?: boolean | cdktf.IResolvable; 
  public get sso() {
    return this.getBooleanAttribute('sso');
  }
  public set sso(value: boolean | cdktf.IResolvable) {
    this._sso = value;
  }
  public resetSso() {
    this._sso = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoInput() {
    return this._sso;
  }

  // sso_disabled - computed: false, optional: true, required: false
  private _ssoDisabled?: boolean | cdktf.IResolvable; 
  public get ssoDisabled() {
    return this.getBooleanAttribute('sso_disabled');
  }
  public set ssoDisabled(value: boolean | cdktf.IResolvable) {
    this._ssoDisabled = value;
  }
  public resetSsoDisabled() {
    this._ssoDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoDisabledInput() {
    return this._ssoDisabled;
  }

  // token_endpoint_auth_method - computed: true, optional: true, required: false
  private _tokenEndpointAuthMethod?: string; 
  public get tokenEndpointAuthMethod() {
    return this.getStringAttribute('token_endpoint_auth_method');
  }
  public set tokenEndpointAuthMethod(value: string) {
    this._tokenEndpointAuthMethod = value;
  }
  public resetTokenEndpointAuthMethod() {
    this._tokenEndpointAuthMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointAuthMethodInput() {
    return this._tokenEndpointAuthMethod;
  }

  // web_origins - computed: false, optional: true, required: false
  private _webOrigins?: string[]; 
  public get webOrigins() {
    return this.getListAttribute('web_origins');
  }
  public set webOrigins(value: string[]) {
    this._webOrigins = value;
  }
  public resetWebOrigins() {
    this._webOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webOriginsInput() {
    return this._webOrigins;
  }

  // addons - computed: false, optional: true, required: false
  private _addons = new ClientAddonsOutputReference(this, "addons");
  public get addons() {
    return this._addons;
  }
  public putAddons(value: ClientAddons) {
    this._addons.internalValue = value;
  }
  public resetAddons() {
    this._addons.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonsInput() {
    return this._addons.internalValue;
  }

  // jwt_configuration - computed: false, optional: true, required: false
  private _jwtConfiguration = new ClientJwtConfigurationOutputReference(this, "jwt_configuration");
  public get jwtConfiguration() {
    return this._jwtConfiguration;
  }
  public putJwtConfiguration(value: ClientJwtConfiguration) {
    this._jwtConfiguration.internalValue = value;
  }
  public resetJwtConfiguration() {
    this._jwtConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtConfigurationInput() {
    return this._jwtConfiguration.internalValue;
  }

  // mobile - computed: false, optional: true, required: false
  private _mobile = new ClientMobileOutputReference(this, "mobile");
  public get mobile() {
    return this._mobile;
  }
  public putMobile(value: ClientMobile) {
    this._mobile.internalValue = value;
  }
  public resetMobile() {
    this._mobile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileInput() {
    return this._mobile.internalValue;
  }

  // refresh_token - computed: false, optional: true, required: false
  private _refreshToken = new ClientRefreshTokenOutputReference(this, "refresh_token");
  public get refreshToken() {
    return this._refreshToken;
  }
  public putRefreshToken(value: ClientRefreshToken) {
    this._refreshToken.internalValue = value;
  }
  public resetRefreshToken() {
    this._refreshToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenInput() {
    return this._refreshToken.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_clients: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedClients),
      allowed_logout_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedLogoutUrls),
      allowed_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedOrigins),
      app_type: cdktf.stringToTerraform(this._appType),
      callbacks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._callbacks),
      client_metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._clientMetadata),
      client_secret_rotation_trigger: cdktf.hashMapper(cdktf.stringToTerraform)(this._clientSecretRotationTrigger),
      cross_origin_auth: cdktf.booleanToTerraform(this._crossOriginAuth),
      cross_origin_loc: cdktf.stringToTerraform(this._crossOriginLoc),
      custom_login_page: cdktf.stringToTerraform(this._customLoginPage),
      custom_login_page_on: cdktf.booleanToTerraform(this._customLoginPageOn),
      description: cdktf.stringToTerraform(this._description),
      encryption_key: cdktf.hashMapper(cdktf.stringToTerraform)(this._encryptionKey),
      form_template: cdktf.stringToTerraform(this._formTemplate),
      grant_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._grantTypes),
      id: cdktf.stringToTerraform(this._id),
      initiate_login_uri: cdktf.stringToTerraform(this._initiateLoginUri),
      is_first_party: cdktf.booleanToTerraform(this._isFirstParty),
      is_token_endpoint_ip_header_trusted: cdktf.booleanToTerraform(this._isTokenEndpointIpHeaderTrusted),
      logo_uri: cdktf.stringToTerraform(this._logoUri),
      name: cdktf.stringToTerraform(this._name),
      oidc_conformant: cdktf.booleanToTerraform(this._oidcConformant),
      organization_require_behavior: cdktf.stringToTerraform(this._organizationRequireBehavior),
      organization_usage: cdktf.stringToTerraform(this._organizationUsage),
      sso: cdktf.booleanToTerraform(this._sso),
      sso_disabled: cdktf.booleanToTerraform(this._ssoDisabled),
      token_endpoint_auth_method: cdktf.stringToTerraform(this._tokenEndpointAuthMethod),
      web_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(this._webOrigins),
      addons: clientAddonsToTerraform(this._addons.internalValue),
      jwt_configuration: clientJwtConfigurationToTerraform(this._jwtConfiguration.internalValue),
      mobile: clientMobileToTerraform(this._mobile.internalValue),
      refresh_token: clientRefreshTokenToTerraform(this._refreshToken.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_clients: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedClients),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      allowed_logout_urls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedLogoutUrls),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      allowed_origins: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedOrigins),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      app_type: {
        value: cdktf.stringToHclTerraform(this._appType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      callbacks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._callbacks),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      client_metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._clientMetadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      client_secret_rotation_trigger: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._clientSecretRotationTrigger),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      cross_origin_auth: {
        value: cdktf.booleanToHclTerraform(this._crossOriginAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cross_origin_loc: {
        value: cdktf.stringToHclTerraform(this._crossOriginLoc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_login_page: {
        value: cdktf.stringToHclTerraform(this._customLoginPage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_login_page_on: {
        value: cdktf.booleanToHclTerraform(this._customLoginPageOn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_key: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._encryptionKey),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      form_template: {
        value: cdktf.stringToHclTerraform(this._formTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      grant_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._grantTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      initiate_login_uri: {
        value: cdktf.stringToHclTerraform(this._initiateLoginUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_first_party: {
        value: cdktf.booleanToHclTerraform(this._isFirstParty),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_token_endpoint_ip_header_trusted: {
        value: cdktf.booleanToHclTerraform(this._isTokenEndpointIpHeaderTrusted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      logo_uri: {
        value: cdktf.stringToHclTerraform(this._logoUri),
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
      oidc_conformant: {
        value: cdktf.booleanToHclTerraform(this._oidcConformant),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      organization_require_behavior: {
        value: cdktf.stringToHclTerraform(this._organizationRequireBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_usage: {
        value: cdktf.stringToHclTerraform(this._organizationUsage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sso: {
        value: cdktf.booleanToHclTerraform(this._sso),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sso_disabled: {
        value: cdktf.booleanToHclTerraform(this._ssoDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      token_endpoint_auth_method: {
        value: cdktf.stringToHclTerraform(this._tokenEndpointAuthMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_origins: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._webOrigins),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      addons: {
        value: clientAddonsToHclTerraform(this._addons.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClientAddonsList",
      },
      jwt_configuration: {
        value: clientJwtConfigurationToHclTerraform(this._jwtConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClientJwtConfigurationList",
      },
      mobile: {
        value: clientMobileToHclTerraform(this._mobile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClientMobileList",
      },
      refresh_token: {
        value: clientRefreshTokenToHclTerraform(this._refreshToken.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClientRefreshTokenList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
