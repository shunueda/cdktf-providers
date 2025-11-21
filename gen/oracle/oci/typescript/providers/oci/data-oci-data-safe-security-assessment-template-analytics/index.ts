// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_security_assessment_template_analytics
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeSecurityAssessmentTemplateAnalyticsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_security_assessment_template_analytics#access_level DataOciDataSafeSecurityAssessmentTemplateAnalytics#access_level}
  */
  readonly accessLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_security_assessment_template_analytics#compartment_id DataOciDataSafeSecurityAssessmentTemplateAnalytics#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_security_assessment_template_analytics#compartment_id_in_subtree DataOciDataSafeSecurityAssessmentTemplateAnalytics#compartment_id_in_subtree}
  */
  readonly compartmentIdInSubtree?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_security_assessment_template_analytics#id DataOciDataSafeSecurityAssessmentTemplateAnalytics#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_security_assessment_template_analytics#is_compared DataOciDataSafeSecurityAssessmentTemplateAnalytics#is_compared}
  */
  readonly isCompared?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_security_assessment_template_analytics#is_compliant DataOciDataSafeSecurityAssessmentTemplateAnalytics#is_compliant}
  */
  readonly isCompliant?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_security_assessment_template_analytics#is_group DataOciDataSafeSecurityAssessmentTemplateAnalytics#is_group}
  */
  readonly isGroup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_security_assessment_template_analytics#target_database_group_id DataOciDataSafeSecurityAssessmentTemplateAnalytics#target_database_group_id}
  */
  readonly targetDatabaseGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_security_assessment_template_analytics#target_id DataOciDataSafeSecurityAssessmentTemplateAnalytics#target_id}
  */
  readonly targetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_security_assessment_template_analytics#template_assessment_id DataOciDataSafeSecurityAssessmentTemplateAnalytics#template_assessment_id}
  */
  readonly templateAssessmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_security_assessment_template_analytics#template_baseline_assessment_id DataOciDataSafeSecurityAssessmentTemplateAnalytics#template_baseline_assessment_id}
  */
  readonly templateBaselineAssessmentId?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_security_assessment_template_analytics#filter DataOciDataSafeSecurityAssessmentTemplateAnalytics#filter}
  */
  readonly filter?: DataOciDataSafeSecurityAssessmentTemplateAnalyticsFilter[] | cdktf.IResolvable;
}
export interface DataOciDataSafeSecurityAssessmentTemplateAnalyticsTemplateAnalyticsCollectionItemsDimensions {
}

export function dataOciDataSafeSecurityAssessmentTemplateAnalyticsTemplateAnalyticsCollectionItemsDimensionsToTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateAnalyticsTemplateAnalyticsCollectionItemsDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentTemplateAnalyticsTemplateAnalyticsCollectionItemsDimensionsToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateAnalyticsTemplateAnalyticsCollectionItemsDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentTemplateAnalyticsTemplateAnalyticsCollectionItemsDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentTemplateAnalyticsTemplateAnalyticsCollectionItemsDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentTemplateAnalyticsTemplateAnalyticsCollectionItemsDimensions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_compared - computed: true, optional: false, required: false
  public get isCompared() {
    return this.getBooleanAttribute('is_compared');
  }

  // is_compliant - computed: true, optional: false, required: false
  public get isCompliant() {
    return this.getBooleanAttribute('is_compliant');
  }

  // is_group - computed: true, optional: false, required: false
  public get isGroup() {
    return this.getBooleanAttribute('is_group');
  }

  // target_database_group_id - computed: true, optional: false, required: false
  public get targetDatabaseGroupId() {
    return this.getStringAttribute('target_database_group_id');
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // template_assessment_id - computed: true, optional: false, required: false
  public get templateAssessmentId() {
    return this.getStringAttribute('template_assessment_id');
  }

  // template_baseline_assessment_id - computed: true, optional: false, required: false
  public get templateBaselineAssessmentId() {
    return this.getStringAttribute('template_baseline_assessment_id');
  }

  // time_last_compared - computed: true, optional: false, required: false
  public get timeLastCompared() {
    return this.getStringAttribute('time_last_compared');
  }

  // total_checks - computed: true, optional: false, required: false
  public get totalChecks() {
    return this.getNumberAttribute('total_checks');
  }

  // total_checks_failed - computed: true, optional: false, required: false
  public get totalChecksFailed() {
    return this.getNumberAttribute('total_checks_failed');
  }

  // total_non_compliant_targets - computed: true, optional: false, required: false
  public get totalNonCompliantTargets() {
    return this.getNumberAttribute('total_non_compliant_targets');
  }

  // total_targets - computed: true, optional: false, required: false
  public get totalTargets() {
    return this.getNumberAttribute('total_targets');
  }
}

