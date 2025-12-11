// https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/operational_risks_report
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OperationalRisksReportConfig extends cdktf.TerraformMetaArguments {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/operational_risks_report#cron_schedule OperationalRisksReport#cron_schedule}
  */
  readonly cronSchedule?: string;
  /**
  * Timezone for cron schedule. For valid timezone formats, see: [iana-timezones](https://timeapi.io/documentation/iana-timezones). Note: Requires Xray 3.130.0 or higher. Only used when cron_schedule is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/operational_risks_report#cron_schedule_timezone OperationalRisksReport#cron_schedule_timezone}
  */
  readonly cronScheduleTimezone?: string;
  /**
  * List of email addresses to notify when report generation is complete. Note: Requires Xray 3.130.0 or higher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/operational_risks_report#emails OperationalRisksReport#emails}
  */
  readonly emails?: string[];
  /**
  * Name of the report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/operational_risks_report#name OperationalRisksReport#name}
  */
  readonly name: string;
  /**
  * Project key for assigning this resource to. Must be 2 - 10 lowercase alphanumeric and hyphen characters. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/operational_risks_report#project_key OperationalRisksReport#project_key}
  */
  readonly projectKey?: string;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/operational_risks_report#filters OperationalRisksReport#filters}
  */
  readonly filters?: OperationalRisksReportFilters[] | cdktf.IResolvable;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/operational_risks_report#resources OperationalRisksReport#resources}
  */
  readonly resources?: OperationalRisksReportResources[] | cdktf.IResolvable;
}
export interface OperationalRisksReportFiltersScanDate {
  /**
  * Scan end date.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/operational_risks_report#end OperationalRisksReport#end}
  */
  readonly end?: string;
  /**
  * Scan start date.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/operational_risks_report#start OperationalRisksReport#start}
  */
  readonly start?: string;
}

