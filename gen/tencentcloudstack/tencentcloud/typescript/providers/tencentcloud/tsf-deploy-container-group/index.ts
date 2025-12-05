// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TsfDeployContainerGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The maximum number of CPU cores allocated to the agent container corresponds to the limit field in Kubernetes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#agent_cpu_limit TsfDeployContainerGroup#agent_cpu_limit}
  */
  readonly agentCpuLimit?: string;
  /**
  * The number of CPU cores allocated to the agent container corresponds to the request field in Kubernetes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#agent_cpu_request TsfDeployContainerGroup#agent_cpu_request}
  */
  readonly agentCpuRequest?: string;
  /**
  * The maximum amount of memory in MiB allocated to the agent container corresponds to the &amp;#39;limit&amp;#39; field in Kubernetes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#agent_mem_limit TsfDeployContainerGroup#agent_mem_limit}
  */
  readonly agentMemLimit?: string;
  /**
  * The amount of memory in MiB allocated to the agent container corresponds to the request field in Kubernetes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#agent_mem_request TsfDeployContainerGroup#agent_mem_request}
  */
  readonly agentMemRequest?: string;
  /**
  * The maximum number of CPU cores for the business container, corresponding to the limit in K8S. If not specified, it defaults to twice the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#cpu_limit TsfDeployContainerGroup#cpu_limit}
  */
  readonly cpuLimit?: string;
  /**
  * The number of CPU cores allocated to the business container, corresponding to the request in K8S. The default value is 0.25.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#cpu_request TsfDeployContainerGroup#cpu_request}
  */
  readonly cpuRequest?: string;
  /**
  * Whether to deploy the agent container. If this parameter is not specified, the agent container will not be deployed by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#deploy_agent TsfDeployContainerGroup#deploy_agent}
  */
  readonly deployAgent?: boolean | cdktf.IResolvable;
  /**
  * Not start right away.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#do_not_start TsfDeployContainerGroup#do_not_start}
  */
  readonly doNotStart?: boolean | cdktf.IResolvable;
  /**
  * group Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#group_id TsfDeployContainerGroup#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#id TsfDeployContainerGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether to perform incremental deployment. The default value is false, which means full update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#incremental_deployment TsfDeployContainerGroup#incremental_deployment}
  */
  readonly incrementalDeployment?: boolean | cdktf.IResolvable;
  /**
  * instance number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#instance_num TsfDeployContainerGroup#instance_num}
  */
  readonly instanceNum: number;
  /**
  * The maximum amount of CPU cores allocated to the istio proxy container corresponds to the &amp;#39;limit&amp;#39; field in Kubernetes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#istio_cpu_limit TsfDeployContainerGroup#istio_cpu_limit}
  */
  readonly istioCpuLimit?: string;
  /**
  * The number of CPU cores allocated to the istio proxy container corresponds to the &amp;#39;request&amp;#39; field in Kubernetes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#istio_cpu_request TsfDeployContainerGroup#istio_cpu_request}
  */
  readonly istioCpuRequest?: string;
  /**
  * The maximum amount of memory in MiB allocated to the agent container corresponds to the request field in Kubernetes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#istio_mem_limit TsfDeployContainerGroup#istio_mem_limit}
  */
  readonly istioMemLimit?: string;
  /**
  * The amount of memory in MiB allocated to the agent container corresponds to the request field in Kubernetes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#istio_mem_request TsfDeployContainerGroup#istio_mem_request}
  */
  readonly istioMemRequest?: string;
  /**
  * jvm options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#jvm_opts TsfDeployContainerGroup#jvm_opts}
  */
  readonly jvmOpts?: string;
  /**
  * MaxSurge parameter in Kubernetes rolling update strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#max_surge TsfDeployContainerGroup#max_surge}
  */
  readonly maxSurge?: string;
  /**
  * MaxUnavailable parameter in Kubernetes rolling update strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#max_unavailable TsfDeployContainerGroup#max_unavailable}
  */
  readonly maxUnavailable?: string;
  /**
  * The maximum memory size in MiB for the business container, corresponding to the limit in K8S. If not specified, it defaults to twice the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#mem_limit TsfDeployContainerGroup#mem_limit}
  */
  readonly memLimit?: string;
  /**
  * The amount of memory in MiB allocated to the business container, corresponding to the request in K8S. The default value is 640 MiB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#mem_request TsfDeployContainerGroup#mem_request}
  */
  readonly memRequest?: string;
  /**
  * (Priority use) New image name, such as /tsf/nginx.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#repo_name TsfDeployContainerGroup#repo_name}
  */
  readonly repoName?: string;
  /**
  * repo type, tcr or leave it blank.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#repo_type TsfDeployContainerGroup#repo_type}
  */
  readonly repoType?: string;
  /**
  * old image name, eg: /tsf/server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#reponame TsfDeployContainerGroup#reponame}
  */
  readonly reponame?: string;
  /**
  * image server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#server TsfDeployContainerGroup#server}
  */
  readonly server?: string;
  /**
  * image version name, v1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#tag_name TsfDeployContainerGroup#tag_name}
  */
  readonly tagName: string;
  /**
  * update Interval, is required when rolling update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#update_ivl TsfDeployContainerGroup#update_ivl}
  */
  readonly updateIvl?: number;
  /**
  * Update method: 0 for fast update, 1 for rolling update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#update_type TsfDeployContainerGroup#update_type}
  */
  readonly updateType?: number;
  /**
  * Whether to clear the volume information. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#volume_clean TsfDeployContainerGroup#volume_clean}
  */
  readonly volumeClean?: boolean | cdktf.IResolvable;
  /**
  * agent_profile_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#agent_profile_list TsfDeployContainerGroup#agent_profile_list}
  */
  readonly agentProfileList?: TsfDeployContainerGroupAgentProfileListStruct[] | cdktf.IResolvable;
  /**
  * envs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#envs TsfDeployContainerGroup#envs}
  */
  readonly envs?: TsfDeployContainerGroupEnvs[] | cdktf.IResolvable;
  /**
  * health_check_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#health_check_settings TsfDeployContainerGroup#health_check_settings}
  */
  readonly healthCheckSettings?: TsfDeployContainerGroupHealthCheckSettings;
  /**
  * scheduling_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#scheduling_strategy TsfDeployContainerGroup#scheduling_strategy}
  */
  readonly schedulingStrategy?: TsfDeployContainerGroupSchedulingStrategy;
  /**
  * service_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#service_setting TsfDeployContainerGroup#service_setting}
  */
  readonly serviceSetting?: TsfDeployContainerGroupServiceSetting;
  /**
  * volume_info_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#volume_info_list TsfDeployContainerGroup#volume_info_list}
  */
  readonly volumeInfoList?: TsfDeployContainerGroupVolumeInfoListStruct[] | cdktf.IResolvable;
  /**
  * volume_mount_info_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#volume_mount_info_list TsfDeployContainerGroup#volume_mount_info_list}
  */
  readonly volumeMountInfoList?: TsfDeployContainerGroupVolumeMountInfoListStruct[] | cdktf.IResolvable;
  /**
  * warmup_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#warmup_setting TsfDeployContainerGroup#warmup_setting}
  */
  readonly warmupSetting?: TsfDeployContainerGroupWarmupSetting;
}
export interface TsfDeployContainerGroupAgentProfileListStruct {
  /**
  * Agent type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#agent_type TsfDeployContainerGroup#agent_type}
  */
  readonly agentType?: string;
  /**
  * Agent version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#agent_version TsfDeployContainerGroup#agent_version}
  */
  readonly agentVersion?: string;
}

export function tsfDeployContainerGroupAgentProfileListStructToTerraform(struct?: TsfDeployContainerGroupAgentProfileListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_type: cdktf.stringToTerraform(struct!.agentType),
    agent_version: cdktf.stringToTerraform(struct!.agentVersion),
  }
}


