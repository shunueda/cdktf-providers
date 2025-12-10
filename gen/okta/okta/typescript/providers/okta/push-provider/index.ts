// https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/push_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PushProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * The display name of the push provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/push_provider#name PushProvider#name}
  */
  readonly name: string;
  /**
  * The type of push provider. Valid values are `APNS` (Apple Push Notification Service) or `FCM` (Firebase Cloud Messaging).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/push_provider#provider_type PushProvider#provider_type}
  */
  readonly providerType: string;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/push_provider#configuration PushProvider#configuration}
  */
  readonly configuration?: PushProviderConfiguration;
}
export interface PushProviderConfigurationApnsConfiguration {
  /**
  * File name for Admin Console display.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/push_provider#file_name PushProvider#file_name}
  */
  readonly fileName?: string;
  /**
  * 10-character Key ID obtained from the Apple developer account. Required for APNS provider type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/push_provider#key_id PushProvider#key_id}
  */
  readonly keyId?: string;
  /**
  * 10-character Team ID used to develop the iOS app. Required for APNS provider type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/push_provider#team_id PushProvider#team_id}
  */
  readonly teamId?: string;
  /**
  * APNs private authentication token signing key. Required for APNS provider type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/push_provider#token_signing_key PushProvider#token_signing_key}
  */
  readonly tokenSigningKey?: string;
}

export function pushProviderConfigurationApnsConfigurationToTerraform(struct?: PushProviderConfigurationApnsConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_name: cdktf.stringToTerraform(struct!.fileName),
    key_id: cdktf.stringToTerraform(struct!.keyId),
    team_id: cdktf.stringToTerraform(struct!.teamId),
    token_signing_key: cdktf.stringToTerraform(struct!.tokenSigningKey),
  }
}


