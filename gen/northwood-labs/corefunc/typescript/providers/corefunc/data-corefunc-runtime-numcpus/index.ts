// https://registry.terraform.io/providers/northwood-labs/corefunc/2.1.0/docs/data-sources/runtime_numcpus
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCorefuncRuntimeNumcpusConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.1.0/docs/data-sources/runtime_numcpus corefunc_runtime_numcpus}
*/
export class DataCorefuncRuntimeNumcpus extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "corefunc_runtime_numcpus";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCorefuncRuntimeNumcpus resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCorefuncRuntimeNumcpus to import
  * @param importFromId The id of the existing DataCorefuncRuntimeNumcpus that should be imported. Refer to the {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.1.0/docs/data-sources/runtime_numcpus#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCorefuncRuntimeNumcpus to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "corefunc_runtime_numcpus", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.1.0/docs/data-sources/runtime_numcpus corefunc_runtime_numcpus} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCorefuncRuntimeNumcpusConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCorefuncRuntimeNumcpusConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'corefunc_runtime_numcpus',
      terraformGeneratorMetadata: {
        providerName: 'corefunc',
        providerVersion: '2.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