export function tsfDeployContainerGroupAgentProfileListStructToHclTerraform(struct?: TsfDeployContainerGroupAgentProfileListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_type: {
      value: cdktf.stringToHclTerraform(struct!.agentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    agent_version: {
      value: cdktf.stringToHclTerraform(struct!.agentVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TsfDeployContainerGroupAgentProfileListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TsfDeployContainerGroupAgentProfileListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentType = this._agentType;
    }
    if (this._agentVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentVersion = this._agentVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TsfDeployContainerGroupAgentProfileListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentType = undefined;
      this._agentVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentType = value.agentType;
      this._agentVersion = value.agentVersion;
    }
  }

  // agent_type - computed: true, optional: true, required: false
  private _agentType?: string; 
  public get agentType() {
    return this.getStringAttribute('agent_type');
  }
  public set agentType(value: string) {
    this._agentType = value;
  }
  public resetAgentType() {
    this._agentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentTypeInput() {
    return this._agentType;
  }

  // agent_version - computed: true, optional: true, required: false
  private _agentVersion?: string; 
  public get agentVersion() {
    return this.getStringAttribute('agent_version');
  }
  public set agentVersion(value: string) {
    this._agentVersion = value;
  }
  public resetAgentVersion() {
    this._agentVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentVersionInput() {
    return this._agentVersion;
  }
}

export class TsfDeployContainerGroupAgentProfileListStructList extends cdktf.ComplexList {
  public internalValue? : TsfDeployContainerGroupAgentProfileListStruct[] | cdktf.IResolvable

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
  public get(index: number): TsfDeployContainerGroupAgentProfileListStructOutputReference {
    return new TsfDeployContainerGroupAgentProfileListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TsfDeployContainerGroupEnvsValueFromFieldRef {
  /**
  * The FieldPath configuration of Kubernetes. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#field_path TsfDeployContainerGroup#field_path}
  */
  readonly fieldPath?: string;
}

export function tsfDeployContainerGroupEnvsValueFromFieldRefToTerraform(struct?: TsfDeployContainerGroupEnvsValueFromFieldRefOutputReference | TsfDeployContainerGroupEnvsValueFromFieldRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function tsfDeployContainerGroupEnvsValueFromFieldRefToHclTerraform(struct?: TsfDeployContainerGroupEnvsValueFromFieldRefOutputReference | TsfDeployContainerGroupEnvsValueFromFieldRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TsfDeployContainerGroupEnvsValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TsfDeployContainerGroupEnvsValueFromFieldRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TsfDeployContainerGroupEnvsValueFromFieldRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fieldPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fieldPath = value.fieldPath;
    }
  }

  // field_path - computed: true, optional: true, required: false
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  public resetFieldPath() {
    this._fieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }
}
export interface TsfDeployContainerGroupEnvsValueFromResourceFieldRef {
  /**
  * The Resource configuration of Kubernetes. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#resource TsfDeployContainerGroup#resource}
  */
  readonly resource?: string;
}

export function tsfDeployContainerGroupEnvsValueFromResourceFieldRefToTerraform(struct?: TsfDeployContainerGroupEnvsValueFromResourceFieldRefOutputReference | TsfDeployContainerGroupEnvsValueFromResourceFieldRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}


export function tsfDeployContainerGroupEnvsValueFromResourceFieldRefToHclTerraform(struct?: TsfDeployContainerGroupEnvsValueFromResourceFieldRefOutputReference | TsfDeployContainerGroupEnvsValueFromResourceFieldRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TsfDeployContainerGroupEnvsValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TsfDeployContainerGroupEnvsValueFromResourceFieldRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TsfDeployContainerGroupEnvsValueFromResourceFieldRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resource = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resource = value.resource;
    }
  }

  // resource - computed: true, optional: true, required: false
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }
}
export interface TsfDeployContainerGroupEnvsValueFrom {
  /**
  * field_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#field_ref TsfDeployContainerGroup#field_ref}
  */
  readonly fieldRef?: TsfDeployContainerGroupEnvsValueFromFieldRef;
  /**
  * resource_field_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#resource_field_ref TsfDeployContainerGroup#resource_field_ref}
  */
  readonly resourceFieldRef?: TsfDeployContainerGroupEnvsValueFromResourceFieldRef;
}

export function tsfDeployContainerGroupEnvsValueFromToTerraform(struct?: TsfDeployContainerGroupEnvsValueFromOutputReference | TsfDeployContainerGroupEnvsValueFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_ref: tsfDeployContainerGroupEnvsValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: tsfDeployContainerGroupEnvsValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
  }
}


export function tsfDeployContainerGroupEnvsValueFromToHclTerraform(struct?: TsfDeployContainerGroupEnvsValueFromOutputReference | TsfDeployContainerGroupEnvsValueFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_ref: {
      value: tsfDeployContainerGroupEnvsValueFromFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "list",
      storageClassType: "TsfDeployContainerGroupEnvsValueFromFieldRefList",
    },
    resource_field_ref: {
      value: tsfDeployContainerGroupEnvsValueFromResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "list",
      storageClassType: "TsfDeployContainerGroupEnvsValueFromResourceFieldRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TsfDeployContainerGroupEnvsValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TsfDeployContainerGroupEnvsValueFrom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRef = this._fieldRef?.internalValue;
    }
    if (this._resourceFieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceFieldRef = this._resourceFieldRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TsfDeployContainerGroupEnvsValueFrom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fieldRef.internalValue = undefined;
      this._resourceFieldRef.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fieldRef.internalValue = value.fieldRef;
      this._resourceFieldRef.internalValue = value.resourceFieldRef;
    }
  }

  // field_ref - computed: false, optional: true, required: false
  private _fieldRef = new TsfDeployContainerGroupEnvsValueFromFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: TsfDeployContainerGroupEnvsValueFromFieldRef) {
    this._fieldRef.internalValue = value;
  }
  public resetFieldRef() {
    this._fieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRefInput() {
    return this._fieldRef.internalValue;
  }

  // resource_field_ref - computed: false, optional: true, required: false
  private _resourceFieldRef = new TsfDeployContainerGroupEnvsValueFromResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: TsfDeployContainerGroupEnvsValueFromResourceFieldRef) {
    this._resourceFieldRef.internalValue = value;
  }
  public resetResourceFieldRef() {
    this._resourceFieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFieldRefInput() {
    return this._resourceFieldRef.internalValue;
  }
}
export interface TsfDeployContainerGroupEnvs {
  /**
  * env param name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#name TsfDeployContainerGroup#name}
  */
  readonly name: string;
  /**
  * value of env.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#value TsfDeployContainerGroup#value}
  */
  readonly value?: string;
  /**
  * value_from block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#value_from TsfDeployContainerGroup#value_from}
  */
  readonly valueFrom?: TsfDeployContainerGroupEnvsValueFrom;
}

export function tsfDeployContainerGroupEnvsToTerraform(struct?: TsfDeployContainerGroupEnvs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: tsfDeployContainerGroupEnvsValueFromToTerraform(struct!.valueFrom),
  }
}