export class DataOciDataSafeSecurityAssessmentTemplateAnalyticsTemplateAnalyticsCollectionItemsDimensionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentTemplateAnalyticsTemplateAnalyticsCollectionItemsDimensionsOutputReference {
    return new DataOciDataSafeSecurityAssessmentTemplateAnalyticsTemplateAnalyticsCollectionItemsDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentTemplateAnalyticsTemplateAnalyticsCollectionItems {
}

export function dataOciDataSafeSecurityAssessmentTemplateAnalyticsTemplateAnalyticsCollectionItemsToTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateAnalyticsTemplateAnalyticsCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentTemplateAnalyticsTemplateAnalyticsCollectionItemsToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateAnalyticsTemplateAnalyticsCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentTemplateAnalyticsTemplateAnalyticsCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentTemplateAnalyticsTemplateAnalyticsCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentTemplateAnalyticsTemplateAnalyticsCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimensions - computed: true, optional: false, required: false
  private _dimensions = new DataOciDataSafeSecurityAssessmentTemplateAnalyticsTemplateAnalyticsCollectionItemsDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }

  // metric_name - computed: true, optional: false, required: false
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }

  // security_assessment_template_analytic_count - computed: true, optional: false, required: false
  public get securityAssessmentTemplateAnalyticCount() {
    return this.getStringAttribute('security_assessment_template_analytic_count');
  }
}

