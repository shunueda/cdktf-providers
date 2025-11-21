// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_security_assessment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSafeSecurityAssessmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_security_assessment#apply_template_trigger DataSafeSecurityAssessment#apply_template_trigger}
  */
  readonly applyTemplateTrigger?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_security_assessment#base_security_assessment_id DataSafeSecurityAssessment#base_security_assessment_id}
  */
  readonly baseSecurityAssessmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_security_assessment#compare_to_template_baseline_trigger DataSafeSecurityAssessment#compare_to_template_baseline_trigger}
  */
  readonly compareToTemplateBaselineTrigger?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_security_assessment#compartment_id DataSafeSecurityAssessment#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_security_assessment#defined_tags DataSafeSecurityAssessment#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_security_assessment#description DataSafeSecurityAssessment#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_security_assessment#display_name DataSafeSecurityAssessment#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_security_assessment#freeform_tags DataSafeSecurityAssessment#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_security_assessment#id DataSafeSecurityAssessment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_security_assessment#is_assessment_scheduled DataSafeSecurityAssessment#is_assessment_scheduled}
  */
  readonly isAssessmentScheduled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_security_assessment#remove_template_trigger DataSafeSecurityAssessment#remove_template_trigger}
  */
  readonly removeTemplateTrigger?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_security_assessment#schedule DataSafeSecurityAssessment#schedule}
  */
  readonly schedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_security_assessment#target_id DataSafeSecurityAssessment#target_id}
  */
  readonly targetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_security_assessment#target_type DataSafeSecurityAssessment#target_type}
  */
  readonly targetType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_security_assessment#template_assessment_id DataSafeSecurityAssessment#template_assessment_id}
  */
  readonly templateAssessmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_security_assessment#type DataSafeSecurityAssessment#type}
  */
  readonly type?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_security_assessment#timeouts DataSafeSecurityAssessment#timeouts}
  */
  readonly timeouts?: DataSafeSecurityAssessmentTimeouts;
}
export interface DataSafeSecurityAssessmentChecksReferences {
}

