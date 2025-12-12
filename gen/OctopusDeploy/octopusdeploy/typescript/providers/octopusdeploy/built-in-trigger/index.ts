// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/built_in_trigger
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BuiltInTriggerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the channel in which triggered release will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/built_in_trigger#channel_id BuiltInTrigger#channel_id}
  */
  readonly channelId: string;
  /**
  * The ID of the project the trigger will be attached to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/built_in_trigger#project_id BuiltInTrigger#project_id}
  */
  readonly projectId: string;
  /**
  * Combination of deployment action and package references.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/built_in_trigger#release_creation_package BuiltInTrigger#release_creation_package}
  */
  readonly releaseCreationPackage: BuiltInTriggerReleaseCreationPackage;
  /**
  * The package step ID trigger will be listening.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/built_in_trigger#release_creation_package_step_id BuiltInTrigger#release_creation_package_step_id}
  */
  readonly releaseCreationPackageStepId?: string;
  /**
  * Space ID of the associated project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/built_in_trigger#space_id BuiltInTrigger#space_id}
  */
  readonly spaceId?: string;
}
export interface BuiltInTriggerReleaseCreationPackage {
  /**
  * Deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/built_in_trigger#deployment_action BuiltInTrigger#deployment_action}
  */
  readonly deploymentAction?: string;
  /**
  * Package reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/built_in_trigger#package_reference BuiltInTrigger#package_reference}
  */
  readonly packageReference?: string;
}

export function builtInTriggerReleaseCreationPackageToTerraform(struct?: BuiltInTriggerReleaseCreationPackage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deployment_action: cdktf.stringToTerraform(struct!.deploymentAction),
    package_reference: cdktf.stringToTerraform(struct!.packageReference),
  }
}


export function builtInTriggerReleaseCreationPackageToHclTerraform(struct?: BuiltInTriggerReleaseCreationPackage | cdktf.IResolvable): any {
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

export class BuiltInTriggerReleaseCreationPackageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BuiltInTriggerReleaseCreationPackage | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BuiltInTriggerReleaseCreationPackage | cdktf.IResolvable | undefined) {
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

  // deployment_action - computed: false, optional: true, required: false
  private _deploymentAction?: string; 
  public get deploymentAction() {
    return this.getStringAttribute('deployment_action');
  }
  public set deploymentAction(value: string) {
    this._deploymentAction = value;
  }
  public resetDeploymentAction() {
    this._deploymentAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentActionInput() {
    return this._deploymentAction;
  }

  // package_reference - computed: false, optional: true, required: false
  private _packageReference?: string; 
  public get packageReference() {
    return this.getStringAttribute('package_reference');
  }
  public set packageReference(value: string) {
    this._packageReference = value;
  }
  public resetPackageReference() {
    this._packageReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageReferenceInput() {
    return this._packageReference;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/built_in_trigger octopusdeploy_built_in_trigger}
*/
export class BuiltInTrigger extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_built_in_trigger";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BuiltInTrigger resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BuiltInTrigger to import
  * @param importFromId The id of the existing BuiltInTrigger that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/built_in_trigger#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BuiltInTrigger to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_built_in_trigger", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/built_in_trigger octopusdeploy_built_in_trigger} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BuiltInTriggerConfig
  */
  public constructor(scope: Construct, id: string, config: BuiltInTriggerConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_built_in_trigger',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
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
    this._projectId = config.projectId;
    this._releaseCreationPackage.internalValue = config.releaseCreationPackage;
    this._releaseCreationPackageStepId = config.releaseCreationPackageStepId;
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

  // release_creation_package - computed: false, optional: false, required: true
  private _releaseCreationPackage = new BuiltInTriggerReleaseCreationPackageOutputReference(this, "release_creation_package");
  public get releaseCreationPackage() {
    return this._releaseCreationPackage;
  }
  public putReleaseCreationPackage(value: BuiltInTriggerReleaseCreationPackage) {
    this._releaseCreationPackage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseCreationPackageInput() {
    return this._releaseCreationPackage.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      channel_id: cdktf.stringToTerraform(this._channelId),
      project_id: cdktf.stringToTerraform(this._projectId),
      release_creation_package: builtInTriggerReleaseCreationPackageToTerraform(this._releaseCreationPackage.internalValue),
      release_creation_package_step_id: cdktf.stringToTerraform(this._releaseCreationPackageStepId),
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      release_creation_package: {
        value: builtInTriggerReleaseCreationPackageToHclTerraform(this._releaseCreationPackage.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BuiltInTriggerReleaseCreationPackage",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
