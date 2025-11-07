// https://registry.terraform.io/providers/azure/modtm/0.3.5/docs/data-sources/module_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataModtmModuleSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The path of the module that the telemetry resource is associated with. From this data the provider will attempt to read the `$TF_DATA_DIR/modules/modules.json` file and will send the module source and version to the telemetry endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/modtm/0.3.5/docs/data-sources/module_source#module_path DataModtmModuleSource#module_path}
  */
  readonly modulePath: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/azure/modtm/0.3.5/docs/data-sources/module_source modtm_module_source}
*/
export class DataModtmModuleSource extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "modtm_module_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataModtmModuleSource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataModtmModuleSource to import
  * @param importFromId The id of the existing DataModtmModuleSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/azure/modtm/0.3.5/docs/data-sources/module_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataModtmModuleSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "modtm_module_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/azure/modtm/0.3.5/docs/data-sources/module_source modtm_module_source} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataModtmModuleSourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataModtmModuleSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'modtm_module_source',
      terraformGeneratorMetadata: {
        providerName: 'modtm',
        providerVersion: '0.3.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._modulePath = config.modulePath;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // module_path - computed: false, optional: false, required: true
  private _modulePath?: string; 
  public get modulePath() {
    return this.getStringAttribute('module_path');
  }
  public set modulePath(value: string) {
    this._modulePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modulePathInput() {
    return this._modulePath;
  }

  // module_source - computed: true, optional: false, required: false
  public get moduleSource() {
    return this.getStringAttribute('module_source');
  }

  // module_version - computed: true, optional: false, required: false
  public get moduleVersion() {
    return this.getStringAttribute('module_version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      module_path: cdktf.stringToTerraform(this._modulePath),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      module_path: {
        value: cdktf.stringToHclTerraform(this._modulePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