export class DataOciDataSafeSecurityAssessmentTemplateAnalyticsTemplateAnalyticsCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentTemplateAnalyticsTemplateAnalyticsCollectionItemsOutputReference {
    return new DataOciDataSafeSecurityAssessmentTemplateAnalyticsTemplateAnalyticsCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentTemplateAnalyticsTemplateAnalyticsCollection {
}

export function dataOciDataSafeSecurityAssessmentTemplateAnalyticsTemplateAnalyticsCollectionToTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateAnalyticsTemplateAnalyticsCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentTemplateAnalyticsTemplateAnalyticsCollectionToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateAnalyticsTemplateAnalyticsCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentTemplateAnalyticsTemplateAnalyticsCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentTemplateAnalyticsTemplateAnalyticsCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentTemplateAnalyticsTemplateAnalyticsCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDataSafeSecurityAssessmentTemplateAnalyticsTemplateAnalyticsCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDataSafeSecurityAssessmentTemplateAnalyticsTemplateAnalyticsCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentTemplateAnalyticsTemplateAnalyticsCollectionOutputReference {
    return new DataOciDataSafeSecurityAssessmentTemplateAnalyticsTemplateAnalyticsCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentTemplateAnalyticsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_security_assessment_template_analytics#name DataOciDataSafeSecurityAssessmentTemplateAnalytics#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_security_assessment_template_analytics#regex DataOciDataSafeSecurityAssessmentTemplateAnalytics#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_security_assessment_template_analytics#values DataOciDataSafeSecurityAssessmentTemplateAnalytics#values}
  */
  readonly values: string[];
}

export function dataOciDataSafeSecurityAssessmentTemplateAnalyticsFilterToTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateAnalyticsFilter | cdktf.IResolvable): any {
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


export function dataOciDataSafeSecurityAssessmentTemplateAnalyticsFilterToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentTemplateAnalyticsFilter | cdktf.IResolvable): any {
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

export class DataOciDataSafeSecurityAssessmentTemplateAnalyticsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentTemplateAnalyticsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDataSafeSecurityAssessmentTemplateAnalyticsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDataSafeSecurityAssessmentTemplateAnalyticsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDataSafeSecurityAssessmentTemplateAnalyticsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDataSafeSecurityAssessmentTemplateAnalyticsFilterOutputReference {
    return new DataOciDataSafeSecurityAssessmentTemplateAnalyticsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_security_assessment_template_analytics oci_data_safe_security_assessment_template_analytics}
*/
export class DataOciDataSafeSecurityAssessmentTemplateAnalytics extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_security_assessment_template_analytics";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataSafeSecurityAssessmentTemplateAnalytics resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataSafeSecurityAssessmentTemplateAnalytics to import
  * @param importFromId The id of the existing DataOciDataSafeSecurityAssessmentTemplateAnalytics that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_security_assessment_template_analytics#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataSafeSecurityAssessmentTemplateAnalytics to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_security_assessment_template_analytics", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_security_assessment_template_analytics oci_data_safe_security_assessment_template_analytics} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeSecurityAssessmentTemplateAnalyticsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeSecurityAssessmentTemplateAnalyticsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_security_assessment_template_analytics',
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
    this._accessLevel = config.accessLevel;
    this._compartmentId = config.compartmentId;
    this._compartmentIdInSubtree = config.compartmentIdInSubtree;
    this._id = config.id;
    this._isCompared = config.isCompared;
    this._isCompliant = config.isCompliant;
    this._isGroup = config.isGroup;
    this._targetDatabaseGroupId = config.targetDatabaseGroupId;
    this._targetId = config.targetId;
    this._templateAssessmentId = config.templateAssessmentId;
    this._templateBaselineAssessmentId = config.templateBaselineAssessmentId;
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

  // is_compared - computed: false, optional: true, required: false
  private _isCompared?: boolean | cdktf.IResolvable; 
  public get isCompared() {
    return this.getBooleanAttribute('is_compared');
  }
  public set isCompared(value: boolean | cdktf.IResolvable) {
    this._isCompared = value;
  }
  public resetIsCompared() {
    this._isCompared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isComparedInput() {
    return this._isCompared;
  }

  // is_compliant - computed: false, optional: true, required: false
  private _isCompliant?: boolean | cdktf.IResolvable; 
  public get isCompliant() {
    return this.getBooleanAttribute('is_compliant');
  }
  public set isCompliant(value: boolean | cdktf.IResolvable) {
    this._isCompliant = value;
  }
  public resetIsCompliant() {
    this._isCompliant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCompliantInput() {
    return this._isCompliant;
  }

  // is_group - computed: false, optional: true, required: false
  private _isGroup?: boolean | cdktf.IResolvable; 
  public get isGroup() {
    return this.getBooleanAttribute('is_group');
  }
  public set isGroup(value: boolean | cdktf.IResolvable) {
    this._isGroup = value;
  }
  public resetIsGroup() {
    this._isGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isGroupInput() {
    return this._isGroup;
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

  // template_analytics_collection - computed: true, optional: false, required: false
  private _templateAnalyticsCollection = new DataOciDataSafeSecurityAssessmentTemplateAnalyticsTemplateAnalyticsCollectionList(this, "template_analytics_collection", false);
  public get templateAnalyticsCollection() {
    return this._templateAnalyticsCollection;
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

  // template_baseline_assessment_id - computed: false, optional: true, required: false
  private _templateBaselineAssessmentId?: string; 
  public get templateBaselineAssessmentId() {
    return this.getStringAttribute('template_baseline_assessment_id');
  }
  public set templateBaselineAssessmentId(value: string) {
    this._templateBaselineAssessmentId = value;
  }
  public resetTemplateBaselineAssessmentId() {
    this._templateBaselineAssessmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateBaselineAssessmentIdInput() {
    return this._templateBaselineAssessmentId;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDataSafeSecurityAssessmentTemplateAnalyticsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDataSafeSecurityAssessmentTemplateAnalyticsFilter[] | cdktf.IResolvable) {
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
      id: cdktf.stringToTerraform(this._id),
      is_compared: cdktf.booleanToTerraform(this._isCompared),
      is_compliant: cdktf.booleanToTerraform(this._isCompliant),
      is_group: cdktf.booleanToTerraform(this._isGroup),
      target_database_group_id: cdktf.stringToTerraform(this._targetDatabaseGroupId),
      target_id: cdktf.stringToTerraform(this._targetId),
      template_assessment_id: cdktf.stringToTerraform(this._templateAssessmentId),
      template_baseline_assessment_id: cdktf.stringToTerraform(this._templateBaselineAssessmentId),
      filter: cdktf.listMapper(dataOciDataSafeSecurityAssessmentTemplateAnalyticsFilterToTerraform, true)(this._filter.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_compared: {
        value: cdktf.booleanToHclTerraform(this._isCompared),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_compliant: {
        value: cdktf.booleanToHclTerraform(this._isCompliant),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_group: {
        value: cdktf.booleanToHclTerraform(this._isGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      template_assessment_id: {
        value: cdktf.stringToHclTerraform(this._templateAssessmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_baseline_assessment_id: {
        value: cdktf.stringToHclTerraform(this._templateBaselineAssessmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDataSafeSecurityAssessmentTemplateAnalyticsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDataSafeSecurityAssessmentTemplateAnalyticsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
