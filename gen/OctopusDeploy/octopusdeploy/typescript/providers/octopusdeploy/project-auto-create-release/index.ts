// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/project_auto_create_release
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectAutoCreateReleaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the channel in which triggered releases will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/project_auto_create_release#channel_id ProjectAutoCreateRelease#channel_id}
  */
  readonly channelId: string;
  /**
  * The ID of the deployment process to enforce dependency on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/project_auto_create_release#deployment_process_id ProjectAutoCreateRelease#deployment_process_id}
  */
  readonly deploymentProcessId: string;
  /**
  * The ID of the deployment step containing the package for release creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/project_auto_create_release#release_creation_package_step_id ProjectAutoCreateRelease#release_creation_package_step_id}
  */
  readonly releaseCreationPackageStepId?: string;
  /**
  * The space ID where the project is located. If not specified, the default space will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/project_auto_create_release#space_id ProjectAutoCreateRelease#space_id}
  */
  readonly spaceId?: string;
  /**
  * release_creation_package block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/project_auto_create_release#release_creation_package ProjectAutoCreateRelease#release_creation_package}
  */
  readonly releaseCreationPackage?: ProjectAutoCreateReleaseReleaseCreationPackage[] | cdktf.IResolvable;
}
export interface ProjectAutoCreateReleaseReleaseCreationPackage {
  /**
  * The name of the deployment action that contains the package reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/project_auto_create_release#deployment_action ProjectAutoCreateRelease#deployment_action}
  */
  readonly deploymentAction: string;
  /**
  * The name of the package reference within the deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/project_auto_create_release#package_reference ProjectAutoCreateRelease#package_reference}
  */
  readonly packageReference: string;
}

export function projectAutoCreateReleaseReleaseCreationPackageToTerraform(struct?: ProjectAutoCreateReleaseReleaseCreationPackage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deployment_action: cdktf.stringToTerraform(struct!.deploymentAction),
    package_reference: cdktf.stringToTerraform(struct!.packageReference),
  }
}


export function projectAutoCreateReleaseReleaseCreationPackageToHclTerraform(struct?: ProjectAutoCreateReleaseReleaseCreationPackage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deployment_action: {
      value: cdktf.stringToHclTerraform(struct!.deploymentAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    package_reference: {
      value: cdktf.stringToHclTerraform(struct!.packageReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectAutoCreateReleaseReleaseCreationPackageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectAutoCreateReleaseReleaseCreationPackage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deploymentAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentAction = this._deploymentAction;
    }
    if (this._packageReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageReference = this._packageReference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectAutoCreateReleaseReleaseCreationPackage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deploymentAction = undefined;
      this._packageReference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deploymentAction = value.deploymentAction;
      this._packageReference = value.packageReference;
    }
  }

  // deployment_action - computed: false, optional: false, required: true
  private _deploymentAction?: string; 
  public get deploymentAction() {
    return this.getStringAttribute('deployment_action');
  }
  public set deploymentAction(value: string) {
    this._deploymentAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentActionInput() {
    return this._deploymentAction;
  }

  // package_reference - computed: false, optional: false, required: true
  private _packageReference?: string; 
  public get packageReference() {
    return this.getStringAttribute('package_reference');
  }
  public set packageReference(value: string) {
    this._packageReference = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageReferenceInput() {
    return this._packageReference;
  }
}

export class ProjectAutoCreateReleaseReleaseCreationPackageList extends cdktf.ComplexList {
  public internalValue? : ProjectAutoCreateReleaseReleaseCreationPackage[] | cdktf.IResolvable

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
  public get(index: number): ProjectAutoCreateReleaseReleaseCreationPackageOutputReference {
    return new ProjectAutoCreateReleaseReleaseCreationPackageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/project_auto_create_release octopusdeploy_project_auto_create_release}
*/
export class ProjectAutoCreateRelease extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_project_auto_create_release";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectAutoCreateRelease resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectAutoCreateRelease to import
  * @param importFromId The id of the existing ProjectAutoCreateRelease that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/project_auto_create_release#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectAutoCreateRelease to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_project_auto_create_release", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/project_auto_create_release octopusdeploy_project_auto_create_release} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectAutoCreateReleaseConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectAutoCreateReleaseConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_project_auto_create_release',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '1.4.0',
        providerVersionConstraint: '1.4.0'
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
    this._deploymentProcessId = config.deploymentProcessId;
    this._releaseCreationPackageStepId = config.releaseCreationPackageStepId;
    this._spaceId = config.spaceId;
    this._releaseCreationPackage.internalValue = config.releaseCreationPackage;
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

  // deployment_process_id - computed: false, optional: false, required: true
  private _deploymentProcessId?: string; 
  public get deploymentProcessId() {
    return this.getStringAttribute('deployment_process_id');
  }
  public set deploymentProcessId(value: string) {
    this._deploymentProcessId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentProcessIdInput() {
    return this._deploymentProcessId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // release_creation_package_step_id - computed: true, optional: true, required: false
  private _releaseCreationPackageStepId?: string; 
  public get releaseCreationPackageStepId() {
    return this.getStringAttribute('release_creation_package_step_id');
  }
  public set releaseCreationPackageStepId(value: string) {
    this._releaseCreationPackageStepId = value;
  }
  public resetReleaseCreationPackageStepId() {
    this._releaseCreationPackageStepId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseCreationPackageStepIdInput() {
    return this._releaseCreationPackageStepId;
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

  // release_creation_package - computed: false, optional: true, required: false
  private _releaseCreationPackage = new ProjectAutoCreateReleaseReleaseCreationPackageList(this, "release_creation_package", false);
  public get releaseCreationPackage() {
    return this._releaseCreationPackage;
  }
  public putReleaseCreationPackage(value: ProjectAutoCreateReleaseReleaseCreationPackage[] | cdktf.IResolvable) {
    this._releaseCreationPackage.internalValue = value;
  }
  public resetReleaseCreationPackage() {
    this._releaseCreationPackage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseCreationPackageInput() {
    return this._releaseCreationPackage.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      channel_id: cdktf.stringToTerraform(this._channelId),
      deployment_process_id: cdktf.stringToTerraform(this._deploymentProcessId),
      release_creation_package_step_id: cdktf.stringToTerraform(this._releaseCreationPackageStepId),
      space_id: cdktf.stringToTerraform(this._spaceId),
      release_creation_package: cdktf.listMapper(projectAutoCreateReleaseReleaseCreationPackageToTerraform, true)(this._releaseCreationPackage.internalValue),
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
      deployment_process_id: {
        value: cdktf.stringToHclTerraform(this._deploymentProcessId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      release_creation_package_step_id: {
        value: cdktf.stringToHclTerraform(this._releaseCreationPackageStepId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      release_creation_package: {
        value: cdktf.listMapperHcl(projectAutoCreateReleaseReleaseCreationPackageToHclTerraform, true)(this._releaseCreationPackage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProjectAutoCreateReleaseReleaseCreationPackageList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
