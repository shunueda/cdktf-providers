// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_deploy_vm_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TsfDeployVmGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ratio of instances participating in each batch during rolling release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_deploy_vm_group#deploy_batch TsfDeployVmGroup#deploy_batch}
  */
  readonly deployBatch?: number[];
  /**
  * Whether to enable beta batch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_deploy_vm_group#deploy_beta_enable TsfDeployVmGroup#deploy_beta_enable}
  */
  readonly deployBetaEnable?: boolean | cdktf.IResolvable;
  /**
  * group description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_deploy_vm_group#deploy_desc TsfDeployVmGroup#deploy_desc}
  */
  readonly deployDesc?: string;
  /**
  * The execution method of rolling release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_deploy_vm_group#deploy_exe_mode TsfDeployVmGroup#deploy_exe_mode}
  */
  readonly deployExeMode?: string;
  /**
  * The time interval for each batch during rolling release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_deploy_vm_group#deploy_wait_time TsfDeployVmGroup#deploy_wait_time}
  */
  readonly deployWaitTime?: number;
  /**
  * Whether to enable health check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_deploy_vm_group#enable_health_check TsfDeployVmGroup#enable_health_check}
  */
  readonly enableHealthCheck?: boolean | cdktf.IResolvable;
  /**
  * Whether to allow forced start.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_deploy_vm_group#force_start TsfDeployVmGroup#force_start}
  */
  readonly forceStart?: boolean | cdktf.IResolvable;
  /**
  * group id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_deploy_vm_group#group_id TsfDeployVmGroup#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_deploy_vm_group#id TsfDeployVmGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether to perform incremental deployment. The default value is false, which means full update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_deploy_vm_group#incremental_deployment TsfDeployVmGroup#incremental_deployment}
  */
  readonly incrementalDeployment?: boolean | cdktf.IResolvable;
  /**
  * JDK name: konaJDK or openJDK.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_deploy_vm_group#jdk_name TsfDeployVmGroup#jdk_name}
  */
  readonly jdkName?: string;
  /**
  * JDK version: 8 or 11(openJDK only support 8).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_deploy_vm_group#jdk_version TsfDeployVmGroup#jdk_version}
  */
  readonly jdkVersion?: string;
  /**
  * program package ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_deploy_vm_group#pkg_id TsfDeployVmGroup#pkg_id}
  */
  readonly pkgId: string;
  /**
  * The base64-encoded startup script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_deploy_vm_group#start_script TsfDeployVmGroup#start_script}
  */
  readonly startScript?: string;
  /**
  * start args of group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_deploy_vm_group#startup_parameters TsfDeployVmGroup#startup_parameters}
  */
  readonly startupParameters?: string;
  /**
  * The base64-encoded stop script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_deploy_vm_group#stop_script TsfDeployVmGroup#stop_script}
  */
  readonly stopScript?: string;
  /**
  * Update method: 0 for fast update, 1 for rolling update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_deploy_vm_group#update_type TsfDeployVmGroup#update_type}
  */
  readonly updateType?: number;
  /**
  * agent_profile_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_deploy_vm_group#agent_profile_list TsfDeployVmGroup#agent_profile_list}
  */
  readonly agentProfileList?: TsfDeployVmGroupAgentProfileListStruct[] | cdktf.IResolvable;
  /**
  * health_check_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_deploy_vm_group#health_check_settings TsfDeployVmGroup#health_check_settings}
  */
  readonly healthCheckSettings?: TsfDeployVmGroupHealthCheckSettings;
  /**
  * warmup_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_deploy_vm_group#warmup_setting TsfDeployVmGroup#warmup_setting}
  */
  readonly warmupSetting?: TsfDeployVmGroupWarmupSetting;
}
export interface TsfDeployVmGroupAgentProfileListStruct {
  /**
  * Agent type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_deploy_vm_group#agent_type TsfDeployVmGroup#agent_type}
  */
  readonly agentType?: string;
  /**
  * Agent version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_deploy_vm_group#agent_version TsfDeployVmGroup#agent_version}
  */
  readonly agentVersion?: string;
}

