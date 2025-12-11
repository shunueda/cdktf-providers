// https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/licenses_report
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LicensesReportConfig extends cdktf.TerraformMetaArguments {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/licenses_report#cron_schedule LicensesReport#cron_schedule}
  */
  readonly cronSchedule?: string;
  /**
  * Timezone for cron schedule. For valid timezone formats, see: [iana-timezones](https://timeapi.io/documentation/iana-timezones). Note: Requires Xray 3.130.0 or higher. Only used when cron_schedule is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/licenses_report#cron_schedule_timezone LicensesReport#cron_schedule_timezone}
  */
  readonly cronScheduleTimezone?: string;
  /**
  * List of email addresses to notify when report generation is complete. Note: Requires Xray 3.130.0 or higher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/licenses_report#emails LicensesReport#emails}
  */
  readonly emails?: string[];
  /**
  * Name of the report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/licenses_report#name LicensesReport#name}
  */
  readonly name: string;
  /**
  * Project key for assigning this resource to. Must be 2 - 10 lowercase alphanumeric and hyphen characters. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/licenses_report#project_key LicensesReport#project_key}
  */
  readonly projectKey?: string;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/licenses_report#filters LicensesReport#filters}
  */
  readonly filters?: LicensesReportFilters[] | cdktf.IResolvable;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/licenses_report#resources LicensesReport#resources}
  */
  readonly resources?: LicensesReportResources[] | cdktf.IResolvable;
}
export interface LicensesReportFiltersScanDate {
  /**
  * Scanned end date.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/licenses_report#end LicensesReport#end}
  */
  readonly end?: string;
  /**
  * Scanned start date.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/licenses_report#start LicensesReport#start}
  */
  readonly start?: string;
}

