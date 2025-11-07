import * as cdktf from 'cdktf';
import { DashboardLayoutSectionsOptions,
dashboardLayoutSectionsOptionsToTerraform,
dashboardLayoutSectionsOptionsToHclTerraform,
DashboardLayoutSectionsOptionsOutputReference } from './structs0'
import { DashboardLayoutSectionsRows,
dashboardLayoutSectionsRowsToTerraform,
dashboardLayoutSectionsRowsToHclTerraform,
DashboardLayoutSectionsRowsList } from './structs400'
export interface DashboardLayoutSections {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#options Dashboard#options}
  */
  readonly options?: DashboardLayoutSectionsOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#rows Dashboard#rows}
  */
  readonly rows?: DashboardLayoutSectionsRows[] | cdktf.IResolvable;
}

export function dashboardLayoutSectionsToTerraform(struct?: DashboardLayoutSections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    options: dashboardLayoutSectionsOptionsToTerraform(struct!.options),
    rows: cdktf.listMapper(dashboardLayoutSectionsRowsToTerraform, false)(struct!.rows),
  }
}


export function dashboardLayoutSectionsToHclTerraform(struct?: DashboardLayoutSections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    options: {
      value: dashboardLayoutSectionsOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "struct",
      storageClassType: "DashboardLayoutSectionsOptions",
    },
    rows: {
      value: cdktf.listMapperHcl(dashboardLayoutSectionsRowsToHclTerraform, false)(struct!.rows),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardLayoutSectionsRowsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardLayoutSectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardLayoutSections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._rows?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rows = this._rows?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardLayoutSections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._options.internalValue = undefined;
      this._rows.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._options.internalValue = value.options;
      this._rows.internalValue = value.rows;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // options - computed: false, optional: true, required: false
  private _options = new DashboardLayoutSectionsOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DashboardLayoutSectionsOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // rows - computed: false, optional: true, required: false
  private _rows = new DashboardLayoutSectionsRowsList(this, "rows", false);
  public get rows() {
    return this._rows;
  }
  public putRows(value: DashboardLayoutSectionsRows[] | cdktf.IResolvable) {
    this._rows.internalValue = value;
  }
  public resetRows() {
    this._rows.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowsInput() {
    return this._rows.internalValue;
  }
}

export class DashboardLayoutSectionsList extends cdktf.ComplexList {
  public internalValue? : DashboardLayoutSections[] | cdktf.IResolvable

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
  public get(index: number): DashboardLayoutSectionsOutputReference {
    return new DashboardLayoutSectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardLayout {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#sections Dashboard#sections}
  */
  readonly sections?: DashboardLayoutSections[] | cdktf.IResolvable;
}

export function dashboardLayoutToTerraform(struct?: DashboardLayout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sections: cdktf.listMapper(dashboardLayoutSectionsToTerraform, false)(struct!.sections),
  }
}


export function dashboardLayoutToHclTerraform(struct?: DashboardLayout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sections: {
      value: cdktf.listMapperHcl(dashboardLayoutSectionsToHclTerraform, false)(struct!.sections),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardLayoutSectionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardLayoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DashboardLayout | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sections = this._sections?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardLayout | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sections.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sections.internalValue = value.sections;
    }
  }

  // sections - computed: false, optional: true, required: false
  private _sections = new DashboardLayoutSectionsList(this, "sections", false);
  public get sections() {
    return this._sections;
  }
  public putSections(value: DashboardLayoutSections[] | cdktf.IResolvable) {
    this._sections.internalValue = value;
  }
  public resetSections() {
    this._sections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sectionsInput() {
    return this._sections.internalValue;
  }
}
export interface DashboardTimeFrameAbsolute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#end Dashboard#end}
  */
  readonly end: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#start Dashboard#start}
  */
  readonly start: string;
}

export function dashboardTimeFrameAbsoluteToTerraform(struct?: DashboardTimeFrameAbsolute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function dashboardTimeFrameAbsoluteToHclTerraform(struct?: DashboardTimeFrameAbsolute | cdktf.IResolvable): any {
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

export class DashboardTimeFrameAbsoluteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DashboardTimeFrameAbsolute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DashboardTimeFrameAbsolute | cdktf.IResolvable | undefined) {
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
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: false, required: true
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface DashboardTimeFrameRelative {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#duration Dashboard#duration}
  */
  readonly duration: string;
}

export function dashboardTimeFrameRelativeToTerraform(struct?: DashboardTimeFrameRelative | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
  }
}


export function dashboardTimeFrameRelativeToHclTerraform(struct?: DashboardTimeFrameRelative | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardTimeFrameRelativeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DashboardTimeFrameRelative | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardTimeFrameRelative | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }
}
export interface DashboardTimeFrame {
  /**
  * Absolute time frame specifying a fixed start and end time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#absolute Dashboard#absolute}
  */
  readonly absolute?: DashboardTimeFrameAbsolute;
  /**
  * Relative time frame specifying a duration from the current time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#relative Dashboard#relative}
  */
  readonly relative?: DashboardTimeFrameRelative;
}

export function dashboardTimeFrameToTerraform(struct?: DashboardTimeFrame | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    absolute: dashboardTimeFrameAbsoluteToTerraform(struct!.absolute),
    relative: dashboardTimeFrameRelativeToTerraform(struct!.relative),
  }
}


export function dashboardTimeFrameToHclTerraform(struct?: DashboardTimeFrame | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    absolute: {
      value: dashboardTimeFrameAbsoluteToHclTerraform(struct!.absolute),
      isBlock: true,
      type: "struct",
      storageClassType: "DashboardTimeFrameAbsolute",
    },
    relative: {
      value: dashboardTimeFrameRelativeToHclTerraform(struct!.relative),
      isBlock: true,
      type: "struct",
      storageClassType: "DashboardTimeFrameRelative",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardTimeFrameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DashboardTimeFrame | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardTimeFrame | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._absolute.internalValue = undefined;
      this._relative.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._absolute.internalValue = value.absolute;
      this._relative.internalValue = value.relative;
    }
  }

  // absolute - computed: false, optional: true, required: false
  private _absolute = new DashboardTimeFrameAbsoluteOutputReference(this, "absolute");
  public get absolute() {
    return this._absolute;
  }
  public putAbsolute(value: DashboardTimeFrameAbsolute) {
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
  private _relative = new DashboardTimeFrameRelativeOutputReference(this, "relative");
  public get relative() {
    return this._relative;
  }
  public putRelative(value: DashboardTimeFrameRelative) {
    this._relative.internalValue = value;
  }
  public resetRelative() {
    this._relative.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeInput() {
    return this._relative.internalValue;
  }
}
export interface DashboardVariablesDefinitionMultiSelectSourceMetricLabel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#label Dashboard#label}
  */
  readonly label: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#metric_name Dashboard#metric_name}
  */
  readonly metricName?: string;
}

export function dashboardVariablesDefinitionMultiSelectSourceMetricLabelToTerraform(struct?: DashboardVariablesDefinitionMultiSelectSourceMetricLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
  }
}


