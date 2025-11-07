// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat64_prefix
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6Nat64PrefixConfig extends cdktf.TerraformMetaArguments {
  /**
  * Class-list to match for NAT64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat64_prefix#class_list Cgnv6Nat64Prefix#class_list}
  */
  readonly classList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat64_prefix#id Cgnv6Nat64Prefix#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * NAT64 Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat64_prefix#prefix_val Cgnv6Nat64Prefix#prefix_val}
  */
  readonly prefixVal: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat64_prefix#uuid Cgnv6Nat64Prefix#uuid}
  */
  readonly uuid?: string;
  /**
  * VRRP-A vrid (Specify ha VRRP-A vrid)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat64_prefix#vrid Cgnv6Nat64Prefix#vrid}
  */
  readonly vrid?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat64_prefix thunder_cgnv6_nat64_prefix}
*/
export class Cgnv6Nat64Prefix extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_nat64_prefix";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6Nat64Prefix resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6Nat64Prefix to import
  * @param importFromId The id of the existing Cgnv6Nat64Prefix that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat64_prefix#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6Nat64Prefix to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_nat64_prefix", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat64_prefix thunder_cgnv6_nat64_prefix} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6Nat64PrefixConfig
  */
  public constructor(scope: Construct, id: string, config: Cgnv6Nat64PrefixConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_nat64_prefix',
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
    this._classList = config.classList;
    this._id = config.id;
    this._prefixVal = config.prefixVal;
    this._uuid = config.uuid;
    this._vrid = config.vrid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // class_list - computed: false, optional: true, required: false
  private _classList?: string; 
  public get classList() {
    return this.getStringAttribute('class_list');
  }
  public set classList(value: string) {
    this._classList = value;
  }
  public resetClassList() {
    this._classList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListInput() {
    return this._classList;
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

  // prefix_val - computed: false, optional: false, required: true
  private _prefixVal?: string; 
  public get prefixVal() {
    return this.getStringAttribute('prefix_val');
  }
  public set prefixVal(value: string) {
    this._prefixVal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixValInput() {
    return this._prefixVal;
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

  // vrid - computed: false, optional: true, required: false
  private _vrid?: number; 
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }
  public set vrid(value: number) {
    this._vrid = value;
  }
  public resetVrid() {
    this._vrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      class_list: cdktf.stringToTerraform(this._classList),
      id: cdktf.stringToTerraform(this._id),
      prefix_val: cdktf.stringToTerraform(this._prefixVal),
      uuid: cdktf.stringToTerraform(this._uuid),
      vrid: cdktf.numberToTerraform(this._vrid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      class_list: {
        value: cdktf.stringToHclTerraform(this._classList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix_val: {
        value: cdktf.stringToHclTerraform(this._prefixVal),
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
      vrid: {
        value: cdktf.numberToHclTerraform(this._vrid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
