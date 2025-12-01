// https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/router_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the graph to create the token for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/router_token#graph_name RouterToken#graph_name}
  */
  readonly graphName: string;
  /**
  * The name of the router token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/router_token#name RouterToken#name}
  */
  readonly name: string;
  /**
  * The namespace to create the token in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/router_token#namespace RouterToken#namespace}
  */
  readonly namespace?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/router_token cosmo_router_token}
*/
export class RouterToken extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cosmo_router_token";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterToken resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterToken to import
  * @param importFromId The id of the existing RouterToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/router_token#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterToken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cosmo_router_token", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/router_token cosmo_router_token} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterTokenConfig
  */
  public constructor(scope: Construct, id: string, config: RouterTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'cosmo_router_token',
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
    this._graphName = config.graphName;
    this._name = config.name;
    this._namespace = config.namespace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // graph_name - computed: false, optional: false, required: true
  private _graphName?: string; 
  public get graphName() {
    return this.getStringAttribute('graph_name');
  }
  public set graphName(value: string) {
    this._graphName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get graphNameInput() {
    return this._graphName;
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

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      graph_name: cdktf.stringToTerraform(this._graphName),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      graph_name: {
        value: cdktf.stringToHclTerraform(this._graphName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
