// https://registry.terraform.io/providers/alabuel/config/0.2.8/docs/data-sources/ini
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataConfigIniConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alabuel/config/0.2.8/docs/data-sources/ini#id DataConfigIni#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alabuel/config/0.2.8/docs/data-sources/ini#ini DataConfigIni#ini}
  */
  readonly ini: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alabuel/config/0.2.8/docs/data-sources/ini#json DataConfigIni#json}
  */
  readonly json?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alabuel/config/0.2.8/docs/data-sources/ini#section DataConfigIni#section}
  */
  readonly section?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/alabuel/config/0.2.8/docs/data-sources/ini config_ini}
*/
export class DataConfigIni extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "config_ini";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataConfigIni resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataConfigIni to import
  * @param importFromId The id of the existing DataConfigIni that should be imported. Refer to the {@link https://registry.terraform.io/providers/alabuel/config/0.2.8/docs/data-sources/ini#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataConfigIni to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "config_ini", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alabuel/config/0.2.8/docs/data-sources/ini config_ini} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataConfigIniConfig
  */
  public constructor(scope: Construct, id: string, config: DataConfigIniConfig) {
    super(scope, id, {
      terraformResourceType: 'config_ini',
      terraformGeneratorMetadata: {
        providerName: 'config',
        providerVersion: '0.2.8',
        providerVersionConstraint: '0.2.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._ini = config.ini;
    this._json = config.json;
    this._section = config.section;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ini - computed: false, optional: false, required: true
  private _ini?: string; 
  public get ini() {
    return this.getStringAttribute('ini');
  }
  public set ini(value: string) {
    this._ini = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iniInput() {
    return this._ini;
  }

  // json - computed: true, optional: true, required: false
  private _json?: string; 
  public get json() {
    return this.getStringAttribute('json');
  }
  public set json(value: string) {
    this._json = value;
  }
  public resetJson() {
    this._json = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonInput() {
    return this._json;
  }

  // section - computed: false, optional: true, required: false
  private _section?: string; 
  public get section() {
    return this.getStringAttribute('section');
  }
  public set section(value: string) {
    this._section = value;
  }
  public resetSection() {
    this._section = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sectionInput() {
    return this._section;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ini: cdktf.stringToTerraform(this._ini),
      json: cdktf.stringToTerraform(this._json),
      section: cdktf.stringToTerraform(this._section),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ini: {
        value: cdktf.stringToHclTerraform(this._ini),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      json: {
        value: cdktf.stringToHclTerraform(this._json),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      section: {
        value: cdktf.stringToHclTerraform(this._section),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
