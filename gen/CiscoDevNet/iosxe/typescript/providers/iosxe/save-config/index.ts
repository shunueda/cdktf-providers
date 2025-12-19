// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/save_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SaveConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/save_config#device SaveConfig#device}
  */
  readonly device?: string;
  /**
  * This attribute is only used internally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/save_config#save SaveConfig#save}
  */
  readonly save?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/save_config iosxe_save_config}
*/
export class SaveConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_save_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SaveConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SaveConfig to import
  * @param importFromId The id of the existing SaveConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/save_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SaveConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_save_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/save_config iosxe_save_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SaveConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SaveConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_save_config',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.14.6',
        providerVersionConstraint: '0.14.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._save = config.save;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // save - computed: true, optional: true, required: false
  private _save?: boolean | cdktf.IResolvable; 
  public get save() {
    return this.getBooleanAttribute('save');
  }
  public set save(value: boolean | cdktf.IResolvable) {
    this._save = value;
  }
  public resetSave() {
    this._save = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saveInput() {
    return this._save;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      save: cdktf.booleanToTerraform(this._save),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      save: {
        value: cdktf.booleanToHclTerraform(this._save),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
