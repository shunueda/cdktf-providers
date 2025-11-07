// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/extcommunity_soo_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExtcommunitySooSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/extcommunity_soo_set#device ExtcommunitySooSet#device}
  */
  readonly device?: string;
  /**
  * Configures an extended community soo set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/extcommunity_soo_set#rpl ExtcommunitySooSet#rpl}
  */
  readonly rpl: string;
  /**
  * Set name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/extcommunity_soo_set#set_name ExtcommunitySooSet#set_name}
  */
  readonly setName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/extcommunity_soo_set iosxr_extcommunity_soo_set}
*/
export class ExtcommunitySooSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_extcommunity_soo_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExtcommunitySooSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExtcommunitySooSet to import
  * @param importFromId The id of the existing ExtcommunitySooSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/extcommunity_soo_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExtcommunitySooSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_extcommunity_soo_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/extcommunity_soo_set iosxr_extcommunity_soo_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExtcommunitySooSetConfig
  */
  public constructor(scope: Construct, id: string, config: ExtcommunitySooSetConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_extcommunity_soo_set',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0'
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
    this._rpl = config.rpl;
    this._setName = config.setName;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // rpl - computed: false, optional: false, required: true
  private _rpl?: string; 
  public get rpl() {
    return this.getStringAttribute('rpl');
  }
  public set rpl(value: string) {
    this._rpl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rplInput() {
    return this._rpl;
  }

  // set_name - computed: false, optional: false, required: true
  private _setName?: string; 
  public get setName() {
    return this.getStringAttribute('set_name');
  }
  public set setName(value: string) {
    this._setName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get setNameInput() {
    return this._setName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      rpl: cdktf.stringToTerraform(this._rpl),
      set_name: cdktf.stringToTerraform(this._setName),
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
      rpl: {
        value: cdktf.stringToHclTerraform(this._rpl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_name: {
        value: cdktf.stringToHclTerraform(this._setName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
