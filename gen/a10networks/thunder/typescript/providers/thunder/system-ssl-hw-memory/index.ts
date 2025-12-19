// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ssl_hw_memory
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemSslHwMemoryAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ssl_hw_memory#id SystemSslHwMemoryA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ssl_hw_memory#uuid SystemSslHwMemoryA#uuid}
  */
  readonly uuid?: string;
  /**
  * mem_block_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ssl_hw_memory#mem_block_cfg SystemSslHwMemoryA#mem_block_cfg}
  */
  readonly memBlockCfg?: SystemSslHwMemoryMemBlockCfgA[] | cdktf.IResolvable;
}
export interface SystemSslHwMemoryMemBlockCfgA {
  /**
  * 'ssl_mem': Shared SSL memory; 'ssl_context': Cipher session context memory for SSL engine 1; 'ssl_context_2': Cipher session context memory for SSL engine 2; 'ssl_context_3': Cipher session context memory for SSL engine 3; 'ssl_context_4': Cipher session context memory for SSL engine 4; 'ssl_context_5': Cipher session context memory for SSL engine 5; 'ssl_context_6': Cipher session context memory for SSL engine 6; 'ssl_context_7': Cipher session context memory for SSL engine 7; 'ssl_context_8': Cipher session context memory for SSL engine 8; 'ssl_context_9': Cipher session context memory for SSL engine 9; 'ssl_context_10': Cipher session context memory for SSL engine 10; 'ssl_context_11': Cipher session context memory for SSL engine 11; 'ssl_context_12': Cipher session context memory for SSL engine 12; 'ssl_context_13': Cipher session context memory for SSL engine 13; 'ssl_context_14': Cipher session context memory for SSL engine 14; 'ssl_context_15': Cipher session context memory for SSL engine 15; 'ssl_context_16': Cipher session context memory for SSL engine 16;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ssl_hw_memory#mem_block SystemSslHwMemoryA#mem_block}
  */
  readonly memBlock?: string;
  /**
  * Size of the block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ssl_hw_memory#size SystemSslHwMemoryA#size}
  */
  readonly size?: number;
}

export function systemSslHwMemoryMemBlockCfgAToTerraform(struct?: SystemSslHwMemoryMemBlockCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mem_block: cdktf.stringToTerraform(struct!.memBlock),
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function systemSslHwMemoryMemBlockCfgAToHclTerraform(struct?: SystemSslHwMemoryMemBlockCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mem_block: {
      value: cdktf.stringToHclTerraform(struct!.memBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSslHwMemoryMemBlockCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SystemSslHwMemoryMemBlockCfgA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.memBlock = this._memBlock;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSslHwMemoryMemBlockCfgA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._memBlock = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._memBlock = value.memBlock;
      this._size = value.size;
    }
  }

  // mem_block - computed: false, optional: true, required: false
  private _memBlock?: string; 
  public get memBlock() {
    return this.getStringAttribute('mem_block');
  }
  public set memBlock(value: string) {
    this._memBlock = value;
  }
  public resetMemBlock() {
    this._memBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memBlockInput() {
    return this._memBlock;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}

export class SystemSslHwMemoryMemBlockCfgAList extends cdktf.ComplexList {
  public internalValue? : SystemSslHwMemoryMemBlockCfgA[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SystemSslHwMemoryMemBlockCfgAOutputReference {
    return new SystemSslHwMemoryMemBlockCfgAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ssl_hw_memory thunder_system_ssl_hw_memory}
*/
export class SystemSslHwMemoryA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_ssl_hw_memory";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemSslHwMemoryA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemSslHwMemoryA to import
  * @param importFromId The id of the existing SystemSslHwMemoryA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ssl_hw_memory#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemSslHwMemoryA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_ssl_hw_memory", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ssl_hw_memory thunder_system_ssl_hw_memory} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemSslHwMemoryAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemSslHwMemoryAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_ssl_hw_memory',
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
    this._uuid = config.uuid;
    this._memBlockCfg.internalValue = config.memBlockCfg;
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

  // mem_block_cfg - computed: false, optional: true, required: false
  private _memBlockCfg = new SystemSslHwMemoryMemBlockCfgAList(this, "mem_block_cfg", false);
  public get memBlockCfg() {
    return this._memBlockCfg;
  }
  public putMemBlockCfg(value: SystemSslHwMemoryMemBlockCfgA[] | cdktf.IResolvable) {
    this._memBlockCfg.internalValue = value;
  }
  public resetMemBlockCfg() {
    this._memBlockCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memBlockCfgInput() {
    return this._memBlockCfg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      mem_block_cfg: cdktf.listMapper(systemSslHwMemoryMemBlockCfgAToTerraform, true)(this._memBlockCfg.internalValue),
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
      mem_block_cfg: {
        value: cdktf.listMapperHcl(systemSslHwMemoryMemBlockCfgAToHclTerraform, true)(this._memBlockCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemSslHwMemoryMemBlockCfgAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
