// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_memory_block_debug_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemMemoryBlockDebugOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_memory_block_debug_oper#id DataThunderSystemMemoryBlockDebugOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_memory_block_debug_oper#oper DataThunderSystemMemoryBlockDebugOper#oper}
  */
  readonly oper?: DataThunderSystemMemoryBlockDebugOperOper;
}
export interface DataThunderSystemMemoryBlockDebugOperOperA10Mem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_memory_block_debug_oper#t_alloc_one DataThunderSystemMemoryBlockDebugOper#t_alloc_one}
  */
  readonly tAllocOne?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_memory_block_debug_oper#t_alloc_three DataThunderSystemMemoryBlockDebugOper#t_alloc_three}
  */
  readonly tAllocThree?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_memory_block_debug_oper#t_alloc_two DataThunderSystemMemoryBlockDebugOper#t_alloc_two}
  */
  readonly tAllocTwo?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_memory_block_debug_oper#t_alloc_zero DataThunderSystemMemoryBlockDebugOper#t_alloc_zero}
  */
  readonly tAllocZero?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_memory_block_debug_oper#t_block_debug_alloc_max_over DataThunderSystemMemoryBlockDebugOper#t_block_debug_alloc_max_over}
  */
  readonly tBlockDebugAllocMaxOver?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_memory_block_debug_oper#t_block_debug_alloc_over DataThunderSystemMemoryBlockDebugOper#t_block_debug_alloc_over}
  */
  readonly tBlockDebugAllocOver?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_memory_block_debug_oper#t_block_debug_free_over DataThunderSystemMemoryBlockDebugOper#t_block_debug_free_over}
  */
  readonly tBlockDebugFreeOver?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_memory_block_debug_oper#t_debug_decision_alloc DataThunderSystemMemoryBlockDebugOper#t_debug_decision_alloc}
  */
  readonly tDebugDecisionAlloc?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_memory_block_debug_oper#t_debug_decision_free DataThunderSystemMemoryBlockDebugOper#t_debug_decision_free}
  */
  readonly tDebugDecisionFree?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_memory_block_debug_oper#t_debug_decision_over_size DataThunderSystemMemoryBlockDebugOper#t_debug_decision_over_size}
  */
  readonly tDebugDecisionOverSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_memory_block_debug_oper#t_free_five DataThunderSystemMemoryBlockDebugOper#t_free_five}
  */
  readonly tFreeFive?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_memory_block_debug_oper#t_free_four DataThunderSystemMemoryBlockDebugOper#t_free_four}
  */
  readonly tFreeFour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_memory_block_debug_oper#t_free_seven DataThunderSystemMemoryBlockDebugOper#t_free_seven}
  */
  readonly tFreeSeven?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_memory_block_debug_oper#t_free_six DataThunderSystemMemoryBlockDebugOper#t_free_six}
  */
  readonly tFreeSix?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_memory_block_debug_oper#t_id DataThunderSystemMemoryBlockDebugOper#t_id}
  */
  readonly tId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_memory_block_debug_oper#t_module_name DataThunderSystemMemoryBlockDebugOper#t_module_name}
  */
  readonly tModuleName?: string;
}

export function dataThunderSystemMemoryBlockDebugOperOperA10MemToTerraform(struct?: DataThunderSystemMemoryBlockDebugOperOperA10Mem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    t_alloc_one: cdktf.numberToTerraform(struct!.tAllocOne),
    t_alloc_three: cdktf.numberToTerraform(struct!.tAllocThree),
    t_alloc_two: cdktf.numberToTerraform(struct!.tAllocTwo),
    t_alloc_zero: cdktf.numberToTerraform(struct!.tAllocZero),
    t_block_debug_alloc_max_over: cdktf.numberToTerraform(struct!.tBlockDebugAllocMaxOver),
    t_block_debug_alloc_over: cdktf.numberToTerraform(struct!.tBlockDebugAllocOver),
    t_block_debug_free_over: cdktf.numberToTerraform(struct!.tBlockDebugFreeOver),
    t_debug_decision_alloc: cdktf.numberToTerraform(struct!.tDebugDecisionAlloc),
    t_debug_decision_free: cdktf.numberToTerraform(struct!.tDebugDecisionFree),
    t_debug_decision_over_size: cdktf.numberToTerraform(struct!.tDebugDecisionOverSize),
    t_free_five: cdktf.numberToTerraform(struct!.tFreeFive),
    t_free_four: cdktf.numberToTerraform(struct!.tFreeFour),
    t_free_seven: cdktf.numberToTerraform(struct!.tFreeSeven),
    t_free_six: cdktf.numberToTerraform(struct!.tFreeSix),
    t_id: cdktf.numberToTerraform(struct!.tId),
    t_module_name: cdktf.stringToTerraform(struct!.tModuleName),
  }
}


