// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EksContainerInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether to create EIP instead of specify existing EIPs. Conflict with `existed_eip_ids`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#auto_create_eip EksContainerInstance#auto_create_eip}
  */
  readonly autoCreateEip?: boolean | cdktf.IResolvable;
  /**
  * CAM role name authorized to access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#cam_role_name EksContainerInstance#cam_role_name}
  */
  readonly camRoleName?: string;
  /**
  * The number of CPU cores. Check https://intl.cloud.tencent.com/document/product/457/34057 for specification references.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#cpu EksContainerInstance#cpu}
  */
  readonly cpu: number;
  /**
  * Type of cpu, which can set to `intel` or `amd`. It also support backup list like `amd,intel` which indicates using `intel` when `amd` sold out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#cpu_type EksContainerInstance#cpu_type}
  */
  readonly cpuType?: string;
  /**
  * Map of DNS config options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#dns_config_options EksContainerInstance#dns_config_options}
  */
  readonly dnsConfigOptions?: { [key: string]: string };
  /**
  * IP Addresses of DNS Servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#dns_names_servers EksContainerInstance#dns_names_servers}
  */
  readonly dnsNamesServers?: string[];
  /**
  * List of DNS Search Domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#dns_searches EksContainerInstance#dns_searches}
  */
  readonly dnsSearches?: string[];
  /**
  * Indicates weather the EIP release or not after instance deleted. Conflict with `existed_eip_ids`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#eip_delete_policy EksContainerInstance#eip_delete_policy}
  */
  readonly eipDeletePolicy?: boolean | cdktf.IResolvable;
  /**
  * Maximum outgoing bandwidth to the public network, measured in Mbps (Mega bits per second). Conflict with `existed_eip_ids`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#eip_max_bandwidth_out EksContainerInstance#eip_max_bandwidth_out}
  */
  readonly eipMaxBandwidthOut?: number;
  /**
  * EIP service provider. Default is `BGP`, values `CMCC`,`CTCC`,`CUCC` are available for whitelist customer. Conflict with `existed_eip_ids`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#eip_service_provider EksContainerInstance#eip_service_provider}
  */
  readonly eipServiceProvider?: string;
  /**
  * Existed EIP ID List which used to bind container instance. Conflict with `auto_create_eip` and auto create EIP options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#existed_eip_ids EksContainerInstance#existed_eip_ids}
  */
  readonly existedEipIds?: string[];
  /**
  * Count of GPU. Check https://intl.cloud.tencent.com/document/product/457/34057 for specification references.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#gpu_count EksContainerInstance#gpu_count}
  */
  readonly gpuCount?: number;
  /**
  * Type of GPU. Check https://intl.cloud.tencent.com/document/product/457/34057 for specification references.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#gpu_type EksContainerInstance#gpu_type}
  */
  readonly gpuType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#id EksContainerInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Memory size. Check https://intl.cloud.tencent.com/document/product/457/34057 for specification references.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#memory EksContainerInstance#memory}
  */
  readonly memory: number;
  /**
  * Name of EKS container instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#name EksContainerInstance#name}
  */
  readonly name: string;
  /**
  * Container instance restart policy. Available values: `Always`, `Never`, `OnFailure`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#restart_policy EksContainerInstance#restart_policy}
  */
  readonly restartPolicy?: string;
  /**
  * List of security group id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#security_groups EksContainerInstance#security_groups}
  */
  readonly securityGroups: string[];
  /**
  * Subnet ID of container instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#subnet_id EksContainerInstance#subnet_id}
  */
  readonly subnetId: string;
  /**
  * VPC ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#vpc_id EksContainerInstance#vpc_id}
  */
  readonly vpcId: string;
  /**
  * cbs_volume block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#cbs_volume EksContainerInstance#cbs_volume}
  */
  readonly cbsVolume?: EksContainerInstanceCbsVolume[] | cdktf.IResolvable;
  /**
  * container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#container EksContainerInstance#container}
  */
  readonly container: EksContainerInstanceContainer[] | cdktf.IResolvable;
  /**
  * image_registry_credential block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#image_registry_credential EksContainerInstance#image_registry_credential}
  */
  readonly imageRegistryCredential?: EksContainerInstanceImageRegistryCredential[] | cdktf.IResolvable;
  /**
  * init_container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#init_container EksContainerInstance#init_container}
  */
  readonly initContainer?: EksContainerInstanceInitContainer[] | cdktf.IResolvable;
  /**
  * nfs_volume block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#nfs_volume EksContainerInstance#nfs_volume}
  */
  readonly nfsVolume?: EksContainerInstanceNfsVolume[] | cdktf.IResolvable;
}
export interface EksContainerInstanceCbsVolume {
  /**
  * ID of CBS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#disk_id EksContainerInstance#disk_id}
  */
  readonly diskId: string;
  /**
  * Name of CBS volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#name EksContainerInstance#name}
  */
  readonly name: string;
}

