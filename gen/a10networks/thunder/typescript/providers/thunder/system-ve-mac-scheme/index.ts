// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_ve_mac_scheme
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemVeMacSchemeAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_ve_mac_scheme#id SystemVeMacSchemeA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_ve_mac_scheme#uuid SystemVeMacSchemeA#uuid}
  */
  readonly uuid?: string;
  /**
  * 'hash-based': Hash-based using the VE number; 'round-robin': Round Robin scheme; 'system-mac': Use system MAC address;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_ve_mac_scheme#ve_mac_scheme_val SystemVeMacSchemeA#ve_mac_scheme_val}
  */
  readonly veMacSchemeVal?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_ve_mac_scheme thunder_system_ve_mac_scheme}
*/
export class SystemVeMacSchemeA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_ve_mac_scheme";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemVeMacSchemeA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemVeMacSchemeA to import
  * @param importFromId The id of the existing SystemVeMacSchemeA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_ve_mac_scheme#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemVeMacSchemeA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_ve_mac_scheme", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_ve_mac_scheme thunder_system_ve_mac_scheme} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemVeMacSchemeAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemVeMacSchemeAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_ve_mac_scheme',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._uuid = config.uuid;
    this._veMacSchemeVal = config.veMacSchemeVal;
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

  // ve_mac_scheme_val - computed: false, optional: true, required: false
  private _veMacSchemeVal?: string; 
  public get veMacSchemeVal() {
    return this.getStringAttribute('ve_mac_scheme_val');
  }
  public set veMacSchemeVal(value: string) {
    this._veMacSchemeVal = value;
  }
  public resetVeMacSchemeVal() {
    this._veMacSchemeVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veMacSchemeValInput() {
    return this._veMacSchemeVal;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      ve_mac_scheme_val: cdktf.stringToTerraform(this._veMacSchemeVal),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ve_mac_scheme_val: {
        value: cdktf.stringToHclTerraform(this._veMacSchemeVal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
