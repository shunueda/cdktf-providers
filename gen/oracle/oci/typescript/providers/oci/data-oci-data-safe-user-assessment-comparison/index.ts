// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_user_assessment_comparison
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeUserAssessmentComparisonConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_user_assessment_comparison#comparison_user_assessment_id DataOciDataSafeUserAssessmentComparison#comparison_user_assessment_id}
  */
  readonly comparisonUserAssessmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_user_assessment_comparison#id DataOciDataSafeUserAssessmentComparison#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_user_assessment_comparison#user_assessment_id DataOciDataSafeUserAssessmentComparison#user_assessment_id}
  */
  readonly userAssessmentId: string;
}
export interface DataOciDataSafeUserAssessmentComparisonSummaryBaseline {
}

export function dataOciDataSafeUserAssessmentComparisonSummaryBaselineToTerraform(struct?: DataOciDataSafeUserAssessmentComparisonSummaryBaseline): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeUserAssessmentComparisonSummaryBaselineToHclTerraform(struct?: DataOciDataSafeUserAssessmentComparisonSummaryBaseline): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeUserAssessmentComparisonSummaryBaselineOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeUserAssessmentComparisonSummaryBaseline | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeUserAssessmentComparisonSummaryBaseline | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // user_assessment_id - computed: true, optional: false, required: false
  public get userAssessmentId() {
    return this.getStringAttribute('user_assessment_id');
  }
}

export class DataOciDataSafeUserAssessmentComparisonSummaryBaselineList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeUserAssessmentComparisonSummaryBaselineOutputReference {
    return new DataOciDataSafeUserAssessmentComparisonSummaryBaselineOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeUserAssessmentComparisonSummaryCurrent {
}

export function dataOciDataSafeUserAssessmentComparisonSummaryCurrentToTerraform(struct?: DataOciDataSafeUserAssessmentComparisonSummaryCurrent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeUserAssessmentComparisonSummaryCurrentToHclTerraform(struct?: DataOciDataSafeUserAssessmentComparisonSummaryCurrent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeUserAssessmentComparisonSummaryCurrentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeUserAssessmentComparisonSummaryCurrent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeUserAssessmentComparisonSummaryCurrent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // user_assessment_id - computed: true, optional: false, required: false
  public get userAssessmentId() {
    return this.getStringAttribute('user_assessment_id');
  }
}

export class DataOciDataSafeUserAssessmentComparisonSummaryCurrentList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeUserAssessmentComparisonSummaryCurrentOutputReference {
    return new DataOciDataSafeUserAssessmentComparisonSummaryCurrentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeUserAssessmentComparisonSummary {
}

export function dataOciDataSafeUserAssessmentComparisonSummaryToTerraform(struct?: DataOciDataSafeUserAssessmentComparisonSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeUserAssessmentComparisonSummaryToHclTerraform(struct?: DataOciDataSafeUserAssessmentComparisonSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeUserAssessmentComparisonSummaryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeUserAssessmentComparisonSummary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeUserAssessmentComparisonSummary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // baseline - computed: true, optional: false, required: false
  private _baseline = new DataOciDataSafeUserAssessmentComparisonSummaryBaselineList(this, "baseline", false);
  public get baseline() {
    return this._baseline;
  }

  // current - computed: true, optional: false, required: false
  private _current = new DataOciDataSafeUserAssessmentComparisonSummaryCurrentList(this, "current", false);
  public get current() {
    return this._current;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataOciDataSafeUserAssessmentComparisonSummaryList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeUserAssessmentComparisonSummaryOutputReference {
    return new DataOciDataSafeUserAssessmentComparisonSummaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_user_assessment_comparison oci_data_safe_user_assessment_comparison}
*/
export class DataOciDataSafeUserAssessmentComparison extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_user_assessment_comparison";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataSafeUserAssessmentComparison resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataSafeUserAssessmentComparison to import
  * @param importFromId The id of the existing DataOciDataSafeUserAssessmentComparison that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_user_assessment_comparison#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataSafeUserAssessmentComparison to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_user_assessment_comparison", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_user_assessment_comparison oci_data_safe_user_assessment_comparison} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeUserAssessmentComparisonConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeUserAssessmentComparisonConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_user_assessment_comparison',
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
    this._comparisonUserAssessmentId = config.comparisonUserAssessmentId;
    this._id = config.id;
    this._userAssessmentId = config.userAssessmentId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comparison_user_assessment_id - computed: false, optional: false, required: true
  private _comparisonUserAssessmentId?: string; 
  public get comparisonUserAssessmentId() {
    return this.getStringAttribute('comparison_user_assessment_id');
  }
  public set comparisonUserAssessmentId(value: string) {
    this._comparisonUserAssessmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonUserAssessmentIdInput() {
    return this._comparisonUserAssessmentId;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // summary - computed: true, optional: false, required: false
  private _summary = new DataOciDataSafeUserAssessmentComparisonSummaryList(this, "summary", false);
  public get summary() {
    return this._summary;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // user_assessment_id - computed: false, optional: false, required: true
  private _userAssessmentId?: string; 
  public get userAssessmentId() {
    return this.getStringAttribute('user_assessment_id');
  }
  public set userAssessmentId(value: string) {
    this._userAssessmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userAssessmentIdInput() {
    return this._userAssessmentId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comparison_user_assessment_id: cdktf.stringToTerraform(this._comparisonUserAssessmentId),
      id: cdktf.stringToTerraform(this._id),
      user_assessment_id: cdktf.stringToTerraform(this._userAssessmentId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comparison_user_assessment_id: {
        value: cdktf.stringToHclTerraform(this._comparisonUserAssessmentId),
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
      user_assessment_id: {
        value: cdktf.stringToHclTerraform(this._userAssessmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
