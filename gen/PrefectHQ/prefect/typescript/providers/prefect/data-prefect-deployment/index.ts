// https://registry.terraform.io/providers/prefecthq/prefect/2.91.0/docs/data-sources/deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPrefectDeploymentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account ID (UUID), defaults to the account set in the provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.91.0/docs/data-sources/deployment#account_id DataPrefectDeployment#account_id}
  */
  readonly accountId?: string;
  /**
  * Flow name associated with the deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.91.0/docs/data-sources/deployment#flow_name DataPrefectDeployment#flow_name}
  */
  readonly flowName?: string;
  /**
  * Deployment ID (UUID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.91.0/docs/data-sources/deployment#id DataPrefectDeployment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.91.0/docs/data-sources/deployment#name DataPrefectDeployment#name}
  */
  readonly name?: string;
  /**
  * Workspace ID (UUID) to associate deployment to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.91.0/docs/data-sources/deployment#workspace_id DataPrefectDeployment#workspace_id}
  */
  readonly workspaceId?: string;
}
export interface DataPrefectDeploymentConcurrencyOptions {
}

export function dataPrefectDeploymentConcurrencyOptionsToTerraform(struct?: DataPrefectDeploymentConcurrencyOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPrefectDeploymentConcurrencyOptionsToHclTerraform(struct?: DataPrefectDeploymentConcurrencyOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPrefectDeploymentConcurrencyOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPrefectDeploymentConcurrencyOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPrefectDeploymentConcurrencyOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // collision_strategy - computed: true, optional: false, required: false
  public get collisionStrategy() {
    return this.getStringAttribute('collision_strategy');
  }
}
export interface DataPrefectDeploymentPullSteps {
}

export function dataPrefectDeploymentPullStepsToTerraform(struct?: DataPrefectDeploymentPullSteps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPrefectDeploymentPullStepsToHclTerraform(struct?: DataPrefectDeploymentPullSteps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPrefectDeploymentPullStepsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPrefectDeploymentPullSteps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPrefectDeploymentPullSteps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_token - computed: true, optional: false, required: false
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }

  // branch - computed: true, optional: false, required: false
  public get branch() {
    return this.getStringAttribute('branch');
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // credentials - computed: true, optional: false, required: false
  public get credentials() {
    return this.getStringAttribute('credentials');
  }

  // directory - computed: true, optional: false, required: false
  public get directory() {
    return this.getStringAttribute('directory');
  }

  // folder - computed: true, optional: false, required: false
  public get folder() {
    return this.getStringAttribute('folder');
  }

  // include_submodules - computed: true, optional: false, required: false
  public get includeSubmodules() {
    return this.getBooleanAttribute('include_submodules');
  }

  // repository - computed: true, optional: false, required: false
  public get repository() {
    return this.getStringAttribute('repository');
  }

  // requires - computed: true, optional: false, required: false
  public get requires() {
    return this.getStringAttribute('requires');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataPrefectDeploymentPullStepsList extends cdktf.ComplexList {

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
  public get(index: number): DataPrefectDeploymentPullStepsOutputReference {
    return new DataPrefectDeploymentPullStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/prefecthq/prefect/2.91.0/docs/data-sources/deployment prefect_deployment}
*/
export class DataPrefectDeployment extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prefect_deployment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPrefectDeployment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPrefectDeployment to import
  * @param importFromId The id of the existing DataPrefectDeployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/prefecthq/prefect/2.91.0/docs/data-sources/deployment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPrefectDeployment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prefect_deployment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prefecthq/prefect/2.91.0/docs/data-sources/deployment prefect_deployment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPrefectDeploymentConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPrefectDeploymentConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'prefect_deployment',
      terraformGeneratorMetadata: {
        providerName: 'prefect',
        providerVersion: '2.91.0',
        providerVersionConstraint: '2.91.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._flowName = config.flowName;
    this._id = config.id;
    this._name = config.name;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // concurrency_limit - computed: true, optional: false, required: false
  public get concurrencyLimit() {
    return this.getNumberAttribute('concurrency_limit');
  }

  // concurrency_options - computed: true, optional: false, required: false
  private _concurrencyOptions = new DataPrefectDeploymentConcurrencyOptionsOutputReference(this, "concurrency_options");
  public get concurrencyOptions() {
    return this._concurrencyOptions;
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enforce_parameter_schema - computed: true, optional: false, required: false
  public get enforceParameterSchema() {
    return this.getBooleanAttribute('enforce_parameter_schema');
  }

  // entrypoint - computed: true, optional: false, required: false
  public get entrypoint() {
    return this.getStringAttribute('entrypoint');
  }

  // flow_id - computed: true, optional: false, required: false
  public get flowId() {
    return this.getStringAttribute('flow_id');
  }

  // flow_name - computed: true, optional: true, required: false
  private _flowName?: string; 
  public get flowName() {
    return this.getStringAttribute('flow_name');
  }
  public set flowName(value: string) {
    this._flowName = value;
  }
  public resetFlowName() {
    this._flowName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowNameInput() {
    return this._flowName;
  }

  // global_concurrency_limit_id - computed: true, optional: false, required: false
  public get globalConcurrencyLimitId() {
    return this.getStringAttribute('global_concurrency_limit_id');
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

  // job_variables - computed: true, optional: false, required: false
  public get jobVariables() {
    return this.getStringAttribute('job_variables');
  }

  // manifest_path - computed: true, optional: false, required: false
  public get manifestPath() {
    return this.getStringAttribute('manifest_path');
  }

  // name - computed: true, optional: true, required: false
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

  // parameter_openapi_schema - computed: true, optional: false, required: false
  public get parameterOpenapiSchema() {
    return this.getStringAttribute('parameter_openapi_schema');
  }

  // parameters - computed: true, optional: false, required: false
  public get parameters() {
    return this.getStringAttribute('parameters');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // paused - computed: true, optional: false, required: false
  public get paused() {
    return this.getBooleanAttribute('paused');
  }

  // pull_steps - computed: true, optional: false, required: false
  private _pullSteps = new DataPrefectDeploymentPullStepsList(this, "pull_steps", false);
  public get pullSteps() {
    return this._pullSteps;
  }

  // storage_document_id - computed: true, optional: false, required: false
  public get storageDocumentId() {
    return this.getStringAttribute('storage_document_id');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // work_pool_name - computed: true, optional: false, required: false
  public get workPoolName() {
    return this.getStringAttribute('work_pool_name');
  }

  // work_queue_name - computed: true, optional: false, required: false
  public get workQueueName() {
    return this.getStringAttribute('work_queue_name');
  }

  // workspace_id - computed: true, optional: true, required: false
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  public resetWorkspaceId() {
    this._workspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      flow_name: cdktf.stringToTerraform(this._flowName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flow_name: {
        value: cdktf.stringToHclTerraform(this._flowName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
