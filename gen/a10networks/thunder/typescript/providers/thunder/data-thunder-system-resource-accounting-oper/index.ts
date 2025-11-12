// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_accounting_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemResourceAccountingOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_accounting_oper#id DataThunderSystemResourceAccountingOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_accounting_oper#oper DataThunderSystemResourceAccountingOper#oper}
  */
  readonly oper?: DataThunderSystemResourceAccountingOperOper;
}
export interface DataThunderSystemResourceAccountingOperOperPartitionResourceResTypeResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_accounting_oper#average DataThunderSystemResourceAccountingOper#average}
  */
  readonly average?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_accounting_oper#cap DataThunderSystemResourceAccountingOper#cap}
  */
  readonly cap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_accounting_oper#cap_utilization DataThunderSystemResourceAccountingOper#cap_utilization}
  */
  readonly capUtilization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_accounting_oper#current DataThunderSystemResourceAccountingOper#current}
  */
  readonly current?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_accounting_oper#max_exceed DataThunderSystemResourceAccountingOper#max_exceed}
  */
  readonly maxExceed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_accounting_oper#maximum DataThunderSystemResourceAccountingOper#maximum}
  */
  readonly maximum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_accounting_oper#minimum DataThunderSystemResourceAccountingOper#minimum}
  */
  readonly minimum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_accounting_oper#peak DataThunderSystemResourceAccountingOper#peak}
  */
  readonly peak?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_accounting_oper#resource_name DataThunderSystemResourceAccountingOper#resource_name}
  */
  readonly resourceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_accounting_oper#threshold_exceed DataThunderSystemResourceAccountingOper#threshold_exceed}
  */
  readonly thresholdExceed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_accounting_oper#utilization DataThunderSystemResourceAccountingOper#utilization}
  */
  readonly utilization?: string;
}

export function dataThunderSystemResourceAccountingOperOperPartitionResourceResTypeResourcesToTerraform(struct?: DataThunderSystemResourceAccountingOperOperPartitionResourceResTypeResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average: cdktf.stringToTerraform(struct!.average),
    cap: cdktf.stringToTerraform(struct!.cap),
    cap_utilization: cdktf.stringToTerraform(struct!.capUtilization),
    current: cdktf.stringToTerraform(struct!.current),
    max_exceed: cdktf.stringToTerraform(struct!.maxExceed),
    maximum: cdktf.stringToTerraform(struct!.maximum),
    minimum: cdktf.stringToTerraform(struct!.minimum),
    peak: cdktf.stringToTerraform(struct!.peak),
    resource_name: cdktf.stringToTerraform(struct!.resourceName),
    threshold_exceed: cdktf.stringToTerraform(struct!.thresholdExceed),
    utilization: cdktf.stringToTerraform(struct!.utilization),
  }
}


