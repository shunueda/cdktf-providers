// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_application_push_credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MfaApplicationPushCredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * A single object that specifies the credential settings for the Apple Push Notification Service.  If this object is added or removed, a replacement plan is triggered.  Parameters within the object are subject to their own immutability rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_application_push_credential#apns MfaApplicationPushCredential#apns}
  */
  readonly apns?: MfaApplicationPushCredentialApns;
  /**
  * The ID of the application to create the push notification credential for.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_application_push_credential#application_id MfaApplicationPushCredential#application_id}
  */
  readonly applicationId: string;
  /**
  * The ID of the environment to create the application push notification credential in.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_application_push_credential#environment_id MfaApplicationPushCredential#environment_id}
  */
  readonly environmentId: string;
  /**
  * A single object that specifies the credential settings for the Firebase Cloud Messaging service.  If this object is added or removed, a replacement plan is triggered.  Parameters within the object are subject to their own immutability rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_application_push_credential#fcm MfaApplicationPushCredential#fcm}
  */
  readonly fcm?: MfaApplicationPushCredentialFcm;
  /**
  * A single object that specifies the credential settings for Huawei Moble Service push messaging.  If this object is added or removed, a replacement plan is triggered.  Parameters within the object are subject to their own immutability rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_application_push_credential#hms MfaApplicationPushCredential#hms}
  */
  readonly hms?: MfaApplicationPushCredentialHms;
}
export interface MfaApplicationPushCredentialApns {
  /**
  * A string that Apple uses as an identifier to identify an authentication key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_application_push_credential#key MfaApplicationPushCredential#key}
  */
  readonly key: string;
  /**
  * A string that Apple uses as an identifier to identify teams.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_application_push_credential#team_id MfaApplicationPushCredential#team_id}
  */
  readonly teamId: string;
  /**
  * A string that Apple uses as the authentication token signing key to securely connect to APNS. This is the contents of a pkcs8 file with a private key format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_application_push_credential#token_signing_key MfaApplicationPushCredential#token_signing_key}
  */
  readonly tokenSigningKey: string;
}

export function mfaApplicationPushCredentialApnsToTerraform(struct?: MfaApplicationPushCredentialApns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    team_id: cdktf.stringToTerraform(struct!.teamId),
    token_signing_key: cdktf.stringToTerraform(struct!.tokenSigningKey),
  }
}


export function mfaApplicationPushCredentialApnsToHclTerraform(struct?: MfaApplicationPushCredentialApns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class MfaApplicationPushCredentialApnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MfaApplicationPushCredentialApns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: MfaApplicationPushCredentialApns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._teamId = value.teamId;
      this._tokenSigningKey = value.tokenSigningKey;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // team_id - computed: false, optional: false, required: true
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }

  // token_signing_key - computed: false, optional: false, required: true
  private _tokenSigningKey?: string; 
  public get tokenSigningKey() {
    return this.getStringAttribute('token_signing_key');
  }
  public set tokenSigningKey(value: string) {
    this._tokenSigningKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenSigningKeyInput() {
    return this._tokenSigningKey;
  }
}
export interface MfaApplicationPushCredentialFcm {
  /**
  * A string in JSON format that represents the service account credentials of Firebase cloud messaging service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_application_push_credential#google_service_account_credentials MfaApplicationPushCredential#google_service_account_credentials}
  */
  readonly googleServiceAccountCredentials: string;
}

export function mfaApplicationPushCredentialFcmToTerraform(struct?: MfaApplicationPushCredentialFcm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    google_service_account_credentials: cdktf.stringToTerraform(struct!.googleServiceAccountCredentials),
  }
}


