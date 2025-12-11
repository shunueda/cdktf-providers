// https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRafayAksClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * apiversion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#apiversion DataRafayAksCluster#apiversion}
  */
  readonly apiversion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#id DataRafayAksCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * kind
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#kind DataRafayAksCluster#kind}
  */
  readonly kind?: string;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#metadata DataRafayAksCluster#metadata}
  */
  readonly metadata: DataRafayAksClusterMetadata[] | cdktf.IResolvable;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#spec DataRafayAksCluster#spec}
  */
  readonly spec?: DataRafayAksClusterSpec[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#timeouts DataRafayAksCluster#timeouts}
  */
  readonly timeouts?: DataRafayAksClusterTimeouts;
}
export interface DataRafayAksClusterMetadata {
  /**
  * labels for the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#labels DataRafayAksCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * AKS Cluster name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#name DataRafayAksCluster#name}
  */
  readonly name: string;
  /**
  * Project for the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#project DataRafayAksCluster#project}
  */
  readonly project: string;
}

export function dataRafayAksClusterMetadataToTerraform(struct?: DataRafayAksClusterMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    project: cdktf.stringToTerraform(struct!.project),
  }
}


export function dataRafayAksClusterMetadataToHclTerraform(struct?: DataRafayAksClusterMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._project = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels = value.labels;
      this._name = value.name;
      this._project = value.project;
    }
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }
}

