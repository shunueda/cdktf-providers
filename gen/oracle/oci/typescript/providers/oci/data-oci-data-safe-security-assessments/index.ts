// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_assessments
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeSecurityAssessmentsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_assessments#access_level DataOciDataSafeSecurityAssessments#access_level}
  */
  readonly accessLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_assessments#compartment_id DataOciDataSafeSecurityAssessments#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_assessments#compartment_id_in_subtree DataOciDataSafeSecurityAssessments#compartment_id_in_subtree}
  */
  readonly compartmentIdInSubtree?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_assessments#display_name DataOciDataSafeSecurityAssessments#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_assessments#id DataOciDataSafeSecurityAssessments#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_assessments#is_baseline DataOciDataSafeSecurityAssessments#is_baseline}
  */
  readonly isBaseline?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_assessments#is_schedule_assessment DataOciDataSafeSecurityAssessments#is_schedule_assessment}
  */
  readonly isScheduleAssessment?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_assessments#schedule_assessment_id DataOciDataSafeSecurityAssessments#schedule_assessment_id}
  */
  readonly scheduleAssessmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_assessments#state DataOciDataSafeSecurityAssessments#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_assessments#target_database_group_id DataOciDataSafeSecurityAssessments#target_database_group_id}
  */
  readonly targetDatabaseGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_assessments#target_id DataOciDataSafeSecurityAssessments#target_id}
  */
  readonly targetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_assessments#target_type DataOciDataSafeSecurityAssessments#target_type}
  */
  readonly targetType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_assessments#template_assessment_id DataOciDataSafeSecurityAssessments#template_assessment_id}
  */
  readonly templateAssessmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_assessments#time_created_greater_than_or_equal_to DataOciDataSafeSecurityAssessments#time_created_greater_than_or_equal_to}
  */
  readonly timeCreatedGreaterThanOrEqualTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_assessments#time_created_less_than DataOciDataSafeSecurityAssessments#time_created_less_than}
  */
  readonly timeCreatedLessThan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_assessments#triggered_by DataOciDataSafeSecurityAssessments#triggered_by}
  */
  readonly triggeredBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_assessments#type DataOciDataSafeSecurityAssessments#type}
  */
  readonly type?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_assessments#filter DataOciDataSafeSecurityAssessments#filter}
  */
  readonly filter?: DataOciDataSafeSecurityAssessmentsFilter[] | cdktf.IResolvable;
}
export interface DataOciDataSafeSecurityAssessmentsSecurityAssessmentsChecksReferences {
}

export function dataOciDataSafeSecurityAssessmentsSecurityAssessmentsChecksReferencesToTerraform(struct?: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsChecksReferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentsSecurityAssessmentsChecksReferencesToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsChecksReferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentsSecurityAssessmentsChecksReferencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentsSecurityAssessmentsChecksReferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsChecksReferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cis - computed: true, optional: false, required: false
  public get cis() {
    return this.getStringAttribute('cis');
  }

  // gdpr - computed: true, optional: false, required: false
  public get gdpr() {
    return this.getStringAttribute('gdpr');
  }

  // obp - computed: true, optional: false, required: false
  public get obp() {
    return this.getStringAttribute('obp');
  }

  // stig - computed: true, optional: false, required: false
  public get stig() {
    return this.getStringAttribute('stig');
  }
}

