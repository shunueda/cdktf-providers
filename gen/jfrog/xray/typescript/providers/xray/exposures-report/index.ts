// https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/exposures_report
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExposuresReportConfig extends cdktf.TerraformMetaArguments {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/exposures_report#cron_schedule ExposuresReport#cron_schedule}
  */
  readonly cronSchedule?: string;
  /**
  * Timezone for cron schedule. For valid timezone formats, see: [iana-timezones](https://timeapi.io/documentation/iana-timezones). Note: Requires Xray 3.130.0 or higher. Only used when cron_schedule is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/exposures_report#cron_schedule_timezone ExposuresReport#cron_schedule_timezone}
  */
  readonly cronScheduleTimezone?: string;
  /**
  * List of email addresses to notify when report generation is complete. Note: Requires Xray 3.130.0 or higher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/exposures_report#emails ExposuresReport#emails}
  */
  readonly emails?: string[];
  /**
  * Name of the report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/exposures_report#name ExposuresReport#name}
  */
  readonly name: string;
  /**
  * Project key for assigning this resource to. Must be 2 - 10 lowercase alphanumeric and hyphen characters. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/exposures_report#project_key ExposuresReport#project_key}
  */
  readonly projectKey?: string;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/exposures_report#filters ExposuresReport#filters}
  */
  readonly filters?: ExposuresReportFilters[] | cdktf.IResolvable;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/exposures_report#resources ExposuresReport#resources}
  */
  readonly resources?: ExposuresReportResources[] | cdktf.IResolvable;
}
export interface ExposuresReportFiltersScanDate {
  /**
  * Scan to date.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/exposures_report#end ExposuresReport#end}
  */
  readonly end?: string;
  /**
  * Scan from date.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/exposures_report#start ExposuresReport#start}
  */
  readonly start?: string;
}

