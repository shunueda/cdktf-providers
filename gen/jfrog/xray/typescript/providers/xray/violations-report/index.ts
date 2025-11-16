// https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ViolationsReportConfig extends cdktf.TerraformMetaArguments {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#cron_schedule ViolationsReport#cron_schedule}
  */
  readonly cronSchedule?: string;
  /**
  * Timezone for cron schedule. For valid timezone formats, see: [iana-timezones](https://timeapi.io/documentation/iana-timezones). Note: Requires Xray 3.130.0 or higher. Only used when cron_schedule is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#cron_schedule_timezone ViolationsReport#cron_schedule_timezone}
  */
  readonly cronScheduleTimezone?: string;
  /**
  * List of email addresses to notify when report generation is complete. Note: Requires Xray 3.130.0 or higher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#emails ViolationsReport#emails}
  */
  readonly emails?: string[];
  /**
  * Name of the report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#name ViolationsReport#name}
  */
  readonly name: string;
  /**
  * Project key for assigning this resource to. Must be 2 - 10 lowercase alphanumeric and hyphen characters. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#project_key ViolationsReport#project_key}
  */
  readonly projectKey?: string;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#filters ViolationsReport#filters}
  */
  readonly filters?: ViolationsReportFilters[] | cdktf.IResolvable;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#resources ViolationsReport#resources}
  */
  readonly resources?: ViolationsReportResources[] | cdktf.IResolvable;
}
export interface ViolationsReportFiltersCaFilter {
  /**
  * Allowed CA statuses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#allowed_ca_statuses ViolationsReport#allowed_ca_statuses}
  */
  readonly allowedCaStatuses?: string[];
}

export function violationsReportFiltersCaFilterToTerraform(struct?: ViolationsReportFiltersCaFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_ca_statuses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedCaStatuses),
  }
}


export function violationsReportFiltersCaFilterToHclTerraform(struct?: ViolationsReportFiltersCaFilter | cdktf.IResolvable): any {
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

export class ViolationsReportFiltersCaFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ViolationsReportFiltersCaFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ViolationsReportFiltersCaFilter | cdktf.IResolvable | undefined) {
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

export class ViolationsReportFiltersCaFilterList extends cdktf.ComplexList {
  public internalValue? : ViolationsReportFiltersCaFilter[] | cdktf.IResolvable

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
  public get(index: number): ViolationsReportFiltersCaFilterOutputReference {
    return new ViolationsReportFiltersCaFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ViolationsReportFiltersLicenseFilters {
  /**
  * Filter licenses by names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#license_names ViolationsReport#license_names}
  */
  readonly licenseNames?: string[];
  /**
  * Filter licenses by patterns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#license_patterns ViolationsReport#license_patterns}
  */
  readonly licensePatterns?: string[];
  /**
  * Unknown displays the components that Xray could not discover any licenses for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#unknown ViolationsReport#unknown}
  */
  readonly unknown?: boolean | cdktf.IResolvable;
}

export function violationsReportFiltersLicenseFiltersToTerraform(struct?: ViolationsReportFiltersLicenseFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    license_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.licenseNames),
    license_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.licensePatterns),
    unknown: cdktf.booleanToTerraform(struct!.unknown),
  }
}


