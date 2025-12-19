// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_trunk_load_balance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemTrunkLoadBalanceAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_trunk_load_balance#id SystemTrunkLoadBalanceA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Layer-3 Header based load balancing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_trunk_load_balance#use_l3 SystemTrunkLoadBalanceA#use_l3}
  */
  readonly useL3?: number;
  /**
  * Layer-3/4 Header based load balancing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_trunk_load_balance#use_l4 SystemTrunkLoadBalanceA#use_l4}
  */
  readonly useL4?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_trunk_load_balance#uuid SystemTrunkLoadBalanceA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_trunk_load_balance thunder_system_trunk_load_balance}
*/
export class SystemTrunkLoadBalanceA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_trunk_load_balance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemTrunkLoadBalanceA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemTrunkLoadBalanceA to import
  * @param importFromId The id of the existing SystemTrunkLoadBalanceA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_trunk_load_balance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemTrunkLoadBalanceA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_trunk_load_balance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_trunk_load_balance thunder_system_trunk_load_balance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemTrunkLoadBalanceAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemTrunkLoadBalanceAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_trunk_load_balance',
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
    this._useL3 = config.useL3;
    this._useL4 = config.useL4;
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

  // use_l3 - computed: false, optional: true, required: false
  private _useL3?: number; 
  public get useL3() {
    return this.getNumberAttribute('use_l3');
  }
  public set useL3(value: number) {
    this._useL3 = value;
  }
  public resetUseL3() {
    this._useL3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useL3Input() {
    return this._useL3;
  }

  // use_l4 - computed: false, optional: true, required: false
  private _useL4?: number; 
  public get useL4() {
    return this.getNumberAttribute('use_l4');
  }
  public set useL4(value: number) {
    this._useL4 = value;
  }
  public resetUseL4() {
    this._useL4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useL4Input() {
    return this._useL4;
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
      use_l3: cdktf.numberToTerraform(this._useL3),
      use_l4: cdktf.numberToTerraform(this._useL4),
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
      use_l3: {
        value: cdktf.numberToHclTerraform(this._useL3),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_l4: {
        value: cdktf.numberToHclTerraform(this._useL4),
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
