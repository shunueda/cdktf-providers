// https://registry.terraform.io/providers/prefecthq/prefect/2.90.0/docs/data-sources/worker_metadata
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPrefectWorkerMetadataConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account ID (UUID), defaults to the account set in the provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.0/docs/data-sources/worker_metadata#account_id DataPrefectWorkerMetadata#account_id}
  */
  readonly accountId?: string;
  /**
  * Workspace ID (UUID), defaults to the workspace set in the provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.0/docs/data-sources/worker_metadata#workspace_id DataPrefectWorkerMetadata#workspace_id}
  */
  readonly workspaceId?: string;
}
export interface DataPrefectWorkerMetadataBaseJobConfigs {
}

export function dataPrefectWorkerMetadataBaseJobConfigsToTerraform(struct?: DataPrefectWorkerMetadataBaseJobConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPrefectWorkerMetadataBaseJobConfigsToHclTerraform(struct?: DataPrefectWorkerMetadataBaseJobConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPrefectWorkerMetadataBaseJobConfigsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPrefectWorkerMetadataBaseJobConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPrefectWorkerMetadataBaseJobConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // azure_container_instances - computed: true, optional: false, required: false
  public get azureContainerInstances() {
    return this.getStringAttribute('azure_container_instances');
  }

  // azure_container_instances_push - computed: true, optional: false, required: false
  public get azureContainerInstancesPush() {
    return this.getStringAttribute('azure_container_instances_push');
  }

  // cloud_run - computed: true, optional: false, required: false
  public get cloudRun() {
    return this.getStringAttribute('cloud_run');
  }

  // cloud_run_push - computed: true, optional: false, required: false
  public get cloudRunPush() {
    return this.getStringAttribute('cloud_run_push');
  }

  // cloud_run_v2 - computed: true, optional: false, required: false
  public get cloudRunV2() {
    return this.getStringAttribute('cloud_run_v2');
  }

  // cloud_run_v2_push - computed: true, optional: false, required: false
  public get cloudRunV2Push() {
    return this.getStringAttribute('cloud_run_v2_push');
  }

  // docker - computed: true, optional: false, required: false
  public get docker() {
    return this.getStringAttribute('docker');
  }

  // ecs - computed: true, optional: false, required: false
  public get ecs() {
    return this.getStringAttribute('ecs');
  }

  // ecs_push - computed: true, optional: false, required: false
  public get ecsPush() {
    return this.getStringAttribute('ecs_push');
  }

  // kubernetes - computed: true, optional: false, required: false
  public get kubernetes() {
    return this.getStringAttribute('kubernetes');
  }

  // modal_push - computed: true, optional: false, required: false
  public get modalPush() {
    return this.getStringAttribute('modal_push');
  }

  // prefect_agent - computed: true, optional: false, required: false
  public get prefectAgent() {
    return this.getStringAttribute('prefect_agent');
  }

  // prefect_managed - computed: true, optional: false, required: false
  public get prefectManaged() {
    return this.getStringAttribute('prefect_managed');
  }

  // process - computed: true, optional: false, required: false
  public get process() {
    return this.getStringAttribute('process');
  }

  // vertex_ai - computed: true, optional: false, required: false
  public get vertexAi() {
    return this.getStringAttribute('vertex_ai');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.0/docs/data-sources/worker_metadata prefect_worker_metadata}
*/
export class DataPrefectWorkerMetadata extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prefect_worker_metadata";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPrefectWorkerMetadata resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPrefectWorkerMetadata to import
  * @param importFromId The id of the existing DataPrefectWorkerMetadata that should be imported. Refer to the {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.0/docs/data-sources/worker_metadata#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPrefectWorkerMetadata to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prefect_worker_metadata", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.0/docs/data-sources/worker_metadata prefect_worker_metadata} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPrefectWorkerMetadataConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPrefectWorkerMetadataConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'prefect_worker_metadata',
      terraformGeneratorMetadata: {
        providerName: 'prefect',
        providerVersion: '2.90.0',
        providerVersionConstraint: '2.90.0'
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
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
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

  // base_job_configs - computed: true, optional: false, required: false
  private _baseJobConfigs = new DataPrefectWorkerMetadataBaseJobConfigsOutputReference(this, "base_job_configs");
  public get baseJobConfigs() {
    return this._baseJobConfigs;
  }

  // workspace_id - computed: false, optional: true, required: false
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
