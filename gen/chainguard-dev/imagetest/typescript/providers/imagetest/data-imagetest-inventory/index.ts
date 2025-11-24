// https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.104/docs/data-sources/inventory
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataImagetestInventoryConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.104/docs/data-sources/inventory imagetest_inventory}
*/
export class DataImagetestInventory extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "imagetest_inventory";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataImagetestInventory resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataImagetestInventory to import
  * @param importFromId The id of the existing DataImagetestInventory that should be imported. Refer to the {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.104/docs/data-sources/inventory#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataImagetestInventory to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "imagetest_inventory", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.104/docs/data-sources/inventory imagetest_inventory} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataImagetestInventoryConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataImagetestInventoryConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'imagetest_inventory',
      terraformGeneratorMetadata: {
        providerName: 'imagetest',
        providerVersion: '0.0.104',
        providerVersionConstraint: '0.0.104'
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

  // seed - computed: true, optional: false, required: false
  public get seed() {
    return this.getStringAttribute('seed');
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