export function pushProviderConfigurationApnsConfigurationToHclTerraform(struct?: PushProviderConfigurationApnsConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_name: {
      value: cdktf.stringToHclTerraform(struct!.fileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_id: {
      value: cdktf.stringToHclTerraform(struct!.keyId),
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
    token_signing_key: {
      value: cdktf.stringToHclTerraform(struct!.tokenSigningKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PushProviderConfigurationApnsConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PushProviderConfigurationApnsConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileName = this._fileName;
    }
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._teamId !== undefined) {
      hasAnyValues = true;
      internalValueResult.teamId = this._teamId;
    }
    if (this._tokenSigningKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenSigningKey = this._tokenSigningKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PushProviderConfigurationApnsConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileName = undefined;
      this._keyId = undefined;
      this._teamId = undefined;
      this._tokenSigningKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileName = value.fileName;
      this._keyId = value.keyId;
      this._teamId = value.teamId;
      this._tokenSigningKey = value.tokenSigningKey;
    }
  }

  // file_name - computed: false, optional: true, required: false
  private _fileName?: string; 
  public get fileName() {
    return this.getStringAttribute('file_name');
  }
  public set fileName(value: string) {
    this._fileName = value;
  }
  public resetFileName() {
    this._fileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameInput() {
    return this._fileName;
  }

  // key_id - computed: false, optional: true, required: false
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
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

  // token_signing_key - computed: false, optional: true, required: false
  private _tokenSigningKey?: string; 
  public get tokenSigningKey() {
    return this.getStringAttribute('token_signing_key');
  }
  public set tokenSigningKey(value: string) {
    this._tokenSigningKey = value;
  }
  public resetTokenSigningKey() {
    this._tokenSigningKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenSigningKeyInput() {
    return this._tokenSigningKey;
  }
}
export interface PushProviderConfigurationFcmConfigurationServiceAccountJson {
  /**
  * The auth provider x509 cert URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/push_provider#auth_provider_x509_cert_url PushProvider#auth_provider_x509_cert_url}
  */
  readonly authProviderX509CertUrl?: string;
  /**
  * The auth URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/push_provider#auth_uri PushProvider#auth_uri}
  */
  readonly authUri?: string;
  /**
  * The client email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/push_provider#client_email PushProvider#client_email}
  */
  readonly clientEmail?: string;
  /**
  * The client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/push_provider#client_id PushProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * The client x509 cert URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/push_provider#client_x509_cert_url PushProvider#client_x509_cert_url}
  */
  readonly clientX509CertUrl?: string;
  /**
  * File name for Admin Console display.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/push_provider#file_name PushProvider#file_name}
  */
  readonly fileName?: string;
  /**
  * The private key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/push_provider#private_key PushProvider#private_key}
  */
  readonly privateKey?: string;
  /**
  * The private key ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/push_provider#private_key_id PushProvider#private_key_id}
  */
  readonly privateKeyId?: string;
  /**
  * The project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/push_provider#project_id PushProvider#project_id}
  */
  readonly projectId?: string;
  /**
  * The token URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/push_provider#token_uri PushProvider#token_uri}
  */
  readonly tokenUri?: string;
  /**
  * The type of the service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/push_provider#type PushProvider#type}
  */
  readonly type?: string;
}

export function pushProviderConfigurationFcmConfigurationServiceAccountJsonToTerraform(struct?: PushProviderConfigurationFcmConfigurationServiceAccountJson | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_provider_x509_cert_url: cdktf.stringToTerraform(struct!.authProviderX509CertUrl),
    auth_uri: cdktf.stringToTerraform(struct!.authUri),
    client_email: cdktf.stringToTerraform(struct!.clientEmail),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_x509_cert_url: cdktf.stringToTerraform(struct!.clientX509CertUrl),
    file_name: cdktf.stringToTerraform(struct!.fileName),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    private_key_id: cdktf.stringToTerraform(struct!.privateKeyId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    token_uri: cdktf.stringToTerraform(struct!.tokenUri),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function pushProviderConfigurationFcmConfigurationServiceAccountJsonToHclTerraform(struct?: PushProviderConfigurationFcmConfigurationServiceAccountJson | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_provider_x509_cert_url: {
      value: cdktf.stringToHclTerraform(struct!.authProviderX509CertUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_uri: {
      value: cdktf.stringToHclTerraform(struct!.authUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_email: {
      value: cdktf.stringToHclTerraform(struct!.clientEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_x509_cert_url: {
      value: cdktf.stringToHclTerraform(struct!.clientX509CertUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_name: {
      value: cdktf.stringToHclTerraform(struct!.fileName),
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
    private_key_id: {
      value: cdktf.stringToHclTerraform(struct!.privateKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_uri: {
      value: cdktf.stringToHclTerraform(struct!.tokenUri),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PushProviderConfigurationFcmConfigurationServiceAccountJsonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PushProviderConfigurationFcmConfigurationServiceAccountJson | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authProviderX509CertUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.authProviderX509CertUrl = this._authProviderX509CertUrl;
    }
    if (this._authUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.authUri = this._authUri;
    }
    if (this._clientEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientEmail = this._clientEmail;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientX509CertUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientX509CertUrl = this._clientX509CertUrl;
    }
    if (this._fileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileName = this._fileName;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._privateKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyId = this._privateKeyId;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._tokenUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenUri = this._tokenUri;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PushProviderConfigurationFcmConfigurationServiceAccountJson | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authProviderX509CertUrl = undefined;
      this._authUri = undefined;
      this._clientEmail = undefined;
      this._clientId = undefined;
      this._clientX509CertUrl = undefined;
      this._fileName = undefined;
      this._privateKey = undefined;
      this._privateKeyId = undefined;
      this._projectId = undefined;
      this._tokenUri = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authProviderX509CertUrl = value.authProviderX509CertUrl;
      this._authUri = value.authUri;
      this._clientEmail = value.clientEmail;
      this._clientId = value.clientId;
      this._clientX509CertUrl = value.clientX509CertUrl;
      this._fileName = value.fileName;
      this._privateKey = value.privateKey;
      this._privateKeyId = value.privateKeyId;
      this._projectId = value.projectId;
      this._tokenUri = value.tokenUri;
      this._type = value.type;
    }
  }

  // auth_provider_x509_cert_url - computed: false, optional: true, required: false
  private _authProviderX509CertUrl?: string; 
  public get authProviderX509CertUrl() {
    return this.getStringAttribute('auth_provider_x509_cert_url');
  }
  public set authProviderX509CertUrl(value: string) {
    this._authProviderX509CertUrl = value;
  }
  public resetAuthProviderX509CertUrl() {
    this._authProviderX509CertUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authProviderX509CertUrlInput() {
    return this._authProviderX509CertUrl;
  }

  // auth_uri - computed: false, optional: true, required: false
  private _authUri?: string; 
  public get authUri() {
    return this.getStringAttribute('auth_uri');
  }
  public set authUri(value: string) {
    this._authUri = value;
  }
  public resetAuthUri() {
    this._authUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUriInput() {
    return this._authUri;
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

  // client_x509_cert_url - computed: false, optional: true, required: false
  private _clientX509CertUrl?: string; 
  public get clientX509CertUrl() {
    return this.getStringAttribute('client_x509_cert_url');
  }
  public set clientX509CertUrl(value: string) {
    this._clientX509CertUrl = value;
  }
  public resetClientX509CertUrl() {
    this._clientX509CertUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientX509CertUrlInput() {
    return this._clientX509CertUrl;
  }

  // file_name - computed: false, optional: true, required: false
  private _fileName?: string; 
  public get fileName() {
    return this.getStringAttribute('file_name');
  }
  public set fileName(value: string) {
    this._fileName = value;
  }
  public resetFileName() {
    this._fileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameInput() {
    return this._fileName;
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

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // token_uri - computed: false, optional: true, required: false
  private _tokenUri?: string; 
  public get tokenUri() {
    return this.getStringAttribute('token_uri');
  }
  public set tokenUri(value: string) {
    this._tokenUri = value;
  }
  public resetTokenUri() {
    this._tokenUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUriInput() {
    return this._tokenUri;
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
}
export interface PushProviderConfigurationFcmConfiguration {
  /**
  * service_account_json block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/push_provider#service_account_json PushProvider#service_account_json}
  */
  readonly serviceAccountJson?: PushProviderConfigurationFcmConfigurationServiceAccountJson;
}

export function pushProviderConfigurationFcmConfigurationToTerraform(struct?: PushProviderConfigurationFcmConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_account_json: pushProviderConfigurationFcmConfigurationServiceAccountJsonToTerraform(struct!.serviceAccountJson),
  }
}


export function pushProviderConfigurationFcmConfigurationToHclTerraform(struct?: PushProviderConfigurationFcmConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_account_json: {
      value: pushProviderConfigurationFcmConfigurationServiceAccountJsonToHclTerraform(struct!.serviceAccountJson),
      isBlock: true,
      type: "struct",
      storageClassType: "PushProviderConfigurationFcmConfigurationServiceAccountJson",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PushProviderConfigurationFcmConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PushProviderConfigurationFcmConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceAccountJson?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountJson = this._serviceAccountJson?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PushProviderConfigurationFcmConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceAccountJson.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceAccountJson.internalValue = value.serviceAccountJson;
    }
  }

  // service_account_json - computed: false, optional: true, required: false
  private _serviceAccountJson = new PushProviderConfigurationFcmConfigurationServiceAccountJsonOutputReference(this, "service_account_json");
  public get serviceAccountJson() {
    return this._serviceAccountJson;
  }
  public putServiceAccountJson(value: PushProviderConfigurationFcmConfigurationServiceAccountJson) {
    this._serviceAccountJson.internalValue = value;
  }
  public resetServiceAccountJson() {
    this._serviceAccountJson.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountJsonInput() {
    return this._serviceAccountJson.internalValue;
  }
}
export interface PushProviderConfiguration {
  /**
  * apns_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/push_provider#apns_configuration PushProvider#apns_configuration}
  */
  readonly apnsConfiguration?: PushProviderConfigurationApnsConfiguration;
  /**
  * fcm_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/push_provider#fcm_configuration PushProvider#fcm_configuration}
  */
  readonly fcmConfiguration?: PushProviderConfigurationFcmConfiguration;
}

export function pushProviderConfigurationToTerraform(struct?: PushProviderConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apns_configuration: pushProviderConfigurationApnsConfigurationToTerraform(struct!.apnsConfiguration),
    fcm_configuration: pushProviderConfigurationFcmConfigurationToTerraform(struct!.fcmConfiguration),
  }
}


export function pushProviderConfigurationToHclTerraform(struct?: PushProviderConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apns_configuration: {
      value: pushProviderConfigurationApnsConfigurationToHclTerraform(struct!.apnsConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "PushProviderConfigurationApnsConfiguration",
    },
    fcm_configuration: {
      value: pushProviderConfigurationFcmConfigurationToHclTerraform(struct!.fcmConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "PushProviderConfigurationFcmConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PushProviderConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PushProviderConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apnsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apnsConfiguration = this._apnsConfiguration?.internalValue;
    }
    if (this._fcmConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fcmConfiguration = this._fcmConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PushProviderConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apnsConfiguration.internalValue = undefined;
      this._fcmConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apnsConfiguration.internalValue = value.apnsConfiguration;
      this._fcmConfiguration.internalValue = value.fcmConfiguration;
    }
  }

  // apns_configuration - computed: false, optional: true, required: false
  private _apnsConfiguration = new PushProviderConfigurationApnsConfigurationOutputReference(this, "apns_configuration");
  public get apnsConfiguration() {
    return this._apnsConfiguration;
  }
  public putApnsConfiguration(value: PushProviderConfigurationApnsConfiguration) {
    this._apnsConfiguration.internalValue = value;
  }
  public resetApnsConfiguration() {
    this._apnsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apnsConfigurationInput() {
    return this._apnsConfiguration.internalValue;
  }

  // fcm_configuration - computed: false, optional: true, required: false
  private _fcmConfiguration = new PushProviderConfigurationFcmConfigurationOutputReference(this, "fcm_configuration");
  public get fcmConfiguration() {
    return this._fcmConfiguration;
  }
  public putFcmConfiguration(value: PushProviderConfigurationFcmConfiguration) {
    this._fcmConfiguration.internalValue = value;
  }
  public resetFcmConfiguration() {
    this._fcmConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fcmConfigurationInput() {
    return this._fcmConfiguration.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/push_provider okta_push_provider}
*/
export class PushProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_push_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PushProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PushProvider to import
  * @param importFromId The id of the existing PushProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/push_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PushProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_push_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/push_provider okta_push_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PushProviderConfig
  */
  public constructor(scope: Construct, id: string, config: PushProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_push_provider',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.5.2',
        providerVersionConstraint: '6.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._providerType = config.providerType;
    this._configuration.internalValue = config.configuration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated_date - computed: true, optional: false, required: false
  public get lastUpdatedDate() {
    return this.getStringAttribute('last_updated_date');
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

  // provider_type - computed: false, optional: false, required: true
  private _providerType?: string; 
  public get providerType() {
    return this.getStringAttribute('provider_type');
  }
  public set providerType(value: string) {
    this._providerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerTypeInput() {
    return this._providerType;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration = new PushProviderConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: PushProviderConfiguration) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      provider_type: cdktf.stringToTerraform(this._providerType),
      configuration: pushProviderConfigurationToTerraform(this._configuration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_type: {
        value: cdktf.stringToHclTerraform(this._providerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration: {
        value: pushProviderConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PushProviderConfiguration",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
