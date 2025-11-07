import * as cdktf from 'cdktf';
import { ProjectNetworkPolicyRevisionList,
ProjectNetworkPolicyAppPolicy,
projectNetworkPolicyAppPolicyToTerraform,
projectNetworkPolicyAppPolicyToHclTerraform,
ProjectNetworkPolicyAppPolicyList,
ProjectNetworkPolicyAttestationPolicy,
projectNetworkPolicyAttestationPolicyToTerraform,
projectNetworkPolicyAttestationPolicyToHclTerraform,
ProjectNetworkPolicyAttestationPolicyList,
ProjectNetworkPolicyAzurePolicy,
projectNetworkPolicyAzurePolicyToTerraform,
projectNetworkPolicyAzurePolicyToHclTerraform,
ProjectNetworkPolicyAzurePolicyList,
ProjectNetworkPolicyClusterPolicy,
projectNetworkPolicyClusterPolicyToTerraform,
projectNetworkPolicyClusterPolicyToHclTerraform,
ProjectNetworkPolicyClusterPolicyList,
ProjectNetworkPolicyConfigurationLockPolicy,
projectNetworkPolicyConfigurationLockPolicyToTerraform,
projectNetworkPolicyConfigurationLockPolicyToHclTerraform,
ProjectNetworkPolicyConfigurationLockPolicyList,
ProjectNetworkPolicyEdgeviewPolicy,
projectNetworkPolicyEdgeviewPolicyToTerraform,
projectNetworkPolicyEdgeviewPolicyToHclTerraform,
ProjectNetworkPolicyEdgeviewPolicyList,
ProjectNetworkPolicyLocalOperatorConsolePolicy,
projectNetworkPolicyLocalOperatorConsolePolicyToTerraform,
projectNetworkPolicyLocalOperatorConsolePolicyToHclTerraform,
ProjectNetworkPolicyLocalOperatorConsolePolicyList } from './structs4800'
import { ProjectNetworkPolicyModulePolicy,
projectNetworkPolicyModulePolicyToTerraform,
projectNetworkPolicyModulePolicyToHclTerraform,
ProjectNetworkPolicyModulePolicyList,
ProjectNetworkPolicyNetworkPolicy,
projectNetworkPolicyNetworkPolicyToTerraform,
projectNetworkPolicyNetworkPolicyToHclTerraform,
ProjectNetworkPolicyNetworkPolicyList } from './structs5200'
export interface ProjectNetworkPolicy {
  /**
  * Mapping of policy  variable keys and policy variable values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/project#attr Project#attr}
  */
  readonly attr?: { [key: string]: string };
  /**
  * Detailed description of the policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/project#description Project#description}
  */
  readonly description?: string;
  /**
  * User defined name of the policy request, unique across the enterprise. Once object is created, name can’t be changed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/project#name Project#name}
  */
  readonly name?: string;
  /**
  * User defined title of the policy. Title can be changed at any time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/project#title Project#title}
  */
  readonly title?: string;
  /**
  * type of policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/project#type Project#type}
  */
  readonly type?: string;
  /**
  * app_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/project#app_policy Project#app_policy}
  */
  readonly appPolicy?: ProjectNetworkPolicyAppPolicy[] | cdktf.IResolvable;
  /**
  * attestation_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/project#attestation_policy Project#attestation_policy}
  */
  readonly attestationPolicy?: ProjectNetworkPolicyAttestationPolicy[] | cdktf.IResolvable;
  /**
  * azure_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/project#azure_policy Project#azure_policy}
  */
  readonly azurePolicy?: ProjectNetworkPolicyAzurePolicy[] | cdktf.IResolvable;
  /**
  * cluster_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/project#cluster_policy Project#cluster_policy}
  */
  readonly clusterPolicy?: ProjectNetworkPolicyClusterPolicy[] | cdktf.IResolvable;
  /**
  * configuration_lock_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/project#configuration_lock_policy Project#configuration_lock_policy}
  */
  readonly configurationLockPolicy?: ProjectNetworkPolicyConfigurationLockPolicy[] | cdktf.IResolvable;
  /**
  * edgeview_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/project#edgeview_policy Project#edgeview_policy}
  */
  readonly edgeviewPolicy?: ProjectNetworkPolicyEdgeviewPolicy[] | cdktf.IResolvable;
  /**
  * local_operator_console_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/project#local_operator_console_policy Project#local_operator_console_policy}
  */
  readonly localOperatorConsolePolicy?: ProjectNetworkPolicyLocalOperatorConsolePolicy[] | cdktf.IResolvable;
  /**
  * module_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/project#module_policy Project#module_policy}
  */
  readonly modulePolicy?: ProjectNetworkPolicyModulePolicy[] | cdktf.IResolvable;
  /**
  * network_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/project#network_policy Project#network_policy}
  */
  readonly networkPolicy?: ProjectNetworkPolicyNetworkPolicy[] | cdktf.IResolvable;
}

