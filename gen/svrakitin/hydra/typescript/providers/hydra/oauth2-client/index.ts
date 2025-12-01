// https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Oauth2ClientConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access token strategy to use. Valid options are "jwt" and "opaque".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#access_token_strategy Oauth2Client#access_token_strategy}
  */
  readonly accessTokenStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#allowed_cors_origins Oauth2Client#allowed_cors_origins}
  */
  readonly allowedCorsOrigins?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#audience Oauth2Client#audience}
  */
  readonly audience?: string[];
  /**
  * Specify a time duration in milliseconds, seconds, minutes, hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#authorization_code_grant_access_token_lifespan Oauth2Client#authorization_code_grant_access_token_lifespan}
  */
  readonly authorizationCodeGrantAccessTokenLifespan?: string;
  /**
  * Specify a time duration in milliseconds, seconds, minutes, hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#authorization_code_grant_id_token_lifespan Oauth2Client#authorization_code_grant_id_token_lifespan}
  */
  readonly authorizationCodeGrantIdTokenLifespan?: string;
  /**
  * Specify a time duration in milliseconds, seconds, minutes, hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#authorization_code_grant_refresh_token_lifespan Oauth2Client#authorization_code_grant_refresh_token_lifespan}
  */
  readonly authorizationCodeGrantRefreshTokenLifespan?: string;
  /**
  * Boolean value specifying whether the RP requires that a sid (session ID) Claim be included in the Logout Token to identify the RP session with the OP when the backchannel_logout_uri is used. If omitted, the default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#backchannel_logout_session_required Oauth2Client#backchannel_logout_session_required}
  */
  readonly backchannelLogoutSessionRequired?: boolean | cdktf.IResolvable;
  /**
  * RP URL that will cause the RP to log itself out when sent a Logout Token by the OP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#backchannel_logout_uri Oauth2Client#backchannel_logout_uri}
  */
  readonly backchannelLogoutUri?: string;
  /**
  * Specify a time duration in milliseconds, seconds, minutes, hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#client_credentials_grant_access_token_lifespan Oauth2Client#client_credentials_grant_access_token_lifespan}
  */
  readonly clientCredentialsGrantAccessTokenLifespan?: string;
  /**
  * ID is the id for this client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#client_id Oauth2Client#client_id}
  */
  readonly clientId?: string;
  /**
  * Name is the human-readable string name of the client to be presented to the end-user during authorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#client_name Oauth2Client#client_name}
  */
  readonly clientName?: string;
  /**
  * Secret is the client's secret. The secret will be included in the create request as cleartext, and then never again.
  * The secret is stored using BCrypt so it is impossible to recover it. Tell your users that they need to write the secret down as it will not be made available again.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#client_secret Oauth2Client#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * SecretExpiresAt is an integer holding the time at which the client secret will expire or 0 if it will not expire.
  * The time is represented as the number of seconds from 1970-01-01T00:00:00Z as measured in UTC until the date/time of expiration.
  * This feature is currently not supported and it's value will always be set to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#client_secret_expires_at Oauth2Client#client_secret_expires_at}
  */
  readonly clientSecretExpiresAt?: number;
  /**
  * ClientURI is an URL string of a web page providing information about the client. If present, the server SHOULD display this URL to the end-user in a clickable fashion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#client_uri Oauth2Client#client_uri}
  */
  readonly clientUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#contacts Oauth2Client#contacts}
  */
  readonly contacts?: string[];
  /**
  * Boolean value specifying whether the RP requires that iss (issuer) and sid (session ID) query parameters be included to identify the RP session with the OP when the `frontchannel_logout_uri` is used. If omitted, the default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#frontchannel_logout_session_required Oauth2Client#frontchannel_logout_session_required}
  */
  readonly frontchannelLogoutSessionRequired?: boolean | cdktf.IResolvable;
  /**
  * RP URL that will cause the RP to log itself out when rendered in an iframe by the OP.
  * An iss (issuer) query parameter and a sid (session ID) query parameter MAY be included by the OP to enable the RP to validate the request and to determine which of the potentially multiple sessions is to be logged out;
  * if either is included, both MUST be.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#frontchannel_logout_uri Oauth2Client#frontchannel_logout_uri}
  */
  readonly frontchannelLogoutUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#grant_types Oauth2Client#grant_types}
  */
  readonly grantTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#id Oauth2Client#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify a time duration in milliseconds, seconds, minutes, hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#implicit_grant_access_token_lifespan Oauth2Client#implicit_grant_access_token_lifespan}
  */
  readonly implicitGrantAccessTokenLifespan?: string;
  /**
  * Specify a time duration in milliseconds, seconds, minutes, hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#implicit_grant_id_token_lifespan Oauth2Client#implicit_grant_id_token_lifespan}
  */
  readonly implicitGrantIdTokenLifespan?: string;
  /**
  * URL for the Client's JSON Web Key Set [JWK] document.
  * If the Client signs requests to the Server, it contains the signing key(s) the Server uses to validate signatures from the Client.
  * The JWK Set MAY also contain the Client's encryption keys(s), which are used by the Server to encrypt responses to the Client.
  * When both signing and encryption keys are made available, a use (Key Use) parameter value is REQUIRED for all keys in the referenced JWK Set to indicate each key's intended usage.
  * Although some algorithms allow the same key to be used for both signatures and encryption, doing so is NOT RECOMMENDED, as it is less secure.
  * The JWK x5c parameter MAY be used to provide X.509 representations of keys provided. When used, the bare key values MUST still be present and MUST match those in the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#jwks_uri Oauth2Client#jwks_uri}
  */
  readonly jwksUri?: string;
  /**
  * Specify a time duration in milliseconds, seconds, minutes, hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#jwt_bearer_grant_access_token_lifespan Oauth2Client#jwt_bearer_grant_access_token_lifespan}
  */
  readonly jwtBearerGrantAccessTokenLifespan?: string;
  /**
  * LogoURI is an URL string that references a logo for the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#logo_uri Oauth2Client#logo_uri}
  */
  readonly logoUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#metadata Oauth2Client#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#metadata_json Oauth2Client#metadata_json}
  */
  readonly metadataJson?: string;
  /**
  * Owner is a string identifying the owner of the OAuth 2.0 Client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#owner Oauth2Client#owner}
  */
  readonly owner?: string;
  /**
  * PolicyURI is a URL string that points to a human-readable privacy policy document that describes how the deployment organization collects, uses, retains, and discloses personal data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#policy_uri Oauth2Client#policy_uri}
  */
  readonly policyUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#post_logout_redirect_uris Oauth2Client#post_logout_redirect_uris}
  */
  readonly postLogoutRedirectUris?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#redirect_uris Oauth2Client#redirect_uris}
  */
  readonly redirectUris?: string[];
  /**
  * Specify a time duration in milliseconds, seconds, minutes, hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#refresh_token_grant_access_token_lifespan Oauth2Client#refresh_token_grant_access_token_lifespan}
  */
  readonly refreshTokenGrantAccessTokenLifespan?: string;
  /**
  * Specify a time duration in milliseconds, seconds, minutes, hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#refresh_token_grant_id_token_lifespan Oauth2Client#refresh_token_grant_id_token_lifespan}
  */
  readonly refreshTokenGrantIdTokenLifespan?: string;
  /**
  * Specify a time duration in milliseconds, seconds, minutes, hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#refresh_token_grant_refresh_token_lifespan Oauth2Client#refresh_token_grant_refresh_token_lifespan}
  */
  readonly refreshTokenGrantRefreshTokenLifespan?: string;
  /**
  * JWS [JWS] alg algorithm [JWA] that MUST be used for signing Request Objects sent to the OP. All Request Objects from this Client MUST be rejected, if not signed with this algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#request_object_signing_alg Oauth2Client#request_object_signing_alg}
  */
  readonly requestObjectSigningAlg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#request_uris Oauth2Client#request_uris}
  */
  readonly requestUris?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#response_types Oauth2Client#response_types}
  */
  readonly responseTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#scopes Oauth2Client#scopes}
  */
  readonly scopes?: string[];
  /**
  * URL using the https scheme to be used in calculating Pseudonymous Identifiers by the OP. The URL references a file with a single JSON array of redirect_uri values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#sector_identifier_uri Oauth2Client#sector_identifier_uri}
  */
  readonly sectorIdentifierUri?: string;
  /**
  * SkipConsent skips the consent screen for this client. This field can only be set from the admin API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#skip_consent Oauth2Client#skip_consent}
  */
  readonly skipConsent?: boolean | cdktf.IResolvable;
  /**
  * SubjectType requested for responses to this Client. The subject_types_supported Discovery parameter contains a list of the supported subject_type values for this server. Valid types include `pairwise` and `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#subject_type Oauth2Client#subject_type}
  */
  readonly subjectType?: string;
  /**
  * Requested Client Authentication method for the Token Endpoint. The options are `client_secret_post`, `client_secret_basic`, `private_key_jwt`, and `none`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#token_endpoint_auth_method Oauth2Client#token_endpoint_auth_method}
  */
  readonly tokenEndpointAuthMethod?: string;
  /**
  * Requested Client Authentication signing algorithm for the Token Endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#token_endpoint_auth_signing_alg Oauth2Client#token_endpoint_auth_signing_alg}
  */
  readonly tokenEndpointAuthSigningAlg?: string;
  /**
  * TermsOfServiceURI is a URL string that points to a human-readable terms of service document for the client that describes a contractual relationship between the end-user and the client that the end-user accepts when authorizing the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#tos_uri Oauth2Client#tos_uri}
  */
  readonly tosUri?: string;
  /**
  * JWS alg algorithm [JWA] REQUIRED for signing UserInfo Responses.
  * If this is specified, the response will be JWT [JWT] serialized, and signed using JWS.
  * The default, if omitted, is for the UserInfo Response to return the Claims as a UTF-8 encoded JSON object using the application/json content-type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#userinfo_signed_response_alg Oauth2Client#userinfo_signed_response_alg}
  */
  readonly userinfoSignedResponseAlg?: string;
  /**
  * jwk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#jwk Oauth2Client#jwk}
  */
  readonly jwk?: Oauth2ClientJwk[] | cdktf.IResolvable;
}
export interface Oauth2ClientJwk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#alg Oauth2Client#alg}
  */
  readonly alg: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#crv Oauth2Client#crv}
  */
  readonly crv?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#d Oauth2Client#d}
  */
  readonly d?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#dp Oauth2Client#dp}
  */
  readonly dp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#dq Oauth2Client#dq}
  */
  readonly dq?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#e Oauth2Client#e}
  */
  readonly e?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#k Oauth2Client#k}
  */
  readonly k?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#kid Oauth2Client#kid}
  */
  readonly kid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#kty Oauth2Client#kty}
  */
  readonly kty: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#n Oauth2Client#n}
  */
  readonly n?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#p Oauth2Client#p}
  */
  readonly p?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#q Oauth2Client#q}
  */
  readonly q?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#qi Oauth2Client#qi}
  */
  readonly qi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#use Oauth2Client#use}
  */
  readonly use: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#x Oauth2Client#x}
  */
  readonly x?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#x5c Oauth2Client#x5c}
  */
  readonly x5C?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#y Oauth2Client#y}
  */
  readonly y?: string;
}

