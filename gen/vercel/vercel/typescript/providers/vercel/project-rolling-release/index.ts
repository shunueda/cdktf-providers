// https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/project_rolling_release
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectRollingReleaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * The type of advancement for the rolling release. Must be either 'automatic' or 'manual-approval'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/project_rolling_release#advancement_type ProjectRollingRelease#advancement_type}
  */
  readonly advancementType: string;
  /**
  * The ID of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/project_rolling_release#project_id ProjectRollingRelease#project_id}
  */
  readonly projectId: string;
  /**
  * The stages for the rolling release configuration. The last stage must have target_percentage = 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/project_rolling_release#stages ProjectRollingRelease#stages}
  */
  readonly stages: ProjectRollingReleaseStages[] | cdktf.IResolvable;
  /**
  * The ID of the Vercel team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/project_rolling_release#team_id ProjectRollingRelease#team_id}
  */
  readonly teamId?: string;
}
export interface ProjectRollingReleaseStages {
  /**
  * The duration in minutes to wait before advancing to the next stage. Required for automatic advancement type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/project_rolling_release#duration ProjectRollingRelease#duration}
  */
  readonly duration?: number;
  /**
  * The percentage of traffic to route to this stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/project_rolling_release#target_percentage ProjectRollingRelease#target_percentage}
  */
  readonly targetPercentage: number;
}

export function projectRollingReleaseStagesToTerraform(struct?: ProjectRollingReleaseStages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    target_percentage: cdktf.numberToTerraform(struct!.targetPercentage),
  }
}


export function projectRollingReleaseStagesToHclTerraform(struct?: ProjectRollingReleaseStages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_percentage: {
      value: cdktf.numberToHclTerraform(struct!.targetPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectRollingReleaseStagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectRollingReleaseStages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._targetPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPercentage = this._targetPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectRollingReleaseStages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._targetPercentage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._targetPercentage = value.targetPercentage;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // target_percentage - computed: false, optional: false, required: true
  private _targetPercentage?: number; 
  public get targetPercentage() {
    return this.getNumberAttribute('target_percentage');
  }
  public set targetPercentage(value: number) {
    this._targetPercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPercentageInput() {
    return this._targetPercentage;
  }
}

export class ProjectRollingReleaseStagesList extends cdktf.ComplexList {
  public internalValue? : ProjectRollingReleaseStages[] | cdktf.IResolvable

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
  public get(index: number): ProjectRollingReleaseStagesOutputReference {
    return new ProjectRollingReleaseStagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/project_rolling_release vercel_project_rolling_release}
*/
export class ProjectRollingRelease extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vercel_project_rolling_release";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectRollingRelease resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectRollingRelease to import
  * @param importFromId The id of the existing ProjectRollingRelease that should be imported. Refer to the {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/project_rolling_release#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectRollingRelease to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vercel_project_rolling_release", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/project_rolling_release vercel_project_rolling_release} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectRollingReleaseConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectRollingReleaseConfig) {
    super(scope, id, {
      terraformResourceType: 'vercel_project_rolling_release',
      terraformGeneratorMetadata: {
        providerName: 'vercel',
        providerVersion: '4.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._advancementType = config.advancementType;
    this._projectId = config.projectId;
    this._stages.internalValue = config.stages;
    this._teamId = config.teamId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advancement_type - computed: false, optional: false, required: true
  private _advancementType?: string; 
  public get advancementType() {
    return this.getStringAttribute('advancement_type');
  }
  public set advancementType(value: string) {
    this._advancementType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get advancementTypeInput() {
    return this._advancementType;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // stages - computed: false, optional: false, required: true
  private _stages = new ProjectRollingReleaseStagesList(this, "stages", false);
  public get stages() {
    return this._stages;
  }
  public putStages(value: ProjectRollingReleaseStages[] | cdktf.IResolvable) {
    this._stages.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stagesInput() {
    return this._stages.internalValue;
  }

  // team_id - computed: true, optional: true, required: false
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  public resetTeamId() {
    this._teamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      advancement_type: cdktf.stringToTerraform(this._advancementType),
      project_id: cdktf.stringToTerraform(this._projectId),
      stages: cdktf.listMapper(projectRollingReleaseStagesToTerraform, false)(this._stages.internalValue),
      team_id: cdktf.stringToTerraform(this._teamId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advancement_type: {
        value: cdktf.stringToHclTerraform(this._advancementType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stages: {
        value: cdktf.listMapperHcl(projectRollingReleaseStagesToHclTerraform, false)(this._stages.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProjectRollingReleaseStagesList",
      },
      team_id: {
        value: cdktf.stringToHclTerraform(this._teamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