export class DataRafayAksClusterMetadataList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterMetadata[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterMetadataOutputReference {
    return new DataRafayAksClusterMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigMetadata {
  /**
  * AKS cluster name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#name DataRafayAksCluster#name}
  */
  readonly name: string;
}

export function dataRafayAksClusterSpecClusterConfigMetadataToTerraform(struct?: DataRafayAksClusterSpecClusterConfigMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataRafayAksClusterSpecClusterConfigMetadataToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class DataRafayAksClusterSpecClusterConfigMetadataList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigMetadata[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigMetadataOutputReference {
    return new DataRafayAksClusterSpecClusterConfigMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowNotAllowedDates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#end DataRafayAksCluster#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#start DataRafayAksCluster#start}
  */
  readonly start?: string;
}

export function dataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowNotAllowedDatesToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowNotAllowedDates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowNotAllowedDatesToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowNotAllowedDates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowNotAllowedDatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowNotAllowedDates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowNotAllowedDates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowNotAllowedDatesList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowNotAllowedDates[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowNotAllowedDatesOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowNotAllowedDatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleAbsoluteMonthly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#day_of_month DataRafayAksCluster#day_of_month}
  */
  readonly dayOfMonth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#interval_months DataRafayAksCluster#interval_months}
  */
  readonly intervalMonths?: number;
}

export function dataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleAbsoluteMonthlyToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleAbsoluteMonthly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_month: cdktf.numberToTerraform(struct!.dayOfMonth),
    interval_months: cdktf.numberToTerraform(struct!.intervalMonths),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleAbsoluteMonthlyToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleAbsoluteMonthly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_month: {
      value: cdktf.numberToHclTerraform(struct!.dayOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_months: {
      value: cdktf.numberToHclTerraform(struct!.intervalMonths),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleAbsoluteMonthlyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleAbsoluteMonthly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfMonth = this._dayOfMonth;
    }
    if (this._intervalMonths !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalMonths = this._intervalMonths;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleAbsoluteMonthly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dayOfMonth = undefined;
      this._intervalMonths = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dayOfMonth = value.dayOfMonth;
      this._intervalMonths = value.intervalMonths;
    }
  }

  // day_of_month - computed: false, optional: true, required: false
  private _dayOfMonth?: number; 
  public get dayOfMonth() {
    return this.getNumberAttribute('day_of_month');
  }
  public set dayOfMonth(value: number) {
    this._dayOfMonth = value;
  }
  public resetDayOfMonth() {
    this._dayOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfMonthInput() {
    return this._dayOfMonth;
  }

  // interval_months - computed: false, optional: true, required: false
  private _intervalMonths?: number; 
  public get intervalMonths() {
    return this.getNumberAttribute('interval_months');
  }
  public set intervalMonths(value: number) {
    this._intervalMonths = value;
  }
  public resetIntervalMonths() {
    this._intervalMonths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalMonthsInput() {
    return this._intervalMonths;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleAbsoluteMonthlyList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleAbsoluteMonthly[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleAbsoluteMonthlyOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleAbsoluteMonthlyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleDaily {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#interval_days DataRafayAksCluster#interval_days}
  */
  readonly intervalDays?: number;
}

export function dataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleDailyToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleDaily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval_days: cdktf.numberToTerraform(struct!.intervalDays),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleDailyToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleDaily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval_days: {
      value: cdktf.numberToHclTerraform(struct!.intervalDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleDailyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleDaily | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._intervalDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalDays = this._intervalDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleDaily | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._intervalDays = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._intervalDays = value.intervalDays;
    }
  }

  // interval_days - computed: false, optional: true, required: false
  private _intervalDays?: number; 
  public get intervalDays() {
    return this.getNumberAttribute('interval_days');
  }
  public set intervalDays(value: number) {
    this._intervalDays = value;
  }
  public resetIntervalDays() {
    this._intervalDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalDaysInput() {
    return this._intervalDays;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleDailyList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleDaily[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleDailyOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleDailyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleRelativeMonthly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#day_of_week DataRafayAksCluster#day_of_week}
  */
  readonly dayOfWeek?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#interval_months DataRafayAksCluster#interval_months}
  */
  readonly intervalMonths?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#week_index DataRafayAksCluster#week_index}
  */
  readonly weekIndex?: string;
}

export function dataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleRelativeMonthlyToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleRelativeMonthly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
    interval_months: cdktf.numberToTerraform(struct!.intervalMonths),
    week_index: cdktf.stringToTerraform(struct!.weekIndex),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleRelativeMonthlyToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleRelativeMonthly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval_months: {
      value: cdktf.numberToHclTerraform(struct!.intervalMonths),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    week_index: {
      value: cdktf.stringToHclTerraform(struct!.weekIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleRelativeMonthlyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleRelativeMonthly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._intervalMonths !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalMonths = this._intervalMonths;
    }
    if (this._weekIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekIndex = this._weekIndex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleRelativeMonthly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dayOfWeek = undefined;
      this._intervalMonths = undefined;
      this._weekIndex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dayOfWeek = value.dayOfWeek;
      this._intervalMonths = value.intervalMonths;
      this._weekIndex = value.weekIndex;
    }
  }

  // day_of_week - computed: false, optional: true, required: false
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // interval_months - computed: false, optional: true, required: false
  private _intervalMonths?: number; 
  public get intervalMonths() {
    return this.getNumberAttribute('interval_months');
  }
  public set intervalMonths(value: number) {
    this._intervalMonths = value;
  }
  public resetIntervalMonths() {
    this._intervalMonths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalMonthsInput() {
    return this._intervalMonths;
  }

  // week_index - computed: false, optional: true, required: false
  private _weekIndex?: string; 
  public get weekIndex() {
    return this.getStringAttribute('week_index');
  }
  public set weekIndex(value: string) {
    this._weekIndex = value;
  }
  public resetWeekIndex() {
    this._weekIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekIndexInput() {
    return this._weekIndex;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleRelativeMonthlyList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleRelativeMonthly[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleRelativeMonthlyOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleRelativeMonthlyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleWeekly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#day_of_week DataRafayAksCluster#day_of_week}
  */
  readonly dayOfWeek?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#interval_weeks DataRafayAksCluster#interval_weeks}
  */
  readonly intervalWeeks?: number;
}

export function dataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleWeeklyToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleWeekly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
    interval_weeks: cdktf.numberToTerraform(struct!.intervalWeeks),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleWeeklyToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleWeekly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval_weeks: {
      value: cdktf.numberToHclTerraform(struct!.intervalWeeks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleWeeklyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleWeekly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._intervalWeeks !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalWeeks = this._intervalWeeks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleWeekly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dayOfWeek = undefined;
      this._intervalWeeks = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dayOfWeek = value.dayOfWeek;
      this._intervalWeeks = value.intervalWeeks;
    }
  }

  // day_of_week - computed: false, optional: true, required: false
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // interval_weeks - computed: false, optional: true, required: false
  private _intervalWeeks?: number; 
  public get intervalWeeks() {
    return this.getNumberAttribute('interval_weeks');
  }
  public set intervalWeeks(value: number) {
    this._intervalWeeks = value;
  }
  public resetIntervalWeeks() {
    this._intervalWeeks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalWeeksInput() {
    return this._intervalWeeks;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleWeeklyList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleWeekly[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleWeeklyOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleWeeklyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowSchedule {
  /**
  * absolute_monthly block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#absolute_monthly DataRafayAksCluster#absolute_monthly}
  */
  readonly absoluteMonthly?: DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleAbsoluteMonthly[] | cdktf.IResolvable;
  /**
  * daily block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#daily DataRafayAksCluster#daily}
  */
  readonly daily?: DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleDaily[] | cdktf.IResolvable;
  /**
  * relative_monthly block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#relative_monthly DataRafayAksCluster#relative_monthly}
  */
  readonly relativeMonthly?: DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleRelativeMonthly[] | cdktf.IResolvable;
  /**
  * weekly block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#weekly DataRafayAksCluster#weekly}
  */
  readonly weekly?: DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleWeekly[] | cdktf.IResolvable;
}

export function dataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    absolute_monthly: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleAbsoluteMonthlyToTerraform, true)(struct!.absoluteMonthly),
    daily: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleDailyToTerraform, true)(struct!.daily),
    relative_monthly: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleRelativeMonthlyToTerraform, true)(struct!.relativeMonthly),
    weekly: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleWeeklyToTerraform, true)(struct!.weekly),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    absolute_monthly: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleAbsoluteMonthlyToHclTerraform, true)(struct!.absoluteMonthly),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleAbsoluteMonthlyList",
    },
    daily: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleDailyToHclTerraform, true)(struct!.daily),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleDailyList",
    },
    relative_monthly: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleRelativeMonthlyToHclTerraform, true)(struct!.relativeMonthly),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleRelativeMonthlyList",
    },
    weekly: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleWeeklyToHclTerraform, true)(struct!.weekly),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleWeeklyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._absoluteMonthly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.absoluteMonthly = this._absoluteMonthly?.internalValue;
    }
    if (this._daily?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.daily = this._daily?.internalValue;
    }
    if (this._relativeMonthly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeMonthly = this._relativeMonthly?.internalValue;
    }
    if (this._weekly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekly = this._weekly?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._absoluteMonthly.internalValue = undefined;
      this._daily.internalValue = undefined;
      this._relativeMonthly.internalValue = undefined;
      this._weekly.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._absoluteMonthly.internalValue = value.absoluteMonthly;
      this._daily.internalValue = value.daily;
      this._relativeMonthly.internalValue = value.relativeMonthly;
      this._weekly.internalValue = value.weekly;
    }
  }

  // absolute_monthly - computed: false, optional: true, required: false
  private _absoluteMonthly = new DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleAbsoluteMonthlyList(this, "absolute_monthly", false);
  public get absoluteMonthly() {
    return this._absoluteMonthly;
  }
  public putAbsoluteMonthly(value: DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleAbsoluteMonthly[] | cdktf.IResolvable) {
    this._absoluteMonthly.internalValue = value;
  }
  public resetAbsoluteMonthly() {
    this._absoluteMonthly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get absoluteMonthlyInput() {
    return this._absoluteMonthly.internalValue;
  }

  // daily - computed: false, optional: true, required: false
  private _daily = new DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleDailyList(this, "daily", false);
  public get daily() {
    return this._daily;
  }
  public putDaily(value: DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleDaily[] | cdktf.IResolvable) {
    this._daily.internalValue = value;
  }
  public resetDaily() {
    this._daily.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyInput() {
    return this._daily.internalValue;
  }

  // relative_monthly - computed: false, optional: true, required: false
  private _relativeMonthly = new DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleRelativeMonthlyList(this, "relative_monthly", false);
  public get relativeMonthly() {
    return this._relativeMonthly;
  }
  public putRelativeMonthly(value: DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleRelativeMonthly[] | cdktf.IResolvable) {
    this._relativeMonthly.internalValue = value;
  }
  public resetRelativeMonthly() {
    this._relativeMonthly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeMonthlyInput() {
    return this._relativeMonthly.internalValue;
  }

  // weekly - computed: false, optional: true, required: false
  private _weekly = new DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleWeeklyList(this, "weekly", false);
  public get weekly() {
    return this._weekly;
  }
  public putWeekly(value: DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleWeekly[] | cdktf.IResolvable) {
    this._weekly.internalValue = value;
  }
  public resetWeekly() {
    this._weekly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyInput() {
    return this._weekly.internalValue;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowSchedule[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#duration_hours DataRafayAksCluster#duration_hours}
  */
  readonly durationHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#start_date DataRafayAksCluster#start_date}
  */
  readonly startDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#start_time DataRafayAksCluster#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#utc_offset DataRafayAksCluster#utc_offset}
  */
  readonly utcOffset?: string;
  /**
  * not_allowed_dates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#not_allowed_dates DataRafayAksCluster#not_allowed_dates}
  */
  readonly notAllowedDates?: DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowNotAllowedDates[] | cdktf.IResolvable;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#schedule DataRafayAksCluster#schedule}
  */
  readonly schedule?: DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowSchedule[] | cdktf.IResolvable;
}

export function dataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration_hours: cdktf.numberToTerraform(struct!.durationHours),
    start_date: cdktf.stringToTerraform(struct!.startDate),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    utc_offset: cdktf.stringToTerraform(struct!.utcOffset),
    not_allowed_dates: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowNotAllowedDatesToTerraform, true)(struct!.notAllowedDates),
    schedule: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleToTerraform, true)(struct!.schedule),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration_hours: {
      value: cdktf.numberToHclTerraform(struct!.durationHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_date: {
      value: cdktf.stringToHclTerraform(struct!.startDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    utc_offset: {
      value: cdktf.stringToHclTerraform(struct!.utcOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not_allowed_dates: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowNotAllowedDatesToHclTerraform, true)(struct!.notAllowedDates),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowNotAllowedDatesList",
    },
    schedule: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleToHclTerraform, true)(struct!.schedule),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._durationHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationHours = this._durationHours;
    }
    if (this._startDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDate = this._startDate;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._utcOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.utcOffset = this._utcOffset;
    }
    if (this._notAllowedDates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notAllowedDates = this._notAllowedDates?.internalValue;
    }
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._durationHours = undefined;
      this._startDate = undefined;
      this._startTime = undefined;
      this._utcOffset = undefined;
      this._notAllowedDates.internalValue = undefined;
      this._schedule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._durationHours = value.durationHours;
      this._startDate = value.startDate;
      this._startTime = value.startTime;
      this._utcOffset = value.utcOffset;
      this._notAllowedDates.internalValue = value.notAllowedDates;
      this._schedule.internalValue = value.schedule;
    }
  }

  // duration_hours - computed: false, optional: true, required: false
  private _durationHours?: number; 
  public get durationHours() {
    return this.getNumberAttribute('duration_hours');
  }
  public set durationHours(value: number) {
    this._durationHours = value;
  }
  public resetDurationHours() {
    this._durationHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationHoursInput() {
    return this._durationHours;
  }

  // start_date - computed: false, optional: true, required: false
  private _startDate?: string; 
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
  public set startDate(value: string) {
    this._startDate = value;
  }
  public resetStartDate() {
    this._startDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInput() {
    return this._startDate;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // utc_offset - computed: false, optional: true, required: false
  private _utcOffset?: string; 
  public get utcOffset() {
    return this.getStringAttribute('utc_offset');
  }
  public set utcOffset(value: string) {
    this._utcOffset = value;
  }
  public resetUtcOffset() {
    this._utcOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utcOffsetInput() {
    return this._utcOffset;
  }

  // not_allowed_dates - computed: false, optional: true, required: false
  private _notAllowedDates = new DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowNotAllowedDatesList(this, "not_allowed_dates", false);
  public get notAllowedDates() {
    return this._notAllowedDates;
  }
  public putNotAllowedDates(value: DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowNotAllowedDates[] | cdktf.IResolvable) {
    this._notAllowedDates.internalValue = value;
  }
  public resetNotAllowedDates() {
    this._notAllowedDates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notAllowedDatesInput() {
    return this._notAllowedDates.internalValue;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleList(this, "schedule", false);
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowSchedule[] | cdktf.IResolvable) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindow[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesNotAllowedTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#end DataRafayAksCluster#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#start DataRafayAksCluster#start}
  */
  readonly start?: string;
}

export function dataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesNotAllowedTimeToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesNotAllowedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesNotAllowedTimeToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesNotAllowedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesNotAllowedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesNotAllowedTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesNotAllowedTime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesNotAllowedTimeList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesNotAllowedTime[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesNotAllowedTimeOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesNotAllowedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesTimeInWeek {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#day DataRafayAksCluster#day}
  */
  readonly day?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#hour_slots DataRafayAksCluster#hour_slots}
  */
  readonly hourSlots?: number[];
}

export function dataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesTimeInWeekToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesTimeInWeek | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.stringToTerraform(struct!.day),
    hour_slots: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.hourSlots),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesTimeInWeekToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesTimeInWeek | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.stringToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hour_slots: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.hourSlots),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesTimeInWeekOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesTimeInWeek | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._hourSlots !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourSlots = this._hourSlots;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesTimeInWeek | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._day = undefined;
      this._hourSlots = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._day = value.day;
      this._hourSlots = value.hourSlots;
    }
  }

  // day - computed: false, optional: true, required: false
  private _day?: string; 
  public get day() {
    return this.getStringAttribute('day');
  }
  public set day(value: string) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // hour_slots - computed: false, optional: true, required: false
  private _hourSlots?: number[]; 
  public get hourSlots() {
    return this.getNumberListAttribute('hour_slots');
  }
  public set hourSlots(value: number[]) {
    this._hourSlots = value;
  }
  public resetHourSlots() {
    this._hourSlots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourSlotsInput() {
    return this._hourSlots;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesTimeInWeekList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesTimeInWeek[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesTimeInWeekOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesTimeInWeekOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsProperties {
  /**
  * maintenance_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#maintenance_window DataRafayAksCluster#maintenance_window}
  */
  readonly maintenanceWindow?: DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindow[] | cdktf.IResolvable;
  /**
  * not_allowed_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#not_allowed_time DataRafayAksCluster#not_allowed_time}
  */
  readonly notAllowedTime?: DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesNotAllowedTime[] | cdktf.IResolvable;
  /**
  * time_in_week block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#time_in_week DataRafayAksCluster#time_in_week}
  */
  readonly timeInWeek?: DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesTimeInWeek[] | cdktf.IResolvable;
}

export function dataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maintenance_window: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowToTerraform, true)(struct!.maintenanceWindow),
    not_allowed_time: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesNotAllowedTimeToTerraform, true)(struct!.notAllowedTime),
    time_in_week: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesTimeInWeekToTerraform, true)(struct!.timeInWeek),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maintenance_window: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowToHclTerraform, true)(struct!.maintenanceWindow),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowList",
    },
    not_allowed_time: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesNotAllowedTimeToHclTerraform, true)(struct!.notAllowedTime),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesNotAllowedTimeList",
    },
    time_in_week: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesTimeInWeekToHclTerraform, true)(struct!.timeInWeek),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesTimeInWeekList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maintenanceWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceWindow = this._maintenanceWindow?.internalValue;
    }
    if (this._notAllowedTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notAllowedTime = this._notAllowedTime?.internalValue;
    }
    if (this._timeInWeek?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeInWeek = this._timeInWeek?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maintenanceWindow.internalValue = undefined;
      this._notAllowedTime.internalValue = undefined;
      this._timeInWeek.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maintenanceWindow.internalValue = value.maintenanceWindow;
      this._notAllowedTime.internalValue = value.notAllowedTime;
      this._timeInWeek.internalValue = value.timeInWeek;
    }
  }

  // maintenance_window - computed: false, optional: true, required: false
  private _maintenanceWindow = new DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowList(this, "maintenance_window", false);
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindow[] | cdktf.IResolvable) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }

  // not_allowed_time - computed: false, optional: true, required: false
  private _notAllowedTime = new DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesNotAllowedTimeList(this, "not_allowed_time", false);
  public get notAllowedTime() {
    return this._notAllowedTime;
  }
  public putNotAllowedTime(value: DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesNotAllowedTime[] | cdktf.IResolvable) {
    this._notAllowedTime.internalValue = value;
  }
  public resetNotAllowedTime() {
    this._notAllowedTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notAllowedTimeInput() {
    return this._notAllowedTime.internalValue;
  }

  // time_in_week - computed: false, optional: true, required: false
  private _timeInWeek = new DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesTimeInWeekList(this, "time_in_week", false);
  public get timeInWeek() {
    return this._timeInWeek;
  }
  public putTimeInWeek(value: DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesTimeInWeek[] | cdktf.IResolvable) {
    this._timeInWeek.internalValue = value;
  }
  public resetTimeInWeek() {
    this._timeInWeek.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInWeekInput() {
    return this._timeInWeek.internalValue;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsProperties[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#api_version DataRafayAksCluster#api_version}
  */
  readonly apiVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#name DataRafayAksCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#type DataRafayAksCluster#type}
  */
  readonly type?: string;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#properties DataRafayAksCluster#properties}
  */
  readonly properties: DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsProperties[] | cdktf.IResolvable;
}

export function dataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    properties: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesToTerraform, true)(struct!.properties),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesToHclTerraform, true)(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._name = undefined;
      this._type = undefined;
      this._properties.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._name = value.name;
      this._type = value.type;
      this._properties.internalValue = value.properties;
    }
  }

  // api_version - computed: false, optional: false, required: true
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // properties - computed: false, optional: false, required: true
  private _properties = new DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
  public putProperties(value: DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsProperties[] | cdktf.IResolvable) {
    this._properties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurations[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileRegistries {
  /**
  * The name of the Azure Container Registry resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#acr_name DataRafayAksCluster#acr_name}
  */
  readonly acrName: string;
  /**
  * The location of the Azure Container Registry resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#resource_group_name DataRafayAksCluster#resource_group_name}
  */
  readonly resourceGroupName?: string;
}

export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileRegistriesToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileRegistries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acr_name: cdktf.stringToTerraform(struct!.acrName),
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileRegistriesToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileRegistries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acr_name: {
      value: cdktf.stringToHclTerraform(struct!.acrName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileRegistriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileRegistries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acrName !== undefined) {
      hasAnyValues = true;
      internalValueResult.acrName = this._acrName;
    }
    if (this._resourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupName = this._resourceGroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileRegistries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acrName = undefined;
      this._resourceGroupName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acrName = value.acrName;
      this._resourceGroupName = value.resourceGroupName;
    }
  }

  // acr_name - computed: false, optional: false, required: true
  private _acrName?: string; 
  public get acrName() {
    return this.getStringAttribute('acr_name');
  }
  public set acrName(value: string) {
    this._acrName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acrNameInput() {
    return this._acrName;
  }

  // resource_group_name - computed: false, optional: true, required: false
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  public resetResourceGroupName() {
    this._resourceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileRegistriesList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileRegistries[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileRegistriesOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileRegistriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfile {
  /**
  * The name of the Azure Container Registry resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#acr_name DataRafayAksCluster#acr_name}
  */
  readonly acrName?: string;
  /**
  * If not specified, defaults to the resource group of the managed cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#resource_group_name DataRafayAksCluster#resource_group_name}
  */
  readonly resourceGroupName?: string;
  /**
  * registries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#registries DataRafayAksCluster#registries}
  */
  readonly registries?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileRegistries[] | cdktf.IResolvable;
}

export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acr_name: cdktf.stringToTerraform(struct!.acrName),
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
    registries: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileRegistriesToTerraform, true)(struct!.registries),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acr_name: {
      value: cdktf.stringToHclTerraform(struct!.acrName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registries: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileRegistriesToHclTerraform, true)(struct!.registries),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileRegistriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acrName !== undefined) {
      hasAnyValues = true;
      internalValueResult.acrName = this._acrName;
    }
    if (this._resourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupName = this._resourceGroupName;
    }
    if (this._registries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.registries = this._registries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acrName = undefined;
      this._resourceGroupName = undefined;
      this._registries.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acrName = value.acrName;
      this._resourceGroupName = value.resourceGroupName;
      this._registries.internalValue = value.registries;
    }
  }

  // acr_name - computed: false, optional: true, required: false
  private _acrName?: string; 
  public get acrName() {
    return this.getStringAttribute('acr_name');
  }
  public set acrName(value: string) {
    this._acrName = value;
  }
  public resetAcrName() {
    this._acrName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acrNameInput() {
    return this._acrName;
  }

  // resource_group_name - computed: false, optional: true, required: false
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  public resetResourceGroupName() {
    this._resourceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // registries - computed: false, optional: true, required: false
  private _registries = new DataRafayAksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileRegistriesList(this, "registries", false);
  public get registries() {
    return this._registries;
  }
  public putRegistries(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileRegistries[] | cdktf.IResolvable) {
    this._registries.internalValue = value;
  }
  public resetRegistries() {
    this._registries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registriesInput() {
    return this._registries.internalValue;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfile[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadata {
  /**
  * If not specified, defaults to the resource group of the managed cluster. Valid only if the Log analytics workspace is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#oms_workspace_location DataRafayAksCluster#oms_workspace_location}
  */
  readonly omsWorkspaceLocation?: string;
  /**
  * acr_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#acr_profile DataRafayAksCluster#acr_profile}
  */
  readonly acrProfile?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfile[] | cdktf.IResolvable;
}

export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oms_workspace_location: cdktf.stringToTerraform(struct!.omsWorkspaceLocation),
    acr_profile: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileToTerraform, true)(struct!.acrProfile),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oms_workspace_location: {
      value: cdktf.stringToHclTerraform(struct!.omsWorkspaceLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acr_profile: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileToHclTerraform, true)(struct!.acrProfile),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._omsWorkspaceLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.omsWorkspaceLocation = this._omsWorkspaceLocation;
    }
    if (this._acrProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acrProfile = this._acrProfile?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._omsWorkspaceLocation = undefined;
      this._acrProfile.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._omsWorkspaceLocation = value.omsWorkspaceLocation;
      this._acrProfile.internalValue = value.acrProfile;
    }
  }

  // oms_workspace_location - computed: false, optional: true, required: false
  private _omsWorkspaceLocation?: string; 
  public get omsWorkspaceLocation() {
    return this.getStringAttribute('oms_workspace_location');
  }
  public set omsWorkspaceLocation(value: string) {
    this._omsWorkspaceLocation = value;
  }
  public resetOmsWorkspaceLocation() {
    this._omsWorkspaceLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get omsWorkspaceLocationInput() {
    return this._omsWorkspaceLocation;
  }

  // acr_profile - computed: false, optional: true, required: false
  private _acrProfile = new DataRafayAksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileList(this, "acr_profile", false);
  public get acrProfile() {
    return this._acrProfile;
  }
  public putAcrProfile(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfile[] | cdktf.IResolvable) {
    this._acrProfile.internalValue = value;
  }
  public resetAcrProfile() {
    this._acrProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acrProfileInput() {
    return this._acrProfile.internalValue;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadata[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecManagedClusterExtendedLocation {
  /**
  * The AKS managed cluster extended location name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#name DataRafayAksCluster#name}
  */
  readonly name?: string;
  /**
  * The AKS managed cluster extended location type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#type DataRafayAksCluster#type}
  */
  readonly type?: string;
}

export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterExtendedLocationToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterExtendedLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterExtendedLocationToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterExtendedLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterExtendedLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecManagedClusterExtendedLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterExtendedLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterExtendedLocationList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecManagedClusterExtendedLocation[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecManagedClusterExtendedLocationOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecManagedClusterExtendedLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecManagedClusterIdentity {
  /**
  * Identity type for the AKS cluster. For more information see use managed identities in AKS. Valid values are SystemAssigned, UserAssigned, None.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#type DataRafayAksCluster#type}
  */
  readonly type?: string;
  /**
  * Arm Resource Ids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#user_assigned_identities DataRafayAksCluster#user_assigned_identities}
  */
  readonly userAssignedIdentities?: { [key: string]: string };
}

export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterIdentityToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    user_assigned_identities: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.userAssignedIdentities),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterIdentityToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_assigned_identities: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.userAssignedIdentities),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterIdentityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecManagedClusterIdentity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userAssignedIdentities !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAssignedIdentities = this._userAssignedIdentities;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterIdentity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._userAssignedIdentities = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._userAssignedIdentities = value.userAssignedIdentities;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // user_assigned_identities - computed: false, optional: true, required: false
  private _userAssignedIdentities?: { [key: string]: string }; 
  public get userAssignedIdentities() {
    return this.getStringMapAttribute('user_assigned_identities');
  }
  public set userAssignedIdentities(value: { [key: string]: string }) {
    this._userAssignedIdentities = value;
  }
  public resetUserAssignedIdentities() {
    this._userAssignedIdentities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAssignedIdentitiesInput() {
    return this._userAssignedIdentities;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterIdentityList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecManagedClusterIdentity[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecManagedClusterIdentityOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecManagedClusterIdentityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAadProfile {
  /**
  * The AKS managed cluster aad profile admin group object ids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#admin_group_object_ids DataRafayAksCluster#admin_group_object_ids}
  */
  readonly adminGroupObjectIds?: string[];
  /**
  * The AKS managed cluster aad profile client app id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#client_app_id DataRafayAksCluster#client_app_id}
  */
  readonly clientAppId?: string;
  /**
  * Whether or not to enable azure rbac for kubernetes authorization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#enable_azure_rbac DataRafayAksCluster#enable_azure_rbac}
  */
  readonly enableAzureRbac?: boolean | cdktf.IResolvable;
  /**
  * Whether or not to enable managed aad
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#managed DataRafayAksCluster#managed}
  */
  readonly managed?: boolean | cdktf.IResolvable;
  /**
  * The server AAD application ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#server_app_id DataRafayAksCluster#server_app_id}
  */
  readonly serverAppId?: string;
  /**
  * The AKS managed cluster aad profile server app secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#server_app_secret DataRafayAksCluster#server_app_secret}
  */
  readonly serverAppSecret?: string;
  /**
  * The AKS managed cluster tenant id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#tenant_id DataRafayAksCluster#tenant_id}
  */
  readonly tenantId?: string;
}

export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAadProfileToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAadProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_group_object_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.adminGroupObjectIds),
    client_app_id: cdktf.stringToTerraform(struct!.clientAppId),
    enable_azure_rbac: cdktf.booleanToTerraform(struct!.enableAzureRbac),
    managed: cdktf.booleanToTerraform(struct!.managed),
    server_app_id: cdktf.stringToTerraform(struct!.serverAppId),
    server_app_secret: cdktf.stringToTerraform(struct!.serverAppSecret),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAadProfileToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAadProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_group_object_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.adminGroupObjectIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    client_app_id: {
      value: cdktf.stringToHclTerraform(struct!.clientAppId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_azure_rbac: {
      value: cdktf.booleanToHclTerraform(struct!.enableAzureRbac),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    managed: {
      value: cdktf.booleanToHclTerraform(struct!.managed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    server_app_id: {
      value: cdktf.stringToHclTerraform(struct!.serverAppId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_app_secret: {
      value: cdktf.stringToHclTerraform(struct!.serverAppSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAadProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAadProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminGroupObjectIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminGroupObjectIds = this._adminGroupObjectIds;
    }
    if (this._clientAppId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAppId = this._clientAppId;
    }
    if (this._enableAzureRbac !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAzureRbac = this._enableAzureRbac;
    }
    if (this._managed !== undefined) {
      hasAnyValues = true;
      internalValueResult.managed = this._managed;
    }
    if (this._serverAppId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAppId = this._serverAppId;
    }
    if (this._serverAppSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAppSecret = this._serverAppSecret;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAadProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminGroupObjectIds = undefined;
      this._clientAppId = undefined;
      this._enableAzureRbac = undefined;
      this._managed = undefined;
      this._serverAppId = undefined;
      this._serverAppSecret = undefined;
      this._tenantId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminGroupObjectIds = value.adminGroupObjectIds;
      this._clientAppId = value.clientAppId;
      this._enableAzureRbac = value.enableAzureRbac;
      this._managed = value.managed;
      this._serverAppId = value.serverAppId;
      this._serverAppSecret = value.serverAppSecret;
      this._tenantId = value.tenantId;
    }
  }

  // admin_group_object_ids - computed: false, optional: true, required: false
  private _adminGroupObjectIds?: string[]; 
  public get adminGroupObjectIds() {
    return this.getListAttribute('admin_group_object_ids');
  }
  public set adminGroupObjectIds(value: string[]) {
    this._adminGroupObjectIds = value;
  }
  public resetAdminGroupObjectIds() {
    this._adminGroupObjectIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminGroupObjectIdsInput() {
    return this._adminGroupObjectIds;
  }

  // client_app_id - computed: false, optional: true, required: false
  private _clientAppId?: string; 
  public get clientAppId() {
    return this.getStringAttribute('client_app_id');
  }
  public set clientAppId(value: string) {
    this._clientAppId = value;
  }
  public resetClientAppId() {
    this._clientAppId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAppIdInput() {
    return this._clientAppId;
  }

  // enable_azure_rbac - computed: false, optional: true, required: false
  private _enableAzureRbac?: boolean | cdktf.IResolvable; 
  public get enableAzureRbac() {
    return this.getBooleanAttribute('enable_azure_rbac');
  }
  public set enableAzureRbac(value: boolean | cdktf.IResolvable) {
    this._enableAzureRbac = value;
  }
  public resetEnableAzureRbac() {
    this._enableAzureRbac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAzureRbacInput() {
    return this._enableAzureRbac;
  }

  // managed - computed: false, optional: true, required: false
  private _managed?: boolean | cdktf.IResolvable; 
  public get managed() {
    return this.getBooleanAttribute('managed');
  }
  public set managed(value: boolean | cdktf.IResolvable) {
    this._managed = value;
  }
  public resetManaged() {
    this._managed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInput() {
    return this._managed;
  }

  // server_app_id - computed: false, optional: true, required: false
  private _serverAppId?: string; 
  public get serverAppId() {
    return this.getStringAttribute('server_app_id');
  }
  public set serverAppId(value: string) {
    this._serverAppId = value;
  }
  public resetServerAppId() {
    this._serverAppId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAppIdInput() {
    return this._serverAppId;
  }

  // server_app_secret - computed: false, optional: true, required: false
  private _serverAppSecret?: string; 
  public get serverAppSecret() {
    return this.getStringAttribute('server_app_secret');
  }
  public set serverAppSecret(value: string) {
    this._serverAppSecret = value;
  }
  public resetServerAppSecret() {
    this._serverAppSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAppSecretInput() {
    return this._serverAppSecret;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAadProfileList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAadProfile[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAadProfileOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAadProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderConfig {
  /**
  * Whether to enable Secret Rotation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#enable_secret_rotation DataRafayAksCluster#enable_secret_rotation}
  */
  readonly enableSecretRotation: string;
  /**
  * Interval to poll for secret rotation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#rotation_poll_interval DataRafayAksCluster#rotation_poll_interval}
  */
  readonly rotationPollInterval: string;
}

export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderConfigToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_secret_rotation: cdktf.stringToTerraform(struct!.enableSecretRotation),
    rotation_poll_interval: cdktf.stringToTerraform(struct!.rotationPollInterval),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderConfigToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_secret_rotation: {
      value: cdktf.stringToHclTerraform(struct!.enableSecretRotation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rotation_poll_interval: {
      value: cdktf.stringToHclTerraform(struct!.rotationPollInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableSecretRotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSecretRotation = this._enableSecretRotation;
    }
    if (this._rotationPollInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.rotationPollInterval = this._rotationPollInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableSecretRotation = undefined;
      this._rotationPollInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableSecretRotation = value.enableSecretRotation;
      this._rotationPollInterval = value.rotationPollInterval;
    }
  }

  // enable_secret_rotation - computed: false, optional: false, required: true
  private _enableSecretRotation?: string; 
  public get enableSecretRotation() {
    return this.getStringAttribute('enable_secret_rotation');
  }
  public set enableSecretRotation(value: string) {
    this._enableSecretRotation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSecretRotationInput() {
    return this._enableSecretRotation;
  }

  // rotation_poll_interval - computed: false, optional: false, required: true
  private _rotationPollInterval?: string; 
  public get rotationPollInterval() {
    return this.getStringAttribute('rotation_poll_interval');
  }
  public set rotationPollInterval(value: string) {
    this._rotationPollInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationPollIntervalInput() {
    return this._rotationPollInterval;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderConfigList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderConfig[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderConfigOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProvider {
  /**
  * Whether to enable Azure Key Vault Secrets Provider in Addon Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#enabled DataRafayAksCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#config DataRafayAksCluster#config}
  */
  readonly config?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderConfig[] | cdktf.IResolvable;
}

export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    config: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderConfigToTerraform, true)(struct!.config),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    config: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderConfigToHclTerraform, true)(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._config.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._config.internalValue = value.config;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // config - computed: false, optional: true, required: false
  private _config = new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderConfigList(this, "config", false);
  public get config() {
    return this._config;
  }
  public putConfig(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderConfig[] | cdktf.IResolvable) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProvider[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzurePolicy {
  /**
  * Config for HTTP Application Routing or Azure Policy in Addon Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#config DataRafayAksCluster#config}
  */
  readonly config?: string;
  /**
  * Whether to enable HTTP Application Routing or Azure Policy in Addon Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#enabled DataRafayAksCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzurePolicyToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzurePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.stringToTerraform(struct!.config),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzurePolicyToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzurePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.stringToHclTerraform(struct!.config),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzurePolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzurePolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzurePolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._enabled = value.enabled;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzurePolicyList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzurePolicy[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzurePolicyOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzurePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesHttpApplicationRouting {
  /**
  * Config for HTTP Application Routing or Azure Policy in Addon Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#config DataRafayAksCluster#config}
  */
  readonly config?: string;
  /**
  * Whether to enable HTTP Application Routing or Azure Policy in Addon Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#enabled DataRafayAksCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesHttpApplicationRoutingToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesHttpApplicationRouting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.stringToTerraform(struct!.config),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesHttpApplicationRoutingToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesHttpApplicationRouting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.stringToHclTerraform(struct!.config),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesHttpApplicationRoutingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesHttpApplicationRouting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesHttpApplicationRouting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._enabled = value.enabled;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesHttpApplicationRoutingList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesHttpApplicationRouting[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesHttpApplicationRoutingOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesHttpApplicationRoutingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayConfig {
  /**
  * Resource Id of an existing Application Gateway to use with AGIC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#application_gateway_id DataRafayAksCluster#application_gateway_id}
  */
  readonly applicationGatewayId?: string;
  /**
  * Name of the application gateway to create/use in the node resource group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#application_gateway_name DataRafayAksCluster#application_gateway_name}
  */
  readonly applicationGatewayName?: string;
  /**
  * Subnet CIDR to use for a new subnet created to deploy the Application Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#subnet_cidr DataRafayAksCluster#subnet_cidr}
  */
  readonly subnetCidr?: string;
  /**
  * Resource Id of an existing Subnet used to deploy the Application Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#subnet_id DataRafayAksCluster#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Specify the namespace, which AGIC should watch. This could be a single string value, or a comma-separated list of namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#watch_namespace DataRafayAksCluster#watch_namespace}
  */
  readonly watchNamespace?: string;
}

export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayConfigToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_gateway_id: cdktf.stringToTerraform(struct!.applicationGatewayId),
    application_gateway_name: cdktf.stringToTerraform(struct!.applicationGatewayName),
    subnet_cidr: cdktf.stringToTerraform(struct!.subnetCidr),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    watch_namespace: cdktf.stringToTerraform(struct!.watchNamespace),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayConfigToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_gateway_id: {
      value: cdktf.stringToHclTerraform(struct!.applicationGatewayId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_gateway_name: {
      value: cdktf.stringToHclTerraform(struct!.applicationGatewayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_cidr: {
      value: cdktf.stringToHclTerraform(struct!.subnetCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    watch_namespace: {
      value: cdktf.stringToHclTerraform(struct!.watchNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationGatewayId !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationGatewayId = this._applicationGatewayId;
    }
    if (this._applicationGatewayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationGatewayName = this._applicationGatewayName;
    }
    if (this._subnetCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetCidr = this._subnetCidr;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._watchNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.watchNamespace = this._watchNamespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationGatewayId = undefined;
      this._applicationGatewayName = undefined;
      this._subnetCidr = undefined;
      this._subnetId = undefined;
      this._watchNamespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationGatewayId = value.applicationGatewayId;
      this._applicationGatewayName = value.applicationGatewayName;
      this._subnetCidr = value.subnetCidr;
      this._subnetId = value.subnetId;
      this._watchNamespace = value.watchNamespace;
    }
  }

  // application_gateway_id - computed: false, optional: true, required: false
  private _applicationGatewayId?: string; 
  public get applicationGatewayId() {
    return this.getStringAttribute('application_gateway_id');
  }
  public set applicationGatewayId(value: string) {
    this._applicationGatewayId = value;
  }
  public resetApplicationGatewayId() {
    this._applicationGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationGatewayIdInput() {
    return this._applicationGatewayId;
  }

  // application_gateway_name - computed: false, optional: true, required: false
  private _applicationGatewayName?: string; 
  public get applicationGatewayName() {
    return this.getStringAttribute('application_gateway_name');
  }
  public set applicationGatewayName(value: string) {
    this._applicationGatewayName = value;
  }
  public resetApplicationGatewayName() {
    this._applicationGatewayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationGatewayNameInput() {
    return this._applicationGatewayName;
  }

  // subnet_cidr - computed: false, optional: true, required: false
  private _subnetCidr?: string; 
  public get subnetCidr() {
    return this.getStringAttribute('subnet_cidr');
  }
  public set subnetCidr(value: string) {
    this._subnetCidr = value;
  }
  public resetSubnetCidr() {
    this._subnetCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetCidrInput() {
    return this._subnetCidr;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // watch_namespace - computed: false, optional: true, required: false
  private _watchNamespace?: string; 
  public get watchNamespace() {
    return this.getStringAttribute('watch_namespace');
  }
  public set watchNamespace(value: string) {
    this._watchNamespace = value;
  }
  public resetWatchNamespace() {
    this._watchNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watchNamespaceInput() {
    return this._watchNamespace;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayConfigList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayConfig[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayConfigOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGateway {
  /**
  * Whether to enable Ingress Application Gateway in Addon Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#enabled DataRafayAksCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#config DataRafayAksCluster#config}
  */
  readonly config?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayConfig[] | cdktf.IResolvable;
}

export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    config: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayConfigToTerraform, true)(struct!.config),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    config: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayConfigToHclTerraform, true)(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGateway | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGateway | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._config.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._config.internalValue = value.config;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // config - computed: false, optional: true, required: false
  private _config = new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayConfigList(this, "config", false);
  public get config() {
    return this._config;
  }
  public putConfig(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayConfig[] | cdktf.IResolvable) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGateway[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentConfig {
  /**
  * ID of the log analytics workspace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#log_analytics_workspace_resource_id DataRafayAksCluster#log_analytics_workspace_resource_id}
  */
  readonly logAnalyticsWorkspaceResourceId: string;
}

export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentConfigToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_analytics_workspace_resource_id: cdktf.stringToTerraform(struct!.logAnalyticsWorkspaceResourceId),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentConfigToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_analytics_workspace_resource_id: {
      value: cdktf.stringToHclTerraform(struct!.logAnalyticsWorkspaceResourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logAnalyticsWorkspaceResourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAnalyticsWorkspaceResourceId = this._logAnalyticsWorkspaceResourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logAnalyticsWorkspaceResourceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logAnalyticsWorkspaceResourceId = value.logAnalyticsWorkspaceResourceId;
    }
  }

  // log_analytics_workspace_resource_id - computed: false, optional: false, required: true
  private _logAnalyticsWorkspaceResourceId?: string; 
  public get logAnalyticsWorkspaceResourceId() {
    return this.getStringAttribute('log_analytics_workspace_resource_id');
  }
  public set logAnalyticsWorkspaceResourceId(value: string) {
    this._logAnalyticsWorkspaceResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsWorkspaceResourceIdInput() {
    return this._logAnalyticsWorkspaceResourceId;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentConfigList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentConfig[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentConfigOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgent {
  /**
  * Whether to enable OMS Agent in Addon Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#enabled DataRafayAksCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#config DataRafayAksCluster#config}
  */
  readonly config?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentConfig[] | cdktf.IResolvable;
}

export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    config: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentConfigToTerraform, true)(struct!.config),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    config: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentConfigToHclTerraform, true)(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._config.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._config.internalValue = value.config;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // config - computed: false, optional: true, required: false
  private _config = new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentConfigList(this, "config", false);
  public get config() {
    return this._config;
  }
  public putConfig(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentConfig[] | cdktf.IResolvable) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgent[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfiles {
  /**
  * azure_keyvault_secrets_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#azure_keyvault_secrets_provider DataRafayAksCluster#azure_keyvault_secrets_provider}
  */
  readonly azureKeyvaultSecretsProvider?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProvider[] | cdktf.IResolvable;
  /**
  * azure_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#azure_policy DataRafayAksCluster#azure_policy}
  */
  readonly azurePolicy?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzurePolicy[] | cdktf.IResolvable;
  /**
  * http_application_routing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#http_application_routing DataRafayAksCluster#http_application_routing}
  */
  readonly httpApplicationRouting?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesHttpApplicationRouting[] | cdktf.IResolvable;
  /**
  * ingress_application_gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#ingress_application_gateway DataRafayAksCluster#ingress_application_gateway}
  */
  readonly ingressApplicationGateway?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGateway[] | cdktf.IResolvable;
  /**
  * oms_agent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#oms_agent DataRafayAksCluster#oms_agent}
  */
  readonly omsAgent?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgent[] | cdktf.IResolvable;
}

export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_keyvault_secrets_provider: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderToTerraform, true)(struct!.azureKeyvaultSecretsProvider),
    azure_policy: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzurePolicyToTerraform, true)(struct!.azurePolicy),
    http_application_routing: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesHttpApplicationRoutingToTerraform, true)(struct!.httpApplicationRouting),
    ingress_application_gateway: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayToTerraform, true)(struct!.ingressApplicationGateway),
    oms_agent: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentToTerraform, true)(struct!.omsAgent),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_keyvault_secrets_provider: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderToHclTerraform, true)(struct!.azureKeyvaultSecretsProvider),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderList",
    },
    azure_policy: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzurePolicyToHclTerraform, true)(struct!.azurePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzurePolicyList",
    },
    http_application_routing: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesHttpApplicationRoutingToHclTerraform, true)(struct!.httpApplicationRouting),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesHttpApplicationRoutingList",
    },
    ingress_application_gateway: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayToHclTerraform, true)(struct!.ingressApplicationGateway),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayList",
    },
    oms_agent: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentToHclTerraform, true)(struct!.omsAgent),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfiles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureKeyvaultSecretsProvider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureKeyvaultSecretsProvider = this._azureKeyvaultSecretsProvider?.internalValue;
    }
    if (this._azurePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azurePolicy = this._azurePolicy?.internalValue;
    }
    if (this._httpApplicationRouting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpApplicationRouting = this._httpApplicationRouting?.internalValue;
    }
    if (this._ingressApplicationGateway?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressApplicationGateway = this._ingressApplicationGateway?.internalValue;
    }
    if (this._omsAgent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.omsAgent = this._omsAgent?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azureKeyvaultSecretsProvider.internalValue = undefined;
      this._azurePolicy.internalValue = undefined;
      this._httpApplicationRouting.internalValue = undefined;
      this._ingressApplicationGateway.internalValue = undefined;
      this._omsAgent.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._azureKeyvaultSecretsProvider.internalValue = value.azureKeyvaultSecretsProvider;
      this._azurePolicy.internalValue = value.azurePolicy;
      this._httpApplicationRouting.internalValue = value.httpApplicationRouting;
      this._ingressApplicationGateway.internalValue = value.ingressApplicationGateway;
      this._omsAgent.internalValue = value.omsAgent;
    }
  }

  // azure_keyvault_secrets_provider - computed: false, optional: true, required: false
  private _azureKeyvaultSecretsProvider = new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderList(this, "azure_keyvault_secrets_provider", false);
  public get azureKeyvaultSecretsProvider() {
    return this._azureKeyvaultSecretsProvider;
  }
  public putAzureKeyvaultSecretsProvider(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProvider[] | cdktf.IResolvable) {
    this._azureKeyvaultSecretsProvider.internalValue = value;
  }
  public resetAzureKeyvaultSecretsProvider() {
    this._azureKeyvaultSecretsProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureKeyvaultSecretsProviderInput() {
    return this._azureKeyvaultSecretsProvider.internalValue;
  }

  // azure_policy - computed: false, optional: true, required: false
  private _azurePolicy = new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzurePolicyList(this, "azure_policy", false);
  public get azurePolicy() {
    return this._azurePolicy;
  }
  public putAzurePolicy(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzurePolicy[] | cdktf.IResolvable) {
    this._azurePolicy.internalValue = value;
  }
  public resetAzurePolicy() {
    this._azurePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azurePolicyInput() {
    return this._azurePolicy.internalValue;
  }

  // http_application_routing - computed: false, optional: true, required: false
  private _httpApplicationRouting = new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesHttpApplicationRoutingList(this, "http_application_routing", false);
  public get httpApplicationRouting() {
    return this._httpApplicationRouting;
  }
  public putHttpApplicationRouting(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesHttpApplicationRouting[] | cdktf.IResolvable) {
    this._httpApplicationRouting.internalValue = value;
  }
  public resetHttpApplicationRouting() {
    this._httpApplicationRouting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpApplicationRoutingInput() {
    return this._httpApplicationRouting.internalValue;
  }

  // ingress_application_gateway - computed: false, optional: true, required: false
  private _ingressApplicationGateway = new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayList(this, "ingress_application_gateway", false);
  public get ingressApplicationGateway() {
    return this._ingressApplicationGateway;
  }
  public putIngressApplicationGateway(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGateway[] | cdktf.IResolvable) {
    this._ingressApplicationGateway.internalValue = value;
  }
  public resetIngressApplicationGateway() {
    this._ingressApplicationGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressApplicationGatewayInput() {
    return this._ingressApplicationGateway.internalValue;
  }

  // oms_agent - computed: false, optional: true, required: false
  private _omsAgent = new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentList(this, "oms_agent", false);
  public get omsAgent() {
    return this._omsAgent;
  }
  public putOmsAgent(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgent[] | cdktf.IResolvable) {
    this._omsAgent.internalValue = value;
  }
  public resetOmsAgent() {
    this._omsAgent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get omsAgentInput() {
    return this._omsAgent.internalValue;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfiles[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesApiServerAccessProfile {
  /**
  * The AKS managed cluster properties server access profile server access profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#authorized_ipr_ranges DataRafayAksCluster#authorized_ipr_ranges}
  */
  readonly authorizedIprRanges?: string[];
  /**
  * Enable private cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#enable_private_cluster DataRafayAksCluster#enable_private_cluster}
  */
  readonly enablePrivateCluster?: boolean | cdktf.IResolvable;
  /**
  * Whether or not to create additional public fqdn for private cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#enable_private_cluster_public_fqdn DataRafayAksCluster#enable_private_cluster_public_fqdn}
  */
  readonly enablePrivateClusterPublicFqdn?: boolean | cdktf.IResolvable;
  /**
  * The AKS managed cluster properties private dns zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#private_dns_zone DataRafayAksCluster#private_dns_zone}
  */
  readonly privateDnsZone?: string;
}

export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesApiServerAccessProfileToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesApiServerAccessProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorized_ipr_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.authorizedIprRanges),
    enable_private_cluster: cdktf.booleanToTerraform(struct!.enablePrivateCluster),
    enable_private_cluster_public_fqdn: cdktf.booleanToTerraform(struct!.enablePrivateClusterPublicFqdn),
    private_dns_zone: cdktf.stringToTerraform(struct!.privateDnsZone),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesApiServerAccessProfileToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesApiServerAccessProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorized_ipr_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.authorizedIprRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enable_private_cluster: {
      value: cdktf.booleanToHclTerraform(struct!.enablePrivateCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_private_cluster_public_fqdn: {
      value: cdktf.booleanToHclTerraform(struct!.enablePrivateClusterPublicFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    private_dns_zone: {
      value: cdktf.stringToHclTerraform(struct!.privateDnsZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesApiServerAccessProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesApiServerAccessProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizedIprRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizedIprRanges = this._authorizedIprRanges;
    }
    if (this._enablePrivateCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePrivateCluster = this._enablePrivateCluster;
    }
    if (this._enablePrivateClusterPublicFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePrivateClusterPublicFqdn = this._enablePrivateClusterPublicFqdn;
    }
    if (this._privateDnsZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateDnsZone = this._privateDnsZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesApiServerAccessProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorizedIprRanges = undefined;
      this._enablePrivateCluster = undefined;
      this._enablePrivateClusterPublicFqdn = undefined;
      this._privateDnsZone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorizedIprRanges = value.authorizedIprRanges;
      this._enablePrivateCluster = value.enablePrivateCluster;
      this._enablePrivateClusterPublicFqdn = value.enablePrivateClusterPublicFqdn;
      this._privateDnsZone = value.privateDnsZone;
    }
  }

  // authorized_ipr_ranges - computed: false, optional: true, required: false
  private _authorizedIprRanges?: string[]; 
  public get authorizedIprRanges() {
    return this.getListAttribute('authorized_ipr_ranges');
  }
  public set authorizedIprRanges(value: string[]) {
    this._authorizedIprRanges = value;
  }
  public resetAuthorizedIprRanges() {
    this._authorizedIprRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedIprRangesInput() {
    return this._authorizedIprRanges;
  }

  // enable_private_cluster - computed: false, optional: true, required: false
  private _enablePrivateCluster?: boolean | cdktf.IResolvable; 
  public get enablePrivateCluster() {
    return this.getBooleanAttribute('enable_private_cluster');
  }
  public set enablePrivateCluster(value: boolean | cdktf.IResolvable) {
    this._enablePrivateCluster = value;
  }
  public resetEnablePrivateCluster() {
    this._enablePrivateCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePrivateClusterInput() {
    return this._enablePrivateCluster;
  }

  // enable_private_cluster_public_fqdn - computed: false, optional: true, required: false
  private _enablePrivateClusterPublicFqdn?: boolean | cdktf.IResolvable; 
  public get enablePrivateClusterPublicFqdn() {
    return this.getBooleanAttribute('enable_private_cluster_public_fqdn');
  }
  public set enablePrivateClusterPublicFqdn(value: boolean | cdktf.IResolvable) {
    this._enablePrivateClusterPublicFqdn = value;
  }
  public resetEnablePrivateClusterPublicFqdn() {
    this._enablePrivateClusterPublicFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePrivateClusterPublicFqdnInput() {
    return this._enablePrivateClusterPublicFqdn;
  }

  // private_dns_zone - computed: false, optional: true, required: false
  private _privateDnsZone?: string; 
  public get privateDnsZone() {
    return this.getStringAttribute('private_dns_zone');
  }
  public set privateDnsZone(value: string) {
    this._privateDnsZone = value;
  }
  public resetPrivateDnsZone() {
    this._privateDnsZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateDnsZoneInput() {
    return this._privateDnsZone;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesApiServerAccessProfileList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesApiServerAccessProfile[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesApiServerAccessProfileOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesApiServerAccessProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoScalerProfile {
  /**
  * Valid values are true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#balance_similar_node_groups DataRafayAksCluster#balance_similar_node_groups}
  */
  readonly balanceSimilarNodeGroups?: string;
  /**
  * Valid values are least-waste, most-pods, priority, random
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#expander DataRafayAksCluster#expander}
  */
  readonly expander?: string;
  /**
  * Max empty bulk delete
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#max_empty_bulk_delete DataRafayAksCluster#max_empty_bulk_delete}
  */
  readonly maxEmptyBulkDelete?: string;
  /**
  * Max graceful termination sec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#max_graceful_termination_sec DataRafayAksCluster#max_graceful_termination_sec}
  */
  readonly maxGracefulTerminationSec?: string;
  /**
  * Values must be an integer followed by an m. No unit of time other than minutes (m) is supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#max_node_provision_time DataRafayAksCluster#max_node_provision_time}
  */
  readonly maxNodeProvisionTime?: string;
  /**
  * The maximum is 100 and the minimum is 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#max_total_unready_percentage DataRafayAksCluster#max_total_unready_percentage}
  */
  readonly maxTotalUnreadyPercentage?: string;
  /**
  * For scenarios like burst/batch scale where you don't want CA to act before the kubernetes scheduler could schedule all the pods, you can tell CA to ignore unscheduled pods before they're a certain age.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#new_pod_scale_up_delay DataRafayAksCluster#new_pod_scale_up_delay}
  */
  readonly newPodScaleUpDelay?: string;
  /**
  * This must be an integer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#ok_total_unready_count DataRafayAksCluster#ok_total_unready_count}
  */
  readonly okTotalUnreadyCount?: string;
  /**
  * Values must be an integer followed by an m. No unit of time other than minutes (m) is supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#scale_down_delay_after_add DataRafayAksCluster#scale_down_delay_after_add}
  */
  readonly scaleDownDelayAfterAdd?: string;
  /**
  * The default is the scan-interval. Values must be an integer followed by an m
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#scale_down_delay_after_delete DataRafayAksCluster#scale_down_delay_after_delete}
  */
  readonly scaleDownDelayAfterDelete?: string;
  /**
  *  Values must be an integer followed by an m
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#scale_down_delay_after_failure DataRafayAksCluster#scale_down_delay_after_failure}
  */
  readonly scaleDownDelayAfterFailure?: string;
  /**
  * Values must be an integer followed by an m
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#scale_down_unneeded_time DataRafayAksCluster#scale_down_unneeded_time}
  */
  readonly scaleDownUnneededTime?: string;
  /**
  * Values must be an integer followed by an m
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#scale_down_unready_time DataRafayAksCluster#scale_down_unready_time}
  */
  readonly scaleDownUnreadyTime?: string;
  /**
  * The scale down utilization threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#scale_down_utilization_threshold DataRafayAksCluster#scale_down_utilization_threshold}
  */
  readonly scaleDownUtilizationThreshold?: string;
  /**
  * The default is 10. Values must be an integer number of seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#scan_interval DataRafayAksCluster#scan_interval}
  */
  readonly scanInterval?: string;
  /**
  * Skip nodes with local storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#skip_nodes_with_local_storage DataRafayAksCluster#skip_nodes_with_local_storage}
  */
  readonly skipNodesWithLocalStorage?: string;
  /**
  * Skip nodes with system pods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#skip_nodes_with_system_pods DataRafayAksCluster#skip_nodes_with_system_pods}
  */
  readonly skipNodesWithSystemPods?: string;
}

export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoScalerProfileToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoScalerProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    balance_similar_node_groups: cdktf.stringToTerraform(struct!.balanceSimilarNodeGroups),
    expander: cdktf.stringToTerraform(struct!.expander),
    max_empty_bulk_delete: cdktf.stringToTerraform(struct!.maxEmptyBulkDelete),
    max_graceful_termination_sec: cdktf.stringToTerraform(struct!.maxGracefulTerminationSec),
    max_node_provision_time: cdktf.stringToTerraform(struct!.maxNodeProvisionTime),
    max_total_unready_percentage: cdktf.stringToTerraform(struct!.maxTotalUnreadyPercentage),
    new_pod_scale_up_delay: cdktf.stringToTerraform(struct!.newPodScaleUpDelay),
    ok_total_unready_count: cdktf.stringToTerraform(struct!.okTotalUnreadyCount),
    scale_down_delay_after_add: cdktf.stringToTerraform(struct!.scaleDownDelayAfterAdd),
    scale_down_delay_after_delete: cdktf.stringToTerraform(struct!.scaleDownDelayAfterDelete),
    scale_down_delay_after_failure: cdktf.stringToTerraform(struct!.scaleDownDelayAfterFailure),
    scale_down_unneeded_time: cdktf.stringToTerraform(struct!.scaleDownUnneededTime),
    scale_down_unready_time: cdktf.stringToTerraform(struct!.scaleDownUnreadyTime),
    scale_down_utilization_threshold: cdktf.stringToTerraform(struct!.scaleDownUtilizationThreshold),
    scan_interval: cdktf.stringToTerraform(struct!.scanInterval),
    skip_nodes_with_local_storage: cdktf.stringToTerraform(struct!.skipNodesWithLocalStorage),
    skip_nodes_with_system_pods: cdktf.stringToTerraform(struct!.skipNodesWithSystemPods),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoScalerProfileToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoScalerProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    balance_similar_node_groups: {
      value: cdktf.stringToHclTerraform(struct!.balanceSimilarNodeGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expander: {
      value: cdktf.stringToHclTerraform(struct!.expander),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_empty_bulk_delete: {
      value: cdktf.stringToHclTerraform(struct!.maxEmptyBulkDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_graceful_termination_sec: {
      value: cdktf.stringToHclTerraform(struct!.maxGracefulTerminationSec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_node_provision_time: {
      value: cdktf.stringToHclTerraform(struct!.maxNodeProvisionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_total_unready_percentage: {
      value: cdktf.stringToHclTerraform(struct!.maxTotalUnreadyPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_pod_scale_up_delay: {
      value: cdktf.stringToHclTerraform(struct!.newPodScaleUpDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ok_total_unready_count: {
      value: cdktf.stringToHclTerraform(struct!.okTotalUnreadyCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scale_down_delay_after_add: {
      value: cdktf.stringToHclTerraform(struct!.scaleDownDelayAfterAdd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scale_down_delay_after_delete: {
      value: cdktf.stringToHclTerraform(struct!.scaleDownDelayAfterDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scale_down_delay_after_failure: {
      value: cdktf.stringToHclTerraform(struct!.scaleDownDelayAfterFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scale_down_unneeded_time: {
      value: cdktf.stringToHclTerraform(struct!.scaleDownUnneededTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scale_down_unready_time: {
      value: cdktf.stringToHclTerraform(struct!.scaleDownUnreadyTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scale_down_utilization_threshold: {
      value: cdktf.stringToHclTerraform(struct!.scaleDownUtilizationThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scan_interval: {
      value: cdktf.stringToHclTerraform(struct!.scanInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_nodes_with_local_storage: {
      value: cdktf.stringToHclTerraform(struct!.skipNodesWithLocalStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_nodes_with_system_pods: {
      value: cdktf.stringToHclTerraform(struct!.skipNodesWithSystemPods),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoScalerProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoScalerProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._balanceSimilarNodeGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.balanceSimilarNodeGroups = this._balanceSimilarNodeGroups;
    }
    if (this._expander !== undefined) {
      hasAnyValues = true;
      internalValueResult.expander = this._expander;
    }
    if (this._maxEmptyBulkDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEmptyBulkDelete = this._maxEmptyBulkDelete;
    }
    if (this._maxGracefulTerminationSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxGracefulTerminationSec = this._maxGracefulTerminationSec;
    }
    if (this._maxNodeProvisionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNodeProvisionTime = this._maxNodeProvisionTime;
    }
    if (this._maxTotalUnreadyPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTotalUnreadyPercentage = this._maxTotalUnreadyPercentage;
    }
    if (this._newPodScaleUpDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.newPodScaleUpDelay = this._newPodScaleUpDelay;
    }
    if (this._okTotalUnreadyCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.okTotalUnreadyCount = this._okTotalUnreadyCount;
    }
    if (this._scaleDownDelayAfterAdd !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleDownDelayAfterAdd = this._scaleDownDelayAfterAdd;
    }
    if (this._scaleDownDelayAfterDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleDownDelayAfterDelete = this._scaleDownDelayAfterDelete;
    }
    if (this._scaleDownDelayAfterFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleDownDelayAfterFailure = this._scaleDownDelayAfterFailure;
    }
    if (this._scaleDownUnneededTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleDownUnneededTime = this._scaleDownUnneededTime;
    }
    if (this._scaleDownUnreadyTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleDownUnreadyTime = this._scaleDownUnreadyTime;
    }
    if (this._scaleDownUtilizationThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleDownUtilizationThreshold = this._scaleDownUtilizationThreshold;
    }
    if (this._scanInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanInterval = this._scanInterval;
    }
    if (this._skipNodesWithLocalStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipNodesWithLocalStorage = this._skipNodesWithLocalStorage;
    }
    if (this._skipNodesWithSystemPods !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipNodesWithSystemPods = this._skipNodesWithSystemPods;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoScalerProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._balanceSimilarNodeGroups = undefined;
      this._expander = undefined;
      this._maxEmptyBulkDelete = undefined;
      this._maxGracefulTerminationSec = undefined;
      this._maxNodeProvisionTime = undefined;
      this._maxTotalUnreadyPercentage = undefined;
      this._newPodScaleUpDelay = undefined;
      this._okTotalUnreadyCount = undefined;
      this._scaleDownDelayAfterAdd = undefined;
      this._scaleDownDelayAfterDelete = undefined;
      this._scaleDownDelayAfterFailure = undefined;
      this._scaleDownUnneededTime = undefined;
      this._scaleDownUnreadyTime = undefined;
      this._scaleDownUtilizationThreshold = undefined;
      this._scanInterval = undefined;
      this._skipNodesWithLocalStorage = undefined;
      this._skipNodesWithSystemPods = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._balanceSimilarNodeGroups = value.balanceSimilarNodeGroups;
      this._expander = value.expander;
      this._maxEmptyBulkDelete = value.maxEmptyBulkDelete;
      this._maxGracefulTerminationSec = value.maxGracefulTerminationSec;
      this._maxNodeProvisionTime = value.maxNodeProvisionTime;
      this._maxTotalUnreadyPercentage = value.maxTotalUnreadyPercentage;
      this._newPodScaleUpDelay = value.newPodScaleUpDelay;
      this._okTotalUnreadyCount = value.okTotalUnreadyCount;
      this._scaleDownDelayAfterAdd = value.scaleDownDelayAfterAdd;
      this._scaleDownDelayAfterDelete = value.scaleDownDelayAfterDelete;
      this._scaleDownDelayAfterFailure = value.scaleDownDelayAfterFailure;
      this._scaleDownUnneededTime = value.scaleDownUnneededTime;
      this._scaleDownUnreadyTime = value.scaleDownUnreadyTime;
      this._scaleDownUtilizationThreshold = value.scaleDownUtilizationThreshold;
      this._scanInterval = value.scanInterval;
      this._skipNodesWithLocalStorage = value.skipNodesWithLocalStorage;
      this._skipNodesWithSystemPods = value.skipNodesWithSystemPods;
    }
  }

  // balance_similar_node_groups - computed: false, optional: true, required: false
  private _balanceSimilarNodeGroups?: string; 
  public get balanceSimilarNodeGroups() {
    return this.getStringAttribute('balance_similar_node_groups');
  }
  public set balanceSimilarNodeGroups(value: string) {
    this._balanceSimilarNodeGroups = value;
  }
  public resetBalanceSimilarNodeGroups() {
    this._balanceSimilarNodeGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get balanceSimilarNodeGroupsInput() {
    return this._balanceSimilarNodeGroups;
  }

  // expander - computed: false, optional: true, required: false
  private _expander?: string; 
  public get expander() {
    return this.getStringAttribute('expander');
  }
  public set expander(value: string) {
    this._expander = value;
  }
  public resetExpander() {
    this._expander = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expanderInput() {
    return this._expander;
  }

  // max_empty_bulk_delete - computed: false, optional: true, required: false
  private _maxEmptyBulkDelete?: string; 
  public get maxEmptyBulkDelete() {
    return this.getStringAttribute('max_empty_bulk_delete');
  }
  public set maxEmptyBulkDelete(value: string) {
    this._maxEmptyBulkDelete = value;
  }
  public resetMaxEmptyBulkDelete() {
    this._maxEmptyBulkDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEmptyBulkDeleteInput() {
    return this._maxEmptyBulkDelete;
  }

  // max_graceful_termination_sec - computed: false, optional: true, required: false
  private _maxGracefulTerminationSec?: string; 
  public get maxGracefulTerminationSec() {
    return this.getStringAttribute('max_graceful_termination_sec');
  }
  public set maxGracefulTerminationSec(value: string) {
    this._maxGracefulTerminationSec = value;
  }
  public resetMaxGracefulTerminationSec() {
    this._maxGracefulTerminationSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxGracefulTerminationSecInput() {
    return this._maxGracefulTerminationSec;
  }

  // max_node_provision_time - computed: false, optional: true, required: false
  private _maxNodeProvisionTime?: string; 
  public get maxNodeProvisionTime() {
    return this.getStringAttribute('max_node_provision_time');
  }
  public set maxNodeProvisionTime(value: string) {
    this._maxNodeProvisionTime = value;
  }
  public resetMaxNodeProvisionTime() {
    this._maxNodeProvisionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNodeProvisionTimeInput() {
    return this._maxNodeProvisionTime;
  }

  // max_total_unready_percentage - computed: false, optional: true, required: false
  private _maxTotalUnreadyPercentage?: string; 
  public get maxTotalUnreadyPercentage() {
    return this.getStringAttribute('max_total_unready_percentage');
  }
  public set maxTotalUnreadyPercentage(value: string) {
    this._maxTotalUnreadyPercentage = value;
  }
  public resetMaxTotalUnreadyPercentage() {
    this._maxTotalUnreadyPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTotalUnreadyPercentageInput() {
    return this._maxTotalUnreadyPercentage;
  }

  // new_pod_scale_up_delay - computed: false, optional: true, required: false
  private _newPodScaleUpDelay?: string; 
  public get newPodScaleUpDelay() {
    return this.getStringAttribute('new_pod_scale_up_delay');
  }
  public set newPodScaleUpDelay(value: string) {
    this._newPodScaleUpDelay = value;
  }
  public resetNewPodScaleUpDelay() {
    this._newPodScaleUpDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newPodScaleUpDelayInput() {
    return this._newPodScaleUpDelay;
  }

  // ok_total_unready_count - computed: false, optional: true, required: false
  private _okTotalUnreadyCount?: string; 
  public get okTotalUnreadyCount() {
    return this.getStringAttribute('ok_total_unready_count');
  }
  public set okTotalUnreadyCount(value: string) {
    this._okTotalUnreadyCount = value;
  }
  public resetOkTotalUnreadyCount() {
    this._okTotalUnreadyCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get okTotalUnreadyCountInput() {
    return this._okTotalUnreadyCount;
  }

  // scale_down_delay_after_add - computed: false, optional: true, required: false
  private _scaleDownDelayAfterAdd?: string; 
  public get scaleDownDelayAfterAdd() {
    return this.getStringAttribute('scale_down_delay_after_add');
  }
  public set scaleDownDelayAfterAdd(value: string) {
    this._scaleDownDelayAfterAdd = value;
  }
  public resetScaleDownDelayAfterAdd() {
    this._scaleDownDelayAfterAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownDelayAfterAddInput() {
    return this._scaleDownDelayAfterAdd;
  }

  // scale_down_delay_after_delete - computed: false, optional: true, required: false
  private _scaleDownDelayAfterDelete?: string; 
  public get scaleDownDelayAfterDelete() {
    return this.getStringAttribute('scale_down_delay_after_delete');
  }
  public set scaleDownDelayAfterDelete(value: string) {
    this._scaleDownDelayAfterDelete = value;
  }
  public resetScaleDownDelayAfterDelete() {
    this._scaleDownDelayAfterDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownDelayAfterDeleteInput() {
    return this._scaleDownDelayAfterDelete;
  }

  // scale_down_delay_after_failure - computed: false, optional: true, required: false
  private _scaleDownDelayAfterFailure?: string; 
  public get scaleDownDelayAfterFailure() {
    return this.getStringAttribute('scale_down_delay_after_failure');
  }
  public set scaleDownDelayAfterFailure(value: string) {
    this._scaleDownDelayAfterFailure = value;
  }
  public resetScaleDownDelayAfterFailure() {
    this._scaleDownDelayAfterFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownDelayAfterFailureInput() {
    return this._scaleDownDelayAfterFailure;
  }

  // scale_down_unneeded_time - computed: false, optional: true, required: false
  private _scaleDownUnneededTime?: string; 
  public get scaleDownUnneededTime() {
    return this.getStringAttribute('scale_down_unneeded_time');
  }
  public set scaleDownUnneededTime(value: string) {
    this._scaleDownUnneededTime = value;
  }
  public resetScaleDownUnneededTime() {
    this._scaleDownUnneededTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownUnneededTimeInput() {
    return this._scaleDownUnneededTime;
  }

  // scale_down_unready_time - computed: false, optional: true, required: false
  private _scaleDownUnreadyTime?: string; 
  public get scaleDownUnreadyTime() {
    return this.getStringAttribute('scale_down_unready_time');
  }
  public set scaleDownUnreadyTime(value: string) {
    this._scaleDownUnreadyTime = value;
  }
  public resetScaleDownUnreadyTime() {
    this._scaleDownUnreadyTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownUnreadyTimeInput() {
    return this._scaleDownUnreadyTime;
  }

  // scale_down_utilization_threshold - computed: false, optional: true, required: false
  private _scaleDownUtilizationThreshold?: string; 
  public get scaleDownUtilizationThreshold() {
    return this.getStringAttribute('scale_down_utilization_threshold');
  }
  public set scaleDownUtilizationThreshold(value: string) {
    this._scaleDownUtilizationThreshold = value;
  }
  public resetScaleDownUtilizationThreshold() {
    this._scaleDownUtilizationThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownUtilizationThresholdInput() {
    return this._scaleDownUtilizationThreshold;
  }

  // scan_interval - computed: false, optional: true, required: false
  private _scanInterval?: string; 
  public get scanInterval() {
    return this.getStringAttribute('scan_interval');
  }
  public set scanInterval(value: string) {
    this._scanInterval = value;
  }
  public resetScanInterval() {
    this._scanInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanIntervalInput() {
    return this._scanInterval;
  }

  // skip_nodes_with_local_storage - computed: false, optional: true, required: false
  private _skipNodesWithLocalStorage?: string; 
  public get skipNodesWithLocalStorage() {
    return this.getStringAttribute('skip_nodes_with_local_storage');
  }
  public set skipNodesWithLocalStorage(value: string) {
    this._skipNodesWithLocalStorage = value;
  }
  public resetSkipNodesWithLocalStorage() {
    this._skipNodesWithLocalStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipNodesWithLocalStorageInput() {
    return this._skipNodesWithLocalStorage;
  }

  // skip_nodes_with_system_pods - computed: false, optional: true, required: false
  private _skipNodesWithSystemPods?: string; 
  public get skipNodesWithSystemPods() {
    return this.getStringAttribute('skip_nodes_with_system_pods');
  }
  public set skipNodesWithSystemPods(value: string) {
    this._skipNodesWithSystemPods = value;
  }
  public resetSkipNodesWithSystemPods() {
    this._skipNodesWithSystemPods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipNodesWithSystemPodsInput() {
    return this._skipNodesWithSystemPods;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoScalerProfileList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoScalerProfile[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoScalerProfileOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoScalerProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoUpgradeProfile {
  /**
  * Valid values are None, Unmanaged, NodeImage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#node_os_upgrade_channel DataRafayAksCluster#node_os_upgrade_channel}
  */
  readonly nodeOsUpgradeChannel?: string;
  /**
  * Valid values are rapid, stable, patch, node-image, none
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#upgrade_channel DataRafayAksCluster#upgrade_channel}
  */
  readonly upgradeChannel?: string;
}

export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoUpgradeProfileToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoUpgradeProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_os_upgrade_channel: cdktf.stringToTerraform(struct!.nodeOsUpgradeChannel),
    upgrade_channel: cdktf.stringToTerraform(struct!.upgradeChannel),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoUpgradeProfileToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoUpgradeProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_os_upgrade_channel: {
      value: cdktf.stringToHclTerraform(struct!.nodeOsUpgradeChannel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upgrade_channel: {
      value: cdktf.stringToHclTerraform(struct!.upgradeChannel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoUpgradeProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoUpgradeProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeOsUpgradeChannel !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeOsUpgradeChannel = this._nodeOsUpgradeChannel;
    }
    if (this._upgradeChannel !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeChannel = this._upgradeChannel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoUpgradeProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeOsUpgradeChannel = undefined;
      this._upgradeChannel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeOsUpgradeChannel = value.nodeOsUpgradeChannel;
      this._upgradeChannel = value.upgradeChannel;
    }
  }

  // node_os_upgrade_channel - computed: false, optional: true, required: false
  private _nodeOsUpgradeChannel?: string; 
  public get nodeOsUpgradeChannel() {
    return this.getStringAttribute('node_os_upgrade_channel');
  }
  public set nodeOsUpgradeChannel(value: string) {
    this._nodeOsUpgradeChannel = value;
  }
  public resetNodeOsUpgradeChannel() {
    this._nodeOsUpgradeChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeOsUpgradeChannelInput() {
    return this._nodeOsUpgradeChannel;
  }

  // upgrade_channel - computed: false, optional: true, required: false
  private _upgradeChannel?: string; 
  public get upgradeChannel() {
    return this.getStringAttribute('upgrade_channel');
  }
  public set upgradeChannel(value: string) {
    this._upgradeChannel = value;
  }
  public resetUpgradeChannel() {
    this._upgradeChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeChannelInput() {
    return this._upgradeChannel;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoUpgradeProfileList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoUpgradeProfile[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoUpgradeProfileOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoUpgradeProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesHttpProxyConfig {
  /**
  * The HTTP proxy server endpoint to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#http_proxy DataRafayAksCluster#http_proxy}
  */
  readonly httpProxy?: string;
  /**
  * The HTTPs proxy server endpoint to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#https_proxy DataRafayAksCluster#https_proxy}
  */
  readonly httpsProxy?: string;
  /**
  * The endpoints that should not go through proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#no_proxy DataRafayAksCluster#no_proxy}
  */
  readonly noProxy?: string[];
  /**
  * Alternative CA cert to use for connecting to proxy servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#trusted_ca DataRafayAksCluster#trusted_ca}
  */
  readonly trustedCa?: string;
}

export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesHttpProxyConfigToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesHttpProxyConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_proxy: cdktf.stringToTerraform(struct!.httpProxy),
    https_proxy: cdktf.stringToTerraform(struct!.httpsProxy),
    no_proxy: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.noProxy),
    trusted_ca: cdktf.stringToTerraform(struct!.trustedCa),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesHttpProxyConfigToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesHttpProxyConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_proxy: {
      value: cdktf.stringToHclTerraform(struct!.httpProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_proxy: {
      value: cdktf.stringToHclTerraform(struct!.httpsProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_proxy: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.noProxy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    trusted_ca: {
      value: cdktf.stringToHclTerraform(struct!.trustedCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesHttpProxyConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesHttpProxyConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProxy = this._httpProxy;
    }
    if (this._httpsProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsProxy = this._httpsProxy;
    }
    if (this._noProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noProxy = this._noProxy;
    }
    if (this._trustedCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCa = this._trustedCa;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesHttpProxyConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpProxy = undefined;
      this._httpsProxy = undefined;
      this._noProxy = undefined;
      this._trustedCa = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpProxy = value.httpProxy;
      this._httpsProxy = value.httpsProxy;
      this._noProxy = value.noProxy;
      this._trustedCa = value.trustedCa;
    }
  }

  // http_proxy - computed: false, optional: true, required: false
  private _httpProxy?: string; 
  public get httpProxy() {
    return this.getStringAttribute('http_proxy');
  }
  public set httpProxy(value: string) {
    this._httpProxy = value;
  }
  public resetHttpProxy() {
    this._httpProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyInput() {
    return this._httpProxy;
  }

  // https_proxy - computed: false, optional: true, required: false
  private _httpsProxy?: string; 
  public get httpsProxy() {
    return this.getStringAttribute('https_proxy');
  }
  public set httpsProxy(value: string) {
    this._httpsProxy = value;
  }
  public resetHttpsProxy() {
    this._httpsProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsProxyInput() {
    return this._httpsProxy;
  }

  // no_proxy - computed: false, optional: true, required: false
  private _noProxy?: string[]; 
  public get noProxy() {
    return this.getListAttribute('no_proxy');
  }
  public set noProxy(value: string[]) {
    this._noProxy = value;
  }
  public resetNoProxy() {
    this._noProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noProxyInput() {
    return this._noProxy;
  }

  // trusted_ca - computed: false, optional: true, required: false
  private _trustedCa?: string; 
  public get trustedCa() {
    return this.getStringAttribute('trusted_ca');
  }
  public set trustedCa(value: string) {
    this._trustedCa = value;
  }
  public resetTrustedCa() {
    this._trustedCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaInput() {
    return this._trustedCa;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesHttpProxyConfigList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesHttpProxyConfig[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesHttpProxyConfigOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesHttpProxyConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileKubeletIdentity {
  /**
  * value must be ARM resource ID in the form: /subscriptions/<subscription-id>/resourceGroups/<resource-group>/providers/Microsoft.ManagedIdentity/userAssignedIdentities/<identity-name>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#resource_id DataRafayAksCluster#resource_id}
  */
  readonly resourceId: string;
}

export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileKubeletIdentityToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileKubeletIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileKubeletIdentityToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileKubeletIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileKubeletIdentityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileKubeletIdentity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileKubeletIdentity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceId = value.resourceId;
    }
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileKubeletIdentityList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileKubeletIdentity[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileKubeletIdentityOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileKubeletIdentityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfile {
  /**
  * kubelet_identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#kubelet_identity DataRafayAksCluster#kubelet_identity}
  */
  readonly kubeletIdentity: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileKubeletIdentity[] | cdktf.IResolvable;
}

export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kubelet_identity: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileKubeletIdentityToTerraform, true)(struct!.kubeletIdentity),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kubelet_identity: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileKubeletIdentityToHclTerraform, true)(struct!.kubeletIdentity),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileKubeletIdentityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kubeletIdentity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeletIdentity = this._kubeletIdentity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kubeletIdentity.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kubeletIdentity.internalValue = value.kubeletIdentity;
    }
  }

  // kubelet_identity - computed: false, optional: false, required: true
  private _kubeletIdentity = new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileKubeletIdentityList(this, "kubelet_identity", false);
  public get kubeletIdentity() {
    return this._kubeletIdentity;
  }
  public putKubeletIdentity(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileKubeletIdentity[] | cdktf.IResolvable) {
    this._kubeletIdentity.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletIdentityInput() {
    return this._kubeletIdentity.internalValue;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfile[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSshPublicKeys {
  /**
  * Certificate public key used to authenticate with VMs through SSH. The certificate must be in PEM format with or without headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#key_data DataRafayAksCluster#key_data}
  */
  readonly keyData?: string;
}

export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSshPublicKeysToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSshPublicKeysOutputReference | DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSshPublicKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_data: cdktf.stringToTerraform(struct!.keyData),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSshPublicKeysToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSshPublicKeysOutputReference | DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSshPublicKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_data: {
      value: cdktf.stringToHclTerraform(struct!.keyData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSshPublicKeysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSshPublicKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyData !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyData = this._keyData;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSshPublicKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyData = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyData = value.keyData;
    }
  }

  // key_data - computed: false, optional: true, required: false
  private _keyData?: string; 
  public get keyData() {
    return this.getStringAttribute('key_data');
  }
  public set keyData(value: string) {
    this._keyData = value;
  }
  public resetKeyData() {
    this._keyData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyDataInput() {
    return this._keyData;
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSsh {
  /**
  * public_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#public_keys DataRafayAksCluster#public_keys}
  */
  readonly publicKeys: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSshPublicKeys;
}

export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSshToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSsh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_keys: dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSshPublicKeysToTerraform(struct!.publicKeys),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSshToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSsh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    public_keys: {
      value: dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSshPublicKeysToHclTerraform(struct!.publicKeys),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSshPublicKeysList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSshOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSsh | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKeys = this._publicKeys?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSsh | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._publicKeys.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._publicKeys.internalValue = value.publicKeys;
    }
  }

  // public_keys - computed: false, optional: false, required: true
  private _publicKeys = new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSshPublicKeysOutputReference(this, "public_keys");
  public get publicKeys() {
    return this._publicKeys;
  }
  public putPublicKeys(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSshPublicKeys) {
    this._publicKeys.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeysInput() {
    return this._publicKeys.internalValue;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSshList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSsh[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSshOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSshOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfile {
  /**
  * The administrator username to use for Linux VMs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#admin_username DataRafayAksCluster#admin_username}
  */
  readonly adminUsername: string;
  /**
  * The endpoints that should not go through proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#no_proxy DataRafayAksCluster#no_proxy}
  */
  readonly noProxy?: string[];
  /**
  * Alternative CA cert to use for connecting to proxy servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#trusted_ca DataRafayAksCluster#trusted_ca}
  */
  readonly trustedCa?: string;
  /**
  * ssh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#ssh DataRafayAksCluster#ssh}
  */
  readonly ssh: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSsh[] | cdktf.IResolvable;
}

export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_username: cdktf.stringToTerraform(struct!.adminUsername),
    no_proxy: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.noProxy),
    trusted_ca: cdktf.stringToTerraform(struct!.trustedCa),
    ssh: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSshToTerraform, true)(struct!.ssh),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_username: {
      value: cdktf.stringToHclTerraform(struct!.adminUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_proxy: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.noProxy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    trusted_ca: {
      value: cdktf.stringToHclTerraform(struct!.trustedCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSshToHclTerraform, true)(struct!.ssh),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSshList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminUsername = this._adminUsername;
    }
    if (this._noProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noProxy = this._noProxy;
    }
    if (this._trustedCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCa = this._trustedCa;
    }
    if (this._ssh?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssh = this._ssh?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminUsername = undefined;
      this._noProxy = undefined;
      this._trustedCa = undefined;
      this._ssh.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminUsername = value.adminUsername;
      this._noProxy = value.noProxy;
      this._trustedCa = value.trustedCa;
      this._ssh.internalValue = value.ssh;
    }
  }

  // admin_username - computed: false, optional: false, required: true
  private _adminUsername?: string; 
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }
  public set adminUsername(value: string) {
    this._adminUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUsernameInput() {
    return this._adminUsername;
  }

  // no_proxy - computed: false, optional: true, required: false
  private _noProxy?: string[]; 
  public get noProxy() {
    return this.getListAttribute('no_proxy');
  }
  public set noProxy(value: string[]) {
    this._noProxy = value;
  }
  public resetNoProxy() {
    this._noProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noProxyInput() {
    return this._noProxy;
  }

  // trusted_ca - computed: false, optional: true, required: false
  private _trustedCa?: string; 
  public get trustedCa() {
    return this.getStringAttribute('trusted_ca');
  }
  public set trustedCa(value: string) {
    this._trustedCa = value;
  }
  public resetTrustedCa() {
    this._trustedCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaInput() {
    return this._trustedCa;
  }

  // ssh - computed: false, optional: false, required: true
  private _ssh = new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSshList(this, "ssh", false);
  public get ssh() {
    return this._ssh;
  }
  public putSsh(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSsh[] | cdktf.IResolvable) {
    this._ssh.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshInput() {
    return this._ssh.internalValue;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfile[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileEffectiveOutboundIps {
  /**
  * The fully qualified Azure resource id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#id DataRafayAksCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileEffectiveOutboundIpsToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileEffectiveOutboundIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileEffectiveOutboundIpsToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileEffectiveOutboundIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileEffectiveOutboundIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileEffectiveOutboundIps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileEffectiveOutboundIps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
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
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileEffectiveOutboundIpsList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileEffectiveOutboundIps[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileEffectiveOutboundIpsOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileEffectiveOutboundIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileManagedOutboundIps {
  /**
  * The desired number of outbound IPs created/managed by Azure for the cluster load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#count DataRafayAksCluster#count}
  */
  readonly count?: number;
}

export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileManagedOutboundIpsToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileManagedOutboundIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileManagedOutboundIpsToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileManagedOutboundIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileManagedOutboundIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileManagedOutboundIps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileManagedOutboundIps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileManagedOutboundIpsList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileManagedOutboundIps[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileManagedOutboundIpsOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileManagedOutboundIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesPublicIpPrefixes {
  /**
  * The fully qualified Azure resource id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#id DataRafayAksCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesPublicIpPrefixesToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesPublicIpPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesPublicIpPrefixesToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesPublicIpPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesPublicIpPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesPublicIpPrefixes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesPublicIpPrefixes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
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
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesPublicIpPrefixesList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesPublicIpPrefixes[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesPublicIpPrefixesOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesPublicIpPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixes {
  /**
  * public_ip_prefixes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#public_ip_prefixes DataRafayAksCluster#public_ip_prefixes}
  */
  readonly publicIpPrefixes?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesPublicIpPrefixes[] | cdktf.IResolvable;
}

export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_ip_prefixes: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesPublicIpPrefixesToTerraform, true)(struct!.publicIpPrefixes),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    public_ip_prefixes: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesPublicIpPrefixesToHclTerraform, true)(struct!.publicIpPrefixes),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesPublicIpPrefixesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicIpPrefixes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIpPrefixes = this._publicIpPrefixes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._publicIpPrefixes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._publicIpPrefixes.internalValue = value.publicIpPrefixes;
    }
  }

  // public_ip_prefixes - computed: false, optional: true, required: false
  private _publicIpPrefixes = new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesPublicIpPrefixesList(this, "public_ip_prefixes", false);
  public get publicIpPrefixes() {
    return this._publicIpPrefixes;
  }
  public putPublicIpPrefixes(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesPublicIpPrefixes[] | cdktf.IResolvable) {
    this._publicIpPrefixes.internalValue = value;
  }
  public resetPublicIpPrefixes() {
    this._publicIpPrefixes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpPrefixesInput() {
    return this._publicIpPrefixes.internalValue;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixes[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsPublicIps {
  /**
  *  	The fully qualified Azure resource id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#id DataRafayAksCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsPublicIpsToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsPublicIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsPublicIpsToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsPublicIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsPublicIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsPublicIps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsPublicIps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
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
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsPublicIpsList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsPublicIps[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsPublicIpsOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsPublicIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIps {
  /**
  * public_ips block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#public_ips DataRafayAksCluster#public_ips}
  */
  readonly publicIps?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsPublicIps[] | cdktf.IResolvable;
}

export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_ips: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsPublicIpsToTerraform, true)(struct!.publicIps),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    public_ips: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsPublicIpsToHclTerraform, true)(struct!.publicIps),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsPublicIpsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicIps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIps = this._publicIps?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._publicIps.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._publicIps.internalValue = value.publicIps;
    }
  }

  // public_ips - computed: false, optional: true, required: false
  private _publicIps = new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsPublicIpsList(this, "public_ips", false);
  public get publicIps() {
    return this._publicIps;
  }
  public putPublicIps(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsPublicIps[] | cdktf.IResolvable) {
    this._publicIps.internalValue = value;
  }
  public resetPublicIps() {
    this._publicIps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpsInput() {
    return this._publicIps.internalValue;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIps[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfile {
  /**
  * The desired number of allocated SNAT ports per VM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#allocated_outbound_ports DataRafayAksCluster#allocated_outbound_ports}
  */
  readonly allocatedOutboundPorts?: number;
  /**
  * Desired outbound flow idle timeout in minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#idle_timeout_in_minutes DataRafayAksCluster#idle_timeout_in_minutes}
  */
  readonly idleTimeoutInMinutes?: number;
  /**
  * effective_outbound_ips block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#effective_outbound_ips DataRafayAksCluster#effective_outbound_ips}
  */
  readonly effectiveOutboundIps?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileEffectiveOutboundIps[] | cdktf.IResolvable;
  /**
  * managed_outbound_ips block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#managed_outbound_ips DataRafayAksCluster#managed_outbound_ips}
  */
  readonly managedOutboundIps?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileManagedOutboundIps[] | cdktf.IResolvable;
  /**
  * outbound_ip_prefixes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#outbound_ip_prefixes DataRafayAksCluster#outbound_ip_prefixes}
  */
  readonly outboundIpPrefixes?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixes[] | cdktf.IResolvable;
  /**
  * outbound_ips block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#outbound_ips DataRafayAksCluster#outbound_ips}
  */
  readonly outboundIps?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIps[] | cdktf.IResolvable;
}

export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocated_outbound_ports: cdktf.numberToTerraform(struct!.allocatedOutboundPorts),
    idle_timeout_in_minutes: cdktf.numberToTerraform(struct!.idleTimeoutInMinutes),
    effective_outbound_ips: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileEffectiveOutboundIpsToTerraform, true)(struct!.effectiveOutboundIps),
    managed_outbound_ips: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileManagedOutboundIpsToTerraform, true)(struct!.managedOutboundIps),
    outbound_ip_prefixes: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesToTerraform, true)(struct!.outboundIpPrefixes),
    outbound_ips: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsToTerraform, true)(struct!.outboundIps),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocated_outbound_ports: {
      value: cdktf.numberToHclTerraform(struct!.allocatedOutboundPorts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    idle_timeout_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.idleTimeoutInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    effective_outbound_ips: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileEffectiveOutboundIpsToHclTerraform, true)(struct!.effectiveOutboundIps),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileEffectiveOutboundIpsList",
    },
    managed_outbound_ips: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileManagedOutboundIpsToHclTerraform, true)(struct!.managedOutboundIps),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileManagedOutboundIpsList",
    },
    outbound_ip_prefixes: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesToHclTerraform, true)(struct!.outboundIpPrefixes),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesList",
    },
    outbound_ips: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsToHclTerraform, true)(struct!.outboundIps),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocatedOutboundPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocatedOutboundPorts = this._allocatedOutboundPorts;
    }
    if (this._idleTimeoutInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeoutInMinutes = this._idleTimeoutInMinutes;
    }
    if (this._effectiveOutboundIps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.effectiveOutboundIps = this._effectiveOutboundIps?.internalValue;
    }
    if (this._managedOutboundIps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedOutboundIps = this._managedOutboundIps?.internalValue;
    }
    if (this._outboundIpPrefixes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundIpPrefixes = this._outboundIpPrefixes?.internalValue;
    }
    if (this._outboundIps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundIps = this._outboundIps?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocatedOutboundPorts = undefined;
      this._idleTimeoutInMinutes = undefined;
      this._effectiveOutboundIps.internalValue = undefined;
      this._managedOutboundIps.internalValue = undefined;
      this._outboundIpPrefixes.internalValue = undefined;
      this._outboundIps.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocatedOutboundPorts = value.allocatedOutboundPorts;
      this._idleTimeoutInMinutes = value.idleTimeoutInMinutes;
      this._effectiveOutboundIps.internalValue = value.effectiveOutboundIps;
      this._managedOutboundIps.internalValue = value.managedOutboundIps;
      this._outboundIpPrefixes.internalValue = value.outboundIpPrefixes;
      this._outboundIps.internalValue = value.outboundIps;
    }
  }

  // allocated_outbound_ports - computed: false, optional: true, required: false
  private _allocatedOutboundPorts?: number; 
  public get allocatedOutboundPorts() {
    return this.getNumberAttribute('allocated_outbound_ports');
  }
  public set allocatedOutboundPorts(value: number) {
    this._allocatedOutboundPorts = value;
  }
  public resetAllocatedOutboundPorts() {
    this._allocatedOutboundPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatedOutboundPortsInput() {
    return this._allocatedOutboundPorts;
  }

  // idle_timeout_in_minutes - computed: false, optional: true, required: false
  private _idleTimeoutInMinutes?: number; 
  public get idleTimeoutInMinutes() {
    return this.getNumberAttribute('idle_timeout_in_minutes');
  }
  public set idleTimeoutInMinutes(value: number) {
    this._idleTimeoutInMinutes = value;
  }
  public resetIdleTimeoutInMinutes() {
    this._idleTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInMinutesInput() {
    return this._idleTimeoutInMinutes;
  }

  // effective_outbound_ips - computed: false, optional: true, required: false
  private _effectiveOutboundIps = new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileEffectiveOutboundIpsList(this, "effective_outbound_ips", false);
  public get effectiveOutboundIps() {
    return this._effectiveOutboundIps;
  }
  public putEffectiveOutboundIps(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileEffectiveOutboundIps[] | cdktf.IResolvable) {
    this._effectiveOutboundIps.internalValue = value;
  }
  public resetEffectiveOutboundIps() {
    this._effectiveOutboundIps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveOutboundIpsInput() {
    return this._effectiveOutboundIps.internalValue;
  }

  // managed_outbound_ips - computed: false, optional: true, required: false
  private _managedOutboundIps = new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileManagedOutboundIpsList(this, "managed_outbound_ips", false);
  public get managedOutboundIps() {
    return this._managedOutboundIps;
  }
  public putManagedOutboundIps(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileManagedOutboundIps[] | cdktf.IResolvable) {
    this._managedOutboundIps.internalValue = value;
  }
  public resetManagedOutboundIps() {
    this._managedOutboundIps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedOutboundIpsInput() {
    return this._managedOutboundIps.internalValue;
  }

  // outbound_ip_prefixes - computed: false, optional: true, required: false
  private _outboundIpPrefixes = new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesList(this, "outbound_ip_prefixes", false);
  public get outboundIpPrefixes() {
    return this._outboundIpPrefixes;
  }
  public putOutboundIpPrefixes(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixes[] | cdktf.IResolvable) {
    this._outboundIpPrefixes.internalValue = value;
  }
  public resetOutboundIpPrefixes() {
    this._outboundIpPrefixes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundIpPrefixesInput() {
    return this._outboundIpPrefixes.internalValue;
  }

  // outbound_ips - computed: false, optional: true, required: false
  private _outboundIps = new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsList(this, "outbound_ips", false);
  public get outboundIps() {
    return this._outboundIps;
  }
  public putOutboundIps(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIps[] | cdktf.IResolvable) {
    this._outboundIps.internalValue = value;
  }
  public resetOutboundIps() {
    this._outboundIps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundIpsInput() {
    return this._outboundIps.internalValue;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfile[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfile {
  /**
  * An IP address assigned to the Kubernetes DNS service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#dns_service_ip DataRafayAksCluster#dns_service_ip}
  */
  readonly dnsServiceIp?: string;
  /**
  * A CIDR notation IP range assigned to the Docker bridge network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#docker_bridge_cidr DataRafayAksCluster#docker_bridge_cidr}
  */
  readonly dockerBridgeCidr?: string;
  /**
  * Valid values are standard, basic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#load_balancer_sku DataRafayAksCluster#load_balancer_sku}
  */
  readonly loadBalancerSku?: string;
  /**
  * This cannot be specified if networkPlugin is anything other than azure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#network_mode DataRafayAksCluster#network_mode}
  */
  readonly networkMode?: string;
  /**
  * Network plugin used for building the Kubernetes network. Valid values are azure, kubenet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#network_plugin DataRafayAksCluster#network_plugin}
  */
  readonly networkPlugin?: string;
  /**
  * Network plugin mode used for building the Azure CNI. Valid values are 'overlay'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#network_plugin_mode DataRafayAksCluster#network_plugin_mode}
  */
  readonly networkPluginMode?: string;
  /**
  * Network policy used for building the Kubernetes network. Valid values are calico, azure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#network_policy DataRafayAksCluster#network_policy}
  */
  readonly networkPolicy?: string;
  /**
  * This can only be set at cluster creation time and cannot be changed later. Valid values are loadBalancer, userDefinedRouting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#outbound_type DataRafayAksCluster#outbound_type}
  */
  readonly outboundType?: string;
  /**
  * A CIDR notation IP range from which to assign pod IPs when kubenet is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#pod_cidr DataRafayAksCluster#pod_cidr}
  */
  readonly podCidr?: string;
  /**
  * A CIDR notation IP range from which to assign service cluster IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#service_cidr DataRafayAksCluster#service_cidr}
  */
  readonly serviceCidr?: string;
  /**
  * load_balancer_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#load_balancer_profile DataRafayAksCluster#load_balancer_profile}
  */
  readonly loadBalancerProfile?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfile[] | cdktf.IResolvable;
}

export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_service_ip: cdktf.stringToTerraform(struct!.dnsServiceIp),
    docker_bridge_cidr: cdktf.stringToTerraform(struct!.dockerBridgeCidr),
    load_balancer_sku: cdktf.stringToTerraform(struct!.loadBalancerSku),
    network_mode: cdktf.stringToTerraform(struct!.networkMode),
    network_plugin: cdktf.stringToTerraform(struct!.networkPlugin),
    network_plugin_mode: cdktf.stringToTerraform(struct!.networkPluginMode),
    network_policy: cdktf.stringToTerraform(struct!.networkPolicy),
    outbound_type: cdktf.stringToTerraform(struct!.outboundType),
    pod_cidr: cdktf.stringToTerraform(struct!.podCidr),
    service_cidr: cdktf.stringToTerraform(struct!.serviceCidr),
    load_balancer_profile: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileToTerraform, true)(struct!.loadBalancerProfile),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_service_ip: {
      value: cdktf.stringToHclTerraform(struct!.dnsServiceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    docker_bridge_cidr: {
      value: cdktf.stringToHclTerraform(struct!.dockerBridgeCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_balancer_sku: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancerSku),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_mode: {
      value: cdktf.stringToHclTerraform(struct!.networkMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_plugin: {
      value: cdktf.stringToHclTerraform(struct!.networkPlugin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_plugin_mode: {
      value: cdktf.stringToHclTerraform(struct!.networkPluginMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_policy: {
      value: cdktf.stringToHclTerraform(struct!.networkPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outbound_type: {
      value: cdktf.stringToHclTerraform(struct!.outboundType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_cidr: {
      value: cdktf.stringToHclTerraform(struct!.podCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_cidr: {
      value: cdktf.stringToHclTerraform(struct!.serviceCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_balancer_profile: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileToHclTerraform, true)(struct!.loadBalancerProfile),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsServiceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServiceIp = this._dnsServiceIp;
    }
    if (this._dockerBridgeCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerBridgeCidr = this._dockerBridgeCidr;
    }
    if (this._loadBalancerSku !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerSku = this._loadBalancerSku;
    }
    if (this._networkMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkMode = this._networkMode;
    }
    if (this._networkPlugin !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPlugin = this._networkPlugin;
    }
    if (this._networkPluginMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPluginMode = this._networkPluginMode;
    }
    if (this._networkPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPolicy = this._networkPolicy;
    }
    if (this._outboundType !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundType = this._outboundType;
    }
    if (this._podCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.podCidr = this._podCidr;
    }
    if (this._serviceCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceCidr = this._serviceCidr;
    }
    if (this._loadBalancerProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerProfile = this._loadBalancerProfile?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsServiceIp = undefined;
      this._dockerBridgeCidr = undefined;
      this._loadBalancerSku = undefined;
      this._networkMode = undefined;
      this._networkPlugin = undefined;
      this._networkPluginMode = undefined;
      this._networkPolicy = undefined;
      this._outboundType = undefined;
      this._podCidr = undefined;
      this._serviceCidr = undefined;
      this._loadBalancerProfile.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsServiceIp = value.dnsServiceIp;
      this._dockerBridgeCidr = value.dockerBridgeCidr;
      this._loadBalancerSku = value.loadBalancerSku;
      this._networkMode = value.networkMode;
      this._networkPlugin = value.networkPlugin;
      this._networkPluginMode = value.networkPluginMode;
      this._networkPolicy = value.networkPolicy;
      this._outboundType = value.outboundType;
      this._podCidr = value.podCidr;
      this._serviceCidr = value.serviceCidr;
      this._loadBalancerProfile.internalValue = value.loadBalancerProfile;
    }
  }

  // dns_service_ip - computed: false, optional: true, required: false
  private _dnsServiceIp?: string; 
  public get dnsServiceIp() {
    return this.getStringAttribute('dns_service_ip');
  }
  public set dnsServiceIp(value: string) {
    this._dnsServiceIp = value;
  }
  public resetDnsServiceIp() {
    this._dnsServiceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServiceIpInput() {
    return this._dnsServiceIp;
  }

  // docker_bridge_cidr - computed: false, optional: true, required: false
  private _dockerBridgeCidr?: string; 
  public get dockerBridgeCidr() {
    return this.getStringAttribute('docker_bridge_cidr');
  }
  public set dockerBridgeCidr(value: string) {
    this._dockerBridgeCidr = value;
  }
  public resetDockerBridgeCidr() {
    this._dockerBridgeCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerBridgeCidrInput() {
    return this._dockerBridgeCidr;
  }

  // load_balancer_sku - computed: false, optional: true, required: false
  private _loadBalancerSku?: string; 
  public get loadBalancerSku() {
    return this.getStringAttribute('load_balancer_sku');
  }
  public set loadBalancerSku(value: string) {
    this._loadBalancerSku = value;
  }
  public resetLoadBalancerSku() {
    this._loadBalancerSku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerSkuInput() {
    return this._loadBalancerSku;
  }

  // network_mode - computed: false, optional: true, required: false
  private _networkMode?: string; 
  public get networkMode() {
    return this.getStringAttribute('network_mode');
  }
  public set networkMode(value: string) {
    this._networkMode = value;
  }
  public resetNetworkMode() {
    this._networkMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkModeInput() {
    return this._networkMode;
  }

  // network_plugin - computed: false, optional: true, required: false
  private _networkPlugin?: string; 
  public get networkPlugin() {
    return this.getStringAttribute('network_plugin');
  }
  public set networkPlugin(value: string) {
    this._networkPlugin = value;
  }
  public resetNetworkPlugin() {
    this._networkPlugin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPluginInput() {
    return this._networkPlugin;
  }

  // network_plugin_mode - computed: false, optional: true, required: false
  private _networkPluginMode?: string; 
  public get networkPluginMode() {
    return this.getStringAttribute('network_plugin_mode');
  }
  public set networkPluginMode(value: string) {
    this._networkPluginMode = value;
  }
  public resetNetworkPluginMode() {
    this._networkPluginMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPluginModeInput() {
    return this._networkPluginMode;
  }

  // network_policy - computed: false, optional: true, required: false
  private _networkPolicy?: string; 
  public get networkPolicy() {
    return this.getStringAttribute('network_policy');
  }
  public set networkPolicy(value: string) {
    this._networkPolicy = value;
  }
  public resetNetworkPolicy() {
    this._networkPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPolicyInput() {
    return this._networkPolicy;
  }

  // outbound_type - computed: false, optional: true, required: false
  private _outboundType?: string; 
  public get outboundType() {
    return this.getStringAttribute('outbound_type');
  }
  public set outboundType(value: string) {
    this._outboundType = value;
  }
  public resetOutboundType() {
    this._outboundType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundTypeInput() {
    return this._outboundType;
  }

  // pod_cidr - computed: false, optional: true, required: false
  private _podCidr?: string; 
  public get podCidr() {
    return this.getStringAttribute('pod_cidr');
  }
  public set podCidr(value: string) {
    this._podCidr = value;
  }
  public resetPodCidr() {
    this._podCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podCidrInput() {
    return this._podCidr;
  }

  // service_cidr - computed: false, optional: true, required: false
  private _serviceCidr?: string; 
  public get serviceCidr() {
    return this.getStringAttribute('service_cidr');
  }
  public set serviceCidr(value: string) {
    this._serviceCidr = value;
  }
  public resetServiceCidr() {
    this._serviceCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceCidrInput() {
    return this._serviceCidr;
  }

  // load_balancer_profile - computed: false, optional: true, required: false
  private _loadBalancerProfile = new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileList(this, "load_balancer_profile", false);
  public get loadBalancerProfile() {
    return this._loadBalancerProfile;
  }
  public putLoadBalancerProfile(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfile[] | cdktf.IResolvable) {
    this._loadBalancerProfile.internalValue = value;
  }
  public resetLoadBalancerProfile() {
    this._loadBalancerProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerProfileInput() {
    return this._loadBalancerProfile.internalValue;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfile[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesOidcIssuerProfile {
  /**
  * Whether to enable OIDC Issuer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#enabled DataRafayAksCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesOidcIssuerProfileToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesOidcIssuerProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesOidcIssuerProfileToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesOidcIssuerProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesOidcIssuerProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesOidcIssuerProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesOidcIssuerProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesOidcIssuerProfileList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesOidcIssuerProfile[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesOidcIssuerProfileOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesOidcIssuerProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesIdentity {
  /**
  * The client ID of the user assigned identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#client_id DataRafayAksCluster#client_id}
  */
  readonly clientId?: string;
  /**
  * The object ID of the user assigned identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#object_id DataRafayAksCluster#object_id}
  */
  readonly objectId?: string;
  /**
  * The resource ID of the user assigned identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#resource_id DataRafayAksCluster#resource_id}
  */
  readonly resourceId?: string;
}

export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesIdentityToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    object_id: cdktf.stringToTerraform(struct!.objectId),
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesIdentityToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_id: {
      value: cdktf.stringToHclTerraform(struct!.objectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesIdentityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesIdentity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._objectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectId = this._objectId;
    }
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesIdentity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._objectId = undefined;
      this._resourceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._objectId = value.objectId;
      this._resourceId = value.resourceId;
    }
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // object_id - computed: false, optional: true, required: false
  private _objectId?: string; 
  public get objectId() {
    return this.getStringAttribute('object_id');
  }
  public set objectId(value: string) {
    this._objectId = value;
  }
  public resetObjectId() {
    this._objectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdInput() {
    return this._objectId;
  }

  // resource_id - computed: false, optional: true, required: false
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  public resetResourceId() {
    this._resourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesIdentityList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesIdentity[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesIdentityOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesIdentityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentities {
  /**
  * The binding selector to use for the AzureIdentityBinding resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#binding_selector DataRafayAksCluster#binding_selector}
  */
  readonly bindingSelector?: string;
  /**
  * The name of the pod identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#name DataRafayAksCluster#name}
  */
  readonly name: string;
  /**
  * The namespace of the pod identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#namespace DataRafayAksCluster#namespace}
  */
  readonly namespace: string;
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#identity DataRafayAksCluster#identity}
  */
  readonly identity: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesIdentity[] | cdktf.IResolvable;
}

export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binding_selector: cdktf.stringToTerraform(struct!.bindingSelector),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    identity: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesIdentityToTerraform, true)(struct!.identity),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    binding_selector: {
      value: cdktf.stringToHclTerraform(struct!.bindingSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesIdentityToHclTerraform, true)(struct!.identity),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesIdentityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bindingSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindingSelector = this._bindingSelector;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._identity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identity = this._identity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bindingSelector = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._identity.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bindingSelector = value.bindingSelector;
      this._name = value.name;
      this._namespace = value.namespace;
      this._identity.internalValue = value.identity;
    }
  }

  // binding_selector - computed: false, optional: true, required: false
  private _bindingSelector?: string; 
  public get bindingSelector() {
    return this.getStringAttribute('binding_selector');
  }
  public set bindingSelector(value: string) {
    this._bindingSelector = value;
  }
  public resetBindingSelector() {
    this._bindingSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingSelectorInput() {
    return this._bindingSelector;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // identity - computed: false, optional: false, required: true
  private _identity = new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesIdentityList(this, "identity", false);
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesIdentity[] | cdktf.IResolvable) {
    this._identity.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentities[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentityExceptions {
  /**
  * The name of the pod identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#name DataRafayAksCluster#name}
  */
  readonly name: string;
  /**
  * The namespace of the pod identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#namespace DataRafayAksCluster#namespace}
  */
  readonly namespace: string;
  /**
  * The pod labels to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#pod_labels DataRafayAksCluster#pod_labels}
  */
  readonly podLabels: { [key: string]: string };
}

export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentityExceptionsToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentityExceptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    pod_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podLabels),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentityExceptionsToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentityExceptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentityExceptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentityExceptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._podLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.podLabels = this._podLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentityExceptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._podLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._podLabels = value.podLabels;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // pod_labels - computed: false, optional: false, required: true
  private _podLabels?: { [key: string]: string }; 
  public get podLabels() {
    return this.getStringMapAttribute('pod_labels');
  }
  public set podLabels(value: { [key: string]: string }) {
    this._podLabels = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podLabelsInput() {
    return this._podLabels;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentityExceptionsList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentityExceptions[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentityExceptionsOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentityExceptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfile {
  /**
  * Running in Kubenet is disabled by default due to the security related nature of AAD Pod Identity and the risks of IP spoofing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#allow_network_plugin_kubenet DataRafayAksCluster#allow_network_plugin_kubenet}
  */
  readonly allowNetworkPluginKubenet?: boolean | cdktf.IResolvable;
  /**
  * Whether the pod identity addon is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#enabled DataRafayAksCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * user_assigned_identities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#user_assigned_identities DataRafayAksCluster#user_assigned_identities}
  */
  readonly userAssignedIdentities?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentities[] | cdktf.IResolvable;
  /**
  * user_assigned_identity_exceptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#user_assigned_identity_exceptions DataRafayAksCluster#user_assigned_identity_exceptions}
  */
  readonly userAssignedIdentityExceptions?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentityExceptions[] | cdktf.IResolvable;
}

export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_network_plugin_kubenet: cdktf.booleanToTerraform(struct!.allowNetworkPluginKubenet),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    user_assigned_identities: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesToTerraform, true)(struct!.userAssignedIdentities),
    user_assigned_identity_exceptions: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentityExceptionsToTerraform, true)(struct!.userAssignedIdentityExceptions),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_network_plugin_kubenet: {
      value: cdktf.booleanToHclTerraform(struct!.allowNetworkPluginKubenet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_assigned_identities: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesToHclTerraform, true)(struct!.userAssignedIdentities),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesList",
    },
    user_assigned_identity_exceptions: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentityExceptionsToHclTerraform, true)(struct!.userAssignedIdentityExceptions),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentityExceptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowNetworkPluginKubenet !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowNetworkPluginKubenet = this._allowNetworkPluginKubenet;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._userAssignedIdentities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAssignedIdentities = this._userAssignedIdentities?.internalValue;
    }
    if (this._userAssignedIdentityExceptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAssignedIdentityExceptions = this._userAssignedIdentityExceptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowNetworkPluginKubenet = undefined;
      this._enabled = undefined;
      this._userAssignedIdentities.internalValue = undefined;
      this._userAssignedIdentityExceptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowNetworkPluginKubenet = value.allowNetworkPluginKubenet;
      this._enabled = value.enabled;
      this._userAssignedIdentities.internalValue = value.userAssignedIdentities;
      this._userAssignedIdentityExceptions.internalValue = value.userAssignedIdentityExceptions;
    }
  }

  // allow_network_plugin_kubenet - computed: false, optional: true, required: false
  private _allowNetworkPluginKubenet?: boolean | cdktf.IResolvable; 
  public get allowNetworkPluginKubenet() {
    return this.getBooleanAttribute('allow_network_plugin_kubenet');
  }
  public set allowNetworkPluginKubenet(value: boolean | cdktf.IResolvable) {
    this._allowNetworkPluginKubenet = value;
  }
  public resetAllowNetworkPluginKubenet() {
    this._allowNetworkPluginKubenet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowNetworkPluginKubenetInput() {
    return this._allowNetworkPluginKubenet;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // user_assigned_identities - computed: false, optional: true, required: false
  private _userAssignedIdentities = new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesList(this, "user_assigned_identities", false);
  public get userAssignedIdentities() {
    return this._userAssignedIdentities;
  }
  public putUserAssignedIdentities(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentities[] | cdktf.IResolvable) {
    this._userAssignedIdentities.internalValue = value;
  }
  public resetUserAssignedIdentities() {
    this._userAssignedIdentities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAssignedIdentitiesInput() {
    return this._userAssignedIdentities.internalValue;
  }

  // user_assigned_identity_exceptions - computed: false, optional: true, required: false
  private _userAssignedIdentityExceptions = new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentityExceptionsList(this, "user_assigned_identity_exceptions", false);
  public get userAssignedIdentityExceptions() {
    return this._userAssignedIdentityExceptions;
  }
  public putUserAssignedIdentityExceptions(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentityExceptions[] | cdktf.IResolvable) {
    this._userAssignedIdentityExceptions.internalValue = value;
  }
  public resetUserAssignedIdentityExceptions() {
    this._userAssignedIdentityExceptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAssignedIdentityExceptionsInput() {
    return this._userAssignedIdentityExceptions.internalValue;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfile[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPowerState {
  /**
  * Whether the cluster is running or stopped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#code DataRafayAksCluster#code}
  */
  readonly code?: string;
}

export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPowerStateToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPowerState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.stringToTerraform(struct!.code),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPowerStateToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPowerState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.stringToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPowerStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPowerState | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPowerState | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: string; 
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPowerStateList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPowerState[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPowerStateOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPowerStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPrivateLinkResources {
  /**
  * The group ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#group_id DataRafayAksCluster#group_id}
  */
  readonly groupId?: string;
  /**
  * The ID of the private link resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#id DataRafayAksCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the private link resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#name DataRafayAksCluster#name}
  */
  readonly name?: string;
  /**
  * The RequiredMembers of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#required_members DataRafayAksCluster#required_members}
  */
  readonly requiredMembers?: string[];
  /**
  * The resource type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#type DataRafayAksCluster#type}
  */
  readonly type?: string;
}

export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPrivateLinkResourcesToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPrivateLinkResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_id: cdktf.stringToTerraform(struct!.groupId),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    required_members: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requiredMembers),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPrivateLinkResourcesToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPrivateLinkResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required_members: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.requiredMembers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPrivateLinkResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPrivateLinkResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._requiredMembers !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredMembers = this._requiredMembers;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPrivateLinkResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupId = undefined;
      this._id = undefined;
      this._name = undefined;
      this._requiredMembers = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupId = value.groupId;
      this._id = value.id;
      this._name = value.name;
      this._requiredMembers = value.requiredMembers;
      this._type = value.type;
    }
  }

  // group_id - computed: false, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // id - computed: false, optional: true, required: false
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // required_members - computed: false, optional: true, required: false
  private _requiredMembers?: string[]; 
  public get requiredMembers() {
    return this.getListAttribute('required_members');
  }
  public set requiredMembers(value: string[]) {
    this._requiredMembers = value;
  }
  public resetRequiredMembers() {
    this._requiredMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredMembersInput() {
    return this._requiredMembers;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPrivateLinkResourcesList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPrivateLinkResources[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPrivateLinkResourcesOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPrivateLinkResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileWorkloadIdentity {
  /**
  * Whether to enable workload identity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#enabled DataRafayAksCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileWorkloadIdentityToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileWorkloadIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileWorkloadIdentityToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileWorkloadIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileWorkloadIdentityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileWorkloadIdentity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileWorkloadIdentity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileWorkloadIdentityList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileWorkloadIdentity[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileWorkloadIdentityOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileWorkloadIdentityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfile {
  /**
  * workload_identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#workload_identity DataRafayAksCluster#workload_identity}
  */
  readonly workloadIdentity?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileWorkloadIdentity[] | cdktf.IResolvable;
}

export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workload_identity: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileWorkloadIdentityToTerraform, true)(struct!.workloadIdentity),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    workload_identity: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileWorkloadIdentityToHclTerraform, true)(struct!.workloadIdentity),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileWorkloadIdentityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workloadIdentity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadIdentity = this._workloadIdentity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._workloadIdentity.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._workloadIdentity.internalValue = value.workloadIdentity;
    }
  }

  // workload_identity - computed: false, optional: true, required: false
  private _workloadIdentity = new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileWorkloadIdentityList(this, "workload_identity", false);
  public get workloadIdentity() {
    return this._workloadIdentity;
  }
  public putWorkloadIdentity(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileWorkloadIdentity[] | cdktf.IResolvable) {
    this._workloadIdentity.internalValue = value;
  }
  public resetWorkloadIdentity() {
    this._workloadIdentity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadIdentityInput() {
    return this._workloadIdentity.internalValue;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfile[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesServicePrincipalProfile {
  /**
  * FORMATTED:The ID for the service principal. If specified, must be set to `[parameters('servicePrincipalClientId')]`. This would be set to the cloud credential's client ID during cluster deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#client_id DataRafayAksCluster#client_id}
  */
  readonly clientId: string;
  /**
  * The secret password associated with the service principal in plain text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#secret DataRafayAksCluster#secret}
  */
  readonly secret?: string;
}

export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesServicePrincipalProfileToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesServicePrincipalProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesServicePrincipalProfileToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesServicePrincipalProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesServicePrincipalProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesServicePrincipalProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesServicePrincipalProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._secret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._secret = value.secret;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesServicePrincipalProfileList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesServicePrincipalProfile[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesServicePrincipalProfileOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesServicePrincipalProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesWindowsProfile {
  /**
  * Specifies the name of the administrator account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#admin_username DataRafayAksCluster#admin_username}
  */
  readonly adminUsername: string;
  /**
  * Enable CSI proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#enable_csi_proxy DataRafayAksCluster#enable_csi_proxy}
  */
  readonly enableCsiProxy?: boolean | cdktf.IResolvable;
  /**
  * The license type to use for Windows VMs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#license_type DataRafayAksCluster#license_type}
  */
  readonly licenseType?: string;
}

export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesWindowsProfileToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesWindowsProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_username: cdktf.stringToTerraform(struct!.adminUsername),
    enable_csi_proxy: cdktf.booleanToTerraform(struct!.enableCsiProxy),
    license_type: cdktf.stringToTerraform(struct!.licenseType),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesWindowsProfileToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesWindowsProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_username: {
      value: cdktf.stringToHclTerraform(struct!.adminUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_csi_proxy: {
      value: cdktf.booleanToHclTerraform(struct!.enableCsiProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    license_type: {
      value: cdktf.stringToHclTerraform(struct!.licenseType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesWindowsProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesWindowsProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminUsername = this._adminUsername;
    }
    if (this._enableCsiProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCsiProxy = this._enableCsiProxy;
    }
    if (this._licenseType !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseType = this._licenseType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesWindowsProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminUsername = undefined;
      this._enableCsiProxy = undefined;
      this._licenseType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminUsername = value.adminUsername;
      this._enableCsiProxy = value.enableCsiProxy;
      this._licenseType = value.licenseType;
    }
  }

  // admin_username - computed: false, optional: false, required: true
  private _adminUsername?: string; 
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }
  public set adminUsername(value: string) {
    this._adminUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUsernameInput() {
    return this._adminUsername;
  }

  // enable_csi_proxy - computed: false, optional: true, required: false
  private _enableCsiProxy?: boolean | cdktf.IResolvable; 
  public get enableCsiProxy() {
    return this.getBooleanAttribute('enable_csi_proxy');
  }
  public set enableCsiProxy(value: boolean | cdktf.IResolvable) {
    this._enableCsiProxy = value;
  }
  public resetEnableCsiProxy() {
    this._enableCsiProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCsiProxyInput() {
    return this._enableCsiProxy;
  }

  // license_type - computed: false, optional: true, required: false
  private _licenseType?: string; 
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
  public set licenseType(value: string) {
    this._licenseType = value;
  }
  public resetLicenseType() {
    this._licenseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTypeInput() {
    return this._licenseType;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesWindowsProfileList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesWindowsProfile[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesWindowsProfileOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesWindowsProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecManagedClusterProperties {
  /**
  * The AKS managed cluster addon profiles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#disable_local_accounts DataRafayAksCluster#disable_local_accounts}
  */
  readonly disableLocalAccounts?: boolean | cdktf.IResolvable;
  /**
  * This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskEncryptionSets/{encryptionSetName}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#disk_encryption_set_id DataRafayAksCluster#disk_encryption_set_id}
  */
  readonly diskEncryptionSetId?: string;
  /**
  * This cannot be updated once the Managed Cluster has been created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#dns_prefix DataRafayAksCluster#dns_prefix}
  */
  readonly dnsPrefix?: string;
  /**
  * (DEPRECATED) Whether to enable Kubernetes pod security policy (preview). This feature is set for removal on October 15th, 2020.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#enable_pod_security_policy DataRafayAksCluster#enable_pod_security_policy}
  */
  readonly enablePodSecurityPolicy?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable Kubernetes Role-Based Access Control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#enable_rbac DataRafayAksCluster#enable_rbac}
  */
  readonly enableRbac?: boolean | cdktf.IResolvable;
  /**
  * This cannot be updated once the Managed Cluster has been created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#fqdn_subdomain DataRafayAksCluster#fqdn_subdomain}
  */
  readonly fqdnSubdomain?: string;
  /**
  * Kubernetes version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#kubernetes_version DataRafayAksCluster#kubernetes_version}
  */
  readonly kubernetesVersion: string;
  /**
  * The name of the resource group containing agent pool nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#node_resource_group DataRafayAksCluster#node_resource_group}
  */
  readonly nodeResourceGroup?: string;
  /**
  * aad_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#aad_profile DataRafayAksCluster#aad_profile}
  */
  readonly aadProfile?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAadProfile[] | cdktf.IResolvable;
  /**
  * addon_profiles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#addon_profiles DataRafayAksCluster#addon_profiles}
  */
  readonly addonProfiles?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfiles[] | cdktf.IResolvable;
  /**
  * api_server_access_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#api_server_access_profile DataRafayAksCluster#api_server_access_profile}
  */
  readonly apiServerAccessProfile?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesApiServerAccessProfile[] | cdktf.IResolvable;
  /**
  * auto_scaler_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#auto_scaler_profile DataRafayAksCluster#auto_scaler_profile}
  */
  readonly autoScalerProfile?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoScalerProfile[] | cdktf.IResolvable;
  /**
  * auto_upgrade_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#auto_upgrade_profile DataRafayAksCluster#auto_upgrade_profile}
  */
  readonly autoUpgradeProfile?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoUpgradeProfile[] | cdktf.IResolvable;
  /**
  * http_proxy_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#http_proxy_config DataRafayAksCluster#http_proxy_config}
  */
  readonly httpProxyConfig?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesHttpProxyConfig[] | cdktf.IResolvable;
  /**
  * identity_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#identity_profile DataRafayAksCluster#identity_profile}
  */
  readonly identityProfile?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfile[] | cdktf.IResolvable;
  /**
  * linux_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#linux_profile DataRafayAksCluster#linux_profile}
  */
  readonly linuxProfile?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfile[] | cdktf.IResolvable;
  /**
  * network_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#network_profile DataRafayAksCluster#network_profile}
  */
  readonly networkProfile?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfile[] | cdktf.IResolvable;
  /**
  * oidc_issuer_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#oidc_issuer_profile DataRafayAksCluster#oidc_issuer_profile}
  */
  readonly oidcIssuerProfile?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesOidcIssuerProfile[] | cdktf.IResolvable;
  /**
  * pod_identity_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#pod_identity_profile DataRafayAksCluster#pod_identity_profile}
  */
  readonly podIdentityProfile?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfile[] | cdktf.IResolvable;
  /**
  * power_state block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#power_state DataRafayAksCluster#power_state}
  */
  readonly powerState?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPowerState[] | cdktf.IResolvable;
  /**
  * private_link_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#private_link_resources DataRafayAksCluster#private_link_resources}
  */
  readonly privateLinkResources?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPrivateLinkResources[] | cdktf.IResolvable;
  /**
  * security_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#security_profile DataRafayAksCluster#security_profile}
  */
  readonly securityProfile?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfile[] | cdktf.IResolvable;
  /**
  * service_principal_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#service_principal_profile DataRafayAksCluster#service_principal_profile}
  */
  readonly servicePrincipalProfile?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesServicePrincipalProfile[] | cdktf.IResolvable;
  /**
  * windows_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#windows_profile DataRafayAksCluster#windows_profile}
  */
  readonly windowsProfile?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesWindowsProfile[] | cdktf.IResolvable;
}

export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_local_accounts: cdktf.booleanToTerraform(struct!.disableLocalAccounts),
    disk_encryption_set_id: cdktf.stringToTerraform(struct!.diskEncryptionSetId),
    dns_prefix: cdktf.stringToTerraform(struct!.dnsPrefix),
    enable_pod_security_policy: cdktf.booleanToTerraform(struct!.enablePodSecurityPolicy),
    enable_rbac: cdktf.booleanToTerraform(struct!.enableRbac),
    fqdn_subdomain: cdktf.stringToTerraform(struct!.fqdnSubdomain),
    kubernetes_version: cdktf.stringToTerraform(struct!.kubernetesVersion),
    node_resource_group: cdktf.stringToTerraform(struct!.nodeResourceGroup),
    aad_profile: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAadProfileToTerraform, true)(struct!.aadProfile),
    addon_profiles: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesToTerraform, true)(struct!.addonProfiles),
    api_server_access_profile: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesApiServerAccessProfileToTerraform, true)(struct!.apiServerAccessProfile),
    auto_scaler_profile: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoScalerProfileToTerraform, true)(struct!.autoScalerProfile),
    auto_upgrade_profile: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoUpgradeProfileToTerraform, true)(struct!.autoUpgradeProfile),
    http_proxy_config: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesHttpProxyConfigToTerraform, true)(struct!.httpProxyConfig),
    identity_profile: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileToTerraform, true)(struct!.identityProfile),
    linux_profile: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileToTerraform, true)(struct!.linuxProfile),
    network_profile: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileToTerraform, true)(struct!.networkProfile),
    oidc_issuer_profile: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesOidcIssuerProfileToTerraform, true)(struct!.oidcIssuerProfile),
    pod_identity_profile: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileToTerraform, true)(struct!.podIdentityProfile),
    power_state: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPowerStateToTerraform, true)(struct!.powerState),
    private_link_resources: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPrivateLinkResourcesToTerraform, true)(struct!.privateLinkResources),
    security_profile: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileToTerraform, true)(struct!.securityProfile),
    service_principal_profile: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesServicePrincipalProfileToTerraform, true)(struct!.servicePrincipalProfile),
    windows_profile: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesWindowsProfileToTerraform, true)(struct!.windowsProfile),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_local_accounts: {
      value: cdktf.booleanToHclTerraform(struct!.disableLocalAccounts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disk_encryption_set_id: {
      value: cdktf.stringToHclTerraform(struct!.diskEncryptionSetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_prefix: {
      value: cdktf.stringToHclTerraform(struct!.dnsPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_pod_security_policy: {
      value: cdktf.booleanToHclTerraform(struct!.enablePodSecurityPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_rbac: {
      value: cdktf.booleanToHclTerraform(struct!.enableRbac),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fqdn_subdomain: {
      value: cdktf.stringToHclTerraform(struct!.fqdnSubdomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubernetes_version: {
      value: cdktf.stringToHclTerraform(struct!.kubernetesVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_resource_group: {
      value: cdktf.stringToHclTerraform(struct!.nodeResourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aad_profile: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAadProfileToHclTerraform, true)(struct!.aadProfile),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAadProfileList",
    },
    addon_profiles: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesToHclTerraform, true)(struct!.addonProfiles),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesList",
    },
    api_server_access_profile: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesApiServerAccessProfileToHclTerraform, true)(struct!.apiServerAccessProfile),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesApiServerAccessProfileList",
    },
    auto_scaler_profile: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoScalerProfileToHclTerraform, true)(struct!.autoScalerProfile),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoScalerProfileList",
    },
    auto_upgrade_profile: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoUpgradeProfileToHclTerraform, true)(struct!.autoUpgradeProfile),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoUpgradeProfileList",
    },
    http_proxy_config: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesHttpProxyConfigToHclTerraform, true)(struct!.httpProxyConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesHttpProxyConfigList",
    },
    identity_profile: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileToHclTerraform, true)(struct!.identityProfile),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileList",
    },
    linux_profile: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileToHclTerraform, true)(struct!.linuxProfile),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileList",
    },
    network_profile: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileToHclTerraform, true)(struct!.networkProfile),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileList",
    },
    oidc_issuer_profile: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesOidcIssuerProfileToHclTerraform, true)(struct!.oidcIssuerProfile),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesOidcIssuerProfileList",
    },
    pod_identity_profile: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileToHclTerraform, true)(struct!.podIdentityProfile),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileList",
    },
    power_state: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPowerStateToHclTerraform, true)(struct!.powerState),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPowerStateList",
    },
    private_link_resources: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPrivateLinkResourcesToHclTerraform, true)(struct!.privateLinkResources),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPrivateLinkResourcesList",
    },
    security_profile: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileToHclTerraform, true)(struct!.securityProfile),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileList",
    },
    service_principal_profile: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesServicePrincipalProfileToHclTerraform, true)(struct!.servicePrincipalProfile),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesServicePrincipalProfileList",
    },
    windows_profile: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesWindowsProfileToHclTerraform, true)(struct!.windowsProfile),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesWindowsProfileList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecManagedClusterProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableLocalAccounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableLocalAccounts = this._disableLocalAccounts;
    }
    if (this._diskEncryptionSetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskEncryptionSetId = this._diskEncryptionSetId;
    }
    if (this._dnsPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsPrefix = this._dnsPrefix;
    }
    if (this._enablePodSecurityPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePodSecurityPolicy = this._enablePodSecurityPolicy;
    }
    if (this._enableRbac !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRbac = this._enableRbac;
    }
    if (this._fqdnSubdomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnSubdomain = this._fqdnSubdomain;
    }
    if (this._kubernetesVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesVersion = this._kubernetesVersion;
    }
    if (this._nodeResourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeResourceGroup = this._nodeResourceGroup;
    }
    if (this._aadProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aadProfile = this._aadProfile?.internalValue;
    }
    if (this._addonProfiles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addonProfiles = this._addonProfiles?.internalValue;
    }
    if (this._apiServerAccessProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiServerAccessProfile = this._apiServerAccessProfile?.internalValue;
    }
    if (this._autoScalerProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoScalerProfile = this._autoScalerProfile?.internalValue;
    }
    if (this._autoUpgradeProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoUpgradeProfile = this._autoUpgradeProfile?.internalValue;
    }
    if (this._httpProxyConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProxyConfig = this._httpProxyConfig?.internalValue;
    }
    if (this._identityProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProfile = this._identityProfile?.internalValue;
    }
    if (this._linuxProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linuxProfile = this._linuxProfile?.internalValue;
    }
    if (this._networkProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkProfile = this._networkProfile?.internalValue;
    }
    if (this._oidcIssuerProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidcIssuerProfile = this._oidcIssuerProfile?.internalValue;
    }
    if (this._podIdentityProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podIdentityProfile = this._podIdentityProfile?.internalValue;
    }
    if (this._powerState?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerState = this._powerState?.internalValue;
    }
    if (this._privateLinkResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateLinkResources = this._privateLinkResources?.internalValue;
    }
    if (this._securityProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityProfile = this._securityProfile?.internalValue;
    }
    if (this._servicePrincipalProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePrincipalProfile = this._servicePrincipalProfile?.internalValue;
    }
    if (this._windowsProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsProfile = this._windowsProfile?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableLocalAccounts = undefined;
      this._diskEncryptionSetId = undefined;
      this._dnsPrefix = undefined;
      this._enablePodSecurityPolicy = undefined;
      this._enableRbac = undefined;
      this._fqdnSubdomain = undefined;
      this._kubernetesVersion = undefined;
      this._nodeResourceGroup = undefined;
      this._aadProfile.internalValue = undefined;
      this._addonProfiles.internalValue = undefined;
      this._apiServerAccessProfile.internalValue = undefined;
      this._autoScalerProfile.internalValue = undefined;
      this._autoUpgradeProfile.internalValue = undefined;
      this._httpProxyConfig.internalValue = undefined;
      this._identityProfile.internalValue = undefined;
      this._linuxProfile.internalValue = undefined;
      this._networkProfile.internalValue = undefined;
      this._oidcIssuerProfile.internalValue = undefined;
      this._podIdentityProfile.internalValue = undefined;
      this._powerState.internalValue = undefined;
      this._privateLinkResources.internalValue = undefined;
      this._securityProfile.internalValue = undefined;
      this._servicePrincipalProfile.internalValue = undefined;
      this._windowsProfile.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableLocalAccounts = value.disableLocalAccounts;
      this._diskEncryptionSetId = value.diskEncryptionSetId;
      this._dnsPrefix = value.dnsPrefix;
      this._enablePodSecurityPolicy = value.enablePodSecurityPolicy;
      this._enableRbac = value.enableRbac;
      this._fqdnSubdomain = value.fqdnSubdomain;
      this._kubernetesVersion = value.kubernetesVersion;
      this._nodeResourceGroup = value.nodeResourceGroup;
      this._aadProfile.internalValue = value.aadProfile;
      this._addonProfiles.internalValue = value.addonProfiles;
      this._apiServerAccessProfile.internalValue = value.apiServerAccessProfile;
      this._autoScalerProfile.internalValue = value.autoScalerProfile;
      this._autoUpgradeProfile.internalValue = value.autoUpgradeProfile;
      this._httpProxyConfig.internalValue = value.httpProxyConfig;
      this._identityProfile.internalValue = value.identityProfile;
      this._linuxProfile.internalValue = value.linuxProfile;
      this._networkProfile.internalValue = value.networkProfile;
      this._oidcIssuerProfile.internalValue = value.oidcIssuerProfile;
      this._podIdentityProfile.internalValue = value.podIdentityProfile;
      this._powerState.internalValue = value.powerState;
      this._privateLinkResources.internalValue = value.privateLinkResources;
      this._securityProfile.internalValue = value.securityProfile;
      this._servicePrincipalProfile.internalValue = value.servicePrincipalProfile;
      this._windowsProfile.internalValue = value.windowsProfile;
    }
  }

  // disable_local_accounts - computed: false, optional: true, required: false
  private _disableLocalAccounts?: boolean | cdktf.IResolvable; 
  public get disableLocalAccounts() {
    return this.getBooleanAttribute('disable_local_accounts');
  }
  public set disableLocalAccounts(value: boolean | cdktf.IResolvable) {
    this._disableLocalAccounts = value;
  }
  public resetDisableLocalAccounts() {
    this._disableLocalAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableLocalAccountsInput() {
    return this._disableLocalAccounts;
  }

  // disk_encryption_set_id - computed: false, optional: true, required: false
  private _diskEncryptionSetId?: string; 
  public get diskEncryptionSetId() {
    return this.getStringAttribute('disk_encryption_set_id');
  }
  public set diskEncryptionSetId(value: string) {
    this._diskEncryptionSetId = value;
  }
  public resetDiskEncryptionSetId() {
    this._diskEncryptionSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionSetIdInput() {
    return this._diskEncryptionSetId;
  }

  // dns_prefix - computed: false, optional: true, required: false
  private _dnsPrefix?: string; 
  public get dnsPrefix() {
    return this.getStringAttribute('dns_prefix');
  }
  public set dnsPrefix(value: string) {
    this._dnsPrefix = value;
  }
  public resetDnsPrefix() {
    this._dnsPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPrefixInput() {
    return this._dnsPrefix;
  }

  // enable_pod_security_policy - computed: false, optional: true, required: false
  private _enablePodSecurityPolicy?: boolean | cdktf.IResolvable; 
  public get enablePodSecurityPolicy() {
    return this.getBooleanAttribute('enable_pod_security_policy');
  }
  public set enablePodSecurityPolicy(value: boolean | cdktf.IResolvable) {
    this._enablePodSecurityPolicy = value;
  }
  public resetEnablePodSecurityPolicy() {
    this._enablePodSecurityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePodSecurityPolicyInput() {
    return this._enablePodSecurityPolicy;
  }

  // enable_rbac - computed: false, optional: true, required: false
  private _enableRbac?: boolean | cdktf.IResolvable; 
  public get enableRbac() {
    return this.getBooleanAttribute('enable_rbac');
  }
  public set enableRbac(value: boolean | cdktf.IResolvable) {
    this._enableRbac = value;
  }
  public resetEnableRbac() {
    this._enableRbac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRbacInput() {
    return this._enableRbac;
  }

  // fqdn_subdomain - computed: false, optional: true, required: false
  private _fqdnSubdomain?: string; 
  public get fqdnSubdomain() {
    return this.getStringAttribute('fqdn_subdomain');
  }
  public set fqdnSubdomain(value: string) {
    this._fqdnSubdomain = value;
  }
  public resetFqdnSubdomain() {
    this._fqdnSubdomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnSubdomainInput() {
    return this._fqdnSubdomain;
  }

  // kubernetes_version - computed: false, optional: false, required: true
  private _kubernetesVersion?: string; 
  public get kubernetesVersion() {
    return this.getStringAttribute('kubernetes_version');
  }
  public set kubernetesVersion(value: string) {
    this._kubernetesVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesVersionInput() {
    return this._kubernetesVersion;
  }

  // node_resource_group - computed: false, optional: true, required: false
  private _nodeResourceGroup?: string; 
  public get nodeResourceGroup() {
    return this.getStringAttribute('node_resource_group');
  }
  public set nodeResourceGroup(value: string) {
    this._nodeResourceGroup = value;
  }
  public resetNodeResourceGroup() {
    this._nodeResourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeResourceGroupInput() {
    return this._nodeResourceGroup;
  }

  // aad_profile - computed: false, optional: true, required: false
  private _aadProfile = new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAadProfileList(this, "aad_profile", false);
  public get aadProfile() {
    return this._aadProfile;
  }
  public putAadProfile(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAadProfile[] | cdktf.IResolvable) {
    this._aadProfile.internalValue = value;
  }
  public resetAadProfile() {
    this._aadProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aadProfileInput() {
    return this._aadProfile.internalValue;
  }

  // addon_profiles - computed: false, optional: true, required: false
  private _addonProfiles = new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesList(this, "addon_profiles", false);
  public get addonProfiles() {
    return this._addonProfiles;
  }
  public putAddonProfiles(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfiles[] | cdktf.IResolvable) {
    this._addonProfiles.internalValue = value;
  }
  public resetAddonProfiles() {
    this._addonProfiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonProfilesInput() {
    return this._addonProfiles.internalValue;
  }

  // api_server_access_profile - computed: false, optional: true, required: false
  private _apiServerAccessProfile = new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesApiServerAccessProfileList(this, "api_server_access_profile", false);
  public get apiServerAccessProfile() {
    return this._apiServerAccessProfile;
  }
  public putApiServerAccessProfile(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesApiServerAccessProfile[] | cdktf.IResolvable) {
    this._apiServerAccessProfile.internalValue = value;
  }
  public resetApiServerAccessProfile() {
    this._apiServerAccessProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiServerAccessProfileInput() {
    return this._apiServerAccessProfile.internalValue;
  }

  // auto_scaler_profile - computed: false, optional: true, required: false
  private _autoScalerProfile = new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoScalerProfileList(this, "auto_scaler_profile", false);
  public get autoScalerProfile() {
    return this._autoScalerProfile;
  }
  public putAutoScalerProfile(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoScalerProfile[] | cdktf.IResolvable) {
    this._autoScalerProfile.internalValue = value;
  }
  public resetAutoScalerProfile() {
    this._autoScalerProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalerProfileInput() {
    return this._autoScalerProfile.internalValue;
  }

  // auto_upgrade_profile - computed: false, optional: true, required: false
  private _autoUpgradeProfile = new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoUpgradeProfileList(this, "auto_upgrade_profile", false);
  public get autoUpgradeProfile() {
    return this._autoUpgradeProfile;
  }
  public putAutoUpgradeProfile(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoUpgradeProfile[] | cdktf.IResolvable) {
    this._autoUpgradeProfile.internalValue = value;
  }
  public resetAutoUpgradeProfile() {
    this._autoUpgradeProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpgradeProfileInput() {
    return this._autoUpgradeProfile.internalValue;
  }

  // http_proxy_config - computed: false, optional: true, required: false
  private _httpProxyConfig = new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesHttpProxyConfigList(this, "http_proxy_config", false);
  public get httpProxyConfig() {
    return this._httpProxyConfig;
  }
  public putHttpProxyConfig(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesHttpProxyConfig[] | cdktf.IResolvable) {
    this._httpProxyConfig.internalValue = value;
  }
  public resetHttpProxyConfig() {
    this._httpProxyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyConfigInput() {
    return this._httpProxyConfig.internalValue;
  }

  // identity_profile - computed: false, optional: true, required: false
  private _identityProfile = new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileList(this, "identity_profile", false);
  public get identityProfile() {
    return this._identityProfile;
  }
  public putIdentityProfile(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfile[] | cdktf.IResolvable) {
    this._identityProfile.internalValue = value;
  }
  public resetIdentityProfile() {
    this._identityProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProfileInput() {
    return this._identityProfile.internalValue;
  }

  // linux_profile - computed: false, optional: true, required: false
  private _linuxProfile = new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileList(this, "linux_profile", false);
  public get linuxProfile() {
    return this._linuxProfile;
  }
  public putLinuxProfile(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfile[] | cdktf.IResolvable) {
    this._linuxProfile.internalValue = value;
  }
  public resetLinuxProfile() {
    this._linuxProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxProfileInput() {
    return this._linuxProfile.internalValue;
  }

  // network_profile - computed: false, optional: true, required: false
  private _networkProfile = new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileList(this, "network_profile", false);
  public get networkProfile() {
    return this._networkProfile;
  }
  public putNetworkProfile(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfile[] | cdktf.IResolvable) {
    this._networkProfile.internalValue = value;
  }
  public resetNetworkProfile() {
    this._networkProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProfileInput() {
    return this._networkProfile.internalValue;
  }

  // oidc_issuer_profile - computed: false, optional: true, required: false
  private _oidcIssuerProfile = new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesOidcIssuerProfileList(this, "oidc_issuer_profile", false);
  public get oidcIssuerProfile() {
    return this._oidcIssuerProfile;
  }
  public putOidcIssuerProfile(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesOidcIssuerProfile[] | cdktf.IResolvable) {
    this._oidcIssuerProfile.internalValue = value;
  }
  public resetOidcIssuerProfile() {
    this._oidcIssuerProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcIssuerProfileInput() {
    return this._oidcIssuerProfile.internalValue;
  }

  // pod_identity_profile - computed: false, optional: true, required: false
  private _podIdentityProfile = new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileList(this, "pod_identity_profile", false);
  public get podIdentityProfile() {
    return this._podIdentityProfile;
  }
  public putPodIdentityProfile(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfile[] | cdktf.IResolvable) {
    this._podIdentityProfile.internalValue = value;
  }
  public resetPodIdentityProfile() {
    this._podIdentityProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podIdentityProfileInput() {
    return this._podIdentityProfile.internalValue;
  }

  // power_state - computed: false, optional: true, required: false
  private _powerState = new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPowerStateList(this, "power_state", false);
  public get powerState() {
    return this._powerState;
  }
  public putPowerState(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPowerState[] | cdktf.IResolvable) {
    this._powerState.internalValue = value;
  }
  public resetPowerState() {
    this._powerState.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerStateInput() {
    return this._powerState.internalValue;
  }

  // private_link_resources - computed: false, optional: true, required: false
  private _privateLinkResources = new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPrivateLinkResourcesList(this, "private_link_resources", false);
  public get privateLinkResources() {
    return this._privateLinkResources;
  }
  public putPrivateLinkResources(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesPrivateLinkResources[] | cdktf.IResolvable) {
    this._privateLinkResources.internalValue = value;
  }
  public resetPrivateLinkResources() {
    this._privateLinkResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLinkResourcesInput() {
    return this._privateLinkResources.internalValue;
  }

  // security_profile - computed: false, optional: true, required: false
  private _securityProfile = new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileList(this, "security_profile", false);
  public get securityProfile() {
    return this._securityProfile;
  }
  public putSecurityProfile(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfile[] | cdktf.IResolvable) {
    this._securityProfile.internalValue = value;
  }
  public resetSecurityProfile() {
    this._securityProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProfileInput() {
    return this._securityProfile.internalValue;
  }

  // service_principal_profile - computed: false, optional: true, required: false
  private _servicePrincipalProfile = new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesServicePrincipalProfileList(this, "service_principal_profile", false);
  public get servicePrincipalProfile() {
    return this._servicePrincipalProfile;
  }
  public putServicePrincipalProfile(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesServicePrincipalProfile[] | cdktf.IResolvable) {
    this._servicePrincipalProfile.internalValue = value;
  }
  public resetServicePrincipalProfile() {
    this._servicePrincipalProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalProfileInput() {
    return this._servicePrincipalProfile.internalValue;
  }

  // windows_profile - computed: false, optional: true, required: false
  private _windowsProfile = new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesWindowsProfileList(this, "windows_profile", false);
  public get windowsProfile() {
    return this._windowsProfile;
  }
  public putWindowsProfile(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesWindowsProfile[] | cdktf.IResolvable) {
    this._windowsProfile.internalValue = value;
  }
  public resetWindowsProfile() {
    this._windowsProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsProfileInput() {
    return this._windowsProfile.internalValue;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecManagedClusterProperties[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecManagedClusterSku {
  /**
  * The name of a managed cluster SKU.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#name DataRafayAksCluster#name}
  */
  readonly name?: string;
  /**
  *  Valid values are Paid, Free.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#tier DataRafayAksCluster#tier}
  */
  readonly tier?: string;
}

export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterSkuToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterSku | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    tier: cdktf.stringToTerraform(struct!.tier),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterSkuToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterSku | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tier: {
      value: cdktf.stringToHclTerraform(struct!.tier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterSkuOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecManagedClusterSku | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tier !== undefined) {
      hasAnyValues = true;
      internalValueResult.tier = this._tier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterSku | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._tier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._tier = value.tier;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // tier - computed: false, optional: true, required: false
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  public resetTier() {
    this._tier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterSkuList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecManagedClusterSku[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecManagedClusterSkuOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecManagedClusterSkuOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecManagedCluster {
  /**
  * Azure resource managed cluster api version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#apiversion DataRafayAksCluster#apiversion}
  */
  readonly apiversion: string;
  /**
  * AKS cluster location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#location DataRafayAksCluster#location}
  */
  readonly location: string;
  /**
  * Resource tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#tags DataRafayAksCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#type DataRafayAksCluster#type}
  */
  readonly type?: string;
  /**
  * additional_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#additional_metadata DataRafayAksCluster#additional_metadata}
  */
  readonly additionalMetadata?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadata[] | cdktf.IResolvable;
  /**
  * extended_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#extended_location DataRafayAksCluster#extended_location}
  */
  readonly extendedLocation?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterExtendedLocation[] | cdktf.IResolvable;
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#identity DataRafayAksCluster#identity}
  */
  readonly identity?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterIdentity[] | cdktf.IResolvable;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#properties DataRafayAksCluster#properties}
  */
  readonly properties: DataRafayAksClusterSpecClusterConfigSpecManagedClusterProperties[] | cdktf.IResolvable;
  /**
  * sku block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#sku DataRafayAksCluster#sku}
  */
  readonly sku?: DataRafayAksClusterSpecClusterConfigSpecManagedClusterSku[] | cdktf.IResolvable;
}

export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apiversion: cdktf.stringToTerraform(struct!.apiversion),
    location: cdktf.stringToTerraform(struct!.location),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    type: cdktf.stringToTerraform(struct!.type),
    additional_metadata: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataToTerraform, true)(struct!.additionalMetadata),
    extended_location: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecManagedClusterExtendedLocationToTerraform, true)(struct!.extendedLocation),
    identity: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecManagedClusterIdentityToTerraform, true)(struct!.identity),
    properties: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesToTerraform, true)(struct!.properties),
    sku: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecManagedClusterSkuToTerraform, true)(struct!.sku),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecManagedClusterToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecManagedCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apiversion: {
      value: cdktf.stringToHclTerraform(struct!.apiversion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    additional_metadata: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataToHclTerraform, true)(struct!.additionalMetadata),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataList",
    },
    extended_location: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecManagedClusterExtendedLocationToHclTerraform, true)(struct!.extendedLocation),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecManagedClusterExtendedLocationList",
    },
    identity: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecManagedClusterIdentityToHclTerraform, true)(struct!.identity),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecManagedClusterIdentityList",
    },
    properties: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesToHclTerraform, true)(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesList",
    },
    sku: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecManagedClusterSkuToHclTerraform, true)(struct!.sku),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecManagedClusterSkuList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecManagedCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiversion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiversion = this._apiversion;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._additionalMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalMetadata = this._additionalMetadata?.internalValue;
    }
    if (this._extendedLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedLocation = this._extendedLocation?.internalValue;
    }
    if (this._identity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identity = this._identity?.internalValue;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    if (this._sku?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sku = this._sku?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecManagedCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiversion = undefined;
      this._location = undefined;
      this._tags = undefined;
      this._type = undefined;
      this._additionalMetadata.internalValue = undefined;
      this._extendedLocation.internalValue = undefined;
      this._identity.internalValue = undefined;
      this._properties.internalValue = undefined;
      this._sku.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiversion = value.apiversion;
      this._location = value.location;
      this._tags = value.tags;
      this._type = value.type;
      this._additionalMetadata.internalValue = value.additionalMetadata;
      this._extendedLocation.internalValue = value.extendedLocation;
      this._identity.internalValue = value.identity;
      this._properties.internalValue = value.properties;
      this._sku.internalValue = value.sku;
    }
  }

  // apiversion - computed: false, optional: false, required: true
  private _apiversion?: string; 
  public get apiversion() {
    return this.getStringAttribute('apiversion');
  }
  public set apiversion(value: string) {
    this._apiversion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiversionInput() {
    return this._apiversion;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // additional_metadata - computed: false, optional: true, required: false
  private _additionalMetadata = new DataRafayAksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataList(this, "additional_metadata", false);
  public get additionalMetadata() {
    return this._additionalMetadata;
  }
  public putAdditionalMetadata(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadata[] | cdktf.IResolvable) {
    this._additionalMetadata.internalValue = value;
  }
  public resetAdditionalMetadata() {
    this._additionalMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalMetadataInput() {
    return this._additionalMetadata.internalValue;
  }

  // extended_location - computed: false, optional: true, required: false
  private _extendedLocation = new DataRafayAksClusterSpecClusterConfigSpecManagedClusterExtendedLocationList(this, "extended_location", false);
  public get extendedLocation() {
    return this._extendedLocation;
  }
  public putExtendedLocation(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterExtendedLocation[] | cdktf.IResolvable) {
    this._extendedLocation.internalValue = value;
  }
  public resetExtendedLocation() {
    this._extendedLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedLocationInput() {
    return this._extendedLocation.internalValue;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new DataRafayAksClusterSpecClusterConfigSpecManagedClusterIdentityList(this, "identity", false);
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterIdentity[] | cdktf.IResolvable) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // properties - computed: false, optional: false, required: true
  private _properties = new DataRafayAksClusterSpecClusterConfigSpecManagedClusterPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
  public putProperties(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterProperties[] | cdktf.IResolvable) {
    this._properties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }

  // sku - computed: false, optional: true, required: false
  private _sku = new DataRafayAksClusterSpecClusterConfigSpecManagedClusterSkuList(this, "sku", false);
  public get sku() {
    return this._sku;
  }
  public putSku(value: DataRafayAksClusterSpecClusterConfigSpecManagedClusterSku[] | cdktf.IResolvable) {
    this._sku.internalValue = value;
  }
  public resetSku() {
    this._sku.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku.internalValue;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecManagedClusterList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecManagedCluster[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecManagedClusterOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecManagedClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesKubeletConfig {
  /**
  * Allowed list of unsafe sysctls or unsafe sysctl patterns (ending in *).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#allowed_unsafe_sysctls DataRafayAksCluster#allowed_unsafe_sysctls}
  */
  readonly allowedUnsafeSysctls?: string[];
  /**
  * The maximum number of container log files that can be present for a container. The number must be ≥ 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#container_log_max_files DataRafayAksCluster#container_log_max_files}
  */
  readonly containerLogMaxFiles?: number;
  /**
  * The maximum size (e.g. 10Mi) of container log file before it is rotated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#container_log_max_size_mb DataRafayAksCluster#container_log_max_size_mb}
  */
  readonly containerLogMaxSizeMb?: number;
  /**
  * The default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#cpu_cfs_quota DataRafayAksCluster#cpu_cfs_quota}
  */
  readonly cpuCfsQuota?: boolean | cdktf.IResolvable;
  /**
  * Valid values are a sequence of decimal numbers with an optional fraction and a unit suffix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#cpu_cfs_quota_period DataRafayAksCluster#cpu_cfs_quota_period}
  */
  readonly cpuCfsQuotaPeriod?: string;
  /**
  * See Kubernetes CPU management policies for more information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#cpu_manager_policy DataRafayAksCluster#cpu_manager_policy}
  */
  readonly cpuManagerPolicy?: string;
  /**
  * If set to true it will make the Kubelet fail to start if swap is enabled on the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#fail_swap_on DataRafayAksCluster#fail_swap_on}
  */
  readonly failSwapOn?: boolean | cdktf.IResolvable;
  /**
  * To disable image garbage collection, set to 100. The default is 85%
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#image_gc_high_threshold DataRafayAksCluster#image_gc_high_threshold}
  */
  readonly imageGcHighThreshold?: number;
  /**
  * This cannot be set higher than imageGcHighThreshold. The default is 80%
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#image_gc_low_threshold DataRafayAksCluster#image_gc_low_threshold}
  */
  readonly imageGcLowThreshold?: number;
  /**
  * The maximum number of processes per pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#pod_max_pids DataRafayAksCluster#pod_max_pids}
  */
  readonly podMaxPids?: number;
  /**
  * Allowed values are none, best-effort, restricted, and single-numa-node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#topology_manager_policy DataRafayAksCluster#topology_manager_policy}
  */
  readonly topologyManagerPolicy?: string;
}

export function dataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesKubeletConfigToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesKubeletConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_unsafe_sysctls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedUnsafeSysctls),
    container_log_max_files: cdktf.numberToTerraform(struct!.containerLogMaxFiles),
    container_log_max_size_mb: cdktf.numberToTerraform(struct!.containerLogMaxSizeMb),
    cpu_cfs_quota: cdktf.booleanToTerraform(struct!.cpuCfsQuota),
    cpu_cfs_quota_period: cdktf.stringToTerraform(struct!.cpuCfsQuotaPeriod),
    cpu_manager_policy: cdktf.stringToTerraform(struct!.cpuManagerPolicy),
    fail_swap_on: cdktf.booleanToTerraform(struct!.failSwapOn),
    image_gc_high_threshold: cdktf.numberToTerraform(struct!.imageGcHighThreshold),
    image_gc_low_threshold: cdktf.numberToTerraform(struct!.imageGcLowThreshold),
    pod_max_pids: cdktf.numberToTerraform(struct!.podMaxPids),
    topology_manager_policy: cdktf.stringToTerraform(struct!.topologyManagerPolicy),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesKubeletConfigToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesKubeletConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_unsafe_sysctls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedUnsafeSysctls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    container_log_max_files: {
      value: cdktf.numberToHclTerraform(struct!.containerLogMaxFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    container_log_max_size_mb: {
      value: cdktf.numberToHclTerraform(struct!.containerLogMaxSizeMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_cfs_quota: {
      value: cdktf.booleanToHclTerraform(struct!.cpuCfsQuota),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cpu_cfs_quota_period: {
      value: cdktf.stringToHclTerraform(struct!.cpuCfsQuotaPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_manager_policy: {
      value: cdktf.stringToHclTerraform(struct!.cpuManagerPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fail_swap_on: {
      value: cdktf.booleanToHclTerraform(struct!.failSwapOn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image_gc_high_threshold: {
      value: cdktf.numberToHclTerraform(struct!.imageGcHighThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    image_gc_low_threshold: {
      value: cdktf.numberToHclTerraform(struct!.imageGcLowThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pod_max_pids: {
      value: cdktf.numberToHclTerraform(struct!.podMaxPids),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    topology_manager_policy: {
      value: cdktf.stringToHclTerraform(struct!.topologyManagerPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesKubeletConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesKubeletConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedUnsafeSysctls !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedUnsafeSysctls = this._allowedUnsafeSysctls;
    }
    if (this._containerLogMaxFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerLogMaxFiles = this._containerLogMaxFiles;
    }
    if (this._containerLogMaxSizeMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerLogMaxSizeMb = this._containerLogMaxSizeMb;
    }
    if (this._cpuCfsQuota !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCfsQuota = this._cpuCfsQuota;
    }
    if (this._cpuCfsQuotaPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCfsQuotaPeriod = this._cpuCfsQuotaPeriod;
    }
    if (this._cpuManagerPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuManagerPolicy = this._cpuManagerPolicy;
    }
    if (this._failSwapOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.failSwapOn = this._failSwapOn;
    }
    if (this._imageGcHighThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageGcHighThreshold = this._imageGcHighThreshold;
    }
    if (this._imageGcLowThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageGcLowThreshold = this._imageGcLowThreshold;
    }
    if (this._podMaxPids !== undefined) {
      hasAnyValues = true;
      internalValueResult.podMaxPids = this._podMaxPids;
    }
    if (this._topologyManagerPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyManagerPolicy = this._topologyManagerPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesKubeletConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedUnsafeSysctls = undefined;
      this._containerLogMaxFiles = undefined;
      this._containerLogMaxSizeMb = undefined;
      this._cpuCfsQuota = undefined;
      this._cpuCfsQuotaPeriod = undefined;
      this._cpuManagerPolicy = undefined;
      this._failSwapOn = undefined;
      this._imageGcHighThreshold = undefined;
      this._imageGcLowThreshold = undefined;
      this._podMaxPids = undefined;
      this._topologyManagerPolicy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedUnsafeSysctls = value.allowedUnsafeSysctls;
      this._containerLogMaxFiles = value.containerLogMaxFiles;
      this._containerLogMaxSizeMb = value.containerLogMaxSizeMb;
      this._cpuCfsQuota = value.cpuCfsQuota;
      this._cpuCfsQuotaPeriod = value.cpuCfsQuotaPeriod;
      this._cpuManagerPolicy = value.cpuManagerPolicy;
      this._failSwapOn = value.failSwapOn;
      this._imageGcHighThreshold = value.imageGcHighThreshold;
      this._imageGcLowThreshold = value.imageGcLowThreshold;
      this._podMaxPids = value.podMaxPids;
      this._topologyManagerPolicy = value.topologyManagerPolicy;
    }
  }

  // allowed_unsafe_sysctls - computed: false, optional: true, required: false
  private _allowedUnsafeSysctls?: string[]; 
  public get allowedUnsafeSysctls() {
    return this.getListAttribute('allowed_unsafe_sysctls');
  }
  public set allowedUnsafeSysctls(value: string[]) {
    this._allowedUnsafeSysctls = value;
  }
  public resetAllowedUnsafeSysctls() {
    this._allowedUnsafeSysctls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedUnsafeSysctlsInput() {
    return this._allowedUnsafeSysctls;
  }

  // container_log_max_files - computed: false, optional: true, required: false
  private _containerLogMaxFiles?: number; 
  public get containerLogMaxFiles() {
    return this.getNumberAttribute('container_log_max_files');
  }
  public set containerLogMaxFiles(value: number) {
    this._containerLogMaxFiles = value;
  }
  public resetContainerLogMaxFiles() {
    this._containerLogMaxFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerLogMaxFilesInput() {
    return this._containerLogMaxFiles;
  }

  // container_log_max_size_mb - computed: false, optional: true, required: false
  private _containerLogMaxSizeMb?: number; 
  public get containerLogMaxSizeMb() {
    return this.getNumberAttribute('container_log_max_size_mb');
  }
  public set containerLogMaxSizeMb(value: number) {
    this._containerLogMaxSizeMb = value;
  }
  public resetContainerLogMaxSizeMb() {
    this._containerLogMaxSizeMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerLogMaxSizeMbInput() {
    return this._containerLogMaxSizeMb;
  }

  // cpu_cfs_quota - computed: false, optional: true, required: false
  private _cpuCfsQuota?: boolean | cdktf.IResolvable; 
  public get cpuCfsQuota() {
    return this.getBooleanAttribute('cpu_cfs_quota');
  }
  public set cpuCfsQuota(value: boolean | cdktf.IResolvable) {
    this._cpuCfsQuota = value;
  }
  public resetCpuCfsQuota() {
    this._cpuCfsQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCfsQuotaInput() {
    return this._cpuCfsQuota;
  }

  // cpu_cfs_quota_period - computed: false, optional: true, required: false
  private _cpuCfsQuotaPeriod?: string; 
  public get cpuCfsQuotaPeriod() {
    return this.getStringAttribute('cpu_cfs_quota_period');
  }
  public set cpuCfsQuotaPeriod(value: string) {
    this._cpuCfsQuotaPeriod = value;
  }
  public resetCpuCfsQuotaPeriod() {
    this._cpuCfsQuotaPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCfsQuotaPeriodInput() {
    return this._cpuCfsQuotaPeriod;
  }

  // cpu_manager_policy - computed: false, optional: true, required: false
  private _cpuManagerPolicy?: string; 
  public get cpuManagerPolicy() {
    return this.getStringAttribute('cpu_manager_policy');
  }
  public set cpuManagerPolicy(value: string) {
    this._cpuManagerPolicy = value;
  }
  public resetCpuManagerPolicy() {
    this._cpuManagerPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuManagerPolicyInput() {
    return this._cpuManagerPolicy;
  }

  // fail_swap_on - computed: false, optional: true, required: false
  private _failSwapOn?: boolean | cdktf.IResolvable; 
  public get failSwapOn() {
    return this.getBooleanAttribute('fail_swap_on');
  }
  public set failSwapOn(value: boolean | cdktf.IResolvable) {
    this._failSwapOn = value;
  }
  public resetFailSwapOn() {
    this._failSwapOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failSwapOnInput() {
    return this._failSwapOn;
  }

  // image_gc_high_threshold - computed: false, optional: true, required: false
  private _imageGcHighThreshold?: number; 
  public get imageGcHighThreshold() {
    return this.getNumberAttribute('image_gc_high_threshold');
  }
  public set imageGcHighThreshold(value: number) {
    this._imageGcHighThreshold = value;
  }
  public resetImageGcHighThreshold() {
    this._imageGcHighThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageGcHighThresholdInput() {
    return this._imageGcHighThreshold;
  }

  // image_gc_low_threshold - computed: false, optional: true, required: false
  private _imageGcLowThreshold?: number; 
  public get imageGcLowThreshold() {
    return this.getNumberAttribute('image_gc_low_threshold');
  }
  public set imageGcLowThreshold(value: number) {
    this._imageGcLowThreshold = value;
  }
  public resetImageGcLowThreshold() {
    this._imageGcLowThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageGcLowThresholdInput() {
    return this._imageGcLowThreshold;
  }

  // pod_max_pids - computed: false, optional: true, required: false
  private _podMaxPids?: number; 
  public get podMaxPids() {
    return this.getNumberAttribute('pod_max_pids');
  }
  public set podMaxPids(value: number) {
    this._podMaxPids = value;
  }
  public resetPodMaxPids() {
    this._podMaxPids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podMaxPidsInput() {
    return this._podMaxPids;
  }

  // topology_manager_policy - computed: false, optional: true, required: false
  private _topologyManagerPolicy?: string; 
  public get topologyManagerPolicy() {
    return this.getStringAttribute('topology_manager_policy');
  }
  public set topologyManagerPolicy(value: string) {
    this._topologyManagerPolicy = value;
  }
  public resetTopologyManagerPolicy() {
    this._topologyManagerPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyManagerPolicyInput() {
    return this._topologyManagerPolicy;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesKubeletConfigList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesKubeletConfig[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesKubeletConfigOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesKubeletConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigSysctls {
  /**
  * Sysctl setting fs.aio-max-nr.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#fs_aio_max_nr DataRafayAksCluster#fs_aio_max_nr}
  */
  readonly fsAioMaxNr?: number;
  /**
  * Sysctl setting fs.file-max.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#fs_file_max DataRafayAksCluster#fs_file_max}
  */
  readonly fsFileMax?: number;
  /**
  * Sysctl setting fs.inotify.max_user_watches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#fs_inotify_max_user_watches DataRafayAksCluster#fs_inotify_max_user_watches}
  */
  readonly fsInotifyMaxUserWatches?: number;
  /**
  * Sysctl setting fs.nr_open.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#fs_nr_open DataRafayAksCluster#fs_nr_open}
  */
  readonly fsNrOpen?: number;
  /**
  * Sysctl setting kernel.threads-max.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#kernel_threads_max DataRafayAksCluster#kernel_threads_max}
  */
  readonly kernelThreadsMax?: number;
  /**
  * Sysctl setting net.core.netdev_max_backlog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#net_core_netdev_max_backlog DataRafayAksCluster#net_core_netdev_max_backlog}
  */
  readonly netCoreNetdevMaxBacklog?: number;
  /**
  * Sysctl setting net.core.optmem_max.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#net_core_optmem_max DataRafayAksCluster#net_core_optmem_max}
  */
  readonly netCoreOptmemMax?: number;
  /**
  * Sysctl setting net.core.rmem_default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#net_core_rmem_default DataRafayAksCluster#net_core_rmem_default}
  */
  readonly netCoreRmemDefault?: number;
  /**
  * Sysctl setting net.core.rmem_max.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#net_core_rmem_max DataRafayAksCluster#net_core_rmem_max}
  */
  readonly netCoreRmemMax?: number;
  /**
  * Sysctl setting net.core.somaxconn.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#net_core_somaxconn DataRafayAksCluster#net_core_somaxconn}
  */
  readonly netCoreSomaxconn?: number;
  /**
  * Sysctl setting net.core.wmem_default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#net_core_wmem_default DataRafayAksCluster#net_core_wmem_default}
  */
  readonly netCoreWmemDefault?: number;
  /**
  * Sysctl setting net.core.wmem_max.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#net_core_wmem_max DataRafayAksCluster#net_core_wmem_max}
  */
  readonly netCoreWmemMax?: number;
  /**
  * Sysctl setting net.ipv4.ip_local_port_range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#net_ipv4_ip_local_port_range DataRafayAksCluster#net_ipv4_ip_local_port_range}
  */
  readonly netIpv4IpLocalPortRange?: string;
  /**
  * Sysctl setting net.ipv4.neigh.default.gc_thresh1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#net_ipv4_neigh_default_gc_thresh1 DataRafayAksCluster#net_ipv4_neigh_default_gc_thresh1}
  */
  readonly netIpv4NeighDefaultGcThresh1?: number;
  /**
  * Sysctl setting net.ipv4.neigh.default.gc_thresh2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#net_ipv4_neigh_default_gc_thresh2 DataRafayAksCluster#net_ipv4_neigh_default_gc_thresh2}
  */
  readonly netIpv4NeighDefaultGcThresh2?: number;
  /**
  * Sysctl setting net.ipv4.neigh.default.gc_thresh3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#net_ipv4_neigh_default_gc_thresh3 DataRafayAksCluster#net_ipv4_neigh_default_gc_thresh3}
  */
  readonly netIpv4NeighDefaultGcThresh3?: number;
  /**
  * Sysctl setting net.ipv4.tcp_fin_timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#net_ipv4_tcp_fin_timeout DataRafayAksCluster#net_ipv4_tcp_fin_timeout}
  */
  readonly netIpv4TcpFinTimeout?: number;
  /**
  * Sysctl setting net.ipv4.tcp_keepalive_probes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#net_ipv4_tcp_keepalive_probes DataRafayAksCluster#net_ipv4_tcp_keepalive_probes}
  */
  readonly netIpv4TcpKeepaliveProbes?: number;
  /**
  * Sysctl setting net.ipv4.tcp_keepalive_time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#net_ipv4_tcp_keepalive_time DataRafayAksCluster#net_ipv4_tcp_keepalive_time}
  */
  readonly netIpv4TcpKeepaliveTime?: number;
  /**
  * Sysctl setting net.ipv4.tcp_max_syn_backlog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#net_ipv4_tcp_max_syn_backlog DataRafayAksCluster#net_ipv4_tcp_max_syn_backlog}
  */
  readonly netIpv4TcpMaxSynBacklog?: number;
  /**
  * Sysctl setting net.ipv4.tcp_max_tw_buckets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#net_ipv4_tcp_max_tw_buckets DataRafayAksCluster#net_ipv4_tcp_max_tw_buckets}
  */
  readonly netIpv4TcpMaxTwBuckets?: number;
  /**
  * Sysctl setting net.ipv4.tcp_tw_reuse.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#net_ipv4_tcp_tw_reuse DataRafayAksCluster#net_ipv4_tcp_tw_reuse}
  */
  readonly netIpv4TcpTwReuse?: boolean | cdktf.IResolvable;
  /**
  * Sysctl setting net.ipv4.tcp_keepalive_intvl.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#net_ipv4_tcpkeepalive_intvl DataRafayAksCluster#net_ipv4_tcpkeepalive_intvl}
  */
  readonly netIpv4TcpkeepaliveIntvl?: number;
  /**
  * Sysctl setting net.netfilter.nf_conntrack_buckets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#net_netfilter_nf_conntrack_buckets DataRafayAksCluster#net_netfilter_nf_conntrack_buckets}
  */
  readonly netNetfilterNfConntrackBuckets?: number;
  /**
  * Sysctl setting net.netfilter.nf_conntrack_max.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#net_netfilter_nf_conntrack_max DataRafayAksCluster#net_netfilter_nf_conntrack_max}
  */
  readonly netNetfilterNfConntrackMax?: number;
  /**
  * Sysctl setting vm.max_map_count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#vm_max_map_count DataRafayAksCluster#vm_max_map_count}
  */
  readonly vmMaxMapCount?: number;
  /**
  * Sysctl setting vm.swappiness.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#vm_swappiness DataRafayAksCluster#vm_swappiness}
  */
  readonly vmSwappiness?: number;
  /**
  * Sysctl setting vm.vfs_cache_pressure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#vm_vfs_cache_pressure DataRafayAksCluster#vm_vfs_cache_pressure}
  */
  readonly vmVfsCachePressure?: number;
}

export function dataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigSysctlsToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigSysctls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_aio_max_nr: cdktf.numberToTerraform(struct!.fsAioMaxNr),
    fs_file_max: cdktf.numberToTerraform(struct!.fsFileMax),
    fs_inotify_max_user_watches: cdktf.numberToTerraform(struct!.fsInotifyMaxUserWatches),
    fs_nr_open: cdktf.numberToTerraform(struct!.fsNrOpen),
    kernel_threads_max: cdktf.numberToTerraform(struct!.kernelThreadsMax),
    net_core_netdev_max_backlog: cdktf.numberToTerraform(struct!.netCoreNetdevMaxBacklog),
    net_core_optmem_max: cdktf.numberToTerraform(struct!.netCoreOptmemMax),
    net_core_rmem_default: cdktf.numberToTerraform(struct!.netCoreRmemDefault),
    net_core_rmem_max: cdktf.numberToTerraform(struct!.netCoreRmemMax),
    net_core_somaxconn: cdktf.numberToTerraform(struct!.netCoreSomaxconn),
    net_core_wmem_default: cdktf.numberToTerraform(struct!.netCoreWmemDefault),
    net_core_wmem_max: cdktf.numberToTerraform(struct!.netCoreWmemMax),
    net_ipv4_ip_local_port_range: cdktf.stringToTerraform(struct!.netIpv4IpLocalPortRange),
    net_ipv4_neigh_default_gc_thresh1: cdktf.numberToTerraform(struct!.netIpv4NeighDefaultGcThresh1),
    net_ipv4_neigh_default_gc_thresh2: cdktf.numberToTerraform(struct!.netIpv4NeighDefaultGcThresh2),
    net_ipv4_neigh_default_gc_thresh3: cdktf.numberToTerraform(struct!.netIpv4NeighDefaultGcThresh3),
    net_ipv4_tcp_fin_timeout: cdktf.numberToTerraform(struct!.netIpv4TcpFinTimeout),
    net_ipv4_tcp_keepalive_probes: cdktf.numberToTerraform(struct!.netIpv4TcpKeepaliveProbes),
    net_ipv4_tcp_keepalive_time: cdktf.numberToTerraform(struct!.netIpv4TcpKeepaliveTime),
    net_ipv4_tcp_max_syn_backlog: cdktf.numberToTerraform(struct!.netIpv4TcpMaxSynBacklog),
    net_ipv4_tcp_max_tw_buckets: cdktf.numberToTerraform(struct!.netIpv4TcpMaxTwBuckets),
    net_ipv4_tcp_tw_reuse: cdktf.booleanToTerraform(struct!.netIpv4TcpTwReuse),
    net_ipv4_tcpkeepalive_intvl: cdktf.numberToTerraform(struct!.netIpv4TcpkeepaliveIntvl),
    net_netfilter_nf_conntrack_buckets: cdktf.numberToTerraform(struct!.netNetfilterNfConntrackBuckets),
    net_netfilter_nf_conntrack_max: cdktf.numberToTerraform(struct!.netNetfilterNfConntrackMax),
    vm_max_map_count: cdktf.numberToTerraform(struct!.vmMaxMapCount),
    vm_swappiness: cdktf.numberToTerraform(struct!.vmSwappiness),
    vm_vfs_cache_pressure: cdktf.numberToTerraform(struct!.vmVfsCachePressure),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigSysctlsToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigSysctls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_aio_max_nr: {
      value: cdktf.numberToHclTerraform(struct!.fsAioMaxNr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fs_file_max: {
      value: cdktf.numberToHclTerraform(struct!.fsFileMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fs_inotify_max_user_watches: {
      value: cdktf.numberToHclTerraform(struct!.fsInotifyMaxUserWatches),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fs_nr_open: {
      value: cdktf.numberToHclTerraform(struct!.fsNrOpen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kernel_threads_max: {
      value: cdktf.numberToHclTerraform(struct!.kernelThreadsMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_core_netdev_max_backlog: {
      value: cdktf.numberToHclTerraform(struct!.netCoreNetdevMaxBacklog),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_core_optmem_max: {
      value: cdktf.numberToHclTerraform(struct!.netCoreOptmemMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_core_rmem_default: {
      value: cdktf.numberToHclTerraform(struct!.netCoreRmemDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_core_rmem_max: {
      value: cdktf.numberToHclTerraform(struct!.netCoreRmemMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_core_somaxconn: {
      value: cdktf.numberToHclTerraform(struct!.netCoreSomaxconn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_core_wmem_default: {
      value: cdktf.numberToHclTerraform(struct!.netCoreWmemDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_core_wmem_max: {
      value: cdktf.numberToHclTerraform(struct!.netCoreWmemMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_ipv4_ip_local_port_range: {
      value: cdktf.stringToHclTerraform(struct!.netIpv4IpLocalPortRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    net_ipv4_neigh_default_gc_thresh1: {
      value: cdktf.numberToHclTerraform(struct!.netIpv4NeighDefaultGcThresh1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_ipv4_neigh_default_gc_thresh2: {
      value: cdktf.numberToHclTerraform(struct!.netIpv4NeighDefaultGcThresh2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_ipv4_neigh_default_gc_thresh3: {
      value: cdktf.numberToHclTerraform(struct!.netIpv4NeighDefaultGcThresh3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_ipv4_tcp_fin_timeout: {
      value: cdktf.numberToHclTerraform(struct!.netIpv4TcpFinTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_ipv4_tcp_keepalive_probes: {
      value: cdktf.numberToHclTerraform(struct!.netIpv4TcpKeepaliveProbes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_ipv4_tcp_keepalive_time: {
      value: cdktf.numberToHclTerraform(struct!.netIpv4TcpKeepaliveTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_ipv4_tcp_max_syn_backlog: {
      value: cdktf.numberToHclTerraform(struct!.netIpv4TcpMaxSynBacklog),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_ipv4_tcp_max_tw_buckets: {
      value: cdktf.numberToHclTerraform(struct!.netIpv4TcpMaxTwBuckets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_ipv4_tcp_tw_reuse: {
      value: cdktf.booleanToHclTerraform(struct!.netIpv4TcpTwReuse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    net_ipv4_tcpkeepalive_intvl: {
      value: cdktf.numberToHclTerraform(struct!.netIpv4TcpkeepaliveIntvl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_netfilter_nf_conntrack_buckets: {
      value: cdktf.numberToHclTerraform(struct!.netNetfilterNfConntrackBuckets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_netfilter_nf_conntrack_max: {
      value: cdktf.numberToHclTerraform(struct!.netNetfilterNfConntrackMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vm_max_map_count: {
      value: cdktf.numberToHclTerraform(struct!.vmMaxMapCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vm_swappiness: {
      value: cdktf.numberToHclTerraform(struct!.vmSwappiness),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vm_vfs_cache_pressure: {
      value: cdktf.numberToHclTerraform(struct!.vmVfsCachePressure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigSysctlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigSysctls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsAioMaxNr !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsAioMaxNr = this._fsAioMaxNr;
    }
    if (this._fsFileMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsFileMax = this._fsFileMax;
    }
    if (this._fsInotifyMaxUserWatches !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsInotifyMaxUserWatches = this._fsInotifyMaxUserWatches;
    }
    if (this._fsNrOpen !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsNrOpen = this._fsNrOpen;
    }
    if (this._kernelThreadsMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.kernelThreadsMax = this._kernelThreadsMax;
    }
    if (this._netCoreNetdevMaxBacklog !== undefined) {
      hasAnyValues = true;
      internalValueResult.netCoreNetdevMaxBacklog = this._netCoreNetdevMaxBacklog;
    }
    if (this._netCoreOptmemMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.netCoreOptmemMax = this._netCoreOptmemMax;
    }
    if (this._netCoreRmemDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.netCoreRmemDefault = this._netCoreRmemDefault;
    }
    if (this._netCoreRmemMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.netCoreRmemMax = this._netCoreRmemMax;
    }
    if (this._netCoreSomaxconn !== undefined) {
      hasAnyValues = true;
      internalValueResult.netCoreSomaxconn = this._netCoreSomaxconn;
    }
    if (this._netCoreWmemDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.netCoreWmemDefault = this._netCoreWmemDefault;
    }
    if (this._netCoreWmemMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.netCoreWmemMax = this._netCoreWmemMax;
    }
    if (this._netIpv4IpLocalPortRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.netIpv4IpLocalPortRange = this._netIpv4IpLocalPortRange;
    }
    if (this._netIpv4NeighDefaultGcThresh1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.netIpv4NeighDefaultGcThresh1 = this._netIpv4NeighDefaultGcThresh1;
    }
    if (this._netIpv4NeighDefaultGcThresh2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.netIpv4NeighDefaultGcThresh2 = this._netIpv4NeighDefaultGcThresh2;
    }
    if (this._netIpv4NeighDefaultGcThresh3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.netIpv4NeighDefaultGcThresh3 = this._netIpv4NeighDefaultGcThresh3;
    }
    if (this._netIpv4TcpFinTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.netIpv4TcpFinTimeout = this._netIpv4TcpFinTimeout;
    }
    if (this._netIpv4TcpKeepaliveProbes !== undefined) {
      hasAnyValues = true;
      internalValueResult.netIpv4TcpKeepaliveProbes = this._netIpv4TcpKeepaliveProbes;
    }
    if (this._netIpv4TcpKeepaliveTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.netIpv4TcpKeepaliveTime = this._netIpv4TcpKeepaliveTime;
    }
    if (this._netIpv4TcpMaxSynBacklog !== undefined) {
      hasAnyValues = true;
      internalValueResult.netIpv4TcpMaxSynBacklog = this._netIpv4TcpMaxSynBacklog;
    }
    if (this._netIpv4TcpMaxTwBuckets !== undefined) {
      hasAnyValues = true;
      internalValueResult.netIpv4TcpMaxTwBuckets = this._netIpv4TcpMaxTwBuckets;
    }
    if (this._netIpv4TcpTwReuse !== undefined) {
      hasAnyValues = true;
      internalValueResult.netIpv4TcpTwReuse = this._netIpv4TcpTwReuse;
    }
    if (this._netIpv4TcpkeepaliveIntvl !== undefined) {
      hasAnyValues = true;
      internalValueResult.netIpv4TcpkeepaliveIntvl = this._netIpv4TcpkeepaliveIntvl;
    }
    if (this._netNetfilterNfConntrackBuckets !== undefined) {
      hasAnyValues = true;
      internalValueResult.netNetfilterNfConntrackBuckets = this._netNetfilterNfConntrackBuckets;
    }
    if (this._netNetfilterNfConntrackMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.netNetfilterNfConntrackMax = this._netNetfilterNfConntrackMax;
    }
    if (this._vmMaxMapCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmMaxMapCount = this._vmMaxMapCount;
    }
    if (this._vmSwappiness !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmSwappiness = this._vmSwappiness;
    }
    if (this._vmVfsCachePressure !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmVfsCachePressure = this._vmVfsCachePressure;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigSysctls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsAioMaxNr = undefined;
      this._fsFileMax = undefined;
      this._fsInotifyMaxUserWatches = undefined;
      this._fsNrOpen = undefined;
      this._kernelThreadsMax = undefined;
      this._netCoreNetdevMaxBacklog = undefined;
      this._netCoreOptmemMax = undefined;
      this._netCoreRmemDefault = undefined;
      this._netCoreRmemMax = undefined;
      this._netCoreSomaxconn = undefined;
      this._netCoreWmemDefault = undefined;
      this._netCoreWmemMax = undefined;
      this._netIpv4IpLocalPortRange = undefined;
      this._netIpv4NeighDefaultGcThresh1 = undefined;
      this._netIpv4NeighDefaultGcThresh2 = undefined;
      this._netIpv4NeighDefaultGcThresh3 = undefined;
      this._netIpv4TcpFinTimeout = undefined;
      this._netIpv4TcpKeepaliveProbes = undefined;
      this._netIpv4TcpKeepaliveTime = undefined;
      this._netIpv4TcpMaxSynBacklog = undefined;
      this._netIpv4TcpMaxTwBuckets = undefined;
      this._netIpv4TcpTwReuse = undefined;
      this._netIpv4TcpkeepaliveIntvl = undefined;
      this._netNetfilterNfConntrackBuckets = undefined;
      this._netNetfilterNfConntrackMax = undefined;
      this._vmMaxMapCount = undefined;
      this._vmSwappiness = undefined;
      this._vmVfsCachePressure = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsAioMaxNr = value.fsAioMaxNr;
      this._fsFileMax = value.fsFileMax;
      this._fsInotifyMaxUserWatches = value.fsInotifyMaxUserWatches;
      this._fsNrOpen = value.fsNrOpen;
      this._kernelThreadsMax = value.kernelThreadsMax;
      this._netCoreNetdevMaxBacklog = value.netCoreNetdevMaxBacklog;
      this._netCoreOptmemMax = value.netCoreOptmemMax;
      this._netCoreRmemDefault = value.netCoreRmemDefault;
      this._netCoreRmemMax = value.netCoreRmemMax;
      this._netCoreSomaxconn = value.netCoreSomaxconn;
      this._netCoreWmemDefault = value.netCoreWmemDefault;
      this._netCoreWmemMax = value.netCoreWmemMax;
      this._netIpv4IpLocalPortRange = value.netIpv4IpLocalPortRange;
      this._netIpv4NeighDefaultGcThresh1 = value.netIpv4NeighDefaultGcThresh1;
      this._netIpv4NeighDefaultGcThresh2 = value.netIpv4NeighDefaultGcThresh2;
      this._netIpv4NeighDefaultGcThresh3 = value.netIpv4NeighDefaultGcThresh3;
      this._netIpv4TcpFinTimeout = value.netIpv4TcpFinTimeout;
      this._netIpv4TcpKeepaliveProbes = value.netIpv4TcpKeepaliveProbes;
      this._netIpv4TcpKeepaliveTime = value.netIpv4TcpKeepaliveTime;
      this._netIpv4TcpMaxSynBacklog = value.netIpv4TcpMaxSynBacklog;
      this._netIpv4TcpMaxTwBuckets = value.netIpv4TcpMaxTwBuckets;
      this._netIpv4TcpTwReuse = value.netIpv4TcpTwReuse;
      this._netIpv4TcpkeepaliveIntvl = value.netIpv4TcpkeepaliveIntvl;
      this._netNetfilterNfConntrackBuckets = value.netNetfilterNfConntrackBuckets;
      this._netNetfilterNfConntrackMax = value.netNetfilterNfConntrackMax;
      this._vmMaxMapCount = value.vmMaxMapCount;
      this._vmSwappiness = value.vmSwappiness;
      this._vmVfsCachePressure = value.vmVfsCachePressure;
    }
  }

  // fs_aio_max_nr - computed: false, optional: true, required: false
  private _fsAioMaxNr?: number; 
  public get fsAioMaxNr() {
    return this.getNumberAttribute('fs_aio_max_nr');
  }
  public set fsAioMaxNr(value: number) {
    this._fsAioMaxNr = value;
  }
  public resetFsAioMaxNr() {
    this._fsAioMaxNr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsAioMaxNrInput() {
    return this._fsAioMaxNr;
  }

  // fs_file_max - computed: false, optional: true, required: false
  private _fsFileMax?: number; 
  public get fsFileMax() {
    return this.getNumberAttribute('fs_file_max');
  }
  public set fsFileMax(value: number) {
    this._fsFileMax = value;
  }
  public resetFsFileMax() {
    this._fsFileMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsFileMaxInput() {
    return this._fsFileMax;
  }

  // fs_inotify_max_user_watches - computed: false, optional: true, required: false
  private _fsInotifyMaxUserWatches?: number; 
  public get fsInotifyMaxUserWatches() {
    return this.getNumberAttribute('fs_inotify_max_user_watches');
  }
  public set fsInotifyMaxUserWatches(value: number) {
    this._fsInotifyMaxUserWatches = value;
  }
  public resetFsInotifyMaxUserWatches() {
    this._fsInotifyMaxUserWatches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsInotifyMaxUserWatchesInput() {
    return this._fsInotifyMaxUserWatches;
  }

  // fs_nr_open - computed: false, optional: true, required: false
  private _fsNrOpen?: number; 
  public get fsNrOpen() {
    return this.getNumberAttribute('fs_nr_open');
  }
  public set fsNrOpen(value: number) {
    this._fsNrOpen = value;
  }
  public resetFsNrOpen() {
    this._fsNrOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsNrOpenInput() {
    return this._fsNrOpen;
  }

  // kernel_threads_max - computed: false, optional: true, required: false
  private _kernelThreadsMax?: number; 
  public get kernelThreadsMax() {
    return this.getNumberAttribute('kernel_threads_max');
  }
  public set kernelThreadsMax(value: number) {
    this._kernelThreadsMax = value;
  }
  public resetKernelThreadsMax() {
    this._kernelThreadsMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelThreadsMaxInput() {
    return this._kernelThreadsMax;
  }

  // net_core_netdev_max_backlog - computed: false, optional: true, required: false
  private _netCoreNetdevMaxBacklog?: number; 
  public get netCoreNetdevMaxBacklog() {
    return this.getNumberAttribute('net_core_netdev_max_backlog');
  }
  public set netCoreNetdevMaxBacklog(value: number) {
    this._netCoreNetdevMaxBacklog = value;
  }
  public resetNetCoreNetdevMaxBacklog() {
    this._netCoreNetdevMaxBacklog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netCoreNetdevMaxBacklogInput() {
    return this._netCoreNetdevMaxBacklog;
  }

  // net_core_optmem_max - computed: false, optional: true, required: false
  private _netCoreOptmemMax?: number; 
  public get netCoreOptmemMax() {
    return this.getNumberAttribute('net_core_optmem_max');
  }
  public set netCoreOptmemMax(value: number) {
    this._netCoreOptmemMax = value;
  }
  public resetNetCoreOptmemMax() {
    this._netCoreOptmemMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netCoreOptmemMaxInput() {
    return this._netCoreOptmemMax;
  }

  // net_core_rmem_default - computed: false, optional: true, required: false
  private _netCoreRmemDefault?: number; 
  public get netCoreRmemDefault() {
    return this.getNumberAttribute('net_core_rmem_default');
  }
  public set netCoreRmemDefault(value: number) {
    this._netCoreRmemDefault = value;
  }
  public resetNetCoreRmemDefault() {
    this._netCoreRmemDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netCoreRmemDefaultInput() {
    return this._netCoreRmemDefault;
  }

  // net_core_rmem_max - computed: false, optional: true, required: false
  private _netCoreRmemMax?: number; 
  public get netCoreRmemMax() {
    return this.getNumberAttribute('net_core_rmem_max');
  }
  public set netCoreRmemMax(value: number) {
    this._netCoreRmemMax = value;
  }
  public resetNetCoreRmemMax() {
    this._netCoreRmemMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netCoreRmemMaxInput() {
    return this._netCoreRmemMax;
  }

  // net_core_somaxconn - computed: false, optional: true, required: false
  private _netCoreSomaxconn?: number; 
  public get netCoreSomaxconn() {
    return this.getNumberAttribute('net_core_somaxconn');
  }
  public set netCoreSomaxconn(value: number) {
    this._netCoreSomaxconn = value;
  }
  public resetNetCoreSomaxconn() {
    this._netCoreSomaxconn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netCoreSomaxconnInput() {
    return this._netCoreSomaxconn;
  }

  // net_core_wmem_default - computed: false, optional: true, required: false
  private _netCoreWmemDefault?: number; 
  public get netCoreWmemDefault() {
    return this.getNumberAttribute('net_core_wmem_default');
  }
  public set netCoreWmemDefault(value: number) {
    this._netCoreWmemDefault = value;
  }
  public resetNetCoreWmemDefault() {
    this._netCoreWmemDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netCoreWmemDefaultInput() {
    return this._netCoreWmemDefault;
  }

  // net_core_wmem_max - computed: false, optional: true, required: false
  private _netCoreWmemMax?: number; 
  public get netCoreWmemMax() {
    return this.getNumberAttribute('net_core_wmem_max');
  }
  public set netCoreWmemMax(value: number) {
    this._netCoreWmemMax = value;
  }
  public resetNetCoreWmemMax() {
    this._netCoreWmemMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netCoreWmemMaxInput() {
    return this._netCoreWmemMax;
  }

  // net_ipv4_ip_local_port_range - computed: false, optional: true, required: false
  private _netIpv4IpLocalPortRange?: string; 
  public get netIpv4IpLocalPortRange() {
    return this.getStringAttribute('net_ipv4_ip_local_port_range');
  }
  public set netIpv4IpLocalPortRange(value: string) {
    this._netIpv4IpLocalPortRange = value;
  }
  public resetNetIpv4IpLocalPortRange() {
    this._netIpv4IpLocalPortRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4IpLocalPortRangeInput() {
    return this._netIpv4IpLocalPortRange;
  }

  // net_ipv4_neigh_default_gc_thresh1 - computed: false, optional: true, required: false
  private _netIpv4NeighDefaultGcThresh1?: number; 
  public get netIpv4NeighDefaultGcThresh1() {
    return this.getNumberAttribute('net_ipv4_neigh_default_gc_thresh1');
  }
  public set netIpv4NeighDefaultGcThresh1(value: number) {
    this._netIpv4NeighDefaultGcThresh1 = value;
  }
  public resetNetIpv4NeighDefaultGcThresh1() {
    this._netIpv4NeighDefaultGcThresh1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4NeighDefaultGcThresh1Input() {
    return this._netIpv4NeighDefaultGcThresh1;
  }

  // net_ipv4_neigh_default_gc_thresh2 - computed: false, optional: true, required: false
  private _netIpv4NeighDefaultGcThresh2?: number; 
  public get netIpv4NeighDefaultGcThresh2() {
    return this.getNumberAttribute('net_ipv4_neigh_default_gc_thresh2');
  }
  public set netIpv4NeighDefaultGcThresh2(value: number) {
    this._netIpv4NeighDefaultGcThresh2 = value;
  }
  public resetNetIpv4NeighDefaultGcThresh2() {
    this._netIpv4NeighDefaultGcThresh2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4NeighDefaultGcThresh2Input() {
    return this._netIpv4NeighDefaultGcThresh2;
  }

  // net_ipv4_neigh_default_gc_thresh3 - computed: false, optional: true, required: false
  private _netIpv4NeighDefaultGcThresh3?: number; 
  public get netIpv4NeighDefaultGcThresh3() {
    return this.getNumberAttribute('net_ipv4_neigh_default_gc_thresh3');
  }
  public set netIpv4NeighDefaultGcThresh3(value: number) {
    this._netIpv4NeighDefaultGcThresh3 = value;
  }
  public resetNetIpv4NeighDefaultGcThresh3() {
    this._netIpv4NeighDefaultGcThresh3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4NeighDefaultGcThresh3Input() {
    return this._netIpv4NeighDefaultGcThresh3;
  }

  // net_ipv4_tcp_fin_timeout - computed: false, optional: true, required: false
  private _netIpv4TcpFinTimeout?: number; 
  public get netIpv4TcpFinTimeout() {
    return this.getNumberAttribute('net_ipv4_tcp_fin_timeout');
  }
  public set netIpv4TcpFinTimeout(value: number) {
    this._netIpv4TcpFinTimeout = value;
  }
  public resetNetIpv4TcpFinTimeout() {
    this._netIpv4TcpFinTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4TcpFinTimeoutInput() {
    return this._netIpv4TcpFinTimeout;
  }

  // net_ipv4_tcp_keepalive_probes - computed: false, optional: true, required: false
  private _netIpv4TcpKeepaliveProbes?: number; 
  public get netIpv4TcpKeepaliveProbes() {
    return this.getNumberAttribute('net_ipv4_tcp_keepalive_probes');
  }
  public set netIpv4TcpKeepaliveProbes(value: number) {
    this._netIpv4TcpKeepaliveProbes = value;
  }
  public resetNetIpv4TcpKeepaliveProbes() {
    this._netIpv4TcpKeepaliveProbes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4TcpKeepaliveProbesInput() {
    return this._netIpv4TcpKeepaliveProbes;
  }

  // net_ipv4_tcp_keepalive_time - computed: false, optional: true, required: false
  private _netIpv4TcpKeepaliveTime?: number; 
  public get netIpv4TcpKeepaliveTime() {
    return this.getNumberAttribute('net_ipv4_tcp_keepalive_time');
  }
  public set netIpv4TcpKeepaliveTime(value: number) {
    this._netIpv4TcpKeepaliveTime = value;
  }
  public resetNetIpv4TcpKeepaliveTime() {
    this._netIpv4TcpKeepaliveTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4TcpKeepaliveTimeInput() {
    return this._netIpv4TcpKeepaliveTime;
  }

  // net_ipv4_tcp_max_syn_backlog - computed: false, optional: true, required: false
  private _netIpv4TcpMaxSynBacklog?: number; 
  public get netIpv4TcpMaxSynBacklog() {
    return this.getNumberAttribute('net_ipv4_tcp_max_syn_backlog');
  }
  public set netIpv4TcpMaxSynBacklog(value: number) {
    this._netIpv4TcpMaxSynBacklog = value;
  }
  public resetNetIpv4TcpMaxSynBacklog() {
    this._netIpv4TcpMaxSynBacklog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4TcpMaxSynBacklogInput() {
    return this._netIpv4TcpMaxSynBacklog;
  }

  // net_ipv4_tcp_max_tw_buckets - computed: false, optional: true, required: false
  private _netIpv4TcpMaxTwBuckets?: number; 
  public get netIpv4TcpMaxTwBuckets() {
    return this.getNumberAttribute('net_ipv4_tcp_max_tw_buckets');
  }
  public set netIpv4TcpMaxTwBuckets(value: number) {
    this._netIpv4TcpMaxTwBuckets = value;
  }
  public resetNetIpv4TcpMaxTwBuckets() {
    this._netIpv4TcpMaxTwBuckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4TcpMaxTwBucketsInput() {
    return this._netIpv4TcpMaxTwBuckets;
  }

  // net_ipv4_tcp_tw_reuse - computed: false, optional: true, required: false
  private _netIpv4TcpTwReuse?: boolean | cdktf.IResolvable; 
  public get netIpv4TcpTwReuse() {
    return this.getBooleanAttribute('net_ipv4_tcp_tw_reuse');
  }
  public set netIpv4TcpTwReuse(value: boolean | cdktf.IResolvable) {
    this._netIpv4TcpTwReuse = value;
  }
  public resetNetIpv4TcpTwReuse() {
    this._netIpv4TcpTwReuse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4TcpTwReuseInput() {
    return this._netIpv4TcpTwReuse;
  }

  // net_ipv4_tcpkeepalive_intvl - computed: false, optional: true, required: false
  private _netIpv4TcpkeepaliveIntvl?: number; 
  public get netIpv4TcpkeepaliveIntvl() {
    return this.getNumberAttribute('net_ipv4_tcpkeepalive_intvl');
  }
  public set netIpv4TcpkeepaliveIntvl(value: number) {
    this._netIpv4TcpkeepaliveIntvl = value;
  }
  public resetNetIpv4TcpkeepaliveIntvl() {
    this._netIpv4TcpkeepaliveIntvl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4TcpkeepaliveIntvlInput() {
    return this._netIpv4TcpkeepaliveIntvl;
  }

  // net_netfilter_nf_conntrack_buckets - computed: false, optional: true, required: false
  private _netNetfilterNfConntrackBuckets?: number; 
  public get netNetfilterNfConntrackBuckets() {
    return this.getNumberAttribute('net_netfilter_nf_conntrack_buckets');
  }
  public set netNetfilterNfConntrackBuckets(value: number) {
    this._netNetfilterNfConntrackBuckets = value;
  }
  public resetNetNetfilterNfConntrackBuckets() {
    this._netNetfilterNfConntrackBuckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netNetfilterNfConntrackBucketsInput() {
    return this._netNetfilterNfConntrackBuckets;
  }

  // net_netfilter_nf_conntrack_max - computed: false, optional: true, required: false
  private _netNetfilterNfConntrackMax?: number; 
  public get netNetfilterNfConntrackMax() {
    return this.getNumberAttribute('net_netfilter_nf_conntrack_max');
  }
  public set netNetfilterNfConntrackMax(value: number) {
    this._netNetfilterNfConntrackMax = value;
  }
  public resetNetNetfilterNfConntrackMax() {
    this._netNetfilterNfConntrackMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netNetfilterNfConntrackMaxInput() {
    return this._netNetfilterNfConntrackMax;
  }

  // vm_max_map_count - computed: false, optional: true, required: false
  private _vmMaxMapCount?: number; 
  public get vmMaxMapCount() {
    return this.getNumberAttribute('vm_max_map_count');
  }
  public set vmMaxMapCount(value: number) {
    this._vmMaxMapCount = value;
  }
  public resetVmMaxMapCount() {
    this._vmMaxMapCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmMaxMapCountInput() {
    return this._vmMaxMapCount;
  }

  // vm_swappiness - computed: false, optional: true, required: false
  private _vmSwappiness?: number; 
  public get vmSwappiness() {
    return this.getNumberAttribute('vm_swappiness');
  }
  public set vmSwappiness(value: number) {
    this._vmSwappiness = value;
  }
  public resetVmSwappiness() {
    this._vmSwappiness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmSwappinessInput() {
    return this._vmSwappiness;
  }

  // vm_vfs_cache_pressure - computed: false, optional: true, required: false
  private _vmVfsCachePressure?: number; 
  public get vmVfsCachePressure() {
    return this.getNumberAttribute('vm_vfs_cache_pressure');
  }
  public set vmVfsCachePressure(value: number) {
    this._vmVfsCachePressure = value;
  }
  public resetVmVfsCachePressure() {
    this._vmVfsCachePressure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmVfsCachePressureInput() {
    return this._vmVfsCachePressure;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigSysctlsList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigSysctls[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigSysctlsOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigSysctlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfig {
  /**
  * The size in MB of a swap file that will be created on each node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#swap_file_size_mb DataRafayAksCluster#swap_file_size_mb}
  */
  readonly swapFileSizeMb?: number;
  /**
  * Valid values are always, defer, defer+madvise, madvise and never.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#transparent_huge_page_defrag DataRafayAksCluster#transparent_huge_page_defrag}
  */
  readonly transparentHugePageDefrag?: string;
  /**
  * Valid values are always, madvise, and never.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#transparent_huge_page_enabled DataRafayAksCluster#transparent_huge_page_enabled}
  */
  readonly transparentHugePageEnabled?: string;
  /**
  * sysctls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#sysctls DataRafayAksCluster#sysctls}
  */
  readonly sysctls?: DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigSysctls[] | cdktf.IResolvable;
}

export function dataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    swap_file_size_mb: cdktf.numberToTerraform(struct!.swapFileSizeMb),
    transparent_huge_page_defrag: cdktf.stringToTerraform(struct!.transparentHugePageDefrag),
    transparent_huge_page_enabled: cdktf.stringToTerraform(struct!.transparentHugePageEnabled),
    sysctls: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigSysctlsToTerraform, true)(struct!.sysctls),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    swap_file_size_mb: {
      value: cdktf.numberToHclTerraform(struct!.swapFileSizeMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transparent_huge_page_defrag: {
      value: cdktf.stringToHclTerraform(struct!.transparentHugePageDefrag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transparent_huge_page_enabled: {
      value: cdktf.stringToHclTerraform(struct!.transparentHugePageEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sysctls: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigSysctlsToHclTerraform, true)(struct!.sysctls),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigSysctlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._swapFileSizeMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.swapFileSizeMb = this._swapFileSizeMb;
    }
    if (this._transparentHugePageDefrag !== undefined) {
      hasAnyValues = true;
      internalValueResult.transparentHugePageDefrag = this._transparentHugePageDefrag;
    }
    if (this._transparentHugePageEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.transparentHugePageEnabled = this._transparentHugePageEnabled;
    }
    if (this._sysctls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysctls = this._sysctls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._swapFileSizeMb = undefined;
      this._transparentHugePageDefrag = undefined;
      this._transparentHugePageEnabled = undefined;
      this._sysctls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._swapFileSizeMb = value.swapFileSizeMb;
      this._transparentHugePageDefrag = value.transparentHugePageDefrag;
      this._transparentHugePageEnabled = value.transparentHugePageEnabled;
      this._sysctls.internalValue = value.sysctls;
    }
  }

  // swap_file_size_mb - computed: false, optional: true, required: false
  private _swapFileSizeMb?: number; 
  public get swapFileSizeMb() {
    return this.getNumberAttribute('swap_file_size_mb');
  }
  public set swapFileSizeMb(value: number) {
    this._swapFileSizeMb = value;
  }
  public resetSwapFileSizeMb() {
    this._swapFileSizeMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swapFileSizeMbInput() {
    return this._swapFileSizeMb;
  }

  // transparent_huge_page_defrag - computed: false, optional: true, required: false
  private _transparentHugePageDefrag?: string; 
  public get transparentHugePageDefrag() {
    return this.getStringAttribute('transparent_huge_page_defrag');
  }
  public set transparentHugePageDefrag(value: string) {
    this._transparentHugePageDefrag = value;
  }
  public resetTransparentHugePageDefrag() {
    this._transparentHugePageDefrag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transparentHugePageDefragInput() {
    return this._transparentHugePageDefrag;
  }

  // transparent_huge_page_enabled - computed: false, optional: true, required: false
  private _transparentHugePageEnabled?: string; 
  public get transparentHugePageEnabled() {
    return this.getStringAttribute('transparent_huge_page_enabled');
  }
  public set transparentHugePageEnabled(value: string) {
    this._transparentHugePageEnabled = value;
  }
  public resetTransparentHugePageEnabled() {
    this._transparentHugePageEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transparentHugePageEnabledInput() {
    return this._transparentHugePageEnabled;
  }

  // sysctls - computed: false, optional: true, required: false
  private _sysctls = new DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigSysctlsList(this, "sysctls", false);
  public get sysctls() {
    return this._sysctls;
  }
  public putSysctls(value: DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigSysctls[] | cdktf.IResolvable) {
    this._sysctls.internalValue = value;
  }
  public resetSysctls() {
    this._sysctls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysctlsInput() {
    return this._sysctls.internalValue;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfig[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesUpgradeSettings {
  /**
  * This can either be set to an integer (e.g. 5) or a percentage (e.g. 50%)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#max_surge DataRafayAksCluster#max_surge}
  */
  readonly maxSurge?: string;
}

export function dataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesUpgradeSettingsToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesUpgradeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_surge: cdktf.stringToTerraform(struct!.maxSurge),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesUpgradeSettingsToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesUpgradeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_surge: {
      value: cdktf.stringToHclTerraform(struct!.maxSurge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesUpgradeSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesUpgradeSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSurge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSurge = this._maxSurge;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesUpgradeSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxSurge = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxSurge = value.maxSurge;
    }
  }

  // max_surge - computed: false, optional: true, required: false
  private _maxSurge?: string; 
  public get maxSurge() {
    return this.getStringAttribute('max_surge');
  }
  public set maxSurge(value: string) {
    this._maxSurge = value;
  }
  public resetMaxSurge() {
    this._maxSurge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSurgeInput() {
    return this._maxSurge;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesUpgradeSettingsList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesUpgradeSettings[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesUpgradeSettingsOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesUpgradeSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecNodePoolsProperties {
  /**
  * The list of Availability zones to use for nodes. This can only be specified if the AgentPoolType property is VirtualMachineScaleSets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#availability_zones DataRafayAksCluster#availability_zones}
  */
  readonly availabilityZones?: string[];
  /**
  * Number of agents (VMs) to host docker containers. Allowed values must be in the range of 0 to 1000 (inclusive) for user pools and in the range of 1 to 1000 (inclusive) for system pools. The default value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#count DataRafayAksCluster#count}
  */
  readonly count?: number;
  /**
  * Whether to enable auto-scaler
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#enable_auto_scaling DataRafayAksCluster#enable_auto_scaling}
  */
  readonly enableAutoScaling?: boolean | cdktf.IResolvable;
  /**
  * This is only supported on certain VM sizes and in certain Azure regions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#enable_encryption_at_host DataRafayAksCluster#enable_encryption_at_host}
  */
  readonly enableEncryptionAtHost?: boolean | cdktf.IResolvable;
  /**
  * See Add a FIPS-enabled node pool for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#enable_fips DataRafayAksCluster#enable_fips}
  */
  readonly enableFips?: boolean | cdktf.IResolvable;
  /**
  * Some scenarios may require nodes in a node pool to receive their own dedicated public IP addresses. A common scenario is for gaming workloads, where a console needs to make a direct connection to a cloud virtual machine to minimize hops. For more information see assigning a public IP per node. The default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#enable_node_public_ip DataRafayAksCluster#enable_node_public_ip}
  */
  readonly enableNodePublicIp?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable UltraSSD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#enable_ultra_ssd DataRafayAksCluster#enable_ultra_ssd}
  */
  readonly enableUltraSsd?: boolean | cdktf.IResolvable;
  /**
  * GPUInstanceProfile to be used to specify GPU MIG instance profile for supported GPU VM SKU.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#gpu_instance_profile DataRafayAksCluster#gpu_instance_profile}
  */
  readonly gpuInstanceProfile?: string;
  /**
  * Valid values are OS, Temporary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#kubelet_disk_type DataRafayAksCluster#kubelet_disk_type}
  */
  readonly kubeletDiskType?: string;
  /**
  * The maximum number of nodes for auto-scaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#max_count DataRafayAksCluster#max_count}
  */
  readonly maxCount?: number;
  /**
  * The maximum number of pods that can run on a node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#max_pods DataRafayAksCluster#max_pods}
  */
  readonly maxPods?: number;
  /**
  * The minimum number of nodes for auto-scaling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#min_count DataRafayAksCluster#min_count}
  */
  readonly minCount?: number;
  /**
  * The mode for a node pool which defines a node pool's primary function. If set as 'System', AKS prefers system pods scheduling to node pools with mode System. Accepted values: System, User
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#mode DataRafayAksCluster#mode}
  */
  readonly mode?: string;
  /**
  * Valid values are System, User.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#node_labels DataRafayAksCluster#node_labels}
  */
  readonly nodeLabels?: { [key: string]: string };
  /**
  * This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPPrefixes/{publicIPPrefixName}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#node_public_ip_prefix_id DataRafayAksCluster#node_public_ip_prefix_id}
  */
  readonly nodePublicIpPrefixId?: string;
  /**
  * The taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#node_taints DataRafayAksCluster#node_taints}
  */
  readonly nodeTaints?: string[];
  /**
  * The AKS node pool Kubernetes version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#orchestrator_version DataRafayAksCluster#orchestrator_version}
  */
  readonly orchestratorVersion?: string;
  /**
  * OS Disk Size in GB to be used to specify the disk size for every machine in the master/agent pool. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#os_disk_size_gb DataRafayAksCluster#os_disk_size_gb}
  */
  readonly osDiskSizeGb?: number;
  /**
  * Valid values are Managed, Ephemeral.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#os_disk_type DataRafayAksCluster#os_disk_type}
  */
  readonly osDiskType?: string;
  /**
  * Valid values are Ubuntu, CBLMariner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#os_sku DataRafayAksCluster#os_sku}
  */
  readonly osSku?: string;
  /**
  * Valid values are Linux, Windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#os_type DataRafayAksCluster#os_type}
  */
  readonly osType?: string;
  /**
  * If omitted, pod IPs are statically assigned on the node subnet (see vnetSubnetID for more details). This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#pod_subnet_id DataRafayAksCluster#pod_subnet_id}
  */
  readonly podSubnetId?: string;
  /**
  * The ID for Proximity Placement Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#proximity_placement_group_id DataRafayAksCluster#proximity_placement_group_id}
  */
  readonly proximityPlacementGroupId?: string;
  /**
  * This cannot be specified unless the scaleSetPriority is Spot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#scale_set_eviction_policy DataRafayAksCluster#scale_set_eviction_policy}
  */
  readonly scaleSetEvictionPolicy?: string;
  /**
  * The Virtual Machine Scale Set priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#scale_set_priority DataRafayAksCluster#scale_set_priority}
  */
  readonly scaleSetPriority?: string;
  /**
  * Possible values are any decimal value greater than zero or -1 which indicates the willingness to pay any on-demand price. For more details on spot pricing, see spot VMs pricing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#spot_max_price DataRafayAksCluster#spot_max_price}
  */
  readonly spotMaxPrice?: number;
  /**
  * The tags to be persisted on the agent pool virtual machine scale set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#tags DataRafayAksCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Valid values are VirtualMachineScaleSets, AvailabilitySet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#type DataRafayAksCluster#type}
  */
  readonly type?: string;
  /**
  * The AKS node pool VM size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#vm_size DataRafayAksCluster#vm_size}
  */
  readonly vmSize?: string;
  /**
  * If this is not specified, a VNET and subnet will be generated and used. If no podSubnetID is specified, this applies to nodes and pods, otherwise it applies to just nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#vnet_subnet_id DataRafayAksCluster#vnet_subnet_id}
  */
  readonly vnetSubnetId?: string;
  /**
  * kubelet_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#kubelet_config DataRafayAksCluster#kubelet_config}
  */
  readonly kubeletConfig?: DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesKubeletConfig[] | cdktf.IResolvable;
  /**
  * linux_os_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#linux_os_config DataRafayAksCluster#linux_os_config}
  */
  readonly linuxOsConfig?: DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfig[] | cdktf.IResolvable;
  /**
  * upgrade_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#upgrade_settings DataRafayAksCluster#upgrade_settings}
  */
  readonly upgradeSettings?: DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesUpgradeSettings[] | cdktf.IResolvable;
}

export function dataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecNodePoolsProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.availabilityZones),
    count: cdktf.numberToTerraform(struct!.count),
    enable_auto_scaling: cdktf.booleanToTerraform(struct!.enableAutoScaling),
    enable_encryption_at_host: cdktf.booleanToTerraform(struct!.enableEncryptionAtHost),
    enable_fips: cdktf.booleanToTerraform(struct!.enableFips),
    enable_node_public_ip: cdktf.booleanToTerraform(struct!.enableNodePublicIp),
    enable_ultra_ssd: cdktf.booleanToTerraform(struct!.enableUltraSsd),
    gpu_instance_profile: cdktf.stringToTerraform(struct!.gpuInstanceProfile),
    kubelet_disk_type: cdktf.stringToTerraform(struct!.kubeletDiskType),
    max_count: cdktf.numberToTerraform(struct!.maxCount),
    max_pods: cdktf.numberToTerraform(struct!.maxPods),
    min_count: cdktf.numberToTerraform(struct!.minCount),
    mode: cdktf.stringToTerraform(struct!.mode),
    node_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeLabels),
    node_public_ip_prefix_id: cdktf.stringToTerraform(struct!.nodePublicIpPrefixId),
    node_taints: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nodeTaints),
    orchestrator_version: cdktf.stringToTerraform(struct!.orchestratorVersion),
    os_disk_size_gb: cdktf.numberToTerraform(struct!.osDiskSizeGb),
    os_disk_type: cdktf.stringToTerraform(struct!.osDiskType),
    os_sku: cdktf.stringToTerraform(struct!.osSku),
    os_type: cdktf.stringToTerraform(struct!.osType),
    pod_subnet_id: cdktf.stringToTerraform(struct!.podSubnetId),
    proximity_placement_group_id: cdktf.stringToTerraform(struct!.proximityPlacementGroupId),
    scale_set_eviction_policy: cdktf.stringToTerraform(struct!.scaleSetEvictionPolicy),
    scale_set_priority: cdktf.stringToTerraform(struct!.scaleSetPriority),
    spot_max_price: cdktf.numberToTerraform(struct!.spotMaxPrice),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    type: cdktf.stringToTerraform(struct!.type),
    vm_size: cdktf.stringToTerraform(struct!.vmSize),
    vnet_subnet_id: cdktf.stringToTerraform(struct!.vnetSubnetId),
    kubelet_config: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesKubeletConfigToTerraform, true)(struct!.kubeletConfig),
    linux_os_config: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigToTerraform, true)(struct!.linuxOsConfig),
    upgrade_settings: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesUpgradeSettingsToTerraform, true)(struct!.upgradeSettings),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecNodePoolsProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_zones: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.availabilityZones),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_auto_scaling: {
      value: cdktf.booleanToHclTerraform(struct!.enableAutoScaling),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_encryption_at_host: {
      value: cdktf.booleanToHclTerraform(struct!.enableEncryptionAtHost),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_fips: {
      value: cdktf.booleanToHclTerraform(struct!.enableFips),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_node_public_ip: {
      value: cdktf.booleanToHclTerraform(struct!.enableNodePublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_ultra_ssd: {
      value: cdktf.booleanToHclTerraform(struct!.enableUltraSsd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gpu_instance_profile: {
      value: cdktf.stringToHclTerraform(struct!.gpuInstanceProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubelet_disk_type: {
      value: cdktf.stringToHclTerraform(struct!.kubeletDiskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_count: {
      value: cdktf.numberToHclTerraform(struct!.maxCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_pods: {
      value: cdktf.numberToHclTerraform(struct!.maxPods),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_count: {
      value: cdktf.numberToHclTerraform(struct!.minCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    node_public_ip_prefix_id: {
      value: cdktf.stringToHclTerraform(struct!.nodePublicIpPrefixId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_taints: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nodeTaints),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    orchestrator_version: {
      value: cdktf.stringToHclTerraform(struct!.orchestratorVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os_disk_size_gb: {
      value: cdktf.numberToHclTerraform(struct!.osDiskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    os_disk_type: {
      value: cdktf.stringToHclTerraform(struct!.osDiskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os_sku: {
      value: cdktf.stringToHclTerraform(struct!.osSku),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os_type: {
      value: cdktf.stringToHclTerraform(struct!.osType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.podSubnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proximity_placement_group_id: {
      value: cdktf.stringToHclTerraform(struct!.proximityPlacementGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scale_set_eviction_policy: {
      value: cdktf.stringToHclTerraform(struct!.scaleSetEvictionPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scale_set_priority: {
      value: cdktf.stringToHclTerraform(struct!.scaleSetPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spot_max_price: {
      value: cdktf.numberToHclTerraform(struct!.spotMaxPrice),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_size: {
      value: cdktf.stringToHclTerraform(struct!.vmSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vnet_subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.vnetSubnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubelet_config: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesKubeletConfigToHclTerraform, true)(struct!.kubeletConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesKubeletConfigList",
    },
    linux_os_config: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigToHclTerraform, true)(struct!.linuxOsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigList",
    },
    upgrade_settings: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesUpgradeSettingsToHclTerraform, true)(struct!.upgradeSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesUpgradeSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecNodePoolsProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZones !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZones = this._availabilityZones;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._enableAutoScaling !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAutoScaling = this._enableAutoScaling;
    }
    if (this._enableEncryptionAtHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableEncryptionAtHost = this._enableEncryptionAtHost;
    }
    if (this._enableFips !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableFips = this._enableFips;
    }
    if (this._enableNodePublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNodePublicIp = this._enableNodePublicIp;
    }
    if (this._enableUltraSsd !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableUltraSsd = this._enableUltraSsd;
    }
    if (this._gpuInstanceProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuInstanceProfile = this._gpuInstanceProfile;
    }
    if (this._kubeletDiskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeletDiskType = this._kubeletDiskType;
    }
    if (this._maxCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCount = this._maxCount;
    }
    if (this._maxPods !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPods = this._maxPods;
    }
    if (this._minCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCount = this._minCount;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._nodeLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeLabels = this._nodeLabels;
    }
    if (this._nodePublicIpPrefixId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePublicIpPrefixId = this._nodePublicIpPrefixId;
    }
    if (this._nodeTaints !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTaints = this._nodeTaints;
    }
    if (this._orchestratorVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.orchestratorVersion = this._orchestratorVersion;
    }
    if (this._osDiskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.osDiskSizeGb = this._osDiskSizeGb;
    }
    if (this._osDiskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.osDiskType = this._osDiskType;
    }
    if (this._osSku !== undefined) {
      hasAnyValues = true;
      internalValueResult.osSku = this._osSku;
    }
    if (this._osType !== undefined) {
      hasAnyValues = true;
      internalValueResult.osType = this._osType;
    }
    if (this._podSubnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSubnetId = this._podSubnetId;
    }
    if (this._proximityPlacementGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.proximityPlacementGroupId = this._proximityPlacementGroupId;
    }
    if (this._scaleSetEvictionPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleSetEvictionPolicy = this._scaleSetEvictionPolicy;
    }
    if (this._scaleSetPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleSetPriority = this._scaleSetPriority;
    }
    if (this._spotMaxPrice !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotMaxPrice = this._spotMaxPrice;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vmSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmSize = this._vmSize;
    }
    if (this._vnetSubnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnetSubnetId = this._vnetSubnetId;
    }
    if (this._kubeletConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeletConfig = this._kubeletConfig?.internalValue;
    }
    if (this._linuxOsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linuxOsConfig = this._linuxOsConfig?.internalValue;
    }
    if (this._upgradeSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeSettings = this._upgradeSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecNodePoolsProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityZones = undefined;
      this._count = undefined;
      this._enableAutoScaling = undefined;
      this._enableEncryptionAtHost = undefined;
      this._enableFips = undefined;
      this._enableNodePublicIp = undefined;
      this._enableUltraSsd = undefined;
      this._gpuInstanceProfile = undefined;
      this._kubeletDiskType = undefined;
      this._maxCount = undefined;
      this._maxPods = undefined;
      this._minCount = undefined;
      this._mode = undefined;
      this._nodeLabels = undefined;
      this._nodePublicIpPrefixId = undefined;
      this._nodeTaints = undefined;
      this._orchestratorVersion = undefined;
      this._osDiskSizeGb = undefined;
      this._osDiskType = undefined;
      this._osSku = undefined;
      this._osType = undefined;
      this._podSubnetId = undefined;
      this._proximityPlacementGroupId = undefined;
      this._scaleSetEvictionPolicy = undefined;
      this._scaleSetPriority = undefined;
      this._spotMaxPrice = undefined;
      this._tags = undefined;
      this._type = undefined;
      this._vmSize = undefined;
      this._vnetSubnetId = undefined;
      this._kubeletConfig.internalValue = undefined;
      this._linuxOsConfig.internalValue = undefined;
      this._upgradeSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityZones = value.availabilityZones;
      this._count = value.count;
      this._enableAutoScaling = value.enableAutoScaling;
      this._enableEncryptionAtHost = value.enableEncryptionAtHost;
      this._enableFips = value.enableFips;
      this._enableNodePublicIp = value.enableNodePublicIp;
      this._enableUltraSsd = value.enableUltraSsd;
      this._gpuInstanceProfile = value.gpuInstanceProfile;
      this._kubeletDiskType = value.kubeletDiskType;
      this._maxCount = value.maxCount;
      this._maxPods = value.maxPods;
      this._minCount = value.minCount;
      this._mode = value.mode;
      this._nodeLabels = value.nodeLabels;
      this._nodePublicIpPrefixId = value.nodePublicIpPrefixId;
      this._nodeTaints = value.nodeTaints;
      this._orchestratorVersion = value.orchestratorVersion;
      this._osDiskSizeGb = value.osDiskSizeGb;
      this._osDiskType = value.osDiskType;
      this._osSku = value.osSku;
      this._osType = value.osType;
      this._podSubnetId = value.podSubnetId;
      this._proximityPlacementGroupId = value.proximityPlacementGroupId;
      this._scaleSetEvictionPolicy = value.scaleSetEvictionPolicy;
      this._scaleSetPriority = value.scaleSetPriority;
      this._spotMaxPrice = value.spotMaxPrice;
      this._tags = value.tags;
      this._type = value.type;
      this._vmSize = value.vmSize;
      this._vnetSubnetId = value.vnetSubnetId;
      this._kubeletConfig.internalValue = value.kubeletConfig;
      this._linuxOsConfig.internalValue = value.linuxOsConfig;
      this._upgradeSettings.internalValue = value.upgradeSettings;
    }
  }

  // availability_zones - computed: false, optional: true, required: false
  private _availabilityZones?: string[]; 
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }
  public set availabilityZones(value: string[]) {
    this._availabilityZones = value;
  }
  public resetAvailabilityZones() {
    this._availabilityZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones;
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // enable_auto_scaling - computed: false, optional: true, required: false
  private _enableAutoScaling?: boolean | cdktf.IResolvable; 
  public get enableAutoScaling() {
    return this.getBooleanAttribute('enable_auto_scaling');
  }
  public set enableAutoScaling(value: boolean | cdktf.IResolvable) {
    this._enableAutoScaling = value;
  }
  public resetEnableAutoScaling() {
    this._enableAutoScaling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoScalingInput() {
    return this._enableAutoScaling;
  }

  // enable_encryption_at_host - computed: false, optional: true, required: false
  private _enableEncryptionAtHost?: boolean | cdktf.IResolvable; 
  public get enableEncryptionAtHost() {
    return this.getBooleanAttribute('enable_encryption_at_host');
  }
  public set enableEncryptionAtHost(value: boolean | cdktf.IResolvable) {
    this._enableEncryptionAtHost = value;
  }
  public resetEnableEncryptionAtHost() {
    this._enableEncryptionAtHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEncryptionAtHostInput() {
    return this._enableEncryptionAtHost;
  }

  // enable_fips - computed: false, optional: true, required: false
  private _enableFips?: boolean | cdktf.IResolvable; 
  public get enableFips() {
    return this.getBooleanAttribute('enable_fips');
  }
  public set enableFips(value: boolean | cdktf.IResolvable) {
    this._enableFips = value;
  }
  public resetEnableFips() {
    this._enableFips = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFipsInput() {
    return this._enableFips;
  }

  // enable_node_public_ip - computed: false, optional: true, required: false
  private _enableNodePublicIp?: boolean | cdktf.IResolvable; 
  public get enableNodePublicIp() {
    return this.getBooleanAttribute('enable_node_public_ip');
  }
  public set enableNodePublicIp(value: boolean | cdktf.IResolvable) {
    this._enableNodePublicIp = value;
  }
  public resetEnableNodePublicIp() {
    this._enableNodePublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNodePublicIpInput() {
    return this._enableNodePublicIp;
  }

  // enable_ultra_ssd - computed: false, optional: true, required: false
  private _enableUltraSsd?: boolean | cdktf.IResolvable; 
  public get enableUltraSsd() {
    return this.getBooleanAttribute('enable_ultra_ssd');
  }
  public set enableUltraSsd(value: boolean | cdktf.IResolvable) {
    this._enableUltraSsd = value;
  }
  public resetEnableUltraSsd() {
    this._enableUltraSsd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableUltraSsdInput() {
    return this._enableUltraSsd;
  }

  // gpu_instance_profile - computed: false, optional: true, required: false
  private _gpuInstanceProfile?: string; 
  public get gpuInstanceProfile() {
    return this.getStringAttribute('gpu_instance_profile');
  }
  public set gpuInstanceProfile(value: string) {
    this._gpuInstanceProfile = value;
  }
  public resetGpuInstanceProfile() {
    this._gpuInstanceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuInstanceProfileInput() {
    return this._gpuInstanceProfile;
  }

  // kubelet_disk_type - computed: false, optional: true, required: false
  private _kubeletDiskType?: string; 
  public get kubeletDiskType() {
    return this.getStringAttribute('kubelet_disk_type');
  }
  public set kubeletDiskType(value: string) {
    this._kubeletDiskType = value;
  }
  public resetKubeletDiskType() {
    this._kubeletDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletDiskTypeInput() {
    return this._kubeletDiskType;
  }

  // max_count - computed: false, optional: true, required: false
  private _maxCount?: number; 
  public get maxCount() {
    return this.getNumberAttribute('max_count');
  }
  public set maxCount(value: number) {
    this._maxCount = value;
  }
  public resetMaxCount() {
    this._maxCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCountInput() {
    return this._maxCount;
  }

  // max_pods - computed: false, optional: true, required: false
  private _maxPods?: number; 
  public get maxPods() {
    return this.getNumberAttribute('max_pods');
  }
  public set maxPods(value: number) {
    this._maxPods = value;
  }
  public resetMaxPods() {
    this._maxPods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPodsInput() {
    return this._maxPods;
  }

  // min_count - computed: false, optional: true, required: false
  private _minCount?: number; 
  public get minCount() {
    return this.getNumberAttribute('min_count');
  }
  public set minCount(value: number) {
    this._minCount = value;
  }
  public resetMinCount() {
    this._minCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCountInput() {
    return this._minCount;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // node_labels - computed: false, optional: true, required: false
  private _nodeLabels?: { [key: string]: string }; 
  public get nodeLabels() {
    return this.getStringMapAttribute('node_labels');
  }
  public set nodeLabels(value: { [key: string]: string }) {
    this._nodeLabels = value;
  }
  public resetNodeLabels() {
    this._nodeLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeLabelsInput() {
    return this._nodeLabels;
  }

  // node_public_ip_prefix_id - computed: false, optional: true, required: false
  private _nodePublicIpPrefixId?: string; 
  public get nodePublicIpPrefixId() {
    return this.getStringAttribute('node_public_ip_prefix_id');
  }
  public set nodePublicIpPrefixId(value: string) {
    this._nodePublicIpPrefixId = value;
  }
  public resetNodePublicIpPrefixId() {
    this._nodePublicIpPrefixId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePublicIpPrefixIdInput() {
    return this._nodePublicIpPrefixId;
  }

  // node_taints - computed: false, optional: true, required: false
  private _nodeTaints?: string[]; 
  public get nodeTaints() {
    return this.getListAttribute('node_taints');
  }
  public set nodeTaints(value: string[]) {
    this._nodeTaints = value;
  }
  public resetNodeTaints() {
    this._nodeTaints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTaintsInput() {
    return this._nodeTaints;
  }

  // orchestrator_version - computed: false, optional: true, required: false
  private _orchestratorVersion?: string; 
  public get orchestratorVersion() {
    return this.getStringAttribute('orchestrator_version');
  }
  public set orchestratorVersion(value: string) {
    this._orchestratorVersion = value;
  }
  public resetOrchestratorVersion() {
    this._orchestratorVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orchestratorVersionInput() {
    return this._orchestratorVersion;
  }

  // os_disk_size_gb - computed: false, optional: true, required: false
  private _osDiskSizeGb?: number; 
  public get osDiskSizeGb() {
    return this.getNumberAttribute('os_disk_size_gb');
  }
  public set osDiskSizeGb(value: number) {
    this._osDiskSizeGb = value;
  }
  public resetOsDiskSizeGb() {
    this._osDiskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osDiskSizeGbInput() {
    return this._osDiskSizeGb;
  }

  // os_disk_type - computed: false, optional: true, required: false
  private _osDiskType?: string; 
  public get osDiskType() {
    return this.getStringAttribute('os_disk_type');
  }
  public set osDiskType(value: string) {
    this._osDiskType = value;
  }
  public resetOsDiskType() {
    this._osDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osDiskTypeInput() {
    return this._osDiskType;
  }

  // os_sku - computed: false, optional: true, required: false
  private _osSku?: string; 
  public get osSku() {
    return this.getStringAttribute('os_sku');
  }
  public set osSku(value: string) {
    this._osSku = value;
  }
  public resetOsSku() {
    this._osSku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osSkuInput() {
    return this._osSku;
  }

  // os_type - computed: false, optional: true, required: false
  private _osType?: string; 
  public get osType() {
    return this.getStringAttribute('os_type');
  }
  public set osType(value: string) {
    this._osType = value;
  }
  public resetOsType() {
    this._osType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osTypeInput() {
    return this._osType;
  }

  // pod_subnet_id - computed: false, optional: true, required: false
  private _podSubnetId?: string; 
  public get podSubnetId() {
    return this.getStringAttribute('pod_subnet_id');
  }
  public set podSubnetId(value: string) {
    this._podSubnetId = value;
  }
  public resetPodSubnetId() {
    this._podSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSubnetIdInput() {
    return this._podSubnetId;
  }

  // proximity_placement_group_id - computed: false, optional: true, required: false
  private _proximityPlacementGroupId?: string; 
  public get proximityPlacementGroupId() {
    return this.getStringAttribute('proximity_placement_group_id');
  }
  public set proximityPlacementGroupId(value: string) {
    this._proximityPlacementGroupId = value;
  }
  public resetProximityPlacementGroupId() {
    this._proximityPlacementGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proximityPlacementGroupIdInput() {
    return this._proximityPlacementGroupId;
  }

  // scale_set_eviction_policy - computed: false, optional: true, required: false
  private _scaleSetEvictionPolicy?: string; 
  public get scaleSetEvictionPolicy() {
    return this.getStringAttribute('scale_set_eviction_policy');
  }
  public set scaleSetEvictionPolicy(value: string) {
    this._scaleSetEvictionPolicy = value;
  }
  public resetScaleSetEvictionPolicy() {
    this._scaleSetEvictionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleSetEvictionPolicyInput() {
    return this._scaleSetEvictionPolicy;
  }

  // scale_set_priority - computed: false, optional: true, required: false
  private _scaleSetPriority?: string; 
  public get scaleSetPriority() {
    return this.getStringAttribute('scale_set_priority');
  }
  public set scaleSetPriority(value: string) {
    this._scaleSetPriority = value;
  }
  public resetScaleSetPriority() {
    this._scaleSetPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleSetPriorityInput() {
    return this._scaleSetPriority;
  }

  // spot_max_price - computed: false, optional: true, required: false
  private _spotMaxPrice?: number; 
  public get spotMaxPrice() {
    return this.getNumberAttribute('spot_max_price');
  }
  public set spotMaxPrice(value: number) {
    this._spotMaxPrice = value;
  }
  public resetSpotMaxPrice() {
    this._spotMaxPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotMaxPriceInput() {
    return this._spotMaxPrice;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vm_size - computed: false, optional: true, required: false
  private _vmSize?: string; 
  public get vmSize() {
    return this.getStringAttribute('vm_size');
  }
  public set vmSize(value: string) {
    this._vmSize = value;
  }
  public resetVmSize() {
    this._vmSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmSizeInput() {
    return this._vmSize;
  }

  // vnet_subnet_id - computed: false, optional: true, required: false
  private _vnetSubnetId?: string; 
  public get vnetSubnetId() {
    return this.getStringAttribute('vnet_subnet_id');
  }
  public set vnetSubnetId(value: string) {
    this._vnetSubnetId = value;
  }
  public resetVnetSubnetId() {
    this._vnetSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetSubnetIdInput() {
    return this._vnetSubnetId;
  }

  // kubelet_config - computed: false, optional: true, required: false
  private _kubeletConfig = new DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesKubeletConfigList(this, "kubelet_config", false);
  public get kubeletConfig() {
    return this._kubeletConfig;
  }
  public putKubeletConfig(value: DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesKubeletConfig[] | cdktf.IResolvable) {
    this._kubeletConfig.internalValue = value;
  }
  public resetKubeletConfig() {
    this._kubeletConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletConfigInput() {
    return this._kubeletConfig.internalValue;
  }

  // linux_os_config - computed: false, optional: true, required: false
  private _linuxOsConfig = new DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigList(this, "linux_os_config", false);
  public get linuxOsConfig() {
    return this._linuxOsConfig;
  }
  public putLinuxOsConfig(value: DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfig[] | cdktf.IResolvable) {
    this._linuxOsConfig.internalValue = value;
  }
  public resetLinuxOsConfig() {
    this._linuxOsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxOsConfigInput() {
    return this._linuxOsConfig.internalValue;
  }

  // upgrade_settings - computed: false, optional: true, required: false
  private _upgradeSettings = new DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesUpgradeSettingsList(this, "upgrade_settings", false);
  public get upgradeSettings() {
    return this._upgradeSettings;
  }
  public putUpgradeSettings(value: DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesUpgradeSettings[] | cdktf.IResolvable) {
    this._upgradeSettings.internalValue = value;
  }
  public resetUpgradeSettings() {
    this._upgradeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeSettingsInput() {
    return this._upgradeSettings.internalValue;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecNodePoolsProperties[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpecNodePools {
  /**
  * The AKS node pool api version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#apiversion DataRafayAksCluster#apiversion}
  */
  readonly apiversion: string;
  /**
  * AKS cluster location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#location DataRafayAksCluster#location}
  */
  readonly location?: string;
  /**
  * The AKS node pool name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#name DataRafayAksCluster#name}
  */
  readonly name: string;
  /**
  * The AKS node pool type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#type DataRafayAksCluster#type}
  */
  readonly type?: string;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#properties DataRafayAksCluster#properties}
  */
  readonly properties: DataRafayAksClusterSpecClusterConfigSpecNodePoolsProperties[] | cdktf.IResolvable;
}

export function dataRafayAksClusterSpecClusterConfigSpecNodePoolsToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecNodePools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apiversion: cdktf.stringToTerraform(struct!.apiversion),
    location: cdktf.stringToTerraform(struct!.location),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    properties: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesToTerraform, true)(struct!.properties),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecNodePoolsToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpecNodePools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apiversion: {
      value: cdktf.stringToHclTerraform(struct!.apiversion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesToHclTerraform, true)(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecNodePoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpecNodePools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiversion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiversion = this._apiversion;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpecNodePools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiversion = undefined;
      this._location = undefined;
      this._name = undefined;
      this._type = undefined;
      this._properties.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiversion = value.apiversion;
      this._location = value.location;
      this._name = value.name;
      this._type = value.type;
      this._properties.internalValue = value.properties;
    }
  }

  // apiversion - computed: false, optional: false, required: true
  private _apiversion?: string; 
  public get apiversion() {
    return this.getStringAttribute('apiversion');
  }
  public set apiversion(value: string) {
    this._apiversion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiversionInput() {
    return this._apiversion;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // properties - computed: false, optional: false, required: true
  private _properties = new DataRafayAksClusterSpecClusterConfigSpecNodePoolsPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
  public putProperties(value: DataRafayAksClusterSpecClusterConfigSpecNodePoolsProperties[] | cdktf.IResolvable) {
    this._properties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecNodePoolsList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpecNodePools[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecNodePoolsOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecNodePoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfigSpec {
  /**
  * Resource Group for the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#resource_group_name DataRafayAksCluster#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * The AKS subscription id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#subscription_id DataRafayAksCluster#subscription_id}
  */
  readonly subscriptionId?: string;
  /**
  * maintenance_configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#maintenance_configurations DataRafayAksCluster#maintenance_configurations}
  */
  readonly maintenanceConfigurations?: DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurations[] | cdktf.IResolvable;
  /**
  * managed_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#managed_cluster DataRafayAksCluster#managed_cluster}
  */
  readonly managedCluster?: DataRafayAksClusterSpecClusterConfigSpecManagedCluster[] | cdktf.IResolvable;
  /**
  * node_pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#node_pools DataRafayAksCluster#node_pools}
  */
  readonly nodePools: DataRafayAksClusterSpecClusterConfigSpecNodePools[] | cdktf.IResolvable;
}

export function dataRafayAksClusterSpecClusterConfigSpecToTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
    maintenance_configurations: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsToTerraform, true)(struct!.maintenanceConfigurations),
    managed_cluster: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecManagedClusterToTerraform, true)(struct!.managedCluster),
    node_pools: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecNodePoolsToTerraform, true)(struct!.nodePools),
  }
}


export function dataRafayAksClusterSpecClusterConfigSpecToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfigSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maintenance_configurations: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsToHclTerraform, true)(struct!.maintenanceConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsList",
    },
    managed_cluster: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecManagedClusterToHclTerraform, true)(struct!.managedCluster),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecManagedClusterList",
    },
    node_pools: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecNodePoolsToHclTerraform, true)(struct!.nodePools),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecNodePoolsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfigSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupName = this._resourceGroupName;
    }
    if (this._subscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionId = this._subscriptionId;
    }
    if (this._maintenanceConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceConfigurations = this._maintenanceConfigurations?.internalValue;
    }
    if (this._managedCluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedCluster = this._managedCluster?.internalValue;
    }
    if (this._nodePools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePools = this._nodePools?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfigSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceGroupName = undefined;
      this._subscriptionId = undefined;
      this._maintenanceConfigurations.internalValue = undefined;
      this._managedCluster.internalValue = undefined;
      this._nodePools.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceGroupName = value.resourceGroupName;
      this._subscriptionId = value.subscriptionId;
      this._maintenanceConfigurations.internalValue = value.maintenanceConfigurations;
      this._managedCluster.internalValue = value.managedCluster;
      this._nodePools.internalValue = value.nodePools;
    }
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // subscription_id - computed: false, optional: true, required: false
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // maintenance_configurations - computed: false, optional: true, required: false
  private _maintenanceConfigurations = new DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurationsList(this, "maintenance_configurations", false);
  public get maintenanceConfigurations() {
    return this._maintenanceConfigurations;
  }
  public putMaintenanceConfigurations(value: DataRafayAksClusterSpecClusterConfigSpecMaintenanceConfigurations[] | cdktf.IResolvable) {
    this._maintenanceConfigurations.internalValue = value;
  }
  public resetMaintenanceConfigurations() {
    this._maintenanceConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceConfigurationsInput() {
    return this._maintenanceConfigurations.internalValue;
  }

  // managed_cluster - computed: false, optional: true, required: false
  private _managedCluster = new DataRafayAksClusterSpecClusterConfigSpecManagedClusterList(this, "managed_cluster", false);
  public get managedCluster() {
    return this._managedCluster;
  }
  public putManagedCluster(value: DataRafayAksClusterSpecClusterConfigSpecManagedCluster[] | cdktf.IResolvable) {
    this._managedCluster.internalValue = value;
  }
  public resetManagedCluster() {
    this._managedCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedClusterInput() {
    return this._managedCluster.internalValue;
  }

  // node_pools - computed: false, optional: false, required: true
  private _nodePools = new DataRafayAksClusterSpecClusterConfigSpecNodePoolsList(this, "node_pools", false);
  public get nodePools() {
    return this._nodePools;
  }
  public putNodePools(value: DataRafayAksClusterSpecClusterConfigSpecNodePools[] | cdktf.IResolvable) {
    this._nodePools.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolsInput() {
    return this._nodePools.internalValue;
  }
}

export class DataRafayAksClusterSpecClusterConfigSpecList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfigSpec[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigSpecOutputReference {
    return new DataRafayAksClusterSpecClusterConfigSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecClusterConfig {
  /**
  * apiversion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#apiversion DataRafayAksCluster#apiversion}
  */
  readonly apiversion: string;
  /**
  * kind
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#kind DataRafayAksCluster#kind}
  */
  readonly kind?: string;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#metadata DataRafayAksCluster#metadata}
  */
  readonly metadata: DataRafayAksClusterSpecClusterConfigMetadata[] | cdktf.IResolvable;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#spec DataRafayAksCluster#spec}
  */
  readonly spec: DataRafayAksClusterSpecClusterConfigSpec[] | cdktf.IResolvable;
}

export function dataRafayAksClusterSpecClusterConfigToTerraform(struct?: DataRafayAksClusterSpecClusterConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apiversion: cdktf.stringToTerraform(struct!.apiversion),
    kind: cdktf.stringToTerraform(struct!.kind),
    metadata: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigMetadataToTerraform, true)(struct!.metadata),
    spec: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigSpecToTerraform, true)(struct!.spec),
  }
}


export function dataRafayAksClusterSpecClusterConfigToHclTerraform(struct?: DataRafayAksClusterSpecClusterConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apiversion: {
      value: cdktf.stringToHclTerraform(struct!.apiversion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigMetadataToHclTerraform, true)(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigMetadataList",
    },
    spec: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigSpecToHclTerraform, true)(struct!.spec),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecClusterConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecClusterConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiversion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiversion = this._apiversion;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecClusterConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiversion = undefined;
      this._kind = undefined;
      this._metadata.internalValue = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiversion = value.apiversion;
      this._kind = value.kind;
      this._metadata.internalValue = value.metadata;
      this._spec.internalValue = value.spec;
    }
  }

  // apiversion - computed: false, optional: false, required: true
  private _apiversion?: string; 
  public get apiversion() {
    return this.getStringAttribute('apiversion');
  }
  public set apiversion(value: string) {
    this._apiversion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiversionInput() {
    return this._apiversion;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataRafayAksClusterSpecClusterConfigMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataRafayAksClusterSpecClusterConfigMetadata[] | cdktf.IResolvable) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataRafayAksClusterSpecClusterConfigSpecList(this, "spec", false);
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataRafayAksClusterSpecClusterConfigSpec[] | cdktf.IResolvable) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}

export class DataRafayAksClusterSpecClusterConfigList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecClusterConfig[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecClusterConfigOutputReference {
    return new DataRafayAksClusterSpecClusterConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecSharingProjects {
  /**
  * name of the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#name DataRafayAksCluster#name}
  */
  readonly name?: string;
}

export function dataRafayAksClusterSpecSharingProjectsToTerraform(struct?: DataRafayAksClusterSpecSharingProjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataRafayAksClusterSpecSharingProjectsToHclTerraform(struct?: DataRafayAksClusterSpecSharingProjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecSharingProjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecSharingProjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecSharingProjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class DataRafayAksClusterSpecSharingProjectsList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecSharingProjects[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecSharingProjectsOutputReference {
    return new DataRafayAksClusterSpecSharingProjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecSharing {
  /**
  * flag to specify if sharing is enabled for resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#enabled DataRafayAksCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * projects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#projects DataRafayAksCluster#projects}
  */
  readonly projects?: DataRafayAksClusterSpecSharingProjects[] | cdktf.IResolvable;
}

export function dataRafayAksClusterSpecSharingToTerraform(struct?: DataRafayAksClusterSpecSharingOutputReference | DataRafayAksClusterSpecSharing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    projects: cdktf.listMapper(dataRafayAksClusterSpecSharingProjectsToTerraform, true)(struct!.projects),
  }
}


export function dataRafayAksClusterSpecSharingToHclTerraform(struct?: DataRafayAksClusterSpecSharingOutputReference | DataRafayAksClusterSpecSharing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    projects: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecSharingProjectsToHclTerraform, true)(struct!.projects),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecSharingProjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecSharingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayAksClusterSpecSharing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._projects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.projects = this._projects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecSharing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._projects.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._projects.internalValue = value.projects;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // projects - computed: false, optional: true, required: false
  private _projects = new DataRafayAksClusterSpecSharingProjectsList(this, "projects", false);
  public get projects() {
    return this._projects;
  }
  public putProjects(value: DataRafayAksClusterSpecSharingProjects[] | cdktf.IResolvable) {
    this._projects.internalValue = value;
  }
  public resetProjects() {
    this._projects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectsInput() {
    return this._projects.internalValue;
  }
}
export interface DataRafayAksClusterSpecSystemComponentsPlacementDaemonsetOverrideTolerations {
  /**
  * indicates the taint effect to match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#effect DataRafayAksCluster#effect}
  */
  readonly effect?: string;
  /**
  * the taint key that the toleration applies to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#key DataRafayAksCluster#key}
  */
  readonly key?: string;
  /**
  * represents a key's relationship to the value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#operator DataRafayAksCluster#operator}
  */
  readonly operator?: string;
  /**
  * represents the period of time the toleration tolerates the taint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#toleration_seconds DataRafayAksCluster#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * the taint value the toleration matches to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#value DataRafayAksCluster#value}
  */
  readonly value?: string;
}

export function dataRafayAksClusterSpecSystemComponentsPlacementDaemonsetOverrideTolerationsToTerraform(struct?: DataRafayAksClusterSpecSystemComponentsPlacementDaemonsetOverrideTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataRafayAksClusterSpecSystemComponentsPlacementDaemonsetOverrideTolerationsToHclTerraform(struct?: DataRafayAksClusterSpecSystemComponentsPlacementDaemonsetOverrideTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toleration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecSystemComponentsPlacementDaemonsetOverrideTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecSystemComponentsPlacementDaemonsetOverrideTolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tolerationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerationSeconds = this._tolerationSeconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecSystemComponentsPlacementDaemonsetOverrideTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._tolerationSeconds = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._tolerationSeconds = value.tolerationSeconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // toleration_seconds - computed: false, optional: true, required: false
  private _tolerationSeconds?: number; 
  public get tolerationSeconds() {
    return this.getNumberAttribute('toleration_seconds');
  }
  public set tolerationSeconds(value: number) {
    this._tolerationSeconds = value;
  }
  public resetTolerationSeconds() {
    this._tolerationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationSecondsInput() {
    return this._tolerationSeconds;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataRafayAksClusterSpecSystemComponentsPlacementDaemonsetOverrideTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecSystemComponentsPlacementDaemonsetOverrideTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecSystemComponentsPlacementDaemonsetOverrideTolerationsOutputReference {
    return new DataRafayAksClusterSpecSystemComponentsPlacementDaemonsetOverrideTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecSystemComponentsPlacementDaemonsetOverride {
  /**
  * enables node selection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#node_selection_enabled DataRafayAksCluster#node_selection_enabled}
  */
  readonly nodeSelectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * tolerations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#tolerations DataRafayAksCluster#tolerations}
  */
  readonly tolerations?: DataRafayAksClusterSpecSystemComponentsPlacementDaemonsetOverrideTolerations[] | cdktf.IResolvable;
}

export function dataRafayAksClusterSpecSystemComponentsPlacementDaemonsetOverrideToTerraform(struct?: DataRafayAksClusterSpecSystemComponentsPlacementDaemonsetOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selection_enabled: cdktf.booleanToTerraform(struct!.nodeSelectionEnabled),
    tolerations: cdktf.listMapper(dataRafayAksClusterSpecSystemComponentsPlacementDaemonsetOverrideTolerationsToTerraform, true)(struct!.tolerations),
  }
}


export function dataRafayAksClusterSpecSystemComponentsPlacementDaemonsetOverrideToHclTerraform(struct?: DataRafayAksClusterSpecSystemComponentsPlacementDaemonsetOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selection_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.nodeSelectionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecSystemComponentsPlacementDaemonsetOverrideTolerationsToHclTerraform, true)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecSystemComponentsPlacementDaemonsetOverrideTolerationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecSystemComponentsPlacementDaemonsetOverrideOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecSystemComponentsPlacementDaemonsetOverride | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSelectionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelectionEnabled = this._nodeSelectionEnabled;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecSystemComponentsPlacementDaemonsetOverride | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeSelectionEnabled = undefined;
      this._tolerations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeSelectionEnabled = value.nodeSelectionEnabled;
      this._tolerations.internalValue = value.tolerations;
    }
  }

  // node_selection_enabled - computed: false, optional: true, required: false
  private _nodeSelectionEnabled?: boolean | cdktf.IResolvable; 
  public get nodeSelectionEnabled() {
    return this.getBooleanAttribute('node_selection_enabled');
  }
  public set nodeSelectionEnabled(value: boolean | cdktf.IResolvable) {
    this._nodeSelectionEnabled = value;
  }
  public resetNodeSelectionEnabled() {
    this._nodeSelectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectionEnabledInput() {
    return this._nodeSelectionEnabled;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataRafayAksClusterSpecSystemComponentsPlacementDaemonsetOverrideTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataRafayAksClusterSpecSystemComponentsPlacementDaemonsetOverrideTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }
}

export class DataRafayAksClusterSpecSystemComponentsPlacementDaemonsetOverrideList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecSystemComponentsPlacementDaemonsetOverride[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecSystemComponentsPlacementDaemonsetOverrideOutputReference {
    return new DataRafayAksClusterSpecSystemComponentsPlacementDaemonsetOverrideOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecSystemComponentsPlacementTolerations {
  /**
  * indicates the taint effect to match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#effect DataRafayAksCluster#effect}
  */
  readonly effect?: string;
  /**
  * the taint key that the toleration applies to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#key DataRafayAksCluster#key}
  */
  readonly key?: string;
  /**
  * represents a key's relationship to the value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#operator DataRafayAksCluster#operator}
  */
  readonly operator?: string;
  /**
  * represents the period of time the toleration tolerates the taint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#toleration_seconds DataRafayAksCluster#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * the taint value the toleration matches to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#value DataRafayAksCluster#value}
  */
  readonly value?: string;
}

export function dataRafayAksClusterSpecSystemComponentsPlacementTolerationsToTerraform(struct?: DataRafayAksClusterSpecSystemComponentsPlacementTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataRafayAksClusterSpecSystemComponentsPlacementTolerationsToHclTerraform(struct?: DataRafayAksClusterSpecSystemComponentsPlacementTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toleration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecSystemComponentsPlacementTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpecSystemComponentsPlacementTolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tolerationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerationSeconds = this._tolerationSeconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecSystemComponentsPlacementTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._tolerationSeconds = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._tolerationSeconds = value.tolerationSeconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // toleration_seconds - computed: false, optional: true, required: false
  private _tolerationSeconds?: number; 
  public get tolerationSeconds() {
    return this.getNumberAttribute('toleration_seconds');
  }
  public set tolerationSeconds(value: number) {
    this._tolerationSeconds = value;
  }
  public resetTolerationSeconds() {
    this._tolerationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationSecondsInput() {
    return this._tolerationSeconds;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataRafayAksClusterSpecSystemComponentsPlacementTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpecSystemComponentsPlacementTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecSystemComponentsPlacementTolerationsOutputReference {
    return new DataRafayAksClusterSpecSystemComponentsPlacementTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterSpecSystemComponentsPlacement {
  /**
  * Key-Value pairs insuring pods to be scheduled on desired nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#node_selector DataRafayAksCluster#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * daemonset_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#daemonset_override DataRafayAksCluster#daemonset_override}
  */
  readonly daemonsetOverride?: DataRafayAksClusterSpecSystemComponentsPlacementDaemonsetOverride[] | cdktf.IResolvable;
  /**
  * tolerations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#tolerations DataRafayAksCluster#tolerations}
  */
  readonly tolerations?: DataRafayAksClusterSpecSystemComponentsPlacementTolerations[] | cdktf.IResolvable;
}

export function dataRafayAksClusterSpecSystemComponentsPlacementToTerraform(struct?: DataRafayAksClusterSpecSystemComponentsPlacementOutputReference | DataRafayAksClusterSpecSystemComponentsPlacement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    daemonset_override: cdktf.listMapper(dataRafayAksClusterSpecSystemComponentsPlacementDaemonsetOverrideToTerraform, true)(struct!.daemonsetOverride),
    tolerations: cdktf.listMapper(dataRafayAksClusterSpecSystemComponentsPlacementTolerationsToTerraform, true)(struct!.tolerations),
  }
}


export function dataRafayAksClusterSpecSystemComponentsPlacementToHclTerraform(struct?: DataRafayAksClusterSpecSystemComponentsPlacementOutputReference | DataRafayAksClusterSpecSystemComponentsPlacement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    daemonset_override: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecSystemComponentsPlacementDaemonsetOverrideToHclTerraform, true)(struct!.daemonsetOverride),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecSystemComponentsPlacementDaemonsetOverrideList",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecSystemComponentsPlacementTolerationsToHclTerraform, true)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecSystemComponentsPlacementTolerationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecSystemComponentsPlacementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRafayAksClusterSpecSystemComponentsPlacement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._daemonsetOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.daemonsetOverride = this._daemonsetOverride?.internalValue;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpecSystemComponentsPlacement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeSelector = undefined;
      this._daemonsetOverride.internalValue = undefined;
      this._tolerations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeSelector = value.nodeSelector;
      this._daemonsetOverride.internalValue = value.daemonsetOverride;
      this._tolerations.internalValue = value.tolerations;
    }
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // daemonset_override - computed: false, optional: true, required: false
  private _daemonsetOverride = new DataRafayAksClusterSpecSystemComponentsPlacementDaemonsetOverrideList(this, "daemonset_override", false);
  public get daemonsetOverride() {
    return this._daemonsetOverride;
  }
  public putDaemonsetOverride(value: DataRafayAksClusterSpecSystemComponentsPlacementDaemonsetOverride[] | cdktf.IResolvable) {
    this._daemonsetOverride.internalValue = value;
  }
  public resetDaemonsetOverride() {
    this._daemonsetOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daemonsetOverrideInput() {
    return this._daemonsetOverride.internalValue;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataRafayAksClusterSpecSystemComponentsPlacementTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataRafayAksClusterSpecSystemComponentsPlacementTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }
}
export interface DataRafayAksClusterSpec {
  /**
  * Blueprint to be associated with the cluster. Default will be default-aks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#blueprint DataRafayAksCluster#blueprint}
  */
  readonly blueprint?: string;
  /**
  * Blueprint version to be associated with the cluster. Default will be the latest version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#blueprintversion DataRafayAksCluster#blueprintversion}
  */
  readonly blueprintversion?: string;
  /**
  * Cloud credentials provider used to create and manage the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#cloudprovider DataRafayAksCluster#cloudprovider}
  */
  readonly cloudprovider: string;
  /**
  * AKS Cluster type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#type DataRafayAksCluster#type}
  */
  readonly type: string;
  /**
  * cluster_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#cluster_config DataRafayAksCluster#cluster_config}
  */
  readonly clusterConfig: DataRafayAksClusterSpecClusterConfig[] | cdktf.IResolvable;
  /**
  * sharing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#sharing DataRafayAksCluster#sharing}
  */
  readonly sharing?: DataRafayAksClusterSpecSharing;
  /**
  * system_components_placement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#system_components_placement DataRafayAksCluster#system_components_placement}
  */
  readonly systemComponentsPlacement?: DataRafayAksClusterSpecSystemComponentsPlacement;
}

export function dataRafayAksClusterSpecToTerraform(struct?: DataRafayAksClusterSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blueprint: cdktf.stringToTerraform(struct!.blueprint),
    blueprintversion: cdktf.stringToTerraform(struct!.blueprintversion),
    cloudprovider: cdktf.stringToTerraform(struct!.cloudprovider),
    type: cdktf.stringToTerraform(struct!.type),
    cluster_config: cdktf.listMapper(dataRafayAksClusterSpecClusterConfigToTerraform, true)(struct!.clusterConfig),
    sharing: dataRafayAksClusterSpecSharingToTerraform(struct!.sharing),
    system_components_placement: dataRafayAksClusterSpecSystemComponentsPlacementToTerraform(struct!.systemComponentsPlacement),
  }
}


export function dataRafayAksClusterSpecToHclTerraform(struct?: DataRafayAksClusterSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blueprint: {
      value: cdktf.stringToHclTerraform(struct!.blueprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blueprintversion: {
      value: cdktf.stringToHclTerraform(struct!.blueprintversion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudprovider: {
      value: cdktf.stringToHclTerraform(struct!.cloudprovider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_config: {
      value: cdktf.listMapperHcl(dataRafayAksClusterSpecClusterConfigToHclTerraform, true)(struct!.clusterConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecClusterConfigList",
    },
    sharing: {
      value: dataRafayAksClusterSpecSharingToHclTerraform(struct!.sharing),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecSharingList",
    },
    system_components_placement: {
      value: dataRafayAksClusterSpecSystemComponentsPlacementToHclTerraform(struct!.systemComponentsPlacement),
      isBlock: true,
      type: "list",
      storageClassType: "DataRafayAksClusterSpecSystemComponentsPlacementList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayAksClusterSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blueprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.blueprint = this._blueprint;
    }
    if (this._blueprintversion !== undefined) {
      hasAnyValues = true;
      internalValueResult.blueprintversion = this._blueprintversion;
    }
    if (this._cloudprovider !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudprovider = this._cloudprovider;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._clusterConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterConfig = this._clusterConfig?.internalValue;
    }
    if (this._sharing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharing = this._sharing?.internalValue;
    }
    if (this._systemComponentsPlacement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemComponentsPlacement = this._systemComponentsPlacement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blueprint = undefined;
      this._blueprintversion = undefined;
      this._cloudprovider = undefined;
      this._type = undefined;
      this._clusterConfig.internalValue = undefined;
      this._sharing.internalValue = undefined;
      this._systemComponentsPlacement.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blueprint = value.blueprint;
      this._blueprintversion = value.blueprintversion;
      this._cloudprovider = value.cloudprovider;
      this._type = value.type;
      this._clusterConfig.internalValue = value.clusterConfig;
      this._sharing.internalValue = value.sharing;
      this._systemComponentsPlacement.internalValue = value.systemComponentsPlacement;
    }
  }

  // blueprint - computed: false, optional: true, required: false
  private _blueprint?: string; 
  public get blueprint() {
    return this.getStringAttribute('blueprint');
  }
  public set blueprint(value: string) {
    this._blueprint = value;
  }
  public resetBlueprint() {
    this._blueprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintInput() {
    return this._blueprint;
  }

  // blueprintversion - computed: false, optional: true, required: false
  private _blueprintversion?: string; 
  public get blueprintversion() {
    return this.getStringAttribute('blueprintversion');
  }
  public set blueprintversion(value: string) {
    this._blueprintversion = value;
  }
  public resetBlueprintversion() {
    this._blueprintversion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintversionInput() {
    return this._blueprintversion;
  }

  // cloudprovider - computed: false, optional: false, required: true
  private _cloudprovider?: string; 
  public get cloudprovider() {
    return this.getStringAttribute('cloudprovider');
  }
  public set cloudprovider(value: string) {
    this._cloudprovider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudproviderInput() {
    return this._cloudprovider;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // cluster_config - computed: false, optional: false, required: true
  private _clusterConfig = new DataRafayAksClusterSpecClusterConfigList(this, "cluster_config", false);
  public get clusterConfig() {
    return this._clusterConfig;
  }
  public putClusterConfig(value: DataRafayAksClusterSpecClusterConfig[] | cdktf.IResolvable) {
    this._clusterConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterConfigInput() {
    return this._clusterConfig.internalValue;
  }

  // sharing - computed: false, optional: true, required: false
  private _sharing = new DataRafayAksClusterSpecSharingOutputReference(this, "sharing");
  public get sharing() {
    return this._sharing;
  }
  public putSharing(value: DataRafayAksClusterSpecSharing) {
    this._sharing.internalValue = value;
  }
  public resetSharing() {
    this._sharing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharingInput() {
    return this._sharing.internalValue;
  }

  // system_components_placement - computed: false, optional: true, required: false
  private _systemComponentsPlacement = new DataRafayAksClusterSpecSystemComponentsPlacementOutputReference(this, "system_components_placement");
  public get systemComponentsPlacement() {
    return this._systemComponentsPlacement;
  }
  public putSystemComponentsPlacement(value: DataRafayAksClusterSpecSystemComponentsPlacement) {
    this._systemComponentsPlacement.internalValue = value;
  }
  public resetSystemComponentsPlacement() {
    this._systemComponentsPlacement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemComponentsPlacementInput() {
    return this._systemComponentsPlacement.internalValue;
  }
}

export class DataRafayAksClusterSpecList extends cdktf.ComplexList {
  public internalValue? : DataRafayAksClusterSpec[] | cdktf.IResolvable

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
  public get(index: number): DataRafayAksClusterSpecOutputReference {
    return new DataRafayAksClusterSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayAksClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#read DataRafayAksCluster#read}
  */
  readonly read?: string;
}

export function dataRafayAksClusterTimeoutsToTerraform(struct?: DataRafayAksClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataRafayAksClusterTimeoutsToHclTerraform(struct?: DataRafayAksClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAksClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRafayAksClusterTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAksClusterTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster rafay_aks_cluster}
*/
export class DataRafayAksCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rafay_aks_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRafayAksCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRafayAksCluster to import
  * @param importFromId The id of the existing DataRafayAksCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRafayAksCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rafay_aks_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/aks_cluster rafay_aks_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRafayAksClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataRafayAksClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'rafay_aks_cluster',
      terraformGeneratorMetadata: {
        providerName: 'rafay',
        providerVersion: '1.1.55',
        providerVersionConstraint: '1.1.55'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiversion = config.apiversion;
    this._id = config.id;
    this._kind = config.kind;
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apiversion - computed: false, optional: false, required: true
  private _apiversion?: string; 
  public get apiversion() {
    return this.getStringAttribute('apiversion');
  }
  public set apiversion(value: string) {
    this._apiversion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiversionInput() {
    return this._apiversion;
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

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataRafayAksClusterMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataRafayAksClusterMetadata[] | cdktf.IResolvable) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataRafayAksClusterSpecList(this, "spec", false);
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataRafayAksClusterSpec[] | cdktf.IResolvable) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataRafayAksClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataRafayAksClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apiversion: cdktf.stringToTerraform(this._apiversion),
      id: cdktf.stringToTerraform(this._id),
      kind: cdktf.stringToTerraform(this._kind),
      metadata: cdktf.listMapper(dataRafayAksClusterMetadataToTerraform, true)(this._metadata.internalValue),
      spec: cdktf.listMapper(dataRafayAksClusterSpecToTerraform, true)(this._spec.internalValue),
      timeouts: dataRafayAksClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apiversion: {
        value: cdktf.stringToHclTerraform(this._apiversion),
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
      kind: {
        value: cdktf.stringToHclTerraform(this._kind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: cdktf.listMapperHcl(dataRafayAksClusterMetadataToHclTerraform, true)(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataRafayAksClusterMetadataList",
      },
      spec: {
        value: cdktf.listMapperHcl(dataRafayAksClusterSpecToHclTerraform, true)(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataRafayAksClusterSpecList",
      },
      timeouts: {
        value: dataRafayAksClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataRafayAksClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
