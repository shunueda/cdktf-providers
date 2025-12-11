// https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/webhook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebhookConfig extends cdktf.TerraformMetaArguments {
  /**
  * A free text description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/webhook#description Webhook#description}
  */
  readonly description?: string;
  /**
  * Any custom headers that may need to be added to invoke the webhook. Name/value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/webhook#headers Webhook#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * An identifier for the webhook. This is the name that will be used by any Watches that want to invoke the webhook in case of a violation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/webhook#name Webhook#name}
  */
  readonly name: string;
  /**
  * A password as required by the webhook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/webhook#password Webhook#password}
  */
  readonly password?: string;
  /**
  * The URL that this webhook invokes. For details of the payload provided by Xray to the webhook, please refer to Webhook Payload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/webhook#url Webhook#url}
  */
  readonly url: string;
  /**
  * Set the webhook to go through the predefined proxy. For more information, see [Managing Proxies](https://jfrog.com/help/r/jfrog-platform-administration-documentation/managing-proxies).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/webhook#use_proxy Webhook#use_proxy}
  */
  readonly useProxy?: boolean | cdktf.IResolvable;
  /**
  * An username as required by the webhook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/webhook#user_name Webhook#user_name}
  */
  readonly userName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/webhook xray_webhook}
*/
export class Webhook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "xray_webhook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Webhook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Webhook to import
  * @param importFromId The id of the existing Webhook that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/webhook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Webhook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "xray_webhook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/webhook xray_webhook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebhookConfig
  */
  public constructor(scope: Construct, id: string, config: WebhookConfig) {
    super(scope, id, {
      terraformResourceType: 'xray_webhook',
      terraformGeneratorMetadata: {
        providerName: 'xray',
        providerVersion: '3.1.4',
        providerVersionConstraint: '3.1.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._headers = config.headers;
    this._name = config.name;
    this._password = config.password;
    this._url = config.url;
    this._useProxy = config.useProxy;
    this._userName = config.userName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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

  // use_proxy - computed: true, optional: true, required: false
  private _useProxy?: boolean | cdktf.IResolvable; 
  public get useProxy() {
    return this.getBooleanAttribute('use_proxy');
  }
  public set useProxy(value: boolean | cdktf.IResolvable) {
    this._useProxy = value;
  }
  public resetUseProxy() {
    this._useProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useProxyInput() {
    return this._useProxy;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._headers),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      url: cdktf.stringToTerraform(this._url),
      use_proxy: cdktf.booleanToTerraform(this._useProxy),
      user_name: cdktf.stringToTerraform(this._userName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      headers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._headers),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_proxy: {
        value: cdktf.booleanToHclTerraform(this._useProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
