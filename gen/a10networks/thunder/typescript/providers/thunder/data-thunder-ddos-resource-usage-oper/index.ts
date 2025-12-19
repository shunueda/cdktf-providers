// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_resource_usage_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosResourceUsageOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_resource_usage_oper#id DataThunderDdosResourceUsageOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_resource_usage_oper#oper DataThunderDdosResourceUsageOper#oper}
  */
  readonly oper?: DataThunderDdosResourceUsageOperOper;
}
export interface DataThunderDdosResourceUsageOperOperDynamicResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_resource_usage_oper#res_alloc DataThunderDdosResourceUsageOper#res_alloc}
  */
  readonly resAlloc?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_resource_usage_oper#res_limit DataThunderDdosResourceUsageOper#res_limit}
  */
  readonly resLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_resource_usage_oper#res_name DataThunderDdosResourceUsageOper#res_name}
  */
  readonly resName?: string;
}

export function dataThunderDdosResourceUsageOperOperDynamicResourcesToTerraform(struct?: DataThunderDdosResourceUsageOperOperDynamicResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    res_alloc: cdktf.numberToTerraform(struct!.resAlloc),
    res_limit: cdktf.numberToTerraform(struct!.resLimit),
    res_name: cdktf.stringToTerraform(struct!.resName),
  }
}


