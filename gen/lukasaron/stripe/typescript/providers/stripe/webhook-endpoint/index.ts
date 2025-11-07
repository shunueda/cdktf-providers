// https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/webhook_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebhookEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Events sent to this endpoint will be generated with this Stripe Version instead of your account’s default Stripe Version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/webhook_endpoint#api_version WebhookEndpoint#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Whether this endpoint should receive events from connected accounts (true), or from your account (false). Defaults to false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/webhook_endpoint#connect WebhookEndpoint#connect}
  */
  readonly connect?: boolean | cdktf.IResolvable;
  /**
  * An optional description of what the webhook is used for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/webhook_endpoint#description WebhookEndpoint#description}
  */
  readonly description?: string;
  /**
  * Disable the webhook endpoint if set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/webhook_endpoint#disabled WebhookEndpoint#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The list of events to enable for this endpoint. [’*’] indicates that all events are enabled, except those that require explicit selection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/webhook_endpoint#enabled_events WebhookEndpoint#enabled_events}
  */
  readonly enabledEvents: string[];
  /**
  * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/webhook_endpoint#metadata WebhookEndpoint#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * The URL of the webhook endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/webhook_endpoint#url WebhookEndpoint#url}
  */
  readonly url: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/webhook_endpoint stripe_webhook_endpoint}
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
  * @param importFromId The id of the existing WebhookEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/webhook_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebhookEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stripe_webhook_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/webhook_endpoint stripe_webhook_endpoint} Resource
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
        providerVersion: '3.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiVersion = config.apiVersion;
    this._connect = config.connect;
    this._description = config.description;
    this._disabled = config.disabled;
    this._enabledEvents = config.enabledEvents;
    this._metadata = config.metadata;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // application - computed: true, optional: false, required: false
  public get application() {
    return this.getStringAttribute('application');
  }

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

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
      api_version: cdktf.stringToTerraform(this._apiVersion),
      connect: cdktf.booleanToTerraform(this._connect),
      description: cdktf.stringToTerraform(this._description),
      disabled: cdktf.booleanToTerraform(this._disabled),
      enabled_events: cdktf.listMapper(cdktf.stringToTerraform, false)(this._enabledEvents),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      url: cdktf.stringToTerraform(this._url),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_version: {
        value: cdktf.stringToHclTerraform(this._apiVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connect: {
        value: cdktf.booleanToHclTerraform(this._connect),
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
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
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
      metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