export function violationsReportFiltersLicenseFiltersToHclTerraform(struct?: ViolationsReportFiltersLicenseFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    license_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.licenseNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    license_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.licensePatterns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    unknown: {
      value: cdktf.booleanToHclTerraform(struct!.unknown),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ViolationsReportFiltersLicenseFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ViolationsReportFiltersLicenseFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._licenseNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseNames = this._licenseNames;
    }
    if (this._licensePatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.licensePatterns = this._licensePatterns;
    }
    if (this._unknown !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknown = this._unknown;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ViolationsReportFiltersLicenseFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._licenseNames = undefined;
      this._licensePatterns = undefined;
      this._unknown = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._licenseNames = value.licenseNames;
      this._licensePatterns = value.licensePatterns;
      this._unknown = value.unknown;
    }
  }

  // license_names - computed: true, optional: true, required: false
  private _licenseNames?: string[]; 
  public get licenseNames() {
    return cdktf.Fn.tolist(this.getListAttribute('license_names'));
  }
  public set licenseNames(value: string[]) {
    this._licenseNames = value;
  }
  public resetLicenseNames() {
    this._licenseNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseNamesInput() {
    return this._licenseNames;
  }

  // license_patterns - computed: true, optional: true, required: false
  private _licensePatterns?: string[]; 
  public get licensePatterns() {
    return cdktf.Fn.tolist(this.getListAttribute('license_patterns'));
  }
  public set licensePatterns(value: string[]) {
    this._licensePatterns = value;
  }
  public resetLicensePatterns() {
    this._licensePatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licensePatternsInput() {
    return this._licensePatterns;
  }

  // unknown - computed: false, optional: true, required: false
  private _unknown?: boolean | cdktf.IResolvable; 
  public get unknown() {
    return this.getBooleanAttribute('unknown');
  }
  public set unknown(value: boolean | cdktf.IResolvable) {
    this._unknown = value;
  }
  public resetUnknown() {
    this._unknown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownInput() {
    return this._unknown;
  }
}

export class ViolationsReportFiltersLicenseFiltersList extends cdktf.ComplexList {
  public internalValue? : ViolationsReportFiltersLicenseFilters[] | cdktf.IResolvable

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
  public get(index: number): ViolationsReportFiltersLicenseFiltersOutputReference {
    return new ViolationsReportFiltersLicenseFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ViolationsReportFiltersRuntimeFilter {
  /**
  * Time period to filter by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#time_period ViolationsReport#time_period}
  */
  readonly timePeriod?: string;
}

export function violationsReportFiltersRuntimeFilterToTerraform(struct?: ViolationsReportFiltersRuntimeFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time_period: cdktf.stringToTerraform(struct!.timePeriod),
  }
}


export function violationsReportFiltersRuntimeFilterToHclTerraform(struct?: ViolationsReportFiltersRuntimeFilter | cdktf.IResolvable): any {
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

export class ViolationsReportFiltersRuntimeFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ViolationsReportFiltersRuntimeFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ViolationsReportFiltersRuntimeFilter | cdktf.IResolvable | undefined) {
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

export class ViolationsReportFiltersRuntimeFilterList extends cdktf.ComplexList {
  public internalValue? : ViolationsReportFiltersRuntimeFilter[] | cdktf.IResolvable

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
  public get(index: number): ViolationsReportFiltersRuntimeFilterOutputReference {
    return new ViolationsReportFiltersRuntimeFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ViolationsReportFiltersSecurityFiltersCvssScore {
  /**
  * Maximum CVSS score.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#max_score ViolationsReport#max_score}
  */
  readonly maxScore?: number;
  /**
  * Minimum CVSS score.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#min_score ViolationsReport#min_score}
  */
  readonly minScore?: number;
}

export function violationsReportFiltersSecurityFiltersCvssScoreToTerraform(struct?: ViolationsReportFiltersSecurityFiltersCvssScore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_score: cdktf.numberToTerraform(struct!.maxScore),
    min_score: cdktf.numberToTerraform(struct!.minScore),
  }
}


export function violationsReportFiltersSecurityFiltersCvssScoreToHclTerraform(struct?: ViolationsReportFiltersSecurityFiltersCvssScore | cdktf.IResolvable): any {
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

export class ViolationsReportFiltersSecurityFiltersCvssScoreOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ViolationsReportFiltersSecurityFiltersCvssScore | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ViolationsReportFiltersSecurityFiltersCvssScore | cdktf.IResolvable | undefined) {
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

export class ViolationsReportFiltersSecurityFiltersCvssScoreList extends cdktf.ComplexList {
  public internalValue? : ViolationsReportFiltersSecurityFiltersCvssScore[] | cdktf.IResolvable

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
  public get(index: number): ViolationsReportFiltersSecurityFiltersCvssScoreOutputReference {
    return new ViolationsReportFiltersSecurityFiltersCvssScoreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ViolationsReportFiltersSecurityFiltersPublished {
  /**
  * Published to date.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#end ViolationsReport#end}
  */
  readonly end?: string;
  /**
  * Published from date.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#start ViolationsReport#start}
  */
  readonly start?: string;
}

export function violationsReportFiltersSecurityFiltersPublishedToTerraform(struct?: ViolationsReportFiltersSecurityFiltersPublished | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function violationsReportFiltersSecurityFiltersPublishedToHclTerraform(struct?: ViolationsReportFiltersSecurityFiltersPublished | cdktf.IResolvable): any {
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

export class ViolationsReportFiltersSecurityFiltersPublishedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ViolationsReportFiltersSecurityFiltersPublished | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ViolationsReportFiltersSecurityFiltersPublished | cdktf.IResolvable | undefined) {
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

export class ViolationsReportFiltersSecurityFiltersPublishedList extends cdktf.ComplexList {
  public internalValue? : ViolationsReportFiltersSecurityFiltersPublished[] | cdktf.IResolvable

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
  public get(index: number): ViolationsReportFiltersSecurityFiltersPublishedOutputReference {
    return new ViolationsReportFiltersSecurityFiltersPublishedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ViolationsReportFiltersSecurityFilters {
  /**
  * CVE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#cve ViolationsReport#cve}
  */
  readonly cve?: string;
  /**
  * Whether the issue has a fix or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#has_remediation ViolationsReport#has_remediation}
  */
  readonly hasRemediation?: boolean | cdktf.IResolvable;
  /**
  * Issue ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#issue_id ViolationsReport#issue_id}
  */
  readonly issueId?: string;
  /**
  * Vulnerability Summary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#summary_contains ViolationsReport#summary_contains}
  */
  readonly summaryContains?: string;
  /**
  * cvss_score block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#cvss_score ViolationsReport#cvss_score}
  */
  readonly cvssScore?: ViolationsReportFiltersSecurityFiltersCvssScore[] | cdktf.IResolvable;
  /**
  * published block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#published ViolationsReport#published}
  */
  readonly published?: ViolationsReportFiltersSecurityFiltersPublished[] | cdktf.IResolvable;
}

export function violationsReportFiltersSecurityFiltersToTerraform(struct?: ViolationsReportFiltersSecurityFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cve: cdktf.stringToTerraform(struct!.cve),
    has_remediation: cdktf.booleanToTerraform(struct!.hasRemediation),
    issue_id: cdktf.stringToTerraform(struct!.issueId),
    summary_contains: cdktf.stringToTerraform(struct!.summaryContains),
    cvss_score: cdktf.listMapper(violationsReportFiltersSecurityFiltersCvssScoreToTerraform, true)(struct!.cvssScore),
    published: cdktf.listMapper(violationsReportFiltersSecurityFiltersPublishedToTerraform, true)(struct!.published),
  }
}


export function violationsReportFiltersSecurityFiltersToHclTerraform(struct?: ViolationsReportFiltersSecurityFilters | cdktf.IResolvable): any {
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
    issue_id: {
      value: cdktf.stringToHclTerraform(struct!.issueId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    summary_contains: {
      value: cdktf.stringToHclTerraform(struct!.summaryContains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cvss_score: {
      value: cdktf.listMapperHcl(violationsReportFiltersSecurityFiltersCvssScoreToHclTerraform, true)(struct!.cvssScore),
      isBlock: true,
      type: "set",
      storageClassType: "ViolationsReportFiltersSecurityFiltersCvssScoreList",
    },
    published: {
      value: cdktf.listMapperHcl(violationsReportFiltersSecurityFiltersPublishedToHclTerraform, true)(struct!.published),
      isBlock: true,
      type: "set",
      storageClassType: "ViolationsReportFiltersSecurityFiltersPublishedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ViolationsReportFiltersSecurityFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ViolationsReportFiltersSecurityFilters | cdktf.IResolvable | undefined {
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
    if (this._issueId !== undefined) {
      hasAnyValues = true;
      internalValueResult.issueId = this._issueId;
    }
    if (this._summaryContains !== undefined) {
      hasAnyValues = true;
      internalValueResult.summaryContains = this._summaryContains;
    }
    if (this._cvssScore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cvssScore = this._cvssScore?.internalValue;
    }
    if (this._published?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.published = this._published?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ViolationsReportFiltersSecurityFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cve = undefined;
      this._hasRemediation = undefined;
      this._issueId = undefined;
      this._summaryContains = undefined;
      this._cvssScore.internalValue = undefined;
      this._published.internalValue = undefined;
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
      this._issueId = value.issueId;
      this._summaryContains = value.summaryContains;
      this._cvssScore.internalValue = value.cvssScore;
      this._published.internalValue = value.published;
    }
  }

  // cve - computed: true, optional: true, required: false
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

  // summary_contains - computed: false, optional: true, required: false
  private _summaryContains?: string; 
  public get summaryContains() {
    return this.getStringAttribute('summary_contains');
  }
  public set summaryContains(value: string) {
    this._summaryContains = value;
  }
  public resetSummaryContains() {
    this._summaryContains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryContainsInput() {
    return this._summaryContains;
  }

  // cvss_score - computed: false, optional: true, required: false
  private _cvssScore = new ViolationsReportFiltersSecurityFiltersCvssScoreList(this, "cvss_score", true);
  public get cvssScore() {
    return this._cvssScore;
  }
  public putCvssScore(value: ViolationsReportFiltersSecurityFiltersCvssScore[] | cdktf.IResolvable) {
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
  private _published = new ViolationsReportFiltersSecurityFiltersPublishedList(this, "published", true);
  public get published() {
    return this._published;
  }
  public putPublished(value: ViolationsReportFiltersSecurityFiltersPublished[] | cdktf.IResolvable) {
    this._published.internalValue = value;
  }
  public resetPublished() {
    this._published.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishedInput() {
    return this._published.internalValue;
  }
}

export class ViolationsReportFiltersSecurityFiltersList extends cdktf.ComplexList {
  public internalValue? : ViolationsReportFiltersSecurityFilters[] | cdktf.IResolvable

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
  public get(index: number): ViolationsReportFiltersSecurityFiltersOutputReference {
    return new ViolationsReportFiltersSecurityFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ViolationsReportFiltersUpdated {
  /**
  * Created to date.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#end ViolationsReport#end}
  */
  readonly end?: string;
  /**
  * Created from date.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#start ViolationsReport#start}
  */
  readonly start?: string;
}

export function violationsReportFiltersUpdatedToTerraform(struct?: ViolationsReportFiltersUpdated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function violationsReportFiltersUpdatedToHclTerraform(struct?: ViolationsReportFiltersUpdated | cdktf.IResolvable): any {
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

export class ViolationsReportFiltersUpdatedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ViolationsReportFiltersUpdated | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ViolationsReportFiltersUpdated | cdktf.IResolvable | undefined) {
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

export class ViolationsReportFiltersUpdatedList extends cdktf.ComplexList {
  public internalValue? : ViolationsReportFiltersUpdated[] | cdktf.IResolvable

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
  public get(index: number): ViolationsReportFiltersUpdatedOutputReference {
    return new ViolationsReportFiltersUpdatedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ViolationsReportFilters {
  /**
  * Filter by artifact name, you can use (*) at the beginning or end of a substring as a wildcard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#artifact ViolationsReport#artifact}
  */
  readonly artifact?: string;
  /**
  * Filter by component name, you can use (*) at the beginning or end of a substring as a wildcard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#component ViolationsReport#component}
  */
  readonly component?: string;
  /**
  * Select Xray policies by name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#policy_names ViolationsReport#policy_names}
  */
  readonly policyNames?: string[];
  /**
  * Risk/Severites levels. Allowed values: 'Low', 'Medium', 'High', 'Critical'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#severities ViolationsReport#severities}
  */
  readonly severities?: string[];
  /**
  * Violation type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#type ViolationsReport#type}
  */
  readonly type?: string;
  /**
  * Violation status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#violation_status ViolationsReport#violation_status}
  */
  readonly violationStatus?: string;
  /**
  * Select Xray watch by names. Only one attribute - 'watch_names' or 'watch_patterns' can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#watch_names ViolationsReport#watch_names}
  */
  readonly watchNames?: string[];
  /**
  * Select Xray watch name by patterns. Only one attribute - 'watch_names' or 'watch_patterns' can be set..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#watch_patterns ViolationsReport#watch_patterns}
  */
  readonly watchPatterns?: string[];
  /**
  * ca_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#ca_filter ViolationsReport#ca_filter}
  */
  readonly caFilter?: ViolationsReportFiltersCaFilter[] | cdktf.IResolvable;
  /**
  * license_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#license_filters ViolationsReport#license_filters}
  */
  readonly licenseFilters?: ViolationsReportFiltersLicenseFilters[] | cdktf.IResolvable;
  /**
  * runtime_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#runtime_filter ViolationsReport#runtime_filter}
  */
  readonly runtimeFilter?: ViolationsReportFiltersRuntimeFilter[] | cdktf.IResolvable;
  /**
  * security_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#security_filters ViolationsReport#security_filters}
  */
  readonly securityFilters?: ViolationsReportFiltersSecurityFilters[] | cdktf.IResolvable;
  /**
  * updated block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#updated ViolationsReport#updated}
  */
  readonly updated?: ViolationsReportFiltersUpdated[] | cdktf.IResolvable;
}

export function violationsReportFiltersToTerraform(struct?: ViolationsReportFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact: cdktf.stringToTerraform(struct!.artifact),
    component: cdktf.stringToTerraform(struct!.component),
    policy_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.policyNames),
    severities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.severities),
    type: cdktf.stringToTerraform(struct!.type),
    violation_status: cdktf.stringToTerraform(struct!.violationStatus),
    watch_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.watchNames),
    watch_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.watchPatterns),
    ca_filter: cdktf.listMapper(violationsReportFiltersCaFilterToTerraform, true)(struct!.caFilter),
    license_filters: cdktf.listMapper(violationsReportFiltersLicenseFiltersToTerraform, true)(struct!.licenseFilters),
    runtime_filter: cdktf.listMapper(violationsReportFiltersRuntimeFilterToTerraform, true)(struct!.runtimeFilter),
    security_filters: cdktf.listMapper(violationsReportFiltersSecurityFiltersToTerraform, true)(struct!.securityFilters),
    updated: cdktf.listMapper(violationsReportFiltersUpdatedToTerraform, true)(struct!.updated),
  }
}


export function violationsReportFiltersToHclTerraform(struct?: ViolationsReportFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    artifact: {
      value: cdktf.stringToHclTerraform(struct!.artifact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    component: {
      value: cdktf.stringToHclTerraform(struct!.component),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.policyNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    severities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.severities),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    violation_status: {
      value: cdktf.stringToHclTerraform(struct!.violationStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    watch_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.watchNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    watch_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.watchPatterns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ca_filter: {
      value: cdktf.listMapperHcl(violationsReportFiltersCaFilterToHclTerraform, true)(struct!.caFilter),
      isBlock: true,
      type: "set",
      storageClassType: "ViolationsReportFiltersCaFilterList",
    },
    license_filters: {
      value: cdktf.listMapperHcl(violationsReportFiltersLicenseFiltersToHclTerraform, true)(struct!.licenseFilters),
      isBlock: true,
      type: "set",
      storageClassType: "ViolationsReportFiltersLicenseFiltersList",
    },
    runtime_filter: {
      value: cdktf.listMapperHcl(violationsReportFiltersRuntimeFilterToHclTerraform, true)(struct!.runtimeFilter),
      isBlock: true,
      type: "set",
      storageClassType: "ViolationsReportFiltersRuntimeFilterList",
    },
    security_filters: {
      value: cdktf.listMapperHcl(violationsReportFiltersSecurityFiltersToHclTerraform, true)(struct!.securityFilters),
      isBlock: true,
      type: "set",
      storageClassType: "ViolationsReportFiltersSecurityFiltersList",
    },
    updated: {
      value: cdktf.listMapperHcl(violationsReportFiltersUpdatedToHclTerraform, true)(struct!.updated),
      isBlock: true,
      type: "set",
      storageClassType: "ViolationsReportFiltersUpdatedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ViolationsReportFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ViolationsReportFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifact !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifact = this._artifact;
    }
    if (this._component !== undefined) {
      hasAnyValues = true;
      internalValueResult.component = this._component;
    }
    if (this._policyNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyNames = this._policyNames;
    }
    if (this._severities !== undefined) {
      hasAnyValues = true;
      internalValueResult.severities = this._severities;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._violationStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.violationStatus = this._violationStatus;
    }
    if (this._watchNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.watchNames = this._watchNames;
    }
    if (this._watchPatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.watchPatterns = this._watchPatterns;
    }
    if (this._caFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFilter = this._caFilter?.internalValue;
    }
    if (this._licenseFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseFilters = this._licenseFilters?.internalValue;
    }
    if (this._runtimeFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeFilter = this._runtimeFilter?.internalValue;
    }
    if (this._securityFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityFilters = this._securityFilters?.internalValue;
    }
    if (this._updated?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.updated = this._updated?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ViolationsReportFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._artifact = undefined;
      this._component = undefined;
      this._policyNames = undefined;
      this._severities = undefined;
      this._type = undefined;
      this._violationStatus = undefined;
      this._watchNames = undefined;
      this._watchPatterns = undefined;
      this._caFilter.internalValue = undefined;
      this._licenseFilters.internalValue = undefined;
      this._runtimeFilter.internalValue = undefined;
      this._securityFilters.internalValue = undefined;
      this._updated.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._artifact = value.artifact;
      this._component = value.component;
      this._policyNames = value.policyNames;
      this._severities = value.severities;
      this._type = value.type;
      this._violationStatus = value.violationStatus;
      this._watchNames = value.watchNames;
      this._watchPatterns = value.watchPatterns;
      this._caFilter.internalValue = value.caFilter;
      this._licenseFilters.internalValue = value.licenseFilters;
      this._runtimeFilter.internalValue = value.runtimeFilter;
      this._securityFilters.internalValue = value.securityFilters;
      this._updated.internalValue = value.updated;
    }
  }

  // artifact - computed: false, optional: true, required: false
  private _artifact?: string; 
  public get artifact() {
    return this.getStringAttribute('artifact');
  }
  public set artifact(value: string) {
    this._artifact = value;
  }
  public resetArtifact() {
    this._artifact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactInput() {
    return this._artifact;
  }

  // component - computed: false, optional: true, required: false
  private _component?: string; 
  public get component() {
    return this.getStringAttribute('component');
  }
  public set component(value: string) {
    this._component = value;
  }
  public resetComponent() {
    this._component = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentInput() {
    return this._component;
  }

  // policy_names - computed: true, optional: true, required: false
  private _policyNames?: string[]; 
  public get policyNames() {
    return cdktf.Fn.tolist(this.getListAttribute('policy_names'));
  }
  public set policyNames(value: string[]) {
    this._policyNames = value;
  }
  public resetPolicyNames() {
    this._policyNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNamesInput() {
    return this._policyNames;
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

  // violation_status - computed: false, optional: true, required: false
  private _violationStatus?: string; 
  public get violationStatus() {
    return this.getStringAttribute('violation_status');
  }
  public set violationStatus(value: string) {
    this._violationStatus = value;
  }
  public resetViolationStatus() {
    this._violationStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get violationStatusInput() {
    return this._violationStatus;
  }

  // watch_names - computed: true, optional: true, required: false
  private _watchNames?: string[]; 
  public get watchNames() {
    return cdktf.Fn.tolist(this.getListAttribute('watch_names'));
  }
  public set watchNames(value: string[]) {
    this._watchNames = value;
  }
  public resetWatchNames() {
    this._watchNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watchNamesInput() {
    return this._watchNames;
  }

  // watch_patterns - computed: true, optional: true, required: false
  private _watchPatterns?: string[]; 
  public get watchPatterns() {
    return cdktf.Fn.tolist(this.getListAttribute('watch_patterns'));
  }
  public set watchPatterns(value: string[]) {
    this._watchPatterns = value;
  }
  public resetWatchPatterns() {
    this._watchPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watchPatternsInput() {
    return this._watchPatterns;
  }

  // ca_filter - computed: false, optional: true, required: false
  private _caFilter = new ViolationsReportFiltersCaFilterList(this, "ca_filter", true);
  public get caFilter() {
    return this._caFilter;
  }
  public putCaFilter(value: ViolationsReportFiltersCaFilter[] | cdktf.IResolvable) {
    this._caFilter.internalValue = value;
  }
  public resetCaFilter() {
    this._caFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFilterInput() {
    return this._caFilter.internalValue;
  }

  // license_filters - computed: false, optional: true, required: false
  private _licenseFilters = new ViolationsReportFiltersLicenseFiltersList(this, "license_filters", true);
  public get licenseFilters() {
    return this._licenseFilters;
  }
  public putLicenseFilters(value: ViolationsReportFiltersLicenseFilters[] | cdktf.IResolvable) {
    this._licenseFilters.internalValue = value;
  }
  public resetLicenseFilters() {
    this._licenseFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseFiltersInput() {
    return this._licenseFilters.internalValue;
  }

  // runtime_filter - computed: false, optional: true, required: false
  private _runtimeFilter = new ViolationsReportFiltersRuntimeFilterList(this, "runtime_filter", true);
  public get runtimeFilter() {
    return this._runtimeFilter;
  }
  public putRuntimeFilter(value: ViolationsReportFiltersRuntimeFilter[] | cdktf.IResolvable) {
    this._runtimeFilter.internalValue = value;
  }
  public resetRuntimeFilter() {
    this._runtimeFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeFilterInput() {
    return this._runtimeFilter.internalValue;
  }

  // security_filters - computed: false, optional: true, required: false
  private _securityFilters = new ViolationsReportFiltersSecurityFiltersList(this, "security_filters", true);
  public get securityFilters() {
    return this._securityFilters;
  }
  public putSecurityFilters(value: ViolationsReportFiltersSecurityFilters[] | cdktf.IResolvable) {
    this._securityFilters.internalValue = value;
  }
  public resetSecurityFilters() {
    this._securityFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityFiltersInput() {
    return this._securityFilters.internalValue;
  }

  // updated - computed: false, optional: true, required: false
  private _updated = new ViolationsReportFiltersUpdatedList(this, "updated", true);
  public get updated() {
    return this._updated;
  }
  public putUpdated(value: ViolationsReportFiltersUpdated[] | cdktf.IResolvable) {
    this._updated.internalValue = value;
  }
  public resetUpdated() {
    this._updated.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedInput() {
    return this._updated.internalValue;
  }
}

export class ViolationsReportFiltersList extends cdktf.ComplexList {
  public internalValue? : ViolationsReportFilters[] | cdktf.IResolvable

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
  public get(index: number): ViolationsReportFiltersOutputReference {
    return new ViolationsReportFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ViolationsReportResourcesBuilds {
  /**
  * The list of exclude patterns. Only one of 'names' or '*_patterns' can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#exclude_patterns ViolationsReport#exclude_patterns}
  */
  readonly excludePatterns?: string[];
  /**
  * The list of include patterns. Only one of 'names' or '*_patterns' can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#include_patterns ViolationsReport#include_patterns}
  */
  readonly includePatterns?: string[];
  /**
  * The list of build names. Only one of 'names' or '*_patterns' can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#names ViolationsReport#names}
  */
  readonly names?: string[];
  /**
  * The number of latest build versions to include to the report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#number_of_latest_versions ViolationsReport#number_of_latest_versions}
  */
  readonly numberOfLatestVersions?: number;
}

export function violationsReportResourcesBuildsToTerraform(struct?: ViolationsReportResourcesBuilds | cdktf.IResolvable): any {
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


export function violationsReportResourcesBuildsToHclTerraform(struct?: ViolationsReportResourcesBuilds | cdktf.IResolvable): any {
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

export class ViolationsReportResourcesBuildsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ViolationsReportResourcesBuilds | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ViolationsReportResourcesBuilds | cdktf.IResolvable | undefined) {
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

export class ViolationsReportResourcesBuildsList extends cdktf.ComplexList {
  public internalValue? : ViolationsReportResourcesBuilds[] | cdktf.IResolvable

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
  public get(index: number): ViolationsReportResourcesBuildsOutputReference {
    return new ViolationsReportResourcesBuildsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ViolationsReportResourcesProjects {
  /**
  * The list of exclude patterns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#exclude_key_patterns ViolationsReport#exclude_key_patterns}
  */
  readonly excludeKeyPatterns?: string[];
  /**
  * The list of include patterns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#include_key_patterns ViolationsReport#include_key_patterns}
  */
  readonly includeKeyPatterns?: string[];
  /**
  * The list of project keys. Note: Available from Xray version 3.130.0 and higher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#keys ViolationsReport#keys}
  */
  readonly keys?: string[];
  /**
  * The list of project names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#names ViolationsReport#names}
  */
  readonly names?: string[];
  /**
  * The number of latest release bundle versions to include to the report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#number_of_latest_versions ViolationsReport#number_of_latest_versions}
  */
  readonly numberOfLatestVersions?: number;
}

export function violationsReportResourcesProjectsToTerraform(struct?: ViolationsReportResourcesProjects | cdktf.IResolvable): any {
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


export function violationsReportResourcesProjectsToHclTerraform(struct?: ViolationsReportResourcesProjects | cdktf.IResolvable): any {
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

export class ViolationsReportResourcesProjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ViolationsReportResourcesProjects | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ViolationsReportResourcesProjects | cdktf.IResolvable | undefined) {
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

export class ViolationsReportResourcesProjectsList extends cdktf.ComplexList {
  public internalValue? : ViolationsReportResourcesProjects[] | cdktf.IResolvable

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
  public get(index: number): ViolationsReportResourcesProjectsOutputReference {
    return new ViolationsReportResourcesProjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ViolationsReportResourcesReleaseBundles {
  /**
  * The list of exclude patterns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#exclude_patterns ViolationsReport#exclude_patterns}
  */
  readonly excludePatterns?: string[];
  /**
  * The list of include patterns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#include_patterns ViolationsReport#include_patterns}
  */
  readonly includePatterns?: string[];
  /**
  * The list of release bundles names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#names ViolationsReport#names}
  */
  readonly names?: string[];
  /**
  * The number of latest release bundle versions to include to the report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#number_of_latest_versions ViolationsReport#number_of_latest_versions}
  */
  readonly numberOfLatestVersions?: number;
}

export function violationsReportResourcesReleaseBundlesToTerraform(struct?: ViolationsReportResourcesReleaseBundles | cdktf.IResolvable): any {
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


export function violationsReportResourcesReleaseBundlesToHclTerraform(struct?: ViolationsReportResourcesReleaseBundles | cdktf.IResolvable): any {
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

export class ViolationsReportResourcesReleaseBundlesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ViolationsReportResourcesReleaseBundles | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ViolationsReportResourcesReleaseBundles | cdktf.IResolvable | undefined) {
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

export class ViolationsReportResourcesReleaseBundlesList extends cdktf.ComplexList {
  public internalValue? : ViolationsReportResourcesReleaseBundles[] | cdktf.IResolvable

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
  public get(index: number): ViolationsReportResourcesReleaseBundlesOutputReference {
    return new ViolationsReportResourcesReleaseBundlesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ViolationsReportResourcesReleaseBundlesV2 {
  /**
  * The list of exclude patterns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#exclude_patterns ViolationsReport#exclude_patterns}
  */
  readonly excludePatterns?: string[];
  /**
  * The list of include patterns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#include_patterns ViolationsReport#include_patterns}
  */
  readonly includePatterns?: string[];
  /**
  * The list of release bundles names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#names ViolationsReport#names}
  */
  readonly names?: string[];
  /**
  * The number of latest release bundle versions to include to the report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#number_of_latest_versions ViolationsReport#number_of_latest_versions}
  */
  readonly numberOfLatestVersions?: number;
}

export function violationsReportResourcesReleaseBundlesV2ToTerraform(struct?: ViolationsReportResourcesReleaseBundlesV2 | cdktf.IResolvable): any {
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


export function violationsReportResourcesReleaseBundlesV2ToHclTerraform(struct?: ViolationsReportResourcesReleaseBundlesV2 | cdktf.IResolvable): any {
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

export class ViolationsReportResourcesReleaseBundlesV2OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ViolationsReportResourcesReleaseBundlesV2 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ViolationsReportResourcesReleaseBundlesV2 | cdktf.IResolvable | undefined) {
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

export class ViolationsReportResourcesReleaseBundlesV2List extends cdktf.ComplexList {
  public internalValue? : ViolationsReportResourcesReleaseBundlesV2[] | cdktf.IResolvable

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
  public get(index: number): ViolationsReportResourcesReleaseBundlesV2OutputReference {
    return new ViolationsReportResourcesReleaseBundlesV2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ViolationsReportResourcesRepository {
  /**
  * Exclude path patterns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#exclude_path_patterns ViolationsReport#exclude_path_patterns}
  */
  readonly excludePathPatterns?: string[];
  /**
  * Include path patterns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#include_path_patterns ViolationsReport#include_path_patterns}
  */
  readonly includePathPatterns?: string[];
  /**
  * Repository name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#name ViolationsReport#name}
  */
  readonly name: string;
}

export function violationsReportResourcesRepositoryToTerraform(struct?: ViolationsReportResourcesRepository | cdktf.IResolvable): any {
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


export function violationsReportResourcesRepositoryToHclTerraform(struct?: ViolationsReportResourcesRepository | cdktf.IResolvable): any {
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

export class ViolationsReportResourcesRepositoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ViolationsReportResourcesRepository | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ViolationsReportResourcesRepository | cdktf.IResolvable | undefined) {
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

export class ViolationsReportResourcesRepositoryList extends cdktf.ComplexList {
  public internalValue? : ViolationsReportResourcesRepository[] | cdktf.IResolvable

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
  public get(index: number): ViolationsReportResourcesRepositoryOutputReference {
    return new ViolationsReportResourcesRepositoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ViolationsReportResources {
  /**
  * builds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#builds ViolationsReport#builds}
  */
  readonly builds?: ViolationsReportResourcesBuilds[] | cdktf.IResolvable;
  /**
  * projects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#projects ViolationsReport#projects}
  */
  readonly projects?: ViolationsReportResourcesProjects[] | cdktf.IResolvable;
  /**
  * release_bundles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#release_bundles ViolationsReport#release_bundles}
  */
  readonly releaseBundles?: ViolationsReportResourcesReleaseBundles[] | cdktf.IResolvable;
  /**
  * release_bundles_v2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#release_bundles_v2 ViolationsReport#release_bundles_v2}
  */
  readonly releaseBundlesV2?: ViolationsReportResourcesReleaseBundlesV2[] | cdktf.IResolvable;
  /**
  * repository block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#repository ViolationsReport#repository}
  */
  readonly repository?: ViolationsReportResourcesRepository[] | cdktf.IResolvable;
}

export function violationsReportResourcesToTerraform(struct?: ViolationsReportResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    builds: cdktf.listMapper(violationsReportResourcesBuildsToTerraform, true)(struct!.builds),
    projects: cdktf.listMapper(violationsReportResourcesProjectsToTerraform, true)(struct!.projects),
    release_bundles: cdktf.listMapper(violationsReportResourcesReleaseBundlesToTerraform, true)(struct!.releaseBundles),
    release_bundles_v2: cdktf.listMapper(violationsReportResourcesReleaseBundlesV2ToTerraform, true)(struct!.releaseBundlesV2),
    repository: cdktf.listMapper(violationsReportResourcesRepositoryToTerraform, true)(struct!.repository),
  }
}


export function violationsReportResourcesToHclTerraform(struct?: ViolationsReportResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    builds: {
      value: cdktf.listMapperHcl(violationsReportResourcesBuildsToHclTerraform, true)(struct!.builds),
      isBlock: true,
      type: "set",
      storageClassType: "ViolationsReportResourcesBuildsList",
    },
    projects: {
      value: cdktf.listMapperHcl(violationsReportResourcesProjectsToHclTerraform, true)(struct!.projects),
      isBlock: true,
      type: "set",
      storageClassType: "ViolationsReportResourcesProjectsList",
    },
    release_bundles: {
      value: cdktf.listMapperHcl(violationsReportResourcesReleaseBundlesToHclTerraform, true)(struct!.releaseBundles),
      isBlock: true,
      type: "set",
      storageClassType: "ViolationsReportResourcesReleaseBundlesList",
    },
    release_bundles_v2: {
      value: cdktf.listMapperHcl(violationsReportResourcesReleaseBundlesV2ToHclTerraform, true)(struct!.releaseBundlesV2),
      isBlock: true,
      type: "set",
      storageClassType: "ViolationsReportResourcesReleaseBundlesV2List",
    },
    repository: {
      value: cdktf.listMapperHcl(violationsReportResourcesRepositoryToHclTerraform, true)(struct!.repository),
      isBlock: true,
      type: "set",
      storageClassType: "ViolationsReportResourcesRepositoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ViolationsReportResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ViolationsReportResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ViolationsReportResources | cdktf.IResolvable | undefined) {
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
  private _builds = new ViolationsReportResourcesBuildsList(this, "builds", true);
  public get builds() {
    return this._builds;
  }
  public putBuilds(value: ViolationsReportResourcesBuilds[] | cdktf.IResolvable) {
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
  private _projects = new ViolationsReportResourcesProjectsList(this, "projects", true);
  public get projects() {
    return this._projects;
  }
  public putProjects(value: ViolationsReportResourcesProjects[] | cdktf.IResolvable) {
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
  private _releaseBundles = new ViolationsReportResourcesReleaseBundlesList(this, "release_bundles", true);
  public get releaseBundles() {
    return this._releaseBundles;
  }
  public putReleaseBundles(value: ViolationsReportResourcesReleaseBundles[] | cdktf.IResolvable) {
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
  private _releaseBundlesV2 = new ViolationsReportResourcesReleaseBundlesV2List(this, "release_bundles_v2", true);
  public get releaseBundlesV2() {
    return this._releaseBundlesV2;
  }
  public putReleaseBundlesV2(value: ViolationsReportResourcesReleaseBundlesV2[] | cdktf.IResolvable) {
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
  private _repository = new ViolationsReportResourcesRepositoryList(this, "repository", true);
  public get repository() {
    return this._repository;
  }
  public putRepository(value: ViolationsReportResourcesRepository[] | cdktf.IResolvable) {
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

export class ViolationsReportResourcesList extends cdktf.ComplexList {
  public internalValue? : ViolationsReportResources[] | cdktf.IResolvable

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
  public get(index: number): ViolationsReportResourcesOutputReference {
    return new ViolationsReportResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report xray_violations_report}
*/
export class ViolationsReport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "xray_violations_report";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ViolationsReport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ViolationsReport to import
  * @param importFromId The id of the existing ViolationsReport that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ViolationsReport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "xray_violations_report", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/violations_report xray_violations_report} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ViolationsReportConfig
  */
  public constructor(scope: Construct, id: string, config: ViolationsReportConfig) {
    super(scope, id, {
      terraformResourceType: 'xray_violations_report',
      terraformGeneratorMetadata: {
        providerName: 'xray',
        providerVersion: '3.1.3',
        providerVersionConstraint: '3.1.3'
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
  private _filters = new ViolationsReportFiltersList(this, "filters", true);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: ViolationsReportFilters[] | cdktf.IResolvable) {
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
  private _resources = new ViolationsReportResourcesList(this, "resources", true);
  public get resources() {
    return this._resources;
  }
  public putResources(value: ViolationsReportResources[] | cdktf.IResolvable) {
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
      filters: cdktf.listMapper(violationsReportFiltersToTerraform, true)(this._filters.internalValue),
      resources: cdktf.listMapper(violationsReportResourcesToTerraform, true)(this._resources.internalValue),
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
        value: cdktf.listMapperHcl(violationsReportFiltersToHclTerraform, true)(this._filters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ViolationsReportFiltersList",
      },
      resources: {
        value: cdktf.listMapperHcl(violationsReportResourcesToHclTerraform, true)(this._resources.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ViolationsReportResourcesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