export function projectNetworkPolicyToTerraform(struct?: ProjectNetworkPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attr: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.attr),
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    title: cdktf.stringToTerraform(struct!.title),
    type: cdktf.stringToTerraform(struct!.type),
    app_policy: cdktf.listMapper(projectNetworkPolicyAppPolicyToTerraform, true)(struct!.appPolicy),
    attestation_policy: cdktf.listMapper(projectNetworkPolicyAttestationPolicyToTerraform, true)(struct!.attestationPolicy),
    azure_policy: cdktf.listMapper(projectNetworkPolicyAzurePolicyToTerraform, true)(struct!.azurePolicy),
    cluster_policy: cdktf.listMapper(projectNetworkPolicyClusterPolicyToTerraform, true)(struct!.clusterPolicy),
    configuration_lock_policy: cdktf.listMapper(projectNetworkPolicyConfigurationLockPolicyToTerraform, true)(struct!.configurationLockPolicy),
    edgeview_policy: cdktf.listMapper(projectNetworkPolicyEdgeviewPolicyToTerraform, true)(struct!.edgeviewPolicy),
    local_operator_console_policy: cdktf.listMapper(projectNetworkPolicyLocalOperatorConsolePolicyToTerraform, true)(struct!.localOperatorConsolePolicy),
    module_policy: cdktf.listMapper(projectNetworkPolicyModulePolicyToTerraform, true)(struct!.modulePolicy),
    network_policy: cdktf.listMapper(projectNetworkPolicyNetworkPolicyToTerraform, true)(struct!.networkPolicy),
  }
}


