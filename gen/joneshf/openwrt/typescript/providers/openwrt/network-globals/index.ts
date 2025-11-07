// https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/network_globals
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkGlobalsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the section. This name is only used when interacting with UCI directly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/network_globals#id NetworkGlobals#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Use every CPU to handle packet traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/network_globals#packet_steering NetworkGlobals#packet_steering}
  */
  readonly packetSteering?: boolean | cdktf.IResolvable;
  /**
  * IPv6 ULA prefix for this device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/network_globals#ula_prefix NetworkGlobals#ula_prefix}
  */
  readonly ulaPrefix?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/network_globals openwrt_network_globals}
*/
export class NetworkGlobals extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openwrt_network_globals";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkGlobals resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkGlobals to import
  * @param importFromId The id of the existing NetworkGlobals that should be imported. Refer to the {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/network_globals#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkGlobals to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openwrt_network_globals", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/network_globals openwrt_network_globals} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkGlobalsConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkGlobalsConfig) {
    super(scope, id, {
      terraformResourceType: 'openwrt_network_globals',
      terraformGeneratorMetadata: {
        providerName: 'openwrt',
        providerVersion: '0.0.20'
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
    this._packetSteering = config.packetSteering;
    this._ulaPrefix = config.ulaPrefix;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // packet_steering - computed: true, optional: true, required: false
  private _packetSteering?: boolean | cdktf.IResolvable; 
  public get packetSteering() {
    return this.getBooleanAttribute('packet_steering');
  }
  public set packetSteering(value: boolean | cdktf.IResolvable) {
    this._packetSteering = value;
  }
  public resetPacketSteering() {
    this._packetSteering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetSteeringInput() {
    return this._packetSteering;
  }

  // ula_prefix - computed: true, optional: true, required: false
  private _ulaPrefix?: string; 
  public get ulaPrefix() {
    return this.getStringAttribute('ula_prefix');
  }
  public set ulaPrefix(value: string) {
    this._ulaPrefix = value;
  }
  public resetUlaPrefix() {
    this._ulaPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ulaPrefixInput() {
    return this._ulaPrefix;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      packet_steering: cdktf.booleanToTerraform(this._packetSteering),
      ula_prefix: cdktf.stringToTerraform(this._ulaPrefix),
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
      packet_steering: {
        value: cdktf.booleanToHclTerraform(this._packetSteering),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ula_prefix: {
        value: cdktf.stringToHclTerraform(this._ulaPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
