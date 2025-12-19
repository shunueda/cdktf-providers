// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_big_buff_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemBigBuffPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure big I/O buffer pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_big_buff_pool#big_buff_pool SystemBigBuffPool#big_buff_pool}
  */
  readonly bigBuffPool?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_big_buff_pool#id SystemBigBuffPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_big_buff_pool thunder_system_big_buff_pool}
*/
export class SystemBigBuffPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_big_buff_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemBigBuffPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemBigBuffPool to import
  * @param importFromId The id of the existing SystemBigBuffPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_big_buff_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemBigBuffPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_big_buff_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_big_buff_pool thunder_system_big_buff_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemBigBuffPoolConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemBigBuffPoolConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_big_buff_pool',
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
    this._bigBuffPool = config.bigBuffPool;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // big_buff_pool - computed: false, optional: true, required: false
  private _bigBuffPool?: number; 
  public get bigBuffPool() {
    return this.getNumberAttribute('big_buff_pool');
  }
  public set bigBuffPool(value: number) {
    this._bigBuffPool = value;
  }
  public resetBigBuffPool() {
    this._bigBuffPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigBuffPoolInput() {
    return this._bigBuffPool;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      big_buff_pool: cdktf.numberToTerraform(this._bigBuffPool),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      big_buff_pool: {
        value: cdktf.numberToHclTerraform(this._bigBuffPool),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
