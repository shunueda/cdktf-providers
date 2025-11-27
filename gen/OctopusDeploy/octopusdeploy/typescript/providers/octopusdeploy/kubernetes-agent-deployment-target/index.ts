// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/kubernetes_agent_deployment_target
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesAgentDeploymentTargetConfig extends cdktf.TerraformMetaArguments {
  /**
  * The communication mode used by the Kubernetes agent to communicate with Octopus Server. Currently, the only supported value is 'Polling'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/kubernetes_agent_deployment_target#communication_mode KubernetesAgentDeploymentTarget#communication_mode}
  */
  readonly communicationMode?: string;
  /**
  * Optional default namespace that will be used when using Kubernetes deployment steps, can be overrides within step configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/kubernetes_agent_deployment_target#default_namespace KubernetesAgentDeploymentTarget#default_namespace}
  */
  readonly defaultNamespace?: string;
  /**
  * A list of environment IDs this Kubernetes agent can deploy to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/kubernetes_agent_deployment_target#environments KubernetesAgentDeploymentTarget#environments}
  */
  readonly environments: string[];
  /**
  * The unique ID for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/kubernetes_agent_deployment_target#id KubernetesAgentDeploymentTarget#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether the Kubernetes agent is disabled. If the agent is disabled, it will not be included in any deployments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/kubernetes_agent_deployment_target#is_disabled KubernetesAgentDeploymentTarget#is_disabled}
  */
  readonly isDisabled?: boolean | cdktf.IResolvable;
  /**
  * Optional ID of the machine policy that the Kubernetes agent will use. If not provided the default machine policy will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/kubernetes_agent_deployment_target#machine_policy_id KubernetesAgentDeploymentTarget#machine_policy_id}
  */
  readonly machinePolicyId?: string;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/kubernetes_agent_deployment_target#name KubernetesAgentDeploymentTarget#name}
  */
  readonly name: string;
  /**
  * A list of target roles that are associated to this Kubernetes agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/kubernetes_agent_deployment_target#roles KubernetesAgentDeploymentTarget#roles}
  */
  readonly roles: string[];
  /**
  * The space ID associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/kubernetes_agent_deployment_target#space_id KubernetesAgentDeploymentTarget#space_id}
  */
  readonly spaceId?: string;
  /**
  * A list of tenant tags associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/kubernetes_agent_deployment_target#tenant_tags KubernetesAgentDeploymentTarget#tenant_tags}
  */
  readonly tenantTags?: string[];
  /**
  * The tenanted deployment mode of the resource. Valid account types are `Untenanted`, `TenantedOrUntenanted`, or `Tenanted`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/kubernetes_agent_deployment_target#tenanted_deployment_participation KubernetesAgentDeploymentTarget#tenanted_deployment_participation}
  */
  readonly tenantedDeploymentParticipation?: string;
  /**
  * A list of tenant IDs associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/kubernetes_agent_deployment_target#tenants KubernetesAgentDeploymentTarget#tenants}
  */
  readonly tenants?: string[];
  /**
  * The thumbprint of the Kubernetes agent's certificate used by server to verify the identity of the agent. This is the same thumbprint that was used when installing the agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/kubernetes_agent_deployment_target#thumbprint KubernetesAgentDeploymentTarget#thumbprint}
  */
  readonly thumbprint: string;
  /**
  * If enabled the Kubernetes agent will not automatically upgrade and will stay on the currently installed version, even if the associated machine policy is configured to automatically upgrade.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/kubernetes_agent_deployment_target#upgrade_locked KubernetesAgentDeploymentTarget#upgrade_locked}
  */
  readonly upgradeLocked?: boolean | cdktf.IResolvable;
  /**
  * The URI of the Kubernetes agent's used by the server to queue messages. This is the same subscription uri that was used when installing the agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/kubernetes_agent_deployment_target#uri KubernetesAgentDeploymentTarget#uri}
  */
  readonly uri: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/kubernetes_agent_deployment_target octopusdeploy_kubernetes_agent_deployment_target}