export function projectNetworkPolicyToHclTerraform(struct?: ProjectNetworkPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attr: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.attr),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_policy: {
      value: cdktf.listMapperHcl(projectNetworkPolicyAppPolicyToHclTerraform, true)(struct!.appPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ProjectNetworkPolicyAppPolicyList",
    },
    attestation_policy: {
      value: cdktf.listMapperHcl(projectNetworkPolicyAttestationPolicyToHclTerraform, true)(struct!.attestationPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ProjectNetworkPolicyAttestationPolicyList",
    },
    azure_policy: {
      value: cdktf.listMapperHcl(projectNetworkPolicyAzurePolicyToHclTerraform, true)(struct!.azurePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ProjectNetworkPolicyAzurePolicyList",
    },
    cluster_policy: {
      value: cdktf.listMapperHcl(projectNetworkPolicyClusterPolicyToHclTerraform, true)(struct!.clusterPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ProjectNetworkPolicyClusterPolicyList",
    },
    configuration_lock_policy: {
      value: cdktf.listMapperHcl(projectNetworkPolicyConfigurationLockPolicyToHclTerraform, true)(struct!.configurationLockPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ProjectNetworkPolicyConfigurationLockPolicyList",
    },
    edgeview_policy: {
      value: cdktf.listMapperHcl(projectNetworkPolicyEdgeviewPolicyToHclTerraform, true)(struct!.edgeviewPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ProjectNetworkPolicyEdgeviewPolicyList",
    },
    local_operator_console_policy: {
      value: cdktf.listMapperHcl(projectNetworkPolicyLocalOperatorConsolePolicyToHclTerraform, true)(struct!.localOperatorConsolePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ProjectNetworkPolicyLocalOperatorConsolePolicyList",
    },
    module_policy: {
      value: cdktf.listMapperHcl(projectNetworkPolicyModulePolicyToHclTerraform, true)(struct!.modulePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ProjectNetworkPolicyModulePolicyList",
    },
    network_policy: {
      value: cdktf.listMapperHcl(projectNetworkPolicyNetworkPolicyToHclTerraform, true)(struct!.networkPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ProjectNetworkPolicyNetworkPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectNetworkPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectNetworkPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attr !== undefined) {
      hasAnyValues = true;
      internalValueResult.attr = this._attr;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._appPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appPolicy = this._appPolicy?.internalValue;
    }
    if (this._attestationPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attestationPolicy = this._attestationPolicy?.internalValue;
    }
    if (this._azurePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azurePolicy = this._azurePolicy?.internalValue;
    }
    if (this._clusterPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterPolicy = this._clusterPolicy?.internalValue;
    }
    if (this._configurationLockPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationLockPolicy = this._configurationLockPolicy?.internalValue;
    }
    if (this._edgeviewPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgeviewPolicy = this._edgeviewPolicy?.internalValue;
    }
    if (this._localOperatorConsolePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localOperatorConsolePolicy = this._localOperatorConsolePolicy?.internalValue;
    }
    if (this._modulePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modulePolicy = this._modulePolicy?.internalValue;
    }
    if (this._networkPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPolicy = this._networkPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectNetworkPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attr = undefined;
      this._description = undefined;
      this._name = undefined;
      this._title = undefined;
      this._type = undefined;
      this._appPolicy.internalValue = undefined;
      this._attestationPolicy.internalValue = undefined;
      this._azurePolicy.internalValue = undefined;
      this._clusterPolicy.internalValue = undefined;
      this._configurationLockPolicy.internalValue = undefined;
      this._edgeviewPolicy.internalValue = undefined;
      this._localOperatorConsolePolicy.internalValue = undefined;
      this._modulePolicy.internalValue = undefined;
      this._networkPolicy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attr = value.attr;
      this._description = value.description;
      this._name = value.name;
      this._title = value.title;
      this._type = value.type;
      this._appPolicy.internalValue = value.appPolicy;
      this._attestationPolicy.internalValue = value.attestationPolicy;
      this._azurePolicy.internalValue = value.azurePolicy;
      this._clusterPolicy.internalValue = value.clusterPolicy;
      this._configurationLockPolicy.internalValue = value.configurationLockPolicy;
      this._edgeviewPolicy.internalValue = value.edgeviewPolicy;
      this._localOperatorConsolePolicy.internalValue = value.localOperatorConsolePolicy;
      this._modulePolicy.internalValue = value.modulePolicy;
      this._networkPolicy.internalValue = value.networkPolicy;
    }
  }

  // attr - computed: false, optional: true, required: false
  private _attr?: { [key: string]: string }; 
  public get attr() {
    return this.getStringMapAttribute('attr');
  }
  public set attr(value: { [key: string]: string }) {
    this._attr = value;
  }
  public resetAttr() {
    this._attr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrInput() {
    return this._attr;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // revision - computed: true, optional: false, required: false
  private _revision = new ProjectNetworkPolicyRevisionList(this, "revision", false);
  public get revision() {
    return this._revision;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // app_policy - computed: false, optional: true, required: false
  private _appPolicy = new ProjectNetworkPolicyAppPolicyList(this, "app_policy", false);
  public get appPolicy() {
    return this._appPolicy;
  }
  public putAppPolicy(value: ProjectNetworkPolicyAppPolicy[] | cdktf.IResolvable) {
    this._appPolicy.internalValue = value;
  }
  public resetAppPolicy() {
    this._appPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appPolicyInput() {
    return this._appPolicy.internalValue;
  }

  // attestation_policy - computed: false, optional: true, required: false
  private _attestationPolicy = new ProjectNetworkPolicyAttestationPolicyList(this, "attestation_policy", false);
  public get attestationPolicy() {
    return this._attestationPolicy;
  }
  public putAttestationPolicy(value: ProjectNetworkPolicyAttestationPolicy[] | cdktf.IResolvable) {
    this._attestationPolicy.internalValue = value;
  }
  public resetAttestationPolicy() {
    this._attestationPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attestationPolicyInput() {
    return this._attestationPolicy.internalValue;
  }

  // azure_policy - computed: false, optional: true, required: false
  private _azurePolicy = new ProjectNetworkPolicyAzurePolicyList(this, "azure_policy", false);
  public get azurePolicy() {
    return this._azurePolicy;
  }
  public putAzurePolicy(value: ProjectNetworkPolicyAzurePolicy[] | cdktf.IResolvable) {
    this._azurePolicy.internalValue = value;
  }
  public resetAzurePolicy() {
    this._azurePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azurePolicyInput() {
    return this._azurePolicy.internalValue;
  }

  // cluster_policy - computed: false, optional: true, required: false
  private _clusterPolicy = new ProjectNetworkPolicyClusterPolicyList(this, "cluster_policy", false);
  public get clusterPolicy() {
    return this._clusterPolicy;
  }
  public putClusterPolicy(value: ProjectNetworkPolicyClusterPolicy[] | cdktf.IResolvable) {
    this._clusterPolicy.internalValue = value;
  }
  public resetClusterPolicy() {
    this._clusterPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterPolicyInput() {
    return this._clusterPolicy.internalValue;
  }

  // configuration_lock_policy - computed: false, optional: true, required: false
  private _configurationLockPolicy = new ProjectNetworkPolicyConfigurationLockPolicyList(this, "configuration_lock_policy", false);
  public get configurationLockPolicy() {
    return this._configurationLockPolicy;
  }
  public putConfigurationLockPolicy(value: ProjectNetworkPolicyConfigurationLockPolicy[] | cdktf.IResolvable) {
    this._configurationLockPolicy.internalValue = value;
  }
  public resetConfigurationLockPolicy() {
    this._configurationLockPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationLockPolicyInput() {
    return this._configurationLockPolicy.internalValue;
  }

  // edgeview_policy - computed: false, optional: true, required: false
  private _edgeviewPolicy = new ProjectNetworkPolicyEdgeviewPolicyList(this, "edgeview_policy", false);
  public get edgeviewPolicy() {
    return this._edgeviewPolicy;
  }
  public putEdgeviewPolicy(value: ProjectNetworkPolicyEdgeviewPolicy[] | cdktf.IResolvable) {
    this._edgeviewPolicy.internalValue = value;
  }
  public resetEdgeviewPolicy() {
    this._edgeviewPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeviewPolicyInput() {
    return this._edgeviewPolicy.internalValue;
  }

  // local_operator_console_policy - computed: false, optional: true, required: false
  private _localOperatorConsolePolicy = new ProjectNetworkPolicyLocalOperatorConsolePolicyList(this, "local_operator_console_policy", false);
  public get localOperatorConsolePolicy() {
    return this._localOperatorConsolePolicy;
  }
  public putLocalOperatorConsolePolicy(value: ProjectNetworkPolicyLocalOperatorConsolePolicy[] | cdktf.IResolvable) {
    this._localOperatorConsolePolicy.internalValue = value;
  }
  public resetLocalOperatorConsolePolicy() {
    this._localOperatorConsolePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localOperatorConsolePolicyInput() {
    return this._localOperatorConsolePolicy.internalValue;
  }

  // module_policy - computed: false, optional: true, required: false
  private _modulePolicy = new ProjectNetworkPolicyModulePolicyList(this, "module_policy", false);
  public get modulePolicy() {
    return this._modulePolicy;
  }
  public putModulePolicy(value: ProjectNetworkPolicyModulePolicy[] | cdktf.IResolvable) {
    this._modulePolicy.internalValue = value;
  }
  public resetModulePolicy() {
    this._modulePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modulePolicyInput() {
    return this._modulePolicy.internalValue;
  }

  // network_policy - computed: false, optional: true, required: false
  private _networkPolicy = new ProjectNetworkPolicyNetworkPolicyList(this, "network_policy", false);
  public get networkPolicy() {
    return this._networkPolicy;
  }
  public putNetworkPolicy(value: ProjectNetworkPolicyNetworkPolicy[] | cdktf.IResolvable) {
    this._networkPolicy.internalValue = value;
  }
  public resetNetworkPolicy() {
    this._networkPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPolicyInput() {
    return this._networkPolicy.internalValue;
  }
}

export class ProjectNetworkPolicyList extends cdktf.ComplexList {
  public internalValue? : ProjectNetworkPolicy[] | cdktf.IResolvable

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
  public get(index: number): ProjectNetworkPolicyOutputReference {
    return new ProjectNetworkPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectTagLevelSettings {
  /**
  * Flow log transmission setting for the network instances, it has two possible values NETWORK_INSTANCE_FLOW_LOG_TRANSMISSION_DISABLED or NETWORK_INSTANCE_FLOW_LOG_TRANSMISSION_ENABLED
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/project#flow_log_transmission Project#flow_log_transmission}
  */
  readonly flowLogTransmission?: string;
  /**
  * interface ordering for app instances, it has two possible values INTERFACE_ORDERING_DISABLED or INTERFACE_ORDERING_ENABLED
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/project#interface_ordering Project#interface_ordering}
  */
  readonly interfaceOrdering?: string;
}

export function projectTagLevelSettingsToTerraform(struct?: ProjectTagLevelSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flow_log_transmission: cdktf.stringToTerraform(struct!.flowLogTransmission),
    interface_ordering: cdktf.stringToTerraform(struct!.interfaceOrdering),
  }
}


export function projectTagLevelSettingsToHclTerraform(struct?: ProjectTagLevelSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flow_log_transmission: {
      value: cdktf.stringToHclTerraform(struct!.flowLogTransmission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_ordering: {
      value: cdktf.stringToHclTerraform(struct!.interfaceOrdering),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectTagLevelSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectTagLevelSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flowLogTransmission !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowLogTransmission = this._flowLogTransmission;
    }
    if (this._interfaceOrdering !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceOrdering = this._interfaceOrdering;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectTagLevelSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flowLogTransmission = undefined;
      this._interfaceOrdering = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flowLogTransmission = value.flowLogTransmission;
      this._interfaceOrdering = value.interfaceOrdering;
    }
  }

  // flow_log_transmission - computed: false, optional: true, required: false
  private _flowLogTransmission?: string; 
  public get flowLogTransmission() {
    return this.getStringAttribute('flow_log_transmission');
  }
  public set flowLogTransmission(value: string) {
    this._flowLogTransmission = value;
  }
  public resetFlowLogTransmission() {
    this._flowLogTransmission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowLogTransmissionInput() {
    return this._flowLogTransmission;
  }

  // interface_ordering - computed: false, optional: true, required: false
  private _interfaceOrdering?: string; 
  public get interfaceOrdering() {
    return this.getStringAttribute('interface_ordering');
  }
  public set interfaceOrdering(value: string) {
    this._interfaceOrdering = value;
  }
  public resetInterfaceOrdering() {
    this._interfaceOrdering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceOrderingInput() {
    return this._interfaceOrdering;
  }
}

export class ProjectTagLevelSettingsList extends cdktf.ComplexList {
  public internalValue? : ProjectTagLevelSettings[] | cdktf.IResolvable

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
  public get(index: number): ProjectTagLevelSettingsOutputReference {
    return new ProjectTagLevelSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
