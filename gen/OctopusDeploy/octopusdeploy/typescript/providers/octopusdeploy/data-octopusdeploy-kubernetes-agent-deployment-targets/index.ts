// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/data-sources/kubernetes_agent_deployment_targets
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOctopusdeployKubernetesAgentDeploymentTargetsConfig extends cdktf.TerraformMetaArguments {
  /**
  * A filter to search by deployment ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/data-sources/kubernetes_agent_deployment_targets#deployment_id DataOctopusdeployKubernetesAgentDeploymentTargets#deployment_id}
  */
  readonly deploymentId?: string;
  /**
  * A filter to search by a list of environment IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/data-sources/kubernetes_agent_deployment_targets#environments DataOctopusdeployKubernetesAgentDeploymentTargets#environments}
  */
  readonly environments?: string[];
  /**
  * A filter to search by a list of health statuses of resources. Valid health statuses are `HasWarnings`, `Healthy`, `Unavailable`, `Unhealthy`, or `Unknown`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/data-sources/kubernetes_agent_deployment_targets#health_statuses DataOctopusdeployKubernetesAgentDeploymentTargets#health_statuses}
  */
  readonly healthStatuses?: string[];
  /**
  * A filter to search by a list of IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/data-sources/kubernetes_agent_deployment_targets#ids DataOctopusdeployKubernetesAgentDeploymentTargets#ids}
  */
  readonly ids?: string[];
  /**
  * A filter to search by the disabled status of a resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/data-sources/kubernetes_agent_deployment_targets#is_disabled DataOctopusdeployKubernetesAgentDeploymentTargets#is_disabled}
  */
  readonly isDisabled?: boolean | cdktf.IResolvable;
  /**
  * A filter to search by name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/data-sources/kubernetes_agent_deployment_targets#name DataOctopusdeployKubernetesAgentDeploymentTargets#name}
  */
  readonly name?: string;
  /**
  * A filter to search by the partial match of a name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/data-sources/kubernetes_agent_deployment_targets#partial_name DataOctopusdeployKubernetesAgentDeploymentTargets#partial_name}
  */
  readonly partialName?: string;
  /**
  * A filter to search by a list of role IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/data-sources/kubernetes_agent_deployment_targets#roles DataOctopusdeployKubernetesAgentDeploymentTargets#roles}
  */
  readonly roles?: string[];
  /**
  * A list of shell names to match in the query and/or search
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/data-sources/kubernetes_agent_deployment_targets#shell_names DataOctopusdeployKubernetesAgentDeploymentTargets#shell_names}
  */
  readonly shellNames?: string[];
  /**
  * A filter to specify the number of items to skip in the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/data-sources/kubernetes_agent_deployment_targets#skip DataOctopusdeployKubernetesAgentDeploymentTargets#skip}
  */
  readonly skip?: number;
  /**
  * The space ID associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/data-sources/kubernetes_agent_deployment_targets#space_id DataOctopusdeployKubernetesAgentDeploymentTargets#space_id}
  */
  readonly spaceId?: string;
  /**
  * A filter to specify the number of items to take (or return) in the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/data-sources/kubernetes_agent_deployment_targets#take DataOctopusdeployKubernetesAgentDeploymentTargets#take}
  */
  readonly take?: number;
  /**
  * A filter to search by a list of tenant tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/data-sources/kubernetes_agent_deployment_targets#tenant_tags DataOctopusdeployKubernetesAgentDeploymentTargets#tenant_tags}
  */
  readonly tenantTags?: string[];
  /**
  * A filter to search by a list of tenant IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/data-sources/kubernetes_agent_deployment_targets#tenants DataOctopusdeployKubernetesAgentDeploymentTargets#tenants}
  */
  readonly tenants?: string[];
  /**
  * The thumbprint of the deployment target to match in the query and/or search
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/data-sources/kubernetes_agent_deployment_targets#thumbprint DataOctopusdeployKubernetesAgentDeploymentTargets#thumbprint}
  */
  readonly thumbprint?: string;
}
export interface DataOctopusdeployKubernetesAgentDeploymentTargetsKubernetesAgentDeploymentTargets {
}

