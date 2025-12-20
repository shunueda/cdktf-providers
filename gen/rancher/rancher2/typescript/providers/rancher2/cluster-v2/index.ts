// https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Annotations of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#annotations ClusterV2#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Cluster V2 cloud credential secret name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#cloud_credential_secret_name ClusterV2#cloud_credential_secret_name}
  */
  readonly cloudCredentialSecretName?: string;
  /**
  * Cluster V2 default cluster role for project members
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#default_cluster_role_for_project_members ClusterV2#default_cluster_role_for_project_members}
  */
  readonly defaultClusterRoleForProjectMembers?: string;
  /**
  * Cluster V2 default pod security admission configuration template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#default_pod_security_admission_configuration_template_name ClusterV2#default_pod_security_admission_configuration_template_name}
  */
  readonly defaultPodSecurityAdmissionConfigurationTemplateName?: string;
  /**
  * Enable k8s network policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#enable_network_policy ClusterV2#enable_network_policy}
  */
  readonly enableNetworkPolicy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#fleet_namespace ClusterV2#fleet_namespace}
  */
  readonly fleetNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#id ClusterV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Cluster V2 kubernetes version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#kubernetes_version ClusterV2#kubernetes_version}
  */
  readonly kubernetesVersion: string;
  /**
  * Labels of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#labels ClusterV2#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Cluster V2 name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#name ClusterV2#name}
  */
  readonly name: string;
  /**
  * agent_env_vars block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#agent_env_vars ClusterV2#agent_env_vars}
  */
  readonly agentEnvVars?: ClusterV2AgentEnvVars[] | cdktf.IResolvable;
  /**
  * cluster_agent_deployment_customization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#cluster_agent_deployment_customization ClusterV2#cluster_agent_deployment_customization}
  */
  readonly clusterAgentDeploymentCustomization?: ClusterV2ClusterAgentDeploymentCustomization[] | cdktf.IResolvable;
  /**
  * fleet_agent_deployment_customization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#fleet_agent_deployment_customization ClusterV2#fleet_agent_deployment_customization}
  */
  readonly fleetAgentDeploymentCustomization?: ClusterV2FleetAgentDeploymentCustomization[] | cdktf.IResolvable;
  /**
  * local_auth_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#local_auth_endpoint ClusterV2#local_auth_endpoint}
  */
  readonly localAuthEndpoint?: ClusterV2LocalAuthEndpoint;
  /**
  * rke_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#rke_config ClusterV2#rke_config}
  */
  readonly rkeConfig?: ClusterV2RkeConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#timeouts ClusterV2#timeouts}
  */
  readonly timeouts?: ClusterV2Timeouts;
}
export interface ClusterV2ClusterRegistrationToken {
}