export function mfaApplicationPushCredentialFcmToHclTerraform(struct?: MfaApplicationPushCredentialFcm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    google_service_account_credentials: {
      value: cdktf.stringToHclTerraform(struct!.googleServiceAccountCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaApplicationPushCredentialFcmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MfaApplicationPushCredentialFcm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._googleServiceAccountCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleServiceAccountCredentials = this._googleServiceAccountCredentials;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaApplicationPushCredentialFcm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._googleServiceAccountCredentials = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._googleServiceAccountCredentials = value.googleServiceAccountCredentials;
    }
  }

  // google_service_account_credentials - computed: false, optional: false, required: true
  private _googleServiceAccountCredentials?: string; 
  public get googleServiceAccountCredentials() {
    return this.getStringAttribute('google_service_account_credentials');
  }
  public set googleServiceAccountCredentials(value: string) {
    this._googleServiceAccountCredentials = value;
  }
  // Temporarily expose input value. Use with caution.
  public get googleServiceAccountCredentialsInput() {
    return this._googleServiceAccountCredentials;
  }
}
export interface MfaApplicationPushCredentialHms {
  /**
  * A string that represents the OAuth 2.0 Client ID from the Huawei Developers API console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_application_push_credential#client_id MfaApplicationPushCredential#client_id}
  */
  readonly clientId: string;
  /**
  * A string that represents the client secret associated with the OAuth 2.0 Client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_application_push_credential#client_secret MfaApplicationPushCredential#client_secret}
  */
  readonly clientSecret: string;
}

export function mfaApplicationPushCredentialHmsToTerraform(struct?: MfaApplicationPushCredentialHms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
  }
}


export function mfaApplicationPushCredentialHmsToHclTerraform(struct?: MfaApplicationPushCredentialHms | cdktf.IResolvable): any {
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
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaApplicationPushCredentialHmsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MfaApplicationPushCredentialHms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaApplicationPushCredentialHms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_application_push_credential pingone_mfa_application_push_credential}
*/
export class MfaApplicationPushCredential extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_mfa_application_push_credential";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MfaApplicationPushCredential resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MfaApplicationPushCredential to import
  * @param importFromId The id of the existing MfaApplicationPushCredential that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_application_push_credential#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MfaApplicationPushCredential to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_mfa_application_push_credential", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_application_push_credential pingone_mfa_application_push_credential} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MfaApplicationPushCredentialConfig
  */
  public constructor(scope: Construct, id: string, config: MfaApplicationPushCredentialConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_mfa_application_push_credential',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apns.internalValue = config.apns;
    this._applicationId = config.applicationId;
    this._environmentId = config.environmentId;
    this._fcm.internalValue = config.fcm;
    this._hms.internalValue = config.hms;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apns - computed: false, optional: true, required: false
  private _apns = new MfaApplicationPushCredentialApnsOutputReference(this, "apns");
  public get apns() {
    return this._apns;
  }
  public putApns(value: MfaApplicationPushCredentialApns) {
    this._apns.internalValue = value;
  }
  public resetApns() {
    this._apns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apnsInput() {
    return this._apns.internalValue;
  }

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // fcm - computed: false, optional: true, required: false
  private _fcm = new MfaApplicationPushCredentialFcmOutputReference(this, "fcm");
  public get fcm() {
    return this._fcm;
  }
  public putFcm(value: MfaApplicationPushCredentialFcm) {
    this._fcm.internalValue = value;
  }
  public resetFcm() {
    this._fcm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fcmInput() {
    return this._fcm.internalValue;
  }

  // hms - computed: false, optional: true, required: false
  private _hms = new MfaApplicationPushCredentialHmsOutputReference(this, "hms");
  public get hms() {
    return this._hms;
  }
  public putHms(value: MfaApplicationPushCredentialHms) {
    this._hms.internalValue = value;
  }
  public resetHms() {
    this._hms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hmsInput() {
    return this._hms.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apns: mfaApplicationPushCredentialApnsToTerraform(this._apns.internalValue),
      application_id: cdktf.stringToTerraform(this._applicationId),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      fcm: mfaApplicationPushCredentialFcmToTerraform(this._fcm.internalValue),
      hms: mfaApplicationPushCredentialHmsToTerraform(this._hms.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apns: {
        value: mfaApplicationPushCredentialApnsToHclTerraform(this._apns.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MfaApplicationPushCredentialApns",
      },
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fcm: {
        value: mfaApplicationPushCredentialFcmToHclTerraform(this._fcm.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MfaApplicationPushCredentialFcm",
      },
      hms: {
        value: mfaApplicationPushCredentialHmsToHclTerraform(this._hms.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MfaApplicationPushCredentialHms",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