export class DataOciDataSafeSecurityAssessmentsSecurityAssessmentsChecksReferencesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentsSecurityAssessmentsChecksReferencesOutputReference {
    return new DataOciDataSafeSecurityAssessmentsSecurityAssessmentsChecksReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentsSecurityAssessmentsChecks {
}

export function dataOciDataSafeSecurityAssessmentsSecurityAssessmentsChecksToTerraform(struct?: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsChecks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentsSecurityAssessmentsChecksToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsChecks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentsSecurityAssessmentsChecksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentsSecurityAssessmentsChecks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsChecks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // oneline - computed: true, optional: false, required: false
  public get oneline() {
    return this.getStringAttribute('oneline');
  }

  // references - computed: true, optional: false, required: false
  private _references = new DataOciDataSafeSecurityAssessmentsSecurityAssessmentsChecksReferencesList(this, "references", false);
  public get references() {
    return this._references;
  }

  // remarks - computed: true, optional: false, required: false
  public get remarks() {
    return this.getStringAttribute('remarks');
  }

  // suggested_severity - computed: true, optional: false, required: false
  public get suggestedSeverity() {
    return this.getStringAttribute('suggested_severity');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }
}

export class DataOciDataSafeSecurityAssessmentsSecurityAssessmentsChecksList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentsSecurityAssessmentsChecksOutputReference {
    return new DataOciDataSafeSecurityAssessmentsSecurityAssessmentsChecksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisory {
}

export function dataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryToTerraform(struct?: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auditing_findings_count - computed: true, optional: false, required: false
  public get auditingFindingsCount() {
    return this.getNumberAttribute('auditing_findings_count');
  }

  // authorization_control_findings_count - computed: true, optional: false, required: false
  public get authorizationControlFindingsCount() {
    return this.getNumberAttribute('authorization_control_findings_count');
  }

  // data_encryption_findings_count - computed: true, optional: false, required: false
  public get dataEncryptionFindingsCount() {
    return this.getNumberAttribute('data_encryption_findings_count');
  }

  // db_configuration_findings_count - computed: true, optional: false, required: false
  public get dbConfigurationFindingsCount() {
    return this.getNumberAttribute('db_configuration_findings_count');
  }

  // fine_grained_access_control_findings_count - computed: true, optional: false, required: false
  public get fineGrainedAccessControlFindingsCount() {
    return this.getNumberAttribute('fine_grained_access_control_findings_count');
  }

  // privileges_and_roles_findings_count - computed: true, optional: false, required: false
  public get privilegesAndRolesFindingsCount() {
    return this.getNumberAttribute('privileges_and_roles_findings_count');
  }

  // targets_count - computed: true, optional: false, required: false
  public get targetsCount() {
    return this.getNumberAttribute('targets_count');
  }

  // user_accounts_findings_count - computed: true, optional: false, required: false
  public get userAccountsFindingsCount() {
    return this.getNumberAttribute('user_accounts_findings_count');
  }
}

export class DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference {
    return new DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferred {
}

export function dataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredToTerraform(struct?: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferred): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferred): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferred | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferred | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auditing_findings_count - computed: true, optional: false, required: false
  public get auditingFindingsCount() {
    return this.getNumberAttribute('auditing_findings_count');
  }

  // authorization_control_findings_count - computed: true, optional: false, required: false
  public get authorizationControlFindingsCount() {
    return this.getNumberAttribute('authorization_control_findings_count');
  }

  // data_encryption_findings_count - computed: true, optional: false, required: false
  public get dataEncryptionFindingsCount() {
    return this.getNumberAttribute('data_encryption_findings_count');
  }

  // db_configuration_findings_count - computed: true, optional: false, required: false
  public get dbConfigurationFindingsCount() {
    return this.getNumberAttribute('db_configuration_findings_count');
  }

  // fine_grained_access_control_findings_count - computed: true, optional: false, required: false
  public get fineGrainedAccessControlFindingsCount() {
    return this.getNumberAttribute('fine_grained_access_control_findings_count');
  }

  // privileges_and_roles_findings_count - computed: true, optional: false, required: false
  public get privilegesAndRolesFindingsCount() {
    return this.getNumberAttribute('privileges_and_roles_findings_count');
  }

  // targets_count - computed: true, optional: false, required: false
  public get targetsCount() {
    return this.getNumberAttribute('targets_count');
  }

