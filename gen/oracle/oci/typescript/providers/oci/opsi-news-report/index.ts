// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opsi_news_report
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpsiNewsReportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opsi_news_report#are_child_compartments_included OpsiNewsReport#are_child_compartments_included}
  */
  readonly areChildCompartmentsIncluded?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opsi_news_report#compartment_id OpsiNewsReport#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opsi_news_report#day_of_week OpsiNewsReport#day_of_week}
  */
  readonly dayOfWeek?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opsi_news_report#defined_tags OpsiNewsReport#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opsi_news_report#description OpsiNewsReport#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opsi_news_report#freeform_tags OpsiNewsReport#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opsi_news_report#id OpsiNewsReport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opsi_news_report#locale OpsiNewsReport#locale}
  */
  readonly locale: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opsi_news_report#match_rule OpsiNewsReport#match_rule}
  */
  readonly matchRule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opsi_news_report#name OpsiNewsReport#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opsi_news_report#news_frequency OpsiNewsReport#news_frequency}
  */
  readonly newsFrequency: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opsi_news_report#ons_topic_id OpsiNewsReport#ons_topic_id}
  */
  readonly onsTopicId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opsi_news_report#status OpsiNewsReport#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opsi_news_report#tag_filters OpsiNewsReport#tag_filters}
  */
  readonly tagFilters?: string[];
  /**
  * content_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opsi_news_report#content_types OpsiNewsReport#content_types}
  */
  readonly contentTypes: OpsiNewsReportContentTypes;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opsi_news_report#timeouts OpsiNewsReport#timeouts}
  */
  readonly timeouts?: OpsiNewsReportTimeouts;
}
export interface OpsiNewsReportContentTypes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opsi_news_report#actionable_insights_resources OpsiNewsReport#actionable_insights_resources}
  */
  readonly actionableInsightsResources?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opsi_news_report#capacity_planning_resources OpsiNewsReport#capacity_planning_resources}
  */
  readonly capacityPlanningResources?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opsi_news_report#sql_insights_fleet_analysis_resources OpsiNewsReport#sql_insights_fleet_analysis_resources}
  */
  readonly sqlInsightsFleetAnalysisResources?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opsi_news_report#sql_insights_performance_degradation_resources OpsiNewsReport#sql_insights_performance_degradation_resources}
  */
  readonly sqlInsightsPerformanceDegradationResources?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opsi_news_report#sql_insights_plan_changes_resources OpsiNewsReport#sql_insights_plan_changes_resources}
  */
  readonly sqlInsightsPlanChangesResources?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opsi_news_report#sql_insights_top_databases_resources OpsiNewsReport#sql_insights_top_databases_resources}
  */
  readonly sqlInsightsTopDatabasesResources?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opsi_news_report#sql_insights_top_sql_by_insights_resources OpsiNewsReport#sql_insights_top_sql_by_insights_resources}
  */
  readonly sqlInsightsTopSqlByInsightsResources?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opsi_news_report#sql_insights_top_sql_resources OpsiNewsReport#sql_insights_top_sql_resources}
  */
  readonly sqlInsightsTopSqlResources?: string[];
}

export function opsiNewsReportContentTypesToTerraform(struct?: OpsiNewsReportContentTypesOutputReference | OpsiNewsReportContentTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actionable_insights_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actionableInsightsResources),
    capacity_planning_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.capacityPlanningResources),
    sql_insights_fleet_analysis_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sqlInsightsFleetAnalysisResources),
    sql_insights_performance_degradation_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sqlInsightsPerformanceDegradationResources),
    sql_insights_plan_changes_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sqlInsightsPlanChangesResources),
    sql_insights_top_databases_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sqlInsightsTopDatabasesResources),
    sql_insights_top_sql_by_insights_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sqlInsightsTopSqlByInsightsResources),
    sql_insights_top_sql_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sqlInsightsTopSqlResources),
  }
}


