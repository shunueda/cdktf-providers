// https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/data-sources/feature_subgraph
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCosmoFeatureSubgraphConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the feature subgraph.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/data-sources/feature_subgraph#name DataCosmoFeatureSubgraph#name}
  */
  readonly name: string;
  /**
  * The namespace of the feature subgraph.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/data-sources/feature_subgraph#namespace DataCosmoFeatureSubgraph#namespace}
  */
  readonly namespace?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/data-sources/feature_subgraph cosmo_feature_subgraph}
*/
export class DataCosmoFeatureSubgraph extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cosmo_feature_subgraph";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCosmoFeatureSubgraph resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCosmoFeatureSubgraph to import
  * @param importFromId The id of the existing DataCosmoFeatureSubgraph that should be imported. Refer to the {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/data-sources/feature_subgraph#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCosmoFeatureSubgraph to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cosmo_feature_subgraph", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/data-sources/feature_subgraph cosmo_feature_subgraph} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCosmoFeatureSubgraphConfig
  */
  public constructor(scope: Construct, id: string, config: DataCosmoFeatureSubgraphConfig) {
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

  // namespace - computed: false, optional: true, required: false
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
