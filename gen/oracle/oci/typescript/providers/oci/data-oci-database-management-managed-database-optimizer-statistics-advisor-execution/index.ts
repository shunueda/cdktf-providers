// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_execution
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_execution#execution_name DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution#execution_name}
  */
  readonly executionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_execution#id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_execution#managed_database_id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution#managed_database_id}
  */
  readonly managedDatabaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_execution#task_name DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution#task_name}
  */
  readonly taskName: string;
}
export interface DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabase {
}

export function dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseToTerraform(struct?: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseToHclTerraform(struct?: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // db_deployment_type - computed: true, optional: false, required: false
  public get dbDeploymentType() {
    return this.getStringAttribute('db_deployment_type');
  }

  // db_sub_type - computed: true, optional: false, required: false
  public get dbSubType() {
    return this.getStringAttribute('db_sub_type');
  }

  // db_type - computed: true, optional: false, required: false
  public get dbType() {
    return this.getStringAttribute('db_type');
  }

  // db_version - computed: true, optional: false, required: false
  public get dbVersion() {
    return this.getStringAttribute('db_version');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference {
    return new DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemas {
}

export function dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasToTerraform(struct?: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasToHclTerraform(struct?: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // objects - computed: true, optional: false, required: false
  public get objects() {
    return this.getListAttribute('objects');
  }
}

export class DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference {
    return new DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetails {
}

export function dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsToTerraform(struct?: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsToHclTerraform(struct?: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // operations - computed: true, optional: false, required: false
  public get operations() {
    return this.getListAttribute('operations');
  }

  // schemas - computed: true, optional: false, required: false
  private _schemas = new DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasList(this, "schemas", false);
  public get schemas() {
    return this._schemas;
  }
}

export class DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference {
    return new DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLines {
}

export function dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesToTerraform(struct?: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLines): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesToHclTerraform(struct?: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLines): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLines | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLines | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // operation - computed: true, optional: false, required: false
  public get operation() {
    return this.getStringAttribute('operation');
  }
}

export class DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference {
    return new DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExample {
}

export function dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleToTerraform(struct?: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExample): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleToHclTerraform(struct?: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExample): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExample | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExample | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lines - computed: true, optional: false, required: false
  private _lines = new DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesList(this, "lines", false);
  public get lines() {
    return this._lines;
  }
}

export class DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference {
    return new DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationales {
}

export function dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesToTerraform(struct?: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationales): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesToHclTerraform(struct?: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationales): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationales | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationales | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference {
    return new DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendations {
}

export function dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsToTerraform(struct?: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsToHclTerraform(struct?: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // example - computed: true, optional: false, required: false
  private _example = new DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleList(this, "example", false);
  public get example() {
    return this._example;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // rationales - computed: true, optional: false, required: false
  private _rationales = new DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesList(this, "rationales", false);
  public get rationales() {
    return this._rationales;
  }
}

export class DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference {
    return new DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindings {
}

export function dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsToTerraform(struct?: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsToHclTerraform(struct?: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // details - computed: true, optional: false, required: false
  private _details = new DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsList(this, "details", false);
  public get details() {
    return this._details;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // recommendations - computed: true, optional: false, required: false
  private _recommendations = new DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsList(this, "recommendations", false);
  public get recommendations() {
    return this._recommendations;
  }
}

export class DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference {
    return new DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRules {
}

export function dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesToTerraform(struct?: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesToHclTerraform(struct?: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRules | undefined) {
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

  // findings - computed: true, optional: false, required: false
  private _findings = new DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsList(this, "findings", false);
  public get findings() {
    return this._findings;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference {
    return new DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReport {
}

export function dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportToTerraform(struct?: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportToHclTerraform(struct?: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }

  // summary - computed: true, optional: false, required: false
  public get summary() {
    return this.getStringAttribute('summary');
  }
}

export class DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference {
    return new DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_execution oci_database_management_managed_database_optimizer_statistics_advisor_execution}
*/
export class DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_management_managed_database_optimizer_statistics_advisor_execution";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution to import
  * @param importFromId The id of the existing DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_execution#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_management_managed_database_optimizer_statistics_advisor_execution", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_execution oci_database_management_managed_database_optimizer_statistics_advisor_execution} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_management_managed_database_optimizer_statistics_advisor_execution',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._executionName = config.executionName;
    this._id = config.id;
    this._managedDatabaseId = config.managedDatabaseId;
    this._taskName = config.taskName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // database - computed: true, optional: false, required: false
  private _database = new DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseList(this, "database", false);
  public get database() {
    return this._database;
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }

  // execution_name - computed: false, optional: false, required: true
  private _executionName?: string; 
  public get executionName() {
    return this.getStringAttribute('execution_name');
  }
  public set executionName(value: string) {
    this._executionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionNameInput() {
    return this._executionName;
  }

  // findings - computed: true, optional: false, required: false
  public get findings() {
    return this.getNumberAttribute('findings');
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

  // report - computed: true, optional: false, required: false
  private _report = new DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportList(this, "report", false);
  public get report() {
    return this._report;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }

  // task_name - computed: false, optional: false, required: true
  private _taskName?: string; 
  public get taskName() {
    return this.getStringAttribute('task_name');
  }
  public set taskName(value: string) {
    this._taskName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskNameInput() {
    return this._taskName;
  }

  // time_end - computed: true, optional: false, required: false
  public get timeEnd() {
    return this.getStringAttribute('time_end');
  }

  // time_start - computed: true, optional: false, required: false
  public get timeStart() {
    return this.getStringAttribute('time_start');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      execution_name: cdktf.stringToTerraform(this._executionName),
      id: cdktf.stringToTerraform(this._id),
      managed_database_id: cdktf.stringToTerraform(this._managedDatabaseId),
      task_name: cdktf.stringToTerraform(this._taskName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      execution_name: {
        value: cdktf.stringToHclTerraform(this._executionName),
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
      task_name: {
        value: cdktf.stringToHclTerraform(this._taskName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
