// https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Apple Push Notification service certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/app#apns_certificate App#apns_certificate}
  */
  readonly apnsCertificate?: string;
  /**
  * The Apple Push Notification service private key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/app#apns_private_key App#apns_private_key}
  */
  readonly apnsPrivateKey?: string;
  /**
  * Use the Apple Push Notification service sandbox endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/app#apns_use_sandbox_endpoint App#apns_use_sandbox_endpoint}
  */
  readonly apnsUseSandboxEndpoint?: boolean | cdktf.IResolvable;
  /**
  * The Firebase Cloud Messaging key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/app#fcm_key App#fcm_key}
  */
  readonly fcmKey?: string;
  /**
  * The unique identifier for the Firebase Cloud Messaging(FCM) project. This ID is used to specify the Firebase project when configuring FCM or other Firebase services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/app#fcm_project_id App#fcm_project_id}
  */
  readonly fcmProjectId?: string;
  /**
  * Used to specify the Firebase Cloud Messaging(FCM) service account credentials used for authentication and enabling communication with FCM to send push notifications to devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/app#fcm_service_account App#fcm_service_account}
  */
  readonly fcmServiceAccount?: string;
  /**
  * The application name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/app#name App#name}
  */
  readonly name: string;
  /**
  * The application status. Disabled applications will not accept new connections and will return an error to all clients. When creating a new application, ensure that its status is set to enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/app#status App#status}
  */
  readonly status?: string;
  /**
  * Enforce TLS for all connections. This setting overrides any channel setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/app#tls_only App#tls_only}
  */
  readonly tlsOnly?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/app ably_app}
*/
export class App extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ably_app";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a App resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the App to import
  * @param importFromId The id of the existing App that should be imported. Refer to the {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/app#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the App to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ably_app", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/app ably_app} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppConfig
  */
  public constructor(scope: Construct, id: string, config: AppConfig) {
    super(scope, id, {
      terraformResourceType: 'ably_app',
      terraformGeneratorMetadata: {
        providerName: 'ably',
        providerVersion: '0.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apnsCertificate = config.apnsCertificate;
    this._apnsPrivateKey = config.apnsPrivateKey;
    this._apnsUseSandboxEndpoint = config.apnsUseSandboxEndpoint;
    this._fcmKey = config.fcmKey;
    this._fcmProjectId = config.fcmProjectId;
    this._fcmServiceAccount = config.fcmServiceAccount;
    this._name = config.name;
    this._status = config.status;
    this._tlsOnly = config.tlsOnly;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // apns_certificate - computed: false, optional: true, required: false
  private _apnsCertificate?: string; 
  public get apnsCertificate() {
    return this.getStringAttribute('apns_certificate');
  }
  public set apnsCertificate(value: string) {
    this._apnsCertificate = value;
  }
  public resetApnsCertificate() {
    this._apnsCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apnsCertificateInput() {
    return this._apnsCertificate;
  }

  // apns_private_key - computed: false, optional: true, required: false
  private _apnsPrivateKey?: string; 
  public get apnsPrivateKey() {
    return this.getStringAttribute('apns_private_key');
  }
  public set apnsPrivateKey(value: string) {
    this._apnsPrivateKey = value;
  }
  public resetApnsPrivateKey() {
    this._apnsPrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apnsPrivateKeyInput() {
    return this._apnsPrivateKey;
  }

  // apns_use_sandbox_endpoint - computed: true, optional: true, required: false
  private _apnsUseSandboxEndpoint?: boolean | cdktf.IResolvable; 
  public get apnsUseSandboxEndpoint() {
    return this.getBooleanAttribute('apns_use_sandbox_endpoint');
  }
  public set apnsUseSandboxEndpoint(value: boolean | cdktf.IResolvable) {
    this._apnsUseSandboxEndpoint = value;
  }
  public resetApnsUseSandboxEndpoint() {
    this._apnsUseSandboxEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apnsUseSandboxEndpointInput() {
    return this._apnsUseSandboxEndpoint;
  }

  // fcm_key - computed: false, optional: true, required: false
  private _fcmKey?: string; 
  public get fcmKey() {
    return this.getStringAttribute('fcm_key');
  }
  public set fcmKey(value: string) {
    this._fcmKey = value;
  }
  public resetFcmKey() {
    this._fcmKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fcmKeyInput() {
    return this._fcmKey;
  }

  // fcm_project_id - computed: false, optional: true, required: false
  private _fcmProjectId?: string; 
  public get fcmProjectId() {
    return this.getStringAttribute('fcm_project_id');
  }
  public set fcmProjectId(value: string) {
    this._fcmProjectId = value;
  }
  public resetFcmProjectId() {
    this._fcmProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fcmProjectIdInput() {
    return this._fcmProjectId;
  }

  // fcm_service_account - computed: false, optional: true, required: false
  private _fcmServiceAccount?: string; 
  public get fcmServiceAccount() {
    return this.getStringAttribute('fcm_service_account');
  }
  public set fcmServiceAccount(value: string) {
    this._fcmServiceAccount = value;
  }
  public resetFcmServiceAccount() {
    this._fcmServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fcmServiceAccountInput() {
    return this._fcmServiceAccount;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // status - computed: true, optional: true, required: false
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

  // tls_only - computed: true, optional: true, required: false
  private _tlsOnly?: boolean | cdktf.IResolvable; 
  public get tlsOnly() {
    return this.getBooleanAttribute('tls_only');
  }
  public set tlsOnly(value: boolean | cdktf.IResolvable) {
    this._tlsOnly = value;
  }
  public resetTlsOnly() {
    this._tlsOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsOnlyInput() {
    return this._tlsOnly;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apns_certificate: cdktf.stringToTerraform(this._apnsCertificate),
      apns_private_key: cdktf.stringToTerraform(this._apnsPrivateKey),
      apns_use_sandbox_endpoint: cdktf.booleanToTerraform(this._apnsUseSandboxEndpoint),
      fcm_key: cdktf.stringToTerraform(this._fcmKey),
      fcm_project_id: cdktf.stringToTerraform(this._fcmProjectId),
      fcm_service_account: cdktf.stringToTerraform(this._fcmServiceAccount),
      name: cdktf.stringToTerraform(this._name),
      status: cdktf.stringToTerraform(this._status),
      tls_only: cdktf.booleanToTerraform(this._tlsOnly),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apns_certificate: {
        value: cdktf.stringToHclTerraform(this._apnsCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apns_private_key: {
        value: cdktf.stringToHclTerraform(this._apnsPrivateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apns_use_sandbox_endpoint: {
        value: cdktf.booleanToHclTerraform(this._apnsUseSandboxEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fcm_key: {
        value: cdktf.stringToHclTerraform(this._fcmKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fcm_project_id: {
        value: cdktf.stringToHclTerraform(this._fcmProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fcm_service_account: {
        value: cdktf.stringToHclTerraform(this._fcmServiceAccount),
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
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_only: {
        value: cdktf.booleanToHclTerraform(this._tlsOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
