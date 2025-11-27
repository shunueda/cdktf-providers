// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/git_trigger
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GitTriggerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the channel in which the release will be created if the action type is CreateRelease.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/git_trigger#channel_id GitTrigger#channel_id}
  */
  readonly channelId: string;
  /**
  * The description of this Git trigger..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/git_trigger#description GitTrigger#description}
  */
  readonly description?: string;
  /**
  * Disables the trigger from being run when set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/git_trigger#is_disabled GitTrigger#is_disabled}
  */
  readonly isDisabled?: boolean | cdktf.IResolvable;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/git_trigger#name GitTrigger#name}
  */
  readonly name: string;
  /**
  * The ID of the project to attach the trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/git_trigger#project_id GitTrigger#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/git_trigger#sources GitTrigger#sources}
  */
  readonly sources: GitTriggerSources[] | cdktf.IResolvable;
  /**
  * The space ID associated with this Git trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/git_trigger#space_id GitTrigger#space_id}
  */
  readonly spaceId?: string;
}
export interface GitTriggerSources {
  /**
  * The deployment action slug.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/git_trigger#deployment_action_slug GitTrigger#deployment_action_slug}
  */
  readonly deploymentActionSlug: string;
  /**
  * The file paths to exclude.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/git_trigger#exclude_file_paths GitTrigger#exclude_file_paths}
  */
  readonly excludeFilePaths: string[];
  /**
  * The git dependency name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/git_trigger#git_dependency_name GitTrigger#git_dependency_name}
  */
  readonly gitDependencyName: string;
  /**
  * The file paths to include.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/git_trigger#include_file_paths GitTrigger#include_file_paths}
  */
  readonly includeFilePaths: string[];
}

export function gitTriggerSourcesToTerraform(struct?: GitTriggerSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deployment_action_slug: cdktf.stringToTerraform(struct!.deploymentActionSlug),
    exclude_file_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeFilePaths),
    git_dependency_name: cdktf.stringToTerraform(struct!.gitDependencyName),
    include_file_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeFilePaths),
  }
}


export function gitTriggerSourcesToHclTerraform(struct?: GitTriggerSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deployment_action_slug: {
      value: cdktf.stringToHclTerraform(struct!.deploymentActionSlug),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_file_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeFilePaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    git_dependency_name: {
      value: cdktf.stringToHclTerraform(struct!.gitDependencyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_file_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeFilePaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GitTriggerSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GitTriggerSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deploymentActionSlug !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentActionSlug = this._deploymentActionSlug;
    }
    if (this._excludeFilePaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeFilePaths = this._excludeFilePaths;
    }
    if (this._gitDependencyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitDependencyName = this._gitDependencyName;
    }
    if (this._includeFilePaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeFilePaths = this._includeFilePaths;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GitTriggerSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deploymentActionSlug = undefined;
      this._excludeFilePaths = undefined;
      this._gitDependencyName = undefined;
      this._includeFilePaths = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deploymentActionSlug = value.deploymentActionSlug;
      this._excludeFilePaths = value.excludeFilePaths;
      this._gitDependencyName = value.gitDependencyName;
      this._includeFilePaths = value.includeFilePaths;
    }
  }

  // deployment_action_slug - computed: false, optional: false, required: true
  private _deploymentActionSlug?: string; 
  public get deploymentActionSlug() {
    return this.getStringAttribute('deployment_action_slug');
  }
  public set deploymentActionSlug(value: string) {
    this._deploymentActionSlug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentActionSlugInput() {
    return this._deploymentActionSlug;
  }

  // exclude_file_paths - computed: false, optional: false, required: true
  private _excludeFilePaths?: string[]; 
  public get excludeFilePaths() {
    return this.getListAttribute('exclude_file_paths');
  }
  public set excludeFilePaths(value: string[]) {
    this._excludeFilePaths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeFilePathsInput() {
    return this._excludeFilePaths;
  }

  // git_dependency_name - computed: false, optional: false, required: true
  private _gitDependencyName?: string; 
  public get gitDependencyName() {
    return this.getStringAttribute('git_dependency_name');
  }
  public set gitDependencyName(value: string) {
    this._gitDependencyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gitDependencyNameInput() {
    return this._gitDependencyName;
  }

  // include_file_paths - computed: false, optional: false, required: true
  private _includeFilePaths?: string[]; 
  public get includeFilePaths() {
    return this.getListAttribute('include_file_paths');
  }
  public set includeFilePaths(value: string[]) {
    this._includeFilePaths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeFilePathsInput() {
    return this._includeFilePaths;
  }
}

export class GitTriggerSourcesList extends cdktf.ComplexList {
  public internalValue? : GitTriggerSources[] | cdktf.IResolvable

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
  public get(index: number): GitTriggerSourcesOutputReference {
    return new GitTriggerSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/git_trigger octopusdeploy_git_trigger}
*/
export class GitTrigger extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_git_trigger";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GitTrigger resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GitTrigger to import
  * @param importFromId The id of the existing GitTrigger that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/git_trigger#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GitTrigger to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_git_trigger", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/git_trigger octopusdeploy_git_trigger} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GitTriggerConfig
  */
  public constructor(scope: Construct, id: string, config: GitTriggerConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_git_trigger',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '1.5.2',
        providerVersionConstraint: '1.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._channelId = config.channelId;
    this._description = config.description;
    this._isDisabled = config.isDisabled;
    this._name = config.name;
    this._projectId = config.projectId;
    this._sources.internalValue = config.sources;
    this._spaceId = config.spaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // channel_id - computed: false, optional: false, required: true
  private _channelId?: string; 
  public get channelId() {
    return this.getStringAttribute('channel_id');
  }
  public set channelId(value: string) {
    this._channelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelIdInput() {
    return this._channelId;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_disabled - computed: true, optional: true, required: false
  private _isDisabled?: boolean | cdktf.IResolvable; 
  public get isDisabled() {
    return this.getBooleanAttribute('is_disabled');
  }
  public set isDisabled(value: boolean | cdktf.IResolvable) {
    this._isDisabled = value;
  }
  public resetIsDisabled() {
    this._isDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDisabledInput() {
    return this._isDisabled;
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

  // sources - computed: false, optional: false, required: true
  private _sources = new GitTriggerSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: GitTriggerSources[] | cdktf.IResolvable) {
    this._sources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources.internalValue;
  }

  // space_id - computed: true, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      channel_id: cdktf.stringToTerraform(this._channelId),
      description: cdktf.stringToTerraform(this._description),
      is_disabled: cdktf.booleanToTerraform(this._isDisabled),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      sources: cdktf.listMapper(gitTriggerSourcesToTerraform, false)(this._sources.internalValue),
      space_id: cdktf.stringToTerraform(this._spaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      channel_id: {
        value: cdktf.stringToHclTerraform(this._channelId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_disabled: {
        value: cdktf.booleanToHclTerraform(this._isDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      sources: {
        value: cdktf.listMapperHcl(gitTriggerSourcesToHclTerraform, false)(this._sources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GitTriggerSourcesList",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
