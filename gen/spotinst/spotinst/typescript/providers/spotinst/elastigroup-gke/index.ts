// https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElastigroupGkeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#cluster_id ElastigroupGke#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#cluster_zone_name ElastigroupGke#cluster_zone_name}
  */
  readonly clusterZoneName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#desired_capacity ElastigroupGke#desired_capacity}
  */
  readonly desiredCapacity: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#draining_timeout ElastigroupGke#draining_timeout}
  */
  readonly drainingTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#fallback_to_ondemand ElastigroupGke#fallback_to_ondemand}
  */
  readonly fallbackToOndemand?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#id ElastigroupGke#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#instance_name_prefix ElastigroupGke#instance_name_prefix}
  */
  readonly instanceNamePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#instance_types_ondemand ElastigroupGke#instance_types_ondemand}
  */
  readonly instanceTypesOndemand?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#instance_types_preemptible ElastigroupGke#instance_types_preemptible}
  */
  readonly instanceTypesPreemptible?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#ip_forwarding ElastigroupGke#ip_forwarding}
  */
  readonly ipForwarding?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#max_size ElastigroupGke#max_size}
  */
  readonly maxSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#min_cpu_platform ElastigroupGke#min_cpu_platform}
  */
  readonly minCpuPlatform?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#min_size ElastigroupGke#min_size}
  */
  readonly minSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#name ElastigroupGke#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#node_image ElastigroupGke#node_image}
  */
  readonly nodeImage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#ondemand_count ElastigroupGke#ondemand_count}
  */
  readonly ondemandCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#optimization_windows ElastigroupGke#optimization_windows}
  */
  readonly optimizationWindows?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#preemptible_percentage ElastigroupGke#preemptible_percentage}
  */
  readonly preemptiblePercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#provisioning_model ElastigroupGke#provisioning_model}
  */
  readonly provisioningModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#service_account ElastigroupGke#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#should_utilize_commitments ElastigroupGke#should_utilize_commitments}
  */
  readonly shouldUtilizeCommitments?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#shutdown_script ElastigroupGke#shutdown_script}
  */
  readonly shutdownScript?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#startup_script ElastigroupGke#startup_script}
  */
  readonly startupScript?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#tags ElastigroupGke#tags}
  */
  readonly tags?: string[];
  /**
  * backend_services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#backend_services ElastigroupGke#backend_services}
  */
  readonly backendServices?: ElastigroupGkeBackendServices[] | cdktf.IResolvable;
  /**
  * disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#disk ElastigroupGke#disk}
  */
  readonly disk?: ElastigroupGkeDisk[] | cdktf.IResolvable;
  /**
  * gpu block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#gpu ElastigroupGke#gpu}
  */
  readonly gpu?: ElastigroupGkeGpu[] | cdktf.IResolvable;
  /**
  * instance_types_custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#instance_types_custom ElastigroupGke#instance_types_custom}
  */
  readonly instanceTypesCustom?: ElastigroupGkeInstanceTypesCustom[] | cdktf.IResolvable;
  /**
  * integration_docker_swarm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#integration_docker_swarm ElastigroupGke#integration_docker_swarm}
  */
  readonly integrationDockerSwarm?: ElastigroupGkeIntegrationDockerSwarm;
  /**
  * integration_gke block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#integration_gke ElastigroupGke#integration_gke}
  */
  readonly integrationGke?: ElastigroupGkeIntegrationGke;
  /**
  * labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#labels ElastigroupGke#labels}
  */
  readonly labels?: ElastigroupGkeLabels[] | cdktf.IResolvable;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#metadata ElastigroupGke#metadata}
  */
  readonly metadata?: ElastigroupGkeMetadata[] | cdktf.IResolvable;
  /**
  * network_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#network_interface ElastigroupGke#network_interface}
  */
  readonly networkInterface?: ElastigroupGkeNetworkInterface[] | cdktf.IResolvable;
  /**
  * revert_to_preemptible block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#revert_to_preemptible ElastigroupGke#revert_to_preemptible}
  */
  readonly revertToPreemptible?: ElastigroupGkeRevertToPreemptible[] | cdktf.IResolvable;
  /**
  * scaling_down_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#scaling_down_policy ElastigroupGke#scaling_down_policy}
  */
  readonly scalingDownPolicy?: ElastigroupGkeScalingDownPolicy[] | cdktf.IResolvable;
  /**
  * scaling_up_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#scaling_up_policy ElastigroupGke#scaling_up_policy}
  */
  readonly scalingUpPolicy?: ElastigroupGkeScalingUpPolicy[] | cdktf.IResolvable;
  /**
  * shielded_instance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#shielded_instance_config ElastigroupGke#shielded_instance_config}
  */
  readonly shieldedInstanceConfig?: ElastigroupGkeShieldedInstanceConfig;
}
export interface ElastigroupGkeBackendServicesBackendBalancing {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#backend_balancing_mode ElastigroupGke#backend_balancing_mode}
  */
  readonly backendBalancingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#max_rate_per_instance ElastigroupGke#max_rate_per_instance}
  */
  readonly maxRatePerInstance?: number;
}

export function elastigroupGkeBackendServicesBackendBalancingToTerraform(struct?: ElastigroupGkeBackendServicesBackendBalancingOutputReference | ElastigroupGkeBackendServicesBackendBalancing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_balancing_mode: cdktf.stringToTerraform(struct!.backendBalancingMode),
    max_rate_per_instance: cdktf.numberToTerraform(struct!.maxRatePerInstance),
  }
}


