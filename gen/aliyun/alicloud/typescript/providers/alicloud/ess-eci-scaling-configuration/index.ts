// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EssEciScalingConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#active EssEciScalingConfiguration#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#active_deadline_seconds EssEciScalingConfiguration#active_deadline_seconds}
  */
  readonly activeDeadlineSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#auto_create_eip EssEciScalingConfiguration#auto_create_eip}
  */
  readonly autoCreateEip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#auto_match_image_cache EssEciScalingConfiguration#auto_match_image_cache}
  */
  readonly autoMatchImageCache?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#container_group_name EssEciScalingConfiguration#container_group_name}
  */
  readonly containerGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#cost_optimization EssEciScalingConfiguration#cost_optimization}
  */
  readonly costOptimization?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#cpu EssEciScalingConfiguration#cpu}
  */
  readonly cpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#cpu_options_core EssEciScalingConfiguration#cpu_options_core}
  */
  readonly cpuOptionsCore?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#cpu_options_threads_per_core EssEciScalingConfiguration#cpu_options_threads_per_core}
  */
  readonly cpuOptionsThreadsPerCore?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#description EssEciScalingConfiguration#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#dns_policy EssEciScalingConfiguration#dns_policy}
  */
  readonly dnsPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#egress_bandwidth EssEciScalingConfiguration#egress_bandwidth}
  */
  readonly egressBandwidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#eip_bandwidth EssEciScalingConfiguration#eip_bandwidth}
  */
  readonly eipBandwidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#enable_sls EssEciScalingConfiguration#enable_sls}
  */
  readonly enableSls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#ephemeral_storage EssEciScalingConfiguration#ephemeral_storage}
  */
  readonly ephemeralStorage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#force_delete EssEciScalingConfiguration#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#host_name EssEciScalingConfiguration#host_name}
  */
  readonly hostName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#id EssEciScalingConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#image_snapshot_id EssEciScalingConfiguration#image_snapshot_id}
  */
  readonly imageSnapshotId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#ingress_bandwidth EssEciScalingConfiguration#ingress_bandwidth}
  */
  readonly ingressBandwidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#instance_family_level EssEciScalingConfiguration#instance_family_level}
  */
  readonly instanceFamilyLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#instance_types EssEciScalingConfiguration#instance_types}
  */
  readonly instanceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#ipv6_address_count EssEciScalingConfiguration#ipv6_address_count}
  */
  readonly ipv6AddressCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#load_balancer_weight EssEciScalingConfiguration#load_balancer_weight}
  */
  readonly loadBalancerWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#memory EssEciScalingConfiguration#memory}
  */
  readonly memory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#ram_role_name EssEciScalingConfiguration#ram_role_name}
  */
  readonly ramRoleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#resource_group_id EssEciScalingConfiguration#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#restart_policy EssEciScalingConfiguration#restart_policy}
  */
  readonly restartPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#scaling_configuration_name EssEciScalingConfiguration#scaling_configuration_name}
  */
  readonly scalingConfigurationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#scaling_group_id EssEciScalingConfiguration#scaling_group_id}
  */
  readonly scalingGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#security_group_id EssEciScalingConfiguration#security_group_id}
  */
  readonly securityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#spot_price_limit EssEciScalingConfiguration#spot_price_limit}
  */
  readonly spotPriceLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#spot_strategy EssEciScalingConfiguration#spot_strategy}
  */
  readonly spotStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#tags EssEciScalingConfiguration#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#termination_grace_period_seconds EssEciScalingConfiguration#termination_grace_period_seconds}
  */
  readonly terminationGracePeriodSeconds?: number;
  /**
  * acr_registry_infos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#acr_registry_infos EssEciScalingConfiguration#acr_registry_infos}
  */
  readonly acrRegistryInfos?: EssEciScalingConfigurationAcrRegistryInfos[] | cdktf.IResolvable;
  /**
  * containers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#containers EssEciScalingConfiguration#containers}
  */
  readonly containers?: EssEciScalingConfigurationContainers[] | cdktf.IResolvable;
  /**
  * dns_config_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#dns_config_options EssEciScalingConfiguration#dns_config_options}
  */
  readonly dnsConfigOptions?: EssEciScalingConfigurationDnsConfigOptions[] | cdktf.IResolvable;
  /**
  * host_aliases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#host_aliases EssEciScalingConfiguration#host_aliases}
  */
  readonly hostAliases?: EssEciScalingConfigurationHostAliases[] | cdktf.IResolvable;
  /**
  * image_registry_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#image_registry_credentials EssEciScalingConfiguration#image_registry_credentials}
  */
  readonly imageRegistryCredentials?: EssEciScalingConfigurationImageRegistryCredentials[] | cdktf.IResolvable;
  /**
  * init_containers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#init_containers EssEciScalingConfiguration#init_containers}
  */
  readonly initContainers?: EssEciScalingConfigurationInitContainers[] | cdktf.IResolvable;
  /**
  * security_context_sysctls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#security_context_sysctls EssEciScalingConfiguration#security_context_sysctls}
  */
  readonly securityContextSysctls?: EssEciScalingConfigurationSecurityContextSysctls[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#timeouts EssEciScalingConfiguration#timeouts}
  */
  readonly timeouts?: EssEciScalingConfigurationTimeouts;
  /**
  * volumes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#volumes EssEciScalingConfiguration#volumes}
  */
  readonly volumes?: EssEciScalingConfigurationVolumes[] | cdktf.IResolvable;
}
export interface EssEciScalingConfigurationAcrRegistryInfos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#domains EssEciScalingConfiguration#domains}
  */
  readonly domains?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#instance_id EssEciScalingConfiguration#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#instance_name EssEciScalingConfiguration#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#region_id EssEciScalingConfiguration#region_id}
  */
  readonly regionId?: string;
}

export function essEciScalingConfigurationAcrRegistryInfosToTerraform(struct?: EssEciScalingConfigurationAcrRegistryInfos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domains),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    instance_name: cdktf.stringToTerraform(struct!.instanceName),
    region_id: cdktf.stringToTerraform(struct!.regionId),
  }
}


