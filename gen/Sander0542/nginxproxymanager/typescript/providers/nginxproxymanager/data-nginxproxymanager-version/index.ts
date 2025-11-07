// https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/data-sources/version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNginxproxymanagerVersionConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/data-sources/version nginxproxymanager_version}
*/
export class DataNginxproxymanagerVersion extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nginxproxymanager_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNginxproxymanagerVersion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNginxproxymanagerVersion to import
  * @param importFromId The id of the existing DataNginxproxymanagerVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/data-sources/version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNginxproxymanagerVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nginxproxymanager_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/data-sources/version nginxproxymanager_version} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNginxproxymanagerVersionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNginxproxymanagerVersionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nginxproxymanager_version',
      terraformGeneratorMetadata: {
        providerName: 'nginxproxymanager',
        providerVersion: '1.2.2'
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

  // major - computed: true, optional: false, required: false
  public get major() {
    return this.getNumberAttribute('major');
  }

  // minor - computed: true, optional: false, required: false
  public get minor() {
    return this.getNumberAttribute('minor');
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
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
