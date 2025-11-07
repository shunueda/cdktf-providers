// https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/log_allocation_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogAllocationConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/log_allocation_config#id LogAllocationConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * dataset_allocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/log_allocation_config#dataset_allocation LogAllocationConfig#dataset_allocation}
  */
  readonly datasetAllocation?: LogAllocationConfigDatasetAllocation[] | cdktf.IResolvable;
  /**
  * default_dataset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/log_allocation_config#default_dataset LogAllocationConfig#default_dataset}
  */
  readonly defaultDataset: LogAllocationConfigDefaultDataset;
}
export interface LogAllocationConfigDatasetAllocationAllocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/log_allocation_config#percent_of_license LogAllocationConfig#percent_of_license}
  */
  readonly percentOfLicense: number;
}

export function logAllocationConfigDatasetAllocationAllocationToTerraform(struct?: LogAllocationConfigDatasetAllocationAllocationOutputReference | LogAllocationConfigDatasetAllocationAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percent_of_license: cdktf.numberToTerraform(struct!.percentOfLicense),
  }
}


export function logAllocationConfigDatasetAllocationAllocationToHclTerraform(struct?: LogAllocationConfigDatasetAllocationAllocationOutputReference | LogAllocationConfigDatasetAllocationAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    percent_of_license: {
      value: cdktf.numberToHclTerraform(struct!.percentOfLicense),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogAllocationConfigDatasetAllocationAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogAllocationConfigDatasetAllocationAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentOfLicense !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentOfLicense = this._percentOfLicense;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogAllocationConfigDatasetAllocationAllocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._percentOfLicense = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._percentOfLicense = value.percentOfLicense;
    }
  }

  // percent_of_license - computed: false, optional: false, required: true
  private _percentOfLicense?: number; 
  public get percentOfLicense() {
    return this.getNumberAttribute('percent_of_license');
  }
  public set percentOfLicense(value: number) {
    this._percentOfLicense = value;
  }
  // Temporarily expose input value. Use with caution.
  public get percentOfLicenseInput() {
    return this._percentOfLicense;
  }
}
export interface LogAllocationConfigDatasetAllocationPrioritiesHighPriorityFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/log_allocation_config#query LogAllocationConfig#query}
  */
  readonly query: string;
}