export function tsfDeployVmGroupAgentProfileListStructToTerraform(struct?: TsfDeployVmGroupAgentProfileListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_type: cdktf.stringToTerraform(struct!.agentType),
    agent_version: cdktf.stringToTerraform(struct!.agentVersion),
  }
}


export function tsfDeployVmGroupAgentProfileListStructToHclTerraform(struct?: TsfDeployVmGroupAgentProfileListStruct | cdktf.IResolvable): any {
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

export class TsfDeployVmGroupAgentProfileListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TsfDeployVmGroupAgentProfileListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TsfDeployVmGroupAgentProfileListStruct | cdktf.IResolvable | undefined) {
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

export class TsfDeployVmGroupAgentProfileListStructList extends cdktf.ComplexList {
  public internalValue? : TsfDeployVmGroupAgentProfileListStruct[] | cdktf.IResolvable

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
  public get(index: number): TsfDeployVmGroupAgentProfileListStructOutputReference {
    return new TsfDeployVmGroupAgentProfileListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TsfDeployVmGroupHealthCheckSettingsLivenessProbe {
  /**
  * Health check method. HTTP: check through HTTP interface; CMD: check through executing command; TCP: check through establishing TCP connection. Note: This field may return null, indicating that no valid value was found.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_deploy_vm_group#action_type TsfDeployVmGroup#action_type}
  */
  readonly actionType: string;
  /**
  * The command to be executed for command health checks. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_deploy_vm_group#command TsfDeployVmGroup#command}
  */
  readonly command?: string[];
  /**
  * The number of consecutive successful health checks required for the backend container to transition from success to failure. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_deploy_vm_group#failure_threshold TsfDeployVmGroup#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * The time delay for the container to start the health check. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_deploy_vm_group#initial_delay_seconds TsfDeployVmGroup#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * The request path for HTTP health checks. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_deploy_vm_group#path TsfDeployVmGroup#path}
  */
  readonly path?: string;
  /**
  * The time interval for performing health checks. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_deploy_vm_group#period_seconds TsfDeployVmGroup#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * The port used for health checks, ranging from 1 to 65535. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_deploy_vm_group#port TsfDeployVmGroup#port}
  */
  readonly port?: number;
  /**
  * The protocol used for HTTP health checks. HTTP and HTTPS are supported. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_deploy_vm_group#scheme TsfDeployVmGroup#scheme}
  */
  readonly scheme?: string;
  /**
  * The number of consecutive successful health checks required for the backend container to transition from failure to success. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_deploy_vm_group#success_threshold TsfDeployVmGroup#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * The maximum timeout period for each health check response. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_deploy_vm_group#timeout_seconds TsfDeployVmGroup#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * The type of readiness probe. TSF_DEFAULT represents the default readiness probe of TSF, while K8S_NATIVE represents the native readiness probe of Kubernetes. If this field is not specified, the native readiness probe of Kubernetes is used by default. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_deploy_vm_group#type TsfDeployVmGroup#type}
  */
  readonly type?: string;
}

export function tsfDeployVmGroupHealthCheckSettingsLivenessProbeToTerraform(struct?: TsfDeployVmGroupHealthCheckSettingsLivenessProbeOutputReference | TsfDeployVmGroupHealthCheckSettingsLivenessProbe): any {
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


export function tsfDeployVmGroupHealthCheckSettingsLivenessProbeToHclTerraform(struct?: TsfDeployVmGroupHealthCheckSettingsLivenessProbeOutputReference | TsfDeployVmGroupHealthCheckSettingsLivenessProbe): any {
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

export class TsfDeployVmGroupHealthCheckSettingsLivenessProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TsfDeployVmGroupHealthCheckSettingsLivenessProbe | undefined {
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

  public set internalValue(value: TsfDeployVmGroupHealthCheckSettingsLivenessProbe | undefined) {
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

  // command - computed: true, optional: true, required: false
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

  // failure_threshold - computed: true, optional: true, required: false
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

  // initial_delay_seconds - computed: true, optional: true, required: false
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

  // path - computed: true, optional: true, required: false
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

  // period_seconds - computed: true, optional: true, required: false
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

  // port - computed: true, optional: true, required: false
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

  // scheme - computed: true, optional: true, required: false
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

  // success_threshold - computed: true, optional: true, required: false
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

  // timeout_seconds - computed: true, optional: true, required: false
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

  // type - computed: true, optional: true, required: false
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
export interface TsfDeployVmGroupHealthCheckSettingsReadinessProbe {
  /**
  * The health check method. HTTP indicates checking through an HTTP interface, CMD indicates checking through executing a command, and TCP indicates checking through establishing a TCP connection. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_deploy_vm_group#action_type TsfDeployVmGroup#action_type}
  */
  readonly actionType: string;
  /**
  * The command to be executed for command check. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_deploy_vm_group#command TsfDeployVmGroup#command}
  */
  readonly command?: string[];
  /**
  * The number of consecutive successful health checks required for the backend container to transition from success to failure. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_deploy_vm_group#failure_threshold TsfDeployVmGroup#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * The time to delay the start of the container health check. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_deploy_vm_group#initial_delay_seconds TsfDeployVmGroup#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * The request path for HTTP health checks. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_deploy_vm_group#path TsfDeployVmGroup#path}
  */
  readonly path?: string;
  /**
  * The time interval for performing health checks. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_deploy_vm_group#period_seconds TsfDeployVmGroup#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * The port used for health checks, ranging from 1 to 65535. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_deploy_vm_group#port TsfDeployVmGroup#port}
  */
  readonly port?: number;
  /**
  * The protocol used for HTTP health checks. HTTP and HTTPS are supported. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_deploy_vm_group#scheme TsfDeployVmGroup#scheme}
  */
  readonly scheme?: string;
  /**
  * The number of consecutive successful health checks required for the backend container to transition from failure to success. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_deploy_vm_group#success_threshold TsfDeployVmGroup#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * The maximum timeout period for each health check response. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_deploy_vm_group#timeout_seconds TsfDeployVmGroup#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * The type of readiness probe. TSF_DEFAULT represents the default readiness probe of TSF, while K8S_NATIVE represents the native readiness probe of Kubernetes. If this field is not specified, the native readiness probe of Kubernetes is used by default. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_deploy_vm_group#type TsfDeployVmGroup#type}
  */
  readonly type?: string;
}

export function tsfDeployVmGroupHealthCheckSettingsReadinessProbeToTerraform(struct?: TsfDeployVmGroupHealthCheckSettingsReadinessProbeOutputReference | TsfDeployVmGroupHealthCheckSettingsReadinessProbe): any {
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


export function tsfDeployVmGroupHealthCheckSettingsReadinessProbeToHclTerraform(struct?: TsfDeployVmGroupHealthCheckSettingsReadinessProbeOutputReference | TsfDeployVmGroupHealthCheckSettingsReadinessProbe): any {
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

export class TsfDeployVmGroupHealthCheckSettingsReadinessProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TsfDeployVmGroupHealthCheckSettingsReadinessProbe | undefined {
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

  public set internalValue(value: TsfDeployVmGroupHealthCheckSettingsReadinessProbe | undefined) {
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

  // command - computed: true, optional: true, required: false
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

  // failure_threshold - computed: true, optional: true, required: false
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

  // initial_delay_seconds - computed: true, optional: true, required: false
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

  // path - computed: true, optional: true, required: false
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

  // period_seconds - computed: true, optional: true, required: false
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

  // port - computed: true, optional: true, required: false
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

  // scheme - computed: true, optional: true, required: false
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

  // success_threshold - computed: true, optional: true, required: false
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

  // timeout_seconds - computed: true, optional: true, required: false
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

  // type - computed: true, optional: true, required: false
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
export interface TsfDeployVmGroupHealthCheckSettings {
  /**
  * liveness_probe block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_deploy_vm_group#liveness_probe TsfDeployVmGroup#liveness_probe}
  */
  readonly livenessProbe?: TsfDeployVmGroupHealthCheckSettingsLivenessProbe;
  /**
  * readiness_probe block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_deploy_vm_group#readiness_probe TsfDeployVmGroup#readiness_probe}
  */
  readonly readinessProbe?: TsfDeployVmGroupHealthCheckSettingsReadinessProbe;
}

export function tsfDeployVmGroupHealthCheckSettingsToTerraform(struct?: TsfDeployVmGroupHealthCheckSettingsOutputReference | TsfDeployVmGroupHealthCheckSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    liveness_probe: tsfDeployVmGroupHealthCheckSettingsLivenessProbeToTerraform(struct!.livenessProbe),
    readiness_probe: tsfDeployVmGroupHealthCheckSettingsReadinessProbeToTerraform(struct!.readinessProbe),
  }
}


export function tsfDeployVmGroupHealthCheckSettingsToHclTerraform(struct?: TsfDeployVmGroupHealthCheckSettingsOutputReference | TsfDeployVmGroupHealthCheckSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    liveness_probe: {
      value: tsfDeployVmGroupHealthCheckSettingsLivenessProbeToHclTerraform(struct!.livenessProbe),
      isBlock: true,
      type: "list",
      storageClassType: "TsfDeployVmGroupHealthCheckSettingsLivenessProbeList",
    },
    readiness_probe: {
      value: tsfDeployVmGroupHealthCheckSettingsReadinessProbeToHclTerraform(struct!.readinessProbe),
      isBlock: true,
      type: "list",
      storageClassType: "TsfDeployVmGroupHealthCheckSettingsReadinessProbeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TsfDeployVmGroupHealthCheckSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TsfDeployVmGroupHealthCheckSettings | undefined {
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

  public set internalValue(value: TsfDeployVmGroupHealthCheckSettings | undefined) {
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
  private _livenessProbe = new TsfDeployVmGroupHealthCheckSettingsLivenessProbeOutputReference(this, "liveness_probe");
  public get livenessProbe() {
    return this._livenessProbe;
  }
  public putLivenessProbe(value: TsfDeployVmGroupHealthCheckSettingsLivenessProbe) {
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
  private _readinessProbe = new TsfDeployVmGroupHealthCheckSettingsReadinessProbeOutputReference(this, "readiness_probe");
  public get readinessProbe() {
    return this._readinessProbe;
  }
  public putReadinessProbe(value: TsfDeployVmGroupHealthCheckSettingsReadinessProbe) {
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
export interface TsfDeployVmGroupWarmupSetting {
  /**
  * Preheating curvature, with a value between 1 and 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_deploy_vm_group#curvature TsfDeployVmGroup#curvature}
  */
  readonly curvature?: number;
  /**
  * Whether to enable preheating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_deploy_vm_group#enabled TsfDeployVmGroup#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable preheating protection. If protection is enabled and more than 50% of nodes are in preheating state, preheating will be aborted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_deploy_vm_group#enabled_protection TsfDeployVmGroup#enabled_protection}
  */
  readonly enabledProtection?: boolean | cdktf.IResolvable;
  /**
  * warmup time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_deploy_vm_group#warmup_time TsfDeployVmGroup#warmup_time}
  */
  readonly warmupTime?: number;
}

export function tsfDeployVmGroupWarmupSettingToTerraform(struct?: TsfDeployVmGroupWarmupSettingOutputReference | TsfDeployVmGroupWarmupSetting): any {
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


export function tsfDeployVmGroupWarmupSettingToHclTerraform(struct?: TsfDeployVmGroupWarmupSettingOutputReference | TsfDeployVmGroupWarmupSetting): any {
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

export class TsfDeployVmGroupWarmupSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TsfDeployVmGroupWarmupSetting | undefined {
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

  public set internalValue(value: TsfDeployVmGroupWarmupSetting | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_deploy_vm_group tencentcloud_tsf_deploy_vm_group}
*/
export class TsfDeployVmGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tsf_deploy_vm_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TsfDeployVmGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TsfDeployVmGroup to import
  * @param importFromId The id of the existing TsfDeployVmGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_deploy_vm_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TsfDeployVmGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tsf_deploy_vm_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_deploy_vm_group tencentcloud_tsf_deploy_vm_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TsfDeployVmGroupConfig
  */
  public constructor(scope: Construct, id: string, config: TsfDeployVmGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tsf_deploy_vm_group',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.37',
        providerVersionConstraint: '1.82.37'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deployBatch = config.deployBatch;
    this._deployBetaEnable = config.deployBetaEnable;
    this._deployDesc = config.deployDesc;
    this._deployExeMode = config.deployExeMode;
    this._deployWaitTime = config.deployWaitTime;
    this._enableHealthCheck = config.enableHealthCheck;
    this._forceStart = config.forceStart;
    this._groupId = config.groupId;
    this._id = config.id;
    this._incrementalDeployment = config.incrementalDeployment;
    this._jdkName = config.jdkName;
    this._jdkVersion = config.jdkVersion;
    this._pkgId = config.pkgId;
    this._startScript = config.startScript;
    this._startupParameters = config.startupParameters;
    this._stopScript = config.stopScript;
    this._updateType = config.updateType;
    this._agentProfileList.internalValue = config.agentProfileList;
    this._healthCheckSettings.internalValue = config.healthCheckSettings;
    this._warmupSetting.internalValue = config.warmupSetting;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deploy_batch - computed: true, optional: true, required: false
  private _deployBatch?: number[]; 
  public get deployBatch() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('deploy_batch')));
  }
  public set deployBatch(value: number[]) {
    this._deployBatch = value;
  }
  public resetDeployBatch() {
    this._deployBatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployBatchInput() {
    return this._deployBatch;
  }

  // deploy_beta_enable - computed: true, optional: true, required: false
  private _deployBetaEnable?: boolean | cdktf.IResolvable; 
  public get deployBetaEnable() {
    return this.getBooleanAttribute('deploy_beta_enable');
  }
  public set deployBetaEnable(value: boolean | cdktf.IResolvable) {
    this._deployBetaEnable = value;
  }
  public resetDeployBetaEnable() {
    this._deployBetaEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployBetaEnableInput() {
    return this._deployBetaEnable;
  }

  // deploy_desc - computed: true, optional: true, required: false
  private _deployDesc?: string; 
  public get deployDesc() {
    return this.getStringAttribute('deploy_desc');
  }
  public set deployDesc(value: string) {
    this._deployDesc = value;
  }
  public resetDeployDesc() {
    this._deployDesc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployDescInput() {
    return this._deployDesc;
  }

  // deploy_exe_mode - computed: true, optional: true, required: false
  private _deployExeMode?: string; 
  public get deployExeMode() {
    return this.getStringAttribute('deploy_exe_mode');
  }
  public set deployExeMode(value: string) {
    this._deployExeMode = value;
  }
  public resetDeployExeMode() {
    this._deployExeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployExeModeInput() {
    return this._deployExeMode;
  }

  // deploy_wait_time - computed: true, optional: true, required: false
  private _deployWaitTime?: number; 
  public get deployWaitTime() {
    return this.getNumberAttribute('deploy_wait_time');
  }
  public set deployWaitTime(value: number) {
    this._deployWaitTime = value;
  }
  public resetDeployWaitTime() {
    this._deployWaitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployWaitTimeInput() {
    return this._deployWaitTime;
  }

  // enable_health_check - computed: true, optional: true, required: false
  private _enableHealthCheck?: boolean | cdktf.IResolvable; 
  public get enableHealthCheck() {
    return this.getBooleanAttribute('enable_health_check');
  }
  public set enableHealthCheck(value: boolean | cdktf.IResolvable) {
    this._enableHealthCheck = value;
  }
  public resetEnableHealthCheck() {
    this._enableHealthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHealthCheckInput() {
    return this._enableHealthCheck;
  }

  // force_start - computed: true, optional: true, required: false
  private _forceStart?: boolean | cdktf.IResolvable; 
  public get forceStart() {
    return this.getBooleanAttribute('force_start');
  }
  public set forceStart(value: boolean | cdktf.IResolvable) {
    this._forceStart = value;
  }
  public resetForceStart() {
    this._forceStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceStartInput() {
    return this._forceStart;
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

  // jdk_name - computed: true, optional: true, required: false
  private _jdkName?: string; 
  public get jdkName() {
    return this.getStringAttribute('jdk_name');
  }
  public set jdkName(value: string) {
    this._jdkName = value;
  }
  public resetJdkName() {
    this._jdkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jdkNameInput() {
    return this._jdkName;
  }

  // jdk_version - computed: true, optional: true, required: false
  private _jdkVersion?: string; 
  public get jdkVersion() {
    return this.getStringAttribute('jdk_version');
  }
  public set jdkVersion(value: string) {
    this._jdkVersion = value;
  }
  public resetJdkVersion() {
    this._jdkVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jdkVersionInput() {
    return this._jdkVersion;
  }

  // pkg_id - computed: false, optional: false, required: true
  private _pkgId?: string; 
  public get pkgId() {
    return this.getStringAttribute('pkg_id');
  }
  public set pkgId(value: string) {
    this._pkgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pkgIdInput() {
    return this._pkgId;
  }

  // start_script - computed: true, optional: true, required: false
  private _startScript?: string; 
  public get startScript() {
    return this.getStringAttribute('start_script');
  }
  public set startScript(value: string) {
    this._startScript = value;
  }
  public resetStartScript() {
    this._startScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startScriptInput() {
    return this._startScript;
  }

  // startup_parameters - computed: true, optional: true, required: false
  private _startupParameters?: string; 
  public get startupParameters() {
    return this.getStringAttribute('startup_parameters');
  }
  public set startupParameters(value: string) {
    this._startupParameters = value;
  }
  public resetStartupParameters() {
    this._startupParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupParametersInput() {
    return this._startupParameters;
  }

  // stop_script - computed: true, optional: true, required: false
  private _stopScript?: string; 
  public get stopScript() {
    return this.getStringAttribute('stop_script');
  }
  public set stopScript(value: string) {
    this._stopScript = value;
  }
  public resetStopScript() {
    this._stopScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopScriptInput() {
    return this._stopScript;
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

  // agent_profile_list - computed: false, optional: true, required: false
  private _agentProfileList = new TsfDeployVmGroupAgentProfileListStructList(this, "agent_profile_list", false);
  public get agentProfileList() {
    return this._agentProfileList;
  }
  public putAgentProfileList(value: TsfDeployVmGroupAgentProfileListStruct[] | cdktf.IResolvable) {
    this._agentProfileList.internalValue = value;
  }
  public resetAgentProfileList() {
    this._agentProfileList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentProfileListInput() {
    return this._agentProfileList.internalValue;
  }

  // health_check_settings - computed: false, optional: true, required: false
  private _healthCheckSettings = new TsfDeployVmGroupHealthCheckSettingsOutputReference(this, "health_check_settings");
  public get healthCheckSettings() {
    return this._healthCheckSettings;
  }
  public putHealthCheckSettings(value: TsfDeployVmGroupHealthCheckSettings) {
    this._healthCheckSettings.internalValue = value;
  }
  public resetHealthCheckSettings() {
    this._healthCheckSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckSettingsInput() {
    return this._healthCheckSettings.internalValue;
  }

  // warmup_setting - computed: false, optional: true, required: false
  private _warmupSetting = new TsfDeployVmGroupWarmupSettingOutputReference(this, "warmup_setting");
  public get warmupSetting() {
    return this._warmupSetting;
  }
  public putWarmupSetting(value: TsfDeployVmGroupWarmupSetting) {
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
      deploy_batch: cdktf.listMapper(cdktf.numberToTerraform, false)(this._deployBatch),
      deploy_beta_enable: cdktf.booleanToTerraform(this._deployBetaEnable),
      deploy_desc: cdktf.stringToTerraform(this._deployDesc),
      deploy_exe_mode: cdktf.stringToTerraform(this._deployExeMode),
      deploy_wait_time: cdktf.numberToTerraform(this._deployWaitTime),
      enable_health_check: cdktf.booleanToTerraform(this._enableHealthCheck),
      force_start: cdktf.booleanToTerraform(this._forceStart),
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      incremental_deployment: cdktf.booleanToTerraform(this._incrementalDeployment),
      jdk_name: cdktf.stringToTerraform(this._jdkName),
      jdk_version: cdktf.stringToTerraform(this._jdkVersion),
      pkg_id: cdktf.stringToTerraform(this._pkgId),
      start_script: cdktf.stringToTerraform(this._startScript),
      startup_parameters: cdktf.stringToTerraform(this._startupParameters),
      stop_script: cdktf.stringToTerraform(this._stopScript),
      update_type: cdktf.numberToTerraform(this._updateType),
      agent_profile_list: cdktf.listMapper(tsfDeployVmGroupAgentProfileListStructToTerraform, true)(this._agentProfileList.internalValue),
      health_check_settings: tsfDeployVmGroupHealthCheckSettingsToTerraform(this._healthCheckSettings.internalValue),
      warmup_setting: tsfDeployVmGroupWarmupSettingToTerraform(this._warmupSetting.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deploy_batch: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._deployBatch),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      deploy_beta_enable: {
        value: cdktf.booleanToHclTerraform(this._deployBetaEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deploy_desc: {
        value: cdktf.stringToHclTerraform(this._deployDesc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deploy_exe_mode: {
        value: cdktf.stringToHclTerraform(this._deployExeMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deploy_wait_time: {
        value: cdktf.numberToHclTerraform(this._deployWaitTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_health_check: {
        value: cdktf.booleanToHclTerraform(this._enableHealthCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_start: {
        value: cdktf.booleanToHclTerraform(this._forceStart),
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
      jdk_name: {
        value: cdktf.stringToHclTerraform(this._jdkName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jdk_version: {
        value: cdktf.stringToHclTerraform(this._jdkVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pkg_id: {
        value: cdktf.stringToHclTerraform(this._pkgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_script: {
        value: cdktf.stringToHclTerraform(this._startScript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      startup_parameters: {
        value: cdktf.stringToHclTerraform(this._startupParameters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stop_script: {
        value: cdktf.stringToHclTerraform(this._stopScript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_type: {
        value: cdktf.numberToHclTerraform(this._updateType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      agent_profile_list: {
        value: cdktf.listMapperHcl(tsfDeployVmGroupAgentProfileListStructToHclTerraform, true)(this._agentProfileList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TsfDeployVmGroupAgentProfileListStructList",
      },
      health_check_settings: {
        value: tsfDeployVmGroupHealthCheckSettingsToHclTerraform(this._healthCheckSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TsfDeployVmGroupHealthCheckSettingsList",
      },
      warmup_setting: {
        value: tsfDeployVmGroupWarmupSettingToHclTerraform(this._warmupSetting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TsfDeployVmGroupWarmupSettingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