  // user_accounts_findings_count - computed: true, optional: false, required: false
  public get userAccountsFindingsCount() {
    return this.getNumberAttribute('user_accounts_findings_count');
  }
}

export class DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference {
    return new DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluate {
}

export function dataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateToTerraform(struct?: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auditing_findings_count - computed: true, optional: false, required: false
  public get auditingFindingsCount() {
    return this.getNumberAttribute('auditing_findings_count');
  }

  // authorization_control_findings_count - computed: true, optional: false, required: false
  public get authorizationControlFindingsCount() {
    return this.getNumberAttribute('authorization_control_findings_count');
  }

  // data_encryption_findings_count - computed: true, optional: false, required: false
  public get dataEncryptionFindingsCount() {
    return this.getNumberAttribute('data_encryption_findings_count');
  }

  // db_configuration_findings_count - computed: true, optional: false, required: false
  public get dbConfigurationFindingsCount() {
    return this.getNumberAttribute('db_configuration_findings_count');
  }

  // fine_grained_access_control_findings_count - computed: true, optional: false, required: false
  public get fineGrainedAccessControlFindingsCount() {
    return this.getNumberAttribute('fine_grained_access_control_findings_count');
  }

  // privileges_and_roles_findings_count - computed: true, optional: false, required: false
  public get privilegesAndRolesFindingsCount() {
    return this.getNumberAttribute('privileges_and_roles_findings_count');
  }

  // targets_count - computed: true, optional: false, required: false
  public get targetsCount() {
    return this.getNumberAttribute('targets_count');
  }

  // user_accounts_findings_count - computed: true, optional: false, required: false
  public get userAccountsFindingsCount() {
    return this.getNumberAttribute('user_accounts_findings_count');
  }
}

export class DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference {
    return new DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRisk {
}

export function dataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskToTerraform(struct?: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auditing_findings_count - computed: true, optional: false, required: false
  public get auditingFindingsCount() {
    return this.getNumberAttribute('auditing_findings_count');
  }

  // authorization_control_findings_count - computed: true, optional: false, required: false
  public get authorizationControlFindingsCount() {
    return this.getNumberAttribute('authorization_control_findings_count');
  }

  // data_encryption_findings_count - computed: true, optional: false, required: false
  public get dataEncryptionFindingsCount() {
    return this.getNumberAttribute('data_encryption_findings_count');
  }

  // db_configuration_findings_count - computed: true, optional: false, required: false
  public get dbConfigurationFindingsCount() {
    return this.getNumberAttribute('db_configuration_findings_count');
  }

  // fine_grained_access_control_findings_count - computed: true, optional: false, required: false
  public get fineGrainedAccessControlFindingsCount() {
    return this.getNumberAttribute('fine_grained_access_control_findings_count');
  }

  // privileges_and_roles_findings_count - computed: true, optional: false, required: false
  public get privilegesAndRolesFindingsCount() {
    return this.getNumberAttribute('privileges_and_roles_findings_count');
  }

  // targets_count - computed: true, optional: false, required: false
  public get targetsCount() {
    return this.getNumberAttribute('targets_count');
  }

  // user_accounts_findings_count - computed: true, optional: false, required: false
  public get userAccountsFindingsCount() {
    return this.getNumberAttribute('user_accounts_findings_count');
  }
}

export class DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference {
    return new DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRisk {
}

export function dataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskToTerraform(struct?: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auditing_findings_count - computed: true, optional: false, required: false
  public get auditingFindingsCount() {
    return this.getNumberAttribute('auditing_findings_count');
  }

  // authorization_control_findings_count - computed: true, optional: false, required: false
  public get authorizationControlFindingsCount() {
    return this.getNumberAttribute('authorization_control_findings_count');
  }

  // data_encryption_findings_count - computed: true, optional: false, required: false
  public get dataEncryptionFindingsCount() {
    return this.getNumberAttribute('data_encryption_findings_count');
  }

  // db_configuration_findings_count - computed: true, optional: false, required: false
  public get dbConfigurationFindingsCount() {
    return this.getNumberAttribute('db_configuration_findings_count');
  }

  // fine_grained_access_control_findings_count - computed: true, optional: false, required: false
  public get fineGrainedAccessControlFindingsCount() {
    return this.getNumberAttribute('fine_grained_access_control_findings_count');
  }

  // privileges_and_roles_findings_count - computed: true, optional: false, required: false
  public get privilegesAndRolesFindingsCount() {
    return this.getNumberAttribute('privileges_and_roles_findings_count');
  }

  // targets_count - computed: true, optional: false, required: false
  public get targetsCount() {
    return this.getNumberAttribute('targets_count');
  }

  // user_accounts_findings_count - computed: true, optional: false, required: false
  public get userAccountsFindingsCount() {
    return this.getNumberAttribute('user_accounts_findings_count');
  }
}

export class DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference {
    return new DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRisk {
}

export function dataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskToTerraform(struct?: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auditing_findings_count - computed: true, optional: false, required: false
  public get auditingFindingsCount() {
    return this.getNumberAttribute('auditing_findings_count');
  }

  // authorization_control_findings_count - computed: true, optional: false, required: false
  public get authorizationControlFindingsCount() {
    return this.getNumberAttribute('authorization_control_findings_count');
  }

  // data_encryption_findings_count - computed: true, optional: false, required: false
  public get dataEncryptionFindingsCount() {
    return this.getNumberAttribute('data_encryption_findings_count');
  }

  // db_configuration_findings_count - computed: true, optional: false, required: false
  public get dbConfigurationFindingsCount() {
    return this.getNumberAttribute('db_configuration_findings_count');
  }

  // fine_grained_access_control_findings_count - computed: true, optional: false, required: false
  public get fineGrainedAccessControlFindingsCount() {
    return this.getNumberAttribute('fine_grained_access_control_findings_count');
  }

  // privileges_and_roles_findings_count - computed: true, optional: false, required: false
  public get privilegesAndRolesFindingsCount() {
    return this.getNumberAttribute('privileges_and_roles_findings_count');
  }

  // targets_count - computed: true, optional: false, required: false
  public get targetsCount() {
    return this.getNumberAttribute('targets_count');
  }

  // user_accounts_findings_count - computed: true, optional: false, required: false
  public get userAccountsFindingsCount() {
    return this.getNumberAttribute('user_accounts_findings_count');
  }
}

export class DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference {
    return new DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPass {
}

export function dataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassToTerraform(struct?: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPass): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPass): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPass | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPass | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auditing_findings_count - computed: true, optional: false, required: false
  public get auditingFindingsCount() {
    return this.getNumberAttribute('auditing_findings_count');
  }