export function licensesReportFiltersScanDateToTerraform(struct?: LicensesReportFiltersScanDate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function licensesReportFiltersScanDateToHclTerraform(struct?: LicensesReportFiltersScanDate | cdktf.IResolvable): any {
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

export class LicensesReportFiltersScanDateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LicensesReportFiltersScanDate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LicensesReportFiltersScanDate | cdktf.IResolvable | undefined) {
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

export class LicensesReportFiltersScanDateList extends cdktf.ComplexList {
  public internalValue? : LicensesReportFiltersScanDate[] | cdktf.IResolvable

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
  public get(index: number): LicensesReportFiltersScanDateOutputReference {
    return new LicensesReportFiltersScanDateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LicensesReportFilters {
  /**
  * Filter by artifact name, you can use (*) at thebeginning or end of a substring as a wildcard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/licenses_report#artifact LicensesReport#artifact}
  */
  readonly artifact?: string;
  /**
  * Filter by component name, you can use (*) at the beginning or end of a substring as a wildcard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/licenses_report#component LicensesReport#component}
  */
  readonly component?: string;
  /**
  * Filter licenses by names. Only one of 'license_names' or 'license_patterns' can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/licenses_report#license_names LicensesReport#license_names}
  */
  readonly licenseNames?: string[];
  /**
  * Filter licenses by patterns. Only one of 'license_names' or 'license_patterns' can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/licenses_report#license_patterns LicensesReport#license_patterns}
  */
  readonly licensePatterns?: string[];
  /**
  * Unknown displays the components that Xray could not discover any licenses for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/licenses_report#unknown LicensesReport#unknown}
  */
  readonly unknown?: boolean | cdktf.IResolvable;
  /**
  * Unrecognized displays the components that Xray found licenses for, but these licenses are not Xray recognized licenses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/licenses_report#unrecognized LicensesReport#unrecognized}
  */
  readonly unrecognized?: boolean | cdktf.IResolvable;
  /**
  * scan_date block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/licenses_report#scan_date LicensesReport#scan_date}
  */
  readonly scanDate?: LicensesReportFiltersScanDate[] | cdktf.IResolvable;
}

export function licensesReportFiltersToTerraform(struct?: LicensesReportFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact: cdktf.stringToTerraform(struct!.artifact),
    component: cdktf.stringToTerraform(struct!.component),
    license_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.licenseNames),
    license_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.licensePatterns),
    unknown: cdktf.booleanToTerraform(struct!.unknown),
    unrecognized: cdktf.booleanToTerraform(struct!.unrecognized),
    scan_date: cdktf.listMapper(licensesReportFiltersScanDateToTerraform, true)(struct!.scanDate),
  }
}


export function licensesReportFiltersToHclTerraform(struct?: LicensesReportFilters | cdktf.IResolvable): any {
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
    unrecognized: {
      value: cdktf.booleanToHclTerraform(struct!.unrecognized),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scan_date: {
      value: cdktf.listMapperHcl(licensesReportFiltersScanDateToHclTerraform, true)(struct!.scanDate),
      isBlock: true,
      type: "set",
      storageClassType: "LicensesReportFiltersScanDateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LicensesReportFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LicensesReportFilters | cdktf.IResolvable | undefined {
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
    if (this._unrecognized !== undefined) {
      hasAnyValues = true;
      internalValueResult.unrecognized = this._unrecognized;
    }
    if (this._scanDate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanDate = this._scanDate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LicensesReportFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._artifact = undefined;
      this._component = undefined;
      this._licenseNames = undefined;
      this._licensePatterns = undefined;
      this._unknown = undefined;
      this._unrecognized = undefined;
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
      this._licenseNames = value.licenseNames;
      this._licensePatterns = value.licensePatterns;
      this._unknown = value.unknown;
      this._unrecognized = value.unrecognized;
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

  // unrecognized - computed: false, optional: true, required: false
  private _unrecognized?: boolean | cdktf.IResolvable; 
  public get unrecognized() {
    return this.getBooleanAttribute('unrecognized');
  }
  public set unrecognized(value: boolean | cdktf.IResolvable) {
    this._unrecognized = value;
  }
  public resetUnrecognized() {
    this._unrecognized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unrecognizedInput() {
    return this._unrecognized;
  }

  // scan_date - computed: false, optional: true, required: false
  private _scanDate = new LicensesReportFiltersScanDateList(this, "scan_date", true);
  public get scanDate() {
    return this._scanDate;
  }
  public putScanDate(value: LicensesReportFiltersScanDate[] | cdktf.IResolvable) {
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

export class LicensesReportFiltersList extends cdktf.ComplexList {
  public internalValue? : LicensesReportFilters[] | cdktf.IResolvable

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
  public get(index: number): LicensesReportFiltersOutputReference {
    return new LicensesReportFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LicensesReportResourcesBuilds {
  /**
  * The list of exclude patterns. Only one of 'names' or '*_patterns' can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/licenses_report#exclude_patterns LicensesReport#exclude_patterns}
  */
  readonly excludePatterns?: string[];
  /**
  * The list of include patterns. Only one of 'names' or '*_patterns' can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/licenses_report#include_patterns LicensesReport#include_patterns}
  */
  readonly includePatterns?: string[];
  /**
  * The list of build names. Only one of 'names' or '*_patterns' can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/licenses_report#names LicensesReport#names}
  */
  readonly names?: string[];
  /**
  * The number of latest build versions to include to the report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/licenses_report#number_of_latest_versions LicensesReport#number_of_latest_versions}
  */
  readonly numberOfLatestVersions?: number;
}

export function licensesReportResourcesBuildsToTerraform(struct?: LicensesReportResourcesBuilds | cdktf.IResolvable): any {
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


export function licensesReportResourcesBuildsToHclTerraform(struct?: LicensesReportResourcesBuilds | cdktf.IResolvable): any {
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

export class LicensesReportResourcesBuildsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LicensesReportResourcesBuilds | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LicensesReportResourcesBuilds | cdktf.IResolvable | undefined) {
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

export class LicensesReportResourcesBuildsList extends cdktf.ComplexList {
  public internalValue? : LicensesReportResourcesBuilds[] | cdktf.IResolvable

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
  public get(index: number): LicensesReportResourcesBuildsOutputReference {
    return new LicensesReportResourcesBuildsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LicensesReportResourcesProjects {
  /**
  * The list of exclude patterns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/licenses_report#exclude_key_patterns LicensesReport#exclude_key_patterns}
  */
  readonly excludeKeyPatterns?: string[];
  /**
  * The list of include patterns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/licenses_report#include_key_patterns LicensesReport#include_key_patterns}
  */
  readonly includeKeyPatterns?: string[];
  /**
  * The list of project keys. Note: Available from Xray version 3.130.0 and higher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/licenses_report#keys LicensesReport#keys}
  */
  readonly keys?: string[];
  /**
  * The list of project names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/licenses_report#names LicensesReport#names}
  */
  readonly names?: string[];
  /**
  * The number of latest release bundle versions to include to the report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/licenses_report#number_of_latest_versions LicensesReport#number_of_latest_versions}
  */
  readonly numberOfLatestVersions?: number;
}

export function licensesReportResourcesProjectsToTerraform(struct?: LicensesReportResourcesProjects | cdktf.IResolvable): any {
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


export function licensesReportResourcesProjectsToHclTerraform(struct?: LicensesReportResourcesProjects | cdktf.IResolvable): any {
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

export class LicensesReportResourcesProjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LicensesReportResourcesProjects | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LicensesReportResourcesProjects | cdktf.IResolvable | undefined) {
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

export class LicensesReportResourcesProjectsList extends cdktf.ComplexList {
  public internalValue? : LicensesReportResourcesProjects[] | cdktf.IResolvable

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
  public get(index: number): LicensesReportResourcesProjectsOutputReference {
    return new LicensesReportResourcesProjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LicensesReportResourcesReleaseBundles {
  /**
  * The list of exclude patterns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/licenses_report#exclude_patterns LicensesReport#exclude_patterns}
  */
  readonly excludePatterns?: string[];
  /**
  * The list of include patterns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/licenses_report#include_patterns LicensesReport#include_patterns}
  */
  readonly includePatterns?: string[];
  /**
  * The list of release bundles names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/licenses_report#names LicensesReport#names}
  */
  readonly names?: string[];
  /**
  * The number of latest release bundle versions to include to the report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/licenses_report#number_of_latest_versions LicensesReport#number_of_latest_versions}
  */
  readonly numberOfLatestVersions?: number;
}

export function licensesReportResourcesReleaseBundlesToTerraform(struct?: LicensesReportResourcesReleaseBundles | cdktf.IResolvable): any {
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


export function licensesReportResourcesReleaseBundlesToHclTerraform(struct?: LicensesReportResourcesReleaseBundles | cdktf.IResolvable): any {
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

export class LicensesReportResourcesReleaseBundlesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LicensesReportResourcesReleaseBundles | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LicensesReportResourcesReleaseBundles | cdktf.IResolvable | undefined) {
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

export class LicensesReportResourcesReleaseBundlesList extends cdktf.ComplexList {
  public internalValue? : LicensesReportResourcesReleaseBundles[] | cdktf.IResolvable

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
  public get(index: number): LicensesReportResourcesReleaseBundlesOutputReference {
    return new LicensesReportResourcesReleaseBundlesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LicensesReportResourcesReleaseBundlesV2 {
  /**
  * The list of exclude patterns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/licenses_report#exclude_patterns LicensesReport#exclude_patterns}
  */
  readonly excludePatterns?: string[];
  /**
  * The list of include patterns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/licenses_report#include_patterns LicensesReport#include_patterns}
  */
  readonly includePatterns?: string[];
  /**
  * The list of release bundles names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/licenses_report#names LicensesReport#names}
  */
  readonly names?: string[];
  /**
  * The number of latest release bundle versions to include to the report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/licenses_report#number_of_latest_versions LicensesReport#number_of_latest_versions}
  */
  readonly numberOfLatestVersions?: number;
}

export function licensesReportResourcesReleaseBundlesV2ToTerraform(struct?: LicensesReportResourcesReleaseBundlesV2 | cdktf.IResolvable): any {
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


export function licensesReportResourcesReleaseBundlesV2ToHclTerraform(struct?: LicensesReportResourcesReleaseBundlesV2 | cdktf.IResolvable): any {
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

export class LicensesReportResourcesReleaseBundlesV2OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LicensesReportResourcesReleaseBundlesV2 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LicensesReportResourcesReleaseBundlesV2 | cdktf.IResolvable | undefined) {
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

export class LicensesReportResourcesReleaseBundlesV2List extends cdktf.ComplexList {
  public internalValue? : LicensesReportResourcesReleaseBundlesV2[] | cdktf.IResolvable

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
  public get(index: number): LicensesReportResourcesReleaseBundlesV2OutputReference {
    return new LicensesReportResourcesReleaseBundlesV2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LicensesReportResourcesRepository {
  /**
  * Exclude path patterns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/licenses_report#exclude_path_patterns LicensesReport#exclude_path_patterns}
  */
  readonly excludePathPatterns?: string[];
  /**
  * Include path patterns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/licenses_report#include_path_patterns LicensesReport#include_path_patterns}
  */
  readonly includePathPatterns?: string[];
  /**
  * Repository name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/licenses_report#name LicensesReport#name}
  */
  readonly name: string;
}

export function licensesReportResourcesRepositoryToTerraform(struct?: LicensesReportResourcesRepository | cdktf.IResolvable): any {
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


export function licensesReportResourcesRepositoryToHclTerraform(struct?: LicensesReportResourcesRepository | cdktf.IResolvable): any {
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

export class LicensesReportResourcesRepositoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LicensesReportResourcesRepository | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LicensesReportResourcesRepository | cdktf.IResolvable | undefined) {
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

export class LicensesReportResourcesRepositoryList extends cdktf.ComplexList {
  public internalValue? : LicensesReportResourcesRepository[] | cdktf.IResolvable

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
  public get(index: number): LicensesReportResourcesRepositoryOutputReference {
    return new LicensesReportResourcesRepositoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LicensesReportResources {
  /**
  * builds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/licenses_report#builds LicensesReport#builds}
  */
  readonly builds?: LicensesReportResourcesBuilds[] | cdktf.IResolvable;
  /**
  * projects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/licenses_report#projects LicensesReport#projects}
  */
  readonly projects?: LicensesReportResourcesProjects[] | cdktf.IResolvable;
  /**
  * release_bundles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/licenses_report#release_bundles LicensesReport#release_bundles}
  */
  readonly releaseBundles?: LicensesReportResourcesReleaseBundles[] | cdktf.IResolvable;
  /**
  * release_bundles_v2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/licenses_report#release_bundles_v2 LicensesReport#release_bundles_v2}
  */
  readonly releaseBundlesV2?: LicensesReportResourcesReleaseBundlesV2[] | cdktf.IResolvable;
  /**
  * repository block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/licenses_report#repository LicensesReport#repository}
  */
  readonly repository?: LicensesReportResourcesRepository[] | cdktf.IResolvable;
}

export function licensesReportResourcesToTerraform(struct?: LicensesReportResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    builds: cdktf.listMapper(licensesReportResourcesBuildsToTerraform, true)(struct!.builds),
    projects: cdktf.listMapper(licensesReportResourcesProjectsToTerraform, true)(struct!.projects),
    release_bundles: cdktf.listMapper(licensesReportResourcesReleaseBundlesToTerraform, true)(struct!.releaseBundles),
    release_bundles_v2: cdktf.listMapper(licensesReportResourcesReleaseBundlesV2ToTerraform, true)(struct!.releaseBundlesV2),
    repository: cdktf.listMapper(licensesReportResourcesRepositoryToTerraform, true)(struct!.repository),
  }
}


export function licensesReportResourcesToHclTerraform(struct?: LicensesReportResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    builds: {
      value: cdktf.listMapperHcl(licensesReportResourcesBuildsToHclTerraform, true)(struct!.builds),
      isBlock: true,
      type: "set",
      storageClassType: "LicensesReportResourcesBuildsList",
    },
    projects: {
      value: cdktf.listMapperHcl(licensesReportResourcesProjectsToHclTerraform, true)(struct!.projects),
      isBlock: true,
      type: "set",
      storageClassType: "LicensesReportResourcesProjectsList",
    },
    release_bundles: {
      value: cdktf.listMapperHcl(licensesReportResourcesReleaseBundlesToHclTerraform, true)(struct!.releaseBundles),
      isBlock: true,
      type: "set",
      storageClassType: "LicensesReportResourcesReleaseBundlesList",
    },
    release_bundles_v2: {
      value: cdktf.listMapperHcl(licensesReportResourcesReleaseBundlesV2ToHclTerraform, true)(struct!.releaseBundlesV2),
      isBlock: true,
      type: "set",
      storageClassType: "LicensesReportResourcesReleaseBundlesV2List",
    },
    repository: {
      value: cdktf.listMapperHcl(licensesReportResourcesRepositoryToHclTerraform, true)(struct!.repository),
      isBlock: true,
      type: "set",
      storageClassType: "LicensesReportResourcesRepositoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LicensesReportResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LicensesReportResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LicensesReportResources | cdktf.IResolvable | undefined) {
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
  private _builds = new LicensesReportResourcesBuildsList(this, "builds", true);
  public get builds() {
    return this._builds;
  }
  public putBuilds(value: LicensesReportResourcesBuilds[] | cdktf.IResolvable) {
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
  private _projects = new LicensesReportResourcesProjectsList(this, "projects", true);
  public get projects() {
    return this._projects;
  }
  public putProjects(value: LicensesReportResourcesProjects[] | cdktf.IResolvable) {
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
  private _releaseBundles = new LicensesReportResourcesReleaseBundlesList(this, "release_bundles", true);
  public get releaseBundles() {
    return this._releaseBundles;
  }
  public putReleaseBundles(value: LicensesReportResourcesReleaseBundles[] | cdktf.IResolvable) {
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
  private _releaseBundlesV2 = new LicensesReportResourcesReleaseBundlesV2List(this, "release_bundles_v2", true);
  public get releaseBundlesV2() {
    return this._releaseBundlesV2;
  }
  public putReleaseBundlesV2(value: LicensesReportResourcesReleaseBundlesV2[] | cdktf.IResolvable) {
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
  private _repository = new LicensesReportResourcesRepositoryList(this, "repository", true);
  public get repository() {
    return this._repository;
  }
  public putRepository(value: LicensesReportResourcesRepository[] | cdktf.IResolvable) {
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

export class LicensesReportResourcesList extends cdktf.ComplexList {
  public internalValue? : LicensesReportResources[] | cdktf.IResolvable

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
  public get(index: number): LicensesReportResourcesOutputReference {
    return new LicensesReportResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/licenses_report xray_licenses_report}
*/
export class LicensesReport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "xray_licenses_report";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LicensesReport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LicensesReport to import
  * @param importFromId The id of the existing LicensesReport that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/licenses_report#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LicensesReport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "xray_licenses_report", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/licenses_report xray_licenses_report} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LicensesReportConfig
  */
  public constructor(scope: Construct, id: string, config: LicensesReportConfig) {
    super(scope, id, {
      terraformResourceType: 'xray_licenses_report',
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
  private _filters = new LicensesReportFiltersList(this, "filters", true);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: LicensesReportFilters[] | cdktf.IResolvable) {
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
  private _resources = new LicensesReportResourcesList(this, "resources", true);
  public get resources() {
    return this._resources;
  }
  public putResources(value: LicensesReportResources[] | cdktf.IResolvable) {
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
      filters: cdktf.listMapper(licensesReportFiltersToTerraform, true)(this._filters.internalValue),
      resources: cdktf.listMapper(licensesReportResourcesToTerraform, true)(this._resources.internalValue),
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
        value: cdktf.listMapperHcl(licensesReportFiltersToHclTerraform, true)(this._filters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LicensesReportFiltersList",
      },
      resources: {
        value: cdktf.listMapperHcl(licensesReportResourcesToHclTerraform, true)(this._resources.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LicensesReportResourcesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
