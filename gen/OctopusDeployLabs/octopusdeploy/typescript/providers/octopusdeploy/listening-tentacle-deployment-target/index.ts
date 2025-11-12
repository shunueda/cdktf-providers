// https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/listening_tentacle_deployment_target
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ListeningTentacleDeploymentTargetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/listening_tentacle_deployment_target#certificate_signature_algorithm ListeningTentacleDeploymentTarget#certificate_signature_algorithm}
  */
  readonly certificateSignatureAlgorithm?: string;
  /**
  * A list of environment IDs associated with this listening tentacle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/listening_tentacle_deployment_target#environments ListeningTentacleDeploymentTarget#environments}
  */
  readonly environments: string[];
  /**
  * Represents the health status of this deployment target. Valid health statuses are `HasWarnings`, `Healthy`, `Unavailable`, `Unhealthy`, or `Unknown`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/listening_tentacle_deployment_target#health_status ListeningTentacleDeploymentTarget#health_status}
  */
  readonly healthStatus?: string;
  /**
  * The unique ID for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/listening_tentacle_deployment_target#id ListeningTentacleDeploymentTarget#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Represents the disabled status of this deployment target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/listening_tentacle_deployment_target#is_disabled ListeningTentacleDeploymentTarget#is_disabled}
  */
  readonly isDisabled?: boolean | cdktf.IResolvable;
  /**
  * Represents the in-process status of this deployment target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/listening_tentacle_deployment_target#is_in_process ListeningTentacleDeploymentTarget#is_in_process}
  */
  readonly isInProcess?: boolean | cdktf.IResolvable;
  /**
  * The machine policy ID that is associated with this deployment target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/listening_tentacle_deployment_target#machine_policy_id ListeningTentacleDeploymentTarget#machine_policy_id}
  */
  readonly machinePolicyId?: string;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/listening_tentacle_deployment_target#name ListeningTentacleDeploymentTarget#name}
  */
  readonly name: string;
  /**
  * The operating system that is associated with this deployment target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/listening_tentacle_deployment_target#operating_system ListeningTentacleDeploymentTarget#operating_system}
  */
  readonly operatingSystem?: string;
  /**
  * The proxy ID that is associated with this deployment target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/listening_tentacle_deployment_target#proxy_id ListeningTentacleDeploymentTarget#proxy_id}
  */
  readonly proxyId?: string;
  /**
  * A list of role IDs that are associated with this deployment target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/listening_tentacle_deployment_target#roles ListeningTentacleDeploymentTarget#roles}
  */
  readonly roles: string[];
  /**
  * The shell name associated with this deployment target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/listening_tentacle_deployment_target#shell_name ListeningTentacleDeploymentTarget#shell_name}
  */
  readonly shellName?: string;
  /**
  * The shell version associated with this deployment target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/listening_tentacle_deployment_target#shell_version ListeningTentacleDeploymentTarget#shell_version}
  */
  readonly shellVersion?: string;
  /**
  * The space ID associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/listening_tentacle_deployment_target#space_id ListeningTentacleDeploymentTarget#space_id}
  */
  readonly spaceId?: string;
  /**
  * The status of this resource. Valid statuses are `CalamariNeedsUpgrade`, `Disabled`, `NeedsUpgrade`, `Offline`, `Online`, or `Unknown`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/listening_tentacle_deployment_target#status ListeningTentacleDeploymentTarget#status}
  */
  readonly status?: string;
  /**
  * A summary elaborating on the status of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/listening_tentacle_deployment_target#status_summary ListeningTentacleDeploymentTarget#status_summary}
  */
  readonly statusSummary?: string;
  /**
  * A list of tenant tags associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/listening_tentacle_deployment_target#tenant_tags ListeningTentacleDeploymentTarget#tenant_tags}
  */
  readonly tenantTags?: string[];
  /**
  * The tenanted deployment mode of the resource. Valid account types are `Untenanted`, `TenantedOrUntenanted`, or `Tenanted`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/listening_tentacle_deployment_target#tenanted_deployment_participation ListeningTentacleDeploymentTarget#tenanted_deployment_participation}
  */
  readonly tenantedDeploymentParticipation?: string;
  /**
  * A list of tenant IDs associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/listening_tentacle_deployment_target#tenants ListeningTentacleDeploymentTarget#tenants}
  */
  readonly tenants?: string[];
  /**
  * The tenant URL of this deployment target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/listening_tentacle_deployment_target#tentacle_url ListeningTentacleDeploymentTarget#tentacle_url}
  */
  readonly tentacleUrl: string;
  /**
  * The thumbprint of this deployment target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/listening_tentacle_deployment_target#thumbprint ListeningTentacleDeploymentTarget#thumbprint}
  */
  readonly thumbprint: string;
  /**
  * The URI of this deployment target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/listening_tentacle_deployment_target#uri ListeningTentacleDeploymentTarget#uri}
  */
  readonly uri?: string;
  /**
  * tentacle_version_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/listening_tentacle_deployment_target#tentacle_version_details ListeningTentacleDeploymentTarget#tentacle_version_details}
  */
  readonly tentacleVersionDetails?: ListeningTentacleDeploymentTargetTentacleVersionDetails[] | cdktf.IResolvable;
}
export interface ListeningTentacleDeploymentTargetTentacleVersionDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/listening_tentacle_deployment_target#upgrade_locked ListeningTentacleDeploymentTarget#upgrade_locked}
  */
  readonly upgradeLocked?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/listening_tentacle_deployment_target#upgrade_required ListeningTentacleDeploymentTarget#upgrade_required}
  */
  readonly upgradeRequired?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/listening_tentacle_deployment_target#upgrade_suggested ListeningTentacleDeploymentTarget#upgrade_suggested}
  */
  readonly upgradeSuggested?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/listening_tentacle_deployment_target#version ListeningTentacleDeploymentTarget#version}
  */
  readonly version?: string;
}

