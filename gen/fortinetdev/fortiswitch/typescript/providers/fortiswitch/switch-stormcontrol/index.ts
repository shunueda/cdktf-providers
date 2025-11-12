// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_stormcontrol
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchStormcontrolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_stormcontrol#broadcast SwitchStormcontrol#broadcast}
  */
  readonly broadcast?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_stormcontrol#burst_size_level SwitchStormcontrol#burst_size_level}
  */
  readonly burstSizeLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_stormcontrol#id SwitchStormcontrol#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_stormcontrol#rate SwitchStormcontrol#rate}
  */
  readonly rate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_stormcontrol#unknown_multicast SwitchStormcontrol#unknown_multicast}
  */
  readonly unknownMulticast?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_stormcontrol#unknown_unicast SwitchStormcontrol#unknown_unicast}
  */
  readonly unknownUnicast?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_stormcontrol fortiswitch_switch_stormcontrol}
*/
export class SwitchStormcontrol extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_switch_stormcontrol";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchStormcontrol resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchStormcontrol to import
  * @param importFromId The id of the existing SwitchStormcontrol that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_stormcontrol#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchStormcontrol to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_switch_stormcontrol", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_stormcontrol fortiswitch_switch_stormcontrol} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchStormcontrolConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchStormcontrolConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_switch_stormcontrol',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6',
        providerVersionConstraint: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._broadcast = config.broadcast;
    this._burstSizeLevel = config.burstSizeLevel;
    this._id = config.id;
    this._rate = config.rate;
    this._unknownMulticast = config.unknownMulticast;
    this._unknownUnicast = config.unknownUnicast;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // broadcast - computed: true, optional: true, required: false
  private _broadcast?: string; 
  public get broadcast() {
    return this.getStringAttribute('broadcast');
  }
  public set broadcast(value: string) {
    this._broadcast = value;
  }
  public resetBroadcast() {
    this._broadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get broadcastInput() {
    return this._broadcast;
  }

  // burst_size_level - computed: true, optional: true, required: false
  private _burstSizeLevel?: number; 
  public get burstSizeLevel() {
    return this.getNumberAttribute('burst_size_level');
  }
  public set burstSizeLevel(value: number) {
    this._burstSizeLevel = value;
  }
  public resetBurstSizeLevel() {
    this._burstSizeLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstSizeLevelInput() {
    return this._burstSizeLevel;
  }

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

  // rate - computed: true, optional: true, required: false
  private _rate?: number; 
  public get rate() {
    return this.getNumberAttribute('rate');
  }
  public set rate(value: number) {
    this._rate = value;
  }
  public resetRate() {
    this._rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }

  // unknown_multicast - computed: true, optional: true, required: false
  private _unknownMulticast?: string; 
  public get unknownMulticast() {
    return this.getStringAttribute('unknown_multicast');
  }
  public set unknownMulticast(value: string) {
    this._unknownMulticast = value;
  }
  public resetUnknownMulticast() {
    this._unknownMulticast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownMulticastInput() {
    return this._unknownMulticast;
  }

  // unknown_unicast - computed: true, optional: true, required: false
  private _unknownUnicast?: string; 
  public get unknownUnicast() {
    return this.getStringAttribute('unknown_unicast');
  }
  public set unknownUnicast(value: string) {
    this._unknownUnicast = value;
  }
  public resetUnknownUnicast() {
    this._unknownUnicast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownUnicastInput() {
    return this._unknownUnicast;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      broadcast: cdktf.stringToTerraform(this._broadcast),
      burst_size_level: cdktf.numberToTerraform(this._burstSizeLevel),
      id: cdktf.stringToTerraform(this._id),
      rate: cdktf.numberToTerraform(this._rate),
      unknown_multicast: cdktf.stringToTerraform(this._unknownMulticast),
      unknown_unicast: cdktf.stringToTerraform(this._unknownUnicast),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      broadcast: {
        value: cdktf.stringToHclTerraform(this._broadcast),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      burst_size_level: {
        value: cdktf.numberToHclTerraform(this._burstSizeLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rate: {
        value: cdktf.numberToHclTerraform(this._rate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unknown_multicast: {
        value: cdktf.stringToHclTerraform(this._unknownMulticast),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unknown_unicast: {
        value: cdktf.stringToHclTerraform(this._unknownUnicast),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
