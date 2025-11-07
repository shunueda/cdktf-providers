// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_summary_report
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_summary_report#begin_exec_id_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReport#begin_exec_id_greater_than_or_equal_to}
  */
  readonly beginExecIdGreaterThanOrEqualTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_summary_report#end_exec_id_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReport#end_exec_id_less_than_or_equal_to}
  */
  readonly endExecIdLessThanOrEqualTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_summary_report#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_summary_report#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReport#managed_database_id}
  */
  readonly managedDatabaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_summary_report#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReport#opc_named_credential_id}
  */
  readonly opcNamedCredentialId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_summary_report#search_period DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReport#search_period}
  */
  readonly searchPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_summary_report#sql_tuning_advisor_task_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReport#sql_tuning_advisor_task_id}
  */
  readonly sqlTuningAdvisorTaskId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_summary_report#time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReport#time_greater_than_or_equal_to}
  */
  readonly timeGreaterThanOrEqualTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_summary_report#time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReport#time_less_than_or_equal_to}
  */
  readonly timeLessThanOrEqualTo?: string;
}
export interface DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportIndexFindings {
}

export function dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportIndexFindingsToTerraform(struct?: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportIndexFindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportIndexFindingsToHclTerraform(struct?: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportIndexFindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportIndexFindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportIndexFindings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportIndexFindings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // index_columns - computed: true, optional: false, required: false
  public get indexColumns() {
    return this.getListAttribute('index_columns');
  }

  // index_hash_value - computed: true, optional: false, required: false
  public get indexHashValue() {
    return this.getStringAttribute('index_hash_value');
  }

  // index_name - computed: true, optional: false, required: false
  public get indexName() {
    return this.getStringAttribute('index_name');
  }

  // reference_count - computed: true, optional: false, required: false
  public get referenceCount() {
    return this.getNumberAttribute('reference_count');
  }

  // schema - computed: true, optional: false, required: false
  public get schema() {
    return this.getStringAttribute('schema');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
}

export class DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportIndexFindingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportIndexFindingsOutputReference {
    return new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportIndexFindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportObjectStatFindings {
}

export function dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportObjectStatFindingsToTerraform(struct?: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportObjectStatFindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportObjectStatFindingsToHclTerraform(struct?: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportObjectStatFindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportObjectStatFindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportObjectStatFindings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportObjectStatFindings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }

  // object_hash_value - computed: true, optional: false, required: false
  public get objectHashValue() {
    return this.getStringAttribute('object_hash_value');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // problem_type - computed: true, optional: false, required: false
  public get problemType() {
    return this.getStringAttribute('problem_type');
  }

  // reference_count - computed: true, optional: false, required: false
  public get referenceCount() {
    return this.getNumberAttribute('reference_count');
  }

  // schema - computed: true, optional: false, required: false
  public get schema() {
    return this.getStringAttribute('schema');
  }
}

export class DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportObjectStatFindingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportObjectStatFindingsOutputReference {
    return new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportObjectStatFindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportStatisticsFindingBenefits {
}

export function dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportStatisticsFindingBenefitsToTerraform(struct?: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportStatisticsFindingBenefits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportStatisticsFindingBenefitsToHclTerraform(struct?: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportStatisticsFindingBenefits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportStatisticsFindingBenefitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportStatisticsFindingBenefits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportStatisticsFindingBenefits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // db_time_after_implemented - computed: true, optional: false, required: false
  public get dbTimeAfterImplemented() {
    return this.getNumberAttribute('db_time_after_implemented');
  }

  // db_time_after_recommended - computed: true, optional: false, required: false
  public get dbTimeAfterRecommended() {
    return this.getNumberAttribute('db_time_after_recommended');
  }

  // db_time_before_implemented - computed: true, optional: false, required: false
  public get dbTimeBeforeImplemented() {
    return this.getNumberAttribute('db_time_before_implemented');
  }

  // db_time_before_recommended - computed: true, optional: false, required: false
  public get dbTimeBeforeRecommended() {
    return this.getNumberAttribute('db_time_before_recommended');
  }
}

export class DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportStatisticsFindingBenefitsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportStatisticsFindingBenefitsOutputReference {
    return new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportStatisticsFindingBenefitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportStatisticsFindingCounts {
}

export function dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportStatisticsFindingCountsToTerraform(struct?: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportStatisticsFindingCounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportStatisticsFindingCountsToHclTerraform(struct?: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportStatisticsFindingCounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportStatisticsFindingCountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportStatisticsFindingCounts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportStatisticsFindingCounts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alternate_plan - computed: true, optional: false, required: false
  public get alternatePlan() {
    return this.getNumberAttribute('alternate_plan');
  }

  // implemented_sql_profile - computed: true, optional: false, required: false
  public get implementedSqlProfile() {
    return this.getNumberAttribute('implemented_sql_profile');
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getNumberAttribute('index');
  }

  // recommended_sql_profile - computed: true, optional: false, required: false
  public get recommendedSqlProfile() {
    return this.getNumberAttribute('recommended_sql_profile');
  }

  // restructure - computed: true, optional: false, required: false
  public get restructure() {
    return this.getNumberAttribute('restructure');
  }

  // statistics - computed: true, optional: false, required: false
  public get statistics() {
    return this.getNumberAttribute('statistics');
  }
}

export class DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportStatisticsFindingCountsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportStatisticsFindingCountsOutputReference {
    return new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportStatisticsFindingCountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportStatisticsStatementCounts {
}

export function dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportStatisticsStatementCountsToTerraform(struct?: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportStatisticsStatementCounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportStatisticsStatementCountsToHclTerraform(struct?: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportStatisticsStatementCounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportStatisticsStatementCountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportStatisticsStatementCounts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportStatisticsStatementCounts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // distinct_sql - computed: true, optional: false, required: false
  public get distinctSql() {
    return this.getNumberAttribute('distinct_sql');
  }

  // error_count - computed: true, optional: false, required: false
  public get errorCount() {
    return this.getNumberAttribute('error_count');
  }

  // finding_count - computed: true, optional: false, required: false
  public get findingCount() {
    return this.getNumberAttribute('finding_count');
  }

  // total_sql - computed: true, optional: false, required: false
  public get totalSql() {
    return this.getNumberAttribute('total_sql');
  }
}

export class DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportStatisticsStatementCountsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportStatisticsStatementCountsOutputReference {
    return new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportStatisticsStatementCountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportStatistics {
}

export function dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportStatisticsToTerraform(struct?: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportStatisticsToHclTerraform(struct?: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // finding_benefits - computed: true, optional: false, required: false
  private _findingBenefits = new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportStatisticsFindingBenefitsList(this, "finding_benefits", false);
  public get findingBenefits() {
    return this._findingBenefits;
  }

  // finding_counts - computed: true, optional: false, required: false
  private _findingCounts = new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportStatisticsFindingCountsList(this, "finding_counts", false);
  public get findingCounts() {
    return this._findingCounts;
  }

  // statement_counts - computed: true, optional: false, required: false
  private _statementCounts = new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportStatisticsStatementCountsList(this, "statement_counts", false);
  public get statementCounts() {
    return this._statementCounts;
  }
}

export class DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportStatisticsOutputReference {
    return new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportTaskInfo {
}

export function dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportTaskInfoToTerraform(struct?: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportTaskInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportTaskInfoToHclTerraform(struct?: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportTaskInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportTaskInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportTaskInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportTaskInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // running_time - computed: true, optional: false, required: false
  public get runningTime() {
    return this.getNumberAttribute('running_time');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // time_ended - computed: true, optional: false, required: false
  public get timeEnded() {
    return this.getStringAttribute('time_ended');
  }

  // time_started - computed: true, optional: false, required: false
  public get timeStarted() {
    return this.getStringAttribute('time_started');
  }
}

export class DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportTaskInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportTaskInfoOutputReference {
    return new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportTaskInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_summary_report oci_database_management_managed_database_sql_tuning_advisor_tasks_summary_report}
*/
export class DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReport extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_management_managed_database_sql_tuning_advisor_tasks_summary_report";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReport to import
  * @param importFromId The id of the existing DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReport that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_summary_report#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_management_managed_database_sql_tuning_advisor_tasks_summary_report", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_summary_report oci_database_management_managed_database_sql_tuning_advisor_tasks_summary_report} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_management_managed_database_sql_tuning_advisor_tasks_summary_report',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._beginExecIdGreaterThanOrEqualTo = config.beginExecIdGreaterThanOrEqualTo;
    this._endExecIdLessThanOrEqualTo = config.endExecIdLessThanOrEqualTo;
    this._id = config.id;
    this._managedDatabaseId = config.managedDatabaseId;
    this._opcNamedCredentialId = config.opcNamedCredentialId;
    this._searchPeriod = config.searchPeriod;
    this._sqlTuningAdvisorTaskId = config.sqlTuningAdvisorTaskId;
    this._timeGreaterThanOrEqualTo = config.timeGreaterThanOrEqualTo;
    this._timeLessThanOrEqualTo = config.timeLessThanOrEqualTo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // begin_exec_id_greater_than_or_equal_to - computed: false, optional: true, required: false
  private _beginExecIdGreaterThanOrEqualTo?: string; 
  public get beginExecIdGreaterThanOrEqualTo() {
    return this.getStringAttribute('begin_exec_id_greater_than_or_equal_to');
  }
  public set beginExecIdGreaterThanOrEqualTo(value: string) {
    this._beginExecIdGreaterThanOrEqualTo = value;
  }
  public resetBeginExecIdGreaterThanOrEqualTo() {
    this._beginExecIdGreaterThanOrEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beginExecIdGreaterThanOrEqualToInput() {
    return this._beginExecIdGreaterThanOrEqualTo;
  }

  // end_exec_id_less_than_or_equal_to - computed: false, optional: true, required: false
  private _endExecIdLessThanOrEqualTo?: string; 
  public get endExecIdLessThanOrEqualTo() {
    return this.getStringAttribute('end_exec_id_less_than_or_equal_to');
  }
  public set endExecIdLessThanOrEqualTo(value: string) {
    this._endExecIdLessThanOrEqualTo = value;
  }
  public resetEndExecIdLessThanOrEqualTo() {
    this._endExecIdLessThanOrEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endExecIdLessThanOrEqualToInput() {
    return this._endExecIdLessThanOrEqualTo;
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

  // index_findings - computed: true, optional: false, required: false
  private _indexFindings = new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportIndexFindingsList(this, "index_findings", false);
  public get indexFindings() {
    return this._indexFindings;
  }

  // managed_database_id - computed: false, optional: false, required: true
  private _managedDatabaseId?: string; 
  public get managedDatabaseId() {
    return this.getStringAttribute('managed_database_id');
  }
  public set managedDatabaseId(value: string) {
    this._managedDatabaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedDatabaseIdInput() {
    return this._managedDatabaseId;
  }

  // object_stat_findings - computed: true, optional: false, required: false
  private _objectStatFindings = new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportObjectStatFindingsList(this, "object_stat_findings", false);
  public get objectStatFindings() {
    return this._objectStatFindings;
  }

  // opc_named_credential_id - computed: false, optional: true, required: false
  private _opcNamedCredentialId?: string; 
  public get opcNamedCredentialId() {
    return this.getStringAttribute('opc_named_credential_id');
  }
  public set opcNamedCredentialId(value: string) {
    this._opcNamedCredentialId = value;
  }
  public resetOpcNamedCredentialId() {
    this._opcNamedCredentialId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opcNamedCredentialIdInput() {
    return this._opcNamedCredentialId;
  }

  // search_period - computed: false, optional: true, required: false
  private _searchPeriod?: string; 
  public get searchPeriod() {
    return this.getStringAttribute('search_period');
  }
  public set searchPeriod(value: string) {
    this._searchPeriod = value;
  }
  public resetSearchPeriod() {
    this._searchPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchPeriodInput() {
    return this._searchPeriod;
  }

  // sql_tuning_advisor_task_id - computed: false, optional: false, required: true
  private _sqlTuningAdvisorTaskId?: string; 
  public get sqlTuningAdvisorTaskId() {
    return this.getStringAttribute('sql_tuning_advisor_task_id');
  }
  public set sqlTuningAdvisorTaskId(value: string) {
    this._sqlTuningAdvisorTaskId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlTuningAdvisorTaskIdInput() {
    return this._sqlTuningAdvisorTaskId;
  }

  // statistics - computed: true, optional: false, required: false
  private _statistics = new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportStatisticsList(this, "statistics", false);
  public get statistics() {
    return this._statistics;
  }

  // task_info - computed: true, optional: false, required: false
  private _taskInfo = new DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSummaryReportTaskInfoList(this, "task_info", false);
  public get taskInfo() {
    return this._taskInfo;
  }

  // time_greater_than_or_equal_to - computed: false, optional: true, required: false
  private _timeGreaterThanOrEqualTo?: string; 
  public get timeGreaterThanOrEqualTo() {
    return this.getStringAttribute('time_greater_than_or_equal_to');
  }
  public set timeGreaterThanOrEqualTo(value: string) {
    this._timeGreaterThanOrEqualTo = value;
  }
  public resetTimeGreaterThanOrEqualTo() {
    this._timeGreaterThanOrEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeGreaterThanOrEqualToInput() {
    return this._timeGreaterThanOrEqualTo;
  }

  // time_less_than_or_equal_to - computed: false, optional: true, required: false
  private _timeLessThanOrEqualTo?: string; 
  public get timeLessThanOrEqualTo() {
    return this.getStringAttribute('time_less_than_or_equal_to');
  }
  public set timeLessThanOrEqualTo(value: string) {
    this._timeLessThanOrEqualTo = value;
  }
  public resetTimeLessThanOrEqualTo() {
    this._timeLessThanOrEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeLessThanOrEqualToInput() {
    return this._timeLessThanOrEqualTo;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      begin_exec_id_greater_than_or_equal_to: cdktf.stringToTerraform(this._beginExecIdGreaterThanOrEqualTo),
      end_exec_id_less_than_or_equal_to: cdktf.stringToTerraform(this._endExecIdLessThanOrEqualTo),
      id: cdktf.stringToTerraform(this._id),
      managed_database_id: cdktf.stringToTerraform(this._managedDatabaseId),
      opc_named_credential_id: cdktf.stringToTerraform(this._opcNamedCredentialId),
      search_period: cdktf.stringToTerraform(this._searchPeriod),
      sql_tuning_advisor_task_id: cdktf.stringToTerraform(this._sqlTuningAdvisorTaskId),
      time_greater_than_or_equal_to: cdktf.stringToTerraform(this._timeGreaterThanOrEqualTo),
      time_less_than_or_equal_to: cdktf.stringToTerraform(this._timeLessThanOrEqualTo),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      begin_exec_id_greater_than_or_equal_to: {
        value: cdktf.stringToHclTerraform(this._beginExecIdGreaterThanOrEqualTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_exec_id_less_than_or_equal_to: {
        value: cdktf.stringToHclTerraform(this._endExecIdLessThanOrEqualTo),
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
      managed_database_id: {
        value: cdktf.stringToHclTerraform(this._managedDatabaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opc_named_credential_id: {
        value: cdktf.stringToHclTerraform(this._opcNamedCredentialId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_period: {
        value: cdktf.stringToHclTerraform(this._searchPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sql_tuning_advisor_task_id: {
        value: cdktf.stringToHclTerraform(this._sqlTuningAdvisorTaskId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_greater_than_or_equal_to: {
        value: cdktf.stringToHclTerraform(this._timeGreaterThanOrEqualTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_less_than_or_equal_to: {
        value: cdktf.stringToHclTerraform(this._timeLessThanOrEqualTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