export function elastigroupGkeBackendServicesBackendBalancingToHclTerraform(struct?: ElastigroupGkeBackendServicesBackendBalancingOutputReference | ElastigroupGkeBackendServicesBackendBalancing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_balancing_mode: {
      value: cdktf.stringToHclTerraform(struct!.backendBalancingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_rate_per_instance: {
      value: cdktf.numberToHclTerraform(struct!.maxRatePerInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupGkeBackendServicesBackendBalancingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupGkeBackendServicesBackendBalancing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendBalancingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendBalancingMode = this._backendBalancingMode;
    }
    if (this._maxRatePerInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRatePerInstance = this._maxRatePerInstance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupGkeBackendServicesBackendBalancing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backendBalancingMode = undefined;
      this._maxRatePerInstance = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backendBalancingMode = value.backendBalancingMode;
      this._maxRatePerInstance = value.maxRatePerInstance;
    }
  }

  // backend_balancing_mode - computed: false, optional: true, required: false
  private _backendBalancingMode?: string; 
  public get backendBalancingMode() {
    return this.getStringAttribute('backend_balancing_mode');
  }
  public set backendBalancingMode(value: string) {
    this._backendBalancingMode = value;
  }
  public resetBackendBalancingMode() {
    this._backendBalancingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendBalancingModeInput() {
    return this._backendBalancingMode;
  }

  // max_rate_per_instance - computed: false, optional: true, required: false
  private _maxRatePerInstance?: number; 
  public get maxRatePerInstance() {
    return this.getNumberAttribute('max_rate_per_instance');
  }
  public set maxRatePerInstance(value: number) {
    this._maxRatePerInstance = value;
  }
  public resetMaxRatePerInstance() {
    this._maxRatePerInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRatePerInstanceInput() {
    return this._maxRatePerInstance;
  }
}
export interface ElastigroupGkeBackendServicesNamedPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#name ElastigroupGke#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#ports ElastigroupGke#ports}
  */
  readonly ports: string[];
}

export function elastigroupGkeBackendServicesNamedPortsToTerraform(struct?: ElastigroupGkeBackendServicesNamedPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ports),
  }
}


export function elastigroupGkeBackendServicesNamedPortsToHclTerraform(struct?: ElastigroupGkeBackendServicesNamedPorts | cdktf.IResolvable): any {
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
    ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupGkeBackendServicesNamedPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupGkeBackendServicesNamedPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupGkeBackendServicesNamedPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._ports = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._ports = value.ports;
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

  // ports - computed: false, optional: false, required: true
  private _ports?: string[]; 
  public get ports() {
    return this.getListAttribute('ports');
  }
  public set ports(value: string[]) {
    this._ports = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }
}

export class ElastigroupGkeBackendServicesNamedPortsList extends cdktf.ComplexList {
  public internalValue? : ElastigroupGkeBackendServicesNamedPorts[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupGkeBackendServicesNamedPortsOutputReference {
    return new ElastigroupGkeBackendServicesNamedPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupGkeBackendServices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#location_type ElastigroupGke#location_type}
  */
  readonly locationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#scheme ElastigroupGke#scheme}
  */
  readonly scheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#service_name ElastigroupGke#service_name}
  */
  readonly serviceName: string;
  /**
  * backend_balancing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#backend_balancing ElastigroupGke#backend_balancing}
  */
  readonly backendBalancing?: ElastigroupGkeBackendServicesBackendBalancing;
  /**
  * named_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#named_ports ElastigroupGke#named_ports}
  */
  readonly namedPorts?: ElastigroupGkeBackendServicesNamedPorts[] | cdktf.IResolvable;
}

export function elastigroupGkeBackendServicesToTerraform(struct?: ElastigroupGkeBackendServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location_type: cdktf.stringToTerraform(struct!.locationType),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    backend_balancing: elastigroupGkeBackendServicesBackendBalancingToTerraform(struct!.backendBalancing),
    named_ports: cdktf.listMapper(elastigroupGkeBackendServicesNamedPortsToTerraform, true)(struct!.namedPorts),
  }
}


export function elastigroupGkeBackendServicesToHclTerraform(struct?: ElastigroupGkeBackendServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    location_type: {
      value: cdktf.stringToHclTerraform(struct!.locationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backend_balancing: {
      value: elastigroupGkeBackendServicesBackendBalancingToHclTerraform(struct!.backendBalancing),
      isBlock: true,
      type: "list",
      storageClassType: "ElastigroupGkeBackendServicesBackendBalancingList",
    },
    named_ports: {
      value: cdktf.listMapperHcl(elastigroupGkeBackendServicesNamedPortsToHclTerraform, true)(struct!.namedPorts),
      isBlock: true,
      type: "set",
      storageClassType: "ElastigroupGkeBackendServicesNamedPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupGkeBackendServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupGkeBackendServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationType = this._locationType;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._backendBalancing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendBalancing = this._backendBalancing?.internalValue;
    }
    if (this._namedPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namedPorts = this._namedPorts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupGkeBackendServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._locationType = undefined;
      this._scheme = undefined;
      this._serviceName = undefined;
      this._backendBalancing.internalValue = undefined;
      this._namedPorts.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._locationType = value.locationType;
      this._scheme = value.scheme;
      this._serviceName = value.serviceName;
      this._backendBalancing.internalValue = value.backendBalancing;
      this._namedPorts.internalValue = value.namedPorts;
    }
  }

  // location_type - computed: false, optional: true, required: false
  private _locationType?: string; 
  public get locationType() {
    return this.getStringAttribute('location_type');
  }
  public set locationType(value: string) {
    this._locationType = value;
  }
  public resetLocationType() {
    this._locationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationTypeInput() {
    return this._locationType;
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

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // backend_balancing - computed: false, optional: true, required: false
  private _backendBalancing = new ElastigroupGkeBackendServicesBackendBalancingOutputReference(this, "backend_balancing");
  public get backendBalancing() {
    return this._backendBalancing;
  }
  public putBackendBalancing(value: ElastigroupGkeBackendServicesBackendBalancing) {
    this._backendBalancing.internalValue = value;
  }
  public resetBackendBalancing() {
    this._backendBalancing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendBalancingInput() {
    return this._backendBalancing.internalValue;
  }

  // named_ports - computed: false, optional: true, required: false
  private _namedPorts = new ElastigroupGkeBackendServicesNamedPortsList(this, "named_ports", true);
  public get namedPorts() {
    return this._namedPorts;
  }
  public putNamedPorts(value: ElastigroupGkeBackendServicesNamedPorts[] | cdktf.IResolvable) {
    this._namedPorts.internalValue = value;
  }
  public resetNamedPorts() {
    this._namedPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namedPortsInput() {
    return this._namedPorts.internalValue;
  }
}

export class ElastigroupGkeBackendServicesList extends cdktf.ComplexList {
  public internalValue? : ElastigroupGkeBackendServices[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupGkeBackendServicesOutputReference {
    return new ElastigroupGkeBackendServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupGkeDiskInitializeParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#disk_size_gb ElastigroupGke#disk_size_gb}
  */
  readonly diskSizeGb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#disk_type ElastigroupGke#disk_type}
  */
  readonly diskType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#source_image ElastigroupGke#source_image}
  */
  readonly sourceImage: string;
}

export function elastigroupGkeDiskInitializeParamsToTerraform(struct?: ElastigroupGkeDiskInitializeParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_size_gb: cdktf.stringToTerraform(struct!.diskSizeGb),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    source_image: cdktf.stringToTerraform(struct!.sourceImage),
  }
}


export function elastigroupGkeDiskInitializeParamsToHclTerraform(struct?: ElastigroupGkeDiskInitializeParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_size_gb: {
      value: cdktf.stringToHclTerraform(struct!.diskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_image: {
      value: cdktf.stringToHclTerraform(struct!.sourceImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupGkeDiskInitializeParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupGkeDiskInitializeParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeGb = this._diskSizeGb;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._sourceImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceImage = this._sourceImage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupGkeDiskInitializeParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskSizeGb = undefined;
      this._diskType = undefined;
      this._sourceImage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskSizeGb = value.diskSizeGb;
      this._diskType = value.diskType;
      this._sourceImage = value.sourceImage;
    }
  }

  // disk_size_gb - computed: false, optional: true, required: false
  private _diskSizeGb?: string; 
  public get diskSizeGb() {
    return this.getStringAttribute('disk_size_gb');
  }
  public set diskSizeGb(value: string) {
    this._diskSizeGb = value;
  }
  public resetDiskSizeGb() {
    this._diskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeGbInput() {
    return this._diskSizeGb;
  }

  // disk_type - computed: false, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // source_image - computed: false, optional: false, required: true
  private _sourceImage?: string; 
  public get sourceImage() {
    return this.getStringAttribute('source_image');
  }
  public set sourceImage(value: string) {
    this._sourceImage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceImageInput() {
    return this._sourceImage;
  }
}

export class ElastigroupGkeDiskInitializeParamsList extends cdktf.ComplexList {
  public internalValue? : ElastigroupGkeDiskInitializeParams[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupGkeDiskInitializeParamsOutputReference {
    return new ElastigroupGkeDiskInitializeParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupGkeDisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#auto_delete ElastigroupGke#auto_delete}
  */
  readonly autoDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#boot ElastigroupGke#boot}
  */
  readonly boot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#device_name ElastigroupGke#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#interface ElastigroupGke#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#mode ElastigroupGke#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#source ElastigroupGke#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#type ElastigroupGke#type}
  */
  readonly type?: string;
  /**
  * initialize_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#initialize_params ElastigroupGke#initialize_params}
  */
  readonly initializeParams?: ElastigroupGkeDiskInitializeParams[] | cdktf.IResolvable;
}

export function elastigroupGkeDiskToTerraform(struct?: ElastigroupGkeDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_delete: cdktf.booleanToTerraform(struct!.autoDelete),
    boot: cdktf.booleanToTerraform(struct!.boot),
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    interface: cdktf.stringToTerraform(struct!.interface),
    mode: cdktf.stringToTerraform(struct!.mode),
    source: cdktf.stringToTerraform(struct!.source),
    type: cdktf.stringToTerraform(struct!.type),
    initialize_params: cdktf.listMapper(elastigroupGkeDiskInitializeParamsToTerraform, true)(struct!.initializeParams),
  }
}


export function elastigroupGkeDiskToHclTerraform(struct?: ElastigroupGkeDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_delete: {
      value: cdktf.booleanToHclTerraform(struct!.autoDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    boot: {
      value: cdktf.booleanToHclTerraform(struct!.boot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    device_name: {
      value: cdktf.stringToHclTerraform(struct!.deviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
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
    initialize_params: {
      value: cdktf.listMapperHcl(elastigroupGkeDiskInitializeParamsToHclTerraform, true)(struct!.initializeParams),
      isBlock: true,
      type: "set",
      storageClassType: "ElastigroupGkeDiskInitializeParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupGkeDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupGkeDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoDelete = this._autoDelete;
    }
    if (this._boot !== undefined) {
      hasAnyValues = true;
      internalValueResult.boot = this._boot;
    }
    if (this._deviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceName = this._deviceName;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._initializeParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initializeParams = this._initializeParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupGkeDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoDelete = undefined;
      this._boot = undefined;
      this._deviceName = undefined;
      this._interface = undefined;
      this._mode = undefined;
      this._source = undefined;
      this._type = undefined;
      this._initializeParams.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoDelete = value.autoDelete;
      this._boot = value.boot;
      this._deviceName = value.deviceName;
      this._interface = value.interface;
      this._mode = value.mode;
      this._source = value.source;
      this._type = value.type;
      this._initializeParams.internalValue = value.initializeParams;
    }
  }

  // auto_delete - computed: false, optional: true, required: false
  private _autoDelete?: boolean | cdktf.IResolvable; 
  public get autoDelete() {
    return this.getBooleanAttribute('auto_delete');
  }
  public set autoDelete(value: boolean | cdktf.IResolvable) {
    this._autoDelete = value;
  }
  public resetAutoDelete() {
    this._autoDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeleteInput() {
    return this._autoDelete;
  }

  // boot - computed: false, optional: true, required: false
  private _boot?: boolean | cdktf.IResolvable; 
  public get boot() {
    return this.getBooleanAttribute('boot');
  }
  public set boot(value: boolean | cdktf.IResolvable) {
    this._boot = value;
  }
  public resetBoot() {
    this._boot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootInput() {
    return this._boot;
  }

  // device_name - computed: false, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
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

  // initialize_params - computed: false, optional: true, required: false
  private _initializeParams = new ElastigroupGkeDiskInitializeParamsList(this, "initialize_params", true);
  public get initializeParams() {
    return this._initializeParams;
  }
  public putInitializeParams(value: ElastigroupGkeDiskInitializeParams[] | cdktf.IResolvable) {
    this._initializeParams.internalValue = value;
  }
  public resetInitializeParams() {
    this._initializeParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initializeParamsInput() {
    return this._initializeParams.internalValue;
  }
}

export class ElastigroupGkeDiskList extends cdktf.ComplexList {
  public internalValue? : ElastigroupGkeDisk[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupGkeDiskOutputReference {
    return new ElastigroupGkeDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupGkeGpu {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#count ElastigroupGke#count}
  */
  readonly count: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#type ElastigroupGke#type}
  */
  readonly type: string;
}

export function elastigroupGkeGpuToTerraform(struct?: ElastigroupGkeGpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function elastigroupGkeGpuToHclTerraform(struct?: ElastigroupGkeGpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
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

export class ElastigroupGkeGpuOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupGkeGpu | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupGkeGpu | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._type = value.type;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
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

export class ElastigroupGkeGpuList extends cdktf.ComplexList {
  public internalValue? : ElastigroupGkeGpu[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupGkeGpuOutputReference {
    return new ElastigroupGkeGpuOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupGkeInstanceTypesCustom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#memory_gib ElastigroupGke#memory_gib}
  */
  readonly memoryGib: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#vcpu ElastigroupGke#vcpu}
  */
  readonly vcpu: number;
}

export function elastigroupGkeInstanceTypesCustomToTerraform(struct?: ElastigroupGkeInstanceTypesCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    memory_gib: cdktf.numberToTerraform(struct!.memoryGib),
    vcpu: cdktf.numberToTerraform(struct!.vcpu),
  }
}


export function elastigroupGkeInstanceTypesCustomToHclTerraform(struct?: ElastigroupGkeInstanceTypesCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    memory_gib: {
      value: cdktf.numberToHclTerraform(struct!.memoryGib),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vcpu: {
      value: cdktf.numberToHclTerraform(struct!.vcpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupGkeInstanceTypesCustomOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupGkeInstanceTypesCustom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memoryGib !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryGib = this._memoryGib;
    }
    if (this._vcpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcpu = this._vcpu;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupGkeInstanceTypesCustom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._memoryGib = undefined;
      this._vcpu = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._memoryGib = value.memoryGib;
      this._vcpu = value.vcpu;
    }
  }

  // memory_gib - computed: false, optional: false, required: true
  private _memoryGib?: number; 
  public get memoryGib() {
    return this.getNumberAttribute('memory_gib');
  }
  public set memoryGib(value: number) {
    this._memoryGib = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryGibInput() {
    return this._memoryGib;
  }

  // vcpu - computed: false, optional: false, required: true
  private _vcpu?: number; 
  public get vcpu() {
    return this.getNumberAttribute('vcpu');
  }
  public set vcpu(value: number) {
    this._vcpu = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcpuInput() {
    return this._vcpu;
  }
}

export class ElastigroupGkeInstanceTypesCustomList extends cdktf.ComplexList {
  public internalValue? : ElastigroupGkeInstanceTypesCustom[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupGkeInstanceTypesCustomOutputReference {
    return new ElastigroupGkeInstanceTypesCustomOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupGkeIntegrationDockerSwarm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#master_host ElastigroupGke#master_host}
  */
  readonly masterHost: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#master_port ElastigroupGke#master_port}
  */
  readonly masterPort: number;
}

export function elastigroupGkeIntegrationDockerSwarmToTerraform(struct?: ElastigroupGkeIntegrationDockerSwarmOutputReference | ElastigroupGkeIntegrationDockerSwarm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    master_host: cdktf.stringToTerraform(struct!.masterHost),
    master_port: cdktf.numberToTerraform(struct!.masterPort),
  }
}


export function elastigroupGkeIntegrationDockerSwarmToHclTerraform(struct?: ElastigroupGkeIntegrationDockerSwarmOutputReference | ElastigroupGkeIntegrationDockerSwarm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    master_host: {
      value: cdktf.stringToHclTerraform(struct!.masterHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    master_port: {
      value: cdktf.numberToHclTerraform(struct!.masterPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupGkeIntegrationDockerSwarmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupGkeIntegrationDockerSwarm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._masterHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterHost = this._masterHost;
    }
    if (this._masterPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterPort = this._masterPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupGkeIntegrationDockerSwarm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._masterHost = undefined;
      this._masterPort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._masterHost = value.masterHost;
      this._masterPort = value.masterPort;
    }
  }

  // master_host - computed: false, optional: false, required: true
  private _masterHost?: string; 
  public get masterHost() {
    return this.getStringAttribute('master_host');
  }
  public set masterHost(value: string) {
    this._masterHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterHostInput() {
    return this._masterHost;
  }

  // master_port - computed: false, optional: false, required: true
  private _masterPort?: number; 
  public get masterPort() {
    return this.getNumberAttribute('master_port');
  }
  public set masterPort(value: number) {
    this._masterPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterPortInput() {
    return this._masterPort;
  }
}
export interface ElastigroupGkeIntegrationGkeAutoscaleDown {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#evaluation_periods ElastigroupGke#evaluation_periods}
  */
  readonly evaluationPeriods?: number;
}

export function elastigroupGkeIntegrationGkeAutoscaleDownToTerraform(struct?: ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference | ElastigroupGkeIntegrationGkeAutoscaleDown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evaluation_periods: cdktf.numberToTerraform(struct!.evaluationPeriods),
  }
}


export function elastigroupGkeIntegrationGkeAutoscaleDownToHclTerraform(struct?: ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference | ElastigroupGkeIntegrationGkeAutoscaleDown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    evaluation_periods: {
      value: cdktf.numberToHclTerraform(struct!.evaluationPeriods),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupGkeIntegrationGkeAutoscaleDown | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluationPeriods !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationPeriods = this._evaluationPeriods;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupGkeIntegrationGkeAutoscaleDown | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._evaluationPeriods = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._evaluationPeriods = value.evaluationPeriods;
    }
  }

  // evaluation_periods - computed: false, optional: true, required: false
  private _evaluationPeriods?: number; 
  public get evaluationPeriods() {
    return this.getNumberAttribute('evaluation_periods');
  }
  public set evaluationPeriods(value: number) {
    this._evaluationPeriods = value;
  }
  public resetEvaluationPeriods() {
    this._evaluationPeriods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationPeriodsInput() {
    return this._evaluationPeriods;
  }
}
export interface ElastigroupGkeIntegrationGkeAutoscaleHeadroom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#cpu_per_unit ElastigroupGke#cpu_per_unit}
  */
  readonly cpuPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#memory_per_unit ElastigroupGke#memory_per_unit}
  */
  readonly memoryPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#num_of_units ElastigroupGke#num_of_units}
  */
  readonly numOfUnits?: number;
}

export function elastigroupGkeIntegrationGkeAutoscaleHeadroomToTerraform(struct?: ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference | ElastigroupGkeIntegrationGkeAutoscaleHeadroom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_per_unit: cdktf.numberToTerraform(struct!.cpuPerUnit),
    memory_per_unit: cdktf.numberToTerraform(struct!.memoryPerUnit),
    num_of_units: cdktf.numberToTerraform(struct!.numOfUnits),
  }
}


export function elastigroupGkeIntegrationGkeAutoscaleHeadroomToHclTerraform(struct?: ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference | ElastigroupGkeIntegrationGkeAutoscaleHeadroom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_per_unit: {
      value: cdktf.numberToHclTerraform(struct!.cpuPerUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_per_unit: {
      value: cdktf.numberToHclTerraform(struct!.memoryPerUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_of_units: {
      value: cdktf.numberToHclTerraform(struct!.numOfUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupGkeIntegrationGkeAutoscaleHeadroom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuPerUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuPerUnit = this._cpuPerUnit;
    }
    if (this._memoryPerUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryPerUnit = this._memoryPerUnit;
    }
    if (this._numOfUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.numOfUnits = this._numOfUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupGkeIntegrationGkeAutoscaleHeadroom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuPerUnit = undefined;
      this._memoryPerUnit = undefined;
      this._numOfUnits = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuPerUnit = value.cpuPerUnit;
      this._memoryPerUnit = value.memoryPerUnit;
      this._numOfUnits = value.numOfUnits;
    }
  }

  // cpu_per_unit - computed: false, optional: true, required: false
  private _cpuPerUnit?: number; 
  public get cpuPerUnit() {
    return this.getNumberAttribute('cpu_per_unit');
  }
  public set cpuPerUnit(value: number) {
    this._cpuPerUnit = value;
  }
  public resetCpuPerUnit() {
    this._cpuPerUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuPerUnitInput() {
    return this._cpuPerUnit;
  }

  // memory_per_unit - computed: false, optional: true, required: false
  private _memoryPerUnit?: number; 
  public get memoryPerUnit() {
    return this.getNumberAttribute('memory_per_unit');
  }
  public set memoryPerUnit(value: number) {
    this._memoryPerUnit = value;
  }
  public resetMemoryPerUnit() {
    this._memoryPerUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryPerUnitInput() {
    return this._memoryPerUnit;
  }

  // num_of_units - computed: false, optional: true, required: false
  private _numOfUnits?: number; 
  public get numOfUnits() {
    return this.getNumberAttribute('num_of_units');
  }
  public set numOfUnits(value: number) {
    this._numOfUnits = value;
  }
  public resetNumOfUnits() {
    this._numOfUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numOfUnitsInput() {
    return this._numOfUnits;
  }
}
export interface ElastigroupGkeIntegrationGkeAutoscaleLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#key ElastigroupGke#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#value ElastigroupGke#value}
  */
  readonly value: string;
}

export function elastigroupGkeIntegrationGkeAutoscaleLabelsToTerraform(struct?: ElastigroupGkeIntegrationGkeAutoscaleLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function elastigroupGkeIntegrationGkeAutoscaleLabelsToHclTerraform(struct?: ElastigroupGkeIntegrationGkeAutoscaleLabels | cdktf.IResolvable): any {
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

export class ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupGkeIntegrationGkeAutoscaleLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: ElastigroupGkeIntegrationGkeAutoscaleLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._key = value.key;
      this._value = value.value;
    }
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

export class ElastigroupGkeIntegrationGkeAutoscaleLabelsList extends cdktf.ComplexList {
  public internalValue? : ElastigroupGkeIntegrationGkeAutoscaleLabels[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference {
    return new ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupGkeIntegrationGke {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#auto_update ElastigroupGke#auto_update}
  */
  readonly autoUpdate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#autoscale_cooldown ElastigroupGke#autoscale_cooldown}
  */
  readonly autoscaleCooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#autoscale_is_auto_config ElastigroupGke#autoscale_is_auto_config}
  */
  readonly autoscaleIsAutoConfig?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#autoscale_is_enabled ElastigroupGke#autoscale_is_enabled}
  */
  readonly autoscaleIsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#cluster_id ElastigroupGke#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#location ElastigroupGke#location}
  */
  readonly location?: string;
  /**
  * autoscale_down block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#autoscale_down ElastigroupGke#autoscale_down}
  */
  readonly autoscaleDown?: ElastigroupGkeIntegrationGkeAutoscaleDown;
  /**
  * autoscale_headroom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#autoscale_headroom ElastigroupGke#autoscale_headroom}
  */
  readonly autoscaleHeadroom?: ElastigroupGkeIntegrationGkeAutoscaleHeadroom;
  /**
  * autoscale_labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#autoscale_labels ElastigroupGke#autoscale_labels}
  */
  readonly autoscaleLabels?: ElastigroupGkeIntegrationGkeAutoscaleLabels[] | cdktf.IResolvable;
}

export function elastigroupGkeIntegrationGkeToTerraform(struct?: ElastigroupGkeIntegrationGkeOutputReference | ElastigroupGkeIntegrationGke): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_update: cdktf.booleanToTerraform(struct!.autoUpdate),
    autoscale_cooldown: cdktf.numberToTerraform(struct!.autoscaleCooldown),
    autoscale_is_auto_config: cdktf.booleanToTerraform(struct!.autoscaleIsAutoConfig),
    autoscale_is_enabled: cdktf.booleanToTerraform(struct!.autoscaleIsEnabled),
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    location: cdktf.stringToTerraform(struct!.location),
    autoscale_down: elastigroupGkeIntegrationGkeAutoscaleDownToTerraform(struct!.autoscaleDown),
    autoscale_headroom: elastigroupGkeIntegrationGkeAutoscaleHeadroomToTerraform(struct!.autoscaleHeadroom),
    autoscale_labels: cdktf.listMapper(elastigroupGkeIntegrationGkeAutoscaleLabelsToTerraform, true)(struct!.autoscaleLabels),
  }
}


export function elastigroupGkeIntegrationGkeToHclTerraform(struct?: ElastigroupGkeIntegrationGkeOutputReference | ElastigroupGkeIntegrationGke): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_update: {
      value: cdktf.booleanToHclTerraform(struct!.autoUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    autoscale_cooldown: {
      value: cdktf.numberToHclTerraform(struct!.autoscaleCooldown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    autoscale_is_auto_config: {
      value: cdktf.booleanToHclTerraform(struct!.autoscaleIsAutoConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    autoscale_is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.autoscaleIsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterId),
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
    autoscale_down: {
      value: elastigroupGkeIntegrationGkeAutoscaleDownToHclTerraform(struct!.autoscaleDown),
      isBlock: true,
      type: "list",
      storageClassType: "ElastigroupGkeIntegrationGkeAutoscaleDownList",
    },
    autoscale_headroom: {
      value: elastigroupGkeIntegrationGkeAutoscaleHeadroomToHclTerraform(struct!.autoscaleHeadroom),
      isBlock: true,
      type: "list",
      storageClassType: "ElastigroupGkeIntegrationGkeAutoscaleHeadroomList",
    },
    autoscale_labels: {
      value: cdktf.listMapperHcl(elastigroupGkeIntegrationGkeAutoscaleLabelsToHclTerraform, true)(struct!.autoscaleLabels),
      isBlock: true,
      type: "set",
      storageClassType: "ElastigroupGkeIntegrationGkeAutoscaleLabelsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupGkeIntegrationGkeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupGkeIntegrationGke | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoUpdate = this._autoUpdate;
    }
    if (this._autoscaleCooldown !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaleCooldown = this._autoscaleCooldown;
    }
    if (this._autoscaleIsAutoConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaleIsAutoConfig = this._autoscaleIsAutoConfig;
    }
    if (this._autoscaleIsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaleIsEnabled = this._autoscaleIsEnabled;
    }
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._autoscaleDown?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaleDown = this._autoscaleDown?.internalValue;
    }
    if (this._autoscaleHeadroom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaleHeadroom = this._autoscaleHeadroom?.internalValue;
    }
    if (this._autoscaleLabels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaleLabels = this._autoscaleLabels?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupGkeIntegrationGke | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoUpdate = undefined;
      this._autoscaleCooldown = undefined;
      this._autoscaleIsAutoConfig = undefined;
      this._autoscaleIsEnabled = undefined;
      this._clusterId = undefined;
      this._location = undefined;
      this._autoscaleDown.internalValue = undefined;
      this._autoscaleHeadroom.internalValue = undefined;
      this._autoscaleLabels.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoUpdate = value.autoUpdate;
      this._autoscaleCooldown = value.autoscaleCooldown;
      this._autoscaleIsAutoConfig = value.autoscaleIsAutoConfig;
      this._autoscaleIsEnabled = value.autoscaleIsEnabled;
      this._clusterId = value.clusterId;
      this._location = value.location;
      this._autoscaleDown.internalValue = value.autoscaleDown;
      this._autoscaleHeadroom.internalValue = value.autoscaleHeadroom;
      this._autoscaleLabels.internalValue = value.autoscaleLabels;
    }
  }

  // auto_update - computed: false, optional: true, required: false
  private _autoUpdate?: boolean | cdktf.IResolvable; 
  public get autoUpdate() {
    return this.getBooleanAttribute('auto_update');
  }
  public set autoUpdate(value: boolean | cdktf.IResolvable) {
    this._autoUpdate = value;
  }
  public resetAutoUpdate() {
    this._autoUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpdateInput() {
    return this._autoUpdate;
  }

  // autoscale_cooldown - computed: false, optional: true, required: false
  private _autoscaleCooldown?: number; 
  public get autoscaleCooldown() {
    return this.getNumberAttribute('autoscale_cooldown');
  }
  public set autoscaleCooldown(value: number) {
    this._autoscaleCooldown = value;
  }
  public resetAutoscaleCooldown() {
    this._autoscaleCooldown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleCooldownInput() {
    return this._autoscaleCooldown;
  }

  // autoscale_is_auto_config - computed: false, optional: true, required: false
  private _autoscaleIsAutoConfig?: boolean | cdktf.IResolvable; 
  public get autoscaleIsAutoConfig() {
    return this.getBooleanAttribute('autoscale_is_auto_config');
  }
  public set autoscaleIsAutoConfig(value: boolean | cdktf.IResolvable) {
    this._autoscaleIsAutoConfig = value;
  }
  public resetAutoscaleIsAutoConfig() {
    this._autoscaleIsAutoConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleIsAutoConfigInput() {
    return this._autoscaleIsAutoConfig;
  }

  // autoscale_is_enabled - computed: false, optional: true, required: false
  private _autoscaleIsEnabled?: boolean | cdktf.IResolvable; 
  public get autoscaleIsEnabled() {
    return this.getBooleanAttribute('autoscale_is_enabled');
  }
  public set autoscaleIsEnabled(value: boolean | cdktf.IResolvable) {
    this._autoscaleIsEnabled = value;
  }
  public resetAutoscaleIsEnabled() {
    this._autoscaleIsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleIsEnabledInput() {
    return this._autoscaleIsEnabled;
  }

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
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

  // autoscale_down - computed: false, optional: true, required: false
  private _autoscaleDown = new ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference(this, "autoscale_down");
  public get autoscaleDown() {
    return this._autoscaleDown;
  }
  public putAutoscaleDown(value: ElastigroupGkeIntegrationGkeAutoscaleDown) {
    this._autoscaleDown.internalValue = value;
  }
  public resetAutoscaleDown() {
    this._autoscaleDown.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleDownInput() {
    return this._autoscaleDown.internalValue;
  }

  // autoscale_headroom - computed: false, optional: true, required: false
  private _autoscaleHeadroom = new ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference(this, "autoscale_headroom");
  public get autoscaleHeadroom() {
    return this._autoscaleHeadroom;
  }
  public putAutoscaleHeadroom(value: ElastigroupGkeIntegrationGkeAutoscaleHeadroom) {
    this._autoscaleHeadroom.internalValue = value;
  }
  public resetAutoscaleHeadroom() {
    this._autoscaleHeadroom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleHeadroomInput() {
    return this._autoscaleHeadroom.internalValue;
  }

  // autoscale_labels - computed: false, optional: true, required: false
  private _autoscaleLabels = new ElastigroupGkeIntegrationGkeAutoscaleLabelsList(this, "autoscale_labels", true);
  public get autoscaleLabels() {
    return this._autoscaleLabels;
  }
  public putAutoscaleLabels(value: ElastigroupGkeIntegrationGkeAutoscaleLabels[] | cdktf.IResolvable) {
    this._autoscaleLabels.internalValue = value;
  }
  public resetAutoscaleLabels() {
    this._autoscaleLabels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleLabelsInput() {
    return this._autoscaleLabels.internalValue;
  }
}
export interface ElastigroupGkeLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#key ElastigroupGke#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#value ElastigroupGke#value}
  */
  readonly value: string;
}

export function elastigroupGkeLabelsToTerraform(struct?: ElastigroupGkeLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function elastigroupGkeLabelsToHclTerraform(struct?: ElastigroupGkeLabels | cdktf.IResolvable): any {
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

export class ElastigroupGkeLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupGkeLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: ElastigroupGkeLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._key = value.key;
      this._value = value.value;
    }
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

export class ElastigroupGkeLabelsList extends cdktf.ComplexList {
  public internalValue? : ElastigroupGkeLabels[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupGkeLabelsOutputReference {
    return new ElastigroupGkeLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupGkeMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#key ElastigroupGke#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#value ElastigroupGke#value}
  */
  readonly value: string;
}

export function elastigroupGkeMetadataToTerraform(struct?: ElastigroupGkeMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function elastigroupGkeMetadataToHclTerraform(struct?: ElastigroupGkeMetadata | cdktf.IResolvable): any {
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

export class ElastigroupGkeMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupGkeMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: ElastigroupGkeMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._key = value.key;
      this._value = value.value;
    }
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

export class ElastigroupGkeMetadataList extends cdktf.ComplexList {
  public internalValue? : ElastigroupGkeMetadata[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupGkeMetadataOutputReference {
    return new ElastigroupGkeMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupGkeNetworkInterfaceAccessConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#name ElastigroupGke#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#type ElastigroupGke#type}
  */
  readonly type?: string;
}

export function elastigroupGkeNetworkInterfaceAccessConfigsToTerraform(struct?: ElastigroupGkeNetworkInterfaceAccessConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function elastigroupGkeNetworkInterfaceAccessConfigsToHclTerraform(struct?: ElastigroupGkeNetworkInterfaceAccessConfigs | cdktf.IResolvable): any {
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

export class ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupGkeNetworkInterfaceAccessConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupGkeNetworkInterfaceAccessConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
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

export class ElastigroupGkeNetworkInterfaceAccessConfigsList extends cdktf.ComplexList {
  public internalValue? : ElastigroupGkeNetworkInterfaceAccessConfigs[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference {
    return new ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupGkeNetworkInterfaceAliasIpRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#ip_cidr_range ElastigroupGke#ip_cidr_range}
  */
  readonly ipCidrRange: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#subnetwork_range_name ElastigroupGke#subnetwork_range_name}
  */
  readonly subnetworkRangeName: string;
}

export function elastigroupGkeNetworkInterfaceAliasIpRangesToTerraform(struct?: ElastigroupGkeNetworkInterfaceAliasIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_cidr_range: cdktf.stringToTerraform(struct!.ipCidrRange),
    subnetwork_range_name: cdktf.stringToTerraform(struct!.subnetworkRangeName),
  }
}


export function elastigroupGkeNetworkInterfaceAliasIpRangesToHclTerraform(struct?: ElastigroupGkeNetworkInterfaceAliasIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_cidr_range: {
      value: cdktf.stringToHclTerraform(struct!.ipCidrRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnetwork_range_name: {
      value: cdktf.stringToHclTerraform(struct!.subnetworkRangeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupGkeNetworkInterfaceAliasIpRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipCidrRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipCidrRange = this._ipCidrRange;
    }
    if (this._subnetworkRangeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetworkRangeName = this._subnetworkRangeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupGkeNetworkInterfaceAliasIpRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipCidrRange = undefined;
      this._subnetworkRangeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipCidrRange = value.ipCidrRange;
      this._subnetworkRangeName = value.subnetworkRangeName;
    }
  }

  // ip_cidr_range - computed: false, optional: false, required: true
  private _ipCidrRange?: string; 
  public get ipCidrRange() {
    return this.getStringAttribute('ip_cidr_range');
  }
  public set ipCidrRange(value: string) {
    this._ipCidrRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipCidrRangeInput() {
    return this._ipCidrRange;
  }

  // subnetwork_range_name - computed: false, optional: false, required: true
  private _subnetworkRangeName?: string; 
  public get subnetworkRangeName() {
    return this.getStringAttribute('subnetwork_range_name');
  }
  public set subnetworkRangeName(value: string) {
    this._subnetworkRangeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetworkRangeNameInput() {
    return this._subnetworkRangeName;
  }
}

export class ElastigroupGkeNetworkInterfaceAliasIpRangesList extends cdktf.ComplexList {
  public internalValue? : ElastigroupGkeNetworkInterfaceAliasIpRanges[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference {
    return new ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupGkeNetworkInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#network ElastigroupGke#network}
  */
  readonly network: string;
  /**
  * access_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#access_configs ElastigroupGke#access_configs}
  */
  readonly accessConfigs?: ElastigroupGkeNetworkInterfaceAccessConfigs[] | cdktf.IResolvable;
  /**
  * alias_ip_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#alias_ip_ranges ElastigroupGke#alias_ip_ranges}
  */
  readonly aliasIpRanges?: ElastigroupGkeNetworkInterfaceAliasIpRanges[] | cdktf.IResolvable;
}

export function elastigroupGkeNetworkInterfaceToTerraform(struct?: ElastigroupGkeNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: cdktf.stringToTerraform(struct!.network),
    access_configs: cdktf.listMapper(elastigroupGkeNetworkInterfaceAccessConfigsToTerraform, true)(struct!.accessConfigs),
    alias_ip_ranges: cdktf.listMapper(elastigroupGkeNetworkInterfaceAliasIpRangesToTerraform, true)(struct!.aliasIpRanges),
  }
}


export function elastigroupGkeNetworkInterfaceToHclTerraform(struct?: ElastigroupGkeNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_configs: {
      value: cdktf.listMapperHcl(elastigroupGkeNetworkInterfaceAccessConfigsToHclTerraform, true)(struct!.accessConfigs),
      isBlock: true,
      type: "set",
      storageClassType: "ElastigroupGkeNetworkInterfaceAccessConfigsList",
    },
    alias_ip_ranges: {
      value: cdktf.listMapperHcl(elastigroupGkeNetworkInterfaceAliasIpRangesToHclTerraform, true)(struct!.aliasIpRanges),
      isBlock: true,
      type: "set",
      storageClassType: "ElastigroupGkeNetworkInterfaceAliasIpRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupGkeNetworkInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupGkeNetworkInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._accessConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessConfigs = this._accessConfigs?.internalValue;
    }
    if (this._aliasIpRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aliasIpRanges = this._aliasIpRanges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupGkeNetworkInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._network = undefined;
      this._accessConfigs.internalValue = undefined;
      this._aliasIpRanges.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._network = value.network;
      this._accessConfigs.internalValue = value.accessConfigs;
      this._aliasIpRanges.internalValue = value.aliasIpRanges;
    }
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // access_configs - computed: false, optional: true, required: false
  private _accessConfigs = new ElastigroupGkeNetworkInterfaceAccessConfigsList(this, "access_configs", true);
  public get accessConfigs() {
    return this._accessConfigs;
  }
  public putAccessConfigs(value: ElastigroupGkeNetworkInterfaceAccessConfigs[] | cdktf.IResolvable) {
    this._accessConfigs.internalValue = value;
  }
  public resetAccessConfigs() {
    this._accessConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessConfigsInput() {
    return this._accessConfigs.internalValue;
  }

  // alias_ip_ranges - computed: false, optional: true, required: false
  private _aliasIpRanges = new ElastigroupGkeNetworkInterfaceAliasIpRangesList(this, "alias_ip_ranges", true);
  public get aliasIpRanges() {
    return this._aliasIpRanges;
  }
  public putAliasIpRanges(value: ElastigroupGkeNetworkInterfaceAliasIpRanges[] | cdktf.IResolvable) {
    this._aliasIpRanges.internalValue = value;
  }
  public resetAliasIpRanges() {
    this._aliasIpRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasIpRangesInput() {
    return this._aliasIpRanges.internalValue;
  }
}

export class ElastigroupGkeNetworkInterfaceList extends cdktf.ComplexList {
  public internalValue? : ElastigroupGkeNetworkInterface[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupGkeNetworkInterfaceOutputReference {
    return new ElastigroupGkeNetworkInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupGkeRevertToPreemptible {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#perform_at ElastigroupGke#perform_at}
  */
  readonly performAt: string;
}

export function elastigroupGkeRevertToPreemptibleToTerraform(struct?: ElastigroupGkeRevertToPreemptible | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    perform_at: cdktf.stringToTerraform(struct!.performAt),
  }
}


export function elastigroupGkeRevertToPreemptibleToHclTerraform(struct?: ElastigroupGkeRevertToPreemptible | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    perform_at: {
      value: cdktf.stringToHclTerraform(struct!.performAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupGkeRevertToPreemptibleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupGkeRevertToPreemptible | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._performAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.performAt = this._performAt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupGkeRevertToPreemptible | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._performAt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._performAt = value.performAt;
    }
  }

  // perform_at - computed: false, optional: false, required: true
  private _performAt?: string; 
  public get performAt() {
    return this.getStringAttribute('perform_at');
  }
  public set performAt(value: string) {
    this._performAt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get performAtInput() {
    return this._performAt;
  }
}

export class ElastigroupGkeRevertToPreemptibleList extends cdktf.ComplexList {
  public internalValue? : ElastigroupGkeRevertToPreemptible[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupGkeRevertToPreemptibleOutputReference {
    return new ElastigroupGkeRevertToPreemptibleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupGkeScalingDownPolicyDimensions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#name ElastigroupGke#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#value ElastigroupGke#value}
  */
  readonly value?: string;
}

export function elastigroupGkeScalingDownPolicyDimensionsToTerraform(struct?: ElastigroupGkeScalingDownPolicyDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function elastigroupGkeScalingDownPolicyDimensionsToHclTerraform(struct?: ElastigroupGkeScalingDownPolicyDimensions | cdktf.IResolvable): any {
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

export class ElastigroupGkeScalingDownPolicyDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupGkeScalingDownPolicyDimensions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ElastigroupGkeScalingDownPolicyDimensions | cdktf.IResolvable | undefined) {
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

export class ElastigroupGkeScalingDownPolicyDimensionsList extends cdktf.ComplexList {
  public internalValue? : ElastigroupGkeScalingDownPolicyDimensions[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupGkeScalingDownPolicyDimensionsOutputReference {
    return new ElastigroupGkeScalingDownPolicyDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupGkeScalingDownPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#action_type ElastigroupGke#action_type}
  */
  readonly actionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#adjustment ElastigroupGke#adjustment}
  */
  readonly adjustment?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#cooldown ElastigroupGke#cooldown}
  */
  readonly cooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#evaluation_periods ElastigroupGke#evaluation_periods}
  */
  readonly evaluationPeriods?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#metric_name ElastigroupGke#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#namespace ElastigroupGke#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#operator ElastigroupGke#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#period ElastigroupGke#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#policy_name ElastigroupGke#policy_name}
  */
  readonly policyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#source ElastigroupGke#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#statistic ElastigroupGke#statistic}
  */
  readonly statistic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#threshold ElastigroupGke#threshold}
  */
  readonly threshold: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#unit ElastigroupGke#unit}
  */
  readonly unit: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#dimensions ElastigroupGke#dimensions}
  */
  readonly dimensions?: ElastigroupGkeScalingDownPolicyDimensions[] | cdktf.IResolvable;
}

export function elastigroupGkeScalingDownPolicyToTerraform(struct?: ElastigroupGkeScalingDownPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_type: cdktf.stringToTerraform(struct!.actionType),
    adjustment: cdktf.numberToTerraform(struct!.adjustment),
    cooldown: cdktf.numberToTerraform(struct!.cooldown),
    evaluation_periods: cdktf.numberToTerraform(struct!.evaluationPeriods),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    operator: cdktf.stringToTerraform(struct!.operator),
    period: cdktf.numberToTerraform(struct!.period),
    policy_name: cdktf.stringToTerraform(struct!.policyName),
    source: cdktf.stringToTerraform(struct!.source),
    statistic: cdktf.stringToTerraform(struct!.statistic),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    unit: cdktf.stringToTerraform(struct!.unit),
    dimensions: cdktf.listMapper(elastigroupGkeScalingDownPolicyDimensionsToTerraform, true)(struct!.dimensions),
  }
}


export function elastigroupGkeScalingDownPolicyToHclTerraform(struct?: ElastigroupGkeScalingDownPolicy | cdktf.IResolvable): any {
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
    adjustment: {
      value: cdktf.numberToHclTerraform(struct!.adjustment),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cooldown: {
      value: cdktf.numberToHclTerraform(struct!.cooldown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    evaluation_periods: {
      value: cdktf.numberToHclTerraform(struct!.evaluationPeriods),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
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
    period: {
      value: cdktf.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policy_name: {
      value: cdktf.stringToHclTerraform(struct!.policyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    statistic: {
      value: cdktf.stringToHclTerraform(struct!.statistic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimensions: {
      value: cdktf.listMapperHcl(elastigroupGkeScalingDownPolicyDimensionsToHclTerraform, true)(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "ElastigroupGkeScalingDownPolicyDimensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupGkeScalingDownPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupGkeScalingDownPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    if (this._adjustment !== undefined) {
      hasAnyValues = true;
      internalValueResult.adjustment = this._adjustment;
    }
    if (this._cooldown !== undefined) {
      hasAnyValues = true;
      internalValueResult.cooldown = this._cooldown;
    }
    if (this._evaluationPeriods !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationPeriods = this._evaluationPeriods;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._policyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyName = this._policyName;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._statistic !== undefined) {
      hasAnyValues = true;
      internalValueResult.statistic = this._statistic;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupGkeScalingDownPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionType = undefined;
      this._adjustment = undefined;
      this._cooldown = undefined;
      this._evaluationPeriods = undefined;
      this._metricName = undefined;
      this._namespace = undefined;
      this._operator = undefined;
      this._period = undefined;
      this._policyName = undefined;
      this._source = undefined;
      this._statistic = undefined;
      this._threshold = undefined;
      this._unit = undefined;
      this._dimensions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionType = value.actionType;
      this._adjustment = value.adjustment;
      this._cooldown = value.cooldown;
      this._evaluationPeriods = value.evaluationPeriods;
      this._metricName = value.metricName;
      this._namespace = value.namespace;
      this._operator = value.operator;
      this._period = value.period;
      this._policyName = value.policyName;
      this._source = value.source;
      this._statistic = value.statistic;
      this._threshold = value.threshold;
      this._unit = value.unit;
      this._dimensions.internalValue = value.dimensions;
    }
  }

  // action_type - computed: false, optional: true, required: false
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  public resetActionType() {
    this._actionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // adjustment - computed: false, optional: true, required: false
  private _adjustment?: number; 
  public get adjustment() {
    return this.getNumberAttribute('adjustment');
  }
  public set adjustment(value: number) {
    this._adjustment = value;
  }
  public resetAdjustment() {
    this._adjustment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adjustmentInput() {
    return this._adjustment;
  }

  // cooldown - computed: true, optional: true, required: false
  private _cooldown?: number; 
  public get cooldown() {
    return this.getNumberAttribute('cooldown');
  }
  public set cooldown(value: number) {
    this._cooldown = value;
  }
  public resetCooldown() {
    this._cooldown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cooldownInput() {
    return this._cooldown;
  }

  // evaluation_periods - computed: true, optional: true, required: false
  private _evaluationPeriods?: number; 
  public get evaluationPeriods() {
    return this.getNumberAttribute('evaluation_periods');
  }
  public set evaluationPeriods(value: number) {
    this._evaluationPeriods = value;
  }
  public resetEvaluationPeriods() {
    this._evaluationPeriods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationPeriodsInput() {
    return this._evaluationPeriods;
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // operator - computed: true, optional: true, required: false
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

  // period - computed: true, optional: true, required: false
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

  // policy_name - computed: false, optional: false, required: true
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // statistic - computed: true, optional: true, required: false
  private _statistic?: string; 
  public get statistic() {
    return this.getStringAttribute('statistic');
  }
  public set statistic(value: string) {
    this._statistic = value;
  }
  public resetStatistic() {
    this._statistic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticInput() {
    return this._statistic;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new ElastigroupGkeScalingDownPolicyDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: ElastigroupGkeScalingDownPolicyDimensions[] | cdktf.IResolvable) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }
}

export class ElastigroupGkeScalingDownPolicyList extends cdktf.ComplexList {
  public internalValue? : ElastigroupGkeScalingDownPolicy[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupGkeScalingDownPolicyOutputReference {
    return new ElastigroupGkeScalingDownPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupGkeScalingUpPolicyDimensions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#name ElastigroupGke#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#value ElastigroupGke#value}
  */
  readonly value?: string;
}

export function elastigroupGkeScalingUpPolicyDimensionsToTerraform(struct?: ElastigroupGkeScalingUpPolicyDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function elastigroupGkeScalingUpPolicyDimensionsToHclTerraform(struct?: ElastigroupGkeScalingUpPolicyDimensions | cdktf.IResolvable): any {
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

export class ElastigroupGkeScalingUpPolicyDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupGkeScalingUpPolicyDimensions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ElastigroupGkeScalingUpPolicyDimensions | cdktf.IResolvable | undefined) {
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

export class ElastigroupGkeScalingUpPolicyDimensionsList extends cdktf.ComplexList {
  public internalValue? : ElastigroupGkeScalingUpPolicyDimensions[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupGkeScalingUpPolicyDimensionsOutputReference {
    return new ElastigroupGkeScalingUpPolicyDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupGkeScalingUpPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#action_type ElastigroupGke#action_type}
  */
  readonly actionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#adjustment ElastigroupGke#adjustment}
  */
  readonly adjustment?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#cooldown ElastigroupGke#cooldown}
  */
  readonly cooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#evaluation_periods ElastigroupGke#evaluation_periods}
  */
  readonly evaluationPeriods?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#metric_name ElastigroupGke#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#namespace ElastigroupGke#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#operator ElastigroupGke#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#period ElastigroupGke#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#policy_name ElastigroupGke#policy_name}
  */
  readonly policyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#source ElastigroupGke#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#statistic ElastigroupGke#statistic}
  */
  readonly statistic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#threshold ElastigroupGke#threshold}
  */
  readonly threshold: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#unit ElastigroupGke#unit}
  */
  readonly unit: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#dimensions ElastigroupGke#dimensions}
  */
  readonly dimensions?: ElastigroupGkeScalingUpPolicyDimensions[] | cdktf.IResolvable;
}

export function elastigroupGkeScalingUpPolicyToTerraform(struct?: ElastigroupGkeScalingUpPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_type: cdktf.stringToTerraform(struct!.actionType),
    adjustment: cdktf.numberToTerraform(struct!.adjustment),
    cooldown: cdktf.numberToTerraform(struct!.cooldown),
    evaluation_periods: cdktf.numberToTerraform(struct!.evaluationPeriods),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    operator: cdktf.stringToTerraform(struct!.operator),
    period: cdktf.numberToTerraform(struct!.period),
    policy_name: cdktf.stringToTerraform(struct!.policyName),
    source: cdktf.stringToTerraform(struct!.source),
    statistic: cdktf.stringToTerraform(struct!.statistic),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    unit: cdktf.stringToTerraform(struct!.unit),
    dimensions: cdktf.listMapper(elastigroupGkeScalingUpPolicyDimensionsToTerraform, true)(struct!.dimensions),
  }
}


export function elastigroupGkeScalingUpPolicyToHclTerraform(struct?: ElastigroupGkeScalingUpPolicy | cdktf.IResolvable): any {
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
    adjustment: {
      value: cdktf.numberToHclTerraform(struct!.adjustment),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cooldown: {
      value: cdktf.numberToHclTerraform(struct!.cooldown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    evaluation_periods: {
      value: cdktf.numberToHclTerraform(struct!.evaluationPeriods),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
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
    period: {
      value: cdktf.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policy_name: {
      value: cdktf.stringToHclTerraform(struct!.policyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    statistic: {
      value: cdktf.stringToHclTerraform(struct!.statistic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimensions: {
      value: cdktf.listMapperHcl(elastigroupGkeScalingUpPolicyDimensionsToHclTerraform, true)(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "ElastigroupGkeScalingUpPolicyDimensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupGkeScalingUpPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupGkeScalingUpPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    if (this._adjustment !== undefined) {
      hasAnyValues = true;
      internalValueResult.adjustment = this._adjustment;
    }
    if (this._cooldown !== undefined) {
      hasAnyValues = true;
      internalValueResult.cooldown = this._cooldown;
    }
    if (this._evaluationPeriods !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationPeriods = this._evaluationPeriods;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._policyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyName = this._policyName;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._statistic !== undefined) {
      hasAnyValues = true;
      internalValueResult.statistic = this._statistic;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupGkeScalingUpPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionType = undefined;
      this._adjustment = undefined;
      this._cooldown = undefined;
      this._evaluationPeriods = undefined;
      this._metricName = undefined;
      this._namespace = undefined;
      this._operator = undefined;
      this._period = undefined;
      this._policyName = undefined;
      this._source = undefined;
      this._statistic = undefined;
      this._threshold = undefined;
      this._unit = undefined;
      this._dimensions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionType = value.actionType;
      this._adjustment = value.adjustment;
      this._cooldown = value.cooldown;
      this._evaluationPeriods = value.evaluationPeriods;
      this._metricName = value.metricName;
      this._namespace = value.namespace;
      this._operator = value.operator;
      this._period = value.period;
      this._policyName = value.policyName;
      this._source = value.source;
      this._statistic = value.statistic;
      this._threshold = value.threshold;
      this._unit = value.unit;
      this._dimensions.internalValue = value.dimensions;
    }
  }

  // action_type - computed: false, optional: true, required: false
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  public resetActionType() {
    this._actionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // adjustment - computed: false, optional: true, required: false
  private _adjustment?: number; 
  public get adjustment() {
    return this.getNumberAttribute('adjustment');
  }
  public set adjustment(value: number) {
    this._adjustment = value;
  }
  public resetAdjustment() {
    this._adjustment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adjustmentInput() {
    return this._adjustment;
  }

  // cooldown - computed: true, optional: true, required: false
  private _cooldown?: number; 
  public get cooldown() {
    return this.getNumberAttribute('cooldown');
  }
  public set cooldown(value: number) {
    this._cooldown = value;
  }
  public resetCooldown() {
    this._cooldown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cooldownInput() {
    return this._cooldown;
  }

  // evaluation_periods - computed: true, optional: true, required: false
  private _evaluationPeriods?: number; 
  public get evaluationPeriods() {
    return this.getNumberAttribute('evaluation_periods');
  }
  public set evaluationPeriods(value: number) {
    this._evaluationPeriods = value;
  }
  public resetEvaluationPeriods() {
    this._evaluationPeriods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationPeriodsInput() {
    return this._evaluationPeriods;
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // operator - computed: true, optional: true, required: false
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

  // period - computed: true, optional: true, required: false
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

  // policy_name - computed: false, optional: false, required: true
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // statistic - computed: true, optional: true, required: false
  private _statistic?: string; 
  public get statistic() {
    return this.getStringAttribute('statistic');
  }
  public set statistic(value: string) {
    this._statistic = value;
  }
  public resetStatistic() {
    this._statistic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticInput() {
    return this._statistic;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new ElastigroupGkeScalingUpPolicyDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: ElastigroupGkeScalingUpPolicyDimensions[] | cdktf.IResolvable) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }
}

export class ElastigroupGkeScalingUpPolicyList extends cdktf.ComplexList {
  public internalValue? : ElastigroupGkeScalingUpPolicy[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupGkeScalingUpPolicyOutputReference {
    return new ElastigroupGkeScalingUpPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupGkeShieldedInstanceConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#enable_integrity_monitoring ElastigroupGke#enable_integrity_monitoring}
  */
  readonly enableIntegrityMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#enable_secure_boot ElastigroupGke#enable_secure_boot}
  */
  readonly enableSecureBoot?: boolean | cdktf.IResolvable;
}

export function elastigroupGkeShieldedInstanceConfigToTerraform(struct?: ElastigroupGkeShieldedInstanceConfigOutputReference | ElastigroupGkeShieldedInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_integrity_monitoring: cdktf.booleanToTerraform(struct!.enableIntegrityMonitoring),
    enable_secure_boot: cdktf.booleanToTerraform(struct!.enableSecureBoot),
  }
}


export function elastigroupGkeShieldedInstanceConfigToHclTerraform(struct?: ElastigroupGkeShieldedInstanceConfigOutputReference | ElastigroupGkeShieldedInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_integrity_monitoring: {
      value: cdktf.booleanToHclTerraform(struct!.enableIntegrityMonitoring),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_secure_boot: {
      value: cdktf.booleanToHclTerraform(struct!.enableSecureBoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupGkeShieldedInstanceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupGkeShieldedInstanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableIntegrityMonitoring !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIntegrityMonitoring = this._enableIntegrityMonitoring;
    }
    if (this._enableSecureBoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSecureBoot = this._enableSecureBoot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupGkeShieldedInstanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableIntegrityMonitoring = undefined;
      this._enableSecureBoot = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableIntegrityMonitoring = value.enableIntegrityMonitoring;
      this._enableSecureBoot = value.enableSecureBoot;
    }
  }

  // enable_integrity_monitoring - computed: false, optional: true, required: false
  private _enableIntegrityMonitoring?: boolean | cdktf.IResolvable; 
  public get enableIntegrityMonitoring() {
    return this.getBooleanAttribute('enable_integrity_monitoring');
  }
  public set enableIntegrityMonitoring(value: boolean | cdktf.IResolvable) {
    this._enableIntegrityMonitoring = value;
  }
  public resetEnableIntegrityMonitoring() {
    this._enableIntegrityMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIntegrityMonitoringInput() {
    return this._enableIntegrityMonitoring;
  }

  // enable_secure_boot - computed: false, optional: true, required: false
  private _enableSecureBoot?: boolean | cdktf.IResolvable; 
  public get enableSecureBoot() {
    return this.getBooleanAttribute('enable_secure_boot');
  }
  public set enableSecureBoot(value: boolean | cdktf.IResolvable) {
    this._enableSecureBoot = value;
  }
  public resetEnableSecureBoot() {
    this._enableSecureBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSecureBootInput() {
    return this._enableSecureBoot;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke spotinst_elastigroup_gke}
*/
export class ElastigroupGke extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spotinst_elastigroup_gke";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ElastigroupGke resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ElastigroupGke to import
  * @param importFromId The id of the existing ElastigroupGke that should be imported. Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ElastigroupGke to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spotinst_elastigroup_gke", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_gke spotinst_elastigroup_gke} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElastigroupGkeConfig
  */
  public constructor(scope: Construct, id: string, config: ElastigroupGkeConfig) {
    super(scope, id, {
      terraformResourceType: 'spotinst_elastigroup_gke',
      terraformGeneratorMetadata: {
        providerName: 'spotinst',
        providerVersion: '1.230.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._clusterZoneName = config.clusterZoneName;
    this._desiredCapacity = config.desiredCapacity;
    this._drainingTimeout = config.drainingTimeout;
    this._fallbackToOndemand = config.fallbackToOndemand;
    this._id = config.id;
    this._instanceNamePrefix = config.instanceNamePrefix;
    this._instanceTypesOndemand = config.instanceTypesOndemand;
    this._instanceTypesPreemptible = config.instanceTypesPreemptible;
    this._ipForwarding = config.ipForwarding;
    this._maxSize = config.maxSize;
    this._minCpuPlatform = config.minCpuPlatform;
    this._minSize = config.minSize;
    this._name = config.name;
    this._nodeImage = config.nodeImage;
    this._ondemandCount = config.ondemandCount;
    this._optimizationWindows = config.optimizationWindows;
    this._preemptiblePercentage = config.preemptiblePercentage;
    this._provisioningModel = config.provisioningModel;
    this._serviceAccount = config.serviceAccount;
    this._shouldUtilizeCommitments = config.shouldUtilizeCommitments;
    this._shutdownScript = config.shutdownScript;
    this._startupScript = config.startupScript;
    this._tags = config.tags;
    this._backendServices.internalValue = config.backendServices;
    this._disk.internalValue = config.disk;
    this._gpu.internalValue = config.gpu;
    this._instanceTypesCustom.internalValue = config.instanceTypesCustom;
    this._integrationDockerSwarm.internalValue = config.integrationDockerSwarm;
    this._integrationGke.internalValue = config.integrationGke;
    this._labels.internalValue = config.labels;
    this._metadata.internalValue = config.metadata;
    this._networkInterface.internalValue = config.networkInterface;
    this._revertToPreemptible.internalValue = config.revertToPreemptible;
    this._scalingDownPolicy.internalValue = config.scalingDownPolicy;
    this._scalingUpPolicy.internalValue = config.scalingUpPolicy;
    this._shieldedInstanceConfig.internalValue = config.shieldedInstanceConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // cluster_zone_name - computed: false, optional: false, required: true
  private _clusterZoneName?: string; 
  public get clusterZoneName() {
    return this.getStringAttribute('cluster_zone_name');
  }
  public set clusterZoneName(value: string) {
    this._clusterZoneName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterZoneNameInput() {
    return this._clusterZoneName;
  }

  // desired_capacity - computed: false, optional: false, required: true
  private _desiredCapacity?: number; 
  public get desiredCapacity() {
    return this.getNumberAttribute('desired_capacity');
  }
  public set desiredCapacity(value: number) {
    this._desiredCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredCapacityInput() {
    return this._desiredCapacity;
  }

  // draining_timeout - computed: false, optional: true, required: false
  private _drainingTimeout?: number; 
  public get drainingTimeout() {
    return this.getNumberAttribute('draining_timeout');
  }
  public set drainingTimeout(value: number) {
    this._drainingTimeout = value;
  }
  public resetDrainingTimeout() {
    this._drainingTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drainingTimeoutInput() {
    return this._drainingTimeout;
  }

  // fallback_to_ondemand - computed: false, optional: true, required: false
  private _fallbackToOndemand?: boolean | cdktf.IResolvable; 
  public get fallbackToOndemand() {
    return this.getBooleanAttribute('fallback_to_ondemand');
  }
  public set fallbackToOndemand(value: boolean | cdktf.IResolvable) {
    this._fallbackToOndemand = value;
  }
  public resetFallbackToOndemand() {
    this._fallbackToOndemand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackToOndemandInput() {
    return this._fallbackToOndemand;
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

  // instance_name_prefix - computed: false, optional: true, required: false
  private _instanceNamePrefix?: string; 
  public get instanceNamePrefix() {
    return this.getStringAttribute('instance_name_prefix');
  }
  public set instanceNamePrefix(value: string) {
    this._instanceNamePrefix = value;
  }
  public resetInstanceNamePrefix() {
    this._instanceNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNamePrefixInput() {
    return this._instanceNamePrefix;
  }

  // instance_types_ondemand - computed: false, optional: true, required: false
  private _instanceTypesOndemand?: string; 
  public get instanceTypesOndemand() {
    return this.getStringAttribute('instance_types_ondemand');
  }
  public set instanceTypesOndemand(value: string) {
    this._instanceTypesOndemand = value;
  }
  public resetInstanceTypesOndemand() {
    this._instanceTypesOndemand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypesOndemandInput() {
    return this._instanceTypesOndemand;
  }

  // instance_types_preemptible - computed: false, optional: true, required: false
  private _instanceTypesPreemptible?: string[]; 
  public get instanceTypesPreemptible() {
    return this.getListAttribute('instance_types_preemptible');
  }
  public set instanceTypesPreemptible(value: string[]) {
    this._instanceTypesPreemptible = value;
  }
  public resetInstanceTypesPreemptible() {
    this._instanceTypesPreemptible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypesPreemptibleInput() {
    return this._instanceTypesPreemptible;
  }

  // ip_forwarding - computed: false, optional: true, required: false
  private _ipForwarding?: boolean | cdktf.IResolvable; 
  public get ipForwarding() {
    return this.getBooleanAttribute('ip_forwarding');
  }
  public set ipForwarding(value: boolean | cdktf.IResolvable) {
    this._ipForwarding = value;
  }
  public resetIpForwarding() {
    this._ipForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipForwardingInput() {
    return this._ipForwarding;
  }

  // max_size - computed: true, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // min_cpu_platform - computed: false, optional: true, required: false
  private _minCpuPlatform?: string; 
  public get minCpuPlatform() {
    return this.getStringAttribute('min_cpu_platform');
  }
  public set minCpuPlatform(value: string) {
    this._minCpuPlatform = value;
  }
  public resetMinCpuPlatform() {
    this._minCpuPlatform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCpuPlatformInput() {
    return this._minCpuPlatform;
  }

  // min_size - computed: true, optional: true, required: false
  private _minSize?: number; 
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
  public set minSize(value: number) {
    this._minSize = value;
  }
  public resetMinSize() {
    this._minSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeInput() {
    return this._minSize;
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

  // node_image - computed: false, optional: true, required: false
  private _nodeImage?: string; 
  public get nodeImage() {
    return this.getStringAttribute('node_image');
  }
  public set nodeImage(value: string) {
    this._nodeImage = value;
  }
  public resetNodeImage() {
    this._nodeImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeImageInput() {
    return this._nodeImage;
  }

  // ondemand_count - computed: false, optional: true, required: false
  private _ondemandCount?: number; 
  public get ondemandCount() {
    return this.getNumberAttribute('ondemand_count');
  }
  public set ondemandCount(value: number) {
    this._ondemandCount = value;
  }
  public resetOndemandCount() {
    this._ondemandCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ondemandCountInput() {
    return this._ondemandCount;
  }

  // optimization_windows - computed: false, optional: true, required: false
  private _optimizationWindows?: string[]; 
  public get optimizationWindows() {
    return this.getListAttribute('optimization_windows');
  }
  public set optimizationWindows(value: string[]) {
    this._optimizationWindows = value;
  }
  public resetOptimizationWindows() {
    this._optimizationWindows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizationWindowsInput() {
    return this._optimizationWindows;
  }

  // preemptible_percentage - computed: false, optional: true, required: false
  private _preemptiblePercentage?: number; 
  public get preemptiblePercentage() {
    return this.getNumberAttribute('preemptible_percentage');
  }
  public set preemptiblePercentage(value: number) {
    this._preemptiblePercentage = value;
  }
  public resetPreemptiblePercentage() {
    this._preemptiblePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptiblePercentageInput() {
    return this._preemptiblePercentage;
  }

  // provisioning_model - computed: false, optional: true, required: false
  private _provisioningModel?: string; 
  public get provisioningModel() {
    return this.getStringAttribute('provisioning_model');
  }
  public set provisioningModel(value: string) {
    this._provisioningModel = value;
  }
  public resetProvisioningModel() {
    this._provisioningModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningModelInput() {
    return this._provisioningModel;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // should_utilize_commitments - computed: false, optional: true, required: false
  private _shouldUtilizeCommitments?: boolean | cdktf.IResolvable; 
  public get shouldUtilizeCommitments() {
    return this.getBooleanAttribute('should_utilize_commitments');
  }
  public set shouldUtilizeCommitments(value: boolean | cdktf.IResolvable) {
    this._shouldUtilizeCommitments = value;
  }
  public resetShouldUtilizeCommitments() {
    this._shouldUtilizeCommitments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldUtilizeCommitmentsInput() {
    return this._shouldUtilizeCommitments;
  }

  // shutdown_script - computed: false, optional: true, required: false
  private _shutdownScript?: string; 
  public get shutdownScript() {
    return this.getStringAttribute('shutdown_script');
  }
  public set shutdownScript(value: string) {
    this._shutdownScript = value;
  }
  public resetShutdownScript() {
    this._shutdownScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownScriptInput() {
    return this._shutdownScript;
  }

  // startup_script - computed: false, optional: true, required: false
  private _startupScript?: string; 
  public get startupScript() {
    return this.getStringAttribute('startup_script');
  }
  public set startupScript(value: string) {
    this._startupScript = value;
  }
  public resetStartupScript() {
    this._startupScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupScriptInput() {
    return this._startupScript;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // backend_services - computed: false, optional: true, required: false
  private _backendServices = new ElastigroupGkeBackendServicesList(this, "backend_services", true);
  public get backendServices() {
    return this._backendServices;
  }
  public putBackendServices(value: ElastigroupGkeBackendServices[] | cdktf.IResolvable) {
    this._backendServices.internalValue = value;
  }
  public resetBackendServices() {
    this._backendServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendServicesInput() {
    return this._backendServices.internalValue;
  }

  // disk - computed: false, optional: true, required: false
  private _disk = new ElastigroupGkeDiskList(this, "disk", true);
  public get disk() {
    return this._disk;
  }
  public putDisk(value: ElastigroupGkeDisk[] | cdktf.IResolvable) {
    this._disk.internalValue = value;
  }
  public resetDisk() {
    this._disk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk.internalValue;
  }

  // gpu - computed: false, optional: true, required: false
  private _gpu = new ElastigroupGkeGpuList(this, "gpu", true);
  public get gpu() {
    return this._gpu;
  }
  public putGpu(value: ElastigroupGkeGpu[] | cdktf.IResolvable) {
    this._gpu.internalValue = value;
  }
  public resetGpu() {
    this._gpu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuInput() {
    return this._gpu.internalValue;
  }

  // instance_types_custom - computed: false, optional: true, required: false
  private _instanceTypesCustom = new ElastigroupGkeInstanceTypesCustomList(this, "instance_types_custom", false);
  public get instanceTypesCustom() {
    return this._instanceTypesCustom;
  }
  public putInstanceTypesCustom(value: ElastigroupGkeInstanceTypesCustom[] | cdktf.IResolvable) {
    this._instanceTypesCustom.internalValue = value;
  }
  public resetInstanceTypesCustom() {
    this._instanceTypesCustom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypesCustomInput() {
    return this._instanceTypesCustom.internalValue;
  }

  // integration_docker_swarm - computed: false, optional: true, required: false
  private _integrationDockerSwarm = new ElastigroupGkeIntegrationDockerSwarmOutputReference(this, "integration_docker_swarm");
  public get integrationDockerSwarm() {
    return this._integrationDockerSwarm;
  }
  public putIntegrationDockerSwarm(value: ElastigroupGkeIntegrationDockerSwarm) {
    this._integrationDockerSwarm.internalValue = value;
  }
  public resetIntegrationDockerSwarm() {
    this._integrationDockerSwarm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationDockerSwarmInput() {
    return this._integrationDockerSwarm.internalValue;
  }

  // integration_gke - computed: false, optional: true, required: false
  private _integrationGke = new ElastigroupGkeIntegrationGkeOutputReference(this, "integration_gke");
  public get integrationGke() {
    return this._integrationGke;
  }
  public putIntegrationGke(value: ElastigroupGkeIntegrationGke) {
    this._integrationGke.internalValue = value;
  }
  public resetIntegrationGke() {
    this._integrationGke.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationGkeInput() {
    return this._integrationGke.internalValue;
  }

  // labels - computed: false, optional: true, required: false
  private _labels = new ElastigroupGkeLabelsList(this, "labels", true);
  public get labels() {
    return this._labels;
  }
  public putLabels(value: ElastigroupGkeLabels[] | cdktf.IResolvable) {
    this._labels.internalValue = value;
  }
  public resetLabels() {
    this._labels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new ElastigroupGkeMetadataList(this, "metadata", true);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: ElastigroupGkeMetadata[] | cdktf.IResolvable) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // network_interface - computed: false, optional: true, required: false
  private _networkInterface = new ElastigroupGkeNetworkInterfaceList(this, "network_interface", false);
  public get networkInterface() {
    return this._networkInterface;
  }
  public putNetworkInterface(value: ElastigroupGkeNetworkInterface[] | cdktf.IResolvable) {
    this._networkInterface.internalValue = value;
  }
  public resetNetworkInterface() {
    this._networkInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface.internalValue;
  }

  // revert_to_preemptible - computed: false, optional: true, required: false
  private _revertToPreemptible = new ElastigroupGkeRevertToPreemptibleList(this, "revert_to_preemptible", false);
  public get revertToPreemptible() {
    return this._revertToPreemptible;
  }
  public putRevertToPreemptible(value: ElastigroupGkeRevertToPreemptible[] | cdktf.IResolvable) {
    this._revertToPreemptible.internalValue = value;
  }
  public resetRevertToPreemptible() {
    this._revertToPreemptible.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revertToPreemptibleInput() {
    return this._revertToPreemptible.internalValue;
  }

  // scaling_down_policy - computed: false, optional: true, required: false
  private _scalingDownPolicy = new ElastigroupGkeScalingDownPolicyList(this, "scaling_down_policy", true);
  public get scalingDownPolicy() {
    return this._scalingDownPolicy;
  }
  public putScalingDownPolicy(value: ElastigroupGkeScalingDownPolicy[] | cdktf.IResolvable) {
    this._scalingDownPolicy.internalValue = value;
  }
  public resetScalingDownPolicy() {
    this._scalingDownPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingDownPolicyInput() {
    return this._scalingDownPolicy.internalValue;
  }

  // scaling_up_policy - computed: false, optional: true, required: false
  private _scalingUpPolicy = new ElastigroupGkeScalingUpPolicyList(this, "scaling_up_policy", true);
  public get scalingUpPolicy() {
    return this._scalingUpPolicy;
  }
  public putScalingUpPolicy(value: ElastigroupGkeScalingUpPolicy[] | cdktf.IResolvable) {
    this._scalingUpPolicy.internalValue = value;
  }
  public resetScalingUpPolicy() {
    this._scalingUpPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingUpPolicyInput() {
    return this._scalingUpPolicy.internalValue;
  }

  // shielded_instance_config - computed: false, optional: true, required: false
  private _shieldedInstanceConfig = new ElastigroupGkeShieldedInstanceConfigOutputReference(this, "shielded_instance_config");
  public get shieldedInstanceConfig() {
    return this._shieldedInstanceConfig;
  }
  public putShieldedInstanceConfig(value: ElastigroupGkeShieldedInstanceConfig) {
    this._shieldedInstanceConfig.internalValue = value;
  }
  public resetShieldedInstanceConfig() {
    this._shieldedInstanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shieldedInstanceConfigInput() {
    return this._shieldedInstanceConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      cluster_zone_name: cdktf.stringToTerraform(this._clusterZoneName),
      desired_capacity: cdktf.numberToTerraform(this._desiredCapacity),
      draining_timeout: cdktf.numberToTerraform(this._drainingTimeout),
      fallback_to_ondemand: cdktf.booleanToTerraform(this._fallbackToOndemand),
      id: cdktf.stringToTerraform(this._id),
      instance_name_prefix: cdktf.stringToTerraform(this._instanceNamePrefix),
      instance_types_ondemand: cdktf.stringToTerraform(this._instanceTypesOndemand),
      instance_types_preemptible: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instanceTypesPreemptible),
      ip_forwarding: cdktf.booleanToTerraform(this._ipForwarding),
      max_size: cdktf.numberToTerraform(this._maxSize),
      min_cpu_platform: cdktf.stringToTerraform(this._minCpuPlatform),
      min_size: cdktf.numberToTerraform(this._minSize),
      name: cdktf.stringToTerraform(this._name),
      node_image: cdktf.stringToTerraform(this._nodeImage),
      ondemand_count: cdktf.numberToTerraform(this._ondemandCount),
      optimization_windows: cdktf.listMapper(cdktf.stringToTerraform, false)(this._optimizationWindows),
      preemptible_percentage: cdktf.numberToTerraform(this._preemptiblePercentage),
      provisioning_model: cdktf.stringToTerraform(this._provisioningModel),
      service_account: cdktf.stringToTerraform(this._serviceAccount),
      should_utilize_commitments: cdktf.booleanToTerraform(this._shouldUtilizeCommitments),
      shutdown_script: cdktf.stringToTerraform(this._shutdownScript),
      startup_script: cdktf.stringToTerraform(this._startupScript),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      backend_services: cdktf.listMapper(elastigroupGkeBackendServicesToTerraform, true)(this._backendServices.internalValue),
      disk: cdktf.listMapper(elastigroupGkeDiskToTerraform, true)(this._disk.internalValue),
      gpu: cdktf.listMapper(elastigroupGkeGpuToTerraform, true)(this._gpu.internalValue),
      instance_types_custom: cdktf.listMapper(elastigroupGkeInstanceTypesCustomToTerraform, true)(this._instanceTypesCustom.internalValue),
      integration_docker_swarm: elastigroupGkeIntegrationDockerSwarmToTerraform(this._integrationDockerSwarm.internalValue),
      integration_gke: elastigroupGkeIntegrationGkeToTerraform(this._integrationGke.internalValue),
      labels: cdktf.listMapper(elastigroupGkeLabelsToTerraform, true)(this._labels.internalValue),
      metadata: cdktf.listMapper(elastigroupGkeMetadataToTerraform, true)(this._metadata.internalValue),
      network_interface: cdktf.listMapper(elastigroupGkeNetworkInterfaceToTerraform, true)(this._networkInterface.internalValue),
      revert_to_preemptible: cdktf.listMapper(elastigroupGkeRevertToPreemptibleToTerraform, true)(this._revertToPreemptible.internalValue),
      scaling_down_policy: cdktf.listMapper(elastigroupGkeScalingDownPolicyToTerraform, true)(this._scalingDownPolicy.internalValue),
      scaling_up_policy: cdktf.listMapper(elastigroupGkeScalingUpPolicyToTerraform, true)(this._scalingUpPolicy.internalValue),
      shielded_instance_config: elastigroupGkeShieldedInstanceConfigToTerraform(this._shieldedInstanceConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_zone_name: {
        value: cdktf.stringToHclTerraform(this._clusterZoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      desired_capacity: {
        value: cdktf.numberToHclTerraform(this._desiredCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      draining_timeout: {
        value: cdktf.numberToHclTerraform(this._drainingTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fallback_to_ondemand: {
        value: cdktf.booleanToHclTerraform(this._fallbackToOndemand),
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
      instance_name_prefix: {
        value: cdktf.stringToHclTerraform(this._instanceNamePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_types_ondemand: {
        value: cdktf.stringToHclTerraform(this._instanceTypesOndemand),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_types_preemptible: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._instanceTypesPreemptible),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ip_forwarding: {
        value: cdktf.booleanToHclTerraform(this._ipForwarding),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_size: {
        value: cdktf.numberToHclTerraform(this._maxSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_cpu_platform: {
        value: cdktf.stringToHclTerraform(this._minCpuPlatform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_size: {
        value: cdktf.numberToHclTerraform(this._minSize),
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
      node_image: {
        value: cdktf.stringToHclTerraform(this._nodeImage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ondemand_count: {
        value: cdktf.numberToHclTerraform(this._ondemandCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      optimization_windows: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._optimizationWindows),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      preemptible_percentage: {
        value: cdktf.numberToHclTerraform(this._preemptiblePercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      provisioning_model: {
        value: cdktf.stringToHclTerraform(this._provisioningModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account: {
        value: cdktf.stringToHclTerraform(this._serviceAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      should_utilize_commitments: {
        value: cdktf.booleanToHclTerraform(this._shouldUtilizeCommitments),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      shutdown_script: {
        value: cdktf.stringToHclTerraform(this._shutdownScript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      startup_script: {
        value: cdktf.stringToHclTerraform(this._startupScript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      backend_services: {
        value: cdktf.listMapperHcl(elastigroupGkeBackendServicesToHclTerraform, true)(this._backendServices.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ElastigroupGkeBackendServicesList",
      },
      disk: {
        value: cdktf.listMapperHcl(elastigroupGkeDiskToHclTerraform, true)(this._disk.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ElastigroupGkeDiskList",
      },
      gpu: {
        value: cdktf.listMapperHcl(elastigroupGkeGpuToHclTerraform, true)(this._gpu.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ElastigroupGkeGpuList",
      },
      instance_types_custom: {
        value: cdktf.listMapperHcl(elastigroupGkeInstanceTypesCustomToHclTerraform, true)(this._instanceTypesCustom.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElastigroupGkeInstanceTypesCustomList",
      },
      integration_docker_swarm: {
        value: elastigroupGkeIntegrationDockerSwarmToHclTerraform(this._integrationDockerSwarm.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElastigroupGkeIntegrationDockerSwarmList",
      },
      integration_gke: {
        value: elastigroupGkeIntegrationGkeToHclTerraform(this._integrationGke.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElastigroupGkeIntegrationGkeList",
      },
      labels: {
        value: cdktf.listMapperHcl(elastigroupGkeLabelsToHclTerraform, true)(this._labels.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ElastigroupGkeLabelsList",
      },
      metadata: {
        value: cdktf.listMapperHcl(elastigroupGkeMetadataToHclTerraform, true)(this._metadata.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ElastigroupGkeMetadataList",
      },
      network_interface: {
        value: cdktf.listMapperHcl(elastigroupGkeNetworkInterfaceToHclTerraform, true)(this._networkInterface.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElastigroupGkeNetworkInterfaceList",
      },
      revert_to_preemptible: {
        value: cdktf.listMapperHcl(elastigroupGkeRevertToPreemptibleToHclTerraform, true)(this._revertToPreemptible.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElastigroupGkeRevertToPreemptibleList",
      },
      scaling_down_policy: {
        value: cdktf.listMapperHcl(elastigroupGkeScalingDownPolicyToHclTerraform, true)(this._scalingDownPolicy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ElastigroupGkeScalingDownPolicyList",
      },
      scaling_up_policy: {
        value: cdktf.listMapperHcl(elastigroupGkeScalingUpPolicyToHclTerraform, true)(this._scalingUpPolicy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ElastigroupGkeScalingUpPolicyList",
      },
      shielded_instance_config: {
        value: elastigroupGkeShieldedInstanceConfigToHclTerraform(this._shieldedInstanceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElastigroupGkeShieldedInstanceConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