export function eksContainerInstanceCbsVolumeToTerraform(struct?: EksContainerInstanceCbsVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_id: cdktf.stringToTerraform(struct!.diskId),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function eksContainerInstanceCbsVolumeToHclTerraform(struct?: EksContainerInstanceCbsVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_id: {
      value: cdktf.stringToHclTerraform(struct!.diskId),
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

export class EksContainerInstanceCbsVolumeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksContainerInstanceCbsVolume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskId = this._diskId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksContainerInstanceCbsVolume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskId = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskId = value.diskId;
      this._name = value.name;
    }
  }

  // disk_id - computed: false, optional: false, required: true
  private _diskId?: string; 
  public get diskId() {
    return this.getStringAttribute('disk_id');
  }
  public set diskId(value: string) {
    this._diskId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIdInput() {
    return this._diskId;
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

export class EksContainerInstanceCbsVolumeList extends cdktf.ComplexList {
  public internalValue? : EksContainerInstanceCbsVolume[] | cdktf.IResolvable

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
  public get(index: number): EksContainerInstanceCbsVolumeOutputReference {
    return new EksContainerInstanceCbsVolumeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksContainerInstanceContainerLivenessProbe {
  /**
  * List of execution commands.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#exec_commands EksContainerInstance#exec_commands}
  */
  readonly execCommands?: string[];
  /**
  * Minimum consecutive failures for the probe to be considered failed after having succeeded.Default: `3`. Minimum value is `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#failure_threshold EksContainerInstance#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * HttpGet detection path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#http_get_path EksContainerInstance#http_get_path}
  */
  readonly httpGetPath?: string;
  /**
  * HttpGet detection port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#http_get_port EksContainerInstance#http_get_port}
  */
  readonly httpGetPort?: number;
  /**
  * HttpGet detection scheme. Available values: `HTTP`, `HTTPS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#http_get_scheme EksContainerInstance#http_get_scheme}
  */
  readonly httpGetScheme?: string;
  /**
  * Number of seconds after the container has started before probes are initiated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#init_delay_seconds EksContainerInstance#init_delay_seconds}
  */
  readonly initDelaySeconds?: number;
  /**
  * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#period_seconds EksContainerInstance#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Minimum consecutive successes for the probe to be considered successful after having failed. Default: `1`. Must be 1 for liveness. Minimum value is `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#success_threshold EksContainerInstance#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * TCP Socket detection port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#tcp_socket_port EksContainerInstance#tcp_socket_port}
  */
  readonly tcpSocketPort?: number;
  /**
  * Number of seconds after which the probe times out.
  * Defaults to 1 second. Minimum value is `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#timeout_seconds EksContainerInstance#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function eksContainerInstanceContainerLivenessProbeToTerraform(struct?: EksContainerInstanceContainerLivenessProbeOutputReference | EksContainerInstanceContainerLivenessProbe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec_commands: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.execCommands),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    http_get_path: cdktf.stringToTerraform(struct!.httpGetPath),
    http_get_port: cdktf.numberToTerraform(struct!.httpGetPort),
    http_get_scheme: cdktf.stringToTerraform(struct!.httpGetScheme),
    init_delay_seconds: cdktf.numberToTerraform(struct!.initDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    tcp_socket_port: cdktf.numberToTerraform(struct!.tcpSocketPort),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function eksContainerInstanceContainerLivenessProbeToHclTerraform(struct?: EksContainerInstanceContainerLivenessProbeOutputReference | EksContainerInstanceContainerLivenessProbe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec_commands: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.execCommands),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_get_path: {
      value: cdktf.stringToHclTerraform(struct!.httpGetPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_get_port: {
      value: cdktf.numberToHclTerraform(struct!.httpGetPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_get_scheme: {
      value: cdktf.stringToHclTerraform(struct!.httpGetScheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    init_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.initDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.periodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    success_threshold: {
      value: cdktf.numberToHclTerraform(struct!.successThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_socket_port: {
      value: cdktf.numberToHclTerraform(struct!.tcpSocketPort),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksContainerInstanceContainerLivenessProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EksContainerInstanceContainerLivenessProbe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._execCommands !== undefined) {
      hasAnyValues = true;
      internalValueResult.execCommands = this._execCommands;
    }
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._httpGetPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGetPath = this._httpGetPath;
    }
    if (this._httpGetPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGetPort = this._httpGetPort;
    }
    if (this._httpGetScheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGetScheme = this._httpGetScheme;
    }
    if (this._initDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initDelaySeconds = this._initDelaySeconds;
    }
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._successThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.successThreshold = this._successThreshold;
    }
    if (this._tcpSocketPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSocketPort = this._tcpSocketPort;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksContainerInstanceContainerLivenessProbe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._execCommands = undefined;
      this._failureThreshold = undefined;
      this._httpGetPath = undefined;
      this._httpGetPort = undefined;
      this._httpGetScheme = undefined;
      this._initDelaySeconds = undefined;
      this._periodSeconds = undefined;
      this._successThreshold = undefined;
      this._tcpSocketPort = undefined;
      this._timeoutSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._execCommands = value.execCommands;
      this._failureThreshold = value.failureThreshold;
      this._httpGetPath = value.httpGetPath;
      this._httpGetPort = value.httpGetPort;
      this._httpGetScheme = value.httpGetScheme;
      this._initDelaySeconds = value.initDelaySeconds;
      this._periodSeconds = value.periodSeconds;
      this._successThreshold = value.successThreshold;
      this._tcpSocketPort = value.tcpSocketPort;
      this._timeoutSeconds = value.timeoutSeconds;
    }
  }

  // exec_commands - computed: false, optional: true, required: false
  private _execCommands?: string[]; 
  public get execCommands() {
    return this.getListAttribute('exec_commands');
  }
  public set execCommands(value: string[]) {
    this._execCommands = value;
  }
  public resetExecCommands() {
    this._execCommands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execCommandsInput() {
    return this._execCommands;
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

  // http_get_path - computed: false, optional: true, required: false
  private _httpGetPath?: string; 
  public get httpGetPath() {
    return this.getStringAttribute('http_get_path');
  }
  public set httpGetPath(value: string) {
    this._httpGetPath = value;
  }
  public resetHttpGetPath() {
    this._httpGetPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetPathInput() {
    return this._httpGetPath;
  }

  // http_get_port - computed: false, optional: true, required: false
  private _httpGetPort?: number; 
  public get httpGetPort() {
    return this.getNumberAttribute('http_get_port');
  }
  public set httpGetPort(value: number) {
    this._httpGetPort = value;
  }
  public resetHttpGetPort() {
    this._httpGetPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetPortInput() {
    return this._httpGetPort;
  }

  // http_get_scheme - computed: false, optional: true, required: false
  private _httpGetScheme?: string; 
  public get httpGetScheme() {
    return this.getStringAttribute('http_get_scheme');
  }
  public set httpGetScheme(value: string) {
    this._httpGetScheme = value;
  }
  public resetHttpGetScheme() {
    this._httpGetScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetSchemeInput() {
    return this._httpGetScheme;
  }

  // init_delay_seconds - computed: false, optional: true, required: false
  private _initDelaySeconds?: number; 
  public get initDelaySeconds() {
    return this.getNumberAttribute('init_delay_seconds');
  }
  public set initDelaySeconds(value: number) {
    this._initDelaySeconds = value;
  }
  public resetInitDelaySeconds() {
    this._initDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initDelaySecondsInput() {
    return this._initDelaySeconds;
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

  // tcp_socket_port - computed: false, optional: true, required: false
  private _tcpSocketPort?: number; 
  public get tcpSocketPort() {
    return this.getNumberAttribute('tcp_socket_port');
  }
  public set tcpSocketPort(value: number) {
    this._tcpSocketPort = value;
  }
  public resetTcpSocketPort() {
    this._tcpSocketPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSocketPortInput() {
    return this._tcpSocketPort;
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
}
export interface EksContainerInstanceContainerReadinessProbe {
  /**
  * List of execution commands.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#exec_commands EksContainerInstance#exec_commands}
  */
  readonly execCommands?: string[];
  /**
  * Minimum consecutive failures for the probe to be considered failed after having succeeded.Default: `3`. Minimum value is `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#failure_threshold EksContainerInstance#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * HttpGet detection path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#http_get_path EksContainerInstance#http_get_path}
  */
  readonly httpGetPath?: string;
  /**
  * HttpGet detection port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#http_get_port EksContainerInstance#http_get_port}
  */
  readonly httpGetPort?: number;
  /**
  * HttpGet detection scheme. Available values: `HTTP`, `HTTPS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#http_get_scheme EksContainerInstance#http_get_scheme}
  */
  readonly httpGetScheme?: string;
  /**
  * Number of seconds after the container has started before probes are initiated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#init_delay_seconds EksContainerInstance#init_delay_seconds}
  */
  readonly initDelaySeconds?: number;
  /**
  * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#period_seconds EksContainerInstance#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Minimum consecutive successes for the probe to be considered successful after having failed. Default: `1`. Must be 1 for liveness. Minimum value is `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#success_threshold EksContainerInstance#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * TCP Socket detection port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#tcp_socket_port EksContainerInstance#tcp_socket_port}
  */
  readonly tcpSocketPort?: number;
  /**
  * Number of seconds after which the probe times out.
  * Defaults to 1 second. Minimum value is `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#timeout_seconds EksContainerInstance#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function eksContainerInstanceContainerReadinessProbeToTerraform(struct?: EksContainerInstanceContainerReadinessProbeOutputReference | EksContainerInstanceContainerReadinessProbe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec_commands: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.execCommands),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    http_get_path: cdktf.stringToTerraform(struct!.httpGetPath),
    http_get_port: cdktf.numberToTerraform(struct!.httpGetPort),
    http_get_scheme: cdktf.stringToTerraform(struct!.httpGetScheme),
    init_delay_seconds: cdktf.numberToTerraform(struct!.initDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    tcp_socket_port: cdktf.numberToTerraform(struct!.tcpSocketPort),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function eksContainerInstanceContainerReadinessProbeToHclTerraform(struct?: EksContainerInstanceContainerReadinessProbeOutputReference | EksContainerInstanceContainerReadinessProbe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec_commands: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.execCommands),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_get_path: {
      value: cdktf.stringToHclTerraform(struct!.httpGetPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_get_port: {
      value: cdktf.numberToHclTerraform(struct!.httpGetPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_get_scheme: {
      value: cdktf.stringToHclTerraform(struct!.httpGetScheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    init_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.initDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.periodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    success_threshold: {
      value: cdktf.numberToHclTerraform(struct!.successThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_socket_port: {
      value: cdktf.numberToHclTerraform(struct!.tcpSocketPort),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksContainerInstanceContainerReadinessProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EksContainerInstanceContainerReadinessProbe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._execCommands !== undefined) {
      hasAnyValues = true;
      internalValueResult.execCommands = this._execCommands;
    }
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._httpGetPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGetPath = this._httpGetPath;
    }
    if (this._httpGetPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGetPort = this._httpGetPort;
    }
    if (this._httpGetScheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGetScheme = this._httpGetScheme;
    }
    if (this._initDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initDelaySeconds = this._initDelaySeconds;
    }
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._successThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.successThreshold = this._successThreshold;
    }
    if (this._tcpSocketPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSocketPort = this._tcpSocketPort;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksContainerInstanceContainerReadinessProbe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._execCommands = undefined;
      this._failureThreshold = undefined;
      this._httpGetPath = undefined;
      this._httpGetPort = undefined;
      this._httpGetScheme = undefined;
      this._initDelaySeconds = undefined;
      this._periodSeconds = undefined;
      this._successThreshold = undefined;
      this._tcpSocketPort = undefined;
      this._timeoutSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._execCommands = value.execCommands;
      this._failureThreshold = value.failureThreshold;
      this._httpGetPath = value.httpGetPath;
      this._httpGetPort = value.httpGetPort;
      this._httpGetScheme = value.httpGetScheme;
      this._initDelaySeconds = value.initDelaySeconds;
      this._periodSeconds = value.periodSeconds;
      this._successThreshold = value.successThreshold;
      this._tcpSocketPort = value.tcpSocketPort;
      this._timeoutSeconds = value.timeoutSeconds;
    }
  }

  // exec_commands - computed: false, optional: true, required: false
  private _execCommands?: string[]; 
  public get execCommands() {
    return this.getListAttribute('exec_commands');
  }
  public set execCommands(value: string[]) {
    this._execCommands = value;
  }
  public resetExecCommands() {
    this._execCommands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execCommandsInput() {
    return this._execCommands;
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

  // http_get_path - computed: false, optional: true, required: false
  private _httpGetPath?: string; 
  public get httpGetPath() {
    return this.getStringAttribute('http_get_path');
  }
  public set httpGetPath(value: string) {
    this._httpGetPath = value;
  }
  public resetHttpGetPath() {
    this._httpGetPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetPathInput() {
    return this._httpGetPath;
  }

  // http_get_port - computed: false, optional: true, required: false
  private _httpGetPort?: number; 
  public get httpGetPort() {
    return this.getNumberAttribute('http_get_port');
  }
  public set httpGetPort(value: number) {
    this._httpGetPort = value;
  }
  public resetHttpGetPort() {
    this._httpGetPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetPortInput() {
    return this._httpGetPort;
  }

  // http_get_scheme - computed: false, optional: true, required: false
  private _httpGetScheme?: string; 
  public get httpGetScheme() {
    return this.getStringAttribute('http_get_scheme');
  }
  public set httpGetScheme(value: string) {
    this._httpGetScheme = value;
  }
  public resetHttpGetScheme() {
    this._httpGetScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetSchemeInput() {
    return this._httpGetScheme;
  }

  // init_delay_seconds - computed: false, optional: true, required: false
  private _initDelaySeconds?: number; 
  public get initDelaySeconds() {
    return this.getNumberAttribute('init_delay_seconds');
  }
  public set initDelaySeconds(value: number) {
    this._initDelaySeconds = value;
  }
  public resetInitDelaySeconds() {
    this._initDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initDelaySecondsInput() {
    return this._initDelaySeconds;
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

  // tcp_socket_port - computed: false, optional: true, required: false
  private _tcpSocketPort?: number; 
  public get tcpSocketPort() {
    return this.getNumberAttribute('tcp_socket_port');
  }
  public set tcpSocketPort(value: number) {
    this._tcpSocketPort = value;
  }
  public resetTcpSocketPort() {
    this._tcpSocketPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSocketPortInput() {
    return this._tcpSocketPort;
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
}
export interface EksContainerInstanceContainerVolumeMount {
  /**
  * Volume mount propagation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#mount_propagation EksContainerInstance#mount_propagation}
  */
  readonly mountPropagation?: string;
  /**
  * Volume name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#name EksContainerInstance#name}
  */
  readonly name: string;
  /**
  * Volume mount path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#path EksContainerInstance#path}
  */
  readonly path: string;
  /**
  * Whether the volume is read-only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#read_only EksContainerInstance#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Volume mount sub-path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#sub_path EksContainerInstance#sub_path}
  */
  readonly subPath?: string;
  /**
  * Volume mount sub-path expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#sub_path_expr EksContainerInstance#sub_path_expr}
  */
  readonly subPathExpr?: string;
}

export function eksContainerInstanceContainerVolumeMountToTerraform(struct?: EksContainerInstanceContainerVolumeMount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_propagation: cdktf.stringToTerraform(struct!.mountPropagation),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    sub_path: cdktf.stringToTerraform(struct!.subPath),
    sub_path_expr: cdktf.stringToTerraform(struct!.subPathExpr),
  }
}


export function eksContainerInstanceContainerVolumeMountToHclTerraform(struct?: EksContainerInstanceContainerVolumeMount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_propagation: {
      value: cdktf.stringToHclTerraform(struct!.mountPropagation),
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sub_path: {
      value: cdktf.stringToHclTerraform(struct!.subPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_path_expr: {
      value: cdktf.stringToHclTerraform(struct!.subPathExpr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksContainerInstanceContainerVolumeMountOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksContainerInstanceContainerVolumeMount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPropagation !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPropagation = this._mountPropagation;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._subPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.subPath = this._subPath;
    }
    if (this._subPathExpr !== undefined) {
      hasAnyValues = true;
      internalValueResult.subPathExpr = this._subPathExpr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksContainerInstanceContainerVolumeMount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPropagation = undefined;
      this._name = undefined;
      this._path = undefined;
      this._readOnly = undefined;
      this._subPath = undefined;
      this._subPathExpr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPropagation = value.mountPropagation;
      this._name = value.name;
      this._path = value.path;
      this._readOnly = value.readOnly;
      this._subPath = value.subPath;
      this._subPathExpr = value.subPathExpr;
    }
  }

  // mount_propagation - computed: false, optional: true, required: false
  private _mountPropagation?: string; 
  public get mountPropagation() {
    return this.getStringAttribute('mount_propagation');
  }
  public set mountPropagation(value: string) {
    this._mountPropagation = value;
  }
  public resetMountPropagation() {
    this._mountPropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPropagationInput() {
    return this._mountPropagation;
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

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // sub_path - computed: false, optional: true, required: false
  private _subPath?: string; 
  public get subPath() {
    return this.getStringAttribute('sub_path');
  }
  public set subPath(value: string) {
    this._subPath = value;
  }
  public resetSubPath() {
    this._subPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subPathInput() {
    return this._subPath;
  }

  // sub_path_expr - computed: false, optional: true, required: false
  private _subPathExpr?: string; 
  public get subPathExpr() {
    return this.getStringAttribute('sub_path_expr');
  }
  public set subPathExpr(value: string) {
    this._subPathExpr = value;
  }
  public resetSubPathExpr() {
    this._subPathExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subPathExprInput() {
    return this._subPathExpr;
  }
}

export class EksContainerInstanceContainerVolumeMountList extends cdktf.ComplexList {
  public internalValue? : EksContainerInstanceContainerVolumeMount[] | cdktf.IResolvable

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
  public get(index: number): EksContainerInstanceContainerVolumeMountOutputReference {
    return new EksContainerInstanceContainerVolumeMountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksContainerInstanceContainer {
  /**
  * Container launch argument list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#args EksContainerInstance#args}
  */
  readonly args?: string[];
  /**
  * Container launch command list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#commands EksContainerInstance#commands}
  */
  readonly commands?: string[];
  /**
  * Number of cpu core of container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#cpu EksContainerInstance#cpu}
  */
  readonly cpu?: number;
  /**
  * Map of environment variables of container OS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#env_vars EksContainerInstance#env_vars}
  */
  readonly envVars?: { [key: string]: string };
  /**
  * Image of Container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#image EksContainerInstance#image}
  */
  readonly image: string;
  /**
  * Memory size of container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#memory EksContainerInstance#memory}
  */
  readonly memory?: number;
  /**
  * Name of Container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#name EksContainerInstance#name}
  */
  readonly name: string;
  /**
  * Container working directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#working_dir EksContainerInstance#working_dir}
  */
  readonly workingDir?: string;
  /**
  * liveness_probe block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#liveness_probe EksContainerInstance#liveness_probe}
  */
  readonly livenessProbe?: EksContainerInstanceContainerLivenessProbe;
  /**
  * readiness_probe block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#readiness_probe EksContainerInstance#readiness_probe}
  */
  readonly readinessProbe?: EksContainerInstanceContainerReadinessProbe;
  /**
  * volume_mount block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#volume_mount EksContainerInstance#volume_mount}
  */
  readonly volumeMount?: EksContainerInstanceContainerVolumeMount[] | cdktf.IResolvable;
}

export function eksContainerInstanceContainerToTerraform(struct?: EksContainerInstanceContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    commands: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.commands),
    cpu: cdktf.numberToTerraform(struct!.cpu),
    env_vars: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.envVars),
    image: cdktf.stringToTerraform(struct!.image),
    memory: cdktf.numberToTerraform(struct!.memory),
    name: cdktf.stringToTerraform(struct!.name),
    working_dir: cdktf.stringToTerraform(struct!.workingDir),
    liveness_probe: eksContainerInstanceContainerLivenessProbeToTerraform(struct!.livenessProbe),
    readiness_probe: eksContainerInstanceContainerReadinessProbeToTerraform(struct!.readinessProbe),
    volume_mount: cdktf.listMapper(eksContainerInstanceContainerVolumeMountToTerraform, true)(struct!.volumeMount),
  }
}


export function eksContainerInstanceContainerToHclTerraform(struct?: EksContainerInstanceContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    commands: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.commands),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cpu: {
      value: cdktf.numberToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    env_vars: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.envVars),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.numberToHclTerraform(struct!.memory),
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
    working_dir: {
      value: cdktf.stringToHclTerraform(struct!.workingDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    liveness_probe: {
      value: eksContainerInstanceContainerLivenessProbeToHclTerraform(struct!.livenessProbe),
      isBlock: true,
      type: "list",
      storageClassType: "EksContainerInstanceContainerLivenessProbeList",
    },
    readiness_probe: {
      value: eksContainerInstanceContainerReadinessProbeToHclTerraform(struct!.readinessProbe),
      isBlock: true,
      type: "list",
      storageClassType: "EksContainerInstanceContainerReadinessProbeList",
    },
    volume_mount: {
      value: cdktf.listMapperHcl(eksContainerInstanceContainerVolumeMountToHclTerraform, true)(struct!.volumeMount),
      isBlock: true,
      type: "list",
      storageClassType: "EksContainerInstanceContainerVolumeMountList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksContainerInstanceContainerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksContainerInstanceContainer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._commands !== undefined) {
      hasAnyValues = true;
      internalValueResult.commands = this._commands;
    }
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._envVars !== undefined) {
      hasAnyValues = true;
      internalValueResult.envVars = this._envVars;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._workingDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.workingDir = this._workingDir;
    }
    if (this._livenessProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessProbe = this._livenessProbe?.internalValue;
    }
    if (this._readinessProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessProbe = this._readinessProbe?.internalValue;
    }
    if (this._volumeMount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMount = this._volumeMount?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksContainerInstanceContainer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._commands = undefined;
      this._cpu = undefined;
      this._envVars = undefined;
      this._image = undefined;
      this._memory = undefined;
      this._name = undefined;
      this._workingDir = undefined;
      this._livenessProbe.internalValue = undefined;
      this._readinessProbe.internalValue = undefined;
      this._volumeMount.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args = value.args;
      this._commands = value.commands;
      this._cpu = value.cpu;
      this._envVars = value.envVars;
      this._image = value.image;
      this._memory = value.memory;
      this._name = value.name;
      this._workingDir = value.workingDir;
      this._livenessProbe.internalValue = value.livenessProbe;
      this._readinessProbe.internalValue = value.readinessProbe;
      this._volumeMount.internalValue = value.volumeMount;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // commands - computed: false, optional: true, required: false
  private _commands?: string[]; 
  public get commands() {
    return this.getListAttribute('commands');
  }
  public set commands(value: string[]) {
    this._commands = value;
  }
  public resetCommands() {
    this._commands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandsInput() {
    return this._commands;
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // env_vars - computed: false, optional: true, required: false
  private _envVars?: { [key: string]: string }; 
  public get envVars() {
    return this.getStringMapAttribute('env_vars');
  }
  public set envVars(value: { [key: string]: string }) {
    this._envVars = value;
  }
  public resetEnvVars() {
    this._envVars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envVarsInput() {
    return this._envVars;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
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

  // working_dir - computed: false, optional: true, required: false
  private _workingDir?: string; 
  public get workingDir() {
    return this.getStringAttribute('working_dir');
  }
  public set workingDir(value: string) {
    this._workingDir = value;
  }
  public resetWorkingDir() {
    this._workingDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingDirInput() {
    return this._workingDir;
  }

  // liveness_probe - computed: false, optional: true, required: false
  private _livenessProbe = new EksContainerInstanceContainerLivenessProbeOutputReference(this, "liveness_probe");
  public get livenessProbe() {
    return this._livenessProbe;
  }
  public putLivenessProbe(value: EksContainerInstanceContainerLivenessProbe) {
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
  private _readinessProbe = new EksContainerInstanceContainerReadinessProbeOutputReference(this, "readiness_probe");
  public get readinessProbe() {
    return this._readinessProbe;
  }
  public putReadinessProbe(value: EksContainerInstanceContainerReadinessProbe) {
    this._readinessProbe.internalValue = value;
  }
  public resetReadinessProbe() {
    this._readinessProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessProbeInput() {
    return this._readinessProbe.internalValue;
  }

  // volume_mount - computed: false, optional: true, required: false
  private _volumeMount = new EksContainerInstanceContainerVolumeMountList(this, "volume_mount", false);
  public get volumeMount() {
    return this._volumeMount;
  }
  public putVolumeMount(value: EksContainerInstanceContainerVolumeMount[] | cdktf.IResolvable) {
    this._volumeMount.internalValue = value;
  }
  public resetVolumeMount() {
    this._volumeMount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeMountInput() {
    return this._volumeMount.internalValue;
  }
}

export class EksContainerInstanceContainerList extends cdktf.ComplexList {
  public internalValue? : EksContainerInstanceContainer[] | cdktf.IResolvable

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
  public get(index: number): EksContainerInstanceContainerOutputReference {
    return new EksContainerInstanceContainerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksContainerInstanceImageRegistryCredential {
  /**
  * Name of credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#name EksContainerInstance#name}
  */
  readonly name?: string;
  /**
  * Password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#password EksContainerInstance#password}
  */
  readonly password?: string;
  /**
  * Address of image registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#server EksContainerInstance#server}
  */
  readonly server?: string;
  /**
  * Username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#username EksContainerInstance#username}
  */
  readonly username?: string;
}

export function eksContainerInstanceImageRegistryCredentialToTerraform(struct?: EksContainerInstanceImageRegistryCredential | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    server: cdktf.stringToTerraform(struct!.server),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function eksContainerInstanceImageRegistryCredentialToHclTerraform(struct?: EksContainerInstanceImageRegistryCredential | cdktf.IResolvable): any {
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
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksContainerInstanceImageRegistryCredentialOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksContainerInstanceImageRegistryCredential | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksContainerInstanceImageRegistryCredential | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._password = undefined;
      this._server = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._password = value.password;
      this._server = value.server;
      this._username = value.username;
    }
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // server - computed: false, optional: true, required: false
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

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class EksContainerInstanceImageRegistryCredentialList extends cdktf.ComplexList {
  public internalValue? : EksContainerInstanceImageRegistryCredential[] | cdktf.IResolvable

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
  public get(index: number): EksContainerInstanceImageRegistryCredentialOutputReference {
    return new EksContainerInstanceImageRegistryCredentialOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksContainerInstanceInitContainerVolumeMount {
  /**
  * Volume mount propagation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#mount_propagation EksContainerInstance#mount_propagation}
  */
  readonly mountPropagation?: string;
  /**
  * Volume name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#name EksContainerInstance#name}
  */
  readonly name: string;
  /**
  * Volume mount path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#path EksContainerInstance#path}
  */
  readonly path: string;
  /**
  * Whether the volume is read-only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#read_only EksContainerInstance#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Volume mount sub-path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#sub_path EksContainerInstance#sub_path}
  */
  readonly subPath?: string;
  /**
  * Volume mount sub-path expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#sub_path_expr EksContainerInstance#sub_path_expr}
  */
  readonly subPathExpr?: string;
}

export function eksContainerInstanceInitContainerVolumeMountToTerraform(struct?: EksContainerInstanceInitContainerVolumeMount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_propagation: cdktf.stringToTerraform(struct!.mountPropagation),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    sub_path: cdktf.stringToTerraform(struct!.subPath),
    sub_path_expr: cdktf.stringToTerraform(struct!.subPathExpr),
  }
}


export function eksContainerInstanceInitContainerVolumeMountToHclTerraform(struct?: EksContainerInstanceInitContainerVolumeMount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_propagation: {
      value: cdktf.stringToHclTerraform(struct!.mountPropagation),
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sub_path: {
      value: cdktf.stringToHclTerraform(struct!.subPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_path_expr: {
      value: cdktf.stringToHclTerraform(struct!.subPathExpr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksContainerInstanceInitContainerVolumeMountOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksContainerInstanceInitContainerVolumeMount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPropagation !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPropagation = this._mountPropagation;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._subPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.subPath = this._subPath;
    }
    if (this._subPathExpr !== undefined) {
      hasAnyValues = true;
      internalValueResult.subPathExpr = this._subPathExpr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksContainerInstanceInitContainerVolumeMount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPropagation = undefined;
      this._name = undefined;
      this._path = undefined;
      this._readOnly = undefined;
      this._subPath = undefined;
      this._subPathExpr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPropagation = value.mountPropagation;
      this._name = value.name;
      this._path = value.path;
      this._readOnly = value.readOnly;
      this._subPath = value.subPath;
      this._subPathExpr = value.subPathExpr;
    }
  }

  // mount_propagation - computed: false, optional: true, required: false
  private _mountPropagation?: string; 
  public get mountPropagation() {
    return this.getStringAttribute('mount_propagation');
  }
  public set mountPropagation(value: string) {
    this._mountPropagation = value;
  }
  public resetMountPropagation() {
    this._mountPropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPropagationInput() {
    return this._mountPropagation;
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

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // sub_path - computed: false, optional: true, required: false
  private _subPath?: string; 
  public get subPath() {
    return this.getStringAttribute('sub_path');
  }
  public set subPath(value: string) {
    this._subPath = value;
  }
  public resetSubPath() {
    this._subPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subPathInput() {
    return this._subPath;
  }

  // sub_path_expr - computed: false, optional: true, required: false
  private _subPathExpr?: string; 
  public get subPathExpr() {
    return this.getStringAttribute('sub_path_expr');
  }
  public set subPathExpr(value: string) {
    this._subPathExpr = value;
  }
  public resetSubPathExpr() {
    this._subPathExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subPathExprInput() {
    return this._subPathExpr;
  }
}

export class EksContainerInstanceInitContainerVolumeMountList extends cdktf.ComplexList {
  public internalValue? : EksContainerInstanceInitContainerVolumeMount[] | cdktf.IResolvable

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
  public get(index: number): EksContainerInstanceInitContainerVolumeMountOutputReference {
    return new EksContainerInstanceInitContainerVolumeMountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksContainerInstanceInitContainer {
  /**
  * Container launch argument list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#args EksContainerInstance#args}
  */
  readonly args?: string[];
  /**
  * Container launch command list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#commands EksContainerInstance#commands}
  */
  readonly commands?: string[];
  /**
  * Number of cpu core of container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#cpu EksContainerInstance#cpu}
  */
  readonly cpu?: number;
  /**
  * Map of environment variables of container OS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#env_vars EksContainerInstance#env_vars}
  */
  readonly envVars?: { [key: string]: string };
  /**
  * Image of Container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#image EksContainerInstance#image}
  */
  readonly image: string;
  /**
  * Memory size of container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#memory EksContainerInstance#memory}
  */
  readonly memory?: number;
  /**
  * Name of Container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#name EksContainerInstance#name}
  */
  readonly name: string;
  /**
  * Container working directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#working_dir EksContainerInstance#working_dir}
  */
  readonly workingDir?: string;
  /**
  * volume_mount block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#volume_mount EksContainerInstance#volume_mount}
  */
  readonly volumeMount?: EksContainerInstanceInitContainerVolumeMount[] | cdktf.IResolvable;
}

export function eksContainerInstanceInitContainerToTerraform(struct?: EksContainerInstanceInitContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    commands: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.commands),
    cpu: cdktf.numberToTerraform(struct!.cpu),
    env_vars: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.envVars),
    image: cdktf.stringToTerraform(struct!.image),
    memory: cdktf.numberToTerraform(struct!.memory),
    name: cdktf.stringToTerraform(struct!.name),
    working_dir: cdktf.stringToTerraform(struct!.workingDir),
    volume_mount: cdktf.listMapper(eksContainerInstanceInitContainerVolumeMountToTerraform, true)(struct!.volumeMount),
  }
}


export function eksContainerInstanceInitContainerToHclTerraform(struct?: EksContainerInstanceInitContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    commands: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.commands),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cpu: {
      value: cdktf.numberToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    env_vars: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.envVars),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.numberToHclTerraform(struct!.memory),
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
    working_dir: {
      value: cdktf.stringToHclTerraform(struct!.workingDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_mount: {
      value: cdktf.listMapperHcl(eksContainerInstanceInitContainerVolumeMountToHclTerraform, true)(struct!.volumeMount),
      isBlock: true,
      type: "list",
      storageClassType: "EksContainerInstanceInitContainerVolumeMountList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksContainerInstanceInitContainerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksContainerInstanceInitContainer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._commands !== undefined) {
      hasAnyValues = true;
      internalValueResult.commands = this._commands;
    }
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._envVars !== undefined) {
      hasAnyValues = true;
      internalValueResult.envVars = this._envVars;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._workingDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.workingDir = this._workingDir;
    }
    if (this._volumeMount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMount = this._volumeMount?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksContainerInstanceInitContainer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._commands = undefined;
      this._cpu = undefined;
      this._envVars = undefined;
      this._image = undefined;
      this._memory = undefined;
      this._name = undefined;
      this._workingDir = undefined;
      this._volumeMount.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args = value.args;
      this._commands = value.commands;
      this._cpu = value.cpu;
      this._envVars = value.envVars;
      this._image = value.image;
      this._memory = value.memory;
      this._name = value.name;
      this._workingDir = value.workingDir;
      this._volumeMount.internalValue = value.volumeMount;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // commands - computed: false, optional: true, required: false
  private _commands?: string[]; 
  public get commands() {
    return this.getListAttribute('commands');
  }
  public set commands(value: string[]) {
    this._commands = value;
  }
  public resetCommands() {
    this._commands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandsInput() {
    return this._commands;
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // env_vars - computed: false, optional: true, required: false
  private _envVars?: { [key: string]: string }; 
  public get envVars() {
    return this.getStringMapAttribute('env_vars');
  }
  public set envVars(value: { [key: string]: string }) {
    this._envVars = value;
  }
  public resetEnvVars() {
    this._envVars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envVarsInput() {
    return this._envVars;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
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

  // working_dir - computed: false, optional: true, required: false
  private _workingDir?: string; 
  public get workingDir() {
    return this.getStringAttribute('working_dir');
  }
  public set workingDir(value: string) {
    this._workingDir = value;
  }
  public resetWorkingDir() {
    this._workingDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingDirInput() {
    return this._workingDir;
  }

  // volume_mount - computed: false, optional: true, required: false
  private _volumeMount = new EksContainerInstanceInitContainerVolumeMountList(this, "volume_mount", false);
  public get volumeMount() {
    return this._volumeMount;
  }
  public putVolumeMount(value: EksContainerInstanceInitContainerVolumeMount[] | cdktf.IResolvable) {
    this._volumeMount.internalValue = value;
  }
  public resetVolumeMount() {
    this._volumeMount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeMountInput() {
    return this._volumeMount.internalValue;
  }
}

export class EksContainerInstanceInitContainerList extends cdktf.ComplexList {
  public internalValue? : EksContainerInstanceInitContainer[] | cdktf.IResolvable

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
  public get(index: number): EksContainerInstanceInitContainerOutputReference {
    return new EksContainerInstanceInitContainerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksContainerInstanceNfsVolume {
  /**
  * Name of NFS volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#name EksContainerInstance#name}
  */
  readonly name: string;
  /**
  * NFS volume path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#path EksContainerInstance#path}
  */
  readonly path: string;
  /**
  * Indicates whether the volume is read only. Default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#read_only EksContainerInstance#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * NFS server address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#server EksContainerInstance#server}
  */
  readonly server: string;
}

export function eksContainerInstanceNfsVolumeToTerraform(struct?: EksContainerInstanceNfsVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    server: cdktf.stringToTerraform(struct!.server),
  }
}


export function eksContainerInstanceNfsVolumeToHclTerraform(struct?: EksContainerInstanceNfsVolume | cdktf.IResolvable): any {
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksContainerInstanceNfsVolumeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksContainerInstanceNfsVolume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksContainerInstanceNfsVolume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._path = undefined;
      this._readOnly = undefined;
      this._server = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._path = value.path;
      this._readOnly = value.readOnly;
      this._server = value.server;
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

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }
}

export class EksContainerInstanceNfsVolumeList extends cdktf.ComplexList {
  public internalValue? : EksContainerInstanceNfsVolume[] | cdktf.IResolvable

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
  public get(index: number): EksContainerInstanceNfsVolumeOutputReference {
    return new EksContainerInstanceNfsVolumeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance tencentcloud_eks_container_instance}
*/
export class EksContainerInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_eks_container_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EksContainerInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EksContainerInstance to import
  * @param importFromId The id of the existing EksContainerInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EksContainerInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_eks_container_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eks_container_instance tencentcloud_eks_container_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EksContainerInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: EksContainerInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_eks_container_instance',
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
    this._autoCreateEip = config.autoCreateEip;
    this._camRoleName = config.camRoleName;
    this._cpu = config.cpu;
    this._cpuType = config.cpuType;
    this._dnsConfigOptions = config.dnsConfigOptions;
    this._dnsNamesServers = config.dnsNamesServers;
    this._dnsSearches = config.dnsSearches;
    this._eipDeletePolicy = config.eipDeletePolicy;
    this._eipMaxBandwidthOut = config.eipMaxBandwidthOut;
    this._eipServiceProvider = config.eipServiceProvider;
    this._existedEipIds = config.existedEipIds;
    this._gpuCount = config.gpuCount;
    this._gpuType = config.gpuType;
    this._id = config.id;
    this._memory = config.memory;
    this._name = config.name;
    this._restartPolicy = config.restartPolicy;
    this._securityGroups = config.securityGroups;
    this._subnetId = config.subnetId;
    this._vpcId = config.vpcId;
    this._cbsVolume.internalValue = config.cbsVolume;
    this._container.internalValue = config.container;
    this._imageRegistryCredential.internalValue = config.imageRegistryCredential;
    this._initContainer.internalValue = config.initContainer;
    this._nfsVolume.internalValue = config.nfsVolume;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_create_eip - computed: false, optional: true, required: false
  private _autoCreateEip?: boolean | cdktf.IResolvable; 
  public get autoCreateEip() {
    return this.getBooleanAttribute('auto_create_eip');
  }
  public set autoCreateEip(value: boolean | cdktf.IResolvable) {
    this._autoCreateEip = value;
  }
  public resetAutoCreateEip() {
    this._autoCreateEip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreateEipInput() {
    return this._autoCreateEip;
  }

  // auto_create_eip_id - computed: true, optional: false, required: false
  public get autoCreateEipId() {
    return this.getStringAttribute('auto_create_eip_id');
  }

  // cam_role_name - computed: false, optional: true, required: false
  private _camRoleName?: string; 
  public get camRoleName() {
    return this.getStringAttribute('cam_role_name');
  }
  public set camRoleName(value: string) {
    this._camRoleName = value;
  }
  public resetCamRoleName() {
    this._camRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get camRoleNameInput() {
    return this._camRoleName;
  }

  // cpu - computed: false, optional: false, required: true
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // cpu_type - computed: false, optional: true, required: false
  private _cpuType?: string; 
  public get cpuType() {
    return this.getStringAttribute('cpu_type');
  }
  public set cpuType(value: string) {
    this._cpuType = value;
  }
  public resetCpuType() {
    this._cpuType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuTypeInput() {
    return this._cpuType;
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // dns_config_options - computed: false, optional: true, required: false
  private _dnsConfigOptions?: { [key: string]: string }; 
  public get dnsConfigOptions() {
    return this.getStringMapAttribute('dns_config_options');
  }
  public set dnsConfigOptions(value: { [key: string]: string }) {
    this._dnsConfigOptions = value;
  }
  public resetDnsConfigOptions() {
    this._dnsConfigOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsConfigOptionsInput() {
    return this._dnsConfigOptions;
  }

  // dns_names_servers - computed: false, optional: true, required: false
  private _dnsNamesServers?: string[]; 
  public get dnsNamesServers() {
    return this.getListAttribute('dns_names_servers');
  }
  public set dnsNamesServers(value: string[]) {
    this._dnsNamesServers = value;
  }
  public resetDnsNamesServers() {
    this._dnsNamesServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNamesServersInput() {
    return this._dnsNamesServers;
  }

  // dns_searches - computed: false, optional: true, required: false
  private _dnsSearches?: string[]; 
  public get dnsSearches() {
    return this.getListAttribute('dns_searches');
  }
  public set dnsSearches(value: string[]) {
    this._dnsSearches = value;
  }
  public resetDnsSearches() {
    this._dnsSearches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSearchesInput() {
    return this._dnsSearches;
  }

  // eip_address - computed: true, optional: false, required: false
  public get eipAddress() {
    return this.getStringAttribute('eip_address');
  }

  // eip_delete_policy - computed: false, optional: true, required: false
  private _eipDeletePolicy?: boolean | cdktf.IResolvable; 
  public get eipDeletePolicy() {
    return this.getBooleanAttribute('eip_delete_policy');
  }
  public set eipDeletePolicy(value: boolean | cdktf.IResolvable) {
    this._eipDeletePolicy = value;
  }
  public resetEipDeletePolicy() {
    this._eipDeletePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eipDeletePolicyInput() {
    return this._eipDeletePolicy;
  }

  // eip_max_bandwidth_out - computed: false, optional: true, required: false
  private _eipMaxBandwidthOut?: number; 
  public get eipMaxBandwidthOut() {
    return this.getNumberAttribute('eip_max_bandwidth_out');
  }
  public set eipMaxBandwidthOut(value: number) {
    this._eipMaxBandwidthOut = value;
  }
  public resetEipMaxBandwidthOut() {
    this._eipMaxBandwidthOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eipMaxBandwidthOutInput() {
    return this._eipMaxBandwidthOut;
  }

  // eip_service_provider - computed: false, optional: true, required: false
  private _eipServiceProvider?: string; 
  public get eipServiceProvider() {
    return this.getStringAttribute('eip_service_provider');
  }
  public set eipServiceProvider(value: string) {
    this._eipServiceProvider = value;
  }
  public resetEipServiceProvider() {
    this._eipServiceProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eipServiceProviderInput() {
    return this._eipServiceProvider;
  }

  // existed_eip_ids - computed: false, optional: true, required: false
  private _existedEipIds?: string[]; 
  public get existedEipIds() {
    return this.getListAttribute('existed_eip_ids');
  }
  public set existedEipIds(value: string[]) {
    this._existedEipIds = value;
  }
  public resetExistedEipIds() {
    this._existedEipIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existedEipIdsInput() {
    return this._existedEipIds;
  }

  // gpu_count - computed: false, optional: true, required: false
  private _gpuCount?: number; 
  public get gpuCount() {
    return this.getNumberAttribute('gpu_count');
  }
  public set gpuCount(value: number) {
    this._gpuCount = value;
  }
  public resetGpuCount() {
    this._gpuCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuCountInput() {
    return this._gpuCount;
  }

  // gpu_type - computed: false, optional: true, required: false
  private _gpuType?: string; 
  public get gpuType() {
    return this.getStringAttribute('gpu_type');
  }
  public set gpuType(value: string) {
    this._gpuType = value;
  }
  public resetGpuType() {
    this._gpuType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuTypeInput() {
    return this._gpuType;
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

  // memory - computed: false, optional: false, required: true
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
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

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // restart_policy - computed: false, optional: true, required: false
  private _restartPolicy?: string; 
  public get restartPolicy() {
    return this.getStringAttribute('restart_policy');
  }
  public set restartPolicy(value: string) {
    this._restartPolicy = value;
  }
  public resetRestartPolicy() {
    this._restartPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartPolicyInput() {
    return this._restartPolicy;
  }

  // security_groups - computed: false, optional: false, required: true
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // cbs_volume - computed: false, optional: true, required: false
  private _cbsVolume = new EksContainerInstanceCbsVolumeList(this, "cbs_volume", false);
  public get cbsVolume() {
    return this._cbsVolume;
  }
  public putCbsVolume(value: EksContainerInstanceCbsVolume[] | cdktf.IResolvable) {
    this._cbsVolume.internalValue = value;
  }
  public resetCbsVolume() {
    this._cbsVolume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbsVolumeInput() {
    return this._cbsVolume.internalValue;
  }

  // container - computed: false, optional: false, required: true
  private _container = new EksContainerInstanceContainerList(this, "container", false);
  public get container() {
    return this._container;
  }
  public putContainer(value: EksContainerInstanceContainer[] | cdktf.IResolvable) {
    this._container.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }

  // image_registry_credential - computed: false, optional: true, required: false
  private _imageRegistryCredential = new EksContainerInstanceImageRegistryCredentialList(this, "image_registry_credential", false);
  public get imageRegistryCredential() {
    return this._imageRegistryCredential;
  }
  public putImageRegistryCredential(value: EksContainerInstanceImageRegistryCredential[] | cdktf.IResolvable) {
    this._imageRegistryCredential.internalValue = value;
  }
  public resetImageRegistryCredential() {
    this._imageRegistryCredential.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageRegistryCredentialInput() {
    return this._imageRegistryCredential.internalValue;
  }

  // init_container - computed: false, optional: true, required: false
  private _initContainer = new EksContainerInstanceInitContainerList(this, "init_container", false);
  public get initContainer() {
    return this._initContainer;
  }
  public putInitContainer(value: EksContainerInstanceInitContainer[] | cdktf.IResolvable) {
    this._initContainer.internalValue = value;
  }
  public resetInitContainer() {
    this._initContainer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initContainerInput() {
    return this._initContainer.internalValue;
  }

  // nfs_volume - computed: false, optional: true, required: false
  private _nfsVolume = new EksContainerInstanceNfsVolumeList(this, "nfs_volume", false);
  public get nfsVolume() {
    return this._nfsVolume;
  }
  public putNfsVolume(value: EksContainerInstanceNfsVolume[] | cdktf.IResolvable) {
    this._nfsVolume.internalValue = value;
  }
  public resetNfsVolume() {
    this._nfsVolume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsVolumeInput() {
    return this._nfsVolume.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_create_eip: cdktf.booleanToTerraform(this._autoCreateEip),
      cam_role_name: cdktf.stringToTerraform(this._camRoleName),
      cpu: cdktf.numberToTerraform(this._cpu),
      cpu_type: cdktf.stringToTerraform(this._cpuType),
      dns_config_options: cdktf.hashMapper(cdktf.stringToTerraform)(this._dnsConfigOptions),
      dns_names_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsNamesServers),
      dns_searches: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsSearches),
      eip_delete_policy: cdktf.booleanToTerraform(this._eipDeletePolicy),
      eip_max_bandwidth_out: cdktf.numberToTerraform(this._eipMaxBandwidthOut),
      eip_service_provider: cdktf.stringToTerraform(this._eipServiceProvider),
      existed_eip_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._existedEipIds),
      gpu_count: cdktf.numberToTerraform(this._gpuCount),
      gpu_type: cdktf.stringToTerraform(this._gpuType),
      id: cdktf.stringToTerraform(this._id),
      memory: cdktf.numberToTerraform(this._memory),
      name: cdktf.stringToTerraform(this._name),
      restart_policy: cdktf.stringToTerraform(this._restartPolicy),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroups),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      cbs_volume: cdktf.listMapper(eksContainerInstanceCbsVolumeToTerraform, true)(this._cbsVolume.internalValue),
      container: cdktf.listMapper(eksContainerInstanceContainerToTerraform, true)(this._container.internalValue),
      image_registry_credential: cdktf.listMapper(eksContainerInstanceImageRegistryCredentialToTerraform, true)(this._imageRegistryCredential.internalValue),
      init_container: cdktf.listMapper(eksContainerInstanceInitContainerToTerraform, true)(this._initContainer.internalValue),
      nfs_volume: cdktf.listMapper(eksContainerInstanceNfsVolumeToTerraform, true)(this._nfsVolume.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_create_eip: {
        value: cdktf.booleanToHclTerraform(this._autoCreateEip),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cam_role_name: {
        value: cdktf.stringToHclTerraform(this._camRoleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu: {
        value: cdktf.numberToHclTerraform(this._cpu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cpu_type: {
        value: cdktf.stringToHclTerraform(this._cpuType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_config_options: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._dnsConfigOptions),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      dns_names_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsNamesServers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      dns_searches: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsSearches),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      eip_delete_policy: {
        value: cdktf.booleanToHclTerraform(this._eipDeletePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      eip_max_bandwidth_out: {
        value: cdktf.numberToHclTerraform(this._eipMaxBandwidthOut),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eip_service_provider: {
        value: cdktf.stringToHclTerraform(this._eipServiceProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      existed_eip_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._existedEipIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      gpu_count: {
        value: cdktf.numberToHclTerraform(this._gpuCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gpu_type: {
        value: cdktf.stringToHclTerraform(this._gpuType),
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
      memory: {
        value: cdktf.numberToHclTerraform(this._memory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restart_policy: {
        value: cdktf.stringToHclTerraform(this._restartPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cbs_volume: {
        value: cdktf.listMapperHcl(eksContainerInstanceCbsVolumeToHclTerraform, true)(this._cbsVolume.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EksContainerInstanceCbsVolumeList",
      },
      container: {
        value: cdktf.listMapperHcl(eksContainerInstanceContainerToHclTerraform, true)(this._container.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EksContainerInstanceContainerList",
      },
      image_registry_credential: {
        value: cdktf.listMapperHcl(eksContainerInstanceImageRegistryCredentialToHclTerraform, true)(this._imageRegistryCredential.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EksContainerInstanceImageRegistryCredentialList",
      },
      init_container: {
        value: cdktf.listMapperHcl(eksContainerInstanceInitContainerToHclTerraform, true)(this._initContainer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EksContainerInstanceInitContainerList",
      },
      nfs_volume: {
        value: cdktf.listMapperHcl(eksContainerInstanceNfsVolumeToHclTerraform, true)(this._nfsVolume.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EksContainerInstanceNfsVolumeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
