// https://registry.terraform.io/providers/littlejo/cilium/0.3.2/docs/resources/clustermesh_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClustermeshConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Connection mode. unicast, bidirectional and mesh (Default: `bidirectional`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/littlejo/cilium/0.3.2/docs/resources/clustermesh_connection#connection_mode ClustermeshConnection#connection_mode}
  */
  readonly connectionMode?: string;
  /**
  * Kubernetes configuration contexts of destination clusters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/littlejo/cilium/0.3.2/docs/resources/clustermesh_connection#destination_contexts ClustermeshConnection#destination_contexts}
  */
  readonly destinationContexts?: string[];
  /**
  * Number of parallel connections of destination clusters (Default: `1`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/littlejo/cilium/0.3.2/docs/resources/clustermesh_connection#parallel ClustermeshConnection#parallel}
  */
  readonly parallel?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/littlejo/cilium/0.3.2/docs/resources/clustermesh_connection cilium_clustermesh_connection}
*/
export class ClustermeshConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cilium_clustermesh_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClustermeshConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClustermeshConnection to import
  * @param importFromId The id of the existing ClustermeshConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/littlejo/cilium/0.3.2/docs/resources/clustermesh_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClustermeshConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cilium_clustermesh_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/littlejo/cilium/0.3.2/docs/resources/clustermesh_connection cilium_clustermesh_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClustermeshConnectionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ClustermeshConnectionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cilium_clustermesh_connection',
      terraformGeneratorMetadata: {
        providerName: 'cilium',
        providerVersion: '0.3.2',
        providerVersionConstraint: '0.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectionMode = config.connectionMode;
    this._destinationContexts = config.destinationContexts;
    this._parallel = config.parallel;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_mode - computed: true, optional: true, required: false
  private _connectionMode?: string; 
  public get connectionMode() {
    return this.getStringAttribute('connection_mode');
  }
  public set connectionMode(value: string) {
    this._connectionMode = value;
  }
  public resetConnectionMode() {
    this._connectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionModeInput() {
    return this._connectionMode;
  }

  // destination_contexts - computed: true, optional: true, required: false
  private _destinationContexts?: string[]; 
  public get destinationContexts() {
    return this.getListAttribute('destination_contexts');
  }
  public set destinationContexts(value: string[]) {
    this._destinationContexts = value;
  }
  public resetDestinationContexts() {
    this._destinationContexts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationContextsInput() {
    return this._destinationContexts;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // parallel - computed: true, optional: true, required: false
  private _parallel?: number; 
  public get parallel() {
    return this.getNumberAttribute('parallel');
  }
  public set parallel(value: number) {
    this._parallel = value;
  }
  public resetParallel() {
    this._parallel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelInput() {
    return this._parallel;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_mode: cdktf.stringToTerraform(this._connectionMode),
      destination_contexts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._destinationContexts),
      parallel: cdktf.numberToTerraform(this._parallel),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_mode: {
        value: cdktf.stringToHclTerraform(this._connectionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_contexts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._destinationContexts),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      parallel: {
        value: cdktf.numberToHclTerraform(this._parallel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
