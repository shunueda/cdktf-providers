// https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClientConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of applications ID's that will be allowed to make delegation request. By default, all applications will be allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#allowed_clients Client#allowed_clients}
  */
  readonly allowedClients?: string[];
  /**
  * URLs that Auth0 may redirect to after logout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#allowed_logout_urls Client#allowed_logout_urls}
  */
  readonly allowedLogoutUrls?: string[];
  /**
  * URLs that represent valid origins for cross-origin resource sharing. By default, all your callback URLs will be allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#allowed_origins Client#allowed_origins}
  */
  readonly allowedOrigins?: string[];
  /**
  * Type of application the client represents. Possible values are: `native`, `spa`, `regular_web`, `non_interactive`, `resource_server`,`sso_integration`. Specific SSO integrations types accepted as well are: `rms`, `box`, `cloudbees`, `concur`, `dropbox`, `mscrm`, `echosign`, `egnyte`, `newrelic`, `office365`, `salesforce`, `sentry`, `sharepoint`, `slack`, `springcm`, `zendesk`, `zoom`, `express_configuration`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#app_type Client#app_type}
  */
  readonly appType?: string;
  /**
  * List of notification channels enabled for CIBA (Client-Initiated Backchannel Authentication) requests initiated by this client. Valid values are `guardian-push` and `email`. The order is significant as this is the order in which notification channels will be evaluated. Defaults to `["guardian-push"]` if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#async_approval_notification_channels Client#async_approval_notification_channels}
  */
  readonly asyncApprovalNotificationChannels?: string[];
  /**
  * URLs that Auth0 may call back to after a user authenticates for the client. Make sure to specify the protocol (https://) otherwise the callback may fail in some cases. With the exception of custom URI schemes for native clients, all callbacks should use protocol https://.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#callbacks Client#callbacks}
  */
  readonly callbacks?: string[];
  /**
  * List of audiences/realms for SAML protocol. Used by the wsfed addon.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#client_aliases Client#client_aliases}
  */
  readonly clientAliases?: string[];
  /**
  * Metadata associated with the client, in the form of an object with string values (max 255 chars). Maximum of 10 metadata properties allowed. Field names (max 255 chars) are alphanumeric and may only include the following special characters: `:,-+=_*?"/\()<>@ [Tab] [Space]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#client_metadata Client#client_metadata}
  */
  readonly clientMetadata?: { [key: string]: string };
  /**
  * Defines the compliance level for this client, which may restrict it's capabilities. Can be one of `none`, `fapi1_adv_pkj_par`, `fapi1_adv_mtls_par`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#compliance_level Client#compliance_level}
  */
  readonly complianceLevel?: string;
  /**
  * Whether this client can be used to make cross-origin authentication requests (`true`) or it is not allowed to make such requests (`false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#cross_origin_auth Client#cross_origin_auth}
  */
  readonly crossOriginAuth?: boolean | cdktf.IResolvable;
  /**
  * URL of the location in your site where the cross-origin verification takes place for the cross-origin auth flow when performing authentication in your own domain instead of Auth0 Universal Login page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#cross_origin_loc Client#cross_origin_loc}
  */
  readonly crossOriginLoc?: string;
  /**
  * The content (HTML, CSS, JS) of the custom login page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#custom_login_page Client#custom_login_page}
  */
  readonly customLoginPage?: string;
  /**
  * Indicates whether a custom login page is to be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#custom_login_page_on Client#custom_login_page_on}
  */
  readonly customLoginPageOn?: boolean | cdktf.IResolvable;
  /**
  * Description of the purpose of the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#description Client#description}
  */
  readonly description?: string;
  /**
  * Encryption used for WS-Fed responses with this client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#encryption_key Client#encryption_key}
  */
  readonly encryptionKey?: { [key: string]: string };
  /**
  * HTML form template to be used for WS-Federation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#form_template Client#form_template}
  */
  readonly formTemplate?: string;
  /**
  * Types of grants that this client is authorized to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#grant_types Client#grant_types}
  */
  readonly grantTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#id Client#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Initiate login URI. Must be HTTPS or an empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#initiate_login_uri Client#initiate_login_uri}
  */
  readonly initiateLoginUri?: string;
  /**
  * Indicates whether this client is a first-party client.Defaults to true from the API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#is_first_party Client#is_first_party}
  */
  readonly isFirstParty?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the token endpoint IP header is trusted. Requires the authentication method to be set to `client_secret_post` or `client_secret_basic`. Setting this property when creating the resource, will default the authentication method to `client_secret_post`. To change the authentication method to `client_secret_basic` use the `auth0_client_credentials` resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#is_token_endpoint_ip_header_trusted Client#is_token_endpoint_ip_header_trusted}
  */
  readonly isTokenEndpointIpHeaderTrusted?: boolean | cdktf.IResolvable;
  /**
  * URL of the logo for the client. Recommended size is 150px x 150px. If none is set, the default badge for the application type will be shown.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#logo_uri Client#logo_uri}
  */
  readonly logoUri?: string;
  /**
  * Name of the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#name Client#name}
  */
  readonly name: string;
  /**
  * Set of URLs that are valid to call back from Auth0 for OIDC backchannel logout. Currently only one URL is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#oidc_backchannel_logout_urls Client#oidc_backchannel_logout_urls}
  */
  readonly oidcBackchannelLogoutUrls?: string[];
  /**
  * Indicates whether this client will conform to strict OIDC specifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#oidc_conformant Client#oidc_conformant}
  */
  readonly oidcConformant?: boolean | cdktf.IResolvable;
  /**
  * Methods for discovering organizations during the pre_login_prompt. Can include `email` (allows users to find their organization by entering their email address) and/or `organization_name` (requires users to enter the organization name directly). These methods can be combined. Setting this property requires that `organization_require_behavior` is set to `pre_login_prompt`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#organization_discovery_methods Client#organization_discovery_methods}
  */
  readonly organizationDiscoveryMethods?: string[];
  /**
  * Defines how to proceed during an authentication transaction when `organization_usage = "require"`. Can be `no_prompt` (default), `pre_login_prompt` or  `post_login_prompt`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#organization_require_behavior Client#organization_require_behavior}
  */
  readonly organizationRequireBehavior?: string;
  /**
  * Defines how to proceed during an authentication transaction with regards to an organization. Can be `deny` (default), `allow` or `require`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#organization_usage Client#organization_usage}
  */
  readonly organizationUsage?: string;
  /**
  * Makes the use of Proof-of-Possession mandatory for this client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#require_proof_of_possession Client#require_proof_of_possession}
  */
  readonly requireProofOfPossession?: boolean | cdktf.IResolvable;
  /**
  * Makes the use of Pushed Authorization Requests mandatory for this client. This feature currently needs to be enabled on the tenant in order to make use of it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#require_pushed_authorization_requests Client#require_pushed_authorization_requests}
  */
  readonly requirePushedAuthorizationRequests?: boolean | cdktf.IResolvable;
  /**
  * The identifier of a resource server that client is associated withThis property can be sent only when app_type=resource_server.This property can not be changed, once the client is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#resource_server_identifier Client#resource_server_identifier}
  */
  readonly resourceServerIdentifier?: string;
  /**
  * Indicates whether the confirmation prompt appears when using non-verifiable callback URIs. Set to true to skip the prompt, false to show it, or null to unset. Accepts (true/false/null) or ("true"/"false"/"null") 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#skip_non_verifiable_callback_uri_confirmation_prompt Client#skip_non_verifiable_callback_uri_confirmation_prompt}
  */
  readonly skipNonVerifiableCallbackUriConfirmationPrompt?: string;
  /**
  * Applies only to SSO clients and determines whether Auth0 will handle Single Sign-On (true) or whether the identity provider will (false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#sso Client#sso}
  */
  readonly sso?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether or not SSO is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#sso_disabled Client#sso_disabled}
  */
  readonly ssoDisabled?: boolean | cdktf.IResolvable;
  /**
  * URLs that represent valid web origins for use with web message response mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#web_origins Client#web_origins}
  */
  readonly webOrigins?: string[];
  /**
  * addons block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#addons Client#addons}
  */
  readonly addons?: ClientAddons;
  /**
  * default_organization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#default_organization Client#default_organization}
  */
  readonly defaultOrganization?: ClientDefaultOrganization;
  /**
  * express_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#express_configuration Client#express_configuration}
  */
  readonly expressConfiguration?: ClientExpressConfiguration;
  /**
  * jwt_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#jwt_configuration Client#jwt_configuration}
  */
  readonly jwtConfiguration?: ClientJwtConfiguration;
  /**
  * mobile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#mobile Client#mobile}
  */
  readonly mobile?: ClientMobile;
  /**
  * native_social_login block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#native_social_login Client#native_social_login}
  */
  readonly nativeSocialLogin?: ClientNativeSocialLogin;
  /**
  * oidc_logout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#oidc_logout Client#oidc_logout}
  */
  readonly oidcLogout?: ClientOidcLogout;
  /**
  * refresh_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#refresh_token Client#refresh_token}
  */
  readonly refreshToken?: ClientRefreshToken;
  /**
  * session_transfer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#session_transfer Client#session_transfer}
  */
  readonly sessionTransfer?: ClientSessionTransfer;
  /**
  * token_exchange block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#token_exchange Client#token_exchange}
  */
  readonly tokenExchange?: ClientTokenExchange;
  /**
  * token_quota block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#token_quota Client#token_quota}
  */
  readonly tokenQuota?: ClientTokenQuota;
}
export interface ClientAddonsAws {
  /**
  * AWS token lifetime in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#lifetime_in_seconds Client#lifetime_in_seconds}
  */
  readonly lifetimeInSeconds?: number;
  /**
  * AWS principal ARN, for example `arn:aws:iam::010616021751:saml-provider/idpname`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#principal Client#principal}
  */
  readonly principal?: string;
  /**
  * AWS role ARN, for example `arn:aws:iam::010616021751:role/foo`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#role Client#role}
  */
  readonly role?: string;
}

export function clientAddonsAwsToTerraform(struct?: ClientAddonsAwsOutputReference | ClientAddonsAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lifetime_in_seconds: cdktf.numberToTerraform(struct!.lifetimeInSeconds),
    principal: cdktf.stringToTerraform(struct!.principal),
    role: cdktf.stringToTerraform(struct!.role),
  }
}


export function clientAddonsAwsToHclTerraform(struct?: ClientAddonsAwsOutputReference | ClientAddonsAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lifetime_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.lifetimeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    principal: {
      value: cdktf.stringToHclTerraform(struct!.principal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientAddonsAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientAddonsAws | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lifetimeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetimeInSeconds = this._lifetimeInSeconds;
    }
    if (this._principal !== undefined) {
      hasAnyValues = true;
      internalValueResult.principal = this._principal;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientAddonsAws | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lifetimeInSeconds = undefined;
      this._principal = undefined;
      this._role = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lifetimeInSeconds = value.lifetimeInSeconds;
      this._principal = value.principal;
      this._role = value.role;
    }
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

  // principal - computed: false, optional: true, required: false
  private _principal?: string; 
  public get principal() {
    return this.getStringAttribute('principal');
  }
  public set principal(value: string) {
    this._principal = value;
  }
  public resetPrincipal() {
    this._principal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }
}
export interface ClientAddonsAzureBlob {
  /**
  * Your Azure storage account name. Usually first segment in your Azure storage URL, for example `https://acme-org.blob.core.windows.net` would be the account name `acme-org`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#account_name Client#account_name}
  */
  readonly accountName?: string;
  /**
  * Indicates if the issued token has permission to delete the blob.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#blob_delete Client#blob_delete}
  */
  readonly blobDelete?: boolean | cdktf.IResolvable;
  /**
  * Entity to request a token for, such as `my-blob`. If blank the computed SAS will apply to the entire storage container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#blob_name Client#blob_name}
  */
  readonly blobName?: string;
  /**
  * Indicates if the issued token has permission to read the content, properties, metadata and block list. Use the blob as the source of a copy operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#blob_read Client#blob_read}
  */
  readonly blobRead?: boolean | cdktf.IResolvable;
  /**
  * Indicates if the issued token has permission to create or write content, properties, metadata, or block list. Snapshot or lease the blob. Resize the blob (page blob only). Use the blob as the destination of a copy operation within the same account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#blob_write Client#blob_write}
  */
  readonly blobWrite?: boolean | cdktf.IResolvable;
  /**
  * Indicates if issued token has permission to delete any blob in the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#container_delete Client#container_delete}
  */
  readonly containerDelete?: boolean | cdktf.IResolvable;
  /**
  * Indicates if the issued token has permission to list blobs in the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#container_list Client#container_list}
  */
  readonly containerList?: boolean | cdktf.IResolvable;
  /**
  * Container to request a token for, such as `my-container`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#container_name Client#container_name}
  */
  readonly containerName?: string;
  /**
  * Indicates if the issued token has permission to read the content, properties, metadata or block list of any blob in the container. Use any blob in the container as the source of a copy operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#container_read Client#container_read}
  */
  readonly containerRead?: boolean | cdktf.IResolvable;
  /**
  * Indicates that for any blob in the container if the issued token has permission to create or write content, properties, metadata, or block list. Snapshot or lease the blob. Resize the blob (page blob only). Use the blob as the destination of a copy operation within the same account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#container_write Client#container_write}
  */
  readonly containerWrite?: boolean | cdktf.IResolvable;
  /**
  * Expiration in minutes for the generated token (default of 5 minutes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#expiration Client#expiration}
  */
  readonly expiration?: number;
  /**
  * Shared access policy identifier defined in your storage account resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#signed_identifier Client#signed_identifier}
  */
  readonly signedIdentifier?: string;
  /**
  * Access key associated with this storage account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#storage_access_key Client#storage_access_key}
  */
  readonly storageAccessKey?: string;
}

export function clientAddonsAzureBlobToTerraform(struct?: ClientAddonsAzureBlobOutputReference | ClientAddonsAzureBlob): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_name: cdktf.stringToTerraform(struct!.accountName),
    blob_delete: cdktf.booleanToTerraform(struct!.blobDelete),
    blob_name: cdktf.stringToTerraform(struct!.blobName),
    blob_read: cdktf.booleanToTerraform(struct!.blobRead),
    blob_write: cdktf.booleanToTerraform(struct!.blobWrite),
    container_delete: cdktf.booleanToTerraform(struct!.containerDelete),
    container_list: cdktf.booleanToTerraform(struct!.containerList),
    container_name: cdktf.stringToTerraform(struct!.containerName),
    container_read: cdktf.booleanToTerraform(struct!.containerRead),
    container_write: cdktf.booleanToTerraform(struct!.containerWrite),
    expiration: cdktf.numberToTerraform(struct!.expiration),
    signed_identifier: cdktf.stringToTerraform(struct!.signedIdentifier),
    storage_access_key: cdktf.stringToTerraform(struct!.storageAccessKey),
  }
}