*/
export class KubernetesAgentDeploymentTarget extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_kubernetes_agent_deployment_target";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KubernetesAgentDeploymentTarget resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KubernetesAgentDeploymentTarget to import
  * @param importFromId The id of the existing KubernetesAgentDeploymentTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/kubernetes_agent_deployment_target#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KubernetesAgentDeploymentTarget to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_kubernetes_agent_deployment_target", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/kubernetes_agent_deployment_target octopusdeploy_kubernetes_agent_deployment_target} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesAgentDeploymentTargetConfig
  */
  public constructor(scope: Construct, id: string, config: KubernetesAgentDeploymentTargetConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_kubernetes_agent_deployment_target',
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
    this._communicationMode = config.communicationMode;
    this._defaultNamespace = config.defaultNamespace;
    this._environments = config.environments;
    this._id = config.id;
    this._isDisabled = config.isDisabled;
    this._machinePolicyId = config.machinePolicyId;
    this._name = config.name;
    this._roles = config.roles;
    this._spaceId = config.spaceId;
    this._tenantTags = config.tenantTags;
    this._tenantedDeploymentParticipation = config.tenantedDeploymentParticipation;
    this._tenants = config.tenants;
    this._thumbprint = config.thumbprint;
    this._upgradeLocked = config.upgradeLocked;
    this._uri = config.uri;
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

  // default_namespace - computed: true, optional: true, required: false
  private _defaultNamespace?: string; 
  public get defaultNamespace() {
    return this.getStringAttribute('default_namespace');
  }
  public set defaultNamespace(value: string) {
    this._defaultNamespace = value;
  }
  public resetDefaultNamespace() {
    this._defaultNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultNamespaceInput() {
    return this._defaultNamespace;
  }

  // environments - computed: false, optional: false, required: true
  private _environments?: string[]; 
  public get environments() {
    return this.getListAttribute('environments');
  }
  public set environments(value: string[]) {
    this._environments = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentsInput() {
    return this._environments;
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

  // roles - computed: false, optional: false, required: true
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
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

  // tenant_tags - computed: true, optional: true, required: false
  private _tenantTags?: string[]; 
  public get tenantTags() {
    return this.getListAttribute('tenant_tags');
  }
  public set tenantTags(value: string[]) {
    this._tenantTags = value;
  }
  public resetTenantTags() {
    this._tenantTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantTagsInput() {
    return this._tenantTags;
  }

  // tenanted_deployment_participation - computed: true, optional: true, required: false
  private _tenantedDeploymentParticipation?: string; 
  public get tenantedDeploymentParticipation() {
    return this.getStringAttribute('tenanted_deployment_participation');
  }
  public set tenantedDeploymentParticipation(value: string) {
    this._tenantedDeploymentParticipation = value;
  }
  public resetTenantedDeploymentParticipation() {
    this._tenantedDeploymentParticipation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantedDeploymentParticipationInput() {
    return this._tenantedDeploymentParticipation;
  }

  // tenants - computed: true, optional: true, required: false
  private _tenants?: string[]; 
  public get tenants() {
    return this.getListAttribute('tenants');
  }
  public set tenants(value: string[]) {
    this._tenants = value;
  }
  public resetTenants() {
    this._tenants = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantsInput() {
    return this._tenants;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      communication_mode: cdktf.stringToTerraform(this._communicationMode),
      default_namespace: cdktf.stringToTerraform(this._defaultNamespace),
      environments: cdktf.listMapper(cdktf.stringToTerraform, false)(this._environments),
      id: cdktf.stringToTerraform(this._id),
      is_disabled: cdktf.booleanToTerraform(this._isDisabled),
      machine_policy_id: cdktf.stringToTerraform(this._machinePolicyId),
      name: cdktf.stringToTerraform(this._name),
      roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roles),
      space_id: cdktf.stringToTerraform(this._spaceId),
      tenant_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tenantTags),
      tenanted_deployment_participation: cdktf.stringToTerraform(this._tenantedDeploymentParticipation),
      tenants: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tenants),
      thumbprint: cdktf.stringToTerraform(this._thumbprint),
      upgrade_locked: cdktf.booleanToTerraform(this._upgradeLocked),
      uri: cdktf.stringToTerraform(this._uri),
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
      default_namespace: {
        value: cdktf.stringToHclTerraform(this._defaultNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environments: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._environments),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._roles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tenantTags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tenanted_deployment_participation: {
        value: cdktf.stringToHclTerraform(this._tenantedDeploymentParticipation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenants: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tenants),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
