// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_memory_view_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemViewMemoryViewOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_memory_view_oper#id DataThunderSystemViewMemoryViewOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_memory_view_oper#oper DataThunderSystemViewMemoryViewOper#oper}
  */
  readonly oper?: DataThunderSystemViewMemoryViewOperOper;
}
export interface DataThunderSystemViewMemoryViewOperOperAflexMemory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_memory_view_oper#allocated DataThunderSystemViewMemoryViewOper#allocated}
  */
  readonly allocated?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_memory_view_oper#max DataThunderSystemViewMemoryViewOper#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_memory_view_oper#object_size DataThunderSystemViewMemoryViewOper#object_size}
  */
  readonly objectSize?: number;
}

export function dataThunderSystemViewMemoryViewOperOperAflexMemoryToTerraform(struct?: DataThunderSystemViewMemoryViewOperOperAflexMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocated: cdktf.numberToTerraform(struct!.allocated),
    max: cdktf.numberToTerraform(struct!.max),
    object_size: cdktf.numberToTerraform(struct!.objectSize),
  }
}


export function dataThunderSystemViewMemoryViewOperOperAflexMemoryToHclTerraform(struct?: DataThunderSystemViewMemoryViewOperOperAflexMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocated: {
      value: cdktf.numberToHclTerraform(struct!.allocated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_size: {
      value: cdktf.numberToHclTerraform(struct!.objectSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemViewMemoryViewOperOperAflexMemoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSystemViewMemoryViewOperOperAflexMemory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocated !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocated = this._allocated;
    }
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._objectSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectSize = this._objectSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemViewMemoryViewOperOperAflexMemory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocated = undefined;
      this._max = undefined;
      this._objectSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocated = value.allocated;
      this._max = value.max;
      this._objectSize = value.objectSize;
    }
  }

  // allocated - computed: false, optional: true, required: false
  private _allocated?: number; 
  public get allocated() {
    return this.getNumberAttribute('allocated');
  }
  public set allocated(value: number) {
    this._allocated = value;
  }
  public resetAllocated() {
    this._allocated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatedInput() {
    return this._allocated;
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // object_size - computed: false, optional: true, required: false
  private _objectSize?: number; 
  public get objectSize() {
    return this.getNumberAttribute('object_size');
  }
  public set objectSize(value: number) {
    this._objectSize = value;
  }
  public resetObjectSize() {
    this._objectSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectSizeInput() {
    return this._objectSize;
  }
}

export class DataThunderSystemViewMemoryViewOperOperAflexMemoryList extends cdktf.ComplexList {
  public internalValue? : DataThunderSystemViewMemoryViewOperOperAflexMemory[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSystemViewMemoryViewOperOperAflexMemoryOutputReference {
    return new DataThunderSystemViewMemoryViewOperOperAflexMemoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSystemViewMemoryViewOperOperN2Memory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_memory_view_oper#allocated DataThunderSystemViewMemoryViewOper#allocated}
  */
  readonly allocated?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_memory_view_oper#max DataThunderSystemViewMemoryViewOper#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_memory_view_oper#object_size DataThunderSystemViewMemoryViewOper#object_size}
  */
  readonly objectSize?: number;
}

export function dataThunderSystemViewMemoryViewOperOperN2MemoryToTerraform(struct?: DataThunderSystemViewMemoryViewOperOperN2Memory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocated: cdktf.numberToTerraform(struct!.allocated),
    max: cdktf.numberToTerraform(struct!.max),
    object_size: cdktf.numberToTerraform(struct!.objectSize),
  }
}


export function dataThunderSystemViewMemoryViewOperOperN2MemoryToHclTerraform(struct?: DataThunderSystemViewMemoryViewOperOperN2Memory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocated: {
      value: cdktf.numberToHclTerraform(struct!.allocated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_size: {
      value: cdktf.numberToHclTerraform(struct!.objectSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemViewMemoryViewOperOperN2MemoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSystemViewMemoryViewOperOperN2Memory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocated !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocated = this._allocated;
    }
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._objectSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectSize = this._objectSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemViewMemoryViewOperOperN2Memory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocated = undefined;
      this._max = undefined;
      this._objectSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocated = value.allocated;
      this._max = value.max;
      this._objectSize = value.objectSize;
    }
  }

  // allocated - computed: false, optional: true, required: false
  private _allocated?: number; 
  public get allocated() {
    return this.getNumberAttribute('allocated');
  }
  public set allocated(value: number) {
    this._allocated = value;
  }
  public resetAllocated() {
    this._allocated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatedInput() {
    return this._allocated;
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // object_size - computed: false, optional: true, required: false
  private _objectSize?: number; 
  public get objectSize() {
    return this.getNumberAttribute('object_size');
  }
  public set objectSize(value: number) {
    this._objectSize = value;
  }
  public resetObjectSize() {
    this._objectSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectSizeInput() {
    return this._objectSize;
  }
}

export class DataThunderSystemViewMemoryViewOperOperN2MemoryList extends cdktf.ComplexList {
  public internalValue? : DataThunderSystemViewMemoryViewOperOperN2Memory[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSystemViewMemoryViewOperOperN2MemoryOutputReference {
    return new DataThunderSystemViewMemoryViewOperOperN2MemoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSystemViewMemoryViewOperOperSslMemory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_memory_view_oper#allocated DataThunderSystemViewMemoryViewOper#allocated}
  */
  readonly allocated?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_memory_view_oper#max DataThunderSystemViewMemoryViewOper#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_memory_view_oper#object_size DataThunderSystemViewMemoryViewOper#object_size}
  */
  readonly objectSize?: number;
}

export function dataThunderSystemViewMemoryViewOperOperSslMemoryToTerraform(struct?: DataThunderSystemViewMemoryViewOperOperSslMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocated: cdktf.numberToTerraform(struct!.allocated),
    max: cdktf.numberToTerraform(struct!.max),
    object_size: cdktf.numberToTerraform(struct!.objectSize),
  }
}


export function dataThunderSystemViewMemoryViewOperOperSslMemoryToHclTerraform(struct?: DataThunderSystemViewMemoryViewOperOperSslMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocated: {
      value: cdktf.numberToHclTerraform(struct!.allocated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_size: {
      value: cdktf.numberToHclTerraform(struct!.objectSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemViewMemoryViewOperOperSslMemoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSystemViewMemoryViewOperOperSslMemory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocated !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocated = this._allocated;
    }
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._objectSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectSize = this._objectSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemViewMemoryViewOperOperSslMemory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocated = undefined;
      this._max = undefined;
      this._objectSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocated = value.allocated;
      this._max = value.max;
      this._objectSize = value.objectSize;
    }
  }

  // allocated - computed: false, optional: true, required: false
  private _allocated?: number; 
  public get allocated() {
    return this.getNumberAttribute('allocated');
  }
  public set allocated(value: number) {
    this._allocated = value;
  }
  public resetAllocated() {
    this._allocated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatedInput() {
    return this._allocated;
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // object_size - computed: false, optional: true, required: false
  private _objectSize?: number; 
  public get objectSize() {
    return this.getNumberAttribute('object_size');
  }
  public set objectSize(value: number) {
    this._objectSize = value;
  }
  public resetObjectSize() {
    this._objectSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectSizeInput() {
    return this._objectSize;
  }
}

export class DataThunderSystemViewMemoryViewOperOperSslMemoryList extends cdktf.ComplexList {
  public internalValue? : DataThunderSystemViewMemoryViewOperOperSslMemory[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSystemViewMemoryViewOperOperSslMemoryOutputReference {
    return new DataThunderSystemViewMemoryViewOperOperSslMemoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSystemViewMemoryViewOperOperSystemMemory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_memory_view_oper#allocated DataThunderSystemViewMemoryViewOper#allocated}
  */
  readonly allocated?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_memory_view_oper#max DataThunderSystemViewMemoryViewOper#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_memory_view_oper#object_size DataThunderSystemViewMemoryViewOper#object_size}
  */
  readonly objectSize?: number;
}

export function dataThunderSystemViewMemoryViewOperOperSystemMemoryToTerraform(struct?: DataThunderSystemViewMemoryViewOperOperSystemMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocated: cdktf.numberToTerraform(struct!.allocated),
    max: cdktf.numberToTerraform(struct!.max),
    object_size: cdktf.numberToTerraform(struct!.objectSize),
  }
}


export function dataThunderSystemViewMemoryViewOperOperSystemMemoryToHclTerraform(struct?: DataThunderSystemViewMemoryViewOperOperSystemMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocated: {
      value: cdktf.numberToHclTerraform(struct!.allocated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_size: {
      value: cdktf.numberToHclTerraform(struct!.objectSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemViewMemoryViewOperOperSystemMemoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSystemViewMemoryViewOperOperSystemMemory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocated !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocated = this._allocated;
    }
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._objectSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectSize = this._objectSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemViewMemoryViewOperOperSystemMemory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocated = undefined;
      this._max = undefined;
      this._objectSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocated = value.allocated;
      this._max = value.max;
      this._objectSize = value.objectSize;
    }
  }

  // allocated - computed: false, optional: true, required: false
  private _allocated?: number; 
  public get allocated() {
    return this.getNumberAttribute('allocated');
  }
  public set allocated(value: number) {
    this._allocated = value;
  }
  public resetAllocated() {
    this._allocated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatedInput() {
    return this._allocated;
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // object_size - computed: false, optional: true, required: false
  private _objectSize?: number; 
  public get objectSize() {
    return this.getNumberAttribute('object_size');
  }
  public set objectSize(value: number) {
    this._objectSize = value;
  }
  public resetObjectSize() {
    this._objectSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectSizeInput() {
    return this._objectSize;
  }
}

export class DataThunderSystemViewMemoryViewOperOperSystemMemoryList extends cdktf.ComplexList {
  public internalValue? : DataThunderSystemViewMemoryViewOperOperSystemMemory[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSystemViewMemoryViewOperOperSystemMemoryOutputReference {
    return new DataThunderSystemViewMemoryViewOperOperSystemMemoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSystemViewMemoryViewOperOperTcpMemory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_memory_view_oper#allocated DataThunderSystemViewMemoryViewOper#allocated}
  */
  readonly allocated?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_memory_view_oper#max DataThunderSystemViewMemoryViewOper#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_memory_view_oper#object_size DataThunderSystemViewMemoryViewOper#object_size}
  */
  readonly objectSize?: number;
}

export function dataThunderSystemViewMemoryViewOperOperTcpMemoryToTerraform(struct?: DataThunderSystemViewMemoryViewOperOperTcpMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocated: cdktf.numberToTerraform(struct!.allocated),
    max: cdktf.numberToTerraform(struct!.max),
    object_size: cdktf.numberToTerraform(struct!.objectSize),
  }
}


export function dataThunderSystemViewMemoryViewOperOperTcpMemoryToHclTerraform(struct?: DataThunderSystemViewMemoryViewOperOperTcpMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocated: {
      value: cdktf.numberToHclTerraform(struct!.allocated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_size: {
      value: cdktf.numberToHclTerraform(struct!.objectSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemViewMemoryViewOperOperTcpMemoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSystemViewMemoryViewOperOperTcpMemory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocated !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocated = this._allocated;
    }
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._objectSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectSize = this._objectSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemViewMemoryViewOperOperTcpMemory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocated = undefined;
      this._max = undefined;
      this._objectSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocated = value.allocated;
      this._max = value.max;
      this._objectSize = value.objectSize;
    }
  }

  // allocated - computed: false, optional: true, required: false
  private _allocated?: number; 
  public get allocated() {
    return this.getNumberAttribute('allocated');
  }
  public set allocated(value: number) {
    this._allocated = value;
  }
  public resetAllocated() {
    this._allocated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatedInput() {
    return this._allocated;
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // object_size - computed: false, optional: true, required: false
  private _objectSize?: number; 
  public get objectSize() {
    return this.getNumberAttribute('object_size');
  }
  public set objectSize(value: number) {
    this._objectSize = value;
  }
  public resetObjectSize() {
    this._objectSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectSizeInput() {
    return this._objectSize;
  }
}

export class DataThunderSystemViewMemoryViewOperOperTcpMemoryList extends cdktf.ComplexList {
  public internalValue? : DataThunderSystemViewMemoryViewOperOperTcpMemory[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSystemViewMemoryViewOperOperTcpMemoryOutputReference {
    return new DataThunderSystemViewMemoryViewOperOperTcpMemoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSystemViewMemoryViewOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_memory_view_oper#aflex_memory_counts DataThunderSystemViewMemoryViewOper#aflex_memory_counts}
  */
  readonly aflexMemoryCounts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_memory_view_oper#buffers DataThunderSystemViewMemoryViewOper#buffers}
  */
  readonly buffers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_memory_view_oper#cached DataThunderSystemViewMemoryViewOper#cached}
  */
  readonly cached?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_memory_view_oper#free DataThunderSystemViewMemoryViewOper#free}
  */
  readonly free?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_memory_view_oper#n2_memory_counts DataThunderSystemViewMemoryViewOper#n2_memory_counts}
  */
  readonly n2MemoryCounts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_memory_view_oper#shared DataThunderSystemViewMemoryViewOper#shared}
  */
  readonly shared?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_memory_view_oper#ssl_memory_counts DataThunderSystemViewMemoryViewOper#ssl_memory_counts}
  */
  readonly sslMemoryCounts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_memory_view_oper#system_memory_counts DataThunderSystemViewMemoryViewOper#system_memory_counts}
  */
  readonly systemMemoryCounts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_memory_view_oper#tcp_memory_counts DataThunderSystemViewMemoryViewOper#tcp_memory_counts}
  */
  readonly tcpMemoryCounts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_memory_view_oper#total DataThunderSystemViewMemoryViewOper#total}
  */
  readonly total?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_memory_view_oper#usage DataThunderSystemViewMemoryViewOper#usage}
  */
  readonly usage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_memory_view_oper#used DataThunderSystemViewMemoryViewOper#used}
  */
  readonly used?: number;
  /**
  * aflex_memory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_memory_view_oper#aflex_memory DataThunderSystemViewMemoryViewOper#aflex_memory}
  */
  readonly aflexMemory?: DataThunderSystemViewMemoryViewOperOperAflexMemory[] | cdktf.IResolvable;
  /**
  * n2_memory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_memory_view_oper#n2_memory DataThunderSystemViewMemoryViewOper#n2_memory}
  */
  readonly n2Memory?: DataThunderSystemViewMemoryViewOperOperN2Memory[] | cdktf.IResolvable;
  /**
  * ssl_memory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_memory_view_oper#ssl_memory DataThunderSystemViewMemoryViewOper#ssl_memory}
  */
  readonly sslMemory?: DataThunderSystemViewMemoryViewOperOperSslMemory[] | cdktf.IResolvable;
  /**
  * system_memory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_memory_view_oper#system_memory DataThunderSystemViewMemoryViewOper#system_memory}
  */
  readonly systemMemory?: DataThunderSystemViewMemoryViewOperOperSystemMemory[] | cdktf.IResolvable;
  /**
  * tcp_memory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_memory_view_oper#tcp_memory DataThunderSystemViewMemoryViewOper#tcp_memory}
  */
  readonly tcpMemory?: DataThunderSystemViewMemoryViewOperOperTcpMemory[] | cdktf.IResolvable;
}

export function dataThunderSystemViewMemoryViewOperOperToTerraform(struct?: DataThunderSystemViewMemoryViewOperOperOutputReference | DataThunderSystemViewMemoryViewOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aflex_memory_counts: cdktf.numberToTerraform(struct!.aflexMemoryCounts),
    buffers: cdktf.numberToTerraform(struct!.buffers),
    cached: cdktf.numberToTerraform(struct!.cached),
    free: cdktf.numberToTerraform(struct!.free),
    n2_memory_counts: cdktf.numberToTerraform(struct!.n2MemoryCounts),
    shared: cdktf.numberToTerraform(struct!.shared),
    ssl_memory_counts: cdktf.numberToTerraform(struct!.sslMemoryCounts),
    system_memory_counts: cdktf.numberToTerraform(struct!.systemMemoryCounts),
    tcp_memory_counts: cdktf.numberToTerraform(struct!.tcpMemoryCounts),
    total: cdktf.numberToTerraform(struct!.total),
    usage: cdktf.stringToTerraform(struct!.usage),
    used: cdktf.numberToTerraform(struct!.used),
    aflex_memory: cdktf.listMapper(dataThunderSystemViewMemoryViewOperOperAflexMemoryToTerraform, true)(struct!.aflexMemory),
    n2_memory: cdktf.listMapper(dataThunderSystemViewMemoryViewOperOperN2MemoryToTerraform, true)(struct!.n2Memory),
    ssl_memory: cdktf.listMapper(dataThunderSystemViewMemoryViewOperOperSslMemoryToTerraform, true)(struct!.sslMemory),
    system_memory: cdktf.listMapper(dataThunderSystemViewMemoryViewOperOperSystemMemoryToTerraform, true)(struct!.systemMemory),
    tcp_memory: cdktf.listMapper(dataThunderSystemViewMemoryViewOperOperTcpMemoryToTerraform, true)(struct!.tcpMemory),
  }
}


export function dataThunderSystemViewMemoryViewOperOperToHclTerraform(struct?: DataThunderSystemViewMemoryViewOperOperOutputReference | DataThunderSystemViewMemoryViewOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aflex_memory_counts: {
      value: cdktf.numberToHclTerraform(struct!.aflexMemoryCounts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buffers: {
      value: cdktf.numberToHclTerraform(struct!.buffers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cached: {
      value: cdktf.numberToHclTerraform(struct!.cached),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    free: {
      value: cdktf.numberToHclTerraform(struct!.free),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    n2_memory_counts: {
      value: cdktf.numberToHclTerraform(struct!.n2MemoryCounts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shared: {
      value: cdktf.numberToHclTerraform(struct!.shared),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_memory_counts: {
      value: cdktf.numberToHclTerraform(struct!.sslMemoryCounts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    system_memory_counts: {
      value: cdktf.numberToHclTerraform(struct!.systemMemoryCounts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_memory_counts: {
      value: cdktf.numberToHclTerraform(struct!.tcpMemoryCounts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total: {
      value: cdktf.numberToHclTerraform(struct!.total),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    usage: {
      value: cdktf.stringToHclTerraform(struct!.usage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    used: {
      value: cdktf.numberToHclTerraform(struct!.used),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    aflex_memory: {
      value: cdktf.listMapperHcl(dataThunderSystemViewMemoryViewOperOperAflexMemoryToHclTerraform, true)(struct!.aflexMemory),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSystemViewMemoryViewOperOperAflexMemoryList",
    },
    n2_memory: {
      value: cdktf.listMapperHcl(dataThunderSystemViewMemoryViewOperOperN2MemoryToHclTerraform, true)(struct!.n2Memory),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSystemViewMemoryViewOperOperN2MemoryList",
    },
    ssl_memory: {
      value: cdktf.listMapperHcl(dataThunderSystemViewMemoryViewOperOperSslMemoryToHclTerraform, true)(struct!.sslMemory),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSystemViewMemoryViewOperOperSslMemoryList",
    },
    system_memory: {
      value: cdktf.listMapperHcl(dataThunderSystemViewMemoryViewOperOperSystemMemoryToHclTerraform, true)(struct!.systemMemory),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSystemViewMemoryViewOperOperSystemMemoryList",
    },
    tcp_memory: {
      value: cdktf.listMapperHcl(dataThunderSystemViewMemoryViewOperOperTcpMemoryToHclTerraform, true)(struct!.tcpMemory),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSystemViewMemoryViewOperOperTcpMemoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemViewMemoryViewOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemViewMemoryViewOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aflexMemoryCounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.aflexMemoryCounts = this._aflexMemoryCounts;
    }
    if (this._buffers !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffers = this._buffers;
    }
    if (this._cached !== undefined) {
      hasAnyValues = true;
      internalValueResult.cached = this._cached;
    }
    if (this._free !== undefined) {
      hasAnyValues = true;
      internalValueResult.free = this._free;
    }
    if (this._n2MemoryCounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.n2MemoryCounts = this._n2MemoryCounts;
    }
    if (this._shared !== undefined) {
      hasAnyValues = true;
      internalValueResult.shared = this._shared;
    }
    if (this._sslMemoryCounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslMemoryCounts = this._sslMemoryCounts;
    }
    if (this._systemMemoryCounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemMemoryCounts = this._systemMemoryCounts;
    }
    if (this._tcpMemoryCounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpMemoryCounts = this._tcpMemoryCounts;
    }
    if (this._total !== undefined) {
      hasAnyValues = true;
      internalValueResult.total = this._total;
    }
    if (this._usage !== undefined) {
      hasAnyValues = true;
      internalValueResult.usage = this._usage;
    }
    if (this._used !== undefined) {
      hasAnyValues = true;
      internalValueResult.used = this._used;
    }
    if (this._aflexMemory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aflexMemory = this._aflexMemory?.internalValue;
    }
    if (this._n2Memory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.n2Memory = this._n2Memory?.internalValue;
    }
    if (this._sslMemory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslMemory = this._sslMemory?.internalValue;
    }
    if (this._systemMemory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemMemory = this._systemMemory?.internalValue;
    }
    if (this._tcpMemory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpMemory = this._tcpMemory?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemViewMemoryViewOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aflexMemoryCounts = undefined;
      this._buffers = undefined;
      this._cached = undefined;
      this._free = undefined;
      this._n2MemoryCounts = undefined;
      this._shared = undefined;
      this._sslMemoryCounts = undefined;
      this._systemMemoryCounts = undefined;
      this._tcpMemoryCounts = undefined;
      this._total = undefined;
      this._usage = undefined;
      this._used = undefined;
      this._aflexMemory.internalValue = undefined;
      this._n2Memory.internalValue = undefined;
      this._sslMemory.internalValue = undefined;
      this._systemMemory.internalValue = undefined;
      this._tcpMemory.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aflexMemoryCounts = value.aflexMemoryCounts;
      this._buffers = value.buffers;
      this._cached = value.cached;
      this._free = value.free;
      this._n2MemoryCounts = value.n2MemoryCounts;
      this._shared = value.shared;
      this._sslMemoryCounts = value.sslMemoryCounts;
      this._systemMemoryCounts = value.systemMemoryCounts;
      this._tcpMemoryCounts = value.tcpMemoryCounts;
      this._total = value.total;
      this._usage = value.usage;
      this._used = value.used;
      this._aflexMemory.internalValue = value.aflexMemory;
      this._n2Memory.internalValue = value.n2Memory;
      this._sslMemory.internalValue = value.sslMemory;
      this._systemMemory.internalValue = value.systemMemory;
      this._tcpMemory.internalValue = value.tcpMemory;
    }
  }

  // aflex_memory_counts - computed: false, optional: true, required: false
  private _aflexMemoryCounts?: number; 
  public get aflexMemoryCounts() {
    return this.getNumberAttribute('aflex_memory_counts');
  }
  public set aflexMemoryCounts(value: number) {
    this._aflexMemoryCounts = value;
  }
  public resetAflexMemoryCounts() {
    this._aflexMemoryCounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexMemoryCountsInput() {
    return this._aflexMemoryCounts;
  }

  // buffers - computed: false, optional: true, required: false
  private _buffers?: number; 
  public get buffers() {
    return this.getNumberAttribute('buffers');
  }
  public set buffers(value: number) {
    this._buffers = value;
  }
  public resetBuffers() {
    this._buffers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buffersInput() {
    return this._buffers;
  }

  // cached - computed: false, optional: true, required: false
  private _cached?: number; 
  public get cached() {
    return this.getNumberAttribute('cached');
  }
  public set cached(value: number) {
    this._cached = value;
  }
  public resetCached() {
    this._cached = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachedInput() {
    return this._cached;
  }

  // free - computed: false, optional: true, required: false
  private _free?: number; 
  public get free() {
    return this.getNumberAttribute('free');
  }
  public set free(value: number) {
    this._free = value;
  }
  public resetFree() {
    this._free = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeInput() {
    return this._free;
  }

  // n2_memory_counts - computed: false, optional: true, required: false
  private _n2MemoryCounts?: number; 
  public get n2MemoryCounts() {
    return this.getNumberAttribute('n2_memory_counts');
  }
  public set n2MemoryCounts(value: number) {
    this._n2MemoryCounts = value;
  }
  public resetN2MemoryCounts() {
    this._n2MemoryCounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get n2MemoryCountsInput() {
    return this._n2MemoryCounts;
  }

  // shared - computed: false, optional: true, required: false
  private _shared?: number; 
  public get shared() {
    return this.getNumberAttribute('shared');
  }
  public set shared(value: number) {
    this._shared = value;
  }
  public resetShared() {
    this._shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared;
  }

  // ssl_memory_counts - computed: false, optional: true, required: false
  private _sslMemoryCounts?: number; 
  public get sslMemoryCounts() {
    return this.getNumberAttribute('ssl_memory_counts');
  }
  public set sslMemoryCounts(value: number) {
    this._sslMemoryCounts = value;
  }
  public resetSslMemoryCounts() {
    this._sslMemoryCounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslMemoryCountsInput() {
    return this._sslMemoryCounts;
  }

  // system_memory_counts - computed: false, optional: true, required: false
  private _systemMemoryCounts?: number; 
  public get systemMemoryCounts() {
    return this.getNumberAttribute('system_memory_counts');
  }
  public set systemMemoryCounts(value: number) {
    this._systemMemoryCounts = value;
  }
  public resetSystemMemoryCounts() {
    this._systemMemoryCounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemMemoryCountsInput() {
    return this._systemMemoryCounts;
  }

  // tcp_memory_counts - computed: false, optional: true, required: false
  private _tcpMemoryCounts?: number; 
  public get tcpMemoryCounts() {
    return this.getNumberAttribute('tcp_memory_counts');
  }
  public set tcpMemoryCounts(value: number) {
    this._tcpMemoryCounts = value;
  }
  public resetTcpMemoryCounts() {
    this._tcpMemoryCounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpMemoryCountsInput() {
    return this._tcpMemoryCounts;
  }

  // total - computed: false, optional: true, required: false
  private _total?: number; 
  public get total() {
    return this.getNumberAttribute('total');
  }
  public set total(value: number) {
    this._total = value;
  }
  public resetTotal() {
    this._total = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalInput() {
    return this._total;
  }

  // usage - computed: false, optional: true, required: false
  private _usage?: string; 
  public get usage() {
    return this.getStringAttribute('usage');
  }
  public set usage(value: string) {
    this._usage = value;
  }
  public resetUsage() {
    this._usage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageInput() {
    return this._usage;
  }

  // used - computed: false, optional: true, required: false
  private _used?: number; 
  public get used() {
    return this.getNumberAttribute('used');
  }
  public set used(value: number) {
    this._used = value;
  }
  public resetUsed() {
    this._used = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usedInput() {
    return this._used;
  }

  // aflex_memory - computed: false, optional: true, required: false
  private _aflexMemory = new DataThunderSystemViewMemoryViewOperOperAflexMemoryList(this, "aflex_memory", false);
  public get aflexMemory() {
    return this._aflexMemory;
  }
  public putAflexMemory(value: DataThunderSystemViewMemoryViewOperOperAflexMemory[] | cdktf.IResolvable) {
    this._aflexMemory.internalValue = value;
  }
  public resetAflexMemory() {
    this._aflexMemory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexMemoryInput() {
    return this._aflexMemory.internalValue;
  }

  // n2_memory - computed: false, optional: true, required: false
  private _n2Memory = new DataThunderSystemViewMemoryViewOperOperN2MemoryList(this, "n2_memory", false);
  public get n2Memory() {
    return this._n2Memory;
  }
  public putN2Memory(value: DataThunderSystemViewMemoryViewOperOperN2Memory[] | cdktf.IResolvable) {
    this._n2Memory.internalValue = value;
  }
  public resetN2Memory() {
    this._n2Memory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get n2MemoryInput() {
    return this._n2Memory.internalValue;
  }

  // ssl_memory - computed: false, optional: true, required: false
  private _sslMemory = new DataThunderSystemViewMemoryViewOperOperSslMemoryList(this, "ssl_memory", false);
  public get sslMemory() {
    return this._sslMemory;
  }
  public putSslMemory(value: DataThunderSystemViewMemoryViewOperOperSslMemory[] | cdktf.IResolvable) {
    this._sslMemory.internalValue = value;
  }
  public resetSslMemory() {
    this._sslMemory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslMemoryInput() {
    return this._sslMemory.internalValue;
  }

  // system_memory - computed: false, optional: true, required: false
  private _systemMemory = new DataThunderSystemViewMemoryViewOperOperSystemMemoryList(this, "system_memory", false);
  public get systemMemory() {
    return this._systemMemory;
  }
  public putSystemMemory(value: DataThunderSystemViewMemoryViewOperOperSystemMemory[] | cdktf.IResolvable) {
    this._systemMemory.internalValue = value;
  }
  public resetSystemMemory() {
    this._systemMemory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemMemoryInput() {
    return this._systemMemory.internalValue;
  }

  // tcp_memory - computed: false, optional: true, required: false
  private _tcpMemory = new DataThunderSystemViewMemoryViewOperOperTcpMemoryList(this, "tcp_memory", false);
  public get tcpMemory() {
    return this._tcpMemory;
  }
  public putTcpMemory(value: DataThunderSystemViewMemoryViewOperOperTcpMemory[] | cdktf.IResolvable) {
    this._tcpMemory.internalValue = value;
  }
  public resetTcpMemory() {
    this._tcpMemory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpMemoryInput() {
    return this._tcpMemory.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_memory_view_oper thunder_system_view_memory_view_oper}
*/
export class DataThunderSystemViewMemoryViewOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_view_memory_view_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemViewMemoryViewOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemViewMemoryViewOper to import
  * @param importFromId The id of the existing DataThunderSystemViewMemoryViewOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_memory_view_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemViewMemoryViewOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_view_memory_view_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_memory_view_oper thunder_system_view_memory_view_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemViewMemoryViewOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemViewMemoryViewOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_view_memory_view_oper',
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
  private _oper = new DataThunderSystemViewMemoryViewOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSystemViewMemoryViewOperOper) {
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
      oper: dataThunderSystemViewMemoryViewOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSystemViewMemoryViewOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemViewMemoryViewOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
