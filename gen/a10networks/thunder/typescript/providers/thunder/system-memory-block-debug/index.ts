// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_memory_block_debug
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemMemoryBlockDebugAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Over size block allocation (Assert memory block over size (default: 65536))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_memory_block_debug#assert_block SystemMemoryBlockDebugA#assert_block}
  */
  readonly assertBlock?: number;
  /**
  * First memory block ascending order (default: 8192) (Memory blocks 32,64,128,256,512,1K,2K,4K,8K,16K,32K,64K)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_memory_block_debug#first_blk SystemMemoryBlockDebugA#first_blk}
  */
  readonly firstBlk?: number;
  /**
  * Fourth memory block (default: 65536) (Memory blocks 32,64,128,256,512,1K,2K,4K,8K,16K,32K,64K)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_memory_block_debug#fourth_blk SystemMemoryBlockDebugA#fourth_blk}
  */
  readonly fourthBlk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_memory_block_debug#id SystemMemoryBlockDebugA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable pktdump Oversize block request packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_memory_block_debug#pktdump_block SystemMemoryBlockDebugA#pktdump_block}
  */
  readonly pktdumpBlock?: number;
  /**
  * Second memory block (default: 16384) (Memory blocks 32,64,128,256,512,1K,2K,4K,8K,16K,32K,64K)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_memory_block_debug#second_blk SystemMemoryBlockDebugA#second_blk}
  */
  readonly secondBlk?: number;
  /**
  * Third memory block (default: 32768) (Memory blocks 32,64,128,256,512,1K,2K,4K,8K,16K,32K,64K)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_memory_block_debug#third_blk SystemMemoryBlockDebugA#third_blk}
  */
  readonly thirdBlk?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_memory_block_debug#uuid SystemMemoryBlockDebugA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_memory_block_debug thunder_system_memory_block_debug}
*/
export class SystemMemoryBlockDebugA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_memory_block_debug";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemMemoryBlockDebugA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemMemoryBlockDebugA to import
  * @param importFromId The id of the existing SystemMemoryBlockDebugA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_memory_block_debug#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemMemoryBlockDebugA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_memory_block_debug", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_memory_block_debug thunder_system_memory_block_debug} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemMemoryBlockDebugAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemMemoryBlockDebugAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_memory_block_debug',
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
    this._assertBlock = config.assertBlock;
    this._firstBlk = config.firstBlk;
    this._fourthBlk = config.fourthBlk;
    this._id = config.id;
    this._pktdumpBlock = config.pktdumpBlock;
    this._secondBlk = config.secondBlk;
    this._thirdBlk = config.thirdBlk;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assert_block - computed: false, optional: true, required: false
  private _assertBlock?: number; 
  public get assertBlock() {
    return this.getNumberAttribute('assert_block');
  }
  public set assertBlock(value: number) {
    this._assertBlock = value;
  }
  public resetAssertBlock() {
    this._assertBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assertBlockInput() {
    return this._assertBlock;
  }

  // first_blk - computed: false, optional: true, required: false
  private _firstBlk?: number; 
  public get firstBlk() {
    return this.getNumberAttribute('first_blk');
  }
  public set firstBlk(value: number) {
    this._firstBlk = value;
  }
  public resetFirstBlk() {
    this._firstBlk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstBlkInput() {
    return this._firstBlk;
  }

  // fourth_blk - computed: false, optional: true, required: false
  private _fourthBlk?: number; 
  public get fourthBlk() {
    return this.getNumberAttribute('fourth_blk');
  }
  public set fourthBlk(value: number) {
    this._fourthBlk = value;
  }
  public resetFourthBlk() {
    this._fourthBlk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fourthBlkInput() {
    return this._fourthBlk;
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

  // pktdump_block - computed: false, optional: true, required: false
  private _pktdumpBlock?: number; 
  public get pktdumpBlock() {
    return this.getNumberAttribute('pktdump_block');
  }
  public set pktdumpBlock(value: number) {
    this._pktdumpBlock = value;
  }
  public resetPktdumpBlock() {
    this._pktdumpBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktdumpBlockInput() {
    return this._pktdumpBlock;
  }

  // second_blk - computed: false, optional: true, required: false
  private _secondBlk?: number; 
  public get secondBlk() {
    return this.getNumberAttribute('second_blk');
  }
  public set secondBlk(value: number) {
    this._secondBlk = value;
  }
  public resetSecondBlk() {
    this._secondBlk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondBlkInput() {
    return this._secondBlk;
  }

  // third_blk - computed: false, optional: true, required: false
  private _thirdBlk?: number; 
  public get thirdBlk() {
    return this.getNumberAttribute('third_blk');
  }
  public set thirdBlk(value: number) {
    this._thirdBlk = value;
  }
  public resetThirdBlk() {
    this._thirdBlk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thirdBlkInput() {
    return this._thirdBlk;
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
      assert_block: cdktf.numberToTerraform(this._assertBlock),
      first_blk: cdktf.numberToTerraform(this._firstBlk),
      fourth_blk: cdktf.numberToTerraform(this._fourthBlk),
      id: cdktf.stringToTerraform(this._id),
      pktdump_block: cdktf.numberToTerraform(this._pktdumpBlock),
      second_blk: cdktf.numberToTerraform(this._secondBlk),
      third_blk: cdktf.numberToTerraform(this._thirdBlk),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assert_block: {
        value: cdktf.numberToHclTerraform(this._assertBlock),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      first_blk: {
        value: cdktf.numberToHclTerraform(this._firstBlk),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fourth_blk: {
        value: cdktf.numberToHclTerraform(this._fourthBlk),
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
      pktdump_block: {
        value: cdktf.numberToHclTerraform(this._pktdumpBlock),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      second_blk: {
        value: cdktf.numberToHclTerraform(this._secondBlk),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      third_blk: {
        value: cdktf.numberToHclTerraform(this._thirdBlk),
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
