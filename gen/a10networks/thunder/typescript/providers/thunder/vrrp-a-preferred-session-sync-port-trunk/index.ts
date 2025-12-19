// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_preferred_session_sync_port_trunk
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VrrpAPreferredSessionSyncPortTrunkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_preferred_session_sync_port_trunk#id VrrpAPreferredSessionSyncPortTrunk#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Trunk Interface number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_preferred_session_sync_port_trunk#pre_trunk VrrpAPreferredSessionSyncPortTrunk#pre_trunk}
  */
  readonly preTrunk: number;
  /**
  * Interface VLAN (VLAN ID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_preferred_session_sync_port_trunk#pre_vlan VrrpAPreferredSessionSyncPortTrunk#pre_vlan}
  */
  readonly preVlan?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_preferred_session_sync_port_trunk#uuid VrrpAPreferredSessionSyncPortTrunk#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_preferred_session_sync_port_trunk thunder_vrrp_a_preferred_session_sync_port_trunk}
*/
export class VrrpAPreferredSessionSyncPortTrunk extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vrrp_a_preferred_session_sync_port_trunk";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VrrpAPreferredSessionSyncPortTrunk resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VrrpAPreferredSessionSyncPortTrunk to import
  * @param importFromId The id of the existing VrrpAPreferredSessionSyncPortTrunk that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_preferred_session_sync_port_trunk#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VrrpAPreferredSessionSyncPortTrunk to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vrrp_a_preferred_session_sync_port_trunk", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_preferred_session_sync_port_trunk thunder_vrrp_a_preferred_session_sync_port_trunk} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VrrpAPreferredSessionSyncPortTrunkConfig
  */
  public constructor(scope: Construct, id: string, config: VrrpAPreferredSessionSyncPortTrunkConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_vrrp_a_preferred_session_sync_port_trunk',
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
    this._id = config.id;
    this._preTrunk = config.preTrunk;
    this._preVlan = config.preVlan;
    this._uuid = config.uuid;
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

  // pre_trunk - computed: false, optional: false, required: true
  private _preTrunk?: number; 
  public get preTrunk() {
    return this.getNumberAttribute('pre_trunk');
  }
  public set preTrunk(value: number) {
    this._preTrunk = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preTrunkInput() {
    return this._preTrunk;
  }

  // pre_vlan - computed: false, optional: true, required: false
  private _preVlan?: number; 
  public get preVlan() {
    return this.getNumberAttribute('pre_vlan');
  }
  public set preVlan(value: number) {
    this._preVlan = value;
  }
  public resetPreVlan() {
    this._preVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preVlanInput() {
    return this._preVlan;
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
      id: cdktf.stringToTerraform(this._id),
      pre_trunk: cdktf.numberToTerraform(this._preTrunk),
      pre_vlan: cdktf.numberToTerraform(this._preVlan),
      uuid: cdktf.stringToTerraform(this._uuid),
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
      pre_trunk: {
        value: cdktf.numberToHclTerraform(this._preTrunk),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pre_vlan: {
        value: cdktf.numberToHclTerraform(this._preVlan),
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
