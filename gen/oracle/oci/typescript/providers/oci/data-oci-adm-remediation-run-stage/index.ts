// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/adm_remediation_run_stage
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciAdmRemediationRunStageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/adm_remediation_run_stage#id DataOciAdmRemediationRunStage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/adm_remediation_run_stage#remediation_run_id DataOciAdmRemediationRunStage#remediation_run_id}
  */
  readonly remediationRunId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/adm_remediation_run_stage#stage_type DataOciAdmRemediationRunStage#stage_type}
  */
  readonly stageType: string;
}
export interface DataOciAdmRemediationRunStagePipelineProperties {
}

export function dataOciAdmRemediationRunStagePipelinePropertiesToTerraform(struct?: DataOciAdmRemediationRunStagePipelineProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciAdmRemediationRunStagePipelinePropertiesToHclTerraform(struct?: DataOciAdmRemediationRunStagePipelineProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciAdmRemediationRunStagePipelinePropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciAdmRemediationRunStagePipelineProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciAdmRemediationRunStagePipelineProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pipeline_identifier - computed: true, optional: false, required: false
  public get pipelineIdentifier() {
    return this.getStringAttribute('pipeline_identifier');
  }

  // pipeline_url - computed: true, optional: false, required: false
  public get pipelineUrl() {
    return this.getStringAttribute('pipeline_url');
  }
}

export class DataOciAdmRemediationRunStagePipelinePropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciAdmRemediationRunStagePipelinePropertiesOutputReference {
    return new DataOciAdmRemediationRunStagePipelinePropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciAdmRemediationRunStagePullRequestProperties {
}

export function dataOciAdmRemediationRunStagePullRequestPropertiesToTerraform(struct?: DataOciAdmRemediationRunStagePullRequestProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciAdmRemediationRunStagePullRequestPropertiesToHclTerraform(struct?: DataOciAdmRemediationRunStagePullRequestProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciAdmRemediationRunStagePullRequestProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciAdmRemediationRunStagePullRequestProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pull_request_identifier - computed: true, optional: false, required: false
  public get pullRequestIdentifier() {
    return this.getStringAttribute('pull_request_identifier');
  }

  // pull_request_url - computed: true, optional: false, required: false
  public get pullRequestUrl() {
    return this.getStringAttribute('pull_request_url');
  }
}

export class DataOciAdmRemediationRunStagePullRequestPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference {
    return new DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/adm_remediation_run_stage oci_adm_remediation_run_stage}
*/
export class DataOciAdmRemediationRunStage extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_adm_remediation_run_stage";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciAdmRemediationRunStage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciAdmRemediationRunStage to import
  * @param importFromId The id of the existing DataOciAdmRemediationRunStage that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/adm_remediation_run_stage#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciAdmRemediationRunStage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_adm_remediation_run_stage", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/adm_remediation_run_stage oci_adm_remediation_run_stage} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciAdmRemediationRunStageConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciAdmRemediationRunStageConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_adm_remediation_run_stage',
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
    this._id = config.id;
    this._remediationRunId = config.remediationRunId;
    this._stageType = config.stageType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audit_id - computed: true, optional: false, required: false
  public get auditId() {
    return this.getStringAttribute('audit_id');
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

  // next_stage_type - computed: true, optional: false, required: false
  public get nextStageType() {
    return this.getStringAttribute('next_stage_type');
  }

  // pipeline_properties - computed: true, optional: false, required: false
  private _pipelineProperties = new DataOciAdmRemediationRunStagePipelinePropertiesList(this, "pipeline_properties", false);
  public get pipelineProperties() {
    return this._pipelineProperties;
  }

  // previous_stage_type - computed: true, optional: false, required: false
  public get previousStageType() {
    return this.getStringAttribute('previous_stage_type');
  }

  // pull_request_properties - computed: true, optional: false, required: false
  private _pullRequestProperties = new DataOciAdmRemediationRunStagePullRequestPropertiesList(this, "pull_request_properties", false);
  public get pullRequestProperties() {
    return this._pullRequestProperties;
  }

  // recommended_updates_count - computed: true, optional: false, required: false
  public get recommendedUpdatesCount() {
    return this.getNumberAttribute('recommended_updates_count');
  }

  // remediation_run_id - computed: false, optional: false, required: true
  private _remediationRunId?: string; 
  public get remediationRunId() {
    return this.getStringAttribute('remediation_run_id');
  }
  public set remediationRunId(value: string) {
    this._remediationRunId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remediationRunIdInput() {
    return this._remediationRunId;
  }

  // stage_type - computed: false, optional: false, required: true
  private _stageType?: string; 
  public get stageType() {
    return this.getStringAttribute('stage_type');
  }
  public set stageType(value: string) {
    this._stageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stageTypeInput() {
    return this._stageType;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // summary - computed: true, optional: false, required: false
  public get summary() {
    return this.getStringAttribute('summary');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_finished - computed: true, optional: false, required: false
  public get timeFinished() {
    return this.getStringAttribute('time_finished');
  }

  // time_started - computed: true, optional: false, required: false
  public get timeStarted() {
    return this.getStringAttribute('time_started');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      remediation_run_id: cdktf.stringToTerraform(this._remediationRunId),
      stage_type: cdktf.stringToTerraform(this._stageType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remediation_run_id: {
        value: cdktf.stringToHclTerraform(this._remediationRunId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stage_type: {
        value: cdktf.stringToHclTerraform(this._stageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