export function dataOctopusdeployKubernetesAgentDeploymentTargetsKubernetesAgentDeploymentTargetsToTerraform(struct?: DataOctopusdeployKubernetesAgentDeploymentTargetsKubernetesAgentDeploymentTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOctopusdeployKubernetesAgentDeploymentTargetsKubernetesAgentDeploymentTargetsToHclTerraform(struct?: DataOctopusdeployKubernetesAgentDeploymentTargetsKubernetesAgentDeploymentTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOctopusdeployKubernetesAgentDeploymentTargetsKubernetesAgentDeploymentTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOctopusdeployKubernetesAgentDeploymentTargetsKubernetesAgentDeploymentTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployKubernetesAgentDeploymentTargetsKubernetesAgentDeploymentTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

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

  // communication_mode - computed: true, optional: false, required: false
  public get communicationMode() {
    return this.getStringAttribute('communication_mode');
  }

  // default_namespace - computed: true, optional: false, required: false
  public get defaultNamespace() {
    return this.getStringAttribute('default_namespace');
  }

  // environments - computed: true, optional: false, required: false
  public get environments() {
    return this.getListAttribute('environments');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_disabled - computed: true, optional: false, required: false
  public get isDisabled() {
    return this.getBooleanAttribute('is_disabled');
  }

  // machine_policy_id - computed: true, optional: false, required: false
  public get machinePolicyId() {
    return this.getStringAttribute('machine_policy_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // roles - computed: true, optional: false, required: false
  public get roles() {
    return this.getListAttribute('roles');
  }

  // space_id - computed: true, optional: false, required: false
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }

  // tenant_tags - computed: true, optional: false, required: false
  public get tenantTags() {
    return this.getListAttribute('tenant_tags');
  }

  // tenanted_deployment_participation - computed: true, optional: false, required: false
  public get tenantedDeploymentParticipation() {
    return this.getStringAttribute('tenanted_deployment_participation');
  }

  // tenants - computed: true, optional: false, required: false
  public get tenants() {
    return this.getListAttribute('tenants');
  }

  // thumbprint - computed: true, optional: false, required: false
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }

  // upgrade_locked - computed: true, optional: false, required: false
  public get upgradeLocked() {
    return this.getBooleanAttribute('upgrade_locked');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}

export class DataOctopusdeployKubernetesAgentDeploymentTargetsKubernetesAgentDeploymentTargetsList extends cdktf.ComplexList {

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
  public get(index: number): DataOctopusdeployKubernetesAgentDeploymentTargetsKubernetesAgentDeploymentTargetsOutputReference {
    return new DataOctopusdeployKubernetesAgentDeploymentTargetsKubernetesAgentDeploymentTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/data-sources/kubernetes_agent_deployment_targets octopusdeploy_kubernetes_agent_deployment_targets}
*/
export class DataOctopusdeployKubernetesAgentDeploymentTargets extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_kubernetes_agent_deployment_targets";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOctopusdeployKubernetesAgentDeploymentTargets resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOctopusdeployKubernetesAgentDeploymentTargets to import
  * @param importFromId The id of the existing DataOctopusdeployKubernetesAgentDeploymentTargets that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/data-sources/kubernetes_agent_deployment_targets#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOctopusdeployKubernetesAgentDeploymentTargets to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_kubernetes_agent_deployment_targets", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/data-sources/kubernetes_agent_deployment_targets octopusdeploy_kubernetes_agent_deployment_targets} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOctopusdeployKubernetesAgentDeploymentTargetsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOctopusdeployKubernetesAgentDeploymentTargetsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_kubernetes_agent_deployment_targets',
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
    this._deploymentId = config.deploymentId;
    this._environments = config.environments;
    this._healthStatuses = config.healthStatuses;
    this._ids = config.ids;
    this._isDisabled = config.isDisabled;
    this._name = config.name;
    this._partialName = config.partialName;
    this._roles = config.roles;
    this._shellNames = config.shellNames;
    this._skip = config.skip;
    this._spaceId = config.spaceId;
    this._take = config.take;
    this._tenantTags = config.tenantTags;
    this._tenants = config.tenants;
    this._thumbprint = config.thumbprint;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deployment_id - computed: false, optional: true, required: false
  private _deploymentId?: string; 
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }
  public set deploymentId(value: string) {
    this._deploymentId = value;
  }
  public resetDeploymentId() {
    this._deploymentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentIdInput() {
    return this._deploymentId;
  }

  // environments - computed: false, optional: true, required: false
  private _environments?: string[]; 
  public get environments() {
    return this.getListAttribute('environments');
  }
  public set environments(value: string[]) {
    this._environments = value;
  }
  public resetEnvironments() {
    this._environments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentsInput() {
    return this._environments;
  }

  // health_statuses - computed: false, optional: true, required: false
  private _healthStatuses?: string[]; 
  public get healthStatuses() {
    return this.getListAttribute('health_statuses');
  }
  public set healthStatuses(value: string[]) {
    this._healthStatuses = value;
  }
  public resetHealthStatuses() {
    this._healthStatuses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthStatusesInput() {
    return this._healthStatuses;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ids - computed: false, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
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

  // kubernetes_agent_deployment_targets - computed: true, optional: false, required: false
  private _kubernetesAgentDeploymentTargets = new DataOctopusdeployKubernetesAgentDeploymentTargetsKubernetesAgentDeploymentTargetsList(this, "kubernetes_agent_deployment_targets", false);
  public get kubernetesAgentDeploymentTargets() {
    return this._kubernetesAgentDeploymentTargets;
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

  // partial_name - computed: false, optional: true, required: false
  private _partialName?: string; 
  public get partialName() {
    return this.getStringAttribute('partial_name');
  }
  public set partialName(value: string) {
    this._partialName = value;
  }
  public resetPartialName() {
    this._partialName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialNameInput() {
    return this._partialName;
  }

  // roles - computed: false, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // shell_names - computed: false, optional: true, required: false
  private _shellNames?: string[]; 
  public get shellNames() {
    return this.getListAttribute('shell_names');
  }
  public set shellNames(value: string[]) {
    this._shellNames = value;
  }
  public resetShellNames() {
    this._shellNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shellNamesInput() {
    return this._shellNames;
  }

  // skip - computed: false, optional: true, required: false
  private _skip?: number; 
  public get skip() {
    return this.getNumberAttribute('skip');
  }
  public set skip(value: number) {
    this._skip = value;
  }
  public resetSkip() {
    this._skip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInput() {
    return this._skip;
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

  // take - computed: false, optional: true, required: false
  private _take?: number; 
  public get take() {
    return this.getNumberAttribute('take');
  }
  public set take(value: number) {
    this._take = value;
  }
  public resetTake() {
    this._take = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get takeInput() {
    return this._take;
  }

  // tenant_tags - computed: false, optional: true, required: false
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

  // tenants - computed: false, optional: true, required: false
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

  // thumbprint - computed: false, optional: true, required: false
  private _thumbprint?: string; 
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }
  public set thumbprint(value: string) {
    this._thumbprint = value;
  }
  public resetThumbprint() {
    this._thumbprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbprintInput() {
    return this._thumbprint;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deployment_id: cdktf.stringToTerraform(this._deploymentId),
      environments: cdktf.listMapper(cdktf.stringToTerraform, false)(this._environments),
      health_statuses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._healthStatuses),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      is_disabled: cdktf.booleanToTerraform(this._isDisabled),
      name: cdktf.stringToTerraform(this._name),
      partial_name: cdktf.stringToTerraform(this._partialName),
      roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roles),
      shell_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._shellNames),
      skip: cdktf.numberToTerraform(this._skip),
      space_id: cdktf.stringToTerraform(this._spaceId),
      take: cdktf.numberToTerraform(this._take),
      tenant_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tenantTags),
      tenants: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tenants),
      thumbprint: cdktf.stringToTerraform(this._thumbprint),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deployment_id: {
        value: cdktf.stringToHclTerraform(this._deploymentId),
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
      health_statuses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._healthStatuses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      partial_name: {
        value: cdktf.stringToHclTerraform(this._partialName),
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
      shell_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._shellNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      skip: {
        value: cdktf.numberToHclTerraform(this._skip),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      take: {
        value: cdktf.numberToHclTerraform(this._take),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tenant_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tenantTags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
