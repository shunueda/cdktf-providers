// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/oam_gretunnel_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OamGretunnelInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Hold time (5..250 seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/oam_gretunnel_interface#hold_time OamGretunnelInterface#hold_time}
  */
  readonly holdTime?: number;
  /**
  * Keepalive time (1..50 seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/oam_gretunnel_interface#keepalive_time OamGretunnelInterface#keepalive_time}
  */
  readonly keepaliveTime?: number;
  /**
  * Name of interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/oam_gretunnel_interface#name OamGretunnelInterface#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/oam_gretunnel_interface junos_oam_gretunnel_interface}
*/
export class OamGretunnelInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_oam_gretunnel_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OamGretunnelInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OamGretunnelInterface to import
  * @param importFromId The id of the existing OamGretunnelInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/oam_gretunnel_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OamGretunnelInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_oam_gretunnel_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/oam_gretunnel_interface junos_oam_gretunnel_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OamGretunnelInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: OamGretunnelInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_oam_gretunnel_interface',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._holdTime = config.holdTime;
    this._keepaliveTime = config.keepaliveTime;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hold_time - computed: false, optional: true, required: false
  private _holdTime?: number; 
  public get holdTime() {
    return this.getNumberAttribute('hold_time');
  }
  public set holdTime(value: number) {
    this._holdTime = value;
  }
  public resetHoldTime() {
    this._holdTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdTimeInput() {
    return this._holdTime;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // keepalive_time - computed: false, optional: true, required: false
  private _keepaliveTime?: number; 
  public get keepaliveTime() {
    return this.getNumberAttribute('keepalive_time');
  }
  public set keepaliveTime(value: number) {
    this._keepaliveTime = value;
  }
  public resetKeepaliveTime() {
    this._keepaliveTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveTimeInput() {
    return this._keepaliveTime;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      hold_time: cdktf.numberToTerraform(this._holdTime),
      keepalive_time: cdktf.numberToTerraform(this._keepaliveTime),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      hold_time: {
        value: cdktf.numberToHclTerraform(this._holdTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      keepalive_time: {
        value: cdktf.numberToHclTerraform(this._keepaliveTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
