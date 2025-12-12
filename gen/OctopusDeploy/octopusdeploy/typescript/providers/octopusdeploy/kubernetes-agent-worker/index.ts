// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/kubernetes_agent_worker
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesAgentWorkerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The communication mode used by the Kubernetes agent to communicate with Octopus Server. Currently, the only supported value is 'Polling'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/kubernetes_agent_worker#communication_mode KubernetesAgentWorker#communication_mode}
  */
  readonly communicationMode?: string;
  /**
  * The unique ID for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/kubernetes_agent_worker#id KubernetesAgentWorker#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether the Kubernetes agent is disabled. If the agent is disabled, it will not be included in any deployments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/kubernetes_agent_worker#is_disabled KubernetesAgentWorker#is_disabled}
  */
  readonly isDisabled?: boolean | cdktf.IResolvable;
  /**
  * Optional ID of the machine policy that the Kubernetes agent will use. If not provided the default machine policy will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/kubernetes_agent_worker#machine_policy_id KubernetesAgentWorker#machine_policy_id}
  */
  readonly machinePolicyId?: string;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/kubernetes_agent_worker#name KubernetesAgentWorker#name}
  */
  readonly name: string;
  /**
  * The space ID associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/kubernetes_agent_worker#space_id KubernetesAgentWorker#space_id}
  */
  readonly spaceId?: string;
  /**
  * The thumbprint of the Kubernetes agent's certificate used by server to verify the identity of the agent. This is the same thumbprint that was used when installing the agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/kubernetes_agent_worker#thumbprint KubernetesAgentWorker#thumbprint}
  */
  readonly thumbprint: string;
  /**
  * If enabled the Kubernetes agent will not automatically upgrade and will stay on the currently installed version, even if the associated machine policy is configured to automatically upgrade.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/kubernetes_agent_worker#upgrade_locked KubernetesAgentWorker#upgrade_locked}
  */
  readonly upgradeLocked?: boolean | cdktf.IResolvable;
  /**
  * The URI of the Kubernetes agent's used by the server to queue messages. This is the same subscription uri that was used when installing the agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/kubernetes_agent_worker#uri KubernetesAgentWorker#uri}
  */
  readonly uri: string;
  /**
  * A list of worker pool Ids specifying the pools in which this worker belongs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/kubernetes_agent_worker#worker_pool_ids KubernetesAgentWorker#worker_pool_ids}
  */
  readonly workerPoolIds: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/kubernetes_agent_worker octopusdeploy_kubernetes_agent_worker}
*/
export class KubernetesAgentWorker extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_kubernetes_agent_worker";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KubernetesAgentWorker resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KubernetesAgentWorker to import
  * @param importFromId The id of the existing KubernetesAgentWorker that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/kubernetes_agent_worker#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KubernetesAgentWorker to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_kubernetes_agent_worker", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/kubernetes_agent_worker octopusdeploy_kubernetes_agent_worker} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesAgentWorkerConfig
  */
  public constructor(scope: Construct, id: string, config: KubernetesAgentWorkerConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_kubernetes_agent_worker',
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
    this._communicationMode = config.communicationMode;
    this._id = config.id;
    this._isDisabled = config.isDisabled;
    this._machinePolicyId = config.machinePolicyId;
    this._name = config.name;
    this._spaceId = config.spaceId;
    this._thumbprint = config.thumbprint;
    this._upgradeLocked = config.upgradeLocked;
    this._uri = config.uri;
    this._workerPoolIds = config.workerPoolIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_helm_release_name - computed: true, optional: false, required: false
  public get agentHelmReleaseName() {
    return this.getStringAttribute('agent_helm_release_name');
  }

  // agent_kubernetes_namespace - computed: true, optional: false, required: false
  public get agentKubernetesNamespace() {
    return this.getStringAttribute('agent_kubernetes_namespace');
  }

  // agent_tentacle_version - computed: true, optional: false, required: false
  public get agentTentacleVersion() {
    return this.getStringAttribute('agent_tentacle_version');
  }

  // agent_upgrade_status - computed: true, optional: false, required: false
  public get agentUpgradeStatus() {
    return this.getStringAttribute('agent_upgrade_status');
  }

  // agent_version - computed: true, optional: false, required: false
  public get agentVersion() {
    return this.getStringAttribute('agent_version');
  }

  // communication_mode - computed: false, optional: true, required: false
  private _communicationMode?: string; 
  public get communicationMode() {
    return this.getStringAttribute('communication_mode');
  }
  public set communicationMode(value: string) {
    this._communicationMode = value;
  }
  public resetCommunicationMode() {
    this._communicationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communicationModeInput() {
    return this._communicationMode;
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

  // is_disabled - computed: false, optional: true, required: false
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

  // machine_policy_id - computed: true, optional: true, required: false
  private _machinePolicyId?: string; 
  public get machinePolicyId() {
    return this.getStringAttribute('machine_policy_id');
  }
  public set machinePolicyId(value: string) {
    this._machinePolicyId = value;
  }
  public resetMachinePolicyId() {
    this._machinePolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machinePolicyIdInput() {
    return this._machinePolicyId;
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

  // thumbprint - computed: false, optional: false, required: true
  private _thumbprint?: string; 
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }
  public set thumbprint(value: string) {
    this._thumbprint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbprintInput() {
    return this._thumbprint;
  }

  // upgrade_locked - computed: false, optional: true, required: false
  private _upgradeLocked?: boolean | cdktf.IResolvable; 
  public get upgradeLocked() {
    return this.getBooleanAttribute('upgrade_locked');
  }
  public set upgradeLocked(value: boolean | cdktf.IResolvable) {
    this._upgradeLocked = value;
  }
  public resetUpgradeLocked() {
    this._upgradeLocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeLockedInput() {
    return this._upgradeLocked;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }

  // worker_pool_ids - computed: false, optional: false, required: true
  private _workerPoolIds?: string[]; 
  public get workerPoolIds() {
    return this.getListAttribute('worker_pool_ids');
  }
  public set workerPoolIds(value: string[]) {
    this._workerPoolIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workerPoolIdsInput() {
    return this._workerPoolIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      communication_mode: cdktf.stringToTerraform(this._communicationMode),
      id: cdktf.stringToTerraform(this._id),
      is_disabled: cdktf.booleanToTerraform(this._isDisabled),
      machine_policy_id: cdktf.stringToTerraform(this._machinePolicyId),
      name: cdktf.stringToTerraform(this._name),
      space_id: cdktf.stringToTerraform(this._spaceId),
      thumbprint: cdktf.stringToTerraform(this._thumbprint),
      upgrade_locked: cdktf.booleanToTerraform(this._upgradeLocked),
      uri: cdktf.stringToTerraform(this._uri),
      worker_pool_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._workerPoolIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      communication_mode: {
        value: cdktf.stringToHclTerraform(this._communicationMode),
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
      is_disabled: {
        value: cdktf.booleanToHclTerraform(this._isDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      machine_policy_id: {
        value: cdktf.stringToHclTerraform(this._machinePolicyId),
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
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      thumbprint: {
        value: cdktf.stringToHclTerraform(this._thumbprint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upgrade_locked: {
        value: cdktf.booleanToHclTerraform(this._upgradeLocked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      uri: {
        value: cdktf.stringToHclTerraform(this._uri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      worker_pool_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._workerPoolIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
