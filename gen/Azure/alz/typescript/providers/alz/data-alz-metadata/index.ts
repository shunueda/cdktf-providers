// https://registry.terraform.io/providers/azure/alz/0.20.0/docs/data-sources/metadata
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlzMetadataConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs/data-sources/metadata alz_metadata}
*/
export class DataAlzMetadata extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alz_metadata";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlzMetadata resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlzMetadata to import
  * @param importFromId The id of the existing DataAlzMetadata that should be imported. Refer to the {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs/data-sources/metadata#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlzMetadata to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alz_metadata", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs/data-sources/metadata alz_metadata} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlzMetadataConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlzMetadataConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alz_metadata',
      terraformGeneratorMetadata: {
        providerName: 'alz',
        providerVersion: '0.20.0',
        providerVersionConstraint: '0.20.0'
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

  // alz_library_references - computed: true, optional: false, required: false
  public get alzLibraryReferences() {
    return this.getListAttribute('alz_library_references');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
