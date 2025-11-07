// https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/task
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCoderTaskConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/task coder_task}
*/
export class DataCoderTask extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "coder_task";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCoderTask resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCoderTask to import
  * @param importFromId The id of the existing DataCoderTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/task#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCoderTask to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "coder_task", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/task coder_task} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCoderTaskConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCoderTaskConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'coder_task',
      terraformGeneratorMetadata: {
        providerName: 'coder',
        providerVersion: '2.13.1'
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

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // prompt - computed: true, optional: false, required: false
  public get prompt() {
    return this.getStringAttribute('prompt');
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
