// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_per_vlan_limit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemPerVlanLimitAConfig extends cdktf.TerraformMetaArguments {
  /**
  * broadcast packets (per second limit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_per_vlan_limit#bcast SystemPerVlanLimitA#bcast}
  */
  readonly bcast?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_per_vlan_limit#id SystemPerVlanLimitA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IP multicast packets (per second limit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_per_vlan_limit#ipmcast SystemPerVlanLimitA#ipmcast}
  */
  readonly ipmcast?: number;
  /**
  * multicast packets (per second limit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_per_vlan_limit#mcast SystemPerVlanLimitA#mcast}
  */
  readonly mcast?: number;
  /**
  * unknown unicast packets (per second limit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_per_vlan_limit#unknown_ucast SystemPerVlanLimitA#unknown_ucast}
  */
  readonly unknownUcast?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_per_vlan_limit#uuid SystemPerVlanLimitA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_per_vlan_limit thunder_system_per_vlan_limit}
*/
export class SystemPerVlanLimitA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_per_vlan_limit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemPerVlanLimitA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemPerVlanLimitA to import
  * @param importFromId The id of the existing SystemPerVlanLimitA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_per_vlan_limit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemPerVlanLimitA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_per_vlan_limit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_per_vlan_limit thunder_system_per_vlan_limit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemPerVlanLimitAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemPerVlanLimitAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_per_vlan_limit',
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
    this._bcast = config.bcast;
    this._id = config.id;
    this._ipmcast = config.ipmcast;
    this._mcast = config.mcast;
    this._unknownUcast = config.unknownUcast;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bcast - computed: false, optional: true, required: false
  private _bcast?: number; 
  public get bcast() {
    return this.getNumberAttribute('bcast');
  }
  public set bcast(value: number) {
    this._bcast = value;
  }
  public resetBcast() {
    this._bcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bcastInput() {
    return this._bcast;
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

  // ipmcast - computed: false, optional: true, required: false
  private _ipmcast?: number; 
  public get ipmcast() {
    return this.getNumberAttribute('ipmcast');
  }
  public set ipmcast(value: number) {
    this._ipmcast = value;
  }
  public resetIpmcast() {
    this._ipmcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipmcastInput() {
    return this._ipmcast;
  }

  // mcast - computed: false, optional: true, required: false
  private _mcast?: number; 
  public get mcast() {
    return this.getNumberAttribute('mcast');
  }
  public set mcast(value: number) {
    this._mcast = value;
  }
  public resetMcast() {
    this._mcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcastInput() {
    return this._mcast;
  }

  // unknown_ucast - computed: false, optional: true, required: false
  private _unknownUcast?: number; 
  public get unknownUcast() {
    return this.getNumberAttribute('unknown_ucast');
  }
  public set unknownUcast(value: number) {
    this._unknownUcast = value;
  }
  public resetUnknownUcast() {
    this._unknownUcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownUcastInput() {
    return this._unknownUcast;
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
      bcast: cdktf.numberToTerraform(this._bcast),
      id: cdktf.stringToTerraform(this._id),
      ipmcast: cdktf.numberToTerraform(this._ipmcast),
      mcast: cdktf.numberToTerraform(this._mcast),
      unknown_ucast: cdktf.numberToTerraform(this._unknownUcast),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bcast: {
        value: cdktf.numberToHclTerraform(this._bcast),
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
      ipmcast: {
        value: cdktf.numberToHclTerraform(this._ipmcast),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mcast: {
        value: cdktf.numberToHclTerraform(this._mcast),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unknown_ucast: {
        value: cdktf.numberToHclTerraform(this._unknownUcast),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
