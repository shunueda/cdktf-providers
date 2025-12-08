// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EhpcClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#account_type EhpcCluster#account_type}
  */
  readonly accountType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#auto_renew EhpcCluster#auto_renew}
  */
  readonly autoRenew?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#auto_renew_period EhpcCluster#auto_renew_period}
  */
  readonly autoRenewPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#client_version EhpcCluster#client_version}
  */
  readonly clientVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#cluster_name EhpcCluster#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#cluster_version EhpcCluster#cluster_version}
  */
  readonly clusterVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#compute_count EhpcCluster#compute_count}
  */
  readonly computeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#compute_enable_ht EhpcCluster#compute_enable_ht}
  */
  readonly computeEnableHt?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#compute_instance_type EhpcCluster#compute_instance_type}
  */
  readonly computeInstanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#compute_spot_price_limit EhpcCluster#compute_spot_price_limit}
  */
  readonly computeSpotPriceLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#compute_spot_strategy EhpcCluster#compute_spot_strategy}
  */
  readonly computeSpotStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#deploy_mode EhpcCluster#deploy_mode}
  */
  readonly deployMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#description EhpcCluster#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#domain EhpcCluster#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#ecs_charge_type EhpcCluster#ecs_charge_type}
  */
  readonly ecsChargeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#ehpc_version EhpcCluster#ehpc_version}
  */
  readonly ehpcVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#ha_enable EhpcCluster#ha_enable}
  */
  readonly haEnable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#id EhpcCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#image_id EhpcCluster#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#image_owner_alias EhpcCluster#image_owner_alias}
  */
  readonly imageOwnerAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#input_file_url EhpcCluster#input_file_url}
  */
  readonly inputFileUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#is_compute_ess EhpcCluster#is_compute_ess}
  */
  readonly isComputeEss?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#job_queue EhpcCluster#job_queue}
  */
  readonly jobQueue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#key_pair_name EhpcCluster#key_pair_name}
  */
  readonly keyPairName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#login_count EhpcCluster#login_count}
  */
  readonly loginCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#login_instance_type EhpcCluster#login_instance_type}
  */
  readonly loginInstanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#manager_count EhpcCluster#manager_count}
  */
  readonly managerCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#manager_instance_type EhpcCluster#manager_instance_type}
  */
  readonly managerInstanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#os_tag EhpcCluster#os_tag}
  */
  readonly osTag: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#password EhpcCluster#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#period EhpcCluster#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#period_unit EhpcCluster#period_unit}
  */
  readonly periodUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#plugin EhpcCluster#plugin}
  */
  readonly plugin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#ram_node_types EhpcCluster#ram_node_types}
  */
  readonly ramNodeTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#ram_role_name EhpcCluster#ram_role_name}
  */
  readonly ramRoleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#release_instance EhpcCluster#release_instance}
  */
  readonly releaseInstance?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#remote_directory EhpcCluster#remote_directory}
  */
  readonly remoteDirectory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#remote_vis_enable EhpcCluster#remote_vis_enable}
  */
  readonly remoteVisEnable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#resource_group_id EhpcCluster#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#scc_cluster_id EhpcCluster#scc_cluster_id}
  */
  readonly sccClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#scheduler_type EhpcCluster#scheduler_type}
  */
  readonly schedulerType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#security_group_id EhpcCluster#security_group_id}
  */
  readonly securityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#security_group_name EhpcCluster#security_group_name}
  */
  readonly securityGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#system_disk_level EhpcCluster#system_disk_level}
  */
  readonly systemDiskLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#system_disk_size EhpcCluster#system_disk_size}
  */
  readonly systemDiskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#system_disk_type EhpcCluster#system_disk_type}
  */
  readonly systemDiskType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#volume_id EhpcCluster#volume_id}
  */
  readonly volumeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#volume_mount_option EhpcCluster#volume_mount_option}
  */
  readonly volumeMountOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#volume_mountpoint EhpcCluster#volume_mountpoint}
  */
  readonly volumeMountpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#volume_protocol EhpcCluster#volume_protocol}
  */
  readonly volumeProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#volume_type EhpcCluster#volume_type}
  */
  readonly volumeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#vpc_id EhpcCluster#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#vswitch_id EhpcCluster#vswitch_id}
  */
  readonly vswitchId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#without_agent EhpcCluster#without_agent}
  */
  readonly withoutAgent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#without_elastic_ip EhpcCluster#without_elastic_ip}
  */
  readonly withoutElasticIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#zone_id EhpcCluster#zone_id}
  */
  readonly zoneId?: string;
  /**
  * additional_volumes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#additional_volumes EhpcCluster#additional_volumes}
  */
  readonly additionalVolumes?: EhpcClusterAdditionalVolumes[] | cdktf.IResolvable;
  /**
  * application block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#application EhpcCluster#application}
  */
  readonly application?: EhpcClusterApplication[] | cdktf.IResolvable;
  /**
  * post_install_script block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#post_install_script EhpcCluster#post_install_script}
  */
  readonly postInstallScript?: EhpcClusterPostInstallScript[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#timeouts EhpcCluster#timeouts}
  */
  readonly timeouts?: EhpcClusterTimeouts;
}
export interface EhpcClusterAdditionalVolumesRoles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#name EhpcCluster#name}
  */
  readonly name?: string;
}

