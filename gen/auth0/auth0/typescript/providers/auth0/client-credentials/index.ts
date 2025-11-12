// https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/client_credentials
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClientCredentialsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure the method to use when making requests to any endpoint that requires this client to authenticate. Options include `none` (public client without a client secret), `client_secret_post` (confidential client using HTTP POST parameters), `client_secret_basic` (confidential client using HTTP Basic), `private_key_jwt` (confidential client using a Private Key JWT), `tls_client_auth` (confidential client using CA-based mTLS authentication), `self_signed_tls_client_auth` (confidential client using mTLS authentication utilizing a self-signed certificate).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/client_credentials#authentication_method ClientCredentials#authentication_method}
  */
  readonly authenticationMethod?: string;
  /**
  * The ID of the client for which to configure the authentication method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/client_credentials#client_id ClientCredentials#client_id}
  */
  readonly clientId: string;
  /**
  * Secret for the client when using `client_secret_post` or `client_secret_basic` authentication method. Keep this private. To access this attribute you need to add the `read:client_keys` scope to the Terraform client. Otherwise, the attribute will contain an empty string. The attribute will also be an empty string in case `private_key_jwt` is selected as an authentication method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/client_credentials#client_secret ClientCredentials#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/client_credentials#id ClientCredentials#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * private_key_jwt block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/client_credentials#private_key_jwt ClientCredentials#private_key_jwt}
  */
  readonly privateKeyJwt?: ClientCredentialsPrivateKeyJwt;
  /**
  * self_signed_tls_client_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/client_credentials#self_signed_tls_client_auth ClientCredentials#self_signed_tls_client_auth}
  */
  readonly selfSignedTlsClientAuth?: ClientCredentialsSelfSignedTlsClientAuth;
  /**
  * signed_request_object block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/client_credentials#signed_request_object ClientCredentials#signed_request_object}
  */
  readonly signedRequestObject?: ClientCredentialsSignedRequestObject;
  /**
  * tls_client_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/client_credentials#tls_client_auth ClientCredentials#tls_client_auth}
  */
  readonly tlsClientAuth?: ClientCredentialsTlsClientAuth;
}
export interface ClientCredentialsPrivateKeyJwtCredentials {
  /**
  * Algorithm which will be used with the credential. Can be one of `RS256`, `RS384`, `PS256`. If not specified, `RS256` will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/client_credentials#algorithm ClientCredentials#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Credential type. Supported types: `public_key`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/client_credentials#credential_type ClientCredentials#credential_type}
  */
  readonly credentialType: string;
  /**
  * The ISO 8601 formatted date representing the expiration of the credential. It is not possible to set this to never expire after it has been set. Recreate the certificate if needed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/client_credentials#expires_at ClientCredentials#expires_at}
  */
  readonly expiresAt?: string;
  /**
  * Friendly name for a credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/client_credentials#name ClientCredentials#name}
  */
  readonly name?: string;
  /**
  * Parse expiry from x509 certificate. If true, attempts to parse the expiry date from the provided PEM. If also the `expires_at` is set the credential expiry will be set to the explicit `expires_at` value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/client_credentials#parse_expiry_from_cert ClientCredentials#parse_expiry_from_cert}
  */
  readonly parseExpiryFromCert?: boolean | cdktf.IResolvable;
  /**
  * PEM-formatted public key (SPKI and PKCS1) or X509 certificate. Must be JSON escaped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/client_credentials#pem ClientCredentials#pem}
  */
  readonly pem: string;
}

export function clientCredentialsPrivateKeyJwtCredentialsToTerraform(struct?: ClientCredentialsPrivateKeyJwtCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    credential_type: cdktf.stringToTerraform(struct!.credentialType),
    expires_at: cdktf.stringToTerraform(struct!.expiresAt),
    name: cdktf.stringToTerraform(struct!.name),
    parse_expiry_from_cert: cdktf.booleanToTerraform(struct!.parseExpiryFromCert),
    pem: cdktf.stringToTerraform(struct!.pem),
  }
}


