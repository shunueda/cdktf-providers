// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CsEdgeKubernetesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#availability_zone CsEdgeKubernetes#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#client_cert CsEdgeKubernetes#client_cert}
  */
  readonly clientCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#client_key CsEdgeKubernetes#client_key}
  */
  readonly clientKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#cluster_ca_cert CsEdgeKubernetes#cluster_ca_cert}
  */
  readonly clusterCaCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#cluster_spec CsEdgeKubernetes#cluster_spec}
  */
  readonly clusterSpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#deletion_protection CsEdgeKubernetes#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#force_update CsEdgeKubernetes#force_update}
  */
  readonly forceUpdate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#id CsEdgeKubernetes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#install_cloud_monitor CsEdgeKubernetes#install_cloud_monitor}
  */
  readonly installCloudMonitor?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#is_enterprise_security_group CsEdgeKubernetes#is_enterprise_security_group}
  */
  readonly isEnterpriseSecurityGroup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#key_name CsEdgeKubernetes#key_name}
  */
  readonly keyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#kube_config CsEdgeKubernetes#kube_config}
  */
  readonly kubeConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#load_balancer_spec CsEdgeKubernetes#load_balancer_spec}
  */
  readonly loadBalancerSpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#name CsEdgeKubernetes#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#name_prefix CsEdgeKubernetes#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#new_nat_gateway CsEdgeKubernetes#new_nat_gateway}
  */
  readonly newNatGateway?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#node_cidr_mask CsEdgeKubernetes#node_cidr_mask}
  */
  readonly nodeCidrMask?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#password CsEdgeKubernetes#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#pod_cidr CsEdgeKubernetes#pod_cidr}
  */
  readonly podCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#proxy_mode CsEdgeKubernetes#proxy_mode}
  */
  readonly proxyMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#rds_instances CsEdgeKubernetes#rds_instances}
  */
  readonly rdsInstances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#resource_group_id CsEdgeKubernetes#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#retain_resources CsEdgeKubernetes#retain_resources}
  */
  readonly retainResources?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#runtime CsEdgeKubernetes#runtime}
  */
  readonly runtime?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#security_group_id CsEdgeKubernetes#security_group_id}
  */
  readonly securityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#service_cidr CsEdgeKubernetes#service_cidr}
  */
  readonly serviceCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#skip_set_certificate_authority CsEdgeKubernetes#skip_set_certificate_authority}
  */
  readonly skipSetCertificateAuthority?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#slb_internet_enabled CsEdgeKubernetes#slb_internet_enabled}
  */
  readonly slbInternetEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#tags CsEdgeKubernetes#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#user_data CsEdgeKubernetes#user_data}
  */
  readonly userData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#version CsEdgeKubernetes#version}
  */
  readonly version?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#worker_disk_category CsEdgeKubernetes#worker_disk_category}
  */
  readonly workerDiskCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#worker_disk_performance_level CsEdgeKubernetes#worker_disk_performance_level}
  */
  readonly workerDiskPerformanceLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#worker_disk_size CsEdgeKubernetes#worker_disk_size}
  */
  readonly workerDiskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#worker_disk_snapshot_policy_id CsEdgeKubernetes#worker_disk_snapshot_policy_id}
  */
  readonly workerDiskSnapshotPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#worker_instance_charge_type CsEdgeKubernetes#worker_instance_charge_type}
  */
  readonly workerInstanceChargeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#worker_instance_types CsEdgeKubernetes#worker_instance_types}
  */
  readonly workerInstanceTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#worker_number CsEdgeKubernetes#worker_number}
  */
  readonly workerNumber: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#worker_vswitch_ids CsEdgeKubernetes#worker_vswitch_ids}
  */
  readonly workerVswitchIds: string[];
  /**
  * addons block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#addons CsEdgeKubernetes#addons}
  */
  readonly addons?: CsEdgeKubernetesAddons[] | cdktf.IResolvable;
  /**
  * log_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#log_config CsEdgeKubernetes#log_config}
  */
  readonly logConfig?: CsEdgeKubernetesLogConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#timeouts CsEdgeKubernetes#timeouts}
  */
  readonly timeouts?: CsEdgeKubernetesTimeouts;
  /**
  * worker_data_disks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#worker_data_disks CsEdgeKubernetes#worker_data_disks}
  */
  readonly workerDataDisks?: CsEdgeKubernetesWorkerDataDisks[] | cdktf.IResolvable;
}
export interface CsEdgeKubernetesWorkerNodes {
}