export function dashboardVariablesDefinitionMultiSelectSourceMetricLabelToHclTerraform(struct?: DashboardVariablesDefinitionMultiSelectSourceMetricLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardVariablesDefinitionMultiSelectSourceMetricLabelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DashboardVariablesDefinitionMultiSelectSourceMetricLabel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardVariablesDefinitionMultiSelectSourceMetricLabel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._label = undefined;
      this._metricName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._label = value.label;
      this._metricName = value.metricName;
    }
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // metric_name - computed: false, optional: true, required: false
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  public resetMetricName() {
    this._metricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }
}
export interface DashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#log_regex Dashboard#log_regex}
  */
  readonly logRegex: string;
}

export function dashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldNameToTerraform(struct?: DashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_regex: cdktf.stringToTerraform(struct!.logRegex),
  }
}


export function dashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldNameToHclTerraform(struct?: DashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_regex: {
      value: cdktf.stringToHclTerraform(struct!.logRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.logRegex = this._logRegex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logRegex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logRegex = value.logRegex;
    }
  }

  // log_regex - computed: false, optional: false, required: true
  private _logRegex?: string; 
  public get logRegex() {
    return this.getStringAttribute('log_regex');
  }
  public set logRegex(value: string) {
    this._logRegex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logRegexInput() {
    return this._logRegex;
  }
}
export interface DashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldValueObservationField {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#keypath Dashboard#keypath}
  */
  readonly keypath: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#scope Dashboard#scope}
  */
  readonly scope: string;
}

export function dashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldValueObservationFieldToTerraform(struct?: DashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldValueObservationField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keypath: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keypath),
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}


export function dashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldValueObservationFieldToHclTerraform(struct?: DashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldValueObservationField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keypath: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keypath),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldValueObservationFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldValueObservationField | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keypath !== undefined) {
      hasAnyValues = true;
      internalValueResult.keypath = this._keypath;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldValueObservationField | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keypath = undefined;
      this._scope = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keypath = value.keypath;
      this._scope = value.scope;
    }
  }

  // keypath - computed: false, optional: false, required: true
  private _keypath?: string[]; 
  public get keypath() {
    return this.getListAttribute('keypath');
  }
  public set keypath(value: string[]) {
    this._keypath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keypathInput() {
    return this._keypath;
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}
export interface DashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#observation_field Dashboard#observation_field}
  */
  readonly observationField: DashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldValueObservationField;
}

export function dashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldValueToTerraform(struct?: DashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    observation_field: dashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldValueObservationFieldToTerraform(struct!.observationField),
  }
}


export function dashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldValueToHclTerraform(struct?: DashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    observation_field: {
      value: dashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldValueObservationFieldToHclTerraform(struct!.observationField),
      isBlock: true,
      type: "struct",
      storageClassType: "DashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldValueObservationField",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._observationField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.observationField = this._observationField?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._observationField.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._observationField.internalValue = value.observationField;
    }
  }

  // observation_field - computed: false, optional: false, required: true
  private _observationField = new DashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldValueObservationFieldOutputReference(this, "observation_field");
  public get observationField() {
    return this._observationField;
  }
  public putObservationField(value: DashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldValueObservationField) {
    this._observationField.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get observationFieldInput() {
    return this._observationField.internalValue;
  }
}
export interface DashboardVariablesDefinitionMultiSelectSourceQueryQueryLogs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#field_name Dashboard#field_name}
  */
  readonly fieldName?: DashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldName;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#field_value Dashboard#field_value}
  */
  readonly fieldValue?: DashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldValue;
}

export function dashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsToTerraform(struct?: DashboardVariablesDefinitionMultiSelectSourceQueryQueryLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_name: dashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldNameToTerraform(struct!.fieldName),
    field_value: dashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldValueToTerraform(struct!.fieldValue),
  }
}


export function dashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsToHclTerraform(struct?: DashboardVariablesDefinitionMultiSelectSourceQueryQueryLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_name: {
      value: dashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldNameToHclTerraform(struct!.fieldName),
      isBlock: true,
      type: "struct",
      storageClassType: "DashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldName",
    },
    field_value: {
      value: dashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldValueToHclTerraform(struct!.fieldValue),
      isBlock: true,
      type: "struct",
      storageClassType: "DashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DashboardVariablesDefinitionMultiSelectSourceQueryQueryLogs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName?.internalValue;
    }
    if (this._fieldValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldValue = this._fieldValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardVariablesDefinitionMultiSelectSourceQueryQueryLogs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldName.internalValue = undefined;
      this._fieldValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldName.internalValue = value.fieldName;
      this._fieldValue.internalValue = value.fieldValue;
    }
  }

  // field_name - computed: false, optional: true, required: false
  private _fieldName = new DashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldNameOutputReference(this, "field_name");
  public get fieldName() {
    return this._fieldName;
  }
  public putFieldName(value: DashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldName) {
    this._fieldName.internalValue = value;
  }
  public resetFieldName() {
    this._fieldName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName.internalValue;
  }

  // field_value - computed: false, optional: true, required: false
  private _fieldValue = new DashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldValueOutputReference(this, "field_value");
  public get fieldValue() {
    return this._fieldValue;
  }
  public putFieldValue(value: DashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsFieldValue) {
    this._fieldValue.internalValue = value;
  }
  public resetFieldValue() {
    this._fieldValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldValueInput() {
    return this._fieldValue.internalValue;
  }
}
export interface DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#metric_regex Dashboard#metric_regex}
  */
  readonly metricRegex: string;
}

export function dashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelNameToTerraform(struct?: DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_regex: cdktf.stringToTerraform(struct!.metricRegex),
  }
}


export function dashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelNameToHclTerraform(struct?: DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_regex: {
      value: cdktf.stringToHclTerraform(struct!.metricRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricRegex = this._metricRegex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricRegex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricRegex = value.metricRegex;
    }
  }

  // metric_regex - computed: false, optional: false, required: true
  private _metricRegex?: string; 
  public get metricRegex() {
    return this.getStringAttribute('metric_regex');
  }
  public set metricRegex(value: string) {
    this._metricRegex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricRegexInput() {
    return this._metricRegex;
  }
}
export interface DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersLabel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#string_value Dashboard#string_value}
  */
  readonly stringValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#variable_name Dashboard#variable_name}
  */
  readonly variableName?: string;
}