export function dataSafeSecurityAssessmentChecksReferencesToTerraform(struct?: DataSafeSecurityAssessmentChecksReferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSafeSecurityAssessmentChecksReferencesToHclTerraform(struct?: DataSafeSecurityAssessmentChecksReferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSafeSecurityAssessmentChecksReferencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSafeSecurityAssessmentChecksReferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeSecurityAssessmentChecksReferences | undefined) {
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

export class DataSafeSecurityAssessmentChecksReferencesList extends cdktf.ComplexList {

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
  public get(index: number): DataSafeSecurityAssessmentChecksReferencesOutputReference {
    return new DataSafeSecurityAssessmentChecksReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSafeSecurityAssessmentChecks {
}

export function dataSafeSecurityAssessmentChecksToTerraform(struct?: DataSafeSecurityAssessmentChecks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSafeSecurityAssessmentChecksToHclTerraform(struct?: DataSafeSecurityAssessmentChecks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSafeSecurityAssessmentChecksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSafeSecurityAssessmentChecks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeSecurityAssessmentChecks | undefined) {
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
  private _references = new DataSafeSecurityAssessmentChecksReferencesList(this, "references", false);
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

export class DataSafeSecurityAssessmentChecksList extends cdktf.ComplexList {

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
  public get(index: number): DataSafeSecurityAssessmentChecksOutputReference {
    return new DataSafeSecurityAssessmentChecksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSafeSecurityAssessmentStatisticsAdvisory {
}

export function dataSafeSecurityAssessmentStatisticsAdvisoryToTerraform(struct?: DataSafeSecurityAssessmentStatisticsAdvisory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSafeSecurityAssessmentStatisticsAdvisoryToHclTerraform(struct?: DataSafeSecurityAssessmentStatisticsAdvisory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSafeSecurityAssessmentStatisticsAdvisory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeSecurityAssessmentStatisticsAdvisory | undefined) {
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

export class DataSafeSecurityAssessmentStatisticsAdvisoryList extends cdktf.ComplexList {

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
  public get(index: number): DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference {
    return new DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSafeSecurityAssessmentStatisticsDeferred {
}

export function dataSafeSecurityAssessmentStatisticsDeferredToTerraform(struct?: DataSafeSecurityAssessmentStatisticsDeferred): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSafeSecurityAssessmentStatisticsDeferredToHclTerraform(struct?: DataSafeSecurityAssessmentStatisticsDeferred): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSafeSecurityAssessmentStatisticsDeferredOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSafeSecurityAssessmentStatisticsDeferred | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeSecurityAssessmentStatisticsDeferred | undefined) {
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

export class DataSafeSecurityAssessmentStatisticsDeferredList extends cdktf.ComplexList {

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
  public get(index: number): DataSafeSecurityAssessmentStatisticsDeferredOutputReference {
    return new DataSafeSecurityAssessmentStatisticsDeferredOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSafeSecurityAssessmentStatisticsEvaluate {
}

export function dataSafeSecurityAssessmentStatisticsEvaluateToTerraform(struct?: DataSafeSecurityAssessmentStatisticsEvaluate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSafeSecurityAssessmentStatisticsEvaluateToHclTerraform(struct?: DataSafeSecurityAssessmentStatisticsEvaluate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSafeSecurityAssessmentStatisticsEvaluateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSafeSecurityAssessmentStatisticsEvaluate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeSecurityAssessmentStatisticsEvaluate | undefined) {
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

export class DataSafeSecurityAssessmentStatisticsEvaluateList extends cdktf.ComplexList {

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
  public get(index: number): DataSafeSecurityAssessmentStatisticsEvaluateOutputReference {
    return new DataSafeSecurityAssessmentStatisticsEvaluateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSafeSecurityAssessmentStatisticsHighRisk {
}

export function dataSafeSecurityAssessmentStatisticsHighRiskToTerraform(struct?: DataSafeSecurityAssessmentStatisticsHighRisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSafeSecurityAssessmentStatisticsHighRiskToHclTerraform(struct?: DataSafeSecurityAssessmentStatisticsHighRisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSafeSecurityAssessmentStatisticsHighRiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSafeSecurityAssessmentStatisticsHighRisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeSecurityAssessmentStatisticsHighRisk | undefined) {
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

export class DataSafeSecurityAssessmentStatisticsHighRiskList extends cdktf.ComplexList {

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
  public get(index: number): DataSafeSecurityAssessmentStatisticsHighRiskOutputReference {
    return new DataSafeSecurityAssessmentStatisticsHighRiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSafeSecurityAssessmentStatisticsLowRisk {
}

export function dataSafeSecurityAssessmentStatisticsLowRiskToTerraform(struct?: DataSafeSecurityAssessmentStatisticsLowRisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSafeSecurityAssessmentStatisticsLowRiskToHclTerraform(struct?: DataSafeSecurityAssessmentStatisticsLowRisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSafeSecurityAssessmentStatisticsLowRiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSafeSecurityAssessmentStatisticsLowRisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeSecurityAssessmentStatisticsLowRisk | undefined) {
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

export class DataSafeSecurityAssessmentStatisticsLowRiskList extends cdktf.ComplexList {

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
  public get(index: number): DataSafeSecurityAssessmentStatisticsLowRiskOutputReference {
    return new DataSafeSecurityAssessmentStatisticsLowRiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSafeSecurityAssessmentStatisticsMediumRisk {
}

export function dataSafeSecurityAssessmentStatisticsMediumRiskToTerraform(struct?: DataSafeSecurityAssessmentStatisticsMediumRisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSafeSecurityAssessmentStatisticsMediumRiskToHclTerraform(struct?: DataSafeSecurityAssessmentStatisticsMediumRisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSafeSecurityAssessmentStatisticsMediumRisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeSecurityAssessmentStatisticsMediumRisk | undefined) {
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

export class DataSafeSecurityAssessmentStatisticsMediumRiskList extends cdktf.ComplexList {

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
  public get(index: number): DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference {
    return new DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSafeSecurityAssessmentStatisticsPass {
}

export function dataSafeSecurityAssessmentStatisticsPassToTerraform(struct?: DataSafeSecurityAssessmentStatisticsPass): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSafeSecurityAssessmentStatisticsPassToHclTerraform(struct?: DataSafeSecurityAssessmentStatisticsPass): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSafeSecurityAssessmentStatisticsPassOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSafeSecurityAssessmentStatisticsPass | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeSecurityAssessmentStatisticsPass | undefined) {
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

export class DataSafeSecurityAssessmentStatisticsPassList extends cdktf.ComplexList {

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
  public get(index: number): DataSafeSecurityAssessmentStatisticsPassOutputReference {
    return new DataSafeSecurityAssessmentStatisticsPassOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSafeSecurityAssessmentStatistics {
}

export function dataSafeSecurityAssessmentStatisticsToTerraform(struct?: DataSafeSecurityAssessmentStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSafeSecurityAssessmentStatisticsToHclTerraform(struct?: DataSafeSecurityAssessmentStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSafeSecurityAssessmentStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSafeSecurityAssessmentStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeSecurityAssessmentStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advisory - computed: true, optional: false, required: false
  private _advisory = new DataSafeSecurityAssessmentStatisticsAdvisoryList(this, "advisory", false);
  public get advisory() {
    return this._advisory;
  }

  // deferred - computed: true, optional: false, required: false
  private _deferred = new DataSafeSecurityAssessmentStatisticsDeferredList(this, "deferred", false);
  public get deferred() {
    return this._deferred;
  }

  // evaluate - computed: true, optional: false, required: false
  private _evaluate = new DataSafeSecurityAssessmentStatisticsEvaluateList(this, "evaluate", false);
  public get evaluate() {
    return this._evaluate;
  }

  // high_risk - computed: true, optional: false, required: false
  private _highRisk = new DataSafeSecurityAssessmentStatisticsHighRiskList(this, "high_risk", false);
  public get highRisk() {
    return this._highRisk;
  }

  // low_risk - computed: true, optional: false, required: false
  private _lowRisk = new DataSafeSecurityAssessmentStatisticsLowRiskList(this, "low_risk", false);
  public get lowRisk() {
    return this._lowRisk;
  }

  // medium_risk - computed: true, optional: false, required: false
  private _mediumRisk = new DataSafeSecurityAssessmentStatisticsMediumRiskList(this, "medium_risk", false);
  public get mediumRisk() {
    return this._mediumRisk;
  }

  // pass - computed: true, optional: false, required: false
  private _pass = new DataSafeSecurityAssessmentStatisticsPassList(this, "pass", false);
  public get pass() {
    return this._pass;
  }

  // targets_count - computed: true, optional: false, required: false
  public get targetsCount() {
    return this.getNumberAttribute('targets_count');
  }
}

export class DataSafeSecurityAssessmentStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): DataSafeSecurityAssessmentStatisticsOutputReference {
    return new DataSafeSecurityAssessmentStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSafeSecurityAssessmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_security_assessment#create DataSafeSecurityAssessment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_security_assessment#delete DataSafeSecurityAssessment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_security_assessment#update DataSafeSecurityAssessment#update}
  */
  readonly update?: string;
}

export function dataSafeSecurityAssessmentTimeoutsToTerraform(struct?: DataSafeSecurityAssessmentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function dataSafeSecurityAssessmentTimeoutsToHclTerraform(struct?: DataSafeSecurityAssessmentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSafeSecurityAssessmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSafeSecurityAssessmentTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeSecurityAssessmentTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_security_assessment oci_data_safe_security_assessment}
*/
export class DataSafeSecurityAssessment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_security_assessment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSafeSecurityAssessment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSafeSecurityAssessment to import
  * @param importFromId The id of the existing DataSafeSecurityAssessment that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_security_assessment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSafeSecurityAssessment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_security_assessment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_security_assessment oci_data_safe_security_assessment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSafeSecurityAssessmentConfig
  */
  public constructor(scope: Construct, id: string, config: DataSafeSecurityAssessmentConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_security_assessment',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applyTemplateTrigger = config.applyTemplateTrigger;
    this._baseSecurityAssessmentId = config.baseSecurityAssessmentId;
    this._compareToTemplateBaselineTrigger = config.compareToTemplateBaselineTrigger;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._isAssessmentScheduled = config.isAssessmentScheduled;
    this._removeTemplateTrigger = config.removeTemplateTrigger;
    this._schedule = config.schedule;
    this._targetId = config.targetId;
    this._targetType = config.targetType;
    this._templateAssessmentId = config.templateAssessmentId;
    this._type = config.type;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apply_template_trigger - computed: false, optional: true, required: false
  private _applyTemplateTrigger?: number; 
  public get applyTemplateTrigger() {
    return this.getNumberAttribute('apply_template_trigger');
  }
  public set applyTemplateTrigger(value: number) {
    this._applyTemplateTrigger = value;
  }
  public resetApplyTemplateTrigger() {
    this._applyTemplateTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyTemplateTriggerInput() {
    return this._applyTemplateTrigger;
  }

  // base_security_assessment_id - computed: true, optional: true, required: false
  private _baseSecurityAssessmentId?: string; 
  public get baseSecurityAssessmentId() {
    return this.getStringAttribute('base_security_assessment_id');
  }
  public set baseSecurityAssessmentId(value: string) {
    this._baseSecurityAssessmentId = value;
  }
  public resetBaseSecurityAssessmentId() {
    this._baseSecurityAssessmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseSecurityAssessmentIdInput() {
    return this._baseSecurityAssessmentId;
  }

  // baseline_assessment_id - computed: true, optional: false, required: false
  public get baselineAssessmentId() {
    return this.getStringAttribute('baseline_assessment_id');
  }

  // checks - computed: true, optional: false, required: false
  private _checks = new DataSafeSecurityAssessmentChecksList(this, "checks", false);
  public get checks() {
    return this._checks;
  }

  // compare_to_template_baseline_trigger - computed: false, optional: true, required: false
  private _compareToTemplateBaselineTrigger?: number; 
  public get compareToTemplateBaselineTrigger() {
    return this.getNumberAttribute('compare_to_template_baseline_trigger');
  }
  public set compareToTemplateBaselineTrigger(value: number) {
    this._compareToTemplateBaselineTrigger = value;
  }
  public resetCompareToTemplateBaselineTrigger() {
    this._compareToTemplateBaselineTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compareToTemplateBaselineTriggerInput() {
    return this._compareToTemplateBaselineTrigger;
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

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: true, optional: true, required: false
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

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // ignored_assessment_ids - computed: true, optional: false, required: false
  public get ignoredAssessmentIds() {
    return this.getListAttribute('ignored_assessment_ids');
  }

  // ignored_targets - computed: true, optional: false, required: false
  public get ignoredTargets() {
    return this.getListAttribute('ignored_targets');
  }

  // is_assessment_scheduled - computed: true, optional: true, required: false
  private _isAssessmentScheduled?: boolean | cdktf.IResolvable; 
  public get isAssessmentScheduled() {
    return this.getBooleanAttribute('is_assessment_scheduled');
  }
  public set isAssessmentScheduled(value: boolean | cdktf.IResolvable) {
    this._isAssessmentScheduled = value;
  }
  public resetIsAssessmentScheduled() {
    this._isAssessmentScheduled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAssessmentScheduledInput() {
    return this._isAssessmentScheduled;
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

  // remove_template_trigger - computed: false, optional: true, required: false
  private _removeTemplateTrigger?: number; 
  public get removeTemplateTrigger() {
    return this.getNumberAttribute('remove_template_trigger');
  }
  public set removeTemplateTrigger(value: number) {
    this._removeTemplateTrigger = value;
  }
  public resetRemoveTemplateTrigger() {
    this._removeTemplateTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeTemplateTriggerInput() {
    return this._removeTemplateTrigger;
  }

  // schedule - computed: true, optional: true, required: false
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

  // schedule_security_assessment_id - computed: true, optional: false, required: false
  public get scheduleSecurityAssessmentId() {
    return this.getStringAttribute('schedule_security_assessment_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // statistics - computed: true, optional: false, required: false
  private _statistics = new DataSafeSecurityAssessmentStatisticsList(this, "statistics", false);
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

  // target_id - computed: true, optional: true, required: false
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

  // target_ids - computed: true, optional: false, required: false
  public get targetIds() {
    return this.getListAttribute('target_ids');
  }

  // target_type - computed: true, optional: true, required: false
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

  // target_version - computed: true, optional: false, required: false
  public get targetVersion() {
    return this.getStringAttribute('target_version');
  }

  // template_assessment_id - computed: true, optional: true, required: false
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

  // type - computed: true, optional: true, required: false
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataSafeSecurityAssessmentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataSafeSecurityAssessmentTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apply_template_trigger: cdktf.numberToTerraform(this._applyTemplateTrigger),
      base_security_assessment_id: cdktf.stringToTerraform(this._baseSecurityAssessmentId),
      compare_to_template_baseline_trigger: cdktf.numberToTerraform(this._compareToTemplateBaselineTrigger),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      is_assessment_scheduled: cdktf.booleanToTerraform(this._isAssessmentScheduled),
      remove_template_trigger: cdktf.numberToTerraform(this._removeTemplateTrigger),
      schedule: cdktf.stringToTerraform(this._schedule),
      target_id: cdktf.stringToTerraform(this._targetId),
      target_type: cdktf.stringToTerraform(this._targetType),
      template_assessment_id: cdktf.stringToTerraform(this._templateAssessmentId),
      type: cdktf.stringToTerraform(this._type),
      timeouts: dataSafeSecurityAssessmentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apply_template_trigger: {
        value: cdktf.numberToHclTerraform(this._applyTemplateTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      base_security_assessment_id: {
        value: cdktf.stringToHclTerraform(this._baseSecurityAssessmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compare_to_template_baseline_trigger: {
        value: cdktf.numberToHclTerraform(this._compareToTemplateBaselineTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_assessment_scheduled: {
        value: cdktf.booleanToHclTerraform(this._isAssessmentScheduled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      remove_template_trigger: {
        value: cdktf.numberToHclTerraform(this._removeTemplateTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      schedule: {
        value: cdktf.stringToHclTerraform(this._schedule),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataSafeSecurityAssessmentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSafeSecurityAssessmentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