export function dataThunderDdosResourceUsageOperOperDynamicResourcesToHclTerraform(struct?: DataThunderDdosResourceUsageOperOperDynamicResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    res_alloc: {
      value: cdktf.numberToHclTerraform(struct!.resAlloc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    res_limit: {
      value: cdktf.numberToHclTerraform(struct!.resLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    res_name: {
      value: cdktf.stringToHclTerraform(struct!.resName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosResourceUsageOperOperDynamicResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosResourceUsageOperOperDynamicResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resAlloc !== undefined) {
      hasAnyValues = true;
      internalValueResult.resAlloc = this._resAlloc;
    }
    if (this._resLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.resLimit = this._resLimit;
    }
    if (this._resName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resName = this._resName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosResourceUsageOperOperDynamicResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resAlloc = undefined;
      this._resLimit = undefined;
      this._resName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resAlloc = value.resAlloc;
      this._resLimit = value.resLimit;
      this._resName = value.resName;
    }
  }

  // res_alloc - computed: false, optional: true, required: false
  private _resAlloc?: number; 
  public get resAlloc() {
    return this.getNumberAttribute('res_alloc');
  }
  public set resAlloc(value: number) {
    this._resAlloc = value;
  }
  public resetResAlloc() {
    this._resAlloc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resAllocInput() {
    return this._resAlloc;
  }

  // res_limit - computed: false, optional: true, required: false
  private _resLimit?: number; 
  public get resLimit() {
    return this.getNumberAttribute('res_limit');
  }
  public set resLimit(value: number) {
    this._resLimit = value;
  }
  public resetResLimit() {
    this._resLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resLimitInput() {
    return this._resLimit;
  }

  // res_name - computed: false, optional: true, required: false
  private _resName?: string; 
  public get resName() {
    return this.getStringAttribute('res_name');
  }
  public set resName(value: string) {
    this._resName = value;
  }
  public resetResName() {
    this._resName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resNameInput() {
    return this._resName;
  }
}

export class DataThunderDdosResourceUsageOperOperDynamicResourcesList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosResourceUsageOperOperDynamicResources[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosResourceUsageOperOperDynamicResourcesOutputReference {
    return new DataThunderDdosResourceUsageOperOperDynamicResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosResourceUsageOperOperHwResourceLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_resource_usage_oper#res_alloc DataThunderDdosResourceUsageOper#res_alloc}
  */
  readonly resAlloc?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_resource_usage_oper#res_limit DataThunderDdosResourceUsageOper#res_limit}
  */
  readonly resLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_resource_usage_oper#res_name DataThunderDdosResourceUsageOper#res_name}
  */
  readonly resName?: string;
}

export function dataThunderDdosResourceUsageOperOperHwResourceLimitToTerraform(struct?: DataThunderDdosResourceUsageOperOperHwResourceLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    res_alloc: cdktf.numberToTerraform(struct!.resAlloc),
    res_limit: cdktf.numberToTerraform(struct!.resLimit),
    res_name: cdktf.stringToTerraform(struct!.resName),
  }
}


export function dataThunderDdosResourceUsageOperOperHwResourceLimitToHclTerraform(struct?: DataThunderDdosResourceUsageOperOperHwResourceLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    res_alloc: {
      value: cdktf.numberToHclTerraform(struct!.resAlloc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    res_limit: {
      value: cdktf.numberToHclTerraform(struct!.resLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    res_name: {
      value: cdktf.stringToHclTerraform(struct!.resName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosResourceUsageOperOperHwResourceLimitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosResourceUsageOperOperHwResourceLimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resAlloc !== undefined) {
      hasAnyValues = true;
      internalValueResult.resAlloc = this._resAlloc;
    }
    if (this._resLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.resLimit = this._resLimit;
    }
    if (this._resName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resName = this._resName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosResourceUsageOperOperHwResourceLimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resAlloc = undefined;
      this._resLimit = undefined;
      this._resName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resAlloc = value.resAlloc;
      this._resLimit = value.resLimit;
      this._resName = value.resName;
    }
  }

  // res_alloc - computed: false, optional: true, required: false
  private _resAlloc?: number; 
  public get resAlloc() {
    return this.getNumberAttribute('res_alloc');
  }
  public set resAlloc(value: number) {
    this._resAlloc = value;
  }
  public resetResAlloc() {
    this._resAlloc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resAllocInput() {
    return this._resAlloc;
  }

  // res_limit - computed: false, optional: true, required: false
  private _resLimit?: number; 
  public get resLimit() {
    return this.getNumberAttribute('res_limit');
  }
  public set resLimit(value: number) {
    this._resLimit = value;
  }
  public resetResLimit() {
    this._resLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resLimitInput() {
    return this._resLimit;
  }

  // res_name - computed: false, optional: true, required: false
  private _resName?: string; 
  public get resName() {
    return this.getStringAttribute('res_name');
  }
  public set resName(value: string) {
    this._resName = value;
  }
  public resetResName() {
    this._resName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resNameInput() {
    return this._resName;
  }
}

export class DataThunderDdosResourceUsageOperOperHwResourceLimitList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosResourceUsageOperOperHwResourceLimit[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosResourceUsageOperOperHwResourceLimitOutputReference {
    return new DataThunderDdosResourceUsageOperOperHwResourceLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosResourceUsageOperOperPerResourceLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_resource_usage_oper#res_alloc DataThunderDdosResourceUsageOper#res_alloc}
  */
  readonly resAlloc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_resource_usage_oper#res_limit DataThunderDdosResourceUsageOper#res_limit}
  */
  readonly resLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_resource_usage_oper#res_name DataThunderDdosResourceUsageOper#res_name}
  */
  readonly resName?: string;
}

export function dataThunderDdosResourceUsageOperOperPerResourceLimitToTerraform(struct?: DataThunderDdosResourceUsageOperOperPerResourceLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    res_alloc: cdktf.stringToTerraform(struct!.resAlloc),
    res_limit: cdktf.numberToTerraform(struct!.resLimit),
    res_name: cdktf.stringToTerraform(struct!.resName),
  }
}


export function dataThunderDdosResourceUsageOperOperPerResourceLimitToHclTerraform(struct?: DataThunderDdosResourceUsageOperOperPerResourceLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    res_alloc: {
      value: cdktf.stringToHclTerraform(struct!.resAlloc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    res_limit: {
      value: cdktf.numberToHclTerraform(struct!.resLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    res_name: {
      value: cdktf.stringToHclTerraform(struct!.resName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosResourceUsageOperOperPerResourceLimitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosResourceUsageOperOperPerResourceLimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resAlloc !== undefined) {
      hasAnyValues = true;
      internalValueResult.resAlloc = this._resAlloc;
    }
    if (this._resLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.resLimit = this._resLimit;
    }
    if (this._resName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resName = this._resName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosResourceUsageOperOperPerResourceLimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resAlloc = undefined;
      this._resLimit = undefined;
      this._resName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resAlloc = value.resAlloc;
      this._resLimit = value.resLimit;
      this._resName = value.resName;
    }
  }

  // res_alloc - computed: false, optional: true, required: false
  private _resAlloc?: string; 
  public get resAlloc() {
    return this.getStringAttribute('res_alloc');
  }
  public set resAlloc(value: string) {
    this._resAlloc = value;
  }
  public resetResAlloc() {
    this._resAlloc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resAllocInput() {
    return this._resAlloc;
  }

  // res_limit - computed: false, optional: true, required: false
  private _resLimit?: number; 
  public get resLimit() {
    return this.getNumberAttribute('res_limit');
  }
  public set resLimit(value: number) {
    this._resLimit = value;
  }
  public resetResLimit() {
    this._resLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resLimitInput() {
    return this._resLimit;
  }

  // res_name - computed: false, optional: true, required: false
  private _resName?: string; 
  public get resName() {
    return this.getStringAttribute('res_name');
  }
  public set resName(value: string) {
    this._resName = value;
  }
  public resetResName() {
    this._resName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resNameInput() {
    return this._resName;
  }
}

export class DataThunderDdosResourceUsageOperOperPerResourceLimitList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosResourceUsageOperOperPerResourceLimit[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosResourceUsageOperOperPerResourceLimitOutputReference {
    return new DataThunderDdosResourceUsageOperOperPerResourceLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosResourceUsageOperOperStaticResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_resource_usage_oper#res_alloc DataThunderDdosResourceUsageOper#res_alloc}
  */
  readonly resAlloc?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_resource_usage_oper#res_limit DataThunderDdosResourceUsageOper#res_limit}
  */
  readonly resLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_resource_usage_oper#res_name DataThunderDdosResourceUsageOper#res_name}
  */
  readonly resName?: string;
}

export function dataThunderDdosResourceUsageOperOperStaticResourcesToTerraform(struct?: DataThunderDdosResourceUsageOperOperStaticResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    res_alloc: cdktf.numberToTerraform(struct!.resAlloc),
    res_limit: cdktf.numberToTerraform(struct!.resLimit),
    res_name: cdktf.stringToTerraform(struct!.resName),
  }
}


export function dataThunderDdosResourceUsageOperOperStaticResourcesToHclTerraform(struct?: DataThunderDdosResourceUsageOperOperStaticResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    res_alloc: {
      value: cdktf.numberToHclTerraform(struct!.resAlloc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    res_limit: {
      value: cdktf.numberToHclTerraform(struct!.resLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    res_name: {
      value: cdktf.stringToHclTerraform(struct!.resName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosResourceUsageOperOperStaticResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosResourceUsageOperOperStaticResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resAlloc !== undefined) {
      hasAnyValues = true;
      internalValueResult.resAlloc = this._resAlloc;
    }
    if (this._resLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.resLimit = this._resLimit;
    }
    if (this._resName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resName = this._resName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosResourceUsageOperOperStaticResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resAlloc = undefined;
      this._resLimit = undefined;
      this._resName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resAlloc = value.resAlloc;
      this._resLimit = value.resLimit;
      this._resName = value.resName;
    }
  }

  // res_alloc - computed: false, optional: true, required: false
  private _resAlloc?: number; 
  public get resAlloc() {
    return this.getNumberAttribute('res_alloc');
  }
  public set resAlloc(value: number) {
    this._resAlloc = value;
  }
  public resetResAlloc() {
    this._resAlloc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resAllocInput() {
    return this._resAlloc;
  }

  // res_limit - computed: false, optional: true, required: false
  private _resLimit?: number; 
  public get resLimit() {
    return this.getNumberAttribute('res_limit');
  }
  public set resLimit(value: number) {
    this._resLimit = value;
  }
  public resetResLimit() {
    this._resLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resLimitInput() {
    return this._resLimit;
  }

  // res_name - computed: false, optional: true, required: false
  private _resName?: string; 
  public get resName() {
    return this.getStringAttribute('res_name');
  }
  public set resName(value: string) {
    this._resName = value;
  }
  public resetResName() {
    this._resName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resNameInput() {
    return this._resName;
  }
}

export class DataThunderDdosResourceUsageOperOperStaticResourcesList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosResourceUsageOperOperStaticResources[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosResourceUsageOperOperStaticResourcesOutputReference {
    return new DataThunderDdosResourceUsageOperOperStaticResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosResourceUsageOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_resource_usage_oper#enabled DataThunderDdosResourceUsageOper#enabled}
  */
  readonly enabled?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_resource_usage_oper#system_capacity DataThunderDdosResourceUsageOper#system_capacity}
  */
  readonly systemCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_resource_usage_oper#system_capacity_percentage DataThunderDdosResourceUsageOper#system_capacity_percentage}
  */
  readonly systemCapacityPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_resource_usage_oper#system_capacity_remaining DataThunderDdosResourceUsageOper#system_capacity_remaining}
  */
  readonly systemCapacityRemaining?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_resource_usage_oper#system_capacity_total DataThunderDdosResourceUsageOper#system_capacity_total}
  */
  readonly systemCapacityTotal?: number;
  /**
  * dynamic_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_resource_usage_oper#dynamic_resources DataThunderDdosResourceUsageOper#dynamic_resources}
  */
  readonly dynamicResources?: DataThunderDdosResourceUsageOperOperDynamicResources[] | cdktf.IResolvable;
  /**
  * hw_resource_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_resource_usage_oper#hw_resource_limit DataThunderDdosResourceUsageOper#hw_resource_limit}
  */
  readonly hwResourceLimit?: DataThunderDdosResourceUsageOperOperHwResourceLimit[] | cdktf.IResolvable;
  /**
  * per_resource_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_resource_usage_oper#per_resource_limit DataThunderDdosResourceUsageOper#per_resource_limit}
  */
  readonly perResourceLimit?: DataThunderDdosResourceUsageOperOperPerResourceLimit[] | cdktf.IResolvable;
  /**
  * static_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_resource_usage_oper#static_resources DataThunderDdosResourceUsageOper#static_resources}
  */
  readonly staticResources?: DataThunderDdosResourceUsageOperOperStaticResources[] | cdktf.IResolvable;
}

export function dataThunderDdosResourceUsageOperOperToTerraform(struct?: DataThunderDdosResourceUsageOperOperOutputReference | DataThunderDdosResourceUsageOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.numberToTerraform(struct!.enabled),
    system_capacity: cdktf.numberToTerraform(struct!.systemCapacity),
    system_capacity_percentage: cdktf.numberToTerraform(struct!.systemCapacityPercentage),
    system_capacity_remaining: cdktf.numberToTerraform(struct!.systemCapacityRemaining),
    system_capacity_total: cdktf.numberToTerraform(struct!.systemCapacityTotal),
    dynamic_resources: cdktf.listMapper(dataThunderDdosResourceUsageOperOperDynamicResourcesToTerraform, true)(struct!.dynamicResources),
    hw_resource_limit: cdktf.listMapper(dataThunderDdosResourceUsageOperOperHwResourceLimitToTerraform, true)(struct!.hwResourceLimit),
    per_resource_limit: cdktf.listMapper(dataThunderDdosResourceUsageOperOperPerResourceLimitToTerraform, true)(struct!.perResourceLimit),
    static_resources: cdktf.listMapper(dataThunderDdosResourceUsageOperOperStaticResourcesToTerraform, true)(struct!.staticResources),
  }
}


export function dataThunderDdosResourceUsageOperOperToHclTerraform(struct?: DataThunderDdosResourceUsageOperOperOutputReference | DataThunderDdosResourceUsageOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.numberToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    system_capacity: {
      value: cdktf.numberToHclTerraform(struct!.systemCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    system_capacity_percentage: {
      value: cdktf.numberToHclTerraform(struct!.systemCapacityPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    system_capacity_remaining: {
      value: cdktf.numberToHclTerraform(struct!.systemCapacityRemaining),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    system_capacity_total: {
      value: cdktf.numberToHclTerraform(struct!.systemCapacityTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dynamic_resources: {
      value: cdktf.listMapperHcl(dataThunderDdosResourceUsageOperOperDynamicResourcesToHclTerraform, true)(struct!.dynamicResources),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosResourceUsageOperOperDynamicResourcesList",
    },
    hw_resource_limit: {
      value: cdktf.listMapperHcl(dataThunderDdosResourceUsageOperOperHwResourceLimitToHclTerraform, true)(struct!.hwResourceLimit),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosResourceUsageOperOperHwResourceLimitList",
    },
    per_resource_limit: {
      value: cdktf.listMapperHcl(dataThunderDdosResourceUsageOperOperPerResourceLimitToHclTerraform, true)(struct!.perResourceLimit),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosResourceUsageOperOperPerResourceLimitList",
    },
    static_resources: {
      value: cdktf.listMapperHcl(dataThunderDdosResourceUsageOperOperStaticResourcesToHclTerraform, true)(struct!.staticResources),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosResourceUsageOperOperStaticResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosResourceUsageOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosResourceUsageOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._systemCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemCapacity = this._systemCapacity;
    }
    if (this._systemCapacityPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemCapacityPercentage = this._systemCapacityPercentage;
    }
    if (this._systemCapacityRemaining !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemCapacityRemaining = this._systemCapacityRemaining;
    }
    if (this._systemCapacityTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemCapacityTotal = this._systemCapacityTotal;
    }
    if (this._dynamicResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicResources = this._dynamicResources?.internalValue;
    }
    if (this._hwResourceLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwResourceLimit = this._hwResourceLimit?.internalValue;
    }
    if (this._perResourceLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.perResourceLimit = this._perResourceLimit?.internalValue;
    }
    if (this._staticResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticResources = this._staticResources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosResourceUsageOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._systemCapacity = undefined;
      this._systemCapacityPercentage = undefined;
      this._systemCapacityRemaining = undefined;
      this._systemCapacityTotal = undefined;
      this._dynamicResources.internalValue = undefined;
      this._hwResourceLimit.internalValue = undefined;
      this._perResourceLimit.internalValue = undefined;
      this._staticResources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._systemCapacity = value.systemCapacity;
      this._systemCapacityPercentage = value.systemCapacityPercentage;
      this._systemCapacityRemaining = value.systemCapacityRemaining;
      this._systemCapacityTotal = value.systemCapacityTotal;
      this._dynamicResources.internalValue = value.dynamicResources;
      this._hwResourceLimit.internalValue = value.hwResourceLimit;
      this._perResourceLimit.internalValue = value.perResourceLimit;
      this._staticResources.internalValue = value.staticResources;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: number; 
  public get enabled() {
    return this.getNumberAttribute('enabled');
  }
  public set enabled(value: number) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // system_capacity - computed: false, optional: true, required: false
  private _systemCapacity?: number; 
  public get systemCapacity() {
    return this.getNumberAttribute('system_capacity');
  }
  public set systemCapacity(value: number) {
    this._systemCapacity = value;
  }
  public resetSystemCapacity() {
    this._systemCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemCapacityInput() {
    return this._systemCapacity;
  }

  // system_capacity_percentage - computed: false, optional: true, required: false
  private _systemCapacityPercentage?: number; 
  public get systemCapacityPercentage() {
    return this.getNumberAttribute('system_capacity_percentage');
  }
  public set systemCapacityPercentage(value: number) {
    this._systemCapacityPercentage = value;
  }
  public resetSystemCapacityPercentage() {
    this._systemCapacityPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemCapacityPercentageInput() {
    return this._systemCapacityPercentage;
  }

  // system_capacity_remaining - computed: false, optional: true, required: false
  private _systemCapacityRemaining?: number; 
  public get systemCapacityRemaining() {
    return this.getNumberAttribute('system_capacity_remaining');
  }
  public set systemCapacityRemaining(value: number) {
    this._systemCapacityRemaining = value;
  }
  public resetSystemCapacityRemaining() {
    this._systemCapacityRemaining = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemCapacityRemainingInput() {
    return this._systemCapacityRemaining;
  }

  // system_capacity_total - computed: false, optional: true, required: false
  private _systemCapacityTotal?: number; 
  public get systemCapacityTotal() {
    return this.getNumberAttribute('system_capacity_total');
  }
  public set systemCapacityTotal(value: number) {
    this._systemCapacityTotal = value;
  }
  public resetSystemCapacityTotal() {
    this._systemCapacityTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemCapacityTotalInput() {
    return this._systemCapacityTotal;
  }

  // dynamic_resources - computed: false, optional: true, required: false
  private _dynamicResources = new DataThunderDdosResourceUsageOperOperDynamicResourcesList(this, "dynamic_resources", false);
  public get dynamicResources() {
    return this._dynamicResources;
  }
  public putDynamicResources(value: DataThunderDdosResourceUsageOperOperDynamicResources[] | cdktf.IResolvable) {
    this._dynamicResources.internalValue = value;
  }
  public resetDynamicResources() {
    this._dynamicResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicResourcesInput() {
    return this._dynamicResources.internalValue;
  }

  // hw_resource_limit - computed: false, optional: true, required: false
  private _hwResourceLimit = new DataThunderDdosResourceUsageOperOperHwResourceLimitList(this, "hw_resource_limit", false);
  public get hwResourceLimit() {
    return this._hwResourceLimit;
  }
  public putHwResourceLimit(value: DataThunderDdosResourceUsageOperOperHwResourceLimit[] | cdktf.IResolvable) {
    this._hwResourceLimit.internalValue = value;
  }
  public resetHwResourceLimit() {
    this._hwResourceLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwResourceLimitInput() {
    return this._hwResourceLimit.internalValue;
  }

  // per_resource_limit - computed: false, optional: true, required: false
  private _perResourceLimit = new DataThunderDdosResourceUsageOperOperPerResourceLimitList(this, "per_resource_limit", false);
  public get perResourceLimit() {
    return this._perResourceLimit;
  }
  public putPerResourceLimit(value: DataThunderDdosResourceUsageOperOperPerResourceLimit[] | cdktf.IResolvable) {
    this._perResourceLimit.internalValue = value;
  }
  public resetPerResourceLimit() {
    this._perResourceLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perResourceLimitInput() {
    return this._perResourceLimit.internalValue;
  }

  // static_resources - computed: false, optional: true, required: false
  private _staticResources = new DataThunderDdosResourceUsageOperOperStaticResourcesList(this, "static_resources", false);
  public get staticResources() {
    return this._staticResources;
  }
  public putStaticResources(value: DataThunderDdosResourceUsageOperOperStaticResources[] | cdktf.IResolvable) {
    this._staticResources.internalValue = value;
  }
  public resetStaticResources() {
    this._staticResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticResourcesInput() {
    return this._staticResources.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_resource_usage_oper thunder_ddos_resource_usage_oper}
*/
export class DataThunderDdosResourceUsageOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_resource_usage_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosResourceUsageOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosResourceUsageOper to import
  * @param importFromId The id of the existing DataThunderDdosResourceUsageOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_resource_usage_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosResourceUsageOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_resource_usage_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_resource_usage_oper thunder_ddos_resource_usage_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosResourceUsageOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosResourceUsageOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_resource_usage_oper',
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
  private _oper = new DataThunderDdosResourceUsageOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosResourceUsageOperOper) {
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
      oper: dataThunderDdosResourceUsageOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderDdosResourceUsageOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosResourceUsageOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