export function essEciScalingConfigurationAcrRegistryInfosToHclTerraform(struct?: EssEciScalingConfigurationAcrRegistryInfos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.domains),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_name: {
      value: cdktf.stringToHclTerraform(struct!.instanceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region_id: {
      value: cdktf.stringToHclTerraform(struct!.regionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EssEciScalingConfigurationAcrRegistryInfosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EssEciScalingConfigurationAcrRegistryInfos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domains !== undefined) {
      hasAnyValues = true;
      internalValueResult.domains = this._domains;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._instanceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceName = this._instanceName;
    }
    if (this._regionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionId = this._regionId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EssEciScalingConfigurationAcrRegistryInfos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domains = undefined;
      this._instanceId = undefined;
      this._instanceName = undefined;
      this._regionId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domains = value.domains;
      this._instanceId = value.instanceId;
      this._instanceName = value.instanceName;
      this._regionId = value.regionId;
    }
  }

  // domains - computed: false, optional: true, required: false
  private _domains?: string[]; 
  public get domains() {
    return cdktf.Fn.tolist(this.getListAttribute('domains'));
  }
  public set domains(value: string[]) {
    this._domains = value;
  }
  public resetDomains() {
    this._domains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // instance_name - computed: false, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // region_id - computed: false, optional: true, required: false
  private _regionId?: string; 
  public get regionId() {
    return this.getStringAttribute('region_id');
  }
  public set regionId(value: string) {
    this._regionId = value;
  }
  public resetRegionId() {
    this._regionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }
}

export class EssEciScalingConfigurationAcrRegistryInfosList extends cdktf.ComplexList {
  public internalValue? : EssEciScalingConfigurationAcrRegistryInfos[] | cdktf.IResolvable

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
  public get(index: number): EssEciScalingConfigurationAcrRegistryInfosOutputReference {
    return new EssEciScalingConfigurationAcrRegistryInfosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EssEciScalingConfigurationContainersEnvironmentVars {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#field_ref_field_path EssEciScalingConfiguration#field_ref_field_path}
  */
  readonly fieldRefFieldPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#key EssEciScalingConfiguration#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#value EssEciScalingConfiguration#value}
  */
  readonly value?: string;
}

export function essEciScalingConfigurationContainersEnvironmentVarsToTerraform(struct?: EssEciScalingConfigurationContainersEnvironmentVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_ref_field_path: cdktf.stringToTerraform(struct!.fieldRefFieldPath),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function essEciScalingConfigurationContainersEnvironmentVarsToHclTerraform(struct?: EssEciScalingConfigurationContainersEnvironmentVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_ref_field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldRefFieldPath),
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

export class EssEciScalingConfigurationContainersEnvironmentVarsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EssEciScalingConfigurationContainersEnvironmentVars | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldRefFieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRefFieldPath = this._fieldRefFieldPath;
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

  public set internalValue(value: EssEciScalingConfigurationContainersEnvironmentVars | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldRefFieldPath = undefined;
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
      this._fieldRefFieldPath = value.fieldRefFieldPath;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // field_ref_field_path - computed: false, optional: true, required: false
  private _fieldRefFieldPath?: string; 
  public get fieldRefFieldPath() {
    return this.getStringAttribute('field_ref_field_path');
  }
  public set fieldRefFieldPath(value: string) {
    this._fieldRefFieldPath = value;
  }
  public resetFieldRefFieldPath() {
    this._fieldRefFieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRefFieldPathInput() {
    return this._fieldRefFieldPath;
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

export class EssEciScalingConfigurationContainersEnvironmentVarsList extends cdktf.ComplexList {
  public internalValue? : EssEciScalingConfigurationContainersEnvironmentVars[] | cdktf.IResolvable

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
  public get(index: number): EssEciScalingConfigurationContainersEnvironmentVarsOutputReference {
    return new EssEciScalingConfigurationContainersEnvironmentVarsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EssEciScalingConfigurationContainersPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#port EssEciScalingConfiguration#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#protocol EssEciScalingConfiguration#protocol}
  */
  readonly protocol?: string;
}

export function essEciScalingConfigurationContainersPortsToTerraform(struct?: EssEciScalingConfigurationContainersPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function essEciScalingConfigurationContainersPortsToHclTerraform(struct?: EssEciScalingConfigurationContainersPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EssEciScalingConfigurationContainersPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EssEciScalingConfigurationContainersPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EssEciScalingConfigurationContainersPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._protocol = value.protocol;
    }
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class EssEciScalingConfigurationContainersPortsList extends cdktf.ComplexList {
  public internalValue? : EssEciScalingConfigurationContainersPorts[] | cdktf.IResolvable

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
  public get(index: number): EssEciScalingConfigurationContainersPortsOutputReference {
    return new EssEciScalingConfigurationContainersPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EssEciScalingConfigurationContainersVolumeMounts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#mount_path EssEciScalingConfiguration#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#mount_propagation EssEciScalingConfiguration#mount_propagation}
  */
  readonly mountPropagation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#name EssEciScalingConfiguration#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#read_only EssEciScalingConfiguration#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#sub_path EssEciScalingConfiguration#sub_path}
  */
  readonly subPath?: string;
}

export function essEciScalingConfigurationContainersVolumeMountsToTerraform(struct?: EssEciScalingConfigurationContainersVolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    mount_propagation: cdktf.stringToTerraform(struct!.mountPropagation),
    name: cdktf.stringToTerraform(struct!.name),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    sub_path: cdktf.stringToTerraform(struct!.subPath),
  }
}


export function essEciScalingConfigurationContainersVolumeMountsToHclTerraform(struct?: EssEciScalingConfigurationContainersVolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EssEciScalingConfigurationContainersVolumeMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EssEciScalingConfigurationContainersVolumeMounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._mountPropagation !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPropagation = this._mountPropagation;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._subPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.subPath = this._subPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EssEciScalingConfigurationContainersVolumeMounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
      this._mountPropagation = undefined;
      this._name = undefined;
      this._readOnly = undefined;
      this._subPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
      this._mountPropagation = value.mountPropagation;
      this._name = value.name;
      this._readOnly = value.readOnly;
      this._subPath = value.subPath;
    }
  }

  // mount_path - computed: false, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }

  // mount_propagation - computed: true, optional: true, required: false
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
}

export class EssEciScalingConfigurationContainersVolumeMountsList extends cdktf.ComplexList {
  public internalValue? : EssEciScalingConfigurationContainersVolumeMounts[] | cdktf.IResolvable

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
  public get(index: number): EssEciScalingConfigurationContainersVolumeMountsOutputReference {
    return new EssEciScalingConfigurationContainersVolumeMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EssEciScalingConfigurationContainers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#args EssEciScalingConfiguration#args}
  */
  readonly args?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#commands EssEciScalingConfiguration#commands}
  */
  readonly commands?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#cpu EssEciScalingConfiguration#cpu}
  */
  readonly cpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#gpu EssEciScalingConfiguration#gpu}
  */
  readonly gpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#image EssEciScalingConfiguration#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#image_pull_policy EssEciScalingConfiguration#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#lifecycle_pre_stop_handler_execs EssEciScalingConfiguration#lifecycle_pre_stop_handler_execs}
  */
  readonly lifecyclePreStopHandlerExecs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#liveness_probe_exec_commands EssEciScalingConfiguration#liveness_probe_exec_commands}
  */
  readonly livenessProbeExecCommands?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#liveness_probe_failure_threshold EssEciScalingConfiguration#liveness_probe_failure_threshold}
  */
  readonly livenessProbeFailureThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#liveness_probe_http_get_path EssEciScalingConfiguration#liveness_probe_http_get_path}
  */
  readonly livenessProbeHttpGetPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#liveness_probe_http_get_port EssEciScalingConfiguration#liveness_probe_http_get_port}
  */
  readonly livenessProbeHttpGetPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#liveness_probe_http_get_scheme EssEciScalingConfiguration#liveness_probe_http_get_scheme}
  */
  readonly livenessProbeHttpGetScheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#liveness_probe_initial_delay_seconds EssEciScalingConfiguration#liveness_probe_initial_delay_seconds}
  */
  readonly livenessProbeInitialDelaySeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#liveness_probe_period_seconds EssEciScalingConfiguration#liveness_probe_period_seconds}
  */
  readonly livenessProbePeriodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#liveness_probe_success_threshold EssEciScalingConfiguration#liveness_probe_success_threshold}
  */
  readonly livenessProbeSuccessThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#liveness_probe_tcp_socket_port EssEciScalingConfiguration#liveness_probe_tcp_socket_port}
  */
  readonly livenessProbeTcpSocketPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#liveness_probe_timeout_seconds EssEciScalingConfiguration#liveness_probe_timeout_seconds}
  */
  readonly livenessProbeTimeoutSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#memory EssEciScalingConfiguration#memory}
  */
  readonly memory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#name EssEciScalingConfiguration#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#readiness_probe_exec_commands EssEciScalingConfiguration#readiness_probe_exec_commands}
  */
  readonly readinessProbeExecCommands?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#readiness_probe_failure_threshold EssEciScalingConfiguration#readiness_probe_failure_threshold}
  */
  readonly readinessProbeFailureThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#readiness_probe_http_get_path EssEciScalingConfiguration#readiness_probe_http_get_path}
  */
  readonly readinessProbeHttpGetPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#readiness_probe_http_get_port EssEciScalingConfiguration#readiness_probe_http_get_port}
  */
  readonly readinessProbeHttpGetPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#readiness_probe_http_get_scheme EssEciScalingConfiguration#readiness_probe_http_get_scheme}
  */
  readonly readinessProbeHttpGetScheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#readiness_probe_initial_delay_seconds EssEciScalingConfiguration#readiness_probe_initial_delay_seconds}
  */
  readonly readinessProbeInitialDelaySeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#readiness_probe_period_seconds EssEciScalingConfiguration#readiness_probe_period_seconds}
  */
  readonly readinessProbePeriodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#readiness_probe_success_threshold EssEciScalingConfiguration#readiness_probe_success_threshold}
  */
  readonly readinessProbeSuccessThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#readiness_probe_tcp_socket_port EssEciScalingConfiguration#readiness_probe_tcp_socket_port}
  */
  readonly readinessProbeTcpSocketPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#readiness_probe_timeout_seconds EssEciScalingConfiguration#readiness_probe_timeout_seconds}
  */
  readonly readinessProbeTimeoutSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#security_context_capability_adds EssEciScalingConfiguration#security_context_capability_adds}
  */
  readonly securityContextCapabilityAdds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#security_context_read_only_root_file_system EssEciScalingConfiguration#security_context_read_only_root_file_system}
  */
  readonly securityContextReadOnlyRootFileSystem?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#security_context_run_as_user EssEciScalingConfiguration#security_context_run_as_user}
  */
  readonly securityContextRunAsUser?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#stdin EssEciScalingConfiguration#stdin}
  */
  readonly stdin?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#tty EssEciScalingConfiguration#tty}
  */
  readonly tty?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#working_dir EssEciScalingConfiguration#working_dir}
  */
  readonly workingDir?: string;
  /**
  * environment_vars block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#environment_vars EssEciScalingConfiguration#environment_vars}
  */
  readonly environmentVars?: EssEciScalingConfigurationContainersEnvironmentVars[] | cdktf.IResolvable;
  /**
  * ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#ports EssEciScalingConfiguration#ports}
  */
  readonly ports?: EssEciScalingConfigurationContainersPorts[] | cdktf.IResolvable;
  /**
  * volume_mounts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#volume_mounts EssEciScalingConfiguration#volume_mounts}
  */
  readonly volumeMounts?: EssEciScalingConfigurationContainersVolumeMounts[] | cdktf.IResolvable;
}

export function essEciScalingConfigurationContainersToTerraform(struct?: EssEciScalingConfigurationContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    commands: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.commands),
    cpu: cdktf.numberToTerraform(struct!.cpu),
    gpu: cdktf.numberToTerraform(struct!.gpu),
    image: cdktf.stringToTerraform(struct!.image),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    lifecycle_pre_stop_handler_execs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.lifecyclePreStopHandlerExecs),
    liveness_probe_exec_commands: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.livenessProbeExecCommands),
    liveness_probe_failure_threshold: cdktf.numberToTerraform(struct!.livenessProbeFailureThreshold),
    liveness_probe_http_get_path: cdktf.stringToTerraform(struct!.livenessProbeHttpGetPath),
    liveness_probe_http_get_port: cdktf.numberToTerraform(struct!.livenessProbeHttpGetPort),
    liveness_probe_http_get_scheme: cdktf.stringToTerraform(struct!.livenessProbeHttpGetScheme),
    liveness_probe_initial_delay_seconds: cdktf.numberToTerraform(struct!.livenessProbeInitialDelaySeconds),
    liveness_probe_period_seconds: cdktf.numberToTerraform(struct!.livenessProbePeriodSeconds),
    liveness_probe_success_threshold: cdktf.numberToTerraform(struct!.livenessProbeSuccessThreshold),
    liveness_probe_tcp_socket_port: cdktf.numberToTerraform(struct!.livenessProbeTcpSocketPort),
    liveness_probe_timeout_seconds: cdktf.numberToTerraform(struct!.livenessProbeTimeoutSeconds),
    memory: cdktf.numberToTerraform(struct!.memory),
    name: cdktf.stringToTerraform(struct!.name),
    readiness_probe_exec_commands: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.readinessProbeExecCommands),
    readiness_probe_failure_threshold: cdktf.numberToTerraform(struct!.readinessProbeFailureThreshold),
    readiness_probe_http_get_path: cdktf.stringToTerraform(struct!.readinessProbeHttpGetPath),
    readiness_probe_http_get_port: cdktf.numberToTerraform(struct!.readinessProbeHttpGetPort),
    readiness_probe_http_get_scheme: cdktf.stringToTerraform(struct!.readinessProbeHttpGetScheme),
    readiness_probe_initial_delay_seconds: cdktf.numberToTerraform(struct!.readinessProbeInitialDelaySeconds),
    readiness_probe_period_seconds: cdktf.numberToTerraform(struct!.readinessProbePeriodSeconds),
    readiness_probe_success_threshold: cdktf.numberToTerraform(struct!.readinessProbeSuccessThreshold),
    readiness_probe_tcp_socket_port: cdktf.numberToTerraform(struct!.readinessProbeTcpSocketPort),
    readiness_probe_timeout_seconds: cdktf.numberToTerraform(struct!.readinessProbeTimeoutSeconds),
    security_context_capability_adds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityContextCapabilityAdds),
    security_context_read_only_root_file_system: cdktf.booleanToTerraform(struct!.securityContextReadOnlyRootFileSystem),
    security_context_run_as_user: cdktf.numberToTerraform(struct!.securityContextRunAsUser),
    stdin: cdktf.booleanToTerraform(struct!.stdin),
    tty: cdktf.booleanToTerraform(struct!.tty),
    working_dir: cdktf.stringToTerraform(struct!.workingDir),
    environment_vars: cdktf.listMapper(essEciScalingConfigurationContainersEnvironmentVarsToTerraform, true)(struct!.environmentVars),
    ports: cdktf.listMapper(essEciScalingConfigurationContainersPortsToTerraform, true)(struct!.ports),
    volume_mounts: cdktf.listMapper(essEciScalingConfigurationContainersVolumeMountsToTerraform, true)(struct!.volumeMounts),
  }
}


export function essEciScalingConfigurationContainersToHclTerraform(struct?: EssEciScalingConfigurationContainers | cdktf.IResolvable): any {
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
    gpu: {
      value: cdktf.numberToHclTerraform(struct!.gpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.imagePullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle_pre_stop_handler_execs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.lifecyclePreStopHandlerExecs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    liveness_probe_exec_commands: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.livenessProbeExecCommands),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    liveness_probe_failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.livenessProbeFailureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    liveness_probe_http_get_path: {
      value: cdktf.stringToHclTerraform(struct!.livenessProbeHttpGetPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    liveness_probe_http_get_port: {
      value: cdktf.numberToHclTerraform(struct!.livenessProbeHttpGetPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    liveness_probe_http_get_scheme: {
      value: cdktf.stringToHclTerraform(struct!.livenessProbeHttpGetScheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    liveness_probe_initial_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.livenessProbeInitialDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    liveness_probe_period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.livenessProbePeriodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    liveness_probe_success_threshold: {
      value: cdktf.numberToHclTerraform(struct!.livenessProbeSuccessThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    liveness_probe_tcp_socket_port: {
      value: cdktf.numberToHclTerraform(struct!.livenessProbeTcpSocketPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    liveness_probe_timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.livenessProbeTimeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    readiness_probe_exec_commands: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.readinessProbeExecCommands),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    readiness_probe_failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.readinessProbeFailureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    readiness_probe_http_get_path: {
      value: cdktf.stringToHclTerraform(struct!.readinessProbeHttpGetPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    readiness_probe_http_get_port: {
      value: cdktf.numberToHclTerraform(struct!.readinessProbeHttpGetPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    readiness_probe_http_get_scheme: {
      value: cdktf.stringToHclTerraform(struct!.readinessProbeHttpGetScheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    readiness_probe_initial_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.readinessProbeInitialDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    readiness_probe_period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.readinessProbePeriodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    readiness_probe_success_threshold: {
      value: cdktf.numberToHclTerraform(struct!.readinessProbeSuccessThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    readiness_probe_tcp_socket_port: {
      value: cdktf.numberToHclTerraform(struct!.readinessProbeTcpSocketPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    readiness_probe_timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.readinessProbeTimeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    security_context_capability_adds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityContextCapabilityAdds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    security_context_read_only_root_file_system: {
      value: cdktf.booleanToHclTerraform(struct!.securityContextReadOnlyRootFileSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    security_context_run_as_user: {
      value: cdktf.numberToHclTerraform(struct!.securityContextRunAsUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stdin: {
      value: cdktf.booleanToHclTerraform(struct!.stdin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tty: {
      value: cdktf.booleanToHclTerraform(struct!.tty),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    working_dir: {
      value: cdktf.stringToHclTerraform(struct!.workingDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment_vars: {
      value: cdktf.listMapperHcl(essEciScalingConfigurationContainersEnvironmentVarsToHclTerraform, true)(struct!.environmentVars),
      isBlock: true,
      type: "set",
      storageClassType: "EssEciScalingConfigurationContainersEnvironmentVarsList",
    },
    ports: {
      value: cdktf.listMapperHcl(essEciScalingConfigurationContainersPortsToHclTerraform, true)(struct!.ports),
      isBlock: true,
      type: "set",
      storageClassType: "EssEciScalingConfigurationContainersPortsList",
    },
    volume_mounts: {
      value: cdktf.listMapperHcl(essEciScalingConfigurationContainersVolumeMountsToHclTerraform, true)(struct!.volumeMounts),
      isBlock: true,
      type: "set",
      storageClassType: "EssEciScalingConfigurationContainersVolumeMountsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EssEciScalingConfigurationContainersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EssEciScalingConfigurationContainers | cdktf.IResolvable | undefined {
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
    if (this._gpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpu = this._gpu;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._lifecyclePreStopHandlerExecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecyclePreStopHandlerExecs = this._lifecyclePreStopHandlerExecs;
    }
    if (this._livenessProbeExecCommands !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessProbeExecCommands = this._livenessProbeExecCommands;
    }
    if (this._livenessProbeFailureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessProbeFailureThreshold = this._livenessProbeFailureThreshold;
    }
    if (this._livenessProbeHttpGetPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessProbeHttpGetPath = this._livenessProbeHttpGetPath;
    }
    if (this._livenessProbeHttpGetPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessProbeHttpGetPort = this._livenessProbeHttpGetPort;
    }
    if (this._livenessProbeHttpGetScheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessProbeHttpGetScheme = this._livenessProbeHttpGetScheme;
    }
    if (this._livenessProbeInitialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessProbeInitialDelaySeconds = this._livenessProbeInitialDelaySeconds;
    }
    if (this._livenessProbePeriodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessProbePeriodSeconds = this._livenessProbePeriodSeconds;
    }
    if (this._livenessProbeSuccessThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessProbeSuccessThreshold = this._livenessProbeSuccessThreshold;
    }
    if (this._livenessProbeTcpSocketPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessProbeTcpSocketPort = this._livenessProbeTcpSocketPort;
    }
    if (this._livenessProbeTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessProbeTimeoutSeconds = this._livenessProbeTimeoutSeconds;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._readinessProbeExecCommands !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessProbeExecCommands = this._readinessProbeExecCommands;
    }
    if (this._readinessProbeFailureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessProbeFailureThreshold = this._readinessProbeFailureThreshold;
    }
    if (this._readinessProbeHttpGetPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessProbeHttpGetPath = this._readinessProbeHttpGetPath;
    }
    if (this._readinessProbeHttpGetPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessProbeHttpGetPort = this._readinessProbeHttpGetPort;
    }
    if (this._readinessProbeHttpGetScheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessProbeHttpGetScheme = this._readinessProbeHttpGetScheme;
    }
    if (this._readinessProbeInitialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessProbeInitialDelaySeconds = this._readinessProbeInitialDelaySeconds;
    }
    if (this._readinessProbePeriodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessProbePeriodSeconds = this._readinessProbePeriodSeconds;
    }
    if (this._readinessProbeSuccessThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessProbeSuccessThreshold = this._readinessProbeSuccessThreshold;
    }
    if (this._readinessProbeTcpSocketPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessProbeTcpSocketPort = this._readinessProbeTcpSocketPort;
    }
    if (this._readinessProbeTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessProbeTimeoutSeconds = this._readinessProbeTimeoutSeconds;
    }
    if (this._securityContextCapabilityAdds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContextCapabilityAdds = this._securityContextCapabilityAdds;
    }
    if (this._securityContextReadOnlyRootFileSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContextReadOnlyRootFileSystem = this._securityContextReadOnlyRootFileSystem;
    }
    if (this._securityContextRunAsUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContextRunAsUser = this._securityContextRunAsUser;
    }
    if (this._stdin !== undefined) {
      hasAnyValues = true;
      internalValueResult.stdin = this._stdin;
    }
    if (this._tty !== undefined) {
      hasAnyValues = true;
      internalValueResult.tty = this._tty;
    }
    if (this._workingDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.workingDir = this._workingDir;
    }
    if (this._environmentVars?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentVars = this._environmentVars?.internalValue;
    }
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    if (this._volumeMounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMounts = this._volumeMounts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EssEciScalingConfigurationContainers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._commands = undefined;
      this._cpu = undefined;
      this._gpu = undefined;
      this._image = undefined;
      this._imagePullPolicy = undefined;
      this._lifecyclePreStopHandlerExecs = undefined;
      this._livenessProbeExecCommands = undefined;
      this._livenessProbeFailureThreshold = undefined;
      this._livenessProbeHttpGetPath = undefined;
      this._livenessProbeHttpGetPort = undefined;
      this._livenessProbeHttpGetScheme = undefined;
      this._livenessProbeInitialDelaySeconds = undefined;
      this._livenessProbePeriodSeconds = undefined;
      this._livenessProbeSuccessThreshold = undefined;
      this._livenessProbeTcpSocketPort = undefined;
      this._livenessProbeTimeoutSeconds = undefined;
      this._memory = undefined;
      this._name = undefined;
      this._readinessProbeExecCommands = undefined;
      this._readinessProbeFailureThreshold = undefined;
      this._readinessProbeHttpGetPath = undefined;
      this._readinessProbeHttpGetPort = undefined;
      this._readinessProbeHttpGetScheme = undefined;
      this._readinessProbeInitialDelaySeconds = undefined;
      this._readinessProbePeriodSeconds = undefined;
      this._readinessProbeSuccessThreshold = undefined;
      this._readinessProbeTcpSocketPort = undefined;
      this._readinessProbeTimeoutSeconds = undefined;
      this._securityContextCapabilityAdds = undefined;
      this._securityContextReadOnlyRootFileSystem = undefined;
      this._securityContextRunAsUser = undefined;
      this._stdin = undefined;
      this._tty = undefined;
      this._workingDir = undefined;
      this._environmentVars.internalValue = undefined;
      this._ports.internalValue = undefined;
      this._volumeMounts.internalValue = undefined;
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
      this._gpu = value.gpu;
      this._image = value.image;
      this._imagePullPolicy = value.imagePullPolicy;
      this._lifecyclePreStopHandlerExecs = value.lifecyclePreStopHandlerExecs;
      this._livenessProbeExecCommands = value.livenessProbeExecCommands;
      this._livenessProbeFailureThreshold = value.livenessProbeFailureThreshold;
      this._livenessProbeHttpGetPath = value.livenessProbeHttpGetPath;
      this._livenessProbeHttpGetPort = value.livenessProbeHttpGetPort;
      this._livenessProbeHttpGetScheme = value.livenessProbeHttpGetScheme;
      this._livenessProbeInitialDelaySeconds = value.livenessProbeInitialDelaySeconds;
      this._livenessProbePeriodSeconds = value.livenessProbePeriodSeconds;
      this._livenessProbeSuccessThreshold = value.livenessProbeSuccessThreshold;
      this._livenessProbeTcpSocketPort = value.livenessProbeTcpSocketPort;
      this._livenessProbeTimeoutSeconds = value.livenessProbeTimeoutSeconds;
      this._memory = value.memory;
      this._name = value.name;
      this._readinessProbeExecCommands = value.readinessProbeExecCommands;
      this._readinessProbeFailureThreshold = value.readinessProbeFailureThreshold;
      this._readinessProbeHttpGetPath = value.readinessProbeHttpGetPath;
      this._readinessProbeHttpGetPort = value.readinessProbeHttpGetPort;
      this._readinessProbeHttpGetScheme = value.readinessProbeHttpGetScheme;
      this._readinessProbeInitialDelaySeconds = value.readinessProbeInitialDelaySeconds;
      this._readinessProbePeriodSeconds = value.readinessProbePeriodSeconds;
      this._readinessProbeSuccessThreshold = value.readinessProbeSuccessThreshold;
      this._readinessProbeTcpSocketPort = value.readinessProbeTcpSocketPort;
      this._readinessProbeTimeoutSeconds = value.readinessProbeTimeoutSeconds;
      this._securityContextCapabilityAdds = value.securityContextCapabilityAdds;
      this._securityContextReadOnlyRootFileSystem = value.securityContextReadOnlyRootFileSystem;
      this._securityContextRunAsUser = value.securityContextRunAsUser;
      this._stdin = value.stdin;
      this._tty = value.tty;
      this._workingDir = value.workingDir;
      this._environmentVars.internalValue = value.environmentVars;
      this._ports.internalValue = value.ports;
      this._volumeMounts.internalValue = value.volumeMounts;
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

  // gpu - computed: false, optional: true, required: false
  private _gpu?: number; 
  public get gpu() {
    return this.getNumberAttribute('gpu');
  }
  public set gpu(value: number) {
    this._gpu = value;
  }
  public resetGpu() {
    this._gpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuInput() {
    return this._gpu;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // image_pull_policy - computed: false, optional: true, required: false
  private _imagePullPolicy?: string; 
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }
  public set imagePullPolicy(value: string) {
    this._imagePullPolicy = value;
  }
  public resetImagePullPolicy() {
    this._imagePullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullPolicyInput() {
    return this._imagePullPolicy;
  }

  // lifecycle_pre_stop_handler_execs - computed: false, optional: true, required: false
  private _lifecyclePreStopHandlerExecs?: string[]; 
  public get lifecyclePreStopHandlerExecs() {
    return this.getListAttribute('lifecycle_pre_stop_handler_execs');
  }
  public set lifecyclePreStopHandlerExecs(value: string[]) {
    this._lifecyclePreStopHandlerExecs = value;
  }
  public resetLifecyclePreStopHandlerExecs() {
    this._lifecyclePreStopHandlerExecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecyclePreStopHandlerExecsInput() {
    return this._lifecyclePreStopHandlerExecs;
  }

  // liveness_probe_exec_commands - computed: false, optional: true, required: false
  private _livenessProbeExecCommands?: string[]; 
  public get livenessProbeExecCommands() {
    return this.getListAttribute('liveness_probe_exec_commands');
  }
  public set livenessProbeExecCommands(value: string[]) {
    this._livenessProbeExecCommands = value;
  }
  public resetLivenessProbeExecCommands() {
    this._livenessProbeExecCommands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessProbeExecCommandsInput() {
    return this._livenessProbeExecCommands;
  }

  // liveness_probe_failure_threshold - computed: false, optional: true, required: false
  private _livenessProbeFailureThreshold?: number; 
  public get livenessProbeFailureThreshold() {
    return this.getNumberAttribute('liveness_probe_failure_threshold');
  }
  public set livenessProbeFailureThreshold(value: number) {
    this._livenessProbeFailureThreshold = value;
  }
  public resetLivenessProbeFailureThreshold() {
    this._livenessProbeFailureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessProbeFailureThresholdInput() {
    return this._livenessProbeFailureThreshold;
  }

  // liveness_probe_http_get_path - computed: false, optional: true, required: false
  private _livenessProbeHttpGetPath?: string; 
  public get livenessProbeHttpGetPath() {
    return this.getStringAttribute('liveness_probe_http_get_path');
  }
  public set livenessProbeHttpGetPath(value: string) {
    this._livenessProbeHttpGetPath = value;
  }
  public resetLivenessProbeHttpGetPath() {
    this._livenessProbeHttpGetPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessProbeHttpGetPathInput() {
    return this._livenessProbeHttpGetPath;
  }

  // liveness_probe_http_get_port - computed: false, optional: true, required: false
  private _livenessProbeHttpGetPort?: number; 
  public get livenessProbeHttpGetPort() {
    return this.getNumberAttribute('liveness_probe_http_get_port');
  }
  public set livenessProbeHttpGetPort(value: number) {
    this._livenessProbeHttpGetPort = value;
  }
  public resetLivenessProbeHttpGetPort() {
    this._livenessProbeHttpGetPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessProbeHttpGetPortInput() {
    return this._livenessProbeHttpGetPort;
  }

  // liveness_probe_http_get_scheme - computed: false, optional: true, required: false
  private _livenessProbeHttpGetScheme?: string; 
  public get livenessProbeHttpGetScheme() {
    return this.getStringAttribute('liveness_probe_http_get_scheme');
  }
  public set livenessProbeHttpGetScheme(value: string) {
    this._livenessProbeHttpGetScheme = value;
  }
  public resetLivenessProbeHttpGetScheme() {
    this._livenessProbeHttpGetScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessProbeHttpGetSchemeInput() {
    return this._livenessProbeHttpGetScheme;
  }

  // liveness_probe_initial_delay_seconds - computed: false, optional: true, required: false
  private _livenessProbeInitialDelaySeconds?: number; 
  public get livenessProbeInitialDelaySeconds() {
    return this.getNumberAttribute('liveness_probe_initial_delay_seconds');
  }
  public set livenessProbeInitialDelaySeconds(value: number) {
    this._livenessProbeInitialDelaySeconds = value;
  }
  public resetLivenessProbeInitialDelaySeconds() {
    this._livenessProbeInitialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessProbeInitialDelaySecondsInput() {
    return this._livenessProbeInitialDelaySeconds;
  }

  // liveness_probe_period_seconds - computed: false, optional: true, required: false
  private _livenessProbePeriodSeconds?: number; 
  public get livenessProbePeriodSeconds() {
    return this.getNumberAttribute('liveness_probe_period_seconds');
  }
  public set livenessProbePeriodSeconds(value: number) {
    this._livenessProbePeriodSeconds = value;
  }
  public resetLivenessProbePeriodSeconds() {
    this._livenessProbePeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessProbePeriodSecondsInput() {
    return this._livenessProbePeriodSeconds;
  }

  // liveness_probe_success_threshold - computed: false, optional: true, required: false
  private _livenessProbeSuccessThreshold?: number; 
  public get livenessProbeSuccessThreshold() {
    return this.getNumberAttribute('liveness_probe_success_threshold');
  }
  public set livenessProbeSuccessThreshold(value: number) {
    this._livenessProbeSuccessThreshold = value;
  }
  public resetLivenessProbeSuccessThreshold() {
    this._livenessProbeSuccessThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessProbeSuccessThresholdInput() {
    return this._livenessProbeSuccessThreshold;
  }

  // liveness_probe_tcp_socket_port - computed: false, optional: true, required: false
  private _livenessProbeTcpSocketPort?: number; 
  public get livenessProbeTcpSocketPort() {
    return this.getNumberAttribute('liveness_probe_tcp_socket_port');
  }
  public set livenessProbeTcpSocketPort(value: number) {
    this._livenessProbeTcpSocketPort = value;
  }
  public resetLivenessProbeTcpSocketPort() {
    this._livenessProbeTcpSocketPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessProbeTcpSocketPortInput() {
    return this._livenessProbeTcpSocketPort;
  }

  // liveness_probe_timeout_seconds - computed: false, optional: true, required: false
  private _livenessProbeTimeoutSeconds?: number; 
  public get livenessProbeTimeoutSeconds() {
    return this.getNumberAttribute('liveness_probe_timeout_seconds');
  }
  public set livenessProbeTimeoutSeconds(value: number) {
    this._livenessProbeTimeoutSeconds = value;
  }
  public resetLivenessProbeTimeoutSeconds() {
    this._livenessProbeTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessProbeTimeoutSecondsInput() {
    return this._livenessProbeTimeoutSeconds;
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

  // readiness_probe_exec_commands - computed: false, optional: true, required: false
  private _readinessProbeExecCommands?: string[]; 
  public get readinessProbeExecCommands() {
    return this.getListAttribute('readiness_probe_exec_commands');
  }
  public set readinessProbeExecCommands(value: string[]) {
    this._readinessProbeExecCommands = value;
  }
  public resetReadinessProbeExecCommands() {
    this._readinessProbeExecCommands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessProbeExecCommandsInput() {
    return this._readinessProbeExecCommands;
  }

  // readiness_probe_failure_threshold - computed: false, optional: true, required: false
  private _readinessProbeFailureThreshold?: number; 
  public get readinessProbeFailureThreshold() {
    return this.getNumberAttribute('readiness_probe_failure_threshold');
  }
  public set readinessProbeFailureThreshold(value: number) {
    this._readinessProbeFailureThreshold = value;
  }
  public resetReadinessProbeFailureThreshold() {
    this._readinessProbeFailureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessProbeFailureThresholdInput() {
    return this._readinessProbeFailureThreshold;
  }

  // readiness_probe_http_get_path - computed: false, optional: true, required: false
  private _readinessProbeHttpGetPath?: string; 
  public get readinessProbeHttpGetPath() {
    return this.getStringAttribute('readiness_probe_http_get_path');
  }
  public set readinessProbeHttpGetPath(value: string) {
    this._readinessProbeHttpGetPath = value;
  }
  public resetReadinessProbeHttpGetPath() {
    this._readinessProbeHttpGetPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessProbeHttpGetPathInput() {
    return this._readinessProbeHttpGetPath;
  }

  // readiness_probe_http_get_port - computed: false, optional: true, required: false
  private _readinessProbeHttpGetPort?: number; 
  public get readinessProbeHttpGetPort() {
    return this.getNumberAttribute('readiness_probe_http_get_port');
  }
  public set readinessProbeHttpGetPort(value: number) {
    this._readinessProbeHttpGetPort = value;
  }
  public resetReadinessProbeHttpGetPort() {
    this._readinessProbeHttpGetPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessProbeHttpGetPortInput() {
    return this._readinessProbeHttpGetPort;
  }

  // readiness_probe_http_get_scheme - computed: false, optional: true, required: false
  private _readinessProbeHttpGetScheme?: string; 
  public get readinessProbeHttpGetScheme() {
    return this.getStringAttribute('readiness_probe_http_get_scheme');
  }
  public set readinessProbeHttpGetScheme(value: string) {
    this._readinessProbeHttpGetScheme = value;
  }
  public resetReadinessProbeHttpGetScheme() {
    this._readinessProbeHttpGetScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessProbeHttpGetSchemeInput() {
    return this._readinessProbeHttpGetScheme;
  }

  // readiness_probe_initial_delay_seconds - computed: false, optional: true, required: false
  private _readinessProbeInitialDelaySeconds?: number; 
  public get readinessProbeInitialDelaySeconds() {
    return this.getNumberAttribute('readiness_probe_initial_delay_seconds');
  }
  public set readinessProbeInitialDelaySeconds(value: number) {
    this._readinessProbeInitialDelaySeconds = value;
  }
  public resetReadinessProbeInitialDelaySeconds() {
    this._readinessProbeInitialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessProbeInitialDelaySecondsInput() {
    return this._readinessProbeInitialDelaySeconds;
  }

  // readiness_probe_period_seconds - computed: false, optional: true, required: false
  private _readinessProbePeriodSeconds?: number; 
  public get readinessProbePeriodSeconds() {
    return this.getNumberAttribute('readiness_probe_period_seconds');
  }
  public set readinessProbePeriodSeconds(value: number) {
    this._readinessProbePeriodSeconds = value;
  }
  public resetReadinessProbePeriodSeconds() {
    this._readinessProbePeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessProbePeriodSecondsInput() {
    return this._readinessProbePeriodSeconds;
  }

  // readiness_probe_success_threshold - computed: false, optional: true, required: false
  private _readinessProbeSuccessThreshold?: number; 
  public get readinessProbeSuccessThreshold() {
    return this.getNumberAttribute('readiness_probe_success_threshold');
  }
  public set readinessProbeSuccessThreshold(value: number) {
    this._readinessProbeSuccessThreshold = value;
  }
  public resetReadinessProbeSuccessThreshold() {
    this._readinessProbeSuccessThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessProbeSuccessThresholdInput() {
    return this._readinessProbeSuccessThreshold;
  }

  // readiness_probe_tcp_socket_port - computed: false, optional: true, required: false
  private _readinessProbeTcpSocketPort?: number; 
  public get readinessProbeTcpSocketPort() {
    return this.getNumberAttribute('readiness_probe_tcp_socket_port');
  }
  public set readinessProbeTcpSocketPort(value: number) {
    this._readinessProbeTcpSocketPort = value;
  }
  public resetReadinessProbeTcpSocketPort() {
    this._readinessProbeTcpSocketPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessProbeTcpSocketPortInput() {
    return this._readinessProbeTcpSocketPort;
  }

  // readiness_probe_timeout_seconds - computed: false, optional: true, required: false
  private _readinessProbeTimeoutSeconds?: number; 
  public get readinessProbeTimeoutSeconds() {
    return this.getNumberAttribute('readiness_probe_timeout_seconds');
  }
  public set readinessProbeTimeoutSeconds(value: number) {
    this._readinessProbeTimeoutSeconds = value;
  }
  public resetReadinessProbeTimeoutSeconds() {
    this._readinessProbeTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessProbeTimeoutSecondsInput() {
    return this._readinessProbeTimeoutSeconds;
  }

  // security_context_capability_adds - computed: false, optional: true, required: false
  private _securityContextCapabilityAdds?: string[]; 
  public get securityContextCapabilityAdds() {
    return this.getListAttribute('security_context_capability_adds');
  }
  public set securityContextCapabilityAdds(value: string[]) {
    this._securityContextCapabilityAdds = value;
  }
  public resetSecurityContextCapabilityAdds() {
    this._securityContextCapabilityAdds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextCapabilityAddsInput() {
    return this._securityContextCapabilityAdds;
  }

  // security_context_read_only_root_file_system - computed: false, optional: true, required: false
  private _securityContextReadOnlyRootFileSystem?: boolean | cdktf.IResolvable; 
  public get securityContextReadOnlyRootFileSystem() {
    return this.getBooleanAttribute('security_context_read_only_root_file_system');
  }
  public set securityContextReadOnlyRootFileSystem(value: boolean | cdktf.IResolvable) {
    this._securityContextReadOnlyRootFileSystem = value;
  }
  public resetSecurityContextReadOnlyRootFileSystem() {
    this._securityContextReadOnlyRootFileSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextReadOnlyRootFileSystemInput() {
    return this._securityContextReadOnlyRootFileSystem;
  }

  // security_context_run_as_user - computed: false, optional: true, required: false
  private _securityContextRunAsUser?: number; 
  public get securityContextRunAsUser() {
    return this.getNumberAttribute('security_context_run_as_user');
  }
  public set securityContextRunAsUser(value: number) {
    this._securityContextRunAsUser = value;
  }
  public resetSecurityContextRunAsUser() {
    this._securityContextRunAsUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextRunAsUserInput() {
    return this._securityContextRunAsUser;
  }

  // stdin - computed: false, optional: true, required: false
  private _stdin?: boolean | cdktf.IResolvable; 
  public get stdin() {
    return this.getBooleanAttribute('stdin');
  }
  public set stdin(value: boolean | cdktf.IResolvable) {
    this._stdin = value;
  }
  public resetStdin() {
    this._stdin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stdinInput() {
    return this._stdin;
  }

  // tty - computed: false, optional: true, required: false
  private _tty?: boolean | cdktf.IResolvable; 
  public get tty() {
    return this.getBooleanAttribute('tty');
  }
  public set tty(value: boolean | cdktf.IResolvable) {
    this._tty = value;
  }
  public resetTty() {
    this._tty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttyInput() {
    return this._tty;
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

  // environment_vars - computed: false, optional: true, required: false
  private _environmentVars = new EssEciScalingConfigurationContainersEnvironmentVarsList(this, "environment_vars", true);
  public get environmentVars() {
    return this._environmentVars;
  }
  public putEnvironmentVars(value: EssEciScalingConfigurationContainersEnvironmentVars[] | cdktf.IResolvable) {
    this._environmentVars.internalValue = value;
  }
  public resetEnvironmentVars() {
    this._environmentVars.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVarsInput() {
    return this._environmentVars.internalValue;
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new EssEciScalingConfigurationContainersPortsList(this, "ports", true);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: EssEciScalingConfigurationContainersPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }

  // volume_mounts - computed: false, optional: true, required: false
  private _volumeMounts = new EssEciScalingConfigurationContainersVolumeMountsList(this, "volume_mounts", true);
  public get volumeMounts() {
    return this._volumeMounts;
  }
  public putVolumeMounts(value: EssEciScalingConfigurationContainersVolumeMounts[] | cdktf.IResolvable) {
    this._volumeMounts.internalValue = value;
  }
  public resetVolumeMounts() {
    this._volumeMounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeMountsInput() {
    return this._volumeMounts.internalValue;
  }
}

export class EssEciScalingConfigurationContainersList extends cdktf.ComplexList {
  public internalValue? : EssEciScalingConfigurationContainers[] | cdktf.IResolvable

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
  public get(index: number): EssEciScalingConfigurationContainersOutputReference {
    return new EssEciScalingConfigurationContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EssEciScalingConfigurationDnsConfigOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#name EssEciScalingConfiguration#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#value EssEciScalingConfiguration#value}
  */
  readonly value?: string;
}

export function essEciScalingConfigurationDnsConfigOptionsToTerraform(struct?: EssEciScalingConfigurationDnsConfigOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function essEciScalingConfigurationDnsConfigOptionsToHclTerraform(struct?: EssEciScalingConfigurationDnsConfigOptions | cdktf.IResolvable): any {
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

export class EssEciScalingConfigurationDnsConfigOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EssEciScalingConfigurationDnsConfigOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EssEciScalingConfigurationDnsConfigOptions | cdktf.IResolvable | undefined) {
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

export class EssEciScalingConfigurationDnsConfigOptionsList extends cdktf.ComplexList {
  public internalValue? : EssEciScalingConfigurationDnsConfigOptions[] | cdktf.IResolvable

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
  public get(index: number): EssEciScalingConfigurationDnsConfigOptionsOutputReference {
    return new EssEciScalingConfigurationDnsConfigOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EssEciScalingConfigurationHostAliases {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#hostnames EssEciScalingConfiguration#hostnames}
  */
  readonly hostnames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#ip EssEciScalingConfiguration#ip}
  */
  readonly ip?: string;
}

export function essEciScalingConfigurationHostAliasesToTerraform(struct?: EssEciScalingConfigurationHostAliases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostnames: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hostnames),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function essEciScalingConfigurationHostAliasesToHclTerraform(struct?: EssEciScalingConfigurationHostAliases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostnames: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hostnames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EssEciScalingConfigurationHostAliasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EssEciScalingConfigurationHostAliases | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostnames !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnames = this._hostnames;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EssEciScalingConfigurationHostAliases | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostnames = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostnames = value.hostnames;
      this._ip = value.ip;
    }
  }

  // hostnames - computed: false, optional: true, required: false
  private _hostnames?: string[]; 
  public get hostnames() {
    return this.getListAttribute('hostnames');
  }
  public set hostnames(value: string[]) {
    this._hostnames = value;
  }
  public resetHostnames() {
    this._hostnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnamesInput() {
    return this._hostnames;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }
}

export class EssEciScalingConfigurationHostAliasesList extends cdktf.ComplexList {
  public internalValue? : EssEciScalingConfigurationHostAliases[] | cdktf.IResolvable

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
  public get(index: number): EssEciScalingConfigurationHostAliasesOutputReference {
    return new EssEciScalingConfigurationHostAliasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EssEciScalingConfigurationImageRegistryCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#password EssEciScalingConfiguration#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#server EssEciScalingConfiguration#server}
  */
  readonly server?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#username EssEciScalingConfiguration#username}
  */
  readonly username?: string;
}

export function essEciScalingConfigurationImageRegistryCredentialsToTerraform(struct?: EssEciScalingConfigurationImageRegistryCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    server: cdktf.stringToTerraform(struct!.server),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function essEciScalingConfigurationImageRegistryCredentialsToHclTerraform(struct?: EssEciScalingConfigurationImageRegistryCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class EssEciScalingConfigurationImageRegistryCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EssEciScalingConfigurationImageRegistryCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: EssEciScalingConfigurationImageRegistryCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._password = value.password;
      this._server = value.server;
      this._username = value.username;
    }
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

export class EssEciScalingConfigurationImageRegistryCredentialsList extends cdktf.ComplexList {
  public internalValue? : EssEciScalingConfigurationImageRegistryCredentials[] | cdktf.IResolvable

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
  public get(index: number): EssEciScalingConfigurationImageRegistryCredentialsOutputReference {
    return new EssEciScalingConfigurationImageRegistryCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EssEciScalingConfigurationInitContainersEnvironmentVars {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#field_ref_field_path EssEciScalingConfiguration#field_ref_field_path}
  */
  readonly fieldRefFieldPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#key EssEciScalingConfiguration#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#value EssEciScalingConfiguration#value}
  */
  readonly value?: string;
}

export function essEciScalingConfigurationInitContainersEnvironmentVarsToTerraform(struct?: EssEciScalingConfigurationInitContainersEnvironmentVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_ref_field_path: cdktf.stringToTerraform(struct!.fieldRefFieldPath),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function essEciScalingConfigurationInitContainersEnvironmentVarsToHclTerraform(struct?: EssEciScalingConfigurationInitContainersEnvironmentVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_ref_field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldRefFieldPath),
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

export class EssEciScalingConfigurationInitContainersEnvironmentVarsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EssEciScalingConfigurationInitContainersEnvironmentVars | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldRefFieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRefFieldPath = this._fieldRefFieldPath;
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

  public set internalValue(value: EssEciScalingConfigurationInitContainersEnvironmentVars | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldRefFieldPath = undefined;
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
      this._fieldRefFieldPath = value.fieldRefFieldPath;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // field_ref_field_path - computed: false, optional: true, required: false
  private _fieldRefFieldPath?: string; 
  public get fieldRefFieldPath() {
    return this.getStringAttribute('field_ref_field_path');
  }
  public set fieldRefFieldPath(value: string) {
    this._fieldRefFieldPath = value;
  }
  public resetFieldRefFieldPath() {
    this._fieldRefFieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRefFieldPathInput() {
    return this._fieldRefFieldPath;
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

export class EssEciScalingConfigurationInitContainersEnvironmentVarsList extends cdktf.ComplexList {
  public internalValue? : EssEciScalingConfigurationInitContainersEnvironmentVars[] | cdktf.IResolvable

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
  public get(index: number): EssEciScalingConfigurationInitContainersEnvironmentVarsOutputReference {
    return new EssEciScalingConfigurationInitContainersEnvironmentVarsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EssEciScalingConfigurationInitContainersPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#port EssEciScalingConfiguration#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#protocol EssEciScalingConfiguration#protocol}
  */
  readonly protocol?: string;
}

export function essEciScalingConfigurationInitContainersPortsToTerraform(struct?: EssEciScalingConfigurationInitContainersPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function essEciScalingConfigurationInitContainersPortsToHclTerraform(struct?: EssEciScalingConfigurationInitContainersPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EssEciScalingConfigurationInitContainersPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EssEciScalingConfigurationInitContainersPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EssEciScalingConfigurationInitContainersPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._protocol = value.protocol;
    }
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class EssEciScalingConfigurationInitContainersPortsList extends cdktf.ComplexList {
  public internalValue? : EssEciScalingConfigurationInitContainersPorts[] | cdktf.IResolvable

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
  public get(index: number): EssEciScalingConfigurationInitContainersPortsOutputReference {
    return new EssEciScalingConfigurationInitContainersPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EssEciScalingConfigurationInitContainersVolumeMounts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#mount_path EssEciScalingConfiguration#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#mount_propagation EssEciScalingConfiguration#mount_propagation}
  */
  readonly mountPropagation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#name EssEciScalingConfiguration#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#read_only EssEciScalingConfiguration#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#sub_path EssEciScalingConfiguration#sub_path}
  */
  readonly subPath?: string;
}

export function essEciScalingConfigurationInitContainersVolumeMountsToTerraform(struct?: EssEciScalingConfigurationInitContainersVolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    mount_propagation: cdktf.stringToTerraform(struct!.mountPropagation),
    name: cdktf.stringToTerraform(struct!.name),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    sub_path: cdktf.stringToTerraform(struct!.subPath),
  }
}


export function essEciScalingConfigurationInitContainersVolumeMountsToHclTerraform(struct?: EssEciScalingConfigurationInitContainersVolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EssEciScalingConfigurationInitContainersVolumeMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EssEciScalingConfigurationInitContainersVolumeMounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._mountPropagation !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPropagation = this._mountPropagation;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._subPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.subPath = this._subPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EssEciScalingConfigurationInitContainersVolumeMounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
      this._mountPropagation = undefined;
      this._name = undefined;
      this._readOnly = undefined;
      this._subPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
      this._mountPropagation = value.mountPropagation;
      this._name = value.name;
      this._readOnly = value.readOnly;
      this._subPath = value.subPath;
    }
  }

  // mount_path - computed: false, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }

  // mount_propagation - computed: true, optional: true, required: false
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
}

export class EssEciScalingConfigurationInitContainersVolumeMountsList extends cdktf.ComplexList {
  public internalValue? : EssEciScalingConfigurationInitContainersVolumeMounts[] | cdktf.IResolvable

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
  public get(index: number): EssEciScalingConfigurationInitContainersVolumeMountsOutputReference {
    return new EssEciScalingConfigurationInitContainersVolumeMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EssEciScalingConfigurationInitContainers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#args EssEciScalingConfiguration#args}
  */
  readonly args?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#commands EssEciScalingConfiguration#commands}
  */
  readonly commands?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#cpu EssEciScalingConfiguration#cpu}
  */
  readonly cpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#gpu EssEciScalingConfiguration#gpu}
  */
  readonly gpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#image EssEciScalingConfiguration#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#image_pull_policy EssEciScalingConfiguration#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#memory EssEciScalingConfiguration#memory}
  */
  readonly memory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#name EssEciScalingConfiguration#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#security_context_capability_adds EssEciScalingConfiguration#security_context_capability_adds}
  */
  readonly securityContextCapabilityAdds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#security_context_read_only_root_file_system EssEciScalingConfiguration#security_context_read_only_root_file_system}
  */
  readonly securityContextReadOnlyRootFileSystem?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#security_context_run_as_user EssEciScalingConfiguration#security_context_run_as_user}
  */
  readonly securityContextRunAsUser?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#working_dir EssEciScalingConfiguration#working_dir}
  */
  readonly workingDir?: string;
  /**
  * environment_vars block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#environment_vars EssEciScalingConfiguration#environment_vars}
  */
  readonly environmentVars?: EssEciScalingConfigurationInitContainersEnvironmentVars[] | cdktf.IResolvable;
  /**
  * ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#ports EssEciScalingConfiguration#ports}
  */
  readonly ports?: EssEciScalingConfigurationInitContainersPorts[] | cdktf.IResolvable;
  /**
  * volume_mounts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#volume_mounts EssEciScalingConfiguration#volume_mounts}
  */
  readonly volumeMounts?: EssEciScalingConfigurationInitContainersVolumeMounts[] | cdktf.IResolvable;
}

export function essEciScalingConfigurationInitContainersToTerraform(struct?: EssEciScalingConfigurationInitContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    commands: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.commands),
    cpu: cdktf.numberToTerraform(struct!.cpu),
    gpu: cdktf.numberToTerraform(struct!.gpu),
    image: cdktf.stringToTerraform(struct!.image),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    memory: cdktf.numberToTerraform(struct!.memory),
    name: cdktf.stringToTerraform(struct!.name),
    security_context_capability_adds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityContextCapabilityAdds),
    security_context_read_only_root_file_system: cdktf.booleanToTerraform(struct!.securityContextReadOnlyRootFileSystem),
    security_context_run_as_user: cdktf.numberToTerraform(struct!.securityContextRunAsUser),
    working_dir: cdktf.stringToTerraform(struct!.workingDir),
    environment_vars: cdktf.listMapper(essEciScalingConfigurationInitContainersEnvironmentVarsToTerraform, true)(struct!.environmentVars),
    ports: cdktf.listMapper(essEciScalingConfigurationInitContainersPortsToTerraform, true)(struct!.ports),
    volume_mounts: cdktf.listMapper(essEciScalingConfigurationInitContainersVolumeMountsToTerraform, true)(struct!.volumeMounts),
  }
}


export function essEciScalingConfigurationInitContainersToHclTerraform(struct?: EssEciScalingConfigurationInitContainers | cdktf.IResolvable): any {
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
    gpu: {
      value: cdktf.numberToHclTerraform(struct!.gpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.imagePullPolicy),
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
    security_context_capability_adds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityContextCapabilityAdds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    security_context_read_only_root_file_system: {
      value: cdktf.booleanToHclTerraform(struct!.securityContextReadOnlyRootFileSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    security_context_run_as_user: {
      value: cdktf.numberToHclTerraform(struct!.securityContextRunAsUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    working_dir: {
      value: cdktf.stringToHclTerraform(struct!.workingDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment_vars: {
      value: cdktf.listMapperHcl(essEciScalingConfigurationInitContainersEnvironmentVarsToHclTerraform, true)(struct!.environmentVars),
      isBlock: true,
      type: "set",
      storageClassType: "EssEciScalingConfigurationInitContainersEnvironmentVarsList",
    },
    ports: {
      value: cdktf.listMapperHcl(essEciScalingConfigurationInitContainersPortsToHclTerraform, true)(struct!.ports),
      isBlock: true,
      type: "set",
      storageClassType: "EssEciScalingConfigurationInitContainersPortsList",
    },
    volume_mounts: {
      value: cdktf.listMapperHcl(essEciScalingConfigurationInitContainersVolumeMountsToHclTerraform, true)(struct!.volumeMounts),
      isBlock: true,
      type: "set",
      storageClassType: "EssEciScalingConfigurationInitContainersVolumeMountsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EssEciScalingConfigurationInitContainersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EssEciScalingConfigurationInitContainers | cdktf.IResolvable | undefined {
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
    if (this._gpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpu = this._gpu;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._securityContextCapabilityAdds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContextCapabilityAdds = this._securityContextCapabilityAdds;
    }
    if (this._securityContextReadOnlyRootFileSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContextReadOnlyRootFileSystem = this._securityContextReadOnlyRootFileSystem;
    }
    if (this._securityContextRunAsUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContextRunAsUser = this._securityContextRunAsUser;
    }
    if (this._workingDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.workingDir = this._workingDir;
    }
    if (this._environmentVars?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentVars = this._environmentVars?.internalValue;
    }
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    if (this._volumeMounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMounts = this._volumeMounts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EssEciScalingConfigurationInitContainers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._commands = undefined;
      this._cpu = undefined;
      this._gpu = undefined;
      this._image = undefined;
      this._imagePullPolicy = undefined;
      this._memory = undefined;
      this._name = undefined;
      this._securityContextCapabilityAdds = undefined;
      this._securityContextReadOnlyRootFileSystem = undefined;
      this._securityContextRunAsUser = undefined;
      this._workingDir = undefined;
      this._environmentVars.internalValue = undefined;
      this._ports.internalValue = undefined;
      this._volumeMounts.internalValue = undefined;
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
      this._gpu = value.gpu;
      this._image = value.image;
      this._imagePullPolicy = value.imagePullPolicy;
      this._memory = value.memory;
      this._name = value.name;
      this._securityContextCapabilityAdds = value.securityContextCapabilityAdds;
      this._securityContextReadOnlyRootFileSystem = value.securityContextReadOnlyRootFileSystem;
      this._securityContextRunAsUser = value.securityContextRunAsUser;
      this._workingDir = value.workingDir;
      this._environmentVars.internalValue = value.environmentVars;
      this._ports.internalValue = value.ports;
      this._volumeMounts.internalValue = value.volumeMounts;
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

  // gpu - computed: false, optional: true, required: false
  private _gpu?: number; 
  public get gpu() {
    return this.getNumberAttribute('gpu');
  }
  public set gpu(value: number) {
    this._gpu = value;
  }
  public resetGpu() {
    this._gpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuInput() {
    return this._gpu;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // image_pull_policy - computed: false, optional: true, required: false
  private _imagePullPolicy?: string; 
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }
  public set imagePullPolicy(value: string) {
    this._imagePullPolicy = value;
  }
  public resetImagePullPolicy() {
    this._imagePullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullPolicyInput() {
    return this._imagePullPolicy;
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

  // security_context_capability_adds - computed: false, optional: true, required: false
  private _securityContextCapabilityAdds?: string[]; 
  public get securityContextCapabilityAdds() {
    return this.getListAttribute('security_context_capability_adds');
  }
  public set securityContextCapabilityAdds(value: string[]) {
    this._securityContextCapabilityAdds = value;
  }
  public resetSecurityContextCapabilityAdds() {
    this._securityContextCapabilityAdds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextCapabilityAddsInput() {
    return this._securityContextCapabilityAdds;
  }

  // security_context_read_only_root_file_system - computed: false, optional: true, required: false
  private _securityContextReadOnlyRootFileSystem?: boolean | cdktf.IResolvable; 
  public get securityContextReadOnlyRootFileSystem() {
    return this.getBooleanAttribute('security_context_read_only_root_file_system');
  }
  public set securityContextReadOnlyRootFileSystem(value: boolean | cdktf.IResolvable) {
    this._securityContextReadOnlyRootFileSystem = value;
  }
  public resetSecurityContextReadOnlyRootFileSystem() {
    this._securityContextReadOnlyRootFileSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextReadOnlyRootFileSystemInput() {
    return this._securityContextReadOnlyRootFileSystem;
  }

  // security_context_run_as_user - computed: false, optional: true, required: false
  private _securityContextRunAsUser?: number; 
  public get securityContextRunAsUser() {
    return this.getNumberAttribute('security_context_run_as_user');
  }
  public set securityContextRunAsUser(value: number) {
    this._securityContextRunAsUser = value;
  }
  public resetSecurityContextRunAsUser() {
    this._securityContextRunAsUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextRunAsUserInput() {
    return this._securityContextRunAsUser;
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

  // environment_vars - computed: false, optional: true, required: false
  private _environmentVars = new EssEciScalingConfigurationInitContainersEnvironmentVarsList(this, "environment_vars", true);
  public get environmentVars() {
    return this._environmentVars;
  }
  public putEnvironmentVars(value: EssEciScalingConfigurationInitContainersEnvironmentVars[] | cdktf.IResolvable) {
    this._environmentVars.internalValue = value;
  }
  public resetEnvironmentVars() {
    this._environmentVars.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVarsInput() {
    return this._environmentVars.internalValue;
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new EssEciScalingConfigurationInitContainersPortsList(this, "ports", true);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: EssEciScalingConfigurationInitContainersPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }

  // volume_mounts - computed: false, optional: true, required: false
  private _volumeMounts = new EssEciScalingConfigurationInitContainersVolumeMountsList(this, "volume_mounts", true);
  public get volumeMounts() {
    return this._volumeMounts;
  }
  public putVolumeMounts(value: EssEciScalingConfigurationInitContainersVolumeMounts[] | cdktf.IResolvable) {
    this._volumeMounts.internalValue = value;
  }
  public resetVolumeMounts() {
    this._volumeMounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeMountsInput() {
    return this._volumeMounts.internalValue;
  }
}

export class EssEciScalingConfigurationInitContainersList extends cdktf.ComplexList {
  public internalValue? : EssEciScalingConfigurationInitContainers[] | cdktf.IResolvable

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
  public get(index: number): EssEciScalingConfigurationInitContainersOutputReference {
    return new EssEciScalingConfigurationInitContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EssEciScalingConfigurationSecurityContextSysctls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#name EssEciScalingConfiguration#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#value EssEciScalingConfiguration#value}
  */
  readonly value?: string;
}

export function essEciScalingConfigurationSecurityContextSysctlsToTerraform(struct?: EssEciScalingConfigurationSecurityContextSysctls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function essEciScalingConfigurationSecurityContextSysctlsToHclTerraform(struct?: EssEciScalingConfigurationSecurityContextSysctls | cdktf.IResolvable): any {
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

export class EssEciScalingConfigurationSecurityContextSysctlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EssEciScalingConfigurationSecurityContextSysctls | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EssEciScalingConfigurationSecurityContextSysctls | cdktf.IResolvable | undefined) {
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

export class EssEciScalingConfigurationSecurityContextSysctlsList extends cdktf.ComplexList {
  public internalValue? : EssEciScalingConfigurationSecurityContextSysctls[] | cdktf.IResolvable

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
  public get(index: number): EssEciScalingConfigurationSecurityContextSysctlsOutputReference {
    return new EssEciScalingConfigurationSecurityContextSysctlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EssEciScalingConfigurationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#create EssEciScalingConfiguration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#delete EssEciScalingConfiguration#delete}
  */
  readonly delete?: string;
}

export function essEciScalingConfigurationTimeoutsToTerraform(struct?: EssEciScalingConfigurationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function essEciScalingConfigurationTimeoutsToHclTerraform(struct?: EssEciScalingConfigurationTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EssEciScalingConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EssEciScalingConfigurationTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EssEciScalingConfigurationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}
export interface EssEciScalingConfigurationVolumesConfigFileVolumeConfigFileToPaths {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#content EssEciScalingConfiguration#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#mode EssEciScalingConfiguration#mode}
  */
  readonly mode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#path EssEciScalingConfiguration#path}
  */
  readonly path?: string;
}

export function essEciScalingConfigurationVolumesConfigFileVolumeConfigFileToPathsToTerraform(struct?: EssEciScalingConfigurationVolumesConfigFileVolumeConfigFileToPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function essEciScalingConfigurationVolumesConfigFileVolumeConfigFileToPathsToHclTerraform(struct?: EssEciScalingConfigurationVolumesConfigFileVolumeConfigFileToPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EssEciScalingConfigurationVolumesConfigFileVolumeConfigFileToPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EssEciScalingConfigurationVolumesConfigFileVolumeConfigFileToPaths | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EssEciScalingConfigurationVolumesConfigFileVolumeConfigFileToPaths | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._mode = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._mode = value.mode;
      this._path = value.path;
    }
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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
}

export class EssEciScalingConfigurationVolumesConfigFileVolumeConfigFileToPathsList extends cdktf.ComplexList {
  public internalValue? : EssEciScalingConfigurationVolumesConfigFileVolumeConfigFileToPaths[] | cdktf.IResolvable

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
  public get(index: number): EssEciScalingConfigurationVolumesConfigFileVolumeConfigFileToPathsOutputReference {
    return new EssEciScalingConfigurationVolumesConfigFileVolumeConfigFileToPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EssEciScalingConfigurationVolumes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#config_file_volume_default_mode EssEciScalingConfiguration#config_file_volume_default_mode}
  */
  readonly configFileVolumeDefaultMode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#disk_volume_disk_id EssEciScalingConfiguration#disk_volume_disk_id}
  */
  readonly diskVolumeDiskId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#disk_volume_disk_size EssEciScalingConfiguration#disk_volume_disk_size}
  */
  readonly diskVolumeDiskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#disk_volume_fs_type EssEciScalingConfiguration#disk_volume_fs_type}
  */
  readonly diskVolumeFsType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#empty_dir_volume_medium EssEciScalingConfiguration#empty_dir_volume_medium}
  */
  readonly emptyDirVolumeMedium?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#empty_dir_volume_size_limit EssEciScalingConfiguration#empty_dir_volume_size_limit}
  */
  readonly emptyDirVolumeSizeLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#flex_volume_driver EssEciScalingConfiguration#flex_volume_driver}
  */
  readonly flexVolumeDriver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#flex_volume_fs_type EssEciScalingConfiguration#flex_volume_fs_type}
  */
  readonly flexVolumeFsType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#flex_volume_options EssEciScalingConfiguration#flex_volume_options}
  */
  readonly flexVolumeOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#host_path_volume_path EssEciScalingConfiguration#host_path_volume_path}
  */
  readonly hostPathVolumePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#host_path_volume_type EssEciScalingConfiguration#host_path_volume_type}
  */
  readonly hostPathVolumeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#name EssEciScalingConfiguration#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#nfs_volume_path EssEciScalingConfiguration#nfs_volume_path}
  */
  readonly nfsVolumePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#nfs_volume_read_only EssEciScalingConfiguration#nfs_volume_read_only}
  */
  readonly nfsVolumeReadOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#nfs_volume_server EssEciScalingConfiguration#nfs_volume_server}
  */
  readonly nfsVolumeServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#type EssEciScalingConfiguration#type}
  */
  readonly type?: string;
  /**
  * config_file_volume_config_file_to_paths block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#config_file_volume_config_file_to_paths EssEciScalingConfiguration#config_file_volume_config_file_to_paths}
  */
  readonly configFileVolumeConfigFileToPaths?: EssEciScalingConfigurationVolumesConfigFileVolumeConfigFileToPaths[] | cdktf.IResolvable;
}

export function essEciScalingConfigurationVolumesToTerraform(struct?: EssEciScalingConfigurationVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_file_volume_default_mode: cdktf.numberToTerraform(struct!.configFileVolumeDefaultMode),
    disk_volume_disk_id: cdktf.stringToTerraform(struct!.diskVolumeDiskId),
    disk_volume_disk_size: cdktf.numberToTerraform(struct!.diskVolumeDiskSize),
    disk_volume_fs_type: cdktf.stringToTerraform(struct!.diskVolumeFsType),
    empty_dir_volume_medium: cdktf.stringToTerraform(struct!.emptyDirVolumeMedium),
    empty_dir_volume_size_limit: cdktf.stringToTerraform(struct!.emptyDirVolumeSizeLimit),
    flex_volume_driver: cdktf.stringToTerraform(struct!.flexVolumeDriver),
    flex_volume_fs_type: cdktf.stringToTerraform(struct!.flexVolumeFsType),
    flex_volume_options: cdktf.stringToTerraform(struct!.flexVolumeOptions),
    host_path_volume_path: cdktf.stringToTerraform(struct!.hostPathVolumePath),
    host_path_volume_type: cdktf.stringToTerraform(struct!.hostPathVolumeType),
    name: cdktf.stringToTerraform(struct!.name),
    nfs_volume_path: cdktf.stringToTerraform(struct!.nfsVolumePath),
    nfs_volume_read_only: cdktf.booleanToTerraform(struct!.nfsVolumeReadOnly),
    nfs_volume_server: cdktf.stringToTerraform(struct!.nfsVolumeServer),
    type: cdktf.stringToTerraform(struct!.type),
    config_file_volume_config_file_to_paths: cdktf.listMapper(essEciScalingConfigurationVolumesConfigFileVolumeConfigFileToPathsToTerraform, true)(struct!.configFileVolumeConfigFileToPaths),
  }
}


export function essEciScalingConfigurationVolumesToHclTerraform(struct?: EssEciScalingConfigurationVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_file_volume_default_mode: {
      value: cdktf.numberToHclTerraform(struct!.configFileVolumeDefaultMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_volume_disk_id: {
      value: cdktf.stringToHclTerraform(struct!.diskVolumeDiskId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_volume_disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskVolumeDiskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_volume_fs_type: {
      value: cdktf.stringToHclTerraform(struct!.diskVolumeFsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    empty_dir_volume_medium: {
      value: cdktf.stringToHclTerraform(struct!.emptyDirVolumeMedium),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    empty_dir_volume_size_limit: {
      value: cdktf.stringToHclTerraform(struct!.emptyDirVolumeSizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flex_volume_driver: {
      value: cdktf.stringToHclTerraform(struct!.flexVolumeDriver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flex_volume_fs_type: {
      value: cdktf.stringToHclTerraform(struct!.flexVolumeFsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flex_volume_options: {
      value: cdktf.stringToHclTerraform(struct!.flexVolumeOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_path_volume_path: {
      value: cdktf.stringToHclTerraform(struct!.hostPathVolumePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_path_volume_type: {
      value: cdktf.stringToHclTerraform(struct!.hostPathVolumeType),
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
    nfs_volume_path: {
      value: cdktf.stringToHclTerraform(struct!.nfsVolumePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nfs_volume_read_only: {
      value: cdktf.booleanToHclTerraform(struct!.nfsVolumeReadOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nfs_volume_server: {
      value: cdktf.stringToHclTerraform(struct!.nfsVolumeServer),
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
    config_file_volume_config_file_to_paths: {
      value: cdktf.listMapperHcl(essEciScalingConfigurationVolumesConfigFileVolumeConfigFileToPathsToHclTerraform, true)(struct!.configFileVolumeConfigFileToPaths),
      isBlock: true,
      type: "set",
      storageClassType: "EssEciScalingConfigurationVolumesConfigFileVolumeConfigFileToPathsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EssEciScalingConfigurationVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EssEciScalingConfigurationVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configFileVolumeDefaultMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.configFileVolumeDefaultMode = this._configFileVolumeDefaultMode;
    }
    if (this._diskVolumeDiskId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskVolumeDiskId = this._diskVolumeDiskId;
    }
    if (this._diskVolumeDiskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskVolumeDiskSize = this._diskVolumeDiskSize;
    }
    if (this._diskVolumeFsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskVolumeFsType = this._diskVolumeFsType;
    }
    if (this._emptyDirVolumeMedium !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyDirVolumeMedium = this._emptyDirVolumeMedium;
    }
    if (this._emptyDirVolumeSizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyDirVolumeSizeLimit = this._emptyDirVolumeSizeLimit;
    }
    if (this._flexVolumeDriver !== undefined) {
      hasAnyValues = true;
      internalValueResult.flexVolumeDriver = this._flexVolumeDriver;
    }
    if (this._flexVolumeFsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.flexVolumeFsType = this._flexVolumeFsType;
    }
    if (this._flexVolumeOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.flexVolumeOptions = this._flexVolumeOptions;
    }
    if (this._hostPathVolumePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostPathVolumePath = this._hostPathVolumePath;
    }
    if (this._hostPathVolumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostPathVolumeType = this._hostPathVolumeType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nfsVolumePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfsVolumePath = this._nfsVolumePath;
    }
    if (this._nfsVolumeReadOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfsVolumeReadOnly = this._nfsVolumeReadOnly;
    }
    if (this._nfsVolumeServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfsVolumeServer = this._nfsVolumeServer;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._configFileVolumeConfigFileToPaths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configFileVolumeConfigFileToPaths = this._configFileVolumeConfigFileToPaths?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EssEciScalingConfigurationVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configFileVolumeDefaultMode = undefined;
      this._diskVolumeDiskId = undefined;
      this._diskVolumeDiskSize = undefined;
      this._diskVolumeFsType = undefined;
      this._emptyDirVolumeMedium = undefined;
      this._emptyDirVolumeSizeLimit = undefined;
      this._flexVolumeDriver = undefined;
      this._flexVolumeFsType = undefined;
      this._flexVolumeOptions = undefined;
      this._hostPathVolumePath = undefined;
      this._hostPathVolumeType = undefined;
      this._name = undefined;
      this._nfsVolumePath = undefined;
      this._nfsVolumeReadOnly = undefined;
      this._nfsVolumeServer = undefined;
      this._type = undefined;
      this._configFileVolumeConfigFileToPaths.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configFileVolumeDefaultMode = value.configFileVolumeDefaultMode;
      this._diskVolumeDiskId = value.diskVolumeDiskId;
      this._diskVolumeDiskSize = value.diskVolumeDiskSize;
      this._diskVolumeFsType = value.diskVolumeFsType;
      this._emptyDirVolumeMedium = value.emptyDirVolumeMedium;
      this._emptyDirVolumeSizeLimit = value.emptyDirVolumeSizeLimit;
      this._flexVolumeDriver = value.flexVolumeDriver;
      this._flexVolumeFsType = value.flexVolumeFsType;
      this._flexVolumeOptions = value.flexVolumeOptions;
      this._hostPathVolumePath = value.hostPathVolumePath;
      this._hostPathVolumeType = value.hostPathVolumeType;
      this._name = value.name;
      this._nfsVolumePath = value.nfsVolumePath;
      this._nfsVolumeReadOnly = value.nfsVolumeReadOnly;
      this._nfsVolumeServer = value.nfsVolumeServer;
      this._type = value.type;
      this._configFileVolumeConfigFileToPaths.internalValue = value.configFileVolumeConfigFileToPaths;
    }
  }

  // config_file_volume_default_mode - computed: false, optional: true, required: false
  private _configFileVolumeDefaultMode?: number; 
  public get configFileVolumeDefaultMode() {
    return this.getNumberAttribute('config_file_volume_default_mode');
  }
  public set configFileVolumeDefaultMode(value: number) {
    this._configFileVolumeDefaultMode = value;
  }
  public resetConfigFileVolumeDefaultMode() {
    this._configFileVolumeDefaultMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configFileVolumeDefaultModeInput() {
    return this._configFileVolumeDefaultMode;
  }

  // disk_volume_disk_id - computed: false, optional: true, required: false
  private _diskVolumeDiskId?: string; 
  public get diskVolumeDiskId() {
    return this.getStringAttribute('disk_volume_disk_id');
  }
  public set diskVolumeDiskId(value: string) {
    this._diskVolumeDiskId = value;
  }
  public resetDiskVolumeDiskId() {
    this._diskVolumeDiskId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskVolumeDiskIdInput() {
    return this._diskVolumeDiskId;
  }

  // disk_volume_disk_size - computed: false, optional: true, required: false
  private _diskVolumeDiskSize?: number; 
  public get diskVolumeDiskSize() {
    return this.getNumberAttribute('disk_volume_disk_size');
  }
  public set diskVolumeDiskSize(value: number) {
    this._diskVolumeDiskSize = value;
  }
  public resetDiskVolumeDiskSize() {
    this._diskVolumeDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskVolumeDiskSizeInput() {
    return this._diskVolumeDiskSize;
  }

  // disk_volume_fs_type - computed: false, optional: true, required: false
  private _diskVolumeFsType?: string; 
  public get diskVolumeFsType() {
    return this.getStringAttribute('disk_volume_fs_type');
  }
  public set diskVolumeFsType(value: string) {
    this._diskVolumeFsType = value;
  }
  public resetDiskVolumeFsType() {
    this._diskVolumeFsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskVolumeFsTypeInput() {
    return this._diskVolumeFsType;
  }

  // empty_dir_volume_medium - computed: true, optional: true, required: false
  private _emptyDirVolumeMedium?: string; 
  public get emptyDirVolumeMedium() {
    return this.getStringAttribute('empty_dir_volume_medium');
  }
  public set emptyDirVolumeMedium(value: string) {
    this._emptyDirVolumeMedium = value;
  }
  public resetEmptyDirVolumeMedium() {
    this._emptyDirVolumeMedium = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyDirVolumeMediumInput() {
    return this._emptyDirVolumeMedium;
  }

  // empty_dir_volume_size_limit - computed: false, optional: true, required: false
  private _emptyDirVolumeSizeLimit?: string; 
  public get emptyDirVolumeSizeLimit() {
    return this.getStringAttribute('empty_dir_volume_size_limit');
  }
  public set emptyDirVolumeSizeLimit(value: string) {
    this._emptyDirVolumeSizeLimit = value;
  }
  public resetEmptyDirVolumeSizeLimit() {
    this._emptyDirVolumeSizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyDirVolumeSizeLimitInput() {
    return this._emptyDirVolumeSizeLimit;
  }

  // flex_volume_driver - computed: false, optional: true, required: false
  private _flexVolumeDriver?: string; 
  public get flexVolumeDriver() {
    return this.getStringAttribute('flex_volume_driver');
  }
  public set flexVolumeDriver(value: string) {
    this._flexVolumeDriver = value;
  }
  public resetFlexVolumeDriver() {
    this._flexVolumeDriver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flexVolumeDriverInput() {
    return this._flexVolumeDriver;
  }

  // flex_volume_fs_type - computed: false, optional: true, required: false
  private _flexVolumeFsType?: string; 
  public get flexVolumeFsType() {
    return this.getStringAttribute('flex_volume_fs_type');
  }
  public set flexVolumeFsType(value: string) {
    this._flexVolumeFsType = value;
  }
  public resetFlexVolumeFsType() {
    this._flexVolumeFsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flexVolumeFsTypeInput() {
    return this._flexVolumeFsType;
  }

  // flex_volume_options - computed: false, optional: true, required: false
  private _flexVolumeOptions?: string; 
  public get flexVolumeOptions() {
    return this.getStringAttribute('flex_volume_options');
  }
  public set flexVolumeOptions(value: string) {
    this._flexVolumeOptions = value;
  }
  public resetFlexVolumeOptions() {
    this._flexVolumeOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flexVolumeOptionsInput() {
    return this._flexVolumeOptions;
  }

  // host_path_volume_path - computed: false, optional: true, required: false
  private _hostPathVolumePath?: string; 
  public get hostPathVolumePath() {
    return this.getStringAttribute('host_path_volume_path');
  }
  public set hostPathVolumePath(value: string) {
    this._hostPathVolumePath = value;
  }
  public resetHostPathVolumePath() {
    this._hostPathVolumePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPathVolumePathInput() {
    return this._hostPathVolumePath;
  }

  // host_path_volume_type - computed: false, optional: true, required: false
  private _hostPathVolumeType?: string; 
  public get hostPathVolumeType() {
    return this.getStringAttribute('host_path_volume_type');
  }
  public set hostPathVolumeType(value: string) {
    this._hostPathVolumeType = value;
  }
  public resetHostPathVolumeType() {
    this._hostPathVolumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPathVolumeTypeInput() {
    return this._hostPathVolumeType;
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

  // nfs_volume_path - computed: false, optional: true, required: false
  private _nfsVolumePath?: string; 
  public get nfsVolumePath() {
    return this.getStringAttribute('nfs_volume_path');
  }
  public set nfsVolumePath(value: string) {
    this._nfsVolumePath = value;
  }
  public resetNfsVolumePath() {
    this._nfsVolumePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsVolumePathInput() {
    return this._nfsVolumePath;
  }

  // nfs_volume_read_only - computed: false, optional: true, required: false
  private _nfsVolumeReadOnly?: boolean | cdktf.IResolvable; 
  public get nfsVolumeReadOnly() {
    return this.getBooleanAttribute('nfs_volume_read_only');
  }
  public set nfsVolumeReadOnly(value: boolean | cdktf.IResolvable) {
    this._nfsVolumeReadOnly = value;
  }
  public resetNfsVolumeReadOnly() {
    this._nfsVolumeReadOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsVolumeReadOnlyInput() {
    return this._nfsVolumeReadOnly;
  }

  // nfs_volume_server - computed: false, optional: true, required: false
  private _nfsVolumeServer?: string; 
  public get nfsVolumeServer() {
    return this.getStringAttribute('nfs_volume_server');
  }
  public set nfsVolumeServer(value: string) {
    this._nfsVolumeServer = value;
  }
  public resetNfsVolumeServer() {
    this._nfsVolumeServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsVolumeServerInput() {
    return this._nfsVolumeServer;
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

  // config_file_volume_config_file_to_paths - computed: false, optional: true, required: false
  private _configFileVolumeConfigFileToPaths = new EssEciScalingConfigurationVolumesConfigFileVolumeConfigFileToPathsList(this, "config_file_volume_config_file_to_paths", true);
  public get configFileVolumeConfigFileToPaths() {
    return this._configFileVolumeConfigFileToPaths;
  }
  public putConfigFileVolumeConfigFileToPaths(value: EssEciScalingConfigurationVolumesConfigFileVolumeConfigFileToPaths[] | cdktf.IResolvable) {
    this._configFileVolumeConfigFileToPaths.internalValue = value;
  }
  public resetConfigFileVolumeConfigFileToPaths() {
    this._configFileVolumeConfigFileToPaths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configFileVolumeConfigFileToPathsInput() {
    return this._configFileVolumeConfigFileToPaths.internalValue;
  }
}

export class EssEciScalingConfigurationVolumesList extends cdktf.ComplexList {
  public internalValue? : EssEciScalingConfigurationVolumes[] | cdktf.IResolvable

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
  public get(index: number): EssEciScalingConfigurationVolumesOutputReference {
    return new EssEciScalingConfigurationVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration alicloud_ess_eci_scaling_configuration}
*/
export class EssEciScalingConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ess_eci_scaling_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EssEciScalingConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EssEciScalingConfiguration to import
  * @param importFromId The id of the existing EssEciScalingConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EssEciScalingConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ess_eci_scaling_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_eci_scaling_configuration alicloud_ess_eci_scaling_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EssEciScalingConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: EssEciScalingConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ess_eci_scaling_configuration',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._active = config.active;
    this._activeDeadlineSeconds = config.activeDeadlineSeconds;
    this._autoCreateEip = config.autoCreateEip;
    this._autoMatchImageCache = config.autoMatchImageCache;
    this._containerGroupName = config.containerGroupName;
    this._costOptimization = config.costOptimization;
    this._cpu = config.cpu;
    this._cpuOptionsCore = config.cpuOptionsCore;
    this._cpuOptionsThreadsPerCore = config.cpuOptionsThreadsPerCore;
    this._description = config.description;
    this._dnsPolicy = config.dnsPolicy;
    this._egressBandwidth = config.egressBandwidth;
    this._eipBandwidth = config.eipBandwidth;
    this._enableSls = config.enableSls;
    this._ephemeralStorage = config.ephemeralStorage;
    this._forceDelete = config.forceDelete;
    this._hostName = config.hostName;
    this._id = config.id;
    this._imageSnapshotId = config.imageSnapshotId;
    this._ingressBandwidth = config.ingressBandwidth;
    this._instanceFamilyLevel = config.instanceFamilyLevel;
    this._instanceTypes = config.instanceTypes;
    this._ipv6AddressCount = config.ipv6AddressCount;
    this._loadBalancerWeight = config.loadBalancerWeight;
    this._memory = config.memory;
    this._ramRoleName = config.ramRoleName;
    this._resourceGroupId = config.resourceGroupId;
    this._restartPolicy = config.restartPolicy;
    this._scalingConfigurationName = config.scalingConfigurationName;
    this._scalingGroupId = config.scalingGroupId;
    this._securityGroupId = config.securityGroupId;
    this._spotPriceLimit = config.spotPriceLimit;
    this._spotStrategy = config.spotStrategy;
    this._tags = config.tags;
    this._terminationGracePeriodSeconds = config.terminationGracePeriodSeconds;
    this._acrRegistryInfos.internalValue = config.acrRegistryInfos;
    this._containers.internalValue = config.containers;
    this._dnsConfigOptions.internalValue = config.dnsConfigOptions;
    this._hostAliases.internalValue = config.hostAliases;
    this._imageRegistryCredentials.internalValue = config.imageRegistryCredentials;
    this._initContainers.internalValue = config.initContainers;
    this._securityContextSysctls.internalValue = config.securityContextSysctls;
    this._timeouts.internalValue = config.timeouts;
    this._volumes.internalValue = config.volumes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // active_deadline_seconds - computed: false, optional: true, required: false
  private _activeDeadlineSeconds?: number; 
  public get activeDeadlineSeconds() {
    return this.getNumberAttribute('active_deadline_seconds');
  }
  public set activeDeadlineSeconds(value: number) {
    this._activeDeadlineSeconds = value;
  }
  public resetActiveDeadlineSeconds() {
    this._activeDeadlineSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDeadlineSecondsInput() {
    return this._activeDeadlineSeconds;
  }

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

  // auto_match_image_cache - computed: false, optional: true, required: false
  private _autoMatchImageCache?: boolean | cdktf.IResolvable; 
  public get autoMatchImageCache() {
    return this.getBooleanAttribute('auto_match_image_cache');
  }
  public set autoMatchImageCache(value: boolean | cdktf.IResolvable) {
    this._autoMatchImageCache = value;
  }
  public resetAutoMatchImageCache() {
    this._autoMatchImageCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoMatchImageCacheInput() {
    return this._autoMatchImageCache;
  }

  // container_group_name - computed: false, optional: true, required: false
  private _containerGroupName?: string; 
  public get containerGroupName() {
    return this.getStringAttribute('container_group_name');
  }
  public set containerGroupName(value: string) {
    this._containerGroupName = value;
  }
  public resetContainerGroupName() {
    this._containerGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerGroupNameInput() {
    return this._containerGroupName;
  }

  // cost_optimization - computed: false, optional: true, required: false
  private _costOptimization?: boolean | cdktf.IResolvable; 
  public get costOptimization() {
    return this.getBooleanAttribute('cost_optimization');
  }
  public set costOptimization(value: boolean | cdktf.IResolvable) {
    this._costOptimization = value;
  }
  public resetCostOptimization() {
    this._costOptimization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costOptimizationInput() {
    return this._costOptimization;
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

  // cpu_options_core - computed: false, optional: true, required: false
  private _cpuOptionsCore?: number; 
  public get cpuOptionsCore() {
    return this.getNumberAttribute('cpu_options_core');
  }
  public set cpuOptionsCore(value: number) {
    this._cpuOptionsCore = value;
  }
  public resetCpuOptionsCore() {
    this._cpuOptionsCore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuOptionsCoreInput() {
    return this._cpuOptionsCore;
  }

  // cpu_options_threads_per_core - computed: false, optional: true, required: false
  private _cpuOptionsThreadsPerCore?: number; 
  public get cpuOptionsThreadsPerCore() {
    return this.getNumberAttribute('cpu_options_threads_per_core');
  }
  public set cpuOptionsThreadsPerCore(value: number) {
    this._cpuOptionsThreadsPerCore = value;
  }
  public resetCpuOptionsThreadsPerCore() {
    this._cpuOptionsThreadsPerCore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuOptionsThreadsPerCoreInput() {
    return this._cpuOptionsThreadsPerCore;
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

  // dns_policy - computed: false, optional: true, required: false
  private _dnsPolicy?: string; 
  public get dnsPolicy() {
    return this.getStringAttribute('dns_policy');
  }
  public set dnsPolicy(value: string) {
    this._dnsPolicy = value;
  }
  public resetDnsPolicy() {
    this._dnsPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPolicyInput() {
    return this._dnsPolicy;
  }

  // egress_bandwidth - computed: false, optional: true, required: false
  private _egressBandwidth?: number; 
  public get egressBandwidth() {
    return this.getNumberAttribute('egress_bandwidth');
  }
  public set egressBandwidth(value: number) {
    this._egressBandwidth = value;
  }
  public resetEgressBandwidth() {
    this._egressBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressBandwidthInput() {
    return this._egressBandwidth;
  }

  // eip_bandwidth - computed: false, optional: true, required: false
  private _eipBandwidth?: number; 
  public get eipBandwidth() {
    return this.getNumberAttribute('eip_bandwidth');
  }
  public set eipBandwidth(value: number) {
    this._eipBandwidth = value;
  }
  public resetEipBandwidth() {
    this._eipBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eipBandwidthInput() {
    return this._eipBandwidth;
  }

  // enable_sls - computed: false, optional: true, required: false
  private _enableSls?: boolean | cdktf.IResolvable; 
  public get enableSls() {
    return this.getBooleanAttribute('enable_sls');
  }
  public set enableSls(value: boolean | cdktf.IResolvable) {
    this._enableSls = value;
  }
  public resetEnableSls() {
    this._enableSls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSlsInput() {
    return this._enableSls;
  }

  // ephemeral_storage - computed: false, optional: true, required: false
  private _ephemeralStorage?: number; 
  public get ephemeralStorage() {
    return this.getNumberAttribute('ephemeral_storage');
  }
  public set ephemeralStorage(value: number) {
    this._ephemeralStorage = value;
  }
  public resetEphemeralStorage() {
    this._ephemeralStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralStorageInput() {
    return this._ephemeralStorage;
  }

  // force_delete - computed: false, optional: true, required: false
  private _forceDelete?: boolean | cdktf.IResolvable; 
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }
  public set forceDelete(value: boolean | cdktf.IResolvable) {
    this._forceDelete = value;
  }
  public resetForceDelete() {
    this._forceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete;
  }

  // host_name - computed: false, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
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

  // image_snapshot_id - computed: false, optional: true, required: false
  private _imageSnapshotId?: string; 
  public get imageSnapshotId() {
    return this.getStringAttribute('image_snapshot_id');
  }
  public set imageSnapshotId(value: string) {
    this._imageSnapshotId = value;
  }
  public resetImageSnapshotId() {
    this._imageSnapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageSnapshotIdInput() {
    return this._imageSnapshotId;
  }

  // ingress_bandwidth - computed: false, optional: true, required: false
  private _ingressBandwidth?: number; 
  public get ingressBandwidth() {
    return this.getNumberAttribute('ingress_bandwidth');
  }
  public set ingressBandwidth(value: number) {
    this._ingressBandwidth = value;
  }
  public resetIngressBandwidth() {
    this._ingressBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressBandwidthInput() {
    return this._ingressBandwidth;
  }

  // instance_family_level - computed: false, optional: true, required: false
  private _instanceFamilyLevel?: string; 
  public get instanceFamilyLevel() {
    return this.getStringAttribute('instance_family_level');
  }
  public set instanceFamilyLevel(value: string) {
    this._instanceFamilyLevel = value;
  }
  public resetInstanceFamilyLevel() {
    this._instanceFamilyLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceFamilyLevelInput() {
    return this._instanceFamilyLevel;
  }

  // instance_types - computed: false, optional: true, required: false
  private _instanceTypes?: string[]; 
  public get instanceTypes() {
    return this.getListAttribute('instance_types');
  }
  public set instanceTypes(value: string[]) {
    this._instanceTypes = value;
  }
  public resetInstanceTypes() {
    this._instanceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypesInput() {
    return this._instanceTypes;
  }

  // ipv6_address_count - computed: false, optional: true, required: false
  private _ipv6AddressCount?: number; 
  public get ipv6AddressCount() {
    return this.getNumberAttribute('ipv6_address_count');
  }
  public set ipv6AddressCount(value: number) {
    this._ipv6AddressCount = value;
  }
  public resetIpv6AddressCount() {
    this._ipv6AddressCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressCountInput() {
    return this._ipv6AddressCount;
  }

  // load_balancer_weight - computed: false, optional: true, required: false
  private _loadBalancerWeight?: number; 
  public get loadBalancerWeight() {
    return this.getNumberAttribute('load_balancer_weight');
  }
  public set loadBalancerWeight(value: number) {
    this._loadBalancerWeight = value;
  }
  public resetLoadBalancerWeight() {
    this._loadBalancerWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerWeightInput() {
    return this._loadBalancerWeight;
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

  // scaling_configuration_name - computed: true, optional: true, required: false
  private _scalingConfigurationName?: string; 
  public get scalingConfigurationName() {
    return this.getStringAttribute('scaling_configuration_name');
  }
  public set scalingConfigurationName(value: string) {
    this._scalingConfigurationName = value;
  }
  public resetScalingConfigurationName() {
    this._scalingConfigurationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingConfigurationNameInput() {
    return this._scalingConfigurationName;
  }

  // scaling_group_id - computed: false, optional: false, required: true
  private _scalingGroupId?: string; 
  public get scalingGroupId() {
    return this.getStringAttribute('scaling_group_id');
  }
  public set scalingGroupId(value: string) {
    this._scalingGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingGroupIdInput() {
    return this._scalingGroupId;
  }

  // security_group_id - computed: false, optional: true, required: false
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

  // spot_price_limit - computed: false, optional: true, required: false
  private _spotPriceLimit?: number; 
  public get spotPriceLimit() {
    return this.getNumberAttribute('spot_price_limit');
  }
  public set spotPriceLimit(value: number) {
    this._spotPriceLimit = value;
  }
  public resetSpotPriceLimit() {
    this._spotPriceLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotPriceLimitInput() {
    return this._spotPriceLimit;
  }

  // spot_strategy - computed: false, optional: true, required: false
  private _spotStrategy?: string; 
  public get spotStrategy() {
    return this.getStringAttribute('spot_strategy');
  }
  public set spotStrategy(value: string) {
    this._spotStrategy = value;
  }
  public resetSpotStrategy() {
    this._spotStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotStrategyInput() {
    return this._spotStrategy;
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

  // termination_grace_period_seconds - computed: false, optional: true, required: false
  private _terminationGracePeriodSeconds?: number; 
  public get terminationGracePeriodSeconds() {
    return this.getNumberAttribute('termination_grace_period_seconds');
  }
  public set terminationGracePeriodSeconds(value: number) {
    this._terminationGracePeriodSeconds = value;
  }
  public resetTerminationGracePeriodSeconds() {
    this._terminationGracePeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationGracePeriodSecondsInput() {
    return this._terminationGracePeriodSeconds;
  }

  // acr_registry_infos - computed: false, optional: true, required: false
  private _acrRegistryInfos = new EssEciScalingConfigurationAcrRegistryInfosList(this, "acr_registry_infos", true);
  public get acrRegistryInfos() {
    return this._acrRegistryInfos;
  }
  public putAcrRegistryInfos(value: EssEciScalingConfigurationAcrRegistryInfos[] | cdktf.IResolvable) {
    this._acrRegistryInfos.internalValue = value;
  }
  public resetAcrRegistryInfos() {
    this._acrRegistryInfos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acrRegistryInfosInput() {
    return this._acrRegistryInfos.internalValue;
  }

  // containers - computed: false, optional: true, required: false
  private _containers = new EssEciScalingConfigurationContainersList(this, "containers", false);
  public get containers() {
    return this._containers;
  }
  public putContainers(value: EssEciScalingConfigurationContainers[] | cdktf.IResolvable) {
    this._containers.internalValue = value;
  }
  public resetContainers() {
    this._containers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers.internalValue;
  }

  // dns_config_options - computed: false, optional: true, required: false
  private _dnsConfigOptions = new EssEciScalingConfigurationDnsConfigOptionsList(this, "dns_config_options", true);
  public get dnsConfigOptions() {
    return this._dnsConfigOptions;
  }
  public putDnsConfigOptions(value: EssEciScalingConfigurationDnsConfigOptions[] | cdktf.IResolvable) {
    this._dnsConfigOptions.internalValue = value;
  }
  public resetDnsConfigOptions() {
    this._dnsConfigOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsConfigOptionsInput() {
    return this._dnsConfigOptions.internalValue;
  }

  // host_aliases - computed: false, optional: true, required: false
  private _hostAliases = new EssEciScalingConfigurationHostAliasesList(this, "host_aliases", true);
  public get hostAliases() {
    return this._hostAliases;
  }
  public putHostAliases(value: EssEciScalingConfigurationHostAliases[] | cdktf.IResolvable) {
    this._hostAliases.internalValue = value;
  }
  public resetHostAliases() {
    this._hostAliases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostAliasesInput() {
    return this._hostAliases.internalValue;
  }

  // image_registry_credentials - computed: false, optional: true, required: false
  private _imageRegistryCredentials = new EssEciScalingConfigurationImageRegistryCredentialsList(this, "image_registry_credentials", true);
  public get imageRegistryCredentials() {
    return this._imageRegistryCredentials;
  }
  public putImageRegistryCredentials(value: EssEciScalingConfigurationImageRegistryCredentials[] | cdktf.IResolvable) {
    this._imageRegistryCredentials.internalValue = value;
  }
  public resetImageRegistryCredentials() {
    this._imageRegistryCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageRegistryCredentialsInput() {
    return this._imageRegistryCredentials.internalValue;
  }

  // init_containers - computed: false, optional: true, required: false
  private _initContainers = new EssEciScalingConfigurationInitContainersList(this, "init_containers", false);
  public get initContainers() {
    return this._initContainers;
  }
  public putInitContainers(value: EssEciScalingConfigurationInitContainers[] | cdktf.IResolvable) {
    this._initContainers.internalValue = value;
  }
  public resetInitContainers() {
    this._initContainers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initContainersInput() {
    return this._initContainers.internalValue;
  }

  // security_context_sysctls - computed: false, optional: true, required: false
  private _securityContextSysctls = new EssEciScalingConfigurationSecurityContextSysctlsList(this, "security_context_sysctls", true);
  public get securityContextSysctls() {
    return this._securityContextSysctls;
  }
  public putSecurityContextSysctls(value: EssEciScalingConfigurationSecurityContextSysctls[] | cdktf.IResolvable) {
    this._securityContextSysctls.internalValue = value;
  }
  public resetSecurityContextSysctls() {
    this._securityContextSysctls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextSysctlsInput() {
    return this._securityContextSysctls.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EssEciScalingConfigurationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EssEciScalingConfigurationTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new EssEciScalingConfigurationVolumesList(this, "volumes", true);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: EssEciScalingConfigurationVolumes[] | cdktf.IResolvable) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      active_deadline_seconds: cdktf.numberToTerraform(this._activeDeadlineSeconds),
      auto_create_eip: cdktf.booleanToTerraform(this._autoCreateEip),
      auto_match_image_cache: cdktf.booleanToTerraform(this._autoMatchImageCache),
      container_group_name: cdktf.stringToTerraform(this._containerGroupName),
      cost_optimization: cdktf.booleanToTerraform(this._costOptimization),
      cpu: cdktf.numberToTerraform(this._cpu),
      cpu_options_core: cdktf.numberToTerraform(this._cpuOptionsCore),
      cpu_options_threads_per_core: cdktf.numberToTerraform(this._cpuOptionsThreadsPerCore),
      description: cdktf.stringToTerraform(this._description),
      dns_policy: cdktf.stringToTerraform(this._dnsPolicy),
      egress_bandwidth: cdktf.numberToTerraform(this._egressBandwidth),
      eip_bandwidth: cdktf.numberToTerraform(this._eipBandwidth),
      enable_sls: cdktf.booleanToTerraform(this._enableSls),
      ephemeral_storage: cdktf.numberToTerraform(this._ephemeralStorage),
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      host_name: cdktf.stringToTerraform(this._hostName),
      id: cdktf.stringToTerraform(this._id),
      image_snapshot_id: cdktf.stringToTerraform(this._imageSnapshotId),
      ingress_bandwidth: cdktf.numberToTerraform(this._ingressBandwidth),
      instance_family_level: cdktf.stringToTerraform(this._instanceFamilyLevel),
      instance_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instanceTypes),
      ipv6_address_count: cdktf.numberToTerraform(this._ipv6AddressCount),
      load_balancer_weight: cdktf.numberToTerraform(this._loadBalancerWeight),
      memory: cdktf.numberToTerraform(this._memory),
      ram_role_name: cdktf.stringToTerraform(this._ramRoleName),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      restart_policy: cdktf.stringToTerraform(this._restartPolicy),
      scaling_configuration_name: cdktf.stringToTerraform(this._scalingConfigurationName),
      scaling_group_id: cdktf.stringToTerraform(this._scalingGroupId),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      spot_price_limit: cdktf.numberToTerraform(this._spotPriceLimit),
      spot_strategy: cdktf.stringToTerraform(this._spotStrategy),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      termination_grace_period_seconds: cdktf.numberToTerraform(this._terminationGracePeriodSeconds),
      acr_registry_infos: cdktf.listMapper(essEciScalingConfigurationAcrRegistryInfosToTerraform, true)(this._acrRegistryInfos.internalValue),
      containers: cdktf.listMapper(essEciScalingConfigurationContainersToTerraform, true)(this._containers.internalValue),
      dns_config_options: cdktf.listMapper(essEciScalingConfigurationDnsConfigOptionsToTerraform, true)(this._dnsConfigOptions.internalValue),
      host_aliases: cdktf.listMapper(essEciScalingConfigurationHostAliasesToTerraform, true)(this._hostAliases.internalValue),
      image_registry_credentials: cdktf.listMapper(essEciScalingConfigurationImageRegistryCredentialsToTerraform, true)(this._imageRegistryCredentials.internalValue),
      init_containers: cdktf.listMapper(essEciScalingConfigurationInitContainersToTerraform, true)(this._initContainers.internalValue),
      security_context_sysctls: cdktf.listMapper(essEciScalingConfigurationSecurityContextSysctlsToTerraform, true)(this._securityContextSysctls.internalValue),
      timeouts: essEciScalingConfigurationTimeoutsToTerraform(this._timeouts.internalValue),
      volumes: cdktf.listMapper(essEciScalingConfigurationVolumesToTerraform, true)(this._volumes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      active_deadline_seconds: {
        value: cdktf.numberToHclTerraform(this._activeDeadlineSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_create_eip: {
        value: cdktf.booleanToHclTerraform(this._autoCreateEip),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_match_image_cache: {
        value: cdktf.booleanToHclTerraform(this._autoMatchImageCache),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      container_group_name: {
        value: cdktf.stringToHclTerraform(this._containerGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cost_optimization: {
        value: cdktf.booleanToHclTerraform(this._costOptimization),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cpu: {
        value: cdktf.numberToHclTerraform(this._cpu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cpu_options_core: {
        value: cdktf.numberToHclTerraform(this._cpuOptionsCore),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cpu_options_threads_per_core: {
        value: cdktf.numberToHclTerraform(this._cpuOptionsThreadsPerCore),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_policy: {
        value: cdktf.stringToHclTerraform(this._dnsPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      egress_bandwidth: {
        value: cdktf.numberToHclTerraform(this._egressBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eip_bandwidth: {
        value: cdktf.numberToHclTerraform(this._eipBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_sls: {
        value: cdktf.booleanToHclTerraform(this._enableSls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ephemeral_storage: {
        value: cdktf.numberToHclTerraform(this._ephemeralStorage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      force_delete: {
        value: cdktf.booleanToHclTerraform(this._forceDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host_name: {
        value: cdktf.stringToHclTerraform(this._hostName),
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
      image_snapshot_id: {
        value: cdktf.stringToHclTerraform(this._imageSnapshotId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ingress_bandwidth: {
        value: cdktf.numberToHclTerraform(this._ingressBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      instance_family_level: {
        value: cdktf.stringToHclTerraform(this._instanceFamilyLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._instanceTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ipv6_address_count: {
        value: cdktf.numberToHclTerraform(this._ipv6AddressCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      load_balancer_weight: {
        value: cdktf.numberToHclTerraform(this._loadBalancerWeight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      memory: {
        value: cdktf.numberToHclTerraform(this._memory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ram_role_name: {
        value: cdktf.stringToHclTerraform(this._ramRoleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
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
      scaling_configuration_name: {
        value: cdktf.stringToHclTerraform(this._scalingConfigurationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scaling_group_id: {
        value: cdktf.stringToHclTerraform(this._scalingGroupId),
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
      spot_price_limit: {
        value: cdktf.numberToHclTerraform(this._spotPriceLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      spot_strategy: {
        value: cdktf.stringToHclTerraform(this._spotStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      termination_grace_period_seconds: {
        value: cdktf.numberToHclTerraform(this._terminationGracePeriodSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      acr_registry_infos: {
        value: cdktf.listMapperHcl(essEciScalingConfigurationAcrRegistryInfosToHclTerraform, true)(this._acrRegistryInfos.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EssEciScalingConfigurationAcrRegistryInfosList",
      },
      containers: {
        value: cdktf.listMapperHcl(essEciScalingConfigurationContainersToHclTerraform, true)(this._containers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EssEciScalingConfigurationContainersList",
      },
      dns_config_options: {
        value: cdktf.listMapperHcl(essEciScalingConfigurationDnsConfigOptionsToHclTerraform, true)(this._dnsConfigOptions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EssEciScalingConfigurationDnsConfigOptionsList",
      },
      host_aliases: {
        value: cdktf.listMapperHcl(essEciScalingConfigurationHostAliasesToHclTerraform, true)(this._hostAliases.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EssEciScalingConfigurationHostAliasesList",
      },
      image_registry_credentials: {
        value: cdktf.listMapperHcl(essEciScalingConfigurationImageRegistryCredentialsToHclTerraform, true)(this._imageRegistryCredentials.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EssEciScalingConfigurationImageRegistryCredentialsList",
      },
      init_containers: {
        value: cdktf.listMapperHcl(essEciScalingConfigurationInitContainersToHclTerraform, true)(this._initContainers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EssEciScalingConfigurationInitContainersList",
      },
      security_context_sysctls: {
        value: cdktf.listMapperHcl(essEciScalingConfigurationSecurityContextSysctlsToHclTerraform, true)(this._securityContextSysctls.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EssEciScalingConfigurationSecurityContextSysctlsList",
      },
      timeouts: {
        value: essEciScalingConfigurationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EssEciScalingConfigurationTimeouts",
      },
      volumes: {
        value: cdktf.listMapperHcl(essEciScalingConfigurationVolumesToHclTerraform, true)(this._volumes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EssEciScalingConfigurationVolumesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
