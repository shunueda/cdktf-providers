// https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/vulnerabilities_report
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VulnerabilitiesReportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Schedule for automated report generation. Format: 'minute hour day-of-month month day-of-week' where:
  *   - minute: must be 00, 15, 30, or 45 (quarter-hourly)
  *   - hour: must be 00-23 (2-digit format, e.g., 03 not 3)
  *   - day-of-month: 1-31, * (any), or ? (unspecified)
  *   - month: 1-12 or JAN-DEC
  *   - day-of-week: 0-6 (0=Sunday) or SUN-SAT
  * Examples:
  *   - '45 03 * * MON' = Every Monday at 03:45 AM
  *   - '00 00 1 * ?' = At midnight (00:00) on the first day of every month
  *   - '30 12 ? * MON-FRI' = At 12:30 PM every weekday
  * Note: Requires Xray 3.130.0 or higher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/vulnerabilities_report#cron_schedule VulnerabilitiesReport#cron_schedule}
  */
  readonly cronSchedule?: string;
  /**
  * Timezone for cron schedule. For valid timezone formats, see: [iana-timezones](https://timeapi.io/documentation/iana-timezones). Note: Requires Xray 3.130.0 or higher. Only used when cron_schedule is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/vulnerabilities_report#cron_schedule_timezone VulnerabilitiesReport#cron_schedule_timezone}
  */
  readonly cronScheduleTimezone?: string;
  /**
  * List of email addresses to notify when report generation is complete. Note: Requires Xray 3.130.0 or higher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/vulnerabilities_report#emails VulnerabilitiesReport#emails}
  */
  readonly emails?: string[];
  /**
  * Name of the report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/vulnerabilities_report#name VulnerabilitiesReport#name}
  */
  readonly name: string;
  /**
  * Project key for assigning this resource to. Must be 2 - 10 lowercase alphanumeric and hyphen characters. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/vulnerabilities_report#project_key VulnerabilitiesReport#project_key}
  */
  readonly projectKey?: string;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/vulnerabilities_report#filters VulnerabilitiesReport#filters}
  */
  readonly filters?: VulnerabilitiesReportFilters[] | cdktf.IResolvable;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/vulnerabilities_report#resources VulnerabilitiesReport#resources}
  */
  readonly resources?: VulnerabilitiesReportResources[] | cdktf.IResolvable;
}
export interface VulnerabilitiesReportFiltersCaFilter {
  /**
  * Allowed CA statuses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/vulnerabilities_report#allowed_ca_statuses VulnerabilitiesReport#allowed_ca_statuses}
  */
  readonly allowedCaStatuses?: string[];
}

export function vulnerabilitiesReportFiltersCaFilterToTerraform(struct?: VulnerabilitiesReportFiltersCaFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_ca_statuses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedCaStatuses),
  }
}


export function vulnerabilitiesReportFiltersCaFilterToHclTerraform(struct?: VulnerabilitiesReportFiltersCaFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_ca_statuses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedCaStatuses),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VulnerabilitiesReportFiltersCaFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VulnerabilitiesReportFiltersCaFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedCaStatuses !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedCaStatuses = this._allowedCaStatuses;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VulnerabilitiesReportFiltersCaFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedCaStatuses = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedCaStatuses = value.allowedCaStatuses;
    }
  }

  // allowed_ca_statuses - computed: false, optional: true, required: false
  private _allowedCaStatuses?: string[]; 
  public get allowedCaStatuses() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_ca_statuses'));
  }
  public set allowedCaStatuses(value: string[]) {
    this._allowedCaStatuses = value;
  }
  public resetAllowedCaStatuses() {
    this._allowedCaStatuses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedCaStatusesInput() {
    return this._allowedCaStatuses;
  }
}

