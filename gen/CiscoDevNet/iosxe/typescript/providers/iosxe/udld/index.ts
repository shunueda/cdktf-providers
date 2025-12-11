// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/udld
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UdldConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable UDLD protocol in aggressive mode on fiber ports exceptwhere locally configured
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/udld#aggressive Udld#aggressive}
  */
  readonly aggressive?: boolean | cdktf.IResolvable;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/udld#delete_mode Udld#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/udld#device Udld#device}
  */
  readonly device?: string;
  /**
  * Enable UDLD protocol on fiber ports except where locally configured
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/udld#enable Udld#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Set UDLD message time period
  *   - Range: `1`-`90`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/udld#message_time Udld#message_time}
  */
  readonly messageTime?: number;
  /**
  * timer-interval(sec)
  *   - Range: `30`-`86400`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/udld#recovery_interval Udld#recovery_interval}
  */
  readonly recoveryInterval?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/udld iosxe_udld}
*/
export class Udld extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_udld";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Udld resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Udld to import
  * @param importFromId The id of the existing Udld that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/udld#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Udld to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_udld", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/udld iosxe_udld} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UdldConfig = {}
  */
  public constructor(scope: Construct, id: string, config: UdldConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_udld',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.13.0',
        providerVersionConstraint: '0.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aggressive = config.aggressive;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._enable = config.enable;
    this._messageTime = config.messageTime;
    this._recoveryInterval = config.recoveryInterval;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aggressive - computed: false, optional: true, required: false
  private _aggressive?: boolean | cdktf.IResolvable; 
  public get aggressive() {
    return this.getBooleanAttribute('aggressive');
  }
  public set aggressive(value: boolean | cdktf.IResolvable) {
    this._aggressive = value;
  }
  public resetAggressive() {
    this._aggressive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggressiveInput() {
    return this._aggressive;
  }

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
  }

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

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // message_time - computed: false, optional: true, required: false
  private _messageTime?: number; 
  public get messageTime() {
    return this.getNumberAttribute('message_time');
  }
  public set messageTime(value: number) {
    this._messageTime = value;
  }
  public resetMessageTime() {
    this._messageTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageTimeInput() {
    return this._messageTime;
  }

  // recovery_interval - computed: false, optional: true, required: false
  private _recoveryInterval?: number; 
  public get recoveryInterval() {
    return this.getNumberAttribute('recovery_interval');
  }
  public set recoveryInterval(value: number) {
    this._recoveryInterval = value;
  }
  public resetRecoveryInterval() {
    this._recoveryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryIntervalInput() {
    return this._recoveryInterval;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aggressive: cdktf.booleanToTerraform(this._aggressive),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      enable: cdktf.booleanToTerraform(this._enable),
      message_time: cdktf.numberToTerraform(this._messageTime),
      recovery_interval: cdktf.numberToTerraform(this._recoveryInterval),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aggressive: {
        value: cdktf.booleanToHclTerraform(this._aggressive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable: {
        value: cdktf.booleanToHclTerraform(this._enable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      message_time: {
        value: cdktf.numberToHclTerraform(this._messageTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      recovery_interval: {
        value: cdktf.numberToHclTerraform(this._recoveryInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