export function opsiNewsReportContentTypesToHclTerraform(struct?: OpsiNewsReportContentTypesOutputReference | OpsiNewsReportContentTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actionable_insights_resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.actionableInsightsResources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    capacity_planning_resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.capacityPlanningResources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sql_insights_fleet_analysis_resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sqlInsightsFleetAnalysisResources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sql_insights_performance_degradation_resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sqlInsightsPerformanceDegradationResources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sql_insights_plan_changes_resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sqlInsightsPlanChangesResources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sql_insights_top_databases_resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sqlInsightsTopDatabasesResources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sql_insights_top_sql_by_insights_resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sqlInsightsTopSqlByInsightsResources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sql_insights_top_sql_resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sqlInsightsTopSqlResources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpsiNewsReportContentTypesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpsiNewsReportContentTypes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionableInsightsResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionableInsightsResources = this._actionableInsightsResources;
    }
    if (this._capacityPlanningResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityPlanningResources = this._capacityPlanningResources;
    }
    if (this._sqlInsightsFleetAnalysisResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlInsightsFleetAnalysisResources = this._sqlInsightsFleetAnalysisResources;
    }
    if (this._sqlInsightsPerformanceDegradationResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlInsightsPerformanceDegradationResources = this._sqlInsightsPerformanceDegradationResources;
    }
    if (this._sqlInsightsPlanChangesResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlInsightsPlanChangesResources = this._sqlInsightsPlanChangesResources;
    }
    if (this._sqlInsightsTopDatabasesResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlInsightsTopDatabasesResources = this._sqlInsightsTopDatabasesResources;
    }
    if (this._sqlInsightsTopSqlByInsightsResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlInsightsTopSqlByInsightsResources = this._sqlInsightsTopSqlByInsightsResources;
    }
    if (this._sqlInsightsTopSqlResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlInsightsTopSqlResources = this._sqlInsightsTopSqlResources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpsiNewsReportContentTypes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionableInsightsResources = undefined;
      this._capacityPlanningResources = undefined;
      this._sqlInsightsFleetAnalysisResources = undefined;
      this._sqlInsightsPerformanceDegradationResources = undefined;
      this._sqlInsightsPlanChangesResources = undefined;
      this._sqlInsightsTopDatabasesResources = undefined;
      this._sqlInsightsTopSqlByInsightsResources = undefined;
      this._sqlInsightsTopSqlResources = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionableInsightsResources = value.actionableInsightsResources;
      this._capacityPlanningResources = value.capacityPlanningResources;
      this._sqlInsightsFleetAnalysisResources = value.sqlInsightsFleetAnalysisResources;
      this._sqlInsightsPerformanceDegradationResources = value.sqlInsightsPerformanceDegradationResources;
      this._sqlInsightsPlanChangesResources = value.sqlInsightsPlanChangesResources;
      this._sqlInsightsTopDatabasesResources = value.sqlInsightsTopDatabasesResources;
      this._sqlInsightsTopSqlByInsightsResources = value.sqlInsightsTopSqlByInsightsResources;
      this._sqlInsightsTopSqlResources = value.sqlInsightsTopSqlResources;
    }
  }

  // actionable_insights_resources - computed: true, optional: true, required: false
  private _actionableInsightsResources?: string[]; 
  public get actionableInsightsResources() {
    return this.getListAttribute('actionable_insights_resources');
  }
  public set actionableInsightsResources(value: string[]) {
    this._actionableInsightsResources = value;
  }
  public resetActionableInsightsResources() {
    this._actionableInsightsResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionableInsightsResourcesInput() {
    return this._actionableInsightsResources;
  }

  // capacity_planning_resources - computed: true, optional: true, required: false
  private _capacityPlanningResources?: string[]; 
  public get capacityPlanningResources() {
    return this.getListAttribute('capacity_planning_resources');
  }
  public set capacityPlanningResources(value: string[]) {
    this._capacityPlanningResources = value;
  }
  public resetCapacityPlanningResources() {
    this._capacityPlanningResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityPlanningResourcesInput() {
    return this._capacityPlanningResources;
  }

  // sql_insights_fleet_analysis_resources - computed: true, optional: true, required: false
  private _sqlInsightsFleetAnalysisResources?: string[]; 
  public get sqlInsightsFleetAnalysisResources() {
    return this.getListAttribute('sql_insights_fleet_analysis_resources');
  }
  public set sqlInsightsFleetAnalysisResources(value: string[]) {
    this._sqlInsightsFleetAnalysisResources = value;
  }
  public resetSqlInsightsFleetAnalysisResources() {
    this._sqlInsightsFleetAnalysisResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlInsightsFleetAnalysisResourcesInput() {
    return this._sqlInsightsFleetAnalysisResources;
  }

  // sql_insights_performance_degradation_resources - computed: true, optional: true, required: false
  private _sqlInsightsPerformanceDegradationResources?: string[]; 
  public get sqlInsightsPerformanceDegradationResources() {
    return this.getListAttribute('sql_insights_performance_degradation_resources');
  }
  public set sqlInsightsPerformanceDegradationResources(value: string[]) {
    this._sqlInsightsPerformanceDegradationResources = value;
  }
  public resetSqlInsightsPerformanceDegradationResources() {
    this._sqlInsightsPerformanceDegradationResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlInsightsPerformanceDegradationResourcesInput() {
    return this._sqlInsightsPerformanceDegradationResources;
  }

  // sql_insights_plan_changes_resources - computed: true, optional: true, required: false
  private _sqlInsightsPlanChangesResources?: string[]; 
  public get sqlInsightsPlanChangesResources() {
    return this.getListAttribute('sql_insights_plan_changes_resources');
  }
  public set sqlInsightsPlanChangesResources(value: string[]) {
    this._sqlInsightsPlanChangesResources = value;
  }
  public resetSqlInsightsPlanChangesResources() {
    this._sqlInsightsPlanChangesResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlInsightsPlanChangesResourcesInput() {
    return this._sqlInsightsPlanChangesResources;
  }

  // sql_insights_top_databases_resources - computed: true, optional: true, required: false
  private _sqlInsightsTopDatabasesResources?: string[]; 
  public get sqlInsightsTopDatabasesResources() {
    return this.getListAttribute('sql_insights_top_databases_resources');
  }
  public set sqlInsightsTopDatabasesResources(value: string[]) {
    this._sqlInsightsTopDatabasesResources = value;
  }
  public resetSqlInsightsTopDatabasesResources() {
    this._sqlInsightsTopDatabasesResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlInsightsTopDatabasesResourcesInput() {
    return this._sqlInsightsTopDatabasesResources;
  }

  // sql_insights_top_sql_by_insights_resources - computed: true, optional: true, required: false
  private _sqlInsightsTopSqlByInsightsResources?: string[]; 
  public get sqlInsightsTopSqlByInsightsResources() {
    return this.getListAttribute('sql_insights_top_sql_by_insights_resources');
  }
  public set sqlInsightsTopSqlByInsightsResources(value: string[]) {
    this._sqlInsightsTopSqlByInsightsResources = value;
  }
  public resetSqlInsightsTopSqlByInsightsResources() {
    this._sqlInsightsTopSqlByInsightsResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlInsightsTopSqlByInsightsResourcesInput() {
    return this._sqlInsightsTopSqlByInsightsResources;
  }

  // sql_insights_top_sql_resources - computed: true, optional: true, required: false
  private _sqlInsightsTopSqlResources?: string[]; 
  public get sqlInsightsTopSqlResources() {
    return this.getListAttribute('sql_insights_top_sql_resources');
  }
  public set sqlInsightsTopSqlResources(value: string[]) {
    this._sqlInsightsTopSqlResources = value;
  }
  public resetSqlInsightsTopSqlResources() {
    this._sqlInsightsTopSqlResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlInsightsTopSqlResourcesInput() {
    return this._sqlInsightsTopSqlResources;
  }
}
export interface OpsiNewsReportTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opsi_news_report#create OpsiNewsReport#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opsi_news_report#delete OpsiNewsReport#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opsi_news_report#update OpsiNewsReport#update}
  */
  readonly update?: string;
}

export function opsiNewsReportTimeoutsToTerraform(struct?: OpsiNewsReportTimeouts | cdktf.IResolvable): any {
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


export function opsiNewsReportTimeoutsToHclTerraform(struct?: OpsiNewsReportTimeouts | cdktf.IResolvable): any {
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

export class OpsiNewsReportTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OpsiNewsReportTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpsiNewsReportTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opsi_news_report oci_opsi_news_report}
*/
export class OpsiNewsReport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_opsi_news_report";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpsiNewsReport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpsiNewsReport to import
  * @param importFromId The id of the existing OpsiNewsReport that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opsi_news_report#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpsiNewsReport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_opsi_news_report", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opsi_news_report oci_opsi_news_report} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpsiNewsReportConfig
  */
  public constructor(scope: Construct, id: string, config: OpsiNewsReportConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_opsi_news_report',
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
    this._areChildCompartmentsIncluded = config.areChildCompartmentsIncluded;
    this._compartmentId = config.compartmentId;
    this._dayOfWeek = config.dayOfWeek;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._locale = config.locale;
    this._matchRule = config.matchRule;
    this._name = config.name;
    this._newsFrequency = config.newsFrequency;
    this._onsTopicId = config.onsTopicId;
    this._status = config.status;
    this._tagFilters = config.tagFilters;
    this._contentTypes.internalValue = config.contentTypes;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // are_child_compartments_included - computed: true, optional: true, required: false
  private _areChildCompartmentsIncluded?: boolean | cdktf.IResolvable; 
  public get areChildCompartmentsIncluded() {
    return this.getBooleanAttribute('are_child_compartments_included');
  }
  public set areChildCompartmentsIncluded(value: boolean | cdktf.IResolvable) {
    this._areChildCompartmentsIncluded = value;
  }
  public resetAreChildCompartmentsIncluded() {
    this._areChildCompartmentsIncluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areChildCompartmentsIncludedInput() {
    return this._areChildCompartmentsIncluded;
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

  // day_of_week - computed: true, optional: true, required: false
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
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

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // locale - computed: false, optional: false, required: true
  private _locale?: string; 
  public get locale() {
    return this.getStringAttribute('locale');
  }
  public set locale(value: string) {
    this._locale = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localeInput() {
    return this._locale;
  }

  // match_rule - computed: true, optional: true, required: false
  private _matchRule?: string; 
  public get matchRule() {
    return this.getStringAttribute('match_rule');
  }
  public set matchRule(value: string) {
    this._matchRule = value;
  }
  public resetMatchRule() {
    this._matchRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRuleInput() {
    return this._matchRule;
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

  // news_frequency - computed: false, optional: false, required: true
  private _newsFrequency?: string; 
  public get newsFrequency() {
    return this.getStringAttribute('news_frequency');
  }
  public set newsFrequency(value: string) {
    this._newsFrequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newsFrequencyInput() {
    return this._newsFrequency;
  }

  // ons_topic_id - computed: false, optional: false, required: true
  private _onsTopicId?: string; 
  public get onsTopicId() {
    return this.getStringAttribute('ons_topic_id');
  }
  public set onsTopicId(value: string) {
    this._onsTopicId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onsTopicIdInput() {
    return this._onsTopicId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // tag_filters - computed: true, optional: true, required: false
  private _tagFilters?: string[]; 
  public get tagFilters() {
    return this.getListAttribute('tag_filters');
  }
  public set tagFilters(value: string[]) {
    this._tagFilters = value;
  }
  public resetTagFilters() {
    this._tagFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagFiltersInput() {
    return this._tagFilters;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // content_types - computed: false, optional: false, required: true
  private _contentTypes = new OpsiNewsReportContentTypesOutputReference(this, "content_types");
  public get contentTypes() {
    return this._contentTypes;
  }
  public putContentTypes(value: OpsiNewsReportContentTypes) {
    this._contentTypes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypesInput() {
    return this._contentTypes.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OpsiNewsReportTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OpsiNewsReportTimeouts) {
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
      are_child_compartments_included: cdktf.booleanToTerraform(this._areChildCompartmentsIncluded),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      day_of_week: cdktf.stringToTerraform(this._dayOfWeek),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      locale: cdktf.stringToTerraform(this._locale),
      match_rule: cdktf.stringToTerraform(this._matchRule),
      name: cdktf.stringToTerraform(this._name),
      news_frequency: cdktf.stringToTerraform(this._newsFrequency),
      ons_topic_id: cdktf.stringToTerraform(this._onsTopicId),
      status: cdktf.stringToTerraform(this._status),
      tag_filters: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tagFilters),
      content_types: opsiNewsReportContentTypesToTerraform(this._contentTypes.internalValue),
      timeouts: opsiNewsReportTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      are_child_compartments_included: {
        value: cdktf.booleanToHclTerraform(this._areChildCompartmentsIncluded),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      day_of_week: {
        value: cdktf.stringToHclTerraform(this._dayOfWeek),
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
      locale: {
        value: cdktf.stringToHclTerraform(this._locale),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_rule: {
        value: cdktf.stringToHclTerraform(this._matchRule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      news_frequency: {
        value: cdktf.stringToHclTerraform(this._newsFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ons_topic_id: {
        value: cdktf.stringToHclTerraform(this._onsTopicId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_filters: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tagFilters),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      content_types: {
        value: opsiNewsReportContentTypesToHclTerraform(this._contentTypes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpsiNewsReportContentTypesList",
      },
      timeouts: {
        value: opsiNewsReportTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OpsiNewsReportTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