export function operationalRisksReportFiltersScanDateToTerraform(struct?: OperationalRisksReportFiltersScanDate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function operationalRisksReportFiltersScanDateToHclTerraform(struct?: OperationalRisksReportFiltersScanDate | cdktf.IResolvable): any {
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

export class OperationalRisksReportFiltersScanDateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OperationalRisksReportFiltersScanDate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OperationalRisksReportFiltersScanDate | cdktf.IResolvable | undefined) {
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

export class OperationalRisksReportFiltersScanDateList extends cdktf.ComplexList {
  public internalValue? : OperationalRisksReportFiltersScanDate[] | cdktf.IResolvable

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
  public get(index: number): OperationalRisksReportFiltersScanDateOutputReference {
    return new OperationalRisksReportFiltersScanDateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OperationalRisksReportFilters {
  /**
  * Artifact name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/operational_risks_report#artifact OperationalRisksReport#artifact}
  */
  readonly artifact?: string;
  /**
  * Artifact's component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/operational_risks_report#component OperationalRisksReport#component}
  */
  readonly component?: string;
  /**
  * Operational risk level. Allowed values: 'None', 'Low', 'Medium', 'High'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/operational_risks_report#risks OperationalRisksReport#risks}
  */
  readonly risks?: string[];
  /**
  * scan_date block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/operational_risks_report#scan_date OperationalRisksReport#scan_date}
  */
  readonly scanDate?: OperationalRisksReportFiltersScanDate[] | cdktf.IResolvable;
}

export function operationalRisksReportFiltersToTerraform(struct?: OperationalRisksReportFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact: cdktf.stringToTerraform(struct!.artifact),
    component: cdktf.stringToTerraform(struct!.component),
    risks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.risks),
    scan_date: cdktf.listMapper(operationalRisksReportFiltersScanDateToTerraform, true)(struct!.scanDate),
  }
}


export function operationalRisksReportFiltersToHclTerraform(struct?: OperationalRisksReportFilters | cdktf.IResolvable): any {
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
    risks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.risks),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    scan_date: {
      value: cdktf.listMapperHcl(operationalRisksReportFiltersScanDateToHclTerraform, true)(struct!.scanDate),
      isBlock: true,
      type: "set",
      storageClassType: "OperationalRisksReportFiltersScanDateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OperationalRisksReportFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OperationalRisksReportFilters | cdktf.IResolvable | undefined {
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
    if (this._risks !== undefined) {
      hasAnyValues = true;
      internalValueResult.risks = this._risks;
    }
    if (this._scanDate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanDate = this._scanDate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OperationalRisksReportFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._artifact = undefined;
      this._component = undefined;
      this._risks = undefined;
      this._scanDate.internalValue = undefined;
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
      this._risks = value.risks;
      this._scanDate.internalValue = value.scanDate;
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

  // risks - computed: true, optional: true, required: false
  private _risks?: string[]; 
  public get risks() {
    return cdktf.Fn.tolist(this.getListAttribute('risks'));
  }
  public set risks(value: string[]) {
    this._risks = value;
  }
  public resetRisks() {
    this._risks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get risksInput() {
    return this._risks;
  }

  // scan_date - computed: false, optional: true, required: false
  private _scanDate = new OperationalRisksReportFiltersScanDateList(this, "scan_date", true);
  public get scanDate() {
    return this._scanDate;
  }
  public putScanDate(value: OperationalRisksReportFiltersScanDate[] | cdktf.IResolvable) {
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

export class OperationalRisksReportFiltersList extends cdktf.ComplexList {
  public internalValue? : OperationalRisksReportFilters[] | cdktf.IResolvable

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
  public get(index: number): OperationalRisksReportFiltersOutputReference {
    return new OperationalRisksReportFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OperationalRisksReportResourcesBuilds {
  /**
  * The list of exclude patterns. Only one of 'names' or '*_patterns' can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/operational_risks_report#exclude_patterns OperationalRisksReport#exclude_patterns}
  */
  readonly excludePatterns?: string[];
  /**
  * The list of include patterns. Only one of 'names' or '*_patterns' can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/operational_risks_report#include_patterns OperationalRisksReport#include_patterns}
  */
  readonly includePatterns?: string[];
  /**
  * The list of build names. Only one of 'names' or '*_patterns' can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/operational_risks_report#names OperationalRisksReport#names}
  */
  readonly names?: string[];
  /**
  * The number of latest build versions to include to the report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/operational_risks_report#number_of_latest_versions OperationalRisksReport#number_of_latest_versions}
  */
  readonly numberOfLatestVersions?: number;
}

export function operationalRisksReportResourcesBuildsToTerraform(struct?: OperationalRisksReportResourcesBuilds | cdktf.IResolvable): any {
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


export function operationalRisksReportResourcesBuildsToHclTerraform(struct?: OperationalRisksReportResourcesBuilds | cdktf.IResolvable): any {
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

export class OperationalRisksReportResourcesBuildsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OperationalRisksReportResourcesBuilds | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OperationalRisksReportResourcesBuilds | cdktf.IResolvable | undefined) {
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

export class OperationalRisksReportResourcesBuildsList extends cdktf.ComplexList {
  public internalValue? : OperationalRisksReportResourcesBuilds[] | cdktf.IResolvable

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
  public get(index: number): OperationalRisksReportResourcesBuildsOutputReference {
    return new OperationalRisksReportResourcesBuildsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OperationalRisksReportResourcesProjects {
  /**
  * The list of exclude patterns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/operational_risks_report#exclude_key_patterns OperationalRisksReport#exclude_key_patterns}
  */
  readonly excludeKeyPatterns?: string[];
  /**
  * The list of include patterns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/operational_risks_report#include_key_patterns OperationalRisksReport#include_key_patterns}
  */
  readonly includeKeyPatterns?: string[];
  /**
  * The list of project keys. Note: Available from Xray version 3.130.0 and higher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/operational_risks_report#keys OperationalRisksReport#keys}
  */
  readonly keys?: string[];
  /**
  * The list of project names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/operational_risks_report#names OperationalRisksReport#names}
  */
  readonly names?: string[];
  /**
  * The number of latest release bundle versions to include to the report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/operational_risks_report#number_of_latest_versions OperationalRisksReport#number_of_latest_versions}
  */
  readonly numberOfLatestVersions?: number;
}

export function operationalRisksReportResourcesProjectsToTerraform(struct?: OperationalRisksReportResourcesProjects | cdktf.IResolvable): any {
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


export function operationalRisksReportResourcesProjectsToHclTerraform(struct?: OperationalRisksReportResourcesProjects | cdktf.IResolvable): any {
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

export class OperationalRisksReportResourcesProjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OperationalRisksReportResourcesProjects | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OperationalRisksReportResourcesProjects | cdktf.IResolvable | undefined) {
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

export class OperationalRisksReportResourcesProjectsList extends cdktf.ComplexList {
  public internalValue? : OperationalRisksReportResourcesProjects[] | cdktf.IResolvable

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
  public get(index: number): OperationalRisksReportResourcesProjectsOutputReference {
    return new OperationalRisksReportResourcesProjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OperationalRisksReportResourcesReleaseBundles {
  /**
  * The list of exclude patterns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/operational_risks_report#exclude_patterns OperationalRisksReport#exclude_patterns}
  */
  readonly excludePatterns?: string[];
  /**
  * The list of include patterns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/operational_risks_report#include_patterns OperationalRisksReport#include_patterns}
  */
  readonly includePatterns?: string[];
  /**
  * The list of release bundles names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/operational_risks_report#names OperationalRisksReport#names}
  */
  readonly names?: string[];
  /**
  * The number of latest release bundle versions to include to the report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/operational_risks_report#number_of_latest_versions OperationalRisksReport#number_of_latest_versions}
  */
  readonly numberOfLatestVersions?: number;
}

export function operationalRisksReportResourcesReleaseBundlesToTerraform(struct?: OperationalRisksReportResourcesReleaseBundles | cdktf.IResolvable): any {
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


export function operationalRisksReportResourcesReleaseBundlesToHclTerraform(struct?: OperationalRisksReportResourcesReleaseBundles | cdktf.IResolvable): any {
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

export class OperationalRisksReportResourcesReleaseBundlesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OperationalRisksReportResourcesReleaseBundles | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OperationalRisksReportResourcesReleaseBundles | cdktf.IResolvable | undefined) {
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

export class OperationalRisksReportResourcesReleaseBundlesList extends cdktf.ComplexList {
  public internalValue? : OperationalRisksReportResourcesReleaseBundles[] | cdktf.IResolvable

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
  public get(index: number): OperationalRisksReportResourcesReleaseBundlesOutputReference {
    return new OperationalRisksReportResourcesReleaseBundlesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OperationalRisksReportResourcesReleaseBundlesV2 {
  /**
  * The list of exclude patterns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/operational_risks_report#exclude_patterns OperationalRisksReport#exclude_patterns}
  */
  readonly excludePatterns?: string[];
  /**
  * The list of include patterns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/operational_risks_report#include_patterns OperationalRisksReport#include_patterns}
  */
  readonly includePatterns?: string[];
  /**
  * The list of release bundles names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/operational_risks_report#names OperationalRisksReport#names}
  */
  readonly names?: string[];
  /**
  * The number of latest release bundle versions to include to the report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/operational_risks_report#number_of_latest_versions OperationalRisksReport#number_of_latest_versions}
  */
  readonly numberOfLatestVersions?: number;
}

export function operationalRisksReportResourcesReleaseBundlesV2ToTerraform(struct?: OperationalRisksReportResourcesReleaseBundlesV2 | cdktf.IResolvable): any {
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


export function operationalRisksReportResourcesReleaseBundlesV2ToHclTerraform(struct?: OperationalRisksReportResourcesReleaseBundlesV2 | cdktf.IResolvable): any {
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

export class OperationalRisksReportResourcesReleaseBundlesV2OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OperationalRisksReportResourcesReleaseBundlesV2 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OperationalRisksReportResourcesReleaseBundlesV2 | cdktf.IResolvable | undefined) {
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

export class OperationalRisksReportResourcesReleaseBundlesV2List extends cdktf.ComplexList {
  public internalValue? : OperationalRisksReportResourcesReleaseBundlesV2[] | cdktf.IResolvable

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
  public get(index: number): OperationalRisksReportResourcesReleaseBundlesV2OutputReference {
    return new OperationalRisksReportResourcesReleaseBundlesV2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OperationalRisksReportResourcesRepository {
  /**
  * Exclude path patterns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/operational_risks_report#exclude_path_patterns OperationalRisksReport#exclude_path_patterns}
  */
  readonly excludePathPatterns?: string[];
  /**
  * Include path patterns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/operational_risks_report#include_path_patterns OperationalRisksReport#include_path_patterns}
  */
  readonly includePathPatterns?: string[];
  /**
  * Repository name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/operational_risks_report#name OperationalRisksReport#name}
  */
  readonly name: string;
}

export function operationalRisksReportResourcesRepositoryToTerraform(struct?: OperationalRisksReportResourcesRepository | cdktf.IResolvable): any {
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


export function operationalRisksReportResourcesRepositoryToHclTerraform(struct?: OperationalRisksReportResourcesRepository | cdktf.IResolvable): any {
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

export class OperationalRisksReportResourcesRepositoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OperationalRisksReportResourcesRepository | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OperationalRisksReportResourcesRepository | cdktf.IResolvable | undefined) {
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

export class OperationalRisksReportResourcesRepositoryList extends cdktf.ComplexList {
  public internalValue? : OperationalRisksReportResourcesRepository[] | cdktf.IResolvable

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
  public get(index: number): OperationalRisksReportResourcesRepositoryOutputReference {
    return new OperationalRisksReportResourcesRepositoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OperationalRisksReportResources {
  /**
  * builds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/operational_risks_report#builds OperationalRisksReport#builds}
  */
  readonly builds?: OperationalRisksReportResourcesBuilds[] | cdktf.IResolvable;
  /**
  * projects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/operational_risks_report#projects OperationalRisksReport#projects}
  */
  readonly projects?: OperationalRisksReportResourcesProjects[] | cdktf.IResolvable;
  /**
  * release_bundles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/operational_risks_report#release_bundles OperationalRisksReport#release_bundles}
  */
  readonly releaseBundles?: OperationalRisksReportResourcesReleaseBundles[] | cdktf.IResolvable;
  /**
  * release_bundles_v2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/operational_risks_report#release_bundles_v2 OperationalRisksReport#release_bundles_v2}
  */
  readonly releaseBundlesV2?: OperationalRisksReportResourcesReleaseBundlesV2[] | cdktf.IResolvable;
  /**
  * repository block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/operational_risks_report#repository OperationalRisksReport#repository}
  */
  readonly repository?: OperationalRisksReportResourcesRepository[] | cdktf.IResolvable;
}

export function operationalRisksReportResourcesToTerraform(struct?: OperationalRisksReportResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    builds: cdktf.listMapper(operationalRisksReportResourcesBuildsToTerraform, true)(struct!.builds),
    projects: cdktf.listMapper(operationalRisksReportResourcesProjectsToTerraform, true)(struct!.projects),
    release_bundles: cdktf.listMapper(operationalRisksReportResourcesReleaseBundlesToTerraform, true)(struct!.releaseBundles),
    release_bundles_v2: cdktf.listMapper(operationalRisksReportResourcesReleaseBundlesV2ToTerraform, true)(struct!.releaseBundlesV2),
    repository: cdktf.listMapper(operationalRisksReportResourcesRepositoryToTerraform, true)(struct!.repository),
  }
}


export function operationalRisksReportResourcesToHclTerraform(struct?: OperationalRisksReportResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    builds: {
      value: cdktf.listMapperHcl(operationalRisksReportResourcesBuildsToHclTerraform, true)(struct!.builds),
      isBlock: true,
      type: "set",
      storageClassType: "OperationalRisksReportResourcesBuildsList",
    },
    projects: {
      value: cdktf.listMapperHcl(operationalRisksReportResourcesProjectsToHclTerraform, true)(struct!.projects),
      isBlock: true,
      type: "set",
      storageClassType: "OperationalRisksReportResourcesProjectsList",
    },
    release_bundles: {
      value: cdktf.listMapperHcl(operationalRisksReportResourcesReleaseBundlesToHclTerraform, true)(struct!.releaseBundles),
      isBlock: true,
      type: "set",
      storageClassType: "OperationalRisksReportResourcesReleaseBundlesList",
    },
    release_bundles_v2: {
      value: cdktf.listMapperHcl(operationalRisksReportResourcesReleaseBundlesV2ToHclTerraform, true)(struct!.releaseBundlesV2),
      isBlock: true,
      type: "set",
      storageClassType: "OperationalRisksReportResourcesReleaseBundlesV2List",
    },
    repository: {
      value: cdktf.listMapperHcl(operationalRisksReportResourcesRepositoryToHclTerraform, true)(struct!.repository),
      isBlock: true,
      type: "set",
      storageClassType: "OperationalRisksReportResourcesRepositoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OperationalRisksReportResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OperationalRisksReportResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OperationalRisksReportResources | cdktf.IResolvable | undefined) {
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
  private _builds = new OperationalRisksReportResourcesBuildsList(this, "builds", true);
  public get builds() {
    return this._builds;
  }
  public putBuilds(value: OperationalRisksReportResourcesBuilds[] | cdktf.IResolvable) {
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
  private _projects = new OperationalRisksReportResourcesProjectsList(this, "projects", true);
  public get projects() {
    return this._projects;
  }
  public putProjects(value: OperationalRisksReportResourcesProjects[] | cdktf.IResolvable) {
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
  private _releaseBundles = new OperationalRisksReportResourcesReleaseBundlesList(this, "release_bundles", true);
  public get releaseBundles() {
    return this._releaseBundles;
  }
  public putReleaseBundles(value: OperationalRisksReportResourcesReleaseBundles[] | cdktf.IResolvable) {
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
  private _releaseBundlesV2 = new OperationalRisksReportResourcesReleaseBundlesV2List(this, "release_bundles_v2", true);
  public get releaseBundlesV2() {
    return this._releaseBundlesV2;
  }
  public putReleaseBundlesV2(value: OperationalRisksReportResourcesReleaseBundlesV2[] | cdktf.IResolvable) {
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
  private _repository = new OperationalRisksReportResourcesRepositoryList(this, "repository", true);
  public get repository() {
    return this._repository;
  }
  public putRepository(value: OperationalRisksReportResourcesRepository[] | cdktf.IResolvable) {
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

export class OperationalRisksReportResourcesList extends cdktf.ComplexList {
  public internalValue? : OperationalRisksReportResources[] | cdktf.IResolvable

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
  public get(index: number): OperationalRisksReportResourcesOutputReference {
    return new OperationalRisksReportResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/operational_risks_report xray_operational_risks_report}
*/
export class OperationalRisksReport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "xray_operational_risks_report";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OperationalRisksReport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OperationalRisksReport to import
  * @param importFromId The id of the existing OperationalRisksReport that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/operational_risks_report#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OperationalRisksReport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "xray_operational_risks_report", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/operational_risks_report xray_operational_risks_report} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OperationalRisksReportConfig
  */
  public constructor(scope: Construct, id: string, config: OperationalRisksReportConfig) {
    super(scope, id, {
      terraformResourceType: 'xray_operational_risks_report',
      terraformGeneratorMetadata: {
        providerName: 'xray',
        providerVersion: '3.1.5',
        providerVersionConstraint: '3.1.5'
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
  private _filters = new OperationalRisksReportFiltersList(this, "filters", true);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: OperationalRisksReportFilters[] | cdktf.IResolvable) {
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
  private _resources = new OperationalRisksReportResourcesList(this, "resources", true);
  public get resources() {
    return this._resources;
  }
  public putResources(value: OperationalRisksReportResources[] | cdktf.IResolvable) {
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
      filters: cdktf.listMapper(operationalRisksReportFiltersToTerraform, true)(this._filters.internalValue),
      resources: cdktf.listMapper(operationalRisksReportResourcesToTerraform, true)(this._resources.internalValue),
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
        value: cdktf.listMapperHcl(operationalRisksReportFiltersToHclTerraform, true)(this._filters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OperationalRisksReportFiltersList",
      },
      resources: {
        value: cdktf.listMapperHcl(operationalRisksReportResourcesToHclTerraform, true)(this._resources.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OperationalRisksReportResourcesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