export function tsfDeployContainerGroupEnvsToHclTerraform(struct?: TsfDeployContainerGroupEnvs | cdktf.IResolvable): any {
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
    value_from: {
      value: tsfDeployContainerGroupEnvsValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "list",
      storageClassType: "TsfDeployContainerGroupEnvsValueFromList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TsfDeployContainerGroupEnvsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TsfDeployContainerGroupEnvs | cdktf.IResolvable | undefined {
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
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TsfDeployContainerGroupEnvs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
      this._valueFrom.internalValue = undefined;
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
      this._valueFrom.internalValue = value.valueFrom;
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

  // value - computed: true, optional: true, required: false
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

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new TsfDeployContainerGroupEnvsValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: TsfDeployContainerGroupEnvsValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}

export class TsfDeployContainerGroupEnvsList extends cdktf.ComplexList {
  public internalValue? : TsfDeployContainerGroupEnvs[] | cdktf.IResolvable

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
  public get(index: number): TsfDeployContainerGroupEnvsOutputReference {
    return new TsfDeployContainerGroupEnvsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TsfDeployContainerGroupHealthCheckSettingsLivenessProbe {
  /**
  * The health check method. HTTP: checks through an HTTP interface; CMD: checks by executing a command; TCP: checks by establishing a TCP connection. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#action_type TsfDeployContainerGroup#action_type}
  */
  readonly actionType: string;
  /**
  * The command to be executed for command health checks. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#command TsfDeployContainerGroup#command}
  */
  readonly command?: string[];
  /**
  * The number of consecutive successful health checks required for the backend container to transition from success to failure. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#failure_threshold TsfDeployContainerGroup#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * The time delay for the container to start the health check. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#initial_delay_seconds TsfDeployContainerGroup#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * The request path for HTTP health checks. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#path TsfDeployContainerGroup#path}
  */
  readonly path?: string;
  /**
  * The time interval for performing health checks. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#period_seconds TsfDeployContainerGroup#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * The port used for health checks, ranging from 1 to 65535. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#port TsfDeployContainerGroup#port}
  */
  readonly port?: number;
  /**
  * The protocol used for HTTP health checks. HTTP and HTTPS are supported. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#scheme TsfDeployContainerGroup#scheme}
  */
  readonly scheme?: string;
  /**
  * The number of consecutive successful health checks required for the backend container to transition from failure to success. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#success_threshold TsfDeployContainerGroup#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * The maximum timeout period for each health check response. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#timeout_seconds TsfDeployContainerGroup#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * The type of readiness probe. TSF_DEFAULT represents the default readiness probe of TSF, while K8S_NATIVE represents the native readiness probe of Kubernetes. If this field is not specified, the native readiness probe of Kubernetes is used by default. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#type TsfDeployContainerGroup#type}
  */
  readonly type?: string;
}

export function tsfDeployContainerGroupHealthCheckSettingsLivenessProbeToTerraform(struct?: TsfDeployContainerGroupHealthCheckSettingsLivenessProbeOutputReference | TsfDeployContainerGroupHealthCheckSettingsLivenessProbe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_type: cdktf.stringToTerraform(struct!.actionType),
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    path: cdktf.stringToTerraform(struct!.path),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    port: cdktf.numberToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function tsfDeployContainerGroupHealthCheckSettingsLivenessProbeToHclTerraform(struct?: TsfDeployContainerGroupHealthCheckSettingsLivenessProbeOutputReference | TsfDeployContainerGroupHealthCheckSettingsLivenessProbe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_type: {
      value: cdktf.stringToHclTerraform(struct!.actionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.initialDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.periodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    success_threshold: {
      value: cdktf.numberToHclTerraform(struct!.successThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TsfDeployContainerGroupHealthCheckSettingsLivenessProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TsfDeployContainerGroupHealthCheckSettingsLivenessProbe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._initialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySeconds = this._initialDelaySeconds;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    if (this._successThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.successThreshold = this._successThreshold;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TsfDeployContainerGroupHealthCheckSettingsLivenessProbe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionType = undefined;
      this._command = undefined;
      this._failureThreshold = undefined;
      this._initialDelaySeconds = undefined;
      this._path = undefined;
      this._periodSeconds = undefined;
      this._port = undefined;
      this._scheme = undefined;
      this._successThreshold = undefined;
      this._timeoutSeconds = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionType = value.actionType;
      this._command = value.command;
      this._failureThreshold = value.failureThreshold;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._path = value.path;
      this._periodSeconds = value.periodSeconds;
      this._port = value.port;
      this._scheme = value.scheme;
      this._successThreshold = value.successThreshold;
      this._timeoutSeconds = value.timeoutSeconds;
      this._type = value.type;
    }
  }

  // action_type - computed: false, optional: false, required: true
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return cdktf.Fn.tolist(this.getListAttribute('command'));
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // failure_threshold - computed: false, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // initial_delay_seconds - computed: false, optional: true, required: false
  private _initialDelaySeconds?: number; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // success_threshold - computed: false, optional: true, required: false
  private _successThreshold?: number; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
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
}
export interface TsfDeployContainerGroupHealthCheckSettingsReadinessProbe {
  /**
  * The health check method. HTTP indicates checking through an HTTP interface, CMD indicates checking through executing a command, and TCP indicates checking through establishing a TCP connection. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#action_type TsfDeployContainerGroup#action_type}
  */
  readonly actionType: string;
  /**
  * The command to be executed for command check. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#command TsfDeployContainerGroup#command}
  */
  readonly command?: string[];
  /**
  * The number of consecutive successful health checks required for the backend container to transition from success to failure. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#failure_threshold TsfDeployContainerGroup#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * The time to delay the start of the container health check. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#initial_delay_seconds TsfDeployContainerGroup#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * The request path for HTTP health checks. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#path TsfDeployContainerGroup#path}
  */
  readonly path?: string;
  /**
  * The time interval for performing health checks. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#period_seconds TsfDeployContainerGroup#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * The port used for health checks, ranging from 1 to 65535. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#port TsfDeployContainerGroup#port}
  */
  readonly port?: number;
  /**
  * The protocol used for HTTP health checks. HTTP and HTTPS are supported. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#scheme TsfDeployContainerGroup#scheme}
  */
  readonly scheme?: string;
  /**
  * The number of consecutive successful health checks required for the backend container to transition from failure to success. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#success_threshold TsfDeployContainerGroup#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * The maximum timeout period for each health check response. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#timeout_seconds TsfDeployContainerGroup#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * The type of readiness probe. TSF_DEFAULT represents the default readiness probe of TSF, while K8S_NATIVE represents the native readiness probe of Kubernetes. If this field is not specified, the native readiness probe of Kubernetes is used by default. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#type TsfDeployContainerGroup#type}
  */
  readonly type?: string;
}

export function tsfDeployContainerGroupHealthCheckSettingsReadinessProbeToTerraform(struct?: TsfDeployContainerGroupHealthCheckSettingsReadinessProbeOutputReference | TsfDeployContainerGroupHealthCheckSettingsReadinessProbe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_type: cdktf.stringToTerraform(struct!.actionType),
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    path: cdktf.stringToTerraform(struct!.path),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    port: cdktf.numberToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function tsfDeployContainerGroupHealthCheckSettingsReadinessProbeToHclTerraform(struct?: TsfDeployContainerGroupHealthCheckSettingsReadinessProbeOutputReference | TsfDeployContainerGroupHealthCheckSettingsReadinessProbe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_type: {
      value: cdktf.stringToHclTerraform(struct!.actionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.initialDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.periodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    success_threshold: {
      value: cdktf.numberToHclTerraform(struct!.successThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TsfDeployContainerGroupHealthCheckSettingsReadinessProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TsfDeployContainerGroupHealthCheckSettingsReadinessProbe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._initialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySeconds = this._initialDelaySeconds;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    if (this._successThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.successThreshold = this._successThreshold;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TsfDeployContainerGroupHealthCheckSettingsReadinessProbe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionType = undefined;
      this._command = undefined;
      this._failureThreshold = undefined;
      this._initialDelaySeconds = undefined;
      this._path = undefined;
      this._periodSeconds = undefined;
      this._port = undefined;
      this._scheme = undefined;
      this._successThreshold = undefined;
      this._timeoutSeconds = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionType = value.actionType;
      this._command = value.command;
      this._failureThreshold = value.failureThreshold;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._path = value.path;
      this._periodSeconds = value.periodSeconds;
      this._port = value.port;
      this._scheme = value.scheme;
      this._successThreshold = value.successThreshold;
      this._timeoutSeconds = value.timeoutSeconds;
      this._type = value.type;
    }
  }

  // action_type - computed: false, optional: false, required: true
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return cdktf.Fn.tolist(this.getListAttribute('command'));
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // failure_threshold - computed: false, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // initial_delay_seconds - computed: false, optional: true, required: false
  private _initialDelaySeconds?: number; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // success_threshold - computed: false, optional: true, required: false
  private _successThreshold?: number; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
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
}
export interface TsfDeployContainerGroupHealthCheckSettings {
  /**
  * liveness_probe block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#liveness_probe TsfDeployContainerGroup#liveness_probe}
  */
  readonly livenessProbe?: TsfDeployContainerGroupHealthCheckSettingsLivenessProbe;
  /**
  * readiness_probe block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#readiness_probe TsfDeployContainerGroup#readiness_probe}
  */
  readonly readinessProbe?: TsfDeployContainerGroupHealthCheckSettingsReadinessProbe;
}

export function tsfDeployContainerGroupHealthCheckSettingsToTerraform(struct?: TsfDeployContainerGroupHealthCheckSettingsOutputReference | TsfDeployContainerGroupHealthCheckSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    liveness_probe: tsfDeployContainerGroupHealthCheckSettingsLivenessProbeToTerraform(struct!.livenessProbe),
    readiness_probe: tsfDeployContainerGroupHealthCheckSettingsReadinessProbeToTerraform(struct!.readinessProbe),
  }
}


export function tsfDeployContainerGroupHealthCheckSettingsToHclTerraform(struct?: TsfDeployContainerGroupHealthCheckSettingsOutputReference | TsfDeployContainerGroupHealthCheckSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    liveness_probe: {
      value: tsfDeployContainerGroupHealthCheckSettingsLivenessProbeToHclTerraform(struct!.livenessProbe),
      isBlock: true,
      type: "list",
      storageClassType: "TsfDeployContainerGroupHealthCheckSettingsLivenessProbeList",
    },
    readiness_probe: {
      value: tsfDeployContainerGroupHealthCheckSettingsReadinessProbeToHclTerraform(struct!.readinessProbe),
      isBlock: true,
      type: "list",
      storageClassType: "TsfDeployContainerGroupHealthCheckSettingsReadinessProbeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TsfDeployContainerGroupHealthCheckSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TsfDeployContainerGroupHealthCheckSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._livenessProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessProbe = this._livenessProbe?.internalValue;
    }
    if (this._readinessProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessProbe = this._readinessProbe?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TsfDeployContainerGroupHealthCheckSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._livenessProbe.internalValue = undefined;
      this._readinessProbe.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._livenessProbe.internalValue = value.livenessProbe;
      this._readinessProbe.internalValue = value.readinessProbe;
    }
  }

  // liveness_probe - computed: false, optional: true, required: false
  private _livenessProbe = new TsfDeployContainerGroupHealthCheckSettingsLivenessProbeOutputReference(this, "liveness_probe");
  public get livenessProbe() {
    return this._livenessProbe;
  }
  public putLivenessProbe(value: TsfDeployContainerGroupHealthCheckSettingsLivenessProbe) {
    this._livenessProbe.internalValue = value;
  }
  public resetLivenessProbe() {
    this._livenessProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessProbeInput() {
    return this._livenessProbe.internalValue;
  }

  // readiness_probe - computed: false, optional: true, required: false
  private _readinessProbe = new TsfDeployContainerGroupHealthCheckSettingsReadinessProbeOutputReference(this, "readiness_probe");
  public get readinessProbe() {
    return this._readinessProbe;
  }
  public putReadinessProbe(value: TsfDeployContainerGroupHealthCheckSettingsReadinessProbe) {
    this._readinessProbe.internalValue = value;
  }
  public resetReadinessProbe() {
    this._readinessProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessProbeInput() {
    return this._readinessProbe.internalValue;
  }
}
export interface TsfDeployContainerGroupSchedulingStrategy {
  /**
  * NONE: Do not use scheduling strategy; CROSS_AZ: Deploy across availability zones. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#type TsfDeployContainerGroup#type}
  */
  readonly type: string;
}

export function tsfDeployContainerGroupSchedulingStrategyToTerraform(struct?: TsfDeployContainerGroupSchedulingStrategyOutputReference | TsfDeployContainerGroupSchedulingStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function tsfDeployContainerGroupSchedulingStrategyToHclTerraform(struct?: TsfDeployContainerGroupSchedulingStrategyOutputReference | TsfDeployContainerGroupSchedulingStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TsfDeployContainerGroupSchedulingStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TsfDeployContainerGroupSchedulingStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TsfDeployContainerGroupSchedulingStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface TsfDeployContainerGroupServiceSettingProtocolPorts {
  /**
  * node port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#node_port TsfDeployContainerGroup#node_port}
  */
  readonly nodePort?: number;
  /**
  * port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#port TsfDeployContainerGroup#port}
  */
  readonly port: number;
  /**
  * TCP or UDP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#protocol TsfDeployContainerGroup#protocol}
  */
  readonly protocol: string;
  /**
  * container port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#target_port TsfDeployContainerGroup#target_port}
  */
  readonly targetPort: number;
}

export function tsfDeployContainerGroupServiceSettingProtocolPortsToTerraform(struct?: TsfDeployContainerGroupServiceSettingProtocolPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_port: cdktf.numberToTerraform(struct!.nodePort),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    target_port: cdktf.numberToTerraform(struct!.targetPort),
  }
}


export function tsfDeployContainerGroupServiceSettingProtocolPortsToHclTerraform(struct?: TsfDeployContainerGroupServiceSettingProtocolPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_port: {
      value: cdktf.numberToHclTerraform(struct!.nodePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_port: {
      value: cdktf.numberToHclTerraform(struct!.targetPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TsfDeployContainerGroupServiceSettingProtocolPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TsfDeployContainerGroupServiceSettingProtocolPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePort = this._nodePort;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._targetPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPort = this._targetPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TsfDeployContainerGroupServiceSettingProtocolPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodePort = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._targetPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodePort = value.nodePort;
      this._port = value.port;
      this._protocol = value.protocol;
      this._targetPort = value.targetPort;
    }
  }

  // node_port - computed: true, optional: true, required: false
  private _nodePort?: number; 
  public get nodePort() {
    return this.getNumberAttribute('node_port');
  }
  public set nodePort(value: number) {
    this._nodePort = value;
  }
  public resetNodePort() {
    this._nodePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePortInput() {
    return this._nodePort;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // target_port - computed: false, optional: false, required: true
  private _targetPort?: number; 
  public get targetPort() {
    return this.getNumberAttribute('target_port');
  }
  public set targetPort(value: number) {
    this._targetPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPortInput() {
    return this._targetPort;
  }
}

export class TsfDeployContainerGroupServiceSettingProtocolPortsList extends cdktf.ComplexList {
  public internalValue? : TsfDeployContainerGroupServiceSettingProtocolPorts[] | cdktf.IResolvable

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
  public get(index: number): TsfDeployContainerGroupServiceSettingProtocolPortsOutputReference {
    return new TsfDeployContainerGroupServiceSettingProtocolPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TsfDeployContainerGroupServiceSetting {
  /**
  * 0: Public network, 1: Access within the cluster, 2: NodePort, 3: Access within VPC. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#access_type TsfDeployContainerGroup#access_type}
  */
  readonly accessType: number;
  /**
  * When set to true and DisableService is also true, the previously created service will be deleted. Please use with caution. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#allow_delete_service TsfDeployContainerGroup#allow_delete_service}
  */
  readonly allowDeleteService?: boolean | cdktf.IResolvable;
  /**
  * Whether to create a Kubernetes service. The default value is false. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#disable_service TsfDeployContainerGroup#disable_service}
  */
  readonly disableService?: boolean | cdktf.IResolvable;
  /**
  * Whether the service is of headless type. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#headless_service TsfDeployContainerGroup#headless_service}
  */
  readonly headlessService?: boolean | cdktf.IResolvable;
  /**
  * Enable session affinity. true means enabled, false means disabled. The default value is false. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#open_session_affinity TsfDeployContainerGroup#open_session_affinity}
  */
  readonly openSessionAffinity?: boolean | cdktf.IResolvable;
  /**
  * Session affinity session time. The default value is 10800. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#session_affinity_timeout_seconds TsfDeployContainerGroup#session_affinity_timeout_seconds}
  */
  readonly sessionAffinityTimeoutSeconds?: number;
  /**
  * subnet Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#subnet_id TsfDeployContainerGroup#subnet_id}
  */
  readonly subnetId: string;
  /**
  * protocol_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#protocol_ports TsfDeployContainerGroup#protocol_ports}
  */
  readonly protocolPorts: TsfDeployContainerGroupServiceSettingProtocolPorts[] | cdktf.IResolvable;
}

export function tsfDeployContainerGroupServiceSettingToTerraform(struct?: TsfDeployContainerGroupServiceSettingOutputReference | TsfDeployContainerGroupServiceSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_type: cdktf.numberToTerraform(struct!.accessType),
    allow_delete_service: cdktf.booleanToTerraform(struct!.allowDeleteService),
    disable_service: cdktf.booleanToTerraform(struct!.disableService),
    headless_service: cdktf.booleanToTerraform(struct!.headlessService),
    open_session_affinity: cdktf.booleanToTerraform(struct!.openSessionAffinity),
    session_affinity_timeout_seconds: cdktf.numberToTerraform(struct!.sessionAffinityTimeoutSeconds),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    protocol_ports: cdktf.listMapper(tsfDeployContainerGroupServiceSettingProtocolPortsToTerraform, true)(struct!.protocolPorts),
  }
}


export function tsfDeployContainerGroupServiceSettingToHclTerraform(struct?: TsfDeployContainerGroupServiceSettingOutputReference | TsfDeployContainerGroupServiceSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_type: {
      value: cdktf.numberToHclTerraform(struct!.accessType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    allow_delete_service: {
      value: cdktf.booleanToHclTerraform(struct!.allowDeleteService),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_service: {
      value: cdktf.booleanToHclTerraform(struct!.disableService),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    headless_service: {
      value: cdktf.booleanToHclTerraform(struct!.headlessService),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    open_session_affinity: {
      value: cdktf.booleanToHclTerraform(struct!.openSessionAffinity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    session_affinity_timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.sessionAffinityTimeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_ports: {
      value: cdktf.listMapperHcl(tsfDeployContainerGroupServiceSettingProtocolPortsToHclTerraform, true)(struct!.protocolPorts),
      isBlock: true,
      type: "list",
      storageClassType: "TsfDeployContainerGroupServiceSettingProtocolPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TsfDeployContainerGroupServiceSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TsfDeployContainerGroupServiceSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessType !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessType = this._accessType;
    }
    if (this._allowDeleteService !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowDeleteService = this._allowDeleteService;
    }
    if (this._disableService !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableService = this._disableService;
    }
    if (this._headlessService !== undefined) {
      hasAnyValues = true;
      internalValueResult.headlessService = this._headlessService;
    }
    if (this._openSessionAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.openSessionAffinity = this._openSessionAffinity;
    }
    if (this._sessionAffinityTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionAffinityTimeoutSeconds = this._sessionAffinityTimeoutSeconds;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._protocolPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolPorts = this._protocolPorts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TsfDeployContainerGroupServiceSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessType = undefined;
      this._allowDeleteService = undefined;
      this._disableService = undefined;
      this._headlessService = undefined;
      this._openSessionAffinity = undefined;
      this._sessionAffinityTimeoutSeconds = undefined;
      this._subnetId = undefined;
      this._protocolPorts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessType = value.accessType;
      this._allowDeleteService = value.allowDeleteService;
      this._disableService = value.disableService;
      this._headlessService = value.headlessService;
      this._openSessionAffinity = value.openSessionAffinity;
      this._sessionAffinityTimeoutSeconds = value.sessionAffinityTimeoutSeconds;
      this._subnetId = value.subnetId;
      this._protocolPorts.internalValue = value.protocolPorts;
    }
  }

  // access_type - computed: false, optional: false, required: true
  private _accessType?: number; 
  public get accessType() {
    return this.getNumberAttribute('access_type');
  }
  public set accessType(value: number) {
    this._accessType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTypeInput() {
    return this._accessType;
  }

  // allow_delete_service - computed: true, optional: true, required: false
  private _allowDeleteService?: boolean | cdktf.IResolvable; 
  public get allowDeleteService() {
    return this.getBooleanAttribute('allow_delete_service');
  }
  public set allowDeleteService(value: boolean | cdktf.IResolvable) {
    this._allowDeleteService = value;
  }
  public resetAllowDeleteService() {
    this._allowDeleteService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDeleteServiceInput() {
    return this._allowDeleteService;
  }

  // disable_service - computed: true, optional: true, required: false
  private _disableService?: boolean | cdktf.IResolvable; 
  public get disableService() {
    return this.getBooleanAttribute('disable_service');
  }
  public set disableService(value: boolean | cdktf.IResolvable) {
    this._disableService = value;
  }
  public resetDisableService() {
    this._disableService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableServiceInput() {
    return this._disableService;
  }

  // headless_service - computed: true, optional: true, required: false
  private _headlessService?: boolean | cdktf.IResolvable; 
  public get headlessService() {
    return this.getBooleanAttribute('headless_service');
  }
  public set headlessService(value: boolean | cdktf.IResolvable) {
    this._headlessService = value;
  }
  public resetHeadlessService() {
    this._headlessService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headlessServiceInput() {
    return this._headlessService;
  }

  // open_session_affinity - computed: true, optional: true, required: false
  private _openSessionAffinity?: boolean | cdktf.IResolvable; 
  public get openSessionAffinity() {
    return this.getBooleanAttribute('open_session_affinity');
  }
  public set openSessionAffinity(value: boolean | cdktf.IResolvable) {
    this._openSessionAffinity = value;
  }
  public resetOpenSessionAffinity() {
    this._openSessionAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openSessionAffinityInput() {
    return this._openSessionAffinity;
  }

  // session_affinity_timeout_seconds - computed: true, optional: true, required: false
  private _sessionAffinityTimeoutSeconds?: number; 
  public get sessionAffinityTimeoutSeconds() {
    return this.getNumberAttribute('session_affinity_timeout_seconds');
  }
  public set sessionAffinityTimeoutSeconds(value: number) {
    this._sessionAffinityTimeoutSeconds = value;
  }
  public resetSessionAffinityTimeoutSeconds() {
    this._sessionAffinityTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAffinityTimeoutSecondsInput() {
    return this._sessionAffinityTimeoutSeconds;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // protocol_ports - computed: false, optional: false, required: true
  private _protocolPorts = new TsfDeployContainerGroupServiceSettingProtocolPortsList(this, "protocol_ports", false);
  public get protocolPorts() {
    return this._protocolPorts;
  }
  public putProtocolPorts(value: TsfDeployContainerGroupServiceSettingProtocolPorts[] | cdktf.IResolvable) {
    this._protocolPorts.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolPortsInput() {
    return this._protocolPorts.internalValue;
  }
}
export interface TsfDeployContainerGroupVolumeInfoListStruct {
  /**
  * volume config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#volume_config TsfDeployContainerGroup#volume_config}
  */
  readonly volumeConfig?: string;
  /**
  * volume name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#volume_name TsfDeployContainerGroup#volume_name}
  */
  readonly volumeName: string;
  /**
  * volume type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#volume_type TsfDeployContainerGroup#volume_type}
  */
  readonly volumeType: string;
}

export function tsfDeployContainerGroupVolumeInfoListStructToTerraform(struct?: TsfDeployContainerGroupVolumeInfoListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    volume_config: cdktf.stringToTerraform(struct!.volumeConfig),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}


export function tsfDeployContainerGroupVolumeInfoListStructToHclTerraform(struct?: TsfDeployContainerGroupVolumeInfoListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    volume_config: {
      value: cdktf.stringToHclTerraform(struct!.volumeConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_type: {
      value: cdktf.stringToHclTerraform(struct!.volumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TsfDeployContainerGroupVolumeInfoListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TsfDeployContainerGroupVolumeInfoListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._volumeConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeConfig = this._volumeConfig;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TsfDeployContainerGroupVolumeInfoListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._volumeConfig = undefined;
      this._volumeName = undefined;
      this._volumeType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._volumeConfig = value.volumeConfig;
      this._volumeName = value.volumeName;
      this._volumeType = value.volumeType;
    }
  }

  // volume_config - computed: true, optional: true, required: false
  private _volumeConfig?: string; 
  public get volumeConfig() {
    return this.getStringAttribute('volume_config');
  }
  public set volumeConfig(value: string) {
    this._volumeConfig = value;
  }
  public resetVolumeConfig() {
    this._volumeConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeConfigInput() {
    return this._volumeConfig;
  }

  // volume_name - computed: false, optional: false, required: true
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }

  // volume_type - computed: false, optional: false, required: true
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }
}

export class TsfDeployContainerGroupVolumeInfoListStructList extends cdktf.ComplexList {
  public internalValue? : TsfDeployContainerGroupVolumeInfoListStruct[] | cdktf.IResolvable

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
  public get(index: number): TsfDeployContainerGroupVolumeInfoListStructOutputReference {
    return new TsfDeployContainerGroupVolumeInfoListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TsfDeployContainerGroupVolumeMountInfoListStruct {
  /**
  * Read and write access mode. 1: Read-only. 2: Read-write.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#read_or_write TsfDeployContainerGroup#read_or_write}
  */
  readonly readOrWrite?: string;
  /**
  * mount volume name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#volume_mount_name TsfDeployContainerGroup#volume_mount_name}
  */
  readonly volumeMountName: string;
  /**
  * mount path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#volume_mount_path TsfDeployContainerGroup#volume_mount_path}
  */
  readonly volumeMountPath: string;
  /**
  * mount subPath.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#volume_mount_sub_path TsfDeployContainerGroup#volume_mount_sub_path}
  */
  readonly volumeMountSubPath?: string;
}

export function tsfDeployContainerGroupVolumeMountInfoListStructToTerraform(struct?: TsfDeployContainerGroupVolumeMountInfoListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read_or_write: cdktf.stringToTerraform(struct!.readOrWrite),
    volume_mount_name: cdktf.stringToTerraform(struct!.volumeMountName),
    volume_mount_path: cdktf.stringToTerraform(struct!.volumeMountPath),
    volume_mount_sub_path: cdktf.stringToTerraform(struct!.volumeMountSubPath),
  }
}


export function tsfDeployContainerGroupVolumeMountInfoListStructToHclTerraform(struct?: TsfDeployContainerGroupVolumeMountInfoListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read_or_write: {
      value: cdktf.stringToHclTerraform(struct!.readOrWrite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_mount_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeMountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_mount_path: {
      value: cdktf.stringToHclTerraform(struct!.volumeMountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_mount_sub_path: {
      value: cdktf.stringToHclTerraform(struct!.volumeMountSubPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TsfDeployContainerGroupVolumeMountInfoListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TsfDeployContainerGroupVolumeMountInfoListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._readOrWrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOrWrite = this._readOrWrite;
    }
    if (this._volumeMountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMountName = this._volumeMountName;
    }
    if (this._volumeMountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMountPath = this._volumeMountPath;
    }
    if (this._volumeMountSubPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMountSubPath = this._volumeMountSubPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TsfDeployContainerGroupVolumeMountInfoListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._readOrWrite = undefined;
      this._volumeMountName = undefined;
      this._volumeMountPath = undefined;
      this._volumeMountSubPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._readOrWrite = value.readOrWrite;
      this._volumeMountName = value.volumeMountName;
      this._volumeMountPath = value.volumeMountPath;
      this._volumeMountSubPath = value.volumeMountSubPath;
    }
  }

  // read_or_write - computed: true, optional: true, required: false
  private _readOrWrite?: string; 
  public get readOrWrite() {
    return this.getStringAttribute('read_or_write');
  }
  public set readOrWrite(value: string) {
    this._readOrWrite = value;
  }
  public resetReadOrWrite() {
    this._readOrWrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOrWriteInput() {
    return this._readOrWrite;
  }

  // volume_mount_name - computed: false, optional: false, required: true
  private _volumeMountName?: string; 
  public get volumeMountName() {
    return this.getStringAttribute('volume_mount_name');
  }
  public set volumeMountName(value: string) {
    this._volumeMountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeMountNameInput() {
    return this._volumeMountName;
  }

  // volume_mount_path - computed: false, optional: false, required: true
  private _volumeMountPath?: string; 
  public get volumeMountPath() {
    return this.getStringAttribute('volume_mount_path');
  }
  public set volumeMountPath(value: string) {
    this._volumeMountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeMountPathInput() {
    return this._volumeMountPath;
  }

  // volume_mount_sub_path - computed: true, optional: true, required: false
  private _volumeMountSubPath?: string; 
  public get volumeMountSubPath() {
    return this.getStringAttribute('volume_mount_sub_path');
  }
  public set volumeMountSubPath(value: string) {
    this._volumeMountSubPath = value;
  }
  public resetVolumeMountSubPath() {
    this._volumeMountSubPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeMountSubPathInput() {
    return this._volumeMountSubPath;
  }
}

export class TsfDeployContainerGroupVolumeMountInfoListStructList extends cdktf.ComplexList {
  public internalValue? : TsfDeployContainerGroupVolumeMountInfoListStruct[] | cdktf.IResolvable

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
  public get(index: number): TsfDeployContainerGroupVolumeMountInfoListStructOutputReference {
    return new TsfDeployContainerGroupVolumeMountInfoListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TsfDeployContainerGroupWarmupSetting {
  /**
  * Preheating curvature, with a value between 1 and 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#curvature TsfDeployContainerGroup#curvature}
  */
  readonly curvature?: number;
  /**
  * Whether to enable preheating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#enabled TsfDeployContainerGroup#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable preheating protection. If protection is enabled and more than 50% of nodes are in preheating state, preheating will be aborted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#enabled_protection TsfDeployContainerGroup#enabled_protection}
  */
  readonly enabledProtection?: boolean | cdktf.IResolvable;
  /**
  * warmup time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#warmup_time TsfDeployContainerGroup#warmup_time}
  */
  readonly warmupTime?: number;
}

export function tsfDeployContainerGroupWarmupSettingToTerraform(struct?: TsfDeployContainerGroupWarmupSettingOutputReference | TsfDeployContainerGroupWarmupSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    curvature: cdktf.numberToTerraform(struct!.curvature),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    enabled_protection: cdktf.booleanToTerraform(struct!.enabledProtection),
    warmup_time: cdktf.numberToTerraform(struct!.warmupTime),
  }
}


export function tsfDeployContainerGroupWarmupSettingToHclTerraform(struct?: TsfDeployContainerGroupWarmupSettingOutputReference | TsfDeployContainerGroupWarmupSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    curvature: {
      value: cdktf.numberToHclTerraform(struct!.curvature),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled_protection: {
      value: cdktf.booleanToHclTerraform(struct!.enabledProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    warmup_time: {
      value: cdktf.numberToHclTerraform(struct!.warmupTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TsfDeployContainerGroupWarmupSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TsfDeployContainerGroupWarmupSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._curvature !== undefined) {
      hasAnyValues = true;
      internalValueResult.curvature = this._curvature;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._enabledProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledProtection = this._enabledProtection;
    }
    if (this._warmupTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.warmupTime = this._warmupTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TsfDeployContainerGroupWarmupSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._curvature = undefined;
      this._enabled = undefined;
      this._enabledProtection = undefined;
      this._warmupTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._curvature = value.curvature;
      this._enabled = value.enabled;
      this._enabledProtection = value.enabledProtection;
      this._warmupTime = value.warmupTime;
    }
  }

  // curvature - computed: true, optional: true, required: false
  private _curvature?: number; 
  public get curvature() {
    return this.getNumberAttribute('curvature');
  }
  public set curvature(value: number) {
    this._curvature = value;
  }
  public resetCurvature() {
    this._curvature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get curvatureInput() {
    return this._curvature;
  }

  // enabled - computed: true, optional: true, required: false
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

  // enabled_protection - computed: true, optional: true, required: false
  private _enabledProtection?: boolean | cdktf.IResolvable; 
  public get enabledProtection() {
    return this.getBooleanAttribute('enabled_protection');
  }
  public set enabledProtection(value: boolean | cdktf.IResolvable) {
    this._enabledProtection = value;
  }
  public resetEnabledProtection() {
    this._enabledProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledProtectionInput() {
    return this._enabledProtection;
  }

  // warmup_time - computed: true, optional: true, required: false
  private _warmupTime?: number; 
  public get warmupTime() {
    return this.getNumberAttribute('warmup_time');
  }
  public set warmupTime(value: number) {
    this._warmupTime = value;
  }
  public resetWarmupTime() {
    this._warmupTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmupTimeInput() {
    return this._warmupTime;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group tencentcloud_tsf_deploy_container_group}
*/
export class TsfDeployContainerGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tsf_deploy_container_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TsfDeployContainerGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TsfDeployContainerGroup to import
  * @param importFromId The id of the existing TsfDeployContainerGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TsfDeployContainerGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tsf_deploy_container_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_deploy_container_group tencentcloud_tsf_deploy_container_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TsfDeployContainerGroupConfig
  */
  public constructor(scope: Construct, id: string, config: TsfDeployContainerGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tsf_deploy_container_group',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.42',
        providerVersionConstraint: '1.82.42'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agentCpuLimit = config.agentCpuLimit;
    this._agentCpuRequest = config.agentCpuRequest;
    this._agentMemLimit = config.agentMemLimit;
    this._agentMemRequest = config.agentMemRequest;
    this._cpuLimit = config.cpuLimit;
    this._cpuRequest = config.cpuRequest;
    this._deployAgent = config.deployAgent;
    this._doNotStart = config.doNotStart;
    this._groupId = config.groupId;
    this._id = config.id;
    this._incrementalDeployment = config.incrementalDeployment;
    this._instanceNum = config.instanceNum;
    this._istioCpuLimit = config.istioCpuLimit;
    this._istioCpuRequest = config.istioCpuRequest;
    this._istioMemLimit = config.istioMemLimit;
    this._istioMemRequest = config.istioMemRequest;
    this._jvmOpts = config.jvmOpts;
    this._maxSurge = config.maxSurge;
    this._maxUnavailable = config.maxUnavailable;
    this._memLimit = config.memLimit;
    this._memRequest = config.memRequest;
    this._repoName = config.repoName;
    this._repoType = config.repoType;
    this._reponame = config.reponame;
    this._server = config.server;
    this._tagName = config.tagName;
    this._updateIvl = config.updateIvl;
    this._updateType = config.updateType;
    this._volumeClean = config.volumeClean;
    this._agentProfileList.internalValue = config.agentProfileList;
    this._envs.internalValue = config.envs;
    this._healthCheckSettings.internalValue = config.healthCheckSettings;
    this._schedulingStrategy.internalValue = config.schedulingStrategy;
    this._serviceSetting.internalValue = config.serviceSetting;
    this._volumeInfoList.internalValue = config.volumeInfoList;
    this._volumeMountInfoList.internalValue = config.volumeMountInfoList;
    this._warmupSetting.internalValue = config.warmupSetting;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_cpu_limit - computed: true, optional: true, required: false
  private _agentCpuLimit?: string; 
  public get agentCpuLimit() {
    return this.getStringAttribute('agent_cpu_limit');
  }
  public set agentCpuLimit(value: string) {
    this._agentCpuLimit = value;
  }
  public resetAgentCpuLimit() {
    this._agentCpuLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentCpuLimitInput() {
    return this._agentCpuLimit;
  }

  // agent_cpu_request - computed: true, optional: true, required: false
  private _agentCpuRequest?: string; 
  public get agentCpuRequest() {
    return this.getStringAttribute('agent_cpu_request');
  }
  public set agentCpuRequest(value: string) {
    this._agentCpuRequest = value;
  }
  public resetAgentCpuRequest() {
    this._agentCpuRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentCpuRequestInput() {
    return this._agentCpuRequest;
  }

  // agent_mem_limit - computed: true, optional: true, required: false
  private _agentMemLimit?: string; 
  public get agentMemLimit() {
    return this.getStringAttribute('agent_mem_limit');
  }
  public set agentMemLimit(value: string) {
    this._agentMemLimit = value;
  }
  public resetAgentMemLimit() {
    this._agentMemLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentMemLimitInput() {
    return this._agentMemLimit;
  }

  // agent_mem_request - computed: true, optional: true, required: false
  private _agentMemRequest?: string; 
  public get agentMemRequest() {
    return this.getStringAttribute('agent_mem_request');
  }
  public set agentMemRequest(value: string) {
    this._agentMemRequest = value;
  }
  public resetAgentMemRequest() {
    this._agentMemRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentMemRequestInput() {
    return this._agentMemRequest;
  }

  // cpu_limit - computed: true, optional: true, required: false
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

  // cpu_request - computed: true, optional: true, required: false
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

  // deploy_agent - computed: true, optional: true, required: false
  private _deployAgent?: boolean | cdktf.IResolvable; 
  public get deployAgent() {
    return this.getBooleanAttribute('deploy_agent');
  }
  public set deployAgent(value: boolean | cdktf.IResolvable) {
    this._deployAgent = value;
  }
  public resetDeployAgent() {
    this._deployAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployAgentInput() {
    return this._deployAgent;
  }

  // do_not_start - computed: true, optional: true, required: false
  private _doNotStart?: boolean | cdktf.IResolvable; 
  public get doNotStart() {
    return this.getBooleanAttribute('do_not_start');
  }
  public set doNotStart(value: boolean | cdktf.IResolvable) {
    this._doNotStart = value;
  }
  public resetDoNotStart() {
    this._doNotStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doNotStartInput() {
    return this._doNotStart;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

  // incremental_deployment - computed: true, optional: true, required: false
  private _incrementalDeployment?: boolean | cdktf.IResolvable; 
  public get incrementalDeployment() {
    return this.getBooleanAttribute('incremental_deployment');
  }
  public set incrementalDeployment(value: boolean | cdktf.IResolvable) {
    this._incrementalDeployment = value;
  }
  public resetIncrementalDeployment() {
    this._incrementalDeployment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incrementalDeploymentInput() {
    return this._incrementalDeployment;
  }

  // instance_num - computed: false, optional: false, required: true
  private _instanceNum?: number; 
  public get instanceNum() {
    return this.getNumberAttribute('instance_num');
  }
  public set instanceNum(value: number) {
    this._instanceNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNumInput() {
    return this._instanceNum;
  }

  // istio_cpu_limit - computed: true, optional: true, required: false
  private _istioCpuLimit?: string; 
  public get istioCpuLimit() {
    return this.getStringAttribute('istio_cpu_limit');
  }
  public set istioCpuLimit(value: string) {
    this._istioCpuLimit = value;
  }
  public resetIstioCpuLimit() {
    this._istioCpuLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get istioCpuLimitInput() {
    return this._istioCpuLimit;
  }

  // istio_cpu_request - computed: true, optional: true, required: false
  private _istioCpuRequest?: string; 
  public get istioCpuRequest() {
    return this.getStringAttribute('istio_cpu_request');
  }
  public set istioCpuRequest(value: string) {
    this._istioCpuRequest = value;
  }
  public resetIstioCpuRequest() {
    this._istioCpuRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get istioCpuRequestInput() {
    return this._istioCpuRequest;
  }

  // istio_mem_limit - computed: true, optional: true, required: false
  private _istioMemLimit?: string; 
  public get istioMemLimit() {
    return this.getStringAttribute('istio_mem_limit');
  }
  public set istioMemLimit(value: string) {
    this._istioMemLimit = value;
  }
  public resetIstioMemLimit() {
    this._istioMemLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get istioMemLimitInput() {
    return this._istioMemLimit;
  }

  // istio_mem_request - computed: true, optional: true, required: false
  private _istioMemRequest?: string; 
  public get istioMemRequest() {
    return this.getStringAttribute('istio_mem_request');
  }
  public set istioMemRequest(value: string) {
    this._istioMemRequest = value;
  }
  public resetIstioMemRequest() {
    this._istioMemRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get istioMemRequestInput() {
    return this._istioMemRequest;
  }

  // jvm_opts - computed: true, optional: true, required: false
  private _jvmOpts?: string; 
  public get jvmOpts() {
    return this.getStringAttribute('jvm_opts');
  }
  public set jvmOpts(value: string) {
    this._jvmOpts = value;
  }
  public resetJvmOpts() {
    this._jvmOpts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jvmOptsInput() {
    return this._jvmOpts;
  }

  // max_surge - computed: true, optional: true, required: false
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

  // max_unavailable - computed: true, optional: true, required: false
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

  // mem_limit - computed: true, optional: true, required: false
  private _memLimit?: string; 
  public get memLimit() {
    return this.getStringAttribute('mem_limit');
  }
  public set memLimit(value: string) {
    this._memLimit = value;
  }
  public resetMemLimit() {
    this._memLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memLimitInput() {
    return this._memLimit;
  }

  // mem_request - computed: true, optional: true, required: false
  private _memRequest?: string; 
  public get memRequest() {
    return this.getStringAttribute('mem_request');
  }
  public set memRequest(value: string) {
    this._memRequest = value;
  }
  public resetMemRequest() {
    this._memRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memRequestInput() {
    return this._memRequest;
  }

  // repo_name - computed: true, optional: true, required: false
  private _repoName?: string; 
  public get repoName() {
    return this.getStringAttribute('repo_name');
  }
  public set repoName(value: string) {
    this._repoName = value;
  }
  public resetRepoName() {
    this._repoName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoNameInput() {
    return this._repoName;
  }

  // repo_type - computed: true, optional: true, required: false
  private _repoType?: string; 
  public get repoType() {
    return this.getStringAttribute('repo_type');
  }
  public set repoType(value: string) {
    this._repoType = value;
  }
  public resetRepoType() {
    this._repoType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoTypeInput() {
    return this._repoType;
  }

  // reponame - computed: true, optional: true, required: false
  private _reponame?: string; 
  public get reponame() {
    return this.getStringAttribute('reponame');
  }
  public set reponame(value: string) {
    this._reponame = value;
  }
  public resetReponame() {
    this._reponame = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reponameInput() {
    return this._reponame;
  }

  // server - computed: true, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // tag_name - computed: false, optional: false, required: true
  private _tagName?: string; 
  public get tagName() {
    return this.getStringAttribute('tag_name');
  }
  public set tagName(value: string) {
    this._tagName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagNameInput() {
    return this._tagName;
  }

  // update_ivl - computed: true, optional: true, required: false
  private _updateIvl?: number; 
  public get updateIvl() {
    return this.getNumberAttribute('update_ivl');
  }
  public set updateIvl(value: number) {
    this._updateIvl = value;
  }
  public resetUpdateIvl() {
    this._updateIvl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateIvlInput() {
    return this._updateIvl;
  }

  // update_type - computed: true, optional: true, required: false
  private _updateType?: number; 
  public get updateType() {
    return this.getNumberAttribute('update_type');
  }
  public set updateType(value: number) {
    this._updateType = value;
  }
  public resetUpdateType() {
    this._updateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateTypeInput() {
    return this._updateType;
  }

  // volume_clean - computed: true, optional: true, required: false
  private _volumeClean?: boolean | cdktf.IResolvable; 
  public get volumeClean() {
    return this.getBooleanAttribute('volume_clean');
  }
  public set volumeClean(value: boolean | cdktf.IResolvable) {
    this._volumeClean = value;
  }
  public resetVolumeClean() {
    this._volumeClean = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeCleanInput() {
    return this._volumeClean;
  }

  // agent_profile_list - computed: false, optional: true, required: false
  private _agentProfileList = new TsfDeployContainerGroupAgentProfileListStructList(this, "agent_profile_list", false);
  public get agentProfileList() {
    return this._agentProfileList;
  }
  public putAgentProfileList(value: TsfDeployContainerGroupAgentProfileListStruct[] | cdktf.IResolvable) {
    this._agentProfileList.internalValue = value;
  }
  public resetAgentProfileList() {
    this._agentProfileList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentProfileListInput() {
    return this._agentProfileList.internalValue;
  }

  // envs - computed: false, optional: true, required: false
  private _envs = new TsfDeployContainerGroupEnvsList(this, "envs", false);
  public get envs() {
    return this._envs;
  }
  public putEnvs(value: TsfDeployContainerGroupEnvs[] | cdktf.IResolvable) {
    this._envs.internalValue = value;
  }
  public resetEnvs() {
    this._envs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envsInput() {
    return this._envs.internalValue;
  }

  // health_check_settings - computed: false, optional: true, required: false
  private _healthCheckSettings = new TsfDeployContainerGroupHealthCheckSettingsOutputReference(this, "health_check_settings");
  public get healthCheckSettings() {
    return this._healthCheckSettings;
  }
  public putHealthCheckSettings(value: TsfDeployContainerGroupHealthCheckSettings) {
    this._healthCheckSettings.internalValue = value;
  }
  public resetHealthCheckSettings() {
    this._healthCheckSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckSettingsInput() {
    return this._healthCheckSettings.internalValue;
  }

  // scheduling_strategy - computed: false, optional: true, required: false
  private _schedulingStrategy = new TsfDeployContainerGroupSchedulingStrategyOutputReference(this, "scheduling_strategy");
  public get schedulingStrategy() {
    return this._schedulingStrategy;
  }
  public putSchedulingStrategy(value: TsfDeployContainerGroupSchedulingStrategy) {
    this._schedulingStrategy.internalValue = value;
  }
  public resetSchedulingStrategy() {
    this._schedulingStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingStrategyInput() {
    return this._schedulingStrategy.internalValue;
  }

  // service_setting - computed: false, optional: true, required: false
  private _serviceSetting = new TsfDeployContainerGroupServiceSettingOutputReference(this, "service_setting");
  public get serviceSetting() {
    return this._serviceSetting;
  }
  public putServiceSetting(value: TsfDeployContainerGroupServiceSetting) {
    this._serviceSetting.internalValue = value;
  }
  public resetServiceSetting() {
    this._serviceSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSettingInput() {
    return this._serviceSetting.internalValue;
  }

  // volume_info_list - computed: false, optional: true, required: false
  private _volumeInfoList = new TsfDeployContainerGroupVolumeInfoListStructList(this, "volume_info_list", false);
  public get volumeInfoList() {
    return this._volumeInfoList;
  }
  public putVolumeInfoList(value: TsfDeployContainerGroupVolumeInfoListStruct[] | cdktf.IResolvable) {
    this._volumeInfoList.internalValue = value;
  }
  public resetVolumeInfoList() {
    this._volumeInfoList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInfoListInput() {
    return this._volumeInfoList.internalValue;
  }

  // volume_mount_info_list - computed: false, optional: true, required: false
  private _volumeMountInfoList = new TsfDeployContainerGroupVolumeMountInfoListStructList(this, "volume_mount_info_list", false);
  public get volumeMountInfoList() {
    return this._volumeMountInfoList;
  }
  public putVolumeMountInfoList(value: TsfDeployContainerGroupVolumeMountInfoListStruct[] | cdktf.IResolvable) {
    this._volumeMountInfoList.internalValue = value;
  }
  public resetVolumeMountInfoList() {
    this._volumeMountInfoList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeMountInfoListInput() {
    return this._volumeMountInfoList.internalValue;
  }

  // warmup_setting - computed: false, optional: true, required: false
  private _warmupSetting = new TsfDeployContainerGroupWarmupSettingOutputReference(this, "warmup_setting");
  public get warmupSetting() {
    return this._warmupSetting;
  }
  public putWarmupSetting(value: TsfDeployContainerGroupWarmupSetting) {
    this._warmupSetting.internalValue = value;
  }
  public resetWarmupSetting() {
    this._warmupSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmupSettingInput() {
    return this._warmupSetting.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_cpu_limit: cdktf.stringToTerraform(this._agentCpuLimit),
      agent_cpu_request: cdktf.stringToTerraform(this._agentCpuRequest),
      agent_mem_limit: cdktf.stringToTerraform(this._agentMemLimit),
      agent_mem_request: cdktf.stringToTerraform(this._agentMemRequest),
      cpu_limit: cdktf.stringToTerraform(this._cpuLimit),
      cpu_request: cdktf.stringToTerraform(this._cpuRequest),
      deploy_agent: cdktf.booleanToTerraform(this._deployAgent),
      do_not_start: cdktf.booleanToTerraform(this._doNotStart),
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      incremental_deployment: cdktf.booleanToTerraform(this._incrementalDeployment),
      instance_num: cdktf.numberToTerraform(this._instanceNum),
      istio_cpu_limit: cdktf.stringToTerraform(this._istioCpuLimit),
      istio_cpu_request: cdktf.stringToTerraform(this._istioCpuRequest),
      istio_mem_limit: cdktf.stringToTerraform(this._istioMemLimit),
      istio_mem_request: cdktf.stringToTerraform(this._istioMemRequest),
      jvm_opts: cdktf.stringToTerraform(this._jvmOpts),
      max_surge: cdktf.stringToTerraform(this._maxSurge),
      max_unavailable: cdktf.stringToTerraform(this._maxUnavailable),
      mem_limit: cdktf.stringToTerraform(this._memLimit),
      mem_request: cdktf.stringToTerraform(this._memRequest),
      repo_name: cdktf.stringToTerraform(this._repoName),
      repo_type: cdktf.stringToTerraform(this._repoType),
      reponame: cdktf.stringToTerraform(this._reponame),
      server: cdktf.stringToTerraform(this._server),
      tag_name: cdktf.stringToTerraform(this._tagName),
      update_ivl: cdktf.numberToTerraform(this._updateIvl),
      update_type: cdktf.numberToTerraform(this._updateType),
      volume_clean: cdktf.booleanToTerraform(this._volumeClean),
      agent_profile_list: cdktf.listMapper(tsfDeployContainerGroupAgentProfileListStructToTerraform, true)(this._agentProfileList.internalValue),
      envs: cdktf.listMapper(tsfDeployContainerGroupEnvsToTerraform, true)(this._envs.internalValue),
      health_check_settings: tsfDeployContainerGroupHealthCheckSettingsToTerraform(this._healthCheckSettings.internalValue),
      scheduling_strategy: tsfDeployContainerGroupSchedulingStrategyToTerraform(this._schedulingStrategy.internalValue),
      service_setting: tsfDeployContainerGroupServiceSettingToTerraform(this._serviceSetting.internalValue),
      volume_info_list: cdktf.listMapper(tsfDeployContainerGroupVolumeInfoListStructToTerraform, true)(this._volumeInfoList.internalValue),
      volume_mount_info_list: cdktf.listMapper(tsfDeployContainerGroupVolumeMountInfoListStructToTerraform, true)(this._volumeMountInfoList.internalValue),
      warmup_setting: tsfDeployContainerGroupWarmupSettingToTerraform(this._warmupSetting.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_cpu_limit: {
        value: cdktf.stringToHclTerraform(this._agentCpuLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      agent_cpu_request: {
        value: cdktf.stringToHclTerraform(this._agentCpuRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      agent_mem_limit: {
        value: cdktf.stringToHclTerraform(this._agentMemLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      agent_mem_request: {
        value: cdktf.stringToHclTerraform(this._agentMemRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu_limit: {
        value: cdktf.stringToHclTerraform(this._cpuLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu_request: {
        value: cdktf.stringToHclTerraform(this._cpuRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deploy_agent: {
        value: cdktf.booleanToHclTerraform(this._deployAgent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      do_not_start: {
        value: cdktf.booleanToHclTerraform(this._doNotStart),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
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
      incremental_deployment: {
        value: cdktf.booleanToHclTerraform(this._incrementalDeployment),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      instance_num: {
        value: cdktf.numberToHclTerraform(this._instanceNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      istio_cpu_limit: {
        value: cdktf.stringToHclTerraform(this._istioCpuLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      istio_cpu_request: {
        value: cdktf.stringToHclTerraform(this._istioCpuRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      istio_mem_limit: {
        value: cdktf.stringToHclTerraform(this._istioMemLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      istio_mem_request: {
        value: cdktf.stringToHclTerraform(this._istioMemRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jvm_opts: {
        value: cdktf.stringToHclTerraform(this._jvmOpts),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_surge: {
        value: cdktf.stringToHclTerraform(this._maxSurge),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_unavailable: {
        value: cdktf.stringToHclTerraform(this._maxUnavailable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mem_limit: {
        value: cdktf.stringToHclTerraform(this._memLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mem_request: {
        value: cdktf.stringToHclTerraform(this._memRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repo_name: {
        value: cdktf.stringToHclTerraform(this._repoName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repo_type: {
        value: cdktf.stringToHclTerraform(this._repoType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reponame: {
        value: cdktf.stringToHclTerraform(this._reponame),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server: {
        value: cdktf.stringToHclTerraform(this._server),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_name: {
        value: cdktf.stringToHclTerraform(this._tagName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_ivl: {
        value: cdktf.numberToHclTerraform(this._updateIvl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      update_type: {
        value: cdktf.numberToHclTerraform(this._updateType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      volume_clean: {
        value: cdktf.booleanToHclTerraform(this._volumeClean),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      agent_profile_list: {
        value: cdktf.listMapperHcl(tsfDeployContainerGroupAgentProfileListStructToHclTerraform, true)(this._agentProfileList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TsfDeployContainerGroupAgentProfileListStructList",
      },
      envs: {
        value: cdktf.listMapperHcl(tsfDeployContainerGroupEnvsToHclTerraform, true)(this._envs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TsfDeployContainerGroupEnvsList",
      },
      health_check_settings: {
        value: tsfDeployContainerGroupHealthCheckSettingsToHclTerraform(this._healthCheckSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TsfDeployContainerGroupHealthCheckSettingsList",
      },
      scheduling_strategy: {
        value: tsfDeployContainerGroupSchedulingStrategyToHclTerraform(this._schedulingStrategy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TsfDeployContainerGroupSchedulingStrategyList",
      },
      service_setting: {
        value: tsfDeployContainerGroupServiceSettingToHclTerraform(this._serviceSetting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TsfDeployContainerGroupServiceSettingList",
      },
      volume_info_list: {
        value: cdktf.listMapperHcl(tsfDeployContainerGroupVolumeInfoListStructToHclTerraform, true)(this._volumeInfoList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TsfDeployContainerGroupVolumeInfoListStructList",
      },
      volume_mount_info_list: {
        value: cdktf.listMapperHcl(tsfDeployContainerGroupVolumeMountInfoListStructToHclTerraform, true)(this._volumeMountInfoList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TsfDeployContainerGroupVolumeMountInfoListStructList",
      },
      warmup_setting: {
        value: tsfDeployContainerGroupWarmupSettingToHclTerraform(this._warmupSetting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TsfDeployContainerGroupWarmupSettingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