export function listeningTentacleDeploymentTargetTentacleVersionDetailsToTerraform(struct?: ListeningTentacleDeploymentTargetTentacleVersionDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    upgrade_locked: cdktf.booleanToTerraform(struct!.upgradeLocked),
    upgrade_required: cdktf.booleanToTerraform(struct!.upgradeRequired),
    upgrade_suggested: cdktf.booleanToTerraform(struct!.upgradeSuggested),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function listeningTentacleDeploymentTargetTentacleVersionDetailsToHclTerraform(struct?: ListeningTentacleDeploymentTargetTentacleVersionDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    upgrade_locked: {
      value: cdktf.booleanToHclTerraform(struct!.upgradeLocked),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    upgrade_required: {
      value: cdktf.booleanToHclTerraform(struct!.upgradeRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    upgrade_suggested: {
      value: cdktf.booleanToHclTerraform(struct!.upgradeSuggested),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ListeningTentacleDeploymentTargetTentacleVersionDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ListeningTentacleDeploymentTargetTentacleVersionDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._upgradeLocked !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeLocked = this._upgradeLocked;
    }
    if (this._upgradeRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeRequired = this._upgradeRequired;
    }
    if (this._upgradeSuggested !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeSuggested = this._upgradeSuggested;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ListeningTentacleDeploymentTargetTentacleVersionDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._upgradeLocked = undefined;
      this._upgradeRequired = undefined;
      this._upgradeSuggested = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._upgradeLocked = value.upgradeLocked;
      this._upgradeRequired = value.upgradeRequired;
      this._upgradeSuggested = value.upgradeSuggested;
      this._version = value.version;
    }
  }

  // upgrade_locked - computed: true, optional: true, required: false
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

  // upgrade_required - computed: true, optional: true, required: false
  private _upgradeRequired?: boolean | cdktf.IResolvable; 
  public get upgradeRequired() {
    return this.getBooleanAttribute('upgrade_required');
  }
  public set upgradeRequired(value: boolean | cdktf.IResolvable) {
    this._upgradeRequired = value;
  }
  public resetUpgradeRequired() {
    this._upgradeRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeRequiredInput() {
    return this._upgradeRequired;
  }

  // upgrade_suggested - computed: true, optional: true, required: false
  private _upgradeSuggested?: boolean | cdktf.IResolvable; 
  public get upgradeSuggested() {
    return this.getBooleanAttribute('upgrade_suggested');
  }
  public set upgradeSuggested(value: boolean | cdktf.IResolvable) {
    this._upgradeSuggested = value;
  }
  public resetUpgradeSuggested() {
    this._upgradeSuggested = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeSuggestedInput() {
    return this._upgradeSuggested;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class ListeningTentacleDeploymentTargetTentacleVersionDetailsList extends cdktf.ComplexList {
  public internalValue? : ListeningTentacleDeploymentTargetTentacleVersionDetails[] | cdktf.IResolvable

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
  public get(index: number): ListeningTentacleDeploymentTargetTentacleVersionDetailsOutputReference {
    return new ListeningTentacleDeploymentTargetTentacleVersionDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/listening_tentacle_deployment_target octopusdeploy_listening_tentacle_deployment_target}
*/
export class ListeningTentacleDeploymentTarget extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_listening_tentacle_deployment_target";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ListeningTentacleDeploymentTarget resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ListeningTentacleDeploymentTarget to import
  * @param importFromId The id of the existing ListeningTentacleDeploymentTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/listening_tentacle_deployment_target#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ListeningTentacleDeploymentTarget to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_listening_tentacle_deployment_target", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/listening_tentacle_deployment_target octopusdeploy_listening_tentacle_deployment_target} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ListeningTentacleDeploymentTargetConfig
  */
  public constructor(scope: Construct, id: string, config: ListeningTentacleDeploymentTargetConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_listening_tentacle_deployment_target',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '0.43.2',
        providerVersionConstraint: '0.43.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificateSignatureAlgorithm = config.certificateSignatureAlgorithm;
    this._environments = config.environments;
    this._healthStatus = config.healthStatus;
    this._id = config.id;
    this._isDisabled = config.isDisabled;
    this._isInProcess = config.isInProcess;
    this._machinePolicyId = config.machinePolicyId;
    this._name = config.name;
    this._operatingSystem = config.operatingSystem;
    this._proxyId = config.proxyId;
    this._roles = config.roles;
    this._shellName = config.shellName;
    this._shellVersion = config.shellVersion;
    this._spaceId = config.spaceId;
    this._status = config.status;
    this._statusSummary = config.statusSummary;
    this._tenantTags = config.tenantTags;
    this._tenantedDeploymentParticipation = config.tenantedDeploymentParticipation;
    this._tenants = config.tenants;
    this._tentacleUrl = config.tentacleUrl;
    this._thumbprint = config.thumbprint;
    this._uri = config.uri;
    this._tentacleVersionDetails.internalValue = config.tentacleVersionDetails;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_signature_algorithm - computed: true, optional: true, required: false
  private _certificateSignatureAlgorithm?: string; 
  public get certificateSignatureAlgorithm() {
    return this.getStringAttribute('certificate_signature_algorithm');
  }
  public set certificateSignatureAlgorithm(value: string) {
    this._certificateSignatureAlgorithm = value;
  }
  public resetCertificateSignatureAlgorithm() {
    this._certificateSignatureAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateSignatureAlgorithmInput() {
    return this._certificateSignatureAlgorithm;
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

  // has_latest_calamari - computed: true, optional: false, required: false
  public get hasLatestCalamari() {
    return this.getBooleanAttribute('has_latest_calamari');
  }

  // health_status - computed: true, optional: true, required: false
  private _healthStatus?: string; 
  public get healthStatus() {
    return this.getStringAttribute('health_status');
  }
  public set healthStatus(value: string) {
    this._healthStatus = value;
  }
  public resetHealthStatus() {
    this._healthStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthStatusInput() {
    return this._healthStatus;
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

  // is_in_process - computed: true, optional: true, required: false
  private _isInProcess?: boolean | cdktf.IResolvable; 
  public get isInProcess() {
    return this.getBooleanAttribute('is_in_process');
  }
  public set isInProcess(value: boolean | cdktf.IResolvable) {
    this._isInProcess = value;
  }
  public resetIsInProcess() {
    this._isInProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isInProcessInput() {
    return this._isInProcess;
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

  // operating_system - computed: true, optional: true, required: false
  private _operatingSystem?: string; 
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }
  public set operatingSystem(value: string) {
    this._operatingSystem = value;
  }
  public resetOperatingSystem() {
    this._operatingSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemInput() {
    return this._operatingSystem;
  }

  // proxy_id - computed: true, optional: true, required: false
  private _proxyId?: string; 
  public get proxyId() {
    return this.getStringAttribute('proxy_id');
  }
  public set proxyId(value: string) {
    this._proxyId = value;
  }
  public resetProxyId() {
    this._proxyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyIdInput() {
    return this._proxyId;
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

  // shell_name - computed: true, optional: true, required: false
  private _shellName?: string; 
  public get shellName() {
    return this.getStringAttribute('shell_name');
  }
  public set shellName(value: string) {
    this._shellName = value;
  }
  public resetShellName() {
    this._shellName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shellNameInput() {
    return this._shellName;
  }

  // shell_version - computed: true, optional: true, required: false
  private _shellVersion?: string; 
  public get shellVersion() {
    return this.getStringAttribute('shell_version');
  }
  public set shellVersion(value: string) {
    this._shellVersion = value;
  }
  public resetShellVersion() {
    this._shellVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shellVersionInput() {
    return this._shellVersion;
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

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // status_summary - computed: true, optional: true, required: false
  private _statusSummary?: string; 
  public get statusSummary() {
    return this.getStringAttribute('status_summary');
  }
  public set statusSummary(value: string) {
    this._statusSummary = value;
  }
  public resetStatusSummary() {
    this._statusSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusSummaryInput() {
    return this._statusSummary;
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

  // tentacle_url - computed: false, optional: false, required: true
  private _tentacleUrl?: string; 
  public get tentacleUrl() {
    return this.getStringAttribute('tentacle_url');
  }
  public set tentacleUrl(value: string) {
    this._tentacleUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tentacleUrlInput() {
    return this._tentacleUrl;
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

  // uri - computed: true, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }

  // tentacle_version_details - computed: false, optional: true, required: false
  private _tentacleVersionDetails = new ListeningTentacleDeploymentTargetTentacleVersionDetailsList(this, "tentacle_version_details", false);
  public get tentacleVersionDetails() {
    return this._tentacleVersionDetails;
  }
  public putTentacleVersionDetails(value: ListeningTentacleDeploymentTargetTentacleVersionDetails[] | cdktf.IResolvable) {
    this._tentacleVersionDetails.internalValue = value;
  }
  public resetTentacleVersionDetails() {
    this._tentacleVersionDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tentacleVersionDetailsInput() {
    return this._tentacleVersionDetails.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_signature_algorithm: cdktf.stringToTerraform(this._certificateSignatureAlgorithm),
      environments: cdktf.listMapper(cdktf.stringToTerraform, false)(this._environments),
      health_status: cdktf.stringToTerraform(this._healthStatus),
      id: cdktf.stringToTerraform(this._id),
      is_disabled: cdktf.booleanToTerraform(this._isDisabled),
      is_in_process: cdktf.booleanToTerraform(this._isInProcess),
      machine_policy_id: cdktf.stringToTerraform(this._machinePolicyId),
      name: cdktf.stringToTerraform(this._name),
      operating_system: cdktf.stringToTerraform(this._operatingSystem),
      proxy_id: cdktf.stringToTerraform(this._proxyId),
      roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roles),
      shell_name: cdktf.stringToTerraform(this._shellName),
      shell_version: cdktf.stringToTerraform(this._shellVersion),
      space_id: cdktf.stringToTerraform(this._spaceId),
      status: cdktf.stringToTerraform(this._status),
      status_summary: cdktf.stringToTerraform(this._statusSummary),
      tenant_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tenantTags),
      tenanted_deployment_participation: cdktf.stringToTerraform(this._tenantedDeploymentParticipation),
      tenants: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tenants),
      tentacle_url: cdktf.stringToTerraform(this._tentacleUrl),
      thumbprint: cdktf.stringToTerraform(this._thumbprint),
      uri: cdktf.stringToTerraform(this._uri),
      tentacle_version_details: cdktf.listMapper(listeningTentacleDeploymentTargetTentacleVersionDetailsToTerraform, true)(this._tentacleVersionDetails.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate_signature_algorithm: {
        value: cdktf.stringToHclTerraform(this._certificateSignatureAlgorithm),
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
      health_status: {
        value: cdktf.stringToHclTerraform(this._healthStatus),
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
      is_in_process: {
        value: cdktf.booleanToHclTerraform(this._isInProcess),
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
      operating_system: {
        value: cdktf.stringToHclTerraform(this._operatingSystem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_id: {
        value: cdktf.stringToHclTerraform(this._proxyId),
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
      shell_name: {
        value: cdktf.stringToHclTerraform(this._shellName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shell_version: {
        value: cdktf.stringToHclTerraform(this._shellVersion),
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
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status_summary: {
        value: cdktf.stringToHclTerraform(this._statusSummary),
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
      tentacle_url: {
        value: cdktf.stringToHclTerraform(this._tentacleUrl),
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
      uri: {
        value: cdktf.stringToHclTerraform(this._uri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tentacle_version_details: {
        value: cdktf.listMapperHcl(listeningTentacleDeploymentTargetTentacleVersionDetailsToHclTerraform, true)(this._tentacleVersionDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ListeningTentacleDeploymentTargetTentacleVersionDetailsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