export function dashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersLabelToTerraform(struct?: DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    string_value: cdktf.stringToTerraform(struct!.stringValue),
    variable_name: cdktf.stringToTerraform(struct!.variableName),
  }
}


export function dashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersLabelToHclTerraform(struct?: DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variable_name: {
      value: cdktf.stringToHclTerraform(struct!.variableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersLabelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersLabel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    if (this._variableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.variableName = this._variableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersLabel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._stringValue = undefined;
      this._variableName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._stringValue = value.stringValue;
      this._variableName = value.variableName;
    }
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }

  // variable_name - computed: false, optional: true, required: false
  private _variableName?: string; 
  public get variableName() {
    return this.getStringAttribute('variable_name');
  }
  public set variableName(value: string) {
    this._variableName = value;
  }
  public resetVariableName() {
    this._variableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableNameInput() {
    return this._variableName;
  }
}
export interface DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersMetric {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#string_value Dashboard#string_value}
  */
  readonly stringValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#variable_name Dashboard#variable_name}
  */
  readonly variableName?: string;
}

export function dashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersMetricToTerraform(struct?: DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    string_value: cdktf.stringToTerraform(struct!.stringValue),
    variable_name: cdktf.stringToTerraform(struct!.variableName),
  }
}


export function dashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersMetricToHclTerraform(struct?: DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variable_name: {
      value: cdktf.stringToHclTerraform(struct!.variableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersMetric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    if (this._variableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.variableName = this._variableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersMetric | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._stringValue = undefined;
      this._variableName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._stringValue = value.stringValue;
      this._variableName = value.variableName;
    }
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }

  // variable_name - computed: false, optional: true, required: false
  private _variableName?: string; 
  public get variableName() {
    return this.getStringAttribute('variable_name');
  }
  public set variableName(value: string) {
    this._variableName = value;
  }
  public resetVariableName() {
    this._variableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableNameInput() {
    return this._variableName;
  }
}
export interface DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOperatorSelectedValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#string_value Dashboard#string_value}
  */
  readonly stringValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#variable_name Dashboard#variable_name}
  */
  readonly variableName?: string;
}

export function dashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOperatorSelectedValuesToTerraform(struct?: DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOperatorSelectedValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    string_value: cdktf.stringToTerraform(struct!.stringValue),
    variable_name: cdktf.stringToTerraform(struct!.variableName),
  }
}


export function dashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOperatorSelectedValuesToHclTerraform(struct?: DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOperatorSelectedValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variable_name: {
      value: cdktf.stringToHclTerraform(struct!.variableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOperatorSelectedValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOperatorSelectedValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    if (this._variableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.variableName = this._variableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOperatorSelectedValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._stringValue = undefined;
      this._variableName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._stringValue = value.stringValue;
      this._variableName = value.variableName;
    }
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }

  // variable_name - computed: false, optional: true, required: false
  private _variableName?: string; 
  public get variableName() {
    return this.getStringAttribute('variable_name');
  }
  public set variableName(value: string) {
    this._variableName = value;
  }
  public resetVariableName() {
    this._variableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableNameInput() {
    return this._variableName;
  }
}

export class DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOperatorSelectedValuesList extends cdktf.ComplexList {
  public internalValue? : DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOperatorSelectedValues[] | cdktf.IResolvable

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
  public get(index: number): DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOperatorSelectedValuesOutputReference {
    return new DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOperatorSelectedValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOperator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#selected_values Dashboard#selected_values}
  */
  readonly selectedValues?: DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOperatorSelectedValues[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#type Dashboard#type}
  */
  readonly type: string;
}

export function dashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOperatorToTerraform(struct?: DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOperator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selected_values: cdktf.listMapper(dashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOperatorSelectedValuesToTerraform, false)(struct!.selectedValues),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOperatorToHclTerraform(struct?: DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOperator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    selected_values: {
      value: cdktf.listMapperHcl(dashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOperatorSelectedValuesToHclTerraform, false)(struct!.selectedValues),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOperatorSelectedValuesList",
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

export class DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOperator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selectedValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedValues = this._selectedValues?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOperator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._selectedValues.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._selectedValues.internalValue = value.selectedValues;
      this._type = value.type;
    }
  }

  // selected_values - computed: false, optional: true, required: false
  private _selectedValues = new DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOperatorSelectedValuesList(this, "selected_values", false);
  public get selectedValues() {
    return this._selectedValues;
  }
  public putSelectedValues(value: DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOperatorSelectedValues[] | cdktf.IResolvable) {
    this._selectedValues.internalValue = value;
  }
  public resetSelectedValues() {
    this._selectedValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedValuesInput() {
    return this._selectedValues.internalValue;
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
}
export interface DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#label Dashboard#label}
  */
  readonly label?: DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersLabel;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#metric Dashboard#metric}
  */
  readonly metric?: DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersMetric;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#operator Dashboard#operator}
  */
  readonly operator?: DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOperator;
}

export function dashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersToTerraform(struct?: DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: dashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersLabelToTerraform(struct!.label),
    metric: dashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersMetricToTerraform(struct!.metric),
    operator: dashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOperatorToTerraform(struct!.operator),
  }
}


export function dashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersToHclTerraform(struct?: DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label: {
      value: dashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersLabelToHclTerraform(struct!.label),
      isBlock: true,
      type: "struct",
      storageClassType: "DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersLabel",
    },
    metric: {
      value: dashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "struct",
      storageClassType: "DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersMetric",
    },
    operator: {
      value: dashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOperatorToHclTerraform(struct!.operator),
      isBlock: true,
      type: "struct",
      storageClassType: "DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOperator",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label?.internalValue;
    }
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    if (this._operator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._label.internalValue = undefined;
      this._metric.internalValue = undefined;
      this._operator.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._label.internalValue = value.label;
      this._metric.internalValue = value.metric;
      this._operator.internalValue = value.operator;
    }
  }

  // label - computed: false, optional: true, required: false
  private _label = new DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersLabelOutputReference(this, "label");
  public get label() {
    return this._label;
  }
  public putLabel(value: DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersLabel) {
    this._label.internalValue = value;
  }
  public resetLabel() {
    this._label.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label.internalValue;
  }

  // metric - computed: false, optional: true, required: false
  private _metric = new DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersMetric) {
    this._metric.internalValue = value;
  }
  public resetMetric() {
    this._metric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // operator - computed: false, optional: true, required: false
  private _operator = new DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
  public putOperator(value: DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOperator) {
    this._operator.internalValue = value;
  }
  public resetOperator() {
    this._operator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator.internalValue;
  }
}

export class DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersList extends cdktf.ComplexList {
  public internalValue? : DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFilters[] | cdktf.IResolvable

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
  public get(index: number): DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOutputReference {
    return new DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#string_value Dashboard#string_value}
  */
  readonly stringValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#variable_name Dashboard#variable_name}
  */
  readonly variableName?: string;
}

export function dashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelNameToTerraform(struct?: DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    string_value: cdktf.stringToTerraform(struct!.stringValue),
    variable_name: cdktf.stringToTerraform(struct!.variableName),
  }
}


export function dashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelNameToHclTerraform(struct?: DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variable_name: {
      value: cdktf.stringToHclTerraform(struct!.variableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    if (this._variableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.variableName = this._variableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._stringValue = undefined;
      this._variableName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._stringValue = value.stringValue;
      this._variableName = value.variableName;
    }
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }

  // variable_name - computed: false, optional: true, required: false
  private _variableName?: string; 
  public get variableName() {
    return this.getStringAttribute('variable_name');
  }
  public set variableName(value: string) {
    this._variableName = value;
  }
  public resetVariableName() {
    this._variableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableNameInput() {
    return this._variableName;
  }
}
export interface DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueMetricName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#string_value Dashboard#string_value}
  */
  readonly stringValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#variable_name Dashboard#variable_name}
  */
  readonly variableName?: string;
}

export function dashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueMetricNameToTerraform(struct?: DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueMetricName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    string_value: cdktf.stringToTerraform(struct!.stringValue),
    variable_name: cdktf.stringToTerraform(struct!.variableName),
  }
}


export function dashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueMetricNameToHclTerraform(struct?: DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueMetricName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variable_name: {
      value: cdktf.stringToHclTerraform(struct!.variableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueMetricNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueMetricName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    if (this._variableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.variableName = this._variableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueMetricName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._stringValue = undefined;
      this._variableName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._stringValue = value.stringValue;
      this._variableName = value.variableName;
    }
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }

  // variable_name - computed: false, optional: true, required: false
  private _variableName?: string; 
  public get variableName() {
    return this.getStringAttribute('variable_name');
  }
  public set variableName(value: string) {
    this._variableName = value;
  }
  public resetVariableName() {
    this._variableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableNameInput() {
    return this._variableName;
  }
}
export interface DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#label_filters Dashboard#label_filters}
  */
  readonly labelFilters?: DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFilters[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#label_name Dashboard#label_name}
  */
  readonly labelName?: DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelName;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#metric_name Dashboard#metric_name}
  */
  readonly metricName?: DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueMetricName;
}

export function dashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueToTerraform(struct?: DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_filters: cdktf.listMapper(dashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersToTerraform, false)(struct!.labelFilters),
    label_name: dashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelNameToTerraform(struct!.labelName),
    metric_name: dashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueMetricNameToTerraform(struct!.metricName),
  }
}


export function dashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueToHclTerraform(struct?: DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_filters: {
      value: cdktf.listMapperHcl(dashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersToHclTerraform, false)(struct!.labelFilters),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersList",
    },
    label_name: {
      value: dashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelNameToHclTerraform(struct!.labelName),
      isBlock: true,
      type: "struct",
      storageClassType: "DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelName",
    },
    metric_name: {
      value: dashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueMetricNameToHclTerraform(struct!.metricName),
      isBlock: true,
      type: "struct",
      storageClassType: "DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueMetricName",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelFilters = this._labelFilters?.internalValue;
    }
    if (this._labelName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelName = this._labelName?.internalValue;
    }
    if (this._metricName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelFilters.internalValue = undefined;
      this._labelName.internalValue = undefined;
      this._metricName.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelFilters.internalValue = value.labelFilters;
      this._labelName.internalValue = value.labelName;
      this._metricName.internalValue = value.metricName;
    }
  }

  // label_filters - computed: false, optional: true, required: false
  private _labelFilters = new DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFiltersList(this, "label_filters", false);
  public get labelFilters() {
    return this._labelFilters;
  }
  public putLabelFilters(value: DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelFilters[] | cdktf.IResolvable) {
    this._labelFilters.internalValue = value;
  }
  public resetLabelFilters() {
    this._labelFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelFiltersInput() {
    return this._labelFilters.internalValue;
  }

  // label_name - computed: false, optional: true, required: false
  private _labelName = new DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelNameOutputReference(this, "label_name");
  public get labelName() {
    return this._labelName;
  }
  public putLabelName(value: DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueLabelName) {
    this._labelName.internalValue = value;
  }
  public resetLabelName() {
    this._labelName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelNameInput() {
    return this._labelName.internalValue;
  }

  // metric_name - computed: false, optional: true, required: false
  private _metricName = new DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueMetricNameOutputReference(this, "metric_name");
  public get metricName() {
    return this._metricName;
  }
  public putMetricName(value: DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueMetricName) {
    this._metricName.internalValue = value;
  }
  public resetMetricName() {
    this._metricName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName.internalValue;
  }
}
export interface DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsMetricName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#metric_regex Dashboard#metric_regex}
  */
  readonly metricRegex: string;
}

export function dashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsMetricNameToTerraform(struct?: DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsMetricName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_regex: cdktf.stringToTerraform(struct!.metricRegex),
  }
}


export function dashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsMetricNameToHclTerraform(struct?: DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsMetricName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_regex: {
      value: cdktf.stringToHclTerraform(struct!.metricRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsMetricNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsMetricName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricRegex = this._metricRegex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsMetricName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricRegex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricRegex = value.metricRegex;
    }
  }

  // metric_regex - computed: false, optional: false, required: true
  private _metricRegex?: string; 
  public get metricRegex() {
    return this.getStringAttribute('metric_regex');
  }
  public set metricRegex(value: string) {
    this._metricRegex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricRegexInput() {
    return this._metricRegex;
  }
}
export interface DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetrics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#label_name Dashboard#label_name}
  */
  readonly labelName?: DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelName;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#label_value Dashboard#label_value}
  */
  readonly labelValue?: DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#metric_name Dashboard#metric_name}
  */
  readonly metricName?: DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsMetricName;
}

export function dashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsToTerraform(struct?: DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_name: dashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelNameToTerraform(struct!.labelName),
    label_value: dashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueToTerraform(struct!.labelValue),
    metric_name: dashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsMetricNameToTerraform(struct!.metricName),
  }
}


export function dashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsToHclTerraform(struct?: DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_name: {
      value: dashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelNameToHclTerraform(struct!.labelName),
      isBlock: true,
      type: "struct",
      storageClassType: "DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelName",
    },
    label_value: {
      value: dashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueToHclTerraform(struct!.labelValue),
      isBlock: true,
      type: "struct",
      storageClassType: "DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValue",
    },
    metric_name: {
      value: dashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsMetricNameToHclTerraform(struct!.metricName),
      isBlock: true,
      type: "struct",
      storageClassType: "DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsMetricName",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelName = this._labelName?.internalValue;
    }
    if (this._labelValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelValue = this._labelValue?.internalValue;
    }
    if (this._metricName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelName.internalValue = undefined;
      this._labelValue.internalValue = undefined;
      this._metricName.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelName.internalValue = value.labelName;
      this._labelValue.internalValue = value.labelValue;
      this._metricName.internalValue = value.metricName;
    }
  }

  // label_name - computed: false, optional: true, required: false
  private _labelName = new DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelNameOutputReference(this, "label_name");
  public get labelName() {
    return this._labelName;
  }
  public putLabelName(value: DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelName) {
    this._labelName.internalValue = value;
  }
  public resetLabelName() {
    this._labelName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelNameInput() {
    return this._labelName.internalValue;
  }

  // label_value - computed: false, optional: true, required: false
  private _labelValue = new DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValueOutputReference(this, "label_value");
  public get labelValue() {
    return this._labelValue;
  }
  public putLabelValue(value: DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsLabelValue) {
    this._labelValue.internalValue = value;
  }
  public resetLabelValue() {
    this._labelValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelValueInput() {
    return this._labelValue.internalValue;
  }

  // metric_name - computed: false, optional: true, required: false
  private _metricName = new DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsMetricNameOutputReference(this, "metric_name");
  public get metricName() {
    return this._metricName;
  }
  public putMetricName(value: DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsMetricName) {
    this._metricName.internalValue = value;
  }
  public resetMetricName() {
    this._metricName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName.internalValue;
  }
}
export interface DashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansFieldName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#span_regex Dashboard#span_regex}
  */
  readonly spanRegex: string;
}

export function dashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansFieldNameToTerraform(struct?: DashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansFieldName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    span_regex: cdktf.stringToTerraform(struct!.spanRegex),
  }
}


export function dashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansFieldNameToHclTerraform(struct?: DashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansFieldName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    span_regex: {
      value: cdktf.stringToHclTerraform(struct!.spanRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansFieldNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansFieldName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._spanRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.spanRegex = this._spanRegex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansFieldName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._spanRegex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._spanRegex = value.spanRegex;
    }
  }

  // span_regex - computed: false, optional: false, required: true
  private _spanRegex?: string; 
  public get spanRegex() {
    return this.getStringAttribute('span_regex');
  }
  public set spanRegex(value: string) {
    this._spanRegex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spanRegexInput() {
    return this._spanRegex;
  }
}
export interface DashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansFieldValue {
  /**
  * The type of the field. Can be one of ["metadata" "tag" "process_tag"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#type Dashboard#type}
  */
  readonly type: string;
  /**
  * The value of the field. When the field type is `metadata`, can be one of ["application_name" "operation_name" "service_name" "subsystem_name" "unspecified"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#value Dashboard#value}
  */
  readonly value: string;
}

export function dashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansFieldValueToTerraform(struct?: DashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansFieldValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansFieldValueToHclTerraform(struct?: DashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansFieldValue | cdktf.IResolvable): any {
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

export class DashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansFieldValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansFieldValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansFieldValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DashboardVariablesDefinitionMultiSelectSourceQueryQuerySpans {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#field_name Dashboard#field_name}
  */
  readonly fieldName?: DashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansFieldName;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#field_value Dashboard#field_value}
  */
  readonly fieldValue?: DashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansFieldValue;
}

export function dashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansToTerraform(struct?: DashboardVariablesDefinitionMultiSelectSourceQueryQuerySpans | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_name: dashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansFieldNameToTerraform(struct!.fieldName),
    field_value: dashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansFieldValueToTerraform(struct!.fieldValue),
  }
}


export function dashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansToHclTerraform(struct?: DashboardVariablesDefinitionMultiSelectSourceQueryQuerySpans | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_name: {
      value: dashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansFieldNameToHclTerraform(struct!.fieldName),
      isBlock: true,
      type: "struct",
      storageClassType: "DashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansFieldName",
    },
    field_value: {
      value: dashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansFieldValueToHclTerraform(struct!.fieldValue),
      isBlock: true,
      type: "struct",
      storageClassType: "DashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansFieldValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DashboardVariablesDefinitionMultiSelectSourceQueryQuerySpans | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName?.internalValue;
    }
    if (this._fieldValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldValue = this._fieldValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardVariablesDefinitionMultiSelectSourceQueryQuerySpans | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldName.internalValue = undefined;
      this._fieldValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldName.internalValue = value.fieldName;
      this._fieldValue.internalValue = value.fieldValue;
    }
  }

  // field_name - computed: false, optional: true, required: false
  private _fieldName = new DashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansFieldNameOutputReference(this, "field_name");
  public get fieldName() {
    return this._fieldName;
  }
  public putFieldName(value: DashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansFieldName) {
    this._fieldName.internalValue = value;
  }
  public resetFieldName() {
    this._fieldName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName.internalValue;
  }

  // field_value - computed: false, optional: true, required: false
  private _fieldValue = new DashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansFieldValueOutputReference(this, "field_value");
  public get fieldValue() {
    return this._fieldValue;
  }
  public putFieldValue(value: DashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansFieldValue) {
    this._fieldValue.internalValue = value;
  }
  public resetFieldValue() {
    this._fieldValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldValueInput() {
    return this._fieldValue.internalValue;
  }
}
export interface DashboardVariablesDefinitionMultiSelectSourceQueryQuery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#logs Dashboard#logs}
  */
  readonly logs?: DashboardVariablesDefinitionMultiSelectSourceQueryQueryLogs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#metrics Dashboard#metrics}
  */
  readonly metrics?: DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetrics;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#spans Dashboard#spans}
  */
  readonly spans?: DashboardVariablesDefinitionMultiSelectSourceQueryQuerySpans;
}

export function dashboardVariablesDefinitionMultiSelectSourceQueryQueryToTerraform(struct?: DashboardVariablesDefinitionMultiSelectSourceQueryQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logs: dashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsToTerraform(struct!.logs),
    metrics: dashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsToTerraform(struct!.metrics),
    spans: dashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansToTerraform(struct!.spans),
  }
}


export function dashboardVariablesDefinitionMultiSelectSourceQueryQueryToHclTerraform(struct?: DashboardVariablesDefinitionMultiSelectSourceQueryQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    logs: {
      value: dashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsToHclTerraform(struct!.logs),
      isBlock: true,
      type: "struct",
      storageClassType: "DashboardVariablesDefinitionMultiSelectSourceQueryQueryLogs",
    },
    metrics: {
      value: dashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsToHclTerraform(struct!.metrics),
      isBlock: true,
      type: "struct",
      storageClassType: "DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetrics",
    },
    spans: {
      value: dashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansToHclTerraform(struct!.spans),
      isBlock: true,
      type: "struct",
      storageClassType: "DashboardVariablesDefinitionMultiSelectSourceQueryQuerySpans",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardVariablesDefinitionMultiSelectSourceQueryQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DashboardVariablesDefinitionMultiSelectSourceQueryQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logs = this._logs?.internalValue;
    }
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    if (this._spans?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spans = this._spans?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardVariablesDefinitionMultiSelectSourceQueryQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logs.internalValue = undefined;
      this._metrics.internalValue = undefined;
      this._spans.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logs.internalValue = value.logs;
      this._metrics.internalValue = value.metrics;
      this._spans.internalValue = value.spans;
    }
  }

  // logs - computed: false, optional: true, required: false
  private _logs = new DashboardVariablesDefinitionMultiSelectSourceQueryQueryLogsOutputReference(this, "logs");
  public get logs() {
    return this._logs;
  }
  public putLogs(value: DashboardVariablesDefinitionMultiSelectSourceQueryQueryLogs) {
    this._logs.internalValue = value;
  }
  public resetLogs() {
    this._logs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsInput() {
    return this._logs.internalValue;
  }

  // metrics - computed: false, optional: true, required: false
  private _metrics = new DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetricsOutputReference(this, "metrics");
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: DashboardVariablesDefinitionMultiSelectSourceQueryQueryMetrics) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }

  // spans - computed: false, optional: true, required: false
  private _spans = new DashboardVariablesDefinitionMultiSelectSourceQueryQuerySpansOutputReference(this, "spans");
  public get spans() {
    return this._spans;
  }
  public putSpans(value: DashboardVariablesDefinitionMultiSelectSourceQueryQuerySpans) {
    this._spans.internalValue = value;
  }
  public resetSpans() {
    this._spans.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spansInput() {
    return this._spans.internalValue;
  }
}
export interface DashboardVariablesDefinitionMultiSelectSourceQueryValueDisplayOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#label_regex Dashboard#label_regex}
  */
  readonly labelRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#value_regex Dashboard#value_regex}
  */
  readonly valueRegex?: string;
}

