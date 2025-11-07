// https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/report
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cloud type (Required parameter for Compliance report and Cloud Security Assessment report)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/report#cloud_type Report#cloud_type}
  */
  readonly cloudType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/report#id Report#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Report Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/report#name Report#name}
  */
  readonly name: string;
  /**
  * Report type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/report#report_type Report#report_type}
  */
  readonly reportType: string;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/report#target Report#target}
  */
  readonly target: ReportTarget;
}
export interface ReportCounts {
}

export function reportCountsToTerraform(struct?: ReportCounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function reportCountsToHclTerraform(struct?: ReportCounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ReportCountsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ReportCounts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportCounts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // failed - computed: true, optional: false, required: false
  public get failed() {
    return this.getNumberAttribute('failed');
  }

  // high_severity_failed - computed: true, optional: false, required: false
  public get highSeverityFailed() {
    return this.getNumberAttribute('high_severity_failed');
  }

  // low_severity_failed - computed: true, optional: false, required: false
  public get lowSeverityFailed() {
    return this.getNumberAttribute('low_severity_failed');
  }

  // medium_severity_failed - computed: true, optional: false, required: false
  public get mediumSeverityFailed() {
    return this.getNumberAttribute('medium_severity_failed');
  }

  // passed - computed: true, optional: false, required: false
  public get passed() {
    return this.getNumberAttribute('passed');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }
}

export class ReportCountsList extends cdktf.ComplexList {

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
  public get(index: number): ReportCountsOutputReference {
    return new ReportCountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportTargetTimeRangeAbsolute {
  /**
  * End time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/report#end Report#end}
  */
  readonly end: number;
  /**
  * Start time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/report#start Report#start}
  */
  readonly start: number;
}

export function reportTargetTimeRangeAbsoluteToTerraform(struct?: ReportTargetTimeRangeAbsolute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.numberToTerraform(struct!.end),
    start: cdktf.numberToTerraform(struct!.start),
  }
}


export function reportTargetTimeRangeAbsoluteToHclTerraform(struct?: ReportTargetTimeRangeAbsolute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.numberToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start: {
      value: cdktf.numberToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportTargetTimeRangeAbsoluteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportTargetTimeRangeAbsolute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ReportTargetTimeRangeAbsolute | cdktf.IResolvable | undefined) {
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

  // end - computed: false, optional: false, required: true
  private _end?: number; 
  public get end() {
    return this.getNumberAttribute('end');
  }
  public set end(value: number) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: false, required: true
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class ReportTargetTimeRangeAbsoluteList extends cdktf.ComplexList {
  public internalValue? : ReportTargetTimeRangeAbsolute[] | cdktf.IResolvable

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
  public get(index: number): ReportTargetTimeRangeAbsoluteOutputReference {
    return new ReportTargetTimeRangeAbsoluteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportTargetTimeRangeRelative {
  /**
  * The time number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/report#amount Report#amount}
  */
  readonly amount: number;
  /**
  * The time unit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/report#unit Report#unit}
  */
  readonly unit: string;
}

export function reportTargetTimeRangeRelativeToTerraform(struct?: ReportTargetTimeRangeRelative | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amount: cdktf.numberToTerraform(struct!.amount),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function reportTargetTimeRangeRelativeToHclTerraform(struct?: ReportTargetTimeRangeRelative | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    amount: {
      value: cdktf.numberToHclTerraform(struct!.amount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportTargetTimeRangeRelativeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportTargetTimeRangeRelative | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amount !== undefined) {
      hasAnyValues = true;
      internalValueResult.amount = this._amount;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportTargetTimeRangeRelative | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amount = undefined;
      this._unit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amount = value.amount;
      this._unit = value.unit;
    }
  }

  // amount - computed: false, optional: false, required: true
  private _amount?: number; 
  public get amount() {
    return this.getNumberAttribute('amount');
  }
  public set amount(value: number) {
    this._amount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get amountInput() {
    return this._amount;
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}

export class ReportTargetTimeRangeRelativeList extends cdktf.ComplexList {
  public internalValue? : ReportTargetTimeRangeRelative[] | cdktf.IResolvable

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
  public get(index: number): ReportTargetTimeRangeRelativeOutputReference {
    return new ReportTargetTimeRangeRelativeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportTargetTimeRangeToNow {
  /**
  * The time unit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/report#unit Report#unit}
  */
  readonly unit: string;
}

export function reportTargetTimeRangeToNowToTerraform(struct?: ReportTargetTimeRangeToNow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function reportTargetTimeRangeToNowToHclTerraform(struct?: ReportTargetTimeRangeToNow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportTargetTimeRangeToNowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportTargetTimeRangeToNow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportTargetTimeRangeToNow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}

export class ReportTargetTimeRangeToNowList extends cdktf.ComplexList {
  public internalValue? : ReportTargetTimeRangeToNow[] | cdktf.IResolvable

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
  public get(index: number): ReportTargetTimeRangeToNowOutputReference {
    return new ReportTargetTimeRangeToNowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportTargetTimeRange {
  /**
  * absolute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/report#absolute Report#absolute}
  */
  readonly absolute?: ReportTargetTimeRangeAbsolute[] | cdktf.IResolvable;
  /**
  * relative block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/report#relative Report#relative}
  */
  readonly relative?: ReportTargetTimeRangeRelative[] | cdktf.IResolvable;
  /**
  * to_now block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/report#to_now Report#to_now}
  */
  readonly toNow?: ReportTargetTimeRangeToNow[] | cdktf.IResolvable;
}

export function reportTargetTimeRangeToTerraform(struct?: ReportTargetTimeRangeOutputReference | ReportTargetTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    absolute: cdktf.listMapper(reportTargetTimeRangeAbsoluteToTerraform, true)(struct!.absolute),
    relative: cdktf.listMapper(reportTargetTimeRangeRelativeToTerraform, true)(struct!.relative),
    to_now: cdktf.listMapper(reportTargetTimeRangeToNowToTerraform, true)(struct!.toNow),
  }
}


export function reportTargetTimeRangeToHclTerraform(struct?: ReportTargetTimeRangeOutputReference | ReportTargetTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    absolute: {
      value: cdktf.listMapperHcl(reportTargetTimeRangeAbsoluteToHclTerraform, true)(struct!.absolute),
      isBlock: true,
      type: "list",
      storageClassType: "ReportTargetTimeRangeAbsoluteList",
    },
    relative: {
      value: cdktf.listMapperHcl(reportTargetTimeRangeRelativeToHclTerraform, true)(struct!.relative),
      isBlock: true,
      type: "list",
      storageClassType: "ReportTargetTimeRangeRelativeList",
    },
    to_now: {
      value: cdktf.listMapperHcl(reportTargetTimeRangeToNowToHclTerraform, true)(struct!.toNow),
      isBlock: true,
      type: "list",
      storageClassType: "ReportTargetTimeRangeToNowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportTargetTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ReportTargetTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._absolute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.absolute = this._absolute?.internalValue;
    }
    if (this._relative?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative?.internalValue;
    }
    if (this._toNow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toNow = this._toNow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportTargetTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._absolute.internalValue = undefined;
      this._relative.internalValue = undefined;
      this._toNow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._absolute.internalValue = value.absolute;
      this._relative.internalValue = value.relative;
      this._toNow.internalValue = value.toNow;
    }
  }

  // absolute - computed: false, optional: true, required: false
  private _absolute = new ReportTargetTimeRangeAbsoluteList(this, "absolute", false);
  public get absolute() {
    return this._absolute;
  }
  public putAbsolute(value: ReportTargetTimeRangeAbsolute[] | cdktf.IResolvable) {
    this._absolute.internalValue = value;
  }
  public resetAbsolute() {
    this._absolute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get absoluteInput() {
    return this._absolute.internalValue;
  }

  // relative - computed: false, optional: true, required: false
  private _relative = new ReportTargetTimeRangeRelativeList(this, "relative", false);
  public get relative() {
    return this._relative;
  }
  public putRelative(value: ReportTargetTimeRangeRelative[] | cdktf.IResolvable) {
    this._relative.internalValue = value;
  }
  public resetRelative() {
    this._relative.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeInput() {
    return this._relative.internalValue;
  }

  // to_now - computed: false, optional: true, required: false
  private _toNow = new ReportTargetTimeRangeToNowList(this, "to_now", false);
  public get toNow() {
    return this._toNow;
  }
  public putToNow(value: ReportTargetTimeRangeToNow[] | cdktf.IResolvable) {
    this._toNow.internalValue = value;
  }
  public resetToNow() {
    this._toNow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toNowInput() {
    return this._toNow.internalValue;
  }
}
export interface ReportTarget {
  /**
  * List of cloud account groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/report#account_groups Report#account_groups}
  */
  readonly accountGroups?: string[];
  /**
  * List of cloud accounts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/report#accounts Report#accounts}
  */
  readonly accounts?: string[];
  /**
  * List of compliance standard IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/report#compliance_standard_ids Report#compliance_standard_ids}
  */
  readonly complianceStandardIds?: string[];
  /**
  * Business unit detailed report compression enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/report#compression_enabled Report#compression_enabled}
  */
  readonly compressionEnabled?: boolean | cdktf.IResolvable;
  /**
  * True = download now
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/report#download_now Report#download_now}
  */
  readonly downloadNow?: boolean | cdktf.IResolvable;
  /**
  * Notification template id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/report#notification_template_id Report#notification_template_id}
  */
  readonly notificationTemplateId?: string;
  /**
  * List of email addresses to receive notification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/report#notify_to Report#notify_to}
  */
  readonly notifyTo?: string[];
  /**
  * List of regions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/report#regions Report#regions}
  */
  readonly regions?: string[];
  /**
  * List of resource groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/report#resource_groups Report#resource_groups}
  */
  readonly resourceGroups?: string[];
  /**
  * Recurring report schedule in RRULE format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/report#schedule Report#schedule}
  */
  readonly schedule?: string;
  /**
  * Report scheduling enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/report#schedule_enabled Report#schedule_enabled}
  */
  readonly scheduleEnabled?: boolean | cdktf.IResolvable;
  /**
  * time_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/report#time_range Report#time_range}
  */
  readonly timeRange?: ReportTargetTimeRange;
}

export function reportTargetToTerraform(struct?: ReportTargetOutputReference | ReportTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accountGroups),
    accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accounts),
    compliance_standard_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.complianceStandardIds),
    compression_enabled: cdktf.booleanToTerraform(struct!.compressionEnabled),
    download_now: cdktf.booleanToTerraform(struct!.downloadNow),
    notification_template_id: cdktf.stringToTerraform(struct!.notificationTemplateId),
    notify_to: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notifyTo),
    regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regions),
    resource_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceGroups),
    schedule: cdktf.stringToTerraform(struct!.schedule),
    schedule_enabled: cdktf.booleanToTerraform(struct!.scheduleEnabled),
    time_range: reportTargetTimeRangeToTerraform(struct!.timeRange),
  }
}


export function reportTargetToHclTerraform(struct?: ReportTargetOutputReference | ReportTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accountGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    accounts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accounts),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    compliance_standard_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.complianceStandardIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    compression_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.compressionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    download_now: {
      value: cdktf.booleanToHclTerraform(struct!.downloadNow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notification_template_id: {
      value: cdktf.stringToHclTerraform(struct!.notificationTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notify_to: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notifyTo),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    resource_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    schedule: {
      value: cdktf.stringToHclTerraform(struct!.schedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.scheduleEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    time_range: {
      value: reportTargetTimeRangeToHclTerraform(struct!.timeRange),
      isBlock: true,
      type: "list",
      storageClassType: "ReportTargetTimeRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ReportTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountGroups = this._accountGroups;
    }
    if (this._accounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.accounts = this._accounts;
    }
    if (this._complianceStandardIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.complianceStandardIds = this._complianceStandardIds;
    }
    if (this._compressionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionEnabled = this._compressionEnabled;
    }
    if (this._downloadNow !== undefined) {
      hasAnyValues = true;
      internalValueResult.downloadNow = this._downloadNow;
    }
    if (this._notificationTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationTemplateId = this._notificationTemplateId;
    }
    if (this._notifyTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyTo = this._notifyTo;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    if (this._resourceGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroups = this._resourceGroups;
    }
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    if (this._scheduleEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleEnabled = this._scheduleEnabled;
    }
    if (this._timeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeRange = this._timeRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountGroups = undefined;
      this._accounts = undefined;
      this._complianceStandardIds = undefined;
      this._compressionEnabled = undefined;
      this._downloadNow = undefined;
      this._notificationTemplateId = undefined;
      this._notifyTo = undefined;
      this._regions = undefined;
      this._resourceGroups = undefined;
      this._schedule = undefined;
      this._scheduleEnabled = undefined;
      this._timeRange.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountGroups = value.accountGroups;
      this._accounts = value.accounts;
      this._complianceStandardIds = value.complianceStandardIds;
      this._compressionEnabled = value.compressionEnabled;
      this._downloadNow = value.downloadNow;
      this._notificationTemplateId = value.notificationTemplateId;
      this._notifyTo = value.notifyTo;
      this._regions = value.regions;
      this._resourceGroups = value.resourceGroups;
      this._schedule = value.schedule;
      this._scheduleEnabled = value.scheduleEnabled;
      this._timeRange.internalValue = value.timeRange;
    }
  }

  // account_groups - computed: false, optional: true, required: false
  private _accountGroups?: string[]; 
  public get accountGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('account_groups'));
  }
  public set accountGroups(value: string[]) {
    this._accountGroups = value;
  }
  public resetAccountGroups() {
    this._accountGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountGroupsInput() {
    return this._accountGroups;
  }

  // accounts - computed: false, optional: true, required: false
  private _accounts?: string[]; 
  public get accounts() {
    return cdktf.Fn.tolist(this.getListAttribute('accounts'));
  }
  public set accounts(value: string[]) {
    this._accounts = value;
  }
  public resetAccounts() {
    this._accounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountsInput() {
    return this._accounts;
  }

  // compliance_standard_ids - computed: false, optional: true, required: false
  private _complianceStandardIds?: string[]; 
  public get complianceStandardIds() {
    return cdktf.Fn.tolist(this.getListAttribute('compliance_standard_ids'));
  }
  public set complianceStandardIds(value: string[]) {
    this._complianceStandardIds = value;
  }
  public resetComplianceStandardIds() {
    this._complianceStandardIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceStandardIdsInput() {
    return this._complianceStandardIds;
  }

  // compression_enabled - computed: false, optional: true, required: false
  private _compressionEnabled?: boolean | cdktf.IResolvable; 
  public get compressionEnabled() {
    return this.getBooleanAttribute('compression_enabled');
  }
  public set compressionEnabled(value: boolean | cdktf.IResolvable) {
    this._compressionEnabled = value;
  }
  public resetCompressionEnabled() {
    this._compressionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionEnabledInput() {
    return this._compressionEnabled;
  }

  // download_now - computed: false, optional: true, required: false
  private _downloadNow?: boolean | cdktf.IResolvable; 
  public get downloadNow() {
    return this.getBooleanAttribute('download_now');
  }
  public set downloadNow(value: boolean | cdktf.IResolvable) {
    this._downloadNow = value;
  }
  public resetDownloadNow() {
    this._downloadNow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadNowInput() {
    return this._downloadNow;
  }

  // notification_template_id - computed: false, optional: true, required: false
  private _notificationTemplateId?: string; 
  public get notificationTemplateId() {
    return this.getStringAttribute('notification_template_id');
  }
  public set notificationTemplateId(value: string) {
    this._notificationTemplateId = value;
  }
  public resetNotificationTemplateId() {
    this._notificationTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTemplateIdInput() {
    return this._notificationTemplateId;
  }

  // notify_to - computed: false, optional: true, required: false
  private _notifyTo?: string[]; 
  public get notifyTo() {
    return cdktf.Fn.tolist(this.getListAttribute('notify_to'));
  }
  public set notifyTo(value: string[]) {
    this._notifyTo = value;
  }
  public resetNotifyTo() {
    this._notifyTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyToInput() {
    return this._notifyTo;
  }

  // regions - computed: false, optional: true, required: false
  private _regions?: string[]; 
  public get regions() {
    return cdktf.Fn.tolist(this.getListAttribute('regions'));
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  public resetRegions() {
    this._regions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // resource_groups - computed: false, optional: true, required: false
  private _resourceGroups?: string[]; 
  public get resourceGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('resource_groups'));
  }
  public set resourceGroups(value: string[]) {
    this._resourceGroups = value;
  }
  public resetResourceGroups() {
    this._resourceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupsInput() {
    return this._resourceGroups;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // schedule_enabled - computed: false, optional: true, required: false
  private _scheduleEnabled?: boolean | cdktf.IResolvable; 
  public get scheduleEnabled() {
    return this.getBooleanAttribute('schedule_enabled');
  }
  public set scheduleEnabled(value: boolean | cdktf.IResolvable) {
    this._scheduleEnabled = value;
  }
  public resetScheduleEnabled() {
    this._scheduleEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleEnabledInput() {
    return this._scheduleEnabled;
  }

  // time_range - computed: false, optional: true, required: false
  private _timeRange = new ReportTargetTimeRangeOutputReference(this, "time_range");
  public get timeRange() {
    return this._timeRange;
  }
  public putTimeRange(value: ReportTargetTimeRange) {
    this._timeRange.internalValue = value;
  }
  public resetTimeRange() {
    this._timeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRangeInput() {
    return this._timeRange.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/report prismacloud_report}
*/
export class Report extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prismacloud_report";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Report resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Report to import
  * @param importFromId The id of the existing Report that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/report#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Report to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prismacloud_report", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/report prismacloud_report} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReportConfig
  */
  public constructor(scope: Construct, id: string, config: ReportConfig) {
    super(scope, id, {
      terraformResourceType: 'prismacloud_report',
      terraformGeneratorMetadata: {
        providerName: 'prismacloud',
        providerVersion: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudType = config.cloudType;
    this._id = config.id;
    this._name = config.name;
    this._reportType = config.reportType;
    this._target.internalValue = config.target;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_type - computed: false, optional: true, required: false
  private _cloudType?: string; 
  public get cloudType() {
    return this.getStringAttribute('cloud_type');
  }
  public set cloudType(value: string) {
    this._cloudType = value;
  }
  public resetCloudType() {
    this._cloudType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudTypeInput() {
    return this._cloudType;
  }

  // compliance_standard_id - computed: true, optional: false, required: false
  public get complianceStandardId() {
    return this.getStringAttribute('compliance_standard_id');
  }

  // counts - computed: true, optional: false, required: false
  private _counts = new ReportCountsList(this, "counts", false);
  public get counts() {
    return this._counts;
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getNumberAttribute('created_on');
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

  // last_modified_by - computed: true, optional: false, required: false
  public get lastModifiedBy() {
    return this.getStringAttribute('last_modified_by');
  }

  // last_modified_on - computed: true, optional: false, required: false
  public get lastModifiedOn() {
    return this.getNumberAttribute('last_modified_on');
  }

  // last_scheduled - computed: true, optional: false, required: false
  public get lastScheduled() {
    return this.getNumberAttribute('last_scheduled');
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

  // next_schedule - computed: true, optional: false, required: false
  public get nextSchedule() {
    return this.getNumberAttribute('next_schedule');
  }

  // report_id - computed: true, optional: false, required: false
  public get reportId() {
    return this.getStringAttribute('report_id');
  }

  // report_type - computed: false, optional: false, required: true
  private _reportType?: string; 
  public get reportType() {
    return this.getStringAttribute('report_type');
  }
  public set reportType(value: string) {
    this._reportType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reportTypeInput() {
    return this._reportType;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // total_instance_count - computed: true, optional: false, required: false
  public get totalInstanceCount() {
    return this.getNumberAttribute('total_instance_count');
  }

  // target - computed: false, optional: false, required: true
  private _target = new ReportTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: ReportTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_type: cdktf.stringToTerraform(this._cloudType),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      report_type: cdktf.stringToTerraform(this._reportType),
      target: reportTargetToTerraform(this._target.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_type: {
        value: cdktf.stringToHclTerraform(this._cloudType),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      report_type: {
        value: cdktf.stringToHclTerraform(this._reportType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target: {
        value: reportTargetToHclTerraform(this._target.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ReportTargetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