export function clusterV2ClusterRegistrationTokenToTerraform(struct?: ClusterV2ClusterRegistrationToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clusterV2ClusterRegistrationTokenToHclTerraform(struct?: ClusterV2ClusterRegistrationToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClusterV2ClusterRegistrationTokenOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2ClusterRegistrationToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2ClusterRegistrationToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // annotations - computed: true, optional: false, required: false
  private _annotations = new cdktf.StringMap(this, "annotations");
  public get annotations() {
    return this._annotations;
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getStringAttribute('command');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // insecure_command - computed: true, optional: false, required: false
  public get insecureCommand() {
    return this.getStringAttribute('insecure_command');
  }

  // insecure_node_command - computed: true, optional: false, required: false
  public get insecureNodeCommand() {
    return this.getStringAttribute('insecure_node_command');
  }

  // insecure_windows_node_command - computed: true, optional: false, required: false
  public get insecureWindowsNodeCommand() {
    return this.getStringAttribute('insecure_windows_node_command');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // manifest_url - computed: true, optional: false, required: false
  public get manifestUrl() {
    return this.getStringAttribute('manifest_url');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // node_command - computed: true, optional: false, required: false
  public get nodeCommand() {
    return this.getStringAttribute('node_command');
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // windows_node_command - computed: true, optional: false, required: false
  public get windowsNodeCommand() {
    return this.getStringAttribute('windows_node_command');
  }
}

export class ClusterV2ClusterRegistrationTokenList extends cdktf.ComplexList {

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
  public get(index: number): ClusterV2ClusterRegistrationTokenOutputReference {
    return new ClusterV2ClusterRegistrationTokenOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2AgentEnvVars {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#name ClusterV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#value ClusterV2#value}
  */
  readonly value: string;
}

export function clusterV2AgentEnvVarsToTerraform(struct?: ClusterV2AgentEnvVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clusterV2AgentEnvVarsToHclTerraform(struct?: ClusterV2AgentEnvVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2AgentEnvVarsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2AgentEnvVars | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2AgentEnvVars | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ClusterV2AgentEnvVarsList extends cdktf.ComplexList {
  public internalValue? : ClusterV2AgentEnvVars[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2AgentEnvVarsOutputReference {
    return new ClusterV2AgentEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2ClusterAgentDeploymentCustomizationAppendTolerations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#effect ClusterV2#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#key ClusterV2#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#operator ClusterV2#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#seconds ClusterV2#seconds}
  */
  readonly seconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#value ClusterV2#value}
  */
  readonly value?: string;
}

export function clusterV2ClusterAgentDeploymentCustomizationAppendTolerationsToTerraform(struct?: ClusterV2ClusterAgentDeploymentCustomizationAppendTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    seconds: cdktf.numberToTerraform(struct!.seconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clusterV2ClusterAgentDeploymentCustomizationAppendTolerationsToHclTerraform(struct?: ClusterV2ClusterAgentDeploymentCustomizationAppendTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    seconds: {
      value: cdktf.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2ClusterAgentDeploymentCustomizationAppendTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2ClusterAgentDeploymentCustomizationAppendTolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2ClusterAgentDeploymentCustomizationAppendTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._seconds = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._seconds = value.seconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // seconds - computed: true, optional: true, required: false
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ClusterV2ClusterAgentDeploymentCustomizationAppendTolerationsList extends cdktf.ComplexList {
  public internalValue? : ClusterV2ClusterAgentDeploymentCustomizationAppendTolerations[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2ClusterAgentDeploymentCustomizationAppendTolerationsOutputReference {
    return new ClusterV2ClusterAgentDeploymentCustomizationAppendTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2ClusterAgentDeploymentCustomizationOverrideResourceRequirements {
  /**
  * The maximum CPU limit for agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#cpu_limit ClusterV2#cpu_limit}
  */
  readonly cpuLimit?: string;
  /**
  * The minimum CPU required for agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#cpu_request ClusterV2#cpu_request}
  */
  readonly cpuRequest?: string;
  /**
  * The maximum memory limit for agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#memory_limit ClusterV2#memory_limit}
  */
  readonly memoryLimit?: string;
  /**
  * The minimum memory required for agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#memory_request ClusterV2#memory_request}
  */
  readonly memoryRequest?: string;
}

export function clusterV2ClusterAgentDeploymentCustomizationOverrideResourceRequirementsToTerraform(struct?: ClusterV2ClusterAgentDeploymentCustomizationOverrideResourceRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_limit: cdktf.stringToTerraform(struct!.cpuLimit),
    cpu_request: cdktf.stringToTerraform(struct!.cpuRequest),
    memory_limit: cdktf.stringToTerraform(struct!.memoryLimit),
    memory_request: cdktf.stringToTerraform(struct!.memoryRequest),
  }
}


export function clusterV2ClusterAgentDeploymentCustomizationOverrideResourceRequirementsToHclTerraform(struct?: ClusterV2ClusterAgentDeploymentCustomizationOverrideResourceRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_limit: {
      value: cdktf.stringToHclTerraform(struct!.cpuLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_request: {
      value: cdktf.stringToHclTerraform(struct!.cpuRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_limit: {
      value: cdktf.stringToHclTerraform(struct!.memoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_request: {
      value: cdktf.stringToHclTerraform(struct!.memoryRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2ClusterAgentDeploymentCustomizationOverrideResourceRequirementsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2ClusterAgentDeploymentCustomizationOverrideResourceRequirements | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuLimit = this._cpuLimit;
    }
    if (this._cpuRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuRequest = this._cpuRequest;
    }
    if (this._memoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryLimit = this._memoryLimit;
    }
    if (this._memoryRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryRequest = this._memoryRequest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2ClusterAgentDeploymentCustomizationOverrideResourceRequirements | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpuLimit = undefined;
      this._cpuRequest = undefined;
      this._memoryLimit = undefined;
      this._memoryRequest = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpuLimit = value.cpuLimit;
      this._cpuRequest = value.cpuRequest;
      this._memoryLimit = value.memoryLimit;
      this._memoryRequest = value.memoryRequest;
    }
  }

  // cpu_limit - computed: false, optional: true, required: false
  private _cpuLimit?: string; 
  public get cpuLimit() {
    return this.getStringAttribute('cpu_limit');
  }
  public set cpuLimit(value: string) {
    this._cpuLimit = value;
  }
  public resetCpuLimit() {
    this._cpuLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuLimitInput() {
    return this._cpuLimit;
  }

  // cpu_request - computed: false, optional: true, required: false
  private _cpuRequest?: string; 
  public get cpuRequest() {
    return this.getStringAttribute('cpu_request');
  }
  public set cpuRequest(value: string) {
    this._cpuRequest = value;
  }
  public resetCpuRequest() {
    this._cpuRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuRequestInput() {
    return this._cpuRequest;
  }

  // memory_limit - computed: false, optional: true, required: false
  private _memoryLimit?: string; 
  public get memoryLimit() {
    return this.getStringAttribute('memory_limit');
  }
  public set memoryLimit(value: string) {
    this._memoryLimit = value;
  }
  public resetMemoryLimit() {
    this._memoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryLimitInput() {
    return this._memoryLimit;
  }

  // memory_request - computed: false, optional: true, required: false
  private _memoryRequest?: string; 
  public get memoryRequest() {
    return this.getStringAttribute('memory_request');
  }
  public set memoryRequest(value: string) {
    this._memoryRequest = value;
  }
  public resetMemoryRequest() {
    this._memoryRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryRequestInput() {
    return this._memoryRequest;
  }
}

export class ClusterV2ClusterAgentDeploymentCustomizationOverrideResourceRequirementsList extends cdktf.ComplexList {
  public internalValue? : ClusterV2ClusterAgentDeploymentCustomizationOverrideResourceRequirements[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2ClusterAgentDeploymentCustomizationOverrideResourceRequirementsOutputReference {
    return new ClusterV2ClusterAgentDeploymentCustomizationOverrideResourceRequirementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2ClusterAgentDeploymentCustomizationSchedulingCustomizationPodDisruptionBudget {
  /**
  * The maximum number of cattle cluster agent replicas that can be down at a given time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#max_unavailable ClusterV2#max_unavailable}
  */
  readonly maxUnavailable?: string;
  /**
  * The minimum number of cattle cluster agent replicas that must be running at a given time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#min_available ClusterV2#min_available}
  */
  readonly minAvailable?: string;
}

export function clusterV2ClusterAgentDeploymentCustomizationSchedulingCustomizationPodDisruptionBudgetToTerraform(struct?: ClusterV2ClusterAgentDeploymentCustomizationSchedulingCustomizationPodDisruptionBudget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_unavailable: cdktf.stringToTerraform(struct!.maxUnavailable),
    min_available: cdktf.stringToTerraform(struct!.minAvailable),
  }
}


export function clusterV2ClusterAgentDeploymentCustomizationSchedulingCustomizationPodDisruptionBudgetToHclTerraform(struct?: ClusterV2ClusterAgentDeploymentCustomizationSchedulingCustomizationPodDisruptionBudget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_unavailable: {
      value: cdktf.stringToHclTerraform(struct!.maxUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_available: {
      value: cdktf.stringToHclTerraform(struct!.minAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2ClusterAgentDeploymentCustomizationSchedulingCustomizationPodDisruptionBudgetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2ClusterAgentDeploymentCustomizationSchedulingCustomizationPodDisruptionBudget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    if (this._minAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.minAvailable = this._minAvailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2ClusterAgentDeploymentCustomizationSchedulingCustomizationPodDisruptionBudget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxUnavailable = undefined;
      this._minAvailable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxUnavailable = value.maxUnavailable;
      this._minAvailable = value.minAvailable;
    }
  }

  // max_unavailable - computed: false, optional: true, required: false
  private _maxUnavailable?: string; 
  public get maxUnavailable() {
    return this.getStringAttribute('max_unavailable');
  }
  public set maxUnavailable(value: string) {
    this._maxUnavailable = value;
  }
  public resetMaxUnavailable() {
    this._maxUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableInput() {
    return this._maxUnavailable;
  }

  // min_available - computed: false, optional: true, required: false
  private _minAvailable?: string; 
  public get minAvailable() {
    return this.getStringAttribute('min_available');
  }
  public set minAvailable(value: string) {
    this._minAvailable = value;
  }
  public resetMinAvailable() {
    this._minAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minAvailableInput() {
    return this._minAvailable;
  }
}

export class ClusterV2ClusterAgentDeploymentCustomizationSchedulingCustomizationPodDisruptionBudgetList extends cdktf.ComplexList {
  public internalValue? : ClusterV2ClusterAgentDeploymentCustomizationSchedulingCustomizationPodDisruptionBudget[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2ClusterAgentDeploymentCustomizationSchedulingCustomizationPodDisruptionBudgetOutputReference {
    return new ClusterV2ClusterAgentDeploymentCustomizationSchedulingCustomizationPodDisruptionBudgetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2ClusterAgentDeploymentCustomizationSchedulingCustomizationPriorityClass {
  /**
  * The preemption behavior for the cattle cluster agent. Must be either 'PreemptLowerPriority' or 'Never'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#preemption_policy ClusterV2#preemption_policy}
  */
  readonly preemptionPolicy?: string;
  /**
  * The priority value for the cattle cluster agent. Must be between negative 1 billion and 1 billion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#value ClusterV2#value}
  */
  readonly value: number;
}

export function clusterV2ClusterAgentDeploymentCustomizationSchedulingCustomizationPriorityClassToTerraform(struct?: ClusterV2ClusterAgentDeploymentCustomizationSchedulingCustomizationPriorityClass | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preemption_policy: cdktf.stringToTerraform(struct!.preemptionPolicy),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function clusterV2ClusterAgentDeploymentCustomizationSchedulingCustomizationPriorityClassToHclTerraform(struct?: ClusterV2ClusterAgentDeploymentCustomizationSchedulingCustomizationPriorityClass | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preemption_policy: {
      value: cdktf.stringToHclTerraform(struct!.preemptionPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2ClusterAgentDeploymentCustomizationSchedulingCustomizationPriorityClassOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2ClusterAgentDeploymentCustomizationSchedulingCustomizationPriorityClass | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preemptionPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.preemptionPolicy = this._preemptionPolicy;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2ClusterAgentDeploymentCustomizationSchedulingCustomizationPriorityClass | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preemptionPolicy = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preemptionPolicy = value.preemptionPolicy;
      this._value = value.value;
    }
  }

  // preemption_policy - computed: false, optional: true, required: false
  private _preemptionPolicy?: string; 
  public get preemptionPolicy() {
    return this.getStringAttribute('preemption_policy');
  }
  public set preemptionPolicy(value: string) {
    this._preemptionPolicy = value;
  }
  public resetPreemptionPolicy() {
    this._preemptionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptionPolicyInput() {
    return this._preemptionPolicy;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ClusterV2ClusterAgentDeploymentCustomizationSchedulingCustomizationPriorityClassList extends cdktf.ComplexList {
  public internalValue? : ClusterV2ClusterAgentDeploymentCustomizationSchedulingCustomizationPriorityClass[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2ClusterAgentDeploymentCustomizationSchedulingCustomizationPriorityClassOutputReference {
    return new ClusterV2ClusterAgentDeploymentCustomizationSchedulingCustomizationPriorityClassOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2ClusterAgentDeploymentCustomizationSchedulingCustomization {
  /**
  * pod_disruption_budget block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#pod_disruption_budget ClusterV2#pod_disruption_budget}
  */
  readonly podDisruptionBudget?: ClusterV2ClusterAgentDeploymentCustomizationSchedulingCustomizationPodDisruptionBudget[] | cdktf.IResolvable;
  /**
  * priority_class block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#priority_class ClusterV2#priority_class}
  */
  readonly priorityClass?: ClusterV2ClusterAgentDeploymentCustomizationSchedulingCustomizationPriorityClass[] | cdktf.IResolvable;
}

export function clusterV2ClusterAgentDeploymentCustomizationSchedulingCustomizationToTerraform(struct?: ClusterV2ClusterAgentDeploymentCustomizationSchedulingCustomization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_disruption_budget: cdktf.listMapper(clusterV2ClusterAgentDeploymentCustomizationSchedulingCustomizationPodDisruptionBudgetToTerraform, true)(struct!.podDisruptionBudget),
    priority_class: cdktf.listMapper(clusterV2ClusterAgentDeploymentCustomizationSchedulingCustomizationPriorityClassToTerraform, true)(struct!.priorityClass),
  }
}


export function clusterV2ClusterAgentDeploymentCustomizationSchedulingCustomizationToHclTerraform(struct?: ClusterV2ClusterAgentDeploymentCustomizationSchedulingCustomization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_disruption_budget: {
      value: cdktf.listMapperHcl(clusterV2ClusterAgentDeploymentCustomizationSchedulingCustomizationPodDisruptionBudgetToHclTerraform, true)(struct!.podDisruptionBudget),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2ClusterAgentDeploymentCustomizationSchedulingCustomizationPodDisruptionBudgetList",
    },
    priority_class: {
      value: cdktf.listMapperHcl(clusterV2ClusterAgentDeploymentCustomizationSchedulingCustomizationPriorityClassToHclTerraform, true)(struct!.priorityClass),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2ClusterAgentDeploymentCustomizationSchedulingCustomizationPriorityClassList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2ClusterAgentDeploymentCustomizationSchedulingCustomizationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2ClusterAgentDeploymentCustomizationSchedulingCustomization | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podDisruptionBudget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podDisruptionBudget = this._podDisruptionBudget?.internalValue;
    }
    if (this._priorityClass?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityClass = this._priorityClass?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2ClusterAgentDeploymentCustomizationSchedulingCustomization | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._podDisruptionBudget.internalValue = undefined;
      this._priorityClass.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._podDisruptionBudget.internalValue = value.podDisruptionBudget;
      this._priorityClass.internalValue = value.priorityClass;
    }
  }

  // pod_disruption_budget - computed: false, optional: true, required: false
  private _podDisruptionBudget = new ClusterV2ClusterAgentDeploymentCustomizationSchedulingCustomizationPodDisruptionBudgetList(this, "pod_disruption_budget", false);
  public get podDisruptionBudget() {
    return this._podDisruptionBudget;
  }
  public putPodDisruptionBudget(value: ClusterV2ClusterAgentDeploymentCustomizationSchedulingCustomizationPodDisruptionBudget[] | cdktf.IResolvable) {
    this._podDisruptionBudget.internalValue = value;
  }
  public resetPodDisruptionBudget() {
    this._podDisruptionBudget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podDisruptionBudgetInput() {
    return this._podDisruptionBudget.internalValue;
  }

  // priority_class - computed: false, optional: true, required: false
  private _priorityClass = new ClusterV2ClusterAgentDeploymentCustomizationSchedulingCustomizationPriorityClassList(this, "priority_class", false);
  public get priorityClass() {
    return this._priorityClass;
  }
  public putPriorityClass(value: ClusterV2ClusterAgentDeploymentCustomizationSchedulingCustomizationPriorityClass[] | cdktf.IResolvable) {
    this._priorityClass.internalValue = value;
  }
  public resetPriorityClass() {
    this._priorityClass.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityClassInput() {
    return this._priorityClass.internalValue;
  }
}

export class ClusterV2ClusterAgentDeploymentCustomizationSchedulingCustomizationList extends cdktf.ComplexList {
  public internalValue? : ClusterV2ClusterAgentDeploymentCustomizationSchedulingCustomization[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2ClusterAgentDeploymentCustomizationSchedulingCustomizationOutputReference {
    return new ClusterV2ClusterAgentDeploymentCustomizationSchedulingCustomizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2ClusterAgentDeploymentCustomization {
  /**
  * User defined affinity to override default agent affinity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#override_affinity ClusterV2#override_affinity}
  */
  readonly overrideAffinity?: string;
  /**
  * append_tolerations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#append_tolerations ClusterV2#append_tolerations}
  */
  readonly appendTolerations?: ClusterV2ClusterAgentDeploymentCustomizationAppendTolerations[] | cdktf.IResolvable;
  /**
  * override_resource_requirements block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#override_resource_requirements ClusterV2#override_resource_requirements}
  */
  readonly overrideResourceRequirements?: ClusterV2ClusterAgentDeploymentCustomizationOverrideResourceRequirements[] | cdktf.IResolvable;
  /**
  * scheduling_customization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#scheduling_customization ClusterV2#scheduling_customization}
  */
  readonly schedulingCustomization?: ClusterV2ClusterAgentDeploymentCustomizationSchedulingCustomization[] | cdktf.IResolvable;
}

export function clusterV2ClusterAgentDeploymentCustomizationToTerraform(struct?: ClusterV2ClusterAgentDeploymentCustomization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    override_affinity: cdktf.stringToTerraform(struct!.overrideAffinity),
    append_tolerations: cdktf.listMapper(clusterV2ClusterAgentDeploymentCustomizationAppendTolerationsToTerraform, true)(struct!.appendTolerations),
    override_resource_requirements: cdktf.listMapper(clusterV2ClusterAgentDeploymentCustomizationOverrideResourceRequirementsToTerraform, true)(struct!.overrideResourceRequirements),
    scheduling_customization: cdktf.listMapper(clusterV2ClusterAgentDeploymentCustomizationSchedulingCustomizationToTerraform, true)(struct!.schedulingCustomization),
  }
}


export function clusterV2ClusterAgentDeploymentCustomizationToHclTerraform(struct?: ClusterV2ClusterAgentDeploymentCustomization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    override_affinity: {
      value: cdktf.stringToHclTerraform(struct!.overrideAffinity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    append_tolerations: {
      value: cdktf.listMapperHcl(clusterV2ClusterAgentDeploymentCustomizationAppendTolerationsToHclTerraform, true)(struct!.appendTolerations),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2ClusterAgentDeploymentCustomizationAppendTolerationsList",
    },
    override_resource_requirements: {
      value: cdktf.listMapperHcl(clusterV2ClusterAgentDeploymentCustomizationOverrideResourceRequirementsToHclTerraform, true)(struct!.overrideResourceRequirements),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2ClusterAgentDeploymentCustomizationOverrideResourceRequirementsList",
    },
    scheduling_customization: {
      value: cdktf.listMapperHcl(clusterV2ClusterAgentDeploymentCustomizationSchedulingCustomizationToHclTerraform, true)(struct!.schedulingCustomization),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2ClusterAgentDeploymentCustomizationSchedulingCustomizationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2ClusterAgentDeploymentCustomizationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2ClusterAgentDeploymentCustomization | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._overrideAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideAffinity = this._overrideAffinity;
    }
    if (this._appendTolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appendTolerations = this._appendTolerations?.internalValue;
    }
    if (this._overrideResourceRequirements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideResourceRequirements = this._overrideResourceRequirements?.internalValue;
    }
    if (this._schedulingCustomization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulingCustomization = this._schedulingCustomization?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2ClusterAgentDeploymentCustomization | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._overrideAffinity = undefined;
      this._appendTolerations.internalValue = undefined;
      this._overrideResourceRequirements.internalValue = undefined;
      this._schedulingCustomization.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._overrideAffinity = value.overrideAffinity;
      this._appendTolerations.internalValue = value.appendTolerations;
      this._overrideResourceRequirements.internalValue = value.overrideResourceRequirements;
      this._schedulingCustomization.internalValue = value.schedulingCustomization;
    }
  }

  // override_affinity - computed: false, optional: true, required: false
  private _overrideAffinity?: string; 
  public get overrideAffinity() {
    return this.getStringAttribute('override_affinity');
  }
  public set overrideAffinity(value: string) {
    this._overrideAffinity = value;
  }
  public resetOverrideAffinity() {
    this._overrideAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideAffinityInput() {
    return this._overrideAffinity;
  }

  // append_tolerations - computed: false, optional: true, required: false
  private _appendTolerations = new ClusterV2ClusterAgentDeploymentCustomizationAppendTolerationsList(this, "append_tolerations", false);
  public get appendTolerations() {
    return this._appendTolerations;
  }
  public putAppendTolerations(value: ClusterV2ClusterAgentDeploymentCustomizationAppendTolerations[] | cdktf.IResolvable) {
    this._appendTolerations.internalValue = value;
  }
  public resetAppendTolerations() {
    this._appendTolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendTolerationsInput() {
    return this._appendTolerations.internalValue;
  }

  // override_resource_requirements - computed: false, optional: true, required: false
  private _overrideResourceRequirements = new ClusterV2ClusterAgentDeploymentCustomizationOverrideResourceRequirementsList(this, "override_resource_requirements", false);
  public get overrideResourceRequirements() {
    return this._overrideResourceRequirements;
  }
  public putOverrideResourceRequirements(value: ClusterV2ClusterAgentDeploymentCustomizationOverrideResourceRequirements[] | cdktf.IResolvable) {
    this._overrideResourceRequirements.internalValue = value;
  }
  public resetOverrideResourceRequirements() {
    this._overrideResourceRequirements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideResourceRequirementsInput() {
    return this._overrideResourceRequirements.internalValue;
  }

  // scheduling_customization - computed: false, optional: true, required: false
  private _schedulingCustomization = new ClusterV2ClusterAgentDeploymentCustomizationSchedulingCustomizationList(this, "scheduling_customization", false);
  public get schedulingCustomization() {
    return this._schedulingCustomization;
  }
  public putSchedulingCustomization(value: ClusterV2ClusterAgentDeploymentCustomizationSchedulingCustomization[] | cdktf.IResolvable) {
    this._schedulingCustomization.internalValue = value;
  }
  public resetSchedulingCustomization() {
    this._schedulingCustomization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingCustomizationInput() {
    return this._schedulingCustomization.internalValue;
  }
}

export class ClusterV2ClusterAgentDeploymentCustomizationList extends cdktf.ComplexList {
  public internalValue? : ClusterV2ClusterAgentDeploymentCustomization[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2ClusterAgentDeploymentCustomizationOutputReference {
    return new ClusterV2ClusterAgentDeploymentCustomizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2FleetAgentDeploymentCustomizationAppendTolerations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#effect ClusterV2#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#key ClusterV2#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#operator ClusterV2#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#seconds ClusterV2#seconds}
  */
  readonly seconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#value ClusterV2#value}
  */
  readonly value?: string;
}

export function clusterV2FleetAgentDeploymentCustomizationAppendTolerationsToTerraform(struct?: ClusterV2FleetAgentDeploymentCustomizationAppendTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    seconds: cdktf.numberToTerraform(struct!.seconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clusterV2FleetAgentDeploymentCustomizationAppendTolerationsToHclTerraform(struct?: ClusterV2FleetAgentDeploymentCustomizationAppendTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    seconds: {
      value: cdktf.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2FleetAgentDeploymentCustomizationAppendTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2FleetAgentDeploymentCustomizationAppendTolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2FleetAgentDeploymentCustomizationAppendTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._seconds = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._seconds = value.seconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // seconds - computed: true, optional: true, required: false
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ClusterV2FleetAgentDeploymentCustomizationAppendTolerationsList extends cdktf.ComplexList {
  public internalValue? : ClusterV2FleetAgentDeploymentCustomizationAppendTolerations[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2FleetAgentDeploymentCustomizationAppendTolerationsOutputReference {
    return new ClusterV2FleetAgentDeploymentCustomizationAppendTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2FleetAgentDeploymentCustomizationOverrideResourceRequirements {
  /**
  * The maximum CPU limit for agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#cpu_limit ClusterV2#cpu_limit}
  */
  readonly cpuLimit?: string;
  /**
  * The minimum CPU required for agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#cpu_request ClusterV2#cpu_request}
  */
  readonly cpuRequest?: string;
  /**
  * The maximum memory limit for agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#memory_limit ClusterV2#memory_limit}
  */
  readonly memoryLimit?: string;
  /**
  * The minimum memory required for agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#memory_request ClusterV2#memory_request}
  */
  readonly memoryRequest?: string;
}

export function clusterV2FleetAgentDeploymentCustomizationOverrideResourceRequirementsToTerraform(struct?: ClusterV2FleetAgentDeploymentCustomizationOverrideResourceRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_limit: cdktf.stringToTerraform(struct!.cpuLimit),
    cpu_request: cdktf.stringToTerraform(struct!.cpuRequest),
    memory_limit: cdktf.stringToTerraform(struct!.memoryLimit),
    memory_request: cdktf.stringToTerraform(struct!.memoryRequest),
  }
}


export function clusterV2FleetAgentDeploymentCustomizationOverrideResourceRequirementsToHclTerraform(struct?: ClusterV2FleetAgentDeploymentCustomizationOverrideResourceRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_limit: {
      value: cdktf.stringToHclTerraform(struct!.cpuLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_request: {
      value: cdktf.stringToHclTerraform(struct!.cpuRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_limit: {
      value: cdktf.stringToHclTerraform(struct!.memoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_request: {
      value: cdktf.stringToHclTerraform(struct!.memoryRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2FleetAgentDeploymentCustomizationOverrideResourceRequirementsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2FleetAgentDeploymentCustomizationOverrideResourceRequirements | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuLimit = this._cpuLimit;
    }
    if (this._cpuRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuRequest = this._cpuRequest;
    }
    if (this._memoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryLimit = this._memoryLimit;
    }
    if (this._memoryRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryRequest = this._memoryRequest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2FleetAgentDeploymentCustomizationOverrideResourceRequirements | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpuLimit = undefined;
      this._cpuRequest = undefined;
      this._memoryLimit = undefined;
      this._memoryRequest = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpuLimit = value.cpuLimit;
      this._cpuRequest = value.cpuRequest;
      this._memoryLimit = value.memoryLimit;
      this._memoryRequest = value.memoryRequest;
    }
  }

  // cpu_limit - computed: false, optional: true, required: false
  private _cpuLimit?: string; 
  public get cpuLimit() {
    return this.getStringAttribute('cpu_limit');
  }
  public set cpuLimit(value: string) {
    this._cpuLimit = value;
  }
  public resetCpuLimit() {
    this._cpuLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuLimitInput() {
    return this._cpuLimit;
  }

  // cpu_request - computed: false, optional: true, required: false
  private _cpuRequest?: string; 
  public get cpuRequest() {
    return this.getStringAttribute('cpu_request');
  }
  public set cpuRequest(value: string) {
    this._cpuRequest = value;
  }
  public resetCpuRequest() {
    this._cpuRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuRequestInput() {
    return this._cpuRequest;
  }

  // memory_limit - computed: false, optional: true, required: false
  private _memoryLimit?: string; 
  public get memoryLimit() {
    return this.getStringAttribute('memory_limit');
  }
  public set memoryLimit(value: string) {
    this._memoryLimit = value;
  }
  public resetMemoryLimit() {
    this._memoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryLimitInput() {
    return this._memoryLimit;
  }

  // memory_request - computed: false, optional: true, required: false
  private _memoryRequest?: string; 
  public get memoryRequest() {
    return this.getStringAttribute('memory_request');
  }
  public set memoryRequest(value: string) {
    this._memoryRequest = value;
  }
  public resetMemoryRequest() {
    this._memoryRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryRequestInput() {
    return this._memoryRequest;
  }
}

export class ClusterV2FleetAgentDeploymentCustomizationOverrideResourceRequirementsList extends cdktf.ComplexList {
  public internalValue? : ClusterV2FleetAgentDeploymentCustomizationOverrideResourceRequirements[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2FleetAgentDeploymentCustomizationOverrideResourceRequirementsOutputReference {
    return new ClusterV2FleetAgentDeploymentCustomizationOverrideResourceRequirementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2FleetAgentDeploymentCustomization {
  /**
  * User defined affinity to override default agent affinity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#override_affinity ClusterV2#override_affinity}
  */
  readonly overrideAffinity?: string;
  /**
  * append_tolerations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#append_tolerations ClusterV2#append_tolerations}
  */
  readonly appendTolerations?: ClusterV2FleetAgentDeploymentCustomizationAppendTolerations[] | cdktf.IResolvable;
  /**
  * override_resource_requirements block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#override_resource_requirements ClusterV2#override_resource_requirements}
  */
  readonly overrideResourceRequirements?: ClusterV2FleetAgentDeploymentCustomizationOverrideResourceRequirements[] | cdktf.IResolvable;
}

export function clusterV2FleetAgentDeploymentCustomizationToTerraform(struct?: ClusterV2FleetAgentDeploymentCustomization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    override_affinity: cdktf.stringToTerraform(struct!.overrideAffinity),
    append_tolerations: cdktf.listMapper(clusterV2FleetAgentDeploymentCustomizationAppendTolerationsToTerraform, true)(struct!.appendTolerations),
    override_resource_requirements: cdktf.listMapper(clusterV2FleetAgentDeploymentCustomizationOverrideResourceRequirementsToTerraform, true)(struct!.overrideResourceRequirements),
  }
}


export function clusterV2FleetAgentDeploymentCustomizationToHclTerraform(struct?: ClusterV2FleetAgentDeploymentCustomization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    override_affinity: {
      value: cdktf.stringToHclTerraform(struct!.overrideAffinity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    append_tolerations: {
      value: cdktf.listMapperHcl(clusterV2FleetAgentDeploymentCustomizationAppendTolerationsToHclTerraform, true)(struct!.appendTolerations),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2FleetAgentDeploymentCustomizationAppendTolerationsList",
    },
    override_resource_requirements: {
      value: cdktf.listMapperHcl(clusterV2FleetAgentDeploymentCustomizationOverrideResourceRequirementsToHclTerraform, true)(struct!.overrideResourceRequirements),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2FleetAgentDeploymentCustomizationOverrideResourceRequirementsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2FleetAgentDeploymentCustomizationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2FleetAgentDeploymentCustomization | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._overrideAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideAffinity = this._overrideAffinity;
    }
    if (this._appendTolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appendTolerations = this._appendTolerations?.internalValue;
    }
    if (this._overrideResourceRequirements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideResourceRequirements = this._overrideResourceRequirements?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2FleetAgentDeploymentCustomization | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._overrideAffinity = undefined;
      this._appendTolerations.internalValue = undefined;
      this._overrideResourceRequirements.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._overrideAffinity = value.overrideAffinity;
      this._appendTolerations.internalValue = value.appendTolerations;
      this._overrideResourceRequirements.internalValue = value.overrideResourceRequirements;
    }
  }

  // override_affinity - computed: false, optional: true, required: false
  private _overrideAffinity?: string; 
  public get overrideAffinity() {
    return this.getStringAttribute('override_affinity');
  }
  public set overrideAffinity(value: string) {
    this._overrideAffinity = value;
  }
  public resetOverrideAffinity() {
    this._overrideAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideAffinityInput() {
    return this._overrideAffinity;
  }

  // append_tolerations - computed: false, optional: true, required: false
  private _appendTolerations = new ClusterV2FleetAgentDeploymentCustomizationAppendTolerationsList(this, "append_tolerations", false);
  public get appendTolerations() {
    return this._appendTolerations;
  }
  public putAppendTolerations(value: ClusterV2FleetAgentDeploymentCustomizationAppendTolerations[] | cdktf.IResolvable) {
    this._appendTolerations.internalValue = value;
  }
  public resetAppendTolerations() {
    this._appendTolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendTolerationsInput() {
    return this._appendTolerations.internalValue;
  }

  // override_resource_requirements - computed: false, optional: true, required: false
  private _overrideResourceRequirements = new ClusterV2FleetAgentDeploymentCustomizationOverrideResourceRequirementsList(this, "override_resource_requirements", false);
  public get overrideResourceRequirements() {
    return this._overrideResourceRequirements;
  }
  public putOverrideResourceRequirements(value: ClusterV2FleetAgentDeploymentCustomizationOverrideResourceRequirements[] | cdktf.IResolvable) {
    this._overrideResourceRequirements.internalValue = value;
  }
  public resetOverrideResourceRequirements() {
    this._overrideResourceRequirements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideResourceRequirementsInput() {
    return this._overrideResourceRequirements.internalValue;
  }
}

export class ClusterV2FleetAgentDeploymentCustomizationList extends cdktf.ComplexList {
  public internalValue? : ClusterV2FleetAgentDeploymentCustomization[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2FleetAgentDeploymentCustomizationOutputReference {
    return new ClusterV2FleetAgentDeploymentCustomizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2LocalAuthEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#ca_certs ClusterV2#ca_certs}
  */
  readonly caCerts?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#enabled ClusterV2#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#fqdn ClusterV2#fqdn}
  */
  readonly fqdn?: string;
}

export function clusterV2LocalAuthEndpointToTerraform(struct?: ClusterV2LocalAuthEndpointOutputReference | ClusterV2LocalAuthEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certs: cdktf.stringToTerraform(struct!.caCerts),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
  }
}


export function clusterV2LocalAuthEndpointToHclTerraform(struct?: ClusterV2LocalAuthEndpointOutputReference | ClusterV2LocalAuthEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certs: {
      value: cdktf.stringToHclTerraform(struct!.caCerts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2LocalAuthEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterV2LocalAuthEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCerts !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCerts = this._caCerts;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2LocalAuthEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCerts = undefined;
      this._enabled = undefined;
      this._fqdn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCerts = value.caCerts;
      this._enabled = value.enabled;
      this._fqdn = value.fqdn;
    }
  }

  // ca_certs - computed: false, optional: true, required: false
  private _caCerts?: string; 
  public get caCerts() {
    return this.getStringAttribute('ca_certs');
  }
  public set caCerts(value: string) {
    this._caCerts = value;
  }
  public resetCaCerts() {
    this._caCerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertsInput() {
    return this._caCerts;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // fqdn - computed: false, optional: true, required: false
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  public resetFqdn() {
    this._fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }
}
export interface ClusterV2RkeConfigEtcdS3Config {
  /**
  * ETCD snapshot S3 bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#bucket ClusterV2#bucket}
  */
  readonly bucket: string;
  /**
  * ETCD snapshot S3 cloud credential name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#cloud_credential_name ClusterV2#cloud_credential_name}
  */
  readonly cloudCredentialName?: string;
  /**
  * ETCD snapshot S3 endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#endpoint ClusterV2#endpoint}
  */
  readonly endpoint: string;
  /**
  * ETCD snapshot S3 endpoint CA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#endpoint_ca ClusterV2#endpoint_ca}
  */
  readonly endpointCa?: string;
  /**
  * ETCD snapshot S3 folder
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#folder ClusterV2#folder}
  */
  readonly folder?: string;
  /**
  * ETCD snapshot S3 region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#region ClusterV2#region}
  */
  readonly region?: string;
  /**
  * Disable ETCD skip ssl verify
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#skip_ssl_verify ClusterV2#skip_ssl_verify}
  */
  readonly skipSslVerify?: boolean | cdktf.IResolvable;
}

export function clusterV2RkeConfigEtcdS3ConfigToTerraform(struct?: ClusterV2RkeConfigEtcdS3ConfigOutputReference | ClusterV2RkeConfigEtcdS3Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    cloud_credential_name: cdktf.stringToTerraform(struct!.cloudCredentialName),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    endpoint_ca: cdktf.stringToTerraform(struct!.endpointCa),
    folder: cdktf.stringToTerraform(struct!.folder),
    region: cdktf.stringToTerraform(struct!.region),
    skip_ssl_verify: cdktf.booleanToTerraform(struct!.skipSslVerify),
  }
}


export function clusterV2RkeConfigEtcdS3ConfigToHclTerraform(struct?: ClusterV2RkeConfigEtcdS3ConfigOutputReference | ClusterV2RkeConfigEtcdS3Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_credential_name: {
      value: cdktf.stringToHclTerraform(struct!.cloudCredentialName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint_ca: {
      value: cdktf.stringToHclTerraform(struct!.endpointCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    folder: {
      value: cdktf.stringToHclTerraform(struct!.folder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_ssl_verify: {
      value: cdktf.booleanToHclTerraform(struct!.skipSslVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2RkeConfigEtcdS3ConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterV2RkeConfigEtcdS3Config | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._cloudCredentialName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudCredentialName = this._cloudCredentialName;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._endpointCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointCa = this._endpointCa;
    }
    if (this._folder !== undefined) {
      hasAnyValues = true;
      internalValueResult.folder = this._folder;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._skipSslVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipSslVerify = this._skipSslVerify;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2RkeConfigEtcdS3Config | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._cloudCredentialName = undefined;
      this._endpoint = undefined;
      this._endpointCa = undefined;
      this._folder = undefined;
      this._region = undefined;
      this._skipSslVerify = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._cloudCredentialName = value.cloudCredentialName;
      this._endpoint = value.endpoint;
      this._endpointCa = value.endpointCa;
      this._folder = value.folder;
      this._region = value.region;
      this._skipSslVerify = value.skipSslVerify;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // cloud_credential_name - computed: false, optional: true, required: false
  private _cloudCredentialName?: string; 
  public get cloudCredentialName() {
    return this.getStringAttribute('cloud_credential_name');
  }
  public set cloudCredentialName(value: string) {
    this._cloudCredentialName = value;
  }
  public resetCloudCredentialName() {
    this._cloudCredentialName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudCredentialNameInput() {
    return this._cloudCredentialName;
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // endpoint_ca - computed: false, optional: true, required: false
  private _endpointCa?: string; 
  public get endpointCa() {
    return this.getStringAttribute('endpoint_ca');
  }
  public set endpointCa(value: string) {
    this._endpointCa = value;
  }
  public resetEndpointCa() {
    this._endpointCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointCaInput() {
    return this._endpointCa;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // skip_ssl_verify - computed: false, optional: true, required: false
  private _skipSslVerify?: boolean | cdktf.IResolvable; 
  public get skipSslVerify() {
    return this.getBooleanAttribute('skip_ssl_verify');
  }
  public set skipSslVerify(value: boolean | cdktf.IResolvable) {
    this._skipSslVerify = value;
  }
  public resetSkipSslVerify() {
    this._skipSslVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipSslVerifyInput() {
    return this._skipSslVerify;
  }
}
export interface ClusterV2RkeConfigEtcd {
  /**
  * Disable ETCD snapshots
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#disable_snapshots ClusterV2#disable_snapshots}
  */
  readonly disableSnapshots?: boolean | cdktf.IResolvable;
  /**
  * ETCD snapshot retention
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#snapshot_retention ClusterV2#snapshot_retention}
  */
  readonly snapshotRetention?: number;
  /**
  * ETCD snapshot schedule cron (e.g `"0 * /5 * * *"`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#snapshot_schedule_cron ClusterV2#snapshot_schedule_cron}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly snapshotScheduleCron?: string;
  /**
  * s3_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#s3_config ClusterV2#s3_config}
  */
  readonly s3Config?: ClusterV2RkeConfigEtcdS3Config;
}

export function clusterV2RkeConfigEtcdToTerraform(struct?: ClusterV2RkeConfigEtcdOutputReference | ClusterV2RkeConfigEtcd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_snapshots: cdktf.booleanToTerraform(struct!.disableSnapshots),
    snapshot_retention: cdktf.numberToTerraform(struct!.snapshotRetention),
    snapshot_schedule_cron: cdktf.stringToTerraform(struct!.snapshotScheduleCron),
    s3_config: clusterV2RkeConfigEtcdS3ConfigToTerraform(struct!.s3Config),
  }
}


export function clusterV2RkeConfigEtcdToHclTerraform(struct?: ClusterV2RkeConfigEtcdOutputReference | ClusterV2RkeConfigEtcd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_snapshots: {
      value: cdktf.booleanToHclTerraform(struct!.disableSnapshots),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    snapshot_retention: {
      value: cdktf.numberToHclTerraform(struct!.snapshotRetention),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snapshot_schedule_cron: {
      value: cdktf.stringToHclTerraform(struct!.snapshotScheduleCron),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_config: {
      value: clusterV2RkeConfigEtcdS3ConfigToHclTerraform(struct!.s3Config),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2RkeConfigEtcdS3ConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2RkeConfigEtcdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterV2RkeConfigEtcd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableSnapshots !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSnapshots = this._disableSnapshots;
    }
    if (this._snapshotRetention !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotRetention = this._snapshotRetention;
    }
    if (this._snapshotScheduleCron !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotScheduleCron = this._snapshotScheduleCron;
    }
    if (this._s3Config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Config = this._s3Config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2RkeConfigEtcd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableSnapshots = undefined;
      this._snapshotRetention = undefined;
      this._snapshotScheduleCron = undefined;
      this._s3Config.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableSnapshots = value.disableSnapshots;
      this._snapshotRetention = value.snapshotRetention;
      this._snapshotScheduleCron = value.snapshotScheduleCron;
      this._s3Config.internalValue = value.s3Config;
    }
  }

  // disable_snapshots - computed: false, optional: true, required: false
  private _disableSnapshots?: boolean | cdktf.IResolvable; 
  public get disableSnapshots() {
    return this.getBooleanAttribute('disable_snapshots');
  }
  public set disableSnapshots(value: boolean | cdktf.IResolvable) {
    this._disableSnapshots = value;
  }
  public resetDisableSnapshots() {
    this._disableSnapshots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSnapshotsInput() {
    return this._disableSnapshots;
  }

  // snapshot_retention - computed: false, optional: true, required: false
  private _snapshotRetention?: number; 
  public get snapshotRetention() {
    return this.getNumberAttribute('snapshot_retention');
  }
  public set snapshotRetention(value: number) {
    this._snapshotRetention = value;
  }
  public resetSnapshotRetention() {
    this._snapshotRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotRetentionInput() {
    return this._snapshotRetention;
  }

  // snapshot_schedule_cron - computed: false, optional: true, required: false
  private _snapshotScheduleCron?: string; 
  public get snapshotScheduleCron() {
    return this.getStringAttribute('snapshot_schedule_cron');
  }
  public set snapshotScheduleCron(value: string) {
    this._snapshotScheduleCron = value;
  }
  public resetSnapshotScheduleCron() {
    this._snapshotScheduleCron = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotScheduleCronInput() {
    return this._snapshotScheduleCron;
  }

  // s3_config - computed: false, optional: true, required: false
  private _s3Config = new ClusterV2RkeConfigEtcdS3ConfigOutputReference(this, "s3_config");
  public get s3Config() {
    return this._s3Config;
  }
  public putS3Config(value: ClusterV2RkeConfigEtcdS3Config) {
    this._s3Config.internalValue = value;
  }
  public resetS3Config() {
    this._s3Config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ConfigInput() {
    return this._s3Config.internalValue;
  }
}
export interface ClusterV2RkeConfigEtcdSnapshotCreate {
  /**
  * ETCD generation to initiate a snapshot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#generation ClusterV2#generation}
  */
  readonly generation: number;
}

export function clusterV2RkeConfigEtcdSnapshotCreateToTerraform(struct?: ClusterV2RkeConfigEtcdSnapshotCreateOutputReference | ClusterV2RkeConfigEtcdSnapshotCreate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    generation: cdktf.numberToTerraform(struct!.generation),
  }
}


export function clusterV2RkeConfigEtcdSnapshotCreateToHclTerraform(struct?: ClusterV2RkeConfigEtcdSnapshotCreateOutputReference | ClusterV2RkeConfigEtcdSnapshotCreate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    generation: {
      value: cdktf.numberToHclTerraform(struct!.generation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2RkeConfigEtcdSnapshotCreateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterV2RkeConfigEtcdSnapshotCreate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._generation !== undefined) {
      hasAnyValues = true;
      internalValueResult.generation = this._generation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2RkeConfigEtcdSnapshotCreate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._generation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._generation = value.generation;
    }
  }

  // generation - computed: false, optional: false, required: true
  private _generation?: number; 
  public get generation() {
    return this.getNumberAttribute('generation');
  }
  public set generation(value: number) {
    this._generation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get generationInput() {
    return this._generation;
  }
}
export interface ClusterV2RkeConfigEtcdSnapshotRestore {
  /**
  * ETCD snapshot desired generation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#generation ClusterV2#generation}
  */
  readonly generation: number;
  /**
  * ETCD snapshot name to restore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#name ClusterV2#name}
  */
  readonly name: string;
  /**
  * ETCD restore RKE config (set to none, all, or kubernetesVersion)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#restore_rke_config ClusterV2#restore_rke_config}
  */
  readonly restoreRkeConfig?: string;
}

export function clusterV2RkeConfigEtcdSnapshotRestoreToTerraform(struct?: ClusterV2RkeConfigEtcdSnapshotRestoreOutputReference | ClusterV2RkeConfigEtcdSnapshotRestore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    generation: cdktf.numberToTerraform(struct!.generation),
    name: cdktf.stringToTerraform(struct!.name),
    restore_rke_config: cdktf.stringToTerraform(struct!.restoreRkeConfig),
  }
}


export function clusterV2RkeConfigEtcdSnapshotRestoreToHclTerraform(struct?: ClusterV2RkeConfigEtcdSnapshotRestoreOutputReference | ClusterV2RkeConfigEtcdSnapshotRestore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    generation: {
      value: cdktf.numberToHclTerraform(struct!.generation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    restore_rke_config: {
      value: cdktf.stringToHclTerraform(struct!.restoreRkeConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2RkeConfigEtcdSnapshotRestoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterV2RkeConfigEtcdSnapshotRestore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._generation !== undefined) {
      hasAnyValues = true;
      internalValueResult.generation = this._generation;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._restoreRkeConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.restoreRkeConfig = this._restoreRkeConfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2RkeConfigEtcdSnapshotRestore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._generation = undefined;
      this._name = undefined;
      this._restoreRkeConfig = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._generation = value.generation;
      this._name = value.name;
      this._restoreRkeConfig = value.restoreRkeConfig;
    }
  }

  // generation - computed: false, optional: false, required: true
  private _generation?: number; 
  public get generation() {
    return this.getNumberAttribute('generation');
  }
  public set generation(value: number) {
    this._generation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get generationInput() {
    return this._generation;
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

  // restore_rke_config - computed: false, optional: true, required: false
  private _restoreRkeConfig?: string; 
  public get restoreRkeConfig() {
    return this.getStringAttribute('restore_rke_config');
  }
  public set restoreRkeConfig(value: string) {
    this._restoreRkeConfig = value;
  }
  public resetRestoreRkeConfig() {
    this._restoreRkeConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreRkeConfigInput() {
    return this._restoreRkeConfig;
  }
}
export interface ClusterV2RkeConfigLocalAuthEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#ca_certs ClusterV2#ca_certs}
  */
  readonly caCerts?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#enabled ClusterV2#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#fqdn ClusterV2#fqdn}
  */
  readonly fqdn?: string;
}

export function clusterV2RkeConfigLocalAuthEndpointToTerraform(struct?: ClusterV2RkeConfigLocalAuthEndpointOutputReference | ClusterV2RkeConfigLocalAuthEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certs: cdktf.stringToTerraform(struct!.caCerts),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
  }
}


export function clusterV2RkeConfigLocalAuthEndpointToHclTerraform(struct?: ClusterV2RkeConfigLocalAuthEndpointOutputReference | ClusterV2RkeConfigLocalAuthEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certs: {
      value: cdktf.stringToHclTerraform(struct!.caCerts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2RkeConfigLocalAuthEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterV2RkeConfigLocalAuthEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCerts !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCerts = this._caCerts;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2RkeConfigLocalAuthEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCerts = undefined;
      this._enabled = undefined;
      this._fqdn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCerts = value.caCerts;
      this._enabled = value.enabled;
      this._fqdn = value.fqdn;
    }
  }

  // ca_certs - computed: false, optional: true, required: false
  private _caCerts?: string; 
  public get caCerts() {
    return this.getStringAttribute('ca_certs');
  }
  public set caCerts(value: string) {
    this._caCerts = value;
  }
  public resetCaCerts() {
    this._caCerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertsInput() {
    return this._caCerts;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // fqdn - computed: false, optional: true, required: false
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  public resetFqdn() {
    this._fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }
}
export interface ClusterV2RkeConfigMachinePoolDefaults {
  /**
  * maximum length for autogenerated hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#hostname_length_limit ClusterV2#hostname_length_limit}
  */
  readonly hostnameLengthLimit?: number;
}

export function clusterV2RkeConfigMachinePoolDefaultsToTerraform(struct?: ClusterV2RkeConfigMachinePoolDefaults | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname_length_limit: cdktf.numberToTerraform(struct!.hostnameLengthLimit),
  }
}


export function clusterV2RkeConfigMachinePoolDefaultsToHclTerraform(struct?: ClusterV2RkeConfigMachinePoolDefaults | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname_length_limit: {
      value: cdktf.numberToHclTerraform(struct!.hostnameLengthLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2RkeConfigMachinePoolDefaultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2RkeConfigMachinePoolDefaults | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostnameLengthLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameLengthLimit = this._hostnameLengthLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2RkeConfigMachinePoolDefaults | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostnameLengthLimit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostnameLengthLimit = value.hostnameLengthLimit;
    }
  }

  // hostname_length_limit - computed: false, optional: true, required: false
  private _hostnameLengthLimit?: number; 
  public get hostnameLengthLimit() {
    return this.getNumberAttribute('hostname_length_limit');
  }
  public set hostnameLengthLimit(value: number) {
    this._hostnameLengthLimit = value;
  }
  public resetHostnameLengthLimit() {
    this._hostnameLengthLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameLengthLimitInput() {
    return this._hostnameLengthLimit;
  }
}

export class ClusterV2RkeConfigMachinePoolDefaultsList extends cdktf.ComplexList {
  public internalValue? : ClusterV2RkeConfigMachinePoolDefaults[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2RkeConfigMachinePoolDefaultsOutputReference {
    return new ClusterV2RkeConfigMachinePoolDefaultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2RkeConfigMachinePoolsMachineConfig {
  /**
  * Machine config API version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#api_version ClusterV2#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Machine config kind
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#kind ClusterV2#kind}
  */
  readonly kind: string;
  /**
  * Machine config name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#name ClusterV2#name}
  */
  readonly name: string;
}

export function clusterV2RkeConfigMachinePoolsMachineConfigToTerraform(struct?: ClusterV2RkeConfigMachinePoolsMachineConfigOutputReference | ClusterV2RkeConfigMachinePoolsMachineConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function clusterV2RkeConfigMachinePoolsMachineConfigToHclTerraform(struct?: ClusterV2RkeConfigMachinePoolsMachineConfigOutputReference | ClusterV2RkeConfigMachinePoolsMachineConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2RkeConfigMachinePoolsMachineConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterV2RkeConfigMachinePoolsMachineConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2RkeConfigMachinePoolsMachineConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiVersion = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
}
export interface ClusterV2RkeConfigMachinePoolsRollingUpdate {
  /**
  * Rolling update max surge
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#max_surge ClusterV2#max_surge}
  */
  readonly maxSurge?: string;
  /**
  * Rolling update max unavailable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#max_unavailable ClusterV2#max_unavailable}
  */
  readonly maxUnavailable?: string;
}

export function clusterV2RkeConfigMachinePoolsRollingUpdateToTerraform(struct?: ClusterV2RkeConfigMachinePoolsRollingUpdateOutputReference | ClusterV2RkeConfigMachinePoolsRollingUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_surge: cdktf.stringToTerraform(struct!.maxSurge),
    max_unavailable: cdktf.stringToTerraform(struct!.maxUnavailable),
  }
}


export function clusterV2RkeConfigMachinePoolsRollingUpdateToHclTerraform(struct?: ClusterV2RkeConfigMachinePoolsRollingUpdateOutputReference | ClusterV2RkeConfigMachinePoolsRollingUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_surge: {
      value: cdktf.stringToHclTerraform(struct!.maxSurge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_unavailable: {
      value: cdktf.stringToHclTerraform(struct!.maxUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2RkeConfigMachinePoolsRollingUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterV2RkeConfigMachinePoolsRollingUpdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSurge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSurge = this._maxSurge;
    }
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2RkeConfigMachinePoolsRollingUpdate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxSurge = undefined;
      this._maxUnavailable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxSurge = value.maxSurge;
      this._maxUnavailable = value.maxUnavailable;
    }
  }

  // max_surge - computed: false, optional: true, required: false
  private _maxSurge?: string; 
  public get maxSurge() {
    return this.getStringAttribute('max_surge');
  }
  public set maxSurge(value: string) {
    this._maxSurge = value;
  }
  public resetMaxSurge() {
    this._maxSurge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSurgeInput() {
    return this._maxSurge;
  }

  // max_unavailable - computed: false, optional: true, required: false
  private _maxUnavailable?: string; 
  public get maxUnavailable() {
    return this.getStringAttribute('max_unavailable');
  }
  public set maxUnavailable(value: string) {
    this._maxUnavailable = value;
  }
  public resetMaxUnavailable() {
    this._maxUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableInput() {
    return this._maxUnavailable;
  }
}
export interface ClusterV2RkeConfigMachinePoolsTaints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#effect ClusterV2#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#key ClusterV2#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#value ClusterV2#value}
  */
  readonly value: string;
}

export function clusterV2RkeConfigMachinePoolsTaintsToTerraform(struct?: ClusterV2RkeConfigMachinePoolsTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clusterV2RkeConfigMachinePoolsTaintsToHclTerraform(struct?: ClusterV2RkeConfigMachinePoolsTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2RkeConfigMachinePoolsTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2RkeConfigMachinePoolsTaints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2RkeConfigMachinePoolsTaints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ClusterV2RkeConfigMachinePoolsTaintsList extends cdktf.ComplexList {
  public internalValue? : ClusterV2RkeConfigMachinePoolsTaints[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2RkeConfigMachinePoolsTaintsOutputReference {
    return new ClusterV2RkeConfigMachinePoolsTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2RkeConfigMachinePools {
  /**
  * Annotations of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#annotations ClusterV2#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Machine pool cloud credential secret name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#cloud_credential_secret_name ClusterV2#cloud_credential_secret_name}
  */
  readonly cloudCredentialSecretName?: string;
  /**
  * Machine pool control plane role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#control_plane_role ClusterV2#control_plane_role}
  */
  readonly controlPlaneRole?: boolean | cdktf.IResolvable;
  /**
  * Machine pool drain before delete
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#drain_before_delete ClusterV2#drain_before_delete}
  */
  readonly drainBeforeDelete?: boolean | cdktf.IResolvable;
  /**
  * Machine pool etcd role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#etcd_role ClusterV2#etcd_role}
  */
  readonly etcdRole?: boolean | cdktf.IResolvable;
  /**
  * maximum length for autogenerated hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#hostname_length_limit ClusterV2#hostname_length_limit}
  */
  readonly hostnameLengthLimit?: number;
  /**
  * Labels of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#labels ClusterV2#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Labels of the machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#machine_labels ClusterV2#machine_labels}
  */
  readonly machineLabels?: { [key: string]: string };
  /**
  * max unhealthy nodes for automated replacement to be allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#max_unhealthy ClusterV2#max_unhealthy}
  */
  readonly maxUnhealthy?: string;
  /**
  * Machine pool name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#name ClusterV2#name}
  */
  readonly name: string;
  /**
  * seconds to wait for machine pool drain to complete before machine deletion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#node_drain_timeout ClusterV2#node_drain_timeout}
  */
  readonly nodeDrainTimeout?: number;
  /**
  * seconds a new node has to become active before it is replaced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#node_startup_timeout_seconds ClusterV2#node_startup_timeout_seconds}
  */
  readonly nodeStartupTimeoutSeconds?: number;
  /**
  * Machine pool paused
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#paused ClusterV2#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * Machine pool quantity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#quantity ClusterV2#quantity}
  */
  readonly quantity?: number;
  /**
  * seconds an unhealthy node has to become active before it is replaced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#unhealthy_node_timeout_seconds ClusterV2#unhealthy_node_timeout_seconds}
  */
  readonly unhealthyNodeTimeoutSeconds?: number;
  /**
  * range of unhealthy nodes for automated replacement to be allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#unhealthy_range ClusterV2#unhealthy_range}
  */
  readonly unhealthyRange?: string;
  /**
  * Machine pool worker role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#worker_role ClusterV2#worker_role}
  */
  readonly workerRole?: boolean | cdktf.IResolvable;
  /**
  * machine_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#machine_config ClusterV2#machine_config}
  */
  readonly machineConfig: ClusterV2RkeConfigMachinePoolsMachineConfig;
  /**
  * rolling_update block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#rolling_update ClusterV2#rolling_update}
  */
  readonly rollingUpdate?: ClusterV2RkeConfigMachinePoolsRollingUpdate;
  /**
  * taints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#taints ClusterV2#taints}
  */
  readonly taints?: ClusterV2RkeConfigMachinePoolsTaints[] | cdktf.IResolvable;
}

export function clusterV2RkeConfigMachinePoolsToTerraform(struct?: ClusterV2RkeConfigMachinePools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    cloud_credential_secret_name: cdktf.stringToTerraform(struct!.cloudCredentialSecretName),
    control_plane_role: cdktf.booleanToTerraform(struct!.controlPlaneRole),
    drain_before_delete: cdktf.booleanToTerraform(struct!.drainBeforeDelete),
    etcd_role: cdktf.booleanToTerraform(struct!.etcdRole),
    hostname_length_limit: cdktf.numberToTerraform(struct!.hostnameLengthLimit),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    machine_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.machineLabels),
    max_unhealthy: cdktf.stringToTerraform(struct!.maxUnhealthy),
    name: cdktf.stringToTerraform(struct!.name),
    node_drain_timeout: cdktf.numberToTerraform(struct!.nodeDrainTimeout),
    node_startup_timeout_seconds: cdktf.numberToTerraform(struct!.nodeStartupTimeoutSeconds),
    paused: cdktf.booleanToTerraform(struct!.paused),
    quantity: cdktf.numberToTerraform(struct!.quantity),
    unhealthy_node_timeout_seconds: cdktf.numberToTerraform(struct!.unhealthyNodeTimeoutSeconds),
    unhealthy_range: cdktf.stringToTerraform(struct!.unhealthyRange),
    worker_role: cdktf.booleanToTerraform(struct!.workerRole),
    machine_config: clusterV2RkeConfigMachinePoolsMachineConfigToTerraform(struct!.machineConfig),
    rolling_update: clusterV2RkeConfigMachinePoolsRollingUpdateToTerraform(struct!.rollingUpdate),
    taints: cdktf.listMapper(clusterV2RkeConfigMachinePoolsTaintsToTerraform, true)(struct!.taints),
  }
}


export function clusterV2RkeConfigMachinePoolsToHclTerraform(struct?: ClusterV2RkeConfigMachinePools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    cloud_credential_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.cloudCredentialSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    control_plane_role: {
      value: cdktf.booleanToHclTerraform(struct!.controlPlaneRole),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    drain_before_delete: {
      value: cdktf.booleanToHclTerraform(struct!.drainBeforeDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    etcd_role: {
      value: cdktf.booleanToHclTerraform(struct!.etcdRole),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hostname_length_limit: {
      value: cdktf.numberToHclTerraform(struct!.hostnameLengthLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    machine_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.machineLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    max_unhealthy: {
      value: cdktf.stringToHclTerraform(struct!.maxUnhealthy),
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
    node_drain_timeout: {
      value: cdktf.numberToHclTerraform(struct!.nodeDrainTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_startup_timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.nodeStartupTimeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    paused: {
      value: cdktf.booleanToHclTerraform(struct!.paused),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    quantity: {
      value: cdktf.numberToHclTerraform(struct!.quantity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unhealthy_node_timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.unhealthyNodeTimeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unhealthy_range: {
      value: cdktf.stringToHclTerraform(struct!.unhealthyRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    worker_role: {
      value: cdktf.booleanToHclTerraform(struct!.workerRole),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    machine_config: {
      value: clusterV2RkeConfigMachinePoolsMachineConfigToHclTerraform(struct!.machineConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2RkeConfigMachinePoolsMachineConfigList",
    },
    rolling_update: {
      value: clusterV2RkeConfigMachinePoolsRollingUpdateToHclTerraform(struct!.rollingUpdate),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2RkeConfigMachinePoolsRollingUpdateList",
    },
    taints: {
      value: cdktf.listMapperHcl(clusterV2RkeConfigMachinePoolsTaintsToHclTerraform, true)(struct!.taints),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2RkeConfigMachinePoolsTaintsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2RkeConfigMachinePoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2RkeConfigMachinePools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._cloudCredentialSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudCredentialSecretName = this._cloudCredentialSecretName;
    }
    if (this._controlPlaneRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneRole = this._controlPlaneRole;
    }
    if (this._drainBeforeDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.drainBeforeDelete = this._drainBeforeDelete;
    }
    if (this._etcdRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.etcdRole = this._etcdRole;
    }
    if (this._hostnameLengthLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameLengthLimit = this._hostnameLengthLimit;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._machineLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineLabels = this._machineLabels;
    }
    if (this._maxUnhealthy !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnhealthy = this._maxUnhealthy;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nodeDrainTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeDrainTimeout = this._nodeDrainTimeout;
    }
    if (this._nodeStartupTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeStartupTimeoutSeconds = this._nodeStartupTimeoutSeconds;
    }
    if (this._paused !== undefined) {
      hasAnyValues = true;
      internalValueResult.paused = this._paused;
    }
    if (this._quantity !== undefined) {
      hasAnyValues = true;
      internalValueResult.quantity = this._quantity;
    }
    if (this._unhealthyNodeTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyNodeTimeoutSeconds = this._unhealthyNodeTimeoutSeconds;
    }
    if (this._unhealthyRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyRange = this._unhealthyRange;
    }
    if (this._workerRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerRole = this._workerRole;
    }
    if (this._machineConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineConfig = this._machineConfig?.internalValue;
    }
    if (this._rollingUpdate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollingUpdate = this._rollingUpdate?.internalValue;
    }
    if (this._taints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taints = this._taints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2RkeConfigMachinePools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._cloudCredentialSecretName = undefined;
      this._controlPlaneRole = undefined;
      this._drainBeforeDelete = undefined;
      this._etcdRole = undefined;
      this._hostnameLengthLimit = undefined;
      this._labels = undefined;
      this._machineLabels = undefined;
      this._maxUnhealthy = undefined;
      this._name = undefined;
      this._nodeDrainTimeout = undefined;
      this._nodeStartupTimeoutSeconds = undefined;
      this._paused = undefined;
      this._quantity = undefined;
      this._unhealthyNodeTimeoutSeconds = undefined;
      this._unhealthyRange = undefined;
      this._workerRole = undefined;
      this._machineConfig.internalValue = undefined;
      this._rollingUpdate.internalValue = undefined;
      this._taints.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._cloudCredentialSecretName = value.cloudCredentialSecretName;
      this._controlPlaneRole = value.controlPlaneRole;
      this._drainBeforeDelete = value.drainBeforeDelete;
      this._etcdRole = value.etcdRole;
      this._hostnameLengthLimit = value.hostnameLengthLimit;
      this._labels = value.labels;
      this._machineLabels = value.machineLabels;
      this._maxUnhealthy = value.maxUnhealthy;
      this._name = value.name;
      this._nodeDrainTimeout = value.nodeDrainTimeout;
      this._nodeStartupTimeoutSeconds = value.nodeStartupTimeoutSeconds;
      this._paused = value.paused;
      this._quantity = value.quantity;
      this._unhealthyNodeTimeoutSeconds = value.unhealthyNodeTimeoutSeconds;
      this._unhealthyRange = value.unhealthyRange;
      this._workerRole = value.workerRole;
      this._machineConfig.internalValue = value.machineConfig;
      this._rollingUpdate.internalValue = value.rollingUpdate;
      this._taints.internalValue = value.taints;
    }
  }

  // annotations - computed: true, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // cloud_credential_secret_name - computed: false, optional: true, required: false
  private _cloudCredentialSecretName?: string; 
  public get cloudCredentialSecretName() {
    return this.getStringAttribute('cloud_credential_secret_name');
  }
  public set cloudCredentialSecretName(value: string) {
    this._cloudCredentialSecretName = value;
  }
  public resetCloudCredentialSecretName() {
    this._cloudCredentialSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudCredentialSecretNameInput() {
    return this._cloudCredentialSecretName;
  }

  // control_plane_role - computed: false, optional: true, required: false
  private _controlPlaneRole?: boolean | cdktf.IResolvable; 
  public get controlPlaneRole() {
    return this.getBooleanAttribute('control_plane_role');
  }
  public set controlPlaneRole(value: boolean | cdktf.IResolvable) {
    this._controlPlaneRole = value;
  }
  public resetControlPlaneRole() {
    this._controlPlaneRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneRoleInput() {
    return this._controlPlaneRole;
  }

  // drain_before_delete - computed: false, optional: true, required: false
  private _drainBeforeDelete?: boolean | cdktf.IResolvable; 
  public get drainBeforeDelete() {
    return this.getBooleanAttribute('drain_before_delete');
  }
  public set drainBeforeDelete(value: boolean | cdktf.IResolvable) {
    this._drainBeforeDelete = value;
  }
  public resetDrainBeforeDelete() {
    this._drainBeforeDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drainBeforeDeleteInput() {
    return this._drainBeforeDelete;
  }

  // etcd_role - computed: false, optional: true, required: false
  private _etcdRole?: boolean | cdktf.IResolvable; 
  public get etcdRole() {
    return this.getBooleanAttribute('etcd_role');
  }
  public set etcdRole(value: boolean | cdktf.IResolvable) {
    this._etcdRole = value;
  }
  public resetEtcdRole() {
    this._etcdRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etcdRoleInput() {
    return this._etcdRole;
  }

  // hostname_length_limit - computed: false, optional: true, required: false
  private _hostnameLengthLimit?: number; 
  public get hostnameLengthLimit() {
    return this.getNumberAttribute('hostname_length_limit');
  }
  public set hostnameLengthLimit(value: number) {
    this._hostnameLengthLimit = value;
  }
  public resetHostnameLengthLimit() {
    this._hostnameLengthLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameLengthLimitInput() {
    return this._hostnameLengthLimit;
  }

  // labels - computed: true, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // machine_labels - computed: true, optional: true, required: false
  private _machineLabels?: { [key: string]: string }; 
  public get machineLabels() {
    return this.getStringMapAttribute('machine_labels');
  }
  public set machineLabels(value: { [key: string]: string }) {
    this._machineLabels = value;
  }
  public resetMachineLabels() {
    this._machineLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineLabelsInput() {
    return this._machineLabels;
  }

  // max_unhealthy - computed: false, optional: true, required: false
  private _maxUnhealthy?: string; 
  public get maxUnhealthy() {
    return this.getStringAttribute('max_unhealthy');
  }
  public set maxUnhealthy(value: string) {
    this._maxUnhealthy = value;
  }
  public resetMaxUnhealthy() {
    this._maxUnhealthy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnhealthyInput() {
    return this._maxUnhealthy;
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

  // node_drain_timeout - computed: false, optional: true, required: false
  private _nodeDrainTimeout?: number; 
  public get nodeDrainTimeout() {
    return this.getNumberAttribute('node_drain_timeout');
  }
  public set nodeDrainTimeout(value: number) {
    this._nodeDrainTimeout = value;
  }
  public resetNodeDrainTimeout() {
    this._nodeDrainTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeDrainTimeoutInput() {
    return this._nodeDrainTimeout;
  }

  // node_startup_timeout_seconds - computed: false, optional: true, required: false
  private _nodeStartupTimeoutSeconds?: number; 
  public get nodeStartupTimeoutSeconds() {
    return this.getNumberAttribute('node_startup_timeout_seconds');
  }
  public set nodeStartupTimeoutSeconds(value: number) {
    this._nodeStartupTimeoutSeconds = value;
  }
  public resetNodeStartupTimeoutSeconds() {
    this._nodeStartupTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeStartupTimeoutSecondsInput() {
    return this._nodeStartupTimeoutSeconds;
  }

  // paused - computed: false, optional: true, required: false
  private _paused?: boolean | cdktf.IResolvable; 
  public get paused() {
    return this.getBooleanAttribute('paused');
  }
  public set paused(value: boolean | cdktf.IResolvable) {
    this._paused = value;
  }
  public resetPaused() {
    this._paused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pausedInput() {
    return this._paused;
  }

  // quantity - computed: false, optional: true, required: false
  private _quantity?: number; 
  public get quantity() {
    return this.getNumberAttribute('quantity');
  }
  public set quantity(value: number) {
    this._quantity = value;
  }
  public resetQuantity() {
    this._quantity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quantityInput() {
    return this._quantity;
  }

  // unhealthy_node_timeout_seconds - computed: false, optional: true, required: false
  private _unhealthyNodeTimeoutSeconds?: number; 
  public get unhealthyNodeTimeoutSeconds() {
    return this.getNumberAttribute('unhealthy_node_timeout_seconds');
  }
  public set unhealthyNodeTimeoutSeconds(value: number) {
    this._unhealthyNodeTimeoutSeconds = value;
  }
  public resetUnhealthyNodeTimeoutSeconds() {
    this._unhealthyNodeTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyNodeTimeoutSecondsInput() {
    return this._unhealthyNodeTimeoutSeconds;
  }

  // unhealthy_range - computed: false, optional: true, required: false
  private _unhealthyRange?: string; 
  public get unhealthyRange() {
    return this.getStringAttribute('unhealthy_range');
  }
  public set unhealthyRange(value: string) {
    this._unhealthyRange = value;
  }
  public resetUnhealthyRange() {
    this._unhealthyRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyRangeInput() {
    return this._unhealthyRange;
  }

  // worker_role - computed: false, optional: true, required: false
  private _workerRole?: boolean | cdktf.IResolvable; 
  public get workerRole() {
    return this.getBooleanAttribute('worker_role');
  }
  public set workerRole(value: boolean | cdktf.IResolvable) {
    this._workerRole = value;
  }
  public resetWorkerRole() {
    this._workerRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerRoleInput() {
    return this._workerRole;
  }

  // machine_config - computed: false, optional: false, required: true
  private _machineConfig = new ClusterV2RkeConfigMachinePoolsMachineConfigOutputReference(this, "machine_config");
  public get machineConfig() {
    return this._machineConfig;
  }
  public putMachineConfig(value: ClusterV2RkeConfigMachinePoolsMachineConfig) {
    this._machineConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineConfigInput() {
    return this._machineConfig.internalValue;
  }

  // rolling_update - computed: false, optional: true, required: false
  private _rollingUpdate = new ClusterV2RkeConfigMachinePoolsRollingUpdateOutputReference(this, "rolling_update");
  public get rollingUpdate() {
    return this._rollingUpdate;
  }
  public putRollingUpdate(value: ClusterV2RkeConfigMachinePoolsRollingUpdate) {
    this._rollingUpdate.internalValue = value;
  }
  public resetRollingUpdate() {
    this._rollingUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingUpdateInput() {
    return this._rollingUpdate.internalValue;
  }

  // taints - computed: false, optional: true, required: false
  private _taints = new ClusterV2RkeConfigMachinePoolsTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: ClusterV2RkeConfigMachinePoolsTaints[] | cdktf.IResolvable) {
    this._taints.internalValue = value;
  }
  public resetTaints() {
    this._taints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints.internalValue;
  }
}

export class ClusterV2RkeConfigMachinePoolsList extends cdktf.ComplexList {
  public internalValue? : ClusterV2RkeConfigMachinePools[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2RkeConfigMachinePoolsOutputReference {
    return new ClusterV2RkeConfigMachinePoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2RkeConfigMachineSelectorConfigMachineLabelSelectorMatchExpressions {
  /**
  * Label selector requirement key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#key ClusterV2#key}
  */
  readonly key?: string;
  /**
  * Label selector operator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#operator ClusterV2#operator}
  */
  readonly operator?: string;
  /**
  * Label selector requirement values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#values ClusterV2#values}
  */
  readonly values?: string[];
}

export function clusterV2RkeConfigMachineSelectorConfigMachineLabelSelectorMatchExpressionsToTerraform(struct?: ClusterV2RkeConfigMachineSelectorConfigMachineLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function clusterV2RkeConfigMachineSelectorConfigMachineLabelSelectorMatchExpressionsToHclTerraform(struct?: ClusterV2RkeConfigMachineSelectorConfigMachineLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2RkeConfigMachineSelectorConfigMachineLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2RkeConfigMachineSelectorConfigMachineLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2RkeConfigMachineSelectorConfigMachineLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ClusterV2RkeConfigMachineSelectorConfigMachineLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : ClusterV2RkeConfigMachineSelectorConfigMachineLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2RkeConfigMachineSelectorConfigMachineLabelSelectorMatchExpressionsOutputReference {
    return new ClusterV2RkeConfigMachineSelectorConfigMachineLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2RkeConfigMachineSelectorConfigMachineLabelSelector {
  /**
  * Label selector match labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#match_labels ClusterV2#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#match_expressions ClusterV2#match_expressions}
  */
  readonly matchExpressions?: ClusterV2RkeConfigMachineSelectorConfigMachineLabelSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function clusterV2RkeConfigMachineSelectorConfigMachineLabelSelectorToTerraform(struct?: ClusterV2RkeConfigMachineSelectorConfigMachineLabelSelectorOutputReference | ClusterV2RkeConfigMachineSelectorConfigMachineLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(clusterV2RkeConfigMachineSelectorConfigMachineLabelSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function clusterV2RkeConfigMachineSelectorConfigMachineLabelSelectorToHclTerraform(struct?: ClusterV2RkeConfigMachineSelectorConfigMachineLabelSelectorOutputReference | ClusterV2RkeConfigMachineSelectorConfigMachineLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(clusterV2RkeConfigMachineSelectorConfigMachineLabelSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2RkeConfigMachineSelectorConfigMachineLabelSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2RkeConfigMachineSelectorConfigMachineLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterV2RkeConfigMachineSelectorConfigMachineLabelSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2RkeConfigMachineSelectorConfigMachineLabelSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new ClusterV2RkeConfigMachineSelectorConfigMachineLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: ClusterV2RkeConfigMachineSelectorConfigMachineLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface ClusterV2RkeConfigMachineSelectorConfig {
  /**
  * Machine selector config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#config ClusterV2#config}
  */
  readonly config?: string;
  /**
  * machine_label_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#machine_label_selector ClusterV2#machine_label_selector}
  */
  readonly machineLabelSelector?: ClusterV2RkeConfigMachineSelectorConfigMachineLabelSelector;
}

export function clusterV2RkeConfigMachineSelectorConfigToTerraform(struct?: ClusterV2RkeConfigMachineSelectorConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.stringToTerraform(struct!.config),
    machine_label_selector: clusterV2RkeConfigMachineSelectorConfigMachineLabelSelectorToTerraform(struct!.machineLabelSelector),
  }
}


export function clusterV2RkeConfigMachineSelectorConfigToHclTerraform(struct?: ClusterV2RkeConfigMachineSelectorConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.stringToHclTerraform(struct!.config),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    machine_label_selector: {
      value: clusterV2RkeConfigMachineSelectorConfigMachineLabelSelectorToHclTerraform(struct!.machineLabelSelector),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2RkeConfigMachineSelectorConfigMachineLabelSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2RkeConfigMachineSelectorConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2RkeConfigMachineSelectorConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._machineLabelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineLabelSelector = this._machineLabelSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2RkeConfigMachineSelectorConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._machineLabelSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._machineLabelSelector.internalValue = value.machineLabelSelector;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // machine_label_selector - computed: false, optional: true, required: false
  private _machineLabelSelector = new ClusterV2RkeConfigMachineSelectorConfigMachineLabelSelectorOutputReference(this, "machine_label_selector");
  public get machineLabelSelector() {
    return this._machineLabelSelector;
  }
  public putMachineLabelSelector(value: ClusterV2RkeConfigMachineSelectorConfigMachineLabelSelector) {
    this._machineLabelSelector.internalValue = value;
  }
  public resetMachineLabelSelector() {
    this._machineLabelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineLabelSelectorInput() {
    return this._machineLabelSelector.internalValue;
  }
}

export class ClusterV2RkeConfigMachineSelectorConfigList extends cdktf.ComplexList {
  public internalValue? : ClusterV2RkeConfigMachineSelectorConfig[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2RkeConfigMachineSelectorConfigOutputReference {
    return new ClusterV2RkeConfigMachineSelectorConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmapItems {
  /**
  * If ture, the file is ignored when determining whether the node should be drained before updating the node plan (default: true).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#dynamic ClusterV2#dynamic}
  */
  readonly dynamic?: boolean | cdktf.IResolvable;
  /**
  * The base64 encoded value of the SHA256 checksum of the file's content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#hash ClusterV2#hash}
  */
  readonly hash?: string;
  /**
  * The key of the item(file) to retrieve
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#key ClusterV2#key}
  */
  readonly key: string;
  /**
  * The path to put the file in the target node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#path ClusterV2#path}
  */
  readonly path: string;
  /**
  * The numeric representation of the file permissions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#permissions ClusterV2#permissions}
  */
  readonly permissions?: string;
}

export function clusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmapItemsToTerraform(struct?: ClusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmapItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dynamic: cdktf.booleanToTerraform(struct!.dynamic),
    hash: cdktf.stringToTerraform(struct!.hash),
    key: cdktf.stringToTerraform(struct!.key),
    path: cdktf.stringToTerraform(struct!.path),
    permissions: cdktf.stringToTerraform(struct!.permissions),
  }
}


export function clusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmapItemsToHclTerraform(struct?: ClusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmapItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dynamic: {
      value: cdktf.booleanToHclTerraform(struct!.dynamic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hash: {
      value: cdktf.stringToHclTerraform(struct!.hash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permissions: {
      value: cdktf.stringToHclTerraform(struct!.permissions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmapItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmapItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dynamic !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamic = this._dynamic;
    }
    if (this._hash !== undefined) {
      hasAnyValues = true;
      internalValueResult.hash = this._hash;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmapItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dynamic = undefined;
      this._hash = undefined;
      this._key = undefined;
      this._path = undefined;
      this._permissions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dynamic = value.dynamic;
      this._hash = value.hash;
      this._key = value.key;
      this._path = value.path;
      this._permissions = value.permissions;
    }
  }

  // dynamic - computed: false, optional: true, required: false
  private _dynamic?: boolean | cdktf.IResolvable; 
  public get dynamic() {
    return this.getBooleanAttribute('dynamic');
  }
  public set dynamic(value: boolean | cdktf.IResolvable) {
    this._dynamic = value;
  }
  public resetDynamic() {
    this._dynamic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicInput() {
    return this._dynamic;
  }

  // hash - computed: false, optional: true, required: false
  private _hash?: string; 
  public get hash() {
    return this.getStringAttribute('hash');
  }
  public set hash(value: string) {
    this._hash = value;
  }
  public resetHash() {
    this._hash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashInput() {
    return this._hash;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions?: string; 
  public get permissions() {
    return this.getStringAttribute('permissions');
  }
  public set permissions(value: string) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }
}

export class ClusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmapItemsList extends cdktf.ComplexList {
  public internalValue? : ClusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmapItems[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmapItemsOutputReference {
    return new ClusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmapItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmap {
  /**
  * The default permissions to be applied when they are not set at the item level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#default_permissions ClusterV2#default_permissions}
  */
  readonly defaultPermissions?: string;
  /**
  * The name of the K8s object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#name ClusterV2#name}
  */
  readonly name: string;
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#items ClusterV2#items}
  */
  readonly items?: ClusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmapItems[] | cdktf.IResolvable;
}

export function clusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmapToTerraform(struct?: ClusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmapOutputReference | ClusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_permissions: cdktf.stringToTerraform(struct!.defaultPermissions),
    name: cdktf.stringToTerraform(struct!.name),
    items: cdktf.listMapper(clusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmapItemsToTerraform, true)(struct!.items),
  }
}


export function clusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmapToHclTerraform(struct?: ClusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmapOutputReference | ClusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_permissions: {
      value: cdktf.stringToHclTerraform(struct!.defaultPermissions),
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
    items: {
      value: cdktf.listMapperHcl(clusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmapItemsToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmapItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultPermissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultPermissions = this._defaultPermissions;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultPermissions = undefined;
      this._name = undefined;
      this._items.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultPermissions = value.defaultPermissions;
      this._name = value.name;
      this._items.internalValue = value.items;
    }
  }

  // default_permissions - computed: false, optional: true, required: false
  private _defaultPermissions?: string; 
  public get defaultPermissions() {
    return this.getStringAttribute('default_permissions');
  }
  public set defaultPermissions(value: string) {
    this._defaultPermissions = value;
  }
  public resetDefaultPermissions() {
    this._defaultPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPermissionsInput() {
    return this._defaultPermissions;
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

  // items - computed: false, optional: true, required: false
  private _items = new ClusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmapItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: ClusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmapItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface ClusterV2RkeConfigMachineSelectorFilesFileSourcesSecretItems {
  /**
  * If ture, the file is ignored when determining whether the node should be drained before updating the node plan (default: true).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#dynamic ClusterV2#dynamic}
  */
  readonly dynamic?: boolean | cdktf.IResolvable;
  /**
  * The base64 encoded value of the SHA256 checksum of the file's content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#hash ClusterV2#hash}
  */
  readonly hash?: string;
  /**
  * The key of the item(file) to retrieve
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#key ClusterV2#key}
  */
  readonly key: string;
  /**
  * The path to put the file in the target node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#path ClusterV2#path}
  */
  readonly path: string;
  /**
  * The numeric representation of the file permissions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#permissions ClusterV2#permissions}
  */
  readonly permissions?: string;
}

export function clusterV2RkeConfigMachineSelectorFilesFileSourcesSecretItemsToTerraform(struct?: ClusterV2RkeConfigMachineSelectorFilesFileSourcesSecretItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dynamic: cdktf.booleanToTerraform(struct!.dynamic),
    hash: cdktf.stringToTerraform(struct!.hash),
    key: cdktf.stringToTerraform(struct!.key),
    path: cdktf.stringToTerraform(struct!.path),
    permissions: cdktf.stringToTerraform(struct!.permissions),
  }
}


export function clusterV2RkeConfigMachineSelectorFilesFileSourcesSecretItemsToHclTerraform(struct?: ClusterV2RkeConfigMachineSelectorFilesFileSourcesSecretItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dynamic: {
      value: cdktf.booleanToHclTerraform(struct!.dynamic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hash: {
      value: cdktf.stringToHclTerraform(struct!.hash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permissions: {
      value: cdktf.stringToHclTerraform(struct!.permissions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2RkeConfigMachineSelectorFilesFileSourcesSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2RkeConfigMachineSelectorFilesFileSourcesSecretItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dynamic !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamic = this._dynamic;
    }
    if (this._hash !== undefined) {
      hasAnyValues = true;
      internalValueResult.hash = this._hash;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2RkeConfigMachineSelectorFilesFileSourcesSecretItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dynamic = undefined;
      this._hash = undefined;
      this._key = undefined;
      this._path = undefined;
      this._permissions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dynamic = value.dynamic;
      this._hash = value.hash;
      this._key = value.key;
      this._path = value.path;
      this._permissions = value.permissions;
    }
  }

  // dynamic - computed: false, optional: true, required: false
  private _dynamic?: boolean | cdktf.IResolvable; 
  public get dynamic() {
    return this.getBooleanAttribute('dynamic');
  }
  public set dynamic(value: boolean | cdktf.IResolvable) {
    this._dynamic = value;
  }
  public resetDynamic() {
    this._dynamic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicInput() {
    return this._dynamic;
  }

  // hash - computed: false, optional: true, required: false
  private _hash?: string; 
  public get hash() {
    return this.getStringAttribute('hash');
  }
  public set hash(value: string) {
    this._hash = value;
  }
  public resetHash() {
    this._hash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashInput() {
    return this._hash;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions?: string; 
  public get permissions() {
    return this.getStringAttribute('permissions');
  }
  public set permissions(value: string) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }
}

export class ClusterV2RkeConfigMachineSelectorFilesFileSourcesSecretItemsList extends cdktf.ComplexList {
  public internalValue? : ClusterV2RkeConfigMachineSelectorFilesFileSourcesSecretItems[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2RkeConfigMachineSelectorFilesFileSourcesSecretItemsOutputReference {
    return new ClusterV2RkeConfigMachineSelectorFilesFileSourcesSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2RkeConfigMachineSelectorFilesFileSourcesSecret {
  /**
  * The default permissions to be applied when they are not set at the item level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#default_permissions ClusterV2#default_permissions}
  */
  readonly defaultPermissions?: string;
  /**
  * The name of the K8s object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#name ClusterV2#name}
  */
  readonly name: string;
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#items ClusterV2#items}
  */
  readonly items?: ClusterV2RkeConfigMachineSelectorFilesFileSourcesSecretItems[] | cdktf.IResolvable;
}

export function clusterV2RkeConfigMachineSelectorFilesFileSourcesSecretToTerraform(struct?: ClusterV2RkeConfigMachineSelectorFilesFileSourcesSecretOutputReference | ClusterV2RkeConfigMachineSelectorFilesFileSourcesSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_permissions: cdktf.stringToTerraform(struct!.defaultPermissions),
    name: cdktf.stringToTerraform(struct!.name),
    items: cdktf.listMapper(clusterV2RkeConfigMachineSelectorFilesFileSourcesSecretItemsToTerraform, true)(struct!.items),
  }
}


export function clusterV2RkeConfigMachineSelectorFilesFileSourcesSecretToHclTerraform(struct?: ClusterV2RkeConfigMachineSelectorFilesFileSourcesSecretOutputReference | ClusterV2RkeConfigMachineSelectorFilesFileSourcesSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_permissions: {
      value: cdktf.stringToHclTerraform(struct!.defaultPermissions),
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
    items: {
      value: cdktf.listMapperHcl(clusterV2RkeConfigMachineSelectorFilesFileSourcesSecretItemsToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2RkeConfigMachineSelectorFilesFileSourcesSecretItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2RkeConfigMachineSelectorFilesFileSourcesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterV2RkeConfigMachineSelectorFilesFileSourcesSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultPermissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultPermissions = this._defaultPermissions;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2RkeConfigMachineSelectorFilesFileSourcesSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultPermissions = undefined;
      this._name = undefined;
      this._items.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultPermissions = value.defaultPermissions;
      this._name = value.name;
      this._items.internalValue = value.items;
    }
  }

  // default_permissions - computed: false, optional: true, required: false
  private _defaultPermissions?: string; 
  public get defaultPermissions() {
    return this.getStringAttribute('default_permissions');
  }
  public set defaultPermissions(value: string) {
    this._defaultPermissions = value;
  }
  public resetDefaultPermissions() {
    this._defaultPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPermissionsInput() {
    return this._defaultPermissions;
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

  // items - computed: false, optional: true, required: false
  private _items = new ClusterV2RkeConfigMachineSelectorFilesFileSourcesSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: ClusterV2RkeConfigMachineSelectorFilesFileSourcesSecretItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface ClusterV2RkeConfigMachineSelectorFilesFileSources {
  /**
  * configmap block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#configmap ClusterV2#configmap}
  */
  readonly configmap?: ClusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmap;
  /**
  * secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#secret ClusterV2#secret}
  */
  readonly secret?: ClusterV2RkeConfigMachineSelectorFilesFileSourcesSecret;
}

export function clusterV2RkeConfigMachineSelectorFilesFileSourcesToTerraform(struct?: ClusterV2RkeConfigMachineSelectorFilesFileSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configmap: clusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmapToTerraform(struct!.configmap),
    secret: clusterV2RkeConfigMachineSelectorFilesFileSourcesSecretToTerraform(struct!.secret),
  }
}


export function clusterV2RkeConfigMachineSelectorFilesFileSourcesToHclTerraform(struct?: ClusterV2RkeConfigMachineSelectorFilesFileSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configmap: {
      value: clusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmapToHclTerraform(struct!.configmap),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmapList",
    },
    secret: {
      value: clusterV2RkeConfigMachineSelectorFilesFileSourcesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2RkeConfigMachineSelectorFilesFileSourcesSecretList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2RkeConfigMachineSelectorFilesFileSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2RkeConfigMachineSelectorFilesFileSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configmap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configmap = this._configmap?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2RkeConfigMachineSelectorFilesFileSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configmap.internalValue = undefined;
      this._secret.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configmap.internalValue = value.configmap;
      this._secret.internalValue = value.secret;
    }
  }

  // configmap - computed: false, optional: true, required: false
  private _configmap = new ClusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmapOutputReference(this, "configmap");
  public get configmap() {
    return this._configmap;
  }
  public putConfigmap(value: ClusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmap) {
    this._configmap.internalValue = value;
  }
  public resetConfigmap() {
    this._configmap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configmapInput() {
    return this._configmap.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new ClusterV2RkeConfigMachineSelectorFilesFileSourcesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: ClusterV2RkeConfigMachineSelectorFilesFileSourcesSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }
}

export class ClusterV2RkeConfigMachineSelectorFilesFileSourcesList extends cdktf.ComplexList {
  public internalValue? : ClusterV2RkeConfigMachineSelectorFilesFileSources[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2RkeConfigMachineSelectorFilesFileSourcesOutputReference {
    return new ClusterV2RkeConfigMachineSelectorFilesFileSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2RkeConfigMachineSelectorFilesMachineLabelSelectorMatchExpressions {
  /**
  * Label selector requirement key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#key ClusterV2#key}
  */
  readonly key?: string;
  /**
  * Label selector operator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#operator ClusterV2#operator}
  */
  readonly operator?: string;
  /**
  * Label selector requirement values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#values ClusterV2#values}
  */
  readonly values?: string[];
}

export function clusterV2RkeConfigMachineSelectorFilesMachineLabelSelectorMatchExpressionsToTerraform(struct?: ClusterV2RkeConfigMachineSelectorFilesMachineLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function clusterV2RkeConfigMachineSelectorFilesMachineLabelSelectorMatchExpressionsToHclTerraform(struct?: ClusterV2RkeConfigMachineSelectorFilesMachineLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2RkeConfigMachineSelectorFilesMachineLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2RkeConfigMachineSelectorFilesMachineLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2RkeConfigMachineSelectorFilesMachineLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ClusterV2RkeConfigMachineSelectorFilesMachineLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : ClusterV2RkeConfigMachineSelectorFilesMachineLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2RkeConfigMachineSelectorFilesMachineLabelSelectorMatchExpressionsOutputReference {
    return new ClusterV2RkeConfigMachineSelectorFilesMachineLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2RkeConfigMachineSelectorFilesMachineLabelSelector {
  /**
  * Label selector match labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#match_labels ClusterV2#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#match_expressions ClusterV2#match_expressions}
  */
  readonly matchExpressions?: ClusterV2RkeConfigMachineSelectorFilesMachineLabelSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function clusterV2RkeConfigMachineSelectorFilesMachineLabelSelectorToTerraform(struct?: ClusterV2RkeConfigMachineSelectorFilesMachineLabelSelectorOutputReference | ClusterV2RkeConfigMachineSelectorFilesMachineLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(clusterV2RkeConfigMachineSelectorFilesMachineLabelSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function clusterV2RkeConfigMachineSelectorFilesMachineLabelSelectorToHclTerraform(struct?: ClusterV2RkeConfigMachineSelectorFilesMachineLabelSelectorOutputReference | ClusterV2RkeConfigMachineSelectorFilesMachineLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(clusterV2RkeConfigMachineSelectorFilesMachineLabelSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2RkeConfigMachineSelectorFilesMachineLabelSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2RkeConfigMachineSelectorFilesMachineLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterV2RkeConfigMachineSelectorFilesMachineLabelSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2RkeConfigMachineSelectorFilesMachineLabelSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new ClusterV2RkeConfigMachineSelectorFilesMachineLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: ClusterV2RkeConfigMachineSelectorFilesMachineLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface ClusterV2RkeConfigMachineSelectorFiles {
  /**
  * file_sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#file_sources ClusterV2#file_sources}
  */
  readonly fileSources?: ClusterV2RkeConfigMachineSelectorFilesFileSources[] | cdktf.IResolvable;
  /**
  * machine_label_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#machine_label_selector ClusterV2#machine_label_selector}
  */
  readonly machineLabelSelector?: ClusterV2RkeConfigMachineSelectorFilesMachineLabelSelector;
}

export function clusterV2RkeConfigMachineSelectorFilesToTerraform(struct?: ClusterV2RkeConfigMachineSelectorFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_sources: cdktf.listMapper(clusterV2RkeConfigMachineSelectorFilesFileSourcesToTerraform, true)(struct!.fileSources),
    machine_label_selector: clusterV2RkeConfigMachineSelectorFilesMachineLabelSelectorToTerraform(struct!.machineLabelSelector),
  }
}


export function clusterV2RkeConfigMachineSelectorFilesToHclTerraform(struct?: ClusterV2RkeConfigMachineSelectorFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_sources: {
      value: cdktf.listMapperHcl(clusterV2RkeConfigMachineSelectorFilesFileSourcesToHclTerraform, true)(struct!.fileSources),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2RkeConfigMachineSelectorFilesFileSourcesList",
    },
    machine_label_selector: {
      value: clusterV2RkeConfigMachineSelectorFilesMachineLabelSelectorToHclTerraform(struct!.machineLabelSelector),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2RkeConfigMachineSelectorFilesMachineLabelSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2RkeConfigMachineSelectorFilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2RkeConfigMachineSelectorFiles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSources = this._fileSources?.internalValue;
    }
    if (this._machineLabelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineLabelSelector = this._machineLabelSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2RkeConfigMachineSelectorFiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileSources.internalValue = undefined;
      this._machineLabelSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileSources.internalValue = value.fileSources;
      this._machineLabelSelector.internalValue = value.machineLabelSelector;
    }
  }

  // file_sources - computed: false, optional: true, required: false
  private _fileSources = new ClusterV2RkeConfigMachineSelectorFilesFileSourcesList(this, "file_sources", false);
  public get fileSources() {
    return this._fileSources;
  }
  public putFileSources(value: ClusterV2RkeConfigMachineSelectorFilesFileSources[] | cdktf.IResolvable) {
    this._fileSources.internalValue = value;
  }
  public resetFileSources() {
    this._fileSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSourcesInput() {
    return this._fileSources.internalValue;
  }

  // machine_label_selector - computed: false, optional: true, required: false
  private _machineLabelSelector = new ClusterV2RkeConfigMachineSelectorFilesMachineLabelSelectorOutputReference(this, "machine_label_selector");
  public get machineLabelSelector() {
    return this._machineLabelSelector;
  }
  public putMachineLabelSelector(value: ClusterV2RkeConfigMachineSelectorFilesMachineLabelSelector) {
    this._machineLabelSelector.internalValue = value;
  }
  public resetMachineLabelSelector() {
    this._machineLabelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineLabelSelectorInput() {
    return this._machineLabelSelector.internalValue;
  }
}

export class ClusterV2RkeConfigMachineSelectorFilesList extends cdktf.ComplexList {
  public internalValue? : ClusterV2RkeConfigMachineSelectorFiles[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2RkeConfigMachineSelectorFilesOutputReference {
    return new ClusterV2RkeConfigMachineSelectorFilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2RkeConfigRegistriesConfigs {
  /**
  * Registry auth config secret name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#auth_config_secret_name ClusterV2#auth_config_secret_name}
  */
  readonly authConfigSecretName?: string;
  /**
  * Registry CA bundle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#ca_bundle ClusterV2#ca_bundle}
  */
  readonly caBundle?: string;
  /**
  * Registry hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#hostname ClusterV2#hostname}
  */
  readonly hostname: string;
  /**
  * Registry insecure connectivity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#insecure ClusterV2#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Registry TLS secret name. TLS is a pair of Cert/Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#tls_secret_name ClusterV2#tls_secret_name}
  */
  readonly tlsSecretName?: string;
}

export function clusterV2RkeConfigRegistriesConfigsToTerraform(struct?: ClusterV2RkeConfigRegistriesConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_config_secret_name: cdktf.stringToTerraform(struct!.authConfigSecretName),
    ca_bundle: cdktf.stringToTerraform(struct!.caBundle),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    tls_secret_name: cdktf.stringToTerraform(struct!.tlsSecretName),
  }
}


export function clusterV2RkeConfigRegistriesConfigsToHclTerraform(struct?: ClusterV2RkeConfigRegistriesConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_config_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.authConfigSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_bundle: {
      value: cdktf.stringToHclTerraform(struct!.caBundle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure: {
      value: cdktf.booleanToHclTerraform(struct!.insecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.tlsSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2RkeConfigRegistriesConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2RkeConfigRegistriesConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authConfigSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.authConfigSecretName = this._authConfigSecretName;
    }
    if (this._caBundle !== undefined) {
      hasAnyValues = true;
      internalValueResult.caBundle = this._caBundle;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    if (this._tlsSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsSecretName = this._tlsSecretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2RkeConfigRegistriesConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authConfigSecretName = undefined;
      this._caBundle = undefined;
      this._hostname = undefined;
      this._insecure = undefined;
      this._tlsSecretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authConfigSecretName = value.authConfigSecretName;
      this._caBundle = value.caBundle;
      this._hostname = value.hostname;
      this._insecure = value.insecure;
      this._tlsSecretName = value.tlsSecretName;
    }
  }

  // auth_config_secret_name - computed: false, optional: true, required: false
  private _authConfigSecretName?: string; 
  public get authConfigSecretName() {
    return this.getStringAttribute('auth_config_secret_name');
  }
  public set authConfigSecretName(value: string) {
    this._authConfigSecretName = value;
  }
  public resetAuthConfigSecretName() {
    this._authConfigSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authConfigSecretNameInput() {
    return this._authConfigSecretName;
  }

  // ca_bundle - computed: false, optional: true, required: false
  private _caBundle?: string; 
  public get caBundle() {
    return this.getStringAttribute('ca_bundle');
  }
  public set caBundle(value: string) {
    this._caBundle = value;
  }
  public resetCaBundle() {
    this._caBundle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caBundleInput() {
    return this._caBundle;
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this.getBooleanAttribute('insecure');
  }
  public set insecure(value: boolean | cdktf.IResolvable) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // tls_secret_name - computed: false, optional: true, required: false
  private _tlsSecretName?: string; 
  public get tlsSecretName() {
    return this.getStringAttribute('tls_secret_name');
  }
  public set tlsSecretName(value: string) {
    this._tlsSecretName = value;
  }
  public resetTlsSecretName() {
    this._tlsSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsSecretNameInput() {
    return this._tlsSecretName;
  }
}

export class ClusterV2RkeConfigRegistriesConfigsList extends cdktf.ComplexList {
  public internalValue? : ClusterV2RkeConfigRegistriesConfigs[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2RkeConfigRegistriesConfigsOutputReference {
    return new ClusterV2RkeConfigRegistriesConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2RkeConfigRegistriesMirrors {
  /**
  * Registry mirror endpoints
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#endpoints ClusterV2#endpoints}
  */
  readonly endpoints?: string[];
  /**
  * Registry hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#hostname ClusterV2#hostname}
  */
  readonly hostname: string;
  /**
  * Registry mirror rewrites
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#rewrites ClusterV2#rewrites}
  */
  readonly rewrites?: { [key: string]: string };
}

export function clusterV2RkeConfigRegistriesMirrorsToTerraform(struct?: ClusterV2RkeConfigRegistriesMirrors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoints: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.endpoints),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    rewrites: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.rewrites),
  }
}


export function clusterV2RkeConfigRegistriesMirrorsToHclTerraform(struct?: ClusterV2RkeConfigRegistriesMirrors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoints: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.endpoints),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rewrites: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.rewrites),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2RkeConfigRegistriesMirrorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2RkeConfigRegistriesMirrors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoints = this._endpoints;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._rewrites !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewrites = this._rewrites;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2RkeConfigRegistriesMirrors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoints = undefined;
      this._hostname = undefined;
      this._rewrites = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoints = value.endpoints;
      this._hostname = value.hostname;
      this._rewrites = value.rewrites;
    }
  }

  // endpoints - computed: false, optional: true, required: false
  private _endpoints?: string[]; 
  public get endpoints() {
    return this.getListAttribute('endpoints');
  }
  public set endpoints(value: string[]) {
    this._endpoints = value;
  }
  public resetEndpoints() {
    this._endpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints;
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // rewrites - computed: false, optional: true, required: false
  private _rewrites?: { [key: string]: string }; 
  public get rewrites() {
    return this.getStringMapAttribute('rewrites');
  }
  public set rewrites(value: { [key: string]: string }) {
    this._rewrites = value;
  }
  public resetRewrites() {
    this._rewrites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewritesInput() {
    return this._rewrites;
  }
}

export class ClusterV2RkeConfigRegistriesMirrorsList extends cdktf.ComplexList {
  public internalValue? : ClusterV2RkeConfigRegistriesMirrors[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2RkeConfigRegistriesMirrorsOutputReference {
    return new ClusterV2RkeConfigRegistriesMirrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2RkeConfigRegistries {
  /**
  * configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#configs ClusterV2#configs}
  */
  readonly configs?: ClusterV2RkeConfigRegistriesConfigs[] | cdktf.IResolvable;
  /**
  * mirrors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#mirrors ClusterV2#mirrors}
  */
  readonly mirrors?: ClusterV2RkeConfigRegistriesMirrors[] | cdktf.IResolvable;
}

export function clusterV2RkeConfigRegistriesToTerraform(struct?: ClusterV2RkeConfigRegistriesOutputReference | ClusterV2RkeConfigRegistries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configs: cdktf.listMapper(clusterV2RkeConfigRegistriesConfigsToTerraform, true)(struct!.configs),
    mirrors: cdktf.listMapper(clusterV2RkeConfigRegistriesMirrorsToTerraform, true)(struct!.mirrors),
  }
}


export function clusterV2RkeConfigRegistriesToHclTerraform(struct?: ClusterV2RkeConfigRegistriesOutputReference | ClusterV2RkeConfigRegistries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configs: {
      value: cdktf.listMapperHcl(clusterV2RkeConfigRegistriesConfigsToHclTerraform, true)(struct!.configs),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2RkeConfigRegistriesConfigsList",
    },
    mirrors: {
      value: cdktf.listMapperHcl(clusterV2RkeConfigRegistriesMirrorsToHclTerraform, true)(struct!.mirrors),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2RkeConfigRegistriesMirrorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2RkeConfigRegistriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterV2RkeConfigRegistries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configs = this._configs?.internalValue;
    }
    if (this._mirrors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirrors = this._mirrors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2RkeConfigRegistries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configs.internalValue = undefined;
      this._mirrors.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configs.internalValue = value.configs;
      this._mirrors.internalValue = value.mirrors;
    }
  }

  // configs - computed: false, optional: true, required: false
  private _configs = new ClusterV2RkeConfigRegistriesConfigsList(this, "configs", false);
  public get configs() {
    return this._configs;
  }
  public putConfigs(value: ClusterV2RkeConfigRegistriesConfigs[] | cdktf.IResolvable) {
    this._configs.internalValue = value;
  }
  public resetConfigs() {
    this._configs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configsInput() {
    return this._configs.internalValue;
  }

  // mirrors - computed: false, optional: true, required: false
  private _mirrors = new ClusterV2RkeConfigRegistriesMirrorsList(this, "mirrors", false);
  public get mirrors() {
    return this._mirrors;
  }
  public putMirrors(value: ClusterV2RkeConfigRegistriesMirrors[] | cdktf.IResolvable) {
    this._mirrors.internalValue = value;
  }
  public resetMirrors() {
    this._mirrors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorsInput() {
    return this._mirrors.internalValue;
  }
}
export interface ClusterV2RkeConfigRotateCertificates {
  /**
  * Desired certificate rotation generation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#generation ClusterV2#generation}
  */
  readonly generation: number;
  /**
  * Service certificates to rotate with this generation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#services ClusterV2#services}
  */
  readonly services?: string[];
}

export function clusterV2RkeConfigRotateCertificatesToTerraform(struct?: ClusterV2RkeConfigRotateCertificatesOutputReference | ClusterV2RkeConfigRotateCertificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    generation: cdktf.numberToTerraform(struct!.generation),
    services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.services),
  }
}


export function clusterV2RkeConfigRotateCertificatesToHclTerraform(struct?: ClusterV2RkeConfigRotateCertificatesOutputReference | ClusterV2RkeConfigRotateCertificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    generation: {
      value: cdktf.numberToHclTerraform(struct!.generation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.services),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2RkeConfigRotateCertificatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterV2RkeConfigRotateCertificates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._generation !== undefined) {
      hasAnyValues = true;
      internalValueResult.generation = this._generation;
    }
    if (this._services !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2RkeConfigRotateCertificates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._generation = undefined;
      this._services = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._generation = value.generation;
      this._services = value.services;
    }
  }

  // generation - computed: false, optional: false, required: true
  private _generation?: number; 
  public get generation() {
    return this.getNumberAttribute('generation');
  }
  public set generation(value: number) {
    this._generation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get generationInput() {
    return this._generation;
  }

  // services - computed: false, optional: true, required: false
  private _services?: string[]; 
  public get services() {
    return this.getListAttribute('services');
  }
  public set services(value: string[]) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }
}
export interface ClusterV2RkeConfigUpgradeStrategyControlPlaneDrainOptions {
  /**
  * Drain options delete empty dir data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#delete_empty_dir_data ClusterV2#delete_empty_dir_data}
  */
  readonly deleteEmptyDirData?: boolean | cdktf.IResolvable;
  /**
  * Drain options disable eviction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#disable_eviction ClusterV2#disable_eviction}
  */
  readonly disableEviction?: boolean | cdktf.IResolvable;
  /**
  * Drain options enabled?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#enabled ClusterV2#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Drain options force
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#force ClusterV2#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * Drain options grace period
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#grace_period ClusterV2#grace_period}
  */
  readonly gracePeriod?: number;
  /**
  * Drain options ignore daemon sets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#ignore_daemon_sets ClusterV2#ignore_daemon_sets}
  */
  readonly ignoreDaemonSets?: boolean | cdktf.IResolvable;
  /**
  * Drain options ignore errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#ignore_errors ClusterV2#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Drain options skip wait for delete timeout seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#skip_wait_for_delete_timeout_seconds ClusterV2#skip_wait_for_delete_timeout_seconds}
  */
  readonly skipWaitForDeleteTimeoutSeconds?: number;
  /**
  * Drain options timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#timeout ClusterV2#timeout}
  */
  readonly timeout?: number;
}

export function clusterV2RkeConfigUpgradeStrategyControlPlaneDrainOptionsToTerraform(struct?: ClusterV2RkeConfigUpgradeStrategyControlPlaneDrainOptionsOutputReference | ClusterV2RkeConfigUpgradeStrategyControlPlaneDrainOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_empty_dir_data: cdktf.booleanToTerraform(struct!.deleteEmptyDirData),
    disable_eviction: cdktf.booleanToTerraform(struct!.disableEviction),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    force: cdktf.booleanToTerraform(struct!.force),
    grace_period: cdktf.numberToTerraform(struct!.gracePeriod),
    ignore_daemon_sets: cdktf.booleanToTerraform(struct!.ignoreDaemonSets),
    ignore_errors: cdktf.booleanToTerraform(struct!.ignoreErrors),
    skip_wait_for_delete_timeout_seconds: cdktf.numberToTerraform(struct!.skipWaitForDeleteTimeoutSeconds),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function clusterV2RkeConfigUpgradeStrategyControlPlaneDrainOptionsToHclTerraform(struct?: ClusterV2RkeConfigUpgradeStrategyControlPlaneDrainOptionsOutputReference | ClusterV2RkeConfigUpgradeStrategyControlPlaneDrainOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_empty_dir_data: {
      value: cdktf.booleanToHclTerraform(struct!.deleteEmptyDirData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_eviction: {
      value: cdktf.booleanToHclTerraform(struct!.disableEviction),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    force: {
      value: cdktf.booleanToHclTerraform(struct!.force),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    grace_period: {
      value: cdktf.numberToHclTerraform(struct!.gracePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_daemon_sets: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreDaemonSets),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_errors: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    skip_wait_for_delete_timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.skipWaitForDeleteTimeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2RkeConfigUpgradeStrategyControlPlaneDrainOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterV2RkeConfigUpgradeStrategyControlPlaneDrainOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteEmptyDirData !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteEmptyDirData = this._deleteEmptyDirData;
    }
    if (this._disableEviction !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableEviction = this._disableEviction;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._force !== undefined) {
      hasAnyValues = true;
      internalValueResult.force = this._force;
    }
    if (this._gracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracePeriod = this._gracePeriod;
    }
    if (this._ignoreDaemonSets !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreDaemonSets = this._ignoreDaemonSets;
    }
    if (this._ignoreErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreErrors = this._ignoreErrors;
    }
    if (this._skipWaitForDeleteTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipWaitForDeleteTimeoutSeconds = this._skipWaitForDeleteTimeoutSeconds;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2RkeConfigUpgradeStrategyControlPlaneDrainOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deleteEmptyDirData = undefined;
      this._disableEviction = undefined;
      this._enabled = undefined;
      this._force = undefined;
      this._gracePeriod = undefined;
      this._ignoreDaemonSets = undefined;
      this._ignoreErrors = undefined;
      this._skipWaitForDeleteTimeoutSeconds = undefined;
      this._timeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deleteEmptyDirData = value.deleteEmptyDirData;
      this._disableEviction = value.disableEviction;
      this._enabled = value.enabled;
      this._force = value.force;
      this._gracePeriod = value.gracePeriod;
      this._ignoreDaemonSets = value.ignoreDaemonSets;
      this._ignoreErrors = value.ignoreErrors;
      this._skipWaitForDeleteTimeoutSeconds = value.skipWaitForDeleteTimeoutSeconds;
      this._timeout = value.timeout;
    }
  }

  // delete_empty_dir_data - computed: false, optional: true, required: false
  private _deleteEmptyDirData?: boolean | cdktf.IResolvable; 
  public get deleteEmptyDirData() {
    return this.getBooleanAttribute('delete_empty_dir_data');
  }
  public set deleteEmptyDirData(value: boolean | cdktf.IResolvable) {
    this._deleteEmptyDirData = value;
  }
  public resetDeleteEmptyDirData() {
    this._deleteEmptyDirData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteEmptyDirDataInput() {
    return this._deleteEmptyDirData;
  }

  // disable_eviction - computed: false, optional: true, required: false
  private _disableEviction?: boolean | cdktf.IResolvable; 
  public get disableEviction() {
    return this.getBooleanAttribute('disable_eviction');
  }
  public set disableEviction(value: boolean | cdktf.IResolvable) {
    this._disableEviction = value;
  }
  public resetDisableEviction() {
    this._disableEviction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableEvictionInput() {
    return this._disableEviction;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // force - computed: false, optional: true, required: false
  private _force?: boolean | cdktf.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktf.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
  }

  // grace_period - computed: true, optional: true, required: false
  private _gracePeriod?: number; 
  public get gracePeriod() {
    return this.getNumberAttribute('grace_period');
  }
  public set gracePeriod(value: number) {
    this._gracePeriod = value;
  }
  public resetGracePeriod() {
    this._gracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracePeriodInput() {
    return this._gracePeriod;
  }

  // ignore_daemon_sets - computed: false, optional: true, required: false
  private _ignoreDaemonSets?: boolean | cdktf.IResolvable; 
  public get ignoreDaemonSets() {
    return this.getBooleanAttribute('ignore_daemon_sets');
  }
  public set ignoreDaemonSets(value: boolean | cdktf.IResolvable) {
    this._ignoreDaemonSets = value;
  }
  public resetIgnoreDaemonSets() {
    this._ignoreDaemonSets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDaemonSetsInput() {
    return this._ignoreDaemonSets;
  }

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean | cdktf.IResolvable; 
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }
  public set ignoreErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors;
  }

  // skip_wait_for_delete_timeout_seconds - computed: true, optional: true, required: false
  private _skipWaitForDeleteTimeoutSeconds?: number; 
  public get skipWaitForDeleteTimeoutSeconds() {
    return this.getNumberAttribute('skip_wait_for_delete_timeout_seconds');
  }
  public set skipWaitForDeleteTimeoutSeconds(value: number) {
    this._skipWaitForDeleteTimeoutSeconds = value;
  }
  public resetSkipWaitForDeleteTimeoutSeconds() {
    this._skipWaitForDeleteTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipWaitForDeleteTimeoutSecondsInput() {
    return this._skipWaitForDeleteTimeoutSeconds;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface ClusterV2RkeConfigUpgradeStrategyWorkerDrainOptions {
  /**
  * Drain options delete empty dir data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#delete_empty_dir_data ClusterV2#delete_empty_dir_data}
  */
  readonly deleteEmptyDirData?: boolean | cdktf.IResolvable;
  /**
  * Drain options disable eviction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#disable_eviction ClusterV2#disable_eviction}
  */
  readonly disableEviction?: boolean | cdktf.IResolvable;
  /**
  * Drain options enabled?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#enabled ClusterV2#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Drain options force
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#force ClusterV2#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * Drain options grace period
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#grace_period ClusterV2#grace_period}
  */
  readonly gracePeriod?: number;
  /**
  * Drain options ignore daemon sets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#ignore_daemon_sets ClusterV2#ignore_daemon_sets}
  */
  readonly ignoreDaemonSets?: boolean | cdktf.IResolvable;
  /**
  * Drain options ignore errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#ignore_errors ClusterV2#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Drain options skip wait for delete timeout seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#skip_wait_for_delete_timeout_seconds ClusterV2#skip_wait_for_delete_timeout_seconds}
  */
  readonly skipWaitForDeleteTimeoutSeconds?: number;
  /**
  * Drain options timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#timeout ClusterV2#timeout}
  */
  readonly timeout?: number;
}

export function clusterV2RkeConfigUpgradeStrategyWorkerDrainOptionsToTerraform(struct?: ClusterV2RkeConfigUpgradeStrategyWorkerDrainOptionsOutputReference | ClusterV2RkeConfigUpgradeStrategyWorkerDrainOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_empty_dir_data: cdktf.booleanToTerraform(struct!.deleteEmptyDirData),
    disable_eviction: cdktf.booleanToTerraform(struct!.disableEviction),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    force: cdktf.booleanToTerraform(struct!.force),
    grace_period: cdktf.numberToTerraform(struct!.gracePeriod),
    ignore_daemon_sets: cdktf.booleanToTerraform(struct!.ignoreDaemonSets),
    ignore_errors: cdktf.booleanToTerraform(struct!.ignoreErrors),
    skip_wait_for_delete_timeout_seconds: cdktf.numberToTerraform(struct!.skipWaitForDeleteTimeoutSeconds),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function clusterV2RkeConfigUpgradeStrategyWorkerDrainOptionsToHclTerraform(struct?: ClusterV2RkeConfigUpgradeStrategyWorkerDrainOptionsOutputReference | ClusterV2RkeConfigUpgradeStrategyWorkerDrainOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_empty_dir_data: {
      value: cdktf.booleanToHclTerraform(struct!.deleteEmptyDirData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_eviction: {
      value: cdktf.booleanToHclTerraform(struct!.disableEviction),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    force: {
      value: cdktf.booleanToHclTerraform(struct!.force),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    grace_period: {
      value: cdktf.numberToHclTerraform(struct!.gracePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_daemon_sets: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreDaemonSets),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_errors: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    skip_wait_for_delete_timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.skipWaitForDeleteTimeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2RkeConfigUpgradeStrategyWorkerDrainOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterV2RkeConfigUpgradeStrategyWorkerDrainOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteEmptyDirData !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteEmptyDirData = this._deleteEmptyDirData;
    }
    if (this._disableEviction !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableEviction = this._disableEviction;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._force !== undefined) {
      hasAnyValues = true;
      internalValueResult.force = this._force;
    }
    if (this._gracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracePeriod = this._gracePeriod;
    }
    if (this._ignoreDaemonSets !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreDaemonSets = this._ignoreDaemonSets;
    }
    if (this._ignoreErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreErrors = this._ignoreErrors;
    }
    if (this._skipWaitForDeleteTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipWaitForDeleteTimeoutSeconds = this._skipWaitForDeleteTimeoutSeconds;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2RkeConfigUpgradeStrategyWorkerDrainOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deleteEmptyDirData = undefined;
      this._disableEviction = undefined;
      this._enabled = undefined;
      this._force = undefined;
      this._gracePeriod = undefined;
      this._ignoreDaemonSets = undefined;
      this._ignoreErrors = undefined;
      this._skipWaitForDeleteTimeoutSeconds = undefined;
      this._timeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deleteEmptyDirData = value.deleteEmptyDirData;
      this._disableEviction = value.disableEviction;
      this._enabled = value.enabled;
      this._force = value.force;
      this._gracePeriod = value.gracePeriod;
      this._ignoreDaemonSets = value.ignoreDaemonSets;
      this._ignoreErrors = value.ignoreErrors;
      this._skipWaitForDeleteTimeoutSeconds = value.skipWaitForDeleteTimeoutSeconds;
      this._timeout = value.timeout;
    }
  }

  // delete_empty_dir_data - computed: false, optional: true, required: false
  private _deleteEmptyDirData?: boolean | cdktf.IResolvable; 
  public get deleteEmptyDirData() {
    return this.getBooleanAttribute('delete_empty_dir_data');
  }
  public set deleteEmptyDirData(value: boolean | cdktf.IResolvable) {
    this._deleteEmptyDirData = value;
  }
  public resetDeleteEmptyDirData() {
    this._deleteEmptyDirData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteEmptyDirDataInput() {
    return this._deleteEmptyDirData;
  }

  // disable_eviction - computed: false, optional: true, required: false
  private _disableEviction?: boolean | cdktf.IResolvable; 
  public get disableEviction() {
    return this.getBooleanAttribute('disable_eviction');
  }
  public set disableEviction(value: boolean | cdktf.IResolvable) {
    this._disableEviction = value;
  }
  public resetDisableEviction() {
    this._disableEviction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableEvictionInput() {
    return this._disableEviction;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // force - computed: false, optional: true, required: false
  private _force?: boolean | cdktf.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktf.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
  }

  // grace_period - computed: true, optional: true, required: false
  private _gracePeriod?: number; 
  public get gracePeriod() {
    return this.getNumberAttribute('grace_period');
  }
  public set gracePeriod(value: number) {
    this._gracePeriod = value;
  }
  public resetGracePeriod() {
    this._gracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracePeriodInput() {
    return this._gracePeriod;
  }

  // ignore_daemon_sets - computed: false, optional: true, required: false
  private _ignoreDaemonSets?: boolean | cdktf.IResolvable; 
  public get ignoreDaemonSets() {
    return this.getBooleanAttribute('ignore_daemon_sets');
  }
  public set ignoreDaemonSets(value: boolean | cdktf.IResolvable) {
    this._ignoreDaemonSets = value;
  }
  public resetIgnoreDaemonSets() {
    this._ignoreDaemonSets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDaemonSetsInput() {
    return this._ignoreDaemonSets;
  }

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean | cdktf.IResolvable; 
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }
  public set ignoreErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors;
  }

  // skip_wait_for_delete_timeout_seconds - computed: true, optional: true, required: false
  private _skipWaitForDeleteTimeoutSeconds?: number; 
  public get skipWaitForDeleteTimeoutSeconds() {
    return this.getNumberAttribute('skip_wait_for_delete_timeout_seconds');
  }
  public set skipWaitForDeleteTimeoutSeconds(value: number) {
    this._skipWaitForDeleteTimeoutSeconds = value;
  }
  public resetSkipWaitForDeleteTimeoutSeconds() {
    this._skipWaitForDeleteTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipWaitForDeleteTimeoutSecondsInput() {
    return this._skipWaitForDeleteTimeoutSeconds;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface ClusterV2RkeConfigUpgradeStrategy {
  /**
  * How many controlplane nodes should be upgrade at time, 0 is infinite. Percentages are also accepted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#control_plane_concurrency ClusterV2#control_plane_concurrency}
  */
  readonly controlPlaneConcurrency?: string;
  /**
  * How many worker nodes should be upgrade at time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#worker_concurrency ClusterV2#worker_concurrency}
  */
  readonly workerConcurrency?: string;
  /**
  * control_plane_drain_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#control_plane_drain_options ClusterV2#control_plane_drain_options}
  */
  readonly controlPlaneDrainOptions?: ClusterV2RkeConfigUpgradeStrategyControlPlaneDrainOptions;
  /**
  * worker_drain_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#worker_drain_options ClusterV2#worker_drain_options}
  */
  readonly workerDrainOptions?: ClusterV2RkeConfigUpgradeStrategyWorkerDrainOptions;
}

export function clusterV2RkeConfigUpgradeStrategyToTerraform(struct?: ClusterV2RkeConfigUpgradeStrategyOutputReference | ClusterV2RkeConfigUpgradeStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    control_plane_concurrency: cdktf.stringToTerraform(struct!.controlPlaneConcurrency),
    worker_concurrency: cdktf.stringToTerraform(struct!.workerConcurrency),
    control_plane_drain_options: clusterV2RkeConfigUpgradeStrategyControlPlaneDrainOptionsToTerraform(struct!.controlPlaneDrainOptions),
    worker_drain_options: clusterV2RkeConfigUpgradeStrategyWorkerDrainOptionsToTerraform(struct!.workerDrainOptions),
  }
}


export function clusterV2RkeConfigUpgradeStrategyToHclTerraform(struct?: ClusterV2RkeConfigUpgradeStrategyOutputReference | ClusterV2RkeConfigUpgradeStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    control_plane_concurrency: {
      value: cdktf.stringToHclTerraform(struct!.controlPlaneConcurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    worker_concurrency: {
      value: cdktf.stringToHclTerraform(struct!.workerConcurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    control_plane_drain_options: {
      value: clusterV2RkeConfigUpgradeStrategyControlPlaneDrainOptionsToHclTerraform(struct!.controlPlaneDrainOptions),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2RkeConfigUpgradeStrategyControlPlaneDrainOptionsList",
    },
    worker_drain_options: {
      value: clusterV2RkeConfigUpgradeStrategyWorkerDrainOptionsToHclTerraform(struct!.workerDrainOptions),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2RkeConfigUpgradeStrategyWorkerDrainOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2RkeConfigUpgradeStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterV2RkeConfigUpgradeStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controlPlaneConcurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneConcurrency = this._controlPlaneConcurrency;
    }
    if (this._workerConcurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerConcurrency = this._workerConcurrency;
    }
    if (this._controlPlaneDrainOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneDrainOptions = this._controlPlaneDrainOptions?.internalValue;
    }
    if (this._workerDrainOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerDrainOptions = this._workerDrainOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2RkeConfigUpgradeStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._controlPlaneConcurrency = undefined;
      this._workerConcurrency = undefined;
      this._controlPlaneDrainOptions.internalValue = undefined;
      this._workerDrainOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._controlPlaneConcurrency = value.controlPlaneConcurrency;
      this._workerConcurrency = value.workerConcurrency;
      this._controlPlaneDrainOptions.internalValue = value.controlPlaneDrainOptions;
      this._workerDrainOptions.internalValue = value.workerDrainOptions;
    }
  }

  // control_plane_concurrency - computed: false, optional: true, required: false
  private _controlPlaneConcurrency?: string; 
  public get controlPlaneConcurrency() {
    return this.getStringAttribute('control_plane_concurrency');
  }
  public set controlPlaneConcurrency(value: string) {
    this._controlPlaneConcurrency = value;
  }
  public resetControlPlaneConcurrency() {
    this._controlPlaneConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneConcurrencyInput() {
    return this._controlPlaneConcurrency;
  }

  // worker_concurrency - computed: false, optional: true, required: false
  private _workerConcurrency?: string; 
  public get workerConcurrency() {
    return this.getStringAttribute('worker_concurrency');
  }
  public set workerConcurrency(value: string) {
    this._workerConcurrency = value;
  }
  public resetWorkerConcurrency() {
    this._workerConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerConcurrencyInput() {
    return this._workerConcurrency;
  }

  // control_plane_drain_options - computed: false, optional: true, required: false
  private _controlPlaneDrainOptions = new ClusterV2RkeConfigUpgradeStrategyControlPlaneDrainOptionsOutputReference(this, "control_plane_drain_options");
  public get controlPlaneDrainOptions() {
    return this._controlPlaneDrainOptions;
  }
  public putControlPlaneDrainOptions(value: ClusterV2RkeConfigUpgradeStrategyControlPlaneDrainOptions) {
    this._controlPlaneDrainOptions.internalValue = value;
  }
  public resetControlPlaneDrainOptions() {
    this._controlPlaneDrainOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneDrainOptionsInput() {
    return this._controlPlaneDrainOptions.internalValue;
  }

  // worker_drain_options - computed: false, optional: true, required: false
  private _workerDrainOptions = new ClusterV2RkeConfigUpgradeStrategyWorkerDrainOptionsOutputReference(this, "worker_drain_options");
  public get workerDrainOptions() {
    return this._workerDrainOptions;
  }
  public putWorkerDrainOptions(value: ClusterV2RkeConfigUpgradeStrategyWorkerDrainOptions) {
    this._workerDrainOptions.internalValue = value;
  }
  public resetWorkerDrainOptions() {
    this._workerDrainOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerDrainOptionsInput() {
    return this._workerDrainOptions.internalValue;
  }
}
export interface ClusterV2RkeConfig {
  /**
  * Cluster V2 additional manifest
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#additional_manifest ClusterV2#additional_manifest}
  */
  readonly additionalManifest?: string;
  /**
  * Cluster V2 chart values. It should be in YAML format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#chart_values ClusterV2#chart_values}
  */
  readonly chartValues?: string;
  /**
  * Cluster V2 machine global config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#machine_global_config ClusterV2#machine_global_config}
  */
  readonly machineGlobalConfig?: string;
  /**
  * etcd block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#etcd ClusterV2#etcd}
  */
  readonly etcd?: ClusterV2RkeConfigEtcd;
  /**
  * etcd_snapshot_create block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#etcd_snapshot_create ClusterV2#etcd_snapshot_create}
  */
  readonly etcdSnapshotCreate?: ClusterV2RkeConfigEtcdSnapshotCreate;
  /**
  * etcd_snapshot_restore block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#etcd_snapshot_restore ClusterV2#etcd_snapshot_restore}
  */
  readonly etcdSnapshotRestore?: ClusterV2RkeConfigEtcdSnapshotRestore;
  /**
  * local_auth_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#local_auth_endpoint ClusterV2#local_auth_endpoint}
  */
  readonly localAuthEndpoint?: ClusterV2RkeConfigLocalAuthEndpoint;
  /**
  * machine_pool_defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#machine_pool_defaults ClusterV2#machine_pool_defaults}
  */
  readonly machinePoolDefaults?: ClusterV2RkeConfigMachinePoolDefaults[] | cdktf.IResolvable;
  /**
  * machine_pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#machine_pools ClusterV2#machine_pools}
  */
  readonly machinePools?: ClusterV2RkeConfigMachinePools[] | cdktf.IResolvable;
  /**
  * machine_selector_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#machine_selector_config ClusterV2#machine_selector_config}
  */
  readonly machineSelectorConfig?: ClusterV2RkeConfigMachineSelectorConfig[] | cdktf.IResolvable;
  /**
  * machine_selector_files block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#machine_selector_files ClusterV2#machine_selector_files}
  */
  readonly machineSelectorFiles?: ClusterV2RkeConfigMachineSelectorFiles[] | cdktf.IResolvable;
  /**
  * registries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#registries ClusterV2#registries}
  */
  readonly registries?: ClusterV2RkeConfigRegistries;
  /**
  * rotate_certificates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#rotate_certificates ClusterV2#rotate_certificates}
  */
  readonly rotateCertificates?: ClusterV2RkeConfigRotateCertificates;
  /**
  * upgrade_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#upgrade_strategy ClusterV2#upgrade_strategy}
  */
  readonly upgradeStrategy?: ClusterV2RkeConfigUpgradeStrategy;
}

export function clusterV2RkeConfigToTerraform(struct?: ClusterV2RkeConfigOutputReference | ClusterV2RkeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_manifest: cdktf.stringToTerraform(struct!.additionalManifest),
    chart_values: cdktf.stringToTerraform(struct!.chartValues),
    machine_global_config: cdktf.stringToTerraform(struct!.machineGlobalConfig),
    etcd: clusterV2RkeConfigEtcdToTerraform(struct!.etcd),
    etcd_snapshot_create: clusterV2RkeConfigEtcdSnapshotCreateToTerraform(struct!.etcdSnapshotCreate),
    etcd_snapshot_restore: clusterV2RkeConfigEtcdSnapshotRestoreToTerraform(struct!.etcdSnapshotRestore),
    local_auth_endpoint: clusterV2RkeConfigLocalAuthEndpointToTerraform(struct!.localAuthEndpoint),
    machine_pool_defaults: cdktf.listMapper(clusterV2RkeConfigMachinePoolDefaultsToTerraform, true)(struct!.machinePoolDefaults),
    machine_pools: cdktf.listMapper(clusterV2RkeConfigMachinePoolsToTerraform, true)(struct!.machinePools),
    machine_selector_config: cdktf.listMapper(clusterV2RkeConfigMachineSelectorConfigToTerraform, true)(struct!.machineSelectorConfig),
    machine_selector_files: cdktf.listMapper(clusterV2RkeConfigMachineSelectorFilesToTerraform, true)(struct!.machineSelectorFiles),
    registries: clusterV2RkeConfigRegistriesToTerraform(struct!.registries),
    rotate_certificates: clusterV2RkeConfigRotateCertificatesToTerraform(struct!.rotateCertificates),
    upgrade_strategy: clusterV2RkeConfigUpgradeStrategyToTerraform(struct!.upgradeStrategy),
  }
}


export function clusterV2RkeConfigToHclTerraform(struct?: ClusterV2RkeConfigOutputReference | ClusterV2RkeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_manifest: {
      value: cdktf.stringToHclTerraform(struct!.additionalManifest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chart_values: {
      value: cdktf.stringToHclTerraform(struct!.chartValues),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    machine_global_config: {
      value: cdktf.stringToHclTerraform(struct!.machineGlobalConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    etcd: {
      value: clusterV2RkeConfigEtcdToHclTerraform(struct!.etcd),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2RkeConfigEtcdList",
    },
    etcd_snapshot_create: {
      value: clusterV2RkeConfigEtcdSnapshotCreateToHclTerraform(struct!.etcdSnapshotCreate),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2RkeConfigEtcdSnapshotCreateList",
    },
    etcd_snapshot_restore: {
      value: clusterV2RkeConfigEtcdSnapshotRestoreToHclTerraform(struct!.etcdSnapshotRestore),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2RkeConfigEtcdSnapshotRestoreList",
    },
    local_auth_endpoint: {
      value: clusterV2RkeConfigLocalAuthEndpointToHclTerraform(struct!.localAuthEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2RkeConfigLocalAuthEndpointList",
    },
    machine_pool_defaults: {
      value: cdktf.listMapperHcl(clusterV2RkeConfigMachinePoolDefaultsToHclTerraform, true)(struct!.machinePoolDefaults),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2RkeConfigMachinePoolDefaultsList",
    },
    machine_pools: {
      value: cdktf.listMapperHcl(clusterV2RkeConfigMachinePoolsToHclTerraform, true)(struct!.machinePools),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2RkeConfigMachinePoolsList",
    },
    machine_selector_config: {
      value: cdktf.listMapperHcl(clusterV2RkeConfigMachineSelectorConfigToHclTerraform, true)(struct!.machineSelectorConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2RkeConfigMachineSelectorConfigList",
    },
    machine_selector_files: {
      value: cdktf.listMapperHcl(clusterV2RkeConfigMachineSelectorFilesToHclTerraform, true)(struct!.machineSelectorFiles),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2RkeConfigMachineSelectorFilesList",
    },
    registries: {
      value: clusterV2RkeConfigRegistriesToHclTerraform(struct!.registries),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2RkeConfigRegistriesList",
    },
    rotate_certificates: {
      value: clusterV2RkeConfigRotateCertificatesToHclTerraform(struct!.rotateCertificates),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2RkeConfigRotateCertificatesList",
    },
    upgrade_strategy: {
      value: clusterV2RkeConfigUpgradeStrategyToHclTerraform(struct!.upgradeStrategy),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2RkeConfigUpgradeStrategyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2RkeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterV2RkeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalManifest !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalManifest = this._additionalManifest;
    }
    if (this._chartValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.chartValues = this._chartValues;
    }
    if (this._machineGlobalConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineGlobalConfig = this._machineGlobalConfig;
    }
    if (this._etcd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.etcd = this._etcd?.internalValue;
    }
    if (this._etcdSnapshotCreate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.etcdSnapshotCreate = this._etcdSnapshotCreate?.internalValue;
    }
    if (this._etcdSnapshotRestore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.etcdSnapshotRestore = this._etcdSnapshotRestore?.internalValue;
    }
    if (this._localAuthEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAuthEndpoint = this._localAuthEndpoint?.internalValue;
    }
    if (this._machinePoolDefaults?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machinePoolDefaults = this._machinePoolDefaults?.internalValue;
    }
    if (this._machinePools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machinePools = this._machinePools?.internalValue;
    }
    if (this._machineSelectorConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineSelectorConfig = this._machineSelectorConfig?.internalValue;
    }
    if (this._machineSelectorFiles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineSelectorFiles = this._machineSelectorFiles?.internalValue;
    }
    if (this._registries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.registries = this._registries?.internalValue;
    }
    if (this._rotateCertificates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rotateCertificates = this._rotateCertificates?.internalValue;
    }
    if (this._upgradeStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeStrategy = this._upgradeStrategy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2RkeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalManifest = undefined;
      this._chartValues = undefined;
      this._machineGlobalConfig = undefined;
      this._etcd.internalValue = undefined;
      this._etcdSnapshotCreate.internalValue = undefined;
      this._etcdSnapshotRestore.internalValue = undefined;
      this._localAuthEndpoint.internalValue = undefined;
      this._machinePoolDefaults.internalValue = undefined;
      this._machinePools.internalValue = undefined;
      this._machineSelectorConfig.internalValue = undefined;
      this._machineSelectorFiles.internalValue = undefined;
      this._registries.internalValue = undefined;
      this._rotateCertificates.internalValue = undefined;
      this._upgradeStrategy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalManifest = value.additionalManifest;
      this._chartValues = value.chartValues;
      this._machineGlobalConfig = value.machineGlobalConfig;
      this._etcd.internalValue = value.etcd;
      this._etcdSnapshotCreate.internalValue = value.etcdSnapshotCreate;
      this._etcdSnapshotRestore.internalValue = value.etcdSnapshotRestore;
      this._localAuthEndpoint.internalValue = value.localAuthEndpoint;
      this._machinePoolDefaults.internalValue = value.machinePoolDefaults;
      this._machinePools.internalValue = value.machinePools;
      this._machineSelectorConfig.internalValue = value.machineSelectorConfig;
      this._machineSelectorFiles.internalValue = value.machineSelectorFiles;
      this._registries.internalValue = value.registries;
      this._rotateCertificates.internalValue = value.rotateCertificates;
      this._upgradeStrategy.internalValue = value.upgradeStrategy;
    }
  }

  // additional_manifest - computed: false, optional: true, required: false
  private _additionalManifest?: string; 
  public get additionalManifest() {
    return this.getStringAttribute('additional_manifest');
  }
  public set additionalManifest(value: string) {
    this._additionalManifest = value;
  }
  public resetAdditionalManifest() {
    this._additionalManifest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalManifestInput() {
    return this._additionalManifest;
  }

  // chart_values - computed: false, optional: true, required: false
  private _chartValues?: string; 
  public get chartValues() {
    return this.getStringAttribute('chart_values');
  }
  public set chartValues(value: string) {
    this._chartValues = value;
  }
  public resetChartValues() {
    this._chartValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartValuesInput() {
    return this._chartValues;
  }

  // machine_global_config - computed: false, optional: true, required: false
  private _machineGlobalConfig?: string; 
  public get machineGlobalConfig() {
    return this.getStringAttribute('machine_global_config');
  }
  public set machineGlobalConfig(value: string) {
    this._machineGlobalConfig = value;
  }
  public resetMachineGlobalConfig() {
    this._machineGlobalConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineGlobalConfigInput() {
    return this._machineGlobalConfig;
  }

  // etcd - computed: false, optional: true, required: false
  private _etcd = new ClusterV2RkeConfigEtcdOutputReference(this, "etcd");
  public get etcd() {
    return this._etcd;
  }
  public putEtcd(value: ClusterV2RkeConfigEtcd) {
    this._etcd.internalValue = value;
  }
  public resetEtcd() {
    this._etcd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etcdInput() {
    return this._etcd.internalValue;
  }

  // etcd_snapshot_create - computed: false, optional: true, required: false
  private _etcdSnapshotCreate = new ClusterV2RkeConfigEtcdSnapshotCreateOutputReference(this, "etcd_snapshot_create");
  public get etcdSnapshotCreate() {
    return this._etcdSnapshotCreate;
  }
  public putEtcdSnapshotCreate(value: ClusterV2RkeConfigEtcdSnapshotCreate) {
    this._etcdSnapshotCreate.internalValue = value;
  }
  public resetEtcdSnapshotCreate() {
    this._etcdSnapshotCreate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etcdSnapshotCreateInput() {
    return this._etcdSnapshotCreate.internalValue;
  }

  // etcd_snapshot_restore - computed: false, optional: true, required: false
  private _etcdSnapshotRestore = new ClusterV2RkeConfigEtcdSnapshotRestoreOutputReference(this, "etcd_snapshot_restore");
  public get etcdSnapshotRestore() {
    return this._etcdSnapshotRestore;
  }
  public putEtcdSnapshotRestore(value: ClusterV2RkeConfigEtcdSnapshotRestore) {
    this._etcdSnapshotRestore.internalValue = value;
  }
  public resetEtcdSnapshotRestore() {
    this._etcdSnapshotRestore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etcdSnapshotRestoreInput() {
    return this._etcdSnapshotRestore.internalValue;
  }

  // local_auth_endpoint - computed: false, optional: true, required: false
  private _localAuthEndpoint = new ClusterV2RkeConfigLocalAuthEndpointOutputReference(this, "local_auth_endpoint");
  public get localAuthEndpoint() {
    return this._localAuthEndpoint;
  }
  public putLocalAuthEndpoint(value: ClusterV2RkeConfigLocalAuthEndpoint) {
    this._localAuthEndpoint.internalValue = value;
  }
  public resetLocalAuthEndpoint() {
    this._localAuthEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAuthEndpointInput() {
    return this._localAuthEndpoint.internalValue;
  }

  // machine_pool_defaults - computed: false, optional: true, required: false
  private _machinePoolDefaults = new ClusterV2RkeConfigMachinePoolDefaultsList(this, "machine_pool_defaults", false);
  public get machinePoolDefaults() {
    return this._machinePoolDefaults;
  }
  public putMachinePoolDefaults(value: ClusterV2RkeConfigMachinePoolDefaults[] | cdktf.IResolvable) {
    this._machinePoolDefaults.internalValue = value;
  }
  public resetMachinePoolDefaults() {
    this._machinePoolDefaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machinePoolDefaultsInput() {
    return this._machinePoolDefaults.internalValue;
  }

  // machine_pools - computed: false, optional: true, required: false
  private _machinePools = new ClusterV2RkeConfigMachinePoolsList(this, "machine_pools", false);
  public get machinePools() {
    return this._machinePools;
  }
  public putMachinePools(value: ClusterV2RkeConfigMachinePools[] | cdktf.IResolvable) {
    this._machinePools.internalValue = value;
  }
  public resetMachinePools() {
    this._machinePools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machinePoolsInput() {
    return this._machinePools.internalValue;
  }

  // machine_selector_config - computed: false, optional: true, required: false
  private _machineSelectorConfig = new ClusterV2RkeConfigMachineSelectorConfigList(this, "machine_selector_config", false);
  public get machineSelectorConfig() {
    return this._machineSelectorConfig;
  }
  public putMachineSelectorConfig(value: ClusterV2RkeConfigMachineSelectorConfig[] | cdktf.IResolvable) {
    this._machineSelectorConfig.internalValue = value;
  }
  public resetMachineSelectorConfig() {
    this._machineSelectorConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineSelectorConfigInput() {
    return this._machineSelectorConfig.internalValue;
  }

  // machine_selector_files - computed: false, optional: true, required: false
  private _machineSelectorFiles = new ClusterV2RkeConfigMachineSelectorFilesList(this, "machine_selector_files", false);
  public get machineSelectorFiles() {
    return this._machineSelectorFiles;
  }
  public putMachineSelectorFiles(value: ClusterV2RkeConfigMachineSelectorFiles[] | cdktf.IResolvable) {
    this._machineSelectorFiles.internalValue = value;
  }
  public resetMachineSelectorFiles() {
    this._machineSelectorFiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineSelectorFilesInput() {
    return this._machineSelectorFiles.internalValue;
  }

  // registries - computed: false, optional: true, required: false
  private _registries = new ClusterV2RkeConfigRegistriesOutputReference(this, "registries");
  public get registries() {
    return this._registries;
  }
  public putRegistries(value: ClusterV2RkeConfigRegistries) {
    this._registries.internalValue = value;
  }
  public resetRegistries() {
    this._registries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registriesInput() {
    return this._registries.internalValue;
  }

  // rotate_certificates - computed: false, optional: true, required: false
  private _rotateCertificates = new ClusterV2RkeConfigRotateCertificatesOutputReference(this, "rotate_certificates");
  public get rotateCertificates() {
    return this._rotateCertificates;
  }
  public putRotateCertificates(value: ClusterV2RkeConfigRotateCertificates) {
    this._rotateCertificates.internalValue = value;
  }
  public resetRotateCertificates() {
    this._rotateCertificates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotateCertificatesInput() {
    return this._rotateCertificates.internalValue;
  }

  // upgrade_strategy - computed: false, optional: true, required: false
  private _upgradeStrategy = new ClusterV2RkeConfigUpgradeStrategyOutputReference(this, "upgrade_strategy");
  public get upgradeStrategy() {
    return this._upgradeStrategy;
  }
  public putUpgradeStrategy(value: ClusterV2RkeConfigUpgradeStrategy) {
    this._upgradeStrategy.internalValue = value;
  }
  public resetUpgradeStrategy() {
    this._upgradeStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeStrategyInput() {
    return this._upgradeStrategy.internalValue;
  }
}
export interface ClusterV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#create ClusterV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#delete ClusterV2#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#update ClusterV2#update}
  */
  readonly update?: string;
}

export function clusterV2TimeoutsToTerraform(struct?: ClusterV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function clusterV2TimeoutsToHclTerraform(struct?: ClusterV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterV2Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2 rancher2_cluster_v2}
*/
export class ClusterV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rancher2_cluster_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClusterV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClusterV2 to import
  * @param importFromId The id of the existing ClusterV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClusterV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rancher2_cluster_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_v2 rancher2_cluster_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterV2Config
  */
  public constructor(scope: Construct, id: string, config: ClusterV2Config) {
    super(scope, id, {
      terraformResourceType: 'rancher2_cluster_v2',
      terraformGeneratorMetadata: {
        providerName: 'rancher2',
        providerVersion: '7.9.0',
        providerVersionConstraint: '7.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._cloudCredentialSecretName = config.cloudCredentialSecretName;
    this._defaultClusterRoleForProjectMembers = config.defaultClusterRoleForProjectMembers;
    this._defaultPodSecurityAdmissionConfigurationTemplateName = config.defaultPodSecurityAdmissionConfigurationTemplateName;
    this._enableNetworkPolicy = config.enableNetworkPolicy;
    this._fleetNamespace = config.fleetNamespace;
    this._id = config.id;
    this._kubernetesVersion = config.kubernetesVersion;
    this._labels = config.labels;
    this._name = config.name;
    this._agentEnvVars.internalValue = config.agentEnvVars;
    this._clusterAgentDeploymentCustomization.internalValue = config.clusterAgentDeploymentCustomization;
    this._fleetAgentDeploymentCustomization.internalValue = config.fleetAgentDeploymentCustomization;
    this._localAuthEndpoint.internalValue = config.localAuthEndpoint;
    this._rkeConfig.internalValue = config.rkeConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: true, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // cloud_credential_secret_name - computed: false, optional: true, required: false
  private _cloudCredentialSecretName?: string; 
  public get cloudCredentialSecretName() {
    return this.getStringAttribute('cloud_credential_secret_name');
  }
  public set cloudCredentialSecretName(value: string) {
    this._cloudCredentialSecretName = value;
  }
  public resetCloudCredentialSecretName() {
    this._cloudCredentialSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudCredentialSecretNameInput() {
    return this._cloudCredentialSecretName;
  }

  // cluster_registration_token - computed: true, optional: false, required: false
  private _clusterRegistrationToken = new ClusterV2ClusterRegistrationTokenList(this, "cluster_registration_token", false);
  public get clusterRegistrationToken() {
    return this._clusterRegistrationToken;
  }

  // cluster_v1_id - computed: true, optional: false, required: false
  public get clusterV1Id() {
    return this.getStringAttribute('cluster_v1_id');
  }

  // default_cluster_role_for_project_members - computed: false, optional: true, required: false
  private _defaultClusterRoleForProjectMembers?: string; 
  public get defaultClusterRoleForProjectMembers() {
    return this.getStringAttribute('default_cluster_role_for_project_members');
  }
  public set defaultClusterRoleForProjectMembers(value: string) {
    this._defaultClusterRoleForProjectMembers = value;
  }
  public resetDefaultClusterRoleForProjectMembers() {
    this._defaultClusterRoleForProjectMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultClusterRoleForProjectMembersInput() {
    return this._defaultClusterRoleForProjectMembers;
  }

  // default_pod_security_admission_configuration_template_name - computed: false, optional: true, required: false
  private _defaultPodSecurityAdmissionConfigurationTemplateName?: string; 
  public get defaultPodSecurityAdmissionConfigurationTemplateName() {
    return this.getStringAttribute('default_pod_security_admission_configuration_template_name');
  }
  public set defaultPodSecurityAdmissionConfigurationTemplateName(value: string) {
    this._defaultPodSecurityAdmissionConfigurationTemplateName = value;
  }
  public resetDefaultPodSecurityAdmissionConfigurationTemplateName() {
    this._defaultPodSecurityAdmissionConfigurationTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPodSecurityAdmissionConfigurationTemplateNameInput() {
    return this._defaultPodSecurityAdmissionConfigurationTemplateName;
  }

  // enable_network_policy - computed: true, optional: true, required: false
  private _enableNetworkPolicy?: boolean | cdktf.IResolvable; 
  public get enableNetworkPolicy() {
    return this.getBooleanAttribute('enable_network_policy');
  }
  public set enableNetworkPolicy(value: boolean | cdktf.IResolvable) {
    this._enableNetworkPolicy = value;
  }
  public resetEnableNetworkPolicy() {
    this._enableNetworkPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNetworkPolicyInput() {
    return this._enableNetworkPolicy;
  }

  // fleet_namespace - computed: false, optional: true, required: false
  private _fleetNamespace?: string; 
  public get fleetNamespace() {
    return this.getStringAttribute('fleet_namespace');
  }
  public set fleetNamespace(value: string) {
    this._fleetNamespace = value;
  }
  public resetFleetNamespace() {
    this._fleetNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetNamespaceInput() {
    return this._fleetNamespace;
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

  // kube_config - computed: true, optional: false, required: false
  public get kubeConfig() {
    return this.getStringAttribute('kube_config');
  }

  // kubernetes_version - computed: false, optional: false, required: true
  private _kubernetesVersion?: string; 
  public get kubernetesVersion() {
    return this.getStringAttribute('kubernetes_version');
  }
  public set kubernetesVersion(value: string) {
    this._kubernetesVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesVersionInput() {
    return this._kubernetesVersion;
  }

  // labels - computed: true, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // resource_version - computed: true, optional: false, required: false
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }

  // agent_env_vars - computed: false, optional: true, required: false
  private _agentEnvVars = new ClusterV2AgentEnvVarsList(this, "agent_env_vars", false);
  public get agentEnvVars() {
    return this._agentEnvVars;
  }
  public putAgentEnvVars(value: ClusterV2AgentEnvVars[] | cdktf.IResolvable) {
    this._agentEnvVars.internalValue = value;
  }
  public resetAgentEnvVars() {
    this._agentEnvVars.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentEnvVarsInput() {
    return this._agentEnvVars.internalValue;
  }

  // cluster_agent_deployment_customization - computed: false, optional: true, required: false
  private _clusterAgentDeploymentCustomization = new ClusterV2ClusterAgentDeploymentCustomizationList(this, "cluster_agent_deployment_customization", false);
  public get clusterAgentDeploymentCustomization() {
    return this._clusterAgentDeploymentCustomization;
  }
  public putClusterAgentDeploymentCustomization(value: ClusterV2ClusterAgentDeploymentCustomization[] | cdktf.IResolvable) {
    this._clusterAgentDeploymentCustomization.internalValue = value;
  }
  public resetClusterAgentDeploymentCustomization() {
    this._clusterAgentDeploymentCustomization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterAgentDeploymentCustomizationInput() {
    return this._clusterAgentDeploymentCustomization.internalValue;
  }

  // fleet_agent_deployment_customization - computed: false, optional: true, required: false
  private _fleetAgentDeploymentCustomization = new ClusterV2FleetAgentDeploymentCustomizationList(this, "fleet_agent_deployment_customization", false);
  public get fleetAgentDeploymentCustomization() {
    return this._fleetAgentDeploymentCustomization;
  }
  public putFleetAgentDeploymentCustomization(value: ClusterV2FleetAgentDeploymentCustomization[] | cdktf.IResolvable) {
    this._fleetAgentDeploymentCustomization.internalValue = value;
  }
  public resetFleetAgentDeploymentCustomization() {
    this._fleetAgentDeploymentCustomization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetAgentDeploymentCustomizationInput() {
    return this._fleetAgentDeploymentCustomization.internalValue;
  }

  // local_auth_endpoint - computed: false, optional: true, required: false
  private _localAuthEndpoint = new ClusterV2LocalAuthEndpointOutputReference(this, "local_auth_endpoint");
  public get localAuthEndpoint() {
    return this._localAuthEndpoint;
  }
  public putLocalAuthEndpoint(value: ClusterV2LocalAuthEndpoint) {
    this._localAuthEndpoint.internalValue = value;
  }
  public resetLocalAuthEndpoint() {
    this._localAuthEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAuthEndpointInput() {
    return this._localAuthEndpoint.internalValue;
  }

  // rke_config - computed: false, optional: true, required: false
  private _rkeConfig = new ClusterV2RkeConfigOutputReference(this, "rke_config");
  public get rkeConfig() {
    return this._rkeConfig;
  }
  public putRkeConfig(value: ClusterV2RkeConfig) {
    this._rkeConfig.internalValue = value;
  }
  public resetRkeConfig() {
    this._rkeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rkeConfigInput() {
    return this._rkeConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ClusterV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ClusterV2Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      cloud_credential_secret_name: cdktf.stringToTerraform(this._cloudCredentialSecretName),
      default_cluster_role_for_project_members: cdktf.stringToTerraform(this._defaultClusterRoleForProjectMembers),
      default_pod_security_admission_configuration_template_name: cdktf.stringToTerraform(this._defaultPodSecurityAdmissionConfigurationTemplateName),
      enable_network_policy: cdktf.booleanToTerraform(this._enableNetworkPolicy),
      fleet_namespace: cdktf.stringToTerraform(this._fleetNamespace),
      id: cdktf.stringToTerraform(this._id),
      kubernetes_version: cdktf.stringToTerraform(this._kubernetesVersion),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      agent_env_vars: cdktf.listMapper(clusterV2AgentEnvVarsToTerraform, true)(this._agentEnvVars.internalValue),
      cluster_agent_deployment_customization: cdktf.listMapper(clusterV2ClusterAgentDeploymentCustomizationToTerraform, true)(this._clusterAgentDeploymentCustomization.internalValue),
      fleet_agent_deployment_customization: cdktf.listMapper(clusterV2FleetAgentDeploymentCustomizationToTerraform, true)(this._fleetAgentDeploymentCustomization.internalValue),
      local_auth_endpoint: clusterV2LocalAuthEndpointToTerraform(this._localAuthEndpoint.internalValue),
      rke_config: clusterV2RkeConfigToTerraform(this._rkeConfig.internalValue),
      timeouts: clusterV2TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      cloud_credential_secret_name: {
        value: cdktf.stringToHclTerraform(this._cloudCredentialSecretName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_cluster_role_for_project_members: {
        value: cdktf.stringToHclTerraform(this._defaultClusterRoleForProjectMembers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_pod_security_admission_configuration_template_name: {
        value: cdktf.stringToHclTerraform(this._defaultPodSecurityAdmissionConfigurationTemplateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_network_policy: {
        value: cdktf.booleanToHclTerraform(this._enableNetworkPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fleet_namespace: {
        value: cdktf.stringToHclTerraform(this._fleetNamespace),
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
      kubernetes_version: {
        value: cdktf.stringToHclTerraform(this._kubernetesVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      agent_env_vars: {
        value: cdktf.listMapperHcl(clusterV2AgentEnvVarsToHclTerraform, true)(this._agentEnvVars.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterV2AgentEnvVarsList",
      },
      cluster_agent_deployment_customization: {
        value: cdktf.listMapperHcl(clusterV2ClusterAgentDeploymentCustomizationToHclTerraform, true)(this._clusterAgentDeploymentCustomization.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterV2ClusterAgentDeploymentCustomizationList",
      },
      fleet_agent_deployment_customization: {
        value: cdktf.listMapperHcl(clusterV2FleetAgentDeploymentCustomizationToHclTerraform, true)(this._fleetAgentDeploymentCustomization.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterV2FleetAgentDeploymentCustomizationList",
      },
      local_auth_endpoint: {
        value: clusterV2LocalAuthEndpointToHclTerraform(this._localAuthEndpoint.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterV2LocalAuthEndpointList",
      },
      rke_config: {
        value: clusterV2RkeConfigToHclTerraform(this._rkeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterV2RkeConfigList",
      },
      timeouts: {
        value: clusterV2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClusterV2Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