export function dashboardVariablesDefinitionMultiSelectSourceQueryValueDisplayOptionsToTerraform(struct?: DashboardVariablesDefinitionMultiSelectSourceQueryValueDisplayOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_regex: cdktf.stringToTerraform(struct!.labelRegex),
    value_regex: cdktf.stringToTerraform(struct!.valueRegex),
  }
}


export function dashboardVariablesDefinitionMultiSelectSourceQueryValueDisplayOptionsToHclTerraform(struct?: DashboardVariablesDefinitionMultiSelectSourceQueryValueDisplayOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_regex: {
      value: cdktf.stringToHclTerraform(struct!.labelRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_regex: {
      value: cdktf.stringToHclTerraform(struct!.valueRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardVariablesDefinitionMultiSelectSourceQueryValueDisplayOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DashboardVariablesDefinitionMultiSelectSourceQueryValueDisplayOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelRegex = this._labelRegex;
    }
    if (this._valueRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueRegex = this._valueRegex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardVariablesDefinitionMultiSelectSourceQueryValueDisplayOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelRegex = undefined;
      this._valueRegex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelRegex = value.labelRegex;
      this._valueRegex = value.valueRegex;
    }
  }

  // label_regex - computed: false, optional: true, required: false
  private _labelRegex?: string; 
  public get labelRegex() {
    return this.getStringAttribute('label_regex');
  }
  public set labelRegex(value: string) {
    this._labelRegex = value;
  }
  public resetLabelRegex() {
    this._labelRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelRegexInput() {
    return this._labelRegex;
  }

  // value_regex - computed: false, optional: true, required: false
  private _valueRegex?: string; 
  public get valueRegex() {
    return this.getStringAttribute('value_regex');
  }
  public set valueRegex(value: string) {
    this._valueRegex = value;
  }
  public resetValueRegex() {
    this._valueRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueRegexInput() {
    return this._valueRegex;
  }
}
export interface DashboardVariablesDefinitionMultiSelectSourceQuery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#query Dashboard#query}
  */
  readonly query: DashboardVariablesDefinitionMultiSelectSourceQueryQuery;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#refresh_strategy Dashboard#refresh_strategy}
  */
  readonly refreshStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#value_display_options Dashboard#value_display_options}
  */
  readonly valueDisplayOptions?: DashboardVariablesDefinitionMultiSelectSourceQueryValueDisplayOptions;
}

export function dashboardVariablesDefinitionMultiSelectSourceQueryToTerraform(struct?: DashboardVariablesDefinitionMultiSelectSourceQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: dashboardVariablesDefinitionMultiSelectSourceQueryQueryToTerraform(struct!.query),
    refresh_strategy: cdktf.stringToTerraform(struct!.refreshStrategy),
    value_display_options: dashboardVariablesDefinitionMultiSelectSourceQueryValueDisplayOptionsToTerraform(struct!.valueDisplayOptions),
  }
}


export function dashboardVariablesDefinitionMultiSelectSourceQueryToHclTerraform(struct?: DashboardVariablesDefinitionMultiSelectSourceQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query: {
      value: dashboardVariablesDefinitionMultiSelectSourceQueryQueryToHclTerraform(struct!.query),
      isBlock: true,
      type: "struct",
      storageClassType: "DashboardVariablesDefinitionMultiSelectSourceQueryQuery",
    },
    refresh_strategy: {
      value: cdktf.stringToHclTerraform(struct!.refreshStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_display_options: {
      value: dashboardVariablesDefinitionMultiSelectSourceQueryValueDisplayOptionsToHclTerraform(struct!.valueDisplayOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DashboardVariablesDefinitionMultiSelectSourceQueryValueDisplayOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardVariablesDefinitionMultiSelectSourceQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DashboardVariablesDefinitionMultiSelectSourceQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    if (this._refreshStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshStrategy = this._refreshStrategy;
    }
    if (this._valueDisplayOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueDisplayOptions = this._valueDisplayOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardVariablesDefinitionMultiSelectSourceQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._query.internalValue = undefined;
      this._refreshStrategy = undefined;
      this._valueDisplayOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._query.internalValue = value.query;
      this._refreshStrategy = value.refreshStrategy;
      this._valueDisplayOptions.internalValue = value.valueDisplayOptions;
    }
  }

  // query - computed: false, optional: false, required: true
  private _query = new DashboardVariablesDefinitionMultiSelectSourceQueryQueryOutputReference(this, "query");
  public get query() {
    return this._query;
  }
  public putQuery(value: DashboardVariablesDefinitionMultiSelectSourceQueryQuery) {
    this._query.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }

  // refresh_strategy - computed: true, optional: true, required: false
  private _refreshStrategy?: string; 
  public get refreshStrategy() {
    return this.getStringAttribute('refresh_strategy');
  }
  public set refreshStrategy(value: string) {
    this._refreshStrategy = value;
  }
  public resetRefreshStrategy() {
    this._refreshStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshStrategyInput() {
    return this._refreshStrategy;
  }

  // value_display_options - computed: false, optional: true, required: false
  private _valueDisplayOptions = new DashboardVariablesDefinitionMultiSelectSourceQueryValueDisplayOptionsOutputReference(this, "value_display_options");
  public get valueDisplayOptions() {
    return this._valueDisplayOptions;
  }
  public putValueDisplayOptions(value: DashboardVariablesDefinitionMultiSelectSourceQueryValueDisplayOptions) {
    this._valueDisplayOptions.internalValue = value;
  }
  public resetValueDisplayOptions() {
    this._valueDisplayOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueDisplayOptionsInput() {
    return this._valueDisplayOptions.internalValue;
  }
}
export interface DashboardVariablesDefinitionMultiSelectSourceSpanField {
  /**
  * The type of the field. Can be one of ["metadata" "tag" "process_tag"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#type Dashboard#type}
  */
  readonly type: string;
  /**
  * The value of the field. When the field type is `metadata`, can be one of ["application_name" "operation_name" "service_name" "subsystem_name" "unspecified"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#value Dashboard#value}
  */
  readonly value: string;
}

export function dashboardVariablesDefinitionMultiSelectSourceSpanFieldToTerraform(struct?: DashboardVariablesDefinitionMultiSelectSourceSpanField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dashboardVariablesDefinitionMultiSelectSourceSpanFieldToHclTerraform(struct?: DashboardVariablesDefinitionMultiSelectSourceSpanField | cdktf.IResolvable): any {
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

export class DashboardVariablesDefinitionMultiSelectSourceSpanFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DashboardVariablesDefinitionMultiSelectSourceSpanField | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardVariablesDefinitionMultiSelectSourceSpanField | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DashboardVariablesDefinitionMultiSelectSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#constant_list Dashboard#constant_list}
  */
  readonly constantList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#logs_path Dashboard#logs_path}
  */
  readonly logsPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#metric_label Dashboard#metric_label}
  */
  readonly metricLabel?: DashboardVariablesDefinitionMultiSelectSourceMetricLabel;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#query Dashboard#query}
  */
  readonly query?: DashboardVariablesDefinitionMultiSelectSourceQuery;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#span_field Dashboard#span_field}
  */
  readonly spanField?: DashboardVariablesDefinitionMultiSelectSourceSpanField;
}

export function dashboardVariablesDefinitionMultiSelectSourceToTerraform(struct?: DashboardVariablesDefinitionMultiSelectSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.constantList),
    logs_path: cdktf.stringToTerraform(struct!.logsPath),
    metric_label: dashboardVariablesDefinitionMultiSelectSourceMetricLabelToTerraform(struct!.metricLabel),
    query: dashboardVariablesDefinitionMultiSelectSourceQueryToTerraform(struct!.query),
    span_field: dashboardVariablesDefinitionMultiSelectSourceSpanFieldToTerraform(struct!.spanField),
  }
}


export function dashboardVariablesDefinitionMultiSelectSourceToHclTerraform(struct?: DashboardVariablesDefinitionMultiSelectSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    constant_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.constantList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    logs_path: {
      value: cdktf.stringToHclTerraform(struct!.logsPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_label: {
      value: dashboardVariablesDefinitionMultiSelectSourceMetricLabelToHclTerraform(struct!.metricLabel),
      isBlock: true,
      type: "struct",
      storageClassType: "DashboardVariablesDefinitionMultiSelectSourceMetricLabel",
    },
    query: {
      value: dashboardVariablesDefinitionMultiSelectSourceQueryToHclTerraform(struct!.query),
      isBlock: true,
      type: "struct",
      storageClassType: "DashboardVariablesDefinitionMultiSelectSourceQuery",
    },
    span_field: {
      value: dashboardVariablesDefinitionMultiSelectSourceSpanFieldToHclTerraform(struct!.spanField),
      isBlock: true,
      type: "struct",
      storageClassType: "DashboardVariablesDefinitionMultiSelectSourceSpanField",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardVariablesDefinitionMultiSelectSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DashboardVariablesDefinitionMultiSelectSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constantList !== undefined) {
      hasAnyValues = true;
      internalValueResult.constantList = this._constantList;
    }
    if (this._logsPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.logsPath = this._logsPath;
    }
    if (this._metricLabel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricLabel = this._metricLabel?.internalValue;
    }
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    if (this._spanField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spanField = this._spanField?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardVariablesDefinitionMultiSelectSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._constantList = undefined;
      this._logsPath = undefined;
      this._metricLabel.internalValue = undefined;
      this._query.internalValue = undefined;
      this._spanField.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._constantList = value.constantList;
      this._logsPath = value.logsPath;
      this._metricLabel.internalValue = value.metricLabel;
      this._query.internalValue = value.query;
      this._spanField.internalValue = value.spanField;
    }
  }

  // constant_list - computed: false, optional: true, required: false
  private _constantList?: string[]; 
  public get constantList() {
    return this.getListAttribute('constant_list');
  }
  public set constantList(value: string[]) {
    this._constantList = value;
  }
  public resetConstantList() {
    this._constantList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constantListInput() {
    return this._constantList;
  }

  // logs_path - computed: false, optional: true, required: false
  private _logsPath?: string; 
  public get logsPath() {
    return this.getStringAttribute('logs_path');
  }
  public set logsPath(value: string) {
    this._logsPath = value;
  }
  public resetLogsPath() {
    this._logsPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsPathInput() {
    return this._logsPath;
  }

  // metric_label - computed: false, optional: true, required: false
  private _metricLabel = new DashboardVariablesDefinitionMultiSelectSourceMetricLabelOutputReference(this, "metric_label");
  public get metricLabel() {
    return this._metricLabel;
  }
  public putMetricLabel(value: DashboardVariablesDefinitionMultiSelectSourceMetricLabel) {
    this._metricLabel.internalValue = value;
  }
  public resetMetricLabel() {
    this._metricLabel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricLabelInput() {
    return this._metricLabel.internalValue;
  }

  // query - computed: false, optional: true, required: false
  private _query = new DashboardVariablesDefinitionMultiSelectSourceQueryOutputReference(this, "query");
  public get query() {
    return this._query;
  }
  public putQuery(value: DashboardVariablesDefinitionMultiSelectSourceQuery) {
    this._query.internalValue = value;
  }
  public resetQuery() {
    this._query.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }

  // span_field - computed: false, optional: true, required: false
  private _spanField = new DashboardVariablesDefinitionMultiSelectSourceSpanFieldOutputReference(this, "span_field");
  public get spanField() {
    return this._spanField;
  }
  public putSpanField(value: DashboardVariablesDefinitionMultiSelectSourceSpanField) {
    this._spanField.internalValue = value;
  }
  public resetSpanField() {
    this._spanField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanFieldInput() {
    return this._spanField.internalValue;
  }
}
export interface DashboardVariablesDefinitionMultiSelect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#selected_values Dashboard#selected_values}
  */
  readonly selectedValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#source Dashboard#source}
  */
  readonly source?: DashboardVariablesDefinitionMultiSelectSource;
  /**
  * The order direction of the values. Can be one of `asc`, `desc`, `unspecified`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#values_order_direction Dashboard#values_order_direction}
  */
  readonly valuesOrderDirection: string;
}

export function dashboardVariablesDefinitionMultiSelectToTerraform(struct?: DashboardVariablesDefinitionMultiSelect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selected_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.selectedValues),
    source: dashboardVariablesDefinitionMultiSelectSourceToTerraform(struct!.source),
    values_order_direction: cdktf.stringToTerraform(struct!.valuesOrderDirection),
  }
}


export function dashboardVariablesDefinitionMultiSelectToHclTerraform(struct?: DashboardVariablesDefinitionMultiSelect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    selected_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.selectedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source: {
      value: dashboardVariablesDefinitionMultiSelectSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "DashboardVariablesDefinitionMultiSelectSource",
    },
    values_order_direction: {
      value: cdktf.stringToHclTerraform(struct!.valuesOrderDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardVariablesDefinitionMultiSelectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DashboardVariablesDefinitionMultiSelect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selectedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedValues = this._selectedValues;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._valuesOrderDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuesOrderDirection = this._valuesOrderDirection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardVariablesDefinitionMultiSelect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._selectedValues = undefined;
      this._source.internalValue = undefined;
      this._valuesOrderDirection = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._selectedValues = value.selectedValues;
      this._source.internalValue = value.source;
      this._valuesOrderDirection = value.valuesOrderDirection;
    }
  }

  // selected_values - computed: false, optional: true, required: false
  private _selectedValues?: string[]; 
  public get selectedValues() {
    return this.getListAttribute('selected_values');
  }
  public set selectedValues(value: string[]) {
    this._selectedValues = value;
  }
  public resetSelectedValues() {
    this._selectedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedValuesInput() {
    return this._selectedValues;
  }

  // source - computed: false, optional: true, required: false
  private _source = new DashboardVariablesDefinitionMultiSelectSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: DashboardVariablesDefinitionMultiSelectSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // values_order_direction - computed: false, optional: false, required: true
  private _valuesOrderDirection?: string; 
  public get valuesOrderDirection() {
    return this.getStringAttribute('values_order_direction');
  }
  public set valuesOrderDirection(value: string) {
    this._valuesOrderDirection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesOrderDirectionInput() {
    return this._valuesOrderDirection;
  }
}
export interface DashboardVariablesDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#constant_value Dashboard#constant_value}
  */
  readonly constantValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#multi_select Dashboard#multi_select}
  */
  readonly multiSelect?: DashboardVariablesDefinitionMultiSelect;
}

export function dashboardVariablesDefinitionToTerraform(struct?: DashboardVariablesDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant_value: cdktf.stringToTerraform(struct!.constantValue),
    multi_select: dashboardVariablesDefinitionMultiSelectToTerraform(struct!.multiSelect),
  }
}


export function dashboardVariablesDefinitionToHclTerraform(struct?: DashboardVariablesDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    constant_value: {
      value: cdktf.stringToHclTerraform(struct!.constantValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_select: {
      value: dashboardVariablesDefinitionMultiSelectToHclTerraform(struct!.multiSelect),
      isBlock: true,
      type: "struct",
      storageClassType: "DashboardVariablesDefinitionMultiSelect",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardVariablesDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DashboardVariablesDefinition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constantValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.constantValue = this._constantValue;
    }
    if (this._multiSelect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiSelect = this._multiSelect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardVariablesDefinition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._constantValue = undefined;
      this._multiSelect.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._constantValue = value.constantValue;
      this._multiSelect.internalValue = value.multiSelect;
    }
  }

  // constant_value - computed: false, optional: true, required: false
  private _constantValue?: string; 
  public get constantValue() {
    return this.getStringAttribute('constant_value');
  }
  public set constantValue(value: string) {
    this._constantValue = value;
  }
  public resetConstantValue() {
    this._constantValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constantValueInput() {
    return this._constantValue;
  }

  // multi_select - computed: false, optional: true, required: false
  private _multiSelect = new DashboardVariablesDefinitionMultiSelectOutputReference(this, "multi_select");
  public get multiSelect() {
    return this._multiSelect;
  }
  public putMultiSelect(value: DashboardVariablesDefinitionMultiSelect) {
    this._multiSelect.internalValue = value;
  }
  public resetMultiSelect() {
    this._multiSelect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiSelectInput() {
    return this._multiSelect.internalValue;
  }
}
export interface DashboardVariables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#definition Dashboard#definition}
  */
  readonly definition: DashboardVariablesDefinition;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#display_name Dashboard#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name?: string;
}

export function dashboardVariablesToTerraform(struct?: DashboardVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition: dashboardVariablesDefinitionToTerraform(struct!.definition),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dashboardVariablesToHclTerraform(struct?: DashboardVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    definition: {
      value: dashboardVariablesDefinitionToHclTerraform(struct!.definition),
      isBlock: true,
      type: "struct",
      storageClassType: "DashboardVariablesDefinition",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition?.internalValue;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definition.internalValue = undefined;
      this._displayName = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._definition.internalValue = value.definition;
      this._displayName = value.displayName;
      this._name = value.name;
    }
  }

  // definition - computed: false, optional: false, required: true
  private _definition = new DashboardVariablesDefinitionOutputReference(this, "definition");
  public get definition() {
    return this._definition;
  }
  public putDefinition(value: DashboardVariablesDefinition) {
    this._definition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition.internalValue;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

export class DashboardVariablesList extends cdktf.ComplexList {
  public internalValue? : DashboardVariables[] | cdktf.IResolvable

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
  public get(index: number): DashboardVariablesOutputReference {
    return new DashboardVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
