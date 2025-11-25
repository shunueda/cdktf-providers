// https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/data-sources/version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVergeioVersionConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/data-sources/version vergeio_version}
*/
export class DataVergeioVersion extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vergeio_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVergeioVersion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVergeioVersion to import
  * @param importFromId The id of the existing DataVergeioVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/data-sources/version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVergeioVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vergeio_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/data-sources/version vergeio_version} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVergeioVersionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataVergeioVersionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vergeio_version',
      terraformGeneratorMetadata: {
        providerName: 'vergeio',
        providerVersion: '2.7.2',
        providerVersionConstraint: '2.7.2'
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

  // hash - computed: true, optional: false, required: false
  public get hash() {
    return this.getStringAttribute('hash');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

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
