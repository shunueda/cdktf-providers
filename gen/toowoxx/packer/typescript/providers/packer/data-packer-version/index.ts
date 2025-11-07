// https://registry.terraform.io/providers/toowoxx/packer/0.17.2/docs/data-sources/version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPackerVersionConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/toowoxx/packer/0.17.2/docs/data-sources/version packer_version}
*/
export class DataPackerVersion extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "packer_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPackerVersion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPackerVersion to import
  * @param importFromId The id of the existing DataPackerVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/toowoxx/packer/0.17.2/docs/data-sources/version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPackerVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "packer_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/toowoxx/packer/0.17.2/docs/data-sources/version packer_version} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPackerVersionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPackerVersionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'packer_version',
      terraformGeneratorMetadata: {
        providerName: 'packer',
        providerVersion: '0.17.2'
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
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
