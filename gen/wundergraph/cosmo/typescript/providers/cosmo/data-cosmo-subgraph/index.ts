// https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/data-sources/subgraph
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCosmoSubgraphConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the subgraph.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/data-sources/subgraph#name DataCosmoSubgraph#name}
  */
  readonly name: string;
  /**
  * The namespace in which the subgraph is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/data-sources/subgraph#namespace DataCosmoSubgraph#namespace}
  */
  readonly namespace: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/data-sources/subgraph cosmo_subgraph}
*/
export class DataCosmoSubgraph extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cosmo_subgraph";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCosmoSubgraph resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCosmoSubgraph to import
  * @param importFromId The id of the existing DataCosmoSubgraph that should be imported. Refer to the {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/data-sources/subgraph#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCosmoSubgraph to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cosmo_subgraph", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/data-sources/subgraph cosmo_subgraph} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCosmoSubgraphConfig
  */
  public constructor(scope: Construct, id: string, config: DataCosmoSubgraphConfig) {
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
    this._name = config.name;
    this._namespace = config.namespace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_subgraph_name - computed: true, optional: false, required: false
  public get baseSubgraphName() {
    return this.getStringAttribute('base_subgraph_name');
  }

  // headers - computed: true, optional: false, required: false
  public get headers() {
    return this.getListAttribute('headers');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_event_driven_graph - computed: true, optional: false, required: false
  public get isEventDrivenGraph() {
    return this.getBooleanAttribute('is_event_driven_graph');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // readme - computed: true, optional: false, required: false
  public get readme() {
    return this.getStringAttribute('readme');
  }

  // routing_url - computed: true, optional: false, required: false
  public get routingUrl() {
    return this.getStringAttribute('routing_url');
  }

  // schema - computed: true, optional: false, required: false
  public get schema() {
    return this.getStringAttribute('schema');
  }

  // subscription_protocol - computed: true, optional: false, required: false
  public get subscriptionProtocol() {
    return this.getStringAttribute('subscription_protocol');
  }

  // subscription_url - computed: true, optional: false, required: false
  public get subscriptionUrl() {
    return this.getStringAttribute('subscription_url');
  }

  // websocket_subprotocol - computed: true, optional: false, required: false
  public get websocketSubprotocol() {
    return this.getStringAttribute('websocket_subprotocol');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
