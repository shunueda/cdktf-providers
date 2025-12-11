// https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_warm_spare
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchWarmSpareConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable or disable warm spare for a switch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_warm_spare#enabled SwitchWarmSpare#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Switch serial
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_warm_spare#serial SwitchWarmSpare#serial}
  */
  readonly serial: string;
  /**
  * Serial number of the warm spare switch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_warm_spare#spare_serial SwitchWarmSpare#spare_serial}
  */
  readonly spareSerial?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_warm_spare meraki_switch_warm_spare}
*/
export class SwitchWarmSpare extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_switch_warm_spare";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchWarmSpare resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchWarmSpare to import
  * @param importFromId The id of the existing SwitchWarmSpare that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_warm_spare#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchWarmSpare to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_switch_warm_spare", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_warm_spare meraki_switch_warm_spare} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchWarmSpareConfig
  */
  public constructor(scope: Construct, id: string, config: SwitchWarmSpareConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_switch_warm_spare',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.9.0',
        providerVersionConstraint: '1.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._serial = config.serial;
    this._spareSerial = config.spareSerial;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // serial - computed: false, optional: false, required: true
  private _serial?: string; 
  public get serial() {
    return this.getStringAttribute('serial');
  }
  public set serial(value: string) {
    this._serial = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serialInput() {
    return this._serial;
  }

  // spare_serial - computed: false, optional: true, required: false
  private _spareSerial?: string; 
  public get spareSerial() {
    return this.getStringAttribute('spare_serial');
  }
  public set spareSerial(value: string) {
    this._spareSerial = value;
  }
  public resetSpareSerial() {
    this._spareSerial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spareSerialInput() {
    return this._spareSerial;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      serial: cdktf.stringToTerraform(this._serial),
      spare_serial: cdktf.stringToTerraform(this._spareSerial),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      serial: {
        value: cdktf.stringToHclTerraform(this._serial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spare_serial: {
        value: cdktf.stringToHclTerraform(this._spareSerial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