export function dataThunderSystemResourceAccountingOperOperPartitionResourceResTypeResourcesToHclTerraform(struct?: DataThunderSystemResourceAccountingOperOperPartitionResourceResTypeResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average: {
      value: cdktf.stringToHclTerraform(struct!.average),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cap: {
      value: cdktf.stringToHclTerraform(struct!.cap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cap_utilization: {
      value: cdktf.stringToHclTerraform(struct!.capUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current: {
      value: cdktf.stringToHclTerraform(struct!.current),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_exceed: {
      value: cdktf.stringToHclTerraform(struct!.maxExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum: {
      value: cdktf.stringToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum: {
      value: cdktf.stringToHclTerraform(struct!.minimum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peak: {
      value: cdktf.stringToHclTerraform(struct!.peak),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold_exceed: {
      value: cdktf.stringToHclTerraform(struct!.thresholdExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    utilization: {
      value: cdktf.stringToHclTerraform(struct!.utilization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemResourceAccountingOperOperPartitionResourceResTypeResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSystemResourceAccountingOperOperPartitionResourceResTypeResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._average !== undefined) {
      hasAnyValues = true;
      internalValueResult.average = this._average;
    }
    if (this._cap !== undefined) {
      hasAnyValues = true;
      internalValueResult.cap = this._cap;
    }
    if (this._capUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.capUtilization = this._capUtilization;
    }
    if (this._current !== undefined) {
      hasAnyValues = true;
      internalValueResult.current = this._current;
    }
    if (this._maxExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxExceed = this._maxExceed;
    }
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    if (this._peak !== undefined) {
      hasAnyValues = true;
      internalValueResult.peak = this._peak;
    }
    if (this._resourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceName = this._resourceName;
    }
    if (this._thresholdExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdExceed = this._thresholdExceed;
    }
    if (this._utilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.utilization = this._utilization;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemResourceAccountingOperOperPartitionResourceResTypeResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._average = undefined;
      this._cap = undefined;
      this._capUtilization = undefined;
      this._current = undefined;
      this._maxExceed = undefined;
      this._maximum = undefined;
      this._minimum = undefined;
      this._peak = undefined;
      this._resourceName = undefined;
      this._thresholdExceed = undefined;
      this._utilization = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._average = value.average;
      this._cap = value.cap;
      this._capUtilization = value.capUtilization;
      this._current = value.current;
      this._maxExceed = value.maxExceed;
      this._maximum = value.maximum;
      this._minimum = value.minimum;
      this._peak = value.peak;
      this._resourceName = value.resourceName;
      this._thresholdExceed = value.thresholdExceed;
      this._utilization = value.utilization;
    }
  }

  // average - computed: false, optional: true, required: false
  private _average?: string; 
  public get average() {
    return this.getStringAttribute('average');
  }
  public set average(value: string) {
    this._average = value;
  }
  public resetAverage() {
    this._average = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageInput() {
    return this._average;
  }

  // cap - computed: false, optional: true, required: false
  private _cap?: string; 
  public get cap() {
    return this.getStringAttribute('cap');
  }
  public set cap(value: string) {
    this._cap = value;
  }
  public resetCap() {
    this._cap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capInput() {
    return this._cap;
  }

  // cap_utilization - computed: false, optional: true, required: false
  private _capUtilization?: string; 
  public get capUtilization() {
    return this.getStringAttribute('cap_utilization');
  }
  public set capUtilization(value: string) {
    this._capUtilization = value;
  }
  public resetCapUtilization() {
    this._capUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capUtilizationInput() {
    return this._capUtilization;
  }

  // current - computed: false, optional: true, required: false
  private _current?: string; 
  public get current() {
    return this.getStringAttribute('current');
  }
  public set current(value: string) {
    this._current = value;
  }
  public resetCurrent() {
    this._current = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentInput() {
    return this._current;
  }

  // max_exceed - computed: false, optional: true, required: false
  private _maxExceed?: string; 
  public get maxExceed() {
    return this.getStringAttribute('max_exceed');
  }
  public set maxExceed(value: string) {
    this._maxExceed = value;
  }
  public resetMaxExceed() {
    this._maxExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxExceedInput() {
    return this._maxExceed;
  }

  // maximum - computed: false, optional: true, required: false
  private _maximum?: string; 
  public get maximum() {
    return this.getStringAttribute('maximum');
  }
  public set maximum(value: string) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // minimum - computed: false, optional: true, required: false
  private _minimum?: string; 
  public get minimum() {
    return this.getStringAttribute('minimum');
  }
  public set minimum(value: string) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }

  // peak - computed: false, optional: true, required: false
  private _peak?: string; 
  public get peak() {
    return this.getStringAttribute('peak');
  }
  public set peak(value: string) {
    this._peak = value;
  }
  public resetPeak() {
    this._peak = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peakInput() {
    return this._peak;
  }

  // resource_name - computed: false, optional: true, required: false
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  public resetResourceName() {
    this._resourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }

  // threshold_exceed - computed: false, optional: true, required: false
  private _thresholdExceed?: string; 
  public get thresholdExceed() {
    return this.getStringAttribute('threshold_exceed');
  }
  public set thresholdExceed(value: string) {
    this._thresholdExceed = value;
  }
  public resetThresholdExceed() {
    this._thresholdExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdExceedInput() {
    return this._thresholdExceed;
  }

  // utilization - computed: false, optional: true, required: false
  private _utilization?: string; 
  public get utilization() {
    return this.getStringAttribute('utilization');
  }
  public set utilization(value: string) {
    this._utilization = value;
  }
  public resetUtilization() {
    this._utilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utilizationInput() {
    return this._utilization;
  }
}

export class DataThunderSystemResourceAccountingOperOperPartitionResourceResTypeResourcesList extends cdktf.ComplexList {
  public internalValue? : DataThunderSystemResourceAccountingOperOperPartitionResourceResTypeResources[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSystemResourceAccountingOperOperPartitionResourceResTypeResourcesOutputReference {
    return new DataThunderSystemResourceAccountingOperOperPartitionResourceResTypeResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSystemResourceAccountingOperOperPartitionResourceResType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_accounting_oper#resource_type DataThunderSystemResourceAccountingOper#resource_type}
  */
  readonly resourceType?: string;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_accounting_oper#resources DataThunderSystemResourceAccountingOper#resources}
  */
  readonly resources?: DataThunderSystemResourceAccountingOperOperPartitionResourceResTypeResources[] | cdktf.IResolvable;
}

export function dataThunderSystemResourceAccountingOperOperPartitionResourceResTypeToTerraform(struct?: DataThunderSystemResourceAccountingOperOperPartitionResourceResType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
    resources: cdktf.listMapper(dataThunderSystemResourceAccountingOperOperPartitionResourceResTypeResourcesToTerraform, true)(struct!.resources),
  }
}


export function dataThunderSystemResourceAccountingOperOperPartitionResourceResTypeToHclTerraform(struct?: DataThunderSystemResourceAccountingOperOperPartitionResourceResType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: cdktf.listMapperHcl(dataThunderSystemResourceAccountingOperOperPartitionResourceResTypeResourcesToHclTerraform, true)(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSystemResourceAccountingOperOperPartitionResourceResTypeResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemResourceAccountingOperOperPartitionResourceResTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSystemResourceAccountingOperOperPartitionResourceResType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemResourceAccountingOperOperPartitionResourceResType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceType = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceType = value.resourceType;
      this._resources.internalValue = value.resources;
    }
  }

  // resource_type - computed: false, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataThunderSystemResourceAccountingOperOperPartitionResourceResTypeResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataThunderSystemResourceAccountingOperOperPartitionResourceResTypeResources[] | cdktf.IResolvable) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}

export class DataThunderSystemResourceAccountingOperOperPartitionResourceResTypeList extends cdktf.ComplexList {
  public internalValue? : DataThunderSystemResourceAccountingOperOperPartitionResourceResType[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSystemResourceAccountingOperOperPartitionResourceResTypeOutputReference {
    return new DataThunderSystemResourceAccountingOperOperPartitionResourceResTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSystemResourceAccountingOperOperPartitionResource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_accounting_oper#partition_name DataThunderSystemResourceAccountingOper#partition_name}
  */
  readonly partitionName?: string;
  /**
  * res_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_accounting_oper#res_type DataThunderSystemResourceAccountingOper#res_type}
  */
  readonly resType?: DataThunderSystemResourceAccountingOperOperPartitionResourceResType[] | cdktf.IResolvable;
}

export function dataThunderSystemResourceAccountingOperOperPartitionResourceToTerraform(struct?: DataThunderSystemResourceAccountingOperOperPartitionResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    partition_name: cdktf.stringToTerraform(struct!.partitionName),
    res_type: cdktf.listMapper(dataThunderSystemResourceAccountingOperOperPartitionResourceResTypeToTerraform, true)(struct!.resType),
  }
}


export function dataThunderSystemResourceAccountingOperOperPartitionResourceToHclTerraform(struct?: DataThunderSystemResourceAccountingOperOperPartitionResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    partition_name: {
      value: cdktf.stringToHclTerraform(struct!.partitionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    res_type: {
      value: cdktf.listMapperHcl(dataThunderSystemResourceAccountingOperOperPartitionResourceResTypeToHclTerraform, true)(struct!.resType),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSystemResourceAccountingOperOperPartitionResourceResTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemResourceAccountingOperOperPartitionResourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSystemResourceAccountingOperOperPartitionResource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._partitionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionName = this._partitionName;
    }
    if (this._resType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resType = this._resType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemResourceAccountingOperOperPartitionResource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._partitionName = undefined;
      this._resType.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._partitionName = value.partitionName;
      this._resType.internalValue = value.resType;
    }
  }

  // partition_name - computed: false, optional: true, required: false
  private _partitionName?: string; 
  public get partitionName() {
    return this.getStringAttribute('partition_name');
  }
  public set partitionName(value: string) {
    this._partitionName = value;
  }
  public resetPartitionName() {
    this._partitionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionNameInput() {
    return this._partitionName;
  }

  // res_type - computed: false, optional: true, required: false
  private _resType = new DataThunderSystemResourceAccountingOperOperPartitionResourceResTypeList(this, "res_type", false);
  public get resType() {
    return this._resType;
  }
  public putResType(value: DataThunderSystemResourceAccountingOperOperPartitionResourceResType[] | cdktf.IResolvable) {
    this._resType.internalValue = value;
  }
  public resetResType() {
    this._resType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resTypeInput() {
    return this._resType.internalValue;
  }
}

export class DataThunderSystemResourceAccountingOperOperPartitionResourceList extends cdktf.ComplexList {
  public internalValue? : DataThunderSystemResourceAccountingOperOperPartitionResource[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSystemResourceAccountingOperOperPartitionResourceOutputReference {
    return new DataThunderSystemResourceAccountingOperOperPartitionResourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSystemResourceAccountingOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_accounting_oper#scope DataThunderSystemResourceAccountingOper#scope}
  */
  readonly scope?: string;
  /**
  * partition_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_accounting_oper#partition_resource DataThunderSystemResourceAccountingOper#partition_resource}
  */
  readonly partitionResource?: DataThunderSystemResourceAccountingOperOperPartitionResource[] | cdktf.IResolvable;
}

export function dataThunderSystemResourceAccountingOperOperToTerraform(struct?: DataThunderSystemResourceAccountingOperOperOutputReference | DataThunderSystemResourceAccountingOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    partition_resource: cdktf.listMapper(dataThunderSystemResourceAccountingOperOperPartitionResourceToTerraform, true)(struct!.partitionResource),
  }
}


export function dataThunderSystemResourceAccountingOperOperToHclTerraform(struct?: DataThunderSystemResourceAccountingOperOperOutputReference | DataThunderSystemResourceAccountingOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition_resource: {
      value: cdktf.listMapperHcl(dataThunderSystemResourceAccountingOperOperPartitionResourceToHclTerraform, true)(struct!.partitionResource),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSystemResourceAccountingOperOperPartitionResourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemResourceAccountingOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemResourceAccountingOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._partitionResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionResource = this._partitionResource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemResourceAccountingOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scope = undefined;
      this._partitionResource.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scope = value.scope;
      this._partitionResource.internalValue = value.partitionResource;
    }
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // partition_resource - computed: false, optional: true, required: false
  private _partitionResource = new DataThunderSystemResourceAccountingOperOperPartitionResourceList(this, "partition_resource", false);
  public get partitionResource() {
    return this._partitionResource;
  }
  public putPartitionResource(value: DataThunderSystemResourceAccountingOperOperPartitionResource[] | cdktf.IResolvable) {
    this._partitionResource.internalValue = value;
  }
  public resetPartitionResource() {
    this._partitionResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionResourceInput() {
    return this._partitionResource.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_accounting_oper thunder_system_resource_accounting_oper}
*/
export class DataThunderSystemResourceAccountingOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_resource_accounting_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemResourceAccountingOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemResourceAccountingOper to import
  * @param importFromId The id of the existing DataThunderSystemResourceAccountingOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_accounting_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemResourceAccountingOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_resource_accounting_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_resource_accounting_oper thunder_system_resource_accounting_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemResourceAccountingOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemResourceAccountingOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_resource_accounting_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
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
  private _oper = new DataThunderSystemResourceAccountingOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSystemResourceAccountingOperOper) {
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
      oper: dataThunderSystemResourceAccountingOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSystemResourceAccountingOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemResourceAccountingOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
