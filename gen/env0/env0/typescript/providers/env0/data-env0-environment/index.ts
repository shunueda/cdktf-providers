// https://registry.terraform.io/providers/env0/env0/1.29.6/docs/data-sources/environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEnv0EnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * set to 'true' to exclude archived environments when getting an environment by name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/data-sources/environment#exclude_archived DataEnv0Environment#exclude_archived}
  */
  readonly excludeArchived?: boolean | cdktf.IResolvable;
  /**
  * the environment's id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/data-sources/environment#id DataEnv0Environment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * name of the environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/data-sources/environment#name DataEnv0Environment#name}
  */
  readonly name?: string;
  /**
  * project id of the environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/data-sources/environment#project_id DataEnv0Environment#project_id}
  */
  readonly projectId?: string;
}
export interface DataEnv0EnvironmentSubEnvironmentConfiguration {
}

export function dataEnv0EnvironmentSubEnvironmentConfigurationToTerraform(struct?: DataEnv0EnvironmentSubEnvironmentConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEnv0EnvironmentSubEnvironmentConfigurationToHclTerraform(struct?: DataEnv0EnvironmentSubEnvironmentConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEnv0EnvironmentSubEnvironmentConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEnv0EnvironmentSubEnvironmentConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEnv0EnvironmentSubEnvironmentConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataEnv0EnvironmentSubEnvironmentConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataEnv0EnvironmentSubEnvironmentConfigurationOutputReference {
    return new DataEnv0EnvironmentSubEnvironmentConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/data-sources/environment env0_environment}
*/
export class DataEnv0Environment extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "env0_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEnv0Environment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEnv0Environment to import
  * @param importFromId The id of the existing DataEnv0Environment that should be imported. Refer to the {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/data-sources/environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEnv0Environment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "env0_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/data-sources/environment env0_environment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEnv0EnvironmentConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataEnv0EnvironmentConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'env0_environment',
      terraformGeneratorMetadata: {
        providerName: 'env0',
        providerVersion: '1.29.6',
        providerVersionConstraint: '1.29.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._excludeArchived = config.excludeArchived;
    this._id = config.id;
    this._name = config.name;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // approve_plan_automatically - computed: true, optional: false, required: false
  public get approvePlanAutomatically() {
    return this.getBooleanAttribute('approve_plan_automatically');
  }

  // auto_deploy_on_path_changes_only - computed: true, optional: false, required: false
  public get autoDeployOnPathChangesOnly() {
    return this.getBooleanAttribute('auto_deploy_on_path_changes_only');
  }

  // bitbucket_client_key - computed: true, optional: false, required: false
  public get bitbucketClientKey() {
    return this.getStringAttribute('bitbucket_client_key');
  }

  // deploy_on_push - computed: true, optional: false, required: false
  public get deployOnPush() {
    return this.getBooleanAttribute('deploy_on_push');
  }

  // deployment_id - computed: true, optional: false, required: false
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }

  // exclude_archived - computed: false, optional: true, required: false
  private _excludeArchived?: boolean | cdktf.IResolvable; 
  public get excludeArchived() {
    return this.getBooleanAttribute('exclude_archived');
  }
  public set excludeArchived(value: boolean | cdktf.IResolvable) {
    this._excludeArchived = value;
  }
  public resetExcludeArchived() {
    this._excludeArchived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeArchivedInput() {
    return this._excludeArchived;
  }

  // github_installation_id - computed: true, optional: false, required: false
  public get githubInstallationId() {
    return this.getNumberAttribute('github_installation_id');
  }

  // id - computed: false, optional: true, required: false
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // output - computed: true, optional: false, required: false
  public get output() {
    return this.getStringAttribute('output');
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getStringAttribute('revision');
  }

  // run_plan_on_pull_requests - computed: true, optional: false, required: false
  public get runPlanOnPullRequests() {
    return this.getBooleanAttribute('run_plan_on_pull_requests');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // sub_environment_configuration - computed: true, optional: false, required: false
  private _subEnvironmentConfiguration = new DataEnv0EnvironmentSubEnvironmentConfigurationList(this, "sub_environment_configuration", false);
  public get subEnvironmentConfiguration() {
    return this._subEnvironmentConfiguration;
  }

  // template_id - computed: true, optional: false, required: false
  public get templateId() {
    return this.getStringAttribute('template_id');
  }

  // token_id - computed: true, optional: false, required: false
  public get tokenId() {
    return this.getStringAttribute('token_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      exclude_archived: cdktf.booleanToTerraform(this._excludeArchived),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      exclude_archived: {
        value: cdktf.booleanToHclTerraform(this._excludeArchived),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
