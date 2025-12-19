// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rate_limit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RateLimitConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rate_limit#id RateLimit#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Max number of packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rate_limit#maxpktnum RateLimit#maxpktnum}
  */
  readonly maxpktnum?: number;
  /**
  * 'ctrl': The max number of packets that can be sent to kernel in 100ms;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rate_limit#rl_type RateLimit#rl_type}
  */
  readonly rlType?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rate_limit#uuid RateLimit#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rate_limit thunder_rate_limit}
*/
export class RateLimit extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_rate_limit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RateLimit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RateLimit to import
  * @param importFromId The id of the existing RateLimit that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rate_limit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RateLimit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_rate_limit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rate_limit thunder_rate_limit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RateLimitConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RateLimitConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_rate_limit',
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
    this._maxpktnum = config.maxpktnum;
    this._rlType = config.rlType;
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

  // maxpktnum - computed: false, optional: true, required: false
  private _maxpktnum?: number; 
  public get maxpktnum() {
    return this.getNumberAttribute('maxpktnum');
  }
  public set maxpktnum(value: number) {
    this._maxpktnum = value;
  }
  public resetMaxpktnum() {
    this._maxpktnum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxpktnumInput() {
    return this._maxpktnum;
  }

  // rl_type - computed: false, optional: true, required: false
  private _rlType?: string; 
  public get rlType() {
    return this.getStringAttribute('rl_type');
  }
  public set rlType(value: string) {
    this._rlType = value;
  }
  public resetRlType() {
    this._rlType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rlTypeInput() {
    return this._rlType;
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
      maxpktnum: cdktf.numberToTerraform(this._maxpktnum),
      rl_type: cdktf.stringToTerraform(this._rlType),
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
      maxpktnum: {
        value: cdktf.numberToHclTerraform(this._maxpktnum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rl_type: {
        value: cdktf.stringToHclTerraform(this._rlType),
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