export function clientCredentialsPrivateKeyJwtCredentialsToHclTerraform(struct?: ClientCredentialsPrivateKeyJwtCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credential_type: {
      value: cdktf.stringToHclTerraform(struct!.credentialType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expires_at: {
      value: cdktf.stringToHclTerraform(struct!.expiresAt),
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
    parse_expiry_from_cert: {
      value: cdktf.booleanToHclTerraform(struct!.parseExpiryFromCert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pem: {
      value: cdktf.stringToHclTerraform(struct!.pem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientCredentialsPrivateKeyJwtCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientCredentialsPrivateKeyJwtCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._credentialType !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialType = this._credentialType;
    }
    if (this._expiresAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiresAt = this._expiresAt;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parseExpiryFromCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseExpiryFromCert = this._parseExpiryFromCert;
    }
    if (this._pem !== undefined) {
      hasAnyValues = true;
      internalValueResult.pem = this._pem;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientCredentialsPrivateKeyJwtCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._credentialType = undefined;
      this._expiresAt = undefined;
      this._name = undefined;
      this._parseExpiryFromCert = undefined;
      this._pem = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._credentialType = value.credentialType;
      this._expiresAt = value.expiresAt;
      this._name = value.name;
      this._parseExpiryFromCert = value.parseExpiryFromCert;
      this._pem = value.pem;
    }
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // credential_type - computed: false, optional: false, required: true
  private _credentialType?: string; 
  public get credentialType() {
    return this.getStringAttribute('credential_type');
  }
  public set credentialType(value: string) {
    this._credentialType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialTypeInput() {
    return this._credentialType;
  }

  // expires_at - computed: true, optional: true, required: false
  private _expiresAt?: string; 
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }
  public set expiresAt(value: string) {
    this._expiresAt = value;
  }
  public resetExpiresAt() {
    this._expiresAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresAtInput() {
    return this._expiresAt;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getStringAttribute('key_id');
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

  // parse_expiry_from_cert - computed: false, optional: true, required: false
  private _parseExpiryFromCert?: boolean | cdktf.IResolvable; 
  public get parseExpiryFromCert() {
    return this.getBooleanAttribute('parse_expiry_from_cert');
  }
  public set parseExpiryFromCert(value: boolean | cdktf.IResolvable) {
    this._parseExpiryFromCert = value;
  }
  public resetParseExpiryFromCert() {
    this._parseExpiryFromCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseExpiryFromCertInput() {
    return this._parseExpiryFromCert;
  }

  // pem - computed: false, optional: false, required: true
  private _pem?: string; 
  public get pem() {
    return this.getStringAttribute('pem');
  }
  public set pem(value: string) {
    this._pem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pemInput() {
    return this._pem;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class ClientCredentialsPrivateKeyJwtCredentialsList extends cdktf.ComplexList {
  public internalValue? : ClientCredentialsPrivateKeyJwtCredentials[] | cdktf.IResolvable

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
  public get(index: number): ClientCredentialsPrivateKeyJwtCredentialsOutputReference {
    return new ClientCredentialsPrivateKeyJwtCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientCredentialsPrivateKeyJwt {
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/client_credentials#credentials ClientCredentials#credentials}
  */
  readonly credentials: ClientCredentialsPrivateKeyJwtCredentials[] | cdktf.IResolvable;
}

export function clientCredentialsPrivateKeyJwtToTerraform(struct?: ClientCredentialsPrivateKeyJwtOutputReference | ClientCredentialsPrivateKeyJwt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials: cdktf.listMapper(clientCredentialsPrivateKeyJwtCredentialsToTerraform, true)(struct!.credentials),
  }
}


export function clientCredentialsPrivateKeyJwtToHclTerraform(struct?: ClientCredentialsPrivateKeyJwtOutputReference | ClientCredentialsPrivateKeyJwt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials: {
      value: cdktf.listMapperHcl(clientCredentialsPrivateKeyJwtCredentialsToHclTerraform, true)(struct!.credentials),
      isBlock: true,
      type: "list",
      storageClassType: "ClientCredentialsPrivateKeyJwtCredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientCredentialsPrivateKeyJwtOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientCredentialsPrivateKeyJwt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientCredentialsPrivateKeyJwt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._credentials.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._credentials.internalValue = value.credentials;
    }
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials = new ClientCredentialsPrivateKeyJwtCredentialsList(this, "credentials", false);
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: ClientCredentialsPrivateKeyJwtCredentials[] | cdktf.IResolvable) {
    this._credentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }
}
export interface ClientCredentialsSelfSignedTlsClientAuthCredentials {
  /**
  * Credential type. Supported types: `x509_cert`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/client_credentials#credential_type ClientCredentials#credential_type}
  */
  readonly credentialType?: string;
  /**
  * Friendly name for a credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/client_credentials#name ClientCredentials#name}
  */
  readonly name?: string;
  /**
  * PEM-formatted X509 certificate. Must be JSON escaped. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/client_credentials#pem ClientCredentials#pem}
  */
  readonly pem: string;
}

export function clientCredentialsSelfSignedTlsClientAuthCredentialsToTerraform(struct?: ClientCredentialsSelfSignedTlsClientAuthCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credential_type: cdktf.stringToTerraform(struct!.credentialType),
    name: cdktf.stringToTerraform(struct!.name),
    pem: cdktf.stringToTerraform(struct!.pem),
  }
}


export function clientCredentialsSelfSignedTlsClientAuthCredentialsToHclTerraform(struct?: ClientCredentialsSelfSignedTlsClientAuthCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credential_type: {
      value: cdktf.stringToHclTerraform(struct!.credentialType),
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
    pem: {
      value: cdktf.stringToHclTerraform(struct!.pem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientCredentialsSelfSignedTlsClientAuthCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientCredentialsSelfSignedTlsClientAuthCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialType !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialType = this._credentialType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pem !== undefined) {
      hasAnyValues = true;
      internalValueResult.pem = this._pem;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientCredentialsSelfSignedTlsClientAuthCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentialType = undefined;
      this._name = undefined;
      this._pem = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentialType = value.credentialType;
      this._name = value.name;
      this._pem = value.pem;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // credential_type - computed: false, optional: true, required: false
  private _credentialType?: string; 
  public get credentialType() {
    return this.getStringAttribute('credential_type');
  }
  public set credentialType(value: string) {
    this._credentialType = value;
  }
  public resetCredentialType() {
    this._credentialType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialTypeInput() {
    return this._credentialType;
  }

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // pem - computed: false, optional: false, required: true
  private _pem?: string; 
  public get pem() {
    return this.getStringAttribute('pem');
  }
  public set pem(value: string) {
    this._pem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pemInput() {
    return this._pem;
  }

  // thumbprint_sha256 - computed: true, optional: false, required: false
  public get thumbprintSha256() {
    return this.getStringAttribute('thumbprint_sha256');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class ClientCredentialsSelfSignedTlsClientAuthCredentialsList extends cdktf.ComplexList {
  public internalValue? : ClientCredentialsSelfSignedTlsClientAuthCredentials[] | cdktf.IResolvable

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
  public get(index: number): ClientCredentialsSelfSignedTlsClientAuthCredentialsOutputReference {
    return new ClientCredentialsSelfSignedTlsClientAuthCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientCredentialsSelfSignedTlsClientAuth {
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/client_credentials#credentials ClientCredentials#credentials}
  */
  readonly credentials: ClientCredentialsSelfSignedTlsClientAuthCredentials[] | cdktf.IResolvable;
}

export function clientCredentialsSelfSignedTlsClientAuthToTerraform(struct?: ClientCredentialsSelfSignedTlsClientAuthOutputReference | ClientCredentialsSelfSignedTlsClientAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials: cdktf.listMapper(clientCredentialsSelfSignedTlsClientAuthCredentialsToTerraform, true)(struct!.credentials),
  }
}


export function clientCredentialsSelfSignedTlsClientAuthToHclTerraform(struct?: ClientCredentialsSelfSignedTlsClientAuthOutputReference | ClientCredentialsSelfSignedTlsClientAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials: {
      value: cdktf.listMapperHcl(clientCredentialsSelfSignedTlsClientAuthCredentialsToHclTerraform, true)(struct!.credentials),
      isBlock: true,
      type: "list",
      storageClassType: "ClientCredentialsSelfSignedTlsClientAuthCredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientCredentialsSelfSignedTlsClientAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientCredentialsSelfSignedTlsClientAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientCredentialsSelfSignedTlsClientAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._credentials.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._credentials.internalValue = value.credentials;
    }
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials = new ClientCredentialsSelfSignedTlsClientAuthCredentialsList(this, "credentials", false);
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: ClientCredentialsSelfSignedTlsClientAuthCredentials[] | cdktf.IResolvable) {
    this._credentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }
}
export interface ClientCredentialsSignedRequestObjectCredentials {
  /**
  * Algorithm which will be used with the credential. Can be one of `RS256`, `RS384`, `PS256`. If not specified, `RS256` will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/client_credentials#algorithm ClientCredentials#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Credential type. Supported types: `public_key`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/client_credentials#credential_type ClientCredentials#credential_type}
  */
  readonly credentialType: string;
  /**
  * The ISO 8601 formatted date representing the expiration of the credential. It is not possible to set this to never expire after it has been set. Recreate the certificate if needed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/client_credentials#expires_at ClientCredentials#expires_at}
  */
  readonly expiresAt?: string;
  /**
  * Friendly name for a credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/client_credentials#name ClientCredentials#name}
  */
  readonly name?: string;
  /**
  * Parse expiry from x509 certificate. If true, attempts to parse the expiry date from the provided PEM. If also the `expires_at` is set the credential expiry will be set to the explicit `expires_at` value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/client_credentials#parse_expiry_from_cert ClientCredentials#parse_expiry_from_cert}
  */
  readonly parseExpiryFromCert?: boolean | cdktf.IResolvable;
  /**
  * PEM-formatted public key (SPKI and PKCS1) or X509 certificate. Must be JSON escaped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/client_credentials#pem ClientCredentials#pem}
  */
  readonly pem: string;
}

export function clientCredentialsSignedRequestObjectCredentialsToTerraform(struct?: ClientCredentialsSignedRequestObjectCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    credential_type: cdktf.stringToTerraform(struct!.credentialType),
    expires_at: cdktf.stringToTerraform(struct!.expiresAt),
    name: cdktf.stringToTerraform(struct!.name),
    parse_expiry_from_cert: cdktf.booleanToTerraform(struct!.parseExpiryFromCert),
    pem: cdktf.stringToTerraform(struct!.pem),
  }
}


export function clientCredentialsSignedRequestObjectCredentialsToHclTerraform(struct?: ClientCredentialsSignedRequestObjectCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credential_type: {
      value: cdktf.stringToHclTerraform(struct!.credentialType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expires_at: {
      value: cdktf.stringToHclTerraform(struct!.expiresAt),
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
    parse_expiry_from_cert: {
      value: cdktf.booleanToHclTerraform(struct!.parseExpiryFromCert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pem: {
      value: cdktf.stringToHclTerraform(struct!.pem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientCredentialsSignedRequestObjectCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientCredentialsSignedRequestObjectCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._credentialType !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialType = this._credentialType;
    }
    if (this._expiresAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiresAt = this._expiresAt;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parseExpiryFromCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseExpiryFromCert = this._parseExpiryFromCert;
    }
    if (this._pem !== undefined) {
      hasAnyValues = true;
      internalValueResult.pem = this._pem;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientCredentialsSignedRequestObjectCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._credentialType = undefined;
      this._expiresAt = undefined;
      this._name = undefined;
      this._parseExpiryFromCert = undefined;
      this._pem = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._credentialType = value.credentialType;
      this._expiresAt = value.expiresAt;
      this._name = value.name;
      this._parseExpiryFromCert = value.parseExpiryFromCert;
      this._pem = value.pem;
    }
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // credential_type - computed: false, optional: false, required: true
  private _credentialType?: string; 
  public get credentialType() {
    return this.getStringAttribute('credential_type');
  }
  public set credentialType(value: string) {
    this._credentialType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialTypeInput() {
    return this._credentialType;
  }

  // expires_at - computed: true, optional: true, required: false
  private _expiresAt?: string; 
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }
  public set expiresAt(value: string) {
    this._expiresAt = value;
  }
  public resetExpiresAt() {
    this._expiresAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresAtInput() {
    return this._expiresAt;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getStringAttribute('key_id');
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

  // parse_expiry_from_cert - computed: false, optional: true, required: false
  private _parseExpiryFromCert?: boolean | cdktf.IResolvable; 
  public get parseExpiryFromCert() {
    return this.getBooleanAttribute('parse_expiry_from_cert');
  }
  public set parseExpiryFromCert(value: boolean | cdktf.IResolvable) {
    this._parseExpiryFromCert = value;
  }
  public resetParseExpiryFromCert() {
    this._parseExpiryFromCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseExpiryFromCertInput() {
    return this._parseExpiryFromCert;
  }

  // pem - computed: false, optional: false, required: true
  private _pem?: string; 
  public get pem() {
    return this.getStringAttribute('pem');
  }
  public set pem(value: string) {
    this._pem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pemInput() {
    return this._pem;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class ClientCredentialsSignedRequestObjectCredentialsList extends cdktf.ComplexList {
  public internalValue? : ClientCredentialsSignedRequestObjectCredentials[] | cdktf.IResolvable

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
  public get(index: number): ClientCredentialsSignedRequestObjectCredentialsOutputReference {
    return new ClientCredentialsSignedRequestObjectCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientCredentialsSignedRequestObject {
  /**
  * Require JWT-secured authorization requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/client_credentials#required ClientCredentials#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/client_credentials#credentials ClientCredentials#credentials}
  */
  readonly credentials: ClientCredentialsSignedRequestObjectCredentials[] | cdktf.IResolvable;
}

export function clientCredentialsSignedRequestObjectToTerraform(struct?: ClientCredentialsSignedRequestObjectOutputReference | ClientCredentialsSignedRequestObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    required: cdktf.booleanToTerraform(struct!.required),
    credentials: cdktf.listMapper(clientCredentialsSignedRequestObjectCredentialsToTerraform, true)(struct!.credentials),
  }
}


export function clientCredentialsSignedRequestObjectToHclTerraform(struct?: ClientCredentialsSignedRequestObjectOutputReference | ClientCredentialsSignedRequestObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    credentials: {
      value: cdktf.listMapperHcl(clientCredentialsSignedRequestObjectCredentialsToHclTerraform, true)(struct!.credentials),
      isBlock: true,
      type: "list",
      storageClassType: "ClientCredentialsSignedRequestObjectCredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientCredentialsSignedRequestObjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientCredentialsSignedRequestObject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientCredentialsSignedRequestObject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._required = undefined;
      this._credentials.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._required = value.required;
      this._credentials.internalValue = value.credentials;
    }
  }

  // required - computed: true, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials = new ClientCredentialsSignedRequestObjectCredentialsList(this, "credentials", false);
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: ClientCredentialsSignedRequestObjectCredentials[] | cdktf.IResolvable) {
    this._credentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }
}
export interface ClientCredentialsTlsClientAuthCredentials {
  /**
  * Credential type. Supported types: `cert_subject_dn`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/client_credentials#credential_type ClientCredentials#credential_type}
  */
  readonly credentialType: string;
  /**
  * Friendly name for a credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/client_credentials#name ClientCredentials#name}
  */
  readonly name?: string;
  /**
  * PEM-formatted X509 certificate. Must be JSON escaped. Mutually exlusive with `subject_dn` property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/client_credentials#pem ClientCredentials#pem}
  */
  readonly pem?: string;
  /**
  * Subject Distinguished Name. Mutually exlusive with `pem` property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/client_credentials#subject_dn ClientCredentials#subject_dn}
  */
  readonly subjectDn?: string;
}

export function clientCredentialsTlsClientAuthCredentialsToTerraform(struct?: ClientCredentialsTlsClientAuthCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credential_type: cdktf.stringToTerraform(struct!.credentialType),
    name: cdktf.stringToTerraform(struct!.name),
    pem: cdktf.stringToTerraform(struct!.pem),
    subject_dn: cdktf.stringToTerraform(struct!.subjectDn),
  }
}


export function clientCredentialsTlsClientAuthCredentialsToHclTerraform(struct?: ClientCredentialsTlsClientAuthCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credential_type: {
      value: cdktf.stringToHclTerraform(struct!.credentialType),
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
    pem: {
      value: cdktf.stringToHclTerraform(struct!.pem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_dn: {
      value: cdktf.stringToHclTerraform(struct!.subjectDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientCredentialsTlsClientAuthCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientCredentialsTlsClientAuthCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialType !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialType = this._credentialType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pem !== undefined) {
      hasAnyValues = true;
      internalValueResult.pem = this._pem;
    }
    if (this._subjectDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectDn = this._subjectDn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientCredentialsTlsClientAuthCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentialType = undefined;
      this._name = undefined;
      this._pem = undefined;
      this._subjectDn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentialType = value.credentialType;
      this._name = value.name;
      this._pem = value.pem;
      this._subjectDn = value.subjectDn;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // credential_type - computed: false, optional: false, required: true
  private _credentialType?: string; 
  public get credentialType() {
    return this.getStringAttribute('credential_type');
  }
  public set credentialType(value: string) {
    this._credentialType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialTypeInput() {
    return this._credentialType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // pem - computed: false, optional: true, required: false
  private _pem?: string; 
  public get pem() {
    return this.getStringAttribute('pem');
  }
  public set pem(value: string) {
    this._pem = value;
  }
  public resetPem() {
    this._pem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pemInput() {
    return this._pem;
  }

  // subject_dn - computed: true, optional: true, required: false
  private _subjectDn?: string; 
  public get subjectDn() {
    return this.getStringAttribute('subject_dn');
  }
  public set subjectDn(value: string) {
    this._subjectDn = value;
  }
  public resetSubjectDn() {
    this._subjectDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectDnInput() {
    return this._subjectDn;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class ClientCredentialsTlsClientAuthCredentialsList extends cdktf.ComplexList {
  public internalValue? : ClientCredentialsTlsClientAuthCredentials[] | cdktf.IResolvable

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
  public get(index: number): ClientCredentialsTlsClientAuthCredentialsOutputReference {
    return new ClientCredentialsTlsClientAuthCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientCredentialsTlsClientAuth {
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/client_credentials#credentials ClientCredentials#credentials}
  */
  readonly credentials: ClientCredentialsTlsClientAuthCredentials[] | cdktf.IResolvable;
}

export function clientCredentialsTlsClientAuthToTerraform(struct?: ClientCredentialsTlsClientAuthOutputReference | ClientCredentialsTlsClientAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials: cdktf.listMapper(clientCredentialsTlsClientAuthCredentialsToTerraform, true)(struct!.credentials),
  }
}


export function clientCredentialsTlsClientAuthToHclTerraform(struct?: ClientCredentialsTlsClientAuthOutputReference | ClientCredentialsTlsClientAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials: {
      value: cdktf.listMapperHcl(clientCredentialsTlsClientAuthCredentialsToHclTerraform, true)(struct!.credentials),
      isBlock: true,
      type: "list",
      storageClassType: "ClientCredentialsTlsClientAuthCredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientCredentialsTlsClientAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientCredentialsTlsClientAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientCredentialsTlsClientAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._credentials.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._credentials.internalValue = value.credentials;
    }
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials = new ClientCredentialsTlsClientAuthCredentialsList(this, "credentials", false);
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: ClientCredentialsTlsClientAuthCredentials[] | cdktf.IResolvable) {
    this._credentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/client_credentials auth0_client_credentials}
*/
export class ClientCredentials extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "auth0_client_credentials";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClientCredentials resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClientCredentials to import
  * @param importFromId The id of the existing ClientCredentials that should be imported. Refer to the {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/client_credentials#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClientCredentials to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "auth0_client_credentials", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/client_credentials auth0_client_credentials} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClientCredentialsConfig
  */
  public constructor(scope: Construct, id: string, config: ClientCredentialsConfig) {
    super(scope, id, {
      terraformResourceType: 'auth0_client_credentials',
      terraformGeneratorMetadata: {
        providerName: 'auth0',
        providerVersion: '1.34.0',
        providerVersionConstraint: '1.34.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authenticationMethod = config.authenticationMethod;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._id = config.id;
    this._privateKeyJwt.internalValue = config.privateKeyJwt;
    this._selfSignedTlsClientAuth.internalValue = config.selfSignedTlsClientAuth;
    this._signedRequestObject.internalValue = config.signedRequestObject;
    this._tlsClientAuth.internalValue = config.tlsClientAuth;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_method - computed: true, optional: true, required: false
  private _authenticationMethod?: string; 
  public get authenticationMethod() {
    return this.getStringAttribute('authentication_method');
  }
  public set authenticationMethod(value: string) {
    this._authenticationMethod = value;
  }
  public resetAuthenticationMethod() {
    this._authenticationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMethodInput() {
    return this._authenticationMethod;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
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

  // private_key_jwt - computed: false, optional: true, required: false
  private _privateKeyJwt = new ClientCredentialsPrivateKeyJwtOutputReference(this, "private_key_jwt");
  public get privateKeyJwt() {
    return this._privateKeyJwt;
  }
  public putPrivateKeyJwt(value: ClientCredentialsPrivateKeyJwt) {
    this._privateKeyJwt.internalValue = value;
  }
  public resetPrivateKeyJwt() {
    this._privateKeyJwt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyJwtInput() {
    return this._privateKeyJwt.internalValue;
  }

  // self_signed_tls_client_auth - computed: false, optional: true, required: false
  private _selfSignedTlsClientAuth = new ClientCredentialsSelfSignedTlsClientAuthOutputReference(this, "self_signed_tls_client_auth");
  public get selfSignedTlsClientAuth() {
    return this._selfSignedTlsClientAuth;
  }
  public putSelfSignedTlsClientAuth(value: ClientCredentialsSelfSignedTlsClientAuth) {
    this._selfSignedTlsClientAuth.internalValue = value;
  }
  public resetSelfSignedTlsClientAuth() {
    this._selfSignedTlsClientAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfSignedTlsClientAuthInput() {
    return this._selfSignedTlsClientAuth.internalValue;
  }

  // signed_request_object - computed: false, optional: true, required: false
  private _signedRequestObject = new ClientCredentialsSignedRequestObjectOutputReference(this, "signed_request_object");
  public get signedRequestObject() {
    return this._signedRequestObject;
  }
  public putSignedRequestObject(value: ClientCredentialsSignedRequestObject) {
    this._signedRequestObject.internalValue = value;
  }
  public resetSignedRequestObject() {
    this._signedRequestObject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signedRequestObjectInput() {
    return this._signedRequestObject.internalValue;
  }

  // tls_client_auth - computed: false, optional: true, required: false
  private _tlsClientAuth = new ClientCredentialsTlsClientAuthOutputReference(this, "tls_client_auth");
  public get tlsClientAuth() {
    return this._tlsClientAuth;
  }
  public putTlsClientAuth(value: ClientCredentialsTlsClientAuth) {
    this._tlsClientAuth.internalValue = value;
  }
  public resetTlsClientAuth() {
    this._tlsClientAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsClientAuthInput() {
    return this._tlsClientAuth.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_method: cdktf.stringToTerraform(this._authenticationMethod),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      id: cdktf.stringToTerraform(this._id),
      private_key_jwt: clientCredentialsPrivateKeyJwtToTerraform(this._privateKeyJwt.internalValue),
      self_signed_tls_client_auth: clientCredentialsSelfSignedTlsClientAuthToTerraform(this._selfSignedTlsClientAuth.internalValue),
      signed_request_object: clientCredentialsSignedRequestObjectToTerraform(this._signedRequestObject.internalValue),
      tls_client_auth: clientCredentialsTlsClientAuthToTerraform(this._tlsClientAuth.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_method: {
        value: cdktf.stringToHclTerraform(this._authenticationMethod),
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
      client_secret: {
        value: cdktf.stringToHclTerraform(this._clientSecret),
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
      private_key_jwt: {
        value: clientCredentialsPrivateKeyJwtToHclTerraform(this._privateKeyJwt.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClientCredentialsPrivateKeyJwtList",
      },
      self_signed_tls_client_auth: {
        value: clientCredentialsSelfSignedTlsClientAuthToHclTerraform(this._selfSignedTlsClientAuth.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClientCredentialsSelfSignedTlsClientAuthList",
      },
      signed_request_object: {
        value: clientCredentialsSignedRequestObjectToHclTerraform(this._signedRequestObject.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClientCredentialsSignedRequestObjectList",
      },
      tls_client_auth: {
        value: clientCredentialsTlsClientAuthToHclTerraform(this._tlsClientAuth.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClientCredentialsTlsClientAuthList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
