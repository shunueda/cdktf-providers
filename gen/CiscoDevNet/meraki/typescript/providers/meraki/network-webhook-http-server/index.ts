// https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_webhook_http_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkWebhookHttpServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * A name for easy reference to the HTTP server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_webhook_http_server#name NetworkWebhookHttpServer#name}
  */
  readonly name: string;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_webhook_http_server#network_id NetworkWebhookHttpServer#network_id}
  */
  readonly networkId: string;
  /**
  * The name of the payload template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_webhook_http_server#payload_template_name NetworkWebhookHttpServer#payload_template_name}
  */
  readonly payloadTemplateName?: string;
  /**
  * The ID of the payload template. Defaults to `wpt_00001` for the Meraki template. For Meraki-included templates: for the Webex (included) template use `wpt_00002`; for the Slack (included) template use `wpt_00003`; for the Microsoft Teams (included) template use `wpt_00004`; for the ServiceNow (included) template use `wpt_00006`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_webhook_http_server#payload_template_payload_template_id NetworkWebhookHttpServer#payload_template_payload_template_id}
  */
  readonly payloadTemplatePayloadTemplateId?: string;
  /**
  * A shared secret that will be included in POSTs sent to the HTTP server. This secret can be used to verify that the request was sent by Meraki.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_webhook_http_server#shared_secret NetworkWebhookHttpServer#shared_secret}
  */
  readonly sharedSecret?: string;
  /**
  * The URL of the HTTP server. Once set, cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_webhook_http_server#url NetworkWebhookHttpServer#url}
  */
  readonly url: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_webhook_http_server meraki_network_webhook_http_server}
*/
export class NetworkWebhookHttpServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_network_webhook_http_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkWebhookHttpServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkWebhookHttpServer to import
  * @param importFromId The id of the existing NetworkWebhookHttpServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_webhook_http_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkWebhookHttpServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_network_webhook_http_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_webhook_http_server meraki_network_webhook_http_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkWebhookHttpServerConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkWebhookHttpServerConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_network_webhook_http_server',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
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
    this._networkId = config.networkId;
    this._payloadTemplateName = config.payloadTemplateName;
    this._payloadTemplatePayloadTemplateId = config.payloadTemplatePayloadTemplateId;
    this._sharedSecret = config.sharedSecret;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // payload_template_name - computed: false, optional: true, required: false
  private _payloadTemplateName?: string; 
  public get payloadTemplateName() {
    return this.getStringAttribute('payload_template_name');
  }
  public set payloadTemplateName(value: string) {
    this._payloadTemplateName = value;
  }
  public resetPayloadTemplateName() {
    this._payloadTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadTemplateNameInput() {
    return this._payloadTemplateName;
  }

  // payload_template_payload_template_id - computed: false, optional: true, required: false
  private _payloadTemplatePayloadTemplateId?: string; 
  public get payloadTemplatePayloadTemplateId() {
    return this.getStringAttribute('payload_template_payload_template_id');
  }
  public set payloadTemplatePayloadTemplateId(value: string) {
    this._payloadTemplatePayloadTemplateId = value;
  }
  public resetPayloadTemplatePayloadTemplateId() {
    this._payloadTemplatePayloadTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadTemplatePayloadTemplateIdInput() {
    return this._payloadTemplatePayloadTemplateId;
  }

  // shared_secret - computed: false, optional: true, required: false
  private _sharedSecret?: string; 
  public get sharedSecret() {
    return this.getStringAttribute('shared_secret');
  }
  public set sharedSecret(value: string) {
    this._sharedSecret = value;
  }
  public resetSharedSecret() {
    this._sharedSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedSecretInput() {
    return this._sharedSecret;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      payload_template_name: cdktf.stringToTerraform(this._payloadTemplateName),
      payload_template_payload_template_id: cdktf.stringToTerraform(this._payloadTemplatePayloadTemplateId),
      shared_secret: cdktf.stringToTerraform(this._sharedSecret),
      url: cdktf.stringToTerraform(this._url),
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
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      payload_template_name: {
        value: cdktf.stringToHclTerraform(this._payloadTemplateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      payload_template_payload_template_id: {
        value: cdktf.stringToHclTerraform(this._payloadTemplatePayloadTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_secret: {
        value: cdktf.stringToHclTerraform(this._sharedSecret),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
