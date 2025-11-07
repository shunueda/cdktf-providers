// https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/project_versioning_strategy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectVersioningStrategyAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Donor Packages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/project_versioning_strategy#donor_package ProjectVersioningStrategyA#donor_package}
  */
  readonly donorPackage?: ProjectVersioningStrategyDonorPackageA;
  /**
  * The associated donor package step ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/project_versioning_strategy#donor_package_step_id ProjectVersioningStrategyA#donor_package_step_id}
  */
  readonly donorPackageStepId?: string;
  /**
  * The associated project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/project_versioning_strategy#project_id ProjectVersioningStrategyA#project_id}
  */
  readonly projectId: string;
  /**
  * Space ID of the associated project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/project_versioning_strategy#space_id ProjectVersioningStrategyA#space_id}
  */
  readonly spaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/project_versioning_strategy#template ProjectVersioningStrategyA#template}
  */
  readonly template?: string;
}
export interface ProjectVersioningStrategyDonorPackageA {
  /**
  * Deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/project_versioning_strategy#deployment_action ProjectVersioningStrategyA#deployment_action}
  */
  readonly deploymentAction: string;
  /**
  * Package reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/project_versioning_strategy#package_reference ProjectVersioningStrategyA#package_reference}
  */
  readonly packageReference: string;
}

export function projectVersioningStrategyDonorPackageAToTerraform(struct?: ProjectVersioningStrategyDonorPackageA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deployment_action: cdktf.stringToTerraform(struct!.deploymentAction),
    package_reference: cdktf.stringToTerraform(struct!.packageReference),
  }
}


export function projectVersioningStrategyDonorPackageAToHclTerraform(struct?: ProjectVersioningStrategyDonorPackageA | cdktf.IResolvable): any {
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

export class ProjectVersioningStrategyDonorPackageAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ProjectVersioningStrategyDonorPackageA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ProjectVersioningStrategyDonorPackageA | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/project_versioning_strategy octopusdeploy_project_versioning_strategy}
*/
export class ProjectVersioningStrategyA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_project_versioning_strategy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectVersioningStrategyA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectVersioningStrategyA to import
  * @param importFromId The id of the existing ProjectVersioningStrategyA that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/project_versioning_strategy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectVersioningStrategyA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_project_versioning_strategy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/project_versioning_strategy octopusdeploy_project_versioning_strategy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectVersioningStrategyAConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectVersioningStrategyAConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_project_versioning_strategy',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '0.43.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._donorPackage.internalValue = config.donorPackage;
    this._donorPackageStepId = config.donorPackageStepId;
    this._projectId = config.projectId;
    this._spaceId = config.spaceId;
    this._template = config.template;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // donor_package - computed: false, optional: true, required: false
  private _donorPackage = new ProjectVersioningStrategyDonorPackageAOutputReference(this, "donor_package");
  public get donorPackage() {
    return this._donorPackage;
  }
  public putDonorPackage(value: ProjectVersioningStrategyDonorPackageA) {
    this._donorPackage.internalValue = value;
  }
  public resetDonorPackage() {
    this._donorPackage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get donorPackageInput() {
    return this._donorPackage.internalValue;
  }

  // donor_package_step_id - computed: false, optional: true, required: false
  private _donorPackageStepId?: string; 
  public get donorPackageStepId() {
    return this.getStringAttribute('donor_package_step_id');
  }
  public set donorPackageStepId(value: string) {
    this._donorPackageStepId = value;
  }
  public resetDonorPackageStepId() {
    this._donorPackageStepId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get donorPackageStepIdInput() {
    return this._donorPackageStepId;
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

  // space_id - computed: false, optional: true, required: false
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

  // template - computed: true, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      donor_package: projectVersioningStrategyDonorPackageAToTerraform(this._donorPackage.internalValue),
      donor_package_step_id: cdktf.stringToTerraform(this._donorPackageStepId),
      project_id: cdktf.stringToTerraform(this._projectId),
      space_id: cdktf.stringToTerraform(this._spaceId),
      template: cdktf.stringToTerraform(this._template),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      donor_package: {
        value: projectVersioningStrategyDonorPackageAToHclTerraform(this._donorPackage.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ProjectVersioningStrategyDonorPackageA",
      },
      donor_package_step_id: {
        value: cdktf.stringToHclTerraform(this._donorPackageStepId),
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
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template: {
        value: cdktf.stringToHclTerraform(this._template),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
