// https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/webhook_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebhookEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/webhook_endpoint#connect WebhookEndpoint#connect}
  */
  readonly connect?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/webhook_endpoint#enabled_events WebhookEndpoint#enabled_events}
  */
  readonly enabledEvents: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/webhook_endpoint#id WebhookEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/webhook_endpoint#url WebhookEndpoint#url}
  */
  readonly url: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/webhook_endpoint stripe_webhook_endpoint}
*/
export class WebhookEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stripe_webhook_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebhookEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebhookEndpoint to import
  * @param importFromId The id of the existing WebhookEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/webhook_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebhookEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stripe_webhook_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/webhook_endpoint stripe_webhook_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebhookEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: WebhookEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'stripe_webhook_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'stripe',
        providerVersion: '1.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connect = config.connect;
    this._enabledEvents = config.enabledEvents;
    this._id = config.id;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connect - computed: false, optional: true, required: false
  private _connect?: boolean | cdktf.IResolvable; 
  public get connect() {
    return this.getBooleanAttribute('connect');
  }
  public set connect(value: boolean | cdktf.IResolvable) {
    this._connect = value;
  }
  public resetConnect() {
    this._connect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectInput() {
    return this._connect;
  }

  // enabled_events - computed: false, optional: false, required: true
  private _enabledEvents?: string[]; 
  public get enabledEvents() {
    return this.getListAttribute('enabled_events');
  }
  public set enabledEvents(value: string[]) {
    this._enabledEvents = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledEventsInput() {
    return this._enabledEvents;
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

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
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
      connect: cdktf.booleanToTerraform(this._connect),
      enabled_events: cdktf.listMapper(cdktf.stringToTerraform, false)(this._enabledEvents),
      id: cdktf.stringToTerraform(this._id),
      url: cdktf.stringToTerraform(this._url),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connect: {
        value: cdktf.booleanToHclTerraform(this._connect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled_events: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._enabledEvents),
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
