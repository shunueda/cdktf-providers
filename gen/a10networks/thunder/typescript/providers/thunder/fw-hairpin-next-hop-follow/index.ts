// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_hairpin_next_hop_follow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FwHairpinNextHopFollowConfig extends cdktf.TerraformMetaArguments {
  /**
  * Disable local hairpin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_hairpin_next_hop_follow#disable_local_hairpin FwHairpinNextHopFollow#disable_local_hairpin}
  */
  readonly disableLocalHairpin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_hairpin_next_hop_follow#id FwHairpinNextHopFollow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IPV4 network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_hairpin_next_hop_follow#ipv4 FwHairpinNextHopFollow#ipv4}
  */
  readonly ipv4?: string;
  /**
  * IPV6 network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_hairpin_next_hop_follow#ipv6 FwHairpinNextHopFollow#ipv6}
  */
  readonly ipv6?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_hairpin_next_hop_follow#uuid FwHairpinNextHopFollow#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_hairpin_next_hop_follow thunder_fw_hairpin_next_hop_follow}
*/
export class FwHairpinNextHopFollow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_fw_hairpin_next_hop_follow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FwHairpinNextHopFollow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FwHairpinNextHopFollow to import
  * @param importFromId The id of the existing FwHairpinNextHopFollow that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_hairpin_next_hop_follow#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FwHairpinNextHopFollow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_fw_hairpin_next_hop_follow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_hairpin_next_hop_follow thunder_fw_hairpin_next_hop_follow} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FwHairpinNextHopFollowConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FwHairpinNextHopFollowConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_fw_hairpin_next_hop_follow',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._disableLocalHairpin = config.disableLocalHairpin;
    this._id = config.id;
    this._ipv4 = config.ipv4;
    this._ipv6 = config.ipv6;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disable_local_hairpin - computed: false, optional: true, required: false
  private _disableLocalHairpin?: number; 
  public get disableLocalHairpin() {
    return this.getNumberAttribute('disable_local_hairpin');
  }
  public set disableLocalHairpin(value: number) {
    this._disableLocalHairpin = value;
  }
  public resetDisableLocalHairpin() {
    this._disableLocalHairpin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableLocalHairpinInput() {
    return this._disableLocalHairpin;
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

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  public resetIpv4() {
    this._ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disable_local_hairpin: cdktf.numberToTerraform(this._disableLocalHairpin),
      id: cdktf.stringToTerraform(this._id),
      ipv4: cdktf.stringToTerraform(this._ipv4),
      ipv6: cdktf.stringToTerraform(this._ipv6),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disable_local_hairpin: {
        value: cdktf.numberToHclTerraform(this._disableLocalHairpin),
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
      ipv4: {
        value: cdktf.stringToHclTerraform(this._ipv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6: {
        value: cdktf.stringToHclTerraform(this._ipv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