export function oauth2ClientJwkToTerraform(struct?: Oauth2ClientJwk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alg: cdktf.stringToTerraform(struct!.alg),
    crv: cdktf.stringToTerraform(struct!.crv),
    d: cdktf.stringToTerraform(struct!.d),
    dp: cdktf.stringToTerraform(struct!.dp),
    dq: cdktf.stringToTerraform(struct!.dq),
    e: cdktf.stringToTerraform(struct!.e),
    k: cdktf.stringToTerraform(struct!.k),
    kid: cdktf.stringToTerraform(struct!.kid),
    kty: cdktf.stringToTerraform(struct!.kty),
    n: cdktf.stringToTerraform(struct!.n),
    p: cdktf.stringToTerraform(struct!.p),
    q: cdktf.stringToTerraform(struct!.q),
    qi: cdktf.stringToTerraform(struct!.qi),
    use: cdktf.stringToTerraform(struct!.use),
    x: cdktf.stringToTerraform(struct!.x),
    x5c: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.x5C),
    y: cdktf.stringToTerraform(struct!.y),
  }
}


export function oauth2ClientJwkToHclTerraform(struct?: Oauth2ClientJwk | cdktf.IResolvable): any {
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
    crv: {
      value: cdktf.stringToHclTerraform(struct!.crv),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    d: {
      value: cdktf.stringToHclTerraform(struct!.d),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dp: {
      value: cdktf.stringToHclTerraform(struct!.dp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dq: {
      value: cdktf.stringToHclTerraform(struct!.dq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    e: {
      value: cdktf.stringToHclTerraform(struct!.e),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    k: {
      value: cdktf.stringToHclTerraform(struct!.k),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kid: {
      value: cdktf.stringToHclTerraform(struct!.kid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kty: {
      value: cdktf.stringToHclTerraform(struct!.kty),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    n: {
      value: cdktf.stringToHclTerraform(struct!.n),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    p: {
      value: cdktf.stringToHclTerraform(struct!.p),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    q: {
      value: cdktf.stringToHclTerraform(struct!.q),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qi: {
      value: cdktf.stringToHclTerraform(struct!.qi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use: {
      value: cdktf.stringToHclTerraform(struct!.use),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    x: {
      value: cdktf.stringToHclTerraform(struct!.x),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    x5c: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.x5C),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    y: {
      value: cdktf.stringToHclTerraform(struct!.y),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Oauth2ClientJwkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Oauth2ClientJwk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alg !== undefined) {
      hasAnyValues = true;
      internalValueResult.alg = this._alg;
    }
    if (this._crv !== undefined) {
      hasAnyValues = true;
      internalValueResult.crv = this._crv;
    }
    if (this._d !== undefined) {
      hasAnyValues = true;
      internalValueResult.d = this._d;
    }
    if (this._dp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dp = this._dp;
    }
    if (this._dq !== undefined) {
      hasAnyValues = true;
      internalValueResult.dq = this._dq;
    }
    if (this._e !== undefined) {
      hasAnyValues = true;
      internalValueResult.e = this._e;
    }
    if (this._k !== undefined) {
      hasAnyValues = true;
      internalValueResult.k = this._k;
    }
    if (this._kid !== undefined) {
      hasAnyValues = true;
      internalValueResult.kid = this._kid;
    }
    if (this._kty !== undefined) {
      hasAnyValues = true;
      internalValueResult.kty = this._kty;
    }
    if (this._n !== undefined) {
      hasAnyValues = true;
      internalValueResult.n = this._n;
    }
    if (this._p !== undefined) {
      hasAnyValues = true;
      internalValueResult.p = this._p;
    }
    if (this._q !== undefined) {
      hasAnyValues = true;
      internalValueResult.q = this._q;
    }
    if (this._qi !== undefined) {
      hasAnyValues = true;
      internalValueResult.qi = this._qi;
    }
    if (this._use !== undefined) {
      hasAnyValues = true;
      internalValueResult.use = this._use;
    }
    if (this._x !== undefined) {
      hasAnyValues = true;
      internalValueResult.x = this._x;
    }
    if (this._x5C !== undefined) {
      hasAnyValues = true;
      internalValueResult.x5C = this._x5C;
    }
    if (this._y !== undefined) {
      hasAnyValues = true;
      internalValueResult.y = this._y;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Oauth2ClientJwk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alg = undefined;
      this._crv = undefined;
      this._d = undefined;
      this._dp = undefined;
      this._dq = undefined;
      this._e = undefined;
      this._k = undefined;
      this._kid = undefined;
      this._kty = undefined;
      this._n = undefined;
      this._p = undefined;
      this._q = undefined;
      this._qi = undefined;
      this._use = undefined;
      this._x = undefined;
      this._x5C = undefined;
      this._y = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alg = value.alg;
      this._crv = value.crv;
      this._d = value.d;
      this._dp = value.dp;
      this._dq = value.dq;
      this._e = value.e;
      this._k = value.k;
      this._kid = value.kid;
      this._kty = value.kty;
      this._n = value.n;
      this._p = value.p;
      this._q = value.q;
      this._qi = value.qi;
      this._use = value.use;
      this._x = value.x;
      this._x5C = value.x5C;
      this._y = value.y;
    }
  }

  // alg - computed: false, optional: false, required: true
  private _alg?: string; 
  public get alg() {
    return this.getStringAttribute('alg');
  }
  public set alg(value: string) {
    this._alg = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algInput() {
    return this._alg;
  }

  // crv - computed: true, optional: true, required: false
  private _crv?: string; 
  public get crv() {
    return this.getStringAttribute('crv');
  }
  public set crv(value: string) {
    this._crv = value;
  }
  public resetCrv() {
    this._crv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crvInput() {
    return this._crv;
  }

  // d - computed: true, optional: true, required: false
  private _d?: string; 
  public get d() {
    return this.getStringAttribute('d');
  }
  public set d(value: string) {
    this._d = value;
  }
  public resetD() {
    this._d = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dInput() {
    return this._d;
  }

  // dp - computed: true, optional: true, required: false
  private _dp?: string; 
  public get dp() {
    return this.getStringAttribute('dp');
  }
  public set dp(value: string) {
    this._dp = value;
  }
  public resetDp() {
    this._dp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpInput() {
    return this._dp;
  }

  // dq - computed: true, optional: true, required: false
  private _dq?: string; 
  public get dq() {
    return this.getStringAttribute('dq');
  }
  public set dq(value: string) {
    this._dq = value;
  }
  public resetDq() {
    this._dq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dqInput() {
    return this._dq;
  }

  // e - computed: true, optional: true, required: false
  private _e?: string; 
  public get e() {
    return this.getStringAttribute('e');
  }
  public set e(value: string) {
    this._e = value;
  }
  public resetE() {
    this._e = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eInput() {
    return this._e;
  }

  // k - computed: true, optional: true, required: false
  private _k?: string; 
  public get k() {
    return this.getStringAttribute('k');
  }
  public set k(value: string) {
    this._k = value;
  }
  public resetK() {
    this._k = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kInput() {
    return this._k;
  }

  // kid - computed: false, optional: false, required: true
  private _kid?: string; 
  public get kid() {
    return this.getStringAttribute('kid');
  }
  public set kid(value: string) {
    this._kid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kidInput() {
    return this._kid;
  }

  // kty - computed: false, optional: false, required: true
  private _kty?: string; 
  public get kty() {
    return this.getStringAttribute('kty');
  }
  public set kty(value: string) {
    this._kty = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ktyInput() {
    return this._kty;
  }

  // n - computed: true, optional: true, required: false
  private _n?: string; 
  public get n() {
    return this.getStringAttribute('n');
  }
  public set n(value: string) {
    this._n = value;
  }
  public resetN() {
    this._n = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nInput() {
    return this._n;
  }

  // p - computed: true, optional: true, required: false
  private _p?: string; 
  public get p() {
    return this.getStringAttribute('p');
  }
  public set p(value: string) {
    this._p = value;
  }
  public resetP() {
    this._p = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pInput() {
    return this._p;
  }

  // q - computed: true, optional: true, required: false
  private _q?: string; 
  public get q() {
    return this.getStringAttribute('q');
  }
  public set q(value: string) {
    this._q = value;
  }
  public resetQ() {
    this._q = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qInput() {
    return this._q;
  }

  // qi - computed: true, optional: true, required: false
  private _qi?: string; 
  public get qi() {
    return this.getStringAttribute('qi');
  }
  public set qi(value: string) {
    this._qi = value;
  }
  public resetQi() {
    this._qi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qiInput() {
    return this._qi;
  }

  // use - computed: false, optional: false, required: true
  private _use?: string; 
  public get use() {
    return this.getStringAttribute('use');
  }
  public set use(value: string) {
    this._use = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useInput() {
    return this._use;
  }

  // x - computed: true, optional: true, required: false
  private _x?: string; 
  public get x() {
    return this.getStringAttribute('x');
  }
  public set x(value: string) {
    this._x = value;
  }
  public resetX() {
    this._x = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xInput() {
    return this._x;
  }

  // x5c - computed: true, optional: true, required: false
  private _x5C?: string[]; 
  public get x5C() {
    return this.getListAttribute('x5c');
  }
  public set x5C(value: string[]) {
    this._x5C = value;
  }
  public resetX5C() {
    this._x5C = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get x5CInput() {
    return this._x5C;
  }

  // y - computed: true, optional: true, required: false
  private _y?: string; 
  public get y() {
    return this.getStringAttribute('y');
  }
  public set y(value: string) {
    this._y = value;
  }
  public resetY() {
    this._y = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yInput() {
    return this._y;
  }
}

export class Oauth2ClientJwkList extends cdktf.ComplexList {
  public internalValue? : Oauth2ClientJwk[] | cdktf.IResolvable

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
  public get(index: number): Oauth2ClientJwkOutputReference {
    return new Oauth2ClientJwkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client hydra_oauth2_client}
*/
export class Oauth2Client extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hydra_oauth2_client";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Oauth2Client resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Oauth2Client to import
  * @param importFromId The id of the existing Oauth2Client that should be imported. Refer to the {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Oauth2Client to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hydra_oauth2_client", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/oauth2_client hydra_oauth2_client} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Oauth2ClientConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Oauth2ClientConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'hydra_oauth2_client',
      terraformGeneratorMetadata: {
        providerName: 'hydra',
        providerVersion: '0.5.4',
        providerVersionConstraint: '0.5.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessTokenStrategy = config.accessTokenStrategy;
    this._allowedCorsOrigins = config.allowedCorsOrigins;
    this._audience = config.audience;
    this._authorizationCodeGrantAccessTokenLifespan = config.authorizationCodeGrantAccessTokenLifespan;
    this._authorizationCodeGrantIdTokenLifespan = config.authorizationCodeGrantIdTokenLifespan;
    this._authorizationCodeGrantRefreshTokenLifespan = config.authorizationCodeGrantRefreshTokenLifespan;
    this._backchannelLogoutSessionRequired = config.backchannelLogoutSessionRequired;
    this._backchannelLogoutUri = config.backchannelLogoutUri;
    this._clientCredentialsGrantAccessTokenLifespan = config.clientCredentialsGrantAccessTokenLifespan;
    this._clientId = config.clientId;
    this._clientName = config.clientName;
    this._clientSecret = config.clientSecret;
    this._clientSecretExpiresAt = config.clientSecretExpiresAt;
    this._clientUri = config.clientUri;
    this._contacts = config.contacts;
    this._frontchannelLogoutSessionRequired = config.frontchannelLogoutSessionRequired;
    this._frontchannelLogoutUri = config.frontchannelLogoutUri;
    this._grantTypes = config.grantTypes;
    this._id = config.id;
    this._implicitGrantAccessTokenLifespan = config.implicitGrantAccessTokenLifespan;
    this._implicitGrantIdTokenLifespan = config.implicitGrantIdTokenLifespan;
    this._jwksUri = config.jwksUri;
    this._jwtBearerGrantAccessTokenLifespan = config.jwtBearerGrantAccessTokenLifespan;
    this._logoUri = config.logoUri;
    this._metadata = config.metadata;
    this._metadataJson = config.metadataJson;
    this._owner = config.owner;
    this._policyUri = config.policyUri;
    this._postLogoutRedirectUris = config.postLogoutRedirectUris;
    this._redirectUris = config.redirectUris;
    this._refreshTokenGrantAccessTokenLifespan = config.refreshTokenGrantAccessTokenLifespan;
    this._refreshTokenGrantIdTokenLifespan = config.refreshTokenGrantIdTokenLifespan;
    this._refreshTokenGrantRefreshTokenLifespan = config.refreshTokenGrantRefreshTokenLifespan;
    this._requestObjectSigningAlg = config.requestObjectSigningAlg;
    this._requestUris = config.requestUris;
    this._responseTypes = config.responseTypes;
    this._scopes = config.scopes;
    this._sectorIdentifierUri = config.sectorIdentifierUri;
    this._skipConsent = config.skipConsent;
    this._subjectType = config.subjectType;
    this._tokenEndpointAuthMethod = config.tokenEndpointAuthMethod;
    this._tokenEndpointAuthSigningAlg = config.tokenEndpointAuthSigningAlg;
    this._tosUri = config.tosUri;
    this._userinfoSignedResponseAlg = config.userinfoSignedResponseAlg;
    this._jwk.internalValue = config.jwk;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token_strategy - computed: false, optional: true, required: false
  private _accessTokenStrategy?: string; 
  public get accessTokenStrategy() {
    return this.getStringAttribute('access_token_strategy');
  }
  public set accessTokenStrategy(value: string) {
    this._accessTokenStrategy = value;
  }
  public resetAccessTokenStrategy() {
    this._accessTokenStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenStrategyInput() {
    return this._accessTokenStrategy;
  }

  // allowed_cors_origins - computed: false, optional: true, required: false
  private _allowedCorsOrigins?: string[]; 
  public get allowedCorsOrigins() {
    return this.getListAttribute('allowed_cors_origins');
  }
  public set allowedCorsOrigins(value: string[]) {
    this._allowedCorsOrigins = value;
  }
  public resetAllowedCorsOrigins() {
    this._allowedCorsOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedCorsOriginsInput() {
    return this._allowedCorsOrigins;
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string[]; 
  public get audience() {
    return this.getListAttribute('audience');
  }
  public set audience(value: string[]) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // authorization_code_grant_access_token_lifespan - computed: false, optional: true, required: false
  private _authorizationCodeGrantAccessTokenLifespan?: string; 
  public get authorizationCodeGrantAccessTokenLifespan() {
    return this.getStringAttribute('authorization_code_grant_access_token_lifespan');
  }
  public set authorizationCodeGrantAccessTokenLifespan(value: string) {
    this._authorizationCodeGrantAccessTokenLifespan = value;
  }
  public resetAuthorizationCodeGrantAccessTokenLifespan() {
    this._authorizationCodeGrantAccessTokenLifespan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationCodeGrantAccessTokenLifespanInput() {
    return this._authorizationCodeGrantAccessTokenLifespan;
  }

  // authorization_code_grant_id_token_lifespan - computed: false, optional: true, required: false
  private _authorizationCodeGrantIdTokenLifespan?: string; 
  public get authorizationCodeGrantIdTokenLifespan() {
    return this.getStringAttribute('authorization_code_grant_id_token_lifespan');
  }
  public set authorizationCodeGrantIdTokenLifespan(value: string) {
    this._authorizationCodeGrantIdTokenLifespan = value;
  }
  public resetAuthorizationCodeGrantIdTokenLifespan() {
    this._authorizationCodeGrantIdTokenLifespan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationCodeGrantIdTokenLifespanInput() {
    return this._authorizationCodeGrantIdTokenLifespan;
  }

  // authorization_code_grant_refresh_token_lifespan - computed: false, optional: true, required: false
  private _authorizationCodeGrantRefreshTokenLifespan?: string; 
  public get authorizationCodeGrantRefreshTokenLifespan() {
    return this.getStringAttribute('authorization_code_grant_refresh_token_lifespan');
  }
  public set authorizationCodeGrantRefreshTokenLifespan(value: string) {
    this._authorizationCodeGrantRefreshTokenLifespan = value;
  }
  public resetAuthorizationCodeGrantRefreshTokenLifespan() {
    this._authorizationCodeGrantRefreshTokenLifespan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationCodeGrantRefreshTokenLifespanInput() {
    return this._authorizationCodeGrantRefreshTokenLifespan;
  }

  // backchannel_logout_session_required - computed: false, optional: true, required: false
  private _backchannelLogoutSessionRequired?: boolean | cdktf.IResolvable; 
  public get backchannelLogoutSessionRequired() {
    return this.getBooleanAttribute('backchannel_logout_session_required');
  }
  public set backchannelLogoutSessionRequired(value: boolean | cdktf.IResolvable) {
    this._backchannelLogoutSessionRequired = value;
  }
  public resetBackchannelLogoutSessionRequired() {
    this._backchannelLogoutSessionRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backchannelLogoutSessionRequiredInput() {
    return this._backchannelLogoutSessionRequired;
  }

  // backchannel_logout_uri - computed: false, optional: true, required: false
  private _backchannelLogoutUri?: string; 
  public get backchannelLogoutUri() {
    return this.getStringAttribute('backchannel_logout_uri');
  }
  public set backchannelLogoutUri(value: string) {
    this._backchannelLogoutUri = value;
  }
  public resetBackchannelLogoutUri() {
    this._backchannelLogoutUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backchannelLogoutUriInput() {
    return this._backchannelLogoutUri;
  }

  // client_credentials_grant_access_token_lifespan - computed: false, optional: true, required: false
  private _clientCredentialsGrantAccessTokenLifespan?: string; 
  public get clientCredentialsGrantAccessTokenLifespan() {
    return this.getStringAttribute('client_credentials_grant_access_token_lifespan');
  }
  public set clientCredentialsGrantAccessTokenLifespan(value: string) {
    this._clientCredentialsGrantAccessTokenLifespan = value;
  }
  public resetClientCredentialsGrantAccessTokenLifespan() {
    this._clientCredentialsGrantAccessTokenLifespan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCredentialsGrantAccessTokenLifespanInput() {
    return this._clientCredentialsGrantAccessTokenLifespan;
  }

  // client_id - computed: true, optional: true, required: false
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

  // client_name - computed: false, optional: true, required: false
  private _clientName?: string; 
  public get clientName() {
    return this.getStringAttribute('client_name');
  }
  public set clientName(value: string) {
    this._clientName = value;
  }
  public resetClientName() {
    this._clientName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientNameInput() {
    return this._clientName;
  }

  // client_secret - computed: true, optional: true, required: false
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

  // client_secret_expires_at - computed: false, optional: true, required: false
  private _clientSecretExpiresAt?: number; 
  public get clientSecretExpiresAt() {
    return this.getNumberAttribute('client_secret_expires_at');
  }
  public set clientSecretExpiresAt(value: number) {
    this._clientSecretExpiresAt = value;
  }
  public resetClientSecretExpiresAt() {
    this._clientSecretExpiresAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretExpiresAtInput() {
    return this._clientSecretExpiresAt;
  }

  // client_uri - computed: false, optional: true, required: false
  private _clientUri?: string; 
  public get clientUri() {
    return this.getStringAttribute('client_uri');
  }
  public set clientUri(value: string) {
    this._clientUri = value;
  }
  public resetClientUri() {
    this._clientUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientUriInput() {
    return this._clientUri;
  }

  // contacts - computed: false, optional: true, required: false
  private _contacts?: string[]; 
  public get contacts() {
    return this.getListAttribute('contacts');
  }
  public set contacts(value: string[]) {
    this._contacts = value;
  }
  public resetContacts() {
    this._contacts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactsInput() {
    return this._contacts;
  }

  // frontchannel_logout_session_required - computed: false, optional: true, required: false
  private _frontchannelLogoutSessionRequired?: boolean | cdktf.IResolvable; 
  public get frontchannelLogoutSessionRequired() {
    return this.getBooleanAttribute('frontchannel_logout_session_required');
  }
  public set frontchannelLogoutSessionRequired(value: boolean | cdktf.IResolvable) {
    this._frontchannelLogoutSessionRequired = value;
  }
  public resetFrontchannelLogoutSessionRequired() {
    this._frontchannelLogoutSessionRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frontchannelLogoutSessionRequiredInput() {
    return this._frontchannelLogoutSessionRequired;
  }

  // frontchannel_logout_uri - computed: false, optional: true, required: false
  private _frontchannelLogoutUri?: string; 
  public get frontchannelLogoutUri() {
    return this.getStringAttribute('frontchannel_logout_uri');
  }
  public set frontchannelLogoutUri(value: string) {
    this._frontchannelLogoutUri = value;
  }
  public resetFrontchannelLogoutUri() {
    this._frontchannelLogoutUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frontchannelLogoutUriInput() {
    return this._frontchannelLogoutUri;
  }

  // grant_types - computed: false, optional: true, required: false
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

  // implicit_grant_access_token_lifespan - computed: false, optional: true, required: false
  private _implicitGrantAccessTokenLifespan?: string; 
  public get implicitGrantAccessTokenLifespan() {
    return this.getStringAttribute('implicit_grant_access_token_lifespan');
  }
  public set implicitGrantAccessTokenLifespan(value: string) {
    this._implicitGrantAccessTokenLifespan = value;
  }
  public resetImplicitGrantAccessTokenLifespan() {
    this._implicitGrantAccessTokenLifespan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get implicitGrantAccessTokenLifespanInput() {
    return this._implicitGrantAccessTokenLifespan;
  }

  // implicit_grant_id_token_lifespan - computed: false, optional: true, required: false
  private _implicitGrantIdTokenLifespan?: string; 
  public get implicitGrantIdTokenLifespan() {
    return this.getStringAttribute('implicit_grant_id_token_lifespan');
  }
  public set implicitGrantIdTokenLifespan(value: string) {
    this._implicitGrantIdTokenLifespan = value;
  }
  public resetImplicitGrantIdTokenLifespan() {
    this._implicitGrantIdTokenLifespan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get implicitGrantIdTokenLifespanInput() {
    return this._implicitGrantIdTokenLifespan;
  }

  // jwks_uri - computed: false, optional: true, required: false
  private _jwksUri?: string; 
  public get jwksUri() {
    return this.getStringAttribute('jwks_uri');
  }
  public set jwksUri(value: string) {
    this._jwksUri = value;
  }
  public resetJwksUri() {
    this._jwksUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksUriInput() {
    return this._jwksUri;
  }

  // jwt_bearer_grant_access_token_lifespan - computed: false, optional: true, required: false
  private _jwtBearerGrantAccessTokenLifespan?: string; 
  public get jwtBearerGrantAccessTokenLifespan() {
    return this.getStringAttribute('jwt_bearer_grant_access_token_lifespan');
  }
  public set jwtBearerGrantAccessTokenLifespan(value: string) {
    this._jwtBearerGrantAccessTokenLifespan = value;
  }
  public resetJwtBearerGrantAccessTokenLifespan() {
    this._jwtBearerGrantAccessTokenLifespan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtBearerGrantAccessTokenLifespanInput() {
    return this._jwtBearerGrantAccessTokenLifespan;
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

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // metadata_json - computed: false, optional: true, required: false
  private _metadataJson?: string; 
  public get metadataJson() {
    return this.getStringAttribute('metadata_json');
  }
  public set metadataJson(value: string) {
    this._metadataJson = value;
  }
  public resetMetadataJson() {
    this._metadataJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataJsonInput() {
    return this._metadataJson;
  }

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // policy_uri - computed: false, optional: true, required: false
  private _policyUri?: string; 
  public get policyUri() {
    return this.getStringAttribute('policy_uri');
  }
  public set policyUri(value: string) {
    this._policyUri = value;
  }
  public resetPolicyUri() {
    this._policyUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyUriInput() {
    return this._policyUri;
  }

  // post_logout_redirect_uris - computed: false, optional: true, required: false
  private _postLogoutRedirectUris?: string[]; 
  public get postLogoutRedirectUris() {
    return this.getListAttribute('post_logout_redirect_uris');
  }
  public set postLogoutRedirectUris(value: string[]) {
    this._postLogoutRedirectUris = value;
  }
  public resetPostLogoutRedirectUris() {
    this._postLogoutRedirectUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postLogoutRedirectUrisInput() {
    return this._postLogoutRedirectUris;
  }

  // redirect_uris - computed: false, optional: true, required: false
  private _redirectUris?: string[]; 
  public get redirectUris() {
    return this.getListAttribute('redirect_uris');
  }
  public set redirectUris(value: string[]) {
    this._redirectUris = value;
  }
  public resetRedirectUris() {
    this._redirectUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrisInput() {
    return this._redirectUris;
  }

  // refresh_token_grant_access_token_lifespan - computed: false, optional: true, required: false
  private _refreshTokenGrantAccessTokenLifespan?: string; 
  public get refreshTokenGrantAccessTokenLifespan() {
    return this.getStringAttribute('refresh_token_grant_access_token_lifespan');
  }
  public set refreshTokenGrantAccessTokenLifespan(value: string) {
    this._refreshTokenGrantAccessTokenLifespan = value;
  }
  public resetRefreshTokenGrantAccessTokenLifespan() {
    this._refreshTokenGrantAccessTokenLifespan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenGrantAccessTokenLifespanInput() {
    return this._refreshTokenGrantAccessTokenLifespan;
  }

  // refresh_token_grant_id_token_lifespan - computed: false, optional: true, required: false
  private _refreshTokenGrantIdTokenLifespan?: string; 
  public get refreshTokenGrantIdTokenLifespan() {
    return this.getStringAttribute('refresh_token_grant_id_token_lifespan');
  }
  public set refreshTokenGrantIdTokenLifespan(value: string) {
    this._refreshTokenGrantIdTokenLifespan = value;
  }
  public resetRefreshTokenGrantIdTokenLifespan() {
    this._refreshTokenGrantIdTokenLifespan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenGrantIdTokenLifespanInput() {
    return this._refreshTokenGrantIdTokenLifespan;
  }

  // refresh_token_grant_refresh_token_lifespan - computed: false, optional: true, required: false
  private _refreshTokenGrantRefreshTokenLifespan?: string; 
  public get refreshTokenGrantRefreshTokenLifespan() {
    return this.getStringAttribute('refresh_token_grant_refresh_token_lifespan');
  }
  public set refreshTokenGrantRefreshTokenLifespan(value: string) {
    this._refreshTokenGrantRefreshTokenLifespan = value;
  }
  public resetRefreshTokenGrantRefreshTokenLifespan() {
    this._refreshTokenGrantRefreshTokenLifespan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenGrantRefreshTokenLifespanInput() {
    return this._refreshTokenGrantRefreshTokenLifespan;
  }

  // request_object_signing_alg - computed: false, optional: true, required: false
  private _requestObjectSigningAlg?: string; 
  public get requestObjectSigningAlg() {
    return this.getStringAttribute('request_object_signing_alg');
  }
  public set requestObjectSigningAlg(value: string) {
    this._requestObjectSigningAlg = value;
  }
  public resetRequestObjectSigningAlg() {
    this._requestObjectSigningAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestObjectSigningAlgInput() {
    return this._requestObjectSigningAlg;
  }

  // request_uris - computed: false, optional: true, required: false
  private _requestUris?: string[]; 
  public get requestUris() {
    return this.getListAttribute('request_uris');
  }
  public set requestUris(value: string[]) {
    this._requestUris = value;
  }
  public resetRequestUris() {
    this._requestUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestUrisInput() {
    return this._requestUris;
  }

  // response_types - computed: false, optional: true, required: false
  private _responseTypes?: string[]; 
  public get responseTypes() {
    return this.getListAttribute('response_types');
  }
  public set responseTypes(value: string[]) {
    this._responseTypes = value;
  }
  public resetResponseTypes() {
    this._responseTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTypesInput() {
    return this._responseTypes;
  }

  // scopes - computed: true, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // sector_identifier_uri - computed: false, optional: true, required: false
  private _sectorIdentifierUri?: string; 
  public get sectorIdentifierUri() {
    return this.getStringAttribute('sector_identifier_uri');
  }
  public set sectorIdentifierUri(value: string) {
    this._sectorIdentifierUri = value;
  }
  public resetSectorIdentifierUri() {
    this._sectorIdentifierUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sectorIdentifierUriInput() {
    return this._sectorIdentifierUri;
  }

  // skip_consent - computed: false, optional: true, required: false
  private _skipConsent?: boolean | cdktf.IResolvable; 
  public get skipConsent() {
    return this.getBooleanAttribute('skip_consent');
  }
  public set skipConsent(value: boolean | cdktf.IResolvable) {
    this._skipConsent = value;
  }
  public resetSkipConsent() {
    this._skipConsent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipConsentInput() {
    return this._skipConsent;
  }

  // subject_type - computed: true, optional: true, required: false
  private _subjectType?: string; 
  public get subjectType() {
    return this.getStringAttribute('subject_type');
  }
  public set subjectType(value: string) {
    this._subjectType = value;
  }
  public resetSubjectType() {
    this._subjectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectTypeInput() {
    return this._subjectType;
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

  // token_endpoint_auth_signing_alg - computed: false, optional: true, required: false
  private _tokenEndpointAuthSigningAlg?: string; 
  public get tokenEndpointAuthSigningAlg() {
    return this.getStringAttribute('token_endpoint_auth_signing_alg');
  }
  public set tokenEndpointAuthSigningAlg(value: string) {
    this._tokenEndpointAuthSigningAlg = value;
  }
  public resetTokenEndpointAuthSigningAlg() {
    this._tokenEndpointAuthSigningAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointAuthSigningAlgInput() {
    return this._tokenEndpointAuthSigningAlg;
  }

  // tos_uri - computed: false, optional: true, required: false
  private _tosUri?: string; 
  public get tosUri() {
    return this.getStringAttribute('tos_uri');
  }
  public set tosUri(value: string) {
    this._tosUri = value;
  }
  public resetTosUri() {
    this._tosUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosUriInput() {
    return this._tosUri;
  }

  // userinfo_signed_response_alg - computed: true, optional: true, required: false
  private _userinfoSignedResponseAlg?: string; 
  public get userinfoSignedResponseAlg() {
    return this.getStringAttribute('userinfo_signed_response_alg');
  }
  public set userinfoSignedResponseAlg(value: string) {
    this._userinfoSignedResponseAlg = value;
  }
  public resetUserinfoSignedResponseAlg() {
    this._userinfoSignedResponseAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userinfoSignedResponseAlgInput() {
    return this._userinfoSignedResponseAlg;
  }

  // jwk - computed: false, optional: true, required: false
  private _jwk = new Oauth2ClientJwkList(this, "jwk", false);
  public get jwk() {
    return this._jwk;
  }
  public putJwk(value: Oauth2ClientJwk[] | cdktf.IResolvable) {
    this._jwk.internalValue = value;
  }
  public resetJwk() {
    this._jwk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwkInput() {
    return this._jwk.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_token_strategy: cdktf.stringToTerraform(this._accessTokenStrategy),
      allowed_cors_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedCorsOrigins),
      audience: cdktf.listMapper(cdktf.stringToTerraform, false)(this._audience),
      authorization_code_grant_access_token_lifespan: cdktf.stringToTerraform(this._authorizationCodeGrantAccessTokenLifespan),
      authorization_code_grant_id_token_lifespan: cdktf.stringToTerraform(this._authorizationCodeGrantIdTokenLifespan),
      authorization_code_grant_refresh_token_lifespan: cdktf.stringToTerraform(this._authorizationCodeGrantRefreshTokenLifespan),
      backchannel_logout_session_required: cdktf.booleanToTerraform(this._backchannelLogoutSessionRequired),
      backchannel_logout_uri: cdktf.stringToTerraform(this._backchannelLogoutUri),
      client_credentials_grant_access_token_lifespan: cdktf.stringToTerraform(this._clientCredentialsGrantAccessTokenLifespan),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_name: cdktf.stringToTerraform(this._clientName),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      client_secret_expires_at: cdktf.numberToTerraform(this._clientSecretExpiresAt),
      client_uri: cdktf.stringToTerraform(this._clientUri),
      contacts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._contacts),
      frontchannel_logout_session_required: cdktf.booleanToTerraform(this._frontchannelLogoutSessionRequired),
      frontchannel_logout_uri: cdktf.stringToTerraform(this._frontchannelLogoutUri),
      grant_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._grantTypes),
      id: cdktf.stringToTerraform(this._id),
      implicit_grant_access_token_lifespan: cdktf.stringToTerraform(this._implicitGrantAccessTokenLifespan),
      implicit_grant_id_token_lifespan: cdktf.stringToTerraform(this._implicitGrantIdTokenLifespan),
      jwks_uri: cdktf.stringToTerraform(this._jwksUri),
      jwt_bearer_grant_access_token_lifespan: cdktf.stringToTerraform(this._jwtBearerGrantAccessTokenLifespan),
      logo_uri: cdktf.stringToTerraform(this._logoUri),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      metadata_json: cdktf.stringToTerraform(this._metadataJson),
      owner: cdktf.stringToTerraform(this._owner),
      policy_uri: cdktf.stringToTerraform(this._policyUri),
      post_logout_redirect_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(this._postLogoutRedirectUris),
      redirect_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(this._redirectUris),
      refresh_token_grant_access_token_lifespan: cdktf.stringToTerraform(this._refreshTokenGrantAccessTokenLifespan),
      refresh_token_grant_id_token_lifespan: cdktf.stringToTerraform(this._refreshTokenGrantIdTokenLifespan),
      refresh_token_grant_refresh_token_lifespan: cdktf.stringToTerraform(this._refreshTokenGrantRefreshTokenLifespan),
      request_object_signing_alg: cdktf.stringToTerraform(this._requestObjectSigningAlg),
      request_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(this._requestUris),
      response_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._responseTypes),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
      sector_identifier_uri: cdktf.stringToTerraform(this._sectorIdentifierUri),
      skip_consent: cdktf.booleanToTerraform(this._skipConsent),
      subject_type: cdktf.stringToTerraform(this._subjectType),
      token_endpoint_auth_method: cdktf.stringToTerraform(this._tokenEndpointAuthMethod),
      token_endpoint_auth_signing_alg: cdktf.stringToTerraform(this._tokenEndpointAuthSigningAlg),
      tos_uri: cdktf.stringToTerraform(this._tosUri),
      userinfo_signed_response_alg: cdktf.stringToTerraform(this._userinfoSignedResponseAlg),
      jwk: cdktf.listMapper(oauth2ClientJwkToTerraform, true)(this._jwk.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_token_strategy: {
        value: cdktf.stringToHclTerraform(this._accessTokenStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowed_cors_origins: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedCorsOrigins),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      audience: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._audience),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      authorization_code_grant_access_token_lifespan: {
        value: cdktf.stringToHclTerraform(this._authorizationCodeGrantAccessTokenLifespan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorization_code_grant_id_token_lifespan: {
        value: cdktf.stringToHclTerraform(this._authorizationCodeGrantIdTokenLifespan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorization_code_grant_refresh_token_lifespan: {
        value: cdktf.stringToHclTerraform(this._authorizationCodeGrantRefreshTokenLifespan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backchannel_logout_session_required: {
        value: cdktf.booleanToHclTerraform(this._backchannelLogoutSessionRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      backchannel_logout_uri: {
        value: cdktf.stringToHclTerraform(this._backchannelLogoutUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_credentials_grant_access_token_lifespan: {
        value: cdktf.stringToHclTerraform(this._clientCredentialsGrantAccessTokenLifespan),
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
      client_name: {
        value: cdktf.stringToHclTerraform(this._clientName),
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
      client_secret_expires_at: {
        value: cdktf.numberToHclTerraform(this._clientSecretExpiresAt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_uri: {
        value: cdktf.stringToHclTerraform(this._clientUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contacts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._contacts),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      frontchannel_logout_session_required: {
        value: cdktf.booleanToHclTerraform(this._frontchannelLogoutSessionRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      frontchannel_logout_uri: {
        value: cdktf.stringToHclTerraform(this._frontchannelLogoutUri),
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
      implicit_grant_access_token_lifespan: {
        value: cdktf.stringToHclTerraform(this._implicitGrantAccessTokenLifespan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      implicit_grant_id_token_lifespan: {
        value: cdktf.stringToHclTerraform(this._implicitGrantIdTokenLifespan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jwks_uri: {
        value: cdktf.stringToHclTerraform(this._jwksUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jwt_bearer_grant_access_token_lifespan: {
        value: cdktf.stringToHclTerraform(this._jwtBearerGrantAccessTokenLifespan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logo_uri: {
        value: cdktf.stringToHclTerraform(this._logoUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      metadata_json: {
        value: cdktf.stringToHclTerraform(this._metadataJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner: {
        value: cdktf.stringToHclTerraform(this._owner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_uri: {
        value: cdktf.stringToHclTerraform(this._policyUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      post_logout_redirect_uris: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._postLogoutRedirectUris),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      redirect_uris: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._redirectUris),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      refresh_token_grant_access_token_lifespan: {
        value: cdktf.stringToHclTerraform(this._refreshTokenGrantAccessTokenLifespan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      refresh_token_grant_id_token_lifespan: {
        value: cdktf.stringToHclTerraform(this._refreshTokenGrantIdTokenLifespan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      refresh_token_grant_refresh_token_lifespan: {
        value: cdktf.stringToHclTerraform(this._refreshTokenGrantRefreshTokenLifespan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_object_signing_alg: {
        value: cdktf.stringToHclTerraform(this._requestObjectSigningAlg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_uris: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._requestUris),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      response_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._responseTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scopes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      sector_identifier_uri: {
        value: cdktf.stringToHclTerraform(this._sectorIdentifierUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_consent: {
        value: cdktf.booleanToHclTerraform(this._skipConsent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      subject_type: {
        value: cdktf.stringToHclTerraform(this._subjectType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_endpoint_auth_method: {
        value: cdktf.stringToHclTerraform(this._tokenEndpointAuthMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_endpoint_auth_signing_alg: {
        value: cdktf.stringToHclTerraform(this._tokenEndpointAuthSigningAlg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tos_uri: {
        value: cdktf.stringToHclTerraform(this._tosUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      userinfo_signed_response_alg: {
        value: cdktf.stringToHclTerraform(this._userinfoSignedResponseAlg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jwk: {
        value: cdktf.listMapperHcl(oauth2ClientJwkToHclTerraform, true)(this._jwk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Oauth2ClientJwkList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
