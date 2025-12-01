// https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/feature_subgraph
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FeatureSubgraphConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the base subgraph that this feature subgraph extends.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/feature_subgraph#base_subgraph_name FeatureSubgraph#base_subgraph_name}
  */
  readonly baseSubgraphName: string;
  /**
  * The name of the feature subgraph.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/feature_subgraph#name FeatureSubgraph#name}
  */
  readonly name: string;
  /**
  * The namespace to create the feature subgraph in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/feature_subgraph#namespace FeatureSubgraph#namespace}
  */
  readonly namespace?: string;
  /**
  * The readme for the subgraph.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/feature_subgraph#readme FeatureSubgraph#readme}
  */
  readonly readme?: string;
  /**
  * The routing URL of the feature subgraph.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/feature_subgraph#routing_url FeatureSubgraph#routing_url}
  */
  readonly routingUrl: string;
  /**
  * The schema for the subgraph.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/feature_subgraph#schema FeatureSubgraph#schema}
  */
  readonly schema?: string;
  /**
  * The subscription protocol for the subgraph.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/feature_subgraph#subscription_protocol FeatureSubgraph#subscription_protocol}
  */
  readonly subscriptionProtocol?: string;
  /**
  * The subscription URL for the subgraph.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/feature_subgraph#subscription_url FeatureSubgraph#subscription_url}
  */
  readonly subscriptionUrl?: string;
  /**
  * The websocket subprotocol for the subgraph.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/feature_subgraph#websocket_subprotocol FeatureSubgraph#websocket_subprotocol}
  */
  readonly websocketSubprotocol?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/feature_subgraph cosmo_feature_subgraph}
*/
export class FeatureSubgraph extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cosmo_feature_subgraph";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FeatureSubgraph resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FeatureSubgraph to import
  * @param importFromId The id of the existing FeatureSubgraph that should be imported. Refer to the {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/feature_subgraph#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FeatureSubgraph to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cosmo_feature_subgraph", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/feature_subgraph cosmo_feature_subgraph} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FeatureSubgraphConfig
  */
  public constructor(scope: Construct, id: string, config: FeatureSubgraphConfig) {
    super(scope, id, {
      terraformResourceType: 'cosmo_feature_subgraph',
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
    this._baseSubgraphName = config.baseSubgraphName;
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

  // base_subgraph_name - computed: false, optional: false, required: true
  private _baseSubgraphName?: string; 
  public get baseSubgraphName() {
    return this.getStringAttribute('base_subgraph_name');
  }
  public set baseSubgraphName(value: string) {
    this._baseSubgraphName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseSubgraphNameInput() {
    return this._baseSubgraphName;
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
      base_subgraph_name: cdktf.stringToTerraform(this._baseSubgraphName),
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
      base_subgraph_name: {
        value: cdktf.stringToHclTerraform(this._baseSubgraphName),
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
