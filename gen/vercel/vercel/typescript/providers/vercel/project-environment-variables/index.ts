// https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/project_environment_variables
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectEnvironmentVariablesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Vercel project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/project_environment_variables#project_id ProjectEnvironmentVariables#project_id}
  */
  readonly projectId: string;
  /**
  * The ID of the Vercel team. Required when configuring a team resource if a default team has not been set in the provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/project_environment_variables#team_id ProjectEnvironmentVariables#team_id}
  */
  readonly teamId?: string;
  /**
  * A set of Environment Variables that should be configured for the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/project_environment_variables#variables ProjectEnvironmentVariables#variables}
  */
  readonly variables: ProjectEnvironmentVariablesVariables[] | cdktf.IResolvable;
}
export interface ProjectEnvironmentVariablesVariables {
  /**
  * A comment explaining what the environment variable is for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/project_environment_variables#comment ProjectEnvironmentVariables#comment}
  */
  readonly comment?: string;
  /**
  * The IDs of Custom Environments that the Environment Variable should be present on. At least one of `target` or `custom_environment_ids` must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/project_environment_variables#custom_environment_ids ProjectEnvironmentVariables#custom_environment_ids}
  */
  readonly customEnvironmentIds?: string[];
  /**
  * The git branch of the Environment Variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/project_environment_variables#git_branch ProjectEnvironmentVariables#git_branch}
  */
  readonly gitBranch?: string;
  /**
  * The name of the Environment Variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/project_environment_variables#key ProjectEnvironmentVariables#key}
  */
  readonly key: string;
  /**
  * Whether the Environment Variable is sensitive or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/project_environment_variables#sensitive ProjectEnvironmentVariables#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * The environments that the Environment Variable should be present on. Valid targets are either `production`, `preview`, or `development`. At least one of `target` or `custom_environment_ids` must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/project_environment_variables#target ProjectEnvironmentVariables#target}
  */
  readonly target?: string[];
  /**
  * The value of the Environment Variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/project_environment_variables#value ProjectEnvironmentVariables#value}
  */
  readonly value: string;
}

export function projectEnvironmentVariablesVariablesToTerraform(struct?: ProjectEnvironmentVariablesVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    custom_environment_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.customEnvironmentIds),
    git_branch: cdktf.stringToTerraform(struct!.gitBranch),
    key: cdktf.stringToTerraform(struct!.key),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    target: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.target),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function projectEnvironmentVariablesVariablesToHclTerraform(struct?: ProjectEnvironmentVariablesVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_environment_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.customEnvironmentIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    git_branch: {
      value: cdktf.stringToHclTerraform(struct!.gitBranch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.sensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.target),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectEnvironmentVariablesVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectEnvironmentVariablesVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._customEnvironmentIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.customEnvironmentIds = this._customEnvironmentIds;
    }
    if (this._gitBranch !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitBranch = this._gitBranch;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._sensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitive = this._sensitive;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectEnvironmentVariablesVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._customEnvironmentIds = undefined;
      this._gitBranch = undefined;
      this._key = undefined;
      this._sensitive = undefined;
      this._target = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._customEnvironmentIds = value.customEnvironmentIds;
      this._gitBranch = value.gitBranch;
      this._key = value.key;
      this._sensitive = value.sensitive;
      this._target = value.target;
      this._value = value.value;
    }
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // custom_environment_ids - computed: true, optional: true, required: false
  private _customEnvironmentIds?: string[]; 
  public get customEnvironmentIds() {
    return cdktf.Fn.tolist(this.getListAttribute('custom_environment_ids'));
  }
  public set customEnvironmentIds(value: string[]) {
    this._customEnvironmentIds = value;
  }
  public resetCustomEnvironmentIds() {
    this._customEnvironmentIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEnvironmentIdsInput() {
    return this._customEnvironmentIds;
  }

  // git_branch - computed: false, optional: true, required: false
  private _gitBranch?: string; 
  public get gitBranch() {
    return this.getStringAttribute('git_branch');
  }
  public set gitBranch(value: string) {
    this._gitBranch = value;
  }
  public resetGitBranch() {
    this._gitBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitBranchInput() {
    return this._gitBranch;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // sensitive - computed: true, optional: true, required: false
  private _sensitive?: boolean | cdktf.IResolvable; 
  public get sensitive() {
    return this.getBooleanAttribute('sensitive');
  }
  public set sensitive(value: boolean | cdktf.IResolvable) {
    this._sensitive = value;
  }
  public resetSensitive() {
    this._sensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveInput() {
    return this._sensitive;
  }

  // target - computed: true, optional: true, required: false
  private _target?: string[]; 
  public get target() {
    return cdktf.Fn.tolist(this.getListAttribute('target'));
  }
  public set target(value: string[]) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ProjectEnvironmentVariablesVariablesList extends cdktf.ComplexList {
  public internalValue? : ProjectEnvironmentVariablesVariables[] | cdktf.IResolvable

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
  public get(index: number): ProjectEnvironmentVariablesVariablesOutputReference {
    return new ProjectEnvironmentVariablesVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/project_environment_variables vercel_project_environment_variables}
*/
export class ProjectEnvironmentVariables extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vercel_project_environment_variables";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectEnvironmentVariables resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectEnvironmentVariables to import
  * @param importFromId The id of the existing ProjectEnvironmentVariables that should be imported. Refer to the {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/project_environment_variables#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectEnvironmentVariables to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vercel_project_environment_variables", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/project_environment_variables vercel_project_environment_variables} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectEnvironmentVariablesConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectEnvironmentVariablesConfig) {
    super(scope, id, {
      terraformResourceType: 'vercel_project_environment_variables',
      terraformGeneratorMetadata: {
        providerName: 'vercel',
        providerVersion: '4.0.2',
        providerVersionConstraint: '4.0.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._projectId = config.projectId;
    this._teamId = config.teamId;
    this._variables.internalValue = config.variables;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // variables - computed: false, optional: false, required: true
  private _variables = new ProjectEnvironmentVariablesVariablesList(this, "variables", true);
  public get variables() {
    return this._variables;
  }
  public putVariables(value: ProjectEnvironmentVariablesVariables[] | cdktf.IResolvable) {
    this._variables.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      project_id: cdktf.stringToTerraform(this._projectId),
      team_id: cdktf.stringToTerraform(this._teamId),
      variables: cdktf.listMapper(projectEnvironmentVariablesVariablesToTerraform, false)(this._variables.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      team_id: {
        value: cdktf.stringToHclTerraform(this._teamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      variables: {
        value: cdktf.listMapperHcl(projectEnvironmentVariablesVariablesToHclTerraform, false)(this._variables.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ProjectEnvironmentVariablesVariablesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