  // authorization_control_findings_count - computed: true, optional: false, required: false
  public get authorizationControlFindingsCount() {
    return this.getNumberAttribute('authorization_control_findings_count');
  }

  // data_encryption_findings_count - computed: true, optional: false, required: false
  public get dataEncryptionFindingsCount() {
    return this.getNumberAttribute('data_encryption_findings_count');
  }

  // db_configuration_findings_count - computed: true, optional: false, required: false
  public get dbConfigurationFindingsCount() {
    return this.getNumberAttribute('db_configuration_findings_count');
  }

  // fine_grained_access_control_findings_count - computed: true, optional: false, required: false
  public get fineGrainedAccessControlFindingsCount() {
    return this.getNumberAttribute('fine_grained_access_control_findings_count');
  }

  // privileges_and_roles_findings_count - computed: true, optional: false, required: false
  public get privilegesAndRolesFindingsCount() {
    return this.getNumberAttribute('privileges_and_roles_findings_count');
  }

  // targets_count - computed: true, optional: false, required: false
  public get targetsCount() {
    return this.getNumberAttribute('targets_count');
  }

  // user_accounts_findings_count - computed: true, optional: false, required: false
  public get userAccountsFindingsCount() {
    return this.getNumberAttribute('user_accounts_findings_count');
  }
}

export class DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference {
    return new DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatistics {
}

export function dataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsToTerraform(struct?: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advisory - computed: true, optional: false, required: false
  private _advisory = new DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList(this, "advisory", false);
  public get advisory() {
    return this._advisory;
  }

  // deferred - computed: true, optional: false, required: false
  private _deferred = new DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList(this, "deferred", false);
  public get deferred() {
    return this._deferred;
  }

  // evaluate - computed: true, optional: false, required: false
  private _evaluate = new DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList(this, "evaluate", false);
  public get evaluate() {
    return this._evaluate;
  }

  // high_risk - computed: true, optional: false, required: false
  private _highRisk = new DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList(this, "high_risk", false);
  public get highRisk() {
    return this._highRisk;
  }

  // low_risk - computed: true, optional: false, required: false
  private _lowRisk = new DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList(this, "low_risk", false);
  public get lowRisk() {
    return this._lowRisk;
  }

  // medium_risk - computed: true, optional: false, required: false
  private _mediumRisk = new DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList(this, "medium_risk", false);
  public get mediumRisk() {
    return this._mediumRisk;
  }

  // pass - computed: true, optional: false, required: false
  private _pass = new DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList(this, "pass", false);
  public get pass() {
    return this._pass;
  }

  // targets_count - computed: true, optional: false, required: false
  public get targetsCount() {
    return this.getNumberAttribute('targets_count');
  }
}

export class DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference {
    return new DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentsSecurityAssessments {
}

export function dataOciDataSafeSecurityAssessmentsSecurityAssessmentsToTerraform(struct?: DataOciDataSafeSecurityAssessmentsSecurityAssessments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentsSecurityAssessmentsToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentsSecurityAssessments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentsSecurityAssessments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentsSecurityAssessments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apply_template_trigger - computed: true, optional: false, required: false
  public get applyTemplateTrigger() {
    return this.getNumberAttribute('apply_template_trigger');
  }

  // base_security_assessment_id - computed: true, optional: false, required: false
  public get baseSecurityAssessmentId() {
    return this.getStringAttribute('base_security_assessment_id');
  }

  // baseline_assessment_id - computed: true, optional: false, required: false
  public get baselineAssessmentId() {
    return this.getStringAttribute('baseline_assessment_id');
  }

  // checks - computed: true, optional: false, required: false
  private _checks = new DataOciDataSafeSecurityAssessmentsSecurityAssessmentsChecksList(this, "checks", false);
  public get checks() {
    return this._checks;
  }

  // compare_to_template_baseline_trigger - computed: true, optional: false, required: false
  public get compareToTemplateBaselineTrigger() {
    return this.getNumberAttribute('compare_to_template_baseline_trigger');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignored_assessment_ids - computed: true, optional: false, required: false
  public get ignoredAssessmentIds() {
    return this.getListAttribute('ignored_assessment_ids');
  }

  // ignored_targets - computed: true, optional: false, required: false
  public get ignoredTargets() {
    return this.getListAttribute('ignored_targets');
  }

  // is_assessment_scheduled - computed: true, optional: false, required: false
  public get isAssessmentScheduled() {
    return this.getBooleanAttribute('is_assessment_scheduled');
  }

  // is_baseline - computed: true, optional: false, required: false
  public get isBaseline() {
    return this.getBooleanAttribute('is_baseline');
  }

  // is_deviated_from_baseline - computed: true, optional: false, required: false
  public get isDeviatedFromBaseline() {
    return this.getBooleanAttribute('is_deviated_from_baseline');
  }

  // last_compared_baseline_id - computed: true, optional: false, required: false
  public get lastComparedBaselineId() {
    return this.getStringAttribute('last_compared_baseline_id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // link - computed: true, optional: false, required: false
  public get link() {
    return this.getStringAttribute('link');
  }

  // remove_template_trigger - computed: true, optional: false, required: false
  public get removeTemplateTrigger() {
    return this.getNumberAttribute('remove_template_trigger');
  }

  // schedule - computed: true, optional: false, required: false
  public get schedule() {
    return this.getStringAttribute('schedule');
  }

  // schedule_security_assessment_id - computed: true, optional: false, required: false
  public get scheduleSecurityAssessmentId() {
    return this.getStringAttribute('schedule_security_assessment_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // statistics - computed: true, optional: false, required: false
  private _statistics = new DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList(this, "statistics", false);
  public get statistics() {
    return this._statistics;
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // target_database_group_id - computed: true, optional: false, required: false
  public get targetDatabaseGroupId() {
    return this.getStringAttribute('target_database_group_id');
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // target_ids - computed: true, optional: false, required: false
  public get targetIds() {
    return this.getListAttribute('target_ids');
  }

  // target_type - computed: true, optional: false, required: false
  public get targetType() {
    return this.getStringAttribute('target_type');
  }

  // target_version - computed: true, optional: false, required: false
  public get targetVersion() {
    return this.getStringAttribute('target_version');
  }

  // template_assessment_id - computed: true, optional: false, required: false
  public get templateAssessmentId() {
    return this.getStringAttribute('template_assessment_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_last_assessed - computed: true, optional: false, required: false
  public get timeLastAssessed() {
    return this.getStringAttribute('time_last_assessed');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // triggered_by - computed: true, optional: false, required: false
  public get triggeredBy() {
    return this.getStringAttribute('triggered_by');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference {
    return new DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_assessments#name DataOciDataSafeSecurityAssessments#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_assessments#regex DataOciDataSafeSecurityAssessments#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_assessments#values DataOciDataSafeSecurityAssessments#values}
  */
  readonly values: string[];
}

export function dataOciDataSafeSecurityAssessmentsFilterToTerraform(struct?: DataOciDataSafeSecurityAssessmentsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciDataSafeSecurityAssessmentsFilterToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentsFilter | cdktf.IResolvable): any {
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
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciDataSafeSecurityAssessmentsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciDataSafeSecurityAssessmentsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDataSafeSecurityAssessmentsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDataSafeSecurityAssessmentsFilterOutputReference {
    return new DataOciDataSafeSecurityAssessmentsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_assessments oci_data_safe_security_assessments}
*/
export class DataOciDataSafeSecurityAssessments extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_security_assessments";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataSafeSecurityAssessments resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataSafeSecurityAssessments to import
  * @param importFromId The id of the existing DataOciDataSafeSecurityAssessments that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_assessments#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataSafeSecurityAssessments to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_security_assessments", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_assessments oci_data_safe_security_assessments} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeSecurityAssessmentsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeSecurityAssessmentsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_security_assessments',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessLevel = config.accessLevel;
    this._compartmentId = config.compartmentId;
    this._compartmentIdInSubtree = config.compartmentIdInSubtree;
    this._displayName = config.displayName;
    this._id = config.id;
    this._isBaseline = config.isBaseline;
    this._isScheduleAssessment = config.isScheduleAssessment;
    this._scheduleAssessmentId = config.scheduleAssessmentId;
    this._state = config.state;
    this._targetDatabaseGroupId = config.targetDatabaseGroupId;
    this._targetId = config.targetId;
    this._targetType = config.targetType;
    this._templateAssessmentId = config.templateAssessmentId;
    this._timeCreatedGreaterThanOrEqualTo = config.timeCreatedGreaterThanOrEqualTo;
    this._timeCreatedLessThan = config.timeCreatedLessThan;
    this._triggeredBy = config.triggeredBy;
    this._type = config.type;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_level - computed: false, optional: true, required: false
  private _accessLevel?: string; 
  public get accessLevel() {
    return this.getStringAttribute('access_level');
  }
  public set accessLevel(value: string) {
    this._accessLevel = value;
  }
  public resetAccessLevel() {
    this._accessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelInput() {
    return this._accessLevel;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // compartment_id_in_subtree - computed: false, optional: true, required: false
  private _compartmentIdInSubtree?: boolean | cdktf.IResolvable; 
  public get compartmentIdInSubtree() {
    return this.getBooleanAttribute('compartment_id_in_subtree');
  }
  public set compartmentIdInSubtree(value: boolean | cdktf.IResolvable) {
    this._compartmentIdInSubtree = value;
  }
  public resetCompartmentIdInSubtree() {
    this._compartmentIdInSubtree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInSubtreeInput() {
    return this._compartmentIdInSubtree;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // is_baseline - computed: false, optional: true, required: false
  private _isBaseline?: boolean | cdktf.IResolvable; 
  public get isBaseline() {
    return this.getBooleanAttribute('is_baseline');
  }
  public set isBaseline(value: boolean | cdktf.IResolvable) {
    this._isBaseline = value;
  }
  public resetIsBaseline() {
    this._isBaseline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isBaselineInput() {
    return this._isBaseline;
  }

  // is_schedule_assessment - computed: false, optional: true, required: false
  private _isScheduleAssessment?: boolean | cdktf.IResolvable; 
  public get isScheduleAssessment() {
    return this.getBooleanAttribute('is_schedule_assessment');
  }
  public set isScheduleAssessment(value: boolean | cdktf.IResolvable) {
    this._isScheduleAssessment = value;
  }
  public resetIsScheduleAssessment() {
    this._isScheduleAssessment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isScheduleAssessmentInput() {
    return this._isScheduleAssessment;
  }

  // schedule_assessment_id - computed: false, optional: true, required: false
  private _scheduleAssessmentId?: string; 
  public get scheduleAssessmentId() {
    return this.getStringAttribute('schedule_assessment_id');
  }
  public set scheduleAssessmentId(value: string) {
    this._scheduleAssessmentId = value;
  }
  public resetScheduleAssessmentId() {
    this._scheduleAssessmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleAssessmentIdInput() {
    return this._scheduleAssessmentId;
  }

  // security_assessments - computed: true, optional: false, required: false
  private _securityAssessments = new DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList(this, "security_assessments", false);
  public get securityAssessments() {
    return this._securityAssessments;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // target_database_group_id - computed: false, optional: true, required: false
  private _targetDatabaseGroupId?: string; 
  public get targetDatabaseGroupId() {
    return this.getStringAttribute('target_database_group_id');
  }
  public set targetDatabaseGroupId(value: string) {
    this._targetDatabaseGroupId = value;
  }
  public resetTargetDatabaseGroupId() {
    this._targetDatabaseGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDatabaseGroupIdInput() {
    return this._targetDatabaseGroupId;
  }

  // target_id - computed: false, optional: true, required: false
  private _targetId?: string; 
  public get targetId() {
    return this.getStringAttribute('target_id');
  }
  public set targetId(value: string) {
    this._targetId = value;
  }
  public resetTargetId() {
    this._targetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdInput() {
    return this._targetId;
  }

  // target_type - computed: false, optional: true, required: false
  private _targetType?: string; 
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  public resetTargetType() {
    this._targetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType;
  }

  // template_assessment_id - computed: false, optional: true, required: false
  private _templateAssessmentId?: string; 
  public get templateAssessmentId() {
    return this.getStringAttribute('template_assessment_id');
  }
  public set templateAssessmentId(value: string) {
    this._templateAssessmentId = value;
  }
  public resetTemplateAssessmentId() {
    this._templateAssessmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateAssessmentIdInput() {
    return this._templateAssessmentId;
  }

  // time_created_greater_than_or_equal_to - computed: false, optional: true, required: false
  private _timeCreatedGreaterThanOrEqualTo?: string; 
  public get timeCreatedGreaterThanOrEqualTo() {
    return this.getStringAttribute('time_created_greater_than_or_equal_to');
  }
  public set timeCreatedGreaterThanOrEqualTo(value: string) {
    this._timeCreatedGreaterThanOrEqualTo = value;
  }
  public resetTimeCreatedGreaterThanOrEqualTo() {
    this._timeCreatedGreaterThanOrEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeCreatedGreaterThanOrEqualToInput() {
    return this._timeCreatedGreaterThanOrEqualTo;
  }

  // time_created_less_than - computed: false, optional: true, required: false
  private _timeCreatedLessThan?: string; 
  public get timeCreatedLessThan() {
    return this.getStringAttribute('time_created_less_than');
  }
  public set timeCreatedLessThan(value: string) {
    this._timeCreatedLessThan = value;
  }
  public resetTimeCreatedLessThan() {
    this._timeCreatedLessThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeCreatedLessThanInput() {
    return this._timeCreatedLessThan;
  }

  // triggered_by - computed: false, optional: true, required: false
  private _triggeredBy?: string; 
  public get triggeredBy() {
    return this.getStringAttribute('triggered_by');
  }
  public set triggeredBy(value: string) {
    this._triggeredBy = value;
  }
  public resetTriggeredBy() {
    this._triggeredBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggeredByInput() {
    return this._triggeredBy;
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

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDataSafeSecurityAssessmentsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDataSafeSecurityAssessmentsFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_level: cdktf.stringToTerraform(this._accessLevel),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      compartment_id_in_subtree: cdktf.booleanToTerraform(this._compartmentIdInSubtree),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      is_baseline: cdktf.booleanToTerraform(this._isBaseline),
      is_schedule_assessment: cdktf.booleanToTerraform(this._isScheduleAssessment),
      schedule_assessment_id: cdktf.stringToTerraform(this._scheduleAssessmentId),
      state: cdktf.stringToTerraform(this._state),
      target_database_group_id: cdktf.stringToTerraform(this._targetDatabaseGroupId),
      target_id: cdktf.stringToTerraform(this._targetId),
      target_type: cdktf.stringToTerraform(this._targetType),
      template_assessment_id: cdktf.stringToTerraform(this._templateAssessmentId),
      time_created_greater_than_or_equal_to: cdktf.stringToTerraform(this._timeCreatedGreaterThanOrEqualTo),
      time_created_less_than: cdktf.stringToTerraform(this._timeCreatedLessThan),
      triggered_by: cdktf.stringToTerraform(this._triggeredBy),
      type: cdktf.stringToTerraform(this._type),
      filter: cdktf.listMapper(dataOciDataSafeSecurityAssessmentsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_level: {
        value: cdktf.stringToHclTerraform(this._accessLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id_in_subtree: {
        value: cdktf.booleanToHclTerraform(this._compartmentIdInSubtree),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      is_baseline: {
        value: cdktf.booleanToHclTerraform(this._isBaseline),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_schedule_assessment: {
        value: cdktf.booleanToHclTerraform(this._isScheduleAssessment),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      schedule_assessment_id: {
        value: cdktf.stringToHclTerraform(this._scheduleAssessmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_database_group_id: {
        value: cdktf.stringToHclTerraform(this._targetDatabaseGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_id: {
        value: cdktf.stringToHclTerraform(this._targetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_type: {
        value: cdktf.stringToHclTerraform(this._targetType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_assessment_id: {
        value: cdktf.stringToHclTerraform(this._templateAssessmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_created_greater_than_or_equal_to: {
        value: cdktf.stringToHclTerraform(this._timeCreatedGreaterThanOrEqualTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_created_less_than: {
        value: cdktf.stringToHclTerraform(this._timeCreatedLessThan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      triggered_by: {
        value: cdktf.stringToHclTerraform(this._triggeredBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDataSafeSecurityAssessmentsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDataSafeSecurityAssessmentsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