export function csEdgeKubernetesWorkerNodesToTerraform(struct?: CsEdgeKubernetesWorkerNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function csEdgeKubernetesWorkerNodesToHclTerraform(struct?: CsEdgeKubernetesWorkerNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CsEdgeKubernetesWorkerNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CsEdgeKubernetesWorkerNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsEdgeKubernetesWorkerNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }
}

export class CsEdgeKubernetesWorkerNodesList extends cdktf.ComplexList {

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
  public get(index: number): CsEdgeKubernetesWorkerNodesOutputReference {
    return new CsEdgeKubernetesWorkerNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CsEdgeKubernetesAddons {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#config CsEdgeKubernetes#config}
  */
  readonly config?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#disabled CsEdgeKubernetes#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#name CsEdgeKubernetes#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#version CsEdgeKubernetes#version}
  */
  readonly version?: string;
}

export function csEdgeKubernetesAddonsToTerraform(struct?: CsEdgeKubernetesAddons | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.stringToTerraform(struct!.config),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function csEdgeKubernetesAddonsToHclTerraform(struct?: CsEdgeKubernetesAddons | cdktf.IResolvable): any {
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
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class CsEdgeKubernetesAddonsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CsEdgeKubernetesAddons | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsEdgeKubernetesAddons | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._disabled = undefined;
      this._name = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._disabled = value.disabled;
      this._name = value.name;
      this._version = value.version;
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

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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

  // version - computed: false, optional: true, required: false
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

export class CsEdgeKubernetesAddonsList extends cdktf.ComplexList {
  public internalValue? : CsEdgeKubernetesAddons[] | cdktf.IResolvable

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
  public get(index: number): CsEdgeKubernetesAddonsOutputReference {
    return new CsEdgeKubernetesAddonsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CsEdgeKubernetesLogConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#project CsEdgeKubernetes#project}
  */
  readonly project?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#type CsEdgeKubernetes#type}
  */
  readonly type: string;
}

export function csEdgeKubernetesLogConfigToTerraform(struct?: CsEdgeKubernetesLogConfigOutputReference | CsEdgeKubernetesLogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project: cdktf.stringToTerraform(struct!.project),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function csEdgeKubernetesLogConfigToHclTerraform(struct?: CsEdgeKubernetesLogConfigOutputReference | CsEdgeKubernetesLogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CsEdgeKubernetesLogConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CsEdgeKubernetesLogConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsEdgeKubernetesLogConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._project = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._project = value.project;
      this._type = value.type;
    }
  }

  // project - computed: false, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
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
export interface CsEdgeKubernetesTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#create CsEdgeKubernetes#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#delete CsEdgeKubernetes#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#update CsEdgeKubernetes#update}
  */
  readonly update?: string;
}

export function csEdgeKubernetesTimeoutsToTerraform(struct?: CsEdgeKubernetesTimeouts | cdktf.IResolvable): any {
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


export function csEdgeKubernetesTimeoutsToHclTerraform(struct?: CsEdgeKubernetesTimeouts | cdktf.IResolvable): any {
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

export class CsEdgeKubernetesTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CsEdgeKubernetesTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CsEdgeKubernetesTimeouts | cdktf.IResolvable | undefined) {
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
export interface CsEdgeKubernetesWorkerDataDisks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#auto_snapshot_policy_id CsEdgeKubernetes#auto_snapshot_policy_id}
  */
  readonly autoSnapshotPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#category CsEdgeKubernetes#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#device CsEdgeKubernetes#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#encrypted CsEdgeKubernetes#encrypted}
  */
  readonly encrypted?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#kms_key_id CsEdgeKubernetes#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#name CsEdgeKubernetes#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#performance_level CsEdgeKubernetes#performance_level}
  */
  readonly performanceLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#size CsEdgeKubernetes#size}
  */
  readonly size?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#snapshot_id CsEdgeKubernetes#snapshot_id}
  */
  readonly snapshotId?: string;
}

export function csEdgeKubernetesWorkerDataDisksToTerraform(struct?: CsEdgeKubernetesWorkerDataDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_snapshot_policy_id: cdktf.stringToTerraform(struct!.autoSnapshotPolicyId),
    category: cdktf.stringToTerraform(struct!.category),
    device: cdktf.stringToTerraform(struct!.device),
    encrypted: cdktf.stringToTerraform(struct!.encrypted),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    name: cdktf.stringToTerraform(struct!.name),
    performance_level: cdktf.stringToTerraform(struct!.performanceLevel),
    size: cdktf.stringToTerraform(struct!.size),
    snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
  }
}


export function csEdgeKubernetesWorkerDataDisksToHclTerraform(struct?: CsEdgeKubernetesWorkerDataDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_snapshot_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.autoSnapshotPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encrypted: {
      value: cdktf.stringToHclTerraform(struct!.encrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
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
    performance_level: {
      value: cdktf.stringToHclTerraform(struct!.performanceLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot_id: {
      value: cdktf.stringToHclTerraform(struct!.snapshotId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CsEdgeKubernetesWorkerDataDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CsEdgeKubernetesWorkerDataDisks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoSnapshotPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoSnapshotPolicyId = this._autoSnapshotPolicyId;
    }
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._encrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypted = this._encrypted;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._performanceLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceLevel = this._performanceLevel;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._snapshotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotId = this._snapshotId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsEdgeKubernetesWorkerDataDisks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoSnapshotPolicyId = undefined;
      this._category = undefined;
      this._device = undefined;
      this._encrypted = undefined;
      this._kmsKeyId = undefined;
      this._name = undefined;
      this._performanceLevel = undefined;
      this._size = undefined;
      this._snapshotId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoSnapshotPolicyId = value.autoSnapshotPolicyId;
      this._category = value.category;
      this._device = value.device;
      this._encrypted = value.encrypted;
      this._kmsKeyId = value.kmsKeyId;
      this._name = value.name;
      this._performanceLevel = value.performanceLevel;
      this._size = value.size;
      this._snapshotId = value.snapshotId;
    }
  }

  // auto_snapshot_policy_id - computed: false, optional: true, required: false
  private _autoSnapshotPolicyId?: string; 
  public get autoSnapshotPolicyId() {
    return this.getStringAttribute('auto_snapshot_policy_id');
  }
  public set autoSnapshotPolicyId(value: string) {
    this._autoSnapshotPolicyId = value;
  }
  public resetAutoSnapshotPolicyId() {
    this._autoSnapshotPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSnapshotPolicyIdInput() {
    return this._autoSnapshotPolicyId;
  }

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // encrypted - computed: false, optional: true, required: false
  private _encrypted?: string; 
  public get encrypted() {
    return this.getStringAttribute('encrypted');
  }
  public set encrypted(value: string) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
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

  // performance_level - computed: false, optional: true, required: false
  private _performanceLevel?: string; 
  public get performanceLevel() {
    return this.getStringAttribute('performance_level');
  }
  public set performanceLevel(value: string) {
    this._performanceLevel = value;
  }
  public resetPerformanceLevel() {
    this._performanceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceLevelInput() {
    return this._performanceLevel;
  }

  // size - computed: false, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // snapshot_id - computed: false, optional: true, required: false
  private _snapshotId?: string; 
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string) {
    this._snapshotId = value;
  }
  public resetSnapshotId() {
    this._snapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
  }
}

export class CsEdgeKubernetesWorkerDataDisksList extends cdktf.ComplexList {
  public internalValue? : CsEdgeKubernetesWorkerDataDisks[] | cdktf.IResolvable

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
  public get(index: number): CsEdgeKubernetesWorkerDataDisksOutputReference {
    return new CsEdgeKubernetesWorkerDataDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes alicloud_cs_edge_kubernetes}
*/
export class CsEdgeKubernetes extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cs_edge_kubernetes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CsEdgeKubernetes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CsEdgeKubernetes to import
  * @param importFromId The id of the existing CsEdgeKubernetes that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CsEdgeKubernetes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cs_edge_kubernetes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_edge_kubernetes alicloud_cs_edge_kubernetes} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CsEdgeKubernetesConfig
  */
  public constructor(scope: Construct, id: string, config: CsEdgeKubernetesConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cs_edge_kubernetes',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityZone = config.availabilityZone;
    this._clientCert = config.clientCert;
    this._clientKey = config.clientKey;
    this._clusterCaCert = config.clusterCaCert;
    this._clusterSpec = config.clusterSpec;
    this._deletionProtection = config.deletionProtection;
    this._forceUpdate = config.forceUpdate;
    this._id = config.id;
    this._installCloudMonitor = config.installCloudMonitor;
    this._isEnterpriseSecurityGroup = config.isEnterpriseSecurityGroup;
    this._keyName = config.keyName;
    this._kubeConfig = config.kubeConfig;
    this._loadBalancerSpec = config.loadBalancerSpec;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._newNatGateway = config.newNatGateway;
    this._nodeCidrMask = config.nodeCidrMask;
    this._password = config.password;
    this._podCidr = config.podCidr;
    this._proxyMode = config.proxyMode;
    this._rdsInstances = config.rdsInstances;
    this._resourceGroupId = config.resourceGroupId;
    this._retainResources = config.retainResources;
    this._runtime = config.runtime;
    this._securityGroupId = config.securityGroupId;
    this._serviceCidr = config.serviceCidr;
    this._skipSetCertificateAuthority = config.skipSetCertificateAuthority;
    this._slbInternetEnabled = config.slbInternetEnabled;
    this._tags = config.tags;
    this._userData = config.userData;
    this._version = config.version;
    this._workerDiskCategory = config.workerDiskCategory;
    this._workerDiskPerformanceLevel = config.workerDiskPerformanceLevel;
    this._workerDiskSize = config.workerDiskSize;
    this._workerDiskSnapshotPolicyId = config.workerDiskSnapshotPolicyId;
    this._workerInstanceChargeType = config.workerInstanceChargeType;
    this._workerInstanceTypes = config.workerInstanceTypes;
    this._workerNumber = config.workerNumber;
    this._workerVswitchIds = config.workerVswitchIds;
    this._addons.internalValue = config.addons;
    this._logConfig.internalValue = config.logConfig;
    this._timeouts.internalValue = config.timeouts;
    this._workerDataDisks.internalValue = config.workerDataDisks;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // certificate_authority - computed: true, optional: false, required: false
  private _certificateAuthority = new cdktf.StringMap(this, "certificate_authority");
  public get certificateAuthority() {
    return this._certificateAuthority;
  }

  // client_cert - computed: false, optional: true, required: false
  private _clientCert?: string; 
  public get clientCert() {
    return this.getStringAttribute('client_cert');
  }
  public set clientCert(value: string) {
    this._clientCert = value;
  }
  public resetClientCert() {
    this._clientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertInput() {
    return this._clientCert;
  }

  // client_key - computed: false, optional: true, required: false
  private _clientKey?: string; 
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }
  public set clientKey(value: string) {
    this._clientKey = value;
  }
  public resetClientKey() {
    this._clientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey;
  }

  // cluster_ca_cert - computed: false, optional: true, required: false
  private _clusterCaCert?: string; 
  public get clusterCaCert() {
    return this.getStringAttribute('cluster_ca_cert');
  }
  public set clusterCaCert(value: string) {
    this._clusterCaCert = value;
  }
  public resetClusterCaCert() {
    this._clusterCaCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterCaCertInput() {
    return this._clusterCaCert;
  }

  // cluster_spec - computed: true, optional: true, required: false
  private _clusterSpec?: string; 
  public get clusterSpec() {
    return this.getStringAttribute('cluster_spec');
  }
  public set clusterSpec(value: string) {
    this._clusterSpec = value;
  }
  public resetClusterSpec() {
    this._clusterSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterSpecInput() {
    return this._clusterSpec;
  }

  // connections - computed: true, optional: false, required: false
  private _connections = new cdktf.StringMap(this, "connections");
  public get connections() {
    return this._connections;
  }

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
  }

  // force_update - computed: false, optional: true, required: false
  private _forceUpdate?: boolean | cdktf.IResolvable; 
  public get forceUpdate() {
    return this.getBooleanAttribute('force_update');
  }
  public set forceUpdate(value: boolean | cdktf.IResolvable) {
    this._forceUpdate = value;
  }
  public resetForceUpdate() {
    this._forceUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceUpdateInput() {
    return this._forceUpdate;
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

  // install_cloud_monitor - computed: false, optional: true, required: false
  private _installCloudMonitor?: boolean | cdktf.IResolvable; 
  public get installCloudMonitor() {
    return this.getBooleanAttribute('install_cloud_monitor');
  }
  public set installCloudMonitor(value: boolean | cdktf.IResolvable) {
    this._installCloudMonitor = value;
  }
  public resetInstallCloudMonitor() {
    this._installCloudMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installCloudMonitorInput() {
    return this._installCloudMonitor;
  }

  // is_enterprise_security_group - computed: true, optional: true, required: false
  private _isEnterpriseSecurityGroup?: boolean | cdktf.IResolvable; 
  public get isEnterpriseSecurityGroup() {
    return this.getBooleanAttribute('is_enterprise_security_group');
  }
  public set isEnterpriseSecurityGroup(value: boolean | cdktf.IResolvable) {
    this._isEnterpriseSecurityGroup = value;
  }
  public resetIsEnterpriseSecurityGroup() {
    this._isEnterpriseSecurityGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnterpriseSecurityGroupInput() {
    return this._isEnterpriseSecurityGroup;
  }

  // key_name - computed: false, optional: true, required: false
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  public resetKeyName() {
    this._keyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // kube_config - computed: false, optional: true, required: false
  private _kubeConfig?: string; 
  public get kubeConfig() {
    return this.getStringAttribute('kube_config');
  }
  public set kubeConfig(value: string) {
    this._kubeConfig = value;
  }
  public resetKubeConfig() {
    this._kubeConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeConfigInput() {
    return this._kubeConfig;
  }

  // load_balancer_spec - computed: true, optional: true, required: false
  private _loadBalancerSpec?: string; 
  public get loadBalancerSpec() {
    return this.getStringAttribute('load_balancer_spec');
  }
  public set loadBalancerSpec(value: string) {
    this._loadBalancerSpec = value;
  }
  public resetLoadBalancerSpec() {
    this._loadBalancerSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerSpecInput() {
    return this._loadBalancerSpec;
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

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
  }

  // nat_gateway_id - computed: true, optional: false, required: false
  public get natGatewayId() {
    return this.getStringAttribute('nat_gateway_id');
  }

  // new_nat_gateway - computed: false, optional: true, required: false
  private _newNatGateway?: boolean | cdktf.IResolvable; 
  public get newNatGateway() {
    return this.getBooleanAttribute('new_nat_gateway');
  }
  public set newNatGateway(value: boolean | cdktf.IResolvable) {
    this._newNatGateway = value;
  }
  public resetNewNatGateway() {
    this._newNatGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newNatGatewayInput() {
    return this._newNatGateway;
  }

  // node_cidr_mask - computed: false, optional: true, required: false
  private _nodeCidrMask?: number; 
  public get nodeCidrMask() {
    return this.getNumberAttribute('node_cidr_mask');
  }
  public set nodeCidrMask(value: number) {
    this._nodeCidrMask = value;
  }
  public resetNodeCidrMask() {
    this._nodeCidrMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCidrMaskInput() {
    return this._nodeCidrMask;
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

  // pod_cidr - computed: false, optional: true, required: false
  private _podCidr?: string; 
  public get podCidr() {
    return this.getStringAttribute('pod_cidr');
  }
  public set podCidr(value: string) {
    this._podCidr = value;
  }
  public resetPodCidr() {
    this._podCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podCidrInput() {
    return this._podCidr;
  }

  // proxy_mode - computed: false, optional: true, required: false
  private _proxyMode?: string; 
  public get proxyMode() {
    return this.getStringAttribute('proxy_mode');
  }
  public set proxyMode(value: string) {
    this._proxyMode = value;
  }
  public resetProxyMode() {
    this._proxyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyModeInput() {
    return this._proxyMode;
  }

  // rds_instances - computed: false, optional: true, required: false
  private _rdsInstances?: string[]; 
  public get rdsInstances() {
    return this.getListAttribute('rds_instances');
  }
  public set rdsInstances(value: string[]) {
    this._rdsInstances = value;
  }
  public resetRdsInstances() {
    this._rdsInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdsInstancesInput() {
    return this._rdsInstances;
  }

  // resource_group_id - computed: true, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // retain_resources - computed: false, optional: true, required: false
  private _retainResources?: string[]; 
  public get retainResources() {
    return this.getListAttribute('retain_resources');
  }
  public set retainResources(value: string[]) {
    this._retainResources = value;
  }
  public resetRetainResources() {
    this._retainResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainResourcesInput() {
    return this._retainResources;
  }

  // runtime - computed: false, optional: true, required: false
  private _runtime?: { [key: string]: string }; 
  public get runtime() {
    return this.getStringMapAttribute('runtime');
  }
  public set runtime(value: { [key: string]: string }) {
    this._runtime = value;
  }
  public resetRuntime() {
    this._runtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeInput() {
    return this._runtime;
  }

  // security_group_id - computed: true, optional: true, required: false
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  public resetSecurityGroupId() {
    this._securityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // service_cidr - computed: false, optional: true, required: false
  private _serviceCidr?: string; 
  public get serviceCidr() {
    return this.getStringAttribute('service_cidr');
  }
  public set serviceCidr(value: string) {
    this._serviceCidr = value;
  }
  public resetServiceCidr() {
    this._serviceCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceCidrInput() {
    return this._serviceCidr;
  }

  // skip_set_certificate_authority - computed: false, optional: true, required: false
  private _skipSetCertificateAuthority?: boolean | cdktf.IResolvable; 
  public get skipSetCertificateAuthority() {
    return this.getBooleanAttribute('skip_set_certificate_authority');
  }
  public set skipSetCertificateAuthority(value: boolean | cdktf.IResolvable) {
    this._skipSetCertificateAuthority = value;
  }
  public resetSkipSetCertificateAuthority() {
    this._skipSetCertificateAuthority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipSetCertificateAuthorityInput() {
    return this._skipSetCertificateAuthority;
  }

  // slb_internet - computed: true, optional: false, required: false
  public get slbInternet() {
    return this.getStringAttribute('slb_internet');
  }

  // slb_internet_enabled - computed: false, optional: true, required: false
  private _slbInternetEnabled?: boolean | cdktf.IResolvable; 
  public get slbInternetEnabled() {
    return this.getBooleanAttribute('slb_internet_enabled');
  }
  public set slbInternetEnabled(value: boolean | cdktf.IResolvable) {
    this._slbInternetEnabled = value;
  }
  public resetSlbInternetEnabled() {
    this._slbInternetEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbInternetEnabledInput() {
    return this._slbInternetEnabled;
  }

  // slb_intranet - computed: true, optional: false, required: false
  public get slbIntranet() {
    return this.getStringAttribute('slb_intranet');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // user_data - computed: false, optional: true, required: false
  private _userData?: string; 
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData;
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

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // worker_disk_category - computed: false, optional: true, required: false
  private _workerDiskCategory?: string; 
  public get workerDiskCategory() {
    return this.getStringAttribute('worker_disk_category');
  }
  public set workerDiskCategory(value: string) {
    this._workerDiskCategory = value;
  }
  public resetWorkerDiskCategory() {
    this._workerDiskCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerDiskCategoryInput() {
    return this._workerDiskCategory;
  }

  // worker_disk_performance_level - computed: false, optional: true, required: false
  private _workerDiskPerformanceLevel?: string; 
  public get workerDiskPerformanceLevel() {
    return this.getStringAttribute('worker_disk_performance_level');
  }
  public set workerDiskPerformanceLevel(value: string) {
    this._workerDiskPerformanceLevel = value;
  }
  public resetWorkerDiskPerformanceLevel() {
    this._workerDiskPerformanceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerDiskPerformanceLevelInput() {
    return this._workerDiskPerformanceLevel;
  }

  // worker_disk_size - computed: false, optional: true, required: false
  private _workerDiskSize?: number; 
  public get workerDiskSize() {
    return this.getNumberAttribute('worker_disk_size');
  }
  public set workerDiskSize(value: number) {
    this._workerDiskSize = value;
  }
  public resetWorkerDiskSize() {
    this._workerDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerDiskSizeInput() {
    return this._workerDiskSize;
  }

  // worker_disk_snapshot_policy_id - computed: false, optional: true, required: false
  private _workerDiskSnapshotPolicyId?: string; 
  public get workerDiskSnapshotPolicyId() {
    return this.getStringAttribute('worker_disk_snapshot_policy_id');
  }
  public set workerDiskSnapshotPolicyId(value: string) {
    this._workerDiskSnapshotPolicyId = value;
  }
  public resetWorkerDiskSnapshotPolicyId() {
    this._workerDiskSnapshotPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerDiskSnapshotPolicyIdInput() {
    return this._workerDiskSnapshotPolicyId;
  }

  // worker_instance_charge_type - computed: false, optional: true, required: false
  private _workerInstanceChargeType?: string; 
  public get workerInstanceChargeType() {
    return this.getStringAttribute('worker_instance_charge_type');
  }
  public set workerInstanceChargeType(value: string) {
    this._workerInstanceChargeType = value;
  }
  public resetWorkerInstanceChargeType() {
    this._workerInstanceChargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerInstanceChargeTypeInput() {
    return this._workerInstanceChargeType;
  }

  // worker_instance_types - computed: false, optional: false, required: true
  private _workerInstanceTypes?: string[]; 
  public get workerInstanceTypes() {
    return this.getListAttribute('worker_instance_types');
  }
  public set workerInstanceTypes(value: string[]) {
    this._workerInstanceTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workerInstanceTypesInput() {
    return this._workerInstanceTypes;
  }

  // worker_nodes - computed: true, optional: false, required: false
  private _workerNodes = new CsEdgeKubernetesWorkerNodesList(this, "worker_nodes", false);
  public get workerNodes() {
    return this._workerNodes;
  }

  // worker_number - computed: false, optional: false, required: true
  private _workerNumber?: number; 
  public get workerNumber() {
    return this.getNumberAttribute('worker_number');
  }
  public set workerNumber(value: number) {
    this._workerNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workerNumberInput() {
    return this._workerNumber;
  }

  // worker_ram_role_name - computed: true, optional: false, required: false
  public get workerRamRoleName() {
    return this.getStringAttribute('worker_ram_role_name');
  }

  // worker_vswitch_ids - computed: false, optional: false, required: true
  private _workerVswitchIds?: string[]; 
  public get workerVswitchIds() {
    return this.getListAttribute('worker_vswitch_ids');
  }
  public set workerVswitchIds(value: string[]) {
    this._workerVswitchIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workerVswitchIdsInput() {
    return this._workerVswitchIds;
  }

  // addons - computed: false, optional: true, required: false
  private _addons = new CsEdgeKubernetesAddonsList(this, "addons", false);
  public get addons() {
    return this._addons;
  }
  public putAddons(value: CsEdgeKubernetesAddons[] | cdktf.IResolvable) {
    this._addons.internalValue = value;
  }
  public resetAddons() {
    this._addons.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonsInput() {
    return this._addons.internalValue;
  }

  // log_config - computed: false, optional: true, required: false
  private _logConfig = new CsEdgeKubernetesLogConfigOutputReference(this, "log_config");
  public get logConfig() {
    return this._logConfig;
  }
  public putLogConfig(value: CsEdgeKubernetesLogConfig) {
    this._logConfig.internalValue = value;
  }
  public resetLogConfig() {
    this._logConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logConfigInput() {
    return this._logConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CsEdgeKubernetesTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CsEdgeKubernetesTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // worker_data_disks - computed: false, optional: true, required: false
  private _workerDataDisks = new CsEdgeKubernetesWorkerDataDisksList(this, "worker_data_disks", false);
  public get workerDataDisks() {
    return this._workerDataDisks;
  }
  public putWorkerDataDisks(value: CsEdgeKubernetesWorkerDataDisks[] | cdktf.IResolvable) {
    this._workerDataDisks.internalValue = value;
  }
  public resetWorkerDataDisks() {
    this._workerDataDisks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerDataDisksInput() {
    return this._workerDataDisks.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      client_cert: cdktf.stringToTerraform(this._clientCert),
      client_key: cdktf.stringToTerraform(this._clientKey),
      cluster_ca_cert: cdktf.stringToTerraform(this._clusterCaCert),
      cluster_spec: cdktf.stringToTerraform(this._clusterSpec),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      force_update: cdktf.booleanToTerraform(this._forceUpdate),
      id: cdktf.stringToTerraform(this._id),
      install_cloud_monitor: cdktf.booleanToTerraform(this._installCloudMonitor),
      is_enterprise_security_group: cdktf.booleanToTerraform(this._isEnterpriseSecurityGroup),
      key_name: cdktf.stringToTerraform(this._keyName),
      kube_config: cdktf.stringToTerraform(this._kubeConfig),
      load_balancer_spec: cdktf.stringToTerraform(this._loadBalancerSpec),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      new_nat_gateway: cdktf.booleanToTerraform(this._newNatGateway),
      node_cidr_mask: cdktf.numberToTerraform(this._nodeCidrMask),
      password: cdktf.stringToTerraform(this._password),
      pod_cidr: cdktf.stringToTerraform(this._podCidr),
      proxy_mode: cdktf.stringToTerraform(this._proxyMode),
      rds_instances: cdktf.listMapper(cdktf.stringToTerraform, false)(this._rdsInstances),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      retain_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(this._retainResources),
      runtime: cdktf.hashMapper(cdktf.stringToTerraform)(this._runtime),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      service_cidr: cdktf.stringToTerraform(this._serviceCidr),
      skip_set_certificate_authority: cdktf.booleanToTerraform(this._skipSetCertificateAuthority),
      slb_internet_enabled: cdktf.booleanToTerraform(this._slbInternetEnabled),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      user_data: cdktf.stringToTerraform(this._userData),
      version: cdktf.stringToTerraform(this._version),
      worker_disk_category: cdktf.stringToTerraform(this._workerDiskCategory),
      worker_disk_performance_level: cdktf.stringToTerraform(this._workerDiskPerformanceLevel),
      worker_disk_size: cdktf.numberToTerraform(this._workerDiskSize),
      worker_disk_snapshot_policy_id: cdktf.stringToTerraform(this._workerDiskSnapshotPolicyId),
      worker_instance_charge_type: cdktf.stringToTerraform(this._workerInstanceChargeType),
      worker_instance_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._workerInstanceTypes),
      worker_number: cdktf.numberToTerraform(this._workerNumber),
      worker_vswitch_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._workerVswitchIds),
      addons: cdktf.listMapper(csEdgeKubernetesAddonsToTerraform, true)(this._addons.internalValue),
      log_config: csEdgeKubernetesLogConfigToTerraform(this._logConfig.internalValue),
      timeouts: csEdgeKubernetesTimeoutsToTerraform(this._timeouts.internalValue),
      worker_data_disks: cdktf.listMapper(csEdgeKubernetesWorkerDataDisksToTerraform, true)(this._workerDataDisks.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_cert: {
        value: cdktf.stringToHclTerraform(this._clientCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_key: {
        value: cdktf.stringToHclTerraform(this._clientKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_ca_cert: {
        value: cdktf.stringToHclTerraform(this._clusterCaCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_spec: {
        value: cdktf.stringToHclTerraform(this._clusterSpec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_update: {
        value: cdktf.booleanToHclTerraform(this._forceUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      install_cloud_monitor: {
        value: cdktf.booleanToHclTerraform(this._installCloudMonitor),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_enterprise_security_group: {
        value: cdktf.booleanToHclTerraform(this._isEnterpriseSecurityGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key_name: {
        value: cdktf.stringToHclTerraform(this._keyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kube_config: {
        value: cdktf.stringToHclTerraform(this._kubeConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_balancer_spec: {
        value: cdktf.stringToHclTerraform(this._loadBalancerSpec),
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
      name_prefix: {
        value: cdktf.stringToHclTerraform(this._namePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      new_nat_gateway: {
        value: cdktf.booleanToHclTerraform(this._newNatGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      node_cidr_mask: {
        value: cdktf.numberToHclTerraform(this._nodeCidrMask),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pod_cidr: {
        value: cdktf.stringToHclTerraform(this._podCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_mode: {
        value: cdktf.stringToHclTerraform(this._proxyMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rds_instances: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._rdsInstances),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retain_resources: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._retainResources),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      runtime: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._runtime),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      security_group_id: {
        value: cdktf.stringToHclTerraform(this._securityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_cidr: {
        value: cdktf.stringToHclTerraform(this._serviceCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_set_certificate_authority: {
        value: cdktf.booleanToHclTerraform(this._skipSetCertificateAuthority),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      slb_internet_enabled: {
        value: cdktf.booleanToHclTerraform(this._slbInternetEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      user_data: {
        value: cdktf.stringToHclTerraform(this._userData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      worker_disk_category: {
        value: cdktf.stringToHclTerraform(this._workerDiskCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      worker_disk_performance_level: {
        value: cdktf.stringToHclTerraform(this._workerDiskPerformanceLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      worker_disk_size: {
        value: cdktf.numberToHclTerraform(this._workerDiskSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      worker_disk_snapshot_policy_id: {
        value: cdktf.stringToHclTerraform(this._workerDiskSnapshotPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      worker_instance_charge_type: {
        value: cdktf.stringToHclTerraform(this._workerInstanceChargeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      worker_instance_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._workerInstanceTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      worker_number: {
        value: cdktf.numberToHclTerraform(this._workerNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      worker_vswitch_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._workerVswitchIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      addons: {
        value: cdktf.listMapperHcl(csEdgeKubernetesAddonsToHclTerraform, true)(this._addons.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CsEdgeKubernetesAddonsList",
      },
      log_config: {
        value: csEdgeKubernetesLogConfigToHclTerraform(this._logConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CsEdgeKubernetesLogConfigList",
      },
      timeouts: {
        value: csEdgeKubernetesTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CsEdgeKubernetesTimeouts",
      },
      worker_data_disks: {
        value: cdktf.listMapperHcl(csEdgeKubernetesWorkerDataDisksToHclTerraform, true)(this._workerDataDisks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CsEdgeKubernetesWorkerDataDisksList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
