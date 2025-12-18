// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_security_assessment_template_baseline_comparison
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_security_assessment_template_baseline_comparison#category DataOciDataSafeSecurityAssessmentTemplateBaselineComparison#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_security_assessment_template_baseline_comparison#comparison_security_assessment_id DataOciDataSafeSecurityAssessmentTemplateBaselineComparison#comparison_security_assessment_id}
  */
  readonly comparisonSecurityAssessmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_security_assessment_template_baseline_comparison#finding_key DataOciDataSafeSecurityAssessmentTemplateBaselineComparison#finding_key}
  */
  readonly findingKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_security_assessment_template_baseline_comparison#id DataOciDataSafeSecurityAssessmentTemplateBaselineComparison#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_security_assessment_template_baseline_comparison#security_assessment_id DataOciDataSafeSecurityAssessmentTemplateBaselineComparison#security_assessment_id}
  */
  readonly securityAssessmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_security_assessment_template_baseline_comparison#target_id DataOciDataSafeSecurityAssessmentTemplateBaselineComparison#target_id}
  */
  readonly targetId?: string;
}
export interface DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuditingBaselineReferences {
}

export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuditingBaselineReferencesToTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuditingBaselineReferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuditingBaselineReferencesToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuditingBaselineReferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuditingBaselineReferencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuditingBaselineReferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuditingBaselineReferences | undefined) {
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

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuditingBaselineReferencesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuditingBaselineReferencesOutputReference {
    return new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuditingBaselineReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuditingBaseline {
}

export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuditingBaselineToTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuditingBaseline): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuditingBaselineToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuditingBaseline): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuditingBaselineOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuditingBaseline | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuditingBaseline | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assessment_id - computed: true, optional: false, required: false
  public get assessmentId() {
    return this.getStringAttribute('assessment_id');
  }

  // details - computed: true, optional: false, required: false
  public get details() {
    return this.getListAttribute('details');
  }

  // has_target_db_risk_level_changed - computed: true, optional: false, required: false
  public get hasTargetDbRiskLevelChanged() {
    return this.getBooleanAttribute('has_target_db_risk_level_changed');
  }

  // is_risk_modified - computed: true, optional: false, required: false
  public get isRiskModified() {
    return this.getBooleanAttribute('is_risk_modified');
  }

  // justification - computed: true, optional: false, required: false
  public get justification() {
    return this.getStringAttribute('justification');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // oracle_defined_severity - computed: true, optional: false, required: false
  public get oracleDefinedSeverity() {
    return this.getStringAttribute('oracle_defined_severity');
  }

  // references - computed: true, optional: false, required: false
  private _references = new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuditingBaselineReferencesList(this, "references", false);
  public get references() {
    return this._references;
  }

  // remarks - computed: true, optional: false, required: false
  public get remarks() {
    return this.getStringAttribute('remarks');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // summary - computed: true, optional: false, required: false
  public get summary() {
    return this.getStringAttribute('summary');
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // time_valid_until - computed: true, optional: false, required: false
  public get timeValidUntil() {
    return this.getStringAttribute('time_valid_until');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }
}

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuditingBaselineList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuditingBaselineOutputReference {
    return new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuditingBaselineOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuditingTargets {
}

export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuditingTargetsToTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuditingTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuditingTargetsToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuditingTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuditingTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuditingTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuditingTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }
}

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuditingTargetsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuditingTargetsOutputReference {
    return new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuditingTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuditing {
}

export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuditingToTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuditing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuditingToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuditing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuditingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuditing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuditing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // baseline - computed: true, optional: false, required: false
  private _baseline = new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuditingBaselineList(this, "baseline", false);
  public get baseline() {
    return this._baseline;
  }

  // targets - computed: true, optional: false, required: false
  private _targets = new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuditingTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
}

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuditingList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuditingOutputReference {
    return new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuditingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuthorizationControlBaselineReferences {
}

export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuthorizationControlBaselineReferencesToTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuthorizationControlBaselineReferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuthorizationControlBaselineReferencesToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuthorizationControlBaselineReferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuthorizationControlBaselineReferencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuthorizationControlBaselineReferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuthorizationControlBaselineReferences | undefined) {
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

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuthorizationControlBaselineReferencesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuthorizationControlBaselineReferencesOutputReference {
    return new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuthorizationControlBaselineReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuthorizationControlBaseline {
}

export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuthorizationControlBaselineToTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuthorizationControlBaseline): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuthorizationControlBaselineToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuthorizationControlBaseline): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuthorizationControlBaselineOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuthorizationControlBaseline | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuthorizationControlBaseline | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assessment_id - computed: true, optional: false, required: false
  public get assessmentId() {
    return this.getStringAttribute('assessment_id');
  }

  // details - computed: true, optional: false, required: false
  public get details() {
    return this.getListAttribute('details');
  }

  // has_target_db_risk_level_changed - computed: true, optional: false, required: false
  public get hasTargetDbRiskLevelChanged() {
    return this.getBooleanAttribute('has_target_db_risk_level_changed');
  }

  // is_risk_modified - computed: true, optional: false, required: false
  public get isRiskModified() {
    return this.getBooleanAttribute('is_risk_modified');
  }

  // justification - computed: true, optional: false, required: false
  public get justification() {
    return this.getStringAttribute('justification');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // oracle_defined_severity - computed: true, optional: false, required: false
  public get oracleDefinedSeverity() {
    return this.getStringAttribute('oracle_defined_severity');
  }

  // references - computed: true, optional: false, required: false
  private _references = new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuthorizationControlBaselineReferencesList(this, "references", false);
  public get references() {
    return this._references;
  }

  // remarks - computed: true, optional: false, required: false
  public get remarks() {
    return this.getStringAttribute('remarks');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // summary - computed: true, optional: false, required: false
  public get summary() {
    return this.getStringAttribute('summary');
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // time_valid_until - computed: true, optional: false, required: false
  public get timeValidUntil() {
    return this.getStringAttribute('time_valid_until');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }
}

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuthorizationControlBaselineList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuthorizationControlBaselineOutputReference {
    return new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuthorizationControlBaselineOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuthorizationControlTargets {
}

export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuthorizationControlTargetsToTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuthorizationControlTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuthorizationControlTargetsToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuthorizationControlTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuthorizationControlTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuthorizationControlTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuthorizationControlTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }
}

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuthorizationControlTargetsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuthorizationControlTargetsOutputReference {
    return new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuthorizationControlTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuthorizationControl {
}

export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuthorizationControlToTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuthorizationControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuthorizationControlToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuthorizationControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuthorizationControlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuthorizationControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuthorizationControl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // baseline - computed: true, optional: false, required: false
  private _baseline = new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuthorizationControlBaselineList(this, "baseline", false);
  public get baseline() {
    return this._baseline;
  }

  // targets - computed: true, optional: false, required: false
  private _targets = new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuthorizationControlTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
}

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuthorizationControlList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuthorizationControlOutputReference {
    return new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuthorizationControlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDataEncryptionBaselineReferences {
}

export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDataEncryptionBaselineReferencesToTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDataEncryptionBaselineReferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDataEncryptionBaselineReferencesToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDataEncryptionBaselineReferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDataEncryptionBaselineReferencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDataEncryptionBaselineReferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDataEncryptionBaselineReferences | undefined) {
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

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDataEncryptionBaselineReferencesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDataEncryptionBaselineReferencesOutputReference {
    return new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDataEncryptionBaselineReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDataEncryptionBaseline {
}

export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDataEncryptionBaselineToTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDataEncryptionBaseline): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDataEncryptionBaselineToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDataEncryptionBaseline): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDataEncryptionBaselineOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDataEncryptionBaseline | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDataEncryptionBaseline | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assessment_id - computed: true, optional: false, required: false
  public get assessmentId() {
    return this.getStringAttribute('assessment_id');
  }

  // details - computed: true, optional: false, required: false
  public get details() {
    return this.getListAttribute('details');
  }

  // has_target_db_risk_level_changed - computed: true, optional: false, required: false
  public get hasTargetDbRiskLevelChanged() {
    return this.getBooleanAttribute('has_target_db_risk_level_changed');
  }

  // is_risk_modified - computed: true, optional: false, required: false
  public get isRiskModified() {
    return this.getBooleanAttribute('is_risk_modified');
  }

  // justification - computed: true, optional: false, required: false
  public get justification() {
    return this.getStringAttribute('justification');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // oracle_defined_severity - computed: true, optional: false, required: false
  public get oracleDefinedSeverity() {
    return this.getStringAttribute('oracle_defined_severity');
  }

  // references - computed: true, optional: false, required: false
  private _references = new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDataEncryptionBaselineReferencesList(this, "references", false);
  public get references() {
    return this._references;
  }

  // remarks - computed: true, optional: false, required: false
  public get remarks() {
    return this.getStringAttribute('remarks');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // summary - computed: true, optional: false, required: false
  public get summary() {
    return this.getStringAttribute('summary');
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // time_valid_until - computed: true, optional: false, required: false
  public get timeValidUntil() {
    return this.getStringAttribute('time_valid_until');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }
}

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDataEncryptionBaselineList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDataEncryptionBaselineOutputReference {
    return new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDataEncryptionBaselineOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDataEncryptionTargets {
}

export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDataEncryptionTargetsToTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDataEncryptionTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDataEncryptionTargetsToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDataEncryptionTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDataEncryptionTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDataEncryptionTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDataEncryptionTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }
}

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDataEncryptionTargetsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDataEncryptionTargetsOutputReference {
    return new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDataEncryptionTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDataEncryption {
}

export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDataEncryptionToTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDataEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDataEncryptionToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDataEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDataEncryptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDataEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDataEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // baseline - computed: true, optional: false, required: false
  private _baseline = new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDataEncryptionBaselineList(this, "baseline", false);
  public get baseline() {
    return this._baseline;
  }

  // targets - computed: true, optional: false, required: false
  private _targets = new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDataEncryptionTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
}

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDataEncryptionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDataEncryptionOutputReference {
    return new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDataEncryptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDbConfigurationBaselineReferences {
}

export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDbConfigurationBaselineReferencesToTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDbConfigurationBaselineReferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDbConfigurationBaselineReferencesToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDbConfigurationBaselineReferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDbConfigurationBaselineReferencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDbConfigurationBaselineReferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDbConfigurationBaselineReferences | undefined) {
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

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDbConfigurationBaselineReferencesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDbConfigurationBaselineReferencesOutputReference {
    return new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDbConfigurationBaselineReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDbConfigurationBaseline {
}

export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDbConfigurationBaselineToTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDbConfigurationBaseline): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDbConfigurationBaselineToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDbConfigurationBaseline): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDbConfigurationBaselineOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDbConfigurationBaseline | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDbConfigurationBaseline | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assessment_id - computed: true, optional: false, required: false
  public get assessmentId() {
    return this.getStringAttribute('assessment_id');
  }

  // details - computed: true, optional: false, required: false
  public get details() {
    return this.getListAttribute('details');
  }

  // has_target_db_risk_level_changed - computed: true, optional: false, required: false
  public get hasTargetDbRiskLevelChanged() {
    return this.getBooleanAttribute('has_target_db_risk_level_changed');
  }

  // is_risk_modified - computed: true, optional: false, required: false
  public get isRiskModified() {
    return this.getBooleanAttribute('is_risk_modified');
  }

  // justification - computed: true, optional: false, required: false
  public get justification() {
    return this.getStringAttribute('justification');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // oracle_defined_severity - computed: true, optional: false, required: false
  public get oracleDefinedSeverity() {
    return this.getStringAttribute('oracle_defined_severity');
  }

  // references - computed: true, optional: false, required: false
  private _references = new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDbConfigurationBaselineReferencesList(this, "references", false);
  public get references() {
    return this._references;
  }

  // remarks - computed: true, optional: false, required: false
  public get remarks() {
    return this.getStringAttribute('remarks');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // summary - computed: true, optional: false, required: false
  public get summary() {
    return this.getStringAttribute('summary');
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // time_valid_until - computed: true, optional: false, required: false
  public get timeValidUntil() {
    return this.getStringAttribute('time_valid_until');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }
}

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDbConfigurationBaselineList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDbConfigurationBaselineOutputReference {
    return new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDbConfigurationBaselineOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDbConfigurationTargets {
}

export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDbConfigurationTargetsToTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDbConfigurationTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDbConfigurationTargetsToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDbConfigurationTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDbConfigurationTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDbConfigurationTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDbConfigurationTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }
}

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDbConfigurationTargetsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDbConfigurationTargetsOutputReference {
    return new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDbConfigurationTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDbConfiguration {
}

export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDbConfigurationToTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDbConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDbConfigurationToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDbConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDbConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDbConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDbConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // baseline - computed: true, optional: false, required: false
  private _baseline = new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDbConfigurationBaselineList(this, "baseline", false);
  public get baseline() {
    return this._baseline;
  }

  // targets - computed: true, optional: false, required: false
  private _targets = new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDbConfigurationTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
}

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDbConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDbConfigurationOutputReference {
    return new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDbConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonFineGrainedAccessControlBaselineReferences {
}

export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonFineGrainedAccessControlBaselineReferencesToTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonFineGrainedAccessControlBaselineReferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonFineGrainedAccessControlBaselineReferencesToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonFineGrainedAccessControlBaselineReferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonFineGrainedAccessControlBaselineReferencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonFineGrainedAccessControlBaselineReferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonFineGrainedAccessControlBaselineReferences | undefined) {
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

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonFineGrainedAccessControlBaselineReferencesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonFineGrainedAccessControlBaselineReferencesOutputReference {
    return new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonFineGrainedAccessControlBaselineReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonFineGrainedAccessControlBaseline {
}

export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonFineGrainedAccessControlBaselineToTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonFineGrainedAccessControlBaseline): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonFineGrainedAccessControlBaselineToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonFineGrainedAccessControlBaseline): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonFineGrainedAccessControlBaselineOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonFineGrainedAccessControlBaseline | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonFineGrainedAccessControlBaseline | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assessment_id - computed: true, optional: false, required: false
  public get assessmentId() {
    return this.getStringAttribute('assessment_id');
  }

  // details - computed: true, optional: false, required: false
  public get details() {
    return this.getListAttribute('details');
  }

  // has_target_db_risk_level_changed - computed: true, optional: false, required: false
  public get hasTargetDbRiskLevelChanged() {
    return this.getBooleanAttribute('has_target_db_risk_level_changed');
  }

  // is_risk_modified - computed: true, optional: false, required: false
  public get isRiskModified() {
    return this.getBooleanAttribute('is_risk_modified');
  }

  // justification - computed: true, optional: false, required: false
  public get justification() {
    return this.getStringAttribute('justification');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // oracle_defined_severity - computed: true, optional: false, required: false
  public get oracleDefinedSeverity() {
    return this.getStringAttribute('oracle_defined_severity');
  }

  // references - computed: true, optional: false, required: false
  private _references = new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonFineGrainedAccessControlBaselineReferencesList(this, "references", false);
  public get references() {
    return this._references;
  }

  // remarks - computed: true, optional: false, required: false
  public get remarks() {
    return this.getStringAttribute('remarks');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // summary - computed: true, optional: false, required: false
  public get summary() {
    return this.getStringAttribute('summary');
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // time_valid_until - computed: true, optional: false, required: false
  public get timeValidUntil() {
    return this.getStringAttribute('time_valid_until');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }
}

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonFineGrainedAccessControlBaselineList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonFineGrainedAccessControlBaselineOutputReference {
    return new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonFineGrainedAccessControlBaselineOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonFineGrainedAccessControlTargets {
}

export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonFineGrainedAccessControlTargetsToTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonFineGrainedAccessControlTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonFineGrainedAccessControlTargetsToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonFineGrainedAccessControlTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonFineGrainedAccessControlTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonFineGrainedAccessControlTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonFineGrainedAccessControlTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }
}

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonFineGrainedAccessControlTargetsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonFineGrainedAccessControlTargetsOutputReference {
    return new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonFineGrainedAccessControlTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonFineGrainedAccessControl {
}

export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonFineGrainedAccessControlToTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonFineGrainedAccessControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonFineGrainedAccessControlToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonFineGrainedAccessControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonFineGrainedAccessControlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonFineGrainedAccessControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonFineGrainedAccessControl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // baseline - computed: true, optional: false, required: false
  private _baseline = new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonFineGrainedAccessControlBaselineList(this, "baseline", false);
  public get baseline() {
    return this._baseline;
  }

  // targets - computed: true, optional: false, required: false
  private _targets = new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonFineGrainedAccessControlTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
}

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonFineGrainedAccessControlList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonFineGrainedAccessControlOutputReference {
    return new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonFineGrainedAccessControlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonPrivilegesAndRolesBaselineReferences {
}

export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonPrivilegesAndRolesBaselineReferencesToTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonPrivilegesAndRolesBaselineReferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonPrivilegesAndRolesBaselineReferencesToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonPrivilegesAndRolesBaselineReferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonPrivilegesAndRolesBaselineReferencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonPrivilegesAndRolesBaselineReferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonPrivilegesAndRolesBaselineReferences | undefined) {
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

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonPrivilegesAndRolesBaselineReferencesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonPrivilegesAndRolesBaselineReferencesOutputReference {
    return new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonPrivilegesAndRolesBaselineReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonPrivilegesAndRolesBaseline {
}

export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonPrivilegesAndRolesBaselineToTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonPrivilegesAndRolesBaseline): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonPrivilegesAndRolesBaselineToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonPrivilegesAndRolesBaseline): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonPrivilegesAndRolesBaselineOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonPrivilegesAndRolesBaseline | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonPrivilegesAndRolesBaseline | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assessment_id - computed: true, optional: false, required: false
  public get assessmentId() {
    return this.getStringAttribute('assessment_id');
  }

  // details - computed: true, optional: false, required: false
  public get details() {
    return this.getListAttribute('details');
  }

  // has_target_db_risk_level_changed - computed: true, optional: false, required: false
  public get hasTargetDbRiskLevelChanged() {
    return this.getBooleanAttribute('has_target_db_risk_level_changed');
  }

  // is_risk_modified - computed: true, optional: false, required: false
  public get isRiskModified() {
    return this.getBooleanAttribute('is_risk_modified');
  }

  // justification - computed: true, optional: false, required: false
  public get justification() {
    return this.getStringAttribute('justification');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // oracle_defined_severity - computed: true, optional: false, required: false
  public get oracleDefinedSeverity() {
    return this.getStringAttribute('oracle_defined_severity');
  }

  // references - computed: true, optional: false, required: false
  private _references = new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonPrivilegesAndRolesBaselineReferencesList(this, "references", false);
  public get references() {
    return this._references;
  }

  // remarks - computed: true, optional: false, required: false
  public get remarks() {
    return this.getStringAttribute('remarks');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // summary - computed: true, optional: false, required: false
  public get summary() {
    return this.getStringAttribute('summary');
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // time_valid_until - computed: true, optional: false, required: false
  public get timeValidUntil() {
    return this.getStringAttribute('time_valid_until');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }
}

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonPrivilegesAndRolesBaselineList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonPrivilegesAndRolesBaselineOutputReference {
    return new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonPrivilegesAndRolesBaselineOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonPrivilegesAndRolesTargets {
}

export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonPrivilegesAndRolesTargetsToTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonPrivilegesAndRolesTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonPrivilegesAndRolesTargetsToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonPrivilegesAndRolesTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonPrivilegesAndRolesTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonPrivilegesAndRolesTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonPrivilegesAndRolesTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }
}

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonPrivilegesAndRolesTargetsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonPrivilegesAndRolesTargetsOutputReference {
    return new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonPrivilegesAndRolesTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonPrivilegesAndRoles {
}

export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonPrivilegesAndRolesToTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonPrivilegesAndRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonPrivilegesAndRolesToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonPrivilegesAndRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonPrivilegesAndRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonPrivilegesAndRoles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonPrivilegesAndRoles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // baseline - computed: true, optional: false, required: false
  private _baseline = new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonPrivilegesAndRolesBaselineList(this, "baseline", false);
  public get baseline() {
    return this._baseline;
  }

  // targets - computed: true, optional: false, required: false
  private _targets = new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonPrivilegesAndRolesTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
}

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonPrivilegesAndRolesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonPrivilegesAndRolesOutputReference {
    return new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonPrivilegesAndRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonUserAccountsBaselineReferences {
}

export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonUserAccountsBaselineReferencesToTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonUserAccountsBaselineReferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonUserAccountsBaselineReferencesToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonUserAccountsBaselineReferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonUserAccountsBaselineReferencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonUserAccountsBaselineReferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonUserAccountsBaselineReferences | undefined) {
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

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonUserAccountsBaselineReferencesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonUserAccountsBaselineReferencesOutputReference {
    return new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonUserAccountsBaselineReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonUserAccountsBaseline {
}

export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonUserAccountsBaselineToTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonUserAccountsBaseline): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonUserAccountsBaselineToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonUserAccountsBaseline): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonUserAccountsBaselineOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonUserAccountsBaseline | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonUserAccountsBaseline | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assessment_id - computed: true, optional: false, required: false
  public get assessmentId() {
    return this.getStringAttribute('assessment_id');
  }

  // details - computed: true, optional: false, required: false
  public get details() {
    return this.getListAttribute('details');
  }

  // has_target_db_risk_level_changed - computed: true, optional: false, required: false
  public get hasTargetDbRiskLevelChanged() {
    return this.getBooleanAttribute('has_target_db_risk_level_changed');
  }

  // is_risk_modified - computed: true, optional: false, required: false
  public get isRiskModified() {
    return this.getBooleanAttribute('is_risk_modified');
  }

  // justification - computed: true, optional: false, required: false
  public get justification() {
    return this.getStringAttribute('justification');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // oracle_defined_severity - computed: true, optional: false, required: false
  public get oracleDefinedSeverity() {
    return this.getStringAttribute('oracle_defined_severity');
  }

  // references - computed: true, optional: false, required: false
  private _references = new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonUserAccountsBaselineReferencesList(this, "references", false);
  public get references() {
    return this._references;
  }

  // remarks - computed: true, optional: false, required: false
  public get remarks() {
    return this.getStringAttribute('remarks');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // summary - computed: true, optional: false, required: false
  public get summary() {
    return this.getStringAttribute('summary');
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // time_valid_until - computed: true, optional: false, required: false
  public get timeValidUntil() {
    return this.getStringAttribute('time_valid_until');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }
}

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonUserAccountsBaselineList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonUserAccountsBaselineOutputReference {
    return new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonUserAccountsBaselineOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonUserAccountsTargets {
}

export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonUserAccountsTargetsToTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonUserAccountsTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonUserAccountsTargetsToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonUserAccountsTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonUserAccountsTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonUserAccountsTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonUserAccountsTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }
}

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonUserAccountsTargetsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonUserAccountsTargetsOutputReference {
    return new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonUserAccountsTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonUserAccounts {
}

export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonUserAccountsToTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonUserAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentTemplateBaselineComparisonUserAccountsToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonUserAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonUserAccountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonUserAccounts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonUserAccounts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // baseline - computed: true, optional: false, required: false
  private _baseline = new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonUserAccountsBaselineList(this, "baseline", false);
  public get baseline() {
    return this._baseline;
  }

  // targets - computed: true, optional: false, required: false
  private _targets = new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonUserAccountsTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
}

export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonUserAccountsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonUserAccountsOutputReference {
    return new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonUserAccountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_security_assessment_template_baseline_comparison oci_data_safe_security_assessment_template_baseline_comparison}
*/
export class DataOciDataSafeSecurityAssessmentTemplateBaselineComparison extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_security_assessment_template_baseline_comparison";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataSafeSecurityAssessmentTemplateBaselineComparison resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataSafeSecurityAssessmentTemplateBaselineComparison to import
  * @param importFromId The id of the existing DataOciDataSafeSecurityAssessmentTemplateBaselineComparison that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_security_assessment_template_baseline_comparison#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataSafeSecurityAssessmentTemplateBaselineComparison to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_security_assessment_template_baseline_comparison", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_security_assessment_template_baseline_comparison oci_data_safe_security_assessment_template_baseline_comparison} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_security_assessment_template_baseline_comparison',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._category = config.category;
    this._comparisonSecurityAssessmentId = config.comparisonSecurityAssessmentId;
    this._findingKey = config.findingKey;
    this._id = config.id;
    this._securityAssessmentId = config.securityAssessmentId;
    this._targetId = config.targetId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auditing - computed: true, optional: false, required: false
  private _auditing = new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuditingList(this, "auditing", false);
  public get auditing() {
    return this._auditing;
  }

  // authorization_control - computed: true, optional: false, required: false
  private _authorizationControl = new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonAuthorizationControlList(this, "authorization_control", false);
  public get authorizationControl() {
    return this._authorizationControl;
  }

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // comparison_security_assessment_id - computed: false, optional: false, required: true
  private _comparisonSecurityAssessmentId?: string; 
  public get comparisonSecurityAssessmentId() {
    return this.getStringAttribute('comparison_security_assessment_id');
  }
  public set comparisonSecurityAssessmentId(value: string) {
    this._comparisonSecurityAssessmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonSecurityAssessmentIdInput() {
    return this._comparisonSecurityAssessmentId;
  }

  // data_encryption - computed: true, optional: false, required: false
  private _dataEncryption = new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDataEncryptionList(this, "data_encryption", false);
  public get dataEncryption() {
    return this._dataEncryption;
  }

  // db_configuration - computed: true, optional: false, required: false
  private _dbConfiguration = new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonDbConfigurationList(this, "db_configuration", false);
  public get dbConfiguration() {
    return this._dbConfiguration;
  }

  // finding_key - computed: false, optional: true, required: false
  private _findingKey?: string; 
  public get findingKey() {
    return this.getStringAttribute('finding_key');
  }
  public set findingKey(value: string) {
    this._findingKey = value;
  }
  public resetFindingKey() {
    this._findingKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingKeyInput() {
    return this._findingKey;
  }

  // fine_grained_access_control - computed: true, optional: false, required: false
  private _fineGrainedAccessControl = new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonFineGrainedAccessControlList(this, "fine_grained_access_control", false);
  public get fineGrainedAccessControl() {
    return this._fineGrainedAccessControl;
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

  // privileges_and_roles - computed: true, optional: false, required: false
  private _privilegesAndRoles = new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonPrivilegesAndRolesList(this, "privileges_and_roles", false);
  public get privilegesAndRoles() {
    return this._privilegesAndRoles;
  }

  // security_assessment_id - computed: false, optional: false, required: true
  private _securityAssessmentId?: string; 
  public get securityAssessmentId() {
    return this.getStringAttribute('security_assessment_id');
  }
  public set securityAssessmentId(value: string) {
    this._securityAssessmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityAssessmentIdInput() {
    return this._securityAssessmentId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

  // template_baseline_id - computed: true, optional: false, required: false
  public get templateBaselineId() {
    return this.getStringAttribute('template_baseline_id');
  }

  // template_baseline_name - computed: true, optional: false, required: false
  public get templateBaselineName() {
    return this.getStringAttribute('template_baseline_name');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // user_accounts - computed: true, optional: false, required: false
  private _userAccounts = new DataOciDataSafeSecurityAssessmentTemplateBaselineComparisonUserAccountsList(this, "user_accounts", false);
  public get userAccounts() {
    return this._userAccounts;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      category: cdktf.stringToTerraform(this._category),
      comparison_security_assessment_id: cdktf.stringToTerraform(this._comparisonSecurityAssessmentId),
      finding_key: cdktf.stringToTerraform(this._findingKey),
      id: cdktf.stringToTerraform(this._id),
      security_assessment_id: cdktf.stringToTerraform(this._securityAssessmentId),
      target_id: cdktf.stringToTerraform(this._targetId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comparison_security_assessment_id: {
        value: cdktf.stringToHclTerraform(this._comparisonSecurityAssessmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      finding_key: {
        value: cdktf.stringToHclTerraform(this._findingKey),
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
      security_assessment_id: {
        value: cdktf.stringToHclTerraform(this._securityAssessmentId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
