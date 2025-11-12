// https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/webhook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebhookConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/webhook#additional_headers Webhook#additional_headers}
  */
  readonly additionalHeaders?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/webhook#body_template Webhook#body_template}
  */
  readonly bodyTemplate?: string;
  /**
  * The complete list of official content types is available [here](https://www.iana.org/assignments/media-types/media-types.xhtml). Defaults to `application/json`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/webhook#http_content_type Webhook#http_content_type}
  */
  readonly httpContentType?: string;
  /**
  * Valid values are `GET`, `POST`, `PUT`, `PATCH` and `DELETE`. Defaults to `POST`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/webhook#http_method Webhook#http_method}
  */
  readonly httpMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/webhook#id Webhook#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/webhook#name Webhook#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/webhook#payload_url Webhook#payload_url}
  */
  readonly payloadUrl: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/webhook netbox_webhook}
*/
export class Webhook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netbox_webhook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Webhook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Webhook to import
  * @param importFromId The id of the existing Webhook that should be imported. Refer to the {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/webhook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Webhook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netbox_webhook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/webhook netbox_webhook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebhookConfig
  */
  public constructor(scope: Construct, id: string, config: WebhookConfig) {
    super(scope, id, {
      terraformResourceType: 'netbox_webhook',
      terraformGeneratorMetadata: {
        providerName: 'netbox',
        providerVersion: '5.0.0',
        providerVersionConstraint: '5.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalHeaders = config.additionalHeaders;
    this._bodyTemplate = config.bodyTemplate;
    this._httpContentType = config.httpContentType;
    this._httpMethod = config.httpMethod;
    this._id = config.id;
    this._name = config.name;
    this._payloadUrl = config.payloadUrl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_headers - computed: false, optional: true, required: false
  private _additionalHeaders?: string; 
  public get additionalHeaders() {
    return this.getStringAttribute('additional_headers');
  }
  public set additionalHeaders(value: string) {
    this._additionalHeaders = value;
  }
  public resetAdditionalHeaders() {
    this._additionalHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalHeadersInput() {
    return this._additionalHeaders;
  }

  // body_template - computed: false, optional: true, required: false
  private _bodyTemplate?: string; 
  public get bodyTemplate() {
    return this.getStringAttribute('body_template');
  }
  public set bodyTemplate(value: string) {
    this._bodyTemplate = value;
  }
  public resetBodyTemplate() {
    this._bodyTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyTemplateInput() {
    return this._bodyTemplate;
  }

  // http_content_type - computed: false, optional: true, required: false
  private _httpContentType?: string; 
  public get httpContentType() {
    return this.getStringAttribute('http_content_type');
  }
  public set httpContentType(value: string) {
    this._httpContentType = value;
  }
  public resetHttpContentType() {
    this._httpContentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpContentTypeInput() {
    return this._httpContentType;
  }

  // http_method - computed: false, optional: true, required: false
  private _httpMethod?: string; 
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }
  public set httpMethod(value: string) {
    this._httpMethod = value;
  }
  public resetHttpMethod() {
    this._httpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod;
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

  // payload_url - computed: false, optional: false, required: true
  private _payloadUrl?: string; 
  public get payloadUrl() {
    return this.getStringAttribute('payload_url');
  }
  public set payloadUrl(value: string) {
    this._payloadUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadUrlInput() {
    return this._payloadUrl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_headers: cdktf.stringToTerraform(this._additionalHeaders),
      body_template: cdktf.stringToTerraform(this._bodyTemplate),
      http_content_type: cdktf.stringToTerraform(this._httpContentType),
      http_method: cdktf.stringToTerraform(this._httpMethod),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      payload_url: cdktf.stringToTerraform(this._payloadUrl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_headers: {
        value: cdktf.stringToHclTerraform(this._additionalHeaders),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      body_template: {
        value: cdktf.stringToHclTerraform(this._bodyTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_content_type: {
        value: cdktf.stringToHclTerraform(this._httpContentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_method: {
        value: cdktf.stringToHclTerraform(this._httpMethod),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      payload_url: {
        value: cdktf.stringToHclTerraform(this._payloadUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