export function ehpcClusterAdditionalVolumesRolesToTerraform(struct?: EhpcClusterAdditionalVolumesRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function ehpcClusterAdditionalVolumesRolesToHclTerraform(struct?: EhpcClusterAdditionalVolumesRoles | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EhpcClusterAdditionalVolumesRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EhpcClusterAdditionalVolumesRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EhpcClusterAdditionalVolumesRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class EhpcClusterAdditionalVolumesRolesList extends cdktf.ComplexList {
  public internalValue? : EhpcClusterAdditionalVolumesRoles[] | cdktf.IResolvable

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
  public get(index: number): EhpcClusterAdditionalVolumesRolesOutputReference {
    return new EhpcClusterAdditionalVolumesRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EhpcClusterAdditionalVolumes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#job_queue EhpcCluster#job_queue}
  */
  readonly jobQueue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#local_directory EhpcCluster#local_directory}
  */
  readonly localDirectory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#location EhpcCluster#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#remote_directory EhpcCluster#remote_directory}
  */
  readonly remoteDirectory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#volume_id EhpcCluster#volume_id}
  */
  readonly volumeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#volume_mount_option EhpcCluster#volume_mount_option}
  */
  readonly volumeMountOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#volume_mountpoint EhpcCluster#volume_mountpoint}
  */
  readonly volumeMountpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#volume_protocol EhpcCluster#volume_protocol}
  */
  readonly volumeProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#volume_type EhpcCluster#volume_type}
  */
  readonly volumeType?: string;
  /**
  * roles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#roles EhpcCluster#roles}
  */
  readonly roles?: EhpcClusterAdditionalVolumesRoles[] | cdktf.IResolvable;
}

export function ehpcClusterAdditionalVolumesToTerraform(struct?: EhpcClusterAdditionalVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    job_queue: cdktf.stringToTerraform(struct!.jobQueue),
    local_directory: cdktf.stringToTerraform(struct!.localDirectory),
    location: cdktf.stringToTerraform(struct!.location),
    remote_directory: cdktf.stringToTerraform(struct!.remoteDirectory),
    volume_id: cdktf.stringToTerraform(struct!.volumeId),
    volume_mount_option: cdktf.stringToTerraform(struct!.volumeMountOption),
    volume_mountpoint: cdktf.stringToTerraform(struct!.volumeMountpoint),
    volume_protocol: cdktf.stringToTerraform(struct!.volumeProtocol),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
    roles: cdktf.listMapper(ehpcClusterAdditionalVolumesRolesToTerraform, true)(struct!.roles),
  }
}


export function ehpcClusterAdditionalVolumesToHclTerraform(struct?: EhpcClusterAdditionalVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    job_queue: {
      value: cdktf.stringToHclTerraform(struct!.jobQueue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_directory: {
      value: cdktf.stringToHclTerraform(struct!.localDirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_directory: {
      value: cdktf.stringToHclTerraform(struct!.remoteDirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_id: {
      value: cdktf.stringToHclTerraform(struct!.volumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_mount_option: {
      value: cdktf.stringToHclTerraform(struct!.volumeMountOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_mountpoint: {
      value: cdktf.stringToHclTerraform(struct!.volumeMountpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_protocol: {
      value: cdktf.stringToHclTerraform(struct!.volumeProtocol),
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
    roles: {
      value: cdktf.listMapperHcl(ehpcClusterAdditionalVolumesRolesToHclTerraform, true)(struct!.roles),
      isBlock: true,
      type: "set",
      storageClassType: "EhpcClusterAdditionalVolumesRolesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EhpcClusterAdditionalVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EhpcClusterAdditionalVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jobQueue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobQueue = this._jobQueue;
    }
    if (this._localDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.localDirectory = this._localDirectory;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._remoteDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteDirectory = this._remoteDirectory;
    }
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    if (this._volumeMountOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMountOption = this._volumeMountOption;
    }
    if (this._volumeMountpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMountpoint = this._volumeMountpoint;
    }
    if (this._volumeProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeProtocol = this._volumeProtocol;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    if (this._roles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EhpcClusterAdditionalVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jobQueue = undefined;
      this._localDirectory = undefined;
      this._location = undefined;
      this._remoteDirectory = undefined;
      this._volumeId = undefined;
      this._volumeMountOption = undefined;
      this._volumeMountpoint = undefined;
      this._volumeProtocol = undefined;
      this._volumeType = undefined;
      this._roles.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jobQueue = value.jobQueue;
      this._localDirectory = value.localDirectory;
      this._location = value.location;
      this._remoteDirectory = value.remoteDirectory;
      this._volumeId = value.volumeId;
      this._volumeMountOption = value.volumeMountOption;
      this._volumeMountpoint = value.volumeMountpoint;
      this._volumeProtocol = value.volumeProtocol;
      this._volumeType = value.volumeType;
      this._roles.internalValue = value.roles;
    }
  }

  // job_queue - computed: false, optional: true, required: false
  private _jobQueue?: string; 
  public get jobQueue() {
    return this.getStringAttribute('job_queue');
  }
  public set jobQueue(value: string) {
    this._jobQueue = value;
  }
  public resetJobQueue() {
    this._jobQueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobQueueInput() {
    return this._jobQueue;
  }

  // local_directory - computed: false, optional: true, required: false
  private _localDirectory?: string; 
  public get localDirectory() {
    return this.getStringAttribute('local_directory');
  }
  public set localDirectory(value: string) {
    this._localDirectory = value;
  }
  public resetLocalDirectory() {
    this._localDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localDirectoryInput() {
    return this._localDirectory;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // remote_directory - computed: false, optional: true, required: false
  private _remoteDirectory?: string; 
  public get remoteDirectory() {
    return this.getStringAttribute('remote_directory');
  }
  public set remoteDirectory(value: string) {
    this._remoteDirectory = value;
  }
  public resetRemoteDirectory() {
    this._remoteDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteDirectoryInput() {
    return this._remoteDirectory;
  }

  // volume_id - computed: false, optional: true, required: false
  private _volumeId?: string; 
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }
  public resetVolumeId() {
    this._volumeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }

  // volume_mount_option - computed: false, optional: true, required: false
  private _volumeMountOption?: string; 
  public get volumeMountOption() {
    return this.getStringAttribute('volume_mount_option');
  }
  public set volumeMountOption(value: string) {
    this._volumeMountOption = value;
  }
  public resetVolumeMountOption() {
    this._volumeMountOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeMountOptionInput() {
    return this._volumeMountOption;
  }

  // volume_mountpoint - computed: false, optional: true, required: false
  private _volumeMountpoint?: string; 
  public get volumeMountpoint() {
    return this.getStringAttribute('volume_mountpoint');
  }
  public set volumeMountpoint(value: string) {
    this._volumeMountpoint = value;
  }
  public resetVolumeMountpoint() {
    this._volumeMountpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeMountpointInput() {
    return this._volumeMountpoint;
  }

  // volume_protocol - computed: false, optional: true, required: false
  private _volumeProtocol?: string; 
  public get volumeProtocol() {
    return this.getStringAttribute('volume_protocol');
  }
  public set volumeProtocol(value: string) {
    this._volumeProtocol = value;
  }
  public resetVolumeProtocol() {
    this._volumeProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeProtocolInput() {
    return this._volumeProtocol;
  }

  // volume_type - computed: false, optional: true, required: false
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  public resetVolumeType() {
    this._volumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }

  // roles - computed: false, optional: true, required: false
  private _roles = new EhpcClusterAdditionalVolumesRolesList(this, "roles", true);
  public get roles() {
    return this._roles;
  }
  public putRoles(value: EhpcClusterAdditionalVolumesRoles[] | cdktf.IResolvable) {
    this._roles.internalValue = value;
  }
  public resetRoles() {
    this._roles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles.internalValue;
  }
}

export class EhpcClusterAdditionalVolumesList extends cdktf.ComplexList {
  public internalValue? : EhpcClusterAdditionalVolumes[] | cdktf.IResolvable

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
  public get(index: number): EhpcClusterAdditionalVolumesOutputReference {
    return new EhpcClusterAdditionalVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EhpcClusterApplication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#tag EhpcCluster#tag}
  */
  readonly tag?: string;
}

export function ehpcClusterApplicationToTerraform(struct?: EhpcClusterApplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function ehpcClusterApplicationToHclTerraform(struct?: EhpcClusterApplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EhpcClusterApplicationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EhpcClusterApplication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EhpcClusterApplication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tag = value.tag;
    }
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class EhpcClusterApplicationList extends cdktf.ComplexList {
  public internalValue? : EhpcClusterApplication[] | cdktf.IResolvable

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
  public get(index: number): EhpcClusterApplicationOutputReference {
    return new EhpcClusterApplicationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EhpcClusterPostInstallScript {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#args EhpcCluster#args}
  */
  readonly args?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#url EhpcCluster#url}
  */
  readonly url?: string;
}

export function ehpcClusterPostInstallScriptToTerraform(struct?: EhpcClusterPostInstallScript | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.stringToTerraform(struct!.args),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function ehpcClusterPostInstallScriptToHclTerraform(struct?: EhpcClusterPostInstallScript | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.stringToHclTerraform(struct!.args),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EhpcClusterPostInstallScriptOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EhpcClusterPostInstallScript | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EhpcClusterPostInstallScript | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args = value.args;
      this._url = value.url;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string; 
  public get args() {
    return this.getStringAttribute('args');
  }
  public set args(value: string) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class EhpcClusterPostInstallScriptList extends cdktf.ComplexList {
  public internalValue? : EhpcClusterPostInstallScript[] | cdktf.IResolvable

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
  public get(index: number): EhpcClusterPostInstallScriptOutputReference {
    return new EhpcClusterPostInstallScriptOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EhpcClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#create EhpcCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#delete EhpcCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#update EhpcCluster#update}
  */
  readonly update?: string;
}

export function ehpcClusterTimeoutsToTerraform(struct?: EhpcClusterTimeouts | cdktf.IResolvable): any {
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


export function ehpcClusterTimeoutsToHclTerraform(struct?: EhpcClusterTimeouts | cdktf.IResolvable): any {
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

export class EhpcClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EhpcClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EhpcClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster alicloud_ehpc_cluster}
*/
export class EhpcCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ehpc_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EhpcCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EhpcCluster to import
  * @param importFromId The id of the existing EhpcCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EhpcCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ehpc_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_cluster alicloud_ehpc_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EhpcClusterConfig
  */
  public constructor(scope: Construct, id: string, config: EhpcClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ehpc_cluster',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.265.0',
        providerVersionConstraint: '1.265.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountType = config.accountType;
    this._autoRenew = config.autoRenew;
    this._autoRenewPeriod = config.autoRenewPeriod;
    this._clientVersion = config.clientVersion;
    this._clusterName = config.clusterName;
    this._clusterVersion = config.clusterVersion;
    this._computeCount = config.computeCount;
    this._computeEnableHt = config.computeEnableHt;
    this._computeInstanceType = config.computeInstanceType;
    this._computeSpotPriceLimit = config.computeSpotPriceLimit;
    this._computeSpotStrategy = config.computeSpotStrategy;
    this._deployMode = config.deployMode;
    this._description = config.description;
    this._domain = config.domain;
    this._ecsChargeType = config.ecsChargeType;
    this._ehpcVersion = config.ehpcVersion;
    this._haEnable = config.haEnable;
    this._id = config.id;
    this._imageId = config.imageId;
    this._imageOwnerAlias = config.imageOwnerAlias;
    this._inputFileUrl = config.inputFileUrl;
    this._isComputeEss = config.isComputeEss;
    this._jobQueue = config.jobQueue;
    this._keyPairName = config.keyPairName;
    this._loginCount = config.loginCount;
    this._loginInstanceType = config.loginInstanceType;
    this._managerCount = config.managerCount;
    this._managerInstanceType = config.managerInstanceType;
    this._osTag = config.osTag;
    this._password = config.password;
    this._period = config.period;
    this._periodUnit = config.periodUnit;
    this._plugin = config.plugin;
    this._ramNodeTypes = config.ramNodeTypes;
    this._ramRoleName = config.ramRoleName;
    this._releaseInstance = config.releaseInstance;
    this._remoteDirectory = config.remoteDirectory;
    this._remoteVisEnable = config.remoteVisEnable;
    this._resourceGroupId = config.resourceGroupId;
    this._sccClusterId = config.sccClusterId;
    this._schedulerType = config.schedulerType;
    this._securityGroupId = config.securityGroupId;
    this._securityGroupName = config.securityGroupName;
    this._systemDiskLevel = config.systemDiskLevel;
    this._systemDiskSize = config.systemDiskSize;
    this._systemDiskType = config.systemDiskType;
    this._volumeId = config.volumeId;
    this._volumeMountOption = config.volumeMountOption;
    this._volumeMountpoint = config.volumeMountpoint;
    this._volumeProtocol = config.volumeProtocol;
    this._volumeType = config.volumeType;
    this._vpcId = config.vpcId;
    this._vswitchId = config.vswitchId;
    this._withoutAgent = config.withoutAgent;
    this._withoutElasticIp = config.withoutElasticIp;
    this._zoneId = config.zoneId;
    this._additionalVolumes.internalValue = config.additionalVolumes;
    this._application.internalValue = config.application;
    this._postInstallScript.internalValue = config.postInstallScript;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_type - computed: true, optional: true, required: false
  private _accountType?: string; 
  public get accountType() {
    return this.getStringAttribute('account_type');
  }
  public set accountType(value: string) {
    this._accountType = value;
  }
  public resetAccountType() {
    this._accountType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountTypeInput() {
    return this._accountType;
  }

  // auto_renew - computed: false, optional: true, required: false
  private _autoRenew?: boolean | cdktf.IResolvable; 
  public get autoRenew() {
    return this.getBooleanAttribute('auto_renew');
  }
  public set autoRenew(value: boolean | cdktf.IResolvable) {
    this._autoRenew = value;
  }
  public resetAutoRenew() {
    this._autoRenew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewInput() {
    return this._autoRenew;
  }

  // auto_renew_period - computed: false, optional: true, required: false
  private _autoRenewPeriod?: number; 
  public get autoRenewPeriod() {
    return this.getNumberAttribute('auto_renew_period');
  }
  public set autoRenewPeriod(value: number) {
    this._autoRenewPeriod = value;
  }
  public resetAutoRenewPeriod() {
    this._autoRenewPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewPeriodInput() {
    return this._autoRenewPeriod;
  }

  // client_version - computed: true, optional: true, required: false
  private _clientVersion?: string; 
  public get clientVersion() {
    return this.getStringAttribute('client_version');
  }
  public set clientVersion(value: string) {
    this._clientVersion = value;
  }
  public resetClientVersion() {
    this._clientVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientVersionInput() {
    return this._clientVersion;
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // cluster_version - computed: true, optional: true, required: false
  private _clusterVersion?: string; 
  public get clusterVersion() {
    return this.getStringAttribute('cluster_version');
  }
  public set clusterVersion(value: string) {
    this._clusterVersion = value;
  }
  public resetClusterVersion() {
    this._clusterVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterVersionInput() {
    return this._clusterVersion;
  }

  // compute_count - computed: false, optional: false, required: true
  private _computeCount?: number; 
  public get computeCount() {
    return this.getNumberAttribute('compute_count');
  }
  public set computeCount(value: number) {
    this._computeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeCountInput() {
    return this._computeCount;
  }

  // compute_enable_ht - computed: false, optional: true, required: false
  private _computeEnableHt?: boolean | cdktf.IResolvable; 
  public get computeEnableHt() {
    return this.getBooleanAttribute('compute_enable_ht');
  }
  public set computeEnableHt(value: boolean | cdktf.IResolvable) {
    this._computeEnableHt = value;
  }
  public resetComputeEnableHt() {
    this._computeEnableHt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeEnableHtInput() {
    return this._computeEnableHt;
  }

  // compute_instance_type - computed: false, optional: false, required: true
  private _computeInstanceType?: string; 
  public get computeInstanceType() {
    return this.getStringAttribute('compute_instance_type');
  }
  public set computeInstanceType(value: string) {
    this._computeInstanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInstanceTypeInput() {
    return this._computeInstanceType;
  }

  // compute_spot_price_limit - computed: false, optional: true, required: false
  private _computeSpotPriceLimit?: string; 
  public get computeSpotPriceLimit() {
    return this.getStringAttribute('compute_spot_price_limit');
  }
  public set computeSpotPriceLimit(value: string) {
    this._computeSpotPriceLimit = value;
  }
  public resetComputeSpotPriceLimit() {
    this._computeSpotPriceLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeSpotPriceLimitInput() {
    return this._computeSpotPriceLimit;
  }

  // compute_spot_strategy - computed: false, optional: true, required: false
  private _computeSpotStrategy?: string; 
  public get computeSpotStrategy() {
    return this.getStringAttribute('compute_spot_strategy');
  }
  public set computeSpotStrategy(value: string) {
    this._computeSpotStrategy = value;
  }
  public resetComputeSpotStrategy() {
    this._computeSpotStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeSpotStrategyInput() {
    return this._computeSpotStrategy;
  }

  // deploy_mode - computed: true, optional: true, required: false
  private _deployMode?: string; 
  public get deployMode() {
    return this.getStringAttribute('deploy_mode');
  }
  public set deployMode(value: string) {
    this._deployMode = value;
  }
  public resetDeployMode() {
    this._deployMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployModeInput() {
    return this._deployMode;
  }

  // description - computed: true, optional: true, required: false
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

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // ecs_charge_type - computed: true, optional: true, required: false
  private _ecsChargeType?: string; 
  public get ecsChargeType() {
    return this.getStringAttribute('ecs_charge_type');
  }
  public set ecsChargeType(value: string) {
    this._ecsChargeType = value;
  }
  public resetEcsChargeType() {
    this._ecsChargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsChargeTypeInput() {
    return this._ecsChargeType;
  }

  // ehpc_version - computed: true, optional: true, required: false
  private _ehpcVersion?: string; 
  public get ehpcVersion() {
    return this.getStringAttribute('ehpc_version');
  }
  public set ehpcVersion(value: string) {
    this._ehpcVersion = value;
  }
  public resetEhpcVersion() {
    this._ehpcVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ehpcVersionInput() {
    return this._ehpcVersion;
  }

  // ha_enable - computed: true, optional: true, required: false
  private _haEnable?: boolean | cdktf.IResolvable; 
  public get haEnable() {
    return this.getBooleanAttribute('ha_enable');
  }
  public set haEnable(value: boolean | cdktf.IResolvable) {
    this._haEnable = value;
  }
  public resetHaEnable() {
    this._haEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haEnableInput() {
    return this._haEnable;
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

  // image_id - computed: true, optional: true, required: false
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // image_owner_alias - computed: true, optional: true, required: false
  private _imageOwnerAlias?: string; 
  public get imageOwnerAlias() {
    return this.getStringAttribute('image_owner_alias');
  }
  public set imageOwnerAlias(value: string) {
    this._imageOwnerAlias = value;
  }
  public resetImageOwnerAlias() {
    this._imageOwnerAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageOwnerAliasInput() {
    return this._imageOwnerAlias;
  }

  // input_file_url - computed: false, optional: true, required: false
  private _inputFileUrl?: string; 
  public get inputFileUrl() {
    return this.getStringAttribute('input_file_url');
  }
  public set inputFileUrl(value: string) {
    this._inputFileUrl = value;
  }
  public resetInputFileUrl() {
    this._inputFileUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputFileUrlInput() {
    return this._inputFileUrl;
  }

  // is_compute_ess - computed: false, optional: true, required: false
  private _isComputeEss?: boolean | cdktf.IResolvable; 
  public get isComputeEss() {
    return this.getBooleanAttribute('is_compute_ess');
  }
  public set isComputeEss(value: boolean | cdktf.IResolvable) {
    this._isComputeEss = value;
  }
  public resetIsComputeEss() {
    this._isComputeEss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isComputeEssInput() {
    return this._isComputeEss;
  }

  // job_queue - computed: false, optional: true, required: false
  private _jobQueue?: string; 
  public get jobQueue() {
    return this.getStringAttribute('job_queue');
  }
  public set jobQueue(value: string) {
    this._jobQueue = value;
  }
  public resetJobQueue() {
    this._jobQueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobQueueInput() {
    return this._jobQueue;
  }

  // key_pair_name - computed: false, optional: true, required: false
  private _keyPairName?: string; 
  public get keyPairName() {
    return this.getStringAttribute('key_pair_name');
  }
  public set keyPairName(value: string) {
    this._keyPairName = value;
  }
  public resetKeyPairName() {
    this._keyPairName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPairNameInput() {
    return this._keyPairName;
  }

  // login_count - computed: false, optional: false, required: true
  private _loginCount?: number; 
  public get loginCount() {
    return this.getNumberAttribute('login_count');
  }
  public set loginCount(value: number) {
    this._loginCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loginCountInput() {
    return this._loginCount;
  }

  // login_instance_type - computed: false, optional: false, required: true
  private _loginInstanceType?: string; 
  public get loginInstanceType() {
    return this.getStringAttribute('login_instance_type');
  }
  public set loginInstanceType(value: string) {
    this._loginInstanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loginInstanceTypeInput() {
    return this._loginInstanceType;
  }

  // manager_count - computed: true, optional: true, required: false
  private _managerCount?: number; 
  public get managerCount() {
    return this.getNumberAttribute('manager_count');
  }
  public set managerCount(value: number) {
    this._managerCount = value;
  }
  public resetManagerCount() {
    this._managerCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managerCountInput() {
    return this._managerCount;
  }

  // manager_instance_type - computed: false, optional: false, required: true
  private _managerInstanceType?: string; 
  public get managerInstanceType() {
    return this.getStringAttribute('manager_instance_type');
  }
  public set managerInstanceType(value: string) {
    this._managerInstanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managerInstanceTypeInput() {
    return this._managerInstanceType;
  }

  // os_tag - computed: false, optional: false, required: true
  private _osTag?: string; 
  public get osTag() {
    return this.getStringAttribute('os_tag');
  }
  public set osTag(value: string) {
    this._osTag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osTagInput() {
    return this._osTag;
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

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // period_unit - computed: false, optional: true, required: false
  private _periodUnit?: string; 
  public get periodUnit() {
    return this.getStringAttribute('period_unit');
  }
  public set periodUnit(value: string) {
    this._periodUnit = value;
  }
  public resetPeriodUnit() {
    this._periodUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodUnitInput() {
    return this._periodUnit;
  }

  // plugin - computed: false, optional: true, required: false
  private _plugin?: string; 
  public get plugin() {
    return this.getStringAttribute('plugin');
  }
  public set plugin(value: string) {
    this._plugin = value;
  }
  public resetPlugin() {
    this._plugin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginInput() {
    return this._plugin;
  }

  // ram_node_types - computed: false, optional: true, required: false
  private _ramNodeTypes?: string[]; 
  public get ramNodeTypes() {
    return this.getListAttribute('ram_node_types');
  }
  public set ramNodeTypes(value: string[]) {
    this._ramNodeTypes = value;
  }
  public resetRamNodeTypes() {
    this._ramNodeTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ramNodeTypesInput() {
    return this._ramNodeTypes;
  }

  // ram_role_name - computed: false, optional: true, required: false
  private _ramRoleName?: string; 
  public get ramRoleName() {
    return this.getStringAttribute('ram_role_name');
  }
  public set ramRoleName(value: string) {
    this._ramRoleName = value;
  }
  public resetRamRoleName() {
    this._ramRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ramRoleNameInput() {
    return this._ramRoleName;
  }

  // release_instance - computed: false, optional: true, required: false
  private _releaseInstance?: boolean | cdktf.IResolvable; 
  public get releaseInstance() {
    return this.getBooleanAttribute('release_instance');
  }
  public set releaseInstance(value: boolean | cdktf.IResolvable) {
    this._releaseInstance = value;
  }
  public resetReleaseInstance() {
    this._releaseInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseInstanceInput() {
    return this._releaseInstance;
  }

  // remote_directory - computed: true, optional: true, required: false
  private _remoteDirectory?: string; 
  public get remoteDirectory() {
    return this.getStringAttribute('remote_directory');
  }
  public set remoteDirectory(value: string) {
    this._remoteDirectory = value;
  }
  public resetRemoteDirectory() {
    this._remoteDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteDirectoryInput() {
    return this._remoteDirectory;
  }

  // remote_vis_enable - computed: false, optional: true, required: false
  private _remoteVisEnable?: boolean | cdktf.IResolvable; 
  public get remoteVisEnable() {
    return this.getBooleanAttribute('remote_vis_enable');
  }
  public set remoteVisEnable(value: boolean | cdktf.IResolvable) {
    this._remoteVisEnable = value;
  }
  public resetRemoteVisEnable() {
    this._remoteVisEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteVisEnableInput() {
    return this._remoteVisEnable;
  }

  // resource_group_id - computed: false, optional: true, required: false
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

  // scc_cluster_id - computed: true, optional: true, required: false
  private _sccClusterId?: string; 
  public get sccClusterId() {
    return this.getStringAttribute('scc_cluster_id');
  }
  public set sccClusterId(value: string) {
    this._sccClusterId = value;
  }
  public resetSccClusterId() {
    this._sccClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sccClusterIdInput() {
    return this._sccClusterId;
  }

  // scheduler_type - computed: true, optional: true, required: false
  private _schedulerType?: string; 
  public get schedulerType() {
    return this.getStringAttribute('scheduler_type');
  }
  public set schedulerType(value: string) {
    this._schedulerType = value;
  }
  public resetSchedulerType() {
    this._schedulerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerTypeInput() {
    return this._schedulerType;
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

  // security_group_name - computed: false, optional: true, required: false
  private _securityGroupName?: string; 
  public get securityGroupName() {
    return this.getStringAttribute('security_group_name');
  }
  public set securityGroupName(value: string) {
    this._securityGroupName = value;
  }
  public resetSecurityGroupName() {
    this._securityGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupNameInput() {
    return this._securityGroupName;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // system_disk_level - computed: false, optional: true, required: false
  private _systemDiskLevel?: string; 
  public get systemDiskLevel() {
    return this.getStringAttribute('system_disk_level');
  }
  public set systemDiskLevel(value: string) {
    this._systemDiskLevel = value;
  }
  public resetSystemDiskLevel() {
    this._systemDiskLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskLevelInput() {
    return this._systemDiskLevel;
  }

  // system_disk_size - computed: false, optional: true, required: false
  private _systemDiskSize?: number; 
  public get systemDiskSize() {
    return this.getNumberAttribute('system_disk_size');
  }
  public set systemDiskSize(value: number) {
    this._systemDiskSize = value;
  }
  public resetSystemDiskSize() {
    this._systemDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskSizeInput() {
    return this._systemDiskSize;
  }

  // system_disk_type - computed: false, optional: true, required: false
  private _systemDiskType?: string; 
  public get systemDiskType() {
    return this.getStringAttribute('system_disk_type');
  }
  public set systemDiskType(value: string) {
    this._systemDiskType = value;
  }
  public resetSystemDiskType() {
    this._systemDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskTypeInput() {
    return this._systemDiskType;
  }

  // volume_id - computed: true, optional: true, required: false
  private _volumeId?: string; 
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }
  public resetVolumeId() {
    this._volumeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }

  // volume_mount_option - computed: false, optional: true, required: false
  private _volumeMountOption?: string; 
  public get volumeMountOption() {
    return this.getStringAttribute('volume_mount_option');
  }
  public set volumeMountOption(value: string) {
    this._volumeMountOption = value;
  }
  public resetVolumeMountOption() {
    this._volumeMountOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeMountOptionInput() {
    return this._volumeMountOption;
  }

  // volume_mountpoint - computed: true, optional: true, required: false
  private _volumeMountpoint?: string; 
  public get volumeMountpoint() {
    return this.getStringAttribute('volume_mountpoint');
  }
  public set volumeMountpoint(value: string) {
    this._volumeMountpoint = value;
  }
  public resetVolumeMountpoint() {
    this._volumeMountpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeMountpointInput() {
    return this._volumeMountpoint;
  }

  // volume_protocol - computed: true, optional: true, required: false
  private _volumeProtocol?: string; 
  public get volumeProtocol() {
    return this.getStringAttribute('volume_protocol');
  }
  public set volumeProtocol(value: string) {
    this._volumeProtocol = value;
  }
  public resetVolumeProtocol() {
    this._volumeProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeProtocolInput() {
    return this._volumeProtocol;
  }

  // volume_type - computed: true, optional: true, required: false
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  public resetVolumeType() {
    this._volumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }

  // vpc_id - computed: true, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // vswitch_id - computed: true, optional: true, required: false
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  public resetVswitchId() {
    this._vswitchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }

  // without_agent - computed: false, optional: true, required: false
  private _withoutAgent?: boolean | cdktf.IResolvable; 
  public get withoutAgent() {
    return this.getBooleanAttribute('without_agent');
  }
  public set withoutAgent(value: boolean | cdktf.IResolvable) {
    this._withoutAgent = value;
  }
  public resetWithoutAgent() {
    this._withoutAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withoutAgentInput() {
    return this._withoutAgent;
  }

  // without_elastic_ip - computed: false, optional: true, required: false
  private _withoutElasticIp?: boolean | cdktf.IResolvable; 
  public get withoutElasticIp() {
    return this.getBooleanAttribute('without_elastic_ip');
  }
  public set withoutElasticIp(value: boolean | cdktf.IResolvable) {
    this._withoutElasticIp = value;
  }
  public resetWithoutElasticIp() {
    this._withoutElasticIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withoutElasticIpInput() {
    return this._withoutElasticIp;
  }

  // zone_id - computed: true, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // additional_volumes - computed: false, optional: true, required: false
  private _additionalVolumes = new EhpcClusterAdditionalVolumesList(this, "additional_volumes", true);
  public get additionalVolumes() {
    return this._additionalVolumes;
  }
  public putAdditionalVolumes(value: EhpcClusterAdditionalVolumes[] | cdktf.IResolvable) {
    this._additionalVolumes.internalValue = value;
  }
  public resetAdditionalVolumes() {
    this._additionalVolumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalVolumesInput() {
    return this._additionalVolumes.internalValue;
  }

  // application - computed: false, optional: true, required: false
  private _application = new EhpcClusterApplicationList(this, "application", true);
  public get application() {
    return this._application;
  }
  public putApplication(value: EhpcClusterApplication[] | cdktf.IResolvable) {
    this._application.internalValue = value;
  }
  public resetApplication() {
    this._application.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application.internalValue;
  }

  // post_install_script - computed: false, optional: true, required: false
  private _postInstallScript = new EhpcClusterPostInstallScriptList(this, "post_install_script", true);
  public get postInstallScript() {
    return this._postInstallScript;
  }
  public putPostInstallScript(value: EhpcClusterPostInstallScript[] | cdktf.IResolvable) {
    this._postInstallScript.internalValue = value;
  }
  public resetPostInstallScript() {
    this._postInstallScript.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postInstallScriptInput() {
    return this._postInstallScript.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EhpcClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EhpcClusterTimeouts) {
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
      account_type: cdktf.stringToTerraform(this._accountType),
      auto_renew: cdktf.booleanToTerraform(this._autoRenew),
      auto_renew_period: cdktf.numberToTerraform(this._autoRenewPeriod),
      client_version: cdktf.stringToTerraform(this._clientVersion),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      cluster_version: cdktf.stringToTerraform(this._clusterVersion),
      compute_count: cdktf.numberToTerraform(this._computeCount),
      compute_enable_ht: cdktf.booleanToTerraform(this._computeEnableHt),
      compute_instance_type: cdktf.stringToTerraform(this._computeInstanceType),
      compute_spot_price_limit: cdktf.stringToTerraform(this._computeSpotPriceLimit),
      compute_spot_strategy: cdktf.stringToTerraform(this._computeSpotStrategy),
      deploy_mode: cdktf.stringToTerraform(this._deployMode),
      description: cdktf.stringToTerraform(this._description),
      domain: cdktf.stringToTerraform(this._domain),
      ecs_charge_type: cdktf.stringToTerraform(this._ecsChargeType),
      ehpc_version: cdktf.stringToTerraform(this._ehpcVersion),
      ha_enable: cdktf.booleanToTerraform(this._haEnable),
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      image_owner_alias: cdktf.stringToTerraform(this._imageOwnerAlias),
      input_file_url: cdktf.stringToTerraform(this._inputFileUrl),
      is_compute_ess: cdktf.booleanToTerraform(this._isComputeEss),
      job_queue: cdktf.stringToTerraform(this._jobQueue),
      key_pair_name: cdktf.stringToTerraform(this._keyPairName),
      login_count: cdktf.numberToTerraform(this._loginCount),
      login_instance_type: cdktf.stringToTerraform(this._loginInstanceType),
      manager_count: cdktf.numberToTerraform(this._managerCount),
      manager_instance_type: cdktf.stringToTerraform(this._managerInstanceType),
      os_tag: cdktf.stringToTerraform(this._osTag),
      password: cdktf.stringToTerraform(this._password),
      period: cdktf.numberToTerraform(this._period),
      period_unit: cdktf.stringToTerraform(this._periodUnit),
      plugin: cdktf.stringToTerraform(this._plugin),
      ram_node_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ramNodeTypes),
      ram_role_name: cdktf.stringToTerraform(this._ramRoleName),
      release_instance: cdktf.booleanToTerraform(this._releaseInstance),
      remote_directory: cdktf.stringToTerraform(this._remoteDirectory),
      remote_vis_enable: cdktf.booleanToTerraform(this._remoteVisEnable),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      scc_cluster_id: cdktf.stringToTerraform(this._sccClusterId),
      scheduler_type: cdktf.stringToTerraform(this._schedulerType),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      security_group_name: cdktf.stringToTerraform(this._securityGroupName),
      system_disk_level: cdktf.stringToTerraform(this._systemDiskLevel),
      system_disk_size: cdktf.numberToTerraform(this._systemDiskSize),
      system_disk_type: cdktf.stringToTerraform(this._systemDiskType),
      volume_id: cdktf.stringToTerraform(this._volumeId),
      volume_mount_option: cdktf.stringToTerraform(this._volumeMountOption),
      volume_mountpoint: cdktf.stringToTerraform(this._volumeMountpoint),
      volume_protocol: cdktf.stringToTerraform(this._volumeProtocol),
      volume_type: cdktf.stringToTerraform(this._volumeType),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      without_agent: cdktf.booleanToTerraform(this._withoutAgent),
      without_elastic_ip: cdktf.booleanToTerraform(this._withoutElasticIp),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      additional_volumes: cdktf.listMapper(ehpcClusterAdditionalVolumesToTerraform, true)(this._additionalVolumes.internalValue),
      application: cdktf.listMapper(ehpcClusterApplicationToTerraform, true)(this._application.internalValue),
      post_install_script: cdktf.listMapper(ehpcClusterPostInstallScriptToTerraform, true)(this._postInstallScript.internalValue),
      timeouts: ehpcClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_type: {
        value: cdktf.stringToHclTerraform(this._accountType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_renew: {
        value: cdktf.booleanToHclTerraform(this._autoRenew),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_renew_period: {
        value: cdktf.numberToHclTerraform(this._autoRenewPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_version: {
        value: cdktf.stringToHclTerraform(this._clientVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_version: {
        value: cdktf.stringToHclTerraform(this._clusterVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compute_count: {
        value: cdktf.numberToHclTerraform(this._computeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      compute_enable_ht: {
        value: cdktf.booleanToHclTerraform(this._computeEnableHt),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      compute_instance_type: {
        value: cdktf.stringToHclTerraform(this._computeInstanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compute_spot_price_limit: {
        value: cdktf.stringToHclTerraform(this._computeSpotPriceLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compute_spot_strategy: {
        value: cdktf.stringToHclTerraform(this._computeSpotStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deploy_mode: {
        value: cdktf.stringToHclTerraform(this._deployMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ecs_charge_type: {
        value: cdktf.stringToHclTerraform(this._ecsChargeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ehpc_version: {
        value: cdktf.stringToHclTerraform(this._ehpcVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ha_enable: {
        value: cdktf.booleanToHclTerraform(this._haEnable),
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
      image_id: {
        value: cdktf.stringToHclTerraform(this._imageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_owner_alias: {
        value: cdktf.stringToHclTerraform(this._imageOwnerAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      input_file_url: {
        value: cdktf.stringToHclTerraform(this._inputFileUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_compute_ess: {
        value: cdktf.booleanToHclTerraform(this._isComputeEss),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      job_queue: {
        value: cdktf.stringToHclTerraform(this._jobQueue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_pair_name: {
        value: cdktf.stringToHclTerraform(this._keyPairName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login_count: {
        value: cdktf.numberToHclTerraform(this._loginCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      login_instance_type: {
        value: cdktf.stringToHclTerraform(this._loginInstanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      manager_count: {
        value: cdktf.numberToHclTerraform(this._managerCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      manager_instance_type: {
        value: cdktf.stringToHclTerraform(this._managerInstanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_tag: {
        value: cdktf.stringToHclTerraform(this._osTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      period: {
        value: cdktf.numberToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      period_unit: {
        value: cdktf.stringToHclTerraform(this._periodUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin: {
        value: cdktf.stringToHclTerraform(this._plugin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ram_node_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ramNodeTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ram_role_name: {
        value: cdktf.stringToHclTerraform(this._ramRoleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      release_instance: {
        value: cdktf.booleanToHclTerraform(this._releaseInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      remote_directory: {
        value: cdktf.stringToHclTerraform(this._remoteDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_vis_enable: {
        value: cdktf.booleanToHclTerraform(this._remoteVisEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scc_cluster_id: {
        value: cdktf.stringToHclTerraform(this._sccClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduler_type: {
        value: cdktf.stringToHclTerraform(this._schedulerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_id: {
        value: cdktf.stringToHclTerraform(this._securityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_name: {
        value: cdktf.stringToHclTerraform(this._securityGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_disk_level: {
        value: cdktf.stringToHclTerraform(this._systemDiskLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_disk_size: {
        value: cdktf.numberToHclTerraform(this._systemDiskSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      system_disk_type: {
        value: cdktf.stringToHclTerraform(this._systemDiskType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volume_id: {
        value: cdktf.stringToHclTerraform(this._volumeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volume_mount_option: {
        value: cdktf.stringToHclTerraform(this._volumeMountOption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volume_mountpoint: {
        value: cdktf.stringToHclTerraform(this._volumeMountpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volume_protocol: {
        value: cdktf.stringToHclTerraform(this._volumeProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volume_type: {
        value: cdktf.stringToHclTerraform(this._volumeType),
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
      vswitch_id: {
        value: cdktf.stringToHclTerraform(this._vswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      without_agent: {
        value: cdktf.booleanToHclTerraform(this._withoutAgent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      without_elastic_ip: {
        value: cdktf.booleanToHclTerraform(this._withoutElasticIp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      additional_volumes: {
        value: cdktf.listMapperHcl(ehpcClusterAdditionalVolumesToHclTerraform, true)(this._additionalVolumes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EhpcClusterAdditionalVolumesList",
      },
      application: {
        value: cdktf.listMapperHcl(ehpcClusterApplicationToHclTerraform, true)(this._application.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EhpcClusterApplicationList",
      },
      post_install_script: {
        value: cdktf.listMapperHcl(ehpcClusterPostInstallScriptToHclTerraform, true)(this._postInstallScript.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EhpcClusterPostInstallScriptList",
      },
      timeouts: {
        value: ehpcClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EhpcClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
