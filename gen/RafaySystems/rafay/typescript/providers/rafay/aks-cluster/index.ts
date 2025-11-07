// https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AksClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * apiversion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#apiversion AksCluster#apiversion}
  */
  readonly apiversion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#id AksCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * kind
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#kind AksCluster#kind}
  */
  readonly kind?: string;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#metadata AksCluster#metadata}
  */
  readonly metadata: AksClusterMetadata[] | cdktf.IResolvable;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#spec AksCluster#spec}
  */
  readonly spec: AksClusterSpec[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#timeouts AksCluster#timeouts}
  */
  readonly timeouts?: AksClusterTimeouts;
}
export interface AksClusterMetadata {
  /**
  * labels for the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#labels AksCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * AKS Cluster name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#name AksCluster#name}
  */
  readonly name: string;
  /**
  * Project for the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#project AksCluster#project}
  */
  readonly project: string;
}

export function aksClusterMetadataToTerraform(struct?: AksClusterMetadata | cdktf.IResolvable): any {
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


export function aksClusterMetadataToHclTerraform(struct?: AksClusterMetadata | cdktf.IResolvable): any {
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

export class AksClusterMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterMetadata | cdktf.IResolvable | undefined) {
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

export class AksClusterMetadataList extends cdktf.ComplexList {
  public internalValue? : AksClusterMetadata[] | cdktf.IResolvable

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
  public get(index: number): AksClusterMetadataOutputReference {
    return new AksClusterMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigMetadata {
  /**
  * AKS cluster name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#name AksCluster#name}
  */
  readonly name: string;
}

export function aksClusterSpecClusterConfigMetadataToTerraform(struct?: AksClusterSpecClusterConfigMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function aksClusterSpecClusterConfigMetadataToHclTerraform(struct?: AksClusterSpecClusterConfigMetadata | cdktf.IResolvable): any {
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

export class AksClusterSpecClusterConfigMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigMetadata | cdktf.IResolvable | undefined) {
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

export class AksClusterSpecClusterConfigMetadataList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigMetadata[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigMetadataOutputReference {
    return new AksClusterSpecClusterConfigMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowNotAllowedDates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#end AksCluster#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#start AksCluster#start}
  */
  readonly start?: string;
}

export function aksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowNotAllowedDatesToTerraform(struct?: AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowNotAllowedDates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function aksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowNotAllowedDatesToHclTerraform(struct?: AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowNotAllowedDates | cdktf.IResolvable): any {
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

export class AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowNotAllowedDatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowNotAllowedDates | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowNotAllowedDates | cdktf.IResolvable | undefined) {
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

export class AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowNotAllowedDatesList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowNotAllowedDates[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowNotAllowedDatesOutputReference {
    return new AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowNotAllowedDatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleAbsoluteMonthly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#day_of_month AksCluster#day_of_month}
  */
  readonly dayOfMonth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#interval_months AksCluster#interval_months}
  */
  readonly intervalMonths?: number;
}

export function aksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleAbsoluteMonthlyToTerraform(struct?: AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleAbsoluteMonthly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_month: cdktf.numberToTerraform(struct!.dayOfMonth),
    interval_months: cdktf.numberToTerraform(struct!.intervalMonths),
  }
}


export function aksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleAbsoluteMonthlyToHclTerraform(struct?: AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleAbsoluteMonthly | cdktf.IResolvable): any {
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

export class AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleAbsoluteMonthlyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleAbsoluteMonthly | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleAbsoluteMonthly | cdktf.IResolvable | undefined) {
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

export class AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleAbsoluteMonthlyList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleAbsoluteMonthly[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleAbsoluteMonthlyOutputReference {
    return new AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleAbsoluteMonthlyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleDaily {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#interval_days AksCluster#interval_days}
  */
  readonly intervalDays?: number;
}

export function aksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleDailyToTerraform(struct?: AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleDaily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval_days: cdktf.numberToTerraform(struct!.intervalDays),
  }
}


export function aksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleDailyToHclTerraform(struct?: AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleDaily | cdktf.IResolvable): any {
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

export class AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleDailyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleDaily | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleDaily | cdktf.IResolvable | undefined) {
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

export class AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleDailyList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleDaily[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleDailyOutputReference {
    return new AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleDailyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleRelativeMonthly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#day_of_week AksCluster#day_of_week}
  */
  readonly dayOfWeek?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#interval_months AksCluster#interval_months}
  */
  readonly intervalMonths?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#week_index AksCluster#week_index}
  */
  readonly weekIndex?: string;
}

export function aksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleRelativeMonthlyToTerraform(struct?: AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleRelativeMonthly | cdktf.IResolvable): any {
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


export function aksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleRelativeMonthlyToHclTerraform(struct?: AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleRelativeMonthly | cdktf.IResolvable): any {
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

export class AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleRelativeMonthlyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleRelativeMonthly | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleRelativeMonthly | cdktf.IResolvable | undefined) {
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

export class AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleRelativeMonthlyList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleRelativeMonthly[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleRelativeMonthlyOutputReference {
    return new AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleRelativeMonthlyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleWeekly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#day_of_week AksCluster#day_of_week}
  */
  readonly dayOfWeek?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#interval_weeks AksCluster#interval_weeks}
  */
  readonly intervalWeeks?: number;
}

export function aksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleWeeklyToTerraform(struct?: AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleWeekly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
    interval_weeks: cdktf.numberToTerraform(struct!.intervalWeeks),
  }
}


export function aksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleWeeklyToHclTerraform(struct?: AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleWeekly | cdktf.IResolvable): any {
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

export class AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleWeeklyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleWeekly | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleWeekly | cdktf.IResolvable | undefined) {
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

export class AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleWeeklyList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleWeekly[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleWeeklyOutputReference {
    return new AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleWeeklyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowSchedule {
  /**
  * absolute_monthly block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#absolute_monthly AksCluster#absolute_monthly}
  */
  readonly absoluteMonthly?: AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleAbsoluteMonthly[] | cdktf.IResolvable;
  /**
  * daily block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#daily AksCluster#daily}
  */
  readonly daily?: AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleDaily[] | cdktf.IResolvable;
  /**
  * relative_monthly block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#relative_monthly AksCluster#relative_monthly}
  */
  readonly relativeMonthly?: AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleRelativeMonthly[] | cdktf.IResolvable;
  /**
  * weekly block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#weekly AksCluster#weekly}
  */
  readonly weekly?: AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleWeekly[] | cdktf.IResolvable;
}

export function aksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleToTerraform(struct?: AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    absolute_monthly: cdktf.listMapper(aksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleAbsoluteMonthlyToTerraform, true)(struct!.absoluteMonthly),
    daily: cdktf.listMapper(aksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleDailyToTerraform, true)(struct!.daily),
    relative_monthly: cdktf.listMapper(aksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleRelativeMonthlyToTerraform, true)(struct!.relativeMonthly),
    weekly: cdktf.listMapper(aksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleWeeklyToTerraform, true)(struct!.weekly),
  }
}


export function aksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleToHclTerraform(struct?: AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    absolute_monthly: {
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleAbsoluteMonthlyToHclTerraform, true)(struct!.absoluteMonthly),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleAbsoluteMonthlyList",
    },
    daily: {
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleDailyToHclTerraform, true)(struct!.daily),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleDailyList",
    },
    relative_monthly: {
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleRelativeMonthlyToHclTerraform, true)(struct!.relativeMonthly),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleRelativeMonthlyList",
    },
    weekly: {
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleWeeklyToHclTerraform, true)(struct!.weekly),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleWeeklyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowSchedule | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowSchedule | cdktf.IResolvable | undefined) {
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
  private _absoluteMonthly = new AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleAbsoluteMonthlyList(this, "absolute_monthly", false);
  public get absoluteMonthly() {
    return this._absoluteMonthly;
  }
  public putAbsoluteMonthly(value: AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleAbsoluteMonthly[] | cdktf.IResolvable) {
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
  private _daily = new AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleDailyList(this, "daily", false);
  public get daily() {
    return this._daily;
  }
  public putDaily(value: AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleDaily[] | cdktf.IResolvable) {
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
  private _relativeMonthly = new AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleRelativeMonthlyList(this, "relative_monthly", false);
  public get relativeMonthly() {
    return this._relativeMonthly;
  }
  public putRelativeMonthly(value: AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleRelativeMonthly[] | cdktf.IResolvable) {
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
  private _weekly = new AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleWeeklyList(this, "weekly", false);
  public get weekly() {
    return this._weekly;
  }
  public putWeekly(value: AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleWeekly[] | cdktf.IResolvable) {
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

export class AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowSchedule[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleOutputReference {
    return new AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#duration_hours AksCluster#duration_hours}
  */
  readonly durationHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#start_date AksCluster#start_date}
  */
  readonly startDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#start_time AksCluster#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#utc_offset AksCluster#utc_offset}
  */
  readonly utcOffset?: string;
  /**
  * not_allowed_dates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#not_allowed_dates AksCluster#not_allowed_dates}
  */
  readonly notAllowedDates?: AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowNotAllowedDates[] | cdktf.IResolvable;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#schedule AksCluster#schedule}
  */
  readonly schedule?: AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowSchedule[] | cdktf.IResolvable;
}

export function aksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowToTerraform(struct?: AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration_hours: cdktf.numberToTerraform(struct!.durationHours),
    start_date: cdktf.stringToTerraform(struct!.startDate),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    utc_offset: cdktf.stringToTerraform(struct!.utcOffset),
    not_allowed_dates: cdktf.listMapper(aksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowNotAllowedDatesToTerraform, true)(struct!.notAllowedDates),
    schedule: cdktf.listMapper(aksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleToTerraform, true)(struct!.schedule),
  }
}


export function aksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowToHclTerraform(struct?: AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindow | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowNotAllowedDatesToHclTerraform, true)(struct!.notAllowedDates),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowNotAllowedDatesList",
    },
    schedule: {
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleToHclTerraform, true)(struct!.schedule),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindow | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindow | cdktf.IResolvable | undefined) {
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
  private _notAllowedDates = new AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowNotAllowedDatesList(this, "not_allowed_dates", false);
  public get notAllowedDates() {
    return this._notAllowedDates;
  }
  public putNotAllowedDates(value: AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowNotAllowedDates[] | cdktf.IResolvable) {
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
  private _schedule = new AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowScheduleList(this, "schedule", false);
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowSchedule[] | cdktf.IResolvable) {
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

export class AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindow[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowOutputReference {
    return new AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesNotAllowedTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#end AksCluster#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#start AksCluster#start}
  */
  readonly start?: string;
}

export function aksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesNotAllowedTimeToTerraform(struct?: AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesNotAllowedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function aksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesNotAllowedTimeToHclTerraform(struct?: AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesNotAllowedTime | cdktf.IResolvable): any {
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

export class AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesNotAllowedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesNotAllowedTime | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesNotAllowedTime | cdktf.IResolvable | undefined) {
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

export class AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesNotAllowedTimeList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesNotAllowedTime[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesNotAllowedTimeOutputReference {
    return new AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesNotAllowedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesTimeInWeek {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#day AksCluster#day}
  */
  readonly day?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#hour_slots AksCluster#hour_slots}
  */
  readonly hourSlots?: number[];
}

export function aksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesTimeInWeekToTerraform(struct?: AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesTimeInWeek | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.stringToTerraform(struct!.day),
    hour_slots: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.hourSlots),
  }
}


export function aksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesTimeInWeekToHclTerraform(struct?: AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesTimeInWeek | cdktf.IResolvable): any {
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

export class AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesTimeInWeekOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesTimeInWeek | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesTimeInWeek | cdktf.IResolvable | undefined) {
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

export class AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesTimeInWeekList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesTimeInWeek[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesTimeInWeekOutputReference {
    return new AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesTimeInWeekOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecMaintenanceConfigurationsProperties {
  /**
  * maintenance_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#maintenance_window AksCluster#maintenance_window}
  */
  readonly maintenanceWindow?: AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindow[] | cdktf.IResolvable;
  /**
  * not_allowed_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#not_allowed_time AksCluster#not_allowed_time}
  */
  readonly notAllowedTime?: AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesNotAllowedTime[] | cdktf.IResolvable;
  /**
  * time_in_week block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#time_in_week AksCluster#time_in_week}
  */
  readonly timeInWeek?: AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesTimeInWeek[] | cdktf.IResolvable;
}

export function aksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesToTerraform(struct?: AksClusterSpecClusterConfigSpecMaintenanceConfigurationsProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maintenance_window: cdktf.listMapper(aksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowToTerraform, true)(struct!.maintenanceWindow),
    not_allowed_time: cdktf.listMapper(aksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesNotAllowedTimeToTerraform, true)(struct!.notAllowedTime),
    time_in_week: cdktf.listMapper(aksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesTimeInWeekToTerraform, true)(struct!.timeInWeek),
  }
}


export function aksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesToHclTerraform(struct?: AksClusterSpecClusterConfigSpecMaintenanceConfigurationsProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maintenance_window: {
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowToHclTerraform, true)(struct!.maintenanceWindow),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowList",
    },
    not_allowed_time: {
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesNotAllowedTimeToHclTerraform, true)(struct!.notAllowedTime),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesNotAllowedTimeList",
    },
    time_in_week: {
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesTimeInWeekToHclTerraform, true)(struct!.timeInWeek),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesTimeInWeekList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecMaintenanceConfigurationsProperties | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecMaintenanceConfigurationsProperties | cdktf.IResolvable | undefined) {
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
  private _maintenanceWindow = new AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindowList(this, "maintenance_window", false);
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesMaintenanceWindow[] | cdktf.IResolvable) {
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
  private _notAllowedTime = new AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesNotAllowedTimeList(this, "not_allowed_time", false);
  public get notAllowedTime() {
    return this._notAllowedTime;
  }
  public putNotAllowedTime(value: AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesNotAllowedTime[] | cdktf.IResolvable) {
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
  private _timeInWeek = new AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesTimeInWeekList(this, "time_in_week", false);
  public get timeInWeek() {
    return this._timeInWeek;
  }
  public putTimeInWeek(value: AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesTimeInWeek[] | cdktf.IResolvable) {
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

export class AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecMaintenanceConfigurationsProperties[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesOutputReference {
    return new AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecMaintenanceConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#api_version AksCluster#api_version}
  */
  readonly apiVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#name AksCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#type AksCluster#type}
  */
  readonly type?: string;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#properties AksCluster#properties}
  */
  readonly properties: AksClusterSpecClusterConfigSpecMaintenanceConfigurationsProperties[] | cdktf.IResolvable;
}

export function aksClusterSpecClusterConfigSpecMaintenanceConfigurationsToTerraform(struct?: AksClusterSpecClusterConfigSpecMaintenanceConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    properties: cdktf.listMapper(aksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesToTerraform, true)(struct!.properties),
  }
}


export function aksClusterSpecClusterConfigSpecMaintenanceConfigurationsToHclTerraform(struct?: AksClusterSpecClusterConfigSpecMaintenanceConfigurations | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesToHclTerraform, true)(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterSpecClusterConfigSpecMaintenanceConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecMaintenanceConfigurations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecMaintenanceConfigurations | cdktf.IResolvable | undefined) {
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
  private _properties = new AksClusterSpecClusterConfigSpecMaintenanceConfigurationsPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
  public putProperties(value: AksClusterSpecClusterConfigSpecMaintenanceConfigurationsProperties[] | cdktf.IResolvable) {
    this._properties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}

export class AksClusterSpecClusterConfigSpecMaintenanceConfigurationsList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecMaintenanceConfigurations[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecMaintenanceConfigurationsOutputReference {
    return new AksClusterSpecClusterConfigSpecMaintenanceConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileRegistries {
  /**
  * The name of the Azure Container Registry resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#acr_name AksCluster#acr_name}
  */
  readonly acrName: string;
  /**
  * The location of the Azure Container Registry resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#resource_group_name AksCluster#resource_group_name}
  */
  readonly resourceGroupName?: string;
}

export function aksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileRegistriesToTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileRegistries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acr_name: cdktf.stringToTerraform(struct!.acrName),
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
  }
}


export function aksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileRegistriesToHclTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileRegistries | cdktf.IResolvable): any {
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

export class AksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileRegistriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileRegistries | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileRegistries | cdktf.IResolvable | undefined) {
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

export class AksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileRegistriesList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileRegistries[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileRegistriesOutputReference {
    return new AksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileRegistriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfile {
  /**
  * The name of the Azure Container Registry resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#acr_name AksCluster#acr_name}
  */
  readonly acrName?: string;
  /**
  * If not specified, defaults to the resource group of the managed cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#resource_group_name AksCluster#resource_group_name}
  */
  readonly resourceGroupName?: string;
  /**
  * registries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#registries AksCluster#registries}
  */
  readonly registries?: AksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileRegistries[] | cdktf.IResolvable;
}

export function aksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileToTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acr_name: cdktf.stringToTerraform(struct!.acrName),
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
    registries: cdktf.listMapper(aksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileRegistriesToTerraform, true)(struct!.registries),
  }
}


export function aksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileToHclTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfile | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileRegistriesToHclTerraform, true)(struct!.registries),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileRegistriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfile | cdktf.IResolvable | undefined) {
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
  private _registries = new AksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileRegistriesList(this, "registries", false);
  public get registries() {
    return this._registries;
  }
  public putRegistries(value: AksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileRegistries[] | cdktf.IResolvable) {
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

export class AksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfile[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileOutputReference {
    return new AksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadata {
  /**
  * If not specified, defaults to the resource group of the managed cluster. Valid only if the Log analytics workspace is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#oms_workspace_location AksCluster#oms_workspace_location}
  */
  readonly omsWorkspaceLocation?: string;
  /**
  * acr_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#acr_profile AksCluster#acr_profile}
  */
  readonly acrProfile?: AksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfile[] | cdktf.IResolvable;
}

export function aksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataToTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oms_workspace_location: cdktf.stringToTerraform(struct!.omsWorkspaceLocation),
    acr_profile: cdktf.listMapper(aksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileToTerraform, true)(struct!.acrProfile),
  }
}


export function aksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataToHclTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadata | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileToHclTerraform, true)(struct!.acrProfile),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadata | cdktf.IResolvable | undefined) {
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
  private _acrProfile = new AksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfileList(this, "acr_profile", false);
  public get acrProfile() {
    return this._acrProfile;
  }
  public putAcrProfile(value: AksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataAcrProfile[] | cdktf.IResolvable) {
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

export class AksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadata[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataOutputReference {
    return new AksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecManagedClusterExtendedLocation {
  /**
  * The AKS managed cluster extended location name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#name AksCluster#name}
  */
  readonly name?: string;
  /**
  * The AKS managed cluster extended location type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#type AksCluster#type}
  */
  readonly type?: string;
}

export function aksClusterSpecClusterConfigSpecManagedClusterExtendedLocationToTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterExtendedLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function aksClusterSpecClusterConfigSpecManagedClusterExtendedLocationToHclTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterExtendedLocation | cdktf.IResolvable): any {
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

export class AksClusterSpecClusterConfigSpecManagedClusterExtendedLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecManagedClusterExtendedLocation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecManagedClusterExtendedLocation | cdktf.IResolvable | undefined) {
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

export class AksClusterSpecClusterConfigSpecManagedClusterExtendedLocationList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecManagedClusterExtendedLocation[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecManagedClusterExtendedLocationOutputReference {
    return new AksClusterSpecClusterConfigSpecManagedClusterExtendedLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecManagedClusterIdentity {
  /**
  * Identity type for the AKS cluster. For more information see use managed identities in AKS. Valid values are SystemAssigned, UserAssigned, None.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#type AksCluster#type}
  */
  readonly type?: string;
  /**
  * Arm Resource Ids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#user_assigned_identities AksCluster#user_assigned_identities}
  */
  readonly userAssignedIdentities?: { [key: string]: string };
}

export function aksClusterSpecClusterConfigSpecManagedClusterIdentityToTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    user_assigned_identities: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.userAssignedIdentities),
  }
}


export function aksClusterSpecClusterConfigSpecManagedClusterIdentityToHclTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterIdentity | cdktf.IResolvable): any {
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

export class AksClusterSpecClusterConfigSpecManagedClusterIdentityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecManagedClusterIdentity | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecManagedClusterIdentity | cdktf.IResolvable | undefined) {
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

export class AksClusterSpecClusterConfigSpecManagedClusterIdentityList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecManagedClusterIdentity[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecManagedClusterIdentityOutputReference {
    return new AksClusterSpecClusterConfigSpecManagedClusterIdentityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecManagedClusterPropertiesAadProfile {
  /**
  * The AKS managed cluster aad profile admin group object ids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#admin_group_object_ids AksCluster#admin_group_object_ids}
  */
  readonly adminGroupObjectIds?: string[];
  /**
  * The AKS managed cluster aad profile client app id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#client_app_id AksCluster#client_app_id}
  */
  readonly clientAppId?: string;
  /**
  * Whether or not to enable azure rbac for kubernetes authorization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#enable_azure_rbac AksCluster#enable_azure_rbac}
  */
  readonly enableAzureRbac?: boolean | cdktf.IResolvable;
  /**
  * Whether or not to enable managed aad
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#managed AksCluster#managed}
  */
  readonly managed?: boolean | cdktf.IResolvable;
  /**
  * The server AAD application ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#server_app_id AksCluster#server_app_id}
  */
  readonly serverAppId?: string;
  /**
  * The AKS managed cluster aad profile server app secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#server_app_secret AksCluster#server_app_secret}
  */
  readonly serverAppSecret?: string;
  /**
  * The AKS managed cluster tenant id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#tenant_id AksCluster#tenant_id}
  */
  readonly tenantId?: string;
}

export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesAadProfileToTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAadProfile | cdktf.IResolvable): any {
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


export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesAadProfileToHclTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAadProfile | cdktf.IResolvable): any {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesAadProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecManagedClusterPropertiesAadProfile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAadProfile | cdktf.IResolvable | undefined) {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesAadProfileList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecManagedClusterPropertiesAadProfile[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecManagedClusterPropertiesAadProfileOutputReference {
    return new AksClusterSpecClusterConfigSpecManagedClusterPropertiesAadProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderConfig {
  /**
  * Whether to enable Secret Rotation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#enable_secret_rotation AksCluster#enable_secret_rotation}
  */
  readonly enableSecretRotation: string;
  /**
  * Interval to poll for secret rotation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#rotation_poll_interval AksCluster#rotation_poll_interval}
  */
  readonly rotationPollInterval: string;
}

export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderConfigToTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_secret_rotation: cdktf.stringToTerraform(struct!.enableSecretRotation),
    rotation_poll_interval: cdktf.stringToTerraform(struct!.rotationPollInterval),
  }
}


export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderConfigToHclTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderConfig | cdktf.IResolvable): any {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderConfig | cdktf.IResolvable | undefined) {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderConfigList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderConfig[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderConfigOutputReference {
    return new AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProvider {
  /**
  * Whether to enable Azure Key Vault Secrets Provider in Addon Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#enabled AksCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#config AksCluster#config}
  */
  readonly config?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderConfig[] | cdktf.IResolvable;
}

export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderToTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    config: cdktf.listMapper(aksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderConfigToTerraform, true)(struct!.config),
  }
}


export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderToHclTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProvider | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderConfigToHclTerraform, true)(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProvider | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProvider | cdktf.IResolvable | undefined) {
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
  private _config = new AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderConfigList(this, "config", false);
  public get config() {
    return this._config;
  }
  public putConfig(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderConfig[] | cdktf.IResolvable) {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProvider[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderOutputReference {
    return new AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzurePolicy {
  /**
  * Config for HTTP Application Routing or Azure Policy in Addon Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#config AksCluster#config}
  */
  readonly config?: string;
  /**
  * Whether to enable HTTP Application Routing or Azure Policy in Addon Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#enabled AksCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzurePolicyToTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzurePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.stringToTerraform(struct!.config),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzurePolicyToHclTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzurePolicy | cdktf.IResolvable): any {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzurePolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzurePolicy | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzurePolicy | cdktf.IResolvable | undefined) {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzurePolicyList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzurePolicy[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzurePolicyOutputReference {
    return new AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzurePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesHttpApplicationRouting {
  /**
  * Config for HTTP Application Routing or Azure Policy in Addon Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#config AksCluster#config}
  */
  readonly config?: string;
  /**
  * Whether to enable HTTP Application Routing or Azure Policy in Addon Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#enabled AksCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesHttpApplicationRoutingToTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesHttpApplicationRouting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.stringToTerraform(struct!.config),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesHttpApplicationRoutingToHclTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesHttpApplicationRouting | cdktf.IResolvable): any {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesHttpApplicationRoutingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesHttpApplicationRouting | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesHttpApplicationRouting | cdktf.IResolvable | undefined) {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesHttpApplicationRoutingList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesHttpApplicationRouting[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesHttpApplicationRoutingOutputReference {
    return new AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesHttpApplicationRoutingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayConfig {
  /**
  * Resource Id of an existing Application Gateway to use with AGIC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#application_gateway_id AksCluster#application_gateway_id}
  */
  readonly applicationGatewayId?: string;
  /**
  * Name of the application gateway to create/use in the node resource group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#application_gateway_name AksCluster#application_gateway_name}
  */
  readonly applicationGatewayName?: string;
  /**
  * Subnet CIDR to use for a new subnet created to deploy the Application Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#subnet_cidr AksCluster#subnet_cidr}
  */
  readonly subnetCidr?: string;
  /**
  * Resource Id of an existing Subnet used to deploy the Application Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#subnet_id AksCluster#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Specify the namespace, which AGIC should watch. This could be a single string value, or a comma-separated list of namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#watch_namespace AksCluster#watch_namespace}
  */
  readonly watchNamespace?: string;
}

export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayConfigToTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayConfig | cdktf.IResolvable): any {
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


export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayConfigToHclTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayConfig | cdktf.IResolvable): any {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayConfig | cdktf.IResolvable | undefined) {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayConfigList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayConfig[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayConfigOutputReference {
    return new AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGateway {
  /**
  * Whether to enable Ingress Application Gateway in Addon Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#enabled AksCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#config AksCluster#config}
  */
  readonly config?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayConfig[] | cdktf.IResolvable;
}

export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayToTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    config: cdktf.listMapper(aksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayConfigToTerraform, true)(struct!.config),
  }
}


export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayToHclTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGateway | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayConfigToHclTerraform, true)(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGateway | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGateway | cdktf.IResolvable | undefined) {
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
  private _config = new AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayConfigList(this, "config", false);
  public get config() {
    return this._config;
  }
  public putConfig(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayConfig[] | cdktf.IResolvable) {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGateway[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayOutputReference {
    return new AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentConfig {
  /**
  * ID of the log analytics workspace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#log_analytics_workspace_resource_id AksCluster#log_analytics_workspace_resource_id}
  */
  readonly logAnalyticsWorkspaceResourceId: string;
}

export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentConfigToTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_analytics_workspace_resource_id: cdktf.stringToTerraform(struct!.logAnalyticsWorkspaceResourceId),
  }
}


export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentConfigToHclTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentConfig | cdktf.IResolvable): any {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentConfig | cdktf.IResolvable | undefined) {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentConfigList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentConfig[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentConfigOutputReference {
    return new AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgent {
  /**
  * Whether to enable OMS Agent in Addon Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#enabled AksCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#config AksCluster#config}
  */
  readonly config?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentConfig[] | cdktf.IResolvable;
}

export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentToTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    config: cdktf.listMapper(aksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentConfigToTerraform, true)(struct!.config),
  }
}


export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentToHclTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgent | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentConfigToHclTerraform, true)(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgent | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgent | cdktf.IResolvable | undefined) {
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
  private _config = new AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentConfigList(this, "config", false);
  public get config() {
    return this._config;
  }
  public putConfig(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentConfig[] | cdktf.IResolvable) {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgent[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentOutputReference {
    return new AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfiles {
  /**
  * azure_keyvault_secrets_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#azure_keyvault_secrets_provider AksCluster#azure_keyvault_secrets_provider}
  */
  readonly azureKeyvaultSecretsProvider?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProvider[] | cdktf.IResolvable;
  /**
  * azure_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#azure_policy AksCluster#azure_policy}
  */
  readonly azurePolicy?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzurePolicy[] | cdktf.IResolvable;
  /**
  * http_application_routing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#http_application_routing AksCluster#http_application_routing}
  */
  readonly httpApplicationRouting?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesHttpApplicationRouting[] | cdktf.IResolvable;
  /**
  * ingress_application_gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#ingress_application_gateway AksCluster#ingress_application_gateway}
  */
  readonly ingressApplicationGateway?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGateway[] | cdktf.IResolvable;
  /**
  * oms_agent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#oms_agent AksCluster#oms_agent}
  */
  readonly omsAgent?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgent[] | cdktf.IResolvable;
}

export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesToTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_keyvault_secrets_provider: cdktf.listMapper(aksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderToTerraform, true)(struct!.azureKeyvaultSecretsProvider),
    azure_policy: cdktf.listMapper(aksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzurePolicyToTerraform, true)(struct!.azurePolicy),
    http_application_routing: cdktf.listMapper(aksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesHttpApplicationRoutingToTerraform, true)(struct!.httpApplicationRouting),
    ingress_application_gateway: cdktf.listMapper(aksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayToTerraform, true)(struct!.ingressApplicationGateway),
    oms_agent: cdktf.listMapper(aksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentToTerraform, true)(struct!.omsAgent),
  }
}


export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesToHclTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_keyvault_secrets_provider: {
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderToHclTerraform, true)(struct!.azureKeyvaultSecretsProvider),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderList",
    },
    azure_policy: {
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzurePolicyToHclTerraform, true)(struct!.azurePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzurePolicyList",
    },
    http_application_routing: {
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesHttpApplicationRoutingToHclTerraform, true)(struct!.httpApplicationRouting),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesHttpApplicationRoutingList",
    },
    ingress_application_gateway: {
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayToHclTerraform, true)(struct!.ingressApplicationGateway),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayList",
    },
    oms_agent: {
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentToHclTerraform, true)(struct!.omsAgent),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfiles | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfiles | cdktf.IResolvable | undefined) {
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
  private _azureKeyvaultSecretsProvider = new AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProviderList(this, "azure_keyvault_secrets_provider", false);
  public get azureKeyvaultSecretsProvider() {
    return this._azureKeyvaultSecretsProvider;
  }
  public putAzureKeyvaultSecretsProvider(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzureKeyvaultSecretsProvider[] | cdktf.IResolvable) {
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
  private _azurePolicy = new AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzurePolicyList(this, "azure_policy", false);
  public get azurePolicy() {
    return this._azurePolicy;
  }
  public putAzurePolicy(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesAzurePolicy[] | cdktf.IResolvable) {
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
  private _httpApplicationRouting = new AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesHttpApplicationRoutingList(this, "http_application_routing", false);
  public get httpApplicationRouting() {
    return this._httpApplicationRouting;
  }
  public putHttpApplicationRouting(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesHttpApplicationRouting[] | cdktf.IResolvable) {
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
  private _ingressApplicationGateway = new AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGatewayList(this, "ingress_application_gateway", false);
  public get ingressApplicationGateway() {
    return this._ingressApplicationGateway;
  }
  public putIngressApplicationGateway(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesIngressApplicationGateway[] | cdktf.IResolvable) {
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
  private _omsAgent = new AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgentList(this, "oms_agent", false);
  public get omsAgent() {
    return this._omsAgent;
  }
  public putOmsAgent(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOmsAgent[] | cdktf.IResolvable) {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfiles[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOutputReference {
    return new AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecManagedClusterPropertiesApiServerAccessProfile {
  /**
  * The AKS managed cluster properties server access profile server access profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#authorized_ipr_ranges AksCluster#authorized_ipr_ranges}
  */
  readonly authorizedIprRanges?: string[];
  /**
  * Enable private cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#enable_private_cluster AksCluster#enable_private_cluster}
  */
  readonly enablePrivateCluster?: boolean | cdktf.IResolvable;
  /**
  * Whether or not to create additional public fqdn for private cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#enable_private_cluster_public_fqdn AksCluster#enable_private_cluster_public_fqdn}
  */
  readonly enablePrivateClusterPublicFqdn?: boolean | cdktf.IResolvable;
  /**
  * The AKS managed cluster properties private dns zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#private_dns_zone AksCluster#private_dns_zone}
  */
  readonly privateDnsZone?: string;
}

export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesApiServerAccessProfileToTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesApiServerAccessProfile | cdktf.IResolvable): any {
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


export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesApiServerAccessProfileToHclTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesApiServerAccessProfile | cdktf.IResolvable): any {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesApiServerAccessProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecManagedClusterPropertiesApiServerAccessProfile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesApiServerAccessProfile | cdktf.IResolvable | undefined) {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesApiServerAccessProfileList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecManagedClusterPropertiesApiServerAccessProfile[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecManagedClusterPropertiesApiServerAccessProfileOutputReference {
    return new AksClusterSpecClusterConfigSpecManagedClusterPropertiesApiServerAccessProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoScalerProfile {
  /**
  * Valid values are true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#balance_similar_node_groups AksCluster#balance_similar_node_groups}
  */
  readonly balanceSimilarNodeGroups?: string;
  /**
  * Valid values are least-waste, most-pods, priority, random
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#expander AksCluster#expander}
  */
  readonly expander?: string;
  /**
  * Max empty bulk delete
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#max_empty_bulk_delete AksCluster#max_empty_bulk_delete}
  */
  readonly maxEmptyBulkDelete?: string;
  /**
  * Max graceful termination sec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#max_graceful_termination_sec AksCluster#max_graceful_termination_sec}
  */
  readonly maxGracefulTerminationSec?: string;
  /**
  * Values must be an integer followed by an m. No unit of time other than minutes (m) is supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#max_node_provision_time AksCluster#max_node_provision_time}
  */
  readonly maxNodeProvisionTime?: string;
  /**
  * The maximum is 100 and the minimum is 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#max_total_unready_percentage AksCluster#max_total_unready_percentage}
  */
  readonly maxTotalUnreadyPercentage?: string;
  /**
  * For scenarios like burst/batch scale where you don't want CA to act before the kubernetes scheduler could schedule all the pods, you can tell CA to ignore unscheduled pods before they're a certain age.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#new_pod_scale_up_delay AksCluster#new_pod_scale_up_delay}
  */
  readonly newPodScaleUpDelay?: string;
  /**
  * This must be an integer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#ok_total_unready_count AksCluster#ok_total_unready_count}
  */
  readonly okTotalUnreadyCount?: string;
  /**
  * Values must be an integer followed by an m. No unit of time other than minutes (m) is supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#scale_down_delay_after_add AksCluster#scale_down_delay_after_add}
  */
  readonly scaleDownDelayAfterAdd?: string;
  /**
  * The default is the scan-interval. Values must be an integer followed by an m
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#scale_down_delay_after_delete AksCluster#scale_down_delay_after_delete}
  */
  readonly scaleDownDelayAfterDelete?: string;
  /**
  *  Values must be an integer followed by an m
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#scale_down_delay_after_failure AksCluster#scale_down_delay_after_failure}
  */
  readonly scaleDownDelayAfterFailure?: string;
  /**
  * Values must be an integer followed by an m
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#scale_down_unneeded_time AksCluster#scale_down_unneeded_time}
  */
  readonly scaleDownUnneededTime?: string;
  /**
  * Values must be an integer followed by an m
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#scale_down_unready_time AksCluster#scale_down_unready_time}
  */
  readonly scaleDownUnreadyTime?: string;
  /**
  * The scale down utilization threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#scale_down_utilization_threshold AksCluster#scale_down_utilization_threshold}
  */
  readonly scaleDownUtilizationThreshold?: string;
  /**
  * The default is 10. Values must be an integer number of seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#scan_interval AksCluster#scan_interval}
  */
  readonly scanInterval?: string;
  /**
  * Skip nodes with local storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#skip_nodes_with_local_storage AksCluster#skip_nodes_with_local_storage}
  */
  readonly skipNodesWithLocalStorage?: string;
  /**
  * Skip nodes with system pods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#skip_nodes_with_system_pods AksCluster#skip_nodes_with_system_pods}
  */
  readonly skipNodesWithSystemPods?: string;
}

export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoScalerProfileToTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoScalerProfile | cdktf.IResolvable): any {
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


export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoScalerProfileToHclTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoScalerProfile | cdktf.IResolvable): any {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoScalerProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoScalerProfile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoScalerProfile | cdktf.IResolvable | undefined) {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoScalerProfileList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoScalerProfile[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoScalerProfileOutputReference {
    return new AksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoScalerProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoUpgradeProfile {
  /**
  * Valid values are None, Unmanaged, NodeImage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#node_os_upgrade_channel AksCluster#node_os_upgrade_channel}
  */
  readonly nodeOsUpgradeChannel?: string;
  /**
  * Valid values are rapid, stable, patch, node-image, none
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#upgrade_channel AksCluster#upgrade_channel}
  */
  readonly upgradeChannel?: string;
}

export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoUpgradeProfileToTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoUpgradeProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_os_upgrade_channel: cdktf.stringToTerraform(struct!.nodeOsUpgradeChannel),
    upgrade_channel: cdktf.stringToTerraform(struct!.upgradeChannel),
  }
}


export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoUpgradeProfileToHclTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoUpgradeProfile | cdktf.IResolvable): any {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoUpgradeProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoUpgradeProfile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoUpgradeProfile | cdktf.IResolvable | undefined) {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoUpgradeProfileList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoUpgradeProfile[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoUpgradeProfileOutputReference {
    return new AksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoUpgradeProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecManagedClusterPropertiesHttpProxyConfig {
  /**
  * The HTTP proxy server endpoint to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#http_proxy AksCluster#http_proxy}
  */
  readonly httpProxy?: string;
  /**
  * The HTTPs proxy server endpoint to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#https_proxy AksCluster#https_proxy}
  */
  readonly httpsProxy?: string;
  /**
  * The endpoints that should not go through proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#no_proxy AksCluster#no_proxy}
  */
  readonly noProxy?: string[];
  /**
  * Alternative CA cert to use for connecting to proxy servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#trusted_ca AksCluster#trusted_ca}
  */
  readonly trustedCa?: string;
}

export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesHttpProxyConfigToTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesHttpProxyConfig | cdktf.IResolvable): any {
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


export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesHttpProxyConfigToHclTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesHttpProxyConfig | cdktf.IResolvable): any {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesHttpProxyConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecManagedClusterPropertiesHttpProxyConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesHttpProxyConfig | cdktf.IResolvable | undefined) {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesHttpProxyConfigList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecManagedClusterPropertiesHttpProxyConfig[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecManagedClusterPropertiesHttpProxyConfigOutputReference {
    return new AksClusterSpecClusterConfigSpecManagedClusterPropertiesHttpProxyConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileKubeletIdentity {
  /**
  * value must be ARM resource ID in the form: /subscriptions/<subscription-id>/resourceGroups/<resource-group>/providers/Microsoft.ManagedIdentity/userAssignedIdentities/<identity-name>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#resource_id AksCluster#resource_id}
  */
  readonly resourceId: string;
}

export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileKubeletIdentityToTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileKubeletIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
  }
}


export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileKubeletIdentityToHclTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileKubeletIdentity | cdktf.IResolvable): any {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileKubeletIdentityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileKubeletIdentity | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileKubeletIdentity | cdktf.IResolvable | undefined) {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileKubeletIdentityList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileKubeletIdentity[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileKubeletIdentityOutputReference {
    return new AksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileKubeletIdentityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfile {
  /**
  * kubelet_identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#kubelet_identity AksCluster#kubelet_identity}
  */
  readonly kubeletIdentity: AksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileKubeletIdentity[] | cdktf.IResolvable;
}

export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileToTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kubelet_identity: cdktf.listMapper(aksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileKubeletIdentityToTerraform, true)(struct!.kubeletIdentity),
  }
}


export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileToHclTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kubelet_identity: {
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileKubeletIdentityToHclTerraform, true)(struct!.kubeletIdentity),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileKubeletIdentityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfile | cdktf.IResolvable | undefined) {
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
  private _kubeletIdentity = new AksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileKubeletIdentityList(this, "kubelet_identity", false);
  public get kubeletIdentity() {
    return this._kubeletIdentity;
  }
  public putKubeletIdentity(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileKubeletIdentity[] | cdktf.IResolvable) {
    this._kubeletIdentity.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletIdentityInput() {
    return this._kubeletIdentity.internalValue;
  }
}

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfile[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileOutputReference {
    return new AksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSshPublicKeys {
  /**
  * Certificate public key used to authenticate with VMs through SSH. The certificate must be in PEM format with or without headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#key_data AksCluster#key_data}
  */
  readonly keyData?: string;
}

export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSshPublicKeysToTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSshPublicKeysOutputReference | AksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSshPublicKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_data: cdktf.stringToTerraform(struct!.keyData),
  }
}


export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSshPublicKeysToHclTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSshPublicKeysOutputReference | AksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSshPublicKeys): any {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSshPublicKeysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSshPublicKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyData !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyData = this._keyData;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSshPublicKeys | undefined) {
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
export interface AksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSsh {
  /**
  * public_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#public_keys AksCluster#public_keys}
  */
  readonly publicKeys: AksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSshPublicKeys;
}

export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSshToTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSsh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_keys: aksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSshPublicKeysToTerraform(struct!.publicKeys),
  }
}


export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSshToHclTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSsh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    public_keys: {
      value: aksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSshPublicKeysToHclTerraform(struct!.publicKeys),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSshPublicKeysList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSshOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSsh | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSsh | cdktf.IResolvable | undefined) {
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
  private _publicKeys = new AksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSshPublicKeysOutputReference(this, "public_keys");
  public get publicKeys() {
    return this._publicKeys;
  }
  public putPublicKeys(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSshPublicKeys) {
    this._publicKeys.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeysInput() {
    return this._publicKeys.internalValue;
  }
}

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSshList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSsh[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSshOutputReference {
    return new AksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSshOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfile {
  /**
  * The administrator username to use for Linux VMs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#admin_username AksCluster#admin_username}
  */
  readonly adminUsername: string;
  /**
  * The endpoints that should not go through proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#no_proxy AksCluster#no_proxy}
  */
  readonly noProxy?: string[];
  /**
  * Alternative CA cert to use for connecting to proxy servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#trusted_ca AksCluster#trusted_ca}
  */
  readonly trustedCa?: string;
  /**
  * ssh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#ssh AksCluster#ssh}
  */
  readonly ssh: AksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSsh[] | cdktf.IResolvable;
}

export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileToTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_username: cdktf.stringToTerraform(struct!.adminUsername),
    no_proxy: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.noProxy),
    trusted_ca: cdktf.stringToTerraform(struct!.trustedCa),
    ssh: cdktf.listMapper(aksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSshToTerraform, true)(struct!.ssh),
  }
}


export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileToHclTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfile | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSshToHclTerraform, true)(struct!.ssh),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSshList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfile | cdktf.IResolvable | undefined) {
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
  private _ssh = new AksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSshList(this, "ssh", false);
  public get ssh() {
    return this._ssh;
  }
  public putSsh(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileSsh[] | cdktf.IResolvable) {
    this._ssh.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshInput() {
    return this._ssh.internalValue;
  }
}

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfile[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileOutputReference {
    return new AksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileEffectiveOutboundIps {
  /**
  * The fully qualified Azure resource id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#id AksCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileEffectiveOutboundIpsToTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileEffectiveOutboundIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileEffectiveOutboundIpsToHclTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileEffectiveOutboundIps | cdktf.IResolvable): any {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileEffectiveOutboundIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileEffectiveOutboundIps | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileEffectiveOutboundIps | cdktf.IResolvable | undefined) {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileEffectiveOutboundIpsList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileEffectiveOutboundIps[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileEffectiveOutboundIpsOutputReference {
    return new AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileEffectiveOutboundIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileManagedOutboundIps {
  /**
  * The desired number of outbound IPs created/managed by Azure for the cluster load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#count AksCluster#count}
  */
  readonly count?: number;
}

export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileManagedOutboundIpsToTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileManagedOutboundIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
  }
}


export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileManagedOutboundIpsToHclTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileManagedOutboundIps | cdktf.IResolvable): any {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileManagedOutboundIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileManagedOutboundIps | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileManagedOutboundIps | cdktf.IResolvable | undefined) {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileManagedOutboundIpsList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileManagedOutboundIps[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileManagedOutboundIpsOutputReference {
    return new AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileManagedOutboundIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesPublicIpPrefixes {
  /**
  * The fully qualified Azure resource id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#id AksCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesPublicIpPrefixesToTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesPublicIpPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesPublicIpPrefixesToHclTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesPublicIpPrefixes | cdktf.IResolvable): any {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesPublicIpPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesPublicIpPrefixes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesPublicIpPrefixes | cdktf.IResolvable | undefined) {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesPublicIpPrefixesList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesPublicIpPrefixes[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesPublicIpPrefixesOutputReference {
    return new AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesPublicIpPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixes {
  /**
  * public_ip_prefixes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#public_ip_prefixes AksCluster#public_ip_prefixes}
  */
  readonly publicIpPrefixes?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesPublicIpPrefixes[] | cdktf.IResolvable;
}

export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesToTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_ip_prefixes: cdktf.listMapper(aksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesPublicIpPrefixesToTerraform, true)(struct!.publicIpPrefixes),
  }
}


export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesToHclTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    public_ip_prefixes: {
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesPublicIpPrefixesToHclTerraform, true)(struct!.publicIpPrefixes),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesPublicIpPrefixesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixes | cdktf.IResolvable | undefined) {
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
  private _publicIpPrefixes = new AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesPublicIpPrefixesList(this, "public_ip_prefixes", false);
  public get publicIpPrefixes() {
    return this._publicIpPrefixes;
  }
  public putPublicIpPrefixes(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesPublicIpPrefixes[] | cdktf.IResolvable) {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixes[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesOutputReference {
    return new AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsPublicIps {
  /**
  *  	The fully qualified Azure resource id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#id AksCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsPublicIpsToTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsPublicIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsPublicIpsToHclTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsPublicIps | cdktf.IResolvable): any {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsPublicIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsPublicIps | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsPublicIps | cdktf.IResolvable | undefined) {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsPublicIpsList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsPublicIps[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsPublicIpsOutputReference {
    return new AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsPublicIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIps {
  /**
  * public_ips block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#public_ips AksCluster#public_ips}
  */
  readonly publicIps?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsPublicIps[] | cdktf.IResolvable;
}

export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsToTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_ips: cdktf.listMapper(aksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsPublicIpsToTerraform, true)(struct!.publicIps),
  }
}


export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsToHclTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    public_ips: {
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsPublicIpsToHclTerraform, true)(struct!.publicIps),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsPublicIpsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIps | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIps | cdktf.IResolvable | undefined) {
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
  private _publicIps = new AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsPublicIpsList(this, "public_ips", false);
  public get publicIps() {
    return this._publicIps;
  }
  public putPublicIps(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsPublicIps[] | cdktf.IResolvable) {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIps[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsOutputReference {
    return new AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfile {
  /**
  * The desired number of allocated SNAT ports per VM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#allocated_outbound_ports AksCluster#allocated_outbound_ports}
  */
  readonly allocatedOutboundPorts?: number;
  /**
  * Desired outbound flow idle timeout in minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#idle_timeout_in_minutes AksCluster#idle_timeout_in_minutes}
  */
  readonly idleTimeoutInMinutes?: number;
  /**
  * effective_outbound_ips block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#effective_outbound_ips AksCluster#effective_outbound_ips}
  */
  readonly effectiveOutboundIps?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileEffectiveOutboundIps[] | cdktf.IResolvable;
  /**
  * managed_outbound_ips block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#managed_outbound_ips AksCluster#managed_outbound_ips}
  */
  readonly managedOutboundIps?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileManagedOutboundIps[] | cdktf.IResolvable;
  /**
  * outbound_ip_prefixes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#outbound_ip_prefixes AksCluster#outbound_ip_prefixes}
  */
  readonly outboundIpPrefixes?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixes[] | cdktf.IResolvable;
  /**
  * outbound_ips block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#outbound_ips AksCluster#outbound_ips}
  */
  readonly outboundIps?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIps[] | cdktf.IResolvable;
}

export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileToTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocated_outbound_ports: cdktf.numberToTerraform(struct!.allocatedOutboundPorts),
    idle_timeout_in_minutes: cdktf.numberToTerraform(struct!.idleTimeoutInMinutes),
    effective_outbound_ips: cdktf.listMapper(aksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileEffectiveOutboundIpsToTerraform, true)(struct!.effectiveOutboundIps),
    managed_outbound_ips: cdktf.listMapper(aksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileManagedOutboundIpsToTerraform, true)(struct!.managedOutboundIps),
    outbound_ip_prefixes: cdktf.listMapper(aksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesToTerraform, true)(struct!.outboundIpPrefixes),
    outbound_ips: cdktf.listMapper(aksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsToTerraform, true)(struct!.outboundIps),
  }
}


export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileToHclTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfile | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileEffectiveOutboundIpsToHclTerraform, true)(struct!.effectiveOutboundIps),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileEffectiveOutboundIpsList",
    },
    managed_outbound_ips: {
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileManagedOutboundIpsToHclTerraform, true)(struct!.managedOutboundIps),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileManagedOutboundIpsList",
    },
    outbound_ip_prefixes: {
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesToHclTerraform, true)(struct!.outboundIpPrefixes),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesList",
    },
    outbound_ips: {
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsToHclTerraform, true)(struct!.outboundIps),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfile | cdktf.IResolvable | undefined) {
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
  private _effectiveOutboundIps = new AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileEffectiveOutboundIpsList(this, "effective_outbound_ips", false);
  public get effectiveOutboundIps() {
    return this._effectiveOutboundIps;
  }
  public putEffectiveOutboundIps(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileEffectiveOutboundIps[] | cdktf.IResolvable) {
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
  private _managedOutboundIps = new AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileManagedOutboundIpsList(this, "managed_outbound_ips", false);
  public get managedOutboundIps() {
    return this._managedOutboundIps;
  }
  public putManagedOutboundIps(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileManagedOutboundIps[] | cdktf.IResolvable) {
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
  private _outboundIpPrefixes = new AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixesList(this, "outbound_ip_prefixes", false);
  public get outboundIpPrefixes() {
    return this._outboundIpPrefixes;
  }
  public putOutboundIpPrefixes(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpPrefixes[] | cdktf.IResolvable) {
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
  private _outboundIps = new AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIpsList(this, "outbound_ips", false);
  public get outboundIps() {
    return this._outboundIps;
  }
  public putOutboundIps(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutboundIps[] | cdktf.IResolvable) {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfile[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutputReference {
    return new AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfile {
  /**
  * An IP address assigned to the Kubernetes DNS service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#dns_service_ip AksCluster#dns_service_ip}
  */
  readonly dnsServiceIp?: string;
  /**
  * A CIDR notation IP range assigned to the Docker bridge network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#docker_bridge_cidr AksCluster#docker_bridge_cidr}
  */
  readonly dockerBridgeCidr?: string;
  /**
  * Valid values are standard, basic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#load_balancer_sku AksCluster#load_balancer_sku}
  */
  readonly loadBalancerSku?: string;
  /**
  * This cannot be specified if networkPlugin is anything other than azure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#network_mode AksCluster#network_mode}
  */
  readonly networkMode?: string;
  /**
  * Network plugin used for building the Kubernetes network. Valid values are azure, kubenet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#network_plugin AksCluster#network_plugin}
  */
  readonly networkPlugin?: string;
  /**
  * Network plugin mode used for building the Azure CNI. Valid values are 'overlay'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#network_plugin_mode AksCluster#network_plugin_mode}
  */
  readonly networkPluginMode?: string;
  /**
  * Network policy used for building the Kubernetes network. Valid values are calico, azure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#network_policy AksCluster#network_policy}
  */
  readonly networkPolicy?: string;
  /**
  * This can only be set at cluster creation time and cannot be changed later. Valid values are loadBalancer, userDefinedRouting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#outbound_type AksCluster#outbound_type}
  */
  readonly outboundType?: string;
  /**
  * A CIDR notation IP range from which to assign pod IPs when kubenet is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#pod_cidr AksCluster#pod_cidr}
  */
  readonly podCidr?: string;
  /**
  * A CIDR notation IP range from which to assign service cluster IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#service_cidr AksCluster#service_cidr}
  */
  readonly serviceCidr?: string;
  /**
  * load_balancer_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#load_balancer_profile AksCluster#load_balancer_profile}
  */
  readonly loadBalancerProfile?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfile[] | cdktf.IResolvable;
}

export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileToTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfile | cdktf.IResolvable): any {
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
    load_balancer_profile: cdktf.listMapper(aksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileToTerraform, true)(struct!.loadBalancerProfile),
  }
}


export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileToHclTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfile | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileToHclTerraform, true)(struct!.loadBalancerProfile),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfile | cdktf.IResolvable | undefined) {
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
  private _loadBalancerProfile = new AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfileList(this, "load_balancer_profile", false);
  public get loadBalancerProfile() {
    return this._loadBalancerProfile;
  }
  public putLoadBalancerProfile(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileLoadBalancerProfile[] | cdktf.IResolvable) {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfile[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileOutputReference {
    return new AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecManagedClusterPropertiesOidcIssuerProfile {
  /**
  * Whether to enable OIDC Issuer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#enabled AksCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesOidcIssuerProfileToTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesOidcIssuerProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesOidcIssuerProfileToHclTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesOidcIssuerProfile | cdktf.IResolvable): any {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesOidcIssuerProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecManagedClusterPropertiesOidcIssuerProfile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesOidcIssuerProfile | cdktf.IResolvable | undefined) {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesOidcIssuerProfileList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecManagedClusterPropertiesOidcIssuerProfile[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecManagedClusterPropertiesOidcIssuerProfileOutputReference {
    return new AksClusterSpecClusterConfigSpecManagedClusterPropertiesOidcIssuerProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesIdentity {
  /**
  * The client ID of the user assigned identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#client_id AksCluster#client_id}
  */
  readonly clientId?: string;
  /**
  * The object ID of the user assigned identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#object_id AksCluster#object_id}
  */
  readonly objectId?: string;
  /**
  * The resource ID of the user assigned identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#resource_id AksCluster#resource_id}
  */
  readonly resourceId?: string;
}

export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesIdentityToTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesIdentity | cdktf.IResolvable): any {
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


export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesIdentityToHclTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesIdentity | cdktf.IResolvable): any {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesIdentityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesIdentity | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesIdentity | cdktf.IResolvable | undefined) {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesIdentityList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesIdentity[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesIdentityOutputReference {
    return new AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesIdentityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentities {
  /**
  * The binding selector to use for the AzureIdentityBinding resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#binding_selector AksCluster#binding_selector}
  */
  readonly bindingSelector?: string;
  /**
  * The name of the pod identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#name AksCluster#name}
  */
  readonly name: string;
  /**
  * The namespace of the pod identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#namespace AksCluster#namespace}
  */
  readonly namespace: string;
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#identity AksCluster#identity}
  */
  readonly identity: AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesIdentity[] | cdktf.IResolvable;
}

export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesToTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binding_selector: cdktf.stringToTerraform(struct!.bindingSelector),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    identity: cdktf.listMapper(aksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesIdentityToTerraform, true)(struct!.identity),
  }
}


export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesToHclTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentities | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesIdentityToHclTerraform, true)(struct!.identity),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesIdentityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentities | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentities | cdktf.IResolvable | undefined) {
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
  private _identity = new AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesIdentityList(this, "identity", false);
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesIdentity[] | cdktf.IResolvable) {
    this._identity.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }
}

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentities[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesOutputReference {
    return new AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentityExceptions {
  /**
  * The name of the pod identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#name AksCluster#name}
  */
  readonly name: string;
  /**
  * The namespace of the pod identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#namespace AksCluster#namespace}
  */
  readonly namespace: string;
  /**
  * The pod labels to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#pod_labels AksCluster#pod_labels}
  */
  readonly podLabels: { [key: string]: string };
}

export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentityExceptionsToTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentityExceptions | cdktf.IResolvable): any {
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


export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentityExceptionsToHclTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentityExceptions | cdktf.IResolvable): any {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentityExceptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentityExceptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentityExceptions | cdktf.IResolvable | undefined) {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentityExceptionsList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentityExceptions[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentityExceptionsOutputReference {
    return new AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentityExceptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfile {
  /**
  * Running in Kubenet is disabled by default due to the security related nature of AAD Pod Identity and the risks of IP spoofing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#allow_network_plugin_kubenet AksCluster#allow_network_plugin_kubenet}
  */
  readonly allowNetworkPluginKubenet?: boolean | cdktf.IResolvable;
  /**
  * Whether the pod identity addon is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#enabled AksCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * user_assigned_identities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#user_assigned_identities AksCluster#user_assigned_identities}
  */
  readonly userAssignedIdentities?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentities[] | cdktf.IResolvable;
  /**
  * user_assigned_identity_exceptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#user_assigned_identity_exceptions AksCluster#user_assigned_identity_exceptions}
  */
  readonly userAssignedIdentityExceptions?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentityExceptions[] | cdktf.IResolvable;
}

export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileToTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_network_plugin_kubenet: cdktf.booleanToTerraform(struct!.allowNetworkPluginKubenet),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    user_assigned_identities: cdktf.listMapper(aksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesToTerraform, true)(struct!.userAssignedIdentities),
    user_assigned_identity_exceptions: cdktf.listMapper(aksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentityExceptionsToTerraform, true)(struct!.userAssignedIdentityExceptions),
  }
}


export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileToHclTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfile | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesToHclTerraform, true)(struct!.userAssignedIdentities),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesList",
    },
    user_assigned_identity_exceptions: {
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentityExceptionsToHclTerraform, true)(struct!.userAssignedIdentityExceptions),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentityExceptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfile | cdktf.IResolvable | undefined) {
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
  private _userAssignedIdentities = new AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentitiesList(this, "user_assigned_identities", false);
  public get userAssignedIdentities() {
    return this._userAssignedIdentities;
  }
  public putUserAssignedIdentities(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentities[] | cdktf.IResolvable) {
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
  private _userAssignedIdentityExceptions = new AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentityExceptionsList(this, "user_assigned_identity_exceptions", false);
  public get userAssignedIdentityExceptions() {
    return this._userAssignedIdentityExceptions;
  }
  public putUserAssignedIdentityExceptions(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileUserAssignedIdentityExceptions[] | cdktf.IResolvable) {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfile[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileOutputReference {
    return new AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecManagedClusterPropertiesPowerState {
  /**
  * Whether the cluster is running or stopped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#code AksCluster#code}
  */
  readonly code?: string;
}

export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesPowerStateToTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesPowerState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.stringToTerraform(struct!.code),
  }
}


export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesPowerStateToHclTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesPowerState | cdktf.IResolvable): any {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesPowerStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecManagedClusterPropertiesPowerState | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesPowerState | cdktf.IResolvable | undefined) {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesPowerStateList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecManagedClusterPropertiesPowerState[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecManagedClusterPropertiesPowerStateOutputReference {
    return new AksClusterSpecClusterConfigSpecManagedClusterPropertiesPowerStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecManagedClusterPropertiesPrivateLinkResources {
  /**
  * The group ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#group_id AksCluster#group_id}
  */
  readonly groupId?: string;
  /**
  * The ID of the private link resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#id AksCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the private link resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#name AksCluster#name}
  */
  readonly name?: string;
  /**
  * The RequiredMembers of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#required_members AksCluster#required_members}
  */
  readonly requiredMembers?: string[];
  /**
  * The resource type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#type AksCluster#type}
  */
  readonly type?: string;
}

export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesPrivateLinkResourcesToTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesPrivateLinkResources | cdktf.IResolvable): any {
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


export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesPrivateLinkResourcesToHclTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesPrivateLinkResources | cdktf.IResolvable): any {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesPrivateLinkResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecManagedClusterPropertiesPrivateLinkResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesPrivateLinkResources | cdktf.IResolvable | undefined) {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesPrivateLinkResourcesList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecManagedClusterPropertiesPrivateLinkResources[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecManagedClusterPropertiesPrivateLinkResourcesOutputReference {
    return new AksClusterSpecClusterConfigSpecManagedClusterPropertiesPrivateLinkResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileWorkloadIdentity {
  /**
  * Whether to enable workload identity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#enabled AksCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileWorkloadIdentityToTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileWorkloadIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileWorkloadIdentityToHclTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileWorkloadIdentity | cdktf.IResolvable): any {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileWorkloadIdentityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileWorkloadIdentity | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileWorkloadIdentity | cdktf.IResolvable | undefined) {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileWorkloadIdentityList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileWorkloadIdentity[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileWorkloadIdentityOutputReference {
    return new AksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileWorkloadIdentityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfile {
  /**
  * workload_identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#workload_identity AksCluster#workload_identity}
  */
  readonly workloadIdentity?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileWorkloadIdentity[] | cdktf.IResolvable;
}

export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileToTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workload_identity: cdktf.listMapper(aksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileWorkloadIdentityToTerraform, true)(struct!.workloadIdentity),
  }
}


export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileToHclTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    workload_identity: {
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileWorkloadIdentityToHclTerraform, true)(struct!.workloadIdentity),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileWorkloadIdentityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfile | cdktf.IResolvable | undefined) {
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
  private _workloadIdentity = new AksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileWorkloadIdentityList(this, "workload_identity", false);
  public get workloadIdentity() {
    return this._workloadIdentity;
  }
  public putWorkloadIdentity(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileWorkloadIdentity[] | cdktf.IResolvable) {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfile[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileOutputReference {
    return new AksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecManagedClusterPropertiesServicePrincipalProfile {
  /**
  * FORMATTED:The ID for the service principal. If specified, must be set to `[parameters('servicePrincipalClientId')]`. This would be set to the cloud credential's client ID during cluster deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#client_id AksCluster#client_id}
  */
  readonly clientId: string;
  /**
  * The secret password associated with the service principal in plain text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#secret AksCluster#secret}
  */
  readonly secret?: string;
}

export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesServicePrincipalProfileToTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesServicePrincipalProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesServicePrincipalProfileToHclTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesServicePrincipalProfile | cdktf.IResolvable): any {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesServicePrincipalProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecManagedClusterPropertiesServicePrincipalProfile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesServicePrincipalProfile | cdktf.IResolvable | undefined) {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesServicePrincipalProfileList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecManagedClusterPropertiesServicePrincipalProfile[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecManagedClusterPropertiesServicePrincipalProfileOutputReference {
    return new AksClusterSpecClusterConfigSpecManagedClusterPropertiesServicePrincipalProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecManagedClusterPropertiesWindowsProfile {
  /**
  * Specifies the name of the administrator account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#admin_username AksCluster#admin_username}
  */
  readonly adminUsername: string;
  /**
  * Enable CSI proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#enable_csi_proxy AksCluster#enable_csi_proxy}
  */
  readonly enableCsiProxy?: boolean | cdktf.IResolvable;
  /**
  * The license type to use for Windows VMs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#license_type AksCluster#license_type}
  */
  readonly licenseType?: string;
}

export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesWindowsProfileToTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesWindowsProfile | cdktf.IResolvable): any {
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


export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesWindowsProfileToHclTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesWindowsProfile | cdktf.IResolvable): any {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesWindowsProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecManagedClusterPropertiesWindowsProfile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesWindowsProfile | cdktf.IResolvable | undefined) {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesWindowsProfileList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecManagedClusterPropertiesWindowsProfile[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecManagedClusterPropertiesWindowsProfileOutputReference {
    return new AksClusterSpecClusterConfigSpecManagedClusterPropertiesWindowsProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecManagedClusterProperties {
  /**
  * The AKS managed cluster addon profiles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#disable_local_accounts AksCluster#disable_local_accounts}
  */
  readonly disableLocalAccounts?: boolean | cdktf.IResolvable;
  /**
  * This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskEncryptionSets/{encryptionSetName}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#disk_encryption_set_id AksCluster#disk_encryption_set_id}
  */
  readonly diskEncryptionSetId?: string;
  /**
  * This cannot be updated once the Managed Cluster has been created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#dns_prefix AksCluster#dns_prefix}
  */
  readonly dnsPrefix?: string;
  /**
  * (DEPRECATED) Whether to enable Kubernetes pod security policy (preview). This feature is set for removal on October 15th, 2020.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#enable_pod_security_policy AksCluster#enable_pod_security_policy}
  */
  readonly enablePodSecurityPolicy?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable Kubernetes Role-Based Access Control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#enable_rbac AksCluster#enable_rbac}
  */
  readonly enableRbac?: boolean | cdktf.IResolvable;
  /**
  * This cannot be updated once the Managed Cluster has been created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#fqdn_subdomain AksCluster#fqdn_subdomain}
  */
  readonly fqdnSubdomain?: string;
  /**
  * Kubernetes version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#kubernetes_version AksCluster#kubernetes_version}
  */
  readonly kubernetesVersion: string;
  /**
  * The name of the resource group containing agent pool nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#node_resource_group AksCluster#node_resource_group}
  */
  readonly nodeResourceGroup?: string;
  /**
  * aad_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#aad_profile AksCluster#aad_profile}
  */
  readonly aadProfile?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAadProfile[] | cdktf.IResolvable;
  /**
  * addon_profiles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#addon_profiles AksCluster#addon_profiles}
  */
  readonly addonProfiles?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfiles[] | cdktf.IResolvable;
  /**
  * api_server_access_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#api_server_access_profile AksCluster#api_server_access_profile}
  */
  readonly apiServerAccessProfile?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesApiServerAccessProfile[] | cdktf.IResolvable;
  /**
  * auto_scaler_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#auto_scaler_profile AksCluster#auto_scaler_profile}
  */
  readonly autoScalerProfile?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoScalerProfile[] | cdktf.IResolvable;
  /**
  * auto_upgrade_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#auto_upgrade_profile AksCluster#auto_upgrade_profile}
  */
  readonly autoUpgradeProfile?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoUpgradeProfile[] | cdktf.IResolvable;
  /**
  * http_proxy_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#http_proxy_config AksCluster#http_proxy_config}
  */
  readonly httpProxyConfig?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesHttpProxyConfig[] | cdktf.IResolvable;
  /**
  * identity_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#identity_profile AksCluster#identity_profile}
  */
  readonly identityProfile?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfile[] | cdktf.IResolvable;
  /**
  * linux_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#linux_profile AksCluster#linux_profile}
  */
  readonly linuxProfile?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfile[] | cdktf.IResolvable;
  /**
  * network_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#network_profile AksCluster#network_profile}
  */
  readonly networkProfile?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfile[] | cdktf.IResolvable;
  /**
  * oidc_issuer_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#oidc_issuer_profile AksCluster#oidc_issuer_profile}
  */
  readonly oidcIssuerProfile?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesOidcIssuerProfile[] | cdktf.IResolvable;
  /**
  * pod_identity_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#pod_identity_profile AksCluster#pod_identity_profile}
  */
  readonly podIdentityProfile?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfile[] | cdktf.IResolvable;
  /**
  * power_state block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#power_state AksCluster#power_state}
  */
  readonly powerState?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesPowerState[] | cdktf.IResolvable;
  /**
  * private_link_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#private_link_resources AksCluster#private_link_resources}
  */
  readonly privateLinkResources?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesPrivateLinkResources[] | cdktf.IResolvable;
  /**
  * security_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#security_profile AksCluster#security_profile}
  */
  readonly securityProfile?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfile[] | cdktf.IResolvable;
  /**
  * service_principal_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#service_principal_profile AksCluster#service_principal_profile}
  */
  readonly servicePrincipalProfile?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesServicePrincipalProfile[] | cdktf.IResolvable;
  /**
  * windows_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#windows_profile AksCluster#windows_profile}
  */
  readonly windowsProfile?: AksClusterSpecClusterConfigSpecManagedClusterPropertiesWindowsProfile[] | cdktf.IResolvable;
}

export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesToTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterProperties | cdktf.IResolvable): any {
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
    aad_profile: cdktf.listMapper(aksClusterSpecClusterConfigSpecManagedClusterPropertiesAadProfileToTerraform, true)(struct!.aadProfile),
    addon_profiles: cdktf.listMapper(aksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesToTerraform, true)(struct!.addonProfiles),
    api_server_access_profile: cdktf.listMapper(aksClusterSpecClusterConfigSpecManagedClusterPropertiesApiServerAccessProfileToTerraform, true)(struct!.apiServerAccessProfile),
    auto_scaler_profile: cdktf.listMapper(aksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoScalerProfileToTerraform, true)(struct!.autoScalerProfile),
    auto_upgrade_profile: cdktf.listMapper(aksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoUpgradeProfileToTerraform, true)(struct!.autoUpgradeProfile),
    http_proxy_config: cdktf.listMapper(aksClusterSpecClusterConfigSpecManagedClusterPropertiesHttpProxyConfigToTerraform, true)(struct!.httpProxyConfig),
    identity_profile: cdktf.listMapper(aksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileToTerraform, true)(struct!.identityProfile),
    linux_profile: cdktf.listMapper(aksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileToTerraform, true)(struct!.linuxProfile),
    network_profile: cdktf.listMapper(aksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileToTerraform, true)(struct!.networkProfile),
    oidc_issuer_profile: cdktf.listMapper(aksClusterSpecClusterConfigSpecManagedClusterPropertiesOidcIssuerProfileToTerraform, true)(struct!.oidcIssuerProfile),
    pod_identity_profile: cdktf.listMapper(aksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileToTerraform, true)(struct!.podIdentityProfile),
    power_state: cdktf.listMapper(aksClusterSpecClusterConfigSpecManagedClusterPropertiesPowerStateToTerraform, true)(struct!.powerState),
    private_link_resources: cdktf.listMapper(aksClusterSpecClusterConfigSpecManagedClusterPropertiesPrivateLinkResourcesToTerraform, true)(struct!.privateLinkResources),
    security_profile: cdktf.listMapper(aksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileToTerraform, true)(struct!.securityProfile),
    service_principal_profile: cdktf.listMapper(aksClusterSpecClusterConfigSpecManagedClusterPropertiesServicePrincipalProfileToTerraform, true)(struct!.servicePrincipalProfile),
    windows_profile: cdktf.listMapper(aksClusterSpecClusterConfigSpecManagedClusterPropertiesWindowsProfileToTerraform, true)(struct!.windowsProfile),
  }
}


export function aksClusterSpecClusterConfigSpecManagedClusterPropertiesToHclTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterProperties | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecManagedClusterPropertiesAadProfileToHclTerraform, true)(struct!.aadProfile),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecManagedClusterPropertiesAadProfileList",
    },
    addon_profiles: {
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesToHclTerraform, true)(struct!.addonProfiles),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesList",
    },
    api_server_access_profile: {
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecManagedClusterPropertiesApiServerAccessProfileToHclTerraform, true)(struct!.apiServerAccessProfile),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecManagedClusterPropertiesApiServerAccessProfileList",
    },
    auto_scaler_profile: {
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoScalerProfileToHclTerraform, true)(struct!.autoScalerProfile),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoScalerProfileList",
    },
    auto_upgrade_profile: {
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoUpgradeProfileToHclTerraform, true)(struct!.autoUpgradeProfile),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoUpgradeProfileList",
    },
    http_proxy_config: {
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecManagedClusterPropertiesHttpProxyConfigToHclTerraform, true)(struct!.httpProxyConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecManagedClusterPropertiesHttpProxyConfigList",
    },
    identity_profile: {
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileToHclTerraform, true)(struct!.identityProfile),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileList",
    },
    linux_profile: {
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileToHclTerraform, true)(struct!.linuxProfile),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileList",
    },
    network_profile: {
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileToHclTerraform, true)(struct!.networkProfile),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileList",
    },
    oidc_issuer_profile: {
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecManagedClusterPropertiesOidcIssuerProfileToHclTerraform, true)(struct!.oidcIssuerProfile),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecManagedClusterPropertiesOidcIssuerProfileList",
    },
    pod_identity_profile: {
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileToHclTerraform, true)(struct!.podIdentityProfile),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileList",
    },
    power_state: {
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecManagedClusterPropertiesPowerStateToHclTerraform, true)(struct!.powerState),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecManagedClusterPropertiesPowerStateList",
    },
    private_link_resources: {
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecManagedClusterPropertiesPrivateLinkResourcesToHclTerraform, true)(struct!.privateLinkResources),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecManagedClusterPropertiesPrivateLinkResourcesList",
    },
    security_profile: {
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileToHclTerraform, true)(struct!.securityProfile),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileList",
    },
    service_principal_profile: {
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecManagedClusterPropertiesServicePrincipalProfileToHclTerraform, true)(struct!.servicePrincipalProfile),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecManagedClusterPropertiesServicePrincipalProfileList",
    },
    windows_profile: {
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecManagedClusterPropertiesWindowsProfileToHclTerraform, true)(struct!.windowsProfile),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecManagedClusterPropertiesWindowsProfileList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecManagedClusterProperties | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecManagedClusterProperties | cdktf.IResolvable | undefined) {
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
  private _aadProfile = new AksClusterSpecClusterConfigSpecManagedClusterPropertiesAadProfileList(this, "aad_profile", false);
  public get aadProfile() {
    return this._aadProfile;
  }
  public putAadProfile(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAadProfile[] | cdktf.IResolvable) {
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
  private _addonProfiles = new AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfilesList(this, "addon_profiles", false);
  public get addonProfiles() {
    return this._addonProfiles;
  }
  public putAddonProfiles(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAddonProfiles[] | cdktf.IResolvable) {
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
  private _apiServerAccessProfile = new AksClusterSpecClusterConfigSpecManagedClusterPropertiesApiServerAccessProfileList(this, "api_server_access_profile", false);
  public get apiServerAccessProfile() {
    return this._apiServerAccessProfile;
  }
  public putApiServerAccessProfile(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesApiServerAccessProfile[] | cdktf.IResolvable) {
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
  private _autoScalerProfile = new AksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoScalerProfileList(this, "auto_scaler_profile", false);
  public get autoScalerProfile() {
    return this._autoScalerProfile;
  }
  public putAutoScalerProfile(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoScalerProfile[] | cdktf.IResolvable) {
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
  private _autoUpgradeProfile = new AksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoUpgradeProfileList(this, "auto_upgrade_profile", false);
  public get autoUpgradeProfile() {
    return this._autoUpgradeProfile;
  }
  public putAutoUpgradeProfile(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesAutoUpgradeProfile[] | cdktf.IResolvable) {
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
  private _httpProxyConfig = new AksClusterSpecClusterConfigSpecManagedClusterPropertiesHttpProxyConfigList(this, "http_proxy_config", false);
  public get httpProxyConfig() {
    return this._httpProxyConfig;
  }
  public putHttpProxyConfig(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesHttpProxyConfig[] | cdktf.IResolvable) {
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
  private _identityProfile = new AksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfileList(this, "identity_profile", false);
  public get identityProfile() {
    return this._identityProfile;
  }
  public putIdentityProfile(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesIdentityProfile[] | cdktf.IResolvable) {
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
  private _linuxProfile = new AksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfileList(this, "linux_profile", false);
  public get linuxProfile() {
    return this._linuxProfile;
  }
  public putLinuxProfile(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesLinuxProfile[] | cdktf.IResolvable) {
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
  private _networkProfile = new AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfileList(this, "network_profile", false);
  public get networkProfile() {
    return this._networkProfile;
  }
  public putNetworkProfile(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesNetworkProfile[] | cdktf.IResolvable) {
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
  private _oidcIssuerProfile = new AksClusterSpecClusterConfigSpecManagedClusterPropertiesOidcIssuerProfileList(this, "oidc_issuer_profile", false);
  public get oidcIssuerProfile() {
    return this._oidcIssuerProfile;
  }
  public putOidcIssuerProfile(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesOidcIssuerProfile[] | cdktf.IResolvable) {
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
  private _podIdentityProfile = new AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfileList(this, "pod_identity_profile", false);
  public get podIdentityProfile() {
    return this._podIdentityProfile;
  }
  public putPodIdentityProfile(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesPodIdentityProfile[] | cdktf.IResolvable) {
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
  private _powerState = new AksClusterSpecClusterConfigSpecManagedClusterPropertiesPowerStateList(this, "power_state", false);
  public get powerState() {
    return this._powerState;
  }
  public putPowerState(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesPowerState[] | cdktf.IResolvable) {
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
  private _privateLinkResources = new AksClusterSpecClusterConfigSpecManagedClusterPropertiesPrivateLinkResourcesList(this, "private_link_resources", false);
  public get privateLinkResources() {
    return this._privateLinkResources;
  }
  public putPrivateLinkResources(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesPrivateLinkResources[] | cdktf.IResolvable) {
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
  private _securityProfile = new AksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfileList(this, "security_profile", false);
  public get securityProfile() {
    return this._securityProfile;
  }
  public putSecurityProfile(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesSecurityProfile[] | cdktf.IResolvable) {
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
  private _servicePrincipalProfile = new AksClusterSpecClusterConfigSpecManagedClusterPropertiesServicePrincipalProfileList(this, "service_principal_profile", false);
  public get servicePrincipalProfile() {
    return this._servicePrincipalProfile;
  }
  public putServicePrincipalProfile(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesServicePrincipalProfile[] | cdktf.IResolvable) {
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
  private _windowsProfile = new AksClusterSpecClusterConfigSpecManagedClusterPropertiesWindowsProfileList(this, "windows_profile", false);
  public get windowsProfile() {
    return this._windowsProfile;
  }
  public putWindowsProfile(value: AksClusterSpecClusterConfigSpecManagedClusterPropertiesWindowsProfile[] | cdktf.IResolvable) {
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

export class AksClusterSpecClusterConfigSpecManagedClusterPropertiesList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecManagedClusterProperties[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecManagedClusterPropertiesOutputReference {
    return new AksClusterSpecClusterConfigSpecManagedClusterPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecManagedClusterSku {
  /**
  * The name of a managed cluster SKU.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#name AksCluster#name}
  */
  readonly name?: string;
  /**
  *  Valid values are Paid, Free.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#tier AksCluster#tier}
  */
  readonly tier?: string;
}

export function aksClusterSpecClusterConfigSpecManagedClusterSkuToTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterSku | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    tier: cdktf.stringToTerraform(struct!.tier),
  }
}


export function aksClusterSpecClusterConfigSpecManagedClusterSkuToHclTerraform(struct?: AksClusterSpecClusterConfigSpecManagedClusterSku | cdktf.IResolvable): any {
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

export class AksClusterSpecClusterConfigSpecManagedClusterSkuOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecManagedClusterSku | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecManagedClusterSku | cdktf.IResolvable | undefined) {
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

export class AksClusterSpecClusterConfigSpecManagedClusterSkuList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecManagedClusterSku[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecManagedClusterSkuOutputReference {
    return new AksClusterSpecClusterConfigSpecManagedClusterSkuOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecManagedCluster {
  /**
  * Azure resource managed cluster api version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#apiversion AksCluster#apiversion}
  */
  readonly apiversion: string;
  /**
  * AKS cluster location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#location AksCluster#location}
  */
  readonly location: string;
  /**
  * Resource tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#tags AksCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#type AksCluster#type}
  */
  readonly type?: string;
  /**
  * additional_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#additional_metadata AksCluster#additional_metadata}
  */
  readonly additionalMetadata?: AksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadata[] | cdktf.IResolvable;
  /**
  * extended_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#extended_location AksCluster#extended_location}
  */
  readonly extendedLocation?: AksClusterSpecClusterConfigSpecManagedClusterExtendedLocation[] | cdktf.IResolvable;
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#identity AksCluster#identity}
  */
  readonly identity?: AksClusterSpecClusterConfigSpecManagedClusterIdentity[] | cdktf.IResolvable;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#properties AksCluster#properties}
  */
  readonly properties: AksClusterSpecClusterConfigSpecManagedClusterProperties[] | cdktf.IResolvable;
  /**
  * sku block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#sku AksCluster#sku}
  */
  readonly sku?: AksClusterSpecClusterConfigSpecManagedClusterSku[] | cdktf.IResolvable;
}

export function aksClusterSpecClusterConfigSpecManagedClusterToTerraform(struct?: AksClusterSpecClusterConfigSpecManagedCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apiversion: cdktf.stringToTerraform(struct!.apiversion),
    location: cdktf.stringToTerraform(struct!.location),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    type: cdktf.stringToTerraform(struct!.type),
    additional_metadata: cdktf.listMapper(aksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataToTerraform, true)(struct!.additionalMetadata),
    extended_location: cdktf.listMapper(aksClusterSpecClusterConfigSpecManagedClusterExtendedLocationToTerraform, true)(struct!.extendedLocation),
    identity: cdktf.listMapper(aksClusterSpecClusterConfigSpecManagedClusterIdentityToTerraform, true)(struct!.identity),
    properties: cdktf.listMapper(aksClusterSpecClusterConfigSpecManagedClusterPropertiesToTerraform, true)(struct!.properties),
    sku: cdktf.listMapper(aksClusterSpecClusterConfigSpecManagedClusterSkuToTerraform, true)(struct!.sku),
  }
}


export function aksClusterSpecClusterConfigSpecManagedClusterToHclTerraform(struct?: AksClusterSpecClusterConfigSpecManagedCluster | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataToHclTerraform, true)(struct!.additionalMetadata),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataList",
    },
    extended_location: {
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecManagedClusterExtendedLocationToHclTerraform, true)(struct!.extendedLocation),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecManagedClusterExtendedLocationList",
    },
    identity: {
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecManagedClusterIdentityToHclTerraform, true)(struct!.identity),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecManagedClusterIdentityList",
    },
    properties: {
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecManagedClusterPropertiesToHclTerraform, true)(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecManagedClusterPropertiesList",
    },
    sku: {
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecManagedClusterSkuToHclTerraform, true)(struct!.sku),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecManagedClusterSkuList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterSpecClusterConfigSpecManagedClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecManagedCluster | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecManagedCluster | cdktf.IResolvable | undefined) {
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
  private _additionalMetadata = new AksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadataList(this, "additional_metadata", false);
  public get additionalMetadata() {
    return this._additionalMetadata;
  }
  public putAdditionalMetadata(value: AksClusterSpecClusterConfigSpecManagedClusterAdditionalMetadata[] | cdktf.IResolvable) {
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
  private _extendedLocation = new AksClusterSpecClusterConfigSpecManagedClusterExtendedLocationList(this, "extended_location", false);
  public get extendedLocation() {
    return this._extendedLocation;
  }
  public putExtendedLocation(value: AksClusterSpecClusterConfigSpecManagedClusterExtendedLocation[] | cdktf.IResolvable) {
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
  private _identity = new AksClusterSpecClusterConfigSpecManagedClusterIdentityList(this, "identity", false);
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: AksClusterSpecClusterConfigSpecManagedClusterIdentity[] | cdktf.IResolvable) {
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
  private _properties = new AksClusterSpecClusterConfigSpecManagedClusterPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
  public putProperties(value: AksClusterSpecClusterConfigSpecManagedClusterProperties[] | cdktf.IResolvable) {
    this._properties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }

  // sku - computed: false, optional: true, required: false
  private _sku = new AksClusterSpecClusterConfigSpecManagedClusterSkuList(this, "sku", false);
  public get sku() {
    return this._sku;
  }
  public putSku(value: AksClusterSpecClusterConfigSpecManagedClusterSku[] | cdktf.IResolvable) {
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

export class AksClusterSpecClusterConfigSpecManagedClusterList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecManagedCluster[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecManagedClusterOutputReference {
    return new AksClusterSpecClusterConfigSpecManagedClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecNodePoolsPropertiesKubeletConfig {
  /**
  * Allowed list of unsafe sysctls or unsafe sysctl patterns (ending in *).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#allowed_unsafe_sysctls AksCluster#allowed_unsafe_sysctls}
  */
  readonly allowedUnsafeSysctls?: string[];
  /**
  * The maximum number of container log files that can be present for a container. The number must be ≥ 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#container_log_max_files AksCluster#container_log_max_files}
  */
  readonly containerLogMaxFiles?: number;
  /**
  * The maximum size (e.g. 10Mi) of container log file before it is rotated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#container_log_max_size_mb AksCluster#container_log_max_size_mb}
  */
  readonly containerLogMaxSizeMb?: number;
  /**
  * The default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#cpu_cfs_quota AksCluster#cpu_cfs_quota}
  */
  readonly cpuCfsQuota?: boolean | cdktf.IResolvable;
  /**
  * Valid values are a sequence of decimal numbers with an optional fraction and a unit suffix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#cpu_cfs_quota_period AksCluster#cpu_cfs_quota_period}
  */
  readonly cpuCfsQuotaPeriod?: string;
  /**
  * See Kubernetes CPU management policies for more information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#cpu_manager_policy AksCluster#cpu_manager_policy}
  */
  readonly cpuManagerPolicy?: string;
  /**
  * If set to true it will make the Kubelet fail to start if swap is enabled on the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#fail_swap_on AksCluster#fail_swap_on}
  */
  readonly failSwapOn?: boolean | cdktf.IResolvable;
  /**
  * To disable image garbage collection, set to 100. The default is 85%
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#image_gc_high_threshold AksCluster#image_gc_high_threshold}
  */
  readonly imageGcHighThreshold?: number;
  /**
  * This cannot be set higher than imageGcHighThreshold. The default is 80%
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#image_gc_low_threshold AksCluster#image_gc_low_threshold}
  */
  readonly imageGcLowThreshold?: number;
  /**
  * The maximum number of processes per pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#pod_max_pids AksCluster#pod_max_pids}
  */
  readonly podMaxPids?: number;
  /**
  * Allowed values are none, best-effort, restricted, and single-numa-node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#topology_manager_policy AksCluster#topology_manager_policy}
  */
  readonly topologyManagerPolicy?: string;
}

export function aksClusterSpecClusterConfigSpecNodePoolsPropertiesKubeletConfigToTerraform(struct?: AksClusterSpecClusterConfigSpecNodePoolsPropertiesKubeletConfig | cdktf.IResolvable): any {
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


export function aksClusterSpecClusterConfigSpecNodePoolsPropertiesKubeletConfigToHclTerraform(struct?: AksClusterSpecClusterConfigSpecNodePoolsPropertiesKubeletConfig | cdktf.IResolvable): any {
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

export class AksClusterSpecClusterConfigSpecNodePoolsPropertiesKubeletConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecNodePoolsPropertiesKubeletConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecNodePoolsPropertiesKubeletConfig | cdktf.IResolvable | undefined) {
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

export class AksClusterSpecClusterConfigSpecNodePoolsPropertiesKubeletConfigList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecNodePoolsPropertiesKubeletConfig[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecNodePoolsPropertiesKubeletConfigOutputReference {
    return new AksClusterSpecClusterConfigSpecNodePoolsPropertiesKubeletConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigSysctls {
  /**
  * Sysctl setting fs.aio-max-nr.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#fs_aio_max_nr AksCluster#fs_aio_max_nr}
  */
  readonly fsAioMaxNr?: number;
  /**
  * Sysctl setting fs.file-max.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#fs_file_max AksCluster#fs_file_max}
  */
  readonly fsFileMax?: number;
  /**
  * Sysctl setting fs.inotify.max_user_watches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#fs_inotify_max_user_watches AksCluster#fs_inotify_max_user_watches}
  */
  readonly fsInotifyMaxUserWatches?: number;
  /**
  * Sysctl setting fs.nr_open.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#fs_nr_open AksCluster#fs_nr_open}
  */
  readonly fsNrOpen?: number;
  /**
  * Sysctl setting kernel.threads-max.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#kernel_threads_max AksCluster#kernel_threads_max}
  */
  readonly kernelThreadsMax?: number;
  /**
  * Sysctl setting net.core.netdev_max_backlog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#net_core_netdev_max_backlog AksCluster#net_core_netdev_max_backlog}
  */
  readonly netCoreNetdevMaxBacklog?: number;
  /**
  * Sysctl setting net.core.optmem_max.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#net_core_optmem_max AksCluster#net_core_optmem_max}
  */
  readonly netCoreOptmemMax?: number;
  /**
  * Sysctl setting net.core.rmem_default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#net_core_rmem_default AksCluster#net_core_rmem_default}
  */
  readonly netCoreRmemDefault?: number;
  /**
  * Sysctl setting net.core.rmem_max.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#net_core_rmem_max AksCluster#net_core_rmem_max}
  */
  readonly netCoreRmemMax?: number;
  /**
  * Sysctl setting net.core.somaxconn.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#net_core_somaxconn AksCluster#net_core_somaxconn}
  */
  readonly netCoreSomaxconn?: number;
  /**
  * Sysctl setting net.core.wmem_default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#net_core_wmem_default AksCluster#net_core_wmem_default}
  */
  readonly netCoreWmemDefault?: number;
  /**
  * Sysctl setting net.core.wmem_max.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#net_core_wmem_max AksCluster#net_core_wmem_max}
  */
  readonly netCoreWmemMax?: number;
  /**
  * Sysctl setting net.ipv4.ip_local_port_range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#net_ipv4_ip_local_port_range AksCluster#net_ipv4_ip_local_port_range}
  */
  readonly netIpv4IpLocalPortRange?: string;
  /**
  * Sysctl setting net.ipv4.neigh.default.gc_thresh1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#net_ipv4_neigh_default_gc_thresh1 AksCluster#net_ipv4_neigh_default_gc_thresh1}
  */
  readonly netIpv4NeighDefaultGcThresh1?: number;
  /**
  * Sysctl setting net.ipv4.neigh.default.gc_thresh2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#net_ipv4_neigh_default_gc_thresh2 AksCluster#net_ipv4_neigh_default_gc_thresh2}
  */
  readonly netIpv4NeighDefaultGcThresh2?: number;
  /**
  * Sysctl setting net.ipv4.neigh.default.gc_thresh3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#net_ipv4_neigh_default_gc_thresh3 AksCluster#net_ipv4_neigh_default_gc_thresh3}
  */
  readonly netIpv4NeighDefaultGcThresh3?: number;
  /**
  * Sysctl setting net.ipv4.tcp_fin_timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#net_ipv4_tcp_fin_timeout AksCluster#net_ipv4_tcp_fin_timeout}
  */
  readonly netIpv4TcpFinTimeout?: number;
  /**
  * Sysctl setting net.ipv4.tcp_keepalive_probes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#net_ipv4_tcp_keepalive_probes AksCluster#net_ipv4_tcp_keepalive_probes}
  */
  readonly netIpv4TcpKeepaliveProbes?: number;
  /**
  * Sysctl setting net.ipv4.tcp_keepalive_time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#net_ipv4_tcp_keepalive_time AksCluster#net_ipv4_tcp_keepalive_time}
  */
  readonly netIpv4TcpKeepaliveTime?: number;
  /**
  * Sysctl setting net.ipv4.tcp_max_syn_backlog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#net_ipv4_tcp_max_syn_backlog AksCluster#net_ipv4_tcp_max_syn_backlog}
  */
  readonly netIpv4TcpMaxSynBacklog?: number;
  /**
  * Sysctl setting net.ipv4.tcp_max_tw_buckets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#net_ipv4_tcp_max_tw_buckets AksCluster#net_ipv4_tcp_max_tw_buckets}
  */
  readonly netIpv4TcpMaxTwBuckets?: number;
  /**
  * Sysctl setting net.ipv4.tcp_tw_reuse.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#net_ipv4_tcp_tw_reuse AksCluster#net_ipv4_tcp_tw_reuse}
  */
  readonly netIpv4TcpTwReuse?: boolean | cdktf.IResolvable;
  /**
  * Sysctl setting net.ipv4.tcp_keepalive_intvl.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#net_ipv4_tcpkeepalive_intvl AksCluster#net_ipv4_tcpkeepalive_intvl}
  */
  readonly netIpv4TcpkeepaliveIntvl?: number;
  /**
  * Sysctl setting net.netfilter.nf_conntrack_buckets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#net_netfilter_nf_conntrack_buckets AksCluster#net_netfilter_nf_conntrack_buckets}
  */
  readonly netNetfilterNfConntrackBuckets?: number;
  /**
  * Sysctl setting net.netfilter.nf_conntrack_max.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#net_netfilter_nf_conntrack_max AksCluster#net_netfilter_nf_conntrack_max}
  */
  readonly netNetfilterNfConntrackMax?: number;
  /**
  * Sysctl setting vm.max_map_count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#vm_max_map_count AksCluster#vm_max_map_count}
  */
  readonly vmMaxMapCount?: number;
  /**
  * Sysctl setting vm.swappiness.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#vm_swappiness AksCluster#vm_swappiness}
  */
  readonly vmSwappiness?: number;
  /**
  * Sysctl setting vm.vfs_cache_pressure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#vm_vfs_cache_pressure AksCluster#vm_vfs_cache_pressure}
  */
  readonly vmVfsCachePressure?: number;
}

export function aksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigSysctlsToTerraform(struct?: AksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigSysctls | cdktf.IResolvable): any {
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


export function aksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigSysctlsToHclTerraform(struct?: AksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigSysctls | cdktf.IResolvable): any {
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

export class AksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigSysctlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigSysctls | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigSysctls | cdktf.IResolvable | undefined) {
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

export class AksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigSysctlsList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigSysctls[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigSysctlsOutputReference {
    return new AksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigSysctlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfig {
  /**
  * The size in MB of a swap file that will be created on each node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#swap_file_size_mb AksCluster#swap_file_size_mb}
  */
  readonly swapFileSizeMb?: number;
  /**
  * Valid values are always, defer, defer+madvise, madvise and never.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#transparent_huge_page_defrag AksCluster#transparent_huge_page_defrag}
  */
  readonly transparentHugePageDefrag?: string;
  /**
  * Valid values are always, madvise, and never.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#transparent_huge_page_enabled AksCluster#transparent_huge_page_enabled}
  */
  readonly transparentHugePageEnabled?: string;
  /**
  * sysctls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#sysctls AksCluster#sysctls}
  */
  readonly sysctls?: AksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigSysctls[] | cdktf.IResolvable;
}

export function aksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigToTerraform(struct?: AksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    swap_file_size_mb: cdktf.numberToTerraform(struct!.swapFileSizeMb),
    transparent_huge_page_defrag: cdktf.stringToTerraform(struct!.transparentHugePageDefrag),
    transparent_huge_page_enabled: cdktf.stringToTerraform(struct!.transparentHugePageEnabled),
    sysctls: cdktf.listMapper(aksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigSysctlsToTerraform, true)(struct!.sysctls),
  }
}


export function aksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigToHclTerraform(struct?: AksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfig | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigSysctlsToHclTerraform, true)(struct!.sysctls),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigSysctlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfig | cdktf.IResolvable | undefined) {
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
  private _sysctls = new AksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigSysctlsList(this, "sysctls", false);
  public get sysctls() {
    return this._sysctls;
  }
  public putSysctls(value: AksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigSysctls[] | cdktf.IResolvable) {
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

export class AksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfig[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigOutputReference {
    return new AksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecNodePoolsPropertiesUpgradeSettings {
  /**
  * This can either be set to an integer (e.g. 5) or a percentage (e.g. 50%)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#max_surge AksCluster#max_surge}
  */
  readonly maxSurge?: string;
}

export function aksClusterSpecClusterConfigSpecNodePoolsPropertiesUpgradeSettingsToTerraform(struct?: AksClusterSpecClusterConfigSpecNodePoolsPropertiesUpgradeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_surge: cdktf.stringToTerraform(struct!.maxSurge),
  }
}


export function aksClusterSpecClusterConfigSpecNodePoolsPropertiesUpgradeSettingsToHclTerraform(struct?: AksClusterSpecClusterConfigSpecNodePoolsPropertiesUpgradeSettings | cdktf.IResolvable): any {
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

export class AksClusterSpecClusterConfigSpecNodePoolsPropertiesUpgradeSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecNodePoolsPropertiesUpgradeSettings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecNodePoolsPropertiesUpgradeSettings | cdktf.IResolvable | undefined) {
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

export class AksClusterSpecClusterConfigSpecNodePoolsPropertiesUpgradeSettingsList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecNodePoolsPropertiesUpgradeSettings[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecNodePoolsPropertiesUpgradeSettingsOutputReference {
    return new AksClusterSpecClusterConfigSpecNodePoolsPropertiesUpgradeSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecNodePoolsProperties {
  /**
  * The list of Availability zones to use for nodes. This can only be specified if the AgentPoolType property is VirtualMachineScaleSets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#availability_zones AksCluster#availability_zones}
  */
  readonly availabilityZones?: string[];
  /**
  * Number of agents (VMs) to host docker containers. Allowed values must be in the range of 0 to 1000 (inclusive) for user pools and in the range of 1 to 1000 (inclusive) for system pools. The default value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#count AksCluster#count}
  */
  readonly count?: number;
  /**
  * Whether to enable auto-scaler
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#enable_auto_scaling AksCluster#enable_auto_scaling}
  */
  readonly enableAutoScaling?: boolean | cdktf.IResolvable;
  /**
  * This is only supported on certain VM sizes and in certain Azure regions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#enable_encryption_at_host AksCluster#enable_encryption_at_host}
  */
  readonly enableEncryptionAtHost?: boolean | cdktf.IResolvable;
  /**
  * See Add a FIPS-enabled node pool for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#enable_fips AksCluster#enable_fips}
  */
  readonly enableFips?: boolean | cdktf.IResolvable;
  /**
  * Some scenarios may require nodes in a node pool to receive their own dedicated public IP addresses. A common scenario is for gaming workloads, where a console needs to make a direct connection to a cloud virtual machine to minimize hops. For more information see assigning a public IP per node. The default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#enable_node_public_ip AksCluster#enable_node_public_ip}
  */
  readonly enableNodePublicIp?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable UltraSSD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#enable_ultra_ssd AksCluster#enable_ultra_ssd}
  */
  readonly enableUltraSsd?: boolean | cdktf.IResolvable;
  /**
  * GPUInstanceProfile to be used to specify GPU MIG instance profile for supported GPU VM SKU.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#gpu_instance_profile AksCluster#gpu_instance_profile}
  */
  readonly gpuInstanceProfile?: string;
  /**
  * Valid values are OS, Temporary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#kubelet_disk_type AksCluster#kubelet_disk_type}
  */
  readonly kubeletDiskType?: string;
  /**
  * The maximum number of nodes for auto-scaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#max_count AksCluster#max_count}
  */
  readonly maxCount?: number;
  /**
  * The maximum number of pods that can run on a node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#max_pods AksCluster#max_pods}
  */
  readonly maxPods?: number;
  /**
  * The minimum number of nodes for auto-scaling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#min_count AksCluster#min_count}
  */
  readonly minCount?: number;
  /**
  * The mode for a node pool which defines a node pool's primary function. If set as 'System', AKS prefers system pods scheduling to node pools with mode System. Accepted values: System, User
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#mode AksCluster#mode}
  */
  readonly mode?: string;
  /**
  * Valid values are System, User.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#node_labels AksCluster#node_labels}
  */
  readonly nodeLabels?: { [key: string]: string };
  /**
  * This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPPrefixes/{publicIPPrefixName}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#node_public_ip_prefix_id AksCluster#node_public_ip_prefix_id}
  */
  readonly nodePublicIpPrefixId?: string;
  /**
  * The taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#node_taints AksCluster#node_taints}
  */
  readonly nodeTaints?: string[];
  /**
  * The AKS node pool Kubernetes version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#orchestrator_version AksCluster#orchestrator_version}
  */
  readonly orchestratorVersion?: string;
  /**
  * OS Disk Size in GB to be used to specify the disk size for every machine in the master/agent pool. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#os_disk_size_gb AksCluster#os_disk_size_gb}
  */
  readonly osDiskSizeGb?: number;
  /**
  * Valid values are Managed, Ephemeral.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#os_disk_type AksCluster#os_disk_type}
  */
  readonly osDiskType?: string;
  /**
  * Valid values are Ubuntu, CBLMariner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#os_sku AksCluster#os_sku}
  */
  readonly osSku?: string;
  /**
  * Valid values are Linux, Windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#os_type AksCluster#os_type}
  */
  readonly osType?: string;
  /**
  * If omitted, pod IPs are statically assigned on the node subnet (see vnetSubnetID for more details). This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#pod_subnet_id AksCluster#pod_subnet_id}
  */
  readonly podSubnetId?: string;
  /**
  * The ID for Proximity Placement Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#proximity_placement_group_id AksCluster#proximity_placement_group_id}
  */
  readonly proximityPlacementGroupId?: string;
  /**
  * This cannot be specified unless the scaleSetPriority is Spot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#scale_set_eviction_policy AksCluster#scale_set_eviction_policy}
  */
  readonly scaleSetEvictionPolicy?: string;
  /**
  * The Virtual Machine Scale Set priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#scale_set_priority AksCluster#scale_set_priority}
  */
  readonly scaleSetPriority?: string;
  /**
  * Possible values are any decimal value greater than zero or -1 which indicates the willingness to pay any on-demand price. For more details on spot pricing, see spot VMs pricing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#spot_max_price AksCluster#spot_max_price}
  */
  readonly spotMaxPrice?: number;
  /**
  * The tags to be persisted on the agent pool virtual machine scale set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#tags AksCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Valid values are VirtualMachineScaleSets, AvailabilitySet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#type AksCluster#type}
  */
  readonly type?: string;
  /**
  * The AKS node pool VM size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#vm_size AksCluster#vm_size}
  */
  readonly vmSize?: string;
  /**
  * If this is not specified, a VNET and subnet will be generated and used. If no podSubnetID is specified, this applies to nodes and pods, otherwise it applies to just nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#vnet_subnet_id AksCluster#vnet_subnet_id}
  */
  readonly vnetSubnetId?: string;
  /**
  * kubelet_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#kubelet_config AksCluster#kubelet_config}
  */
  readonly kubeletConfig?: AksClusterSpecClusterConfigSpecNodePoolsPropertiesKubeletConfig[] | cdktf.IResolvable;
  /**
  * linux_os_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#linux_os_config AksCluster#linux_os_config}
  */
  readonly linuxOsConfig?: AksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfig[] | cdktf.IResolvable;
  /**
  * upgrade_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#upgrade_settings AksCluster#upgrade_settings}
  */
  readonly upgradeSettings?: AksClusterSpecClusterConfigSpecNodePoolsPropertiesUpgradeSettings[] | cdktf.IResolvable;
}

export function aksClusterSpecClusterConfigSpecNodePoolsPropertiesToTerraform(struct?: AksClusterSpecClusterConfigSpecNodePoolsProperties | cdktf.IResolvable): any {
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
    kubelet_config: cdktf.listMapper(aksClusterSpecClusterConfigSpecNodePoolsPropertiesKubeletConfigToTerraform, true)(struct!.kubeletConfig),
    linux_os_config: cdktf.listMapper(aksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigToTerraform, true)(struct!.linuxOsConfig),
    upgrade_settings: cdktf.listMapper(aksClusterSpecClusterConfigSpecNodePoolsPropertiesUpgradeSettingsToTerraform, true)(struct!.upgradeSettings),
  }
}


export function aksClusterSpecClusterConfigSpecNodePoolsPropertiesToHclTerraform(struct?: AksClusterSpecClusterConfigSpecNodePoolsProperties | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecNodePoolsPropertiesKubeletConfigToHclTerraform, true)(struct!.kubeletConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecNodePoolsPropertiesKubeletConfigList",
    },
    linux_os_config: {
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigToHclTerraform, true)(struct!.linuxOsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigList",
    },
    upgrade_settings: {
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecNodePoolsPropertiesUpgradeSettingsToHclTerraform, true)(struct!.upgradeSettings),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecNodePoolsPropertiesUpgradeSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterSpecClusterConfigSpecNodePoolsPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecNodePoolsProperties | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecNodePoolsProperties | cdktf.IResolvable | undefined) {
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
  private _kubeletConfig = new AksClusterSpecClusterConfigSpecNodePoolsPropertiesKubeletConfigList(this, "kubelet_config", false);
  public get kubeletConfig() {
    return this._kubeletConfig;
  }
  public putKubeletConfig(value: AksClusterSpecClusterConfigSpecNodePoolsPropertiesKubeletConfig[] | cdktf.IResolvable) {
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
  private _linuxOsConfig = new AksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfigList(this, "linux_os_config", false);
  public get linuxOsConfig() {
    return this._linuxOsConfig;
  }
  public putLinuxOsConfig(value: AksClusterSpecClusterConfigSpecNodePoolsPropertiesLinuxOsConfig[] | cdktf.IResolvable) {
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
  private _upgradeSettings = new AksClusterSpecClusterConfigSpecNodePoolsPropertiesUpgradeSettingsList(this, "upgrade_settings", false);
  public get upgradeSettings() {
    return this._upgradeSettings;
  }
  public putUpgradeSettings(value: AksClusterSpecClusterConfigSpecNodePoolsPropertiesUpgradeSettings[] | cdktf.IResolvable) {
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

export class AksClusterSpecClusterConfigSpecNodePoolsPropertiesList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecNodePoolsProperties[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecNodePoolsPropertiesOutputReference {
    return new AksClusterSpecClusterConfigSpecNodePoolsPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpecNodePools {
  /**
  * The AKS node pool api version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#apiversion AksCluster#apiversion}
  */
  readonly apiversion: string;
  /**
  * AKS cluster location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#location AksCluster#location}
  */
  readonly location?: string;
  /**
  * The AKS node pool name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#name AksCluster#name}
  */
  readonly name: string;
  /**
  * The AKS node pool type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#type AksCluster#type}
  */
  readonly type?: string;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#properties AksCluster#properties}
  */
  readonly properties: AksClusterSpecClusterConfigSpecNodePoolsProperties[] | cdktf.IResolvable;
}

export function aksClusterSpecClusterConfigSpecNodePoolsToTerraform(struct?: AksClusterSpecClusterConfigSpecNodePools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apiversion: cdktf.stringToTerraform(struct!.apiversion),
    location: cdktf.stringToTerraform(struct!.location),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    properties: cdktf.listMapper(aksClusterSpecClusterConfigSpecNodePoolsPropertiesToTerraform, true)(struct!.properties),
  }
}


export function aksClusterSpecClusterConfigSpecNodePoolsToHclTerraform(struct?: AksClusterSpecClusterConfigSpecNodePools | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecNodePoolsPropertiesToHclTerraform, true)(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecNodePoolsPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterSpecClusterConfigSpecNodePoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpecNodePools | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpecNodePools | cdktf.IResolvable | undefined) {
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
  private _properties = new AksClusterSpecClusterConfigSpecNodePoolsPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
  public putProperties(value: AksClusterSpecClusterConfigSpecNodePoolsProperties[] | cdktf.IResolvable) {
    this._properties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}

export class AksClusterSpecClusterConfigSpecNodePoolsList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpecNodePools[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecNodePoolsOutputReference {
    return new AksClusterSpecClusterConfigSpecNodePoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfigSpec {
  /**
  * Resource Group for the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#resource_group_name AksCluster#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * The AKS subscription id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#subscription_id AksCluster#subscription_id}
  */
  readonly subscriptionId?: string;
  /**
  * maintenance_configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#maintenance_configurations AksCluster#maintenance_configurations}
  */
  readonly maintenanceConfigurations?: AksClusterSpecClusterConfigSpecMaintenanceConfigurations[] | cdktf.IResolvable;
  /**
  * managed_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#managed_cluster AksCluster#managed_cluster}
  */
  readonly managedCluster?: AksClusterSpecClusterConfigSpecManagedCluster[] | cdktf.IResolvable;
  /**
  * node_pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#node_pools AksCluster#node_pools}
  */
  readonly nodePools: AksClusterSpecClusterConfigSpecNodePools[] | cdktf.IResolvable;
}

export function aksClusterSpecClusterConfigSpecToTerraform(struct?: AksClusterSpecClusterConfigSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
    maintenance_configurations: cdktf.listMapper(aksClusterSpecClusterConfigSpecMaintenanceConfigurationsToTerraform, true)(struct!.maintenanceConfigurations),
    managed_cluster: cdktf.listMapper(aksClusterSpecClusterConfigSpecManagedClusterToTerraform, true)(struct!.managedCluster),
    node_pools: cdktf.listMapper(aksClusterSpecClusterConfigSpecNodePoolsToTerraform, true)(struct!.nodePools),
  }
}


export function aksClusterSpecClusterConfigSpecToHclTerraform(struct?: AksClusterSpecClusterConfigSpec | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecMaintenanceConfigurationsToHclTerraform, true)(struct!.maintenanceConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecMaintenanceConfigurationsList",
    },
    managed_cluster: {
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecManagedClusterToHclTerraform, true)(struct!.managedCluster),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecManagedClusterList",
    },
    node_pools: {
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecNodePoolsToHclTerraform, true)(struct!.nodePools),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecNodePoolsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterSpecClusterConfigSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfigSpec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfigSpec | cdktf.IResolvable | undefined) {
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
  private _maintenanceConfigurations = new AksClusterSpecClusterConfigSpecMaintenanceConfigurationsList(this, "maintenance_configurations", false);
  public get maintenanceConfigurations() {
    return this._maintenanceConfigurations;
  }
  public putMaintenanceConfigurations(value: AksClusterSpecClusterConfigSpecMaintenanceConfigurations[] | cdktf.IResolvable) {
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
  private _managedCluster = new AksClusterSpecClusterConfigSpecManagedClusterList(this, "managed_cluster", false);
  public get managedCluster() {
    return this._managedCluster;
  }
  public putManagedCluster(value: AksClusterSpecClusterConfigSpecManagedCluster[] | cdktf.IResolvable) {
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
  private _nodePools = new AksClusterSpecClusterConfigSpecNodePoolsList(this, "node_pools", false);
  public get nodePools() {
    return this._nodePools;
  }
  public putNodePools(value: AksClusterSpecClusterConfigSpecNodePools[] | cdktf.IResolvable) {
    this._nodePools.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolsInput() {
    return this._nodePools.internalValue;
  }
}

export class AksClusterSpecClusterConfigSpecList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfigSpec[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigSpecOutputReference {
    return new AksClusterSpecClusterConfigSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecClusterConfig {
  /**
  * apiversion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#apiversion AksCluster#apiversion}
  */
  readonly apiversion: string;
  /**
  * kind
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#kind AksCluster#kind}
  */
  readonly kind?: string;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#metadata AksCluster#metadata}
  */
  readonly metadata: AksClusterSpecClusterConfigMetadata[] | cdktf.IResolvable;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#spec AksCluster#spec}
  */
  readonly spec: AksClusterSpecClusterConfigSpec[] | cdktf.IResolvable;
}

export function aksClusterSpecClusterConfigToTerraform(struct?: AksClusterSpecClusterConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apiversion: cdktf.stringToTerraform(struct!.apiversion),
    kind: cdktf.stringToTerraform(struct!.kind),
    metadata: cdktf.listMapper(aksClusterSpecClusterConfigMetadataToTerraform, true)(struct!.metadata),
    spec: cdktf.listMapper(aksClusterSpecClusterConfigSpecToTerraform, true)(struct!.spec),
  }
}


export function aksClusterSpecClusterConfigToHclTerraform(struct?: AksClusterSpecClusterConfig | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigMetadataToHclTerraform, true)(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigMetadataList",
    },
    spec: {
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigSpecToHclTerraform, true)(struct!.spec),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterSpecClusterConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecClusterConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecClusterConfig | cdktf.IResolvable | undefined) {
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
  private _metadata = new AksClusterSpecClusterConfigMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: AksClusterSpecClusterConfigMetadata[] | cdktf.IResolvable) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new AksClusterSpecClusterConfigSpecList(this, "spec", false);
  public get spec() {
    return this._spec;
  }
  public putSpec(value: AksClusterSpecClusterConfigSpec[] | cdktf.IResolvable) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}

export class AksClusterSpecClusterConfigList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecClusterConfig[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecClusterConfigOutputReference {
    return new AksClusterSpecClusterConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecSharingProjects {
  /**
  * name of the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#name AksCluster#name}
  */
  readonly name?: string;
}

export function aksClusterSpecSharingProjectsToTerraform(struct?: AksClusterSpecSharingProjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function aksClusterSpecSharingProjectsToHclTerraform(struct?: AksClusterSpecSharingProjects | cdktf.IResolvable): any {
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

export class AksClusterSpecSharingProjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecSharingProjects | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecSharingProjects | cdktf.IResolvable | undefined) {
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

export class AksClusterSpecSharingProjectsList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecSharingProjects[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecSharingProjectsOutputReference {
    return new AksClusterSpecSharingProjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecSharing {
  /**
  * flag to specify if sharing is enabled for resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#enabled AksCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * projects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#projects AksCluster#projects}
  */
  readonly projects?: AksClusterSpecSharingProjects[] | cdktf.IResolvable;
}

export function aksClusterSpecSharingToTerraform(struct?: AksClusterSpecSharingOutputReference | AksClusterSpecSharing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    projects: cdktf.listMapper(aksClusterSpecSharingProjectsToTerraform, true)(struct!.projects),
  }
}


export function aksClusterSpecSharingToHclTerraform(struct?: AksClusterSpecSharingOutputReference | AksClusterSpecSharing): any {
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
      value: cdktf.listMapperHcl(aksClusterSpecSharingProjectsToHclTerraform, true)(struct!.projects),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecSharingProjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterSpecSharingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterSpecSharing | undefined {
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

  public set internalValue(value: AksClusterSpecSharing | undefined) {
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
  private _projects = new AksClusterSpecSharingProjectsList(this, "projects", false);
  public get projects() {
    return this._projects;
  }
  public putProjects(value: AksClusterSpecSharingProjects[] | cdktf.IResolvable) {
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
export interface AksClusterSpecSystemComponentsPlacementDaemonsetOverrideTolerations {
  /**
  * indicates the taint effect to match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#effect AksCluster#effect}
  */
  readonly effect?: string;
  /**
  * the taint key that the toleration applies to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#key AksCluster#key}
  */
  readonly key?: string;
  /**
  * represents a key's relationship to the value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#operator AksCluster#operator}
  */
  readonly operator?: string;
  /**
  * represents the period of time the toleration tolerates the taint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#toleration_seconds AksCluster#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * the taint value the toleration matches to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#value AksCluster#value}
  */
  readonly value?: string;
}

export function aksClusterSpecSystemComponentsPlacementDaemonsetOverrideTolerationsToTerraform(struct?: AksClusterSpecSystemComponentsPlacementDaemonsetOverrideTolerations | cdktf.IResolvable): any {
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


export function aksClusterSpecSystemComponentsPlacementDaemonsetOverrideTolerationsToHclTerraform(struct?: AksClusterSpecSystemComponentsPlacementDaemonsetOverrideTolerations | cdktf.IResolvable): any {
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

export class AksClusterSpecSystemComponentsPlacementDaemonsetOverrideTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecSystemComponentsPlacementDaemonsetOverrideTolerations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecSystemComponentsPlacementDaemonsetOverrideTolerations | cdktf.IResolvable | undefined) {
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

export class AksClusterSpecSystemComponentsPlacementDaemonsetOverrideTolerationsList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecSystemComponentsPlacementDaemonsetOverrideTolerations[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecSystemComponentsPlacementDaemonsetOverrideTolerationsOutputReference {
    return new AksClusterSpecSystemComponentsPlacementDaemonsetOverrideTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecSystemComponentsPlacementDaemonsetOverride {
  /**
  * enables node selection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#node_selection_enabled AksCluster#node_selection_enabled}
  */
  readonly nodeSelectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * tolerations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#tolerations AksCluster#tolerations}
  */
  readonly tolerations?: AksClusterSpecSystemComponentsPlacementDaemonsetOverrideTolerations[] | cdktf.IResolvable;
}

export function aksClusterSpecSystemComponentsPlacementDaemonsetOverrideToTerraform(struct?: AksClusterSpecSystemComponentsPlacementDaemonsetOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selection_enabled: cdktf.booleanToTerraform(struct!.nodeSelectionEnabled),
    tolerations: cdktf.listMapper(aksClusterSpecSystemComponentsPlacementDaemonsetOverrideTolerationsToTerraform, true)(struct!.tolerations),
  }
}


export function aksClusterSpecSystemComponentsPlacementDaemonsetOverrideToHclTerraform(struct?: AksClusterSpecSystemComponentsPlacementDaemonsetOverride | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(aksClusterSpecSystemComponentsPlacementDaemonsetOverrideTolerationsToHclTerraform, true)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecSystemComponentsPlacementDaemonsetOverrideTolerationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterSpecSystemComponentsPlacementDaemonsetOverrideOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecSystemComponentsPlacementDaemonsetOverride | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecSystemComponentsPlacementDaemonsetOverride | cdktf.IResolvable | undefined) {
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
  private _tolerations = new AksClusterSpecSystemComponentsPlacementDaemonsetOverrideTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: AksClusterSpecSystemComponentsPlacementDaemonsetOverrideTolerations[] | cdktf.IResolvable) {
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

export class AksClusterSpecSystemComponentsPlacementDaemonsetOverrideList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecSystemComponentsPlacementDaemonsetOverride[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecSystemComponentsPlacementDaemonsetOverrideOutputReference {
    return new AksClusterSpecSystemComponentsPlacementDaemonsetOverrideOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecSystemComponentsPlacementTolerations {
  /**
  * indicates the taint effect to match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#effect AksCluster#effect}
  */
  readonly effect?: string;
  /**
  * the taint key that the toleration applies to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#key AksCluster#key}
  */
  readonly key?: string;
  /**
  * represents a key's relationship to the value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#operator AksCluster#operator}
  */
  readonly operator?: string;
  /**
  * represents the period of time the toleration tolerates the taint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#toleration_seconds AksCluster#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * the taint value the toleration matches to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#value AksCluster#value}
  */
  readonly value?: string;
}

export function aksClusterSpecSystemComponentsPlacementTolerationsToTerraform(struct?: AksClusterSpecSystemComponentsPlacementTolerations | cdktf.IResolvable): any {
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


export function aksClusterSpecSystemComponentsPlacementTolerationsToHclTerraform(struct?: AksClusterSpecSystemComponentsPlacementTolerations | cdktf.IResolvable): any {
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

export class AksClusterSpecSystemComponentsPlacementTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpecSystemComponentsPlacementTolerations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpecSystemComponentsPlacementTolerations | cdktf.IResolvable | undefined) {
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

export class AksClusterSpecSystemComponentsPlacementTolerationsList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpecSystemComponentsPlacementTolerations[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecSystemComponentsPlacementTolerationsOutputReference {
    return new AksClusterSpecSystemComponentsPlacementTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterSpecSystemComponentsPlacement {
  /**
  * Key-Value pairs insuring pods to be scheduled on desired nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#node_selector AksCluster#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * daemonset_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#daemonset_override AksCluster#daemonset_override}
  */
  readonly daemonsetOverride?: AksClusterSpecSystemComponentsPlacementDaemonsetOverride[] | cdktf.IResolvable;
  /**
  * tolerations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#tolerations AksCluster#tolerations}
  */
  readonly tolerations?: AksClusterSpecSystemComponentsPlacementTolerations[] | cdktf.IResolvable;
}

export function aksClusterSpecSystemComponentsPlacementToTerraform(struct?: AksClusterSpecSystemComponentsPlacementOutputReference | AksClusterSpecSystemComponentsPlacement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    daemonset_override: cdktf.listMapper(aksClusterSpecSystemComponentsPlacementDaemonsetOverrideToTerraform, true)(struct!.daemonsetOverride),
    tolerations: cdktf.listMapper(aksClusterSpecSystemComponentsPlacementTolerationsToTerraform, true)(struct!.tolerations),
  }
}


export function aksClusterSpecSystemComponentsPlacementToHclTerraform(struct?: AksClusterSpecSystemComponentsPlacementOutputReference | AksClusterSpecSystemComponentsPlacement): any {
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
      value: cdktf.listMapperHcl(aksClusterSpecSystemComponentsPlacementDaemonsetOverrideToHclTerraform, true)(struct!.daemonsetOverride),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecSystemComponentsPlacementDaemonsetOverrideList",
    },
    tolerations: {
      value: cdktf.listMapperHcl(aksClusterSpecSystemComponentsPlacementTolerationsToHclTerraform, true)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecSystemComponentsPlacementTolerationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterSpecSystemComponentsPlacementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterSpecSystemComponentsPlacement | undefined {
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

  public set internalValue(value: AksClusterSpecSystemComponentsPlacement | undefined) {
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
  private _daemonsetOverride = new AksClusterSpecSystemComponentsPlacementDaemonsetOverrideList(this, "daemonset_override", false);
  public get daemonsetOverride() {
    return this._daemonsetOverride;
  }
  public putDaemonsetOverride(value: AksClusterSpecSystemComponentsPlacementDaemonsetOverride[] | cdktf.IResolvable) {
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
  private _tolerations = new AksClusterSpecSystemComponentsPlacementTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: AksClusterSpecSystemComponentsPlacementTolerations[] | cdktf.IResolvable) {
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
export interface AksClusterSpec {
  /**
  * Blueprint to be associated with the cluster. Default will be default-aks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#blueprint AksCluster#blueprint}
  */
  readonly blueprint?: string;
  /**
  * Blueprint version to be associated with the cluster. Default will be the latest version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#blueprintversion AksCluster#blueprintversion}
  */
  readonly blueprintversion?: string;
  /**
  * Cloud credentials provider used to create and manage the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#cloudprovider AksCluster#cloudprovider}
  */
  readonly cloudprovider: string;
  /**
  * AKS Cluster type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#type AksCluster#type}
  */
  readonly type: string;
  /**
  * cluster_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#cluster_config AksCluster#cluster_config}
  */
  readonly clusterConfig: AksClusterSpecClusterConfig[] | cdktf.IResolvable;
  /**
  * sharing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#sharing AksCluster#sharing}
  */
  readonly sharing?: AksClusterSpecSharing;
  /**
  * system_components_placement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#system_components_placement AksCluster#system_components_placement}
  */
  readonly systemComponentsPlacement?: AksClusterSpecSystemComponentsPlacement;
}

export function aksClusterSpecToTerraform(struct?: AksClusterSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blueprint: cdktf.stringToTerraform(struct!.blueprint),
    blueprintversion: cdktf.stringToTerraform(struct!.blueprintversion),
    cloudprovider: cdktf.stringToTerraform(struct!.cloudprovider),
    type: cdktf.stringToTerraform(struct!.type),
    cluster_config: cdktf.listMapper(aksClusterSpecClusterConfigToTerraform, true)(struct!.clusterConfig),
    sharing: aksClusterSpecSharingToTerraform(struct!.sharing),
    system_components_placement: aksClusterSpecSystemComponentsPlacementToTerraform(struct!.systemComponentsPlacement),
  }
}


export function aksClusterSpecToHclTerraform(struct?: AksClusterSpec | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(aksClusterSpecClusterConfigToHclTerraform, true)(struct!.clusterConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecClusterConfigList",
    },
    sharing: {
      value: aksClusterSpecSharingToHclTerraform(struct!.sharing),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecSharingList",
    },
    system_components_placement: {
      value: aksClusterSpecSystemComponentsPlacementToHclTerraform(struct!.systemComponentsPlacement),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterSpecSystemComponentsPlacementList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterSpec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterSpec | cdktf.IResolvable | undefined) {
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
  private _clusterConfig = new AksClusterSpecClusterConfigList(this, "cluster_config", false);
  public get clusterConfig() {
    return this._clusterConfig;
  }
  public putClusterConfig(value: AksClusterSpecClusterConfig[] | cdktf.IResolvable) {
    this._clusterConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterConfigInput() {
    return this._clusterConfig.internalValue;
  }

  // sharing - computed: false, optional: true, required: false
  private _sharing = new AksClusterSpecSharingOutputReference(this, "sharing");
  public get sharing() {
    return this._sharing;
  }
  public putSharing(value: AksClusterSpecSharing) {
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
  private _systemComponentsPlacement = new AksClusterSpecSystemComponentsPlacementOutputReference(this, "system_components_placement");
  public get systemComponentsPlacement() {
    return this._systemComponentsPlacement;
  }
  public putSystemComponentsPlacement(value: AksClusterSpecSystemComponentsPlacement) {
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

export class AksClusterSpecList extends cdktf.ComplexList {
  public internalValue? : AksClusterSpec[] | cdktf.IResolvable

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
  public get(index: number): AksClusterSpecOutputReference {
    return new AksClusterSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#create AksCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#delete AksCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#update AksCluster#update}
  */
  readonly update?: string;
}

export function aksClusterTimeoutsToTerraform(struct?: AksClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function aksClusterTimeoutsToHclTerraform(struct?: AksClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AksClusterTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster rafay_aks_cluster}
*/
export class AksCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rafay_aks_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AksCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AksCluster to import
  * @param importFromId The id of the existing AksCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AksCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rafay_aks_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/aks_cluster rafay_aks_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AksClusterConfig
  */
  public constructor(scope: Construct, id: string, config: AksClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'rafay_aks_cluster',
      terraformGeneratorMetadata: {
        providerName: 'rafay',
        providerVersion: '1.1.52'
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
  private _metadata = new AksClusterMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: AksClusterMetadata[] | cdktf.IResolvable) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new AksClusterSpecList(this, "spec", false);
  public get spec() {
    return this._spec;
  }
  public putSpec(value: AksClusterSpec[] | cdktf.IResolvable) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AksClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AksClusterTimeouts) {
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
      metadata: cdktf.listMapper(aksClusterMetadataToTerraform, true)(this._metadata.internalValue),
      spec: cdktf.listMapper(aksClusterSpecToTerraform, true)(this._spec.internalValue),
      timeouts: aksClusterTimeoutsToTerraform(this._timeouts.internalValue),
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
        value: cdktf.listMapperHcl(aksClusterMetadataToHclTerraform, true)(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AksClusterMetadataList",
      },
      spec: {
        value: cdktf.listMapperHcl(aksClusterSpecToHclTerraform, true)(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AksClusterSpecList",
      },
      timeouts: {
        value: aksClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AksClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