export class VulnerabilitiesReportFiltersCaFilterList extends cdktf.ComplexList {
  public internalValue? : VulnerabilitiesReportFiltersCaFilter[] | cdktf.IResolvable

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
  public get(index: number): VulnerabilitiesReportFiltersCaFilterOutputReference {
    return new VulnerabilitiesReportFiltersCaFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VulnerabilitiesReportFiltersCvssScore {
  /**
  * Maximum CVSS score.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/vulnerabilities_report#max_score VulnerabilitiesReport#max_score}
  */
  readonly maxScore?: number;
  /**
  * Minimum CVSS score.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/vulnerabilities_report#min_score VulnerabilitiesReport#min_score}
  */
  readonly minScore?: number;
}

export function vulnerabilitiesReportFiltersCvssScoreToTerraform(struct?: VulnerabilitiesReportFiltersCvssScore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_score: cdktf.numberToTerraform(struct!.maxScore),
    min_score: cdktf.numberToTerraform(struct!.minScore),
  }
}


export function vulnerabilitiesReportFiltersCvssScoreToHclTerraform(struct?: VulnerabilitiesReportFiltersCvssScore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_score: {
      value: cdktf.numberToHclTerraform(struct!.maxScore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_score: {
      value: cdktf.numberToHclTerraform(struct!.minScore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VulnerabilitiesReportFiltersCvssScoreOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VulnerabilitiesReportFiltersCvssScore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxScore !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxScore = this._maxScore;
    }
    if (this._minScore !== undefined) {
      hasAnyValues = true;
      internalValueResult.minScore = this._minScore;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VulnerabilitiesReportFiltersCvssScore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxScore = undefined;
      this._minScore = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxScore = value.maxScore;
      this._minScore = value.minScore;
    }
  }

  // max_score - computed: false, optional: true, required: false
  private _maxScore?: number; 
  public get maxScore() {
    return this.getNumberAttribute('max_score');
  }
  public set maxScore(value: number) {
    this._maxScore = value;
  }
  public resetMaxScore() {
    this._maxScore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxScoreInput() {
    return this._maxScore;
  }

  // min_score - computed: false, optional: true, required: false
  private _minScore?: number; 
  public get minScore() {
    return this.getNumberAttribute('min_score');
  }
  public set minScore(value: number) {
    this._minScore = value;
  }
  public resetMinScore() {
    this._minScore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minScoreInput() {
    return this._minScore;
  }
}

export class VulnerabilitiesReportFiltersCvssScoreList extends cdktf.ComplexList {
  public internalValue? : VulnerabilitiesReportFiltersCvssScore[] | cdktf.IResolvable

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
  public get(index: number): VulnerabilitiesReportFiltersCvssScoreOutputReference {
    return new VulnerabilitiesReportFiltersCvssScoreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VulnerabilitiesReportFiltersPublished {
  /**
  * Published to date.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/vulnerabilities_report#end VulnerabilitiesReport#end}
  */
  readonly end?: string;
  /**
  * Published from date.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/vulnerabilities_report#start VulnerabilitiesReport#start}
  */
  readonly start?: string;
}

export function vulnerabilitiesReportFiltersPublishedToTerraform(struct?: VulnerabilitiesReportFiltersPublished | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function vulnerabilitiesReportFiltersPublishedToHclTerraform(struct?: VulnerabilitiesReportFiltersPublished | cdktf.IResolvable): any {
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

export class VulnerabilitiesReportFiltersPublishedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VulnerabilitiesReportFiltersPublished | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VulnerabilitiesReportFiltersPublished | cdktf.IResolvable | undefined) {
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

export class VulnerabilitiesReportFiltersPublishedList extends cdktf.ComplexList {
  public internalValue? : VulnerabilitiesReportFiltersPublished[] | cdktf.IResolvable

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
  public get(index: number): VulnerabilitiesReportFiltersPublishedOutputReference {
    return new VulnerabilitiesReportFiltersPublishedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VulnerabilitiesReportFiltersRuntimeFilter {
  /**
  * Time period to filter by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/vulnerabilities_report#time_period VulnerabilitiesReport#time_period}
  */
  readonly timePeriod?: string;
}

export function vulnerabilitiesReportFiltersRuntimeFilterToTerraform(struct?: VulnerabilitiesReportFiltersRuntimeFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time_period: cdktf.stringToTerraform(struct!.timePeriod),
  }
}


export function vulnerabilitiesReportFiltersRuntimeFilterToHclTerraform(struct?: VulnerabilitiesReportFiltersRuntimeFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    time_period: {
      value: cdktf.stringToHclTerraform(struct!.timePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VulnerabilitiesReportFiltersRuntimeFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VulnerabilitiesReportFiltersRuntimeFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.timePeriod = this._timePeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VulnerabilitiesReportFiltersRuntimeFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timePeriod = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timePeriod = value.timePeriod;
    }
  }

  // time_period - computed: false, optional: true, required: false
  private _timePeriod?: string; 
  public get timePeriod() {
    return this.getStringAttribute('time_period');
  }
  public set timePeriod(value: string) {
    this._timePeriod = value;
  }
  public resetTimePeriod() {
    this._timePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timePeriodInput() {
    return this._timePeriod;
  }
}

export class VulnerabilitiesReportFiltersRuntimeFilterList extends cdktf.ComplexList {
  public internalValue? : VulnerabilitiesReportFiltersRuntimeFilter[] | cdktf.IResolvable

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
  public get(index: number): VulnerabilitiesReportFiltersRuntimeFilterOutputReference {
    return new VulnerabilitiesReportFiltersRuntimeFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VulnerabilitiesReportFiltersScanDate {
  /**
  * Scanned to date.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/vulnerabilities_report#end VulnerabilitiesReport#end}
  */
  readonly end?: string;
  /**
  * Scanned from date.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/vulnerabilities_report#start VulnerabilitiesReport#start}
  */
  readonly start?: string;
}

export function vulnerabilitiesReportFiltersScanDateToTerraform(struct?: VulnerabilitiesReportFiltersScanDate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function vulnerabilitiesReportFiltersScanDateToHclTerraform(struct?: VulnerabilitiesReportFiltersScanDate | cdktf.IResolvable): any {
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

export class VulnerabilitiesReportFiltersScanDateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VulnerabilitiesReportFiltersScanDate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VulnerabilitiesReportFiltersScanDate | cdktf.IResolvable | undefined) {
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

export class VulnerabilitiesReportFiltersScanDateList extends cdktf.ComplexList {
  public internalValue? : VulnerabilitiesReportFiltersScanDate[] | cdktf.IResolvable

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
  public get(index: number): VulnerabilitiesReportFiltersScanDateOutputReference {
    return new VulnerabilitiesReportFiltersScanDateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VulnerabilitiesReportFilters {
  /**
  * CVE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/vulnerabilities_report#cve VulnerabilitiesReport#cve}
  */
  readonly cve?: string;
  /**
  * Whether the issue has a fix or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/vulnerabilities_report#has_remediation VulnerabilitiesReport#has_remediation}
  */
  readonly hasRemediation?: boolean | cdktf.IResolvable;
  /**
  * Filter by artifact name, you can use (*) at the beginning or end of a substring as a wildcard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/vulnerabilities_report#impacted_artifact VulnerabilitiesReport#impacted_artifact}
  */
  readonly impactedArtifact?: string;
  /**
  * Issue ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/vulnerabilities_report#issue_id VulnerabilitiesReport#issue_id}
  */
  readonly issueId?: string;
  /**
  * Severity levels. Allowed values: 'Low', 'Medium', 'High', 'Critical'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/vulnerabilities_report#severities VulnerabilitiesReport#severities}
  */
  readonly severities?: string[];
  /**
  * Filter by component name, you can use (*) at the beginning or end of a substring as a wildcard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/vulnerabilities_report#vulnerable_component VulnerabilitiesReport#vulnerable_component}
  */
  readonly vulnerableComponent?: string;
  /**
  * ca_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/vulnerabilities_report#ca_filter VulnerabilitiesReport#ca_filter}
  */
  readonly caFilter?: VulnerabilitiesReportFiltersCaFilter[] | cdktf.IResolvable;
  /**
  * cvss_score block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/vulnerabilities_report#cvss_score VulnerabilitiesReport#cvss_score}
  */
  readonly cvssScore?: VulnerabilitiesReportFiltersCvssScore[] | cdktf.IResolvable;
  /**
  * published block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/vulnerabilities_report#published VulnerabilitiesReport#published}
  */
  readonly published?: VulnerabilitiesReportFiltersPublished[] | cdktf.IResolvable;
  /**
  * runtime_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/vulnerabilities_report#runtime_filter VulnerabilitiesReport#runtime_filter}
  */
  readonly runtimeFilter?: VulnerabilitiesReportFiltersRuntimeFilter[] | cdktf.IResolvable;
  /**
  * scan_date block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/vulnerabilities_report#scan_date VulnerabilitiesReport#scan_date}
  */
  readonly scanDate?: VulnerabilitiesReportFiltersScanDate[] | cdktf.IResolvable;
}

export function vulnerabilitiesReportFiltersToTerraform(struct?: VulnerabilitiesReportFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cve: cdktf.stringToTerraform(struct!.cve),
    has_remediation: cdktf.booleanToTerraform(struct!.hasRemediation),
    impacted_artifact: cdktf.stringToTerraform(struct!.impactedArtifact),
    issue_id: cdktf.stringToTerraform(struct!.issueId),
    severities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.severities),
    vulnerable_component: cdktf.stringToTerraform(struct!.vulnerableComponent),
    ca_filter: cdktf.listMapper(vulnerabilitiesReportFiltersCaFilterToTerraform, true)(struct!.caFilter),
    cvss_score: cdktf.listMapper(vulnerabilitiesReportFiltersCvssScoreToTerraform, true)(struct!.cvssScore),
    published: cdktf.listMapper(vulnerabilitiesReportFiltersPublishedToTerraform, true)(struct!.published),
    runtime_filter: cdktf.listMapper(vulnerabilitiesReportFiltersRuntimeFilterToTerraform, true)(struct!.runtimeFilter),
    scan_date: cdktf.listMapper(vulnerabilitiesReportFiltersScanDateToTerraform, true)(struct!.scanDate),
  }
}


export function vulnerabilitiesReportFiltersToHclTerraform(struct?: VulnerabilitiesReportFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cve: {
      value: cdktf.stringToHclTerraform(struct!.cve),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    has_remediation: {
      value: cdktf.booleanToHclTerraform(struct!.hasRemediation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    impacted_artifact: {
      value: cdktf.stringToHclTerraform(struct!.impactedArtifact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issue_id: {
      value: cdktf.stringToHclTerraform(struct!.issueId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.severities),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    vulnerable_component: {
      value: cdktf.stringToHclTerraform(struct!.vulnerableComponent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_filter: {
      value: cdktf.listMapperHcl(vulnerabilitiesReportFiltersCaFilterToHclTerraform, true)(struct!.caFilter),
      isBlock: true,
      type: "set",
      storageClassType: "VulnerabilitiesReportFiltersCaFilterList",
    },
    cvss_score: {
      value: cdktf.listMapperHcl(vulnerabilitiesReportFiltersCvssScoreToHclTerraform, true)(struct!.cvssScore),
      isBlock: true,
      type: "set",
      storageClassType: "VulnerabilitiesReportFiltersCvssScoreList",
    },
    published: {
      value: cdktf.listMapperHcl(vulnerabilitiesReportFiltersPublishedToHclTerraform, true)(struct!.published),
      isBlock: true,
      type: "set",
      storageClassType: "VulnerabilitiesReportFiltersPublishedList",
    },
    runtime_filter: {
      value: cdktf.listMapperHcl(vulnerabilitiesReportFiltersRuntimeFilterToHclTerraform, true)(struct!.runtimeFilter),
      isBlock: true,
      type: "set",
      storageClassType: "VulnerabilitiesReportFiltersRuntimeFilterList",
    },
    scan_date: {
      value: cdktf.listMapperHcl(vulnerabilitiesReportFiltersScanDateToHclTerraform, true)(struct!.scanDate),
      isBlock: true,
      type: "set",
      storageClassType: "VulnerabilitiesReportFiltersScanDateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VulnerabilitiesReportFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VulnerabilitiesReportFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cve !== undefined) {
      hasAnyValues = true;
      internalValueResult.cve = this._cve;
    }
    if (this._hasRemediation !== undefined) {
      hasAnyValues = true;
      internalValueResult.hasRemediation = this._hasRemediation;
    }
    if (this._impactedArtifact !== undefined) {
      hasAnyValues = true;
      internalValueResult.impactedArtifact = this._impactedArtifact;
    }
    if (this._issueId !== undefined) {
      hasAnyValues = true;
      internalValueResult.issueId = this._issueId;
    }
    if (this._severities !== undefined) {
      hasAnyValues = true;
      internalValueResult.severities = this._severities;
    }
    if (this._vulnerableComponent !== undefined) {
      hasAnyValues = true;
      internalValueResult.vulnerableComponent = this._vulnerableComponent;
    }
    if (this._caFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFilter = this._caFilter?.internalValue;
    }
    if (this._cvssScore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cvssScore = this._cvssScore?.internalValue;
    }
    if (this._published?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.published = this._published?.internalValue;
    }
    if (this._runtimeFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeFilter = this._runtimeFilter?.internalValue;
    }
    if (this._scanDate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanDate = this._scanDate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VulnerabilitiesReportFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cve = undefined;
      this._hasRemediation = undefined;
      this._impactedArtifact = undefined;
      this._issueId = undefined;
      this._severities = undefined;
      this._vulnerableComponent = undefined;
      this._caFilter.internalValue = undefined;
      this._cvssScore.internalValue = undefined;
      this._published.internalValue = undefined;
      this._runtimeFilter.internalValue = undefined;
      this._scanDate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cve = value.cve;
      this._hasRemediation = value.hasRemediation;
      this._impactedArtifact = value.impactedArtifact;
      this._issueId = value.issueId;
      this._severities = value.severities;
      this._vulnerableComponent = value.vulnerableComponent;
      this._caFilter.internalValue = value.caFilter;
      this._cvssScore.internalValue = value.cvssScore;
      this._published.internalValue = value.published;
      this._runtimeFilter.internalValue = value.runtimeFilter;
      this._scanDate.internalValue = value.scanDate;
    }
  }

  // cve - computed: false, optional: true, required: false
  private _cve?: string; 
  public get cve() {
    return this.getStringAttribute('cve');
  }
  public set cve(value: string) {
    this._cve = value;
  }
  public resetCve() {
    this._cve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cveInput() {
    return this._cve;
  }

  // has_remediation - computed: false, optional: true, required: false
  private _hasRemediation?: boolean | cdktf.IResolvable; 
  public get hasRemediation() {
    return this.getBooleanAttribute('has_remediation');
  }
  public set hasRemediation(value: boolean | cdktf.IResolvable) {
    this._hasRemediation = value;
  }
  public resetHasRemediation() {
    this._hasRemediation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasRemediationInput() {
    return this._hasRemediation;
  }

  // impacted_artifact - computed: false, optional: true, required: false
  private _impactedArtifact?: string; 
  public get impactedArtifact() {
    return this.getStringAttribute('impacted_artifact');
  }
  public set impactedArtifact(value: string) {
    this._impactedArtifact = value;
  }
  public resetImpactedArtifact() {
    this._impactedArtifact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get impactedArtifactInput() {
    return this._impactedArtifact;
  }

  // issue_id - computed: true, optional: true, required: false
  private _issueId?: string; 
  public get issueId() {
    return this.getStringAttribute('issue_id');
  }
  public set issueId(value: string) {
    this._issueId = value;
  }
  public resetIssueId() {
    this._issueId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issueIdInput() {
    return this._issueId;
  }

  // severities - computed: true, optional: true, required: false
  private _severities?: string[]; 
  public get severities() {
    return cdktf.Fn.tolist(this.getListAttribute('severities'));
  }
  public set severities(value: string[]) {
    this._severities = value;
  }
  public resetSeverities() {
    this._severities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severitiesInput() {
    return this._severities;
  }

  // vulnerable_component - computed: false, optional: true, required: false
  private _vulnerableComponent?: string; 
  public get vulnerableComponent() {
    return this.getStringAttribute('vulnerable_component');
  }
  public set vulnerableComponent(value: string) {
    this._vulnerableComponent = value;
  }
  public resetVulnerableComponent() {
    this._vulnerableComponent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerableComponentInput() {
    return this._vulnerableComponent;
  }

  // ca_filter - computed: false, optional: true, required: false
  private _caFilter = new VulnerabilitiesReportFiltersCaFilterList(this, "ca_filter", true);
  public get caFilter() {
    return this._caFilter;
  }
  public putCaFilter(value: VulnerabilitiesReportFiltersCaFilter[] | cdktf.IResolvable) {
    this._caFilter.internalValue = value;
  }
  public resetCaFilter() {
    this._caFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFilterInput() {
    return this._caFilter.internalValue;
  }

  // cvss_score - computed: false, optional: true, required: false
  private _cvssScore = new VulnerabilitiesReportFiltersCvssScoreList(this, "cvss_score", true);
  public get cvssScore() {
    return this._cvssScore;
  }
  public putCvssScore(value: VulnerabilitiesReportFiltersCvssScore[] | cdktf.IResolvable) {
    this._cvssScore.internalValue = value;
  }
  public resetCvssScore() {
    this._cvssScore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cvssScoreInput() {
    return this._cvssScore.internalValue;
  }

  // published - computed: false, optional: true, required: false
  private _published = new VulnerabilitiesReportFiltersPublishedList(this, "published", true);
  public get published() {
    return this._published;
  }
  public putPublished(value: VulnerabilitiesReportFiltersPublished[] | cdktf.IResolvable) {
    this._published.internalValue = value;
  }
  public resetPublished() {
    this._published.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishedInput() {
    return this._published.internalValue;
  }

  // runtime_filter - computed: false, optional: true, required: false
  private _runtimeFilter = new VulnerabilitiesReportFiltersRuntimeFilterList(this, "runtime_filter", true);
  public get runtimeFilter() {
    return this._runtimeFilter;
  }
  public putRuntimeFilter(value: VulnerabilitiesReportFiltersRuntimeFilter[] | cdktf.IResolvable) {
    this._runtimeFilter.internalValue = value;
  }
  public resetRuntimeFilter() {
    this._runtimeFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeFilterInput() {
    return this._runtimeFilter.internalValue;
  }

  // scan_date - computed: false, optional: true, required: false
  private _scanDate = new VulnerabilitiesReportFiltersScanDateList(this, "scan_date", true);
  public get scanDate() {
    return this._scanDate;
  }
  public putScanDate(value: VulnerabilitiesReportFiltersScanDate[] | cdktf.IResolvable) {
    this._scanDate.internalValue = value;
  }
  public resetScanDate() {
    this._scanDate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanDateInput() {
    return this._scanDate.internalValue;
  }
}

export class VulnerabilitiesReportFiltersList extends cdktf.ComplexList {
  public internalValue? : VulnerabilitiesReportFilters[] | cdktf.IResolvable

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
  public get(index: number): VulnerabilitiesReportFiltersOutputReference {
    return new VulnerabilitiesReportFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VulnerabilitiesReportResourcesBuilds {
  /**
  * The list of exclude patterns. Only one of 'names' or '*_patterns' can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/vulnerabilities_report#exclude_patterns VulnerabilitiesReport#exclude_patterns}
  */
  readonly excludePatterns?: string[];
  /**
  * The list of include patterns. Only one of 'names' or '*_patterns' can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/vulnerabilities_report#include_patterns VulnerabilitiesReport#include_patterns}
  */
  readonly includePatterns?: string[];
  /**
  * The list of build names. Only one of 'names' or '*_patterns' can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/vulnerabilities_report#names VulnerabilitiesReport#names}
  */
  readonly names?: string[];
  /**
  * The number of latest build versions to include to the report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/vulnerabilities_report#number_of_latest_versions VulnerabilitiesReport#number_of_latest_versions}
  */
  readonly numberOfLatestVersions?: number;
}

export function vulnerabilitiesReportResourcesBuildsToTerraform(struct?: VulnerabilitiesReportResourcesBuilds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludePatterns),
    include_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includePatterns),
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
    number_of_latest_versions: cdktf.numberToTerraform(struct!.numberOfLatestVersions),
  }
}


export function vulnerabilitiesReportResourcesBuildsToHclTerraform(struct?: VulnerabilitiesReportResourcesBuilds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludePatterns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    include_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includePatterns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.names),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    number_of_latest_versions: {
      value: cdktf.numberToHclTerraform(struct!.numberOfLatestVersions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VulnerabilitiesReportResourcesBuildsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VulnerabilitiesReportResourcesBuilds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludePatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludePatterns = this._excludePatterns;
    }
    if (this._includePatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.includePatterns = this._includePatterns;
    }
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    if (this._numberOfLatestVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfLatestVersions = this._numberOfLatestVersions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VulnerabilitiesReportResourcesBuilds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludePatterns = undefined;
      this._includePatterns = undefined;
      this._names = undefined;
      this._numberOfLatestVersions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludePatterns = value.excludePatterns;
      this._includePatterns = value.includePatterns;
      this._names = value.names;
      this._numberOfLatestVersions = value.numberOfLatestVersions;
    }
  }

  // exclude_patterns - computed: true, optional: true, required: false
  private _excludePatterns?: string[]; 
  public get excludePatterns() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_patterns'));
  }
  public set excludePatterns(value: string[]) {
    this._excludePatterns = value;
  }
  public resetExcludePatterns() {
    this._excludePatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludePatternsInput() {
    return this._excludePatterns;
  }

  // include_patterns - computed: true, optional: true, required: false
  private _includePatterns?: string[]; 
  public get includePatterns() {
    return cdktf.Fn.tolist(this.getListAttribute('include_patterns'));
  }
  public set includePatterns(value: string[]) {
    this._includePatterns = value;
  }
  public resetIncludePatterns() {
    this._includePatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePatternsInput() {
    return this._includePatterns;
  }

  // names - computed: true, optional: true, required: false
  private _names?: string[]; 
  public get names() {
    return cdktf.Fn.tolist(this.getListAttribute('names'));
  }
  public set names(value: string[]) {
    this._names = value;
  }
  public resetNames() {
    this._names = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }

  // number_of_latest_versions - computed: true, optional: true, required: false
  private _numberOfLatestVersions?: number; 
  public get numberOfLatestVersions() {
    return this.getNumberAttribute('number_of_latest_versions');
  }
  public set numberOfLatestVersions(value: number) {
    this._numberOfLatestVersions = value;
  }
  public resetNumberOfLatestVersions() {
    this._numberOfLatestVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfLatestVersionsInput() {
    return this._numberOfLatestVersions;
  }
}

export class VulnerabilitiesReportResourcesBuildsList extends cdktf.ComplexList {
  public internalValue? : VulnerabilitiesReportResourcesBuilds[] | cdktf.IResolvable

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
  public get(index: number): VulnerabilitiesReportResourcesBuildsOutputReference {
    return new VulnerabilitiesReportResourcesBuildsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VulnerabilitiesReportResourcesProjects {
  /**
  * The list of exclude patterns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/vulnerabilities_report#exclude_key_patterns VulnerabilitiesReport#exclude_key_patterns}
  */
  readonly excludeKeyPatterns?: string[];
  /**
  * The list of include patterns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/vulnerabilities_report#include_key_patterns VulnerabilitiesReport#include_key_patterns}
  */
  readonly includeKeyPatterns?: string[];
  /**
  * The list of project keys. Note: Available from Xray version 3.130.0 and higher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/vulnerabilities_report#keys VulnerabilitiesReport#keys}
  */
  readonly keys?: string[];
  /**
  * The list of project names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/vulnerabilities_report#names VulnerabilitiesReport#names}
  */
  readonly names?: string[];
  /**
  * The number of latest release bundle versions to include to the report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/vulnerabilities_report#number_of_latest_versions VulnerabilitiesReport#number_of_latest_versions}
  */
  readonly numberOfLatestVersions?: number;
}

export function vulnerabilitiesReportResourcesProjectsToTerraform(struct?: VulnerabilitiesReportResourcesProjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_key_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeKeyPatterns),
    include_key_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeKeyPatterns),
    keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keys),
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
    number_of_latest_versions: cdktf.numberToTerraform(struct!.numberOfLatestVersions),
  }
}


export function vulnerabilitiesReportResourcesProjectsToHclTerraform(struct?: VulnerabilitiesReportResourcesProjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_key_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeKeyPatterns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    include_key_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeKeyPatterns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.names),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    number_of_latest_versions: {
      value: cdktf.numberToHclTerraform(struct!.numberOfLatestVersions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VulnerabilitiesReportResourcesProjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VulnerabilitiesReportResourcesProjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeKeyPatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeKeyPatterns = this._excludeKeyPatterns;
    }
    if (this._includeKeyPatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeKeyPatterns = this._includeKeyPatterns;
    }
    if (this._keys !== undefined) {
      hasAnyValues = true;
      internalValueResult.keys = this._keys;
    }
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    if (this._numberOfLatestVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfLatestVersions = this._numberOfLatestVersions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VulnerabilitiesReportResourcesProjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludeKeyPatterns = undefined;
      this._includeKeyPatterns = undefined;
      this._keys = undefined;
      this._names = undefined;
      this._numberOfLatestVersions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludeKeyPatterns = value.excludeKeyPatterns;
      this._includeKeyPatterns = value.includeKeyPatterns;
      this._keys = value.keys;
      this._names = value.names;
      this._numberOfLatestVersions = value.numberOfLatestVersions;
    }
  }

  // exclude_key_patterns - computed: true, optional: true, required: false
  private _excludeKeyPatterns?: string[]; 
  public get excludeKeyPatterns() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_key_patterns'));
  }
  public set excludeKeyPatterns(value: string[]) {
    this._excludeKeyPatterns = value;
  }
  public resetExcludeKeyPatterns() {
    this._excludeKeyPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeKeyPatternsInput() {
    return this._excludeKeyPatterns;
  }

  // include_key_patterns - computed: true, optional: true, required: false
  private _includeKeyPatterns?: string[]; 
  public get includeKeyPatterns() {
    return cdktf.Fn.tolist(this.getListAttribute('include_key_patterns'));
  }
  public set includeKeyPatterns(value: string[]) {
    this._includeKeyPatterns = value;
  }
  public resetIncludeKeyPatterns() {
    this._includeKeyPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeKeyPatternsInput() {
    return this._includeKeyPatterns;
  }

  // keys - computed: false, optional: true, required: false
  private _keys?: string[]; 
  public get keys() {
    return cdktf.Fn.tolist(this.getListAttribute('keys'));
  }
  public set keys(value: string[]) {
    this._keys = value;
  }
  public resetKeys() {
    this._keys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys;
  }

  // names - computed: true, optional: true, required: false
  private _names?: string[]; 
  public get names() {
    return cdktf.Fn.tolist(this.getListAttribute('names'));
  }
  public set names(value: string[]) {
    this._names = value;
  }
  public resetNames() {
    this._names = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }

  // number_of_latest_versions - computed: true, optional: true, required: false
  private _numberOfLatestVersions?: number; 
  public get numberOfLatestVersions() {
    return this.getNumberAttribute('number_of_latest_versions');
  }
  public set numberOfLatestVersions(value: number) {
    this._numberOfLatestVersions = value;
  }
  public resetNumberOfLatestVersions() {
    this._numberOfLatestVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfLatestVersionsInput() {
    return this._numberOfLatestVersions;
  }
}

export class VulnerabilitiesReportResourcesProjectsList extends cdktf.ComplexList {
  public internalValue? : VulnerabilitiesReportResourcesProjects[] | cdktf.IResolvable

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
  public get(index: number): VulnerabilitiesReportResourcesProjectsOutputReference {
    return new VulnerabilitiesReportResourcesProjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VulnerabilitiesReportResourcesReleaseBundles {
  /**
  * The list of exclude patterns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/vulnerabilities_report#exclude_patterns VulnerabilitiesReport#exclude_patterns}
  */
  readonly excludePatterns?: string[];
  /**
  * The list of include patterns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/vulnerabilities_report#include_patterns VulnerabilitiesReport#include_patterns}
  */
  readonly includePatterns?: string[];
  /**
  * The list of release bundles names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/vulnerabilities_report#names VulnerabilitiesReport#names}
  */
  readonly names?: string[];
  /**
  * The number of latest release bundle versions to include to the report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/vulnerabilities_report#number_of_latest_versions VulnerabilitiesReport#number_of_latest_versions}
  */
  readonly numberOfLatestVersions?: number;
}

export function vulnerabilitiesReportResourcesReleaseBundlesToTerraform(struct?: VulnerabilitiesReportResourcesReleaseBundles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludePatterns),
    include_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includePatterns),
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
    number_of_latest_versions: cdktf.numberToTerraform(struct!.numberOfLatestVersions),
  }
}


export function vulnerabilitiesReportResourcesReleaseBundlesToHclTerraform(struct?: VulnerabilitiesReportResourcesReleaseBundles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludePatterns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    include_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includePatterns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.names),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    number_of_latest_versions: {
      value: cdktf.numberToHclTerraform(struct!.numberOfLatestVersions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VulnerabilitiesReportResourcesReleaseBundlesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VulnerabilitiesReportResourcesReleaseBundles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludePatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludePatterns = this._excludePatterns;
    }
    if (this._includePatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.includePatterns = this._includePatterns;
    }
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    if (this._numberOfLatestVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfLatestVersions = this._numberOfLatestVersions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VulnerabilitiesReportResourcesReleaseBundles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludePatterns = undefined;
      this._includePatterns = undefined;
      this._names = undefined;
      this._numberOfLatestVersions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludePatterns = value.excludePatterns;
      this._includePatterns = value.includePatterns;
      this._names = value.names;
      this._numberOfLatestVersions = value.numberOfLatestVersions;
    }
  }

  // exclude_patterns - computed: true, optional: true, required: false
  private _excludePatterns?: string[]; 
  public get excludePatterns() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_patterns'));
  }
  public set excludePatterns(value: string[]) {
    this._excludePatterns = value;
  }
  public resetExcludePatterns() {
    this._excludePatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludePatternsInput() {
    return this._excludePatterns;
  }

  // include_patterns - computed: true, optional: true, required: false
  private _includePatterns?: string[]; 
  public get includePatterns() {
    return cdktf.Fn.tolist(this.getListAttribute('include_patterns'));
  }
  public set includePatterns(value: string[]) {
    this._includePatterns = value;
  }
  public resetIncludePatterns() {
    this._includePatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePatternsInput() {
    return this._includePatterns;
  }

  // names - computed: true, optional: true, required: false
  private _names?: string[]; 
  public get names() {
    return cdktf.Fn.tolist(this.getListAttribute('names'));
  }
  public set names(value: string[]) {
    this._names = value;
  }
  public resetNames() {
    this._names = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }

  // number_of_latest_versions - computed: true, optional: true, required: false
  private _numberOfLatestVersions?: number; 
  public get numberOfLatestVersions() {
    return this.getNumberAttribute('number_of_latest_versions');
  }
  public set numberOfLatestVersions(value: number) {
    this._numberOfLatestVersions = value;
  }
  public resetNumberOfLatestVersions() {
    this._numberOfLatestVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfLatestVersionsInput() {
    return this._numberOfLatestVersions;
  }
}

export class VulnerabilitiesReportResourcesReleaseBundlesList extends cdktf.ComplexList {
  public internalValue? : VulnerabilitiesReportResourcesReleaseBundles[] | cdktf.IResolvable

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
  public get(index: number): VulnerabilitiesReportResourcesReleaseBundlesOutputReference {
    return new VulnerabilitiesReportResourcesReleaseBundlesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VulnerabilitiesReportResourcesReleaseBundlesV2 {
  /**
  * The list of exclude patterns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/vulnerabilities_report#exclude_patterns VulnerabilitiesReport#exclude_patterns}
  */
  readonly excludePatterns?: string[];
  /**
  * The list of include patterns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/vulnerabilities_report#include_patterns VulnerabilitiesReport#include_patterns}
  */
  readonly includePatterns?: string[];
  /**
  * The list of release bundles names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/vulnerabilities_report#names VulnerabilitiesReport#names}
  */
  readonly names?: string[];
  /**
  * The number of latest release bundle versions to include to the report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/vulnerabilities_report#number_of_latest_versions VulnerabilitiesReport#number_of_latest_versions}
  */
  readonly numberOfLatestVersions?: number;
}

export function vulnerabilitiesReportResourcesReleaseBundlesV2ToTerraform(struct?: VulnerabilitiesReportResourcesReleaseBundlesV2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludePatterns),
    include_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includePatterns),
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
    number_of_latest_versions: cdktf.numberToTerraform(struct!.numberOfLatestVersions),
  }
}


export function vulnerabilitiesReportResourcesReleaseBundlesV2ToHclTerraform(struct?: VulnerabilitiesReportResourcesReleaseBundlesV2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludePatterns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    include_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includePatterns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.names),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    number_of_latest_versions: {
      value: cdktf.numberToHclTerraform(struct!.numberOfLatestVersions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VulnerabilitiesReportResourcesReleaseBundlesV2OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VulnerabilitiesReportResourcesReleaseBundlesV2 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludePatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludePatterns = this._excludePatterns;
    }
    if (this._includePatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.includePatterns = this._includePatterns;
    }
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    if (this._numberOfLatestVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfLatestVersions = this._numberOfLatestVersions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VulnerabilitiesReportResourcesReleaseBundlesV2 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludePatterns = undefined;
      this._includePatterns = undefined;
      this._names = undefined;
      this._numberOfLatestVersions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludePatterns = value.excludePatterns;
      this._includePatterns = value.includePatterns;
      this._names = value.names;
      this._numberOfLatestVersions = value.numberOfLatestVersions;
    }
  }

  // exclude_patterns - computed: true, optional: true, required: false
  private _excludePatterns?: string[]; 
  public get excludePatterns() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_patterns'));
  }
  public set excludePatterns(value: string[]) {
    this._excludePatterns = value;
  }
  public resetExcludePatterns() {
    this._excludePatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludePatternsInput() {
    return this._excludePatterns;
  }

  // include_patterns - computed: true, optional: true, required: false
  private _includePatterns?: string[]; 
  public get includePatterns() {
    return cdktf.Fn.tolist(this.getListAttribute('include_patterns'));
  }
  public set includePatterns(value: string[]) {
    this._includePatterns = value;
  }
  public resetIncludePatterns() {
    this._includePatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePatternsInput() {
    return this._includePatterns;
  }

  // names - computed: true, optional: true, required: false
  private _names?: string[]; 
  public get names() {
    return cdktf.Fn.tolist(this.getListAttribute('names'));
  }
  public set names(value: string[]) {
    this._names = value;
  }
  public resetNames() {
    this._names = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }

  // number_of_latest_versions - computed: true, optional: true, required: false
  private _numberOfLatestVersions?: number; 
  public get numberOfLatestVersions() {
    return this.getNumberAttribute('number_of_latest_versions');
  }
  public set numberOfLatestVersions(value: number) {
    this._numberOfLatestVersions = value;
  }
  public resetNumberOfLatestVersions() {
    this._numberOfLatestVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfLatestVersionsInput() {
    return this._numberOfLatestVersions;
  }
}

export class VulnerabilitiesReportResourcesReleaseBundlesV2List extends cdktf.ComplexList {
  public internalValue? : VulnerabilitiesReportResourcesReleaseBundlesV2[] | cdktf.IResolvable

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
  public get(index: number): VulnerabilitiesReportResourcesReleaseBundlesV2OutputReference {
    return new VulnerabilitiesReportResourcesReleaseBundlesV2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VulnerabilitiesReportResourcesRepository {
  /**
  * Exclude path patterns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/vulnerabilities_report#exclude_path_patterns VulnerabilitiesReport#exclude_path_patterns}
  */
  readonly excludePathPatterns?: string[];
  /**
  * Include path patterns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/vulnerabilities_report#include_path_patterns VulnerabilitiesReport#include_path_patterns}
  */
  readonly includePathPatterns?: string[];
  /**
  * Repository name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/vulnerabilities_report#name VulnerabilitiesReport#name}
  */
  readonly name: string;
}

export function vulnerabilitiesReportResourcesRepositoryToTerraform(struct?: VulnerabilitiesReportResourcesRepository | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_path_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludePathPatterns),
    include_path_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includePathPatterns),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function vulnerabilitiesReportResourcesRepositoryToHclTerraform(struct?: VulnerabilitiesReportResourcesRepository | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_path_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludePathPatterns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    include_path_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includePathPatterns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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

export class VulnerabilitiesReportResourcesRepositoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VulnerabilitiesReportResourcesRepository | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludePathPatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludePathPatterns = this._excludePathPatterns;
    }
    if (this._includePathPatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.includePathPatterns = this._includePathPatterns;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VulnerabilitiesReportResourcesRepository | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludePathPatterns = undefined;
      this._includePathPatterns = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludePathPatterns = value.excludePathPatterns;
      this._includePathPatterns = value.includePathPatterns;
      this._name = value.name;
    }
  }

  // exclude_path_patterns - computed: true, optional: true, required: false
  private _excludePathPatterns?: string[]; 
  public get excludePathPatterns() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_path_patterns'));
  }
  public set excludePathPatterns(value: string[]) {
    this._excludePathPatterns = value;
  }
  public resetExcludePathPatterns() {
    this._excludePathPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludePathPatternsInput() {
    return this._excludePathPatterns;
  }

  // include_path_patterns - computed: true, optional: true, required: false
  private _includePathPatterns?: string[]; 
  public get includePathPatterns() {
    return cdktf.Fn.tolist(this.getListAttribute('include_path_patterns'));
  }
  public set includePathPatterns(value: string[]) {
    this._includePathPatterns = value;
  }
  public resetIncludePathPatterns() {
    this._includePathPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePathPatternsInput() {
    return this._includePathPatterns;
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

export class VulnerabilitiesReportResourcesRepositoryList extends cdktf.ComplexList {
  public internalValue? : VulnerabilitiesReportResourcesRepository[] | cdktf.IResolvable

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
  public get(index: number): VulnerabilitiesReportResourcesRepositoryOutputReference {
    return new VulnerabilitiesReportResourcesRepositoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VulnerabilitiesReportResources {
  /**
  * builds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/vulnerabilities_report#builds VulnerabilitiesReport#builds}
  */
  readonly builds?: VulnerabilitiesReportResourcesBuilds[] | cdktf.IResolvable;
  /**
  * projects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/vulnerabilities_report#projects VulnerabilitiesReport#projects}
  */
  readonly projects?: VulnerabilitiesReportResourcesProjects[] | cdktf.IResolvable;
  /**
  * release_bundles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/vulnerabilities_report#release_bundles VulnerabilitiesReport#release_bundles}
  */
  readonly releaseBundles?: VulnerabilitiesReportResourcesReleaseBundles[] | cdktf.IResolvable;
  /**
  * release_bundles_v2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/vulnerabilities_report#release_bundles_v2 VulnerabilitiesReport#release_bundles_v2}
  */
  readonly releaseBundlesV2?: VulnerabilitiesReportResourcesReleaseBundlesV2[] | cdktf.IResolvable;
  /**
  * repository block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/vulnerabilities_report#repository VulnerabilitiesReport#repository}
  */
  readonly repository?: VulnerabilitiesReportResourcesRepository[] | cdktf.IResolvable;
}

export function vulnerabilitiesReportResourcesToTerraform(struct?: VulnerabilitiesReportResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    builds: cdktf.listMapper(vulnerabilitiesReportResourcesBuildsToTerraform, true)(struct!.builds),
    projects: cdktf.listMapper(vulnerabilitiesReportResourcesProjectsToTerraform, true)(struct!.projects),
    release_bundles: cdktf.listMapper(vulnerabilitiesReportResourcesReleaseBundlesToTerraform, true)(struct!.releaseBundles),
    release_bundles_v2: cdktf.listMapper(vulnerabilitiesReportResourcesReleaseBundlesV2ToTerraform, true)(struct!.releaseBundlesV2),
    repository: cdktf.listMapper(vulnerabilitiesReportResourcesRepositoryToTerraform, true)(struct!.repository),
  }
}


export function vulnerabilitiesReportResourcesToHclTerraform(struct?: VulnerabilitiesReportResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    builds: {
      value: cdktf.listMapperHcl(vulnerabilitiesReportResourcesBuildsToHclTerraform, true)(struct!.builds),
      isBlock: true,
      type: "set",
      storageClassType: "VulnerabilitiesReportResourcesBuildsList",
    },
    projects: {
      value: cdktf.listMapperHcl(vulnerabilitiesReportResourcesProjectsToHclTerraform, true)(struct!.projects),
      isBlock: true,
      type: "set",
      storageClassType: "VulnerabilitiesReportResourcesProjectsList",
    },
    release_bundles: {
      value: cdktf.listMapperHcl(vulnerabilitiesReportResourcesReleaseBundlesToHclTerraform, true)(struct!.releaseBundles),
      isBlock: true,
      type: "set",
      storageClassType: "VulnerabilitiesReportResourcesReleaseBundlesList",
    },
    release_bundles_v2: {
      value: cdktf.listMapperHcl(vulnerabilitiesReportResourcesReleaseBundlesV2ToHclTerraform, true)(struct!.releaseBundlesV2),
      isBlock: true,
      type: "set",
      storageClassType: "VulnerabilitiesReportResourcesReleaseBundlesV2List",
    },
    repository: {
      value: cdktf.listMapperHcl(vulnerabilitiesReportResourcesRepositoryToHclTerraform, true)(struct!.repository),
      isBlock: true,
      type: "set",
      storageClassType: "VulnerabilitiesReportResourcesRepositoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VulnerabilitiesReportResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VulnerabilitiesReportResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._builds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.builds = this._builds?.internalValue;
    }
    if (this._projects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.projects = this._projects?.internalValue;
    }
    if (this._releaseBundles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.releaseBundles = this._releaseBundles?.internalValue;
    }
    if (this._releaseBundlesV2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.releaseBundlesV2 = this._releaseBundlesV2?.internalValue;
    }
    if (this._repository?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VulnerabilitiesReportResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._builds.internalValue = undefined;
      this._projects.internalValue = undefined;
      this._releaseBundles.internalValue = undefined;
      this._releaseBundlesV2.internalValue = undefined;
      this._repository.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._builds.internalValue = value.builds;
      this._projects.internalValue = value.projects;
      this._releaseBundles.internalValue = value.releaseBundles;
      this._releaseBundlesV2.internalValue = value.releaseBundlesV2;
      this._repository.internalValue = value.repository;
    }
  }

  // builds - computed: false, optional: true, required: false
  private _builds = new VulnerabilitiesReportResourcesBuildsList(this, "builds", true);
  public get builds() {
    return this._builds;
  }
  public putBuilds(value: VulnerabilitiesReportResourcesBuilds[] | cdktf.IResolvable) {
    this._builds.internalValue = value;
  }
  public resetBuilds() {
    this._builds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildsInput() {
    return this._builds.internalValue;
  }

  // projects - computed: false, optional: true, required: false
  private _projects = new VulnerabilitiesReportResourcesProjectsList(this, "projects", true);
  public get projects() {
    return this._projects;
  }
  public putProjects(value: VulnerabilitiesReportResourcesProjects[] | cdktf.IResolvable) {
    this._projects.internalValue = value;
  }
  public resetProjects() {
    this._projects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectsInput() {
    return this._projects.internalValue;
  }

  // release_bundles - computed: false, optional: true, required: false
  private _releaseBundles = new VulnerabilitiesReportResourcesReleaseBundlesList(this, "release_bundles", true);
  public get releaseBundles() {
    return this._releaseBundles;
  }
  public putReleaseBundles(value: VulnerabilitiesReportResourcesReleaseBundles[] | cdktf.IResolvable) {
    this._releaseBundles.internalValue = value;
  }
  public resetReleaseBundles() {
    this._releaseBundles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseBundlesInput() {
    return this._releaseBundles.internalValue;
  }

  // release_bundles_v2 - computed: false, optional: true, required: false
  private _releaseBundlesV2 = new VulnerabilitiesReportResourcesReleaseBundlesV2List(this, "release_bundles_v2", true);
  public get releaseBundlesV2() {
    return this._releaseBundlesV2;
  }
  public putReleaseBundlesV2(value: VulnerabilitiesReportResourcesReleaseBundlesV2[] | cdktf.IResolvable) {
    this._releaseBundlesV2.internalValue = value;
  }
  public resetReleaseBundlesV2() {
    this._releaseBundlesV2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseBundlesV2Input() {
    return this._releaseBundlesV2.internalValue;
  }

  // repository - computed: false, optional: true, required: false
  private _repository = new VulnerabilitiesReportResourcesRepositoryList(this, "repository", true);
  public get repository() {
    return this._repository;
  }
  public putRepository(value: VulnerabilitiesReportResourcesRepository[] | cdktf.IResolvable) {
    this._repository.internalValue = value;
  }
  public resetRepository() {
    this._repository.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository.internalValue;
  }
}

export class VulnerabilitiesReportResourcesList extends cdktf.ComplexList {
  public internalValue? : VulnerabilitiesReportResources[] | cdktf.IResolvable

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
  public get(index: number): VulnerabilitiesReportResourcesOutputReference {
    return new VulnerabilitiesReportResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/vulnerabilities_report xray_vulnerabilities_report}
*/
export class VulnerabilitiesReport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "xray_vulnerabilities_report";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VulnerabilitiesReport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VulnerabilitiesReport to import
  * @param importFromId The id of the existing VulnerabilitiesReport that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/vulnerabilities_report#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VulnerabilitiesReport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "xray_vulnerabilities_report", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/vulnerabilities_report xray_vulnerabilities_report} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VulnerabilitiesReportConfig
  */
  public constructor(scope: Construct, id: string, config: VulnerabilitiesReportConfig) {
    super(scope, id, {
      terraformResourceType: 'xray_vulnerabilities_report',
      terraformGeneratorMetadata: {
        providerName: 'xray',
        providerVersion: '3.1.2',
        providerVersionConstraint: '3.1.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cronSchedule = config.cronSchedule;
    this._cronScheduleTimezone = config.cronScheduleTimezone;
    this._emails = config.emails;
    this._name = config.name;
    this._projectKey = config.projectKey;
    this._filters.internalValue = config.filters;
    this._resources.internalValue = config.resources;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cron_schedule - computed: false, optional: true, required: false
  private _cronSchedule?: string; 
  public get cronSchedule() {
    return this.getStringAttribute('cron_schedule');
  }
  public set cronSchedule(value: string) {
    this._cronSchedule = value;
  }
  public resetCronSchedule() {
    this._cronSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronScheduleInput() {
    return this._cronSchedule;
  }

  // cron_schedule_timezone - computed: true, optional: true, required: false
  private _cronScheduleTimezone?: string; 
  public get cronScheduleTimezone() {
    return this.getStringAttribute('cron_schedule_timezone');
  }
  public set cronScheduleTimezone(value: string) {
    this._cronScheduleTimezone = value;
  }
  public resetCronScheduleTimezone() {
    this._cronScheduleTimezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronScheduleTimezoneInput() {
    return this._cronScheduleTimezone;
  }

  // emails - computed: false, optional: true, required: false
  private _emails?: string[]; 
  public get emails() {
    return cdktf.Fn.tolist(this.getListAttribute('emails'));
  }
  public set emails(value: string[]) {
    this._emails = value;
  }
  public resetEmails() {
    this._emails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailsInput() {
    return this._emails;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // project_key - computed: false, optional: true, required: false
  private _projectKey?: string; 
  public get projectKey() {
    return this.getStringAttribute('project_key');
  }
  public set projectKey(value: string) {
    this._projectKey = value;
  }
  public resetProjectKey() {
    this._projectKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectKeyInput() {
    return this._projectKey;
  }

  // report_id - computed: true, optional: false, required: false
  public get reportId() {
    return this.getNumberAttribute('report_id');
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new VulnerabilitiesReportFiltersList(this, "filters", true);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: VulnerabilitiesReportFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new VulnerabilitiesReportResourcesList(this, "resources", true);
  public get resources() {
    return this._resources;
  }
  public putResources(value: VulnerabilitiesReportResources[] | cdktf.IResolvable) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cron_schedule: cdktf.stringToTerraform(this._cronSchedule),
      cron_schedule_timezone: cdktf.stringToTerraform(this._cronScheduleTimezone),
      emails: cdktf.listMapper(cdktf.stringToTerraform, false)(this._emails),
      name: cdktf.stringToTerraform(this._name),
      project_key: cdktf.stringToTerraform(this._projectKey),
      filters: cdktf.listMapper(vulnerabilitiesReportFiltersToTerraform, true)(this._filters.internalValue),
      resources: cdktf.listMapper(vulnerabilitiesReportResourcesToTerraform, true)(this._resources.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cron_schedule: {
        value: cdktf.stringToHclTerraform(this._cronSchedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cron_schedule_timezone: {
        value: cdktf.stringToHclTerraform(this._cronScheduleTimezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      emails: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._emails),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_key: {
        value: cdktf.stringToHclTerraform(this._projectKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filters: {
        value: cdktf.listMapperHcl(vulnerabilitiesReportFiltersToHclTerraform, true)(this._filters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VulnerabilitiesReportFiltersList",
      },
      resources: {
        value: cdktf.listMapperHcl(vulnerabilitiesReportResourcesToHclTerraform, true)(this._resources.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VulnerabilitiesReportResourcesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