export function exposuresReportFiltersScanDateToTerraform(struct?: ExposuresReportFiltersScanDate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function exposuresReportFiltersScanDateToHclTerraform(struct?: ExposuresReportFiltersScanDate | cdktf.IResolvable): any {
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

export class ExposuresReportFiltersScanDateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExposuresReportFiltersScanDate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ExposuresReportFiltersScanDate | cdktf.IResolvable | undefined) {
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

export class ExposuresReportFiltersScanDateList extends cdktf.ComplexList {
  public internalValue? : ExposuresReportFiltersScanDate[] | cdktf.IResolvable

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
  public get(index: number): ExposuresReportFiltersScanDateOutputReference {
    return new ExposuresReportFiltersScanDateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExposuresReportFilters {
  /**
  * The exposure category. Must be one of: 'secrets', 'services', 'applications', 'iac'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/exposures_report#category ExposuresReport#category}
  */
  readonly category: string;
  /**
  * Filter by impacted artifact name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/exposures_report#impacted_artifact ExposuresReport#impacted_artifact}
  */
  readonly impactedArtifact?: string;
  /**
  * scan_date block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/exposures_report#scan_date ExposuresReport#scan_date}
  */
  readonly scanDate?: ExposuresReportFiltersScanDate[] | cdktf.IResolvable;
}

export function exposuresReportFiltersToTerraform(struct?: ExposuresReportFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    impacted_artifact: cdktf.stringToTerraform(struct!.impactedArtifact),
    scan_date: cdktf.listMapper(exposuresReportFiltersScanDateToTerraform, true)(struct!.scanDate),
  }
}


export function exposuresReportFiltersToHclTerraform(struct?: ExposuresReportFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    impacted_artifact: {
      value: cdktf.stringToHclTerraform(struct!.impactedArtifact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scan_date: {
      value: cdktf.listMapperHcl(exposuresReportFiltersScanDateToHclTerraform, true)(struct!.scanDate),
      isBlock: true,
      type: "set",
      storageClassType: "ExposuresReportFiltersScanDateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExposuresReportFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExposuresReportFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._impactedArtifact !== undefined) {
      hasAnyValues = true;
      internalValueResult.impactedArtifact = this._impactedArtifact;
    }
    if (this._scanDate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanDate = this._scanDate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExposuresReportFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._impactedArtifact = undefined;
      this._scanDate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._impactedArtifact = value.impactedArtifact;
      this._scanDate.internalValue = value.scanDate;
    }
  }

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
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

  // scan_date - computed: false, optional: true, required: false
  private _scanDate = new ExposuresReportFiltersScanDateList(this, "scan_date", true);
  public get scanDate() {
    return this._scanDate;
  }
  public putScanDate(value: ExposuresReportFiltersScanDate[] | cdktf.IResolvable) {
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

export class ExposuresReportFiltersList extends cdktf.ComplexList {
  public internalValue? : ExposuresReportFilters[] | cdktf.IResolvable

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
  public get(index: number): ExposuresReportFiltersOutputReference {
    return new ExposuresReportFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExposuresReportResourcesBuilds {
  /**
  * The list of exclude patterns. Only one of 'names' or '*_patterns' can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/exposures_report#exclude_patterns ExposuresReport#exclude_patterns}
  */
  readonly excludePatterns?: string[];
  /**
  * The list of include patterns. Only one of 'names' or '*_patterns' can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/exposures_report#include_patterns ExposuresReport#include_patterns}
  */
  readonly includePatterns?: string[];
  /**
  * The list of build names. Only one of 'names' or '*_patterns' can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/exposures_report#names ExposuresReport#names}
  */
  readonly names?: string[];
  /**
  * The number of latest build versions to include to the report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/exposures_report#number_of_latest_versions ExposuresReport#number_of_latest_versions}
  */
  readonly numberOfLatestVersions?: number;
}

export function exposuresReportResourcesBuildsToTerraform(struct?: ExposuresReportResourcesBuilds | cdktf.IResolvable): any {
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


export function exposuresReportResourcesBuildsToHclTerraform(struct?: ExposuresReportResourcesBuilds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludePatterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includePatterns),
      isBlock: false,
      type: "list",
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

export class ExposuresReportResourcesBuildsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExposuresReportResourcesBuilds | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ExposuresReportResourcesBuilds | cdktf.IResolvable | undefined) {
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
    return this.getListAttribute('exclude_patterns');
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
    return this.getListAttribute('include_patterns');
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

export class ExposuresReportResourcesBuildsList extends cdktf.ComplexList {
  public internalValue? : ExposuresReportResourcesBuilds[] | cdktf.IResolvable

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
  public get(index: number): ExposuresReportResourcesBuildsOutputReference {
    return new ExposuresReportResourcesBuildsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExposuresReportResourcesProjects {
  /**
  * The list of exclude patterns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/exposures_report#exclude_key_patterns ExposuresReport#exclude_key_patterns}
  */
  readonly excludeKeyPatterns?: string[];
  /**
  * The list of include patterns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/exposures_report#include_key_patterns ExposuresReport#include_key_patterns}
  */
  readonly includeKeyPatterns?: string[];
  /**
  * The list of project keys. Note: Available from Xray version 3.130.0 and higher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/exposures_report#keys ExposuresReport#keys}
  */
  readonly keys?: string[];
  /**
  * The list of project names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/exposures_report#names ExposuresReport#names}
  */
  readonly names?: string[];
  /**
  * The number of latest release bundle versions to include to the report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/exposures_report#number_of_latest_versions ExposuresReport#number_of_latest_versions}
  */
  readonly numberOfLatestVersions?: number;
}

export function exposuresReportResourcesProjectsToTerraform(struct?: ExposuresReportResourcesProjects | cdktf.IResolvable): any {
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


export function exposuresReportResourcesProjectsToHclTerraform(struct?: ExposuresReportResourcesProjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_key_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeKeyPatterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_key_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeKeyPatterns),
      isBlock: false,
      type: "list",
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

export class ExposuresReportResourcesProjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExposuresReportResourcesProjects | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ExposuresReportResourcesProjects | cdktf.IResolvable | undefined) {
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
    return this.getListAttribute('exclude_key_patterns');
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
    return this.getListAttribute('include_key_patterns');
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

export class ExposuresReportResourcesProjectsList extends cdktf.ComplexList {
  public internalValue? : ExposuresReportResourcesProjects[] | cdktf.IResolvable

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
  public get(index: number): ExposuresReportResourcesProjectsOutputReference {
    return new ExposuresReportResourcesProjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExposuresReportResourcesReleaseBundles {
  /**
  * The list of exclude patterns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/exposures_report#exclude_patterns ExposuresReport#exclude_patterns}
  */
  readonly excludePatterns?: string[];
  /**
  * The list of include patterns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/exposures_report#include_patterns ExposuresReport#include_patterns}
  */
  readonly includePatterns?: string[];
  /**
  * The list of release bundles names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/exposures_report#names ExposuresReport#names}
  */
  readonly names?: string[];
  /**
  * The number of latest release bundle versions to include to the report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/exposures_report#number_of_latest_versions ExposuresReport#number_of_latest_versions}
  */
  readonly numberOfLatestVersions?: number;
}

export function exposuresReportResourcesReleaseBundlesToTerraform(struct?: ExposuresReportResourcesReleaseBundles | cdktf.IResolvable): any {
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


export function exposuresReportResourcesReleaseBundlesToHclTerraform(struct?: ExposuresReportResourcesReleaseBundles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludePatterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includePatterns),
      isBlock: false,
      type: "list",
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

export class ExposuresReportResourcesReleaseBundlesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExposuresReportResourcesReleaseBundles | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ExposuresReportResourcesReleaseBundles | cdktf.IResolvable | undefined) {
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
    return this.getListAttribute('exclude_patterns');
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
    return this.getListAttribute('include_patterns');
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

export class ExposuresReportResourcesReleaseBundlesList extends cdktf.ComplexList {
  public internalValue? : ExposuresReportResourcesReleaseBundles[] | cdktf.IResolvable

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
  public get(index: number): ExposuresReportResourcesReleaseBundlesOutputReference {
    return new ExposuresReportResourcesReleaseBundlesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExposuresReportResourcesReleaseBundlesV2 {
  /**
  * The list of exclude patterns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/exposures_report#exclude_patterns ExposuresReport#exclude_patterns}
  */
  readonly excludePatterns?: string[];
  /**
  * The list of include patterns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/exposures_report#include_patterns ExposuresReport#include_patterns}
  */
  readonly includePatterns?: string[];
  /**
  * The list of release bundles names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/exposures_report#names ExposuresReport#names}
  */
  readonly names?: string[];
  /**
  * The number of latest release bundle versions to include to the report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/exposures_report#number_of_latest_versions ExposuresReport#number_of_latest_versions}
  */
  readonly numberOfLatestVersions?: number;
}

export function exposuresReportResourcesReleaseBundlesV2ToTerraform(struct?: ExposuresReportResourcesReleaseBundlesV2 | cdktf.IResolvable): any {
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


export function exposuresReportResourcesReleaseBundlesV2ToHclTerraform(struct?: ExposuresReportResourcesReleaseBundlesV2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludePatterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includePatterns),
      isBlock: false,
      type: "list",
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

export class ExposuresReportResourcesReleaseBundlesV2OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExposuresReportResourcesReleaseBundlesV2 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ExposuresReportResourcesReleaseBundlesV2 | cdktf.IResolvable | undefined) {
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
    return this.getListAttribute('exclude_patterns');
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
    return this.getListAttribute('include_patterns');
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

export class ExposuresReportResourcesReleaseBundlesV2List extends cdktf.ComplexList {
  public internalValue? : ExposuresReportResourcesReleaseBundlesV2[] | cdktf.IResolvable

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
  public get(index: number): ExposuresReportResourcesReleaseBundlesV2OutputReference {
    return new ExposuresReportResourcesReleaseBundlesV2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExposuresReportResourcesRepository {
  /**
  * Exclude path patterns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/exposures_report#exclude_path_patterns ExposuresReport#exclude_path_patterns}
  */
  readonly excludePathPatterns?: string[];
  /**
  * Include path patterns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/exposures_report#include_path_patterns ExposuresReport#include_path_patterns}
  */
  readonly includePathPatterns?: string[];
  /**
  * Repository name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/exposures_report#name ExposuresReport#name}
  */
  readonly name: string;
}

export function exposuresReportResourcesRepositoryToTerraform(struct?: ExposuresReportResourcesRepository | cdktf.IResolvable): any {
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


export function exposuresReportResourcesRepositoryToHclTerraform(struct?: ExposuresReportResourcesRepository | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_path_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludePathPatterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_path_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includePathPatterns),
      isBlock: false,
      type: "list",
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

export class ExposuresReportResourcesRepositoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExposuresReportResourcesRepository | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ExposuresReportResourcesRepository | cdktf.IResolvable | undefined) {
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
    return this.getListAttribute('exclude_path_patterns');
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
    return this.getListAttribute('include_path_patterns');
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

export class ExposuresReportResourcesRepositoryList extends cdktf.ComplexList {
  public internalValue? : ExposuresReportResourcesRepository[] | cdktf.IResolvable

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
  public get(index: number): ExposuresReportResourcesRepositoryOutputReference {
    return new ExposuresReportResourcesRepositoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExposuresReportResources {
  /**
  * builds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/exposures_report#builds ExposuresReport#builds}
  */
  readonly builds?: ExposuresReportResourcesBuilds[] | cdktf.IResolvable;
  /**
  * projects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/exposures_report#projects ExposuresReport#projects}
  */
  readonly projects?: ExposuresReportResourcesProjects[] | cdktf.IResolvable;
  /**
  * release_bundles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/exposures_report#release_bundles ExposuresReport#release_bundles}
  */
  readonly releaseBundles?: ExposuresReportResourcesReleaseBundles[] | cdktf.IResolvable;
  /**
  * release_bundles_v2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/exposures_report#release_bundles_v2 ExposuresReport#release_bundles_v2}
  */
  readonly releaseBundlesV2?: ExposuresReportResourcesReleaseBundlesV2[] | cdktf.IResolvable;
  /**
  * repository block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/exposures_report#repository ExposuresReport#repository}
  */
  readonly repository?: ExposuresReportResourcesRepository[] | cdktf.IResolvable;
}

export function exposuresReportResourcesToTerraform(struct?: ExposuresReportResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    builds: cdktf.listMapper(exposuresReportResourcesBuildsToTerraform, true)(struct!.builds),
    projects: cdktf.listMapper(exposuresReportResourcesProjectsToTerraform, true)(struct!.projects),
    release_bundles: cdktf.listMapper(exposuresReportResourcesReleaseBundlesToTerraform, true)(struct!.releaseBundles),
    release_bundles_v2: cdktf.listMapper(exposuresReportResourcesReleaseBundlesV2ToTerraform, true)(struct!.releaseBundlesV2),
    repository: cdktf.listMapper(exposuresReportResourcesRepositoryToTerraform, true)(struct!.repository),
  }
}


export function exposuresReportResourcesToHclTerraform(struct?: ExposuresReportResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    builds: {
      value: cdktf.listMapperHcl(exposuresReportResourcesBuildsToHclTerraform, true)(struct!.builds),
      isBlock: true,
      type: "set",
      storageClassType: "ExposuresReportResourcesBuildsList",
    },
    projects: {
      value: cdktf.listMapperHcl(exposuresReportResourcesProjectsToHclTerraform, true)(struct!.projects),
      isBlock: true,
      type: "set",
      storageClassType: "ExposuresReportResourcesProjectsList",
    },
    release_bundles: {
      value: cdktf.listMapperHcl(exposuresReportResourcesReleaseBundlesToHclTerraform, true)(struct!.releaseBundles),
      isBlock: true,
      type: "set",
      storageClassType: "ExposuresReportResourcesReleaseBundlesList",
    },
    release_bundles_v2: {
      value: cdktf.listMapperHcl(exposuresReportResourcesReleaseBundlesV2ToHclTerraform, true)(struct!.releaseBundlesV2),
      isBlock: true,
      type: "set",
      storageClassType: "ExposuresReportResourcesReleaseBundlesV2List",
    },
    repository: {
      value: cdktf.listMapperHcl(exposuresReportResourcesRepositoryToHclTerraform, true)(struct!.repository),
      isBlock: true,
      type: "set",
      storageClassType: "ExposuresReportResourcesRepositoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExposuresReportResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExposuresReportResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ExposuresReportResources | cdktf.IResolvable | undefined) {
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
  private _builds = new ExposuresReportResourcesBuildsList(this, "builds", true);
  public get builds() {
    return this._builds;
  }
  public putBuilds(value: ExposuresReportResourcesBuilds[] | cdktf.IResolvable) {
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
  private _projects = new ExposuresReportResourcesProjectsList(this, "projects", true);
  public get projects() {
    return this._projects;
  }
  public putProjects(value: ExposuresReportResourcesProjects[] | cdktf.IResolvable) {
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
  private _releaseBundles = new ExposuresReportResourcesReleaseBundlesList(this, "release_bundles", true);
  public get releaseBundles() {
    return this._releaseBundles;
  }
  public putReleaseBundles(value: ExposuresReportResourcesReleaseBundles[] | cdktf.IResolvable) {
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
  private _releaseBundlesV2 = new ExposuresReportResourcesReleaseBundlesV2List(this, "release_bundles_v2", true);
  public get releaseBundlesV2() {
    return this._releaseBundlesV2;
  }
  public putReleaseBundlesV2(value: ExposuresReportResourcesReleaseBundlesV2[] | cdktf.IResolvable) {
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
  private _repository = new ExposuresReportResourcesRepositoryList(this, "repository", true);
  public get repository() {
    return this._repository;
  }
  public putRepository(value: ExposuresReportResourcesRepository[] | cdktf.IResolvable) {
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

export class ExposuresReportResourcesList extends cdktf.ComplexList {
  public internalValue? : ExposuresReportResources[] | cdktf.IResolvable

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
  public get(index: number): ExposuresReportResourcesOutputReference {
    return new ExposuresReportResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/exposures_report xray_exposures_report}
*/
export class ExposuresReport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "xray_exposures_report";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExposuresReport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExposuresReport to import
  * @param importFromId The id of the existing ExposuresReport that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/exposures_report#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExposuresReport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "xray_exposures_report", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/exposures_report xray_exposures_report} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExposuresReportConfig
  */
  public constructor(scope: Construct, id: string, config: ExposuresReportConfig) {
    super(scope, id, {
      terraformResourceType: 'xray_exposures_report',
      terraformGeneratorMetadata: {
        providerName: 'xray',
        providerVersion: '3.1.4',
        providerVersionConstraint: '3.1.4'
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
  private _filters = new ExposuresReportFiltersList(this, "filters", true);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: ExposuresReportFilters[] | cdktf.IResolvable) {
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
  private _resources = new ExposuresReportResourcesList(this, "resources", true);
  public get resources() {
    return this._resources;
  }
  public putResources(value: ExposuresReportResources[] | cdktf.IResolvable) {
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
      filters: cdktf.listMapper(exposuresReportFiltersToTerraform, true)(this._filters.internalValue),
      resources: cdktf.listMapper(exposuresReportResourcesToTerraform, true)(this._resources.internalValue),
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
        value: cdktf.listMapperHcl(exposuresReportFiltersToHclTerraform, true)(this._filters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ExposuresReportFiltersList",
      },
      resources: {
        value: cdktf.listMapperHcl(exposuresReportResourcesToHclTerraform, true)(this._resources.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ExposuresReportResourcesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