export function dataThunderSystemMemoryBlockDebugOperOperA10MemToHclTerraform(struct?: DataThunderSystemMemoryBlockDebugOperOperA10Mem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    t_alloc_one: {
      value: cdktf.numberToHclTerraform(struct!.tAllocOne),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    t_alloc_three: {
      value: cdktf.numberToHclTerraform(struct!.tAllocThree),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    t_alloc_two: {
      value: cdktf.numberToHclTerraform(struct!.tAllocTwo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    t_alloc_zero: {
      value: cdktf.numberToHclTerraform(struct!.tAllocZero),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    t_block_debug_alloc_max_over: {
      value: cdktf.numberToHclTerraform(struct!.tBlockDebugAllocMaxOver),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    t_block_debug_alloc_over: {
      value: cdktf.numberToHclTerraform(struct!.tBlockDebugAllocOver),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    t_block_debug_free_over: {
      value: cdktf.numberToHclTerraform(struct!.tBlockDebugFreeOver),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    t_debug_decision_alloc: {
      value: cdktf.numberToHclTerraform(struct!.tDebugDecisionAlloc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    t_debug_decision_free: {
      value: cdktf.numberToHclTerraform(struct!.tDebugDecisionFree),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    t_debug_decision_over_size: {
      value: cdktf.numberToHclTerraform(struct!.tDebugDecisionOverSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    t_free_five: {
      value: cdktf.numberToHclTerraform(struct!.tFreeFive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    t_free_four: {
      value: cdktf.numberToHclTerraform(struct!.tFreeFour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    t_free_seven: {
      value: cdktf.numberToHclTerraform(struct!.tFreeSeven),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    t_free_six: {
      value: cdktf.numberToHclTerraform(struct!.tFreeSix),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    t_id: {
      value: cdktf.numberToHclTerraform(struct!.tId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    t_module_name: {
      value: cdktf.stringToHclTerraform(struct!.tModuleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemMemoryBlockDebugOperOperA10MemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSystemMemoryBlockDebugOperOperA10Mem | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tAllocOne !== undefined) {
      hasAnyValues = true;
      internalValueResult.tAllocOne = this._tAllocOne;
    }
    if (this._tAllocThree !== undefined) {
      hasAnyValues = true;
      internalValueResult.tAllocThree = this._tAllocThree;
    }
    if (this._tAllocTwo !== undefined) {
      hasAnyValues = true;
      internalValueResult.tAllocTwo = this._tAllocTwo;
    }
    if (this._tAllocZero !== undefined) {
      hasAnyValues = true;
      internalValueResult.tAllocZero = this._tAllocZero;
    }
    if (this._tBlockDebugAllocMaxOver !== undefined) {
      hasAnyValues = true;
      internalValueResult.tBlockDebugAllocMaxOver = this._tBlockDebugAllocMaxOver;
    }
    if (this._tBlockDebugAllocOver !== undefined) {
      hasAnyValues = true;
      internalValueResult.tBlockDebugAllocOver = this._tBlockDebugAllocOver;
    }
    if (this._tBlockDebugFreeOver !== undefined) {
      hasAnyValues = true;
      internalValueResult.tBlockDebugFreeOver = this._tBlockDebugFreeOver;
    }
    if (this._tDebugDecisionAlloc !== undefined) {
      hasAnyValues = true;
      internalValueResult.tDebugDecisionAlloc = this._tDebugDecisionAlloc;
    }
    if (this._tDebugDecisionFree !== undefined) {
      hasAnyValues = true;
      internalValueResult.tDebugDecisionFree = this._tDebugDecisionFree;
    }
    if (this._tDebugDecisionOverSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.tDebugDecisionOverSize = this._tDebugDecisionOverSize;
    }
    if (this._tFreeFive !== undefined) {
      hasAnyValues = true;
      internalValueResult.tFreeFive = this._tFreeFive;
    }
    if (this._tFreeFour !== undefined) {
      hasAnyValues = true;
      internalValueResult.tFreeFour = this._tFreeFour;
    }
    if (this._tFreeSeven !== undefined) {
      hasAnyValues = true;
      internalValueResult.tFreeSeven = this._tFreeSeven;
    }
    if (this._tFreeSix !== undefined) {
      hasAnyValues = true;
      internalValueResult.tFreeSix = this._tFreeSix;
    }
    if (this._tId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tId = this._tId;
    }
    if (this._tModuleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tModuleName = this._tModuleName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemMemoryBlockDebugOperOperA10Mem | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tAllocOne = undefined;
      this._tAllocThree = undefined;
      this._tAllocTwo = undefined;
      this._tAllocZero = undefined;
      this._tBlockDebugAllocMaxOver = undefined;
      this._tBlockDebugAllocOver = undefined;
      this._tBlockDebugFreeOver = undefined;
      this._tDebugDecisionAlloc = undefined;
      this._tDebugDecisionFree = undefined;
      this._tDebugDecisionOverSize = undefined;
      this._tFreeFive = undefined;
      this._tFreeFour = undefined;
      this._tFreeSeven = undefined;
      this._tFreeSix = undefined;
      this._tId = undefined;
      this._tModuleName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tAllocOne = value.tAllocOne;
      this._tAllocThree = value.tAllocThree;
      this._tAllocTwo = value.tAllocTwo;
      this._tAllocZero = value.tAllocZero;
      this._tBlockDebugAllocMaxOver = value.tBlockDebugAllocMaxOver;
      this._tBlockDebugAllocOver = value.tBlockDebugAllocOver;
      this._tBlockDebugFreeOver = value.tBlockDebugFreeOver;
      this._tDebugDecisionAlloc = value.tDebugDecisionAlloc;
      this._tDebugDecisionFree = value.tDebugDecisionFree;
      this._tDebugDecisionOverSize = value.tDebugDecisionOverSize;
      this._tFreeFive = value.tFreeFive;
      this._tFreeFour = value.tFreeFour;
      this._tFreeSeven = value.tFreeSeven;
      this._tFreeSix = value.tFreeSix;
      this._tId = value.tId;
      this._tModuleName = value.tModuleName;
    }
  }

  // t_alloc_one - computed: false, optional: true, required: false
  private _tAllocOne?: number; 
  public get tAllocOne() {
    return this.getNumberAttribute('t_alloc_one');
  }
  public set tAllocOne(value: number) {
    this._tAllocOne = value;
  }
  public resetTAllocOne() {
    this._tAllocOne = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tAllocOneInput() {
    return this._tAllocOne;
  }

  // t_alloc_three - computed: false, optional: true, required: false
  private _tAllocThree?: number; 
  public get tAllocThree() {
    return this.getNumberAttribute('t_alloc_three');
  }
  public set tAllocThree(value: number) {
    this._tAllocThree = value;
  }
  public resetTAllocThree() {
    this._tAllocThree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tAllocThreeInput() {
    return this._tAllocThree;
  }

  // t_alloc_two - computed: false, optional: true, required: false
  private _tAllocTwo?: number; 
  public get tAllocTwo() {
    return this.getNumberAttribute('t_alloc_two');
  }
  public set tAllocTwo(value: number) {
    this._tAllocTwo = value;
  }
  public resetTAllocTwo() {
    this._tAllocTwo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tAllocTwoInput() {
    return this._tAllocTwo;
  }

  // t_alloc_zero - computed: false, optional: true, required: false
  private _tAllocZero?: number; 
  public get tAllocZero() {
    return this.getNumberAttribute('t_alloc_zero');
  }
  public set tAllocZero(value: number) {
    this._tAllocZero = value;
  }
  public resetTAllocZero() {
    this._tAllocZero = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tAllocZeroInput() {
    return this._tAllocZero;
  }

  // t_block_debug_alloc_max_over - computed: false, optional: true, required: false
  private _tBlockDebugAllocMaxOver?: number; 
  public get tBlockDebugAllocMaxOver() {
    return this.getNumberAttribute('t_block_debug_alloc_max_over');
  }
  public set tBlockDebugAllocMaxOver(value: number) {
    this._tBlockDebugAllocMaxOver = value;
  }
  public resetTBlockDebugAllocMaxOver() {
    this._tBlockDebugAllocMaxOver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tBlockDebugAllocMaxOverInput() {
    return this._tBlockDebugAllocMaxOver;
  }

  // t_block_debug_alloc_over - computed: false, optional: true, required: false
  private _tBlockDebugAllocOver?: number; 
  public get tBlockDebugAllocOver() {
    return this.getNumberAttribute('t_block_debug_alloc_over');
  }
  public set tBlockDebugAllocOver(value: number) {
    this._tBlockDebugAllocOver = value;
  }
  public resetTBlockDebugAllocOver() {
    this._tBlockDebugAllocOver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tBlockDebugAllocOverInput() {
    return this._tBlockDebugAllocOver;
  }

  // t_block_debug_free_over - computed: false, optional: true, required: false
  private _tBlockDebugFreeOver?: number; 
  public get tBlockDebugFreeOver() {
    return this.getNumberAttribute('t_block_debug_free_over');
  }
  public set tBlockDebugFreeOver(value: number) {
    this._tBlockDebugFreeOver = value;
  }
  public resetTBlockDebugFreeOver() {
    this._tBlockDebugFreeOver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tBlockDebugFreeOverInput() {
    return this._tBlockDebugFreeOver;
  }

  // t_debug_decision_alloc - computed: false, optional: true, required: false
  private _tDebugDecisionAlloc?: number; 
  public get tDebugDecisionAlloc() {
    return this.getNumberAttribute('t_debug_decision_alloc');
  }
  public set tDebugDecisionAlloc(value: number) {
    this._tDebugDecisionAlloc = value;
  }
  public resetTDebugDecisionAlloc() {
    this._tDebugDecisionAlloc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tDebugDecisionAllocInput() {
    return this._tDebugDecisionAlloc;
  }

  // t_debug_decision_free - computed: false, optional: true, required: false
  private _tDebugDecisionFree?: number; 
  public get tDebugDecisionFree() {
    return this.getNumberAttribute('t_debug_decision_free');
  }
  public set tDebugDecisionFree(value: number) {
    this._tDebugDecisionFree = value;
  }
  public resetTDebugDecisionFree() {
    this._tDebugDecisionFree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tDebugDecisionFreeInput() {
    return this._tDebugDecisionFree;
  }

  // t_debug_decision_over_size - computed: false, optional: true, required: false
  private _tDebugDecisionOverSize?: number; 
  public get tDebugDecisionOverSize() {
    return this.getNumberAttribute('t_debug_decision_over_size');
  }
  public set tDebugDecisionOverSize(value: number) {
    this._tDebugDecisionOverSize = value;
  }
  public resetTDebugDecisionOverSize() {
    this._tDebugDecisionOverSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tDebugDecisionOverSizeInput() {
    return this._tDebugDecisionOverSize;
  }

  // t_free_five - computed: false, optional: true, required: false
  private _tFreeFive?: number; 
  public get tFreeFive() {
    return this.getNumberAttribute('t_free_five');
  }
  public set tFreeFive(value: number) {
    this._tFreeFive = value;
  }
  public resetTFreeFive() {
    this._tFreeFive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tFreeFiveInput() {
    return this._tFreeFive;
  }

  // t_free_four - computed: false, optional: true, required: false
  private _tFreeFour?: number; 
  public get tFreeFour() {
    return this.getNumberAttribute('t_free_four');
  }
  public set tFreeFour(value: number) {
    this._tFreeFour = value;
  }
  public resetTFreeFour() {
    this._tFreeFour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tFreeFourInput() {
    return this._tFreeFour;
  }

  // t_free_seven - computed: false, optional: true, required: false
  private _tFreeSeven?: number; 
  public get tFreeSeven() {
    return this.getNumberAttribute('t_free_seven');
  }
  public set tFreeSeven(value: number) {
    this._tFreeSeven = value;
  }
  public resetTFreeSeven() {
    this._tFreeSeven = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tFreeSevenInput() {
    return this._tFreeSeven;
  }

  // t_free_six - computed: false, optional: true, required: false
  private _tFreeSix?: number; 
  public get tFreeSix() {
    return this.getNumberAttribute('t_free_six');
  }
  public set tFreeSix(value: number) {
    this._tFreeSix = value;
  }
  public resetTFreeSix() {
    this._tFreeSix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tFreeSixInput() {
    return this._tFreeSix;
  }

  // t_id - computed: false, optional: true, required: false
  private _tId?: number; 
  public get tId() {
    return this.getNumberAttribute('t_id');
  }
  public set tId(value: number) {
    this._tId = value;
  }
  public resetTId() {
    this._tId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tIdInput() {
    return this._tId;
  }

  // t_module_name - computed: false, optional: true, required: false
  private _tModuleName?: string; 
  public get tModuleName() {
    return this.getStringAttribute('t_module_name');
  }
  public set tModuleName(value: string) {
    this._tModuleName = value;
  }
  public resetTModuleName() {
    this._tModuleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tModuleNameInput() {
    return this._tModuleName;
  }
}

export class DataThunderSystemMemoryBlockDebugOperOperA10MemList extends cdktf.ComplexList {
  public internalValue? : DataThunderSystemMemoryBlockDebugOperOperA10Mem[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSystemMemoryBlockDebugOperOperA10MemOutputReference {
    return new DataThunderSystemMemoryBlockDebugOperOperA10MemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSystemMemoryBlockDebugOperOperAllEverything {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_memory_block_debug_oper#alloc_one DataThunderSystemMemoryBlockDebugOper#alloc_one}
  */
  readonly allocOne?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_memory_block_debug_oper#alloc_three DataThunderSystemMemoryBlockDebugOper#alloc_three}
  */
  readonly allocThree?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_memory_block_debug_oper#alloc_two DataThunderSystemMemoryBlockDebugOper#alloc_two}
  */
  readonly allocTwo?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_memory_block_debug_oper#alloc_zero DataThunderSystemMemoryBlockDebugOper#alloc_zero}
  */
  readonly allocZero?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_memory_block_debug_oper#block_debug_alloc_max_over DataThunderSystemMemoryBlockDebugOper#block_debug_alloc_max_over}
  */
  readonly blockDebugAllocMaxOver?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_memory_block_debug_oper#block_debug_alloc_over DataThunderSystemMemoryBlockDebugOper#block_debug_alloc_over}
  */
  readonly blockDebugAllocOver?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_memory_block_debug_oper#block_debug_free_over DataThunderSystemMemoryBlockDebugOper#block_debug_free_over}
  */
  readonly blockDebugFreeOver?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_memory_block_debug_oper#debug_decision_alloc DataThunderSystemMemoryBlockDebugOper#debug_decision_alloc}
  */
  readonly debugDecisionAlloc?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_memory_block_debug_oper#debug_decision_free DataThunderSystemMemoryBlockDebugOper#debug_decision_free}
  */
  readonly debugDecisionFree?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_memory_block_debug_oper#debug_decision_over_size DataThunderSystemMemoryBlockDebugOper#debug_decision_over_size}
  */
  readonly debugDecisionOverSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_memory_block_debug_oper#free_five DataThunderSystemMemoryBlockDebugOper#free_five}
  */
  readonly freeFive?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_memory_block_debug_oper#free_four DataThunderSystemMemoryBlockDebugOper#free_four}
  */
  readonly freeFour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_memory_block_debug_oper#free_seven DataThunderSystemMemoryBlockDebugOper#free_seven}
  */
  readonly freeSeven?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_memory_block_debug_oper#free_six DataThunderSystemMemoryBlockDebugOper#free_six}
  */
  readonly freeSix?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_memory_block_debug_oper#id1 DataThunderSystemMemoryBlockDebugOper#id1}
  */
  readonly id1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_memory_block_debug_oper#module_name DataThunderSystemMemoryBlockDebugOper#module_name}
  */
  readonly moduleName?: string;
}

export function dataThunderSystemMemoryBlockDebugOperOperAllEverythingToTerraform(struct?: DataThunderSystemMemoryBlockDebugOperOperAllEverything | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alloc_one: cdktf.numberToTerraform(struct!.allocOne),
    alloc_three: cdktf.numberToTerraform(struct!.allocThree),
    alloc_two: cdktf.numberToTerraform(struct!.allocTwo),
    alloc_zero: cdktf.numberToTerraform(struct!.allocZero),
    block_debug_alloc_max_over: cdktf.numberToTerraform(struct!.blockDebugAllocMaxOver),
    block_debug_alloc_over: cdktf.numberToTerraform(struct!.blockDebugAllocOver),
    block_debug_free_over: cdktf.numberToTerraform(struct!.blockDebugFreeOver),
    debug_decision_alloc: cdktf.numberToTerraform(struct!.debugDecisionAlloc),
    debug_decision_free: cdktf.numberToTerraform(struct!.debugDecisionFree),
    debug_decision_over_size: cdktf.numberToTerraform(struct!.debugDecisionOverSize),
    free_five: cdktf.numberToTerraform(struct!.freeFive),
    free_four: cdktf.numberToTerraform(struct!.freeFour),
    free_seven: cdktf.numberToTerraform(struct!.freeSeven),
    free_six: cdktf.numberToTerraform(struct!.freeSix),
    id1: cdktf.numberToTerraform(struct!.id1),
    module_name: cdktf.stringToTerraform(struct!.moduleName),
  }
}


export function dataThunderSystemMemoryBlockDebugOperOperAllEverythingToHclTerraform(struct?: DataThunderSystemMemoryBlockDebugOperOperAllEverything | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alloc_one: {
      value: cdktf.numberToHclTerraform(struct!.allocOne),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alloc_three: {
      value: cdktf.numberToHclTerraform(struct!.allocThree),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alloc_two: {
      value: cdktf.numberToHclTerraform(struct!.allocTwo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alloc_zero: {
      value: cdktf.numberToHclTerraform(struct!.allocZero),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    block_debug_alloc_max_over: {
      value: cdktf.numberToHclTerraform(struct!.blockDebugAllocMaxOver),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    block_debug_alloc_over: {
      value: cdktf.numberToHclTerraform(struct!.blockDebugAllocOver),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    block_debug_free_over: {
      value: cdktf.numberToHclTerraform(struct!.blockDebugFreeOver),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    debug_decision_alloc: {
      value: cdktf.numberToHclTerraform(struct!.debugDecisionAlloc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    debug_decision_free: {
      value: cdktf.numberToHclTerraform(struct!.debugDecisionFree),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    debug_decision_over_size: {
      value: cdktf.numberToHclTerraform(struct!.debugDecisionOverSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    free_five: {
      value: cdktf.numberToHclTerraform(struct!.freeFive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    free_four: {
      value: cdktf.numberToHclTerraform(struct!.freeFour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    free_seven: {
      value: cdktf.numberToHclTerraform(struct!.freeSeven),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    free_six: {
      value: cdktf.numberToHclTerraform(struct!.freeSix),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id1: {
      value: cdktf.numberToHclTerraform(struct!.id1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    module_name: {
      value: cdktf.stringToHclTerraform(struct!.moduleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemMemoryBlockDebugOperOperAllEverythingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSystemMemoryBlockDebugOperOperAllEverything | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocOne !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocOne = this._allocOne;
    }
    if (this._allocThree !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocThree = this._allocThree;
    }
    if (this._allocTwo !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocTwo = this._allocTwo;
    }
    if (this._allocZero !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocZero = this._allocZero;
    }
    if (this._blockDebugAllocMaxOver !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockDebugAllocMaxOver = this._blockDebugAllocMaxOver;
    }
    if (this._blockDebugAllocOver !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockDebugAllocOver = this._blockDebugAllocOver;
    }
    if (this._blockDebugFreeOver !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockDebugFreeOver = this._blockDebugFreeOver;
    }
    if (this._debugDecisionAlloc !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugDecisionAlloc = this._debugDecisionAlloc;
    }
    if (this._debugDecisionFree !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugDecisionFree = this._debugDecisionFree;
    }
    if (this._debugDecisionOverSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugDecisionOverSize = this._debugDecisionOverSize;
    }
    if (this._freeFive !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeFive = this._freeFive;
    }
    if (this._freeFour !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeFour = this._freeFour;
    }
    if (this._freeSeven !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeSeven = this._freeSeven;
    }
    if (this._freeSix !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeSix = this._freeSix;
    }
    if (this._id1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.id1 = this._id1;
    }
    if (this._moduleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.moduleName = this._moduleName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemMemoryBlockDebugOperOperAllEverything | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocOne = undefined;
      this._allocThree = undefined;
      this._allocTwo = undefined;
      this._allocZero = undefined;
      this._blockDebugAllocMaxOver = undefined;
      this._blockDebugAllocOver = undefined;
      this._blockDebugFreeOver = undefined;
      this._debugDecisionAlloc = undefined;
      this._debugDecisionFree = undefined;
      this._debugDecisionOverSize = undefined;
      this._freeFive = undefined;
      this._freeFour = undefined;
      this._freeSeven = undefined;
      this._freeSix = undefined;
      this._id1 = undefined;
      this._moduleName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocOne = value.allocOne;
      this._allocThree = value.allocThree;
      this._allocTwo = value.allocTwo;
      this._allocZero = value.allocZero;
      this._blockDebugAllocMaxOver = value.blockDebugAllocMaxOver;
      this._blockDebugAllocOver = value.blockDebugAllocOver;
      this._blockDebugFreeOver = value.blockDebugFreeOver;
      this._debugDecisionAlloc = value.debugDecisionAlloc;
      this._debugDecisionFree = value.debugDecisionFree;
      this._debugDecisionOverSize = value.debugDecisionOverSize;
      this._freeFive = value.freeFive;
      this._freeFour = value.freeFour;
      this._freeSeven = value.freeSeven;
      this._freeSix = value.freeSix;
      this._id1 = value.id1;
      this._moduleName = value.moduleName;
    }
  }

  // alloc_one - computed: false, optional: true, required: false
  private _allocOne?: number; 
  public get allocOne() {
    return this.getNumberAttribute('alloc_one');
  }
  public set allocOne(value: number) {
    this._allocOne = value;
  }
  public resetAllocOne() {
    this._allocOne = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocOneInput() {
    return this._allocOne;
  }

  // alloc_three - computed: false, optional: true, required: false
  private _allocThree?: number; 
  public get allocThree() {
    return this.getNumberAttribute('alloc_three');
  }
  public set allocThree(value: number) {
    this._allocThree = value;
  }
  public resetAllocThree() {
    this._allocThree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocThreeInput() {
    return this._allocThree;
  }

  // alloc_two - computed: false, optional: true, required: false
  private _allocTwo?: number; 
  public get allocTwo() {
    return this.getNumberAttribute('alloc_two');
  }
  public set allocTwo(value: number) {
    this._allocTwo = value;
  }
  public resetAllocTwo() {
    this._allocTwo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocTwoInput() {
    return this._allocTwo;
  }

  // alloc_zero - computed: false, optional: true, required: false
  private _allocZero?: number; 
  public get allocZero() {
    return this.getNumberAttribute('alloc_zero');
  }
  public set allocZero(value: number) {
    this._allocZero = value;
  }
  public resetAllocZero() {
    this._allocZero = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocZeroInput() {
    return this._allocZero;
  }

  // block_debug_alloc_max_over - computed: false, optional: true, required: false
  private _blockDebugAllocMaxOver?: number; 
  public get blockDebugAllocMaxOver() {
    return this.getNumberAttribute('block_debug_alloc_max_over');
  }
  public set blockDebugAllocMaxOver(value: number) {
    this._blockDebugAllocMaxOver = value;
  }
  public resetBlockDebugAllocMaxOver() {
    this._blockDebugAllocMaxOver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDebugAllocMaxOverInput() {
    return this._blockDebugAllocMaxOver;
  }

  // block_debug_alloc_over - computed: false, optional: true, required: false
  private _blockDebugAllocOver?: number; 
  public get blockDebugAllocOver() {
    return this.getNumberAttribute('block_debug_alloc_over');
  }
  public set blockDebugAllocOver(value: number) {
    this._blockDebugAllocOver = value;
  }
  public resetBlockDebugAllocOver() {
    this._blockDebugAllocOver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDebugAllocOverInput() {
    return this._blockDebugAllocOver;
  }

  // block_debug_free_over - computed: false, optional: true, required: false
  private _blockDebugFreeOver?: number; 
  public get blockDebugFreeOver() {
    return this.getNumberAttribute('block_debug_free_over');
  }
  public set blockDebugFreeOver(value: number) {
    this._blockDebugFreeOver = value;
  }
  public resetBlockDebugFreeOver() {
    this._blockDebugFreeOver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDebugFreeOverInput() {
    return this._blockDebugFreeOver;
  }

  // debug_decision_alloc - computed: false, optional: true, required: false
  private _debugDecisionAlloc?: number; 
  public get debugDecisionAlloc() {
    return this.getNumberAttribute('debug_decision_alloc');
  }
  public set debugDecisionAlloc(value: number) {
    this._debugDecisionAlloc = value;
  }
  public resetDebugDecisionAlloc() {
    this._debugDecisionAlloc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugDecisionAllocInput() {
    return this._debugDecisionAlloc;
  }

  // debug_decision_free - computed: false, optional: true, required: false
  private _debugDecisionFree?: number; 
  public get debugDecisionFree() {
    return this.getNumberAttribute('debug_decision_free');
  }
  public set debugDecisionFree(value: number) {
    this._debugDecisionFree = value;
  }
  public resetDebugDecisionFree() {
    this._debugDecisionFree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugDecisionFreeInput() {
    return this._debugDecisionFree;
  }

  // debug_decision_over_size - computed: false, optional: true, required: false
  private _debugDecisionOverSize?: number; 
  public get debugDecisionOverSize() {
    return this.getNumberAttribute('debug_decision_over_size');
  }
  public set debugDecisionOverSize(value: number) {
    this._debugDecisionOverSize = value;
  }
  public resetDebugDecisionOverSize() {
    this._debugDecisionOverSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugDecisionOverSizeInput() {
    return this._debugDecisionOverSize;
  }

  // free_five - computed: false, optional: true, required: false
  private _freeFive?: number; 
  public get freeFive() {
    return this.getNumberAttribute('free_five');
  }
  public set freeFive(value: number) {
    this._freeFive = value;
  }
  public resetFreeFive() {
    this._freeFive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeFiveInput() {
    return this._freeFive;
  }

  // free_four - computed: false, optional: true, required: false
  private _freeFour?: number; 
  public get freeFour() {
    return this.getNumberAttribute('free_four');
  }
  public set freeFour(value: number) {
    this._freeFour = value;
  }
  public resetFreeFour() {
    this._freeFour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeFourInput() {
    return this._freeFour;
  }

  // free_seven - computed: false, optional: true, required: false
  private _freeSeven?: number; 
  public get freeSeven() {
    return this.getNumberAttribute('free_seven');
  }
  public set freeSeven(value: number) {
    this._freeSeven = value;
  }
  public resetFreeSeven() {
    this._freeSeven = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeSevenInput() {
    return this._freeSeven;
  }

  // free_six - computed: false, optional: true, required: false
  private _freeSix?: number; 
  public get freeSix() {
    return this.getNumberAttribute('free_six');
  }
  public set freeSix(value: number) {
    this._freeSix = value;
  }
  public resetFreeSix() {
    this._freeSix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeSixInput() {
    return this._freeSix;
  }

  // id1 - computed: false, optional: true, required: false
  private _id1?: number; 
  public get id1() {
    return this.getNumberAttribute('id1');
  }
  public set id1(value: number) {
    this._id1 = value;
  }
  public resetId1() {
    this._id1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get id1Input() {
    return this._id1;
  }

  // module_name - computed: false, optional: true, required: false
  private _moduleName?: string; 
  public get moduleName() {
    return this.getStringAttribute('module_name');
  }
  public set moduleName(value: string) {
    this._moduleName = value;
  }
  public resetModuleName() {
    this._moduleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleNameInput() {
    return this._moduleName;
  }
}

export class DataThunderSystemMemoryBlockDebugOperOperAllEverythingList extends cdktf.ComplexList {
  public internalValue? : DataThunderSystemMemoryBlockDebugOperOperAllEverything[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSystemMemoryBlockDebugOperOperAllEverythingOutputReference {
    return new DataThunderSystemMemoryBlockDebugOperOperAllEverythingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSystemMemoryBlockDebugOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_memory_block_debug_oper#a10_mem_id_max DataThunderSystemMemoryBlockDebugOper#a10_mem_id_max}
  */
  readonly a10MemIdMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_memory_block_debug_oper#block_debug_arr_one DataThunderSystemMemoryBlockDebugOper#block_debug_arr_one}
  */
  readonly blockDebugArrOne?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_memory_block_debug_oper#block_debug_arr_three DataThunderSystemMemoryBlockDebugOper#block_debug_arr_three}
  */
  readonly blockDebugArrThree?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_memory_block_debug_oper#block_debug_arr_two DataThunderSystemMemoryBlockDebugOper#block_debug_arr_two}
  */
  readonly blockDebugArrTwo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_memory_block_debug_oper#block_debug_arr_zero DataThunderSystemMemoryBlockDebugOper#block_debug_arr_zero}
  */
  readonly blockDebugArrZero?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_memory_block_debug_oper#thread_id DataThunderSystemMemoryBlockDebugOper#thread_id}
  */
  readonly threadId?: number;
  /**
  * a10_mem block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_memory_block_debug_oper#a10_mem DataThunderSystemMemoryBlockDebugOper#a10_mem}
  */
  readonly a10Mem?: DataThunderSystemMemoryBlockDebugOperOperA10Mem[] | cdktf.IResolvable;
  /**
  * all_everything block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_memory_block_debug_oper#all_everything DataThunderSystemMemoryBlockDebugOper#all_everything}
  */
  readonly allEverything?: DataThunderSystemMemoryBlockDebugOperOperAllEverything[] | cdktf.IResolvable;
}

export function dataThunderSystemMemoryBlockDebugOperOperToTerraform(struct?: DataThunderSystemMemoryBlockDebugOperOperOutputReference | DataThunderSystemMemoryBlockDebugOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    a10_mem_id_max: cdktf.numberToTerraform(struct!.a10MemIdMax),
    block_debug_arr_one: cdktf.stringToTerraform(struct!.blockDebugArrOne),
    block_debug_arr_three: cdktf.stringToTerraform(struct!.blockDebugArrThree),
    block_debug_arr_two: cdktf.stringToTerraform(struct!.blockDebugArrTwo),
    block_debug_arr_zero: cdktf.stringToTerraform(struct!.blockDebugArrZero),
    thread_id: cdktf.numberToTerraform(struct!.threadId),
    a10_mem: cdktf.listMapper(dataThunderSystemMemoryBlockDebugOperOperA10MemToTerraform, true)(struct!.a10Mem),
    all_everything: cdktf.listMapper(dataThunderSystemMemoryBlockDebugOperOperAllEverythingToTerraform, true)(struct!.allEverything),
  }
}


export function dataThunderSystemMemoryBlockDebugOperOperToHclTerraform(struct?: DataThunderSystemMemoryBlockDebugOperOperOutputReference | DataThunderSystemMemoryBlockDebugOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    a10_mem_id_max: {
      value: cdktf.numberToHclTerraform(struct!.a10MemIdMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    block_debug_arr_one: {
      value: cdktf.stringToHclTerraform(struct!.blockDebugArrOne),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_debug_arr_three: {
      value: cdktf.stringToHclTerraform(struct!.blockDebugArrThree),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_debug_arr_two: {
      value: cdktf.stringToHclTerraform(struct!.blockDebugArrTwo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_debug_arr_zero: {
      value: cdktf.stringToHclTerraform(struct!.blockDebugArrZero),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    thread_id: {
      value: cdktf.numberToHclTerraform(struct!.threadId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    a10_mem: {
      value: cdktf.listMapperHcl(dataThunderSystemMemoryBlockDebugOperOperA10MemToHclTerraform, true)(struct!.a10Mem),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSystemMemoryBlockDebugOperOperA10MemList",
    },
    all_everything: {
      value: cdktf.listMapperHcl(dataThunderSystemMemoryBlockDebugOperOperAllEverythingToHclTerraform, true)(struct!.allEverything),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSystemMemoryBlockDebugOperOperAllEverythingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemMemoryBlockDebugOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemMemoryBlockDebugOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._a10MemIdMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.a10MemIdMax = this._a10MemIdMax;
    }
    if (this._blockDebugArrOne !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockDebugArrOne = this._blockDebugArrOne;
    }
    if (this._blockDebugArrThree !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockDebugArrThree = this._blockDebugArrThree;
    }
    if (this._blockDebugArrTwo !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockDebugArrTwo = this._blockDebugArrTwo;
    }
    if (this._blockDebugArrZero !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockDebugArrZero = this._blockDebugArrZero;
    }
    if (this._threadId !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadId = this._threadId;
    }
    if (this._a10Mem?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.a10Mem = this._a10Mem?.internalValue;
    }
    if (this._allEverything?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allEverything = this._allEverything?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemMemoryBlockDebugOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._a10MemIdMax = undefined;
      this._blockDebugArrOne = undefined;
      this._blockDebugArrThree = undefined;
      this._blockDebugArrTwo = undefined;
      this._blockDebugArrZero = undefined;
      this._threadId = undefined;
      this._a10Mem.internalValue = undefined;
      this._allEverything.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._a10MemIdMax = value.a10MemIdMax;
      this._blockDebugArrOne = value.blockDebugArrOne;
      this._blockDebugArrThree = value.blockDebugArrThree;
      this._blockDebugArrTwo = value.blockDebugArrTwo;
      this._blockDebugArrZero = value.blockDebugArrZero;
      this._threadId = value.threadId;
      this._a10Mem.internalValue = value.a10Mem;
      this._allEverything.internalValue = value.allEverything;
    }
  }

  // a10_mem_id_max - computed: false, optional: true, required: false
  private _a10MemIdMax?: number; 
  public get a10MemIdMax() {
    return this.getNumberAttribute('a10_mem_id_max');
  }
  public set a10MemIdMax(value: number) {
    this._a10MemIdMax = value;
  }
  public resetA10MemIdMax() {
    this._a10MemIdMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a10MemIdMaxInput() {
    return this._a10MemIdMax;
  }

  // block_debug_arr_one - computed: false, optional: true, required: false
  private _blockDebugArrOne?: string; 
  public get blockDebugArrOne() {
    return this.getStringAttribute('block_debug_arr_one');
  }
  public set blockDebugArrOne(value: string) {
    this._blockDebugArrOne = value;
  }
  public resetBlockDebugArrOne() {
    this._blockDebugArrOne = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDebugArrOneInput() {
    return this._blockDebugArrOne;
  }

  // block_debug_arr_three - computed: false, optional: true, required: false
  private _blockDebugArrThree?: string; 
  public get blockDebugArrThree() {
    return this.getStringAttribute('block_debug_arr_three');
  }
  public set blockDebugArrThree(value: string) {
    this._blockDebugArrThree = value;
  }
  public resetBlockDebugArrThree() {
    this._blockDebugArrThree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDebugArrThreeInput() {
    return this._blockDebugArrThree;
  }

  // block_debug_arr_two - computed: false, optional: true, required: false
  private _blockDebugArrTwo?: string; 
  public get blockDebugArrTwo() {
    return this.getStringAttribute('block_debug_arr_two');
  }
  public set blockDebugArrTwo(value: string) {
    this._blockDebugArrTwo = value;
  }
  public resetBlockDebugArrTwo() {
    this._blockDebugArrTwo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDebugArrTwoInput() {
    return this._blockDebugArrTwo;
  }

  // block_debug_arr_zero - computed: false, optional: true, required: false
  private _blockDebugArrZero?: string; 
  public get blockDebugArrZero() {
    return this.getStringAttribute('block_debug_arr_zero');
  }
  public set blockDebugArrZero(value: string) {
    this._blockDebugArrZero = value;
  }
  public resetBlockDebugArrZero() {
    this._blockDebugArrZero = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDebugArrZeroInput() {
    return this._blockDebugArrZero;
  }

  // thread_id - computed: false, optional: true, required: false
  private _threadId?: number; 
  public get threadId() {
    return this.getNumberAttribute('thread_id');
  }
  public set threadId(value: number) {
    this._threadId = value;
  }
  public resetThreadId() {
    this._threadId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadIdInput() {
    return this._threadId;
  }

  // a10_mem - computed: false, optional: true, required: false
  private _a10Mem = new DataThunderSystemMemoryBlockDebugOperOperA10MemList(this, "a10_mem", false);
  public get a10Mem() {
    return this._a10Mem;
  }
  public putA10Mem(value: DataThunderSystemMemoryBlockDebugOperOperA10Mem[] | cdktf.IResolvable) {
    this._a10Mem.internalValue = value;
  }
  public resetA10Mem() {
    this._a10Mem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a10MemInput() {
    return this._a10Mem.internalValue;
  }

  // all_everything - computed: false, optional: true, required: false
  private _allEverything = new DataThunderSystemMemoryBlockDebugOperOperAllEverythingList(this, "all_everything", false);
  public get allEverything() {
    return this._allEverything;
  }
  public putAllEverything(value: DataThunderSystemMemoryBlockDebugOperOperAllEverything[] | cdktf.IResolvable) {
    this._allEverything.internalValue = value;
  }
  public resetAllEverything() {
    this._allEverything.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allEverythingInput() {
    return this._allEverything.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_memory_block_debug_oper thunder_system_memory_block_debug_oper}
*/
export class DataThunderSystemMemoryBlockDebugOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_memory_block_debug_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemMemoryBlockDebugOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemMemoryBlockDebugOper to import
  * @param importFromId The id of the existing DataThunderSystemMemoryBlockDebugOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_memory_block_debug_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemMemoryBlockDebugOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_memory_block_debug_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_memory_block_debug_oper thunder_system_memory_block_debug_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemMemoryBlockDebugOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemMemoryBlockDebugOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_memory_block_debug_oper',
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
    this._oper.internalValue = config.oper;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderSystemMemoryBlockDebugOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSystemMemoryBlockDebugOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderSystemMemoryBlockDebugOperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderSystemMemoryBlockDebugOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemMemoryBlockDebugOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
