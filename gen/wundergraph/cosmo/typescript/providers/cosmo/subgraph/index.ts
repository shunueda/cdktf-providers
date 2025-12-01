// https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/subgraph
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SubgraphConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates if the subgraph is event-driven.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/subgraph#is_event_driven_graph Subgraph#is_event_driven_graph}
  */
  readonly isEventDrivenGraph?: boolean | cdktf.IResolvable;
  /**
  * Labels for the subgraph.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/subgraph#labels Subgraph#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The name of the subgraph.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/subgraph#name Subgraph#name}
  */
  readonly name: string;
  /**
  * The namespace in which the subgraph is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/subgraph#namespace Subgraph#namespace}
  */
  readonly namespace?: string;
  /**
  * The readme for the subgraph.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/subgraph#readme Subgraph#readme}
  */
  readonly readme?: string;
  /**
  * The routing URL of the subgraph. Routing URL is required for normal subgraphs but not for event driven subgraphs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/subgraph#routing_url Subgraph#routing_url}
  */
  readonly routingUrl?: string;
  /**
  * The schema for the subgraph.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/subgraph#schema Subgraph#schema}
  */
  readonly schema?: string;
  /**
  * The subscription protocol for the subgraph.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/subgraph#subscription_protocol Subgraph#subscription_protocol}
  */
  readonly subscriptionProtocol?: string;
  /**
  * The subscription URL for the subgraph.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/subgraph#subscription_url Subgraph#subscription_url}
  */
  readonly subscriptionUrl?: string;
  /**
  * Unset labels for the subgraph.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/subgraph#unset_labels Subgraph#unset_labels}
  */
  readonly unsetLabels?: boolean | cdktf.IResolvable;
  /**
  * The websocket subprotocol for the subgraph.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/subgraph#websocket_subprotocol Subgraph#websocket_subprotocol}
  */
  readonly websocketSubprotocol?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/subgraph cosmo_subgraph}
*/
export class Subgraph extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cosmo_subgraph";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Subgraph resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Subgraph to import
  * @param importFromId The id of the existing Subgraph that should be imported. Refer to the {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/subgraph#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Subgraph to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cosmo_subgraph", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/subgraph cosmo_subgraph} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SubgraphConfig
  */
  public constructor(scope: Construct, id: string, config: SubgraphConfig) {
    super(scope, id, {
      terraformResourceType: 'cosmo_subgraph',
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
    this._isEventDrivenGraph = config.isEventDrivenGraph;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._readme = config.readme;
    this._routingUrl = config.routingUrl;
    this._schema = config.schema;
    this._subscriptionProtocol = config.subscriptionProtocol;
    this._subscriptionUrl = config.subscriptionUrl;
    this._unsetLabels = config.unsetLabels;
    this._websocketSubprotocol = config.websocketSubprotocol;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_event_driven_graph - computed: true, optional: true, required: false
  private _isEventDrivenGraph?: boolean | cdktf.IResolvable; 
  public get isEventDrivenGraph() {
    return this.getBooleanAttribute('is_event_driven_graph');
  }
  public set isEventDrivenGraph(value: boolean | cdktf.IResolvable) {
    this._isEventDrivenGraph = value;
  }
  public resetIsEventDrivenGraph() {
    this._isEventDrivenGraph = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEventDrivenGraphInput() {
    return this._isEventDrivenGraph;
  }

  // labels - computed: true, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // routing_url - computed: true, optional: true, required: false
  private _routingUrl?: string; 
  public get routingUrl() {
    return this.getStringAttribute('routing_url');
  }
  public set routingUrl(value: string) {
    this._routingUrl = value;
  }
  public resetRoutingUrl() {
    this._routingUrl = undefined;
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

  // subscription_protocol - computed: true, optional: true, required: false
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

  // unset_labels - computed: false, optional: true, required: false
  private _unsetLabels?: boolean | cdktf.IResolvable; 
  public get unsetLabels() {
    return this.getBooleanAttribute('unset_labels');
  }
  public set unsetLabels(value: boolean | cdktf.IResolvable) {
    this._unsetLabels = value;
  }
  public resetUnsetLabels() {
    this._unsetLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsetLabelsInput() {
    return this._unsetLabels;
  }

  // websocket_subprotocol - computed: true, optional: true, required: false
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
      is_event_driven_graph: cdktf.booleanToTerraform(this._isEventDrivenGraph),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      readme: cdktf.stringToTerraform(this._readme),
      routing_url: cdktf.stringToTerraform(this._routingUrl),
      schema: cdktf.stringToTerraform(this._schema),
      subscription_protocol: cdktf.stringToTerraform(this._subscriptionProtocol),
      subscription_url: cdktf.stringToTerraform(this._subscriptionUrl),
      unset_labels: cdktf.booleanToTerraform(this._unsetLabels),
      websocket_subprotocol: cdktf.stringToTerraform(this._websocketSubprotocol),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      is_event_driven_graph: {
        value: cdktf.booleanToHclTerraform(this._isEventDrivenGraph),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
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
      unset_labels: {
        value: cdktf.booleanToHclTerraform(this._unsetLabels),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
