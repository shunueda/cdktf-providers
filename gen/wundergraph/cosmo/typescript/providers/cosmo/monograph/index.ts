// https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/monograph
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonographConfig extends cdktf.TerraformMetaArguments {
  /**
  * The admission webhook secret for the monograph.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/monograph#admission_webhook_secret Monograph#admission_webhook_secret}
  */
  readonly admissionWebhookSecret?: string;
  /**
  * The admission webhook URL for the monograph.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/monograph#admission_webhook_url Monograph#admission_webhook_url}
  */
  readonly admissionWebhookUrl?: string;
  /**
  * The GraphQL endpoint URL of the monograph.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/monograph#graph_url Monograph#graph_url}
  */
  readonly graphUrl: string;
  /**
  * The name of the monograph.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/monograph#name Monograph#name}
  */
  readonly name: string;
  /**
  * The namespace in which the monograph is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/monograph#namespace Monograph#namespace}
  */
  readonly namespace?: string;
  /**
  * The readme for the subgraph.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/monograph#readme Monograph#readme}
  */
  readonly readme?: string;
  /**
  * The routing URL for the monograph.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/monograph#routing_url Monograph#routing_url}
  */
  readonly routingUrl: string;
  /**
  * The schema for the subgraph.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/monograph#schema Monograph#schema}
  */
  readonly schema?: string;
  /**
  * The subscription protocol for the subgraph.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/monograph#subscription_protocol Monograph#subscription_protocol}
  */
  readonly subscriptionProtocol?: string;
  /**
  * The subscription URL for the subgraph.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/monograph#subscription_url Monograph#subscription_url}
  */
  readonly subscriptionUrl?: string;
  /**
  * The websocket subprotocol for the subgraph.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/monograph#websocket_subprotocol Monograph#websocket_subprotocol}
  */
  readonly websocketSubprotocol?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/monograph cosmo_monograph}
*/
export class Monograph extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cosmo_monograph";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Monograph resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Monograph to import
  * @param importFromId The id of the existing Monograph that should be imported. Refer to the {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/monograph#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Monograph to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cosmo_monograph", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/monograph cosmo_monograph} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonographConfig
  */
  public constructor(scope: Construct, id: string, config: MonographConfig) {
    super(scope, id, {
      terraformResourceType: 'cosmo_monograph',
      terraformGeneratorMetadata: {
        providerName: 'cosmo',
        providerVersion: '0.5.2',
        providerVersionConstraint: '0.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._admissionWebhookSecret = config.admissionWebhookSecret;
    this._admissionWebhookUrl = config.admissionWebhookUrl;
    this._graphUrl = config.graphUrl;
    this._name = config.name;
    this._namespace = config.namespace;
    this._readme = config.readme;
    this._routingUrl = config.routingUrl;
    this._schema = config.schema;
    this._subscriptionProtocol = config.subscriptionProtocol;
    this._subscriptionUrl = config.subscriptionUrl;
    this._websocketSubprotocol = config.websocketSubprotocol;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admission_webhook_secret - computed: false, optional: true, required: false
  private _admissionWebhookSecret?: string; 
  public get admissionWebhookSecret() {
    return this.getStringAttribute('admission_webhook_secret');
  }
  public set admissionWebhookSecret(value: string) {
    this._admissionWebhookSecret = value;
  }
  public resetAdmissionWebhookSecret() {
    this._admissionWebhookSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get admissionWebhookSecretInput() {
    return this._admissionWebhookSecret;
  }

  // admission_webhook_url - computed: false, optional: true, required: false
  private _admissionWebhookUrl?: string; 
  public get admissionWebhookUrl() {
    return this.getStringAttribute('admission_webhook_url');
  }
  public set admissionWebhookUrl(value: string) {
    this._admissionWebhookUrl = value;
  }
  public resetAdmissionWebhookUrl() {
    this._admissionWebhookUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get admissionWebhookUrlInput() {
    return this._admissionWebhookUrl;
  }

  // graph_url - computed: false, optional: false, required: true
  private _graphUrl?: string; 
  public get graphUrl() {
    return this.getStringAttribute('graph_url');
  }
  public set graphUrl(value: string) {
    this._graphUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get graphUrlInput() {
    return this._graphUrl;
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

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // readme - computed: false, optional: true, required: false
  private _readme?: string; 
  public get readme() {
    return this.getStringAttribute('readme');
  }
  public set readme(value: string) {
    this._readme = value;
  }
  public resetReadme() {
    this._readme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readmeInput() {
    return this._readme;
  }

  // routing_url - computed: false, optional: false, required: true
  private _routingUrl?: string; 
  public get routingUrl() {
    return this.getStringAttribute('routing_url');
  }
  public set routingUrl(value: string) {
    this._routingUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingUrlInput() {
    return this._routingUrl;
  }

  // schema - computed: false, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // subscription_protocol - computed: false, optional: true, required: false
  private _subscriptionProtocol?: string; 
  public get subscriptionProtocol() {
    return this.getStringAttribute('subscription_protocol');
  }
  public set subscriptionProtocol(value: string) {
    this._subscriptionProtocol = value;
  }
  public resetSubscriptionProtocol() {
    this._subscriptionProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionProtocolInput() {
    return this._subscriptionProtocol;
  }

  // subscription_url - computed: false, optional: true, required: false
  private _subscriptionUrl?: string; 
  public get subscriptionUrl() {
    return this.getStringAttribute('subscription_url');
  }
  public set subscriptionUrl(value: string) {
    this._subscriptionUrl = value;
  }
  public resetSubscriptionUrl() {
    this._subscriptionUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionUrlInput() {
    return this._subscriptionUrl;
  }

  // websocket_subprotocol - computed: false, optional: true, required: false
  private _websocketSubprotocol?: string; 
  public get websocketSubprotocol() {
    return this.getStringAttribute('websocket_subprotocol');
  }
  public set websocketSubprotocol(value: string) {
    this._websocketSubprotocol = value;
  }
  public resetWebsocketSubprotocol() {
    this._websocketSubprotocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websocketSubprotocolInput() {
    return this._websocketSubprotocol;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admission_webhook_secret: cdktf.stringToTerraform(this._admissionWebhookSecret),
      admission_webhook_url: cdktf.stringToTerraform(this._admissionWebhookUrl),
      graph_url: cdktf.stringToTerraform(this._graphUrl),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      readme: cdktf.stringToTerraform(this._readme),
      routing_url: cdktf.stringToTerraform(this._routingUrl),
      schema: cdktf.stringToTerraform(this._schema),
      subscription_protocol: cdktf.stringToTerraform(this._subscriptionProtocol),
      subscription_url: cdktf.stringToTerraform(this._subscriptionUrl),
      websocket_subprotocol: cdktf.stringToTerraform(this._websocketSubprotocol),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admission_webhook_secret: {
        value: cdktf.stringToHclTerraform(this._admissionWebhookSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admission_webhook_url: {
        value: cdktf.stringToHclTerraform(this._admissionWebhookUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      graph_url: {
        value: cdktf.stringToHclTerraform(this._graphUrl),
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      readme: {
        value: cdktf.stringToHclTerraform(this._readme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_url: {
        value: cdktf.stringToHclTerraform(this._routingUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema: {
        value: cdktf.stringToHclTerraform(this._schema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_protocol: {
        value: cdktf.stringToHclTerraform(this._subscriptionProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_url: {
        value: cdktf.stringToHclTerraform(this._subscriptionUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      websocket_subprotocol: {
        value: cdktf.stringToHclTerraform(this._websocketSubprotocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
