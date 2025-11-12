// https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/rack_types
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApstraRackTypesConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/rack_types apstra_rack_types}
*/
export class DataApstraRackTypes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_rack_types";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApstraRackTypes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApstraRackTypes to import
  * @param importFromId The id of the existing DataApstraRackTypes that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/rack_types#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApstraRackTypes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_rack_types", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/rack_types apstra_rack_types} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApstraRackTypesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataApstraRackTypesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'apstra_rack_types',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.1',
        providerVersionConstraint: '0.95.1'
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

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return cdktf.Fn.tolist(this.getListAttribute('ids'));
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