export function clientAddonsAzureBlobToHclTerraform(struct?: ClientAddonsAzureBlobOutputReference | ClientAddonsAzureBlob): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_name: {
      value: cdktf.stringToHclTerraform(struct!.accountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blob_delete: {
      value: cdktf.booleanToHclTerraform(struct!.blobDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    blob_name: {
      value: cdktf.stringToHclTerraform(struct!.blobName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blob_read: {
      value: cdktf.booleanToHclTerraform(struct!.blobRead),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    blob_write: {
      value: cdktf.booleanToHclTerraform(struct!.blobWrite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    container_delete: {
      value: cdktf.booleanToHclTerraform(struct!.containerDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    container_list: {
      value: cdktf.booleanToHclTerraform(struct!.containerList),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    container_name: {
      value: cdktf.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_read: {
      value: cdktf.booleanToHclTerraform(struct!.containerRead),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    container_write: {
      value: cdktf.booleanToHclTerraform(struct!.containerWrite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expiration: {
      value: cdktf.numberToHclTerraform(struct!.expiration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    signed_identifier: {
      value: cdktf.stringToHclTerraform(struct!.signedIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_access_key: {
      value: cdktf.stringToHclTerraform(struct!.storageAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientAddonsAzureBlobOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientAddonsAzureBlob | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountName = this._accountName;
    }
    if (this._blobDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.blobDelete = this._blobDelete;
    }
    if (this._blobName !== undefined) {
      hasAnyValues = true;
      internalValueResult.blobName = this._blobName;
    }
    if (this._blobRead !== undefined) {
      hasAnyValues = true;
      internalValueResult.blobRead = this._blobRead;
    }
    if (this._blobWrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.blobWrite = this._blobWrite;
    }
    if (this._containerDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerDelete = this._containerDelete;
    }
    if (this._containerList !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerList = this._containerList;
    }
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._containerRead !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerRead = this._containerRead;
    }
    if (this._containerWrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerWrite = this._containerWrite;
    }
    if (this._expiration !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiration = this._expiration;
    }
    if (this._signedIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.signedIdentifier = this._signedIdentifier;
    }
    if (this._storageAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccessKey = this._storageAccessKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientAddonsAzureBlob | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountName = undefined;
      this._blobDelete = undefined;
      this._blobName = undefined;
      this._blobRead = undefined;
      this._blobWrite = undefined;
      this._containerDelete = undefined;
      this._containerList = undefined;
      this._containerName = undefined;
      this._containerRead = undefined;
      this._containerWrite = undefined;
      this._expiration = undefined;
      this._signedIdentifier = undefined;
      this._storageAccessKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountName = value.accountName;
      this._blobDelete = value.blobDelete;
      this._blobName = value.blobName;
      this._blobRead = value.blobRead;
      this._blobWrite = value.blobWrite;
      this._containerDelete = value.containerDelete;
      this._containerList = value.containerList;
      this._containerName = value.containerName;
      this._containerRead = value.containerRead;
      this._containerWrite = value.containerWrite;
      this._expiration = value.expiration;
      this._signedIdentifier = value.signedIdentifier;
      this._storageAccessKey = value.storageAccessKey;
    }
  }

  // account_name - computed: false, optional: true, required: false
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  public resetAccountName() {
    this._accountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // blob_delete - computed: false, optional: true, required: false
  private _blobDelete?: boolean | cdktf.IResolvable; 
  public get blobDelete() {
    return this.getBooleanAttribute('blob_delete');
  }
  public set blobDelete(value: boolean | cdktf.IResolvable) {
    this._blobDelete = value;
  }
  public resetBlobDelete() {
    this._blobDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blobDeleteInput() {
    return this._blobDelete;
  }

  // blob_name - computed: false, optional: true, required: false
  private _blobName?: string; 
  public get blobName() {
    return this.getStringAttribute('blob_name');
  }
  public set blobName(value: string) {
    this._blobName = value;
  }
  public resetBlobName() {
    this._blobName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blobNameInput() {
    return this._blobName;
  }

  // blob_read - computed: false, optional: true, required: false
  private _blobRead?: boolean | cdktf.IResolvable; 
  public get blobRead() {
    return this.getBooleanAttribute('blob_read');
  }
  public set blobRead(value: boolean | cdktf.IResolvable) {
    this._blobRead = value;
  }
  public resetBlobRead() {
    this._blobRead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blobReadInput() {
    return this._blobRead;
  }

  // blob_write - computed: false, optional: true, required: false
  private _blobWrite?: boolean | cdktf.IResolvable; 
  public get blobWrite() {
    return this.getBooleanAttribute('blob_write');
  }
  public set blobWrite(value: boolean | cdktf.IResolvable) {
    this._blobWrite = value;
  }
  public resetBlobWrite() {
    this._blobWrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blobWriteInput() {
    return this._blobWrite;
  }

  // container_delete - computed: false, optional: true, required: false
  private _containerDelete?: boolean | cdktf.IResolvable; 
  public get containerDelete() {
    return this.getBooleanAttribute('container_delete');
  }
  public set containerDelete(value: boolean | cdktf.IResolvable) {
    this._containerDelete = value;
  }
  public resetContainerDelete() {
    this._containerDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerDeleteInput() {
    return this._containerDelete;
  }

  // container_list - computed: false, optional: true, required: false
  private _containerList?: boolean | cdktf.IResolvable; 
  public get containerList() {
    return this.getBooleanAttribute('container_list');
  }
  public set containerList(value: boolean | cdktf.IResolvable) {
    this._containerList = value;
  }
  public resetContainerList() {
    this._containerList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerListInput() {
    return this._containerList;
  }

  // container_name - computed: false, optional: true, required: false
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  public resetContainerName() {
    this._containerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // container_read - computed: false, optional: true, required: false
  private _containerRead?: boolean | cdktf.IResolvable; 
  public get containerRead() {
    return this.getBooleanAttribute('container_read');
  }
  public set containerRead(value: boolean | cdktf.IResolvable) {
    this._containerRead = value;
  }
  public resetContainerRead() {
    this._containerRead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerReadInput() {
    return this._containerRead;
  }

  // container_write - computed: false, optional: true, required: false
  private _containerWrite?: boolean | cdktf.IResolvable; 
  public get containerWrite() {
    return this.getBooleanAttribute('container_write');
  }
  public set containerWrite(value: boolean | cdktf.IResolvable) {
    this._containerWrite = value;
  }
  public resetContainerWrite() {
    this._containerWrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerWriteInput() {
    return this._containerWrite;
  }

  // expiration - computed: false, optional: true, required: false
  private _expiration?: number; 
  public get expiration() {
    return this.getNumberAttribute('expiration');
  }
  public set expiration(value: number) {
    this._expiration = value;
  }
  public resetExpiration() {
    this._expiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationInput() {
    return this._expiration;
  }

  // signed_identifier - computed: false, optional: true, required: false
  private _signedIdentifier?: string; 
  public get signedIdentifier() {
    return this.getStringAttribute('signed_identifier');
  }
  public set signedIdentifier(value: string) {
    this._signedIdentifier = value;
  }
  public resetSignedIdentifier() {
    this._signedIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signedIdentifierInput() {
    return this._signedIdentifier;
  }

  // storage_access_key - computed: false, optional: true, required: false
  private _storageAccessKey?: string; 
  public get storageAccessKey() {
    return this.getStringAttribute('storage_access_key');
  }
  public set storageAccessKey(value: string) {
    this._storageAccessKey = value;
  }
  public resetStorageAccessKey() {
    this._storageAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccessKeyInput() {
    return this._storageAccessKey;
  }
}
export interface ClientAddonsAzureSb {
  /**
  * Entity you want to request a token for, such as `my-queue`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#entity_path Client#entity_path}
  */
  readonly entityPath?: string;
  /**
  * Optional expiration in minutes for the generated token. Defaults to 5 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#expiration Client#expiration}
  */
  readonly expiration?: number;
  /**
  * Your Azure Service Bus namespace. Usually the first segment of your Service Bus URL (for example `https://acme-org.servicebus.windows.net` would be `acme-org`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#namespace Client#namespace}
  */
  readonly namespace?: string;
  /**
  * Primary Key associated with your shared access policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#sas_key Client#sas_key}
  */
  readonly sasKey?: string;
  /**
  * Your shared access policy name defined in your Service Bus entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#sas_key_name Client#sas_key_name}
  */
  readonly sasKeyName?: string;
}

export function clientAddonsAzureSbToTerraform(struct?: ClientAddonsAzureSbOutputReference | ClientAddonsAzureSb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_path: cdktf.stringToTerraform(struct!.entityPath),
    expiration: cdktf.numberToTerraform(struct!.expiration),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    sas_key: cdktf.stringToTerraform(struct!.sasKey),
    sas_key_name: cdktf.stringToTerraform(struct!.sasKeyName),
  }
}


export function clientAddonsAzureSbToHclTerraform(struct?: ClientAddonsAzureSbOutputReference | ClientAddonsAzureSb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity_path: {
      value: cdktf.stringToHclTerraform(struct!.entityPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expiration: {
      value: cdktf.numberToHclTerraform(struct!.expiration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sas_key: {
      value: cdktf.stringToHclTerraform(struct!.sasKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sas_key_name: {
      value: cdktf.stringToHclTerraform(struct!.sasKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientAddonsAzureSbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientAddonsAzureSb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityPath = this._entityPath;
    }
    if (this._expiration !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiration = this._expiration;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._sasKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sasKey = this._sasKey;
    }
    if (this._sasKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sasKeyName = this._sasKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientAddonsAzureSb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entityPath = undefined;
      this._expiration = undefined;
      this._namespace = undefined;
      this._sasKey = undefined;
      this._sasKeyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entityPath = value.entityPath;
      this._expiration = value.expiration;
      this._namespace = value.namespace;
      this._sasKey = value.sasKey;
      this._sasKeyName = value.sasKeyName;
    }
  }

  // entity_path - computed: false, optional: true, required: false
  private _entityPath?: string; 
  public get entityPath() {
    return this.getStringAttribute('entity_path');
  }
  public set entityPath(value: string) {
    this._entityPath = value;
  }
  public resetEntityPath() {
    this._entityPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityPathInput() {
    return this._entityPath;
  }

  // expiration - computed: false, optional: true, required: false
  private _expiration?: number; 
  public get expiration() {
    return this.getNumberAttribute('expiration');
  }
  public set expiration(value: number) {
    this._expiration = value;
  }
  public resetExpiration() {
    this._expiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationInput() {
    return this._expiration;
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

  // sas_key - computed: false, optional: true, required: false
  private _sasKey?: string; 
  public get sasKey() {
    return this.getStringAttribute('sas_key');
  }
  public set sasKey(value: string) {
    this._sasKey = value;
  }
  public resetSasKey() {
    this._sasKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sasKeyInput() {
    return this._sasKey;
  }

  // sas_key_name - computed: false, optional: true, required: false
  private _sasKeyName?: string; 
  public get sasKeyName() {
    return this.getStringAttribute('sas_key_name');
  }
  public set sasKeyName(value: string) {
    this._sasKeyName = value;
  }
  public resetSasKeyName() {
    this._sasKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sasKeyNameInput() {
    return this._sasKeyName;
  }
}
export interface ClientAddonsBox {
}

export function clientAddonsBoxToTerraform(struct?: ClientAddonsBoxOutputReference | ClientAddonsBox): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clientAddonsBoxToHclTerraform(struct?: ClientAddonsBoxOutputReference | ClientAddonsBox): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClientAddonsBoxOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientAddonsBox | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientAddonsBox | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface ClientAddonsCloudbees {
}

export function clientAddonsCloudbeesToTerraform(struct?: ClientAddonsCloudbeesOutputReference | ClientAddonsCloudbees): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clientAddonsCloudbeesToHclTerraform(struct?: ClientAddonsCloudbeesOutputReference | ClientAddonsCloudbees): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClientAddonsCloudbeesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientAddonsCloudbees | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientAddonsCloudbees | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface ClientAddonsConcur {
}

export function clientAddonsConcurToTerraform(struct?: ClientAddonsConcurOutputReference | ClientAddonsConcur): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clientAddonsConcurToHclTerraform(struct?: ClientAddonsConcurOutputReference | ClientAddonsConcur): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClientAddonsConcurOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientAddonsConcur | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientAddonsConcur | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface ClientAddonsDropbox {
}

export function clientAddonsDropboxToTerraform(struct?: ClientAddonsDropboxOutputReference | ClientAddonsDropbox): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clientAddonsDropboxToHclTerraform(struct?: ClientAddonsDropboxOutputReference | ClientAddonsDropbox): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClientAddonsDropboxOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientAddonsDropbox | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientAddonsDropbox | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface ClientAddonsEchosign {
  /**
  * Your custom domain found in your EchoSign URL, for example `https://acme-org.echosign.com` would be `acme-org`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#domain Client#domain}
  */
  readonly domain?: string;
}

export function clientAddonsEchosignToTerraform(struct?: ClientAddonsEchosignOutputReference | ClientAddonsEchosign): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
  }
}


export function clientAddonsEchosignToHclTerraform(struct?: ClientAddonsEchosignOutputReference | ClientAddonsEchosign): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientAddonsEchosignOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientAddonsEchosign | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientAddonsEchosign | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domain = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domain = value.domain;
    }
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }
}
export interface ClientAddonsEgnyte {
  /**
  * Your custom domain found in your Egnyte URL, for example `https://acme-org.echosign.com` would be `acme-org`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#domain Client#domain}
  */
  readonly domain?: string;
}

export function clientAddonsEgnyteToTerraform(struct?: ClientAddonsEgnyteOutputReference | ClientAddonsEgnyte): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
  }
}


export function clientAddonsEgnyteToHclTerraform(struct?: ClientAddonsEgnyteOutputReference | ClientAddonsEgnyte): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientAddonsEgnyteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientAddonsEgnyte | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientAddonsEgnyte | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domain = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domain = value.domain;
    }
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }
}
export interface ClientAddonsFirebase {
  /**
  * ID of the Service Account you have created (shown as `client_email` in the generated JSON file, SDK v3+ tokens only).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#client_email Client#client_email}
  */
  readonly clientEmail?: string;
  /**
  * Optional expiration in seconds for the generated token. Defaults to 3600 seconds (SDK v3+ tokens only).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#lifetime_in_seconds Client#lifetime_in_seconds}
  */
  readonly lifetimeInSeconds?: number;
  /**
  * Private Key for signing the token (SDK v3+ tokens only).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#private_key Client#private_key}
  */
  readonly privateKey?: string;
  /**
  * Optional ID of the private key to obtain the `kid` header claim from the issued token (SDK v3+ tokens only).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#private_key_id Client#private_key_id}
  */
  readonly privateKeyId?: string;
  /**
  * Google Firebase Secret. (SDK v2 only).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#secret Client#secret}
  */
  readonly secret?: string;
}

export function clientAddonsFirebaseToTerraform(struct?: ClientAddonsFirebaseOutputReference | ClientAddonsFirebase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_email: cdktf.stringToTerraform(struct!.clientEmail),
    lifetime_in_seconds: cdktf.numberToTerraform(struct!.lifetimeInSeconds),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    private_key_id: cdktf.stringToTerraform(struct!.privateKeyId),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function clientAddonsFirebaseToHclTerraform(struct?: ClientAddonsFirebaseOutputReference | ClientAddonsFirebase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_email: {
      value: cdktf.stringToHclTerraform(struct!.clientEmail),
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
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key_id: {
      value: cdktf.stringToHclTerraform(struct!.privateKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientAddonsFirebaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientAddonsFirebase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientEmail = this._clientEmail;
    }
    if (this._lifetimeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetimeInSeconds = this._lifetimeInSeconds;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._privateKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyId = this._privateKeyId;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientAddonsFirebase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientEmail = undefined;
      this._lifetimeInSeconds = undefined;
      this._privateKey = undefined;
      this._privateKeyId = undefined;
      this._secret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientEmail = value.clientEmail;
      this._lifetimeInSeconds = value.lifetimeInSeconds;
      this._privateKey = value.privateKey;
      this._privateKeyId = value.privateKeyId;
      this._secret = value.secret;
    }
  }

  // client_email - computed: false, optional: true, required: false
  private _clientEmail?: string; 
  public get clientEmail() {
    return this.getStringAttribute('client_email');
  }
  public set clientEmail(value: string) {
    this._clientEmail = value;
  }
  public resetClientEmail() {
    this._clientEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientEmailInput() {
    return this._clientEmail;
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

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // private_key_id - computed: false, optional: true, required: false
  private _privateKeyId?: string; 
  public get privateKeyId() {
    return this.getStringAttribute('private_key_id');
  }
  public set privateKeyId(value: string) {
    this._privateKeyId = value;
  }
  public resetPrivateKeyId() {
    this._privateKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyIdInput() {
    return this._privateKeyId;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }
}
export interface ClientAddonsLayer {
  /**
  * Optional expiration in minutes for the generated token. Defaults to 5 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#expiration Client#expiration}
  */
  readonly expiration?: number;
  /**
  * Authentication Key identifier used to sign the Layer token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#key_id Client#key_id}
  */
  readonly keyId: string;
  /**
  * Name of the property used as the unique user ID in Layer. If not specified `user_id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#principal Client#principal}
  */
  readonly principal?: string;
  /**
  * Private key for signing the Layer token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#private_key Client#private_key}
  */
  readonly privateKey: string;
  /**
  * Provider ID of your Layer account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#provider_id Client#provider_id}
  */
  readonly providerId: string;
}

export function clientAddonsLayerToTerraform(struct?: ClientAddonsLayerOutputReference | ClientAddonsLayer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expiration: cdktf.numberToTerraform(struct!.expiration),
    key_id: cdktf.stringToTerraform(struct!.keyId),
    principal: cdktf.stringToTerraform(struct!.principal),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    provider_id: cdktf.stringToTerraform(struct!.providerId),
  }
}


export function clientAddonsLayerToHclTerraform(struct?: ClientAddonsLayerOutputReference | ClientAddonsLayer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expiration: {
      value: cdktf.numberToHclTerraform(struct!.expiration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key_id: {
      value: cdktf.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    principal: {
      value: cdktf.stringToHclTerraform(struct!.principal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_id: {
      value: cdktf.stringToHclTerraform(struct!.providerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientAddonsLayerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientAddonsLayer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expiration !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiration = this._expiration;
    }
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._principal !== undefined) {
      hasAnyValues = true;
      internalValueResult.principal = this._principal;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._providerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerId = this._providerId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientAddonsLayer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expiration = undefined;
      this._keyId = undefined;
      this._principal = undefined;
      this._privateKey = undefined;
      this._providerId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expiration = value.expiration;
      this._keyId = value.keyId;
      this._principal = value.principal;
      this._privateKey = value.privateKey;
      this._providerId = value.providerId;
    }
  }

  // expiration - computed: false, optional: true, required: false
  private _expiration?: number; 
  public get expiration() {
    return this.getNumberAttribute('expiration');
  }
  public set expiration(value: number) {
    this._expiration = value;
  }
  public resetExpiration() {
    this._expiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationInput() {
    return this._expiration;
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

  // principal - computed: false, optional: true, required: false
  private _principal?: string; 
  public get principal() {
    return this.getStringAttribute('principal');
  }
  public set principal(value: string) {
    this._principal = value;
  }
  public resetPrincipal() {
    this._principal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal;
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // provider_id - computed: false, optional: false, required: true
  private _providerId?: string; 
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }
  public set providerId(value: string) {
    this._providerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIdInput() {
    return this._providerId;
  }
}
export interface ClientAddonsMscrm {
  /**
  * Microsoft Dynamics CRM application URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#url Client#url}
  */
  readonly url?: string;
}

export function clientAddonsMscrmToTerraform(struct?: ClientAddonsMscrmOutputReference | ClientAddonsMscrm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function clientAddonsMscrmToHclTerraform(struct?: ClientAddonsMscrmOutputReference | ClientAddonsMscrm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class ClientAddonsMscrmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientAddonsMscrm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientAddonsMscrm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
    }
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface ClientAddonsNewrelic {
  /**
  * Your New Relic Account ID found in your New Relic URL after the `/accounts/` path, for example `https://rpm.newrelic.com/accounts/123456/query` would be `123456`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#account Client#account}
  */
  readonly account?: string;
}

export function clientAddonsNewrelicToTerraform(struct?: ClientAddonsNewrelicOutputReference | ClientAddonsNewrelic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account: cdktf.stringToTerraform(struct!.account),
  }
}


export function clientAddonsNewrelicToHclTerraform(struct?: ClientAddonsNewrelicOutputReference | ClientAddonsNewrelic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account: {
      value: cdktf.stringToHclTerraform(struct!.account),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientAddonsNewrelicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientAddonsNewrelic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._account !== undefined) {
      hasAnyValues = true;
      internalValueResult.account = this._account;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientAddonsNewrelic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._account = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._account = value.account;
    }
  }

  // account - computed: false, optional: true, required: false
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  public resetAccount() {
    this._account = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }
}
export interface ClientAddonsOffice365 {
  /**
  * Optional Auth0 database connection for testing an already-configured Office 365 tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#connection Client#connection}
  */
  readonly connection?: string;
  /**
  * Your Office 365 domain name, for example `acme-org.com`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#domain Client#domain}
  */
  readonly domain?: string;
}

export function clientAddonsOffice365ToTerraform(struct?: ClientAddonsOffice365OutputReference | ClientAddonsOffice365): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection: cdktf.stringToTerraform(struct!.connection),
    domain: cdktf.stringToTerraform(struct!.domain),
  }
}


export function clientAddonsOffice365ToHclTerraform(struct?: ClientAddonsOffice365OutputReference | ClientAddonsOffice365): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection: {
      value: cdktf.stringToHclTerraform(struct!.connection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientAddonsOffice365OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientAddonsOffice365 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connection !== undefined) {
      hasAnyValues = true;
      internalValueResult.connection = this._connection;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientAddonsOffice365 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connection = undefined;
      this._domain = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connection = value.connection;
      this._domain = value.domain;
    }
  }

  // connection - computed: false, optional: true, required: false
  private _connection?: string; 
  public get connection() {
    return this.getStringAttribute('connection');
  }
  public set connection(value: string) {
    this._connection = value;
  }
  public resetConnection() {
    this._connection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInput() {
    return this._connection;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }
}
export interface ClientAddonsRms {
  /**
  * URL of your Rights Management Server. It can be internal or external, but users will have to be able to reach it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#url Client#url}
  */
  readonly url?: string;
}

export function clientAddonsRmsToTerraform(struct?: ClientAddonsRmsOutputReference | ClientAddonsRms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function clientAddonsRmsToHclTerraform(struct?: ClientAddonsRmsOutputReference | ClientAddonsRms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class ClientAddonsRmsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientAddonsRms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientAddonsRms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
    }
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface ClientAddonsSalesforce {
  /**
  * Arbitrary logical URL that identifies the Saleforce resource, for example `https://acme-org.com`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#entity_id Client#entity_id}
  */
  readonly entityId?: string;
}

export function clientAddonsSalesforceToTerraform(struct?: ClientAddonsSalesforceOutputReference | ClientAddonsSalesforce): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_id: cdktf.stringToTerraform(struct!.entityId),
  }
}


export function clientAddonsSalesforceToHclTerraform(struct?: ClientAddonsSalesforceOutputReference | ClientAddonsSalesforce): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity_id: {
      value: cdktf.stringToHclTerraform(struct!.entityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientAddonsSalesforceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientAddonsSalesforce | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityId = this._entityId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientAddonsSalesforce | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entityId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entityId = value.entityId;
    }
  }

  // entity_id - computed: false, optional: true, required: false
  private _entityId?: string; 
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }
  public set entityId(value: string) {
    this._entityId = value;
  }
  public resetEntityId() {
    this._entityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdInput() {
    return this._entityId;
  }
}
export interface ClientAddonsSalesforceApi {
  /**
  * Consumer Key assigned by Salesforce to the Connected App.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#client_id Client#client_id}
  */
  readonly clientId?: string;
  /**
  * Community name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#community_name Client#community_name}
  */
  readonly communityName?: string;
  /**
  * Community URL section.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#community_url_section Client#community_url_section}
  */
  readonly communityUrlSection?: string;
  /**
  * Name of the property in the user object that maps to a Salesforce username, for example `email`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#principal Client#principal}
  */
  readonly principal?: string;
}

export function clientAddonsSalesforceApiToTerraform(struct?: ClientAddonsSalesforceApiOutputReference | ClientAddonsSalesforceApi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    community_name: cdktf.stringToTerraform(struct!.communityName),
    community_url_section: cdktf.stringToTerraform(struct!.communityUrlSection),
    principal: cdktf.stringToTerraform(struct!.principal),
  }
}


export function clientAddonsSalesforceApiToHclTerraform(struct?: ClientAddonsSalesforceApiOutputReference | ClientAddonsSalesforceApi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    community_name: {
      value: cdktf.stringToHclTerraform(struct!.communityName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    community_url_section: {
      value: cdktf.stringToHclTerraform(struct!.communityUrlSection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    principal: {
      value: cdktf.stringToHclTerraform(struct!.principal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientAddonsSalesforceApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientAddonsSalesforceApi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._communityName !== undefined) {
      hasAnyValues = true;
      internalValueResult.communityName = this._communityName;
    }
    if (this._communityUrlSection !== undefined) {
      hasAnyValues = true;
      internalValueResult.communityUrlSection = this._communityUrlSection;
    }
    if (this._principal !== undefined) {
      hasAnyValues = true;
      internalValueResult.principal = this._principal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientAddonsSalesforceApi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._communityName = undefined;
      this._communityUrlSection = undefined;
      this._principal = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._communityName = value.communityName;
      this._communityUrlSection = value.communityUrlSection;
      this._principal = value.principal;
    }
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

  // community_name - computed: false, optional: true, required: false
  private _communityName?: string; 
  public get communityName() {
    return this.getStringAttribute('community_name');
  }
  public set communityName(value: string) {
    this._communityName = value;
  }
  public resetCommunityName() {
    this._communityName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityNameInput() {
    return this._communityName;
  }

  // community_url_section - computed: false, optional: true, required: false
  private _communityUrlSection?: string; 
  public get communityUrlSection() {
    return this.getStringAttribute('community_url_section');
  }
  public set communityUrlSection(value: string) {
    this._communityUrlSection = value;
  }
  public resetCommunityUrlSection() {
    this._communityUrlSection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityUrlSectionInput() {
    return this._communityUrlSection;
  }

  // principal - computed: false, optional: true, required: false
  private _principal?: string; 
  public get principal() {
    return this.getStringAttribute('principal');
  }
  public set principal(value: string) {
    this._principal = value;
  }
  public resetPrincipal() {
    this._principal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal;
  }
}
export interface ClientAddonsSalesforceSandboxApi {
  /**
  * Consumer Key assigned by Salesforce to the Connected App.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#client_id Client#client_id}
  */
  readonly clientId?: string;
  /**
  * Community name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#community_name Client#community_name}
  */
  readonly communityName?: string;
  /**
  * Community URL section.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#community_url_section Client#community_url_section}
  */
  readonly communityUrlSection?: string;
  /**
  * Name of the property in the user object that maps to a Salesforce username, for example `email`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#principal Client#principal}
  */
  readonly principal?: string;
}

export function clientAddonsSalesforceSandboxApiToTerraform(struct?: ClientAddonsSalesforceSandboxApiOutputReference | ClientAddonsSalesforceSandboxApi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    community_name: cdktf.stringToTerraform(struct!.communityName),
    community_url_section: cdktf.stringToTerraform(struct!.communityUrlSection),
    principal: cdktf.stringToTerraform(struct!.principal),
  }
}


export function clientAddonsSalesforceSandboxApiToHclTerraform(struct?: ClientAddonsSalesforceSandboxApiOutputReference | ClientAddonsSalesforceSandboxApi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    community_name: {
      value: cdktf.stringToHclTerraform(struct!.communityName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    community_url_section: {
      value: cdktf.stringToHclTerraform(struct!.communityUrlSection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    principal: {
      value: cdktf.stringToHclTerraform(struct!.principal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientAddonsSalesforceSandboxApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientAddonsSalesforceSandboxApi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._communityName !== undefined) {
      hasAnyValues = true;
      internalValueResult.communityName = this._communityName;
    }
    if (this._communityUrlSection !== undefined) {
      hasAnyValues = true;
      internalValueResult.communityUrlSection = this._communityUrlSection;
    }
    if (this._principal !== undefined) {
      hasAnyValues = true;
      internalValueResult.principal = this._principal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientAddonsSalesforceSandboxApi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._communityName = undefined;
      this._communityUrlSection = undefined;
      this._principal = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._communityName = value.communityName;
      this._communityUrlSection = value.communityUrlSection;
      this._principal = value.principal;
    }
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

  // community_name - computed: false, optional: true, required: false
  private _communityName?: string; 
  public get communityName() {
    return this.getStringAttribute('community_name');
  }
  public set communityName(value: string) {
    this._communityName = value;
  }
  public resetCommunityName() {
    this._communityName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityNameInput() {
    return this._communityName;
  }

  // community_url_section - computed: false, optional: true, required: false
  private _communityUrlSection?: string; 
  public get communityUrlSection() {
    return this.getStringAttribute('community_url_section');
  }
  public set communityUrlSection(value: string) {
    this._communityUrlSection = value;
  }
  public resetCommunityUrlSection() {
    this._communityUrlSection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityUrlSectionInput() {
    return this._communityUrlSection;
  }

  // principal - computed: false, optional: true, required: false
  private _principal?: string; 
  public get principal() {
    return this.getStringAttribute('principal');
  }
  public set principal(value: string) {
    this._principal = value;
  }
  public resetPrincipal() {
    this._principal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal;
  }
}
export interface ClientAddonsSamlpLogout {
  /**
  * The service provider (client application)'s Single Logout Service URL, where Auth0 will send logout requests and responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#callback Client#callback}
  */
  readonly callback?: string;
  /**
  * Controls whether Auth0 should notify service providers of session termination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#slo_enabled Client#slo_enabled}
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
  * Audience of the SAML Assertion. Default will be the Issuer on SAMLRequest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#audience Client#audience}
  */
  readonly audience?: string;
  /**
  * Class reference of the authentication context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#authn_context_class_ref Client#authn_context_class_ref}
  */
  readonly authnContextClassRef?: string;
  /**
  * Protocol binding used for SAML logout responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#binding Client#binding}
  */
  readonly binding?: string;
  /**
  * Indicates whether a UPN claim should be created. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#create_upn_claim Client#create_upn_claim}
  */
  readonly createUpnClaim?: boolean | cdktf.IResolvable;
  /**
  * Destination of the SAML Response. If not specified, it will be `AssertionConsumerUrl` of SAMLRequest or callback URL if there was no SAMLRequest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#destination Client#destination}
  */
  readonly destination?: string;
  /**
  * Algorithm used to calculate the digest of the SAML Assertion or response. Options include `sha1` and `sha256`. Defaults to `sha1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#digest_algorithm Client#digest_algorithm}
  */
  readonly digestAlgorithm?: string;
  /**
  * This is a supporting attribute to `mappings` field.Please note this is an experimental field. It should only be used when needed to send a map with keys as slices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#flexible_mappings Client#flexible_mappings}
  */
  readonly flexibleMappings?: string;
  /**
  * Indicates whether or not we should infer the NameFormat based on the attribute name. If set to `false`, the attribute NameFormat is not set in the assertion. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#include_attribute_name_format Client#include_attribute_name_format}
  */
  readonly includeAttributeNameFormat?: boolean | cdktf.IResolvable;
  /**
  * Issuer of the SAML Assertion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#issuer Client#issuer}
  */
  readonly issuer?: string;
  /**
  * Number of seconds during which the token is valid. Defaults to `3600` seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#lifetime_in_seconds Client#lifetime_in_seconds}
  */
  readonly lifetimeInSeconds?: number;
  /**
  * Indicates whether or not to add additional identity information in the token, such as the provider used and the `access_token`, if available. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#map_identities Client#map_identities}
  */
  readonly mapIdentities?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to add a prefix of `http://schema.auth0.com` to any claims that are not mapped to the common profile when passed through in the output assertion. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#map_unknown_claims_as_is Client#map_unknown_claims_as_is}
  */
  readonly mapUnknownClaimsAsIs?: boolean | cdktf.IResolvable;
  /**
  * Mappings between the Auth0 user profile property name (`name`) and the output attributes on the SAML attribute in the assertion (`value`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#mappings Client#mappings}
  */
  readonly mappings?: { [key: string]: string };
  /**
  * Format of the name identifier. Defaults to `urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#name_identifier_format Client#name_identifier_format}
  */
  readonly nameIdentifierFormat?: string;
  /**
  * Attributes that can be used for Subject/NameID. Auth0 will try each of the attributes of this array in order and use the first value it finds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#name_identifier_probes Client#name_identifier_probes}
  */
  readonly nameIdentifierProbes?: string[];
  /**
  * Indicates whether or not to passthrough claims that are not mapped to the common profile in the output assertion. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#passthrough_claims_with_no_mapping Client#passthrough_claims_with_no_mapping}
  */
  readonly passthroughClaimsWithNoMapping?: boolean | cdktf.IResolvable;
  /**
  * Recipient of the SAML Assertion (SubjectConfirmationData). Default is `AssertionConsumerUrl` on SAMLRequest or callback URL if no SAMLRequest was sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#recipient Client#recipient}
  */
  readonly recipient?: string;
  /**
  * Indicates whether or not the SAML Response should be signed instead of the SAML Assertion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#sign_response Client#sign_response}
  */
  readonly signResponse?: boolean | cdktf.IResolvable;
  /**
  * Algorithm used to sign the SAML Assertion or response. Options include `rsa-sha1` and `rsa-sha256`. Defaults to `rsa-sha1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#signature_algorithm Client#signature_algorithm}
  */
  readonly signatureAlgorithm?: string;
  /**
  * Optionally indicates the public key certificate used to validate SAML requests. If set, SAML requests will be required to be signed. A sample value would be `-----BEGIN PUBLIC KEY-----\nMIGf...bpP/t3\n+JGNGIRMj1hF1rnb6QIDAQAB\n-----END PUBLIC KEY-----\n`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#signing_cert Client#signing_cert}
  */
  readonly signingCert?: string;
  /**
  * Indicates whether or not we should infer the `xs:type` of the element. Types include `xs:string`, `xs:boolean`, `xs:double`, and `xs:anyType`. When set to `false`, all `xs:type` are `xs:anyType`. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#typed_attributes Client#typed_attributes}
  */
  readonly typedAttributes?: boolean | cdktf.IResolvable;
  /**
  * logout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#logout Client#logout}
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
    flexible_mappings: cdktf.stringToTerraform(struct!.flexibleMappings),
    include_attribute_name_format: cdktf.booleanToTerraform(struct!.includeAttributeNameFormat),
    issuer: cdktf.stringToTerraform(struct!.issuer),
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
    flexible_mappings: {
      value: cdktf.stringToHclTerraform(struct!.flexibleMappings),
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
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
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
    if (this._flexibleMappings !== undefined) {
      hasAnyValues = true;
      internalValueResult.flexibleMappings = this._flexibleMappings;
    }
    if (this._includeAttributeNameFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeAttributeNameFormat = this._includeAttributeNameFormat;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
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
      this._flexibleMappings = undefined;
      this._includeAttributeNameFormat = undefined;
      this._issuer = undefined;
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
      this._flexibleMappings = value.flexibleMappings;
      this._includeAttributeNameFormat = value.includeAttributeNameFormat;
      this._issuer = value.issuer;
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

  // flexible_mappings - computed: false, optional: true, required: false
  private _flexibleMappings?: string; 
  public get flexibleMappings() {
    return this.getStringAttribute('flexible_mappings');
  }
  public set flexibleMappings(value: string) {
    this._flexibleMappings = value;
  }
  public resetFlexibleMappings() {
    this._flexibleMappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flexibleMappingsInput() {
    return this._flexibleMappings;
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

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
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
export interface ClientAddonsSapApi {
  /**
  * If activated in the OAuth 2.0 client configuration (transaction `SOAUTH2) the SAML attribute `client_id` must be set and equal the `client_id` form parameter of the access token request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#client_id Client#client_id}
  */
  readonly clientId?: string;
  /**
  * NameID element of the Subject which can be used to express the user's identity. Defaults to `urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#name_identifier_format Client#name_identifier_format}
  */
  readonly nameIdentifierFormat?: string;
  /**
  * Requested scope for SAP APIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#scope Client#scope}
  */
  readonly scope?: string;
  /**
  * Service account password to use to authenticate API calls to the token endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#service_password Client#service_password}
  */
  readonly servicePassword?: string;
  /**
  * The OAuth2 token endpoint URL of your SAP OData server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#token_endpoint_url Client#token_endpoint_url}
  */
  readonly tokenEndpointUrl?: string;
  /**
  * Name of the property in the user object that maps to a SAP username, for example `email`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#username_attribute Client#username_attribute}
  */
  readonly usernameAttribute?: string;
}

export function clientAddonsSapApiToTerraform(struct?: ClientAddonsSapApiOutputReference | ClientAddonsSapApi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    name_identifier_format: cdktf.stringToTerraform(struct!.nameIdentifierFormat),
    scope: cdktf.stringToTerraform(struct!.scope),
    service_password: cdktf.stringToTerraform(struct!.servicePassword),
    token_endpoint_url: cdktf.stringToTerraform(struct!.tokenEndpointUrl),
    username_attribute: cdktf.stringToTerraform(struct!.usernameAttribute),
  }
}


export function clientAddonsSapApiToHclTerraform(struct?: ClientAddonsSapApiOutputReference | ClientAddonsSapApi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_identifier_format: {
      value: cdktf.stringToHclTerraform(struct!.nameIdentifierFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_password: {
      value: cdktf.stringToHclTerraform(struct!.servicePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_endpoint_url: {
      value: cdktf.stringToHclTerraform(struct!.tokenEndpointUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_attribute: {
      value: cdktf.stringToHclTerraform(struct!.usernameAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientAddonsSapApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientAddonsSapApi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._nameIdentifierFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameIdentifierFormat = this._nameIdentifierFormat;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._servicePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePassword = this._servicePassword;
    }
    if (this._tokenEndpointUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpointUrl = this._tokenEndpointUrl;
    }
    if (this._usernameAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameAttribute = this._usernameAttribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientAddonsSapApi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._nameIdentifierFormat = undefined;
      this._scope = undefined;
      this._servicePassword = undefined;
      this._tokenEndpointUrl = undefined;
      this._usernameAttribute = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._nameIdentifierFormat = value.nameIdentifierFormat;
      this._scope = value.scope;
      this._servicePassword = value.servicePassword;
      this._tokenEndpointUrl = value.tokenEndpointUrl;
      this._usernameAttribute = value.usernameAttribute;
    }
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

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // service_password - computed: false, optional: true, required: false
  private _servicePassword?: string; 
  public get servicePassword() {
    return this.getStringAttribute('service_password');
  }
  public set servicePassword(value: string) {
    this._servicePassword = value;
  }
  public resetServicePassword() {
    this._servicePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePasswordInput() {
    return this._servicePassword;
  }

  // token_endpoint_url - computed: false, optional: true, required: false
  private _tokenEndpointUrl?: string; 
  public get tokenEndpointUrl() {
    return this.getStringAttribute('token_endpoint_url');
  }
  public set tokenEndpointUrl(value: string) {
    this._tokenEndpointUrl = value;
  }
  public resetTokenEndpointUrl() {
    this._tokenEndpointUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointUrlInput() {
    return this._tokenEndpointUrl;
  }

  // username_attribute - computed: false, optional: true, required: false
  private _usernameAttribute?: string; 
  public get usernameAttribute() {
    return this.getStringAttribute('username_attribute');
  }
  public set usernameAttribute(value: string) {
    this._usernameAttribute = value;
  }
  public resetUsernameAttribute() {
    this._usernameAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameAttributeInput() {
    return this._usernameAttribute;
  }
}
export interface ClientAddonsSentry {
  /**
  * URL prefix only if running Sentry Community Edition, otherwise leave empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#base_url Client#base_url}
  */
  readonly baseUrl?: string;
  /**
  * Generated slug for your Sentry organization. Found in your Sentry URL, for example `https://sentry.acme.com/acme-org/` would be `acme-org`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#org_slug Client#org_slug}
  */
  readonly orgSlug?: string;
}

export function clientAddonsSentryToTerraform(struct?: ClientAddonsSentryOutputReference | ClientAddonsSentry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_url: cdktf.stringToTerraform(struct!.baseUrl),
    org_slug: cdktf.stringToTerraform(struct!.orgSlug),
  }
}


export function clientAddonsSentryToHclTerraform(struct?: ClientAddonsSentryOutputReference | ClientAddonsSentry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_url: {
      value: cdktf.stringToHclTerraform(struct!.baseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    org_slug: {
      value: cdktf.stringToHclTerraform(struct!.orgSlug),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientAddonsSentryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientAddonsSentry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseUrl = this._baseUrl;
    }
    if (this._orgSlug !== undefined) {
      hasAnyValues = true;
      internalValueResult.orgSlug = this._orgSlug;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientAddonsSentry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseUrl = undefined;
      this._orgSlug = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseUrl = value.baseUrl;
      this._orgSlug = value.orgSlug;
    }
  }

  // base_url - computed: false, optional: true, required: false
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  public resetBaseUrl() {
    this._baseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // org_slug - computed: false, optional: true, required: false
  private _orgSlug?: string; 
  public get orgSlug() {
    return this.getStringAttribute('org_slug');
  }
  public set orgSlug(value: string) {
    this._orgSlug = value;
  }
  public resetOrgSlug() {
    this._orgSlug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgSlugInput() {
    return this._orgSlug;
  }
}
export interface ClientAddonsSharepoint {
  /**
  * External SharePoint application URLs if exposed to the Internet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#external_url Client#external_url}
  */
  readonly externalUrl?: string[];
  /**
  * Internal SharePoint application URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#url Client#url}
  */
  readonly url?: string;
}

export function clientAddonsSharepointToTerraform(struct?: ClientAddonsSharepointOutputReference | ClientAddonsSharepoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_url: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.externalUrl),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function clientAddonsSharepointToHclTerraform(struct?: ClientAddonsSharepointOutputReference | ClientAddonsSharepoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_url: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.externalUrl),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class ClientAddonsSharepointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientAddonsSharepoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalUrl = this._externalUrl;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientAddonsSharepoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._externalUrl = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._externalUrl = value.externalUrl;
      this._url = value.url;
    }
  }

  // external_url - computed: false, optional: true, required: false
  private _externalUrl?: string[]; 
  public get externalUrl() {
    return this.getListAttribute('external_url');
  }
  public set externalUrl(value: string[]) {
    this._externalUrl = value;
  }
  public resetExternalUrl() {
    this._externalUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalUrlInput() {
    return this._externalUrl;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface ClientAddonsSlack {
  /**
  * Slack team name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#team Client#team}
  */
  readonly team?: string;
}

export function clientAddonsSlackToTerraform(struct?: ClientAddonsSlackOutputReference | ClientAddonsSlack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    team: cdktf.stringToTerraform(struct!.team),
  }
}


export function clientAddonsSlackToHclTerraform(struct?: ClientAddonsSlackOutputReference | ClientAddonsSlack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    team: {
      value: cdktf.stringToHclTerraform(struct!.team),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientAddonsSlackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientAddonsSlack | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._team !== undefined) {
      hasAnyValues = true;
      internalValueResult.team = this._team;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientAddonsSlack | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._team = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._team = value.team;
    }
  }

  // team - computed: false, optional: true, required: false
  private _team?: string; 
  public get team() {
    return this.getStringAttribute('team');
  }
  public set team(value: string) {
    this._team = value;
  }
  public resetTeam() {
    this._team = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamInput() {
    return this._team;
  }
}
export interface ClientAddonsSpringcm {
  /**
  * SpringCM ACS URL, for example `https://na11.springcm.com/atlas/sso/SSOEndpoint.ashx`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#acs_url Client#acs_url}
  */
  readonly acsUrl?: string;
}

export function clientAddonsSpringcmToTerraform(struct?: ClientAddonsSpringcmOutputReference | ClientAddonsSpringcm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acs_url: cdktf.stringToTerraform(struct!.acsUrl),
  }
}


export function clientAddonsSpringcmToHclTerraform(struct?: ClientAddonsSpringcmOutputReference | ClientAddonsSpringcm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acs_url: {
      value: cdktf.stringToHclTerraform(struct!.acsUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientAddonsSpringcmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientAddonsSpringcm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acsUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.acsUrl = this._acsUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientAddonsSpringcm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acsUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acsUrl = value.acsUrl;
    }
  }

  // acs_url - computed: false, optional: true, required: false
  private _acsUrl?: string; 
  public get acsUrl() {
    return this.getStringAttribute('acs_url');
  }
  public set acsUrl(value: string) {
    this._acsUrl = value;
  }
  public resetAcsUrl() {
    this._acsUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acsUrlInput() {
    return this._acsUrl;
  }
}
export interface ClientAddonsSsoIntegration {
  /**
  * SSO integration name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#name Client#name}
  */
  readonly name?: string;
  /**
  * SSO integration version installed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#version Client#version}
  */
  readonly version?: string;
}

export function clientAddonsSsoIntegrationToTerraform(struct?: ClientAddonsSsoIntegrationOutputReference | ClientAddonsSsoIntegration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function clientAddonsSsoIntegrationToHclTerraform(struct?: ClientAddonsSsoIntegrationOutputReference | ClientAddonsSsoIntegration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientAddonsSsoIntegrationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientAddonsSsoIntegration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientAddonsSsoIntegration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._version = value.version;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface ClientAddonsWams {
  /**
  * Your master key for Windows Azure Mobile Services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#master_key Client#master_key}
  */
  readonly masterKey?: string;
}

export function clientAddonsWamsToTerraform(struct?: ClientAddonsWamsOutputReference | ClientAddonsWams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    master_key: cdktf.stringToTerraform(struct!.masterKey),
  }
}


export function clientAddonsWamsToHclTerraform(struct?: ClientAddonsWamsOutputReference | ClientAddonsWams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    master_key: {
      value: cdktf.stringToHclTerraform(struct!.masterKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientAddonsWamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientAddonsWams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._masterKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterKey = this._masterKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientAddonsWams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._masterKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._masterKey = value.masterKey;
    }
  }

  // master_key - computed: false, optional: true, required: false
  private _masterKey?: string; 
  public get masterKey() {
    return this.getStringAttribute('master_key');
  }
  public set masterKey(value: string) {
    this._masterKey = value;
  }
  public resetMasterKey() {
    this._masterKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterKeyInput() {
    return this._masterKey;
  }
}
export interface ClientAddonsWsfed {
}

export function clientAddonsWsfedToTerraform(struct?: ClientAddonsWsfedOutputReference | ClientAddonsWsfed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clientAddonsWsfedToHclTerraform(struct?: ClientAddonsWsfedOutputReference | ClientAddonsWsfed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClientAddonsWsfedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientAddonsWsfed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientAddonsWsfed | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface ClientAddonsZendesk {
  /**
  * Zendesk account name. Usually the first segment in your Zendesk URL, for example `https://acme-org.zendesk.com` would be `acme-org`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#account_name Client#account_name}
  */
  readonly accountName?: string;
}

export function clientAddonsZendeskToTerraform(struct?: ClientAddonsZendeskOutputReference | ClientAddonsZendesk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_name: cdktf.stringToTerraform(struct!.accountName),
  }
}


export function clientAddonsZendeskToHclTerraform(struct?: ClientAddonsZendeskOutputReference | ClientAddonsZendesk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_name: {
      value: cdktf.stringToHclTerraform(struct!.accountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientAddonsZendeskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientAddonsZendesk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountName = this._accountName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientAddonsZendesk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountName = value.accountName;
    }
  }

  // account_name - computed: false, optional: true, required: false
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  public resetAccountName() {
    this._accountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }
}
export interface ClientAddonsZoom {
  /**
  * Zoom account name. Usually the first segment of your Zoom URL, for example `https://acme-org.zoom.us` would be `acme-org`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#account Client#account}
  */
  readonly account?: string;
}

export function clientAddonsZoomToTerraform(struct?: ClientAddonsZoomOutputReference | ClientAddonsZoom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account: cdktf.stringToTerraform(struct!.account),
  }
}


export function clientAddonsZoomToHclTerraform(struct?: ClientAddonsZoomOutputReference | ClientAddonsZoom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account: {
      value: cdktf.stringToHclTerraform(struct!.account),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientAddonsZoomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientAddonsZoom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._account !== undefined) {
      hasAnyValues = true;
      internalValueResult.account = this._account;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientAddonsZoom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._account = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._account = value.account;
    }
  }

  // account - computed: false, optional: true, required: false
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  public resetAccount() {
    this._account = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }
}
export interface ClientAddons {
  /**
  * aws block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#aws Client#aws}
  */
  readonly aws?: ClientAddonsAws;
  /**
  * azure_blob block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#azure_blob Client#azure_blob}
  */
  readonly azureBlob?: ClientAddonsAzureBlob;
  /**
  * azure_sb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#azure_sb Client#azure_sb}
  */
  readonly azureSb?: ClientAddonsAzureSb;
  /**
  * box block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#box Client#box}
  */
  readonly box?: ClientAddonsBox;
  /**
  * cloudbees block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#cloudbees Client#cloudbees}
  */
  readonly cloudbees?: ClientAddonsCloudbees;
  /**
  * concur block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#concur Client#concur}
  */
  readonly concur?: ClientAddonsConcur;
  /**
  * dropbox block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#dropbox Client#dropbox}
  */
  readonly dropbox?: ClientAddonsDropbox;
  /**
  * echosign block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#echosign Client#echosign}
  */
  readonly echosign?: ClientAddonsEchosign;
  /**
  * egnyte block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#egnyte Client#egnyte}
  */
  readonly egnyte?: ClientAddonsEgnyte;
  /**
  * firebase block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#firebase Client#firebase}
  */
  readonly firebase?: ClientAddonsFirebase;
  /**
  * layer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#layer Client#layer}
  */
  readonly layer?: ClientAddonsLayer;
  /**
  * mscrm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#mscrm Client#mscrm}
  */
  readonly mscrm?: ClientAddonsMscrm;
  /**
  * newrelic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#newrelic Client#newrelic}
  */
  readonly newrelic?: ClientAddonsNewrelic;
  /**
  * office365 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#office365 Client#office365}
  */
  readonly office365?: ClientAddonsOffice365;
  /**
  * rms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#rms Client#rms}
  */
  readonly rms?: ClientAddonsRms;
  /**
  * salesforce block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#salesforce Client#salesforce}
  */
  readonly salesforce?: ClientAddonsSalesforce;
  /**
  * salesforce_api block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#salesforce_api Client#salesforce_api}
  */
  readonly salesforceApi?: ClientAddonsSalesforceApi;
  /**
  * salesforce_sandbox_api block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#salesforce_sandbox_api Client#salesforce_sandbox_api}
  */
  readonly salesforceSandboxApi?: ClientAddonsSalesforceSandboxApi;
  /**
  * samlp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#samlp Client#samlp}
  */
  readonly samlp?: ClientAddonsSamlp;
  /**
  * sap_api block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#sap_api Client#sap_api}
  */
  readonly sapApi?: ClientAddonsSapApi;
  /**
  * sentry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#sentry Client#sentry}
  */
  readonly sentry?: ClientAddonsSentry;
  /**
  * sharepoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#sharepoint Client#sharepoint}
  */
  readonly sharepoint?: ClientAddonsSharepoint;
  /**
  * slack block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#slack Client#slack}
  */
  readonly slack?: ClientAddonsSlack;
  /**
  * springcm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#springcm Client#springcm}
  */
  readonly springcm?: ClientAddonsSpringcm;
  /**
  * sso_integration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#sso_integration Client#sso_integration}
  */
  readonly ssoIntegration?: ClientAddonsSsoIntegration;
  /**
  * wams block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#wams Client#wams}
  */
  readonly wams?: ClientAddonsWams;
  /**
  * wsfed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#wsfed Client#wsfed}
  */
  readonly wsfed?: ClientAddonsWsfed;
  /**
  * zendesk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#zendesk Client#zendesk}
  */
  readonly zendesk?: ClientAddonsZendesk;
  /**
  * zoom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#zoom Client#zoom}
  */
  readonly zoom?: ClientAddonsZoom;
}

export function clientAddonsToTerraform(struct?: ClientAddonsOutputReference | ClientAddons): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws: clientAddonsAwsToTerraform(struct!.aws),
    azure_blob: clientAddonsAzureBlobToTerraform(struct!.azureBlob),
    azure_sb: clientAddonsAzureSbToTerraform(struct!.azureSb),
    box: clientAddonsBoxToTerraform(struct!.box),
    cloudbees: clientAddonsCloudbeesToTerraform(struct!.cloudbees),
    concur: clientAddonsConcurToTerraform(struct!.concur),
    dropbox: clientAddonsDropboxToTerraform(struct!.dropbox),
    echosign: clientAddonsEchosignToTerraform(struct!.echosign),
    egnyte: clientAddonsEgnyteToTerraform(struct!.egnyte),
    firebase: clientAddonsFirebaseToTerraform(struct!.firebase),
    layer: clientAddonsLayerToTerraform(struct!.layer),
    mscrm: clientAddonsMscrmToTerraform(struct!.mscrm),
    newrelic: clientAddonsNewrelicToTerraform(struct!.newrelic),
    office365: clientAddonsOffice365ToTerraform(struct!.office365),
    rms: clientAddonsRmsToTerraform(struct!.rms),
    salesforce: clientAddonsSalesforceToTerraform(struct!.salesforce),
    salesforce_api: clientAddonsSalesforceApiToTerraform(struct!.salesforceApi),
    salesforce_sandbox_api: clientAddonsSalesforceSandboxApiToTerraform(struct!.salesforceSandboxApi),
    samlp: clientAddonsSamlpToTerraform(struct!.samlp),
    sap_api: clientAddonsSapApiToTerraform(struct!.sapApi),
    sentry: clientAddonsSentryToTerraform(struct!.sentry),
    sharepoint: clientAddonsSharepointToTerraform(struct!.sharepoint),
    slack: clientAddonsSlackToTerraform(struct!.slack),
    springcm: clientAddonsSpringcmToTerraform(struct!.springcm),
    sso_integration: clientAddonsSsoIntegrationToTerraform(struct!.ssoIntegration),
    wams: clientAddonsWamsToTerraform(struct!.wams),
    wsfed: clientAddonsWsfedToTerraform(struct!.wsfed),
    zendesk: clientAddonsZendeskToTerraform(struct!.zendesk),
    zoom: clientAddonsZoomToTerraform(struct!.zoom),
  }
}


export function clientAddonsToHclTerraform(struct?: ClientAddonsOutputReference | ClientAddons): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws: {
      value: clientAddonsAwsToHclTerraform(struct!.aws),
      isBlock: true,
      type: "list",
      storageClassType: "ClientAddonsAwsList",
    },
    azure_blob: {
      value: clientAddonsAzureBlobToHclTerraform(struct!.azureBlob),
      isBlock: true,
      type: "list",
      storageClassType: "ClientAddonsAzureBlobList",
    },
    azure_sb: {
      value: clientAddonsAzureSbToHclTerraform(struct!.azureSb),
      isBlock: true,
      type: "list",
      storageClassType: "ClientAddonsAzureSbList",
    },
    box: {
      value: clientAddonsBoxToHclTerraform(struct!.box),
      isBlock: true,
      type: "list",
      storageClassType: "ClientAddonsBoxList",
    },
    cloudbees: {
      value: clientAddonsCloudbeesToHclTerraform(struct!.cloudbees),
      isBlock: true,
      type: "list",
      storageClassType: "ClientAddonsCloudbeesList",
    },
    concur: {
      value: clientAddonsConcurToHclTerraform(struct!.concur),
      isBlock: true,
      type: "list",
      storageClassType: "ClientAddonsConcurList",
    },
    dropbox: {
      value: clientAddonsDropboxToHclTerraform(struct!.dropbox),
      isBlock: true,
      type: "list",
      storageClassType: "ClientAddonsDropboxList",
    },
    echosign: {
      value: clientAddonsEchosignToHclTerraform(struct!.echosign),
      isBlock: true,
      type: "list",
      storageClassType: "ClientAddonsEchosignList",
    },
    egnyte: {
      value: clientAddonsEgnyteToHclTerraform(struct!.egnyte),
      isBlock: true,
      type: "list",
      storageClassType: "ClientAddonsEgnyteList",
    },
    firebase: {
      value: clientAddonsFirebaseToHclTerraform(struct!.firebase),
      isBlock: true,
      type: "list",
      storageClassType: "ClientAddonsFirebaseList",
    },
    layer: {
      value: clientAddonsLayerToHclTerraform(struct!.layer),
      isBlock: true,
      type: "list",
      storageClassType: "ClientAddonsLayerList",
    },
    mscrm: {
      value: clientAddonsMscrmToHclTerraform(struct!.mscrm),
      isBlock: true,
      type: "list",
      storageClassType: "ClientAddonsMscrmList",
    },
    newrelic: {
      value: clientAddonsNewrelicToHclTerraform(struct!.newrelic),
      isBlock: true,
      type: "list",
      storageClassType: "ClientAddonsNewrelicList",
    },
    office365: {
      value: clientAddonsOffice365ToHclTerraform(struct!.office365),
      isBlock: true,
      type: "list",
      storageClassType: "ClientAddonsOffice365List",
    },
    rms: {
      value: clientAddonsRmsToHclTerraform(struct!.rms),
      isBlock: true,
      type: "list",
      storageClassType: "ClientAddonsRmsList",
    },
    salesforce: {
      value: clientAddonsSalesforceToHclTerraform(struct!.salesforce),
      isBlock: true,
      type: "list",
      storageClassType: "ClientAddonsSalesforceList",
    },
    salesforce_api: {
      value: clientAddonsSalesforceApiToHclTerraform(struct!.salesforceApi),
      isBlock: true,
      type: "list",
      storageClassType: "ClientAddonsSalesforceApiList",
    },
    salesforce_sandbox_api: {
      value: clientAddonsSalesforceSandboxApiToHclTerraform(struct!.salesforceSandboxApi),
      isBlock: true,
      type: "list",
      storageClassType: "ClientAddonsSalesforceSandboxApiList",
    },
    samlp: {
      value: clientAddonsSamlpToHclTerraform(struct!.samlp),
      isBlock: true,
      type: "list",
      storageClassType: "ClientAddonsSamlpList",
    },
    sap_api: {
      value: clientAddonsSapApiToHclTerraform(struct!.sapApi),
      isBlock: true,
      type: "list",
      storageClassType: "ClientAddonsSapApiList",
    },
    sentry: {
      value: clientAddonsSentryToHclTerraform(struct!.sentry),
      isBlock: true,
      type: "list",
      storageClassType: "ClientAddonsSentryList",
    },
    sharepoint: {
      value: clientAddonsSharepointToHclTerraform(struct!.sharepoint),
      isBlock: true,
      type: "list",
      storageClassType: "ClientAddonsSharepointList",
    },
    slack: {
      value: clientAddonsSlackToHclTerraform(struct!.slack),
      isBlock: true,
      type: "list",
      storageClassType: "ClientAddonsSlackList",
    },
    springcm: {
      value: clientAddonsSpringcmToHclTerraform(struct!.springcm),
      isBlock: true,
      type: "list",
      storageClassType: "ClientAddonsSpringcmList",
    },
    sso_integration: {
      value: clientAddonsSsoIntegrationToHclTerraform(struct!.ssoIntegration),
      isBlock: true,
      type: "list",
      storageClassType: "ClientAddonsSsoIntegrationList",
    },
    wams: {
      value: clientAddonsWamsToHclTerraform(struct!.wams),
      isBlock: true,
      type: "list",
      storageClassType: "ClientAddonsWamsList",
    },
    wsfed: {
      value: clientAddonsWsfedToHclTerraform(struct!.wsfed),
      isBlock: true,
      type: "list",
      storageClassType: "ClientAddonsWsfedList",
    },
    zendesk: {
      value: clientAddonsZendeskToHclTerraform(struct!.zendesk),
      isBlock: true,
      type: "list",
      storageClassType: "ClientAddonsZendeskList",
    },
    zoom: {
      value: clientAddonsZoomToHclTerraform(struct!.zoom),
      isBlock: true,
      type: "list",
      storageClassType: "ClientAddonsZoomList",
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
    if (this._aws?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aws = this._aws?.internalValue;
    }
    if (this._azureBlob?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureBlob = this._azureBlob?.internalValue;
    }
    if (this._azureSb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureSb = this._azureSb?.internalValue;
    }
    if (this._box?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.box = this._box?.internalValue;
    }
    if (this._cloudbees?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudbees = this._cloudbees?.internalValue;
    }
    if (this._concur?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.concur = this._concur?.internalValue;
    }
    if (this._dropbox?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropbox = this._dropbox?.internalValue;
    }
    if (this._echosign?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.echosign = this._echosign?.internalValue;
    }
    if (this._egnyte?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.egnyte = this._egnyte?.internalValue;
    }
    if (this._firebase?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.firebase = this._firebase?.internalValue;
    }
    if (this._layer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.layer = this._layer?.internalValue;
    }
    if (this._mscrm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mscrm = this._mscrm?.internalValue;
    }
    if (this._newrelic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newrelic = this._newrelic?.internalValue;
    }
    if (this._office365?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.office365 = this._office365?.internalValue;
    }
    if (this._rms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rms = this._rms?.internalValue;
    }
    if (this._salesforce?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.salesforce = this._salesforce?.internalValue;
    }
    if (this._salesforceApi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.salesforceApi = this._salesforceApi?.internalValue;
    }
    if (this._salesforceSandboxApi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.salesforceSandboxApi = this._salesforceSandboxApi?.internalValue;
    }
    if (this._samlp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samlp = this._samlp?.internalValue;
    }
    if (this._sapApi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sapApi = this._sapApi?.internalValue;
    }
    if (this._sentry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sentry = this._sentry?.internalValue;
    }
    if (this._sharepoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharepoint = this._sharepoint?.internalValue;
    }
    if (this._slack?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slack = this._slack?.internalValue;
    }
    if (this._springcm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.springcm = this._springcm?.internalValue;
    }
    if (this._ssoIntegration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssoIntegration = this._ssoIntegration?.internalValue;
    }
    if (this._wams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wams = this._wams?.internalValue;
    }
    if (this._wsfed?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wsfed = this._wsfed?.internalValue;
    }
    if (this._zendesk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zendesk = this._zendesk?.internalValue;
    }
    if (this._zoom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoom = this._zoom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientAddons | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aws.internalValue = undefined;
      this._azureBlob.internalValue = undefined;
      this._azureSb.internalValue = undefined;
      this._box.internalValue = undefined;
      this._cloudbees.internalValue = undefined;
      this._concur.internalValue = undefined;
      this._dropbox.internalValue = undefined;
      this._echosign.internalValue = undefined;
      this._egnyte.internalValue = undefined;
      this._firebase.internalValue = undefined;
      this._layer.internalValue = undefined;
      this._mscrm.internalValue = undefined;
      this._newrelic.internalValue = undefined;
      this._office365.internalValue = undefined;
      this._rms.internalValue = undefined;
      this._salesforce.internalValue = undefined;
      this._salesforceApi.internalValue = undefined;
      this._salesforceSandboxApi.internalValue = undefined;
      this._samlp.internalValue = undefined;
      this._sapApi.internalValue = undefined;
      this._sentry.internalValue = undefined;
      this._sharepoint.internalValue = undefined;
      this._slack.internalValue = undefined;
      this._springcm.internalValue = undefined;
      this._ssoIntegration.internalValue = undefined;
      this._wams.internalValue = undefined;
      this._wsfed.internalValue = undefined;
      this._zendesk.internalValue = undefined;
      this._zoom.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aws.internalValue = value.aws;
      this._azureBlob.internalValue = value.azureBlob;
      this._azureSb.internalValue = value.azureSb;
      this._box.internalValue = value.box;
      this._cloudbees.internalValue = value.cloudbees;
      this._concur.internalValue = value.concur;
      this._dropbox.internalValue = value.dropbox;
      this._echosign.internalValue = value.echosign;
      this._egnyte.internalValue = value.egnyte;
      this._firebase.internalValue = value.firebase;
      this._layer.internalValue = value.layer;
      this._mscrm.internalValue = value.mscrm;
      this._newrelic.internalValue = value.newrelic;
      this._office365.internalValue = value.office365;
      this._rms.internalValue = value.rms;
      this._salesforce.internalValue = value.salesforce;
      this._salesforceApi.internalValue = value.salesforceApi;
      this._salesforceSandboxApi.internalValue = value.salesforceSandboxApi;
      this._samlp.internalValue = value.samlp;
      this._sapApi.internalValue = value.sapApi;
      this._sentry.internalValue = value.sentry;
      this._sharepoint.internalValue = value.sharepoint;
      this._slack.internalValue = value.slack;
      this._springcm.internalValue = value.springcm;
      this._ssoIntegration.internalValue = value.ssoIntegration;
      this._wams.internalValue = value.wams;
      this._wsfed.internalValue = value.wsfed;
      this._zendesk.internalValue = value.zendesk;
      this._zoom.internalValue = value.zoom;
    }
  }

  // aws - computed: false, optional: true, required: false
  private _aws = new ClientAddonsAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: ClientAddonsAws) {
    this._aws.internalValue = value;
  }
  public resetAws() {
    this._aws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws.internalValue;
  }

  // azure_blob - computed: false, optional: true, required: false
  private _azureBlob = new ClientAddonsAzureBlobOutputReference(this, "azure_blob");
  public get azureBlob() {
    return this._azureBlob;
  }
  public putAzureBlob(value: ClientAddonsAzureBlob) {
    this._azureBlob.internalValue = value;
  }
  public resetAzureBlob() {
    this._azureBlob.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureBlobInput() {
    return this._azureBlob.internalValue;
  }

  // azure_sb - computed: false, optional: true, required: false
  private _azureSb = new ClientAddonsAzureSbOutputReference(this, "azure_sb");
  public get azureSb() {
    return this._azureSb;
  }
  public putAzureSb(value: ClientAddonsAzureSb) {
    this._azureSb.internalValue = value;
  }
  public resetAzureSb() {
    this._azureSb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureSbInput() {
    return this._azureSb.internalValue;
  }

  // box - computed: false, optional: true, required: false
  private _box = new ClientAddonsBoxOutputReference(this, "box");
  public get box() {
    return this._box;
  }
  public putBox(value: ClientAddonsBox) {
    this._box.internalValue = value;
  }
  public resetBox() {
    this._box.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boxInput() {
    return this._box.internalValue;
  }

  // cloudbees - computed: false, optional: true, required: false
  private _cloudbees = new ClientAddonsCloudbeesOutputReference(this, "cloudbees");
  public get cloudbees() {
    return this._cloudbees;
  }
  public putCloudbees(value: ClientAddonsCloudbees) {
    this._cloudbees.internalValue = value;
  }
  public resetCloudbees() {
    this._cloudbees.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudbeesInput() {
    return this._cloudbees.internalValue;
  }

  // concur - computed: false, optional: true, required: false
  private _concur = new ClientAddonsConcurOutputReference(this, "concur");
  public get concur() {
    return this._concur;
  }
  public putConcur(value: ClientAddonsConcur) {
    this._concur.internalValue = value;
  }
  public resetConcur() {
    this._concur.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurInput() {
    return this._concur.internalValue;
  }

  // dropbox - computed: false, optional: true, required: false
  private _dropbox = new ClientAddonsDropboxOutputReference(this, "dropbox");
  public get dropbox() {
    return this._dropbox;
  }
  public putDropbox(value: ClientAddonsDropbox) {
    this._dropbox.internalValue = value;
  }
  public resetDropbox() {
    this._dropbox.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropboxInput() {
    return this._dropbox.internalValue;
  }

  // echosign - computed: false, optional: true, required: false
  private _echosign = new ClientAddonsEchosignOutputReference(this, "echosign");
  public get echosign() {
    return this._echosign;
  }
  public putEchosign(value: ClientAddonsEchosign) {
    this._echosign.internalValue = value;
  }
  public resetEchosign() {
    this._echosign.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get echosignInput() {
    return this._echosign.internalValue;
  }

  // egnyte - computed: false, optional: true, required: false
  private _egnyte = new ClientAddonsEgnyteOutputReference(this, "egnyte");
  public get egnyte() {
    return this._egnyte;
  }
  public putEgnyte(value: ClientAddonsEgnyte) {
    this._egnyte.internalValue = value;
  }
  public resetEgnyte() {
    this._egnyte.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egnyteInput() {
    return this._egnyte.internalValue;
  }

  // firebase - computed: false, optional: true, required: false
  private _firebase = new ClientAddonsFirebaseOutputReference(this, "firebase");
  public get firebase() {
    return this._firebase;
  }
  public putFirebase(value: ClientAddonsFirebase) {
    this._firebase.internalValue = value;
  }
  public resetFirebase() {
    this._firebase.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firebaseInput() {
    return this._firebase.internalValue;
  }

  // layer - computed: false, optional: true, required: false
  private _layer = new ClientAddonsLayerOutputReference(this, "layer");
  public get layer() {
    return this._layer;
  }
  public putLayer(value: ClientAddonsLayer) {
    this._layer.internalValue = value;
  }
  public resetLayer() {
    this._layer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layerInput() {
    return this._layer.internalValue;
  }

  // mscrm - computed: false, optional: true, required: false
  private _mscrm = new ClientAddonsMscrmOutputReference(this, "mscrm");
  public get mscrm() {
    return this._mscrm;
  }
  public putMscrm(value: ClientAddonsMscrm) {
    this._mscrm.internalValue = value;
  }
  public resetMscrm() {
    this._mscrm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mscrmInput() {
    return this._mscrm.internalValue;
  }

  // newrelic - computed: false, optional: true, required: false
  private _newrelic = new ClientAddonsNewrelicOutputReference(this, "newrelic");
  public get newrelic() {
    return this._newrelic;
  }
  public putNewrelic(value: ClientAddonsNewrelic) {
    this._newrelic.internalValue = value;
  }
  public resetNewrelic() {
    this._newrelic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newrelicInput() {
    return this._newrelic.internalValue;
  }

  // office365 - computed: false, optional: true, required: false
  private _office365 = new ClientAddonsOffice365OutputReference(this, "office365");
  public get office365() {
    return this._office365;
  }
  public putOffice365(value: ClientAddonsOffice365) {
    this._office365.internalValue = value;
  }
  public resetOffice365() {
    this._office365.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get office365Input() {
    return this._office365.internalValue;
  }

  // rms - computed: false, optional: true, required: false
  private _rms = new ClientAddonsRmsOutputReference(this, "rms");
  public get rms() {
    return this._rms;
  }
  public putRms(value: ClientAddonsRms) {
    this._rms.internalValue = value;
  }
  public resetRms() {
    this._rms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rmsInput() {
    return this._rms.internalValue;
  }

  // salesforce - computed: false, optional: true, required: false
  private _salesforce = new ClientAddonsSalesforceOutputReference(this, "salesforce");
  public get salesforce() {
    return this._salesforce;
  }
  public putSalesforce(value: ClientAddonsSalesforce) {
    this._salesforce.internalValue = value;
  }
  public resetSalesforce() {
    this._salesforce.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get salesforceInput() {
    return this._salesforce.internalValue;
  }

  // salesforce_api - computed: false, optional: true, required: false
  private _salesforceApi = new ClientAddonsSalesforceApiOutputReference(this, "salesforce_api");
  public get salesforceApi() {
    return this._salesforceApi;
  }
  public putSalesforceApi(value: ClientAddonsSalesforceApi) {
    this._salesforceApi.internalValue = value;
  }
  public resetSalesforceApi() {
    this._salesforceApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get salesforceApiInput() {
    return this._salesforceApi.internalValue;
  }

  // salesforce_sandbox_api - computed: false, optional: true, required: false
  private _salesforceSandboxApi = new ClientAddonsSalesforceSandboxApiOutputReference(this, "salesforce_sandbox_api");
  public get salesforceSandboxApi() {
    return this._salesforceSandboxApi;
  }
  public putSalesforceSandboxApi(value: ClientAddonsSalesforceSandboxApi) {
    this._salesforceSandboxApi.internalValue = value;
  }
  public resetSalesforceSandboxApi() {
    this._salesforceSandboxApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get salesforceSandboxApiInput() {
    return this._salesforceSandboxApi.internalValue;
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

  // sap_api - computed: false, optional: true, required: false
  private _sapApi = new ClientAddonsSapApiOutputReference(this, "sap_api");
  public get sapApi() {
    return this._sapApi;
  }
  public putSapApi(value: ClientAddonsSapApi) {
    this._sapApi.internalValue = value;
  }
  public resetSapApi() {
    this._sapApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sapApiInput() {
    return this._sapApi.internalValue;
  }

  // sentry - computed: false, optional: true, required: false
  private _sentry = new ClientAddonsSentryOutputReference(this, "sentry");
  public get sentry() {
    return this._sentry;
  }
  public putSentry(value: ClientAddonsSentry) {
    this._sentry.internalValue = value;
  }
  public resetSentry() {
    this._sentry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentryInput() {
    return this._sentry.internalValue;
  }

  // sharepoint - computed: false, optional: true, required: false
  private _sharepoint = new ClientAddonsSharepointOutputReference(this, "sharepoint");
  public get sharepoint() {
    return this._sharepoint;
  }
  public putSharepoint(value: ClientAddonsSharepoint) {
    this._sharepoint.internalValue = value;
  }
  public resetSharepoint() {
    this._sharepoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharepointInput() {
    return this._sharepoint.internalValue;
  }

  // slack - computed: false, optional: true, required: false
  private _slack = new ClientAddonsSlackOutputReference(this, "slack");
  public get slack() {
    return this._slack;
  }
  public putSlack(value: ClientAddonsSlack) {
    this._slack.internalValue = value;
  }
  public resetSlack() {
    this._slack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackInput() {
    return this._slack.internalValue;
  }

  // springcm - computed: false, optional: true, required: false
  private _springcm = new ClientAddonsSpringcmOutputReference(this, "springcm");
  public get springcm() {
    return this._springcm;
  }
  public putSpringcm(value: ClientAddonsSpringcm) {
    this._springcm.internalValue = value;
  }
  public resetSpringcm() {
    this._springcm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get springcmInput() {
    return this._springcm.internalValue;
  }

  // sso_integration - computed: false, optional: true, required: false
  private _ssoIntegration = new ClientAddonsSsoIntegrationOutputReference(this, "sso_integration");
  public get ssoIntegration() {
    return this._ssoIntegration;
  }
  public putSsoIntegration(value: ClientAddonsSsoIntegration) {
    this._ssoIntegration.internalValue = value;
  }
  public resetSsoIntegration() {
    this._ssoIntegration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoIntegrationInput() {
    return this._ssoIntegration.internalValue;
  }

  // wams - computed: false, optional: true, required: false
  private _wams = new ClientAddonsWamsOutputReference(this, "wams");
  public get wams() {
    return this._wams;
  }
  public putWams(value: ClientAddonsWams) {
    this._wams.internalValue = value;
  }
  public resetWams() {
    this._wams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wamsInput() {
    return this._wams.internalValue;
  }

  // wsfed - computed: false, optional: true, required: false
  private _wsfed = new ClientAddonsWsfedOutputReference(this, "wsfed");
  public get wsfed() {
    return this._wsfed;
  }
  public putWsfed(value: ClientAddonsWsfed) {
    this._wsfed.internalValue = value;
  }
  public resetWsfed() {
    this._wsfed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wsfedInput() {
    return this._wsfed.internalValue;
  }

  // zendesk - computed: false, optional: true, required: false
  private _zendesk = new ClientAddonsZendeskOutputReference(this, "zendesk");
  public get zendesk() {
    return this._zendesk;
  }
  public putZendesk(value: ClientAddonsZendesk) {
    this._zendesk.internalValue = value;
  }
  public resetZendesk() {
    this._zendesk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zendeskInput() {
    return this._zendesk.internalValue;
  }

  // zoom - computed: false, optional: true, required: false
  private _zoom = new ClientAddonsZoomOutputReference(this, "zoom");
  public get zoom() {
    return this._zoom;
  }
  public putZoom(value: ClientAddonsZoom) {
    this._zoom.internalValue = value;
  }
  public resetZoom() {
    this._zoom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoomInput() {
    return this._zoom.internalValue;
  }
}
export interface ClientDefaultOrganization {
  /**
  * If set, the `default_organization` will be removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#disable Client#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Definition of the flow that needs to be configured. Eg. client_credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#flows Client#flows}
  */
  readonly flows?: string[];
  /**
  * The unique identifier of the organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#organization_id Client#organization_id}
  */
  readonly organizationId?: string;
}

export function clientDefaultOrganizationToTerraform(struct?: ClientDefaultOrganizationOutputReference | ClientDefaultOrganization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.booleanToTerraform(struct!.disable),
    flows: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.flows),
    organization_id: cdktf.stringToTerraform(struct!.organizationId),
  }
}


export function clientDefaultOrganizationToHclTerraform(struct?: ClientDefaultOrganizationOutputReference | ClientDefaultOrganization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    flows: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.flows),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    organization_id: {
      value: cdktf.stringToHclTerraform(struct!.organizationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientDefaultOrganizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientDefaultOrganization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._flows !== undefined) {
      hasAnyValues = true;
      internalValueResult.flows = this._flows;
    }
    if (this._organizationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationId = this._organizationId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientDefaultOrganization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disable = undefined;
      this._flows = undefined;
      this._organizationId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disable = value.disable;
      this._flows = value.flows;
      this._organizationId = value.organizationId;
    }
  }

  // disable - computed: true, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // flows - computed: true, optional: true, required: false
  private _flows?: string[]; 
  public get flows() {
    return this.getListAttribute('flows');
  }
  public set flows(value: string[]) {
    this._flows = value;
  }
  public resetFlows() {
    this._flows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowsInput() {
    return this._flows;
  }

  // organization_id - computed: true, optional: true, required: false
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  public resetOrganizationId() {
    this._organizationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }
}
export interface ClientExpressConfigurationLinkedClients {
  /**
  * The ID of the linked client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#client_id Client#client_id}
  */
  readonly clientId?: string;
}

export function clientExpressConfigurationLinkedClientsToTerraform(struct?: ClientExpressConfigurationLinkedClients | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
  }
}


export function clientExpressConfigurationLinkedClientsToHclTerraform(struct?: ClientExpressConfigurationLinkedClients | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientExpressConfigurationLinkedClientsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientExpressConfigurationLinkedClients | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientExpressConfigurationLinkedClients | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
    }
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
}

export class ClientExpressConfigurationLinkedClientsList extends cdktf.ComplexList {
  public internalValue? : ClientExpressConfigurationLinkedClients[] | cdktf.IResolvable

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
  public get(index: number): ClientExpressConfigurationLinkedClientsOutputReference {
    return new ClientExpressConfigurationLinkedClientsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientExpressConfiguration {
  /**
  * The domain that admins are expected to log in via for authenticating for express configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#admin_login_domain Client#admin_login_domain}
  */
  readonly adminLoginDomain?: string;
  /**
  * The ID of the connection profile to use for this application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#connection_profile_id Client#connection_profile_id}
  */
  readonly connectionProfileId?: string;
  /**
  * When true, all connections made via express configuration will be enabled for this application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#enable_client Client#enable_client}
  */
  readonly enableClient?: boolean | cdktf.IResolvable;
  /**
  * When true, all connections made via express configuration will have the associated organization enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#enable_organization Client#enable_organization}
  */
  readonly enableOrganization?: boolean | cdktf.IResolvable;
  /**
  * The URI users should bookmark to log in to this application. Variable substitution is permitted for: organization_name, organization_id, and connection_name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#initiate_login_uri_template Client#initiate_login_uri_template}
  */
  readonly initiateLoginUriTemplate?: string;
  /**
  * The unique identifier for the Okta OIN Express Configuration Client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#okta_oin_client_id Client#okta_oin_client_id}
  */
  readonly oktaOinClientId?: string;
  /**
  * The ID of the user attribute profile to use for this application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#user_attribute_profile_id Client#user_attribute_profile_id}
  */
  readonly userAttributeProfileId?: string;
  /**
  * linked_clients block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#linked_clients Client#linked_clients}
  */
  readonly linkedClients?: ClientExpressConfigurationLinkedClients[] | cdktf.IResolvable;
}

export function clientExpressConfigurationToTerraform(struct?: ClientExpressConfigurationOutputReference | ClientExpressConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_login_domain: cdktf.stringToTerraform(struct!.adminLoginDomain),
    connection_profile_id: cdktf.stringToTerraform(struct!.connectionProfileId),
    enable_client: cdktf.booleanToTerraform(struct!.enableClient),
    enable_organization: cdktf.booleanToTerraform(struct!.enableOrganization),
    initiate_login_uri_template: cdktf.stringToTerraform(struct!.initiateLoginUriTemplate),
    okta_oin_client_id: cdktf.stringToTerraform(struct!.oktaOinClientId),
    user_attribute_profile_id: cdktf.stringToTerraform(struct!.userAttributeProfileId),
    linked_clients: cdktf.listMapper(clientExpressConfigurationLinkedClientsToTerraform, true)(struct!.linkedClients),
  }
}


export function clientExpressConfigurationToHclTerraform(struct?: ClientExpressConfigurationOutputReference | ClientExpressConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_login_domain: {
      value: cdktf.stringToHclTerraform(struct!.adminLoginDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_profile_id: {
      value: cdktf.stringToHclTerraform(struct!.connectionProfileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_client: {
      value: cdktf.booleanToHclTerraform(struct!.enableClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_organization: {
      value: cdktf.booleanToHclTerraform(struct!.enableOrganization),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    initiate_login_uri_template: {
      value: cdktf.stringToHclTerraform(struct!.initiateLoginUriTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    okta_oin_client_id: {
      value: cdktf.stringToHclTerraform(struct!.oktaOinClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_attribute_profile_id: {
      value: cdktf.stringToHclTerraform(struct!.userAttributeProfileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    linked_clients: {
      value: cdktf.listMapperHcl(clientExpressConfigurationLinkedClientsToHclTerraform, true)(struct!.linkedClients),
      isBlock: true,
      type: "list",
      storageClassType: "ClientExpressConfigurationLinkedClientsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientExpressConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientExpressConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminLoginDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminLoginDomain = this._adminLoginDomain;
    }
    if (this._connectionProfileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionProfileId = this._connectionProfileId;
    }
    if (this._enableClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableClient = this._enableClient;
    }
    if (this._enableOrganization !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableOrganization = this._enableOrganization;
    }
    if (this._initiateLoginUriTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.initiateLoginUriTemplate = this._initiateLoginUriTemplate;
    }
    if (this._oktaOinClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.oktaOinClientId = this._oktaOinClientId;
    }
    if (this._userAttributeProfileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAttributeProfileId = this._userAttributeProfileId;
    }
    if (this._linkedClients?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkedClients = this._linkedClients?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientExpressConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminLoginDomain = undefined;
      this._connectionProfileId = undefined;
      this._enableClient = undefined;
      this._enableOrganization = undefined;
      this._initiateLoginUriTemplate = undefined;
      this._oktaOinClientId = undefined;
      this._userAttributeProfileId = undefined;
      this._linkedClients.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminLoginDomain = value.adminLoginDomain;
      this._connectionProfileId = value.connectionProfileId;
      this._enableClient = value.enableClient;
      this._enableOrganization = value.enableOrganization;
      this._initiateLoginUriTemplate = value.initiateLoginUriTemplate;
      this._oktaOinClientId = value.oktaOinClientId;
      this._userAttributeProfileId = value.userAttributeProfileId;
      this._linkedClients.internalValue = value.linkedClients;
    }
  }

  // admin_login_domain - computed: false, optional: true, required: false
  private _adminLoginDomain?: string; 
  public get adminLoginDomain() {
    return this.getStringAttribute('admin_login_domain');
  }
  public set adminLoginDomain(value: string) {
    this._adminLoginDomain = value;
  }
  public resetAdminLoginDomain() {
    this._adminLoginDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminLoginDomainInput() {
    return this._adminLoginDomain;
  }

  // connection_profile_id - computed: false, optional: true, required: false
  private _connectionProfileId?: string; 
  public get connectionProfileId() {
    return this.getStringAttribute('connection_profile_id');
  }
  public set connectionProfileId(value: string) {
    this._connectionProfileId = value;
  }
  public resetConnectionProfileId() {
    this._connectionProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionProfileIdInput() {
    return this._connectionProfileId;
  }

  // enable_client - computed: false, optional: true, required: false
  private _enableClient?: boolean | cdktf.IResolvable; 
  public get enableClient() {
    return this.getBooleanAttribute('enable_client');
  }
  public set enableClient(value: boolean | cdktf.IResolvable) {
    this._enableClient = value;
  }
  public resetEnableClient() {
    this._enableClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableClientInput() {
    return this._enableClient;
  }

  // enable_organization - computed: false, optional: true, required: false
  private _enableOrganization?: boolean | cdktf.IResolvable; 
  public get enableOrganization() {
    return this.getBooleanAttribute('enable_organization');
  }
  public set enableOrganization(value: boolean | cdktf.IResolvable) {
    this._enableOrganization = value;
  }
  public resetEnableOrganization() {
    this._enableOrganization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOrganizationInput() {
    return this._enableOrganization;
  }

  // initiate_login_uri_template - computed: false, optional: true, required: false
  private _initiateLoginUriTemplate?: string; 
  public get initiateLoginUriTemplate() {
    return this.getStringAttribute('initiate_login_uri_template');
  }
  public set initiateLoginUriTemplate(value: string) {
    this._initiateLoginUriTemplate = value;
  }
  public resetInitiateLoginUriTemplate() {
    this._initiateLoginUriTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initiateLoginUriTemplateInput() {
    return this._initiateLoginUriTemplate;
  }

  // oin_submission_id - computed: true, optional: false, required: false
  public get oinSubmissionId() {
    return this.getStringAttribute('oin_submission_id');
  }

  // okta_oin_client_id - computed: true, optional: true, required: false
  private _oktaOinClientId?: string; 
  public get oktaOinClientId() {
    return this.getStringAttribute('okta_oin_client_id');
  }
  public set oktaOinClientId(value: string) {
    this._oktaOinClientId = value;
  }
  public resetOktaOinClientId() {
    this._oktaOinClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaOinClientIdInput() {
    return this._oktaOinClientId;
  }

  // user_attribute_profile_id - computed: false, optional: true, required: false
  private _userAttributeProfileId?: string; 
  public get userAttributeProfileId() {
    return this.getStringAttribute('user_attribute_profile_id');
  }
  public set userAttributeProfileId(value: string) {
    this._userAttributeProfileId = value;
  }
  public resetUserAttributeProfileId() {
    this._userAttributeProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAttributeProfileIdInput() {
    return this._userAttributeProfileId;
  }

  // linked_clients - computed: false, optional: true, required: false
  private _linkedClients = new ClientExpressConfigurationLinkedClientsList(this, "linked_clients", false);
  public get linkedClients() {
    return this._linkedClients;
  }
  public putLinkedClients(value: ClientExpressConfigurationLinkedClients[] | cdktf.IResolvable) {
    this._linkedClients.internalValue = value;
  }
  public resetLinkedClients() {
    this._linkedClients.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedClientsInput() {
    return this._linkedClients.internalValue;
  }
}
export interface ClientJwtConfiguration {
  /**
  * Algorithm used to sign JWTs. Can be one of `HS256`, `RS256`, `PS256`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#alg Client#alg}
  */
  readonly alg?: string;
  /**
  * Number of seconds during which the JWT will be valid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#lifetime_in_seconds Client#lifetime_in_seconds}
  */
  readonly lifetimeInSeconds?: number;
  /**
  * Permissions (scopes) included in JWTs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#scopes Client#scopes}
  */
  readonly scopes?: { [key: string]: string };
  /**
  * Indicates whether the client secret is Base64-encoded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#secret_encoded Client#secret_encoded}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#app_package_name Client#app_package_name}
  */
  readonly appPackageName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#sha256_cert_fingerprints Client#sha256_cert_fingerprints}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#app_bundle_identifier Client#app_bundle_identifier}
  */
  readonly appBundleIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#team_id Client#team_id}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#android Client#android}
  */
  readonly android?: ClientMobileAndroid;
  /**
  * ios block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#ios Client#ios}
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
export interface ClientNativeSocialLoginApple {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#enabled Client#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function clientNativeSocialLoginAppleToTerraform(struct?: ClientNativeSocialLoginAppleOutputReference | ClientNativeSocialLoginApple): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function clientNativeSocialLoginAppleToHclTerraform(struct?: ClientNativeSocialLoginAppleOutputReference | ClientNativeSocialLoginApple): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class ClientNativeSocialLoginAppleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientNativeSocialLoginApple | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientNativeSocialLoginApple | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
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
export interface ClientNativeSocialLoginFacebook {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#enabled Client#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function clientNativeSocialLoginFacebookToTerraform(struct?: ClientNativeSocialLoginFacebookOutputReference | ClientNativeSocialLoginFacebook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function clientNativeSocialLoginFacebookToHclTerraform(struct?: ClientNativeSocialLoginFacebookOutputReference | ClientNativeSocialLoginFacebook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class ClientNativeSocialLoginFacebookOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientNativeSocialLoginFacebook | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientNativeSocialLoginFacebook | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
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
export interface ClientNativeSocialLoginGoogle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#enabled Client#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function clientNativeSocialLoginGoogleToTerraform(struct?: ClientNativeSocialLoginGoogleOutputReference | ClientNativeSocialLoginGoogle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function clientNativeSocialLoginGoogleToHclTerraform(struct?: ClientNativeSocialLoginGoogleOutputReference | ClientNativeSocialLoginGoogle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class ClientNativeSocialLoginGoogleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientNativeSocialLoginGoogle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientNativeSocialLoginGoogle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
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
export interface ClientNativeSocialLogin {
  /**
  * apple block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#apple Client#apple}
  */
  readonly apple?: ClientNativeSocialLoginApple;
  /**
  * facebook block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#facebook Client#facebook}
  */
  readonly facebook?: ClientNativeSocialLoginFacebook;
  /**
  * google block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#google Client#google}
  */
  readonly google?: ClientNativeSocialLoginGoogle;
}

export function clientNativeSocialLoginToTerraform(struct?: ClientNativeSocialLoginOutputReference | ClientNativeSocialLogin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apple: clientNativeSocialLoginAppleToTerraform(struct!.apple),
    facebook: clientNativeSocialLoginFacebookToTerraform(struct!.facebook),
    google: clientNativeSocialLoginGoogleToTerraform(struct!.google),
  }
}


export function clientNativeSocialLoginToHclTerraform(struct?: ClientNativeSocialLoginOutputReference | ClientNativeSocialLogin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apple: {
      value: clientNativeSocialLoginAppleToHclTerraform(struct!.apple),
      isBlock: true,
      type: "list",
      storageClassType: "ClientNativeSocialLoginAppleList",
    },
    facebook: {
      value: clientNativeSocialLoginFacebookToHclTerraform(struct!.facebook),
      isBlock: true,
      type: "list",
      storageClassType: "ClientNativeSocialLoginFacebookList",
    },
    google: {
      value: clientNativeSocialLoginGoogleToHclTerraform(struct!.google),
      isBlock: true,
      type: "list",
      storageClassType: "ClientNativeSocialLoginGoogleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientNativeSocialLoginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientNativeSocialLogin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apple?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apple = this._apple?.internalValue;
    }
    if (this._facebook?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.facebook = this._facebook?.internalValue;
    }
    if (this._google?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.google = this._google?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientNativeSocialLogin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apple.internalValue = undefined;
      this._facebook.internalValue = undefined;
      this._google.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apple.internalValue = value.apple;
      this._facebook.internalValue = value.facebook;
      this._google.internalValue = value.google;
    }
  }

  // apple - computed: false, optional: true, required: false
  private _apple = new ClientNativeSocialLoginAppleOutputReference(this, "apple");
  public get apple() {
    return this._apple;
  }
  public putApple(value: ClientNativeSocialLoginApple) {
    this._apple.internalValue = value;
  }
  public resetApple() {
    this._apple.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appleInput() {
    return this._apple.internalValue;
  }

  // facebook - computed: false, optional: true, required: false
  private _facebook = new ClientNativeSocialLoginFacebookOutputReference(this, "facebook");
  public get facebook() {
    return this._facebook;
  }
  public putFacebook(value: ClientNativeSocialLoginFacebook) {
    this._facebook.internalValue = value;
  }
  public resetFacebook() {
    this._facebook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facebookInput() {
    return this._facebook.internalValue;
  }

  // google - computed: false, optional: true, required: false
  private _google = new ClientNativeSocialLoginGoogleOutputReference(this, "google");
  public get google() {
    return this._google;
  }
  public putGoogle(value: ClientNativeSocialLoginGoogle) {
    this._google.internalValue = value;
  }
  public resetGoogle() {
    this._google.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleInput() {
    return this._google.internalValue;
  }
}
export interface ClientOidcLogoutBackchannelLogoutInitiators {
  /**
  * Determines the configuration method for enabling initiators. `custom` enables only the initiators listed in the backchannel_logout_selected_initiators set, `all` enables all current and future initiators.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#mode Client#mode}
  */
  readonly mode: string;
  /**
  * Contains the list of initiators to be enabled for the given client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#selected_initiators Client#selected_initiators}
  */
  readonly selectedInitiators?: string[];
}

export function clientOidcLogoutBackchannelLogoutInitiatorsToTerraform(struct?: ClientOidcLogoutBackchannelLogoutInitiatorsOutputReference | ClientOidcLogoutBackchannelLogoutInitiators): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    selected_initiators: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.selectedInitiators),
  }
}


export function clientOidcLogoutBackchannelLogoutInitiatorsToHclTerraform(struct?: ClientOidcLogoutBackchannelLogoutInitiatorsOutputReference | ClientOidcLogoutBackchannelLogoutInitiators): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selected_initiators: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.selectedInitiators),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientOidcLogoutBackchannelLogoutInitiatorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientOidcLogoutBackchannelLogoutInitiators | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._selectedInitiators !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedInitiators = this._selectedInitiators;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientOidcLogoutBackchannelLogoutInitiators | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._selectedInitiators = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._selectedInitiators = value.selectedInitiators;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // selected_initiators - computed: false, optional: true, required: false
  private _selectedInitiators?: string[]; 
  public get selectedInitiators() {
    return cdktf.Fn.tolist(this.getListAttribute('selected_initiators'));
  }
  public set selectedInitiators(value: string[]) {
    this._selectedInitiators = value;
  }
  public resetSelectedInitiators() {
    this._selectedInitiators = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedInitiatorsInput() {
    return this._selectedInitiators;
  }
}
export interface ClientOidcLogout {
  /**
  * Set of URLs that are valid to call back from Auth0 for OIDC backchannel logout. Currently only one URL is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#backchannel_logout_urls Client#backchannel_logout_urls}
  */
  readonly backchannelLogoutUrls: string[];
  /**
  * backchannel_logout_initiators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#backchannel_logout_initiators Client#backchannel_logout_initiators}
  */
  readonly backchannelLogoutInitiators?: ClientOidcLogoutBackchannelLogoutInitiators;
}

export function clientOidcLogoutToTerraform(struct?: ClientOidcLogoutOutputReference | ClientOidcLogout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backchannel_logout_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.backchannelLogoutUrls),
    backchannel_logout_initiators: clientOidcLogoutBackchannelLogoutInitiatorsToTerraform(struct!.backchannelLogoutInitiators),
  }
}


export function clientOidcLogoutToHclTerraform(struct?: ClientOidcLogoutOutputReference | ClientOidcLogout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backchannel_logout_urls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.backchannelLogoutUrls),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    backchannel_logout_initiators: {
      value: clientOidcLogoutBackchannelLogoutInitiatorsToHclTerraform(struct!.backchannelLogoutInitiators),
      isBlock: true,
      type: "list",
      storageClassType: "ClientOidcLogoutBackchannelLogoutInitiatorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientOidcLogoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientOidcLogout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backchannelLogoutUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.backchannelLogoutUrls = this._backchannelLogoutUrls;
    }
    if (this._backchannelLogoutInitiators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backchannelLogoutInitiators = this._backchannelLogoutInitiators?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientOidcLogout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backchannelLogoutUrls = undefined;
      this._backchannelLogoutInitiators.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backchannelLogoutUrls = value.backchannelLogoutUrls;
      this._backchannelLogoutInitiators.internalValue = value.backchannelLogoutInitiators;
    }
  }

  // backchannel_logout_urls - computed: false, optional: false, required: true
  private _backchannelLogoutUrls?: string[]; 
  public get backchannelLogoutUrls() {
    return cdktf.Fn.tolist(this.getListAttribute('backchannel_logout_urls'));
  }
  public set backchannelLogoutUrls(value: string[]) {
    this._backchannelLogoutUrls = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backchannelLogoutUrlsInput() {
    return this._backchannelLogoutUrls;
  }

  // backchannel_logout_initiators - computed: false, optional: true, required: false
  private _backchannelLogoutInitiators = new ClientOidcLogoutBackchannelLogoutInitiatorsOutputReference(this, "backchannel_logout_initiators");
  public get backchannelLogoutInitiators() {
    return this._backchannelLogoutInitiators;
  }
  public putBackchannelLogoutInitiators(value: ClientOidcLogoutBackchannelLogoutInitiators) {
    this._backchannelLogoutInitiators.internalValue = value;
  }
  public resetBackchannelLogoutInitiators() {
    this._backchannelLogoutInitiators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backchannelLogoutInitiatorsInput() {
    return this._backchannelLogoutInitiators.internalValue;
  }
}
export interface ClientRefreshTokenPolicies {
  /**
  * The identifier of the resource server to which the Multi Resource Refresh Token Policy applies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#audience Client#audience}
  */
  readonly audience: string;
  /**
  * The resource server permissions granted under the Multi Resource Refresh Token Policy, defining the context in which an access token can be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#scope Client#scope}
  */
  readonly scope: string[];
}

export function clientRefreshTokenPoliciesToTerraform(struct?: ClientRefreshTokenPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    scope: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scope),
  }
}


export function clientRefreshTokenPoliciesToHclTerraform(struct?: ClientRefreshTokenPolicies | cdktf.IResolvable): any {
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
    scope: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scope),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientRefreshTokenPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientRefreshTokenPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientRefreshTokenPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audience = undefined;
      this._scope = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audience = value.audience;
      this._scope = value.scope;
    }
  }

  // audience - computed: false, optional: false, required: true
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string[]; 
  public get scope() {
    return this.getListAttribute('scope');
  }
  public set scope(value: string[]) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}

export class ClientRefreshTokenPoliciesList extends cdktf.ComplexList {
  public internalValue? : ClientRefreshTokenPolicies[] | cdktf.IResolvable

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
  public get(index: number): ClientRefreshTokenPoliciesOutputReference {
    return new ClientRefreshTokenPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientRefreshToken {
  /**
  * Options include `expiring`, `non-expiring`. Whether a refresh token will expire based on an absolute lifetime, after which the token can no longer be used. If rotation is `rotating`, this must be set to `expiring`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#expiration_type Client#expiration_type}
  */
  readonly expirationType: string;
  /**
  * The time in seconds after which inactive refresh tokens will expire.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#idle_token_lifetime Client#idle_token_lifetime}
  */
  readonly idleTokenLifetime?: number;
  /**
  * Whether inactive refresh tokens should remain valid indefinitely.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#infinite_idle_token_lifetime Client#infinite_idle_token_lifetime}
  */
  readonly infiniteIdleTokenLifetime?: boolean | cdktf.IResolvable;
  /**
  * Whether refresh tokens should remain valid indefinitely. If false, `token_lifetime` should also be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#infinite_token_lifetime Client#infinite_token_lifetime}
  */
  readonly infiniteTokenLifetime?: boolean | cdktf.IResolvable;
  /**
  * The amount of time in seconds in which a refresh token may be reused without triggering reuse detection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#leeway Client#leeway}
  */
  readonly leeway?: number;
  /**
  * Options include `rotating`, `non-rotating`. When `rotating`, exchanging a refresh token will cause a new refresh token to be issued and the existing token will be invalidated. This allows for automatic detection of token reuse if the token is leaked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#rotation_type Client#rotation_type}
  */
  readonly rotationType: string;
  /**
  * The absolute lifetime of a refresh token in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#token_lifetime Client#token_lifetime}
  */
  readonly tokenLifetime?: number;
  /**
  * policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#policies Client#policies}
  */
  readonly policies?: ClientRefreshTokenPolicies[] | cdktf.IResolvable;
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
    policies: cdktf.listMapper(clientRefreshTokenPoliciesToTerraform, true)(struct!.policies),
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
    policies: {
      value: cdktf.listMapperHcl(clientRefreshTokenPoliciesToHclTerraform, true)(struct!.policies),
      isBlock: true,
      type: "set",
      storageClassType: "ClientRefreshTokenPoliciesList",
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
    if (this._policies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies?.internalValue;
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
      this._policies.internalValue = undefined;
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
      this._policies.internalValue = value.policies;
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

  // idle_token_lifetime - computed: true, optional: true, required: false
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

  // infinite_idle_token_lifetime - computed: true, optional: true, required: false
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

  // infinite_token_lifetime - computed: true, optional: true, required: false
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

  // leeway - computed: true, optional: true, required: false
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

  // token_lifetime - computed: true, optional: true, required: false
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

  // policies - computed: false, optional: true, required: false
  private _policies = new ClientRefreshTokenPoliciesList(this, "policies", true);
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: ClientRefreshTokenPolicies[] | cdktf.IResolvable) {
    this._policies.internalValue = value;
  }
  public resetPolicies() {
    this._policies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }
}
export interface ClientSessionTransfer {
  /**
  * Indicates whether the application is allowed to use a refresh token when using a session_transfer_token session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#allow_refresh_token Client#allow_refresh_token}
  */
  readonly allowRefreshToken?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#allowed_authentication_methods Client#allowed_authentication_methods}
  */
  readonly allowedAuthenticationMethods?: string[];
  /**
  * Indicates whether the application(Native app) can use the Token Exchange endpoint to create a session_transfer_token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#can_create_session_transfer_token Client#can_create_session_transfer_token}
  */
  readonly canCreateSessionTransferToken?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether Refresh Tokens created during a native-to-web session are tied to that session's lifetime. This determines if such refresh tokens should be automatically revoked when their corresponding sessions are.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#enforce_cascade_revocation Client#enforce_cascade_revocation}
  */
  readonly enforceCascadeRevocation?: boolean | cdktf.IResolvable;
  /**
  * Configures the level of device binding enforced when a session_transfer_token is consumed. Can be one of `ip`, `asn` or `none`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#enforce_device_binding Client#enforce_device_binding}
  */
  readonly enforceDeviceBinding?: string;
  /**
  * Indicates whether revoking the parent Refresh Token that initiated a Native to Web flow and was used to issue a Session Transfer Token should trigger a cascade revocation affecting its dependent child entities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#enforce_online_refresh_tokens Client#enforce_online_refresh_tokens}
  */
  readonly enforceOnlineRefreshTokens?: boolean | cdktf.IResolvable;
}

export function clientSessionTransferToTerraform(struct?: ClientSessionTransferOutputReference | ClientSessionTransfer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_refresh_token: cdktf.booleanToTerraform(struct!.allowRefreshToken),
    allowed_authentication_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedAuthenticationMethods),
    can_create_session_transfer_token: cdktf.booleanToTerraform(struct!.canCreateSessionTransferToken),
    enforce_cascade_revocation: cdktf.booleanToTerraform(struct!.enforceCascadeRevocation),
    enforce_device_binding: cdktf.stringToTerraform(struct!.enforceDeviceBinding),
    enforce_online_refresh_tokens: cdktf.booleanToTerraform(struct!.enforceOnlineRefreshTokens),
  }
}


export function clientSessionTransferToHclTerraform(struct?: ClientSessionTransferOutputReference | ClientSessionTransfer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_refresh_token: {
      value: cdktf.booleanToHclTerraform(struct!.allowRefreshToken),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allowed_authentication_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedAuthenticationMethods),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    can_create_session_transfer_token: {
      value: cdktf.booleanToHclTerraform(struct!.canCreateSessionTransferToken),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enforce_cascade_revocation: {
      value: cdktf.booleanToHclTerraform(struct!.enforceCascadeRevocation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enforce_device_binding: {
      value: cdktf.stringToHclTerraform(struct!.enforceDeviceBinding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enforce_online_refresh_tokens: {
      value: cdktf.booleanToHclTerraform(struct!.enforceOnlineRefreshTokens),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientSessionTransferOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientSessionTransfer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowRefreshToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRefreshToken = this._allowRefreshToken;
    }
    if (this._allowedAuthenticationMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedAuthenticationMethods = this._allowedAuthenticationMethods;
    }
    if (this._canCreateSessionTransferToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.canCreateSessionTransferToken = this._canCreateSessionTransferToken;
    }
    if (this._enforceCascadeRevocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceCascadeRevocation = this._enforceCascadeRevocation;
    }
    if (this._enforceDeviceBinding !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceDeviceBinding = this._enforceDeviceBinding;
    }
    if (this._enforceOnlineRefreshTokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceOnlineRefreshTokens = this._enforceOnlineRefreshTokens;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientSessionTransfer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowRefreshToken = undefined;
      this._allowedAuthenticationMethods = undefined;
      this._canCreateSessionTransferToken = undefined;
      this._enforceCascadeRevocation = undefined;
      this._enforceDeviceBinding = undefined;
      this._enforceOnlineRefreshTokens = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowRefreshToken = value.allowRefreshToken;
      this._allowedAuthenticationMethods = value.allowedAuthenticationMethods;
      this._canCreateSessionTransferToken = value.canCreateSessionTransferToken;
      this._enforceCascadeRevocation = value.enforceCascadeRevocation;
      this._enforceDeviceBinding = value.enforceDeviceBinding;
      this._enforceOnlineRefreshTokens = value.enforceOnlineRefreshTokens;
    }
  }

  // allow_refresh_token - computed: true, optional: true, required: false
  private _allowRefreshToken?: boolean | cdktf.IResolvable; 
  public get allowRefreshToken() {
    return this.getBooleanAttribute('allow_refresh_token');
  }
  public set allowRefreshToken(value: boolean | cdktf.IResolvable) {
    this._allowRefreshToken = value;
  }
  public resetAllowRefreshToken() {
    this._allowRefreshToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRefreshTokenInput() {
    return this._allowRefreshToken;
  }

  // allowed_authentication_methods - computed: true, optional: true, required: false
  private _allowedAuthenticationMethods?: string[]; 
  public get allowedAuthenticationMethods() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_authentication_methods'));
  }
  public set allowedAuthenticationMethods(value: string[]) {
    this._allowedAuthenticationMethods = value;
  }
  public resetAllowedAuthenticationMethods() {
    this._allowedAuthenticationMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAuthenticationMethodsInput() {
    return this._allowedAuthenticationMethods;
  }

  // can_create_session_transfer_token - computed: true, optional: true, required: false
  private _canCreateSessionTransferToken?: boolean | cdktf.IResolvable; 
  public get canCreateSessionTransferToken() {
    return this.getBooleanAttribute('can_create_session_transfer_token');
  }
  public set canCreateSessionTransferToken(value: boolean | cdktf.IResolvable) {
    this._canCreateSessionTransferToken = value;
  }
  public resetCanCreateSessionTransferToken() {
    this._canCreateSessionTransferToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canCreateSessionTransferTokenInput() {
    return this._canCreateSessionTransferToken;
  }

  // enforce_cascade_revocation - computed: true, optional: true, required: false
  private _enforceCascadeRevocation?: boolean | cdktf.IResolvable; 
  public get enforceCascadeRevocation() {
    return this.getBooleanAttribute('enforce_cascade_revocation');
  }
  public set enforceCascadeRevocation(value: boolean | cdktf.IResolvable) {
    this._enforceCascadeRevocation = value;
  }
  public resetEnforceCascadeRevocation() {
    this._enforceCascadeRevocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceCascadeRevocationInput() {
    return this._enforceCascadeRevocation;
  }

  // enforce_device_binding - computed: true, optional: true, required: false
  private _enforceDeviceBinding?: string; 
  public get enforceDeviceBinding() {
    return this.getStringAttribute('enforce_device_binding');
  }
  public set enforceDeviceBinding(value: string) {
    this._enforceDeviceBinding = value;
  }
  public resetEnforceDeviceBinding() {
    this._enforceDeviceBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceDeviceBindingInput() {
    return this._enforceDeviceBinding;
  }

  // enforce_online_refresh_tokens - computed: true, optional: true, required: false
  private _enforceOnlineRefreshTokens?: boolean | cdktf.IResolvable; 
  public get enforceOnlineRefreshTokens() {
    return this.getBooleanAttribute('enforce_online_refresh_tokens');
  }
  public set enforceOnlineRefreshTokens(value: boolean | cdktf.IResolvable) {
    this._enforceOnlineRefreshTokens = value;
  }
  public resetEnforceOnlineRefreshTokens() {
    this._enforceOnlineRefreshTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceOnlineRefreshTokensInput() {
    return this._enforceOnlineRefreshTokens;
  }
}
export interface ClientTokenExchange {
  /**
  * List of allowed profile types for token exchange
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#allow_any_profile_of_type Client#allow_any_profile_of_type}
  */
  readonly allowAnyProfileOfType: string[];
}

export function clientTokenExchangeToTerraform(struct?: ClientTokenExchangeOutputReference | ClientTokenExchange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_any_profile_of_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowAnyProfileOfType),
  }
}


export function clientTokenExchangeToHclTerraform(struct?: ClientTokenExchangeOutputReference | ClientTokenExchange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_any_profile_of_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowAnyProfileOfType),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientTokenExchangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientTokenExchange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowAnyProfileOfType !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAnyProfileOfType = this._allowAnyProfileOfType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientTokenExchange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowAnyProfileOfType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowAnyProfileOfType = value.allowAnyProfileOfType;
    }
  }

  // allow_any_profile_of_type - computed: false, optional: false, required: true
  private _allowAnyProfileOfType?: string[]; 
  public get allowAnyProfileOfType() {
    return this.getListAttribute('allow_any_profile_of_type');
  }
  public set allowAnyProfileOfType(value: string[]) {
    this._allowAnyProfileOfType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAnyProfileOfTypeInput() {
    return this._allowAnyProfileOfType;
  }
}
export interface ClientTokenQuotaClientCredentials {
  /**
  * If enabled, the quota will be enforced and requests in excess of the quota will fail. If disabled, the quota will not be enforced, but notifications for requests exceeding the quota will be available in logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#enforce Client#enforce}
  */
  readonly enforce?: boolean | cdktf.IResolvable;
  /**
  * Maximum number of issued tokens per day
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#per_day Client#per_day}
  */
  readonly perDay?: number;
  /**
  * Maximum number of issued tokens per hour
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#per_hour Client#per_hour}
  */
  readonly perHour?: number;
}

export function clientTokenQuotaClientCredentialsToTerraform(struct?: ClientTokenQuotaClientCredentialsOutputReference | ClientTokenQuotaClientCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enforce: cdktf.booleanToTerraform(struct!.enforce),
    per_day: cdktf.numberToTerraform(struct!.perDay),
    per_hour: cdktf.numberToTerraform(struct!.perHour),
  }
}


export function clientTokenQuotaClientCredentialsToHclTerraform(struct?: ClientTokenQuotaClientCredentialsOutputReference | ClientTokenQuotaClientCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enforce: {
      value: cdktf.booleanToHclTerraform(struct!.enforce),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    per_day: {
      value: cdktf.numberToHclTerraform(struct!.perDay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_hour: {
      value: cdktf.numberToHclTerraform(struct!.perHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientTokenQuotaClientCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientTokenQuotaClientCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enforce !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforce = this._enforce;
    }
    if (this._perDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.perDay = this._perDay;
    }
    if (this._perHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.perHour = this._perHour;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientTokenQuotaClientCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enforce = undefined;
      this._perDay = undefined;
      this._perHour = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enforce = value.enforce;
      this._perDay = value.perDay;
      this._perHour = value.perHour;
    }
  }

  // enforce - computed: false, optional: true, required: false
  private _enforce?: boolean | cdktf.IResolvable; 
  public get enforce() {
    return this.getBooleanAttribute('enforce');
  }
  public set enforce(value: boolean | cdktf.IResolvable) {
    this._enforce = value;
  }
  public resetEnforce() {
    this._enforce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceInput() {
    return this._enforce;
  }

  // per_day - computed: false, optional: true, required: false
  private _perDay?: number; 
  public get perDay() {
    return this.getNumberAttribute('per_day');
  }
  public set perDay(value: number) {
    this._perDay = value;
  }
  public resetPerDay() {
    this._perDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perDayInput() {
    return this._perDay;
  }

  // per_hour - computed: false, optional: true, required: false
  private _perHour?: number; 
  public get perHour() {
    return this.getNumberAttribute('per_hour');
  }
  public set perHour(value: number) {
    this._perHour = value;
  }
  public resetPerHour() {
    this._perHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perHourInput() {
    return this._perHour;
  }
}
export interface ClientTokenQuota {
  /**
  * client_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#client_credentials Client#client_credentials}
  */
  readonly clientCredentials: ClientTokenQuotaClientCredentials;
}

export function clientTokenQuotaToTerraform(struct?: ClientTokenQuotaOutputReference | ClientTokenQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_credentials: clientTokenQuotaClientCredentialsToTerraform(struct!.clientCredentials),
  }
}


export function clientTokenQuotaToHclTerraform(struct?: ClientTokenQuotaOutputReference | ClientTokenQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_credentials: {
      value: clientTokenQuotaClientCredentialsToHclTerraform(struct!.clientCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "ClientTokenQuotaClientCredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientTokenQuotaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientTokenQuota | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCredentials = this._clientCredentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientTokenQuota | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientCredentials.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientCredentials.internalValue = value.clientCredentials;
    }
  }

  // client_credentials - computed: false, optional: false, required: true
  private _clientCredentials = new ClientTokenQuotaClientCredentialsOutputReference(this, "client_credentials");
  public get clientCredentials() {
    return this._clientCredentials;
  }
  public putClientCredentials(value: ClientTokenQuotaClientCredentials) {
    this._clientCredentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCredentialsInput() {
    return this._clientCredentials.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client auth0_client}
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
  * @param importFromId The id of the existing Client that should be imported. Refer to the {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Client to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "auth0_client", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/client auth0_client} Resource
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
        providerVersion: '1.36.0',
        providerVersionConstraint: '1.36.0'
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
    this._asyncApprovalNotificationChannels = config.asyncApprovalNotificationChannels;
    this._callbacks = config.callbacks;
    this._clientAliases = config.clientAliases;
    this._clientMetadata = config.clientMetadata;
    this._complianceLevel = config.complianceLevel;
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
    this._oidcBackchannelLogoutUrls = config.oidcBackchannelLogoutUrls;
    this._oidcConformant = config.oidcConformant;
    this._organizationDiscoveryMethods = config.organizationDiscoveryMethods;
    this._organizationRequireBehavior = config.organizationRequireBehavior;
    this._organizationUsage = config.organizationUsage;
    this._requireProofOfPossession = config.requireProofOfPossession;
    this._requirePushedAuthorizationRequests = config.requirePushedAuthorizationRequests;
    this._resourceServerIdentifier = config.resourceServerIdentifier;
    this._skipNonVerifiableCallbackUriConfirmationPrompt = config.skipNonVerifiableCallbackUriConfirmationPrompt;
    this._sso = config.sso;
    this._ssoDisabled = config.ssoDisabled;
    this._webOrigins = config.webOrigins;
    this._addons.internalValue = config.addons;
    this._defaultOrganization.internalValue = config.defaultOrganization;
    this._expressConfiguration.internalValue = config.expressConfiguration;
    this._jwtConfiguration.internalValue = config.jwtConfiguration;
    this._mobile.internalValue = config.mobile;
    this._nativeSocialLogin.internalValue = config.nativeSocialLogin;
    this._oidcLogout.internalValue = config.oidcLogout;
    this._refreshToken.internalValue = config.refreshToken;
    this._sessionTransfer.internalValue = config.sessionTransfer;
    this._tokenExchange.internalValue = config.tokenExchange;
    this._tokenQuota.internalValue = config.tokenQuota;
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

  // async_approval_notification_channels - computed: true, optional: true, required: false
  private _asyncApprovalNotificationChannels?: string[]; 
  public get asyncApprovalNotificationChannels() {
    return this.getListAttribute('async_approval_notification_channels');
  }
  public set asyncApprovalNotificationChannels(value: string[]) {
    this._asyncApprovalNotificationChannels = value;
  }
  public resetAsyncApprovalNotificationChannels() {
    this._asyncApprovalNotificationChannels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncApprovalNotificationChannelsInput() {
    return this._asyncApprovalNotificationChannels;
  }

  // callbacks - computed: true, optional: true, required: false
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

  // client_aliases - computed: false, optional: true, required: false
  private _clientAliases?: string[]; 
  public get clientAliases() {
    return this.getListAttribute('client_aliases');
  }
  public set clientAliases(value: string[]) {
    this._clientAliases = value;
  }
  public resetClientAliases() {
    this._clientAliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAliasesInput() {
    return this._clientAliases;
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

  // compliance_level - computed: false, optional: true, required: false
  private _complianceLevel?: string; 
  public get complianceLevel() {
    return this.getStringAttribute('compliance_level');
  }
  public set complianceLevel(value: string) {
    this._complianceLevel = value;
  }
  public resetComplianceLevel() {
    this._complianceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceLevelInput() {
    return this._complianceLevel;
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

  // oidc_backchannel_logout_urls - computed: true, optional: true, required: false
  private _oidcBackchannelLogoutUrls?: string[]; 
  public get oidcBackchannelLogoutUrls() {
    return cdktf.Fn.tolist(this.getListAttribute('oidc_backchannel_logout_urls'));
  }
  public set oidcBackchannelLogoutUrls(value: string[]) {
    this._oidcBackchannelLogoutUrls = value;
  }
  public resetOidcBackchannelLogoutUrls() {
    this._oidcBackchannelLogoutUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcBackchannelLogoutUrlsInput() {
    return this._oidcBackchannelLogoutUrls;
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

  // organization_discovery_methods - computed: false, optional: true, required: false
  private _organizationDiscoveryMethods?: string[]; 
  public get organizationDiscoveryMethods() {
    return this.getListAttribute('organization_discovery_methods');
  }
  public set organizationDiscoveryMethods(value: string[]) {
    this._organizationDiscoveryMethods = value;
  }
  public resetOrganizationDiscoveryMethods() {
    this._organizationDiscoveryMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationDiscoveryMethodsInput() {
    return this._organizationDiscoveryMethods;
  }

  // organization_require_behavior - computed: true, optional: true, required: false
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

  // organization_usage - computed: true, optional: true, required: false
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

  // require_proof_of_possession - computed: false, optional: true, required: false
  private _requireProofOfPossession?: boolean | cdktf.IResolvable; 
  public get requireProofOfPossession() {
    return this.getBooleanAttribute('require_proof_of_possession');
  }
  public set requireProofOfPossession(value: boolean | cdktf.IResolvable) {
    this._requireProofOfPossession = value;
  }
  public resetRequireProofOfPossession() {
    this._requireProofOfPossession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireProofOfPossessionInput() {
    return this._requireProofOfPossession;
  }

  // require_pushed_authorization_requests - computed: false, optional: true, required: false
  private _requirePushedAuthorizationRequests?: boolean | cdktf.IResolvable; 
  public get requirePushedAuthorizationRequests() {
    return this.getBooleanAttribute('require_pushed_authorization_requests');
  }
  public set requirePushedAuthorizationRequests(value: boolean | cdktf.IResolvable) {
    this._requirePushedAuthorizationRequests = value;
  }
  public resetRequirePushedAuthorizationRequests() {
    this._requirePushedAuthorizationRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirePushedAuthorizationRequestsInput() {
    return this._requirePushedAuthorizationRequests;
  }

  // resource_server_identifier - computed: false, optional: true, required: false
  private _resourceServerIdentifier?: string; 
  public get resourceServerIdentifier() {
    return this.getStringAttribute('resource_server_identifier');
  }
  public set resourceServerIdentifier(value: string) {
    this._resourceServerIdentifier = value;
  }
  public resetResourceServerIdentifier() {
    this._resourceServerIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceServerIdentifierInput() {
    return this._resourceServerIdentifier;
  }

  // signing_keys - computed: true, optional: false, required: false
  private _signingKeys = new cdktf.StringMapList(this, "signing_keys", false);
  public get signingKeys() {
    return this._signingKeys;
  }

  // skip_non_verifiable_callback_uri_confirmation_prompt - computed: false, optional: true, required: false
  private _skipNonVerifiableCallbackUriConfirmationPrompt?: string; 
  public get skipNonVerifiableCallbackUriConfirmationPrompt() {
    return this.getStringAttribute('skip_non_verifiable_callback_uri_confirmation_prompt');
  }
  public set skipNonVerifiableCallbackUriConfirmationPrompt(value: string) {
    this._skipNonVerifiableCallbackUriConfirmationPrompt = value;
  }
  public resetSkipNonVerifiableCallbackUriConfirmationPrompt() {
    this._skipNonVerifiableCallbackUriConfirmationPrompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipNonVerifiableCallbackUriConfirmationPromptInput() {
    return this._skipNonVerifiableCallbackUriConfirmationPrompt;
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

  // default_organization - computed: false, optional: true, required: false
  private _defaultOrganization = new ClientDefaultOrganizationOutputReference(this, "default_organization");
  public get defaultOrganization() {
    return this._defaultOrganization;
  }
  public putDefaultOrganization(value: ClientDefaultOrganization) {
    this._defaultOrganization.internalValue = value;
  }
  public resetDefaultOrganization() {
    this._defaultOrganization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOrganizationInput() {
    return this._defaultOrganization.internalValue;
  }

  // express_configuration - computed: false, optional: true, required: false
  private _expressConfiguration = new ClientExpressConfigurationOutputReference(this, "express_configuration");
  public get expressConfiguration() {
    return this._expressConfiguration;
  }
  public putExpressConfiguration(value: ClientExpressConfiguration) {
    this._expressConfiguration.internalValue = value;
  }
  public resetExpressConfiguration() {
    this._expressConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressConfigurationInput() {
    return this._expressConfiguration.internalValue;
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

  // native_social_login - computed: false, optional: true, required: false
  private _nativeSocialLogin = new ClientNativeSocialLoginOutputReference(this, "native_social_login");
  public get nativeSocialLogin() {
    return this._nativeSocialLogin;
  }
  public putNativeSocialLogin(value: ClientNativeSocialLogin) {
    this._nativeSocialLogin.internalValue = value;
  }
  public resetNativeSocialLogin() {
    this._nativeSocialLogin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nativeSocialLoginInput() {
    return this._nativeSocialLogin.internalValue;
  }

  // oidc_logout - computed: false, optional: true, required: false
  private _oidcLogout = new ClientOidcLogoutOutputReference(this, "oidc_logout");
  public get oidcLogout() {
    return this._oidcLogout;
  }
  public putOidcLogout(value: ClientOidcLogout) {
    this._oidcLogout.internalValue = value;
  }
  public resetOidcLogout() {
    this._oidcLogout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcLogoutInput() {
    return this._oidcLogout.internalValue;
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

  // session_transfer - computed: false, optional: true, required: false
  private _sessionTransfer = new ClientSessionTransferOutputReference(this, "session_transfer");
  public get sessionTransfer() {
    return this._sessionTransfer;
  }
  public putSessionTransfer(value: ClientSessionTransfer) {
    this._sessionTransfer.internalValue = value;
  }
  public resetSessionTransfer() {
    this._sessionTransfer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTransferInput() {
    return this._sessionTransfer.internalValue;
  }

  // token_exchange - computed: false, optional: true, required: false
  private _tokenExchange = new ClientTokenExchangeOutputReference(this, "token_exchange");
  public get tokenExchange() {
    return this._tokenExchange;
  }
  public putTokenExchange(value: ClientTokenExchange) {
    this._tokenExchange.internalValue = value;
  }
  public resetTokenExchange() {
    this._tokenExchange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenExchangeInput() {
    return this._tokenExchange.internalValue;
  }

  // token_quota - computed: false, optional: true, required: false
  private _tokenQuota = new ClientTokenQuotaOutputReference(this, "token_quota");
  public get tokenQuota() {
    return this._tokenQuota;
  }
  public putTokenQuota(value: ClientTokenQuota) {
    this._tokenQuota.internalValue = value;
  }
  public resetTokenQuota() {
    this._tokenQuota.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenQuotaInput() {
    return this._tokenQuota.internalValue;
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
      async_approval_notification_channels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._asyncApprovalNotificationChannels),
      callbacks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._callbacks),
      client_aliases: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clientAliases),
      client_metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._clientMetadata),
      compliance_level: cdktf.stringToTerraform(this._complianceLevel),
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
      oidc_backchannel_logout_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._oidcBackchannelLogoutUrls),
      oidc_conformant: cdktf.booleanToTerraform(this._oidcConformant),
      organization_discovery_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(this._organizationDiscoveryMethods),
      organization_require_behavior: cdktf.stringToTerraform(this._organizationRequireBehavior),
      organization_usage: cdktf.stringToTerraform(this._organizationUsage),
      require_proof_of_possession: cdktf.booleanToTerraform(this._requireProofOfPossession),
      require_pushed_authorization_requests: cdktf.booleanToTerraform(this._requirePushedAuthorizationRequests),
      resource_server_identifier: cdktf.stringToTerraform(this._resourceServerIdentifier),
      skip_non_verifiable_callback_uri_confirmation_prompt: cdktf.stringToTerraform(this._skipNonVerifiableCallbackUriConfirmationPrompt),
      sso: cdktf.booleanToTerraform(this._sso),
      sso_disabled: cdktf.booleanToTerraform(this._ssoDisabled),
      web_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(this._webOrigins),
      addons: clientAddonsToTerraform(this._addons.internalValue),
      default_organization: clientDefaultOrganizationToTerraform(this._defaultOrganization.internalValue),
      express_configuration: clientExpressConfigurationToTerraform(this._expressConfiguration.internalValue),
      jwt_configuration: clientJwtConfigurationToTerraform(this._jwtConfiguration.internalValue),
      mobile: clientMobileToTerraform(this._mobile.internalValue),
      native_social_login: clientNativeSocialLoginToTerraform(this._nativeSocialLogin.internalValue),
      oidc_logout: clientOidcLogoutToTerraform(this._oidcLogout.internalValue),
      refresh_token: clientRefreshTokenToTerraform(this._refreshToken.internalValue),
      session_transfer: clientSessionTransferToTerraform(this._sessionTransfer.internalValue),
      token_exchange: clientTokenExchangeToTerraform(this._tokenExchange.internalValue),
      token_quota: clientTokenQuotaToTerraform(this._tokenQuota.internalValue),
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
      async_approval_notification_channels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._asyncApprovalNotificationChannels),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      callbacks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._callbacks),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      client_aliases: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clientAliases),
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
      compliance_level: {
        value: cdktf.stringToHclTerraform(this._complianceLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      oidc_backchannel_logout_urls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._oidcBackchannelLogoutUrls),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      oidc_conformant: {
        value: cdktf.booleanToHclTerraform(this._oidcConformant),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      organization_discovery_methods: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._organizationDiscoveryMethods),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      require_proof_of_possession: {
        value: cdktf.booleanToHclTerraform(this._requireProofOfPossession),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      require_pushed_authorization_requests: {
        value: cdktf.booleanToHclTerraform(this._requirePushedAuthorizationRequests),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resource_server_identifier: {
        value: cdktf.stringToHclTerraform(this._resourceServerIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_non_verifiable_callback_uri_confirmation_prompt: {
        value: cdktf.stringToHclTerraform(this._skipNonVerifiableCallbackUriConfirmationPrompt),
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
      default_organization: {
        value: clientDefaultOrganizationToHclTerraform(this._defaultOrganization.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClientDefaultOrganizationList",
      },
      express_configuration: {
        value: clientExpressConfigurationToHclTerraform(this._expressConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClientExpressConfigurationList",
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
      native_social_login: {
        value: clientNativeSocialLoginToHclTerraform(this._nativeSocialLogin.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClientNativeSocialLoginList",
      },
      oidc_logout: {
        value: clientOidcLogoutToHclTerraform(this._oidcLogout.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClientOidcLogoutList",
      },
      refresh_token: {
        value: clientRefreshTokenToHclTerraform(this._refreshToken.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClientRefreshTokenList",
      },
      session_transfer: {
        value: clientSessionTransferToHclTerraform(this._sessionTransfer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClientSessionTransferList",
      },
      token_exchange: {
        value: clientTokenExchangeToHclTerraform(this._tokenExchange.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClientTokenExchangeList",
      },
      token_quota: {
        value: clientTokenQuotaToHclTerraform(this._tokenQuota.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClientTokenQuotaList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