export function logAllocationConfigDatasetAllocationPrioritiesHighPriorityFilterToTerraform(struct?: LogAllocationConfigDatasetAllocationPrioritiesHighPriorityFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function logAllocationConfigDatasetAllocationPrioritiesHighPriorityFilterToHclTerraform(struct?: LogAllocationConfigDatasetAllocationPrioritiesHighPriorityFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogAllocationConfigDatasetAllocationPrioritiesHighPriorityFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogAllocationConfigDatasetAllocationPrioritiesHighPriorityFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogAllocationConfigDatasetAllocationPrioritiesHighPriorityFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._query = value.query;
    }
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class LogAllocationConfigDatasetAllocationPrioritiesHighPriorityFilterList extends cdktf.ComplexList {
  public internalValue? : LogAllocationConfigDatasetAllocationPrioritiesHighPriorityFilter[] | cdktf.IResolvable

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
  public get(index: number): LogAllocationConfigDatasetAllocationPrioritiesHighPriorityFilterOutputReference {
    return new LogAllocationConfigDatasetAllocationPrioritiesHighPriorityFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogAllocationConfigDatasetAllocationPrioritiesLowPriorityFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/log_allocation_config#query LogAllocationConfig#query}
  */
  readonly query: string;
}

export function logAllocationConfigDatasetAllocationPrioritiesLowPriorityFilterToTerraform(struct?: LogAllocationConfigDatasetAllocationPrioritiesLowPriorityFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function logAllocationConfigDatasetAllocationPrioritiesLowPriorityFilterToHclTerraform(struct?: LogAllocationConfigDatasetAllocationPrioritiesLowPriorityFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogAllocationConfigDatasetAllocationPrioritiesLowPriorityFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogAllocationConfigDatasetAllocationPrioritiesLowPriorityFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogAllocationConfigDatasetAllocationPrioritiesLowPriorityFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._query = value.query;
    }
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class LogAllocationConfigDatasetAllocationPrioritiesLowPriorityFilterList extends cdktf.ComplexList {
  public internalValue? : LogAllocationConfigDatasetAllocationPrioritiesLowPriorityFilter[] | cdktf.IResolvable

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
  public get(index: number): LogAllocationConfigDatasetAllocationPrioritiesLowPriorityFilterOutputReference {
    return new LogAllocationConfigDatasetAllocationPrioritiesLowPriorityFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogAllocationConfigDatasetAllocationPriorities {
  /**
  * high_priority_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/log_allocation_config#high_priority_filter LogAllocationConfig#high_priority_filter}
  */
  readonly highPriorityFilter?: LogAllocationConfigDatasetAllocationPrioritiesHighPriorityFilter[] | cdktf.IResolvable;
  /**
  * low_priority_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/log_allocation_config#low_priority_filter LogAllocationConfig#low_priority_filter}
  */
  readonly lowPriorityFilter?: LogAllocationConfigDatasetAllocationPrioritiesLowPriorityFilter[] | cdktf.IResolvable;
}

export function logAllocationConfigDatasetAllocationPrioritiesToTerraform(struct?: LogAllocationConfigDatasetAllocationPrioritiesOutputReference | LogAllocationConfigDatasetAllocationPriorities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    high_priority_filter: cdktf.listMapper(logAllocationConfigDatasetAllocationPrioritiesHighPriorityFilterToTerraform, true)(struct!.highPriorityFilter),
    low_priority_filter: cdktf.listMapper(logAllocationConfigDatasetAllocationPrioritiesLowPriorityFilterToTerraform, true)(struct!.lowPriorityFilter),
  }
}


export function logAllocationConfigDatasetAllocationPrioritiesToHclTerraform(struct?: LogAllocationConfigDatasetAllocationPrioritiesOutputReference | LogAllocationConfigDatasetAllocationPriorities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    high_priority_filter: {
      value: cdktf.listMapperHcl(logAllocationConfigDatasetAllocationPrioritiesHighPriorityFilterToHclTerraform, true)(struct!.highPriorityFilter),
      isBlock: true,
      type: "list",
      storageClassType: "LogAllocationConfigDatasetAllocationPrioritiesHighPriorityFilterList",
    },
    low_priority_filter: {
      value: cdktf.listMapperHcl(logAllocationConfigDatasetAllocationPrioritiesLowPriorityFilterToHclTerraform, true)(struct!.lowPriorityFilter),
      isBlock: true,
      type: "list",
      storageClassType: "LogAllocationConfigDatasetAllocationPrioritiesLowPriorityFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogAllocationConfigDatasetAllocationPrioritiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogAllocationConfigDatasetAllocationPriorities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._highPriorityFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.highPriorityFilter = this._highPriorityFilter?.internalValue;
    }
    if (this._lowPriorityFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowPriorityFilter = this._lowPriorityFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogAllocationConfigDatasetAllocationPriorities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._highPriorityFilter.internalValue = undefined;
      this._lowPriorityFilter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._highPriorityFilter.internalValue = value.highPriorityFilter;
      this._lowPriorityFilter.internalValue = value.lowPriorityFilter;
    }
  }

  // high_priority_filter - computed: false, optional: true, required: false
  private _highPriorityFilter = new LogAllocationConfigDatasetAllocationPrioritiesHighPriorityFilterList(this, "high_priority_filter", false);
  public get highPriorityFilter() {
    return this._highPriorityFilter;
  }
  public putHighPriorityFilter(value: LogAllocationConfigDatasetAllocationPrioritiesHighPriorityFilter[] | cdktf.IResolvable) {
    this._highPriorityFilter.internalValue = value;
  }
  public resetHighPriorityFilter() {
    this._highPriorityFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highPriorityFilterInput() {
    return this._highPriorityFilter.internalValue;
  }

  // low_priority_filter - computed: false, optional: true, required: false
  private _lowPriorityFilter = new LogAllocationConfigDatasetAllocationPrioritiesLowPriorityFilterList(this, "low_priority_filter", false);
  public get lowPriorityFilter() {
    return this._lowPriorityFilter;
  }
  public putLowPriorityFilter(value: LogAllocationConfigDatasetAllocationPrioritiesLowPriorityFilter[] | cdktf.IResolvable) {
    this._lowPriorityFilter.internalValue = value;
  }
  public resetLowPriorityFilter() {
    this._lowPriorityFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowPriorityFilterInput() {
    return this._lowPriorityFilter.internalValue;
  }
}
export interface LogAllocationConfigDatasetAllocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/log_allocation_config#dataset_id LogAllocationConfig#dataset_id}
  */
  readonly datasetId: string;
  /**
  * allocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/log_allocation_config#allocation LogAllocationConfig#allocation}
  */
  readonly allocation: LogAllocationConfigDatasetAllocationAllocation;
  /**
  * priorities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/log_allocation_config#priorities LogAllocationConfig#priorities}
  */
  readonly priorities?: LogAllocationConfigDatasetAllocationPriorities;
}

export function logAllocationConfigDatasetAllocationToTerraform(struct?: LogAllocationConfigDatasetAllocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
    allocation: logAllocationConfigDatasetAllocationAllocationToTerraform(struct!.allocation),
    priorities: logAllocationConfigDatasetAllocationPrioritiesToTerraform(struct!.priorities),
  }
}


export function logAllocationConfigDatasetAllocationToHclTerraform(struct?: LogAllocationConfigDatasetAllocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset_id: {
      value: cdktf.stringToHclTerraform(struct!.datasetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allocation: {
      value: logAllocationConfigDatasetAllocationAllocationToHclTerraform(struct!.allocation),
      isBlock: true,
      type: "list",
      storageClassType: "LogAllocationConfigDatasetAllocationAllocationList",
    },
    priorities: {
      value: logAllocationConfigDatasetAllocationPrioritiesToHclTerraform(struct!.priorities),
      isBlock: true,
      type: "list",
      storageClassType: "LogAllocationConfigDatasetAllocationPrioritiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogAllocationConfigDatasetAllocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogAllocationConfigDatasetAllocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    if (this._allocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocation = this._allocation?.internalValue;
    }
    if (this._priorities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorities = this._priorities?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogAllocationConfigDatasetAllocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasetId = undefined;
      this._allocation.internalValue = undefined;
      this._priorities.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasetId = value.datasetId;
      this._allocation.internalValue = value.allocation;
      this._priorities.internalValue = value.priorities;
    }
  }

  // dataset_id - computed: false, optional: false, required: true
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
  }

  // allocation - computed: false, optional: false, required: true
  private _allocation = new LogAllocationConfigDatasetAllocationAllocationOutputReference(this, "allocation");
  public get allocation() {
    return this._allocation;
  }
  public putAllocation(value: LogAllocationConfigDatasetAllocationAllocation) {
    this._allocation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationInput() {
    return this._allocation.internalValue;
  }

  // priorities - computed: false, optional: true, required: false
  private _priorities = new LogAllocationConfigDatasetAllocationPrioritiesOutputReference(this, "priorities");
  public get priorities() {
    return this._priorities;
  }
  public putPriorities(value: LogAllocationConfigDatasetAllocationPriorities) {
    this._priorities.internalValue = value;
  }
  public resetPriorities() {
    this._priorities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prioritiesInput() {
    return this._priorities.internalValue;
  }
}

export class LogAllocationConfigDatasetAllocationList extends cdktf.ComplexList {
  public internalValue? : LogAllocationConfigDatasetAllocation[] | cdktf.IResolvable

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
  public get(index: number): LogAllocationConfigDatasetAllocationOutputReference {
    return new LogAllocationConfigDatasetAllocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogAllocationConfigDefaultDatasetAllocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/log_allocation_config#percent_of_license LogAllocationConfig#percent_of_license}
  */
  readonly percentOfLicense: number;
}

export function logAllocationConfigDefaultDatasetAllocationToTerraform(struct?: LogAllocationConfigDefaultDatasetAllocationOutputReference | LogAllocationConfigDefaultDatasetAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percent_of_license: cdktf.numberToTerraform(struct!.percentOfLicense),
  }
}


export function logAllocationConfigDefaultDatasetAllocationToHclTerraform(struct?: LogAllocationConfigDefaultDatasetAllocationOutputReference | LogAllocationConfigDefaultDatasetAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    percent_of_license: {
      value: cdktf.numberToHclTerraform(struct!.percentOfLicense),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogAllocationConfigDefaultDatasetAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogAllocationConfigDefaultDatasetAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentOfLicense !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentOfLicense = this._percentOfLicense;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogAllocationConfigDefaultDatasetAllocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._percentOfLicense = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._percentOfLicense = value.percentOfLicense;
    }
  }

  // percent_of_license - computed: false, optional: false, required: true
  private _percentOfLicense?: number; 
  public get percentOfLicense() {
    return this.getNumberAttribute('percent_of_license');
  }
  public set percentOfLicense(value: number) {
    this._percentOfLicense = value;
  }
  // Temporarily expose input value. Use with caution.
  public get percentOfLicenseInput() {
    return this._percentOfLicense;
  }
}
export interface LogAllocationConfigDefaultDatasetPrioritiesHighPriorityFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/log_allocation_config#query LogAllocationConfig#query}
  */
  readonly query: string;
}

export function logAllocationConfigDefaultDatasetPrioritiesHighPriorityFilterToTerraform(struct?: LogAllocationConfigDefaultDatasetPrioritiesHighPriorityFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function logAllocationConfigDefaultDatasetPrioritiesHighPriorityFilterToHclTerraform(struct?: LogAllocationConfigDefaultDatasetPrioritiesHighPriorityFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogAllocationConfigDefaultDatasetPrioritiesHighPriorityFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogAllocationConfigDefaultDatasetPrioritiesHighPriorityFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogAllocationConfigDefaultDatasetPrioritiesHighPriorityFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._query = value.query;
    }
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class LogAllocationConfigDefaultDatasetPrioritiesHighPriorityFilterList extends cdktf.ComplexList {
  public internalValue? : LogAllocationConfigDefaultDatasetPrioritiesHighPriorityFilter[] | cdktf.IResolvable

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
  public get(index: number): LogAllocationConfigDefaultDatasetPrioritiesHighPriorityFilterOutputReference {
    return new LogAllocationConfigDefaultDatasetPrioritiesHighPriorityFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogAllocationConfigDefaultDatasetPrioritiesLowPriorityFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/log_allocation_config#query LogAllocationConfig#query}
  */
  readonly query: string;
}

export function logAllocationConfigDefaultDatasetPrioritiesLowPriorityFilterToTerraform(struct?: LogAllocationConfigDefaultDatasetPrioritiesLowPriorityFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function logAllocationConfigDefaultDatasetPrioritiesLowPriorityFilterToHclTerraform(struct?: LogAllocationConfigDefaultDatasetPrioritiesLowPriorityFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogAllocationConfigDefaultDatasetPrioritiesLowPriorityFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogAllocationConfigDefaultDatasetPrioritiesLowPriorityFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogAllocationConfigDefaultDatasetPrioritiesLowPriorityFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._query = value.query;
    }
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class LogAllocationConfigDefaultDatasetPrioritiesLowPriorityFilterList extends cdktf.ComplexList {
  public internalValue? : LogAllocationConfigDefaultDatasetPrioritiesLowPriorityFilter[] | cdktf.IResolvable

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
  public get(index: number): LogAllocationConfigDefaultDatasetPrioritiesLowPriorityFilterOutputReference {
    return new LogAllocationConfigDefaultDatasetPrioritiesLowPriorityFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogAllocationConfigDefaultDatasetPriorities {
  /**
  * high_priority_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/log_allocation_config#high_priority_filter LogAllocationConfig#high_priority_filter}
  */
  readonly highPriorityFilter?: LogAllocationConfigDefaultDatasetPrioritiesHighPriorityFilter[] | cdktf.IResolvable;
  /**
  * low_priority_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/log_allocation_config#low_priority_filter LogAllocationConfig#low_priority_filter}
  */
  readonly lowPriorityFilter?: LogAllocationConfigDefaultDatasetPrioritiesLowPriorityFilter[] | cdktf.IResolvable;
}

export function logAllocationConfigDefaultDatasetPrioritiesToTerraform(struct?: LogAllocationConfigDefaultDatasetPrioritiesOutputReference | LogAllocationConfigDefaultDatasetPriorities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    high_priority_filter: cdktf.listMapper(logAllocationConfigDefaultDatasetPrioritiesHighPriorityFilterToTerraform, true)(struct!.highPriorityFilter),
    low_priority_filter: cdktf.listMapper(logAllocationConfigDefaultDatasetPrioritiesLowPriorityFilterToTerraform, true)(struct!.lowPriorityFilter),
  }
}


export function logAllocationConfigDefaultDatasetPrioritiesToHclTerraform(struct?: LogAllocationConfigDefaultDatasetPrioritiesOutputReference | LogAllocationConfigDefaultDatasetPriorities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    high_priority_filter: {
      value: cdktf.listMapperHcl(logAllocationConfigDefaultDatasetPrioritiesHighPriorityFilterToHclTerraform, true)(struct!.highPriorityFilter),
      isBlock: true,
      type: "list",
      storageClassType: "LogAllocationConfigDefaultDatasetPrioritiesHighPriorityFilterList",
    },
    low_priority_filter: {
      value: cdktf.listMapperHcl(logAllocationConfigDefaultDatasetPrioritiesLowPriorityFilterToHclTerraform, true)(struct!.lowPriorityFilter),
      isBlock: true,
      type: "list",
      storageClassType: "LogAllocationConfigDefaultDatasetPrioritiesLowPriorityFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogAllocationConfigDefaultDatasetPrioritiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogAllocationConfigDefaultDatasetPriorities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._highPriorityFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.highPriorityFilter = this._highPriorityFilter?.internalValue;
    }
    if (this._lowPriorityFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowPriorityFilter = this._lowPriorityFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogAllocationConfigDefaultDatasetPriorities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._highPriorityFilter.internalValue = undefined;
      this._lowPriorityFilter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._highPriorityFilter.internalValue = value.highPriorityFilter;
      this._lowPriorityFilter.internalValue = value.lowPriorityFilter;
    }
  }

  // high_priority_filter - computed: false, optional: true, required: false
  private _highPriorityFilter = new LogAllocationConfigDefaultDatasetPrioritiesHighPriorityFilterList(this, "high_priority_filter", false);
  public get highPriorityFilter() {
    return this._highPriorityFilter;
  }
  public putHighPriorityFilter(value: LogAllocationConfigDefaultDatasetPrioritiesHighPriorityFilter[] | cdktf.IResolvable) {
    this._highPriorityFilter.internalValue = value;
  }
  public resetHighPriorityFilter() {
    this._highPriorityFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highPriorityFilterInput() {
    return this._highPriorityFilter.internalValue;
  }

  // low_priority_filter - computed: false, optional: true, required: false
  private _lowPriorityFilter = new LogAllocationConfigDefaultDatasetPrioritiesLowPriorityFilterList(this, "low_priority_filter", false);
  public get lowPriorityFilter() {
    return this._lowPriorityFilter;
  }
  public putLowPriorityFilter(value: LogAllocationConfigDefaultDatasetPrioritiesLowPriorityFilter[] | cdktf.IResolvable) {
    this._lowPriorityFilter.internalValue = value;
  }
  public resetLowPriorityFilter() {
    this._lowPriorityFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowPriorityFilterInput() {
    return this._lowPriorityFilter.internalValue;
  }
}
export interface LogAllocationConfigDefaultDataset {
  /**
  * allocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/log_allocation_config#allocation LogAllocationConfig#allocation}
  */
  readonly allocation: LogAllocationConfigDefaultDatasetAllocation;
  /**
  * priorities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/log_allocation_config#priorities LogAllocationConfig#priorities}
  */
  readonly priorities?: LogAllocationConfigDefaultDatasetPriorities;
}

export function logAllocationConfigDefaultDatasetToTerraform(struct?: LogAllocationConfigDefaultDatasetOutputReference | LogAllocationConfigDefaultDataset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocation: logAllocationConfigDefaultDatasetAllocationToTerraform(struct!.allocation),
    priorities: logAllocationConfigDefaultDatasetPrioritiesToTerraform(struct!.priorities),
  }
}


export function logAllocationConfigDefaultDatasetToHclTerraform(struct?: LogAllocationConfigDefaultDatasetOutputReference | LogAllocationConfigDefaultDataset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocation: {
      value: logAllocationConfigDefaultDatasetAllocationToHclTerraform(struct!.allocation),
      isBlock: true,
      type: "list",
      storageClassType: "LogAllocationConfigDefaultDatasetAllocationList",
    },
    priorities: {
      value: logAllocationConfigDefaultDatasetPrioritiesToHclTerraform(struct!.priorities),
      isBlock: true,
      type: "list",
      storageClassType: "LogAllocationConfigDefaultDatasetPrioritiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogAllocationConfigDefaultDatasetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogAllocationConfigDefaultDataset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocation = this._allocation?.internalValue;
    }
    if (this._priorities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorities = this._priorities?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogAllocationConfigDefaultDataset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allocation.internalValue = undefined;
      this._priorities.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allocation.internalValue = value.allocation;
      this._priorities.internalValue = value.priorities;
    }
  }

  // allocation - computed: false, optional: false, required: true
  private _allocation = new LogAllocationConfigDefaultDatasetAllocationOutputReference(this, "allocation");
  public get allocation() {
    return this._allocation;
  }
  public putAllocation(value: LogAllocationConfigDefaultDatasetAllocation) {
    this._allocation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationInput() {
    return this._allocation.internalValue;
  }

  // priorities - computed: false, optional: true, required: false
  private _priorities = new LogAllocationConfigDefaultDatasetPrioritiesOutputReference(this, "priorities");
  public get priorities() {
    return this._priorities;
  }
  public putPriorities(value: LogAllocationConfigDefaultDatasetPriorities) {
    this._priorities.internalValue = value;
  }
  public resetPriorities() {
    this._priorities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prioritiesInput() {
    return this._priorities.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/log_allocation_config chronosphere_log_allocation_config}
*/
export class LogAllocationConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "chronosphere_log_allocation_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogAllocationConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogAllocationConfig to import
  * @param importFromId The id of the existing LogAllocationConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/log_allocation_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogAllocationConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "chronosphere_log_allocation_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/log_allocation_config chronosphere_log_allocation_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogAllocationConfigConfig
  */
  public constructor(scope: Construct, id: string, config: LogAllocationConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'chronosphere_log_allocation_config',
      terraformGeneratorMetadata: {
        providerName: 'chronosphere',
        providerVersion: '1.17.0'
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
    this._datasetAllocation.internalValue = config.datasetAllocation;
    this._defaultDataset.internalValue = config.defaultDataset;
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

  // dataset_allocation - computed: false, optional: true, required: false
  private _datasetAllocation = new LogAllocationConfigDatasetAllocationList(this, "dataset_allocation", false);
  public get datasetAllocation() {
    return this._datasetAllocation;
  }
  public putDatasetAllocation(value: LogAllocationConfigDatasetAllocation[] | cdktf.IResolvable) {
    this._datasetAllocation.internalValue = value;
  }
  public resetDatasetAllocation() {
    this._datasetAllocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetAllocationInput() {
    return this._datasetAllocation.internalValue;
  }

  // default_dataset - computed: false, optional: false, required: true
  private _defaultDataset = new LogAllocationConfigDefaultDatasetOutputReference(this, "default_dataset");
  public get defaultDataset() {
    return this._defaultDataset;
  }
  public putDefaultDataset(value: LogAllocationConfigDefaultDataset) {
    this._defaultDataset.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDatasetInput() {
    return this._defaultDataset.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      dataset_allocation: cdktf.listMapper(logAllocationConfigDatasetAllocationToTerraform, true)(this._datasetAllocation.internalValue),
      default_dataset: logAllocationConfigDefaultDatasetToTerraform(this._defaultDataset.internalValue),
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
      dataset_allocation: {
        value: cdktf.listMapperHcl(logAllocationConfigDatasetAllocationToHclTerraform, true)(this._datasetAllocation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogAllocationConfigDatasetAllocationList",
      },
      default_dataset: {
        value: logAllocationConfigDefaultDatasetToHclTerraform(this._defaultDataset.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogAllocationConfigDefaultDatasetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
